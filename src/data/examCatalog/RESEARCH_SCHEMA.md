# Research Dossier Schema (state templates)

Each state template is researched ONCE and turned into a **dossier**. The deep prose
(overview, eligibility, route, FAQs) is written at template level and reused across all 51
states. Only the variable bits (agency, fee, source, per-state notes, compact membership)
are provided per state. A build step later expands one dossier into 51 exam instances.

A dossier is a plain JS object exported from `research/batchN.mjs`:

```js
export default [
  {
    key: 'real-estate-salesperson',          // MUST match the template key in stateTemplates.mjs
    name: 'Real Estate Salesperson License',  // canonical name
    category: 'real-estate',                  // must be a valid category id
    group: 'Real Estate Licensing',
    type: 'License',
    blurb: 'One-sentence summary used in cards and meta description.',

    // ---- deep prose (written ONCE, reused for all 51 states) ----
    overview: '2-4 sentence plain-English explanation of what this credential is and who it is for.',
    eligibility: 'Who can apply; education/age/residency prerequisites.',
    exam: {
      admin: 'PSI / Pearson VUE / state board',
      questions: '~100', time: '2.5 hours', pass: '70%',
      fee: '$50–$75', format: 'Multiple choice, computer-based'
    },
    education: { hours: '60–90 pre-licensing hours', note: 'Provider must be state-approved.' },
    prerequisites: 'High school diploma or equivalent; 18+.',
    costBreakdown: { items: [{ item: 'Pre-licensing course', fee: '$300–$700' }, { item: 'Exam fee', fee: '$50–$75' }], total: '~$400–$800' },
    timeline: [{ stage: 'Education', duration: '2–3 months' }, { stage: 'Exam + license', duration: '4–8 weeks' }],
    route: [{ title: 'Complete pre-licensing education', description: '...' }, { title: 'Pass the exam', description: '...' }, { title: 'Activate under a broker', description: '...' }],
    providersNote: 'How a candidate finds an approved school (state board directory, etc.).',
    faqs: [{ q: '...', a: '...' }, { q: '...', a: '...' }],

    // ---- reciprocity / compact ----
    reciprocity: {
      compact: 'nlc',                 // compact id from compacts.mjs, or null
      note: 'Compact note shown on every state page (template level).'
    },

    defaultAgency: 'State Real Estate Commission',
    sourceUrl: 'https://...',          // authoritative federal/association source if template-wide
    verified: true,
    confidence: 'high',               // high | medium | low

    // ---- per-state overrides (ONLY the things that vary) ----
    // Key = 2-letter state code. Omit states where the credential does NOT exist.
    states: {
      CA: { agency: 'California DRE', agencyUrl: 'https://www.dre.ca.gov', fee: '$60', note: 'Additional 3-hour ethics course required.', compactMember: false },
      TX: { agency: 'Texas TREC', agencyUrl: 'https://www.trec.texas.gov', compactMember: false },
      // ... for all 50 states + DC that issue this credential
    }
  },
  // ... more dossiers
];
```

## Rules
- NO fabrication. If a fact is uncertain, set `confidence: 'low'` and say so in `note`.
- `states` MUST contain an entry for every state/DC that actually issues the credential.
  If a state does NOT have it (e.g., auctioneer in RI), OMIT that state code — that is how
  we mark a "false positive" without deleting the concept.
- `compactMember: true|false` per state for the compact named in `reciprocity.compact`.
- `sourceUrl` per state (in `states[CODE].agencyUrl`) is strongly preferred over a single
  template-wide source.
- Output is dependency-free ESM. No imports. `export default [...]` only.
- Keep prose accurate and sourced; this becomes published content.

---

# v2 per-state research increment (`research/v2/<template-key>.mjs`)

The v1 model is "template prose + 3 variables per state" (S-P1 in the flagship plan).
v2 adds a **structured per-state dossier** so each state page carries genuinely
state-specific content. One file per template, deep-merged into the v1 dossier's
`states[CODE]` object at load time by `research/index.mjs`. v2 files NEVER touch
template-level prose — that content belongs on the template hub page (S3).

## File shape

```js
// research/v2/<template-key>.mjs — dependency-free ESM, no imports.
export default {
  key: '<template-key>',               // MUST match stateTemplates.mjs key
  compiledOn: '2026-10-20',
  states: {
    AL: {
      // v1 overrides are allowed here (they win): agency, agencyUrl, fee, note
      exam: {
        vendor: 'PSI', vendorUrl: 'https://…',
        parts: [{ name: 'National', questions: '80', time: '120 min', pass: '70%' }],
        fee: '$60', practical: null, languages: ['English'],
        sourceUrl: 'https://…candidate-bulletin.pdf', sourceNote: 'p. 12'
      },
      education: { hours: '1,500', breakdown: '…', onlineAllowed: '…', apprenticeship: '…', sourceUrl: '…' },
      experience: '…',
      eligibility: { minAge: 18, education: 'High school diploma', other: '…' },
      background: { method: 'Live Scan', fee: '$32', sourceUrl: '…' },
      fees: [{ item: 'Application', fee: '$75', sourceUrl: '…' }],   // itemised, no "≈"
      application: { portal: 'eLicense Ohio', portalUrl: '…', steps: ['…'], processingTime: '2–4 weeks', sourceUrl: '…' },
      renewal: { cycle: '2 years', ce: '8 hours incl. 1 hr ethics', fee: '$60', sourceUrl: '…' },
      reciprocity: { rule: 'Endorsement…', agreements: ['…'], sourceUrl: '…' },
      stats: { licensees: 64000, passRate: { value: '…', year: 2025, sourceUrl: '…' } },
      wages: { soc: '39-5012', socName: 'Hairdressers…', median: '$…', employment: 1234, year: 'May 2024', sourceUrl: '…' },
      recentChanges: [{ year: 2024, change: '…', sourceUrl: '…' }],  // or [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl }]
      localNuance: '…',                // e.g. NYC / Chicago local licence layers
      stateFaqs: [{ q: '…', a: '…' }], // ≥4, state-specific, not template FAQs reworded
      actualCredential: null,          // decision B: { name, slug } when the state issues a differently-named equivalent
      sources: [{ label: '…', url: '…', checkedOn: '2026-10' }]
    }
  }
};
```

## Rules
- v2 only augments state codes that already exist in the v1 dossier `states` map
  (v1 omission = jurisdiction does not issue the credential — v2 must not resurrect it).
- NO fabrication: if a number could not be verified from a primary source, OMIT the
  field. A missing field renders as "not published" — a wrong field is worse.
- Every data-bearing field cites a `sourceUrl`; PDFs get a `sourceNote` with the page.
- `checkedOn` per source; the page's displayed verification date is the earliest.
- Zero draft language in reader-facing strings: no "verify", "TBD", "≈", "check with the state".
