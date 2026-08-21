const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Human resources & people-operations certifications desk',
    bio: 'This desk covers HR certification programs. Exam structure, fees and rules come from the certifying body\'s official pages (SHRM, HRCI), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against SHRM\'s SHRM-SCP exam pages and exam options page, and BLS OOH Human Resources Managers (SOC 11-3121), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$141,690 median for human resources managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SHRM-SCP" — the Senior Certified Professional credential certifies senior-level HR competency, and the wage question belongs to the leadership role you perform with it. The closest official BLS occupation is Human Resources Managers, SOC 11-3121, which had a May 2024 median wage of $141,690, with the lowest 10 percent under $84,760 and the highest 10 percent above $241,220. The fit is deliberate: SHRM-SCP holders work as HR directors, HR managers, heads of people operations and senior business-partner leaders, and BLS counted 76,700 human resources manager jobs in 2024, projecting 8 percent growth from 2024 to 2034 with about 6,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as a signal of strategic-level competency that employers use for senior roles; the SHRM-SCP is explicitly positioned above the SHRM-CP for candidates with executive-level responsibilities, so it benchmarks against the management series rather than the specialist series. Read the number as the relevant market for the roles the credential serves, and remember that HR leadership pay varies strongly by industry and company size.',
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
    headline: 'SHRM publishes no official pass rate; reported testing-window figures for the SHRM-SCP cluster in the mid-60s',
    summary: 'SHRM does not publish official cohort pass rates for the SHRM-SCP, and the figures that circulate in the HR community come from SHRM\'s annual testing-window reporting and third-party estimates; we treat them as directional, not authoritative. What SHRM does publish is the format and scoring: the SHRM-SCP exam has 134 questions — 80 knowledge-based and 54 situational-judgment items, of which 24 are field-test items that do not count — in two sections totalling 3 hours 40 minutes of testing, with a scaled passing score of 200 on SHRM\'s 120-200 scale. The defining feature, as with the SHRM-CP, is the situational-judgment mix — roughly 40 percent of items have no single textbook answer — but the SCP items are written at the senior level: strategy, organization design, workforce planning and executive influence rather than day-to-day operations. The structural point that matters: the SCP and CP share the same item counts and timing, and the difference is the level of the scenarios and the candidate\'s documented seniority, so preparation must include senior-level judgement practice. Treat reported pass rates as context, and let the item mix and level drive your study plan.',
    source: { label: 'SHRM - SHRM-SCP exam format and options', url: 'https://www.shrm.org/credentials/certification/shrm-scp' },
    caveat: 'SHRM publishes the format and scoring but no official pass rate; figures circulating online are testing-window reporting or third-party estimates.'
  },
  studyPlan: {
    summary: 'The SHRM-SCP is a 134-question exam in two 110-minute testing sections, built on the same SHRM BASK as the SHRM-CP — nine behavioural competencies and three knowledge domains (People, Organization, Workplace) — but written at the senior level: the scenarios test strategy, change management, organization design and executive consultation. A defensible plan runs 80 to 120 hours over 8 to 12 weeks. Weeks 1-3 build the framework with a senior lens: work the BASK through a study guide, and take notes that map each competency to senior-level activities rather than operational tasks. Weeks 4-7 shift to senior-level situational-judgment drilling: work scenario items in volume and practise the reasoning chain — situation, stakeholder set, options, likely outcomes — at the executive level. Weeks 8-10 add timed practice exams at the real format, at least two full simulations, reviewing every miss against the BASK. The final two weeks are targeted re-study of weak competencies plus a final mock. Because the exam tests the law and practice in effect at testing, use current-year materials and confirm the window format at registration. Candidates coming from the SHRM-CP should spend the extra time on strategy-level scenarios, which the CP paper underweights.',
    totalHours: '80-120 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'BASK at the senior level', tasks: ['Work the competencies and domains with a strategy lens', 'Map each competency to senior-level activities', 'Build an organization-design and workforce-planning framework'], hours: 35 },
      { label: 'Weeks 4-7', focus: 'Senior SJT drilling', tasks: ['Work strategy-level scenario items in volume', 'Practise the situation-to-outcome reasoning chain', 'Fill knowledge gaps surfaced by practice'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full timed practice exams at the real format', 'Review every miss against the BASK', 'Re-study weak competencies'], hours: 30 },
      { label: 'Weeks 11-12', focus: 'Final polish', tasks: ['One final full mock', 'Final review of strategy-heavy items', 'Schedule the exam window'], hours: 15 }
    ],
    variants: [
      { label: 'SHRM-CP already earned', detail: 'Skip the framework phase; spend the time on senior-level SJT volume and simulations.' },
      { label: 'First certification', detail: 'Add 2 weeks of BASK foundation before the senior lens; the level builds on the framework.' }
    ]
  },
  prepStrategies: {
    summary: 'The defining SHRM-SCP strategy is to train the senior-level judgement chain: read the scenario, identify the competency it tests, map the stakeholder set, evaluate options by likely outcomes and alignment with the organization\'s strategy, and justify the choice — because the SJT items, roughly 40 percent of the exam, reward executive-level reasoning. Second, balance the curriculum exactly as the BASK prescribes: half the items sit in the behavioural competencies (Leadership, Business Acumen, Strategic Thinking, Consultation) and half in the knowledge domains, so a plan that studies only one half fails the other. Third, use the official SHRM Learning System, the only resource built from the actual BASK; pair it with a senior-level question bank, because the level of the scenarios is what separates the SCP from the CP. Fourth, stay current on employment law and workplace trends, because the exam reflects practice in effect at testing. Fifth, take at least two full timed simulations: the two-section format and 3 hours 40 minutes of stamina are part of the test, and senior candidates are just as vulnerable to fatigue as junior ones.',
    items: [
      { title: 'Train the senior judgement chain', detail: 'Situation → competency → stakeholder set → outcomes → strategy fit; 40% of items are SJT.' },
      { title: 'Balance competencies and domains', detail: 'Half behavioural competencies, half knowledge domains — a one-sided plan fails half the exam.' },
      { title: 'Use the Learning System plus a senior bank', detail: 'Official BASK mapping plus scenario volume at the SCP level.' },
      { title: 'Stay current', detail: 'The exam reflects law and practice in effect at testing.' },
      { title: 'Run two full simulations', detail: 'The two-section stamina is part of the test at every level.' }
    ]
  },
  resourceComparison: {
    summary: 'SHRM-SCP prep mirrors the SHRM-CP market: the SHRM Learning System is the default official resource and the most expensive option, typically several hundred to over a thousand dollars depending on format; third-party courses and question banks fill out the market at $100 to $900. The one difference is that the SCP requires senior-level scenario practice, so look for a question bank or course that explicitly labels its SJT items at the senior level rather than reusing CP-level scenarios. Free resources include the SHRM BASK outline, the exam specifications and a limited set of sample questions, which are sufficient for orientation but not for passing. A realistic total budget is $500 to $2,500 including the exam fee (roughly $350-$500 depending on membership and timing). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SHRM BASK outline + exam specs', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'SHRM Learning System', values: ['$700-$1,500', 'Books + online learning + practice exams', 'The official BASK-mapped path'] },
      { label: 'Third-party courses', values: ['$300-$900', 'Live or self-paced classes', 'Structured learners at the senior level'] },
      { label: 'Senior-level question banks', values: ['$100-$300', 'Online SJT practice with explanations', 'SCP-level scenario volume'] },
      { label: 'Free sample questions', values: ['$0', 'SHRM sample items', 'Orientation before committing'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; SHRM exam fees vary by membership and timing; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SHRM-SCP mistake is preparing at the wrong level: candidates reuse CP-style study plans and answer the SCP\'s strategy-level scenarios with operational reasoning, missing the executive judgement the exam rewards. The fix is senior-level SJT practice from the start. The second mistake is studying only the knowledge domains and neglecting the behavioural competencies, which anchor half the exam. Third, candidates waste effort trying to identify the 24 field-test items; they are indistinguishable, so treat all 134 as scored. Fourth, many candidates skip full timed simulations and underestimate the stamina of two 110-minute sections. Fifth, some candidates answer SJT items from their own company\'s habits instead of the BASK best-response framework, which is particularly tempting at the senior level where experience is real — but the exam wants the framework answer. Finally, using outdated materials costs points on law questions, which reflect practice in effect at testing.',
    items: [
      { mistake: 'Preparing at the CP level', fix: 'Drill strategy-level scenarios; the SCP rewards executive judgement, not operations.' },
      { mistake: 'Neglecting the competencies', fix: 'Half the exam is behavioural competencies; train Leadership, Acumen and Consultation.' },
      { mistake: 'Trying to identify field-test items', fix: '24 of 134 are unscored but indistinguishable; answer all as scored.' },
      { mistake: 'Skipping timed simulations', fix: 'Two full simulations; the two-section stamina is part of the test.' },
      { mistake: 'Answering from company habits', fix: 'Apply the BASK best-response framework, not one employer\'s practice.' }
    ]
  },
  questionTypes: {
    summary: 'The SHRM-SCP contains the same two item types as the SHRM-CP — knowledge items across the People, Organization and Workplace domains, and situational-judgment items — but the SJT scenarios are written at the senior level: organization design decisions, workforce strategy, change leadership, executive consultation and multi-stakeholder problems. Roughly 40 percent of items are SJT, and the SCP variants reward the reasoning that aligns with the SHRM competency model at the strategic level. Knowledge items test definitions, legal requirements and framework concepts. Samples below are editor-written illustrations of the published BASK at the senior level, not live exam items; they show the strategic shape of the real items.',
    types: [
      { name: 'Knowledge-based items', share: 'Roughly 60%', detail: 'Factual content across People, Organization and Workplace at the senior level.' },
      { name: 'Senior situational-judgment items', share: 'Roughly 40%', detail: 'Strategy-level scenarios with the best-response choice under the competency model.' }
    ],
    samples: [
      {
        prompt: 'The organization is restructuring and asks HR to lead the workforce-planning effort. The best first step under the SHRM framework is to:',
        options: ['A. Announce the structure and post the new roles', 'B. Align workforce planning with the organization\'s strategy, then assess current and future capability gaps', 'C. Reduce headcount based on tenure', 'D. Defer planning until the budget is final'],
        answer: 'B',
        explanation: 'The framework-anchored response begins with strategic alignment: workforce planning starts from the strategy and assesses current versus future capability needs. Announcing first, cutting by tenure, or deferring all skip the analytical first step the situation requires.'
      },
      {
        prompt: 'A business unit leader asks HR to support a culture-change initiative. Under the SHRM competency model, the most effective HR contribution is to:',
        options: ['A. Draft a new values statement and distribute it', 'B. Act as a consultant who connects the change to strategy, stakeholders and measurable outcomes', 'C. Schedule training sessions and track attendance', 'D. Approve the initiative and monitor reports'],
        answer: 'B',
        explanation: 'At the senior level, HR contributes as a strategic consultant: linking the change to business strategy, engaging stakeholders and defining measurable outcomes. A values poster, attendance-tracked training, or passive approval treats a culture change as an event rather than a transformation.'
      },
      {
        prompt: 'An HR leader is asked to design the senior-succession program. The best practice is to:',
        options: ['A. Identify internal candidates and keep the list confidential from the board', 'B. Link succession to strategic capability needs, assess readiness, and develop identified successors', 'C. Hire external successors only', 'D. Rely on managers to nominate informally'],
        answer: 'B',
        explanation: 'Effective succession planning ties to strategic capability needs, assesses readiness and actively develops successors. Confidential-only lists, external-only hiring and informal nominations each lack the systematic, strategy-linked approach the framework requires.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published BASK at the senior level, not live exam items.'
  },
  examDay: {
    summary: 'The SHRM-SCP is a computer-based exam at an authorized testing centre or via remote proctoring, in two sections of 1 hour 50 minutes each (3 hours 40 minutes of testing, about four hours total including the tutorial and administrative time). Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. The exam has 134 questions with 24 field-test items that do not count; pace at roughly 1.5 minutes per item and use the short break between sections to reset. You receive your scaled score on screen for computer-based delivery, with official results following by email. If you fail, retake in a future testing window. On a pass, the credential is valid for three years and requires 60 professional development credits (PDCs) or a retake to renew. The afterwards matters: log your PDCs as you earn them, because SHRM audits renewals.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation', 'Comfortable clothing for a four-hour appointment'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Section 1', detail: '1h50m of items; pace ~1.5 minutes per item, flag and review.' },
      { time: 'Break', detail: 'Short break between sections; do not discuss exam content in the waiting area.' },
      { time: 'Section 2', detail: '1h50m of items; finish and confirm submission.' },
      { time: 'Afterwards', detail: 'Scaled score appears on screen; official results follow by email.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'Two 110-minute sections; the clock runs per section',
      '24 of 134 questions are field-test items and do not count'
    ],
    afterwards: 'On a pass, your SHRM-SCP is valid for three years; earn 60 PDCs (or retake) to renew. On a fail, retake in a future testing window after additional senior-level BASK study.'
  }
};

export default data;
