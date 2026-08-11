const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Dental & allied-health certifications desk',
    bio: 'This desk covers dental-assisting certifications. Exam structure, fees and rules come from the certifying body\'s official pages (DANB), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the DANB Radiation Health and Safety (RHS) exam pages and BLS OOH Dental Assistants (SOC 31-9091), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$47,840 median for dental assistants (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "RHS" — the DANB Radiation Health and Safety Exam validates dental-assistant radiography knowledge, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Dental Assistants, SOC 31-9091, which had a May 2024 median wage of $47,840, with the lowest 10 percent under $33,900 and the highest 10 percent above $61,420. The fit is direct: DANB-certified dental assistants work in dental offices, clinics and public-health settings, and the RHS credential is one of the components of the DANB Certified Dental Assistant (CDA) certification, which many employers and states require or prefer for taking dental X-rays. BLS counted 338,200 dental assistant jobs in 2024 and projects 9 percent growth from 2024 to 2034, faster than the average for all occupations, with about 28,300 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as an employability and compliance signal — many states require radiography certification for dental assistants taking X-rays, and employers weigh the DANB credentials in hiring. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, dental assistants', value: '$47,840', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $33,900', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $61,420', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Projected openings per year', value: '~28,300', note: 'BLS OOH, SOC 31-9091, 2024-2034' }
    ],
    growth: 'BLS projects 9 percent growth for dental assistants from 2024 to 2034, about 28,300 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Dental Assistants', url: 'https://www.bls.gov/ooh/healthcare/dental-assistants.htm' }
  },
  passRate: {
    headline: 'DANB publishes no single national pass rate — the RHS exam is 100 scored questions in 75 minutes, with the result reported as pass/fail',
    summary: 'DANB does not publish a single national pass rate for the RHS exam in a fixed annual figure, and third-party estimates are not official data, so we do not treat them as authoritative. What DANB does publish is the format and the passing standard: the RHS exam is a computer-based test of 100 scored multiple-choice questions with a 75-minute time limit, and the result is reported as pass/fail with a section-by-section performance breakdown. The exam is delivered at Pearson VUE centres or through remote proctoring. The exam content follows the published RHS outline: exposing and evaluating dental radiographs (the exposure techniques, the film/digital sensors and the evaluation of image quality); the radiation health and safety practices (the ALARA principle, the radiation protection for patient, operator and staff); and the legal and ethical responsibilities. The absence of a published pass rate is not an absence of standards: the 100-question format rewards precise knowledge of radiography technique and safety, and DANB\'s section breakdown lets candidates see exactly where they fell short. The practical reading: study the DANB RHS outline and the radiation-safety practices, and hold yourself to 80 percent-plus on practice, because the licensure-adjacent pass line leaves little margin.',
    source: { label: 'DANB - Radiation Health and Safety (RHS) Exam', url: 'https://www.danb.org/exams-certifications/exams/radiation-health-and-safety-exam' },
    caveat: 'DANB publishes the format and section performance but no single national pass rate.'
  },
  studyPlan: {
    summary: 'The DANB RHS exam is a 100-question, 75-minute computer-based exam built on the published outline: exposing and evaluating dental radiographs, radiation health and safety practices, and the legal and ethical responsibilities. A defensible plan runs 30 to 50 hours over 3 to 4 weeks, ideally on top of dental-assisting training or work experience. Week one: the radiography fundamentals — the x-ray production and properties, the film and digital sensors, and the exposure techniques (paralleling, bisecting). Week two: image evaluation — the quality factors (density, contrast, sharpness), the common errors and the retake decisions. Week three: radiation safety — the ALARA principle, the patient and operator protection (lead aprons, thyroid collars, distance and shielding), and the state regulations. Week four: practice-question drilling and timed practice exams at the real 100-question, 75-minute format. The plan is technique-and-safety-heavy because the exam rewards precise knowledge of both the exposure skills and the protection practices; candidates who study only the technique fail the safety items.',
    totalHours: '30-50 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Radiography fundamentals', tasks: ['X-ray production and properties', 'Film and digital sensors', 'Exposure techniques: paralleling and bisecting'], hours: 10 },
      { label: 'Week 2', focus: 'Image evaluation', tasks: ['Density, contrast and sharpness', 'Common exposure errors', 'Retake decisions'], hours: 12 },
      { label: 'Week 3', focus: 'Radiation safety', tasks: ['The ALARA principle', 'Patient and operator protection', 'State regulations and legal duties'], hours: 12 },
      { label: 'Week 4', focus: 'Drill and mocks', tasks: ['Practice-question drilling in volume', 'Timed practice exams at the real format', 'Review weak outline areas'], hours: 12 }
    ],
    variants: [
      { label: 'Working dental assistant', detail: 'The clinical radiography is familiar; focus study on the exact safety numbers and state rules.' },
      { label: 'Student completing training', detail: 'Add 1-2 weeks of radiography fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The RHS exam rewards precise knowledge of both radiography technique and radiation safety, so the dominant strategy is balanced coverage: master the exposure techniques (paralleling, bisecting) and the image-quality factors, and the safety practices (the ALARA principle, the patient and operator protection measures, and the state regulations), because the exam tests both. Second, learn the exact protection measures — the lead apron and thyroid collar use, the distance and time principles, and the film-speed or sensor considerations — which are tested precisely. Third, use the DANB RHS outline as the scope map and the DANB practice test as the item-style reference. Fourth, drill the image-evaluation material: the quality factors and the common errors are a distinct block that candidates focused on technique often miss. Finally, take at least two timed practice exams at the real 100-question, 75-minute format; the pace is tight, and the section breakdown on the real exam rewards balanced coverage.',
    items: [
      { title: 'Balance technique and safety', detail: 'The exam tests both exposure skills and protection practices.' },
      { title: 'Learn the protection measures', detail: 'ALARA, aprons, distance and state rules are tested precisely.' },
      { title: 'Drill image evaluation', detail: 'Quality factors and common errors are a distinct block.' },
      { title: 'Use the DANB outline and practice test', detail: 'The authoritative scope and the closest item style.' },
      { title: 'Run two timed practice exams', detail: '100 questions in 75 minutes is a tight pace; rehearse it.' }
    ]
  },
  resourceComparison: {
    summary: 'DANB RHS prep is inexpensive because the official materials are low-cost. The DANB RHS outline (free) and the DANB practice test (about $35) are the core resources; dental-radiography textbooks ($50-$150) cover the material in depth, and many dental-assisting programs bundle review materials. Third-party question banks ($30-$100) add volume. The exam fee is about $145-$185 depending on DANB membership and whether it is taken as part of the CDA bundle. A realistic total budget is $200 to $500 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DANB RHS outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'DANB practice test', values: ['~$35', 'Official online practice', 'The closest official item style'] },
      { label: 'Dental-radiography textbooks', values: ['$50-$150', 'Printed or digital book', 'Technique and safety depth'] },
      { label: 'Third-party question banks', values: ['$30-$100', 'Online practice items', 'Drilling volume'] },
      { label: 'RHS exam', values: ['~$145-$185', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; DANB fees vary by membership and bundle; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common RHS mistake is studying the technique without the safety: candidates who know the exposure methods but not the ALARA principle, the protection measures or the state rules miss the safety block, which is a large share of the exam. The fix is balanced coverage. The second mistake is mislearning the image-quality factors and the common errors, which are tested precisely and drive the retake decisions. Third, candidates under-prepare the legal and ethical responsibilities, a distinct outline area. Fourth, some candidates never take a timed practice exam and misjudge the 75-minute pace. Finally, candidates treat RHS as a standalone checkbox without understanding it is a component of the broader DANB CDA certification; plan the full credential path.',
    items: [
      { mistake: 'Studying technique without safety', fix: 'ALARA, protection measures and state rules are a large share.' },
      { mistake: 'Mislearning image-quality factors', fix: 'Density, contrast and common errors are tested precisely.' },
      { mistake: 'Skipping the legal and ethical duties', fix: 'A distinct outline area; cover it.' },
      { mistake: 'Skipping timed practice', fix: '100 questions in 75 minutes; run timed practice exams.' },
      { mistake: 'Missing the CDA path', fix: 'RHS is a component of the DANB CDA; plan the full credential.' }
    ]
  },
  questionTypes: {
    summary: 'The RHS exam is a 100-question multiple-choice exam in 75 minutes. The items test the published outline: exposing and evaluating radiographs, radiation health and safety, and the legal and ethical responsibilities — with a heavy concentration on the technique, the image-quality factors and the protection practices. Samples below are editor-written illustrations of the published outline, not live exam items; they show the radiography-safety style of the real items.',
    types: [
      { name: 'Exposure-technique items', share: 'Largest block', detail: 'Techniques, sensors and exposure factors.' },
      { name: 'Safety and protection items', share: 'Large block', detail: 'ALARA, aprons, distance and state rules.' },
      { name: 'Image-evaluation items', share: 'Meaningful block', detail: 'Quality factors, errors and retake decisions.' }
    ],
    samples: [
      {
        prompt: 'Under the ALARA principle, the dental assistant should:',
        options: ['A. Use the lowest radiation exposure that still produces an acceptable image', 'B. Take as many X-rays as needed without limit', 'C. Skip the lead apron for the patient', 'D. Stand directly in the beam path'],
        answer: 'A',
        explanation: 'ALARA — as low as reasonably achievable — guides the dental assistant to the lowest exposure that produces an acceptable diagnostic image. Unlimited exposure, skipped protection or standing in the beam path each violate the principle.'
      },
      {
        prompt: 'Which exposure technique is recommended for periapical radiography to minimise image distortion?',
        options: ['A. The paralleling technique', 'B. The bisecting-angle technique only', 'C. No technique', 'D. Holding the sensor by hand'],
        answer: 'A',
        explanation: 'The paralleling technique is the recommended method for periapical radiography — it minimises distortion by keeping the sensor parallel to the tooth. Bisecting-angle, no technique or hand-holding each produce more distortion or more exposure.'
      },
      {
        prompt: 'A radiograph appears too dark overall. The most likely cause is:',
        options: ['A. Overexposure — too much exposure time or milliamperage', 'B. Underexposure', 'C. A dirty sensor', 'D. The wrong film speed'],
        answer: 'A',
        explanation: 'An image that is too dark (excessive density) indicates overexposure — too much time, milliamperage or kilovoltage. Underexposure produces a light image, and sensor or film-speed issues produce different artefacts.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The DANB RHS exam is a 100-question, 75-minute computer-based exam at a Pearson VUE centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 45 seconds per item, flag uncertain items for review, and budget the tight window carefully. Your result is reported as pass/fail after the exam, with the section-by-section performance breakdown. If you do not pass, the DANB retake policy and fee apply. On a pass, the RHS component counts toward the DANB Certified Dental Assistant (CDA) certification, and DANB certifications renew on a cycle with continuing education. The afterwards matters: plan the remaining CDA components and the renewal cycle.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '100 questions in 75 minutes; pace ~45 seconds per item.' },
      { time: 'After submit', detail: 'Pass/fail is reported with the section breakdown.' },
      { time: 'Next', detail: 'Plan the remaining CDA components and the renewal cycle.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '75 minutes for 100 questions; the clock does not pause',
      'RHS counts toward the DANB CDA certification'
    ],
    afterwards: 'On a pass, apply the RHS component toward the CDA and plan the renewal cycle. On a fail, retake per the DANB policy after additional outline study.'
  }
};

export default data;
