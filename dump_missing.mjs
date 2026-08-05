import { nationalExams } from './src/data/examCatalog/index.mjs';
import { nationalFor, isPublishable } from './src/data/examCatalog/national-research/index.mjs';
import { writeFileSync } from 'fs';

const missing = nationalExams
  .filter((e) => !isPublishable(nationalFor(e.slug)))
  .map((e) => ({
    slug: e.slug,
    name: e.name,
    category: e.category,
    group: e.group || '',
    type: e.type || '',
    blurb: e.blurb || ''
  }));

// group by category for easier authoring
const byCat = {};
for (const m of missing) {
  (byCat[m.category] ||= []).push(m);
}

writeFileSync('missing_national.json', JSON.stringify({ total: missing.length, byCat, list: missing }, null, 2));
console.log('Missing national exams:', missing.length);
for (const [c, arr] of Object.entries(byCat)) console.log(`  ${c}: ${arr.length}`);
