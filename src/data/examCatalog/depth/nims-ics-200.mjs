const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Emergency management & public-safety desk',
    bio: 'We cover FEMA training programs and incident-command coursework. Format and fee facts come from FEMA Emergency Management Institute official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IS-200.c format, completion requirements and free online delivery against FEMA EMI official pages; verified BLS emergency-management wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'ICS-200 builds the supervisory tier of the response workforce: emergency management directors earned a $86,130 median in May 2024 (BLS)',
    summary: 'ICS-200 (Basic Incident Command System for Initial Response) is the second rung of the National Incident Management System (NIMS) curriculum, and it is aimed at personnel who will supervise or work within an incident command organization during initial response - first-line supervisors, crew leaders, and operations staff across fire, EMS, law enforcement, public works and hospital emergency departments. Like ICS-100, it is a training requirement rather than a job credential, so no BLS SOC code attaches to it directly; the salary story belongs to the occupations that require it. The reference occupation is emergency management directors (SOC 11-9161), whom BLS reported earning a median of $86,130 in May 2024, projected to grow 4 percent from 2024 to 2034. For the responder occupations that sit under ICS-200, BLS reported firefighters (33-2011) at $59,530 and police and detectives at $77,270 in May 2024. The structural point is that ICS-200 is where the workforce starts to split from crew member to supervisor, and supervisory roles across the public-safety and emergency-management field carry higher medians and more promotion potential. BLS classifies workers by job duty rather than by training certificates, so completion of IS-200 does not map to a specific wage; it is a prerequisite that agencies embed in promotion criteria, hiring requirements, and deployment standards (the NIMS requirement for many state and local roles). For a candidate building an emergency-management career, completing IS-100, IS-200 and IS-700 in sequence is the standard free first step that qualifies for a wider set of positions and keeps the path open to ICS-300/400 classroom training and command roles.',
    rows: [
      { label: 'Emergency management directors median, May 2024', value: '$86,130', note: 'BLS OEWS, SOC 11-9161' },
      { label: 'Firefighters median, May 2024', value: '$59,530', note: 'BLS OEWS, SOC 33-2011' },
      { label: 'Police and detectives median, May 2024', value: '$77,270', note: 'BLS OEWS, SOC 33-3051' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Emergency management directors are projected to grow 4 percent from 2024 to 2034; protective-service employment about 3 percent.',
    source: { label: 'BLS Occupational Outlook Handbook - Emergency Management Directors', url: 'https://www.bls.gov/ooh/management/emergency-management-directors.htm' }
  },
  passRate: {
    headline: 'IS-200.c requires a 75 percent passing score on a 25-question exam, with unlimited retakes (FEMA EMI)',
    summary: 'FEMA\u2019s Emergency Management Institute does not publish a national pass-rate statistic for IS-200.c, but the completion mechanics mirror IS-100.c and are public. The course is delivered free online through the FEMA Independent Study website. The final exam consists of 25 multiple-choice questions, and the passing score is 75 percent, meaning at least 19 of 25 correct. Candidates who score below 75 percent may retake the exam immediately, and FEMA permits unlimited retakes; the course text remains available for review between attempts. There is no fee, no proctor, and no time limit on the course, and the exam is open-book in practice since candidates can study the course text while working through questions. Completion is recorded in the candidate\u2019s FEMA Student Identification (SID) account, and the certificate is downloadable immediately after passing; it does not expire, though agencies may set their own refresher expectations. As with IS-100.c, the practical pass picture is that nearly everyone who completes the course passes, because the retake policy removes the risk of a single bad attempt. The content is harder than IS-100: IS-200.c goes deeper into the ICS organization for initial response, covering the Incident Commander\u2019s role, Command and General Staff positions, the planning process, and managing an incident from start to demobilization, so candidates should budget four to six hours to read the text and complete the exam comfortably. The score that matters is the 75 percent threshold, and the certificate in the SID transcript is the record agencies verify.',
    source: { label: 'FEMA EMI Independent Study - IS-200.c', url: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-200.c' },
    caveat: 'FEMA does not publish pass rates; completion requires 75% on a 25-question open-book exam with unlimited retakes.'
  },
  studyPlan: {
    summary: 'IS-200.c is a self-paced online course that most learners complete in one or two sessions of focused reading. The course text runs longer than IS-100 and is organized around managing an initial response: it covers the roles of the Incident Commander and Command Staff, the activation and responsibilities of the General Staff sections (Operations, Planning, Logistics, Finance/Administration), the incident planning process and Incident Action Plans, the management of resources, and the progression from initial response to demobilization. A realistic plan: session one (2-3 hours) reads the full text and takes the final exam once; session two (1-2 hours, if needed) reviews the sections that produced missed questions and retakes the exam. For personnel who will actually supervise in an incident, the deeper learning is worth the extra hour: know the difference between incident command and area command, understand when to expand or contract the organization, and be able to describe the planning P and the operational period cycle, because these concepts reappear in the classroom ICS-300 course and in real operations. Most agencies pair IS-200.c with IS-100.c and IS-700.b, and completing all three within a week is the standard new-employee package. Because the course is free and retakes are unlimited, the failure mode is not the exam but a shallow read that leaves a supervisor unable to explain why an organization expanded or what an Incident Action Plan contains - questions that surface in real incidents and in promotion panels.',
    totalHours: '4-7 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Read and attempt', tasks: ['Read the full IS-200.c text', 'Take the 25-question final exam', 'Note missed questions'], hours: 3.5 },
      { label: 'Session 2 (if needed)', focus: 'Review and retake', tasks: ['Review sections behind missed items', 'Retake to 75%+', 'Download the certificate'], hours: 2 }
    ],
    variants: [
      { label: 'Supervisory context', detail: 'Personnel who will lead crews should study the planning process and organization-expansion concepts, which appear in ICS-300.' },
      { label: 'Paired with ICS-100 and IS-700', detail: 'The standard NIMS baseline is the trio; complete them in sequence over a week.' }
    ]
  },
  prepStrategies: {
    summary: 'The effective IS-200.c strategy is to read for understanding of how an initial response is managed, not to hunt for exam answers. Strategy one: read the course text once completely before opening the exam, and use the lesson objectives at the end of each lesson as a reading checklist, because the exam questions map to those objectives. Strategy two: master the organization chart - who fills Incident Commander, Command Staff (Public Information, Safety, Liaison) and General Staff (Operations, Planning, Logistics, Finance/Administration), and when each position is activated; a large share of items test this structure. Strategy three: learn the planning process and the operational period cycle, because IS-200 introduces the Incident Action Plan and the planning P, and questions probe both concepts. Strategy four: understand expansion and contraction - the ICS organization grows as the incident grows, and questions test when to activate sections and when to demobilize. Strategy five: connect the vocabulary to scenarios (a single-agency response vs a multi-agency incident, unified command), because scenario thinking is how the concepts become usable in the field and in interviews. Strategy six: take the exam after one full read, then use missed items as a targeted second-pass reading list and retake immediately; the unlimited-retake policy makes this the fastest path to the certificate, and the certificate in the SID transcript is what agencies verify.',
    items: [
      { title: 'Read with objectives as checklist', detail: 'Lesson objectives map to exam items; read against them.' },
      { title: 'Learn the org chart', detail: 'Command vs General Staff positions and activation triggers.' },
      { title: 'Master the planning process', detail: 'IAP and the operational period cycle are core IS-200 concepts.' },
      { title: 'Understand expansion and demobilization', detail: 'The organization grows with the incident and shrinks in demobilization.' }
    ]
  },
  resourceComparison: {
    summary: 'The IS-200.c resource market is almost entirely official and free. The FEMA EMI Independent Study course (IS-200.c) includes the full text, the exam and the certificate at no cost through the FEMA SID account, and it is the only authoritative preparation because the exam is drawn from its own material. The companion courses IS-100.c and IS-700.b are free and are the natural package, and the official NIMS document (third edition, free PDF) provides the doctrinal depth that the online course compresses. For personnel who need operational command practice, the classroom ICS-300 and ICS-400 courses offered by state emergency management agencies (usually free for affiliated personnel but instructor-led) are the next step and cannot be replaced by any online course. Commercial study guides and quiz sites exist and cost $10-$50, but they add little: the exam is open-book, free to retake, and drawn from FEMA\u2019s own text, so the honest advice is to spend zero dollars and work the official course. The downloadable certificate plus the SID transcript satisfies nearly every agency requirement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FEMA EMI IS-200.c course', values: ['Free', 'Online self-paced', 'Official text, exam, and certificate'] },
      { label: 'IS-100.c and IS-700.b', values: ['Free', 'Online self-paced', 'The standard NIMS package'] },
      { label: 'NIMS (third edition)', values: ['Free PDF', 'Official doctrine', 'Depth for field leaders'] },
      { label: 'Commercial study guides', values: ['$10-$50', 'Print/online', 'Usually unnecessary here'] },
      { label: 'State ICS-300/400 classroom', values: ['Free for affiliates (usually)', 'Instructor-led', 'Operational command practice'] }
    ],
    footnote: 'Prices dated 2025-26; FEMA courses are free and official. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common IS-200.c mistakes come from treating it as a harder version of IS-100 instead of a different subject: managing an initial response. Mistake one: skipping the reading and hunting for answers online; the exam is drawn from the course text, and the certificate carries no operational value if the terminology is not actually learned. Mistake two: confusing Command Staff with General Staff; items routinely test which positions report to the Incident Commander (Command Staff) versus which lead functional sections (General Staff). Mistake three: misremembering the planning process; IS-200 introduces the Incident Action Plan and the operational period cycle, and candidates who only studied IS-100\u2019s basics miss these items entirely. Mistake four: assuming the ICS organization is static; IS-200 tests when the organization expands (as complexity grows) and when sections demobilize, and a fixed org chart in the candidate\u2019s head fails those questions. Mistake five: stopping at IS-100 and skipping IS-200, then discovering that agencies require the full NIMS baseline; the trio (100, 200, 700) is the standard requirement. Finally, supervisors who pass quickly without scenario practice often struggle in the ICS-300 classroom, where instructors probe the reasoning behind organizational decisions rather than asking for definitions; the certificate opens the door, but the concepts carry the field work.',
    items: [
      { mistake: 'Answer-hunting instead of reading', fix: 'Read the text; the exam is drawn from its objectives.' },
      { mistake: 'Confusing Command and General Staff', fix: 'Command Staff advise the IC; General Staff lead sections.' },
      { mistake: 'Skipping the planning process', fix: 'Study the IAP and operational period cycle.' },
      { mistake: 'Treating the org chart as fixed', fix: 'Learn expansion and demobilization triggers.' },
      { mistake: 'Stopping at IS-100', fix: 'Complete the trio: 100, 200, 700.' }
    ]
  },
  questionTypes: {
    summary: 'The IS-200.c final exam consists of 25 multiple-choice questions drawn from the course\u2019s learning objectives, with a passing score of 75 percent (19 of 25). Question topics cluster around managing initial response: the Incident Commander\u2019s role and authority, Command Staff and General Staff positions and activation, the incident planning process and Incident Action Plan, resource management, organizational expansion and contraction, and unified command across agencies. Most items are concept-application questions presenting a scenario or a definition with four options. Samples below are editor-written illustrations of the published course objectives, not live exam items.',
    types: [
      { name: 'Organization and staffing', share: '~35% of items', detail: 'Position roles, activation, Command vs General Staff.' },
      { name: 'Planning process', share: '~25% of items', detail: 'Incident Action Plan, operational period, planning P.' },
      { name: 'Expansion and demobilization', share: '~20% of items', detail: 'When the organization grows and when it contracts.' },
      { name: 'Unified command and multi-agency', share: '~20% of items', detail: 'Coordinating across agencies and jurisdictions.' }
    ],
    samples: [
      {
        prompt: 'At an expanding incident, the Incident Commander decides to activate the Planning Section. What is the primary responsibility of the Planning Section Chief?',
        options: ['A. Directing tactical operations on scene', 'B. Collecting, evaluating and displaying incident information', 'C. Procuring supplies and equipment', 'D. Serving as the public information point of contact'],
        answer: 'B',
        explanation: 'Planning is responsible for collecting, evaluating and disseminating incident information and for maintaining the Incident Action Plan; Operations directs tactics, Logistics procures resources, and Public Information handles external messaging.'
      },
      {
        prompt: 'Which statement best describes the purpose of an Incident Action Plan?',
        options: ['A. It is a legal contract between responding agencies', 'B. It states objectives for the operational period and the tactics to achieve them', 'C. It is a payroll record for responders', 'D. It replaces the agency\u2019s emergency plan permanently'],
        answer: 'B',
        explanation: 'The IAP states the incident objectives for a specific operational period and the strategies, tactics and resources needed to achieve them; it is period-specific, not permanent or contractual.'
      },
      {
        prompt: 'Two jurisdictions are responding to a wildfire that crosses a county line. Which structure should be used?',
        options: ['A. A single Incident Commander from the larger county', 'B. Unified command with jointly established objectives', 'C. Separate plans run independently', 'D. The state assumes command over both counties'],
        answer: 'B',
        explanation: 'When multiple jurisdictions share an incident, unified command lets all agencies participate in command under one set of jointly developed objectives without any single agency dominating.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course objectives, not live exam items.'
  },
  examDay: {
    summary: 'IS-200.c has no physical exam day: the course is completed online through the FEMA Emergency Management Institute Independent Study website at any time. A candidate uses their FEMA Student Identification (SID) number to enroll, reads the course text in the browser, and takes the 25-question final exam online. There is no proctor, no fee, and no time limit on the course; the exam itself takes 20-40 minutes, and candidates may retake it immediately if they score below 75 percent. A stable internet connection and a desktop or laptop browser are the only real requirements. After passing, the certificate is available instantly for download, and the completion is recorded in the candidate\u2019s SID transcript, which is how agencies verify the credential. Candidates should complete IS-200.c right after IS-100.c and then IS-700.b, and attach all three certificates to a training record or hiring package. Afterwards, for personnel who will supervise in incidents, the next step is the instructor-led ICS-300 course offered through state emergency management agencies, which builds on IS-200\u2019s concepts and cannot be completed online; candidates should register through their agency\u2019s training office.',
    bring: ['A FEMA Student Identification (SID) number', 'Stable internet connection and desktop browser', '4-7 hours of uninterrupted time', 'The course URL: training.fema.gov (IS-200.c)'],
    leave: ['Proctoring or fees - there are none', 'Special software beyond a standard browser', 'Deadlines - the course is self-paced'],
    timeline: [
      { time: 'Step 1', detail: 'Log in to EMI Independent Study with your SID.' },
      { time: 'Step 2', detail: 'Enroll in IS-200.c and read the full text (2-3 hours).' },
      { time: 'Step 3', detail: 'Take the 25-question final exam; 75% (19/25) passes.' },
      { time: 'Step 4', detail: 'Retake immediately if needed; download the certificate.' },
      { time: 'Step 5', detail: 'Complete IS-700.b; register for classroom ICS-300 if supervising.' }
    ],
    rules: [
      'The course and exam are fully online and unproctored.',
      'Unlimited exam retakes; passing is 75% on 25 questions.',
      'Completion is recorded in the FEMA SID transcript.',
      'The certificate does not expire, though agencies may set refresher expectations.'
    ],
    afterwards: 'Download the certificate and record your SID; complete IS-700.b for the NIMS baseline, and register for instructor-led ICS-300 through your agency for supervisory roles.'
  }
};

export default data;
