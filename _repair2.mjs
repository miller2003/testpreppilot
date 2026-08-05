import { readFileSync, writeFileSync } from 'node:fs';
const files = ['ace-certified-personal-trainer','comptia-a-plus','comptia-security-plus','itil-4-foundation'];
let n=0;
for (const f of files) {
  const p = `src/data/examCatalog/depth/${f}.mjs`;
  const lines = readFileSync(p, 'utf8').split('\n');
  let fc=0;
  const out = lines.map((line) => {
    if (/^ *\{ label: .*values: \[.*'\],\s*,\s*$/.test(line)) { fc++; return line.replace(/'\],\s*,\s*$/, "'], },"); }
    if (/^ *\{ label: .*values: \[.*'\]\s*$/.test(line)) { fc++; return line.replace(/'\],\s*$/, "'], }"); }
    return line;
  });
  writeFileSync(p, out.join('\n'));
  console.log(`${f}: fixed ${fc}`);
  n+=fc;
}
console.log('TOTAL', n);
