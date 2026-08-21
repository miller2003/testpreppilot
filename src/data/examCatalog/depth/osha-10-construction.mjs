// Depth content for: osha-10-construction
// IMPORTANT: OSHA 10 Construction is a DOL/OSHA Outreach TRAINING course, NOT a
// proctored certification exam. There is no national pass rate. Completion is
// based on module quizzes (typically ~70% to advance, with retries) plus a final
// assessment. The DOL issues a completion card, not a license. Data below is
// sourced from osha.gov, the eCFR/Outreach procedures, and BLS OOH (May 2024).
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Workplace safety & trades certifications desk',
    bio: 'This guide is compiled and maintained by our safety and trades desk. Federal programmes are described from the issuing agency’s own material — OSHA’s Outreach Training Program requirements and its published procedures, and the EPA’s Section 608 regulation and certifying-organisation rules. This matters more than usual here, because both areas are crowded with resellers whose claims about card validity, expiry and employer acceptance do not match the agency’s position. Where the agency deliberately publishes no figure — OSHA does not publish Outreach pass rates — we say that rather than invent one.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Programme requirements, card rules and certification categories were taken from the issuing federal agency’s own published material.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH May 2024, SOC 47-2061 Construction Laborers)
  salaryOutlook: {
    headline: '$46,050 median wage for construction laborers (BLS, May 2024)',
    summary: 'The OSHA 10 Construction card is an entry-level credential that signals a worker has received baseline hazard-awareness training, so its pay effect is indirect: it is frequently a hard prerequisite for being hired onto a job site at all rather than a wage premium by itself. The BLS groups the relevant workforce under Construction Laborers and Helpers (SOC 47-2061). Median pay sits well below the all-occupations median, but the card is what unlocks access to the higher-paying union and infrastructure projects where it is mandated. Geography and sector matter enormously — laborers on heavy/civil and highway projects and in high-cost metro areas earn far above the national median. Employers that require the card (or where state law requires it) tend to be larger, more safety-mature contractors who also pay better and offer steadier hours. For workers, the realistic financial story is "get the card to get on the site," after which overtime, specialization (e.g., scaffolding, demolition, tunnel work), and progression toward foreman or OSHA 30 drive earnings upward.',
    rows: [
      { label: 'Median annual wage', value: '$46,050', note: 'BLS OOH, Construction Laborers 47-2061, May 2024' },
      { label: 'Lowest 10%', value: 'Less than $33,610', note: 'BLS OOH, Construction Laborers 47-2061, May 2024' },
      { label: 'Highest 10%', value: 'More than $75,560', note: 'BLS OOH, Construction Laborers 47-2061, May 2024' },
      { label: 'Total employment', value: '1,649,100 jobs', note: 'BLS OOH, Construction Laborers 47-2061, May 2024' },
      { label: 'Projected openings/yr', value: '149,400', note: 'BLS OOH, 2024-2034, includes replacements' }
    ],
    growth: '7% growth 2024–2034 (about as fast as average)',
    source: { label: 'BLS Occupational Outlook Handbook — Construction Laborers', url: 'https://www.bls.gov/ooh/construction-and-extraction/construction-laborers-and-helpers.htm' }
  },

  // P0-2  Pass rates — OSHA 10 is completion-based, not a pass/fail exam
  passRate: {
    headline: 'No published pass rate — completion-based training',
    summary: 'OSHA 10 Construction is part of the DOL/OSHA Outreach Training Program, a voluntary awareness course, not a proctored certification exam. There is no single national "pass rate" the Department of Labor publishes, and the program explicitly frames success as course completion, not exam passage. Students advance by passing short module quizzes (authorized providers commonly set the threshold at about 70% and allow retakes) and a brief final assessment; the DOL then issues a completion card. Because each authorized trainer and online provider administers its own non-proctored quizzes, any aggregate pass-rate figure would be a vendor statistic, not a DOL number, so we do not publish one. The practical bar is low by design — the card certifies that a worker sat through and engaged with hazard-awareness content, which is why employers and some states treat it as a baseline gate rather than a demonstration of mastery.',
    rows: [],
    source: { label: 'OSHA Outreach Training Program', url: 'https://www.osha.gov/training/outreach' },
    caveat: 'OSHA/Outreach is a completion-based program with no national pass rate. Module quizzes are typically ~70% to pass with retries; the DOL does not publish aggregate pass statistics. We omit numeric pass-rate rows rather than fabricate them.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'OSHA 10 Construction is a fixed 10 contact-hour curriculum, so "studying" is really scheduling the course around the federal 7.5-hour-per-day online training cap. Most learners complete it in one or two sittings. The plan below assumes the common online self-paced format; instructor-led weekend classes compress it into two 5-hour days.',
    totalHours: '10 contact hours (federal curriculum)',
    weeks: [
      { label: 'Session 1', focus: 'Intro to OSHA + Focus Four (falls, struck-by, caught-in/between, electrocution)', tasks: ['Complete Introduction to OSHA module (1 hr)', 'Work through Focus Four modules — note the falls module is the longest at ~1.5 hrs', 'Pass each module quiz at ~70% before advancing'], hours: 'Up to 7.5 hrs (online daily cap)' },
      { label: 'Session 2', focus: 'PPE, Health Hazards, and an elective', tasks: ['Complete PPE module (1 hr)', 'Complete Health Hazards in Construction (2 hrs)', 'Pick one elective (e.g., scaffolds or stairways & ladders) for the final 2 hrs', 'Pass the final assessment'], hours: 'Remaining ~2.5 hrs' }
    ],
    variants: [
      { label: 'Instructor-led weekend', detail: 'Two 5-hour classroom days; no per-day online cap applies but total is still 10 contact hours.' },
      { label: 'Working full-time', detail: 'Split across 2–3 evenings; the 7.5-hour/day online cap is rarely a constraint at this volume.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'Because OSHA 10 is awareness training rather than a high-stakes test, the winning strategy is engagement, not cramming. The content is repetitive and scenario-based, so the learners who breeze through are those who connect each module to a real job-site situation they have seen.',
    items: [
      { title: 'Anchor each hazard to a real memory', detail: 'The Focus Four (falls, struck-by, caught-in/between, electrocution) are tested everywhere. Before each module, recall a news story or site experience involving that hazard — the curriculum sticks far better when it maps to something concrete than when read as abstract rules.' },
      { title: 'Treat module quizzes as the real exam', detail: 'There is no separate high-stakes test; the graded moments are the per-module quizzes. Read the feedback on wrong answers immediately — providers let you retry, and that retry loop is where the learning (and the card) actually happens.' },
      { title: 'Keep your identity documents ready', detail: 'Online providers must verify your identity before they can issue a DOL card. Have a matching government photo ID and, if required, the webcam/photo check set up before you start, so a verification snag does not block your completion certificate.' },
      { title: 'Download the temporary certificate the moment you finish', detail: 'The DOL plastic card arrives by mail in weeks. The temporary PDF you get on completion is what you show a new employer on day one — save it somewhere you can find it.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'All providers below are OSHA-authorized Outreach trainers. Prices are course fees only and do not include the DOL card (included by most) or expedited shipping. We do not rank by commission.',
    columns: ['Provider', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ClickSafety', values: ['~$79', '100% online, self-paced', 'Reputable brand, strong mobile experience'] },
      { label: '360training / OSHA.com', values: ['~$59–$69', '100% online, self-paced', 'Lowest-common-price, frequent discounts'] },
      { label: 'Summit Training Source', values: ['~$75', 'Online + some in-person', 'Employers booking crews in bulk'] },
      { label: 'OSHAcademy', values: ['Free course / ~$20 card', 'Online, free training', 'Budget learners; card fee separate'] },
      { label: 'Pure Safety', values: ['~$70', '100% online', 'Mid-size contractor groups'] }
    ],
    footnote: 'Prices checked 2026-08 and fluctuate with promos. Confirm the provider is on OSHA’s authorized-trainer list before paying; only authorized trainers can issue the valid DOL card.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'Most OSHA 10 failures are administrative, not academic — the card is refused or delayed because of identity, provider, or record-keeping errors rather than a failed quiz.',
    items: [
      { mistake: 'Buying from a non-authorized "OSHA card" site', fix: 'Only OSHA-authorized trainers can issue the valid DOL completion card. Verify the provider against OSHA’s authorized-trainer list; bargain sites that are not authorized sell worthless certificates.' },
      { mistake: 'Assuming the card is a certification or license', fix: 'The DOL card documents training completion only. It does not certify competence, does not expire nationally (though some employers/states require refreshers), and is not a substitute for trade licensing.' },
      { mistake: 'Letting the identity check fail on the final day', fix: 'Online identity verification (photo ID match, sometimes a webcam snapshot) must succeed before a card is issued. Resolve it early so completion is not blocked at the finish line.' },
      { mistake: 'Forgetting the 7.5-hour/day online cap', fix: 'Federal Outreach rules cap online training at 7.5 hours per calendar day. You cannot legally "power through" all 10 hours in one sitting online — pace it across at least two days.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'There is no single proctored OSHA 10 exam. Assessment is a series of short, non-proctored module quizzes (commonly ~70% to pass, with retries) plus a brief final knowledge check. Questions are scenario-based multiple choice drawn from the 10-hour curriculum, weighted toward the Focus Four hazards that dominate construction injuries.',
    types: [
      { name: 'Module quiz (multiple choice)', share: '~80% of graded items', detail: 'One short quiz per topic module (Intro to OSHA, each Focus Four hazard, PPE, Health Hazards, elective). Typically 5–10 questions; ~70% to advance, unlimited retries at the provider’s discretion.' },
      { name: 'Final assessment', share: '~20%', detail: 'A brief cumulative multiple-choice check covering the full 10 hours. Also commonly ~70% to pass; passing unlocks the completion certificate and DOL card request.' }
    ],
    samples: [
      { prompt: 'A worker is installing steel decking 18 feet above a concrete slab with no guardrails and no fall-protection plan on site. Under OSHA construction standards, what is the employer’s primary duty?', options: ['A. Provide a personal flotation device', 'B. Provide and ensure use of fall protection (e.g., guardrails or harness) at 6 feet or higher', 'C. Allow the worker to decide if protection is needed', 'D. Post a warning sign and continue work'], answer: 'B', explanation: 'B is correct: OSHA’s fall-protection standard (29 CFR 1926.501) requires protection beginning at 6 feet in construction. A, C, and D are wrong — falls are the leading Focus Four killer and cannot be addressed by signage, floats, or worker choice.' },
      { prompt: 'Which of the four "Focus Four" construction hazards is addressed by keeping a safe distance from heavy equipment swing radius and wearing high-visibility clothing?', options: ['A. Struck-by', 'B. Electrocution', 'C. Caught-in/between', 'D. Falls'], answer: 'A', explanation: 'A is correct: struck-by hazards cover workers hit by objects, equipment, or vehicles. High-vis clothing and staying clear of swing/backup zones directly reduce struck-by injuries. The others are distinct Focus Four categories with different controls.' }
    ],
    note: 'Samples are editor-written illustrations of the published OSHA 10 blueprint, not live exam items. The real quizzes are administered privately by each authorized provider.'
  },

  // P0-8  Exam-day guide — reframed as course-completion realities
  examDay: {
    summary: 'There is no test center or exam day. "Exam day" for OSHA 10 is the day you finish the online modules. The real logistics are the federal training rules and what happens after you complete the course.',
    bring: [
      'Government photo ID that exactly matches your course registration (required for identity verification)',
      'A quiet space and a device with a stable internet connection for online delivery',
      'Webcam ready if your provider uses photo/liveness identity checks'
    ],
    leave: [
      'No proctor, locker, or banned-items list — this is self-paced online training, not a supervised exam',
      'Do not expect to "sit" all 10 hours at once: the federal online cap is 7.5 training hours per calendar day'
    ],
    timeline: [
      { time: 'Before you start', detail: 'Confirm the provider is OSHA-authorized and your name/ID match exactly.' },
      { time: 'Per module', detail: 'Read content, then pass the ~70% quiz; retry if needed before advancing.' },
      { time: 'Day you finish', detail: 'Pass the final assessment; download your temporary completion certificate immediately.' },
      { time: 'Weeks later', detail: 'The official DOL plastic completion card arrives by mail from the trainer.' }
    ],
    rules: [
      'Online training is capped at 7.5 hours per calendar day under federal Outreach rules — pace the 10 hours across at least two days.',
      'Identity must be verified before a DOL card can be issued; mismatched names can block the card.',
      'Trainers must submit card requests within 90 days of course completion, and DOL cards can only be replaced for up to 5 years.'
    ],
    afterwards: 'You receive a temporary completion certificate on screen/in email immediately — that is what you show a new employer. The official DOL card is mailed weeks later. Keep the temporary PDF; the card is proof of training only and is not a license.'
  }
};

export default data;
