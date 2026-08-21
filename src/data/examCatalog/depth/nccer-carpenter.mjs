// Depth content for: nccer-carpenter
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER credentials are modular — a written test plus a hands-on performance profile per module — and the credential is part of a broader pathway that also involves apprenticeship hours and, in many states, separate state or employer requirements, so we state plainly what NCCER itself certifies versus what the pathway requires. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\u2019s official program materials, the NCCER module testing guide, and the NCCER Carpentry Level One entry-level assessment specifications.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$59,310 median for carpenters (BLS, May 2024)',
    summary:
      'The NCCER Carpenter credential is the training-program backbone for the carpenter workforce, so the directly relevant occupation is Carpenters, SOC 47-2031. That occupation had a May 2024 median annual wage of $59,310, with the lowest 10 percent earning less than $38,760 and the highest 10 percent over $98,370, and the credential itself does not appear in wage data because the BLS classifies by job duty rather than by certificate. The distribution deserves careful reading because carpenter pay is strongly shaped by apprenticeship stage, specialization and sector: apprentices earn well below the median while they train — BLS notes apprentice pay is less than fully trained carpenters\u2019 and rises with skill — and experienced journeymen working in nonresidential building construction, the top industry the BLS lists at $63,330, sit toward the top of the range, while residential framing and finish work sit near or below the occupation median depending on the region and the employer. BLS counted 959,000 carpenters in 2024 and projects 4 percent employment growth from 2024 to 2034, about as fast as the average for all occupations, with about 74,100 openings a year, most from replacement demand as workers retire or leave the trade, so the job market is steady rather than booming and the path to the median runs through the apprenticeship hours and the specialization a carpenter builds. The practical reading for an NCCER candidate is that the credential is a ladder within that steady market: NCCER\u2019s modular carpentry levels (Core through Level 4) are the standard curriculum used by many apprenticeship programs and training centers, and completing them — alongside the on-the-job hours and any state or employer requirements — is how you move from apprentice pay toward the median and beyond. Two honest caveats anchor the picture: first, the BLS median is national and blends residential and commercial work, so the carpenter\u2019s actual pay follows the local market and the sector; second, the NCCER record proves the education component, but the wage outcome is set by the apprenticeship hours, the specialization, and the region, not by the credential alone. For a candidate asking whether the credential pays, the direct answer is that it is the training gateway into the $59,310-median occupation, with the earnings path running from apprentice wages up through the experienced and nonresidential-sector pay the top decile reflects.',
    rows: [
      { label: 'Median annual wage, carpenters', value: '$59,310', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent', value: 'less than $38,760', note: 'BLS OOH Pay tab, May 2024 — includes apprentices' },
      { label: 'Highest 10 percent', value: 'more than $98,370', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '959,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~74,100 per year', note: 'BLS OOH Job Outlook, 2024-34 — 4% growth, mostly replacement demand' }
    ],
    growth: '+4% projected change 2024-34 (as fast as average), ~74,100 openings a year. Apprentice pay sits below the median; experienced and nonresidential-sector pay approaches and exceeds it.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Carpenters',
      url: 'https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests are set to a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its carpentry module tests, and there is no single national passing score: NCCER sets the framework (written module tests plus hands-on performance profiles) while the training program — the community college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, and the official entry-level assessment specification for the Carpentry Level One credential confirms the passing score is 70 percent on each of the nine required module tests, with the performance profiles evaluated separately as a pass/fail checklist the trainee must complete satisfactorily. Because the credential is modular, there is no single do-or-die exam: you progress module by module, and a failed module test is typically retaken after a waiting period — the NCCER testing policy allows retakes, with training programs commonly requiring a short wait — with the retake policy set by the training program rather than by NCCER nationally. The performance profiles are the second half of each module: the instructor verifies hands-on tasks against a checklist, and completion is recorded in the NCCER registry. The honest reading is that "passing" here is a low, manageable bar per module — 70 percent on a written module test plus satisfactory completion of the performance tasks — and the difficulty is the cumulative length of the pathway, not any single test. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage you see quoted in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — official program materials and the Carpentry Level One entry-level assessment specification',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests use a 70% threshold by convention (confirmed in the Carpentry Level One assessment specification), performance profiles require satisfactory completion of all tasks, and retake rules are set by the training program administering the tests.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER\u2019s carpenter credential is not one exam but a ladder: the Core Curriculum (the construction fundamentals every NCCER trainee takes) followed by Carpentry Level 1 through Level 4, each level containing multiple modules, each module ending in a written test plus a hands-on performance profile. Because it is a curriculum, the study plan is really a program plan — most candidates complete NCCER modules through an apprenticeship sponsor, a community college, or a training center, and the pace is set by the program calendar plus your own study time between sessions. The plan below assumes you are working through the carpentry levels and gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study per module across a week, with the written test taken only after the module\u2019s practice exercises are comfortable, and the performance profile rehearsed hands-on before the verification. The Carpentry Level One credential itself requires nine module tests, each at 70 percent, with the Core Curriculum as a prerequisite, and later levels build on that base. Two structural facts shape the approach. First, the carpentry content is cumulative — Level 2 assumes Level 1\u2019s safety and framing base, and Level 4 builds on all of it — so skimming a level to "pass the test" leaves gaps that the later levels and the jobsite expose. Second, NCCER is the education leg: employers and apprenticeship programs use the NCCER record to verify training, but state and employer requirements beyond the credential vary, so treat the NCCER levels as the curriculum that builds the skill base rather than as a universal licence.',
    totalHours: 'Per-module: 10-15 hours study + hands-on rehearsal',
    weeks: [
      {
        label: 'Core Curriculum (before Level 1)',
        focus: 'Construction fundamentals',
        tasks: [
          'Complete the Core modules: basic safety, introduction to construction math, hand and power tools, rigging, communication and employability skills',
          'Pass each Core module test at 70% or higher',
          'Complete the performance profiles hands-on; these verify safety and tool competence',
          'Treat safety content as exam material, not review — it recurs across every level'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Carpentry Level 1',
        focus: 'Orientation, tools, and basic framing',
        tasks: [
          'Carpentry orientation, building materials, and hand and power tools',
          'Floor systems, wall and ceiling framing, and roof framing fundamentals',
          'Study the module\u2019s objectives and code references against the current materials',
          'Rehearse the framing and layout tasks hands-on before the performance profile'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Carpentry Level 2',
        focus: 'Advanced framing, roofing, and concrete forming',
        tasks: [
          'Advanced wall, ceiling and roof framing, and stair and rafter layout',
          'Roofing applications and concrete forming systems',
          'Rehearse the roofing, stair and form tasks hands-on — the profiles are pass/fail checklists',
          'Do the layout math by hand; the written tests require it'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Carpentry Level 3',
        focus: 'Interior and exterior finishing',
        tasks: [
          'Interior and exterior finish work: trim, doors, cabinets, siding and windows',
          'Study the finishing sequence and the code requirements for each system',
          'Practise the finish tasks hands-on before verification',
          'Keep a personal reference notebook of the methods and code rules'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Carpentry Level 4',
        focus: 'Advanced topics and supervisory skills',
        tasks: [
          'Advanced stair construction, commercial construction, and site layout',
          'Construction crew leadership and project management fundamentals',
          'Complete the capstone-style performance profiles that verify integrated skills',
          'Claim the NCCER registry record and connect it to apprenticeship or employer requirements'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the levels at pace. Use the sponsor\u2019s practice materials and ask for performance-profile rehearsals.' },
      { label: 'Community-college pathway, no employer', detail: 'Match the plan to the college\u2019s course sequence; add paid or volunteer exposure to jobsite work if possible, because the performance profiles assume hands-on familiarity.' },
      { label: 'Experienced carpenter seeking the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the code, math and layout modules, which are the ones experience alone does not cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER is a modular curriculum, the preparation levers are per-module discipline, hands-on rehearsal and safety literacy — not a single exam strategy, and the candidate who treats the credential like a one-shot test misunderstands the pathway. The strategies below are ordered by what actually moves you through the levels and prepares you for the jobsite that the credential serves. The first and most important lever is per-module mastery: each carpentry module is a small, passable unit at a 70 percent written-test threshold, and because the levels are cumulative, a first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a training program into a second year. The second lever is hands-on rehearsal: every module ends in a performance profile verified against a checklist — framing, layout, roofing and finishing tasks — and watching demonstrations is not executing, so candidates who use open lab time and rehearse each task until the checklist is automatic pass the profiles reliably while candidates who only study written material fail them. The third lever is the methods notebook: the carpentry levels teach framing sequences, layout math and finishing procedures that build across levels, and the jobsite expects the same knowledge, so keeping a personal reference of each module\u2019s key methods and the code or safety rule behind them produces a working asset by Level 4. The fourth lever is the layout math: rafter and stair layout, the 3-4-5 method, and material estimation are the hard parts of the written tests, and knowing the method by hand is the only way to handle them under the closed-book test conditions. The fifth lever is safety literacy, which recurs in the Core and throughout the levels and carries high-weight, low-difficulty points on the written tests. Finally, candidates should plan the apprenticeship and employer leg from the start, because NCCER is the education component of a pathway that also includes on-the-job hours.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70% threshold, and the levels are cumulative. A first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a training program. Study the module\u2019s objectives explicitly and take the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — framing, layout, roofing, finishing tasks. Watching demonstrations is not enough; you must execute the task under supervision. Use any open lab time your program offers, and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Build a personal methods notebook as you go',
        detail: 'The carpentry levels teach methods and code requirements that build across levels, and the jobsite expects the same knowledge. Keep a notebook of each module\u2019s key methods — framing sequences, layout math, finishing procedures — and the code or safety rule behind them. By Level 4 you will have a personal reference that is the strongest possible jobsite asset.'
      },
      {
        title: 'Do the layout math by hand, repeatedly',
        detail: 'Rafter and stair layout, the 3-4-5 method, and material estimation are the hard parts of the written tests and the jobsite, and calculators are not a substitute for knowing the method. Work each calculation type until you can do it without the example in front of you; the tests will not restate the formula.'
      },
      {
        title: 'Treat safety as exam material at every level',
        detail: 'Safety content recurs in the Core and throughout the levels, and it is the highest-weight, lowest-difficulty material on the written tests — fall protection, PPE, tool safety and scaffold rules. Candidates who skim safety to focus on framing leave easy points on the table and, more importantly, carry the wrong priorities to the jobsite.'
      },
      {
        title: 'Plan the apprenticeship and employer leg from the start',
        detail: 'NCCER is the education component, but carpenters typically learn through a 3-4 year apprenticeship combining on-the-job training with the classroom hours the NCCER curriculum supports. Check your employer\u2019s or program\u2019s requirements early, because the NCCER record is the verification employers use and the pathway combines both legs.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER curriculum is delivered through authorized training programs — apprenticeship sponsors, community colleges and training centers — so the primary "resource" is your program\u2019s enrollment, which typically includes the NCCER modules, instructors, lab access and the tests themselves, and the buying logic starts with the fact that the credential cannot be earned outside an authorized program. The decisions below are about supplements: the NCCER textbooks, code references, practice material and any books you buy to study between sessions. The NCCER Carpentry Level trainee guides, published by Pearson, are the official curriculum companions and the first supplement most candidates need, because they carry the module objectives and the practice exercises the written tests reward; the guides run roughly $80-120 per level, and buying the correct edition for the current curriculum is essential because the modules are revised on a published cycle. The code references, roughly $50-120, are the second supplement, because the framing and finishing modules reference the residential and commercial codes, and candidates who already hold the relevant code book from work can skip the purchase. Practice question products, roughly $30-80, add exam-style drilling for the written module tests and help candidates who need more reps than the trainee guides provide; the products that reference the current NCCER curriculum and the 70 percent threshold are the ones to choose. Open lab time at the training center is usually included in the program and is the single most valuable rehearsal resource, because the performance profiles are hands-on and the lab is where candidates practise them under supervision. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Candidates should confirm their program\u2019s tuition and what it includes before buying supplements, because many programs bundle the trainee guides and test fees into the enrollment cost, and the total out-of-pocket expense varies widely by sponsor and by whether apprenticeship or financial aid covers the program.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER Carpentry Level trainee guides (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'Residential and commercial code references', values: ['~$50-120', 'Print or digital reference', 'The code base the framing and finishing modules reference' ], },
      { label: 'NCCER practice question products', values: ['~$30-80', 'Online practice items', 'Drilling the written module test style before the real test' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space', 'Practising the performance profiles under supervision' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and employer requirements differ, so confirm your program\u2019s fees and your pathway. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER carpentry pathway are mostly cumulative-education mistakes — skimming levels, skipping hands-on rehearsal, and treating the credential as the whole qualification — rather than single-exam failures, and understanding that pattern is the first step to avoiding them. The traps below are the recurring ones, and all are fixable within the program. The most damaging mistake is skimming a level to "pass the test," because the carpentry levels are cumulative — Level 2 assumes Level 1\u2019s safety and framing base, and the jobsite tests the whole arc — so a skimmed level produces a passing module test and a gap the next level exposes; the fix is to study each module\u2019s objectives completely, even the ones that feel familiar. The second trap is watching demonstrations without rehearsing the performance profiles, because the hands-on profiles are verified against checklists and watching is not executing; the fix is to use open lab time and rehearse each task until the checklist is automatic, since the jobsite tests hands-on competence rather than video recall. The third trap is using outdated textbooks or code editions, because the modules are revised on a published cycle and the tests are written against the current curriculum; the fix is to confirm the edition the program uses and study that one. The fourth trap is assuming the NCCER credential is the entire qualification, because NCCER is the education component and carpenters also complete apprenticeship hours and any employer or state requirements; the fix is to check the program\u2019s and employer\u2019s requirements early and plan both legs. The fifth trap is neglecting the layout math, because rafter and stair layout and the 3-4-5 method are where written-test candidates lose points; the fix is to work each calculation type by hand repeatedly, since the tests will not restate the formula. Finally, skipping safety content as "review" leaves easy points on the table and sets the wrong jobsite priorities; the fix is to treat safety as exam material at every level.',
    items: [
      {
        mistake: 'Skimming a level to "pass the test"',
        fix: 'The carpentry levels are cumulative: Level 2 assumes Level 1\u2019s safety and framing base, and the jobsite tests the whole arc. A skimmed level produces a passing module test and a gap the next level exposes. Study each module\u2019s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — framing, layout, roofing and finishing tasks — and watching is not executing. Use open lab time and rehearse each task until the checklist is automatic. The jobsite tests hands-on competence, not video recall.'
      },
      {
        mistake: 'Using outdated textbooks or code editions',
        fix: 'The carpentry modules teach methods and code requirements that are updated on a published cycle, and the tests are written against the current curriculum. Studying an older edition produces answers that are confidently wrong. Confirm the edition your program uses and study that one.'
      },
      {
        mistake: 'Assuming the NCCER credential is the entire qualification',
        fix: 'NCCER is the education component of the pathway; carpenters typically also complete apprenticeship on-the-job hours, and some states or employers add requirements. Candidates who finish the NCCER levels and assume no further steps are in for a surprise. Check your program\u2019s and employer\u2019s requirements early and plan both legs.'
      },
      {
        mistake: 'Neglecting the layout math',
        fix: 'Rafter and stair layout, the 3-4-5 method, and material estimation are where written-test candidates lose points. Calculators help, but the method must be second nature. Work each calculation type by hand repeatedly — the tests will not restate the formula.'
      },
      {
        mistake: 'Skipping safety content as "review"',
        fix: 'Safety recurs across every level and carries easy, high-weight points on the written tests — and it is the jobsite\u2019s first priority. Skimming it to focus on framing both leaves points on the table and sets the wrong tone for the trade.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER carpentry module ends in a written module test plus a hands-on performance profile, so the "question types" a candidate faces are really two different skill families, and the preparation for each is different. The written tests are typically multiple choice covering the module\u2019s stated objectives — safety rules, framing methods, layout math, code applications and material knowledge — with the pass threshold conventionally set at 70 percent, and the Carpentry Level One assessment specification confirms nine required module tests at 70 percent each, with the Core Curriculum as the prerequisite. The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single framing or layout task up to a complete floor, wall or roof assembly in the later levels, and each task is graded satisfactory or unsatisfactory on execution, so candidates who only study written material fail the profiles while candidates who rehearse the tasks pass them. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes across the levels are safety items (what is the correct PPE or fall-protection rule), layout and math items (what is the correct rafter or stair calculation, and how is the 3-4-5 method applied), method items (what is the correct framing or finishing sequence for the assembly), and code-application items (what does the reference require for this installation). The math and code-application items are where candidates lose the most points, because they require knowing the method rather than recalling a fact, and the hands-on profiles are where candidates who only studied written material fail — the two halves of every module are genuinely different skills. The samples below are editor-written illustrations of the module-test style, not actual NCCER test items, and candidates should review the official trainee guide objectives for their program\u2019s current curriculum before testing, because the exact item mix is set by the modules the program delivers.',
    types: [
      { name: 'Safety and PPE items', share: 'Recurring across every level', detail: 'Fall protection, tool safety, scaffold rules, and hazard recognition. High-weight, low-difficulty — easy points when prepared.' },
      { name: 'Layout and math items', share: 'Present in the math-heavy modules', detail: 'Rafter and stair layout, the 3-4-5 method, and material estimation. Require knowing the method, not just using a calculator.' },
      { name: 'Framing and finishing method items', share: 'The bulk of the written tests', detail: 'Floor, wall, roof and finish assembly sequences and the correct methods for each system.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of framing, layout, roofing or finishing tasks against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A carpenter is working on a residential roof and will be on the roof surface without a perimeter guard. Per construction fall-protection rules, what is required?',
        options: [
          'A. Fall protection such as a guardrail, safety net, or personal fall arrest system',
          'B. Working quickly to minimize the time on the roof',
          'C. Wearing non-slip boots and proceeding',
          'D. Asking a coworker to watch from the ground'
        ],
        answer: 'A',
        explanation: 'Construction fall-protection rules require fall protection — a guardrail, safety net, or personal fall arrest system — for work at elevation above the threshold, which is what the safety modules teach. Speed, footwear and observation are not substitutes for the required protection. Safety items like this recur at every level and are the highest-weight, lowest-difficulty points on the tests.'
      },
      {
        prompt: 'A carpenter is laying out a set of stairs with a total rise of 90 inches and wants to use 7.5-inch risers. How many risers does the stair require?',
        options: [
          'A. 10 risers',
          'B. 12 risers',
          'C. 15 risers',
          'D. 18 risers'
        ],
        answer: 'B',
        explanation: 'Dividing the total rise by the riser height gives the number of risers: 90 inches divided by 7.5 inches equals 12 risers. A divides incorrectly, and C and D misapply the numbers. This is the shape of the layout-math items — know the method, apply it, and watch the units.'
      },
      {
        prompt: 'When framing a wall opening for a window in a load-bearing wall, which assembly correctly supports the load above the opening?',
        options: [
          'A. A header spanning the opening with jack studs supporting each end',
          'B. A single top plate with no header',
          'C. Studs cut to fit above the opening without a header',
          'D. Removing the wall studs entirely for the opening width'
        ],
        answer: 'A',
        explanation: 'A load-bearing wall opening is framed with a header spanning the opening and jack studs supporting each end, transferring the load to the framing below. Omitting the header, cutting studs without a header, or removing the studs leaves the load unsupported. This is the shape of the framing-method items that recur across the wall-framing modules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module-test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre, and the level tests such as the Carpentry Level One credential\u2019s nine module tests aggregate the module content into the pathway\u2019s verification structure. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the module you are about to sit, because the 70 percent threshold and the retake wait are set by the program; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE and the tools the profile requires; and (3) bringing the permitted materials — NCCER written tests may allow a calculator, and some programs allow a permitted reference, so confirm what is allowed before the day rather than assuming. The written test is typically computer-delivered or paper-based at the training centre, with roughly a module-test length that the program schedules, and the performance profile is a one-on-one verification with the instructor against the module\u2019s task checklist, graded satisfactory or unsatisfactory on execution. After you pass a module, your record is submitted to the NCCER registry, which is the portable credential employers and other programs can verify, and keeping your own record of modules completed is the practical step after each test. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa — when the two halves are equal gates and safety steps are part of the grading on the profile. Treat both halves as equal gates, and ask for clarification if a task is unclear, because the instructor verifies execution, not guessing. The pathway itself ends when you complete the required levels and connect them to the apprenticeship hours and any employer or state requirements that apply in your area, so the exam-day mindset is one module at a time within a longer pathway rather than a single high-stakes appointment.',
    bring: [
      'The PPE required by your training program (safety glasses, gloves, etc.) for the performance profile',
      'A calculator if your program permits one on the written test',
      'Your program\u2019s module materials and any permitted reference',
      'Confirmation of the module\u2019s pass threshold and schedule from your instructor'
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
      { time: 'Pathway end', detail: 'Complete the required levels, then connect the NCCER record to the apprenticeship hours and employer requirements that apply.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold on written module tests is 70% by convention, and performance profiles require satisfactory completion of all tasks.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers use.',
      'The NCCER record is the education component; carpenters also complete apprenticeship hours and any employer or state requirements.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required carpentry levels, and for most carpenters the real finish line is the combination of the NCCER record, the apprenticeship on-the-job hours, and the skills the jobsite demands. The strongest next steps are to keep a clean record of modules completed, build the methods notebook you started in Level 1 into your working reference, and pursue the apprenticeship hours your program requires. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what the trade actually hires. If a module test falls short, the retake is a normal part of the pathway, not a failure — review the module\u2019s objectives, rehearse the profile tasks, and sit again with the threshold confirmed.'
  }
};

export default data;
