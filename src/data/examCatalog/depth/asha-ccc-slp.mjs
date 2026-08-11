const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Speech-language pathology credentialing desk',
    bio: 'ASHA certification structure comes from the American Speech-Language-Hearing Association official pages and is revised with each standards update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ASHA CCC-SLP certification requirements and exam pathway against ASHA official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect speech-language-pathologist pay at a May 2024 median of $95,410 (BLS) — the CCC-SLP is the standard credential for the occupation, and the field is projected to grow 15% through 2034',
    summary: 'The direct answer is that the ASHA Certificate of Clinical Competence in Speech-Language Pathology (CCC-SLP) is the standard professional credential for the occupation, speech-language pathologists (SOC 29-1127), at a May 2024 median annual wage of $95,410, with the lowest 10 percent under about $60,500 and the highest 10 percent above about $132,900. The honest framing is that the credential does not set pay — SLP salaries are set by setting (schools, hospitals, outpatient clinics) and region — but the CCC-SLP is effectively required: most employers and many states require the ASHA credential or its equivalent for SLP positions, making it the professional gate to a well-paid, fast-growing occupation. BLS counted about 187,000 speech-language pathologists in 2024 and projects about 15 percent employment growth from 2024 to 2034, much faster than average, with roughly 13,300 annual openings — driven by aging populations, improved survival rates, and early-intervention demand. The credential pathway is substantial: a master\u2019s degree from an accredited program, a clinical fellowship (typically 9 to 12 months of supervised practice), and passing the Praxis Speech-Language Pathology exam (5331), followed by the ASHA certification application. The practical read: the CCC-SLP is the endpoint of a master\u2019s-level professional pathway with strong pay and exceptional growth behind it, and the certification is the standard that unlocks the occupation\u2019s roles. For candidates deciding whether to pursue it, the pathway is a multi-year commitment with a demanding clinical component, and the occupation behind it offers one of the strongest growth-and-pay profiles in allied health.',
    rows: [
      { label: 'Median annual wage, speech-language pathologists', value: '$95,410', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 29-1127)' },
      { label: 'Lowest 10 percent', value: 'less than $60,480', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $132,850', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+15%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional gate', note: 'Master\u2019s + clinical fellowship + Praxis 5331 + ASHA application' }
    ],
    growth: 'BLS projects about 15% growth for speech-language pathologists from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Speech-Language Pathologists', url: 'https://www.bls.gov/ooh/healthcare/speech-language-pathologists.htm' }
  },
  passRate: {
    headline: 'ETS reports Praxis 5331 pass information but ASHA publishes no certification pass rate — the Praxis exam is 132 questions in 2.5 hours, and most states and ASHA require it for the credential',
    summary: 'The core fact is that there is no single published pass rate for the full CCC-SLP pathway, because the certification combines the Praxis exam (administered by ETS, which reports score distributions rather than cohort pass percentages) with the clinical-fellowship and coursework requirements (which ASHA verifies rather than reports as pass data). What is published is the exam structure: the Praxis Speech-Language Pathology exam (5331) contains 132 selected-response questions with 2.5 hours allowed, scored on a 100-200 scale, with a passing score that ASHA sets (currently 162) and that states may set differently; the exam covers the SLP professional domains — foundations and professional practice, screening, assessment, evaluation, and diagnosis; planning and implementing intervention; and the clinical areas of speech, language, swallowing, and cognition. Because the exam is one component of the pathway, the practical gate is passing at the ASHA standard of 162, and candidates who complete an accredited master\u2019s program and follow a structured 6-to-10-week review with practice-exam calibration pass at solid rates. The honest advice is to treat the Praxis as a distinct preparation project after the master\u2019s program, use the ETS official practice test as the calibration tool, and plan the clinical fellowship and ASHA application as the remaining steps of the certification pathway.',
    source: { label: 'ASHA — CCC-SLP certification', url: 'https://www.asha.org/' },
    caveat: 'ASHA publishes no certification pass rate; the Praxis passing score is 162 and state standards vary.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 100 to 150 hours of study for the Praxis 5331 after completing an accredited master\u2019s program, structured around the exam content outline — assessment and diagnosis, intervention, and professional foundations — with the ETS official practice test as the calibration tool, and plan the clinical fellowship and ASHA application as the remaining pathway steps. The exam\u2019s weight favours the assessment and intervention content, so allocate study time there first. The most effective sequence is: first, obtain the ETS study companion and take the official practice test to baseline; second, study the assessment and diagnosis content; third, work the intervention planning content; fourth, review the professional foundations and the clinical areas (speech, language, swallowing, cognition); and fifth, take the official practice test again and book the exam. The highest-yield habits are the practice-test calibration and drilling the clinical scenario items, which dominate the paper. Budget the assessment and diagnosis content the most time, since it carries the largest question share. After passing the Praxis, complete the clinical fellowship (typically 9 to 12 months of supervised practice) and the ASHA application, since the certification is the full pathway, not the exam alone.',
    totalHours: '100-150 study hours for the Praxis + 9-12 month clinical fellowship',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Baseline + assessment', tasks: ['Get the study companion and take the practice test', 'Study assessment and diagnosis', 'Log weak areas'], hours: 40 },
      { label: 'Weeks 4-7', focus: 'Intervention + foundations', tasks: ['Study intervention planning', 'Review professional foundations', 'Work the clinical areas'], hours: 50 },
      { label: 'Weeks 8-9', focus: 'Practice + gaps', tasks: ['Take the official practice test again', 'Re-study weak areas', 'Book the exam'], hours: 30 },
      { label: 'After the exam', focus: 'Fellowship + application', tasks: ['Complete the clinical fellowship', 'Submit the ASHA application', 'Plan the CEU cycle'], hours: 40 }
    ],
    variants: [
      { label: 'Clinical fellowship', detail: '9-12 months of supervised professional practice after the master\u2019s, required for the certification.' },
      { label: 'State licensure', detail: 'Most states require licensure, which may accept the ASHA credential or its equivalent.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably clears the Praxis 5331 at the ASHA standard is "anchor on the ETS study companion, weight assessment and intervention, and calibrate with the official practice test," and the single biggest error is reviewing master\u2019s coursework content instead of preparing for the exam\u2019s applied format. A second proven approach is mastering the assessment and diagnosis content, the largest question share, with the clinical scenario format. Third, drill the intervention planning items, which reward applying the SLP framework. Fourth, use the official practice test as the calibration tool — the ETS practice tests mirror the content distribution, and your score tells you your margin to the 162 standard. Fifth, review the professional foundations and clinical areas (speech, language, swallowing, cognition) for the dependable points they carry. Finally, plan the full pathway, not just the exam: the clinical fellowship and ASHA application are the remaining gates, and the CEU cycle maintains the credential.',
    items: [
      { title: 'Anchor on the study companion', detail: 'The exam is built from the ETS content outline.' },
      { title: 'Weight assessment and diagnosis', detail: 'The largest question share; drill the scenario format.' },
      { title: 'Calibrate with the official practice test', detail: 'Your practice score shows the margin to 162.' },
      { title: 'Review the clinical areas', detail: 'Speech, language, swallowing, and cognition are dependable points.' },
      { title: 'Plan the full pathway', detail: 'The fellowship, application, and CEUs follow the exam.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5331 preparation runs $100 to $400, with the ETS official practice test as the anchor; the larger cost is the master\u2019s program and fellowship, which are the pathway\u2019s core. The comparison below separates the exam, official resources, and the prep options, with prices current to this review. The buying rule is to spend on the official practice test and a question bank, and treat the certification application fees as the final pathway cost.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Praxis 5331 registration (ETS)', values: ['~$130-160', 'Computer-based at a testing center', 'The exam itself'] },
      { label: 'ETS study companion + practice test', values: ['Free + ~$20', 'PDF + online practice exam', 'The authoritative calibration'] },
      { label: 'SLP question banks (e.g. TrueLearn)', values: ['~$100-250', 'Online practice questions', 'Applied drilling'] },
      { label: 'ASHA certification application', values: ['~$100-200', 'Online application', 'The credential gate'] },
      { label: 'Master\u2019s program + clinical fellowship', values: ['Degree tuition + supervision', 'Graduate program + supervised practice', 'The pathway core'] }
    ],
    footnote: 'Prices approximate and dated to this review; the Praxis passing score is 162 for ASHA and state standards vary.'
  },
  commonMistakes: {
    summary: 'The most common mistake is treating the Praxis as the whole certification and neglecting the clinical fellowship and ASHA application, which are required gates; the second is reviewing coursework content instead of preparing for the exam\u2019s applied format. A third recurring error is being weak on the assessment and diagnosis scenario items, the largest question share. Candidates also routinely skip the official practice-test calibration and sit without knowing their margin to the 162 standard, and many let the CEU cycle lapse after certification. Finally, some candidates ignore state licensure requirements, assuming the ASHA credential alone suffices.',
    items: [
      { mistake: 'Exam-only focus', fix: 'Plan the fellowship, application, and licensure as the full pathway.' },
      { mistake: 'Coursework-style review', fix: 'Prepare for the applied scenario format with practice tests.' },
      { mistake: 'Weak on assessment scenarios', fix: 'Drill the assessment and diagnosis items, the largest share.' },
      { mistake: 'Skipping practice calibration', fix: 'Know your margin to the 162 passing standard.' },
      { mistake: 'Missing the CEU cycle', fix: 'Plan continuing education after certification.' }
    ]
  },
  questionTypes: {
    summary: 'The Praxis 5331 contains 132 selected-response questions in 2.5 hours, covering the SLP professional domains — foundations and professional practice, screening and assessment, intervention planning, and the clinical areas of speech, language, swallowing, and cognition — with a large share of clinical scenario items. The samples below are editor-written illustrations of the published content outline, not live exam items.',
    types: [
      { name: 'Assessment & diagnosis', share: '~40%', detail: 'Screening, evaluation, and differential diagnosis.' },
      { name: 'Intervention planning', share: '~30%', detail: 'Planning and implementing treatment.' },
      { name: 'Professional foundations', share: '~15%', detail: 'Ethics, evidence-based practice, and service delivery.' },
      { name: 'Clinical areas', share: '~15%', detail: 'Speech, language, swallowing, and cognition.' }
    ],
    samples: [
      {
        prompt: 'Which assessment finding is most characteristic of childhood apraxia of speech?',
        options: ['A. Consistent articulation errors', 'B. Inconsistent errors with difficulty sequencing sounds', 'C. Normal prosody', 'D. Fluent, effortless speech'],
        answer: 'B',
        explanation: 'Childhood apraxia of speech features inconsistent errors and difficulty with sound sequencing.'
      },
      {
        prompt: 'Which intervention approach is evidence-based for augmentative and alternative communication (AAC) users?',
        options: ['A. No modeling of the device', 'B. Aided language stimulation with modeling', 'C. Restricting device use', 'D. Using the device only at home'],
        answer: 'B',
        explanation: 'Aided language stimulation, where the clinician models device use, is an evidence-based AAC approach.'
      },
      {
        prompt: 'Which professional consideration is paramount when discharging a client from therapy?',
        options: ['A. Documenting progress and the discharge rationale', 'B. Avoiding documentation', 'C. Discharging without a final session', 'D. Keeping the client in therapy indefinitely'],
        answer: 'A',
        explanation: 'Documenting progress and the discharge rationale is a core professional-responsibility standard.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outline, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis 5331 is taken on computer at an ETS testing center: 132 selected-response questions with 2.5 hours, scored on a 100-200 scale, with a passing score of 162 for ASHA (state standards vary), with results typically available within a few weeks. The core rules: bring valid photo ID and admission ticket, arrive early, and follow testing-center rules. After passing, complete the clinical fellowship and the ASHA application to earn the CCC-SLP. The most useful exam-day habits: pace at about a minute per question, flag and return to the scenario items, and answer every question (no penalty for guessing). If you do not pass, the 21-day retake rule applies. After the certification, plan the CEU cycle and the state licensure paperwork, since the credential and licence are maintained separately.',
    bring: ['Valid photo ID', 'Admission ticket', 'Arrival 30 minutes early'],
    leave: ['Phone, smartwatch, and study materials (testing-center rules)', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '6-10 weeks; study-companion review with practice-test calibration.' },
      { time: 'Exam', detail: '132 questions in 2.5 hours; 162 to pass for ASHA.' },
      { time: 'Fellowship', detail: 'Complete the 9-12 month clinical fellowship.' },
      { time: 'Certification', detail: 'Submit the ASHA application; maintain with CEUs.' }
    ],
    rules: ['132 questions, 2.5 hours', 'Passing score 162 for ASHA', 'Computer-based at ETS testing centers', 'Fellowship + application required'],
    afterwards: 'Passing the Praxis at the ASHA standard, completing the clinical fellowship, and the ASHA application earn the CCC-SLP, the standard credential for the occupation.'
  }
};

export default data;
