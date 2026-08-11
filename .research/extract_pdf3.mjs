import fs from 'fs';
import zlib from 'zlib';
const buf = fs.readFileSync('nccer-excavator.pdf');
const chunks = [];
const re = /stream\r?\n/gi;
let m;
while ((m = re.exec(buf)) !== null) {
  let start = m.index + m[0].length;
  let endMark = buf.indexOf(Buffer.from('endstream'), start);
  if (endMark < 0) continue;
  let raw = buf.slice(start, endMark);
  try { chunks.push(zlib.inflateSync(raw).toString('utf8')); } catch(e) {}
}
const text = chunks.join('\n');
// Show all ASCII runs of length >= 4
const asciiRuns = text.match(/[ -~]{4,}/g) || [];
console.log(asciiRuns.join('\n'));
