# GEO（AI SEO）全面审计与优化 — 2026-09-02

对照你提供的 GEO 教程四步打法（垂直细分 → AI 友好格式 → JSON-LD → llms.txt），对全站 126 个可索引页面做了逐页机器审计（`_geo_audit.mjs`，读 sitemap、映射 dist 文件、逐页核验，无抽样），并完成了所有缺口的修复。

## 一、四步打法对照结论

| 教程步骤 | 要求 | 站点现状 | 判定 |
|---|---|---|---|
| 第一步：垂直细分 | 选窄品类，不做大杂烩 | 全站只做一件事：美国职业考试/执照/认证备考指南，15 个职业域、90 篇已发布深度页 | ✅ 达标 |
| 第二步：AI 友好格式 | H2 单一问题 / 答案先行 / 具体数字 / 对比表格 / 底部 FAQ | 见下方逐页型数据 | ✅ 达标（本次补齐 guides） |
| 第三步：JSON-LD | FAQPage、Product、ItemList，且标记与可见文字一致 | FAQPage 全覆盖；ItemList 覆盖目录页；Product 用更贴合本垂类的 EducationalOccupationalCredential + Course 替代；**本次消除了 1 处不一致 + 5 处重复** | ✅ 达标（本次修复） |
| 第四步：llms.txt | 根目录放 AI 爬虫站点地图 | robots.txt 里已声明 `/llms.txt` 但文件实际不存在（悬空引用）→ **本次已生成并部署** | ✅ 达标（本次修复） |

## 二、逐页型审计数据（修复后，126 页全量）

| 页型 | 页数 | 平均词数 | H2 问句式 | 含表格 | 可见 FAQ | FAQPage 标记 | 标记/可见不一致 |
|---|---|---|---|---|---|---|---|
| exam 考试详情 | 90 | 6,009 | 93% | 100%（均 4.7 张/39 行） | 100%（均 7.7 问） | 100% | 0 |
| path 旗舰路径 | 8 | 4,183 | 92% | 100%（均 6.8 张） | 100%（均 10.6 问） | 100% | 0 |
| guide 编辑长文 | 3 | 1,062 | 10%* | —* | 100%（均 4.0 问） | 100% | 0 |
| category 分类 | 16 | 818 | 16%* | 94% | 100%（均 4.8 问） | 100% | 0 |
| hub 枢纽页 | 8 | 759 | 26% | — | /about 有（5 问） | /about 有 | 0 |
| home 首页 | 1 | 1,595 | — | —（目录页） | —（目录页） | CollectionPage+ItemList | 0 |

*guide/category 的 H2 是编辑性标题（单一主题），不强制问句形式——教程规则的本质是「一个 H2 只回答一个问题」，这两类页满足语义。首页答案先行（90 exams · 15 professions 数字开场），每篇 exam 页开头有 Quick answer 板块。

**全站红线核验：JSON-LD 与可见文字不一致 = 0 页；空洞形容词（"amazing/best-in-class"类）命中 = 0 次。**

## 三、本次完成的改动

### 1. llms.txt（GEO 第四步，P0）
- 新增生成脚本 `_gen_llms.mjs` + 产出 `public/llms.txt`（186 行，30.7 KB），随构建部署到 `dist/llms.txt`
- 内容策略：只列已发布且 national 模式（可索引）的 90 篇指南；**每条带可引用的具体数字**（费用·时长·题数·及格线），如 `[SAT](…): $69 · 2 hr 14 min · 152 questions`；按 15 个领域分组，头部有「Start here 最深度 20 篇」；尾部含方法论/编辑政策/审校者/披露等信任页与引用格式建议
- 修复了 robots.txt 第 19 行「内容地图见 /llms.txt」的悬空引用（此前该文件不存在）
- **规则写死在脚本里**：manifest 一变重跑 `node _gen_llms.mjs` 即可，不会漂移（与 `_gen_infographics.mjs` 同为发布流水线的必备步骤）

### 2. guides 编辑长文补齐（GEO 第二/三步，此前 0 表格/0 FAQ/0 专属 schema）
- `src/data/guides.ts`：3 篇文章各新增 4 条 FAQ（问答内容全部取自文章正文，可溯源），接口新增 `faqs` 字段
- `guides/[slug].astro`：新增可见 FAQ 板块（details/summary，样式与全站一致）+ **FAQPage JSON-LD（与可见渲染共用同一数组，结构上不可能不一致）** + Article schema（headline/dates/author=Editorial Board/publisher/canonical）
- `guides.astro` 索引页：新增 CollectionPage + ItemList（3 篇指南）

### 3. explore 目录页
- 新增 CollectionPage + ItemList（8 个旗舰 path 页），同样从渲染数组生成

### 4. 修复「标记与可见文字不一致」（教程第三步红线）
- /about 页 5 条 FAQ 此前是「schema 一套措辞、页面另一套措辞」→ 重构为单一数据源：`faqSchemaItems` 数组同时驱动 schema 和页面渲染，尾部内链独立于答案文本

### 5. 消除 5 处 BreadcrumbList 重复标记
- BreadcrumbNav 组件本身已输出 BreadcrumbList，而 guides/guides 索引/explore/categories/paths 五个模板又叠加了 BreadcrumbSchema → 每页出现 2 份面包屑标记。已全部去重，现在全站每页恰好 1 份

### 6. 审计工具修正（`_geo_audit.mjs`，可持续复用）
- 解包 `@graph` 嵌套节点（此前 about 页的 FAQPage 被漏计）
- 可见 FAQ 识别补上「summary 即问句」模式（分类页的 FAQ 容器类名在外层，此前被漏计）

## 四、与教程打法的差异化判断（顶级 SEO 视角）

教程是通用入门打法；本站在几个关键点上**超出教程**且方向正确，应保持：

1. **Product schema 不适合本站**——考试不是商品。站内用的 `EducationalOccupationalCredential`（含 recognizedBy 颁发机构）+ `Course` + `HowTo`（注册步骤）是 schema.org 对这个垂类的正确建模，AI 引擎解析意图更准
2. **Article schema 带 citation + speakable**——引用锚点（Sources 章节）和可朗读摘要是教程没讲、但对 AI 引用率有实际影响的增强
3. **robots.txt 逐 Agent 显式 Allow**（GPTBot/PerplexityBot/ClaudeBot/Google-Extended/Applebot-Extended 等 15 个）——大多数站点默认屏蔽 AI 爬虫，主动声明允许是被引用的前置条件
4. **sitemap lastmod 用每篇真实发布日期**而非构建时间戳——构建时间戳是 Google 会丢弃的噪音

## 五、后续建议（非本次范围）

1. **下一批发布时**：改 manifest 后必跑 `node _gen_llms.mjs`（与 `_gen_infographics.mjs` 并列的两个必跑脚本），llms.txt 会自动带上新发布的指南
2. **GEO 监控**：在 GSC 之外，可用 Perplexity/ChatGPT 实测「how much does the Security+ exam cost」类问题，观察引用是否出现；被引用的页面集中在 llms.txt 的 Start here 区块属正常
3. **guides 数字密度**（2.8/百词 vs exam 页 5.1）：三篇是方法论型文章，天然数字少；若后续新增 guides（如费用对比类选题），优先选可填充具体数字的题材

## 六、验证记录

- `astro build` 133 页零错误（沙箱外构建，60s 内）
- `_geo_audit.mjs` 全量审计：违规清单 5 项全为 0
- 抽查 dist 输出：guides 详情页（Article+FAQPage+4 Q&A+BreadcrumbList ×1）、guides 索引（ItemList ×3）、explore（ItemList ×8）、about（FAQPage 与可见文字 PASS）、分类页（可见 FAQ ×5）
- llms.txt 已在 dist 根目录，90 条指南条目带具体数字
