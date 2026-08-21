// Depth content for: salesforce-service-cloud-consultant
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, IT & customer-service certifications desk',
    bio: 'This guide is compiled and maintained by our cloud-certifications desk. Salesforce retires and re-versions its exams with each release, so we track the official exam guide by its release alignment and state plainly when a passing score applies only to a specific language version. Fees, retake rules, prerequisites and maintenance obligations come from the official Salesforce certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, passing scores, fees and maintenance requirements were taken from the current Salesforce Certified Service Cloud Consultant exam guide and checked against the release it aligns to.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$133,080 median for software developers (BLS, May 2024) — the closest official fit to a Service Cloud consultant role',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Salesforce Service Cloud consultant", and no government wage series counts people by the certificate they hold. BLS groups by job duties, so the closest official fit for the people who earn this credential is Software Developers, SOC 15-1252, which had a May 2024 median annual wage of $133,080. That figure is the right reference point but not the whole story, and the distribution matters more than the median. BLS reports the lowest 10 percent of software developers earned less than $79,850 and the highest 10 percent earned more than $211,450, and a Service Cloud consultant sits somewhere on that curve based on employer, region and title, not based on the credential itself. Consultants at Salesforce-partner firms and systems integrators are typically compensated as solution consultants or technical architects rather than as developers, and those title series are not separately published. The occupational outlook is the real reason to take this exam seriously. BLS projects 15 percent employment growth for software developers, quality assurance analysts and testers from 2024 to 2034, much faster than the average for all occupations, with about 129,200 openings a year across the combined group. That demand is concentrated in exactly the work this credential certifies: designing and configuring platform solutions, automation, integrations and AI-assisted service tooling. The honest caveat is that a Service Cloud consultant role sits at the intersection of administration, consulting and development, and the wage data for a pure software-development occupation will overstate what a first-year consultant makes and understate what a senior solution architect makes. Job boards and salary aggregators quote consultant-specific numbers, but those are survey aggregates without a government source, and we do not repeat them here.',
    rows: [
      { label: 'Median annual wage, software developers (15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OEWS percentile data, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OEWS percentile data, May 2024' },
      { label: 'Employment, 2024', value: '1,895,500 (combined developer/QA/testers group)', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected growth, 2024-34', value: '15%, much faster than average', note: 'BLS OOH, ~129,200 openings a year for the combined group' }
    ],
    growth: '15% projected employment growth 2024-34 for the software developer occupation group, with ~129,200 openings a year — concentrated in the solution design and platform integration work this credential validates',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers, Quality Assurance Analysts, and Testers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Salesforce publishes no pass rate — it publishes the passing score instead: 78% on the English version (67% Japanese)',
    summary:
      'Salesforce does not release pass-rate statistics for any of its certification exams, including Service Cloud Consultant, and it has never published an annual pass-rate table comparable to what Cisco or ARRT produce. What the company does publish, in the official exam guide, is the passing score, and it is worth reading carefully because it changed and because it is version-specific. The current Service Cloud Consultant exam guide states a passing score of 78 percent for the English-language version and 67 percent for the Japanese-language version. That split is unusual and easy to miss, and third-party prep sites that quote a single figure such as 63 or 67 percent are usually repeating an older guide. Because Salesforce reports the result as a percentage of correct answers rather than a scaled score, the arithmetic is more transparent than most vendor exams: on a 60-question exam at 78 percent, the working target is roughly 47 of 60 scored items correct. Two structural details affect any reading of that number. First, the exam contains up to five unscored questions mixed into the 60, so the actual number of items that count toward the percentage can be as low as 55; Salesforce states that unscored questions do not affect the result. Second, the exam aligns to a specific Salesforce release — the guide we reviewed aligns to the Summer \u201925 release — and Salesforce updates questions, domains and sometimes passing scores when it updates the guide, so a percentage from an older release may no longer apply. The practical advice follows from all of this: verify the current guide before scheduling, treat 78 percent as the target for English-language candidates, and ignore any third-party pass-rate statistic, because none has an official source.',
    source: {
      label: 'Salesforce — Certified Service Cloud Consultant exam guide',
      url: 'https://help.salesforce.com/s/articleView?id=005298989'
    },
    caveat:
      'Salesforce publishes no pass rate for this exam. The published, verifiable figures are the passing scores by language version — 78% (English) and 67% (Japanese) — plus the release alignment and the up-to-five unscored questions. Third-party pass-rate claims are not sourced and should be disregarded.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The single most important planning fact is the prerequisite: you cannot sit this exam without holding the Salesforce Platform Administrator certification, and the exam guide lists it as a requirement, not a recommendation. That means the realistic total effort is the Administrator certification plus the consultant exam on top of it, and anyone who already holds Administrator is roughly a third of the way through the material, because the consultant exam assumes admin-level configuration fluency and tests the consulting overlay on top of it. The exam is 60 questions in 105 minutes with a 78 percent English passing score, which is a steep target: roughly 47 of 60 scored items correct, with little time per question, so the plan below is built around pattern recognition rather than memorisation. The current blueprint has eight domains, with Service Cloud Solution Design (15%), Intake and Interaction Channels (13%), Case Management (13%) and Contact Center Analytics (13%) together carrying over half the paper; Industry Knowledge and Implementation Strategies at 12% each frame every scenario with metrics, KPIs, engagement best practice and the consulting process itself. Because the questions are scenario-based — a customer describes a business problem and you pick the best solution from four options — the highest-yield study activity is not reading documentation but working through many scenario questions and learning to reject the answer that works technically while creating operational debt. The ten-week plan below assumes you already hold Administrator; if you do not, add four to six weeks and the Admin exam fee to the front of the schedule. Trailhead, the official free learning platform, plus a practice-question bank and hands-on work in a Salesforce org, are the three legs the plan relies on.',
    totalHours: '90-120 hours over 10 weeks (after the Administrator prerequisite)',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Foundation and Service Cloud architecture',
        tasks: [
          'Review Service Cloud core objects and architecture: cases, accounts, contacts, entitlements, milestones and the Service Console',
          'Re-establish Admin-level fluency with Lightning Experience layouts, record pages, dynamic forms and the Salesforce object model',
          'Map every domain to the exam guide so you can track coverage as you go',
          'Create a free Developer Edition org and rebuild a support workflow end to end'
        ],
        hours: '18-24 hrs total'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Domain 5 — Intake and Interaction Channels (13%)',
        tasks: [
          'Master channel selection: Email-to-Case, Web-to-Case, CTI and Service Cloud Voice, Live Agent, Messaging for In-App and Web, Social Media and the Experience Cloud self-service portal',
          'Learn routing and auto-response configuration, queues, Omni-Channel setup and assignment rules',
          'Understand when a bot or deflection strategy beats a human agent workflow',
          'Practise scenario questions that ask which channel fits a stated customer and business profile'
        ],
        hours: '18-22 hrs total'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Domains 3 and 6 — Solution Design and Case Management (15% + 13%)',
        tasks: [
          'Work the case lifecycle end to end: statuses, types, priorities, case comments, case teams, escalation, case merging and case automation',
          'Design the service rep experience in the Service Console: layouts, console apps, macros and quick text, softphone integration',
          'Practise the hardest skill on the exam: choosing between standard and custom solutions and explaining the trade-off',
          'Build entitlements and milestone processes, and learn how SLAs surface in the console and in analytics'
        ],
        hours: '18-22 hrs total'
      },
      {
        label: 'Week 7',
        focus: 'Domain 7 — Contact Center Analytics (13%)',
        tasks: [
          'Learn the standard Service Cloud reports and dashboards: case volume, deflection rate, average handling time, first-contact resolution and SLA compliance',
          'Understand which KPI is computed how, and what a given metric says about a service organisation',
          'Practise reading a dashboard and identifying the process change that would move a specific number',
          'Drill the KPI-related questions in Industry Knowledge as well, because the two domains overlap heavily'
        ],
        hours: '9-12 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Domains 1, 2, 4 and 8 — Industry Knowledge, Implementation Strategies, Knowledge Management, Integration (46%)',
        tasks: [
          'Learn the Knowledge article lifecycle, Knowledge-Centered Service and Knowledge configuration, including data categories and article types',
          'Study the consulting process: requirements gathering, stakeholder management, deployment and training strategy, data migration and data quality',
          'Cover integration fundamentals: when to use declarative tools versus Apex and Lightning Web Components, and what is explicitly out of scope',
          'Practise the scenario questions that test best-practice judgment rather than configuration recall'
        ],
        hours: '10-14 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Scenario drilling and gap closing',
        tasks: [
          'Work at least 200 scenario-based practice questions, weighted to Solution Design, Case Management and Channels',
          'Re-lab every miss to a domain and revisit the underlying documentation rather than the answer alone',
          'Time yourself: 105 minutes for 60 questions leaves little margin, so average under 1 minute 45 seconds per item',
          'In your org, build the two or three configurations you most often get wrong'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Timed full exams and maintenance planning',
        tasks: [
          'Take three full 60-question practice exams under real timing and review every miss',
          'Rehearse the high-frequency traps: standard vs custom, entitlements vs manual SLA, Omni-Channel vs queue assignment',
          'Confirm the current exam guide version and the passing score that applies to your language',
          'Diary the maintenance cycle — Service Cloud consultants must pass maintenance exams for future releases to keep the credential current'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Already hold Salesforce Administrator', detail: 'Ten weeks as planned above. Your admin fluency is the prerequisite and the foundation; spend the extra time on scenario judgment and the consulting-process domains rather than re-learning configuration.' },
      { label: 'Working daily in Service Cloud', detail: 'Six to seven weeks. Your day job covers Solution Design, Case Management and Channels; compress Weeks 1-4 and concentrate on Contact Center Analytics, Knowledge Management and the structured consulting-process material, which are the domains daily administrators rarely exercise.' },
      { label: 'No certification yet — starting from scratch', detail: 'Fourteen to sixteen weeks. Take the Platform Administrator exam first (it is the hard prerequisite), then run this ten-week plan. Budget for two exam fees and roughly double the total study time.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The exam is a scenario-judgment test wearing a multiple-choice costume, and every strategy that works is built on that fact. A candidate who knows how to configure every Service Cloud feature can still fail because the questions present a customer story and four technically plausible answers, and the wrong answers are wrong for consulting reasons — they solve the immediate need while building operational debt, or they ignore the stated metrics, or they over-engineer a declarative problem. The strategies below are ranked by how directly they attack that failure mode.',
    items: [
      {
        title: 'Reject the technically-working answer that creates debt',
        detail: 'The most consistent trap across every scenario domain is the answer that works but leaves the organisation worse off: a custom Apex solution where a declarative flow would do, an entitlement where a simple case priority would suffice, a complex integration where a standard feature already fits. Train yourself to read every option through the customer\u2019s stated KPIs and constraints, and eliminate any answer that is technically functional but operationally expensive.'
      },
      {
        title: 'Work scenario questions in volume, not documentation',
        detail: 'Reading Salesforce Help produces recognition; the exam requires selection under time pressure. Work several hundred scenario questions and review each miss until you can explain why the chosen option is the consulting-best answer and why each distractor is wrong. That explanation skill is the thing that transfers to exam day.'
      },
      {
        title: 'Learn the KPI-to-decision mapping',
        detail: 'Contact Center Analytics and Industry Knowledge together are 25 percent of the paper and are mostly about metrics: average handling time, first-contact resolution, deflection, SLA compliance, CSAT. Learn what each number measures, what process change moves it, and which dashboard the exam expects you to read. Candidates who treat analytics as an afterthought routinely lose a quarter of the exam.'
      },
      {
        title: 'Build the configurations in a real org',
        detail: 'You do not need to memorise click paths if you have built the thing once. Create a case-management workflow with Omni-Channel routing, entitlements and milestones, a Knowledge base with data categories, and a chat-to-case-to-resolution flow. The exam rewards people who have felt the configuration, and a free Developer Edition org costs nothing.'
      },
      {
        title: 'Know the maintenance commitment before you commit',
        detail: 'Service Cloud Consultant is not a one-time credential. Salesforce requires certified professionals to pass maintenance exams for future releases — typically several per year — to keep the certification current. Factor that recurring obligation into the decision to certify and into your study calendar, because it is the single most frequently ignored cost of this credential.'
      },
      {
        title: 'Track the exam guide version',
        detail: 'The guide aligns to a specific Salesforce release, and the passing score can differ by language version — 78 percent English, 67 percent Japanese. Confirm the current guide and the score for your language before scheduling, and ignore prep material written for an older release, because questions and weights shift with each update.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The good news for candidates on a budget is that Salesforce\u2019s official learning platform, Trailhead, is free and is genuinely the primary resource for this exam — the same platform the vendor uses to deliver its own maintenance modules. The money decisions are the practice-question bank, the optional instructor-led course, and the exam fee itself plus the retake risk. The exam costs $200 for registration and $100 for a retake, and the $225 Platform Administrator prerequisite exam that comes first if you do not already hold it. Most candidates can pass with Trailhead, a good practice bank and hands-on org time; the paid courses accelerate candidates who prefer structured instruction but are not required.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Salesforce Certified Service Cloud Consultant exam', values: ['$200 registration; $100 retake', 'Proctored, online or test centre, 60 questions / 105 min', 'Required — budget the retake fee as an insurance line'] },
      { label: 'Platform Administrator prerequisite exam', values: ['$200 (not required if you already hold it)', 'Proctored', 'The hard gate before you can sit this exam'] },
      { label: 'Salesforce Trailhead — official free learning', values: ['Free', 'Online self-paced learning with hands-on challenges', 'The primary source; the vendor\u2019s own maintenance exams are delivered here too'] },
      { label: 'Official Service Cloud Consultant exam guide and objectives', values: ['Free', 'PDF / web document', 'The authoritative blueprint — read it first and re-check it before scheduling'] },
      { label: 'Practice-question banks (Focus on Force, Udemy and similar)', values: ['~$15-50 depending on vendor and sales', 'Online scenario-question banks with explanations', 'The high-volume scenario drilling the exam actually rewards'] },
      { label: 'Instructor-led course via Salesforce or a partner', values: ['Typically $1,500-3,000 or bundled by employers', 'Classroom or virtual, often several days', 'Candidates with employer funding who want structure and labs'] },
      { label: 'Your own Developer Edition org', values: ['Free', 'Hands-on sandbox', 'Building the real configurations — the single highest-value practice'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax. Salesforce exam fees and the exam guide change with each release; confirm the current guide, passing score and fee on the official certification page before booking. We do not rank resources by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The mistakes below cluster into three groups: studying the wrong version or the wrong passing score, studying configuration when the exam tests consulting judgment, and ignoring the credential\u2019s maintenance burden. The first group is the most expensive because it can invalidate your prep entirely; the second is the most common cause of near-misses; the third quietly turns a one-time exam into a recurring obligation people did not budget for.',
    items: [
      {
        mistake: 'Preparing for the wrong exam version or passing score',
        fix: 'Salesforce aligns this exam to a specific release and the passing score varies by language — the current guide says 78% for English and 67% for Japanese. Third-party sites still quote older single figures. Open the official exam guide, confirm the release it aligns to and the score for your language, and discard prep material written for a superseded blueprint.'
      },
      {
        mistake: 'Studying feature configuration instead of scenario judgment',
        fix: 'The exam is built from customer scenarios with four technically plausible answers, and the wrong answers are wrong for consulting reasons: operational debt, ignored metrics, over-engineering. Balance your documentation study with heavy scenario-question practice, and for every miss write down why the right answer is the consulting-best choice, not just which feature it uses.'
      },
      {
        mistake: 'Skipping the Platform Administrator prerequisite',
        fix: 'The exam guide lists Salesforce Platform Administrator certification as a requirement, not a suggestion. You cannot sit Service Cloud Consultant without it. If you do not already hold it, schedule it first and budget its fee and study time — treating it as optional is the most common way candidates waste the consultant exam fee.'
      },
      {
        mistake: 'Treating Contact Center Analytics as a minor domain',
        fix: 'Contact Center Analytics (13%) plus the KPI material in Industry Knowledge (12%) is a quarter of the paper. Learn what each metric measures and which process change moves it. Candidates who skip analytics because it feels like reporting lose a quarter of the exam and fail by a narrow margin.'
      },
      {
        mistake: 'Ignoring the maintenance exam obligation',
        fix: 'Service Cloud Consultant expires unless you keep passing maintenance exams for future Salesforce releases — typically several per year. Diary the maintenance cycle the week you pass. Candidates who treat the credential as a one-time achievement let it lapse and have to re-certify from scratch.'
      },
      {
        mistake: 'Pacing as if it were a scaled-score exam',
        fix: 'Salesforce reports the result as a percentage, so the passing standard is concrete: roughly 47 of 60 scored items at 78% English, with up to five unscored items mixed in. Practise at that exact tempo — under 1 minute 45 seconds per question — and never leave items unanswered, because a blank is always wrong.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The exam is 60 questions in 105 minutes, all multiple choice, with up to five unscored questions mixed in that do not affect the result. Salesforce does not tell you which items are unscored, so treat every question as if it counts. The published format is single-answer multiple choice, and the overwhelming majority of scored items are scenario-based: a customer or business describes a situation, and you select the best solution from four options. Because the passing score is a percentage of correct answers — 78% on the English version — pacing is arithmetic: 105 minutes for 60 questions allows under 1 minute 45 seconds per item, and with up to five unscored items the working count can be as low as 55. The eight domains are Industry Knowledge (12%), Implementation Strategies (12%), Service Cloud Solution Design (15%), Knowledge Management (12%), Intake and Interaction Channels (13%), Case Management (13%), Contact Center Analytics (13%) and Integration and Data Management (10%). The skills the questions reward are consulting judgment — choosing between standard and custom, recognising operational debt, matching a solution to stated KPIs — more than raw configuration recall, which is why the samples below follow that pattern.',
    types: [
      { name: 'Scenario-based multiple choice', share: 'The dominant format — most of the paper', detail: 'A customer story and four technically plausible solutions. The right answer balances the immediate need with long-term scalability; the tempting wrong answers work but create operational debt, ignore stated metrics, or over-engineer a declarative problem.' },
      { name: 'Standard-vs-custom choice', share: 'Heavily represented within Solution Design and Case Management', detail: 'The question offers a declarative option and a custom Apex/LWC option. The exam rewards recognising when a standard feature suffices and when the requirement genuinely exceeds the platform.' },
      { name: 'Channel and routing recommendation', share: 'Common within Intake and Interaction Channels', detail: 'Given a business and customer profile, select the best channel, routing or deflection strategy — Email-to-Case versus Live Agent versus a bot, Omni-Channel versus queue assignment.' },
      { name: 'Analytics and KPI interpretation', share: 'Common within Contact Center Analytics and Industry Knowledge', detail: 'Read a described report or dashboard and identify the metric, what it measures, or which process change would move it. Reward is for knowing what each KPI means and what drives it.' }
    ],
    samples: [
      {
        prompt: 'A customer wants a service solution where cases arriving from email are automatically assigned to the correct queue based on product, and agents should be able to see all open work across every channel in one screen. Which solution approach is the best practice?',
        options: [
          'A. A custom Apex trigger that assigns every email case to a single queue',
          'B. Email-to-Case with assignment rules plus an Omni-Channel service console',
          'C. Web-to-Case with manual agent reassignment from the case feed',
          'D. A separate Salesforce object and screen built with Lightning Web Components'
        ],
        answer: 'B',
        explanation: 'Email-to-Case converts inbound email into cases, and assignment rules route them to the correct queue by product automatically. The Omni-Channel console then surfaces all open work across channels in a single agent interface — the exact requirement stated. A solves routing but only to one queue and adds unnecessary custom code, violating the standard-over-custom principle. C routes only web forms and leaves email and multi-channel visibility unaddressed. D over-engineers a declarative problem and duplicates what native case management already provides.'
      },
      {
        prompt: 'A service leader wants to know whether a new self-service knowledge portal is actually reducing incoming case volume. Which metric best answers this question?',
        options: [
          'A. Average case handling time',
          'B. Deflection rate',
          'C. First-contact resolution rate',
          'D. Case reopen rate'
        ],
        answer: 'B',
        explanation: 'Deflection rate measures the share of would-be cases that were resolved in self-service before ever becoming a case, which is precisely the reduction in incoming case volume the leader asked about. Average handling time measures agent efficiency on cases that still arrive, not whether the portal reduced arrivals. First-contact resolution measures whether cases are solved on first contact, and case reopen rate measures quality after closure — both are quality metrics, not volume-prevention metrics. This is the classic KPI-to-decision mapping the Contact Center Analytics domain rewards.'
      },
      {
        prompt: 'During a Service Cloud implementation, the customer insists on a heavily customised case form that duplicates standard case functionality. The consultant\u2019s best response is to:',
        options: [
          'A. Build the custom form exactly as requested to satisfy the stakeholder',
          'B. Explain the benefits and limitations of the standard solution and document the trade-off',
          'C. Refuse and escalate to the customer\u2019s executive sponsor',
          'D. Build both the standard and custom forms and let agents choose'
        ],
        answer: 'B',
        explanation: 'The consulting-process domains reward managing scope and explaining trade-offs: the consultant should analyse the requirement, present what the standard case form already provides, and document the cost of the custom build — operational debt, maintenance burden and slower future upgrades. A satisfies the stakeholder but abdicates professional judgment and creates avoidable debt. C is confrontational and premature; escalation is a last resort, not a first move. D doubles the maintenance burden and contradicts the standard-over-custom principle by building unnecessary duplication.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The exam is 60 questions in 105 minutes, delivered proctored either online or at a test centre, with a passing score of 78 percent on the English version. Everything about the day comes down to that arithmetic. With up to five unscored items mixed in, the scored count is between 55 and 60, and at a 78 percent target you need roughly 47 correct — so the pacing discipline is non-negotiable: average under 1 minute 45 seconds per question, never dwell on an item longer than two minutes, and never leave anything blank, because an unanswered question is always wrong. Plan the day around the scenario-question rhythm: read the customer story, extract the stated constraint or KPI, and eliminate the technically-plausible-but-wrong answers before committing. The exam guide permits no reference materials — no hard-copy or online resources — so do not expect to look anything up. Check-in is standard for a proctored vendor exam: government-issued photo ID, name matching your Salesforce certification account exactly, and for the online-proctored option a clean room, working webcam and stable connection, with a system test run on the same machine beforehand. Arrive or start check-in at least 30 minutes early, since online check-in includes room scans. The result, pass or fail, is available immediately after submission, and on a pass your credential appears in your Salesforce account and a badge is issued. On a fail, review your score report by domain, wait through any retake window, and study the two or three weakest domains before paying the $100 retake fee — and remember that retakes still cost money, so a targeted retake plan beats an immediate one.',
    bring: [
      'A government-issued photo ID with your name matching your Salesforce certification account exactly',
      'A second form of ID where the test centre requires one',
      'Your Salesforce credentials and booking confirmation in case check-in cannot locate the appointment',
      'For online proctoring: a webcam-equipped computer, quiet private room, and the proctoring software tested on the same machine beforehand',
      'A clock or watch-free awareness of time — there is no on-screen timer in every delivery mode, so practise pacing'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker or out of the room',
      'All notes, cheat sheets and printed or digital reference materials (none are permitted)',
      'Food and drink beyond what the test centre allows',
      'Second monitors, which must be disconnected and out of view for online proctoring',
      'Any other person in the room during an online-proctored sitting'
    ],
    timeline: [
      { time: 'One week before', detail: 'Re-open the official exam guide and confirm the release alignment and the passing score for your language. Run the online-proctoring system test on the exact machine you will use, and confirm the test-centre address and travel time if you booked in person.' },
      { time: '24 hours before', detail: 'Light review of the domain weights and your practice-exam misses only. Check in online or confirm your appointment. Charge devices and lay out your ID.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes face, ID and room scans and can take 15 minutes.' },
      { time: 'Check-in', detail: 'ID verification and agreement to the exam policies. You are seated; no reference materials are permitted at any point.' },
      { time: '0-10 minutes', detail: 'Read each question stem for the stated constraint and KPI first. On scenario items, eliminate the technically-plausible-but-wrong options before choosing.' },
      { time: '10-95 minutes', detail: 'Work steadily at under 1 minute 45 seconds per question. Flag anything uncertain and move on; you can return before submitting.' },
      { time: '95-105 minutes', detail: 'Return to flagged items, then review any questions you rushed. Submit rather than letting the clock expire — a blank is always wrong.' }
    ],
    rules: [
      '60 questions in 105 minutes; passing score 78% on the English version, 67% on the Japanese version.',
      'Up to five unscored questions are mixed in and do not affect your result, but they are not identified.',
      'No reference materials are permitted — no hard-copy or online resources at any point.',
      'Salesforce Platform Administrator certification is a prerequisite and is verified before you can sit the exam.',
      'Registration is $200; a retake is $100, payable each attempt.',
      'The result is available immediately; on a pass, your credential and badge appear in your Salesforce account.',
      'The credential requires maintenance exams for future Salesforce releases to remain valid — the exam day is the start, not the end.'
    ],
    afterwards:
      'Your pass or fail appears immediately after submission. On a pass, your Service Cloud Consultant credential is issued in your Salesforce certification account and you can claim the associated badge and certificate. The credential is not permanent: Salesforce requires certified professionals to pass maintenance exams aligned to future releases — typically several per year — to keep the certification current, and letting them lapse means re-certifying from scratch. Diary the maintenance cycle the week you pass and treat it as part of the credential\u2019s real cost. On a fail, resist the urge to rebook immediately. Your score report identifies the domains that pulled you down; spend two to three weeks drilling those specific areas with scenario questions, then pay the $100 retake fee and go again with a targeted plan rather than the same one.'
  }
};

export default data;
