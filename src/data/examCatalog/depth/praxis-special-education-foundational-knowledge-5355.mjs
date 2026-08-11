const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5355 study companion structure and BLS OOH Special Education Teachers (SOC 25-2055), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$67,510 median for kindergarten and elementary school special education teachers (BLS, May 2024)',
    summary: 'The Praxis Special Education: Foundational Knowledge (5355) is the special-education pedagogy gate for many teacher licensure programs, and the wage question belongs to the occupation you enter with it: special education teaching. The closest official BLS occupation is Special Education Teachers (Kindergarten and Elementary School), SOC 25-2055, which had a May 2024 median wage of $67,510, with the lowest 10 percent under $48,940 and the highest 10 percent above $108,590, with the middle-school ($67,860) and secondary ($69,170) special-education series as the adjacent levels. BLS counted 215,500 kindergarten and elementary special education teacher jobs in 2024 and projects a 3 percent decline from 2024 to 2034, with about 17,200 openings a year, almost all replacement demand. Read the median with the standard teacher-market caveats: pay is set by district salary schedules, varies enormously by state, and the exam itself carries no wage premium. The honest framing: the 5355 is a licensure gate, and the benchmark it unlocks is the special-education teacher wage in your specific state and district, not a national figure that applies everywhere.',
    rows: [
      { label: 'Median annual wage, special education teachers (K-8)', value: '$67,510', note: 'BLS OOH, SOC 25-2055, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $48,940', note: 'BLS OOH, SOC 25-2055, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $108,590', note: 'BLS OOH, SOC 25-2055, May 2024' },
      { label: 'Projected openings per year (K-8)', value: '~17,200', note: 'BLS OOH, SOC 25-2055, 2024-2034' }
    ],
    growth: 'BLS projects a 3 percent decline for K-8 special education teachers from 2024 to 2034, about 17,200 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Special Education Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/special-education-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and each state sets its own passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis Special Education: Foundational Knowledge (5355), and any single percentage you see online is a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5355 produces a scaled score, and the passing score is set by each state education agency — the same exam has different pass lines in different states, which is exactly why no national pass rate exists. Your target is your state\'s published passing score, which you should look up before you study. The exam itself is a computer-based test of selected-response questions built on the content categories: development and characteristics of learners; learning environments and social interactions; and the foundational knowledge of special education — including the laws (IDEA, Section 504, ADA), the IEP process, the delivery models and the evidence-based practices. Because state cut scores typically sit in the mid-150s to low-160s scaled range, a candidate who covers all the content categories clears the line in most states — but verify your state\'s number, because the margin changes with it.',
    source: { label: 'ETS - Praxis Special Education: Foundational Knowledge (5355)', url: 'https://praxis.ets.org/test/5355.html' },
    caveat: 'ETS reports scaled scores and each state sets its own passing score; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The Praxis Special Education: Foundational Knowledge (5355) is a computer-based exam of selected-response questions built on the ETS content categories: development and characteristics of learners; learning environments and social interactions; and the foundational knowledge of special education — the laws, the IEP process, the service-delivery models and the evidence-based practices. A defensible plan runs 40 to 60 hours over three to four weeks. Week one: the legal framework — IDEA (eligibility categories, the IEP process, FAPE, LRE), Section 504 and the ADA — because the law items are precise and heavily weighted. Week two: development and characteristics of learners — the disability categories, their characteristics and their implications for instruction. Week three: learning environments and social interactions — the delivery models, positive behaviour supports and the collaboration with families and professionals. Week four: practice — two timed practice exams and a review of the weak categories. The plan is law-and-characteristics-heavy because the 5355 rewards knowing the special-education framework precisely; candidates who study general teaching theory instead of the special-education content miss the exam\'s core.',
    totalHours: '40-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Legal framework', tasks: ['IDEA: eligibility, IEP, FAPE and LRE', 'Section 504 and the ADA', 'The special-education process'], hours: 14 },
      { label: 'Week 2', focus: 'Learners and characteristics', tasks: ['The disability categories and their characteristics', 'Implications for instruction', 'Evidence-based practices'], hours: 14 },
      { label: 'Week 3', focus: 'Environments and interactions', tasks: ['Service-delivery models', 'Positive behaviour supports', 'Family and professional collaboration'], hours: 12 },
      { label: 'Week 4', focus: 'Practice and review', tasks: ['Two timed practice exams', 'Review weak categories', 'Schedule the exam'], hours: 12 }
    ],
    variants: [
      { label: 'Working special-education teacher', detail: 'The IEP and legal material is familiar; focus study on the disability-characteristics items and the exam format.' },
      { label: 'General-education teacher adding SPED', detail: 'Add 1-2 weeks on the legal framework and disability categories before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The 5355 rewards precise knowledge of the special-education framework, so the dominant strategy is mastering the legal material first: IDEA\'s eligibility categories, the IEP process, FAPE and LRE, plus Section 504 and the ADA, because the law items are precise and heavily weighted. Second, learn the disability categories and their characteristics as decision rules: the exam asks which characteristics or instructional implications fit a described learner, so scenario practice matters more than memorising lists. Third, cover the learning-environments material — the delivery models (inclusion, resource, self-contained), positive behaviour supports and the collaboration roles — a distinct content area. Fourth, use the ETS Study Companion as the scope map and its sample questions for the item style. Finally, look up your state\'s passing score early and target practice scores comfortably above it, because the state cut line is the number that decides pass or fail.',
    items: [
      { title: 'Master the legal framework', detail: 'IDEA, 504, ADA, FAPE and LRE are precise and heavily weighted.' },
      { title: 'Learn characteristics as decisions', detail: 'Which characteristics or supports fit a described learner.' },
      { title: 'Cover environments and collaboration', detail: 'Delivery models, behaviour supports and team roles are a distinct area.' },
      { title: 'Use the Study Companion', detail: 'The authoritative scope and the item-style reference.' },
      { title: 'Target your state\'s cut score', detail: 'Look up your state\'s passing line and aim practice above it.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5355 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion is the core resource: it lists the content categories and provides sample questions. ETS also sells the official study product with additional practice questions (roughly $20-$50). Third-party special-education study guides ($30-$60) and question banks ($20-$80) add volume. Free resources include the Study Companion, the IDEA text and state department-of-education pages. The exam fee is roughly $130-$156 (confirm at ets.org/praxis). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5355)', values: ['Free', 'Official PDF', 'The authoritative scope and sample items'] },
      { label: 'ETS official study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'Special-education study guides', values: ['$30-$60', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$80', 'Online practice items', 'Selected-response volume'] },
      { label: 'State DOE requirement pages', values: ['Free', 'Official state resources', 'Your state\'s passing score and rules'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5355 exam fee is roughly $130-$156; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 5355 mistake is studying general education theory instead of the special-education framework: candidates who prepare with generic pedagogy materials meet the IDEA, eligibility and disability-characteristics items unprepared. The fix is special-education-content-first study. The second mistake is mislearning the legal distinctions — IDEA vs Section 504 vs the ADA, and the eligibility categories — which the exam tests precisely. Third, candidates under-prepare the learning-environments and collaboration content, a distinct tested area. Fourth, some candidates never take a timed practice exam and misjudge the format. Finally, candidates who do not look up their state\'s passing score study toward a vague target; the state cut line is the number that matters.',
    items: [
      { mistake: 'Studying generic pedagogy', fix: 'The exam is about the special-education framework; study that content.' },
      { mistake: 'Mislearning the legal distinctions', fix: 'IDEA vs 504 vs ADA and the eligibility categories are tested precisely.' },
      { mistake: 'Skipping environments and collaboration', fix: 'A distinct tested area; cover it.' },
      { mistake: 'Never timing a practice exam', fix: 'Run two timed practice exams before the real one.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Find your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The 5355 is a computer-based exam of selected-response questions built on the content categories: development and characteristics of learners, learning environments and social interactions, and the foundational knowledge of special education. The items test the legal framework, the disability categories and their instructional implications, and the service-delivery practices, with many scenario items describing a learner and asking for the correct characteristic, support or legal requirement. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show the special-education style of the real items.',
    types: [
      { name: 'Legal-framework items', share: 'Large block', detail: 'IDEA, 504, ADA, the IEP process, FAPE and LRE.' },
      { name: 'Learner-characteristic items', share: 'Large block', detail: 'Disability categories and their instructional implications.' },
      { name: 'Environment and practice items', share: 'Meaningful block', detail: 'Delivery models, behaviour supports and collaboration.' }
    ],
    samples: [
      {
        prompt: 'Under IDEA, the requirement that students with disabilities be educated with their non-disabled peers to the maximum extent appropriate is known as:',
        options: ['A. Least restrictive environment (LRE)', 'B. Free appropriate public education (FAPE)', 'C. The IEP process', 'D. Child find'],
        answer: 'A',
        explanation: 'LRE is the IDEA requirement that students with disabilities be educated with non-disabled peers to the maximum extent appropriate. FAPE is the right to a free appropriate education, the IEP is the individualised plan, and child find is the identification duty.'
      },
      {
        prompt: 'A teacher is preparing for the annual IEP meeting for a student. The IEP must include:',
        options: ['A. The present levels, the annual goals and the services the student will receive', 'B. Only the student\'s grades', 'C. The teacher\'s personal observations only', 'D. A list of the student\'s disabilities without services'],
        answer: 'A',
        explanation: 'The IEP must include present levels of performance, measurable annual goals and the special-education services — the core components the law requires. Grades-only, observation-only or disability-list-only documents do not constitute a compliant IEP.'
      },
      {
        prompt: 'A student with a specific learning disability reads below grade level. The most appropriate evidence-based instructional practice is:',
        options: ['A. Explicit, systematic instruction in the identified skill areas with progress monitoring', 'B. Waiting for the student to catch up', 'C. Reducing expectations', 'D. Removing the student from all instruction'],
        answer: 'A',
        explanation: 'Evidence-based special education uses explicit, systematic instruction in the identified deficit areas with progress monitoring. Waiting, reducing expectations or removing instruction each fail the evidence-based-practice standard the exam rewards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Special Education: Foundational Knowledge (5355) is a computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. Pace yourself across the selected-response items, flag uncertain items for review, and finish with time to spare. Your scaled score appears on screen immediately, with the official score report following. If you do not pass, the retake wait is 21 days. On a pass, the score is valid for 10 years subject to your state\'s acceptance window, and your state education agency applies its own passing line. The afterwards matters: forward your score to your state\'s licensure system through the ETS score-reporting tools, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: 'Work the selected-response items; flag and review.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; the official report follows.' },
      { time: 'Next', detail: 'Send the score to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'Computer-based selected-response exam',
      'Retakes require a 21-day wait'
    ],
    afterwards: 'On a pass, your score is valid 10 years subject to your state\'s window; report it to your state education agency. On a fail, wait 21 days and retake after additional special-education study.'
  }
};

export default data;
