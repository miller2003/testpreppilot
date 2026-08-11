# TestPrepPilot Depth Page Production Brief (Batch 11-18)

You are writing high-quality SEO depth pages for the TestPrepPilot Astro site. Read this brief fully before starting.

## Your Task
For EACH slug in your assigned list:
1. **Research first (mandatory):** Use WebSearch/WebFetch to verify official facts for the exam:
   - Administering body / official website
   - Number of questions, time limit, format (computer/paper)
   - Registration fee (exact from official page if possible)
   - Passing score / pass rate IF officially published — if NOT published, state plainly that it is not published (NEVER invent a number)
   - Content categories / blueprint
   - Retake rules if published
2. **Salary (mandatory):** Use BLS Occupational Outlook Handbook (May 2024 data) — search the specific occupation page. Cite SOC code + occupation name + median annual wage. NEVER invent salary figures. If the closest occupation is a mismatch, say so honestly.
3. **Write** `C:\Users\samja\Desktop\testpreppilot-v2\src\data\examCatalog\depth\<slug>.mjs` following the schema below.
4. **Syntax check:** run `node --check` on the file (use `C:/Users/samja/.workbuddy/binaries/node/versions/22.22.2/node.exe`).

## File Schema (8 P0 sections, exact field names)
```js
const data = {
  author: { name: 'TestPrepPilot Editorial Desk', title: '<desk name>', bio: '<honest sourcing statement>', url: '/editorial-policy' },
  reviewedBy: '<what you reviewed against>',
  lastReviewed: '2026-08',
  salaryOutlook: { headline, summary, rows: [{label, value, note}], growth, source: {label, url} },
  passRate: { headline, summary, source: {label, url}, caveat },
  studyPlan: { summary, totalHours, weeks: [{label, focus, tasks: [..], hours}], variants: [{label, detail}] },
  prepStrategies: { summary, items: [{title, detail}] },
  resourceComparison: { summary, columns, rows: [{label, values: [..], note}], footnote },
  commonMistakes: { summary, items: [{mistake, fix}] },
  questionTypes: { summary, types: [{name, share, detail}], samples: [{prompt, options, answer, explanation}], note },
  examDay: { summary, bring: [..], leave: [..], timeline: [{time, detail}], rules: [..], afterwards }
};
export default data;
```

## HARD RULES (violations get files rejected)
1. **summary fields (salaryOutlook.summary, passRate.summary, studyPlan.summary, prepStrategies.summary, resourceComparison.summary, commonMistakes.summary, questionTypes.summary, examDay.summary) MUST each be >= 250 words.** Conclusion-first: the FIRST sentence gives the direct answer/conclusion, then evidence -> data -> caveats.
2. **resourceComparison rows**: every row MUST be `{ label: '...', values: ['a', 'b', 'c', 'd'], note: '' },` — both brackets present, row closed with `},`. NO `values: '...'` single-string form.
3. **commonMistakes items**: ONLY `mistake` and `fix` keys. NEVER add a `detail` field.
4. **NO bare ASCII apostrophes inside single-quoted strings** — use the escape `\u2019` for every apostrophe in prose. (Double quotes are fine.)
5. **NO Chinese/CJK characters anywhere.** ASCII only.
6. **Zero fabrication**: if the official source does not publish pass rates / passing scores, SAY SO plainly. If the fee is not verifiable, say "confirm on the official page" instead of inventing. Salary must come from real BLS OOH May 2024 pages.
7. **Samples in questionTypes are editor-written illustrations of the published blueprint** — add the note `'Samples are editor-written illustrations of the published blueprint, not live exam items.'`
8. Every file must be syntactically valid ESM (passes `node --check`).

## Content Quality (top-tier, pSEO style)
- Each section summary is a well-structured paragraph: conclusion -> evidence -> data -> traps/caveats.
- salaryOutlook: headline states the BLS median + what the credential gates; summary ties exam -> license/employment -> BLS data; rows give median/lowest10%/highest10%/openings with SOC citations.
- passRate: honest about unpublished pass rates; give the real reporting structure (state-set cut scores, etc.); mention the official test format facts you verified.
- studyPlan: totalHours + weeks breakdown + variants (strong background / returning candidates).
- prepStrategies: 5 numbered tactics with a summary.
- resourceComparison: official materials first, then books, then question banks, then registration; prices as of mid-2026 with "prices change frequently" footnote; rank nothing by commission.
- commonMistakes: 5 items, each a real trap with a concrete fix.
- questionTypes: describe the verified format; 3 sample MCQs with plausible correct answers and clear explanations.
- examDay: arrival, check-in, format, pacing, result, retake, afterwards.

## Sourcing Style Examples
- BLS: "the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $X for SOC 25-XXXX <Occupation Name>"
- Pass rate: "ETS does not publish cohort pass-rate statistics for Praxis exams... any percentage circulating online is a private estimate"
- Fee: "$156 (ETS sets the fee; confirm the exact amount on the ETS registration page)"

## Reference Templates (read one before writing)
- `C:\Users\samja\Desktop\testpreppilot-v2\src\data\examCatalog\depth\praxis-geography-5921.mjs` (Praxis-style, teacher licensure)
- `C:\Users\samja\Desktop\testpreppilot-v2\src\data\examCatalog\depth\comptia-linux-plus.mjs` (IT-style)

## State-Level Exams (e.g. california-drivers-license-written-test)
For state license/DMV/license exams, research THAT STATE's official agency (e.g., CA DMV, TX DPS, state licensing board). Cover: what the test is for, who must take it, fee, questions/time, passing requirements, validity/renewal, and the BLS occupation the license gates (e.g., drivers -> BLS heavy/tractor-trailer or light truck drivers; food handler -> food service workers; cosmetology -> hairdressers/cosmetologists SOC 39-5012). Be honest where the state publishes no pass rates. The exam-day section should reference the state agency's rules.

## Report Back
After finishing ALL slugs in your list, report: count written, any slugs you could not complete and why, and any facts you could not verify (list them).
