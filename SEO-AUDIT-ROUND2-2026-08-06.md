# 深度 SEO 审计报告（第二轮）— testpreppilot-v2

> 审计基准：构建产物 `dist`（650 个 HTML 页面，Pagefind 索引 649 页 / 29142 词）
> 审计方法：全站 HTML 解析 → 有向链接图 → PageRank(d=0.85, 60 轮, 悬空节点再分配) + BFS 点击深度 + Jaccard 6-gram 近重复检测 + 标题/描述长度扫描
> 对照：本轮开始前的基线数据（见各表「修复前」列）

---

## 一、核心结论

这一轮把上一轮遗留的**内链图（link graph）结构性缺陷**全部修掉了，并用工具量化了每一项改善。整体从「首页集权、长尾页饿死、重复内容信号明显」转变为「权重合理下沉到赚钱页、零孤儿、标题/描述全部达标」。

| 指标 | 修复前 | 修复后 | 结论 |
|---|---|---|---|
| 不可达页面（真孤儿） | 4 | **1（仅 /404）** | ✅ 业务正确的 404，非缺陷 |
| 静态/法务页吞掉的 PageRank | 32.86% | **15.14%** | ✅ 单页权重从 61× 降到 22× |
| 考试详情页 PR 总占比 | 29.55% | **38.42%** | ✅ 赚钱页吃到了权重 |
| 仅 1 个入链的考试页 | 33 / 550 | **0 / 550** | ✅ 长尾页全部有稳定入链 |
| 类目 hub 入链 | 1 / 个 | **34 ~ 649 / 个** | ✅ 中间层被激活 |
| title > 60 字符 | 487 / 629 (77%) | **19 / 650 (2.9%)** | ✅ 余下均为官方全称（关键词前置，不宜截断） |
| 重复 title（同内容双 URL） | 2 组 | **0** | ✅ 消除重复内容信号 |
| description > 160 / < 50 | 65 / 9 | **0 / 0** | ✅ 全部进入 SERP 最佳区间 |

---

## 二、本轮发现并修复的问题

### 2.1 真孤儿根因：一个参数类型 bug（P0）
`src/pages/[state]/index.astro` 里 `getCredentialsByState(stateInfo.slug)` 把 `"california"` 传给函数，但函数内部 `.toUpperCase()` 比对 `c.states` 里的 `"CA"` → 永远不匹配 → 3 个州级凭证页（`/california/`、`/florida/`、`/texas/...-real-estate-license`）成为**真·不可达孤儿**（depth=99，0 入链）。

**修复**：改用 `stateInfo.code` 调 `getCredentialsByState` 与 `getExamsByState`，并补齐州级考试分组、邻州导航、`ItemList` schema、动态 `lede`/`pageTitle`/`pageDesc`。孤儿 4 → 1。

### 2.2 PageRank 集权（P0，已再平衡）
修复前 10 个静态/法务页吃掉 32.86% 的站内权重（单页权重是考试页的 61 倍），而 550 个赚钱页只有 29.55%。主因是 footer 把 equity 引向了 `#anchor` 死锚点，类目 hub 又只有 1 个入链。

**修复组合拳**：
- `Footer.astro`：7 个 `/explore#<id>` 死锚点 → 真实 `/categories/<id>` 链接（按总量取前 8）。
- 新增 `TopicHubs.astro`（25 个类目 hub + /exams + /states），注入 9 个静态页，把 sink 变成 pass-through 节点。
- `categories/[id].astro` 重写为由 `buildDirectory()` 驱动（25 个真实类目 / 558 个考试），加 `CollectionPage`+`ItemList` schema、兄弟类目导航、按州交叉链接。

效果：静态页 PR 32.86% → 15.14%，类目 hub 入链 1 → 34~649，考试页 PR 29.55% → 38.42%。

### 2.3 标题工程化（P1）
新增 `src/lib/seoTitle.ts`：`buildTitle(name, suffixes)` 按预算从最长后缀往下选，**绝不截断关键词**。覆盖 `examTitle`/`stateTitle`/`categoryTitle`/`credTitle`/`stateCredTitle`。title > 60 从 77% 降到 2.9%。

### 2.4 重复标题 bug（P1，已消除）
`credTitle` 与 `stateCredTitle` 在「州名已嵌入凭证名」时产出**完全相同的标题**（加州/佛州房地产证同 title），属典型重复内容信号。改为州专属后缀（`— State Requirements` / `— State Guide`），重复 title 2 组 → 0。

### 2.5 描述长度收口（P2）
- 类目/州 hub 描述过长（161–201）→ 统一 `clampDesc()` 收口到 ≤155（词边界截断）。
- `/paths` 描述过短（21–49）→ 改写为「要求+考试形式+费用+资格+官方报名步骤」句式并收口。
- `/exams`、`/editorial-policy`、`/privacy` 描述一并修正。
- 结果：description >160 从 65 → 0，<50 从 9 → 0。

### 2.6 考试详情页 Related Exams 内链模块（P1，最大单点增益）
原 related 区块只取「同州同类目前 8」，且只链 stub 页。新增 `src/lib/relatedExams.mjs`：**三维度**（同州同认证族 / 同类目 / 同认证机构）+ **滚动窗口**选 8–10 条，避免每页都链字母序前几个制造新权重黑洞。`exams/[slug].astro` 渲染为 `RelatedExams.astro`。

效果：考试页入链 p25 从 6 → 12，0 页仅 1 入链，锚文本多样性提升。

### 2.7 Sitemap 优先级分层（P2）
`astro.config.mjs` 的 `sitemap()` 增加 `changefreq:'weekly'`、`lastmod` 与 `serialize()` 分层：
`/`=1.0 daily → `/exams`·`/states`·`/explore`=0.9 → `/categories/`·`/exams/`=0.8 → 州/凭证=0.6~0.7 → 信任页=0.5 → 法务/样板=0.2 yearly；并剔除 `/affiliate-disclosure`（已合并）。

---

## 三、已量化但仍未根治的两类内容风险（需后续内容投入，非本轮工程范围）

> 这两项是**内容质量**问题，不是链接工程能解决的。已用工具量化，写入待办。

### 3.1 州 hub 页近重复（结构性样板）
51 个州页平均 Jaccard **0.827**（每个州页 70.5% 的 6-gram 是全站共享样板）。本轮重写已加入真实州级考试清单 + 州事实 dl，降到 **0.553 / 48.5% 共享**，但仍有 **205 对 > 0.7**。剩余样板来自每个州都渲染的同一批「全国凭证卡片」。
**建议**：给州页补 `stateSpecificData` 里真正的州级差异段（费用、有效期、续证、独有问题），而非只在列表层差异化。

### 3.2 考试页近重复簇（门口页红线风险）
全站 MinHash/LSH 扫描：**224 对 ≥ 0.70 Jaccard**（门口页红线），分布在 36 个高相似簇 / 138 页（registered-nurse、EMT、cosmetology、notary、CDL、insurance、teacher-exams 等，每族 5–6 个同模板页）。深度数据本身有差异，但共享模板骨架 + 全国 BLS 薪资段 + FAQ。
**建议**：每个认证族内做段落级差异化（州差异、雇主差异、进阶路径），把族内相似度压到 0.5 以下，再考虑曾受阻的「州×凭证矩阵扩张（3 → ~520 页）」。

---

## 四、本轮改动文件清单

**新增**
- `src/lib/seoTitle.ts` — 自适应标题/描述构建器
- `src/lib/relatedExams.mjs` — 三维度相关考试推荐器（滚动窗口）
- `src/components/TopicHubs.astro` — 类目/考试/州 hub 导航块
- `src/components/RelatedExams.astro` — 考试页相关考试渲染
- `_seo_graph.mjs` / `_seo_deep.mjs` / `_seo_dup.mjs` / `_seo_dup2.mjs` / `_chk_titles2.mjs` / `_inlinks.mjs` / `_dup_pairs_check.mjs` — 审计脚本

**修改**
- `src/pages/[state]/index.astro` — 孤儿根因修复 + 真实州架构
- `src/pages/categories/[id].astro` — 25 类目 hub 重建
- `src/pages/exams/[slug].astro` — 面包屑锚点→真实类目链接 + 标题 + Related Exams
- `src/pages/paths/[slug].astro` — 标题/描述工程化
- `src/pages/[state]/[credential].astro` — 标题差异化 + 兄弟州导航
- `src/pages/exams.astro` / `editorial-policy.astro` / `privacy.astro` — 描述修正
- `src/components/Footer.astro` — 死锚点→真实类目链接
- `about/guides/explore/reviews/how-it-works/editorial-policy/disclosure/affiliate-disclosure.astro` — 注入 TopicHubs
- `astro.config.mjs` — sitemap 优先级分层

---

## 五、发布前建议的收尾项（可选）
1. 给 `dist` 清理写进 `_dist_check.mjs` 一个「零孤儿」断言，作为发布门禁。
2. 州页补州级差异段（解决 3.1 的 205 对 >0.7）。
3. 考试族段落级差异化（解决 3.2 的 224 对 ≥0.70），之后再做州×凭证矩阵扩张。
