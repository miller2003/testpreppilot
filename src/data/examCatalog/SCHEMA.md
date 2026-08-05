# Exam Catalog — data file spec

Every file in `src/data/examCatalog/national/` is a **pure ES module** that
default-exports a flat array of exam objects. No imports, no logic, no comments
inside the array other than short section markers.

```js
export default [
  {
    slug: 'comptia-a-plus',
    name: 'CompTIA A+ Certification',
    short: 'A+',
    category: 'technology',
    group: 'IT Support & Fundamentals',
    body: 'CompTIA',
    bodyUrl: 'https://www.comptia.org/certifications/a',
    type: 'Certification',
    aka: ['220-1201', '220-1202'],
    blurb: 'Entry-level IT support credential covering hardware, operating systems, networking and security troubleshooting.'
  }
];
```

## Field rules

| field     | required | rules |
|-----------|----------|-------|
| `slug`    | yes | kebab-case, ASCII, globally unique, no leading/trailing dash. Derived from the exam name. Avoid generic slugs like `cpa` — use `cpa-exam`. |
| `name`    | yes | Full official exam / credential name in English, title case. |
| `short`   | no  | Common abbreviation (`PMP`, `NCLEX-RN`). Omit if identical to name. |
| `category`| yes | Exactly one id from the category list below. |
| `group`   | yes | Sub-group label inside the category, title case, reused consistently across sibling entries (e.g. `Nursing`, `Cloud Computing`). Aim for 4–12 groups per file. |
| `body`    | yes | Administering / awarding organisation, official name. |
| `bodyUrl` | no  | Official https URL. Only include if confident it is real. Never invent URLs. |
| `type`    | yes | One of `Exam`, `License`, `Certification`, `Training`. |
| `aka`     | no  | Array of alternate names, exam codes, or search synonyms. |
| `blurb`   | yes | One factual sentence, 80–170 chars, no marketing language, no "TestPrepPilot". |

## Category ids (use exactly these)

`admissions-academic`, `healthcare-clinical`, `allied-health`,
`behavioral-health`, `education-teaching`, `accounting`, `finance-securities`,
`insurance`, `legal`, `real-estate`, `technology`, `project-business`,
`trades`, `engineering-design`, `workplace-safety`, `environment`,
`transportation`, `aviation-maritime`, `public-safety`,
`government-civil-service`, `beauty-wellness`, `food-hospitality`,
`security-investigation`, `fitness-recreation`, `animal-agriculture`,
`personal-services`

## Hard rules

1. **National / multi-state exams only.** Anything issued separately by each
   state (state bar, state real-estate salesperson, state cosmetology, driver
   licence, etc.) is generated from `stateTemplates.mjs` — do NOT add per-state
   rows here. A single national umbrella row is fine (e.g. `MBLEx`).
2. **No fabrication.** If unsure whether a credential exists, leave it out.
   If unsure about a URL, omit `bodyUrl`.
3. **Cover the long tail.** Small, obscure and niche exams are explicitly
   wanted, as long as they are real.
4. Sort entries by `group`, then alphabetically by `name`.
5. Do not duplicate a slug that another file already owns (see `RESERVED.md`).
