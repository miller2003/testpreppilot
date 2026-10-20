# National flagship writer brief (read fully before touching a file)

You are rewriting the top half of live TestPrepPilot national exam pages (the "record" and the body "program dossier") and reconciling the bottom half ("depth" file) so each page is the best page on the web for that exam, for both Google (SEO) and AI answer engines (GEO). The working directory is a git worktree: `C:\Users\samja\Desktop\testpreppilot-v2\.claude\worktrees\national-articles-flagship-optimization-bb1a4e`. Run everything from there. Do NOT `cd` elsewhere, do NOT use git (the coordinator commits), do NOT run `astro build`, do NOT run `mergeChunks.mjs`, do NOT edit `batchNN.mjs`, `index.mjs`, `[slug].astro`, or any slug that is not in your package.

Your package: `reports/quality/packages/<pkgid>.json` (slugs, bodies, `ownsPrograms`).

## What is wrong today (why this job exists)
- Records are skeleton boilerplate ("validates job-ready knowledge and skills", "Passing score set by the awarding body", "Varies by credential"), and contradict the (good) depth file below them.
- Weights, fees and pass marks are generic or missing. Many bodies DO publish exact numbers; the page must use them.
- Programs (per-body dossiers) are skeletons: no real portals, no retake/renewal numbers.

## Deliverable (per package)
1. One file: `src/data/examCatalog/national-research/flagship/<pkgid>.mjs`
   `export const programs = [...]; export const exams = [...]; export default { programs, exams };`
   - `exams`: one record per slug in your package (schema below).
   - `programs`: ONLY the bodies listed in `ownsPrograms` (other packages for the same body are written by someone else; if `ownsPrograms` is empty, export `programs = []`). A program's `body` string must equal the catalog `body` exactly.
2. Edits to `src/data/examCatalog/depth/<slug>.mjs` ONLY where needed to remove contradictions with your record or to upgrade vague pass-rate / placeholder sections (rules below).
3. Run, in this order, after writing/adjusting:
   ```
   node --check src/data/examCatalog/national-research/flagship/<pkgid>.mjs
   node src/data/examCatalog/national-research/flagship/genIndex.mjs
   node scripts/quality/nationalGate.mjs --pkg=<pkgid>
   ```
   Fix every FAIL for your slugs. Exception: `skeleton-program` / `program-steps<4` / `no-program-dossier` on a slug whose body you do not own may stay until the owner package lands (list those in your report). If you edit depth files also run `node --check` on each and `node scripts/check-depth-words.mjs` if it accepts a slug (otherwise skip).
4. Final message (under 200 words): slugs completed; slugs where any fact was unverifiable and how you handled it; final gate line. Nothing else.

Work incrementally: write the file with the first finished exam early and add the rest with Edit, so a crash does not lose everything. Windows: use forward slashes in bash. Use `node` (on PATH).

## Research (mandatory, no fabrication)
Use WebSearch / WebFetch (they may be deferred tools: load them with ToolSearch `select:WebSearch,WebFetch`). For each exam, go to the OFFICIAL source: the exam's page on the body's site, the official exam guide / content outline / candidate handbook (PDFs: WebFetch saves bytes to a file; run `pdftotext -layout file.pdf out.txt` if available), the official fee page, the retake and renewal pages. Use a second source only to cross-check. Also run 1-2 Google-style searches per exam ("how many questions on the X exam", "X exam passing score", "is the X exam hard") to find the real search intents for FAQs.
Rules:
- Never invent or estimate a fee, weight, question count, time, pass mark, pass rate, exam code or date. If the body does not publish it, say so plainly ("ETS does not publish a passing score for this test; scores are reported on a 100-200 scale and states set their own cut score") - that is a valid, valuable, specific answer.
- If you cannot reach any official source for an exam, keep what the existing record/depth already says only where it is consistent and specific, mark `confidence: 'medium'`, and list it in your report. Do not guess.
- Retired / renamed / replaced exams: say so in the first sentence of `description`, put the date in `examEssentials`, point `relatedSlugs` at the successor.
- Prices in USD, current as of October 2026; give member/non-member prices where they exist; say "as of October 2026" for volatile numbers.
- `confidence: 'high'` only when every number in the record has an official source.

## Record schema (what the gate enforces)
See `src/data/examCatalog/NATIONAL_SCHEMA.md` (Layer A program, Layer B record) and the finished gold-standard pilot `src/data/examCatalog/national-research/_chunks/zz-flagship-arrt.mjs`. Gate rules, all per slug:
- No skeleton phrases anywhere (record, program, depth). Never write generic sentences that could apply to another exam; each page needs exam-specific facts.
- `examMeta` has all six of `questions`, `time`, `pass`, `fee`, `format`, `admin`, all concrete (the word "varies" or "awarding body" in `pass` fails). Questions: say scored vs unscored counts. Time: total and per-section if split. Fee: member/non-member, per-attempt, retake fee.
- `topics`: >=4 domains whose names match the OFFICIAL content outline wording exactly. If the body publishes percent weights, give `weight: '25%'` on every topic and make them sum to 95-105. If it publishes question counts rather than percents, put the counts in `note` and leave `weight: ''` (the page then correctly omits any weighting claim).
- `examEssentials` >=5 rows (delivery, retake rule, attempt limits, validity, score reporting, accommodations, etc.), each with a number or a named rule.
- `costBreakdown`: >=3 items + `total`. `timeline`: >=3 stages with durations.
- `faqs`: >=6 (aim 7-8). EVERY answer 40-90 words (the gate counts). Questions phrased as real searches. The first sentence of each answer must directly answer the question (AI engines quote it). At least 2 FAQs must come from real search intent you verified (e.g. "Is the X exam hard?", "What is a passing score on X?", "How long is the X valid?").
- `summaryPoints` >=4 standalone bullets with numbers. `quickAnswer.summary` (2-3 sentences, 40-70 words, answer-first: what it is, the key numbers, how to get it) and `quickAnswer.advantages` >=4 concrete bullets.
- `relatedSlugs` 3-4 valid slugs that exist in the catalog (prefer same ladder / successor / next step). Check with `node -e "import('./src/data/examCatalog/index.mjs').then(m=>console.log(m.allExamsFull.filter(e=>/KEYWORD/.test(e.slug)).map(e=>e.slug)))"`.
- `sourceUrl`: deep link to the most specific official page or PDF (never a bare homepage). Also set `reviewed: '2026-10'`.
- Record layer must contain >=600 words of exam-specific text in total (description, quickAnswer, prerequisites, eligibility, topics notes, essentials, FAQs, etc.). Eight 60-word FAQs alone give ~480.
- Uniqueness: the first ~100 words (`description` + `quickAnswer`) must differ materially from sibling exams of the same body (the gate measures 5-word shingle overlap, must stay <0.50). Do NOT mass-generate descriptions from one template string with the exam name swapped in. Siblings need different facts, audiences and framing (e.g. AP Biology vs AP Chemistry: different exam sections, FRQ counts, lab emphasis, score distributions).
- Program (owners only): `about` 2-3 specific sentences; `registrationSteps` 4-6 with real portal names and URLs, ID rules, scheduling windows; `proctoring`, `retakePolicy` (days and attempt limits), `recertification` (cycle, CE hours, fees), `scoreReporting` (timing, scale), `refundPolicy`, `providersNote`; `comparison` table (tier / requirement / fee / prep time) when the body has >=2 exams in the catalog or a visible ladder; 2-3 `orgFaqs` (40-90 words each); deep-link `sourceUrl`; no skeleton phrases.

## SEO / GEO writing rules
- `description` is the meta-description source: make the FIRST sentence <=155 characters, self-contained, naming the exam and its single most useful fact (e.g. "The ARRT MRI exam has 200 scored questions in 230 minutes and a passing scaled score of 75."). Then 3-4 sentences: who takes it, what it covers (with real domain names), what employers/schools do with it, how it sits in the ladder.
- Answer-first everywhere; each section must make sense when an AI engine extracts it alone (use the full exam name, no pronoun-only sentences at the start of an answer).
- Use the exact entity names and acronyms the body uses. Add specific numbers, dates (month/year), and named sources inside sentences ("per the 2026 ... Candidate Handbook").
- Do not add marketing voice, filler, or affiliate language. Do not mention TestPrepPilot in prose. No emoji. ASCII only: no curly quotes or non-ASCII characters (use `\u2019` for apostrophes inside single-quoted strings, or use backtick/double-quoted strings).
- No fabricated people, reviewers, testimonials, or statistics.

## Depth file rules (`depth/<slug>.mjs`)
Read the depth file for each slug before you write the record. Make record and depth agree on fee, question counts, time, pass mark, outline names, retake rules.
- If the depth file contradicts the official source, fix the depth text (surgical edit; keep structure and length; keep each `summary` >=250 words).
- Pass rate: if the body publishes pass rates (year, population, number), replace vague language ("mid-80s percent range") with the exact figure, year, population and a `source` URL; remove the `caveat` if no longer needed. If unpublished, keep a plain statement that it is unpublished and explain how scoring works. Unverified numbers must be deleted, not softened.
- Every row in `salaryOutlook.rows`, `passRate.rows`, `resourceComparison.rows` should carry a `note` or `source` (warnings from the gate flag bare rows; fix the ones in files you touch).
- Academic / admissions exams (category `admissions-academic`, e.g. AP, CLEP, SAT, ACT, GRE, TOEFL, ACCUPLACER, LSAT, MCAT, GMAT) must NOT keep a "this exam has no direct salary outcome" placeholder. Convert `salaryOutlook` into a score-outcomes section: set `sectionLabel: 'Scores & credit'`, `sectionKicker: 'What scores mean'`, `sectionHeading: 'What do the scores mean and what credit do they earn?'`, a `headline` with the official score scale and the most important fact, a `summary` (>=250 words) covering score scale, official score distribution if published (year + percent per score), typical college credit / admission policy (cite how policies vary by institution and link the body's official credit-policy tool), and `rows` with measure/value/note (score distribution rows, mean score, credit thresholds). Remove `growth` and the BLS `source` unless a real BLS link still fits; set `source` to the official score-information page. The page renders these fields in the existing salary slot with the new labels.
- When you verified the page's key figures set `lastReviewed: '2026-10'` and rewrite `reviewedBy` to one honest sentence naming the primary sources you actually used. If you could not verify, leave `lastReviewed` unchanged.
- Depth files are ASCII-only with `\u2019` for apostrophes in single-quoted strings; see `_agent_brief.md` (HARD RULES section) for the other formatting rules. Do not change `author`.

## Quality bar
Imagine the candidate who will read nothing else: after your page they must know exactly what the exam is, the real numbers, the real rules, what to study first, what it costs end-to-end, and what to do next. Specific beats comprehensive; true beats impressive. The best competing page (the official site, a prep company, Reddit/Quora summaries) should be strictly less accurate and less useful than yours.
