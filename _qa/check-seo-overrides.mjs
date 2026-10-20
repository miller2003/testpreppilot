// Validates src/data/seoOverrides.mjs: every key maps to a real page, titles
// fit in 60 chars, descriptions in 158, and no two pages share a title.
import overrides from '../src/data/seoOverrides.mjs';
import { allExams } from '../src/data/examCatalog/index.mjs';
import fs from 'node:fs';

const examSlugs = new Set(allExams.filter((e) => e.status === 'stub').map((e) => e.slug));
const pathSlugs = new Set([...fs.readFileSync(new URL('../src/data/credentials.ts', import.meta.url), 'utf8').matchAll(/^\s{4}slug: '([^']+)'/gm)].map((m) => m[1]));

const errors = [];
const seen = new Map();
for (const [key, { title, description }] of Object.entries(overrides)) {
  const [kind, slug] = key.split('/');
  const known = kind === 'exams' ? examSlugs.has(slug) : kind === 'paths' ? pathSlugs.has(slug) : false;
  if (!known) errors.push(`${key}: no such page`);
  if (!title || title.length > 60) errors.push(`${key}: title ${title?.length} chars`);
  if (!description || description.length > 158) errors.push(`${key}: description ${description?.length} chars`);
  if (seen.has(title)) errors.push(`${key}: duplicate title with ${seen.get(title)}`);
  seen.set(title, key);
}
console.log(`${Object.keys(overrides).length} overrides checked`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('OK');
