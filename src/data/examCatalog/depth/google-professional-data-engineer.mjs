const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Google Cloud and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Google Cloud\'s Professional Data Engineer exam page and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Google Data Engineer" — the Professional Data Engineer certification validates data-engineering skill on Google Cloud, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Software Developers (SOC 15-1252, $132,270) as the adjacent engineering series. The fit is deliberate: Professional Data Engineer holders work as data engineers, data platform engineers and analytics engineers who build and operate pipelines on Google Cloud, and the data-engineering role sits between the data-scientist and developer series in the labour market. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a senior-hiring signal for data-engineering roles in Google Cloud shops. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, data scientists', value: '$112,590', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $68,170', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $172,270', note: 'BLS OOH, SOC 15-2051, May 2024' },
      { label: 'Median, software developers (adjacent engineering series)', value: '$132,270', note: 'BLS OOH, SOC 15-1252, May 2024' }
    ],
    growth: 'BLS projects 34 percent growth for data scientists from 2024 to 2034, about 23,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'Google Cloud publishes no pass rate — the Professional Data Engineer exam is 50-60 questions in 2 hours, with the score reported against a passing line',
    summary: 'Google Cloud does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Google does publish is the format: the Professional Data Engineer exam has 50-60 multiple-choice and multiple-select questions with a 2-hour time limit, delivered at a testing centre or through online proctoring, and the result is reported as a score against Google\'s passing line (Google does not publish the passing percentage). The exam fee is about $200. The exam content follows the published exam guide: designing and building data-processing systems; building and operationalising data-processing pipelines; designing and building data stores; and the data-engineering enablement and the machine-learning integration. The absence of a published pass rate is not an absence of standards: the Professional credential is one of Google Cloud\'s flagship data certifications, and the exam rewards hands-on data-engineering experience across the pipeline stack — BigQuery, Dataflow, Pub/Sub, Composer and the storage options. The practical reading: use Google\'s official exam guide and sample questions plus hands-on practice in a real project, because the exam rewards experience.',
    source: { label: 'Google Cloud - Professional Data Engineer certification', url: 'https://cloud.google.com/learn/certification/data-engineer' },
    caveat: 'Google publishes the format and fee but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Professional Data Engineer exam is a 50-60 question, 2-hour exam with a roughly $200 fee, built on the published exam guide: designing and building data-processing systems, building and operationalising pipelines, designing and building data stores, and the enablement and machine-learning integration. A defensible plan runs 120 to 180 hours over 10 to 14 weeks. Weeks 1-3: the design and architecture — the pipeline stages, the batch vs streaming design, and the Google Cloud data architecture. Weeks 4-6: the core services in depth — BigQuery, Dataflow, Pub/Sub, Composer and the storage options, with hands-on labs. Weeks 7-9: the data stores and the operationalisation — the database options, the pipeline operations, the monitoring and the troubleshooting. Weeks 10-11: the enablement and ML integration — the data-governance, the security and the Vertex AI basics. Weeks 12-14: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the Professional exam rewards real pipeline experience; building a pipeline in a real project is the highest-value preparation.',
    totalHours: '120-180 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Design and architecture', tasks: ['Pipeline stages and the design patterns', 'Batch vs streaming design', 'The Google Cloud data architecture'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Core services', tasks: ['BigQuery and Dataflow in depth', 'Pub/Sub and Composer', 'Hands-on pipeline labs'], hours: 45 },
      { label: 'Weeks 7-9', focus: 'Data stores and operations', tasks: ['The database and storage options', 'Pipeline operations and monitoring', 'Troubleshooting and optimisation'], hours: 40 },
      { label: 'Weeks 10-11', focus: 'Enablement and ML', tasks: ['Data governance and security', 'Vertex AI and ML basics', 'Compliance and best practices'], hours: 25 },
      { label: 'Weeks 12-14', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 30 }
    ],
    variants: [
      { label: 'Working data engineer', detail: 'The pipeline work accelerates the plan; focus study on the governance and ML-integration domains and the exam format.' },
      { label: 'From general cloud administration', detail: 'Add 2-3 weeks of data fundamentals and SQL before the service phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The Professional Data Engineer rewards hands-on data-engineering experience, so the dominant strategy is building a real pipeline in a Google Cloud project: ingest with Pub/Sub, process with Dataflow, store and analyse in BigQuery, and orchestrate with Composer, because the exam items test the stack in practice. Second, master the design patterns: batch vs streaming, and the trade-offs in pipeline design, are a distinct and heavily weighted area. Third, learn the data-store options and their fit — BigQuery for analytics, Cloud SQL and Spanner for transactions, Bigtable for low-latency — because the exam asks which store fits which workload. Fourth, use Google\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the passing line is unpublished. Finally, take at least two full timed practice exams; 50-60 questions in 2 hours is about 2 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Build a real pipeline', detail: 'Ingest, process, store and analyse — the exam tests the stack.' },
      { title: 'Master the design patterns', detail: 'Batch vs streaming and the pipeline trade-offs are weighted.' },
      { title: 'Learn the data-store fit', detail: 'Which store fits which workload is a core question pattern.' },
      { title: 'Hold to 80%+ on practice', detail: 'Google does not publish the pass line; leave no margin.' },
      { title: 'Run two full simulations', detail: '2 hours for 50-60 questions; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'Professional Data Engineer prep spans official Google resources and third-party courses. Google\'s own materials — the exam guide (free), sample questions and the Google Cloud Skills Boost data courses and labs — are the authoritative source; a Skills Boost subscription runs roughly $29-$99/month. Third-party providers sell Data Engineer courses and practice exams at $50-$400; the market is mature because the certification is popular. The free-trial Google Cloud project supports the hands-on pipeline practice. A realistic total budget is $250 to $800 including the $200 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'Google Cloud Skills Boost', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'Google free-trial project', values: ['$0', 'Real cloud environment', 'Building the pipeline the exam rewards'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and labs', 'Structured walkthrough of the guide'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the exam fee is about $200; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Professional Data Engineer mistake is studying the services in isolation: candidates who learn each Google Cloud data service alone cannot answer the integration items, which ask which combination of services fits a described pipeline. The fix is building and studying pipelines end to end. The second mistake is under-preparing the design patterns and the data-store fit — the batch-vs-streaming trade-offs and the store selection are distinct weighted areas. Third, candidates with no hands-on time meet the scenario items without the practical intuition they reward; use a real project. Fourth, many candidates skip full timed simulations and misjudge the reading-heavy pace. Finally, some candidates rely on a single third-party course without reading the official exam guide, losing the exact scope and weighting.',
    items: [
      { mistake: 'Studying services in isolation', fix: 'Build and study pipelines end to end; the exam tests integration.' },
      { mistake: 'Under-preparing design and stores', fix: 'Batch-vs-streaming trade-offs and store fit are weighted areas.' },
      { mistake: 'Skipping hands-on time', fix: 'A real project builds the intuition the scenarios reward.' },
      { mistake: 'Never running full simulations', fix: '2 hours for 50-60 questions; run two full timed exams.' },
      { mistake: 'Relying on one course', fix: 'Audit against the official exam guide for the exact scope.' }
    ]
  },
  questionTypes: {
    summary: 'The Professional Data Engineer exam is a 50-60 question multiple-choice and multiple-select exam in 2 hours. The items are scenario-heavy: a described data need — ingest a stream, build an ETL pipeline, choose a data store, operationalise and monitor, integrate ML — followed by the correct service combination, design choice or operational practice. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the pipeline-integration style of the real items.',
    types: [
      { name: 'Pipeline design items', share: 'Largest block', detail: 'The correct service combination and design for a data need.' },
      { name: 'Data-store items', share: 'Large block', detail: 'Which store fits which workload.' },
      { name: 'Operations and ML items', share: 'Meaningful block', detail: 'Monitoring, optimisation and ML integration.' }
    ],
    samples: [
      {
        prompt: 'A company must ingest high-volume streaming data and analyse it in near real time with minimal latency. The most appropriate combination is:',
        options: ['A. Pub/Sub ingestion with a Dataflow streaming pipeline and BigQuery analysis', 'B. A nightly batch upload', 'C. A single virtual machine', 'D. Manual file transfers'],
        answer: 'A',
        explanation: 'Pub/Sub ingests the stream, Dataflow processes it in real time, and BigQuery serves the analysis — the standard streaming stack. Batch uploads, a single VM or manual transfers each fail the streaming and latency requirements.'
      },
      {
        prompt: 'A workload needs transactional consistency with SQL and automatic scaling across regions. The most appropriate data store is:',
        options: ['A. Cloud Spanner', 'B. BigQuery', 'C. Cloud Storage', 'D. Bigtable'],
        answer: 'A',
        explanation: 'Cloud Spanner provides transactional SQL with global consistency and horizontal scaling — the fit for the requirement. BigQuery is analytics, Cloud Storage is object storage, and Bigtable is low-latency NoSQL.'
      },
      {
        prompt: 'A data engineer must orchestrate a pipeline with dependencies between jobs and retries. The most appropriate service is:',
        options: ['A. Cloud Composer (Apache Airflow)', 'B. A single SQL query', 'C. A spreadsheet', 'D. Manual job runs'],
        answer: 'A',
        explanation: 'Cloud Composer provides Airflow-based orchestration with dependencies and retries — the standard pipeline-orchestration tool. A single query, a spreadsheet or manual runs each lack the orchestration.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Professional Data Engineer exam is a 50-60 question, 2-hour computer-based exam at a testing centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen at the end, with the official result following; Google reports the result against its passing line without publishing a cohort pass rate. If you fail, Google allows retakes after a waiting period. On a pass, the certification is valid for two years, renewed by passing the current version or the renewal path. The afterwards matters: record the validity date and plan the renewal cycle.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '50-60 questions in 2 hours; pace ~2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Record the two-year validity date and plan the renewal.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 50-60 questions; the clock does not pause',
      'Retake rules and waiting periods apply after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for two years; renew by passing the current version or the renewal path. On a fail, retake after additional hands-on study.'
  }
};

export default data;
