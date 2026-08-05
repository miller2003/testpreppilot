// Integrity check for the national exam research output.
//   node src/data/examCatalog/national-research/validateNational.mjs
//   node src/data/examCatalog/national-research/validateNational.mjs 33   ← one batch

import { nationalExams } from '../index.mjs';
import {
  nationalPrograms,
  nationalExamRecords,
  nationalBySlug,
  programByBody,
  isPublishable
} from './index.mjs';

const errors = [];
const warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

const catalogBySlug = new Map(nationalExams.map((e) => [e.slug, e]));
const catalogBodies = new Set(nationalExams.map((e) => e.body).filter(Boolean));

// ── programs ────────────────────────────────────────────────────────
const seenProgram = new Set();
for (const p of nationalPrograms) {
  const tag = `program "${p.body}"`;
  if (seenProgram.has(p.body)) E(`${tag}: duplicate program dossier`);
  seenProgram.add(p.body);

  if (!catalogBodies.has(p.body)) W(`${tag}: body does not match any catalog row (typo?)`);
  if (!p.about || p.about.length < 60) E(`${tag}: about is missing or too short`);
  if (p.registrationSteps.length < 3) E(`${tag}: needs >=3 registrationSteps (has ${p.registrationSteps.length})`);
  p.registrationSteps.forEach((s, i) => {
    if (!s.description || s.description.length < 30) W(`${tag}: registrationSteps[${i}] "${s.title}" has thin description`);
  });
  if (!p.retakePolicy) E(`${tag}: retakePolicy missing`);
  if (!p.recertification) W(`${tag}: recertification missing`);
  if (!p.proctoring) W(`${tag}: proctoring missing`);
  if (p.sourceUrl && !/^https?:\/\//.test(p.sourceUrl)) E(`${tag}: sourceUrl is not absolute`);
  if (!p.sourceUrl) W(`${tag}: sourceUrl missing`);
}

// ── exams ───────────────────────────────────────────────────────────
const seenExam = new Set();
for (const e of nationalExamRecords) {
  const tag = `exam "${e.slug}"`;
  if (seenExam.has(e.slug)) E(`${tag}: duplicate exam record`);
  seenExam.add(e.slug);

  if (!catalogBySlug.has(e.slug)) {
    E(`${tag}: slug not in the national catalog — content will never render`);
    continue;
  }
  if (e.body && !programByBody[e.body]) W(`${tag}: body "${e.body}" has no program dossier`);

  if (!e.tagline) E(`${tag}: tagline missing`);
  if (!e.description || e.description.length < 180) E(`${tag}: description missing or under 180 chars`);
  if (!e.quickAnswer?.summary) E(`${tag}: quickAnswer.summary missing`);
  else if (e.quickAnswer.summary.length < 120) W(`${tag}: quickAnswer.summary is thin`);
  if ((e.quickAnswer?.advantages || []).length < 3) W(`${tag}: quickAnswer needs >=3 advantages`);

  if (!e.examMeta) E(`${tag}: examMeta missing`);
  else {
    for (const k of ['questions', 'time', 'pass', 'fee', 'format', 'admin']) {
      if (!e.examMeta[k]) W(`${tag}: examMeta.${k} empty`);
    }
  }

  if (e.roadmap.length < 3) W(`${tag}: roadmap has ${e.roadmap.length} steps (want 4-6)`);
  if (!e.topics.length) W(`${tag}: no topic breakdown`);
  if (e.examEssentials.length < 3) W(`${tag}: examEssentials has ${e.examEssentials.length} rows (want 4-6)`);
  if (!e.timeline.length) W(`${tag}: timeline missing`);
  if (!e.costBreakdown) W(`${tag}: costBreakdown missing`);
  if (e.faqs.length < 4) (e.faqs.length < 3 ? E : W)(`${tag}: only ${e.faqs.length} FAQs (want 4-6)`);
  e.faqs.forEach((f, i) => {
    if (f.a.length < 60) W(`${tag}: faqs[${i}] answer is one-liner`);
  });
  if (e.summaryPoints.length < 3) W(`${tag}: only ${e.summaryPoints.length} summaryPoints`);
  if (!e.sourceUrl) W(`${tag}: sourceUrl missing`);
  else if (!/^https?:\/\//.test(e.sourceUrl)) E(`${tag}: sourceUrl is not absolute`);
  if (!e.prerequisites) W(`${tag}: prerequisites missing (say "None" if open entry)`);

  for (const rs of e.relatedSlugs) {
    if (!catalogBySlug.has(rs) && rs !== e.slug) W(`${tag}: relatedSlugs "${rs}" is not a catalog slug`);
  }
}

// ── coverage ────────────────────────────────────────────────────────
const covered = nationalExams.filter((e) => nationalBySlug[e.slug]).length;
const publish = nationalExamRecords.filter(isPublishable).length;

const byCat = new Map();
for (const e of nationalExams) {
  const c = byCat.get(e.category) || { total: 0, done: 0 };
  c.total++;
  if (isPublishable(nationalBySlug[e.slug])) c.done++;
  byCat.set(e.category, c);
}

console.log('── National research coverage ──────────────────────────────');
console.log(`programs        ${nationalPrograms.length}`);
console.log(`exam records    ${nationalExamRecords.length}`);
console.log(`publishable     ${publish}`);
console.log(`catalog covered ${covered} / ${nationalExams.length}  (${((covered / nationalExams.length) * 100).toFixed(1)}%)`);
console.log('');
console.log('category                     done / total');
for (const [cat, c] of [...byCat.entries()].sort((a, b) => b[1].total - a[1].total)) {
  const bar = '█'.repeat(Math.round((c.done / c.total) * 20)).padEnd(20, '·');
  console.log(`${cat.padEnd(26)} ${String(c.done).padStart(4)} / ${String(c.total).padEnd(5)} ${bar}`);
}

console.log('');
if (errors.length) {
  console.log(`── ${errors.length} ERRORS ───────────────────────────────────`);
  errors.slice(0, 60).forEach((e) => console.log('  ✗ ' + e));
  if (errors.length > 60) console.log(`  … ${errors.length - 60} more`);
}
if (warnings.length) {
  console.log(`── ${warnings.length} warnings (first 40) ────────────────────`);
  warnings.slice(0, 40).forEach((w) => console.log('  ! ' + w));
}
console.log('');
console.log(errors.length ? `FAIL — ${errors.length} errors, ${warnings.length} warnings` : `PASS — 0 errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
