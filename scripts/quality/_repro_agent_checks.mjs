// One-off: reproduce the 8 failing checks from _verify_agent_surface.mjs in isolation.
import { readFileSync } from 'node:fs';
const headers = readFileSync('public/_headers', 'utf8');
for (const p of ['/.well-known/api-catalog', '/.well-known/ai-catalog.json', '/auth.md', '/llms.txt']) {
  const idx = headers.indexOf('\n' + p + '\n');
  console.log(p, 'idx=', idx, '| CT within 260:', idx !== -1 ? /Content-Type:/.test(headers.slice(idx, idx + 260)) : 'n/a');
}
const robots = readFileSync('public/robots.txt', 'utf8');
const allowed = [...robots.matchAll(/User-agent:\s*(\S+)\nAllow:\s*\//g)].map((m) => m[1]);
console.log('allowed blocks:', allowed.length, allowed.slice(0, 6));
