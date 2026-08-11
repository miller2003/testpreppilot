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

const base = 'C:/Users/samja/Desktop/testpreppilot-v2/src/data/examCatalog/depth/';

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
  const clean = String(str).replace(/\\u2019/g, '\u2019');
  const words = clean.match(/[A-Za-z0-9$%.,~:/\-']+/g) || [];
  return words.filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

let allOk = true;
for (const f of files) {
  const mod = await import('file:///' + (base + f + '.mjs').replace(/\\/g, '/'));
  const data = mod.default;
  for (const key of summaryKeys) {
    const parts = key.split('.');
    const val = data[parts[0]] && data[parts[0]][parts[1]];
    if (val === undefined || val === null) {
      console.log(`MISSING ${f} ${key}`);
      allOk = false;
      continue;
    }
    const wc = wordCount(val);
    if (wc < 250) {
      console.log(`SHORT ${f} ${key}: ${wc} words`);
      allOk = false;
    }
  }
  // Check resourceComparison rows values arrays
  const rc = data.resourceComparison;
  if (rc && rc.rows) {
    for (const row of rc.rows) {
      if (!Array.isArray(row.values)) {
        console.log(`BAD VALUES ${f}: ${row.label}`);
        allOk = false;
      }
    }
  }
  // Check commonMistakes items keys
  const cm = data.commonMistakes;
  if (cm && cm.items) {
    for (const it of cm.items) {
      const keys = Object.keys(it).sort().join(',');
      if (keys !== 'fix,mistake') {
        console.log(`BAD CM KEYS ${f}: ${keys}`);
        allOk = false;
      }
    }
  }
  console.log(`${f}: OK`);
}

console.log(allOk ? 'ALL SUMMARIES >= 250, STRUCTURES VALID' : 'ISSUES FOUND');
