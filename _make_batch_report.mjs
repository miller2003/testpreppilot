// Generates site-batch-quality-report.html from _batch_quality.json
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '_batch_quality.json'), 'utf8'));
const DATA_JSON = JSON.stringify(data);

const g = data.goldStandard;
const o = data.overall;

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TestPrepPilot · 批次内容质量与优化策略</title>
<style>
  :root{
    --bg:#f7f8fa; --card:#fff; --ink:#1f2430; --muted:#6b7280; --line:#e6e8ec;
    --brand:#2563eb; --brand-soft:#eef4ff;
    --red:#dc2626; --redbg:#fdecec; --amber:#b45309; --amberbg:#fef6e7; --green:#15803d; --greenbg:#eafaf0;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,"PingFang SC","Microsoft YaHei",sans-serif}
  .wrap{max-width:1180px;margin:0 auto;padding:32px 22px 80px}
  h1{font-size:26px;margin:0 0 4px}
  h2{font-size:20px;margin:38px 0 10px;padding-bottom:8px;border-bottom:2px solid var(--line)}
  h3{font-size:16px;margin:20px 0 8px}
  p{margin:8px 0;color:#374151}
  .sub{color:var(--muted);font-size:13px}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(165px,1fr));gap:14px;margin:18px 0}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
  .card .n{font-size:26px;font-weight:700;line-height:1.1}
  .card .l{font-size:12.5px;color:var(--muted);margin-top:4px}
  .card.warn{border-color:#f3c9c9;background:var(--redbg)}
  .card.warn .n{color:var(--red)}
  .card.ok{border-color:#bfe6cb;background:var(--greenbg)}
  .card.ok .n{color:var(--green)}
  .card.amber{border-color:#f0d9aa;background:var(--amberbg)}
  .card.amber .n{color:var(--amber)}
  table{border-collapse:collapse;width:100%;background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden;font-size:13.5px}
  th,td{padding:9px 11px;text-align:left;border-bottom:1px solid var(--line);white-space:nowrap}
  th{background:#f1f4f8;font-weight:600;cursor:pointer;position:sticky;top:0;user-select:none}
  th:hover{background:#e6ebf2}
  td.num,th.num{text-align:right;font-variant-numeric:tabular-nums}
  tr:hover td{background:#fafbfd}
  .tag{display:inline-block;padding:1px 7px;border-radius:20px;font-size:11.5px;font-weight:600}
  .t-red{background:var(--redbg);color:var(--red)}
  .t-amber{background:var(--amberbg);color:var(--amber)}
  .t-green{background:var(--greenbg);color:var(--green)}
  .t-grey{background:#eef0f3;color:#555}
  .scroll{max-height:620px;overflow:auto;border:1px solid var(--line);border-radius:10px;margin-top:10px}
  .scroll table{border:none;border-radius:0}
  .controls{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:10px 0}
  select,input{font:14px inherit;padding:6px 9px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--ink)}
  .note{background:var(--brand-soft);border:1px solid #cfe0ff;border-radius:10px;padding:14px 16px;margin:14px 0}
  .note b{color:var(--brand)}
  .gap{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:14px 0}
  .gap .box{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px}
  .gap .box h3{margin-top:0}
  .strat{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:16px;margin-top:14px}
  .pill{padding:2px 9px;border-radius:8px;font-size:12px;font-weight:700}
  .pill.hi{background:var(--redbg);color:var(--red)}
  .pill.mid{background:var(--amberbg);color:var(--amber)}
  .pill.lo{background:var(--greenbg);color:var(--green)}
  .strat .s{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;border-top:4px solid var(--brand)}
  .strat .s.p1{border-top-color:var(--red)}
  .strat .s.p2{border-top-color:var(--amber)}
  .strat .s.p3{border-top-color:var(--brand)}
  .strat .s h3{margin:0 0 6px}
  .strat ul{margin:8px 0 0;padding-left:18px}
  .strat li{margin:5px 0}
  code{background:#f1f4f8;padding:1px 5px;border-radius:5px;font-size:12.5px}
  .foot{color:var(--muted);font-size:12px;margin-top:30px}
  .ex{color:var(--muted);font-size:11.5px}
</style>
</head>
<body>
<div class="wrap">
  <h1>TestPrepPilot · 批次内容质量审计与优化策略</h1>
  <div class="sub">生成时间 ${new Date(data.generatedAt).toLocaleString('zh-CN')} · 数据源：national-research/（188 批 AI 研究记录）+ credentials.ts（8 篇手写标杆）</div>

  <div class="cards">
    <div class="card"><div class="n">${o.records}</div><div class="l">AI 生成考试页（已发布）</div></div>
    <div class="card ok"><div class="n">${g.count}</div><div class="l">手写标杆页（质量基准）</div></div>
    <div class="card warn"><div class="n">0%</div><div class="l">含分步实操 registrationSteps</div></div>
    <div class="card warn"><div class="n">0%</div><div class="l">含 per-exam 横向对比表</div></div>
    <div class="card amber"><div class="n">technology</div><div class="l">最弱大类（${data.categoryRollup.find(c=>c.cat==='technology').records} 页）</div></div>
    <div class="card warn"><div class="n">${data.categoryRollup.find(c=>c.cat==='healthcare-clinical').templatedPct}%</div><div class="l">healthcare-clinical 模板化率</div></div>
  </div>

  <div class="note">
    <b>一句话结论：</b>内容都填进去了（无空壳），但全站 3183 篇 AI 页普遍比 8 篇手写标杆 <b>浅一个层级</b>——缺两套标杆页赖以支撑深度、也被 Google 视为「真有用」的结构：
    ① <b>分步实操指引</b>（标杆每页约 212 词的具体流程/费用/截止日），② <b>横向对比表</b>（标杆 100% 有）。
    此外 <b>technology</b> 大类整体最薄，<b>healthcare-clinical</b> 大类模板化开头最严重（被惩罚高风险）。下面给出分优先级优化策略。
  </div>

  <h2>① 标杆 vs 你的 AI 语料（同口径指标）</h2>
  <p class="sub">标杆页不用 FAQ 数组，而是把深度放在 registrationSteps + 对比表 + 费用/时间线 + 洞察 summaryPoints 上。</p>
  <table>
    <thead><tr>
      <th>指标</th><th class="num">手写标杆（8 篇）</th><th class="num">AI 语料（${o.records} 篇）</th><th>差距解读</th>
    </tr></thead>
    <tbody>
      <tr><td>平均总分（词）</td><td class="num">${g.avgTotalBody}</td><td class="num">${o.avgTotalBody}</td><td>AI 整体浅约 ${Math.round((1-o.avgTotalBody/g.avgTotalBody)*100)}%</td></tr>
      <tr><td>Quick-answer summary 词数</td><td class="num">${g.avgSumWords}</td><td class="num">${o.avgSumWords}</td><td>AI 摘要偏短（多为 30–40 词）</td></tr>
      <tr><td>Description 词数</td><td class="num">${g.avgDescWords}</td><td class="num">${o.avgDescWords}</td><td>AI 描述更长（代偿用）</td></tr>
      <tr><td>FAQ 数 / FAQ 词数</td><td class="num">${g.avgFaqCount} / ${g.avgFaqWords}</td><td class="num">${o.avgFaqCount} / ${o.avgFaqWords}</td><td>AI 靠 FAQ 补深度</td></tr>
      <tr><td>分步实操 registrationSteps 词数</td><td class="num">${g.avgStepWords}</td><td class="num">0</td><td><span class="tag t-red">全站缺口</span> 标杆的核心深度来源</td></tr>
      <tr><td>含横向对比表</td><td class="num">${g.pctComparison}%</td><td class="num">${o.pctComparison}%</td><td><span class="tag t-red">全站缺口</span> 低重复、高价值内容</td></tr>
      <tr><td>含费用明细 costBreakdown</td><td class="num">${g.pctCost}%</td><td class="num">${o.pctCost}%</td><td>此项 AI 已达标</td></tr>
      <tr><td>含时间线 timeline</td><td class="num">${g.pctTimeline}%</td><td class="num">${o.pctTimeline}%</td><td>此项 AI 已达标</td></tr>
    </tbody>
  </table>

  <h2>② 两个全站性结构缺口（每页都该补）</h2>
  <div class="gap">
    <div class="box">
      <h3>缺口 1 · 分步实操指引（registrationSteps）</h3>
      <p>标杆每篇都有 5–7 步、带 subSteps 和<b>具体费用/日期/表格/时长</b>的申办流程，例如：</p>
      <p class="ex">「Submit your license application... As of Dec 15, 2025, the fee is $205–$206. TREC reviews... issues eligibility to test.」</p>
      <p>AI 记录只有 <code>roadmap</code> 短标题（如「Apply to ACAT」），<b>没有任何一页</b>有这种可被用户直接照做的细节。这是把「信息页」升级为「帮用户办事的页」的最大杠杆，也最契合 Google 对 helpful / first-hand 内容的偏好。</p>
    </div>
    <div class="box">
      <h3>缺口 2 · 横向对比表（comparison）</h3>
      <p>标杆大量用对比表制造独有价值，例如：</p>
      <p class="ex">Texas vs California vs Florida 报考要求对比；Enrolled Agent vs CPA；OSHA 10 vs 30；EPA 608 各类型。</p>
      <p>AI 记录<b>0% 含 per-exam 对比</b>（对比只存在于 program 层，不会渲染到单页）。对比表天然低重复、高信息密度，是抵御「模板化/低价值」判定最便宜的内容增量。</p>
    </div>
  </div>

  <h2>③ 按大类汇总（25 类）</h2>
  <p class="sub">颜色：<span class="tag t-red">红</span> 总分 &lt;260（偏薄）/ 模板化 ≥20%；<span class="tag t-amber">黄</span> 总分 260–300 / 模板化 5–19%；<span class="tag t-green">绿</span> 其余。</p>
  <div class="scroll">
  <table id="catTable">
    <thead><tr>
      <th data-k="label">大类</th><th class="num" data-k="records">页数</th>
      <th class="num" data-k="avgTotalBody">总分</th><th class="num" data-k="avgSumWords">摘要词</th>
      <th class="num" data-k="avgDescWords">描述词</th><th class="num" data-k="avgFaqWords">FAQ词</th>
      <th class="num" data-k="lowDepthPct">偏薄%</th><th class="num" data-k="templatedPct">模板化%</th>
      <th class="num" data-k="batches">涉及批数</th>
    </tr></thead>
    <tbody></tbody>
  </table>
  </div>

  <h2>④ 逐批明细（188 批）</h2>
  <div class="controls">
    <label>按大类筛选：
      <select id="catFilter"><option value="">全部</option></select>
    </label>
    <label>搜索批次/示例 slug：<input id="searchBox" placeholder="如 099 或 cisco"></label>
    <span class="sub" id="batchCount"></span>
  </div>
  <div class="scroll">
  <table id="batchTable">
    <thead><tr>
      <th data-k="batch">批</th><th class="num" data-k="records">页数</th>
      <th class="num" data-k="avgTotalBody">总分</th><th class="num" data-k="avgSumWords">摘要</th>
      <th class="num" data-k="avgDescWords">描述</th><th class="num" data-k="avgFaqWords">FAQ词</th>
      <th class="num" data-k="lowDepthPct">偏薄%</th><th class="num" data-k="templatedPct">模板%</th>
      <th data-k="topCats">主导大类</th><th data-k="examples">示例 slug</th>
    </tr></thead>
    <tbody></tbody>
  </table>
  </div>

  <h2>⑤ 模板化证据（最常被复用的描述开头）</h2>
  <p class="sub">这些开头在多处复用 ≥3 次，集中在 healthcare-clinical / public-safety 批次，是典型的「近乎重复」模板信号，Google 低价值内容打击的重点。</p>
  <div class="scroll" style="max-height:300px">
  <table id="openTable">
    <thead><tr><th class="num" data-k="count">复用次数</th><th data-k="opening">描述开头（前 6 词）</th></tr></thead>
    <tbody></tbody>
  </table>
  </div>

  <h2>⑥ 优化策略（按 ROI 排序）</h2>
  <div class="strat">
    <div class="s p1">
      <h3>优先级 1 · 全站补两套深度结构 <span class="pill hi">影响：高 · 工作量：高</span></h3>
      <p>对所有 3183 篇 national 页补 <b>registrationSteps</b>（5–7 步 + subSteps + 具体费用/表格/截止日）和 <b>per-exam comparison</b> 表。这是把页面拉到标杆深度（totalBody 308→~390）的唯一途径，也是「真帮用户」+ E-E-A-T 的核心。</p>
      <ul>
        <li>可分批按大类跑 LLM 增强脚本（复用现有 <code>_gen_research.mjs</code> 管线）。</li>
        <li>优先做 <b>technology</b> 与高搜索量页（标杆 8 篇同主题优先）。</li>
        <li>费用/日期务必带来源与「截至 2026-X」标注，避免过时。</li>
      </ul>
    </div>
    <div class="s p2">
      <h3>优先级 2 · 重写 technology 大类 <span class="pill mid">影响：中高 · 工作量：中</span></h3>
      <p>technology（500 页）平均总分最低（264）、摘要仅 32 词、描述 51 词——明显比其他类薄。集中在批次 32/43/44/45/46/47/48/173/187/188。</p>
      <ul>
        <li>把 summary 扩到 50–70 词、description 扩到 90+ 词。</li>
        <li>扩充 FAQ 答案深度（当前 FAQ 词数偏低）。</li>
        <li>同一批的 Cisco/CompTIA 系列最容易批量模板化，逐条核查。</li>
      </ul>
    </div>
    <div class="s p3">
      <h3>优先级 3 · 去模板化 healthcare-clinical / public-safety <span class="pill lo">影响：中 · 工作量：中</span></h3>
      <p>healthcare-clinical（136 页）55% 模板化、public-safety（95 页）19%——开篇全是「board certification examination for …」。这是被判「低价值/近乎重复」的最高风险区。</p>
      <ul>
        <li>把每篇描述的统一开头改写为该考试专属的一句话（谁发、考什么、给谁）。</li>
        <li>涉及批次 98–103（临床）、127–128（公共安全）、109（保险）。</li>
        <li>配合优先级 1 的对比表，进一步降低页面间相似度。</li>
      </ul>
    </div>
  </div>

  <div class="note" style="margin-top:26px">
    <b>执行建议：</b>先做优先级 1 的<b>模板/脚本化增强</b>（数据层一次性回填 registrationSteps + comparison，可复现），再人工抽检 technology 与 healthcare 两类。全站对比表可由 program 层 dossier 自动派生到同 body 的考试页，成本最低、收益最稳。
  </div>

  <div class="foot">指标定义：总分 = summary+description+FAQ+roadmap+分步+topics+summaryPoints 词数合计；偏薄% = 满足（摘要&lt;28 或 描述&lt;45 或 FAQ数&lt;4 或 FAQ词&lt;180）的页占比；模板化% = 描述前 6 词命中全局复用≥3 次的页占比。原始数据见 <code>_batch_quality.json</code>。</div>
</div>

<script>
const DATA = ${DATA_JSON};
function tag(pct, kind){
  if(kind==='body'){ if(pct<260) return 't-red'; if(pct<300) return 't-amber'; return 't-green'; }
  if(kind==='temp'){ if(pct>=20) return 't-red'; if(pct>=5) return 't-amber'; return 't-green'; }
  return 't-grey';
}
// category table
const catBody = document.querySelector('#catTable tbody');
DATA.categoryRollup.forEach(c=>{
  const tr=document.createElement('tr');
  const bt=tag(c.avgTotalBody,'body'), tt=tag(c.templatedPct,'temp');
  tr.innerHTML='<td>'+c.label+' <span class="ex">('+c.cat+')</span></td><td class="num">'+c.records+'</td>'
   +'<td class="num"><span class="tag '+bt+'">'+c.avgTotalBody+'</span></td><td class="num">'+c.avgSumWords+'</td>'
   +'<td class="num">'+c.avgDescWords+'</td><td class="num">'+c.avgFaqWords+'</td>'
   +'<td class="num">'+c.lowDepthPct+'</td><td class="num"><span class="tag '+tt+'">'+c.templatedPct+'</span></td>'
   +'<td class="num">'+c.batches+'</td>';
  catBody.appendChild(tr);
});
// batch table
const batchBody=document.querySelector('#batchTable tbody');
const batches=DATA.batches.filter(b=>b.records>0);
function renderBatches(list){
  batchBody.innerHTML='';
  list.forEach(b=>{
    const bt=tag(b.avgTotalBody,'body'), tt=tag(b.templatedPct,'temp');
    const cats=b.topCats.map(c=>c.label||c.cat).join(' / ');
    const ex=(b.examples||[]).join(', ');
    const tr=document.createElement('tr');
    tr.innerHTML='<td><b>'+b.batch+'</b></td><td class="num">'+b.records+'</td>'
     +'<td class="num"><span class="tag '+bt+'">'+b.avgTotalBody+'</span></td><td class="num">'+b.avgSumWords+'</td>'
     +'<td class="num">'+b.avgDescWords+'</td><td class="num">'+b.avgFaqWords+'</td>'
     +'<td class="num">'+b.lowDepthPct+'</td><td class="num"><span class="tag '+tt+'">'+b.templatedPct+'</span></td>'
     +'<td>'+cats+'</td><td class="ex">'+ex+'</td>';
    batchBody.appendChild(tr);
  });
  document.getElementById('batchCount').textContent='显示 '+list.length+' / '+batches.length+' 批';
}
// category filter options
const catSet=new Set();
batches.forEach(b=>b.topCats.forEach(c=>catSet.add(c.cat)));
const sel=document.getElementById('catFilter');
[...catSet].sort().forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sel.appendChild(o);});
sel.addEventListener('change',filterB);
document.getElementById('searchBox').addEventListener('input',filterB);
function filterB(){
  const c=sel.value, q=document.getElementById('searchBox').value.toLowerCase();
  renderBatches(batches.filter(b=>{
    if(c && !b.topCats.some(t=>t.cat===c)) return false;
    if(q && !(('batch'+b.batch).includes(q) || (b.examples||[]).some(e=>e.includes(q)))) return false;
    return true;
  }));
}
renderBatches(batches);
// openings
const openBody=document.querySelector('#openTable tbody');
DATA.topOpenings.forEach(o=>{
  const tr=document.createElement('tr');
  tr.innerHTML='<td class="num"><span class="tag '+(o.count>=10?'t-red':o.count>=5?'t-amber':'t-grey')+'">'+o.count+'</span></td><td>'+o.opening+' …</td>';
  openBody.appendChild(tr);
});
// sortable headers
document.querySelectorAll('table thead th[data-k]').forEach(th=>{
  th.addEventListener('click',()=>{
    const k=th.dataset.k, tbl=th.closest('table'), tb=tbl.querySelector('tbody');
    const rows=[...tb.children];
    const num=tb.children[0]?.children[th.cellIndex]?.classList.contains('num');
    rows.sort((a,b)=>{
      const x=a.children[th.cellIndex].textContent, y=b.children[th.cellIndex].textContent;
      return num? (parseFloat(x)-parseFloat(y)) : x.localeCompare(y);
    });
    rows.forEach(r=>tb.appendChild(r));
  });
});
</script>
</body>
</html>`;

const outPath = path.join(__dirname, 'site-batch-quality-report.html');
fs.writeFileSync(outPath, html);
console.log('wrote', outPath, '(' + html.length + ' bytes)');
