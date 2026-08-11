const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5206 study companion structure and BLS OOH Elementary School Teachers (SOC 25-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$62,340 median for kindergarten and elementary school teachers (BLS, May 2024)',
    summary: 'The Praxis Teaching Reading K-12 (5206) is the reading-pedagogy gate for many teaching licensure programs, and the wage question belongs to the occupation you enter with it: teaching. The closest official BLS occupation is Kindergarten and Elementary School Teachers, SOC 25-2021, which had a May 2024 median wage of $62,340, with the lowest 10 percent under $44,470 and the highest 10 percent above $103,540, with Middle School Teachers (25-2022, $62,970) and High School Teachers (25-2031, $64,580) as the adjacent series for the K-12 range this exam serves. BLS counted 1,570,100 kindergarten and elementary teacher jobs in 2024 and projects a 1 percent decline from 2024 to 2034, with about 104,600 openings a year, almost all replacement demand. Read the median with the standard teacher-market caveats: pay is set by district salary schedules driven by years of service and education credits, varies enormously by state, and the exam itself carries no wage premium. The honest framing: the 5206 is a licensure gate, and the benchmark it unlocks is the teacher wage in your specific state and district, not a national figure that applies everywhere.',
    rows: [
      { label: 'Median annual wage, kindergarten and elementary teachers', value: '$62,340', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $44,470', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $103,540', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Median, middle school teachers (adjacent K-12 series)', value: '$62,970', note: 'BLS OOH, SOC 25-2022, May 2024' }
    ],
    growth: 'BLS projects a 1 percent decline for kindergarten and elementary teachers from 2024 to 2034, about 104,600 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Kindergarten and Elementary School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and each state sets its own passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis Teaching Reading K-12 (5206), and any single percentage you see online is a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5206 produces a scaled score, and the passing score is set by each state education agency — the same exam has different pass lines in different states, which is exactly why no national pass rate exists. Your target is your state\'s published passing score, which you should look up on your state\'s department-of-education page or the ETS state requirements tool before you study. The exam itself is a 3-hour, computer-based test of selected-response questions and constructed-response items focused on reading pedagogy: phonological awareness, phonics and word recognition, fluency, vocabulary, and reading comprehension, plus the assessment and instruction of reading. Because state cut scores typically sit in the mid-150s to low-160s scaled range, a candidate who covers all the content categories and writes structured constructed responses clears the line in most states — but verify your state\'s number, because the margin changes with it.',
    source: { label: 'ETS - Praxis Teaching Reading: K-12 (5206)', url: 'https://praxis.ets.org/test/5206.html' },
    caveat: 'ETS reports scaled scores and each state sets its own passing score; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The Praxis Teaching Reading K-12 (5206) is a 3-hour, computer-based exam of selected-response and constructed-response items built on the ETS content categories: phonological awareness and emergent literacy; phonics, decoding and word recognition; fluency; vocabulary development; reading comprehension; and reading assessment and instruction. A defensible plan runs 40 to 60 hours over three to four weeks. Week one: the foundations of reading instruction — phonological awareness, phonemic awareness and phonics, learning the terminology and the sequence of skill development, because the exam tests the science of reading precisely. Week two: fluency, vocabulary and comprehension — the instructional strategies for each and the research behind them. Week three: assessment and instruction — screening, diagnostic, progress-monitoring and outcome assessments, and how they drive differentiated instruction. Week four: practice — two timed practice exams and at least four constructed responses written against the scoring criteria. The plan is research-based because the 5206 rewards knowing the evidence-backed practices of reading instruction; candidates who study general teaching theory instead of the reading science miss the exam\'s core.',
    totalHours: '40-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Foundations of reading', tasks: ['Phonological and phonemic awareness', 'Phonics, decoding and word recognition', 'The sequence of skill development'], hours: 12 },
      { label: 'Week 2', focus: 'Fluency, vocabulary, comprehension', tasks: ['Fluency instruction and its research', 'Vocabulary development strategies', 'Comprehension strategies for all readers'], hours: 14 },
      { label: 'Week 3', focus: 'Assessment and instruction', tasks: ['Screening, diagnostic and progress-monitoring tools', 'Differentiated reading instruction', 'Struggling-reader intervention'], hours: 12 },
      { label: 'Week 4', focus: 'Practice and essays', tasks: ['Two timed practice exams', 'Four constructed responses against the criteria', 'Review weak categories and schedule'], hours: 14 }
    ],
    variants: [
      { label: 'Practicing reading teacher', detail: 'Compress the foundations; the assessment and constructed-response timing are the highest-yield focus.' },
      { label: 'New to the science of reading', detail: 'Add 1-2 weeks on phonological awareness and phonics terminology before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The 5206 rewards knowledge of the science of reading, so the dominant strategy is mastering the terminology and the evidence-backed practices precisely: phonological awareness vs phonemic awareness, systematic phonics, fluency indicators, and the vocabulary and comprehension research, because the exam tests these distinctions directly. Second, use the ETS content categories and the free Study Companion as the scope map, and work its sample questions to learn the item style. Third, practise the constructed-response items deliberately: the exam includes essay questions scored against criteria, and writing structured answers — naming the concept, applying it to the case, and giving the instructional action — is a trainable skill. Fourth, take at least two timed practice exams; the 3-hour format with essays is a pacing test as much as a knowledge test. Finally, look up your state\'s passing score early and target practice scores comfortably above it, because the state cut line, not a national average, is the number that decides pass or fail.',
    items: [
      { title: 'Master the reading terminology', detail: 'Phonological vs phonemic awareness and the phonics terms are tested precisely.' },
      { title: 'Use the Study Companion', detail: 'Content categories, sample questions and constructed-response criteria.' },
      { title: 'Train the essay structure', detail: 'Name the concept, apply it to the case, give the instructional action.' },
      { title: 'Run two timed practice exams', detail: '3 hours with essays is a pacing test as much as a knowledge test.' },
      { title: 'Target your state\'s cut score', detail: 'Look up your state\'s passing line and aim practice above it.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5206 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion is the core resource: it lists the content categories, provides sample selected-response and constructed-response questions, and shows scored sample essays, which is the closest available window into the essay grading. ETS also sells the official study product with additional practice questions (roughly $20-$50). Third-party reading-specialist study guides ($30-$60) and question banks ($20-$80) add volume. Free resources include the Study Companion, ETS sample items and state department-of-education requirement pages. The exam fee is roughly $130-$156 (confirm at ets.org/praxis). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5206)', values: ['Free', 'Official PDF', 'The authoritative scope and essay criteria'] },
      { label: 'ETS official study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'Reading-specialist study guides', values: ['$30-$60', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$80', 'Online practice items', 'Selected-response volume'] },
      { label: 'State DOE requirement pages', values: ['Free', 'Official state resources', 'Your state\'s passing score and rules'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5206 exam fee is roughly $130-$156; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 5206 mistake is studying general teaching theory instead of the science of reading: candidates who prepare with generic pedagogy materials meet the phonological-awareness, phonics and fluency items unprepared, because the exam is specifically about reading instruction. The fix is reading-science-first study. The second mistake is under-preparing the constructed-response items; candidates who only drill selected-response questions lose the essay share of the score. Third, candidates confuse the terminology — phonological vs phonemic awareness and the phonics terms — which the exam tests precisely. Fourth, some candidates never take a timed practice exam and misjudge the 3-hour, essays-included format. Finally, candidates who do not look up their state\'s passing score study toward a vague target; the state cut line is the number that matters.',
    items: [
      { mistake: 'Studying generic pedagogy', fix: 'The exam is about the science of reading; study the reading content.' },
      { mistake: 'Skipping essay practice', fix: 'The constructed responses are a real share; train the structure.' },
      { mistake: 'Confusing the terminology', fix: 'Phonological vs phonemic awareness and the phonics terms are tested precisely.' },
      { mistake: 'Never timing a practice exam', fix: '3 hours with essays; run two timed practice exams.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Find your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The 5206 is a 3-hour computer-based exam with selected-response questions and constructed-response items built on the content categories: phonological awareness and emergent literacy, phonics and word recognition, fluency, vocabulary, comprehension, and reading assessment and instruction. The constructed-response items present a reading-instruction scenario and ask for the evidence-based response, scored against the published criteria. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show the reading-science style of the real items.',
    types: [
      { name: 'Selected-response items', share: 'Largest share of scored points', detail: 'Reading-science concepts, terminology and instructional practices.' },
      { name: 'Constructed-response items', share: 'Meaningful share', detail: 'Reading-instruction scenarios with rubric-scored written answers.' }
    ],
    samples: [
      {
        prompt: 'A first-grade teacher asks students to identify the first sound in the word "cat". This activity primarily assesses:',
        options: ['A. Phonemic awareness', 'B. Phonics', 'C. Vocabulary', 'D. Reading comprehension'],
        answer: 'A',
        explanation: 'Identifying individual sounds in spoken words is phonemic awareness — an oral-language skill. Phonics involves connecting sounds to letters, vocabulary is word meaning, and comprehension is text understanding.'
      },
      {
        prompt: 'Which instructional practice is most aligned with the evidence for systematic phonics instruction?',
        options: ['A. Teaching letter-sound correspondences in a planned sequence', 'B. Teaching letters only as they arise in class discussion', 'C. Emphasising sight-word memorisation exclusively', 'D. Deferring phonics until third grade'],
        answer: 'A',
        explanation: 'Systematic phonics teaches letter-sound correspondences in a planned sequence — the evidence-backed approach. Incidental, exclusive-memorisation or deferred approaches each contradict the research the exam rewards.'
      },
      {
        prompt: 'A teacher uses a short, timed passage reading to count a student\'s correct words per minute. This assessment primarily measures:',
        options: ['A. Reading fluency', 'B. Phonological awareness', 'C. Vocabulary depth', 'D. Background knowledge'],
        answer: 'A',
        explanation: 'Correct-words-per-minute on a timed passage is a fluency measure — it captures accuracy and rate together. Phonological awareness, vocabulary and background knowledge are assessed by different tools.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Teaching Reading K-12 (5206) is a 3-hour computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. Budget roughly two-thirds of the time for the selected-response block and the remainder for the constructed-response items, writing focused, structured answers. Your scaled score appears on screen immediately, with the official score report following. If you do not pass, the retake wait is 21 days. On a pass, the score is valid for 10 years subject to your state\'s acceptance window, and your state education agency applies its own passing line. The afterwards matters: forward your score to your state\'s licensure system through the ETS score-reporting tools, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Selected-response block', detail: 'Work the reading-science items; flag and review.' },
      { time: 'Constructed-response block', detail: 'Write focused answers against the criteria.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; the official report follows.' },
      { time: 'Next', detail: 'Send the score to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '3 hours for the selected-response and constructed-response items',
      'Retakes require a 21-day wait'
    ],
    afterwards: 'On a pass, your score is valid 10 years subject to your state\'s window; report it to your state education agency. On a fail, wait 21 days and retake after additional reading-science study.'
  }
};

export default data;
