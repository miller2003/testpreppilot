# v2 Fragment Spec (S2 state research)

You are producing ONE fragment file: `src/data/examCatalog/research/v2/_frag/<template-key>-part<N>.mjs`
It default-exports `{ key, states: { CODE: {...} } }` — ONLY the state codes assigned to you.
Fragments are merged by `scripts/quality/merge-v2.mjs` into `research/v2/<key>.mjs`.
Final files are dependency-free ESM: NO imports, NO template literals, NO backticks.

## Format rules (hard)
1. Dependency-free ESM: `export default { key: '...', compiledOn: '2026-10-20', states: {...} };`
2. Every prose string DOUBLE-quoted. Apostrophes are then safe as-is. Escape an inner double quote as `\"`. No backslashes otherwise, no backticks, no template literals.
3. ASCII only. Use `--` or a hyphen instead of em dash? NO — literal em dash (–, —) IS allowed; CJK is NOT.
4. Keys unquoted (`AL: {`), string values double-quoted.
5. Run `node --check` (managed binary:
   `"C:/Users/samja/.workbuddy/binaries/node/versions/22.22.2-6/node.exe" --check <file>`)
   and fix until clean.

## Quality rules (hard — the merge gate aborts on violations)
- NO fabrication. If a number cannot be verified from a source you actually opened, OMIT the field. A missing field renders as "not published" — a wrong field is worse.
- ZERO draft language in any reader-facing string: never the word "verify" (also avoid "check with"), never "TBD", never "≈", never "check with the state" as an answer. State what IS published; when something is not published, say so plainly (e.g. "The board does not publish a question count.").
- URLs: prefer deep links (the actual licensing/exam/fee page), never a bare state-portal homepage. Do not cite a URL you did not successfully open.
- `sources`: >= 4 entries per state (at least 2 official: state agency / candidate bulletin / statute). Each `{ label, url, checkedOn: '2026-10' }`.
- `stateFaqs`: >= 4 per state, genuinely state-specific (fees, experience numbers, exam vendor, bond amounts, local quirks). Not template FAQs reworded.
- `recentChanges`: 1-3 entries covering 2023-2026 law/rule/fee changes found in research. If you find none after actually looking, write exactly one entry: `{ year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: <agency licensing page> }`.

## Per-state schema (include what you verified; omit the rest)
```
CODE: {
  agency: "official agency name (v1 value corrected if wrong)",       // optional override
  agencyUrl: "https://deep-link-to-licensing-page",                   // optional override
  exam: {
    vendor: "PSI | Pearson VUE | Prometric | ICC | state board ...",
    vendorUrl: "https://...",
    parts: [ { name: "National portion", questions: "80 scored", time: "120 minutes", pass: "70%" },
             { name: "State law portion", questions: "40", time: "60 minutes", pass: "75%" } ],
    fee: "$60",
    practical: null | "4-hour practical...",
    languages: ["English", "Spanish"],
    sourceUrl: "https://...candidate-bulletin.pdf", sourceNote: "p. 12"
  },
  education: { hours: "1,500", breakdown: "...", onlineAllowed: "...", apprenticeship: "...", sourceUrl: "..." },
  experience: "2 years / 4,000 hours investigative experience; degree substitutes ...",
  eligibility: { minAge: 25, citizenship: "US citizen or permanent resident", education: "High school diploma or GED", other: "..." },
  background: { method: "IdentoGO fingerprint enrollment", fee: "$48.25 state + $13.25 FBI", disqualifiers: "No felony convictions within 10 years", sourceUrl: "..." },
  fees: [ { item: "Application", fee: "$75", sourceUrl: "..." }, { item: "Exam", fee: "$60", sourceUrl: "..." }, { item: "License (2 years)", fee: "$150", sourceUrl: "..." }, { item: "Surety bond", fee: "$10,000 bond (about $100-$300 annual premium)", sourceUrl: "..." } ],
  application: { portal: "eLicense Ohio", portalUrl: "https://...", steps: ["Create an account...", "Submit experience attestations...", "..."], processingTime: "2-4 weeks", sourceUrl: "..." },
  renewal: { cycle: "2 years", ce: "8 hours including 1 hour ethics", fee: "$60", late: "...", sourceUrl: "..." },
  reciprocity: { rule: "Endorsement for licensees from states with equal requirements...", agreements: ["Virginia", "..."] | null, sourceUrl: "..." },
  wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$46,810", p25: "$37,740", p75: "$52,610", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=AL" },
  localNuance: "County/city layer, e.g. Pennsylvania licenses PIs through the county courts.",
  recentChanges: [ { year: 2025, change: "...", sourceUrl: "..." } ],
  stateFaqs: [ { q: "...", a: "..." }, { q: "...", a: "..." }, { q: "...", a: "..." }, { q: "...", a: "..." } ],
  sources: [ { label: "Alabama Private Investigation Board - Licensing", url: "https://...", checkedOn: "2026-10" }, ... ]
}
```
`wages` is pre-fetched: read the JSON file your assignment names and copy the numbers verbatim
(median/p25/p75/national/year/sourceUrl). If your assignment says a state has no OEWS data, OMIT
`wages` for that state entirely.

## Research method per state (budget ~4-6 fetches)
1. Search: `"<state> private investigator license" requirements site:<official domain>` or the
   agency page hinted in your assignment notes. Open the licensing page (deep link).
2. Fees + application: agency fee schedule / application packet page.
3. Exam (if any): candidate bulletin / handbook on PSI/Pearson VUE/Prometric site — vendor,
   parts, questions, time, passing score. If the state has no exam, say so in `exam` only if you
   can cite it, otherwise omit `exam` and note the fact inside `application.steps` prose.
4. Renewal + CE: agency renewal page.
5. Recent changes: search `"<state>" private investigator license law 2025` (and 2024/2023).
6. Reciprocity: agency page or statute; omit if nothing publishable.

Tone: write like a professional licensing guide, factual and specific, no marketing fluff, no
second-person coaching in data fields. FAQ answers 2-3 sentences, concrete numbers where known.
