// AI-crawler reachability check — intent vs enforcement, in one command.
//
// Why this exists: robots.txt is a *voluntary* protocol. A crawler can be
// allowed in robots.txt and still be refused at the CDN edge (WAF / bot
// rules), which is the failure mode that quietly zeroes out AI grounding for a
// site: nothing looks broken, the pages still rank, but the answer engines stop
// reading new content. The two layers have to be checked together.
//
//   node _ai_crawler_check.mjs [url]
//
// Exit code 1 if any crawler that robots.txt allows is refused with 403/429,
// so it can be dropped into a deploy check or a weekly cron.

const TARGET = process.argv[2] || 'https://testpreppilot.com/';

// The crawlers that matter for AI answers and for training-time knowledge.
// `ua` is the EXACT user-agent the vendor documents — not an approximation.
// This matters: an approximated string like "GPTBot/1.2 (+https://…)" is
// treated differently by edge bot rules than the string GPTBot actually sends
// (measured 2026-09-16: the approximation returned 200 while the real string
// returned 403), so a simulated check that invents its own UA measures the
// simulator, not the site. `role` is only used in the report.
const CRAWLERS = [
  ['OAI-SearchBot', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot', 'OpenAI', 'ChatGPT search index — live citations'],
  ['ChatGPT-User', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot', 'OpenAI', 'ChatGPT fetching a page a user asked about'],
  ['GPTBot', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)', 'OpenAI', 'OpenAI training corpus (long-term model knowledge)'],
  ['PerplexityBot', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)', 'Perplexity', 'Perplexity answer index'],
  ['Perplexity-User', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user', 'Perplexity', 'Perplexity user-triggered fetch'],
  ['ClaudeBot', 'ClaudeBot/1.0; +claudebot@anthropic.com', 'Anthropic', 'Anthropic crawl (Claude answers + training)'],
  ['Claude-User', 'Claude-User/1.0; +claude-user@anthropic.com', 'Anthropic', 'Claude fetching a page on request'],
  ['anthropic-ai', 'anthropic-ai', 'Anthropic', 'Anthropic legacy crawler'],
  ['Googlebot', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'Google', 'Google Search (baseline — must never break)'],
  ['Applebot', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)', 'Apple', 'Siri / Spotlight'],
  ['Bingbot', 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)', 'Microsoft', 'Bing + Copilot grounding'],
  ['meta-externalagent', 'meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)', 'Meta', 'Meta AI'],
  ['Amazonbot', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)', 'Amazon', 'Alexa / Amazon AI'],
  ['CCBot', 'CCBot/2.0 (https://commoncrawl.org/faq/)', 'Common Crawl', 'Common Crawl (feeds many model datasets)'],
  ['Diffbot', 'Mozilla/5.0 (compatible; Diffbot/0.1; +http://www.diffbot.com)', 'Diffbot', 'Knowledge-graph pipelines used by AI vendors'],
  ['cohere-ai', 'cohere-ai', 'Cohere', 'Cohere'],
  ['Bytespider', 'Mozilla/5.0 (compatible; Bytespider; spider-feedback@bytedance.com)', 'ByteDance', 'ByteDance / Doubao'],
  ['YouBot', 'Mozilla/5.0 (compatible; YouBot/1.0; +https://about.you.com/youbot/)', 'You.com', 'You.com'],
  ['curl-control', 'curl/8.0', 'control', 'Control — no crawler identity at all']
];

// ── 1. robots.txt: what the site SAYS ───────────────────────────────
function parseRobots(text) {
  const groups = [];
  let current = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === 'user-agent') {
      if (!current || current.rules.length) { current = { agents: [], rules: [] }; groups.push(current); }
      current.agents.push(val.toLowerCase());
    } else if ((key === 'allow' || key === 'disallow') && current) {
      current.rules.push({ allow: key === 'allow', path: val });
    }
  }
  return groups;
}

// Longest UA token wins (Google's rule); the wildcard group is the fallback.
function robotsVerdict(groups, ua) {
  const uaLower = ua.toLowerCase();
  let best = null;
  let bestLen = -1;
  for (const g of groups) {
    for (const a of g.agents) {
      if (a === '*') continue;
      if (uaLower.includes(a) && a.length > bestLen) { best = g; bestLen = a.length; }
    }
  }
  if (!best) best = groups.find((g) => g.agents.includes('*'));
  if (!best) return 'unspecified';
  if (!best.rules.length) return 'allow';
  // Most specific matching path wins; ties go to the longer path.
  const P = '/';
  let chosen = null;
  let chosenLen = -1;
  for (const r of best.rules) {
    if (!r.path) continue;
    const pat = r.path.replace(/\*$/, '');
    if (P.startsWith(pat) && pat.length >= chosenLen) { chosen = r; chosenLen = pat.length; }
  }
  return chosen ? (chosen.allow ? 'allow' : 'disallow') : 'allow';
}

// ── 2. The edge: what the site DOES ─────────────────────────────────
async function probe(ua) {
  try {
    const res = await fetch(TARGET, {
      headers: { 'user-agent': ua, accept: 'text/html,application/xhtml+xml', 'accept-language': 'en-US,en;q=0.9', 'accept-encoding': 'gzip, deflate' },
      redirect: 'follow'
    });
    await res.arrayBuffer();
    return res.status;
  } catch (e) {
    return `ERR ${e.message}`;
  }
}

const robotsRes = await fetch(new URL('/robots.txt', TARGET).href, { headers: { 'user-agent': 'curl/8.0' } });
const robotsText = robotsRes.ok ? await robotsRes.text() : '';
if (!robotsText) {
  console.log(`! Could not read ${new URL('/robots.txt', TARGET).href} (HTTP ${robotsRes.status}) — intent unknown, reporting enforcement only.`);
}
const groups = robotsText ? parseRobots(robotsText) : [];

console.log(`\nAI crawler reachability — ${TARGET}`);
console.log(`robots.txt: ${robotsRes.status} · ${robotsText.length} bytes · ${groups.length} groups\n`);

const rows = [];
for (const [label, ua, vendor, role] of CRAWLERS) {
  const intent = groups.length ? robotsVerdict(groups, label) : 'unknown';
  const status = await probe(ua);
  const http = typeof status === 'number' ? status : null;
  const refused = http !== null && (http === 403 || http === 429 || http === 401);
  const verdict =
    refused && intent === 'allow' ? 'CONTRADICTION — allowed in robots.txt, refused at the edge'
    : refused && intent !== 'allow' ? 'blocked (matches robots intent)'
    : http === 200 ? 'ok'
    : http === null ? 'network error'
    : `unexpected ${http}`;
  rows.push({ label, vendor, role, intent, status, verdict, critical: refused && intent === 'allow' });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad('crawler', 22) + pad('vendor', 12) + pad('robots', 10) + pad('HTTP', 7) + 'verdict');
console.log('-'.repeat(96));
for (const r of rows) {
  console.log(pad(r.label, 22) + pad(r.vendor, 12) + pad(r.intent, 10) + pad(r.status, 7) + r.verdict);
}

const critical = rows.filter((r) => r.critical);
console.log(`\n${critical.length ? 'FAIL' : 'PASS'} — ${critical.length} crawler(s) allowed by robots.txt but refused at the edge.`);
if (critical.length) {
  console.log('\nWhat this costs:');
  for (const r of critical) console.log(`  · ${r.label.padEnd(20)} ${r.role}`);
  console.log('\nFix: it is a CDN/WAF rule, not a robots.txt or code problem. In the Cloudflare');
  console.log('dashboard check, in this order: Security → Bots (Bot Fight Mode / "Block AI');
  console.log('scrapers"), then Security → WAF → Managed rules, then any custom rule matching');
  console.log('these user agents. Re-run this script until every line reads ok.');
}

process.exit(critical.length ? 1 : 0);
