// Depth content for: microsoft-sc-100
// Sources: learn.microsoft.com SC-100 exam page and study guide (English version updated
// July 28, 2026; skills measured), Microsoft exam duration & experience page, exam scoring
// and retake policy, Microsoft certification prerequisites (active associate credential
// required to earn the Expert certification), bls.gov Occupational Outlook Handbook
// (May 2024 wage data). All facts checked 2026-08-05.
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
    headline: '$124,910 median for information security analysts (BLS, May 2024)',
    summary:
      'The direct salary answer for SC-100 is $124,910, the May 2024 median for Information Security Analysts (SOC 15-1212), the closest Bureau of Labor Statistics occupation to the security architect role this expert-level exam certifies. That is the honest headline, and it deserves context rather than a bare number. First, BLS classifies by job duties rather than by certificate, so the median describes everyone doing security analysis and architecture work, including analysts who have never designed a Zero Trust architecture; SC-100 candidates sit at the senior end of this occupation, and the distribution reflects that — the lowest 10 percent earned less than $75,650 and the highest 10 percent more than $179,590. Second, the growth picture is genuinely strong: BLS projects information security analyst employment to grow 29 percent from 2024 to 2034, much faster than the all-occupations average, with about 16,000 openings a year, driven by the increase in cyber threats and the shift of business operations to cloud and hybrid environments — which is precisely the world SC-100\u2019s blueprint covers. For comparison, the broader computer and information technology occupational group earned a $105,990 median in the same release, so the security role sits meaningfully above the group average, while software developers (SOC 15-1252) earned $133,080. The realistic framing for an SC-100 candidate is that this is a capstone credential: it does not by itself set a wage, but it signals to employers that you can design enterprise security strategy across identity, infrastructure, applications and data, and that signal is strongest in organisations running Microsoft security tooling — Sentinel, Defender XDR, Entra ID and Purview — where certified architects are also part of how Microsoft partners maintain their certification counts.',
    rows: [
      { label: 'Median annual wage — information security analysts (SOC 15-1212)', value: '$124,910', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to a Microsoft security architect.' },
      { label: 'Lowest 10 percent', value: 'less than $75,650', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $179,590', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — all computer and IT occupations', value: '$105,990', note: 'BLS OOH, May 2024. The security role sits well above the group average.' },
      { label: 'Employment, 2024 / projected change', value: '182,800 jobs / +29% (2024-34)', note: 'BLS OOH for SOC 15-1212; ~16,000 openings a year' }
    ],
    growth: '+29% projected change 2024-34 for information security analysts (SOC 15-1212, BLS OOH), with ~16,000 openings a year — the strongest growth picture of any credential on this page',
    source: {
      label: 'BLS Occupational Outlook Handbook — Information Security Analysts',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Microsoft publishes no pass rate for SC-100 — plan against the scoring model and the associate-certificate prerequisite instead',
    summary:
      'There is no published pass rate for SC-100, because Microsoft does not release pass-rate statistics, first-time pass percentages, attempt counts or score distributions for any certification exam, and any percentage attached to SC-100 on a forum or bootcamp page is anecdote or marketing rather than data. What Microsoft does publish is the scoring model, and for SC-100 there is a structural detail that matters more than any pass statistic: it is an Expert-level certification, and Microsoft requires you to hold an active associate-level security certification to earn it. The accepted credentials are AZ-500 (Azure Security Engineer Associate), SC-200 (Security Operations Analyst Associate), SC-300 (Identity and Access Administrator Associate), SC-400 (Information Protection and Compliance Administrator Associate) or MS-500 (Microsoft 365 Security Administrator Associate); you do not need all of them, but you need at least one active one, and candidates who hold several tend to find SC-100 easier because the exam draws from all of those domains. On scoring, the pass mark is 700 on a scale of 1 to 1,000, a scaled score that may not equal 70 percent of the available points, because candidates receive question sets of different difficulty and an easier form demands more raw points to reach 700. An unknown subset of items is unscored pilot content, there is no penalty for guessing, and the retake policy charges the full $165 fee each attempt with a 24-hour wait after the first failure and 14 days between subsequent attempts, capped at five attempts in 12 months. The English-language version of the exam was updated on July 28, 2026, so study against the current skills outline rather than an older course.',
    source: {
      label: 'Microsoft Learn — Exam scoring and score reports',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports'
    },
    caveat:
      'No official pass rate exists for SC-100 or for any Microsoft certification exam; treat every percentage you see as unverified. What is published and verifiable: 700 out of 1,000 scaled (not 70 percent of questions); unscored pilot items may be present; no penalty for guessing; 24-hour wait after the first failure and 14 days between subsequent attempts, maximum five attempts in 12 months; $165 per attempt; and an active associate-level security certification — AZ-500, SC-200, SC-300, SC-400 or MS-500 — is required to earn the Expert credential.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for SC-100 is that it is a 90 to 140 hour project over ten to twelve weeks for a candidate who already holds one of the required associate-level security certifications and has practical experience with Microsoft security tooling, and the prerequisite itself is the first thing to verify — you cannot earn the Cybersecurity Architect Expert credential without an active AZ-500, SC-200, SC-300, SC-400 or MS-500, so check that before buying anything. The blueprint, updated July 28, 2026, is organised around four design domains: Design solutions that align with security best practices and priorities at 20-25 percent, Design security operations, identity and compliance at 25-30 percent, Design security solutions for infrastructure at 25-30 percent, and Design security solutions for applications and data at 20-25 percent. The mindset shift is the key to the whole exam: SC-100 is not asking how to configure a control, it is asking what to design and recommend at an enterprise scale — a question might describe a multinational organisation with tens of thousands of users, regulatory constraints and zero-standing-access requirements, and ask which architecture a security architect should recommend. The plan below therefore front-loads the frameworks the exam leans on — Zero Trust, the Microsoft Cybersecurity Reference Architectures (MCRA), the Microsoft Cloud Security Benchmark (MCSB) and the shared responsibility model — because every domain is framed through them, then works through identity, operations and compliance, infrastructure, and applications and data, and finishes with full design-scenario rehearsal. Budget a third of your hours on written design practice rather than recognition practice: candidates who can only identify a correct answer in a list fail the long scenario stems that carry this paper.',
    totalHours: '90-140 hours over 10-12 weeks',
    weeks: [
      {
        label: 'Week 0',
        focus: 'Prerequisite check, framework orientation and baseline',
        tasks: [
          'Confirm your active associate-level security certification (AZ-500, SC-200, SC-300, SC-400 or MS-500) is current before studying',
          'Read the Zero Trust documentation and the MCRA overview so the frameworks are familiar vocabulary',
          'Take the free official practice assessment cold for a per-domain baseline',
          'Review the July 28, 2026 change log on the study guide so you are not studying an older outline'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Weeks 1-3',
        focus: 'Design security operations, identity and compliance (25-30%)',
        tasks: [
          'Design a security operations strategy: Sentinel architecture, Defender XDR, incident prioritisation and automation',
          'Design identity strategy: Entra ID governance, privileged access, Conditional Access and the Zero Trust identity pillar',
          'Cover governance, risk and compliance: regulatory requirements, data classification, Purview and compliance frameworks',
          'Practise writing design recommendations as answers, not recognising concepts — the exam wants the recommendation'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 4-6',
        focus: 'Design security solutions for infrastructure (25-30%)',
        tasks: [
          'Design hybrid and multi-cloud infrastructure security: endpoints, network controls, edge and SaaS',
          'Work through ransomware resilience and business continuity design: BCDR, secure backup and restore',
          'Apply the security best-practices domain here: MCRA alignment, MCSB evaluation, supply-chain and insider-threat considerations',
          'Build design scenarios for each: a retail breach scenario, a hybrid migration scenario, a multi-cloud scenario'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Design security solutions for applications and data (20-25%)',
        tasks: [
          'Design application and API security strategies: identity for apps, secrets, application gateways and the software supply chain',
          'Design data security: classification, protection, lifecycle and encryption strategy across workloads',
          'Cover the AI angle new to recent updates — designing controls for AI workloads under the MCSB',
          'Combine with the identity domain: application-facing identity decisions overlap heavily with domain two'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Week 9',
        focus: 'Best practices and priorities integration (20-25%)',
        tasks: [
          'Study the MCRA and MCSB as decision frameworks and be able to justify a design by naming which best practice it follows',
          'Practise prioritising across business, security and compliance constraints in written answers',
          'Re-take the practice assessment and compare the domain bars to your Week 0 baseline',
          'Spend the week only on the two weakest domains'
        ],
        hours: '10-12 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Full design-scenario rehearsal and gap closing',
        tasks: [
          'Two full timed practice exams, including written design answers against a clock',
          'Re-lab every miss and rework the design scenarios you got wrong',
          'Final pass over Zero Trust pillars, MCRA domains and the associate-tool boundaries',
          'Book the exam and run the Pearson VUE system test if testing online'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Already hold two or more associate security certifications', detail: 'Compress to seven weeks. The exam draws from all associate domains, so multi-credential candidates already know the tooling; spend the recovered time on written design practice and the infrastructure domain.' },
      { label: 'Practising security architect with one associate credential', detail: 'Ten weeks at 12 hrs/week. Your design experience shortens the learning curve on the frameworks; front-load MCRA and MCSB because the exam expects them as vocabulary.' },
      { label: 'No associate-level security certification', detail: 'You cannot earn the Expert credential yet. Take the required associate exam first — SC-200 for operations-focused candidates or SC-300 for identity-focused ones — then return to SC-100.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move an SC-100 score are the ones that change how you practise, because this is a design exam and the format punishes recognition-only study. The first and most important strategy is to practise writing design recommendations, not just identifying answers: SC-100 scenario stems describe an enterprise situation and ask what an architect should recommend, and the best rehearsal is to write a one-paragraph recommendation with a justification before you look at the options, then compare. Second, learn the frameworks as vocabulary: Zero Trust, the Microsoft Cybersecurity Reference Architectures (MCRA) and the Microsoft Cloud Security Benchmark (MCSB) recur throughout every domain, and candidates who can name which framework a control belongs to answer faster and more confidently. Third, anchor your study in the associate tooling you already know: because you must hold an active AZ-500, SC-200, SC-300, SC-400 or MS-500 to earn the certification, the exam assumes you know Sentinel, Defender XDR, Entra ID and Purview at the engineer level, and the architect-level questions are about design decisions across them rather than configuration details — so refresh your weakest associate domain early rather than late. Fourth, rehearse the long scenario format under a clock, because the multi-paragraph stems are where candidates lose time; practise underlining the constraint clause — must maintain compliance, must minimise privileged access, must work across three continents — before reading the options. Fifth, use the free official practice assessment three times as a diagnostic and chase the two weakest domain bars, but remember it rewards recognition, so pair it with written design practice. Finally, study against the July 28, 2026 skills update and the AI-related security content it added, because a course recorded before the update teaches a superseded outline, and AI workload security is now part of the design domains.',
    items: [
      {
        title: 'Practise writing design recommendations',
        detail: 'For every scenario, write a one-paragraph recommendation and justification before reading the options, then compare. Candidates who only recognise the correct answer in a list fail the long design stems that carry this paper.'
      },
      {
        title: 'Learn the frameworks as vocabulary',
        detail: 'Zero Trust, the Microsoft Cybersecurity Reference Architectures (MCRA) and the Microsoft Cloud Security Benchmark (MCSB) recur across every domain. Be able to say which framework a control belongs to and why — it makes the scenario questions faster and more confident.'
      },
      {
        title: 'Anchor on the associate tooling you already hold',
        detail: 'The prerequisite means the exam assumes engineer-level knowledge of Sentinel, Defender XDR, Entra ID and Purview. Identify your weakest associate domain early and refresh it, because architect questions build on that tooling.'
      },
      {
        title: 'Rehearse the long scenario format under a clock',
        detail: 'Multi-paragraph stems are where candidates lose time. Practise underlining the constraint clause — must maintain compliance, must minimise privileged access, must scale globally — before reading the options.'
      },
      {
        title: 'Use the practice assessment as a diagnostic, three times',
        detail: 'It is free and unlimited but rewards recognition rather than design, so a high score overstates readiness. Pair each sitting with written design practice and chase the two weakest domain bars.'
      },
      {
        title: 'Study the current July 2026 outline',
        detail: 'The English-language version was updated July 28, 2026, including AI-workload security content. A course recorded before that update teaches a superseded outline, so verify the version of anything you buy.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for SC-100 is dominated by the official free materials and by the prerequisite reality: because you must already hold an active associate-level security certification, the tooling is familiar and the scarce resource is structured design practice, not more video. The Microsoft Learn SC-100 learning paths — spanning the four design domains and updated with the July 28, 2026 skills revision — are free and are the blueprint itself; a candidate who works through them and the Zero Trust and MCRA documentation has the content base covered. The free official practice assessment is the second non-negotiable resource, drawn from the exam domain and useful as a repeated diagnostic. The clearest justified spend is a structured design-practice programme: because the exam is scored on written design recommendations, a course or question bank that forces written answers and then scores them against model answers is worth more per dollar than a video library. On the paid side, the options fall into familiar tiers: MeasureUp practice tests at roughly $99-129 list with frequent discounts give question volume and explanations and are the clearest buy after a failed attempt; Whizlabs at $20-30 is a cheap second opinion whose explanations should be cross-checked against current docs; Udemy courses at the $15-30 sale price give a structured narrative, with the caveat that any course recorded before the July 2026 update is partly stale. Free video from Microsoft MVPs and the official security channels covers the MCRA and Zero Trust material well. Formal instructor-led SC-100T00 training runs $1,500-2,500 through Microsoft Learning Partners and is rarely worth self-funding given the free Learn path, though it is a legitimate employer-funded option. The footnote anchoring the comparison: prices are USD list checked 2026-08 and change; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn SC-100 path (official)', values: ['Free', 'Learning paths across the four design domains with knowledge checks', 'The blueprint itself; kept current with the July 28, 2026 skills update', 'Start here — the paths are updated when the exam is updated'] },
      { label: 'Microsoft official practice assessment', values: ['Free', 'Unlimited online question bank on Microsoft Learn', 'Per-domain diagnostics — take it cold, mid-study and the week before', 'Pair each sitting with written design practice'] },
      { label: 'Zero Trust and MCRA documentation (Microsoft)', values: ['Free', 'Reference architecture and guidance documents', 'The framework vocabulary every domain leans on', 'Read these before the course videos — they are the exam\u2019s language'] },
      { label: 'Microsoft exam sandbox (aka.ms/examdemo)', values: ['Free', 'Interactive exam-interface demo', 'Learning the case-study and design-scenario formats before exam day', 'Run it once before booking — the formats cost more time than the content'] },
      { label: 'Security-focused Microsoft MVP channels (YouTube)', values: ['Free', 'Video walkthroughs and design walkthroughs', 'MCRA, Sentinel and Defender design patterns explained by practitioners', 'Best for the MCRA and Zero Trust material before the course'] },
      { label: 'MeasureUp SC-100 practice test', values: ['~$99-129 list, frequently discounted', 'Timed practice exam with explanations', 'Question volume with worked explanations, especially after a failed attempt', 'The clearest buy after a failed attempt'] },
      { label: 'Whizlabs SC-100 practice tests', values: ['~$20-30', 'Question bank', 'Cheap readiness checks; cross-check explanations against current docs', 'Cross-check anything surprising against the docs'] },
      { label: 'Udemy SC-100 course', values: ['~$15-30 on sale, $90+ list', 'Video course', 'A structured narrative; confirm it covers the July 2026 update', 'Buy on sale; confirm it covers the July 28, 2026 update'] },
      { label: 'Official instructor-led SC-100T00', values: ['$1,500-2,500 via Learning Partners', 'Multi-day class with design workshops', 'Employer-funded candidates who want a schedule and an instructor', 'Employer-funded only; the free Learn path covers the same ground'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax, regional adjustment, sales or employer discounts. Udemy list prices are close to fictional; the sale price is the real price. Verify any third-party course covers the July 28, 2026 skills update. We take no commission from any provider and order nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The most common SC-100 mistake is studying it like an associate exam: candidates drill configuration details of Sentinel, Defender XDR and Entra ID when the exam asks what to design and recommend at an enterprise scale, and recognition practice does not transfer to the long scenario stems that carry this paper. The second is ignoring the prerequisite: candidates spend months preparing and then discover they cannot earn the Expert certification without an active AZ-500, SC-200, SC-300, SC-400 or MS-500, which should have been the first thing checked. The third is skipping the frameworks — Zero Trust, MCRA and MCSB — as background reading when they are the vocabulary the whole exam is written in; candidates who cannot name which framework a control belongs to misread the design questions. The fourth is writing too little in practice: candidates who never rehearse a written recommendation underestimate how hard it is to produce a defensible design answer under a clock. The fifth is studying a pre-July-2026 outline, since the English version was updated on July 28, 2026 and older courses teach a superseded blueprint, including the newer AI-workload security content. The sixth is mismanaging the scoring model — treating 700 as 70 percent of questions when it is a scaled score, or leaving questions blank when there is no penalty for guessing. The seventh is planning to rely on the in-exam Microsoft Learn panel as a safety net; the panel is available on role-based exams but the clock does not stop, and candidates who browse on a 120-minute exam run out of time. Finally, some candidates fail to manage the renewal cycle and let the Expert certification lapse, which costs the full $165 re-sit instead of the free annual assessment.',
    items: [
      {
        mistake: 'Studying configuration when the exam asks for design',
        fix: 'SC-100 is an expert design exam. Practise writing enterprise-scale recommendations — what architecture, what trade-off, what framework justifies it — and use your associate knowledge as the tooling layer beneath the design.'
      },
      {
        mistake: 'Ignoring the associate-certificate prerequisite',
        fix: 'You cannot earn Cybersecurity Architect Expert without an active AZ-500, SC-200, SC-300, SC-400 or MS-500. Verify it in week zero, and if you do not hold one, take that associate exam first.'
      },
      {
        mistake: 'Skipping Zero Trust, MCRA and MCSB as background',
        fix: 'These frameworks are the vocabulary of the exam. Learn them as decision frameworks you can name and justify — the design questions are framed through them, and knowing the framework is often the deciding factor between two defensible answers.'
      },
      {
        mistake: 'Never rehearsing written design answers',
        fix: 'The scenario stems ask for recommendations, and writing one defensibly under a clock is a skill. Rehearse it weekly: one paragraph, a justification, a named framework, then compare against a model answer.'
      },
      {
        mistake: 'Studying a pre-July-2026 outline',
        fix: 'The English version was updated July 28, 2026 with new AI-workload security content. Verify the update date of any course or question bank before buying, and read the current study guide yourself.'
      },
      {
        mistake: 'Misreading the scoring model',
        fix: '700 is a scaled score, not 70 percent of questions; some items are unscored pilot content; guessing is free. Never leave a blank and stop doing percentage arithmetic in the exam.'
      },
      {
        mistake: 'Treating the Learn panel as a safety net',
        fix: 'The panel is available on role-based exams but the clock keeps running. Use it for two or three precise lookups only; candidates who browse on a 120-minute exam run out of time.'
      },
      {
        mistake: 'Letting the certification lapse',
        fix: 'The Expert certification renews annually via a free online assessment whose window opens six months before expiry. Set a reminder at the ten-month mark; letting it lapse means the full $165 proctored re-sit.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'SC-100 is an expert-level role-based exam, which means it uses Microsoft\u2019s full item library and your form mixes standard multiple choice with interactive formats, and on some sittings includes a case study or a live lab. Microsoft does not publish a question count for SC-100 and the number varies by form, but exam time is 120 minutes — 140 minutes of seat time including the NDA, instructions and survey — and most forms run roughly 40-60 items. The defining feature of this exam\u2019s items is that they are design questions: the stems describe an enterprise environment — a multinational organisation, a regulated industry, a set of business and compliance constraints — and ask what a security architect should recommend, which makes the questions longer and more layered than associate-level items. Because it is a role-based exam, the Microsoft Learn panel is available inside the exam, with the clock running while you use it. Navigation rules matter as much as item format: within a case study you answer a set of questions attached to a shared scenario and cannot return to the case study once you move past it, and taking an unscheduled break through the exam interface locks you out of every question already seen. The formats below are the standard role-based set, and the free exam sandbox at aka.ms/examdemo lets you handle every one before exam day — that single rehearsal is worth more than an extra practice test because the formats, not the content, are where candidates lose avoidable time. The scoring rules to internalise: 700 scaled on a 1-1,000 scale, no penalty for guessing, and an unknown subset of items is unscored pilot content. On the scenario stems, underline the constraint clause before reading the options, and treat the frameworks — Zero Trust, MCRA, MCSB — as the lens every question is written through.',
    types: [
      { name: 'Design scenario — multiple choice', share: 'The dominant format on a typical form', detail: 'Long enterprise scenario stems asking what an architect should recommend, with constraints like compliance, cost, or least privileged access buried in the middle. Underline the constraint before reading the options.' },
      { name: 'Multiple response', share: 'Common', detail: 'Select all that apply, sometimes with the required number stated. No partial credit, so evaluate each option independently.' },
      { name: 'Case study', share: 'On some forms', detail: 'Multi-tab scenario — existing environment, requirements, technical constraints — followed by several design questions. Read the requirements tab twice; you cannot return once you move past it.' },
      { name: 'Drag and drop / build list', share: 'Occasional', detail: 'Order steps or match controls to requirements, often around identity governance or incident response processes.' },
      { name: 'Hot area', share: 'Occasional', detail: 'A rendered portal or configuration surface with selectable regions. Less common than on associate exams but possible.' },
      { name: 'Interactive lab', share: 'On some forms; Microsoft does not publish which', detail: 'A real environment in which you perform tasks, graded on end state. Labs can be removed at short notice for outages, which is why Microsoft publishes no list.' },
      { name: 'Yes/No repeated-scenario sets', share: 'Occasional', detail: 'The same scenario restated with a different proposed solution each time. All three can be yes, or all three no — evaluate each independently.' },
      { name: 'Mark for review + review screen', share: 'Available throughout, subject to section rules', detail: 'Flag uncertain items and return before submitting a section; an unscheduled break through the interface ends access to everything already seen.' }
    ],
    samples: [
      {
        prompt: 'A multinational organisation is designing a Zero Trust identity strategy. It must eliminate standing privileged access, enforce step-up authentication for administrative actions, and give security operations visibility into every privileged sign-in without creating a second identity silo. Which architecture should the security architect recommend?',
        options: [
          'A. A separate break-glass identity system with standing global-admin membership for the security team',
          'B. Privileged Identity Management for just-in-time role activation, Conditional Access with step-up MFA for admin actions, and Microsoft Entra ID sign-in and audit logs for visibility',
          'C. Standing domain-admin accounts shared by the infrastructure team, with MFA disabled to avoid friction',
          'D. An on-premises Active Directory with no cloud identity, because the organisation operates hybrid'
        ],
        answer: 'B',
        explanation: 'Privileged Identity Management delivers just-in-time role activation, which eliminates standing privileged access; Conditional Access enforces step-up authentication for administrative actions; and Entra ID sign-in and audit logs give security operations the visibility required — all within the existing Entra ID identity system, so no second silo is created. A violates the no-standing-access requirement by design and creates the silo the stem prohibits. C fails every requirement: standing accounts, no step-up, and no usable audit trail. D removes the organisation from cloud identity entirely, which contradicts a Zero Trust strategy and the visibility requirement. The stem maps one-for-one onto the Zero Trust identity pillar — eliminate standing access, verify explicitly with step-up, and assume breach with logging — and the answer is the option that satisfies all three without a new identity system.'
      },
      {
        prompt: 'An organisation running Microsoft 365 and Azure must design a data security strategy. It needs to discover sensitive data across workloads, classify it, enforce protection, and monitor for violations. Which set of Microsoft capabilities should the architect combine?',
        options: [
          'A. Microsoft Purview for data discovery, classification and protection policies, with audit and alerting in Microsoft 365 and Defender for Cloud for workload coverage',
          'B. A custom script that scans file shares weekly and emails the results',
          'C. Standalone encryption applied to each workload with no central policy or discovery',
          'D. Full data egress blocking for every user, applied uniformly across all workloads'
        ],
        answer: 'A',
        explanation: 'Microsoft Purview provides the discovery, classification and protection-policy layer, and the combination of Microsoft 365 auditing, Defender for Cloud and alerting covers monitoring and enforcement across the workloads in scope — the four requirements in the stem. B is a point solution with no classification or policy enforcement and no workload coverage. C has encryption but no discovery or monitoring, failing the discovery and violation-monitoring clauses. D blocks legitimate business use and applies one blunt control where the stem asks for a graduated protection strategy. The stem is built on the data-security design pattern the SC-100 blueprint teaches — discover, classify, protect, monitor — and the correct answer is the one that supplies all four layers through Microsoft\u2019s actual portfolio rather than a single blunt control.'
      },
      {
        prompt: 'An organisation must design a ransomware resilience strategy. It wants to recover business-critical systems after an attack and to be able to demonstrate that recovery to auditors. Which design best meets the requirement?',
        options: [
          'A. Prioritise business-critical assets, secure backup and restore for hybrid and multicloud environments, and implement privileged-access protection so attackers cannot reach the backups',
          'B. A single full backup of all systems taken once and stored on the same servers as production',
          'C. Relying on endpoint antivirus alone to prevent any attack from occurring',
          'D. Weekly restore drills with no asset prioritisation and backups held in the production domain'
        ],
        answer: 'A',
        explanation: 'The design that meets the requirement is the one that pairs recovery capability with protection of the recovery path: prioritising business-critical assets sets the recovery order, secure backup and restore across hybrid and multicloud environments provides the recovery mechanism, and privileged-access protection prevents an attacker from deleting or encrypting the backups — which is how ransomware defeats unsecured backups. B stores the backup where an attacker can reach it, which is the exact failure mode ransomware exploits. C is prevention-only and provides no recovery. D includes drills, which is good, but holds backups in the production domain where they can be compromised and lacks asset prioritisation. The stem maps to the ransomware-resilience design pattern in the infrastructure domain — protect privileged access, secure backups, prioritise recovery — and the answer is the one that covers all three rather than one or two.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'SC-100 is delivered through Pearson VUE, at a test centre or online through OnVUE, and the direct exam-day answer is 120 minutes of exam time inside 140 minutes of seat time — the extra 20 minutes cover the NDA, instructions and post-exam survey — with a scaled pass mark of 700 on a 1-1,000 scale and no penalty for guessing. The test centre versus OnVUE choice is the first real decision. A centre gives you a supervised workstation, a physical erasable whiteboard genuinely useful for sketching the layers of a design answer, and no room scan; OnVUE gives you your own desk but a stricter environment — a 360-degree room scan, a clear desk, no second monitors, and no physical scratch paper unless it was explicitly approved on the booking. Check what your booking allows rather than assuming, because the rules have tightened and an item that was acceptable a year ago can end your session now. Whichever you choose, arrive or launch check-in thirty minutes early; OnVUE check-in can take twenty minutes on a bad day, and a late check-in is a forfeited fee. Inside the exam, the design scenarios on this exam are the pacing problem, so adopt a deliberate method: underline the constraint clause in each stem before reading the options, flag anything costing more than ninety seconds, and do not take an unscheduled break through the exam interface because it locks you out of everything already seen. If your form includes a case study, decide before the clock starts whether to work it first while fresh or last with a known budget, and read the requirements tab twice. The Microsoft Learn panel is available on this exam — use it for two or three precise lookups, never as a safety net, because the clock does not stop while you browse.',
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
      { time: '2-3 days before', detail: 'Run the OnVUE system test on the exact machine, network and location you will use. Corporate laptops with locked-down security software are the single most common cause of a failed launch.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or start OnVUE check-in. Check-in is not the exam start, and starting late can cost the booking.' },
      { time: 'Check-in', detail: 'ID verification, photograph, and for OnVUE a 360-degree room scan. Test centres add a locker, a pocket check and sometimes a palm-vein scan.' },
      { time: 'First 5 minutes', detail: 'NDA and instructions inside seat time but outside exam time. The launch screen tells you your exam duration.' },
      { time: 'First 2 minutes of the exam', detail: 'Note the question count and duration and set a per-question pace. If there is a case study, decide immediately whether to work it first or last.' },
      { time: 'Throughout', detail: 'Underline constraints in design stems, mark anything costing more than 90 seconds, and move on. Do not take an unscheduled break through the interface.' },
      { time: 'Final 10 minutes', detail: 'Return to marked items and make sure nothing is blank; a guess beats an empty response because there is no penalty.' },
      { time: 'On submission', detail: 'A short survey, then a preliminary pass or fail on screen within a few minutes.' }
    ],
    rules: [
      'Pass mark is 700 on a 1-1,000 scale, and it is a scaled score that may not equal 70 percent of the questions.',
      'No penalty for incorrect answers — never leave an item blank.',
      'The Microsoft Learn panel is available because this is a role-based exam; it covers learn.microsoft.com minus Q&A, practice assessments and your profile, and the clock keeps running while you use it.',
      'You cannot return to a case study or completed section once you move past it, and an unscheduled break through the exam interface ends access to everything already seen.',
      'No breaks are scheduled; if you take one via the interface it carries the same navigation penalty.',
      'No scratch paper of your own — centres supply an erasable whiteboard; OnVUE candidates get no paper unless a physical whiteboard was explicitly approved on the booking.',
      'If the exam is not offered in your preferred language you can request an additional 30 minutes when booking; this must be requested in advance, not on the day.',
      'To earn the Expert certification you must hold an active associate-level security certification (AZ-500, SC-200, SC-300, SC-400 or MS-500); the exam itself has no such in-room requirement.'
    ],
    afterwards:
      'You get a preliminary pass or fail on screen within minutes of submitting, and the official result posts to your Microsoft Learn certification profile within a few hours, occasionally a couple of business days if a lab needs grading. The score report shows one overall number against the 700 threshold plus a bar chart of relative performance across the four design areas; Microsoft is explicit that those bars cannot be summed or read as percentages because the areas contain different numbers of questions, so treat them as relative diagnostics. If you passed, the Cybersecurity Architect Expert certification is awarded only if you also hold an active associate-level security certification — AZ-500, SC-200, SC-300, SC-400 or MS-500 — and it is valid for 12 months, renewed free via an online assessment whose window opens six months before expiry; set the reminder now. If you failed, the retake rules apply: 24 hours before a second attempt, 14 days between subsequent attempts, five attempts maximum in the 12 months from your first sitting, and the full $165 fee each time. Use the skill-area chart to target the retake rather than restudying everything, and change your question source — repeating the same practice bank mostly measures how well you have memorised that bank, and on a design exam the real deficit is usually written-design practice, not content knowledge.'
  }
};

export default data;
