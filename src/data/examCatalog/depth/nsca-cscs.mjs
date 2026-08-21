const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Fitness, wellness & performance certifications desk',
    bio: 'This desk covers fitness and performance credentials. Exam structure, fees and rules come from the certifying body\'s official pages (NSCA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NSCA CSCS program pages and BLS OOH Fitness Trainers and Instructors (SOC 39-9031), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$46,180 median for fitness trainers and instructors (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CSCS" — the NSCA Certified Strength and Conditioning Specialist credential validates performance-training knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Fitness Trainers and Instructors, SOC 39-9031, which had a May 2024 median wage of $46,180, with the lowest 10 percent under $27,160 and the highest 10 percent above $87,760. The fit must be read with an honest caveat: the BLS occupation blends all fitness trainers, and CSCS holders typically work in collegiate and professional strength-and-conditioning, performance facilities and sports-science settings, where the compensation is often structured differently — salaried roles at the higher end of the distribution, plus the seasonal and performance-facility roles at various levels. BLS counted 856,500 fitness trainer jobs in 2024 and projects 14 percent growth from 2024 to 2034, much faster than the average for all occupations, with about 86,400 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and the CSCS\'s value is as the recognised performance-training credential that employers in athletics and sports performance require or prefer. Read the number as the market for the occupation, with the CSCS concentrated in the performance segment.',
    rows: [
      { label: 'Median annual wage, fitness trainers and instructors', value: '$46,180', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $27,160', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $87,760', note: 'BLS OOH, SOC 39-9031, May 2024' },
      { label: 'Projected openings per year', value: '~86,400', note: 'BLS OOH, SOC 39-9031, 2024-2034' }
    ],
    growth: 'BLS projects 14 percent growth for fitness trainers and instructors from 2024 to 2034, about 86,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Fitness Trainers and Instructors', url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm' }
  },
  passRate: {
    headline: 'NSCA publishes no official pass rate — the CSCS exam is 220 questions across two sections in 3.5 hours, with the score reported on NSCA\'s scale',
    summary: 'The NSCA does not publish official cohort pass rates for the CSCS exam, and third-party estimates are not official data, so we do not treat them as authoritative. What the NSCA does publish is the format: the CSCS exam has 220 multiple-choice questions divided into two sections — the scientific foundations (110 questions, 1.5 hours) and the practical/applied section (110 questions, 2 hours) — for a total of 3.5 hours, delivered by computer at Pearson VUE centres, with the result reported on NSCA\'s scale against a passing standard set by the NSCA. The exam content follows the published exam description: exercise sciences (anatomy, exercise physiology, biomechanics), nutrition, and the program-design and testing-and-evaluation content for strength and conditioning. The absence of a published pass rate is not an absence of standards: the 220-question, two-section format rewards broad, professional-level knowledge, and the CSCS is widely regarded as the standard performance-training credential. The practical reading: the two-section format means candidates must pass both sections\' standards, so balanced preparation across the sciences and the applied content is essential.',
    source: { label: 'NSCA - Certified Strength and Conditioning Specialist (CSCS)', url: 'https://www.nsca.com/certification/cscs/' },
    caveat: 'NSCA publishes the format and scale but no official pass rate; the exam has two sections with their own standards.'
  },
  studyPlan: {
    summary: 'The CSCS exam is a 220-question, 3.5-hour exam in two sections — scientific foundations (110 questions) and practical/applied (110 questions) — built on the published exam content: exercise sciences, nutrition, and the program-design and testing-and-evaluation material. A defensible plan runs 120 to 180 hours over 8 to 12 weeks. Weeks 1-3: the scientific foundations — anatomy, exercise physiology and biomechanics, using flashcards for the muscle actions, the energy systems and the biomechanical principles, because this section is recall-and-application heavy. Weeks 4-6: nutrition and the testing-and-evaluation material — the nutrient basics, the body-composition and performance testing protocols. Weeks 7-9: the practical section — program design (needs analysis, exercise selection, the training variables) and the strength, power and endurance programming. Weeks 10-12: question-bank drilling and full timed practice exams at the real two-section format. The plan is balanced because both sections have their own standards; candidates who study only the sciences fail the applied section.',
    totalHours: '120-180 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Scientific foundations', tasks: ['Anatomy and muscle actions', 'Exercise physiology and energy systems', 'Biomechanics and sport technique'], hours: 50 },
      { label: 'Weeks 4-6', focus: 'Nutrition and testing', tasks: ['Nutrition fundamentals for performance', 'Body composition and testing protocols', 'Performance assessment'], hours: 40 },
      { label: 'Weeks 7-9', focus: 'Program design', tasks: ['Needs analysis and exercise selection', 'The training variables and periodisation', 'Strength, power and endurance programs'], hours: 45 },
      { label: 'Weeks 10-12', focus: 'Drill and mocks', tasks: ['Question-bank drilling in volume', 'Full timed practice exams at the two-section format', 'Review weak areas'], hours: 40 }
    ],
    variants: [
      { label: 'Working in strength and conditioning', detail: 'The applied section accelerates; focus study on the scientific foundations and the exam format.' },
      { label: 'Personal trainer adding CSCS', detail: 'Add 2-3 weeks of exercise-science review before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The CSCS rewards balanced, professional-level knowledge across both sections, so the dominant strategy is dividing study between the scientific foundations and the applied content: the exam has two sections with their own standards, and candidates who study only one fail the other. Second, master the scientific foundations with flashcards — the muscle actions, the energy systems, the biomechanical principles and the physiological adaptations — because this section rewards precise recall and application. Third, learn the program-design material as a system: the needs analysis, the exercise selection, the training variables and the periodisation models are the applied core. Fourth, use the NSCA\'s official study resources — the Essentials of Strength Training and Conditioning text and the NSCA practice exams — as the scope map and item-style reference. Finally, take at least two full timed practice exams at the real two-section format; the 3.5-hour length and the section timing are part of the test.',
    items: [
      { title: 'Balance both sections', detail: 'Two sections with their own standards; one-sided study fails the other.' },
      { title: 'Flashcard the science', detail: 'Muscle actions, energy systems and biomechanics reward precise recall.' },
      { title: 'Learn program design as a system', detail: 'Needs analysis, variables and periodisation are the applied core.' },
      { title: 'Use the NSCA study resources', detail: 'The Essentials text and practice exams are the scope map.' },
      { title: 'Run two full timed mocks', detail: '3.5 hours across two sections; the timing is part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CSCS prep costs are dominated by the study materials. The NSCA\'s Essentials of Strength Training and Conditioning text ($80-$130) is the authoritative reference, and the NSCA practice exams ($50-$100) are the closest item style; the NSCA also offers the CSCS study bundle. Third-party study guides ($50-$150) and question banks ($50-$200) add volume. The exam fee is about $475 for NSCA members and $635 for non-members. A realistic total budget is $600 to $1,200 including the exam and materials. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Essentials of Strength Training and Conditioning', values: ['$80-$130', 'Textbook', 'The authoritative reference'] },
      { label: 'NSCA practice exams', values: ['$50-$100', 'Official online practice', 'The closest official item style'] },
      { label: 'NSCA study bundle', values: ['$300-$500', 'Text + practice + prep resources', 'The complete official stack'] },
      { label: 'Third-party guides and banks', values: ['$50-$200', 'Books and online practice', 'Extra volume and alternatives'] },
      { label: 'CSCS exam', values: ['~$475 member / ~$635 non-member', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; NSCA fees vary by membership; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CSCS mistake is studying one section: candidates with a training background focus on the program-design material and fail the scientific-foundations section, which has its own standard. The fix is balanced two-section study. The second mistake is memorising the science without the application: the foundations section rewards applying the physiology and biomechanics to training decisions. Third, candidates under-prepare the testing-and-evaluation material, a distinct content area. Fourth, some candidates never take a full timed practice exam and misjudge the 3.5-hour, two-section format. Finally, candidates who use only third-party materials miss the depth of the Essentials text, which is the authoritative source the exam follows.',
    items: [
      { mistake: 'Studying one section', fix: 'Both sections have standards; balance the science and the applied.' },
      { mistake: 'Memorising without application', fix: 'The foundations section applies physiology and biomechanics.' },
      { mistake: 'Under-preparing testing and evaluation', fix: 'A distinct content area; cover the testing protocols.' },
      { mistake: 'Skipping full timed mocks', fix: '3.5 hours across two sections; run two full timed exams.' },
      { mistake: 'Using only third-party materials', fix: 'The Essentials text is the authoritative source; study it.' }
    ]
  },
  questionTypes: {
    summary: 'The CSCS exam is a 220-question multiple-choice exam in two sections (110 questions each). The scientific-foundations section tests anatomy, exercise physiology, biomechanics and nutrition; the practical/applied section tests program design, testing and evaluation, and training techniques — with many scenario items presenting an athlete or training situation and asking for the correct decision. Samples below are editor-written illustrations of the published exam content, not live exam items; they show the professional-performance style of the real items.',
    types: [
      { name: 'Scientific-foundation items', share: 'Section 1 (110 questions)', detail: 'Anatomy, physiology, biomechanics and nutrition.' },
      { name: 'Program-design items', share: 'Section 2, largest block', detail: 'Needs analysis, exercise selection and variables.' },
      { name: 'Testing and technique items', share: 'Section 2, meaningful block', detail: 'Testing protocols and lifting technique.' }
    ],
    samples: [
      {
        prompt: 'During a maximal-effort back squat, the prime movers of knee extension are primarily:',
        options: ['A. The quadriceps', 'B. The hamstrings', 'C. The gluteals', 'D. The calves'],
        answer: 'A',
        explanation: 'The quadriceps are the primary knee extensors. The hamstrings flex the knee and extend the hip, the gluteals extend the hip, and the calves act at the ankle.'
      },
      {
        prompt: 'A strength coach is designing a program for a rugby player whose needs analysis identifies a priority on lower-body power. The most appropriate exercise selection is:',
        options: ['A. Power-focused movements such as cleans and jump variations', 'B. Long-duration cardio only', 'C. Isolation exercises only', 'D. No strength work'],
        answer: 'A',
        explanation: 'Power training uses explosive movements such as cleans and jump variations — the appropriate selection for a lower-body-power priority. Cardio, isolation-only or no strength work each fail the identified need.'
      },
      {
        prompt: 'An athlete performs 3 sets of 5 repetitions at 85% of their 1RM with 3 minutes of rest. This prescription primarily develops:',
        options: ['A. Maximal strength', 'B. Muscular endurance', 'C. Aerobic capacity', 'D. Flexibility'],
        answer: 'A',
        explanation: 'Heavy loads (85% 1RM) with low reps (5) and long rest (3 minutes) target maximal strength. Endurance, aerobic capacity and flexibility use different loading and volume prescriptions.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam content, not live exam items.'
  },
  examDay: {
    summary: 'The CSCS exam is a 220-question, 3.5-hour computer-based exam in two sections at a Pearson VUE centre. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Manage the two-section timing deliberately: budget about 1.5 hours for the scientific-foundations section and 2 hours for the practical section, and flag uncertain items for review. Your result is reported after the exam, with the section scores following. If you do not pass a section, the NSCA retake policy defines the terms. On a pass, the CSCS is valid for three years and renewed by earning continuing education units (CEUs). The afterwards matters: log your CEUs as you earn them, because the NSCA audits renewals.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and the two-section schedule.' },
      { time: 'Section 1', detail: '110 questions in 1.5 hours (scientific foundations).' },
      { time: 'Section 2', detail: '110 questions in 2 hours (practical/applied).' },
      { time: 'After submit', detail: 'Result is reported with the section scores.' },
      { time: 'Next', detail: 'Plan the 3-year CEU renewal cycle.' }
    ],
    rules: [
      'The exam is computer-based and timed in two sections',
      '220 questions total in 3.5 hours; the clock runs per section',
      'The certification renews every 3 years with CEUs'
    ],
    afterwards: 'On a pass, your CSCS is valid for three years; earn CEUs to renew. On a fail, retake per the NSCA policy after additional study.'
  }
};

export default data;
