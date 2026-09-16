// Viewport matrix for the filter sheet: opens it, asserts it is open, then
// measures + screenshots at phone, small-phone and landscape sizes.
import { spawn } from 'node:child_process';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const PORT = 9335;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = new URL('.', import.meta.url).pathname.replace(/^\//, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const profile = await mkdtemp(join(tmpdir(), 'qa3-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });

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
const errs = [];
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result ?? m.error); pending.delete(m.id); return; }
  if (m.method === 'Runtime.exceptionThrown') errs.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
});
const send = (method, params = {}) => {
  const i = ++id;
  ws.send(JSON.stringify({ id: i, method, params }));
  return new Promise((res) => pending.set(i, res));
};
const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true }))?.result?.value;

await send('Page.enable');
await send('Runtime.enable');

async function load(url) {
  const done = new Promise((res) => {
    const h = (e) => { const m = JSON.parse(e.data); if (m.method === 'Page.loadEventFired') { ws.removeEventListener('message', h); res(); } };
    ws.addEventListener('message', h);
  });
  await send('Page.navigate', { url });
  await done;
  await sleep(500);
}

const PROBE = `(() => {
  const g = (s) => document.querySelector(s);
  const r = (el) => { const b = el.getBoundingClientRect(); return el ? [Math.round(b.top), Math.round(b.bottom), Math.round(b.height)] : null; };
  const f = g('#dir-filters'), p = g('.filter-preview'), a = g('.filter-actions'), panel = g('#filter-panel');
  return {
    open: g('#filter-shell').classList.contains('is-open'),
    vh: window.innerHeight, vw: window.innerWidth,
    panel: r(panel), panelTransform: getComputedStyle(panel).transform,
    previewDisplay: getComputedStyle(p).display, previewText: p.textContent, previewRect: r(p),
    actionsPos: getComputedStyle(a).position, actionsRect: r(a),
    formOverflow: f.scrollHeight - f.clientHeight, formScrollTop: f.scrollTop,
    gapPreviewToActions: Math.round(a.getBoundingClientRect().top - p.getBoundingClientRect().bottom),
    actionsFullyVisible: a.getBoundingClientRect().bottom <= window.innerHeight + 1,
    closeVisible: r(g('#filter-close'))[0] >= 0,
  };
})()`;

const sizes = [[390, 844, '06-sheet-390.png'], [360, 640, '07-sheet-360.png'], [430, 932, '08-sheet-430.png'], [844, 390, '09-sheet-landscape.png']];

for (const [w, h, file] of sizes) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 2, mobile: true });
  await load('http://localhost:4321/');
  await ev(`document.getElementById('filter-trigger').click()`);
  await sleep(650);
  const info = await ev(PROBE);
  console.log(`\n=== ${w}x${h} ===`, JSON.stringify(info));
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  await writeFile(join(OUT, file), Buffer.from(shot.data, 'base64'));
  console.log(`  saved _qa/${file}`);
}

console.log('\nexceptions:', errs.length ? errs : '(none)');
ws.close();
chrome.kill();
process.exit(0);
