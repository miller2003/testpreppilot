import fs from 'fs';
import zlib from 'zlib';

const file = process.argv[2];
const raw = fs.readFileSync(file);
const latin = raw.toString('latin1');

// ---- collect all indirect objects -------------------------------------
const objs = new Map();
const objRe = /(\d+)\s+(\d+)\s+obj\b/g;
let m;
while ((m = objRe.exec(latin))) {
  const num = parseInt(m[1], 10);
  const start = m.index;
  const end = latin.indexOf('endobj', start);
  if (end === -1) continue;
  objs.set(num, { start, end, body: latin.slice(m.index + m[0].length, end) });
}

function streamOf(body, absStart) {
  const si = body.indexOf('stream');
  if (si === -1) return null;
  let s = absStart + si + 6;
  if (raw[s] === 13) s++;
  if (raw[s] === 10) s++;
  const e = raw.indexOf(Buffer.from('endstream'), s);
  if (e === -1) return null;
  const data = raw.slice(s, e);
  if (/FlateDecode/.test(body.slice(0, si))) {
    try { return zlib.inflateSync(data); } catch { return null; }
  }
  return data;
}

// ---- parse ToUnicode CMaps --------------------------------------------
const cmaps = new Map(); // objnum -> Map(code -> string)
for (const [num, o] of objs) {
  const abs = o.start + latin.slice(o.start).indexOf('obj') - 0;
  const body = o.body;
  if (!/beginbfchar|beginbfrange/.test(body)) {
    // need to inflate to check
  }
  const buf = streamOf(body, o.start + (latin.slice(o.start, o.end).indexOf('obj') + 3));
  if (!buf) continue;
  const txt = buf.toString('latin1');
  if (!/begincmap|beginbfchar|beginbfrange/.test(txt)) continue;
  const map = new Map();
  const bfcharRe = /beginbfchar([\s\S]*?)endbfchar/g;
  let b;
  while ((b = bfcharRe.exec(txt))) {
    const pairRe = /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g;
    let p;
    while ((p = pairRe.exec(b[1]))) {
      map.set(parseInt(p[1], 16), hexToStr(p[2]));
    }
  }
  const bfrangeRe = /beginbfrange([\s\S]*?)endbfrange/g;
  while ((b = bfrangeRe.exec(txt))) {
    const lineRe = /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(<([0-9A-Fa-f]+)>|\[([\s\S]*?)\])/g;
    let p;
    while ((p = lineRe.exec(b[1]))) {
      const lo = parseInt(p[1], 16);
      const hi = parseInt(p[2], 16);
      if (p[4]) {
        const base = parseInt(p[4], 16);
        for (let c = lo; c <= hi; c++) map.set(c, String.fromCharCode(base + (c - lo)));
      } else if (p[5]) {
        const items = p[5].match(/<([0-9A-Fa-f]+)>/g) || [];
        items.forEach((it, i) => map.set(lo + i, hexToStr(it.slice(1, -1))));
      }
    }
  }
  if (map.size) cmaps.set(num, map);
}

function hexToStr(h) {
  let s = '';
  for (let i = 0; i + 3 < h.length + 1; i += 4) s += String.fromCharCode(parseInt(h.substr(i, 4), 16));
  return s;
}

// ---- map font resource names to cmaps per page ------------------------
// Build font obj -> ToUnicode obj
const fontToCmap = new Map();
for (const [num, o] of objs) {
  const tu = /\/ToUnicode\s+(\d+)\s+\d+\s+R/.exec(o.body);
  if (tu) fontToCmap.set(num, parseInt(tu[1], 10));
}

// ---- walk content streams ---------------------------------------------
const BS = String.fromCharCode(92, 92);
const OCT = new RegExp(BS + '([0-7]{1,3})', 'g');
const ESC = new RegExp(BS + '(.)', 'g');

const pageObjs = [];
for (const [num, o] of objs) {
  if (/\/Type\s*\/Page\b/.test(o.body)) pageObjs.push([num, o]);
}

function resolveFonts(body) {
  // /Font << /C2_0 12 0 R /TT0 13 0 R >>  possibly via /Resources n 0 R
  const map = {};
  let resBody = body;
  const resRef = /\/Resources\s+(\d+)\s+\d+\s+R/.exec(body);
  if (resRef) {
    const ro = objs.get(parseInt(resRef[1], 10));
    if (ro) resBody = ro.body;
  }
  const fi = resBody.indexOf('/Font');
  if (fi === -1) return map;
  let seg = resBody.slice(fi, fi + 2000);
  const refFont = /\/Font\s+(\d+)\s+\d+\s+R/.exec(seg);
  if (refFont) {
    const fo = objs.get(parseInt(refFont[1], 10));
    if (fo) seg = fo.body;
  }
  const fr = /\/([A-Za-z0-9#_.+-]+)\s+(\d+)\s+\d+\s+R/g;
  let f;
  while ((f = fr.exec(seg))) map[f[1]] = parseInt(f[2], 10);
  return map;
}

const out = [];
for (const [num, o] of pageObjs) {
  const contentsRef = /\/Contents\s+(\d+)\s+\d+\s+R/.exec(o.body);
  if (!contentsRef) continue;
  const co = objs.get(parseInt(contentsRef[1], 10));
  if (!co) continue;
  const buf = streamOf(co.body, co.start + (latin.slice(co.start, co.end).indexOf('obj') + 3));
  if (!buf) continue;
  const content = buf.toString('latin1');
  const fonts = resolveFonts(o.body);

  let curCmap = null;
  let text = '';
  const TOK = /\/([A-Za-z0-9#_.+-]+)\s+[\d.]+\s+Tf|<([0-9A-Fa-f\s]+)>|\((?:[^()\\]|\\[\s\S])*\)|TJ|Tj|T\*|Td|TD|ET/g;
  let t;
  while ((t = TOK.exec(content))) {
    const s = t[0];
    if (t[1] !== undefined) {
      const fo = fonts[t[1]];
      const cm = fo !== undefined ? fontToCmap.get(fo) : undefined;
      curCmap = cm !== undefined ? cmaps.get(cm) : null;
      continue;
    }
    if (t[2] !== undefined) {
      const hex = t[2].replace(/\s+/g, '');
      let str = '';
      for (let i = 0; i + 1 < hex.length; i += 2) {
        const code = parseInt(hex.substr(i, 4).length === 4 ? hex.substr(i, 4) : hex.substr(i, 2), 16);
        // assume 2-byte for CID fonts
      }
      for (let i = 0; i + 3 < hex.length + 1; i += 4) {
        const code = parseInt(hex.substr(i, 4), 16);
        str += curCmap && curCmap.has(code) ? curCmap.get(code) : '';
      }
      text += str;
      continue;
    }
    if (s.charCodeAt(0) === 40) {
      const decoded = s.slice(1, -1).replace(OCT, (_, d) => String.fromCharCode(parseInt(d, 8))).replace(ESC, '$1');
      if (curCmap) {
        let str = '';
        for (const ch of decoded) str += curCmap.has(ch.charCodeAt(0)) ? curCmap.get(ch.charCodeAt(0)) : ch;
        text += str;
      } else {
        text += decoded;
      }
      continue;
    }
    if (s === 'T*' || s === 'Td' || s === 'TD' || s === 'ET') text += '\n';
  }
  out.push(`===== OBJ ${num} =====\n` + text);
}
console.log(out.join('\n'));
