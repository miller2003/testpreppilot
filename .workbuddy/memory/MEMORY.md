# Project Memory — testpreppilot-v2

## Build / dev environment (non-obvious)
- Astro 5 site. `astro build` and `astro preview` **must run with `dangerouslyDisableSandbox: true`** — the default sandbox's "safe-delete" shim blocks Vite's `.vite/deps` cache cleanup and the build silently produces no `dist/`.
- Always use the managed Node: `export PATH="/c/Users/samja/.workbuddy/binaries/node/versions/22.22.2:$PATH"`; call `./node_modules/.bin/astro` (shell wrapper, do NOT prefix with `node`).

## Site IA conventions (top nav)
- Top-level: Guides · How it works · Reviews · **About ▾** (dropdown: About / Methodology / Review Network / Editorial Policy / Affiliate Disclosure) · Contact · Exams(button). The "About" dropdown is the home for all trust/company pages — keep new trust pages there, not as new top-level items.
- `/exams` and `/exams/[slug]` are the user's core product and are intentionally **off-limits** for foundational/content changes.
- `/how-it-works` = reader's journey to pass; `/about` = who we are; `/methodology` = deep research pipeline. Keep these three distinct, don't let them re-overlap.
- `/guides` is a real editorial hub backed by `src/data/guides.ts` + `src/pages/guides/[slug].astro`. Never reintroduce `href="#"` placeholder links.

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

