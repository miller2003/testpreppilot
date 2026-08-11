# Project Memory — testpreppilot-v2

## Build / dev environment (non-obvious)
- Astro 5 site. `astro build` and `astro preview` **must run with `dangerouslyDisableSandbox: true`** — the default sandbox's "safe-delete" shim blocks Vite's `.vite/deps` cache cleanup and the build silently produces no `dist/`.
- Always use the managed Node: `export PATH="/c/Users/samja/.workbuddy/binaries/node/versions/22.22.2:$PATH"`; call `./node_modules/.bin/astro` (shell wrapper, do NOT prefix with `node`).

## Site IA conventions (top nav)
- Top-level: Guides · How it works · Reviews · **About ▾** (dropdown: About / Methodology / Review Network / Editorial Policy / Affiliate Disclosure) · Contact · Exams(button). The "About" dropdown is the home for all trust/company pages — keep new trust pages there, not as new top-level items.
- `/exams` and `/exams/[slug]` are the user's core product and are intentionally **off-limits** for foundational/content changes.
- `/how-it-works` = reader's journey to pass; `/about` = who we are; `/methodology` = deep research pipeline. Keep these three distinct, don't let them re-overlap.
- `/guides` is a real editorial hub backed by `src/data/guides.ts` + `src/pages/guides/[slug].astro`. Never reintroduce `href="#"` placeholder links.
