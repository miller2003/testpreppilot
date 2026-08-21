// Depth content for: cma-part-1
// CMA Part 1: Financial Planning, Performance, and Analytics. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Accounting & corporate-finance certifications desk',
    bio: 'This guide is compiled and maintained by our accounting desk. The CMA program structure (two parts, the 100-question plus two-essay format, the 0-500 scaled scoring with a 360 pass mark, the testing windows, the fees and the 3-year completion clock) comes from the Institute of Management Accountants (IMA) CMA program pages and the IMA Content Specification Outlines, which are revised on a published cycle. We state plainly when IMA does not publish an official pass-rate percentage. Wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook occupation accountants and auditors, named by SOC code 13-2011, with the caveat that BLS classifies workers by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CMA Part 1 format (100 multiple-choice questions in 3 hours plus 2 essay or case-based questions in 1 hour, 4 hours total), the 360/500 pass mark, the 2026 fee structure, the three testing windows, the three-year completion clock, and the BLS May 2024 accountant-and-auditor median of $81,680 against imanet.org and bls.gov.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$81,680 median for accountants and auditors (BLS SOC 13-2011, May 2024)',
    summary:
      'There is no Bureau of Labor Statistics occupation called "management accountant," so the salary case for the CMA runs through the occupation it certifies: accountants and auditors, which BLS classifies under SOC 13-2011 with a May 2024 median annual wage of $81,680, about $39.27 an hour. The honest framing is that the CMA does not move the occupation-level median in the government data; its value is as an employer-recognised signal of management-accounting and corporate-finance competency \u2014 the credential that distinguishes a cost accountant or FP&A professional from the general accounting population \u2014 and the certified premium shows up in employer pay practice and promotion eligibility rather than in any BLS line. BLS reports the lowest 10 percent of accountants and auditors earned less than $52,780 and the highest 10 percent more than $141,420, and the May 2024 medians varied by setting \u2014 finance and insurance at $87,980, management of companies and enterprises at $86,010, government at $81,120, and accounting, tax preparation, bookkeeping and payroll services at $80,510 \u2014 so the corporate-side settings where management accountants work sit at the higher end of that distribution. BLS counted 1,579,800 accountant and auditor jobs in 2024 and projects 5 percent growth from 2024 to 2034, faster than the average for all occupations, with about 124,200 openings a year, most from replacement need as the profession turns over. The credential itself carries a real cost structure that a candidate should price before starting: for 2026, IMA professional members pay roughly $545 per part in exam fees plus a $300 entrance fee and IMA membership dues of about $295 a year, with materially reduced rates for students, and the certification also requires completing both parts plus two years of continuous professional experience within seven years, then 30 hours of continuing professional education a year to maintain it. The practical takeaway is that the CMA is an expensive, time-gated credential whose return comes from positioning you for management-accounting and corporate-finance roles in the higher-paying corporate settings rather than from moving the occupation-level median.',
    rows: [
      { label: 'Median annual wage, accountants and auditors', value: '$81,680', note: 'BLS Occupational Outlook Handbook, May 2024 ($39.27/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $52,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $141,420', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '1,579,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~124,200 per year', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'CMA investment', value: '~$545/part + $300 entrance + IMA dues (2026)', note: 'Plus 2 years of experience within 7 years, then 30 CPE hours annually' }
    ],
    growth: '+5% projected change 2024-34 for accountants and auditors (faster than average), with about 124,200 openings a year; the CMA targets the management-accounting and corporate-finance segment of the occupation where corporate-side pay is highest.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Accountants and Auditors',
      url: 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm'
    }
  },

  passRate: {
    headline: 'IMA does not publish official CMA pass-rate percentages \u2014 independent compilations commonly cite a first-time rate near 45% \u2014 and the published pass mark is 360 on a 0-500 scale',
    summary:
      'The direct answer on pass rates is that the IMA does not currently publish official CMA pass-rate percentages on its public program pages, and we will not invent one \u2014 the honest planning question is answered by the published mechanics and the widely cited third-party context instead. Independent prep providers that compile candidate performance commonly cite a first-time CMA pass rate near 45 percent in recent years, materially lower than the pass rates of the CPA or the CFA first level, which is exactly what a candidate should expect from a two-part, essay-inclusive professional exam with a substantial time investment; the figure is a cohort context rather than a precise auditable number, and we flag it as third-party rather than official. What IMA does publish is the complete exam specification: each CMA part is a 4-hour exam of 100 multiple-choice questions in 3 hours plus 2 essay or case-based questions in 1 hour, with the multiple-choice section worth 75 percent of the score and the written section 25 percent, scored on a 0-500 scale with a passing mark of 360, and you must also pass the multiple-choice section at roughly the 50 percent level for your essays to be graded at all \u2014 a gate that trips candidates who bank on strong essays to carry a weak multiple-choice performance. The exam is delivered at Prometric centres or through ProProctor online testing in three windows per year: January/February, May/June and September/October. Two structural facts matter more than any pass-rate number. First, you have three years from entering the program to pass both parts, and a single failed attempt in a window costs the full per-part fee and pushes the completion date, so the economics reward thorough preparation. Second, the 2026 written section is transitioning from traditional essays to case-based questions (CBQs), with candidates in the January/February 2026 window sitting essays, the May/June window able to choose, and most English-language exams using CBQs only from September/October 2026 \u2014 so a candidate should confirm which format applies to their window.',
    source: {
      label: 'IMA \u2014 CMA (Certified Management Accountant) program pages',
      url: 'https://www.imanet.org/en/CMA-Certification'
    },
    caveat: 'IMA does not publish official CMA pass-rate percentages; the ~45% first-time figure is a third-party compilation and should be treated as cohort context, not an auditable official number. The verifiable official figures are the 100-MCQ-plus-2-essay format, the 360/500 pass mark, the 50% multiple-choice gate, and the three testing windows per year.'
  },

  studyPlan: {
    summary:
      'A realistic CMA Part 1 study plan runs 12 to 16 weeks at 8 to 12 hours a week, because the part is a breadth exam with a written component and the fastest score gains come from weighting study time to the domains that carry the most points. The IMA Content Specification Outline for Part 1, Financial Planning, Performance, and Analytics, is the scope map: External Financial Reporting Decisions at 15 percent of the exam, Planning, Budgeting and Forecasting at 20 percent, Performance Management at 20 percent, Cost Management at 15 percent, Internal Controls at 15 percent, and Technology and Analytics at 15 percent, so a candidate who studies the six domains equally will under-prepare the planning-and-performance block that carries 40 percent of the paper. The study window should split into a content-coverage phase (weeks 1-8) working the domains in weight order \u2014 starting with planning, budgeting and forecasting (strategic planning, budgeting methodologies, forecasting techniques and the annual profit plan) and performance management (cost and variance analysis, responsibility centres, the balanced scorecard and performance measurement), then cost management, external financial reporting, internal controls and technology and analytics \u2014 followed by a drilling phase (weeks 9-12) with the question bank, then a final block (weeks 13-16) of full timed practice exams at the real 4-hour format, including the written section. The written section is the part candidates underestimate: the two essay or case-based questions reward showing your calculations and reasoning, so the plan must include at least a few timed written responses, not just multiple-choice drilling. The multiple-choice section is scored first and gates the essays, so practice performance on the 100-question block should clear the bar before the exam. Confirm your testing window, your IMA membership status and the fee structure \u2014 roughly $545 per part for professionals, less for students, plus the entrance fee and IMA dues \u2014 and plan against the three-year clock to pass both parts, because a failed attempt costs the full fee and a full window.',
    totalHours: '100-160 hours over 12-16 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Planning, budgeting and forecasting (20%)', tasks: ['Study strategic planning and the budgeting process, methodologies and the annual profit plan', 'Cover forecasting techniques and the supporting schedules', 'Take a section-level practice set and log every miss to a domain'], hours: '10-12 hrs/week' },
      { label: 'Weeks 3-4', focus: 'Performance management (20%)', tasks: ['Master cost and variance analysis and responsibility centres', 'Study the balanced scorecard and performance measurement against plan', 'Drill the variance calculations until they are automatic'], hours: '10-12 hrs/week' },
      { label: 'Weeks 5-6', focus: 'Cost management (15%)', tasks: ['Cover cost concepts and behaviour, and the costing systems', 'Study overhead allocation, supply-chain management and business-process improvement', 'Practise the allocation and costing calculations in volume'], hours: '10-12 hrs/week' },
      { label: 'Week 7', focus: 'External financial reporting (15%)', tasks: ['Study financial statement recognition and measurement of assets and liabilities', 'Cover the impact of US GAAP vs IFRS differences on reported results', 'Drill the statement-preparation and reconciliation items'], hours: '10-12 hrs' },
      { label: 'Week 8', focus: 'Internal controls and technology and analytics (30% combined)', tasks: ['Study governance, risk and compliance, and the internal control frameworks', 'Cover systems controls, security, information systems, data governance and analytics tools', 'Practise the technology-and-analytics items, a fast-growing part of the blueprint'], hours: '10-12 hrs' },
      { label: 'Weeks 9-12', focus: 'Question-bank drilling and written-section practice', tasks: ['Drill the full question bank in volume, tagging every miss to a domain', 'Practise 2-4 timed written responses, showing calculations and reasoning', 'Take one full 4-hour practice exam and analyse the multiple-choice gate'], hours: '12-14 hrs/week' },
      { label: 'Weeks 13-16', focus: 'Full-format rehearsal and gap closing', tasks: ['Two or three full 4-hour practice exams under real timing', 'Re-drill the weakest domains from the error log', 'Final pass over variance analysis, budgeting and the written-section format'], hours: '10-12 hrs/week' }
    ],
    variants: [
      { label: 'Working in management accounting or FP&A', detail: 'Ten to twelve weeks. Your day job covers planning, budgeting and performance; spend the recovered time on external financial reporting, internal controls and the written-section format.' },
      { label: 'Recent accounting graduate', detail: 'Twelve weeks at 10-12 hrs/week. Your content is fresh; the risk is the exam format \u2014 the multiple-choice gate and the timed essays \u2014 so weight the plan toward full 4-hour rehearsals.' },
      { label: 'Working full-time while studying', detail: 'Sixteen weeks at 8-10 hours a week. Protect the weekly question set and the written-section practice, and confirm the window and the three-year clock before you start.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably passes CMA Part 1 is "weight the blueprint, drill the calculations, and rehearse the written section," because the IMA outline puts Planning, Budgeting and Forecasting and Performance Management at 20 percent each, and the exam is as much a test of showing your work in the essay or case-based section as of picking the right multiple-choice answer. Start by getting the IMA Content Specification Outline and baselining with a section-level practice set, logging every miss to a domain. Second, weight the planning-and-performance block hardest: strategic planning, budgeting methodologies, the annual profit plan, cost and variance analysis, responsibility centres and the balanced scorecard carry 40 percent of the paper, and the variance, budget and allocation calculations that live there are the highest-yield drilling targets. Third, drill the calculations until they are automatic: variances, overhead allocation, costing, and the financial-statement reconciliations, because the multiple-choice section is scored first and gates the essays, and calculation fluency is what clears that gate. Fourth, rehearse the written section explicitly: the two essay or case-based questions reward showing your calculations and reasoning in order, and a candidate who can think through a cost analysis but cannot write it up under time loses the 25 percent of the score the written section carries. Fifth, do not skip the smaller domains: external financial reporting, internal controls, and technology and analytics together are 45 percent of the paper, and the technology-and-analytics content is the fastest-growing part of the blueprint. Finally, rehearse the full 4-hour format at least twice, because the multiple-choice-to-essay rhythm and the pacing \u2014 about 108 seconds per multiple-choice question \u2014 need to be trained, and confirm the essay-versus-case-based-question format that applies to your testing window, since the transition to case-based questions is rolling out through 2026.',
    items: [
      { title: 'Weight the planning-and-performance block', detail: 'Planning, Budgeting and Forecasting and Performance Management are 20% each \u2014 40% of the paper. Master the annual profit plan, variance analysis, responsibility centres and the balanced scorecard first.' },
      { title: 'Drill the calculations until automatic', detail: 'Variances, overhead allocation, costing and statement reconciliations live in the highest-weight domains. The multiple-choice section is scored first and gates the essays, so calculation fluency clears the gate.' },
      { title: 'Rehearse the written section explicitly', detail: 'The two essay or case-based questions are 25% of the score and reward showing your work in order. Practise timed written responses \u2014 not just multiple-choice drilling.' },
      { title: 'Do not skip the smaller domains', detail: 'External Financial Reporting, Internal Controls and Technology and Analytics together are 45% of the paper; the technology-and-analytics content is the fastest-growing part of the blueprint.' },
      { title: 'Rehearse the full 4-hour format', detail: '100 multiple-choice in 3 hours plus 2 written in 1 hour. Run at least two full timed exams so the multiple-choice-to-essay rhythm and the ~108-seconds-per-question pace are trained.' },
      { title: 'Confirm the written-section format for your window', detail: 'The essay-to-case-based-question transition runs through 2026 \u2014 essays in Jan/Feb, choice in May/Jun, CBQs mostly from Sep/Oct. Confirm which applies to your sitting.' }
    ]
  },

  resourceComparison: {
    summary:
      'CMA Part 1 preparation splits into the IMA official materials, the major commercial review courses, and free resources, and the buying logic is anchored by one fact: the IMA Content Specification Outline and the IMA exam practice questions are the authoritative scope, and the well-known commercial review providers \u2014 Wiley CMAexcel, Gleim, Becker and HOCK \u2014 dominate the market because the exam is too specialised for generic accounting prep to cover. The commercial review courses run roughly $500 to $1,500 depending on the package, provider and access length, and they bundle the question bank, video lectures, a study text and mock exams; the tier differences are mostly about access length, printed texts and additional practice-exam volume, so a candidate should compare the per-part versus both-parts pricing, because many providers discount the two-part bundle. The IMA itself publishes the Content Specification Outlines free, along with official practice questions and a study guide, which are the closest thing to the real exam format; for a candidate on a tight budget, the free outlines plus the official practice questions plus a question-bank subscription can be workable, but the written-section grading is where a structured course adds the most value. The exam fees themselves \u2014 roughly $545 per part for professionals plus a $300 entrance fee and IMA membership dues of about $295 a year for 2026, with reduced student rates \u2014 should be budgeted separately from prep. The honest rule: the free outlines and official practice questions first, then one commercial review course for the question bank and written-section coaching, and skip the second course, because the candidates who fail are the ones who never ran full timed exams rather than the ones who lacked a second vendor. Prices below are approximate and dated to 2026; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'IMA Content Specification Outlines and official practice questions', values: ['Free', 'Official PDFs and online practice', 'The authoritative scope \u2014 read the outlines first'] },
      { label: 'Commercial CMA review course (Wiley, Gleim, Becker, HOCK)', values: ['~$500-1,500', 'Question bank, video, study text and mock exams', 'The standard package \u2014 compare per-part vs two-part pricing'] },
      { label: 'Question-bank-only subscription', values: ['~$150-300', 'Online drilling with explanations', 'Volume drilling for candidates who already have a text'] },
      { label: 'CMA Part 1 exam (IMA)', values: ['~$545/part + $300 entrance + IMA dues (2026)', 'Prometric centre or ProProctor online, 4 hours', 'Required \u2014 plus the written section and the 360 pass mark'] },
      { label: 'Free study communities and flashcards', values: ['Free', 'Forums, decks and summaries', 'Supplemental drilling between structured sessions'] }
    ],
    footnote: 'Prices approximate and dated to 2026 and change frequently; we rank nothing by commission. The IMA fee structure for 2026 is roughly $545 per part for professionals plus a $300 entrance fee and IMA membership dues, with reduced student rates; confirm the current structure and the testing windows at imanet.org before paying.'
  },

  commonMistakes: {
    summary:
      'The most common CMA Part 1 mistake is studying the six domains equally, because Planning, Budgeting and Forecasting and Performance Management carry 20 percent each and a candidate who divides time evenly under-prepares the planning-and-performance block that effectively decides the pass. The second is treating the written section as an afterthought: the two essay or case-based questions are 25 percent of the score, and candidates who drill only multiple choice arrive unable to show their calculations and reasoning under time, losing a quarter of the paper to format. A third recurring error is misunderstanding the multiple-choice gate: your essays are not graded unless the multiple-choice section clears roughly the 50 percent level, so a candidate who banks on strong essays to carry a weak multiple-choice performance gets no credit for them at all. Candidates also routinely under-drill the calculations \u2014 variances, overhead allocation and costing \u2014 because the concepts feel familiar, when the exam rewards fluent arithmetic and the calculation items are where time pressure bites. Another pattern is skipping the technology-and-analytics domain, which is 15 percent of the paper and the fastest-growing part of the blueprint, because traditional accountants dismiss it as peripheral. Finally, some candidates mismanage the structural clock: they sit a part without running a full 4-hour timed exam, so the multiple-choice-to-essay rhythm surprises them, or they let the three-year completion clock slip after a failed attempt, which costs the full per-part fee and a full testing window. A last pattern is confusion about the written-section transition: candidates in 2026 windows must confirm whether their sitting uses essays or the newer case-based questions, because preparing for the wrong format wastes the most expensive study hours.',
    items: [
      { mistake: 'Studying the six domains equally', fix: 'Planning, Budgeting and Forecasting and Performance Management are 20% each. Weight your hours to the blueprint \u2014 40% of the paper lives in those two domains.' },
      { mistake: 'Treating the written section as an afterthought', fix: 'The two essay or case-based questions are 25% of the score. Practise timed written responses that show your calculations and reasoning in order.' },
      { mistake: 'Misunderstanding the multiple-choice gate', fix: 'Your essays are not graded unless the multiple-choice section clears roughly the 50% level. Protect the MCQ block rather than banking on essays to carry the part.' },
      { mistake: 'Under-drilling the calculations', fix: 'Variances, overhead allocation and costing reward fluent arithmetic. Drill them until automatic \u2014 the calculation items are where time pressure bites.' },
      { mistake: 'Skipping technology and analytics', fix: 'Technology and Analytics is 15% of the paper and the fastest-growing domain. Give it a focused pass rather than dismissing it as peripheral.' },
      { mistake: 'Mismanaging the structural clock', fix: 'Run at least two full 4-hour timed exams, and treat the three-year completion clock and the per-window fee as hard constraints after any failed attempt.' },
      { mistake: 'Preparing for the wrong written-section format', fix: 'Confirm whether your 2026 window uses essays or the newer case-based questions \u2014 the transition rolls out through the year, and the wrong prep wastes your most expensive study hours.' }
    ]
  },

  questionTypes: {
    summary:
      'CMA Part 1, Financial Planning, Performance, and Analytics, is a 4-hour computer-based exam of 100 multiple-choice questions in 3 hours plus 2 essay or case-based questions in 1 hour, with the multiple-choice section worth 75 percent of the score and the written section 25 percent, scored on a 0-500 scale with a passing mark of 360 and a multiple-choice gate that must clear roughly 50 percent before the essays are graded. The multiple-choice items are four-option single-best-answer questions drawn from the six domains of the IMA Content Specification Outline \u2014 External Financial Reporting Decisions (15 percent), Planning, Budgeting and Forecasting (20 percent), Performance Management (20 percent), Cost Management (15 percent), Internal Controls (15 percent), and Technology and Analytics (15 percent) \u2014 and they run from concept questions to calculation items on variances, budgeting, overhead allocation and costing. The written section presents two questions that combine scenario analysis with calculations and written reasoning: traditional essays ask you to compute and explain in prose, while the newer case-based questions present a business case with interactive prompts such as select-from-list, drag-and-drop and calculation entry, but both are graded for the same 25 percent of the part. The calculation items are the defining feature of Part 1: variance analysis, the annual profit plan and its schedules, overhead allocation and the cost-volume relationships appear across the highest-weight domains, and candidates who can perform the arithmetic fluently clear the multiple-choice gate far more reliably than candidates who only recognise the concepts. The practical pacing is about 108 seconds per multiple-choice question, with the written section timed separately. The samples below illustrate a concept item, a calculation item and a written-response illustration; they are editor-written to the published Content Specification Outline and are not live exam items.',
    types: [
      { name: 'Concept and framework items', share: 'Across all six domains', detail: 'Definitions and applications of budgeting, costing, control frameworks and analytics concepts \u2014 the fastest items for a candidate who studied the blueprint.' },
      { name: 'Calculation items', share: 'Heaviest in planning and performance', detail: 'Variances, overhead allocation, costing and budget schedules \u2014 the defining feature of Part 1, where fluent arithmetic clears the multiple-choice gate.' },
      { name: 'Scenario-based multiple choice', share: 'A recurring share', detail: 'A described business situation asking for the correct budget, cost or performance-management decision.' },
      { name: 'Essay / case-based written questions', share: '2 questions, 25% of the score', detail: 'A scenario requiring calculations plus written reasoning \u2014 traditional essays, or the newer case-based questions with interactive prompts, depending on the window.' }
    ],
    samples: [
      {
        prompt: 'Which budgeting approach starts with the assumption that no prior spending is automatically continued and each activity must be justified for the new period?',
        options: [
          'A. Incremental budgeting',
          'B. Zero-based budgeting',
          'C. Flexible budgeting',
          'D. Continuous budgeting'
        ],
        answer: 'B',
        explanation: 'Zero-based budgeting requires every expense to be justified from a zero base for each new period, rather than continuing prior levels \u2014 the definition the item states. A, incremental budgeting, starts from the prior period and adjusts; C, flexible budgeting, varies with activity volume; and D, continuous budgeting, rolls the horizon forward. The item tests the budgeting-concept content of the Planning, Budgeting and Forecasting domain, where precise definitions are directly scored.'
      },
      {
        prompt: 'A company has a static budget for 10,000 units with direct labour of $50,000. Actual output was 9,000 units and actual direct labour cost was $46,000. What is the flexible-budget variance for direct labour?',
        options: [
          'A. $1,000 unfavourable',
          'B. $4,000 unfavourable',
          'C. $1,000 favourable',
          'D. $5,000 favourable'
        ],
        answer: 'A',
        explanation: 'The flexible budget flexes the static budget to actual output: $50,000 divided by 10,000 units is $5 per unit, and at 9,000 units the flexible budget is $45,000. The flexible-budget variance is actual cost minus the flexible budget: $46,000 minus $45,000 is $1,000, and because actual cost exceeded the flexed amount, it is $1,000 unfavourable. B mislabels the amount as $4,000 by comparing actual cost to the static budget directly, C reverses the sign, and D is the unfavourable amount reversed. The item tests the variance calculation that is the defining skill of the Performance Management domain \u2014 flex the budget to actual volume, then compare actual to the flexed amount, and get the sign right.'
      },
      {
        prompt: 'A company evaluates its divisions using return on investment (ROI). A division manager can increase ROI by rejecting a project that is profitable for the company but dilutes the division\u2019s current ROI. Which evaluation approach is most likely to reduce this conflict?',
        options: [
          'A. Evaluating managers on ROI alone',
          'B. Using residual income as the performance measure',
          'C. Eliminating all performance measures',
          'D. Rewarding managers only on sales growth'
        ],
        answer: 'B',
        explanation: 'Residual income charges the division for the cost of capital and rewards any project that earns more than that required return, so a manager who rejects a project earning above the cost of capital because it dilutes ROI is penalised \u2014 reducing the conflict between division and company interests. A, ROI alone, creates the conflict described; C removes the measure entirely; and D rewards a single dimension. The item tests the performance-management content of the blueprint \u2014 the measurement-choice reasoning that appears throughout the Performance Management domain.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'CMA Part 1 is a 4-hour computer-based exam of 100 multiple-choice questions in 3 hours plus 2 essay or case-based questions in 1 hour, delivered at a Prometric centre or through ProProctor online testing, scored on a 0-500 scale with a passing mark of 360, and the direct exam-day answer is that you will work the multiple-choice section first, clear the gate, and then write the two essay or case-based responses, with the score report delivered on screen at the end. The first thing to confirm is the name on your IMA profile: it must match your government-issued ID exactly, because Prometric will turn you away on a mismatch, and the fee is forfeited. Bring the required ID and your testing confirmation; leave phones, smartwatches, notes and personal belongings in the locker, because personal electronics are prohibited in the testing room. Arrive at least 30 minutes early so check-in and the tutorial are complete before the clock starts, and for online proctoring run the system test in advance and set up in a private room with a clear desk. When the exam begins, work the 100 multiple-choice questions at roughly 108 seconds each, flagging items you want to revisit, and make sure you clear the multiple-choice gate before the essays \u2014 the written section depends on it. In the written section, show your work in order: set up the scenario, perform the calculations, state the conclusion and explain the reasoning, because the graders reward visible, ordered logic. Budget the 4 hours deliberately across both sections and protect time for the writing, because candidates who spend the whole multiple-choice window under-prepare the 25 percent of the score that comes from the written responses. On a pass, your Part 1 result is banked against the three-year clock \u2014 you must pass Part 2 and complete two years of continuous professional experience within seven years to earn the CMA \u2014 so diary the completion clock immediately, and confirm the written-section format (essays versus case-based questions) that applies to your testing window before the day.',
    bring: [
      'A government-issued photo ID matching your IMA profile name exactly (driver\u2019s license or passport)',
      'Your exam confirmation with the Prometric centre address or ProProctor session link',
      'For online proctoring: a tested webcam, microphone and connection on the exact machine you will use',
      'A pacing plan \u2014 about 108 seconds per multiple-choice question, with the written section timed separately'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and all personal electronics',
      'Notes, books and study materials \u2014 the test centre provides what is allowed',
      'Personal calculators beyond the permitted model \u2014 the exam has a specific calculator policy',
      'For online proctoring, any other person in the room and any second monitor'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your IMA profile name matches your ID exactly, the Prometric centre or ProProctor logistics, and which written-section format applies to your window (essays or case-based questions).' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, including identity verification and, for online proctoring, a room scan.' },
      { time: '0-180 minutes', detail: 'Work the 100 multiple-choice questions at about 108 seconds each. Clear the gate \u2014 the written section depends on the multiple-choice score.' },
      { time: '180-240 minutes', detail: 'Write the two essay or case-based responses: set up the scenario, show the calculations, state the conclusion, explain the reasoning.' },
      { time: 'At the end', detail: 'The score report is delivered on screen, with the 360 pass mark as the bar.' },
      { time: 'After a pass', detail: 'Diary the three-year completion clock for Part 2 and the two-year experience requirement.' }
    ],
    rules: [
      'The exam is 100 multiple-choice questions in 3 hours plus 2 written questions in 1 hour, 4 hours total.',
      'The passing mark is 360 on a 0-500 scale; the multiple-choice section must clear roughly the 50% gate for the essays to be graded.',
      'The result is reported as a numeric score, delivered on screen at the end of the exam.',
      'Your IMA profile name must match your government-issued ID exactly, or you are turned away and the fee is forfeited.',
      'Personal electronics are prohibited; the exam has a specific calculator policy \u2014 confirm the permitted model.',
      'You have three years from entering the program to pass both parts; a failed attempt costs the full per-part fee and a full testing window.'
    ],
    afterwards:
      'Your score report is delivered on screen at the end of the exam, and the immediate next step on a pass is the structural one: log the three-year completion clock, because you must pass Part 2 within three years of entering the program and complete two years of continuous professional experience within seven years to earn the CMA credential, and on a fail, use the score report to identify the weaker section \u2014 for most candidates that is either the multiple-choice gate or the written section \u2014 rehearse that section specifically, and re-sit in a later window at the full per-part fee. Once certified, the CMA requires 30 hours of continuing professional education each year, including at least 2 hours of ethics, plus the IMA membership dues, so the credential is a maintenance commitment rather than a one-time purchase. Either way, the occupation behind the credential is the context: accountants and auditors earned a BLS median of $81,680 in May 2024 with about 124,200 openings a year, and the CMA positions you for the management-accounting and corporate-finance segment of that occupation where corporate-side pay is highest \u2014 the practical return on a roughly $1,000-plus first-year investment and the three-year completion clock.'
  }
};

export default data;
