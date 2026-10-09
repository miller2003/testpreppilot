# Project Memory — testpreppilot-v2

## Publishing (the one switch)
- `src/data/examCatalog/release-manifest.mjs`: `releases = {slug:'YYYY-MM-DD'}`, read only by `isReleased()`. A page builds iff its date <= today (UTC). Hand-editing is safe.
- Release tooling: `_candidates_now.mjs` (pool = unreleased + has `record` + `examDepth`; state rows never eligible) → `_heat_rank.mjs` (heat = clamp(round(45+12*log10(v/1000)),10,100) from a curated `VOL` map; `FAMILY_RULES` per-batch caps; prints "floored to default: N", which must be 0) → `_deploy_batch_55.mjs` (validates + dates + merges; refuses near-dup pairs) → `_verify55.mjs`.
- `_release_all.mjs` (2026-10-09): full-pool variant — releases every candidate, dates drawn from a trailing 15-day window, cap 25/day.
- MANDATORY after any manifest edit: `_gen_infographics.mjs` (one SVG per released exam) + `_gen_llms.mjs` (`public/llms.txt` is generated).
- Dates are drawn randomly from a trailing window with a per-day cap; overlap with earlier waves is normal (slug→date map). Bump `WINDOW_END`/`SEED` every run.
- Waves: 1 = 09-02 (30), 2 = 09-16 (30), 3 = 10-03 (55, 09-04→10-03), 4 = 10-09 (all 302 leftovers, 09-25→10-09) → manifest 477.

## Verify after a fresh `astro build`
`_verify55.mjs` (dist page exists, no noindex, published_time == schema == manifest date, canonical, infographic referenced, sitemap loc without trailing slash + lastmod == release date, and no sitemap lastmod outside the release-date set) → `_geo_audit.mjs` (violation list must be empty) → `_qa/verify-seo-geo.mjs` (must print ALL CHECKS PASSED) → `_verify_agent_surface.mjs` (every advertised URL resolves in dist/; digests == shipped bytes; no unreleased row in the feed) → `_ai_crawler_check.mjs` (live). npm aliases: verify:agent/content/batch.
- **Traps**: any assertion holding a literal release date or page count goes stale every wave — derive it. A new page type must be added to `_geo_audit.mjs` `classify()` or it is silently unmeasured.

## Build env
- Astro 5. `astro build`/`preview` need `dangerouslyDisableSandbox:true` (the safe-delete shim blocks Vite's `.vite/deps` cleanup → empty `dist/`). Never `rm -rf dist`.
- Managed node: `export PATH="/c/Users/samja/.workbuddy/binaries/node/versions/22.22.2-6:$PATH"`; call `./node_modules/.bin/astro`.
- `{expr}` is dead inside `<script is:inline>` (use `define:vars` + JSON.parse). JS-injected DOM never gets scoped `[data-astro-cid-*]` → use `:global()`. Flex column + `overflow-y:auto` shrinks children → `flex-shrink:0`. Never regex through `node -e` from Git Bash; never pipe a Chrome-spawning script through `tail`.

## Deploy / live surface
- Cloudflare-hosted, **built from this repo; the user deploys by pushing**. `public/_headers` is live. Post-deploy checks: `curl -sI .../.well-known/api-catalog`, `curl -s .../llms.txt | head -3`, `_ai_crawler_check.mjs`.
- **OPEN (2026-10-03): every URL 308s to add a trailing slash** (Astro directory format + CF `html_handling: auto-trailing-slash`), so canonical/sitemap no-slash URLs redirect. Fix = CF `drop-trailing-slash`, or flip Astro to `trailingSlash:'always'`. Awaiting the user's choice.
- **CF AI bots (2026-09-15 three-category policy)**: Training/Agent default-block on ad pages; the 8 Training-class 403s were fixed by setting Training=Allow. Multi-purpose crawlers are judged under BOTH Search and Training, strictest wins → prefer per-crawler blocks; keep CF's managed robots.txt OFF.

## Site facts
- Homepage `/` IS the exam directory; `/exams/[slug]` is the product (off-limits to foundational change); `/exams` 301→`/`; `/states` + `/guides` are real hubs, `/explore` is not in nav.
- 609 depth pages ("600+ roadmaps"), 51 state codes, 19 credential fields. Quote counts with their definition (`buildDirectory()` includes the 8 flagship guides → 19 vs 18).
- Generated files: `public/llms.txt`, `/data/exam-catalog.json|csv`, `/.well-known/*`, `public/auth.md` (`_gen_llms.mjs`, `_gen_agent_surface.mjs` — the latter runs from an `astro:build:start` hook; `prebuild` alone is skipped by a bare `astro build`).
- Sitemap lastmod: a real content date or nothing.
- Style via `src/styles/tokens.css` CSS vars (light + `[data-theme="dark"]`).
