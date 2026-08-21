const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Quality, lean & six-sigma certifications desk',
    bio: 'This desk covers ASQ and quality certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ASQ), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ASQ\'s CSSGB program pages and exam FAQ, and BLS OOH Industrial Engineers (SOC 17-2112), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,140 median for industrial engineers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Six Sigma Green Belt" — the ASQ CSSGB credential certifies Six Sigma methodology competency at the team-member and project-support level, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Industrial Engineers, SOC 17-2112, which had a May 2024 median wage of $101,140, with the lowest 10 percent under $65,720 and the highest 10 percent above $139,800. The fit must be read with an honest caveat: green belts are typically process engineers, quality technicians and improvement-team members who work inside or alongside the industrial-engineering occupation, so the realistic benchmark for a green-belt holder sits at or below the median, climbing with the black-belt credential and project-leadership experience. BLS counted 315,900 industrial engineer jobs in 2024 and projects 6 percent growth from 2024 to 2034, with about 20,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the green-belt credential\'s value is as a methodology signal — it certifies that you can support improvement projects with the DMAIC toolkit. Read the number as the market for the occupation the credential connects to.',
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
    headline: 'ASQ publishes the format — 110 questions (100 scored) in 4 hours 18 minutes, passing 550/750 — and no cohort pass rate',
    summary: 'ASQ does not publish cohort pass rates for the CSSGB exam, and third-party estimates are not official data, so we do not treat them as authoritative. What ASQ does publish is the format and the passing standard: the CSSGB computer-based exam has 110 multiple-choice questions — 100 scored and 10 unscored pretest questions — with 4 hours 18 minutes of exam time, and a passing score of 550 on the 300-750 scale. The exam is open book: candidates may bring bound reference materials. The exam content follows the published Body of Knowledge (BoK): Six Sigma and the organization; the DMAIC methodology — Define, Measure, Analyze, Improve and Control — with green-belt-level statistics including probability, hypothesis testing and regression; and lean concepts. The absence of a published pass rate is not an absence of standards: the 550 line is a meaningful bar, and the open-book format means the exam tests application and retrieval, not memorisation. The practical reading: prepare with the BoK as the scope map, drill the quantitative material at the green-belt depth — which is real but less demanding than the black-belt level — and build a tabbed reference binder for the open-book exam.',
    source: { label: 'ASQ - Certified Six Sigma Green Belt (CSSGB) program', url: 'https://asq.org/cert/six-sigma-green-belt' },
    caveat: 'ASQ publishes the format, passing score and open-book policy but no cohort pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CSSGB exam is a 110-question (100 scored), 4-hour-18-minute open-book exam with a 550/750 passing score, and its curriculum is the published Body of Knowledge: Six Sigma and the organization; the DMAIC methodology across Define, Measure, Analyze, Improve and Control; green-belt-level statistics; and lean concepts. A defensible plan runs 80 to 140 hours over 8 to 12 weeks. Weeks 1-2: Six Sigma fundamentals and the Define phase — project selection, charters, process mapping and voice of the customer. Weeks 3-5: Measure and Analyze — statistics at the green-belt depth, including probability, hypothesis testing and regression, with measurement systems analysis. Weeks 6-7: Improve and Control — design of experiments basics, lean tools and control plans. Weeks 8-10: question-bank drilling and building the open-book binder. Weeks 11-12: two full timed practice exams at the real format. The plan is balanced between methodology and statistics; the green-belt exam tests real statistical application but at a lower depth than the black-belt, so candidates with a basic statistics background can move efficiently through the quantitative phases.',
    totalHours: '80-140 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Fundamentals and Define', tasks: ['Six Sigma and the organization', 'Project selection, charters and process mapping', 'Voice of the customer and CTQs'], hours: 25 },
      { label: 'Weeks 3-5', focus: 'Measure and Analyze', tasks: ['Probability and statistics fundamentals', 'Hypothesis testing and regression', 'Measurement systems analysis'], hours: 40 },
      { label: 'Weeks 6-7', focus: 'Improve and Control', tasks: ['Design of experiments basics', 'Lean tools and process flow', 'Control plans and SPC'], hours: 30 },
      { label: 'Weeks 8-10', focus: 'Drill and binder', tasks: ['Question-bank drilling in volume', 'Build the open-book reference binder', 'Methodology review'], hours: 30 },
      { label: 'Weeks 11-12', focus: 'Timed simulations', tasks: ['Two full timed practice exams', 'Review every miss against the BoK', 'Final statistics pass'], hours: 20 }
    ],
    variants: [
      { label: 'Quality professional', detail: 'Compress the fundamentals; spend the extra time on statistics and simulations.' },
      { label: 'Management background, new to statistics', detail: 'Add 2-3 weeks of statistics basics before the BoK phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CSSGB exam is open book, so the dominant strategy is building a tabbed reference binder and practising retrieval: organise the ASQ references and your notes by BoK section, and practise applying the formulas quickly, because the exam rewards application under time pressure rather than memorisation. Second, balance the study between the DMAIC methodology and the statistics: the exam tests both the tool names and their application, so drill scenario items alongside the quantitative ones. Third, use the published BoK as the scope map and audit every study resource against it. Fourth, work practice questions in volume, including the calculation items, because the exam tests applied statistics. Finally, take at least two full timed practice exams at the real 4-hour-18-minute format; the stamina of a long exam is part of the test, and the open-book retrieval rhythm must be rehearsed. If you plan to continue to the CSSBB, the green-belt material is a direct foundation — study it for understanding rather than a checkbox.',
    items: [
      { title: 'Build and tab a reference binder', detail: 'Open-book retrieval must be practised; tab by BoK section.' },
      { title: 'Balance methodology and statistics', detail: 'The exam tests tool names and their application in scenarios.' },
      { title: 'Audit against the BoK', detail: 'The published Body of Knowledge is the authoritative scope.' },
      { title: 'Drill calculations', detail: 'Applied statistics is a real share of the exam.' },
      { title: 'Run two full simulations', detail: '4h18m of exam is a stamina and retrieval rhythm test.' }
    ]
  },
  resourceComparison: {
    summary: 'CSSGB prep centres on the ASQ Body of Knowledge and the standard references. ASQ\'s official resources — the BoK (free), the CSSGB Study Guide and the Six Sigma Green Belt Handbook — are the core stack, with the handbook serving as the open-book reference. Prep courses from ASQ and third-party providers range from roughly $400 to $1,500. Question banks ($50-$150) provide practice volume. The exam fee is about $398 for ASQ members and $498 for non-members at the time of writing. A realistic total budget is $800 to $2,200 including the exam fee and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ASQ CSSGB Body of Knowledge', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Green Belt Handbook + Study Guide', values: ['$80-$180 each', 'Printed or digital', 'The core references for the open-book exam'] },
      { label: 'Prep courses', values: ['$400-$1,500', 'Live or self-paced', 'Structured walkthrough of the BoK'] },
      { label: 'Question banks', values: ['$50-$150', 'Online practice items', 'Scenario and quantitative drilling'] },
      { label: 'CSSGB exam', values: ['~$398 member / ~$498 non-member', 'Computer-based, open book', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ASQ fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CSSGB mistake is under-preparing the statistics: candidates who focus on the DMAIC methodology vocabulary and skip the quantitative material meet the calculation items unprepared. The fix is balanced study with real statistics practice. The second mistake is treating the open-book policy as permission to skip retrieval practice — candidates who bring a binder they have never used waste exam time searching; build and drill the binder. Third, candidates study from courses instead of the BoK, losing the exact scope; audit everything against the BoK. Fourth, some candidates never run a full timed simulation and underestimate the stamina of 4 hours 18 minutes. Finally, forgetting the eligibility requirement is a quiet trap: the CSSGB requires documented experience or a qualifying education path per the program criteria, and certification cannot proceed without it — confirm eligibility before studying.',
    items: [
      { mistake: 'Under-preparing statistics', fix: 'Drill the quantitative items; applied statistics is a real share.' },
      { mistake: 'Ignoring open-book retrieval practice', fix: 'Build and drill the binder; searching wastes exam time.' },
      { mistake: 'Studying courses, not the BoK', fix: 'Audit every resource against the published BoK.' },
      { mistake: 'Skipping timed simulations', fix: 'Run two full 4h18m simulations; stamina is part of the test.' },
      { mistake: 'Forgetting the eligibility criteria', fix: 'Confirm the experience or education requirement before studying.' }
    ]
  },
  questionTypes: {
    summary: 'The CSSGB exam is a 110-question (100 scored) multiple-choice exam in 4 hours 18 minutes, open book. The items span the BoK: Six Sigma fundamentals, the DMAIC methodology, green-belt statistics and lean concepts, with quantitative items requiring calculation and scenario items testing the correct tool or decision. Samples below are editor-written illustrations of the published BoK, not live exam items; they show the applied style of the real items.',
    types: [
      { name: 'Methodology items', share: 'Large share', detail: 'DMAIC tools, outputs and decisions for described situations.' },
      { name: 'Quantitative items', share: 'Large share', detail: 'Statistics, hypothesis testing and regression at the green-belt depth.' },
      { name: 'Lean and organization items', share: 'Meaningful share', detail: 'Lean tools and Six Sigma project context.' }
    ],
    samples: [
      {
        prompt: 'In DMAIC, which phase establishes the baseline performance of the process?',
        options: ['A. Define', 'B. Measure', 'C. Improve', 'D. Control'],
        answer: 'B',
        explanation: 'The Measure phase collects the data and establishes the baseline performance of the process. Define scopes the project, Improve implements solutions, and Control sustains them.'
      },
      {
        prompt: 'A team wants to prioritise the most frequent causes of defects from a count of occurrences. The most appropriate tool is:',
        options: ['A. A Pareto chart', 'B. A control chart', 'C. A Pugh matrix', 'D. An FMEA'],
        answer: 'A',
        explanation: 'A Pareto chart ranks categories by frequency to prioritise the vital few causes — the standard prioritisation tool for defect counts. Control charts monitor variation, Pugh matrices select solutions, and FMEA analyses failure modes.'
      },
      {
        prompt: 'A green belt tests whether two process groups have different average cycle times. The most appropriate statistical test is:',
        options: ['A. A two-sample t-test', 'B. A control chart', 'C. A Pareto chart', 'D. A process map'],
        answer: 'A',
        explanation: 'Comparing the means of two groups calls for a two-sample t-test. Control charts monitor stability, Pareto charts rank categories, and process maps document flow — none tests the group-mean difference.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published BoK, not live exam items.'
  },
  examDay: {
    summary: 'The CSSGB exam is a computer-based, open-book exam of 110 questions (100 scored) in 4 hours 18 minutes, delivered at Prometric centres or through remote proctoring. Bring the required identification and your approved bound reference materials; personal electronics go in the locker. Arrive early — late arrivals forfeit the appointment and fee. Organise your binder by BoK section and practise retrieval before the day. Pace at about 2.2 minutes per item, and budget extra time for the quantitative items. Your result is reported immediately for computer-based delivery, with the official score report following against the 550/750 passing line. If you fail, ASQ allows retakes at a reduced rate within two years. On a pass, the certification is valid for three years and renews through recertification units (RUs) or retesting per ASQ\'s policy. The afterwards matters: log your RUs as you earn them, because ASQ audits renewals, and consider the CSSBB as the next step.',
    bring: ['Required identification', 'Approved bound reference materials organised by BoK section', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Unbound notes — references must be securely bound', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, and have your references inspected by the centre.' },
      { time: 'Exam', detail: '110 questions in 4h18m; pace ~2.2 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Result appears on screen; the score report follows against 550/750.' },
      { time: 'Next', detail: 'Log recertification units and plan the CSSBB step.' }
    ],
    rules: [
      'The exam is open book; references must be securely bound',
      'No personal electronics in the testing room',
      '110 questions (100 scored) in 4 hours 18 minutes'
    ],
    afterwards: 'On a pass, your CSSGB is valid for three years; earn recertification units (or retest) to renew. On a fail, retake at the reduced rate within two years after additional BoK study. Consider the CSSBB as the next step.'
  }
};

export default data;
