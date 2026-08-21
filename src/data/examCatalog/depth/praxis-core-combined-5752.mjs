// Depth content for: praxis-core-combined-5752
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This guide is compiled and maintained by our teacher-licensure desk. Praxis tests are administered by ETS and the passing scores are set by each state education agency rather than by ETS itself, so we track the structure and fees from the official ETS Praxis pages and state plainly where you must confirm a state-specific cut score. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Test structure, question counts, timing, fees and retake policy were taken from the official ETS Praxis Core Combined (5752) page and the Study Companions for subtests 5713, 5723 and 5733.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,340 median for elementary school teachers (BLS, May 2024)',
    summary:
      'The Praxis Core is not tied to a single occupation the way a nursing or engineering exam is — it is a gatekeeper that sits in front of essentially every public-school teaching career, from pre-kindergarten through high school, depending on the state. That makes any single salary figure a rough proxy rather than a precise match, and we have chosen the largest and most representative of the licensed-teaching occupations to anchor this page: elementary school teachers except special education, SOC 25-2021. That occupation had a May 2024 median annual wage of $62,340, with the lowest 10 percent earning under $46,440 and the highest 10 percent over $102,010. The spread matters because teacher pay in the United States is set overwhelmingly by district salary schedules — years of experience plus education level — rather than by market pressure, so geography dominates the numbers: a first-year teacher in a high-paying state such as New York or California can out-earn a ten-year veteran in a low-paying state. BLS counted 1,539,800 kindergarten and elementary school teachers in 2024 and projects a 2 percent decline in employment from 2024 to 2034, driven by falling elementary enrollment, yet still expects about 103,800 openings a year, essentially all of them replacement need from retirement and turnover. The honest reading for a Praxis Core candidate is that the exam does not move your salary the way a specialized certification can; it is a toll gate on a career whose pay is determined by district schedules, tenure and additional credentials. What the exam does gate is access to the profession itself, which is why treating it as a fast, well-prepared hurdle — rather than a long campaign — is the economically sensible approach.',
    rows: [
      { label: 'Median annual wage, elementary school teachers (except special education)', value: '$62,340', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $46,440', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $102,010', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024 (kindergarten and elementary)', value: '1,539,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~103,800 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement need' }
    ],
    growth: '-2% projected change 2024-34 (decline driven by falling elementary enrollment), with ~103,800 replacement openings a year. Teacher pay is set by district schedules, so geography and years of service matter more than the credential itself.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Kindergarten and Elementary School Teachers',
      url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'ETS publishes no pass rate by test — the cut score is set by each state',
    summary:
      'ETS does not publish a pass-rate statistic for Praxis Core or any individual Praxis test, and it never has. What ETS publishes instead is the scaled score range — each Core subtest is reported on a 100 to 200 scale — and the fact that the passing score is determined by each state education agency, not by ETS. That is why you will see figures like 150, 156, 162 or 168 cited for the same subtest in different states: those are state-set cut scores, and the spread is wide enough that the same paper could pass in one state and fail in another. This makes "what is the pass rate" the wrong question; the right question is "what is my state’s cut score for each subtest", and the answer lives on the state’s teacher-certification page and on the ETS Praxis state requirements list. What is verifiable and consistent nationwide is the retake policy: ETS requires you to wait 21 days after score release before retaking a failed subtest, there is no limit on the number of attempts, and each attempt is paid at full price. Because the Combined (5752) is scored per subtest, a partial pass behaves sensibly — if you pass two subtests and fail one, you only re-sit the failed subtest, at the individual $90 rate, rather than the whole combined test. That single policy is the reason the combined test is not a high-risk gamble: the downside of a partial pass is one paid retake, not starting over.',
    source: {
      label: 'ETS — Praxis Core test page and state requirements',
      url: 'https://www.ets.org/praxis/prepare/materials/5752'
    },
    caveat:
      'ETS publishes no pass rate by exam. Cut scores are set independently by each state education agency on the 100-200 scaled score scale; confirm your state\'s requirement before registering, because the same subtest passes at different scores in different states.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The Combined (5752) stacks all three Core subtests into one ~4.5-hour appointment: Reading (5713) at 56 selected-response questions in 85 minutes, Writing (5723) at 40 selected-response questions plus two essays in 100 minutes, and Mathematics (5733) at 56 questions including numeric-entry items in 90 minutes. The total is about 152 selected-response questions plus two essays, and every subtest is scored independently on a 100-200 scale with a state-set cut. Because the subtests are separately scored, your study plan should be built from your weakest subtest first, not equally across all three — a candidate with a 145 in math and a 170 in reading has one problem, and it is not reading. The plan below runs eight weeks at roughly 8-10 hours a week, with the first three weeks on the weakest subtest and the final week on a full-length timed mock of all three in one sitting to rehearse stamina. Two structural facts shape the schedule. First, the Writing subtest is unique among the three: its essays are scored by trained raters using a rubric, and your score reflects the quality of the argument and language, not a right/wrong key — so essay practice needs to be written, timed and reviewed against the rubric, not just outlined. Second, the Mathematics subtest provides an on-screen calculator and permits no personal calculators, so all math practice should be done with the on-screen tool in mind rather than a handheld device, and numeric-entry questions require you to type the exact value, which punishes rounding mistakes.',
    totalHours: '65-85 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Diagnostic and weakest-subtest mapping',
        tasks: [
          'Take one timed subtest of each kind (Reading, Writing SR, Math) under exam conditions to get a raw picture of where you stand',
          'Look up your state\'s exact cut score for all three subtests on the ETS Praxis state requirements page and write them down',
          'Decide the week allocation: the two weakest subtests get roughly 60 percent of your study time',
          'Set up the official Study Companions for 5713, 5723 and 5733 as your content map'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Weakest subtest — content repair',
        tasks: [
          'If math: drill the three content categories — number and quantity, algebra and functions, geometry, statistics and probability — using the Study Companion objectives as a checklist',
          'If reading: work the three categories — key ideas and details, craft and structure, integration of knowledge — on real passages with timing',
          'If writing: complete the SR grammar and research-skills items AND write at least two full timed essays per week, then score them against the published rubric',
          'Log every miss by category, not by question number, so the repair list stays short'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 4',
        focus: 'Second-weakest subtest',
        tasks: [
          'Repeat the content-repair loop from Weeks 2-3 on the second-weakest subtest',
          'Keep the weakest subtest alive with 30-45 minutes of spaced drills so the repair does not fade',
          'For math, begin doing all timed work with the on-screen calculator only',
          'For reading, practise the two-essay Writing section as a single 100-minute block once'
        ],
        hours: '9-11 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Integrated timed drills',
        tasks: [
          'Two full-length timed subtests per week, rotated so all three stay warm',
          'For Writing, write both essays in the 100-minute block every week and review them against the rubric — quantity of written essays is the highest-yield activity in this entire exam',
          'For math, drill numeric-entry items specifically and eliminate rounding slips',
          'Re-test the original weakest subtest to confirm the repair took before Week 7'
        ],
        hours: '9-11 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Full-length combined rehearsal',
        tasks: [
          'One full Combined (5752) mock: all three subtests in one sitting, ~4.5 hours, with only the scheduled break',
          'Replicate the real conditions: no phone, on-screen calculator only, timed essays written by hand or typed exactly as your test centre allows',
          'Review the mock by subtest and category; the score matters less than the pattern of what you missed under fatigue',
          'Drill the specific categories that cost points in the mock'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Taper and logistics',
        tasks: [
          'Light review only: category checklists, miss lists, and the writing rubric',
          'Rehearse the essay structure one final time — thesis, two to three developed reasons, counterargument or synthesis, conclusion',
          'Confirm your state cut scores, your ID name matches your Praxis account, and your test-centre or online-proctoring slot',
          'One quiet day before the exam'
        ],
        hours: '6-8 hrs'
      }
    ],
    variants: [
      { label: 'Strong in all three subtests', detail: 'Four to five weeks at 6-8 hrs/week. Skip Weeks 2-3, run the integrated drills earlier, and invest the recovered time in the two essays — the constructed-response Writing items are where even strong candidates lose points.' },
      { label: 'Working full-time', detail: 'Twelve weeks at 5-6 hrs/week. The essay workload is the scheduling problem: you need two full 100-minute Writing blocks per week for the last six weeks, which does not fit in thirty-minute pockets. Protect those two blocks explicitly.' },
      { label: 'Returning adult, out of school for years', detail: 'Ten to twelve weeks at 7-9 hrs/week. Start with the math subtest regardless of your self-assessment — the numeracy and algebra categories decay fastest with disuse — and treat the essays as a skill to rebuild with weekly timed writing, not as knowledge to review.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Praxis Core rewards general academic skill rather than specialist knowledge, which means the exam is more trainable than most: the three subtests are built from the same reading, writing and quantitative skills that every college-educated adult has used, and the gap between a weak score and a passing score is usually drilling under time pressure plus learning the question style, not acquiring new knowledge. The strategies below are ordered by score impact, and the two highest-yield ones cost nothing but time.',
    items: [
      {
        title: 'Write the two essays every single week, timed',
        detail: 'The Writing subtest (5723) is 40 selected-response items plus two scored essays — argumentative and informative/explanatory — each written in 30 minutes, and the essays carry a large share of the Writing score. Candidates who outline essays in their head and never write one under a clock lose points in structure, development and syntax that are entirely avoidable. Write both essays weekly, score them against the published ETS rubric (score, development, organization, language), and revise your weakest dimension each week. This is the single highest-yield activity on the entire exam.'
      },
      {
        title: 'Do all math practice with the on-screen calculator',
        detail: 'The Mathematics subtest (5733) provides an on-screen calculator and does not permit personal devices, and it includes numeric-entry questions where you type the exact answer. If you practise with a handheld calculator or a phone, the transition costs you both speed and accuracy on the day. Force yourself through every timed block with the on-screen tool from Week 4 onward, and drill numeric-entry items specifically until you stop making rounding and transcription slips.'
      },
      {
        title: 'Map every miss to a Study Companion category',
        detail: 'The three subtests each have published content categories — Reading has key ideas and details, craft and structure, and integration of knowledge; Math has numbers, algebra, geometry, and statistics; Writing has text types and language/research skills. When you miss an item, tag it to a category, not a question number. After two weeks the tag list shows your actual weaknesses, and you can stop guessing where to drill.'
      },
      {
        title: 'Read passages for structure, not just comprehension',
        detail: 'Reading (5713) is entirely passage-based and asks about main idea, author purpose, text organization, and how ideas connect. Practise naming the structure of a passage — cause/effect, compare/contrast, problem/solution — in one sentence after each read. Candidates who read for content only get the literal items and miss the craft-and-structure items, which are a third of the subtest.'
      },
      {
        title: 'Know your state cut score before you start',
        detail: 'Because passing scores are set by state and vary from roughly 150 to 168 per subtest, a candidate studying to "beat a 160" may be over- or under-preparing depending on where they will be licensed. Look up your state\'s requirement in Week 1 and aim for the state target plus a small safety margin, not for an abstract national number that does not exist.'
      },
      {
        title: 'Rehearse the full four-and-a-half-hour sitting once',
        detail: 'The Combined (5752) is a long appointment and stamina is a real factor: two-thirds of candidates are fine for two subtests and visibly sloppier in the third. One full-length combined mock in Week 7, with the same break schedule as the real test, tells you exactly where fatigue will cost you and lets you plan your pacing — for example, doing the subtests in the presented order rather than reordering under fatigue.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision here is unusual because the highest-value resources are free: ETS publishes a Study Companion for each subtest with the content categories and sample questions, and ETS\'s own Interactive Practice Test is cheap and closer in style to the real items than most third-party banks. Third-party courses add structure and drilling volume, but for a skills exam the cost-effectiveness curve is steep — pay for timed practice and essay feedback, not for content lectures on material you already partly know.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS Study Companions (5713, 5723, 5733) and the Combined 5752 page', values: ['Free', 'PDF content outlines with sample questions and the Writing rubric', 'The authoritative content map — start here and tag every miss to these categories'], },
      { label: 'ETS Praxis Interactive Practice Test (5752)', values: ['~$20', 'Timed online practice test with immediate scoring', 'The closest question style to the real exam; the best single readiness check'], },
      { label: 'Combined test registration (5752)', values: ['$150 (vs. $90 per subtest taken alone)', 'Prometric test centre or online proctoring', 'Required — the combined booking saves $120 if you need all three subtests'], },
      { label: '240 Tutoring Praxis Core study guide', values: ['~$80-100 subscription', 'Diagnostic plus domain-by-domain lessons and practice questions', 'Structured repair for a specific weak subtest, especially math'], },
      { label: 'Khan Academy (free math) + Mometrix flashcards', values: ['Free to ~$40', 'Video lessons and drill decks', 'Cheap, targeted math repair and vocabulary/skill recall'], },
      { label: 'Community-college or district Praxis prep course', values: ['Often free or low-cost', 'In-person or live online with instructor feedback', 'Essay feedback on the Writing subtest — the one thing self-study cannot replace'], }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; ETS registration fees are set by ETS and state surcharges may apply. Passing scores are set by state, not included in any fee. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Praxis Core failure is rarely a knowledge problem — it is a pacing, structure or strategy problem, and the six traps below account for most of them. The through-line is that candidates treat a skills exam like a content exam: they read broadly instead of drilling under time pressure, they outline essays instead of writing them, and they study to an imaginary national passing score instead of their own state cut.',
    items: [
      {
        mistake: 'Studying to the wrong pass score',
        fix: 'There is no national Praxis Core cut score; each state sets its own, typically between roughly 150 and 168 per subtest on the 100-200 scale. Look up your state\'s exact requirement in Week 1 and aim at that target plus a safety margin. Candidates who train to "beat a 160" may be drilling far above or far below the line that actually applies to them.'
      },
      {
        mistake: 'Outlining essays instead of writing them',
        fix: 'The two essays are scored by raters against a rubric, and the score reflects the finished essay — structure, development, organization, language. Candidates who outline in their heads discover on the day that producing a coherent 500-word argument in 30 minutes is a different skill. Write both essays weekly, timed, and score them against the published rubric.'
      },
      {
        mistake: 'Practising math with a handheld calculator',
        fix: 'The Math subtest provides an on-screen calculator and allows no personal devices, and numeric-entry items require typing the exact value. Practising with a physical calculator trains a workflow you cannot use on the day. From Week 4, every timed math block runs on the on-screen tool only.'
      },
      {
        mistake: 'Studying the three subtests equally',
        fix: 'The subtests are independently scored and independently re-takable, so a balanced plan is a wasted plan. Spend roughly 60 percent of your time on the two weakest subtests, repair them first, and confirm the repair with a re-test before the exam. A partial pass is not a disaster — you only re-sit the failed subtest — but a passing plan does not need to risk one.'
      },
      {
        mistake: 'Skipping the full-length combined rehearsal',
        fix: 'The Combined (5752) is a ~4.5-hour appointment, and fatigue is a real score factor: many candidates are noticeably weaker in the third subtest. One full combined mock in Week 7, under the same break and no-phone conditions, exposes exactly where you fade and lets you pace accordingly.'
      },
      {
        mistake: 'Ignoring the 21-day retake wait',
        fix: 'ETS requires a 21-day wait after score release before retaking a failed subtest, and every attempt is paid at full price. A candidate who books the retake "to be safe" and then passes the first attempt loses the fee; a candidate who fails and needs the score by a licensure deadline may miss it entirely because of the wait. Treat the first attempt as serious and schedule with the 21-day buffer in mind.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Combined (5752) is about 152 selected-response questions plus two essays across three separately timed subtests, scored per subtest on a 100-200 scale with a state-set cut. Reading (5713) is 56 passage-based selected-response items in 85 minutes covering key ideas and details, craft and structure, and integration of knowledge — every item refers to a passage, and outside knowledge is not required. Writing (5723) is 40 selected-response items in 40 minutes plus two essays of 30 minutes each: one argumentative prompt and one informative/explanatory prompt, scored by trained raters against a rubric. Mathematics (5733) is 56 questions in 90 minutes covering number and quantity, algebra and functions, geometry, and statistics and probability, mixing selected-response with numeric-entry items where you type the exact value; an on-screen calculator is provided and personal calculators are not permitted. Because the subtests are independent, pacing is per subtest: roughly 90 seconds per reading item, one minute per writing SR item, and about 90 seconds per math item, with the essays consuming their own full 30-minute blocks. The two essays are the part of the paper where candidates most often misjudge the clock — a 30-minute essay that is started but not finished scores poorly, so budgeting the full block to a finished draft beats polishing an opening paragraph.',
    types: [
      { name: 'Passage-based selected response (Reading)', share: '56 items, 85 minutes', detail: 'Main idea, author purpose, text organization, inference, vocabulary in context. Every item ties to a passage; no outside knowledge required.' },
      { name: 'Selected response + 2 essays (Writing)', share: '40 SR + 2 essays, 100 minutes', detail: 'The SR items cover grammar, usage and research skills; the essays are an argumentative prompt and an informative/explanatory prompt scored by raters on a rubric.' },
      { name: 'Selected response + numeric entry (Math)', share: '56 items, 90 minutes', detail: 'Number and quantity, algebra, geometry, statistics and probability. Numeric-entry items require the exact typed value; on-screen calculator provided.' }
    ],
    samples: [
      {
        prompt: 'A writer argues that school libraries should remain open after hours during the summer. In the final paragraph, the writer introduces a counterargument and then responds to it. Which term best describes the function of that final paragraph?',
        options: [
          'A. It restates the thesis without adding new support',
          'B. It anticipates and rebuts an objection to strengthen the argument',
          'C. It shifts the topic to an unrelated concern of the writer',
          'D. It concedes the opposing view and withdraws the thesis'
        ],
        answer: 'B',
        explanation: 'A paragraph that states an opposing position and then answers it is performing the classic argumentative move of anticipating and rebutting an objection — it strengthens the case by showing the writer considered the other side (B). A would describe a conclusion that only repeats the thesis, which is not what a counterargument-and-response does. C misreads the paragraph as a topic shift. D misreads rebuttal as surrender; responding to an objection is not conceding the thesis.'
      },
      {
        prompt: 'In the equation 3x - 7 = 2x + 5, what is the value of x?',
        options: [
          'A. 2',
          'B. 6',
          'C. 12',
          'D. -12'
        ],
        answer: 'C',
        explanation: 'Collect the variable terms on one side: subtract 2x from both sides to get x - 7 = 5, then add 7 to both sides to get x = 12 (C). A (2) comes from miscombining constants. B (6) comes from adding 7 and 5 but forgetting to carry the variable step correctly. D (-12) comes from reversing the sign when moving the 7. Numeric-entry versions of this item type would require typing 12 exactly rather than choosing a letter.'
      },
      {
        prompt: 'A student writes: "The experiment was a failure, but the data revealed an unexpected pattern. The team decided to change their hypothesis." Which revision most improves the sentence-to-sentence flow?',
        options: [
          'A. The experiment was a failure, but the data revealed an unexpected pattern, and the team decided to change their hypothesis',
          'B. Although the experiment was a failure, the data revealed an unexpected pattern, so the team decided to change their hypothesis',
          'C. The experiment was a failure, the data revealed an unexpected pattern, the team decided to change their hypothesis',
          'D. The data revealed an unexpected pattern, but the experiment was a failure, and the team decided to change their hypothesis'
        ],
        answer: 'B',
        explanation: 'The relationships are best signalled with although and so: the surprise is that despite failure (although), the data showed something, and therefore (so) the team changed the hypothesis. B makes each clause\'s logical role explicit. A uses a flat and that under-signals cause. C is a comma splice. D inverts the cause-and-effect order, implying the failure followed from the pattern rather than the pattern emerging from the failure.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Combined (5752) is one appointment of roughly 4.5 hours at a Prometric test centre or via online proctoring, containing all three subtests in sequence: Reading (85 minutes), Writing (100 minutes, including the two essays), and Mathematics (90 minutes). You are given a scheduled break between subtests, and the clock runs independently for each section. The most common way a qualified candidate loses the seat is administrative: your government-issued photo ID must match your Praxis account name exactly, and for online proctoring you need a private room, a working camera and microphone, and a clean desk. Check your account spelling and your state cut scores the week before. At the centre you are checked in, photographed, and seated at a computer; scratch work is provided and collected. Inside each subtest you can flag items and move freely within that section, but once a section\'s time expires you cannot return to it — the subtests are not cross-navigable. Pace each section by its own budget: reading and math allow roughly 90 seconds per item, the writing SR items about a minute, and each essay must receive its full 30 minutes to reach a finished draft. The essays are typed into the testing interface, so practise typing your essays in the final week rather than handwriting them. When you finish, your subtest scores appear on screen, and official score reports follow in about five weeks, auto-sent to the score recipients you selected at registration.',
    bring: [
      'Government-issued photo ID with your name matching your Praxis account exactly',
      'Your Praxis registration confirmation or candidate ID in case check-in cannot locate the booking',
      'For online proctoring: a phone for check-in, a private room, and a webcam and microphone already tested on the machine you will use',
      'Confirmation of your state\'s cut scores for all three subtests, in case you want to verify reporting choices at the desk'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured in a locker at a centre',
      'All notes, textbooks and printed study materials — no personal scratch paper is allowed',
      'Personal calculators; the Math subtest provides an on-screen calculator only',
      'Bags, coats, food and drink beyond what the centre permits',
      'Any other person in the room for online proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state cut scores for 5713, 5723 and 5733, verify your ID name matches your Praxis account exactly, and re-practise typing essays under the 30-minute timer.' },
      { time: '24 hours before', detail: 'For online proctoring, run the system test on the same machine and network. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which includes a photo, ID capture, and (online) a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, lockers. You are seated; the tutorial explains flagging and the on-screen calculator before the Reading subtest starts.' },
      { time: 'Reading (85 min)', detail: '56 passage-based items. Read for structure, flag hard items, and keep roughly 90 seconds per item; every item references a passage in the interface.' },
      { time: 'Scheduled break', detail: 'Use the full break to reset — hydrate, walk, and clear your mind before the Writing subtest.' },
      { time: 'Writing (100 min)', detail: '40 SR items in the first 40 minutes, then both essays in their own 30-minute blocks. Finish the draft before polishing; an unfinished essay scores poorly.' },
      { time: 'Break', detail: 'Second scheduled break before Mathematics.' },
      { time: 'Math (90 min)', detail: '56 items including numeric entry. Use the on-screen calculator, type exact values, and watch rounding.' },
      { time: 'After submission', detail: 'Subtest scores appear on screen; official reports follow in about five weeks to your selected recipients.' }
    ],
    rules: [
      'Scores are reported per subtest on a 100-200 scale; passing scores are set by each state and are not printed on your score report as a pass/fail for all states.',
      'Each subtest is separately timed and separately scored; you cannot return to a section whose time has expired, and sections are not cross-navigable.',
      'A scheduled break is provided between subtests; unscheduled breaks may be taken but the clock does not stop.',
      'The Math subtest provides an on-screen calculator; personal calculators are not permitted.',
      'Scratch paper is issued at a test centre and collected; online proctoring uses a digital whiteboard only.',
      'Retake: ETS requires a 21-day wait after score release; no limit on attempts; each attempt paid in full.',
      'Scores are valid for 10 years, subject to your state\'s acceptance window.'
    ],
    afterwards:
      'Your three subtest scores appear on screen when you finish, and official score reports are released in about five weeks to the recipients you selected at registration — typically your state education agency and your teacher-preparation program. Because the cut score is state-set, the same number may be a pass for one state and a fail for another, so read your score against your state\'s published requirement, not against a number printed on the report. On a full pass, the Core requirement is cleared and you move to the subject-assessment and PLT requirements of your licensure pathway; the scores remain valid for 10 years. On a partial pass, the policy is forgiving: you re-sit only the failed subtest, at the individual $90 rate, after the 21-day wait — not the whole combined test. Do not re-book immediately out of frustration; the 21-day window is long enough to repair the specific subtest with targeted drilling, so use it. The single most common weakness on a failed attempt is not knowledge but execution — an unfinished essay, a rounding slip on numeric entry, or fatigue in the final subtest — and those are all fixable within one retake cycle.'
  }
};

export default data;
