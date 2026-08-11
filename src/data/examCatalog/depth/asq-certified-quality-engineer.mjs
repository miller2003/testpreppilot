const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Quality, lean & six-sigma certifications desk',
    bio: 'This desk covers ASQ and quality certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ASQ), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ASQ\'s CQE program pages and exam FAQ, and BLS OOH Industrial Engineers (SOC 17-2112), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,140 median for industrial engineers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Certified Quality Engineer" — the ASQ CQE credential certifies quality-engineering competency, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Industrial Engineers, SOC 17-2112, which had a May 2024 median wage of $101,140, with the lowest 10 percent under $65,720 and the highest 10 percent above $139,800. The fit is direct: CQE holders work as quality engineers, quality assurance engineers, supplier-quality engineers and reliability engineers, all of which sit inside or directly adjacent to the industrial-engineering occupation, and the credential\'s experience requirement means holders are typically mid-career, benchmarking at or above the median. BLS counted 315,900 industrial engineer jobs in 2024 and projects 6 percent growth from 2024 to 2034, with about 20,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as a competency and hiring signal for quality roles that employers frequently require or prefer. Read the number as the relevant market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, industrial engineers', value: '$101,140', note: 'BLS OOH, SOC 17-2112, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $65,720', note: 'BLS OOH, SOC 17-2112, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $139,800', note: 'BLS OOH, SOC 17-2112, May 2024' },
      { label: 'Projected openings per year', value: '~20,000', note: 'BLS OOH, SOC 17-2112, 2024-2034' }
    ],
    growth: 'BLS projects 6 percent growth for industrial engineers from 2024 to 2034, about 20,000 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Industrial Engineers', url: 'https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm' }
  },
  passRate: {
    headline: 'ASQ publishes the format — 175 questions (160 scored) in 5 hours 18 minutes, passing 550/750 — and no cohort pass rate',
    summary: 'ASQ does not publish cohort pass rates for the CQE exam, and third-party estimates are not official data, so we do not treat them as authoritative. What ASQ does publish is the format and the passing standard: the CQE computer-based exam has 175 multiple-choice questions — 160 scored and 15 unscored pretest questions — with 5 hours 18 minutes of exam time, and a passing score of 550 on the 300-750 scale. The exam is open book: candidates may bring bound reference materials. The exam content follows the published Body of Knowledge (BoK): management and leadership in quality engineering; quality systems development, implementation and verification; product and process design; product and process control; continuous improvement; quantitative methods and tools; and risk management. The absence of a published pass rate is not an absence of standards: the 550 line on the longest of the ASQ exams is a demanding bar, and the breadth of the BoK — from management systems to statistics and risk — means candidates must study across all seven sections. The practical reading: prepare with the BoK as the scope map, build a tabbed reference binder for the open-book exam, and allocate the most study time to quantitative methods, which is the deepest section.',
    source: { label: 'ASQ - Certified Quality Engineer (CQE) program', url: 'https://asq.org/cert/quality-engineer' },
    caveat: 'ASQ publishes the format, passing score and open-book policy but no cohort pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CQE exam is a 175-question (160 scored), 5-hour-18-minute open-book exam with a 550/750 passing score, and its curriculum is the published Body of Knowledge with seven sections: management and leadership in quality engineering; quality systems; product and process design; product and process control; continuous improvement; quantitative methods and tools; and risk management. The exam is the broadest of the ASQ quality exams, spanning management systems, design quality, statistics and risk. A defensible plan runs 150 to 250 hours over 12 to 16 weeks. Weeks 1-3: management, leadership and quality systems — standards, audits, the quality function and the quality system elements. Weeks 4-6: design and process — design reviews, FMEA, process capability and control plans. Weeks 7-10: quantitative methods — statistics, hypothesis testing, sampling, SPC and reliability, the deepest and most heavily weighted section. Weeks 11-13: continuous improvement and risk management, then question-bank drilling and binder building. Weeks 14-16: two full timed practice exams at the real format. The plan is statistics-anchored because quantitative methods is the section where most candidates struggle.',
    totalHours: '150-250 hours over 12-16 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Management and systems', tasks: ['Leadership and the quality function', 'Quality systems, standards and audits', 'Documentation and quality planning'], hours: 45 },
      { label: 'Weeks 4-6', focus: 'Design and process', tasks: ['Design reviews and FMEA', 'Process design, capability and control plans', 'Reliability and maintainability basics'], hours: 45 },
      { label: 'Weeks 7-10', focus: 'Quantitative methods', tasks: ['Statistics, probability and distributions', 'Hypothesis testing, sampling and SPC', 'Regression and design of experiments'], hours: 70 },
      { label: 'Weeks 11-13', focus: 'Improvement, risk, drill', tasks: ['Continuous improvement and lean', 'Risk management', 'Question-bank drilling and binder building'], hours: 50 },
      { label: 'Weeks 14-16', focus: 'Timed simulations', tasks: ['Two full timed practice exams', 'Review every miss against the BoK', 'Final statistics pass'], hours: 40 }
    ],
    variants: [
      { label: 'Quality engineer with statistics background', detail: 'Compress the quantitative phase; spend the extra time on systems, audits and the exam format.' },
      { label: 'Quality professional, weak statistics', detail: 'Add 3-4 weeks of statistics refresher before the BoK phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CQE exam is open book and broad, so the dominant strategy is building a tabbed reference binder and practising retrieval across all seven BoK sections: organise the references by section, tab the formulas and standards, and practise applying them under time pressure. Second, allocate the largest study block to quantitative methods — statistics, sampling, SPC and reliability — because it is the deepest section and the most common source of failure. Third, use the published BoK as the scope map and audit every study resource against it, because the breadth means a single course rarely covers everything. Fourth, work practice questions in volume across all seven sections, including the calculations, because the exam tests application. Finally, take at least two full timed practice exams at the real 5-hour-18-minute format; it is the longest of the ASQ exams, and stamina and retrieval rhythm are part of the test. Confirm the experience eligibility early — the CQE requires eight years of experience with education waivers — because certification cannot proceed without it.',
    items: [
      { title: 'Build and tab a reference binder', detail: 'Organise references by BoK section; practise retrieval under time.' },
      { title: 'Anchoring on quantitative methods', detail: 'Statistics, sampling, SPC and reliability are the deepest section.' },
      { title: 'Audit against the BoK', detail: 'The seven-section BoK is the authoritative scope.' },
      { title: 'Drill all seven sections', detail: 'A single course rarely covers the breadth; practice across all.' },
      { title: 'Confirm the experience eligibility', detail: 'Eight years (with education waivers) gate the certification.' }
    ]
  },
  resourceComparison: {
    summary: 'CQE prep centres on the ASQ Body of Knowledge and the standard references. ASQ\'s official resources — the BoK (free), the CQE Study Guide and the Quality Engineering Handbook ($150-$250) — are the core stack, with the handbook as the open-book reference. Prep courses from ASQ and third-party providers range from roughly $500 to $2,000. Question banks ($50-$200) provide practice volume. The exam fee is about $538 for ASQ members and $638 for non-members at the time of writing. A realistic total budget is $1,000 to $3,000 including the exam fee and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ASQ CQE Body of Knowledge', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Quality Engineering Handbook', values: ['$150-$250', 'Printed or digital', 'The core reference for the open-book exam'] },
      { label: 'CQE Study Guide', values: ['$100-$200', 'Printed or digital', 'Structured BoK coverage'] },
      { label: 'Prep courses', values: ['$500-$2,000', 'Live or self-paced', 'Structured walkthrough of the seven sections'] },
      { label: 'CQE exam', values: ['~$538 member / ~$638 non-member', 'Computer-based, open book', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ASQ fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CQE mistake is under-preparing quantitative methods: candidates with a management quality background underestimate the statistics, sampling, SPC and reliability content, which is the deepest section of the BoK. The fix is a statistics-first plan. The second mistake is treating the open-book policy as permission to skip retrieval practice — candidates who bring a binder they have never used waste exam time searching; build and drill the binder. Third, candidates study from a single course and miss the breadth of the seven-section BoK; audit everything against the BoK. Fourth, some candidates never run a full timed simulation and underestimate the stamina of 5 hours 18 minutes — the longest of the ASQ exams. Finally, forgetting the eligibility requirement is a quiet trap: the CQE requires eight years of experience with education waivers, and certification cannot proceed without it — confirm eligibility before studying.',
    items: [
      { mistake: 'Under-preparing quantitative methods', fix: 'Statistics, sampling, SPC and reliability are the deepest section; plan it first.' },
      { mistake: 'Ignoring open-book retrieval practice', fix: 'Build and drill the binder; searching wastes exam time.' },
      { mistake: 'Relying on a single course', fix: 'Audit against the seven-section BoK; cover the breadth.' },
      { mistake: 'Skipping timed simulations', fix: 'Run two full 5h18m simulations; stamina is part of the test.' },
      { mistake: 'Forgetting the eligibility requirement', fix: 'Eight years with education waivers gate the certification; confirm early.' }
    ]
  },
  questionTypes: {
    summary: 'The CQE exam is a 175-question (160 scored) multiple-choice exam in 5 hours 18 minutes, open book. The items span the seven BoK sections — management and leadership, quality systems, design, control, continuous improvement, quantitative methods, and risk management — with quantitative items requiring calculation and scenario items testing the correct tool, standard application or decision. Samples below are editor-written illustrations of the published BoK, not live exam items; they show the applied, multi-section style of the real items.',
    types: [
      { name: 'Quantitative items', share: 'Large share', detail: 'Statistics, sampling, SPC, reliability and DOE calculations.' },
      { name: 'System and design items', share: 'Large share', detail: 'Quality systems, audits, FMEA and process control.' },
      { name: 'Management and risk items', share: 'Meaningful share', detail: 'Leadership, continuous improvement and risk management.' }
    ],
    samples: [
      {
        prompt: 'A quality engineer must evaluate the risk of potential failure modes in a new product design. The most appropriate tool is:',
        options: ['A. FMEA', 'B. A Pareto chart', 'C. A control chart', 'D. A Pugh matrix'],
        answer: 'A',
        explanation: 'Failure Mode and Effects Analysis (FMEA) systematically evaluates design or process failure modes and their risks — the standard tool for design risk. Pareto charts rank occurrence, control charts monitor variation, and Pugh matrices select solutions.'
      },
      {
        prompt: 'An X-bar control chart shows a point outside the control limits. The appropriate interpretation is that:',
        options: ['A. The process may be out of control and the assignable cause should be investigated', 'B. The process is definitely acceptable', 'C. The control limits should be widened', 'D. The data should be discarded'],
        answer: 'A',
        explanation: 'A point beyond the control limits signals possible special-cause variation; the standard response is to investigate the assignable cause. Widening limits, discarding data or declaring acceptability without investigation each misapply SPC practice.'
      },
      {
        prompt: 'A supplier quality engineer must determine whether a lot meets the acceptance criteria using a sampling plan. The plan\'s operating characteristic curve shows:',
        options: ['A. The probability of accepting a lot at various incoming quality levels', 'B. The process mean over time', 'C. The cost of inspection', 'D. The frequency of defect types'],
        answer: 'A',
        explanation: 'The operating characteristic (OC) curve plots the probability of accepting a lot against incoming quality levels — the defining tool for evaluating sampling plans. The other options describe process monitoring, cost analysis and Pareto ranking.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published BoK, not live exam items.'
  },
  examDay: {
    summary: 'The CQE exam is a computer-based, open-book exam of 175 questions (160 scored) in 5 hours 18 minutes, delivered at Prometric centres or through remote proctoring. Bring the required identification and your approved bound reference materials; personal electronics go in the locker. Arrive early — late arrivals forfeit the appointment and fee. Organise your binder by BoK section and practise retrieval before the day. Pace at about 1.8 minutes per item, and budget extra time for the quantitative items; plan a personal rhythm for the long session. Your result is reported immediately for computer-based delivery, with the official score report following against the 550/750 passing line. If you fail, ASQ allows retakes at a reduced rate within two years. On a pass, the certification is valid for three years and renews through recertification units (RUs) or retesting per ASQ\'s policy. The afterwards matters: log your RUs as you earn them, because ASQ audits renewals.',
    bring: ['Required identification', 'Approved bound reference materials organised by BoK section', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Unbound notes — references must be securely bound', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, and have your references inspected by the centre.' },
      { time: 'Exam', detail: '175 questions in 5h18m; pace ~1.8 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Result appears on screen; the score report follows against 550/750.' },
      { time: 'Next', detail: 'Log recertification units across the three-year cycle.' }
    ],
    rules: [
      'The exam is open book; references must be securely bound',
      'No personal electronics in the testing room',
      '175 questions (160 scored) in 5 hours 18 minutes'
    ],
    afterwards: 'On a pass, your CQE is valid for three years; earn recertification units (or retest) to renew. On a fail, retake at the reduced rate within two years after additional BoK study.'
  }
};

export default data;
