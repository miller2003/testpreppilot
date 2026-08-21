// Depth content for: law-school-admission-test
// LSAT (Law School Admission Test)
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Law school admissions & standardized-testing desk',
    bio: 'LSAT structure, scoring, fees and retake limits are taken from the Law School Admission Council (LSAC) official pages and the LSAT test-format documentation, which has been revised since the Analytical Reasoning section was removed in 2024. Lawyer wage data comes from the Bureau of Labor Statistics Occupational Outlook Handbook occupation for lawyers, cited by SOC code 23-1011. We state plainly when a figure \u2014 such as an LSAT pass rate \u2014 is not published, because the LSAT is a scored exam rather than a pass/fail one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the current LSAT format (two Logical Reasoning and one Reading Comprehension scored sections plus one unscored section, the August 2024 removal of Logic Games), the 120-180 score scale, the $253 fee for the 2025-2026 testing year, and the BLS May 2024 lawyer wage of $151,160 against LSAC and BLS pages.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$151,160 median annual wage for lawyers, SOC 23-1011 (BLS Occupational Outlook Handbook, May 2024)',
    summary:
      'The salary case for the LSAT runs through one occupation: lawyer. The BLS Occupational Outlook Handbook reports that lawyers earned a median annual wage of $151,160 in May 2024, with employment of 864,800 and a projected 4 percent change from 2024 to 2034 \u2014 about as fast as the average for all occupations \u2014 and roughly 31,500 openings a year, most of them replacement need as lawyers retire or change fields. That median is for all lawyers regardless of practice setting, and the distribution is extremely wide: the top of the market \u2014 large-firm associates, partners and elite-market practitioners \u2014 earns far above the median, while public-interest, government and small-firm positions sit below it, so the LSAT\u2019s real economic effect is that it gates entry to law school, and law school is the required route to the occupation. The exam itself produces no salary: no LSAT score maps to a wage, and BLS classifies workers by job duties, not by test performance. The honest chain is: a strong LSAT score helps a candidate gain admission to and earn scholarships at better-ranked schools, school rank strongly influences hiring outcomes and starting salaries, and the occupation itself pays a median well above the all-occupation median of $49,500. Scholarship leverage is the most direct financial return on LSAT preparation \u2014 many schools tie merit aid to LSAT thresholds, and a few extra points can be worth tens of thousands of dollars in tuition discounts \u2014 which is the closest thing this exam has to a salary effect. Caveats worth stating plainly: law school is a three-year investment with substantial tuition and opportunity cost, the JD-holders\u2019 employment outcomes vary sharply by school tier, and the bar exam is a separate gate after graduation. The LSAT is the entrance gate, and the occupation it leads to has a published BLS median of $151,160.',
    rows: [
      { label: 'Median annual wage, lawyers (SOC 23-1011)', value: '$151,160', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Employment, 2024', value: '864,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected change, 2024-34', value: '+4% (as fast as average)', note: 'BLS OOH Job Outlook, 2024-34' },
      { label: 'Projected openings per year', value: '~31,500', note: 'BLS OOH Job Outlook, 2024-34 \u2014 mostly replacement need' },
      { label: 'Reference: median wage, all occupations', value: '$49,500', note: 'BLS OOH, May 2024' }
    ],
    growth: '+4% projected change 2024-34 for lawyers, with roughly 31,500 openings a year driven mostly by retirements and career changes; the LSAT\u2019s direct financial value is admission and scholarship leverage rather than a wage tied to the score.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Lawyers',
      url: 'https://www.bls.gov/ooh/legal/lawyers.htm'
    }
  },
  passRate: {
    headline: 'LSAC publishes no pass rate because the LSAT is not pass/fail \u2014 it is scored on a 120-180 scale, and LSAC publishes score distributions and percentile conversions instead',
    summary:
      'The direct answer is that there is no LSAT pass rate, and the reason is structural: the LSAT is not a pass/fail examination, it is a scored admission test on which every 120-180 scaled score is reported to law schools, so the closest published statistics are LSAC\u2019s score-distribution and percentile-conversion data rather than any pass threshold. What is published and verifiable is the scale: raw scores are converted to a scaled range of 120 to 180, the midpoint of the range is 150, and the median score among test takers has historically sat around 152 to 154, meaning a candidate scoring 155 is above the median of the test-taking pool but still below the 160-plus range that competitive law schools typically expect. Percentile tables on LSAC\u2019s site show how each scaled score converts to a percentile among test takers, and those tables shift modestly with each administration because the pool changes. Because there is no pass line, the planning implication is different from a licensure exam: candidates should set a target score against their target schools\u2019 published LSAT ranges \u2014 the 25th-to-75th percentile band that schools report to the ABA \u2014 rather than aiming at any threshold. Two related LSAC policies are worth knowing: the Score Preview option lets first-time test takers see their score before deciding whether to cancel it, and scores that are cancelled are reported to schools only as a cancellation, which some candidates use strategically. The takeaway for candidates is to ignore any site quoting an LSAT pass rate \u2014 no such official statistic exists \u2014 and instead calibrate preparation against target-school percentile bands and timed practice scores on the 120-180 scale.',
    source: {
      label: 'LSAC \u2014 LSAT scores and percentiles',
      url: 'https://www.lsac.org/lsat/taking-lsat/lsat-scores'
    },
    caveat: 'LSAC publishes no LSAT pass rate because the exam is scored on a 120-180 scale rather than pass/fail. The published and verifiable statistics are the scaled score range, the test-taker score distribution, and percentile conversion tables, with a median typically near 152-154. Use target-school LSAT ranges, not a pass line, to set your preparation goal.'
  },
  studyPlan: {
    summary:
      'A realistic LSAT study plan runs roughly 20 to 30 hours per week over three to four months for a candidate aiming to move from a diagnostic in the 150s into the 160s, because the exam is a reasoning test whose skill is built through timed practice and untimed review rather than content memorisation \u2014 there is no content to memorise, only two scored item types (Logical Reasoning and Reading Comprehension) to master. Start with an official LSAC full practice test to establish a diagnostic score on the 120-180 scale, then split the plan into three phases: foundation (weeks 1-3), where you learn the argument structures and the question types in Logical Reasoning \u2014 assumption, strengthen, weaken, flaw, inference, and others \u2014 and the reading strategy for Reading Comprehension, including the comparative-reading passage pair; drill (weeks 4-9), where the daily diet becomes timed sections \u2014 one 35-minute Logical Reasoning section and one 35-minute Reading Comprehension section most days, each followed by a full review of every question you got wrong or flagged, because the review is where reasoning habits are actually changed; and full-exam rehearsal (weeks 10-14), where you take the complete four-section test under realistic conditions \u2014 including the 10-minute break \u2014 at least three or four times, and then re-drill the specific question types that still drag your score. The biggest structural change to understand: since August 2024 the Analytical Reasoning (Logic Games) section no longer exists and was replaced by a second Logical Reasoning section, so any prep material still centred on Logic Games is obsolete. Register for LSAT Argumentative Writing separately \u2014 it is unscored but required before scores are released. Budget the exam fee ($253 for the 2025-2026 testing year) and remember the retake limits: five tests within the current five-year reporting period and seven over a lifetime.',
    totalHours: '250-400 hours over 12-16 weeks (roughly 20-30 hrs/week)',
    weeks: [
      { label: 'Weeks 1-3', focus: 'Foundation: argument structure and reading strategy', tasks: ['Take the official LSAC diagnostic practice test and log every miss by question type', 'Learn the Logical Reasoning question families: main point, assumption, strengthen/weaken, flaw, inference', 'Develop a passage-mapping approach for Reading Comprehension, including comparative reading', 'Do untimed section work first; speed comes later'], hours: '20-25 hrs/week' },
      { label: 'Weeks 4-9', focus: 'Timed section drill with full review', tasks: ['One 35-minute Logical Reasoning section most days, timed', 'One 35-minute Reading Comprehension section most days, timed', 'Review every wrong or flagged question and write one sentence on why the trap was tempting', 'Track accuracy by question type and spend extra time on your two weakest families'], hours: '25-30 hrs/week' },
      { label: 'Weeks 10-12', focus: 'Full-exam rehearsal', tasks: ['Take three or four complete four-section tests under real timing with the 10-minute break', 'Score each on the 120-180 scale and compare against target-school ranges', 'Re-drill the question types that cost the most points on each full exam'], hours: '25-30 hrs/week' },
      { label: 'Weeks 13-14', focus: 'Taper and logistics', tasks: ['Two more full exams on the exact testing-day schedule', 'Light review of your question-type error log only', 'Complete LSAT Argumentative Writing before the test', 'Confirm registration, testing format (in-person or remote), and ID requirements'], hours: '15-20 hrs/week' }
    ],
    variants: [
      { label: 'Working full-time while preparing', detail: 'Stretch the plan to five or six months at 10-15 hours a week. Guard the weekly timed sections \u2014 even one per week preserves the timing muscle \u2014 and accept that progression will be slower than a full-time schedule.' },
      { label: 'Already scoring 165+ on diagnostics', detail: 'Compress to six to eight weeks. Your job is error elimination, not fundamentals: take a full exam weekly, build a question-type error log, and focus exclusively on your recurring miss patterns.' },
      { label: 'Scoring below 150', detail: 'Start with the foundation phase and double it to six weeks. Consider a structured course for the Logical Reasoning fundamentals, because pattern recognition for argument structures is best learned with live explanations before it is drilled solo.' }
    ]
  },
  prepStrategies: {
    summary:
      'The strategy that reliably raises an LSAT score is "untimed accuracy first, then timed fluency, then full-exam rehearsal," because the test rewards reasoning skill rather than knowledge, and reasoning skill is built by reviewing misses deeply rather than by grinding through more questions. Start by learning the Logical Reasoning question families individually \u2014 assumption, strengthen, weaken, flaw, inference and others \u2014 because each family has a predictable structure and a predictable trap, and candidates who cannot name the family are answering by feel. Build the habit of predicting the answer before reading the choices: in Logical Reasoning, paraphrase the correct response in your head, then match it \u2014 this neutralises the classic distractors that restate part of the stimulus attractively but answer a slightly different question. For Reading Comprehension, develop a consistent annotation system for the passage before attacking the questions, and practise the comparative-reading passage pair specifically, because two passages create inference questions across texts that single-passage practice never exposes. Track every mistake by question type in a log and review the log weekly \u2014 most candidates lose points from a handful of recurring types, and fixing those is faster than broad review. Rehearse the real administration: the current test is four 35-minute sections with a 10-minute break, roughly 2 hours 20 minutes of testing time, and the endurance and fatigue-management of that day need to be trained. Finally, use only official or officially affiliated practice materials for score calibration, because third-party practice tests inflate or deflate scores relative to the real 120-180 scale, and your target-school ranges are based on real administered scores.',
    items: [
      {
        title: 'Predict before you look at the choices',
        detail: 'In Logical Reasoning, paraphrase the correct answer in your head before reading the options, then match it. This defeats the most common distractors, which rephrase part of the stimulus attractively while answering a different question. Candidates who read choices first are selecting among seductions; candidates who predict first are verifying.'
      },
      {
        title: 'Learn the question families as a taxonomy',
        detail: 'Assumption, strengthen, weaken, flaw, inference and the rest each have a predictable skeleton and a predictable wrong-answer pattern. Drill each family in isolation until you can name it, then review misses by family name \u2014 the error log becomes a map of which two or three families cost you the most points.'
      },
      {
        title: 'Review every miss, in writing',
        detail: 'For each wrong or flagged question, write one sentence on why the trap was tempting and what the correct reasoning should have been. This is the single highest-yield study activity on the exam \u2014 more effective than question volume, because it changes the reasoning habit rather than just exposing it.'
      },
      {
        title: 'Master comparative reading explicitly',
        detail: 'Reading Comprehension includes a set of two related passages, and the cross-passage inference items are a distinct skill. Practise them deliberately \u2014 summarising each passage and noting how they agree, disagree, or complement each other \u2014 because single-passage drilling does not prepare you for them.'
      },
      {
        title: 'Train the real day, including the break',
        detail: 'Four 35-minute sections with a 10-minute break is a genuine endurance event. Full-exam rehearsals under real timing are what teach you to pace the later sections, when fatigue starts converting correct answers into careless ones.'
      },
      {
        title: 'Calibrate only on official material',
        detail: 'Use LSAC and LSAC-affiliated practice tests for score calibration. Third-party tests do not track the real 120-180 scale, and comparing a vendor practice score against a law school\u2019s published range is comparing two different currencies.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'LSAT prep is dominated by official LSAC material plus a few well-established third-party systems, and the buying logic is anchored by one fact: only LSAC\u2019s own tests use the real 120-180 scale, so the official tests are the calibration standard no matter what else you buy. The official free tier is the LSAC law hub, which includes a handful of official practice tests at no cost; beyond that, the full official volume includes dozens of prep tests, sold in bundles through the LSAC store, and most serious candidates buy the complete set. On the third-party side the market splits into video courses \u2014 typically $300 to $700 \u2014 which teach the question-family framework and suit candidates who want structure, and tutor-led or small-group programs, which are the premium tier at $100-plus per hour and are best reserved for a stubborn plateau. Practice-test-only apps and books run $15 to $100 and are best used late in the plan for volume once the framework is learned. The honest rule: buy the official tests first because they are the only accurate yardstick, then decide whether a course is worth the price by taking a free official diagnostic \u2014 a candidate already scoring at their target on the diagnostic may need only the official tests and a question-type error log, while a candidate below target likely benefits from a structured course or tutor. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission, and the exam fee itself \u2014 $253 for the 2025-2026 testing year \u2014 should be budgeted separately.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'LSAC official practice tests (PrepTests)', values: ['Free tier in LawHub; full bundle ~$100-200', 'Digital practice tests on the real 120-180 scale', 'Required \u2014 the only accurate calibration yardstick'] },
      { label: 'LSAT Argumentative Writing + test registration', values: ['$253 exam fee for 2025-2026; writing is included', 'Proctored online writing and proctored test', 'Required \u2014 the exam itself and the mandatory writing sample'] },
      { label: 'Structured video course', values: ['~$300-700', 'On-demand video with question-family lessons and drills', 'Candidates below their target score who want a taught framework'] },
      { label: 'Tutoring / small-group programs', values: ['$100+/hour; packages often $1,000+', 'Live 1:1 or small group', 'Plateaued candidates whose error log is not moving with self-study'] },
      { label: 'Prep-test books and apps', values: ['$15-100', 'Print or app question banks', 'Late-plan volume drilling once the framework is learned'] }
    ],
    footnote: 'Prices approximate and dated to mid-2026; the LSAT fee for the 2025-2026 testing year is $253, with fee waivers available from LSAC. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'The most common LSAT mistake is studying material built around the Analytical Reasoning (Logic Games) section that was removed in August 2024 \u2014 dozens of courses, books and question banks still lead with Logic Games content, and a candidate who drills it is spending hours on an exam that no longer exists, because the current test is two Logical Reasoning sections and one Reading Comprehension section, scored, plus one unscored section. The second is answering by feel instead of by framework: candidates who never learn the question-family taxonomy \u2014 assumption versus inference versus flaw \u2014 choose among distractors rather than verifying a prediction, and the predictable traps then work on them every time. A third recurring error is reviewing only the questions you got wrong while ignoring the ones you flagged, when the flagged questions are where marginal reasoning lives and reviewing them converts near-misses into reliable points. Candidates also routinely skip full-exam rehearsal and discover on test day that four 35-minute sections plus a break is a different endurance problem than three timed sections in a row. Many candidates ignore the retake limits \u2014 five tests in the current five-year reporting period and seven over a lifetime \u2014 and burn attempts on underprepared sittings. Finally, some candidates compare third-party practice scores against law school ranges, which is comparing two different scales, and set their target accordingly. There is also a pacing failure specific to this exam: the current four-section format with its 10-minute break rewards a candidate who treats each 35-minute section as a fresh unit, and candidates who spend the break mentally replaying the sections behind them lose the reset the schedule was designed to provide \u2014 the break is a reset, not a post-mortem. And a smaller but recurring error is never completing LSAT Argumentative Writing before the test, which delays the score release even for a candidate who passed every multiple-choice section, because the writing sample is required before any score is released to schools.',
    items: [
      {
        mistake: 'Studying Logic Games material from before August 2024',
        fix: 'The Analytical Reasoning section was removed in August 2024 and replaced by a second Logical Reasoning section. Check every book, course and question bank for the post-2024 format, and discard anything built around Logic Games \u2014 it is obsolete content on an exam that no longer tests it.'
      },
      {
        mistake: 'Answering by feel instead of by question family',
        fix: 'Learn the Logical Reasoning families \u2014 assumption, strengthen, weaken, flaw, inference and the rest \u2014 until you can name one on sight, and predict the answer before reading the choices. Pattern recognition beats intuition on this test, and the traps are designed for feel-answerers.'
      },
      {
        mistake: 'Reviewing only outright misses',
        fix: 'Review every question you flagged as well as every question you missed. The flagged ones are where your reasoning is close but not reliable, and writing one sentence on why each trap was tempting converts near-misses into banked points.'
      },
      {
        mistake: 'Never taking a full practice test',
        fix: 'The real day is four 35-minute sections with a 10-minute break \u2014 roughly 2 hours 20 minutes of testing. Run at least three or four complete official tests under real timing before test day, or the pacing and fatigue of the back half of the exam will be a surprise.'
      },
      {
        mistake: 'Burning retake attempts on underprepared sittings',
        fix: 'You may take the LSAT five times within the current five-year reporting period and seven times over a lifetime, and schools see every score. Treat each sitting as a serious attempt \u2014 register only when practice scores are consistently at target, and use Score Preview for your first test if you want the option to cancel a bad day.'
      },
      {
        mistake: 'Calibrating against third-party practice scores',
        fix: 'Only official LSAC tests use the real 120-180 scale. Compare only official practice scores against your target schools\u2019 published LSAT ranges, or you will set your preparation target against the wrong currency and arrive on test day mis-calibrated.'
      }
    ]
  },
  questionTypes: {
    summary:
      'The current LSAT is roughly 2 hours 20 minutes of testing spread across four 35-minute sections, three of which are scored: two Logical Reasoning sections, one Reading Comprehension section, and one unscored experimental section that is indistinguishable from the scored sections and is used to test future questions. Since August 2024 there is no Analytical Reasoning (Logic Games) section; the second Logical Reasoning section replaced it. Logical Reasoning questions present a short argument or stimulus and ask you to identify an assumption, strengthen or weaken the argument, name a flaw, draw an inference, or identify the main point; roughly 24 to 26 questions appear per section. Reading Comprehension presents a set of four passages \u2014 three single passages and one comparative pair of two related texts \u2014 each followed by five to eight questions testing main idea, detail, inference, purpose and the author\u2019s reasoning, totalling roughly 26 to 28 questions across the section. Scores are reported on a 120-180 scaled range, and LSAT Argumentative Writing \u2014 a separate 35-minute written task \u2014 is unscored but required for the score to be released. The pacing implication is about 35 minutes per section with no time to spare, so flag-and-return discipline and a hard pace of roughly a minute to a minute-and-a-half per question are essential. The samples below are editor-written illustrations of the published format, not live exam items. The tactical implication is that section-level time management is a scored skill in itself: with 35 minutes per section and roughly a minute to a minute-and-a-half per item, candidates who flag a hard question and return to it outperform candidates who let one difficult item consume five minutes, and the same discipline applies to the unscored experimental section, which should be worked at full effort because it cannot be reliably identified \u2014 every section deserves the same pace regardless of whether it counts. Because there is no pass line and every score is reported, the score you carry on test day is a function of consistent section-level execution across all four sections, which is why full-exam rehearsal matters more than any single item-type drill.',
    types: [
      { name: 'Logical Reasoning', share: '2 scored sections, ~50 questions (about half the scored exam)', detail: 'Short arguments with questions about assumption, strengthen, weaken, flaw, inference, main point, and others. The second LR section replaced Logic Games in August 2024.' },
      { name: 'Reading Comprehension', share: '1 scored section, ~26-28 questions (about a quarter of the scored exam)', detail: 'Four passage sets \u2014 three single passages and one comparative pair \u2014 with five to eight questions each on main idea, detail, inference, purpose and reasoning.' },
      { name: 'Experimental (unscored)', share: '1 section, unscored', detail: 'An additional 35-minute LR or RC section indistinguishable from the scored sections. Do not try to identify it; answer every section at full effort.' },
      { name: 'LSAT Argumentative Writing', share: 'Unscored but required', detail: 'A separate, 35-minute argumentative writing task completed online through the LSAC platform, required before scores are released.' }
    ],
    samples: [
      {
        prompt: 'Most successful novelists read widely as children, and most people who read widely as children become strong readers. Therefore, if a novelist was not a strong reader as a child, that novelist was not a successful novelist. Which one of the following most accurately describes a flaw in the argument?',
        options: [
          'A. It confuses a correlation between two characteristics with a causal relationship',
          'B. It assumes that reading widely is the only way to become a strong reader',
          'C. It takes evidence that most successful novelists have a characteristic to support a conclusion about novelists who lack that characteristic',
          'D. It presumes, without warrant, that all strong readers are successful novelists'
        ],
        answer: 'C',
        explanation: 'The argument cites a characteristic (reading widely as children) shared by most successful novelists and concludes that its absence (not being a strong reader) rules out success. That conclusion goes beyond the evidence: "most successful novelists were strong readers" supports, at best, a weak inference about what is likely of successful novelists, not a categorical claim about unsuccessful ones. A is tempting because correlation-versus-causation is a classic LSAT flaw, but the argument never claims reading caused success in the way A describes. B is a different assumption the argument does not rely on \u2014 it never states reading is the only path to strong reading. D inverts the logic into an unstated claim the argument does not need. C names the actual structural error: the evidence is about a group that has the characteristic, while the conclusion is about those who lack it.'
      },
      {
        prompt: 'A city council member argues: "We should fund the new public library branch, because a well-read citizenry is essential to democracy, and the branch will increase library use in our district." Which one of the following, if true, most strengthens the argument?',
        options: [
          'A. The district currently has the lowest library usage rate in the city',
          'B. The new branch will be located in the district\u2019s most densely populated neighbourhood',
          'C. The council has sufficient funds in the current budget for the branch',
          'D. Studies show that increased library use is associated with higher rates of reading'
        ],
        answer: 'D',
        explanation: 'The argument\u2019s chain runs from funding the branch, to increased library use, to a well-read citizenry, to a healthy democracy. D strengthens the weak link by providing evidence that increased library use is actually associated with higher reading \u2014 it supports the move from "use" to "well-read". A is irrelevant or even mildly problematic: low current usage could suggest the branch will not be used. B helps location planning but does not connect library use to reading, the gap in the argument. C addresses affordability, a practical point that neither strengthens nor weakens the democracy-based reasoning. The correct strengthener is the one that patches the specific link the argument leaves unstated, which is what D does.'
      },
      {
        prompt: 'A passage discusses the decline of small independent bookshops and argues that the rise of online retail is not the primary cause, pointing instead to changes in urban property costs. A second passage argues the opposite, blaming online retail\u2019s pricing power. Which question type does the comparative-reading set most directly test?',
        options: [
          'A. Identifying the main idea of the first passage',
          'B. Determining how the two authors would respond to each other\u2019s central claim',
          'C. Recalling a statistic cited in the second passage',
          'D. Defining a term used only in the first passage'
        ],
        answer: 'B',
        explanation: 'Comparative Reading consists of two related passages, and the highest-yield questions test the relationship between the two authors\u2019 positions \u2014 how one would respond to the other\u2019s central claim, where they agree and where they conflict. Here the two passages make opposing causal claims, so the natural test is how each author would critique the other\u2019s explanation, which is exactly what B asks. A and D test only the first passage and ignore the comparative structure. C tests recall of a detail, which is a possible question type but not the one the comparative pair is designed around \u2014 the comparative format exists specifically to test cross-passage reasoning, and B is the answer that reflects that purpose.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary:
      'The LSAT is delivered either in person at a Prometric test centre or online through live remote proctoring, and the test day is roughly 2 hours 30 minutes of centre time made up of four 35-minute sections \u2014 two Logical Reasoning, one Reading Comprehension and one unscored experimental section \u2014 with a 10-minute break between the second and third sections, scored on a 120-180 scale. The things that actually decide the day: arrive rested, because four reasoning sections under a clock punish fatigue more than any content gap; confirm your ID requirements in advance, because the name on your ID must match your LSAC account exactly and a mismatch means a lost seat; and have completed LSAT Argumentative Writing before the test, because your score will not be released without it. Bring your valid government-issued photo ID and your confirmation; leave phones, smartwatches, notes and any writing implements that are not provided \u2014 the centre supplies scratch paper and pencils, and remote proctoring has its own strict environment rules, including a clear desk and a private room. During the exam, pace each 35-minute section rather than the day as a whole: flag any question that runs long and return to it, keep moving through the unscored section at full effort because you cannot tell it apart from the scored ones, and use the 10-minute break to reset rather than to think about the sections behind you. Scores typically post about three to four weeks after the test, and first-time takers can use Score Preview to see their score before choosing whether to cancel it. Afterwards, compare the score against your target schools\u2019 published ranges and plan the retake decision \u2014 you are allowed five tests in the current five-year reporting period and seven over a lifetime \u2014 deliberately rather than reactively.',
    bring: [
      'Valid, unexpired government-issued photo ID with your name spelled exactly as it appears on your LSAC account',
      'Your LSAC confirmation or scheduling details',
      'A clear plan for the day \u2014 and for remote testing, a private room and a desk cleared to the proctor\u2019s specifications',
      'Water and a snack for the 10-minute break, if the venue permits'
    ],
    leave: [
      'Phones, smartwatches and all personal electronics',
      'Notes, books, scratch paper and personal writing implements \u2014 the centre provides what is allowed',
      'Anything that would not be permitted in the remote-testing environment: second monitors, headphones, notes posted in the room',
      'For remote testing, any other person in the room'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your registration, the testing format (in-person or remote), ID spelling, and that LSAT Argumentative Writing is already complete \u2014 without it your score will not release.' },
      { time: '24 hours before', detail: 'Do not take a full practice test. Review your question-type error log once, verify the venue or run the remote-proctor system check, and sleep.' },
      { time: '30 minutes before', detail: 'Arrive at the Prometric centre or begin the remote check-in, which includes ID verification and \u2014 remotely \u2014 a room scan.' },
      { time: 'Sections 1-2', detail: 'Two 35-minute sections, typically including the first Logical Reasoning section. Pace within the section, flag and return, and never dwell past a minute-and-a-half on one question.' },
      { time: '10-minute break', detail: 'Reset physically and mentally. Do not review answers in your head; the break is for the next two sections.' },
      { time: 'Sections 3-4', detail: 'The third and fourth 35-minute sections, including Reading Comprehension and the unscored experimental section. Answer the experimental section at full effort \u2014 you cannot identify it reliably.' },
      { time: '3-4 weeks after', detail: 'Scores release to your LSAC account. First-time takers may use Score Preview to see the score before deciding whether to cancel it.' }
    ],
    rules: [
      'Four 35-minute sections \u2014 two Logical Reasoning, one Reading Comprehension, one unscored experimental \u2014 with a 10-minute break between sections 2 and 3.',
      'Scores are reported on a 120-180 scale; there is no pass line, and every score is reported to law schools.',
      'Your ID name must match your LSAC account exactly; a mismatch can mean a lost seat.',
      'LSAT Argumentative Writing must be completed for the score to be released.',
      'You may take the LSAT five times within the current five-year reporting period and seven times over a lifetime.',
      'Personal electronics and writing implements are prohibited in the test environment; the centre provides scratch paper.'
    ],
    afterwards:
      'Scores post to your LSAC account roughly three to four weeks after the test, and first-time takers get the Score Preview option \u2014 see the score, then decide whether to keep or cancel it before schools receive anything. Compare the score against the 25th-to-75th percentile LSAT ranges your target schools publish, then decide deliberately whether to retake: you have five tests within the current five-year reporting period and seven over a lifetime, and schools see every score, so register again only when timed practice scores consistently exceed the score you just earned. Send the score and your transcript through LSAC\u2019s Credential Assembly Service to your schools, and remember that the LSAT is only the first gate \u2014 law school admission, graduation and the bar exam lie between the score and the occupation whose May 2024 BLS median is $151,160.'
  }
};

export default data;
