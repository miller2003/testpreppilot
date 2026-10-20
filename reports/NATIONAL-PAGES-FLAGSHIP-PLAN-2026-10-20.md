# 全国性考试页 → 旗舰质量 优化方案（2026-10-20）

> 交给执行 agent 的工作说明。先读完"现状"和"旗舰标准"，再领取自己的工作包。
> 所有数字由 `allExamsFull` + `release-manifest.mjs` + `depth/index.mjs` 实测得出（2026-10-20）。

## 0. 现状（实测）

| 指标 | 数值 |
|---|---|
| 全国性考试条目 | 3,186（全部有 record） |
| 已上线（manifest） | **477** |
| 已上线且有 depth 层（8 个深度板块） | 477 / 477 |
| 未上线 | 2,704（record 中位仅 ~166 词，**无 depth**） |

**depth 层（页面下半部分）质量不错**：每篇 8 板块齐全，平均每板块 330–570 词，472 篇有 ≥3 道样题，薪资 477 篇都带 BLS 出处。

**问题集中在 record + program 层（页面上半部分，也是 Google 最先读到的部分）：**

| # | 问题 | 影响面（已上线 477 篇） | 例子 |
|---|---|---|---|
| P1 | **record 是骨架模板文字**（"validates job-ready knowledge and skills in the … field"、"Topic area tested on the exam; see the official blueprint"、"Passing score set by the awarding body"、"Eligibility varies; many credentials are open to all"） | **298 篇（62%）**；全库 2,578 / 3,186 | `/exams/arrt-radiography` |
| P2 | **program 档案是骨架**（"Varies by credential"、"Visit the awarding body's official website and create an account"） | 222 篇；全库 903 个 program 中 **790 个**是骨架 | ARRT、NHA、NCCT 等 |
| P3 | **上下半页自相矛盾**：record 的考试大纲是编造的通用四项（Anatomy / Clinical procedures / Patient care / Documentation），depth 板块写的是 ARRT 真实大纲（Patient Care / Safety / Image Production / Procedures）；record 说及格线"由机构决定"，depth 却给出具体机制 | 所有 P1 页面 | arrt-* 全系 11 篇 |
| P4 | **虚假声明**：大纲板块固定写着"Weightings come from the official exam outline"，但没有任何权重 | **350 篇** | `[slug].astro` ~L850 |
| P5 | 字段缺失：costBreakdown 缺 341、timeline 缺 341、sourceUrl 缺 304、FAQ < 5 条的 385、eligibility 缺 120、program 对比表缺 255 | — | — |
| P6 | E-E-A-T：作者全是 "TestPrepPilot Editorial Board"（477/477）；`reviewedBy` 是一句话（"Reviewed against the College Board…"），却被 JSON-LD 当成 `Person.name` 输出 → **结构化数据错误** | 477 | `[slug].astro` L459 |
| P7 | 新鲜度：`lastReviewed` / `reviewed` 全部是 `2026-08`，页面写 "Figures last verified August 2026"，无逐项核验记录 | 477 | — |
| P8 | 通过率：475/477 走 `caveat` 分支；很多机构**其实公布了精确数字**（ARRT、NCSBN、AICPA、NCEES、College Board AP 分数分布等），页面却写 "mid-80s percent range" 这种模糊话 | 大量 | arrt-radiography |
| P9 | 学术类考试（AP / CLEP / ACCUPLACER 等）的"薪资"板块写的是 "has no direct salary outcome"——占位式内容 | admissions-academic 全部 | ap-biology |
| P10 | Mometrix 覆盖 195/477；其余 282 篇"学习资料"位置空缺，没有官方资源替代块 | 282 | — |

**结论**：已上线的 477 篇里，真正达到旗舰水平的是 `confidence: high` 且非骨架的 **163 篇**。另外 **298 篇是"下半页很好、上半页是模板骨架、且两者互相矛盾"**，这是现在最伤的地方：Google 和 AI 引擎最先抽取的 Quick Answer、考试格式表和大纲都是错的或空的。

## 1. 旗舰标准（Definition of Done，每页都要满足）

由 N0 写成脚本 `scripts/quality/nationalGate.mjs`，**不过闸不准上线，也不准把 lastReviewed 往后改**。

1. **零骨架**：下文 §附录A 列出的模板句式命中次数 = 0（record、program、depth 都查）。
2. **考试格式 6 项全部具体**：`questions`（写明计分题 / 预测题）、`time`、`pass`（数字或量表；如果机构确实不公布，就写"不公布 + 怎么计分"）、`fee`（会员 / 非会员）、`format`、`admin`（具体考试服务商）。
3. **大纲**：≥4 个 domain，名称与官方 content outline **逐字一致**；有公布权重就写权重（合计 95–105%）；没有权重时页面不能出现"Weightings come from…"这句话。
4. **record 与 depth 一致**：fee / questions / time / pass / 大纲名称在 record、program、depth 三处取值相同（脚本做字符串级 + 数字级比对）。
5. **费用和时间线**：costBreakdown ≥3 项 + total，timeline ≥3 段。
6. **FAQ ≥6 条**，其中 ≥2 条来自真实搜索意图（Google PAA / 相关搜索），每条答案 40–90 词。
7. **program 具体**：registrationSteps 写出具体的门户名称和 URL；重考间隔和次数、续证周期、CE 学时和费用都要有数字。
8. **出处**：`sourceUrl` 指向具体页面或 PDF（不能是首页）；depth 里每个数字行都带 `note` 或 `source`。
9. **字数**：全页 ≥3,500 词，record 层的考试专属文字 ≥600 词。
10. **去重**：与同 body 兄弟页的 Jaccard < 0.50（复用 `_seo_dup.mjs` 的算法）。
11. **新鲜度**：`lastReviewed` ≤ 90 天，并且有逐项核验记录（见 N5）。

## 2. 工作包（按顺序执行；N0 必须最先做）

### N0 — 质量闸 + 渲染层安全网（1 个 agent，先做，约半天）

**改动文件**
- 新建 `scripts/quality/nationalGate.mjs`：读 `allExamsFull` + depth + program，对每个 slug 输出 `{slug, released, score, failures[]}`，写到 `reports/quality/national-gate.json` 和 `.csv`；带 `--released`、`--slug`、`--fail-only` 参数。实现 §1 的 11 条规则，骨架检测用 §附录A 的正则。
- 加 `package.json` 脚本 `"verify:national-quality"`；并在 `_deploy_batch_55.mjs`、`_release_all.mjs` 里把它接成硬闸（不过闸的 slug 拒绝加入 manifest）。
- `src/pages/exams/[slug].astro`（**该文件按项目约定"不做基础性改动"，只允许下面这些条件性小改**）：
  - L~850 那句 "Weightings come from the official exam outline…"：只有 `topics.some(t => t.weight)` 时才渲染。
  - L459 `reviewedBy`：改成 `{ '@type': 'Organization', '@id': 'https://testpreppilot.com/#editorial-board' }`；原来那句话放到新字段 `reviewBasis`，作为页面上的可见文字渲染，不进 Person。
  - 渲染层兜底：record 字段命中骨架正则时**不渲染该字段**（宁缺勿错），并在构建日志里 warn。
- 验收：在 477 篇上跑闸，输出基线报告（预期 ≈300 篇不过）；`astro build` 通过；`_qa/verify-seo-geo.mjs` 输出 ALL CHECKS PASSED。

### N1 — 重写 298 篇骨架 record（最高优先级；按机构分包，每包 ≤25 个 slug）

**为什么按机构分包**：同一机构的 program 档案只写一次（N2 同包完成），大纲 / 费用 / 重考规则来源相同，一致性最好。

**取包方式**：`node scripts/quality/nationalGate.mjs --released --fail-only` → 按 `body` 分组 → 每个 agent 领一组。首批建议（量大、搜索热度高）：
1. ARRT（11 篇：arrt-radiography、-mri、-ct、-mammography、-sonography …）
2. NHA（nha-ccma、-cpct、-cmaa、-cehrs、-mental-health-tech …）+ NCCT + AMT + AAB
3. AHIMA（cca、ccs、rhit …）
4. 教育类 42 篇（Praxis / 各类教师测评）
5. 健身类 27 篇（ACE / NASM / ACSM / AFAA …）
6. 技术类 28 篇
7. 金融 20 篇、交通 19 篇、公共安全 18 篇、餐饮 18 篇、项目管理 22 篇、职业安全 13 篇、其余

**每个 slug 的输出**：直接改它所在的 `national-research/_chunks/*.mjs` 源（再跑 `mergeChunks.mjs`），**不要手改 `batchNN.mjs`**；字段遵循 `NATIONAL_SCHEMA.md` Layer B。必须做到：
- `description` / `quickAnswer`：写出这个考试的具体信息（谁考、考什么、官方门槛、对雇主意味着什么），不能出现机构类别泛称。
- `examMeta` 6 项、`topics`（官方 domain 名 + 权重）、`examEssentials` ≥5 行、`costBreakdown`、`timeline`、`faqs` ≥6、`summaryPoints` ≥4、`eligibility`（列出全部官方 pathway）、`relatedSlugs` 3–4 个、`sourceUrl`（content outline PDF 或 handbook）。
- **与 depth 对齐**：写完后通读 `depth/<slug>.mjs`。两边冲突时以官方来源为准，两边一起改。depth 里的模糊数字（如 "mid-80s"）换成官方精确值 + 年份。
- `confidence: 'high'` 只在每个数字都有出处时才能填。
- 研究方法沿用 `_agent_brief.md`（WebSearch / WebFetch 官方页面；**不编造**；查不到就明说"不公布"）。

**验收**：包内全部 slug 过 `nationalGate`；`node --check` 通过；`astro build` 后用 `get_page_text` 抽查 3 篇，确认上半页没有骨架句。

### N2 — program 档案（与 N1 同包完成；剩余的单独分包）

- 222 个上线页用到的骨架 program 必须在 N1 同包内重写（`NATIONAL_SCHEMA.md` Layer A）：registrationSteps 4–6 步，写出真实门户名称、ID 规则、预约窗口；proctoring、retakePolicy、recertification、scoreReporting、refundPolicy 全部写数字。
- `comparison`（证书阶梯对比表）：缺失的 255 篇，只要该机构有 ≥2 个证书，就补一张表（层级 / 资格要求 / 费用 / 典型备考时间）。
- 未上线页用到的另外 ~570 个骨架 program，留给 N7 处理。

### N3 — 字段补全（已过 N1 的 163 篇高质量页 + N1 产出）

对已经是 `high` 但缺字段的页面：补 costBreakdown / timeline（341 篇缺）、FAQ 补到 ≥6（385 篇不足）、sourceUrl 深链（304 篇缺）、eligibility（120 篇缺）。按类别分包，每包 40 篇。FAQ 的问题必须先查 Google PAA 再写。

### N4 — depth 层精修（按类别分包）

1. **通过率换成精确数字**：凡是机构公布了数据的，`passRate.rows` 写出年份 + 首考 / 重考 + 数字 + 来源 URL，删掉 caveat。已知会公布的机构（agent 自行核实并扩充）：ARRT、NCSBN（NCLEX）、AICPA（CPA 各科）、NCEES（FE/PE）、College Board（AP 分数分布）、NBCOT、NBRC、PTCB、AANP/ANCC、NCCPA、ABA/各州 bar（MBE 均分）。
2. **学术类考试换板块**：admissions-academic 类别不写薪资。新增 depth 可选字段 `scoreOutcomes`（分数分布表 + 学分 / 录取政策 + 来源），渲染层在 `depthSections()` 里把 `salary` 的标签换成 "Scores & credit"。这个需要同时改 `examDepth.mjs` 和 `DepthSections.astro`，各加约 20 行条件分支。
3. **薪资地域化**（加分项）：`salaryOutlook.rows` 加 "Top-paying states"（BLS OEWS state 表，前 5 名），也为将来州级页面提供数据。

### N5 — 新鲜度与可信度（1 个 agent + **需要用户决策**）

- depth 新增 `verifiedFacts: [{ field, value, sourceUrl, checkedOn }]`；只有当本页每个关键数字都有 checkedOn 时，页面才显示 "Figures last verified <月份>"，`lastReviewed` 取其中最早的 checkedOn。
- 年度会变的考试（AP、CPA、NCLEX、Praxis、各类费用）加 `nextReview` 字段；闸里检查是否过期。
- **需要用户决定**：E-E-A-T 的署名作者。agent **不能编造真人**。可选方案：(a) 招募 / 签约真实持证审稿人（每个大类 1 人），写进 `/reviewers` 页和 depth.author；(b) 继续用编辑部署名，但在 JSON-LD 里改为 Organization（N0 已修），并在 `/editorial-policy` 写清楚核验流程。在用户选定之前只执行 (b)。

### N6 — 学习资料位（282 篇没有 Mometrix）

没有联盟产品的页面，在同一位置放 "Official prep resources" 块：官方 content outline、官方练习题、官方手册（全部来自机构网站，带 URL），复用 `MometrixPrep` 的样式。数据写在 depth 的新字段 `officialResources`。不要放无关的联盟链接。

### N7 — 未上线的 2,704 篇（在 N1–N6 完成之后）

按 `_heat_rank.mjs` 的热度排序，每波 ≤50 篇，流程：record 重写（N1 标准）→ program（N2）→ depth 8 板块（`_agent_brief.md`）→ 过 `nationalGate` → `_deploy_batch_55.mjs` 加日期 → `_gen_infographics.mjs` + `_gen_llms.mjs` → `_verify55.mjs`。**骨架 record 一律不准上线。**

## 3. 执行顺序与并行建议

```
N0 （单独，先做）
 └─> N1+N2 按机构并行（每个 agent 一个机构包，最多 6 个并行）
      └─> N3、N4 按类别并行
           └─> N5（数据字段部分）、N6
                └─> N7 分波
```

- N1 期间，每完成一包就跑一次 `astro build` + `verify:content`，**不要攒到最后**。
- 不同 agent 不要改同一个 `_chunks/*.mjs` 文件；如果一个 chunk 里混了多个机构，由领取该 chunk 的 agent 负责整个 chunk。

## 附录 A — 骨架句式正则（nationalGate 用，可扩充）

```js
/validates job-ready knowledge and skills in the/i
/Topic area tested on the exam; see the official blueprint/i
/Passing score set by the awarding body/i
/Eligibility varies; many credentials are open to all/i
/Professionals and candidates seeking to validate/i
/Candidates should review the official handbook for eligibility/i
/Recognized credential from|Demonstrates verified competence in/i
/Varies by credential/i
/is the awarding organization for the credentials listed on this page/i
/Visit the awarding body.s official website/i
```

## 附录 B — 复现基线的脚本

```bash
node scripts/quality/baseline-coverage.mjs "$(pwd)"      # 字段覆盖率 + depth 覆盖
node scripts/quality/baseline-boilerplate.mjs "$(pwd)"   # 骨架 record / program 计数
```

N0 的 `nationalGate.mjs` 应当吸收这两个脚本的逻辑，之后可以删掉它们。核心判定：骨架句式命中 ≥2 条 = 骨架 record；program 命中 ≥2 条 = 骨架 program。
