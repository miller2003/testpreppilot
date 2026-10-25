// Gate matrix for functions/go/mometrix/[slug].js — run: node _go_gate_test.mjs
// Stubs fetch so no analytics event ever leaves the machine.
import { onRequest } from './functions/go/mometrix/[slug].js';

const SLUG = 'workkeys-math-flashcards';
const PATH = '/go/mometrix/' + SLUG;
const URL_A = 'https://testpreppilot.com' + PATH;
const EXPECTED = 'https://ref.mometrix.com/1262-';

const WIN = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36';
const LINUX = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36';
const SAFARI = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.7 Mobile/15E148 Safari/604.1';

const sent = [];
globalThis.fetch = async (url, init) => { sent.push({ url, body: JSON.parse(init.body) }); return { ok: true }; };

const fresh = () => Math.floor(Date.now() / 1000) + '.a1b2c3d4e5f6';
const nav = (ua) => ({
  'user-agent': ua,
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-dest': 'document',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1'
});
const hints = (platform) => ({
  'sec-ch-ua': '"Chromium";v="155", "Not(A:Brand";v="24"',
  'sec-ch-ua-platform': '"' + platform + '"',
  'sec-ch-ua-mobile': '?0'
});
const referer = { referer: 'https://testpreppilot.com/exams/act-workkeys/' };

let pass = 0, fail = 0;
async function run(name, { method = 'GET', headers = {}, cf = {}, expect, bodyCheck, slug = SLUG }) {
  const waits = [];
  const req = { method, url: URL_A, headers: new Headers(headers), cf };
  const res = await onRequest({ request: req, params: { slug }, waitUntil: (p) => waits.push(p) });
  await Promise.all(waits);
  const body = await res.text();
  const problems = [];
  if (res.status !== expect) problems.push(`status ${res.status} != ${expect}`);
  if (res.status === 302 && !String(res.headers.get('location')).startsWith(EXPECTED)) {
    problems.push('bad location ' + res.headers.get('location'));
  }
  if (body.includes('ref.mometrix.com')) problems.push('tracking URL leaked in body');
  if (bodyCheck && !body.includes(bodyCheck)) problems.push('body missing ' + bodyCheck);
  if (problems.length) { fail++; console.log('FAIL ' + name + ' -> ' + problems.join('; ')); }
  else { pass++; console.log('ok   ' + name + ' [' + res.status + ']'); }
  return res;
}

console.log('--- hard denies (no human click looks like this) ---');
await run('curl UA', { headers: { 'user-agent': 'curl/8.4.0' }, expect: 403 });
await run('NotebookLM UA', { headers: { 'user-agent': 'Google-NotebookLM' }, expect: 403 });
await run('python UA', { headers: { 'user-agent': 'python-requests/2.32' }, expect: 403 });
await run('hover prefetch', { headers: { ...nav(WIN), 'sec-purpose': 'prefetch' }, expect: 204 });
await run('HEAD', { method: 'HEAD', headers: nav(WIN), expect: 405 });
await run('CF verified bot', { headers: { ...nav(WIN), cookie: 'mxg=' + fresh(), ...referer }, cf: { verifiedBotCategory: 'Search Engine Crawler' }, expect: 403 });
await run('low bot score', { headers: { ...nav(WIN), cookie: 'mxg=' + fresh(), ...referer }, cf: { botManagement: { score: 12 } }, expect: 403 });
await run('unknown slug 404', { headers: nav(WIN), expect: 404, bodyCheck: 'Link not found', slug: 'no-such-product' });

console.log('--- Lane A: real clicks, zero friction ---');
await run('Windows Chrome + ticket', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh(), ...referer }, expect: 302
});
await run('iPhone Safari + ticket (no client hints by design)', {
  headers: { ...nav(SAFARI), cookie: 'mxg=' + fresh(), ...referer }, expect: 302
});
await run('Linux Chrome + matching hints (real Linux user)', {
  headers: { ...nav(LINUX), ...hints('Linux'), cookie: 'mxg=' + fresh(), ...referer }, expect: 302
});
await run('Windows Chrome on hosting ASN (VPN user, +1 only)', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh(), ...referer }, cf: { asn: 16509 }, expect: 302
});

console.log('--- Lane B: no ticket / weak signals -> confirm page, never a click ---');
await run('plain GET, no ticket (crawler fetch)', {
  headers: { ...nav(LINUX), ...hints('Linux'), ...referer }, expect: 200, bodyCheck: 'Continue to Mometrix'
});
await run('stale ticket', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + (Math.floor(Date.now() / 1000) - 600) + '.a1b2c3d4e5f6', ...referer }, expect: 200
});
await run('ticket but referrer stripped', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh() }, expect: 200
});
await run('spoofed Chrome UA without client hints', {
  headers: { ...nav(LINUX), cookie: 'mxg=' + fresh(), ...referer }, expect: 200
});
await run('UA/platform mismatch', {
  headers: { ...nav(WIN), ...hints('Linux'), cookie: 'mxg=' + fresh(), ...referer }, expect: 200
});
await run('hosting ASN + threat score', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh(), ...referer }, cf: { asn: 16509, threatScore: 20 }, expect: 200
});
await run('cross-site fetch metadata', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh(), ...referer, 'sec-fetch-site': 'cross-site' }, expect: 200
});
await run('image/fetch instead of navigation', {
  headers: { ...nav(WIN), ...hints('Windows'), cookie: 'mxg=' + fresh(), ...referer, 'sec-fetch-dest': 'image' }, expect: 200
});

console.log('--- Lane B POST: confirm button always works for humans ---');
await run('POST from our confirm page', {
  method: 'POST',
  headers: {
    ...nav(LINUX), origin: 'https://testpreppilot.com', referer: URL_A,
    'content-type': 'application/x-www-form-urlencoded'
  },
  expect: 302
});
await run('POST cross-origin', {
  method: 'POST', headers: { ...nav(WIN), origin: 'https://evil.example', referer: URL_A }, expect: 403
});
await run('POST without origin', {
  method: 'POST', headers: { ...nav(WIN), referer: URL_A }, expect: 403
});
await run('POST from a different path', {
  method: 'POST', headers: { ...nav(WIN), origin: 'https://testpreppilot.com', referer: 'https://testpreppilot.com/exams/act/' }, expect: 403
});

console.log('--- analytics ---');
const events = sent.filter((s) => s.body.event === 'aff_outbound');
console.log('aff_outbound events logged: ' + events.length);
const noSession = events.every((e) => e.body.properties.$session_id === undefined);
console.log((noSession ? 'ok   ' : 'FAIL ') + 'server events carry no $session_id');
const sample = events.find((e) => e.body.properties.decision === 'redirect');
console.log('sample redirect event: ' + JSON.stringify(sample.body.properties).slice(0, 300));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
