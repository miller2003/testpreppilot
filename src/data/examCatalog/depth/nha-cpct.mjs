const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Allied-health & clinical-support certifications desk',
    bio: 'This desk covers allied-health certifications. Exam structure, fees and rules come from the certifying body\'s official pages (NHA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NHA Patient Care Technician (CPCT/A) pages and BLS OOH Nursing Assistants (SOC 31-1131), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$38,130 median for nursing assistants (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CPCT" — the NHA Patient Care Technician certification validates patient-care skill, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Nursing Assistants, SOC 31-1131, which had a May 2024 median wage of $38,130, with the lowest 10 percent under $29,410 and the highest 10 percent above $48,680. The fit is direct: patient care technicians work alongside nursing staff in hospitals and clinics, performing the nursing-assistant duties plus phlebotomy and basic monitoring tasks, and the role sits inside or directly adjacent to the nursing-assistant occupation. BLS counted 1,417,100 nursing assistant jobs in 2024 and projects a 1 percent decline from 2024 to 2034, with about 203,400 openings a year, almost all replacement demand. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the certification\'s value is as an employability signal — many employers prefer or require the CPCT/A for patient-care technician roles, and the added phlebotomy and EKG skills the certification validates typically support roles at or above the nursing-assistant median. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, nursing assistants', value: '$38,130', note: 'BLS OOH, SOC 31-1131, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $29,410', note: 'BLS OOH, SOC 31-1131, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $48,680', note: 'BLS OOH, SOC 31-1131, May 2024' },
      { label: 'Projected openings per year', value: '~203,400', note: 'BLS OOH, SOC 31-1131, 2024-2034' }
    ],
    growth: 'BLS projects a 1 percent decline for nursing assistants from 2024 to 2034, about 203,400 openings per year, nearly all replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Nursing Assistants', url: 'https://www.bls.gov/ooh/healthcare/nursing-assistants.htm' }
  },
  passRate: {
    headline: 'NHA publishes the format — 100 scored questions in 1 hour 50 minutes — and the passing standard is reported on NHA\'s scale',
    summary: 'The National Healthcareer Association does not publish a fixed national pass rate for the CPCT/A exam, and third-party estimates are not official data, so we do not treat them as authoritative. What NHA does publish is the format: the Patient Care Technician (CPCT/A) exam has 100 scored multiple-choice questions (plus pretest items) with a 1-hour-50-minute time limit, delivered by computer at PSI test centres or through remote proctoring, and the result is reported on NHA\'s scale with a passing standard set by NHA. The exam content follows the published exam outline: the patient-care technician role and the fundamentals of care; safety and infection control; the basic patient-care skills; the phlebotomy skills; and the EKG skills. The absence of a published pass rate is not an absence of standards: the exam validates a broad set of clinical skills, and the section breakdown lets candidates see where they fell short. The practical reading: the CPCT/A bundles the nursing-assistant, phlebotomy and EKG skills into one credential, so preparation covers all three skill groups, and candidates who study only the care fundamentals fail the phlebotomy and EKG sections.',
    source: { label: 'NHA - Patient Care Technician (CPCT/A) Certification', url: 'https://www.nhanow.com/certifications/patient-care-technician' },
    caveat: 'NHA publishes the format and scale but no fixed national pass rate.'
  },
  studyPlan: {
    summary: 'The CPCT/A exam is a 100-scored-question, 1-hour-50-minute exam built on the published outline: the PCT role and fundamentals, safety and infection control, basic patient care, phlebotomy, and EKG. Because the credential bundles three skill groups, the plan covers all three. A defensible plan runs 60 to 100 hours over 6 to 8 weeks. Weeks 1-2: the role and fundamentals — the PCT duties, the vital signs, the patient-care skills (bathing, positioning, mobility) and the communication and documentation. Weeks 3-4: safety and infection control, and the phlebotomy skills — the safety standards, then the venipuncture and capillary collection procedures, the order of draw and the specimen handling. Weeks 5-6: the EKG skills — lead placement, the EKG tracing, the arrhythmia recognition and the Holter monitor. Weeks 7-8: practice-question drilling and timed practice exams at the real format. The plan is skill-broad because the exam validates the full PCT scope; candidates who study only the care fundamentals fail the phlebotomy and EKG sections.',
    totalHours: '60-100 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Role and fundamentals', tasks: ['PCT duties and vital signs', 'Basic patient-care skills', 'Communication, documentation and ethics'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Safety and phlebotomy', tasks: ['Safety and infection control', 'Venipuncture and capillary collection', 'Order of draw and specimen handling'], hours: 30 },
      { label: 'Weeks 5-6', focus: 'EKG skills', tasks: ['Lead placement and EKG tracing', 'Arrhythmia recognition basics', 'Holter monitor and telemetry'], hours: 25 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Practice-question drilling in volume', 'Timed practice exams at the real format', 'Review weak outline areas'], hours: 20 }
    ],
    variants: [
      { label: 'Working PCT or CNA', detail: 'The care fundamentals are familiar; focus study on phlebotomy, EKG and the exam format.' },
      { label: 'Career-changer', detail: 'Add 2 weeks of clinical fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The CPCT/A rewards breadth across the three skill groups, so the dominant strategy is balanced coverage: the exam draws from the care fundamentals, the phlebotomy skills and the EKG skills, and candidates who study only one group fail the others. Second, master the phlebotomy material deliberately — the order of draw, the additives and the specimen handling are tested precisely, and it is the skill group most candidates under-prepare. Third, learn the EKG skills — lead placement and the basic arrhythmia recognition — because the EKG section is a distinct and often-neglected block. Fourth, use the NHA exam outline and the NHA practice test as the scope map and item-style reference, and hold yourself to 80 percent-plus on practice. Finally, take at least two timed practice exams at the real 100-scored-question, 1-hour-50-minute format; the pace is part of the test.',
    items: [
      { title: 'Cover all three skill groups', detail: 'Care, phlebotomy and EKG — one-group study fails the others.' },
      { title: 'Master the phlebotomy material', detail: 'Order of draw, additives and handling are tested precisely.' },
      { title: 'Learn the EKG skills', detail: 'Lead placement and arrhythmia basics are a distinct block.' },
      { title: 'Use the NHA outline and practice test', detail: 'The authoritative scope and the closest item style.' },
      { title: 'Run two timed practice exams', detail: '100 scored questions in 1h50m; the pace is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CPCT/A prep spans the NHA\'s official resources and third-party providers. The NHA exam outline (free), the official study guide ($50-$100) and the NHA practice test (about $35) are the core stack; the NHA also offers the MedCerts-style bundle or the study package with the exam. Third-party question banks ($30-$100) add volume. The exam fee is about $117-$160 depending on the package and whether the study materials are included. A realistic total budget is $200 to $600 including the exam and materials, on top of any training program. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NHA exam outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'NHA study guide', values: ['$50-$100', 'Printed or digital book', 'Structured content coverage'] },
      { label: 'NHA practice test', values: ['~$35', 'Official online practice', 'The closest official item style'] },
      { label: 'Third-party question banks', values: ['$30-$100', 'Online practice items', 'Drilling volume'] },
      { label: 'CPCT/A exam', values: ['~$117-$160', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; NHA fees vary by package; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CPCT/A mistake is studying only the care fundamentals: candidates who focus on the nursing-assistant material fail the phlebotomy and EKG sections, which are distinct and heavily weighted parts of the exam. The fix is balanced three-group coverage. The second mistake is under-preparing phlebotomy — the order of draw, additives and handling are tested precisely, and it is the most-neglected group. Third, candidates skip the EKG section, treating it as minor when it is a full part of the credential. Fourth, some candidates never take a timed practice exam and misjudge the 1-hour-50-minute pace. Finally, candidates who do not complete the clinical-skills component of their training arrive without the hands-on foundation the exam assumes.',
    items: [
      { mistake: 'Studying care fundamentals only', fix: 'Cover care, phlebotomy and EKG — the full three-group scope.' },
      { mistake: 'Under-preparing phlebotomy', fix: 'Order of draw, additives and handling are tested precisely.' },
      { mistake: 'Skipping the EKG section', fix: 'A full part of the credential; cover it.' },
      { mistake: 'Never timing a practice exam', fix: '100 scored questions in 1h50m; run timed practice exams.' },
      { mistake: 'Skipping the clinical foundation', fix: 'The exam assumes hands-on skills; complete the clinical training.' }
    ]
  },
  questionTypes: {
    summary: 'The CPCT/A exam is a 100-scored-question multiple-choice exam in 1 hour 50 minutes. The items cover the published outline: the PCT role and fundamentals, safety and infection control, basic patient care, phlebotomy and EKG — with many scenario items describing a patient-care or clinical situation and asking for the correct action, procedure or interpretation. Samples below are editor-written illustrations of the published outline, not live exam items; they show the clinical-skills style of the real items.',
    types: [
      { name: 'Patient-care scenario items', share: 'Large block', detail: 'Vital signs, positioning, mobility and care duties.' },
      { name: 'Phlebotomy items', share: 'Large block', detail: 'Collection procedures, order of draw and handling.' },
      { name: 'EKG items', share: 'Large block', detail: 'Lead placement, tracing and basic arrhythmia recognition.' }
    ],
    samples: [
      {
        prompt: 'When collecting blood into a lavender-top tube, the phlebotomy step that must precede collection into other additive tubes is governed by:',
        options: ['A. The order of draw, which places the additive tubes in a defined sequence', 'B. The patient\'s preference', 'C. The tube size', 'D. No rule'],
        answer: 'A',
        explanation: 'The order of draw defines the sequence of tube collection to prevent additive contamination — the standard phlebotomy rule. Patient preference, tube size or no rule each misapply the collection standard.'
      },
      {
        prompt: 'A patient care technician observes a patient\'s EKG showing a chaotic, irregular tracing with no identifiable P waves. This pattern is most consistent with:',
        options: ['A. Atrial fibrillation', 'B. Normal sinus rhythm', 'C. First-degree heart block', 'D. Sinus bradycardia'],
        answer: 'A',
        explanation: 'Atrial fibrillation presents with a chaotic, irregular rhythm and no identifiable P waves. Normal sinus rhythm has P waves, first-degree block has a prolonged PR interval, and bradycardia is a slow rate with P waves.'
      },
      {
        prompt: 'When assisting a patient to stand from a bed, the PCT should:',
        options: ['A. Position the patient safely and use proper body mechanics, assisting as needed', 'B. Pull the patient up by the arms', 'C. Let the patient manage alone if they are independent', 'D. Skip the assistance to save time'],
        answer: 'A',
        explanation: 'Safe patient mobility uses proper body mechanics and appropriate assistance — positioning the patient and assisting as needed. Pulling by the arms, forcing independence or skipping assistance each risk injury to the patient and the PCT.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The CPCT/A exam is a 100-scored-question, 1-hour-50-minute computer-based exam at a PSI test centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 66 seconds per item, flag uncertain items for review, and finish with time to spare. Your result is reported after the exam, with the official score report and section breakdown following. If you do not pass, the NHA retake policy and fee apply. On a pass, the CPCT/A is valid for two years and renewed by completing continuing education (CE) credits or retaking. The afterwards matters: log your CE credits as you earn them, because NHA audits renewals, and keep the certification current for employers.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '100 scored questions in 1h50m; pace ~66 seconds per item.' },
      { time: 'After submit', detail: 'Result is reported with the section breakdown.' },
      { time: 'Next', detail: 'Plan the 2-year CE renewal cycle.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '1 hour 50 minutes for 100 scored questions; the clock does not pause',
      'The certification renews every 2 years with CE credits or a retake'
    ],
    afterwards: 'On a pass, your CPCT/A is valid for two years; earn CE credits (or retake) to renew. On a fail, retake per the NHA policy after additional study.'
  }
};

export default data;
