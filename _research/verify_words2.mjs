const base = 'C:/Users/samja/Desktop/testpreppilot-v2/src/data/examCatalog/depth/';

const files = [
  'texas-journeyman-plumber-license',
  'texas-teacher-certification-exams',
  'texas-security-guard-license',
  'california-property-and-casualty-insurance-license',
  'california-esthetician-license',
  'texas-property-and-casualty-insurance-license',
  'texas-esthetician-license',
  'california-hvac-contractor-license',
  'california-massage-therapy-license',
  'nccer-carpenter',
  'nccer-masonry',
];

const summaryKeys = [
  'salaryOutlook.summary',
  'passRate.summary',
  'studyPlan.summary',
  'prepStrategies.summary',
  'resourceComparison.summary',
  'commonMistakes.summary',
  'questionTypes.summary',
  'examDay.summary',
];

function wordCount(str) {
  const tokens = String(str).split(/\s+/);
  return tokens.filter((t) => /[A-Za-z0-9]/.test(t)).length;
}

let issues = 0;
for (const f of files) {
  const mod = await import('file:///' + (base + f + '.mjs').replace(/\\/g, '/'));
  const data = mod.default;
  for (const key of summaryKeys) {
    const parts = key.split('.');
    const val = data[parts[0]] && data[parts[0]][parts[1]];
    const wc = wordCount(val);
    if (wc < 250) {
      console.log(`${f} ${key}: ${wc}`);
      issues++;
    }
  }
}
console.log('total short summaries:', issues);
