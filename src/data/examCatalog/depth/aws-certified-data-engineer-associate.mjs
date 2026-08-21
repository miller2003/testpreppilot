const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers AWS and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against AWS\'s Data Engineer - Associate exam guide (DEA-C01) and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS Data Engineer" — the certification validates data-engineering skill on AWS, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Software Developers (SOC 15-1252, $132,270 median) as the adjacent engineering series. The fit is deliberate: AWS Data Engineer holders work as data engineers, data platform engineers and analytics engineers who build and operate data pipelines on AWS, and the data-engineering role sits between the data-scientist and developer series in the labour market. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a hiring signal for data-engineering roles in AWS shops. Read the number as the market for the occupation the credential serves.',
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
    headline: 'AWS publishes no pass rate — it publishes the passing score: 720 of 1000, with a 65-question, 130-minute exam',
    summary: 'AWS does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What AWS does publish is the format and the passing standard: the Data Engineer - Associate exam (DEA-C01) has 65 questions with a 130-minute time limit, and a passing score of 720 on the 100-1000 scale. The exam is delivered at Pearson VUE centres or through online proctoring, and the certification is valid for three years. The exam content follows the official exam guide, with domains covering data ingestion and transformation, data store management, data operations, and data security and governance. The absence of a published pass rate is not an absence of standards: the Data Engineer exam is one of AWS\'s newer and most in-demand associate certifications, and the 720 line on 65 questions rewards hands-on familiarity with the AWS data services — S3, Glue, Athena, Redshift, Kinesis, Lambda and the analytics stack. The practical reading: target 80 percent-plus on practice and use AWS\'s official exam guide and sample questions, the closest thing to the real item style.',
    source: { label: 'AWS - Data Engineer Associate certification (DEA-C01)', url: 'https://aws.amazon.com/certification/certified-data-engineer-associate/' },
    caveat: 'AWS publishes the passing score and format but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The DEA-C01 is a 65-question, 130-minute exam with a 720/1000 passing score, built on the official exam guide domains: data ingestion and transformation, data store management, data operations, and data security and governance. The exam rewards hands-on knowledge of the AWS data services — S3, Glue, Athena, Redshift, Kinesis, Lambda, EMR and the analytics stack — and how they fit into pipelines. A defensible plan runs 100 to 150 hours over 8 to 12 weeks. Weeks 1-3: the data services foundation — S3 storage patterns, Glue cataloguing and ETL, Athena querying, and Kinesis ingestion, with hands-on labs in a free-tier project. Weeks 4-6: data store management — Redshift, the data-lake architecture (S3 plus Glue plus Athena), and the database options. Weeks 7-8: data operations — pipeline orchestration with Step Functions and EventBridge, monitoring, and performance. Weeks 9-10: security and governance — IAM for data, encryption, and the data-governance services. Weeks 11-12: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards real pipeline experience; building a small end-to-end pipeline in a free-tier project is the highest-value preparation.',
    totalHours: '100-150 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Ingestion and transformation', tasks: ['S3 storage patterns and Glue ETL', 'Athena querying and Kinesis ingestion', 'Hands-on pipeline labs'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Data stores', tasks: ['Redshift and the data-lake architecture', 'Database options and partitioning', 'Glue Data Catalog and table design'], hours: 35 },
      { label: 'Weeks 7-8', focus: 'Data operations', tasks: ['Orchestration: Step Functions and EventBridge', 'Pipeline monitoring and performance', 'Error handling and retries'], hours: 25 },
      { label: 'Weeks 9-10', focus: 'Security and governance', tasks: ['IAM for data services', 'Encryption and key management', 'Data governance and cataloguing'], hours: 20 },
      { label: 'Weeks 11-12', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 25 }
    ],
    variants: [
      { label: 'Working data engineer', detail: 'Compress the service foundation; spend the extra time on operations, security and scenario drills.' },
      { label: 'From general cloud administration', detail: 'Add 2-3 weeks of data fundamentals and SQL before the service phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The DEA-C01 rewards hands-on pipeline experience, so the dominant strategy is building a real end-to-end pipeline in a free-tier AWS project: ingest with Kinesis or S3, transform with Glue, query with Athena, and load to Redshift — because the exam items test how the services fit together in practice. Second, learn the service boundaries precisely: the exam asks which service fits a described pipeline stage, so purpose-level knowledge of S3, Glue, Athena, Redshift, Kinesis, Lambda and EMR matters more than deep configuration. Third, master the data-store management material — partitioning, the Glue Data Catalog and the data-lake architecture — a distinct domain that candidates new to AWS data often under-prepare. Fourth, use the official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 720 line leaves little margin. Finally, take at least two full timed practice exams; 65 questions in 130 minutes is exactly 2 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Build a real pipeline', detail: 'Ingest-transform-query-load in a free-tier project covers the exam\'s core.' },
      { title: 'Learn the service boundaries', detail: 'Which service fits which pipeline stage is the exam\'s central pattern.' },
      { title: 'Master data-store management', detail: 'Partitioning, the Glue catalog and the lake architecture are a distinct domain.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 720/1000 line leaves little margin.' },
      { title: 'Run two full simulations', detail: '65 questions in 130 minutes; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'DEA-C01 prep spans official AWS resources and third-party courses. AWS\'s own materials — the exam guide (free), sample questions and the AWS Skill Builder data courses and labs — are the authoritative source; a Skill Builder subscription runs roughly $29-$99/month. Third-party providers sell Data Engineer courses and practice exams at $50-$400; the market is growing quickly because the certification is new and in demand. The AWS free tier supports the hands-on pipeline practice the exam rewards. A realistic total budget is $200 to $700 including the $150 exam fee and one to three months of Skill Builder. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'AWS Skill Builder', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'AWS free tier', values: ['$0', 'Real cloud environment', 'Building the pipeline the exam rewards'] },
      { label: 'Third-party courses', values: ['$50-$400', 'Video courses and labs', 'Structured walkthrough of the domains'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the DEA-C01 exam fee is $150; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common DEA-C01 mistake is studying the services in isolation: candidates who learn each AWS data service alone cannot answer the integration items, which ask which combination of services fits a described pipeline. The fix is building and studying pipelines end to end. The second mistake is under-preparing data-store management and governance — the partitioning, cataloguing and security domains that distinguish this exam from a general AWS exam. Third, candidates with no hands-on time meet the scenario items without the practical intuition they reward; use a free-tier project. Fourth, many candidates skip full timed simulations and misjudge the reading-heavy pace. Finally, some candidates rely on a single third-party course without reading the official exam guide, losing the exact scope and weighting.',
    items: [
      { mistake: 'Studying services in isolation', fix: 'Build and study pipelines end to end; the exam tests integration.' },
      { mistake: 'Under-preparing stores and governance', fix: 'Partitioning, cataloguing, security and governance are distinct domains.' },
      { mistake: 'Skipping hands-on time', fix: 'A free-tier pipeline builds the intuition the scenarios reward.' },
      { mistake: 'Never running full simulations', fix: '65 questions in 130 minutes; run two full timed exams.' },
      { mistake: 'Relying on one course', fix: 'Audit against the official exam guide for the exact scope.' }
    ]
  },
  questionTypes: {
    summary: 'The DEA-C01 is a 65-question multiple-choice and multiple-response exam in 130 minutes. The items are scenario-heavy: a described data pipeline need — ingest streaming data, transform at scale, query a lake, load a warehouse, secure the data — followed by the correct service combination, configuration or operational practice. The exam tests the AWS data services across the exam guide domains. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the pipeline-integration style of the real items.',
    types: [
      { name: 'Pipeline scenario items', share: 'Majority', detail: 'The correct service combination for a described data need.' },
      { name: 'Data-store management items', share: 'Meaningful share', detail: 'Partitioning, cataloguing, lake and warehouse design.' },
      { name: 'Security and operations items', share: 'Meaningful share', detail: 'IAM, encryption, monitoring and orchestration.' }
    ],
    samples: [
      {
        prompt: 'A company must ingest streaming data from thousands of devices and make it available for near-real-time analytics. The most appropriate service combination is:',
        options: ['A. Amazon Kinesis Data Streams for ingestion with a downstream consumer for analytics', 'B. A nightly batch upload to S3', 'C. A single large EC2 instance running a database', 'D. Manual file transfers'],
        answer: 'A',
        explanation: 'Kinesis Data Streams is built for streaming ingestion at scale, with consumers for near-real-time processing. Batch uploads, a single instance or manual transfers each fail the streaming and scale requirements.'
      },
      {
        prompt: 'A data engineer must query structured data directly in S3 without loading it into a database. The most appropriate service is:',
        options: ['A. Amazon Athena', 'B. Amazon Redshift', 'C. Amazon DynamoDB', 'D. Amazon EMR'],
        answer: 'A',
        explanation: 'Athena is the serverless query service that runs SQL directly on S3 data — the data-lake query pattern. Redshift is a warehouse, DynamoDB is a NoSQL database, and EMR runs big-data frameworks.'
      },
      {
        prompt: 'To enforce column-level access control for analysts querying a data lake, the most appropriate control is:',
        options: ['A. Lake Formation permissions and fine-grained access policies', 'B. Making the S3 bucket public', 'C. A shared admin credential', 'D. Encrypting the bucket with no access controls'],
        answer: 'A',
        explanation: 'AWS Lake Formation provides fine-grained, column-level permissions for lake analytics. Public buckets, shared credentials or encryption without access control each fail the access-governance requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The DEA-C01 is a 65-question, 130-minute computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the $150 fee. Pace at exactly 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen immediately, with the official result and score report following; AWS reports your scaled score against the 720 line. If you fail, you may retake after a 14-day waiting period. On a pass, the certification is valid for three years; recertify by passing the current exam or the recertification path. The afterwards matters: record the expiration date and plan the recertification cycle early.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '65 questions in 130 minutes; pace 2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen against the 720/1000 passing line.' },
      { time: 'Next', detail: 'Record the three-year validity date and plan recertification.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '130 minutes for 65 questions; the clock does not pause',
      'A 14-day wait applies before retaking after a fail'
    ],
    afterwards: 'On a pass, your certification is valid for three years; recertify by passing the current exam or the recertification path. On a fail, wait 14 days and retake after additional domain study.'
  }
};

export default data;
