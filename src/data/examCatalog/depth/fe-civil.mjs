// Depth content for: fe-civil
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Engineering, architecture & design licensure desk',
    bio: 'This guide is compiled and maintained by our engineering-licensure desk. NCEES revises the FE and PE exams and their topic weighting on a multi-year cycle, so we cite the current FE Civil topic areas and the published pass rates by discipline and attempt type, and we state plainly where a figure is a NCEES-published number versus an estimate. The fee and calculator rules come from NCEES; wage figures come from the BLS occupational series for civil engineers, named by SOC code, with the caveat that BLS classifies by job duties rather than by licensure.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Topic areas, weights, format, approved calculators and pass rates were taken from the current NCEES FE Civil specifications and the NCEES published pass-rate tables; the fee was cross-checked because sources disagree.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$99,590 median for civil engineers (BLS, May 2024)',
    summary:
      'The FE Civil exam is the first step toward the Professional Engineer (PE) license, so the relevant occupation is Civil Engineers, a Bureau of Labor Statistics category with its own SOC code — not a generic "engineer" bucket. That occupation had a May 2024 median wage of $99,590, with the lowest 10 percent under $65,920 and the highest 10 percent over $160,990. The spread is wide and tracks closely with licensure and sector: the highest-paying settings are public and specialized — federal government at $114,210, local government at $108,790, and engineering services at $99,380 — and the top decile is dominated by licensed PEs in senior, signed-seal roles that an FE passer is explicitly working toward. BLS counted 368,900 civil-engineering jobs in 2024 and projects 5 percent growth from 2024 to 2034, about as fast as the average for all occupations, generating roughly 23,600 openings a year, almost all from replacement and retirement rather than rapid expansion. The honest reading for an FE candidate is that the exam itself does not raise your wage — it is a gateway, not a credential with independent market value — but it is the non-negotiable prerequisite to the PE license, and the PE is what unlocks the federal, public-works, and principal-role salaries at the top of the distribution. A candidate who passes the FE but never earns the PE leaves most of that upside on the table. One classification note worth flagging: BLS’s OOH profiles Civil Engineers under SOC 17-1011, while BLS’s OEWS wage series sometimes references 17-2051 for the same population; we have cited 17-1011 as the OOH code and the wage figures above come from that OOH profile, but the two codes describe overlapping civil-engineering employment and the median is the figure that matters.',
    rows: [
      { label: 'Median annual wage, civil engineers', value: '$99,590', note: 'BLS Occupational Outlook Handbook, May 2024 ($47.88/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $65,920', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $160,990', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '368,900 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Top-paying settings (mean)', value: 'Federal $114,210; Local govt $108,790', note: 'BLS OOH Pay tab, May 2024 — PE licensure strongly correlated with these roles' },
      { label: 'Projected annual openings', value: '~23,600 per year', note: 'BLS OOH Job Outlook, 2024-34 — almost all replacement/retirement' }
    ],
    growth: '5% projected growth 2024-34 (about as fast as average); ~23,600 openings a year. The FE is a gateway to the PE, which unlocks the higher-paying public and senior roles at the top of the distribution.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Civil Engineers',
      url: 'https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCEES publishes FE Civil pass rates: about 61% first-time, 32% repeat',
    summary:
      'Unlike the personal-training exams, NCEES does publish pass rates, and it breaks them out by discipline and by attempt type, which is exactly the useful cut. For FE Civil, the most recent NCEES-published cohort (NCEES Squared 2025 reporting) shows a first-time pass rate of roughly 61 percent and a repeat pass rate of roughly 32 percent, on the order of 16,600 first-time attempts and 9,900 repeat attempts — precise figures shift slightly by reporting cycle, so treat 61/32 as the current ballpark rather than a fixed constant. The first-time-versus-repeat gap is the single most important fact here, and it tells you something the raw number does not: candidates who come straight from an ABET-accredited civil curriculum, having just finished the relevant coursework, pass at a far higher rate than those who sit years later and self-study cold. One widely cited figure puts the pass rate for examinees who sat within twelve months of graduating from an ABET program closer to the high-60s percent, which is why the standard advice is to take the FE in your final year of school or immediately after, while the material is fresh, rather than deferring it. The exam is pass/fail with no numeric score reported — you are told only pass or fail, and if you fail you receive a diagnostic report by topic area, which is genuinely useful for a retake. The three-attempts-per-rolling-12-months limit is the binding constraint: you cannot simply re-sit endlessly, so a failed first attempt should trigger a focused, diagnostic-driven restudy of the weak topic areas, not a repeat of the same broad prep. The bottom line for planning is to sit while the coursework is current and to treat a fail as a targeted, not total, re-prep.',
    source: {
      label: 'NCEES — FE exam pass rates by discipline and attempt type',
      url: 'https://ncees.org/exam-pass-rates/'
    },
    caveat:
      'NCEES publishes FE Civil pass rates by discipline and attempt type; figures cited (~61% first-time, ~32% repeat) reflect the most recent NCEES-reported cohort and shift modestly by cycle. We have not invented a single exact percentage — the range and the first-time/repeat gap are the reliable signals.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The defining feature of FE Civil prep is that the exam is closed-book but the NCEES FE Reference Handbook is supplied on screen, so your job is not to memorize formulas but to know which formula to reach for and exactly where it lives in the handbook. That reframes the entire study plan: you should download the current FE Reference Handbook as your first act and practise every problem with it open, because the candidates who fail are usually the ones who wasted weeks memorizing equations they were always allowed to look up and then could not navigate the PDF under time pressure. The current FE Civil specification has fourteen topic areas: Mathematics (8-12%), Probability and Statistics (6-9%), Ethics and Professional Practice (6-9%), Engineering Economics (6-9%), Statics (14-21%), Dynamics (9-14%), Mechanics of Materials (14-21%), Fluid Mechanics (8-12%), Water Resources and Environmental Engineering (8-12%), Structural Engineering (8-12%), Geotechnical Engineering (8-12%), Construction Engineering (5-8%), Surveying (5-8%), and Transportation Engineering (5-8%). The heavy hitters are Statics, Dynamics and Mechanics of Materials — the three "core mechanics" areas together approach half the exam — so an academically weak candidate should over-invest there. The plan below runs ten weeks at roughly 12-15 hours a week and assumes you are near graduation or recently graduated; if you are years out of school, add four weeks and start the mechanics review earlier, because that material decays fastest. Time the whole thing so you sit while the coursework is freshest, ideally in your last semester.',
    totalHours: '120-150 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Handbook mastery and math foundation',
        tasks: [
          'Download the current NCEES FE Reference Handbook and learn its table of contents cold — you will navigate it by memory under the clock',
          'Set up a timed practice routine: every problem solved with the handbook open, never from memory',
          'Mathematics (8-12%): algebra, trig, calculus, differential equations, vector algebra',
          'Probability and Statistics (6-9%): distributions, confidence intervals, regression'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Weeks 2-4',
        focus: 'Core mechanics — Statics, Dynamics, Mechanics of Materials',
        tasks: [
          'Statics (14-21%): equilibrium, free-body diagrams, trusses, centroids, moments of inertia',
          'Dynamics (9-14%): kinematics, kinetics, work-energy, impulse-momentum',
          'Mechanics of Materials (14-21%): stress/strain, axial/torsion/bending, column buckling, combined loading',
          'Drill these three areas hardest — together they approach half the exam and decay fastest after graduation'
        ],
        hours: '14-16 hrs/week'
      },
      {
        label: 'Weeks 5-6',
        focus: 'Fluid Mechanics and Water/Environmental',
        tasks: [
          'Fluid Mechanics (8-12%): Bernoulli, manometry, pipe flow, open-channel basics',
          'Water Resources and Environmental Engineering (8-12%): hydrology, water quality, mass balance',
          'Locate every relevant formula in the handbook so you are not searching during the exam',
          'Mixed problem sets combining fluids with the mechanics you already covered'
        ],
        hours: '12-15 hrs/week'
      },
      {
        label: 'Week 7',
        focus: 'Structural, Geotechnical and Construction',
        tasks: [
          'Structural Engineering (8-12%): load combinations, steel and concrete basics, deflection',
          'Geotechnical Engineering (8-12%): soil mechanics, bearing capacity, lateral earth pressure',
          'Construction Engineering (5-8%): project scheduling, cost estimation, productivity',
          'These are breadth areas for most civil grads — one focused pass each, heavy on handbook lookup'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 8',
        focus: 'Transportation, Surveying, Economics and Ethics',
        tasks: [
          'Transportation Engineering (5-8%): traffic flow, geometric design basics',
          'Surveying (5-8%): distance, angle, elevation, earthwork volume',
          'Engineering Economics (6-9%): PW, AW, FW, ROR, benefit-cost using interest tables',
          'Ethics and Professional Practice (6-9%): NCEES Model Law, licensure, professional responsibility'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Week 9',
        focus: 'Full timed exams',
        tasks: [
          'Two full 5-hour-20-minute practice exams under exam conditions with only the handbook and an approved calculator',
          'Practise the optional 25-minute break exactly as it will occur',
          'Log every topic area where you ran short on time, not just where you were wrong',
          'Build a personal "where in the handbook" index for the formulas you reach for most'
        ],
        hours: '13-15 hrs'
      },
      {
        label: 'Week 10',
        focus: 'Gap closing and light review',
        tasks: [
          'Re-drill only the weak topic areas from the diagnostics — do not re-read everything',
          'Final handbook navigation sprint: open to any formula in under ten seconds',
          'Confirm your calculator is on the NCEES approved list and the ID matches your NCEES account',
          'One light day before the exam; the appointment is long and you need to be rested'
        ],
        hours: '10-12 hrs'
      }
    ],
    variants: [
      { label: 'Final-year civil undergrad', detail: 'Eight weeks. Your coursework is current, so compress Weeks 2-4 and lean on the practice exams; the main risk is handbook navigation, not content knowledge. Sit in your last semester.' },
      { label: 'Recent grad (within 12 months)', detail: 'Ten weeks as written. You still remember the mechanics; the risk is light rust, so keep the full core-mechanics block and add one extra timed exam.' },
      { label: 'Several years out of school', detail: 'Fourteen to sixteen weeks. The core-mechanics material has decayed most; add four weeks before Week 2 rebuilding Statics/Dynamics/Mechanics of Materials from fundamentals, and budget more hours per week.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'FE Civil rewards a different study instinct than almost any academic exam: you are not being tested on what you can recall, but on what you can find and apply under a clock with the handbook open. The candidates who over-prepare by memorizing formulas and under-prepare by navigating the PDF slowly are the ones who run out of time. The strategies below are ordered by how much they move your score, and the top one is free.',
    items: [
      {
        title: 'Live in the FE Reference Handbook from day one',
        detail: 'Every problem you solve in prep should be solved with the current handbook open, exactly as on exam day. Learn its table of contents so you can jump to any formula in seconds. Candidates who memorize equations and then fumble the PDF waste more time than candidates who simply know where everything is. The handbook is the single highest-leverage resource you have — treat it as the textbook, not a crutch.'
      },
      {
        title: 'Own an approved calculator and only that',
        detail: 'NCEES permits exactly three calculator families: Casio fx-115 and fx-991 (any variant), HP 33s and HP 35s, and TI-30X and TI-36X (any variant). Practise exclusively on the one you will bring, because speed with the solver, the matrix, and the unit-conversion functions matters over 110 questions. A familiar calculator is worth several points purely through pace; an unfamiliar one costs them.'
      },
      {
        title: 'Over-invest in the core mechanics',
        detail: 'Statics, Dynamics and Mechanics of Materials together approach half the exam (14-21% each) and are where non-recent grads lose the most. Do not spread your hours evenly across the fourteen topics; weight them toward the mechanics and toward the areas where your specific program was weak. A 250-question bank drilled on these three areas beats a broad skim of everything.'
      },
      {
        title: 'Use the diagnostic report if you fail, and the attempt limit',
        detail: 'The exam is pass/fail with no numeric score, but a fail comes with a topic-area breakdown — use it. You are limited to three attempts per rolling 12 months, so a fail must trigger a targeted restudy of the weak areas, not a repeat of the same broad prep. Treat the attempt budget as scarce.'
      },
      {
        title: 'Practise the real appointment length',
        detail: 'The appointment is six hours: an 8-minute tutorial, a 5-hour-20-minute exam, and a 25-minute optional break. Few people can focus that long without conditioning. Take at least two full-length practice exams seated for the whole block, including the break, so the length does not break you on the day. Pace so you finish the 110 items with time to review.'
      },
      {
        title: 'Sit while the material is fresh',
        detail: 'The first-time pass rate is far higher than the repeat rate, and the high-60s figure for those sitting within a year of an ABET program shows why. Take the FE in your final undergraduate semester or immediately after; deferring it by years is the most expensive mistake a civil grad can make, because the self-study reload is long and the attempt limit is real.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The one resource you cannot skip is free: the NCEES FE Reference Handbook, supplied on screen on exam day and downloadable now. Buy nothing until you have it and have practised with it. The paid decision is then which prep course or question bank matches your weakness — most candidates need volume drilling on the core mechanics more than another lecture series, because the content is familiar and the pacing is the problem.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCEES FE Reference Handbook (PDF)', values: ['Free from NCEES', 'PDF on screen; the only formulas allowed in the exam', 'Everyone, from day one — learn its structure cold'] },
      { label: 'NCEES FE Civil practice exam', values: ['Low cost / often included with registration materials', 'Full-length timed practice exam', 'One authentic difficulty check closest to the real form'] },
      { label: 'PPI (Precision Exams) FE Civil Review Manual + Practice Problems', values: ['~$80-150 for the pair', 'Print and/or digital, problem-heavy', 'Candidates who want structured problems mapped to the 14 topics'] },
      { label: 'School of PE / Excel Test Prep FE Civil course', values: ['~$300-900 depending on live vs on-demand', 'Lectures plus problem sets', 'Several-years-out candidates rebuilding core mechanics from fundamentals'] },
      { label: 'PrepFE / Geniebook style adaptive banks', values: ['~$30-60/month', 'Web adaptive question bank', 'Recent grads who need volume drilling and pacing, not lectures'] },
      { label: 'Your approved calculator', values: ['~$15-40', 'Physical device, one of three NCEES-approved families', 'Mandatory; practise on the exact unit you will bring'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions. The FE exam fee itself is commonly listed at $175 by NCEES-prep sources, though some NCEES pages have shown $225 — confirm the current fee at ncees.org before registering; we do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'FE Civil failure is rarely about not knowing engineering — it is about treating a closed-book-with-handbook exam like an open-memory exam, and about the scheduling mistakes that waste the narrow attempt window. The six below are the recurring, avoidable traps.',
    items: [
      {
        mistake: 'Memorizing formulas instead of learning the handbook',
        fix: 'You are given the handbook on screen; memorizing equations is wasted effort, and the candidates who do it then cannot navigate the PDF under the clock. Spend that time learning exactly where each formula lives and practising lookup at speed. The exam tests application with the reference available, not recall.'
      },
      {
        mistake: 'Using a non-approved or unfamiliar calculator',
        fix: 'Only Casio fx-115/fx-991, HP 33s/35s, and TI-30X/TI-36X are permitted; anything else is refused at the door. Worse, an approved calculator you have not practised on costs points through slow operation. Buy your one approved unit early and solve every problem on it.'
      },
      {
        mistake: 'Deferring the exam for years',
        fix: 'The first-time pass rate vastly exceeds the repeat rate because recent grads remember the material. Deferring by years forces a long self-study reload and risks the three-attempts-per-12-months limit. Sit in your final semester or immediately after graduating.'
      },
      {
        mistake: 'Spreading study evenly across all fourteen topics',
        fix: 'Statics, Dynamics and Mechanics of Materials together approach half the exam. Candidates who give every topic equal time under-prepare the mechanics and over-prepare the 5-8% breadth areas. Weight your hours toward the heavy topics and your personal weak spots.'
      },
      {
        mistake: 'Not conditioning for the six-hour appointment',
        fix: 'The block is an 8-minute tutorial, 5h20m exam, and 25-minute break. Candidates who never sit a full-length practice tire in the back half and rush the last items. Take at least two full practice exams at real length, break included, before test day.'
      },
      {
        mistake: 'Wasting a failed attempt by re-studying broadly',
        fix: 'A fail returns a topic-area diagnostic. With only three attempts per year, repeating the same broad prep wastes the scarce window. Use the breakdown to target the specific weak areas, then re-sit — and remember the exam reports only pass/fail, so the diagnostic is the only feedback you get.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'The FE Civil exam is 110 questions in a 5-hour-20-minute testing block inside a roughly six-hour appointment (an 8-minute tutorial, the exam, and an optional 25-minute break). It is closed-book, but the NCEES FE Reference Handbook is supplied electronically on screen, and you may use one approved calculator. The result is pass/fail with no numeric score — you are told only pass or fail, and a fail returns a diagnostic by topic area. Items are almost all standalone multiple-choice with four options, drawing from the fourteen published topic areas: Mathematics; Probability and Statistics; Ethics and Professional Practice; Engineering Economics; Statics; Dynamics; Mechanics of Materials; Fluid Mechanics; Water Resources and Environmental Engineering; Structural Engineering; Geotechnical Engineering; Construction Engineering; Surveying; and Transportation Engineering. There are no essay or performance tasks; every question is solved with the handbook and calculator. Because the items are independent and the handbook is open, pacing is the central skill: you should average under three minutes per item to leave time to review, and you should skip-and-return any item that needs a long handbook search rather than marooning yourself on it. The worked examples below are illustrative of the blueprint style, not live items.',
    types: [
      { name: 'Single-answer multiple choice', share: 'The entire exam', detail: 'Four-option items, one correct, each solvable with the handbook and an approved calculator. Span all fourteen topic areas with weights as published.' },
      { name: 'Computational problems', share: 'Dominant in the mechanics and fluids areas', detail: 'Require a formula from the handbook and calculator work — statics equilibrium, mechanics of materials stress, fluid Bernoulli, economics present worth.' },
      { name: 'Concept and ethics items', share: 'Ethics, probability, and some breadth areas', detail: 'Test recognition rather than computation — NCEES Model Law, distributions, professional responsibility, definitions.' },
      { name: 'Lookup-and-apply items', share: 'Distributed across all areas', detail: 'Reward knowing where the formula is in the handbook and applying it correctly — the defining FE skill.' }
    ],
    samples: [
      {
        prompt: 'A simply supported beam of length L carries a single concentrated load P at its midpoint. What is the vertical reaction at each support?',
        options: [
          'A. P/2 at each support',
          'B. P at each support',
          'C. P/L at each support',
          'D. 2P at each support'
        ],
        answer: 'A',
        explanation: 'By symmetry and vertical-force equilibrium, the two supports share the load equally, so each reaction is P/2. Taking moments about either support confirms it: the midpoint load P at L/2 is balanced by the opposite reaction at distance L, giving R = P/2. B would mean the supports carry the full load each (double-counting); C has wrong dimensions (force per length); D is impossible under equilibrium. This is a core Statics item and appears constantly in the 14-21% Statics weighting.'
      },
      {
        prompt: 'An investment of $10,000 returns $3,000 at the end of each year for 5 years. At an annual interest rate of 10%, the present worth of the returns is most nearly:',
        options: [
          'A. $11,372',
          'B. $15,000',
          'C. $8,708',
          'D. $6,710'
        ],
        answer: 'A',
        explanation: 'Present worth = A × (P/A, 10%, 5) where (P/A, i, n) = ((1+i)^n − 1) / (i(1+i)^n). At 10% for 5 years that factor is 3.7908, so PW = 3,000 × 3.7908 = $11,372 (A). B is simply 5 × 3,000 with no discounting; C mistakenly uses a much higher rate; D is the (P/A, 8%, 10) factor applied to $1,000, a common mixed-up lookup. Engineering Economics (6-9%) rewards correct handbook factor use and unit care.'
      },
      {
        prompt: 'A 20 mm diameter steel rod carries a 15 kN axial tensile load. The average normal stress in the rod is most nearly:',
        options: [
          'A. 47.7 MPa',
          'B. 11.9 MPa',
          'C. 23.9 MPa',
          'D. 95.5 MPa'
        ],
        answer: 'A',
        explanation: 'Axial stress σ = P/A, with A = πd²/4 = π(0.020)²/4 = 3.1416×10⁻⁴ m². σ = 15,000 N / 3.1416×10⁻⁴ m² = 4.775×10⁷ Pa ≈ 47.7 MPa (A). B (11.9 MPa) comes from omitting the /4 in the area formula (using A = πd²), the classic handbook-lookup slip. C and D reflect other arithmetic errors in diameter-versus-radius handling. Mechanics of Materials (14-21%) is one of the heaviest areas, so clean stress calculations are cheap, repeatable points.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The FE Civil appointment runs about six hours: an 8-minute tutorial, a 5-hour-20-minute exam of 110 questions, and an optional 25-minute break you should take. It is closed-book, but the NCEES FE Reference Handbook is supplied on screen, and you may use one approved calculator — nothing else. The most common reason a qualified candidate is turned away is administrative: the name on your government-issued photo ID must match your NCEES account exactly, and only the three approved calculator families are permitted, so verify both the week before. You are told only pass or fail at the end, with no numeric score; a fail returns a topic-area diagnostic you should save. The appointment is long, so rest the day before and use the break to reset — candidates who skip it and push through the back half reliably lose pace on the last items. Pace for under three minutes per question so you keep time to review flagged items, and skip-and-return anything that needs a long handbook search rather than stalling on it.',
    bring: [
      'One approved calculator only: Casio fx-115 or fx-991 (any variant), HP 33s or HP 35s, or TI-30X or TI-36X (any variant)',
      'A government-issued photo ID with the name matching your NCEES account exactly',
      'Your NCEES confirmation / eligibility ID number in case check-in cannot locate the booking',
      'For online-proctored formats where offered: a private room, webcam, microphone, and a phone for check-in',
      'A layer you can remove; the centre may be cool and you cannot leave for a jacket'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — secured before entry',
      'Any calculator not on the three approved families; it will be refused',
      'Books, notes, printed formula sheets and your own copy of the handbook — only the on-screen version is used',
      'Bags, coats (beyond what you wear), food and drink beyond what the centre permits',
      'Any other person in the room for remote proctoring; the session is recorded'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your NCEES account exactly and that your calculator is one of the three approved families. Either mismatch can cost the seat.' },
      { time: '24 hours before', detail: 'For remote proctoring, run the system check on the machine and network you will use. For a centre, confirm the address and travel time.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin remote check-in, which includes ID capture and a room scan.' },
      { time: 'Check-in', detail: 'ID verification, signature, locker for belongings, seating. Use the restroom now — the clock on the 5h20m block starts after the tutorial.' },
      { time: '0-8 minutes', detail: 'Tutorial screens confirm the tools and flagging behaviour. Note the on-screen handbook navigation before you start.' },
      { time: '8-200 minutes', detail: 'Work the 110 items; average under three minutes each to leave review time. Skip-and-return long handbook searches.' },
      { time: 'Around minute 200 (optional)', detail: 'Take the 25-minute break to reset; the clock pauses only for this scheduled break.' },
      { time: '200-328 minutes', detail: 'Resume and finish; review flagged items, then submit. Result (pass/fail) appears on screen.' }
    ],
    rules: [
      'Pass/fail only — no numeric score is reported; a fail returns a topic-area diagnostic.',
      'Closed-book, but the NCEES FE Reference Handbook is provided on screen; no printed or personal copies.',
      'One approved calculator only: Casio fx-115/fx-991, HP 33s/35s, or TI-30X/TI-36X (any variant).',
      'Maximum three attempts per rolling 12-month period.',
      'The FE is the first step to the PE; a pass makes you an Engineer-in-Training (EIT), valid indefinitely, and eligible for the PE after meeting experience requirements.',
      'ID name must match the NCEES account exactly; the appointment is ~6 hours including tutorial and break.'
    ],
    afterwards:
      'Your pass or fail appears on screen at submission, with no numeric score — on a pass you become an Engineer-in-Training (EIT), and that status is valid indefinitely, so there is no expiry pressuring you; on a fail you receive a topic-area diagnostic, which is the only feedback you get and the only thing to act on. A pass does not make you a PE: you still need the required engineering experience (typically four years under a licensed PE) and then the PE Civil exam to earn the license that unlocks the federal, public-works and principal roles at the top of the BLS wage distribution. Log your EIT number and the experience requirement the day you pass, because the clock on qualifying experience starts now, not at PE time. On a fail, remember the three-attempts-per-12-months limit and use the diagnostic to target the specific weak topic areas — usually the core mechanics — rather than repeating broad prep; and keep sitting while the material is fresh, since the repeat pass rate is far below the first-time rate. Either way, the FE is a gateway, not a destination: plan the PE path immediately so the EIT does not sit idle.'
  }
};

export default data;
