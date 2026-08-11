// Depth content for: cdl-school-bus-endorsement-knowledge-test
// CDL School Bus Endorsement Knowledge Test
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL endorsement rules are a federal-state mix: the S endorsement\u2019s knowledge-test requirement and 80 percent passing standard come from 49 CFR 383.135, the school bus endorsement scope from 49 CFR 383.93 and 383.123, and the exact question count, background-check mechanics and fee from the state that issues your licence. We state the federal baseline and flag anything a state sets on its own. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class or endorsement, and we use Bus Drivers, Transit and Intercity (SOC 53-3052) as the closest-fit passenger-carrying occupation, with the note that school bus drivers have their own code (SOC 53-3051).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the S endorsement\u2019s 80 percent knowledge-test standard (49 CFR 383.135), the school bus knowledge-test content baseline (49 CFR 383.123), the P-before-S structure and the background-check and ELDT requirements; wage figures against BLS OOH.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$57,440 median for bus drivers, transit and intercity \u2014 the closest-fit passenger-carrying occupation for the S endorsement (BLS, May 2024); school bus drivers are their own BLS code at a $47,040 median',
    summary:
      'The School Bus Endorsement does not create its own BLS occupation \u2014 it is an add-on to a Commercial Driver\u2019s License that authorises you to operate a school bus and transport students, which sits on top of the Passenger Endorsement \u2014 so the salary story is the bus-driving occupation the endorsement qualifies you for. The task directs us to choose between two codes, and we use Bus Drivers, Transit and Intercity (SOC 53-3052) as the closer match because the S endorsement is about carrying passengers by bus: that occupation had a May 2024 median of $57,440, with the lowest 10 percent under $38,250 and the highest 10 percent over $82,640, and employment projected to grow about 4 percent from 2024 to 2034. The more specific code for the actual role, Bus Drivers, School (SOC 53-3051), had a lower May 2024 median of $47,040 \u2014 reflecting the part-time, school-year schedule of much school bus work \u2014 with the lowest 10 percent under $27,680 and the highest 10 percent over $63,810. Both figures should be read together: BLS classifies by job duties, not by endorsement, so no government median exists for "S-endorsed drivers" specifically, and a district or contractor pays by route and schedule, which is why school bus work is often part-time with split shifts. The endorsement matters economically for three reasons we can source directly: it is the hard requirement for school bus work, which some districts and contractors treat as a stable, benefit-bearing role; it signals to employers that the driver has cleared a federal knowledge standard, state background checks, and Entry-Level Driver Training \u2014 a screening package that many school districts require regardless; and it compounds the P endorsement, so a driver with both is qualified for the full range of passenger-carrying work. The honest framing is that the S endorsement does not appear in the BLS wage data, so treat any specific "school bus driver salary" figure as a district or aggregate estimate rather than government data, and read the $47,040 school-bus-driver median as the occupation-specific reference.',
    rows: [
      { label: 'Median annual wage, bus drivers, transit and intercity (closest-fit)', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-3052)' },
      { label: 'Median annual wage, bus drivers, school', value: '$47,040', note: 'BLS OOH, May 2024 (SOC 53-3051) \u2014 the occupation-specific code' },
      { label: 'Lowest/highest 10 percent, school bus drivers', value: 'Under $27,680 / over $63,810', note: 'BLS OOH Pay tab, May 2024 (SOC 53-3051)' },
      { label: 'The endorsement itself', value: 'No separate BLS data', note: 'BLS classifies by job duties, not endorsements; treat any dedicated "S-endorsement salary" as an employer estimate' }
    ],
    growth: 'BLS projects about 4% growth for bus drivers, transit and intercity from 2024 to 2034; school bus drivers are projected at roughly 0% growth with heavy replacement need, reflecting a large, high-turnover workforce.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Bus Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/bus-drivers.htm'
    }
  },

  passRate: {
    headline: 'FMCSA publishes the 80 percent passing standard (49 CFR 383.135) but no national pass rate for the S endorsement knowledge test \u2014 the test is commonly 20 questions in state manuals, and the school bus endorsement adds its own background-check gate',
    summary:
      'The core fact is that the School Bus Endorsement knowledge test has a published passing standard but no published pass rate: 49 CFR 383.135 requires an applicant to correctly answer at least 80 percent of the questions on each CDL knowledge test, and that 80 percent line is the only passing threshold in the federal rule \u2014 it applies per test with no curve or rounding. FMCSA does not release national knowledge-test pass statistics, and neither does any state DMV/SDLA we are aware of, so the percentages you see on commercial apps are those vendors\u2019 own practice-test numbers, not official outcomes. What is verifiable is the structure. The S endorsement (49 CFR 383.93) requires a school bus-specific knowledge test in addition to the Passenger Endorsement knowledge test \u2014 P comes first, and S rides on top of it \u2014 and the school bus test in state manuals is commonly 20 questions, with the 80 percent floor meaning roughly 16 correct, though the exact count is state-set. The content baseline is in 49 CFR 383.123: the proper procedures for loading and unloading students, the use of the emergency exits and warning systems, and the proper procedures at highway-rail grade crossings, plus the driver\u2019s responsibility for student safety. The S endorsement also carries a second, mandatory gate that is not a knowledge test at all: a background check required by your state \u2014 typically fingerprinting, a criminal history check, a sex offender registry check and a driving record review, with some states adding drug and alcohol testing \u2014 because transporting children is the most regulated passenger duty in the CDL system. Note also that the S endorsement triggers the federal Entry-Level Driver Training (ELDT) requirement under 49 CFR Part 380, and most states require a skills test in a school bus as well. The practical reading is that the S endorsement has two independent gates \u2014 an 80 percent knowledge standard and a background-check clearance \u2014 and neither has a published pass rate.',
    source: {
      label: 'eCFR \u2014 49 CFR Part 383 (knowledge tests and endorsements)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat: 'No national or state pass rate for the S endorsement knowledge test is published by FMCSA or the states. What is verifiable is the 80 percent cut score in 49 CFR 383.135, the common 20-question state test, the content baseline in 49 CFR 383.123, the state background-check requirement, and the ELDT trigger under 49 CFR Part 380; the narrative above covers those instead.'
  },

  studyPlan: {
    summary:
      'The School Bus Endorsement Knowledge Test is a recall exam that sits on top of the Passenger Endorsement, and the study plan is short \u2014 budget 6 to 10 hours of focused study \u2014 but the endorsement itself has a longer timeline because of the background-check gate and the P-before-S structure. First, the P endorsement must be in place: S requires P, so the passenger knowledge test and its Entry-Level Driver Training obligations come before the school bus work. The federal content baseline for S is in 49 CFR 383.123: the proper procedures for loading and unloading students, the use of the emergency exits and warning systems, and the proper procedures at highway-rail grade crossings, plus the driver\u2019s responsibility for student safety. Your state\u2019s CDL manual covers this material in a dedicated school bus section, and the test is commonly 20 questions, with the federal 80 percent standard meaning roughly 16 correct on a typical paper. The most effective sequence is: first, read your state\u2019s school bus chapter end to end, since the test is drawn from that manual\u2019s wording; second, master the loading-and-unloading procedure, which is the most heavily tested and the most dangerous part of school bus operation \u2014 the danger zones around the bus, the amber and red warning lights, the stop arm, and the requirement to account for every student; third, learn the railroad-crossing procedure, which for school buses is a mandatory full stop with the window and door open, looking and listening before crossing; fourth, study the emergency-exit and evacuation procedures, including when to evacuate and how to account for all students; and fifth, drill your state\u2019s official practice questions until you score above 80 percent consistently. In parallel, start the background check early, because fingerprinting, the criminal history and sex offender checks, and any drug testing have their own processing time and the endorsement cannot issue without clearance.',
    totalHours: '6-10 hours of focused study for the S knowledge test, plus the P endorsement, the background check, and ELDT lead time',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'P endorsement foundation and school bus chapter',
        tasks: [
          'Complete or confirm the P endorsement first \u2014 S requires P, and the passenger material carries over',
          'Read the school bus chapter of your state\u2019s CDL manual end to end',
          'Start the state background check application, since fingerprinting and the registry checks have their own processing time',
          'Confirm the ELDT provider for the S endorsement requirement'
        ],
        hours: '3-5 hrs/week'
      },
      {
        label: 'Weeks 3-4',
        focus: 'School bus content and timed practice',
        tasks: [
          'Master the loading-and-unloading procedure: danger zones, warning lights, stop arm, student accountability',
          'Learn the railroad-crossing rule: mandatory stop, window and door open, look and listen before crossing',
          'Study the emergency-exit and evacuation procedures, including when to evacuate and how to account for students',
          'Drill official practice questions until you score above 80 percent consistently, then book the test'
        ],
        hours: '3-5 hrs/week'
      }
    ],
    variants: [
      { label: 'Already holding P and a CDL', detail: 'A focused 1-2 week plan. The passenger foundation is in place; the work is the school bus chapter, the loading-and-unloading sequence, the background check, and confirming the ELDT record.' },
      { label: 'Starting from a CLP', detail: 'Budget extra weeks for the full sequence: the licence knowledge tests, the P endorsement, the S endorsement, the background check, and the ELDT training all precede the school bus skills test.' },
      { label: 'Returning after a lapsed endorsement', detail: 'The knowledge test is retaken when the CDL renews, and the background check must be current; re-run the chapter, re-file the background check early, and confirm the ELDT record is still valid for your state.' }
    ]
  },

  prepStrategies: {
    summary:
      'The School Bus Endorsement Knowledge Test is a recall exam with a hard 80 percent floor, and the strategy that pays off is narrower than candidates expect: learn your state\u2019s school bus chapter, memorise the loading-and-unloading procedure and the danger zones, and drill timed practice until you score above 80 percent consistently. The single most common failure is treating the S test as an extension of the passenger material \u2014 the items are specific to school bus operation, and candidates who do not read the school bus chapter miss the warning-light, stop-arm and danger-zone items that dominate the paper. Second, master the loading-and-unloading procedure as a fixed sequence \u2014 the danger zone checks (the 10-foot areas around the bus), the amber-to-red warning light sequence, the stop arm, and the requirement to count and account for every student \u2014 because it is the most heavily tested and the most dangerous part of school bus operation. Third, learn the railroad-crossing rule cold: school buses must stop at all crossings, even with no train visible, opening the window and door to look and listen before crossing, and the test asks about that procedure directly. Fourth, study the emergency-exit and evacuation content, including when to evacuate and how to account for all students. Fifth, use your state\u2019s official practice questions rather than a national app, because the bank follows your state\u2019s manual wording and the 80 percent floor punishes exact-word traps. Finally, handle the background check and the ELDT requirement early \u2014 the background check is a mandatory gate with its own processing time, and the S endorsement triggers ELDT \u2014 so no amount of knowledge-test study substitutes for the screening.',
    items: [
      {
        title: 'Read the school bus chapter, not a general CDL app',
        detail: 'The items are specific to school bus operation \u2014 warning lights, stop arm, danger zones, student loading. The passenger material is the foundation, but it will not carry the S test.'
      },
      {
        title: 'Master the loading-and-unloading sequence',
        detail: 'The danger zones (about 10 feet around the bus), the amber-to-red warning light sequence, the stop arm, and counting every student form the most heavily tested and most dangerous procedure.'
      },
      {
        title: 'Learn the railroad-crossing rule cold',
        detail: 'School buses stop at all crossings, even with no train visible, opening the window and door to look and listen before crossing. The test asks about this procedure directly.'
      },
      {
        title: 'Study the emergency-exit and evacuation content',
        detail: 'When to evacuate, which exits to use, and the duty to account for all students are tested as a distinct cluster.'
      },
      {
        title: 'Use state-specific practice questions',
        detail: 'The bank follows your state\u2019s manual wording, and the 80 percent floor punishes exact-word traps.'
      },
      {
        title: 'Start the background check early',
        detail: 'The S endorsement cannot issue without a state background check \u2014 fingerprinting, criminal history, sex offender registry and driving record, with drug testing in some states. It has its own processing time and is a gate no studying substitutes for.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The School Bus Endorsement Knowledge Test is cheap to prepare for because the authoritative source \u2014 your state\u2019s CDL manual school bus chapter and its official practice questions \u2014 costs nothing, and the official material is the only source the test is written from, so a free study path is the complete one. The real costs sit around the test: the knowledge test fee is set by your state and is commonly in the $10 to $40 range, the state background check carries its own state-set fee of roughly $30 to $100 plus a fingerprinting cost, and the Entry-Level Driver Training requirement is a separate purchased training step \u2014 typically $100 to $500 from an FMCSA-registered provider. Because the S endorsement has multiple gates, the budget is broader than a single test fee: the background check and the ELDT training are mandatory parts of the endorsement, not optional extras, and both have processing lead times. The comparison below separates the free official material from the test, the background check, the ELDT step and the paid apps, with prices current to this review. Paid apps earn their place only as repetition engines once the official material is clean, and beware any product that quotes a "school bus pass rate," since that figure is not published by any government \u2014 the 80 percent standard in 49 CFR 383.135 is the passing rule, and there is no pass-rate statistic to compare against.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual \u2014 school bus chapter', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from \u2014 read it first and last'] },
      { label: 'Your state DMV official practice questions', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'S endorsement knowledge test', values: ['Fee set by state (often $10-40)', 'Computer-based at a DMV/SDLA', 'The test itself \u2014 80% passing per 49 CFR 383.135'] },
      { label: 'State background check', values: ['~$30-100 plus fingerprinting, state-set', 'Fingerprinting, criminal history, sex offender registry, driving record', 'Mandatory gate \u2014 the endorsement cannot issue without clearance'] },
      { label: 'Entry-Level Driver Training (ELDT)', values: ['~$100-500, provider-set', 'Online or classroom, FMCSA-registered provider', 'Mandatory for the S endorsement \u2014 required before the skills test'] },
      { label: 'Commercial school bus practice apps', values: ['Free tier; ~$5-15/mo', 'Mobile app', 'Extra repetition once the official material is clean'] },
    ],
    footnote: 'Prices checked 2026-08 in USD and vary by state and provider; the background-check fee and ELDT pricing are separate from the state test fee. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'Nearly every avoidable failure on the School Bus Endorsement comes from one of three roots: treating the S test as an extension of the passenger material instead of studying the school bus chapter, neglecting the background-check and ELDT lead times, or missing the 80 percent floor on a short 20-question test. The content error is the most common \u2014 candidates rely on their passenger knowledge and never read the school bus chapter, then miss the warning-light, stop-arm, danger-zone and railroad-crossing items that dominate the paper. The scheduling error is the most expensive \u2014 the S endorsement cannot issue without a state background check that has its own fee and processing time, and it triggers the ELDT requirement, so a candidate who studies but has no screening or training record is delayed by weeks. The scoring error is the most painful \u2014 on a commonly 20-question paper, 80 percent means 16 correct and a 15 is a full failure and a re-take fee. Candidates also make avoidable process errors: skipping the railroad-crossing rule, using a national app instead of the state manual\u2019s wording, and trusting vendor "pass rates" that no government publishes. The mistakes below each carry a concrete fix, and all of them are cheaper to prevent than to re-take or re-screen.',
    items: [
      {
        mistake: 'Studying passenger material instead of the school bus chapter',
        fix: 'The items are specific to school bus operation \u2014 warning lights, stop arm, danger zones, student loading, evacuation. Read the school bus chapter end to end; the passenger material is the foundation but will not carry the S test.'
      },
      {
        mistake: 'Forgetting the background check gate',
        fix: 'The S endorsement cannot issue until the state background check clears \u2014 fingerprinting, criminal history, sex offender registry and driving record, with drug testing in some states. Start it early; it has its own fee and processing time.'
      },
      {
        mistake: 'Assuming a pass is rounded or curved',
        fix: '49 CFR 383.135 sets a flat 80 percent per knowledge test with no curve. On a 20-question paper that is 16 correct; a 15 is a fail. Bank the loading-and-unloading items and do not gamble the clock on one hard question.'
      },
      {
        mistake: 'Skipping the railroad-crossing rule',
        fix: 'School buses must stop at all crossings, even with no train visible, opening the window and door to look and listen. Candidates who assume the general vehicle rule applies lose a whole cluster of items.'
      },
      {
        mistake: 'Forgetting the ELDT requirement',
        fix: 'The S endorsement triggers Entry-Level Driver Training under 49 CFR Part 380, and the skills test cannot proceed without a completed record from a registered provider. Confirm your ELDT record is in place and current.'
      },
      {
        mistake: 'Using a national app that quotes a "pass rate"',
        fix: 'No pass rate is published by FMCSA or any state; a vendor\u2019s percentage is its own practice-test metric. Anchor prep to your state\u2019s manual and official questions instead.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The School Bus Endorsement Knowledge Test is a multiple-choice exam administered at a state DMV/SDLA, taken after the Passenger Endorsement knowledge test, with the federal 80 percent passing standard in 49 CFR 383.135 and a question count that is commonly 20 in state manuals, set by your state. The content baseline is the school bus knowledge area in 49 CFR 383.123: the proper procedures for loading and unloading students, the use of the emergency exits and warning systems, and the proper procedures at highway-rail grade crossings, plus the driver\u2019s responsibility for student safety. Items are single-best-answer by design, and because there is no curve, your only job is to push the correct count above the 80 percent line \u2014 on a 20-question paper that is 16 correct, so the loading-and-unloading and danger-zone items must be banked before the harder procedure questions. The loading-and-unloading procedure and the railroad-crossing rule are the largest clusters, with the emergency-exit, warning-system and student-safety items completing the paper. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Loading-and-unloading procedure items', share: 'A large share of the paper', detail: 'The danger zones around the bus, the amber-to-red warning light sequence, the stop arm, and counting and accounting for students \u2014 the most heavily tested procedure.' },
      { name: 'Railroad-crossing items', share: 'A large share of the paper', detail: 'The mandatory full stop, the window and door open, looking and listening before crossing \u2014 tested as a distinct school bus rule.' },
      { name: 'Emergency-exit and evacuation items', share: 'A minority of items', detail: 'When to evacuate, which exits to use, and the driver\u2019s duty to account for all students.' },
      { name: 'Warning-system and safety items', share: 'A minority of items', detail: 'The 8-light warning system, mirror use and adjustment, and student behaviour management.' }
    ],
    samples: [
      {
        prompt: 'What is the most dangerous area around a school bus, which the driver must check before moving?',
        options: ['A. The area immediately behind the bus', 'B. The danger zones \u2014 the areas close to the bus on all sides, especially in front where small students can be hidden', 'C. The side opposite the driver', 'D. The parking lot entrance'],
        answer: 'B',
        explanation: 'B is correct \u2014 the danger zones are the areas close to the bus on all sides (commonly about 10 feet in front, 10 feet on each side, and behind), and the area directly in front is especially dangerous because small students can be hidden from the driver\u2019s view. A names only one of the zones, and C and D name areas that are not the defined bus danger zones. The item tests the danger-zone knowledge that anchors the loading-and-unloading cluster.'
      },
      {
        prompt: 'When approaching a railroad crossing in a school bus, the driver must:',
        options: ['A. Stop, open the window and service door, look and listen for trains, then proceed when safe', 'B. Slow down and proceed if the crossing looks clear', 'C. Stop only if a train is visible', 'D. Sound the horn and cross without stopping'],
        answer: 'A',
        explanation: 'A states the correct procedure: school buses must stop at all railroad crossings, even with no train visible, and the driver opens the driver-side window and the service door, looks both directions and listens before proceeding. B and C are wrong because the stop is mandatory and is not conditional on seeing a train. D is wrong because sounding the horn does not replace the stop and the look-listen check. The item tests the school bus railroad-crossing rule directly.'
      },
      {
        prompt: 'How should the driver use the school bus warning lights when preparing to stop to load or unload students?',
        options: ['A. Activate the amber warning lights in advance, then the red warning lights and stop arm when fully stopped', 'B. Turn on the red lights only when students are already on the bus', 'C. Use the headlights as the only warning', 'D. Deactivate all warning lights before stopping'],
        answer: 'A',
        explanation: 'A states the correct sequence: amber warning lights activate in advance of the stop to alert traffic, and the red warning lights and stop arm activate when the bus is fully stopped and students are loading or unloading. B is wrong because the red lights must be on during the loading or unloading, not after. C is wrong because headlights do not substitute for the warning-light system. D is wrong because deactivating the lights removes the protection the system provides. The item tests the warning-light sequence, a core school bus operation topic.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.123 school bus knowledge area), not live exam items.'
  },

  examDay: {
    summary:
      'The School Bus Endorsement Knowledge Test is taken at a state DMV/SDLA office, by computer, on the same appointment pattern as the other CDL knowledge tests, and it is passed separately under the federal 80 percent standard, on a paper commonly of 20 questions. Because the S endorsement has multiple gates, exam-day planning starts weeks earlier: the Passenger Endorsement must be in place first, the state background check must be complete or in motion, and the Entry-Level Driver Training record must be confirmed \u2014 so confirm all three before you pay for the knowledge test, because the knowledge test is only one gate and the endorsement cannot issue without the screening and the training record. Bring the same identity, residency and lawful-presence documents your DMV requires for the licence application, plus the correct fee for the endorsement test. The test itself is a short, recall-heavy multiple-choice paper focused on the school bus material \u2014 loading and unloading, danger zones, warning lights, railroad crossings, and emergency evacuation \u2014 so pace it to bank the loading-and-unloading items first, then return to the harder procedure questions; there is no curve, and on a 20-question paper a single question below the 80 percent line is a full failure. On a pass, the S endorsement is added to your CDL or CLP once the background check clears, and you can schedule the school bus skills test; on a fail, most states allow a prompt retake for a new fee, so re-read the school bus chapter and rebook rather than guessing the same material will stick.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV\u2019s document list',
      'Confirmation that the Passenger Endorsement is in place \u2014 S requires P first',
      'Confirmation that your state background check is complete or in progress \u2014 the endorsement cannot issue without clearance',
      'Confirmation that your Entry-Level Driver Training record is complete at a registered provider',
      'Correct fee for the endorsement knowledge test, set by your state'
    ],
    leave: [
      'Phones, smartwatches and earbuds \u2014 secured before you enter the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'A translator or interpreter \u2014 states may offer the test in another language but not a third-party interpreter',
      'Any expectation of a driving component \u2014 this is a knowledge test only; the school bus skills test is separate'
    ],
    timeline: [
      { time: '4-8 weeks before', detail: 'Confirm the P endorsement, file the state background check, and complete the Entry-Level Driver Training \u2014 all three are gates the knowledge test cannot bypass.' },
      { time: 'The week before', detail: 'Confirm the background check status and the ELDT record, assemble the DMV document list, and score above 80 percent on timed practice tests.' },
      { time: 'Day before', detail: 'Re-run one timed practice test; re-read only the sections where you missed items. Confirm the office location and appointment.' },
      { time: 'At the terminal', detail: 'Answer the loading-and-unloading and danger-zone items first, then the railroad-crossing and evacuation items; there is no curve, only the 80 percent floor.' },
      { time: 'On a pass', detail: 'The S endorsement is added to your CDL or CLP once the background check clears, and you can schedule the school bus skills test.' },
      { time: 'On a fail', detail: 'Most states allow a prompt retake for a new fee; re-read the school bus chapter and rebook rather than re-sitting the same material.' }
    ],
    rules: [
      'Passing standard is 80 percent on the endorsement knowledge test per 49 CFR 383.135 \u2014 a flat floor, no curve, no rounding.',
      'The S endorsement requires the Passenger Endorsement first (49 CFR 383.93), and a state background check must clear before the endorsement issues.',
      'The S endorsement triggers the federal Entry-Level Driver Training requirement under 49 CFR Part 380.',
      'The knowledge test is commonly 20 questions in state manuals, with the count set by your state.',
      'The endorsement rides on your CDL and is retested when the CDL renews.',
      'Retake policy, question count, background-check mechanics and fee are set by the state; verify all with your DMV.'
    ],
    afterwards:
      'On a pass, the S endorsement is added to your CDL or CLP once the state background check clears, and you can schedule the school bus skills test \u2014 because the knowledge test is only one gate, and the P-before-S structure, the ELDT record and the background clearance are the rest of the package. Diary the renewal dates immediately: the endorsement is retested when the CDL renews, and the background check must stay current, so the school bus credential quietly lapses if either is missed. On a fail, resist the urge to immediately re-sit the same material \u2014 most states allow a prompt retake for a new fee, but the cheap move is to re-read the school bus chapter and re-run official practice tests until you score above 80 percent consistently, because the floor is unforgiving and one question below the line is a full failure. Whichever way it goes, remember that the S endorsement is a multi-gate credential: the 80 percent knowledge standard is federal, the question count and background-check mechanics are state-set, and the screening \u2014 not the studying \u2014 is the gate that takes the calendar time.'
  }
};

export default data;
