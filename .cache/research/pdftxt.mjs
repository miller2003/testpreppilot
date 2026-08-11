import fs from 'fs';
import zlib from 'zlib';

const f = process.argv[2];
const buf = fs.readFileSync(f);
const streams = [];
let idx = 0;
while (true) {
  const s = buf.indexOf('stream', idx);
  if (s === -1) break;
  let start = s + 6;
  if (buf[start] === 13) start++;
  if (buf[start] === 10) start++;
  const e = buf.indexOf('endstream', start);
  if (e === -1) break;
  try {
    const inf = zlib.inflateSync(buf.slice(start, e)).toString('latin1');
    if (/(TJ|Tj)/.test(inf)) streams.push(inf);
  } catch (err) { /* not deflate */ }
  idx = e + 9;
}

const BS = String.fromCharCode(92, 92);
const OCT = new RegExp(BS + '([0-7]{1,3})', 'g');
const ESC = new RegExp(BS + '(.)', 'g');
const TOK = /\((?:[^()\\]|\\[\s\S])*\)|TJ|Tj|T\*|Td|TD|ET/g;

const pages = [];
for (const s of streams) {
  let cur = '';
  let m;
  while ((m = TOK.exec(s))) {
    const t = m[0];
    if (t.charCodeAt(0) === 40) {
      cur += t
        .slice(1, -1)
        .replace(OCT, (_, d) => String.fromCharCode(parseInt(d, 8)))
        .replace(ESC, '$1');
    } else if (t === 'T*' || t === 'Td' || t === 'TD' || t === 'ET') {
      cur += '\n';
    }
  }
  pages.push(cur);
}
console.log(pages.join('\n===== PAGE BREAK =====\n'));
