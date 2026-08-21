// Depth content for: nccer-hvac
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER HVAC credentials are modular — a written test plus a hands-on performance profile per module — and the credential is part of a pathway that also involves on-the-job experience and, in many states, separate licensing or certification requirements, so we state plainly what NCCER itself certifies versus what the state or EPA requires. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\'s official HVAC program materials and module testing guide.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$59,810 median for heating, air conditioning, and refrigeration mechanics (BLS, May 2024)',
    summary:
      'The NCCER HVAC credential trains the HVAC-R workforce, so the directly relevant occupation is Heating, Air Conditioning, and Refrigeration Mechanics and Installers, SOC 49-9021. That occupation had a May 2024 median annual wage of $59,810, with the lowest 10 percent earning under $39,130 and the highest 10 percent over $91,020, across about 397,000 jobs. The distribution deserves careful reading because HVAC pay is shaped by sector and skill: residential installers and apprentices sit toward the bottom of the range, commercial and industrial service technicians with refrigeration and controls expertise sit toward the top, and technicians who add credentials — EPA Section 608 certification for refrigerant handling, manufacturer certifications, and building-automation skills — collect the premium. BLS projects faster-than-average employment growth for the occupation through 2034, driven by new construction, the replacement of aging systems, and the growing demand for energy-efficient and heat-pump installations, with most openings coming from replacement need. The practical reading for an NCCER candidate is that the credential is a ladder within that growth: NCCER\'s HVAC levels build the fundamentals — electrical, piping, system installation and troubleshooting — that underpin the higher-paying service side of the trade, and completing the levels positions you to add the EPA and manufacturer certifications that move you up the pay range.',
    rows: [
      { label: 'Median annual wage, heating, air conditioning, and refrigeration mechanics', value: '$59,810', note: 'BLS OEWS, May 2024 (SOC 49-9021)' },
      { label: 'Lowest 10 percent', value: 'less than $39,130', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $91,020', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '~397,000 jobs', note: 'BLS OEWS, May 2024' }
    ],
    growth: 'BLS projects faster-than-average growth for HVAC-R mechanics through 2034, driven by construction, system replacement and energy-efficiency demand. EPA 608 refrigerant certification and manufacturer certifications move technicians up the pay range.',
    source: {
      label: 'BLS Occupational Employment and Wage Statistics — Heating, Air Conditioning, and Refrigeration Mechanics and Installers (49-9021)',
      url: 'https://www.bls.gov/oes/current/oes499021.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests use a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its HVAC module tests or performance profiles, and there is no single national passing score: NCCER sets the framework (written module tests plus hands-on performance profiles) while the training program — the technical college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, but the authoritative number is the one set by your specific training program, so the first step is to confirm the threshold with the program that will test you. Because the credential is modular, there is no single do-or-die exam: you progress module by module through the Core and the HVAC levels, and a failed module test or performance profile is typically retaken after review, with the retake policy set by the training program. The performance profiles are the hands-on half of each module: the instructor verifies HVAC tasks against a checklist — electrical connections, piping joints, system installation and charging — and completion is recorded in the NCCER registry. A separate, national credential runs alongside NCCER for anyone who handles refrigerants: EPA Section 608 certification, which is a federal requirement and is not part of the NCCER modules themselves. The honest reading is that "passing" here is a low, manageable bar per module; the difficulty is the cumulative length of the pathway, not any single test.',
    source: {
      label: 'NCCER — official HVAC program materials',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests conventionally use a 70% threshold, but the authoritative threshold and retake policy are set by the training program. EPA Section 608 refrigerant certification is a separate federal requirement for anyone who handles refrigerants.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER HVAC is not one exam but a modular ladder: the Core Curriculum followed by HVAC Level 1 through Level 4, each level containing modules on the trade\'s core skills — HVAC math and science, electrical fundamentals, piping practices, system installation, and troubleshooting — with each module ending in a written test plus a hands-on performance profile. Because it is a curriculum, the study plan is really a program plan: most candidates complete NCCER HVAC modules through a technical college, apprenticeship sponsor or union training center, and the pace is set by the program calendar plus your own study time between sessions. The plan below gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study per module, with the written test taken only after the module\'s practice exercises are comfortable and the performance profile rehearsed hands-on before verification. Two structural facts shape the approach. First, the content is cumulative — Level 2 assumes Level 1\'s electrical and piping base, and the later levels build the service skills that carry the highest pay — so skimming a level to "pass the test" leaves gaps that the later levels and the jobsite expose. Second, NCCER is only part of the credential stack: anyone who handles refrigerants must also hold EPA Section 608 certification (a separate federal test), and many employers value manufacturer certifications, so plan the stack alongside the NCCER levels rather than treating NCCER as the whole story.',
    totalHours: 'Per-module: 10-15 hours study + hands-on rehearsal',
    weeks: [
      {
        label: 'Core Curriculum (before Level 1)',
        focus: 'Construction fundamentals and safety',
        tasks: [
          'Complete the Core modules: basic safety, construction math, hand and power tools, and employability skills',
          'Pass each Core module test at your program\'s threshold',
          'Complete the performance profiles hands-on — safety and tool competence are verified',
          'Treat the math module seriously; HVAC math and science recur across every level'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'HVAC Level 1',
        focus: 'HVAC math, science, tools and piping',
        tasks: [
          'HVAC math and science: units of measure, heat transfer, pressure and temperature',
          'Trade tools and piping practices: copper and plastic pipe joining, fittings and supports',
          'Rehearse the joining tasks hands-on — the performance profiles verify them',
          'Pass each written module test before moving on'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'HVAC Level 2',
        focus: 'Electrical fundamentals and systems',
        tasks: [
          'Electrical fundamentals: circuits, meters, wiring diagrams, and motors',
          'Air distribution and basic system installation content the module covers',
          'Practise the electrical tasks hands-on — wiring and meter use are profile items',
          'Work the written material on reading wiring diagrams'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'HVAC Level 3',
        focus: 'Refrigeration and system installation',
        tasks: [
          'Refrigeration fundamentals: the refrigeration cycle, components, and system charging concepts',
          'System installation and the piping and electrical work it requires',
          'Rehearse the Level 3 profiles until the checklist is automatic',
          'Start EPA 608 preparation in parallel — the refrigerant-handling test is a separate federal requirement'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'HVAC Level 4',
        focus: 'Troubleshooting and service skills',
        tasks: [
          'Troubleshooting: the systematic approach to diagnosing system and electrical faults',
          'Advanced service content: controls, compressors, and the repair decisions the module teaches',
          'Complete the capstone-style performance profiles that verify integrated skills',
          'Finish the level, claim the NCCER registry record, and add the EPA 608 certification'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the levels at pace. Use the sponsor\'s practice materials and ask for performance-profile rehearsals.' },
      { label: 'Technical-college pathway, no employer', detail: 'Match the plan to the college\'s course sequence; add exposure to real equipment where possible, because the performance profiles assume hands-on familiarity.' },
      { label: 'Experienced technician seeking the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the electrical and troubleshooting modules and on the EPA 608 test, which experience does not automatically cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER HVAC is a modular curriculum with hands-on performance profiles and a federal credential stacked alongside it, the preparation levers are per-module discipline, hands-on rehearsal and the credential stack — not a single exam strategy. The strategies below are ordered by what moves you through the levels and positions you for the higher-paying service side of the trade.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70%-convention threshold, and the levels are cumulative. A first-attempt pass on every module keeps the pathway moving. Study the module\'s objectives explicitly and take the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — piping joints, electrical connections, system installation. Watching demonstrations is not enough; you must execute the task under a clock. Use any open lab time your program offers and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Build the electrical foundation deliberately',
        detail: 'Electrical fundamentals recur across the levels and are the base of troubleshooting — the highest-paying skill in the trade. Work the circuits, meters and wiring-diagram modules until reading a diagram is natural; technicians who cannot read wiring diagrams are stuck on the installation side of the pay range.'
      },
      {
        title: 'Plan the EPA 608 certification alongside',
        detail: 'Anyone who handles refrigerants must hold EPA Section 608 certification — a separate federal test, not part of the NCCER modules. Plan it alongside the levels rather than after, because the refrigerant-handling skills the later levels teach are the ones employers and the EPA both check.'
      },
      {
        title: 'Treat safety as exam material at every level',
        detail: 'Safety content recurs in the Core and throughout the levels, and it is the highest-weight, lowest-difficulty material on the written tests. In HVAC it extends to refrigerants and electrical safety, which are both life-safety and legal matters. Skimming it leaves easy points and the wrong priorities.'
      },
      {
        title: 'Stack the manufacturer certifications after the levels',
        detail: 'Employers increasingly want manufacturer certifications alongside the fundamentals credential. Ask your program which manufacturer certifications it supports and sequence them after the NCCER levels, so the stack — NCCER fundamentals, EPA 608, manufacturer certs — positions you for the commercial-service roles at the top of the pay range.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER HVAC curriculum is delivered through authorized training programs, so the primary resource is your program\'s enrollment — instructors, lab equipment, and the tests themselves. The decisions below are about supplements: the official textbooks, the EPA 608 test, and the manufacturer certifications that stack on top.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER HVAC Level textbooks (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'EPA Section 608 certification', values: ['~$100-150 including the test', 'Proctored certification exam (Type I-IV options)', 'Required federal credential for anyone handling refrigerants' ], },
      { label: 'Manufacturer certification courses (e.g., NATE, brand-specific)', values: ['~$100-500 depending on program', 'Online or classroom with exams', 'Stacking marketable credentials after the NCCER levels' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space with real equipment', 'Practising the performance profiles under a clock' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and state requirements differ, so confirm your program\'s fees and your state\'s licensing path. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER HVAC pathway are cumulative-education mistakes — skimming levels, skipping hands-on rehearsal, and treating NCCER as the whole credential stack — rather than single-exam failures. The six traps below are the recurring ones, and all are fixable within the program.',
    items: [
      {
        mistake: 'Skimming a level to "pass the test"',
        fix: 'The HVAC levels are cumulative: Level 2 assumes Level 1\'s electrical and piping base, and the troubleshooting levels build on all of it. A skimmed level produces a passing module test and a gap the next level exposes. Study each module\'s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — piping joints, electrical connections, system installation — and watching is not executing. Use open lab time and rehearse each task under a clock until the checklist is automatic. The jobsite tests hands-on competence, not video recall.'
      },
      {
        mistake: 'Treating NCCER as the whole credential stack',
        fix: 'Anyone who handles refrigerants must also hold EPA Section 608 certification, and employers increasingly value manufacturer certifications. Plan the stack — NCCER fundamentals, EPA 608, manufacturer certs — alongside the levels rather than after, so the credential set matches what job postings actually name.'
      },
      {
        mistake: 'Under-building the electrical foundation',
        fix: 'Electrical fundamentals recur across the levels and are the base of troubleshooting, the highest-paying skill in the trade. Candidates who rush the electrical modules find the troubleshooting levels — and the service jobs — beyond them. Work the circuits, meters and wiring-diagram material until reading a diagram is natural.'
      },
      {
        mistake: 'Neglecting refrigerant safety and regulations',
        fix: 'Refrigerant handling carries both safety and legal weight — the EPA 608 requirement and the environmental rules around refrigerants. Candidates who treat it as paperwork miss that the later levels and the jobsite both assume the discipline. Take it seriously from Level 3 onward.'
      },
      {
        mistake: 'Skipping safety content as "review"',
        fix: 'Safety recurs across every level and carries easy, high-weight points on the written tests — and in HVAC it extends to electrical and refrigerant hazards. Skimming it both leaves points on the table and sets the wrong priorities for the work.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER HVAC module ends in a written module test plus a hands-on performance profile. The written tests are typically multiple choice covering the module\'s stated objectives — HVAC math and science, electrical fundamentals, piping practices, refrigeration, and troubleshooting — with the pass threshold set by the training program (conventionally 70 percent). The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single pipe joint up to an electrical connection or system-installation task in the later levels, and each task is graded pass/fail on execution. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes are science and math items (heat transfer, pressure, temperature), electrical items (circuits, meters, wiring diagrams), safety items (refrigerant and electrical hazards), and application items (the correct procedure for this installation or repair). The electrical and troubleshooting items are where candidates lose the most points, and the hands-on profiles are where candidates who only studied written material fail — the two halves of every module are genuinely different skills.',
    types: [
      { name: 'HVAC science and math items', share: 'Heavy in the early levels', detail: 'Heat transfer, temperature and pressure relationships, and the unit conversions the trade uses daily.' },
      { name: 'Electrical items', share: 'Recurring from Level 2 onward', detail: 'Circuits, meters, wiring diagrams and motors — the base of troubleshooting.' },
      { name: 'Safety and refrigerant items', share: 'Recurring across every level', detail: 'Electrical safety, refrigerant handling, PPE and hazard recognition — easy points and legal weight.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of piping, electrical or installation tasks against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A technician is servicing a refrigeration system and must recover the refrigerant before opening the sealed system. Which of the following is the correct professional action?',
        options: [
          'A. Recover the refrigerant into an approved recovery cylinder using certified recovery equipment',
          'B. Vent the refrigerant to the atmosphere to save time',
          'C. Open the system and let the refrigerant escape during the repair',
          'D. Leave the refrigerant in the system and work around it'
        ],
        answer: 'A',
        explanation: 'Federal law (under the Clean Air Act, enforced by the EPA) requires that refrigerants be recovered using certified recovery equipment into approved cylinders before a sealed system is opened (A). B and C vent refrigerant, which is illegal and environmentally destructive. D is unsafe — working on a pressurized sealed system is dangerous. Refrigerant-handling items carry both technical and legal weight, and the EPA 608 certification tests exactly this discipline.'
      },
      {
        prompt: 'Using a multimeter, a technician measures 0 V across a motor\'s supply terminals while the disconnect is closed. Which of the following is the most likely cause?',
        options: [
          'A. A blown fuse or an open circuit ahead of the terminals',
          'B. The motor is overloaded',
          'C. The motor windings are shorted',
          'D. The fan blade is binding'
        ],
        answer: 'A',
        explanation: 'Zero voltage at the motor terminals with the disconnect closed points to an open circuit ahead of them — a blown fuse, an open breaker, or a broken connection (A). An overloaded motor (B) draws high current but still receives voltage. Shorted windings (C) would draw excessive current, not read zero volts. A binding fan blade (D) is a mechanical problem that would not remove supply voltage. Reading meter results and tracing the fault is exactly the electrical troubleshooting the levels build toward.'
      },
      {
        prompt: 'Before brazing a copper refrigerant line, which of the following must be addressed?',
        options: [
          'A. Purging the line with nitrogen while brazing to prevent oxidation inside the tubing',
          'B. Immediately charging the system before the joint cools',
          'C. Skipping the protective equipment because brazing is quick',
          'D. Using a flux that is not rated for the refrigerant'
        ],
        answer: 'A',
        explanation: 'Nitrogen purging during brazing prevents oxidation (scale) from forming inside the copper tubing, which would contaminate the system (A). B is wrong — charging happens after the system is complete and leak-checked. C is wrong — brazing requires proper PPE and ventilation. D is wrong — the correct flux must be used sparingly and appropriately for the joint. The item tests the installation discipline the piping modules teach and the performance profiles verify.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module-test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE; and (3) bringing the permitted materials — NCCER written tests may allow a calculator and, in some programs, an open codebook, so confirm what is allowed before the day. The written test is typically administered at the training centre, and the performance profile is a supervised session in the lab where the instructor verifies your work against the module\'s task checklist. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa. Treat both halves as equal gates. The pathway itself ends when you complete the required levels, and the credential stack continues with the EPA Section 608 certification and the manufacturer certifications your program recommends.',
    bring: [
      'The PPE required by your training program (safety glasses, gloves, etc.) for the performance profile',
      'A calculator if your program permits one on the written test',
      'Your program\'s module materials and any permitted reference',
      'Confirmation of the module\'s pass threshold and schedule from your instructor'
    ],
    leave: [
      'The assumption that the written test is the whole module — the performance profile is an equal gate',
      'Rushed hands-on work — the checklist is pass/fail and safety-critical',
      'Any personal tools your program does not authorise for the profile'
    ],
    timeline: [
      { time: 'Before each module', detail: 'Confirm the pass threshold, schedule and retake policy with your program; study the module objectives and rehearse the performance tasks.' },
      { time: 'Written test', detail: 'Work the multiple-choice items at a steady pace; the electrical and science items deserve the most time. Confirm the permitted materials beforehand.' },
      { time: 'Performance profile', detail: 'Execute each checklist task carefully and in order; safety steps are part of the grading, not optional. Ask for clarification if a task is unclear.' },
      { time: 'After the module', detail: 'Your instructor submits the result to the NCCER registry; keep your own record of modules completed.' },
      { time: 'Pathway end', detail: 'Complete the required levels, then add the EPA 608 certification and the manufacturer certifications your program recommends.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold (conventionally 70% on written tests) and retake policy are set by the training program, not by NCCER nationally.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers use.',
      'EPA Section 608 refrigerant certification is a separate federal requirement for anyone who handles refrigerants.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required HVAC levels, and the credential stack continues with the EPA Section 608 certification (a federal requirement for refrigerant handling) and the manufacturer certifications employers increasingly name in postings. The strongest next steps are to keep a clean record of modules completed, add the EPA 608 credential promptly, and pursue the manufacturer certifications that position you for the commercial-service roles at the top of the pay range. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what the trade actually hires. If a module test falls short, the retake is a normal part of the pathway, not a failure — review the module\'s objectives, rehearse the profile tasks, and sit again with the threshold confirmed.'
  }
};

export default data;
