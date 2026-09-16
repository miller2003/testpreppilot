// Resolve the contradiction: same UA, two clients (curl vs Node), 3 runs each.
// Decides whether the edge block is a UA match or a transport-level heuristic.
import { execFileSync } from 'node:child_process';

const URL_ = 'https://testpreppilot.com/';
const UAS = [
  'GPTBot/1.2',
  'CCBot/2.0',
  'ClaudeBot/1.0',
  'TotallyFakeBot/9.9',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/140 Safari/537.36'
];

function viaCurl(ua) {
  try {
    const out = execFileSync(
      'curl',
      ['-s', '--noproxy', '*', '--max-time', '12', '-A', ua, '-o', '/dev/null', '-w', '%{http_code}', URL_],
      { encoding: 'utf8' }
    );
    return out.trim();
  } catch (e) {
    return 'ERR';
  }
}

async function viaNode(ua) {
  try {
    const res = await fetch(URL_, { headers: { 'user-agent': ua, accept: 'text/html,application/xhtml+xml', 'accept-encoding': 'gzip, deflate' } });
    await res.arrayBuffer();
    return String(res.status);
  } catch (e) {
    return 'ERR ' + e.message;
  }
}

console.log('ua'.padEnd(52), 'curl', 'node');
for (const ua of UAS) {
  const c1 = viaCurl(ua);
  const n1 = await viaNode(ua);
  const c2 = viaCurl(ua);
  const n2 = await viaNode(ua);
  console.log(String(ua).slice(0, 50).padEnd(52), `${c1}/${c2}`, `${n1}/${n2}`);
}
