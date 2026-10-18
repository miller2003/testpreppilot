# SEO / GEO 修复落地记录 — 2026-10-18

配套审计报告：`SEO-GEO-AUDIT-2026-10-18.md`
范围：除 E-E-A-T 资产（真人审核人、真实用户评价）外，审计报告中的 P0 / P1 / P2 全部落地。
构建：`npm run build` 通过，540 页，Pagefind 重新索引 538 页。

---

## 一、修复前后对比（实测）

| 指标 | 修复前 | 修复后 |
|---|---|---:|
| 指向 404 的内链 | 16 处（6 个页面） | **0** |
| JSON-LD 中指向 404 的 URL | 8 条 | **0** |
| canonical 与 200 URL 不一致 | 533 | **0** |
| sitemap 无斜杠 URL（会 308） | 533 | **0** |
| `Person.name` 为整句的 `reviewedBy` | 447 | **0** |
| 标题 >60 字符 | 36 | **15**（全是名称本身就超长的考试名） |
| 描述 >160 字符 | 23 | **0** |
| `/best/*` 页面标题长度 | 79–99 | **50–60** |
| `/best/*` 页面描述长度 | 192–213 | **150–157** |
| `llms.txt` 体积 | 130 KB / 548 链接 | **30 KB / 229 行** |
| `llms.txt` 中 `/paths` 旗舰指南 | 0 | **8** |
| 首页 HTML | 651 KB | **486 KB** |
| 首页内联搜索索引 | 185 KB | **21 KB**（外置） |
| 独立 `og:image` | 2 | **23**（20 领域 + 榜单 + 2 通用） |
| RSS 体积 / 条目 | 190 KB / 496 | **26 KB / 60** |
| RSS 中的死链 | 8 | **0** |
| `preconnect` / 字体阻塞链 | 无 / 二级串行 | **有 / 一级** |
| 站点地图 URL 数 | 534 | 533（`/explore` 已合并） |

---

## 二、逐项改动

### P0-1　8 个旗舰证书的 404 内链

| 文件 | 改动 |
|---|---|
| `src/data/examCatalog/payRanking.mjs` | `url` 改用 `e.href`，不再拼 `/exams/${slug}`（影响 15 个 `/best` 页） |
| `src/pages/categories/[id].astro` | 对比表、付费榜、分组列表、两处 `ItemList` 共 5 处改用 `href` |
| `src/pages/index.astro` | 首页 `CollectionPage.mainEntity.itemListElement` 改用 `e.href` |
| `public/_redirects` | 新增 8 条 `301 /exams/<slug> → /paths/<slug>/` 兜底 |

验证：`dist/index.html`、`categories/{accounting,real-estate,trades,workplace-safety}`、`best/{accounting,trades,workplace-safety}` 中对 `/exams/<completed>` 的引用 **全部为 0**。

### P0-3　`reviewedBy` 数据模型

`src/pages/exams/[slug].astro`：新增 `reviewerIsPerson` 判定（长度、词数、是否含句读），只有真正的短人名才输出 `Person`；否则输出 `{"@id": ".../#editorial-board"}`（Editorial Board 组织节点）。447 个句子型"人名"→ 0，477 页统一指向真实承担责任的实体。
核对说明仍在页面 byline + Sources 中可见，不再污染结构化数据。

### P1-1　trailing slash / canonical 一致性

- `astro.config.mjs`：`trailingSlash: 'never'` → **`'always'`**（Cloudflare Pages 实际把 `/x` 308 到 `/x/`，声明必须与 200 一致）。
- 新增 `src/lib/url.ts`：`canonicalForm()` 唯一定义。
- `SEOHead.astro`、`BaseLayout.astro`：canonical、`og:url`、`WebPage.@id` 全部走该函数。
- sitemap：`@astrojs/sitemap` 在非 `never` + `format: 'directory'` 下自动补斜杠 → 533 条全部带斜杠。

### P1-2　标题 / 描述模板

- `src/pages/best/[field].astro`、`best/index.astro`：改用 `buildTitle()` + `clampDesc()`，去掉 `| TestPrepPilot` 后缀。
- `src/pages/guides/[slug].astro`：同上（82 → ≤60）。
- `src/pages/reviewers.astro`、`data/index.astro`、`methodology.astro`、`about.astro`、`index.astro`：标题/描述收敛到限值内。

### P1-3　llms.txt 治理

`_gen_llms.mjs` 重写：

- `llms.txt`：8 篇旗舰指南置顶 → 12 篇最深指南 → 19 个领域各 4 篇 → 导航/榜单/机器接口 → `## Optional`（信任页与 auth.md）→ 引用格式。**30 KB**。
- 新增 `public/llms-full.txt`：完整 485 篇，**121 KB**，在 `llms.txt` 首屏指向。
- "as of" 日期改用 `release-manifest` 最新发布日（原来用 `new Date()`，每次构建都变）。
- 修掉 `57 questions (…) questions` 的重复词。
- `_headers` 为 `llms-full.txt` 显式声明 `text/plain`。
- `astro.config.mjs` 的 `astro:build:start` 钩子改为先跑 `_gen_llms.mjs` 再跑 `_gen_agent_surface.mjs`；`package.json` 的 `prebuild` 去重，避免同一次构建跑两遍。

### P1-4　字体加载

- `src/styles/reset.css`：删除 `@import url(fonts.googleapis…)`（它使字体 CSS 必须等 23 KB 主样式表下载并解析后才被发现）。
- `src/components/SEOHead.astro`：`preconnect` ×2 + `<link rel="stylesheet">`，并裁掉未使用的 italic 500 轴。

### P1-5　`/explore` 合并

- 删除 `src/pages/explore.astro`（324 词、8 条链接、与首页同意图、sitemap 却给 0.9）。
- `public/_redirects`：`/explore → / 301`。
- 引用改向：`Footer`（该位改为 `/best/`，给 15 个榜单页一个全站入口）、`404.astro`、`PathFinder.astro`、`guides.astro` 面包屑。
- `paths/[slug].astro` 面包屑去掉 Explore 层级（旗舰页现在 1 跳到首页）。

### P2 其余

| 项 | 改动 |
|---|---|
| P2-1 `/paths` 结构化数据 | `Course`（provider 是字面量 "Various Providers"）→ `Article` + `EducationalOccupationalCredential`（含真实颁发机构 `recognizedBy`）+ `datePublished/dateModified` + `citation` + `og:image` |
| P2-2 法律页 301 | `/affiliate-disclosure → /disclosure/`、`/privacy-policy → /privacy/` |
| P2-3 OG 图 | `_gen_og.py` + 新增 `_gen_og_manifest.mjs`（从 catalog 取领域，避免硬编码）：生成 20 张领域卡 + 1 张榜单卡，接入分类页与榜单页 |
| P2-6 部署配置 | `vercel.json` 加上 `$comment` 说明其非权威、`_redirects` 才是生效文件（未删除，避免破坏可能存在的预览流水线） |
| P2-7 首页体积 | 搜索索引外置为 `/data/search-index.json`（新 endpoint `src/pages/data/search-index.json.ts`，共享 `src/lib/searchIndex.ts`），首次聚焦搜索框才拉取，并做了竞态保护 |
| P2-8 robots.txt | 删除 `Crawl-delay: 1`（Google 忽略、Bing 会真的限速）与非标准 `Agentmap:` |
| 附加：RSS | 只留有日期的实质页面、补 `pubDate`、按日期倒序截断 60 条、`lastBuildDate` 用最新内容日；修掉 8 条指向 404 的 `/exams/<completed>` |
| 附加：文案 | `category.name.toLowerCase()` 会把 "IT, Cloud & Cybersecurity" 印成 "it, cloud &…" → 新增 `lowerLabel()`；单数化 "1 exams" / "There are 1 credentials" |

---

## 三、新增文件

| 文件 | 作用 |
|---|---|
| `src/lib/url.ts` | canonical 形式的唯一定义 |
| `src/lib/searchIndex.ts` | 自动补全索引（页面与 endpoint 共用） |
| `src/pages/data/search-index.json.ts` | 索引的静态端点 |
| `_gen_og_manifest.mjs` | 从 catalog 输出领域清单给 Python |
| `public/llms-full.txt` | 全量指南索引 |
| `public/og/*.png` | 21 张领域/榜单社交卡 |

## 四、删除文件

| 文件 | 原因 |
|---|---|
| `src/pages/explore.astro` | 与首页重复，已 301 合并 |

---

## 五、上线检查清单

1. `npm run build`（已通过：540 页）。
2. 部署后抽查：
   - `GET /exams/cpa-exam` → 301 → `/paths/cpa-exam/`
   - `GET /exams/sat-exam` → 308 → `/exams/sat-exam/`，页面 canonical 应为 `…/exams/sat-exam/`
   - `GET /explore` → 301 → `/`
   - `GET /llms-full.txt` → `Content-Type: text/plain`
   - `GET /data/search-index.json` → 200，且首页搜索框首次聚焦后才请求
3. GSC 重新提交 `sitemap-index.xml`（URL 已带斜杠，全部为 200）。
4. 观察 2 周：索引页数、`/paths/*` 的展示量、"Alternate page with proper canonical" 报告应消失。

## 六、仍未处理（属于 E-E-A-T，按要求后置）

- `/about` 上 6 条虚构用户评价（`about.astro:82` 起的 `reviews` 数组）——**这是本次审计中唯一未修的 P0**，属于信任层风险，需要真实反馈素材才能替换。
- `/reviewers` 页面自述"names are placeholders"，且全站 0 位具名真人审核人；`reviewedBy` 目前指向 Editorial Board 组织节点。
- 外部实体锚点（`sameAs` 指向 LinkedIn / Wikidata / Crunchbase）——需要先有真实可核验的账号。
- GSC 验证 meta 线上缺失：`.env` 中有值但未进入构建产物，请确认是走 DNS 验证还是需要把 `PUBLIC_GSC_VERIFICATION` 注入构建环境。
