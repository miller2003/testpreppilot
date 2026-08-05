const fs = require('fs');
const path = process.argv[2];
const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);
const DQ = String.fromCharCode(34);
const BS = String.fromCharCode(92);
lines.forEach((l, i) => {
  const t = l.trimStart();
  const c = t.indexOf(': ' + DQ);
  if (c === -1) return;
  const body = t.slice(c + 3);
  const end = body.lastIndexOf(DQ);
  if (end <= 0) return;
  const inner = body.slice(0, end);
  let bad = [];
  for (let k = 0; k < inner.length; k++) {
    if (inner[k] === DQ && inner[k - 1] !== BS) bad.push(k);
  }
  if (bad.length) console.log((i + 1) + '  n=' + bad.length + '  ' + inner.slice(Math.max(0, bad[0] - 40), bad[0] + 40));
});
