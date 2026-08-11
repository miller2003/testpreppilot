// Depth content for: nccer-electrician
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER credentials are modular — a written test plus a hands-on performance profile per module — and the credential is part of a broader pathway that also involves apprenticeship hours and, in most states, a separate state licensing exam, so we state plainly what NCCER itself certifies versus what the state requires. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\'s official program materials and the NCCER module testing guide.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$62,350 median for electricians (BLS, May 2024)',
    summary:
      'The NCCER Electrician credential is the training-program backbone for the electrician workforce, so the directly relevant occupation is Electricians, SOC 47-2111. That occupation had a May 2024 median annual wage of $62,350, with the lowest 10 percent earning under $39,430 and the highest 10 percent over $106,030. The distribution deserves careful reading because electrician pay is strongly shaped by apprenticeship stage, licensing and sector: apprentices earn well below the median while they train — BLS notes apprentice pay is less than fully trained electricians\' and rises with skill — and licensed journeymen working in government, manufacturing or union sectors sit toward the top of the range. BLS counted 818,700 electricians in 2024 and projects 9 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 81,000 openings a year driven by construction, electrification and the growth of solar and wind installation. The practical reading for an NCCER candidate is that the credential is a ladder within that growth: NCCER\'s modular electrical levels (Core through Level 4) are the standard curriculum used by many apprenticeship programs and community colleges, and completing them — alongside the on-the-job hours and, where required, the state journeyman exam — is how you move from apprentice pay toward the median and beyond. The credential itself appears on no BLS pay table; it is the education component of a pathway whose wage outcome is set by apprenticeship hours, state licensure and sector.',
    rows: [
      { label: 'Median annual wage, electricians', value: '$62,350', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $39,430', note: 'BLS OOH Pay tab, May 2024 — includes apprentices' },
      { label: 'Highest 10 percent', value: 'more than $106,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '818,700 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~81,000 per year', note: 'BLS OOH Job Outlook, 2024-34 — 9% growth, faster than average' }
    ],
    growth: '+9% projected change 2024-34 (much faster than average), ~81,000 openings a year. Apprentice pay sits below the median; licensed journeyman pay approaches and exceeds it.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Electricians',
      url: 'https://www.bls.gov/ooh/construction-and-extraction/electricians.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests are set to a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its module tests, and there is no single national passing score: NCCER sets the framework (written module tests plus hands-on performance profiles) while the training program — the community college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, but the authoritative number is the one set by your specific training program, so the first step is to confirm the threshold with the program that will test you. Because the credential is modular, there is no single do-or-die exam: you progress module by module, and a failed module test is typically retaken after review, with the retake policy set by the training program rather than by NCCER nationally. The performance profiles are the second half of each module: the instructor verifies hands-on tasks against a checklist, and completion is recorded in the NCCER registry. The honest reading is that "passing" here is a low, manageable bar per module — the difficulty is the cumulative length of the pathway, not any single test. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage you see quoted in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — official program materials',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests conventionally use a 70% threshold, but the authoritative threshold and retake policy are set by the training program administering the tests; performance profiles are verified hands-on by the instructor and recorded in the NCCER registry.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER\'s electrical credential is not one exam but a ladder: the Core Curriculum (the construction fundamentals every NCCER trainee takes) followed by Electrical Level 1 through Level 4, each level containing multiple modules, each module ending in a written test plus a hands-on performance profile. Because it is a curriculum, the study plan is really a program plan — most candidates complete NCCER modules through an apprenticeship sponsor, a community college, or a union training center, and the pace is set by the program calendar plus your own study time between sessions. The plan below assumes you are working through the electrical levels and gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study per module across a week, with the written test taken only after the module\'s practice exercises are comfortable, and the performance profile rehearsed hands-on before the verification. Two structural facts shape the approach. First, the electrical content is cumulative — Level 2 assumes Level 1\'s code and safety base, and Level 4 builds on all of it — so skimming a level to "pass the test" leaves gaps that the later levels and the state journeyman exam expose. Second, NCCER is only the education leg: most states require apprenticeship hours and a separate state licensing exam (often the PSI or similar state journeyman test), so treat the NCCER credential as the curriculum that prepares you for that exam rather than as the licence itself.',
    totalHours: 'Per-module: 10-15 hours study + hands-on rehearsal',
    weeks: [
      {
        label: 'Core Curriculum (before Level 1)',
        focus: 'Construction fundamentals',
        tasks: [
          'Complete the Core modules: basic safety, introduction to construction math, hand and power tools, rigging, communication and employability skills',
          'Pass each Core module test at your program\'s threshold',
          'Complete the performance profiles hands-on; these verify safety and tool competence',
          'Treat safety content as exam material, not review — it recurs across every level'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Electrical Level 1',
        focus: 'Orientation, safety, tools, basic theory and wiring',
        tasks: [
          'Electrical safety, hand bending, fasteners, electrical theory, and basic wiring practices',
          'Study the module\'s code references against the current NEC, not an older edition',
          'Practise the bends and wiring tasks hands-on before the performance profile',
          'Pass each written module test before moving on — Level 2 assumes this base'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Electrical Level 2',
        focus: 'Alternating current, motors and conduit',
        tasks: [
          'AC theory, motors, motor controls, and conduit bending and installation',
          'Rehearse the conduit and motor-lab tasks hands-on — the performance profiles are pass/fail checklists',
          'Do the math for bending and voltage drop by hand; the written tests require it',
          'Keep a code-reference notebook you build yourself across the levels'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Electrical Level 3',
        focus: 'Load calculations, services and panels',
        tasks: [
          'Load calculations, service entrances, panelboards, and grounding and bonding',
          'Work the calculation problems repeatedly — they are the hard part of the written tests',
          'Practise service and panel wiring hands-on before verification',
          'Relate every topic to the NEC articles you will need for the state journeyman exam'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Electrical Level 4',
        focus: 'Advanced topics and code mastery',
        tasks: [
          'Advanced controls, HVAC controls, lighting systems, and code applications',
          'Complete the capstone-style performance profiles that verify integrated skills',
          'Begin state-licensing preparation in parallel: review your state\'s journeyman exam requirements and question style',
          'Finish the level and claim the NCCER registry record'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the levels at pace. Use the sponsor\'s practice materials and ask for performance-profile rehearsals.' },
      { label: 'Community-college pathway, no employer', detail: 'Match the plan to the college\'s course sequence; add paid or volunteer exposure to jobsite work if possible, because the performance profiles assume hands-on familiarity.' },
      { label: 'Experienced electrician seeking the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the code and calculation modules, which are the ones experience alone does not cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER is a modular curriculum, the preparation levers are per-module discipline, hands-on rehearsal and code literacy — not a single exam strategy. The strategies below are ordered by what actually moves you through the levels and prepares you for the state licensing exam that follows.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70%-convention threshold, and the levels are cumulative. A first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a two-year program into three. Study the module\'s objectives explicitly and take the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — wiring tasks, conduit bends, service installation. Watching demonstrations is not enough; you must execute the task under a clock. Use any open lab time your program offers, and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Build your own NEC reference as you go',
        detail: 'The electrical levels teach to the National Electrical Code, and the state journeyman exam tests code application. Keep a notebook of the code articles each module touches — the rule, the article number, and a one-line example. By Level 4 you will have a personal code map that is the strongest possible prep for the licensing exam.'
      },
      {
        title: 'Do the calculations by hand, repeatedly',
        detail: 'Load calculations, conduit bending math, voltage drop and box fill are the hard parts of the written tests, and calculators are not a substitute for knowing the method. Work each calculation type until you can do it without the example in front of you; the state exam will not restate the formula.'
      },
      {
        title: 'Treat safety as exam material at every level',
        detail: 'Safety content recurs in the Core and throughout the levels, and it is the highest-weight, lowest-difficulty material on the written tests. Candidates who skim safety to focus on wiring leave easy points on the table and, more importantly, carry the wrong priorities to the jobsite.'
      },
      {
        title: 'Plan the state-licensing leg from the start',
        detail: 'NCCER is the education component, but most states require apprenticeship hours plus a separate state journeyman exam. Check your state\'s requirements early — the exam format (often PSI-delivered) and question style should shape how you study the code across all four levels, not something you start worrying about at Level 4.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER curriculum is delivered through authorized training programs — apprenticeship sponsors, community colleges and union training centers — so the primary "resource" is your program\'s enrollment, which typically includes the NCCER modules, instructors, lab access and the tests themselves. The decisions below are about supplements: code references, practice material and any books you buy to study between sessions.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER Electrical Level textbooks (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'National Electrical Code (current edition)', values: ['~$80-150', 'Print or digital reference', 'The code base the levels teach to and the state exam tests' ], },
      { label: 'State journeyman exam prep (PSI-style question banks)', values: ['~$30-100', 'Online practice exams', 'Transitioning from NCCER to the state licensing exam' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space', 'Practising the performance profiles under a clock' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and state requirements differ, so confirm your program\'s fees and your state\'s licensing path. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER electrical pathway are mostly cumulative-education mistakes — skimming levels, skipping hands-on rehearsal, and treating the credential as the licence — rather than single-exam failures. The six traps below are the recurring ones, and all are fixable within the program.',
    items: [
      {
        mistake: 'Skimming a level to "pass the test"',
        fix: 'The electrical levels are cumulative: Level 2 assumes Level 1\'s code and safety base, and the state journeyman exam tests the whole arc. A skimmed level produces a passing module test and a gap that the next level exposes. Study each module\'s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — wiring, bending, service work — and watching is not executing. Use open lab time and rehearse each task under a clock until the checklist is automatic. The state exam and the jobsite both test hands-on competence, not video recall.'
      },
      {
        mistake: 'Using an outdated edition of the NEC',
        fix: 'The electrical levels teach to the current National Electrical Code, and the state journeyman exam tests the current edition. Studying an older edition (or using old program materials) produces answers that are confidently wrong. Confirm the edition your program and state use and study that one.'
      },
      {
        mistake: 'Assuming the NCCER credential is the licence',
        fix: 'NCCER is the education component of the pathway; most states also require apprenticeship hours and a separate state journeyman exam. Candidates who finish NCCER and assume they can pull permits are in for a surprise. Check your state\'s licensing requirements early and plan both legs.'
      },
      {
        mistake: 'Neglecting the math modules',
        fix: 'Construction math, bending math, load calculations and voltage drop are where written-test candidates lose points. Calculators help, but the method must be second nature. Work each calculation type by hand repeatedly — the state exam will not restate the formula.'
      },
      {
        mistake: 'Skipping safety content as "review"',
        fix: 'Safety recurs across every level and carries easy, high-weight points on the written tests — and it is the jobsite\'s first priority. Skimming it to focus on wiring both leaves points on the table and sets the wrong tone for the trade.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER electrical module ends in a written module test plus a hands-on performance profile. The written tests are typically multiple choice covering the module\'s stated objectives — safety rules, code applications, theory, and calculation problems — with the pass threshold set by the training program (conventionally 70 percent). The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single conduit bend or wiring connection up to a complete service installation in the later levels, and each task is graded pass/fail on execution. Because the credential is modular, there is no single exam-day format to rehearse; the "question types" are the recurring content shapes across the levels — code-recall items (what does this NEC article require), calculation items (what size conduit or what load), safety items (what is the correct PPE or lockout sequence), and application items (what is the correct wiring method for this installation). The calculation and code-application items are where candidates lose the most points, and the hands-on profiles are where candidates who only studied written material fail — the two halves of every module are genuinely different skills.',
    types: [
      { name: 'Code-recall and application items', share: 'Heavy across the electrical levels', detail: 'What the current NEC requires for a given installation — grounding, box fill, conduit fill, service sizing. Tested against the current edition.' },
      { name: 'Calculation items', share: 'Present in the math-heavy modules', detail: 'Load calculations, bending math, voltage drop, box fill. Require knowing the method, not just using a calculator.' },
      { name: 'Safety items', share: 'Recurring across every level', detail: 'PPE, lockout/tagout, hazard recognition. High-weight, low-difficulty — easy points when prepared.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of wiring, bending, or installation tasks against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A technician is about to work on a panel that could be energised by more than one source. Per safe electrical work practice, which is the correct first step?',
        options: [
          'A. Verify the panel is de-energised and apply lockout/tagout to every source that can feed it',
          'B. Work quickly to minimise the time the panel is open',
          'C. Wear rubber gloves and proceed',
          'D. Ask a coworker to watch the panel while working'
        ],
        answer: 'A',
        explanation: 'Multi-source panels require lockout/tagout applied to every source that can energise them, with verification of a de-energised state before work begins (A). B and D treat speed and observation as substitutes for isolation, which is exactly the unsafe shortcut the safety modules teach against. C is inadequate — PPE supplements isolation; it does not replace it. Safety items like this recur at every level and are the highest-weight, lowest-difficulty points on the tests.'
      },
      {
        prompt: 'A circuit carries a continuous load of 16 amperes. Using the 125 percent continuous-load rule, what is the minimum conductor ampacity required?',
        options: [
          'A. 16 A',
          'B. 20 A',
          'C. 25 A',
          'D. 32 A'
        ],
        answer: 'B',
        explanation: 'Continuous loads must be sized at 125 percent: 16 A × 1.25 = 20 A (B). A uses the raw load without the multiplier, undersizing the conductor. C and D misapply the factor (25 A would be a different rule; 32 A is double). This is the shape of the calculation items — know the rule, apply it, and watch the units.'
      },
      {
        prompt: 'When installing conduit through a wall between two rooms, which fitting ensures the raceway is mechanically continuous and supports the conductors?',
        options: [
          'A. A coupling',
          'B. A connector',
          'C. A locknut and bushing',
          'D. A pull elbow'
        ],
        answer: 'A',
        explanation: 'A coupling joins two lengths of conduit to keep the raceway mechanically continuous (A). A connector (B) terminates conduit at a box or enclosure. A locknut and bushing (C) secure and protect conductors at the point of entry. A pull elbow (D) changes direction. The discriminator is which fitting joins raceway to raceway — the kind of application item that recurs across the wiring modules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module-test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the module you are about to sit; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE; and (3) bringing the permitted materials — NCCER written tests may allow a calculator and, in some programs, an open codebook, so confirm what is allowed before the day. The written test is typically paper-and-pencil or computer-delivered at the training centre, and the performance profile is a one-on-one verification with the instructor against the module\'s task checklist. After you pass a module, your record is submitted to the NCCER registry, which is the portable credential employers and other programs can verify. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa. Treat both halves as equal gates. The pathway itself ends when you complete the required levels and, in most states, pass the separate state licensing exam that NCCER prepares you for.',
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
      { time: 'Written test', detail: 'Work the multiple-choice items at a steady pace; the calculation and code items deserve the most time. Confirm the permitted materials beforehand.' },
      { time: 'Performance profile', detail: 'Execute each checklist task carefully and in order; safety steps are part of the grading, not optional. Ask for clarification if a task is unclear.' },
      { time: 'After the module', detail: 'Your instructor submits the result to the NCCER registry; keep your own record of modules completed.' },
      { time: 'Pathway end', detail: 'Complete the required levels, then pursue your state\'s licensing exam and apprenticeship-hours requirements.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold (conventionally 70% on written tests) and retake policy are set by the training program, not by NCCER nationally.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers use.',
      'NCCER is the education component; most states separately require apprenticeship hours and a state licensing exam.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required electrical levels, and for most electricians the real finish line is the state journeyman licence, which NCCER prepares you for but does not itself confer. The strongest next steps are to keep a clean record of modules completed, build the code-reference notebook you started in Level 1 into your study base for the state exam, and pursue the apprenticeship hours your state requires. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what the trade actually hires. If a module test falls short, the retake is a normal part of the pathway, not a failure — review the module\'s objectives, rehearse the profile tasks, and sit again with the threshold confirmed.'
  }
};

export default data;
