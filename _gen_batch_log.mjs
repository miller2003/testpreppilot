// Build DEPLOY-LOG-<date>.md for wave 3 from the picks + manifest (no retyping).
import { readFileSync, writeFileSync } from 'node:fs';
import { releases } from './src/data/examCatalog/release-manifest.mjs';
import { allExamsFull } from './src/data/examCatalog/index.mjs';

const picks = JSON.parse(readFileSync('./_batch55_picks.json', 'utf8'));
const bySlug = new Map(allExamsFull.map((e) => [e.slug, e]));
const before = 120;

const rows = picks
  .map((p) => ({ ...p, date: releases[p.slug] }))
  .sort((a, b) => a.date.localeCompare(b.date) || b.heat - a.heat);

const perDay = {};
for (const r of rows) perDay[r.date] = (perDay[r.date] || 0) + 1;
const catCount = {};
for (const r of rows) catCount[r.category] = (catCount[r.category] || 0) + 1;

const L = [];
L.push('# Deploy log — wave 3 (2026-10-03)');
L.push('');
L.push(`**${picks.length} exam pages released.** Manifest ${before} → ${Object.keys(releases).length} slugs.`);
L.push('');
L.push('Selection is demand-ranked ("按热度"): the unreleased indexable pool was scored by');
L.push('estimated annual US candidate volume, then the top pages were taken under a');
L.push('per-content-family cap so no single credential family could dominate the batch.');
L.push('');
L.push('`v` below is an **estimate** unless marked `published`. Only a handful of sponsors');
L.push('publish an annual candidate count (PSAT/NMSQT, AP, ServSafe Food Handler, FAA TRUST, LSAT).');
L.push('');
L.push(`Dates: ${rows[0].date} … ${rows[rows.length - 1].date}, drawn at random from the trailing`);
L.push(`30-day window, capped at 3 per day, ${Object.keys(perDay).length} of 30 days used.`);
L.push('');
L.push('## The batch, by date');
L.push('');
L.push('| Date | Heat | Est. annual candidates | Source | Category | Page |');
L.push('|---|---:|---:|---|---|---|');
for (const r of rows) {
  L.push(`| ${r.date} | ${r.heat} | ${r.vol.toLocaleString('en-US')} | ${r.src} | ${r.category} | \`${r.slug}\` |`);
}
L.push('');
L.push('## Mix by category');
L.push('');
L.push('| Category | Pages |');
L.push('|---|---:|');
for (const [c, n] of Object.entries(catCount).sort((a, b) => b[1] - a[1])) L.push(`| ${c} | ${n} |`);
L.push('');
L.push('admissions-academic is the largest share on purpose: it is the highest-volume');
L.push('field in the pool and had the lowest live coverage. AP / ACCUPLACER / PSAT pages');
L.push('are genuinely distinct exams, not variants of one page.');
L.push('');
L.push('## Per-day spread');
L.push('');
L.push('```');
L.push(Object.entries(perDay).sort().map(([d, n]) => `${d} ${'#'.repeat(n)} ${n}`).join('\n'));
L.push('```');
L.push('');
L.push('## Verification');
L.push('');
L.push('- `_verify55.mjs` — 55/55 pages: correct `article:published_time` = schema `datePublished` = manifest date, indexable, canonical correct, infographic wired, sitemap `loc` without trailing slash + `lastmod` = release date.');
L.push('- `_geo_audit.mjs` — 175 exam pages, 5,439 avg words, 94% question-form H2s, 100% tables + visible FAQ, 0 JSON-LD-vs-text mismatches; violation list empty.');
L.push('- `_qa/verify-seo-geo.mjs` — ALL CHECKS PASSED.');
L.push('');
L.push('## Not part of this change');
L.push('');
L.push('The open Cloudflare edge issue still stands: 8 crawlers that `robots.txt` allows');
L.push('(GPTBot, ClaudeBot, anthropic-ai, Amazonbot, CCBot, Diffbot, cohere-ai, Bytespider)');
L.push('are 403-ed at the edge. It needs a dashboard fix and affects the new pages too.');
L.push('');

writeFileSync('DEPLOY-LOG-2026-10-03.md', L.join('\n'));
console.log('wrote DEPLOY-LOG-2026-10-03.md —', rows.length, 'rows,', Object.keys(perDay).length, 'days');
