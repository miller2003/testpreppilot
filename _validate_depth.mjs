// Audits the depth layer against the gap-analysis quality bar.
//   node _validate_depth.mjs
import examDepth, { depthSections } from './src/data/examCatalog/examDepth.mjs';

const P0 = [
  ['salaryOutlook', 'Salary'],
  ['passRate', 'PassRate'],
  ['studyPlan', 'StudyPlan'],
  ['prepStrategies', 'Strategies'],
  ['resourceComparison', 'Resources'],
  ['commonMistakes', 'Mistakes'],
  ['questionTypes', 'QTypes'],
  ['examDay', 'ExamDay'],
];

// Collect every string in a subtree so we can word-count the prose per section.
function strings(v, acc = []) {
  if (typeof v === 'string') { if (v.trim()) acc.push(v); return acc; }
  if (Array.isArray(v)) { for (const x of v) strings(x, acc); return acc; }
  if (v && typeof v === 'object') { for (const x of Object.values(v)) strings(x, acc); return acc; }
  return acc;
}
const words = (v) => strings(v).join(' ').split(/\s+/).filter(Boolean).length;

// Unfilled stub values. Anchored to the START of the string on purpose: "coverage
// varies by exam" is legitimate prose, whereas a field whose entire value is
// "Varies by exam" is an unfilled placeholder.
const PLACEHOLDER = /^\s*(TBD|TODO|Varies by (exam|credential)|Lorem ipsum|XXX|FIXME)\b/i;

// Jaccard over word shingles — the gap analysis wants siblings < 70% similar.
function shingles(text, n = 3) {
  const w = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
  return s;
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

const slugs = Object.keys(examDepth).sort();
const problems = [];
const rows = [];

for (const slug of slugs) {
  const d = examDepth[slug];
  const present = [];
  const thin = [];
  const empty = [];

  // A retired exam legitimately has no study plan, prep strategies, current
  // resource market or exam day — writing them would be actively misleading.
  const retired = /\bretired\b/i.test(strings(d).join(' ').slice(0, 4000));
  const EXEMPT_WHEN_RETIRED = new Set(['StudyPlan', 'Strategies', 'Resources', 'ExamDay']);

  // Table-driven sections carry their substance in cells, not prose.
  const THIN_FLOOR = { Resources: 90 };

  for (const [key, label] of P0) {
    const block = d?.[key];
    if (!block) {
      if (!(retired && EXEMPT_WHEN_RETIRED.has(label))) empty.push(label);
      continue;
    }
    present.push(label);
    const w = words(block);
    if (w < (THIN_FLOOR[label] ?? 120)) thin.push(`${label}(${w}w)`);
  }

  const total = words(d);
  const author = d?.author?.name?.trim() || '';
  const reviewed = d?.lastReviewed || '';

  // Sourcing: every numeric table row should carry a note or the block a source url.
  let unsourced = 0;
  for (const key of ['salaryOutlook', 'passRate']) {
    const block = d?.[key];
    if (!block) continue;
    const hasBlockSource = !!block.source?.url;
    for (const r of block.rows || []) {
      if (!r?.note?.trim() && !hasBlockSource) unsourced++;
    }
  }

  const ph = strings(d).filter((s) => PLACEHOLDER.test(s));

  if (!author) problems.push(`${slug}: MISSING author.name (E-E-A-T)`);
  if (!reviewed) problems.push(`${slug}: MISSING lastReviewed`);
  if (empty.length) problems.push(`${slug}: missing sections -> ${empty.join(', ')}`);
  if (thin.length) problems.push(`${slug}: thin sections -> ${thin.join(', ')}`);
  if (unsourced) problems.push(`${slug}: ${unsourced} numeric row(s) with no note/source`);
  if (ph.length) problems.push(`${slug}: placeholder text -> ${ph.slice(0, 2).map((s) => s.slice(0, 60)).join(' | ')}`);
  if (total < 700) problems.push(`${slug}: total depth prose only ${total} words (<700)`);

  rows.push({
    slug,
    sections: `${present.length}/8`,
    words: total,
    author: author ? 'yes' : 'NO',
    nav: depthSections(d).length,
  });
}

console.log('\n=== DEPTH LAYER AUDIT ===\n');
console.log(
  ['slug'.padEnd(36), 'P0'.padEnd(5), 'words'.padEnd(7), 'author'.padEnd(7), 'nav'].join(' ')
);
console.log('-'.repeat(70));
for (const r of rows) {
  console.log(
    [String(r.slug).padEnd(36), String(r.sections).padEnd(5), String(r.words).padEnd(7), String(r.author).padEnd(7), String(r.nav)].join(' ')
  );
}

// ---- sibling similarity ----
const FAMILIES = {
  microsoft: slugs.filter((s) => s.startsWith('microsoft-')),
  cisco: slugs.filter((s) => s.startsWith('cisco-')),
  realestate: slugs.filter((s) => s.endsWith('-real-estate-license')),
  osha: slugs.filter((s) => s.startsWith('osha-')),
  bookkeeping: ['aipb-certified-bookkeeper', 'nacpb-cpb'].filter((s) => slugs.includes(s)),
};

console.log('\n=== SIBLING SIMILARITY (Jaccard, 3-gram; must stay < 0.70) ===\n');
const cache = {};
for (const s of slugs) cache[s] = shingles(strings(examDepth[s]).join(' '));
for (const [fam, members] of Object.entries(FAMILIES)) {
  if (members.length < 2) continue;
  let worst = { pair: '', v: 0 };
  for (let i = 0; i < members.length; i++) {
    for (let j = i + 1; j < members.length; j++) {
      const v = jaccard(cache[members[i]], cache[members[j]]);
      if (v > worst.v) worst = { pair: `${members[i]} vs ${members[j]}`, v };
    }
  }
  const flag = worst.v >= 0.7 ? '  <-- TOO SIMILAR' : '';
  console.log(`${fam.padEnd(13)} worst ${worst.v.toFixed(3)}  ${worst.pair}${flag}`);
  if (worst.v >= 0.7) problems.push(`${fam}: siblings ${worst.pair} are ${(worst.v * 100).toFixed(0)}% similar`);
}

console.log('\n=== PROBLEMS ===\n');
if (!problems.length) {
  console.log('None. All ' + slugs.length + ' records clean.');
} else {
  for (const p of problems) console.log('  - ' + p);
  console.log(`\n${problems.length} problem(s) across ${slugs.length} records.`);
}
