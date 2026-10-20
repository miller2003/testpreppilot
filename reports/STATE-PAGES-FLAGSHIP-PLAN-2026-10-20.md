# 州级考试页（51 辖区 × 51 模板）→ 旗舰质量 优化方案（2026-10-20）

> 交给执行 agent 的工作说明。S0 有两个决策需要用户先拍板，其余工作包可以按顺序领取。
> 所有数字由 `allExamsFull` + `research/index.mjs` + `release-manifest.mjs` 实测得出（2026-10-20）。
> 备注：之前说的"52 种模板"，实测 `stateTemplates.mjs` 是 **51 个**模板，每个都有 dossier。

## 0. 现状（实测）

| 指标 | 数值 |
|---|---|
| 州级条目（`buildStateExams()`） | **2,596**（另有 TX/CA/FL 房产 3 篇走 `/paths/` 旗舰） |
| 其中该州确实颁发（offered） | 2,309 |
| 该州**不颁发**（offered=false） | **287** |
| 已上线 | **0**（manifest 里只有 477 个全国性 slug） |
| 已有 depth 文件的州级 slug | 126 篇（集中在 CA 26 / TX 24 / FL 22 / NY 22 / OH 15 / PA 15）——**渲染层根本不读**（`[slug].astro` L168：`depth = mode === 'national' ? … : null`） |
| 原 `/[state]` 州首页 | 2026-09 因 doorway 问题（51 页平均相似度 98.3%）**已删除** |

**核心问题：州级页面本质是"1 份模板文章 + 3 个变量"。**

| # | 问题 | 数据 |
|---|---|---|
| S-P1 | **州独有内容只占 1–6%**。每份 dossier 共享正文 416–1,607 词；每个州独有的只有 agency + fee + note，note 中位数 **15 词**（P90 35 词）。同模板 51 页互相之间几乎就是复制粘贴 | 51/51 模板 |
| S-P2 | **"考试长什么样"表格显示的是全国区间**（"Commonly 60–100 multiple-choice questions"、"Typically 3–4 hours"、"Usually 70% (some states 75%)"），在一个标着 "Alabama" 的页面上不回答 Alabama 的问题 | 全部 |
| S-P3 | 费用 breakdown、时间线、申请步骤（route）、FAQ **全部是模板级**，没有一条是州级 | 全部 |
| S-P4 | agencyUrl 有 **1,141 / 2,314（49%）只是机构首页**；有的甚至是州政府总门户（如 WY 电工 → `wyoming.gov`） | — |
| S-P5 | 州级费用缺失：appraiser 0/51、RN 0/51、CNA 0/51、EMT 0/51、esthetician 1/51、nail 1/51、cosmetology-instructor 1/47、massage 3/46、pharmacy-tech 2/48；其余费用都是"≈"估算 | 9 个模板基本没有州级费用 |
| S-P6 | note 里留着研究草稿口吻，会原样上页面：例如 CA 电工 "…no separate journeyman tier — **verify**."；TX 电工整条 note 就是 "Journeyman lineman/electrician." | 散见 |
| S-P7 | 27/51 份 dossier 是 `confidence: medium`；只有 44 份标了 `verified` | — |
| S-P8 | 已有的 126 篇州级 depth 用的是**全国** BLS 薪资（CA 美发页写 "$35,250 national median"），没有用 BLS OEWS 的州级数据 | 126 |
| S-P9 | 287 个"本州不颁发"页面本质上是薄页（一句话结论 + 通用建议），但现在代码里是 `indexable` | 287 |
| S-P10 | 假新鲜度：Sources 区写 `Last compiled {new Date().getFullYear()}`，每次构建都会自动"更新" | `[slug].astro` L1243 |
| S-P11 | 州级模式没有学习资料块（`hasPrep` 只在 national 模式生效）、没有作者署名、没有 depth 板块 | — |
| S-P12 | 发布工具链把州级行排除在外：`_candidates_now.mjs`（"state rows never eligible"）、`_geo_audit.mjs classify()` 没有州级类型 | — |

**结论**：照现在的数据把州级页放出去，就是 2,309 篇近似重复的门口页，会重演 2026-09 `/[state]` 被判 doorway 的问题，而且会拖累 477 篇全国页。要让"每个州级页面都是旗舰"，必须同时改两件事：
1. **数据模型**：从"模板正文 + 3 个变量"升级为"每个州一份结构化档案"（S2）；
2. **信息架构**：把真正共享的内容（备考计划、题型、常见错误）**移到模板级 hub 页，只写一次**；州页只放州级内容，加一段短摘要链接到 hub（S1）。

## 1. 旗舰标准（Definition of Done，每个州级页）

由 S4 写成 `scripts/quality/stateGate.mjs`，不过闸不准上线。

1. **州独有内容占比 ≥ 55%**：去掉州名 / 州代码之后，本页文字中不出现在同模板其他州页面上的 token 比例。
2. **去重**：与同模板任一其他州页 Jaccard < 0.45；与全站任一页 < 0.60。
3. **考试表 100% 州级**：考试服务商、题数（全国部分 / 州部分分开写）、时长、及格线、考试费、是否有实操、语言——每一项都是**本州值**，并带 sourceUrl。全国区间只能作为对照列出现（"National range"）。
4. **费用逐项列出**：申请费、考试费、指纹 / 背调费、执照发放费，每项都有本州数字 + 出处；不允许"≈"。确实只能估算的，要写明估算依据。
5. **本州申请步骤**：写出门户名称和 URL（如 eLicense Ohio、TDLR Online），指纹方式（Live Scan / IdentoGO / FieldPrint），审批时长。
6. **续证**：周期、CE 学时、必修主题、费用。
7. **互认**：本州的背书 / 互认规则 + 有协议的州名单 + compact 状态。
8. **州级薪资**：BLS OEWS 该州 SOC 中位数和就业人数，附全国对比，年份 + URL。
9. **本州 FAQ ≥4 条**（不能是模板 FAQ 换个州名），来自该州的真实搜索问题。
10. **近期变化**：近 3 年本州的法规 / 学时 / 考试变化（如 CA AB 3211 把美容学时从 1,600 降到 1,000）。没有变化也要写"截至 YYYY-MM 无变化"并给出处。
11. **出处**：≥4 条深链（不能是首页），每条带 `checkedOn`；页面上显示的核验日期取最早的 checkedOn。
12. **零草稿语**：不能出现 "verify"、"TBD"、"≈"（除非有说明）、"check with the state" 这种托辞作为唯一答案。

## 2. 工作包

### S0 — 需要用户拍板的两个决策（先定再动工）

**决策 A：信息架构（推荐方案）**
- 新增 51 个**模板 hub 页**：`/exams/<template-key>-license-by-state`（例："Cosmetology License Requirements by State (2026)"）。内容包括：51 州对比总表（学时 / 费用 / 考试服务商 / 是否有实操 / 互认）、可筛选表格、地图、共享的备考内容（备考计划、题型、常见错误、考试当天），再加上"哪些州不颁发、改由谁管"。
  - 这类"X requirements by state"本身就是高搜索量词，内容天然独特（对比表只有聚合起来才有），**hub 是州级体系里最先上线的旗舰页**。
- 州级页只放州级内容 + 一段 120 词左右的"如何备考"摘要，链接到 hub 的对应锚点。
- 本州达到 ≥3 篇已上线州级页后，再生成 `/states/<state>` 聚合页（沿用 2026-09-02 的结论："考试驱动，而非数据全量驱动"）。

**决策 B：287 个"本州不颁发"页面**
- 推荐：**不单独建页**，放进 hub 的"不颁发的州 + 实际由谁管"小节（数据保留）。在 `getStaticPaths` 过滤掉 `offered === false`。按 2026-09-02 的经验：不要"noindex 但保留"，直接不生成。
- 例外：搜索量确实大的组合（如 "Colorado real estate license"——CO 叫 broker license 而不是 salesperson），应当改写成"本州实际对应的执照"页，指向正确的执照，而不是"本州没有"。由 S2 研究时顺手标出这些组合（字段 `redirectTo` 或 `actualCredential`）。

### S1 — 数据模型 v2（1 个 agent，先于 S2 研究；约半天）

**改动文件**
- `src/data/examCatalog/RESEARCH_SCHEMA.md`：新增 v2 每州字段（不能破坏 v1；v1 字段继续可用）：

```js
states: {
  OH: {
    // v1（保留）
    agency, agencyUrl, fee, note, compactMember,
    // v2（新增）
    exam: {
      vendor: 'PSI', vendorUrl: 'https://…',
      parts: [{ name: 'National', questions: 80, time: '120 min', pass: '70%' },
              { name: 'Ohio law', questions: 40, time: '60 min', pass: '70%' }],
      fee: '$60', practical: '4-hour practical on mannequin', languages: ['English', 'Spanish', 'Vietnamese'],
      sourceUrl: 'https://…candidate-bulletin.pdf'
    },
    education: { hours: '1,500', breakdown: '…', onlineAllowed: 'up to 250 hrs', apprenticeship: '…', sourceUrl },
    experience: '…',
    eligibility: { minAge: 16, education: '10th grade', other: '…' },
    background: { method: 'Biometric fingerprint (WebCheck)', fee: '$22 BCI + $13.25 FBI', sourceUrl },
    fees: [{ item: 'Application', fee: '$75', sourceUrl }, …],
    application: { portal: 'eLicense Ohio', portalUrl, steps: ['…'], processingTime: '2–4 weeks', sourceUrl },
    renewal: { cycle: '2 years', ce: '8 hours incl. 1 hr HIV', fee: '$60', sourceUrl },
    reciprocity: { rule: 'Endorsement with 1,500 hrs or 1 yr experience…', agreements: ['…'], sourceUrl },
    stats: { licensees: 64000, passRate: { value: '…', year: 2025, sourceUrl } },  // 只写官方数字
    wages: { soc: '39-5012', median: '$…', employment: 12345, year: 'May 2024', sourceUrl },  // BLS OEWS 州表
    recentChanges: [{ year: 2024, change: '…', sourceUrl }],
    localNuance: '…',                  // 例：NYC / Chicago 的地方执照
    stateFaqs: [{ q, a }],             // ≥4
    actualCredential: null,            // 决策 B 例外：本州真正对应的执照名 + slug
    sources: [{ label, url, checkedOn: '2026-10' }]
  }
}
```

- `research/index.mjs` 的 `factsFor()`：把 v2 字段原样透传，并计算 `stateUniqueness`（S4 用）。
- `index.mjs` 的 `buildStateExams()`：`offered === false` 的行加 `buildPage: false`（决策 B）；有 `actualCredential` 的行改写 name / blurb。
- 新增 `research/v2/<template-key>.mjs`：每个模板一个文件，只放 `states` 的 v2 增量，在 `index.mjs` 里深合并进 v1 dossier。**这样 S2 的多个 agent 互不冲突。**

### S2 — 州级研究（主体工作量：按模板分包，1 个 agent = 1 个模板 × 全部颁发州）

**为什么按模板而不是按州分包**：同一模板各州的数据结构相同，一个 agent 做完 51 州可以顺手产出 hub 的对比总表（S3），口径统一；文件也按模板划分，互不冲突。

**每包输出**：`research/v2/<template-key>.mjs`，覆盖该模板 `states` 里所有 offered 的州（每包 12–51 个州）。规则：
- 先找该州的**考生手册（candidate bulletin，PSI / Pearson VUE / Prometric）**——题数、时长、及格线、费用、实操一般都在里面；再找机构费用表、申请门户、续证规则。
- BLS OEWS 州级数据：`https://www.bls.gov/oes/current/oes_<st>.htm` 按 SOC 取值（"May 2024"），每州一条。
- 官方公布了通过率的要收集（如 TREC 按学校公布、FL DBPR 公布、CA DRE 公布、各州 bar 公布、NCSBN 按州公布 NCLEX）。没有公布就不写，**不准编造**。
- 同时修掉 v1 note 里的草稿语（S-P6）、把首页型 agencyUrl 换成执照页深链（S-P4）、补齐缺失的州级费用（S-P5）。
- 每条数据填 `checkedOn`；出处给 PDF 时要写页码。
- 研究方法沿用 `_agent_brief.md`（WebSearch / WebFetch，以官方来源为准）。

**模板优先级（按搜索量 × 商业价值，前 3 波）：**
- 第 1 波（10 个）：real-estate-salesperson、cdl、drivers-permit、cosmetologist、insurance-life-health、notary-public、cna-certification、rn-licensure、journeyman-electrician、bar-exam
- 第 2 波（12 个）：insurance-property-casualty、real-estate-broker、teacher-certification、pharmacy-technician、emt-certification、barber、esthetician、concealed-carry、security-guard、food-handler、food-manager、massage-therapist
- 第 3 波：其余 29 个

**验收**：`node --check` 通过；`stateGate --template <key>` 的数据部分（第 3–8、10–12 条）通过；随机抽 3 个州人工比对一次官方页面。

### S3 — 模板 hub 页（每个模板在 S2 完成后立即做；可由同一个 agent 接着做）

- 新建 `src/pages/exams/[hub].astro`（或在 `[slug].astro` 的 getStaticPaths 里加 hub 类型，**推荐新文件，避免碰 `[slug].astro` 的主体**），数据来自 dossier v1 共享正文 + v2 各州聚合。
- 板块：Quick answer（"X 州里最严 / 最松的是…"，全部由数据计算得出）→ 51 州对比总表（可排序、可筛选）→ 地图（SVG，按学时或费用着色）→ 共享内容（概述、资格、题型、备考计划、常见错误、考试当天——从已有的 126 篇州级 depth 里提取共性，整合为一份，不再在 51 页重复）→ compact / 互认 → 不颁发的州 + 实际由谁管 → FAQ（模板级）→ Sources。
- Schema：`Article` + `ItemList`（每个州页）+ `FAQPage` + `Dataset`（对比表）。
- 写入 `_geo_audit.mjs classify()`（新页面类型），`_gen_llms.mjs` 加入 hub。
- 验收：hub 页 ≥4,000 词；对比表 ≥8 列且全部有数据；`verify:content` 通过。

### S4 — 州级渲染 + 质量闸（1 个 agent，S1 之后、可与 S2 并行）

**新组件，不改 `[slug].astro` 的主体结构**（项目约定 `/exams/[slug]` 不做基础性改动；以下只在 `mode === 'researched'` 分支里插入组件）：
- 新建 `src/components/StateExamSections.astro`，渲染 v2 字段：
  - 本州考试表（每个部分一行）+ "National range" 对照列；
  - **"{State} 与其他州相比"**：由数据计算排名（"学时 1,500，51 州中第 18 严"、"考试费高于 73% 的州"、"邻州：…"），这是天然独特、而且对读者真正有用的内容；
  - 逐项费用表、本州申请步骤（门户 + 指纹方式 + 审批时长）、续证、互认、州级薪资（附全国对比）、近期变化、本州 FAQ；
  - 备考摘要（120 词）+ 链接到 hub 锚点。
- `[slug].astro` 的小改动：
  - L168 让 state 模式也读 depth（仅限 depth 里**州级**的板块，例如 examDay 的本州考场规则）；
  - L1243 `Last compiled {new Date().getFullYear()}` → 用 `sources` 里最早的 `checkedOn`；
  - 考试表：有 v2 时用 v2 本州值，否则不渲染（不能再显示全国区间冒充本州）；
  - FAQ 和 FAQPage schema：本州 FAQ 在前，模板 FAQ 最多保留 2 条；
  - Schema：加 `EducationalOccupationalCredential.recognizedBy`（本州机构）+ `areaServed`（State）；
  - `hasPrep`：如果 `mometrixFor(slug)` 或模板级产品存在，state 模式也渲染。
- 新建 `scripts/quality/stateGate.mjs`，实现 §1 的 12 条；独有占比和 Jaccard 基于**构建后的 dist HTML 正文**计算（复用 `_seo_dup.mjs` 的分词）。输出 `reports/quality/state-gate.json`。
- 修改 `_candidates_now.mjs`：州级行在过了 `stateGate` 之后才允许进入候选池；`_deploy_batch_55.mjs` 接入闸门。
- `_gen_infographics.mjs` 需要支持州级行（`[slug].astro` 对 infographic 是无条件 `<img>`，缺文件就是坏图）。

### S5 — 已有的 126 篇州级 depth 文件（S2 对应模板完成后）

- 薪资：全国 BLS → 本州 OEWS（附全国对比）。
- 备考计划、题型、常见错误这类跨州通用的内容：**合并进 hub**，州页里删掉或缩成摘要（否则 6 个州 × 同模板会互相重复）。
- examDay 只保留本州考场 / 服务商特有的规则。
- 过 stateGate。

### S6 — 发布（每个模板：先 hub，再州页）

1. hub 上线（1 篇）。
2. 该模板过闸的州页按人口 / 搜索量排序，**每天 ≤15 篇、每波 ≤50 篇**，走现有的 manifest 流程（`_deploy_batch_55.mjs` → `_gen_infographics.mjs` → `_gen_llms.mjs` → `astro build` → `_verify55.mjs` → `verify:content` → `verify:agent`）。
3. 每波上线 14 天后看 GSC：索引率 < 60% 或出现 "Duplicate, Google chose different canonical" 就暂停下一波，回 S2 / S4 加强差异化。
4. 某州达到 ≥3 篇州级页 → 生成 `/states/<state>` 聚合页（单独立项）。

## 3. 执行顺序与并行建议

```
S0 用户决策
 ├─> S1 数据模型（单独，先做）
 │    ├─> S2 第 1 波（10 个模板，最多 6 个 agent 并行，每个 1 个模板）
 │    │    └─> S3 hub（同一 agent 接着做）──> S5 ──> S6 发布
 │    └─> S4 渲染 + 闸（与 S2 并行）
 └─> S2 第 2、3 波按同样流程滚动
```

- S2 是主要工作量：约 2,309 个州 × 模板组合，每个约 15–25 分钟研究时间。建议第 1 波（10 个模板，约 480 个州页）跑通全流程并看到 GSC 反馈后，再启动第 2、3 波。
- **与全国页方案的关系**：全国页的 N0 + N1（修复 298 篇已上线的骨架页）优先于本方案的 S2；州级是新增库存，全国页的问题是线上正在伤害站点。

## 附录 — 复现基线

```bash
node scripts/quality/baseline-coverage.mjs "$(pwd)"      # 州级：独有占比 / 字段覆盖 / 首页型 URL
node scripts/quality/baseline-state-depth.mjs "$(pwd)"   # 126 篇州级 depth 的分布与样例
```
