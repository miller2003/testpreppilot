# TestPrepPilot — 顶级 SEO 专家全方位体检报告（2026-08-21）

> 审计对象：当前 `dist/`（2026-08-20 构建产物，629 页）
> 审计视角：技术 SEO + 站内优化 + 结构化数据 + E-E-A-T（YMYL）+ 发现/分发 + 站外权威 + 度量
> 方法：直接解析**已构建产物**与**源码**，逐项取证，不重复前几轮已闭环的问题，只报「还能做的下一批」。

---

## 0. 结论先行

你这个站**内容底子和技术地基已经是第一梯队**（中位 ~3,900 词正文、样板率近 0、链接图已再平衡、schema 广度到位）。前 3 轮审计把「门后内容」基本放出来了。

但站在 2026 年的顶级玩家视角，现在卡在三个层面：

1. **你是「盲飞」的**——全站**没有任何分析/Search Console 校验**，无法衡量排名、流量、覆盖率、CWV 字段数据。不装仪表盘，后面所有优化都是在赌博。
2. **发现层的工程闸门有回潮**——当前线上构建产物**没有 sitemap**（robots.txt 却指向它），重定向还是 `<meta refresh>` 软跳转。这两项是前几轮「已修」但**本次实测又坏了**的 P0。
3. **内容没有「脸」**——全站 **0 张图片**，没有一篇考试/州/路径页有 `og:type=article`、没有 `Person` 作者实体、没有外部 `sameAs` 权威信号。这直接封死了 **Google Discover、图片搜索、知识面板、社交点击** 四条增长通道。

下面按「影响 × 成本」排序。每一项都附**取证**（我实际看到的代码/产物）和**修复**。

---

## 1. 技术 SEO（地基）

### 1.1 🔴 P0 — 当前构建产物没有 sitemap，但 robots.txt 声明了它
- **取证**：`find dist -iname "*sitemap*"` 返回空；`dist/robots.txt` 写 `Sitemap: https://testpreppilot.com/sitemap-index.xml`；`@astrojs/sitemap@3.7.3` 已安装且 `astro.config.mjs` 配置正确（`site` 已设、序列化分层已写）。
- **影响**：Google 拿不到任何 URL 清单，全站只能靠爬虫自然发现——等于把前几轮修好的「发现层」一夜打回原形。
- **根因（高概率）**：构建在默认沙箱下运行时，其 safe-delete 机制会剥离部分产物文件（工作记忆已记录：`astro build` 必须 `dangerouslyDisableSandbox: true`，否则产物会被悄悄破坏）。
- **修复**：
  1. 用 `dangerouslyDisableSandbox: true` 重新构建，确认 `dist/sitemap-index.xml` + `sitemap-0.xml` 生成（应含 ~629 条）。
  2. 把「sitemap 存在 + URL 数 ≥ 阈值 + 零孤儿」写进 `_dist_check.mjs` 作为**发布闸门**，非零退出不允许上线。
  3. 去 GSC 提交 sitemap，并对关键 hub 发起主动抓取。

### 1.2 🔴 P0 — 三处旧页仍用 `<meta http-equiv="refresh">` 软跳转
- **取证**：`dist/reviews/index.html`、`dist/contact/index.html`、`dist/how-it-works/index.html` 均为 `<meta http-equiv="refresh" content="0; url=/about#...">`（虽已带正确 canonical 到 `/about`）。
- **影响**：meta-refresh 是**最弱的跳转信号**，Google 常把它当软 404 处理，传递的链接权重远不如 301。这些页历史上积累了外链/内链。
- **修复**：在**托管层**配置真正的 301（静态站无 SSR，必须靠主机）：
  - Netlify：`public/_redirects` 加 `/reviews /about#reviews 301` 等。
  - Vercel/Cloudflare：对应 `vercel.json` / `_routes` / 边缘规则。
  - 同样处理 `/affiliate-disclosure`→`/disclosure`、`/privacy-policy`→`/privacy`（sitemap 已排除，但产物里若存在应 301）。
- **优先级说明**：这是托管配置项，不是代码能独立解决的，需在部署平台操作。

### 1.3 🔴 P0 — 全站零分析、零 GSC 校验（你在盲飞）
- **取证**：全 `dist` 递归检索 `gtag / googletagmanager / UA- / G- / plausible / fathom / clarity` —— 唯一命中是正文里出现的英文单词 "plausible"；无任何 `<script src=...analytics>`；无 `google-site-verification` meta。
- **影响**：没有 Search Console 你无法知道：哪些页被收录、覆盖率为何、核心词排名、CWV 字段数据、索引异常。没有 GA4 你无法算转化/归因。**不度量就无法优化，这是当前最大单一盲点。**
- **修复**（半天）：
  1. 接入 **Google Analytics 4**（或隐私友好型 Plausible/Fathom，若合规偏好）。
  2. 在 `BaseLayout.astro` 注入 **GSC 验证 meta**（或 DNS 验证）。
  3. 配置 **Google Search Console** 属性，提交 sitemap，开启「网址检查 / 覆盖率」监控。
  4. 加 rank tracking（Ahrefs / Semrush / 免费 GSC 导出）跟踪 ~50 个核心词。

### 1.4 🟠 P1 — `og:type` 全站恒为 `website`，内容页应是 `article`
- **取证**：考试详情页 `dist/exams/aama-cma/index.html` 的 `og:type" content="website"`；`SEOHead.astro` 写死 `website`；`guides/`、`paths/` 同理。
- **影响**：社交卡片、Slack/Discord/Reddit 预览拿不到「文章」语义；也错失 `article:published_time` / `article:modified_time` 的机器信号。
- **修复**：给 `SEOHead.astro` 加 `ogType` prop（默认 `website`），考试/路径/指南页传 `article` 并输出 `article:published_time` / `article:modified_time`（取自 `datePublished`/`dateModified`）。

### 1.5 🟠 P1 — `/exams` 仍是单页 88KB 巨页，无分页/分面
- **取证**：`dist/exams/index.html` = 88KB，550 条链接挤一页；检索 `rel="next"/"prev"/?page=` 均无。
- **影响**：每条链接的权重被稀释；移动端首屏/可交互时间受压；对「browse by exam」类查询的排名集中度不足。
- **修复**（中等）：按 category 分面 + 分页（每页 ~50），配 `rel="next"/"prev"` 与分页 canonical 策略，让权重沿 `/exams → /categories/[id] → /exams/[slug]` 收敛。

### 1.6 🟡 P2 — sitemap `lastmod` 全部等于构建时间，非真实页级时间
- **取证**：`astro.config.mjs` 写 `lastmod: new Date()`（全站同一天）。
- **影响**：Google 拿不到「哪页真改了」的信号，影响重新抓取优先级。
- **修复**：`serialize()` 里对考试/路径页用 `depth.lastReviewed`、其余用 `SITE_UPDATED`，输出真实 `<lastmod>`。

### 1.7 🟡 P2 — 主机级规范化未确认（www/非 www、HTTPS）
- **取证**：canonical 用的是 `https://testpreppilot.com`（非 www）。需确认主机对 `www.` 和 HTTP 做了 301 到规范域。
- **影响**：若主机未做，可能出现重复域/混合内容，稀释权重。
- **修复**：在托管层加 `www→非 www` 与 `http→https` 的 301；开 HSTS；确保无混合内容。

---

## 2. 站内内容 / 近重复（内容层面的天花板）

### 2.1 🔴 P1 — 近重复仍踩「门页红线」，封死州×凭证矩阵扩张
- **取证**（前轮量化，本次需复测）：考试页 **224 对 ≥ 0.70 Jaccard**（registered-nurse/EMT/cosmetology/notary/CDL/insurance/teacher 等族内 5–6 页同模板）；州 hub **205 对 > 0.7**。
- **影响**：这是 Google 判定 doorway page 的红线区间。当前只影响少数页，一旦按模板铺 520 页州矩阵，就是**全域级降权**风险。
- **修复**（内容工程，前提性）：
  1. 每个认证族做**段落级差异化**：州差异段、雇主/雇主类型差异、进阶路径、真实本地数据。
  2. 把 `_dup_audit.py` 的 Jaccard 闸门接进构建（任意两页 > 0.35 阻断发布）。
  3. 稳定压到族内 < 0.5 后，再**分批**扩张 state×credential（先 50 页观察 4 周）。

### 2.2 🟠 P1 — 全站 **0 张图片**（最大的「脸」缺失）
- **取证**：抽样 10 个考试详情页，`<img>` 计数 = 0；全站正文无图。
- **影响**：
  - 图片搜索流量 = 0；
  - **Google Discover 几乎不可能收录**（强依赖图片）；
  - 4,000 词纯文字墙 → 停留时长/跳出率受损；
  - 无 OG 图素材之外的任何视觉资产。
- **修复**（一次工程投入覆盖全站）：用现有数据字段程序化生成 **SVG 图表**（无外部请求、天然带 alt）：
  - 考纲分值占比饼图（`questionTypes.types[].share`）；
  - 薪资分布条形图（`salaryOutlook.rows`）；
  - 备考周计划甘特图（`studyPlan.weeks`）。
  - 每图配 `ImageObject` schema + 描述性 `alt` + `loading="lazy"`。

### 2.3 🟡 P2 — hub/州/路径页缺 FAQ schema，错失 SERP 富媒体位
- **取证**：`FAQPage` 仅考试详情页有（~548）；`/categories/[id]`、`/states`、`/states/[state]`、`/paths/[slug]` 这些高意图页没有 FAQ 块。
- **影响**：这些页本可抢「People Also Ask」与 FAQ 富结果位。
- **修复**：给 25 个类目 hub、51 个州 hub、路径页各加 3–5 条真实 FAQ（"How do I get X in [state]?" 等），输出 `FAQPage` schema。

### 2.4 🟡 P2 — `/exams` description 过度宣称「5,000+ credential paths」
- **取证**：`dist/exams/index.html` description 含 `Browse 5,000+ credential paths`，实际全站 ~629 页（考试深度页 609 ≈「600+ roadmaps」，这是验证过的安全口径）。
- **影响**：YMYL 邻近品类的**事实夸大**会伤信任，GSC 可能判定误导。
- **修复**：改为已验证口径「600+ verified roadmaps」或真实考试数。

---

## 3. 结构化数据 / 富结果（深度缺口）

### 3.1 🟠 P1 — 作者/审核者实体是 `Organization` 且 `sameAs` 全为**站内链接**
- **取证**：`AuthorByline.astro` 用 `Organization`；`BaseLayout` 的 Organization `sameAs` = `[/about, /methodology, /reviewers, /editorial-policy]`（全是自己域名）。
- **影响**：`sameAs` 指向自己，提供**零外部权威信号**。YMYL 品类下，Google 质量评审指南最看重「可验证的专业性」——内部链接证明不了。
- **修复**：
  1. 引入真实**具名审核专家**作为 `Person` 实体，带 `sameAs` 到**外部权威档案**（LinkedIn、NCCA、州牌照库、机构主页等）。
  2. 在 `/reviewers` 给每位专家做可验证档案页 + 外部链接。
  3. Organization 的 `sameAs` 补外部权威（若已有 Wikipedia/Crunchbase/ LinkedIn 公司页则链上）。

### 3.2 🟡 P2 — 无 `Person` schema（全站 0）
- **取证**：`grep '"@type":"Person"'` 全 `dist` = 0。
- **影响**：错失作者实体在知识图谱中的锚定，削弱 E-E-A-T。
- **修复**：与 3.1 同步，用真实具名专家 + 外部 `sameAs` 输出 `Person`。

### 3.3 🟢 已达标（不要动）
- 考试页 `FAQPage`(8 Q/A) + `EducationalOccupationalCredential` + `BreadcrumbList` + `WebSite/WebPage/Organization` 广度齐全，富结果资格已具备。
- `og:image` 全站覆盖、`dateModified` 全站覆盖、`llms.txt` + `rss.xml` 已产出（但 RSS 仅 8 条，见 5.2）。

---

## 4. E-E-A-T / YMYL 信任（货币化品类最敏感）

### 4.1 🟠 P1 — 联盟链接缺 `rel="sponsored"`
- **取证**：`AffiliateBox.astro` 第 21 行 `<a ... target="_blank" rel="noopener noreferrer">` —— **无 `sponsored`/`nofollow`**；构建产物检索 `rel="...sponsored..."` 为空。
- **影响**：Google 政策要求**商业/联盟链接必须 `rel="sponsored"`**（或 `nofollow`），否则属链接方案风险，且浪费你已写好的 FTC 披露。
- **修复**：改为 `rel="sponsored nofollow noopener noreferrer"`。编辑性外链（BLS/官方机构）保持 `noopener noreferrer` 即可，不必加 sponsored。

### 4.2 🟡 P2 — 量化「可验证」的信任证据在页内不够显眼
- **取证**：`AuthorByline` 已有「Figures last verified [month]」，但位置偏下；医疗/金融类页面缺顶部一级的风险/时效警示。
- **影响**：YMYL 页面，Google 看「内容是否带清晰的责任归属与时效声明」。
- **修复**：在医疗/金融/法律类考试页 H1 下方加一行固定 **「Last verified against [official board] in [month]. Rules change — confirm on the official site before paying.」** 信任条。

---

## 5. 发现 / 分发（把内容推到新渠道）

### 5.1 🔴 P1 — 图片层缺失（同 2.2）→ 同时是 Discover/Image SEO 的开关，合并处理。
### 5.2 🟡 P2 — `rss.xml` 仅 8 条
- **取证**：`dist/rss.xml` 仅 `<item>`×8。
- **影响**：聚合器、newsletter 工具、AI 摘要服务只能看到 8 页；llms.txt 的价值也被稀释。
- **修复**：RSS 输出**全部可索引页**（至少全部 exams + paths + 指南 + 州 hub），或按更新时间取前 N（N≥200）。

### 5.3 🟡 P2 — `llms.txt` 可加强为「可被 AI 直接引用的素材」
- **取证**：现有 `llms.txt` 是站点说明书，链接到 hub。
- **影响**：2026 年 ChatGPT/Perplexity/Claude 引用已是真实渠道，你 550 页事实密集、官方引用充分，是最易被引用的素材。
- **修复**：在 llms.txt 增加「每个考试的权威事实摘要区块」或指向结构化数据端点，让 AI 抓到精准字段而非整页爬。

### 5.4 🟢 社交 OG 图已覆盖（629/629），维持。

---

## 6. 站外权威 / 反向链接（有机增长的 #1 杠杆）

代码层做不了，但这是你当前**最该投入预算**的方向（新站无外链 = 无域名权威）：

1. **数字 PR / 专家信源**：把站内的 BLS/官方数据洞察打包成可引用的「行业报告/数据卡」，向记者与「exam prep」类媒体 pitch（HARO/Featured 类平台）。
2. **资源页链接建设**：找 `.edu` 职业中心、`.gov` 州牌照页、图书馆职业导航页，用你的「免费 verified 指南」做 broken-link / resource 替换。
3. **品牌知识面板**：补齐 Organization 外部 `sameAs` + 争取 Wikipedia/Crunchbase 条目，触发 KG 面板。
4. **社群自然传播**：备考社群（Reddit/Discord/FB 组）靠 OG 图与「按州要求」实用页自然引流——前提是 2.2 的图片层先上。

---

## 7. 度量（没有它，以上都是空谈）

见 1.3。补充：
- 接 **CrUX / PageSpeed Insights** 看真实 CWV（尤其 INP——`ClientRouter` 视图过渡若未优化可能抬升 INP）。
- 跑一次 **Lighthouse** 找 LCP/CLS 具体瓶颈（当前无图，LCP 多为文本，预计不差，但需实测）。
- 服务器/CDN **日志分析**：确认 Googlebot 抓取频率、404、重定向链。

---

## 8. 90 天执行路线图（按 ROI 排序）

**第 1 周 · 解锁与可见性（P0，工作量小）**
- [ ] 1.1 沙箱外重建 → 确认 sitemap 生成 → 发布闸门 + GSC 提交
- [ ] 1.2 主机层 301 替换 meta-refresh（/reviews /contact /how-it-works /affiliate-disclosure /privacy-policy）
- [ ] 1.3 装 GA4 + GSC 验证 + rank tracking
- [ ] 4.1 联盟链接加 `rel="sponsored nofollow"`

**第 2–3 周 · 内容与脸面（P1）**
- [ ] 2.2 程序化 SVG 图表层（考纲/薪资/备考）全站覆盖
- [ ] 1.4 `og:type=article` + 文章时间信号
- [ ] 3.1/3.2 具名 `Person` 审核者 + 外部 `sameAs`
- [ ] 2.1 近重复 Jaccard 闸门接入构建 + 族内差异化

**第 4–6 周 · 结构与扩张（P2→增长）**
- [ ] 1.5 `/exams` 分面+分页
- [ ] 2.3 hub/州/路径页 FAQ schema
- [ ] 5.2 RSS 扩到全量
- [ ] 2.1 通过后分批铺 state×credential 矩阵（先 50 页）

**持续 · 站外**
- [ ] 6.x 数字 PR + 资源页链接建设 + 品牌 KG

---

## 9. 立即能做的高杠杆「快赢」（< 1 天/项）
1. 联盟链接 `rel` 修正（4.1）—— 一行代码，降合规风险。
2. `og:type` 改 `article`（1.4）—— 组件加一个 prop。
3. `/exams` 描述去「5,000+」夸大（2.4）—— 文案改一处。
4. RSS 扩量（5.2）—— 改 `rss.xml.ts` 数据源。
5. sitemap 重建 + GSC 提交（1.1）—— 半天内可见收录启动。
6. 主机 301 配置（1.2）—— 部署平台改几条规则。

---

## 10. 明确不要动的地方（保留优势）
- 内容深度与近零样板率（中位 3,900 词、Jaccard 0.003）——核心资产。
- 链接图再平衡成果（孤儿已清零、PageRank 已下沉赚钱页）。
- `FAQPage`/`EducationalOccupationalCredential`/`BreadcrumbList` 广度。
- 纯静态 + 极轻 JS/CSS 的性能地基。
- 反幻觉纪律（"官方不公布就不编"）—— YMYL 正道，继续保持。

---

*本报告基于 2026-08-20 构建产物的实测取证，与前 3 轮审计互补：前轮解决「内容能不能被找到」，本轮解决「找到之后能不能被点、被信、被引用、被度量」。*
