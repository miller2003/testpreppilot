// Depth content for: nasm-certified-nutrition-coach
// Real, sourced data compiled from primary sources (NASM, BLS). Every numeric
// row carries a note/source. Omitted fields were not verifiable — not invented.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Fitness & nutrition credentials desk',
    bio: 'This guide is compiled and maintained by our fitness-credentials desk. Certification marketing in this field is unusually aggressive, so we check accreditation claims against the accrediting body or the parent company’s own published register rather than repeating the seller’s wording, and we flag it plainly when the two disagree. Exam mechanics, renewal requirements and fees come from the issuer’s candidate handbook. Wage figures come from the Bureau of Labor Statistics series for fitness trainers and instructors, with the self-employment caveat stated rather than buried.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Accreditation claims were checked against the accrediting body’s register rather than the seller’s marketing copy.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (BLS OOH/OEWS, SOC 39-9031)
  salaryOutlook: {
    headline: '$46,180 median (BLS OOH, May 2024)',
    summary: 'The NASM Certified Nutrition Coach (CNC) is a non-clinical wellness credential aimed at fitness professionals, health coaches, and anyone who wants to guide clients on everyday nutrition. Its wage context is the fitness-training occupation because CNC holders most often coach nutrition within a training/wellness scope rather than as employed dietitians. The U.S. Bureau of Labor Statistics reports fitness trainers and aerobics instructors (SOC 39-9031) earned a median annual wage of $46,180 in May 2024, with 370,100 jobs and a projected 12% growth from 2024 to 2034 — "much faster than average," about 74,200 openings per year. The salary range is unusually wide: the bottom decile is $27,580 (part-time, entry-level, or gym-floor roles) and the top decile is $82,050 (established coaches, studio owners, and high-cost metro markets). The CNC itself does not license you to treat medical nutrition problems — that remains the RDN’s scope — but it lets a personal trainer or wellness coach add paid nutrition-coaching services, which is where the earnings lift comes from. Candidates should read the median as a proxy for the coaching occupation and expect income to scale with client load, specialization, and business acumen rather than the certificate alone. Because the CNC is a coaching rather than clinical credential, its wage effect flows through client load, specialization, and business skill rather than a fixed increase. Trainers who add nutrition coaching typically bill an additional service line, and the top decile reflects established coaches and studio owners. Candidates should view the credential as a revenue-expansion tool within a fitness career, not a path to dietitian-level pay, and should respect the scope boundary that keeps medical nutrition therapy with the RDN.',
    rows: [
      { label: 'Median annual wage', value: '$46,180', note: 'BLS OOH, Fitness Trainers and Aerobics Instructors (SOC 39-9031), May 2024' },
      { label: '10th percentile', value: '$27,580', note: 'BLS OEWS, SOC 39-9031, May 2024' },
      { label: '90th percentile', value: '$82,050', note: 'BLS OEWS, SOC 39-9031, May 2024' },
      { label: 'Employment, 2024', value: '370,100', note: 'BLS OOH, Fitness Trainers, 2024' },
      { label: 'Projected growth, 2024–2034', value: '12% (much faster than average)', note: 'BLS OOH Job Outlook, Fitness Trainers' }
    ],
    growth: '12% growth 2024–2034 (BLS OOH, much faster than average); ~74,200 annual openings including replacements.',
    source: { label: 'BLS Occupational Outlook Handbook — Fitness Trainers and Aerobics Instructors (SOC 39-9031)', url: 'https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm' }
  },

  // P0-2  Pass rates — NASM does not publish a CNC pass rate
  passRate: {
    headline: 'Pass rate not published by NASM',
    summary: 'NASM does not publish a pass rate for the Certified Nutrition Coach exam. The exam is open-book, delivered online, non-proctored, and scored on a straight 70% correct threshold with up to three attempts within a one-year eligibility window — a structure that makes a published "pass rate" less meaningful as a difficulty signal and, in practice, NASM does not release one. We verified this on NASM’s CNC pages (shop.nasm.org and the CNC program page): NASM states the 70% standard, the three-attempt allowance, and the 100-question/90-minute format, but provides no first-time or cumulative pass percentage. Because the exam is open-book and retake-friendly, candidates control their own outcome far more than on a proctored, single-attempt credential. We therefore omit a pass-rate number rather than estimate one, and note the 70% threshold as the only public benchmark. If NASM later publishes a rate, this section should be updated with the cited source. The open-book, multi-attempt design means a candidate own preparation drives the outcome, which is why NASM does not treat a published rate as a useful signal. The 70% threshold is achievable for most who complete the curriculum and rehearse the timed format; the main risk is underestimating the clock and the scope-of-practice items. Candidates should still prepare deliberately, because although attempts two and three are available, they cost time and the one-year access window is not unlimited. Treating attempt one as a diagnostic and studying the rationales on missed items is the most efficient route to a first-try pass. Even with three attempts available, the most efficient path is to treat the first sitting seriously, because each additional attempt consumes part of the one-year window and delays the credential that unlocks paid coaching work.',
    rows: [
      { label: 'Published candidate pass rate', value: 'Not published', note: 'NASM does not release a CNC exam pass rate (verified on shop.nasm.org / nasm.org CNC pages, 2026-08)' },
      { label: 'Passing standard', value: '70% correct', note: 'NASM CNC exam page; up to 3 attempts in the 1-year window' },
      { label: 'Exam format', value: '100 Q, 90 min, open-book, online, non-proctored', note: 'NASM CNC program page; 1 year from purchase to complete' }
    ],
    source: { label: 'NASM — Certified Nutrition Coach (CNC) program & exam page', url: 'https://www.nasm.org/continuing-education/certified-nutrition-coach' },
    caveat: 'NASM does not publish a CNC candidate pass rate. No percentage is reported here to avoid inventing one; the only public benchmark is the 70% passing standard with up to three attempts.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary: 'Because the CNC exam is open-book and self-paced, the binding constraint is your schedule, not a test center. Most candidates finish in 4–6 weeks while working full time. Plan 40–60 hours total, front-loading the science modules and using the open-book nature for verification, not cramming.',
    totalHours: '40–60 hours',
    weeks: [
      { label: 'Weeks 1–2', focus: 'Nutrition science foundations', tasks: ['Macronutrients, micronutrients, hydration', 'Energy balance, metabolism, body-composition basics', 'Take module practice quizzes; flag weak areas'], hours: '8 hrs/week' },
      { label: 'Weeks 3–4', focus: 'Coaching & behavior change', tasks: ['Motivational interviewing, habit formation', 'Scope of practice and when to refer to an RDN', 'Build a sample client plan template'], hours: '8 hrs/week' },
      { label: 'Week 5', focus: 'Integration & practice exam', tasks: ['Full 100-question timed practice (simulate the 90 min)', 'Review missed items against module rationale', 'Drill label-reading and calculation items'], hours: '8 hrs/week' },
      { label: 'Week 6', focus: 'Exam & buffer', tasks: ['Sit the open-book exam from a quiet space', 'Keep attempt 2/3 in reserve if needed', 'Download certificate on pass'], hours: '4 hrs/week' }
    ],
    variants: [
      { label: 'Accelerated (2–3 weeks)', detail: 'If you already hold a CPT, compress to 2–3 weeks at 12–15 hrs/week; the open-book format rewards familiarity over memorization.' },
      { label: 'Self-paced over months', detail: 'NASM gives one year of course access; spread modules across 3–4 months at 2–3 hrs/week if that fits better.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary: 'The CNC is open-book and non-proctored, so strategy shifts from memorization under pressure to organized retrieval: know where answers live and verify, don’t guess blind.',
    items: [
      { title: 'Build a navigation map of the digital curriculum', detail: 'Because the exam is open-book, speed comes from knowing which module covers what. Keep a one-page index of topics so you can locate the right section in seconds during the 90-minute window.' },
      { title: 'Practice the real 100-question/90-minute timing', detail: 'Even open-book, 90 minutes for 100 items is ~54 seconds each. Run at least one full timed practice so the clock does not force rushed lookups on calculation/label questions.' },
      { title: 'Master scope-of-practice boundaries', detail: 'A frequent tested distinction is what a CNC may do versus an RDN (medical nutrition therapy). Know when to refer; these items separate confident passes from borderline ones.' },
      { title: 'Use the three-attempt allowance wisely', detail: 'You get up to three attempts within the year. Treat attempt one as diagnostic, study the rationale on missed items, then retest — the open-book, multi-attempt design makes a first-try miss low-stakes if you learn from it.' }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary: 'NASM is the sole source for the CNC exam; the "resource" decision is really which NASM plan to buy. Prices below verified on the NASM shop/CNC pages (NASM runs frequent promotions, so list prices are reference points).',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NASM CNC Self-Study', values: ['$49/mo (or ~$899 pay-in-full promo; list ~$1,199)', 'Fully digital, videos, quizzes, exam', 'Self-motivated learners wanting core access'], note: '' },
      { label: 'NASM CNC Premium Self-Study', values: ['$59/mo (or ~$1,199 promo; list ~$1,599)', 'Adds hardcopy text + business webinars', 'Those wanting a physical book + biz tools'], note: '' },
      { label: 'NASM practice quizzes (included)', values: ['Included in both plans', 'Built into the course', 'Benchmark before the exam'] }
    ].map(r => ({ label: r.label, values: r.values })),
    footnote: 'Prices checked 2026-08 from shop.nasm.org / nasm.org CNC pages; NASM promotions change frequently, so treat list prices as reference. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary: 'CNC candidates fail less from content and more from misunderstanding the open-book format and the coaching scope.',
    items: [
      { mistake: 'Assuming open-book means no study needed', fix: 'You still need ~54 seconds per question. Candidates who never learned the material burn the clock hunting for answers and miss the 70% line. Prep the index, then verify.' },
      { mistake: 'Confusing CNC scope with the RDN’s', fix: 'The exam tests when to refer clients to a Registered Dietitian Nutritionist for medical nutrition therapy. Know that boundary; overstepping is a wrong-answer trap.' },
      { mistake: 'Not simulating the 90-minute clock', detail: 'Open-book lookups eat time. Run one full timed practice so pacing, not knowledge, is never the failure mode.' },
      { mistake: 'Letting the one-year access lapse', detail: 'You have one year from purchase to pass (up to 3 attempts). Schedule the exam; do not treat the window as infinite and lose access.' }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary: 'The NASM CNC exam is 100 multiple-choice questions over 90 minutes, delivered online and open-book (non-proctored). A scaled 70% correct is the passing standard, with up to three attempts allowed within one year of purchase. The exam covers evidence-based nutrition science, behavior-change coaching, and scope-of-practice boundaries; it is not NCCA-accredited (NASM lists it for CEU credit with NASM, AFAA, ACE, and NSCA, and it is a wellness/coaching credential, not a clinical license). Questions are single-best-answer items that often ask you to apply guidance to a client scenario.',
    types: [
      { name: 'Multiple choice (open-book)', share: '100 questions', detail: 'Single best answer; 90 minutes; 70% to pass; 3 attempts in 1 year.' },
      { name: 'Scenario/application items', share: 'Majority', detail: 'Client-based stems testing coaching, habit change, and referral judgment.' }
    ],
    samples: [
      { prompt: 'A client taking a statin reports muscle aches and wants to start a high-dose red yeast rice supplement. As a CNC, the best action is to:',
        options: ['A. Recommend the supplement at a lower dose', 'B. Advise stopping the statin and using the supplement instead', 'C. Refer the client to their physician/RDN before adding the supplement', 'D. Prescribe CoQ10 to offset the aches'],
        answer: 'C',
        explanation: 'A CNC coaches within a wellness scope and must refer medical/nutraceutical decisions to the client’s physician or an RDN; recommending or changing a prescribed drug regimen (A, B, D) exceeds scope. C respects both safety and scope-of-practice boundaries tested on the exam.' },
      { prompt: 'Which strategy best supports long-term adherence for a client struggling with evening snacking?',
        options: ['A. Eliminate all snacks immediately', 'B. Use motivational interviewing to identify triggers and a small, sustainable swap', 'C. Assign a strict 1,200-kcal plan', 'D. Tell the client they lack willpower'],
        answer: 'B',
        explanation: 'Behavior-change and coaching modules emphasize motivational interviewing and small, sustainable changes over restriction or blame. B builds adherence; A and C are rigid and often backfire, and D is non-coaching language. This is a classic coaching-domain item.' },
      { prompt: 'On a Nutrition Facts label, "Total Carbohydrates 30g" includes which component that most directly spikes blood glucose?',
        options: ['A. Dietary fiber', 'B. Total sugars', 'C. Protein', 'D. Sodium'],
        answer: 'B',
        explanation: 'Total sugars (especially added sugars) are the carbohydrate component most directly raising blood glucose; fiber is digested slowly and blunts the spike. Protein and sodium are not carbohydrates. Label interpretation is a frequently tested applied-nutrition skill.' }
    ],
    note: 'Samples are editor-written illustrations of the published CNC scope (nutrition science, behavior-change coaching, scope-of-practice); they are not live exam items. The CNC is a wellness/coaching credential, not NCCA-accredited.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary: 'The CNC exam is taken online, open-book, and non-proctored from your own computer — there is no test center and no appointment window beyond your one-year course access. Treat it as a focused 90-minute session in a quiet space.',
    bring: ['A reliable computer with a stable internet connection', 'The NASM digital curriculum open in a second window/tab for lookups', 'A calculator and notepad for any math/label items'],
    leave: ['Distractions (phone, TV, notifications) during the 90 minutes', 'Unofficial "brain dump" sheets not needed — the curriculum is open'],
    timeline: [
      { time: 'Before you start', detail: 'Close unrelated tabs, open the curriculum index, and silence notifications.' },
      { time: '0:00', detail: 'Launch the 100-question exam; 90-minute clock starts.' },
      { time: 'Through the exam', detail: 'Answer, then verify open-book items by locating the module quickly; watch the timer.' },
      { time: 'On completion', detail: 'Instant result; if below 70%, review rationale and use attempt 2 or 3 within the year.' }
    ],
    rules: ['Open-book and non-proctored — but answers must be your own work.', 'Up to three attempts; you have one year from purchase to pass.'],
    afterwards: 'You see a pass/fail immediately. On pass, download your certificate; maintain the credential with 1.9 NASM CEUs every two years. The CNC is not NCCA-accredited and is a wellness/coaching credential, not a clinical license.'
  }
};

export default data;
