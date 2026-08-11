// Depth content for: california-bar-exam
// See examDepth.mjs for the full schema. All figures verified 2026-08.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Legal education & bar exam desk',
    bio: 'This guide is compiled and maintained by our legal-education desk. The California Bar Examination is administered by the State Bar of California, and we take the exam structure, passing score, fees and published pass-rate statistics from the State Bar\u2019s own pages and news releases, including the February 2026 results announced 1 May 2026. The two-day General Bar Examination structure — five essays and a performance test on day one, 200 Multistate Bar Examination questions on day two — is as described by the State Bar; California does not use the Uniform Bar Examination and writes its own essay and performance-test components, and we flag the State Bar Board of Trustees\u2019 May 2026 recommendation that the California Supreme Court adopt the NCBE NextGen Uniform Bar Exam beginning in July 2028 as a forward-looking change that is not yet in effect. The passing score of 1390 on the 2000-point combined scale and the fee schedule come from the State Bar. Wage figures come from the Bureau of Labor Statistics occupation Lawyers (SOC 23-1011), named by SOC code, with the caveat that BLS classifies by job duties rather than by admission status.',
    url: '/editorial-policy'
  },
  reviewedBy: 'The two-day format, the 1390 passing score, the exam application fee, and the February 2026 and July 2025 pass-rate statistics were taken from the State Bar of California\u2019s bar exam pages and its published results announcements.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$151,160 median for lawyers (BLS SOC 23-1011, May 2024)',
    summary:
      'The Bureau of Labor Statistics classifies lawyers under SOC code 23-1011, and that is the occupation the bar exam admits to in California and every other state. The May 2024 median wage was $151,160 a year, about $72.67 an hour, with the lowest 10 percent earning less than $72,780 and the highest 10 percent more than $239,200 (the BLS reporting ceiling), a distribution that is among the widest of any profession because it spans public-interest attorneys, solo practitioners, government lawyers and large-firm partners. BLS reported employment of 864,800 jobs in 2024, projected growth of 4 percent from 2024 to 2034 — about as fast as the average for all occupations — and about 31,500 openings a year, mostly from replacement need. Three points matter when reading these numbers against the California bar. First, the median is a national figure that hides enormous variation; California\u2019s own wage and employment data for lawyers sits above the national median in most published comparisons, but the state\u2019s cost of living and the concentration of high-paying firms in Los Angeles and San Francisco pull the distribution in both directions. Second, the salary is earned only after a long pipeline — a law degree and, in California, either passage of the bar or the one-day Attorneys\u2019 Examination for lawyers admitted elsewhere — and the bar exam itself does not add to the wage; it is the gate into the occupation. Third, the financial cost of that gate in California is unusually high: the exam application fee is $878 for general applicants, and the full admissions path — registration, moral-character review and the exam — runs to roughly $1,900 or more before factoring in preparation courses, which makes understanding the exam\u2019s difficulty a financial decision as much as an academic one. The honest summary is a strong, stable national occupation with a wide pay spread and a costly, difficult entry exam that sits at the centre of the California admissions process.',
    rows: [
      { label: 'Median annual wage, lawyers', value: '$151,160', note: 'BLS Occupational Outlook Handbook, May 2024 ($72.67/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $72,780', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $239,200', note: 'BLS OOH Pay tab, May 2024 (reporting ceiling)' },
      { label: 'Employment, 2024', value: '864,800 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~31,500 per year', note: 'BLS OOH Job Outlook, 2024-34 - mostly replacement need' }
    ],
    growth: '+4% projected change 2024-34 (about as fast as average), with about 31,500 openings a year, mostly replacement need. The bar exam is the gate into the occupation, not a wage driver itself.',
    source: {
      label: 'BLS Occupational Outlook Handbook - Lawyers',
      url: 'https://www.bls.gov/ooh/legal/lawyers.htm'
    }
  },

  passRate: {
    headline: 'The State Bar publishes pass rates for every administration — February 2026: 30.8% overall and 43.9% first-time; July 2025: 54.8% overall and 69.7% first-time',
    summary:
      'California is one of the few bar jurisdictions that publishes detailed pass rates for every administration, and the numbers are the hardest to read in the country because they swing enormously between the February and July cycles and between first-time and repeat takers. For the most recent published administration, February 2026, the State Bar reported that 30.8 percent of General Bar Examination takers passed — 1,211 of 3,931 applicants — with a 43.9 percent pass rate among first-time takers, who made up 37.1 percent of the cohort, and a 23.1 percent rate among repeat takers. That is a low cycle typical of February, which draws a high proportion of repeaters; the preceding July 2025 administration reported 54.8 percent overall and 69.7 percent among first-time takers, with repeat takers at 12.4 percent. The February 2025 administration was an outlier at 63.6 percent overall because of scoring adjustments made after widespread technical problems, so it should not be read as a normal signal. The pattern that matters is structural: first-time pass rates in California range from the mid-40s in February to roughly 70 percent in July, and first-time rates for graduates of ABA-accredited California law schools are far higher — 83.8 percent in July 2025 — while graduates of unaccredited and correspondence programs pass at single-digit-to-mid-thirties rates. That spread is why any single "California pass rate" figure misleads; the honest number depends on the cycle and the school. The State Bar publishes these statistics on its website and in its results announcements, and we have cited the published figures directly. The passing standard itself is a 1390 total on the 2000-point combined scale, weighted 50 percent written and 50 percent MBE, with a second read of written answers for scores between 1350 and 1389.',
    source: {
      label: 'State Bar of California - bar exam results and statistics',
      url: 'https://www.calbar.ca.gov/Admissions/Bar-Examination'
    },
    caveat:
      'California pass rates swing sharply between February and July cycles and between first-time and repeat takers, and they vary dramatically by law-school type. The most recent published results are February 2026 (30.8% overall, 43.9% first-time) and July 2025 (54.8% overall, 69.7% first-time). The passing standard is 1390 of 2000. We have cited the State Bar\u2019s published figures and flag that single-number summaries mislead.'
  },

  studyPlan: {
    summary:
      'A realistic California bar study plan runs eight to twelve weeks at roughly 40-50 hours a week, because the two-day General Bar Examination tests a broad, California-specific written component and a 200-question MBE, and the exam is widely regarded as among the hardest in the country — a reputation the pass-rate data supports, with first-time rates as low as 43.9 percent in the February 2026 cycle. The structure is fixed and published: day one is the written section — five one-hour essay questions and one 90-minute performance test, delivered in a three-hour morning session of three essays and a three-and-a-half-hour afternoon session of two essays plus the performance test — and day two is the NCBE Multistate Bar Examination, 200 multiple-choice questions in two three-hour sessions of 100. The written portion is California-drafted and can test 13 subjects including California community property, professional responsibility, remedies, trusts and wills and succession, while the MBE covers the seven national subjects: civil procedure, constitutional law, contracts, criminal law and procedure, evidence, real property and torts. The passing score is 1390 of 2000, weighted 50 percent written and 50 percent MBE, so a candidate cannot carry a weak MBE with essays or vice versa. The plan below runs the MBE subjects in the first half, the California essay subjects and the performance-test format in the second half, and reserves the final three weeks for full two-day simulations, because the written section \u2014 seven tasks across six and a half hours \u2014 rewards stamina and format practice as much as doctrine. Candidates should also weigh the State Bar\u2019s May 2026 recommendation that the California Supreme Court adopt the NCBE NextGen Uniform Bar Exam beginning in July 2028; it is not yet in effect, but anyone planning a 2028 administration should track the decision.',
    totalHours: '350-600 hours over 8-12 weeks',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'MBE subjects — the 50% half of the score',
        tasks: [
          'Cover the seven MBE subjects: civil procedure, constitutional law, contracts, criminal law and procedure, evidence, real property, torts',
          'Practise MBE-style questions daily from week one, because the 200-question day rewards recognition speed',
          'Build a miss log by subject and subtopic; the MBE tests the same rules from every angle',
          'Take a 50-question timed set each week and track your percentage against the passing standard'
        ],
        hours: '40-50 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'California essay subjects, part one',
        tasks: [
          'Study the California-specific subjects: community property, professional responsibility, remedies, and the distinctions from MBE law',
          'Learn the IRAC structure cold — issue, rule, application, conclusion — because every essay is graded on that skeleton',
          'Write one full practice essay per day and compare it against published model answers',
          'Cover the overlapping subjects where California law and MBE law diverge, and memorise the differences explicitly'
        ],
        hours: '45-55 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'California essay subjects, part two, and the performance test',
        tasks: [
          'Complete the remaining essay subjects and drill the cross-subject fact patterns the essays use',
          'Learn the performance-test format: a closed-universe file and library, one 90-minute task to produce a memo, brief or other document',
          'Practise the performance test under a timer — candidates who never rehearse it run out of time on day one',
          'Write a full set of five essays plus one performance test in a single day to rehearse the day-one load'
        ],
        hours: '45-55 hrs/week'
      },
      {
        label: 'Weeks 8-9',
        focus: 'Full two-day simulations',
        tasks: [
          'Run two full simulated exams: day one with five essays and a performance test, day two with 200 MBE questions',
          'Use the real section timings and grade your written answers against model answers',
          'Re-tag every miss and attack the bottom two subjects in each component',
          'Compare your combined simulated score against the 1390 threshold to locate the margin'
        ],
        hours: '50-60 hrs/week'
      },
      {
        label: 'Weeks 10-12',
        focus: 'Gap closing, memorisation and logistics',
        tasks: [
          'Drill the highest-frequency rules and the California-specific differences until they are automatic',
          'Re-write your weakest essay subjects and re-drill the bottom MBE subtopics',
          'Confirm the exam software (Examplify or handwritten), the filing deadlines, the laptop fee and the test-centre logistics',
          'Two quiet days before day one; stop learning new material by mid-week'
        ],
        hours: '40-50 hrs/week'
      }
    ],
    variants: [
      { label: 'Full-time bar studier with a commercial course', detail: 'Ten weeks following the course calendar; the plan above aligns with the major courses\u2019 structure — MBE first, essays second, full simulations in the final weeks. Protect the simulation weeks; they are where the score is decided.' },
      { label: 'Working candidate studying around a job', detail: 'Fourteen to sixteen weeks at 25-30 hrs/week. Start earlier, front-load the MBE subjects, and protect the weekend blocks for the full day-one and day-two simulations, because the seven-task written day is the hardest thing to rehearse in fragments.' },
      { label: 'Repeat taker', detail: 'Ten to twelve weeks starting from your previous score breakdown. Do not restudy everything — the prior score report and the State Bar\u2019s published essay analysis tell you whether the loss was MBE, essays, or the performance test, and the plan should attack exactly that component.' }
    ]
  },

  prepStrategies: {
    summary:
      'The dominant preparation strategy for the California bar is to treat the two halves of the score separately and rehearse the exam as a two-day event, because the passing standard of 1390 of 2000 is weighted 50 percent written and 50 percent MBE and each half rewards a different skill — the MBE rewards recognition speed across 200 questions, while the written section rewards sustained doctrine application across seven tasks in six and a half hours. The highest-yield habits are, first, drilling MBE questions daily from the first week, because the day-two format punishes candidates who know the rules but read slowly, and a 50-question timed set per week builds the pace. Second, learning the IRAC structure until it is automatic, because every California essay is graded on that skeleton and graders award points for the rule statement and application, not for elegant prose. Third, memorising the California-specific differences explicitly — community property, the divergence between California and MBE law, and the subjects California tests that the UBE does not — because candidates who study only national MBE law lose the essays. Fourth, rehearsing the performance test under a timer, because it is a closed-universe task with a file and library that rewards format familiarity, and candidates who never practise it run out of time on day one. Fifth, running full two-day simulations in the final weeks, because the stamina across day one and day two is real and the hardest written tasks cluster late in the afternoon session. Finally, understanding the February-versus-July decision: February pass rates are structurally lower because the cohort is repeat-heavy, so candidates who can choose should weigh whether the July cycle suits their preparation timeline. The strategies below are ordered roughly by the size of the point swing they produce.',
    items: [
      {
        title: 'Drill MBE questions daily from week one',
        detail: 'The 200-question day two is a recognition-speed test, and candidates who know the rules but read slowly lose the 50 percent half of the score. Daily timed MBE sets build the pace and the pattern recognition the day-two format demands, and the miss log drives subject review.'
      },
      {
        title: 'Make IRAC the default answer structure',
        detail: 'Every California essay is graded on the issue-rule-application-conclusion skeleton, and graders award points for a clear rule statement and its application to the facts. Practise writing every essay in IRAC until the structure is automatic, because elegant prose without the skeleton earns little.'
      },
      {
        title: 'Memorise the California-specific law explicitly',
        detail: 'The essays test California community property and other California-specific subjects, and some rules diverge from MBE law. Keep an explicit difference list and drill it, because candidates who study only national law lose the essays to rules they never learned.'
      },
      {
        title: 'Rehearse the performance test under a timer',
        detail: 'The 90-minute performance test is a closed-universe file-and-library task that produces a memo, brief or other document. It is coachable and format-driven, and candidates who never practise it run out of time on day one. Do at least three timed performance tests before the exam.'
      },
      {
        title: 'Run full two-day simulations in the final weeks',
        detail: 'Day one is seven written tasks across six and a half hours, and day two is 200 MBE questions. The stamina is real and the hardest written tasks cluster late in the afternoon. Two full simulations make the two-day load familiar and reveal where pacing breaks down.'
      },
      {
        title: 'Choose the administration cycle deliberately',
        detail: 'February pass rates are structurally lower than July because the February cohort is repeat-heavy. Candidates who can choose their cycle should weigh this against their preparation timeline, and repeat takers should verify the score report\u2019s component breakdown before deciding which half to attack.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'California bar preparation is the most expensive preparation ecosystem on this site, and the buying logic is anchored by the fact that the exam has two halves that need different resources — MBE drilling and essay-and-performance-test practice — plus the California-specific law that generic national materials do not cover. The exam itself costs $878 as the application fee for general applicants, with attorney applicants paying $1,650, and the full admissions path adds registration and moral-character fees that bring the total to roughly $1,900 before preparation; late filings add $50 to $250 more. On preparation, the major commercial bar-prep courses — Barbri, Themis, Kaplan and similar — run roughly $1,500 to $4,000 and are the standard choice for full-time studiers, bundling the full MBE lecture track, the California essay materials, the performance-test practice and simulated exams; the decision between them is mostly about schedule format (live versus self-paced) and price. For candidates who already know the doctrine, a lighter path is a lower-cost or free MBE question bank plus California-specific essay materials, which can work for strong repeat takers but is risky for first-time candidates, whose failure rate in some cycles approaches 50 percent. Adaptive MBE question banks run roughly $200-600 and add the recognition-speed drilling that day two rewards. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, we rank nothing by commission, and every major course offers a guarantee or refund tied to attendance and completion, which is worth reading carefully before buying. Given the $878 application fee and the cost of a failed attempt, most candidates are better served by a course that includes full simulated exams than by the cheapest option.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'California Bar Exam application', values: ['$878 general; $1,650 attorney applicants', 'In-person, two days, Examplify or handwritten', 'The real exam; late filing adds $50-250'] },
      { label: 'Major commercial bar-prep course', values: ['~$1,500-4,000', 'Live or self-paced lectures, essays, PT practice, simulated exams', 'Full-time studiers wanting the complete curriculum and the two-day simulations'] },
      { label: 'Adaptive MBE question banks', values: ['~$200-600', 'Online timed MBE drilling with analytics', 'Building the day-two recognition speed; useful alongside any course'] },
      { label: 'California-specific essay and PT materials', values: ['~$100-500', 'Printed or online, with model answers', 'The California law and performance-test format that national materials miss'] },
      { label: 'Free resources (State Bar published essays, NCBE sample MBE)', values: ['Free', 'PDFs and online samples', 'Calibration and format familiarity before buying anything'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and change frequently; we rank nothing by commission. The California bar application fee is $878 for general applicants and $1,650 for attorney applicants, with the full admissions path (registration, moral character, exam) running to roughly $1,900 before preparation. Confirm current fees and deadlines on the State Bar website.'
  },

  commonMistakes: {
    summary:
      'The failures on the California bar are strikingly patternable, and given first-time pass rates as low as 43.9 percent in the February 2026 cycle, understanding the patterns matters financially — each attempt costs the $878 application fee plus preparation. The single most common error is treating the MBE and the written section as one exam, when the 1390-of-2000 standard is weighted 50/50 and each half rewards a different skill: candidates who drill essays at the expense of the 200-question MBE fail the speed test on day two, and candidates who drill MBE at the expense of the written section fail the doctrine-application test on day one. The second is studying national MBE law without the California-specific content — community property and the California divergences are tested in the essays, and candidates who learn only UBE subjects lose the written half. The third is never rehearsing the performance test under a timer, so the 90-minute closed-universe task eats the day-one afternoon session. The fourth is writing essays without the IRAC structure, losing rule-statement and application points that the graders explicitly award. The fifth is skipping the full two-day simulations, so the stamina and pacing across seven written tasks and 200 MBE questions surprise them on the real days. And the sixth is a logistics failure — missing the filing deadline, paying late fees, or being unprepared for the Examplify software or the ID rule — which costs money and, in the worst case, a seat. None of these are doctrinal gaps in the abstract; every one is correctable with component-specific practice and full-length rehearsal, which is why candidates who retake after closing the specific half of the exam that failed them pass at higher rates.',
    items: [
      {
        mistake: 'Preparing for one exam instead of two halves',
        fix: 'The passing standard is 50 percent written and 50 percent MBE. Budget time for both components and practise both under real conditions; a candidate who only drills essays fails the day-two speed test, and vice versa.'
      },
      {
        mistake: 'Skipping the California-specific law',
        fix: 'The essays test community property and other California subjects and the places where California law diverges from MBE law. Build an explicit difference list and drill it; candidates who learn only national subjects lose the written half to rules they never studied.'
      },
      {
        mistake: 'Never rehearsing the performance test',
        fix: 'The 90-minute performance test is a closed-universe file-and-library task with a coachable format. Do at least three timed performance tests before the exam; candidates who meet it for the first time on day one run out of time in the afternoon session.'
      },
      {
        mistake: 'Writing essays without IRAC',
        fix: 'Graders award points for the issue, rule, application and conclusion skeleton. Practise writing every essay in IRAC until it is automatic, because a well-written essay without the structure earns far less than a structured one.'
      },
      {
        mistake: 'Skipping the full two-day simulations',
        fix: 'Day one is seven written tasks across six and a half hours; day two is 200 MBE questions. Run at least two full simulated exams so the stamina, the section pacing and the afternoon fatigue are familiar before the real days.'
      },
      {
        mistake: 'Missing the filing and logistics deadlines',
        fix: 'The application has a timely deadline with late windows costing $50 to $250 more, and the exam is delivered through Examplify on a laptop or by hand. Confirm the deadlines, the software and the ID rule the month before, because a missed deadline costs money and a turned-away candidate loses a seat.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The California General Bar Examination is a two-day, in-person exam administered twice a year in February and July, and it combines two very different question formats. Day one is the written section: five one-hour essay questions and one 90-minute performance test, delivered in a three-hour morning session of three essays and a three-and-a-half-hour afternoon session of two essays plus the performance test. The essays are California-drafted and can test 13 subjects — including California community property, professional responsibility, remedies, trusts, and wills and succession — and they present complex, often cross-subject fact patterns asking you to identify the issues, state the rules, apply them to the facts and conclude, which is the IRAC structure the graders award points for. The performance test is a closed-universe task: a file of facts and a library of legal materials, with 90 minutes to produce a legal document such as a memo or brief, testing the ability to apply the provided materials to the task rather than memorised doctrine. Day two is the NCBE Multistate Bar Examination: 200 multiple-choice questions in two three-hour sessions of 100, covering the seven national subjects of civil procedure, constitutional law, contracts, criminal law and procedure, evidence, real property and torts, each item presenting a fact pattern and four options with one best answer. The final score combines the two halves — written and MBE, each scaled to 2000 and weighted 50 percent — for a passing standard of 1390. Because the exam is not the Uniform Bar Examination, the written components are not portable to UBE jurisdictions. The three samples below illustrate an MBE-style item, an essay item, and the performance-test task; they are editor-written illustrations of the published format and are not live exam items.',
    types: [
      { name: 'MBE multiple choice', share: '200 questions, 50% of the score', detail: 'Day two: two sessions of 100 questions across the seven national subjects. Fact-pattern recognition, four options, one best answer, at roughly 1.8 minutes per question.' },
      { name: 'California essays', share: '5 questions, part of the 50% written half', detail: 'One hour each, California-drafted, up to 13 subjects including community property. IRAC-structured analysis of complex fact patterns; cross-subject patterns are common.' },
      { name: 'Performance test', share: '1 task, part of the 50% written half', detail: '90 minutes, closed universe: a file and library are provided and you produce a memo, brief or other document. Tests applying provided materials, not memorised doctrine.' }
    ],
    samples: [
      {
        prompt: 'A defendant is charged with burglary. The prosecutor wants to introduce evidence that the defendant, when arrested three years earlier for the same type of offense, had been found in possession of a crowbar and gloves similar to those used in the current crime. Which of the following is the strongest basis for objecting?',
        options: [
          'A. The evidence is inadmissible character evidence offered to show propensity',
          'B. The evidence is barred by the stale evidence rule',
          'C. The evidence is a prior bad act that is always inadmissible',
          'D. The evidence is hearsay'
        ],
        answer: 'A',
        explanation: 'Evidence of a prior arrest for a similar offense, offered to show that the defendant likely committed the current burglary, is character evidence used to prove propensity, which the rules prohibit except in the enumerated character-evidence contexts — the prosecution may not prove the charged crime by showing the defendant is the kind of person who does such things. B is wrong because there is no "stale evidence rule" of this kind; the issue is propensity, not staleness. C overstates the rule: prior acts can be admissible for non-character purposes such as motive, intent, plan, identity or absence of mistake. D is wrong because the evidence is not an out-of-court statement offered for its truth — it is the possession of objects. This item tests the character-evidence framework, a high-frequency MBE topic, and the correct answer turns on identifying the purpose of the evidence rather than the category label.'
      },
      {
        prompt: 'Essay item (illustrated): A husband and wife married in California and moved frequently. The wife used separate funds to purchase a rental property during the marriage, titled only in her name, and the rental income was placed in a joint account. Discuss the character of the property and the rental income under California community property law.',
        options: [
          'A. State the rule for separate versus community character, trace the purchase to separate funds, then apply the mixed-income rule to the rental proceeds',
          'B. Conclude the property is community because it was purchased during marriage, with no further analysis',
          'C. Discuss only the rental income and ignore the character of the underlying property',
          'D. Apply common-law ownership rules because the property is titled in one spouse\u2019s name'
        ],
        answer: 'A',
        explanation: 'A full-credit California essay identifies the issues, states the rules, applies them to the facts and concludes in IRAC form. Here the analysis turns on tracing: property acquired during marriage with separate funds retains separate character if the tracing is clear, so the rental property is presumptively separate despite the wife-only title, while the rental income — if it is the fruit of separate property — generally retains separate character under the California rule (with exceptions where personal effort or commingling is involved), and the joint account raises a commingling question. B is wrong because the timing of acquisition is not conclusive; the source of the funds is decisive. C is wrong because the property\u2019s character determines the income\u2019s character. D is wrong because California community property law, not common-law title rules, governs married persons\u2019 property. The answer earns the highest credit by tracing both assets and applying the community-property framework to each.'
      },
      {
        prompt: 'Performance-test item (illustrated): You are a law clerk in a law office. Senior partner Sanchez has asked you to draft a memorandum analysing whether a client\u2019s non-compete agreement is enforceable. The file contains the agreement and the client\u2019s correspondence; the library contains the relevant statute and two appellate opinions. Draft the memorandum, applying the library to the file.',
        options: [
          'A. Draft a memorandum applying the statutory and case authority in the library to the facts in the file, with a clear conclusion and reasoning on each element',
          'B. Draft a memorandum relying on memorised rules of contract law not contained in the library',
          'C. Summarise the file facts without citing or applying the library materials',
          'D. Write an opinion piece arguing that non-compete agreements are unfair to employees'
        ],
        answer: 'A',
        explanation: 'The performance test rewards exactly what A describes: applying only the materials in the closed universe — the statute and the two cases in the library — to the facts in the file, with a clear conclusion and element-by-element reasoning in the requested document format. B fails because performance tests are closed-universe tasks; outside legal knowledge is neither required nor rewarded, and memorised doctrine not in the library does not answer the assignment. C fails because a memo that never applies the library cannot be graded on the analysis, which is the point of the task. D fails because the task is a memo applying authority, not an advocacy piece. Candidates who rehearse the format know that reading the file and library, outlining the elements, and writing the memo in the assigned structure is the entire skill being tested.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The California General Bar Examination is a two-day, in-person exam administered at State Bar-approved test centres in February and July, and the direct exam-day answer is that day one is the written section — five one-hour essays and one 90-minute performance test, in a three-hour morning session and a three-and-a-half-hour afternoon session — and day two is 200 MBE multiple-choice questions in two three-hour sessions of 100. You will deliver your written answers on a laptop using the Examplify software, or by hand if you chose the handwritten option, and you must register for the laptop option and pay the associated fee during filing. Arrive at the centre with a government-issued photo ID matching your registration exactly and your admission ticket; a mismatch means no exam and a forfeited fee. Plan the two days as a marathon: day one runs roughly 9:00 a.m. to 5:30 p.m. with the three-hour morning essays and the three-and-a-half-hour afternoon block, and day two runs the two three-hour MBE sessions with a lunch break, so food, hydration and sleep across the two days are preparation variables, not afterthoughts. During the essays, budget about one hour per question and write in IRAC, because graders award points for the rule and application structure; during the performance test, read the file and library efficiently and write the assigned document in the requested format. During the MBE, pace to roughly 1.8 minutes per question, answer every question — there is no penalty for guessing — and flag uncertain items to return to. Expect strict proctoring, bag checks and a controlled environment on both days. Results are released roughly three months after the exam, which is the longest wait of any exam on this site, and the published results include the detailed pass-rate statistics the State Bar reports each cycle.',
    bring: [
      'Government-issued photo ID with a name matching your State Bar registration exactly',
      'Your admission ticket and any confirmation of the test-centre location',
      'A laptop with Examplify installed and tested, if you chose the laptop option — or writing supplies if you chose handwritten',
      'Food, snacks and water for the full two-day schedule; the centre\u2019s break rules determine what is stored where'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and any electronic device — prohibited in the testing room on both days',
      'Study materials, notes and outlines; the exam is closed-book, and day one\u2019s performance test library is provided in the booklet',
      'Bags, coats and personal items beyond what the centre permits in the testing room',
      'Any pre-written model answers or outlines — possession alone can invalidate the exam'
    ],
    timeline: [
      { time: 'The month before', detail: 'Confirm the filing and late-filing status, install and test Examplify if using a laptop, confirm the test-centre address and travel plans for both days, and verify the ID rule.' },
      { time: 'Day one morning (3 hours)', detail: 'Three essay questions. Budget about one hour each and write in IRAC; graders award points for the rule statement and application.' },
      { time: 'Day one afternoon (3.5 hours)', detail: 'Two essay questions plus the 90-minute performance test. Read the file and library efficiently, then write the assigned document in the requested format.' },
      { time: 'Day two morning (3 hours)', detail: 'MBE session one: 100 multiple-choice questions. Pace to roughly 1.8 minutes per question and answer everything.' },
      { time: 'Day two afternoon (3 hours)', detail: 'MBE session two: the second 100 questions. Maintain the pace through the final hour, where fatigue most affects accuracy.' },
      { time: 'Roughly three months later', detail: 'Results are released, and the State Bar publishes the full pass-rate statistics for the administration.' }
    ],
    rules: [
      'Two-day General Bar Examination: day one is five essays plus a performance test; day two is 200 MBE questions in two three-hour sessions.',
      'The passing standard is 1390 on the 2000-point combined scale, weighted 50 percent written and 50 percent MBE.',
      'Government-issued photo ID with a name matching your registration exactly is required, or you are turned away.',
      'The exam is closed-book; the performance-test library is provided in the booklet, and no outside materials are permitted.',
      'Written answers are delivered on a laptop through Examplify or by hand, per your filing choice.',
      'No electronic devices, notes or pre-written materials in the testing room; violations can invalidate the exam.'
    ],
    afterwards:
      'Results are released roughly three months after the exam, and the State Bar publishes the pass-rate statistics for every administration, so you will see exactly how the cohort performed. On a total scaled score of 1390 or above, you pass, and the remaining admissions steps are completing the moral-character review and paying the admission fees — the exam is the last academic gate, but not the last administrative one. On a score between 1350 and 1389, your written answers receive a second read, and the averaged total determines the outcome. On a fail below 1350, you may retake the exam at the next administration — California places no limit on the number of attempts — paying the $878 application fee again, plus preparation costs. Use the score report and the State Bar\u2019s published analyses to diagnose whether the loss was MBE, essays or the performance test, and attack exactly that half of the exam; candidates who retake after closing the specific component rather than restudying everything are the ones who clear 1390. Track the State Bar\u2019s NextGen decision as well: the Board of Trustees has recommended that the California Supreme Court adopt the NCBE NextGen Uniform Bar Exam beginning in July 2028, which would change the format for future administrations.'
  }
};

export default data;
