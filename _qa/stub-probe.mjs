// Is `status: 'stub'` the structured signal for "retired / no longer offered"?
import { buildDirectory } from '../src/data/examCatalog/index.mjs';
import { depthFor } from '../src/data/examCatalog/examDepth.mjs';

const rows = buildDirectory().flatMap((c) => c.groups.flatMap((g) => g.exams));
const byStatus = {};
for (const e of rows) (byStatus[e.status || 'none'] = byStatus[e.status || 'none'] || []).push(e.slug);
console.log('status distribution among listed exams:', Object.entries(byStatus).map(([k, v]) => `${k}=${v.length}`).join('  '));

const stubs = rows.filter((e) => e.status === 'stub');
console.log('\nstub rows:', stubs.length);
for (const e of stubs) {
  const d = depthFor(e.slug) || {};
  const txt = `${d.salaryOutlook?.headline || ''} ${d.passRate?.headline || ''}`.toLowerCase();
  const flag = /no longer|retired|withdrawn|discontinued|no further attempts/.test(txt) ? 'RETIRED-SIGNAL' : '-';
  console.log(`  ${e.slug.padEnd(34)} ${e.scope.padEnd(9)} ${flag}`);
}

// Which released credentials carry a retirement signal in their headline text?
console.log('\nreleased credentials whose headlines signal retirement:');
for (const e of rows) {
  const d = depthFor(e.slug) || {};
  const txt = `${d.salaryOutlook?.headline || ''} ${d.passRate?.headline || ''}`.toLowerCase();
  if (/no longer obtainable|no further attempts|withdrawn from|no longer offered|has been retired/.test(txt)) {
    console.log(`  ${e.slug.padEnd(34)} ${e.scope}`);
  }
}
