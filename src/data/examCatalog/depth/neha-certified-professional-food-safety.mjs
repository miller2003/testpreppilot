const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Food safety & hospitality certifications desk',
    bio: 'This desk covers food-safety and hospitality credentials. Exam structure, fees and rules come from the certifying body\'s official pages (NEHA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NEHA Certified Professional - Food Safety (CP-FS) program pages and BLS OOH Food Service Managers (SOC 35-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$66,860 median for food service managers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CP-FS" — the NEHA Certified Professional - Food Safety credential validates food-safety management and inspection knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Food Service Managers, SOC 35-2021, which had a May 2024 median wage of $66,860, with the lowest 10 percent under $41,450 and the highest 10 percent above $112,000, with the food-safety inspection roles served by this credential tracking the regulatory side of the food industry. The fit is direct: CP-FS holders work as food-safety managers, quality-assurance specialists and inspectors in foodservice, retail food and manufacturing, and the credential is recognised in the food-safety professional community. BLS counted 286,100 food service manager jobs in 2024 and projects 3 percent growth from 2024 to 2034, with about 27,700 openings a year, nearly all replacement demand. The limitation to state plainly: the BLS median covers all food service managers, credentialed or not, and the credential carries no wage premium in government data; its value is as a recognised food-safety competency signal that employers in food safety and QA use in hiring. Read the number as the market for the food-safety and foodservice-management roles the credential serves.',
    rows: [
      { label: 'Median annual wage, food service managers', value: '$66,860', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $41,450', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $112,000', note: 'BLS OOH, SOC 35-2021, May 2024' },
      { label: 'Projected openings per year', value: '~27,700', note: 'BLS OOH, SOC 35-2021, 2024-2034' }
    ],
    growth: 'BLS projects 3 percent growth for food service managers from 2024 to 2034, about 27,700 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Food Service Managers', url: 'https://www.bls.gov/ooh/management/food-service-managers.htm' }
  },
  passRate: {
    headline: 'NEHA publishes no pass rate — the CP-FS exam is 125 questions in 3 hours, with the result reported as pass/fail',
    summary: 'NEHA does not publish cohort pass rates for the Certified Professional - Food Safety exam, and third-party estimates are not official data, so we do not treat them as authoritative. What NEHA does publish is the format: the CP-FS exam has 125 multiple-choice questions with a 3-hour time limit, delivered by computer at a testing centre or through remote proctoring, and the result is reported as pass/fail. The exam content follows the published CP-FS body of knowledge: food safety and microbiology, foodborne illness and outbreak investigation, the food-safety regulations and standards, the HACCP system, the facility design and sanitation, and the retail and foodservice operations. The absence of a published pass rate is not an absence of standards: the 125-question format rewards a broad, professional-level knowledge of food safety, and the credential is positioned above the manager-level food-safety certifications, serving food-safety professionals rather than entry-level managers. The practical reading: the CP-FS is a professional credential, and preparation uses the NEHA review materials and the body of knowledge, with the recognition that candidates typically hold food-safety experience before sitting.',
    source: { label: 'NEHA - Certified Professional - Food Safety (CP-FS)', url: 'https://www.neha.org/certifications/food-safety' },
    caveat: 'NEHA publishes the format but no cohort pass rate; the CP-FS is a professional-level credential.'
  },
  studyPlan: {
    summary: 'The CP-FS exam is a 125-question, 3-hour exam built on the published body of knowledge: food safety and microbiology, foodborne illness and outbreak investigation, the regulations and standards, the HACCP system, facility design and sanitation, and the retail operations. A defensible plan runs 80 to 120 hours over 6 to 8 weeks, assuming food-safety work experience. Weeks 1-2: the microbiology and foodborne-illness material — the pathogens, the illness mechanisms and the outbreak investigation, because the professional-level exam goes deeper than the manager-level certification. Weeks 3-4: the regulations and the HACCP system — the FDA Food Code, the federal and state rules, and the HACCP principles applied to operations. Weeks 5-6: facility design, sanitation and the retail operations — the design and sanitation standards and the retail foodservice practices. Weeks 7-8: the NEHA review materials and practice questions, with timed runs at the real 125-question, 3-hour format. The plan is professional-depth because the CP-FS exceeds the manager-level scope; candidates who prepare with only manager-level materials under-prepare the microbiology and investigation content.',
    totalHours: '80-120 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Microbiology and illness', tasks: ['Pathogens, illness mechanisms and control', 'Foodborne-illness outbreaks and investigation', 'The professional-level depth'], hours: 30 },
      { label: 'Weeks 3-4', focus: 'Regulations and HACCP', tasks: ['The FDA Food Code and the federal rules', 'HACCP principles applied to operations', 'Inspection and compliance'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'Facilities and operations', tasks: ['Facility design and sanitation standards', 'Retail foodservice operations', 'Equipment and environmental sanitation'], hours: 30 },
      { label: 'Weeks 7-8', focus: 'Review and mocks', tasks: ['NEHA review materials and practice questions', 'Two timed practice runs', 'Review weak areas'], hours: 25 }
    ],
    variants: [
      { label: 'Food-safety inspector or QA professional', detail: 'The field experience accelerates the plan; focus study on the exam format and the HACCP depth.' },
      { label: 'Manager-level certified professional', detail: 'Add 2 weeks on the microbiology and investigation content that exceeds the manager scope.' }
    ]
  },
  prepStrategies: {
    summary: 'The CP-FS rewards professional-level food-safety knowledge, so the dominant strategy is studying the body of knowledge in depth, not just the manager-level content: the exam goes deeper on microbiology, outbreak investigation and HACCP than the manager-level certifications, and candidates who prepare with only manager-level materials under-prepare those sections. Second, master the HACCP material as a system — the seven principles applied to real operations — because it is a distinct and heavily weighted area. Third, use the NEHA review materials and the published body of knowledge as the scope map, and the NEHA practice questions as the item-style reference. Fourth, cover the facility design and sanitation standards, a distinct block that candidates focused on operations often miss. Finally, take at least two timed practice runs at the real 125-question, 3-hour format; the length is part of the test, and the professional-level scenarios are reading-heavy.',
    items: [
      { title: 'Study beyond the manager scope', detail: 'Microbiology, investigation and HACCP depth exceed the manager level.' },
      { title: 'Master HACCP as a system', detail: 'The seven principles applied to operations are a weighted area.' },
      { title: 'Use the NEHA review materials', detail: 'The body of knowledge and practice questions are the scope map.' },
      { title: 'Cover facility design and sanitation', detail: 'A distinct block; operations-only study misses it.' },
      { title: 'Run two timed practice exams', detail: '125 questions in 3 hours; the length is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CP-FS prep spans NEHA\'s official resources and third-party materials. The NEHA CP-FS body of knowledge (free) and the NEHA review course ($300-$600) are the core resources; the NEHA study guide and practice questions add structure. Third-party food-safety texts ($50-$150) cover the microbiology and HACCP depth. The exam fee is about $350-$450 for NEHA members and $400-$500 for non-members. A realistic total budget is $500 to $1,200 including the exam and review materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'CP-FS body of knowledge', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'NEHA review course', values: ['$300-$600', 'Online review course', 'Structured preparation'] },
      { label: 'NEHA study guide + practice questions', values: ['$50-$150', 'Books and online practice', 'The item-style reference'] },
      { label: 'Food-safety texts', values: ['$50-$150', 'Printed or digital books', 'Microbiology and HACCP depth'] },
      { label: 'CP-FS exam', values: ['~$350-$500', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; NEHA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CP-FS mistake is preparing at the manager level: candidates who study the manager-certification content meet the professional-level microbiology, investigation and HACCP items under-prepared, because the CP-FS goes deeper. The fix is body-of-knowledge depth. The second mistake is under-preparing the HACCP system, a distinct weighted area that candidates treat as a list rather than a system. Third, candidates skip the facility design and sanitation standards, a distinct block. Fourth, some candidates never take a timed practice run and underestimate the 125-question, 3-hour length. Finally, candidates without food-safety experience sit without the field context the professional-level scenarios assume; the credential is designed for working professionals, so the experience matters as much as the study.',
    items: [
      { mistake: 'Preparing at the manager level', fix: 'The CP-FS goes deeper; study the professional-level body of knowledge.' },
      { mistake: 'Treating HACCP as a list', fix: 'Master the seven principles as a system applied to operations.' },
      { mistake: 'Skipping facility design and sanitation', fix: 'A distinct block; cover the design and sanitation standards.' },
      { mistake: 'Never timing a practice run', fix: '125 questions in 3 hours; run two timed practice exams.' },
      { mistake: 'Sitting without field experience', fix: 'The credential is for working professionals; the context matters.' }
    ]
  },
  questionTypes: {
    summary: 'The CP-FS exam is a 125-question multiple-choice exam in 3 hours. The items test the professional-level body of knowledge: food safety and microbiology, foodborne illness and outbreak investigation, the regulations and standards, HACCP, facility design and sanitation, and the retail operations — with many scenario items presenting an operation or outbreak situation and asking for the correct analysis, control or action. Samples below are editor-written illustrations of the published body of knowledge, not live exam items; they show the professional-depth style of the real items.',
    types: [
      { name: 'Microbiology and illness items', share: 'Large block', detail: 'Pathogens, control and outbreak investigation.' },
      { name: 'HACCP and regulation items', share: 'Large block', detail: 'The seven principles and the Food Code.' },
      { name: 'Facility and operations items', share: 'Meaningful block', detail: 'Design, sanitation and retail practices.' }
    ],
    samples: [
      {
        prompt: 'A foodborne-illness outbreak is traced to a food handler with an infected wound on their hand. The most likely pathogen and the appropriate control are:',
        options: ['A. Staphylococcus aureus — exclude the handler and enforce hand hygiene and glove use', 'B. Salmonella — cook the food longer', 'C. Norovirus — wash the produce', 'D. Listeria — chill the food'],
        answer: 'A',
        explanation: 'Infected wounds on hands are a classic Staphylococcus aureus source; the control is excluding the ill handler and enforcing hygiene and glove use. The other pathogen-control pairings do not match the described source.'
      },
      {
        prompt: 'Under HACCP, a critical control point (CCP) is a step at which:',
        options: ['A. A control measure can be applied to prevent, eliminate or reduce a hazard to an acceptable level', 'B. Any food is simply stored', 'C. The menu is reviewed', 'D. Staff are scheduled'],
        answer: 'A',
        explanation: 'A CCP is a step where a control can be applied to prevent, eliminate or reduce a hazard to an acceptable level — the HACCP definition. Storage, menu review and scheduling are not CCPs without a hazard-control function.'
      },
      {
        prompt: 'A retail operation must verify that its refrigerated units hold food at the correct temperature. The most appropriate practice is:',
        options: ['A. Monitoring the unit temperatures with calibrated thermometers on a defined schedule', 'B. Checking temperatures only during inspections', 'C. Relying on the unit display', 'D. Never checking'],
        answer: 'A',
        explanation: 'Temperature verification uses calibrated thermometers on a defined monitoring schedule — the standard practice. Inspection-only checks, trusting unit displays or skipping checks each fail the monitoring requirement.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published body of knowledge, not live exam items.'
  },
  examDay: {
    summary: 'The CP-FS exam is a 125-question, 3-hour computer-based exam at a testing centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 86 seconds per item, flag uncertain items for review, and budget time for the reading-heavy scenario items. Your result is reported as pass/fail after the exam, with the official report following. If you do not pass, the NEHA retake policy and fee apply. On a pass, the CP-FS is valid for two years and renewed by earning continuing education credits or retaking. The afterwards matters: log the continuing education as you earn it, because NEHA audits renewals.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '125 questions in 3 hours; pace ~86 seconds per item.' },
      { time: 'After submit', detail: 'Pass/fail is reported; the official report follows.' },
      { time: 'Next', detail: 'Plan the 2-year continuing-education renewal.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '3 hours for 125 questions; the clock does not pause',
      'The certification renews every 2 years with continuing education'
    ],
    afterwards: 'On a pass, your CP-FS is valid for two years; renew with continuing education. On a fail, retake per the NEHA policy after additional study.'
  }
};

export default data;
