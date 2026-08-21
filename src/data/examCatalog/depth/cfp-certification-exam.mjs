const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Financial planning certification desk',
    bio: 'CFP exam structure and requirements come from the CFP Board official pages and are revised with each exam-window update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the CFP exam structure, pass-rate reporting, and requirements against CFP Board official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect personal-financial-advisor pay at a May 2024 median of $99,580 (BLS) — the CFP is the planning profession\u2019s gold-standard credential, and advisors holding it typically earn at the upper end of the occupation',
    summary: 'The direct answer is that the CFP certification is the flagship credential of the financial-planning profession, and the occupation it serves, personal financial advisors (SOC 13-2052), earned a May 2024 median annual wage of $99,580, with the lowest 10 percent under about $53,000 and the highest 10 percent above about $171,000. The honest framing is that the BLS occupation includes both registered representatives and planners, and CFP holders cluster toward the upper part of the distribution — the credential is widely cited by industry surveys as associated with higher earnings, and it is the differentiator that lets advisors charge planning fees and move up within firms, though BLS does not publish CFP-specific pay. BLS counted about 242,000 personal financial advisors in 2024 and projects about 7 percent employment growth from 2024 to 2034, faster than average, with roughly 20,000 openings per year. The CFP path itself is a substantial commitment: a bachelor\u2019s degree, the CFP Board-registered education program (typically 4 to 12 months of coursework), 6,000 hours of professional experience (or 4,000 through the apprenticeship pathway), passing the 170-question exam, and the ethics requirement. The practical read is that the CFP is an investment in career positioning rather than a fast credential: the exam pass rates are roughly 60 to 70 percent per window, the cost runs several thousand dollars when education and exam fees are combined, and the payoff is the fee-for-service planning model and the advisor roles that list "CFP preferred or required." For candidates deciding whether to pursue it, the credential makes the most sense for advisors already working in the industry or graduates committed to planning, since the experience requirement alone takes years to satisfy.',
    rows: [
      { label: 'Median annual wage, personal financial advisors', value: '$99,580', note: 'BLS OEWS, May 2024 (SOC 13-2052)' },
      { label: 'Lowest 10 percent', value: '~$52,777', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: '~$171,278', note: 'BLS OEWS, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+7%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: 'CFP Board certification with education, exam, and experience requirements' }
    ],
    growth: 'BLS projects about 7% growth for personal financial advisors from 2024 to 2034, faster than average, with roughly 20,000 annual openings.',
    source: { label: 'BLS OEWS — Personal Financial Advisors (13-2052)', url: 'https://www.bls.gov/oes/current/oes132052.htm' }
  },
  passRate: {
    headline: 'CFP Board publishes pass rates — the November 2025 window reported about 62% of candidates passing; the exam is 170 questions across 3 sessions in one day, with a standards-based passing standard',
    summary: 'The direct answer is that the CFP exam does publish pass rates: CFP Board reports results for each testing window, and recent windows have run roughly 60 to 70 percent — the November 2025 exam window reported approximately 62 percent of candidates passing, consistent with the multi-year pattern of pass rates in the low-to-mid 60s. The exam itself is a computer-based test of 170 multiple-choice questions delivered in three sessions (85 questions, 85 questions, and 60 questions) over a single day, with a standards-based passing standard set by CFP Board rather than a fixed percentage; the question set is weighted across the seven principal knowledge areas — professional conduct and regulation, general principles of financial planning, education planning, risk management and insurance planning, investment planning, tax planning, retirement savings and income planning, and estate planning — with investment and retirement planning carrying the largest weights. Candidates must complete a CFP Board-registered education program before sitting, and the exam is offered in multiple windows each year at authorized test centers. The published pass-rate pattern is stable and useful for planning: candidates who complete the education program and a structured exam-prep course (typically 100 to 200 hours of study) sit in the range of the published pass rates, and retakes are permitted with a wait period. The honest preparation implication is that the pass-rate data supports treating the exam as a serious, structured preparation project — the credential\u2019s pass line is real and the exam covers the full planning curriculum, so last-minute cramming is a documented failure mode.',
    source: { label: 'CFP Board — Exam results', url: 'https://www.cfp.net/' },
    caveat: 'CFP Board publishes pass rates by exam window; recent windows report roughly 60-70%.'
  },
  studyPlan: {
    summary: 'Plan for 12 to 20 weeks and 150 to 250 hours of study for the CFP exam after completing the CFP Board-registered education program, with a structured prep course and mock exams in the final month — the exam\u2019s breadth across seven knowledge areas makes systematic coverage essential. The exam weights the knowledge areas unevenly: investment planning and retirement savings/income planning carry the largest question shares, followed by tax planning and risk management, so study time should be allocated proportionally rather than evenly. The most effective sequence is: first, complete the education program (which is itself 200+ hours); second, run a diagnostic exam to locate weak areas; third, work through the two highest-weight areas — investment and retirement planning — before the others; fourth, drill the tax and estate planning material, which rewards memorised rules; and fifth, take three to four full mock exams under timed, single-day conditions in the final month, since the three-session format is a stamina test as much as a knowledge test. The highest-yield habits are the mock exams and the "case-study" style questions, which appear throughout and reward applying multiple planning areas to one client situation. Budget the final week for light review and rest rather than new material, and plan the exam day logistics — the exam runs a full day across three sessions with scheduled breaks, so practising the full-day format is the single best predictor of finishing strong.',
    totalHours: '150-250 study hours after the education program',
    weeks: [
      { label: 'Weeks 1-4', focus: 'Diagnostic + high-weight areas', tasks: ['Take a diagnostic exam', 'Study investment planning and retirement planning', 'Start the prep course curriculum'], hours: 60 },
      { label: 'Weeks 5-10', focus: 'Full syllabus', tasks: ['Work tax, estate, risk, education, and regulation content', 'Drill case-study questions', 'Take two mock exams'], hours: 90 },
      { label: 'Weeks 11-14', focus: 'Mocks + gap closure', tasks: ['Take two to three full-day mocks', 'Re-study weak knowledge areas', 'Practise time management across sessions'], hours: 60 },
      { label: 'Final week', focus: 'Taper', tasks: ['Light review of high-weight formulas', 'Confirm exam logistics', 'Rest and sleep normally'], hours: 15 }
    ],
    variants: [
      { label: 'Apprenticeship pathway', detail: 'Alternative experience route: 4,000 hours of supervised planning work instead of 6,000 general hours.' },
      { label: 'Retake strategy', detail: 'Retakes allowed with a wait period; candidates typically improve with structured mock-exam work.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the CFP exam is "allocated study across the seven knowledge areas by weight, then three to four full-day mocks," and the single biggest error is studying the curriculum evenly and skipping the case-study and mock-exam phase. A second proven approach is treating the two highest-weight areas — investment planning and retirement savings — as the study core, since they carry the largest question share and the case studies draw on them. Third, master the tax and estate rules as memorised specifics, because those items reward recall over reasoning and are dependable points. Fourth, practise the case-study format specifically: multi-area client scenarios are the exam\u2019s signature, and candidates who rehearse applying several planning areas to one client outperform those who study topics in isolation. Fifth, run at least two full-day mocks under real timing, including the breaks, so the three-session stamina is familiar. Finally, use the published pass-rate data honestly: with pass rates in the 60 to 70 percent range, treat the exam as a structured 150-hour project with mock validation, not a credential you can rush after the education program.',
    items: [
      { title: 'Allocate study by exam weight', detail: 'Investment and retirement planning carry the largest question shares.' },
      { title: 'Master the case-study format', detail: 'Multi-area client scenarios are the exam\u2019s signature item type.' },
      { title: 'Memorise the tax and estate rules', detail: 'These items reward recall and are dependable points.' },
      { title: 'Run full-day mocks', detail: 'The three-session day is a stamina test; rehearse it.' },
      { title: 'Plan 150+ structured hours', detail: 'The published 60-70% pass range rewards systematic preparation.' }
    ]
  },
  resourceComparison: {
    summary: 'The CFP path costs several thousand dollars across education, exam, and prep — the registered education program typically $2,000 to $6,000, the exam fee about $925, and structured prep courses $500 to $2,000 — so budget the full path before starting. The comparison below separates the education program, the exam, and the major prep options, with prices current to this review. The buying rule is to choose a CFP Board-registered education program first, then a prep course with strong mock-exam support, since the mocks are the highest-value prep spend.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CFP Board-registered education program', values: ['~$2,000-6,000', 'Online or classroom, 4-12 months', 'The required prerequisite'] },
      { label: 'CFP exam registration', values: ['~$925', 'Computer-based, 3 sessions', 'The exam itself'] },
      { label: 'Structured prep courses (e.g. Danko, Dalton, Zahn)', values: ['~$700-2,000', 'Live or recorded + question banks', 'Systematic review and mocks'] },
      { label: 'Mock exam packages', values: ['~$100-400', 'Full-day simulated exams', 'Stamina and timing rehearsal'] },
      { label: 'Question banks (e.g. CFP Board practice)', values: ['~$50-200', 'Online practice questions', 'Topic drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the CFP also requires experience (6,000 hours or 4,000 via apprenticeship) and an ethics requirement.'
  },
  commonMistakes: {
    summary: 'The most common mistake is under-allocating study to the two highest-weight areas and over-studying regulation content, which flips the exam\u2019s point distribution; the second is skipping full-day mock exams and then failing on stamina and time management rather than knowledge. A third recurring error is treating the case-study questions as optional practice when they are the exam\u2019s signature format. Candidates also routinely underestimate the education-program commitment and enter the exam window without a structured prep phase, and many ignore the published pass-rate data, assuming the credential is easier than the numbers show. Finally, some candidates neglect the experience and ethics requirements, passing the exam and then discovering the certification has more gates to clear.',
    items: [
      { mistake: 'Misallocating study time', fix: 'Weight study by question share: investment and retirement planning first.' },
      { mistake: 'Skipping full-day mocks', fix: 'Run three to four mocks; the three-session day is a stamina test.' },
      { mistake: 'Ignoring case-study items', fix: 'Drill multi-area client scenarios; they are the exam\u2019s signature.' },
      { mistake: 'Rushing after the education program', fix: 'Budget a structured 12-20 week prep phase with mock validation.' },
      { mistake: 'Forgetting experience and ethics gates', fix: 'Plan the 6,000-hour experience requirement and ethics review alongside the exam.' }
    ]
  },
  questionTypes: {
    summary: 'The CFP exam contains 170 multiple-choice questions across three sessions in one day, weighted by the seven principal knowledge areas, with the largest shares in investment planning and retirement savings/income planning. Item formats include direct knowledge questions, calculation questions, and case-study questions that apply multiple planning areas to a client scenario. The samples below are editor-written illustrations of the published exam blueprint, not live exam items.',
    types: [
      { name: 'Investment planning', share: '~20%', detail: 'Asset allocation, portfolio theory, security analysis.' },
      { name: 'Retirement savings & income', share: '~20%', detail: 'Qualified plans, Social Security, distribution planning.' },
      { name: 'Tax planning', share: '~15%', detail: 'Income tax rules, strategies, and calculations.' },
      { name: 'Risk management & insurance', share: '~12%', detail: 'Life, health, property, and liability coverage.' },
      { name: 'Estate planning', share: '~12%', detail: 'Wills, trusts, transfer tax, gifting.' },
      { name: 'General principles & education', share: '~14%', detail: 'Financial statement analysis, cash flow, education funding.' },
      { name: 'Professional conduct & regulation', share: '~7%', detail: 'Ethics, duties, and regulatory standards.' }
    ],
    samples: [
      {
        prompt: 'A client in the 32% tax bracket contributes $7,000 to a traditional IRA. What is the immediate tax effect?',
        options: ['A. Taxable income increases by $7,000', 'B. Taxable income decreases by $7,000, reducing tax by about $2,240', 'C. No tax effect until withdrawal', 'D. A $7,000 tax credit'],
        answer: 'B',
        explanation: 'A deductible traditional IRA contribution lowers taxable income; at 32%, the tax reduction is 0.32 x $7,000 = $2,240.'
      },
      {
        prompt: 'Which asset allocation is most appropriate for a client with a 25-year time horizon and high risk tolerance?',
        options: ['A. 100% cash equivalents', 'B. A high allocation to equities with some fixed income', 'C. 100% short-term bonds', 'D. All assets in a single stock'],
        answer: 'B',
        explanation: 'A long horizon and high risk tolerance support a growth-oriented allocation weighted to equities with some fixed income for diversification.'
      },
      {
        prompt: 'Under the CFP Board Code of Ethics, an advisor who learns of a material conflict of interest must:',
        options: ['A. Ignore it if the conflict is common', 'B. Disclose it to the client', 'C. Transfer the client to another firm', 'D. Disclose it only if asked'],
        answer: 'B',
        explanation: 'CFP professionals must act as fiduciaries and disclose material conflicts of interest to the client.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The CFP exam is a full-day, computer-based test at an authorized testing center: 170 multiple-choice questions in three sessions (85, 85, and 60 questions) with scheduled breaks, delivered in one day, with a standards-based passing standard. The core rules: bring a valid photo ID, arrive early, and follow the testing center\u2019s rules on personal items; a basic calculator and scratch paper are provided. The exam windows run multiple times per year, and results are typically released within weeks, reported as pass or fail with a diagnostic breakdown for failed candidates. The most useful exam-day habits: rehearse the full-day format in your mocks so the sessions and breaks are familiar, pace the 85-question sessions at about a minute per question, and use the breaks to reset rather than to second-guess. After the exam, plan the remaining certification gates — the experience requirement and ethics review — since passing the exam is one step of several. If you do not pass, CFP Board permits retakes after a wait period, and the diagnostic feedback targets your study plan for the retake.',
    bring: ['Valid photo ID', 'Arrival at the authorized testing center', 'A full-day mindset — three sessions with breaks'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'The assumption of a half-day exam'],
    timeline: [
      { time: 'Morning', detail: 'Session 1: 85 questions; session 2: 85 questions, with a break between.' },
      { time: 'Afternoon', detail: 'Session 3: 60 questions; scheduled breaks throughout.' },
      { time: 'Results', detail: 'Pass/fail with diagnostic feedback within weeks.' },
      { time: 'Certification', detail: 'Complete experience and ethics requirements for the credential.' }
    ],
    rules: ['170 questions, 3 sessions, one day', 'Computer-based at authorized centers', 'Standards-based passing standard', 'Retakes permitted after a wait period'],
    afterwards: 'Passing the exam, combined with the education, experience, and ethics requirements, earns the CFP certification — the planning profession\u2019s flagship credential.'
  }
};

export default data;
