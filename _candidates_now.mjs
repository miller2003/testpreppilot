// Enumerates every UNRELEASED page that would render as a real (indexable,
// 'national'/'researched') exam page: it needs a research record AND a depth
// layer entry. Prints them grouped by category so a batch can be picked with
// topical spread instead of letting one vertical dominate.
//
// Run with the managed Node:  node _candidates_now.mjs

import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { examDepth } from './src/data/examCatalog/examDepth.mjs';

const rows = allExamsFull.filter(
  (e) => !releases[e.slug] && e.record && examDepth[e.slug]
);

const byCat = new Map();
for (const e of rows) {
  if (!byCat.has(e.category)) byCat.set(e.category, []);
  byCat.get(e.category).push(e.slug);
}

const totals = [...byCat.entries()].sort((a, b) => b[1].length - a[1].length);
console.log(`Unreleased, indexable candidates: ${rows.length}\n`);
for (const [cat, slugs] of totals) {
  console.log(`${cat} (${slugs.length})`);
  console.log('  ' + slugs.join(' '));
}

// Also report what gets excluded and why, so the numbers are auditable.
const unreleased = allExamsFull.filter((e) => !releases[e.slug]);
const noDepth = unreleased.filter((e) => e.record && !examDepth[e.slug]).length;
const noRecord = unreleased.filter((e) => !e.record).length;
console.log(`\nExcluded: ${noDepth} no depth layer, ${noRecord} no record (would render noindex placeholder)`);
console.log(`Already released: ${Object.keys(releases).length}`);
