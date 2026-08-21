// Depth content for: cdl-on-road-driving-skills-test
// CDL skills-test structure comes from 49 CFR Part 383 and FMCSA materials;
// wage figures come from BLS.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL skills-test structure is set at the federal level by 49 CFR Part 383 and administered by the states, so we state the federal baseline and flag anything a state sets on its own — including pass/fail determination, which is entirely state-set. Entry-Level Driver Training (ELDT) requirements, effective 7 February 2022, also determine who may sit the skills test at all. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class, so the closest official fit for the road test is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the three-part skills test structure, the CLP 14-day waiting rule, and ELDT requirements against 49 CFR Part 383 and FMCSA materials; wage figures against BLS OOH.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers (BLS, May 2024)',
    summary:
      'The On-Road Driving Skills Test is the final gate to a Class A or Class B Commercial Driver\u2019s License, and the occupation it unlocks is the single largest driving job in the country, so BLS data is the right way to size the payoff. The closest official occupation is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), because a Class A CDL is what that role requires; there is no BLS occupation called "CDL driver", and any salary page that quotes one is quoting a job-board aggregate rather than government data. That occupation had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800. The spread matters for how you read this test: passing the road test alone does not put you at the median, because the median reflects experienced drivers with a clean record and, often, years of route seniority — but it does remove the licence barrier that stands between an entry applicant and the middle of the distribution. The employment base is enormous: 2,235,100 jobs in 2024, projected to grow about 4 percent to 2,324,400 by 2034, with roughly 237,600 openings a year from both growth and replacement. That replacement figure is the durable argument for treating the CDL as a recession-resistant credential: freight does not stop moving when the economy softens. Note carefully that BLS does not isolate CDL class in its wage series, so these numbers describe the occupation, not the licence; a bus or straight-truck (Class B) driver may sit below the Class A median, and drivers moving toward passenger and transit work should look at the Bus Drivers, Transit and Intercity series (SOC 53-3052) instead, which carries its own median.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,640', note: 'BLS OEWS May 2024 (10th percentile)' },
      { label: 'Highest 10 percent', value: 'more than $78,800', note: 'BLS OEWS May 2024 (90th percentile)' },
      { label: 'Employment, 2024', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~237,600 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+4% projected change 2024-34 (growth), ~237,600 openings a year; the road test is the final gate to this occupation for every Class A and B driver.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },
  passRate: {
    headline: 'No national pass rate exists — the states administer the road test and set their own passing standards, and FMCSA publishes the skill requirements (49 CFR 383.113) but no national pass statistics',
    summary:
      'The core fact is that the CDL On-Road Driving Skills Test has no published national pass rate: FMCSA sets the required skills and the three-part structure in 49 CFR 383.113 and 383.123, but each state administers the road test and determines pass or fail on its own, and no state we are aware of publishes aggregate road-test pass statistics. The percentages you see on commercial "CDL training" sites are those vendors\u2019 own internal outcomes, not official data, and we have not repeated them because they are not sourced to any government. What is published and verifiable is the federal structure. The skills test has three parts, administered in order: the vehicle inspection (pre-trip), the basic control skills test, and the on-road driving test, and you must pass all three — most states require all three in a single visit, though some allow retaking only the failed section. Two federal prerequisites sit upstream of the road test: you must hold a Commercial Learner\u2019s Permit for at least 14 days before taking any skills test (49 CFR 383.25(e)), and, for a first-time Class A or B applicant or anyone adding a passenger or school bus endorsement, ELDT training must be completed through an FMCSA Training Provider Registry provider and logged before the state will schedule the skills test. You must also hold a current Medical Examiner\u2019s Certificate. The road test itself covers basic vehicle control and safe operation in traffic — turns, lane changes, intersections, railroad crossings, speed management, and following distance — and a driver examiner scores you on a standardized form; actions such as causing an accident, running a red light, or committing a traffic violation typically produce an automatic failure. Because the passing standard is state-set, the practical advice is to ask your issuing DMV/SDLA how the road test is scored in your state and what triggers automatic failure.',
    source: {
      label: 'eCFR — 49 CFR Part 383 (skills tests, CLP, and driver qualification)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat: 'No national or state pass rate for the CDL on-road test is published by FMCSA or the states. We have deliberately left the pass-rate table empty. What is verifiable is the three-part skills structure in 49 CFR 383.113 and the CLP/ELDT prerequisites; the narrative above covers those instead.'
  },
  studyPlan: {
    summary:
      'The On-Road Driving Skills Test is the third and final part of the CDL skills test, and it is a skills exam rather than a reading exam: the study plan is driving practice, not textbook hours. Budget 20 to 40 hours of supervised behind-the-wheel practice for a candidate coming out of a CDL school, or 40 to 80 hours for someone learning to drive commercial vehicles more slowly, and remember that the road test cannot be taken until you have held a Commercial Learner\u2019s Permit for at least 14 days (49 CFR 383.25(e)) and, for first-time Class A/B applicants, completed ELDT theory and behind-the-wheel training through a registered provider. The examiners score the drive against a standardized form covering basic vehicle control and safe operation in traffic: mirror use, lane positioning, smooth turns, speed control, intersection and railroad-crossing procedures, and defensive driving. The most effective practice sequence is: first, build hours in the exact class of vehicle you will test in, because the test vehicle determines your licence class and any restrictions; second, drill the daily habits examiners watch for — scanning mirrors constantly, signalling early, and stopping completely at stop signs and railroad crossings; third, practise the turns and merges that fail most candidates, including wide right turns in a long vehicle and highway merges; fourth, rehearse the before-driving routine, since the examiner watches your pretrip seat-and-mirror adjustment, controls check, and brake test; and fifth, in the final week, do at least one full mock road test with an instructor acting as examiner. The highest-yield habit is deliberate mirror discipline — poor mirror use is among the most common failure themes reported by instructors, and it is pure habit you can build in any driving session.',
    totalHours: '20-80 hours of supervised behind-the-wheel practice depending on starting experience',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Vehicle handling fundamentals',
        tasks: [
          'Practise in the exact class of vehicle you will test in — the test vehicle sets your licence class',
          'Master seat, mirror, and steering-wheel setup plus the pre-drive controls check',
          'Drill smooth shifting, braking, and speed control on the road',
          'Log your hours — some states track practice driving time'
        ],
        hours: '8-16 hrs'
      },
      {
        label: 'Weeks 3-4',
        focus: 'Traffic skills and turns',
        tasks: [
          'Practise wide right turns, left turns across lanes, lane changes, and highway merges',
          'Drill intersection scanning, railroad-crossing procedure, and complete stops',
          'Work on following distance and space management around the vehicle',
          'Practise in the conditions you will meet on test day, including city streets'
        ],
        hours: '8-16 hrs'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Examiner-focused rehearsal',
        tasks: [
          'Run a full mock road test with an instructor acting as examiner',
          'Fix the specific items on the scoring form you missed in the mock',
          'Rehearse mirror discipline every session — it is the most common failure theme',
          'Confirm ELDT is logged in the FMCSA registry and your medical certificate is current'
        ],
        hours: '8-16 hrs'
      }
    ],
    variants: [
      { label: 'Coming out of a CDL school', detail: 'A compressed 2-4 week plan. You have structured training hours; the job is examiner-focused rehearsal and fixing the specific scoring-form items your instructor flags.' },
      { label: 'Learning to drive commercial vehicles cold', detail: 'Extend to 8-10 weeks at 6-8 hrs/week. Add two weeks of basic vehicle handling before traffic work, and consider a CDL school for the ELDT behind-the-wheel requirement.' },
      { label: 'Class B (bus or straight truck) seeker', detail: 'Practise in a straight truck or bus, not a combination vehicle. The road-test manoeuvres differ, and passenger transport adds its own responsibilities on the road.' }
    ]
  },
  prepStrategies: {
    summary:
      'The On-Road Driving Skills Test is a demonstration of habit, not knowledge: examiners watch how you scan, signal, position, and stop over a drive that may last 30 to 45 minutes, and the candidates who fail usually fail on repeated small behaviours rather than one dramatic mistake. The single most effective preparation is rehearsal under examiner conditions — mock road tests with an instructor who scores you on the same standardized form the state uses. The second is mirror discipline: commercial drivers are expected to check mirrors constantly, and weak mirror use is among the most common failure themes reported by instructors, so make it a habit in every practice session, not just in mock tests. Third, treat the automatic-failure items as the real syllabus — causing an accident, running a red light or stop sign, committing a traffic violation, or making an unsafe exit will fail the test regardless of how well you otherwise drive, so practise complete stops and safe lane changes until they are reflexes. Fourth, learn the exact scoring form your state uses; examiners follow a standardized sheet, and knowing the scored behaviours tells you where the points are. Fifth, control the before-drive routine — the examiner watches your pretrip checks, seat and mirror adjustment, and brake test, and a sloppy start sets the tone for the whole drive. Finally, remember that most states require you to pass the pre-trip and basic control skills parts of the skills test before the road test, so confirm how your state sequences retakes of the other two parts.',
    items: [
      {
        title: 'Run mock road tests with an examiner\u2019s eye',
        detail: 'Have an instructor score you on the same standardized form the state uses; the feedback is the highest-yield practice there is for this test.'
      },
      {
        title: 'Make mirror discipline a reflex',
        detail: 'Commercial drivers are expected to scan mirrors constantly; weak mirror use is among the most common failure themes, and it is a pure habit you can build in any session.'
      },
      {
        title: 'Treat automatic-failure items as the syllabus',
        detail: 'Causing an accident, running a red light or stop sign, and committing a traffic violation fail the test outright; practise complete stops and safe lane changes until they are reflexes.'
      },
      {
        title: 'Learn the state\u2019s scoring form',
        detail: 'Examiners score the drive against a standardized sheet; knowing the scored behaviours tells you exactly where the points are.'
      },
      {
        title: 'Control the before-drive routine',
        detail: 'The examiner watches seat and mirror adjustment, controls checks, and the brake test; a sloppy start colours the whole drive.'
      },
      {
        title: 'Sequence the three parts deliberately',
        detail: 'Most states require the pre-trip and basic control skills tests before the road test; confirm how retakes of the earlier parts work in your state.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'The On-Road Driving Skills Test is a behind-the-wheel exam, so the resource comparison is dominated by practice time in a commercial vehicle rather than study materials. The authoritative documents are free: your state\u2019s CDL manual, FMCSA\u2019s skills-test descriptions in 49 CFR 383.113, and any road-test guide your issuing DMV/SDLA publishes. The real cost is supervised driving time — through a CDL school, a rental of a test-class vehicle, or an employer\u2019s training program. Paid practice-test apps and books have limited value for a road test, because no amount of reading substitutes for the hours behind the wheel.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual and road-test guide', values: ['Free', 'PDF / web from the issuing state', 'The scored behaviours and any state-specific road-test rules'] },
      { label: '49 CFR Part 383 (skills tests)', values: ['Free', 'eCFR web', 'The federal baseline: required skills and the three-part structure'] },
      { label: 'CDL school behind-the-wheel training', values: ['Often bundled into tuition; standalone $1,000-5,000', 'Instructor-led in a test-class vehicle', 'Structured hours and examiner-familiar instruction — also satisfies ELDT'] },
      { label: 'Mock road test with a driving instructor', values: ['~$50-150 per session', 'Behind the wheel, scored on the state form', 'The single highest-yield rehearsal before test day'] },
      { label: 'Commercial road-test apps and books', values: ['~$10-30', 'Print or mobile', 'Limited value — the road test rewards driving hours, not reading'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and vary widely by state and school; CDL school tuition is the largest cost and often bundles ELDT. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'Almost every avoidable road-test failure comes from one of three roots: weak mirror discipline, missed automatic-failure items, or scheduling before the federal prerequisites are in place. The version and prerequisite errors below are the ones that waste the most money, because each one means a rescheduled test and another fee.',
    items: [
      {
        mistake: 'Testing in the wrong class of vehicle',
        fix: 'The vehicle you test in determines your licence class and restrictions. Testing in a straight truck when you want a Class A combination licence limits you permanently; confirm the vehicle matches the licence and endorsements you intend to hold.'
      },
      {
        mistake: 'Scheduling before ELDT is logged',
        fix: 'Since 7 February 2022, a first-time Class A or B applicant must complete ELDT through an FMCSA Training Provider Registry provider before the state will schedule the skills test. Verify the registry entry — not just course completion — before you book.'
      },
      {
        mistake: 'Ignoring the 14-day CLP rule',
        fix: 'You must hold your Commercial Learner\u2019s Permit for at least 14 days before any skills test (49 CFR 383.25(e)). Plan the calendar so the CLP clock has run before you book the road test.'
      },
      {
        mistake: 'Letting mirror use lapse',
        fix: 'Mirror discipline is scored throughout the drive, and weak mirror use is among the most common failure themes. Practise scanning mirrors on a fixed cadence until it is automatic.'
      },
      {
        mistake: 'Treating automatic-failure items casually',
        fix: 'Causing an accident, running a red light or stop sign, or committing a traffic violation fails the test outright. Practise complete stops and safe lane changes until they are reflexes.'
      },
      {
        mistake: 'Forgetting the medical certificate',
        fix: 'You need a current Medical Examiner\u2019s Certificate from a National Registry examiner. An expired certificate disqualifies you from testing; check it the week before.'
      }
    ]
  },
  questionTypes: {
    summary:
      'The On-Road Driving Skills Test is not a written exam at all — it is the third phase of the three-part CDL skills test, and the "questions" are scored driving behaviours on the road. The examiner rides along and scores you against a standardized form while you drive a route through real traffic, typically for 30 to 45 minutes, covering turns, intersections, lane changes, railroad crossings, speed management, and following distance. The skills required by federal rule are in 49 CFR 383.113(b) and (c): pre-trip inspection is handled separately (part one), the basic control skills (backing, parking, coupling) are part two, and the road test is part three. Because this is a performance test, the sections below describe the scored behaviour categories rather than question formats. There are no multiple-choice items, no samples to illustrate, and no published national pass rate — the standard is state-set. The most useful way to read this page is as a checklist of the behaviours the examiner will score, each of which you can rehearse behind the wheel before test day.',
    types: [
      { name: 'Basic vehicle control on the road', share: 'Scored throughout the drive', detail: 'Smooth acceleration and braking, correct gear selection, and proper speed for conditions — the mechanical core the examiner watches for the whole route.' },
      { name: 'Observation and mirror use', share: 'Scored throughout the drive', detail: 'Constant scanning of mirrors, blind spots, and intersections; weak mirror discipline is among the most common failure themes.' },
      { name: 'Turns and lane positioning', share: 'Scored on every turn', detail: 'Correct signal timing, wide right turns in a long vehicle, lane positioning before and after the turn, and no curb strikes or lane intrusions.' },
      { name: 'Intersections, railroad crossings, and stops', share: 'Scored at every controlled point', detail: 'Complete stops at stop signs and railroad crossings, correct right-of-way behaviour, and scanning before proceeding.' },
      { name: 'Defensive driving and following distance', share: 'Scored throughout the drive', detail: 'Maintaining space around the vehicle, anticipating other road users, and adjusting speed to traffic and weather conditions.' }
    ],
    samples: [],
    note: 'This is a performance test with no written items; the categories above are the scored behaviours from the federal skills-test structure and state examiner forms, not sample questions. No national pass rate is published.'
  },
  examDay: {
    summary:
      'The On-Road Driving Skills Test takes place at a state-designated testing site — often a DMV/SDLA facility, a CDL school, or a third-party examiner site — and typically runs 30 to 45 minutes in real traffic, after you have passed the pre-trip inspection and basic control skills parts of the skills test. You provide the vehicle, and it must be the class and configuration that matches the licence you want; a vehicle with safety defects can postpone the test. Bring your Commercial Learner\u2019s Permit, medical certificate, and identity documents, and confirm your ELDT registry entry is in place before you travel. The drive is scored on a standardized form, and certain actions — causing an accident, running a red light or stop sign, committing a traffic violation, or an unsafe exit — typically produce automatic failure. The most useful habits on the day: treat the whole drive as a demonstration of constant mirror use, early signalling, and complete stops; drive slightly more deliberately than traffic around you rather than rushing to keep pace; and if you make a small error, recover calmly and continue — examiners score the drive, not a single mistake. On a pass, the state issues or upgrades your CDL; on a fail, most states let you retake the failed section after a waiting period for a new fee.',
    bring: [
      'Your Commercial Learner\u2019s Permit and any endorsement documentation',
      'A current Medical Examiner\u2019s Certificate (Form MCSA-5876)',
      'Valid identity documents and, if required, your ELDT registry confirmation',
      'The test vehicle in the correct class, in good working condition, with registration and insurance documentation',
      'Your CDL application or confirmation number if you booked online'
    ],
    leave: [
      'Phones, smartwatches, and earbuds — secured during the test',
      'Notes, the manual, or any written material',
      'Bags and coats beyond what the testing site permits',
      'Anyone who is not the examiner or an authorised observer in the vehicle',
      'The expectation of passengers — CLP holders cannot carry passengers beyond those needed for training'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm ELDT is logged in the FMCSA registry, check the medical certificate expiry, and confirm the vehicle meets the test class and condition requirements.' },
      { time: 'Day before', detail: 'Run a final mock road test or a focused practice session on the scored behaviours; confirm the testing site address and what documents you must present.' },
      { time: 'Arrival', detail: 'Present your CLP, medical certificate, and vehicle documents; the examiner will inspect the vehicle and confirm the test route.' },
      { time: 'The drive (30-45 min)', detail: 'The examiner scores basic control, mirror use, turns, lane changes, intersections, railroad crossings, speed management, and following distance.' },
      { time: 'On a pass', detail: 'The state issues or upgrades your CDL; endorsements you tested for are added where applicable.' },
      { time: 'On a fail', detail: 'Most states allow a retake of the failed section after a waiting period for a new fee; ask the examiner what behaviours failed so you can target them.' }
    ],
    rules: [
      'You must hold a CLP for at least 14 days before the skills test (49 CFR 383.25(e)).',
      'ELDT must be logged in the FMCSA Training Provider Registry before a first-time Class A/B applicant or first-time passenger/school bus endorsement holder may test.',
      'The test vehicle determines your licence class and any restrictions.',
      'Certain actions cause automatic failure: causing an accident, running a red light or stop sign, committing a traffic violation, or an unsafe exit.',
      'Pass/fail is determined by the state; there is no national standard or published pass rate.',
      'A current Medical Examiner\u2019s Certificate is required to test.'
    ],
    afterwards:
      'On a pass you leave with a CDL (or an upgraded class), and any endorsements you tested for are recorded on the licence; the state will issue the physical licence, often within days to a few weeks, and the moment the CDL is issued your CLP restrictions end. On a fail, most states allow a retake of the failed section after a short waiting period for a new fee — ask the examiner which behaviours failed, since the scoring form tells you exactly where the points were lost, and rehearse those specific behaviours in a mock road test before rebooking. Whatever the outcome, remember that the skills test is state-administered under a federal framework: the three-part structure, the CLP 14-day rule, and ELDT all come from 49 CFR Part 383, while the passing standard, retake schedule, and fees are set by your state, so confirm both layers before you book.'
  }
};

export default data;
