const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Aviation & FAA licensure desk',
    bio: 'The FAA ATM knowledge-test structure (question count, time limit, passing standard) is drawn from the current FAA Airman Certification Standards (ACS) and the FAA written test matrix, which are revised on a published cycle. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where the FAA or BLS does not publish a figure, we say so plainly rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the FAA Airman Certification Standards (2025 edition) for the ATP multiengine knowledge test and the BLS OOH Airline and Commercial Pilots page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Commercial pilots earned a May 2024 BLS median of $122,670; airline transport pilots at the majors typically earn far more.',
    summary: 'The salary conclusion for an ATP certificate holder is unusually strong: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $122,670 for the SOC 53-2012 Commercial Pilots occupation, and this figure understates the top of the market because airline transport pilots at major carriers are counted separately and earn considerably more through seniority-based pay scales, per-diem, and profit sharing. The BLS lumps pilots by job duty, not by certificate, so an ATP holder flying cargo single-pilot and a 777 captain both appear in pilot occupations; the certificate itself is the credential that unlocks the airline hiring pipeline rather than a job title. The lowest 10 percent of commercial pilots earned below roughly $57,000 in the same survey, while the highest 10 percent cleared well over $200,000, which is the widest spread of any occupation in this catalog and the reason the ATP path is high-risk, high-reward. Airlines, the FAA, and the Department of Transportation projected steady replacement demand through 2034, and the BLS projects about 16,900 openings per year for airline and commercial pilots combined, driven mainly by the mandatory age-65 retirement rule that turns over cockpit seats continuously. Regional carriers, cargo operators, and fractional jet companies hire ATP-rated pilots, and the credential also matters for non-airline jobs: corporate flight departments and medevac operators commonly require an ATP or an ATP with restricted privileges. Two caveats anchor the optimism: first, the earnings trajectory is back-loaded, because a new ATP typically starts at a regional airline or a cargo feeder, not a major; second, the occupation requires passing FAA medical standards and accumulating 1,500 flight hours (or qualifying under a restricted-ATP path) before the certificate is even possible. For a candidate asking whether the ATP pays, the direct answer is that it is the highest-paying certificate in aviation, but the pay arrives after years of building hours, not the day the written test is passed.',
    rows: [
      { label: 'Median annual wage', value: '$122,670', note: 'BLS OOH, Commercial Pilots (SOC 53-2012), May 2024' },
      { label: 'Lowest 10%', value: 'About $57,000', note: 'Typical entry-level regional/cargo first-officer pay' },
      { label: 'Highest 10%', value: 'Over $200,000', note: 'Senior captains at major airlines' },
      { label: 'Typical entry point', value: 'Regional airline FO', note: 'Often below the median for the first 1-3 years' }
    ],
    growth: 'BLS projects about 16,900 openings per year for airline and commercial pilots (2024-2034), with overall employment growth of about 3-4 percent plus heavy replacement demand from the age-65 retirement rule.',
    source: { label: 'BLS Occupational Outlook Handbook - Airline and Commercial Pilots', url: 'https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm' }
  },
  passRate: {
    headline: 'The FAA does not publish an ATP written-test pass rate; the fixed passing standard is 70 percent on a 130-question, 4-hour knowledge test.',
    summary: 'The direct answer on pass rates is that the FAA does not publish cohort pass-rate statistics for the ATM (Airline Transport Pilot Multiengine Airplane) knowledge test, so any percentage circulating online is a private provider estimate, not an official figure, and we do not restate one here. What is published and stable is the passing standard: the FAA scores the ATM written test on a percentage scale and a score of 70 percent is required to pass, with no curve and no form-by-form adjustment the way some certification bodies scale scores. The test itself is 130 questions with a 4-hour time limit, delivered by an FAA-approved computer testing center such as PSI, and the question mix follows the Airman Certification Standards for the airline transport pilot certificate. The realistic read on difficulty comes from the question bank rather than pass rates: the ATM pulls from a large pool that is publicly visible through the FAA question banks used by testing centers, and the failure patterns reported by training providers are consistent — candidates who pass the written without studying the current ACS-mandated topics (instrument procedures, high-altitude operations, weather, weight and balance, and the performance planning items) are the ones who fail, while candidates who run two or three full-length practice papers at the real 130-question, 240-minute format routinely clear 70 percent. The written test is also only the first of three gates: after the knowledge test comes the required ATP Certification Training Program (ATP CTP, a ground and simulator course), and then the practical checkride with an FAA examiner. Because the written is valid for 24 months toward the practical test, the practical advice is to treat the written as a gate to clear early in the ATP CTP sequence rather than the hard part of the process; the checkride is where most candidates spend their additional preparation. The FAAs failure-risk is concentrated in the 15 percent of items drawn from the most-currently-revised ACS topics, so currency of study materials matters more than raw volume of questions answered.',
    source: { label: 'FAA Airman Certification Standards and FAA Written Test Matrix', url: 'https://www.faa.gov/training_testing/testing/acs' },
    caveat: 'The FAA publishes no official pass-rate statistic for the ATM knowledge test; the 70 percent passing standard and 130-question/4-hour format are the published, verifiable facts.'
  },
  studyPlan: {
    summary: 'The efficient ATP written study plan is a 5-to-7 week program of roughly 80-120 total hours, because the ATM is a breadth exam: it covers instrument procedures, high-altitude and Mach operations, weather, weight and balance, performance planning, and crew-resource management, and it assumes the knowledge base of the commercial and instrument certificates that precede it. Candidates who already hold an instrument rating and a commercial certificate should budget the lower end, because the ATM reuses much of that material at a deeper level; candidates coming from a military background without recent civilian written tests should budget the higher end. The published ATP CTP curriculum is the best scope map: its topics track the ACS, so completing the CTP ground course first, then drilling the written items, is the order most successful candidates use. The study plan below assumes the written is being taken while enrolled in or immediately before the ATP CTP, which is the norm for airline-pipeline candidates. A note on sequencing: the FAA allows the knowledge test to be taken before the CTP in most cases, but studying the CTP material first raises written scores, so plan the two together. The final two weeks should be pure practice-test work at the real format, because the 4-hour endurance and the question density are the two things candidates underestimate, and the failure mode on the ATM is pacing rather than knowledge gaps for candidates who prepared thoroughly.',
    totalHours: '80-120 hours over 5-7 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Foundation review', tasks: ['Review instrument procedures, approach plates, and missed-approach criteria', 'Work high-altitude operations: Mach effects, pressurization, RVSM', 'Complete the first pass of the current FAA ACS topics list'], hours: 25 },
      { label: 'Week 3-4', focus: 'ATM-specific content', tasks: ['Study performance planning: takeoff/landing charts, weight and balance', 'Work weather and NOTAM items at the airline transport level', 'Take the ATP CTP ground course or its syllabus topics'], hours: 30 },
      { label: 'Week 5', focus: 'Question-bank work', tasks: ['Drill 200-400 questions from a current ATM question bank', 'Log every miss and re-read the associated ACS topic', 'Take one full 130-question timed paper'], hours: 20 },
      { label: 'Week 6-7', focus: 'Full papers and readiness', tasks: ['Take two more full-length timed papers scoring 80%+', 'Re-drill the missed-item log until clean', 'Confirm the testing center booking and required IDs'], hours: 25 }
    ],
    variants: [
      { label: 'Military pilots', detail: 'Candidates with an ATP written or practical waiver history should confirm their status with the FAA; the written itself is still required for a civilian ATP certificate.' },
      { label: 'Restricted ATP path', detail: 'University aviation programs and military pilots can qualify for an R-ATP with fewer than 1,500 hours; the ATM written is the same test.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the FAA ATM written is working a current question bank at volume while using the ACS as the scope map, because the FAA publishes the item pool philosophy and the test draws from a bank that reputable providers mirror closely; the same pattern holds across every FAA knowledge test. First, buy or access the most recent ATM question bank and study guide — the currency of the material matters more than the brand, because the FAA revises the ACS and the bank on a published cycle, and studying a retired edition is the classic cause of failed attempts. Second, take the free FAA materials seriously: the Airman Certification Standards document and the FAA instrument, commercial, and ATP handbooks are all free PDFs, and the topics the handbooks cover are the topics the test asks about. Third, train the question formats deliberately: the ATM includes straight multiple-choice and some items that require consulting the performance charts and tables in the test supplement, so rehearse the supplement lookup until the charts are familiar before the exam day rather than learning them under the clock. Fourth, run at least three full-length timed papers at 130 questions and 4 hours, because the stamina profile is real and candidates who only drill in short blocks run out of focus in hour three. Fifth, build a miss log: every wrong answer gets re-read in the ACS topic and re-tested the next day, which turns the bank into a targeted study plan. Finally, book the written so it lands in the window of the ATP CTP, and keep the 24-month written validity in mind when scheduling the checkride. A further, high-yield tactic is to study with the test supplement in hand from the first day, because the ATM rewards knowing where the charts live as much as knowing the concepts, and candidates who rehearse the supplement treat it as a tool while candidates who skip it treat it as an obstacle. Use the missed-item log as the final checklist, and on the day before the test, stop new content and review only the log.',
    items: [
      { title: 'Use a current question bank', detail: 'The ATM draws from a published-style pool; the pass standard is 70%, so drilling 400+ current items with explanations reliably clears the bar.' },
      { title: 'Master the test supplement', detail: 'Performance charts, tables, and instrument plates appear in the test; rehearse looking them up before exam day.' },
      { title: 'Run full-length timed papers', detail: 'Three papers at 130 questions/4 hours build the pacing and endurance the real test demands.' },
      { title: 'Keep a miss log tied to the ACS', detail: 'Re-read the specific ACS topic for every miss and retest it the next day; this converts volume into targeted learning.' }
    ]
  },
  resourceComparison: {
    summary: 'ATP written-prep resources split into the free FAA official set, current third-party question banks, and structured training programs, and the buying logic is dominated by the currency rule: because the FAA revises the ACS and item bank on a published cycle, the single most important purchase decision is whether the material matches the current test, not which brand is cheapest. The free FAA stack — the ACS document, the Airman Certification Standards handbook set, and the FAA instrument/commercial/ATP handbooks — covers the concepts completely at zero cost and should be the foundation of every plan. The paid question bank is the standard purchase because the test is a bank-driven exam and rehearsal against current items is the closest thing to the real paper; prices typically run $60-120 for a subscription with explanations and updates. Structured programs, including online ATP written courses, add video instruction and progress tracking and typically cost $200-500, with the most expensive tier bundling simulator or CTP-style content that duplicates what the official ATP CTP already provides. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Candidates on the airline-pipeline track should check whether their ATP CTP provider includes the written-prep materials, because several majors and universities bundle them, which makes the incremental cost of the written near zero. Candidates buying their own should prioritize the question bank and the FAA PDFs, and treat the video course as optional unless they want external structure. A cheap readiness check is taking the free FAA sample items or a single practice paper before buying anything, because candidates who already hold a recent instrument and commercial written will score higher than they expect and may need only the bank, not the course.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FAA ACS + handbooks (official)', values: ['Free (PDF)', 'Official documents', 'The authoritative scope map'], note: '' },
      { label: 'ATM question bank', values: ['$60-120', 'Online, current items', 'Bank-driven rehearsal at volume'], note: '' },
      { label: 'Online ATP written course', values: ['$200-500', 'Video + bank + progress', 'Candidates wanting structure'], note: '' },
      { label: 'ATP CTP (bundled prep)', values: ['Part of CTP fee', 'Classroom + simulator', 'Airline-pipeline candidates'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Confirm that any paid bank matches the current FAA ACS revision before purchase.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the FAA ATM written is studying from a retired edition of the question bank or handbook, because the FAA revises the ACS and item pool on a published cycle and candidates who prepare against last year\u2019s content meet items that have been replaced; the second is treating the written as the hard part of the ATP process, when in fact the checkride and the flight-hour accumulation are the gates that actually filter candidates. A third recurring error is ignoring the test supplement: the ATM includes chart-and-table items, and candidates who never rehearsed the supplement lose those items to the clock even when they know the concept. Candidates also routinely underestimate the endurance element, studying in 30-minute blocks and then running out of focus in hour three of the real paper. Another pattern is scheduling the written without checking the 24-month validity window against the checkride plan, which forces a re-sit or a rushed practical test. Finally, some candidates skip the missed-item log and simply re-drill the whole bank, which wastes hours on questions they already know instead of targeting the ACS topics where the misses live.',
    items: [
      { mistake: 'Studying a retired ACS or question-bank edition', fix: 'Confirm the current FAA ACS revision date on the FAA website and buy material published after it; currency is the top predictor of a pass.' },
      { mistake: 'Treating the written as the hardest gate', fix: 'Plan for the full arc — written, ATP CTP, checkride, and hour-building — and reserve energy for the practical stage.' },
      { mistake: 'Never rehearsing the test supplement', fix: 'Open the performance charts and instrument plates while studying from day one, so lookup is fast on exam day.' },
      { mistake: 'Skipping full-length timed practice', fix: 'Run three 130-question, 4-hour papers; the pacing profile is part of the test.' }
    ]
  },
  questionTypes: {
    summary: 'The ATM knowledge test is 130 multiple-choice questions with one correct answer per item, delivered by computer at an FAA-approved testing center, and the item mix follows the airline transport pilot ACS topics: instrument procedures and navigation, weather and weather services, high-altitude and Mach operations, performance and weight and balance, crew resource management, and regulation items. The test supplement provides the charts, tables, and plates used by a subset of questions, and those lookup items are a distinct format worth rehearsing. The sample below illustrates the published item style — an instrument-procedures question, a performance-planning question, and a high-altitude operations question — using the format of the real exam with four options. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Multiple choice (single best answer)', share: 'Majority of the 130 items', detail: 'One correct option per item, drawn from the ACS topics; the FAA scores 70% as the passing standard.' },
      { name: 'Chart and table items', share: 'Subset', detail: 'Items that require consulting the test supplement, typically performance, weight-and-balance, or instrument-plate lookups.' },
      { name: 'Scenario-based regulation items', share: 'Small subset', detail: 'Items framed as an operational situation asking which regulation or procedure applies; the style the ACS tests most deliberately.' }
    ],
    samples: [
      {
        prompt: 'During a high-altitude cruise at Mach 0.82, the aircraft experiences a sudden loss of cabin pressurization at FL410. Which action has the highest priority?',
        options: [
          'A. Continue to the next planned fix and initiate a gradual descent',
          'B. Declare an emergency and immediately start an emergency descent to a lower altitude',
          'C. Request a higher cruise altitude to escape the pressurization problem',
          'D. Reduce power and continue at FL410 while troubleshooting the pressurization system'
        ],
        answer: 'B',
        explanation: 'Loss of cabin pressurization at FL410 creates an immediate hypoxia risk, and the correct response per the ACS and FARs is to declare an emergency if needed and start an emergency descent without delay. The other options delay the safety-critical action.'
      },
      {
        prompt: 'Which document is the authoritative source of the passing standard and content areas for the airline transport pilot knowledge test?',
        options: [
          'A. The airline\u2019s flight operations manual',
          'B. The FAA Airman Certification Standards for the ATP certificate',
          'C. The testing center\u2019s scheduling guide',
          'D. The aircraft manufacturer\u2019s AFM'
        ],
        answer: 'B',
        explanation: 'The FAA Airman Certification Standards define the knowledge, risk-management, and skill areas tested on the ATP written and practical tests. The other documents govern operations and equipment, not the test content.'
      },
      {
        prompt: 'A performance-planning item gives a takeoff chart for a multiengine airplane. The correct use of the chart requires consulting which element of the test?',
        options: [
          'A. The instrument approach plates',
          'B. The performance tables in the test supplement',
          'C. The weather briefing codes',
          'D. The crew resource management checklist'
        ],
        answer: 'B',
        explanation: 'Performance items on FAA knowledge tests require looking up values in the performance tables provided in the test supplement, which is why rehearsing supplement lookup is a core prep strategy.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The ATM written is a computer-based knowledge test delivered at an FAA-approved testing center, and the direct exam-day answer is that it is a 130-question, 4-hour appointment scored against a 70 percent passing standard, with a preliminary pass/fail result usually available immediately after submission. Arrive with the two forms of identification the center requires (a government-issued photo ID is the standard), and check the center\u2019s booking confirmation for any location-specific instructions, because rules vary slightly by vendor. The appointment begins with a brief tutorial on the testing software, then the clock starts on the 130 questions; there are no scheduled breaks, and pausing the test is not an option, so the 4-hour stamina plan matters. The test supplement is provided at the workstation, and candidates may use the scratch material the center supplies; calculators are typically embedded in the software or prohibited per the vendor rules, so confirm before the appointment. Expect the environment to be quiet and proctored, with a countdown clock visible; pace the paper at roughly 30 questions per hour to leave margin for the chart-and-table items. After submission, the center provides a preliminary result immediately, and the official score report follows through the FAA\u2019s testing portal; a passing written is valid for 24 months toward the ATP practical test, and a failed attempt can be retaken after the FAA\u2019s required waiting period, which candidates should confirm on the testing vendor\u2019s site because the retake rule is set by the FAA, not the center. Afterwards, the written score feeds the next stage: complete the ATP CTP (if not already done) and schedule the practical checkride, and use the remaining written validity window deliberately, because a lapsed written means re-sitting the test.',
    bring: ['Government-issued photo ID (two forms if the center requires it)', 'Booking confirmation and any vendor-issued confirmation code', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone and smartwatch (stored per center rules)', 'Study materials and notes', 'Flight bag and headset', 'Any item on the center\u2019s prohibited list'],
    timeline: [
      { time: '30-60 min before', detail: 'Arrive, check in, present IDs, and complete the center\u2019s security procedures' },
      { time: '0-15 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '0-4 hours', detail: 'Work the 130 questions; pace ~30 questions/hour and leave margin for chart-and-table items' },
      { time: 'Immediately after', detail: 'Preliminary pass/fail result on screen; official score report follows via the FAA portal' }
    ],
    rules: ['No electronic devices in the test room; store them per center rules', 'No scheduled breaks; the 4-hour clock runs continuously', 'The test supplement is provided; scratch material is supplied by the center', 'Confirm the retake waiting-period rule with the testing vendor if you do not pass'],
    afterwards: 'A passing ATM written is valid 24 months toward the ATP practical test. Complete the ATP CTP if not already done, schedule the checkride, and keep building toward the 1,500-hour (or restricted-ATP) requirement. A failed written can be retaken after the FAA-required waiting period.'
  }
};

export default data;
