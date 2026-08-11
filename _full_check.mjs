// Full structural check for batches i/j/k (150 files)
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const batchFiles = ['./_next50i.json', './_next50j.json', './_next50k.json'];
const slugs = [];
for (const bf of batchFiles) {
  const d = JSON.parse(readFileSync(bf, 'utf8'));
  d.forEach(x => slugs.push(x.slug));
}

let issues = [];
for (const slug of slugs) {
  const p = 'C:/Users/samja/Desktop/testpreppilot-v2/src/data/examCatalog/depth/' + slug + '.mjs';
  if (!existsSync(p)) { issues.push(slug + ' FILE MISSING'); continue; }
  const src = readFileSync(p, 'utf8');
  // CJK
  if (/[\u4e00-\u9fff]/.test(src)) issues.push(slug + ' CJK');
  // bare apostrophes inside single-quoted prose (rough: \u2019 expected, but check for ' after a letter without escape)
  if (/[a-z]'[a-z]/.test(src)) issues.push(slug + ' BARE APOSTROPHE (e.g. ' + (src.match(/[a-z]'[a-z]/) || [''])[0] + ')');
  // commonMistakes detail field
  const cm = src.split('commonMistakes: {')[1] || '';
  const cmSeg = cm.split('questionTypes: {')[0] || '';
  if (cmSeg.includes('detail:')) issues.push(slug + ' detail in commonMistakes');
  // values single-string
  if (/values: '[^']*'/.test(src)) issues.push(slug + ' values single-string (missing [)');
  // orphan quote comma
  if (/,\s*'\s*,\s*$/.test(src)) issues.push(slug + ' orphan quote comma');
  // import check
  try {
    const data = (await import(pathToFileURL(p).href)).default;
    const fields = ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay'];
    for (const f of fields) {
      if (!data[f]) { issues.push(slug + ' missing section ' + f); continue; }
      if (typeof data[f].summary !== 'string') issues.push(slug + ' no summary in ' + f);
    }
    // resourceComparison rows all have values arrays
    if (data.resourceComparison && Array.isArray(data.resourceComparison.rows)) {
      data.resourceComparison.rows.forEach((r, i) => {
        if (!Array.isArray(r.values)) issues.push(slug + ' resourceComparison row ' + i + ' values not array');
        if (r.values && r.values.length !== 3) issues.push(slug + ' resourceComparison row ' + i + ' values length ' + r.values.length);
      });
    }
    // commonMistakes items only mistake/fix
    if (data.commonMistakes && Array.isArray(data.commonMistakes.items)) {
      data.commonMistakes.items.forEach((it, i) => {
        const keys = Object.keys(it).sort().join(',');
        if (keys !== 'fix,mistake') issues.push(slug + ' commonMistakes item ' + i + ' keys: ' + keys);
      });
    }
    // questionTypes samples have prompt/options/answer/explanation
    if (data.questionTypes && Array.isArray(data.questionTypes.samples)) {
      data.questionTypes.samples.forEach((s, i) => {
        if (!s.prompt || !s.answer || !s.explanation || !Array.isArray(s.options)) issues.push(slug + ' sample ' + i + ' incomplete');
        if (s.options && s.options.length !== 4) issues.push(slug + ' sample ' + i + ' options ' + s.options.length);
      });
    }
  } catch (e) {
    issues.push(slug + ' IMPORT FAIL: ' + e.message.split('\n')[0]);
  }
}

console.log('Slugs checked:', slugs.length, '| Issues:', issues.length);
issues.forEach(i => console.log('  ' + i));
