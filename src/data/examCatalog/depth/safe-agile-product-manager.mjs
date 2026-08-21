// Depth content for: safe-agile-product-manager
// Sources: support.scaledagile.com Exam Study Guide APM (6.0) — SAFe Agile Product
// Management (60 questions, 120 minutes, passing score 75%, web-based closed book, retake
// fee $50, first attempt included in course fee within 60 days), Scaled Agile renewal
// FAQs (certifications valid one year; practitioner-level renewal $100/year), bls.gov
// Occupational Outlook Handbook (May 2024 wage data). All facts checked 2026-08-05.
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
    headline: '$133,080 median for software developers (BLS, May 2024) — the closest occupation to the product-management-adjacent roles APM holders work in',
    summary:
      'The salary answer for the SAFe Agile Product Manager certification is $133,080, the May 2024 median for Software Developers (SOC 15-1252), the closest Bureau of Labor Statistics occupation to the product leadership work APM holders do in software organisations — and the caveats matter, because BLS has no occupation called product manager and the people earning this credential sit in a grey zone between product leadership and software delivery. The honest framing is that APM certifies product management competence inside a Scaled Agile Framework enterprise, so its salary impact flows through the software and IT occupations the holder works in, and Software Developers at $133,080 is the closest official anchor, with the lowest 10 percent below $79,850 and the highest 10 percent above $211,450. BLS projects software developer employment to grow 16 percent from 2024 to 2034, much faster than the all-occupations average, with roughly 115,000 openings a year, so the underlying field has a genuinely strong outlook. Where the credential shows its value most concretely is in enterprises running SAFe at scale: certified product managers are part of the leadership trio — with the Release Train Engineer and the system architect — that guides Agile Release Trains, and organisations in regulated industries or large-scale transformation programmes increasingly ask for SAFe credentials when filling product and program roles. The practical reading for a candidate is that APM is an upskilling and signalling credential rather than a direct wage trigger: it does not change your title by itself, but it documents that you can do product management the way a scaled-agile enterprise expects — market segmentation, design thinking, roadmaps and value-stream economics — and it positions a Product Owner or Product Manager to move into senior product leadership roles where compensation runs higher than the developer median.',
    rows: [
      { label: 'Median annual wage — software developers (SOC 15-1252)', value: '$133,080', note: 'BLS Occupational Outlook Handbook, May 2024 wage data. Closest BLS occupation to the product and software roles APM holders work in.' },
      { label: 'Lowest 10 percent', value: 'less than $79,850', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $211,450', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Median — all computer and IT occupations', value: '$105,990', note: 'BLS OOH, May 2024' },
      { label: 'Employment, 2024 / projected change (SOC 15-1252)', value: '1,693,800 jobs / +16% (2024-34)', note: 'BLS OOH; roughly 115,000 openings a year' }
    ],
    growth: '+16% projected change 2024-34 for software developers (SOC 15-1252, BLS OOH), with roughly 115,000 openings a year; SAFe product management skills track this growth inside enterprises scaling agile delivery',
    source: {
      label: 'BLS Occupational Outlook Handbook — Software Developers',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'Scaled Agile publishes no pass rate for APM — but it does publish the passing score: 45 of 60 questions (75%)',
    summary:
      'Scaled Agile does not publish pass-rate statistics for the SAFe Agile Product Manager exam, and the pass percentages you will see attached to the APM certification on blogs and training-provider pages are anecdote or marketing rather than official data. What Scaled Agile does publish — on the official Exam Study Guide for APM 6.0 — is the passing score and the format, and those are the numbers that matter for planning. The APM 6.0 exam is 60 questions in 120 minutes, delivered web-based in a single browser, closed book, and you need 45 correct answers, which Scaled Agile expresses as a 75 percent passing score. That is an unusually transparent threshold for the industry, and it has one important practical implication: because the pass mark is a simple percentage of correctly answered questions rather than a scaled score, you can budget the exam arithmetic directly — 45 of 60 means missing more than 15 questions fails the exam, so the pacing target is clear. The structural facts that accompany the published threshold matter more than any rumoured pass rate. First, the exam is only accessible after you complete the official SAFe Agile Product Management course; the first attempt is included in the course registration fee when taken within 60 days of course completion, and each retake costs $50 with a wait structure — the first retake is available immediately, the second 10 days after that, and the third 30 days after that. Second, the exam is closed book with no outside assistance, and unanswered questions are marked incorrect, so there is no advantage to leaving anything blank. Third, the certification is valid for one year and renews through the SAFe Studio platform, with practitioner-level renewal running about $100 a year.',
    source: {
      label: 'Scaled Agile — Exam Study Guide: APM (6.0) SAFe Agile Product Management',
      url: 'https://support.scaledagile.com/s/article/Exam-Study-Guide-APM-6-0-SAFe-Agile-Product-Management'
    },
    caveat:
      'No pass rate is published by Scaled Agile for the APM exam; treat every pass percentage you see outside the official exam study guide as unverified. What is published and verifiable: 60 questions, 120 minutes, passing score of 45 of 60 (75%), web-based closed book, first attempt included in the course fee within 60 days, $50 retakes, one-year validity with a practitioner-level renewal fee of about $100.'
  },

  // P0-3  Study plan
  studyPlan: {
    summary:
      'The study-plan answer for the SAFe Agile Product Manager certification is that the classroom is the syllabus: Scaled Agile requires you to attend the three-day SAFe Agile Product Management course to gain access to the exam, so the plan below runs around 50 to 70 hours of total effort, of which roughly 24 hours is the course itself and the rest is deliberate exam preparation against the published study guide. The APM 6.0 exam is 60 questions in 120 minutes, you need 45 correct (75 percent), and it draws from eight domain areas with the weights published in the official study guide: Value Delivery at 14-16 percent, Continuous Exploration of Markets and Users at 12-14 percent, Product Strategy and Vision at 12-14 percent, Innovation Creation in the Value Stream at 12-14 percent, Market Segmentation Strategies at 11-13 percent, Product Manager Role in the Lean Enterprise at 11-13 percent, Roadmap Creation to Build Solutions at 11-13 percent, and Empathy-driven Design at 7-9 percent. Note that the exam is not an exercise in memorising SAFe diagrams — the higher-weighted domains are the ones about actually doing product management work: value delivery, market exploration, product strategy and innovation. The plan below therefore uses the course materials and the practice test on the SAFe Community Platform as the core, then drills each domain by weight, with a deliberate emphasis on the scenario-style questions that ask what a product manager should do in a described situation. The practice test is unlimited and mirrors the real exam\u2019s question count, difficulty and timebox, so treat a passing practice score as a genuine readiness signal, and run at least two full timed attempts before booking.',
    totalHours: '50-70 hours including the 3-day course',
    weeks: [
      {
        label: 'Before the course',
        focus: 'Orientation and reading',
        tasks: [
          'Read the APM study guide and the candidate agreement so you know the exam format and rules before the classroom days',
          'Review the SAFe principles and the role of the Product Manager versus the Product Owner',
          'If you can, take the practice test once cold to see the format'
        ],
        hours: '5-6 hrs'
      },
      {
        label: 'Course days 1-3',
        focus: 'The required 3-day SAFe Agile Product Management course',
        tasks: [
          'Attend all three days — attendance is required to qualify for the exam',
          'Work the in-class exercises on market segmentation, personas, roadmaps and value-stream economics',
          'Download the course materials and study guide from the SAFe Community Platform for post-course revision',
          'Schedule your exam for within 60 days so the first attempt is included in the course fee'
        ],
        hours: '24 hrs (course)'
      },
      {
        label: 'Week 1 after the course',
        focus: 'Value delivery and product strategy',
        tasks: [
          'Drill the two heaviest domains: Value Delivery (14-16%) and Product Strategy and Vision (12-14%)',
          'Cover the ART backlog, PI Planning and PI execution from the product manager\u2019s seat',
          'Practise framing product vision and value propositions as the study guide frames them',
          'Take the practice test once and log which domains you miss'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 2 after the course',
        focus: 'Exploration, segmentation, roadmaps and innovation',
        tasks: [
          'Drill Continuous Exploration of Markets and Users, Market Segmentation and Empathy-driven Design',
          'Learn roadmap creation: solution intent, market-driven roadmaps and balanced features',
          'Cover Innovation Creation in the Value Stream: innovation metrics, epics funding and rapid experimentation',
          'Take the practice test a second time and chase the two weakest domains'
        ],
        hours: '6-8 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Full timed rehearsal and exam booking',
        tasks: [
          'Two full 120-minute practice attempts, scored to the 45-of-60 pass mark',
          'Re-study the domains you missed rather than re-reading the whole guide',
          'Confirm your exam is booked within the 60-day window and the platform access works',
          'One quiet day before the exam'
        ],
        hours: '5-7 hrs'
      }
    ],
    variants: [
      { label: 'Experienced Product Owner or Product Manager in a SAFe shop', detail: 'Compress to 30-40 hours. The concepts are familiar from your day job; spend the time on the vocabulary and the higher-weighted domains, and confirm you can articulate the product-manager-versus-PO boundary the exam tests.' },
      { label: 'No prior SAFe exposure', detail: 'Extend to 70-80 hours and read the SAFe principles and the Leading SAFe material before the course, so the classroom is revision rather than first exposure.' },
      { label: 'Employer funds the course', detail: 'Use the free retake window deliberately: the first attempt is included within 60 days, so book the exam in weeks 3-4 rather than the final week, leaving room for a $50 retake if you fall short.' }
    ]
  },

  // P0-4  Prep strategies
  prepStrategies: {
    summary:
      'The strategies that move a SAFe APM score are the ones that convert the course content into exam-style reasoning, because the exam asks what a product manager should do in a described situation, and the winning preparation is practising that decision rather than re-reading the slides. The single highest-yield strategy is to use the official practice test as the centre of your preparation: it mirrors the real exam\u2019s 60 questions, 120 minutes and difficulty, it is unlimited, and it is the most accurate readiness signal available — take it cold before the course, then again after each study week, and chase the domains it shows as weak. Second, learn the exam\u2019s scoring arithmetic as a pacing tool: 45 of 60 to pass means you can miss 15, which is 2.5 minutes per question on average; the practical rhythm is a steady sweep that never leaves a question unanswered, because unanswered items are marked incorrect. Third, study the domain weights as an allocation map rather than trivia: Value Delivery at 14-16 percent and the trio of Continuous Exploration, Product Strategy and Vision, and Innovation Creation at 12-14 percent each deserve roughly twice the hours of Empathy-driven Design at 7-9 percent, and candidates who spread effort evenly across all eight domains underinvest in the ones carrying the marks. Fourth, practise articulating the product manager versus product owner boundary, because the exam leans on role clarity — what the PM owns in the enterprise, what the PO owns on the team, and where the Release Train Engineer and system architect sit in the leadership trio. Fifth, rehearse the scenario items in writing: for each practice question you miss, write the reasoning the correct answer uses, because the exam rewards the framework vocabulary — market segmentation, value-stream economics, WSJF-informed trade-offs — used correctly.',
    items: [
      {
        title: 'Make the official practice test the centre of your prep',
        detail: 'It mirrors the real exam\u2019s 60 questions, 120 minutes and difficulty, and it is unlimited. Take it cold before the course, then after each study week, and spend the following days only on the domains it shows as weak.'
      },
      {
        title: 'Use the 45-of-60 pass mark as a pacing tool',
        detail: 'You can miss 15 questions. At 120 minutes that is 2.5 minutes per question on average, and unanswered items are marked incorrect, so the rhythm is a steady sweep that never leaves a blank rather than agonising over single items.'
      },
      {
        title: 'Allocate study hours by domain weight',
        detail: 'Value Delivery (14-16%) and the trio of Continuous Exploration, Product Strategy and Vision, and Innovation Creation (12-14% each) deserve roughly twice the hours of Empathy-driven Design (7-9%). Weighting to the blueprint is a free score gain.'
      },
      {
        title: 'Practise the product-manager versus product-owner boundary',
        detail: 'The exam leans on role clarity: what the PM owns in the enterprise, what the PO owns on the team, and where the RTE and system architect sit in the leadership trio. Be able to state the boundary precisely.'
      },
      {
        title: 'Rehearse scenario reasoning in writing',
        detail: 'For every practice question you miss, write out the reasoning the correct answer uses. The exam rewards the framework vocabulary — market segmentation, value-stream economics, WSJF-informed trade-offs — used correctly in a described situation.'
      }
    ]
  },

  // P0-5  Study-resource comparison
  resourceComparison: {
    summary:
      'The buying logic for the SAFe APM certification is unusual because the exam is not sold separately: Scaled Agile requires you to attend the three-day SAFe Agile Product Management course, and the course fee — typically $700 to $1,200 depending on provider and format — includes the first exam attempt when taken within 60 days of course completion, plus one year of SAFe Community Platform access. That means the real purchase decision is which training provider to book, and the comparison below treats the course as the anchor rather than an optional extra. The course itself is the only required resource and the source of the study materials, and the official practice test on the Community Platform is included and unlimited, so the base programme is the course plus its materials. The incremental spend most candidates consider is retakes at $50 each, and the renewal fee of roughly $100 per year, both of which are small relative to the course cost, so the rational strategy is to book the exam within the 60-day window to keep the first attempt free and to leave room for a paid retake rather than treating the first attempt as a practice run. On the supplementary side, some providers bundle extra coaching, flashcard sets or additional practice sessions into the course fee, and those bundles are worth comparing across providers because the marginal value is real for candidates who struggle with the scenario format. The footnote anchoring the comparison: prices below are USD list checked 2026-08 and change by provider, region and format; Scaled Agile pricing for the course varies; we take no commission from any provider and rank nothing by commercial relationship.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SAFe Agile Product Management course (required)', values: ['~$700-1,200 by provider', 'Three-day instructor-led, in-person or virtual', 'Required for exam access; includes first attempt, materials and one year of platform access', 'Book the exam within 60 days to keep the first attempt free'] },
      { label: 'Official APM practice test (SAFe Community Platform)', values: ['Included with the course', 'Unlimited online test mirroring the exam format', 'The most accurate readiness signal — take it cold, then repeatedly', 'Take it cold before the course, then after each study week'] },
      { label: 'APM study guide and course materials', values: ['Included with the course', 'Downloadable PDFs and reading list', 'The official scope map and the reading list the exam draws from'] },
      { label: 'Exam retakes', values: ['$50 each', 'Web-based, same format', 'Second and later attempts; book the first attempt within the 60-day window'] },
      { label: 'Annual renewal', values: ['~$100 per year', 'SAFe Studio renewal', 'Keeping the certification valid after its one-year term'] },
      { label: 'SAFe books (e.g. SAFe Distilled)', values: ['~$30-50', 'Print + eBook', 'Framework background beyond the course; useful for candidates new to SAFe'] }
    ],
    footnote: 'Prices checked 2026-08-05, USD list before tax and regional adjustment; Scaled Agile course pricing varies by provider, region and format. The exam is not sold separately — the course is required for exam access. We take no commission from any provider and rank nothing by commercial relationship.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The dominant mistakes around the SAFe APM certification are process errors rather than content gaps, and the first one is the most expensive: missing the 60-day window and paying a $50 retake fee for what should have been a free first attempt, because Scaled Agile includes the first exam attempt in the course fee only when the exam is taken within 60 days of course completion. The second is treating the course as sufficient and skipping the practice test, when the official practice test mirrors the real exam and is the single most accurate readiness signal available; candidates who sit the real exam cold after the classroom routinely find the scenario format harder than expected. The third is misreading the passing score as a scaled score and doing useless arithmetic, when the APM pass mark is a plain 45 of 60 questions (75 percent) — you can budget directly for 15 allowable misses. The fourth is leaving questions unanswered because of uncertainty; unanswered questions are marked incorrect, so a guess is always better than a blank. The fifth is neglecting the domain weights and studying all eight domains evenly, which underinvests in the heavy areas — Value Delivery at 14-16 percent and the trio at 12-14 percent — and overinvests in Empathy-driven Design at 7-9 percent. The sixth is failing to articulate the product manager versus product owner boundary, which the exam tests repeatedly and which candidates who do the work blur in their answers. The seventh is letting the certification lapse after the one-year term because the renewal is a paid process; renewing in the SAFe Studio platform costs roughly $100 a year, and a lapsed credential cannot be listed. Finally, some candidates buy expensive third-party question banks when the official practice test, which is included, is the better-calibrated resource.',
    items: [
      {
        mistake: 'Missing the 60-day free-attempt window',
        fix: 'The first exam attempt is included in the course fee only if you sit within 60 days of course completion. Book the exam in weeks 3-4 after the course, not in the final week, and treat a $50 retake as a backstop, not a plan.'
      },
      {
        mistake: 'Treating the course as sufficient preparation',
        fix: 'Use the official practice test, which mirrors the real exam\u2019s 60 questions, 120 minutes and difficulty. Sit it cold, then repeatedly, and chase the domains it shows as weak — the scenario format is the part candidates underestimate.'
      },
      {
        mistake: 'Treating the pass mark as a scaled score',
        fix: 'The APM pass mark is 45 of 60 questions, a plain 75 percent. You can miss 15 questions, so budget the exam arithmetic directly instead of guessing at a scaled threshold.'
      },
      {
        mistake: 'Leaving questions unanswered',
        fix: 'Unanswered questions are marked incorrect on the APM exam. Never leave a blank; a guess carries no penalty and always beats an empty response.'
      },
      {
        mistake: 'Studying all eight domains evenly',
        fix: 'Value Delivery (14-16%) and the trio of Continuous Exploration, Product Strategy and Vision, and Innovation Creation (12-14% each) deserve roughly twice the hours of Empathy-driven Design (7-9%). Weight your study to the published domain weights.'
      },
      {
        mistake: 'Blurring product manager and product owner',
        fix: 'The exam tests role clarity repeatedly. Practise stating what the PM owns in the enterprise versus what the PO owns on the team, and where the RTE and system architect sit in the leadership trio.'
      },
      {
        mistake: 'Letting the certification lapse after one year',
        fix: 'SAFe certifications are valid for one year and renew through the SAFe Studio platform for roughly $100. Set a reminder before expiry; a lapsed credential cannot be listed and renewal is far cheaper than re-taking the course.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The SAFe APM 6.0 exam is 60 questions in 120 minutes, delivered web-based in a single browser, closed book with no outside assistance, and you need 45 correct answers to pass — a plain 75 percent threshold rather than a scaled score, which means the pacing arithmetic is direct: 2.5 minutes per question on average, with unanswered questions marked incorrect. The question formats are multiple choice with a single correct answer and multiple-select items that specify how many answers are required, with the newer SAFe exams having reduced the number of answer options per question — single-select items typically offer three options and multiple-select items four or five. The content draws from the eight published domain areas, with the higher-weighted domains — Value Delivery at 14-16 percent, and Continuous Exploration, Product Strategy and Vision, and Innovation Creation at 12-14 percent each — contributing the most questions. The distinguishing feature of the paper is that most items are scenario-based: a described product-management situation — a market insight, a segment analysis, a roadmap decision, a value-stream trade-off — followed by what the product manager should do or decide next, and the answer usually hinges on applying the SAFe vocabulary and role definitions rather than on general product-management intuition. The practice test on the SAFe Community Platform mirrors the real exam\u2019s question count, difficulty and timebox, and because it is unlimited, a passing practice score is a strong readiness signal. The samples below are editor-written illustrations of the published format and domain areas, not live exam items, and candidates should remember that the exam rewards using the framework\u2019s terminology correctly in context.',
    types: [
      { name: 'Multiple choice (single answer)', share: 'The majority of items', detail: 'Typically three options per question under the current SAFe format. Most are scenario-based, asking what a product manager should do or decide in a described situation.' },
      { name: 'Multiple select', share: 'A significant minority', detail: 'Items that specify how many answers are required — commonly two or three. All required answers must be selected; there is no partial credit.' },
      { name: 'Scenario-based decision items', share: 'The dominant pattern across domains', detail: 'A market insight, segment analysis, roadmap decision or value-stream trade-off followed by the best next step. The correct answer applies the SAFe vocabulary and role definitions precisely.' },
      { name: 'Vocabulary and role-clarity items', share: 'Spread across all domains', detail: 'Terms and role boundaries — product manager versus product owner, WSJF, value-stream economics, solution intent. These reward precise use of the framework terminology.' }
    ],
    samples: [
      {
        prompt: 'A product manager has discovered through continuous exploration that a new customer segment has a strong unmet need, but serving it would require a significant change to the current product architecture. How should the product manager approach this?',
        options: [
          'A. Fund the exploration as an experiment through the portfolio, and assess the business case before committing the architecture change',
          'B. Immediately commit the architecture change because the segment is large',
          'C. Ignore the segment because the current product already serves an existing market',
          'D. Hand the discovery to the product owner and stop being involved'
        ],
        answer: 'A',
        explanation: 'The SAFe response to an unvalidated market opportunity is funded experimentation: explore the hypothesis through the portfolio process, develop a business case, and only commit architectural investment once the value is demonstrated. A applies that — the innovation metric, the epics-funding mechanism and the hypothesis-first discipline the blueprint teaches. B commits the largest and riskiest resource to an unvalidated insight, inverting the exploration principle. C rejects a source of future value without evidence. D abdicates the product manager role — continuous exploration and the decision to invest sit with the PM, not the PO. When the stem describes an unvalidated opportunity with architectural impact, the answer is the one that funds exploration before commitment.'
      },
      {
        prompt: 'An enterprise is deciding which features to prioritise for an upcoming program increment. The product manager must weigh customer value, time criticality, risk reduction and opportunity enablement. Which framework should guide the prioritisation?',
        options: [
          'A. WSJF — Weighted Shortest Job First',
          'B. The first-come, first-served order of feature requests',
          'C. The size of the development team',
          'D. The number of features each stakeholder has requested'
        ],
        answer: 'A',
        explanation: 'WSJF — Weighted Shortest Job First — is the SAFe prioritisation model and it scores work by dividing the cost of delay (composed of user-business value, time criticality, and risk reduction and opportunity enablement) by job size, which is exactly the four factors the stem lists. B ignores value and criticality in favour of arrival order. C and D substitute organisational convenience for economic prioritisation, which the SAFe principle of applying economic weighting explicitly rejects. When the stem lists the WSJF components, the answer is the framework that combines them, and the exam expects you to name it and to know that job size is the denominator.'
      },
      {
        prompt: 'A product manager is building a roadmap for a solution that must support both an existing market with mature needs and a new market with uncertain requirements. How should the roadmap balance the two?',
        options: [
          'A. A single fixed roadmap that commits the same features for both markets',
          'B. A market-driven roadmap with the existing market\u2019s commitments fixed and the new market\u2019s outcomes validated through shorter-horizon milestones',
          'C. Separate the two markets completely and ignore the shared solution',
          'D. Commit only to the new market because it offers the higher growth potential'
        ],
        answer: 'B',
        explanation: 'A market-driven roadmap differentiates by horizon: known, committed outcomes for the mature market sit at the near horizon, while uncertain new-market outcomes are held as shorter-horizon, validation-oriented milestones rather than fixed commitments. That is the roadmap pattern the blueprint teaches — committing where certainty exists and experimenting where it does not. A overcommits the uncertain market and under-serves the difference between the two. C fragments the solution and loses the shared investment. D abandons the revenue base of the existing market on an unvalidated bet. The stem pairs an existing market with uncertain new requirements, and the answer is the roadmap structure that fixes what is known and validates what is not.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The SAFe APM exam is taken online, not at a test centre: Scaled Agile delivers it as a timed, closed-book, single-browser exam on the SAFe Community Platform, and the direct exam-day answer is 60 questions in 120 minutes with a passing score of 45 correct answers, which the platform calculates automatically the moment you submit. The environment is strict — the exam must run in a single browser with no outside assistance, no other tabs, no books, and unanswered questions are marked incorrect — so the practical preparation is technical as much as content-based: use a machine with a stable connection and a browser that behaves, close everything else before launching, and confirm your platform access is live in the days before rather than discovering a login problem on the day. Check the candidate agreement before you start, because it governs what is permitted and what invalidates an attempt. The pacing arithmetic is the same one used throughout this page: 60 questions in 120 minutes is 2.5 minutes per question on average, and because you can miss 15 and still pass, the winning rhythm is a steady sweep that never leaves a question unanswered — flag nothing for later on a paper with no revisit guarantee, and instead answer every item as you go, using the two-and-a-half-minute budget to decide. Plan to sit the exam within the 60-day window from course completion so the attempt is included in your course fee, and if you do not pass, the first retake is available immediately, the second 10 days later, and the third 30 days after that, each at $50. After the exam, your score and pass or fail are presented on the platform, and a pass makes you a Certified SAFe Agile Product Manager with a one-year certification term.',
    bring: [
      'A stable internet connection and a desktop or laptop that has successfully accessed the SAFe Community Platform before',
      'A single browser session with no other tabs, extensions or tools running',
      'Your login credentials for the SAFe Community Platform, confirmed working in advance',
      'The course materials and study guide open in a separate app only if the exam rules for your attempt permit reference materials — check the candidate agreement, because the standard rules are closed book',
      'A quiet room with no one else present, since the exam is invigilated remotely'
    ],
    leave: [
      'Other browser tabs, instant messaging, email and any software that could flag as outside assistance',
      'Books and notes if your attempt is closed book, which is the standard rule',
      'A second screen with a second browser session',
      'Any attempt to copy or photograph exam content — the candidate agreement prohibits it and invalidates the attempt',
      'Relying on the 60-day window on the final day; technical issues on exam day do not extend it'
    ],
    timeline: [
      { time: 'During the course', detail: 'Confirm your exam eligibility and the 60-day free-attempt window; note the exact date the window closes.' },
      { time: 'A few days before', detail: 'Log into the SAFe Community Platform, open the practice test, and confirm your browser and connection handle the exam interface. This rehearsal prevents day-of login failures.' },
      { time: '30 minutes before', detail: 'Close all other applications and tabs, settle in a quiet room, and have the candidate agreement reviewed so you know the closed-book rules.' },
      { time: '0-60 minutes', detail: 'Work the first half of the exam at the steady pace of roughly 2.5 minutes per question, answering every item as you go.' },
      { time: '60-120 minutes', detail: 'Continue the sweep; you can miss 15 of 60, so keep moving rather than over-thinking single items, and never leave a blank.' },
      { time: 'On submission', detail: 'The platform calculates your score immediately and shows pass or fail on screen.' }
    ],
    rules: [
      '60 questions in 120 minutes; passing score is 45 of 60 (75 percent).',
      'Web-based, single-browser, closed book with no outside assistance; the timer runs continuously once the exam starts.',
      'Unanswered questions are marked incorrect — never leave a blank.',
      'The first attempt is included in the course fee only if taken within 60 days of course completion; retakes cost $50 each.',
      'Retake waits: the first retake is available immediately, the second 10 days after that, and the third 30 days after that.',
      'The exam is delivered on the SAFe Community Platform; results are shown on the platform immediately on submission.',
      'A pass earns the Certified SAFe Agile Product Manager credential, valid for one year and renewable for roughly $100 a year.'
    ],
    afterwards:
      'Your score and pass or fail are presented on the SAFe Community Platform immediately when you submit, and if you pass you can download the certificate and claim the digital badge to promote on LinkedIn and your CV. The certification is valid for one year, and renewal runs through the SAFe Studio platform for roughly $100 a year with no retake required — set a reminder before expiry, because a lapsed credential cannot be listed, and renewal is far cheaper than re-attending the course. If you fail, do not panic and do not waste the retake structure: the first retake is available immediately, so you could theoretically re-sit the same day, but the $50 fee and the pattern of results make a deliberate week of practice-test drilling on the domains you missed the better use of the attempt. The official practice test is unlimited, so use it to reproduce the exam conditions — 60 questions in 120 minutes, scored to 45 — and only re-sit when you are consistently passing it, because a failed second attempt followed by 10- and 30-day waits stretches the process into months and the $50 fees into a habit.'
  }
};

export default data;
