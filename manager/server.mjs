// ─────────────────────────────────────────────────────────────────────
//  TestPrepPilot — Content Manager (local)
//
//  A tiny zero-dependency Node server that lets you:
//    • see every one of the ~5,800 generated exam pages
//    • filter / search / sort them
//    • preview each page's real content + quality score
//    • pick a batch and release it (set a release date) or pull it back
//    • one-click deploy: commit the release manifest and push to GitHub
//      (which triggers the Cloudflare Pages rebuild of only released pages)
//
//  Run:  npm run manage        (listens on http://localhost:4280)
// ─────────────────────────────────────────────────────────────────────

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { demandScore, demandTier } from './demand.mjs';
import { execFile } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const MANIFEST = path.join(ROOT, 'src/data/examCatalog/release-manifest.mjs');
const QUALITY = path.join(ROOT, '_batch_quality.json');
const PUBLIC = path.join(__dirname, 'public');

const PORT = process.env.MANAGER_PORT ? Number(process.env.MANAGER_PORT) : 4280;

// ── Load data (node can import the .mjs catalog directly) ─────────────
const catalog = await import(
  pathToFileURL(path.join(ROOT, 'src/data/examCatalog/index.mjs')).href
);
const research = await import(
  pathToFileURL(path.join(ROOT, 'src/data/examCatalog/national-research/index.mjs')).href
);

const allExams = catalog.allExamsFull; // full, unfiltered list for the manager
const bySlug = new Map(allExams.map((e) => [e.slug, e]));
const catLabel = (id) => catalog.categoryById?.[id]?.label || id;

// Quality metrics keyed by slug (from the offline audit; may be absent)
let qualityById = {};
if (fs.existsSync(QUALITY)) {
  try {
    const q = JSON.parse(fs.readFileSync(QUALITY, 'utf8'));
    for (const r of q.records || []) qualityById[r.slug] = r;
  } catch {
    /* ignore */
  }
}

// ── Release manifest (in-memory source of truth for this session) ─────
let releases = {};
async function loadReleases() {
  try {
    const mod = await import(pathToFileURL(MANIFEST).href);
    releases = { ...(mod.releases || {}) };
  } catch {
    releases = {};
  }
}
await loadReleases();

const todayISO = () => new Date().toISOString().slice(0, 10);

function statusOf(e) {
  if (e.status === 'complete') return 'live'; // flagship, always live
  const d = releases[e.slug];
  if (!d) return 'draft';
  return d <= todayISO() ? 'live' : 'scheduled';
}

function rowOf(e) {
  const q = qualityById[e.slug] || null;
  const dem = demandScore(e);
  return {
    slug: e.slug,
    name: e.name,
    category: e.category,
    categoryLabel: catLabel(e.category),
    scope: e.status === 'complete' ? 'flagship' : e.scope,
    gateable: e.status !== 'complete',
    status: statusOf(e),
    releaseDate: releases[e.slug] || null,
    researched: !!e.researched,
    demand: dem,
    demandTier: demandTier(dem),
    quality: q
      ? {
          totalBody: q.totalBody,
          sumWords: q.sumWords,
          descWords: q.descWords,
          faqWords: q.faqWords,
          lowDepth: !!q.lowDepth,
          templated: !!q.templated
        }
      : null
  };
}

// ── Persist manifest back to disk (the file the build imports) ────────
function saveReleases() {
  const keys = Object.keys(releases).sort();
  const body =
    `// AUTO-MANAGED by the TestPrepPilot content manager (manager/server.mjs).\n` +
    `// slug -> ISO release date "YYYY-MM-DD". A page is built only when its\n` +
    `// release date <= today (UTC). Edit via the manager UI, not by hand.\n\n` +
    `export const releases = {\n` +
    keys.map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(releases[k])},`).join('\n') +
    `\n};\n\n` +
    `export function isReleased(slug, now = new Date()) {\n` +
    `  const d = releases[slug];\n` +
    `  if (!d) return false;\n` +
    `  return new Date(d + 'T00:00:00Z') <= now;\n` +
    `}\n\n` +
    `export default releases;\n`;
  fs.writeFileSync(MANIFEST, body, 'utf8');
}

// ── Git deploy ────────────────────────────────────────────────────────
function git(args) {
  return new Promise((resolve) => {
    execFile('git', args, { cwd: ROOT }, (err, stdout, stderr) => {
      resolve({ ok: !err, stdout: (stdout || '').trim(), stderr: (stderr || '').trim() });
    });
  });
}

// ── HTTP helpers ──────────────────────────────────────────────────────
function sendJSON(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

function he(s) {
  return (s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function paras(s) {
  return (s || '')
    .split(/\n{2,}/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => `<p>${he(t).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

// Assemble the full page detail object (shared by /api/exam and /preview)
function detailOf(slug) {
  const e = bySlug.get(slug);
  if (!e) return null;
  const record = e.scope === 'national' ? research.nationalFor(slug) : null;
  return {
    slug: e.slug,
    name: e.name,
    category: e.category,
    categoryLabel: catLabel(e.category),
    scope: e.scope,
    status: e.status,
    status2: statusOf(e),
    releaseDate: releases[slug] || null,
    blurb: e.blurb || null,
    researched: !!e.researched,
    offered: e.offered ?? null,
    record: record
      ? {
          tagline: record.tagline || null,
          summary: record.quickAnswer?.summary || null,
          description: record.description || null,
          faqs: (record.faqs || []).map((f) => ({ q: f.q, a: f.a })),
          roadmap: record.roadmap || [],
          topics: record.topics || [],
          summaryPoints: record.summaryPoints || [],
          costBreakdown: record.costBreakdown || null,
          timeline: record.timeline || null
        }
      : null,
    quality: qualityById[slug] || null
  };
}

// Render a complete, styled webpage that approximates the live page look.
function buildPreviewHTML(d) {
  const scopeLabel = d.scope === 'national' ? '国家级' : d.scope === 'state' ? '州级' : '标杆';
  const statusLabel =
    d.status2 === 'live' ? '已发布' : d.status2 === 'scheduled' ? '已排期' : '草稿';
  const r = d.record || {};
  let sections = '';

  if (d.blurb) sections += `<section><h2>简介</h2><p>${he(d.blurb)}</p></section>`;
  if (r.tagline) sections += `<section class="hero"><p>${he(r.tagline)}</p></section>`;
  if (r.summary) sections += `<section class="hero-box"><h2>一句话摘要</h2><p>${he(r.summary)}</p></section>`;
  if (r.description) sections += `<section><h2>考试详情</h2>${paras(r.description)}</section>`;
  if (r.summaryPoints && r.summaryPoints.length)
    sections += `<section><h2>核心要点</h2><ul>${r.summaryPoints.map((x) => `<li>${he(x)}</li>`).join('')}</ul></section>`;
  if (r.roadmap && r.roadmap.length)
    sections += `<section><h2>备考 / 取证路线</h2><ol>${r.roadmap.map((x) => `<li>${he(x)}</li>`).join('')}</ol></section>`;
  if (r.topics && r.topics.length)
    sections += `<section><h2>涵盖主题</h2><p>${he(r.topics.join('、'))}</p></section>`;
  if (r.faqs && r.faqs.length)
    sections += `<section><h2>常见问题（${r.faqs.length}）</h2>${r.faqs
      .map((f) => `<div class="qa"><h3>${he(f.q)}</h3>${paras(f.a)}</div>`)
      .join('')}</section>`;
  if (r.costBreakdown) {
    let rows = '';
    const cb = r.costBreakdown;
    if (cb.examFee != null) rows += `<tr><td>考试费</td><td>${he(cb.examFee)}</td></tr>`;
    if (cb.retakeFee != null) rows += `<tr><td>补考费</td><td>${he(cb.retakeFee)}</td></tr>`;
    if (cb.materials != null) rows += `<tr><td>教材</td><td>${he(cb.materials)}</td></tr>`;
    if (cb.total != null) rows += `<tr><td>合计</td><td>${he(cb.total)}</td></tr>`;
    if (cb.notes) rows += `<tr><td>说明</td><td>${he(cb.notes)}</td></tr>`;
    if (rows) sections += `<section><h2>费用估算</h2><table class="cost">${rows}</table></section>`;
  }
  if (!sections)
    sections = `<section><p class="muted">该页面暂无研究内容${
      d.offered === false ? '（该 jurisdiction 不发此证书，offered=false）' : ''
    }。</p></section>`;

  const q = d.quality;
  let qnote = '';
  if (q) {
    const flags = [];
    if (q.lowDepth) flags.push('内容偏薄');
    if (q.templated) flags.push('开头模板化');
    qnote = `<div class="qbadge">质量：${q.totalBody || 0} 字${
      flags.length ? ' · <span class="warn">' + flags.join('、') + '</span>' : ' · 良好'
    }</div>`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${he(d.name)} · TestPrepPilot 预览</title>
<style>
  :root{--brand:#2563eb;--ink:#1f2430;--muted:#6b7280;--line:#e5e7eb;--bg:#f6f7f9}
  *{box-sizing:border-box}
  body{margin:0;font:15px/1.7 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--ink)}
  header{background:#0f172a;color:#fff;padding:12px 22px;display:flex;align-items:center;gap:14px}
  header .logo{font-weight:800;letter-spacing:.3px}
  header nav{margin-left:auto;font-size:13px;color:#cbd5e1}
  .crumb{font-size:13px;color:var(--muted);padding:14px 22px 0}
  .wrap{max-width:820px;margin:0 auto;padding:8px 22px 60px}
  h1{font-size:28px;margin:6px 0 4px}
  .sub{color:var(--muted);margin-bottom:14px}
  .pill{display:inline-block;font-size:12px;padding:2px 10px;border-radius:999px;background:#eef2ff;color:#4338ca;margin-right:6px}
  .pill.live{background:#e9f7ef;color:#16a34a}.pill.sched{background:#fdf3e3;color:#d97706}.pill.draft{background:#f1f3f5;color:#6b7280}
  section{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin:16px 0;box-shadow:0 1px 2px rgba(16,24,40,.04)}
  section h2{font-size:17px;margin:0 0 10px;border-left:4px solid var(--brand);padding-left:10px}
  .hero-box{background:linear-gradient(180deg,#eff4ff,#fff);border-color:#d6e2ff}
  .hero{background:#f8fafc;border-style:dashed}
  p{margin:8px 0}
  ul,ol{margin:8px 0;padding-left:22px}
  .qa{border-top:1px solid var(--line);padding:12px 0}
  .qa h3{font-size:15px;margin:0 0 6px;color:#0f172a}
  table.cost{width:100%;border-collapse:collapse}
  table.cost td{border-bottom:1px solid var(--line);padding:8px 4px}
  table.cost td:first-child{color:var(--muted);width:120px}
  .muted{color:var(--muted)}
  .qbadge{font-size:13px;color:var(--muted);padding:0 22px 30px}
  .warn{color:#d97706;font-weight:600}
  .preview-note{background:#fffbeb;border:1px solid #fde68a;color:#92400e;font-size:13px;padding:10px 14px;border-radius:10px;margin:14px 0}
</style></head>
<body>
<header><span class="logo">TestPrepPilot</span><nav>考试内容指南 · 预览</nav></header>
<div class="crumb">首页 / ${he(d.categoryLabel)} / ${he(d.name)}</div>
<div class="wrap">
  <h1>${he(d.name)}</h1>
  <div class="sub"><span class="pill">${he(d.categoryLabel)}</span><span class="pill">${scopeLabel}</span><span class="pill ${d.status2 === 'live' ? 'live' : d.status2 === 'scheduled' ? 'sched' : 'draft'}">${statusLabel}</span>${d.releaseDate ? ' · 发布日 ' + he(d.releaseDate) : ''}</div>
  <div class="preview-note">这是内容预览，按线上真实页面样式渲染（数据为当前草稿内容，未发布前 Google 不会收录）。</div>
  ${sections}
  ${qnote}
</div>
</body></html>`;
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, `http://${req.headers.host}`);
  const p = u.pathname;

  // Static dashboard
  if (p === '/' || p === '/index.html') {
    const file = path.join(PUBLIC, 'index.html');
    if (fs.existsSync(file)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(file, 'utf8'));
    } else {
      res.writeHead(404);
      res.end('dashboard not found');
    }
    return;
  }

  // ── API ───────────────────────────────────────────────────────────
  if (p === '/api/stats' && req.method === 'GET') {
    const rows = allExams.map(rowOf);
    const byStatus = { live: 0, scheduled: 0, draft: 0, flagship: 0 };
    const byCat = {};
    for (const r of rows) {
      byStatus[r.status] = (byStatus[r.status] || 0) + 1;
      if (r.scope === 'flagship') byStatus.flagship++;
      byCat[r.categoryLabel] = (byCat[r.categoryLabel] || 0) + 1;
    }
    return sendJSON(res, 200, {
      total: rows.length,
      ...byStatus,
      byCategory: byCat,
      generatedAt: new Date().toISOString()
    });
  }

  if (p === '/api/exams' && req.method === 'GET') {
    const q = (u.searchParams.get('q') || '').toLowerCase();
    const scope = u.searchParams.get('scope') || 'all';
    const category = u.searchParams.get('category') || 'all';
    const status = u.searchParams.get('status') || 'all';
    const heat = u.searchParams.get('heat') || 'all';
    const gateable = u.searchParams.get('gateable'); // '1' | '0' | null
    const sort = u.searchParams.get('sort') || 'slug';

    let rows = allExams.map(rowOf);
    if (scope !== 'all') rows = rows.filter((r) => r.scope === scope);
    if (category !== 'all') rows = rows.filter((r) => r.categoryLabel === category);
    if (status !== 'all') rows = rows.filter((r) => r.status === status);
    if (heat !== 'all') rows = rows.filter((r) => r.demandTier === heat);
    if (gateable === '1') rows = rows.filter((r) => r.gateable);
    if (gateable === '0') rows = rows.filter((r) => !r.gateable);
    if (q) {
      rows = rows.filter(
        (r) => r.slug.includes(q) || (r.name || '').toLowerCase().includes(q)
      );
    }
    const dir = sort.startsWith('-') ? -1 : 1;
    const key = sort.replace('-', '');
    rows.sort((a, b) => {
      const va = a[key] ?? '';
      const vb = b[key] ?? '';
      return va < vb ? -dir : va > vb ? dir : 0;
    });    return sendJSON(res, 200, { count: rows.length, rows });
  }

  if (p.startsWith('/api/exam/') && req.method === 'GET') {
    const slug = decodeURIComponent(p.slice('/api/exam/'.length));
    const detail = detailOf(slug);
    if (!detail) return sendJSON(res, 404, { error: 'not found' });
    return sendJSON(res, 200, detail);
  }

  // ── Full rendered webpage preview (complete page, not raw fields) ──
  if (p.startsWith('/preview/') && req.method === 'GET') {
    const slug = decodeURIComponent(p.slice('/preview/'.length));
    const detail = detailOf(slug);
    if (!detail) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<p style="padding:40px;font-family:sans-serif">页面不存在</p>');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(buildPreviewHTML(detail));
    return;
  }

  if (p === '/api/release' && req.method === 'POST') {
    const body = await readBody(req);
    const date = body.date || todayISO();
    const slugs = body.slugs || [];
    let n = 0;
    for (const s of slugs) {
      if (bySlug.has(s) && bySlug.get(s).status !== 'complete') {
        releases[s] = date;
        n++;
      }
    }
    saveReleases();
    return sendJSON(res, 200, { updated: n, date });
  }

  if (p === '/api/unrelease' && req.method === 'POST') {
    const body = await readBody(req);
    const slugs = body.slugs || [];
    let n = 0;
    for (const s of slugs) {
      if (releases[s]) {
        delete releases[s];
        n++;
      }
    }
    saveReleases();
    return sendJSON(res, 200, { removed: n });
  }

  if (p === '/api/autoplan' && req.method === 'POST') {
    const body = await readBody(req);
    const batchSize = Math.max(1, Number(body.batchSize) || 30);
    const startDate = body.startDate || todayISO();
    const excludeNoLicense = body.excludeNoLicense !== false; // default true
    const start = new Date(startDate + 'T00:00:00Z');

    // Priority: national researched → national stub → state offered →
    // state unknown → (state not-offered last / excluded)
    const pri = (e) => {
      if (e.scope === 'national' && e.researched) return 0;
      if (e.scope === 'national') return 1;
      if (e.offered === true) return 2;
      if (e.offered === null) return 3;
      return 4; // offered === false (no license)
    };
    const dem = new Map(allExams.map((e) => [e.slug, demandScore(e)]));
    const candidates = allExams
      .filter((e) => e.status !== 'complete' && e.gateable !== false)
      .filter((e) => !(excludeNoLicense && e.offered === false))
      .sort((a, b) => pri(a) - pri(b) || (dem.get(b.slug) || 0) - (dem.get(a.slug) || 0) || a.slug.localeCompare(b.slug));

    let i = 0;
    for (const e of candidates) {
      const dayOffset = Math.floor(i / batchSize);
      const d = new Date(start.getTime() + dayOffset * 86400000);
      releases[e.slug] = d.toISOString().slice(0, 10);
      i++;
    }
    saveReleases();
    const days = Math.ceil(candidates.length / batchSize);
    return sendJSON(res, 200, {
      scheduled: candidates.length,
      batchSize,
      startDate,
      daysToComplete: days,
      endDate: new Date(start.getTime() + (days - 1) * 86400000).toISOString().slice(0, 10)
    });
  }

  if (p === '/api/deploy' && req.method === 'POST') {
    const body = await readBody(req);
    const dryRun = body.dryRun === true;
    const msg = body.message || `Release batch ${todayISO()}`;
    const rel = git; // alias
    const add = await rel(['add', MANIFEST]);
    if (!add.ok) return sendJSON(res, 200, { ok: false, stage: 'add', ...add });
    if (dryRun) {
      const status = await rel(['status', '--short']);
      const diff = await rel(['diff', '--cached', '--stat']);
      return sendJSON(res, 200, { ok: true, dryRun: true, status, diff });
    }
    const commit = await rel(['commit', '-m', msg]);
    if (!commit.ok) return sendJSON(res, 200, { ok: false, stage: 'commit', ...commit });
    const push = await rel(['push', 'origin', 'main']);
    return sendJSON(res, 200, { ok: push.ok, commit, push });
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found' }));
});

server.listen(PORT, () => {
  console.log(`TestPrepPilot content manager → http://localhost:${PORT}`);
  console.log(`Tracking ${allExams.length} pages · ${Object.keys(releases).length} currently released`);
});
