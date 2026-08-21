const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Real estate licensure desk',
    bio: 'The New York real estate salesperson exam facts below are drawn from the New York Department of State (DOS) Division of Licensing Services requirements and from public pass-rate figures the DOS Real Estate Board reports in its published meeting minutes; where a figure is not published, we state that plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation page for Real Estate Brokers and Sales Agents (May 2024 data), cited by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the NY DOS Division of Licensing Services salesperson requirements, the DOS Real Estate Board meeting minutes, and the BLS OOH Real Estate Brokers and Sales Agents page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Real estate sales agents earned a May 2024 BLS median of $56,320, and the NY salesperson exam is the state licensure gate for that commission-based work.',
    summary: 'The salary answer for the New York real estate salesperson license is a commission story, not a salary story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $56,320 for SOC 41-9022 Real Estate Sales Agents, with the lowest 10 percent earning below $31,940 and the highest 10 percent above $125,140, and the exam itself does not appear in wage data because the BLS classifies by job duty rather than by license. The salesperson license is the entry credential that gates the work: New York requires every salesperson to pass the state exam, complete 77 hours of approved pre-licensing education, and affiliate with a sponsoring broker before practicing, and income then follows commissions, which the BLS describes as divided among the buying agent, selling agent, brokers, and firms. The BLS also reports a May 2024 median of $72,280 for SOC 41-9021 Real Estate Brokers, the higher tier that sales agents advance into, which is the honest career ladder: entry earnings for new agents are often low and irregular because commissions depend on transactions closing, and the BLS warns that agents sometimes go weeks or months without a sale. The broader BLS picture is steady rather than booming: the OOH projects 3 percent employment growth for real estate brokers and sales agents combined from 2024 to 2034, with about 46,300 openings per year, most from replacement demand. New York is one of the higher-paying states for this occupation in the OEWS state data, but the median does not capture the wide spread between agents who close frequently and those who do not. For a candidate asking whether the license pays, the direct answer is that the license is the gate to a commission-driven career whose BLS median sits above the all-occupation median of $49,500, and whose real earnings depend on market conditions and effort rather than on the exam score.',
    rows: [
      { label: 'Median annual wage, real estate sales agents', value: '$56,320', note: 'BLS OOH, SOC 41-9022, May 2024' },
      { label: 'Lowest 10%', value: 'under $31,940', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10%', value: 'over $125,140', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Combined job openings', value: '~46,300/year', note: 'Brokers and sales agents, BLS 2024-2034' }
    ],
    growth: 'BLS projects 3 percent growth for real estate brokers and sales agents (2024-2034) with about 46,300 openings per year, most from replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Real Estate Brokers and Sales Agents', url: 'https://www.bls.gov/ooh/sales/real-estate-brokers-and-sales-agents.htm' }
  },
  passRate: {
    headline: 'The NY DOS Real Estate Board reports exam pass rates in its public meeting minutes, and recent figures have hovered around 51 to 54 percent of all attempts.',
    summary: 'The direct answer on pass rates is that New York is one of the states that actually publishes the number: the NY Department of State Real Estate Board reports pass-rate data for the salesperson exam in its public meeting minutes, and those figures have run in the low-50s for recent years, with reports of roughly 52 percent for 2021, 54 percent for 2022, 53 percent for 2023, and 53 percent for 2024, meaning roughly half of all attempts pass. Two caveats frame that number honestly: the DOS figure counts all exam attempts, including retakes, so the first-time pass rate is likely somewhat lower, and the number varies year to year, so treat it as a difficulty signal rather than a fixed probability. The structural facts are stable and verifiable on the DOS pages: the exam is 75 multiple-choice questions in 90 minutes, a score of 70 percent (53 of 75) is required to pass, the $15 fee is paid through the eAccessNY portal, results are reported as pass or fail with no numerical score, and a passing result stays valid for two years, within which you must submit the license application and affiliate with a sponsoring broker. The exam is administered in person at DOS proctoring sites across the state, including Albany, Buffalo, Hauppauge, and New York City, with no remote option, and scheduling runs through eAccessNY after your school reports completion of the 77-hour qualifying course. Because the state reports only pass or fail, the practical takeaway is to treat consistent 80 percent or better on timed practice exams as the readiness signal, since you will not learn how close a failed attempt came.',
    source: { label: 'NY DOS Division of Licensing Services - real estate salesperson information', url: 'https://dos.ny.gov/real-estate-salesperson-licenses' },
    caveat: 'The DOS Real Estate Board reports pass-rate data in public meeting minutes (roughly 51-54 percent of all attempts in recent years); the figure counts retakes as well as first attempts, and no official first-time pass rate is separately published.'
  },
  studyPlan: {
    summary: 'An efficient New York salesperson study plan is 50-70 hours over 4-6 weeks, because the 75-question exam is a breadth test that splits roughly evenly between national real estate principles and New York-specific law and practice, and the fastest score gains come from covering both halves in proportion while drilling timed practice exams. The 77-hour pre-licensing course is the foundation, but the state exam is a separate test that rewards applied recall, and candidates who finish the course and immediately sit cold underperform the ones who add a focused practice window. The plan should split into content coverage of the national topics (weeks 1-2), New York license law and specialty content (week 3), math and question-bank drilling (week 4-5), and a final full timed exam (week 6): the exam includes roughly 10 to 15 math items on commission, proration, and transfer tax, and the New York-specific content on co-ops, rent regulation, and the Human Rights Law is where out-of-state candidates lose points. Candidates with a strong real estate or sales background should budget the lower end and weight time toward the New York law; candidates new to the field should budget the upper end and add flashcard work on the statutory definitions. The final week should include at least one full timed practice test at 75 questions in 90 minutes, because pacing at roughly 72 seconds per question is a real constraint, and the state-set passing bar of 70 percent is best targeted when practice scores clear it with margin.',
    totalHours: '50-70 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'National real estate principles', tasks: ['Study property ownership, estates, and land use', 'Cover contracts, financing, and valuation fundamentals', 'Review fair housing law and federal protected classes'], hours: 18 },
      { label: 'Week 3', focus: 'New York law and practice', tasks: ['Study NY license law, agency rules, and trust accounts', 'Cover NY-specific topics: co-ops, rent regulation, transfer tax', 'Master the NY Human Rights Law protected classes'], hours: 14 },
      { label: 'Week 4-5', focus: 'Math and question-bank drilling', tasks: ['Drill commission, proration, and transfer tax calculations', 'Work 300-500 items from a current NY question bank', 'Log every miss and re-read the associated topic'], hours: 18 },
      { label: 'Week 6', focus: 'Full test and readiness', tasks: ['Take a full timed 75-question practice exam in 90 minutes', 'Re-drill the miss log until clean', 'Confirm the eAccessNY booking and the $15 fee'], hours: 8 }
    ],
    variants: [
      { label: 'Strong real estate background', detail: 'Budget the lower end and weight time toward New York license law and the state-specific content.' },
      { label: 'Career changer or returning candidate', detail: 'Budget the upper end and add flashcard work on statutory definitions before the timed drills.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant strategy for the New York salesperson exam is to treat the state exam as separate from the 77-hour course, to split study time between the national and New York-specific halves, and to drill timed practice exams because the 90-minute clock and the pass-or-fail report leave no margin for surprise. First, confirm your eligibility timeline: your school must report completion of the 77-hour qualifying course, and the school final exam must be proctored in person in New York before the state will let you book, so the course and the state exam are sequential gates. Second, use the official DOS materials and the eAccessNY candidate information as the scope map, because the exam blends national real estate fundamentals with heavy New York Real Property Law content, and the official pages define the requirements precisely. Third, study the New York-specific content deliberately: co-ops and rent regulation, the NY Human Rights Law protected classes that go beyond the federal Fair Housing Act, agency disclosure, and license law carry a large share of the items, and this is the section where most candidates lose points. Fourth, drill a current question bank with a miss log, including the math items on commission, proration, and transfer tax, because the applied calculations are coachable and the format-specific rehearsal converts reading into recall. Fifth, take at least two full timed practice exams under real conditions, because 75 questions in 90 minutes is roughly 72 seconds per question, and candidates who rehearse the pacing answer every item rather than leaving blanks on the real exam. A further high-yield tactic is to build a one-page formula and deadline sheet for the math and statutory items, because the exam rewards the consolidated list and the sheet becomes the final review tool.',
    items: [
      { title: 'Confirm the course-to-exam sequence', detail: 'The 77-hour course and its in-person proctored final come before the state exam booking.' },
      { title: 'Use the official DOS materials', detail: 'The DOS salesperson pages and eAccessNY define the requirements and the schedule.' },
      { title: 'Weight New York-specific content', detail: 'Co-ops, rent regulation, Human Rights Law, and license law carry a large share of items.' },
      { title: 'Drill math and a current bank', detail: 'Commission, proration, and transfer tax items are coachable and format-specific.' },
      { title: 'Rehearse the 90-minute pace', detail: '75 questions is about 72 seconds per question; timed practice builds the answer-every-item habit.' }
    ]
  },
  resourceComparison: {
    summary: 'New York real estate prep resources split into the official DOS set, review courses and books, and question banks, and the buying logic is anchored by the fact that the state exam is a unified 75-question test with a $15 fee and a 70 percent pass bar, so the highest-yield spend is timed practice rather than a large content library. The official DOS materials and the eAccessNY candidate information are free and define the eligibility sequence, the fee, and the scheduling rules precisely, and the 77-hour pre-licensing course you already paid for is the content foundation, so candidates who passed the course are usually best served by a question bank and practice exams rather than a second full course. Review books and online courses for the New York salesperson exam, roughly $60 to $300 depending on the provider, add structured review and are most useful for candidates who need the national principles explained again; the well-regarded options track the current 77-hour curriculum and the NY-specific content. Question banks and exam simulators, roughly $30 to $90, add volume and timed full exams, which is the format-specific rehearsal the exam rewards, and the options that replicate 75 questions in 90 minutes with explanations are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam registration itself is $15 via eAccessNY, and the license application and initial fees follow after the pass; candidates should also budget for the sponsoring broker arrangement that New York requires before a license can be issued.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official DOS pages + eAccessNY', values: ['Free', 'Official requirements and scheduling portal', 'Eligibility, fees, and the exam-day rules'], note: '' },
      { label: 'NY salesperson review course or book', values: ['$60-300', 'Course or book, NY-focused', 'Candidates needing the content re-explained'], note: '' },
      { label: 'Question bank and exam simulator', values: ['$30-90', 'Online, timed practice exams', 'Format rehearsal and pacing under the real clock'], note: '' },
      { label: 'State exam registration', values: ['$15', 'DOS eAccessNY', 'The real exam, in person at a DOS site'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The exam fee is $15 via eAccessNY, with license application fees charged separately after a pass.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the New York salesperson exam all trace to underestimating the state-specific content or the format: candidates who study only the national real estate principles lose points on the New York law items, candidates who skip timed practice leave questions blank when the 90-minute clock runs out, and candidates who assume the pre-licensing course score predicts the state exam miss the fact that the state test is a separate, applied exam. A second cluster of errors is administrative: candidates book the exam before the school has reported the 77 hours, or let a passing result sit unused, forgetting that the pass is valid only two years and the license application and the sponsoring-broker affiliation must follow within that window. Candidates also misread the passing standard, aiming at a vague target when the real bar is 53 of 75 correct, and a few misunderstand the retake rule, assuming a failed attempt forces a long wait when the state allows rebooking with a fresh $15 fee. Finally, some candidates ignore the math items, treating the roughly 10 to 15 calculation questions as incidental, when commission, proration, and transfer tax questions are coachable points that reliably separate passing and failing scores. The same pattern shows up in how candidates read the report: New York reports results only as pass or fail with no numerical score, so a failed attempt carries no diagnostic feedback and a passing result gives no margin read, which is why consistent 80 percent on timed practice exams is the practical readiness signal rather than one lucky practice run. Candidates also under-plan the retake economics, forgetting that every attempt is a full 75-question, 90-minute session booked through eAccessNY and paid with a fresh $15 fee, so a well-prepared first sitting saves both money and scheduling delay.',
    items: [
      { mistake: 'Studying only the national content', fix: 'Split study time between national principles and the New York law, co-op, and Human Rights content.' },
      { mistake: 'Skipping timed practice exams', fix: 'Drill full 75-question exams in 90 minutes so the pacing and answer-every-item habit are rehearsed.' },
      { mistake: 'Letting a passing result sit unused', fix: 'File the license application and affiliate with a broker within the two-year validity of the pass.' },
      { mistake: 'Aiming at a vague passing target', fix: 'Target 53 of 75 correct and treat 80 percent on practice as the real readiness signal.' },
      { mistake: 'Ignoring the math items', fix: 'Drill commission, proration, and transfer tax calculations; they are reliable coachable points.' }
    ]
  },
  questionTypes: {
    summary: 'The New York salesperson exam is a computer-based test of 75 multiple-choice questions in 90 minutes, administered in person at DOS proctoring sites, with a passing requirement of 70 percent (53 of 75) and results reported only as pass or fail through eAccessNY. The content blends national real estate fundamentals with New York Real Property Law, with roughly half the exam on national principles and half on New York-specific law and practice, and the items appear in the standard single-best-answer style with a scenario, a statute-based fact, or a math problem in the stem. The math items, roughly 10 to 15 across the paper, cover commission, proration, transfer tax, and loan qualification, and the state-specific items emphasize license law, agency disclosure, co-ops, rent regulation, and the New York Human Rights Law protected classes. The national half draws on ownership, contracts, financing, valuation, and transfer of property, while the New York half adds the state statutes that out-of-state candidates under-prepare beyond the federal Fair Housing Act. Pacing is a structural feature, since 75 questions in 90 minutes is roughly 72 seconds per item, and the software supports flagging questions for review, with a basic non-programmable calculator permitted for the math items, so candidates can sweep known items and return to flagged ones instead of leaving blanks. The exam is in person only, at DOS proctoring sites including Albany, Buffalo, Hauppauge, and New York City, with no remote option, and because the result is pass or fail only, question-type familiarity built through practice is the main feedback a candidate receives. The samples below illustrate three of the recurring styles: a math item, a New York statute item, and a fair-housing item. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'National principle items', share: 'About half the paper', detail: 'Ownership, contracts, financing, valuation, and transfer of property.' },
      { name: 'New York law and practice items', share: 'About half the paper', detail: 'License law, agency, co-ops, rent regulation, and the NY Human Rights Law.' },
      { name: 'Math and calculation items', share: 'Roughly 10-15 items', detail: 'Commission, proration, transfer tax, and loan qualification.' }
    ],
    samples: [
      {
        prompt: 'A broker earns a 6 percent commission on a $450,000 sale. What is the total commission before any split?',
        options: [
          'A. $24,000',
          'B. $27,000',
          'C. $30,000',
          'D. $33,000'
        ],
        answer: 'B',
        explanation: 'Six percent of $450,000 is 0.06 x 450,000 = $27,000. The other options are the products of mis-applying the rate to rounded or shifted figures, which is the classic distractor pattern on commission math.'
      },
      {
        prompt: 'A seller signs an exclusive right to sell listing agreement with a broker. Which statement about the listing is correct?',
        options: [
          'A. The seller may sell the property directly and owe no commission to the broker',
          'B. The broker earns a commission if the property sells during the term, even if the seller found the buyer',
          'C. The seller owes the broker a commission only if the broker personally produces the buyer',
          'D. The listing may be terminated orally at any time without consequence'
        ],
        answer: 'B',
        explanation: 'Under an exclusive right to sell listing, the broker is entitled to a commission if the property sells during the listing term regardless of who produces the buyer, including a direct sale by the seller. Options A and C describe exclusive agency or open listing outcomes, and D misstates the written contract requirements.'
      },
      {
        prompt: 'Which group is a protected class under the New York Human Rights Law for housing even though the category is not a federal Fair Housing Act protected class?',
        options: [
          'A. Familial status',
          'B. National origin',
          'C. Marital status',
          'D. Race'
        ],
        answer: 'C',
        explanation: 'New York adds protected classes beyond the federal Fair Housing Act, including marital status, age, military status, and citizenship status, in housing discrimination claims. Familial status, national origin, and race are federal protected classes, so they do not illustrate the additional New York-only coverage the item is testing.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The New York salesperson exam is a computer-based 75-question test in 90 minutes, delivered in person at a DOS proctoring site, and the direct exam-day answer is that you must bring a valid government-issued photo ID, arrive before the appointment, and expect a pass-or-fail result reported later through your eAccessNY account. Schedule through eAccessNY after your school reports the 77-hour course completion, pay the $15 exam fee, and print the confirmation; the DOS sites operate in cities including Albany, Buffalo, Hauppauge, and New York City, and there is no remote proctoring option. On arrival, check in with your photo ID and the confirmation, and store personal items because phones, smartwatches, and study materials are not allowed in the testing room. A basic non-programmable calculator is permitted for the math items, and flagging questions for review is supported, so answer every item and use the flag rather than leaving blanks. Budget about 72 seconds per question and check the clock at the halfway mark; the math and New York law items take the most time, so sweep the questions you know first and return to the flagged ones. A passing result appears in your eAccessNY account within a few business days, and it is valid for two years, during which you must submit the license application and affiliate with a sponsoring broker. If you do not pass, you may rebook and pay the $15 fee again with no long waiting period, and the smart move is to re-study the miss log from your practice exams before the next attempt.',
    bring: ['Valid government-issued photo ID matching your eAccessNY registration', 'Your eAccessNY exam confirmation and the $15 fee already paid', 'A basic non-programmable calculator if your site permits one', 'Quiet review materials for the waiting area only'],
    leave: ['Phones, smartwatches, and other electronics (stored per DOS site rules)', 'Study materials and notes in the test room', 'Personal stationery beyond the center-provided materials', 'Any prohibited item listed on the DOS candidate information'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present photo ID and confirmation, and check in at the DOS site' },
      { time: '0-90 min', detail: 'Work 75 multiple-choice items; flag for review and pace at roughly 72 seconds each' },
      { time: 'After the test', detail: 'Results appear in eAccessNY within a few business days as pass or fail' },
      { time: 'Within 2 years', detail: 'File the license application and affiliate with a sponsoring broker' }
    ],
    rules: ['Valid government-issued photo ID is required at check-in', 'No remote proctoring; the exam is in person at a DOS site', '70 percent (53 of 75) is required to pass', 'A passing result is valid for two years'],
    afterwards: 'A passing result is reported as pass or fail in eAccessNY and stays valid for two years. File the salesperson license application, affiliate with a sponsoring broker, and if the attempt falls short, rebook with a fresh $15 fee after targeted re-study of the miss log.'
  }
};

export default data;
