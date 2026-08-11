const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Emergency management & public-safety desk',
    bio: 'We cover FEMA training programs and incident-command coursework. Format and fee facts come from FEMA Emergency Management Institute official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IS-100.c format, completion requirements and free online delivery against FEMA EMI official pages; verified BLS emergency-management wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'ICS-100 is a required baseline for many emergency-response roles: emergency management directors earned a $86,130 median in May 2024 (BLS)',
    summary: 'ICS-100 (Introduction to the Incident Command System) is not a job credential; it is a training requirement that sits at the base of the National Incident Management System (NIMS) curriculum, and it is required for a very broad set of people: firefighters, law enforcement officers, emergency medical personnel, public works staff, hospital emergency coordinators, and volunteers who work in emergency operations centers. Because the requirement spans occupations, the salary story is told through the occupations that require it rather than through the course itself. The clearest reference occupation is emergency management directors (SOC 11-9161), whom BLS reported earned a median annual wage of $86,130 in May 2024, with the occupation projected to grow by 4 percent from 2024 to 2034; BLS describes the role as planning and coordinating responses to disasters and emergencies. For responders, BLS reported firefighters (33-2011) at a $59,530 median in May 2024, and police and detectives at $77,270. The pattern matters: ICS-100 costs nothing, takes a few hours, and is a prerequisite or strongly preferred requirement in hiring and promotion processes across the public-safety and emergency-management world. BLS classifies workers by job duty rather than by training certificates, so no course completion maps to a specific wage; the value of the course is that it unblocks the occupational pipeline, and the wage that follows belongs to the job, not the course. For a new entrant, completing IS-100, IS-200, and IS-700 is the standard free first step toward positions in emergency operations centers, dispatch, and disaster-response contracting.',
    rows: [
      { label: 'Emergency management directors median, May 2024', value: '$86,130', note: 'BLS OEWS, SOC 11-9161' },
      { label: 'Firefighters median, May 2024', value: '$59,530', note: 'BLS OEWS, SOC 33-2011' },
      { label: 'Police and detectives median, May 2024', value: '$77,270', note: 'BLS OEWS, SOC 33-3051' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Emergency management directors are projected to grow 4 percent from 2024 to 2034; protective-service employment is projected to grow about 3 percent.',
    source: { label: 'BLS Occupational Outlook Handbook - Emergency Management Directors', url: 'https://www.bls.gov/ooh/management/emergency-management-directors.htm' }
  },
  passRate: {
    headline: 'IS-100.c requires a 75 percent passing score on a 25-question exam, with unlimited retakes (FEMA EMI)',
    summary: 'FEMA\u2019s Emergency Management Institute does not publish a national pass-rate statistic for IS-100.c, but the completion mechanics are public and simple. The course is delivered free online through the FEMA Independent Study website. The exam consists of 25 multiple-choice questions, and the passing score is 75 percent, meaning a candidate must answer at least 19 of 25 correctly. If a candidate does not pass, they can retake the exam immediately - FEMA permits unlimited retakes of the final exam, and the system allows review of the course material between attempts. There is no fee, no proctoring, no time limit on the course itself, and the exam is open-book in practice because candidates may study the course text while working through questions. Completion is recorded in the candidate\u2019s FEMA Student Identification (SID) account, and the certificate of completion is downloadable as a PDF immediately after passing; it is valid indefinitely and does not expire (although employers and agencies may set their own refresher expectations). The practical pass-rate picture is that nearly everyone who completes the course passes, because the retake policy removes the risk of a single bad attempt, and the material is designed for a general audience. The score that matters to most users is the 75 percent threshold, and candidates should budget roughly three to four hours to read the course and take the exam comfortably, though FEMA lists no formal seat time. For state and local agencies that require ICS-100 for employment or promotion, the completion certificate in the SID account is the record that satisfies the requirement.',
    source: { label: 'FEMA EMI Independent Study - IS-100.c', url: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-100.c' },
    caveat: 'FEMA does not publish pass rates; completion requires 75% on a 25-question open-book exam with unlimited retakes.'
  },
  studyPlan: {
    summary: 'IS-100.c is a self-paced online course that most learners complete in one or two sessions, so a study plan is less about time than about learning the Incident Command System\u2019s core ideas well enough to use them in the field and to pass the 25-question exam. The course text runs roughly 60-70 pages of reading across five lessons: the course introduces the ICS organization, the command and general staff positions, the common terminology used across agencies, the principles of unity of command and span of control, and the relationships among ICS, NIMS and the National Response Framework. A realistic plan: session one (90-120 minutes) reads the full course text and takes the final exam once; session two (60-90 minutes, if needed) reviews the sections that produced missed questions and retakes the exam. For people who will actually operate in an incident command environment, the deeper study is worth doing: learn the five functional areas (Command, Operations, Planning, Logistics, Finance/Administration), the concept of a single Incident Commander with a manageable span of control (typically 3-7, ideally 5), and the difference between an Incident Action Plan and an operational period briefing. Many agencies pair IS-100 with IS-200 (Basic Incident Command System for Initial Response) and IS-700 (NIMS introduction), and taking all three in sequence over a week is the standard new-employee package. Because the course is free and retakes are unlimited, the failure mode is not passing the exam but rushing through the text and missing the concepts that the field expects you to know.',
    totalHours: '3-5 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Read and attempt', tasks: ['Read the full IS-100.c course text', 'Take the 25-question final exam', 'Note missed questions'], hours: 2.5 },
      { label: 'Session 2 (if needed)', focus: 'Review and retake', tasks: ['Review the sections behind missed items', 'Retake the final exam to 75%+', 'Download the certificate'], hours: 1.5 }
    ],
    variants: [
      { label: 'Paired with IS-200 and IS-700', detail: 'Most agencies expect the trio; completing all three in a week is standard.' },
      { label: 'Classroom delivery', detail: 'Some departments teach ICS-100 in person; the FEMA online course remains the universal record.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategy for IS-100.c is to read the course text actively rather than hunting for answer patterns, because the exam questions are drawn directly from the lesson objectives and the concepts appear on later courses (IS-200, IS-700) and in field operations. Strategy one: read the text once completely before opening the exam, then take the exam immediately; the questions map closely to the learning objectives at the end of each lesson, so writing down the objectives as a reading checklist focuses attention on exactly what will be asked. Strategy two: learn the standard ICS vocabulary cold - terms such as Incident Commander, Command Staff, General Staff, span of control, unity of command, chain of command, Incident Action Plan, and the five functional sections - because a large share of questions test terminology. Strategy three: know the rules-of-thumb numbers: span of control of 3-7 with 5 as ideal, the five functional areas, and the principle that the Incident Commander is the only position always staffed. Strategy four: practice on the official FEMA final exam after one read-through, then use your missed items as a second-pass reading list; because retakes are unlimited, a second attempt after targeted review is how most people finish comfortably. Strategy five: for field users, connect each concept to a scenario (a car fire, a hazmat release, a multi-agency incident), because ICS makes sense only as a coordination system, and scenario thinking converts vocabulary into working knowledge that also serves the practical interviews that follow in many hiring processes.',
    items: [
      { title: 'Read before you open the exam', detail: 'Questions mirror the lesson objectives; use them as a checklist.' },
      { title: 'Learn the terminology cold', detail: 'Incident Commander, Command/General Staff, span of control, IAP.' },
      { title: 'Memorize the numbers', detail: 'Span of control 3-7 (ideal 5); five functional areas; one IC always staffed.' },
      { title: 'Retake after targeted review', detail: 'Unlimited retakes; use missed items as your second-pass list.' }
    ]
  },
  resourceComparison: {
    summary: 'The IS-100.c resource market is almost entirely official and free, which removes cost from the decision. The primary resource is the FEMA EMI Independent Study course itself (IS-100.c), which includes the full course text, the final exam, and the certificate, all free through the FEMA SID account. The FEMA EMI website also hosts IS-200.c, IS-700.b and the rest of the NIMS curriculum, all free, which is the natural next step for anyone who needs the full package. For deeper learning, the official NIMS document (NIMS, third edition) and the ICS 300/400 classroom courses offered by state emergency management agencies provide the operational depth that online courses cannot; those classroom courses are usually free for affiliated personnel but require instructor-led delivery. Commercial prep sites and study guides exist and cost $10-$50, but they add little beyond the official text because the exam is open-book, free to retake, and drawn from FEMA\u2019s own material; the honest advice is to spend zero dollars and simply work through the official course. For candidates who want a paper trail, the downloadable completion certificate and the SID transcript satisfy almost every employer requirement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FEMA EMI IS-100.c course', values: ['Free', 'Online self-paced', 'The official text, exam, and certificate'] },
      { label: 'IS-200.c and IS-700.b', values: ['Free', 'Online self-paced', 'The standard companion courses'] },
      { label: 'NIMS (third edition) document', values: ['Free PDF', 'Official doctrine', 'Conceptual depth for field users'] },
      { label: 'Commercial study guides', values: ['$10-$50', 'Print/online', 'Usually unnecessary for this course'] },
      { label: 'State ICS-300/400 classroom', values: ['Free for affiliates (usually)', 'Instructor-led', 'Operational incident-command practice'] }
    ],
    footnote: 'Prices dated 2025-26; FEMA courses are free and official. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistake on IS-100.c is treating it as a trivia exam and skipping the reading, which produces a pass on the certificate but gaps in the terminology that later courses and field operations assume. Mistake two: confusing ICS with the chain of command of a single agency; ICS is a coordination structure that brings multiple agencies under one Incident Commander, and the exam tests that distinction directly. Mistake three: memorizing "five" without knowing which five - the five functional areas (Command, Operations, Planning, Logistics, Finance/Administration) are the recurring test subject. Mistake four: forgetting that the Incident Commander is the only position always staffed, even in the smallest incidents; questions routinely probe this. Mistake five: misreading span of control; the rule is 3-7 subordinates with 5 as the ideal, not a fixed number. Mistake six: skipping IS-700 and assuming IS-100 alone satisfies NIMS compliance; most agencies require the full NIMS baseline, and candidates who show up with only IS-100 delay their own onboarding. Finally, emergency responders should not rush the course on a phone during a shift and assume the certificate will stand up in a hiring review; the SID record is verifiable, but the knowledge will be probed in interviews and in the ICS-300 classroom, and a shallow pass shows quickly.',
    items: [
      { mistake: 'Skipping the course text', detail: 'The exam maps to the lessons; skipping creates terminology gaps.' },
      { mistake: 'Confusing ICS with one agency\u2019s chain', detail: 'ICS coordinates multiple agencies under one Incident Commander.' },
      { mistake: 'Forgetting the five functional areas', detail: 'Command, Operations, Planning, Logistics, Finance/Administration.' },
      { mistake: 'Misremembering span of control', detail: '3-7 subordinates, 5 ideal - not a fixed number.' },
      { mistake: 'Stopping at IS-100 alone', detail: 'Most agencies require the NIMS trio (100, 200, 700).' }
    ]
  },
  questionTypes: {
    summary: 'The IS-100.c final exam consists of 25 multiple-choice questions drawn from the course\u2019s learning objectives, and the passing score is 75 percent (19 of 25). Question topics recur across five categories: ICS organization (who does what, the Command and General Staff positions), ICS terminology (common terminology across agencies), principles (unity of command, chain of command, span of control, unified command), the five functional areas and their responsibilities, and the relationship of ICS to NIMS and the National Response Framework. Most questions are concept-application items: a scenario or a definition followed by four options. Samples below are editor-written illustrations of the published course objectives, not live exam items.',
    types: [
      { name: 'ICS organization', share: '~30% of items', detail: 'Position roles, Command vs General Staff, who reports to whom.' },
      { name: 'Terminology and principles', share: '~30% of items', detail: 'Unity of command, chain of command, span of control.' },
      { name: 'Functional areas', share: '~25% of items', detail: 'The five sections and their responsibilities.' },
      { name: 'NIMS/ICS relationship', share: '~15% of items', detail: 'How ICS fits within NIMS and the National Response Framework.' }
    ],
    samples: [
      {
        prompt: 'Which position is always staffed in an Incident Command System organization, regardless of the size of the incident?',
        options: ['A. Operations Section Chief', 'B. Incident Commander', 'C. Public Information Officer', 'D. Logistics Section Chief'],
        answer: 'B',
        explanation: 'The Incident Commander is the only position always staffed; other positions are added as the incident requires.'
      },
      {
        prompt: 'The Incident Commander has five units reporting directly to her. Which ICS principle does this most directly satisfy?',
        options: ['A. Unity of command', 'B. Span of control', 'C. Chain of command', 'D. Common terminology'],
        answer: 'B',
        explanation: 'Span of control describes the number of subordinates one supervisor can effectively manage (typically 3-7, ideally 5); five direct reports fits that rule.'
      },
      {
        prompt: 'A county sheriff and a city fire chief are both on scene at a large fire. Under unified command, what happens?',
        options: ['A. The sheriff appoints the fire chief to lead', 'B. One agency takes full control based on size', 'C. They jointly establish a single set of incident objectives', 'D. Each agency runs its own plan independently'],
        answer: 'C',
        explanation: 'Unified command means multiple agencies work together under one Incident Commander structure and jointly develop a single set of objectives, without one agency dominating.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course objectives, not live exam items.'
  },
  examDay: {
    summary: 'IS-100.c has no physical exam day: the entire course is completed online through the FEMA Emergency Management Institute Independent Study website at any time. To begin, a candidate creates a FEMA Student Identification (SID) number, enrolls in IS-100.c, reads the course text in the browser, and takes the 25-question final exam online. There is no proctor, no fee, and no time limit on the course; the exam itself should take 20-40 minutes, and candidates may retake it immediately if they score below 75 percent. A stable internet connection and a desktop or laptop browser are the only real requirements (the course works poorly on small phone screens). After passing, the certificate of completion is available instantly for download, and the completion is recorded in the candidate\u2019s SID transcript. Candidates who need proof for an employer or agency should download the certificate and note their SID, because agencies verify completions through the FEMA transcript rather than accepting screenshots of a course page. The natural sequence for most candidates is to complete IS-100.c, IS-200.c, and IS-700.b in the same week and attach all three certificates to a hiring package or training record. Afterwards, the candidate should register for IS-200.c (Basic Incident Command System for Initial Response) to continue the NIMS pathway, and file the completion in the same SID transcript used for any future FEMA coursework, since the transcript accumulates all independent-study completions.',
    bring: ['A FEMA Student Identification (SID) number', 'Stable internet connection and a desktop browser', 'About 3-4 hours of uninterrupted time', 'The course URL: training.fema.gov (IS-100.c)'],
    leave: ['Proctoring or fees - there are none', 'Special software beyond a standard browser', 'Deadlines - the course is self-paced'],
    timeline: [
      { time: 'Step 1', detail: 'Create a FEMA SID and log in to the EMI Independent Study site.' },
      { time: 'Step 2', detail: 'Enroll in IS-100.c and read the full course text (90-120 minutes).' },
      { time: 'Step 3', detail: 'Take the 25-question final exam; 75% (19/25) is passing.' },
      { time: 'Step 4', detail: 'Retake immediately if needed; download the certificate.' },
      { time: 'Step 5', detail: 'Continue to IS-200.c and IS-700.b for the full NIMS baseline.' }
    ],
    rules: [
      'The course and exam are fully online and unproctored.',
      'Unlimited exam retakes; passing is 75% on 25 questions.',
      'Completion is recorded in the FEMA SID transcript.',
      'The certificate does not expire, though agencies may set refresher expectations.'
    ],
    afterwards: 'Download the certificate and record your SID; most agencies verify through the FEMA transcript. Complete IS-200.c and IS-700.b to satisfy the standard NIMS requirement set.'
  }
};

export default data;
