// Depth content for: nccer-welding
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Trades & skilled-licensure desk',
    bio: 'This guide is compiled and maintained by our trades desk. NCCER welding credentials are modular — a written test plus a hands-on performance profile per module, with the hands-on weld coupons assessed against inspection criteria — and the credential is one route among several (AWS certification and state/national code tests are others), so we state plainly what NCCER itself verifies. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Credential structure, module format and pass-threshold conventions were taken from NCCER\'s official welding program materials and module testing guide.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$51,000 median for welders, cutters, solderers, and brazers (BLS, May 2024)',
    summary:
      'The NCCER welding credential trains the welder workforce, so the directly relevant occupation is Welders, Cutters, Solderers, and Brazers, SOC 51-4121. That occupation had a May 2024 median annual wage of $51,000, with the lowest 10 percent earning under $38,130 and the highest 10 percent over $75,850, across about 424,000 jobs. The distribution deserves careful reading because welding pay is heavily shaped by process and sector: structural and pipe welders in construction, manufacturing and the energy sector sit toward the top of the range — especially those with code certifications in shielded metal arc (SMAW), gas tungsten arc (GTAW/TIG) or flux-cored processes on critical pipe — while production welders on repetitive shop work sit toward the bottom. BLS projects little change in overall welding employment over the decade, with the large majority of openings coming from replacement need as the existing workforce retires, which is precisely why the credential matters: in a flat-employment occupation, the workers with verified, portable credentials win the jobs. The practical reading for an NCCER welding candidate is that the credential is a skill-verification ladder within a trade where demonstrated ability — especially on code-quality weld coupons — is the currency. The performance profiles, where an instructor inspects your actual welds against criteria, are the part that employers care about, because they prove you can produce the work, not just answer questions about it.',
    rows: [
      { label: 'Median annual wage, welders, cutters, solderers, and brazers', value: '$51,000', note: 'BLS OEWS, May 2024 (SOC 51-4121)' },
      { label: 'Lowest 10 percent', value: 'less than $38,130', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $75,850', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '~424,000 jobs', note: 'BLS OEWS, May 2024' }
    ],
    growth: 'BLS projects little change in overall welding employment 2024-34, with most openings from replacement need as the workforce retires — a flat market where verified credentials and code-quality skills win the jobs.',
    source: {
      label: 'BLS Occupational Employment and Wage Statistics — Welders, Cutters, Solderers, and Brazers (51-4121)',
      url: 'https://www.bls.gov/oes/current/oes514121.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCCER publishes no pass rate — module tests use a 70% threshold by convention',
    summary:
      'NCCER does not publish a pass-rate statistic for its welding module tests or performance profiles, and there is no single national passing score: NCCER sets the framework (written module tests plus hands-on performance profiles) while the training program — the high school, community college, apprenticeship sponsor or training center delivering the curriculum — administers the tests and applies the pass threshold. The conventional NCCER threshold for written module tests is 70 percent, but the authoritative number is the one set by your specific training program. The performance profiles are the distinctive half of each module: you produce actual weld coupons — fillet and groove welds in the positions and processes the module teaches — and the instructor assesses them against inspection criteria, with the results recorded in the NCCER registry. Because the credential is modular, there is no single do-or-die exam: you progress module by module, and a failed module test or a rejected weld coupon is reworked and re-assessed under the program\'s retake policy. The honest reading is that the written bar per module is low and manageable, while the real difficulty — and the real value — sits in the hands-on profiles, where the welds themselves are the answer sheet. We state plainly that NCCER publishes no pass-rate statistics at all, and any percentage quoted in forums is a program-level figure, not an NCCER national number.',
    source: {
      label: 'NCCER — official welding program materials',
      url: 'https://www.nccer.org'
    },
    caveat:
      'NCCER publishes no pass-rate statistics. Written module tests conventionally use a 70% threshold, but the authoritative threshold and retake policy are set by the training program; performance profiles are assessed hands-on against inspection criteria and recorded in the NCCER registry.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'NCCER welding is not one exam but a modular ladder: the Core Curriculum plus Welding Level 1 through Level 4, each level containing modules on the major processes — oxyfuel cutting, SMAW (stick), GMAW (MIG), FCAW (flux-cored), GTAW (TIG) — with each module ending in a written test plus a hands-on performance profile in which you produce weld coupons that an instructor assesses against criteria. Because it is a curriculum, the study plan is really a program plan: most candidates complete NCCER welding modules through a high school or community-college program, an apprenticeship or an employer training center, and the pace is set by the program calendar plus your own practice time in the lab. The plan below gives a per-module rhythm rather than a fixed-week schedule: roughly 10-15 hours of study and practice per module, with the written test taken only after the module\'s material is comfortable and the performance profile attempted only after the weld coupons are consistently passing the instructor\'s criteria. Two structural facts shape the approach. First, the processes build on each other — GTAW assumes you can set up and control the equipment the earlier modules taught — so skipping a process to save time leaves gaps that later modules and the code-quality expectations of employers expose. Second, the performance profiles are the real credential: employers in a flat-employment trade hire on demonstrated ability, so the weld coupons you produce are the part of this credential that gets you the job, and they deserve more of your practice time than the written tests do.',
    totalHours: 'Per-module: 10-15 hours study + lab practice',
    weeks: [
      {
        label: 'Core Curriculum (before Level 1)',
        focus: 'Construction fundamentals and safety',
        tasks: [
          'Complete the Core modules: basic safety, construction math, hand and power tools, and employability skills',
          'Pass each Core module test at your program\'s threshold',
          'Complete the performance profiles hands-on — safety and tool competence are verified',
          'Treat safety as exam material; it recurs across every welding module'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Welding Level 1',
        focus: 'Oxyfuel cutting and SMAW fundamentals',
        tasks: [
          'Oxyfuel cutting: setup, safety, and cutting practice in the lab',
          'SMAW (stick): electrode selection, arc strikes, and flat-position fillet and groove welds',
          'Produce practice coupons until they consistently pass the instructor\'s inspection criteria',
          'Pass each written module test before moving on'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Welding Level 2',
        focus: 'SMAW in positions and FCAW/GMAW',
        tasks: [
          'SMAW in horizontal and vertical positions — the coupon positions get harder here',
          'FCAW (flux-cored) and GMAW (MIG) fundamentals: setup, wire and gas selection, and bead quality',
          'Practise the position welds hands-on; the performance profiles are the gate',
          'Work the written material on process variables and defect causes'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Welding Level 3',
        focus: 'GMAW/GTAW and advanced positions',
        tasks: [
          'GMAW (MIG) in multiple positions and GTAW (TIG) fundamentals on carbon steel',
          'Joint design, weld symbols, and blueprint reading for welding',
          'Produce the Level 3 coupons and rehearse until consistent',
          'Study the defect-prevention material — the written tests and the coupons both score it'
        ],
        hours: '12-15 hrs/module'
      },
      {
        label: 'Welding Level 4',
        focus: 'GTAW and code-quality expectations',
        tasks: [
          'GTAW (TIG) in position on carbon and stainless where the program covers it',
          'Quality control, inspection and the code standards employers reference (AWS D1.1-style requirements)',
          'Complete the capstone-style performance profiles that verify the full skill set',
          'Finish the level and claim the NCCER registry record'
        ],
        hours: '12-15 hrs/module'
      }
    ],
    variants: [
      { label: 'High-school or community-college program', detail: 'Follow the program calendar; use open lab time aggressively, because the performance profiles — not the written tests — are what employers will trust.' },
      { label: 'Employer-sponsored or apprenticeship', detail: 'Match the plan to the sponsor\'s schedule; ask for coupon feedback against the inspection criteria so you know what is being graded.' },
      { label: 'Experienced welder formalising the credential', detail: 'Test out of levels where your program allows prior-learning assessment; spend study time on the written process-variable and code material, which experience alone does not fully cover.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'Because NCCER welding is a modular curriculum with hands-on performance profiles, the preparation levers are coupon practice, process sequencing and reading the inspection criteria — not written-exam tactics. The strategies below are ordered by what actually produces code-quality welds and completes the credential.',
    items: [
      {
        title: 'Practise the coupons, not just the theory',
        detail: 'The performance profiles are the real credential: you produce weld coupons that an instructor assesses against inspection criteria, and employers in a flat-employment trade hire on demonstrated ability. Spend most of your practice time producing and reworking coupons to the criteria, not re-reading the textbook. A written pass with weak coupons is a hollow credential.'
      },
      {
        title: 'Learn what the inspection criteria actually grade',
        detail: 'Every performance profile is graded against specific criteria — bead profile, penetration, porosity, fusion, undercut, distortion. Ask your instructor for the checklist before you practise, and evaluate every coupon against it yourself before submitting. Candidates who know the criteria produce welds that pass; candidates who do not produce welds that merely look busy.'
      },
      {
        title: 'Sequence the processes instead of skipping ahead',
        detail: 'The levels build: GTAW assumes the equipment control and setup the earlier modules taught. Skipping a process to save time leaves gaps that the later modules and employer expectations expose. Complete each module\'s written test and coupons before moving on, even the processes you think you will not use.'
      },
      {
        title: 'Track your defects and fix the pattern',
        detail: 'Keep a simple log of every rejected coupon: what process, what position, what defect (porosity, lack of fusion, undercut). After a few entries the pattern is obvious, and fixing the pattern — travel speed, arc length, electrode angle — is faster than randomly re-welding. This is the same loop professional welders use to pass code tests.'
      },
      {
        title: 'Treat safety as exam material',
        detail: 'Safety content recurs in the Core and throughout the levels, and it is the highest-weight, lowest-difficulty material on the written tests. It is also non-negotiable in the lab — an unsafe setup fails the profile before the weld is judged. Skimming safety to focus on welding leaves easy points and the wrong priorities.'
      },
      {
        title: 'Plan the next credential while finishing this one',
        detail: 'NCCER welding is one route; many employers also recognise AWS certifications and code tests (AWS D1.1-style structural requirements are the common reference). Ask your program which next step it recommends and structure your Level 4 practice toward it, so the momentum carries into the credential employers actually name in job postings.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCCER welding curriculum is delivered through authorized training programs, so the primary resource is your program\'s enrollment — instructors, lab time, consumables and the tests themselves. The decisions below are about supplements: the official textbooks for between-session study, and the code references that matter once you move toward employer-recognised certifications.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCCER program enrollment (school/sponsor)', values: ['Varies by program (often covered by tuition, apprenticeship or employer)', 'Instructor-led modules, lab time, written tests and performance profiles', 'Required — the credential is earned through an authorized program' ], },
      { label: 'NCCER Welding Level textbooks (Pearson)', values: ['~$80-120 per level', 'Print + digital with practice exercises', 'The official curriculum companion for between-session study' ], },
      { label: 'Open lab time at your training center', values: ['Usually included', 'Hands-on practice with the program\'s machines and consumables', 'Producing and reworking coupons — the highest-yield practice there is' ], },
      { label: 'AWS D1.1-style code references (for the next step)', values: ['~$100-250', 'Print or digital code documents', 'Understanding the code-quality expectations employers reference' ], },
      { label: 'Personal PPE (auto-darkening helmet, gloves, jacket)', values: ['~$150-400', 'Equipment', 'Your own properly fitted gear makes consistent practice possible' ]
      }
    ],
    footnote: 'Prices checked 2026-08 in USD before promotions; program tuition varies widely, so confirm your program\'s fees. We do not rank by commission.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failure modes in the NCCER welding pathway are mostly hands-on-education mistakes — under-practising the coupons, ignoring the inspection criteria, and skipping process sequencing — rather than written-exam failures. The six traps below are the recurring ones, and all are fixable within the program.',
    items: [
      {
        mistake: 'Under-practising the performance profiles',
        fix: 'The coupons are the real credential: instructors assess your actual welds against inspection criteria, and employers hire on demonstrated ability. Candidates who read thoroughly but practise little pass the written tests and struggle at the profiles. Convert most of your practice time into coupon production against the criteria.'
      },
      {
        mistake: 'Not knowing what the criteria grade',
        fix: 'Every profile is graded against specific criteria — bead profile, penetration, porosity, fusion, undercut, distortion. Get the checklist from your instructor before you practise and evaluate every coupon against it yourself. Welds that merely look busy do not pass; welds that meet the criteria do.'
      },
      {
        mistake: 'Skipping processes to save time',
        fix: 'The levels build on each other — GTAW assumes the setup and control the earlier modules taught. Skipping a process leaves gaps the later modules and employers expose. Complete each module\'s written test and coupons before moving on, even for processes you expect to use rarely.'
      },
      {
        mistake: 'Reworking coupons randomly instead of fixing the pattern',
        fix: 'Keep a defect log — process, position, and the defect (porosity, lack of fusion, undercut). After a few entries the pattern is clear, and fixing the cause (travel speed, arc length, electrode angle) beats re-welding blind. This is the loop professional welders use to pass code tests.'
      },
      {
        mistake: 'Treating safety as skippable review',
        fix: 'Safety recurs across every level and carries easy, high-weight written points — and it is non-negotiable in the lab, where an unsafe setup fails the profile before the weld is judged. Skimming it both leaves points on the table and sets the wrong priorities for the trade.'
      },
      {
        mistake: 'Stopping at the credential instead of planning the next step',
        fix: 'NCCER welding is one route; employers also recognise AWS certifications and code tests. Ask your program which next step it recommends and structure Level 4 practice toward it, so the credential ladder continues into what job postings actually name.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Each NCCER welding module ends in a written module test plus a hands-on performance profile. The written tests are typically multiple choice covering the module\'s stated objectives — process setup and variables, electrode and wire selection, defect causes and prevention, safety, joint design and weld symbols — with the pass threshold set by the training program (conventionally 70 percent). The performance profiles are the distinctive part: you produce weld coupons in the processes and positions the module teaches, and the instructor assesses them against inspection criteria — bead profile, penetration, fusion, porosity, undercut and distortion — with each coupon graded pass/fail on meeting the criteria. Because the credential is modular, there is no single exam-day format to rehearse; the recurring content shapes are process-recall items (what variables control this process), defect items (what causes this defect and how do you prevent it), symbol-and-joint items (read the weld symbol, identify the joint), and the hands-on coupons that prove you can execute. The written items are coachable and cheap; the coupons are the gate that separates prepared candidates from merely informed ones.',
    types: [
      { name: 'Process-variable items', share: 'Heavy across the written tests', detail: 'What variables (amperage, voltage, travel speed, gas flow) control a given process, and how changes affect the weld.' },
      { name: 'Defect-cause and prevention items', share: 'Present in every level', detail: 'Identify the cause of porosity, lack of fusion, undercut or distortion, and the correct preventive adjustment.' },
      { name: 'Safety items', share: 'Recurring across every level', detail: 'PPE, ventilation, equipment setup, and hazard recognition — high-weight, low-difficulty points.' },
      { name: 'Performance profiles (hands-on coupons)', share: 'One per module, assessed by the instructor', detail: 'Produce weld coupons in the taught process and position; graded pass/fail against inspection criteria.' }
    ],
    samples: [
      {
        prompt: 'While welding with the SMAW (stick) process, a welder notices porosity appearing consistently in the weld beads. Which of the following is the most likely cause to check first?',
        options: [
          'A. Contaminated base metal or damp electrodes',
          'B. Travel speed that is too slow',
          'C. Excessive voltage setting',
          'D. Incorrect filler-metal classification'
        ],
        answer: 'A',
        explanation: 'Porosity is caused by gas trapped in the weld, and the classic sources are contaminated base metal (rust, oil, paint) and moisture in the electrode coating (A). Travel speed too slow (B) typically produces excess reinforcement or burn-through, not porosity. Excessive voltage (C) widens the arc and can cause undercut or spatter. An incorrect filler classification (D) affects mechanical properties, not porosity. The defect-cause items reward knowing the classic causes in order, and the fix — clean the base metal and use dry electrodes — is the preventive action the written tests and the shop both grade.'
      },
      {
        prompt: 'A weld symbol on a blueprint shows a reference line with the weld symbol on the arrow side and no other elements. What does the symbol indicate about where the weld is placed?',
        options: [
          'A. The weld is placed on the opposite side from the arrow',
          'B. The weld is placed on the same side as the arrow',
          'C. The weld is placed on both sides',
          'D. The weld is placed at the point of the arrow'
        ],
        answer: 'B',
        explanation: 'A weld symbol below the reference line indicates the arrow side of the joint — the side the arrow points to (B). A symbol above the line would mean the other side. A symbol on both sides of the line means a weld on both sides (C). D confuses the arrow\'s direction with a placement point. Blueprint-reading items like this recur in the joint-design modules, and misreading the arrow side is the classic miss.'
      },
      {
        prompt: 'Before beginning a welding task in a confined space, which of the following must be addressed first?',
        options: [
          'A. Ventilation and atmospheric testing to ensure the space is safe to enter',
          'B. Choosing the filler metal for the joint',
          'C. Setting the welding parameters for the process',
          'D. Selecting the travel speed'
        ],
        answer: 'A',
        explanation: 'Confined-space entry requires atmospheric testing and ventilation before any work begins — an unsafe atmosphere is life-threatening and must be resolved first (A). B, C and D are welding decisions that come after the space is verified safe. Safety items like this recur at every level and are the highest-weight, lowest-difficulty points on the written tests; they also represent the non-negotiable priorities of the trade itself.'
      }
    ],
    note: 'Samples are editor-written illustrations of the module-test style, not actual NCCER test items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'Because NCCER is modular, there is no single exam day — but each module has a "test day" with two halves: the written module test and the hands-on performance profile, both administered by your training program rather than by a national testing centre. The practical equivalents of exam-day preparation are: (1) confirming with your program the pass threshold, the schedule and the retake policy for the module; (2) being physically ready for the profile — the weld coupons require steady hands and proper PPE, so arrive rested with your own properly fitted gear; and (3) having practised the exact coupons the module teaches until they consistently meet the inspection criteria. The written test is typically administered at the training centre, and the performance profile is a supervised session in the lab where you set up, weld the required coupons, and the instructor assesses them against the criteria. The most common way candidates stumble is treating the written test as the whole story — they pass it and then rush the coupons, or vice versa. Treat both halves as equal gates, and give the coupons the respect they deserve: in a trade where demonstrated ability is the currency, the profile is the part employers will trust. The pathway ends when you complete the required welding levels and, where relevant, move into the employer-recognised certifications your program recommends.',
    bring: [
      'The PPE required by your program (auto-darkening helmet, gloves, welding jacket, safety glasses)',
      'Your own properly fitted gear if the program allows it — consistent practice depends on comfort',
      'Any permitted reference material for the written test, per your program\'s rules',
      'Confirmation of the module\'s pass threshold, coupon requirements and schedule from your instructor'
    ],
    leave: [
      'The assumption that the written test is the whole module — the coupons are an equal gate',
      'Rushed coupon work — the criteria are pass/fail and rework costs lab time',
      'Any unauthorised personal equipment for the profile session'
    ],
    timeline: [
      { time: 'Before each module', detail: 'Confirm the pass threshold, coupon requirements and retake policy with your program; practise the exact coupons the module teaches until they meet the criteria.' },
      { time: 'Written test', detail: 'Work the multiple-choice items at a steady pace; the process-variable and defect items deserve the most time.' },
      { time: 'Performance profile', detail: 'Set up carefully, weld the required coupons in the taught process and position, and let the instructor assess them against the criteria. Safety and setup are part of the grade.' },
      { time: 'After the module', detail: 'Your instructor submits the result to the NCCER registry; keep your own defect log and coupon record.' },
      { time: 'Pathway end', detail: 'Complete the required levels, then move into the employer-recognised certifications (AWS-style code tests) your program recommends.' }
    ],
    rules: [
      'NCCER welding credentials are modular: a written test plus a hands-on performance profile per module, administered by the training program.',
      'The pass threshold (conventionally 70% on written tests) and retake policy are set by the training program, not by NCCER nationally.',
      'Performance profiles are assessed hands-on against inspection criteria — bead profile, penetration, fusion, porosity, undercut, distortion — and are pass/fail.',
      'Completed modules are recorded in the NCCER registry, the portable verification employers use.',
      'NCCER welding is one route; employers also recognise AWS certifications and code tests, which the curriculum can prepare you for.'
    ],
    afterwards:
      'After each module passes, your result is recorded in the NCCER registry — the portable, verifiable credential that follows you across employers and programs. There is no single graduation moment; the pathway completes when you finish the required welding levels, and for most welders the real value is the demonstrated ability the performance profiles prove, which employers trust more than the paper. The strongest next steps are to keep your coupon record and defect log, pursue the employer-recognised certification your program recommends (often an AWS-style code test), and present the credential alongside the actual welds in interviews and shop tryouts. If a module test falls short or a coupon is rejected, the rework is a normal part of the pathway, not a failure — read the inspection feedback, fix the defect pattern, and re-assess. The trade hires on demonstrated ability, and every reworked coupon is practice toward the code-quality welds that command the top of the pay range.'
  }
};

export default data;
