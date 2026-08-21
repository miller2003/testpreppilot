const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied-health & clinical-support certifications desk',
    bio: 'This desk covers EMS and allied-health certifications. Exam structure, fees and rules come from the certifying body\'s official pages (NREMT, state agencies), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against NREMT\'s Paramedic certification pages and the EMS certification handbook, and BLS OOH EMTs and Paramedics (SOC 29-2041), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$46,350 median for EMTs and paramedics (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "NREMT paramedic" — the certification validates paramedic-level emergency care, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is EMTs and Paramedics, SOC 29-2041, which had a May 2024 median wage of $46,350, with the lowest 10 percent under $30,970 and the highest 10 percent above $65,260. The fit is direct: NREMT-certified paramedics work on ambulances and in emergency departments, all inside this occupation, and within the combined series paramedics typically earn at the higher end because of the advanced scope of practice. BLS counted 273,100 EMT and paramedic jobs in 2024 and projects 8 percent growth from 2024 to 2034, faster than the average for all occupations, with about 27,300 openings a year. The limitation to state plainly: BLS reports the two levels as one occupation, so the $46,350 median blends EMT and paramedic pay, and paramedic-specific figures come from employer surveys rather than government data; read the number as the market for the occupation, with paramedics typically above the midpoint. Note also that many paramedic roles are in public agencies with pay scales set by local government.',
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
    headline: 'NREMT publishes pass rates by certification level and education pathway — paramedic first-attempt pass rates are published and sit below the EMT level',
    summary: 'The National Registry of Emergency Medical Technicians publishes aggregate pass-rate data by certification level and education pathway in its annual reports, and the paramedic first-attempt pass rate has historically been the lowest of the NREMT levels — typically in the high-50s to low-60s percent range in recent published cycles, with the figure varying by pathway and year. We present this as NREMT\'s own reporting and note that the exact number changes each cycle. The cognitive exam itself is a computer-adaptive test: the paramedic exam delivers roughly 80-150 questions in up to 2.5 hours, adapting to the candidate\'s performance, and the passing standard is set psychometrically so that the result reflects the same competence level regardless of the number of questions delivered. Certification also requires passing the psychomotor examination through an approved pathway and meeting the education and clinical requirements. The practical reading of the published pass rates: the paramedic exam is demanding, and preparation must combine a solid paramedic program, clinical experience and systematic study of the current National EMS Education Standards.',
    source: { label: 'NREMT - Paramedic certification and pass-rate reporting', url: 'https://nremt.org/Get-Certified/Paramedic' },
    caveat: 'NREMT publishes pass rates by level and pathway that change each cycle; the figure above is the recent published range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The NREMT paramedic pathway is a two-part certification: a computer-adaptive cognitive exam (roughly 80-150 questions in up to 2.5 hours) and a psychomotor examination, on top of completing an accredited paramedic education program and meeting the clinical requirements. The cognitive exam follows the National EMS Education Standards, covering airway, respiration and ventilation; cardiology and resuscitation; trauma; medical emergencies; obstetrics and gynecology; and EMS operations. A defensible plan runs 150 to 250 hours of exam-focused study over 10 to 14 weeks, on top of the program itself. Weeks 1-3: airway, respiration and cardiology — the highest-weight content — with systematic review of the standards. Weeks 4-6: medical emergencies, toxicology and environmental emergencies, and trauma. Weeks 7-9: obstetrics, pediatrics, psychiatry and EMS operations, plus the psychomotor skills practice. Weeks 10-14: question-bank drilling and adaptive-style practice exams, plus scheduled psychomotor practice. The plan is heavy because the paramedic scope is broad and the published pass rates show the exam is demanding; clinical experience accelerates every phase.',
    totalHours: '150-250 hours of exam study over 10-14 weeks (on top of the paramedic program and clinical requirements)',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Airway and cardiology', tasks: ['Airway, respiration and ventilation', 'Cardiology, ECG interpretation and resuscitation', 'Systematic review of the education standards'], hours: 50 },
      { label: 'Weeks 4-6', focus: 'Medical and trauma', tasks: ['Medical emergencies, toxicology and environmental', 'Trauma and shock management', 'Medication and pharmacology review'], hours: 50 },
      { label: 'Weeks 7-9', focus: 'Special populations and operations', tasks: ['Obstetrics, pediatrics and psychiatry', 'EMS operations and scene management', 'Psychomotor skills practice'], hours: 50 },
      { label: 'Weeks 10-14', focus: 'Drill and adaptives', tasks: ['Question-bank drilling in volume', 'Adaptive-style practice exams', 'Psychomotor exam rehearsal'], hours: 60 }
    ],
    variants: [
      { label: 'Recently completed paramedic program', detail: 'The clinical knowledge is fresh; focus study on the exam style and the psychomotor rehearsal.' },
      { label: 'Experienced EMT upgrading', detail: 'You know the EMS environment; the new content is the advanced medical scope and pharmacology.' }
    ]
  },
  prepStrategies: {
    summary: 'The paramedic cognitive exam rewards depth across the full EMS scope, so the dominant strategy is systematic coverage of the National EMS Education Standards with question-bank drilling, because the adaptive exam draws broadly. Second, master cardiology: ECG interpretation and resuscitation algorithms are high-weight content, and candidates who are weak on rhythms lose a large block. Third, practise the adaptive format: the exam adjusts to your performance, so practise with question banks that mimic the item style and get comfortable with finishing strong rather than counting questions. Fourth, prepare the psychomotor component deliberately — it is a separate, skills-based exam, and candidates who study only for the cognitive exam are caught out by the practical stations. Fifth, use the current published pass rates as motivation, not fear: the numbers reflect an exam that rewards preparation, and candidates who complete structured study programs pass at higher rates. Finally, meet the eligibility requirements precisely — accredited program completion and clinical hours — because certification cannot proceed without them.',
    items: [
      { title: 'Cover the full EMS scope', detail: 'The adaptive exam draws broadly; systematic coverage of the standards is essential.' },
      { title: 'Master cardiology', detail: 'ECG interpretation and resuscitation are high-weight content.' },
      { title: 'Practise the adaptive style', detail: 'Finish strong regardless of item count; the exam adapts to performance.' },
      { title: 'Rehearse the psychomotor exam', detail: 'It is a separate skills exam; cognitive-only study gets caught out.' },
      { title: 'Meet eligibility precisely', detail: 'Accredited program completion and clinical hours gate the certification.' }
    ]
  },
  resourceComparison: {
    summary: 'Paramedic certification costs are dominated by the education program: accredited paramedic programs range from roughly $3,000 to $15,000 depending on the institution and format, with community-college and hospital-based programs at the lower end. The NREMT exam fees are modest by comparison — the cognitive exam fee is roughly $140-$150 per attempt, and the psychomotor exam has its own fee set by the approved evaluator. Study materials — paramedic textbooks ($100-$300), question banks ($50-$150) and review courses ($100-$500) — add a few hundred dollars. Free resources include the National EMS Education Standards, NREMT\'s candidate handbook and the official practice tools. A realistic total budget is $4,000 to $16,000 including the program. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Accredited paramedic program', values: ['$3,000-$15,000', 'Classroom + clinical + field hours', 'The education and eligibility core'] },
      { label: 'NREMT cognitive exam', values: ['~$140-$150', 'Computer-adaptive exam', 'The cognitive certification'] },
      { label: 'Psychomotor exam', values: ['Fee set by evaluator', 'Skills stations', 'The practical certification component'] },
      { label: 'Textbooks and review courses', values: ['$100-$500', 'Books and structured review', 'Structured content coverage'] },
      { label: 'Question banks', values: ['$50-$150', 'Online practice items', 'Adaptive-style drilling'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; program and evaluator fees vary widely; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common paramedic mistake is studying only for the cognitive exam and neglecting the psychomotor component: candidates who ace written review then fail the practical stations, because certification requires both. The fix is to rehearse the psychomotor skills in parallel with cognitive study. The second mistake is weak cardiology — ECG interpretation and resuscitation algorithms are high-weight content, and shallow preparation there costs the largest single block. Third, candidates underestimate the exam\'s breadth and study favourite topics; the adaptive exam draws across the full scope, so systematic coverage matters. Fourth, some candidates rush the eligibility path and arrive at the exam without the accredited program and clinical hours documented; certification cannot proceed. Finally, ignoring the published pass rates as a planning signal is a mistake in the other direction — the numbers reflect a demanding exam, and structured study with question banks and adaptive practice is the response, not fear.',
    items: [
      { mistake: 'Neglecting the psychomotor exam', fix: 'Rehearse the skills stations in parallel with cognitive study.' },
      { mistake: 'Weak cardiology', fix: 'ECG interpretation and resuscitation are the largest high-weight block.' },
      { mistake: 'Studying favourite topics', fix: 'The adaptive exam draws across the full scope; cover the standards.' },
      { mistake: 'Rushing the eligibility path', fix: 'Complete and document the accredited program and clinical hours.' },
      { mistake: 'Ignoring the pass-rate signal', fix: 'Respond with structured study and adaptive practice, not fear.' }
    ]
  },
  questionTypes: {
    summary: 'The NREMT paramedic cognitive exam is a computer-adaptive test of roughly 80-150 questions in up to 2.5 hours, with items in multiple-choice form covering the National EMS Education Standards: airway, respiration and ventilation; cardiology and resuscitation; trauma; medical emergencies; obstetrics and gynecology; and EMS operations. The items are scenario-heavy — a described patient presentation followed by the correct assessment, treatment or priority decision — and the adaptive design adjusts difficulty to the candidate\'s performance. Samples below are editor-written illustrations of the published standards, not live exam items; they show the clinical-decision style of the real items.',
    types: [
      { name: 'Patient scenario items', share: 'Majority', detail: 'Presentations with the correct assessment, treatment or priority.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Direct questions on pharmacology, physiology and procedures.' },
      { name: 'Operations items', share: 'Minority', detail: 'Scene management and EMS system practices.' }
    ],
    samples: [
      {
        prompt: 'A patient with chest pain and shortness of breath has a 12-lead showing ST elevation in the inferior leads. The priority treatment consideration is:',
        options: ['A. Activating the STEMI care pathway and preparing for reperfusion', 'B. Administering pain medication only', 'C. Transporting non-emergent', 'D. Observing the patient in place'],
        answer: 'A',
        explanation: 'ST-elevation myocardial infarction requires activating the STEMI pathway — alerting the receiving facility and preparing for reperfusion — as the priority. Symptom-only treatment, non-emergent transport or observation each delay the definitive care STEMI requires.'
      },
      {
        prompt: 'A paramedic administers epinephrine to a patient in anaphylaxis. The expected therapeutic effect is:',
        options: ['A. Bronchodilation and vasoconstriction, reversing the airway and vascular collapse', 'B. Increased bleeding time', 'C. Reduced heart rate', 'D. Sedation'],
        answer: 'A',
        explanation: 'Epinephrine reverses anaphylaxis through bronchodilation and vasoconstriction, restoring airway and vascular tone. Increased bleeding, bradycardia and sedation are not the therapeutic effects of epinephrine in anaphylaxis.'
      },
      {
        prompt: 'During a resuscitation, the team leader notices the compressor is fatiguing and compressions are becoming shallow. The appropriate action is to:',
        options: ['A. Rotate the compressor and confirm compression quality', 'B. Continue with the fatigued compressor', 'C. Pause compressions for a break', 'D. Increase the ventilation rate'],
        answer: 'A',
        explanation: 'High-quality CPR requires rotating the compressor to prevent fatigue-driven deterioration, while confirming depth and rate. Continuing shallow compressions, pausing for breaks or adjusting ventilation each compromise perfusion.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published standards, not live exam items.'
  },
  examDay: {
    summary: 'The paramedic cognitive exam is a computer-adaptive test taken at a Pearson VUE centre or through the approved testing platform, with roughly 80-150 questions in up to 2.5 hours; the psychomotor exam is scheduled separately through an approved evaluator. For the cognitive exam, bring the required ID matching your registration and your exam confirmation; arrive early — late arrivals may forfeit the appointment and fee. Because the exam is adaptive, do not count questions: it ends when NREMT is confident in your result, and finishing early is the design. Your result is reported on completion, with the official record following. On a pass of both components, you are certified by NREMT, and most states then issue state paramedic licensure. On a fail, NREMT\'s retest policy defines the waiting period and reapplication. The afterwards matters: state licensure and continuing-education requirements begin immediately, and the certification must be maintained per NREMT and state rules.',
    bring: ['Required identification matching your registration', 'Exam confirmation and any required forms'],
    leave: ['Personal electronics and study materials', 'Any assumption that item count indicates performance — the exam is adaptive'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and the testing platform.' },
      { time: 'Cognitive exam', detail: 'Adaptive: roughly 80-150 questions in up to 2.5 hours.' },
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
