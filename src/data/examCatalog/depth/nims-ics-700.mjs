const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Emergency management & public-safety desk',
    bio: 'We cover FEMA training programs and the National Incident Management System curriculum. Format and fee facts come from FEMA Emergency Management Institute official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IS-700.b format, completion requirements and free online delivery against FEMA EMI official pages; verified BLS emergency-management wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'IS-700 is the NIMS baseline required across the response workforce: emergency management directors earned a $86,130 median in May 2024 (BLS)',
    summary: 'IS-700 (An Introduction to the National Incident Management System) is the doctrinal foundation of the NIMS training curriculum, and it is required or strongly preferred for a broad swath of the emergency-response workforce: emergency managers, first responders across fire, EMS and law enforcement, public works and utility staff, hospital emergency coordinators, and volunteers in emergency operations centers. Like the other FEMA independent-study courses, it is a training requirement rather than a job credential, so no BLS SOC code attaches to it directly; the salary story belongs to the occupations that embed it in their hiring and promotion standards. The reference occupation is emergency management directors (SOC 11-9161), whom BLS reported earning a median of $86,130 in May 2024, projected to grow 4 percent from 2024 to 2034. For the responder occupations that require the NIMS baseline, BLS reported firefighters (33-2011) at $59,530 and police and detectives at $77,270 in May 2024. The structural point is that NIMS compliance is not optional for most public agencies: the federal government conditions certain preparedness funding and grant programs on NIMS adoption, and state and local agencies embed IS-100, IS-200 and IS-700 in their training matrices, which makes the courses a de facto entry requirement for a very large workforce. BLS classifies workers by job duty, not training certificates, so completion does not map to a specific wage; it is the ticket into positions and promotion ladders whose medians BLS documents. For a candidate, completing IS-100, IS-200 and IS-700 in sequence is the standard free first step toward emergency-management, dispatch and disaster-response careers.',
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
    headline: 'IS-700.b requires a 75 percent passing score on a 25-question exam, with unlimited retakes (FEMA EMI)',
    summary: 'FEMA\u2019s Emergency Management Institute does not publish a national pass-rate statistic for IS-700.b, but the completion mechanics are public and identical in shape to the other NIMS courses. The course is delivered free online through the FEMA Independent Study website. The final exam consists of 25 multiple-choice questions, and the passing score is 75 percent, meaning at least 19 of 25 correct. Candidates who score below 75 percent may retake immediately, and FEMA permits unlimited retakes, with the course text available for review between attempts. There is no fee, no proctor, and no time limit on the course, and the exam is open-book in practice because candidates may study the text while working through questions. Completion is recorded in the candidate\u2019s FEMA Student Identification (SID) account, and the certificate is downloadable immediately after passing; it does not expire, though agencies may set refresher expectations. The content differs from IS-100 and IS-200: IS-700.b explains what NIMS is and why it exists - the doctrine for managing incidents across all levels of government and private sector partners - covering the five NIMS components (preparedness, communications and information management, resource management, command and management, and ongoing management and maintenance), the NIMS management characteristics, and the relationship between NIMS and the National Response Framework. Candidates should budget three to five hours to read the text and complete the exam. As with the other courses, the practical pass picture is that nearly everyone who completes the course passes, because the retake policy removes the risk of a single bad attempt.',
    source: { label: 'FEMA EMI Independent Study - IS-700.b', url: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-700.b' },
    caveat: 'FEMA does not publish pass rates; completion requires 75% on a 25-question open-book exam with unlimited retakes.'
  },
  studyPlan: {
    summary: 'IS-700.b is a self-paced online course that most learners complete in one or two sessions. The course text introduces the National Incident Management System as a whole: why NIMS was created (a standardized framework for all hazards, all levels of government, and private and nonprofit partners), the five components of NIMS (preparedness, communications and information management, resource management, command and management - which includes the Incident Command System - and ongoing management and maintenance), the 14 NIMS management characteristics, and the relationship between NIMS and the National Response Framework. A realistic plan: session one (2-3 hours) reads the full text and takes the final exam once; session two (1-2 hours, if needed) reviews the sections behind missed questions and retakes. Because IS-700 is the doctrine course in the trio, the deeper study is worth the extra hour for people who will work in emergency management: understand the difference between NIMS (the framework) and ICS (the on-scene command structure), know the five components by name, and be able to explain why resource management and communications standardization matter across jurisdictions. Most agencies require IS-100, IS-200 and IS-700 together, and completing all three within a week is the standard package; IS-700 can be taken in any order but is often taken first or last as the overview. Because the course is free and retakes are unlimited, the failure mode is not the exam but a shallow read that leaves the learner unable to explain NIMS to a colleague - which is precisely what the course is supposed to enable.',
    totalHours: '3-5 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Read and attempt', tasks: ['Read the full IS-700.b text', 'Take the 25-question final exam', 'Note missed questions'], hours: 2.5 },
      { label: 'Session 2 (if needed)', focus: 'Review and retake', tasks: ['Review sections behind missed items', 'Retake to 75%+', 'Download the certificate'], hours: 1.5 }
    ],
    variants: [
      { label: 'Any order in the trio', detail: 'IS-100, IS-200 and IS-700 form the standard NIMS baseline; IS-700 works as the overview taken first or last.' },
      { label: 'Grant and compliance context', detail: 'NIMS adoption is a condition of certain federal preparedness funding, which is why agencies require the courses.' }
    ]
  },
  prepStrategies: {
    summary: 'The effective IS-700.b strategy is to read for the big picture - what NIMS is and how its parts fit - rather than to memorize isolated facts. Strategy one: read the full text once with the lesson objectives as a checklist, because the exam maps to those objectives and the overview structure makes the learning objectives the best study guide. Strategy two: learn the five NIMS components by name and function (preparedness; communications and information management; resource management; command and management; ongoing management and maintenance) because a large share of items test component identification. Strategy three: be precise about the relationship between NIMS and ICS - NIMS is the framework, ICS is the on-scene command system within it - because items routinely probe the distinction. Strategy four: know the 14 management characteristics at a recognition level, especially common terminology, modular organization, unity of command, and span of control, which appear most frequently. Strategy five: understand the connection to the National Response Framework, because items ask how NIMS relates to federal response doctrine. Strategy six: take the exam after one full read, then use missed items as a targeted second-pass list and retake immediately; the unlimited-retake policy makes this the fastest path to the certificate, and the certificate in the SID transcript is what agencies verify. For people who will work in emergency management, adding the NIMS document (third edition) as free supplementary reading deepens the concepts the online course compresses.',
    items: [
      { title: 'Learn the five components', detail: 'Preparedness, comms/info, resources, command & management, maintenance.' },
      { title: 'Distinguish NIMS from ICS', detail: 'NIMS is the framework; ICS is the on-scene command structure.' },
      { title: 'Recognize the 14 characteristics', detail: 'Common terminology, modular organization, unity of command, span of control.' },
      { title: 'Connect to the National Response Framework', detail: 'Items test how NIMS relates to federal response doctrine.' }
    ]
  },
  resourceComparison: {
    summary: 'The IS-700.b resource market is almost entirely official and free. The FEMA EMI Independent Study course (IS-700.b) includes the full text, the exam and the certificate at no cost through the FEMA SID account, and it is the only authoritative preparation because the exam is drawn from its own material. The companion courses IS-100.c and IS-200.c are free and form the standard NIMS trio. The official NIMS document (third edition, free PDF) is the authoritative doctrine text and the best supplementary reading for anyone who wants depth beyond the course. For operational personnel, the classroom ICS-300 and ICS-400 courses (usually free for affiliated personnel but instructor-led) are the next step and cannot be replaced online. Commercial study guides and quiz sites exist at $10-$50 but add little: the exam is open-book, free to retake, and drawn from FEMA\u2019s own text, so the honest advice is to spend zero dollars and work the official course. The downloadable certificate plus the SID transcript satisfies nearly every agency requirement. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FEMA EMI IS-700.b course', values: ['Free', 'Online self-paced', 'Official text, exam, and certificate'] },
      { label: 'IS-100.c and IS-200.c', values: ['Free', 'Online self-paced', 'The standard NIMS trio'] },
      { label: 'NIMS (third edition)', values: ['Free PDF', 'Official doctrine', 'Depth on the framework'] },
      { label: 'Commercial study guides', values: ['$10-$50', 'Print/online', 'Usually unnecessary here'] },
      { label: 'State ICS-300/400 classroom', values: ['Free for affiliates (usually)', 'Instructor-led', 'Operational command practice'] }
    ],
    footnote: 'Prices dated 2025-26; FEMA courses are free and official. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common IS-700.b mistakes come from treating the course as trivia rather than doctrine. Mistake one: skipping the reading and answer-hunting online; the exam is drawn from the course text, and a certificate without understanding is worthless in an emergency operations center. Mistake two: confusing NIMS with ICS; items routinely test the difference, and candidates who blur the two miss the framework-vs-structure distinction that the whole course is built on. Mistake three: memorizing "five components" without knowing them; the exam asks which component covers resource tracking or communications, and recognition requires knowing the functions, not just the count. Mistake four: assuming the course is interchangeable with IS-100; IS-700 covers the whole NIMS framework while IS-100 covers ICS operations, and candidates who study only one miss items on the other\u2019s territory. Mistake five: skipping the NIMS/National Response Framework relationship; items ask how the framework and the response doctrine connect, and a shallow read leaves that gap. Finally, emergency managers who pass quickly without reading the NIMS document often struggle in the ICS-300 classroom and in real multi-agency operations, where the vocabulary must be second nature; the certificate opens the door, but the doctrine carries the work.',
    items: [
      { mistake: 'Answer-hunting instead of reading', fix: 'Read the text; the exam is drawn from its objectives.' },
      { mistake: 'Blurring NIMS and ICS', fix: 'NIMS is the framework; ICS is the command structure.' },
      { mistake: 'Knowing the count but not the components', fix: 'Learn each of the five components\u2019 functions.' },
      { mistake: 'Treating IS-700 as interchangeable with IS-100', fix: 'IS-700 is the framework overview; IS-100 is ICS operations.' },
      { mistake: 'Skipping the framework relationship', fix: 'Study how NIMS connects to the National Response Framework.' }
    ]
  },
  questionTypes: {
    summary: 'The IS-700.b final exam consists of 25 multiple-choice questions drawn from the course\u2019s learning objectives, with a passing score of 75 percent (19 of 25). Question topics cluster around the NIMS framework: the five NIMS components and their functions, the NIMS management characteristics (including common terminology, modular organization, unity of command, span of control), resource management concepts (resource typing, mutual aid), communications and information management (standardization, interoperability), and the relationship of NIMS to ICS and the National Response Framework. Most items are recognition or concept-application questions with four options. Samples below are editor-written illustrations of the published course objectives, not live exam items.',
    types: [
      { name: 'Five components', share: '~35% of items', detail: 'Component identification and function.' },
      { name: 'Management characteristics', share: '~25% of items', detail: 'Common terminology, unity of command, span of control.' },
      { name: 'Resource and communications management', share: '~20% of items', detail: 'Typing, mutual aid, interoperability.' },
      { name: 'NIMS, ICS and the NRF', share: '~20% of items', detail: 'Framework relationships and doctrine.' }
    ],
    samples: [
      {
        prompt: 'Which NIMS component includes the Incident Command System?',
        options: ['A. Preparedness', 'B. Communications and Information Management', 'C. Command and Management', 'D. Resource Management'],
        answer: 'C',
        explanation: 'The Command and Management component includes the Incident Command System, the Multiagency Coordination System, and public information systems.'
      },
      {
        prompt: 'Under NIMS, which principle means that each person reports to only one designated supervisor?',
        options: ['A. Common terminology', 'B. Unity of command', 'C. Modular organization', 'D. Span of control'],
        answer: 'B',
        explanation: 'Unity of command means each individual reports to a single designated supervisor, avoiding conflicting instructions.'
      },
      {
        prompt: 'What is the relationship between NIMS and the National Response Framework?',
        options: ['A. They are the same document', 'B. NIMS provides the doctrine for managing incidents; the NRF guides how the whole community responds', 'C. The NRF replaces NIMS at the federal level', 'D. NIMS applies only to private companies'],
        answer: 'B',
        explanation: 'NIMS is the framework for managing incidents consistently across all levels, while the National Response Framework describes how the whole community (federal, state, local, tribal, private and nonprofit) works together in response.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course objectives, not live exam items.'
  },
  examDay: {
    summary: 'IS-700.b has no physical exam day: the course is completed online through the FEMA Emergency Management Institute Independent Study website at any time. A candidate uses their FEMA Student Identification (SID) number to enroll, reads the course text in the browser, and takes the 25-question final exam online. There is no proctor, no fee, and no time limit on the course; the exam takes 20-40 minutes, and candidates may retake immediately if they score below 75 percent. A stable internet connection and a desktop or laptop browser are the only real requirements. After passing, the certificate is available instantly for download, and the completion is recorded in the candidate\u2019s SID transcript, which is how agencies verify the credential. Candidates should complete IS-700.b as part of the standard NIMS trio with IS-100.c and IS-200.c, and attach all three certificates to a training record or hiring package. Afterwards, for people building an emergency-management career, the next steps are the instructor-led ICS-300/400 courses through state emergency management agencies, which cannot be completed online, and reading the NIMS document for doctrinal depth.',
    bring: ['A FEMA Student Identification (SID) number', 'Stable internet connection and desktop browser', '3-5 hours of uninterrupted time', 'The course URL: training.fema.gov (IS-700.b)'],
    leave: ['Proctoring or fees - there are none', 'Special software beyond a standard browser', 'Deadlines - the course is self-paced'],
    timeline: [
      { time: 'Step 1', detail: 'Log in to EMI Independent Study with your SID.' },
      { time: 'Step 2', detail: 'Enroll in IS-700.b and read the full text (2-3 hours).' },
      { time: 'Step 3', detail: 'Take the 25-question final exam; 75% (19/25) passes.' },
      { time: 'Step 4', detail: 'Retake immediately if needed; download the certificate.' },
      { time: 'Step 5', detail: 'Complete IS-100.c and IS-200.c for the full NIMS baseline.' }
    ],
    rules: [
      'The course and exam are fully online and unproctored.',
      'Unlimited exam retakes; passing is 75% on 25 questions.',
      'Completion is recorded in the FEMA SID transcript.',
      'The certificate does not expire, though agencies may set refresher expectations.'
    ],
    afterwards: 'Download the certificate and record your SID; complete IS-100.c and IS-200.c for the NIMS trio, and register for classroom ICS-300/400 for operational command roles.'
  }
};

export default data;
