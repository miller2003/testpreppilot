const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Skilled trades & automotive certifications desk',
    bio: 'This desk covers ASE and automotive-trade certifications. Exam structure, fees and rules come from the certifying body\'s official pages (ASE), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ASE xEV Level 1 program pages and BLS OOH Automotive Service Technicians (SOC 49-3023), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$55,040 median for automotive service technicians and mechanics (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "ASE xEV" — the ASE xEV Level 1 Electrical Safety certification validates electric-vehicle safety knowledge, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Automotive Service Technicians and Mechanics, SOC 49-3023, which had a May 2024 median wage of $55,040, with the lowest 10 percent under $33,010 and the highest 10 percent above $84,760. The fit is direct: ASE xEV-certified technicians work in auto shops, dealerships and EV-specialist facilities servicing electric and hybrid vehicles, and the certification is the safety gate for working on high-voltage systems. BLS counted 733,900 automotive service technician jobs in 2024 and projects 2 percent growth from 2024 to 2034, with about 62,700 openings a year, almost all replacement demand. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the xEV certification carries no wage premium in government data; its value is employability and safety — EV and hybrid work is growing, and employers in the segment require the high-voltage-safety credential. Read the number as the market for the occupation, with EV-specialist roles typically at or above the median.',
    rows: [
      { label: 'Median annual wage, automotive service technicians', value: '$55,040', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $33,010', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $84,760', note: 'BLS OOH, SOC 49-3023, May 2024' },
      { label: 'Projected openings per year', value: '~62,700', note: 'BLS OOH, SOC 49-3023, 2024-2034' }
    ],
    growth: 'BLS projects 2 percent growth for automotive service technicians from 2024 to 2034, about 62,700 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Automotive Service Technicians and Mechanics', url: 'https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm' }
  },
  passRate: {
    headline: 'ASE publishes no pass rate — the xEV Level 1 exam is 45 scored questions in 60 minutes, with the score reported on ASE\'s scale',
    summary: 'ASE does not publish cohort pass rates for its certification exams, and third-party estimates are not official data, so we do not treat them as authoritative. What ASE does publish is the format: the xEV Level 1 Electrical Safety Awareness exam has 45 scored multiple-choice questions (plus a small number of research items) with a 60-minute time limit, delivered by computer at ASE test centres or through online proctoring, and the result is reported on ASE\'s 0-100 scale with a passing standard set by ASE. The exam content follows the published task list: the hazards of high-voltage systems, the safety procedures for disabling and verifying de-energisation, the personal protective equipment for high-voltage work, and the basic operation of hybrid and electric vehicle systems. The absence of a published pass rate is not an absence of standards: the xEV Level 1 is a safety credential, and the exam validates that a technician can work around high-voltage systems safely. The practical reading: the certification is the industry\'s EV-safety gate, and preparation is studying the published task list and the OEM safety procedures, with the recognition that employers in the EV segment require it before assigning high-voltage work.',
    source: { label: 'ASE - xEV Level 1 Electrical Safety Certification', url: 'https://www.ase.com/Tests/ASE-Tests/xEV-Tests.html' },
    caveat: 'ASE publishes the format and scale but no pass rate; the passing standard is set by ASE.'
  },
  studyPlan: {
    summary: 'The ASE xEV Level 1 exam is a 45-question, 60-minute exam built on the published task list: high-voltage system hazards, the de-energisation and verification procedures, the PPE for high-voltage work, and the basics of hybrid and electric vehicle systems. A defensible plan runs 15 to 30 hours over 2 to 3 weeks. Week one: the high-voltage fundamentals — the system voltages, the shock hazards and the injury mechanisms, and the difference between the high-voltage battery and the 12-volt system. Week two: the safety procedures — the service-disconnect and de-energisation steps, the lockout/tagout practices, the verification of de-energisation and the wait times, and the PPE requirements (insulated gloves, rated tools). Week three: the vehicle systems — the basic hybrid and EV architecture, the high-voltage component locations and the emergency-response considerations — then practice-question drilling and a timed run at the real format. The plan is safety-procedure-heavy because the exam rewards knowing the exact steps and the PPE ratings; candidates who know general EV theory but not the procedures miss the core.',
    totalHours: '15-30 hours over 2-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'High-voltage fundamentals', tasks: ['System voltages and shock hazards', 'The high-voltage vs 12-volt systems', 'Injury mechanisms and first response'], hours: 8 },
      { label: 'Week 2', focus: 'Safety procedures', tasks: ['Service disconnect and de-energisation', 'Lockout/tagout and verification', 'PPE: insulated gloves and rated tools'], hours: 10 },
      { label: 'Week 3', focus: 'Systems and drill', tasks: ['Hybrid and EV architecture basics', 'Practice-question drilling', 'One timed run at the real format'], hours: 8 }
    ],
    variants: [
      { label: 'Working auto technician', detail: 'The shop context accelerates the plan; focus study on the exact PPE ratings and verification steps.' },
      { label: 'New to EVs', detail: 'Add 1-2 weeks of EV architecture fundamentals before the safety-procedure phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The xEV Level 1 exam rewards precise knowledge of the safety procedures, so the dominant strategy is mastering the exact steps and ratings: the service-disconnect sequence, the de-energisation verification, the wait times and the PPE specifications (insulated glove class and rating, rated tools), because the exam tests them precisely. Second, use the published task list as the scope map and the ASE practice tests as the item-style reference. Third, learn the high-voltage fundamentals deeply enough to apply them: knowing where the high-voltage components are, how the system can hold a charge after shutdown, and why verification matters is the core of the safety role. Fourth, study the OEM procedures for the vehicles you work on, because the ASE credential is the base and the OEM manuals add the specifics. Finally, take at least one timed practice run at the real 45-question, 60-minute format; the pace is part of the test.',
    items: [
      { title: 'Master the exact procedures', detail: 'Disconnect, verify, wait times and PPE ratings are tested precisely.' },
      { title: 'Use the task list and practice tests', detail: 'The published scope and the closest item style.' },
      { title: 'Learn the fundamentals to apply them', detail: 'Where high-voltage lives and why verification matters.' },
      { title: 'Study the OEM procedures', detail: 'The ASE credential is the base; the OEM manuals add specifics.' },
      { title: 'Run one timed practice exam', detail: '45 questions in 60 minutes; practise the pace.' }
    ]
  },
  resourceComparison: {
    summary: 'ASE xEV prep is inexpensive because the exam and the study materials are modest. The ASE task list (free) and the ASE practice tests (about $15 each) are the core resources; ASE\'s xEV study guide ($50-$100) covers the safety material in depth. The exam fee is about $55-$65 per ASE test registration, with the xEV tests priced at the standard ASE test rate. Many employers in the EV segment fund the certification for their technicians. A realistic total budget is $100 to $250 including the exam and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ASE xEV task list', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'ASE xEV study guide', values: ['$50-$100', 'Printed or digital book', 'The safety material in depth'] },
      { label: 'ASE practice tests', values: ['~$15', 'Official online practice', 'The closest official item style'] },
      { label: 'OEM service manuals', values: ['Varies', 'Manufacturer documentation', 'The vehicle-specific procedures'] },
      { label: 'xEV exam', values: ['~$55-$65', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; ASE test fees vary; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common xEV Level 1 mistake is studying EV theory instead of the safety procedures: candidates who know how EVs work but not the de-energisation steps or PPE ratings fail the exam, which is a safety credential, not a technology exam. The fix is procedure-first study. The second mistake is misremembering the PPE specifications — the glove class and voltage rating and the tool ratings — which the exam tests precisely. Third, candidates underestimate the danger of residual charge and skip the verification material; the exam rewards knowing that a system can hold a lethal charge after shutdown. Fourth, some candidates never take a timed practice run and misjudge the 60-minute pace. Finally, treating the certification as a general EV credential instead of the safety gate it is misses its purpose; the xEV Level 1 is the prerequisite for high-voltage work, and the Level 2 technician certification builds on it.',
    items: [
      { mistake: 'Studying theory, not procedures', fix: 'The exam is a safety credential; master the steps and ratings.' },
      { mistake: 'Misremembering PPE specs', fix: 'Glove class, voltage rating and tool ratings are tested precisely.' },
      { mistake: 'Underestimating residual charge', fix: 'A system can hold a lethal charge after shutdown; verification matters.' },
      { mistake: 'Skipping timed practice', fix: '45 questions in 60 minutes; run a timed practice exam.' },
      { mistake: 'Treating it as a general EV credential', fix: 'It is the safety gate; the Level 2 builds on it.' }
    ]
  },
  questionTypes: {
    summary: 'The xEV Level 1 exam is a 45-question multiple-choice exam in 60 minutes. The items test the published task list: high-voltage hazards, the de-energisation and verification procedures, the PPE requirements and the hybrid/EV system basics — with a heavy concentration on the exact safety steps and ratings. Samples below are editor-written illustrations of the published task list, not live exam items; they show the safety-procedure style of the real items.',
    types: [
      { name: 'Safety-procedure items', share: 'Largest block', detail: 'Disconnect, verification and lockout/tagout steps.' },
      { name: 'PPE and hazard items', share: 'Large block', detail: 'Glove ratings, tool ratings and shock hazards.' },
      { name: 'System-knowledge items', share: 'Meaningful block', detail: 'High-voltage components and vehicle architecture.' }
    ],
    samples: [
      {
        prompt: 'Before working on the high-voltage system of a hybrid vehicle, the technician must first:',
        options: ['A. Disable the high-voltage system and verify de-energisation', 'B. Disconnect the 12-volt battery only', 'C. Begin working immediately', 'D. Drain the fuel tank'],
        answer: 'A',
        explanation: 'The safety procedure requires disabling the high-voltage system and verifying de-energisation before work — the core of the xEV safety process. The 12-volt disconnect alone, immediate work or fuel draining each fail the requirement.'
      },
      {
        prompt: 'When performing high-voltage work, the technician\'s insulated gloves must be:',
        options: ['A. Rated for the system voltage and inspected before use', 'B. Any work gloves', 'C. Rubber dish gloves', 'D. Skipped if the work is quick'],
        answer: 'A',
        explanation: 'High-voltage work requires insulated gloves rated for the system voltage, with the pre-use inspection that the rating and condition require. Unrated gloves, dish gloves or skipping them each fail the PPE standard.'
      },
      {
        prompt: 'After the high-voltage system is disabled, the technician should verify de-energisation by:',
        options: ['A. Measuring the absence of voltage with a rated meter', 'B. Touching the components to test them', 'C. Trusting the system label', 'D. Skipping verification'],
        answer: 'A',
        explanation: 'De-energisation is verified by measuring the absence of voltage with a meter rated for the system — the standard verification step. Touch-testing, trusting labels or skipping verification each fail the safety procedure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published task list, not live exam items.'
  },
  examDay: {
    summary: 'The ASE xEV Level 1 exam is a 45-question, 60-minute computer-based exam at an ASE test centre or through online proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 80 seconds per item, flag uncertain items for review, and finish with time to spare. Your result is reported after the exam, with the official score report following on ASE\'s scale. If you do not pass, the ASE retake policy and fee apply. On a pass, the xEV Level 1 certification is valid for five years, like the other ASE certifications, and renewed by passing the current recertification exam. The afterwards matters: record the five-year validity date, and plan the xEV Level 2 technician certification as the next step if your work involves high-voltage repair.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '45 questions in 60 minutes; pace ~80 seconds per item.' },
      { time: 'After submit', detail: 'Result is reported; the official score report follows.' },
      { time: 'Next', detail: 'Record the 5-year validity and plan the Level 2 step.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '60 minutes for 45 questions; the clock does not pause',
      'The certification is valid 5 years, renewed by recertification exam'
    ],
    afterwards: 'On a pass, your xEV Level 1 is valid for five years; renew by the recertification exam. On a fail, retake per the ASE policy after additional safety-procedure study.'
  }
};

export default data;
