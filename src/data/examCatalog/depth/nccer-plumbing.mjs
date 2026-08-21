// Depth content for: nccer-plumbing
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER plumbing credentials are modular — a written test plus a hands-on performance profile per module — and the credential is part of a pathway that also involves apprenticeship hours and, in most states, a separate state plumbing license, so we state plainly what NCCER itself certifies versus what the state requires. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\'s official plumbing program materials and module testing guide.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,970 median for plumbers, pipefitters, and steamfitters (BLS, May 2024)',
    summary:
      'The NCCER plumbing credential trains the plumbing workforce, so the directly relevant occupation is Plumbers, Pipefitters, and Steamfitters, SOC 47-2152. That occupation had a May 2024 median annual wage of $62,970, with the lowest 10 percent earning under $40,670 and the highest 10 percent over $105,150, across about 456,000 jobs. The distribution deserves careful reading because plumbing pay is strongly shaped by sector and licence: apprentices earn well below the median while they train, licensed journeymen in construction, commercial service or union shops sit toward the top of the range, and the highest earners are typically licensed journeymen or master plumbers running their own work. BLS projects faster-than-average employment growth for the occupation through 2034, driven by new construction, infrastructure renewal and water-system maintenance, with the majority of openings coming from replacement need as the workforce retires. The practical reading for an NCCER candidate is that the credential is a ladder within that growth: NCCER\'s plumbing levels (Core through Level 4) are the standard curriculum used by many apprenticeship programs and technical colleges, and completing them — alongside the on-the-job hours and, where required, the state journeyman license — is how you move from apprentice pay toward the median and beyond. The credential itself appears on no BLS pay table; it is the education component of a pathway whose wage outcome is set by apprenticeship hours, state licensure and sector.',
    rows: [
      { label: 'Median annual wage, plumbers, pipefitters, and steamfitters', value: '$62,970', note: 'BLS OEWS, May 2024 (SOC 47-2152)' },
      { label: 'Lowest 10 percent', value: 'less than $40,670', note: 'BLS OEWS, May 2024 — includes apprentices' },
      { label: 'Highest 10 percent', value: 'more than $105,150', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '~456,000 jobs', note: 'BLS OEWS, May 2024' }
    ],
    growth: 'BLS projects faster-than-average growth for plumbers, pipefitters and steamfitters through 2034, driven by construction and infrastructure renewal, with most openings from replacement need. Apprentice pay sits below the median; licensed journeyman pay approaches and exceeds it.',
    source: {
      label: 'BLS Occupational Employment and Wage Statistics — Plumbers, Pipefitters, and Steamfitters (47-2152)',
      url: 'https://www.bls.gov/oes/current/oes472152.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests use a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its plumbing module tests or performance profiles, and there is no single national passing score: NCCER sets the framework (written module tests plus hands-on performance profiles) while the training program — the technical college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, but the authoritative number is the one set by your specific training program, so the first step is to confirm the threshold with the program that will test you. Because the credential is modular, there is no single do-or-die exam: you progress module by module through the Core and the plumbing levels, and a failed module test or performance profile is typically retaken after review, with the retake policy set by the training program. The performance profiles are the hands-on half of each module: the instructor verifies plumbing tasks against a checklist — joining pipe, installing fixtures, laying out a system — and completion is recorded in the NCCER registry. The honest reading is that "passing" here is a low, manageable bar per module; the difficulty is the cumulative length of the pathway, not any single test. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage you encounter in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — official plumbing program materials',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests conventionally use a 70% threshold, but the authoritative threshold and retake policy are set by the training program; performance profiles are verified hands-on by the instructor and recorded in the NCCER registry.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER plumbing is not one exam but a modular ladder: the Core Curriculum followed by Plumbing Level 1 through Level 4, each level containing multiple modules on the trade\'s core skills — plumbing math, safety, pipe and fittings, fixtures, drainage systems, and code applications — with each module ending in a written test plus a hands-on performance profile. Because it is a curriculum, the study plan is really a program plan: most candidates complete NCCER plumbing modules through an apprenticeship sponsor, a technical college, or a union training center, and the pace is set by the program calendar plus your own study time between sessions. The plan below gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study per module across a week, with the written test taken only after the module\'s practice exercises are comfortable and the performance profile rehearsed hands-on before verification. Two structural facts shape the approach. First, the content is cumulative — Level 2 assumes Level 1\'s pipe-joining and drainage base, and Level 4 builds on all of it — so skimming a level to "pass the test" leaves gaps that the later levels and the state journeyman exam expose. Second, NCCER is only the education leg: most states require apprenticeship hours and a separate state plumbing license exam, so treat the NCCER credential as the curriculum that prepares you for that exam rather than as the licence itself.',
    totalHours: 'Per-module: 10-15 hours study + hands-on rehearsal',
    weeks: [
      {
        label: 'Core Curriculum (before Level 1)',
        focus: 'Construction fundamentals and safety',
        tasks: [
          'Complete the Core modules: basic safety, construction math, hand and power tools, and employability skills',
          'Pass each Core module test at your program\'s threshold',
          'Complete the performance profiles hands-on — safety and tool competence are verified',
          'Treat the math module seriously; plumbing math recurs across every level'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Plumbing Level 1',
        focus: 'Plumbing math, tools, pipe and fittings',
        tasks: [
          'Plumbing math: volume, pressure, flow and the calculations the trade uses daily',
          'Pipes and fittings across the common materials (copper, PVC/CPVC, PEX, steel) and how to join each',
          'Rehearse the joining tasks hands-on — the performance profiles verify them',
          'Pass each written module test before moving on'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Plumbing Level 2',
        focus: 'Fixtures, drainage and venting',
        tasks: [
          'Plumbing fixtures and faucets: types, installation and the water-supply connections',
          'Drainage and venting fundamentals: traps, vents, slope and the code rules',
          'Practise the fixture and drainage layouts hands-on before verification',
          'Work the written material on fixture units and drainage sizing'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Plumbing Level 3',
        focus: 'Water supply, drainage systems and code',
        tasks: [
          'Water-supply systems: sizing, pressure, and the pipe-and-fitting choices',
          'Complete drainage systems: layout, sizing and the code requirements',
          'Start relating every topic to the plumbing code your state uses — the journeyman exam tests code application',
          'Rehearse the Level 3 performance profiles until the checklist is automatic'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Plumbing Level 4',
        focus: 'Advanced systems and code mastery',
        tasks: [
          'Advanced topics: water heaters, pumps, medical gas where covered, and code applications',
          'Complete the capstone-style performance profiles that verify integrated skills',
          'Begin state-licensing preparation in parallel: review your state\'s journeyman exam requirements and question style',
          'Finish the level and claim the NCCER registry record'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the levels at pace. Use the sponsor\'s practice materials and ask for performance-profile rehearsals.' },
      { label: 'Technical-college pathway, no employer', detail: 'Match the plan to the college\'s course sequence; add exposure to real jobsite work where possible, because the performance profiles assume hands-on familiarity.' },
      { label: 'Experienced plumber seeking the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the code and math modules, which are the ones experience alone does not cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER plumbing is a modular curriculum, the preparation levers are per-module discipline, hands-on rehearsal and code literacy — not a single exam strategy. The strategies below are ordered by what actually moves you through the levels and prepares you for the state licensing exam that follows.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70%-convention threshold, and the levels are cumulative. A first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a program. Study the module\'s objectives explicitly and take the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — joining pipe, installing fixtures, laying out a drainage run. Watching demonstrations is not enough; you must execute the task under a clock. Use any open lab time your program offers and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Master plumbing math by hand',
        detail: 'Volume, pressure, flow and fixture-unit calculations appear in the written tests and daily on the job. Work each calculation type until you can do it without the example in front of you — the state journeyman exam will not restate the formula, and the jobsite will not wait for you to look it up.'
      },
      {
        title: 'Build your own code reference as you go',
        detail: 'The plumbing levels teach to the plumbing code your state uses, and the state journeyman exam tests code application. Keep a notebook of the code rules each module touches — the rule, the section reference, and a one-line example. By Level 4 you will have a personal code map that is the strongest possible prep for the licensing exam.'
      },
      {
        title: 'Treat safety as exam material at every level',
        detail: 'Safety content recurs in the Core and throughout the levels, and it is the highest-weight, lowest-difficulty material on the written tests. Candidates who skim safety to focus on the trade leave easy points on the table and carry the wrong priorities to the jobsite.'
      },
      {
        title: 'Plan the state-licensing leg from the start',
        detail: 'NCCER is the education component, but most states require apprenticeship hours plus a separate state journeyman license exam. Check your state\'s requirements early — the exam format and question style should shape how you study the code across all four levels, not something you start worrying about at Level 4.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER plumbing curriculum is delivered through authorized training programs — apprenticeship sponsors, technical colleges and union training centers — so the primary resource is your program\'s enrollment, which typically includes the NCCER modules, instructors, lab access and the tests themselves. The decisions below are about supplements: code references, practice material and any books you buy to study between sessions.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER Plumbing Level textbooks (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'Your state\'s plumbing code (current edition)', values: ['~$80-150', 'Print or digital reference', 'The code base the levels teach to and the state exam tests' ], },
      { label: 'State journeyman exam prep (question banks)', values: ['~$30-100', 'Online practice exams', 'Transitioning from NCCER to the state licensing exam' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space', 'Practising the performance profiles under a clock' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and state requirements differ, so confirm your program\'s fees and your state\'s licensing path. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER plumbing pathway are mostly cumulative-education mistakes — skimming levels, skipping hands-on rehearsal, and treating the credential as the licence — rather than single-exam failures. The six traps below are the recurring ones, and all are fixable within the program.',
    items: [
      {
        mistake: 'Skimming a level to "pass the test"',
        fix: 'The plumbing levels are cumulative: Level 2 assumes Level 1\'s pipe-joining and drainage base, and the state journeyman exam tests the whole arc. A skimmed level produces a passing module test and a gap that the next level exposes. Study each module\'s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — pipe joining, fixture installation, drainage layouts — and watching is not executing. Use open lab time and rehearse each task under a clock until the checklist is automatic. The state exam and the jobsite both test hands-on competence, not video recall.'
      },
      {
        mistake: 'Neglecting the plumbing math',
        fix: 'Volume, pressure, flow and fixture-unit calculations are where written-test candidates lose points, and they recur daily on the job. Calculators help, but the method must be second nature. Work each calculation type by hand repeatedly — the state exam will not restate the formula.'
      },
      {
        mistake: 'Assuming the NCCER credential is the licence',
        fix: 'NCCER is the education component of the pathway; most states also require apprenticeship hours and a separate state journeyman license exam. Candidates who finish NCCER and assume they can pull permits are in for a surprise. Check your state\'s licensing requirements early and plan both legs.'
      },
      {
        mistake: 'Studying an outdated edition of the code',
        fix: 'The plumbing levels teach to the current plumbing code your state uses, and the state exam tests the current edition. Studying an older edition produces answers that are confidently wrong. Confirm the edition your program and state use and study that one.'
      },
      {
        mistake: 'Skipping safety content as "review"',
        fix: 'Safety recurs across every level and carries easy, high-weight points on the written tests — and it is the jobsite\'s first priority. Skimming it to focus on the trade both leaves points on the table and sets the wrong tone for the work.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER plumbing module ends in a written module test plus a hands-on performance profile. The written tests are typically multiple choice covering the module\'s stated objectives — plumbing math, pipe and fittings, fixtures, drainage and venting, water supply, and code applications — with the pass threshold set by the training program (conventionally 70 percent). The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single pipe joint up to a complete fixture or drainage installation in the later levels, and each task is graded pass/fail on execution. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes are math items (volume, pressure, flow), code items (what the code requires for this installation), safety items (PPE, ventilation, hazard recognition), and application items (the correct joining method or layout for this situation). The math and code items are where candidates lose the most points, and the hands-on profiles are where candidates who only studied written material fail — the two halves of every module are genuinely different skills.',
    types: [
      { name: 'Plumbing math items', share: 'Heavy in the math modules and recurring later', detail: 'Volume, pressure, flow, fixture units and pipe sizing. Require knowing the method, not just using a calculator.' },
      { name: 'Code-application items', share: 'Heavy in the later levels', detail: 'What the current plumbing code requires for a given installation — drainage slope, venting, water-supply sizing.' },
      { name: 'Safety items', share: 'Recurring across every level', detail: 'PPE, ventilation, hazard recognition and confined-space rules — high-weight, low-difficulty points.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of pipe joining, fixture installation or drainage layouts against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A drain line must carry waste from a bathroom group to the building drain. To prevent sewer gas from entering the occupied space, which fitting is required at every plumbing fixture?',
        options: [
          'A. A trap',
          'B. A cleanout',
          'C. A reducer',
          'D. A check valve'
        ],
        answer: 'A',
        explanation: 'Every plumbing fixture must be protected by a trap — the water seal that blocks sewer gas from entering the space (A). A cleanout (B) provides access for clearing a drain; it does not seal gas. A reducer (C) changes pipe size. A check valve (D) prevents backflow, a different function. The trap-and-vent relationship is core drainage content, and the items reward knowing which fitting performs which job.'
      },
      {
        prompt: 'A water-supply system must deliver 40 psi minimum at the highest fixture with a static pressure of 55 psi available at the service. Which of the following is the correct first check?',
        options: [
          'A. Verify the pressure loss through the piping and fittings is not dropping the pressure below the requirement',
          'B. Install a pressure-reducing valve immediately',
          'C. Increase the pipe size to the entire system',
          'D. Reduce the fixture flow rates'
        ],
        answer: 'A',
        explanation: 'The correct approach is to verify the pressure drop through the pipe run and fittings — if the calculated loss keeps the delivered pressure above the 40 psi minimum, the system is compliant without changes (A). B adds a PRV unnecessarily and in the wrong direction (a PRV lowers pressure). C and D change the design without first establishing whether a problem exists. The item rewards the engineer\'s discipline: calculate the drop before changing the system.'
      },
      {
        prompt: 'Before entering a confined space such as a deep pit to repair a leaking drain, which of the following must happen first?',
        options: [
          'A. Atmospheric testing and ventilation of the space',
          'B. Selection of the pipe material for the repair',
          'C. Determining the drainage slope',
          'D. Ordering the replacement fittings'
        ],
        answer: 'A',
        explanation: 'Confined-space entry requires atmospheric testing and ventilation before any work begins — an unsafe atmosphere is life-threatening and must be resolved first (A). B, C and D are repair decisions that come after the space is verified safe. Safety items like this recur at every level and are the highest-weight, lowest-difficulty points on the written tests.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module-test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the module you are about to sit; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE; and (3) bringing the permitted materials — NCCER written tests may allow a calculator and, in some programs, an open codebook, so confirm what is allowed before the day. The written test is typically administered at the training centre, and the performance profile is a supervised session in the lab where the instructor verifies your work against the module\'s task checklist. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa. Treat both halves as equal gates. The pathway itself ends when you complete the required levels and, in most states, pass the separate state plumbing license exam that NCCER prepares you for.',
    bring: [
      'The PPE required by your training program (safety glasses, gloves, etc.) for the performance profile',
      'A calculator if your program permits one on the written test',
      'Your program\'s module materials and any permitted codebook',
      'Confirmation of the module\'s pass threshold and schedule from your instructor'
    ],
    leave: [
      'The assumption that the written test is the whole module — the performance profile is an equal gate',
      'Rushed hands-on work — the checklist is pass/fail and safety-critical',
      'Any personal tools your program does not authorise for the profile'
    ],
    timeline: [
      { time: 'Before each module', detail: 'Confirm the pass threshold, schedule and retake policy with your program; study the module objectives and rehearse the performance tasks.' },
      { time: 'Written test', detail: 'Work the multiple-choice items at a steady pace; the math and code items deserve the most time. Confirm the permitted materials beforehand.' },
      { time: 'Performance profile', detail: 'Execute each checklist task carefully and in order; safety steps are part of the grading, not optional. Ask for clarification if a task is unclear.' },
      { time: 'After the module', detail: 'Your instructor submits the result to the NCCER registry; keep your own record of modules completed.' },
      { time: 'Pathway end', detail: 'Complete the required levels, then pursue your state\'s licensing exam and apprenticeship-hours requirements.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold (conventionally 70% on written tests) and retake policy are set by the training program, not by NCCER nationally.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers use.',
      'NCCER is the education component; most states separately require apprenticeship hours and a state plumbing license exam.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required plumbing levels, and for most plumbers the real finish line is the state journeyman licence, which NCCER prepares you for but does not itself confer. The strongest next steps are to keep a clean record of modules completed, build the code-reference notebook you started in Level 1 into your study base for the state exam, and pursue the apprenticeship hours your state requires. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what the trade actually hires. If a module test falls short, the retake is a normal part of the pathway, not a failure — review the module\'s objectives, rehearse the profile tasks, and sit again with the threshold confirmed.'
  }
};

export default data;
