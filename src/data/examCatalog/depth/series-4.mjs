const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Securities & financial licensing desk',
    bio: 'This desk covers FINRA qualification exams. Exam structure, item counts and passing scores come from the FINRA content-outline documents and qualification-exam pages, which are revised when rules change; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When FINRA does not publish a figure, such as a cohort pass rate, we say so plainly and do not pass off third-party estimates as official data.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Series 4 content outline, corequisite structure, and passing standard against the FINRA Registered Options Principal exam page and the published Series 4 content outline; wage context against BLS OOH Securities, Commodities, and Financial Services Sales Agents (SOC 41-3031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$78,140 median for securities, commodities and financial services sales agents (BLS, May 2024)',
    summary:
      'The direct answer is that there is no BLS occupation called "registered options principal", so the Series 4 salary story is benchmarked to the closest official occupation, Securities, Commodities, and Financial Services Sales Agents, SOC 41-3031, which had a May 2024 median wage of $78,140. That figure is best read as a floor for the licensed side of the industry rather than a precise predictor, because the Series 4 is a supervisory qualification layered on top of the Series 7: a candidate who holds it is a principal supervising options sales, trading and communications at a FINRA member firm, and pay at that level is driven by the book of business and firm compensation structure rather than by the licence itself. The occupation distribution is very wide — BLS puts the lowest 10 percent below $41,090 and the highest 10 percent above $213,050 — which reflects commission-heavy compensation more than a narrow skills band. BLS counted 514,500 jobs in SOC 41-3031 in 2024 and projects about 3 percent growth from 2024 to 2034, roughly as fast as the average for all occupations, with about 38,100 openings a year, almost all from replacement need. The adjacent Financial and Investment Analysts series (SOC 13-2051) is worth tracking for Series 4 holders who move from supervising sales desks into research or risk roles; it carried a May 2024 median of $101,350. The honest framing is that the Series 4 is a gate that lets you supervise, not a career in itself — the wage you are benchmarking is the role, and the licence determines which roles are open to you.',
    rows: [
      { label: 'Median annual wage, securities & financial services sales agents', value: '$78,140', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Below $41,090', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $213,050', note: 'BLS OOH, SOC 41-3031, May 2024' },
      { label: 'Median, financial and investment analysts (adjacent role)', value: '$101,350', note: 'BLS OOH, SOC 13-2051, May 2024' },
      { label: 'Employment, 2024', value: '514,500 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: 'BLS projects 3 percent growth for SOC 41-3031 from 2024 to 2034, with about 38,100 openings per year, almost all from replacement need.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Securities, Commodities, and Financial Services Sales Agents',
      url: 'https://www.bls.gov/ooh/sales/securities-commodities-and-financial-services-sales-agents.htm'
    }
  },
  passRate: {
    headline: 'FINRA publishes no pass rate — it does publish the passing standard: 72 percent (90 of 125 scored items)',
    summary:
      'FINRA does not publish cohort pass rates for the Series 4, so any percentage circulating online is a third-party estimate rather than regulator data, and we do not treat those as authoritative. What FINRA does publish, in the Series 4 content outline, is the complete scoring standard: the exam presents 125 scored multiple-choice items plus 10 additional unscored pretest items that are randomly distributed and indistinguishable from scored ones, and a candidate must answer at least 90 of the 125 scored items correctly — 72 percent — to pass. The exam window is 3 hours and 25 minutes, delivered by computer at Prometric testing centres. Three structural points matter more than any pass-rate statistic. First, the Series 4 is a principal-level exam with corequisites: before you can register as a Registered Options Principal you must also hold the Series 7 General Securities Representative registration and pass the Securities Industry Essentials (SIE) exam, and the firm must file a Form U4 to register you. Second, the content is supervisory rather than product-knowledge: the six job functions cover supervising the opening of options accounts, supervising account activity, supervising general options trading, supervising options communications, regulatory practice, and supervising associated persons. Third, if you fail, FINRA imposes a 30-day wait after the first or second attempt and a 6-month wait after the third and subsequent failures, and every attempt is paid at the full exam fee. The practical implication is that the pass line is high enough that a disciplined candidate should be scoring well above 80 percent on practice exams before sitting, and should expect the exam to reward rule precision over product recall.',
    source: {
      label: 'FINRA - Series 4 Registered Options Principal Qualification Exam',
      url: 'https://www.finra.org/registration-exams-ce/qualification-exams/series4'
    },
    caveat:
      'FINRA publishes the passing standard (72 percent, 90 of 125 scored items) but no cohort pass rate. The 60-70 percent figures circulating online are third-party estimates, not FINRA data.'
  },
  studyPlan: {
    summary:
      'The Series 4 is a supervision exam, not a product exam, and that single fact should drive the plan. The six job functions in the current content outline are: Supervise the Opening of New Options Accounts (21 items), Supervise Options Account Activities (25), Supervise General Options Trading (30), Supervise Options Communications (9), Implement Practices and Adhere to Regulatory Requirements (12), and Supervise Associated Persons and Personnel Management Activities (28). Notice that options trading supervision and personnel supervision together are 58 of the 125 scored items — nearly half the paper — so study time should be weighted accordingly rather than spread evenly. A realistic plan runs 90 to 120 hours across six to eight weeks, heavier on trading rules, margin, position limits and the regulatory items, because the exam asks scenario questions about what a principal must do when an account is unsuitable, an order is unauthorised, or a communication is not reviewed, rather than pure recall of option mechanics. Weeks one and two should rebuild the options-account framework: approvals, suitability, options disclosure documents, and the account-opening paperwork a principal signs off on. Weeks three and four should work the general-trading function hard — supervision of order flow, position and exercise limits, margin, and the specific obligations that attach to being the principal. Weeks five and six should cover personnel supervision and communications review, the areas candidates tend to underweight. Weeks seven and eight should be question-bank drill and at least three full timed sittings against the 3-hour-25-minute clock, because pacing and stamina are real factors on a 135-item paper.',
    totalHours: '90-120 hours over 6-8 weeks',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Options account supervision (F1, F2)',
        tasks: [
          'Work the account-opening function: new account approvals, options agreements, suitability and risk disclosures, and the Options Disclosure Document (ODD) delivery rules',
          'Drill the options positions a principal must be able to supervise — spreads, straddles, combinations, covered calls and protective puts — and their margin requirements',
          'Learn which account activity triggers principal review: discretionary authority, day trading patterns, exercise and assignment',
          'Build a written summary of the approval levels (1-5) and what each permits'
        ],
        hours: '24 hrs'
      },
      {
        label: 'Weeks 3-4',
        focus: 'General options trading supervision (F3)',
        tasks: [
          'Supervision of order flow: marking order tickets, trade blotters, and the principal obligations around each',
          'Position and exercise limits across the options exchanges, and how a principal monitors compliance',
          'Exchange rules applicable to options trading, including reporting and confirmation requirements',
          'Scenario drills: what a principal must do when a supervisory exception or red flag appears'
        ],
        hours: '30 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Communications, regulation and personnel (F4-F6)',
        tasks: [
          'Communications supervision: advertising and sales literature review, recordkeeping and retention',
          'FINRA Rule 3110 supervisory system requirements and how they apply to an options operation',
          'Personnel supervision: registration status, training, supervision of associated persons, and handling of complaints',
          'Regulatory items: SEC, FINRA and exchange rule sets, and the consequences of failing to supervise'
        ],
        hours: '30 hrs'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Question-bank drill and timed mock exams',
        tasks: [
          'Work 600+ practice questions across all six job functions',
          'Take at least three full 3h25m mock exams, scored and reviewed item by item',
          'Build an error log and re-read the outline section behind every miss',
          'Final pass over margin, limits and the supervisory scenario rules — the highest-yield content'
        ],
        hours: '30 hrs'
      }
    ],
    variants: [
      { label: 'SIE and Series 7 already current', detail: 'You can move straight into the principal content in weeks 1-2; the SIE and Series 7 cover the product mechanics the Series 4 assumes you already know.' },
      { label: 'Series 9/10 supervisor background', detail: 'If you already supervise sales as a general securities sales supervisor, compress weeks 5-6 and spend the recovered time on options-specific margin and limit mechanics.' },
      { label: 'Firm-study candidates on a deadline', detail: 'Four weeks at 20+ hrs/week is possible but brutal; use the firm\u2019s licensing budget for a structured course and run two timed mocks in the final week.' }
    ]
  },
  prepStrategies: {
    summary:
      'The single highest-yield move for the Series 4 is to restructure study around supervisory scenarios rather than product definitions, because the exam asks what a principal must do, not what an option is. Every option strategy should be studied as a supervision problem: what must be disclosed, what margin applies, who must approve it, and which rule is triggered. Second, learn the six job functions as a checklist of obligations and pair each with its FINRA rule reference, because the regulatory items reward exact language. Third, drill margin and position limits until the arithmetic is reflex — the exam includes calculations and the supervisory items lean on limits and equity requirements. Fourth, do not study the communications function as a footnote; at only 9 items it is small, but it is where precise wording separates passing from failing candidates. Fifth, take at least three full-length timed mocks: a 135-item paper over 3 hours 25 minutes is a stamina event, and candidates who never sat a full mock run out of focus in the final hour. Finally, plan the sponsorship logistics in parallel with study: you cannot sit without a firm filing a Form U4 for the OP registration, and the Series 7 and SIE corequisites must be in place, so confirm the registration timeline with your compliance department before you invest in prep.',
    items: [
      {
        title: 'Study supervision scenarios, not product definitions',
        detail: 'Convert every option concept into a "what must the principal do" question. The exam tests the obligation — disclosure, approval, review, escalation — far more than the instrument.'
      },
      {
        title: 'Map the six job functions to FINRA rules',
        detail: 'Each function maps to a rule set (account approvals, suitability, Rule 3110 supervisory systems, communications review). Pairing content to rule numbers makes the regulatory items answerable.'
      },
      {
        title: 'Drill margin, limits and calculations cold',
        detail: 'Margin requirements, position and exercise limits, and equity calculations appear throughout the paper and reward fluency. Practice until the arithmetic is automatic.'
      },
      {
        title: 'Do not skip the communications function',
        detail: 'Only 9 of 125 items, but these reward exact regulatory wording. Read the actual rules on advertising and retail communications rather than summaries.'
      },
      {
        title: 'Run at least three full timed mocks',
        detail: 'A 3h25m, 135-item paper is a stamina test. Score each mock, log every miss, and re-read the outline section behind it before the next sitting.'
      },
      {
        title: 'Confirm sponsorship and corequisites early',
        detail: 'You need a firm to file the Form U4, and the SIE and Series 7 must be in place. Time your study to the registration window and confirm who pays the fee.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'Series 4 preparation splits into the same four buckets as the other FINRA principal exams: the free FINRA content outline, structured courses, question banks, and full-featured packages. The FINRA Series 4 content outline is free and is the authoritative statement of the six job functions and their item counts — it is the syllabus, and any prep product should be checked against it. Structured courses from Kaplan, STC and Pass Perfect dominate the market because the supervisory content benefits from a curated reading order and their packages bundle video, a book, a question bank and simulated exams; the flagship packages are the most expensive option but the only one that fully mimics a 135-item sitting. Question-bank-only products work well for candidates who already supervise options and simply need volume and exposure to exam phrasing. Cheap or free resources — quiz sites, YouTube playlists, vendor trial exams — are useful for orientation but not sufficient alone, because the supervisory scenario phrasing is specific. A defensible budget is $250 to $600 depending on whether you buy a package or assemble a book-plus-bank combo, and many firms cover Series 4 study costs since the licence is a firm requirement. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FINRA Series 4 content outline', values: ['Free', 'PDF outline with item counts and sample items', 'The authoritative syllabus and item allocation'] },
      { label: 'Kaplan Series 4', values: ['$300-$500', 'Book + video + QBank + simulated exams', 'Structured learners who want the full suite'] },
      { label: 'STC Series 4', values: ['$350-$500', 'Textbook + online lectures + exam simulator', 'Firm-sponsored candidates on a deadline'] },
      { label: 'Pass Perfect Series 4', values: ['$300-$500', 'Courseware + adaptive question bank + mocks', 'Candidates who want adaptive drill and progress tracking'] },
      { label: 'Question-bank only', values: ['$100-$250', 'Online practice questions', 'Candidates who already supervise options and need volume'] },
      { label: 'Free quiz sites and vendor trials', values: ['$0', 'Web quizzes and demo exams', 'Orientation and vocabulary before a course'] }
    ],
    footnote:
      'List prices as of mid-2026, subject to change; FINRA exam fees and registration are handled separately through your sponsoring firm. No commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary:
      'The most common failure pattern on the Series 4 is studying option mechanics instead of supervisory obligations: candidates can price a spread but cannot say what a principal must do when an account shows a suitability red flag, and the exam is built around the second kind of item. The fix is to restructure study around "what must the principal do" scenarios. The second mistake is ignoring the 10 unscored pretest items: they are indistinguishable from scored items by design, so trying to identify and skip them is self-defeating and wastes focus. Third, candidates routinely underweight the personnel-supervision function because it feels like HR content; at 28 of 125 items it is the second-largest function on the paper. Fourth, many candidates walk in without a single timed sitting, and a 3-hour-25-minute paper punishes that — focus and stamina degrade in the final hour if you have never rehearsed it. Fifth, candidates mistake the pass line for a target: 90 of 125 leaves little margin, so practice-exam scores in the mid-70s are a signal to delay the sitting, not to take it.',
    items: [
      { mistake: 'Studying product mechanics instead of supervisory obligations', fix: 'Convert every topic into a "what must the principal do" scenario and drill the obligation, not the definition.' },
      { mistake: 'Trying to identify the 10 unscored pretest items', fix: 'Treat all 135 presented items as scored; pretests are indistinguishable by design.' },
      { mistake: 'Underweighting personnel supervision', fix: 'At 28 of 125 items, Function 6 is the second-largest function — study supervision of associated persons and complaint handling in depth.' },
      { mistake: 'Never running a timed sitting', fix: 'Do at least three full 3h25m mocks before exam day; the final hour is where untrained stamina leaks points.' },
      { mistake: 'Aiming at the 72 percent pass line', fix: 'Set the bar at 85 percent-plus on practice exams; 90 of 125 scored items leaves no margin for a bad stretch.' }
    ]
  },
  questionTypes: {
    summary:
      'The Series 4 is entirely multiple-choice and computer-delivered, with 125 scored items plus 10 unscored pretest items presented in a 3-hour-25-minute window. Most items are single-answer, and a large share are scenario-based supervisory questions: you are given a firm, an account, an order or a communication and asked what the principal is required to do, what rule applies, or what must be disclosed. A meaningful minority test precise regulatory language — approval levels, margin minimums, position and exercise limits, recordkeeping and retention periods — and a small number involve calculations such as margin or limit arithmetic. The item allocation by job function is published in the content outline, which is the single most useful planning document: trading supervision and personnel supervision dominate, and communications is only 9 items, so pacing your study to the outline is straightforward. The samples below are editor-written illustrations of the published outline, not live exam items; they show the scenario-first phrasing and the precision required on regulatory items.',
    types: [
      { name: 'Supervisory scenarios', share: 'The bulk of the paper', detail: 'An account, order, trade or communication is described; the item asks what the principal must do, approve, review or escalate.' },
      { name: 'Regulatory knowledge', share: 'A substantial minority', detail: 'Precise rule content: approval levels, margin, position and exercise limits, recordkeeping, and the consequences of failure to supervise.' },
      { name: 'Calculation items', share: 'A small but recurring set', detail: 'Margin and limit arithmetic that a principal must be able to do from the account facts supplied.' },
      { name: 'Communications review', share: '9 of 125 items', detail: 'Whether advertising, sales literature or retail communications meet FINRA review and retention requirements.' }
    ],
    samples: [
      {
        prompt: 'A registered representative is about to open an options account for a customer who has stated a high risk tolerance and a speculative objective. The customer signs the options agreement but the firm has not yet approved the account. Which action is required of the principal?',
        options: [
          'A. Approve the account and permit trading to begin immediately',
          'B. Refuse the account because speculative objectives are prohibited',
          'C. Approve the account only after reviewing the suitability information and confirming the appropriate options level',
          'D. Permit trading but require the customer to sign a second risk acknowledgement'
        ],
        answer: 'C',
        explanation:
          'The options account must be approved by a Registered Options Principal before any options trading, and approval follows review of the customer\u2019s suitability information and assignment of the appropriate options level. A is wrong because trading cannot begin before approval. B misstates the rule — a speculative objective does not prohibit the account, it informs the approval level. D invents a requirement that does not exist; the signed options agreement and approval are what the rules require.'
      },
      {
        prompt: 'A principal reviews a customer\u2019s account and finds the customer has been making short-term, in-and-out options trades that the representative recommended without discussing the risks. What is the principal\u2019s obligation?',
        options: [
          'A. None, because each trade was suitable when made',
          'B. Flag the pattern, review it for churning or excessive activity, and take corrective action if it is unsuitable',
          'C. Liquidate the account immediately',
          'D. Notify the exchange of the trading pattern'
        ],
        answer: 'B',
        explanation:
          'Supervision includes monitoring account activity for patterns such as excessive trading and churning. The principal must review the pattern and act on findings. A is wrong because suitability is judged over the account relationship, not trade by trade in isolation. C overstates the remedy — liquidation is not the mandated response to a flagged pattern. D is not the required step; internal review and corrective action come first.'
      },
      {
        prompt: 'A firm\u2019s options advertising piece states that a strategy "eliminates all risk" of loss. The principal is asked to approve it for use. What should the principal do?',
        options: [
          'A. Approve it, because the piece was drafted by the compliance department',
          'B. Reject it, because it contains an unbalanced or misleading statement about risk',
          'C. Approve it with a footnote added in small print',
          'D. Send it to a regulatory authority for pre-approval'
        ],
        answer: 'B',
        explanation:
          'Communications must be fair, balanced and not misleading; a claim that a strategy eliminates all risk is false because options strategies always carry some risk, and a principal is responsible for approving communications before use. A is wrong because the source of the draft does not cure the defect. C is wrong because the statement itself is false regardless of disclaimers. D is not how FINRA communications rules work — review is the firm\u2019s, not a regulator\u2019s, approval.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published Series 4 content outline, not live exam items.'
  },
  examDay: {
    summary:
      'On exam day you check in at a Prometric testing centre with a valid government-issued photo ID, and the computer presents 135 multiple-choice items — 125 scored and 10 unscored — against a 3-hour-25-minute clock. There is no scheduled break; the session includes a short tutorial before the exam clock starts, and the 10 unscored pretest items are indistinguishable from scored ones, so answer every item. You receive a preliminary pass/fail result immediately on screen, and the official result is filed to your firm\u2019s registration record through the FINRA system. If you fail, the standard wait is 30 days after the first or second attempt and 6 months after the third and subsequent failures; your firm controls scheduling, so coordinate retakes through compliance. Bring nothing but your ID and confirmation — phones, notes and smart devices go in the locker. Arrive 30 minutes early; late arrival forfeits the appointment and fee. A comfortable pace is roughly 95 seconds per item, leaving time to flag and revisit uncertain answers, and the calculations should be done on the erasable noteboard the centre provides. The afterwards matters as much as the pass: your Series 4 registration is effective only while you are registered with a sponsoring firm and you remain subject to the firm-element and regulatory-element continuing education requirements, so plan to keep the licence current after you earn it.',
    bring: [
      'Valid government-issued photo ID matching your registration name',
      'Appointment confirmation and any paperwork your firm requires for the session',
      'A clear sense of the six job functions and the margins and limits you drilled — no external notes are allowed'
    ],
    leave: [
      'Phone, smartwatch and all electronics — stored in the provided locker',
      'Notes, books and study materials',
      'Personal calculators; the centre provides an erasable noteboard and any calculator permitted',
      'Wallet contents beyond your ID where centre policy requires'
    ],
    timeline: [
      { time: '45 minutes before', detail: 'Arrive at the centre; check in and store belongings in the provided locker.' },
      { time: 'At the seat', detail: 'Complete the tutorial, then the 3-hour-25-minute clock starts with item one.' },
      { time: 'Pacing check', detail: 'Roughly 40 items should be done by the hour mark; flag anything uncertain and keep moving.' },
      { time: 'Final 45 minutes', detail: 'Return to flagged items, finish the calculations, then submit rather than letting the clock expire.' },
      { time: 'After submit', detail: 'Preliminary pass/fail appears on screen; the official result posts through your firm\u2019s registration record.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'No breaks — the clock runs continuously',
      'Treat all 135 items as scored; the 10 pretest items are indistinguishable',
      'Preliminary results are on screen; official results post through your firm',
      'Retake waits: 30 days after the first or second fail, 6 months after the third and subsequent fails'
    ],
    afterwards:
      'On a pass, your firm\u2019s registration record updates to reflect the Registered Options Principal category, and the licence is meaningful only while you remain registered and current on continuing education. On a fail, wait out the required period, use the on-screen domain feedback to target the weakest job functions, and re-sit. Coordinate both the scheduling and the fee through your compliance department.'
  }
};

export default data;
