// Depth content for: aws-certified-database-specialty
// Sources: AWS certification pages and techjacksolutions.com AWS retirement analysis
// (DBS-C01 retired April 30, 2024; 65 questions, 180 minutes, 750/1000, $300, valid 3
// years; five domains), AWS exam guide domain weights, AWS pricing and retake policy,
// bls.gov Occupational Outlook Handbook (May 2024 wage data).
// All facts checked 2026-08-05.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
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
      'The salary answer for the credential formerly earned by the AWS Certified Database – Specialty is $123,100, the May 2024 median for Database Administrators and Architects (SOC 15-1245), the closest Bureau of Labor Statistics occupation to the database specialist role the certification targeted. That is the honest headline, but the more important career fact in 2026 is that the exam itself is retired: AWS retired the Database – Specialty certification and its related DBS-C01 exam on April 30, 2024, with no direct replacement exam announced, so the wage figure describes the work, not a credential you can still earn under that name. The value of the number is that it anchors what database specialist work pays: the occupation that designs, deploys and manages database solutions sits at a $123,100 median, with the distribution running from roughly $65,510 at the lowest 10 percent to more than $190,100 at the highest 10 percent, and BLS projects 9 percent growth for it from 2024 to 2034 with about 9,400 openings a year — faster than the all-occupations average and driven by continued data growth and the shift of database workloads to the cloud. Two caveats belong on the number. First, BLS classifies by job duties, not by certificate, so the median describes everyone doing database work, including on-premises DBAs with no AWS skills; AWS-fluent engineers typically sit above it. Second, the relevant comparison in 2026 is the AWS Certified Data Engineer – Associate, launched in March 2024, which AWS positioned as the role-based path covering overlapping data-pipeline and infrastructure territory — so a candidate looking for a current AWS credential in this space should weigh that exam and the wider database knowledge this retired specialty validated.',
    rows: [
      { label: 'Median annual wage — database administrators and architects (SOC 15-1245)', value: '$123,100', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to the database specialist role.' },
      { label: 'Median — data scientists (SOC 15-2051)', value: '$112,590', note: 'BLS OOH, May 2024. Adjacent data role.' },
      { label: 'Median — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS OOH, May 2024. Upper reference for engineering-heavy data roles.' },
      { label: 'Projected employment change, 2024-34 (SOC 15-1245)', value: '+9%', note: 'BLS OOH, ~9,400 openings a year' },
      { label: 'Credential status', value: 'Retired 2024-04-30', note: 'DBS-C01 retired; no direct replacement — AWS pivoted to role-based certifications such as Data Engineer – Associate' }
    ],
    growth: '+9% projected change 2024-34 for database administrators and architects (SOC 15-1245, BLS OOH); in 2026 the AWS credential path for this space runs through current role-based certifications, not the retired DBS-C01',
    source: {
      label: 'BLS Occupational Outlook Handbook — Database Administrators and Architects',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'AWS published no pass rate for the Database – Specialty before it retired on April 30, 2024 — the 750/1000 cut score was the only official number',
    summary:
      'There was never a published pass rate for the AWS Certified Database – Specialty exam, because AWS does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification, and the percentages attached to DBS-C01 on forums and bootcamp pages were anecdote, inference or marketing rather than data. What AWS did publish, and still publishes for its current exams, is the scoring model and the cut score, and for DBS-C01 that was 750 on a scale of 100 to 1,000 — a scaled score, not a percentage of the 65 questions answered correctly, because AWS equates exam forms so that a harder set of items requires the same underlying ability as an easier one and the raw-to-scaled conversion cannot be reverse-engineered. Two structural facts from the exam guide mattered more than any rumoured pass rate. First, of the 65 questions on the paper, a portion were unscored experimental items included to validate future questions; candidates could not identify which items they were and had to answer them anyway. Second, there was no penalty for guessing, so an unanswered question was strictly worse than a guess. The scoring was compensatory across the five domains — Workload-Specific Database Design, Deployment and Migration, Management and Operations, Monitoring and Troubleshooting, and Database Security — meaning a candidate did not need to pass any individual domain, only the overall scaled score. The retake policy was published: a 14-day waiting period after a failed attempt, with the full $300 fee charged each time. For a candidate in 2026, the practical pass-rate question is different: you cannot sit DBS-C01 at all, so the planning question is whether the retired credential\u2019s knowledge base maps to a current AWS exam, and the honest answer is that AWS pivoted to role-based certifications such as the Data Engineer – Associate rather than offering a direct replacement.',
    source: {
      label: 'AWS — Certification and exam guide pages',
      url: 'https://aws.amazon.com/certification/'
    },
    caveat:
      'No pass rate was ever published by AWS for the Database – Specialty exam, and AWS publishes none for any certification; treat every percentage you see as unverified. The exam retired on April 30, 2024 and cannot be sat. What was published and verifiable: 65 questions in 180 minutes, a scaled passing score of 750 out of 1,000, $300 per attempt, a 14-day wait after a failed attempt, and three-year certification validity. The current AWS path in this space runs through role-based certifications such as Data Engineer – Associate.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the AWS Certified Database – Specialty is that you should not start one: the exam retired on April 30, 2024 and cannot be scheduled, so any plan under this slug is historical context for candidates deciding how to redirect the knowledge base to a current AWS credential. If you are deciding what to do with the DBS-C01 material, the honest plan is to map it forward. The retired exam measured database expertise across AWS-managed database services — relational engines like RDS and Aurora, the NoSQL flagship DynamoDB, Redshift for warehousing, ElastiCache for caching, and migration tooling like Database Migration Service and the Schema Conversion Tool — across five domains: Workload-Specific Database Design at 26 percent, Deployment and Migration at 20 percent, and Management and Operations, Monitoring and Troubleshooting, and Database Security at 18 percent each. The closest current AWS target is the Data Engineer – Associate, launched in March 2024, which covers overlapping data-pipeline and infrastructure territory but focuses on pipelines and data processing rather than database administration depth; for candidates whose daily work is relational or NoSQL database administration, the DBS-C01 knowledge base still describes the modern AWS database landscape, and the study pattern — relational engines, DynamoDB modelling, migration, security, monitoring — remains the correct map of the subject, just without a dedicated AWS exam at the end of it. For candidates who never sat DBS-C01, the practical plan is to study the current AWS data certification track and supplement with the database-service documentation this retired blueprint organised so well, budgeting roughly 80 to 120 hours and weighting time toward workload-specific database design, which carried the heaviest weight.',
    totalHours: 'Historical: ~80-120 hours. Current path: redirect to the AWS data certification track',
    weeks: [
      {
        label: 'Week 0',
        focus: 'Decide the current path and baseline',
        tasks: [
          'Confirm DBS-C01 is retired and cannot be scheduled; review the current AWS data certification options such as Data Engineer – Associate',
          'Assess which DBS-C01-era skills you already have: RDS, Aurora, DynamoDB, Redshift, ElastiCache, migration tooling',
          'Set up an AWS account with budget alerts for the services you will lab',
          'Take the current exam\u2019s official practice exam cold if one exists for your target credential'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-3',
        focus: 'Relational databases: RDS and Aurora',
        tasks: [
          'Master RDS: engine options, Multi-AZ, read replicas, backup and point-in-time recovery',
          'Learn Aurora: storage architecture, performance characteristics, Global Database and Serverless v2',
          'Cover parameter groups, option groups, Enhanced Monitoring and Performance Insights',
          'Deploy an RDS and an Aurora cluster and practise failover and replication scenarios'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'NoSQL: DynamoDB',
        tasks: [
          'Learn DynamoDB data modelling: partition keys, sort keys, local and global secondary indexes',
          'Cover capacity modes, DAX, streams, global tables and TTL',
          'Practise modelling a described access pattern into a DynamoDB schema',
          'Lab a DynamoDB table with a global secondary index and an on-demand capacity mode'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'Warehousing, caching and migration',
        tasks: [
          'Learn Redshift architecture: leader and compute nodes, distribution styles, sort keys and concurrency scaling',
          'Cover ElastiCache for Redis and Memcached and when caching fits a workload',
          'Master Database Migration Service and the Schema Conversion Tool for homogeneous and heterogeneous migrations',
          'Practise planning a migration with an assessment report and a cutover plan'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Security, monitoring and operations',
        tasks: [
          'Learn database security: encryption at rest and in transit, IAM authentication, and the shared responsibility model',
          'Cover monitoring and troubleshooting: CloudWatch, CloudTrail, Performance Insights and backup-restore workflows',
          'Practise a fixed diagnostic sequence for a database performance fault',
          'Take the target credential\u2019s practice exam and log the domains you miss'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 10',
        focus: 'Timed rehearsal and booking',
        tasks: [
          'Two full timed practice attempts for the current target exam',
          'Re-lab the scenarios you got wrong rather than re-reading them',
          'Final pass over the service-selection decision rules',
          'Book the current exam and run the Pearson VUE system test if testing online'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Already certified in DBS-C01 before retirement', detail: 'Your credential stays on your transcript through its three-year validity window but cannot be renewed as DBS-C01. To hold a current AWS credential, pass a current exam; the database knowledge maps most directly to the Data Engineer – Associate for pipeline-adjacent work.' },
      { label: 'Relational or NoSQL DBA with no AWS certification', detail: 'Eight to ten weeks. Your database fundamentals transfer; the genuinely new material is the AWS service map and the managed-service operations model, which needs deliberate lab time.' },
      { label: 'New to AWS databases', detail: 'Twelve to fourteen weeks, starting with the AWS fundamentals and then the service-by-service database material this retired blueprint organised so well.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The prep-strategy answer for the AWS Certified Database – Specialty in 2026 is to stop preparing for DBS-C01: the exam retired on April 30, 2024, and the strategies below describe how to convert its knowledge base into current, useful skills and a current AWS credential, which is the only way that knowledge is currently testable. The first strategy is to learn on the platform the current exams measure, because the DBS-C01-era service map — RDS, Aurora, DynamoDB, Redshift, ElastiCache and the migration tooling — remains the correct map of the AWS database landscape, but the credential path now runs through role-based certifications such as Data Engineer – Associate. Second, build the service-selection discipline that the retired exam demanded: the scenario questions asked which database service fits a described workload — relational versus NoSQL versus warehouse versus cache — and that decision framework is still the highest-value skill in the material, because it transfers to real database architecture work even without an exam. Third, learn DynamoDB modelling deliberately, because it is the most counter-intuitive part of the AWS database curriculum for relational-trained engineers: partition keys, sort keys, secondary indexes and the cost of a poor model are the difference between a scalable schema and a hot partition. Fourth, treat migration as a first-class skill: Database Migration Service, the Schema Conversion Tool and cutover planning appeared throughout the retired blueprint and remain exactly what employers hire database specialists to do. Fifth, use the AWS official practice exams for whichever current credential you target as the readiness gate, because no third-party bank is as well-calibrated. Finally, verify the version of anything you buy: material marketed as DBS-C01 preparation in 2026 is selling a retired exam, and the money is better spent on the current track.',
    items: [
      {
        title: 'Redirect to the current AWS data track',
        detail: 'DBS-C01 retired on April 30, 2024. The service map the exam organised — RDS, Aurora, DynamoDB, Redshift, ElastiCache and migration tooling — is still the correct map of AWS databases, but the credential path now runs through role-based certifications such as Data Engineer – Associate.'
      },
      {
        title: 'Build the database service-selection discipline',
        detail: 'The retired exam\u2019s core skill was choosing the right database service for a workload — relational versus NoSQL versus warehouse versus cache. That decision framework transfers directly to database architecture work, so rehearse the trade-offs deliberately.'
      },
      {
        title: 'Learn DynamoDB modelling the hard way',
        detail: 'Partition keys, sort keys, secondary indexes and the cost of a poor model are the difference between a scalable schema and a hot partition. For relational-trained engineers this is the most counter-intuitive part of the material and worth extra hours.'
      },
      {
        title: 'Treat migration as a first-class skill',
        detail: 'Database Migration Service, the Schema Conversion Tool and cutover planning appeared throughout the retired blueprint and remain exactly what employers hire database specialists to do. Practise planning a homogeneous and a heterogeneous migration end to end.'
      },
      {
        title: 'Use official practice exams as the gate',
        detail: 'For whichever current credential you target, the AWS official practice exam is the closest proxy for real item style and difficulty. Treat third-party scores as weak signals by comparison.'
      },
      {
        title: 'Verify the version of anything you buy',
        detail: 'Material marketed as DBS-C01 preparation in 2026 is selling a retired exam. Confirm you are buying for the current AWS data credential and check the exam code on the cover.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The resource-comparison answer for the AWS Certified Database – Specialty in 2026 is that you should be buying for a current AWS data credential instead, because the retired exam has no future and the resources that survive are the ones useful to the current track. The official AWS documentation and the exam guide for the current target credential are free and are the blueprint; the AWS database-service documentation — RDS, Aurora, DynamoDB, Redshift, ElastiCache and the migration tooling — is authoritative and free, and the official practice exam for the current credential costs $40 per attempt and is the closest available readiness gate. The justified spend for most candidates is lab time in a real AWS account, because database work is operational and the scenarios reward having configured the services; a pay-as-you-go account with budget alerts typically costs $30-80 across a study window if you delete resources between sessions. AWS Skill Builder offers both free and subscription tiers, with the subscription (roughly $29-49 a month) unlocking additional courses and practice volume. Third-party practice tests range from $20 to $100 depending on provider, with the caveat that none is as well-calibrated as the official practice exam. Books written for the DBS-C01 blueprint — and several are still on sale — remain useful as a structured reference for the AWS database service map, but only as a learning resource, because there is no exam at the end of them in 2026. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and sale status; AWS exam pricing for the current credential follows the standard schedule; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS database-service documentation and exam guide', values: ['Free', 'Official documentation and the current exam guide', 'The authoritative service map — RDS, Aurora, DynamoDB, Redshift, ElastiCache and migration tooling'] },
      { label: 'AWS official practice exam (current credential)', values: ['$40 per attempt', 'Timed practice exam', 'The readiness gate for whichever current AWS data exam you target'] },
      { label: 'AWS Skill Builder', values: ['Free tier; ~$29-49/month for subscription', 'Courses, labs and practice content', 'Structured AWS learning and practice volume'] },
      { label: 'Personal AWS account for labs', values: ['$30-80 across a study window if you delete resources', 'Live cloud environment with budget alerts', 'The hands-on backbone — database deployment, failover and migration need real infrastructure'] },
      { label: 'DBS-C01-era database books', values: ['~$40-70; several still on sale', 'Print + eBook', 'Structured reference for the AWS database service map — learning only, since the exam is retired'] },
      { label: 'Third-party practice tests', values: ['~$20-100 by provider', 'Question banks', 'Supplementary volume; confirm they are written for the current exam code'] },
      { label: 'Third-party video course', values: ['~$15-40 on sale', 'Video instruction', 'A structured narrative; confirm it targets the current AWS data credential'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; AWS Skill Builder subscription and practice-exam pricing can change. DBS-C01 retired on April 30, 2024 — buy only for the current AWS data credential. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistake around the AWS Certified Database – Specialty in 2026 is not a study mistake at all — it is studying the retired exam: candidates buy DBS-C01 books, courses and question banks that still rank well in search, spend months on the five-domain blueprint, and only discover when they try to book that the exam retired on April 30, 2024 and cannot be scheduled. The second mistake is assuming a direct replacement exists and waiting for it, when AWS retired the Database – Specialty as part of a strategic pivot toward role-based certifications and announced no direct successor; the current path is the Data Engineer – Associate and the wider AWS data track, which covers overlapping territory but is not the same exam. The third mistake is ignoring the scoring model of the retired exam and importing its misconceptions into current preparation: 750 out of 1,000 was a scaled score, not 75 percent of the 65 questions, and the same scaled model applies to current AWS exams, so candidates who plan around a percentage are using a heuristic that does not transfer. The fourth is leaving questions blank; AWS exams carry no penalty for guessing, and some questions are unscored experimental items, so a blank is strictly worse than a guess. The fifth is memorising service menus instead of the service-selection decision rules, which were the heart of the retired blueprint and remain the highest-value database-architecture skill. The sixth is underestimating DynamoDB modelling, the most counter-intuitive part of the material for relational-trained engineers. The seventh is treating the certification as permanent, when it was valid for three years and expired on that schedule. Finally, some candidates keep paying for DBS-C01-era material at full price when the same knowledge is organised better in current AWS documentation and the current credential\u2019s official materials.',
    items: [
      {
        mistake: 'Studying for the retired DBS-C01',
        fix: 'DBS-C01 retired on April 30, 2024 and cannot be booked. Confirm the current AWS data credential before buying anything, and check the exam code on the cover of every course and question bank.'
      },
      {
        mistake: 'Waiting for a direct replacement that was not announced',
        fix: 'AWS retired the Database – Specialty with no direct successor, pivoting to role-based certifications. The current path is the Data Engineer – Associate and the wider AWS data track — target a current exam rather than waiting.'
      },
      {
        mistake: 'Importing a percentage-based scoring plan',
        fix: 'AWS exams use scaled scores — 750 out of 1,000 is not a percentage of questions, and forms are equated so the conversion cannot be reverse-engineered. Plan to answer correctly across all domains rather than counting questions.'
      },
      {
        mistake: 'Leaving questions blank',
        fix: 'AWS exams carry no penalty for guessing, and some questions are unscored experimental items. An unanswered question is strictly worse than a guess, so never leave a blank.'
      },
      {
        mistake: 'Memorising service menus instead of selection rules',
        fix: 'The retired blueprint\u2019s core skill — choosing the right database service for a workload — remains the highest-value database-architecture skill. Rehearse the trade-offs between relational, NoSQL, warehouse and cache services.'
      },
      {
        mistake: 'Underestimating DynamoDB modelling',
        fix: 'Partition keys, sort keys and secondary indexes are the most counter-intuitive material for relational-trained engineers and the difference between a scalable schema and a hot partition. Give it extra hours even if it feels off your usual path.'
      },
      {
        mistake: 'Assuming the certification was permanent',
        fix: 'The Database – Specialty was valid for three years and expired on that schedule. Current AWS certifications also expire and require recertification by passing the current exam — diary the expiry of any credential you hold.'
      },
      {
        mistake: 'Paying for DBS-C01-era material at full price',
        fix: 'The same knowledge is organised better in current AWS documentation and the current credential\u2019s official materials. Redirect the budget to the current track and treat DBS-C01 books as optional reference, not a syllabus.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The AWS Certified Database – Specialty exam (DBS-C01) was 65 questions in 180 minutes, delivered through Pearson VUE or PSI at a test centre or online-proctored, with a scaled passing score of 750 out of 1,000, and AWS stated that a portion of the questions were unscored experimental items — and since the exam retired on April 30, 2024, this section is historical context that still describes how current AWS data exams are written. The question formats were multiple choice with a single correct answer and multiple response with two or more correct answers, and the five domains from the exam guide were Workload-Specific Database Design at 26 percent, Deployment and Migration at 20 percent, and Management and Operations, Monitoring and Troubleshooting, and Database Security at 18 percent each. The distinguishing feature of the paper was that most items were long scenario questions: a described database situation — a workload with specific latency, consistency, cost or availability requirements — followed by which database service, schema or architecture the specialist should choose, and the answer usually hinged on the service-selection trade-offs between RDS, Aurora, DynamoDB, Redshift, ElastiCache and the migration tooling rather than on remembering a specific command. Expect current AWS data exams to preserve this shape: scenario stems with a constraint buried in the middle, multiple-response items requiring several correct answers, and compensatory scoring across domains. The pacing math on the retired exam was roughly 2.7 minutes per question, which felt comfortable until a long multi-part scenario appeared. The samples below are editor-written illustrations of the published format and domains of the retired exam, not live exam items, and they are included because the database-selection reasoning they demonstrate remains directly relevant to current AWS data work.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Long scenario stems asking which database service, schema or architecture fits a described workload. The answer usually hinged on service-selection trade-offs rather than recall.' },
      { name: 'Multiple response', share: 'A significant minority', detail: 'Items requiring two or more correct answers. No partial credit, so each option is evaluated independently.' },
      { name: 'Service-selection scenario items', share: 'Heaviest in the workload-design domain', detail: 'Choose between RDS, Aurora, DynamoDB, Redshift and ElastiCache for a described workload with latency, consistency, cost or availability constraints.' },
      { name: 'Migration, security and troubleshooting items', share: 'Spread across the remaining domains', detail: 'DMS and SCT planning, encryption and IAM authentication, monitoring and performance diagnosis. These reward having executed the operations, not just read about them.' }
    ],
    samples: [
      {
        prompt: 'A transactional application requires a relational database with strong consistency, automated multi-AZ failover, and the ability to add read replicas for reporting traffic without impacting the primary. The team wants a managed service with minimal operational overhead. Which database service is the best fit?',
        options: [
          'A. Amazon RDS with a Multi-AZ deployment and read replicas',
          'B. Amazon DynamoDB with global tables',
          'C. Amazon Redshift with a leader node',
          'D. Self-managed MySQL on EC2'
        ],
        answer: 'A',
        explanation: 'Amazon RDS provides a managed relational database with Multi-AZ deployments for automated failover and read replicas for separating reporting traffic — the exact combination in the stem, and with minimal operational overhead because AWS manages the infrastructure. B is the classic distractor: DynamoDB is a NoSQL key-value and document database, so it is not a relational engine with SQL and joins, and global tables serve multi-region availability, not the relational failover-and-replica pattern described. C is a data warehouse for analytics, not a transactional relational database. D gives full control but places the failover and replica management on the team, contradicting the minimal-operational-overhead clause. When the stem pairs relational requirements with managed failover and read replicas, RDS is the answer.'
      },
      {
        prompt: 'An application must serve a read-heavy workload with consistent, low-latency access to a small set of frequently accessed items from a database. The team wants to reduce the load on the database and improve response times. Which approach best meets the requirement?',
        options: [
          'A. Add an Amazon ElastiCache layer in front of the database',
          'B. Convert the database to a larger instance type',
          'C. Add more indexes to every table',
          'D. Move all data to Amazon S3'
        ],
        answer: 'A',
        explanation: 'Amazon ElastiCache is the caching service purpose-built for read-heavy workloads with hot items: a cache in front of the database absorbs repeated reads, cuts database load and improves response times for the frequently accessed set. A is the standard pattern for exactly this requirement. B scales the database but does nothing to reduce the load for repeated reads of the same items — it just makes the hot reads more expensive to serve. C helps specific query paths but adds write overhead and does not address the read-hotspot pattern. D moves data to object storage, which is not a database with low-latency single-item access semantics. When the stem describes a read-heavy workload with hot items, the caching layer is the answer, and the exam expects you to know that ElastiCache exists for this reason.'
      },
      {
        prompt: 'A team must migrate an on-premises Oracle database to Amazon Aurora PostgreSQL with minimal downtime and reduced manual conversion effort. Which combination of AWS migration services should the team use?',
        options: [
          'A. AWS Schema Conversion Tool for schema conversion and AWS Database Migration Service for continuous replication',
          'B. A nightly full export of the Oracle database uploaded to S3',
          'C. Manual rewriting of every application query against a new schema',
          'D. Amazon S3 Transfer Acceleration with a one-time data load'
        ],
        answer: 'A',
        explanation: 'For a heterogeneous migration — Oracle to PostgreSQL — the standard AWS pairing is the Schema Conversion Tool to convert the schema and stored objects, and Database Migration Service to migrate the data with continuous replication, which supports minimal-downtime cutover. A is exactly that pairing. B is a batch export with a long downtime window and no schema conversion for the target engine. C is a manual rewrite of the application layer, which is part of some migrations but is not the AWS migration service answer, and it is not minimal effort. D accelerates an object transfer but does not convert a schema or manage a heterogeneous database migration. When the stem describes an engine-to-engine migration with minimal downtime, the DMS-plus-SCT pairing is the answer, and this combination appeared repeatedly on the retired exam\u2019s migration domain.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The exam-day answer for the AWS Certified Database – Specialty in 2026 is that there is no exam day: DBS-C01 retired on April 30, 2024 and cannot be scheduled, so the guidance below describes the delivery experience of the exam while it existed and, more usefully, what a current AWS data exam sitting looks like, because that is the exam a 2026 candidate will actually walk into. DBS-C01 was delivered through Pearson VUE or PSI at a test centre or online-proctored, with 65 questions in 180 minutes and a scaled passing score of 750 out of 1,000; current AWS exams are delivered the same way with the same scaled scoring. The centre-versus-online decision is the same for both: a centre gives you a supervised workstation and a physical erasable whiteboard useful for sketching a database topology or a failover plan, and no room scan; the online option gives you your own desk but a stricter environment — a room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved for your booking. Check what your booking allows rather than assuming, because the rules have tightened across proctoring providers and an item that was acceptable a year ago can end your session now. Arrive or launch check-in thirty minutes early; online check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the long scenario stems reward a deliberate method: underline the constraint clause before reading the options, flag anything costing more than two and a half minutes, and never leave a blank, because guessing carries no penalty and a portion of questions are unscored experimental items. Results were and are typically available within five business days through the AWS Certification account.',
    bring: [
      'Government-issued photo ID with your name matching your certification account exactly — a mismatch is a common and expensive turn-away',
      'A second form of ID at the test centre if your primary is not a passport or driving licence; check your Pearson VUE confirmation for what your country requires',
      'Your Pearson VUE confirmation and exam registration number',
      'At a test centre: nothing else; everything else goes into a locker',
      'For online testing: the phone used for check-in photo upload — it goes out of reach once check-in completes',
      'For online testing: a physical whiteboard with an erasable marker, only if explicitly permitted on your booking'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of the room entirely for online proctoring',
      'Your own paper, pens, notebooks and sticky notes',
      'Second monitors — online proctoring requires a single display, and a disconnected second monitor on the desk is still a violation',
      'Bags, coats, hats and any headwear not worn for religious reasons',
      'Food and drink beyond what the centre permits',
      'Anyone else in the room for online testing — the proctor ends the session if another person is heard or seen'
    ],
    timeline: [
      { time: 'Before booking', detail: 'Confirm you are booking a current AWS data exam and not a retired code; DBS-C01 cannot be scheduled after April 30, 2024.' },
      { time: '2-3 days before', detail: 'Run the online-proctoring system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start online check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for online testing a room scan. Test centres add a locker and a pocket check.' },
      { time: 'First 5 minutes', detail: 'Instructions and the non-disclosure agreement. Confirm the question count and the timer on the launch screen.' },
      { time: '0-150 minutes', detail: 'Steady sweep: underline constraints in scenario stems, answer what you know, flag anything costing more than two and a half minutes, and move on.' },
      { time: '150-180 minutes', detail: 'Return to flagged items with the remaining time divided across them. Answer every item — guessing carries no penalty and some questions are unscored.' },
      { time: 'After the exam', detail: 'Results are typically available within five business days through your AWS Certification account.' }
    ],
    rules: [
      'DBS-C01 was 65 questions in 180 minutes; current AWS data exams use the same scaled scoring model.',
      'Scaled passing score of 750 out of 1,000 for DBS-C01; the scoring is compensatory across domains.',
      'A portion of questions on AWS exams are unscored experimental items; you cannot identify them and must answer them anyway.',
      'No penalty for guessing — never leave an item blank.',
      'The retake policy for DBS-C01 was a 14-day wait after a failed attempt, with the full $300 fee each time.',
      'No scratch paper of your own — centres supply an erasable whiteboard; online candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'DBS-C01 retired April 30, 2024; these rules apply to the current AWS data exam you actually sit.'
    ],
    afterwards:
      'For DBS-C01 the afterwards is simple: the credential remained valid through its three-year term for anyone who earned it before the retirement, and AWS offered no direct replacement. For a candidate in 2026, the useful version of this section describes the current AWS data exam: results are typically available within five business days through your AWS Certification account, delivered as a pass or fail with a score report showing performance across the domains — and because AWS publishes no pass rate, the domain breakdown on a failed attempt is the most useful artefact the exam produces. If you passed, the certification is valid for three years and you can claim the digital badge and certificate from your AWS Certification account; recertification before expiry means passing the current version of the exam, so diary the expiry date. If you failed, the published rule is a 14-day wait before the next attempt with the full fee charged again, so resist the impulse to re-sit as soon as the window opens on the same preparation. Use the domain breakdown to identify the one or two areas that pulled you below 750 — typically the workload-design or migration domains — and spend the 14 days rebuilding those scenarios in a real AWS account before the retake, because a repeated attempt on the same knowledge is how a $300 exam becomes a $600 one.'
  }
};

export default data;
