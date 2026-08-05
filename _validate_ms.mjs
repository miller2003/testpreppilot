import examDepth from './src/data/examCatalog/depth/index.mjs';

const slugs = [
  'microsoft-az-900', 'microsoft-ai-900', 'microsoft-ai-901',
  'microsoft-az-104', 'microsoft-az-204', 'microsoft-az-305',
  'microsoft-az-500', 'microsoft-az-700', 'microsoft-az-140'
];

const SECTIONS = ['salaryOutlook','passRate','studyPlan','prepStrategies','resourceComparison','commonMistakes','questionTypes','examDay'];

const wc = s => (String(s).trim().match(/\S+/g) || []).length;

function collectStrings(v, out = []) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach(x => collectStrings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => collectStrings(x, out));
  return out;
}

function emptyPaths(v, path = '', out = []) {
  if (typeof v === 'string') { if (v.trim() === '' && !/\.url$/.test(path)) out.push(path); }
  else if (Array.isArray(v)) v.forEach((x, i) => emptyPaths(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => emptyPaths(x, path ? `${path}.${k}` : k, out));
  return out;
}

let fail = 0;
const texts = {};

for (const slug of slugs) {
  const d = examDepth[slug];
  if (!d) { console.log(`MISSING  ${slug}`); fail++; continue; }
  const problems = [];

  if (!d.author?.name || !d.author?.title) problems.push('author incomplete');
  if (d.lastReviewed !== '2026-08') problems.push(`lastReviewed=${d.lastReviewed}`);

  const emp = emptyPaths(d);
  if (emp.length) problems.push(`empty strings: ${emp.join(', ')}`);

  const present = [];
  for (const s of SECTIONS) {
    if (!d[s]) continue;
    present.push(s);
    const words = wc(collectStrings(d[s]).join(' '));
    if (words < 250) problems.push(`${s} only ${words} words`);
  }

  // passRate must have no fabricated rows and must carry a caveat
  if (d.passRate) {
    if (d.passRate.rows) problems.push('passRate has rows (should be omitted)');
    if (!d.passRate.caveat || wc(d.passRate.caveat) < 40) problems.push('passRate.caveat missing/short');
  }
  // salary rows need notes
  (d.salaryOutlook?.rows || []).forEach((r, i) => {
    if (!r.note || r.note.trim() === '') problems.push(`salaryOutlook.rows[${i}] missing note`);
  });
  if (d.questionTypes && !d.questionTypes.note) problems.push('questionTypes.note missing');

  texts[slug] = collectStrings(d).join(' ').toLowerCase();

  const total = wc(texts[slug]);
  if (problems.length) { fail++; console.log(`FAIL  ${slug}  (${total} words, sections: ${present.join('/')})`); problems.forEach(p => console.log(`        - ${p}`)); }
  else console.log(`OK    ${slug}  ${total} words, ${present.length} sections: ${present.join('/')}`);
}

// crude sibling similarity on sentence overlap
console.log('\nSibling similarity (shared 8-word shingles):');
const shingles = {};
for (const [slug, t] of Object.entries(texts)) {
  const w = t.replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 8 <= w.length; i++) set.add(w.slice(i, i + 8).join(' '));
  shingles[slug] = set;
}
const keys = Object.keys(shingles);
let worst = 0, worstPair = '';
for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
  const a = shingles[keys[i]], b = shingles[keys[j]];
  let inter = 0; for (const s of a) if (b.has(s)) inter++;
  const jac = inter / (a.size + b.size - inter);
  if (jac > worst) { worst = jac; worstPair = `${keys[i]} vs ${keys[j]}`; }
  if (jac > 0.30) console.log(`  HIGH ${keys[i]} vs ${keys[j]}: ${(jac * 100).toFixed(1)}%`);
}
console.log(`  max overlap: ${(worst * 100).toFixed(1)}%  (${worstPair})  -- threshold 30%`);

console.log(fail === 0 ? '\nALL PASS' : `\n${fail} file(s) with problems`);
