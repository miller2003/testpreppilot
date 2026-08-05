# Research brief — national exam chunk

You are writing the **gold-standard content** for a slice of the national exam
catalogue on testpreppilot. These pages carry the site's highest search volume.
The bar is the eight hand-written pages in `src/data/credentials.ts`, not a template.

## Your job

1. Read your chunk input: `src/data/examCatalog/national-research/_input/chunks/<CHUNK_ID>.json`
   It contains `exams[]` with `slug`, `name`, `short`, `body`, `bodyUrl`, `category`,
   `group`, `aka`, `blurb`. **Every slug must appear in your output exactly once.**
2. Read the schema: `src/data/examCatalog/NATIONAL_SCHEMA.md`. Follow it exactly.
3. Research each certifying body and each exam. Use `WebSearch` / `WebFetch` against
   the official body site (`bodyUrl`), the published exam handbook/blueprint, and the
   official fee schedule. Prefer primary sources over blog summaries.
4. Write `src/data/examCatalog/national-research/_chunks/<CHUNK_ID>.mjs`.

## Output format — exactly this, no imports, no comments at the top

```js
export const programs = [ /* one per certifying body in this chunk */ ];
export const exams = [ /* one per slug in this chunk */ ];
export default { programs, exams };
```

## CRITICAL — how to write the file without corrupting it

Long single-shot writes get truncated mid-object and mangle quoting. So:

- **Write the file in several passes.** First `Write` the `programs` array plus the
  first 6-8 exam records and a valid closing. Then `Edit` to append the next 6-8,
  repeatedly, until every slug is covered. Never try to emit 30 records in one call.
- **After every pass**, run:
  `node -e "import('./src/data/examCatalog/national-research/_chunks/<CHUNK_ID>.mjs').then(m=>console.log(m.exams.length,'exams',m.programs.length,'programs'))"`
  from the repo root. If it throws, fix it before continuing.
- Use plain ASCII apostrophes. Escape any apostrophe inside a single-quoted string
  (`'Bachelor\'s degree'`) or use a double-quoted string instead.
- No template literals, no trailing commas after the last array element, no `undefined`.

## Quality bar — this is the whole point

- `description` — 3-5 real sentences, **≥180 characters**. What the exam covers, who
  sits it, why employers ask for it, where it sits in the ladder.
- `quickAnswer.summary` — 2-3 sentences that answer "what is it and how do I get it"
  for someone who reads nothing else. Include the concrete numbers: questions, time,
  pass mark, fee, validity.
- `quickAnswer.advantages` — 4-5 specific bullets. Not "boosts your career".
- `faqs` — **4-6 questions**, each answer **2-4 sentences**. Answer the things people
  actually search: "how hard is it", "how long to study", "does it expire",
  "is it worth it", "what's the pass rate". One-line answers fail validation.
- `summaryPoints` — 3-4 standalone takeaways.
- `topics` — only include `weight` if the official blueprint publishes one. Weights
  should sum to ~100%. If no published weights, list domains without weights.
- `examMeta` — questions / time / pass / fee / format / admin. Omit a field rather
  than guess it.
- `timeline` — **required**. 3-5 stages with durations (`[{stage:'Study', duration:'6-10 weeks'}, …]`).
  It renders a visible section; omitting it leaves a hole on the page.
- `costBreakdown` — **required**. `{items:[{item, fee}], total, footnote}`. Include the
  exam fee plus the real adjacent costs (application, prep materials, retake, renewal).
  If the body publishes no fee at all, still give the items you can source and say so
  in `footnote`.
- `relatedSlugs` — 2-4 slugs that exist **in the wider catalogue**; prefer slugs from
  your own chunk input so they are guaranteed to resolve.
- `reviewed: '2026-08'`, and `confidence: 'high' | 'medium' | 'low'` honestly set.

## Non-negotiables

1. **No fabrication.** If a fee, weight, pass mark or salary cannot be confirmed from
   a real source, omit the field and set `confidence: 'medium'` or `'low'`. Hedge in
   prose ("typically", "as of the 2026 handbook"). Never invent an exam code or a
   domain weight.
2. **Retired exams still get a page.** Say it is retired in the first sentence of
   `description`, put the retirement date in `examEssentials`, and point
   `relatedSlugs` at the successor.
3. **Slugs must match the input exactly.** A mismatched slug silently drops the page.
4. **Prose is the product.** Write for a candidate deciding whether to sit the exam.
   No marketing voice, no "in today's fast-paced world", no restating the exam name
   in every sentence.
5. Programs: one dossier per distinct `body` in your chunk, with `id` (slug-safe),
   `body` (matching the input string **exactly**), `bodyUrl`, `about`,
   `registrationSteps` (4-6), `proctoring`, `retakePolicy`, `recertification`,
   `scoreReporting`, `providersNote`, optional `comparison` and `orgFaqs`.

## Done when

`node -e "import('...<CHUNK_ID>.mjs').then(m=>console.log(m.exams.length))"` prints the
same number as `examCount` in your chunk input, and the module parses cleanly.
Report back: chunk id, exams written, programs written, anything you could not verify.
