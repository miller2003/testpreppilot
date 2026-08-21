const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Massage & wellness licensure desk',
    bio: 'This desk covers massage and wellness licensure exams. Exam structure, fees and rules come from the testing body\'s official pages (FSMTB), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the FSMTB MBLEx pages and BLS OOH Massage Therapists (SOC 31-9011), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$57,400 median for massage therapists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "MBLEx" — the Massage and Bodywork Licensing Examination is the licensing exam used by most states that license massage therapists, and the wage question belongs to the occupation you enter with it. The closest official BLS occupation is Massage Therapists, SOC 31-9011, which had a May 2024 median wage of $57,400, with the lowest 10 percent under $28,700 and the highest 10 percent above $94,470. The fit is direct: passing the MBLEx (or the state-approved alternative) plus the state requirements licenses you to practice massage, and BLS counted 168,300 massage therapist jobs in 2024, projecting 18 percent growth from 2024 to 2034 — much faster than the average for all occupations — with about 20,400 openings a year. The limitation to state plainly: the BLS median covers all massage therapists, licensed or not, and massage income is session- and tip-based, so the median blends part-time and full-time practitioners; established therapists with a client book earn above the median, while new licensees building a practice earn below it. Read the number as the market for the occupation the licence unlocks, and note that employment setting — spa, clinic or self-employed — drives the range as much as skill.',
    rows: [
      { label: 'Median annual wage, massage therapists', value: '$57,400', note: 'BLS OOH, SOC 31-9011, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $28,700', note: 'BLS OOH, SOC 31-9011, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $94,470', note: 'BLS OOH, SOC 31-9011, May 2024' },
      { label: 'Projected openings per year', value: '~20,400', note: 'BLS OOH, SOC 31-9011, 2024-2034' }
    ],
    growth: 'BLS projects 18 percent growth for massage therapists from 2024 to 2034, about 20,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Massage Therapists', url: 'https://www.bls.gov/ooh/healthcare/massage-therapists.htm' }
  },
  passRate: {
    headline: 'FSMTB publishes the format and passing-standard structure, and reports pass rates by year in its annual data',
    summary: 'The Federation of State Massage Therapy Boards (FSMTB) publishes pass-rate information for the MBLEx in its annual reports, and the reported first-attempt pass rate has historically clustered in the roughly 65-75 percent range in recent cycles; we present it as the board\'s own reporting, noting the figure varies by year. What the FSMTB also publishes is the format: the MBLEx has 100 scored multiple-choice questions with a 2-hour time limit (110 minutes of testing time including the tutorial), delivered by computer at PSI testing centres, and the result is reported as pass/fail. The exam content follows the published exam blueprint: anatomy and physiology; kinesiology; pathology, contraindications, areas of caution and special populations; benefits and physiological effects of techniques; client assessment, treatment planning and documentation; ethics, boundaries, laws and regulations; and guidelines for professional practice. The practical reading: the published pass rate reflects a demanding licensure exam, and the strongest predictor of success is structured preparation — candidates who complete an accredited massage program (600-1,000 hours typically) and drill the blueprint with practice exams pass at higher rates than the overall cohort.',
    source: { label: 'FSMTB - Massage and Bodywork Licensing Examination (MBLEx)', url: 'https://www.fsmtb.org/mblex' },
    caveat: 'FSMTB publishes pass-rate data that varies by year; the figure above is the recent reported range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The MBLEx is a 100-question, 2-hour exam built on the published blueprint: anatomy and physiology, kinesiology, pathology and contraindications, the benefits and effects of techniques, client assessment and treatment planning, ethics and law, and professional practice. A defensible plan runs 80 to 140 hours over 8 to 12 weeks, ideally on top of an accredited massage program. Weeks 1-3: anatomy and physiology and kinesiology — the bones, muscles, origins and insertions, and joint movements — the largest content area, using flashcards for the muscle names and actions. Weeks 4-5: pathology and contraindications — the conditions that affect treatment decisions and the areas of caution. Weeks 6-7: techniques and client care — the benefits and effects of the modalities, client assessment, documentation and treatment planning. Weeks 8-9: ethics, laws and professional practice — the scope of practice, boundaries and the state regulations. Weeks 10-12: practice-exam drilling in volume and full timed practice exams at the real format. The plan is science-heavy because the anatomy and pathology items dominate; candidates who memorise techniques but skip the science fail the largest block.',
    totalHours: '80-140 hours over 8-12 weeks (after an accredited program)',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Anatomy, physiology, kinesiology', tasks: ['Bones, muscles, origins, insertions and actions', 'Joint movements and the body systems', 'Flashcards for muscle terminology'], hours: 40 },
      { label: 'Weeks 4-5', focus: 'Pathology and contraindications', tasks: ['Conditions and their treatment implications', 'Areas of caution and special populations', 'Contraindication scenarios'], hours: 25 },
      { label: 'Weeks 6-7', focus: 'Techniques and client care', tasks: ['Benefits and effects of the modalities', 'Client assessment and documentation', 'Treatment planning'], hours: 25 },
      { label: 'Weeks 8-9', focus: 'Ethics, law, practice', tasks: ['Scope of practice and boundaries', 'Laws, regulations and professional practice', 'Ethics scenarios'], hours: 20 },
      { label: 'Weeks 10-12', focus: 'Drill and mocks', tasks: ['Practice-exam drilling in volume', 'Two full timed practice exams', 'Review weak blueprint areas'], hours: 25 }
    ],
    variants: [
      { label: 'Recent massage-program graduate', detail: 'The anatomy and technique content is fresh; focus study on pathology, ethics and the exam format.' },
      { label: 'Transferring from another state', detail: 'Confirm whether your state accepts the MBLEx or requires an alternative; the study plan is unchanged.' }
    ]
  },
  prepStrategies: {
    summary: 'The MBLEx rewards systematic coverage of the science-heavy blueprint, so the dominant strategy is anatomy-first study: the muscle names, origins, insertions and actions, and the kinesiology concepts, are the largest content area, and flashcards are the most effective tool for them. Second, learn the pathology and contraindication material as decision rules: the exam asks which condition changes the treatment or is an area of caution, so practise scenario items rather than memorising lists. Third, master the ethics and law block deliberately — scope of practice, boundaries and the state regulations are a distinct tested area that candidates focused on technique often miss. Fourth, use MBLEx-style practice exams and hold yourself to 80 percent-plus on practice, because the licensure pass line leaves little margin. Finally, take at least two full timed practice exams at the real 100-question, 2-hour format; the stamina and the exam interface are part of the test.',
    items: [
      { title: 'Study anatomy first', detail: 'Muscles, origins, insertions and actions are the largest content area.' },
      { title: 'Learn pathology as decisions', detail: 'Which condition changes treatment or is an area of caution.' },
      { title: 'Drill ethics and law', detail: 'Scope of practice, boundaries and regulations are a distinct block.' },
      { title: 'Hold to 80%+ on practice', detail: 'The licensure pass line leaves little margin.' },
      { title: 'Run two full timed mocks', detail: '100 questions in 2 hours; the stamina is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'MBLEx prep costs are dominated by the training program, not the exam materials. Accredited massage programs run roughly $5,000 to $15,000 depending on the institution and the state\'s required hours (commonly 600-1,000). Exam materials are modest: the FSMTB exam blueprint (free), MBLEx study guides ($40-$100), anatomy flashcards ($20-$50) and practice-exam products ($30-$100). Many schools bundle review materials with the program. The exam fee is about $195 plus the state\'s licensing fee. A realistic total budget is $5,500 to $16,000 including the program. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FSMTB exam blueprint', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Accredited massage program', values: ['$5,000-$15,000', 'Classroom + clinical hours', 'The training-hour requirement and core learning'] },
      { label: 'MBLEx study guides', values: ['$40-$100', 'Printed or digital book', 'Structured blueprint coverage'] },
      { label: 'Anatomy flashcards and practice exams', values: ['$20-$100', 'Flashcards and online practice', 'Muscle terminology and exam-style drilling'] },
      { label: 'MBLEx exam', values: ['~$195', 'Computer-based exam', 'The licensure gate'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the MBLEx fee is about $195; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common MBLEx mistake is studying techniques and skipping the science: candidates who memorise modalities but cannot name muscles or identify contraindications fail the largest content blocks. The fix is anatomy-first study. The second mistake is treating pathology as a memorisation list instead of learning the decision rules; the exam asks what changes in treatment, so practise scenarios. Third, candidates under-prepare ethics and law, a distinct tested block. Fourth, some candidates never take a timed practice exam and misjudge the 2-hour pace. Finally, candidates who do not complete an accredited program first arrive at the exam without the clinical foundation and the state-hour requirement; confirm the education path before studying for the test.',
    items: [
      { mistake: 'Studying techniques, not science', fix: 'Anatomy, kinesiology and pathology are the largest blocks; study them first.' },
      { mistake: 'Memorising pathology lists', fix: 'Learn the decision rules: what changes treatment or is an area of caution.' },
      { mistake: 'Skipping ethics and law', fix: 'Scope of practice and regulations are a distinct tested block.' },
      { mistake: 'Never timing a practice exam', fix: '100 questions in 2 hours; run two timed practice exams.' },
      { mistake: 'Skipping the accredited program', fix: 'The program provides the clinical foundation and the state-hour requirement.' }
    ]
  },
  questionTypes: {
    summary: 'The MBLEx is a 100-question multiple-choice exam in 2 hours. The items span the blueprint with heavy concentration on anatomy and physiology, kinesiology, and pathology and contraindications, plus client care, ethics and law. Many items are scenario-based — a client presentation or treatment situation followed by the correct assessment, technique decision or contraindication. Samples below are editor-written illustrations of the published blueprint, not live exam items; they show the clinical-decision style of the real items.',
    types: [
      { name: 'Anatomy and kinesiology items', share: 'Largest block', detail: 'Muscles, actions, joints and body systems.' },
      { name: 'Pathology and contraindication items', share: 'Large block', detail: 'Conditions, areas of caution and treatment decisions.' },
      { name: 'Client care, ethics and law items', share: 'Large block', detail: 'Assessment, documentation, boundaries and regulations.' }
    ],
    samples: [
      {
        prompt: 'Which muscle is the primary mover in shoulder abduction?',
        options: ['A. The deltoid', 'B. The biceps brachii', 'C. The pectoralis major', 'D. The trapezius'],
        answer: 'A',
        explanation: 'The deltoid is the primary abductor of the shoulder. The biceps flexes the elbow, the pectoralis major adducts and internally rotates the arm, and the trapezius moves the scapula.'
      },
      {
        prompt: 'A client reports a recent deep-vein thrombosis. The appropriate massage-therapy response is:',
        options: ['A. Contraindicated — refer the client to their healthcare provider', 'B. Massage the affected leg gently', 'C. Massage only the unaffected side without addressing the condition', 'D. Apply heat and proceed'],
        answer: 'A',
        explanation: 'Deep-vein thrombosis is a serious contraindication for massage; the therapist should not treat and should refer the client to their provider. Massaging the affected leg, ignoring the condition or applying heat each risk dislodging the clot.'
      },
      {
        prompt: 'When a client asks a therapist to keep a session confidential from their physician, the therapist\'s best response is guided by:',
        options: ['A. The professional boundaries and documentation standards of the scope of practice', 'B. The client\'s request alone', 'C. The spa\'s booking policy', 'D. Whatever the client prefers in every case'],
        answer: 'A',
        explanation: 'Therapist conduct is guided by professional boundaries and documentation standards: medical contraindications and safety concerns should be communicated to the appropriate providers, and confidentiality follows professional practice rules. The client\'s request alone, spa policy or unconditional preference do not override professional duties.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The MBLEx is a 100-question, 2-hour computer-based exam at a PSI testing centre. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 66 seconds per item, flag uncertain items for review, and finish with time to spare. Your result is reported as pass/fail after the exam, and the FSMTB sends your score to the state board you designated. If you do not pass, the retake policy defines the waiting period and the reduced retake fee. On a pass, the MBLEx result is used for state licensure, and you complete any remaining state requirements before the licence is issued. The afterwards matters: confirm your state\'s application steps, because the licence is issued by the state board, not by the FSMTB.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and the state board you designated.' },
      { time: 'Exam', detail: '100 questions in 2 hours; pace ~66 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Pass/fail is reported; the score goes to your state board.' },
      { time: 'Next', detail: 'Complete the state licensure application and remaining requirements.' }
    ],
    rules: [
      'The exam is computer-based and closed book',
      '100 questions in 2 hours; the clock does not pause',
      'The licence is issued by your state board after the remaining requirements'
    ],
    afterwards: 'On a pass, complete the state licensure application. On a fail, retake per the FSMTB policy after additional blueprint study.'
  }
};

export default data;
