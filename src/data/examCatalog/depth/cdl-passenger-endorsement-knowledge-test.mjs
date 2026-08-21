// Depth content for: cdl-passenger-endorsement-knowledge-test
// CDL Passenger Endorsement Knowledge Test
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL endorsement rules are a federal-state mix: the P endorsement\u2019s knowledge-test requirement and 80 percent passing standard come from 49 CFR 383.135, the passenger endorsement scope from 49 CFR 383.93 and 383.117, and the exact question count and fee from the state that issues your licence. We state the federal baseline and flag anything a state sets on its own. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class or endorsement, so the closest official fit for a passenger-endorsed driver is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), with bus drivers (SOC 53-3052) carrying a similar median.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the P endorsement\u2019s 80 percent knowledge-test standard (49 CFR 383.135), the endorsement scope in 49 CFR 383.93 and the passenger knowledge-test content baseline in 49 CFR 383.117, and the Entry-Level Driver Training trigger for the P endorsement; wage figures against BLS OOH.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers \u2014 the occupation the P endorsement keeps you eligible for (BLS, May 2024); bus drivers, transit and intercity carry the same median',
    summary:
      'The Passenger Endorsement does not create its own BLS occupation \u2014 it is an add-on to a Commercial Driver\u2019s License that authorises you to drive a vehicle designed to carry 16 or more passengers, which widens the pool of commercial driving work \u2014 so the salary story is the base occupation plus the jobs the endorsement unlocks. The closest official occupation named by the task is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), which had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800; the passenger-carrying cousin, Bus Drivers, Transit and Intercity (SOC 53-3052), had the same $57,440 median in May 2024. BLS does not isolate passenger-endorsed drivers in its wage series, so we cannot source a separate median for them; what the employment data shows is that the base occupations are large and durable \u2014 2,235,100 heavy truck driver jobs in 2024 projected to grow about 4 percent by 2034, with roughly 237,600 openings a year, and a large bus-driver workforce alongside. The P endorsement matters economically for three reasons we can source directly: it expands the set of vehicles a driver may operate, making drivers eligible for passenger-transport work with charter, transit and shuttle operators; it is a hard prerequisite for the School Bus endorsement, so a driver without P cannot take the higher-responsibility school routes; and it requires clearing the federal 80 percent knowledge standard plus Entry-Level Driver Training, which signals to employers that the driver has met a documented federal baseline. The honest framing is that the endorsement does not appear in the BLS wage data, so treat any specific "passenger driver salary" figure you see on a job board as an employer or aggregate estimate rather than government data. The credential\u2019s practical value is eligibility: without it, passenger-carrying commercial work is closed off entirely.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-3032)' },
      { label: 'Median annual wage, bus drivers, transit and intercity', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-3052)' },
      { label: 'Employment, heavy and tractor-trailer truck drivers, 2024', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'The endorsement itself', value: 'No separate BLS data', note: 'BLS does not isolate passenger-endorsed drivers; treat any dedicated "passenger salary" as an employer estimate' }
    ],
    growth: '+4% projected change 2024-34 for the base truck-driver occupation, with ~237,600 openings a year; the P endorsement widens the vehicles and roles a driver can take, including the prerequisite path to the S endorsement.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },

  passRate: {
    headline: 'FMCSA publishes the 80 percent passing standard (49 CFR 383.135) but no national pass rate for the P endorsement knowledge test \u2014 the question count is state-set and commonly around 20-30 questions',
    summary:
      'The core fact is that the Passenger Endorsement knowledge test has a published passing standard but no published pass rate: 49 CFR 383.135 requires an applicant to correctly answer at least 80 percent of the questions on each CDL knowledge test, and that 80 percent line is the only passing threshold in the federal rule \u2014 it applies per test with no curve or rounding. FMCSA does not release national knowledge-test pass statistics, and neither does any state DMV/SDLA we are aware of, so the percentages you see on commercial apps are those vendors\u2019 own practice-test numbers, not official outcomes. What is verifiable is the structure. The P endorsement (49 CFR 383.93) requires a passenger-specific knowledge test on top of the General Knowledge test, and the question count is set by your state \u2014 commonly around 20 to 30 questions in state manuals, with the 80 percent federal floor meaning roughly 16 to 24 correct depending on the exact count, though the state sets the number. The content baseline is in 49 CFR 383.117: the passenger transport knowledge area, covering the proper procedures for loading and unloading passengers, the use of the emergency exits, and the proper procedures at highway-rail grade crossings, plus the driver\u2019s responsibility for passenger safety and, for passenger-carrying vehicles, the securement and handling rules. Note also that the P endorsement is one of the CDL endorsements that DOES trigger the federal Entry-Level Driver Training (ELDT) requirement under 49 CFR Part 380 \u2014 you must complete an ELDT program registered on the FMCSA Training Provider Registry before you can take the P skills test. The practical reading of the rules is that the P endorsement has a federal 80 percent knowledge standard, a state-set question count, and a mandatory ELDT gate, and none of these has a published pass rate.',
    source: {
      label: 'eCFR \u2014 49 CFR Part 383 (knowledge tests and endorsements)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat: 'No national or state pass rate for the P endorsement knowledge test is published by FMCSA or the states. What is verifiable is the 80 percent cut score in 49 CFR 383.135, the common state question count of roughly 20-30, the content baseline in 49 CFR 383.117, and the ELDT requirement under 49 CFR Part 380; the narrative above covers those instead.'
  },

  studyPlan: {
    summary:
      'The Passenger Endorsement Knowledge Test is a recall exam on top of the General Knowledge test, and the study plan is short: budget 6 to 12 hours of focused study, and note that the endorsement cannot be added until you hold a Commercial Learner\u2019s Permit or CDL, and that the P endorsement also requires Entry-Level Driver Training before the skills test. The federal content baseline is in 49 CFR 383.117: the proper procedures for loading and unloading passengers, the use of the emergency exits, the proper procedures at highway-rail grade crossings, and the driver\u2019s responsibility for passenger safety, plus the securement and handling rules for passenger-carrying vehicles. Your state\u2019s CDL manual covers this material in a dedicated passenger-transport section, and the question count is state-set \u2014 commonly around 20 to 30 questions, with the federal 80 percent standard meaning roughly 16 to 24 correct on a typical paper. The most effective sequence is: first, read your state\u2019s passenger chapter end to end, since the test is drawn from that manual\u2019s wording; second, learn the loading-and-unloading procedures in order, because they anchor a large share of the items \u2014 the steps for stopping, signalling, opening the door, counting passengers, and managing the danger zones around the vehicle; third, master the emergency-exit and evacuation content, including which exits to use and the driver\u2019s evacuation duty; fourth, study the highway-rail grade crossing procedures, which are tested for passenger vehicles specifically; and fifth, drill your state\u2019s official practice questions or an official-equivalent set until you are scoring above 80 percent consistently. Budget also for the ELDT requirement, which is a separate registered-training step and lead time that must be in place before the P skills test. The highest-yield habit is learning the loading-and-unloading sequence cold, because it is the largest and most predictable cluster of passenger-transport items.',
    totalHours: '6-12 hours of focused study on top of the licence knowledge tests',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Passenger chapter and loading/unloading',
        tasks: [
          'Read the passenger-transport chapter of your state\u2019s CDL manual end to end',
          'Learn the loading-and-unloading procedure in order: stop, signal, open, manage the danger zone, count passengers',
          'Study the emergency-exit and evacuation content, including the driver\u2019s evacuation duty',
          'Check the ELDT provider you will use, since the P endorsement requires registered training before the skills test'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Safety content and timed practice',
        tasks: [
          'Study the highway-rail grade crossing procedures for passenger vehicles',
          'Learn the passenger safety and behaviour-management duties',
          'Take timed practice tests drawn from your state\u2019s question bank until you score above 80 percent consistently',
          'Confirm the endorsement test fee and book it with your DMV/SDLA'
        ],
        hours: '3-6 hrs'
      }
    ],
    variants: [
      { label: 'Already holding a CDL', detail: 'A focused 1-week plan. The licence knowledge is behind you; the work is the passenger chapter, the loading-and-unloading sequence, and confirming your ELDT record is in place.' },
      { label: 'Adding P with the School Bus endorsement in view', detail: 'Budget an extra week and treat the P material as the foundation: the S endorsement requires P first, and the loading-and-unloading and danger-zone content carries over.' },
      { label: 'New CDL applicant', detail: 'Budget extra time and the ELDT lead time; the endorsement tests sit alongside the General Knowledge, Combination and Air Brakes tests on the same application.' }
    ]
  },

  prepStrategies: {
    summary:
      'The Passenger Endorsement Knowledge Test is a recall exam with a hard 80 percent floor, and the strategy that pays off is narrower than candidates expect: learn your state\u2019s passenger chapter, memorise the loading-and-unloading sequence, and drill timed practice until you score above 80 percent consistently. The single most common failure is treating the endorsement test as an extension of general driving knowledge \u2014 the items are specific to passenger-transport procedures, and candidates who do not read the passenger chapter miss the loading, evacuation and grade-crossing items that dominate the paper. Second, learn the loading-and-unloading procedure as a fixed sequence \u2014 the stop, the signal, the door, the danger zone check, the passenger count \u2014 because it is the largest and most predictable cluster, and the scenario items test the order of the steps, not just the idea. Third, master the emergency-exit and evacuation content: which exits to use, when to evacuate, and the driver\u2019s duty to lead and account for passengers, since the passenger-specific emergency content recurs. Fourth, study the highway-rail grade crossing rules for passenger vehicles, which are tested as a distinct procedure. Fifth, use your state\u2019s official practice questions rather than a national app, because the question bank follows your state\u2019s manual wording and the 80 percent floor punishes exact-word traps. Finally, handle the ELDT requirement early \u2014 the P endorsement triggers the federal Entry-Level Driver Training requirement, and the skills test cannot proceed without a completed ELDT record, so the training lead time is part of the plan.',
    items: [
      {
        title: 'Read the passenger chapter, not a general driving app',
        detail: 'The items are specific to passenger-transport procedures \u2014 loading, unloading, evacuation, grade crossings. General driving knowledge will not carry this test.'
      },
      {
        title: 'Memorise the loading-and-unloading sequence',
        detail: 'The stop, the signal, the door, the danger-zone check and the passenger count form a fixed procedure, and the scenario items test the order of the steps.'
      },
      {
        title: 'Master the emergency-exit content',
        detail: 'Which exits to use, when to evacuate, and the driver\u2019s duty to lead and account for passengers are passenger-specific and recur on the paper.'
      },
      {
        title: 'Learn the grade-crossing procedures',
        detail: 'The highway-rail grade crossing rules for passenger vehicles are tested as a distinct procedure \u2014 know the stop, look, listen and go sequence.'
      },
      {
        title: 'Use state-specific practice questions',
        detail: 'The bank follows your state\u2019s manual wording, and the 80 percent floor punishes exact-word traps.'
      },
      {
        title: 'Start the ELDT requirement early',
        detail: 'The P endorsement triggers Entry-Level Driver Training under 49 CFR Part 380. Complete the registered training and confirm your record before you plan the skills test.'
      }
    ]
  },

  resourceComparison: {
    summary:
      'The Passenger Endorsement Knowledge Test is cheap to prepare for because the authoritative source \u2014 your state\u2019s CDL manual passenger chapter and its official practice questions \u2014 costs nothing, and the official material is the only source the test is written from, so a free study path is the complete one. The real costs sit around the test: the knowledge test fee is set by your state and is commonly in the $10 to $40 range, and the Entry-Level Driver Training (ELDT) requirement is a separate purchased training step \u2014 typically $100 to $500 from an FMCSA-registered provider \u2014 for candidates without a qualifying prior licence, and it is mandatory before the P skills test, so it is part of the budget, not an optional extra. The comparison below separates the free official material from the test, the ELDT step and the paid apps, with prices current to this review. Paid apps earn their place only as repetition engines once the official material is clean, and beware any product that quotes a "passenger endorsement pass rate," since that figure is not published by any government \u2014 the 80 percent standard in 49 CFR 383.135 is the passing rule, and there is no pass-rate statistic to compare against.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual \u2014 passenger chapter', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from \u2014 read it first and last'] },
      { label: 'Your state DMV official practice questions', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'Passenger endorsement knowledge test', values: ['Fee set by state (often $10-40)', 'Computer-based at a DMV/SDLA', 'The test itself \u2014 80% passing per 49 CFR 383.135'] },
      { label: 'Entry-Level Driver Training (ELDT)', values: ['~$100-500, provider-set', 'Online or classroom, FMCSA-registered provider', 'Mandatory for the P endorsement \u2014 required before the skills test'] },
      { label: 'Commercial passenger-endorsement practice apps', values: ['Free tier; ~$5-15/mo', 'Mobile app', 'Extra repetition once the official material is clean'] },
    ],
    footnote: 'Prices checked 2026-08 in USD and vary by state and provider; ELDT pricing is set by the registered provider and is separate from the state test fee. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'Nearly every avoidable failure on the Passenger Endorsement comes from one of three roots: studying general driving material instead of the passenger chapter, neglecting the Entry-Level Driver Training lead time, or missing the 80 percent floor on a short test. The content error is the most common \u2014 candidates assume the endorsement test is an extension of the general driving knowledge and never read the passenger chapter, then miss the loading, evacuation and grade-crossing items that dominate the paper. The scheduling error is the most expensive \u2014 the P endorsement triggers the federal ELDT requirement, and a candidate who studies the chapter but has no completed ELDT record cannot proceed to the skills test, which delays the endorsement by the training lead time. The scoring error is the most painful \u2014 49 CFR 383.135 sets a flat 80 percent with no curve, and on a short, state-set paper of roughly 20 to 30 questions, a one-question shortfall is a full failure and a re-take fee. Candidates also make avoidable process errors: using a national app instead of the state manual\u2019s wording, skipping the emergency and grade-crossing clusters, and trusting vendor "pass rates" that no government publishes. The mistakes below each carry a concrete fix, and all of them are cheaper to prevent than to re-take.',
    items: [
      {
        mistake: 'Studying general CDL material instead of the passenger chapter',
        fix: 'The items are specific to passenger-transport procedures \u2014 loading, unloading, evacuation, grade crossings. Read the passenger chapter end to end and drill its wording; general driving knowledge will not carry the test.'
      },
      {
        mistake: 'Forgetting the ELDT requirement',
        fix: 'The P endorsement triggers the federal Entry-Level Driver Training requirement under 49 CFR Part 380, and the skills test cannot proceed without a completed record from a registered provider. Start the training early \u2014 it has its own cost and lead time.'
      },
      {
        mistake: 'Assuming a pass is rounded or curved',
        fix: '49 CFR 383.135 sets a flat 80 percent per knowledge test with no curve. On a 25-question paper that is 20 correct; a 19 is a fail. Bank the easy loading-and-unloading items and do not gamble the clock on one hard question.'
      },
      {
        mistake: 'Memorising the definitions instead of the sequence',
        fix: 'The scenario items test the order of the loading-and-unloading procedure \u2014 the stop, the signal, the door, the danger-zone check, the passenger count. Learn the steps as a fixed sequence, not as separate facts.'
      },
      {
        mistake: 'Ignoring the emergency and grade-crossing content',
        fix: 'Emergency-exit selection, the evacuation duty and the highway-rail grade crossing procedure are passenger-specific clusters. Candidates who skip them lose a whole group of items.'
      },
      {
        mistake: 'Using a national app that quotes a "pass rate"',
        fix: 'No pass rate is published by FMCSA or any state; a vendor\u2019s percentage is its own practice-test metric. Anchor prep to your state\u2019s manual and official questions instead.'
      }
    ]
  },

  questionTypes: {
    summary:
      'The Passenger Endorsement Knowledge Test is a multiple-choice exam administered at a state DMV/SDLA, taken after the General Knowledge test, with the federal 80 percent passing standard in 49 CFR 383.135 and the question count set by your state \u2014 commonly around 20 to 30 questions. The content baseline is the passenger knowledge area in 49 CFR 383.117: the proper procedures for loading and unloading passengers, the use of the emergency exits, the proper procedures at highway-rail grade crossings, and the driver\u2019s responsibility for passenger safety, plus the securement and handling rules for passenger-carrying vehicles. Items are single-best-answer by design, and because there is no curve, your only job is to push the correct count above the 80 percent line \u2014 on a 25-question paper that is 20 correct, so the easy loading-and-unloading items must be banked before the harder procedure questions. The loading-and-unloading sequence and the emergency-exit content are the largest clusters, and the grade-crossing and safety-responsibility items complete the paper. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Loading-and-unloading procedure items', share: 'A large share of the paper', detail: 'The fixed sequence \u2014 stop, signal, door, danger-zone check, passenger count \u2014 and what the driver must do at each step. Candidates who learn the order bank this cluster.' },
      { name: 'Emergency and evacuation items', share: 'A large share of the paper', detail: 'Which emergency exits to use, when to evacuate, and the driver\u2019s duty to lead and account for passengers.' },
      { name: 'Safety and responsibility items', share: 'A minority of items', detail: 'Passenger behaviour management, the danger zones around the vehicle, and the driver\u2019s overall responsibility for passenger safety.' },
      { name: 'Highway-rail grade crossing items', share: 'A minority of items', detail: 'The distinct stop, look, listen and go procedure for passenger-carrying vehicles at rail crossings.' }
    ],
    samples: [
      {
        prompt: 'When preparing to unload passengers, the driver of a passenger vehicle should, in order:',
        options: ['A. Stop, signal, open the door, check the danger zones, and then allow passengers to exit', 'B. Open the door first so passengers can leave quickly', 'C. Stop and let passengers open the door themselves', 'D. Signal only, and allow passengers to exit as soon as the vehicle stops'],
        answer: 'A',
        explanation: 'A states the correct fixed sequence: the driver stops, signals, opens the door, checks the danger zones around the vehicle, and only then allows passengers to exit \u2014 the order matters because the danger-zone check protects exiting passengers from traffic. B is wrong because opening the door before the stop is complete and the zones are checked exposes passengers. C and D are wrong because they remove the driver\u2019s control of the door and the safety check, which the procedure requires. This is the loading-and-unloading order item that anchors the passenger paper.'
      },
      {
        prompt: 'The driver of a passenger vehicle must stop at a highway-rail grade crossing and:',
        options: ['A. Proceed immediately without stopping if the crossing looks clear', 'B. Stop, look and listen for trains, then cross only when it is safe', 'C. Sound the horn and cross without stopping', 'D. Stop only if a train is visible'],
        answer: 'B',
        explanation: 'B states the correct procedure: the driver must stop, look and listen for trains, and cross only when it is safe to do so \u2014 the mandated stop applies whether or not a train is visible. A and D are wrong because the stop is mandatory and is not conditional on seeing a train. C is wrong because sounding the horn does not replace the stop. The item tests the grade-crossing procedure as a distinct passenger-vehicle rule.'
      },
      {
        prompt: 'If an emergency requires the evacuation of a passenger vehicle, the driver should:',
        options: ['A. Direct passengers to the available emergency exits and account for everyone after evacuation', 'B. Leave the vehicle immediately without directing passengers', 'C. Tell passengers to stay seated', 'D. Open only the front door and use it for everyone'],
        answer: 'A',
        explanation: 'A states the correct duty: the driver directs passengers to the available emergency exits and accounts for everyone after the evacuation. B is wrong because abandoning passengers removes the driver\u2019s leadership and accountability. C is wrong because staying seated during a required evacuation defeats the purpose. D is wrong because the procedure uses the emergency exits appropriate to the situation, not only the front door. The item tests the evacuation duty, a passenger-specific cluster on the paper.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.117 passenger knowledge area), not live exam items.'
  },

  examDay: {
    summary:
      'The Passenger Endorsement Knowledge Test is taken at a state DMV/SDLA office, by computer, on the same appointment pattern as the other CDL knowledge tests, and it is passed separately under the federal 80 percent standard. Because the P endorsement has two gates, exam-day planning starts weeks earlier with the Entry-Level Driver Training requirement: the endorsement cannot proceed to the skills test without a completed ELDT record from an FMCSA-registered provider, so confirm that record is in place before you pay for the knowledge test \u2014 the knowledge test is only half of the P gate, and the skills test in a passenger vehicle is the other half. Bring the same identity, residency and lawful-presence documents your DMV requires for the licence application, plus the correct fee for the endorsement test. The test itself is a short, recall-heavy multiple-choice paper \u2014 commonly around 20 to 30 questions in most states \u2014 so pace it to bank the loading-and-unloading sequence items first, then return to the harder procedure questions; there is no curve, and a one-question shortfall is a full failure. On a pass, the P endorsement is added to your CDL or CLP, and you can schedule the P skills test in a passenger vehicle once your ELDT record is confirmed; on a fail, most states allow a prompt retake for a new fee, so re-read the passenger chapter and rebook rather than guessing the same material will stick.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV\u2019s document list',
      'Confirmation that your Entry-Level Driver Training record is complete at a registered provider \u2014 required before the P skills test',
      'Correct fee for the endorsement knowledge test, set by your state',
      'Your CLP or CDL, since the endorsement is added to an existing licence document',
      'Your application or confirmation number if you booked online'
    ],
    leave: [
      'Phones, smartwatches and earbuds \u2014 secured before you enter the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'A translator or interpreter \u2014 states may offer the test in another language but not a third-party interpreter',
      'Any expectation of a driving component \u2014 this is a knowledge test only; the driving comes in the separate P skills test'
    ],
    timeline: [
      { time: '4-6 weeks before', detail: 'Complete the Entry-Level Driver Training at a registered provider and confirm your ELDT record; the P endorsement cannot proceed to the skills test without it.' },
      { time: 'The week before', detail: 'Confirm the ELDT record, assemble the DMV document list, and score above 80 percent on timed practice tests.' },
      { time: 'Day before', detail: 'Re-run one timed practice test; re-read only the sections where you missed items. Confirm the office location and appointment.' },
      { time: 'At the terminal', detail: 'Answer the loading-and-unloading sequence items first, then the emergency and grade-crossing items; there is no curve, only the 80 percent floor.' },
      { time: 'On a pass', detail: 'The P endorsement is added to your CDL or CLP, and you can schedule the P skills test once the ELDT record is confirmed.' },
      { time: 'On a fail', detail: 'Most states allow a prompt retake for a new fee; re-read the passenger chapter and rebook rather than re-sitting the same material.' }
    ],
    rules: [
      'Passing standard is 80 percent on the endorsement knowledge test per 49 CFR 383.135 \u2014 a flat floor, no curve, no rounding.',
      'The P endorsement requires Entry-Level Driver Training under 49 CFR Part 380 before the skills test; the knowledge test comes first, then the skills test.',
      'The P endorsement knowledge test is taken in addition to the General Knowledge test, with the question count set by your state (commonly around 20-30).',
      'The endorsement authorises vehicles designed to carry 16 or more passengers, per 49 CFR 383.93.',
      'The endorsement rides on your CDL and is retested when the CDL renews.',
      'Retake policy, question count and fee are set by the state, not by federal rule; verify all three with your DMV.'
    ],
    afterwards:
      'On a pass, the P endorsement is added to your CDL or CLP, and the combination of the endorsement, your ELDT record and a current medical certificate makes you eligible for passenger-carrying commercial work \u2014 charter, transit, shuttle and, with the S endorsement added, school routes. Schedule the P skills test in a passenger vehicle once your ELDT record is confirmed, because the knowledge test is only half of the P gate. Diary the renewal date immediately: the endorsement is retested when the CDL renews. On a fail, resist the urge to immediately re-sit the same material \u2014 most states allow a prompt retake for a new fee, but the cheap move is to re-read the passenger chapter and re-run official practice tests until you are scoring above 80 percent consistently, because the floor is unforgiving and a one-question shortfall is a full failure. Whichever way it goes, remember that the P endorsement is a two-gate credential: the 80 percent knowledge standard is federal, the question count and fee are state-set, and the ELDT record is the gate that no amount of studying the chapter can substitute for.'
  }
};

export default data;
