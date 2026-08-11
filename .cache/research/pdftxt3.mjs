import fs from 'fs';
import zlib from 'zlib';

const raw = fs.readFileSync(process.argv[2]);
const latin = raw.toString('latin1');

const inflated = [];
let i = 0;
while (true) {
  const s = latin.indexOf('stream', i);
  if (s === -1) break;
  let st = s + 6;
  if (raw[st] === 13) st++;
  if (raw[st] === 10) st++;
  const e = raw.indexOf(Buffer.from('endstream'), st);
  if (e === -1) break;
  try {
    inflated.push(zlib.inflateSync(raw.slice(st, e)).toString('latin1'));
  } catch { /* ignore */ }
  i = e + 9;
}

const merged = new Map();
const conflicts = [];
for (const t of inflated) {
  if (!/beginbfchar|beginbfrange/.test(t)) continue;
  const pairRe = /<([0-9A-Fa-f]{2,4})>\s*<([0-9A-Fa-f]+)>/g;
  let seg = t.slice(t.indexOf('beginbfchar') === -1 ? 0 : t.indexOf('beginbfchar'));
  let p;
  while ((p = pairRe.exec(seg))) {
    if (p[1].toUpperCase() === '0000' && p[2].toUpperCase() === 'FFFF') continue;
    const code = parseInt(p[1], 16);
    let val = '';
    for (let k = 0; k + 4 <= p[2].length; k += 4) val += String.fromCharCode(parseInt(p[2].substr(k, 4), 16));
    if (merged.has(code) && merged.get(code) !== val) conflicts.push([code, merged.get(code), val]);
    if (!merged.has(code)) merged.set(code, val);
  }
}
if (conflicts.length) console.error('CONFLICTS:', conflicts.length, conflicts.slice(0, 10));

const BS = String.fromCharCode(92, 92);
const OCT = new RegExp(BS + '([0-7]{1,3})', 'g');
const ESC = new RegExp(BS + '(.)', 'g');

const out = [];
for (const content of inflated) {
  if (!/(TJ|Tj)/.test(content) || /beginbfchar/.test(content)) continue;
  let text = '';
  const TOK = /<([0-9A-Fa-f\s]+)>\s*(?:TJ|Tj)?|\((?:[^()\\]|\\[\s\S])*\)|TJ|Tj|T\*|Td|TD|ET|BT/g;
  let t;
  while ((t = TOK.exec(content))) {
    const s = t[0];
    if (t[1] !== undefined) {
      const hex = t[1].replace(/\s+/g, '');
      for (let k = 0; k + 4 <= hex.length; k += 4) {
        const code = parseInt(hex.substr(k, 4), 16);
        text += merged.has(code) ? merged.get(code) : '\uFFFD';
      }
      continue;
    }
    if (s.charCodeAt(0) === 40) {
      text += s.slice(1, -1).replace(OCT, (_, d) => String.fromCharCode(parseInt(d, 8))).replace(ESC, '$1');
      continue;
    }
    if (s === 'T*' || s === 'Td' || s === 'TD' || s === 'ET' || s === 'BT') text += '\n';
  }
  if (text.replace(/\s/g, '').length > 10) out.push(text);
}
console.log(out.join('\n===== STREAM =====\n'));
