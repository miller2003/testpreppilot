# TestPrepPilot — SEO & GEO 全面审计

**审计日期**：2026-10-18
**审计范围**：`src/`（541 个页面模板）、`dist/`（已构建产物，2026-10-15 21:40）、线上 `https://testpreppilot.com`（Cloudflare Pages，实测状态码与响应头）
**方法**：静态产物解析（title/description/canonical/robots/H1/JSON-LD/内链图/字数/图片）、内链图 BFS 深度计算、线上 HTTP 头与跳转实测、llms.txt 与 `.well-known` 端点校验

---

## 一、总评

| 维度 | 得分 | 评级 | 一句话 |
|---|---:|---|---|
| 技术 SEO 基础 | 82 | A- | 该有的都有，但 canonical 与实际 200 URL 不一致 |
| 内链架构 | 92 | A | 0 孤儿页、全站 ≤3 跳、0 重复标题 |
| 内容深度 | 88 | A- | 中位数 5,600 词/页，每页 1–5 条权威外链 |
| 结构化数据 | 75 | B | 覆盖极广，但 `reviewedBy` 数据模型错了 |
| E-E-A-T 信任 | 58 | D+ | **虚构用户评价 + 数字夸大**，这是当前最大风险 |
| GEO / AI 可发现性 | 88 | A- | 业内前列，只差 llms.txt 治理 |
| 性能 / CWV | 65 | C | 字体通过 CSS `@import` 串行加载 |
| **综合** | **78 / 100** | **B+** | 工程完成度高，被 3 个内容层问题拖住 |

**一句话结论**：这不是一个"SEO 没做好"的站，而是一个**执行质量明显高于平均水平、但有 3 个足以让 Google 降低整站信任评分的硬伤**的站。技术面 90% 的动作你已经做对，改完 P0 三项，分数能从 78 提到 85+。

---

## 二、站点事实（本次实测，非估计）

| 指标 | 数值 |
|---|---|
| HTML 页面总数 | 541 |
| sitemap 收录 URL | 534（无 1 条多余、无 1 条遗漏，除 5 个跳转兜底页 + 404） |
| 考试详情页 | 477（`/exams/*`）+ 8 篇旗舰指南（`/paths/*`） |
| 分类页 | 20 |
| 榜单页 | 15 + 1 hub |
| 长文指南 | 3 + 1 hub |
| 重复 `<title>` | **0** |
| 重复 meta description | **0** |
| 孤儿页（无任何内链指向） | **0** |
| 从首页不可达的页面 | **0** |
| 点击深度 ≥4 的页面 | **0**（深度分布：1 跳 501、2 跳 17、3 跳 15） |
| H1 数量 ≠ 1 的页面 | **0** |
| 缺 `alt` / 缺宽高的图片 | **0 / 0** |
| 考试页字数（中位数 / 最小） | **5,600 / 3,327** |
| 每页权威外链（中位数 / 最小 / 域名数） | **3 / 1 / 168 个域名** |
| JSON-LD 非法块 | **0** |
| 每页 JSON-LD 块数 / 体积 | 8.7 块 / 8.8 KB |
| 首页 HTML | 653 KB（gzip 84 KB），518 个 `<a>`，275 KB 内联 JS |

这个数据放在"AI 生成内容站"里属于 **top 5%**：没有薄页、没有标签页爆炸、没有重复标题、没有内链黑洞。

---

## 三、P0 — 必须本周修（直接影响收录与排名）

### P0-1　8 个最值钱的证书页是 404，且有 16 处内链指向它们

**实测**：

```
GET /exams/cpa-exam              → 404   ← 首页目录、分类页、榜单页都在链它
GET /exams/enrolled-agent        → 404
GET /exams/osha-10-construction  → 404
GET /exams/osha-30-construction  → 404
GET /exams/epa-608-certification → 404
GET /exams/texas-real-estate-license     → 404
GET /exams/california-real-estate-license → 404
GET /exams/florida-real-estate-license    → 404
```

这 8 个是 `completedGuides`（`src/data/examCatalog/index.mjs:57`），页面实际生成在 `/paths/<slug>`。但下列位置**硬编码了 `/exams/${slug}`**：

| 文件 | 行 | 出现次数 |
|---|---|---|
| `src/pages/categories/[id].astro` | 137, 222, 266, 293, 313 | 可见链接 + JSON-LD URL |
| `src/pages/index.astro` | 177 | 首页 `ItemList` 的 477 条 URL 里有 8 条是 404 |
| `src/lib/payRanking.ts`（经 `payRanking.mjs:47`） | — | 15 个 `/best/*` 榜单 |

**实测受影响页面**：`/best/accounting`、`/best/trades`、`/best/workplace-safety`、`/categories/accounting`（4 处）、`/categories/real-estate`（3 处）、`/categories/trades`、`/categories/workplace-safety`（3 处）。共 **16 个可见链接 + 8 条 JSON-LD URL**。

**为什么是 P0**：CPA、Enrolled Agent、OSHA 10/30、EPA 608、TX/CA/FL 房产执照，是这个站商业价值最高的一批词。这正好是"旗舰页拿不到内链权重、拿到的内链还是 404"的最坏组合。

**修法**（3 行）：

```js
// 用 catalog 行自带的 href，不要拼字符串
url: `${SITE}${e.href}`          // index.astro ItemList
<a href={r.href}>{r.name}</a>    // categories/[id].astro 全部 4 处
```

并在 `public/_redirects` 追加兜底（防外链/旧 SERP 流量流失）：

```
/exams/cpa-exam /paths/cpa-exam 301
/exams/enrolled-agent /paths/enrolled-agent 301
/exams/osha-10-construction /paths/osha-10-construction 301
/exams/osha-30-construction /paths/osha-30-construction 301
/exams/epa-608-certification /paths/epa-608-certification 301
/exams/texas-real-estate-license /paths/texas-real-estate-license 301
/exams/california-real-estate-license /paths/california-real-estate-license 301
/exams/florida-real-estate-license /paths/florida-real-estate-license 301
```

---

### P0-2　`/about` 上有 6 条虚构的用户评价（真人姓名 + 具体通过考试声明）

`src/pages/about.astro:82-113`：

> "TestPrepPilot completely removed the anxiety of figuring out the Texas Real Estate requirements…" — **Sarah Jenkins**
> "…Ended up passing my Enrolled Agent exam in 3 months." — **David Chen**
> "…I cannot recommend this platform enough." — **Michael T.**
> …（共 6 条，全部带姓名 + "Passed XXX Exam" 身份）

**问题不在 SEO 技巧，在于三件事同时发生**：

1. 这些人不存在。文件里没有任何来源、没有链接、没有日期。
2. 同一个代码库里，`src/data/editorial.ts:18-21` 和 `AuthorByline.astro:8-9` 反复写着"**We never invent a reviewer**（我们绝不虚构审核人）"。而 `/about` 这个信任枢纽页自己虚构了 6 个消费者背书。
3. `/reviewers` 页自己承认"the names are placeholders, not real reviewers"（`reviewers.astro:100-101`）。

**风险等级**：这不是"可能被抓"的问题。Google 的 *Spam policies → Misleading content* 与 *Site reputation abuse* 明确覆盖"伪造的推荐/评价"，FTC 16 CFR Part 255 对消费者证言有单独规定。一旦被人工审核，惩罚落在**全站**而不是这一页——而这站的全部价值就是"可信的独立研究"。同时 `about` 的 meta description 还写着 "**checked by licensed professionals**"，而事实上 477 个页面里 **0 位具名真人审核人**。

**修法**：
- 删掉 6 条评价，或替换成**能提供原始截图/邮件/授权**的真实反馈（保留姓名首字母 + 州 + 日期）。
- meta description 改掉 "checked by licensed professionals" → "researched against primary sources"，与事实一致。
- 标题/描述里的 "**600+ credential guides**" → 实际 485 页（477 + 8）。同一个站同时出现 477 和 600+ 两个数字，是可核验的不一致。

---

### P0-3　`reviewedBy` 把一整句话写进了 `Person.name`（447 个"人名"）

**实测**（477 个考试页全部命中，447 个互不相同的值）：

```json
"reviewedBy": {
  "@type": "Person",
  "name": "Verified against the American Association of Bioanalysts (AAB) phlebotomy certification program pages and BLS OOH Phlebotomists (SOC 31-9097), May 2024 data."
}
```

另一条：

```json
"name": "Blueprint weights, eligibility routes, fees and recertification rules were read from the certifying board's own documents, not from third-party course pages."
```

**根因**：`src/pages/exams/[slug].astro:450` 把 `depth.reviewedBy`（实际存放的是"审核说明"自由文本）直接塞进 `Person.name`。数据模型错位，不是内容错。

**影响**：Google 对 `Person` 实体的处理是"能合并就合并、不能合并就丢弃"。447 个用完整句子当名字的 Person，会让这个字段整体被判为噪声；更糟的是它把"我们认真核对过"这个真实信号**表达错了**——审核动作很适合放在 `citation` / `dateModified` / `Organization` 上，不适合放在"人"的名字里。

**修法**（二选一）：

```js
// A. 有真人审核人时才输出 Person
...(depth?.reviewerName ? {
  reviewedBy: { '@type': 'Person', name: depth.reviewerName }
} : {
  // B. 否则如实表达为组织级复核
  reviewedBy: { '@id': 'https://testpreppilot.com/#editorial-board' }
}),
```

把那段核对说明移到 `citation`（已有）或 `comment`，不要塞进 `name`。

---

## 四、P1 — 两周内修（明显折损，但不致命）

### P1-1　canonical / sitemap 指向的 URL 会 308 跳转，全站 533 处

**实测**：

```
GET /exams/sat-exam      → 308 → /exams/sat-exam/
GET /exams/sat-exam/     → 200，页面内 <link rel="canonical" href="https://testpreppilot.com/exams/sat-exam">
```

即：**最终 200 的 URL 是带斜杠的，而 canonical、`og:url`、sitemap 的 534 条 `loc` 全部不带斜杠。**

这是 `astro.config.mjs:149` 的 `trailingSlash: 'never'` 与 Cloudflare Pages 的目录索引行为冲突造成的。Google 对"canonical 指向一个重定向 URL"的标准处理是**忽略这条 canonical，自己选最终 URL**——也就是说你精心写的 canonical 目前在 533 个页面上是无效的，而且每条内链都要多一次 308。

**修法**（推荐 A）：

```js
// A. 让声明与实际 200 URL 一致（改动最小、风险最低）
trailingSlash: 'always',

// B. 若坚持无斜杠，改成 build.format: 'file'
//    产物变 /exams/sat-exam.html，CF Pages 直接以无斜杠 200 响应
build: { format: 'file' }
```

改完必须同步：`astro.config.mjs` 里 `sitemap` 的 `serialize()` 前缀匹配、`_headers` 的路径规则、`_redirects`。

### P1-2　`/best/*` 模板的 title 与 description 系统性超长

- 36 个标题 > 60 字符，**最长 99**，全部来自 `/best/*`
- 23 个描述 > 160 字符，**最长 213**，同样集中在 `/best/*`、`/about`、`/data`

```
99  /best/trades          Highest-Paying Trades, Construction & Engineering Credentials (2026): 24 Ranked | TestPrepPilot
98  /best/fitness-recreation
96  /best/allied-health
94  /best/admissions-academic
...
68  /   (首页)
71  /about
79  /best
```

SERP 里这些标题会被截断成 "Highest-Paying Trades, Construction & Engineering Cre…"，年份、数字、"Ranked" 全部看不见——而这三个正是 CTR 卖点。

**修法**：榜单标题模板改短，把数字提到前面：

```
2026 Highest-Paying Trades Credentials: 24 Ranked        (52 字符)
→ 目标 50–58，把 "| TestPrepPilot" 去掉（Google 本来也会剥品牌名）
```

描述裁到 150–158，用现成的 `clampDesc()`（`src/lib/seoTitle.ts:91`，目前 `/best` 没调用它）。

### P1-3　llms.txt：130 KB、548 条链接、20 条重复、**缺 8 篇最好的指南**

| 指标 | 实测 |
|---|---|
| 体积 | 129,607 字符 / 617 行 |
| 链接 | 548 条（唯一 528，**20 条重复**） |
| 去重来源 | "Start here — deepest exam guides" 的 20 条与正文重复 |
| `/exams` 链接 | 497 |
| `/paths` 链接 | **0** ← CPA / EA / OSHA / EPA / 三个房产执照全部缺席 |

`llms.txt` 是给 context window 有限的 agent 读的**索引**，不是全量 dump。130 KB ≈ 32k tokens，一个 agent 读完就没有预算读你的内容了，等于自己把引用入口堵死。而且它把你**最深、最值钱**的 8 篇导流为零。

**修法**：
1. `llms.txt` 瘦身到 ≤ 20 KB：每类保留 5–8 条最具代表性的，其余交给 `/data/exam-catalog.json` 与 `/sitemap-index.xml`。
2. 新增 `llms-full.txt` 放全量 528 条，在 `llms.txt` 里用一行指向它。
3. 补 `## Optional` 段（llmstxt.org 规定：agent 上下文不足时可跳过该段），把法律页、作者页、数据集说明放进去。
4. 补上 8 个 `/paths/*` 链接——它们理应排在 "Start here" 最前面。

### P1-4　Google Fonts 通过 CSS `@import` 串行加载（render-blocking 瀑布）

`src/styles/reset.css:1`：

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond...&family=Lora...&display=swap');
```

构建后确认它被内联进 `dist/_astro/about.CT28BRdE.css`（**全站每个页面都加载这个文件**）。实际请求链是：

```
HTML → about.CT28BRdE.css(23KB) → fonts.googleapis.com/css2 → fonts.gstatic.com/*.woff2
```

三级串行，且**全站没有任何 `preconnect` / `preload`**（`src/` 下 0 命中）。Cormorant Garamond 5 字重 + Lora 5 字重，最多 10+ 个 woff2。这是当前 LCP 最大的可控损耗，也是 Lighthouse 一定会报的 "render-blocking requests / font display"。

**修法**：
1. 自托管字体（`public/fonts/`），只保留实际用到的 2–3 个字重，`font-display: swap`；
2. 或在 `<head>` 顶部加：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="...">
```

### P1-5　`/explore` 与首页功能重叠，却拿了 sitemap priority 0.9

`/explore`：324 词，列出 8 个 `/paths` 链接，`ItemList` 也只指向那 8 个。
首页：477 条完整目录 + 搜索 + 筛选 + FAQ + `CollectionPage/ItemList`。

两者都是"浏览全部凭证"的入口，`/explore` 是首页的弱化翻版。却同时被 sitemap 标为 0.9（仅次于首页 1.0）、页脚全站链接、`ItemList` 重复声明。这是典型的**内链权重内耗 + 意图重叠**。

**修法**：`/explore` 改成 `noindex, follow`（保留为导航页），或在 sitemap 里降到 0.3；更好的做法是把它变成真正的差异化页面（按"证书 vs 执照 vs 培训"或按薪资区间切），而不是再加一个目录。

---

## 五、P2 — 排期优化（不影响收录，影响转化与信号纯度）

| # | 问题 | 证据 | 建议 |
|---|---|---|---|
| P2-1 | `/paths/*` 这 8 个旗舰页**没有** `datePublished` / `dateModified` / `Article` / `EducationalOccupationalCredential` | 实测 8/8 全部缺失，而 477 个 `/exams` 页全都有 | 与 `[slug].astro` 的 Article 块对齐，否则最有价值的页反而没新鲜度信号 |
| P2-2 | `/privacy-policy`、`/affiliate-disclosure` 没有 301 | `/privacy-policy` → 308 到自己带斜杠版；`/affiliate-disclosure` 同理 | 加 `_redirects` 301 到 `/privacy`、`/disclosure` |
| P2-3 | 541 个页面只有 **2 张** OG 图 | `og-image.png`（用于 540 页）、`og-exam.png`（用于 477 个考试页，全部相同） | 用 `_gen_og.py` 给 Top 50 考试页 + 15 个榜单页生成带名称/费用的独立 OG 图，AI 引用与社交 CTR 都会提升 |
| P2-4 | `sameAs` 全部是站内 URL | `src/data/editorial.ts:35-40, 107-112` | 加 1–2 个**外部**实体锚点（LinkedIn 公司页 / Crunchbase / Wikidata），这是 AI 引擎做实体消歧的主要依据；站内 `sameAs` 对实体识别几乎无效 |
| P2-5 | 线上**没有** GSC 验证 meta | `curl https://testpreppilot.com/` 实测 `google-site-verification` 缺失 | 确认是 DNS 验证还是没验证；`.env` 里有值但构建产物里没有 → 说明 env 未注入本次构建 |
| P2-6 | `vercel.json` 与 `_headers`/`_redirects` 并存 | 线上 `Server: cloudflare`，`Link` 头生效证明是 CF Pages | 删掉 `vercel.json`，避免下次有人按它改重定向（它只有 4 条规则，而 `_redirects` 有 60+ 条） |
| P2-7 | 首页 653 KB / 518 链接 / 275 KB 内联 JS | DOM 节点数偏高 | gzip 84 KB 尚可接受；若要优化，把 477 条的 `searchIndex` JSON 挪到 `/data/` 异步 fetch |
| P2-8 | `robots.txt` 的 `Crawl-delay: 1` 与非标准 `Agentmap:` | `public/robots.txt:33, 82` | `Crawl-delay` Google 忽略、Bing 会真的限速到 1 req/s；`Agentmap` 不是注册字段（应写在 `Link` 头或 ai-catalog，你两处都已有） |
| P2-9 | `/data` 页的 `Dataset.license` 指向 `/disclosure` | `dist/data/index.html` | 许可证应给 `CC0-1.0` / `CC-BY-4.0` 的 URL，`/disclosure` 是联盟声明，语义不对 |

---

## 六、已经做对、不要动的地方

这部分是你目前领先同类的资产，改动时务必保留：

1. **sitemap 的 lastmod 用真实发布日**（`astro.config.mjs:22-45`），不是构建时间戳。90% 的站做错这一件事。
2. **canonical 化 + 301 的历史治理**：51 个州 hub、5 个薄分类、3 个重复页全部收口，`/states/texas` 现在 404 而不是 200 薄页——这是正确的取舍。
3. **0 孤儿页 / 0 重复标题 / 全站 ≤3 跳**。477 个考试页的 `RelatedExams` + `siblings` + `peers` + 分类页形成了真实的网状结构。
4. **Answer-first 正文层**：每个 `<h2>` 下的第一句都带数字（`formatAnswer` / `costAnswer` / `topicAnswer`），这是 AI Overviews 抓取片段的理想形态。
5. **`speakable` + `citation` + 每页 1–5 条 `*.gov`/官方外链**（bls.gov 覆盖 447 页）。可引用性极强。
6. **AI 面基础设施完整度罕见**：`llms.txt` + `ai-catalog.json` + `api-catalog`（RFC 9727）+ `openapi.json` + `agent-skills/index.json` + `Content-Signal` + RFC 8288 `Link` 响应头 + 公开 JSON/CSV 数据集。国内/独立站里做全这一套的不到 1%。
7. **JSON-LD 0 语法错误、FAQ 与可见文本同源**（`homeFaqs` → `homeFaqSchema` 同一数组），没有出现"标记与正文不一致"这个最常见的失效点。
8. **占位页全部 noindex**，没有任何 thin page 进索引。

---

## 七、30 天执行清单

| 优先级 | 事项 | 预估工作量 | 预期收益 |
|---|---|---|---|
| 1 | 修 16 处 `/exams/<completed>` 内链 + 8 条 301 | 30 min | 立刻恢复 8 个高价值页的权重通路 |
| 2 | 删掉 `/about` 6 条虚构评价，改掉 "600+" 与 "checked by licensed professionals" | 1 h | 消除整站级质量风险（当前最大隐患） |
| 3 | 修 `reviewedBy` 的 Person 误用 | 20 min | 恢复结构化数据可信度 |
| 4 | `trailingSlash: 'always'` 统一 canonical / sitemap / 内链 | 2 h（含回归验证） | 533 个 canonical 从失效变有效 |
| 5 | `/best/*` 标题描述模板改短 | 1 h | 16 个页面 SERP 完整展示，CTR 提升 |
| 6 | llms.txt 拆分 + 补 8 个 `/paths` + `## Optional` | 2 h | AI 引用入口从"读不完"变"读得完" |
| 7 | 字体自托管 / preconnect + preload | 2 h | LCP 与 CWV 最大单项改善 |
| 8 | `/paths/*` 补 Article + 日期 schema | 1 h | 旗舰页拿到新鲜度信号 |
| 9 | 外部 `sameAs` + Top 50 独立 OG 图 | 4 h | 实体识别与社交/AI 卡片 |
| 10 | `/explore` 降权或重构 | 2 h | 消除内链权重内耗 |

---

## 八、附：本次审计中发现但**不构成问题**的项

避免你后续被"SEO 工具"误导：

- **没有 hreflang**：单语言站，正确，不需要。
- **`HowTo` 已失去富结果**：Google 2023 年下线了桌面 HowTo 富结果，但标记对 LLM 解析仍有意义，保留即可。
- **`FAQPage` 富结果受限**：只对政府和医疗站展示。你不是这两类，但 527 个 FAQ 块对 AI 抽取仍有价值，**不要删**。
- **`changefreq` / `priority`**：Google 明确忽略，但无害，可以留着。
- **`/privacy`、`/disclosure` 在 sitemap 里 priority 0.2**：合理。
- **`X-Robots-Tag: noindex` 用在 `.well-known/*`**：正确，这些是给 agent 读的，不该进搜索索引。
