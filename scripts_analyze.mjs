import {
  allExams, stubExams, nationalExams, stateExams,
  catalogStats, getExamBySlug
} from './src/data/examCatalog/index.mjs';

import {
  nationalFor, isPublishable, nationalExamRecords
} from './src/data/examCatalog/national-research/index.mjs';

console.log('=== CATALOG STATS ===');
console.log(JSON.stringify(catalogStats, null, 2));

console.log('\n=== NATIONAL EXAM GAP ANALYSIS ===');
const nationalWithResearch = nationalExams.filter(e => e.researched);
const nationalNoResearch = nationalExams.filter(e => !e.researched);
console.log('national total:', nationalExams.length);
console.log('national with publishable research:', nationalWithResearch.length);
console.log('national WITHOUT research (pure stub):', nationalNoResearch.length);

// Among national exams, how many have a record but not publishable?
const natWithRecordNotPub = nationalExams.filter(e => {
  const r = nationalFor(e.slug);
  return r && !isPublishable(r);
});
console.log('national with record but NOT publishable:', natWithRecordNotPub.length);

// National research records total & publishable
const pub = nationalExamRecords.filter(isPublishable).length;
console.log('national research records total:', nationalExamRecords.length);
console.log('national research records publishable:', pub);

// Gap by category
console.log('\n=== GAP BY CATEGORY (national exams lacking publishable research) ===');
const byCat = {};
for (const e of nationalNoResearch) {
  byCat[e.category] = (byCat[e.category] || 0) + 1;
}
const catOrder = [...new Set(nationalExams.map(e=>e.category))];
for (const c of catOrder) {
  if (byCat[c]) console.log(`  ${c}: ${byCat[c]} missing`);
}

// Sample of missing slugs (first 30)
console.log('\n=== SAMPLE MISSING SLUGS (first 40) ===');
console.log(nationalNoResearch.slice(0,40).map(e=>`${e.slug} [${e.category}]`).join('\n'));
