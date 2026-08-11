// Accurate summary word-count check via dynamic import of depth files
import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const batchFile = process.argv[2] || './_next50i.json';
const batch = JSON.parse(readFileSync(batchFile, 'utf8'));
const fields = ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay'];
let issues = [];

for (const x of batch) {
  const p = 'C:/Users/samja/Desktop/testpreppilot-v2/src/data/examCatalog/depth/' + x.slug + '.mjs';
  if (!existsSync(p)) { issues.push(x.slug + ' FILE MISSING'); continue; }
  let data;
  try {
    data = (await import(pathToFileURL(p).href)).default;
  } catch (e) {
    issues.push(x.slug + ' IMPORT FAIL: ' + e.message.split('\n')[0]);
    continue;
  }
  for (const f of fields) {
    const sec = data[f];
    if (!sec || typeof sec.summary !== 'string') { issues.push(x.slug + '.' + f + ' NO SUMMARY'); continue; }
    const words = sec.summary.split(/\s+/).filter(w => w.length > 0).length;
    if (words < 250) issues.push(x.slug + '.' + f + ' only ' + words + ' words');
  }
}
console.log('Slugs:', batch.length, '| Issues:', issues.length);
issues.forEach(i => console.log('  ' + i));
