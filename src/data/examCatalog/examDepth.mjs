/**
 * examDepth — the shared "depth layer" for gold-standard exam pages.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The site has two independent render pipelines:
 *
 *   /exams/<slug>   →  src/pages/exams/[slug].astro   ← national-research/batchNN.mjs
 *   /paths/<slug>   →  src/components/ExamGuide.astro ← credentials.ts + examEditorial.mjs
 *
 * The competitor gap analysis found eight sections missing from BOTH pipelines.
 * Rather than extend two different schemas and two merge pipelines, every one of
 * those sections lives here, keyed by slug. Both renderers look the slug up and
 * render whatever is present. A slug with no entry renders exactly as before —
 * this layer is purely additive and never breaks an existing page.
 *
 * SCHEMA (all fields optional; omit rather than invent)
 * -----------------------------------------------------
 * examDepth['some-slug'] = {
 *
 *   // ---- E-E-A-T ------------------------------------------------------
 *   author: {
 *     name: 'Dana Whitfield, CPA',        // real named human
 *     title: 'Former state board examiner',
 *     bio: '1-2 sentences establishing why this person can speak to the exam.',
 *     url: '/about#dana-whitfield'        // optional author page
 *   },
 *   reviewedBy: 'Marcus Ellery, EA',      // optional second pair of eyes
 *   lastReviewed: '2026-08',              // YYYY-MM — surfaced next to the byline
 *
 *   // ---- P0-1  Career outlook & salary ---------------------------------
 *   salaryOutlook: {
 *     headline: '$63,680 median (BLS, May 2024)',
 *     summary: '2-4 sentences of genuinely exam-specific narrative. What the
 *               credential does to pay, which employers pay the premium, how
 *               the number moves with experience or geography.',
 *     rows: [                              // 3-6 rows, the sourced data points
 *       { label: 'Median annual wage', value: '$63,680', note: 'BLS OES 29-2061, May 2024' },
 *       { label: 'Top 10%', value: '$92,340' }
 *     ],
 *     growth: '6% growth 2024-2034 (faster than average)',
 *     source: { label: 'BLS Occupational Outlook Handbook', url: 'https://www.bls.gov/ooh/...' }
 *   },
 *
 *   // ---- P0-2  Pass rates ----------------------------------------------
 *   passRate: {
 *     headline: '~74% first-time pass rate',
 *     summary: '2-4 sentences. What the published number actually measures,
 *               first-time vs cumulative, why it is higher or lower than peers.',
 *     rows: [{ label: 'First-time candidates', value: '74%', note: '2024 program report' }],
 *     source: { label: 'AAMA 2024 Annual Report', url: 'https://...' },
 *     caveat: 'Say so plainly when the body does not publish a rate.'
 *   },
 *
 *   // ---- P0-3  Study plan / timetable ----------------------------------
 *   studyPlan: {
 *     summary: 'Intro: total hours, the assumption behind the schedule.',
 *     totalHours: '80-120 hours',
 *     weeks: [
 *       { label: 'Weeks 1-2', focus: 'Domain 1 — Anatomy',
 *         tasks: ['Concrete action', 'Concrete action'], hours: '8-10 hrs/week' }
 *     ],
 *     variants: [                          // optional alternate paces
 *       { label: 'Working full-time', detail: 'Stretch to 16 weeks at 5 hrs/week.' }
 *     ]
 *   },
 *
 *   // ---- P0-4  Prep strategies & study techniques ----------------------
 *   prepStrategies: {
 *     summary: 'Intro sentence framing what actually moves the needle here.',
 *     items: [
 *       { title: 'Drill the calculation questions cold',
 *         detail: '2-4 sentences of specific, testable advice for THIS exam.' }
 *     ]
 *   },
 *
 *   // ---- P0-5  Study-resource comparison table -------------------------
 *   resourceComparison: {
 *     summary: 'Optional framing sentence.',
 *     columns: ['Resource', 'Price', 'Format', 'Best for'],
 *     rows: [{ label: 'Official study guide', values: ['$60', 'Print + digital', 'Blueprint coverage'] }],
 *     footnote: 'Prices checked 2026-08. We do not rank by commission.'
 *   },
 *
 *   // ---- P0-6  Common mistakes -----------------------------------------
 *   commonMistakes: {
 *     summary: 'Optional intro.',
 *     items: [
 *       { mistake: 'Treating the practice exam as the blueprint',
 *         fix: 'What to do instead, concretely.' }
 *     ]
 *   },
 *
 *   // ---- P0-7  Question types & worked examples ------------------------
 *   questionTypes: {
 *     summary: 'Intro: how the paper is actually constructed.',
 *     types: [
 *       { name: 'Multiple choice', share: '~80%',
 *         detail: 'What these look like and how they are scored.' }
 *     ],
 *     samples: [
 *       { prompt: 'A realistic stem in the style of the real exam.',
 *         options: ['A. ...', 'B. ...', 'C. ...', 'D. ...'],   // optional
 *         answer: 'B',
 *         explanation: 'Why B is right AND why the tempting distractor is wrong.' }
 *     ],
 *     note: 'Samples are written by our editors to match the published blueprint; they are not real exam items.'
 *   },
 *
 *   // ---- P0-8  Exam-day guide -------------------------------------------
 *   examDay: {
 *     summary: 'Intro: what the morning actually looks like.',
 *     bring: ['Government photo ID matching your registration exactly'],
 *     leave: ['Phones, smartwatches, and bags — stored in a locker'],
 *     timeline: [{ time: '30 min before', detail: 'Arrive for check-in and palm-vein scan.' }],
 *     rules: ['Scratch paper is provided and collected; you may not bring your own.'],
 *     afterwards: 'Preliminary result on screen; official report in X business days.'
 *   }
 * }
 *
 * RULES
 * -----
 * 1. No fabrication. Every number in `rows` needs a `note` or a `source`.
 *    If a body publishes no pass rate, use `caveat` and say so.
 * 2. Each section needs ≥250 words of exam-specific narrative across its prose
 *    fields. Template text that would read the same on a sibling page is a defect.
 * 3. Sample questions are editor-written illustrations of the published blueprint.
 *    Never reproduce live exam items.
 * 4. Salary figures cite BLS where an SOC code fits; otherwise a named survey.
 * 5. `lastReviewed` must be bumped whenever the numbers are re-checked.
 *
 * FILE LAYOUT
 * -----------
 * One file per slug in `./depth/<slug>.mjs`, each a default-exported object
 * matching the schema above. `./depth/index.mjs` is generated by
 * `_gen_depth_index.mjs` and simply re-exports them keyed by slug. Splitting by
 * slug keeps diffs readable and lets several researchers work in parallel
 * without touching the same file.
 */

import depthBySlug from './depth/index.mjs';

const examDepth = depthBySlug;

/** Depth record for a slug, or null. */
export function depthFor(slug) {
  if (!slug) return null;
  return examDepth[slug] || null;
}

/** Which P0 sections actually have content — drives sidebar nav in both renderers. */
export function depthSections(depth) {
  if (!depth) return [];
  const out = [];
  if (depth.salaryOutlook) out.push({ id: 'salary', label: 'Salary & Outlook' });
  if (depth.passRate) out.push({ id: 'pass-rate', label: 'Pass Rates' });
  if (depth.studyPlan?.weeks?.length) out.push({ id: 'study-plan', label: 'Study Plan' });
  if (depth.prepStrategies?.items?.length) out.push({ id: 'strategies', label: 'Prep Strategies' });
  if (depth.resourceComparison?.rows?.length) out.push({ id: 'resources', label: 'Study Resources' });
  if (depth.commonMistakes?.items?.length) out.push({ id: 'mistakes', label: 'Common Mistakes' });
  if (depth.questionTypes?.types?.length || depth.questionTypes?.samples?.length)
    out.push({ id: 'question-types', label: 'Question Types' });
  if (depth.examDay) out.push({ id: 'exam-day', label: 'Exam Day' });
  return out;
}

export { examDepth };
export default examDepth;
