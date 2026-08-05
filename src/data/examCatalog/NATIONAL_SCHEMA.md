# National Exam Research Schema

National exams get the **gold-standard treatment** — the same depth as the eight
hand-written pages in `src/data/credentials.ts` (see `enrolled-agent`, `cpa-exam`,
`epa-608-certification`). These pages carry the highest search volume on the site,
so the bar is higher than the state templates.

## Two layers

Same compression trick as the state dossiers, but the shared unit is the
**certifying body / program**, not the jurisdiction.

```
programs[]   ← written ONCE per certifying organisation (AWS, ETS, FAA, ASE …)
exams[]      ← one record per exam slug, exam-specific facts only
```

At render time the page merges: `exam` fields win, `program` fields fill the gaps.

---

## Layer A — program dossier

```js
{
  id: 'aws',                              // stable slug-safe id
  body: 'Amazon Web Services',            // MUST match `body` on the catalog rows
  bodyUrl: 'https://aws.amazon.com/certification/',
  about: '2-3 sentences: who this organisation is and what its credentials signal to employers.',

  // The registration flow — nearly identical for every exam this body offers.
  // This is the single biggest reuse win. 4-6 steps, each genuinely useful.
  registrationSteps: [
    {
      title: 'Create an AWS Certification account',
      description: 'Full sentence(s) explaining what the candidate actually does.',
      subSteps: ['Concrete action', 'Concrete action'],   // optional, 2-4 items
      duration: '10 minutes',                              // optional
      note: 'Gotcha worth flagging.'                       // optional
    }
  ],

  proctoring: 'How the exam is delivered: Pearson VUE test centre or OnVUE online proctoring, ID rules, what is allowed on the desk.',
  retakePolicy: 'Waiting period, attempt limits, whether the fee is repaid.',
  recertification: 'Validity period, CE/CPE requirements, renewal cost, what happens if it lapses.',
  scoreReporting: 'When and how the score arrives; scaled-score scale if any.',
  refundPolicy: 'Reschedule / cancellation windows and penalties.',            // optional
  providersNote: 'How candidates find legitimate prep — official training, well-known third parties.',

  // Cert-ladder comparison shown on every exam page from this body. Optional.
  comparison: {
    title: 'AWS certification tiers compared',
    columns: ['Tier', 'Experience', 'Fee', 'Typical prep'],
    rows: [{ label: 'Foundational', values: ['0-6 months', '$100', '20-40 hours'] }]
  },

  orgFaqs: [{ q: '...', a: '...' }],       // 2-3 body-level FAQs appended after exam FAQs
  sourceUrl: 'https://aws.amazon.com/certification/',
  verified: true,
  confidence: 'high'                        // high | medium | low
}
```

## Layer B — per-exam record

```js
{
  slug: 'aws-certified-solutions-architect-associate',   // MUST match the catalog slug
  body: 'Amazon Web Services',                            // links to the program dossier

  tagline: 'One punchy sentence — the promise of this credential.',
  description: '3-5 sentences. What the exam covers, who sits it, why employers ask for it, and how it fits the wider ladder. This is the meta description source and the opening prose.',

  quickAnswer: {
    summary: '2-3 sentences answering "what is it and how do I get it" for someone who will read nothing else.',
    advantages: ['4-5 concrete, specific bullets — no filler.']
  },

  // The path at a glance — 4-6 short imperative phrases.
  roadmap: ['Confirm eligibility', 'Book the exam', 'Study the four domains', 'Pass at 720/1000', 'Maintain with recertification'],

  prerequisites: 'Plain sentence. "None — open to anyone" is a valid, useful answer.',
  eligibility: 'Fuller paragraph when there are real experience/education gates; omit if prerequisites covers it.',

  examMeta: {
    questions: '65 (50 scored)',
    time: '130 minutes',
    pass: '720 / 1000 scaled',
    fee: '$150',
    format: 'Multiple choice and multiple response',
    admin: 'Pearson VUE test centre or OnVUE online proctoring'
  },

  // Content outline with official weights. 4-8 rows. Weights must sum to ~100%.
  topics: [{ name: 'Design Secure Architectures', weight: '30%', note: 'IAM, encryption, network security' }],

  // Facts that do not fit the meta grid. 4-6 rows.
  examEssentials: [
    ['Delivery', 'Test centre or online proctored, available worldwide'],
    ['Retake', '14-day wait, full fee each attempt'],
    ['Validity', '3 years']
  ],

  timeline: [{ stage: 'Study', duration: '6-10 weeks' }],
  costBreakdown: {
    items: [{ item: 'Exam fee', fee: '$150' }, { item: 'Practice exam', fee: '$20' }],
    total: '$170-$600',
    footnote: 'Optional caveat about what is excluded.'
  },

  difficulty: 'Moderate',                  // Easy | Moderate | Challenging | Hard
  audience: 'Who this is for, in one clause.',
  time: '6-10 weeks',                      // total realistic elapsed time
  cost: '$150-$600',                       // headline range
  salaryRange: '$120,000-$165,000',        // omit if there is no credible figure

  faqs: [{ q: '...', a: '2-4 sentences, answering from primary sources.' }],  // 4-6
  summaryPoints: ['3-4 takeaway bullets that stand alone.'],

  relatedSlugs: ['aws-certified-cloud-practitioner'],   // 2-4 slugs from this catalog
  sourceUrl: 'https://.../exam-guide.pdf',              // the most specific official page
  reviewed: '2026-08',
  confidence: 'high'
}
```

---

## Rules

1. **No fabrication.** If a fee, weight or pass mark cannot be confirmed, either omit the
   field or set `confidence: 'medium'` / `'low'` and hedge in the prose ("typically",
   "as of the 2026 handbook"). Never invent an exam code, a domain weight or a salary.
2. **Retired exams are still pages.** If an exam has been retired or superseded, say so in
   the first sentence of `description`, put the retirement date in `examEssentials`, and
   point `relatedSlugs` at the successor. Do not pretend it is bookable.
3. **Weights must be official.** Only include `topics` weights that come from the published
   exam guide/blueprint. If no weights are published, give `topics` without `weight`.
4. **Fees in USD**, current as of 2026. Ranges are fine (`'$100-$150'`); note member vs
   non-member pricing where it exists.
5. **Every exam needs `examMeta`, `quickAnswer`, `faqs` (≥4) and `summaryPoints` (≥3).**
   Those four drive the page's usefulness and its FAQ rich result.
6. **Prose is the product.** Write for a candidate deciding whether to sit the exam.
   No marketing voice, no "in today's fast-paced world", no repeating the exam name in
   every sentence.
7. Output is dependency-free ESM:
   `export const programs = [...]; export const exams = [...]; export default { programs, exams };`
8. Slugs must match the catalog exactly. A mismatched slug silently drops the content.
