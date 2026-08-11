import fs from 'fs';
import zlib from 'zlib';
const buf = fs.readFileSync('pa-cosmetology-handbook.pdf');
const out = [];
let i = 0;
const re = /stream\r?\n/gi;
let m;
while ((m = re.exec(buf)) !== null) {
  let start = m.index + m[0].length;
  let endMark = buf.indexOf(Buffer.from('endstream'), start);
  if (endMark < 0) continue;
  let raw = buf.slice(start, endMark);
  try {
    const inf = zlib.inflateSync(raw);
    out.push(inf.toString('latin1'));
  } catch(e) {}
}
const text = out.join('\n');
fs.writeFileSync('pa-handbook-text.txt', text);
console.log('length:', text.length);
