// Depth content for: salesforce-sales-cloud-consultant
// Salesforce Certified Sales Cloud Consultant (CRT-251).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud-platform & Salesforce certification desk',
    bio: 'This guide is compiled and maintained by our platform-certifications desk. Sales Cloud Consultant exam structure, scoring, fees and the administrator prerequisite come from the Salesforce exam guide and the official Trailhead certification pages, which we verified directly. Salesforce publishes no pass rates, and we state that plainly. Wage figures come from the BLS occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certification.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CRT-251 format (60 scored questions plus up to 5 unscored, 105 minutes), the 68% passing score, the $200 fee, and the Salesforce Administrator prerequisite against the Salesforce exam guide.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$133,080 median for software developers (BLS, May 2024) — SOC 15-1252, the closest series for the consultant track',
    summary:
      'The direct answer is that the closest BLS occupation to the Salesforce consultant career is software developers, SOC 15-1252, which earned a median of $133,080 per year in May 2024, the most recent BLS Occupational Employment and Wage Statistics survey, and it is the honest series to cite because there is no BLS occupation called "Salesforce consultant" and BLS classifies by job duties rather than by certification. That choice deserves an honest caveat: a Salesforce consultant is a functional-technical role that sits between software development and business analysis, so the software-developer median overstates what an entry consultant earns and understates what a senior partner-track consultant earns — the realistic band is the software-developer distribution\'s lower half at entry (the lowest 10 percent of software developers earned less than $79,850) climbing past the median with experience. The employment context is strong: BLS projects software developer employment to grow 15 percent from 2024 to 2034, much faster than the average for all occupations, with about 129,200 openings a year, and the Salesforce ecosystem specifically remains one of the largest certified-professional markets in enterprise software, with Salesforce\'s own Trailhead ecosystem certifying consultants, admins and developers in volume. Where the Sales Cloud Consultant credential sits in that picture is precise: it is a mid-tier professional certification aimed at consultants who already hold the Salesforce Administrator credential and have hands-on experience designing and deploying Sales Cloud solutions — the exam guide\'s target candidate has real implementation hours, not just coursework — so its value is as a differentiator in a crowded hiring market for Salesforce consulting roles, and it carries weight with consulting partners and employers who staff implementations. The honest framing is that the credential is a market signal, not a wage catalyst: it does not change the BLS median, but it verifies to employers that a consultant can design and deliver Sales Cloud solutions at a professional standard, which is what converts general platform familiarity into billable consulting work. The realistic payoff line is: earn the Administrator credential first, gather implementation experience, add the Sales Cloud Consultant certification, and let the combination carry the job-market leverage in an occupation whose median is $133,080 and whose demand is projected to keep growing.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1252)' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024 — the realistic entry band for consultants' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, software developers, QA analysts, and testers, 2024', value: '1,895,500 jobs', note: 'BLS OOH Quick Facts, 2024 (combined series)' },
      { label: 'Projected annual openings', value: '~129,200 per year', note: 'BLS OOH Job Outlook, 2024-34 — 15% growth' }
    ],
    growth: '15% projected change 2024-34 (much faster than average) with ~129,200 openings a year; the credential\'s value is as a mid-tier differentiator in the large and growing Salesforce consulting labour market, not as a direct wage catalyst',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  passRate: {
    headline: 'Salesforce publishes no pass rate — what it publishes is the passing score (68%) and a format with 60 scored questions plus up to 5 unscored, in 105 minutes',
    summary:
      'There is no published pass rate for the Salesforce Certified Sales Cloud Consultant exam, because Salesforce does not release pass-rate statistics for any of its certifications, and we are not going to supply an invented one — the figure sometimes quoted online of roughly two-thirds passing has no official source and contradicts nothing because there is nothing official to contradict. What Salesforce does publish, in the exam guide on Trailhead, is the complete specification: the exam (CRT-251) contains 60 multiple-choice and multiple-select questions plus up to five unscored questions, to be completed in 105 minutes, with a passing score of 68 percent. Two details in that specification matter more than any pass statistic. First, the up-to-five unscored questions are interspersed and indistinguishable from the scored ones, so the practical instruction is to treat all 65 as scored — Salesforce uses them for psychometric purposes and a candidate cannot identify them. Second, the passing score is set by Salesforce and is subject to change without notice, so the exam guide\'s current number should be confirmed at booking time; it is not a fixed statutory figure. The exam also carries a hard prerequisite that shapes who sits it: candidates must hold the Salesforce Certified Administrator credential, so the Sales Cloud Consultant is a second-rung certification taken by people who already cleared one Salesforce exam, and the pass-rate question is best understood in that light — the population is self-selected. The practical planning number is the 68 percent cut itself: with 60 scored questions, the line sits around 41 correct answers, and because the exam is scenario-heavy and drawn from the consulting practice — requirements gathering, solution design, implementation strategy, and the functional application of Sales Cloud — the correct preparation is hands-on implementation hours plus the official exam guide, not memorising product trivia. The candidates who fail are typically the ones who can demo a feature but cannot decide which solution a scenario requires, which is exactly the consulting judgement the exam is designed to test.',
    source: {
      label: 'Salesforce — Certified Sales Cloud Consultant exam guide',
      url: 'https://trailhead.salesforce.com/credentials/sales-cloud-consultant'
    },
    caveat: 'Salesforce publishes no pass-rate statistics. The published figures are the format (60 scored questions plus up to 5 unscored, 105 minutes), the passing score (68%, subject to change), and the $200 fee, all from the Salesforce exam guide. The Administrator credential is a prerequisite.'
  },

  studyPlan: {
    summary:
      'Plan eight to twelve weeks and roughly 80 to 120 hours of study, and start from the premise that the Sales Cloud Consultant exam (CRT-251) is a consulting-judgement test, not a feature quiz: 60 scored multiple-choice and multiple-select questions plus up to five unscored items in 105 minutes, with a 68 percent passing score, drawn from the current exam guide\'s sections — Sales Practices, Implementation Strategies, Application of Product Knowledge, Lead Management, Account and Contact Management, Opportunity Management, Sales Productivity and Integration, Consulting Practices, Sales Metrics and Reporting, and Data Management — and written for a candidate who already holds the Salesforce Administrator credential and has hands-on implementation experience. The prerequisite shapes the plan: if you are not yet an Administrator, that certification comes first, and its study should be counted separately, because the consultant exam assumes the platform fundamentals and tests the consultant layer on top. Structure the plan in three phases: weeks one to three on the functional platform, working through the exam guide\'s product-knowledge sections in Trailhead — the Salesforce Fundamentals and Sales Cloud modules, plus the lead, account, opportunity, campaign and forecasting objects and how they interact — so you can describe the standard Sales Cloud data model and its declarative configuration cold; weeks four to eight on the consulting layer, studying requirements gathering, solution design against a business requirement, implementation strategy and deployment, the trade-offs between configuration options, and the reporting-and-dashboard and data-management sections, practising on scenario questions from the official practice materials; and weeks nine to twelve in exam mode, with the official practice test and timed 105-minute sessions, plus a deliberate pass over the Sales Cloud-specific settings a consultant configures — path, sales processes, approval processes, territory and forecasting. The single most effective preparation is hands-on time in a Salesforce Developer or Trailhead playground, building solutions to described scenarios, because the exam\'s scenario items reward having done the work. Budget $200 for the exam itself and $100 for a retake, and note the maintenance obligation: Salesforce certifications are kept current through release-based maintenance exams, so the pass is not the end of the study.',
    totalHours: '80-120 hours over 8-12 weeks (after the Administrator prerequisite)',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Functional platform — the Sales Cloud data model and configuration',
        tasks: [
          'Work the Salesforce Fundamentals and Sales Cloud modules on Trailhead',
          'Master the standard objects: leads, accounts, contacts, opportunities, campaigns, and forecasting',
          'Learn the declarative configuration toolkit: page layouts, fields, validation rules, and sales processes',
          'Build practice scenarios in a Trailhead playground to see the configuration behave'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 4-8',
        focus: 'The consulting layer — requirements, design, and implementation',
        tasks: [
          'Study requirements gathering and how to translate a business requirement into a solution design',
          'Cover implementation strategy: project lifecycle, deployment, and testing',
          'Practise the trade-off decisions the exam loves — when to configure, when to use a custom object, when to integrate',
          'Work the reporting and dashboard, and data management sections, including migration concepts'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Sales Cloud specifics and scenario drilling',
        tasks: [
          'Drill the Sales Cloud-specific configuration: sales processes, path, approval processes, territory and forecasting',
          'Work the official practice exam and the exam guide\'s sample questions',
          'Build two or three full solutions to described scenarios in your playground',
          'Score yourself against the 68% line and map every miss to an exam-guide section'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 11-12',
        focus: 'Timed exam mode',
        tasks: [
          'Run timed 105-minute practice sessions under exam conditions',
          'Re-drill the sections where you sit below the line, starting with solution design and opportunity management',
          'Confirm your Administrator credential is current and register for the exam',
          'Light review of the exam guide and rest the day before'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'Working Salesforce consultant without the credential', detail: 'Four to six weeks. Your implementation hours cover the scenario judgement; spend the time on the exam-guide\'s exact section weights, the product-knowledge breadth you under-use, and the timed 105-minute format, then book.' },
      { label: 'Administrator adding the consultant certification', detail: 'Ten to twelve weeks. Add two weeks on the consulting layer — requirements gathering, solution design, and the trade-off decisions the administrator role does not exercise — and one more week of scenario drilling, because the exam tests consulting judgement, not platform knowledge you already hold.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably passes the Sales Cloud Consultant exam is "build solutions in a playground, weight the consulting-judgement sections, and rehearse the 105-minute format," because the exam is scenario-driven and written for practitioners, and the 68 percent cut rewards deciding which solution a described requirement needs, not recognising product features. The single biggest error is preparing like a product quiz — memorising feature names — when the exam\'s value is in the consulting trade-offs between configuration options. The structure that should drive the plan is the one the exam guide publishes: 60 multiple-choice and multiple-select questions plus up to five unscored items in 105 minutes, with a 68 percent passing score that Salesforce states is subject to change, and a prerequisite — the Salesforce Administrator credential — that shapes who sits the exam and what it can assume. The exam-guide sections define the scope: Sales Practices, Implementation Strategies, Application of Product Knowledge, Lead Management, Account and Contact Management, Opportunity Management, Sales Productivity and Integration, Consulting Practices, Sales Metrics, Reports and Dashboards, and Data Management — and the plan should weight the consulting layer, because the scenario items that decide outcomes are the ones asking which configuration, custom object, or integration a requirement calls for. The playground is the second pillar and the one that builds the deciding skill: a candidate who sets up a sales process, models a custom-object relationship, configures an approval process, and constructs the report-and-dashboard answer in a Trailhead playground has done the work the scenario items describe, and answers them by pattern rather than by guess. The timed rehearsal is the third pillar: with long scenario stems and a 105-minute clock, a candidate who sweeps the paper, flags the long scenarios, and returns to them beats one who lets the consulting-heavy final third consume the minutes. And because the credential is maintained through release-based exams, the plan should account for the maintenance loop after the pass, not just the exam itself. A candidate who builds in the playground, weights the consulting sections, and rehearses the clock is the one for whom the 68 percent line is a formality.',
    items: [
      {
        title: 'Spend hands-on time in a Trailhead playground',
        detail: 'The scenario items describe a business requirement and ask which solution, configuration, or design achieves it — a skill that only doing the work builds. Build real solutions in a Developer Edition or Trailhead playground: set up a sales process, model a custom object relationship, configure an approval process, and construct the report-and-dashboard answer. Candidates who have done the configuration answer these items by pattern.'
      },
      {
        title: 'Weight solution design and the consulting trade-offs',
        detail: 'The highest-value sections are the ones that test judgement: translating a requirement into a design, choosing between configuration options, and knowing when to integrate versus configure. Study the trade-offs deliberately — custom objects versus standard, declarative versus code, native reporting versus external BI — because the exam is built on these decisions, not on feature enumeration.'
      },
      {
        title: 'Rehearse the 105-minute format with the official practice exam',
        detail: '60 scored questions plus up to five unscored in 105 minutes is under two minutes per item, and the scenario items are long reads. Run timed sessions with the official practice exam so you learn to sweep the paper, flag the long scenarios, and return to them — the candidates who fail are usually the ones who run out of clock on the consulting-heavy final third.'
      },
      {
        title: 'Know the Sales Cloud-specific configuration cold',
        detail: 'The product-knowledge section tests the Sales Cloud specifics a consultant actually configures: sales processes and path, opportunity stages and forecasting, territory management, approval processes, and the campaign-to-opportunity flow. Drill these until you can describe each one\'s purpose and its configuration steps, because the direct-knowledge items concentrate here.'
      },
      {
        title: 'Confirm the prerequisite and the maintenance loop',
        detail: 'The Salesforce Administrator credential is a prerequisite for this exam — check it is current before registering — and passing is not the end of the study: Salesforce certifications are kept current through release-based maintenance exams, so budget for the maintenance cadence after the pass, and treat the exam guide as the living document it is.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The buying decision for the Sales Cloud Consultant exam is dominated by official and free resources: the Trailhead Sales Cloud modules are free and are the curriculum, the exam guide is free and is the syllabus, the official practice exam is the right readiness tool, and the exam fee is the main cost. The current pricing is $200 for the exam and $100 for a retake, and Salesforce bundles and discounts (vouchers, exam discounts, retake credits) appear periodically through Trailhead and partner programmes, so it is worth checking for a discount before paying list price — the check takes minutes and can cut the fee by a meaningful share. The buying order that makes sense: the exam guide first, because it is free and defines the section weights and sample questions; the Trailhead modules second, because they are free, hands-on, and are the official curriculum; the official practice exam third, because it is the only readiness tool scored in the real format against the 68 percent line; and third-party courses or question banks last, only for a candidate who wants structure or extra drilling. The critical caveat on paid products is currency: third-party courses and question banks exist in volume and can be useful, but they lag the exam guide, and Salesforce explicitly updates its exams and the guide on a release cadence — so the rule is to check any paid product\'s currency against the current exam guide before buying, and to treat Trailhead plus the official practice exam as the baseline that no third-party product replaces. The total realistic cost is the exam fee, a possible retake at $100, and the maintenance exams that follow a pass on Salesforce\'s release cadence — a modest lifetime budget for a mid-tier credential in a large consulting ecosystem, and one a candidate should plan at the start rather than discover after passing.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Sales Cloud Consultant exam (CRT-251)', values: ['$200 exam; $100 retake (confirm current pricing and any voucher)', 'Online proctored or test centre', 'The exam itself — 60 scored + up to 5 unscored, 105 minutes'] },
      { label: 'Trailhead Sales Cloud and consultant modules', values: ['Free', 'Online, hands-on in a playground', 'The official curriculum and hands-on configuration practice'] },
      { label: 'Salesforce exam guide', values: ['Free', 'Official PDF / Trailhead page', 'The syllabus — section weights and sample questions'] },
      { label: 'Official practice exam', values: ['~$20-40 or bundled', 'Online, timed', 'Readiness calibration against the 68% line'] },
      { label: 'Third-party courses and question banks', values: ['~$30-300', 'Video courses, question banks', 'Supplemental drilling — confirm currency against the current exam guide'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate; Salesforce exam pricing and voucher offers change on a release cadence, so confirm the current fee and check for exam discounts on Trailhead before paying list price. Salesforce updates its exams and exam guide regularly — verify any paid material is current. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The mistakes that cost Sales Cloud Consultant candidates the credential are preparation-model errors: studying like a feature quiz when the exam tests consulting judgement, skipping the hands-on playground work, ignoring the 105-minute clock, and missing the Administrator prerequisite or the maintenance loop that follows a pass. Each one is avoidable, and each one is common enough that it explains most of the difference between candidates who pass on the first attempt and candidates who pay for a retake. The feature-quiz error is the most common because it feels like preparation: the exam asks which solution, configuration or design a described requirement needs, and recognition of feature names does not carry a scenario-based 68 percent cut, so a candidate who memorised the product catalogue without practising the trade-offs between configuration options meets the scenario items cold. The no-playground error is the most consequential because it skips the only activity that builds the deciding skill: the scenario items describe requirements and configurations, and a candidate who has set up a sales process, modelled a relationship, and configured an approval process in a Trailhead playground answers them by pattern, while a candidate who only read about them guesses. The clock error is the most mechanical: 60 scored questions plus up to five unscored in 105 minutes, with long scenario stems, punishes unpractised pacing, and the common failure is a strong first half and a rushed final third. The prerequisite error is the most expensive per unit of checking: the Administrator credential is required before this exam, so a candidate who studies for weeks and discovers at registration that the prerequisite is missing has lost both the study time and the fee. The maintenance error is the most common post-pass mistake: Salesforce certifications are kept current through release-based maintenance exams, so a candidate who treats the pass as the end of study loses the credential\'s currency on the next release cycle. Every one of these is fixed by the exam guide, the playground, and a timed rehearsal.',
    items: [
      {
        mistake: 'Studying product features instead of consulting judgement',
        fix: 'The exam asks which solution, configuration or design a described requirement needs — a consulting decision, not a feature fact. Prepare by working scenario questions and building solutions in a playground, and study the trade-offs between configuration options deliberately, because recognition of feature names does not carry a scenario-based 68% cut.'
      },
      {
        mistake: 'Skipping hands-on time in a playground',
        fix: 'The scenario items ask which solution or configuration a requirement needs, and that judgement is built by doing the configuration, not reading about it. Work in a Trailhead playground: build a sales process, model a relationship, configure an approval process, and construct the report-and-dashboard answer. Candidates who have configured the platform answer these items by pattern; candidates who only studied feature names guess.'
      },
      {
        mistake: 'Running out of clock on the scenario items',
        fix: '60 scored questions plus up to five unscored in 105 minutes, with long scenario stems, punishes unpractised pacing. Run timed sessions with the official practice exam, learn to sweep the paper and flag the long scenarios, and return to them — the candidates who fail are usually the ones who let the consulting-heavy final third consume the clock.'
      },
      {
        mistake: 'Registering without a current Administrator credential',
        fix: 'The Salesforce Certified Administrator credential is a prerequisite for the Sales Cloud Consultant exam. Confirm your Administrator status is current before registering, and count its study separately in the plan — the consultant exam assumes the platform fundamentals and tests the layer above them.'
      },
      {
        mistake: 'Treating the pass as the end of study',
        fix: 'Salesforce certifications are kept current through release-based maintenance exams, so the credential requires ongoing maintenance after the pass. Log the maintenance cadence the week you pass, budget for it, and keep the exam guide in your reference stack — the platform and the exam both move on a release schedule.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The Sales Cloud Consultant exam (CRT-251) is a computer-delivered test of 60 multiple-choice and multiple-select questions plus up to five unscored questions, to be completed in 105 minutes, with a passing score of 68 percent — a number Salesforce states is subject to change without notice, so it should be confirmed at booking. The content follows the current exam guide\'s sections — Sales Practices, Implementation Strategies, Application of Product Knowledge, Lead Management, Account and Contact Management, Opportunity Management, Sales Productivity and Integration, Consulting Practices, Sales Metrics, Reports and Dashboards, and Data Management — and the paper is dominated by scenario items that present a business requirement or a client situation and ask which solution, configuration, or design a consultant should choose. Practically, the paper breaks into three families: direct-knowledge items testing a specific feature, setting, or best practice precisely; scenario-based items describing a requirement and asking for the correct design or configuration decision, which carry the weight and decide most outcomes; and consulting-process items covering requirements gathering, the project lifecycle, deployment and testing. Because every scored question is equal and the up-to-five unscored questions are indistinguishable, the discipline is to treat all 65 as scored, answer everything, and manage the clock at under two minutes per item on average — which is achievable only with a timed rehearsal, because the long scenario stems consume far more time than a candidate expects. The exam assumes the Administrator prerequisite, so the platform fundamentals are the floor and the consultant layer — requirements to design, trade-offs, and implementation judgement — is what separates candidates; a candidate who builds in a playground and weights the scenario family is positioned for the 68 percent line. The samples below are editor-written illustrations of the published styles, not live items, and the standing note applies to the whole file.',
    types: [
      { name: 'Direct-knowledge items', share: 'A meaningful share', detail: 'A specific feature, setting, or best practice tested precisely — sales processes, path, forecasting, approval processes, and the standard data model.' },
      { name: 'Scenario-based design items', share: 'The decisive share', detail: 'A business requirement or client situation asking which solution, configuration, or design achieves it — the family that rewards hands-on implementation experience.' },
      { name: 'Consulting-process items', share: 'A defined share', detail: 'Requirements gathering, project lifecycle, implementation strategy, deployment and testing — the process layer the exam guide separates from product knowledge.' }
    ],
    samples: [
      {
        prompt: 'A client wants sales reps to see the most relevant fields when they work an opportunity, with a different set of required fields for each stage of the sales process. Which solution should a consultant recommend?',
        options: [
          'A. A single page layout applied to all opportunities',
          'B. Opportunity page layouts assigned by record type, combined with sales process and stage-based path settings',
          'C. A custom formula field that shows all fields at every stage',
          'D. An external spreadsheet that reps maintain separately'
        ],
        answer: 'B',
        explanation: 'Opportunity page layouts assigned by record type let different fields appear for different opportunity types, and the sales process plus path configuration controls the stages and the stage-dependent guidance — the correct declarative answer. A shows the same fields to everyone, C is not a mechanism for stage-based field display, and D removes the work from the platform entirely. The item tests the design decision between configuration options, which is the scenario family the exam leans on.'
      },
      {
        prompt: 'A consultant is asked to recommend an approach when the client\'s requirement cannot be met by the standard Sales Cloud configuration alone. What is the correct sequence of considerations?',
        options: [
          'A. Immediately recommend a custom Apex solution',
          'B. First assess whether the requirement can be met declaratively, then determine the trade-offs of a custom or integrated solution',
          'C. Advise the client to change the requirement',
          'D. Recommend purchasing a new tool without analysis'
        ],
        answer: 'B',
        explanation: 'The consulting-judgement the exam rewards is: exhaust the declarative platform first, then evaluate the trade-offs of custom development or integration against the requirement\'s value. A skips the declarative assessment, C dodges the requirement, and D bypasses analysis. The item tests the consulting process — requirements to design with the platform\'s capabilities in mind — rather than a feature fact.'
      },
      {
        prompt: 'Which reporting approach best serves a sales manager who needs a rolling view of the team\'s pipeline by stage, refreshed from the platform\'s data?',
        options: [
          'A. A report exported weekly to a spreadsheet',
          'B. A Salesforce report with a dashboard component showing pipeline by stage, refreshed from the live data',
          'C. A static slide deck updated monthly',
          'D. An email summary sent manually each day'
        ],
        answer: 'B',
        explanation: 'A Salesforce report with a dashboard component gives the manager a live, refreshable view of pipeline by stage from the platform\'s own data — the correct platform-native answer. A and C degrade to stale snapshots, and D is manual and error-prone. The item tests the reporting and dashboard section, where the exam expects the consultant to choose the platform-native solution for the described need.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The Sales Cloud Consultant exam is a 105-minute, 60-question (plus up to five unscored) multiple-choice and multiple-select test, delivered by Salesforce through online proctoring or at an authorised test centre, with a 68 percent passing score, and the session follows the standard Salesforce delivery rules. At a test centre, arrive 30 minutes early, present a government-issued photo ID matching your registration exactly, and expect the check-in to include identity verification, a signature, and a personal-items search before you are seated; your phone, smartwatch, bag and notes go into a locker, and the test centre provides only the workstation and a noteboard. For online proctoring, the week before is the critical window: run the system check on the exact machine you will use, clear the desk, close the door, and have your phone ready for the check-in photographs of your face, your ID and the whole room — a second monitor must be unplugged and turned away, and the proctor monitors the session live. Once the clock starts, the 60 scored questions run in mixed order with the up-to-five unscored items indistinguishable among them, so the pacing plan is the thing that matters most: under two minutes per question on average, with the long scenario stems flagged and returned to rather than sat on, and every question answered because there is no penalty for guessing. The common failure pattern is spending the first third of the clock on the consulting-heavy scenarios and rushing the final quarter, so check your position at the halfway mark and sweep the paper before returning to the flagged items. Your result appears at the end of the session, delivered by the proctoring channel, and the passing score is 68 percent — confirm the current figure at booking, because Salesforce states it is subject to change. On a pass, the credential is recorded in your Salesforce certification account and the maintenance loop begins; on a fail, the retake costs $100 (confirm current pricing), and the correct response is targeted review of the exam-guide sections the first attempt exposed.',
    bring: [
      'Government-issued photo ID matching your registration exactly',
      'Your scheduling confirmation with the test-centre address or online proctoring link',
      'For online proctoring: the system-tested computer, webcam, microphone and stable connection, and a private room with a door you can close',
      'A phone for the online check-in photos of your face, ID and room',
      'Your Salesforce certification-account login details in case check-in needs to verify the booking'
    ],
    leave: [
      'Phones, smartwatches, earbuds and all electronics — locker at a centre, out of the room for online proctoring',
      'All notes, books and reference material — the exam is closed-book',
      'Your own scratch paper; centres provide a noteboard and online proctoring uses a digital whiteboard or approved scratch per the proctoring policy',
      'Bags, coats, food and drink beyond what the centre or proctor permits',
      'Second monitors and any other person in the room for online proctoring'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your Administrator credential is current, your ID name matches your registration, and for online proctoring run the system check on the exact machine you will use.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin the online check-in — identity verification, signature, and the room scan for online candidates.' },
      { time: 'First pass', detail: 'Sweep the direct-knowledge items briskly and flag the long scenario stems rather than sitting on them; check your position at the halfway mark.' },
      { time: 'Second pass', detail: 'Work the flagged scenario and consulting-judgement items carefully — this is where the 68% line is decided — then answer everything.' },
      { time: 'After submit', detail: 'Your result appears at the end of the session; on a pass, the credential records in your Salesforce account, and on a fail, the retake is priced separately and should follow targeted review.' }
    ],
    rules: [
      '60 scored multiple-choice and multiple-select questions plus up to 5 unscored, in 105 minutes.',
      'Passing score is 68%, a figure Salesforce states is subject to change without notice — confirm at booking.',
      'The up-to-five unscored questions are indistinguishable from scored ones; treat all items as scored and answer everything — there is no penalty for guessing.',
      'The Salesforce Certified Administrator credential is a prerequisite.',
      'The exam is closed-book and computer-delivered through Salesforce online proctoring or an authorised test centre; a government-issued photo ID is required.'
    ],
    afterwards:
      'Your result appears at the end of the session, and the pass line is 68 percent — on a pass, the credential is recorded in your Salesforce certification account and you can add the Sales Cloud Consultant badge to your Trailhead and LinkedIn profiles, with the maintenance loop beginning on Salesforce\'s release cadence, so log it immediately and budget for the release-based maintenance exams that keep the certification current. On a fail, the retake costs $100 (confirm current pricing), and the correct response is targeted: map the first attempt against the exam-guide sections, re-drill the consulting-judgement areas — solution design and the trade-off decisions — and re-sit with a defined target rather than hope. Either way the credential is a mid-tier market signal in the large and growing Salesforce consulting ecosystem, sitting on top of the Administrator prerequisite and feeding an occupation whose software-developer median is $133,080 (BLS, May 2024) with 15 percent projected growth — the certification verifies that you can design and deliver Sales Cloud solutions, and the implementation experience it validates is what converts the credential into the billable consulting work the salary band actually rewards.'
  }
};

export default data;
