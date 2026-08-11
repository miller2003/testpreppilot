# 州级考试页面排查简报（2026-08-06）

> 用户疑问：之前让 AI 做了「两千多个州×考试」页面，现在站点只看到 ~650 页，州级页面去哪了？有没有内容？

## 结论一句话
**页面没丢，内容也没丢——是被「发布门禁」卡着没放出站。** 数据层有 2599 个州级考试条目（即用户说的「两千多个」），2473 个已写好内容但**未发布**，只有 126 个发布了。

## 数据事实
| 维度 | 数量 |
|---|---|
| `allExamsFull`（数据层全集） | **5785**（国家级 3186 + 州级 **2599**） |
| `allExams`（实际建页用的子集） | 558（国家级 432 + 州级 **126**） |
| 发布清单 `release-manifest.mjs` 已放行 slug | 551（国家级 427 + 州级 124） |
| **未发布州级页** | **2473** |
| 未发布州级页中「带真实 facts + blurb」的 | **2473 / 2473（100%）** |
| 已发布州级页在 `dist` 实际渲染 | 123（另 3 个走 /paths/ 或 /{state}/ 变体） |
| 未发布州级页在 `dist` 渲染 | 0（符合预期） |

## 机制（为什么看不见）
`src/data/examCatalog/index.mjs` 第 167–170 行：
```js
const allExamsFull = buildCatalog();          // 5785 条全集
export const allExams = allExamsFull.filter(
  (e) => isReleased(e.slug) || completedSlugs.has(e.slug)   // 只留已发布
);
```
页面路由（`exams/[slug].astro` 等）用 `allExams` 生成页面，所以只有被 `release-manifest.mjs` 的 `releases` 表里写了发布日期的 slug 才会建页。这是一个**分批灰度发布系统**（发布日期 2026-08-04 ~ 08-06）。

## 内容质量（州级页不是空壳）
抽样的未发布页 `alabama-real-estate-salesperson-license`：
- `facts.agency`: "Alabama Real Estate Commission (AREC)"
- `facts.fee`: "≈$328.25 in state fees"
- 还有 `stateNote` / `compactMember` / `verified` 等州级专属字段

→ AI 确实为每个州×考试写入了**州级差异化真实数据**，不是模板空壳。

## ⚠️ 重要风险提示（来自本轮 SEO 审计）
州级考试页**近重复度极高**：全站 224 对 ≥ 0.70 Jaccard（门口页红线），分布在 36 个高相似簇 / 138 页。这正是发布系统选择**分批灰度**而非一次性放出 2473 页的原因。

**若直接把 2473 个未发布州级页全部放出，可能触发 Google 的「 doorway / thin content 」惩罚，连累整个域名。** 在批量发布前，必须先做考试族内的段落级差异化（州差异、雇主差异、进阶路径），把族内相似度压到 0.5 以下。

## 建议的下一步（待用户决定）
1. **查看清单**：导出 2473 个未发布州级的 slug + 所属考试族，确认内容就绪度。
2. **分批发布**：若坚持要放，按考试族小批量（每批 ≤ 几十）加入 `release-manifest.mjs`，并监控 Search Console 索引/排名。
3. **先治本**：优先做州级页差异化（解决 3.1/3.2 的近重复风险），再规模化发布。
4. 8 个 flagship 完整指南 + 550 stub 页始终在线（经 `credentials.ts` 路由）。
