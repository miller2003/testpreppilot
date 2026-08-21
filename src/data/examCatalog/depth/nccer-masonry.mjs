// Depth content for: nccer-masonry
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
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\u2019s official program materials, the NCCER Masonry Level Two test specification (4th Edition, released March 2024), and the Masonry Level One entry-level assessment specifications.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$56,600 median for masonry workers (BLS, May 2024)',
    summary:
      'The NCCER Masonry credential is the training-program backbone for the masonry workforce, so the directly relevant occupation is Masonry Workers, which the BLS Occupational Outlook Handbook groups under SOC 47-2021 (Brickmasons and Blockmasons) and the related stonemasonry series. That occupation had a May 2024 median annual wage of $56,600, with BLS OEWS data for the brickmasons and blockmasons component showing the lowest 10 percent earning roughly $31,600 and the highest 10 percent above $102,500. The distribution deserves careful reading because masonry pay is strongly shaped by apprenticeship stage, specialization and sector: apprentices and helpers earn well below the median while they train — BLS lists helpers to brickmasons, blockmasons, stonemasons and tile setters at a $35,260 median — and experienced journeymen working in commercial or union sectors sit toward the top of the range. BLS counted 294,300 masonry workers in 2024 and projects 2 percent employment growth from 2024 to 2034, slower than the average for all occupations, with about 20,700 openings a year, most from replacement demand as workers retire or leave the trade. The practical reading for an NCCER candidate is that the credential is a ladder within that steady market: NCCER\u2019s modular masonry levels (Core through the three masonry levels) are the standard curriculum used by many apprenticeship programs and training centers, and completing them — alongside the on-the-job hours and any employer requirements — is how you move from apprentice pay toward the median and beyond. The credential itself appears on no BLS pay table; it is the education component of a pathway whose wage outcome is set by apprenticeship hours, specialization and sector.',
    rows: [
      { label: 'Median annual wage, masonry workers', value: '$56,600', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Lowest 10 percent, brickmasons and blockmasons', value: 'roughly $31,600', note: 'BLS OEWS, SOC 47-2021, May 2024 — includes helpers and apprentices' },
      { label: 'Highest 10 percent, brickmasons and blockmasons', value: 'above $102,500', note: 'BLS OEWS, SOC 47-2021, May 2024' },
      { label: 'Employment, 2024', value: '294,300 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~20,700 per year', note: 'BLS OOH Job Outlook, 2024-34 — 2% growth, mostly replacement demand' }
    ],
    growth: '+2% projected change 2024-34 (slower than average), ~20,700 openings a year. Apprentice and helper pay sits below the median; experienced journeyman pay approaches and exceeds it.',
    source: {
      label: 'BLS Occupational Outlook Handbook — Masonry Workers',
      url: 'https://www.bls.gov/ooh/construction-and-extraction/brickmasons-blockmasons-and-stonemasons.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module and level tests are set to a 70% threshold',
    summary:
      'NCCER does not publish a pass-rate statistic for its masonry tests, and there is no single national passing score: NCCER sets the framework (written tests plus hands-on performance profiles) while the training program — the community college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The passing standard is published and stable: the official NCCER Masonry Level Two test specification (4th Edition, released March 2024) states that the minimum passing score is 70, and the Masonry Level One entry-level assessment specification confirms a passing score of 70 percent on each of the six required module tests. The Masonry Level Two test specification also states the format plainly: a three-hour closed-book examination covering 70 items across the level\u2019s modules — residential plans and drawing interpretation, residential masonry, reinforced masonry, masonry openings and metalwork, advanced laying techniques, the effect of climate on masonry, and construction inspection and quality control — with a basic-function, non-printing calculator permitted (the NCCER testing system includes a built-in calculator), and corresponding hands-on performance profiles required for each module. The Level One credential requires six module tests with the NCCER Core curriculum as a prerequisite. Because the credential is modular, there is no single do-or-die exam: you progress module by module, and a failed test is typically retaken after a waiting period set by the training program. The honest reading is that "passing" here is a manageable bar per module — 70 percent plus satisfactory completion of the performance tasks — and the difficulty is the cumulative length of the pathway, not any single test. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage you see quoted in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — Masonry Level Two test specification (4th Edition) and the Masonry Level One entry-level assessment specification',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. The passing standard is 70 on written tests (confirmed in the Masonry Level Two test specification and the Level One assessment specification), performance profiles require satisfactory completion of all tasks, and retake rules are set by the training program administering the tests.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER\u2019s masonry credential is not one exam but a ladder: the Core Curriculum (the construction fundamentals every NCCER trainee takes) followed by Masonry Level 1 through Level 3, each level containing multiple modules, each module ending in a written test plus a hands-on performance profile. Because it is a curriculum, the study plan is really a program plan — most candidates complete NCCER modules through an apprenticeship sponsor, a community college, or a training center, and the pace is set by the program calendar plus your own study time between sessions. The plan below assumes you are working through the masonry levels and gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study per module across a week, with the written test taken only after the module\u2019s practice exercises are comfortable, and the performance profile rehearsed hands-on before the verification. The Masonry Level One credential itself requires six module tests at 70 percent with the Core Curriculum as a prerequisite, and the Level Two test is a 70-item, three-hour closed-book examination covering the level\u2019s seven modules, so the level tests aggregate the module content into a single sitting. Two structural facts shape the approach. First, the masonry content is cumulative — Level 2 assumes Level 1\u2019s mortar, unit and laying-technique base, and Level 3 builds on all of it — so skimming a level to "pass the test" leaves gaps that the later levels and the jobsite expose. Second, NCCER is the education leg: employers and apprenticeship programs use the NCCER record to verify training, but state and employer requirements beyond the credential vary, so treat the NCCER levels as the curriculum that builds the skill base rather than as a universal licence.',
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
        label: 'Masonry Level 1',
        focus: 'Safety, mortar, units, and basic installation',
        tasks: [
          'Masonry safety, tools, and the properties of mortar and masonry units',
          'Mortar mixing, unit identification, and the basic bond patterns',
          'Study the module objectives and the ASTM and code references',
          'Rehearse the laying and joint-finishing tasks hands-on before the performance profile'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Masonry Level 2',
        focus: 'Residential masonry, reinforced masonry, and openings',
        tasks: [
          'Residential plans and drawing interpretation, and residential masonry',
          'Reinforced masonry and grouting, masonry openings and metalwork',
          'Advanced laying techniques and the effect of climate on masonry',
          'Construction inspection and quality control; prepare for the 70-item level test'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Masonry Level 3',
        focus: 'Advanced construction and special systems',
        tasks: [
          'Advanced masonry construction methods and special unit systems',
          'Study the module objectives and the current code references',
          'Rehearse the advanced laying and inspection tasks hands-on',
          'Complete the capstone-style performance profiles and claim the NCCER registry record'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'Through an apprenticeship sponsor or union', detail: 'Follow the program calendar; your study time between sessions is what moves you through the levels at pace. Use the sponsor\u2019s practice materials and ask for performance-profile rehearsals.' },
      { label: 'Community-college pathway, no employer', detail: 'Match the plan to the college\u2019s course sequence; add paid or volunteer exposure to jobsite work if possible, because the performance profiles assume hands-on familiarity.' },
      { label: 'Experienced mason seeking the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the code, mortar and reinforced-masonry modules, which are the ones experience alone does not cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER is a modular curriculum, the preparation levers are per-module discipline, hands-on rehearsal and code-and-mortar literacy — not a single exam strategy, and the candidate who treats the credential like a one-shot test misunderstands the pathway. The strategies below are ordered by what actually moves you through the levels and prepares you for the jobsite that the credential serves. The first and most important lever is per-module mastery: each masonry module is a small, passable unit at a 70 percent written-test threshold, and because the levels are cumulative, a first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a training program. The second lever is hands-on rehearsal: every module ends in a performance profile verified against a checklist — laying techniques, joint finishing, reinforced masonry and inspection tasks — and watching demonstrations is not executing, so candidates who use open lab time and rehearse each task until the checklist is automatic pass the profiles reliably while candidates who only study written material fail them. The third lever is learning the mortar and unit specifications by number, because the masonry modules are built on specific material standards — the mortar types and their compressive strengths, the unit grades, and the reinforced-masonry and grout rules — and the written tests reward knowing the numbers, so a reference card drilled until automatic is a high-yield study asset. The fourth lever is the layout and estimation math: coursing calculations, wall-area math and unit estimation are the hard parts of the written tests, and knowing the method by hand is the only way to handle them under closed-book test conditions. The fifth lever is safety and inspection literacy, because safety content recurs throughout the levels and construction inspection and quality control is a named Level 2 module carrying testable points. Finally, candidates should plan the apprenticeship and employer leg from the start, because NCCER is the education component of a pathway that also includes on-the-job hours.',
    items: [
      {
        title: 'Pass every module on the first attempt',
        detail: 'Each module is a small, passable unit at a 70% threshold, and the levels are cumulative. A first-attempt pass on every module keeps the pathway moving and avoids the retake lag that stretches a training program. Study the module\u2019s objectives explicitly and take the written test only when the practice exercises are comfortable.'
      },
      {
        title: 'Rehearse the performance profiles hands-on',
        detail: 'Every module has a hands-on performance profile verified against a checklist — laying techniques, joint finishing, reinforced masonry and inspection tasks. Watching demonstrations is not enough; you must execute the task under supervision. Use any open lab time your program offers, and rehearse each task until the checklist is automatic.'
      },
      {
        title: 'Learn the mortar and unit specifications by number',
        detail: 'The masonry modules are built on specific material standards — the mortar types and their compressive strengths, the unit grades, and the reinforced-masonry and grout rules — and the written tests reward knowing the numbers. Build a reference card of the key specifications and drill them, because the tests ask them directly.'
      },
      {
        title: 'Do the layout and estimation math by hand, repeatedly',
        detail: 'Coursing calculations, wall-area math and unit estimation are the hard parts of the written tests and the jobsite, and calculators are not a substitute for knowing the method. Work each calculation type until you can do it without the example in front of you; the tests will not restate the formula.'
      },
      {
        title: 'Treat safety and inspection as exam material at every level',
        detail: 'Safety content recurs in the Core and throughout the levels — scaffold rules, fall protection and tool safety — and construction inspection and quality control is a named Level 2 module. These are high-weight, lower-difficulty points on the written tests, and candidates who skip them leave easy points on the table.'
      },
      {
        title: 'Plan the apprenticeship and employer leg from the start',
        detail: 'NCCER is the education component, but masons typically learn through an apprenticeship or on the job, and the NCCER record is the verification employers use. Check your employer\u2019s or program\u2019s requirements early, because the pathway combines the NCCER levels with the on-the-job hours.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER curriculum is delivered through authorized training programs — apprenticeship sponsors, community colleges and training centers — so the primary "resource" is your program\u2019s enrollment, which typically includes the NCCER modules, instructors, lab access and the tests themselves, and the buying logic starts with the fact that the credential cannot be earned outside an authorized program. The decisions below are about supplements: the NCCER textbooks, the code and standards references, practice material and any books you buy to study between sessions. The NCCER Masonry Level trainee guides, published by Pearson, are the official curriculum companions and the first supplement most candidates need, because they carry the module objectives and the practice exercises the written tests reward; the guides run roughly $80-120 per level, and buying the correct edition for the current curriculum is essential because the modules are revised on a published cycle. The masonry standards references, roughly $60-150, are the second supplement, because the modules teach the mortar, unit and reinforced-masonry standards from the masonry organizations and the ASTM specifications, and candidates who already hold the relevant references from work can skip the purchase. Practice question products, roughly $30-80, add exam-style drilling for the written module and level tests and help candidates who need more reps than the trainee guides provide; the products that reference the current NCCER curriculum and the 70 percent threshold are the ones to choose. Open lab time at the training center is usually included in the program and is the single most valuable rehearsal resource, because the performance profiles are hands-on and the lab is where candidates practise them under supervision. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Candidates should confirm their program\u2019s tuition and what it includes before buying supplements, because many programs bundle the trainee guides and test fees into the enrollment cost, and the total out-of-pocket expense varies widely by sponsor and by whether apprenticeship or financial aid covers the program.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (sponsor/college)', values: ['Varies by program (often covered by apprenticeship or financial aid)', 'Instructor-led modules, labs, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER Masonry Level trainee guides (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'Masonry standards references (TMS, ASTM)', values: ['~$60-150', 'Print or digital reference', 'The mortar, unit and reinforced-masonry standards the modules teach' ], },
      { label: 'NCCER practice question products', values: ['~$30-80', 'Online practice items', 'Drilling the written module and level test style before the real test' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on rehearsal space', 'Practising the performance profiles under supervision' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely and employer requirements differ, so confirm your program\u2019s fees and your pathway. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER masonry pathway are mostly cumulative-education mistakes — skimming levels, skipping hands-on rehearsal, and treating the credential as the whole qualification — rather than single-exam failures, and understanding that pattern is the first step to avoiding them. The traps below are the recurring ones, and all are fixable within the program. The most damaging mistake is skimming a level to "pass the test," because the masonry levels are cumulative — Level 2 assumes Level 1\u2019s mortar, unit and laying base, and the jobsite tests the whole arc — so a skimmed level produces a passing test and a gap the next level exposes; the fix is to study each module\u2019s objectives completely, even the ones that feel familiar. The second trap is watching demonstrations without rehearsing the performance profiles, because the hands-on profiles are verified against checklists and watching is not executing; the fix is to use open lab time and rehearse each task until the checklist is automatic, since the jobsite tests hands-on competence rather than video recall. The third trap is using outdated textbooks or standards editions, because the modules are revised on a published cycle and the tests are written against the current curriculum; the fix is to confirm the edition the program uses and study that one. The fourth trap is assuming the NCCER credential is the entire qualification, because NCCER is the education component and masons also complete apprenticeship or on-the-job hours and any employer or state requirements; the fix is to check the program\u2019s and employer\u2019s requirements early and plan both legs. The fifth trap is neglecting the layout and estimation math, because coursing calculations, wall-area math and unit estimation are where written-test candidates lose points; the fix is to work each calculation type by hand repeatedly, since the tests will not restate the formula. Finally, skipping the mortar and unit specification numbers leaves easy points on the table, because the modules are built on named material standards and the tests ask the numbers directly; the fix is to build a reference card and drill it.',
    items: [
      {
        mistake: 'Skimming a level to "pass the test"',
        fix: 'The masonry levels are cumulative: Level 2 assumes Level 1\u2019s mortar, unit and laying base, and the jobsite tests the whole arc. A skimmed level produces a passing test and a gap the next level exposes. Study each module\u2019s objectives completely, even the ones you find familiar.'
      },
      {
        mistake: 'Watching demonstrations without rehearsing the performance profiles',
        fix: 'The hands-on profiles are verified against checklists — laying techniques, joint finishing, reinforced masonry and inspection tasks — and watching is not executing. Use open lab time and rehearse each task until the checklist is automatic. The jobsite tests hands-on competence, not video recall.'
      },
      {
        mistake: 'Using outdated textbooks or standards editions',
        fix: 'The masonry modules teach material standards and code requirements that are updated on a published cycle, and the tests are written against the current curriculum. Studying an older edition produces answers that are confidently wrong. Confirm the edition your program uses and study that one.'
      },
      {
        mistake: 'Assuming the NCCER credential is the entire qualification',
        fix: 'NCCER is the education component of the pathway; masons typically also complete apprenticeship or on-the-job hours, and some states or employers add requirements. Candidates who finish the NCCER levels and assume no further steps are in for a surprise. Check your program\u2019s and employer\u2019s requirements early and plan both legs.'
      },
      {
        mistake: 'Neglecting the layout and estimation math',
        fix: 'Coursing calculations, wall-area math and unit estimation are where written-test candidates lose points. Calculators help, but the method must be second nature. Work each calculation type by hand repeatedly — the tests will not restate the formula.'
      },
      {
        mistake: 'Skipping the mortar and unit specification numbers',
        fix: 'The masonry modules are built on named material standards — mortar types and compressive strengths, unit grades, and grout rules — and the tests ask the numbers directly. Build a reference card and drill it, because the recall items reward the specifics.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'NCCER masonry tests come in two shapes: per-module written tests plus hands-on performance profiles, and the level tests that aggregate the module content into a single sitting — the Masonry Level Two test, for example, is a 70-item, three-hour closed-book examination with a minimum passing score of 70 and a permitted basic-function calculator, and the Level One credential requires six module tests at 70 percent with the Core Curriculum as the prerequisite. The written items are multiple choice covering the module objectives — safety and scaffold rules, mortar mixing and unit identification, bond patterns and laying techniques, reinforced masonry and grouting, moisture control, repair and cleaning, and the layout and estimation math — and the Level Two test specification lists the modules: residential plans and drawing interpretation, residential masonry, reinforced masonry, masonry openings and metalwork, advanced laying techniques, the effect of climate on masonry, and construction inspection and quality control. The performance profiles are the distinctive part: the instructor verifies hands-on tasks against a checklist, from a single course of units to a complete wall assembly with reinforcement and inspection steps, and each task is graded satisfactory or unsatisfactory on execution, so candidates who only study written material fail the profiles while candidates who rehearse the tasks pass them. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes across the levels are safety items, material-specification items (mortar types and unit grades, asked by the numbers), layout and math items (coursing calculations and unit estimation), method items (bond patterns and laying sequences), and code-application items (what the reference requires for the assembly). The specification and math items are where candidates lose the most points, because they require knowing the method and the numbers rather than recalling a fact, and the hands-on profiles are where candidates who only studied written material fail — the two halves are genuinely different skills. The samples below are editor-written illustrations of the module and level test style, not actual NCCER test items, and candidates should review the official trainee guide objectives for their program\u2019s current curriculum before testing, because the exact item mix is set by the modules the program delivers.',
    types: [
      { name: 'Safety and scaffold items', share: 'Recurring across every level', detail: 'Fall protection, scaffold rules, tool safety, and hazard recognition. High-weight, low-difficulty — easy points when prepared.' },
      { name: 'Material-specification items', share: 'Heavy in Levels 1-2', detail: 'Mortar types and compressive strengths, unit grades, and grout rules. The tests ask the numbers directly.' },
      { name: 'Layout and math items', share: 'Present in the math-heavy modules', detail: 'Coursing calculations, wall-area math, and unit estimation. Require knowing the method, not just using a calculator.' },
      { name: 'Laying-method and inspection items', share: 'The bulk of the written tests', detail: 'Bond patterns, laying techniques, reinforced masonry, and quality control procedures.' },
      { name: 'Performance profiles (hands-on)', share: 'One per module, verified by the instructor', detail: 'Pass/fail execution of laying, joint-finishing, reinforcement and inspection tasks against a checklist.' }
    ],
    samples: [
      {
        prompt: 'A mason is laying brick in cold weather. Per the masonry standards for cold-weather work, what must the mason manage?',
        options: [
          'A. Protecting mortar and masonry from freezing and following the cold-weather procedures',
          'B. Using extra water in the mortar to compensate for the cold',
          'C. Working only when the temperature exceeds 90 degrees',
          'D. Omitting the mortar joints until the weather warms'
        ],
        answer: 'A',
        explanation: 'Cold-weather masonry requires protecting the mortar and units from freezing and following the published cold-weather procedures, because freezing mortar loses strength before it cures. Extra water, temperature limits without procedure, and omitted joints are not the standard practice. This reflects the climate-effect and material-standard items on the masonry tests.'
      },
      {
        prompt: 'A mason is laying a wall using modular brick and needs to plan the height. How many modular brick courses are needed for 8 inches of wall height?',
        options: [
          'A. Three courses',
          'B. Two courses',
          'C. Four courses',
          'D. Six courses'
        ],
        answer: 'A',
        explanation: 'Modular brick coursing is planned at three courses per 8 inches of wall height when the nominal unit height and joint thickness are combined correctly. This is the kind of coursing calculation the layout-math items test — know the modular dimension rule, apply it, and watch the units.'
      },
      {
        prompt: 'A reinforced masonry wall requires grout to bond the reinforcement to the units. Which practice is correct for placing the grout?',
        options: [
          'A. Following the grouting procedures for the reinforcement and the wall type',
          'B. Filling the cells only if the owner requests it',
          'C. Omitting grout where rebar is visible',
          'D. Using coarse grout in every wall regardless of the cell size'
        ],
        answer: 'A',
        explanation: 'Reinforced masonry grouting must follow the published procedures for the reinforcement and wall type, including the correct grout consistency and placement, which the reinforced-masonry module teaches. Omitting grout, ignoring the reinforcement, or using the wrong grout for the cell size are not correct practice. This reflects the reinforced-masonry and grouting items.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module and level test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program, and the level tests such as the Masonry Level Two 70-item, three-hour closed-book examination aggregate the module content into one sitting. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the test you are about to sit; (2) being physically ready for the performance profile — the hands-on checklist cannot be rushed, so arrive rested with the required PPE; and (3) bringing the permitted materials — the Masonry Level Two test permits a basic-function, non-printing calculator, and the NCCER testing system includes a built-in calculator, while no extra papers, books or notes are allowed. The written tests are typically computer-delivered or paper-based at the training centre, and the performance profile is a one-on-one verification with the instructor against the module\u2019s task checklist. After you pass a test, your record is submitted to the NCCER registry, which is the portable credential employers and other programs can verify. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the hands-on profile, or vice versa. Treat both halves as equal gates. The pathway itself ends when you complete the required levels and connect them to the apprenticeship hours and any employer or state requirements that apply in your area.',
    bring: [
      'The PPE required by your training program (safety glasses, gloves, etc.) for the performance profile',
      'A basic-function, non-printing calculator if the test permits one (the NCCER system includes one built in)',
      'Your program\u2019s module materials and any permitted reference',
      'Confirmation of the test\u2019s pass threshold and schedule from your instructor'
    ],
    leave: [
      'The assumption that the written test is the whole module — the performance profile is an equal gate',
      'Rushed hands-on work — the checklist is pass/fail and safety-critical',
      'Any extra papers, books or notes the test does not permit'
    ],
    timeline: [
      { time: 'Before each test', detail: 'Confirm the pass threshold, schedule and retake policy with your program; study the module objectives and rehearse the performance tasks.' },
      { time: 'Written test', detail: 'Work the multiple-choice items at a steady pace; the specification and math items deserve the most time. Confirm the permitted materials beforehand.' },
      { time: 'Performance profile', detail: 'Execute each checklist task carefully and in order; safety steps are part of the grading, not optional. Ask for clarification if a task is unclear.' },
      { time: 'After the test', detail: 'Your instructor submits the result to the NCCER registry; keep your own record of modules completed.' },
      { time: 'Pathway end', detail: 'Complete the required levels, then connect the NCCER record to the apprenticeship hours and employer requirements that apply.' }
    ],
    rules: [
      'NCCER credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The passing standard is 70 on written tests, and performance profiles require satisfactory completion of all tasks.',
      'The Masonry Level Two test is a 70-item, three-hour closed-book examination with a basic-function calculator permitted.',
      'Performance profiles are verified hands-on against a checklist and are pass/fail.',
      'Completed tests are recorded in the NCCER registry, the portable verification employers use.'
    ],
    afterwards:
      'After each test passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required masonry levels, and for most masons the real finish line is the combination of the NCCER record, the apprenticeship or on-the-job hours, and the skills the jobsite demands. The strongest next steps are to keep a clean record of modules completed, build the material-specification card you started in Level 1 into your working reference, and pursue the apprenticeship hours your program requires. In interviews and on the jobsite, the NCCER record proves you completed a structured, verified curriculum — pair it with the hands-on competence you rehearsed in the performance profiles, and be ready to demonstrate that competence on the spot, because that is what the trade actually hires. If a test falls short, the retake is a normal part of the pathway, not a failure — review the module\u2019s objectives, rehearse the profile tasks, and sit again with the threshold confirmed.'
  }
};

export default data;
