const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'English proficiency & international testing desk',
    bio: 'We cover ETS language-proficiency testing. Format and fee facts come from ETS official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the TOEFL iBT format, scoring scale, fees and delivery against ETS official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'TOEFL iBT is an academic-access gate, not a job credential: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The TOEFL iBT measures English proficiency for academic admission and professional registration; it does not certify an occupation, so no BLS SOC code corresponds to a score. The salary story runs through the access the test provides: more than 12,000 universities and agencies in over 160 countries accept TOEFL scores, and for international students the score is a required input to admission at US and other English-medium institutions, which is where the BLS earnings gradient matters. In 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone; for international graduates who remain in the US labor market, the relevant comparison is between the occupations those degrees unlock and the alternatives available without the credential. The test also serves professional contexts - nursing and medical boards, aviation authorities and licensing bodies use TOEFL for credential verification - and in those cases the salary that follows belongs to the licensed occupation itself (for example, registered nurses earned a $93,600 median in May 2024, per BLS). BLS classifies workers by occupation and education, not by test scores, so no TOEFL band maps to a wage; the connection runs through the admission, degree completion and licensing that the score enables. The honest framing is that a TOEFL score is infrastructure: it buys access to the pipeline whose wage outcomes BLS documents, and its value is measured by the programs it unlocks, not by a salary table.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Registered nurses median, May 2024', value: '$93,600', note: 'BLS OEWS, SOC 29-1141' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'TOEFL iBT score range', value: '0-120', note: 'ETS, four sections of 30' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; access to credential-bearing occupations drives the test\u2019s economic role.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'TOEFL iBT has no pass/fail line; institutions set their own cut scores, typically 70-100 on the 120-point scale',
    summary: 'ETS publishes no pass rate for the TOEFL iBT because there is no universal passing score. Each institution or agency sets its own cut score, and the range is wide: community colleges often accept 65-79, four-year universities commonly require 80-95, graduate programs frequently ask for 90-100 or higher, and licensing bodies vary by profession. The test is scored 0-120 across four sections (Reading, Listening, Speaking, Writing, each 0-30), with an integrated-skills design in which tasks combine reading plus listening, or listening plus speaking. ETS reports each section separately and a total, and ETS\u2019s own score descriptors classify proficiency bands (for example, scores above roughly 100 correspond to "advanced" proficiency, 80-99 to "high-intermediate," and 60-79 to "intermediate"). The practical effect is that candidates must research the exact requirement of each target program, because a score that is comfortably passing for one university is below the threshold for another. Scores are reported about 4-13 days after the test (ETS has been reporting at the faster end for most administrations), and the test is delivered at authorized test centers on paper-free computers, with a Home Edition available that is proctored online. Candidates may retake the test as often as they wish, though ETS recommends four-day spacing between attempts (a new attempt may begin every 3 days after the prior test). The honest summary: define your target by looking up program requirements, then treat the four-section breakdown as the diagnostic for what to retrain.',
    source: { label: 'ETS TOEFL iBT scoring and information', url: 'https://www.ets.org/toefl/test-takers/ibt/about.html' },
    caveat: 'No pass rate exists; cut scores are set by each institution, commonly 70-100.'
  },
  studyPlan: {
    summary: 'The TOEFL iBT runs about 2 hours (since the July 2023 shortening) and contains four timed sections: Reading (2 passages, 20 questions, 35 minutes), Listening (28 questions, 36 minutes), Speaking (4 tasks, 16 minutes), and Writing (2 tasks, about 29 minutes). A serious preparation plan runs 60-120 hours over 8-16 weeks depending on starting proficiency. Week 1: take a full official practice test (ETS offers two free TOEFL iBT practice tests) and record the four section scores and the total. Weeks 2-4: build Reading and Listening accuracy with daily 30-45 minute blocks using official ETS TOEFL iBT practice sets; academic vocabulary and note-taking are the two highest-yield skills, because both Reading and Listening reward structured notes. Weeks 5-7: Speaking, the section most candidates underestimate - record yourself on all four task types (independent and integrated), transcribe your answers, and fix grammar and pacing; pronunciation matters less than intelligibility and completeness. Weeks 8-10: Writing - practice the integrated essay (read + listen + write, 20 minutes) and the academic-discussion essay (10 minutes), and build a template library for both. Weeks 11-12: full timed practice tests weekly and targeted retakes of weak sections. Weeks 13-16: taper to two full tests and test-day logistics, including the Home Edition technology check if that is your delivery method. The most common pattern is a candidate who scores 85 with a weak Speaking section; the plan should weight the weakest section heavily because universities often impose per-section minimums.',
    totalHours: '60-120 hours over 8-16 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official full practice test', 'Record four section scores'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'Reading and Listening', tasks: ['Official practice sets daily', 'Academic vocabulary and note-taking'], hours: 24 },
      { label: 'Weeks 5-7', focus: 'Speaking', tasks: ['Record all 4 task types', 'Transcribe and fix grammar and pacing'], hours: 24 },
      { label: 'Weeks 8-10', focus: 'Writing', tasks: ['Integrated and discussion essays', 'Build template library'], hours: 24 },
      { label: 'Weeks 11-12', focus: 'Full timed tests', tasks: ['Weekly full tests', 'Target weak sections'], hours: 18 },
      { label: 'Weeks 13-16', focus: 'Taper and logistics', tasks: ['Two final full tests', 'Test-center or Home Edition check'], hours: 14 }
    ],
    variants: [
      { label: 'Test center vs Home Edition', detail: 'The Home Edition is online-proctored; verify system requirements and run the equipment check well before test day.' },
      { label: 'Per-section minimums', detail: 'Many programs require minimums per section, not just a total; plan around the weakest section.' }
    ]
  },
  prepStrategies: {
    summary: 'The highest-leverage TOEFL strategies target the integrated-skill design. Strategy one: master note-taking, because Reading, Listening, and both Writing tasks reward structured notes, and the integrated tasks deliberately combine sources. Strategy two: use official ETS materials almost exclusively for question style - the free official practice tests and the TOEFL iBT Practice Sets - because third-party materials routinely misrepresent the integrated task structure. Strategy three: for Speaking, record and transcribe every practice answer; the biggest gains come from fixing incomplete answers and grammar slips, not from accent work, since ETS scores delivery, language use and topic development. Strategy four: build a response template for each Writing task type (the integrated essay and the academic-discussion essay) and a flexible outline for the independent Speaking tasks, because templates reduce in-test planning time and protect against the time pressure that sinks most candidates. Strategy five: practice under the exact timing of the shortened format - two passages in Reading, not three - so pacing matches the current test. Strategy six: if you need a specific score for a specific program, research the per-section minimums first and allocate prep hours by the gap between your current and required section scores rather than by the total gap. Finally, take the test early enough to have a retake window before application deadlines, because most candidates improve measurably between attempts.',
    items: [
      { title: 'Make note-taking automatic', detail: 'Integrated tasks reward structured notes; practice summarizing every passage.' },
      { title: 'Use official ETS materials', detail: 'Third-party banks misrepresent integrated tasks; ETS practice sets are the standard.' },
      { title: 'Record and transcribe Speaking', detail: 'Fix incomplete answers and grammar; intelligibility over accent.' },
      { title: 'Build Writing templates', detail: 'Templates cut planning time on both essay tasks.' },
      { title: 'Match current-format timing', detail: 'Practice the shortened format with two Reading passages.' }
    ]
  },
  resourceComparison: {
    summary: 'ETS owns the only fully official TOEFL materials, which makes the resource decision simple at the top: the free official practice tests (two full tests) and the TOEFL iBT Practice Sets are the highest-fidelity preparation available and cost nothing. The TOEFL iBT Interactive Sampler (free) and the Official Guide to the TOEFL iBT Test (about $25-45) add structured review. Beyond official materials, the market divides into commercial courses ($100-$2,000), live tutors ($40-$150/hour), and free community resources such as English-language media for listening practice and exchange partners for speaking practice. For candidates whose weakness is academic vocabulary, free resources like corpus-based word lists and reading practice on academic texts are effective. For the Writing and Speaking sections, where feedback matters most, a tutor or a paid writing-evaluation service can be worth the cost because ETS-style scoring feedback is hard to self-assess. The honest ranking: official free practice first, the Official Guide for structure, then paid services only for feedback on Speaking and Writing. Candidates using the Home Edition should also budget time for the free ETS equipment check, which is part of the official process. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official practice tests', values: ['Free (2 full tests)', 'Online', 'Highest-fidelity format and scoring'] },
      { label: 'TOEFL iBT Practice Sets', values: ['Free', 'Online', 'Per-section targeted practice'] },
      { label: 'Official Guide to the TOEFL iBT', values: ['$25-$45', 'Print/ebook', 'Structured review and strategy'] },
      { label: 'Commercial course', values: ['$100-$2,000', 'Live/on-demand', 'Structure and accountability'] },
      { label: 'Speaking/Writing feedback service', values: ['$20-$150', '1:1 or scored review', 'The hardest sections to self-assess'] }
    ],
    footnote: 'Prices dated 2025-26; ETS official materials are the accuracy standard. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common TOEFL mistakes flow from underestimating the integrated-skill design. Mistake one: practicing Reading and Listening in isolation and ignoring the integrated tasks, which combine sources and appear in Speaking and Writing as well; candidates who only drill discrete skills are surprised by the synthesis demands. Mistake two: writing essays without templates or outlines, then running out of time mid-essay; the writing section is short, and planning structure in advance is the difference between a complete and a partial response. Mistake three: treating Speaking as a pronunciation contest; ETS scores delivery, language use and topic development, and candidates who chase accent perfection while giving incomplete answers lose points on completeness. Mistake four: skipping note-taking practice and trying to hold passage details in memory for integrated tasks. Mistake five: using outdated third-party materials that still show the old three-passage Reading format or 20-minute essay; the format shortened in 2023, and pacing practice must match the current structure. Mistake six: ignoring per-section minimums - a candidate can hit the total target and still be rejected by a program that requires a Speaking minimum of 24, so the weakest section must be the priority. Finally, international candidates frequently underestimate the Home Edition\u2019s logistics; failing the equipment check or proctoring rules wastes a paid attempt.',
    items: [
      { mistake: 'Isolating skills from integrated tasks', fix: 'Practice read+listen+speak/write combinations from the start.' },
      { mistake: 'Writing without templates', fix: 'Build outlines for both essay types before test day.' },
      { mistake: 'Chasing accent perfection', fix: 'Maximize completeness, delivery and language use.' },
      { mistake: 'Ignoring note-taking', fix: 'Summarize every practice passage to build the habit.' },
      { mistake: 'Using pre-2023 format materials', fix: 'Practice the shortened format with two Reading passages.' }
    ]
  },
  questionTypes: {
    summary: 'The TOEFL iBT (current shortened format) has four sections: Reading (2 academic passages, 20 questions, 35 minutes - item types include vocabulary, reference, sentence simplification, and insert-text), Listening (28 questions, 36 minutes - lectures and conversations with multiple-choice, multi-select, and reorder tasks), Speaking (4 tasks, 16 minutes - one independent task and three integrated tasks combining reading and/or listening), and Writing (2 tasks, about 29 minutes - an integrated essay based on a reading passage plus a lecture, and a 10-minute academic-discussion essay). Each section is scored 0-30 for a total of 120. Samples below are editor-written illustrations of the published task types, not live exam items.',
    types: [
      { name: 'Reading', share: '20 items / 35 min', detail: 'Two academic passages; vocabulary, inference, sentence-insertion.' },
      { name: 'Listening', share: '28 items / 36 min', detail: 'Lectures and conversations; main idea, detail, inference, reorder.' },
      { name: 'Speaking', share: '4 tasks / 16 min', detail: 'One independent, three integrated (read+listen+speak).' },
      { name: 'Writing', share: '2 tasks / ~29 min', detail: 'Integrated essay and 10-minute academic discussion.' }
    ],
    samples: [
      {
        prompt: 'Reading passage: "Some species of bats use echolocation to navigate, but the detail of how they process returning echoes remains debated. Recent work suggests the brain filters clutter by comparing echoes across successive calls." The professor then discusses how new research using high-speed recording shows the filtering happens before the brain\u2019s auditory cortex. What does the lecture suggest about the processing described in the passage?',
        options: ['A. It supports the passage\u2019s claim that filtering involves successive comparisons', 'B. It contradicts the passage by locating filtering earlier than assumed', 'C. It shows bats cannot filter echoes at all', 'D. It proves echolocation is limited to a few bat species'],
        answer: 'B',
        explanation: 'The lecture provides new evidence that filtering occurs before the auditory cortex, which is earlier in the processing chain than the passage\u2019s "successive comparisons" description suggests - a partial contradiction.'
      },
      {
        prompt: 'Summarize the point of a university notice about library hours: "Beginning next Monday, the main library will open at 7:30 a.m. on weekdays and close at midnight; weekend hours are unchanged." Speaking task: the student then explains why the new hours matter for evening classes.',
        options: ['A. Repeat the exact hours without context', 'B. State the hours change and connect it to evening-class access', 'C. Only mention that weekend hours are unchanged', 'D. Recommend a different library'],
        answer: 'B',
        explanation: 'A strong integrated response states the key change (earlier opening, later close) and connects it to the student\u2019s situation (evening classes), which the response framework rewards.'
      },
      {
        prompt: 'Academic discussion essay task: "Professor: Many argue that cities should replace parking lots with green spaces. What is your view, and why?" Write a response of about 100 words using the opinions in the discussion where relevant.',
        options: ['A. Agree or disagree and give at least two clear reasons with examples', 'B. Restate the professor\u2019s question only', 'C. Describe a parking lot in detail', 'D. List statistics without taking a position'],
        answer: 'A',
        explanation: 'The task requires a clear position supported by reasons and examples, engaging the discussion; restating, describing, or listing data without a position earns a low score.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published task types, not live exam items.'
  },
  examDay: {
    summary: 'The TOEFL iBT is delivered at authorized ETS test centers worldwide and in a proctored Home Edition. At a test center, arrive 30-45 minutes early with a valid passport (the standard ID for international candidates; check the ETS ID requirements for your country), leave personal electronics in a locker, and expect a check-in that includes a photo and a signature; the test is fully computer-based, so only your ID is used at the computer. The test lasts about 2 hours with a 10-minute break between Listening and Speaking (the break is optional and on-screen). For the Home Edition, complete the ETS equipment check days ahead, use a quiet private room, and follow the proctor\u2019s instructions - no phones, notes, or second monitors, and the room must be clear. Scores are reported about 4-13 days after the test in the ETS account, and score reports can be sent to up to four institutions free within the reporting window; additional reports cost a fee. Candidates may retake the test every 3 days after a prior attempt, with no limit, and ETS offers a score-review service for Speaking and Writing (paid). Afterwards, send scores to every target program before deadlines, confirm each program\u2019s per-section minimums, and if a retake is needed, target the weakest section explicitly rather than retaking the whole test with the same preparation.',
    bring: ['Valid passport or approved photo ID (per ETS country rules)', 'Test-center appointment confirmation', 'Home Edition: verified system and quiet room', 'Optional approved notes for the break (center-dependent)'],
    leave: ['Phone, smartwatch, and all personal electronics', 'Notes or study materials (prohibited at the computer)', 'Second monitors or devices for the Home Edition'],
    timeline: [
      { time: '30-45 min before', detail: 'Arrive at the test center; check in with photo ID.' },
      { time: 'Section 1', detail: 'Reading (2 passages, 20 questions, 35 minutes).' },
      { time: 'Section 2', detail: 'Listening (28 questions, 36 minutes).' },
      { time: 'Break', detail: 'Optional 10-minute on-screen break.' },
      { time: 'Section 3', detail: 'Speaking (4 tasks, 16 minutes).' },
      { time: 'Section 4', detail: 'Writing (2 tasks, about 29 minutes).' },
      { time: '4-13 days later', detail: 'Scores post; send to programs.' }
    ],
    rules: [
      'Photo ID is mandatory; personal electronics are prohibited at the computer.',
      'The Home Edition requires a verified system, private room, and online proctor.',
      'The optional break is 10 minutes and on-screen.',
      'Retakes are allowed every 3 days after a prior attempt.'
    ],
    afterwards: 'Scores post in 4-13 days; send reports to all target programs, verify per-section minimums, and retake with a section-focused plan if below target.'
  }
};

export default data;
