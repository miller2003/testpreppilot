// Depth content for: cdl-hazmat-endorsement-knowledge-test
// CDL endorsement rules come from 49 CFR Parts 383 and 1572 (TSA) and
// state DMV materials; wage figures come from BLS.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL endorsement rules are a federal-state mix: the H endorsement\u2019s knowledge-test requirement and 80 percent passing standard come from 49 CFR 383.135, the TSA security threat assessment from 49 CFR Part 1572, and the exact question count and fee from the state that issues your licence. We state the federal baseline and flag anything a state sets on its own. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class or endorsement, so the closest official fit for a hazmat-endorsed driver is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the H endorsement\u2019s 80 percent knowledge-test standard (49 CFR 383.135), the TSA threat assessment requirement (49 CFR Part 1572), and the endorsement scope in 49 CFR 383.93/383.117; wage figures against BLS OOH.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers — the occupation the H endorsement keeps you eligible for (BLS, May 2024)',
    summary:
      'The Hazmat Endorsement does not create its own BLS occupation — it is an add-on to a Commercial Driver\u2019s License that allows you to transport hazardous materials in commerce, which keeps you eligible for a wide share of trucking work — so the salary story is the base occupation plus the premium employers pay for the endorsement. The closest official occupation is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), which had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800. BLS does not isolate hazmat-endorsed drivers in its wage series, so we cannot source a separate median for them; what the employment data shows is that the base occupation is enormous and durable — 2,235,100 jobs in 2024, projected to grow about 4 percent by 2034, with roughly 237,600 openings a year from growth and replacement. The hazmat endorsement matters economically for three reasons we can source directly: it expands the set of loads a driver may haul (tankers, placarded freight, and dedicated hazmat lanes are off-limits without it), it is a hard prerequisite for some of the higher-paying niches such as fuel hauling and chemical transport, and it signals to employers that a driver has cleared both a federal knowledge standard and a TSA security threat assessment — a screening that many carriers treat as a trust marker even outside hazmat work. The honest framing is that the endorsement does not appear in the BLS wage data, so treat any specific "hazmat driver salary" figure you see on a job board as an employer or aggregate estimate rather than government data. The credential\u2019s practical value is eligibility: without it, a substantial fraction of freight simply cannot be driven, and with it the pool of jobs you can take widens.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,640', note: 'BLS OEWS May 2024 (10th percentile)' },
      { label: 'Highest 10 percent', value: 'more than $78,800', note: 'BLS OEWS May 2024 (90th percentile)' },
      { label: 'Employment, 2024', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'The endorsement itself', value: 'No separate BLS data', note: 'BLS does not isolate hazmat-endorsed drivers; treat any dedicated "hazmat salary" as an employer estimate' }
    ],
    growth: '+4% projected change 2024-34 (growth), ~237,600 openings a year for the base occupation; the H endorsement widens the loads and niches a driver can take.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },
  passRate: {
    headline: 'FMCSA publishes the 80 percent passing standard (49 CFR 383.135) but no national pass rate, and the TSA threat assessment (49 CFR Part 1572) is the endorsement\u2019s other mandatory gate',
    summary:
      'The core fact is that the Hazmat Endorsement knowledge test has a published passing standard but no published pass rate: 49 CFR 383.135 requires an applicant to correctly answer at least 80 percent of the questions on each CDL knowledge test, and that 80 percent line is the only passing threshold in the federal rule — it applies per test with no curve or rounding. FMCSA does not release national knowledge-test pass statistics, and neither does any state DMV/SDLA we are aware of, so the percentages you see on commercial apps are those vendors\u2019 own practice-test numbers, not official outcomes. What is verifiable is the structure. The H endorsement (49 CFR 383.93 and 383.117) requires a hazmat-specific knowledge test on top of the General Knowledge test, and the question count is set by your state — commonly around 30 questions in state manuals, with the 80 percent federal floor meaning roughly 24 of 30 correct, though the exact count varies by state. The endorsement has a second, mandatory gate that is not a knowledge test at all: the TSA security threat assessment under 49 CFR Part 1572, which includes a background check and fingerprinting and must be completed before a state may issue the H endorsement; it is valid for five years, and applicants who fail the assessment are disqualified from the endorsement. Note also that the Hazmat endorsement is one of the CDL endorsements that does NOT trigger the federal Entry-Level Driver Training (ELDT) requirement — that applies to Class A/B licences and the passenger and school bus endorsements — but the TSA assessment fee and background are unavoidable. The practical reading of the rules is that the H endorsement has two independent gates, and neither has a published pass rate.',
    source: {
      label: 'eCFR — 49 CFR Part 383 (knowledge tests and endorsements) and Part 1572 (TSA threat assessments)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat: 'No national or state pass rate for the Hazmat endorsement knowledge test is published by FMCSA or the states. What is verifiable is the 80 percent cut score in 49 CFR 383.135, the common state question count, and the TSA threat assessment requirement in 49 CFR Part 1572; the narrative above covers those instead.'
  },
  studyPlan: {
    summary:
      'The Hazmat Endorsement Knowledge Test is a reading-and-recall exam on top of the General Knowledge test, and the study plan is shorter than the licence work: budget 8 to 15 hours of focused study, and note that the endorsement cannot be added until you hold a Commercial Learner\u2019s Permit or CDL, so the licence knowledge tests come first. The federal content baseline is in 49 CFR 383.117: the rules for transporting hazardous materials, including the hazard classes and materials that require placarding, the purpose and use of the Hazardous Materials Regulations (49 CFR Parts 171-180), driver responsibility for shipment documents and security, and the bulk and non-bulk packaging rules. Your state\u2019s CDL manual covers this material in a dedicated hazmat section, and the question count is state-set — commonly around 30 questions, with the federal 80 percent standard meaning roughly 24 correct on a 30-question paper. The most effective sequence is: first, read your state\u2019s hazmat chapter end to end, since the test is drawn from that manual\u2019s wording; second, memorise the nine hazard classes and the placarding requirements, which anchor a large share of the items; third, learn the driver\u2019s paperwork duties — shipping papers, the hazardous materials endorsement basics, and the security plan obligations under 49 CFR Part 172; fourth, drill your state\u2019s official practice questions or an official-equivalent set until you are scoring above 80 percent consistently; and fifth, budget for the TSA threat assessment, which is a separate fee, fingerprinting session, and five-year validity period that must be in place before the endorsement is issued. The highest-yield habit is learning the hazard class numbers and names cold, because they underpin both the placard items and the "what must a driver do" items.',
    totalHours: '8-15 hours of focused study on top of the licence knowledge tests',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Hazmat chapter and hazard classes',
        tasks: [
          'Read the hazmat chapter of your state\u2019s CDL manual end to end',
          'Memorise the nine hazard classes and their numbers',
          'Learn which materials require placards and what each placard means',
          'Start the TSA threat assessment application, since it has its own fee and fingerprinting session'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Regulations and driver duties',
        tasks: [
          'Study the Hazardous Materials Regulations framework (49 CFR Parts 171-180) as the manual frames it',
          'Learn shipping papers, driver responsibility for documents, and securement basics',
          'Study the security requirements in 49 CFR Part 172 and driver security duties',
          'Practise the bulk versus non-bulk packaging distinctions'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Timed practice and booking',
        tasks: [
          'Take timed practice tests drawn from your state\u2019s question bank',
          'Re-read only the sections where you miss items',
          'Confirm the TSA assessment is complete or scheduled — the endorsement cannot issue without it',
          'Book the endorsement knowledge test with your DMV/SDLA'
        ],
        hours: '3-5 hrs'
      }
    ],
    variants: [
      { label: 'Already holding a CDL', detail: 'A focused 1-2 week plan. The licence knowledge is behind you; the work is the hazmat chapter, the hazard classes, and the TSA assessment timeline.' },
      { label: 'Adding hazmat at initial licence application', detail: 'Budget an extra week and the TSA assessment lead time; the endorsement tests sit alongside the General Knowledge, Combination, and Air Brakes tests on the same application.' },
      { label: 'Renewing after five years', detail: 'The knowledge test must be retaken, and the TSA threat assessment renews on a five-year cycle; start the TSA re-application early so it does not delay the renewal.' }
    ]
  },
  prepStrategies: {
    summary:
      'The Hazmat Endorsement Knowledge Test is a recall exam with a hard 80 percent floor, and the strategy that pays off is narrower than candidates expect: learn your state\u2019s hazmat chapter, memorise the hazard class numbers and placards, and drill timed practice until you score above 80 percent consistently. The single most common failure is treating the endorsement test as an extension of general driving knowledge — the items are specific to the Hazardous Materials Regulations, and candidates who do not read the hazmat chapter miss the placard and packaging items that dominate the paper. Second, learn the nine hazard classes and their numbers cold, because they underpin both the placard items and the "which document" and "what must a driver do" items. Third, understand the driver\u2019s security duties under 49 CFR Part 172, since the H endorsement was created partly in response to security concerns and the test reflects that history. Fourth, use your state\u2019s official practice questions rather than a national app, because the question bank follows your state\u2019s manual wording and the 80 percent floor punishes exact-word traps. Fifth, handle the TSA assessment early — it is a separate fee, fingerprinting session, and five-year validity cycle, and the endorsement cannot be issued until it is complete. Finally, remember that the endorsement is not a licence: it rides on your CDL and must be renewed when the CDL renews, with the knowledge test retaken on that cycle.',
    items: [
      {
        title: 'Read the hazmat chapter, not a general driving app',
        detail: 'The items are specific to the Hazardous Materials Regulations and your state\u2019s hazmat chapter; general driving knowledge will not carry this test.'
      },
      {
        title: 'Memorise the nine hazard classes and placards',
        detail: 'Hazard class numbers, names, and their placards anchor the placard and packaging items that dominate the paper.'
      },
      {
        title: 'Learn the driver\u2019s security duties',
        detail: 'The H endorsement exists partly for security reasons; know the security plan and reporting duties in 49 CFR Part 172.'
      },
      {
        title: 'Use state-specific practice questions',
        detail: 'The bank follows your state\u2019s manual wording, and the 80 percent floor punishes exact-word traps.'
      },
      {
        title: 'Start the TSA assessment early',
        detail: 'It is a separate fee and fingerprinting session with a five-year validity; the endorsement cannot issue without it.'
      },
      {
        title: 'Plan for renewal',
        detail: 'The knowledge test is retaken when the CDL renews; the TSA threat assessment renews on a five-year cycle.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'The Hazmat Endorsement Knowledge Test is cheap to prepare for because the authoritative source — your state\u2019s CDL manual hazmat chapter and its official practice questions — costs nothing. The two real costs are the test and the TSA threat assessment: the endorsement knowledge test fee is set by your state, and the TSA assessment carries its own fee plus a fingerprinting session. Paid apps earn their place only as repetition engines once the official material is clean, and beware any product that quotes a "hazmat pass rate," since that figure is not published by any government.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual — hazmat chapter', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from — read it first and last'] },
      { label: 'Your state DMV official practice questions', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'Hazmat endorsement knowledge test', values: ['Fee set by state (often $10-40)', 'Computer-based at a DMV/SDLA', 'The test itself — 80% passing per 49 CFR 383.135'] },
      { label: 'TSA security threat assessment', values: ['Fee set by TSA (roughly $100-130 range), separate from the test', 'Background check with fingerprinting', 'Mandatory second gate — valid five years, no pass rate published'] },
      { label: 'Commercial hazmat practice apps', values: ['Free tier; ~$5-15/mo', 'Mobile app', 'Extra repetition once the official material is clean'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and vary by state; the TSA assessment fee is set by TSA and is separate from any state test fee. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'Nearly every avoidable failure on the Hazmat endorsement comes from one of three roots: studying general driving material instead of the hazmat chapter, neglecting the TSA threat assessment timeline, or missing the 80 percent floor on a short test. The scheduling and version errors below waste the most money, because each means a re-take or a delayed endorsement.',
    items: [
      {
        mistake: 'Studying general CDL material instead of the hazmat chapter',
        fix: 'The items are specific to the Hazardous Materials Regulations and your state\u2019s hazmat chapter. Read that chapter end to end and drill its wording; general driving knowledge will not carry the test.'
      },
      {
        mistake: 'Forgetting the TSA threat assessment',
        fix: 'The H endorsement cannot be issued until the TSA security threat assessment under 49 CFR Part 1572 is complete — a separate fee, background check, and fingerprinting session with a five-year validity. Start it early.'
      },
      {
        mistake: 'Assuming a pass is rounded or curved',
        fix: '49 CFR 383.135 sets a flat 80 percent per knowledge test with no curve. On a 30-question paper that is roughly 24 correct; a 23 is a fail. Bank the easy items and do not gamble the clock on one hard question.'
      },
      {
        mistake: 'Ignoring the driver security duties',
        fix: 'The H endorsement tests security awareness — shipping papers, placarding, and the security plan duties in 49 CFR Part 172. Candidates who skip this section lose a whole cluster of items.'
      },
      {
        mistake: 'Assuming the endorsement never expires',
        fix: 'The H endorsement rides on your CDL and is retested when the CDL renews, and the TSA assessment renews on a five-year cycle. Diary both dates the week you pass.'
      },
      {
        mistake: 'Using a national app that quotes a "hazmat pass rate"',
        fix: 'No pass rate is published by FMCSA, TSA, or any state; a vendor\u2019s percentage is its own practice-test metric. Anchor prep to your state\u2019s manual and official questions instead.'
      }
    ]
  },
  questionTypes: {
    summary:
      'The Hazmat Endorsement Knowledge Test is a multiple-choice exam administered at a state DMV/SDLA, taken after the General Knowledge test, with the federal 80 percent passing standard in 49 CFR 383.135 and the question count set by your state — commonly around 30 questions. The content baseline is the hazmat knowledge area in 49 CFR 383.117: the rules for transporting hazardous materials, the hazard classes and placarding requirements, the driver\u2019s responsibility for shipping papers and documents, and the security requirements under 49 CFR Part 172. Items are single-best-answer by design, and because there is no curve, your only job is to push the correct count above the 80 percent line. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Hazard class and placard items', share: 'A large share of the paper', detail: 'Identify the nine hazard classes by name and number and which materials require placards; candidates who memorise the classes bank this cluster.' },
      { name: 'Driver responsibility and documents', share: 'A large share of the paper', detail: 'Shipping papers, driver responsibility for documentation, and what a driver must do before and during a hazmat haul.' },
      { name: 'Packaging and securement', share: 'A minority of items', detail: 'Bulk versus non-bulk packaging rules and basic securement duties under the Hazardous Materials Regulations.' },
      { name: 'Security requirements', share: 'A minority of items', detail: 'The security plan, awareness, and reporting duties in 49 CFR Part 172 — a deliberate part of the H endorsement curriculum.' }
    ],
    samples: [
      {
        prompt: 'Which of the following materials generally requires a placard on the vehicle when transported in commerce?',
        options: ['A. Groceries in sealed cartons', 'B. A hazardous material covered by the Hazardous Materials Regulations in reportable quantity', 'C. Personal luggage', 'D. Unmarked ordinary freight'],
        answer: 'B',
        explanation: 'The Hazardous Materials Regulations require placarding when a vehicle carries hazardous materials in the quantities and classes the rules specify. B names that condition. A, C, and D describe ordinary, non-hazmat cargo that does not trigger the placarding rules — this is the classic "which material is hazardous" discriminator the test uses.'
      },
      {
        prompt: 'The nine hazard classes on a placard are identified by:',
        options: ['A. A number and a descriptive name', 'B. The colour of the truck only', 'C. The driver\u2019s route number', 'D. The shipping company\u2019s logo'],
        answer: 'A',
        explanation: 'Each of the nine hazard classes is identified by a class number and name (for example, Class 3 Flammable Liquids), displayed on placards and labels. The test rewards knowing the numbers and names cold. B, C, and D describe irrelevant identifiers that no placard uses.'
      },
      {
        prompt: 'Before transporting a placarded hazardous material, the driver must ensure that:',
        options: ['A. The shipping papers are complete and accurate', 'B. The shipment is unmarked', 'C. The load is loaded without any paperwork', 'D. No emergency contact is listed'],
        answer: 'A',
        explanation: 'The driver is responsible for ensuring the shipment is documented: shipping papers must be complete, accurate, and carried in the cab. A states that duty directly. B, C, and D each describe the opposite of the regulatory requirement, which is exactly how the distractors are built on this test.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.117 hazmat knowledge area), not live exam items.'
  },
  examDay: {
    summary:
      'The Hazmat Endorsement Knowledge Test is taken at a state DMV/SDLA office, by computer, on the same appointment pattern as the other CDL knowledge tests, and it is passed separately under the federal 80 percent standard. Because the H endorsement has two gates, exam day planning starts weeks earlier with the TSA threat assessment: the endorsement cannot be issued until the TSA background check and fingerprinting are complete, so confirm the assessment result is on file before you pay for the knowledge test. Bring the same identity, residency, and lawful-presence documents your DMV requires for the licence application, plus the correct fee for the endorsement test. The test itself is a short, recall-heavy multiple-choice paper — commonly around 30 questions in most states — so pace it to bank the easy hazard-class and placard items first, then return to the harder regulatory items; there is no curve, and a one-question shortfall is a full failure. On a pass, the H endorsement is added to your CDL or CLP once the TSA assessment is confirmed; on a fail, most states allow a prompt retake for a new fee, so re-read the hazmat chapter and rebook rather than guessing the same material will stick.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV\u2019s document list',
      'Confirmation that your TSA security threat assessment is complete — the endorsement cannot issue without it',
      'Correct fee for the endorsement knowledge test, set by your state',
      'Your CLP or CDL, since the endorsement is added to an existing licence document',
      'Your application or confirmation number if you booked online'
    ],
    leave: [
      'Phones, smartwatches, and earbuds — secured before you enter the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'A translator or interpreter — states may offer the test in another language but not a third-party interpreter',
      'Any expectation of a driving component — this is a knowledge test only'
    ],
    timeline: [
      { time: '4-6 weeks before', detail: 'File the TSA threat assessment application and schedule fingerprinting; the assessment has its own fee and processing time.' },
      { time: 'The week before', detail: 'Confirm the TSA assessment is complete, assemble the DMV document list, and score above 80 percent on timed practice tests.' },
      { time: 'Day before', detail: 'Re-run one timed practice test; re-read only the sections where you missed items. Confirm the office location and appointment.' },
      { time: 'At the terminal', detail: 'Answer the quick hazard-class and placard items first, then return to the harder regulatory items; there is no curve, only the 80 percent floor.' },
      { time: 'On a pass', detail: 'The H endorsement is added to your CDL or CLP once the TSA assessment is confirmed on file.' },
      { time: 'On a fail', detail: 'Most states allow a prompt retake for a new fee; re-read the hazmat chapter and rebook rather than re-sitting the same material.' }
    ],
    rules: [
      'Passing standard is 80 percent on the endorsement knowledge test per 49 CFR 383.135 — a flat floor, no curve, no rounding.',
      'The TSA security threat assessment under 49 CFR Part 1572 must be complete before the H endorsement can be issued; it is valid five years.',
      'The H endorsement knowledge test is taken in addition to the General Knowledge test, with the question count set by your state (commonly around 30).',
      'The H endorsement does not trigger the federal ELDT requirement, which applies to Class A/B licences and the P and S endorsements.',
      'The endorsement rides on your CDL and is retested when the CDL renews; the TSA assessment renews on a five-year cycle.',
      'Retake policy, question count, and fee are set by the state, not by federal rule; verify all three with your DMV.'
    ],
    afterwards:
      'On a pass, the H endorsement is added to your CDL or CLP once the TSA assessment is confirmed, and the combination of the endorsement and a current medical certificate makes you eligible for hazmat-hauling work — a meaningful share of the higher-paying freight niches. Diary the two renewal dates immediately: the knowledge test is retaken when the CDL renews, and the TSA threat assessment renews on a five-year cycle, so the endorsement quietly lapses if either is missed. On a fail, resist the urge to immediately re-sit the same material — most states allow a prompt retake for a new fee, but the cheap move is to re-read the hazmat chapter and re-run official practice tests until you are scoring above 80 percent consistently, because the floor is unforgiving and a one-question shortfall is a full failure. Whichever way it goes, remember that the H endorsement is a two-gate credential: the 80 percent knowledge standard is federal, the question count and fee are state-set, and the TSA background check is the gate that no amount of studying can substitute for.'
  }
};

export default data;
