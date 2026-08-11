// Post-build check on dist/exams pages for batches i/j/k
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const slugs = [];
for (const bf of ['./_next50i.json', './_next50j.json', './_next50k.json']) {
  JSON.parse(readFileSync(bf, 'utf8')).forEach(x => slugs.push(x.slug));
}

const sections = ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay'];
const CJK = /[\u4e00-\u9fff]/;
const issues = [];
let ok = 0;

for (const slug of slugs) {
  const p = 'C:/Users/samja/Desktop/testpreppilot-v2/dist/exams/' + slug + '/index.html';
  if (!existsSync(p)) { issues.push(slug + ' PAGE MISSING'); continue; }
  const html = readFileSync(p, 'utf8');
  // Count section headings (approximate by id or heading text)
  let secCount = 0;
  for (const s of sections) {
    if (html.includes(s) || html.includes(s.replace(/([A-Z])/g, '-$1').toLowerCase())) secCount++;
  }
  if (secCount < 8) issues.push(slug + ' sections found: ' + secCount);
  if (html.includes('Varies by exam')) issues.push(slug + ' contains "Varies by exam"');
  if (CJK.test(html)) issues.push(slug + ' CJK in page');
  ok++;
}

console.log('Pages checked:', slugs.length, '| OK:', ok, '| Issues:', issues.length);
issues.forEach(i => console.log('  ' + i));
