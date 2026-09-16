// One-off probe: how broad is the sourced pay/pass-rate data across categories?
import { buildDirectory, getExamDetail } from '../src/data/examCatalog/index.mjs';
import { depthFor } from '../src/data/examCatalog/examDepth.mjs';

const money = (s) => {
  const m = /\$([\d,]+)/.exec(String(s || ''));
  return m ? parseFloat(m[1].replace(/,/g, '')) : null;
};

const rows = [];
for (const c of buildDirectory()) {
  const ex = c.groups.flatMap((g) => g.exams).filter((e) => e.scope !== 'state');
  let pay = 0, pass = 0, fee = 0, rev = 0;
  for (const e of ex) {
    const d = depthFor(e.slug);
    if (!d) continue;
    if (money(d.salaryOutlook?.headline) !== null) pay++;
    if (d.passRate?.headline) pass++;
    const r = getExamDetail(e.slug)?.record;
    if (r && money(r.examMeta?.fee) !== null) fee++;
    if (d.lastReviewed) rev++;
  }
  rows.push([c.id, ex.length, pay, pass, fee, rev]);
}
rows.sort((a, b) => b[2] - a[2]);
console.log('category'.padEnd(22), 'natl', 'pay$', 'passRate', 'fee$', 'rev');
for (const r of rows) console.log(String(r[0]).padEnd(22), String(r[1]).padStart(4), String(r[2]).padStart(4), String(r[3]).padStart(8), String(r[4]).padStart(4), String(r[5]).padStart(4));
console.log('\ncategories with >=3 pay figures:', rows.filter((r) => r[2] >= 3).length, '/', rows.length);
console.log('categories with >=3 passRate headlines:', rows.filter((r) => r[3] >= 3).length, '/', rows.length);

const sample = ['cisco-ccna', 'nclex-rn', 'sat-exam', 'comptia-security-plus'];
for (const s of sample) {
  const d = depthFor(s);
  console.log(`\n${s}: pay=${JSON.stringify(d?.salaryOutlook?.headline)?.slice(0, 120)}`);
  console.log(`   pass=${JSON.stringify(d?.passRate?.headline)?.slice(0, 120)}`);
  console.log(`   reviewed=${d?.lastReviewed} verifiedBy=${String(d?.reviewedBy).slice(0, 60)}`);
}
