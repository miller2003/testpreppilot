const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Human resources & people-operations certifications desk',
    bio: 'This desk covers HR certification programs. Exam structure, fees and rules come from the certifying body\'s official pages (HRCI, SHRM), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against HRCI\'s SPHR program pages and certification handbook, and BLS OOH Human Resources Managers (SOC 11-3121), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$141,690 median for human resources managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SPHR" — the Senior Professional in Human Resources credential certifies senior-level, strategy-focused HR competency, and the wage question belongs to the leadership role you perform with it. The closest official BLS occupation is Human Resources Managers, SOC 11-3121, which had a May 2024 median wage of $141,690, with the lowest 10 percent under $84,760 and the highest 10 percent above $241,220. The fit is deliberate: SPHR holders work as HR directors, HR managers, vice presidents of people and senior business-partner leaders, and BLS counted 76,700 human resources manager jobs in 2024, projecting 8 percent growth from 2024 to 2034 with about 6,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the SPHR\'s value is as a signal of strategic-level competency and leadership readiness that employers use for senior roles. Read the number as the relevant market for the roles the credential serves, and remember that HR leadership pay varies strongly by industry, company size and geography.',
    rows: [
      { label: 'Median annual wage, human resources managers', value: '$141,690', note: 'BLS OOH, SOC 11-3121, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $84,760', note: 'BLS OOH, SOC 11-3121, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $241,220', note: 'BLS OOH, SOC 11-3121, May 2024' },
      { label: 'Median, human resources specialists (entry track)', value: '$71,320', note: 'BLS OOH, SOC 13-1071, May 2024' }
    ],
    growth: 'BLS projects 8 percent growth for human resources managers from 2024 to 2034, about 6,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Human Resources Managers', url: 'https://www.bls.gov/ooh/management/human-resources-managers.htm' }
  },
  passRate: {
    headline: 'HRCI reports pass rates — roughly 76% for the SPHR in recent published data — with the caveat that they combine first-time and repeat takers',
    summary: 'HRCI publishes pass-rate figures in its annual reporting, and the most recent published SPHR figure is roughly 76 percent, with the same caveat that applies to all HRCI numbers: the figure combines first-time and repeat candidates rather than isolating first attempts. We present it as the regulator\'s own reporting, with that caveat stated. What HRCI also publishes is the format: the SPHR exam contains 115 questions — 90 scored and 25 unscored pretest items — with a 2-hour time limit (plus about 30 minutes of administrative time), delivered by computer at Pearson VUE centres or through remote proctoring, with a scaled passing score of 500 on the 200-700 scale. The exam content follows the HRCI senior-level outline, organised around strategic business management, workforce planning and employment, human resource development, total rewards, employee and labor relations, and risk management — written at the level of strategy and policy rather than day-to-day operations. The practical reading: the published rate is informative but not a planning tool; what drives outcomes is coverage of the strategic functional areas and the senior-level judgement the SPHR rewards.',
    source: { label: 'HRCI - Senior Professional in Human Resources (SPHR) program', url: 'https://www.hrci.org/our-programs/our-certifications/sphr' },
    caveat: 'HRCI\'s published pass rates combine first-time and repeat takers; treat the figure as directional reporting rather than a first-attempt probability.'
  },
  studyPlan: {
    summary: 'The SPHR is a 2-hour, 115-question exam (90 scored) with a scaled passing score of 500, and its curriculum is the HRCI senior-level outline: Strategic Business Management, Workforce Planning and Employment, Human Resource Development, Total Rewards, Employee and Labor Relations, and Risk Management, weighted toward strategy and policy. A defensible plan runs 80 to 120 hours over 8 to 12 weeks. Weeks 1-3 build the framework: work each functional area with a strategy lens — what the senior HR leader does at the organizational level rather than the operational level — and build the legal and risk-management timeline. Weeks 4-7 shift to application: work scenario practice in volume, especially strategic items about organization design, workforce strategy, risk and executive consultation. Weeks 8-10 add timed practice exams at the real format, at least two full simulations, reviewing every miss against the outline. The final two weeks are targeted re-study of weak areas plus a final mock. Because the exam tests the law and practice in effect at testing, use current-year materials and confirm the outline version at registration. Candidates coming from the PHR should spend the extra time on strategic and risk items, which the PHR underweights.',
    totalHours: '80-120 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Senior functional-area framework', tasks: ['Work the six senior-level functional areas', 'Build the legal, compliance and risk timeline', 'Take notes with a strategy lens'], hours: 35 },
      { label: 'Weeks 4-7', focus: 'Strategic scenario practice', tasks: ['Work scenario items on strategy, workforce planning and risk', 'Practise the executive reasoning chain', 'Fill gaps surfaced by practice'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full timed practice exams at the real format', 'Review every miss against the outline', 'Re-study weak areas'], hours: 30 },
      { label: 'Weeks 11-12', focus: 'Final polish', tasks: ['One final full mock', 'Final pass over strategy and risk items', 'Schedule the exam'], hours: 15 }
    ],
    variants: [
      { label: 'PHR already earned', detail: 'Skip the operational foundation; spend the time on strategic and risk scenarios.' },
      { label: 'First certification', detail: 'Add 2 weeks of HR-law and functional foundation before the senior lens.' }
    ]
  },
  prepStrategies: {
    summary: 'The SPHR is a strategy-and-policy exam, so the dominant strategy is to study the functional areas at the organizational level: what the senior HR leader decides, delegates and owns, rather than how the operational task is executed. Second, build the legal and risk-management timeline and drill it, because risk and compliance items are a distinct SPHR block and reward precise knowledge of laws, thresholds and liability exposure. Third, practise the strategic scenario chain: read the situation, identify the functional area, map the stakeholders, evaluate options by alignment with organizational strategy and outcomes. Fourth, use current materials — the exam tests law and practice in effect at testing — and confirm the outline version at registration. Fifth, take at least two full timed simulations, because the 2-hour window for 90 scored items is tight and the senior-level scenarios are reading-heavy. Finally, use the official HRCI resources: the senior-level exam content outline is free and authoritative, and HRCI\'s practice exams are the closest item style.',
    items: [
      { title: 'Study at the strategy level', detail: 'What senior HR decides and owns, not how the operational task is executed.' },
      { title: 'Drill the risk timeline', detail: 'Risk and compliance is a distinct block; master the laws, thresholds and exposure.' },
      { title: 'Train the strategic scenario chain', detail: 'Situation → functional area → stakeholders → strategy alignment → outcomes.' },
      { title: 'Use current materials', detail: 'The exam tests law and practice in effect at testing.' },
      { title: 'Run two timed simulations', detail: '90 scored items in 2 hours with reading-heavy scenarios; pace is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'SPHR prep mirrors the PHR market: the HRCI exam content outline is free and authoritative, HRCI sells practice exams and digital study bundles, and third-party providers sell courses, books and question banks from roughly $100 to $900. The one difference is the senior lens: look for materials that label their scenarios at the strategic level, because reusing PHR-level operational scenarios under-prepares the SPHR\'s strategy-and-risk emphasis. A book-plus-question-bank combination often matches a video course at lower cost for this exam, since the content is framework-heavy. Free resources include the outline, HRCI sample questions and HR-community study groups. A realistic total budget is $300 to $1,500 including the exam fee ($495) and the application fee ($100, nonrefundable). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'HRCI senior exam content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'HRCI practice exams', values: ['$50-$150', 'Online practice items', 'The closest official item style'] },
      { label: 'Major prep provider courses', values: ['$300-$900', 'Live or self-paced courses + materials', 'Structured learners at the senior level'] },
      { label: 'Study guide books', values: ['$50-$150', 'Printed or digital book', 'Self-directed coverage of the outline'] },
      { label: 'Question banks', values: ['$100-$300', 'Online practice with explanations', 'Strategic scenario volume'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the SPHR exam fee is $495 plus a $100 application fee; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SPHR mistake is studying at the operational level: candidates who prepare with PHR-style materials answer the exam\'s strategy-and-policy items with task-level reasoning and miss the senior judgement the exam rewards. The fix is a strategy lens on every functional area. The second mistake is under-preparing the risk and compliance block, which is a distinct senior-level emphasis and rewards precise legal knowledge. Third, candidates waste effort trying to identify the 25 pretest questions; they are indistinguishable, so answer all 115 as scored. Fourth, many candidates skip full timed simulations and misjudge the pace of 90 scored items in 2 hours with reading-heavy scenarios. Fifth, some candidates answer strategic items from their own company\'s practice instead of the framework\'s best response — at the senior level this is tempting because experience is real, but the exam wants the framework answer. Finally, using prior-year materials costs points on law items that reflect practice in effect at testing.',
    items: [
      { mistake: 'Preparing at the operational level', fix: 'Study strategy and policy: what senior HR decides and owns.' },
      { mistake: 'Under-preparing risk and compliance', fix: 'Drill the risk timeline; it is a distinct senior-level block.' },
      { mistake: 'Trying to spot pretest items', fix: '25 of 115 are unscored but indistinguishable; answer all as scored.' },
      { mistake: 'Skipping timed simulations', fix: '90 scored items in 2 hours; run two full simulations.' },
      { mistake: 'Answering from company practice', fix: 'Apply the framework\'s best response, not one employer\'s habits.' }
    ]
  },
  questionTypes: {
    summary: 'The SPHR is a multiple-choice exam with knowledge items and scenario items, written at the strategy-and-policy level. The functional areas are Strategic Business Management, Workforce Planning and Employment, Human Resource Development, Total Rewards, Employee and Labor Relations, and Risk Management, with a distinct emphasis on strategy, workforce planning and risk that separates the SPHR from the PHR. Knowledge items test definitions, legal requirements and framework concepts; scenario items describe organizational situations and ask for the correct senior-level response. Samples below are editor-written illustrations of the published HRCI senior outline, not live exam items; they show the strategic shape of the real items.',
    types: [
      { name: 'Knowledge / compliance items', share: 'Roughly half', detail: 'Legal requirements, thresholds, definitions and framework concepts.' },
      { name: 'Strategic scenario items', share: 'Roughly half', detail: 'Organization-level situations with the correct senior HR response.' }
    ],
    samples: [
      {
        prompt: 'The organization is entering a new market and asks HR to advise on the talent strategy. The best first step under the HRCI framework is to:',
        options: ['A. Post open roles as they are approved', 'B. Align the workforce plan with the market-entry strategy, then assess capability gaps', 'C. Benchmark competitor salaries', 'D. Defer planning until the market entry is complete'],
        answer: 'B',
        explanation: 'Senior HR practice starts from strategy: the workforce plan is aligned with the market-entry strategy, then capability gaps are assessed before hiring begins. Posting roles first, benchmarking pay in isolation, or deferring each skip the strategic alignment step.'
      },
      {
        prompt: 'An organization faces a significant compliance finding regarding overtime classification. The senior HR response should prioritise:',
        options: ['A. Reclassifying only the employees involved', 'B. A compliance assessment, corrective action plan, and communication of the resolution', 'C. Disputing the finding to avoid cost', 'D. Waiting for the regulator\'s next step'],
        answer: 'B',
        explanation: 'Senior HR practice responds to compliance findings with an assessment, a corrective plan and clear communication — addressing the exposure and preventing recurrence. Partial reclassification, disputing without analysis, or waiting each leave the organization exposed.'
      },
      {
        prompt: 'The CEO asks HR to improve retention of high-potential leaders. The best evidence-based approach is to:',
        options: ['A. Increase pay across the board', 'B. Diagnose the drivers of voluntary turnover and design targeted interventions', 'C. Conduct exit interviews after resignations', 'D. Offer more vacation time'],
        answer: 'B',
        explanation: 'Evidence-based retention work begins with diagnosis — understanding the drivers of voluntary turnover — then designs targeted interventions. Across-the-board pay, reactive exit interviews or generic perks treat symptoms without diagnosis.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published HRCI senior outline, not live exam items.'
  },
  examDay: {
    summary: 'The SPHR is a computer-based exam at a Pearson VUE centre or through remote proctoring, with 115 questions (90 scored) and a 2-hour testing window plus roughly 30 minutes of administrative time. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 80 seconds per scored item, flag uncertain items for review, and answer the 25 pretest items at the same pace. You receive your scaled score immediately for computer-based delivery (200-700 scale, passing 500), with official results following. If you fail, retake per HRCI rules. On a pass, the credential is valid for three years and requires 60 recertification credits (including a minimum in business management and HR law) or a retake to renew. The afterwards matters: log your recertification credits as you earn them, because HRCI audits renewals.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '115 questions in 2 hours; pace ~80 seconds per scored item, flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Log your recertification credits as you earn them over the three-year cycle.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '2 hours for 115 questions; the clock does not pause',
      '25 of 115 questions are pretest items and do not count'
    ],
    afterwards: 'On a pass, your SPHR is valid for three years; earn 60 recertification credits (or retake) to renew. On a fail, retake per HRCI rules after additional senior-outline study.'
  }
};

export default data;
