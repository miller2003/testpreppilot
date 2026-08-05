// Catalog integrity checker.
//   node src/data/examCatalog/validate.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = path.join(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), 'national');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort();

const RESERVED = [
  'texas-real-estate-license', 'california-real-estate-license', 'florida-real-estate-license',
  'enrolled-agent', 'osha-10-construction', 'osha-30-construction',
  'epa-608-certification', 'cpa-exam'
];

const ALLOWED_CATEGORIES = new Set([
  'admissions-academic', 'healthcare-clinical', 'allied-health', 'behavioral-health',
  'education-teaching', 'accounting', 'finance-securities', 'insurance', 'legal',
  'real-estate', 'technology', 'project-business', 'trades', 'engineering-design',
  'workplace-safety', 'environment', 'transportation', 'aviation-maritime',
  'public-safety', 'government-civil-service', 'beauty-wellness', 'food-hospitality',
  'security-investigation', 'fitness-recreation', 'animal-agriculture', 'personal-services'
]);

const all = [];
const bySlug = new Map();
const dupes = [];

for (const f of files) {
  const mod = await import(pathToFileURL(path.join(dir, f)).href);
  const rows = mod.default;
  console.log(f.padEnd(44), String(rows.length).padStart(5));
  for (const r of rows) {
    const row = { ...r, __file: f };
    if (bySlug.has(row.slug)) dupes.push(`${row.slug}  ${bySlug.get(row.slug).__file} <-> ${f}`);
    else bySlug.set(row.slug, row);
    all.push(row);
  }
}

console.log('-'.repeat(56));
console.log('TOTAL rows        :', all.length);
console.log('unique slugs      :', bySlug.size);
console.log('cross-file dupes  :', dupes.length);
dupes.slice(0, 30).forEach((d) => console.log('   DUPE ' + d));

const badCat = all.filter((r) => !ALLOWED_CATEGORIES.has(r.category));
console.log('bad category ids  :', badCat.length, [...new Set(badCat.map((r) => r.category))].slice(0, 10));

const slugRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const malformed = all.filter((r) => !r.slug || !r.name || !r.group || !slugRe.test(r.slug));
console.log('malformed rows    :', malformed.length, malformed.slice(0, 8).map((r) => r.slug || r.name));

const reservedHits = all.filter((r) => RESERVED.includes(r.slug));
console.log('reserved clashes  :', reservedHits.length, reservedHits.map((r) => r.slug));

const noBlurb = all.filter((r) => !r.blurb || r.blurb.length < 40);
console.log('missing blurbs    :', noBlurb.length);

const cats = {};
all.forEach((r) => { cats[r.category] = (cats[r.category] || 0) + 1; });
console.log('-'.repeat(56));
Object.entries(cats).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log('  ' + k.padEnd(28), v));
