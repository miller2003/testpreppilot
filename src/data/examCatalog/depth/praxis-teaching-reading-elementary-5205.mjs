const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This desk covers ETS Praxis exams and teacher-licensure credentials. Exam structure, fees and passing-score rules come from the ETS Praxis official pages and vary by state; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the ETS Praxis 5205 study companion structure and BLS OOH Elementary School Teachers (SOC 25-2021), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$62,340 median for kindergarten and elementary school teachers (BLS, May 2024)',
    summary: 'The Praxis Teaching Reading: Elementary (5205) is the early-literacy pedagogy gate for elementary licensure in many states, and the wage question belongs to the occupation you enter with it: teaching. The closest official BLS occupation is Kindergarten and Elementary School Teachers, SOC 25-2021, which had a May 2024 median wage of $62,340, with the lowest 10 percent under $44,470 and the highest 10 percent above $103,540. BLS counted 1,570,100 kindergarten and elementary teacher jobs in 2024 and projects a 1 percent decline from 2024 to 2034, with about 104,600 openings a year, almost all replacement demand as veteran teachers retire. Read the median with the standard teacher-market caveats: pay is set by district salary schedules driven by years of service and education credits, varies enormously by state, and the exam itself carries no wage premium. The honest framing: the 5205 is a licensure gate, and the benchmark it unlocks is the elementary-teacher wage in your specific state and district, not a national figure that applies everywhere. The exam\'s practical value is that it verifies the early-literacy knowledge every elementary classroom teacher needs, which districts treat as a hiring baseline.',
    rows: [
      { label: 'Median annual wage, kindergarten and elementary teachers', value: '$62,340', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $44,470', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $103,540', note: 'BLS OOH, SOC 25-2021, May 2024' },
      { label: 'Projected openings per year', value: '~104,600', note: 'BLS OOH, SOC 25-2021, 2024-2034' }
    ],
    growth: 'BLS projects a 1 percent decline for kindergarten and elementary teachers from 2024 to 2034, about 104,600 openings per year, mostly replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Kindergarten and Elementary School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish a single national pass rate — it publishes scaled scores, and each state sets its own passing line',
    summary: 'ETS does not publish one national pass rate for the Praxis Teaching Reading: Elementary (5205), and any single percentage you see online is a state-specific report or a third-party estimate, so we do not present one as authoritative. What ETS does publish is the reporting model: the 5205 produces a scaled score, and the passing score is set by each state education agency — the same exam has different pass lines in different states, which is exactly why no national pass rate exists. Your target is your state\'s published passing score, which you should look up before you study. The exam itself is a 3-hour, computer-based test of selected-response questions and constructed-response items focused on early-literacy instruction: phonological awareness, phonics and word recognition, fluency, vocabulary and comprehension for elementary readers, plus the assessment practices that drive instruction. Because state cut scores typically sit in the mid-150s to low-160s scaled range, a candidate who covers all the content categories and writes structured constructed responses clears the line in most states — but verify your state\'s number, because the margin changes with it.',
    source: { label: 'ETS - Praxis Teaching Reading: Elementary (5205)', url: 'https://praxis.ets.org/test/5205.html' },
    caveat: 'ETS reports scaled scores and each state sets its own passing score; there is no single national pass rate to quote.'
  },
  studyPlan: {
    summary: 'The Praxis Teaching Reading: Elementary (5205) is a 3-hour, computer-based exam of selected-response and constructed-response items built on the ETS content categories for early literacy: phonological awareness and the alphabetic principle, phonics and word recognition, fluency, vocabulary and comprehension, and the assessment and instruction of reading in the elementary classroom. A defensible plan runs 40 to 60 hours over three to four weeks. Week one: the foundational skills — phonological and phonemic awareness, the alphabetic principle and systematic phonics, learning the terminology and the sequence of early skill development, because the exam tests the science of reading precisely. Week two: fluency, vocabulary and comprehension — the instructional routines for elementary readers, including repeated reading, word-study and the comprehension strategies. Week three: assessment and instruction — screening, diagnostic, progress-monitoring and outcome measures, the response-to-intervention tiers and the differentiated classroom routines. Week four: practice — two timed practice exams and at least four constructed responses written against the scoring criteria. The plan is early-literacy-heavy because the 5205 rewards the evidence-backed practices of elementary reading instruction; candidates who study general teaching theory instead of the literacy science miss the exam\'s core.',
    totalHours: '40-60 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Foundational skills', tasks: ['Phonological and phonemic awareness', 'The alphabetic principle and systematic phonics', 'The sequence of early skill development'], hours: 12 },
      { label: 'Week 2', focus: 'Fluency, vocabulary, comprehension', tasks: ['Fluency routines: repeated reading and prosody', 'Vocabulary and word study for elementary readers', 'Comprehension strategies across texts'], hours: 14 },
      { label: 'Week 3', focus: 'Assessment and instruction', tasks: ['Screening, diagnostic and progress-monitoring tools', 'RTI tiers and differentiated routines', 'Intervention for struggling readers'], hours: 12 },
      { label: 'Week 4', focus: 'Practice and essays', tasks: ['Two timed practice exams', 'Four constructed responses against the criteria', 'Review weak categories and schedule'], hours: 14 }
    ],
    variants: [
      { label: 'Practicing elementary teacher', detail: 'The classroom routines are familiar; focus study on the assessment terminology and the essay timing.' },
      { label: 'New to the science of reading', detail: 'Add 1-2 weeks on phonological awareness and phonics terminology before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The 5205 rewards the evidence-based practices of early-literacy instruction, so the dominant strategy is mastering the foundational-skill terminology and the assessment cycle precisely: phonological vs phonemic awareness, systematic phonics, the fluency indicators, and the screening-to-progress-monitoring sequence, because the exam tests these distinctions directly. Second, use the ETS content categories and the free Study Companion as the scope map, and work its sample questions to learn the item style. Third, practise the constructed-response items deliberately: the exam includes essay questions scored against criteria, and writing structured answers — naming the concept, applying it to the classroom case, and giving the instructional action — is a trainable skill. Fourth, take at least two timed practice exams; the 3-hour format with essays is a pacing test as much as a knowledge test. Finally, look up your state\'s passing score early and target practice scores comfortably above it, because the state cut line, not a national average, is the number that decides pass or fail.',
    items: [
      { title: 'Master the early-literacy terms', detail: 'Phonological vs phonemic awareness and the phonics terms are tested precisely.' },
      { title: 'Use the Study Companion', detail: 'Content categories, sample questions and constructed-response criteria.' },
      { title: 'Train the essay structure', detail: 'Name the concept, apply it to the classroom case, give the instructional action.' },
      { title: 'Run two timed practice exams', detail: '3 hours with essays is a pacing test as much as a knowledge test.' },
      { title: 'Target your state\'s cut score', detail: 'Look up your state\'s passing line and aim practice above it.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis 5205 prep is inexpensive because ETS publishes the authoritative materials at low or no cost. The free Study Companion is the core resource: it lists the content categories, provides sample selected-response and constructed-response questions, and shows scored sample essays, which is the closest available window into the essay grading. ETS also sells the official study product with additional practice questions (roughly $20-$50). Third-party elementary-reading study guides ($30-$60) and question banks ($20-$80) add volume. Free resources include the Study Companion, ETS sample items and state department-of-education requirement pages. The exam fee is roughly $130-$156 (confirm at ets.org/praxis). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companion (5205)', values: ['Free', 'Official PDF', 'The authoritative scope and essay criteria'] },
      { label: 'ETS official study product', values: ['$20-$50', 'Online practice questions', 'Official item-style practice'] },
      { label: 'Elementary-reading study guides', values: ['$30-$60', 'Printed or digital book', 'Structured content review'] },
      { label: 'Question banks', values: ['$20-$80', 'Online practice items', 'Selected-response volume'] },
      { label: 'State DOE requirement pages', values: ['Free', 'Official state resources', 'Your state\'s passing score and rules'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the 5205 exam fee is roughly $130-$156; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 5205 mistake is studying general teaching theory instead of the science of early reading: candidates who prepare with generic pedagogy materials meet the phonological-awareness, phonics and fluency items unprepared, because the exam is specifically about elementary literacy instruction. The fix is literacy-science-first study. The second mistake is under-preparing the constructed-response items; candidates who only drill selected-response questions lose the essay share of the score. Third, candidates confuse the assessment terminology — screening vs diagnostic vs progress monitoring — which the exam tests precisely. Fourth, some candidates never take a timed practice exam and misjudge the 3-hour, essays-included format. Finally, candidates who do not look up their state\'s passing score study toward a vague target; the state cut line is the number that matters.',
    items: [
      { mistake: 'Studying generic pedagogy', fix: 'The exam is about early-literacy instruction; study the reading science.' },
      { mistake: 'Skipping essay practice', fix: 'The constructed responses are a real share; train the structure.' },
      { mistake: 'Confusing the assessment terms', fix: 'Screening, diagnostic and progress monitoring are tested precisely.' },
      { mistake: 'Never timing a practice exam', fix: '3 hours with essays; run two timed practice exams.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Find your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The 5205 is a 3-hour computer-based exam with selected-response questions and constructed-response items built on the early-literacy content categories: phonological awareness, phonics and word recognition, fluency, vocabulary, comprehension, and the assessment and instruction of reading. The constructed-response items present an elementary classroom scenario and ask for the evidence-based instructional response, scored against the published criteria. Samples below are editor-written illustrations of the ETS content categories, not live exam items; they show the early-literacy style of the real items.',
    types: [
      { name: 'Selected-response items', share: 'Largest share of scored points', detail: 'Early-literacy concepts, terminology and instructional practices.' },
      { name: 'Constructed-response items', share: 'Meaningful share', detail: 'Classroom scenarios with rubric-scored written answers.' }
    ],
    samples: [
      {
        prompt: 'A kindergarten teacher claps the syllables in words such as "butterfly" during a whole-group activity. This activity primarily develops:',
        options: ['A. Phonological awareness', 'B. Phonics', 'C. Reading fluency', 'D. Reading comprehension'],
        answer: 'A',
        explanation: 'Clapping syllables exercises phonological awareness — the broader oral-language skill that includes syllables and onset-rime, of which phonemic awareness (individual phonemes) is the most advanced level. Phonics, fluency and comprehension are later skills.'
      },
      {
        prompt: 'A first-grade teacher uses a sequence of letter-sound lessons followed by decoding practice with decodable texts. This practice aligns most closely with:',
        options: ['A. Systematic and explicit phonics instruction', 'B. Whole-language immersion alone', 'C. Sight-word memorisation only', 'D. Deferring decoding until later grades'],
        answer: 'A',
        explanation: 'A planned sequence of letter-sound instruction with decodable-text practice is systematic, explicit phonics — the evidence-backed approach for early decoding. Whole-language-only, sight-word-only or deferred approaches each contradict the research the exam rewards.'
      },
      {
        prompt: 'A teacher administers a brief word-reading measure to all students three times a year to identify those at risk. This assessment is best described as:',
        options: ['A. Universal screening', 'B. Diagnostic assessment', 'C. Summative evaluation', 'D. A formal placement test'],
        answer: 'A',
        explanation: 'A brief measure given to all students to identify risk is universal screening — the first tier of the assessment cycle. Diagnostic assessment follows screening to pinpoint needs, and summative evaluation measures outcomes at the end.'
      }
    ],
    note: 'Samples are editor-written illustrations of the ETS content categories, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Teaching Reading: Elementary (5205) is a 3-hour computer-based exam at a Pearson VUE centre or through online proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. Budget roughly two-thirds of the time for the selected-response block and the remainder for the constructed-response items, writing focused, structured answers. Your scaled score appears on screen immediately, with the official score report following. If you do not pass, the retake wait is 21 days. On a pass, the score is valid for 10 years subject to your state\'s acceptance window, and your state education agency applies its own passing line. The afterwards matters: forward your score to your state\'s licensure system through the ETS score-reporting tools, and keep the score report for your records.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Selected-response block', detail: 'Work the literacy-science items; flag and review.' },
      { time: 'Constructed-response block', detail: 'Write focused answers against the criteria.' },
      { time: 'After submit', detail: 'Scaled score appears on screen; the official report follows.' },
      { time: 'Next', detail: 'Send the score to your state licensure system; note the 10-year validity.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '3 hours for the selected-response and constructed-response items',
      'Retakes require a 21-day wait'
    ],
    afterwards: 'On a pass, your score is valid 10 years subject to your state\'s window; report it to your state education agency. On a fail, wait 21 days and retake after additional early-literacy study.'
  }
};

export default data;
