const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Fitness & group-exercise credentialing desk',
    bio: 'ACE certification structure comes from the American Council on Exercise official pages and is revised with each program update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACE Group Fitness Instructor exam structure and domains against ACE official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect fitness-instructor pay at a May 2024 median of $46,180 (BLS) — the ACE Group Fitness certification is the leading group-ex credential, and group-class income is built from class pay, format specialisation, and client following',
    summary: 'The direct answer is that the ACE Group Fitness Instructor certification is one of the industry\u2019s leading group-exercise credentials, and the occupation it serves, fitness trainers and instructors (SOC 39-9031), earned a May 2024 median annual wage of $46,180, with the lowest 10 percent under about $23,500 and the highest 10 percent above about $77,000. The honest framing is that the certification does not set pay — group-class income is built from per-class rates ($20 to $60 per class at most facilities), class count, format specialisation (cycling, HIIT, dance, mind-body), and the client following a strong instructor builds — and most group instructors teach part-time, combining classes with personal training or other income. BLS counted about 856,000 fitness trainers and instructors in 2024 and projects about 13 percent employment growth from 2024 to 2034, much faster than average, with roughly 90,000 annual openings. The certification\u2019s role is positional: ACE is one of the nationally accredited (NCCA) credentials that gyms and studios require for hiring, and the Group Fitness credential specifically signals class-teaching competence (class design, cueing, music and choreography, and safety) that group-exercise employers check. The practical read: the certification costs about $400 to $500 including the exam, requires no formal prerequisites (a high school diploma and CPR certification are typical), and takes roughly two to three months of study — an accessible entry to the fitness industry with a growing occupational base. The career path that compounds income runs from group classes to specialisation and eventually to personal training, management, or studio ownership.',
    rows: [
      { label: 'Median annual wage, fitness trainers & instructors', value: '$46,180', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 39-9031)' },
      { label: 'Lowest 10 percent', value: 'less than $23,500', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $77,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+13%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Professional credential', note: 'NCCA-accredited; CPR required alongside' }
    ],
    growth: 'BLS projects about 13% growth for fitness trainers and instructors from 2024 to 2034, much faster than average.',
    source: { label: 'BLS OOH — Fitness Trainers and Instructors', url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm' }
  },
  passRate: {
    headline: 'ACE publishes no pass rates — the Group Fitness exam is 125 questions in 3 hours with a scaled passing score around 500-600/800, and ACE reports pass/fail rather than cohort data',
    summary: 'The core fact is that ACE does not publish pass rates for the Group Fitness Instructor exam, and none is available from an independent source, because ACE reports candidate pass/fail rather than cohort pass percentages. What is published is the exam structure: the Group Fitness Instructor exam contains 125 multiple-choice questions with 3 hours allowed, delivered at a testing center or online proctored, with a passing score reported on a scaled basis (ACE\u2019s exams use a scaled score around 500 to 600 out of 800, determined through standard-setting); there are no prerequisites beyond the exam itself, though ACE requires candidates to hold current CPR/AED certification to be certified. The exam covers the ACE Integrated Fitness Training model applied to group settings, the group-exercise class design (class components, music, and cueing), exercise programming and modification, and safety and professional responsibility. Because ACE publishes the exam content outline and study materials, the preparation is studying the ACE curriculum and calibrating with the official practice test; the classic failure mode is under-practising the class-design and cueing items, which reward the ACE model rather than general fitness knowledge. The certification is valid for two years and renews with continuing-education credits. The honest advice is to treat the content outline as the syllabus, complete the ACE study program (or an ACE-approved prep course), and take the official practice test before booking, since the exam rewards the ACE model\u2019s specific framework.',
    source: { label: 'ACE — Group Fitness Instructor certification', url: 'https://www.acefitness.org/' },
    caveat: 'ACE publishes no pass rates; the passing score is scaled via standard-setting and certification renews every 2 years.'
  },
  studyPlan: {
    summary: 'Plan for roughly 6 to 10 weeks and 40 to 60 hours of study for the ACE Group Fitness Instructor exam, structured around the ACE content outline — the ACE Integrated Fitness Training model, group class design, exercise programming and modification, and safety — with the official practice test as the calibration tool. The most effective sequence is: first, obtain the ACE study materials and content outline and take the practice test to baseline; second, master the ACE Integrated Fitness Training model, since the exam\u2019s exercise-programming items are built on it; third, study the group class design content — class components, music selection, and cueing — the format-specific core; fourth, review exercise modification and safety; and fifth, take the practice test again and book the exam. The highest-yield habits are rehearsing the cueing and class-design concepts (the exam rewards the ACE model\u2019s specific framework) and studying the exercise-modification content, which is where candidates lose points. Budget the final week for practice-test review and rest. After passing, note the two-year renewal with CEUs and the CPR requirement, and plan the format specialisations (cycling, HIIT, etc.) that build the class schedule and income.',
    totalHours: '40-60 study hours over 6-10 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Baseline + ACE model', tasks: ['Get the study materials and content outline', 'Take the practice test', 'Study the ACE Integrated Fitness Training model'], hours: 15 },
      { label: 'Weeks 3-6', focus: 'Class design + programming', tasks: ['Study class components, music, and cueing', 'Work exercise programming and modification', 'Review safety and professional responsibility'], hours: 25 },
      { label: 'Weeks 7-8', focus: 'Practice + exam', tasks: ['Take the practice test again', 'Re-study weak areas', 'Book and take the exam'], hours: 15 }
    ],
    variants: [
      { label: 'ACE Personal Trainer', detail: 'The companion one-on-one certification; many group instructors add it for income breadth.' },
      { label: 'Format certifications', detail: 'Cycling, HIIT, and mind-body certifications that build the class schedule.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the ACE Group Fitness exam is "study the ACE model, not general fitness knowledge, and calibrate with the official practice test," and the single biggest error is preparing with generic exercise-science content instead of the ACE framework the exam tests. A second proven approach is mastering the class-design items — the class components, music structure, and cueing techniques are format-specific and carry a large question share. Third, practise the exercise-modification content, since the exam rewards knowing how to regress and progress exercises for different participants. Fourth, use the official practice test as the calibration tool and re-study until your score is comfortable. Fifth, plan the CPR requirement alongside — ACE requires current CPR/AED certification, so complete it before or soon after the exam. Finally, plan the two-year renewal with CEUs and the format specialisations, since the credential\u2019s income value comes from the class schedule you build, not the certificate alone.',
    items: [
      { title: 'Study the ACE model', detail: 'The exam tests the ACE framework, not general fitness knowledge.' },
      { title: 'Master class design', detail: 'Class components, music, and cueing carry a large question share.' },
      { title: 'Practise exercise modification', detail: 'Regression and progression items reward the ACE model.' },
      { title: 'Calibrate with the practice test', detail: 'Re-study until practice scores are comfortable.' },
      { title: 'Complete the CPR requirement', detail: 'ACE requires current CPR/AED certification to be certified.' }
    ]
  },
  resourceComparison: {
    summary: 'ACE Group Fitness preparation runs $400 to $600 including the exam and study package, with the official study program as the primary resource and the practice test as the key calibration tool. The comparison below separates the official package, the exam, and optional supplements, with prices current to this review. The buying rule is to purchase the official study package (which includes the practice test) and treat commercial Q-banks as optional reinforcement.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ACE Group Fitness study package', values: ['~$400-500', 'Study guide + online materials', 'The official curriculum'] },
      { label: 'ACE exam registration', values: ['Included in package or ~$250', 'Testing center or online proctored', 'The exam itself'] },
      { label: 'ACE practice test', values: ['~$50', 'Online practice exam', 'Readiness calibration'] },
      { label: 'CPR/AED certification', values: ['~$50-100', 'In-person or blended course', 'The certification requirement'] },
      { label: 'Commercial Q-banks', values: ['~$30-80', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews every 2 years with CEUs.'
  },
  commonMistakes: {
    summary: 'The most common mistake is preparing with generic exercise-science content instead of the ACE model the exam tests; the second is under-practising the class-design and cueing items, which carry a large share. A third recurring error is ignoring the exercise-modification content and losing the regression-progression items. Candidates also routinely skip the practice test calibration, and many forget the CPR requirement, passing the exam and then waiting on the CPR paperwork. Finally, some candidates treat the certification as the end, ignoring the two-year renewal and the format specialisations that build the actual class schedule and income.',
    items: [
      { mistake: 'Generic content study', fix: 'The exam tests the ACE framework; study the official materials.' },
      { mistake: 'Under-practising class design', fix: 'Master class components, music, and cueing.' },
      { mistake: 'Skipping exercise modification', fix: 'Drill the regression and progression items.' },
      { mistake: 'Forgetting the CPR requirement', fix: 'Complete CPR/AED certification alongside the exam.' },
      { mistake: 'Missing the renewal', fix: 'Renew every 2 years with CEUs; build format specialisations.' }
    ]
  },
  questionTypes: {
    summary: 'The ACE Group Fitness Instructor exam contains 125 multiple-choice questions in 3 hours, covering the ACE Integrated Fitness Training model, group class design, exercise programming and modification, and safety and professional responsibility. Item formats include direct knowledge, class-design scenario, and cueing items. The samples below are editor-written illustrations of the published content outline, not live exam items.',
    types: [
      { name: 'Group class design', share: '~30%', detail: 'Class components, music, and cueing.' },
      { name: 'Exercise programming & modification', share: '~30%', detail: 'The ACE model, progression, and regression.' },
      { name: 'Safety & professional responsibility', share: '~20%', detail: 'Participant safety, screening, and professionalism.' },
      { name: 'Applied exercise science', share: '~20%', detail: 'Movement, anatomy, and energy systems in group settings.' }
    ],
    samples: [
      {
        prompt: 'Which cueing approach is most effective when teaching a new movement to a group?',
        options: ['A. Verbal cueing only', 'B. Verbal, visual, and tactile cueing together', 'C. Tactile cueing without warning', 'D. No cueing until the movement is perfect'],
        answer: 'B',
        explanation: 'Effective group instruction uses verbal, visual, and tactile cues together to reach different learners.'
      },
      {
        prompt: 'A participant struggles with a high-impact move. What is the best modification approach?',
        options: ['A. Remove the participant from class', 'B. Offer a lower-impact regression and encourage self-selection', 'C. Increase the music tempo', 'D. Ignore the struggle'],
        answer: 'B',
        explanation: 'Providing regressions lets participants self-select the appropriate intensity and stay safe.'
      },
      {
        prompt: 'What is the recommended class structure for a well-designed group fitness session?',
        options: ['A. Warm-up, conditioning, cool-down', 'B. Conditioning only', 'C. Warm-up only', 'D. Cool-down only'],
        answer: 'A',
        explanation: 'A well-designed class includes a warm-up, the conditioning phase, and a cool-down.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published content outline, not live exam items.'
  },
  examDay: {
    summary: 'The ACE Group Fitness Instructor exam is taken at a testing center or online proctored: 125 multiple-choice questions with 3 hours, scaled pass/fail, with results typically available within a few days. The core rules: for center delivery bring valid photo ID and arrive early; for online proctoring complete the environment check. The certification requires current CPR/AED, is valid for two years, and renews with CEUs. The most useful exam-day habits: pace at about 1.4 minutes per question, answer every item (no penalty for guessing), and on scenario items apply the ACE model rather than general fitness opinion. If you do not pass, ACE allows retakes after a waiting period. After passing, complete the CPR requirement if not already done, and plan the format specialisations and the two-year renewal, since the class schedule you build is where the credential\u2019s income value lives.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'ACE account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: '6-10 weeks; study the ACE model and calibrate with the practice test.' },
      { time: 'Exam', detail: '125 questions in 3 hours; scaled pass/fail.' },
      { time: 'Result', detail: 'Pass/fail in a few days; CPR required to certify.' },
      { time: 'Career', detail: 'Build the class schedule; renew every 2 years.' }
    ],
    rules: ['125 questions, 3 hours', 'Scaled pass/fail', 'CPR/AED required', 'Renews every 2 years with CEUs'],
    afterwards: 'Passing the exam and completing the CPR requirement earns the ACE Group Fitness Instructor certification, the leading group-exercise credential, renewable every 2 years.'
  }
};

export default data;
