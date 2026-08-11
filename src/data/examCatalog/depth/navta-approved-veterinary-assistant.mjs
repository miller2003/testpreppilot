const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Veterinary & animal-care certifications desk',
    bio: 'This desk covers veterinary-support credentials. Exam structure, fees and rules come from the certifying body\'s official pages (NAVTA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NAVTA Approved Veterinary Assistant (AVA) program pages and BLS OOH Veterinary Assistants (SOC 31-9096), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$34,920 median for veterinary assistants and laboratory animal caretakers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AVA" — the NAVTA Approved Veterinary Assistant credential validates entry-level veterinary-assistant training, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Veterinary Assistants and Laboratory Animal Caretakers, SOC 31-9096, which had a May 2024 median wage of $34,920, with the lowest 10 percent under $27,050 and the highest 10 percent above $47,890. The fit is direct: NAVTA-approved veterinary assistants work in clinics, hospitals and shelters performing the animal-care, restraint and facility duties, all inside this occupation. BLS counted 111,900 veterinary assistant jobs in 2024 and projects 16 percent growth from 2024 to 2034, much faster than the average for all occupations, with about 17,500 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the AVA credential\'s value is as a training-and-competency signal that clinics use in hiring; the certification does not replace the higher-paying veterinary-technician credential, which BLS reports separately at a higher median. Read the number as the market for the entry occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, veterinary assistants and lab animal caretakers', value: '$34,920', note: 'BLS OOH, SOC 31-9096, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $27,050', note: 'BLS OOH, SOC 31-9096, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $47,890', note: 'BLS OOH, SOC 31-9096, May 2024' },
      { label: 'Median, veterinary technologists and technicians (senior track)', value: '$43,350', note: 'BLS OOH, SOC 29-2056, May 2024' }
    ],
    growth: 'BLS projects 16 percent growth for veterinary assistants from 2024 to 2034, about 17,500 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Veterinary Assistants and Laboratory Animal Caretakers', url: 'https://www.bls.gov/ooh/healthcare/veterinary-assistants-and-laboratory-animal-caretakers.htm' }
  },
  passRate: {
    headline: 'NAVTA publishes the format and the 75% passing standard — and does not publish a cohort pass rate',
    summary: 'NAVTA does not publish cohort pass rates for the Approved Veterinary Assistant exam, and third-party estimates are not official data, so we do not treat them as authoritative. What NAVTA does publish is the format and the passing standard: the AVA exam has 100 multiple-choice questions with a 90-minute time limit, and a passing score of 75 percent — at least 75 correct answers. The exam is delivered online through NAVTA\'s proctored platform after the candidate completes the NAVTA-approved training program, and the certification is valid for two years, renewed by continuing education. The exam content follows the published AVA course curriculum: veterinary practice and animal handling, anatomy and physiology basics, medical terminology, the clinical procedures and the practice-management duties. The absence of a published pass rate is not an absence of standards: the 75 percent line on 100 questions is a real bar, and the exam validates the training the approved program delivered. The practical reading: the credential requires completing the NAVTA-approved course first, and the exam rewards the course\'s content, so preparation is studying the course material and practising with the AVA practice exam.',
    source: { label: 'NAVTA - Approved Veterinary Assistant (AVA) program', url: 'https://navta.net/page/AVA' },
    caveat: 'NAVTA publishes the 75% passing standard but no cohort pass rate; the exam requires completing the approved training program.'
  },
  studyPlan: {
    summary: 'The AVA exam is a 100-question, 90-minute online exam with a 75 percent passing line, and the credential requires completing a NAVTA-approved veterinary-assistant training program first — the exam validates that training. A defensible plan runs 15 to 30 hours of exam-focused study over 2 to 3 weeks, on top of the training program. Week one: review the course material on animal handling and restraint, the anatomy and physiology basics, and the medical terminology, because the exam assumes the course\'s vocabulary. Week two: the clinical procedures — the examination-room duties, the sample collection, the surgical-assistance basics and the patient-care tasks — plus the practice-management and communication duties. Week three: the AVA practice exam, targeted review of the weak areas, and a timed run at the real 100-question, 90-minute format. The plan is course-review-heavy because the exam is built on the approved curriculum; candidates who complete the training and review the material pass at high rates.',
    totalHours: '15-30 hours over 2-3 weeks (after the approved training program)',
    weeks: [
      { label: 'Week 1', focus: 'Fundamentals review', tasks: ['Animal handling and restraint', 'Anatomy and physiology basics', 'Medical terminology'], hours: 8 },
      { label: 'Week 2', focus: 'Clinical procedures', tasks: ['Examination-room and patient-care duties', 'Sample collection and surgical assistance', 'Practice management and communication'], hours: 10 },
      { label: 'Week 3', focus: 'Practice and exam', tasks: ['The AVA practice exam', 'Targeted review of weak areas', 'One timed run, then the exam'], hours: 8 }
    ],
    variants: [
      { label: 'Recently completed the course', detail: 'The material is fresh; focus on the practice exam and the timed format.' },
      { label: 'Working in a clinic without the course', detail: 'Complete the NAVTA-approved training first; the exam requires it.' }
    ]
  },
  prepStrategies: {
    summary: 'The AVA exam rewards the course\'s content, so the dominant strategy is reviewing the approved training material thoroughly and using the AVA practice exam, which mirrors the real item style. Second, master the animal-handling and restraint material, a core part of the assistant role and the exam, because the exam assumes hands-on familiarity. Third, learn the medical terminology and the anatomy basics precisely, since the exam tests the vocabulary the course taught. Fourth, cover the clinical procedures and the practice-management duties deliberately — the assistant scope includes both the patient-care tasks and the front-office duties. Finally, take at least one timed practice run at the real 100-question, 90-minute format; the 75 percent line leaves room for review but not for rushing, and the timed run builds the pacing.',
    items: [
      { title: 'Review the course material', detail: 'The exam is built on the approved curriculum; study it.' },
      { title: 'Master animal handling and restraint', detail: 'A core part of the role and the exam.' },
      { title: 'Learn the terminology precisely', detail: 'The exam tests the course\'s vocabulary and anatomy basics.' },
      { title: 'Cover procedures and management', detail: 'Both the patient-care and the front-office duties are tested.' },
      { title: 'Run one timed practice exam', detail: '100 questions in 90 minutes; practise the pacing.' }
    ]
  },
  resourceComparison: {
    summary: 'AVA prep costs are dominated by the training program. NAVTA-approved veterinary-assistant programs range from roughly $300 to $2,000 depending on the provider and format (many are online with a clinical component). The AVA exam fee is about $100-$150 for NAVTA members and slightly more for non-members, and the practice exam is included or low-cost. Free resources include the NAVTA program pages and the course materials you receive with the training. A realistic total budget is $500 to $2,500 including the training and exam. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NAVTA-approved training program', values: ['$300-$2,000', 'Online or classroom + clinical', 'The required training and core learning'] },
      { label: 'AVA practice exam', values: ['Included or ~$30', 'Official online practice', 'The closest item style'] },
      { label: 'AVA exam', values: ['~$100-$150', 'Proctored online exam', 'The certification itself'] },
      { label: 'Veterinary-assistant textbooks', values: ['$50-$100', 'Printed or digital book', 'Supplementary review material'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; NAVTA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AVA mistake is treating the exam as optional preparation: candidates who complete the training but do not review the material meet the exam without the vocabulary and procedures fresh, and the 75 percent line punishes that. The fix is a focused review week. The second mistake is under-preparing the animal-handling and restraint material, a core part of the role and the exam. Third, candidates skip the practice-management and communication duties, treating them as minor when they are tested. Fourth, some candidates never take a timed practice run and misjudge the 90-minute pace. Finally, candidates who have not completed the NAVTA-approved training cannot take the exam at all — the course is the gate, so confirm the approved-program requirement before planning.',
    items: [
      { mistake: 'Skipping the review', fix: 'Review the course material; the 75% line punishes stale knowledge.' },
      { mistake: 'Under-preparing animal handling', fix: 'A core part of the role and the exam; master it.' },
      { mistake: 'Skipping practice-management duties', fix: 'A tested part of the assistant scope; cover it.' },
      { mistake: 'Never timing a practice run', fix: '100 questions in 90 minutes; run a timed practice exam.' },
      { mistake: 'Skipping the approved course', fix: 'The exam requires the NAVTA-approved training; complete it first.' }
    ]
  },
  questionTypes: {
    summary: 'The AVA exam is a 100-question multiple-choice exam in 90 minutes, delivered online under proctoring. The items test the approved course curriculum: animal handling and restraint, anatomy and physiology basics, medical terminology, the clinical procedures and the practice-management duties. Many items are scenario-based — a clinic or patient situation followed by the correct assistant action. Samples below are editor-written illustrations of the published curriculum, not live exam items; they show the veterinary-assistant style of the real items.',
    types: [
      { name: 'Handling and restraint items', share: 'Large block', detail: 'Safe handling and restraint of common species.' },
      { name: 'Clinical procedure items', share: 'Large block', detail: 'Patient care, sample collection and surgical assistance.' },
      { name: 'Terminology and management items', share: 'Meaningful block', detail: 'Medical terms and practice-management duties.' }
    ],
    samples: [
      {
        prompt: 'When restraining a small dog for a blood draw, the veterinary assistant should:',
        options: ['A. Use gentle, secure restraint that keeps the dog still and the vein accessible without causing distress', 'B. Restrain as tightly as possible', 'C. Muzzle without any handling', 'D. Let the dog roam the room'],
        answer: 'A',
        explanation: 'Safe restraint is gentle but secure — keeping the animal still and the vein accessible without causing distress. Overly tight restraint, muzzling without handling or letting the animal roam each fail the safe-restraint standard.'
      },
      {
        prompt: 'Which term describes the surgical preparation of the patient\'s skin to reduce the risk of infection?',
        options: ['A. Surgical site preparation (clipping and scrubbing)', 'B. Aseptic handwashing only', 'C. Post-operative bandaging', 'D. Anesthesia monitoring'],
        answer: 'A',
        explanation: 'Surgical site preparation — clipping and scrubbing the surgical site — reduces the infection risk. Handwashing, bandaging and monitoring are different steps in the surgical process.'
      },
      {
        prompt: 'A client calls with a routine appointment question. The veterinary assistant\'s appropriate response is to:',
        options: ['A. Help with the scheduling and route medical questions to the appropriate staff', 'B. Give medical advice beyond their scope', 'C. Hang up', 'D. Diagnose the pet'],
        answer: 'A',
        explanation: 'The assistant handles scheduling and front-office duties, routing medical questions to the veterinarian or technician. Giving medical advice, hanging up or diagnosing the pet each exceed the assistant\'s scope.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published curriculum, not live exam items.'
  },
  examDay: {
    summary: 'The AVA exam is a 100-question, 90-minute online exam through NAVTA\'s proctored platform, taken after completing the NAVTA-approved training program. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet space — and close unrelated applications before starting. Pace at about 54 seconds per item, flag uncertain items for review, and finish with time to spare; the 75 percent line leaves room for review but not for rushing. Your result is reported on completion, with the certificate following on a pass. If you do not pass, the retake policy defines the terms. On a pass, the AVA is valid for two years and renewed by continuing education. The afterwards matters: keep the renewal cycle on your calendar, and consider the veterinary-technician path — the higher-paid credential BLS reports separately — as the next step.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your NAVTA account login'],
    leave: ['Phone and other devices within the proctor\'s view', 'Notes and open browser tabs — the exam is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '100 questions in 90 minutes; pace ~54 seconds per item.' },
      { time: 'After submit', detail: 'Result is reported; the certificate follows on a pass.' },
      { time: 'Next', detail: 'Note the 2-year renewal and plan the vet-tech path.' }
    ],
    rules: [
      'Closed-book online exam under proctoring',
      '90 minutes for 100 questions; the clock does not pause',
      'The certification is valid 2 years, renewed by continuing education'
    ],
    afterwards: 'On a pass, your AVA is valid for two years; renew with continuing education. On a fail, retake per the policy after additional course review.'
  }
};

export default data;
