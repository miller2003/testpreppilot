#!/usr/bin/env node
/**
 * nationalGate.mjs — flagship quality gate for national exam pages.
 *
 * Reads the merged catalog (allExamsFull), the program dossiers, the depth
 * layer and the release manifest, then checks every national slug against the
 * Definition of Done in reports/NATIONAL-PAGES-FLAGSHIP-PLAN (section 1).
 *
 *   node scripts/quality/nationalGate.mjs                 # all national slugs
 *   node scripts/quality/nationalGate.mjs --released      # only slugs in the manifest
 *   node scripts/quality/nationalGate.mjs --fail-only     # only failing slugs in output
 *   node scripts/quality/nationalGate.mjs --slug=arrt-mri # one slug
 *   node scripts/quality/nationalGate.mjs --strict        # exit 1 if any checked slug fails
 *
 * Writes reports/quality/national-gate.json and national-gate.csv.
 * A slug that fails here must not be added to the release manifest.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : null;
};

const CATALOG = pathToFileURL(path.join(ROOT, 'src/data/examCatalog/index.mjs')).href;
const MANIFEST = pathToFileURL(path.join(ROOT, 'src/data/examCatalog/release-manifest.mjs')).href;
const DEPTH = pathToFileURL(path.join(ROOT, 'src/data/examCatalog/depth/index.mjs')).href;

const { allExamsFull, programFor } = await import(CATALOG);
const { isReleased, releases } = await import(MANIFEST);
const { default: examDepth } = await import(DEPTH);

/* ── Skeleton sentences (plan Appendix A, plus the phrases found in the
 *    generic _gen_skeleton.mjs output across the national-research corpus). ── */
export const SKELETON_PATTERNS = [
  /validates job-ready knowledge and skills in the/i,
  /job-ready competence in/i,
  /verified competence in/i,
  /Demonstrates verified competence in/i,
  /Recognized credential from/i,
  /Topic area tested on the exam; see the official blueprint/i,
  /Passing score set by the awarding body/i,
  /see the official score report/i,
  /Eligibility varies; many credentials are open to all/i,
  /many credentials are open to all, while others require/i,
  /Professionals and candidates seeking to validate/i,
  /Candidates should review the official handbook/i,
  /should review the official handbook for eligibility, exam format, and scoring/i,
  /is a professional credential administered by/i,
  /commonly used for career entry, advancement, regulatory compliance/i,
  /career advancement and may satisfy licensing or employer requirements/i,
  /Confirm you meet any eligibility or prerequisites/i,
  /Review the official handbook and study materials/i,
  /Register and pay through the awarding body or authorized provider/i,
  /Schedule and take the exam \(test center or online proctoring\)/i,
  /Receive your score and, if passed, your credential/i,
  /Create an account, select the exam, pay the fee, and schedule a date/i,
  /confirm the current fee on the official registration page/i,
  /fees? vary by location and currency/i,
  /retake policies vary/i,
  /bodies allow retakes after a waiting period/i,
  /through .{0,80}official portal or an authorized test provider \(e\.g\./i,
  /Varies by credential/i,
  /by credential — see the awarding body/i,
  /usually requires continuing education or a recertification exam — see/i,
  /is the awarding organization for the credentials listed on this page/i,
  /Visit the awarding body.s official website/i,
  /computer-based \(test center or online remote proctoring\)/i,
  /Weightings come from the official exam outline/i
];

const DAY_MS = 86400000;
const NOW = opt('today') ? new Date(opt('today')) : new Date();
const FRESH_DAYS = 90;

/* ── helpers ─────────────────────────────────────────────────────────── */
const words = (s) => String(s ?? '').trim().split(/\s+/).filter(Boolean).length;

function leaves(node, out = []) {
  if (node == null) return out;
  if (typeof node === 'string') out.push(node);
  else if (Array.isArray(node)) node.forEach((n) => leaves(n, out));
  else if (typeof node === 'object') Object.values(node).forEach((v) => leaves(v, out));
  return out;
}

function skeletonHits(strings) {
  const hits = new Set();
  for (const s of strings) {
    for (const re of SKELETON_PATTERNS) if (re.test(s)) hits.add(re.source);
  }
  return [...hits];
}

const shingles = (text, n = 5) => {
  const w = String(text).toLowerCase().replace(/[^a-z0-9$%.\s-]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= w.length; i += 1) set.add(w.slice(i, i + n).join(' '));
  return set;
};
const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
};

/* ── index national exams ─────────────────────────────────────────────── */
const allSlugs = new Set(allExamsFull.map((e) => e.slug));
const national = allExamsFull.filter((e) => e.scope === 'national');
const byBody = new Map();
for (const e of national) {
  if (!e.record) continue;
  const list = byBody.get(e.body) || [];
  list.push(e);
  byBody.set(e.body, list);
}
const shingleCache = new Map();
const pageShingles = (e) => {
  if (!shingleCache.has(e.slug)) {
    shingleCache.set(e.slug, shingles(`${e.record.description || ''} ${e.record.quickAnswer?.summary || ''}`));
  }
  return shingleCache.get(e.slug);
};

/* ── the gate ─────────────────────────────────────────────────────────── */
function checkExam(exam) {
  const failures = [];
  const warnings = [];
  const rec = exam.record;
  const depth = examDepth[exam.slug] || null;
  const program = programFor(rec, exam.body);
  const released = Object.prototype.hasOwnProperty.call(releases, exam.slug) && isReleased(exam.slug, NOW);

  if (!rec) {
    failures.push('no-record');
    return { slug: exam.slug, body: exam.body, released, failures, warnings, words: 0, skeleton: [] };
  }

  /* 1. zero skeleton — record, program and depth text */
  const recStrings = leaves(rec);
  const progStrings = program ? leaves(program) : [];
  const depthStrings = depth ? leaves(depth) : [];
  const skeleton = {
    record: skeletonHits(recStrings),
    program: skeletonHits(progStrings),
    depth: skeletonHits(depthStrings)
  };
  if (skeleton.record.length) failures.push(`skeleton-record(${skeleton.record.length})`);
  if (skeleton.program.length) failures.push(`skeleton-program(${skeleton.program.length})`);

  /* 2. exam format — six concrete fields */
  const meta = rec.examMeta || {};
  for (const k of ['questions', 'time', 'pass', 'fee', 'format', 'admin']) {
    if (!String(meta[k] ?? '').trim()) failures.push(`meta-missing:${k}`);
  }
  if (/awarding body|varies/i.test(String(meta.pass || ''))) failures.push('meta-generic:pass');

  /* 3. outline — ≥4 domains; weights sum 95–105 when present */
  const topics = Array.isArray(rec.topics) ? rec.topics : [];
  if (topics.length < 4) failures.push(`topics<4(${topics.length})`);
  const weighted = topics.filter((t) => t.weight && /\d/.test(t.weight));
  if (weighted.length) {
    if (weighted.length !== topics.length) failures.push('topics-weights-partial');
    const sum = weighted.reduce((acc, t) => acc + parseFloat(t.weight), 0);
    if (sum < 95 || sum > 105) failures.push(`topics-weight-sum(${sum})`);
  }

  /* 4. related exams — 3+ valid slugs from the catalog */
  const related = rec.relatedSlugs || [];
  if (related.length < 3) failures.push(`relatedSlugs<3(${related.length})`);
  const badRelated = related.filter((x) => !allSlugs.has(x) || x === exam.slug);
  if (badRelated.length) failures.push(`relatedSlugs-invalid(${badRelated.join(',')})`);
  if (!(rec.summaryPoints || []).length || rec.summaryPoints.length < 4) failures.push(`summaryPoints<4(${(rec.summaryPoints || []).length})`);
  if ((rec.quickAnswer?.advantages || []).length < 4) failures.push('quickAnswer-advantages<4');
  if ((rec.examEssentials || []).length < 5) failures.push(`examEssentials<5(${(rec.examEssentials || []).length})`);

  /* 5. cost & timeline */
  const items = rec.costBreakdown?.items || [];
  if (items.length < 3 || !rec.costBreakdown?.total) failures.push('costBreakdown<3-or-no-total');
  if ((rec.timeline || []).length < 3) failures.push('timeline<3');

  /* 6. FAQ ≥6, answers 40–90 words */
  const faqs = rec.faqs || [];
  if (faqs.length < 6) failures.push(`faqs<6(${faqs.length})`);
  const badAnswers = faqs.filter((f) => {
    const n = words(f.a);
    return n < 40 || n > 90;
  }).length;
  if (badAnswers) failures.push(`faq-answer-length(${badAnswers})`);

  /* 7. program — 4–6 registration steps when a dossier exists */
  if (program) {
    const steps = program.registrationSteps || [];
    if (steps.length < 4) failures.push(`program-steps<4(${steps.length})`);
  } else {
    failures.push('no-program-dossier');
  }

  /* 8. source — a specific page or PDF, not a homepage */
  const src = rec.sourceUrl || program?.sourceUrl || '';
  if (!src) {
    failures.push('no-sourceUrl');
  } else {
    try {
      const u = new URL(src);
      if ((u.pathname === '/' || u.pathname === '') && !/\.pdf$/i.test(u.pathname)) failures.push('sourceUrl-homepage');
    } catch {
      failures.push('sourceUrl-invalid');
    }
  }
  if (depth) {
    for (const [section, val] of Object.entries(depth)) {
      if (!val || typeof val !== 'object' || !Array.isArray(val.rows)) continue;
      const bare = val.rows.filter((r) => !(r?.note || r?.source)).length;
      if (bare) warnings.push(`depth-rows-without-source:${section}(${bare})`);
    }
  } else {
    failures.push('no-depth');
  }

  /* 9. word counts */
  const recWords = recStrings.reduce((n, s) => n + words(s), 0);
  const fullWords = recWords + progStrings.reduce((n, s) => n + words(s), 0) + depthStrings.reduce((n, s) => n + words(s), 0);
  if (recWords < 600) failures.push(`record-words<600(${recWords})`);
  if (fullWords < 3500) failures.push(`page-words<3500(${fullWords})`);

  /* 10. duplicate — Jaccard vs same-body siblings */
  const mine = pageShingles(exam);
  let dupWith = null;
  let dupScore = 0;
  for (const other of byBody.get(exam.body) || []) {
    if (other.slug === exam.slug) continue;
    const j = jaccard(mine, pageShingles(other));
    if (j > dupScore) {
      dupScore = j;
      dupWith = other.slug;
    }
  }
  if (dupScore >= 0.5) failures.push(`duplicate(${dupScore.toFixed(2)} vs ${dupWith})`);

  /* 11. freshness — reviewed ≤ 90 days ago */
  const reviewedRaw = depth?.lastReviewed || rec.reviewed;
  const reviewedDate = reviewedRaw ? new Date(reviewedRaw.length === 7 ? `${reviewedRaw}-01` : reviewedRaw) : null;
  if (!reviewedDate || Number.isNaN(reviewedDate.getTime())) {
    failures.push('no-reviewed-date');
  } else if ((NOW - reviewedDate) / DAY_MS > FRESH_DAYS) {
    failures.push(`stale-review(${reviewedRaw})`);
  }

  return {
    slug: exam.slug,
    body: exam.body,
    released,
    failures,
    warnings,
    words: fullWords,
    skeleton
  };
}

/* ── run ──────────────────────────────────────────────────────────────── */
let targets = national.filter((e) => e.record);
if (flag('released')) targets = targets.filter((e) => Object.prototype.hasOwnProperty.call(releases, e.slug));
const slugFilter = new Set([opt('slug'), ...(opt('slugs') || '').split(',')].filter(Boolean));
if (slugFilter.size) targets = targets.filter((e) => slugFilter.has(e.slug));
if (opt('pkg')) {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'reports', 'quality', 'packages', `${opt('pkg')}.json`), 'utf8'));
  const want = new Set(pkg.slugs);
  targets = national.filter((e) => e.record && want.has(e.slug));
}

const results = targets.map(checkExam);
const outRows = flag('fail-only') ? results.filter((r) => r.failures.length) : results;
const failing = results.filter((r) => r.failures.length);
const releasedRows = results.filter((r) => r.released);

const summary = {
  checked: results.length,
  passing: results.length - failing.length,
  failing: failing.length,
  releasedChecked: releasedRows.length,
  releasedFailing: releasedRows.filter((r) => r.failures.length).length,
  generatedOn: NOW.toISOString().slice(0, 10)
};

const outDir = path.join(ROOT, 'reports', 'quality');
fs.mkdirSync(outDir, { recursive: true });
const scoped = slugFilter.size > 0 || Boolean(opt('pkg'));
if (scoped) {
  // Scoped runs (a writer checking its own slugs) print results and never overwrite the shared report.
  for (const r of results) {
    console.log(`${r.failures.length ? 'FAIL' : 'PASS'} ${r.slug} (${r.words} words)${r.failures.length ? ' :: ' + r.failures.join('; ') : ''}`);
    if (r.warnings.length) console.log(`     warnings: ${r.warnings.join('; ')}`);
  }
  console.log(`scoped gate — ${results.length - failing.length}/${results.length} passing`);
  process.exit(failing.length && flag('strict') ? 1 : 0);
}
fs.writeFileSync(
  path.join(outDir, 'national-gate.json'),
  JSON.stringify({ summary, results: outRows }, null, 2)
);
const esc = (s) => `"${String(s).replace(/"/g, '""')}"`;
const csv = [
  'slug,body,released,pass,failures,warnings,page_words,skeleton_hits',
  ...outRows.map((r) =>
    [
      r.slug,
      esc(r.body),
      r.released,
      r.failures.length === 0,
      esc(r.failures.join('; ')),
      esc(r.warnings.join('; ')),
      r.words,
      r.skeleton ? Object.values(r.skeleton).reduce((n, a) => n + a.length, 0) : 0
    ].join(',')
  )
].join('\n');
fs.writeFileSync(path.join(outDir, 'national-gate.csv'), csv + '\n');

console.log(
  `national gate — checked ${summary.checked}, passing ${summary.passing}, failing ${summary.failing}` +
    ` | released ${summary.releasedChecked}, released failing ${summary.releasedFailing}`
);
if (flag('strict') && failing.length) process.exitCode = 1;
