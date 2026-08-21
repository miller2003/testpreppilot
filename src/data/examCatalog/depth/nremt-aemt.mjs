const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied-health & clinical-support certifications desk',
    bio: 'This desk covers EMS and allied-health certifications. Exam structure, fees and rules come from the certifying body\'s official pages (NREMT, state agencies), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against NREMT\'s Advanced EMT certification pages and BLS OOH EMTs and Paramedics (SOC 29-2041), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$46,350 median for EMTs and paramedics (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Advanced EMT" — the NREMT AEMT certification validates the intermediate EMS level, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is EMTs and Paramedics, SOC 29-2041, which had a May 2024 median wage of $46,350, with the lowest 10 percent under $30,970 and the highest 10 percent above $65,260. The fit is direct: AEMT-certified providers work on ambulances and in emergency settings between the EMT and paramedic levels, and BLS counts the levels as one occupation, so the median blends them; the AEMT typically earns between the EMT and paramedic rates within the combined series. BLS counted 273,100 EMT and paramedic jobs in 2024 and projects 8 percent growth from 2024 to 2034, faster than the average for all occupations, with about 27,300 openings a year. The limitation to state plainly: BLS reports the levels as one occupation, so no government series isolates the AEMT wage, and paramedic-specific figures come from employer surveys rather than government data; read the number as the market for the occupation, with the AEMT between the two levels.',
    rows: [
      { label: 'Median annual wage, EMTs and paramedics', value: '$46,350', note: 'BLS OOH, SOC 29-2041, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $30,970', note: 'BLS OOH, SOC 29-2041, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $65,260', note: 'BLS OOH, SOC 29-2041, May 2024' },
      { label: 'Projected openings per year', value: '~27,300', note: 'BLS OOH, SOC 29-2041, 2024-2034' }
    ],
    growth: 'BLS projects 8 percent growth for EMTs and paramedics from 2024 to 2034, about 27,300 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - EMTs and Paramedics', url: 'https://www.bls.gov/ooh/healthcare/emts-and-paramedics.htm' }
  },
  passRate: {
    headline: 'NREMT publishes pass rates by certification level and education pathway — the AEMT pass rate is published and sits below the EMT level',
    summary: 'The National Registry of Emergency Medical Technicians publishes aggregate pass-rate data by certification level and education pathway in its annual reports, and the AEMT first-attempt pass rate has historically been the lowest or among the lowest of the NREMT levels in recent published cycles — typically in the mid-50s to low-60s percent range, with the figure varying by pathway and year. We present this as NREMT\'s own reporting and note that the exact number changes each cycle. The cognitive exam itself is a computer-adaptive test: the AEMT exam delivers roughly 100-110 questions in up to 2 hours, adapting to the candidate\'s performance, and the passing standard is set psychometrically. Certification also requires passing the psychomotor examination through an approved pathway and meeting the education and clinical requirements. The practical reading of the published pass rates: the AEMT is a demanding intermediate step, and preparation must combine the education program, the clinical experience and systematic study of the current National EMS Education Standards.',
    source: { label: 'NREMT - Advanced EMT certification and pass-rate reporting', url: 'https://nremt.org/Get-Certified/Advanced-EMT' },
    caveat: 'NREMT publishes pass rates by level and pathway that change each cycle; the figure above is the recent published range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The NREMT AEMT pathway is a two-part certification: a computer-adaptive cognitive exam (roughly 100-110 questions in up to 2 hours) and a psychomotor examination, on top of completing an accredited AEMT education program and meeting the clinical requirements. The cognitive exam follows the National EMS Education Standards at the AEMT level: airway, respiration and ventilation; cardiology; trauma; medical emergencies; obstetrics and pediatrics; and EMS operations, with the intermediate scope of practice. A defensible plan runs 100 to 150 hours of exam-focused study over 8 to 10 weeks, on top of the program itself. Weeks 1-3: airway and cardiology — the highest-weight content, including the intermediate airway skills and the medication administration the AEMT scope adds. Weeks 4-6: medical emergencies, trauma and the pharmacology the AEMT level introduces. Weeks 7-8: obstetrics, pediatrics and EMS operations, plus the psychomotor skills practice. Weeks 9-10: question-bank drilling and adaptive-style practice exams. The plan is heavy because the AEMT scope sits between the EMT and paramedic levels, and the published pass rates show the exam is demanding.',
    totalHours: '100-150 hours of exam study over 8-10 weeks (on top of the AEMT program and clinical requirements)',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Airway and cardiology', tasks: ['Airway, respiration and ventilation at the AEMT level', 'Cardiology, ECG and resuscitation', 'The medications the AEMT scope adds'], hours: 40 },
      { label: 'Weeks 4-6', focus: 'Medical and trauma', tasks: ['Medical emergencies and pharmacology', 'Trauma and shock management', 'The intermediate assessment skills'], hours: 40 },
      { label: 'Weeks 7-8', focus: 'Special populations and operations', tasks: ['Obstetrics, pediatrics and geriatrics', 'EMS operations and scene management', 'Psychomotor skills practice'], hours: 30 },
      { label: 'Weeks 9-10', focus: 'Drill and adaptives', tasks: ['Question-bank drilling in volume', 'Adaptive-style practice exams', 'Psychomotor exam rehearsal'], hours: 30 }
    ],
    variants: [
      { label: 'EMT upgrading', detail: 'The EMS environment is familiar; the new content is the expanded medical scope and the medications.' },
      { label: 'Recently completed AEMT program', detail: 'The clinical knowledge is fresh; focus study on the exam style and the psychomotor rehearsal.' }
    ]
  },
  prepStrategies: {
    summary: 'The AEMT cognitive exam rewards depth across the intermediate scope, so the dominant strategy is systematic coverage of the National EMS Education Standards with question-bank drilling, because the adaptive exam draws broadly. Second, master the medication content the AEMT level introduces: the AEMT scope adds medication administration and the pharmacology knowledge, a distinct block that EMT-upgraders must study as new material. Third, practise the adaptive format: the exam adjusts to your performance, so get comfortable with finishing strong rather than counting questions. Fourth, prepare the psychomotor component deliberately — it is a separate skills exam, and candidates who study only for the cognitive exam are caught out by the practical stations. Finally, use the current published pass rates as a planning signal: the numbers reflect a demanding exam, and structured study programs pass at higher rates than the overall cohort.',
    items: [
      { title: 'Cover the full AEMT scope', detail: 'The adaptive exam draws broadly; systematic coverage is essential.' },
      { title: 'Master the new medication content', detail: 'The AEMT scope adds pharmacology; EMT-upgraders must study it.' },
      { title: 'Practise the adaptive style', detail: 'Finish strong regardless of item count.' },
      { title: 'Rehearse the psychomotor exam', detail: 'It is a separate skills exam; cognitive-only study gets caught out.' },
      { title: 'Meet eligibility precisely', detail: 'The accredited program and clinical hours gate the certification.' }
    ]
  },
  resourceComparison: {
    summary: 'AEMT certification costs are dominated by the education program: accredited AEMT programs range from roughly $1,500 to $6,000 depending on the institution, with community-college and hospital-based programs at the lower end, often building on an EMT certificate. The NREMT exam fees are modest — the cognitive exam fee is roughly $140-$150 per attempt, and the psychomotor exam has its own fee set by the approved evaluator. Study materials — AEMT textbooks ($100-$200), question banks ($50-$150) and review courses — add a few hundred dollars. Free resources include the National EMS Education Standards and the NREMT candidate handbook. A realistic total budget is $2,000 to $8,000 including the program. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Accredited AEMT program', values: ['$1,500-$6,000', 'Classroom + clinical + field hours', 'The education and eligibility core'] },
      { label: 'NREMT cognitive exam', values: ['~$140-$150', 'Computer-adaptive exam', 'The cognitive certification'] },
      { label: 'Psychomotor exam', values: ['Fee set by evaluator', 'Skills stations', 'The practical certification component'] },
      { label: 'Textbooks and question banks', values: ['$100-$300', 'Books and online practice', 'Structured content and drilling'] },
      { label: 'National EMS Education Standards', values: ['Free', 'Official reference', 'The scope the exam follows'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; program and evaluator fees vary widely; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AEMT mistake is studying only for the cognitive exam and neglecting the psychomotor component: candidates who pass the written review then fail the practical stations, because certification requires both. The fix is rehearsing the skills in parallel with the cognitive study. The second mistake is treating the AEMT like a repeat of the EMT: the intermediate scope adds medications and expanded assessment, and EMT-upgraders who skip the new content fail those items. Third, candidates underestimate the breadth and study favourite topics; the adaptive exam draws across the full scope. Fourth, some candidates rush the eligibility path and arrive without the accredited program and clinical hours documented. Finally, ignoring the published pass rates as a planning signal is a mistake in the other direction — the numbers reflect a demanding exam, and structured study is the response, not fear.',
    items: [
      { mistake: 'Neglecting the psychomotor exam', fix: 'Rehearse the skills stations in parallel with cognitive study.' },
      { mistake: 'Treating it like a repeat of EMT', fix: 'The AEMT adds medications and expanded assessment; study the new content.' },
      { mistake: 'Studying favourite topics', fix: 'The adaptive exam draws across the full scope; cover the standards.' },
      { mistake: 'Rushing the eligibility path', fix: 'Complete and document the accredited program and clinical hours.' },
      { mistake: 'Ignoring the pass-rate signal', fix: 'Respond with structured study and adaptive practice, not fear.' }
    ]
  },
  questionTypes: {
    summary: 'The NREMT AEMT cognitive exam is a computer-adaptive test of roughly 100-110 questions in up to 2 hours, with multiple-choice items covering the National EMS Education Standards at the intermediate level: airway, cardiology, trauma, medical emergencies, obstetrics and pediatrics, and EMS operations. The items are scenario-heavy — a described patient presentation followed by the correct assessment, treatment or priority decision — and the adaptive design adjusts difficulty to the candidate\'s performance. Samples below are editor-written illustrations of the published standards, not live exam items; they show the clinical-decision style of the real items.',
    types: [
      { name: 'Patient scenario items', share: 'Majority', detail: 'Presentations with the correct assessment, treatment or priority.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Pharmacology, physiology and procedure questions.' },
      { name: 'Operations items', share: 'Minority', detail: 'Scene management and EMS system practices.' }
    ],
    samples: [
      {
        prompt: 'An AEMT is caring for a patient with severe allergic reaction and developing airway compromise. The most appropriate treatment consideration is:',
        options: ['A. Administering epinephrine per protocol and preparing for airway support', 'B. Transporting without treatment', 'C. Observing the patient', 'D. Delaying care for the family'],
        answer: 'A',
        explanation: 'Anaphylaxis with airway compromise requires epinephrine per protocol and airway preparation — the priority treatment. Transport without treatment, observation or delay each fail the urgent care the situation requires.'
      },
      {
        prompt: 'Which medication is within the AEMT scope of practice for an asthma patient with wheezing, per typical protocols?',
        options: ['A. A bronchodilator such as albuterol, per protocol', 'B. Any sedative', 'C. A narcotic', 'D. An anticoagulant'],
        answer: 'A',
        explanation: 'Bronchodilators such as albuterol are within the AEMT scope for wheezing and asthma, per protocol. Sedatives, narcotics and anticoagulants are outside the typical AEMT scope.'
      },
      {
        prompt: 'During a resuscitation, the AEMT notices the compressor is tiring and the compressions are becoming shallow. The appropriate action is to:',
        options: ['A. Rotate the compressor and confirm compression quality', 'B. Continue with the tired compressor', 'C. Pause compressions', 'D. Increase the ventilation rate'],
        answer: 'A',
        explanation: 'High-quality CPR requires rotating the compressor to prevent fatigue-driven deterioration while confirming depth and rate. Continuing shallow compressions, pausing or adjusting ventilation each compromise perfusion.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published standards, not live exam items.'
  },
  examDay: {
    summary: 'The AEMT cognitive exam is a computer-adaptive test taken at a Pearson VUE centre or through the approved testing platform, with roughly 100-110 questions in up to 2 hours; the psychomotor exam is scheduled separately through an approved evaluator. For the cognitive exam, bring the required ID matching your registration and your exam confirmation; arrive early — late arrivals may forfeit the appointment and fee. Because the exam is adaptive, do not count questions: it ends when NREMT is confident in your result. Your result is reported on completion, with the official record following. On a pass of both components, you are certified by NREMT, and most states then issue state AEMT licensure. On a fail, NREMT\'s retest policy defines the waiting period and reapplication. The afterwards matters: state licensure and continuing-education requirements begin immediately, and the certification must be maintained per NREMT and state rules.',
    bring: ['Required identification matching your registration', 'Exam confirmation and any required forms'],
    leave: ['Personal electronics and study materials', 'Any assumption that item count indicates performance — the exam is adaptive'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and the testing platform.' },
      { time: 'Cognitive exam', detail: 'Adaptive: roughly 100-110 questions in up to 2 hours.' },
      { time: 'Psychomotor exam', detail: 'Separate skills stations through an approved evaluator.' },
      { time: 'Afterwards', detail: 'On passing both, NREMT certification; states then license you.' }
    ],
    rules: [
      'The cognitive exam is computer-adaptive and ends when NREMT is confident',
      'Both the cognitive and psychomotor components are required',
      'State licensure follows NREMT certification in most states'
    ],
    afterwards: 'On passing both components, maintain NREMT certification and state licensure with the required continuing education. On a fail, follow the NREMT retest policy after additional study and skills practice.'
  }
};

export default data;
