// Depth content for: cdl-air-brakes-knowledge-test
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL knowledge-test content and fees vary by state and are revised when each state updates its driver manual or when federal standards change under 49 CFR Part 383, so we state the federal baseline — the 80 percent cut score in 49 CFR 383.135 and the required knowledge areas in 49 CFR 383.111 — and flag that the exact question count, fee and language options are set by the state that issues your Commercial Learner’s Permit. Entry-Level Driver Training (ELDT) requirements, effective 7 February 2022, also affect who may sit the knowledge test at all, and those rules are federal. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class, so the closest official fit for the Air Brakes knowledge test is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), because most air-braked commercial vehicles are tractor-trailers, though air brakes also appear on many Class B buses and straight trucks (SOC 53-3052 / 53-3051).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Knowledge areas, the 80 percent cut score and the "L" air-brake restriction rule were taken from 49 CFR Part 383 (Subparts G and H) and cross-checked against the AAMVA 2005 CDL Test System model that state Air Brakes sections follow. State-specific fees and question counts were drawn from named state driver manuals.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers (BLS, May 2024)',
    summary:
      'The Air Brakes knowledge test is required to remove the federal "L" restriction — the air-brake limitation placed on a CLP or CDL when an applicant has not demonstrated air-brake knowledge or has taken the skills test in a vehicle without air brakes. Because the great majority of commercial vehicles that command the strongest wages are air-braked, the closest BLS occupation is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), and there is no separate "air-brake driver" series, so any salary figure branded that way is a job-board aggregate rather than government data. That occupation had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800; the spread is wide because an air-brake-equipped combination licence is what lets an experienced driver move into higher-paying freight, where the top decile sits. The employment base is large and stable: 2,235,100 jobs in 2024, projected to grow about 4 percent to 2,324,400 by 2034, adding roughly 89,300 net jobs, with about 237,600 openings a year from growth plus replacement. Air brakes also matter for Class B work — many transit and school buses and straight trucks use them — so the relevant BLS series additionally include Transit and Intercity Bus Drivers (SOC 53-3052, May 2024 median $51,250 by OEWS) and School Bus Drivers (SOC 53-3051, OOH median $47,040); we have named those specifically rather than quoting a single blended figure. The durable point is that the "L" restriction is a pay ceiling as much as a safety rule: a driver who never clears it is confined to hydraulic-brake vehicles, which are a shrinking share of the freight and passenger fleet, so the test is worth more than its short question count suggests. BLS classifies by job duties, not licence class, so these numbers describe the destination the air-brake qualification unlocks, not a guaranteed starting wage.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-3032)' },
      { label: 'Lowest 10 percent (SOC 53-3032)', value: 'less than $38,640', note: 'BLS OEWS May 2024 (10th percentile)' },
      { label: 'Highest 10 percent (SOC 53-3032)', value: 'more than $78,800', note: 'BLS OEWS May 2024 (90th percentile)' },
      { label: 'Median, transit and intercity bus drivers (SOC 53-3052)', value: '$51,250', note: 'BLS OEWS May 2024 — many Class B air-brake buses' },
      { label: 'Median, school bus drivers (SOC 53-3051)', value: '$47,040', note: 'BLS OOH, 2024 — Class B air-brake buses' },
      { label: 'Employment, heavy and tractor-trailer (2024)', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings (SOC 53-3032)', value: '~237,600 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+4% projected change 2024-34 (growth) for SOC 53-3032, ~237,600 openings a year; clearing the Air Brakes test removes the "L" restriction that would otherwise cap you at hydraulic-brake vehicles.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'FMCSA and the states publish the 80 percent cut score — 49 CFR 383.135 — but no national pass rate',
    summary:
      'As with every CDL knowledge test, the federal government fixes the passing line and publishes no pass rate. 49 CFR 383.135(a)(1) requires at least 80 percent correct on each knowledge test, and 49 CFR 383.135(a)(2) defines the consequence of failing the air-brake portion specifically: the applicant "shall be issued a commercial learner’s permit or commercial driver’s license that contains the restriction described in § 383.95(b)(2)" — the "L" air-brake restriction. The key distinction from the Combination Vehicles test is that failing Air Brakes does not block the CDL; it simply brands the licence so its holder may not drive any vehicle equipped with air brakes. That makes the stakes different: a driver can hold a valid CDL with an "L" restriction and legally operate hydraulic-brake vehicles, but is locked out of the bulk of the freight and passenger fleet. The 80 percent line is a flat floor with no curve: if your state writes the exam as 25 questions, you need 20 correct, and 19 is a fail with no rounding. States set the question count and retake terms themselves; many permit a prompt retake for a fee. The federal prerequisites still apply: ELDT theory must be in the FMCSA Training Provider Registry before a first-time applicant may sit the test (effective 7 February 2022), and a passing score yields only a CLP, after which the 14-day skills-test waiting period of 49 CFR 383.25(e) applies. The practical reading is that the Air Brakes test is small and frequently under-prepared, yet its failure imposes a restriction that follows the licence for as long as the driver avoids re-testing — so candidates should treat clearing it as part of earning a full, unrestricted credential rather than as optional.',
    source: {
      label: 'eCFR — 49 CFR Part 383 (knowledge tests, CLP, and 80% standard)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat:
      'No national or state pass-rate statistic is published by FMCSA or any state DMV/SDLA for the Air Brakes knowledge test. We have deliberately left the pass-rate table empty rather than estimate one. What is verifiable is the 80 percent cut score in 49 CFR 383.135 and, specifically for this exam, the "L" restriction in 49 CFR 383.135(a)(2) and 49 CFR 383.95(b)(2); the narrative above covers those instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The Air Brakes knowledge test draws on Section 5 of your state’s CDL manual (Air Brakes), which sits on top of the General Knowledge material because it is taken as part of the same CLP application. The federal knowledge areas are fixed in 49 CFR 383.111(b)(1) through (b)(7): they cover the parts of an air-brake system, dual air-brake systems, inspection (including the air-compressor governor, leak and build-up checks, and low-air warning), the use of air brakes (brake lag, stopping distance, and proper application), and the relationship between air-brake knowledge and the "L" restriction. The first planning decision is whether you need this test at all: if you will drive any air-braked vehicle — most Class A tractors and many Class B buses and straight trucks — you must pass it to avoid the "L" restriction. If your vehicle has hydraulic brakes only, you can skip it, but that choice caps your licence. The plan below assumes a computer-delivered, multiple-choice exam; a common configuration is 25 questions requiring 20 correct (80 percent), but your state sets the count. Because the air-brake material is small but dense with specific pressure numbers — the 20-45 psi spring-brake range, the 60 psi low-pressure warning threshold, the 120-140 psi governor cut-out, and the 85-100 psi build-up in about 45 seconds — the failure pattern is not volume but mistaking which number belongs to which component. Total elapsed time is short; the risk is the numeric detail.',
    totalHours: '8-15 hours of reading and timed practice',
    weeks: [
      {
        label: 'Day 1-2',
        focus: 'Section 5.1 — Parts of an air-brake system',
        tasks: [
          'Learn the air supply path: compressor, reservoir(s), foot valve, brake chambers, slack adjusters, pushrods, S-cam, and foundation (drum) brakes',
          'Understand the parking/emergency (spring) brake and how it differs from the service brake',
          'Know the alcohol evaporator’s purpose in cold weather (older systems) and why air must be kept free of contamination',
          'Take your state’s practice items for air-brake parts and record misses'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 3',
        focus: 'Section 5.2 — Dual air-brake systems',
        tasks: [
          'Know there are two independent air-brake systems (typically front/rear or tractor/trailer) sharing a single compressor and reservoir set',
          'Understand that a failure in one circuit still leaves partial braking, and why the low-air warning and build-up checks cover both',
          'Distinguish the service, parking and emergency functions within the dual system'
        ],
        hours: '1-2 hrs'
      },
      {
        label: 'Day 4-5',
        focus: 'Section 5.3 — Inspection (the pressure numbers)',
        tasks: [
          'Governor cut-out: the compressor should stop pumping at roughly 120-140 psi',
          'Build-up: at fast idle the system should build 85-100 psi within about 45 seconds; note the 50-to-90 psi in about one minute at idle check',
          'Low-air warning: the warning must activate before pressure drops below 60 psi',
          'Spring (emergency) brakes apply when pressure falls to roughly 20-45 psi; a static leak test limit (e.g. no more than ~3 psi loss in one minute for a single vehicle, ~4 psi for a combination) — verify your state’s exact figure'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 6',
        focus: 'Section 5.4 — Using air brakes',
        tasks: [
          'Brake lag: at 55 mph the air-brake lag distance is about 32 feet — the delay while air travels to the chambers before the brakes begin to bite',
          'Total stopping distance from 55 mph is roughly 450 feet or more for a loaded combination, longer than a hydraulic-brake vehicle',
          'Proper use: do not ride the brake, use controlled/stable braking, and fan the brake on slippery surfaces; do not over-brake and drain the air',
          'Rehearse the "L" restriction consequence: failing this test limits you to non-air-brake vehicles'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 7',
        focus: 'Full-length practice and gap closing',
        tasks: [
          'Two or three timed practice exams at your state’s question count',
          'Re-read only the chapters where you missed items, especially the pressure thresholds',
          'Confirm ELDT is logged before booking and that you are taking this with the General Knowledge (and Combination, if needed) tests on one CLP'
        ],
        hours: '1-2 hrs'
      }
    ],
    variants: [
      { label: 'First-time applicant, ELDT not done', detail: 'Add the ELDT step before booking. The DMV will refuse the knowledge test until your ELDT theory is in the FMCSA Training Provider Registry; complete the registered provider’s course and verify the entry first.' },
      { label: 'Holding a CDL with an "L" restriction', detail: 'This is a focused 3-4 day re-study. You already hold the licence; passing this test removes the restriction. Concentrate on the pressure numbers, which are what restriction holders most often miss on the retest.' },
      { label: 'Hydraulic-brake-only driver', detail: 'You may choose to skip this test, but understand the trade: skipping leaves the "L" restriction on permanently until you later test, and excludes most freight and bus work. Most candidates take it anyway to keep the licence unrestricted.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The Air Brakes test is the most number-dense of the three knowledge exams, and it is failed most often not by candidates who do not understand brakes but by candidates who cannot keep the pressure figures straight — which number is the governor cut-out, which is the low-air warning, which is the spring-brake application. The strategy that pays off is to build a single reference table of thresholds and drill it until each number is attached to exactly one component.',
    items: [
      {
        title: 'Build one table of pressure thresholds and memorise it cold',
        detail: 'Governor cut-out 120-140 psi (compressor stops). Build-up 85-100 psi in about 45 seconds at fast idle. Low-air warning before 60 psi. Spring/emergency brakes apply at 20-45 psi. Brake lag ~32 feet at 55 mph. Total stop ~450 feet or more from 55 mph loaded. Writing these as a paired list and self-quizzing is the highest-leverage hour you can spend, because the exam is built around exactly these figures.'
      },
      {
        title: 'Separate the three brake functions in your head',
        detail: 'Service brakes stop the vehicle in motion; parking brakes hold a parked vehicle; emergency (spring) brakes act when air pressure is lost. Candidates who blur these give wrong answers on questions about what happens at low pressure. The spring brake is the one tied to the 20-45 psi range and to the danger of draining air by riding the brake.'
      },
      {
        title: 'Know the dual-system logic',
        detail: 'Two independent circuits mean a single failure leaves partial braking, and the inspection checks (warning, build-up, leak) must be understood as covering both. Questions probe what you would still have if one circuit fails — the answer is partial, not zero, braking.'
      },
      {
        title: 'Sit this with General Knowledge (and Combination) on one CLP',
        detail: 'All are part of the same CLP application, so scheduling them together saves a trip and a fee cycle. Study them as one block but keep distinct question stacks, since mixing air-brake pressure numbers into General Knowledge items (or vice versa) causes avoidable wrong answers.'
      },
      {
        title: 'Understand the "L" restriction as a real cost',
        detail: 'Failing this test does not block your CDL — it stamps an "L" restriction that confines you to non-air-brake vehicles and follows the licence until you re-test. Treat clearing it as earning an unrestricted credential, not as optional, because the restriction is a pay and opportunity ceiling.'
      },
      {
        title: 'Clear ELDT before you book',
        detail: 'For a first-time applicant the FMCSA Training Provider Registry entry is a hard prerequisite. Verify it is logged — not merely that a course was completed — before you pay, or the test is refused and the fee forfeited.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'As with the other CDL knowledge tests, the authoritative source is free: your state’s CDL manual Section 5 plus its official practice items. Paid resources add value mainly as repetition or as structured ELDT courses. Beware any product quoting an "air-brake pass rate," since that figure is not published by any government and is the vendor’s own practice-test metric, not an official outcome.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual, Section 5 (Air Brakes)', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from — read it end to end'],
      },
      { label: 'Your state DMV official practice tests', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'Registered ELDT theory course (if first-time)', values: ['Varies by provider, commonly $0-300', 'Online, logged to the FMCSA registry', 'Mandatory prerequisite before the DMV seats a first-time applicant'] },
      { label: 'Commercial CDL prep apps (e.g. driving-tests.org, CDL Prep)', values: ['Free tier; ~$5-15/mo for premium', 'Mobile app, large question volume', 'Repetition once the official material is clean'] },
      { label: 'CDL study guidebooks with an air-brake chapter', values: ['~$15-30', 'Print or eBook', 'A portable summary if you will not open the PDF; confirm it matches your state'] },
      { label: 'CDL training school air-brake module', values: ['Often bundled into tuition; standalone $50-150', 'Classroom or online', 'Candidates who want a deadline and hands-on brake demos'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by state and provider. State DMV manuals and practice tests are free and authoritative; commercial "pass rate" claims are vendor-internal and not official. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The avoidable failures on the Air Brakes test cluster around three errors: mixing up the pressure numbers, underestimating the "L" restriction’s cost, and confusing this test with the skills-test air-brake check. The version and prerequisite errors below waste the most money.',
    items: [
      {
        mistake: 'Swapping the pressure thresholds between components',
        fix: 'The exam expects precise pairing: governor cut-out 120-140 psi, build-up 85-100 psi in ~45 seconds, low-air warning before 60 psi, spring-brake application 20-45 psi, brake lag ~32 ft at 55 mph. Candidates who know "the numbers" but cannot attach each to its component miss a whole cluster. Build one table and drill it until each figure has exactly one home.'
      },
      {
        mistake: 'Thinking failure blocks the CDL',
        fix: 'Under 49 CFR 383.135(a)(2), failing Air Brakes does not refuse the licence — it stamps the "L" air-brake restriction, confining you to non-air-brake vehicles. Candidates either over-panic (believing they lose the CDL) or under-prepare (believing it is consequence-free). The truth is in between: you keep a valid but restricted licence, and the restriction is a real pay and opportunity ceiling until removed by re-testing.'
      },
      {
        mistake: 'Conflating the knowledge test with the skills-test brake check',
        fix: 'The knowledge test asks about system parts and pressure thresholds; the skills (road) test includes a separate pre-trip air-brake inspection you perform on a vehicle. Mixing the two while studying causes wrong answers on both. Keep the written thresholds distinct from the hands-on check sequence you will later perform.'
      },
      {
        mistake: 'Assuming air brakes stop shorter than hydraulic',
        fix: 'Air brakes have brake lag — at 55 mph about 32 feet of travel before the brakes even begin to bite — so total stopping distance from 55 mph is roughly 450 feet or more for a loaded combination, longer than a comparable hydraulic-brake vehicle. Candidates who assume "bigger brakes = shorter stop" get the stopping-distance items wrong.'
      },
      {
        mistake: 'Riding the brake and draining the air',
        fix: 'The manual warns against continuous brake application that bleeds air pressure; if pressure drops into the 20-45 psi spring-brake range, the emergency brakes can apply. Questions test this cause-and-effect; candidates who think of the brake pedal as identical to a car’s get the "what happens if you lose air" items wrong.'
      },
      {
        mistake: 'Forgetting ELDT before booking',
        fix: 'Since 7 February 2022 a first-time applicant must have ELDT theory logged in the FMCSA Training Provider Registry before the DMV administers the test. Verify the registry entry — not just course completion — before you pay, or the test is refused and the fee forfeited.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Air Brakes knowledge test is multiple-choice and delivered by computer at a state DMV/SDLA as part of your CLP application; there is no practical component at the knowledge stage — the hands-on air-brake inspection belongs to the later skills test. The federal baseline is 80 percent under 49 CFR 383.135, with states setting the exact question count; a common configuration is 25 questions requiring 20 correct, but verify your state’s number. Under 49 CFR 383.133 the state must use FMCSA pre-approved (AAMVA 2005 CDL Test System) items and may offer the test in another language or orally but not via a translator. Items are single-best-answer and heavily numeric: they probe which pressure belongs to which component and what happens at low air pressure. The worked samples below are editor-written illustrations of the published blueprint (49 CFR 383.111(b) knowledge areas), not live exam items. Because the 80 percent floor is flat with no curve, bank the quick threshold items immediately and return to any ambiguous wording question.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Drawn from Section 5 wording — component names, pressure thresholds, lag and stopping distances. Distractors are nearby numbers (e.g. 60 vs 20-45 psi), so partial memorisation is punished.' },
      { name: 'Numeric / threshold', share: 'Heavy and distinctive to this exam', detail: 'Asks the exact psi for governor cut-out, low-air warning, or spring-brake application; these are the highest-value, most-missed items because the figures are easy to transpose.' },
      { name: 'Multiple response', share: 'Occasional', detail: 'Select all that apply from a list of inspection steps or brake functions; scoring is typically all-or-nothing.' },
      { name: 'Scenario / "what happens at low pressure"', share: 'Heavier on use and failure', detail: 'A described pressure-loss situation asks for the consequence; rewards knowing the 20-45 psi spring-brake range and the 60 psi warning threshold.' }
    ],
    samples: [
      {
        prompt: 'During your pre-trip inspection, the low-air-pressure warning signal must come on before the air pressure drops below:',
        options: [
          'A. 20-45 psi',
          'B. 60 psi',
          'C. 120-140 psi',
          'D. 85-100 psi'
        ],
        answer: 'B',
        explanation: 'Federal and state standards require the low-air-pressure warning to activate before the system pressure falls below 60 psi, giving the driver time to stop before the spring brakes engage. A (20-45 psi) is the range at which the spring/emergency brakes actually apply — a later and more dangerous threshold, and the most common wrong answer because candidates conflate "warning" with "brakes set." C is the governor cut-out (compressor stops pumping), and D is the build-up amount expected at fast idle. Each number belongs to a different component, which is exactly the distinction the exam tests.'
      },
      {
        prompt: 'If the air pressure in a vehicle’s brake system falls into the 20-45 psi range, what happens?',
        options: [
          'A. The compressor begins pumping faster to recover pressure',
          'B. The spring brakes (emergency/parking brakes) apply automatically',
          'C. The service brakes become more powerful',
          'D. Nothing until pressure reaches zero'
        ],
        answer: 'B',
        explanation: 'When system air pressure drops to roughly 20-45 psi, the spring brakes — which are held off by air pressure and applied by powerful springs — engage automatically as the emergency brake. A is wrong because the compressor cuts out at the higher 120-140 psi governor setting, not at low pressure; C misstates the relationship (low air means less, not more, braking); D is dangerously wrong because the springs apply well before zero. This is the core "what happens at low pressure" item and ties directly to the 60 psi warning threshold above.'
      },
      {
        prompt: 'Compared with a vehicle of similar size and load that has hydraulic brakes, an air-braked combination vehicle at 55 mph will have:',
        options: [
          'A. A shorter total stopping distance',
          'B. About the same stopping distance, because brakes are brakes',
          'C. A longer total stopping distance, because of brake lag',
          'D. No measurable difference, since lag is negligible'
        ],
        answer: 'C',
        explanation: 'Air brakes introduce brake lag — the delay while air travels to the brake chambers before the brakes begin to bite — about 32 feet of travel at 55 mph before braking even starts. As a result, total stopping distance from 55 mph is roughly 450 feet or more for a loaded combination, longer than a comparable hydraulic-brake vehicle. A and B reflect the intuitive but incorrect "bigger brakes stop shorter" assumption; D ignores lag entirely. The exam specifically tests that air brakes stop longer, not shorter, than hydraulic ones.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.111(b) knowledge areas), not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Air Brakes knowledge test is taken at a state DMV/SDLA, by computer, as part of your CLP application — there is no vehicle on exam day, only documents and a terminal. The two things that go wrong most often are paperwork and misunderstanding the consequence: candidates arrive without the exact REAL-ID-era identity/residency documents, or they do not grasp that failing this specific test stamps an "L" restriction rather than refusing the licence. Build your day around clearing ELDT verification first and having the document list in hand, because a refused test is a forfeited fee. Where this exam differs from the others is the stakes: the 80 percent line is the same flat federal floor, but the outcome is an unrestricted licence versus one branded "L" — a restriction that follows the credential until you re-test. Plan the skills-test booking before you leave, because the 14-day waiting period of 49 CFR 383.25(e) starts the moment the CLP is issued.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV’s REAL-ID document list',
      'Confirmation that ELDT theory is logged in the FMCSA Training Provider Registry (first-time applicants)',
      'Correct fee for the CLP application, knowledge tests (General, Air Brakes, and Combination if needed) and any endorsements',
      'Corrective lenses if required to meet the federal vision standard',
      'Your CLP application confirmation number if booked online'
    ],
    leave: [
      'Phones, smartwatches and earbuds — secured before entering the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'Bags, coats and food beyond what the office permits; lockers are typically provided',
      'A translator or interpreter — 49 CFR 383.133 permits oral/foreign-language administration but not a third-party interpreter',
      'Any expectation of leaving as a licensed, unrestricted CDL holder — you leave with a CLP, and a failed Air Brakes portion means an "L" restriction'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm ELDT is in the registry and assemble the DMV document list exactly. A missing document is the most common cause of a refused test; for a first-time applicant it also blocks the whole CLP.' },
      { time: 'Day before', detail: 'Re-run timed practice exams at your state’s air-brake question count; re-read only the chapters where you missed items, especially the pressure thresholds.' },
      { time: 'Arrival', detail: 'Allow extra time for document check-in and the photo. Present documents and pay the CLP and test fees for all sub-tests you are taking.' },
      { time: 'At the terminal', detail: 'You receive the Air Brakes multiple-choice exam (your state’s count). Work the quick threshold items first; the 80 percent floor has no curve, so bank the straightforward numbers.' },
      { time: 'On a pass', detail: 'No "L" restriction is added. The 14-day skills-test clock and the CLP validity window (commonly 180 days, capped at one year) start now — diary both.' },
      { time: 'On a fail', detail: 'You fall below 80 percent and, per 49 CFR 383.135(a)(2), your CLP/CDL carries the "L" air-brake restriction. Most states allow a retake after a short wait for a fee; study the exact thresholds missed and rebook to clear the restriction.' }
    ],
    rules: [
      'Passing standard is 80 percent on the knowledge test per 49 CFR 383.135 — a flat floor, no curve, no rounding.',
      'Per 49 CFR 383.135(a)(2) and 49 CFR 383.95(b)(2), failing this test adds the "L" air-brake restriction — you keep the licence but may not drive air-braked vehicles until you re-test.',
      'First-time applicants must have ELDT theory logged in the FMCSA Training Provider Registry before the test is administered.',
      'A passing score yields a CLP, not a CDL; a licensed CDL holder must supervise you whenever you drive.',
      'Under 49 CFR 383.25(e) you must wait at least 14 days after CLP issuance before taking the skills (road) test.',
      'The CLP is valid for a limited period — commonly up to 180 days and never beyond one year under 49 CFR 383.25(c); check your state’s term.',
      'States may offer the test in another language or orally under 49 CFR 383.133, but a third-party interpreter is not permitted.',
      'Retake policy, question count and fee are set by the state, not by federal rule; verify all three with your DMV.'
    ],
    afterwards:
      'On a pass you leave with a CLP free of the "L" restriction (provided General Knowledge also cleared), and the 14-day skills-test clock running, plus a CLP validity window you must diary immediately — let it lapse and you re-take the knowledge tests. On a fail, the consequence is an "L" restriction stamped on the licence rather than a refusal: you may still drive hydraulic-brake vehicles, but most freight and bus work is closed until you re-test and clear it, so treat removal of the restriction as a priority rather than an afterthought. Rebook deliberately — re-read the specific Section 5 thresholds where you missed items (the 60 psi warning, the 20-45 psi spring-brake range, the 120-140 psi governor cut-out) and re-run official practice until clean, because the 80 percent line is unforgiving and a one-question shortfall is a full failure. And keep your real preparation in English: a 2025 federal English-proficiency enforcement standard (effective 25 June 2025, 49 CFR 391.11(b)(2), CVSA out-of-service) means that however the knowledge test was administered, you can be placed out of service on the road if you cannot demonstrate English proficiency — so the air-brake thresholds you memorise should be solid in English even where your state permits another testing language.'
  }
};

export default data;
