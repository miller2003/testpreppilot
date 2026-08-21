const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers FINRA qualification exams. Exam structure, item counts and passing standards come from the FINRA content-outline documents and qualification-exam pages, which are revised when rules change; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When FINRA does not publish a figure, such as a cohort pass rate, we say so plainly and do not pass off third-party estimates as official data.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Series 99 exam structure and passing standard against the current FINRA Operations Professional exam page and content outline, and wage context against BLS OOH Securities, Commodities, and Financial Services Sales Agents (SOC 41-3031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$78,140 median for securities, commodities and financial services sales agents (BLS, May 2024)',
    summary:
      'The direct answer is that the Series 99 is an operations licence and has no BLS occupation named after it, so the salary story is benchmarked to the closest official series, Securities, Commodities, and Financial Services Sales Agents, SOC 41-3031, which had a May 2024 median wage of $78,140. That figure is a proxy rather than a precise predictor, because the Series 99 qualifies operations professionals — the people who handle customer onboarding, trade confirmation, settlement, fails control, funds disbursement, reconciliations and financial control at a broker-dealer — and those roles sit in the middle and back office, where pay is structured differently from the commission-driven front office. The BLS distribution for SOC 41-3031 is very wide, from below $41,090 at the lowest 10 percent to above $213,050 at the highest, which says more about producing sales roles than about operations functions. The closer day-to-day comparison for operations work is the Financial and Investment Analysts series (SOC 13-2051), which carried a May 2024 median of $101,350 and better reflects the analyst-grade roles operations professionals grow into, including reconciliation analysis, financial control and regulatory reporting. BLS counted 514,500 jobs in SOC 41-3031 in 2024 and projects about 3 percent growth from 2024 to 2034, with about 38,100 openings a year, almost all from replacement need. The honest framing is that the Series 99 is a gate that lets you sit in covered operations functions at a FINRA member firm — it determines what roles are open to you, and the wage you benchmark is the role, not the certificate.',
    rows: [
      { label: 'Median annual wage, securities & financial services sales agents', value: '$78,140', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Below $41,090', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $213,050', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Median, financial and investment analysts (closer role comparison)', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' }
    ],
    growth: 'BLS projects 3 percent growth for SOC 41-3031 from 2024 to 2034, with about 38,100 openings per year, almost all from replacement need.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Securities, Commodities, and Financial Services Sales Agents',
      url: 'https://www.bls.gov/ooh/sales/securities-commodities-and-financial-services-sales-agents.htm'
    }
  },
  passRate: {
    headline: 'FINRA publishes no pass rate — it does publish the passing standard: 68 percent (34 of 50 scored items)',
    summary:
      'FINRA does not publish cohort pass rates for the Series 99, and third-party pass-rate surveys are not regulator data, so we do not treat them as authoritative. What FINRA does publish, in the Operations Professional content outline, is the complete scoring standard: the current exam presents 50 scored multiple-choice items plus 10 additional unscored pretest items that are randomly distributed and indistinguishable from scored ones, and a candidate must answer at least 34 of the 50 scored items correctly — 68 percent — to pass. The exam window is 90 minutes, delivered by computer at Prometric testing centres. Two structural points matter more than any pass-rate statistic. First, the Series 99 is a representative-level exam with a corequisite: candidates must also pass the Securities Industry Essentials (SIE) exam, and they must be associated with and sponsored by a FINRA member firm, which files the Form U4 for the Operations Professional (OS) registration. Second, the content is operational rather than sales-oriented: the outline is built around knowledge of the securities industry and broker-dealer operations, including customer onboarding, funds and securities movement, account transfers, settlement and fails control, reconciliations, financial control and regulatory reporting, plus professional conduct and ethical considerations. The practical implication is that the pass line is 68 percent with no published margin of error data, so a disciplined candidate should be scoring above 80 percent on practice exams before sitting, and should expect the exam to reward process accuracy and regulatory detail over breadth.',
    source: {
      label: 'FINRA - Series 99 Operations Professional Exam',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series99'
    },
    caveat:
      'FINRA publishes the passing standard (68 percent, 34 of 50 scored items) but no cohort pass rate; any percentage circulating online is a third-party estimate, not regulator data.'
  },
  studyPlan: {
    summary:
      'The Series 99 is a process exam, not a product exam, and the study plan should follow the current content outline: two job functions — Knowledge Associated with the Securities Industry and Broker-dealer Operations (35 scored items) and Professional Conduct and Ethical Considerations (15 scored items) — presented as 50 scored items plus 10 unscored pretest items in a 90-minute window. Because 35 of 50 items sit in the operations function, the plan must be heavy on the operational lifecycle: customer onboarding and account data maintenance, receipt and delivery of securities and funds, account transfers, bank and custody account management and reconciliation, settlement and fail control, segregation and possession and control, trade confirmation and account statements, margin, stock loan and securities lending, prime brokerage, pricing-model approval, financial control and regulatory reporting, and the systems and security requirements tied to covered functions. A realistic plan runs 50 to 80 hours across four to six weeks, dominated by the operations lifecycle and the regulatory red-flag content woven through all three content areas in the outline — the ability to spot an activity that harms the firm, its customers or the marketplace. Weeks one and two should build the operational foundation in lifecycle order, from onboarding through trade lifecycle, clearing, settlement and fails. Weeks three and four should cover margin, segregation, financial control, regulatory reporting and the professional-conduct and ethics content. Weeks five and six should be question-bank drill with at least two full 90-minute timed mocks, because the exam rewards the precision that only repeated exposure to process scenarios builds.',
    totalHours: '50-80 hours over 4-6 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Operational lifecycle foundations (F1)',
        tasks: [
          'Customer onboarding: account data and document maintenance, know-your-customer records, and the red flags that trigger review',
          'Trade lifecycle and settlement: confirmation, settlement and fails control, buy-ins, and the clearing and depository mechanics',
          'Movement of funds and securities: receipts and deliveries, account transfers, and bank, custody and depository account management',
          'Reconciliations and the control framework around them, including segregation and possession and control'
        ],
        hours: '20 hrs'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Financial control, reporting and professional conduct (F1, F2)',
        tasks: [
          'Margin and stock loan/securities lending basics as operations functions',
          'Financial control: general ledger and treasury, and the process of preparing and filing financial regulatory reports',
          'Pricing-model approval, systems business requirements, security requirements and information entitlement policies',
          'Professional conduct and ethical considerations: supervision, duties, conflicts and data integrity, plus the red-flag framework'
        ],
        hours: '20 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Question-bank drill and timed mocks',
        tasks: [
          'Work 400+ practice questions across both job functions',
          'Take at least two full 90-minute timed mocks, scored and reviewed item by item',
          'Build an error log and re-read the outline section behind every miss',
          'Final pass over fails control, segregation, margin and the regulatory red flags — the highest-yield operational content'
        ],
        hours: '20 hrs'
      }
    ],
    variants: [
      { label: 'SIE already passed and operations background', detail: 'Compress weeks 1-2 to a review week and spend the recovered time on regulatory reporting, margin and the ethics content, then move to timed mocks.' },
      { label: 'New to broker-dealer operations', detail: 'Stretch to eight weeks at 8-10 hrs/week; spend the extra time on the trade lifecycle and clearing and settlement mechanics, which the exam assumes you know cold.' },
      { label: 'Holding an eligible registration', detail: 'If you hold an eligible registration such as Series 7, Series 6 or Series 24, you may qualify for the Operations Professional registration without sitting the Series 99 — confirm with your compliance department before studying.' }
    ]
  },
  prepStrategies: {
    summary:
      'The single highest-yield move for the Series 99 is to study the operations lifecycle in the order work actually flows — onboarding, trade, clearing, settlement, fails, reconciliation, financial control — because the exam presents process scenarios and rewards knowing what happens next and who is responsible. Second, treat the regulatory red-flag content as a theme across all sections rather than a separate topic: the outline says the ability to identify and address activities that harm the firm, customers or the marketplace is assessed throughout, so practise spotting the problem in every scenario. Third, learn the clearing and depository landscape precisely — the DTCC group, the roles of the clearing corporation and the depository, and the settlement cycle — because these items reward exact knowledge of who does what. Fourth, do not neglect the professional-conduct content at 15 of 50 items; it is the most memorisable third of the paper and a reliable place to bank points. Fifth, run at least two full 90-minute timed mocks, because at roughly 108 seconds per item the clock is comfortable only if you have rehearsed it. Finally, confirm the registration mechanics early: you need the SIE passed and a sponsoring firm that files the Form U4, so time your study to the onboarding window and confirm who pays the fee.',
    items: [
      {
        title: 'Study the lifecycle in working order',
        detail: 'Onboarding to trade to clearing to settlement to fails to reconciliation to financial control. The exam rewards knowing the sequence and the responsible function at each step.'
      },
      {
        title: 'Practise spotting regulatory red flags',
        detail: 'The ability to identify activities that harm the firm, customers or the marketplace is assessed across all sections. Train yourself to ask "what is wrong here" in every scenario.'
      },
      {
        title: 'Learn the clearing and depository landscape precisely',
        detail: 'Know the DTCC group and the distinct roles of clearing and depository services, and the settlement cycle. These items reward exact knowledge of who does what.'
      },
      {
        title: 'Bank the professional-conduct points',
        detail: '15 of 50 items sit in professional conduct and ethics — the most memorisable third of the paper. Study supervision, duties, conflicts, data integrity and the red-flag framework.'
      },
      {
        title: 'Run two full timed mocks',
        detail: 'A 90-minute paper is comfortable at roughly 108 seconds per item, but only if you have rehearsed it. Score each mock and log every miss.'
      },
      {
        title: 'Confirm SIE and sponsorship logistics early',
        detail: 'The SIE is a corequisite and a firm must file the Form U4 for the OS registration. Time study to the onboarding window and confirm who pays the fee.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'Series 99 preparation splits into the same four buckets as the other FINRA exams: the free FINRA content outline, structured courses, question banks, and full-featured packages. The FINRA Series 99 content outline is free and is the authoritative statement of the two job functions and the covered operations activities — it is the syllabus, and any prep product should be checked against it. Structured courses from Kaplan, STC and Pass Perfect dominate the market because the operations content benefits from a curated reading order, and their packages bundle video, a book, a question bank and simulated exams; the flagship packages are the most expensive option but the only one that fully mimics a timed sitting. Question-bank-only products work well for candidates who already work in broker-dealer operations and simply need volume and exposure to exam phrasing. Cheap or free resources — quiz sites, YouTube playlists, vendor trial exams — are useful for orientation but not sufficient alone, because the process-scenario phrasing is specific. A defensible budget is $150 to $500 depending on whether you buy a package or assemble a book-plus-bank combo, and many firms cover Series 99 study costs since the licence is a firm requirement. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA Series 99 content outline', values: ['Free', 'PDF outline with item counts and sample questions', 'The authoritative syllabus and covered-activities list'] },
      { label: 'Kaplan Series 99', values: ['$250-$450', 'Book + video + QBank + simulated exams', 'Structured learners who want the full suite'] },
      { label: 'STC Series 99', values: ['$300-$450', 'Textbook + online lectures + exam simulator', 'Firm-sponsored candidates on a deadline'] },
      { label: 'Question-bank only', values: ['$100-$200', 'Online practice questions', 'Candidates who already work in operations and need volume'] },
      { label: 'Free quiz sites and vendor trials', values: ['$0', 'Web quizzes and demo exams', 'Orientation and vocabulary before a course'] }
    ],
    footnote:
      'List prices as of mid-2026, subject to change; FINRA exam fees and registration are handled separately through your sponsoring firm. No commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary:
      'The most common failure pattern on the Series 99 is studying product and sales knowledge instead of the operations lifecycle: candidates can describe a bond but cannot say what happens between trade execution and settlement, and the exam is built around the second kind of item. The fix is to study process in working order. The second mistake is ignoring the red-flag content because it is not a named section of the outline; in practice it is woven through every section, and candidates who cannot spot the problem in a scenario lose points across the paper. Third, candidates routinely conflate clearing with settlement and mix up the roles of the clearing corporation and the depository — these distinctions are tested directly. Fourth, many candidates never run a timed sitting, and a 90-minute paper punishes that less than the longer principal exams but still rewards rehearsal. Fifth, candidates treat the 10 unscored pretest items as skippable; they are indistinguishable by design, so answer everything. Finally, some candidates study for the exam before confirming whether they even need it — holding an eligible registration can exempt you from the Series 99 entirely.',
    items: [
      { mistake: 'Studying product knowledge instead of operations process', fix: 'Learn the lifecycle in working order — onboarding, trade, clearing, settlement, fails, reconciliation, financial control — and drill what happens at each step.' },
      { mistake: 'Skipping the red-flag content', fix: 'The ability to identify activity that harms the firm, customers or the marketplace is assessed throughout; practise spotting the problem in every scenario.' },
      { mistake: 'Conflating clearing, settlement and depository roles', fix: 'Learn the distinct functions precisely — clearing and settlement versus custody and depository — because these items are tested directly.' },
      { mistake: 'Never running a timed sitting', fix: 'Take at least two full 90-minute mocks before exam day and review every flagged item.' },
      { mistake: 'Trying to skip the unscored pretest items', fix: 'Treat all 60 presented items as scored; pretests are indistinguishable by design.' },
      { mistake: 'Studying before checking for an exemption', fix: 'Holding an eligible registration (for example Series 7, 6 or 24) can qualify you for the OS registration without the exam — confirm with compliance first.' }
    ]
  },
  questionTypes: {
    summary:
      'The Series 99 is entirely multiple-choice and computer-delivered, with 50 scored items plus 10 unscored pretest items presented in a 90-minute window. The current content outline organises the paper into two job functions — Knowledge Associated with the Securities Industry and Broker-dealer Operations (35 items) and Professional Conduct and Ethical Considerations (15 items) — but the underlying content areas also span basic industry knowledge, broker-dealer operations knowledge, and professional conduct and ethics. Most items are single-answer, and a large share are scenario-based process questions: you are given a workflow, a reconciliation, a settlement event or a compliance situation and asked what the correct next step is, which function is responsible, or what rule applies. A meaningful minority test precise operational detail such as fails control, segregation, margin, regulatory reporting and data integrity, and some items are structured as red-flag identification. The samples below are editor-written illustrations of the published outline, not live exam items; they show the process-first phrasing and the precision required on operational items.',
    types: [
      { name: 'Process and workflow scenarios', share: 'The bulk of the paper', detail: 'A lifecycle event or workflow is described; the item asks what happens next, who is responsible, or what must be reconciled.' },
      { name: 'Operational detail', share: 'A substantial minority', detail: 'Fails control, buy-ins, segregation, possession and control, margin, account transfers, regulatory reporting and recordkeeping.' },
      { name: 'Professional conduct and ethics', share: '15 of 50 items', detail: 'Supervision, duties and conflicts, data integrity, and the regulatory red flags assessed across the paper.' },
      { name: 'Red-flag identification', share: 'Assessed throughout', detail: 'Spotting activity that harms the firm, customers or the marketplace, and choosing the appropriate response.' }
    ],
    samples: [
      {
        prompt: 'A customer\u2019s account transfer request has been submitted, and the delivering firm has failed to deliver the securities by the required date. Which operations function is responsible for addressing this?',
        options: [
          'A. Sales and trading',
          'B. Fails control',
          'C. Internal audit',
          'D. Customer service'
        ],
        answer: 'B',
        explanation:
          'Fails control is the operations function that tracks failed deliveries and takes corrective steps such as buy-ins when securities are not delivered by the settlement or transfer date. A is wrong because the sales and trading functions do not own settlement fails. C is wrong because internal audit evaluates controls rather than executing the fail. D is wrong because the issue is a settlement matter, not a service issue.'
      },
      {
        prompt: 'A firm keeps customer cash in its own operating account rather than in a segregated account. Which requirement is this most directly a violation of?',
        options: [
          'A. Segregation of customer funds',
          'B. Trade confirmation requirements',
          'C. Record retention rules',
          'D. Margin requirements'
        ],
        answer: 'A',
        explanation:
          'Customer funds must be segregated from the firm\u2019s own funds and held in accounts meeting regulatory requirements. B is wrong because the issue is about custody of funds, not trade confirmations. C is wrong because the problem is the location of the funds, not the records. D is wrong because margin requirements govern extensions of credit, not the custody of customer cash.'
      },
      {
        prompt: 'During a reconciliation, an operations professional notices that a large number of trades have not been matched between the firm and the clearing corporation. What is the most appropriate first step?',
        options: [
          'A. Ignore the unmatched trades until the next reconciliation cycle',
          'B. Investigate the unmatched items, resolve the breaks, and escalate any that cannot be resolved',
          'C. Reverse all of the trades',
          'D. Notify the regulator before doing any internal review'
        ],
        answer: 'B',
        explanation:
          'Trade breaks must be investigated and resolved as part of the control framework, and unresolved items are escalated appropriately. A is wrong because leaving breaks unresolved until a later cycle is exactly what controls are designed to prevent. C is wrong because reversing trades without investigation is not a correct response. D is wrong because internal review and resolution come first; escalation to a regulator is for items that cannot be resolved or that present a regulatory concern.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published Series 99 content outline, not live exam items.'
  },
  examDay: {
    summary:
      'On exam day you check in at a Prometric testing centre with a valid government-issued photo ID, and the computer presents 60 multiple-choice items — 50 scored and 10 unscored pretest — against a 90-minute clock. There is no scheduled break; the session includes a short tutorial before the exam clock starts, and the 10 unscored items are indistinguishable from scored ones, so answer every item. You receive a preliminary pass/fail result immediately on screen, and the official result is filed to your firm\u2019s registration record through the FINRA system. If you fail, FINRA\u2019s retake schedule applies — typically a 30-day wait after the first or second attempt and longer waits after repeated failures — and your firm controls scheduling, so coordinate retakes through compliance. Bring nothing but your ID and confirmation; phones, notes and smart devices go in the locker. Arrive 30 minutes early; late arrival forfeits the appointment and fee. At roughly 108 seconds per item the clock is comfortable, so the pacing priority is accuracy on the process items rather than speed, and the erasable noteboard the centre provides is useful for mapping lifecycle steps on the longer scenarios. The afterwards matters as much as the pass: your Operations Professional registration is effective only while you are registered with a sponsoring firm, and you remain subject to firm-element continuing education, so plan to keep the licence current.',
    bring: [
      'Valid government-issued photo ID matching your registration name',
      'Appointment confirmation and any paperwork your firm requires for the session',
      'A clear mental map of the lifecycle and the red-flag framework — no external notes are allowed'
    ],
    leave: [
      'Phone, smartwatch and all electronics — stored in the provided locker',
      'Notes, books and study materials',
      'Personal calculators; the centre provides an erasable noteboard',
      'Wallet contents beyond your ID where centre policy requires'
    ],
    timeline: [
      { time: '45 minutes before', detail: 'Arrive at the centre; check in and store belongings in the provided locker.' },
      { time: 'At the seat', detail: 'Complete the tutorial, then the 90-minute clock starts with item one.' },
      { time: 'Pacing check', detail: 'Roughly 25 items should be done by the 45-minute mark; flag anything uncertain and keep moving.' },
      { time: 'Final 20 minutes', detail: 'Return to flagged items, recheck the process scenarios, then submit rather than letting the clock expire.' },
      { time: 'After submit', detail: 'Preliminary pass/fail appears on screen; the official result posts through your firm\u2019s registration record.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'No breaks — the clock runs continuously',
      'Treat all 60 items as scored; the 10 pretest items are indistinguishable',
      'Preliminary results are on screen; official results post through your firm',
      'Retake waits apply after failed attempts — coordinate scheduling with your compliance department'
    ],
    afterwards:
      'On a pass, your firm\u2019s registration record updates to reflect the Operations Professional category, and the licence is meaningful only while you remain registered and current on continuing education. On a fail, wait out the required period, use the on-screen domain feedback to target the weakest operational areas, and re-sit. Coordinate both the scheduling and the fee through your compliance department.'
  }
};

export default data;
