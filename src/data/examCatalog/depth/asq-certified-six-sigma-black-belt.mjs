const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Quality, lean & six-sigma certifications desk',
    bio: 'This desk covers ASQ and quality certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ASQ), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against ASQ\'s CSSBB program pages and exam FAQ, and BLS OOH Industrial Engineers (SOC 17-2112), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$101,140 median for industrial engineers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Six Sigma Black Belt" — the ASQ CSSBB credential certifies mastery of the Six Sigma methodology, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Industrial Engineers, SOC 17-2112, which had a May 2024 median wage of $101,140, with the lowest 10 percent under $65,720 and the highest 10 percent above $139,800. The fit is deliberate: CSSBB holders work as process-improvement engineers, quality engineers, continuous-improvement leads and operational excellence professionals, all of which sit inside or directly adjacent to the industrial-engineering occupation. BLS counted 315,900 industrial engineer jobs in 2024 and projects 6 percent growth from 2024 to 2034, with about 20,000 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the black-belt credential\'s value is as a signal of project-leadership and methodology mastery that employers use for senior continuous-improvement roles; the most senior black-belt positions (master black belt, improvement directors) benchmark against management series that BLS reports separately. Read the number as the relevant market for the occupation the credential serves.',
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
    headline: 'ASQ publishes the format — 165 questions (150 scored) in 4 hours 18 minutes, passing 550/750 — and no cohort pass rate',
    summary: 'ASQ does not publish cohort pass rates for the CSSBB exam, and third-party estimates are not official data, so we do not treat them as authoritative. What ASQ does publish is the format and the passing standard: the CSSBB computer-based exam has 165 multiple-choice questions — 150 scored and 15 unscored pretest questions — with 4 hours 18 minutes of exam time, and a passing score of 550 on the 300-750 scale. The exam is open book: candidates may bring bound reference materials, which is a distinctive feature of the ASQ program. The exam content follows the published Body of Knowledge (BoK): organizational leadership; Define, Measure, Analyze, Improve and Control (DMAIC) methodology; lean tools; and the statistics and design-of-experiments material at the black-belt depth. The absence of a published pass rate is not an absence of standards: the 550 line on the 300-750 scale is a meaningful bar, and the open-book format means the exam tests application and retrieval skill, not memorisation. The practical reading: prepare with the BoK as the scope map, bring a well-organised reference binder, and drill the quantitative material — statistics, hypothesis testing and design of experiments — which is where most candidates struggle.',
    source: { label: 'ASQ - Certified Six Sigma Black Belt (CSSBB) program', url: 'https://asq.org/cert/six-sigma' },
    caveat: 'ASQ publishes the format, passing score and open-book policy but no cohort pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The CSSBB exam is a 165-question (150 scored), 4-hour-18-minute open-book exam with a 550/750 passing score, and its curriculum is the published Body of Knowledge: organizational leadership and strategy; the DMAIC methodology with its Define, Measure, Analyze, Improve and Control phases; lean enterprise tools; and the black-belt-level statistics, including probability, hypothesis testing, regression and design of experiments. A defensible plan runs 120 to 200 hours over 10 to 14 weeks. Weeks 1-2: organizational leadership and the Define phase — project charters, stakeholders and process mapping. Weeks 3-5: the Measure and Analyze phases — statistics, measurement systems analysis, hypothesis testing and regression, the quantitative core where most study time belongs. Weeks 6-7: the Improve and Control phases — design of experiments, lean tools and control plans. Weeks 8-10: question-bank drilling and structured open-book practice, building the reference binder. Weeks 11-14: two full timed practice exams at the real format. The plan is statistics-heavy because the black-belt BoK is quantitative at depth; candidates who arrive with weak statistics must add a statistics refresher before the BoK work.',
    totalHours: '120-200 hours over 10-14 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Leadership and Define', tasks: ['Organizational leadership and strategy', 'Project charters, stakeholders, process mapping', 'Voice of the customer and CTQs'], hours: 30 },
      { label: 'Weeks 3-5', focus: 'Measure and Analyze', tasks: ['Statistics: probability, distributions and sampling', 'Measurement systems analysis and hypothesis testing', 'Regression and correlation'], hours: 60 },
      { label: 'Weeks 6-7', focus: 'Improve and Control', tasks: ['Design of experiments', 'Lean tools and process flow', 'Control plans and SPC'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Drill and binder', tasks: ['Question-bank drilling in volume', 'Build the open-book reference binder', 'Lean and leadership review'], hours: 40 },
      { label: 'Weeks 11-14', focus: 'Timed simulations', tasks: ['Two full timed practice exams', 'Review every miss against the BoK', 'Final statistics pass'], hours: 30 }
    ],
    variants: [
      { label: 'Green-belt already earned', detail: 'Compress the DMAIC framework; spend the extra time on black-belt statistics and DOE.' },
      { label: 'Weak statistics background', detail: 'Add 3-4 weeks of statistics refresher before the BoK phases.' }
    ]
  },
  prepStrategies: {
    summary: 'The CSSBB exam is open book, so the dominant strategy is building a well-organised reference binder and practising retrieval: tab the ASQ references and your own notes by BoK section, and practise finding and applying the formulas quickly, because the exam rewards application under time pressure, not memorisation. Second, spend the largest share of study on statistics: probability, hypothesis testing, regression and design of experiments are the quantitative core and the most common source of failure for candidates with a management background. Third, use the published BoK as the scope map and audit every study resource against it, because the BoK is the authoritative list of what can appear. Fourth, work practice questions in volume, including the quantitative items with calculations, because the exam tests the application of the formulas. Finally, take at least two full timed practice exams at the real 4-hour-18-minute format; the stamina of a long quantitative exam is part of the test, and the open-book retrieval rhythm must be rehearsed.',
    items: [
      { title: 'Build and tab a reference binder', detail: 'Open-book retrieval must be practised; tab by BoK section.' },
      { title: 'Spend most time on statistics', detail: 'Probability, hypothesis testing, regression and DOE are the quantitative core.' },
      { title: 'Audit against the BoK', detail: 'The published Body of Knowledge is the authoritative scope.' },
      { title: 'Drill calculations', detail: 'The exam tests applying the formulas, not knowing their names.' },
      { title: 'Run two full simulations', detail: '4h18m of quantitative exam is a stamina and rhythm test.' }
    ]
  },
  resourceComparison: {
    summary: 'CSSBB prep centres on the ASQ Body of Knowledge and the standard references, with courses as an optional accelerant. ASQ\'s official resources — the BoK (free), the CSSBB Study Guide ($100-$200) and the CSSBB Handbook ($100-$200) — are the core stack, and the handbook is the reference candidates bring into the open-book exam. ASQ and third-party providers sell preparation courses ranging from roughly $500 to $2,000 depending on format. Question banks ($50-$200) provide the practice volume. The exam fee is about $538 for ASQ members and $638 for non-members at the time of writing. A realistic total budget is $1,000 to $3,000 including the exam fee and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ASQ CSSBB Body of Knowledge', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'CSSBB Handbook + Study Guide', values: ['$100-$200 each', 'Printed or digital', 'The core references for the open-book exam'] },
      { label: 'Prep courses', values: ['$500-$2,000', 'Live or self-paced', 'Structured walkthrough of the BoK'] },
      { label: 'Question banks', values: ['$50-$200', 'Online practice items', 'Quantitative drilling in volume'] },
      { label: 'CSSBB exam', values: ['~$538 member / ~$638 non-member', 'Computer-based, open book', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ASQ fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CSSBB mistake is under-preparing the statistics: candidates with a management background underestimate the quantitative depth of the black-belt BoK and meet the hypothesis-testing and DOE items unprepared. The fix is a statistics-first plan. The second mistake is treating the open-book policy as permission to skip retrieval practice — candidates who bring a binder they have never used waste exam time searching; build and drill the binder before the exam. Third, candidates study from courses instead of the BoK, losing the exact scope; audit everything against the BoK. Fourth, some candidates never run a full timed simulation and underestimate the stamina of 4 hours 18 minutes of quantitative work. Finally, forgetting the eligibility requirement is a quiet trap: the CSSBB requires completed projects or documented experience per the program criteria, and certification cannot proceed without it — confirm eligibility before studying.',
    items: [
      { mistake: 'Under-preparing statistics', fix: 'Plan statistics-first; hypothesis testing and DOE are the failure zone.' },
      { mistake: 'Ignoring open-book retrieval practice', fix: 'Build and drill the binder; searching wastes exam time.' },
      { mistake: 'Studying courses, not the BoK', fix: 'Audit every resource against the published BoK.' },
      { mistake: 'Skipping timed simulations', fix: 'Run two full 4h18m simulations; stamina is part of the test.' },
      { mistake: 'Forgetting the eligibility criteria', fix: 'Confirm the project/experience requirement before studying.' }
    ]
  },
  questionTypes: {
    summary: 'The CSSBB exam is a 165-question (150 scored) multiple-choice exam in 4 hours 18 minutes, open book. The items span the BoK: organizational leadership, the DMAIC phases, lean tools, and black-belt statistics — with a large share of quantitative items requiring calculation using the formulas in the references. Scenario items describe a process-improvement situation and ask for the correct tool, output or decision at the black-belt level. Samples below are editor-written illustrations of the published BoK, not live exam items; they show the applied, quantitative style of the real items.',
    types: [
      { name: 'Quantitative items', share: 'Large share', detail: 'Statistics, hypothesis testing, regression and DOE calculations.' },
      { name: 'Methodology items', share: 'Large share', detail: 'DMAIC tools, outputs and decisions for described situations.' },
      { name: 'Leadership and lean items', share: 'Meaningful share', detail: 'Organizational strategy, project management and lean tools.' }
    ],
    samples: [
      {
        prompt: 'In DMAIC, which phase produces the validated root causes of a process problem?',
        options: ['A. Measure', 'B. Analyze', 'C. Improve', 'D. Control'],
        answer: 'B',
        explanation: 'The Analyze phase uses the data collected in Measure to validate root causes through tools such as hypothesis testing and root-cause analysis. Measure characterises the baseline, Improve implements solutions, and Control sustains them.'
      },
      {
        prompt: 'A process improvement team selects a solution by comparing alternatives against weighted criteria. This decision technique is:',
        options: ['A. Pugh matrix', 'B. Control chart', 'C. Gage R&R', 'D. FMEA'],
        answer: 'A',
        explanation: 'A Pugh matrix scores alternatives against weighted criteria to select a solution — the standard decision matrix. Control charts monitor variation, Gage R&R assesses measurement systems, and FMEA analyses failure modes.'
      },
      {
        prompt: 'A black belt wants to detect a small shift in a process mean using ongoing production data. The most appropriate tool is:',
        options: ['A. A control chart, such as an X-bar and R chart', 'B. A histogram of the baseline data', 'C. A Pareto chart', 'D. A cause-and-effect diagram'],
        answer: 'A',
        explanation: 'Control charts monitor process stability over time and detect shifts in the mean — the right tool for ongoing data. Histograms, Pareto charts and cause-and-effect diagrams are descriptive or analysis tools, not ongoing shift detectors.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published BoK, not live exam items.'
  },
  examDay: {
    summary: 'The CSSBB exam is a computer-based, open-book exam of 165 questions (150 scored) in 4 hours 18 minutes, delivered at Prometric centres or through remote proctoring. Bring the required identification and your approved bound reference materials; personal electronics go in the locker. Arrive early — late arrivals forfeit the appointment and fee. Because the exam is open book, organise your binder by BoK section and practise retrieval before the day. Pace at about 1.5 minutes per scored item, and budget extra time for the quantitative items. Your result is reported immediately for computer-based delivery, with the official score report following against the 550/750 passing line. If you fail, ASQ allows retakes at a reduced rate within two years. On a pass, the certification is valid for three years and renews through recertification units (RUs) or retesting per ASQ\'s policy. The afterwards matters: log your RUs as you earn them, because ASQ audits renewals.',
    bring: ['Required identification', 'Approved bound reference materials organised by BoK section', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Unbound notes — references must be securely bound', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, and have your references inspected by the centre.' },
      { time: 'Exam', detail: '165 questions in 4h18m; pace ~1.5 minutes per item, flag and review.' },
      { time: 'After submit', detail: 'Result appears on screen; the score report follows against 550/750.' },
      { time: 'Next', detail: 'Log recertification units across the three-year cycle.' }
    ],
    rules: [
      'The exam is open book; references must be securely bound',
      'No personal electronics in the testing room',
      '165 questions (150 scored) in 4 hours 18 minutes'
    ],
    afterwards: 'On a pass, your CSSBB is valid for three years; earn recertification units (or retest) to renew. On a fail, retake at the reduced rate within two years after additional BoK study.'
  }
};

export default data;
