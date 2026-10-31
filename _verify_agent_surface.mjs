// Post-build verification of the agent-readiness surface.
//
// The one rule the surface must obey: never advertise something that does not
// exist. A server card or catalogue pointing at a dead URL burns an agent's
// turn and gets the whole domain downgraded — worse than publishing nothing.
//
// So every URL promised by any discovery document, and every URL in the RFC 8288
// Link response headers, is resolved against the built dist/. Digest drift is
// checked too: the Agent Skills index must carry the sha256 of the SKILL.md
// bytes that were actually shipped.
//
// Run after `astro build`:  node _verify_agent_surface.mjs

import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const SITE = 'https://testpreppilot.com';
const DIST = 'dist';
let fail = 0;
const ok = (cond, label, extra = '') => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${label}${extra ? ' — ' + extra : ''}`);
  if (!cond) fail++;
};

const read = (p) => readFileSync(p, 'utf8').replace(/\r\n/g, '\n'); // autocrlf worktrees: normalize CRLF before LF-assuming assertions
const readJson = (p) => JSON.parse(read(p));

/** Map a site-relative URL to its file in dist/. */
function distPathFor(url) {
  const rel = url.startsWith(SITE) ? url.slice(SITE.length) || '/' : url;
  if (rel.startsWith('/http')) return null; // external, skip
  const clean = rel.replace(/\/$/, '') || '/';
  if (clean === '/') return `${DIST}/index.html`;
  if (/\.[a-z0-9]+$/i.test(clean)) return `${DIST}${clean}`;
  if (clean.startsWith('/.well-known')) return `${DIST}${clean}`; // extensionless but a real file
  return `${DIST}${clean}/index.html`;
}

function assertResolves(url, label) {
  const p = distPathFor(url);
  if (p === null) return;
  ok(existsSync(p), `${label} resolves`, url);
}

console.log('=== discovery documents present ===');
const docs = [
  'public/.well-known/ai-catalog.json',
  'public/.well-known/api-catalog',
  'public/.well-known/openapi.json',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/agent-skills/site-content/SKILL.md',
  'public/.well-known/mcp/server-card.json',
  'public/_routes.json',
  'public/auth.md',
  'public/_headers',
];
for (const d of docs) ok(existsSync(d), `source file exists`, d);

console.log('\n=== every advertised URL resolves in dist/ ===');
const aiCatalog = readJson('public/.well-known/ai-catalog.json');
for (const entry of aiCatalog.entries) {
  assertResolves(entry.url, `ai-catalog "${entry.identifier.split(':').pop()}"`);
  ok(entry.representativeQueries.length >= 2 && entry.representativeQueries.length <= 5,
    `ai-catalog "${entry.identifier.split(':').pop()}" has 2-5 representativeQueries`,
    String(entry.representativeQueries.length));
  ok(Number.isInteger(entry.representativeQueries.length) && entry.type.includes('/'),
    `ai-catalog "${entry.identifier.split(':').pop()}" declares an IANA media type`, entry.type);
}

const apiCatalog = readJson('public/.well-known/api-catalog');
const linkRelations = ['service-desc', 'service-doc', 'status'];
for (const ls of apiCatalog.linkset) {
  assertResolves(ls.anchor, 'api-catalog anchor');
  for (const rel of linkRelations) {
    for (const l of ls[rel] || []) assertResolves(l.href, `api-catalog ${rel}`);
  }
  for (const l of ls.item || []) assertResolves(l.href, 'api-catalog item');
}

const openapi = readJson('public/.well-known/openapi.json');
for (const p of Object.keys(openapi.paths)) assertResolves(p, 'openapi path');

const skillsIndex = readJson('public/.well-known/agent-skills/index.json');
for (const s of skillsIndex.skills) assertResolves(s.url, `skills index "${s.name}"`);

console.log('\n=== Agent Skills digest matches the shipped bytes ===');
{
  const skill = skillsIndex.skills.find((s) => s.name === 'site-content');
  const bytes = read('public/.well-known/agent-skills/site-content/SKILL.md');
  const actual = 'sha256:' + createHash('sha256').update(bytes, 'utf8').digest('hex');
  ok(skill.digest === actual, 'digest matches SKILL.md', skill.digest.slice(0, 20) + '…');
  ok(skill.type === 'skill-md', 'skill type is skill-md', skill.type);
  ok(/^[a-z0-9-]+$/.test(skill.name), 'skill name is lowercase-hyphenated', skill.name);
}

console.log('\n=== Link response headers point somewhere real ===');
{
  const headers = read('public/_headers');
  const linkLine = headers.split('\n').find((l) => /^\s*Link:/.test(l)) || '';
  const hrefs = [...linkLine.matchAll(/<([^>]+)>/g)].map((m) => m[1]);
  const rels = [...linkLine.matchAll(/rel="([^"]+)"/g)].map((m) => m[1]);
  const REGISTERED = ['api-catalog', 'service-desc', 'service-doc', 'service-meta', 'status', 'describedby'];
  ok(hrefs.length >= 3, 'Link header carries multiple targets', String(hrefs.length));
  ok(hrefs.length === rels.length, 'every Link target has a rel');
  for (const h of hrefs) assertResolves(h, 'Link header target');
  const unregistered = rels.filter((r) => !REGISTERED.includes(r));
  ok(unregistered.length === 0, 'only registered relation types used', unregistered.join(',') || 'none');
}

console.log('\n=== Content-Type declared for extensionless discovery docs ===');
{
  const headers = read('public/_headers');
  for (const p of ['/.well-known/api-catalog', '/.well-known/ai-catalog.json', '/.well-known/openapi.json', '/.well-known/agent-skills/index.json', '/.well-known/agent-skills/site-content/SKILL.md', '/auth.md', '/llms.txt']) {
    const idx = headers.indexOf('\n' + p + '\n');
    ok(idx !== -1 && /Content-Type:/.test(headers.slice(idx, idx + 260)), `Content-Type for ${p}`);
  }
}

console.log('\n=== dataset matches its OpenAPI schema ===');
{
  const rows = readJson('dist/data/exam-catalog.json');
  const documented = Object.keys(openapi.components.schemas.Exam.properties);
  const actual = Object.keys(rows[0]);
  const undocumented = actual.filter((k) => !documented.includes(k));
  const phantom = documented.filter((k) => !actual.includes(k));
  ok(undocumented.length === 0, 'no undocumented field in the dataset', undocumented.join(',') || 'none');
  ok(phantom.length === 0, 'no documented field missing from the dataset', phantom.join(',') || 'none');
  ok(rows.length > 0, 'dataset is non-empty', String(rows.length));
  const unreleased = rows.filter((r) => !r.published);
  ok(unreleased.length === 0, 'dataset contains no unpublished guide', String(unreleased.length));
}

console.log('\n=== MCP server card matches functions/mcp.js ===');
{
  const { SERVER_INFO, PROTOCOL_VERSIONS, TOOLS } = await import('./functions/mcp.js');
  const card = readJson('public/.well-known/mcp/server-card.json');
  ok(card.serverInfo?.name === SERVER_INFO.name && card.serverInfo?.version === SERVER_INFO.version,
    'serverInfo name + version match', `${card.serverInfo?.name}@${card.serverInfo?.version}`);
  ok(card.transport?.endpoint === `${SITE}/mcp` && existsSync('functions/mcp.js'), 'transport endpoint is the /mcp Function', card.transport?.endpoint);
  ok(card.protocolVersion === PROTOCOL_VERSIONS[0], 'protocolVersion is the newest the server negotiates', card.protocolVersion);
  ok(!!card.capabilities?.tools, 'capabilities declares tools');
  const cardTools = card.tools.map((t) => t.name).sort().join(',');
  const realTools = TOOLS.map((t) => t.name).sort().join(',');
  ok(cardTools === realTools, 'card lists exactly the tools the server implements', cardTools);
  const headers = read('public/_headers');
  ok(headers.includes('\n/.well-known/mcp/server-card.json\n'), 'Content-Type for /.well-known/mcp/server-card.json');
}

console.log('\n=== Markdown twins for Accept: text/markdown ===');
{
  ok(existsSync('functions/_middleware.js'), 'negotiation middleware exists');
  for (const p of ['index.md', 'about/index.md']) {
    const path = `${DIST}/${p}`;
    const body = existsSync(path) ? read(path) : '';
    ok(body.startsWith('---\ntitle: ') && /\nurl: "https:\/\/testpreppilot\.com\//.test(body), `${p} has front matter`);
    ok(body.length > 500 && !/<script|<nav\b/i.test(body), `${p} has content and no chrome`, `${body.length} chars`);
  }
  const routes = readJson('public/_routes.json');
  ok(routes.include.includes('/*') && !routes.exclude.some((r) => r === '/*' || r.startsWith('/go') || r.startsWith('/mcp')),
    '_routes.json keeps pages, /go/ and /mcp on Functions');
}

console.log('\n=== robots.txt policy lines ===');
{
  const robots = read('public/robots.txt');
  const hdrs = read('public/_headers');
  ok(/^Content-Signal:/m.test(robots), 'Content-Signal present');
  // Agentmap: was removed on purpose (invented directive, no crawler parses it).
  // Discovery now rides on the RFC 8288 Link header (rel="service-meta" -> ai-catalog)
  // and /.well-known/ai-catalog.json — assert the Link header declares it instead.
  ok(/rel="service-meta"/.test(hdrs) && /<\/\.well-known\/ai-catalog\.json>/.test(hdrs), 'ai-catalog discovered via Link header (Agentmap retired)');
  ok(/^Sitemap:\s*https:\/\/testpreppilot\.com\/sitemap-index\.xml/m.test(robots), 'Sitemap declared');
  const allowed = [...robots.matchAll(/User-agent:\s*(\S+)\nAllow:\s*\//g)].map((m) => m[1]);
  ok(allowed.includes('GPTBot') && allowed.includes('ClaudeBot') && allowed.includes('PerplexityBot'),
    'robots.txt explicitly allows the major AI crawlers', String(allowed.length) + ' agent blocks');
}

console.log(`\n${fail ? 'FAILURES: ' + fail : 'ALL AGENT-SURFACE CHECKS PASSED'}`);
process.exit(fail ? 1 : 0);
