import fs from 'fs';
import zlib from 'zlib';
const file = process.argv[2];
const buf = fs.readFileSync(file);
const out = [];
const re = /stream\r?\n/gi;
let m;
while ((m = re.exec(buf)) !== null) {
  let start = m.index + m[0].length;
  let endMark = buf.indexOf(Buffer.from('endstream'), start);
  if (endMark < 0) continue;
  let raw = buf.slice(start, endMark);
  try {
    const inf = zlib.inflateSync(raw);
    out.push(inf.toString('utf8'));
  } catch(e) {}
}
const text = out.join('\n');
// extract text between parentheses of Tj/TJ operators crudely
const txt = text.replace(/\(([^)]*)\)\s*Tj/g, '$1\n');
console.log(txt.replace(/\n{2,}/g,'\n'));
