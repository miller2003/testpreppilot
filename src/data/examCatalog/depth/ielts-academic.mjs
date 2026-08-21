const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'English proficiency & international testing desk',
    bio: 'We cover international English-proficiency testing including the IELTS Academic test. Format and fee facts come from IELTS official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IELTS Academic format, band scale, fees and delivery against IELTS official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'IELTS Academic is an access gate for study and skilled migration: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The IELTS Academic test measures English proficiency for higher education admission and professional registration; it does not certify an occupation, so no BLS SOC code corresponds to a band score. The salary story runs through the access the test provides: IELTS Academic is accepted by more than 11,000 organizations worldwide, including US universities, and it is also a core requirement for skilled-migration and professional-registration pathways in countries such as Canada, Australia, the UK and New Zealand - pathways that, for internationally trained professionals, directly determine which labor markets and which BLS-documented wage distributions are reachable. In the US, BLS reported that in 2024 full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone; for international students and skilled migrants, the IELTS band is the ticket to the degree or the registration that those figures describe. The test also serves professional registration - nursing boards, medical regulators and immigration authorities use IELTS for credential verification - and in those cases the salary belongs to the licensed occupation itself (for example, registered nurses earned a $93,600 median in May 2024 per BLS). BLS classifies workers by occupation and education, not test scores, so no band maps to a wage; the connection runs through the admission, degree completion and licensing the score enables. The honest framing is that an IELTS band is infrastructure: it buys access to pipelines whose wage outcomes BLS documents, and its value is measured by the programs and visas it unlocks.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Registered nurses median, May 2024', value: '$93,600', note: 'BLS OEWS, SOC 29-1141' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'IELTS band scale', value: '1-9', note: 'IELTS, half-band increments' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; access to credential-bearing occupations drives the test\u2019s economic role.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'IELTS has no pass/fail line; institutions set band requirements, typically 6.0-7.5 on the 9-band scale',
    summary: 'IELTS partners (British Council, IDP and Cambridge) do not publish a pass rate because there is no universal passing score. Each institution, visa authority or professional body sets its own band requirement, and the typical range is wide: many undergraduate programs require an overall band of 6.0-6.5, graduate programs commonly ask for 6.5-7.0, competitive programs and professional registration frequently require 7.0-7.5, and individual sections often have minimums (for example, no section below 6.0). The test is scored on the 9-band scale with half-band increments, with four section scores (Listening, Reading, Writing, Speaking) and an overall band that is the average, rounded. Band descriptors define each level: a 6.0 is "competent," 7.0 is "good," and 8.0 is "very good," which is why institutions use bands as thresholds. The Academic test uses academic-oriented Reading and Writing tasks, while the General Training test (used mainly for migration and work visas) uses everyday materials; candidates must choose the right version for their purpose. Results are typically released 3-5 days after the computer-delivered test and 13 days after paper delivery (IELTS has been publishing faster computer-delivery timelines), and candidates may retake as often as they wish. IELTS One Skill Retake is available in many locations for candidates who need to raise one section. The honest summary: research the exact band requirement of every target program or visa pathway before preparing, and build the plan around the section minimums, not just the overall band.',
    source: { label: 'IELTS official band score information', url: 'https://www.ielts.org/for-test-takers/how-ielts-is-marked' },
    caveat: 'No pass rate exists; band requirements are set by each institution or visa authority, typically 6.0-7.5.'
  },
  studyPlan: {
    summary: 'The IELTS Academic test runs about 2 hours 45 minutes for the first three sections plus a 11-14 minute Speaking interview: Listening (4 recordings, 40 questions, 30 minutes plus transfer time), Reading (3 academic passages, 40 questions, 60 minutes), Writing (2 tasks, 60 minutes - a 150-word data description and a 250-word essay), and Speaking (3 parts, 11-14 minutes, face-to-face with an examiner). A serious plan runs 60-120 hours over 8-16 weeks depending on starting band. Week 1: take a full official practice test and record the four section bands and the overall band. Weeks 2-4: build Listening and Reading accuracy with daily 30-45 minute blocks using official Cambridge practice materials, focusing on the question-type families (multiple choice, matching, true/false/not given, sentence completion) and on reading speed, because the Reading section is the most time-pressured. Weeks 5-7: Writing - study the band descriptors for Task 1 and Task 2, practice both tasks to a timer, and get feedback from a tutor or a marked official sample service, because writing is the section that improves least without feedback. Weeks 8-10: Speaking - practice all three parts with a partner or recorded self-practice, target fluency and cohesion over accent, and prepare the Part 2 long-turn strategy. Weeks 11-12: full timed practice tests weekly, targeted retakes of weak sections. Weeks 13-16: taper and logistics, including the computer vs paper decision (computer-delivered IELTS reports faster and allows on-screen highlighting). The most common pattern is a candidate whose Writing band lags the others; the plan should weight Writing and Speaking, the two sections that require production rather than recognition.',
    totalHours: '60-120 hours over 8-16 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official full practice test', 'Record four section bands'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'Listening and Reading', tasks: ['Official practice sets daily', 'Question-type families and speed'], hours: 24 },
      { label: 'Weeks 5-7', focus: 'Writing', tasks: ['Band-descriptor study', 'Timed Task 1 and Task 2 with feedback'], hours: 24 },
      { label: 'Weeks 8-10', focus: 'Speaking', tasks: ['Three parts with a partner', 'Fluency and Part 2 long-turn practice'], hours: 18 },
      { label: 'Weeks 11-12', focus: 'Full timed tests', tasks: ['Weekly full tests', 'Target weak sections'], hours: 18 },
      { label: 'Weeks 13-16', focus: 'Taper and logistics', tasks: ['Two final full tests', 'Computer vs paper decision'], hours: 14 }
    ],
    variants: [
      { label: 'Computer vs paper', detail: 'Computer-delivered IELTS reports results in 3-5 days and allows on-screen highlighting; paper reports in about 13 days.' },
      { label: 'One Skill Retake', detail: 'In many locations, candidates can retake a single section instead of the whole test; check eligibility and band rules.' }
    ]
  },
  prepStrategies: {
    summary: 'The highest-leverage IELTS strategies target the two production sections (Writing and Speaking) that most candidates under-prepare. Strategy one: study the band descriptors for Writing and Speaking before doing anything else, because they define exactly what a 6.5 versus 7.0 means (task response, coherence and cohesion, lexical resource, grammatical range) and turn vague "write better" goals into checklists. Strategy two: get feedback on Writing - the section that improves least through self-study; a tutor or a marked sample service that scores against the descriptors is the highest-return investment. Strategy three: practice Speaking as production, not pronunciation - record yourself answering Part 1/2/3 questions, transcribe and fix fluency gaps and repeated grammar errors, because the examiner scores fluency, coherence, lexical resource, grammatical range and pronunciation, in that practical order of weight for most candidates. Strategy four: master the Reading question-type families - true/false/not given is the most-missed type and rewards learning the logical distinction, not more vocabulary. Strategy five: in Listening, use the transfer-time strategy and practice the exact recording formats, because the test\u2019s single-play audio punishes distraction. Strategy six: match your practice materials to the current format (Cambridge official practice tests, which are the closest match) and confirm whether your target programs require the Academic test or accept the General Training test, since the two differ substantially in Reading and Writing.',
    items: [
      { title: 'Learn the band descriptors', detail: 'They define what each band means and turn practice into checklists.' },
      { title: 'Get Writing feedback', detail: 'Writing improves least without scoring feedback against the descriptors.' },
      { title: 'Train Speaking as production', detail: 'Record, transcribe, and fix fluency and grammar, not accent.' },
      { title: 'Master true/false/not given', detail: 'The most-missed Reading type rewards the logical distinction.' },
      { title: 'Pick the right test version', detail: 'Academic vs General Training differ substantially in Reading and Writing.' }
    ]
  },
  resourceComparison: {
    summary: 'IELTS preparation is dominated by official Cambridge materials, which are the accuracy standard. The IELTS official website offers free practice tests and sample questions, and the Cambridge IELTS practice books (about $20-$40 per volume, with retired tests) are the closest match to the real exam; using two or three volumes is the standard serious preparation. The official IELTS British Council/IDP preparation courses and the Road to IELTS package (often free with registration) add structured online practice. For Writing feedback, marked sample services and tutors ($40-$150/hour) are the highest-value paid resource because Writing is the section that improves least without scoring feedback. Commercial prep courses ($200-$2,000) provide structure and Speaking practice, which can justify the cost for candidates with time pressure. Free resources - English-language media for Listening, academic reading for Reading - are useful supplements. The honest ranking: official free practice, Cambridge practice volumes, feedback on Writing and Speaking, and courses only for structure. Candidates should also compare the computer vs paper test fee, which varies by center. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'IELTS official free practice', values: ['Free', 'Online', 'Format and sample questions'] },
      { label: 'Cambridge IELTS practice volumes', values: ['$20-$40 each', 'Print/ebook', 'Retired tests, the closest match'] },
      { label: 'Road to IELTS package', values: ['Free with registration', 'Online', 'Structured practice'] },
      { label: 'Writing feedback / tutor', values: ['$40-$150', '1:1 or scored review', 'The highest-value paid resource'] },
      { label: 'Commercial course', values: ['$200-$2,000', 'Live/on-demand', 'Structure and Speaking practice'] }
    ],
    footnote: 'Prices dated 2025-26; Cambridge materials are the accuracy standard. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common IELTS mistakes come from under-preparing the production sections and misreading the question types. Mistake one: practicing only Listening and Reading because they are easy to self-mark; Writing and Speaking carry half the score and improve least through recognition practice, so candidates who skip them stall at the same band. Mistake two: writing essays without feedback; a candidate can practice for months and repeat the same descriptor-level errors (task response gaps, cohesion problems) that only a scorer will surface. Mistake three: memorizing essay templates and vocabulary lists; examiners are trained to spot memorized responses, and the descriptors reward task response and natural range, not fixed phrases. Mistake four: mishandling the true/false/not given Reading type, where the distinction between "false" (contradicted) and "not given" (not mentioned) is the most-missed skill on the test. Mistake five: ignoring the section minimums - a candidate can hit the overall band and still fail a visa or program that requires no section below 6.5. Mistake six: taking the wrong test version; the General Training Reading and Writing differ substantially from Academic, and candidates who register for the wrong one lose the attempt. Finally, candidates should practice under the exact timing, including the Listening transfer time, because the single-play audio punishes unpracticed note-taking.',
    items: [
      { mistake: 'Skipping Writing and Speaking practice', fix: 'Half the score is production; practice both weekly.' },
      { mistake: 'Practicing essays without feedback', fix: 'Get scored feedback against the band descriptors.' },
      { mistake: 'Memorizing templates', fix: 'Examiners spot memorized responses; practice natural response.' },
      { mistake: 'Missing true/false/not given logic', fix: 'Learn the contradicted-vs-not-mentioned distinction.' },
      { mistake: 'Ignoring section minimums', fix: 'Build the plan around per-section requirements.' }
    ]
  },
  questionTypes: {
    summary: 'The IELTS Academic test has four sections. Listening: 4 recordings (conversations and monologues), 40 questions, 30 minutes plus 10 minutes transfer time on paper; types include multiple choice, matching, plan/map labelling, form/note/table completion, and sentence completion. Reading: 3 academic passages, 40 questions, 60 minutes; types include multiple choice, true/false/not given, matching headings, summary completion, and short answer. Writing: Task 1 (describe a graph, table, chart or diagram in at least 150 words, about 20 minutes) and Task 2 (an essay of at least 250 words on a general topic, about 40 minutes). Speaking: 3 parts in 11-14 minutes - Part 1 introduction and general questions, Part 2 a 1-2 minute long turn on a cue card, Part 3 a discussion linked to Part 2. Each section scores 1-9 with half-bands; the overall band is the rounded average. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'Listening', share: '40 items / ~30 min', detail: 'Four recordings; completion, matching, multiple choice.' },
      { name: 'Reading', share: '40 items / 60 min', detail: 'Three academic passages; T/F/NG, matching, completion.' },
      { name: 'Writing', share: '2 tasks / 60 min', detail: 'Data description (150+ words) and essay (250+ words).' },
      { name: 'Speaking', share: '3 parts / 11-14 min', detail: 'Interview, long turn, and discussion.' }
    ],
    samples: [
      {
        prompt: 'Listening completion item (transcript-based): The tour group will meet at the museum entrance at ______. The recording states: "Please assemble by the main entrance no later than 10:15 so we can begin the gallery walk on time."',
        options: ['A. 9:45', 'B. 10:00', 'C. 10:15', 'D. 10:30'],
        answer: 'C',
        explanation: 'The recording specifies assembling no later than 10:15; the item tests exact detail from a single-play recording.'
      },
      {
        prompt: 'Reading true/false/not given item: Passage states "Several studies link sleep duration to academic performance, though the causal direction remains debated." Statement: "Research proves that longer sleep causes better grades."',
        options: ['A. True', 'B. False', 'C. Not given'],
        answer: 'B',
        explanation: 'The passage explicitly says the causal direction is debated, which contradicts the statement\u2019s claim of proof - so it is false, not not given.'
      },
      {
        prompt: 'Writing Task 1: The chart shows the percentage of commuters using bicycles in three cities from 2000 to 2020. Describe the main trends. (This is a task instruction, not a multiple-choice item.)',
        options: ['A. Write at least 150 words summarizing trends and comparisons', 'B. Write your opinion on cycling', 'C. Describe the chart in exactly 50 words', 'D. List every data point in the table'],
        answer: 'A',
        explanation: 'Task 1 requires a 150-word minimum data description covering key trends and comparisons; opinions, under-length responses and exhaustive lists all fail the task-response criteria.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'IELTS Academic is delivered at authorized test centers, with both paper-based and computer-delivered options (the computer option reports results faster, typically 3-5 days versus about 13 days for paper). The Listening, Reading and Writing sections are taken together (about 2 hours 45 minutes), and the Speaking test is a face-to-face interview with an examiner, which can be scheduled on the same day or within a few days of the written test depending on the center. On the day, arrive 30 minutes early with the passport or ID used at registration - IELTS has strict ID requirements, and the ID must match the one on the booking. Personal electronics are not permitted in the testing room; paper candidates bring pencils (pens are not allowed for the answer sheet in some centers - check the center rules). The Speaking test is recorded for quality assurance, and the examiner follows a standardized script. Results are released on the official date, and candidates receive a Test Report Form that is valid for two years for most institutions and visas (some organizations accept older scores under specific conditions). Candidates may retake the full test as often as needed, and the One Skill Retake option, where available, allows retaking a single section. Afterwards, send the Test Report Form to all target programs before deadlines and confirm each program\u2019s band and section requirements.',
    bring: ['The passport or ID used at registration', 'Booking confirmation and center instructions', 'Paper test: pencils (check center rules)', 'Stable travel plan - arrive 30 minutes early'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Any ID that does not match the booking'],
    timeline: [
      { time: 'Arrival', detail: 'Check in; ID verification; electronics stored.' },
      { time: 'Listening', detail: '4 recordings, 40 questions, ~30 minutes plus transfer time.' },
      { time: 'Reading', detail: '3 passages, 40 questions, 60 minutes.' },
      { time: 'Writing', detail: 'Task 1 and Task 2, 60 minutes.' },
      { time: 'Speaking', detail: '11-14 minutes, same day or within days per center.' },
      { time: '3-13 days later', detail: 'Results released; Test Report Form issued.' }
    ],
    rules: [
      'The ID must match the booking exactly; personal electronics are prohibited.',
      'The Speaking test is recorded and standardized.',
      'The Test Report Form is valid for 2 years for most uses.',
      'Retakes are unlimited; One Skill Retake is available in many centers.'
    ],
    afterwards: 'Send the Test Report Form to all target programs before deadlines; confirm each program\u2019s overall band and section minimums, and use One Skill Retake if only one section missed.'
  }
};

export default data;
