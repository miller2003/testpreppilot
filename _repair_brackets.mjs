import { readFileSync, writeFileSync } from 'node:fs';
const files = ['ace-certified-personal-trainer','comptia-a-plus','comptia-security-plus','itil-4-foundation'];
let fixed = 0;
for (const f of files) {
  const p = `src/data/examCatalog/depth/${f}.mjs`;
  const lines = readFileSync(p, 'utf8').split('\n');
  let fcount = 0;
  const out = lines.map((line) => {
    // only rows of the shape { label: '...', values: [ ...strings' } — missing the ']'
    if (/^ *\{ label: .*?values: \[/.test(line) && !/values: \[.*'\]/.test(line) && /'\s*}(,?)$/.test(line)) {
      fcount++;
      return line.replace(/'\s*}(,?)$/, "'], $1");
    }
    return line;
  });
  writeFileSync(p, out.join('\n'));
  console.log(`${f}: fixed ${fcount} row(s)`);
  fixed += fcount;
}
console.log('TOTAL fixed rows:', fixed);
