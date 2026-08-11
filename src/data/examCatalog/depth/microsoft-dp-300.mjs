// Depth content for: microsoft-dp-300
// DP-300 is the Azure Database Administrator Associate exam.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud & database certifications desk',
    bio: 'This guide is compiled by our cloud and database certifications desk. Microsoft revises its role-based exams on a schedule, and the English-language DP-300 has been updated, so we anchor to the current skills-measured document on Microsoft Learn and warn when older study material does not match. Exam structure, passing scores, pricing, and the 12-month renewal model come from Microsoft Learn\u2019s official certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the database and developer roles this credential feeds, named by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam duration, question count, passing score, price, and the 12-month renewal assessment were verified against Microsoft Learn\u2019s DP-300 exam page and study guide.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$133,080 median for software developers (BLS, May 2024) \u2014 the closest published reference for Azure database administration roles, which occupy the developer-adjacent data tier of the technology labour market',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Azure database administrator", so the salary story is indirect and should be stated honestly. The closest official reference is Software Developers (SOC 15-1252), the broad occupational series that Azure database administrator and data-platform roles most commonly sit within, which had a May 2024 median of $133,080, with the lowest 10 percent earning less than $79,850 and the highest 10 percent more than $211,450. The database administrators and architects series (SOC 15-1244) is the closer functional match \u2014 BLS reports a $123,100 median for that group \u2014 but it is a smaller occupation, and Microsoft\u2019s own role guidance places DP-300 holders alongside developers and data engineers rather than inside a single BLS code. DP-300 is an associate-level credential that certifies the operational side of the data platform: planning and implementing resources, securing environments, monitoring and optimising, automating tasks, and planning high availability and disaster recovery \u2014 the skills of a database administrator working across Azure SQL and SQL Server. The honest framing is that the certification is a hireability signal and a salary-supporting credential, not a pay ladder by itself: employers use it to shortlist candidates for database administrator and data-platform roles, and BLS projects 15 percent growth for software developers from 2024 to 2034 with roughly 129,200 openings a year, while the database administrators and architects occupation projects 4 percent growth. The exam costs $165, requires roughly 40-80 hours of study plus hands-on Azure time, and the credential must be renewed every 12 months through Microsoft\u2019s free online renewal assessment \u2014 a cheap, fast credential to maintain once earned.',
    rows: [
      { label: 'Reference: median wage, software developers', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: database administrators and architects', value: '$123,100', note: 'BLS OOH Pay tab, May 2024 \u2014 the closer functional fit' },
      { label: 'Reference: software developers, lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Reference: software developers, highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'The certification itself', value: 'No direct occupation', note: 'A hireability and salary-supporting credential, not a pay ladder' }
    ],
    growth: 'BLS projects 15% growth for software developers 2024-34 and 4% for database administrators and architects; the credential feeds into the data tier of both.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate \u2014 but it publishes the bar: 700 out of 1,000 on a 40-60 question, 150-minute exam, with renewal required every 12 months via a free online assessment',
    summary:
      'Microsoft does not publish pass-rate statistics for DP-300 or any of its role-based exams, so any percentage you see online is unverifiable. What is published and more useful is the scoring structure: DP-300 is scored on a 1,000-point scale with a passing score of 700, the exam contains roughly 40-60 questions (a mix of multiple-choice, case-study, and best-answer items, with the count varying by form), and the allotted time is 150 minutes. Because scoring is scaled and the question count varies, 700 is not a fixed percentage of items correct \u2014 the practical target is to be comfortably above 700 on official-style practice material rather than to compute a percentage. The exam fee is $165 in the US, with pricing varying by region. The other published fact that shapes planning is the renewal model: DP-300 contributes to the Microsoft Certified: Azure Database Administrator Associate certification, which is valid for 12 months and renewed at no cost by passing Microsoft\u2019s online renewal assessment on Microsoft Learn before the expiry date. That means the credential is not a one-and-done investment \u2014 it carries an annual renewal obligation, and candidates who are not prepared to renew every year should factor that into the decision. Microsoft also publishes the skills-measured study guide, which defines the exam content at a level of detail no third-party source matches, and a free practice assessment, which is the honest readiness signal available at zero cost before you spend on anything else.',
    source: {
      label: 'Microsoft Learn \u2014 Exam DP-300 page',
      url: 'https://learn.microsoft.com/en-us/certifications/exams/dp-300'
    },
    caveat:
      'Microsoft publishes no pass rates. Published and verifiable are the 700/1,000 passing score, the 40-60 question / 150-minute format, the $165 fee, and the 12-month renewal via free online assessment. We have deliberately left no pass-rate percentage in this table.'
  },
  studyPlan: {
    summary:
      'Plan for six to ten weeks and 50 to 80 hours of study for DP-300, plus real hands-on time in Azure \u2014 this exam rewards operational fluency, and candidates who only study theory consistently underperform on the scenario and case-study items. The exam is roughly 40-60 questions in 150 minutes, scored 700/1,000, priced $165, and the published skills areas are Plan and Implement Data Platform Resources, Implement a Secure Environment, Monitor and Optimize Data Resources, Configure and Manage Automation of Tasks, and Plan and Configure a High Availability and Disaster Recovery Environment. Microsoft recommends about two years of database administration experience and at least a year of hands-on Azure before sitting. Weeks one through three should build the platform foundation: Azure SQL Database, SQL Managed Instance, and SQL Server on Azure VMs, plus IAM, networking, and the shared-responsibility model, because security and resource planning underpin a huge share of the paper. Weeks four and five should cover monitoring and optimisation \u2014 performance metrics, index and statistics maintenance, query tuning concepts, and the tooling \u2014 and automation with Azure Automation and other tooling. Week six should be high availability and disaster recovery: failover groups, geo-replication, backups and restores, and recovery time objectives. Weeks seven through nine should be practice-heavy, using Microsoft\u2019s free practice assessment and full-length timed exams, with re-study of any skill area scoring below 80 percent. Week ten is review and logistics, including confirming the current exam version and scheduling through Pearson VUE.',
    totalHours: '50-80 hours over 6-10 weeks, plus hands-on Azure time',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Platform foundation and security',
        tasks: [
          'Provision Azure SQL Database, SQL Managed Instance, and a SQL Server VM so the deployment models are real to you',
          'Learn IAM, network security (NSGs, private endpoints), and the shared-responsibility model',
          'Study the Plan and Implement Data Platform Resources skills area in the official study guide',
          'Work the Implement a Secure Environment objectives: encryption, authentication, and access control'
        ],
        hours: '18-24 hrs'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Monitoring, optimisation, and automation',
        tasks: [
          'Learn performance monitoring: metrics, dynamic management views, and performance baselines',
          'Study index and statistics maintenance, auto-tuning, and resource governor concepts',
          'Practise interpreting performance data to identify blocking, fragmentation, and query issues',
          'Cover automation: Azure Automation, jobs, and scheduling operational tasks'
        ],
        hours: '14-18 hrs'
      },
      {
        label: 'Week 6',
        focus: 'High availability and disaster recovery',
        tasks: [
          'Learn failover groups, geo-replication, and availability for Azure SQL and SQL Managed Instance',
          'Study backup and restore, long-term retention, and recovery objectives',
          'Practise HADR scenario reasoning: which configuration for which availability requirement',
          'Work the Plan and Configure HADR objectives end to end'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 7-9',
        focus: 'Practice and gap closing',
        tasks: [
          'Take Microsoft\u2019s free practice assessment and score it honestly',
          'Run full-length timed practice exams under the 150-minute clock',
          'Re-study every skill area scoring below 80%',
          'Drill the case-study and scenario item styles \u2014 read the full scenario before answering'
        ],
        hours: '12-18 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Review and logistics',
        tasks: [
          'Final pass over the highest-weight skills and your miss log',
          'Confirm the current DP-300 version and any recent study-guide updates',
          'Schedule the exam through Pearson VUE and confirm delivery method',
          'Rest before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Practising SQL Server DBA migrating to Azure', detail: 'Compress to 5-6 weeks. Your SQL Server knowledge transfers; the gap is Azure-specific \u2014 platform services, IAM, private endpoints, and the HADR tooling. Spend the recovered time hands-on in Azure.' },
      { label: 'Data engineer or developer broadening into operations', detail: 'Plan 10-12 weeks. You know the data platform from the build side; the gap is operational \u2014 monitoring, automation, backups, and HADR. Budget extra time on those skills areas.' },
      { label: 'Entry-level candidate with limited DB experience', detail: 'Start with DP-900 (Azure Data Fundamentals) or equivalent study first, then plan 12-14 weeks for DP-300 with heavy hands-on time. Microsoft recommends about two years of DB experience, and the exam will expose any gap.' }
    ]
  },
  prepStrategies: {
    summary:
      'The single highest-yield strategy for DP-300 is to combine the official study guide with real hands-on Azure time, because the exam\u2019s scenario and case-study items test operational decisions, not theory recall \u2014 a candidate who has provisioned and broken an Azure SQL database answers those items from experience. Second, read the current skills-measured document on Microsoft Learn and study by weight, because Microsoft updates the exam and candidates who study an older blueprint waste time on retired content. Third, use Microsoft\u2019s free practice assessment before spending on anything else \u2014 it is the official readiness signal and tells you which skill areas to target. Fourth, drill the case-study format specifically: several linked questions can hang off one scenario, the sections cannot always be revisited after submission, and reading the full scenario before answering is the difference between a pass and a fail for many candidates. Fifth, master the security and HADR domains, which carry heavy weight and are the areas where candidates with on-premises-only backgrounds are weakest. Finally, plan for the 12-month renewal from day one: the credential expires unless renewed via Microsoft\u2019s free online assessment, so a credential plan without a renewal habit is a credential plan that lapses.',
    items: [
      {
        title: 'Study hands-on in Azure, not just from books',
        detail: 'The scenario and case-study items reward operational fluency. Provision Azure SQL, set up private endpoints, break a failover group, restore a backup \u2014 the hands-on hours are where the exam items become answerable.'
      },
      {
        title: 'Anchor to the current skills-measured document',
        detail: 'Microsoft updates DP-300 and publishes every change in the study guide. Check the current version and its update history before buying material, and treat the official document as the only authoritative syllabus.'
      },
      {
        title: 'Take the free practice assessment first',
        detail: 'Microsoft\u2019s official practice assessment is free and mirrors the real exam. Take it before spending on courses or tests, use it to map weak skill areas, and re-take it after study to confirm readiness.'
      },
      {
        title: 'Drill the case-study format',
        detail: 'Case studies hang several linked questions off one scenario, and navigation may be restricted. Read the full scenario before answering, and rehearse this format specifically \u2014 it is where unprepared candidates run out of time and context.'
      },
      {
        title: 'Weight security and HADR',
        detail: 'Implementing a secure environment and planning high availability and disaster recovery carry substantial weight and are the areas where on-premises-only DBAs are weakest. Give them dedicated study, not leftover time.'
      },
      {
        title: 'Plan the 12-month renewal now',
        detail: 'The Azure Database Administrator Associate certification expires after 12 months unless renewed via Microsoft\u2019s free online assessment. Note the expiry at certification time so renewal is a light refresh, not a lapse and a full re-exam.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'DP-300 preparation can be done almost entirely with official and low-cost resources, and the total spend is modest relative to the exam\u2019s career value. Microsoft Learn provides the skills-measured study guide and a free practice assessment \u2014 both official, both free, and both the correct first resources. The mandatory spend is the $165 exam voucher. Hands-on Azure time is not optional for this exam, but it can be nearly free: a new Azure account includes free credit, and the free tier covers Azure SQL configurations for learning; budget $0-30 for incidental resource costs. Third-party resources are plentiful \u2014 video courses at $15-30 during sales, practice-test subscriptions at $20-40, and printed study guides at $30-50 \u2014 and they are useful accelerators, but they are supplements to the official material and the hands-on work, not substitutes. The buying rule is: official study guide and practice assessment first, hands-on Azure second, one timed practice-test product third for pacing calibration, and video courses only if you want structured pacing. The one caution is version freshness: Microsoft updates DP-300 periodically, so verify that any third-party material covers the current version before buying, and prefer sources that state their update date.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DP-300 exam voucher', values: ['$165 (varies by region)', 'Pearson VUE, test centre or online', 'The required step'] },
      { label: 'Official DP-300 study guide (Microsoft Learn)', values: ['Free', 'Web document', 'The authoritative syllabus \u2014 read it first and by weight'] },
      { label: 'Official free practice assessment', values: ['Free', 'Online practice questions', 'The honest readiness signal before you spend on anything else'] },
      { label: 'Hands-on Azure subscription', values: ['~$0-30 with free credits', 'Cloud console', 'The operational fluency the exam rewards \u2014 non-negotiable'] },
      { label: 'Third-party video courses', values: ['~$15-30 during sales', 'Online video', 'Structured pacing \u2014 verify they cover the current version'] },
      { label: 'Third-party practice tests and study guides', values: ['~$20-50', 'Online or print', 'Extra timed reps and pacing calibration'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate. Microsoft updates DP-300 periodically; confirm any third-party material covers the current version. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'The most common DP-300 mistakes are about preparation method and exam strategy. The biggest is studying theory without hands-on Azure time \u2014 the scenario and case-study items test operational decisions, and candidates who have never provisioned or broken an Azure SQL environment answer those from guesswork. The second is studying an outdated blueprint: Microsoft updates DP-300 and its skills-measured document, and candidates who study an older version waste hours on retired content and miss the current weighting. Third, candidates mismanage the case-study format \u2014 they skim the scenario, answer linked questions out of context, and run out of time because they did not rehearse it. Fourth, many candidates under-weight the security and HADR domains, the areas where on-premises-only DBAs are weakest and where the exam concentrates points. Fifth, candidates rely on question banks and treat practice-question scores as readiness when the honest signal is the official free practice assessment and full-length timed exams. Finally, many candidates earn the credential and then let the 12-month renewal lapse, turning a $165 investment into a re-exam because they did not build the renewal habit.',
    items: [
      {
        mistake: 'Studying theory without hands-on Azure',
        fix: 'The exam rewards operational fluency. Provision Azure SQL, configure private endpoints, fail over a group, restore a backup \u2014 the hands-on hours are where the scenario items become answerable, and no book substitutes for them.'
      },
      {
        mistake: 'Using an outdated blueprint',
        fix: 'Microsoft updates DP-300 and publishes every change in the skills-measured study guide. Check the current version and its update history, and anchor all study to the current document rather than older material.'
      },
      {
        mistake: 'Mismanaging the case-study format',
        fix: 'Case studies carry several linked questions and may restrict navigation. Read the full scenario before answering, rehearse the format in practice, and never answer a linked item without its context.'
      },
      {
        mistake: 'Under-weighting security and HADR',
        fix: 'Implementing a secure environment and planning high availability and disaster recovery carry substantial weight and are the classic weak spots for on-premises-only DBAs. Give them dedicated study time.'
      },
      {
        mistake: 'Treating question banks as readiness',
        fix: 'Question-bank scores are not readiness. Use Microsoft\u2019s free official practice assessment and full-length timed exams, scored honestly by skill area, and re-study everything below 80%.'
      },
      {
        mistake: 'Letting the 12-month renewal lapse',
        fix: 'The credential expires unless renewed via Microsoft\u2019s free online assessment. Note the expiry date at certification time and build the annual renewal into your calendar \u2014 a lapsed credential is a $165 re-exam plus re-study.'
      }
    ]
  },
  questionTypes: {
    summary:
      'DP-300 is a computer-based exam of roughly 40-60 questions in 150 minutes, scored on a 1,000-point scale with a passing score of 700, delivered through Pearson VUE at a test centre or online. The question mix spans multiple-choice, best-answer, and case-study items, and the count varies by form, which is why the score is scaled rather than a percentage. The published skills areas are Plan and Implement Data Platform Resources, Implement a Secure Environment, Monitor and Optimize Data Resources, Configure and Manage Automation of Tasks, and Plan and Configure a High Availability and Disaster Recovery Environment. The case-study items are the distinctive feature: a scenario with several linked questions, sometimes delivered in sections that cannot be revisited after submission, which makes reading the full scenario before answering the single most important tactical habit. The samples below are editor-written illustrations of the published skills areas, not live exam items.',
    types: [
      { name: 'Multiple-choice and best-answer items', share: 'The bulk of the paper', detail: 'Single-choice items across platform resources, security, monitoring, and HADR \u2014 many phrased as operational decisions.' },
      { name: 'Case-study items', share: 'A substantial share', detail: 'A scenario with several linked questions; sections may not be revisitable. Read the full scenario before answering any linked item.' },
      { name: 'Performance and optimisation scenarios', share: 'A substantial share', detail: 'Interpreting metrics, identifying blocking or fragmentation, and selecting the right optimisation \u2014 tested as operational decisions.' },
      { name: 'HADR configuration scenarios', share: 'A real share', detail: 'Choosing the right availability or recovery configuration for a stated requirement \u2014 failover groups, geo-replication, backups, recovery objectives.' }
    ],
    samples: [
      {
        prompt: 'A company needs database workloads with automated patching, high availability, and the lowest possible administrative overhead, without managing the underlying infrastructure. Which Azure service best fits?',
        options: [
          'A. SQL Server on an Azure virtual machine',
          'B. Azure SQL Database with automatic patching and built-in high availability',
          'C. SQL Server installed on a self-managed physical server',
          'D. Azure SQL Database Edge'
        ],
        answer: 'B',
        explanation: 'Azure SQL Database is a fully managed platform service: patching, backups, and high availability are handled by the platform, which is exactly the "lowest administrative overhead" requirement. SQL Server on an Azure VM (A) still requires the customer to manage patching and availability; C is not an Azure service at all; and D (Azure SQL Database Edge) is a small-footprint engine for edge workloads, not a general database platform choice. The item tests the deployment-model decision that anchors the Plan and Implement Data Platform Resources domain.'
      },
      {
        prompt: 'A database administrator observes that an index maintenance job is causing blocking during business hours and that query performance degrades as a result. Which approach best addresses the problem?',
        options: [
          'A. Run index maintenance more frequently during peak hours',
          'B. Move index maintenance to a maintenance window outside business hours and review fragmentation levels before rebuilding',
          'C. Disable all indexes and rebuild them nightly',
          'D. Increase the frequency of statistics updates without touching indexes'
        ],
        answer: 'B',
        explanation: 'Index maintenance belongs in a maintenance window outside business hours, and a well-run operation rebuilds or reorganises indexes based on measured fragmentation rather than on a fixed schedule. A increases the interference during peak hours, C is destructive and performance-hostile, and D only refreshes statistics, leaving fragmentation unaddressed. The item tests the monitoring and optimisation decision-making \u2014 knowing when and how to maintain indexes \u2014 that characterises the Monitor and Optimize domain.'
      },
      {
        prompt: 'A global application needs a database that can survive the failure of an entire Azure region with automatic failover and minimal data loss. Which configuration best meets this requirement?',
        options: [
          'A. Active geo-replication to a secondary region with automatic failover',
          'B. Local backup and restore within the primary region',
          'C. A single database with no replication',
          'D. Read replicas in the same region only'
        ],
        answer: 'A',
        explanation: 'Active geo-replication to a secondary region with automatic failover is the configuration designed to survive a full regional outage while minimising data loss. Local backup and restore (B) cannot survive a regional failure because the backups are regional; C provides no redundancy; and D, read replicas in the same region, does not survive a region-level failure and does not provide automatic failover. The item tests the HADR decision logic \u2014 matching the configuration to the availability and data-loss requirement \u2014 central to the Plan and Configure HADR domain.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills areas, not live exam items.'
  },
  examDay: {
    summary:
      'DP-300 is a computer-based exam of roughly 40-60 questions in 150 minutes, scored 700/1,000, priced $165, and delivered through Pearson VUE at a test centre or online via OnVUE proctoring. For test-centre delivery, bring two forms of identification \u2014 one government-issued photo ID \u2014 with names matching your Pearson VUE registration exactly, and arrive early enough to complete check-in; personal items go in a locker. For online delivery, run the OnVUE system test on the same machine and network you will use, set up in a private room with a closed door, and clear the desk \u2014 the proctor scans the room before the exam begins. On the clock, the 150 minutes works out to roughly two to three minutes per question including case studies, so the pacing strategy is: move quickly through the straightforward multiple-choice items, and spend the case-study sections deliberately, reading the full scenario before answering any linked question and noting that some sections cannot be revisited after submission. Flag uncertain items and return to them where navigation allows. There are no scheduled breaks in the exam, and the clock does not stop if you leave. Your result appears on completion, and a pass at 700 or above contributes to the Microsoft Certified: Azure Database Administrator Associate credential, which is valid for 12 months and renewed through Microsoft\u2019s free online assessment before expiry.',
    bring: [
      'Two forms of identification, one a government-issued photo ID, names matching your registration',
      'For OnVUE: a private room, webcam, microphone, and a connection already system-tested',
      'Your Pearson VUE sign-in and exam confirmation details',
      'A clear picture of the delivery method, start time, and any check-in requirements'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, and earbuds \u2014 locker at a centre, out of reach for OnVUE',
      'All notes and study material \u2014 closed-book exam',
      'A second monitor and any other person in the room for OnVUE',
      'The assumption that ID name mismatches can be fixed at the desk \u2014 correct them before test day'
    ],
    timeline: [
      { time: 'Weeks before', detail: 'Confirm the current DP-300 version, complete hands-on Azure practice, and schedule through Pearson VUE.' },
      { time: '24 hours before', detail: 'For OnVUE, run the system test on the same machine; for a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin OnVUE check-in with ID verification and the room scan.' },
      { time: 'The exam (150 min)', detail: '40-60 questions including case studies; pass at 700/1,000; read full scenarios and pace deliberately.' },
      { time: 'After submission', detail: 'Your result appears on completion; a pass awards the 12-month Azure Database Administrator Associate credential.' }
    ],
    rules: [
      'Roughly 40-60 questions in 150 minutes; passing score 700 on a 1,000-point scale.',
      'Question types include multiple-choice, best-answer, and case-study items; case-study sections may not be revisitable.',
      'Closed-book and proctored at a test centre or online via OnVUE.',
      'No scheduled breaks; the clock does not stop if you leave.',
      'The credential is valid 12 months and renewed via Microsoft\u2019s free online assessment.'
    ],
    afterwards:
      'Your DP-300 result appears on completion, and a pass at 700 or above contributes to the Microsoft Certified: Azure Database Administrator Associate credential, which is valid for 12 months and renewed at no cost through Microsoft\u2019s online renewal assessment on Microsoft Learn \u2014 set the reminder the week you pass, because the renewal habit is what keeps the credential alive. Update your resume and LinkedIn with the credential and its certification ID, and treat it as one rung of a deliberate ladder: the natural next steps are the DP-203 Azure Data Engineer or AZ-305 Azure Solutions Architect exams, or the SQL Server-focused specialisations, depending on whether your path runs toward data engineering or solution architecture. On a fail, the honest recovery is targeted: review the skill areas on your score report, re-do the hands-on labs in the weak domains (security and HADR are the usual suspects), re-take the free official practice assessment, and retake within a few weeks rather than cold. Because the credential requires annual renewal, also make peace with the fact that this certification is a maintenance commitment, not a one-time line on a resume \u2014 the yearly assessment is short and free, but it is not optional, and a lapsed credential forces a full $165 re-exam plus re-study.'
  }
};

export default data;
