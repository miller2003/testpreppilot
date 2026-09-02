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


## Publishing pipeline — how to deploy exam pages (verified 2026-09-02)
- **The one switch**: `src/data/examCatalog/release-manifest.mjs` — `releases = { slug: 'YYYY-MM-DD' }`. Consumed only by `isReleased()` at `index.mjs:169`, which filters `allExams`. Nothing else gates a build. Manifest is nominally "AUTO-MANAGED by manager/server.mjs" but that's a UI, not a daemon — hand-editing is safe.
- **Reusable script**: `_deploy_batch_30.mjs` (2026-09-02). Validates the batch, merges dates, rewrites the manifest preserving alphabetical order and file shape, never overwrites an existing date. Re-run it with a new `BATCH` array for the next wave.
- **Pick only `national`-mode pages.** Of the ~540 unreleased depth-backed slugs, 417 render `national` (indexable) and 123 are state rows with no dossier → `placeholder` mode → **noindex**. Releasing a placeholder adds a thin page, not a ranking one. Validate with `getExamDetail(slug)` before adding.
- **Always re-run `node _gen_infographics.mjs` after editing the manifest.** `[slug].astro:398` emits `<img src="/exams/<slug>/infographic.svg">` **unconditionally** — no existence check, so a missing asset is a broken image on every such page. The generator iterates `allExams`, so it picks up new releases automatically. Output count is always `released + 8` (the 8 flagship guides route through `/paths`).
- **Dates need explicit wiring — the manifest date is only a gate.** Exam pages historically passed just `dateModified`, so `datePublished` fell back to the `SITE_UPDATED = '2026-08-06'` constant in `BaseLayout` for every page. Now wired: `releaseDateFor(slug)` in the manifest → `datePublished` prop in `[slug].astro` → schema.org + `article:published_time`; and `astro.config.mjs` sitemap `serialize()` sets `/exams/<slug>` lastmod from `releases[slug]` instead of the build timestamp (a build-time lastmod on every URL is noise Google discards).
- Depth layer is uniformly rich — all 608 entries carry every P0 section, so **selection should be by SEO/vertical strategy, not by content completeness**. Biggest gap closed 2026-09-02: admissions-academic was at 0 despite being the highest-volume U.S. exam category.
- Known near-duplicate pair to avoid releasing together: `notary-signing-agent` (legal) vs `nna-certified-notary-signing-agent` (security-investigation).

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

