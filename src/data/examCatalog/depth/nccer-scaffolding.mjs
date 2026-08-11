// Depth content for: nccer-scaffolding
// NCCER scaffolding is a modular craft credential: a written module test plus a
// hands-on performance profile per module, with a 70% written threshold by
// convention, tracked in the NCCER registry.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER credentials are modular — a written test plus a hands-on performance profile per module — and scaffolding specifically is delivered through authorized training programs, with the credential tracked in the NCCER registry that employers and programs use to verify training. We state plainly what NCCER itself certifies versus what the broader pathway requires, and we note where NCCER publishes no statistics at all. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module list and pass-threshold conventions were taken from NCCER\u2019s official Scaffold Builder assessment specification, the NCCER Supported Scaffolds credential description, and the module-test policies used by state credential programs that administer NCCER modules.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$46,050 median for construction laborers and helpers (BLS, May 2024)',
    summary:
      'The NCCER Scaffolding credential certifies the skills of the workers who erect, inspect and dismantle scaffolds, and the closest official occupation is Construction Laborers and Helpers, SOC 47-2061, which the BLS Occupational Outlook Handbook explicitly includes when it lists job duties such as "build or take apart bracing, scaffolding, and temporary structures." That occupation had a May 2024 median annual wage of $46,050 ($22.14 per hour), with the lowest 10 percent earning less than $33,610 and the highest 10 percent more than $75,560, and the credential itself does not appear in wage data because BLS classifies by job duty rather than by certificate. The distribution needs careful reading because scaffold work sits at the skilled end of the laborer spectrum: general site labor that involves carrying material and cleaning up pays near the bottom of the range, while scaffold erectors on commercial and industrial jobs, especially those with OSHA-compliant fall-protection training and a verifiable NCCER record, work toward the upper half of the distribution, and the top industries BLS lists for the occupation — heavy and civil engineering construction at $47,190 and construction of buildings at $47,020 — are exactly the sectors that employ scaffold crews at scale. BLS counted 1,649,100 construction laborers and helpers in 2024 and projects 7 percent employment growth from 2024 to 2034, much faster than the average for all occupations, with about 149,400 openings a year, most from replacement demand as workers retire or leave the trade, so the job market for the occupation is strong and steady. The practical reading for an NCCER candidate is that the credential is a portable verification of scaffold-specific competence within that growing market: the NCCER registry record signals to employers and apprenticeship programs that the worker completed a structured curriculum and demonstrated the hands-on tasks, which is what separates an erector from a general laborer on a scaffold job. Two honest caveats anchor the picture: first, the BLS median blends all construction laborers and helpers at every skill level, so it understates what experienced, specialized scaffold crews earn; second, the credential is a training verification, not a license — employers, union halls and state or customer requirements decide who actually works the scaffold.',
    rows: [
      { label: 'Median annual wage, construction laborers and helpers', value: '$46,050', note: 'BLS Occupational Outlook Handbook, SOC 47-2061, May 2024 ($22.14/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $33,610', note: 'BLS OOH Pay tab, May 2024 — entry-level and general labor' },
      { label: 'Highest 10 percent', value: 'more than $75,560', note: 'BLS OOH Pay tab, May 2024 — experienced and specialized crews' },
      { label: 'Employment, 2024', value: '1,649,100 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~149,400 per year', note: 'BLS OOH Job Outlook, 2024-34 — 7% growth, mostly replacement demand' }
    ],
    growth: '+7% projected change 2024-34 (much faster than average), ~149,400 openings a year. General labor pays near the bottom of the range; specialized scaffold and skilled-site crews approach and exceed the median.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Construction Laborers and Helpers',
      url: 'https://www.bls.gov/ooh/construction-and-extraction/construction-laborers-and-helpers.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests use a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its scaffolding modules or for any of its assessments, and there is no single national passing score: NCCER sets the framework while the authorized training program — the apprenticeship sponsor, community college or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, and the module-test policies used by state credential programs that administer NCCER modules state the requirement plainly: pass the written module test at 70 percent or higher and meet all task requirements on the performance profile evaluation. Because scaffolding is modular, there is no single do-or-die exam: you progress module by module — the Scaffolding second-edition curriculum runs Introduction to the Trade, Trade Safety, Trade Tools and Equipment, Trade Math, Supported Scaffolds, Mobile Scaffolds, and Suspension Scaffolds — and a failed module test is typically retaken after a short waiting period, with programs commonly applying a two-day wait before a retake. NCCER also offers a separate, optional Scaffold Builder assessment: a two-hour closed-book written exam of 65 items with a minimum passing score of 75, plus a hands-on performance verification, which is a different, higher-stakes instrument from the per-module tests. The performance profiles are the second half of every module: the instructor verifies hands-on tasks against a checklist, and completion is recorded in the NCCER registry. The honest reading is that "passing" here is a low, manageable bar per module — 70 percent on a written module test plus satisfactory completion of the performance tasks — and the difficulty is the cumulative length of the pathway and the hands-on verification, not any single test. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage you see quoted in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — official Scaffold Builder assessment specification and module-test policies',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests use a 70% threshold by convention, performance profiles require satisfactory completion of all tasks, and retake rules are set by the training program administering the tests. The optional Scaffold Builder assessment uses a 65-item, two-hour closed-book format with a minimum passing score of 75.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER scaffolding is not one exam but a modular curriculum: the Scaffolding second edition runs seven modules — Introduction to the Trade, Trade Safety, Trade Tools and Equipment, Trade Math, Supported Scaffolds, Mobile Scaffolds, and Suspension Scaffolds — and each module ends in a written test plus a hands-on performance profile verified by an NCCER-certified instructor, so the study plan is really a program plan. Most candidates complete the modules through an apprenticeship sponsor, a community college or a training center, and the pace is set by the program calendar plus your own study time between sessions; the plan below assumes that rhythm and gives a per-module schedule rather than a fixed-week count. The written tests conventionally require 70 percent, and the performance profiles are pass/fail checklists the trainee must complete satisfactorily, so study time splits between reviewing the module objectives and rehearsing the hands-on tasks under supervision. The heaviest content sits in the three scaffold-type modules — Supported Scaffolds at 19 items, Mobile Scaffolds at 7 and Suspension Scaffolds at 8 on the NCCER Scaffold Builder assessment spec — with Trade Safety at 11 items the largest single safety block, which tells you where the written points live. Two structural facts shape the approach. First, the content is cumulative: Trade Math and Trade Safety underpin the scaffold-type modules, and the jobsite expects the safety base before the erection knowledge, so skimming the foundation modules leaves gaps the later modules and the worksite expose. Second, NCCER is the education leg: the registry record verifies training, but employers, general contractors and customer safety programs decide who actually erects scaffold on their projects, and many require the worker to meet OSHA training requirements separately, so treat the NCCER modules as the skill base rather than a universal permit. Candidates who already work in construction should move faster through the tool and safety modules and spend study time on the scaffold-configuration, load and tie-off content, which is where written-test points concentrate.',
    totalHours: 'Per-module: 8-12 hours study + hands-on rehearsal (roughly 80-110 hours across the seven modules)',
    weeks: [
      {
        label: 'Modules 31101-31104 (foundation block)',
        focus: 'Trade introduction, safety, tools, math',
        tasks: [
          'Complete Introduction to the Trade and Trade Tools and Equipment; the modules are short but set the vocabulary',
          'Give Trade Safety the most review time of the foundation block — it is the largest single safety block on the written assessments',
          'Work Trade Math until scaffold load, dimension and layout calculations are routine',
          'Pass each module test at 70% or higher and complete the performance profiles hands-on'
        ],
        hours: '8-12 hrs/module'
      },
      {
        label: 'Module 31105 — Supported Scaffolds',
        focus: 'The core of the credential',
        tasks: [
          'System scaffold configurations and erection, tubular welded-frame scaffolds, tube-and-clamp scaffolds',
          'Outrigger scaffolds and pump-jack scaffolds, and applicable safety considerations and regulations',
          'Rehearse the erection and inspection tasks hands-on before the performance profile',
          'Expect the largest item share on the written assessment — treat it as the highest-weight module'
        ],
        hours: '10-14 hrs'
      },
      {
        label: 'Modules 31106-31107 — Mobile and suspension scaffolds',
        focus: 'Specialized scaffold families',
        tasks: [
          'Mobile scaffold components, configuration, movement and lock-out rules',
          'Suspension scaffold systems, rigging, counterweights, fall protection and tie-offs',
          'Rehearse the hands-on checklist tasks under supervision',
          'Drill the safety rules for both families — they are heavily represented in the written items'
        ],
        hours: '8-12 hrs/module'
      },
      {
        label: 'Optional Scaffold Builder assessment',
        focus: 'The 65-item, two-hour credential test',
        tasks: [
          'Study against the seven content domains of the official assessment specification',
          'Take the closed-book format seriously: 65 items in two hours, basic calculator only',
          'Rehearse the hands-on performance verification tasks with your instructor',
          'Aim for a comfortable margin over the 75-point minimum passing score, not a bare pass'
        ],
        hours: '15-25 hrs'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the modules at pace. Use the sponsor\u2019s practice materials and ask for performance-profile rehearsals.' },
      { label: 'New to construction', detail: 'Budget the upper end of the study range and add OSHA-10 or equivalent safety training alongside the modules; the safety and math foundation matters more without site experience.' },
      { label: 'Experienced scaffold hand seeking the credential', detail: 'Test the modules quickly where the program allows; spend study time on the code-referenced and math modules, which are the ones experience alone does not cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER scaffolding is a modular curriculum, the preparation levers are per-module discipline, hands-on rehearsal and safety literacy — not a single exam strategy, and the candidate who treats the credential like a one-shot test misunderstands the pathway. The strategies below are ordered by what actually moves you through the modules and prepares you for the scaffold work the credential serves. The first and most important lever is per-module mastery: each module is a small, passable unit at a 70 percent written threshold, and because the modules build on each other, a first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a training program. The second lever is hands-on rehearsal: every module ends in a performance profile verified against a checklist — supported scaffold erection, mobile scaffold movement, suspension scaffold rigging — and watching demonstrations is not executing, so candidates who use open lab time and rehearse each task until the checklist is automatic pass the profiles reliably while candidates who only study written material fail them. The third lever is the safety base: Trade Safety and the safety rules embedded in the scaffold-type modules carry a heavy share of written points and are the first thing the jobsite audits, so study fall protection, guardrail and access rules as exam material, not as review. The fourth lever is the scaffold math: dimension, load and tie-off calculations in Trade Math and the scaffold modules are the hard part of the written tests, and knowing the method by hand is the only way to handle them under the closed-book conditions. The fifth lever is treating the optional Scaffold Builder assessment as a separate, higher-stakes event: if your employer or a customer project asks for it, it is a 65-item, two-hour closed-book test with a 75-point minimum, so prepare it deliberately rather than assuming the module tests cover it. Finally, candidates should plan the employer leg from the start, because the NCCER record is the education component of a pathway that also includes the OSHA training and site requirements the worksite demands.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70% threshold, and the modules build on each other. A first-attempt pass keeps the pathway moving and avoids the retake lag that stretches a training program. Study the module\u2019s stated objectives explicitly and sit the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — supported scaffold erection, mobile scaffold configuration, suspension scaffold rigging. Watching demonstrations is not enough; you must execute the task under supervision. Use any open lab time your program offers and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Treat the safety content as exam material',
        detail: 'Trade Safety is the largest single safety block on the written assessments, and fall protection, guardrail and access rules recur in every scaffold module. Candidates who skim safety to focus on erection leave easy points on the table and carry the wrong priorities to the jobsite, where OSHA and customer audits check the same rules.'
      },
      {
        title: 'Do the scaffold math by hand, repeatedly',
        detail: 'Dimension, load and tie-off calculations in Trade Math and the scaffold modules are the hard parts of the written tests, and calculators are not a substitute for knowing the method. Work each calculation type until you can do it without the example in front of you; the tests will not restate the formula.'
      },
      {
        title: 'Prepare the Scaffold Builder assessment separately',
        detail: 'If your employer or a project asks for the NCCER Scaffold Builder assessment, it is a different instrument from the module tests: 65 closed-book items in two hours with a 75-point minimum passing score, plus a performance verification. Prepare it deliberately against the official assessment specification rather than assuming module passes transfer.'
      },
      {
        title: 'Plan the employer and OSHA leg from the start',
        detail: 'NCCER is the education component, but who actually works the scaffold is decided by employers, general contractors and customer safety programs, many of which require separate OSHA training and site certifications. Check the requirements of the employers and projects you target early, and pair the NCCER record with the safety credentials the worksite demands.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER scaffolding curriculum is delivered through authorized training programs — apprenticeship sponsors, community colleges and training centers — so the primary "resource" is your program\u2019s enrollment, which typically includes the modules, instructors, lab access and the tests themselves, and the buying logic starts with the fact that the modules cannot be completed outside an authorized program. The decisions below are about supplements: the NCCER textbooks, the module trainee guides, practice material and any books you buy to study between sessions. The NCCER Scaffolding trainee guide, published by Pearson, is the official curriculum companion and the first supplement most candidates need, because it carries the module objectives and the practice exercises the written tests reward; the guide runs roughly $80-120, and buying the correct second-edition materials is essential because the modules are revised on a published cycle. The code and OSHA references, roughly $50-120, are the second supplement, because the scaffold modules reference the safety standards and fall-protection rules the written tests and the jobsite both use, and candidates who already hold current safety materials from work can skip the purchase. Practice question products, roughly $30-80, add exam-style drilling for the written module tests and help candidates who need more reps than the trainee guide provides; the products that reference the current NCCER curriculum and the 70 percent threshold are the ones to choose. Open lab time at the training center is usually included in the program and is the single most valuable rehearsal resource, because the performance profiles are hands-on and the lab is where candidates practise them under supervision. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Candidates should confirm their program\u2019s tuition and what it includes before buying supplements, because many programs bundle the trainee guides and exam fees into the enrollment cost.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the modules are completed through an authorized program' ], },
      { label: 'NCCER Scaffolding trainee guide (Pearson)', values: ['~$80-120', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'OSHA and scaffold code references', values: ['~$50-120', 'Print or digital reference', 'The safety and fall-protection base the modules reference' ], },
      { label: 'NCCER practice question products', values: ['~$30-80', 'Online practice items', 'Drilling the written module test style before the real test' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space', 'Practising the performance profiles under supervision' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and employer requirements differ, so confirm your program\u2019s fees and your pathway. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER scaffolding pathway are mostly cumulative-education mistakes — skimming modules, skipping hands-on rehearsal, and treating the credential as the whole qualification — rather than single-exam failures, and understanding that pattern is the first step to avoiding them. The traps below are the recurring ones, and all are fixable within the program. The most damaging mistake is skimming the foundation modules to "pass the test," because Trade Safety and Trade Math underpin the scaffold-type modules and the jobsite tests the whole arc — a skimmed foundation produces a passing module test and a gap the next module exposes; the fix is to study each module\u2019s objectives completely, even the ones that feel familiar. The second trap is watching demonstrations without rehearsing the performance profiles, because the hands-on profiles are verified against checklists — supported scaffold erection, mobile scaffold movement, suspension scaffold rigging — and watching is not executing; the fix is to use open lab time and rehearse each task until the checklist is automatic, since the worksite tests hands-on competence rather than video recall. The third trap is using outdated textbooks or an old curriculum edition, because the modules are revised on a published cycle and the tests are written against the current materials; the fix is to confirm the edition your program uses and study that one. The fourth trap is assuming the NCCER record is the entire qualification, because NCCER is the education component and employers and customer safety programs also require OSHA training and site-specific rules; the fix is to check the requirements of the projects and employers you target early and plan both legs. The fifth trap is neglecting the scaffold math, because load, dimension and tie-off calculations are where written-test candidates lose points; the fix is to work each calculation type by hand repeatedly, since the tests will not restate the formula. Finally, skipping safety content as "review" leaves easy points on the table and sets the wrong tone for a trade where fall protection is the first priority.',
    items: [
      {
        mistake: 'Skimming the foundation modules to "pass the test"',
        fix: 'Trade Safety and Trade Math underpin the scaffold-type modules, and the jobsite tests the whole arc. A skimmed foundation produces a passing module test and a gap the next module exposes. Study each module\u2019s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — supported scaffold erection, mobile scaffold movement, suspension scaffold rigging — and watching is not executing. Use open lab time and rehearse each task until the checklist is automatic. The worksite tests hands-on competence, not video recall.'
      },
      {
        mistake: 'Using outdated textbooks or curriculum editions',
        fix: 'The scaffold modules are revised on a published cycle and the tests are written against the current materials. Studying an older edition produces answers that are confidently wrong. Confirm the edition your program uses and study that one.'
      },
      {
        mistake: 'Assuming the NCCER record is the entire qualification',
        fix: 'NCCER is the education component of the pathway; employers, general contractors and customer safety programs also require OSHA training and site-specific rules. Candidates who finish the modules and assume no further steps are in for a surprise. Check the requirements of the employers and projects you target early and plan both legs.'
      },
      {
        mistake: 'Neglecting the scaffold math',
        fix: 'Load, dimension and tie-off calculations are where written-test candidates lose points. Calculators help, but the method must be second nature. Work each calculation type by hand repeatedly — the tests will not restate the formula.'
      },
      {
        mistake: 'Skipping safety content as "review"',
        fix: 'Safety recurs across every scaffold module and carries easy, high-weight points on the written tests — and it is the worksite\u2019s first priority. Skimming it to focus on erection both leaves points on the table and sets the wrong tone for the trade.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER scaffolding module ends in a written module test plus a hands-on performance profile, so the "question types" a candidate faces are really two different skill families, and the preparation for each is different. The written tests are typically multiple choice covering the module\u2019s stated objectives — safety rules, scaffold component identification, erection sequences, load and layout math, and code applications — with the pass threshold conventionally set at 70 percent. The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single component-inspection or tie-off task up to a complete supported scaffold erection, and each task is graded satisfactory or unsatisfactory on execution, so candidates who only study written material fail the profiles while candidates who rehearse the tasks pass them. For candidates working toward the optional NCCER Scaffold Builder assessment, the written format is different and documented: a two-hour closed-book exam of 65 items with a minimum passing score of 75, organized across seven content domains — Introduction to the Trade at 5 items, Trade Safety at 11, Trade Tools and Equipment at 5, Trade Math at 10, Supported Scaffolds at 19, Mobile Scaffolds at 7, and Suspension Scaffolds at 8 — with a basic-function, non-printing calculator permitted. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes across the modules are safety items (what is the correct fall-protection or guardrail rule), identification items (what is the correct component for this scaffold family), math items (what is the correct load or tie-off calculation), and method items (what is the correct erection sequence). The math and code-application items are where candidates lose the most points, because they require knowing the method rather than recalling a fact, and the hands-on profiles are where candidates who only studied written material fail. The samples below are editor-written illustrations of the module-test style, not actual NCCER test items.',
    types: [
      { name: 'Safety and PPE items', share: 'Recurring across every module', detail: 'Fall protection, guardrails, access, scaffold inspection and hazard recognition. High-weight, low-difficulty — easy points when prepared.' },
      { name: 'Component identification items', share: 'Heavy in the scaffold-type modules', detail: 'Identify the correct component for supported, mobile or suspension scaffold families and their configurations.' },
      { name: 'Load and layout math items', share: 'Concentrated in Trade Math and the scaffold modules', detail: 'Dimension, load and tie-off calculations. Require knowing the method, not just using a calculator.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of erection, movement, rigging or inspection tasks against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A scaffold is being erected against a building and workers will be on the platform at an elevation above the fall-protection threshold. Which of the following is required before the scaffold is put into service?',
        options: [
          'A. Guardrails, midrails and toeboards, or equivalent fall protection, in place before use',
          'B. A verbal safety briefing with no physical guardrail components',
          'C. A written sign-in sheet at the base of the scaffold',
          'D. All workers wearing non-slip boots as the sole protective measure'
        ],
        answer: 'A',
        explanation: 'Scaffold safety rules require guardrail systems (top rail, midrail and toeboard) or equivalent fall protection on scaffolds above the threshold before workers use the platform. A verbal briefing, a sign-in sheet, or footwear alone do not provide the required fall protection. Safety items like this recur in every module and are the highest-weight, lowest-difficulty points on the written tests.'
      },
      {
        prompt: 'A scaffold erector needs to identify the component that supports the platform of a tubular welded-frame scaffold and is level with the working surface. Which component is being described?',
        options: [
          'A. The coupling pin',
          'B. The scaffold planking',
          'C. The base plate',
          'D. The diagonal brace'
        ],
        answer: 'B',
        explanation: 'The planking is the horizontal component that forms the working platform of a scaffold. The coupling pin connects vertical frames, the base plate distributes load at the bottom, and the diagonal brace provides lateral stability — none of these is the platform itself. This is the shape of the component-identification items that dominate the scaffold-type modules.'
      },
      {
        prompt: 'A scaffold platform will be loaded with materials and workers. Before adding the load, which step is the most appropriate way to verify the scaffold will support it?',
        options: [
          'A. Confirm the scaffold is built to the designed configuration and within its rated load capacity',
          'B. Add the materials and observe whether the scaffold sags',
          'C. Ask the crew to stand on the platform and judge by feel',
          'D. Use more materials and plan for a shorter work shift'
        ],
        answer: 'A',
        explanation: 'Scaffolds must be erected to the designed configuration and used within their rated load capacity; verification happens by confirming the build and the rating, not by testing the scaffold with the actual load. Loading and observing, guessing by feel, or overloading in any scenario violates safe scaffold practice. This reflects the load and capacity items drawn from the math and method modules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER scaffolding is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre, with the written threshold conventionally set at 70 percent and the profile a pass/fail checklist. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the module you are about to sit, because the threshold and the retake wait are set by the program; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE and the tools the profile requires; and (3) bringing the permitted materials — NCCER written tests may allow a basic calculator, and the Scaffold Builder assessment explicitly permits a basic-function, non-printing calculator but no extra papers, books, notes or study materials, so confirm what is allowed before the day rather than assuming. The written test is typically computer-delivered through the NCCER account portal or paper-based at the training centre, with roughly a module-test length the program schedules, and the performance profile is a one-on-one verification with the instructor against the module\u2019s task checklist, graded satisfactory or unsatisfactory on execution. After you pass a module, your result is submitted to the NCCER registry, the portable credential employers and other programs can verify, and keeping your own record of modules completed is the practical step after each test. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa — when the two halves are equal gates and safety steps are part of the grading on the profile. Treat both halves as equal gates, and ask for clarification if a task is unclear, because the instructor verifies execution, not guessing. The optional Scaffold Builder assessment follows the same two-gate logic but with a documented format: 65 closed-book written items in two hours, a 75-point minimum, and a separate performance verification.',
    bring: [
      'The PPE required by your training program (hard hat, safety glasses, gloves, etc.) for the performance profile',
      'A basic calculator if your program permits one on the written module test (required for the Scaffold Builder assessment)',
      'Your program\u2019s module materials and any permitted reference',
      'Confirmation of the module\u2019s pass threshold and schedule from your instructor'
    ],
    leave: [
      'The assumption that the written test is the whole module — the performance profile is an equal gate',
      'Rushed hands-on work — the checklist is pass/fail and safety-critical',
      'Any personal tools, papers or notes your program does not authorise for the written test or profile'
    ],
    timeline: [
      { time: 'Before each module', detail: 'Confirm the pass threshold, schedule and retake policy with your program; study the module objectives and rehearse the performance tasks.' },
      { time: 'Written module test', detail: 'Work the multiple-choice items at a steady pace; the math and safety items deserve the most time. Confirm the permitted materials beforehand.' },
      { time: 'Performance profile', detail: 'Execute each checklist task carefully and in order; safety steps are part of the grading, not optional. Ask for clarification if a task is unclear.' },
      { time: 'After the module', detail: 'Your instructor submits the result to the NCCER registry; keep your own record of modules completed.' },
      { time: 'Optional Scaffold Builder assessment', detail: 'If required, sit the 65-item, two-hour closed-book test aiming well above the 75-point minimum, then complete the hands-on performance verification.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold on written module tests is 70% by convention, and performance profiles require satisfactory completion of all tasks.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'The optional Scaffold Builder assessment is a 65-item, two-hour closed-book written exam with a minimum passing score of 75, plus a performance verification.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers and programs use.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the seven Scaffolding modules, and for most scaffold workers the real finish line is the combination of the NCCER record, the OSHA and site-safety credentials the worksite demands, and the hands-on competence the trade actually hires. The strongest next steps are to keep a clean record of modules completed, build a personal reference of the safety rules and scaffold configurations you studied, and pursue the employer requirements your program or target projects set. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what scaffold work actually pays for. If a module test falls short, the retake is a normal part of the pathway, not a failure — review the module\u2019s objectives, rehearse the profile tasks, and sit again with the threshold confirmed. And if a customer or employer asks for the higher-stakes Scaffold Builder assessment, treat it as a separate preparation event rather than assuming your module passes carry over.'
  }
};

export default data;
