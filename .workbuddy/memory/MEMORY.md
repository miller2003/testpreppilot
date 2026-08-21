# Project Memory — testpreppilot-v2

## Build / dev environment (non-obvious)
- Astro 5 site. `astro build` and `astro preview` **must run with `dangerouslyDisableSandbox: true`** — the default sandbox's "safe-delete" shim blocks Vite's `.vite/deps` cache cleanup and the build silently produces no `dist/`.
- Always use the managed Node: `export PATH="/c/Users/samja/.workbuddy/binaries/node/versions/22.22.2:$PATH"`; call `./node_modules/.bin/astro` (shell wrapper, do NOT prefix with `node`).
- **Astro `is:inline` script gotcha**: `{expr}` template expressions are NOT evaluated inside `<script is:inline>` — the literal text is emitted as-is (build still succeeds, JS breaks at runtime). To pass frontmatter data into an inline script, use `<script is:inline define:vars={{ myVar }}>` — define:vars injects `const myVar = "<serialized>"` (a JSON *string*), so consume it with `JSON.parse(myVar)`. Hit twice on the homepage autocomplete (2026-08-21).
- Homepage (`/`) IS the exam directory since 2026-08-21: sticky search+filter bar with commit-on-确定 filter form (scope 全部/全国/州级 + state + category selects) and abbreviation-aware combobox autocomplete (`searchIndex`/`scoreExam` in index.astro). `/exams` index redirects to `/` (301 + meta-refresh); detail pages `/exams/<slug>` untouched.

## Site IA conventions (top nav)
- **Top-level (as of 2026-08-20 refactor): Guides · States · About · [search icon] · [theme toggle] · Exams(button).** No dropdown.
- `/how-it-works`, `/reviews`, `/contact` were removed from the nav and now meta-refresh + canonical + JS redirect to `/about` (or `/about#reviews`, `/about#contact`). They are excluded from the sitemap.
- `/about` is the consolidated E-E-A-T hub: hero / masthead / standards / FAQ + reader testimonials (`#reviews`) + Reach-the-desk contact block (`#contact`) + anchor nav to the four deep-dive pages (`/methodology`, `/reviewers`, `/editorial-policy`, `/disclosure`). Those four deep pages remain independently routeable.
- `/exams` and `/exams/[slug]` are the user's core product and are intentionally **off-limits** for foundational/content changes.
- `/states` (50 states + DC, state-by-state credential paths) and `/explore` (category-browse directory linking into `/paths/[slug]`) are real product hubs. `/states` was promoted to top nav on 2026-08-20. **`/explore` was deliberately NOT promoted because it overlaps with `/exams` semantically** — if you ever revisit, confirm whether `/explore` and `/exams` are duplicate lenses before surfacing `/explore` in the nav.
- `/guides` is a real editorial hub backed by `src/data/guides.ts` + `src/pages/guides/[slug].astro`. Never reintroduce `href="#"` placeholder links.
- **Global search modal** lives in `Header.astro`: a search-icon button (desktop `#search-toggle` + mobile `#search-toggle-mobile`) opens `#search-modal`, which lazily mounts Pagefind into `#nav-search` (separate from SearchUI.astro's `#search` mount on `/explore` — keep IDs unique). Shortcut: Ctrl/Cmd+K to open, Esc to close. Pagefind assets are built to `/pagefind/` after `astro build`.


## Design system (actual, from src/styles/tokens.css — supersedes older notes)
- Colors: --primary #1d4ed8, --ink #111e1f, --paper #faf9f6, --cream #f0eee5, --line #e3e4df; fonts Lora (body) + Cormorant Garamond (headings); --radius 12px; fluid type tokens --fs-h1/h2/h3/prose.
- Site has a **dark theme** (`[data-theme="dark"]` overrides) — always style via CSS variables, never hardcode hex.
- Trust cluster (/about /methodology /reviewers /editorial-policy) shares the left-aligned `.page-hero` pattern (2px ink bottom border) — keep new trust pages visually consistent with it.

## Verifiable site stats (for trust-page copy, counted 2026-08-11)
- 609 exam depth pages (src/data/examCatalog/depth/, minus _-prefixed scripts) → "600+ roadmaps" is safe.
- states.ts = 50 states + DC (51 codes). REVIEW_DOMAINS = 8 fields. Methodology pipeline = 7 steps.

## Article-page sidebar (On this page TOC)
- Shared component `src/components/SidebarTOC.astro`, NYT editorial chapters. Used by `/exams/[slug]` + `/paths/[slug]` (via `ExamGuide.astro`).
- 6 chapter buckets: The basics / What you need / Plan & pay / Career / Preparation / Reference. 8 P0 depth sections roll under "Career" (Salary+Pass rates) and "Preparation" (the other six) umbrella clusters.
- **JSX `0` trap**: any `cond1 || arr.length` inside `expr && JSX` will render literal "0" when both sides are falsy — always coerce with `!!(...)`. Hit once on `[slug].astro` (Costs & timeline condition).
- `.sticky-nav` class removed from both files; grid slot is just `<aside class="sidebar">` now. Component owns its own sticky scroll, mask fade hints and IntersectionObserver scroll-spy.

