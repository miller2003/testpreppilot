const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & cybersecurity certifications desk',
    bio: 'This desk covers Google Cloud and other cloud certifications. Exam structure, fees and rules come from the vendor certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Google Cloud\'s Associate Data Practitioner exam page and BLS OOH Data Scientists (SOC 15-2051), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Associate Data Practitioner" — the Google Cloud certification validates entry-level data skill on Google Cloud, and the wage question belongs to the role you perform with it. The closest official BLS occupation for the data careers the credential serves is Data Scientists, SOC 15-2051, which had a May 2024 median wage of $112,590, with the lowest 10 percent under $68,170 and the highest 10 percent above $172,270, with Computer Support Specialists (SOC 15-1231, $61,550) as the entry benchmark. The fit must be read with an honest caveat: the Associate Data Practitioner is an entry-level credential, so the realistic benchmark for a new holder sits far below the data-scientist median — the credential typically appears on the resume of a student, a career-changer or an IT professional adding data skill, and the data-career wage applies only after the experience the median describes. BLS counted 197,200 data scientist jobs in 2024 and projects a striking 34 percent growth from 2024 to 2034, with about 23,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and an entry certificate carries no wage premium in government data. Read the number as the market for the occupation the certificate is a step toward.',
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
    headline: 'Google Cloud publishes no pass rate — the Associate Data Practitioner exam is 50-60 questions in 2 hours, with the score reported against a passing line',
    summary: 'Google Cloud does not publish cohort pass rates for its certification exams, and third-party surveys are not official data, so we do not treat them as authoritative. What Google does publish is the format: the Associate Data Practitioner exam has 50-60 multiple-choice and multiple-select questions with a 2-hour time limit, delivered at a testing centre or through online proctoring, and the result is reported as a score against Google\'s passing line (Google does not publish the passing percentage). The exam fee is about $125. The exam content follows the published exam guide: the data lifecycle on Google Cloud, the core data services (BigQuery, Cloud Storage, Dataflow, Pub/Sub, Looker), and the data-governance and security basics. The absence of a published pass rate is not an absence of standards: the Associate credential is Google Cloud\'s entry data certification, and the exam rewards a working familiarity with the data services rather than deep technical depth. The practical reading: use Google\'s official exam guide and sample questions plus hands-on practice in a free-tier project, because the exam rewards experience.',
    source: { label: 'Google Cloud - Associate Data Practitioner certification', url: 'https://cloud.google.com/learn/certification/data-practitioner' },
    caveat: 'Google publishes the format and fee but no pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The Associate Data Practitioner exam is a 50-60 question, 2-hour exam with a roughly $125 fee, built on the published exam guide: the data lifecycle on Google Cloud, the core data services (BigQuery, Cloud Storage, Dataflow, Pub/Sub, Looker), and the governance and security basics. A defensible plan runs 60 to 100 hours over 6 to 8 weeks. Weeks 1-2: the data lifecycle and the fundamentals — the pipeline stages, the data types and the Google Cloud data architecture. Weeks 3-5: the core services — BigQuery for analysis, Cloud Storage for storage, Dataflow and Pub/Sub for processing, and Looker for visualisation, with hands-on labs in a free-tier project. Weeks 6-7: governance and security — IAM for data, encryption and the data-governance concepts. Weeks 8: scenario drilling and two full timed practice exams at the real format. The plan is hands-on-heavy because the exam rewards experience; a free-tier Google Cloud project is the highest-value study resource.',
    totalHours: '60-100 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Data lifecycle fundamentals', tasks: ['The data pipeline stages', 'Data types and the data architecture', 'Google Cloud data concepts'], hours: 20 },
      { label: 'Weeks 3-5', focus: 'Core data services', tasks: ['BigQuery and Cloud Storage', 'Dataflow and Pub/Sub', 'Looker and the visualisation stack'], hours: 40 },
      { label: 'Weeks 6-7', focus: 'Governance and security', tasks: ['IAM for data', 'Encryption and data governance', 'Compliance basics'], hours: 20 },
      { label: 'Week 8', focus: 'Drill and mocks', tasks: ['Scenario drilling in volume', 'Two full timed practice exams', 'Review weak domains'], hours: 15 }
    ],
    variants: [
      { label: 'Working with data', detail: 'Compress the fundamentals; the Google Cloud service names and labs are the new content.' },
      { label: 'New to data', detail: 'Add 2 weeks of general data concepts before the service phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The Associate Data Practitioner exam rewards hands-on data experience on Google Cloud, so the dominant strategy is practice in a free-tier project: load data into BigQuery, build a simple pipeline with Dataflow or Pub/Sub, and create a Looker dashboard, because the exam items test the services in practice. Second, learn the service boundaries precisely — which service fits which pipeline stage — because the exam asks purpose-level questions. Third, master the BigQuery material, the analysis core of the exam, and the data-lifecycle framing the guide presents. Fourth, use Google\'s official exam guide and sample questions, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the passing line is unpublished. Finally, take at least two full timed practice exams; 50-60 questions in 2 hours is about 2 minutes per item, and the scenario items are reading-heavy.',
    items: [
      { title: 'Practise in a free-tier project', detail: 'Load, process and visualise data — the exam tests the services.' },
      { title: 'Learn the service boundaries', detail: 'Which service fits which pipeline stage is the exam\'s pattern.' },
      { title: 'Master BigQuery', detail: 'The analysis core of the exam and the data lifecycle.' },
      { title: 'Hold to 80%+ on practice', detail: 'Google does not publish the pass line; leave no margin.' },
      { title: 'Run two full simulations', detail: '2 hours for 50-60 questions; drill the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'Associate Data Practitioner prep spans official Google resources and third-party courses. Google\'s own materials — the exam guide (free), sample questions and the Google Cloud Skills Boost data courses and labs — are the authoritative source; a Skills Boost subscription runs roughly $29-$99/month. Third-party providers sell Data Practitioner courses and practice exams at $50-$300. The free-trial Google Cloud project supports the hands-on practice. A realistic total budget is $150 to $600 including the $125 exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Google exam guide + sample questions', values: ['Free', 'Official PDF + practice items', 'The authoritative scope; read it first'] },
      { label: 'Google Cloud Skills Boost', values: ['$29-$99/month', 'Courses and hands-on labs', 'The official hands-on path'] },
      { label: 'Google free-trial project', values: ['$0', 'Real cloud environment', 'Loading and analysing data'] },
      { label: 'Third-party courses', values: ['$50-$300', 'Video courses and labs', 'Structured walkthrough of the guide'] },
      { label: 'Practice-exam products', values: ['$30-$120', 'Online simulated exams', 'Scenario drilling before the exam'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the exam fee is about $125; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common Associate Data Practitioner mistake is studying theory without touching the services: candidates who read about BigQuery but never load or query data meet the hands-on items without the practical intuition they reward. The fix is free-tier practice. The second mistake is studying like a senior data engineer instead of an associate: the exam is entry-level, and the deep configuration depth wastes time. Third, candidates skip the governance and security material, a distinct tested area. Fourth, some candidates never run a full timed simulation and misjudge the reading-heavy pace. Finally, treating the credential as the destination misses the point: it is the entry rung of the Google Cloud data track, and the Professional Data Engineer is the credential that benchmarks the data-career wages.',
    items: [
      { mistake: 'Studying without the services', fix: 'Load and query data in a free-tier project; the exam tests practice.' },
      { mistake: 'Studying at senior depth', fix: 'The exam is entry-level; cover the service purposes and basics.' },
      { mistake: 'Skipping governance and security', fix: 'A distinct tested area; cover it.' },
      { mistake: 'Never running full simulations', fix: '2 hours for 50-60 questions; run two full timed exams.' },
      { mistake: 'Treating it as the finish', fix: 'Plan the Professional Data Engineer as the next step.' }
    ]
  },
  questionTypes: {
    summary: 'The Associate Data Practitioner exam is a 50-60 question multiple-choice and multiple-select exam in 2 hours. The items are scenario-heavy: a described data need — load data, analyse it, process a stream, build a dashboard, secure the data — followed by the correct service, configuration or practice. Samples below are editor-written illustrations of the published exam guide, not live exam items; they show the data-service style of the real items.',
    types: [
      { name: 'Service-purpose items', share: 'Largest block', detail: 'Which Google Cloud data service fits a described need.' },
      { name: 'Pipeline scenario items', share: 'Large block', detail: 'Loading, processing and analysing data.' },
      { name: 'Governance and security items', share: 'Meaningful block', detail: 'IAM, encryption and data governance.' }
    ],
    samples: [
      {
        prompt: 'A data practitioner must run SQL analytics on a large dataset stored in Cloud Storage without managing servers. The most appropriate service is:',
        options: ['A. BigQuery', 'B. Compute Engine', 'C. Cloud VPN', 'D. Kubernetes Engine'],
        answer: 'A',
        explanation: 'BigQuery is the serverless data warehouse for SQL analytics on large datasets — including data in Cloud Storage via external tables. Compute, VPN and Kubernetes serve different purposes.'
      },
      {
        prompt: 'A company must process a continuous stream of sensor events for near-real-time analytics. The most appropriate service is:',
        options: ['A. Pub/Sub with a streaming pipeline', 'B. A nightly batch upload', 'C. A spreadsheet', 'D. Manual file transfer'],
        answer: 'A',
        explanation: 'Pub/Sub ingests streaming events and a streaming pipeline processes them for near-real-time analytics — the standard pattern. Batch uploads, spreadsheets or manual transfers each fail the streaming requirement.'
      },
      {
        prompt: 'To restrict which users can query a BigQuery dataset, the most appropriate control is:',
        options: ['A. IAM roles with least privilege', 'B. Making the dataset public', 'C. Sharing the project credentials', 'D. No access controls'],
        answer: 'A',
        explanation: 'Least-privilege IAM roles govern BigQuery access — the standard control. Public datasets, shared credentials or no controls each fail the access-governance requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam guide, not live exam items.'
  },
  examDay: {
    summary: 'The Associate Data Practitioner exam is a 50-60 question, 2-hour computer-based exam at a testing centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 2 minutes per item, flag uncertain items for review, and budget extra time for the reading-heavy scenario items. You receive your score on screen at the end, with the official result following; Google reports the result against its passing line without publishing a cohort pass rate. If you fail, Google allows retakes after a waiting period. On a pass, the certification is valid for two years, renewed by passing the current version or the renewal path. The afterwards matters: record the validity date, and plan the Professional Data Engineer as the next rung.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '50-60 questions in 2 hours; pace ~2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Record the two-year validity date and plan the next rung.' }
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
