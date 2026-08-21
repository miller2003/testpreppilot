// Depth content for: danb-cda
// Real, sourced data compiled from primary sources (DANB, BLS). Every numeric
// row carries a note/source. Omitted fields were not verifiable — not invented.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied health & clinical credentials desk',
    bio: 'This guide is compiled and maintained by our allied-health desk. We work from the certifying board\'s own published material — the current exam blueprint or content outline, the candidate handbook, the fee schedule and any pass-rate disclosure the board releases — rather than from coaching-school summaries, which routinely lag a blueprint revision by a year or more. Wage and outlook figures come from the Bureau of Labor Statistics occupational series that matches the role, and we name the SOC code so you can check it yourself. Where a board publishes no pass rate, we say so instead of estimating one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Blueprint weights, eligibility routes, fees and recertification rules were read from the certifying board’s own documents, not from third-party course pages.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH/OEWS, SOC 31-9091)
  salaryOutlook: {
    headline: '$47,300 median (BLS OOH, May 2024)',
    summary: 'The DANB Certified Dental Assistant (CDA) is the flagship credential for dental assistants, and it sits on one of the steadier allied-health occupations. The U.S. Bureau of Labor Statistics reports dental assistants (SOC 31-9091) earned a median annual wage of $47,300 in May 2024, with 381,900 jobs and a projected 6% growth from 2024 to 2034 — "faster than average" overall, translating to about 52,900 openings per year when replacements are included. The CDA is valuable because many states either require DANB certification or a DANB component exam (notably RHS and ICE) to legally perform expanded functions such as radiography or coronal polish; holding the full CDA therefore widens both the states you can work in and the duties you can bill for. Pay rises with scope: assistants who add radiography, sealants, or orthodontic functions, and those in high-cost metro markets, sit well above the median, while the bottom decile reflects entry-level, limited-scope roles. Candidates should read the median as a national midpoint and expect that the credential’s biggest financial effect is job access and function eligibility rather than an automatic flat raise. Industry and state variation is pronounced: assistants in high-cost metro markets and those permitted to perform expanded functions sit well above the median, while the bottom decile reflects limited-scope, entry-level roles. The CDA financial return is tied to the additional functions it unlocks; in states where the credential or a DANB component is required for those functions, it is effectively a prerequisite for higher-paying work. Candidates should treat the median as a floor for credentialed assistants, not a ceiling.',
    rows: [
      { label: 'Median annual wage', value: '$47,300', note: 'BLS Occupational Outlook Handbook, Dental Assistants (SOC 31-9091), May 2024' },
      { label: '10th percentile', value: '$36,190', note: 'BLS OEWS, Dental Assistants (SOC 31-9091), May 2024' },
      { label: '90th percentile', value: '$61,780', note: 'BLS OEWS, Dental Assistants (SOC 31-9091), May 2024' },
      { label: 'Employment, 2024', value: '381,900', note: 'BLS OOH, Dental Assistants, 2024' },
      { label: 'Projected growth, 2024–2034', value: '6% (faster than average)', note: 'BLS OOH Job Outlook, Dental Assistants' }
    ],
    growth: '6% growth 2024–2034 (BLS OOH, faster than average); ~52,900 annual openings including replacements.',
    source: { label: 'BLS Occupational Outlook Handbook — Dental Assistants (SOC 31-9091)', url: 'https://www.bls.gov/ooh/healthcare/dental-assistants.htm' }
  },

  // P0-2  Pass rates (DANB publishes a per-component Exam Pass Rates report)
  passRate: {
    headline: 'GC 75% / RHS 69% / ICE 75% first-attempt (FY2025)',
    summary: 'DANB publishes an Exam Pass Rates report every fiscal year, broken out by component exam — the most transparent disclosure of the three credentials covered here. The CDA is earned by passing three component exams: General Chairside Assisting (GC), Radiation Health & Safety (RHS), and Infection Control (ICE), each scored on a scaled 100–900 with a minimum passing score of 400 per component. In DANB’s FY2025 report, first-attempt pass rates were GC 75% (2,767 passed of 3,687 administered), RHS 69% (9,905 passed of 14,272 administered), and ICE 75% (4,807 passed of 6,395 administered). The prior fiscal year (FY2024) ran GC 74%, RHS 66%, and ICE 73%. Two takeaways for candidates: RHS is consistently the hardest component (a ~69% first-attempt rate, the lowest of the three), so radiography physics, exposure, and safety deserve outsized prep; and GC, the largest component, passes at about 75%, meaning roughly one in four first-timers misses. These are first-attempt rates, not eventual rates — candidates who retest after targeted review generally improve. Because the CDA is modular, you can sit components separately, which lets you isolate and retake only the component you fail. Because the CDA is modular, a candidate who fails one component retests only that piece, which improves the odds of eventually earning the CDA versus a single all-or-nothing exam. The practical takeaway is to front-load RHS prep and use DALE practice tests to confirm GC and ICE readiness before scheduling, since first-attempt misses cost both time and retake fees. DANB transparency in publishing component-level rates is itself useful: it tells candidates exactly where to aim study time. Component-level transparency also helps employers and educators: a program can see that RHS is the bottleneck and add radiography lab time accordingly. For the candidate, the practical planning rule is simple — budget the most hours for the component with the lowest published rate, and confirm the others with a timed practice test before paying the scheduling fee.',
    rows: [
      { label: 'GC first-attempt pass rate (FY2025)', value: '75%', note: 'DANB FY2025 Exam Pass Rates report (2,767 passed / 3,687 administered)' },
      { label: 'RHS first-attempt pass rate (FY2025)', value: '69%', note: 'DANB FY2025 Exam Pass Rates report (9,905 passed / 14,272 administered)' },
      { label: 'ICE first-attempt pass rate (FY2025)', value: '75%', note: 'DANB FY2025 Exam Pass Rates report (4,807 passed / 6,395 administered)' },
      { label: 'FY2024 comparison (GC/RHS/ICE)', value: '74% / 66% / 73%', note: 'DANB FY2024 Exam Pass Rates report' },
      { label: 'Minimum passing score per component', value: '400 (scaled 100–900)', note: 'DANB component exam scoring; published on danb.org' }
    ],
    source: { label: 'DANB — Exam Pass Rates (FY2025 & FY2024) and CDA certification pages', url: 'https://www.danb.org/' },
    caveat: ''
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Plan CDA prep around the three components and your own eligibility path. A common approach is to sit all three together, which favors a 10–12 week plan at 8–10 hours per week. Weight time to the component blueprints: GC is the largest, RHS the lowest pass rate, and ICE is the most procedural/memorization-heavy.',
    totalHours: '90–110 hours',
    weeks: [
      { label: 'Weeks 1–3', focus: 'ICE — infection control', tasks: ['Standard precautions, PPE, sterilization workflow', 'Occupational safety and aseptic environment', 'Take a DALE ICE practice test and log weak topics'], hours: '8 hrs/week' },
      { label: 'Weeks 4–6', focus: 'RHS — radiography (lowest pass rate)', tasks: ['X-ray equipment, exposure factors, image evaluation', 'Patient and operator radiation safety', 'Drill the physics and safety items RHS over-weights'], hours: '12 hrs/week' },
      { label: 'Weeks 7–9', focus: 'GC — chairside assisting', tasks: ['Chairside procedures, materials, lab procedures', 'Patient education, emergency prevention, office management', 'Practice with Modern Dental Assisting chapters'], hours: '12 hrs/week' },
      { label: 'Weeks 10–11', focus: 'Integrated simulation', tasks: ['DALE CDA practice bundle (GC + ICE + RHS) timed sets', 'Re-drill weakest component to >80%', 'Review instrument transfer and isolation scenarios'], hours: '10 hrs/week' },
      { label: 'Week 12', focus: 'Logistics', tasks: ['Confirm Pearson VUE 60-day eligibility window', 'Verify test center and ID', 'Light review only'], hours: '5 hrs/week' }
    ],
    variants: [
      { label: 'One component at a time', detail: 'If testing piecewise, compress each block to 3–4 weeks and sit RHS last given its lower pass rate; retake only the failed component.' },
      { label: 'Recent dental assisting graduate', detail: 'Compress to 6–8 weeks, concentrating on RHS physics and GC materials/mix ratios.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'DANB’s own data shows RHS is the weakest component, so the highest-yield strategy is to over-prepare radiography and to practice the computerized, timed format until it is comfortable.',
    items: [
      { title: 'Attack RHS first — it has the lowest pass rate', detail: 'FY2025 RHS first-attempt was 69% vs 75% for GC and ICE. Spend the most hours on radiation physics, exposure errors, mounting/labeling, and patient/operator safety. Candidates who under-study image evaluation and safety are the ones who miss.' },
      { title: 'Use DALE Foundation practice tests mapped to the outline', detail: 'The DALE Foundation (DANB’s nonprofit affiliate) builds practice tests that follow DANB’s exam outlines. The CDA bundle combines GC, ICE, and RHS practice sets; aim for 80%+ before scheduling, as DANB’s study-guide research found plan users passed at higher rates.' },
      { title: 'Master dental materials and mix ratios for GC', detail: 'GC over-weights chairside procedures (about 45% of that component) and materials. Know working/setting times and why "fixing" a mix with extra water/powder weakens properties — a frequent wrong-answer trap.' },
      { title: 'Practice the instrument-transfer and isolation scenarios', detail: 'A common GC trap is touching drawers/phones with contaminated gloves. Drill the full instrument-processing flow (cleaning → packaging → sterilization → storage) and standard-precautions sequencing until it is reflexive.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'DANB’s exams are prepared for through the DALE Foundation (its nonprofit affiliate) and a free exam outline; third-party banks add volume. Prices below verified on the cited publisher pages.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DALE Foundation CDA Practice Tests (GC + ICE + RHS)', values: ['$85 (6-month access)', 'Online, 600 Q total (200 per component)', 'All-in-one timed simulation'] },
      { label: 'DALE Foundation single practice test (RHS/ICE/GC)', values: ['$39 each', 'Online, interactive, topic filtering', 'Isolated component drill'] },
      { label: 'DALE Foundation CDA Exam Prep Bundle', values: ['$450', 'All practice tests + review courses', 'Full structured prep'] },
      { label: 'Exam Edge CDA practice (5-test pack)', values: ['$69.75', 'Online, 150 Q/test, explanations', 'Extra question volume'] }
    ],
    footnote: 'Prices checked 2026-08 from dalefoundation.org and examedge.com. DANB also publishes free exam outlines and references. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'CDA misses cluster in radiography and in chairside materials/safety judgment calls rather than in factual recall.',
    items: [
      { mistake: 'Under-preparing RHS radiography', fix: 'RHS has the lowest first-attempt pass rate (~69%). Drill exposure factors, image evaluation, and both patient and operator radiation safety, not just "how to take an X-ray."' },
      { mistake: 'Memorizing answers instead of the sterilization workflow', fix: 'ICE and GC test the sequence (cleaning → packaging → sterilization → storage) and isolation. Learn the underlying rule so you can apply it to a novel contaminated-glove scenario.' },
      { mistake: 'Sitting all three cold without timed practice', fix: 'The CDA is computerized and timed. Run at least the DALE CDA bundle in simulation mode so pacing and the interface are not surprises.' },
      { mistake: 'Missing the 60-day eligibility window', fix: 'Once approved, you must test within DANB’s 60-day window per component; schedule promptly and keep your CPR current for eligibility paths.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The CDA is awarded by passing three computer-based component exams at Pearson VUE: General Chairside Assisting (GC), Radiation Health & Safety (RHS), and Infection Control (ICE). Each component is multiple-choice and scored on a scaled 100–900 with a minimum passing score of 400 per component. Candidates may sit components separately or together within DANB’s eligibility window. Questions are application-oriented single-best-answer items drawn from DANB’s published component outlines (for example, the GC outline weights chairside dental procedures ~45%, patient education/prevention ~10–14%, office management ~6%; RHS weights expose/evaluate ~37% and radiation safety ~36%; ICE weights occupational safety ~30% and sterilization/asepsis ~30%).',
    types: [
      { name: 'Multiple choice (per component)', share: '100% of each component exam', detail: 'Single best answer; each component scored 100–900, MPS 400.' },
      { name: 'Combined CDA', share: 'GC + RHS + ICE', detail: 'All three components passed = CDA; components can be scheduled separately within the eligibility window.' }
    ],
    samples: [
      { prompt: 'Which radiation-safety principle most effectively reduces the operator’s dose during exposure?',
        options: ['A. Using the largest practical cone', 'B. Stepping behind a protective barrier and using a long cone/positioning device', 'C. Holding the film in place by hand', 'D. Increasing mA to shorten exposure time'],
        answer: 'B',
        explanation: 'The operator should stand behind a protective barrier (or at least 6 feet away, out of the primary beam) and use a positioning device/long cone to minimize scattered radiation; this is core RHS radiation-safety content. Holding the film by hand (C) is prohibited, and while higher mA shortens time, it does not replace distance/barrier protection (B).' },
      { prompt: 'After a procedure, a dental assistant touches a drawer handle with a contaminated glove. What is the correct sequence?',
        options: ['A. Continue working; the glove is still on', 'B. Remove gloves, wash hands, then disinfect the contacted surface', 'C. Wipe the glove on a towel and keep working', 'D. Apply more hand sanitizer over the glove'],
        answer: 'B',
        explanation: 'A contaminated glove transfers microbes to surfaces; standard precautions require removing gloves, performing hand hygiene, and then cleaning/disinfecting the touched surface. Options A, C, and D leave contamination in place and are common ICE/GC wrong answers.' },
      { prompt: 'A gypsum mix has begun to set too quickly. Which action is correct?',
        options: ['A. Add more water to soften it', 'B. Add more powder to thicken it', 'C. Discard it and prepare a fresh mix per the manufacturer’s ratio', 'D. Microwave briefly to re-liquefy'],
        answer: 'C',
        explanation: 'Altering the water/powder ratio after mixing weakens the set material’s properties; the correct action is to discard and remix to the recommended ratio. This is a classic GC dental-materials trap where "fixing" the mix is the wrong answer.' }
    ],
    note: 'Samples are editor-written illustrations of the published DANB component blueprints; they are not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'CDA component exams are delivered in person by computer at Pearson VUE test centers. You schedule each component within DANB’s eligibility window after your application is approved. Arrive early; check-in includes ID verification and a tutorial.',
    bring: ['Government photo ID matching your Pearson VUE registration exactly', 'Your appointment confirmation', 'Proof of current CPR if required by your eligibility path (kept with your records)'],
    leave: ['Phones, smartwatches, and personal bags (secured in locker)', 'Study notes, textbooks, and calculators', 'Any food/drink beyond what the center permits on breaks'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present ID, complete check-in and photo capture.' },
      { time: 'At start', detail: 'Optional tutorial, then the component exam (timed) begins.' },
      { time: 'On completion', detail: 'Preliminary result may display; official score report from DANB follows.' },
      { time: 'If a component is failed', detail: 'Retake only that component within the eligibility window per DANB retake rules.' }
    ],
    rules: ['Each component is scored 100–900; you need 400 to pass that component.', 'You may not bring your own materials; center provides what is permitted.'],
    afterwards: 'Component results post to your DANB record; once GC, RHS, and ICE are all passed you earn the CDA. DANB sends the official score report. Maintain 12 CDE plus current CPR annually to keep the credential active.'
  }
};

export default data;
