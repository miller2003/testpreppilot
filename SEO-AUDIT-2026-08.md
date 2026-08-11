# TestPrepPilot 技术架构 & pSEO 深度审计

审计日期：2026-08-06 · 审计对象：`dist/` 构建产物（628 页）+ `src/` 源码
审计视角：对标 Zapier / Wise / Ramp / Dofollow 级 pSEO 站的工程标准

---

## 0. 一句话诊断

**内容层 90 分，发现层 25 分。**

你已经造好了一座藏书极深的图书馆——中位数 3,918 词的正文、近乎为零的跨页样板重复、1,568 条指向 BLS 与官方发证机构的出站引用。这个内容底子比 90% 的 pSEO 站都强，而且强得不是一点点。

但这座图书馆**没有门牌、没有地图、有 55 个房间根本没有门**。

现在的瓶颈 100% 不在"再写多少页"，而在"已经写好的页能不能被发现、被索引、被点击"。这是好消息：修发现层是几天的工程活，补内容层是几个月的苦活。

---

## 1. 现状快照

| 维度 | 实测值 | 评价 |
|---|---|---|
| 总页面 | 628（exam 550 / state hub 60 / path 8 / category 4 / state×cred 3） | — |
| 正文词数 | 中位 3,918 / p90 6,445 / 最大 10,933 | 顶级水准 |
| 全局样板率 | ~0%（40 页采样零共同 8-gram） | 罕见地好 |
| 页间相似度 | 中位 Jaccard 0.003 / p99 0.065 | 优秀 |
| 单页 JS | ClientRouter 13KB + 2.3KB | 极轻 |
| 单页 CSS | 最大 19KB | 极轻 |
| 每页 H1 | 628 页全部恰好 1 个 | 达标 |
| canonical | 100% 覆盖 | 达标 |
| 重复 description | 0 组 | 达标 |
| **sitemap** | **不存在** | **致命** |
| **孤儿页** | **55 个** | **致命** |
| og:image | 0 / 628 | 严重 |
| dateModified | 0 / 628 | 严重 |
| 图片总数 | 0 张 | 战略空白 |

---

## 2. P0 · 致命问题（本周必须修）

### 2.1 sitemap 完全没有生成，而 robots.txt 正指向它

`public/robots.txt` 写着：

```
Sitemap: https://testpreppilot.com/sitemap-index.xml
```

但 `dist/` 根目录下**没有任何 sitemap 文件**。而备份目录 `dist_bak_1785430319/` 里却有 `sitemap-index.xml` 和 `sitemap-0.xml`——说明以前生成过，**最近这次 build 中途挂了**。

根因在 `package.json`：

```json
"build": "astro build; pagefind --site dist"
```

用的是 `;` 而不是 `&&`。`astro build` 失败或被中断时，`pagefind` 照样往下跑，**退出码是 0，CI 会显示"构建成功"**，然后你把一个残缺的 `dist/` 发上线了。这是整个流程里最危险的一行代码。

**修复：**

```json
"build": "astro build && pagefind --site dist && node _dist_check.mjs"
```

改成 `&&`，并把已有的 `_dist_check.mjs` 提升为**发布闸门**，至少断言三件事：sitemap-index.xml 存在、HTML 页数 ≥ 预期阈值、零孤儿页。构建产物校验不通过就非零退出，不允许发布。

> 影响判断：如果这个残缺版本已经上线，Google 当前**拿不到任何 sitemap**，全站只能靠爬虫自然发现——而下面 2.2 会说明，自然发现路径也是断的。

### 2.2 55 个孤儿页：所有州页在站内完全不可达

这是比 sitemap 更深层的结构问题。链接图 BFS 的结果：

```
点击深度分布: {0: 1, 1: 17, 2: 555}
不可达（孤儿）页面: 55
```

这 55 个页面包括**全部 50 个州页 + 华盛顿特区 + 全部 state×credential 页**：

```
/alabama  /alaska  /arizona  /arkansas  /california  /colorado ...
/california/california-real-estate-license
/florida/florida-real-estate-license
```

它们的入链数是 **0**——不是"少"，是**一条都没有**。全站 628 个页面里，没有任何一个页面链接到 `/california`。导航栏没有、页脚没有、正文没有、`/explore` 没有。

叠加 sitemap 缺失，结果就是：**这 55 个页面对 Google 而言等同于不存在。** 你写的州级内容，一次曝光都拿不到。

**修复（按性价比排序）：**

1. **建一个 `/states` 索引页**，列出全部 52 个州，从主导航或页脚入口进入。这一步就能把 52 个孤儿页拉进 depth-2。
2. **exam 页正文加"按州查看要求"模块**。对有州级差异的考试（房地产、保险、驾照、控酒、食品安全、美容），从 exam 页正文链向对应州页。这是语义相关的正文内链，权重传导效率远高于导航链接。
3. **州页之间加"邻州"横向链接**（如 California → Nevada / Oregon / Arizona），让州级集群内部形成网状而非孤岛。

### 2.3 内链权重的分配是反的

看入链 Top 10：

```
/how-it-works      628
/reviews           628
/disclosure        628
/exams             628
/guides            628
/editorial-policy  628
/explore           628
/privacy           628
/about             628
```

**站内内链权重最高的 9 个页面，有 5 个是不赚钱的合规页**（privacy / disclosure / editorial-policy / about / how-it-works）。它们每个都拿到 628 条全站入链，而真正的钱页——550 个 exam 详情页——**正文入链中位数只有 8**。

顶级 pSEO 站的做法是**倒过来**的：合规页收进页脚一个折叠区、单条链接即可；把内链预算集中灌给转化页和集群枢纽。

**修复：**
- 页脚合规链接区加 `rel="nofollow"`，或收进一个 `<details>` 折叠块（保留可访问性，降低链接权重稀释）。
- 每个 exam 页的正文内链出口从当前中位 8 提到 15–25 条，指向：同类考试、上级 category、相关 path、对应州页。
- 建立**枢纽—辐条（hub-and-spoke）**结构：category 页当枢纽，双向链接所有辐条页，辐条页之间按语义相似度互链。

---

## 3. P1 · 高杠杆缺口（两周内）

### 3.1 628 页全部没有 og:image

社交分享、Slack/Discord 预览、Reddit 卡片、Google Discover ——全部拿不到图。在备考这个高度社交化传播的品类里，这是**白白丢掉的分发渠道**。

`SEOHead.astro` 里 `ogImage` 是可选 prop，而**没有任何页面传值**，也没有兜底默认图。

**修复：** 用 Astro 的 `@vercel/og` 或 satori 做**动态 OG 图生成**——每个 exam 页自动渲染一张含考试名 + 发证机构 + 关键数据（费用/题量/时长）的卡片。这是顶级 pSEO 站的标配，一次工程投入覆盖全站 628 页。最低限度也要先加一张全站兜底 OG 图。

### 3.2 390 页（62%）的 meta description 是暴力截断的

实测 390 个页面的描述以 `…` 结尾：

```
"AAB Phlebotomy Certification is a professional credential administered by
American Association of Bioanalysts (AAB). It validates job-ready knowledge and…"
```

这是取正文前 N 字符硬切的结果，不是为点击率写的。描述平均长度 141 字符，而且**句子是断的**——在 SERP 里显示为半截话，CTR 会明显吃亏。

**修复：** 为每个 exam 生成结构化描述模板，塞进用户实际搜索时关心的决策信息：

```
CompTIA Security+ (SY0-701): $404 exam fee, 90 questions in 90 minutes,
750/900 to pass. 2026 requirements, study plan, and salary data.
```

把**费用、题量、时长、及格线**这些"钱字眼"前置——这些正是搜索者扫 SERP 时在找的东西，也是拉开 CTR 差距的地方。控制在 150–160 字符，永远不要以 `…` 结尾。

### 3.3 零时间戳：没有任何新鲜度信号

```
pages w/ dateModified in schema: 0
pages w/ datePublished:          0
```

考试类内容是**强时效品类**——费用每年调、考纲改版、及格线变动。Google 对 YMYL 邻近品类的新鲜度极其敏感，而你的页面**没有向搜索引擎发出任何"这是最新的"信号**。

讽刺的是，你的数据文件里**有这个字段**——`_agent_brief.md` 的 schema 里明确要求 `lastReviewed: '2026-08'`。数据有，只是没渲染进 schema 和页面。

**修复：**
- 把 `lastReviewed` 渲染进 JSON-LD 的 `dateModified`。
- 页面可见位置加 "Last reviewed: August 2026"（用户信任 + 机器信号双收）。
- sitemap 里输出真实的 `<lastmod>`。

### 3.4 州 × 凭证矩阵只开发了 0.6%

这是**整个站最大的未开发增长面**。

```
states.ts:        52 个州
credentials.ts:   10 个 credential
实际生成:          3 个 state×credential 页
```

`[state]/[credential].astro` 的 `getStaticPaths` 只在 `cred.stateSpecificData` 存在时才生成路径，而 61KB 的 `credentials.ts` 里只有 3 处 `stateSpecificData`。

**52 × 10 = 520 个潜在页面，现在只有 3 个。**

而"real estate license in texas"、"insurance license california"这类**州+凭证**的组合词，恰恰是这个品类里搜索量最集中、商业意图最强、竞争相对最弱的长尾。这是教科书级的 pSEO 矩阵机会。

**但必须警告——不要无脑铺量。** 见 4.4 的近重复风险。正确做法是：只为**州际差异真实存在**的凭证铺（房地产、保险、驾照、控酒、食品安全、美容、护理），每页必须包含该州**独有**的事实：州监管机构名称、州考费用、学时要求、互认协议、州考题量。凑不出州级独有事实的组合，**宁可不生成**。

---

## 4. P2 · 对标顶级站的进阶差距

### 4.1 完全没有图片层

```
total <img>: 0    pages with img: 0
```

628 个页面，**零张图片**。这意味着：

- 图片搜索流量 = 0
- Google Discover 几乎不可能收录（强依赖图片）
- 无 OG 图素材
- 页面停留时间受损——4,000 词纯文字墙，跳出率必然偏高

顶级 pSEO 站会为每个模板位生成**程序化图表**：考纲分值占比饼图、薪资分布条形图、备考周计划甘特图。这些都能用数据直接渲染成 SVG，一次工程投入覆盖全站，还天然带 alt 文本和 `ImageObject` schema。

你的数据里**已经有这些字段了**——`salaryOutlook.rows`、`questionTypes.types[].share`、`studyPlan.weeks`。渲染成图表几乎是免费的。

### 4.2 缺 WebSite + SearchAction 与 llms.txt

- **`WebSite` + `SearchAction` schema：0 页。** 你已经有 Pagefind 站内搜索了，但没告诉 Google，拿不到 SERP 的 sitelinks searchbox。
- **`llms.txt`：不存在。** 2026 年了，ChatGPT / Perplexity / Claude 的引用流量已经是真实渠道。你的站有 550 页事实密集、官方引用充分的内容，**是 LLM 最愿意引用的那类素材**，但没有给 AI 爬虫任何结构化入口。
- **RSS / feed：不存在。** 无法被聚合器、newsletter 工具、AI 摘要服务订阅。

### 4.3 `/exams` 枢纽页 350KB 且无分页

单页塞了全部 550 个考试链接，HTML 350KB——是全站平均 61KB 的 5.7 倍。移动端 LCP 会很难看，而且 550 条链接挤在一页，**每条链接的权重传导被稀释到接近于零**。

**修复：** 按 category 分面 + 分页（每页 50 条），配 `rel="next"/"prev"` 与规范的分页 canonical 策略。让权重沿 `/exams` → category → exam 逐级收敛，而不是一次性摊薄。

### 4.4 州级近重复页的降权风险

采样相似度检测里跳出了几对危险组合：

```
0.712  california-motorcycle-license-test  <->  texas-motorcycle-license-test
0.372  california-property-and-casualty... <->  new-york-property-and-casualty...
0.357  ohio-drivers-license-written-test   <->  new-york-drivers-license-written-test
0.316  florida-alcohol-server-cert         <->  pennsylvania-alcohol-server-cert
0.310  texas-food-handler-card             <->  california-food-handler-card
```

**0.712 的 Jaccard 相似度是明确的红线**——加州和德州的摩托车驾照页面 71% 的 8-gram 重合。这正是 Google 判定 **doorway pages（门页）** 的典型特征，而且这类惩罚往往是**站点级**的，不是页面级的。

全站中位相似度只有 0.003，说明绝大部分内容是真差异化的——但这几对是**明确的例外**，而且恰好落在你打算大规模扩张的州级矩阵上。**在铺 520 页州矩阵之前必须先解决这个模式**，否则是在把一个局部风险放大 100 倍。

**修复：** 建立差异化闸门——每个州级页必须有 ≥60% 独有内容，包含该州具体的监管机构、法规条款号、费用、学时。把 `_dup_audit.py` 加进构建流程，任意两页 Jaccard > 0.35 就阻断发布。

### 4.5 若干工程细节

| 问题 | 位置 | 说明 |
|---|---|---|
| Organization schema 的 logo 指向 404 | `BaseLayout.astro` | 引用 `https://testpreppilot.com/logo.png`，但 `public/` 里只有 `favicon.svg`。**无效的 logo 会让整个 Organization 实体在知识图谱里失效** |
| 无用的 preconnect | `BaseLayout.astro` | preconnect 到 `fonts.googleapis.com` 和 `fonts.gstatic.com`，但**全站从不加载 Google Fonts**，`global.css` 里没有任何 `font-family` 声明。两次浪费的 DNS + TLS 握手 |
| favicon 重复声明 | `SEOHead.astro` + `BaseLayout.astro` | 同一个 `<link rel="icon">` 输出了两遍 |
| og:type 恒为 website | `SEOHead.astro` | 550 个内容页应该是 `article`，并配 `article:published_time` / `article:modified_time` |
| 13 页薄内容 | exam 详情页 | 正文 <800 词且无 FAQ schema（最薄 529 词）。要么补齐，要么 noindex |
| 123 页缺深度模块 | exam 详情页 | 427/550 有 8 件套深度模块，其余 123 页只有基础模板，`EducationalOccupationalCredential` schema 也随之缺失 |
| 根目录污染 | 项目根 | 60+ 个 `_*.mjs` / `_*.json` 临时脚本堆在根目录。建议收进 `scripts/` 并纳入 `.gitignore` 管理 |

---

## 5. 你做对了什么（别改）

审计的价值一半在于指出别动哪里。这几件事你做得比绝大多数 pSEO 站好：

1. **内容深度是真的。** 中位 3,918 词、p90 6,445 词，且全局样板率约等于 0。绝大多数 pSEO 站是"一个模板换 500 个变量名"，你的 546 个 exam 页两两相似度中位数只有 0.003——**这是真差异化内容，不是拼接内容**。
2. **反幻觉纪律。** `_agent_brief.md` 里的硬规则——"官方不公布及格率就直说不公布，绝不编数字"、"薪资必须来自 BLS OOH 真实页面"——是 YMYL 内容的正确姿势。1,568 条外链里 413 条指向 `bls.gov`，这是**教科书级的 EEAT 建设**。
3. **性能底子干净。** 纯静态、JS 总量 15KB、CSS 最大 19KB、零第三方追踪脚本。CWV 的地基是好的。
4. **技术基础项无失分。** 628 页全部单 H1、canonical 全覆盖、0 组重复 description、BreadcrumbList 100% 覆盖、外链全部 `rel="noopener noreferrer"`。
5. **schema 覆盖广度不错。** BreadcrumbList 688 + FAQPage 548 + EducationalOccupationalCredential 427 + Course 11 + ItemList 11。缺的是深度（时间戳、作者实体、评分），不是广度。

---

## 6. 执行顺序

按**投入产出比**排序，不是按问题严重度排序：

### 第 1 周 · 解锁索引（工作量小，影响极大）

- [ ] `package.json` 的 `;` 改成 `&&`，`_dist_check.mjs` 升级为发布闸门
- [ ] 重跑 build，确认 `sitemap-index.xml` 生成
- [ ] 建 `/states` 索引页，主导航加入口 → **一次性消灭 52 个孤儿页**
- [ ] 修 `logo.png` 404，删掉无用的 Google Fonts preconnect，去掉重复 favicon
- [ ] GSC 提交 sitemap，对孤儿页发起主动索引请求

### 第 2 周 · 提升 CTR 与信任信号

- [ ] 重写 390 条截断的 meta description，费用/题量/时长前置
- [ ] `lastReviewed` 渲染进 `dateModified` + 页面可见位置
- [ ] 动态 OG 图生成（satori / @vercel/og）
- [ ] 加 `WebSite` + `SearchAction` schema，`og:type` 改 `article`
- [ ] 补齐 13 页薄内容，或对其 noindex

### 第 3–4 周 · 内链重构（这一步决定天花板）

- [ ] 页脚合规链接降权（nofollow 或折叠）
- [ ] exam 页正文内链出口提到 15–25 条，语义相关优先
- [ ] `/exams` 分面 + 分页，拆掉 350KB 巨页
- [ ] 建 hub-and-spoke：category 枢纽 ↔ exam 辐条 ↔ 州页
- [ ] 补齐 123 页的深度模块

### 第 2 个月 · 规模化扩张（前提：上面全部完成）

- [ ] 先修 5 对近重复州页，建立 Jaccard > 0.35 的构建期阻断
- [ ] 差异化闸门通过后，分批铺 state × credential 矩阵（52 × 7 ≈ 364 页）
- [ ] 程序化图表层：考纲占比 / 薪资分布 / 备考甘特（数据已就绪）
- [ ] `llms.txt` + RSS

---

## 7. 结论

这个站的问题**不是内容不够好，而是好内容被锁在门后**。

sitemap 缺失和 55 个孤儿页这两件事，加起来大概是 1–2 天的工程量，但它们目前**卡死了整站至少 9% 页面的全部曝光**，并且让剩余 91% 的页面失去了最可靠的发现通道。这是我在审计里最喜欢看到的那种问题——**修复成本极低，解锁的价值极高**。

对比顶级 pSEO 站，你真正缺的是三样东西：**发现层的工程闸门**（构建校验、sitemap、零孤儿页断言）、**分发层的资产**（OG 图、图表、llms.txt）、以及**内链的刻意设计**（现在的内链是导航的副产品，不是策略的产物）。

内容层已经赢了，把工程层补上就行。

---

*审计脚本已保留在项目根目录，可纳入 CI 复用：*
- `_seo_audit.py` — schema 覆盖率按页面类型统计
- `_link_audit.py` — 内链图 / 孤儿页 / 点击深度 / 入链分布
- `_dup_audit.py` — 词数分布 / 模板指纹 / 近重复检测
