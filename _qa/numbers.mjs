// Numbers for the homepage answer block — computed from the same catalog the
// page renders, so the quoted figures cannot drift from the directory.
import { buildDirectory, getExamDetail } from '../src/data/examCatalog/index.mjs';
import { depthFor } from '../src/data/examCatalog/examDepth.mjs';

const dir = buildDirectory();
const all = dir.flatMap((c) => c.groups.flatMap((g) => g.exams));
const national = all.filter((e) => e.scope !== 'state');
const state = all.filter((e) => e.scope === 'state');

const fees = [];
for (const e of national) {
  const raw = String(getExamDetail(e.slug)?.record?.examMeta?.fee || '');
  // only take the FIRST dollar figure, and only from rows that start with a fee
  const m = /\$([\d,]+)/.exec(raw);
  if (m) fees.push({ slug: e.slug, fee: parseFloat(m[1].replace(/,/g, '')), raw: raw.slice(0, 70) });
}
fees.sort((a, b) => a.fee - b.fee);

let oldest = null, newest = null;
for (const e of national) {
  const r = depthFor(e.slug)?.lastReviewed;
  if (!r) continue;
  if (!oldest || r < oldest) oldest = r;
  if (!newest || r > newest) newest = r;
}

console.log('categories:', dir.length);
console.log('credentials total:', all.length, '| national:', national.length, '| state-issued:', state.length);
console.log('fee rows:', fees.length, 'of', national.length);
console.log('cheapest 5:');
fees.slice(0, 5).forEach((f) => console.log('  $' + f.fee, f.slug, '::', f.raw));
console.log('most expensive 5:');
fees.slice(-5).forEach((f) => console.log('  $' + f.fee, f.slug, '::', f.raw));
console.log('reviewed window:', oldest, '→', newest);
const pct = (n) => Math.round((n / national.length) * 100);
console.log('share with published fee:', pct(fees.length) + '%');
