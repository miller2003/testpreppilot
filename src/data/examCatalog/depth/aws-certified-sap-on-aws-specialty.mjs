// Depth content for: aws-certified-sap-on-aws-specialty
// Sources: AWS certification blog announcement (PAS-C01 launched 2022, exam details: 65
// questions, 170 minutes, $300, 750/1000, 3-year validity), AWS retirement blog post
// (certification retired April 30, 2024), aguidetocloud.com and hydranode.ai for the
// four domain weights, AWS pricing and retake policy, bls.gov Occupational Outlook
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
    headline: '$133,080 median for software developers (BLS, May 2024) — the closest occupation to the SAP-on-cloud architect role',
    summary:
      'The salary answer for the credential formerly earned by the AWS Certified SAP on AWS – Specialty is $133,080, the May 2024 median for Software Developers (SOC 15-1252), the closest Bureau of Labor Statistics occupation to the SAP-on-cloud architect and Basis-adjacent roles the certification targeted — and the caveats matter, because BLS has no occupation called SAP architect and the people earning this credential work at the intersection of enterprise software and cloud infrastructure. That is the honest headline, but the more important career fact in 2026 is that the exam itself is retired: AWS retired the SAP on AWS – Specialty certification and its related PAS-C01 exam on April 30, 2024, so the wage figure describes the work, not a credential you can still earn under that name. The value of the number is that it anchors what the work pays: software developers at $133,080 with the lowest 10 percent below $79,850 and the highest 10 percent above $211,450, and BLS projects 16 percent growth from 2024 to 2034 with roughly 115,000 openings a year — a strong outlook for the broader software field that SAP-on-AWS specialists inhabit. For context, computer and information systems managers (SOC 11-3021) earned a $171,200 median in the same release, which is the direction an SAP Basis architect moving into a technical management or enterprise architecture role drifts over time. Where the retired credential showed its value most concretely was in AWS customer organisations running SAP workloads and in SAP-focused consultancies and AWS partners, which used it as evidence of expertise in designing, migrating and operating SAP on AWS — skills that remain in demand even though the AWS exam that certified them is gone.',
    rows: [
      { label: 'Median annual wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to SAP-on-cloud and architecture roles.' },
      { label: 'Median — computer and information systems managers (SOC 11-3021)', value: '$171,200', note: 'BLS OOH, May 2024. Direction for architects moving into technical management.' },
      { label: 'Lowest 10 percent — software developers', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent — software developers', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Credential status', value: 'Retired 2024-04-30', note: 'PAS-C01 retired; no direct replacement announced by AWS' }
    ],
    growth: '+16% projected change 2024-34 for software developers (SOC 15-1252, BLS OOH), with roughly 115,000 openings a year; SAP-on-AWS skills remain in demand even though the AWS exam that certified them is retired',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'AWS published no pass rate for the SAP on AWS – Specialty before it retired on April 30, 2024 — the 750/1000 cut score was the only official number',
    summary:
      'There was never a published pass rate for the AWS Certified SAP on AWS – Specialty exam, because AWS does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification, and the percentages attached to PAS-C01 on forums and bootcamp pages were anecdote, inference or marketing rather than data. What AWS did publish, and still publishes for its current exams, is the scoring model and the cut score, and for PAS-C01 that was 750 on a scale of 100 to 1,000 — a scaled score, not a percentage of the 65 questions answered correctly, because AWS equates exam forms so that a harder set of items requires the same underlying ability as an easier one and the raw-to-scaled conversion cannot be reverse-engineered. Two structural facts from the exam guide mattered more than any rumoured pass rate. First, of the 65 questions on the paper, a portion were unscored experimental items included to validate future questions; candidates could not identify which items they were and had to answer them anyway. Second, there was no penalty for guessing, so an unanswered question was strictly worse than a guess. The scoring was compensatory across the four domains — Design of SAP Workloads on AWS, Implementation of SAP Workloads on AWS, Migration of SAP Workloads to AWS, and Operation and Maintenance of SAP on AWS — meaning a candidate did not need to pass any individual domain, only the overall scaled score. The retake policy was published: a 14-day waiting period after a failed attempt, with the full $300 fee charged each time. For a candidate in 2026, the practical pass-rate question is different: you cannot sit PAS-C01 at all, so the planning question is whether the retired credential\u2019s knowledge base still has career value, and the honest answer is that the SAP-on-AWS skills it validated remain in demand even though AWS retired the exam without announcing a direct replacement.',
    source: {
      label: 'AWS — Certification and exam guide pages',
      url: 'https://aws.amazon.com/certification/'
    },
    caveat:
      'No pass rate was ever published by AWS for the SAP on AWS – Specialty exam, and AWS publishes none for any certification; treat every percentage you see as unverified. The exam retired on April 30, 2024 and cannot be sat. What was published and verifiable: 65 questions in 170 minutes, a scaled passing score of 750 out of 1,000, $300 per attempt, a 14-day wait after a failed attempt, and three-year certification validity.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the AWS Certified SAP on AWS – Specialty is that you should not start one: the exam retired on April 30, 2024 and cannot be scheduled, so any plan under this slug is historical context for candidates deciding how to use the knowledge base without the credential at the end of it. If you are deciding what to do with the PAS-C01 material, the honest plan is to map it forward: the retired exam measured expertise in designing, implementing, migrating and operating SAP workloads on AWS, with the four domains weighted as Design of SAP Workloads on AWS at 30 percent, Migration of SAP Workloads to AWS at 26 percent, Implementation of SAP Workloads on AWS at 24 percent, and Operation and Maintenance of SAP on AWS at 20 percent. The knowledge itself — SAP HANA on EC2, system replication, high availability and disaster recovery clustering, DMO and SWPM migration strategies, Backint backups, cost optimisation and the Well-Architected lens for SAP — remains the working map of the subject for any architect or Basis professional running SAP on AWS, and AWS still publishes the SAP-specific documentation, the Well-Architected Framework for SAP and the free digital course material the exam drew from. For candidates who never sat PAS-C01, the practical plan is to study that current AWS documentation and the free four-hour SAP on AWS technical course, then validate skills with the AWS Certified Solutions Architect path or the Data Engineer track rather than a retired specialty exam, budgeting roughly 100 to 140 hours and weighting time toward the design and migration domains, which together carried more than half the retired paper.',
    totalHours: 'Historical: ~100-140 hours. Current path: study the AWS SAP documentation and redirect validation to a current credential',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Design of SAP workloads on AWS',
        tasks: [
          'Learn SAP architecture on AWS: SAP HANA on EC2, instance sizing and storage design for SAP',
          'Cover the Well-Architected Framework applied to SAP: reliability, performance, cost and security for SAP workloads',
          'Learn SAP certification and support requirements for running on AWS',
          'Read the AWS SAP-specific documentation and the free digital course material'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Migration of SAP workloads to AWS',
        tasks: [
          'Learn the migration toolchain: DMO and SWPM, homogenous and heterogeneous migration paths',
          'Cover migration planning, assessment and cutover, including data-volume realities for large SAP systems',
          'Practise planning a migration with a target architecture and a rollback path',
          'Study the SAP Sizing and migration documentation AWS publishes'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Implementation of SAP workloads on AWS',
        tasks: [
          'Learn implementing new SAP workloads: EC2 and storage configuration, network design and security groups',
          'Cover high availability and disaster recovery: SAP HANA System Replication, HA clustering and multi-region DR',
          'Practise a Backint-based backup and restore design',
          'Build a small SAP-like stack in an AWS account with budget alerts to see the services live'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Operation and maintenance of SAP on AWS',
        tasks: [
          'Learn operating SAP on AWS: monitoring, patching, cost optimisation and the operational model',
          'Cover the failure and recovery scenarios an architect must design for, from instance failure to region loss',
          'Study the AWS SAP documentation updates and the current AWS data and architecture certification paths',
          'Take a current AWS practice exam to gauge where your skills sit'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Redirect validation to a current credential',
        tasks: [
          'Decide which current AWS credential validates your skills — the Solutions Architect or Data Engineer path are the natural fits',
          'Study the chosen credential\u2019s current exam guide and official practice exam',
          'Two full timed practice attempts for the chosen credential',
          'Book the current exam and run the Pearson VUE system test if testing online'
        ],
        hours: '10-12 hrs/week'
      }
    ],
    variants: [
      { label: 'SAP Basis architect with AWS experience', detail: 'Six to eight weeks of updating. Your SAP knowledge is the hard part to replace; the AWS-specific material is well documented and free, and the fastest path to a current AWS credential is the Solutions Architect exam.' },
      { label: 'AWS architect learning SAP', detail: 'Twelve to fourteen weeks. The AWS side is familiar; the genuinely new material is SAP architecture — HANA, NetWeaver, system replication, DMO migration — which needs deliberate study of the SAP-on-AWS documentation.' },
      { label: 'Already certified before retirement', detail: 'Your credential remains valid through its three-year term but cannot be renewed as PAS-C01. To hold a current AWS credential, pass a current exam; the SAP knowledge maps most naturally to the Solutions Architect path.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The prep-strategy answer for the AWS Certified SAP on AWS – Specialty in 2026 is to stop preparing for PAS-C01: the exam retired on April 30, 2024, and the strategies below describe how to convert its knowledge base into current, useful skills and a current AWS credential, which is the only way that knowledge is currently testable. The first strategy is to learn from the current AWS documentation rather than retired-exam material, because AWS still publishes the SAP-specific technical documentation, the Well-Architected Framework for SAP and the free four-hour SAP on AWS digital course that the exam drew from — and those sources are kept current, unlike a PAS-C01 book. Second, build the design-and-migration discipline the retired exam demanded: the scenario questions asked which architecture, sizing or migration path fits a described SAP workload, and that decision framework — HANA on EC2 versus a managed path, DMO versus SWPM, single-region HA versus multi-region DR — is still the highest-value skill in the material, because it transfers directly to real SAP-on-AWS architecture work even without an exam. Third, treat migration as a first-class skill: DMO and SWPM planning, cutover and rollback appeared throughout the retired blueprint and remain exactly what employers hire SAP-on-AWS specialists to do. Fourth, practise high availability and disaster recovery design deliberately, because HANA System Replication, HA clustering and the RPO-and-RTO trade-offs are the substance of the reliability domain. Fifth, redirect validation to a current AWS credential such as Solutions Architect, and use its official practice exam as the readiness gate. Finally, verify the version of anything you buy: material marketed as PAS-C01 preparation in 2026 is selling a retired exam.',
    items: [
      {
        title: 'Learn from current AWS documentation, not retired-exam material',
        detail: 'AWS still publishes the SAP-specific documentation, the Well-Architected Framework for SAP and the free SAP on AWS digital course. Those sources are kept current; a PAS-C01 book is not, and the exam it prepares for no longer exists.'
      },
      {
        title: 'Build the design and migration decision framework',
        detail: 'The retired exam\u2019s core skill was choosing the right architecture for a described SAP workload — HANA on EC2 versus a managed path, DMO versus SWPM, single-region HA versus multi-region DR. That framework transfers directly to real SAP-on-AWS work.'
      },
      {
        title: 'Treat migration as a first-class skill',
        detail: 'DMO and SWPM planning, cutover and rollback appeared throughout the retired blueprint and remain exactly what employers hire SAP-on-AWS specialists to do. Practise planning a migration with a target architecture and a rollback path.'
      },
      {
        title: 'Drill high availability and disaster recovery design',
        detail: 'SAP HANA System Replication, HA clustering and the RPO-and-RTO trade-offs are the substance of the reliability domain. Rehearse designing HA and DR for a described SAP workload end to end.'
      },
      {
        title: 'Redirect validation to a current AWS credential',
        detail: 'The natural current targets are the Solutions Architect or Data Engineer certifications. Use their official practice exams as the readiness gate and book a current exam rather than waiting for a retired one to return.'
      },
      {
        title: 'Verify the version of anything you buy',
        detail: 'Material marketed as PAS-C01 preparation in 2026 is selling a retired exam. Confirm you are buying for a current AWS credential and check the exam code on the cover.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The resource-comparison answer for the AWS Certified SAP on AWS – Specialty in 2026 is that you should be buying for a current AWS credential instead, because the retired exam has no future and the resources that survive are the ones useful to the current SAP-on-AWS and cloud-architecture track. The official AWS SAP documentation, the Well-Architected Framework for SAP and the free four-hour SAP on AWS technical course are free and authoritative, and they remain the best-organised body of SAP-on-AWS material anywhere — the retired exam drew directly from them, and they are kept current. The justified spend for most candidates is lab time in a real AWS account, because SAP-on-AWS work is operational and the scenarios reward having configured the services; a pay-as-you-go account with budget alerts typically costs $30-80 across a study window if you delete resources between sessions. On the paid side, AWS Skill Builder offers both free and subscription tiers, with the subscription (roughly $29-49 a month) unlocking additional courses and practice volume, and the official practice exam for the current target credential costs $40 per attempt and is the closest available readiness gate. Books written for the PAS-C01 blueprint — several are still on sale — remain useful as a structured reference for SAP-on-AWS architecture, but only as a learning resource, because there is no exam at the end of them in 2026. Third-party practice tests range from $20 to $100, with the caveat that none is as well-calibrated as the official practice exam. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and sale status; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS SAP on AWS documentation and digital course', values: ['Free', 'Technical documentation, Well-Architected guidance for SAP, free four-hour course', 'The authoritative body of SAP-on-AWS material — current and free'] },
      { label: 'AWS official practice exam (current credential)', values: ['$40 per attempt', 'Timed practice exam', 'The readiness gate for whichever current AWS exam you target'] },
      { label: 'AWS Skill Builder', values: ['Free tier; ~$29-49/month for subscription', 'Courses, labs and practice content', 'Structured AWS learning and practice volume'] },
      { label: 'Personal AWS account for labs', values: ['$30-80 across a study window if you delete resources', 'Live cloud environment with budget alerts', 'The hands-on backbone — SAP-like stacks, HA/DR and migration need real infrastructure'] },
      { label: 'PAS-C01-era SAP on AWS books', values: ['~$40-70; several still on sale', 'Print + eBook', 'Structured reference for SAP-on-AWS architecture — learning only, since the exam is retired'] },
      { label: 'Third-party practice tests', values: ['~$20-100 by provider', 'Question banks', 'Supplementary volume; confirm they are written for the current exam code'] },
      { label: 'Third-party video course', values: ['~$15-40 on sale', 'Video instruction', 'A structured narrative; confirm it targets a current AWS credential'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; AWS Skill Builder subscription and practice-exam pricing can change. PAS-C01 retired on April 30, 2024 — buy only for a current AWS credential. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistake around the AWS Certified SAP on AWS – Specialty in 2026 is not a study mistake at all — it is studying the retired exam: candidates buy PAS-C01 books, courses and question banks that still rank well in search, spend months on the four-domain blueprint, and only discover when they try to book that the exam retired on April 30, 2024 and cannot be scheduled. The second mistake is assuming a direct replacement exists and waiting for it, when AWS retired the SAP on AWS – Specialty without announcing a successor; the current validation path runs through credentials like Solutions Architect, which cover the AWS side but not the SAP depth the specialty provided. The third mistake is ignoring the scoring model of the retired exam and importing its misconceptions into current preparation: 750 out of 1,000 was a scaled score, not 75 percent of the 65 questions, and the same scaled model applies to current AWS exams, so candidates who plan around a percentage are using a heuristic that does not transfer. The fourth is leaving questions blank; AWS exams carry no penalty for guessing, and some questions are unscored experimental items, so a blank is strictly worse than a guess. The fifth is studying only the AWS side and skipping the SAP architecture material — the HANA, NetWeaver, system replication and DMO migration content that was the differentiator of the specialty and remains the hard-to-replace knowledge. The sixth is underestimating the migration and HA/DR domains, which together with design carried the bulk of the retired paper. The seventh is treating the certification as permanent, when it was valid for three years and expired on that schedule. Finally, some candidates keep paying for PAS-C01-era material at full price when the same knowledge is organised better in current AWS documentation.',
    items: [
      {
        mistake: 'Studying for the retired PAS-C01',
        fix: 'PAS-C01 retired on April 30, 2024 and cannot be booked. Confirm the current AWS credential before buying anything, and check the exam code on the cover of every course and question bank.'
      },
      {
        mistake: 'Waiting for a direct replacement that was not announced',
        fix: 'AWS retired the SAP on AWS – Specialty without announcing a successor. The current validation path runs through credentials like Solutions Architect — target a current exam rather than waiting for a retired one to return.'
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
        mistake: 'Studying only the AWS side and skipping SAP material',
        fix: 'The SAP architecture content — HANA, NetWeaver, system replication and DMO migration — was the differentiator of the specialty and remains the hard-to-replace knowledge. Study it deliberately even without an exam at the end.'
      },
      {
        mistake: 'Underestimating migration and HA/DR',
        fix: 'Migration, implementation and design together carried more than three-quarters of the retired paper. Rehearse DMO and SWPM planning, HANA System Replication and the RPO-and-RTO trade-offs as first-class skills.'
      },
      {
        mistake: 'Assuming the certification was permanent',
        fix: 'The SAP on AWS – Specialty was valid for three years and expired on that schedule. Current AWS certifications also expire and require recertification by passing the current exam — diary the expiry of any credential you hold.'
      },
      {
        mistake: 'Paying for PAS-C01-era material at full price',
        fix: 'The same knowledge is organised better in current AWS documentation, the Well-Architected Framework for SAP and the free digital course. Redirect the budget to the current track and treat PAS-C01 books as optional reference, not a syllabus.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The AWS Certified SAP on AWS – Specialty exam (PAS-C01) was 65 questions in 170 minutes, delivered through Pearson VUE or PSI at a test centre or online-proctored, with a scaled passing score of 750 out of 1,000, and AWS stated that a portion of the questions were unscored experimental items — and since the exam retired on April 30, 2024, this section is historical context that still describes how current AWS exams are written. The question formats were multiple choice with a single correct answer and multiple response with two or more correct answers, and the four domains from the exam guide were Design of SAP Workloads on AWS at 30 percent, Migration of SAP Workloads to AWS at 26 percent, Implementation of SAP Workloads on AWS at 24 percent, and Operation and Maintenance of SAP on AWS at 20 percent. The distinguishing feature of the paper was that most items were long scenario questions: a described SAP workload situation — a sizing constraint, a migration requirement, an availability target, a cost pressure — followed by which architecture, sizing or migration path the specialist should choose, and the answer usually hinged on the interplay between SAP architecture concepts (HANA, NetWeaver, system replication, DMO) and AWS services (EC2, EBS, VPC, S3, Backint) rather than on remembering a single fact. Expect current AWS exams to preserve this shape: scenario stems with a constraint buried in the middle, multiple-response items requiring several correct answers, and compensatory scoring across domains. The pacing math on the retired exam was roughly 2.6 minutes per question, which felt comfortable until a long multi-part scenario appeared. The samples below are editor-written illustrations of the published format and domains of the retired exam, not live exam items, and they are included because the SAP-on-AWS reasoning they demonstrate remains directly relevant to current enterprise-cloud work.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Long scenario stems asking which architecture, sizing or migration path fits a described SAP workload. The answer usually hinged on SAP-and-AWS trade-offs rather than recall.' },
      { name: 'Multiple response', share: 'A significant minority', detail: 'Items requiring two or more correct answers. No partial credit, so each option is evaluated independently.' },
      { name: 'Architecture-decision scenario items', share: 'Heaviest in the design domain', detail: 'Choose between HANA-on-EC2 architectures, storage and sizing configurations, HA and DR designs under availability and cost constraints.' },
      { name: 'Migration, implementation and operations items', share: 'Spread across the remaining domains', detail: 'DMO versus SWPM planning, cutover and rollback, HA clustering, Backint backups, monitoring and cost optimisation. These reward having executed the operations.' }
    ],
    samples: [
      {
        prompt: 'An organisation is migrating an on-premises SAP HANA system to AWS and must minimise downtime. The migration must move both the database and the application layer, and the team wants to use the automated conversion tools SAP provides where possible. Which migration strategy is most appropriate?',
        options: [
          'A. Use SAP DMO with system move to migrate and convert the system in one tool-driven process',
          'B. Rebuild the entire SAP system manually from scratch on AWS',
          'C. Export the HANA database nightly and import it into a new AWS system over several weeks',
          'D. Move only the application layer and keep the database on-premises permanently'
        ],
        answer: 'A',
        explanation: 'SAP DMO (Database Migration Option) with system move is the tool-driven approach for migrating an SAP system to a new platform while converting the database in the same process, and it is designed to minimise downtime by automating much of the migration — the combination the stem demands. B is a manual rebuild that discards the benefit of the automated conversion tools and is neither minimal-downtime nor tool-driven. C is a long-downtime batch approach that drags the cutover across weeks and contradicts the minimise-downtime clause. D leaves the database on-premises, which is not a migration of the system at all. When the stem pairs SAP-to-AWS migration with minimal downtime and the automated tools, DMO with system move is the answer, and this was a recurring pattern on the retired migration domain.'
      },
      {
        prompt: 'A mission-critical SAP system on AWS must remain available if an entire availability zone is lost. The solution must protect the database with a mechanism SAP supports natively and must recover automatically where possible. Which design best meets the requirement?',
        options: [
          'A. SAP HANA System Replication with automatic failover between hosts in different availability zones',
          'B. A single large EC2 instance with no replication, restored from backup on failure',
          'C. Daily Amazon S3 backups of the entire system with manual restore',
          'D. An Amazon EC2 Auto Scaling group of stateless application instances with no database replication'
        ],
        answer: 'A',
        explanation: 'SAP HANA System Replication is the native SAP mechanism for database-level replication, and deploying it across hosts in different availability zones gives automatic or near-automatic failover if an entire AZ is lost — the exact requirement in the stem. A supplies both the native mechanism and the cross-AZ placement. B has no replication and relies on restore-from-backup, which measures recovery in hours, not automatic failover. C provides recovery but not automatic failover, and backup-restore is a disaster-recovery mechanism rather than high availability. D replicates the stateless application tier but leaves the database unreplicated, so the system cannot survive an AZ loss. When the stem pairs AZ loss with a native SAP mechanism, HANA System Replication across AZs is the answer, and this pairing recurred throughout the retired reliability content.'
      },
      {
        prompt: 'An SAP system on AWS must have reliable, automated backups of the HANA database integrated with the native SAP backup interface, so that database backups are coordinated with the application. Which backup approach should be used?',
        options: [
          'A. Backint-based backups using the SAP HANA backup interface to a compatible AWS backup target',
          'B. Manual database dumps scheduled by an administrator',
          'C. Point-in-time snapshots of the EC2 instance taken without SAP coordination',
          'D. A nightly full export of application data only, ignoring the database'
        ],
        answer: 'A',
        explanation: 'Backint is the SAP HANA backup interface, and Backint-based backups to a compatible AWS target coordinate the backup through SAP itself, so the database and application backups are managed consistently and the backup can be restored through the SAP tooling. A is the design the retired blueprint taught for SAP on AWS backup. B is manual and does not provide the coordinated, automated interface the stem requires. C takes EC2 snapshots without SAP coordination, which can produce inconsistent database backups because the HANA state is not integrated. D backs up the application data and ignores the database, which is not a usable backup of the system. When the stem mentions the native SAP backup interface, Backint is the answer, and the backup domain expected you to name it.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The exam-day answer for the AWS Certified SAP on AWS – Specialty in 2026 is that there is no exam day: PAS-C01 retired on April 30, 2024 and cannot be scheduled, so the guidance below describes the delivery experience of the exam while it existed and, more usefully, what a current AWS exam sitting looks like, because that is the exam a 2026 candidate will actually walk into. PAS-C01 was delivered through Pearson VUE or PSI at a test centre or online-proctored, with 65 questions in 170 minutes and a scaled passing score of 750 out of 1,000; current AWS exams are delivered the same way with the same scaled scoring. The centre-versus-online decision is the same for both: a centre gives you a supervised workstation and a physical erasable whiteboard useful for sketching a HANA architecture or a migration cutover plan, and no room scan; the online option gives you your own desk but a stricter environment — a room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved for your booking. Check what your booking allows rather than assuming, because the rules have tightened across proctoring providers and an item that was acceptable a year ago can end your session now. Arrive or launch check-in thirty minutes early; online check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the long scenario stems reward a deliberate method: underline the constraint clause before reading the options, flag anything costing more than two and a half minutes, and never leave a blank, because guessing carries no penalty and a portion of questions are unscored experimental items. Results were and are typically available within five business days through the AWS Certification account.',
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
      { time: 'Before booking', detail: 'Confirm you are booking a current AWS exam and not a retired code; PAS-C01 cannot be scheduled after April 30, 2024.' },
      { time: '2-3 days before', detail: 'Run the online-proctoring system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start online check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for online testing a room scan. Test centres add a locker and a pocket check.' },
      { time: 'First 5 minutes', detail: 'Instructions and the non-disclosure agreement. Confirm the question count and the timer on the launch screen.' },
      { time: '0-140 minutes', detail: 'Steady sweep: underline constraints in scenario stems, answer what you know, flag anything costing more than two and a half minutes, and move on.' },
      { time: '140-170 minutes', detail: 'Return to flagged items with the remaining time divided across them. Answer every item — guessing carries no penalty and some questions are unscored.' },
      { time: 'After the exam', detail: 'Results are typically available within five business days through your AWS Certification account.' }
    ],
    rules: [
      'PAS-C01 was 65 questions in 170 minutes; current AWS exams use the same scaled scoring model.',
      'Scaled passing score of 750 out of 1,000 for PAS-C01; the scoring is compensatory across domains.',
      'A portion of questions on AWS exams are unscored experimental items; you cannot identify them and must answer them anyway.',
      'No penalty for guessing — never leave an item blank.',
      'The retake policy for PAS-C01 was a 14-day wait after a failed attempt, with the full $300 fee each time.',
      'No scratch paper of your own — centres supply an erasable whiteboard; online candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'PAS-C01 retired April 30, 2024; these rules apply to the current AWS exam you actually sit.'
    ],
    afterwards:
      'For PAS-C01 the afterwards is simple: the credential remained valid through its three-year term for anyone who earned it before the retirement, and AWS offered no direct replacement. For a candidate in 2026, the useful version of this section describes the current AWS exam: results are typically available within five business days through your AWS Certification account, delivered as a pass or fail with a score report showing performance across the domains — and because AWS publishes no pass rate, the domain breakdown on a failed attempt is the most useful artefact the exam produces. If you passed, the certification is valid for three years and you can claim the digital badge and certificate from your AWS Certification account; recertification before expiry means passing the current version of the exam, so diary the expiry date. If you failed, the published rule is a 14-day wait before the next attempt with the full fee charged again, so resist the impulse to re-sit as soon as the window opens on the same preparation. Use the domain breakdown to identify the one or two areas that pulled you below 750 — typically the design or migration domains — and spend the 14 days rebuilding those scenarios in a real AWS account before the retake, because a repeated attempt on the same knowledge is how a $300 exam becomes a $600 one.'
  }
};

export default data;
