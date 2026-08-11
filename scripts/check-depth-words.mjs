// Temporary verification helper — checks that every summary field is >=250 words.
const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error('Usage: node check-depth-words.mjs <slug> [slug...]');
  process.exit(1);
}
const fields = [
  ['salaryOutlook', 'summary'],
  ['passRate', 'summary'],
  ['studyPlan', 'summary'],
  ['prepStrategies', 'summary'],
  ['resourceComparison', 'summary'],
  ['commonMistakes', 'summary'],
  ['questionTypes', 'summary'],
  ['examDay', 'summary']
];
let allOk = true;
for (const slug of slugs) {
  const mod = await import(`../src/data/examCatalog/depth/${slug}.mjs`);
  const d = mod.default;
  console.log(`=== ${slug} ===`);
  for (const [sec, field] of fields) {
    const text = (d[sec] && d[sec][field]) || '';
    const words = text.split(/\s+/).filter(Boolean).length;
    const mark = words >= 250 ? 'OK' : 'SHORT';
    if (words < 250) allOk = false;
    console.log(`  ${sec}.${field}: ${words} words ${mark}`);
  }
}
console.log(allOk ? 'ALL PASS' : 'SOME FAIL');
