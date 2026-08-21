// Depth content for: comptia-data-plus
// Sources: comptia.org Data+ certification pages (V2 / DA0-002 launched October 14, 2025;
// V1 / DA0-001 retired April 14, 2026 for English; exam details: max 90 questions, 90
// minutes, 675/900 passing, ANAB accreditation), CompTIA voucher pricing, CompTIA CE
// renewal policy (3-year cycle, 20 CEUs), bls.gov Occupational Outlook Handbook (May 2024
// wage data). All facts checked 2026-08-05.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This guide is compiled and maintained by our IT-certifications desk. Vendor exams in this space are revised and retired frequently, so we track the objectives document by its published revision date and state plainly when an exam is being retired and what replaces it — the single most common way candidates waste money here is studying a superseded blueprint. Fees, scoring, retake rules and renewal terms come from the vendor\u2019s own certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Objectives, exam codes, fees and retirement dates were taken from the vendor\u2019s current certification pages and checked for the revision date shown there.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024) — the closest occupation, with the honest caveat that Data+ targets entry-level analytics roles',
    summary:
      'The salary answer for CompTIA Data+ is $112,590, the May 2024 median for Data Scientists (SOC 15-2051), the closest Bureau of Labor Statistics occupation to the analytics work this early-career certification validates — and that number needs more caveats than most on this site, because Data+ is an entry-level credential and the people who hold it typically sit well below the occupational median for the first years of their careers. First, BLS classifies by job duties rather than by certificate, and there is no BLS occupation called data analyst; the Data Scientists occupation is the closest fit for the analysis, statistics and visualisation work the blueprint covers, but its $112,590 median reflects a workforce that is more senior and more quantitative than the typical Data+ candidate, whose realistic early salary sits lower and varies heavily by industry and location. Second, the growth story is genuinely strong: BLS projects data scientist employment to grow 34 percent from 2024 to 2034, much faster than the all-occupations average, with about 23,400 openings a year — the strongest outlook of any occupation referenced on this page — and that growth is why an entry credential in analytics has a plausible payoff path. Third, the honest framing for a candidate is that Data+ is a foundation, not a wage trigger: it demonstrates data literacy and structured analytical thinking to employers hiring business analysts, junior data analysts and report specialists, and its value compounds when it is paired with a tool you can prove in an interview — Excel, SQL, Power BI or Tableau — because the exam is vendor-neutral and deliberately does not certify any single product. The adjacent comparison points are database administrators and architects at $123,100 and the computer and IT occupations group at $105,990, both useful context for where analytics-adjacent roles sit in the same release.',
    rows: [
      { label: 'Median annual wage — data scientists (SOC 15-2051)', value: '$112,590', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to analytics work; Data+ holders typically start below this median.' },
      { label: 'Lowest 10 percent — data scientists', value: 'less than $63,650', note: 'BLS OOH Pay tab, May 2024. Closer to realistic early-career analytics pay.' },
      { label: 'Median — database administrators and architects (SOC 15-1245)', value: '$123,100', note: 'BLS OOH, May 2024. Adjacent data-platform role.' },
      { label: 'Median — all computer and IT occupations', value: '$105,990', note: 'BLS OOH, May 2024' },
      { label: 'Employment, 2024 / projected change (SOC 15-2051)', value: '245,900 jobs / +34% (2024-34)', note: 'BLS OOH; ~23,400 openings a year — the strongest outlook on this page' }
    ],
    growth: '+34% projected change 2024-34 for data scientists (SOC 15-2051, BLS OOH), with ~23,400 openings a year — strong demand for analytics skills, with Data+ acting as a foundation credential rather than a direct wage trigger',
    source: {
      label: 'BLS Occupational Outlook Handbook — Data Scientists',
      url: 'https://www.bls.gov/ooh/math/data-scientists.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'CompTIA publishes no pass rate for Data+ — but it does publish the cut score: 675 out of 900',
    summary:
      'CompTIA does not release pass-rate statistics for Data+ or for any of its certifications, and the percentages you will find attached to DA0-002 on forums, blogs and bootcamp pages are anecdote or marketing rather than data. What CompTIA does publish is the cut score, and for the current Data+ V2 exam (DA0-002) that is 675 on a scale of 100 to 900. That is deliberately not 75 percent of the questions: CompTIA equates every exam form so that a harder set of items demands the same underlying ability as an easier one, performance-based questions carry more weight than a single multiple-choice item, and the raw-to-scaled conversion cannot be reverse-engineered, so candidates who aim for a percentage on practice tests are using a heuristic that does not map onto the scoring model. Two documented policies matter more than a pass rate for planning. First, the exam itself: a maximum of 90 questions in 90 minutes, mixing multiple choice with performance-based items, so pacing is genuinely tight — an average of one minute per question including the performance-based items means the multiple-choice items must be answered quickly to leave room for the simulations. Second, the retake rules: CompTIA imposes no waiting period between a first and second attempt, so a narrow fail can be re-sat almost immediately, but from the third attempt onward you must wait 14 calendar days between sittings, and every attempt is paid at full price unless you bought a retake bundle. The score report on the day gives your outcome and scaled score plus a domain breakdown, which is the closest thing to diagnostic feedback available and turns a failed attempt into a targeted study plan rather than guesswork.',
    source: {
      label: 'CompTIA — Data+ certification page',
      url: 'https://www.comptia.org/en-us/certifications/data/'
    },
    caveat:
      'No pass rate is published by CompTIA for Data+ or any CompTIA exam; treat every percentage you see as unverified. What is published and verifiable: the current DA0-002 cut score is 675 on a 100-900 scale, a maximum of 90 questions in 90 minutes, and the retake schedule (no wait between attempts one and two; 14 calendar days from the third attempt onward). Confirm the exam version — V1 (DA0-001) retired April 14, 2026 for English — before buying material.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for CompTIA Data+ is 60 to 100 hours over six to ten weeks, because this is an entry-level analytics exam with a broad but shallow blueprint, and the fastest gains come from working the five domains against the current V2 objectives rather than grinding multiple-choice questions. The first thing to establish is which version you are studying: the current exam is DA0-002, launched October 14, 2025, and the old DA0-001 retired for English testing on April 14, 2026, so any book, course or question bank that says DA0-001 on the cover is teaching a retired blueprint and will leave you with real gaps — V2 added cloud infrastructure, AI concepts and containerisation to the data-concepts domain and restructured the weights. The five domains and their V2 weightings are Data concepts and environments at 20 percent, Data acquisition and preparation at 22 percent, Data analysis at 24 percent, Visualization and reporting at 20 percent, and Data governance at 14 percent. The plan below runs roughly nine weeks at 8-12 hours a week and assumes you can open the tools the blueprint touches — a spreadsheet application, SQL, and a visualisation tool such as Power BI or Tableau — because the exam is practical and the performance-based items expect you to reason about data operations, not just recognise terminology. Sequence the domains by weight and dependency: concepts and environments first, then acquisition and preparation, then analysis, then visualisation and reporting, and leave governance for the final weeks since it is the lightest domain and the most memorisation-heavy. The exam is 90 minutes for a maximum of 90 questions, so build in timed full-paper rehearsal before booking — the pacing is the part candidates underestimate.',
    totalHours: '60-100 hours over 6-10 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Domain 1 — Data concepts and environments (20%)',
        tasks: [
          'Learn data types, structures, file formats and the difference between structured and unstructured data',
          'Cover database concepts: relational versus non-relational, tables, relationships, keys and schema basics',
          'Understand the V2 additions: cloud and on-premises infrastructure, storage, containerisation, and AI concepts',
          'Identify data tools: coding environments, BI software and analysis platforms'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Domain 2 — Data acquisition and preparation (22%)',
        tasks: [
          'Practise data acquisition methods: integration, queries and combining data from multiple sources',
          'Learn data exploration: finding missing values, duplicates, redundancy and outliers',
          'Apply transformation techniques: cleansing, merging, parsing and formatting data',
          'Work a real dataset through a cleanup cycle in a spreadsheet and in SQL'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domain 3 — Data analysis (24%)',
        tasks: [
          'Select and apply basic statistical methods: descriptive statistics, distributions and summary measures',
          'Learn to communicate results: choosing methods for different audiences',
          'Practise troubleshooting analysis issues using the right tools and resources',
          'Drill the scenario items that ask which analysis technique fits a described business question'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Domain 4 — Visualization and reporting (20%)',
        tasks: [
          'Learn to create effective visuals: choosing charts, maps and tables for the data and audience',
          'Build a dashboard in Power BI or Tableau and present a summary from it',
          'Cover reporting formats and how to deliver them to different audiences',
          'Practise validating reporting accuracy — the exam asks what to check before a report goes out'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Week 9',
        focus: 'Domain 5 — Data governance (14%) + full rehearsals',
        tasks: [
          'Learn data management practices: documentation, versioning and data lineage',
          'Cover compliance requirements, audits and regulations, plus privacy and protection strategies',
          'Implement quality assurance concepts: profiling, monitoring and testing for data quality',
          'Two full 90-minute practice papers; re-study the two weakest domains'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Working with data daily (spreadsheets, SQL or BI)', detail: 'Five to six weeks. The operational domains are mostly familiar; spend the recovered time on governance terminology and the V2 AI and cloud concepts, which are the parts most practitioners have not touched.' },
      { label: 'No analytics background, career switcher', detail: 'Ten to twelve weeks at 8-10 hrs/week. Start with a spreadsheet and SQL fundamentals before the exam content, because the practical items assume you can reason about data operations.' },
      { label: 'Already hold DA0-001 or studied V1', detail: 'Three to four weeks of deltas only. DA0-001 retired April 14, 2026; re-sit the V2 outline, focusing on the new cloud, AI and containerisation material and the restructured domain weights.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move a Data+ score are the ones that force you to work with data rather than memorise vocabulary, because the exam mixes multiple choice with performance-based items and the practical scenarios separate candidates who have cleaned a dataset from those who have only read about cleaning one. The single highest-yield habit is to take a messy real-world dataset — with duplicates, missing values and inconsistent formats — and run it through the full cycle the blueprint describes: profile it, clean it, transform it, analyse it and build a visualisation from it, because the performance-based items reward exactly that executed workflow. Second, learn the tool-versus-task mapping deliberately: the exam is vendor-neutral and will not ask you to click a specific Power BI button, but it does assume you know what SQL, spreadsheets, BI platforms and coding environments are each best at, and scenario items frequently hinge on choosing the right tool for a described task. Third, drill the statistical decision points rather than the formulas: the analysis domain is 24 percent and the items usually ask which technique or method fits a business question, not for computation, so learn when a mean is misleading, what a distribution tells you, and how to choose between descriptive and inferential approaches. Fourth, practise the pacing of 90 questions in 90 minutes with the performance-based items included; a timed full paper weekly is the only rehearsal that builds the rhythm of fast multiple choice with room left for the simulations. Fifth, use the domain weights to allocate time — data analysis at 24 percent and acquisition and preparation at 22 percent deserve twice the hours of governance at 14 percent. Finally, verify your material is DA0-002 before buying anything; V1 content is still widely on sale and covers a retired blueprint, and the V2 additions around cloud, AI and containerisation are exactly where old material leaves you exposed.',
    items: [
      {
        title: 'Run one messy dataset through the full workflow',
        detail: 'Profile, clean, transform, analyse and visualise a real dataset with duplicates, missing values and inconsistent formats. The performance-based items reward exactly this executed cycle, and there is no substitute for having done it.'
      },
      {
        title: 'Learn the tool-versus-task mapping',
        detail: 'The exam is vendor-neutral but assumes you know what SQL, spreadsheets, BI platforms and coding environments are each best at. Scenario items frequently hinge on choosing the right tool for a described task, so drill those mappings.'
      },
      {
        title: 'Drill the statistical decision points, not the formulas',
        detail: 'The analysis domain asks which method or technique fits a business question, not for computation. Learn when a mean misleads, what a distribution tells you, and how to choose between descriptive and inferential approaches.'
      },
      {
        title: 'Rehearse the 90-in-90 pacing weekly',
        detail: '90 questions in 90 minutes with performance-based items included is tighter than it looks. A timed full paper every week builds the rhythm of fast multiple choice with room left for the simulations.'
      },
      {
        title: 'Allocate hours by domain weight',
        detail: 'Data analysis (24%) and acquisition and preparation (22%) deserve roughly twice the study hours of governance (14%). Weighting your effort to the blueprint is a free and reliable score gain.'
      },
      {
        title: 'Verify your material is DA0-002',
        detail: 'V1 (DA0-001) retired for English testing on April 14, 2026, but V1 books and question banks are still on sale. Check the exam code on the cover; the V2 cloud, AI and containerisation content is exactly where old material leaves you exposed.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for CompTIA Data+ is anchored by the version question: DA0-001 material is still widely on sale and still ranks well in search results, but the V1 exam retired for English testing on April 14, 2026, so the first thing to check on anything you buy is the DA0-002 code on the cover. The official CompTIA Data+ exam objectives are free and are the blueprint; CompTIA also sells the exam voucher and optional bundles such as CertMaster Practice or retake bundles that add a question bank or a second attempt at a premium. For most candidates the rational stack is the free objectives plus a small practice-test spend and real tool time, because the exam is practical and a spreadsheet, SQL and a BI tool cover the hands-on side. On the paid side, the tiers are familiar: the official CompTIA bundle pricing sits above $300 when it includes a retake, the voucher alone is roughly $255 US list (raised from about $254 in mid-2026, and varying by region), third-party practice tests run from $20 to $90, and video courses from $15 to $60 depending on provider and sale status. Books written for the current V2 outline are the best reference for candidates who want a structured narrative, with the caveat that a V1 book is a historical document for this exam. The footnote anchoring the comparison: prices are USD list checked 2026-08 and change; CompTIA voucher pricing varies by region and promotion; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Exam voucher (DA0-002)', values: ['~$255 US list, raised mid-2026; varies by region', 'Pearson VUE, test centre or online', 'Required — buy the voucher alone if you have your own tools', 'Confirm the DA0-002 code before you buy'] },
      { label: 'CompTIA exam objectives and resources (official)', values: ['Free', 'Objectives PDF, sample questions and exam details', 'The blueprint itself; confirm you are reading the DA0-002 objectives', 'Download first — confirm you are reading the DA0-002 objectives'] },
      { label: 'CertMaster Practice / bundle options (CompTIA)', values: ['Bundle pricing above the voucher; includes practice and often a retake', 'Adaptive practice plus exam', 'Candidates who want an official question bank and a second attempt', 'Worth it only if you have no lab or no retake budget'] },
      { label: 'Spreadsheet, SQL and a BI tool', values: ['Free or subscription ($0-30/month for BI tools)', 'Hands-on practice environment', 'The performance-based side of the exam — clean, analyse and visualise real data', 'Run one messy dataset through the full workflow'] },
      { label: 'Data+ study guide for DA0-002', values: ['~$45-60', 'Print + eBook with online test bank', 'A single ordered reference — confirm it is the V2 edition', 'Confirm the V2 edition on the cover before buying'] },
      { label: 'Third-party practice tests (Udemy and similar)', values: ['~$15-30 during frequent sales', 'Timed practice exams with explanations', 'Cheap readiness checks; confirm the DA0-002 code', 'Confirm the DA0-002 code on the cover before buying'] },
      { label: 'Data+ video course', values: ['~$15-60 depending on provider and sale', 'Video instruction', 'A structured narrative if self-paced text does not hold your attention', 'Buy on sale; confirm it covers the V2 outline'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; CompTIA voucher pricing varies by region and promotion, and Udemy list prices are close to meaningless outside a sale — confirm at the source before buying. The V1 (DA0-001) exam retired for English testing on April 14, 2026; buy only DA0-002 material. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant CompTIA Data+ mistakes fall into two groups: version errors and approach errors, and the version errors are the more expensive in 2026. The first is studying DA0-001 material for a DA0-002 exam: V1 books, courses and question banks are still on sale and still rank well in search, but the V1 exam retired for English testing on April 14, 2026, and V2 restructured the domains — adding cloud infrastructure, AI concepts and containerisation to data concepts and environments — so a V1-only candidate walks in with real gaps. The second is memorising vocabulary instead of working with data: the exam mixes multiple choice with performance-based items, and a candidate who can define data profiling but has never profiled a messy dataset fails the practical scenarios. The third is misjudging the pacing: 90 questions in 90 minutes including performance-based items averages one minute per question, and candidates who spend four minutes on the first few simulation-style items rush the multiple choice at the end. The fourth is treating the scaled score like a percentage: 675 on a 100-900 scale is not 75 percent of the questions, and CompTIA equates forms so the conversion cannot be reverse-engineered; candidates who aim for a practice-test percentage are using a heuristic that does not transfer. The fifth is skipping the statistical decision points and over-rehearsing definitions, when the 24 percent analysis domain mostly asks which technique fits a business question. The sixth is ignoring the tool-versus-task mapping and assuming vendor neutrality means no tools at all — the exam expects you to know what SQL, spreadsheets and BI platforms each do. Finally, some candidates forget Data+ is a three-year CE certification and treat it as permanent, only to discover the 20-CEU renewal cycle late.',
    items: [
      {
        mistake: 'Studying DA0-001 material for a DA0-002 exam',
        fix: 'V1 retired for English testing on April 14, 2026, but V1 books and question banks are still on sale. Check the DA0-002 code on the cover of anything you buy, and study the V2 domain weights, which added cloud, AI and containerisation content.'
      },
      {
        mistake: 'Memorising vocabulary instead of working with data',
        fix: 'The exam includes performance-based items. Take a messy dataset and profile, clean, transform, analyse and visualise it end to end, so the practical scenarios test what you have done rather than what you have read.'
      },
      {
        mistake: 'Misjudging the 90-in-90 pacing',
        fix: '90 questions in 90 minutes including performance-based items averages one minute per item. Rehearse full timed papers weekly so the multiple choice moves fast enough to leave room for the simulations.'
      },
      {
        mistake: 'Treating 675 as 75 percent of the questions',
        fix: 'The 675 cut on a 100-900 scale is a scaled score; CompTIA equates forms so the conversion cannot be reverse-engineered. Aim to be comfortable with every objective rather than chasing a practice percentage.'
      },
      {
        mistake: 'Skipping the statistical decision points',
        fix: 'The analysis domain (24%) mostly asks which technique fits a business question, not for computation. Learn when a mean misleads and how to choose between descriptive and inferential approaches — the decision points, not the formulas.'
      },
      {
        mistake: 'Assuming vendor-neutral means no tools',
        fix: 'The exam expects you to know what SQL, spreadsheets and BI platforms are each best at, and scenario items hinge on choosing the right tool. Drill the tool-versus-task mapping even though no single product is tested.'
      },
      {
        mistake: 'Forgetting the certification expires',
        fix: 'Data+ is valid for three years under the CompTIA Continuing Education programme and renews by earning 20 continuing education units. Diary the expiry the week you pass and bank CEUs from real work rather than scrambling in year three.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The CompTIA Data+ V2 exam (DA0-002) is a maximum of 90 questions in 90 minutes, scored on a 100-900 scale with a 675 cut, and it mixes multiple-choice questions — both single-answer and multiple-response — with performance-based questions that present a scenario and expect you to reason about a data task rather than type into a real system. The five domains are Data concepts and environments (20 percent), Data acquisition and preparation (22 percent), Data analysis (24 percent), Visualization and reporting (20 percent) and Data governance (14 percent). Because CompTIA equates exam forms, the scaled score is not a percentage of items correct and cannot be converted into one, so the practical implication for pacing is simple: the multiple-choice items need to average well under a minute so that the performance-based items, which can consume several minutes each, have somewhere to come from. The performance-based items on Data+ are typically presented as detailed scenarios — a described dataset, a business question, a set of artefacts — and ask you to select the correct next step or identify the error, rather than operating a live tool; this differs from the hands-on lab format used in some other CompTIA exams. The question mix below reflects the published objective structure, and the samples are editor-written illustrations of that structure rather than live exam items. The domain with the heaviest scenario emphasis is Data analysis, where items frame a business question and ask which statistical method or technique applies, and Visualization and reporting, where items describe an audience and a message and ask which chart or report format fits.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Terminology, concepts, data-type and file-format discrimination, and tool selection. Distractors are usually real concepts that apply in an adjacent context.' },
      { name: 'Multiple response', share: 'A minority of items', detail: 'The stem states how many to select and scoring is all-or-nothing. Common where several steps together complete a data task.' },
      { name: 'Performance-based scenario items', share: 'A meaningful minority carrying weight', detail: 'A described data situation — a dataset with quality problems, a business question, a report to deliver — asking for the correct next step or the error in a proposed approach. Reason about the workflow rather than click a tool.' },
      { name: 'Scenario-based multiple choice', share: 'Heaviest in the analysis and visualisation domains', detail: 'A business question with a described audience and data, asking which statistical technique, chart or report format fits. These reward knowing the decision rules, not the definitions.' }
    ],
    samples: [
      {
        prompt: 'A data analyst receives a sales dataset with 5,000 rows. The dataset contains duplicate customer records, inconsistent date formats, and a column with blank values flagged as missing. What should the analyst do first before any analysis?',
        options: [
          'A. Build the visualisation immediately so stakeholders can see the data',
          'B. Profile the dataset to understand the extent of the duplicates, format inconsistencies and missing values',
          'C. Delete all rows with missing values without investigating them',
          'D. Average the missing values into the blank cells using the column mean'
        ],
        answer: 'B',
        explanation: 'Profiling is the correct first step in the data preparation workflow: it quantifies the missing values, duplicates and format inconsistencies so the analyst can decide how to handle each — whether to remove, transform or impute. A inverts the workflow; visualising uncleaned data produces misleading insights. C is dangerous without investigation, because rows with missing values may still carry useful information, and wholesale deletion can bias the analysis. D is an imputation method that should be applied deliberately, not as an automatic default, and applying a mean to missing values without understanding why they are missing is poor practice. The stem maps to the data acquisition and preparation domain, and the answer is the step that comes first in the published workflow.'
      },
      {
        prompt: 'A business wants to communicate quarterly revenue trends to a non-technical executive audience. The message is the shape of the trend over time, not the precise values. Which visualisation best serves that message?',
        options: [
          'A. A dense data table listing every quarter with exact figures',
          'B. A line chart showing revenue across quarters with clear axis labels',
          'C. A pie chart splitting total revenue by product category',
          'D. A scatter plot comparing revenue with marketing spend'
        ],
        answer: 'B',
        explanation: 'A line chart is the standard visualisation for a trend over time, and with clear axis labels it communicates the shape of the trend to a non-technical audience without requiring them to read numbers from a table. A buries the trend in figures and asks the audience to do the work. C shows a part-to-whole relationship across categories, not a trend over time, so it answers a different question than the stem. D shows a relationship between two variables, which is not the trend message the executive needs. The stem\u2019s two clauses — quarterly trend over time and non-technical audience — map to the visualisation decision rules the exam expects: match the chart type to the message and the audience.'
      },
      {
        prompt: 'A dataset contains a customer\u2019s age with several implausible values, including 245 and negative numbers. An analyst must prepare the data for analysis. Which action best maintains data quality?',
        options: [
          'A. Leave the values unchanged because the dataset came from an authoritative source',
          'B. Flag the implausible values as invalid or outliers and handle them deliberately, then document the decision',
          'C. Replace every age with the dataset average',
          'D. Delete the entire dataset and request a fresh export'
        ],
        answer: 'B',
        explanation: 'The correct approach is to identify implausible values, treat them as a data-quality problem, and handle them deliberately — investigate, correct, exclude or cap them with justification — while documenting what was done, because documentation is part of the data-quality and governance workflow the exam covers. A abdicates responsibility on the assumption that authoritative sources cannot contain errors, which is precisely the assumption quality checks exist to challenge. C destroys legitimate variation by replacing all values with the mean and introduces distortion across the whole column. D is disproportionate: a handful of invalid values in one column does not warrant discarding the dataset, and it throws away valid data. The stem is built on the data-quality workflow — profile, identify, handle deliberately, document — and the answer is the option that follows it.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'CompTIA Data+ V2 (DA0-002) is a maximum of 90 questions in 90 minutes, delivered through Pearson VUE either at a test centre or online with OnVUE proctoring, scored on a 100-900 scale with a 675 cut, and two things about a CompTIA exam day differ sharply from the vendor exams covered elsewhere on this site. First, you can navigate: CompTIA permits you to skip questions and return to them, and you can review and change multiple-choice answers before submitting, so build your pacing plan around that — mark the long scenario items, sweep the multiple choice at a brisk tempo, then return to the flagged items with the remaining time divided across them. Second, you get your result immediately: the pass or fail and your scaled score appear on screen the moment you submit, along with a printed score report showing relative performance by domain, which is genuinely diagnostic if you have to come back. The thing that goes wrong most often has nothing to do with data: CompTIA requires two forms of identification, one of them a government-issued photo ID, and the name must match your CompTIA account exactly — check your account spelling the week before, because correcting it on the day is not possible and the seat is lost. For OnVUE, the environment rules are strict: a completely clear desk, a private room with a door you can close, your phone used only for check-in photographs and then out of reach, and the OnVUE system test run on the exact machine you will use. There are no scheduled breaks in a 90-minute exam, and the clock does not stop if you leave.',
    bring: [
      'Two forms of identification, both unexpired, with names matching your CompTIA account exactly',
      'One must be a government-issued photo ID; the second must carry your name and signature (a credit card or bank card is usually accepted)',
      'Your CompTIA ID, in case check-in cannot locate the booking',
      'For OnVUE: a phone for check-in photographs, a completely clear desk, and a private room with a door you can close',
      'For OnVUE: a webcam, microphone and connection already system-tested on the exact machine you will use'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room for OnVUE',
      'All notes, cheat sheets and printed references',
      'Your own paper and pens; a test centre issues an erasable noteboard and OnVUE provides a digital whiteboard only',
      'Bags, coats, hats, food and drink beyond what the centre permits',
      'Second monitors, which must be unplugged and turned away for OnVUE, and any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Log into your CompTIA account and confirm your name is spelled exactly as it appears on your ID. Mismatches are the most common cause of a lost seat and cannot be fixed at the desk.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in, which takes around 15 minutes for photographs of your face, both IDs and the whole room.' },
      { time: 'Check-in', detail: 'ID verification, digital signature, biometric capture, lockers. You are seated and issued an erasable noteboard.' },
      { time: 'First 2 minutes at the seat', detail: 'Write the domain weights and your fixed data-quality sequence on the noteboard — profile, identify, handle deliberately, document.' },
      { time: '0-5 minutes', detail: 'Scan the question list, mark the long scenario items, and start the multiple choice at a brisk tempo. Do not dwell on any single item yet.' },
      { time: '5-75 minutes', detail: 'Sweep the multiple-choice items, answering everything and flagging what you are unsure of. Remember the 90-in-90 average: one minute per item, with the scenario items needing more.' },
      { time: '75-90 minutes', detail: 'Return to the flagged scenario items with a known time budget, then review and submit rather than letting the clock expire.' }
    ],
    rules: [
      'Navigation is permitted: you may skip items and return, and review multiple-choice answers before submitting.',
      'Passing score is 675 on a 100-900 scale; it is a scaled score, not a percentage of items correct.',
      'Two forms of ID are required, one government-issued with photo, names matching your CompTIA account exactly.',
      'No scheduled breaks in a 90-minute exam, and the clock does not stop if you leave.',
      'Erasable noteboard only at a test centre; OnVUE candidates get a digital whiteboard and no physical writing materials.',
      'No waiting period between your first and second attempt; from the third attempt onward you must wait 14 calendar days between sittings, and each attempt is paid unless you bought a retake bundle.'
    ],
    afterwards:
      'Your pass or fail and your scaled score appear on screen the instant you submit, and you leave a test centre with a printed score report showing how you performed relative to each of the five domains — that report is the most useful artefact the exam produces, so read it properly rather than filing it. On a pass, your certification appears in your CompTIA account within a few days, you can claim the digital badge and download the certificate, and Data+ is valid for three years under the CompTIA Continuing Education programme, renewed with 20 continuing education units — log the expiry date immediately and start banking CEUs from real work rather than scrambling in year three. On a fail, resist booking the immediate retake that the no-waiting-period policy makes possible: take the domain breakdown, identify the one or two areas that dragged the scaled score down, and spend a fortnight working those specifically with real data — the score report tells you precisely where to aim, and wasting it by re-sitting on the same knowledge is how a roughly $255 voucher becomes a $510 one.'
  }
};

export default data;
