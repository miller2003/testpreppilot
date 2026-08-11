const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'CRM & platform development certifications desk',
    bio: 'This guide is compiled and maintained by our Salesforce-certifications desk. Exam structure, question count, timing, passing score, fees and prerequisites come from the official Salesforce Platform Developer II exam guide, which is revised with each platform release, and we state plainly when a figure such as a pass rate is not published rather than repeating third-party estimates. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Question count, time allotment, passing score, registration and retake fees, and the Platform Developer I prerequisite were checked against the official Salesforce Platform Developer II exam guide.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$132,270 median for software developers (SOC 15-1252, BLS May 2024) — the closest official occupation to the Platform Developer II role',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Salesforce developer", so the honest anchor for this credential is Software Developers, SOC 15-1252, which had a May 2024 median wage of $132,270, with the lowest 10 percent earning less than $79,850 and the highest 10 percent more than $211,450. That code is the right fit for a deliberate reason: the Platform Developer II candidate profile in the official exam guide describes a developer with two to four years of experience building custom applications on the Lightning Platform, writing Apex, designing data models, tuning performance and deploying programmatic solutions — which is developer work, not administrator work, and the wage distribution above is for that broader occupation. BLS projects 15 percent employment growth for the combined software developers, quality assurance analysts and testers occupation from 2024 to 2034, with about 129,200 openings a year, which is the strongest tailwind of any occupation quoted on this page. The caveats matter. First, the credential sits in a specific ecosystem: employers hiring for Salesforce-specific senior developer or technical-lead roles typically list Platform Developer II as preferred or required, but BLS does not measure the Salesforce ecosystem separately, and we will not invent a certificate premium. Second, the candidate profile in the official guide — two to four years of development experience with at least one year designing, implementing and deploying on the Lightning Platform — means this is not an entry credential; the realistic salary story for a fresh PDII holder is closer to the middle of the developer range, with the top of the range reserved for senior architects who pair the credential with years of platform delivery. Third, maintenance matters to the wage story: the certification does not expire if you complete annual maintenance, which keeps the credential alive across a career rather than forcing a three-year re-sit.',
    rows: [
      { label: 'Median annual wage, software developers', value: '$132,270', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OEWS, SOC 15-1252, May 2024' },
      { label: 'Employment, 2024', value: '1,895,500 jobs (combined software dev/QA)', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~129,200 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '15% projected change 2024-34 for software developers, QA analysts and testers — much faster than the 3% all-occupations average',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers, Quality Assurance Analysts, and Testers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  passRate: {
    headline: 'Salesforce publishes no pass rate for Platform Developer II — but the official exam guide publishes the passing score, 70%, alongside a $200 fee and a $100 retake fee',
    summary:
      'The core fact is that Salesforce does not release pass-rate statistics for the Platform Developer II exam, so no pass-rate figure exists to quote and we will not repeat the third-party numbers that float around prep sites. What is published and verifiable is the official exam guide, which states the exam contains 60 multiple-choice questions plus up to five unscored questions, that 120 minutes are allotted, that the passing score is 70 percent, that the registration fee is US$200 (plus applicable local taxes), that the retake fee is US$100, and that the Salesforce Certified Platform Developer credential is a prerequisite. The guide also states the exam questions align to a named platform release — Winter \u201924 in the version we verified — which matters because Salesforce refreshes the guide each release cycle and a candidate must confirm they are studying the current version rather than a guide for a retired release. Salesforce does publish the exam outline, and the two largest sections in the current guide are Advanced Developer Fundamentals at 15 percent and Process Automation, Logic, and Integration at 27 percent, with the remaining weight spread across data modeling and management, user interface, performance, integration, testing, and debug and deployment tools. Because there is no pass rate to guide planning, the practical reading of the published threshold is that a candidate should aim for sustained scores well above 70 percent on practice items — and should remember that the up-to-five unscored questions are randomly distributed and have no effect on the result, so every question on screen must be treated as if it counts.',
    source: {
      label: 'Salesforce — Certified Platform Developer II exam guide',
      url: 'https://help.salesforce.com/s/articleView?id=005298967'
    },
    caveat:
      'No pass rate is published by Salesforce. The 70% passing score, 60 scored questions, 120-minute allotment, $200 registration fee and $100 retake fee are the published figures from the official exam guide that this narrative relies on instead.'
  },

  studyPlan: {
    summary:
      'Plan for ten to twelve weeks and 90 to 120 hours of study after you have passed Platform Developer I, and spend the largest share of that time writing and testing real Apex rather than re-reading documentation — the exam is explicitly aimed at developers with two to four years of experience and one year or more designing, implementing and deploying on the Lightning Platform. The exam is 120 minutes for 60 scored multiple-choice questions plus up to five unscored items, so pacing is roughly two minutes per question, which sounds generous until you hit the code-reading items that consume real time. The official exam guide\u2019s outline tells you where the weight sits: Advanced Developer Fundamentals is 15 percent and Process Automation, Logic, and Integration is 27 percent, so more than a quarter of the paper lives in declarative-plus-programmatic process automation — triggers, flows, async Apex, callouts and their interactions — and the rest is spread across data modeling and management, user interface, performance, integration, testing, and debug and deployment tools. The plan below runs in five blocks: advanced fundamentals first, the 27-percent process-automation and integration domain next, then testing and UI and performance, then debug and deployment, closing with two weeks of timed rehearsal. It assumes you hold PD I and have a developer org or scratch org you can build in. If you do not, stop and build one before Week 1: the testing objectives in particular are unlearnable from reading, because you must practice test isolation, mocked callouts and async testing in real Apex, and a candidate who has never mocked a callout will struggle with a whole domain of the paper.',
    totalHours: '90-120 hours over 10-12 weeks after Platform Developer I',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Advanced developer fundamentals (15%)',
        tasks: [
          'Work localization, multi-currency and how they affect code; sharing objects and Apex managed sharing',
          'Distinguish custom metadata from custom settings and know when to use each',
          'Refresh governor limits, bulkification and SOQL/DML patterns to PD I mastery level',
          'Build a diagnostic baseline: take one full practice exam and log every miss to a domain'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 3-5',
        focus: 'Process automation, logic and integration (27%)',
        tasks: [
          'Understand interactions between declarative processes and programmatic logic — the exam\u2019s single densest area',
          'Master triggers and trigger design patterns: one trigger per object, handler pattern, recursion control',
          'Build real integrations: REST and SOAP callouts, Named Credentials, Platform Events, Apex REST',
          'Practice choosing the right async mechanism — queueable, batchable, schedulable, @future — for a described scenario'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 6-8',
        focus: 'Testing, user interface and performance',
        tasks: [
          'Master advanced testing: @TestSetup, Test.loadData, mocking HTTP callouts with HttpCalloutMock, and Test.startTest/stopTest for async',
          'Cover Lightning Web Components and Aura components, plus advanced Visualforce and its performance implications',
          'Work SOQL optimization, selective queries, indexes, heap and CPU limits',
          'Write and run real test classes until the assertion patterns are reflexive'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Weeks 9-10',
        focus: 'Debug, deployment and gap closing',
        tasks: [
          'Cover source-driven development, scratch orgs, unlocked packages and CI/CD concepts',
          'Practice reading debug logs and using the query plan tool',
          'Re-drill the two largest domains with fresh scenario practice',
          'Build a one-page sheet of governor limits and common async behaviours'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 11-12',
        focus: 'Timed rehearsal',
        tasks: [
          'Three full 120-minute practice exams under real timing',
          'Re-lab every miss to the official outline rather than just reviewing the topic',
          'Final pass over trigger patterns, async mechanisms and testing assertions — the three densest point sources',
          'One quiet day before the exam'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'Working as a Salesforce developer daily', detail: 'Six to eight weeks. Your day job covers data modeling, UI and integrations; spend the recovered time on the advanced testing objectives and design-pattern scenarios, which everyday feature work rarely exercises.' },
      { label: 'Fresh off Platform Developer I', detail: 'Fourteen to sixteen weeks at 8 hrs/week. Add two weeks on advanced testing and design patterns before touching anything else — PD I does not teach mock callouts or test isolation, and the exam assumes them.' },
      { label: 'Architect-track candidate', detail: 'Treat the exam as the foundation layer and pair it with the integration and data-modeling architecture exams; the design-pattern scenarios here are the same reasoning the architect exams test at system scale.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably moves a Platform Developer II score is "write real Apex, learn the design-pattern lens, and rehearse the 120-minute clock", and the single biggest error is studying PD II like PD I — memorising limits and syntax when the exam tests architectural decisions under complex constraints. The official candidate profile says it plainly: two to four years of development experience, including at least one year designing, implementing and deploying on the Lightning Platform, and the exam reflects that by presenting scenarios and asking which pattern, mechanism or design decision applies. The second proven approach is mastering the advanced testing objectives, because they are the most mechanical points on the paper once practised — test isolation, mocked HTTP callouts, and async testing with Test.startTest and Test.stopTest follow fixed patterns that drill into reflex, and a candidate who can write a mocked-callout test blind has secured a whole domain of earnable points. Third, learn trigger frameworks and design patterns as a lens rather than a list: when a scenario asks why a solution is wrong, the answer is almost always a bulkification, recursion, or separation-of-concerns problem, and the pattern vocabulary is how you see it. Fourth, work real integrations end to end — REST and SOAP callouts, Named Credentials, Platform Events — because the integration domain and the process-automation domain together make up the largest share of the paper. Finally, rehearse timing with full 120-minute exams, because code-reading items consume far more than two minutes and the habit of flagging and returning is what protects the end of the paper, and confirm you are studying the current release guide, since Salesforce refreshes the outline each platform cycle.',
    items: [
      {
        title: 'Write real Apex; do not re-read docs',
        detail: 'The exam assumes one or more years of Lightning Platform delivery. Build in a developer org: triggers with handler patterns, mocked callouts, batch and queueable classes, LWC components. A candidate who has written and tested these reads the scenario items as familiar situations rather than abstract puzzles.'
      },
      {
        title: 'Learn the design-pattern lens',
        detail: 'The exam presents scenarios and asks which pattern or mechanism applies. Learn the enterprise patterns — Selector, Service, Domain, Unit of Work — plus Singleton, Strategy and Decorator as applied to Apex, and practise stating the problem each one solves. Most "why is this wrong" items resolve to a bulkification, recursion or separation-of-concerns defect.'
      },
      {
        title: 'Drill the advanced testing objectives',
        detail: 'Test isolation, mocking HTTP callouts, and async testing with Test.startTest/stopTest follow fixed, repeatable patterns. These are among the most mechanical points on the paper once practised, and they cluster in a testing domain that carries serious weight.'
      },
      {
        title: 'Build real integrations',
        detail: 'REST and SOAP callouts, Named Credentials, Platform Events, streaming API, Apex REST and external services. Integration plus process automation is the largest combined share of the paper, and candidates who have actually wired a callout to a mock answer those items from memory.'
      },
      {
        title: 'Rehearse the 120-minute clock',
        detail: 'Sixty scored questions over 120 minutes sounds comfortable until code-reading items eat four or five minutes each. Run full timed practice exams, flag aggressively, and learn to return to flagged items rather than watching the clock vanish on the hardest questions.'
      },
      {
        title: 'Study the current release guide',
        detail: 'The official exam guide names the release its questions align to, and Salesforce refreshes it each cycle. Confirm you are using the current guide and outline before buying anything; a guide for a retired release teaches retired content.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The Platform Developer II buying decision is defined by the fact that you are already a certified Platform Developer I, which means you already have a Trailhead account, a developer org and the fundamental practice habits — the exam costs US$200 with a US$100 retake, and most of the highest-value preparation is free. The official exam guide and Trailhead modules are the authoritative syllabus, and a scratch org or developer org is where the mandatory testing practice happens. The table below compares the main options with prices current to this review, and the honest cost ranking is: the official guide, Trailhead and your own org are the value core, practice exams are optional calibration, and paid courses are conveniences rather than necessities. Three buying rules follow from how the exam actually works. First, because the exam is scenario- and code-analysis-based, anything that puts real Apex under your fingers is worth more per dollar than anything that explains concepts — the testing objectives in particular are unlearnable without building real test classes. Second, the $200 exam fee and $100 retake fee are low by certification standards, so the money is better spent on practice exams that tell you honestly whether you are ready than on a course that only reassures you. Third, the one category to treat with suspicion is braindump-style question banks: Salesforce rotates and refreshes its item pools and the exam is scenario-heavy, so recycled questions train you for a paper that no longer exists, and the current release guide plus your own org covers the material more honestly.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Platform Developer II exam registration', values: ['US$200 (+ local taxes); retake US$100', 'Proctored at a test centre or online', 'The exam itself — the only required purchase'] },
      { label: 'Official exam guide + exam outline', values: ['Free', 'Salesforce help centre documentation', 'The authoritative syllabus, release version and passing-score facts'] },
      { label: 'Trailhead PD II trail and modules', values: ['Free', 'Interactive learning platform', 'Structured, release-current learning with a free developer org built in'] },
      { label: 'Your own developer org or scratch org', values: ['Free', 'Hands-on Apex environment', 'The mandatory place to practise testing, triggers, callouts and LWC'] },
      { label: 'Practice exams (e.g. Focus on Force, Udemy courses)', values: ['~$15-60', 'Online timed mock exams with explanations', 'Calibrating readiness against the 120-minute, 60-question format'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax; the retake fee is US$100, and practice-exam quality varies widely, so confirm what you are buying and prefer providers that cite the current release guide.'
  },

  commonMistakes: {
    summary:
      'The most damaging Platform Developer II mistakes come from treating it as an advanced PD I: memorising limits and syntax when the exam tests architectural decisions, and skipping the advanced testing objectives that the paper assumes. Candidates also routinely lose points to trigger design failures — recursion, missing handler patterns, unbulkified DML — to choosing the wrong async mechanism for a described scenario, and to studying a retired release guide when Salesforce refreshes the outline each cycle. A sixth pattern is reading about integrations and testing without ever building them: a candidate who has never mocked a callout or written a batch class will fail items that a candidate with a developer org answers from memory. The common thread across these failures is preparing at the wrong depth for a credential whose official profile demands one or more years of Lightning Platform delivery: the paper rewards design-pattern reasoning, real testing practice and release-current study, and every mistake above is a way of avoiding one of those demands. A candidate who builds the org, writes and tests real Apex, drills the async decision rules and confirms the current release guide has addressed the entire list at once — and has protected the $200 exam fee and the $100 retake fee by arriving ready the first time.',
    items: [
      {
        mistake: 'Studying it like an advanced PD I',
        fix: 'PD I tests limits and syntax recall; PD II tests design decisions under complex constraints. Practise scenario reasoning — which pattern, which async mechanism, which architecture solves this — rather than re-memorising the governor limits table, and write real Apex instead of reading about it.'
      },
      {
        mistake: 'Skipping the advanced testing objectives',
        fix: 'Test isolation, mocked HTTP callouts and async testing are heavily weighted and entirely mechanical once practised. Build real test classes with @TestSetup, HttpCalloutMock and Test.startTest/stopTest until the patterns are reflexive; skipping them gives away a whole domain of earnable points.'
      },
      {
        mistake: 'Writing triggers without design patterns',
        fix: 'One trigger per object, handler classes, recursion control and bulkified logic are the default expectation. When a scenario item shows a trigger doing logic inline or with unbulkified DML, the answer is almost always the pattern defect — learn to see it instantly.'
      },
      {
        mistake: 'Guessing the async mechanism',
        fix: 'The exam asks which mechanism fits a scenario: queueable for sequenced chains, batchable for large data sets, schedulable for time-based runs, @future for simple fire-and-forget callouts. Drill the decision rules until the choice is a reflex rather than a coin flip.'
      },
      {
        mistake: 'Studying a retired release guide',
        fix: 'The official guide names the release its questions align to and Salesforce refreshes it every cycle. Check you are using the current guide and outline before buying any third-party course; a guide for a retired release teaches retired content and retired limits.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The Platform Developer II exam is 120 minutes for 60 scored multiple-choice questions plus up to five unscored items, delivered proctored at a test centre or online, and the official exam guide sets the passing score at 70 percent. The paper is dominated by scenario-based multiple-choice items that present a business or technical situation and ask for the correct design decision — which pattern, which async mechanism, which sharing approach, which testing technique — and it also contains code-analysis items that show Apex or configuration and ask what is wrong or what it does, which are the questions that consume the most time per item. The official outline places the weight unevenly: Advanced Developer Fundamentals is 15 percent and Process Automation, Logic, and Integration is 27 percent, with the remaining weight across data modeling and management, user interface, performance, integration, testing, and debug and deployment tools. The scenario items cluster around the high-weight domains, so the design-pattern and async-mechanism decision rules are the highest-yield material on the paper. Multiple-select items appear throughout and are scored as a whole, so partial knowledge loses the item, and the up-to-five unscored questions are randomly distributed and indistinguishable from scored ones, so every question must be treated as if it counts. Pacing is the practical concern: at roughly two minutes per scored question, code-reading items can consume four or five minutes and force aggressive flag-and-return discipline, which is why timed rehearsal of the full 120-minute format is a preparation requirement rather than an option. The samples below are editor-written illustrations of the published blueprint\u2019s question styles, not live exam items.',
    types: [
      { name: 'Scenario design decisions', share: 'The dominant style', detail: 'A described business or technical situation followed by a choice of the correct pattern, mechanism or architecture. These reward the design-pattern lens and the async decision rules more than any single fact.' },
      { name: 'Code analysis items', share: 'Meaningful', detail: 'Apex or declarative configuration shown in the stem, asking what the code does, what is wrong with it, or what it will throw at runtime. These are the time-sinks that make the 120-minute clock a real constraint.' },
      { name: 'Testing and assertion items', share: 'Heavy within the testing domain', detail: 'Questions about test isolation, mocked callouts, and async testing behaviour. Highly mechanical once drilled, and an entire domain of earnable points for candidates who practise them.' },
      { name: 'Multiple-select items', share: 'Consistent minority', detail: 'Several statements or options with more than one correct, scored all-or-nothing. Common where multiple conditions are simultaneously true, such as what a given trigger pattern prevents or what a test class must cover.' },
      { name: 'Factual recall items', share: 'A minority', detail: 'Limits, behaviours and platform facts. The cheapest points on the paper, usually won by drilling the current release guide.' }
    ],
    samples: [
      {
        prompt: 'A developer must test a class that makes an HTTP callout to an external service. The test must not depend on the external service being available. Which testing approach is correct?',
        options: [
          'A. Annotate the test with @IsTest and let the callout run live',
          'B. Implement HttpCalloutMock, register it with Test.setMock, and run the callout in the test',
          'C. Disable the callout with a custom setting inside the test',
          'D. Use System.debug to skip the callout on test runs'
        ],
        answer: 'B',
        explanation: 'The supported pattern is to implement HttpCalloutMock and register it with Test.setMock so the callout is served by the mock within the test — the standard way to test callouts deterministically. A is wrong because live callouts are not permitted in tests and tests must not depend on external services. C is wrong because there is no such built-in mechanism for disabling callouts. D is wrong because skipping the callout with debug logic tests nothing about the callout path.'
      },
      {
        prompt: 'A class must process records in large batches asynchronously, where the operation exceeds the synchronous transaction limits. Which Apex mechanism fits?',
        options: [
          'A. A @future method',
          'B. An Apex batch class implementing Database.Batchable',
          'C. A synchronous trigger',
          'D. A formula field'
        ],
        answer: 'B',
        explanation: 'Database.Batchable is designed for processing large data sets asynchronously in chunks that stay within transaction limits — exactly the stated requirement. A is wrong because @future methods run in a single transaction and are for simple fire-and-forget work, not chunked large-scale processing. C is wrong because synchronous triggers run within the triggering transaction and cannot escape its limits. D is wrong because formula fields compute values; they cannot process records in batches.'
      },
      {
        prompt: 'Which statement about custom metadata types compared with custom settings is correct?',
        options: [
          'A. Custom metadata is packaged with the app and does not count against the data storage limit; custom settings store data rows',
          'B. Custom settings are deployable metadata; custom metadata is runtime data',
          'C. Both are limited to protected visibility',
          'D. Custom metadata can only be queried from Apex with inline SOQL'
        ],
        answer: 'A',
        explanation: 'Custom metadata types are deployable, packageable metadata that does not consume data storage, whereas custom settings store actual data rows that count against storage. B is wrong — it inverts the definitions: custom metadata is the deployable metadata and custom settings hold runtime data. C is wrong because visibility is configurable in both. D is wrong because custom metadata can be queried with Apex SOQL and also used declaratively.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The Platform Developer II exam is 120 minutes for 60 scored multiple-choice questions plus up to five unscored items, delivered proctored at a Pearson VUE test centre or through online proctoring, and the official exam guide sets the passing score at 70 percent and the registration fee at US$200. Your preparation before the day has three parts: confirm which delivery mode you booked and follow its rules, confirm your photo ID matches your registration name exactly, and confirm you are sitting the current release\u2019s guide, because Salesforce refreshes the exam outline each platform release and studying a retired release is the classic avoidable failure. At a test centre you arrive about 30 minutes early for check-in, lockers and a secure room scan; online, you run the system test on the exact machine you will use, in a private room with a clear desk and no second monitor, because the proctor must approve the space before the exam releases. The 120-minute clock starts when the exam loads, and the pacing rule is simple: about two minutes per scored question, flag the code-reading items you cannot resolve quickly, and use the final minutes to revisit flags — a candidate who dwells on the first code-analysis item is the one who rushes the last stretch of the paper. No reference materials are permitted during the exam, and the up-to-five unscored questions are indistinguishable from scored ones, so treat every item as if it counts. On a pass, your credential appears in your Webassessor account, and Salesforce credentials are maintained by completing the annual maintenance module rather than by re-sitting.',
    bring: [
      'A valid, government-issued photo ID matching your registration name exactly',
      'Confirmation of your exam appointment and your Salesforce/Webassessor login details',
      'For online proctoring: the exact machine you system-tested, with webcam, microphone and stable connection',
      'A quiet, private, well-lit room with a clear desk for online proctoring',
      'Water and a snack for before the exam if your delivery mode allows it outside the testing room'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of reach for online proctoring',
      'All notes, cheat sheets, code references and printed materials',
      'Second monitors, which must be unplugged and turned away for online proctoring, and any other person in the room',
      'Reference books and open browser tabs — the exam is fully closed-book',
      'Anything on the desk surface for online proctoring'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your delivery mode, run the online system test on the exact machine if applicable, and confirm your photo ID name matches your registration letter for letter.' },
      { time: '24 hours before', detail: 'Confirm the test centre address and travel time, or clean the desk and room for online proctoring and re-run the system test.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in; expect identity verification, a face photograph and a room scan before the exam releases.' },
      { time: '0-10 minutes', detail: 'Answer the first items steadily at about two minutes each; do not open with a code-reading marathon — build a rhythm first.' },
      { time: '10-100 minutes', detail: 'Work through the paper, flagging code-reading and multi-select items you are unsure of rather than dwelling on them.' },
      { time: '100-120 minutes', detail: 'Return to flagged items, apply design-pattern reasoning to any remaining doubts, and submit before the clock expires.' }
    ],
    rules: [
      '120 minutes for 60 scored questions plus up to five unscored items; the clock does not stop once it starts.',
      'The passing score is 70% per the official exam guide.',
      'The Salesforce Certified Platform Developer credential is a prerequisite for this exam.',
      'The exam is closed-book: no reference materials, online or printed, may be used.',
      'No scheduled breaks; if you leave, the clock continues to run.',
      'The up-to-five unscored questions are randomly distributed and indistinguishable from scored ones.',
      'Registration is US$200 and retake is US$100, plus applicable local taxes; the credential is maintained via the annual Salesforce maintenance module.'
    ],
    afterwards:
      'Your result is reported in your Webassessor account after the exam, and on a pass your Platform Developer II credential appears there along with a shareable Trailhead credential page. The certification does not expire in the way vendor CEU credentials do — Salesforce maintains it through an annual maintenance module, so diary that renewal for each anniversary rather than treating the pass as a one-time event. On a fail, the official guide\u2019s retake fee is US$100 and Salesforce does not impose a waiting period you must burn, so the right move is a focused gap-closing sprint: take the 60 scored questions you saw, reconstruct the domains that felt weakest, re-drill the design-pattern and async-mechanism scenarios in a real developer org, and re-sit while the exam is still fresh. Candidates who pass PD II typically report that the credential reads as a senior-developer signal on résumés and is a common prerequisite on the architect track, so the natural next step is the platform architecture credentials — which test the same design reasoning at system scale.'
  }
};

export default data;
