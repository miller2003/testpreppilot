import { existsSync } from 'fs';
import { pathToFileURL } from 'url';

const idx = await import(pathToFileURL(process.cwd() + '/src/data/examCatalog/national-research/index.mjs').href);
const slugs = idx.nationalExamRecords.map((r) => r.slug);
const uniq = [...new Set(slugs)];
console.log('national records:', slugs.length, 'unique:', uniq.length);

const missing = [];
const present = [];
for (const s of uniq) {
  if (existsSync(`dist/exams/${s}/index.html`)) present.push(s);
  else missing.push(s);
}
console.log('built in dist:', present.length);
console.log('MISSING from dist:', missing.length);
if (missing.length) console.log('  sample missing:', missing.slice(0, 30).join(', '));

// confidence breakdown of missing vs present
const missConf = {};
const presConf = {};
const bySlug = Object.fromEntries(idx.nationalExamRecords.map((r) => [r.slug, r]));
for (const s of missing) { const c = bySlug[s]?.confidence || '?'; missConf[c] = (missConf[c] || 0) + 1; }
for (const s of present) { const c = bySlug[s]?.confidence || '?'; presConf[c] = (presConf[c] || 0) + 1; }
console.log('present confidence:', JSON.stringify(presConf));
console.log('missing confidence:', JSON.stringify(missConf));
