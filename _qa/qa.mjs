// Visual + behavioural QA for the homepage filter bar.
// Drives the user's own headless Chrome over CDP (no extra browser download):
// mobile viewport → bar, sheet, live preview, apply, chips; desktop viewport →
// confirm the PC row is untouched. Screenshots land in _qa/.
//
// Usage: node _qa/qa.mjs [baseUrl]

import { writeFile, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

const BASE = process.argv[2] || 'http://localhost:4321/';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = new URL('.', import.meta.url).pathname.replace(/^\//, '');
const PORT = 9333;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = await mkdtemp(join(tmpdir(), 'qa-chrome-'));
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--hide-scrollbars',
    '--force-device-scale-factor=2',
    'about:blank',
  ],
  { stdio: 'ignore', detached: false }
);

async function targetUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await r.json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error('Chrome did not expose a debug target');
}

const ws = new WebSocket(await targetUrl());
await new Promise((res, rej) => {
  ws.addEventListener('open', res);
  ws.addEventListener('error', rej);
});

let id = 0;
const pending = new Map();
const errors = [];
const logs = [];

ws.addEventListener('message', (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  }
  if (msg.method === 'Runtime.consoleAPICalled') {
    const text = (msg.params.args || []).map((a) => a.value ?? a.description ?? '').join(' ');
    logs.push(`${msg.params.type}: ${text}`);
    if (msg.params.type === 'error') errors.push(text);
  }
  if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
    errors.push(msg.params.entry.text);
  }
});

function send(method, params = {}) {
  const msgId = ++id;
  ws.send(JSON.stringify({ id: msgId, method, params }));
  return new Promise((res) => pending.set(msgId, (m) => res(m.result ?? m.error)));
}

const evaluate = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (r?.exceptionDetails) return { __error: r.exceptionDetails.exception?.description };
  return r?.result?.value;
};

async function shot(name, fullPage = false) {
  const r = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: fullPage,
  });
  await writeFile(join(OUT, name), Buffer.from(r.data, 'base64'));
  console.log(`  saved _qa/${name}`);
}

async function viewport(width, height, mobile) {
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 2,
    mobile,
  });
  await send('Emulation.setTouchEmulationEnabled', { enabled: !!mobile, maxTouchPoints: 5 });
}

async function load() {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');
  const done = new Promise((res) => {
    const h = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.method === 'Page.loadEventFired') {
        ws.removeEventListener('message', h);
        res();
      }
    };
    ws.addEventListener('message', h);
  });
  await send('Page.navigate', { url: BASE });
  await done;
  await sleep(700);
}

const report = {};

/* ── 1. Mobile bar ───────────────────────────────────────────────── */
console.log('\n[1] mobile 390x844 — collapsed bar');
await viewport(390, 844, true);
await load();
report.mobileBar = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  const cs = (s) => getComputedStyle(g(s));
  const bar = g('#dir-bar'), inner = g('.dir-bar-inner');
  return {
    barHeight: Math.round(bar.getBoundingClientRect().height),
    rows: Math.round(inner.getBoundingClientRect().height / 44),
    triggerDisplay: cs('#filter-trigger').display,
    shellDisplay: cs('#filter-shell').display,
    shellVisibility: cs('#filter-shell').visibility,
    panelDisplay: cs('#filter-panel').display,
    chipsDisplay: cs('#filter-chips').display,
    placeholder: g('#dir-q').placeholder,
    applyLabel: g('#f-apply').textContent,
    shellInert: g('#filter-shell').inert,
    panelRole: g('#filter-panel').getAttribute('role'),
    backdropDisplay: cs('#filter-backdrop').display,
    formInsidePanel: !!g('#filter-panel').querySelector('#dir-filters'),
    triggerRect: (() => { const r = g('#filter-trigger').getBoundingClientRect(); return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)]; })(),
    searchRect: (() => { const r = g('#dir-q').getBoundingClientRect(); return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)]; })(),
  };
})()`);
await shot('01-mobile-bar.png');
console.log(JSON.stringify(report.mobileBar, null, 1));

/* ── 2. Sheet opened ─────────────────────────────────────────────── */
console.log('\n[2] mobile — sheet open');
await evaluate(`document.getElementById('filter-trigger').click()`);
await sleep(600);
report.sheetOpen = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  const panel = g('#filter-panel'), r = panel.getBoundingClientRect();
  const cs = getComputedStyle(panel);
  return {
    open: g('#filter-shell').classList.contains('is-open'),
    ariaExpanded: g('#filter-trigger').getAttribute('aria-expanded'),
    panelRect: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)],
    panelTransform: cs.transform,
    panelBg: cs.backgroundColor,
    bodyOverflow: document.body.style.overflow,
    activeElement: document.activeElement && (document.activeElement.id || document.activeElement.tagName),
    stateDisabled: g('#f-state').disabled,
    hintHidden: g('#f-state-hint').hidden,
    preview: g('#filter-preview').textContent,
    applyLabel: g('#f-apply').textContent,
    closeSize: (() => { const c = g('#filter-close').getBoundingClientRect(); return [Math.round(c.width), Math.round(c.height)]; })(),
    segBtnSize: (() => { const c = g('.seg-btn').getBoundingClientRect(); return [Math.round(c.width), Math.round(c.height)]; })(),
  };
})()`);
await shot('02-mobile-sheet.png');
console.log(JSON.stringify(report.sheetOpen, null, 1));

/* ── 3. Drill into State + a state, watch the live preview ───────── */
console.log('\n[3] mobile — scope State + state CA (live preview)');
await evaluate(`[...document.querySelectorAll('.seg-btn')].find(b => b.dataset.scope === 'state').click()`);
await sleep(250);
report.afterScope = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  return { preview: g('#filter-preview').textContent, applyLabel: g('#f-apply').textContent, stateDisabled: g('#f-state').disabled, hintHidden: g('#f-state-hint').hidden };
})()`);
console.log('  after scope:', JSON.stringify(report.afterScope));

await evaluate(`(() => { const s = document.getElementById('f-state'); s.value = 'CA'; s.dispatchEvent(new Event('change')); return s.value; })()`);
await sleep(250);
report.afterState = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  return { preview: g('#filter-preview').textContent, applyLabel: g('#f-apply').textContent };
})()`);
console.log('  after state:', JSON.stringify(report.afterState));

await evaluate(`(() => { const s = document.getElementById('f-cat'); s.value = 'allied-health'; s.dispatchEvent(new Event('change')); return s.value; })()`);
await sleep(250);
report.afterCat = await evaluate(`document.getElementById('f-apply').textContent`);
console.log('  after category:', report.afterCat);

/* ── 4. Commit ───────────────────────────────────────────────────── */
console.log('\n[4] mobile — apply');
await evaluate(`document.getElementById('f-apply').click()`);
await sleep(900);
report.afterApply = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  const visible = [...document.querySelectorAll('.exam')].filter(e => !e.hidden).length;
  return {
    open: g('#filter-shell').classList.contains('is-open'),
    bodyOverflow: document.body.style.overflow,
    visibleExams: visible,
    count: g('#dir-count').textContent,
    chipsHidden: g('#filter-chips').hidden,
    chips: [...g('#filter-chips').querySelectorAll('.filter-chip')].map(c => c.textContent.trim()),
    chipStyles: (() => { const c = g('.filter-chip'); if (!c) return null; const s = getComputedStyle(c); return { display: s.display, radius: s.borderRadius, minHeight: s.minHeight, bg: s.backgroundColor, padding: s.padding }; })(),
    badge: g('#filter-badge').hidden ? null : g('#filter-badge').textContent,
    triggerActive: g('#filter-trigger').classList.contains('is-active'),
    applyLabel: g('#f-apply').textContent,
    ariaExpanded: g('#filter-trigger').getAttribute('aria-expanded'),
    activeElement: document.activeElement && (document.activeElement.id || document.activeElement.tagName),
  };
})()`);
await shot('03-mobile-chips.png');
console.log(JSON.stringify(report.afterApply, null, 1));

/* ── 5. Drop one chip ────────────────────────────────────────────── */
console.log('\n[5] mobile — remove the category chip');
report.chipRemoved = await evaluate(`(() => {
  const cat = [...document.querySelectorAll('.filter-chip')].find(c => c.dataset.facet === 'cat');
  if (!cat) return 'no cat chip';
  cat.click();
  const visible = [...document.querySelectorAll('.exam')].filter(e => !e.hidden).length;
  return { visible, count: document.getElementById('dir-count').textContent, chips: [...document.querySelectorAll('.filter-chip')].map(c => c.textContent.trim()) };
})()`);
console.log(JSON.stringify(report.chipRemoved));

/* ── 6. Cancel semantics ─────────────────────────────────────────── */
console.log('\n[6] mobile — open, change scope, cancel (Esc)');
await evaluate(`document.getElementById('filter-trigger').click()`);
await sleep(450);
await evaluate(`[...document.querySelectorAll('.seg-btn')].find(b => b.dataset.scope === 'national').click()`);
await sleep(200);
const midCancel = await evaluate(`[...document.querySelectorAll('.exam')].filter(e => !e.hidden).length`);
await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
await sleep(500);
report.cancel = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  const active = [...document.querySelectorAll('.seg-btn')].find(b => b.classList.contains('is-active'));
  return {
    open: g('#filter-shell').classList.contains('is-open'),
    scopeRestored: active ? active.dataset.scope : null,
    visibleExams: [...document.querySelectorAll('.exam')].filter(e => !e.hidden).length,
    visibleWhileOpen: ${midCancel},
    bodyOverflow: document.body.style.overflow,
    focusReturned: document.activeElement && (document.activeElement.id || document.activeElement.tagName),
  };
})()`);
console.log(JSON.stringify(report.cancel, null, 1));

/* ── 7. Focus trap ───────────────────────────────────────────────── */
console.log('\n[7] mobile — focus trap (Tab from last wraps to first)');
await evaluate(`document.getElementById('filter-trigger').click()`);
await sleep(450);
report.focusTrap = await evaluate(`(() => {
  const panel = document.getElementById('filter-panel');
  const list = [...panel.querySelectorAll('button, select, input')].filter(el => !el.disabled && el.offsetParent !== null);
  const first = list[0], last = list[list.length - 1];
  last.focus();
  return { first: first.id || first.className, last: last.id || last.className, count: list.length, focused: document.activeElement.id || document.activeElement.textContent.trim().slice(0, 12) };
})()`);
await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
await sleep(200);
report.focusTrapAfterTab = await evaluate(`document.activeElement.id || document.activeElement.textContent.trim().slice(0, 14)`);
console.log(JSON.stringify(report.focusTrap), '→ after Tab:', report.focusTrapAfterTab);

/* ── 8. Reset inside the sheet + close ───────────────────────────── */
console.log('\n[8] mobile — reset from the sheet');
await evaluate(`document.getElementById('f-reset').click()`);
await sleep(300);
report.reset = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  return { chipsHidden: g('#filter-chips').hidden, badgeHidden: g('#filter-badge').hidden, count: g('#dir-count').textContent, visible: [...document.querySelectorAll('.exam')].filter(e => !e.hidden).length, preview: g('#filter-preview').textContent, applyLabel: g('#f-apply').textContent, query: g('#dir-q').value };
})()`);
console.log(JSON.stringify(report.reset));
await evaluate(`document.getElementById('filter-close').click()`);
await sleep(400);

/* ── 9. Autocomplete styling (was silently unscoped) ─────────────── */
console.log('\n[9] mobile — autocomplete option styles');
await evaluate(`document.getElementById('dir-q').focus()`);
await evaluate(`(() => { const q = document.getElementById('dir-q'); q.value = 'nurse'; q.dispatchEvent(new Event('input')); })()`);
await sleep(400);
report.combo = await evaluate(`(() => {
  const li = document.querySelector('.combobox-opt');
  if (!li) return 'no suggestions rendered';
  const s = getComputedStyle(li);
  const name = li.querySelector('.co-name');
  return {
    text: li.textContent.trim().slice(0, 48),
    display: s.display,
    padding: s.padding,
    cursor: s.cursor,
    nameFont: name ? getComputedStyle(name).fontWeight : null,
    listVisible: !document.getElementById('combo-list').hidden,
  };
})()`);
await shot('04-mobile-autocomplete.png');
console.log(JSON.stringify(report.combo, null, 1));

/* ── 10. Desktop: unchanged row ──────────────────────────────────── */
console.log('\n[10] desktop 1280x900 — original inline row');
await viewport(1280, 900, false);
await load();
report.desktop = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  const cs = (s) => getComputedStyle(g(s));
  const kids = [...g('.dir-bar-inner').children].map((c) => c.className.split(' ')[0]);
  return {
    triggerDisplay: cs('#filter-trigger').display,
    shellDisplay: cs('#filter-shell').display,
    panelDisplay: cs('#filter-panel').display,
    headDisplay: cs('.filter-head').display,
    labelDisplay: cs('.field-label').display,
    hintDisplay: cs('.filter-hint').display,
    previewDisplay: cs('.filter-preview').display,
    chipsDisplay: cs('#filter-chips').display,
    backdropDisplay: cs('#filter-backdrop').display,
    panelRole: g('#filter-panel').getAttribute('role'),
    shellInert: g('#filter-shell').inert,
    formIsFlexItem: cs('#dir-filters').display,
    formRect: (() => { const r = g('#dir-filters').getBoundingClientRect(); return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }; })(),
    applyLabel: g('#f-apply').textContent,
    placeholder: g('#dir-q').placeholder,
    barChildren: kids,
    barHeight: Math.round(g('#dir-bar').getBoundingClientRect().height),
  };
})()`);
await shot('05-desktop-bar.png', false);
console.log(JSON.stringify(report.desktop, null, 1));

/* ── 11. Breakpoint crossing while open ──────────────────────────── */
console.log('\n[11] mobile→desktop while the sheet is open');
await viewport(390, 844, true);
await sleep(350);
await evaluate(`document.getElementById('filter-trigger').click()`);
await sleep(400);
await viewport(1280, 900, false);
await sleep(500);
report.crossbreak = await evaluate(`(() => {
  const g = (s) => document.querySelector(s);
  return {
    open: g('#filter-shell').classList.contains('is-open'),
    bodyOverflow: document.body.style.overflow,
    inlineRow: getComputedStyle(g('#dir-filters')).display,
    formVisible: g('#dir-filters').getBoundingClientRect().height > 0,
    applyLabel: g('#f-apply').textContent,
    placeholder: g('#dir-q').placeholder,
  };
})()`);
console.log(JSON.stringify(report.crossbreak));

console.log('\n=== console errors ===');
console.log(errors.length ? errors.join('\n') : '(none)');

await writeFile(join(OUT, 'report.json'), JSON.stringify(report, null, 2));
ws.close();
chrome.kill();
await sleep(300);
process.exit(0);
