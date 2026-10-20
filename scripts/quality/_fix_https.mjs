// One-off: upgrade http:// -> https:// inside URL strings of selected v2 files.
import fs from 'node:fs';
import path from 'node:path';
const dir = path.resolve('src/data/examCatalog/research/v2');
const files = ['private-investigator.mjs', 'security-guard.mjs', 'nursing-home-administrator.mjs'];
for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), 'utf8');
  const before = (t.match(/http:\/\//g) || []).length;
  const out = t.replace(/"http:\/\//g, '"https://').replace(/'http:\/\//g, "'https://");
  fs.writeFileSync(path.join(dir, f), out);
  const after = (out.match(/http:\/\//g) || []).length;
  console.log(f, before, '->', after);
}
