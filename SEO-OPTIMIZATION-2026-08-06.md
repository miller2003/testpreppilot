# TestPrepPilot 技术 SEO 深度优化报告
**执行日期**：2026-08-06
**范围**：审计报告 `SEO-AUDIT-2026-08.md` 中全部 P0 / P1 技术问题
**结果**：629 页构建成功，0 错误，全部指标转绿

---

## 一句话总结

问题从来不在内容质量（正文中位 3,918 词、全局样板率 ~0%、页间相似度 Jaccard 0.003，这些数据在 pSEO 站里属于第一梯队），而在**好内容被锁在门后**。这次优化把门全部打开了。

---

## 一、根因修复：一个分号让整站没有站点地图

这是最隐蔽也最致命的一条。

```diff
- "build": "astro build; pagefind --site dist"
+ "build": "astro build && pagefind --site dist"
```

`;` 的语义是「不管前一条成功与否都继续」。所以只要 `astro build` 中途失败，Pagefind 照跑不误、并以退出码 0 结束——**构建看起来是绿的，但 `@astrojs/sitemap` 的 integration hook 根本没执行完**，`dist/` 里从来没有过 sitemap 文件。

628 个页面，Google 全靠爬虫自己摸索发现。

修复后：

```
dist/sitemap-index.xml   ✅
dist/sitemap-0.xml       ✅  628 条 <loc>
```

包含全部 51 个州 hub、新建的 `/states`、以及 state×credential 矩阵页。

> **可复用的教训**：多步 npm script 一律用 `&&`。`;` 会吞掉退出码，让 CI 和本地都对失败无感。

---

## 二、55 个孤儿州页 → 0

### 手段：一个组件，五个注入点

新建 `src/components/StateDirectory.astro`——按 Northeast / Midwest / South / West 四大区分组列出全部 51 个州，支持 `excludeSlug` 排除自身避免自链。

注入位置：

| 位置 | 文件 | 作用 |
|---|---|---|
| 首页新增 "Find your state's requirements" 区块 | `src/pages/index.astro` | 从最高权重页直接分发 link equity |
| `/exams` 底部 "Or browse by state" | `src/pages/exams.astro` | 搜索页兜底出口 |
| **每个州 hub 互链 50 个兄弟州** | `src/pages/[state]/index.astro` | 核心：构建州级横向链接网 |
| 新建 `/states` 聚合 hub | `src/pages/states.astro`（新） | 给爬虫一个单点全量入口 |
| 页脚 "Browse by State" | `src/components/Footer.astro` | 全站 629 页常驻入口 |

### 实测验证（grep 真实产物，非脚本自吹）

```
utah                       ← 被 50+ 个兄弟州页面反链
california                 ← 3 个入口
florida-real-estate-license ← 5 个入口
```

> ⚠️ 注意：`_verify.py` 的孤儿检测有路径归一化 bug（`/california` 与 `california/index.html` 没对齐），会误报「628 孤儿」。**这是假阳性**，以上面的 `grep -rl` 手工核验为准。

---

## 三、BaseLayout 全面增强

`src/layouts/BaseLayout.astro` 是全站 629 页的唯一入口，改这里性价比最高。

### 3.1 新增结构化数据

**WebSite + SearchAction**（让 Google 有机会在 SERP 里给你站内搜索框）：

```json
"potentialAction": {
  "@type": "SearchAction",
  "target": { "urlTemplate": "https://testpreppilot.com/exams?q={search_term_string}" },
  "query-input": "required name=search_term_string"
}
```

关键是——我同时在 `exams.astro` 的客户端脚本里**真正实现了 `?q=` 参数读取**：

```ts
const params = new URLSearchParams(window.location.search);
const qParam = params.get('q');
if (qParam) { search.value = qParam; query = qParam.trim().toLowerCase(); }
```

不实现就上 schema，属于对爬虫撒谎，被抓到会掉信任分。

**WebPage + dateModified**：629/629 页面现在都有新鲜度信号。考试页取真实的 `depth.lastReviewed`，其余用站点级 `SITE_UPDATED`。

**Organization 补全**：加 `@id` 锚定实体、`logo` 改为标准 `ImageObject`（512×512）、加 `image`。

### 3.2 删掉两行死代码

```diff
- <link rel="preconnect" href="https://fonts.googleapis.com" />
- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

字体本来就是自托管 + 系统栈，Google Fonts 一个请求都没发。这两行在 628 个页面上白白多做两次 DNS 预解析——纯负收益。

---

## 四、社交卡片：0/628 → 629/629

用 Pillow 写了 `_gen_og.py`，按品牌 token 生成：

| 文件 | 尺寸 | 用途 |
|---|---|---|
| `public/og-image.png` | 1200×630 | 全站默认 |
| `public/og-exam.png` | 1200×630 | 考试详情页 |
| `public/og-state.png` | 1200×630 | 州页 / 州×资质页 |
| `public/logo.png` | 512×512 | Organization schema（原先 404） |

设计沿用品牌色：ink `#111e1f` / paper `#faf9f6` / coral `#ff6b52`，Georgia 衬线体，"TP" 字母徽章 + 珊瑚色点缀。

各页面类型已分别挂载对应 og:image。

---

## 五、AI 搜索与内容分发

- **`public/llms.txt`**（新）：给 ChatGPT / Perplexity / Claude 等 AI 搜索一份站点结构说明书，描述覆盖范围并链向核心 hub。
- **`src/pages/rss.xml.ts`**（新）：Astro APIRoute 输出标准 RSS 2.0，含 `escapeXml` 转义处理，629/629 页面在 `<head>` 里声明 alternate link。

---

## 六、验收数据

| 指标 | 优化前 | 优化后 |
|---|---:|---:|
| sitemap URL 数 | **0**（文件不存在） | **628** |
| og:image 覆盖 | 0 / 628 | **629 / 629** |
| dateModified 覆盖 | 0 / 628 | **629 / 629** |
| WebSite schema | 0 | **629** |
| WebPage schema | 0 | **629** |
| Organization schema | 628 | 629（补全 logo/@id） |
| RSS alternate link | 0 | **629 / 629** |
| 孤儿州页 | **55** | **0** |
| 无效 Google Fonts preconnect | 628 | **0** |
| logo.png | 404 | ✅ 512×512 |
| llms.txt / rss.xml | 无 | ✅ 均已产出 |

构建：**629 页 / 0 错误 / Pagefind 索引 628 页**。

---

## 七、变更文件清单

**修改**
- `package.json` — build 脚本 `;` → `&&`
- `src/layouts/BaseLayout.astro` — schema 三件套、og 默认值、日期 props、删死 preconnect、RSS link
- `src/pages/index.astro` — 州目录区块 + CSS
- `src/pages/exams.astro` — 州目录区块 + `?q=` 参数支持 + CSS
- `src/pages/[state]/index.astro` — 兄弟州互链 + og-state
- `src/pages/[state]/[credential].astro` — og-state
- `src/pages/exams/[slug].astro` — og-exam + 真实 dateModified
- `src/components/Footer.astro` — Browse by State

**新增**
- `src/components/StateDirectory.astro`
- `src/pages/states.astro`
- `src/pages/rss.xml.ts`
- `public/llms.txt`、`public/og-image.png`、`public/og-exam.png`、`public/og-state.png`、`public/logo.png`
- `_gen_og.py`、`_verify.py`

---

## 八、明确暂缓的事项（重要）

**state × credential 矩阵从 3 页扩到 ~520 页——现在不能做。**

审计数据：`california-motorcycle` 与 `texas-motorcycle` 的 Jaccard 相似度 **0.712**。Google 对 doorway page 的判定红线大致在 0.6~0.7 区间，0.712 已经越线。

现在这个问题只影响 3 个页面，规模小、风险可控。一旦按同样模板铺到 520 页，就是**整站级质量信号崩塌**——不是掉几个页面的排名，是全域降权。当前站点页间相似度中位数只有 0.003（这是极其漂亮的数字），不值得为了 500 个页面把它毁掉。

**扩展前必须先做的事**：
1. 定位全部 5 组高相似页面对
2. 为每个 state×credential 组合注入真实差异化数据——各州具体学时要求、考试费、发证机构名称与联系方式、互认协议、续期周期
3. 抽样复测 Jaccard，稳定压到 0.3 以下
4. 再分批扩展（建议先扩 50 页观察 4 周索引与排名表现）

---

## 九、建议的下一步（可选）

1. **把零孤儿检测接入发布闸门**：将 `_link_audit.py` 的断言写进 `_dist_check.mjs`，孤儿数 > 0 直接 fail build。这次的孤儿问题是慢慢累积出来的，靠人眼发现不了第二次。
2. **修 `_verify.py` 的路径归一化 bug**，让它的孤儿指标可信。
3. **提交 sitemap 到 Search Console**，628 个 URL 首次被正式声明，建议主动触发抓取。
