// Depth content for: faa-par-private-pilot-airplane
// FAA Private Pilot - Airplane (PAR)
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Aviation & unmanned aircraft desk',
    bio: 'FAA Private Pilot knowledge-test structure comes from the FAA Airman Knowledge Testing Matrix, the FAA Airman Certification Standards (ACS), and the FAA Community Advisory that set the current 60-question, 120-minute, 70-percent format, and is revised with each update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PAR test structure (60 scored questions plus 5 unscored, 120 minutes, 70% passing per the current FAA Airman Knowledge Testing Matrix), the ACS basis, the instructor-endorsement requirement, and the knowledge-test-to-checkride sequence against FAA official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',

  salaryOutlook: {
    headline: '$122,670 median for commercial pilots \u2014 the BLS code the private pilot certificate feeds into (BLS OOH Pay tab, May 2024); the combined airline-and-commercial headline is $198,100 because airline pilots earn far more',
    summary:
      'The direct answer is that the FAA Private Pilot certificate is the first rung of a paid-aviation ladder, and the BLS occupation it feeds into is Commercial Pilots (SOC 53-2012), which had a May 2024 median annual wage of $122,670, with the lowest 10 percent under about $59,330 and the highest 10 percent over about $239,200. It is important to read the BLS headline correctly: the Occupational Outlook Handbook page for "Airline and Commercial Pilots" displays a combined 2024 median pay of $198,100, but that figure is dominated by the airline side \u2014 the same page reports airline pilots, copilots and flight engineers at a $226,600 median and commercial pilots at $122,670 \u2014 so the number relevant to a newly certificated private pilot working toward commercial work is the $122,670 commercial-pilots figure. A private pilot certificate is not a job credential by itself: it is the foundation for the instrument rating, the commercial certificate, and ultimately the airline transport pilot certificate and the flight-instructor certificate that so many pilots use to build hours. The occupation is healthy \u2014 155,400 airline and commercial pilot jobs in 2024, with employment projected to grow about 4 percent from 2024 to 2034 and roughly 18,200 openings a year \u2014 and the structural story is a training-cost-versus-lifetime-earnings trade: the private certificate is the first, relatively small cost on a path that runs through instrument, commercial, multi-engine, instructor and ATP certificates before the high-paid airline seats open. For a candidate deciding whether to start, the honest framing is that the private certificate does not itself appear in any BLS wage series \u2014 it opens the flight-training pipeline, and the wages come at the commercial and ATP end of it, where BLS reports the $122,670 commercial median and the far higher airline medians.',
    rows: [
      { label: 'Median annual wage, commercial pilots', value: '$122,670', note: 'BLS OOH Pay tab, May 2024 (SOC 53-2012)' },
      { label: 'Median annual wage, airline pilots, copilots and flight engineers', value: '$226,600', note: 'BLS OOH Pay tab, May 2024 (SOC 53-2011)' },
      { label: 'Lowest 10 percent, commercial pilots', value: 'less than $59,330', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent, commercial pilots', value: 'more than $239,200', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Airline and commercial pilots employment, 2024', value: '155,400 jobs', note: 'BLS OOH Quick Facts, 2024' }
    ],
    growth: 'BLS projects about 4% growth for airline and commercial pilots from 2024 to 2034, with roughly 18,200 openings a year; the private pilot certificate is the entry rung of the pipeline that leads to those occupations.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Airline and Commercial Pilots',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm'
    }
  },

  passRate: {
    headline: 'The FAA publishes the pass standard \u2014 70% on the PAR knowledge test (42 of 60 scored questions) \u2014 but no national pass-rate statistics for the private pilot written',
    summary:
      'The core fact is that the FAA publishes the passing standard but not pass-rate statistics for the Private Pilot Airplane knowledge test: you need 70 percent, which is 42 of the 60 scored questions correct, and the FAA does not release a national pass rate for the test, so any percentage you see online is an instructor or prep-provider estimate rather than an official figure. What the FAA does publish is the test mechanics, and they have changed recently: as of April 24, 2023, the PAR test time was reduced from 150 minutes to 120 minutes, and five unscored validation questions were added, so the administered test is 65 questions of which 60 are scored and 5 are unscored, with a 70 percent passing score on the 60 scored items \u2014 the current Airman Knowledge Testing Matrix lists PAR as 60 questions, 120 minutes, 70 percent. The test is computer-based, administered through PSI, and draws from the knowledge areas in 14 CFR 61.105(b): Federal Aviation Regulations, NTSB accident reporting, AIM procedures, VFR navigation, radio communication procedures, weather recognition and reporting, collision and wake turbulence avoidance, density altitude, weight and balance, aerodynamics and aircraft systems, stall and spin awareness, aeronautical decision making, and preflight action. You must hold an instructor endorsement or a graduation certificate from an approved ground or home-study course before you can sit it (14 CFR 61.103(d)(2)), the result is valid for 24 calendar months, and if you fail, you must receive additional instruction and a new endorsement before retaking (14 CFR 61.49). Because the FAA publishes no pass rate, the practical planning target is the published 70 percent line, and the more useful published artefact is the Airman Knowledge Test Report, which lists the learning statement codes of the questions you missed and drives the remedial training before the checkride.',
    source: {
      label: 'FAA \u2014 Airman Knowledge Testing Matrix and Private Pilot ACS',
      url: 'https://www.faa.gov/training_testing/testing/testing_matrix/'
    },
    caveat: 'The FAA publishes the 70% passing standard on the PAR knowledge test (42 of 60 scored questions, 120 minutes) but no national pass-rate statistics. The current format (60 scored questions plus 5 unscored) has been in effect since April 2023; the test time was reduced from 150 minutes to 120 minutes at that change.'
  },

  studyPlan: {
    summary:
      'Plan for 6 to 10 weeks and 60 to 90 hours of study for the PAR knowledge test \u2014 most candidates study the written while flight training is underway, and the FAA expects the knowledge test to be taken before or early in the flight-training phase because the checkride requires it within 24 months \u2014 and the honest structure is a three-step arc: learn the material, drill the question bank, then run timed full-length exams. The test draws from 13 knowledge areas under 14 CFR 61.105(b), and the Airman Certification Standards (ACS, currently FAA-S-ACS-6C) is the blueprint that maps every question to a knowledge element and to the FAA handbooks that contain the source material \u2014 primarily the Pilot\u2019s Handbook of Aeronautical Knowledge, the Airplane Flying Handbook, and the FAR/AIM. The most effective sequence is: first, learn the material before touching a question bank \u2014 work a structured ground school or read the PHAK chapters on regulations, airspace, weather, navigation, performance and aerodynamics \u2014 because memorising answers without understanding leaves you exposed on the checkride oral; second, drill an FAA-aligned question bank, reviewing the why behind every missed question and going back to the handbook for the concept; third, in the final two weeks, run full-length timed practice exams under the current format \u2014 60 questions, 120 minutes, 70 percent \u2014 aiming for 85 percent or better, because the test report lists the codes of every miss and the checkride examiner sees it. The highest-yield topics are the ones candidates miss most: airspace weather minimums, density altitude and performance-chart interpolation, and weight and balance, all of which reward learning the logic behind the numbers rather than rote recall. The written is step one of a three-part path \u2014 knowledge test, flight training, checkride \u2014 and the plan should keep that sequence in view: the knowledge test report drives remedial training, and the result must stay valid through the practical test.',
    totalHours: '60-90 hours of study for the knowledge test (typically alongside flight training)',
    weeks: [
      {
        label: 'Weeks 1-3',
        focus: 'Material foundation',
        tasks: [
          'Work a structured ground school or read the PHAK chapters on regulations, airspace, weather, navigation, performance and aerodynamics',
          'Learn the ACS knowledge elements as the blueprint \u2014 every test question maps to one',
          'Study the FAR/AIM sections referenced in the ACS: Part 61, Part 91, and the pilot privileges and limitations',
          'Practise weight and balance and density-altitude calculations with real performance charts'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 4-6',
        focus: 'Question-bank drilling',
        tasks: [
          'Drill an FAA-aligned question bank by subject area, reviewing the why behind every miss',
          'Go back to the PHAK or FAR/AIM for the concept behind each wrong answer',
          'Build a one-page summary of airspace weather minimums, the most-missed area',
          'Drill METARs, TAFs, and sectional-chart reading until they are fluent'
        ],
        hours: '8-10 hrs/week'
      },
      {
        label: 'Weeks 7-8',
        focus: 'Timed full exams and endorsement',
        tasks: [
          'Run full-length timed practice exams in the current format: 60 questions, 120 minutes, 70% passing',
          'Re-study the missed learning statement codes until you can explain each answer',
          'Score 85% or better on two consecutive exams before scheduling',
          'Obtain the instructor endorsement or ground-school graduation certificate required to sit the test'
        ],
        hours: '8-10 hrs/week'
      }
    ],
    variants: [
      { label: 'Full-time accelerated path', detail: 'Four to six weeks at 15+ hours a week, matching a fast-track flight program; the written is often completed before the first flight lesson so flight training builds on the knowledge.' },
      { label: 'Working full-time alongside flight training', detail: 'Stretch to 12-14 weeks at 5-8 hours a week, and book the knowledge test early in the flight-training phase so the 24-month validity covers the checkride.' },
      { label: 'Passing the written very early', detail: 'Take the test before or shortly after starting flight training, then keep the knowledge warm through the training \u2014 the report\u2019s missed codes drive the remedial ground training before the checkride.' }
    ]
  },

  prepStrategies: {
    summary:
      'The strategy that reliably passes the FAA private pilot written is "learn the material first, drill the question bank second, and run timed exams third," and the single biggest error is starting with question banks and memorising answers without understanding \u2014 which passes the written but exposes you on the checkride oral, where the examiner sees your test report and probes the codes you missed. A second proven approach is using the Airman Certification Standards as the blueprint: every test question maps to an ACS knowledge element and to the FAA handbook chapter that contains the source material, so studying the ACS tells you exactly which chapters to read rather than reading everything. Third, master the three most-missed clusters as concepts, not facts: airspace weather minimums (the 3-152 and 1-clear-of-clouds rules and their exceptions), density altitude and performance-chart interpolation, and weight and balance \u2014 candidates who learn the logic behind the numbers stop losing those items. Fourth, read METARs, TAFs and sectional charts until they are fluent, because weather and navigation items are a large share of the paper and are pure skill once learned. Fifth, take the written early in your training and aim for 85 percent or better, because the test report is shown to the checkride examiner and a higher score shortens the oral. Finally, remember the endorsement gate: you cannot sit the test without an instructor endorsement or an approved ground-school graduation certificate, and after a fail you need additional training and a new endorsement before retaking, so schedule the written to leave retake room within the 24-month validity.',
    items: [
      { title: 'Learn before you drill', detail: 'Work through the PHAK, the Airplane Flying Handbook and the FAR/AIM first. Memorising answers without understanding passes the written but fails the checkride oral, where the examiner probes your missed codes.' },
      { title: 'Use the ACS as the blueprint', detail: 'Every test question maps to an ACS knowledge element and the handbook chapter that sources it. Studying the ACS tells you which chapters to read instead of reading everything.' },
      { title: 'Master the most-missed clusters as concepts', detail: 'Airspace weather minimums, density altitude and performance charts, and weight and balance are the highest-miss areas. Learn the logic behind the numbers rather than rote recall.' },
      { title: 'Build weather and chart fluency', detail: 'METARs, TAFs, PIREPs and sectional-chart reading are a large share of the paper and pure skill once learned \u2014 drill them until they are automatic.' },
      { title: 'Take it early and aim high', detail: 'The written result is valid 24 months and the test report is shown to the checkride examiner. Take it early in training and aim for 85%+ so the oral is shorter and the retake room is real.' },
      { title: 'Respect the endorsement gate', detail: 'You need an instructor endorsement or an approved ground-school graduation certificate to sit the test, and after a fail you need additional training and a new endorsement. Leave retake room inside the 24-month validity.' }
    ]
  },

  resourceComparison: {
    summary:
      'The FAA private pilot written resource market is dominated by official free materials and a few commercial question banks, and the buying rule is simple: the FAA handbooks are the source of every question and cost nothing, so build the foundation there before spending on anything else. The Pilot\u2019s Handbook of Aeronautical Knowledge, the Airplane Flying Handbook and the FAR/AIM are free PDFs on the FAA site and are the authoritative source material the test is drawn from, and the Private Pilot ACS (currently FAA-S-ACS-6C) is the free blueprint that maps every test question to a knowledge element and the handbook chapter that sources it \u2014 studying the ACS tells you which chapters to read rather than reading everything. The commercial question banks \u2014 Sporty\u2019s, King Schools, Gleim, ASA and others \u2014 pull from the same published bank and are the standard paid purchase for drilling, typically $50 to $200 depending on the provider and format; the online ground school courses add structured video instruction at roughly $100 to $300. The test fee itself runs roughly $175 through PSI, the FAA\u2019s testing vendor, and is the unavoidable cost. The comparison below separates the official free resources from the commercial options, with prices current to this review. The honest ranking: the free FAA handbooks and the ACS, one good question bank, a ground school only if you want structured video, and the test fee itself \u2014 with the note that a candidate who learns the material from the free handbooks can prepare with a single question bank.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FAA Pilot\u2019s Handbook of Aeronautical Knowledge (PHAK)', values: ['Free', 'Official FAA PDF', 'The primary source the test questions are drawn from'] },
      { label: 'FAA Airplane Flying Handbook and FAR/AIM', values: ['Free', 'Official FAA PDFs', 'Maneuver knowledge and the regulations in Part 61 and Part 91'] },
      { label: 'Private Pilot ACS (FAA-S-ACS-6C)', values: ['Free', 'Official FAA PDF', 'The blueprint \u2014 every question maps to an ACS knowledge element'] },
      { label: 'Commercial question banks (Sporty\u2019s, Gleim, ASA, King Schools)', values: ['~$50-200', 'Software, app or book', 'Drilling the published question bank with explanations'] },
      { label: 'Online ground school courses', values: ['~$100-300', 'Video course', 'Structured instruction for candidates who prefer a course over self-study'] },
      { label: 'The knowledge test itself', values: ['~$175', 'Computer-based at a PSI testing centre', 'Required \u2014 60 scored questions, 120 minutes, 70% passing'] },
    ],
    footnote: 'Prices checked 2026-08 in USD and vary by provider and promotion; the FAA handbooks are free official PDFs, and the PSI test fee varies slightly by location. We do not rank by commission.'
  },

  commonMistakes: {
    summary:
      'The most common mistake on the private pilot written is starting with a question bank and memorising answers without learning the material \u2014 a habit that passes the test but sets up a long, hard checkride oral, because the examiner sees your test report and probes the codes you missed. The second is treating the written as an isolated exam rather than step one of a three-part path, then letting the 24-month validity expire before the checkride. A third recurring error is weak performance on the highest-miss clusters \u2014 airspace weather minimums, density altitude and weight and balance \u2014 which candidates lose to rote recall. Candidates also routinely skip timed full-length practice and then feel the 120-minute format on exam day, and many ignore the endorsement gate, arriving to schedule the test without the instructor endorsement or ground-school certificate required to sit it. Finally, some candidates resit after a fail without the mandatory additional training and new endorsement, wasting the fee. The fix for each is structural: learn the material, use the ACS, run timed exams, secure the endorsement early, and keep the checkride timeline in view.',
    items: [
      { mistake: 'Memorising answers without learning the material', fix: 'The checkride examiner sees your test report and probes the codes you missed. Learn the concepts from the PHAK and FAR/AIM first, then drill the bank \u2014 memorised answers pass the written but cost you on the oral.' },
      { mistake: 'Letting the 24-month validity lapse', fix: 'The written result is valid 24 months and is required before the checkride. Plan the test so the validity comfortably covers your flight-training-to-checkride timeline.' },
      { mistake: 'Losing the highest-miss clusters to rote recall', fix: 'Airspace weather minimums, density altitude and performance-chart interpolation, and weight and balance are the most-missed areas. Learn the logic behind the numbers \u2014 the FAA questions test understanding, not recall.' },
      { mistake: 'Skipping timed full-length practice', fix: 'The current format is 60 scored questions in 120 minutes. Run timed practice exams in that exact format and aim for 85%+, so the pacing and the stamina are rehearsed before the real sitting.' },
      { mistake: 'Ignoring the endorsement gate', fix: 'You cannot sit the test without an instructor endorsement or an approved ground-school graduation certificate. Secure it when you schedule, and after a fail get the required additional training and a new endorsement before retaking.' },
      { mistake: 'Resitting without the remedial training', fix: 'After a fail, 14 CFR 61.49 requires additional instruction and a new endorsement before a retake. Review the missed learning statement codes with an instructor \u2014 resitting the same material wastes the fee and usually fails again.' }
    ]
  },

  questionTypes: {
    summary:
      'The FAA Private Pilot Airplane (PAR) knowledge test is 60 scored multiple-choice questions in 120 minutes, with 5 additional unscored validation questions on the administered form, a 70 percent passing score (42 of 60), and three answer choices per question, administered by computer at a PSI testing centre. The content draws from the 13 knowledge areas in 14 CFR 61.105(b), mapped to the Airman Certification Standards: Federal Aviation Regulations, NTSB accident reporting, AIM procedures, VFR navigation, radio communications, weather, collision and wake turbulence avoidance, density altitude, weight and balance, aerodynamics and aircraft systems, stall and spin awareness, aeronautical decision making, and preflight action. The test includes direct knowledge items, calculation items (density altitude, weight and balance, fuel and time), chart-and-graphic items using the airman knowledge testing supplement, and scenario-based items. The samples below are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Regulations and procedures', share: 'A large share of the paper', detail: 'FAR Part 61 and 91 rules, pilot privileges and limitations, airspace classes and weather minimums, and AIM procedures \u2014 including the most-missed airspace weather-minimum items.' },
      { name: 'Weather and performance calculations', share: 'A large share of the paper', detail: 'METAR/TAF interpretation, density altitude, takeoff and landing distance, fuel burn and weight and balance \u2014 calculation items that reward chart fluency.' },
      { name: 'Navigation and flight planning', share: 'A meaningful share of the paper', detail: 'Sectional chart reading, VOR navigation, pilotage and dead reckoning, and cross-country planning using the testing supplement.' },
      { name: 'Aerodynamics, systems and human factors', share: 'A minority of items', detail: 'The four forces, stalls and load factor, aircraft systems, and aeromedical factors and aeronautical decision making (ADM).' }
    ],
    samples: [
      {
        prompt: 'Which airspace requires the pilot to maintain at least 3 statute miles visibility and remain clear of clouds when operating VFR below 10,000 feet MSL?',
        options: ['A. Class G airspace', 'B. Class B airspace', 'C. Class A airspace', 'D. No airspace below 10,000 feet MSL has cloud-clearance requirements'],
        answer: 'B',
        explanation: 'B is correct \u2014 in controlled airspace below 10,000 feet MSL, which includes Class B, C and D airspace, the VFR weather minimums are 3 statute miles visibility and clear of clouds, and Class B airspace is one of those controlled classes. A is wrong because Class G (uncontrolled) airspace below 10,000 feet MSL requires only 1 statute mile visibility and clear of clouds by day. C is wrong because Class A airspace begins at 18,000 feet MSL and is not a VFR environment below 10,000 feet. D is wrong because controlled airspace does impose the 3-SM clear-of-clouds standard. The study lesson is that the FAA rewards the precise minimums per airspace class, not a generalised rule \u2014 which is why airspace weather minimums are the most-missed area on the paper.'
      },
      {
        prompt: 'An aircraft has a takeoff weight of 2,600 pounds and the density altitude at the departure airport is 6,000 feet. Using the performance charts in the testing supplement, the takeoff distance over a 50-foot obstacle will:',
        options: ['A. Be longer than at sea level on a standard day', 'B. Be the same as at sea level', 'C. Be shorter than at sea level', 'D. Be unaffected by density altitude'],
        answer: 'A',
        explanation: 'A is correct \u2014 higher density altitude means less dense air, so the engine produces less power and the wings produce less lift, and takeoff distance increases. B and C are wrong because density altitude changes the performance from the sea-level standard-day baseline. D is wrong because density altitude directly affects both power and lift. The item tests the density-altitude concept, and on the real paper the chart-based version requires interpolating the performance chart in the testing supplement \u2014 the study lesson is to practise reading and interpolating the actual charts, which is where candidates lose the calculation items.'
      },
      {
        prompt: 'During a cross-country flight, a pilot becomes concerned about spatial disorientation in reduced visibility. Which is the most appropriate action?',
        options: ['A. Trust the flight instruments and rely on them for attitude control', 'B. Trust the body\u2019s sensations over the instruments', 'C. Descend to improve visibility', 'D. Continue the flight and hope the sensation passes'],
        answer: 'A',
        explanation: 'A is correct \u2014 when spatial disorientation occurs, the pilot must trust the flight instruments over the body\u2019s vestibular sensations, which are unreliable in reduced visibility. B is exactly the wrong move, because the sensations are the source of the disorientation. C is wrong because descending in reduced visibility does not resolve the disorientation and can create terrain risk. D is wrong because continuing without a positive instrument cross-check prolongs the hazard. The item tests the aeromedical-factors and decision-making content, and the study lesson is that the FAA rewards the safety-first, instrument-trust answer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  examDay: {
    summary:
      'The FAA Private Pilot Airplane knowledge test is a computer-based exam taken at a PSI testing centre, with 60 scored multiple-choice questions plus 5 unscored validation questions, 120 minutes, a 70 percent passing score (42 of 60), and results valid for 24 months. Exam day starts with documents: a government-issued photo ID with your signature, your instructor endorsement or ground-school graduation certificate (which the testing centre scans as your test authorization), and your scheduling confirmation \u2014 and note the name on your ID and your PSI registration must match exactly. Arrive at least 30 minutes early so check-in is complete, and expect the centre to provide an approved calculator, scratch paper and the official airman knowledge testing supplement with the charts, performance tables and figures the calculation items need \u2014 you may bring an E6B flight computer and an approved calculator, but no programmable devices and no reference material. When the clock starts, work at a pace of about two minutes per question, flag the calculation and chart items that take longer, and come back to them \u2014 the testing software lets you move forward and backward. Use the supplement deliberately for the performance and navigation items, since the FAA builds in tolerance for chart-reading variance and the closest answer is the intended one. Your score appears on screen at the end, and you receive the Airman Knowledge Test Report listing the learning statement codes of any misses, which drives the remedial training before the checkride.',
    bring: [
      'Government-issued photo ID with your signature, matching your PSI registration name exactly',
      'Your instructor endorsement or ground-school graduation certificate \u2014 the test authorization the centre scans',
      'Your scheduling confirmation and an FAA Tracking Number (FTN) reference',
      'An E6B flight computer and an FAA-approved calculator (no programmable devices)',
      'The test fee reference if payment is collected at the centre'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds \u2014 secured before entering the testing area',
      'Notes, study materials, the PHAK, the FAR/AIM, or any printed reference',
      'Programmable calculators, laptops, tablets and cameras',
      'Any expectation of a brief exam \u2014 plan for the full 120 minutes and use the review time'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm the endorsement is in place, the name matches your ID exactly, and you are scoring 85%+ on timed practice exams in the 60-question, 120-minute format.' },
      { time: '24 hours before', detail: 'Stop drilling new material. Re-run your missed learning statement codes once, confirm the centre address and travel time, and rest.' },
      { time: '30 minutes before', detail: 'Arrive, check in, scan your authorization, and complete the centre\u2019s identity and rules briefing.' },
      { time: '0-100 minutes', detail: 'Work the 60 scored questions at about two minutes each. Flag the calculation and chart items and come back; use the supplement deliberately.' },
      { time: '100-120 minutes', detail: 'Return to the flagged items, review your answers, and submit before the clock expires \u2014 the testing software allows review until submission.' },
      { time: 'After the exam', detail: 'Your score appears on screen immediately, and you receive the Airman Knowledge Test Report with the missed learning statement codes.' }
    ],
    rules: [
      'Passing score is 70% \u2014 42 of the 60 scored questions; the 5 additional validation questions do not count.',
      'The test is 120 minutes, computer-based at a PSI centre, with an on-screen or paper testing supplement for charts and figures.',
      'You must present an instructor endorsement or an approved ground-school graduation certificate to sit the test.',
      'Your government-issued photo ID must match your PSI registration name exactly.',
      'Approved calculators and E6B computers are allowed; programmable devices and reference material are not.',
      'The result is valid for 24 calendar months; after a fail, additional training and a new endorsement are required before a retake (14 CFR 61.49).'
    ],
    afterwards:
      'On a pass, your score and the Airman Knowledge Test Report are the immediate output \u2014 keep the report, because the checkride examiner will review it and probe the learning statement codes you missed, so take the report seriously as the map for your remaining ground study. The written is step one of a three-part path: knowledge test, flight training, and the checkride (the oral and practical test), and your result is valid 24 months, so plan the flight training and the checkride scheduling to use that window. On a fail, do not immediately resit \u2014 14 CFR 61.49 requires additional instruction and a new endorsement after a failure, so take the report to a flight instructor, work the missed codes, and reschedule with the new endorsement. Whichever way it goes, the knowledge test is the cheapest and most controllable step on the pilot pipeline: the commercial-pilots occupation it feeds into carries a $122,670 BLS median, and the private certificate is the rung that opens the instrument, commercial and instructor ratings that lead there.'
  }
};

export default data;
