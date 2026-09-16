// Quick visual check of the two new blocks (homepage answer block, category
// ranked pay list) at desktop and mobile widths.
import { spawn } from 'node:child_process';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const PORT = 9336;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = new URL('.', import.meta.url).pathname.replace(/^\//, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = await mkdtemp(join(tmpdir(), 'shot-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--force-device-scale-factor=1.5', 'about:blank'], { stdio: 'ignore' });

let wsUrl;
for (let i = 0; i < 40 && !wsUrl; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
    wsUrl = list.find((t) => t.type === 'page')?.webSocketDebuggerUrl;
  } catch {}
  if (!wsUrl) await sleep(250);
}
const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener('open', r));
let id = 0;
const pending = new Map();
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result ?? m.error); pending.delete(m.id); }
});
const send = (method, params = {}) => {
  const i = ++id;
  ws.send(JSON.stringify({ id: i, method, params }));
  return new Promise((res) => pending.set(i, res));
};
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true }))?.result?.value;

await send('Page.enable');
await send('Runtime.enable');

async function shot(url, name, width, height, scrollTo = 0) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1.5, mobile: width < 700 });
  const done = new Promise((res) => {
    const h = (e) => { const m = JSON.parse(e.data); if (m.method === 'Page.loadEventFired') { ws.removeEventListener('message', h); res(); } };
    ws.addEventListener('message', h);
  });
  await send('Page.navigate', { url });
  await done;
  await sleep(600);
  if (scrollTo) { await ev(`document.querySelector('${scrollTo}')?.scrollIntoView({block:'start'}); 1`); await sleep(500); }
  const r = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile(join(OUT, name), Buffer.from(r.data, 'base64'));
  console.log('saved _qa/' + name);
}

await shot('http://localhost:4321/', '10-home-answer.png', 1280, 900);
await shot('http://localhost:4321/', '11-home-faq.png', 1280, 900, '.dir-faq');
await shot('http://localhost:4321/categories/technology', '12-cat-pay.png', 1280, 1000, '.cat-pay');
await shot('http://localhost:4321/', '13-home-answer-mobile.png', 390, 844);
await shot('http://localhost:4321/categories/technology', '14-cat-pay-mobile.png', 390, 844, '.cat-pay');

ws.close();
chrome.kill();
process.exit(0);
