// Depth content for: pe-civil
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Engineering licensure desk',
    bio: 'This guide is compiled and maintained by our engineering-licensure desk. The PE Civil exam is developed and administered by NCEES, but the licence itself is issued by your state licensing board, which sets the experience, education and exam requirements — so we state plainly what NCEES runs versus what your state requires. NCEES publishes pass rates by discipline, which we cite with the caveat that they are cohort statistics. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, question counts, timing, fees and pass-rate reporting were taken from NCEES\'s official PE Civil pages and the latest NCEES pass-rate data.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$99,590 median for civil engineers (BLS, May 2024)',
    summary:
      'The PE Civil exam licenses the civil-engineering workforce, so the directly relevant occupation is Civil Engineers, SOC 17-1011. That occupation had a May 2024 median annual wage of $99,590, with employment of about 369,000 and 5 percent projected growth from 2024 to 2034 — a steadily growing occupation in which roughly 18,500 net new jobs are projected over the decade, plus the replacement openings from retirement. The distribution deserves careful reading because the PE licence matters inside it: while a civil engineer can work in many roles without a PE, the licence is what allows an engineer to take legal responsibility for work, sign and seal plans, and advance into the senior and public-facing roles that sit toward the top of the pay range — and many employers, especially in the public sector and consulting, tie advancement and pay to licensure. The honest framing for a PE candidate is that the exam is the credential that unlocks the upper half of the civil-engineering career: the FE (Fundamentals of Engineering) is the gatekeeper taken near graduation, the years of supervised experience come next, and the PE is the licence that converts experience into professional responsibility. Because BLS classifies civil engineers as one occupation regardless of licence, the wage premium for the PE is visible in job postings and career progression rather than in the occupation median itself — but it is real, and it is the reason the exam is worth the preparation investment.',
    rows: [
      { label: 'Median annual wage, civil engineers', value: '$99,590', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Employment, 2024', value: '368,900 jobs', note: 'BLS Employment Projections, 2024' },
      { label: 'Projected change 2024-34', value: '+5%, ~18,500 net new jobs', note: 'BLS Employment Projections, 2024-34' }
    ],
    growth: '+5% projected change 2024-34, with ~18,500 net new jobs plus replacement openings. The PE licence unlocks the senior, public-facing roles; BLS does not split wages by licence, so the premium shows in progression and postings rather than the occupation median.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Civil Engineers',
      url: 'https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCEES publishes pass rates by discipline — recent PE Civil rates have been in the low-to-mid 60s percent',
    summary:
      'NCEES is unusual among exam bodies in publishing pass rates: its annual data breaks results down by exam and by first-time versus repeat candidates, and recent PE Civil figures have put the first-time pass rate in the low-to-mid 60s percent range — the exact figure varies by year and by whether the report counts first-time or all candidates, so we cite it as a range and point you to the latest NCEES data rather than pinning a stale number. Two things matter about that statistic. First, it is a cohort figure: it describes the share of candidates who passed in a given year, and your outcome depends on your preparation and your state\'s requirements, not on the cohort. Second, the PE is a breadth-plus-depth exam — the morning breadth section covers general civil topics, and the afternoon depth section is your chosen discipline module (construction, geotechnical, structural, transportation, or water resources and environmental) — so the statistic masks wide variation by depth module and by candidate background. The published figure is genuinely useful for planning: it tells you this is a serious exam that most candidates do not pass by winging it, and it makes the retake pattern (a substantial share of candidates sit more than once) something to plan around rather than a personal failure. The exam is scored as pass/fail, and NCEES reports only the outcome plus a diagnostic of performance by area, not a numeric score.',
    source: {
      label: 'NCEES — PE Civil exam information and pass-rate data',
      url: 'https://ncees.org/engineering/pe/civil/'
    },
    caveat:
      'NCEES publishes pass rates by discipline; recent PE Civil first-time pass rates have been in the low-to-mid 60s percent range (confirm the latest figure at ncees.org). The exam is scored pass/fail with a diagnostic by area, not a numeric score.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The PE Civil is an 8-hour exam (two 4-hour sessions with a lunch break) of 80 questions — 40 breadth questions in the morning covering general civil engineering, and 40 depth questions in the afternoon in your chosen module: construction, geotechnical, structural, transportation, or water resources and environmental. It is a reference-based exam: you bring the NCEES-approved reference handbook and your own bound reference materials, which changes how you study — the skill is knowing where to find things and how to apply them, not memorisation. Most candidates take it after passing the FE and completing the years of supervised experience their state requires (commonly four years for a four-year engineering degree), and many states allow candidates to sit near the end of that experience. The plan below runs sixteen weeks at roughly 10-12 hours a week — the exam rewards a long, steady run because the breadth section spans the whole discipline and the depth section demands genuine depth in your module. The first six weeks rebuild the breadth areas you have not touched since school, the next six weeks go deep on your chosen module, and the final four weeks are timed full-length practice under exam conditions, including practising with your reference materials organised for speed. The single most important structural fact is that your reference system is part of the exam: a candidate with a well-tabbed handbook and organised notes moves through 80 questions far faster than one searching from memory.',
    totalHours: '160-200 hours',
    weeks: [
      {
        label: 'Weeks 1-2',
        focus: 'Baseline and reference-system setup',
        tasks: [
          'Take one untimed breadth-and-depth diagnostic to see which areas have decayed since school',
          'Confirm your state\'s requirements: experience hours, application deadlines, and whether you may sit before completing experience',
          'Buy the current NCEES reference handbook and set up your reference binder with tabs and dividers',
          'Decide your depth module if you have not already — pick the one matching your work experience'
        ],
        hours: '10-12 hrs/week'
      },
      {
        label: 'Weeks 3-6',
        focus: 'Breadth rebuild (morning section)',
        tasks: [
          'Work the breadth areas systematically: structural analysis and design, geotechnical, water resources, transportation, construction, and project management concepts',
          'For each area, practise with the reference handbook open — the exam is find-and-apply, not recall',
          'Tag every miss to an area and keep a running list',
          'Do one timed 40-question breadth set per week from Week 5'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 7-10',
        focus: 'Depth module mastery (afternoon section)',
        tasks: [
          'Work your chosen module in depth: for structural, that means analysis and design across steel, concrete, timber and masonry; for geotechnical, foundations and earth structures; for transportation, geometric design and traffic; for water resources, hydrology and hydraulics; for construction, scheduling and estimating',
          'Practise the depth items with the handbook and your own notes — depth questions are harder and more applied',
          'Re-drill the breadth areas weekly so the morning does not decay while you go deep',
          'One timed 40-question depth set per week from Week 9'
        ],
        hours: '12-14 hrs/week'
      },
      {
        label: 'Weeks 11-13',
        focus: 'Timed full-length practice',
        tasks: [
          'Three full 8-hour practice exams, split into the two 4-hour sessions with a lunch break, under exam conditions',
          'Use only your actual reference materials and practise finding items fast',
          'Review each full exam by area — the pattern of misses matters more than the total',
          'Refine your reference system: tab what you reached for repeatedly'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Weeks 14-15',
        focus: 'Weak-area repair and pacing',
        tasks: [
          'Re-drill the specific areas that cost points in the full exams',
          'Practise the time-splitting discipline: 40 breadth questions in 4 hours, 40 depth in 4 hours, about 6 minutes per question',
          'Verify the exam-day logistics: your state\'s application approval, the test centre, and the reference-material rules',
          'One more timed full exam to confirm pacing'
        ],
        hours: '11-13 hrs/week'
      },
      {
        label: 'Week 16',
        focus: 'Taper and logistics',
        tasks: [
          'Light review only: your miss list, the reference-system tabs, and the handbook layout',
          'Confirm your approved application, ID, and test-centre seat',
          'Pack your reference materials per the rules and check the prohibited-items list',
          'One quiet day before the exam'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Working full-time as an EIT', detail: 'Stretch to 20-24 weeks at 8-10 hrs/week. The breadth rebuild is the part that decays with years of specialisation, so front-load it; your work experience makes the depth module the easier half.' },
      { label: 'Recent graduate, FE fresh', detail: 'Ten to twelve weeks at 12-14 hrs/week. Your breadth base is recent; spend the time on the depth module and on full-length timed practice, which you have never done.' },
      { label: 'Changing depth module mid-career', detail: 'Treat the new module as a genuine rebuild: add four weeks to the depth phase and take a full-depth diagnostic before Week 7 to see the real gap.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The PE Civil is a reference-based, breadth-plus-depth exam, and the preparation levers are the reference system, the timed full-length rehearsal, and disciplined breadth maintenance while you go deep. The strategies below are ordered by what actually moves a candidate from the low-to-mid-60s cohort into the pass column.',
    items: [
      {
        title: 'Build the reference system early and refine it constantly',
        detail: 'The exam is find-and-apply, not recall: candidates with a well-tabbed NCEES handbook and organised, tabbed notes move through 80 questions far faster than those searching from memory. Set the system up in Week 2, and every time you reach for the same thing twice, tab it or move it closer to the front. The system is part of the exam, and the candidates who pass treat it that way.'
      },
      {
        title: 'Protect the breadth section while you go deep',
        detail: 'The morning breadth section spans the whole discipline, and the areas you do not use at work decay fastest. Candidates who spend sixteen weeks only on their depth module fail the breadth morning. Maintain a weekly breadth drill throughout the depth phase, even when it feels like review.'
      },
      {
        title: 'Rehearse the full 8-hour day at least three times',
        detail: 'The PE is a marathon, and stamina is a real factor: the second 4-hour session is where fatigue costs candidates who never rehearsed the full day. Three full exams under exam conditions, with the same lunch break, turn the 8-hour experience from a shock into a plan.'
      },
      {
        title: 'Practise the 6-minutes-per-question discipline',
        detail: '80 questions in 8 hours is about 6 minutes each — comfortable for the breadth items and tight for the hardest depth items. Practise the discipline of moving past a hard question and returning to it, because the candidates who pass are the ones who finish the paper, not the ones who perfect question 23.'
      },
      {
        title: 'Use NCEES materials and the latest handbook edition',
        detail: 'NCEES\'s own practice exams are the closest thing to the real item style, and the reference handbook edition you practise with must be the edition you take in. Old editions and old practice material produce confidently wrong answers. Confirm the current edition before you build the system around it.'
      },
      {
        title: 'Plan the state-application timeline in parallel',
        detail: 'The licence is issued by your state board, and the application — experience verification, education review, and any state-specific requirements — runs on the board\'s timeline, not the exam\'s. Submit it early enough that your approved application is in hand before you book the exam, because you cannot sit without state approval.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The buying decisions for PE Civil prep are the reference materials (the NCEES handbook is central), a review course (worth it mainly for the depth module and the breadth rebuild), and NCEES\'s own practice exams, which are the closest thing to the real item style. Because the exam is reference-based, the highest-value resources are those that train find-and-apply speed, not encyclopedic reading.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCEES PE Civil exam registration', values: ['~$375-400 exam fee plus state application fees (varies by state)', 'Computer-based at an approved test centre', 'Required — you must have an approved state application to sit' ], },
      { label: 'NCEES Reference Handbook (current edition)', values: ['Free digital download from NCEES; print copies sold separately', 'Digital or print reference', 'The core reference — the exam is find-and-apply from this book' ], },
      { label: 'NCEES PE Civil practice exam', values: ['~$40-60', 'Official practice exam with solutions', 'The closest item style to the real exam; the best readiness check' ], },
      { label: 'PE Civil review course (e.g., School of PE, EET)', values: ['~$300-900 depending on provider and depth module', 'Live or on-demand with practice problems', 'Structured depth-module mastery and breadth rebuild for career changers' ], },
      { label: 'Your own reference binder (notes, tabbed standards)', values: ['Free to low-cost', 'Self-built reference', 'The speed advantage on the day — organise it and refine it all through prep' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; NCEES and state fees vary by state and change periodically, so confirm the current figures with NCEES and your state board. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'PE Civil candidates fail on process more than knowledge: they under-rehearse the full day, let the breadth section decay while going deep, and treat the reference materials as an afterthought. The six traps below are the recurring ones, and all are fixable within a sixteen-week cycle.',
    items: [
      {
        mistake: 'Under-rehearsing the full 8-hour day',
        fix: 'The PE is a marathon, and the second 4-hour session is where fatigue costs candidates who never rehearsed the full day. Three full exams under exam conditions, with the same lunch break, turn the 8-hour experience from a shock into a plan.'
      },
      {
        mistake: 'Letting the breadth section decay while going deep',
        fix: 'The morning breadth section spans the whole discipline, and the areas you do not use at work decay fastest. Candidates who spend the whole prep on their depth module fail the breadth morning. Maintain a weekly breadth drill throughout the depth phase.'
      },
      {
        mistake: 'Treating the reference system as an afterthought',
        fix: 'The exam is find-and-apply, and a candidate with a well-tabbed handbook and organised notes moves far faster than one searching from memory. Set the system up early and refine it constantly — tab what you reach for repeatedly. The system is part of the exam.'
      },
      {
        mistake: 'Practising with an outdated handbook or exam edition',
        fix: 'The handbook edition you practise with must be the edition you take in, and old practice material produces confidently wrong answers. Confirm the current NCEES edition and use NCEES\'s own practice exams for the closest item style.'
      },
      {
        mistake: 'Perfecting hard questions instead of finishing the paper',
        fix: '80 questions in 8 hours is about 6 minutes each, and the candidates who pass finish the paper rather than perfecting question 23. Practise the discipline of moving past a hard question and returning to it; a flagged-and-returned question scores better than an unfinished paper.'
      },
      {
        mistake: 'Leaving the state application for the last minute',
        fix: 'You cannot sit without state approval, and the board\'s application — experience verification, education review — runs on its own timeline. Submit it early enough that your approved application is in hand before you book the exam.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The PE Civil is 80 questions over two 4-hour sessions: 40 breadth questions in the morning covering general civil engineering (structural, geotechnical, water resources, transportation, construction, and project management concepts), and 40 depth questions in the afternoon in your chosen module. It is a reference-based, computer-based exam, scored pass/fail with a diagnostic of performance by area, and the questions are a mix of conceptual items and, predominantly, calculation and design items that require applying the reference materials. The typical item presents a design or analysis scenario — a beam under load, a footing on a soil profile, a pipe network, a highway curve — with the data needed to solve it, and the correct approach is to identify the applicable method, pull the equations from the handbook, and work the calculation. Because the exam is find-and-apply, the skill being tested is as much navigation and disciplined method as civil-engineering knowledge: a candidate who knows where the right equation lives and works methodically scores higher than one who half-remembers the material. The depth questions are more applied and often multi-step, and the distractors in the multiple-choice format are typically the results of common method errors — wrong sign conventions, wrong unit conversions, or using the wrong equation for the situation.',
    types: [
      { name: 'Conceptual items', share: 'A meaningful minority across both sessions', detail: 'Test understanding of principles, methods and code intent rather than calculation. Reward knowing which approach applies.' },
      { name: 'Calculation and design items', share: 'The majority of the paper', detail: 'Apply the reference handbook to a design or analysis scenario; the answer is a computed value, and distractors are common method errors.' },
      { name: 'Breadth vs depth structure', share: '40 breadth + 40 depth questions', detail: 'The morning spans the discipline; the afternoon is your chosen module in depth. Both count equally toward the pass/fail result.' }
    ],
    samples: [
      {
        prompt: 'A simply supported steel beam spans 20 feet and carries a uniform load of 2 kips per foot. Ignoring the beam weight, what is the maximum bending moment in the beam?',
        options: [
          'A. 40 kip-ft',
          'B. 80 kip-ft',
          'C. 100 kip-ft',
          'D. 200 kip-ft'
        ],
        answer: 'C',
        explanation: 'For a simply supported beam with a uniform load, the maximum moment is wL²/8 = (2 kip/ft)(20 ft)²/8 = 800/8 = 100 kip-ft (C). A (40) comes from using wL/2, the reaction formula, not the moment. B (80) comes from wL²/10, an approximation for continuous spans. D (200) comes from wL²/4, which applies to a mid-span point load, not a uniform load. The item rewards knowing which formula applies to which loading — the essence of the find-and-apply method.'
      },
      {
        prompt: 'A footing bears on a soil with an allowable bearing pressure of 3,000 psf. The column above transmits a total load of 120 kips. Ignoring the footing weight, what is the minimum required footing area?',
        options: [
          'A. 20 square feet',
          'B. 40 square feet',
          'C. 60 square feet',
          'D. 120 square feet'
        ],
        answer: 'B',
        explanation: 'Required area = load ÷ allowable bearing pressure = 120,000 lb ÷ 3,000 lb/ft² = 40 square feet (B). A (20) divides by 6,000, double the allowable pressure. C (60) comes from a unit error or an incorrect pressure. D (120) is the load in kips taken directly as area, a units mistake. Geotechnical items like this test the direct application of the bearing-pressure relationship, and unit discipline is where candidates drop points.'
      },
      {
        prompt: 'For a project in a floodplain, the engineer must design a culvert to pass a given design storm. Which of the following is the most appropriate first step in the hydraulic analysis?',
        options: [
          'A. Estimate the design discharge for the watershed using the applicable hydrologic method',
          'B. Select the culvert pipe material',
          'C. Size the culvert by guessing a diameter',
          'D. Skip the hydrology and design for the maximum recorded flow'
        ],
        answer: 'A',
        explanation: 'The hydraulic design of a culvert begins with the hydrology — estimating the design discharge from the watershed using the applicable method (rational method, unit hydrograph, or the jurisdiction\'s guidance) (A). B selects material before the flow is known. C sizes without a design flow, which is not engineering. D overdesigns without the governing hydrologic basis. The item tests understanding the method order: hydrology before hydraulics, which the water-resources module teaches explicitly.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published exam structure, not actual NCEES items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The PE Civil is an 8-hour, computer-based exam at an approved test centre: 40 breadth questions in the first 4-hour session, a scheduled lunch break, then 40 depth questions in the second 4-hour session. It is a reference-based exam — you bring the current NCEES reference handbook and your own bound reference materials within the rules — so the logistics of the reference system are part of exam-day preparation, and the prohibited-items list (no loose notes, no digital references beyond what NCEES allows) must be checked the week before. The administrative gates are your state board\'s approved application (you cannot sit without it) and your ID: the name on your government-issued photo ID must match your registration exactly. At the centre you are checked in, photographed and seated; the computer interface provides the reference handbook and a calculator within the exam. Pace each 4-hour session at about 6 minutes per question, move past hard questions and return to them, and use the lunch break to reset completely rather than to second-guess the morning. The result is delivered through your state board and NCEES, typically a few weeks after the exam, as a pass/fail with a diagnostic of performance by area.',
    bring: [
      'Your government-issued photo ID with your name matching your registration exactly',
      'Your approved state application and exam confirmation',
      'The current NCEES reference handbook and your bound, tabbed reference materials, within the rules',
      'The NCEES-approved calculator from the permitted list',
      'A clear plan for the lunch break — the 4-hour sessions demand a full reset'
    ],
    leave: [
      'Phones, smartwatches and earbuds — secured in a locker',
      'Loose notes and unbound materials, which the rules prohibit',
      'Any calculator not on the NCEES permitted list',
      'Bags, coats, food and drink beyond what the centre permits'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your state approval is in hand, your ID matches your registration, and the current handbook edition and calculator are within the rules.' },
      { time: '30 minutes before', detail: 'Arrive at the centre for check-in — photo, ID verification, lockers.' },
      { time: 'Morning session (4 hours)', detail: '40 breadth questions at ~6 minutes each; move past hard questions and return to them.' },
      { time: 'Lunch break', detail: 'Reset completely — the second session is where fatigue costs candidates who did not rehearse the full day.' },
      { time: 'Afternoon session (4 hours)', detail: '40 depth questions in your module; keep the same pacing discipline.' },
      { time: 'After submission', detail: 'Your pass/fail result and diagnostic are delivered through your state board and NCEES, typically within a few weeks.' }
    ],
    rules: [
      '80 questions over two 4-hour sessions (40 breadth + 40 depth), with a scheduled lunch break.',
      'Reference-based: the current NCEES handbook and bound reference materials within the rules; no loose notes or unapproved digital references.',
      'You must have an approved state application to sit; the licence is issued by your state board, not NCEES.',
      'The result is pass/fail with a diagnostic by area; no numeric score is reported.',
      'Only NCEES-approved calculators are permitted.'
    ],
    afterwards:
      'Your PE Civil result arrives as a pass/fail with a diagnostic of performance by area, delivered through your state board and NCEES typically a few weeks after the exam. On a pass, you complete your state board\'s remaining steps — final licence issuance, any state-specific requirements, and in most states a continuing-education cycle — and the licence authorises you to take professional responsibility for engineering work, sign and seal plans, and advance into the roles where that authority matters. Log the renewal cycle your state requires (commonly every one to two years, with professional development hours). On a fail, the diagnostic tells you which areas dragged you down — for most candidates it is either the breadth morning (areas decayed since school) or specific depth topics — and the retake policy is set by your state and NCEES, with each attempt paid at full price. Use the window for targeted repair: rebuild the diagnostic\'s weak areas, rehearse the full day again, and refine the reference system. The low-to-mid-60s pass-rate cohort statistic is useful context, not a verdict: candidates who put the sixteen-week work in — reference system, breadth maintenance, full-day rehearsal — are the ones who move from the cohort into the pass column.'
  }
};

export default data;
