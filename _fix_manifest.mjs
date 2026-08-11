// Fix release-manifest.mjs: remove wrongly-inserted lines inside isReleased,
// then re-insert all new slugs before the object's closing "};"
import { readFileSync, writeFileSync } from 'node:fs';

const manifestPath = 'src/data/examCatalog/release-manifest.mjs';
let src = readFileSync(manifestPath, 'utf8');

// 1. Remove lines matching  "slug": "2026-08-06",  that sit AFTER the object close (inside isReleased)
const objCloseIdx = src.indexOf('};');
const before = src.slice(0, objCloseIdx);
const after = src.slice(objCloseIdx);
const cleanedAfter = after
  .split('\n')
  .filter(l => !/^\s*"[a-z0-9-]+":\s*"2026-08-06",\s*$/.test(l))
  .join('\n');
src = before + cleanedAfter;

// 2. Collect the 150 slugs
const slugs = [];
for (const bf of ['./_next50i.json', './_next50j.json', './_next50k.json']) {
  JSON.parse(readFileSync(bf, 'utf8')).forEach(x => slugs.push(x.slug));
}
const existing = new Set();
const re = /"([a-z0-9-]+)":\s*"\d{4}-\d{2}-\d{2}"/g;
let m;
while ((m = re.exec(src)) !== null) existing.add(m[1]);

// 3. Insert new slugs right before the object's closing "};"
const lines = [];
let added = 0;
for (const s of slugs) {
  if (!existing.has(s)) { lines.push(`  "${s}": "2026-08-06",`); added++; }
}
const insertAt = src.indexOf('};');
src = src.slice(0, insertAt) + (lines.length ? '\n' + lines.join('\n') + '\n' : '\n') + src.slice(insertAt);
writeFileSync(manifestPath, src);
console.log('Re-inserted', added, 'slugs before object close; total lines fixed.');
