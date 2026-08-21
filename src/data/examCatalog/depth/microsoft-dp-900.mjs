const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Microsoft and other IT certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised and sometimes retired on fixed schedules; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Microsoft\'s DP-900 exam page and study guide, and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "DP-900" — the Azure Data Fundamentals certification validates foundational data concepts on Azure, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the data careers the credential serves is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit must be read with an honest caveat: DP-900 is an entry-level fundamentals credential, so the realistic benchmark for a new holder sits far below the data-scientist median — the credential typically appears on the resume of a student, a career-changer or an IT professional adding data literacy, and the data-career wage applies only after the experience the median describes. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in government data. Read the number as the market for the occupation the certificate is a step toward.',
    rows: [
      { label: 'Median annual wage, data scientists (destination market)', value: '$112,590', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $68,170', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $172,270', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Median, computer support specialists (entry benchmark)', value: '$61,550', note: 'BLS OOH, SOC 15-1231, May 2024' }
    ],
    growth: 'BLS projects 34 percent growth for data scientists from 2024 to 2034, about 23,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate — it publishes the passing score: 700 of 1000, with a 40-60 question, 45-minute exam',
    summary: 'Microsoft does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Microsoft does publish is the format and the passing standard: the DP-900 exam has 40-60 questions with a 45-minute time limit, and a passing score of 700 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and Fundamentals certifications do not expire. The exam content follows the published study guide: core data concepts (relational vs non-relational data, batch vs streaming); data workloads on Azure (Azure SQL, Cosmos DB, Azure Storage, Azure Data Factory, Synapse, Azure Databricks); and the analytics and governance services. The absence of a published pass rate is not an absence of standards: the 700 line is a moderate bar for an entry-level fundamentals exam, and the exam rewards familiarity with the Azure data service family rather than deep configuration. The practical reading: target 80 percent-plus on practice, use Microsoft\'s free learning paths, and treat the credential as the entry rung toward the role-based data certifications (DP-203 and DP-300) that benchmark the data-career wages.',
    source: { label: 'Microsoft Learn - DP-900: Azure Data Fundamentals', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/' },
    caveat: 'Microsoft publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The DP-900 exam is a 40-60 question, 45-minute exam with a 700/1000 passing score, built on the published study guide: core data concepts, data workloads on Azure, and the analytics and governance services. The exam is an entry-level fundamentals test that rewards a working familiarity with the Azure data service family. A defensible plan runs 20 to 40 hours over 2 to 3 weeks. Week one: core data concepts — relational vs non-relational data, structured vs unstructured, batch vs streaming processing — using Microsoft\'s free learning path. Week two: the Azure data services — Azure SQL, Cosmos DB, Azure Storage, Data Factory, Synapse and Databricks — learning what each service is for and when to use it. Week three: analytics and governance — the analytics workloads and the data-governance concepts — then practice-question drilling and a timed practice exam at the real format. The plan is coverage-based because the exam rewards breadth across the service family; a candidate with basic data exposure moves quickly through the modules.',
    totalHours: '20-40 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Core data concepts', tasks: ['Relational vs non-relational data', 'Structured vs unstructured', 'Batch vs streaming workloads'], hours: 10 },
      { label: 'Week 2', focus: 'Azure data services', tasks: ['Azure SQL, Cosmos DB and Storage', 'Data Factory, Synapse and Databricks', 'When to use each service'], hours: 14 },
      { label: 'Week 3', focus: 'Analytics and drill', tasks: ['Analytics workloads and governance', 'Practice-question drilling', 'One timed practice exam'], hours: 10 }
    ],
    variants: [
      { label: 'Working with data', detail: 'Compress the concepts week; the Azure service names and purposes are the new content.' },
      { label: 'New to data', detail: 'Add a week of general data concepts before the service modules.' }
    ]
  },
  prepStrategies: {
    summary: 'The DP-900 exam rewards breadth across the Azure data service family, so the dominant strategy is systematic coverage with a service-purpose focus: learn what each Azure data service is for and when to use it, because the exam asks purpose-level questions rather than deep configuration. Second, use Microsoft\'s free learning path and the official study guide as the primary resources — they are the authoritative scope and are free, which makes the DP-900 one of the cheapest certifications to prepare for. Third, master the core concepts distinctions — relational vs non-relational, batch vs streaming — because the exam tests these contrasts directly. Fourth, drill the analytics and governance material, a distinct block that candidates focused on the database services often miss. Finally, take at least one timed practice exam at the real 45-minute format; the short window rewards efficient reading, and the practice assessments available from Microsoft and third parties mirror the item style.',
    items: [
      { title: 'Learn services by purpose', detail: 'The exam asks what each Azure data service is for.' },
      { title: 'Use the free official resources', detail: 'Microsoft Learn and the study guide are free and authoritative.' },
      { title: 'Master the concept contrasts', detail: 'Relational vs non-relational and batch vs streaming are tested directly.' },
      { title: 'Drill analytics and governance', detail: 'A distinct block; database-only study misses it.' },
      { title: 'Run one timed practice exam', detail: '45 minutes rewards efficient reading; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'DP-900 prep is inexpensive because Microsoft provides the core resources free. The Microsoft Learn learning path and the official study guide cover the scope at no cost, and Microsoft\'s practice assessments are free. Third-party providers sell DP-900 courses and practice exams at roughly $30-$200, with many candidates using a video course plus a practice bank; the free official stack is sufficient for a disciplined candidate. The exam fee is about $99. A realistic total budget is $100 to $300 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning path', values: ['Free', 'Official online modules', 'The authoritative scope; the primary resource'] },
      { label: 'Official study guide', values: ['Free', 'Official PDF', 'The exam-scope reference'] },
      { label: 'Microsoft practice assessment', values: ['Free', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party video courses', values: ['$30-$150', 'Video courses and quizzes', 'Structured walkthrough of the scope'] },
      { label: 'Practice-exam products', values: ['$20-$80', 'Online simulated exams', 'Extra drilling volume'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the DP-900 exam fee is about $99; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common DP-900 mistake is going too deep on one service and skipping the breadth: candidates who study Azure SQL deeply but cannot place Cosmos DB, Data Factory or Synapse miss the purpose-level items, which dominate the exam. The fix is balanced service coverage. The second mistake is studying configuration instead of concepts — the DP-900 tests what services are for and the core concept contrasts, not how to configure them. Third, candidates skip the analytics and governance block, a distinct tested area. Fourth, some candidates never take a timed practice exam and misjudge the 45-minute window. Finally, treating DP-900 as the destination misses the point: it is the entry rung of the Azure data track, and the role-based certifications (DP-203 data engineer, DP-300 database administrator) are what employers hire on.',
    items: [
      { mistake: 'Studying one service deeply', fix: 'Cover the whole service family; the exam tests purpose-level breadth.' },
      { mistake: 'Studying configuration depth', fix: 'The DP-900 tests concepts and service purposes, not configuration.' },
      { mistake: 'Skipping analytics and governance', fix: 'A distinct tested block; cover it.' },
      { mistake: 'Never timing a practice exam', fix: '45 minutes rewards efficient reading; run one timed practice.' },
      { mistake: 'Treating DP-900 as the finish', fix: 'Plan the role-based track (DP-203, DP-300).' }
    ]
  },
  questionTypes: {
    summary: 'The DP-900 exam is a 40-60 question multiple-choice exam in 45 minutes. The items test the published study guide: core data concepts, the Azure data services and the analytics and governance workloads — with many items asking what a service is for, which service fits a described need, or which concept distinction applies. The exam rewards breadth and data fluency rather than configuration depth. Samples below are editor-written illustrations of the published study guide, not live exam items; they show the concept-and-purpose style of the real items.',
    types: [
      { name: 'Concept items', share: 'Largest block', detail: 'Relational vs non-relational, batch vs streaming, structured vs unstructured.' },
      { name: 'Service-purpose items', share: 'Large block', detail: 'Which Azure data service fits a described need.' },
      { name: 'Analytics and governance items', share: 'Meaningful block', detail: 'Analytics workloads and data-governance concepts.' }
    ],
    samples: [
      {
        prompt: 'A company needs a database for a shopping-cart application with flexible, schemaless documents. The most appropriate Azure service is:',
        options: ['A. Azure Cosmos DB', 'B. Azure SQL Database', 'C. Azure Data Factory', 'D. Azure Databricks'],
        answer: 'A',
        explanation: 'Cosmos DB is the multi-model, schemaless NoSQL database built for flexible document workloads. SQL Database is relational, Data Factory is an integration service, and Databricks is an analytics platform.'
      },
      {
        prompt: 'Which statement best distinguishes batch processing from streaming processing?',
        options: ['A. Batch processes data in discrete jobs; streaming processes data continuously as it arrives', 'B. Batch is always faster', 'C. Streaming never stores data', 'D. Batch cannot use the cloud'],
        answer: 'A',
        explanation: 'Batch processing runs discrete jobs over collected data, while streaming processes data continuously as it arrives — the core distinction. The other statements misstate speed, storage and cloud use.'
      },
      {
        prompt: 'Which Azure service is primarily used to orchestrate and move data between sources and destinations in pipelines?',
        options: ['A. Azure Data Factory', 'B. Azure SQL Database', 'C. Azure Cosmos DB', 'D. Azure Virtual Machines'],
        answer: 'A',
        explanation: 'Data Factory is the data-integration and orchestration service for pipelines. SQL Database and Cosmos DB are data stores, and Virtual Machines are general compute.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published study guide, not live exam items.'
  },
  examDay: {
    summary: 'The DP-900 exam is a 40-60 question, 45-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at under a minute per item, flag uncertain items for review, and finish with time to spare. You receive your score on screen immediately, with the official result following; Microsoft reports your scaled score against the 700 line. If you fail, you may retake after a waiting period. On a pass, the Fundamentals certification does not expire. The afterwards matters: add the credential to your Microsoft Learn profile, and plan the next rung of the Azure data track — typically the DP-203 data engineer — while the concepts are fresh.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '40-60 questions in 45 minutes; pace under a minute per item.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 700/1000 passing line.' },
      { time: 'Next', detail: 'Add the credential to your profile and plan the next data rung.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '45 minutes for 40-60 questions; the clock does not pause',
      'Fundamentals certifications do not expire'
    ],
    afterwards: 'On a pass, your DP-900 is permanent. On a fail, retake after additional study. Plan the role-based track (typically DP-203) as the next step.'
  }
};

export default data;
