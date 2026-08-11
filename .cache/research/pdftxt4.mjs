import fs from 'fs';
import zlib from 'zlib';

const raw = fs.readFileSync(process.argv[2]);
const latin = raw.toString('latin1');

// --- index objects ------------------------------------------------------
const objs = new Map();
const re = /(?:^|[^0-9])(\d+)\s+(\d+)\s+obj\b/g;
let m;
while ((m = re.exec(latin))) {
  const num = parseInt(m[1], 10);
  const bodyStart = m.index + m[0].length;
  const end = latin.indexOf('endobj', bodyStart);
  if (end === -1) continue;
  objs.set(num, { bodyStart, end });
}

function dictOf(num) {
  const o = objs.get(num);
  if (!o) return '';
  const si = latin.indexOf('stream', o.bodyStart);
  const stop = si !== -1 && si < o.end ? si : o.end;
  return latin.slice(o.bodyStart, stop);
}

function streamOf(num) {
  const o = objs.get(num);
  if (!o) return null;
  const si = latin.indexOf('stream', o.bodyStart);
  if (si === -1 || si > o.end) return null;
  let s = si + 6;
  if (raw[s] === 13) s++;
  if (raw[s] === 10) s++;
  const e = latin.indexOf('endstream', s);
  if (e === -1) return null;
  const data = raw.slice(s, e);
  const dict = latin.slice(o.bodyStart, si);
  if (/FlateDecode/.test(dict)) {
    try { return zlib.inflateSync(data); } catch { return null; }
  }
  return data;
}

// --- build ToUnicode maps ----------------------------------------------
const cmapCache = new Map();
function cmapFor(objNum) {
  if (cmapCache.has(objNum)) return cmapCache.get(objNum);
  const buf = streamOf(objNum);
  let map = null;
  if (buf) {
    const t = buf.toString('latin1');
    if (/beginbfchar|beginbfrange/.test(t)) {
      map = new Map();
      const bfcharRe = /beginbfchar([\s\S]*?)endbfchar/g;
      let b;
      while ((b = bfcharRe.exec(t))) {
        const pr = /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g;
        let p;
        while ((p = pr.exec(b[1]))) map.set(parseInt(p[1], 16), hx(p[2]));
      }
      const bfrangeRe = /beginbfrange([\s\S]*?)endbfrange/g;
      while ((b = bfrangeRe.exec(t))) {
        const lr = /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(?:<([0-9A-Fa-f]+)>|\[([\s\S]*?)\])/g;
        let p;
        while ((p = lr.exec(b[1]))) {
          const lo = parseInt(p[1], 16), hi = parseInt(p[2], 16);
          if (p[3]) {
            const base = parseInt(p[3].slice(-4), 16);
            for (let c = lo; c <= hi; c++) map.set(c, String.fromCharCode(base + (c - lo)));
          } else if (p[4]) {
            (p[4].match(/<([0-9A-Fa-f]+)>/g) || []).forEach((it, i2) => map.set(lo + i2, hx(it.slice(1, -1))));
          }
        }
      }
    }
  }
  cmapCache.set(objNum, map);
  return map;
}
function hx(h) {
  let s = '';
  for (let k = 0; k + 4 <= h.length; k += 4) s += String.fromCharCode(parseInt(h.substr(k, 4), 16));
  if (!s && h.length >= 2) s = String.fromCharCode(parseInt(h.substr(0, 2), 16));
  return s;
}

// font obj -> ToUnicode obj
function toUnicodeOf(fontObj) {
  const d = dictOf(fontObj);
  const tu = /\/ToUnicode\s+(\d+)\s+\d+\s+R/.exec(d);
  if (tu) return cmapFor(parseInt(tu[1], 10));
  // Type0 fonts: descendant may not carry it; return null
  return null;
}

// --- pages --------------------------------------------------------------
const BS = String.fromCharCode(92, 92);
const OCT = new RegExp(BS + '([0-7]{1,3})', 'g');
const ESC = new RegExp(BS + '(.)', 'g');

const pages = [];
for (const [num] of objs) {
  const d = dictOf(num);
  if (!/\/Type\s*\/Page[^s]/.test(d)) continue;
  pages.push(num);
}

function fontMapForPage(pageNum) {
  let d = dictOf(pageNum);
  const rr = /\/Resources\s+(\d+)\s+\d+\s+R/.exec(d);
  let res = rr ? dictOf(parseInt(rr[1], 10)) : d;
  const fi = res.indexOf('/Font');
  if (fi === -1) return {};
  let seg;
  const fref = /\/Font\s+(\d+)\s+\d+\s+R/.exec(res);
  if (fref) {
    seg = dictOf(parseInt(fref[1], 10));
  } else {
    // inline dict: /Font << ... >>
    let depth = 0, k = res.indexOf('<<', fi), start = k;
    for (; k < res.length - 1; k++) {
      if (res[k] === '<' && res[k + 1] === '<') { depth++; k++; }
      else if (res[k] === '>' && res[k + 1] === '>') { depth--; k++; if (depth === 0) break; }
    }
    seg = res.slice(start, k + 1);
  }
  const map = {};
  const fr = /\/([A-Za-z0-9#_.+-]+)\s+(\d+)\s+\d+\s+R/g;
  let f;
  while ((f = fr.exec(seg))) map[f[1]] = parseInt(f[2], 10);
  return map;
}

const out = [];
for (const pageNum of pages) {
  const d = dictOf(pageNum);
  const cr = /\/Contents\s+(\d+)\s+\d+\s+R/.exec(d);
  if (!cr) continue;
  const buf = streamOf(parseInt(cr[1], 10));
  if (!buf) continue;
  const content = buf.toString('latin1');
  const fonts = fontMapForPage(pageNum);
  let cur = null;
  let text = '';
  const TOK = /\/([A-Za-z0-9#_.+-]+)\s+[\d.-]+\s+Tf|<([0-9A-Fa-f\s]+)>|\((?:[^()\\]|\\[\s\S])*\)|T\*|Td|TD|ET|TJ|Tj/g;
  let t;
  while ((t = TOK.exec(content))) {
    const s = t[0];
    if (t[1] !== undefined) {
      const fo = fonts[t[1]];
      cur = fo !== undefined ? toUnicodeOf(fo) : null;
      continue;
    }
    if (t[2] !== undefined) {
      const hex = t[2].replace(/\s+/g, '');
      if (cur) {
        for (let k = 0; k + 4 <= hex.length; k += 4) {
          const code = parseInt(hex.substr(k, 4), 16);
          text += cur.has(code) ? cur.get(code) : '?';
        }
      } else {
        for (let k = 0; k + 2 <= hex.length; k += 2) text += String.fromCharCode(parseInt(hex.substr(k, 2), 16));
      }
      continue;
    }
    if (s.charCodeAt(0) === 40) {
      const dec = s.slice(1, -1).replace(OCT, (_, c) => String.fromCharCode(parseInt(c, 8))).replace(ESC, '$1');
      if (cur) {
        let o2 = '';
        for (const ch of dec) o2 += cur.has(ch.charCodeAt(0)) ? cur.get(ch.charCodeAt(0)) : ch;
        text += o2;
      } else text += dec;
      continue;
    }
    if (s === 'T*' || s === 'Td' || s === 'TD' || s === 'ET') text += '\n';
  }
  out.push(`===== PAGE obj ${pageNum} =====\n` + text);
}
console.log(out.join('\n'));
