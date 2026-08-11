// Append batch i/j/k slugs to release-manifest.mjs with today's date
import { readFileSync, writeFileSync } from 'node:fs';

const manifestPath = 'src/data/examCatalog/release-manifest.mjs';
const src = readFileSync(manifestPath, 'utf8');
const today = '2026-08-06';

const slugs = [];
for (const bf of ['./_next50i.json', './_next50j.json', './_next50k.json']) {
  JSON.parse(readFileSync(bf, 'utf8')).forEach(x => slugs.push(x.slug));
}

// Parse existing entries
const existing = new Set();
const re = /"([a-z0-9-]+)":\s*"(\d{4}-\d{2}-\d{2})"/g;
let m;
while ((m = re.exec(src)) !== null) existing.add(m[1]);

let added = 0;
const lines = [];
for (const s of slugs) {
  if (!existing.has(s)) {
    lines.push(`  "${s}": "${today}",`);
    existing.add(s);
    added++;
  }
}

if (added === 0) {
  console.log('No new slugs to add.');
} else {
  // Insert before the closing brace
  const insertAt = src.lastIndexOf('}');
  const newSrc = src.slice(0, insertAt) + lines.join('\n') + '\n' + src.slice(insertAt);
  writeFileSync(manifestPath, newSrc);
  console.log('Added', added, 'slugs to release-manifest.mjs');
}
