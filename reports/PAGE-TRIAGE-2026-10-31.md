# 考试页三分清单（2026-10-31）

完整清单：[page-triage-2026-10-31.csv](page-triage-2026-10-31.csv)（485 行，每行带分组、理由、GSC 数据，Excel 可直接打开）。

数据来源：GSC 效果报告（2026-07-29 至 10-26，网页搜索，带斜杠和不带斜杠的 URL 已合并）、线上 sitemap（10-31 抓取）、`release-manifest.mjs`、`mometrix.mjs`。

## 汇总

| 分组 | 页数 | 3 个月展示 | 点击 | 有 Mometrix 链接 | 动作 |
|---|---|---|---|---|---|
| **深耕** | 102（P1 27 / P2 75） | 5,312 | 21 | 25 | 唯一继续投入的地方 |
| **保留** | 23 | 10,252 | 35 | 12 | 原样保留，不再投入 |
| **观察** | 149 | 333 | 0 | 97 | 11-20 复查，仍无前 20 排名就砍 |
| **砍** | 211 | 18,194 | 8 | 61 | noindex + 移出 sitemap |

## 分组规则

- **核心垂直**（入行要考的职业准入类）：`public-safety`、`security-investigation`、`trades`、`workplace-safety`、`transportation`、`personal-services`、`food-hospitality`。美容、理发类页面虽然归在 `fitness-recreation` 下，也算进 `personal-services`。核心垂直的页面**全部进深耕**。有排名或有展示信号（≥30 展示且平均排名 ≤30）的，以及保安、私家侦探、持枪许可三个州汇总页，标为 P1，其余为 P2。
- **有效排名**：≥30 展示且平均排名 ≤20；非大证书类另外放宽为点击 ≥3、点击 ≥2 且排名 ≤30、或 ≥200 展示且排名 ≤25。
- **保留**：非核心，但有有效排名。
- **砍**：
  - IT、金融、项目管理三类（`technology` / `finance-securities` / `project-business`），只要没排进前 20 就砍，共 163 页；
  - 其他非核心类、上线 ≥42 天仍无有效排名的，共 48 页。
- **观察**：非核心、上线不到 42 天、数据还不够下结论（大多是 10-09 那批上线的），外加 10-20 才上线的 5 个州汇总页（CPA、PE 工程师、土地测量、殡葬、养老院管理）。

## 深耕 P1（27 页，按展示排序）

| 页面 | 类别 | 展示 | 点击 | 排名 | Mometrix |
|---|---|---|---|---|---|
| nyc-dcas-exam | public-safety | 828 | 5 | 15.9 | Y |
| nims-ics-200 | public-safety | 546 | 3 | 19.4 | |
| corrections-officer-entrance-exam | public-safety | 447 | 4 | 12.8 | Y |
| nims-ics-800 | public-safety | 391 | 2 | 11.4 | |
| nims-ics-700 | public-safety | 364 | 0 | 14.7 | |
| nccer-core-curriculum | trades | 339 | 1 | 14.4 | |
| servsafe-workplace | food-hospitality | 236 | 0 | 21.2 | |
| post-entry-level | public-safety | 132 | 1 | 18.2 | Y |
| nccer-electrician | trades | 131 | 1 | 14.1 | |
| aws-certified-welder | trades | 123 | 0 | 28.6 | |
| nccer-hvac | trades | 100 | 1 | 11.1 | |
| nic-cosmetology-practical | personal-services | 96 | 0 | 15.7 | Y |
| nic-cosmetology-theory | personal-services | 91 | 0 | 15.5 | Y |
| cdl-general-knowledge-test | transportation | 88 | 0 | 27.2 | Y |
| law-enforcement-pat | public-safety | 88 | 0 | 25.0 | |
| learn2serve-alcohol-seller-server | food-hospitality | 62 | 0 | 25.3 | |
| cdl-air-brakes-knowledge-test | transportation | 58 | 1 | 9.8 | Y |
| faa-part-107-recurrent-training-alc-677 | transportation | 55 | 0 | 27.7 | |
| servsafe-alcohol-primary | food-hospitality | 49 | 0 | 23.5 | |
| pro-board-firefighter-i | public-safety | 48 | 0 | 14.8 | |
| statefoodsafety-food-protection-manager | food-hospitality | 48 | 0 | 29.3 | |
| nccer-plumbing | trades | 46 | 0 | 15.9 | |
| ase-t7-truck-hvac | trades | 44 | 1 | 14.5 | |
| faa-trust-recreational-uas-safety-test | transportation | 40 | 0 | 14.3 | |
| security-guard-license-by-state | security-investigation | — | — | — | 州数据已调研（36 州） |
| private-investigator-license-by-state | security-investigation | — | — | — | 州数据已调研（45 州） |
| concealed-carry-license-by-state | security-investigation | — | — | — | |

P2 的 75 页分布：trades 17、food-hospitality 15、transportation 15、workplace-safety 13、public-safety 10、personal-services 4、security-investigation 1。

## 保留（23 页）

psat-10、act-workkeys、ace-certified-personal-trainer、danb-cda、google-certified-educator-level-1、toeic-listening-and-reading、psat-nmsqt、aama-cma、nasm-certified-nutrition-coach、accuplacer-reading、ap-world-history-modern、google-it-support-professional-certificate、olsat-8、cisco-ccst-cybersecurity、google-data-analytics-professional-certificate、praxis-elementary-education-multiple-subjects-5001、nacpb-cpb、ap-united-states-history、offsec-oscp、casper-test、praxis-plt-grades-7-12-5624、microsoft-office-specialist-excel-associate、accuplacer-quantitative-reasoning-algebra-statistics。

## 砍（211 页）

- 按类别：technology 121、project-business 22、finance-securities 20、admissions-academic 18、allied-health 6、healthcare-clinical 6、education-teaching 6、fitness-recreation 5、legal 3，其余各 1。
- 展示最高的几页：comptia-network-plus（2,130 展示，排名 38）、comptia-a-plus（1,413，43）、microsoft-az-305（1,059，57）、itil-4-foundation（813，42）、cfa-level-1（699，72）、pmi-pmp（657，36）。
- 砍掉的页面 3 个月一共只有 8 次点击，都来自排名 24–51 的 IT 页：az-204、pentest+、ccna-cybersecurity、ai-901、linux+、az-140。

## 执行方式（建议）

1. **"砍"不是删除**，而是三步：
   - 加 `<meta name="robots" content="noindex, follow">`；
   - 从 sitemap 移除；
   - 从首页、分类页、相关考试模块的内链里撤掉。

   页面本身保留，用户直接访问照常能看，以后想恢复也只要撤掉 noindex。
2. **分类汇总页也要处理**：`technology`、`project-business`、`finance-securities` 三个分类下的考试页全部 noindex 后，这三个分类页也一起 noindex。
3. **一次性批量上线**，不要分批慢慢加。顺序上先修好站内链接的斜杠问题，再上 noindex。
4. **11-20 复查"观察"组**：用一份新的 GSC 导出重跑同一套规则，排进前 20 的转入保留，其余转入砍。
5. **深耕组的投入顺序**：
   1. 保安、私家侦探的各州页面（数据现成）；
   2. 狱警、警察入职考试的各州页面；
   3. NIMS/FEMA、NCCER 系列补齐；
   4. 再往下是 CDL、食品卫生、酒类服务许可这类州强制培训的页面。

## 需要知道的事

- **深耕组眼下的展示和点击都比保留组少**（5,312 展示、21 点击，对比 10,252 展示、35 点击）。这是一个押注，不是保守的选择。押它的理由是：深耕组的话题能按州铺开、竞争弱、后面有强制培训课程可以变现；而保留组多是 PSAT 这种一个考试一页的话题，没法扩展。
- 砍掉的 211 页里有 61 页挂着 Mometrix 链接，但这些页面本来就没有搜索流量，对收入影响可以忽略。
- 这份清单只看了 3 个月的 GSC 数据，**不包括外链和 AI 引用**。如果某个要砍的页面你知道有外链或被 AI 引用，手动改成保留。
