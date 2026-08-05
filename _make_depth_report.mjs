import fs from 'node:fs';

const rows = JSON.parse(fs.readFileSync('_depth_report_data.json', 'utf8'));
const LABELS = ['薪资前景', '通过率', '学习计划', '备考策略', '资源对比', '避坑指南', '题型详解', '考试日'];

const totalWords = rows.reduce((a, b) => a + b.pageWords, 0);
const totalRows = rows.reduce((a, b) => a + b.rows, 0);
const totalSamples = rows.reduce((a, b) => a + b.samples, 0);
const sectionInstances = rows.reduce((a, b) => a + b.n, 0);
const full = rows.filter((r) => r.n === 8).length;
const partial = rows.filter((r) => r.n === 4).length;
const minW = Math.min(...rows.map((r) => r.pageWords));
const maxW = Math.max(...rows.map((r) => r.pageWords));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const groupName = { national: '国考页（/exams）', flagship: '旗舰模板页（/paths）' };

function tableFor(group) {
  const list = rows.filter((r) => r.group === group);
  return `
  <h3>${groupName[group]} · ${list.length} 篇</h3>
  <div class="scroll">
  <table>
    <thead>
      <tr>
        <th class="l">页面</th>
        ${LABELS.map((l) => `<th class="rot"><span>${l}</span></th>`).join('')}
        <th>模块</th><th>正文词数</th><th>数据行</th><th>示例题</th>
      </tr>
    </thead>
    <tbody>
      ${list
        .map(
          (r) => `<tr>
        <td class="l"><code>${esc(r.s)}</code>${r.retired ? '<span class="tag">已退役</span>' : ''}</td>
        ${r.has.map((h) => `<td class="c ${h.on ? 'yes' : 'no'}">${h.on ? '●' : '—'}</td>`).join('')}
        <td class="c"><b>${r.n}</b>/8</td>
        <td class="c">${r.pageWords.toLocaleString()}</td>
        <td class="c">${r.rows}</td>
        <td class="c">${r.samples}</td>
      </tr>`
        )
        .join('')}
    </tbody>
  </table>
  </div>`;
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TestPrepPilot 深度优化交付报告 · 28 篇</title>
<style>
  :root{
    --ink:#1b1a18; --muted:#6b6660; --line:#e6e1d9; --paper:#fdfcfa;
    --accent:#b4632f; --ok:#2f7a4f; --warn:#a8710f;
  }
  *{box-sizing:border-box}
  body{margin:0;background:#f6f3ee;color:var(--ink);
    font:15px/1.75 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif}
  .wrap{max-width:1080px;margin:0 auto;padding:48px 28px 80px}
  header{border-bottom:2px solid var(--ink);padding-bottom:22px;margin-bottom:34px}
  .kicker{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:700;margin:0 0 8px}
  h1{margin:0 0 10px;font-size:30px;line-height:1.28;letter-spacing:-.01em}
  .sub{margin:0;color:var(--muted);font-size:14px}
  h2{margin:44px 0 14px;font-size:20px;padding-bottom:8px;border-bottom:1px solid var(--line)}
  h3{margin:28px 0 12px;font-size:15px;color:var(--muted);font-weight:700}
  p{margin:0 0 14px}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:22px 0 8px}
  .card{background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:15px 16px}
  .card .n{font-size:26px;font-weight:800;letter-spacing:-.02em;line-height:1.1}
  .card .t{font-size:12px;color:var(--muted);margin-top:5px}
  .scroll{overflow-x:auto;border:1px solid var(--line);border-radius:9px;background:var(--paper)}
  table{border-collapse:collapse;width:100%;font-size:13px}
  th,td{padding:8px 9px;border-bottom:1px solid var(--line);text-align:center;white-space:nowrap}
  thead th{background:#f1ece4;font-weight:700;font-size:12px;position:sticky;top:0}
  th.l,td.l{text-align:left}
  td.l code{font-size:12px;background:#f1ece4;padding:2px 6px;border-radius:4px}
  .tag{display:inline-block;margin-left:6px;font-size:10px;background:#f3e3cf;color:#8a5a12;padding:1px 6px;border-radius:99px}
  td.yes{color:var(--ok);font-weight:700}
  td.no{color:#c9c3ba}
  tbody tr:hover{background:#faf7f2}
  th.rot span{display:inline-block;font-size:11px;writing-mode:vertical-rl;text-orientation:mixed;letter-spacing:.05em}
  .note{background:var(--paper);border-left:3px solid var(--accent);border-radius:0 8px 8px 0;padding:14px 18px;margin:18px 0}
  .note b{color:var(--accent)}
  ul{margin:0 0 14px;padding-left:20px}
  li{margin:0 0 7px}
  .fix{background:var(--paper);border:1px solid var(--line);border-radius:9px;padding:4px 18px;margin:14px 0}
  .fix dl{margin:0}
  .fix dt{font-weight:700;margin:14px 0 3px;font-size:14px}
  .fix dd{margin:0 0 14px;color:var(--muted);font-size:13.5px;line-height:1.7}
  footer{margin-top:52px;padding-top:18px;border-top:1px solid var(--line);color:var(--muted);font-size:12.5px}
  code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
</style>
</head>
<body>
<div class="wrap">

<header>
  <p class="kicker">交付报告 · 竞品差距分析落地</p>
  <h1>28 篇考试页深度优化</h1>
  <p class="sub">20 篇高热度国考页 + 8 篇旗舰模板页 · 构建于 ${new Date().toLocaleDateString('zh-CN')} · 本地构建已验证，<b>尚未部署</b></p>
</header>

<h2>一、总体结果</h2>
<div class="cards">
  <div class="card"><div class="n">28</div><div class="t">页面完成优化</div></div>
  <div class="card"><div class="n">${sectionInstances}</div><div class="t">P0 模块实例落地</div></div>
  <div class="card"><div class="n">${(totalWords / 1000).toFixed(0)}k</div><div class="t">页面正文总词数</div></div>
  <div class="card"><div class="n">${Math.round(totalWords / 28).toLocaleString()}</div><div class="t">单页平均词数</div></div>
  <div class="card"><div class="n">${totalRows}</div><div class="t">带来源的数据行</div></div>
  <div class="card"><div class="n">${totalSamples}</div><div class="t">题型示例题</div></div>
</div>
<p>调查报告点名缺失的 <b>8 个 P0 模块</b>已全部补齐：${full} 篇拿到完整 8/8；${partial} 篇为 4/8，这两篇是
<code>microsoft-ai-900</code>（2026-06-30 退役）与 <code>microsoft-az-204</code>（2026-07-31 退役），
给一门即将作废的考试写"12 周学习计划"和"考试日携带清单"是误导读者，因此按设计豁免这四个模块，改为引导迁移到继任考试。</p>
<p>单页正文从 ${minW.toLocaleString()} 词到 ${maxW.toLocaleString()} 词，全部远超报告设定的 700–900 词底线。</p>

<h2>二、逐页落地情况</h2>
${tableFor('national')}
${tableFor('flagship')}

<h2>三、同族页面重复度</h2>
<p>报告把"同族页面雷同"列为重点风险（红线：Jaccard 相似度 &lt; 0.70）。实测最差值：</p>
<div class="scroll">
<table>
  <thead><tr><th class="l">族群</th><th>最差相似度</th><th class="l">对比页面</th></tr></thead>
  <tbody>
    <tr><td class="l">OSHA</td><td class="c"><b>0.135</b></td><td class="l">osha-10-construction ↔ osha-30-construction</td></tr>
    <tr><td class="l">Microsoft</td><td class="c">0.126</td><td class="l">microsoft-az-140 ↔ microsoft-az-700</td></tr>
    <tr><td class="l">房产执照</td><td class="c">0.077</td><td class="l">florida ↔ texas</td></tr>
    <tr><td class="l">Cisco</td><td class="c">0.050</td><td class="l">ccna ↔ ccnp cybersecurity</td></tr>
    <tr><td class="l">记账</td><td class="c">0.023</td><td class="l">aipb-certified-bookkeeper ↔ nacpb-cpb</td></tr>
  </tbody>
</table>
</div>
<p>最高 0.135，距红线有 5 倍余量——每页内容是按各自考试单独调研写的，不是模板套壳。</p>

<h2>四、作者署名：一处重要修正</h2>
<div class="note">
<p><b>发现的问题：</b>调研阶段为满足 E-E-A-T"具名作者"要求，自动生成了 28 个<b>虚构专家人设</b>并配上了
<code>schema.org/Person</code> 结构化标记。其中 24 页把编造的人当真人呈现，另外 4 页更糟——姓名字段里直接写着
"(fictional editorial reviewer)"，这行字会原样印在线上页面。</p>
<p><b>处理方式：</b>按你的决定，全部改为<b>编辑部署名</b>。结构化标记从 <code>Person</code> 换成
<code>Organization</code>（这才是事实），文案改为"Researched and maintained by TestPrepPilot Editorial Desk"，
链接指向已有的 <code>/editorial-policy</code> 页。</p>
<p>署名区不再吹嘘个人资历，而是讲清<b>方法论</b>：数据取自哪一份一手文件、核对到哪个版本日期、官方不公布的数字就明说不公布。
按学科分成 6 个编辑组（医疗健康 / 健身营养 / 财会税务 / 云与网络安全 / 房产执照 / 安全与技工），各写各的核查口径。</p>
<p>全站已确认：<code>schema.org/Person</code> 零残留，虚构人名零残留。</p>
</div>

<h2>五、顺带修掉的事实性错误</h2>
<p>调研 Agent 在核对一手资料时，发现了原有页面上几处<b>会误导读者</b>的硬伤，一并修正：</p>
<div class="fix">
<dl>
  <dt>AFAA-CPT 的 NCCA 认证声明（<code>batch65.mjs</code>，9 处）</dt>
  <dd>原文肯定地写着"AFAA-CPT 是 NCCA 认证的"。但 NASM（AFAA 母公司）官方认证页列出的 NCCA 项目只有 NASM-CPT 与 AFAA-CGFI，
  <b>不含</b> AFAA 私教考试；而 AFAA 自家营销material 又称有认证。两个来源直接打架。现已改为如实呈现分歧，
  并在对比表下加了脚注：如果雇主硬性要求 NCCA 认证，建议选 NASM-CPT。<br>
  <span style="color:#8a5a12">附带改动：给国考页的对比表渲染器加了可选 <code>footnote</code> 字段支持（合并管线原本会把它过滤掉）。</span></dd>

  <dt>CompTIA Linux+ 考试代码与价格（<code>batch43.mjs</code>）</dt>
  <dd>页面还写着 XK0-005 / $369。实际 XK0-005 已于 2026-01-13 退役，现行为 XK0-006（V8），标价约 $390。
  已全量替换考试代码并更新价格口径。让人照着废弃大纲备考是这类页面最贵的一种错误。</dd>

  <dt>已核对无误、未改动的项</dt>
  <dd>Cisco CCNA Cybersecurity 的 200-201 CBROPS 代码（CyberOps Associate 更名而来）在原数据中<b>本就正确</b>，未做改动。</dd>
</dl>
</div>

<h2>六、技术实现说明</h2>
<p>站内有两套互相独立的渲染管线（<code>/exams/&lt;slug&gt;</code> 与 <code>/paths/&lt;slug&gt;</code>），
数据结构完全不同。为避免改两套 schema、两套合并逻辑，做法是加一层<b>按 slug 索引的共享深度层</b>：</p>
<ul>
  <li><code>src/data/examCatalog/examDepth.mjs</code> — 统一 schema 与 <code>depthFor(slug)</code> 查询入口</li>
  <li><code>src/data/examCatalog/depth/&lt;slug&gt;.mjs</code> — 28 个独立文件，一考试一文件（便于并行调研，互不冲突）</li>
  <li><code>src/components/DepthSections.astro</code> — 8 个模块各自独立判空渲染</li>
  <li><code>src/components/AuthorByline.astro</code> — 编辑部署名（Organization 标记）</li>
</ul>
<p>这一层是<b>纯增量</b>的：没有 depth 记录的 slug（站内其余 ~70 个页面）渲染结果与改动前完全一致，零回归风险。</p>

<h2>七、当前状态与后续</h2>
<ul>
  <li><b>已完成：</b>本地构建通过，98 个 HTML 页面，搜索索引已重建，28 页全部验收无异常。</li>
  <li><b>未部署：</b>推送 main 会触发 Cloudflare 自动部署，<b>已按约定停在这一步等你确认</b>。</li>
  <li><b>建议后续：</b>如果日后有真实作者/审稿人愿意署名（你本人或合作者），把编辑部署名换成具名专家可以进一步强化 E-E-A-T——现在的结构支持直接替换。</li>
  <li><b>另发现（本次未动）：</b>调研中注意到 <code>national-research/</code> 里约 599 条记录的 tagline 是机器拼接的类目名
  （形如"X — Beauty, Food, Security &amp; Recreation credential from Y"），读起来很生硬。已确认这些字段<b>在当前构建产物中没有被渲染</b>
  （属低优先级数据对象，被人工文案覆盖），不影响线上，但值得作为独立任务清理。</li>
</ul>

<footer>
  TestPrepPilot · 深度优化交付报告 · 数据取自本次本地构建产物 <code>dist/</code>，非估算值
</footer>

</div>
</body>
</html>`;

fs.writeFileSync('depth-optimization-report.html', html);
console.log('written: depth-optimization-report.html', (html.length / 1024).toFixed(1) + ' KB');
