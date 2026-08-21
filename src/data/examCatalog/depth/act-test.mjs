const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'College admissions & standardized-testing desk',
    bio: 'We cover the ACT and its role in college admission. Format and fee facts come from ACT official pages and are revised each testing year; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ACT format, scoring scale, fees and retake policy against ACT official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The ACT gates college access: bachelor-degree median weekly earnings were $1,543 in 2024, versus $998 with a high-school diploma (BLS)',
    summary: 'The ACT is an admissions test, not a job credential, so there is no BLS SOC code attached to a score. The economic case runs through college completion, and the BLS evidence is direct: in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone - an annualized bachelor-level median of roughly $80,000 against a diploma-level median of about $52,000. The ACT matters to this picture because it remains one of the two dominant admissions tests in the US, used by thousands of colleges for admission, course placement, and merit-aid formulas, and a strong score can materially reduce the net cost of college through scholarship programs. It is equally true that the landscape has shifted: many colleges are test-optional, and some state university systems have moved away from requiring standardized tests, so the ACT is a lever rather than a universal gate. The honest framing is the same as for any admissions test: prepare seriously when your target schools use the score for admission or aid, and understand that the wage payoff the data actually supports is degree completion, not the score itself. BLS classifies workers by occupation and education, not test scores, so no ACT composite maps to a salary; the connection runs through the college outcomes the score helps produce. Families comparing the ACT and SAT should also know the tests differ in structure - the ACT includes a Science section and an optional essay - but the economic logic is identical.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'ACT composite score range', value: '1-36', note: 'ACT, Inc.' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The ACT has no pass/fail line; composites run 1-36 and targets are set by each college\u2019s admitted-student profile',
    summary: 'ACT, Inc. publishes no pass rate for the ACT because there is no passing score. The composite is the average of four section scores (English, Math, Reading, Science), each on a 1-36 scale, rounded to the nearest whole number, plus an optional Writing test (scored 2-12 separately, not included in the composite). What students compare against are national percentiles (ACT publishes them annually) and each college\u2019s middle-50% range of admitted students. A composite around 20 is commonly cited as roughly the national average, while competitive four-year colleges often admit students in the 24-30 band, and highly selective programs routinely see 31-34. ACT also reports college-readiness benchmarks (English 18, Math 22, Reading 22, Science 23 under the standard benchmark set), which estimate the likelihood of success in entry-level college courses. The exam currently runs about 2 hours 55 minutes for the multiple-choice portion (English 45 minutes/75 items, Math 60 minutes/60 items, Reading 35 minutes/40 items, Science 35 minutes/40 items) plus an optional 40-minute essay; ACT has announced format changes rolling out from 2025, so candidates must verify the current structure on ACT.org before registering. There is no limit on retakes, and ACT\u2019s superscoring allows students to combine the best section scores across sittings. The honest takeaway: set a target from your college list and ACT\u2019s percentile tables, not from a pass line that does not exist, and confirm the current test format before you prepare.',
    source: { label: 'ACT official test information', url: 'https://www.act.org/content/act/en/products-and-services/the-act.html' },
    caveat: 'No pass rate exists; targets come from college middle-50% ranges and national percentiles. Verify the current format on ACT.org, which is changing from 2025.'
  },
  studyPlan: {
    summary: 'A serious ACT plan runs 60-100 hours over 8-12 weeks. The current test is about 2 hours 55 minutes of multiple choice: English (75 items, 45 minutes - grammar, usage, punctuation, rhetoric), Math (60 items, 60 minutes - pre-algebra through trigonometry, all concepts through Algebra II), Reading (40 items, 35 minutes - four passages: prose fiction, social science, humanities, natural science), and Science (40 items, 35 minutes - data representation, research summaries, conflicting viewpoints), plus an optional 40-minute essay. Week 1: take an official full-length practice test (ACT offers a free online test) and record section scores and a skill-tagged error log. Weeks 2-4: drill English and Math, the two most trainable sections - English rewards learning the fixed grammar rules, and Math rewards practicing the timing on the last 10 items, which are the hardest. Weeks 5-7: Reading and Science - both are pace-driven; Reading rewards passage-type-specific strategies (the four passage types behave differently), and Science is a reading/analysis test in disguise, so practice extracting data from graphs and tables rather than reviewing science content. Weeks 8-10: full timed sections and a second full test; ACT timing is unforgiving, so practice the 35-60 minute section blocks exactly. Weeks 11-12: two full tests per week, error retakes, and logistics (calculator policy, breaks, essay if required). Students should confirm the 2025-format changes on ACT.org before investing hours, since ACT has announced structural updates.',
    totalHours: '60-100 hours over 8-12 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official full practice test', 'Section scores and error log'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'English and Math', tasks: ['Grammar rule drills', 'Math timing on the final 10 items'], hours: 30 },
      { label: 'Weeks 5-7', focus: 'Reading and Science', tasks: ['Passage-type strategies', 'Graph and table extraction'], hours: 24 },
      { label: 'Weeks 8-10', focus: 'Full timed sections', tasks: ['Section blocks at exact timing', 'Second full test'], hours: 24 },
      { label: 'Weeks 11-12', focus: 'Full tests and logistics', tasks: ['Two full tests per week', 'Error retakes; calculator and essay plans'], hours: 16 }
    ],
    variants: [
      { label: '2025 format change', detail: 'ACT has announced a shorter test with fewer items rolling out from 2025; verify the current structure on ACT.org before preparing.' },
      { label: 'Essay (optional)', detail: 'Some colleges require the Writing test; if any target school does, take it and practice the 40-minute essay.' }
    ]
  },
  prepStrategies: {
    summary: 'The ACT rewards a small set of high-leverage habits. Strategy one: pace train from the start. The ACT gives far less time per question than the SAT - 36 seconds per English item and 52 seconds per Science item - so every practice session should be timed, and untimed practice should be reserved for diagnosing error types. Strategy two: mine the English section, which is the most trainable on the test; the 75 items test a finite set of grammar and punctuation rules plus rhetorical skills, and most students can gain 3-5 composite points from English alone. Strategy three: treat Science as a reading test; the content is not advanced science, and the highest scorers are those who read graphs, tables and experimental designs quickly and accurately. Strategy four: use official ACT materials first - the free official practice test, the official ACT prep guide, and the released-form tests - because third-party banks drift from ACT\u2019s item style, and the timing must be practiced on realistic items. Strategy five: use ACT\u2019s superscoring to your advantage by planning multiple sittings and targeting the weakest section each time; ACT reports the best composite across section bests for most score sends. Strategy six: for Math, master the calculator policy and the built-in formula-free expectation (no formula sheet), and practice the hardest final items under time pressure. Finally, confirm the current format on ACT.org, because ACT has announced structural changes from 2025.',
    items: [
      { title: 'Train pacing from day one', detail: '36-52 seconds per item demands timed practice every session.' },
      { title: 'Mine the English section', detail: 'Fixed grammar rules make it the most trainable section.' },
      { title: 'Treat Science as a reading test', detail: 'Graph and table extraction, not science content review.' },
      { title: 'Use official materials', detail: 'Released forms match ACT style and timing.' },
      { title: 'Exploit superscoring', detail: 'Multiple sittings, target the weakest section each time.' }
    ]
  },
  resourceComparison: {
    summary: 'The ACT prep market has a strong official core and a large paid periphery. Free and official first: the ACT official full-length practice test on the ACT website, the official ACT Prep Guide (about $35-45, includes retired tests and answer explanations), and the released-form tests ACT publishes. The major test-prep companies sell books ($15-$40) and courses ($200-$2,000) whose main value is structure and pacing practice; because ACT\u2019s timing is its defining challenge, coached practice can help students who struggle with the 35-60 minute blocks. Many school districts offer free in-school ACT prep and fee waivers for low-income students, which cover the test fee and free practice materials; students should ask their counselor. Tutoring ($50-$200/hour) is most defensible for students with a specific weak section or a high target gap. The honest ranking: official free test and Prep Guide first, a commercial book for structure, a course or tutor only when pacing or accountability justifies the cost. Prices here are current as of the 2025-26 testing year and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official full practice test', values: ['Free', 'Online', 'Baseline and format familiarity'] },
      { label: 'Official ACT Prep Guide', values: ['$35-$45', 'Print/ebook', 'Retired tests with explanations'] },
      { label: 'Commercial prep book', values: ['$15-$40', 'Print', 'Structure and drills'] },
      { label: 'Course or tutor', values: ['$200-$2,000', 'Live/on-demand/1:1', 'Pacing work and accountability'] }
    ],
    footnote: 'Prices dated 2025-26; ACT is the only official source of retired tests. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common ACT mistakes are timing-driven. Mistake one: practicing untimed. The ACT\u2019s 36-second English average and 35-minute Reading section punish untrained pacing, and students who drill content without clocks routinely run out of time on test day. Mistake two: studying Science as content; the section tests data interpretation and experimental reasoning, and reviewing biology and chemistry facts wastes hours that graph-reading practice would repay. Mistake three: reading Reading passages slowly and carefully; the section rewards strategic skimming - the questions point to specific lines, and efficient students read for structure first. Mistake four: skipping the hardest Math items entirely out of panic; the ACT Math scale rewards attempting all items, and educated guessing on the final items is better than leaving them blank (there is no guessing penalty). Mistake five: ignoring the English section\u2019s weight; at 75 items it is the largest section, and grammar rule mastery is the single fastest composite gain. Mistake six: preparing without confirming the current format; ACT has announced structural changes from 2025, and students using outdated materials practice the wrong test. Finally, students who take the optional essay without any target college requiring it waste 40 minutes of stamina; check requirements first.',
    items: [
      { mistake: 'Practicing untimed', fix: 'Time every session; pacing is the ACT\u2019s core challenge.' },
      { mistake: 'Reviewing science content', fix: 'Practice graph and data extraction instead.' },
      { mistake: 'Reading passages slowly', fix: 'Skim for structure; use the questions as a map.' },
      { mistake: 'Panicking on hard Math items', fix: 'Attempt all items; there is no guessing penalty.' },
      { mistake: 'Preparing with outdated format', fix: 'Confirm the 2025-format changes on ACT.org.' }
    ]
  },
  questionTypes: {
    summary: 'The ACT has four multiple-choice sections plus an optional essay. English: 75 items in 45 minutes, testing usage and mechanics (grammar, punctuation, sentence structure) and rhetorical skills (organization, style, word choice). Math: 60 items in 60 minutes, covering pre-algebra, elementary algebra, intermediate algebra, coordinate geometry, plane geometry, and trigonometry through Algebra II. Reading: 40 items in 35 minutes across four passage types (prose fiction, social science, humanities, natural science), testing main idea, detail, inference, and author technique. Science: 40 items in 35 minutes across data representation, research summaries, and conflicting viewpoints, testing interpretation and reasoning rather than content recall. The optional Writing test is one essay in 40 minutes scored 2-12. Each section scores 1-36; the composite is the rounded average. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'English', share: '75 items / 45 min', detail: 'Usage/mechanics and rhetorical skills.' },
      { name: 'Math', share: '60 items / 60 min', detail: 'Pre-algebra through trigonometry.' },
      { name: 'Reading', share: '40 items / 35 min', detail: 'Four passage types; no calculator.' },
      { name: 'Science', share: '40 items / 35 min', detail: 'Data interpretation and reasoning.' }
    ],
    samples: [
      {
        prompt: 'English section item: "The committee has decided to postpone the vote until next week, [and] the members will use the time to review the new evidence." The bracketed word is being evaluated for correctness.',
        options: ['A. NO CHANGE', 'B. , and', 'C. ; and', 'D. and,' ],
        answer: 'A',
        explanation: 'Two complete sentences joined with a comma and coordinating conjunction is correct; the other choices misplace punctuation.'
      },
      {
        prompt: 'Math item: If 2x + 5 = 17, what is the value of x?',
        options: ['A. 5', 'B. 6', 'C. 7', 'D. 11'],
        answer: 'B',
        explanation: 'Subtract 5 from both sides: 2x = 12; divide by 2: x = 6.'
      },
      {
        prompt: 'Reading item (natural science passage about glacier movement): The passage implies that the glacier\u2019s "surge" is best understood as which of the following?',
        options: ['A. A gradual annual advance', 'B. A sudden, temporary acceleration', 'C. A permanent change in direction', 'D. An effect of human construction'],
        answer: 'B',
        explanation: 'The passage describes surges as dramatic but temporary accelerations of ice movement, distinct from the glacier\u2019s normal advance.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'The ACT is administered on national test dates, typically seven per year (September, October, December, February, April, June, July), at high schools and test centers; registration closes about five weeks before each date, with late registration for a fee. On test day, students check in with an admission ticket and a valid photo ID, and calculators are permitted for the Math section under ACT\u2019s approved-calculator policy (no CAS or phone calculators). The multiple-choice portion runs about 2 hours 55 minutes plus the optional 40-minute essay, with a short break after the Math section; total time with instructions and breaks is roughly 4 hours (or about 4 hours 40 minutes with the essay). Phones and smartwatches are not permitted. Students with documented disabilities must have ACT accommodations approved in advance through the ACT accommodations process, which the school coordinates. Scores post online about two to eight weeks after the test date (most candidates see scores within two to three weeks), and ACT\u2019s superscoring means colleges typically receive the best section scores across sittings. Afterwards, send scores to target colleges before deadlines, verify each college\u2019s essay requirement and superscore policy, and plan any retake around the weakest section.',
    bring: ['Admission ticket', 'Valid photo ID', 'Approved calculator for the Math section', 'Sharpened No. 2 pencils (ACT is paper-based)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes, books, or formula sheets', 'Any device not on the ACT approved-calculator list'],
    timeline: [
      { time: '7:45-8:00 AM', detail: 'Arrive; check in and find the testing room.' },
      { time: '8:00-8:45 AM', detail: 'English (45 minutes).' },
      { time: '8:45-9:45 AM', detail: 'Math (60 minutes).' },
      { time: '9:45-10:00 AM', detail: 'Break.' },
      { time: '10:00-10:35 AM', detail: 'Reading (35 minutes).' },
      { time: '10:35-11:10 AM', detail: 'Science (35 minutes).' },
      { time: '~11:10-11:50 AM', detail: 'Optional Writing test (40 minutes).' },
      { time: '2-8 weeks later', detail: 'Scores post online.' }
    ],
    rules: [
      'The ACT is paper-based; fill in bubbles with No. 2 pencils.',
      'Approved calculators only; no CAS or phone calculators.',
      'Personal electronics are not permitted in the testing room.',
      'Accommodations must be pre-approved through ACT.'
    ],
    afterwards: 'Scores post online in 2-8 weeks; send scores before deadlines, verify superscore and essay policies, and target the weakest section for any retake.'
  }
};

export default data;
