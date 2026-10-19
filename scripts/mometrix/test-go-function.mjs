// Offline test for functions/go/mometrix/[slug].js. Calls onRequest with mock
// requests and only inspects the response — nothing is fetched, so no
// affiliate click is ever generated.
//
//   node scripts/mometrix/test-go-function.mjs
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const { onRequest } = await import(pathToFileURL(path.join(root, 'functions/go/mometrix/[slug].js')).href);
const { mometrixProducts } = await import(pathToFileURL(path.join(root, 'src/data/mometrix.mjs')).href);

const product = Object.values(mometrixProducts).find((p) => p.goSlug === 'asvab-secrets-study-guide');
const UA = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0',
  edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  safariIos: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1',
  samsung: 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0.0.0 Mobile Safari/537.36',
  fbInApp: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBAV/480.0.0.0;FBBV/1;FBDV/iPhone15,2;FBMD/iPhone;FBSN/iOS;FBSV/17.6]',
  instagram: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 350.0.0.0',
  googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  bingbot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  gptbot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
  facebook: 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  slack: 'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)',
  headless: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/130.0.0.0 Safari/537.36',
  curl: 'curl/8.4.0',
  python: 'python-requests/2.32.3',
  ahrefs: 'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)'
};
const nav = { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document', 'sec-fetch-site': 'same-origin', 'sec-fetch-user': '?1' };

async function call({ ua, headers = {}, method = 'GET', slug = product.goSlug, cf } = {}) {
  const req = new Request(`https://testpreppilot.com/go/mometrix/${slug}`, {
    method,
    headers: { ...(ua !== undefined ? { 'user-agent': ua } : {}), ...headers },
    redirect: 'manual'
  });
  if (cf) Object.defineProperty(req, 'cf', { value: cf });
  return onRequest({ request: req, params: { slug } });
}

const cases = [
  ['Chrome click', { ua: UA.chrome, headers: nav }, 302],
  ['Firefox click', { ua: UA.firefox, headers: nav }, 302],
  ['Edge click', { ua: UA.edge, headers: nav }, 302],
  ['Safari iOS, no Sec-Fetch-User', { ua: UA.safariIos, headers: { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document' } }, 302],
  ['Samsung Internet click', { ua: UA.samsung, headers: nav }, 302],
  ['Facebook in-app browser', { ua: UA.fbInApp, headers: nav }, 302],
  ['Instagram in-app browser', { ua: UA.instagram }, 302],
  ['old browser, no fetch metadata', { ua: UA.chrome }, 302],
  ['upper-case slug', { ua: UA.chrome, headers: nav, slug: product.goSlug.toUpperCase() }, 302],
  ['Chrome prefetch (Sec-Purpose)', { ua: UA.chrome, headers: { 'sec-purpose': 'prefetch', 'sec-fetch-mode': 'no-cors', 'sec-fetch-dest': 'empty' } }, 204],
  ['Chrome prerender', { ua: UA.chrome, headers: { ...nav, 'sec-purpose': 'prefetch;prerender' } }, 204],
  ['legacy Purpose: prefetch', { ua: UA.chrome, headers: { purpose: 'prefetch' } }, 204],
  ['fetch() from a script', { ua: UA.chrome, headers: { 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty' } }, 403],
  ['loaded as an image', { ua: UA.chrome, headers: { 'sec-fetch-mode': 'no-cors', 'sec-fetch-dest': 'image' } }, 403],
  ['loaded in an iframe', { ua: UA.chrome, headers: { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'iframe' } }, 403],
  ['Googlebot', { ua: UA.googlebot }, 403],
  ['Bingbot', { ua: UA.bingbot }, 403],
  ['GPTBot', { ua: UA.gptbot }, 403],
  ['AhrefsBot', { ua: UA.ahrefs }, 403],
  ['Facebook link preview', { ua: UA.facebook }, 403],
  ['Slack link preview', { ua: UA.slack }, 403],
  ['HeadlessChrome', { ua: UA.headless, headers: nav }, 403],
  ['curl', { ua: UA.curl }, 403],
  ['python-requests', { ua: UA.python }, 403],
  ['no user-agent', { ua: undefined }, 403],
  ['Cloudflare verified bot', { ua: UA.chrome, headers: nav, cf: { verifiedBotCategory: 'Search Engine Crawler' } }, 403],
  ['low bot score', { ua: UA.chrome, headers: nav, cf: { botManagement: { score: 2 } } }, 403],
  ['HEAD (link checker)', { ua: UA.chrome, method: 'HEAD' }, 405],
  ['unknown slug', { ua: UA.chrome, headers: nav, slug: 'not-a-product' }, 404]
];

let failed = 0;
for (const [name, opts, want] of cases) {
  const res = await call(opts);
  const loc = res.headers.get('location');
  const problems = [];
  if (res.status !== want) problems.push(`status ${res.status} != ${want}`);
  if (want === 302 && loc !== product.href) problems.push(`location ${loc}`);
  if (want !== 302 && loc) problems.push(`leaked location ${loc}`);
  if (!/noindex/.test(res.headers.get('x-robots-tag') || '')) problems.push('no X-Robots-Tag');
  if (!/no-store/.test(res.headers.get('cache-control') || '')) problems.push('cacheable');
  if (want !== 302 && res.status !== 204 && res.status !== 405 && /ref\.mometrix/.test(await res.text())) problems.push('body leaks target');
  if (problems.length) failed++;
  console.log(`${problems.length ? 'FAIL' : 'ok  '}  ${String(res.status).padEnd(4)} ${name}${problems.length ? '  — ' + problems.join('; ') : ''}`);
}
console.log(failed ? `\n${failed} failing case(s)` : `\nall ${cases.length} cases pass`);
process.exit(failed ? 1 : 0);
