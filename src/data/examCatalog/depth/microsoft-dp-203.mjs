// Depth content for: microsoft-dp-203
// Sources: learn.microsoft.com DP-203 exam page and study guide ("Skills measured as of
// October 24, 2024"; certification and exam retired March 31, 2025; successor exam DP-700
// Implementing Data Engineering Solutions Using Microsoft Fabric), Microsoft TechCommunity
// retirement announcement, exam scoring and retake policy, bls.gov Occupational Outlook
// Handbook (May 2024 wage data). All facts checked 2026-08-05.
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
    headline: '$123,100 median for database administrators and architects (BLS, May 2024)',
    summary:
      'The salary answer for the credential formerly earned by DP-203 is $123,100, the May 2024 median for Database Administrators and Architects (SOC 15-1245), the closest Bureau of Labor Statistics occupation to the Azure data engineer role the certification targeted. That is the honest headline, but the more important career fact in 2026 is that the exam itself is retired: Microsoft retired the Azure Data Engineer Associate certification and its related DP-203 exam on March 31, 2025, so the wage figure describes the work, not a credential you can still earn under that name. The value of the number is that it anchors what the work pays: data engineers integrate, transform and consolidate data from structured and unstructured systems into schemas suitable for analytics, which is precisely what the DP-203 blueprint measured, and the BLS occupation that does that work sits at a $123,100 median with the distribution running from roughly $65,510 at the lowest 10 percent to more than $190,100 at the highest 10 percent. BLS projects 9 percent growth for this occupation from 2024 to 2034, about 9,400 openings a year, which is faster than the all-occupations average and reflects the continued shift of data workloads to the cloud. Two caveats belong on the number. First, BLS classifies by job duties, not by certificate, so the median describes everyone doing database and data-platform work, including on-premises DBAs with no cloud skills; Azure-fluent engineers typically sit above it. Second, the relevant comparison today is Data Scientists (SOC 15-2051) at $112,590 and Software Developers (SOC 15-1252) at $133,080, because Microsoft\u2019s current data engineering credential — DP-700 on Microsoft Fabric — sits at the intersection of those roles.',
    rows: [
      { label: 'Median annual wage — database administrators and architects (SOC 15-1245)', value: '$123,100', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to an Azure data engineer.' },
      { label: 'Median — data scientists (SOC 15-2051)', value: '$112,590', note: 'BLS OOH, May 2024. Adjacent analytics role in the same field.' },
      { label: 'Median — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS OOH, May 2024. Upper reference for engineering-heavy data roles.' },
      { label: 'Projected employment change, 2024-34 (SOC 15-1245)', value: '+9%', note: 'BLS OOH, ~9,400 openings a year' },
      { label: 'Credential status', value: 'Retired 2025-03-31', note: 'DP-203 retired; successor is DP-700 (Microsoft Fabric Data Engineer Associate)' }
    ],
    growth: '+9% projected change 2024-34 for database administrators and architects (SOC 15-1245, BLS OOH); the data engineering credential path in 2026 runs through DP-700 on Microsoft Fabric, not the retired DP-203',
    source: {
      label: 'BLS Occupational Outlook Handbook — Database Administrators and Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Microsoft published no pass rate for DP-203 before it retired on March 31, 2025 — the successor DP-700 inherits the same scoring model',
    summary:
      'There was never a published pass rate for DP-203, because Microsoft does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification exam, and the percentages attached to DP-203 on forums and bootcamp pages were anecdote or marketing rather than data. What Microsoft did publish, and still publishes for the successor DP-700, is the scoring model, and it is worth understanding even though the exam is retired because it tells you what studying the current data engineering exam involves. The pass mark was 700 on a scale of 1 to 1,000, and Microsoft stated explicitly that this is a scaled score that may not equal 70 percent of the available points, because candidates receive question sets of different difficulty and an easier form demands more raw points to reach 700. Counting questions and converting to a percentage in the exam was a wasted exercise. Two more published mechanics applied. First, an unknown subset of items was unscored pilot content: candidates could not identify which items they were and had to answer them anyway. Second, there was no penalty for guessing, so an unanswered question was strictly worse than a guess. The retake policy added cost structure: 24 hours after a first failure, then 14 days between every subsequent attempt, a maximum of five attempts in the 12 months after the first sitting, and the full $165 fee charged each time. For a candidate in 2026, the practical pass-rate question is different: you cannot sit DP-203 at all, so the planning question is whether the successor DP-700 — 40 to 60 questions, 100 minutes of exam time, 700 scaled, $165, valid one year with free renewal — fits your background, and whether you should instead target the retired credential\u2019s knowledge as a foundation for Microsoft Fabric.',
    source: {
      label: 'Microsoft Learn — Exam scoring and score reports',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'
    },
    caveat:
      'No pass rate was ever published for DP-203, and Microsoft publishes none for any certification exam; treat every percentage you see as unverified. The exam retired on March 31, 2025 and cannot be sat. What was published and verifiable: 700 out of 1,000 scaled (not 70 percent of questions); unscored pilot items; no penalty for guessing; 24-hour wait after the first failure and 14 days between subsequent attempts, maximum five attempts in 12 months; $165 per attempt. The current data engineering exam is DP-700 on Microsoft Fabric.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for DP-203 is that you should not start one: the exam retired on March 31, 2025 and cannot be scheduled, so any plan under this slug is historical context for candidates deciding whether to study the successor DP-700 on Microsoft Fabric instead. If you are deciding what to do with the DP-203 knowledge base, the honest plan is to map it forward: DP-203 measured data engineering on the classic Azure stack — Azure Data Factory, Azure Synapse Analytics, Azure Stream Analytics, Azure Event Hubs, Azure Data Lake Storage and Azure Databricks, with SQL, Python and Scala — while DP-700 measures the same job on Microsoft Fabric, the unified platform that Microsoft has made the strategic data surface, covering Lakehouse, Warehouse, pipelines, Dataflow Gen2, Spark notebooks, Eventstreams and KQL databases. For candidates who hold the retired certification, Microsoft stated that it remains on your transcript but cannot be renewed after the retirement date; there is no automatic transition to DP-700, so staying current means passing the full DP-700 exam. For candidates who never sat DP-203, the practical plan is roughly 80 to 120 hours over eight to ten weeks on the DP-700 blueprint, weighted toward the platform skills that carry over — data ingestion, transformation, partitioning, security and monitoring — plus the Fabric-specific patterns that do not exist in the old stack, notably OneLake shortcuts, Direct Lake, Fabric Git integration and KQL. The old DP-203 learning paths remain a useful foundation for the SQL and Python fundamentals they teach, but a study plan anchored on Synapse dedicated pools or Data Factory integration runtimes in 2026 is studying material Microsoft has moved on from.',
    totalHours: 'Historical: ~80-120 hours. Current path: same budget applied to DP-700',
    weeks: [
      {
        label: 'Week 0',
        focus: 'Decide the current path and baseline',
        tasks: [
          'Confirm DP-203 is retired and cannot be scheduled; open the DP-700 study guide instead',
          'Assess which DP-203-era skills you already have: SQL, Python or Scala, data pipelines, data lakes',
          'Set up a Microsoft Fabric trial capacity and a Power BI workspace',
          'Take the free DP-700 practice assessment cold for a per-domain baseline'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-2',
        focus: 'Fabric foundations and data storage',
        tasks: [
          'Learn the Fabric workspace model, capacities, and the difference between Lakehouse and Warehouse',
          'Understand OneLake, Delta tables and shortcuts as metadata pointers rather than copies',
          'Ingest data with data pipelines and Dataflow Gen2; compare them for orchestration versus analyst-authored cleanup',
          'Practise SQL endpoints and basic T-SQL against a Lakehouse'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 3-5',
        focus: 'Data transformation and processing',
        tasks: [
          'Write Spark notebooks in PySpark or Spark SQL and transform data in a Lakehouse',
          'Cover the DP-203 carryover skills: partitioning strategies, incremental loads and data quality checks',
          'Learn KQL basics for Eventhouses — summarize, make-series and let bindings are the differentiator most candidates skip',
          'Set up Eventstreams to ingest from Event Hubs, Kafka or IoT Hub'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'Security, governance and optimization',
        tasks: [
          'Apply workspace roles and item-level permissions; understand row and column security on Delta tables',
          'Configure monitoring and optimization: capacity metrics, throttling behaviour, and Direct Lake fallback diagnosis',
          'Use deployment pipelines and Git integration to move artifacts from dev to test to production',
          'Re-take the practice assessment and target the two weakest domains'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 8',
        focus: 'Timed full exams and gap closing',
        tasks: [
          'Two full timed practice exams in the DP-700 format',
          'Re-lab every miss; build the scenarios you got wrong',
          'Final pass over the F-SKU pricing anchor points and Direct Lake semantics',
          'Book the exam and run the Pearson VUE system test if testing online'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Already certified in DP-203 before retirement', detail: 'Your credential stays on your transcript but cannot be renewed; to stay current on Microsoft\u2019s data engineering path you must pass DP-700. Budget roughly half the study time of a new candidate — the SQL, Python and pipeline skills carry over; the new material is Fabric-specific.' },
      { label: 'Synapse or Data Factory experience without certification', detail: 'Six to eight weeks. Your ingestion and transformation knowledge transfers well; spend the recovered time on OneLake, Direct Lake, KQL and Fabric Git integration, which are genuinely new patterns.' },
      { label: 'New to data engineering', detail: 'Twelve to fourteen weeks at 10 hrs/week, starting with SQL and Python fundamentals before the Fabric platform material — the exam assumes you can already write and read code.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The prep-strategy answer for DP-203 in 2026 is to stop preparing for DP-203: the exam retired on March 31, 2025, and the strategies below describe how to convert its knowledge base into a passing DP-700 plan, which is the only way that knowledge is currently testable. The first strategy is to learn on the platform the exam actually measures. Microsoft Fabric is not Azure Synapse under a new name — the mental model is different, and candidates who studied the classic stack overestimate their readiness because the services have been consolidated into workspaces, capacities, Lakehouses, Warehouses and Eventhouses. Second, build the ingestion-to-transformation pipeline as one executed scenario rather than a set of isolated tasks: create a Lakehouse, ingest a dataset with a pipeline or Dataflow Gen2, transform it in a Spark notebook, and serve it through a Warehouse or semantic model, because the exam\u2019s scenario questions assume you have done exactly that loop. Third, treat KQL as a first-class skill. The Real-Time Intelligence content is where most candidates lose points, and the KQL basics — summarize, make-series, mv-expand and let bindings — are learnable in a few sessions yet often skipped by candidates coming from the SQL-only world. Fourth, learn the F-SKU pricing and capacity behaviour deliberately: capacity is the constraint that ties the monitoring and optimization questions together, and understanding throttling, bursting and the F64 boundary for embedded Power BI Pro is the difference between reasoning about a scenario and guessing at it. Fifth, use the free practice assessment as a diagnostic three times — cold, mid-study and the week before — and chase the two weakest domain bars, because the assessment rewards recognition while the exam rewards construction. Finally, join the current documentation loop rather than the retired one: every exam objective has a current Microsoft Learn module, and Fabric changes monthly, so a course recorded before the April 2026 update is already partly stale.',
    items: [
      {
        title: 'Learn on Microsoft Fabric, not the retired Synapse stack',
        detail: 'DP-700 measures the data engineer job on Fabric — Lakehouse, Warehouse, pipelines, Eventstreams, KQL databases. If your study material spends most of its time on Synapse dedicated pools or Data Factory integration runtimes, it is teaching the platform Microsoft has moved on from.'
      },
      {
        title: 'Execute one full pipeline loop end to end',
        detail: 'Ingest a dataset into a Lakehouse, transform it in a Spark notebook, serve it through a Warehouse, and monitor the result. The scenario questions assume you have done this exact loop, and the execution gap is where demo-only candidates fail.'
      },
      {
        title: 'Treat KQL as a first-class skill',
        detail: 'The Real-Time Intelligence content distinguishes prepared candidates. Learn summarize, make-series, mv-expand and let bindings in a few focused sessions — they are finite and highly testable, and most candidates skip them entirely.'
      },
      {
        title: 'Learn capacity and F-SKU pricing deliberately',
        detail: 'The exam probes capacity behaviour: throttling, bursting and the F64 anchor point for embedded Power BI Pro. Understanding how capacity constrains workloads lets you reason through the monitoring and optimization scenarios instead of guessing.'
      },
      {
        title: 'Use the practice assessment as a diagnostic, three times',
        detail: 'It is free, unlimited and rewards recognition rather than construction, so a high score overstates readiness. Take it cold, mid-study and the week before; each time, spend the next week only on the two weakest domains.'
      },
      {
        title: 'Study the current documentation, not a year-old course',
        detail: 'Fabric changes monthly and the skills outline was refreshed in April 2026. Open the current study guide yourself and read the current Learn module for each objective regardless of what your course covered.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The resource-comparison answer for DP-203 in 2026 is that you should be buying for DP-700 instead, because the retired exam has no future and the resources that survive are the ones useful to the Fabric path. The official Microsoft Learn DP-700 learning paths are free and are the blueprint itself, kept current with the April 2026 skills update; they are the non-negotiable base of any plan. The free official practice assessment is the second non-negotiable resource because it is drawn from the exam domain and gives per-domain diagnostics no third-party bank can match for accuracy. The genuinely justified spend is platform time: a Microsoft Fabric trial capacity is free for exploration, but a full practice window covering pipelines, notebooks, Eventstreams and deployment pipelines benefits from a paid capacity, which typically costs $20-80 across a study window if you pause or delete capacity when not practising. Paid practice tests fill a specific role: MeasureUp is the official AWS- and Microsoft-partner style option at roughly $99-129 list with frequent discounts and strong explanations, while Whizlabs at $20-30 is a cheap second opinion whose explanations should be cross-checked against current docs. Video closes the gap where text does not: the official Fabric channels and Microsoft MVPs publish strong walkthroughs of Lakehouse, Warehouse and Direct Lake content, and Udemy courses at the $15-30 sale price give a structured narrative. Books from the DP-203 era are only worth reading for the SQL and Python fundamentals; anything written around Synapse dedicated pools should be treated as historical. Formal instructor-led DP-700 training runs $1,500-2,500 through Microsoft Learning Partners and is rarely worth self-funding given the free Learn path. The footnote anchoring the comparison: prices are USD list checked 2026-08 and change; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn DP-700 path (official, current exam)', values: ['Free', 'Learning paths with modules and knowledge checks', 'The blueprint itself; the only current path to the data engineering credential', 'Start here — confirm it is the DP-700 path, not DP-203'] },
      { label: 'Microsoft official practice assessment (DP-700)', values: ['Free', 'Unlimited online question bank on Microsoft Learn', 'Per-domain diagnostics — take it cold, mid-study and the week before', 'Take it three times and chase the two weakest domain bars'] },
      { label: 'Microsoft Fabric paid capacity', values: ['$20-80 across a study window if paused between sessions', 'Live platform', 'The execution gap — pipelines, notebooks, Eventstreams and deployment pipelines need real capacity', 'Pause or delete capacity between sessions to control cost'] },
      { label: 'Microsoft exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive exam-interface demo', 'Learning the interactive and case-study formats before exam day', 'Run it once before booking — the formats cost more time than the content'] },
      { label: 'Official Fabric walkthrough channels and MVPs (YouTube)', values: ['Free', 'Video walkthroughs', 'Lakehouse, Warehouse, Direct Lake and KQL patterns explained by people running them', 'Best for the KQL and Direct Lake material most candidates skip'] },
      { label: 'MeasureUp DP-700 practice test', values: ['~$99-129 list, frequently discounted', 'Timed practice exam with explanations', 'Question volume with worked explanations, especially after a failed attempt', 'The clearest buy after a failed attempt'] },
      { label: 'Whizlabs DP-700 practice tests', values: ['~$20-30', 'Question bank', 'Cheap readiness checks; cross-check explanations against current docs', 'Cross-check anything surprising against the docs'] },
      { label: 'Udemy DP-700 course', values: ['~$15-30 on sale, $90+ list', 'Video course', 'A structured narrative if self-paced text does not hold your attention', 'Buy on sale; confirm it covers the April 2026 outline'] },
      { label: 'DP-203-era books and courses', values: ['Varies; mostly legacy pricing', 'Print or video on the retired stack', 'SQL and Python fundamentals only — treat Synapse-era material as historical', 'SQL and Python fundamentals only — the Fabric platform is the current target'] },
      { label: 'Official instructor-led DP-700 training', values: ['$1,500-2,500 via Learning Partners', 'Multi-day class with labs', 'Employer-funded candidates who want a schedule and an instructor', 'Employer-funded only; the free Learn path covers the same ground'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax, regional adjustment, sales or employer discounts. Udemy list prices are close to fictional; the sale price is the real price. DP-203 retired March 31, 2025; buy only for the current DP-700 exam. We take no commission from any provider and order nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistake around DP-203 in 2026 is not a study mistake at all — it is studying the retired exam: candidates buy DP-203 books, courses and question banks that still rank highly in search, spend months on Azure Synapse and Data Factory content, and only discover when they try to book that the exam retired on March 31, 2025 and cannot be scheduled. The second mistake is carrying the retired mental model forward: candidates who treat Microsoft Fabric as Synapse under a new name fail the Fabric-specific questions on DP-700 — OneLake shortcuts, Direct Lake, KQL and Fabric Git integration are genuinely new patterns, and the platform consolidation changes how the scenario questions are framed. The third is skipping KQL because the SQL-only background feels sufficient; the Real-Time Intelligence content is where most candidates lose points, and the KQL basics are finite and learnable. The fourth is underestimating capacity behaviour: candidates who never reason about F-SKU pricing, throttling and Direct Lake fallback guess on the monitoring and optimization scenarios rather than reasoning through them. The fifth is preparing only with multiple-choice practice banks, which reward recognition while the exam rewards construction — the interactive and case-study formats punish candidates who have never built a pipeline loop. The sixth is ignoring the documentation cycle: Fabric changes monthly, and a course recorded before the April 2026 skills update teaches partly stale material. The seventh is leaving questions blank under the impression that a wrong answer costs points; there is no penalty for guessing on Microsoft exams, so an unanswered item is strictly worse than a guess. Finally, some candidates treat the retired credential as transferable — Microsoft stated there is no automatic transition from DP-203 to DP-700, so holders must pass the full DP-700 exam to stay current.',
    items: [
      {
        mistake: 'Studying for the retired DP-203',
        fix: 'DP-203 retired on March 31, 2025 and cannot be booked. Confirm the current exam code — DP-700 — before buying anything, and check the cover of every course and question bank for the current version.'
      },
      {
        mistake: 'Treating Fabric as Synapse under a new name',
        fix: 'DP-700 measures the job on Microsoft Fabric, where services are consolidated into workspaces, capacities, Lakehouses and Warehouses. Study the Fabric-specific patterns — OneLake shortcuts, Direct Lake, KQL, Fabric Git — as new material, not rebranded old material.'
      },
      {
        mistake: 'Skipping KQL',
        fix: 'The Real-Time Intelligence content is where most candidates lose points. Spend focused sessions on summarize, make-series, mv-expand and let bindings; the material is finite and highly testable.'
      },
      {
        mistake: 'Never learning capacity behaviour',
        fix: 'F-SKU pricing, throttling, bursting and Direct Lake fallback tie the monitoring and optimization questions together. Learn the anchor points — F2, F8, F64 — and reason about what happens when a workload exceeds capacity.'
      },
      {
        mistake: 'Preparing only with multiple-choice practice banks',
        fix: 'The exam rewards construction, not recognition. Build the pipeline loop — ingest, transform, serve, monitor — in real Fabric capacity, because the interactive and case-study formats punish demo-only candidates.'
      },
      {
        mistake: 'Studying a year-old course',
        fix: 'Fabric changes monthly and the skills outline was refreshed in April 2026. Open the current study guide and read the current Learn module for each objective regardless of what your course covered.'
      },
      {
        mistake: 'Leaving questions blank',
        fix: 'There is no penalty for guessing on Microsoft exams, so an unanswered item is strictly worse than a guess. Never leave a question blank, and stop doing percentage arithmetic on the scaled 700 score.'
      },
      {
        mistake: 'Assuming the retired credential transfers',
        fix: 'There is no automatic transition from DP-203 to DP-700. If you hold the retired certification it stays on your transcript but cannot be renewed; passing the full DP-700 exam is the only way to stay current on Microsoft\u2019s data engineering path.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The question-type answer for DP-203 is historical context with one forward-looking point: DP-203 was an associate role-based exam of roughly 40 to 60 items in 120 minutes of exam time (140 minutes of seat time including the NDA and instructions), with some forms carrying a case study or a live lab, and the successor DP-700 preserves that format — 40 to 60 questions in 100 minutes of exam time, with multiple choice, multiple response, drag-and-drop, case studies and, on some forms, a lab. Microsoft did not publish a fixed question count for either exam, and the number varies by form. Because these are role-based exams, the Microsoft Learn panel was and is available inside the exam — the full learn.microsoft.com domain minus Q&A, practice assessments and your profile — with the clock running while you use it. The navigation rules matter as much as the item format: within a case study you answer a set of questions attached to a shared scenario and cannot return to the case study once you move past it, and taking an unscheduled break through the exam interface locks you out of every question already seen. The formats below are the standard role-based set, and the free exam sandbox at aka.ms/examdemo lets you handle every one before exam day. Most items cover generally available features, with preview features appearing only when they are in common use. The scoring rules to internalise for the current exam: 700 scaled on a 1-1,000 scale, no penalty for guessing, and an unknown subset of items is unscored pilot content. The scenario stems in this space tend to be layered — a requirement about latency, cost, consistency or retention is usually the deciding clause, so underline the constraint before reading the options.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The largest share of items on a typical form', detail: 'Scenario stems with a constraint — must minimise cost, must meet an RPO, must support a specific ingestion pattern — where several options would technically work and one satisfies the constraint.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select all that apply, sometimes with the required number stated. No partial credit, so evaluate each option independently.' },
      { name: 'Drag and drop / build list', share: 'Frequent', detail: 'Order the steps of a pipeline or deployment, or match services to requirements. Unused items may be present as distractors.' },
      { name: 'Hot area', share: 'Frequent', detail: 'A rendered portal or service screen with selectable regions or drop-downs. Platform familiarity converts directly into marks.' },
      { name: 'Case study', share: 'On some forms', detail: 'Multi-tab scenario — existing environment, requirements, technical constraints — followed by several questions. Read the requirements tab twice; you cannot return once you move past it.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real environment in which you perform tasks, graded on end state. Labs can be removed at short notice for outages, which is why Microsoft publishes no list.' },
      { name: 'Yes/No repeated-scenario sets', share: 'Occasional', detail: 'The same scenario restated with a different proposed solution each time. All three can be yes, or all three no — evaluate each independently.' },
      { name: 'Mark for review + review screen', share: 'Available throughout, subject to section rules', detail: 'Flag uncertain items and return before submitting a section; an unscheduled break through the interface ends access to everything already seen.' }
    ],
    samples: [
      {
        prompt: 'A data engineering team must ingest a continuously growing stream of events from a source system into Azure for near-real-time analysis and long-term storage. The solution must support replay of the events and must not require reprocessing the whole stream if a downstream job fails. Which ingestion approach meets the requirement?',
        options: [
          'A. A scheduled Azure Data Factory pipeline that copies the full source table nightly',
          'B. Ingesting events to Azure Event Hubs, then processing them with Azure Stream Analytics and archiving to Azure Data Lake Storage',
          'C. Directly inserting each event into a dedicated SQL pool table as it arrives',
          'D. Loading the entire dataset into Azure Databricks for a one-time batch transform'
        ],
        answer: 'B',
        explanation: 'Event Hubs provides durable, replayable event ingestion, Stream Analytics processes the stream in near-real time, and archiving the raw events to Data Lake Storage preserves them for long-term storage and replay if a downstream job fails — the exact pair of requirements in the stem. A is a batch copy, which cannot meet the near-real-time clause. C is a transactional pattern that struggles with sustained streaming load and does not provide the replay semantics of an event hub. D is a one-time batch transform with no continuous ingestion. When the stem pairs near-real-time processing with replay, the event-hub-and-stream-processing combination is the answer, and this is the pattern the retired DP-203 blueprint taught under Develop data processing.'
      },
      {
        prompt: 'A team is building an analytical data platform and must choose a storage design for large, append-heavy files that will be queried by analysts. The files should be read efficiently for analytics, and the solution should separate storage from compute. Which approach is most appropriate?',
        options: [
          'A. A relational database with one table per file',
          'B. Azure Data Lake Storage with columnar file formats such as Parquet, partitioned by date',
          'C. A single large CSV file replaced entirely on each load',
          'D. JSON documents stored in a document database as the primary analytical store'
        ],
        answer: 'B',
        explanation: 'Azure Data Lake Storage with columnar formats like Parquet supports append-heavy ingestion, analytical query efficiency through column pruning, partitioning by date for query and lifecycle control, and the separation of storage from compute that the stem requires. A drags the schema rigidity and cost of a relational database onto an append-heavy analytical workload. C is inefficient for analytics — row-based CSV forces full scans and the replace-everything pattern breaks append. D works for operational document access but is not an analytical store for large files. The stem\u2019s combination of append-heavy, analytical, and storage-compute separation maps directly to a data lake with columnar files, the architecture at the centre of the DP-203 blueprint\u2019s data-storage domain.'
      },
      {
        prompt: 'A data platform must control who can read and write data in a data lake, keep data encrypted at rest, and audit access for compliance. Which set of controls should an administrator configure?',
        options: [
          'A. Storage account keys shared with all users, with no encryption configuration',
          'B. Azure RBAC roles and access control lists on the data lake, storage-side encryption with customer-managed keys, and diagnostic logging for audit',
          'C. A single shared account password documented in the team wiki',
          'D. Data copied to an unencrypted public bucket for analysts'
        ],
        answer: 'B',
        explanation: 'RBAC roles and ACLs enforce read and write control, encryption with customer-managed keys protects data at rest with key custody the organisation controls, and diagnostic logging provides the access audit trail — the three requirements in the stem. A and C both fail every requirement: shared credentials give no per-user control and no audit trail, and shared keys with no encryption configuration do not meet the encryption clause. D fails the security and compliance requirements outright and is never the answer. The stem is built on the security triad the DP-203 blueprint taught — authorisation, encryption at rest and auditing — and the correct option is the one that supplies all three controls rather than one or two of them.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The exam-day answer for DP-203 in 2026 is that there is no exam day: DP-203 retired on March 31, 2025 and cannot be scheduled, so the practical guidance below describes the delivery experience of the exam while it existed and, more usefully, what the successor DP-700 sitting looks like, because that is the exam a 2026 candidate will actually walk into. DP-203 was delivered through Pearson VUE at a test centre or online through OnVUE, with 120 minutes of exam time inside 140 minutes of seat time; the successor DP-700 is delivered the same way with 100 minutes of exam time. The centre-versus-OnVUE decision is the same for both: a centre gives you a supervised workstation, a physical erasable whiteboard useful for multi-step pipeline scenarios, and no room scan; OnVUE gives you your own desk but a stricter environment — a 360-degree room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved on the booking. Check what your booking allows rather than assuming, because the rules have tightened and an item that was acceptable a year ago can end your session now. Arrive or launch check-in thirty minutes early; OnVUE check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the layered scenario stems reward a deliberate method: underline the constraint clause before reading the options, flag anything costing more than ninety seconds, and do not take an unscheduled break through the exam interface because it locks you out of everything already seen. If your form includes a case study, decide before the clock starts whether to work it first while fresh or last with a known budget, and read the requirements tab twice. The Microsoft Learn panel is available on role-based exams — use it for two or three precise lookups, never as a safety net.',
    bring: [
      'Government-issued photo ID with your name matching your Microsoft Learn certification profile exactly — a middle-initial mismatch is a common and expensive turn-away',
      'A second form of ID for the test centre if your primary is not a passport or driving licence; check your Pearson VUE confirmation for what your country requires',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else; everything else goes into a locker',
      'For OnVUE: the phone used for check-in photo upload — it goes out of reach once check-in completes',
      'For OnVUE: a physical whiteboard with an erasable marker, only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room entirely for OnVUE',
      'Your own paper, pens, notebooks and sticky notes',
      'Second monitors — OnVUE requires a single display, and a disconnected second monitor on the desk is still a violation',
      'Bags, coats, hats and any headwear not worn for religious reasons',
      'Food and drink beyond what the centre permits; a clear water bottle is sometimes allowed at centres but is not guaranteed',
      'Anyone else in the room for OnVUE — the proctor ends the session if another person is heard or seen'
    ],
    timeline: [
      { time: 'Before booking', detail: 'Confirm you are booking the current exam — DP-700 — and not a retired code. DP-203 cannot be scheduled after March 31, 2025.' },
      { time: '2-3 days before', detail: 'Run the OnVUE system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start OnVUE check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for OnVUE a 360-degree room scan. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions inside seat time but outside exam time. The launch screen tells you your exam duration.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count and duration and set a per-question pace. If there is a case study or lab, decide immediately whether to work it first or last.' },
      { time: 'Throughout', detail: 'Underline constraints in scenario stems, mark anything costing more than 90 seconds, and move on. Do not take an unscheduled break through the interface.' },
      { time: 'Final 10 minutes', detail: 'Return to marked items and make sure nothing is blank; a guess beats an empty response because there is no penalty.' }
    ],
    rules: [
      'Pass mark is 700 on a 1-1,000 scale, and it is a scaled score that may not equal 70 percent of the questions.',
      'No penalty for incorrect answers — never leave an item blank.',
      'The Microsoft Learn panel is available because these are role-based exams; it covers learn.microsoft.com minus Q&A, practice assessments and your profile, and the clock keeps running while you use it.',
      'You cannot return to a case study or completed section once you move past it, and an unscheduled break through the exam interface ends access to everything already seen.',
      'No breaks are scheduled; if you take one via the interface it carries the same navigation penalty.',
      'No scratch paper of your own — centres supply an erasable whiteboard; OnVUE candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'If the exam is not offered in your preferred language you can request an additional 30 minutes when booking; this must be requested in advance, not on the day.',
      'DP-203 itself retired on March 31, 2025; these rules apply to the current DP-700 sitting.'
    ],
    afterwards:
      'For DP-203 the afterwards is simple: the credential remains on the transcript of anyone who earned it before the retirement but cannot be renewed, and Microsoft offered no automatic transition to the successor. For a candidate in 2026, the useful version of this section describes the current exam, DP-700: you get a preliminary pass or fail on screen within minutes of submitting, with the official result posting to your Microsoft Learn profile within a few hours, occasionally a couple of business days if a lab needs grading. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the skill areas, which Microsoft is explicit cannot be summed or read as percentages because the areas contain different numbers of questions. If you passed, the Fabric Data Engineer Associate credential is valid for 12 months and renewed free via an online assessment whose window opens six months before expiry — set the reminder now, and expect a new assessment cycle each year because Fabric changes monthly. If you failed, the retake rules apply: 24 hours before a second attempt, 14 days between subsequent attempts, five attempts maximum in the 12 months from your first sitting, and the full $165 fee each time. Use the skill-area chart to target the retake rather than restudying everything, and change your question source — repeating the same practice bank mostly measures how well you have memorised that bank.'
  }
};

export default data;
