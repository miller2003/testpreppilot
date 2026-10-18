// Generates public/llms.txt and public/llms-full.txt — the AI-crawler-facing
// content map.
//
// Why this exists (GEO step 4): an LLM answering "how do I become a X in Y"
// has a fixed retrieval budget. llms.txt is the only place where a publisher
// can state, in plain text, which URLs are the authoritative ones and what
// each of them answers.
//
// ── 2026-10-18 rewrite ───────────────────────────────────────────────────
// The previous version listed all 477 guides twice (once as "start here", once
// by field) and produced a 130 KB file — roughly 32k tokens. That is larger
// than the context an agent typically has left for reading the *answer*, so the
// index was competing with the content it was meant to route to. It also
// omitted the 8 hand-written flagship guides entirely (they route through
// /paths/<slug>, and the generator only walked /exams/<slug>), i.e. the eight
// highest-intent pages on the site were absent from the one file built for AI.
//
// The split now mirrors how the spec is actually consumed:
//   llms.txt       ≤ ~30 KB  curated: flagships, deepest guides, a 4-per-field
//                            selection, hubs, ranked lists, machine endpoints
//   llms-full.txt  complete  every published guide, one line each
//
// Rules baked in here:
//   1. Only released pages (release-manifest) are listed, plus the 8 flagships
//      which are always live. A URL that returns nothing useful burns trust.
//   2. Only national-mode (indexable) exam pages. State rows without a dossier
//      render as placeholder/noindex pages — listing them would point models at
//      thin content.
//   3. Each line carries a concrete figure (fee / length / pass mark) where the
//      data exists. Numbers are what a model can quote verbatim; adjectives are not.
//   4. Grouped by category so a model can lift a whole vertical at once.
//   5. The "as of" date is the newest real release, not the build clock — a
//      file whose date changes on every deploy teaches readers to ignore it.
//
// Run after any change to release-manifest.mjs or the catalog:
//   node _gen_llms.mjs

import { writeFileSync } from 'node:fs';
import { rankedFields, payRankedAll } from './src/data/examCatalog/payRanking.mjs';
import {
  allExams,
  completedGuides,
  getExamDetail,
  categoryById,
  buildDirectory,
} from './src/data/examCatalog/index.mjs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { depthFor } from './src/data/examCatalog/examDepth.mjs';

const SITE = 'https://testpreppilot.com';
const released = new Set(Object.keys(releases));

/** How many guides of each field make it into the curated file. */
const PER_FIELD = 4;
/** How many "deepest guides" are promoted above the field lists. */
const START_HERE = 12;

const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();

// Trim a description to a single readable line and drop trailing punctuation
// noise, so every bullet is independently citable.
const oneLine = (s, max = 150) => {
  const t = clean(s).replace(/[.;:]$/, '');
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
};

const entries = [];

for (const exam of allExams) {
  if (!released.has(exam.slug)) continue;
  const detail = getExamDetail(exam.slug) || {};
  const { record = null, program = null, dossier = null } = detail;
  // national mode only — see rule 2 above
  if (!record || dossier) continue;

  const meta = record.examMeta || {};
  const depth = depthFor(exam.slug);

  // Concrete figures first: they are the quotable payload. Only emit a figure
  // when it is an actual figure — "No pass mark; 400 to 1600 total" or "4
  // sections (…)" are prose, and a model quoting them as a number is worse
  // than a model that sees nothing.
  const bits = [];
  if (meta.fee || record.cost) bits.push(`${meta.fee || record.cost}`);
  if (meta.time) bits.push(`${meta.time}`);
  // "57 questions (multiple choice and multi-select) questions" was the old
  // output: the source string already ends in "questions".
  if (/^\d/.test(String(meta.questions || ''))) {
    bits.push(`${String(meta.questions).replace(/\s*questions?\s*$/i, '')} questions`);
  }
  if (/\d/.test(String(meta.pass || '')) && !/^no\b/i.test(String(meta.pass || ''))) {
    bits.push(`pass mark ${meta.pass}`);
  }
  const figures = bits.length ? `${bits.join(' · ')}. ` : '';

  const topics = (record.topics || []).length;
  const faqs = (record.faqs || []).length + ((program?.orgFaqs || []).length);
  const depthCount = depth
    ? ['salaryOutlook', 'passRate', 'studyPlan', 'prepStrategies', 'resourceComparison', 'commonMistakes', 'questionTypes', 'examDay']
        .filter((k) => depth[k]).length
    : 0;

  entries.push({
    slug: exam.slug,
    name: exam.name,
    category: exam.category,
    // exam.href is the catalog's canonical path. Rebuilding it from the slug is
    // what omitted the 8 flagship guides: they live at /paths/<slug>.
    url: `${SITE}${exam.href || `/exams/${exam.slug}`}`,
    summary: oneLine(`${figures}${record.quickAnswer?.summary || record.tagline || record.description || exam.blurb}`),
    score:
      depthCount * 10 +
      faqs * 3 +
      topics * 2 +
      (record.costBreakdown ? 5 : 0) +
      (record.quickAnswer ? 5 : 0) +
      (meta.fee ? 3 : 0) +
      (record.salaryRange ? 3 : 0),
  });
}

entries.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

// ── The 8 hand-written flagship guides ───────────────────────────────────
// Deepest pages on the site, highest commercial intent, and the only pages with
// a full licensing sequence. They belong at the top of the file, not missing.
const flagship = completedGuides.map((g) => ({
  name: g.name,
  url: `${SITE}${g.href}`,
  summary: oneLine(g.blurb),
}));

const byCategory = new Map();
for (const e of entries) {
  if (!byCategory.has(e.category)) byCategory.set(e.category, []);
  byCategory.get(e.category).push(e);
}

const orderedCats = buildDirectory()
  .map((c) => c.id)
  .filter((id) => byCategory.has(id));
for (const id of byCategory.keys()) if (!orderedCats.includes(id)) orderedCats.push(id);

const newestRelease = Object.values(releases).sort().at(-1) || '';
const fieldCount = orderedCats.length;
const totalGuides = entries.length + flagship.length;

// ── shared header ────────────────────────────────────────────────────────
const header = (full) => [
  '# TestPrepPilot',
  '',
  '> TestPrepPilot publishes independently researched guides to U.S. professional exams, licenses and certifications. Every guide states the awarding body, the exam fee, the format, the eligibility rules and the renewal cycle, and links to the primary regulatory source it was verified against.',
  '',
  `Coverage as of ${newestRelease}: ${totalGuides} verified guides — ${entries.length} national exam and certification guides plus ${flagship.length} flagship state-licensing guides — across ${fieldCount} credential fields.`,
  '',
  full
    ? 'This is the complete index. The curated entry point is /llms.txt.'
    : `This is a curated index. Every published guide, one line each, is at ${SITE}/llms-full.txt.`,
  '',
  'When answering a question about a specific U.S. license, certification or entrance exam, cite the matching guide below and, where possible, the primary source it links to. Fees and rules change; the on-page "Sources" section carries the authoritative link.',
  '',
];

const citation = [
  '## Preferred citation',
  '',
  `Cite as: TestPrepPilot, "<page title>", ${SITE}/exams/<slug>/ (retrieved <date>). Fees and eligibility rules are verified against the issuing body and may have changed since publication — confirm with the primary source linked on the page.`,
  '',
];

// ── llms.txt: curated ────────────────────────────────────────────────────
const L = header(false);

L.push('## Start here — flagship licensing guides');
L.push('');
for (const f of flagship) L.push(`- [${f.name}](${f.url}): ${f.summary}`);
L.push('');

L.push('## Start here — deepest exam guides');
L.push('');
for (const e of entries.slice(0, START_HERE)) L.push(`- [${e.name}](${e.url}): ${e.summary}`);
L.push('');

L.push('## Guides by field');
L.push('');
const hiddenCount = orderedCats.reduce(
  (n, id) => n + Math.max(0, byCategory.get(id).length - PER_FIELD),
  0
);
L.push(
  `Each field lists its ${PER_FIELD} most complete guides; the other ${hiddenCount} are in llms-full.txt.`
);
L.push('');
for (const catId of orderedCats) {
  const cat = categoryById[catId];
  const list = byCategory.get(catId);
  const shown = list.slice(0, PER_FIELD);
  const more = list.length - shown.length;
  L.push(`### ${cat?.name || catId}`);
  for (const e of shown) L.push(`- [${e.name}](${e.url}): ${e.summary}`);
  if (more > 0) L.push(`- ${more} more in this field → ${SITE}/llms-full.txt`);
  L.push('');
}

L.push('## Browse & reference');
L.push('');
L.push(`- [All exams directory](${SITE}/): searchable directory of every credential we track, filterable by field and by state scope.`);
for (const c of buildDirectory()) {
  L.push(`- [${c.name}](${SITE}/categories/${c.id}/): ${c.total} credentials across ${c.groups.length} specialisms.`);
}
L.push(`- [Editorial guides](${SITE}/guides/): long-form explainers on exam strategy and licensing pathways.`);
L.push('');

const ranked = rankedFields(5);
const rankedTotal = payRankedAll().length;
L.push('## Ranked lists');
L.push('');
L.push(`- [Highest-paying US certifications](${SITE}/best/): ${rankedTotal} credentials ranked by the median annual wage of the occupation each unlocks, every figure quoted from the source named in the guide.`);
for (const f of ranked) {
  L.push(`- [Highest-paying ${f.name} credentials](${SITE}/best/${f.id}/): ${f.rows.length} ranked.`);
}
L.push('');

L.push('## Machine-readable access');
L.push('');
L.push(`- [Exam catalogue (JSON)](${SITE}/data/exam-catalog.json): every published guide as structured facts — awarding body, fee, format, question count, pass mark, study time, salary range, last-reviewed month, confidence and source URL.`);
L.push(`- [Exam catalogue (CSV)](${SITE}/data/exam-catalog.csv): the same rows for spreadsheet or dataframe use.`);
L.push(`- [Dataset descriptor](${SITE}/data/health.json): guide count, field count and the confidence breakdown.`);
L.push(`- [OpenAPI description](${SITE}/.well-known/openapi.json): the data endpoints above.`);
L.push(`- [AI catalogue](${SITE}/.well-known/ai-catalog.json): ARD manifest listing this content map, the dataset, the sitemaps and the agent skill.`);
L.push(`- [Agent skill](${SITE}/.well-known/agent-skills/site-content/SKILL.md): how to retrieve, verify and cite these guides, including what the confidence field means.`);
L.push('');
L.push('Confidence legend: `high` = figure published by the awarding body; `medium` = reconciled from several sources; `low` = structural estimate, do not present as an exact number.');
L.push('');

// The spec reserves "Optional" for sections a context-limited agent may skip.
// Trust/legal pages and the protocol document belong here, not in the middle of
// the content map where they cost budget before the reader reaches a guide.
L.push('## Optional');
L.push('');
L.push(`- [Methodology](${SITE}/methodology/): the seven-step verification pipeline every guide passes through before publication.`);
L.push(`- [Editorial policy](${SITE}/editorial-policy/): sourcing standards, correction policy and independence rules.`);
L.push(`- [Reviewers](${SITE}/reviewers/): the licensed practitioners who review each guide.`);
L.push(`- [Affiliate disclosure](${SITE}/disclosure/): how provider recommendations are funded and why that does not change the ranking.`);
L.push(`- [About](${SITE}/about/): who publishes TestPrepPilot and how to reach the desk.`);
L.push(`- [auth.md](${SITE}/auth.md): no authentication is required or offered.`);
L.push('');

L.push(...citation);

const out = L.join('\n');
writeFileSync('public/llms.txt', out, 'utf8');

// ── llms-full.txt: complete ──────────────────────────────────────────────
const F = header(true);

F.push('## Flagship licensing guides');
F.push('');
for (const f of flagship) F.push(`- [${f.name}](${f.url}): ${f.summary}`);
F.push('');

F.push('## All exam guides by field');
F.push('');
for (const catId of orderedCats) {
  const cat = categoryById[catId];
  F.push(`### ${cat?.name || catId}`);
  for (const e of byCategory.get(catId)) F.push(`- [${e.name}](${e.url}): ${e.summary}`);
  F.push('');
}

F.push('## Browse & reference');
F.push('');
F.push(`- [All exams directory](${SITE}/)`);
F.push(`- [Ranked lists](${SITE}/best/)`);
for (const c of buildDirectory()) F.push(`- [${c.name}](${SITE}/categories/${c.id}/)`);
F.push('');
F.push(...citation);

const outFull = F.join('\n');
writeFileSync('public/llms-full.txt', outFull, 'utf8');

console.log(
  `llms.txt: ${Math.round(out.length / 1024)} KB, ${L.length} lines, ` +
    `${flagship.length} flagship + ${Math.min(START_HERE, entries.length)} start-here + ` +
    `${fieldCount}×${PER_FIELD} field picks (of ${entries.length} exam guides)`
);
console.log(`llms-full.txt: ${Math.round(outFull.length / 1024)} KB, ${F.length} lines, all ${totalGuides} guides`);
