// Depth content for: cdl-general-knowledge-test
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL knowledge-test content and fees vary by state and are revised when each state updates its driver manual or when federal standards change under 49 CFR Part 383, so we state the federal baseline — the 80 percent cut score in 49 CFR 383.135 and the required knowledge areas in 49 CFR 383.111 — and flag that the exact question count, fee and language options are set by the state that issues your Commercial Learner’s Permit. Entry-Level Driver Training (ELDT) requirements, effective 7 February 2022, also determine who may sit the knowledge test at all, and those rules are federal rather than state. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class, so the closest official fit for the General Knowledge Test is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), which is the occupation a Class A or B CDL unlocks.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Knowledge areas, the 80 percent cut score and CLP rules were taken from 49 CFR Part 383 (Subparts G and H) and the FMCSA CDL materials, and cross-checked against the AAMVA 2005 CDL Test System model that state manuals follow. State-specific fees and question counts were drawn from named state driver manuals and noted as state-set.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers (BLS, May 2024)',
    summary:
      'The General Knowledge Test is not itself a job credential — it is the first gate to a Commercial Learner’s Permit (CLP) and, after a skills test, to a Class A or Class B CDL — but the occupation it leads to is the single largest driving job in the country, so BLS data is the right way to size the payoff. The closest official occupation is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), because a Class A CDL is what that role requires; there is no BLS occupation called "CDL driver", and any salary page that quotes one is quoting a job-board aggregate rather than government data. That occupation had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800. The spread matters for how you read this test: a General Knowledge pass alone does not put you at the median, because the median reflects experienced drivers with a clean record and, often, years of route seniority — but it does remove the licence barrier that stands between an entry applicant and the middle of the distribution. The employment base is enormous: 2,235,100 jobs in 2024, projected to grow about 4 percent to 2,324,400 by 2034, adding roughly 89,300 net jobs, with about 237,600 openings a year arising from both growth and replacement. That replacement figure is the durable argument for treating the CDL as a recession-resistant credential: freight does not stop moving when the economy softens. Note carefully that BLS does not isolate CDL class in its wage series, so these numbers describe the occupation, not the licence, and a bus or straight-truck (Class B) driver may sit below the Class A median; the School Bus Drivers series (SOC 53-3051) carries a lower median and is covered separately where relevant.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,640', note: 'BLS OEWS May 2024 (10th percentile)' },
      { label: '25th percentile', value: '$47,230', note: 'BLS OEWS May 2024' },
      { label: '75th percentile', value: '$65,520', note: 'BLS OEWS May 2024' },
      { label: 'Highest 10 percent', value: 'more than $78,800', note: 'BLS OEWS May 2024 (90th percentile)' },
      { label: 'Employment, 2024', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~237,600 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+4% projected change 2024-34 (growth), ~237,600 openings a year; the General Knowledge Test is the universal gateway to this occupation regardless of trailer type or endorsement.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'FMCSA and the states publish the 80 percent cut score — 49 CFR 383.135 — but no national pass rate',
    summary:
      'The federal government tells you exactly what score you need and declines to tell you how many people get there. 49 CFR 383.135(a)(1) requires that an applicant "correctly answer at least 80 percent of the questions on each knowledge test," and that 80 percent is the only passing threshold in the rule — it is not a scaled or curved score, and it applies per test, so the General Knowledge Test is passed independently of any other knowledge test you take the same day. What is not published, at any level, is a pass rate. FMCSA does not release national CDL knowledge-test pass statistics, and neither does any state DMV/SDLA we are aware of; the percentages you see on commercial apps and "CDL practice" sites are those vendors’ own internal practice-test numbers, not official outcomes, and we have not repeated them because they are not sourced to a government. The practical reading of the 80 percent rule is that it is a hard floor with no partial credit and no curve: if your state writes its General Knowledge exam as 50 questions, you must mark at least 40 correct, and a 39 leaves you at 78 percent and a failure. States set the question count and the retake window themselves, and many permit a same-day or next-day retake for a fee, but the 80 percent line is uniform because it is federal. Two federal prerequisites sit upstream of the percentage and matter more than any rumoured rate: ELDT theory training must be logged in the FMCSA Training Provider Registry before a first-time Class A or B applicant may take the test (effective 7 February 2022), and once you pass you hold a CLP, not a CDL — the skills (road) test still lies ahead, and under 49 CFR 383.25(e) you must wait at least 14 days after CLP issuance before taking it.',
    source: {
      label: 'eCFR — 49 CFR Part 383 (knowledge tests, CLP, and 80% standard)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat:
      'No national or state pass-rate statistic is published by FMCSA or any state DMV/SDLA for the CDL knowledge tests. We have deliberately left the pass-rate table empty rather than estimate one. What is verifiable is the 80 percent cut score in 49 CFR 383.135 and the ELDT prerequisite for first-time applicants; the narrative above covers those instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The General Knowledge Test draws on the first sections of your state’s CDL manual — almost always Section 1 (Driving Safely), Section 2 (Carrying Cargo Safely), and, if you intend to drive a bus, Section 3 (Transporting Passengers). The exact chapter order and the number of questions vary by state, but the federal knowledge areas are fixed in 49 CFR 383.111(a)(1) through (a)(20): they run from basic vehicle control and visual search, through speed and space management, hazard perception, emergency control of a stopped vehicle, skid control and recovery, railroad-highway grade crossings, and inspection, to cargo documentation and securement. The first planning decision is whether the General Knowledge Test is all you need. If you will drive a combination (Class A) or an air-braked vehicle, you must also pass the Combination Vehicles and/or Air Brakes knowledge tests, which are separate exams and are covered in their own depth files — but you typically sit them on the same CLP application, so build the study block to cover all three if your vehicle requires them. The plan below assumes a computer-delivered, multiple-choice exam of roughly 50 questions needing 40 correct (80 percent), and it assumes you have already cleared ELDT if you are a first-time applicant, because the DMV will refuse the test otherwise. Total elapsed time is short — this is a reading-and-recall exam, not a skills exam — but most failures come from reading the wrong manual or skipping the cargo and hazard sections, so the schedule weights those heavier than candidates expect.',
    totalHours: '15-30 hours of reading and timed practice',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Section 1 — Driving Safely, part 1',
        tasks: [
          'Download the CDL manual from the DMV/SDLA of the state that will issue your CLP — not a generic app — and read Section 1 through visual search and space management',
          'Master the speed/space rule: below 40 mph leave one second per 10 feet of vehicle length; above 40 mph add one extra second (minimum 4 seconds total for a bus)',
          'Work the speed-management material: total stopping distance = perception + reaction + braking distance, and why it grows with the square of speed',
          'Take your state’s official practice test for Section 1 and record every miss by topic'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Section 1 — Driving Safely, part 2 (hazards and emergencies)',
        tasks: [
          'Hazard perception and the "what if" scanning habit; distracted, drunk and drowsy driving rules and the federal hours-of-service backdrop',
          'Skid control and recovery: identify which axle is skidding and how to correct a front- vs rear-wheel skid',
          'Railroad-highway grade crossings, bridge and overpass clearance, and emergency control of a stopped vehicle (parking, stalled, fire)',
          'Night, winter, rain, fog and mountain driving; managing the space around you in adverse conditions'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Section 2 — Cargo, and Section 3 if applicable',
        tasks: [
          'Cargo weight distribution, axle limits and the driver’s responsibility for securement; inspect within 25 miles of starting, every 3 hours or 150 miles, and after every break',
          'Documentation: the driver vehicle inspection report and what you must know before moving loaded cargo',
          'If you will drive a bus, read Section 3: passenger loading, aisle and emergency-exit rules, and the 100-foot signalling rule for turns',
          'Do not conflate this with the Air Brakes or Combination tests — those are separate and listed as such on your CLP'
        ],
        hours: '4-6 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Full-length practice and gap closing',
        tasks: [
          'Three timed 50-question practice exams using your state’s question bank or an official-equivalent set',
          'Re-read only the chapters where you missed questions; this exam rewards knowing the manual’s wording, not general road sense',
          'Drill the cargo-inspection intervals and the space/speed rule until they are automatic',
          'Confirm ELDT is logged in the Training Provider Registry before booking, and bring the CLP identity documents on test day'
        ],
        hours: '4-6 hrs'
      }
    ],
    variants: [
      { label: 'First-time applicant, ELDT not yet done', detail: 'Add one to two weeks before Week 1. The DMV will refuse the knowledge test until your ELDT theory is in the FMCSA Training Provider Registry, so complete the registered provider’s course and verify the entry before you book. Studying the manual first is fine; sitting the test is not.' },
      { label: 'Holding a CLP already, adding a class or endorsement', detail: 'Often a single focused week. You have seen the material; concentrate on the cargo and hazard chapters and your state’s exact question count, because retesters fail most often by assuming the test is unchanged from their last attempt.' },
      { label: 'Bus (Class B passenger) seeker', detail: 'Add Section 3 time in Week 3. Passenger transport adds its own knowledge sub-area, including loading, the 100-foot turn signal, and emergency-exit procedures; treat it as a distinct mini-test layered on the General Knowledge content.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The General Knowledge Test is a reading-comprehension exam about a specific document: your state’s CDL manual. The single most common failure mode is treating it as a general driving-knowledge test and studying from an app or a different state’s material. The questions are written from the manual’s wording, so the strategy that pays off is narrower and more mechanical than candidates expect.',
    items: [
      {
        title: 'Study the manual your issuing state actually publishes',
        detail: 'CDL manuals follow the AAMVA 2005 CDL Test System model, but each state phrases and orders its sections differently, and the knowledge test is drawn from that state’s bank. A candidate who memorises a third-party app’s phrasing and then meets the DMV’s wording on "securement" vs "immobilisation" loses cheap points. Read the PDF from the DMV that will issue your CLP, end to end, at least once.'
      },
      {
        title: 'Use your state’s official practice tests, not just commercial ones',
        detail: 'Most state DMVs publish free practice exams whose wording tracks the real bank. Commercial apps are useful for volume but are not the source. Anchor your prep to the official set and use the paid apps only for extra repetition once the official material is clean.'
      },
      {
        title: 'Internalise the two numeric rules that appear constantly',
        detail: 'The speed/space rule (one second per 10 feet of vehicle length below 40 mph, plus one second above 40) and the cargo-inspection cadence (within 25 miles of start, every 3 hours or 150 miles, and after every break) show up on almost every General Knowledge exam. When you know both cold, you convert a cluster of easy items you would otherwise second-guess.'
      },
      {
        title: 'Treat the 80 percent as a hard per-test floor',
        detail: 'Because 49 CFR 383.135 requires 80 percent on each knowledge test with no curve, a 50-question exam needs 40 correct and a 39 is a fail. Bank your correct answers early with quick items, and do not let a single hard question eat the clock — there is no partial credit to recover later.'
      },
      {
        title: 'Do not let Air Brakes or Combination bleed into this one',
        detail: 'General Knowledge, Air Brakes and Combination Vehicles are separate tests with separate 80 percent requirements. Mixing their facts while studying causes candidates to over-think General Knowledge items with air-brake details that are not on this exam. Keep three distinct study stacks if your vehicle needs all three.'
      },
      {
        title: 'Clear ELDT before you book, not the night before',
        detail: 'For a first-time Class A or B applicant the FMCSA Training Provider Registry entry is a hard prerequisite to sitting the test. Confirm it is logged — and that your registered provider submitted it — before you pay the fee, because a missing entry means a wasted trip and a non-refundable retest.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decision here is mostly "free vs convenience." The authoritative source — your state’s CDL manual and its official practice tests — costs nothing, and for most candidates it is sufficient. Paid resources earn their place only as repetition engines or as structured courses for people who will not otherwise sit down with the PDF. Beware any product that quotes a "CDL pass rate," since that figure is not published by any government and is the vendor’s own practice-test metric.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual (PDF)', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from — read it first and last'] },
      { label: 'Your state DMV official practice tests', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'Registered ELDT theory course (if first-time)', values: ['Varies by provider, commonly $0-300', 'Online, logged to the FMCSA registry', 'Mandatory prerequisite before the DMV will seat a first-time Class A/B applicant'] },
      { label: 'Commercial CDL prep apps (e.g. driving-tests.org, CDL Prep)', values: ['Free tier; ~$5-15/mo for premium', 'Mobile app, large question volume', 'Extra repetition and spaced practice once the official material is clean'] },
      { label: 'CDL study guidebooks (e.g. Exam Prep or state-specific)', values: ['~$15-30', 'Print or eBook', 'A portable summary if you will not open the PDF; confirm it matches your state'] },
      { label: 'CDL training school permit-prep class', values: ['Often bundled into tuition; standalone $50-200', 'Classroom or online', 'Candidates who need structure and a deadline rather than self-study'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by state and provider. State DMV manuals and practice tests are free and authoritative; commercial "pass rate" claims are vendor-internal and not official. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'Nearly every avoidable failure on the General Knowledge Test comes from one of three roots: studying the wrong document, ignoring a federal prerequisite, or misunderstanding what passing actually gets you. The version and prerequisite errors below are the ones that waste the most money.',
    items: [
      {
        mistake: 'Studying a generic app instead of your issuing state’s manual',
        fix: 'The knowledge test is drawn from your state’s question bank, which follows that state’s manual wording. A national app gives you the concepts but not the phrasing, and CDL items are often "which exact wording" questions. Read the PDF from the DMV that will issue your CLP, and use apps only for repetition after.'
      },
      {
        mistake: 'Forgetting ELDT must be completed first',
        fix: 'Since 7 February 2022, a first-time Class A or B applicant must have ELDT theory logged in the FMCSA Training Provider Registry before the DMV will administer the knowledge test. Booking without it means a refused test and a forfeited fee. Verify the registry entry — not just course completion — before you travel to the DMV.'
      },
      {
        mistake: 'Thinking a passing General Knowledge score gives you a CDL',
        fix: 'It gives you a Commercial Learner’s Permit, not a licence. After the CLP you must still pass the skills (road) test, and under 49 CFR 383.25(e) you cannot take it until at least 14 days after CLP issuance. Plan the calendar accordingly; the knowledge test is the start of the process, not the end.'
      },
      {
        mistake: 'Assuming 80 percent is rounded or curved',
        fix: '49 CFR 383.135 sets a flat 80 percent per knowledge test with no curve. On a 50-question exam, 40 is passing and 39 is failing — there is no partial credit and no rounding up. Budget your time so you lock in the straightforward items rather than risking a one-question shortfall on a hard question.'
      },
      {
        mistake: 'Conflating General Knowledge with the Air Brakes / Combination tests',
        fix: 'If your vehicle needs air brakes or is a combination (Class A), those are separate knowledge exams, each with its own 80 percent requirement. Studying them as one blob causes candidates to second-guess General Knowledge items with air-brake facts that are not tested here. Keep the three stacks distinct and sit them as separate, named sub-tests on your CLP.'
      },
      {
        mistake: 'Assuming English is always offered — or always required',
        fix: 'States may offer the knowledge test in other languages and via oral administration under 49 CFR 383.133, but a 2025 federal English-proficiency enforcement change (CVSA out-of-service standard effective 25 June 2025, under 49 CFR 391.11(b)(2)) means a driver who cannot demonstrate English proficiency can be placed out of service on the road regardless of how the test was taken. Prepare in English for the road, even if your state permits another testing language.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The General Knowledge Test is multiple-choice and delivered by computer at a state DMV/SDLA; there is no practical or performance component at the knowledge stage — that comes later at the skills test. The federal baseline is an 80 percent pass under 49 CFR 383.135, with states setting the exact question count; a common configuration is 50 questions requiring 40 correct, but verify your state’s number because it is not federal. Under 49 CFR 383.133 the state must use FMCSA pre-approved (AAMVA 2005 CDL Test System) items, may offer the test in another language or orally, but may not use a translator. Items are single-best-answer by design, though some states include true/false or multiple-response variants; the worked samples below are editor-written illustrations of the published blueprint, not live exam items, and they track the actual knowledge areas in 49 CFR 383.111(a). The pacing implication is simple: because there is no curve, your only job is to push the correct count above the 80 percent line, so answer the quick items immediately and return to hard ones rather than stalling.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'A stem drawn from the manual’s wording with one correct option and plausible distractors taken from adjacent rules (e.g. the 3-hour vs 25-mile cargo check). Partial familiarity is punished because the wrong options are real, nearby facts.' },
      { name: 'True / false', share: 'A minority in many states', detail: 'Statements about safe-driving rules or inspection duties; watch for absolute words ("always", "never") that the manual qualifies.' },
      { name: 'Multiple response', share: 'Occasional', detail: 'The stem asks you to select all that apply from a short list; scoring is typically all-or-nothing, so a near-miss earns nothing.' },
      { name: 'Scenario / "what should you do"', share: 'Heavier in hazard-perception items', detail: 'A described road situation asks for the correct action or the safe following distance; these reward having memorised the speed/space rule rather than estimating from car-driving habit.' }
    ],
    samples: [
      {
        prompt: 'You are driving a 40-foot truck at 55 mph on a dry, daylight road with good visibility. Under the CDL space-management rule, what is the minimum safe following distance you should maintain?',
        options: [
          'A. 3 seconds',
          'B. 4 seconds',
          'C. 5 seconds',
          'D. 6 seconds'
        ],
        answer: 'C',
        explanation: 'The CDL rule is one second of following distance per 10 feet of vehicle length below 40 mph, plus one extra second at speeds above 40 mph. A 40-foot vehicle is 4 seconds of length, and at 55 mph you add the extra second, giving 5 seconds total. A is the length-only figure and ignores the >40 mph add-on; B is what you would hold for a 40-foot vehicle at, say, 35 mph; D over-states it for these conditions. This is the most frequently missed numeric rule on the General Knowledge exam because candidates forget the speed add-on.'
      },
      {
        prompt: 'After beginning a trip with loaded cargo, federal rules require you to inspect the cargo and its securement:',
        options: [
          'A. Only at the start of the trip and at the end of the day',
          'B. Within 25 miles of starting, then every 3 hours or 150 miles, and after every break',
          'C. Once every 500 miles regardless of stops',
          'D. Only if you suspect something has shifted'
        ],
        answer: 'B',
        explanation: 'The manual requires an initial cargo inspection within the first 25 miles of the trip, then at least every 3 hours or 150 miles (whichever comes first), and again after every break you take. A and C omit the mid-trip cadence entirely, and D wrongly makes inspection conditional on suspicion — the rule is time/distance-based, not suspicion-based. This interval is a recurring General Knowledge item and is easy to bank if memorised exactly.'
      },
      {
        prompt: 'In city traffic you intend to make a right turn. The CDL manual requires you to signal your intention to turn for at least:',
        options: [
          'A. 50 feet before the turn',
          'B. 100 feet before the turn',
          'C. 200 feet before the turn',
          'D. As you begin steering into the turn'
        ],
        answer: 'B',
        explanation: 'The CDL manual specifies a continuous signal for at least 100 feet before turning in city traffic (a longer distance is required at higher speeds on open roads). A is half the required distance; C is the higher-speed figure misapplied to the city case; D is far too late to give other road users warning. This is a classic "which exact number" item where the manual’s wording is what the test asks for.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.111 knowledge areas), not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The General Knowledge Test is taken at a state DMV/SDLA office, by computer, as the knowledge step toward a Commercial Learner’s Permit. Unlike a later skills test, there is no vehicle on exam day — you arrive with documents, sit at a terminal, and answer multiple-choice items to the 80 percent standard. The two things that go wrong most often are paperwork and expectation: candidates either arrive without the exact identity/residency documents the REAL-ID-era DMV requires, or they believe a pass ends the process when it only starts the CLP clock. Build your day around clearing ELDT verification first and having the document list in hand, because a refused test is a forfeited fee. Where the exam differs from a car-licence test is the federal overlay: the 80 percent line is fixed, the CLP you earn is valid for a limited time (commonly up to 180 days, never beyond one year under 49 CFR 383.25(c)), and the 14-day waiting period before any skills test begins the moment the CLP is issued. Plan transport home and the skills-test booking before you leave the building.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV’s REAL-ID document list — check the exact list, as requirements are strict',
      'Confirmation that ELDT theory is logged in the FMCSA Training Provider Registry (first-time Class A/B applicants)',
      'Correct fee for the CLP application, knowledge test and any endorsement tests you are taking — set by your state',
      'Corrective lenses if you need them to meet the federal vision standard; the test may include a vision check',
      'Your CLP application confirmation number if you booked online'
    ],
    leave: [
      'Phones, smartwatches and earbuds — secured before you enter the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'Bags, coats and food beyond what the office permits; lockers are typically provided',
      'A translator or interpreter — 49 CFR 383.133 permits oral/foreign-language administration but not a third-party interpreter',
      'Any expectation of driving a vehicle home as a licensed CDL holder — you leave with a CLP, supervised only'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm ELDT is in the registry and assemble the DMV document list exactly. Mismatched or missing documents are the most common cause of a refused test.' },
      { time: 'Day before', detail: 'Re-run two timed 50-question practice exams; re-read only the chapters where you missed items. Confirm the office location and whether walk-in or appointment is required.' },
      { time: 'Arrival', detail: 'Allow extra time for document check-in and the photo. Present your identity/residency documents and pay the CLP and test fees.' },
      { time: 'At the terminal', detail: 'You receive the multiple-choice General Knowledge exam (your state’s question count). Work the quick items first, then return to harder ones; there is no curve, only the 80 percent floor.' },
      { time: 'On a pass', detail: 'You are issued a CLP. The 14-day waiting period before the skills test starts now, and the CLP validity clock (commonly 180 days) starts as well — diary both.' },
      { time: 'On a fail', detail: 'You fall below 80 percent. Most states allow a retake after a short wait for a new fee; study the exact chapters you missed and rebook rather than guessing the same material will stick.' }
    ],
    rules: [
      'Passing standard is 80 percent on the knowledge test per 49 CFR 383.135 — a flat floor, no curve, no rounding.',
      'First-time Class A/B applicants must have ELDT theory logged in the FMCSA Training Provider Registry before the test is administered.',
      'A passing score yields a Commercial Learner’s Permit, not a CDL; a licensed CDL holder must supervise you whenever you drive.',
      'Under 49 CFR 383.25(e) you must wait at least 14 days after CLP issuance before taking the skills (road) test.',
      'The CLP is valid for a limited period — commonly up to 180 days and never beyond one year under 49 CFR 383.25(c); check your state’s term.',
      'States may offer the test in another language or orally under 49 CFR 383.133, but a third-party interpreter is not permitted.',
      'Retake policy, question count and fee are set by the state, not by federal rule; verify all three with your DMV.'
    ],
    afterwards:
      'On a pass you leave with a Commercial Learner’s Permit and the 14-day skills-test clock running, plus a CLP validity window (commonly 180 days, capped at one year) that you must diary immediately — let it lapse and you re-take the knowledge test. If your vehicle needs air brakes or is a combination, you should already have sat those separate knowledge tests on the same application; if you skipped them and later need them, you return for another knowledge exam. On a fail, resist the urge to immediately re-book the same material — most states allow a prompt retake for a new fee, but the cheap move is to re-read the specific manual chapters where you missed items and re-run official practice tests until clean, because the 80 percent line is unforgiving and a one-question shortfall is a full failure. Whether pass or fail, remember the road-side reality: a 2025 federal English-proficiency enforcement standard (effective 25 June 2025, 49 CFR 391.11(b)(2), CVSA out-of-service) means that however the knowledge test was administered, you can be placed out of service on the road if you cannot demonstrate English proficiency — so keep your real preparation in English even where your state permits another testing language.'
  }
};

export default data;
