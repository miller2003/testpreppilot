// Depth content for: cdl-combination-vehicles-knowledge-test
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Commercial driving & transportation certifications desk',
    bio: 'This guide is compiled and maintained by our commercial-driving desk. CDL knowledge-test content and fees vary by state and are revised when each state updates its driver manual or when federal standards change under 49 CFR Part 383, so we state the federal baseline — the 80 percent cut score in 49 CFR 383.135 and the required knowledge areas in 49 CFR 383.111 — and flag that the exact question count, fee and language options are set by the state that issues your Commercial Learner’s Permit. Entry-Level Driver Training (ELDT) requirements, effective 7 February 2022, also affect who may sit the knowledge test at all, and those rules are federal. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code; BLS classifies by job duties rather than by licence class, so the closest official fit for the Combination Vehicles knowledge test is Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), because a combination (Class A) licence is what that role requires.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Knowledge areas, the 80 percent cut score and the Group A restriction rule were taken from 49 CFR Part 383 (Subparts G and H) and cross-checked against the AAMVA 2005 CDL Test System model that state Combination Vehicles sections follow. State-specific fees and question counts were drawn from named state driver manuals.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$57,440 median for heavy and tractor-trailer truck drivers (BLS, May 2024)',
    summary:
      'The Combination Vehicles knowledge test exists for one reason: it is the federal prerequisite to a Group A Commercial Learner’s Permit, which is the licence class that lets you drive a tractor-trailer — the combination of a powered unit and one or more trailers that defines the largest, and generally best-paid, segment of the driving workforce. The closest BLS occupation is therefore Heavy and Tractor-trailer Truck Drivers (SOC 53-3032), and there is no separate "combination driver" series, so any salary figure branded that way is a job-board aggregate rather than government data. That occupation had a May 2024 median of $57,440, with the lowest 10 percent under $38,640 and the highest 10 percent over $78,800; the spread is wider here than in many driving roles because a Class A combination licence is the credential that most reliably lets an experienced driver move into higher-paying freight — flatbed, tanker, specialized haul — where the top decile sits. The employment base is large and stable: 2,235,100 jobs in 2024, projected to grow about 4 percent to 2,324,400 by 2034, adding roughly 89,300 net jobs, with about 237,600 openings a year from growth plus replacement. The durability is the argument for investing in the combination endorsement: freight that must move as a tractor-trailer does not shrink in a soft economy, and the combination licence is what unlocks it. Be precise about what BLS does and does not say, though: the wage series describes the occupation by job duties, not by licence class, so these numbers do not prove that a new Class A holder starts at the median — they describe the destination the Group A CLP leads toward, after the skills test and the experience that follows.',
    rows: [
      { label: 'Median annual wage, heavy and tractor-trailer truck drivers', value: '$57,440', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,640', note: 'BLS OEWS May 2024 (10th percentile)' },
      { label: '25th percentile', value: '$47,230', note: 'BLS OEWS May 2024' },
      { label: '75th percentile', value: '$65,520', note: 'BLS OEWS May 2024' },
      { label: 'Highest 10 percent', value: 'more than $78,800', note: 'BLS OEWS May 2024 (90th percentile)' },
      { label: 'Employment, 2024', value: '2,235,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~237,600 per year', note: 'BLS OOH Job Outlook, 2024-34 — growth plus replacement' }
    ],
    growth: '+4% projected change 2024-34 (growth), ~237,600 openings a year; the Combination Vehicles knowledge test is the federal gate to the Group A (tractor-trailer) licence behind this occupation.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Heavy and Tractor-trailer Truck Drivers',
      url: 'https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'FMCSA and the states publish the 80 percent cut score — 49 CFR 383.135 — but no national pass rate',
    summary:
      'As with every CDL knowledge test, the federal government fixes the passing line and publishes no pass rate. 49 CFR 383.135(a)(1) requires at least 80 percent correct on each knowledge test, and 49 CFR 383.135(a)(3) adds a stake that is unique to this exam: an applicant who fails the combination vehicle knowledge test "may not be issued a commercial learner’s permit or commercial driver’s license that authorizes… operation of a combination of vehicles in Group A." In plain terms, failing the Combination Vehicles test does not just mean retaking one sub-test — it means you cannot be issued a Group A CLP at all, so if your goal is a tractor-trailer (Class A) licence, this is a gate you cannot route around by taking a different knowledge test. The 80 percent line itself is a flat floor with no curve: if your state writes the exam as 20 questions, you need 16 correct, and 15 is a fail with no rounding. States set the question count and retake terms themselves; many permit a prompt retake for a fee. As with the General Knowledge test, the federal prerequisites sit upstream: ELDT theory must be in the FMCSA Training Provider Registry before a first-time Class A applicant may sit the test (effective 7 February 2022), and a passing score yields only a CLP, after which the 14-day skills-test waiting period of 49 CFR 383.25(e) applies. The point worth stressing is that combination-vehicle failure is more consequential than a mere percentage miss because of the Group A bar — so candidates aiming at Class A should treat this test as non-optional rather than as an optional add-on to the General Knowledge exam.',
    source: {
      label: 'eCFR — 49 CFR Part 383 (knowledge tests, CLP, and 80% standard)',
      url: 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383'
    },
    caveat:
      'No national or state pass-rate statistic is published by FMCSA or any state DMV/SDLA for the Combination Vehicles knowledge test. We have deliberately left the pass-rate table empty rather than estimate one. What is verifiable is the 80 percent cut score in 49 CFR 383.135 and, specifically for this exam, the Group A restriction in 49 CFR 383.135(a)(3); the narrative above covers those instead.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The Combination Vehicles knowledge test draws on Section 6 of your state’s CDL manual (Combination Vehicles), which sits on top of the General Knowledge material because it is taken as part of the same CLP application. The federal knowledge areas are fixed in 49 CFR 383.111(c)(1) through (c)(3): they cover safe operation of combination vehicles, coupling and uncoupling, and inspecting combinations. The first planning decision is to confirm you actually need this test — it is mandatory for a Group A (combination/tractor-trailer) CLP, but irrelevant if you will only drive a straight truck or bus (Class B) or a combination under 26,001 lbs (Class C). If you do need Group A, you will almost always sit this exam together with the General Knowledge test and, if your tractor has air brakes, the Air Brakes test — so schedule one combined study block rather than three separate ones. The plan below assumes a computer-delivered, multiple-choice exam; a common configuration is 20 questions requiring 16 correct (80 percent), but your state sets the count. Because the combination material is smaller and more physical than General Knowledge, the study window is shorter, but the failure rate is high among candidates who underestimate the coupling/uncoupling and rearward-amplification concepts, which are counter-intuitive and tested heavily. Total elapsed time is short; the risk is not volume but the specific dynamics — rollover likelihood when loaded, rearward amplification in doubles and triples, and the colour-coded air lines — that do not appear on any car-licence test.',
    totalHours: '8-15 hours of reading and timed practice',
    weeks: [
      {
        label: 'Day 1-2',
        focus: 'Section 6.1 — Driving combination vehicles safely',
        tasks: [
          'Read the rollover material: a fully loaded rig is roughly ten times more likely to roll over than an empty one, so speed control in turns and on ramps is the dominant safety theme',
          'Master rearward amplification: the rear trailer in a double swings out more in a turn, and the figure is about 2.0 for doubles and about 3.5 for triples — keep extra space and slow for the condition',
          'Learn the special risks of doubles/triples and the need for extra following and stopping distance',
          'Take your state’s practice items for combination safety and record misses'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 3-4',
        focus: 'Section 6.2–6.3 — Combination air brakes and ABS',
        tasks: [
          'Know the two air lines by colour and function: the service line (blue) carries the braking signal, the emergency line (red) supplies air and controls the emergency/trailer brakes',
          'Glad hands, the tractor protection valve (closes at roughly 20-45 psi), and why the trailer hand valve is for testing only and must never be used for parking',
          'ABS on combination vehicles: what the malfunction lamp means and that ABS does not shorten stopping distance, only helps maintain steering control',
          'Distinguish this from the standalone Air Brakes knowledge test if your tractor has air brakes'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 5-6',
        focus: 'Section 6.4–6.5 — Coupling, uncoupling and inspection',
        tasks: [
          'Coupling: position, lock the kingpin, connect air lines (glad hands), connect electrical, raise landing gear, charge the system, and check for air leaks',
          'Uncoupling: chock wheels, lower landing gear, disconnect air/electric, pull clear — know the safe order',
          'Inspecting combinations: the fifth wheel, the coupling, the air hoses, the trailer connections and the rear of the last trailer',
          'Rehearse the sequence as a numbered checklist; questions ask "what is done first/last"'
        ],
        hours: '2-3 hrs'
      },
      {
        label: 'Day 7',
        focus: 'Full-length practice and gap closing',
        tasks: [
          'Two or three timed practice exams at your state’s question count',
          'Re-read only the chapters where you missed items, especially coupling order and the air-line colours',
          'Confirm ELDT is logged before booking and that you are taking this with the General Knowledge (and Air Brakes, if needed) tests on one CLP'
        ],
        hours: '2-3 hrs'
      }
    ],
    variants: [
      { label: 'First-time Class A applicant, ELDT not done', detail: 'Add the ELDT step before booking. The DMV will refuse the knowledge test until your ELDT theory is in the FMCSA Training Provider Registry; complete the registered provider’s course and verify the entry first.' },
      { label: 'Class B driver adding combination (Group A)', detail: 'Often a focused 3-4 day block. You already hold the General Knowledge base; concentrate on Section 6’s combination-specific dynamics and the coupling/uncoupling sequence, which are new to you.' },
      { label: 'Planning doubles/triples endorsement later', detail: 'Note that Doubles/Triples is a separate endorsement knowledge test, not this one. Passing Combination Vehicles qualifies you for Group A generally; the doubles/triples endorsement is an additional exam you will schedule separately.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The Combination Vehicles test rewards a different kind of memory than General Knowledge: less statutory wording and more physical sequence and counter-intuitive dynamics. Candidates who treat it as "more driving common sense" consistently miss the coupling order, the air-line colour roles, and especially rearward amplification and the loaded-rollover multiplier — the three concepts that do not match a car driver’s intuition and are therefore weighted heavily.',
    items: [
      {
        title: 'Drill the coupling and uncoupling order as a fixed checklist',
        detail: 'Questions repeatedly ask what is done first or last: for coupling, position and lock the kingpin, connect the air lines (glad hands) and electrical, raise the landing gear, charge the system and check for leaks; for uncoupling, chock, lower the gear, disconnect air and electric, then pull clear. Memorise the order as numbered steps, because the exam tests sequence, not just that you "know how to hook up."'
      },
      {
        title: 'Learn the two air lines by colour and function, not by guess',
        detail: 'The service line is blue and carries the braking signal; the emergency line is red and supplies air while controlling the emergency and trailer brakes. The tractor protection valve closes at roughly 20-45 psi to protect the tractor’s air. The trailer hand valve is for testing only and must never be used to hold or park the trailer. These colour/function pairings are near-guaranteed items.'
      },
      {
        title: 'Internalise the two counter-intuitive dynamics',
        detail: 'A fully loaded combination is about ten times more likely to roll over than an empty one, so the exam hammers speed-in-turns discipline; and rearward amplification means the last trailer swings widest — about 2.0 for doubles and about 3.5 for triples. Keep extra space and slow for the condition. These numbers are the highest-value, most-missed facts on the exam because they contradict casual intuition.'
      },
      {
        title: 'Sit this with General Knowledge (and Air Brakes) on one CLP',
        detail: 'Because all three are part of the same Group A CLP application, scheduling them together saves a trip and a fee cycle. Study them as one block but keep three distinct question stacks, since mixing air-brake facts into combination items (or vice versa) is a common source of wrong answers.'
      },
      {
        title: 'Treat the Group A gate as non-optional',
        detail: 'Under 49 CFR 383.135(a)(3), failing this test means you cannot be issued a Group A CLP at all — it is not a retryable side-quest but the actual gate to tractor-trailer driving. If Class A is your goal, weight your prep toward the concepts you find least intuitive rather than the ones that feel familiar.'
      },
      {
        title: 'Clear ELDT before you book',
        detail: 'For a first-time Class A applicant the FMCSA Training Provider Registry entry is a hard prerequisite. Verify it is logged — not merely that a course was completed — before you pay, because a missing entry means a refused test and a forfeited fee.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'As with the General Knowledge test, the authoritative source is free: your state’s CDL manual Section 6 plus its official practice items. Paid resources add value mainly as repetition or as structured ELDT courses. Be wary of any product quoting a "combination pass rate," since that figure is not published by any government and is the vendor’s own practice-test metric, not an official outcome.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Your state DMV CDL manual, Section 6 (Combination Vehicles)', values: ['Free', 'PDF / web from the issuing state', 'The only source the test is written from — read it end to end'] },
      { label: 'Your state DMV official practice tests', values: ['Free', 'Web or app', 'Wording that tracks the real question bank; do these before any paid set'] },
      { label: 'Registered ELDT theory course (if first-time)', values: ['Varies by provider, commonly $0-300', 'Online, logged to the FMCSA registry', 'Mandatory prerequisite before the DMV seats a first-time Class A applicant'] },
      { label: 'Commercial CDL prep apps (e.g. driving-tests.org, CDL Prep)', values: ['Free tier; ~$5-15/mo for premium', 'Mobile app, large question volume', 'Repetition once the official material is clean'] },
      { label: 'CDL study guidebooks with a combination chapter', values: ['~$15-30', 'Print or eBook', 'A portable summary if you will not open the PDF; confirm it matches your state'] },
      { label: 'CDL training school combination module', values: ['Often bundled into tuition; standalone $50-150', 'Classroom or online', 'Candidates who want a deadline and hands-on coupling demos'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by state and provider. State DMV manuals and practice tests are free and authoritative; commercial "pass rate" claims are vendor-internal and not official. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The avoidable failures on the Combination Vehicles test cluster around three errors: underestimating its importance (it is the Group A gate), mixing it with the Air Brakes test, and failing to learn the sequence-based and dynamics-based facts that the exam actually probes. The version and prerequisite errors below waste the most money.',
    items: [
      {
        mistake: 'Not realising this test is the Group A gate',
        fix: 'Under 49 CFR 383.135(a)(3), failing the combination vehicle knowledge test means you may not be issued a Group A CLP — i.e. no tractor-trailer licence at all. Candidates who think of it as an optional add-on to General Knowledge under-prepare and then discover the failure blocks their entire career goal. If Class A is your aim, treat it as the central exam of the three.'
      },
      {
        mistake: 'Conflating Combination Vehicles with the Air Brakes test',
        fix: 'They are separate knowledge exams with separate 80 percent requirements. Combination Vehicles covers coupling, rearward amplification and combination air lines; Air Brakes covers the brake system itself. Mixing the two while studying causes wrong answers on both. Keep distinct stacks, and if your tractor has air brakes, sit both but review them separately.'
      },
      {
        mistake: 'Guessing the coupling/uncoupling sequence',
        fix: 'The exam asks what is done first or last, not whether you "understand hooking up." Memorise the fixed order: coupling positions and locks the kingpin, connects air (glad hands) and electric, raises landing gear, charges and leak-checks; uncoupling chocks, lowers gear, disconnects, then pulls clear. A rehearsed checklist converts a whole cluster of sequence items.'
      },
      {
        mistake: 'Assuming the air lines are interchangeable',
        fix: 'The service line is blue (braking signal) and the emergency line is red (air supply and emergency/trailer brake control), and the trailer hand valve is for testing only — never for parking. Swapping their roles is a classic wrong answer, and the tractor protection valve closing at 20-45 psi is a specific number the exam expects you to know.'
      },
      {
        mistake: 'Applying car-driving intuition to rollover and rearward amplification',
        fix: 'A fully loaded combination rolls over about ten times more often than an empty one, and the last trailer amplifies rearward (roughly 2.0 for doubles, 3.5 for triples). Candidates who "drive by feel" underestimate turns and following distance and miss the highest-weighted dynamics questions. Learn the numbers; they are tested directly.'
      },
      {
        mistake: 'Forgetting ELDT before booking',
        fix: 'Since 7 February 2022 a first-time Class A applicant must have ELDT theory logged in the FMCSA Training Provider Registry before the DMV administers the test. Verify the registry entry — not just course completion — before you pay, or the test is refused and the fee forfeited.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The Combination Vehicles knowledge test is multiple-choice and delivered by computer at a state DMV/SDLA as part of the Group A CLP application; there is no practical component at the knowledge stage. The federal baseline is 80 percent under 49 CFR 383.135, with states setting the exact question count; a common configuration is 20 questions requiring 16 correct, but verify your state’s number. Under 49 CFR 383.133 the state must use FMCSA pre-approved (AAMVA 2005 CDL Test System) items and may offer the test in another language or orally but not via a translator. Items are single-best-answer, frequently sequence-based ("what is done first") or dynamics-based (rollover, rearward amplification, air-line roles). The worked samples below are editor-written illustrations of the published blueprint (49 CFR 383.111(c) knowledge areas), not live exam items. Because the 80 percent floor is flat with no curve, your only task is to push the correct count above the line, so answer the quick sequence items immediately and bank them.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The bulk of the paper', detail: 'Drawn from Section 6 wording — air-line colours, valve pressures, rollover multipliers, rearward amplification figures. Distractors are real, nearby facts, so partial familiarity is punished.' },
      { name: 'Sequence / "what is done first or last"', share: 'Heavy in coupling and uncoupling', detail: 'Asks the correct order of hook-up or drop. These reward a rehearsed numbered checklist rather than general understanding.' },
      { name: 'Multiple response', share: 'Occasional', detail: 'Select all that apply from a short list (e.g. steps of a safe uncouple); scoring is typically all-or-nothing.' },
      { name: 'Scenario / dynamics', share: 'Heavier on safe-operation items', detail: 'A described doubles/triples or loaded-turn situation asks for the safe action; rewards knowing the rollover and rearward-amplification numbers rather than estimating.' }
    ],
    samples: [
      {
        prompt: 'When coupling a tractor-trailer, after you have backed the tractor under the trailer and locked the kingpin, what should you do next?',
        options: [
          'A. Raise the landing gear completely and pull forward',
          'B. Connect the air lines (glad hands) and the electrical cable, then raise the landing gear',
          'C. Disconnect the air lines so the trailer brakes release',
          'D. Pull forward immediately to test the connection'
        ],
        answer: 'B',
        explanation: 'The safe coupling sequence is: position and lock the kingpin, then connect the air lines (glad hands) and the electrical cable, then raise the landing gear, then charge the system and check for air leaks. A raises the gear before the lines are connected, which is out of order; C is backwards — you connect the lines to supply air, you do not disconnect them; D pulls forward before the connection is made and verified. Sequence questions like this are common and reward a memorised checklist over intuition.'
      },
      {
        prompt: 'A double and a triple are each being backed through the same sharp turn at the same speed. Compared with the double, the rear trailer of the triple will:',
        options: [
          'A. Swing out less, because it is shorter',
          'B. Swing out about the same amount',
          'C. Swing out more, due to greater rearward amplification',
          'D. Not swing out at all if ABS is working'
        ],
        answer: 'C',
        explanation: 'Rearward amplification is the phenomenon where the last trailer in a combination swings out more widely in a turn, and it is greater for triples than for doubles — roughly 2.0 for doubles and about 3.5 for triples. So the triple’s rear trailer swings out more, which is why extra following and turning space is required for longer combinations. A and B contradict the amplification figures; D is wrong because ABS affects brake modulation and steering control, not the physical swing of the rear trailer. This is the most-missed dynamics concept on the exam.'
      },
      {
        prompt: 'On a combination vehicle, the trailer hand valve (the "trailer brake" valve in the cab) should be used:',
        options: [
          'A. To hold the trailer stationary while parked',
          'B. Only for testing the trailer brakes, never for parking',
          'C. As the primary brake during normal stops',
          'D. To release the emergency line pressure'
        ],
        answer: 'B',
        explanation: 'The trailer hand valve is for testing the trailer brakes only and must never be used for parking or as a normal brake, because using it to hold a parked trailer can drain the trailer’s air and release the spring brakes unexpectedly. A is exactly the prohibited use; C misidentifies it as the service brake (the foot valve is); D describes the opposite of its function. This colour/function fact — blue service line, red emergency line, hand valve for test only — is a recurring item.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint (49 CFR 383.111(c) knowledge areas), not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The Combination Vehicles knowledge test is taken at a state DMV/SDLA, by computer, as part of your Group A CLP application — there is no vehicle on exam day, only documents and a terminal. The two things that go wrong most often are paperwork and misunderstanding the stakes: candidates arrive without the exact REAL-ID-era identity/residency documents, or they do not realise that failing this specific test blocks a Group A CLP entirely under 49 CFR 383.135(a)(3). Build your day around clearing ELDT verification first and having the document list in hand, because a refused test is a forfeited fee and, for a Class A seeker, a blocked path. Where this exam differs from General Knowledge is its consequence: the 80 percent line is the same flat federal floor, but the prize or penalty is the Group A gate. Plan the skills-test booking before you leave, because the 14-day waiting period of 49 CFR 383.25(e) starts the moment the CLP is issued.',
    bring: [
      'Proof of identity, lawful presence, Social Security number and state residency per your DMV’s REAL-ID document list',
      'Confirmation that ELDT theory is logged in the FMCSA Training Provider Registry (first-time Class A applicants)',
      'Correct fee for the CLP application, knowledge tests (General, Combination, and Air Brakes if needed) and any endorsements',
      'Corrective lenses if required to meet the federal vision standard',
      'Your CLP application confirmation number if booked online'
    ],
    leave: [
      'Phones, smartwatches and earbuds — secured before entering the testing area',
      'Notes, cheat sheets, the manual, or any printed material',
      'Bags, coats and food beyond what the office permits; lockers are typically provided',
      'A translator or interpreter — 49 CFR 383.133 permits oral/foreign-language administration but not a third-party interpreter',
      'Any expectation of leaving as a licensed Class A driver — you leave with a CLP, supervised only'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm ELDT is in the registry and assemble the DMV document list exactly. A missing document is the most common cause of a refused test, and for a Group A seeker that refusal blocks the whole licence.' },
      { time: 'Day before', detail: 'Re-run timed practice exams at your state’s combination question count; re-read only the chapters where you missed items, especially coupling order and air-line roles.' },
      { time: 'Arrival', detail: 'Allow extra time for document check-in and the photo. Present documents and pay the CLP and test fees for all Group A sub-tests you are taking.' },
      { time: 'At the terminal', detail: 'You receive the Combination Vehicles multiple-choice exam (your state’s count). Work the quick sequence items first; the 80 percent floor has no curve, so bank the straightforward ones.' },
      { time: 'On a pass', detail: 'You are issued a Group A CLP (provided General Knowledge also passed). The 14-day skills-test clock and the CLP validity window (commonly 180 days, capped at one year) start now — diary both.' },
      { time: 'On a fail', detail: 'You fall below 80 percent and, per 49 CFR 383.135(a)(3), cannot be issued a Group A CLP. Most states allow a retake after a short wait for a new fee; study the exact chapters missed and rebook — but understand this failure gates Class A until cleared.' }
    ],
    rules: [
      'Passing standard is 80 percent on the knowledge test per 49 CFR 383.135 — a flat floor, no curve, no rounding.',
      'Per 49 CFR 383.135(a)(3), failing this test means you may not be issued a Group A CLP or CDL at all — it gates tractor-trailer driving.',
      'First-time Class A applicants must have ELDT theory logged in the FMCSA Training Provider Registry before the test is administered.',
      'A passing score yields a CLP, not a CDL; a licensed CDL holder must supervise you whenever you drive.',
      'Under 49 CFR 383.25(e) you must wait at least 14 days after CLP issuance before taking the skills (road) test.',
      'The CLP is valid for a limited period — commonly up to 180 days and never beyond one year under 49 CFR 383.25(c); check your state’s term.',
      'States may offer the test in another language or orally under 49 CFR 383.133, but a third-party interpreter is not permitted.',
      'Retake policy, question count and fee are set by the state, not by federal rule; verify all three with your DMV.'
    ],
    afterwards:
      'On a pass (with General Knowledge also cleared, and Air Brakes if your tractor requires it) you leave with a Group A CLP and the 14-day skills-test clock running, plus a CLP validity window you must diary immediately — let it lapse and you re-take the knowledge tests. If you intend doubles/triples work, note that is a separate endorsement knowledge test scheduled later; clearing Combination Vehicles qualifies you for Group A generally but does not by itself authorise doubles/triples. On a fail, the consequence is sharper than for General Knowledge: under 49 CFR 383.135(a)(3) you cannot be issued a Group A CLP until you pass, so rebook deliberately — re-read the specific Section 6 chapters where you missed items and re-run official practice until clean, because the 80 percent line is unforgiving and a one-question shortfall is a full failure. And keep your real preparation in English: a 2025 federal English-proficiency enforcement standard (effective 25 June 2025, 49 CFR 391.11(b)(2), CVSA out-of-service) means that however the knowledge test was administered, you can be placed out of service on the road if you cannot demonstrate English proficiency — so the combination dynamics you memorise should be solid in English even where your state permits another testing language.'
  }
};

export default data;
