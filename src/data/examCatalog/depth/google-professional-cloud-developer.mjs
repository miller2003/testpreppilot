// Depth content for: google-professional-cloud-developer
// Sources: cloud.google.com/learn/certification/cloud-developer (exam page: 50-60 questions,
// two hours, $200 registration, English and Japanese, delivery via Pearson VUE), Google
// Cloud certification renewal FAQs (2-year validity, renewal within eligibility period),
// pass-it.ai and jayendrapatil.com for the April 24, 2026 exam restructure and domain
// weights, bls.gov Occupational Outlook Handbook (May 2024 wage data).
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
    headline: '$133,080 median for software developers (BLS, May 2024) — the closest occupation to the cloud developer role',
    summary:
      'The direct salary answer for the Professional Cloud Developer certification is $133,080, the May 2024 median for Software Developers (SOC 15-1252), the closest Bureau of Labor Statistics occupation to the cloud application developer role this exam validates. That is the honest headline, and two caveats belong next to it. First, BLS classifies by job duties rather than by certificate, so the median describes everyone doing software development work, including developers with no Google Cloud skills; developers whose day-to-day work is building and running cloud-native applications on Google Cloud tend to sit above it, while first-year hires sit below. Second, the distribution is worth reading because the role spans a wide band: the lowest 10 percent of software developers earned less than $79,850 and the highest 10 percent more than $211,450, and a Professional Cloud Developer who pairs the credential with real GCP delivery experience moves toward the upper half of that range. The growth picture is genuinely strong: BLS projects software developer employment to grow 16 percent from 2024 to 2034, much faster than the all-occupations average, with roughly 115,000 openings a year, driven by continued expansion in software, cloud and AI-related development. Where the credential shows its value most concretely is in Google Cloud customer organisations and Google Cloud partners, which look for certified developers when staffing cloud-native projects and partner programmes that track certified headcount; recruiters also use the Professional-level Google Cloud certifications as a hard filter for senior developer and cloud-application roles. The honest framing is that this is a professional-level credential — Google recommends 3-plus years of industry experience including one-plus years designing and managing solutions with Google Cloud — so it is an upskilling and signalling credential for working developers rather than an entry point, and its wage value comes from documenting cloud-native development competence that employers increasingly expect rather than from the certificate alone.',
    rows: [
      { label: 'Median annual wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to a cloud developer.' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — all computer and IT occupations', value: '$105,990', note: 'BLS OOH, May 2024' },
      { label: 'Employment, 2024 / projected change (SOC 15-1252)', value: '1,693,800 jobs / +16% (2024-34)', note: 'BLS OOH; roughly 115,000 openings a year' }
    ],
    growth: '+16% projected change 2024-34 for software developers (SOC 15-1252, BLS OOH), with roughly 115,000 openings a year — strong demand for developers with cloud-native delivery skills',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Google publishes no pass rate and no cut score for the Professional Cloud Developer exam — plan against the format and the pass-fail report instead',
    summary:
      'There is no published pass rate for the Professional Cloud Developer exam, because Google does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification exam, and the pass percentages you will see attached to the credential on forums and bootcamp pages — including the frequently repeated 70 percent figure — are anecdote or inference, not official data. Google also does not publish a cut score for this exam: candidates receive a pass or fail result and a per-domain report, but no numerical threshold, and the often-cited 70 percent is an estimate derived from Google Cloud skills-boost and training material rather than a number Google publishes. What Google does publish is the format, and that is what planning should be built around: the exam is 50 to 60 multiple-choice and multiple-select questions in two hours, available in English and Japanese, with a registration fee of $200 plus applicable tax, delivered through Pearson VUE either online-proctored or at a test centre. The retake policy is published: after a failed attempt there is a 14-day waiting period before you can retake, with no limit on the number of attempts, and the full fee is charged each time. The structural facts that matter for preparation are the pass-fail report format and the domain coverage: Google reports performance by domain rather than a score, so the report on a failed attempt tells you where to aim the retake, and the exam was restructured with a new version launching April 24, 2026, so any preparation material must be checked against the current outline rather than an older version. For a candidate weighing whether the credential is worth it, the honest answer on pass rates is that no official figure exists, and the published numbers that do exist — 50 to 60 questions, two hours, $200, 14-day retake wait — are the ones this page can verify.',
    source: {
      label: 'Google Cloud — Professional Cloud Developer certification page',
      url: 'https://cloud.google.com/learn/certification/cloud-developer'
    },
    caveat:
      'Google publishes no pass rate and no cut score for the Professional Cloud Developer exam; the frequently cited 70 percent threshold is an estimate, not an official figure, and we have deliberately left the pass-rate table empty. What is published and verifiable: 50-60 multiple-choice and multiple-select questions in two hours, $200 registration fee plus applicable tax, pass-fail reporting with per-domain feedback, a 14-day retake wait after a failed attempt with no attempt limit, and a two-year certification validity with renewal within the eligibility period.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the Professional Cloud Developer exam is 90 to 140 hours over eight to twelve weeks for a developer with the recommended three-plus years of industry experience including one-plus years on Google Cloud, and the first planning fact is to confirm which version you are studying: a new version of the exam launched on April 24, 2026, restructuring the content around four domains — designing highly scalable, secure and reliable cloud-native applications, building and testing applications, configuring applications for deployment, and integrating applications with Google Cloud services — so material written for the older outline leaves real gaps. The exam itself is 50 to 60 multiple-choice and multiple-select questions in two hours, $200 plus tax, delivered through Pearson VUE, with a pass-fail report rather than a numerical score. The plan below front-loads the heaviest domain, designing cloud-native applications — which the restructured outline weights around 36 percent and covers compute platform selection, load balancing, caching, API design, event-driven architecture and data access — then moves through building and testing, configuring for deployment, and integrating with Google Cloud services. The practical backbone is hands-on time in a real Google Cloud project: the exam assumes you have built and deployed applications on Cloud Run, GKE, Cloud Functions and App Engine, configured CI/CD with Cloud Build and Artifact Registry, and integrated Cloud Storage, Firestore, Pub/Sub and Cloud SQL, and a candidate who has actually done that work answers the scenario items differently from one who has only read about it. Budget roughly a third of your hours for deployment and integration labs rather than theory, and run the official Google Cloud practice exam and sample questions as the readiness gate, because the exam rewards having operated the services, not just recognised them.',
    totalHours: '90-140 hours over 8-12 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Cloud-native application design',
        tasks: [
          'Learn compute platform selection: when Cloud Run, GKE, Cloud Functions and App Engine fit, and the trade-offs between them',
          'Cover load balancing, caching, API design (REST and gRPC) and service orchestration with Workflows, Cloud Tasks and Cloud Scheduler',
          'Learn event-driven architecture: Eventarc, Pub/Sub and how to choose between them for asynchronous processing',
          'Start a free Google Cloud project and deploy a simple service to Cloud Run to build the foundation'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Building and testing applications',
        tasks: [
          'Set up a development environment: Cloud Shell, Cloud SDK, Cloud Code, and emulators for local development',
          'Learn the build and test toolchain: Cloud Build, Artifact Registry, and unit and integration testing patterns',
          'Cover containerised development: Dockerfile patterns, image scanning and Binary Authorization',
          'Practise writing and running tests against emulated Google Cloud services'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Configuring applications for deployment',
        tasks: [
          'Deploy applications to Cloud Run and GKE from source, with triggers from Eventarc and Pub/Sub',
          'Learn health checks, resource requirements, horizontal pod autoscaling and traffic splitting',
          'Configure service accounts with least privilege and manage application credentials',
          'Practise rolling deployments and rollbacks'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Integrating with Google Cloud services',
        tasks: [
          'Learn data and storage integration: Cloud SQL, Firestore, Cloud Storage, and when to choose each',
          'Cover consuming Google Cloud APIs, REST, gRPC and the client libraries',
          'Learn observability: metrics, logs, traces, Error Reporting and troubleshooting with Google Cloud Observability',
          'Build one application that uses compute, storage and messaging together end to end'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Practice exams and gap closing',
        tasks: [
          'Take the official Google Cloud practice exam and the sample questions, and log which domains you miss',
          'Re-build the scenarios you got wrong in your own project',
          'Two full timed 2-hour practice attempts',
          'Book through Pearson VUE and run the online-proctoring system test'
        ],
        hours: '10-12 hrs/week'
      }
    ],
    variants: [
      { label: 'Working developer with daily Google Cloud exposure', detail: 'Compress to six to eight weeks. Your day job covers deployment and integration; spend the recovered time on the design domain and on the services you do not touch at work, and verify your study material matches the April 2026 outline.' },
      { label: 'Developer coming from another cloud', detail: 'Twelve to fourteen weeks. Your application design and CI/CD skills transfer; the genuinely new material is the Google Cloud service map — Cloud Run versus GKE versus Cloud Functions, Firestore versus Cloud SQL versus Cloud Storage — which needs deliberate lab time.' },
      { label: 'Studying before the April 2026 restructure', detail: 'Do not. Confirm the current version first; a course written for the pre-April-2026 outline teaches a superseded structure and leaves you exposed on the restructured domains.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move a Professional Cloud Developer score are the ones that force deployment in a real Google Cloud project, because the exam assumes you have built and run cloud-native applications and the scenario items punish candidates who have only read about the services. The single highest-yield habit is to build one end-to-end application in a real Google Cloud project — deploy to Cloud Run, add a Firestore or Cloud SQL data layer, wire in Pub/Sub or Eventarc, and configure observability — because the exam\u2019s integration and deployment scenarios reward exactly that executed loop, and Google\u2019s own guidance stresses hands-on experience over theory. Second, learn the service-selection decisions rather than the service menus: the exam frequently asks which service fits a described workload — Cloud Run versus GKE versus Cloud Functions, Firestore versus Cloud SQL versus Cloud Storage, Pub/Sub versus Eventarc versus Cloud Tasks — and the candidates who do well have rehearsed those decision rules, not memorised feature lists. Third, use the official Google Cloud practice exam and sample questions as the readiness gate, because they are the closest available proxy for the real item style and difficulty, and log every miss by domain. Fourth, practise the CI/CD loop deliberately: Cloud Build, Artifact Registry, triggers and deployment pipelines are a core part of the blueprint, and building a pipeline that deploys to Cloud Run from a repository is a finite, high-yield lab. Fifth, rehearse the 50-60 questions in two hours as a pacing exercise — that is roughly two minutes per question, which is comfortable until a long scenario appears, so practise flagging and moving. Finally, verify your material matches the April 24, 2026 version of the exam, because the restructure changed the domain structure and any course recorded before it teaches a superseded outline.',
    items: [
      {
        title: 'Build one end-to-end application in a real GCP project',
        detail: 'Deploy to Cloud Run, add a Firestore or Cloud SQL data layer, wire in Pub/Sub or Eventarc, and configure observability. The exam\u2019s integration and deployment scenarios reward exactly this executed loop, and Google\u2019s own guidance stresses hands-on experience.'
      },
      {
        title: 'Learn the service-selection decisions, not the service menus',
        detail: 'The exam asks which service fits a described workload — Cloud Run versus GKE versus Cloud Functions, Firestore versus Cloud SQL versus Cloud Storage. Rehearse those decision rules rather than memorising feature lists.'
      },
      {
        title: 'Use the official practice exam as the readiness gate',
        detail: 'Google\u2019s practice exam and sample questions are the closest proxy for the real item style and difficulty. Take them, log every miss by domain, and re-build the scenarios you got wrong in your own project.'
      },
      {
        title: 'Practise the CI/CD loop deliberately',
        detail: 'Cloud Build, Artifact Registry, triggers and deployment pipelines are core to the blueprint. Building a pipeline that deploys to Cloud Run from a repository is a finite, high-yield lab worth repeating.'
      },
      {
        title: 'Rehearse the two-hour pacing',
        detail: '50-60 questions in two hours is roughly two minutes per question, which is comfortable until a long scenario appears. Practise flagging and moving, and keep the pass-fail goal in mind rather than trying to count a percentage.'
      },
      {
        title: 'Verify your material matches the April 2026 version',
        detail: 'A new version launched April 24, 2026 with a restructured domain outline. Confirm the version of any course or question bank before buying, and read the current exam guide yourself.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for the Professional Cloud Developer exam is anchored by Google\u2019s own free material, and the rational stack for most candidates is free: the official exam guide and study materials on Google Cloud Skill Boost, the official practice exam, the sample questions, and hands-on time in a free-tier Google Cloud project cover the content and the practical backbone the exam demands. The single justified spend for most candidates is cloud consumption for labs — a free-tier project covers much of the blueprint, but heavier deployment and integration scenarios benefit from a paid project with budget controls, typically $20-60 across a study window if you delete resources between sessions. On the paid side, the tiers are familiar: Google Cloud\u2019s own paid training paths and instructor-led courses sit at the premium end and are mostly employer-funded; third-party video courses on Udemy or the major cloud-training platforms run $15-40 on sale; and practice-test banks range from $20 to $90, with the caveat that no third-party bank is as well-calibrated as the official practice exam, so treat third-party scores as weak signals and the official materials as the gate. Google Cloud Skill Boost (formerly Qwiklabs) provides hands-on labs on a pay-as-you-go or subscription basis and is the best paid option for candidates who lack a personal cloud project. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and sale status; the exam registration fee is $200 plus tax; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official exam guide and study materials (Google Cloud)', values: ['Free', 'Exam guide, study plan and documentation links', 'The blueprint itself; confirm it is the current post-April-2026 version'] },
      { label: 'Official practice exam and sample questions', values: ['Free', 'Online practice exam and sample items', 'The readiness gate — closest proxy for real item style and difficulty'] },
      { label: 'Google Cloud free-tier project', values: ['Free for qualifying usage', 'Live cloud environment', 'The hands-on backbone — deploy a service and build the integration loop'] },
      { label: 'Paid Google Cloud project for heavier labs', values: ['$20-60 across a study window if you delete resources', 'Live cloud environment with budget alerts', 'Deployment, CI/CD and integration scenarios beyond the free tier'] },
      { label: 'Google Cloud Skill Boost labs', values: ['Pay-as-you-go or subscription', 'Hands-on labs', 'Candidates without a personal cloud project who need structured practice'] },
      { label: 'Third-party video course (Udemy and similar)', values: ['~$15-40 on sale', 'Video instruction', 'A structured narrative; confirm it covers the April 2026 outline'] },
      { label: 'Third-party practice tests', values: ['~$20-90', 'Question banks', 'Supplementary volume; treat scores as weaker signals than the official practice exam'] },
      { label: 'Official instructor-led training', values: ['Premium, mostly employer-funded', 'Instructor-led classes', 'Team or employer-funded candidates who want a schedule and an instructor'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; Udemy and third-party prices vary widely with sale status. The exam registration fee is $200 plus applicable tax. Confirm any third-party material covers the post-April-24-2026 version. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistakes around the Professional Cloud Developer exam are version errors, hands-on gaps and reporting misreads, and the first one is the most expensive in 2026: studying material written before the April 24, 2026 exam restructure, when the domain structure changed and old courses teach a superseded outline. The second is preparing from documentation and video without ever deploying into a real Google Cloud project — the exam assumes you have built and run cloud-native applications, and a candidate who has never deployed to Cloud Run or wired up Pub/Sub fails the deployment and integration scenarios despite knowing the theory. The third is misreading the reporting model: the exam returns a pass-fail result with per-domain feedback, not a numerical score, so candidates who hunt for a cut score or try to count a percentage of correct answers are chasing something Google does not publish; the useful read is the domain breakdown on a failed attempt, which tells you where to aim the retake. The fourth is assuming the frequently cited 70 percent threshold is official when it is an estimate, and planning against it as if it were a published cut score. The fifth is neglecting the service-selection decision rules — Cloud Run versus GKE versus Cloud Functions, Firestore versus Cloud SQL versus Cloud Storage — which the scenario items lean on heavily, and instead memorising service feature lists. The sixth is ignoring the 14-day retake wait and the $200 fee structure, which makes a rushed first attempt an expensive mistake. The seventh is treating third-party question banks as the readiness gate when the official practice exam is the better-calibrated resource. Finally, some candidates forget the certification expires after two years and must be renewed within the eligibility period, and let it lapse into a full re-sit.',
    items: [
      {
        mistake: 'Studying pre-April-2026 material',
        fix: 'A new version launched April 24, 2026 with a restructured domain outline. Verify the version of any course or question bank before buying, and read the current exam guide to check the domain structure.'
      },
      {
        mistake: 'Preparing from docs and video without deploying',
        fix: 'The exam assumes you have built and run cloud-native applications. Deploy at least one end-to-end application — Cloud Run plus a data layer plus Pub/Sub plus observability — in a real Google Cloud project before you book.'
      },
      {
        mistake: 'Hunting for a cut score that Google does not publish',
        fix: 'The exam returns a pass-fail result with per-domain feedback, not a numerical score. Use the domain breakdown from a failed attempt to aim the retake, and stop trying to count a percentage of correct answers.'
      },
      {
        mistake: 'Treating the 70 percent figure as official',
        fix: 'The often-cited 70 percent is an estimate, not a published cut score. Plan against the format Google publishes — 50-60 questions, two hours, pass-fail reporting — rather than a threshold Google has not stated.'
      },
      {
        mistake: 'Memorising service menus instead of selection rules',
        fix: 'The scenario items ask which service fits a workload. Rehearse the decision rules — Cloud Run versus GKE versus Cloud Functions, Firestore versus Cloud SQL versus Cloud Storage, Pub/Sub versus Eventarc versus Cloud Tasks — with the trade-offs, not the feature lists.'
      },
      {
        mistake: 'Booking before you are ready and eating the retake wait',
        fix: 'A failed attempt costs the full $200 fee and triggers a 14-day wait before retaking. Use the official practice exam as the readiness gate and only book when you pass it consistently.'
      },
      {
        mistake: 'Trusting third-party banks over the official practice exam',
        fix: 'No third-party bank is as well-calibrated as Google\u2019s official practice exam and sample questions. Use the official materials as the gate and treat third-party scores as supplementary signals only.'
      },
      {
        mistake: 'Letting the certification lapse after two years',
        fix: 'The Professional Cloud Developer certification is valid for two years and renews within the renewal eligibility period on Google\u2019s certification platform. Diary the expiry and start the renewal early; letting it lapse means a full $200 re-sit.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Professional Cloud Developer exam is 50 to 60 multiple-choice and multiple-select questions in two hours, delivered through Pearson VUE either online-proctored or at a test centre, with a pass-fail report plus per-domain feedback rather than a numerical score, and Google does not publish a cut score. The four domains of the post-April-2026 version are designing highly scalable, secure and reliable cloud-native applications, building and testing applications, configuring cloud-native applications for deployment, and integrating applications with Google Cloud services, with the design domain carrying the heaviest weight — around 36 percent — followed by integration, building and testing, and deployment configuration. The distinguishing feature of the paper is that most items are scenario-based: a described application situation — a latency requirement, a cost constraint, a reliability target, a data-integrity concern — followed by which service, architecture or configuration the developer should choose, and the answer usually hinges on the service-selection decision rules and the trade-offs between Google Cloud services rather than on remembering a specific command or flag. Expect items that ask you to choose between Cloud Run, GKE, Cloud Functions and App Engine for a described workload; between Firestore, Cloud SQL, Cloud Storage and Spanner for a data requirement; and between Pub/Sub, Eventarc and Cloud Tasks for asynchronous integration, plus CI/CD and observability scenarios around Cloud Build, Artifact Registry and Google Cloud Observability. The pacing math is roughly two minutes per question, which is comfortable until a long scenario appears, so a steady sweep with flagging is the winning rhythm. The samples below are editor-written illustrations of the published format and domains, not live exam items.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Scenario-based items asking which Google Cloud service, architecture or configuration fits a described workload. The answer usually hinges on service-selection trade-offs rather than recall.' },
      { name: 'Multiple response', share: 'A significant minority', detail: 'Items requiring several correct answers to be selected. No partial credit, so evaluate each option independently.' },
      { name: 'Service-selection scenario items', share: 'Heaviest across the design and integration domains', detail: 'Choose between Cloud Run, GKE, Cloud Functions and App Engine for compute; Firestore, Cloud SQL, Cloud Storage and Spanner for data; Pub/Sub, Eventarc and Cloud Tasks for async integration.' },
      { name: 'CI/CD and observability items', share: 'Concentrated in the build, deploy and integration domains', detail: 'Cloud Build, Artifact Registry, deployment pipelines, service accounts, metrics, logs and traces. These reward having actually configured the pipeline and the monitoring.' }
    ],
    samples: [
      {
        prompt: 'A development team must deploy a containerised application that receives bursts of HTTP traffic and must scale to zero during quiet periods to minimise cost. The application is stateless and has no requirement for long-running connections. Which compute option is most appropriate?',
        options: [
          'A. Cloud Run',
          'B. Google Kubernetes Engine (GKE) with a fixed node pool',
          'C. Compute Engine with a preemptible instance group',
          'D. App Engine standard environment with manual scaling'
        ],
        answer: 'A',
        explanation: 'Cloud Run is the fully managed serverless container option that supports scale-to-zero, which is exactly the cost-minimisation clause in the stem: it scales containers from zero in quiet periods and up under bursts, and it fits stateless HTTP workloads without long-running connections. B keeps a fixed node pool running even when idle, which violates the minimise-cost requirement unless autoscaling is configured to scale the pool down — and even then it carries cluster-management overhead the stem does not justify. C uses preemptible instances, which can be terminated by Google at any time, so it is unsuitable for bursty production HTTP traffic where availability matters. D offers App Engine\u2019s managed platform but manual scaling leaves capacity decisions to the team, and the scale-to-zero requirement points to the serverless option. When the stem pairs bursty HTTP traffic with scale-to-zero and cost, Cloud Run is the answer.'
      },
      {
        prompt: 'An application must store structured data with strong consistency and support complex relational queries, and the team expects modest read and write volume that can grow. Which data service is the best fit?',
        options: [
          'A. Cloud SQL for PostgreSQL',
          'B. Firestore',
          'C. Cloud Storage with JSON objects',
          'D. Pub/Sub'
        ],
        answer: 'A',
        explanation: 'Cloud SQL provides a managed relational database with strong consistency and full SQL support for complex relational queries, which is the combination the stem demands. B is a NoSQL document database optimised for horizontal scale and flexible schemas; it supports queries but is not a relational engine, so complex relational joins and transactions of the kind the stem implies are not its strength. C is object storage, not a queryable database. D is a messaging service, which is unrelated to structured data storage. The stem\u2019s two requirements — strong consistency and complex relational queries — map directly to a managed relational database, and Cloud SQL is the appropriate Google Cloud service for that profile at the moderate scale described.'
      },
      {
        prompt: 'A team deploys a new version of a Cloud Run service and wants to route a small percentage of traffic to the new revision to validate it in production before a full rollout, with the ability to roll back instantly if errors appear. Which Cloud Run capability should be used?',
        options: [
          'A. Traffic splitting between revisions',
          'B. A separate service deployment for the new revision',
          'C. A Cloud Build trigger that replaces the service',
          'D. Manual revision deletion'
        ],
        answer: 'A',
        explanation: 'Cloud Run supports traffic splitting between revisions, which lets a team route a percentage of traffic to the new revision for a canary-style validation and adjust or roll back the split instantly without redeploying. A is exactly that mechanism. B creates a separate service with its own URL, which does not route a controlled percentage of the main service\u2019s traffic. C replaces the service on every build, which removes the canary staging the stem requires. D deletes a revision, which is an irreversible action and not a validation mechanism. When the stem describes incremental rollout with instant rollback, Cloud Run revision traffic splitting is the capability the exam expects you to name.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Professional Cloud Developer exam is 50 to 60 questions in two hours, delivered through Pearson VUE either online-proctored or at a test centre, with a registration fee of $200 plus applicable tax, and the direct exam-day answer is a pass-fail report plus per-domain feedback rather than a numerical score, with results typically available within a few days through the Google Cloud certification platform. The test centre versus online decision is the first real choice. A centre gives you a supervised workstation and a physical erasable whiteboard — genuinely useful for sketching an architecture or a service-selection comparison — and no room scan; the online option gives you your own desk but a stricter environment, with a room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved for your booking. Check what your booking allows rather than assuming, because the rules have tightened across proctoring providers and an item that was acceptable a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; online check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the pacing math is roughly two minutes per question, so the winning rhythm is a steady sweep with flagging, using the service-selection decision rules you rehearsed — underline the constraint in each scenario stem before reading the options. If you fail, the published retake rule is a 14-day wait before your next attempt, with no limit on attempts and the full fee charged each time, so a rushed first attempt is an expensive mistake; use the per-domain feedback from the report to target the retake.',
    bring: [
      'Government-issued photo ID with your name matching your certification profile exactly — a mismatch is a common and expensive turn-away',
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
      { time: '2-3 days before', detail: 'Run the online-proctoring system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start online check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for online testing a room scan. Test centres add a locker and a pocket check.' },
      { time: 'First 5 minutes', detail: 'Instructions and the candidate agreement. Confirm the question count and the two-hour timer on the launch screen.' },
      { time: '0-100 minutes', detail: 'Steady sweep at roughly two minutes per question: underline constraints in scenario stems, answer what you know, flag anything costing more than two minutes, and move on.' },
      { time: '100-120 minutes', detail: 'Return to flagged items with the remaining time divided across them. Answer every item — Google does not publish a penalty for wrong answers, and a blank cannot score.' },
      { time: 'After the exam', detail: 'Results are typically available within a few days through the Google Cloud certification platform, with per-domain feedback on the report.' }
    ],
    rules: [
      '50-60 multiple-choice and multiple-select questions in two hours.',
      'Pass-fail reporting with per-domain feedback; Google does not publish a cut score or pass rate.',
      'Delivered through Pearson VUE, online-proctored or at a test centre.',
      'Registration fee is $200 plus applicable tax, charged again on every retake.',
      'After a failed attempt there is a 14-day waiting period before the next attempt; there is no limit on the number of attempts.',
      'No scratch paper of your own — centres supply an erasable whiteboard; online candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'The certification is valid for two years and renews within the renewal eligibility period.'
    ],
    afterwards:
      'Results are typically available within a few days through the Google Cloud certification platform, delivered as a pass or fail together with per-domain feedback; Google does not provide a numerical score, and the domain feedback on a failed attempt is the most useful artefact the exam produces, because it tells you which of the four domains pulled you below the pass threshold. If you passed, you can claim the digital badge and certificate from the Google Cloud certification portal, and the certification is valid for two years with renewal handled through the same platform within the renewal eligibility period — diary the expiry and start the renewal early, because letting it lapse means a full $200 re-sit and a fresh exam. If you failed, the published rule is a 14-day wait before the next attempt with the full fee charged again and no limit on attempts, so resist the impulse to re-sit as soon as the window opens on the same preparation. Use the domain breakdown to identify the one or two areas that failed you — typically the design or integration domains — and spend the 14 days rebuilding those scenarios in a real Google Cloud project before the retake, because a repeated attempt on the same knowledge is how a $200 exam becomes a $400 one.'
  }
};

export default data;
