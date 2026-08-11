const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Office productivity & desktop-applications desk',
    bio: 'We cover Microsoft Office Specialist certifications. Format and fee facts come from Microsoft/Certiport official pages and are revised; wage figures come from the BLS occupational series named by code. Microsoft publishes no pass rates for MOS exams, which we state plainly.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MOS Outlook Associate (MO-400) exam structure, objective groups, scoring and fees against Microsoft Learn and Certiport pages; verified BLS wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'MOS Outlook Associate evidences practical email and calendar skill: secretaries and administrative assistants earned a $47,460 median in May 2024 (BLS)',
    summary: 'The Microsoft Office Specialist (MOS) Outlook Associate certification evidences hands-on proficiency with Microsoft Outlook - managing messages, calendars, contacts and tasks - which is among the most demanded software skills across office occupations. It is a vendor certification, not a job license, so no single BLS SOC code attaches to it; the salary story belongs to the office and administrative occupations that use Outlook daily. BLS reported that secretaries and administrative assistants, except legal, medical and executive (SOC 43-6014), earned a median of $47,460 in May 2024, with about 3,453,100 jobs and roughly 358,300 openings projected per year over 2024-2034; roles that list Outlook and calendar-management proficiency - administrative assistants, coordinators, executive assistants and office staff - sit in and around this range, and email and calendar fluency is a common differentiator in hiring at the entry level. The structural point is that the certification is one of the most widely recognized software credentials, issued by Microsoft through Certiport, and it is commonly completed by students and early-career workers to evidence a skill that most employers assume but few can verify; it also feeds directly into job-readiness programs and is a standard requirement or bonus in many administrative and analyst job postings. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the verifiable signal in a market where email and calendar management are near-universal requirements. The exam is performance-based (the candidate completes tasks in the actual Outlook application), costs about $100 (with discounts through schools and programs), and pairs with the Word, Excel and PowerPoint Associate exams for the full MOS Associate certification. The honest caveat: the MOS credential does not expire, but BLS projects little or no change in the secretarial occupation through 2034, so the certification is a hiring signal rather than a gateway to a growing occupation.',
    rows: [
      { label: 'Secretaries and administrative assistants median, May 2024', value: '$47,460', note: 'BLS OEWS, SOC 43-6014' },
      { label: 'Employment, 2024', value: '3,453,100 jobs', note: 'BLS OOH, Secretaries and Administrative Assistants' },
      { label: 'Projected annual openings', value: '~358,300 per year', note: 'BLS OOH 2024-2034, mostly replacement demand' },
      { label: 'MOS exam delivery', value: 'Performance-based in Outlook', note: 'Certiport/Microsoft' }
    ],
    growth: 'BLS projects little or no change in secretaries and administrative assistants employment (2024-2034), with large replacement-driven openings each year; verifiable software skill remains a hiring differentiator.',
    source: { label: 'BLS Occupational Outlook Handbook - Secretaries and Administrative Assistants', url: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm' }
  },
  passRate: {
    headline: 'MOS Outlook Associate requires a passing score of 700 on a 1000-point scale; Microsoft publishes no pass rates',
    summary: 'Microsoft and Certiport do not publish pass rates for MOS exams, including Outlook Associate, but the assessment mechanics are public. The MOS Outlook Associate exam (MO-400, Office 2019; the Microsoft 365 Apps version is MO-410) is a performance-based test: candidates complete tasks in the actual Outlook application while the exam software records their actions, with roughly 30-40 tasks across projects (the exact task count is stated in the exam objectives and can vary); the time allowance is about 50 minutes, and the passing score is 700 on a 1000-point scale. Because the exam is performance-based, candidates must know where features live and how to complete the required actions in Outlook, not just recall concepts; the exam covers four objective groups published by Microsoft with their approximate weights: manage Outlook settings and processes (15-20 percent), manage messages (30-35 percent), manage schedules (30-35 percent), and manage contacts and tasks (15-20 percent). The exam is delivered by Certiport through authorized testing centers and online with proctoring, typically costs about $100 (schools and workforce programs often offer discounted or free vouchers), and candidates who do not pass may retake after a 24-hour waiting period on the first retake, with subsequent retake rules varying by Certiport policy. The MOS credential does not expire, which makes it a durable resume line. The honest summary is that the passing bar is 700/1000 on a performance-based exam of about 50 minutes, the published objectives document is the authoritative preparation blueprint, and no pass-rate statistics are published for any MOS exam.',
    source: { label: 'Microsoft Learn - MOS Outlook Associate (Office 2019)', url: 'https://learn.microsoft.com/en-us/certifications/mos-outlook-2019/' },
    caveat: 'Microsoft publishes no pass rates. The exam requires 700/1000, is performance-based in Outlook, and allows about 50 minutes.'
  },
  studyPlan: {
    summary: 'A realistic MOS Outlook Associate plan runs 15-30 hours over 2-4 weeks for someone with everyday Outlook experience, and 30-45 hours for a beginner. The exam is performance-based, so preparation is about completing tasks in the real application. Week 1: take a baseline - work through the published objectives document (the four objective groups) and complete a practice project to see where you stand; most candidates discover gaps in features they rarely use (advanced message rules, calendar sharing, contact groups, and tasks). Weeks 2-3: work through the objectives with hands-on practice - create practice mailboxes and calendars that exercise each objective group, using the free Microsoft Learn training modules and the Certiport practice tests; the key is doing the actions, not reading about them. Week 4: complete the official practice test (Certiport\u2019s GMetrix practice exams, roughly $20-30) under timed conditions, drill the exposed gaps, and take the real exam. The four objective groups: manage Outlook settings and processes (customizing the display, accounts, automatic replies, search folders, print and save options); manage messages (creating and formatting messages, attachments, CC/BCC, @mentions, replies and forwards, message flags, folders, rules and categories); manage schedules (calendar work times, multiple calendars, appointments, meetings and events, recurring items, the scheduling assistant, and invitations); and manage contacts and tasks (contact records and groups, importing contacts, and creating and managing tasks). Candidates who pass Outlook Associate can add Word, Excel and PowerPoint Associate exams to complete the full MOS Associate certification, which requires passing three of the four; the Outlook exam is a natural third exam for candidates who already hold two Associate credentials, because its objective groups are self-contained and the message and calendar content is distinct from the document and spreadsheet skills the other exams test.',
    totalHours: '15-45 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline and objectives', tasks: ['Review the published objectives for the four groups', 'Practice project to find gaps'], hours: 6 },
      { label: 'Weeks 2-3', focus: 'Hands-on objective practice', tasks: ['Practice mailboxes and calendars per objective group', 'Messages, schedules, contacts, tasks and settings'], hours: 20 },
      { label: 'Week 4', focus: 'Practice test and real exam', tasks: ['GMetrix practice test', 'Drill gaps; take the real exam'], hours: 8 }
    ],
    variants: [
      { label: 'Beginner path', detail: 'Add 1-2 weeks of daily Outlook practice before the formal plan if the baseline is weak.' },
      { label: 'MOS Associate bundle', detail: 'Pass Outlook plus two other Associate exams (Word, Excel, PowerPoint) to earn the full MOS Associate certification.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective MOS Outlook strategies are hands-on and objective-driven. Strategy one: practice in the real Outlook application exclusively, because the exam records your actions in the software and rewards knowing exactly where features live; candidates who study screenshots or videos without doing the actions underperform on the timed projects. Strategy two: use the published objectives document as the checklist - Microsoft publishes the four objective groups with the specific skills tested, and every exam task maps to an objective; working through the checklist systematically is the highest-return preparation. Strategy three: master the message-management cluster, because manage messages carries 30-35 percent of the exam and covers creating, formatting, replying, forwarding, categorizing, flagging and applying rules; candidates who under-prepare this cluster lose the largest share of the exam. Strategy four: learn the calendar and scheduling features (30-35 percent of the exam) - appointments, meetings, recurring items, the scheduling assistant, multiple calendars and responding to invitations - because these are the features candidates use least in everyday work and the most common gap. Strategy five: use the Certiport practice tests (GMetrix) for the final week, because they replicate the performance-based format and the timing, and they are the closest predictor of readiness. Strategy six: manage the 50-minute clock by skipping difficult tasks and returning to them, since the exam scores completed tasks; finishing the projects beats perfecting one. A further high-yield tactic is to practice the settings and processes group deliberately, because managing Outlook settings, search folders, automatic replies and signatures are discrete, coachable tasks that many candidates have never used.',
    items: [
      { title: 'Practice in the real app', detail: 'The exam records your actions; interface fluency is the score.' },
      { title: 'Work the objectives checklist', detail: 'Every task maps to a published objective.' },
      { title: 'Master the message cluster', detail: 'Manage messages is 30-35% of the exam; drill formatting, rules and categories.' },
      { title: 'Learn the calendar features', detail: 'Appointments, meetings, recurring items and the scheduling assistant are the common gap.' },
      { title: 'Use GMetrix for the final week', detail: 'It replicates the performance format and timing.' }
    ]
  },
  resourceComparison: {
    summary: 'The MOS Outlook resource market has a clear official core and modest paid options. The Microsoft Learn training modules for MO-400 are free and map to the objectives; Microsoft also publishes the free objectives document that is the exam blueprint, and both are the authoritative starting point because every exam task maps to a published objective. Hands-on practice requires only Outlook (a Microsoft 365 subscription or a work/school account covers the full desktop application, which the exam tests), and candidates should practice in the desktop app specifically because the exam uses the desktop application rather than the web version. The Certiport practice tests (GMetrix) cost about $20-30 and are the closest match to the performance-based format; they are the standard paid purchase and for a performance-based exam they are close to essential, because the project format and the 50-minute clock are best experienced in rehearsal. Commercial MOS prep books ($20-$40) and courses ($100-$500) add structure and practice projects, and their value is practice volume rather than unique content; the Outlook-specific editions are the ones to choose, because the general office-productivity courses do not cover the MO-400 objective groups. The exam fee itself is about $100 (with frequent discounts through schools, libraries and workforce programs - candidates should check with their school or local workforce center for free or discounted vouchers, which is the largest saving available). The honest ranking: free Microsoft Learn modules and the objectives document, Outlook desktop practice, the GMetrix practice test, and a course only for structure. Prices here are current as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn MO-400 modules', values: ['Free', 'Online', 'Objectives-aligned instruction'], note: '' },
      { label: 'Outlook desktop practice', values: ['Subscription or existing', 'Desktop app', 'The practice surface (exam uses the desktop app)'], note: '' },
      { label: 'Certiport GMetrix practice tests', values: ['$20-30', 'Online', 'Performance-format rehearsal'], note: '' },
      { label: 'Commercial prep book/course', values: ['$20-500', 'Print/online', 'Practice volume and structure'], note: '' }
    ],
    footnote: 'Prices dated mid-2026; the MOS exam fee is ~$100 with frequent school/workforce discounts. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common MOS Outlook mistakes come from studying instead of doing. Mistake one: reading about Outlook or watching videos without completing tasks in the application; the exam is performance-based, and candidates who cannot navigate the ribbon and dialog boxes quickly run out of time. Mistake two: skipping the published objectives; candidates who practice what they already know miss the obscure-but-tested features (e.g., search folders, automatic replies, advanced calendar options, contact groups) that the objectives list. Mistake three: under-preparing the message-management cluster, which carries 30-35 percent of the exam; candidates who recognize the ribbon but cannot build rules, categories or signatures from scratch lose the largest share of the exam. Mistake four: ignoring the calendar and scheduling features, which also carry 30-35 percent and are the cluster everyday users touch least; candidates who have never used the scheduling assistant or recurring meetings fail those projects outright. Mistake five: ignoring the timing; the 50-minute clock with multiple projects rewards skipping and returning, and candidates who perfect the first project fail to finish. Mistake six: practicing in Outlook on the web only; the exam uses the desktop application, and feature locations differ, so a candidate fluent in Outlook for the web can be lost in the desktop ribbon. Finally, candidates should take at least one GMetrix practice test before the real exam, because the performance format is best experienced in rehearsal; candidates who skip the rehearsal tend to mis-pace the projects on exam day even when they know the features, because the task transitions and the clock behave differently than they expect.',
    items: [
      { mistake: 'Studying without doing', fix: 'Complete tasks in the real desktop Outlook application.' },
      { mistake: 'Skipping the objectives', fix: 'Work the published objective groups as a checklist.' },
      { mistake: 'Under-preparing messages', fix: 'Drill rules, categories, signatures and message formatting; it is 30-35% of the exam.' },
      { mistake: 'Ignoring calendars and contacts', fix: 'Practice the scheduling assistant, recurring items and contact groups.' },
      { mistake: 'Practicing in Outlook on the web', fix: 'The exam uses the desktop application.' }
    ]
  },
  questionTypes: {
    summary: 'The MOS Outlook Associate exam (MO-400) is a performance-based test of about 50 minutes, with multiple projects containing roughly 30-40 total tasks completed in the actual Outlook application; the passing score is 700/1000. The published objective groups are: manage Outlook settings and processes (15-20 percent), manage messages (30-35 percent), manage schedules (30-35 percent), and manage contacts and tasks (15-20 percent), and the weights make clear that messages and schedules together carry about two-thirds of the exam. Tasks include creating and formatting messages, applying rules and categories, scheduling appointments and meetings with the scheduling assistant, managing multiple calendars, creating contact groups, and creating and managing tasks. Because the exam is performance-based, each task asks the candidate to produce a result in Outlook - apply a rule, send a meeting invitation, create a contact group - and the software records whether the action was completed correctly, so knowing where the feature lives in the desktop ribbon is the score; there is no multiple-choice recognition, and a candidate who cannot find the feature fails the task regardless of conceptual knowledge. The exam is delivered by Certiport at testing centers or online with proctoring, and the exam interface includes a task list that lets candidates navigate between tasks, which supports the skip-and-return pacing strategy; the message and schedule projects consume the most time, so candidates should plan the 50-minute clock around finishing the smaller settings and contact tasks first, and the samples below illustrate the signature, scheduling-assistant and rule scenarios that recur across the objective groups. Samples below are editor-written illustrations of the published objectives, not live exam items.',
    types: [
      { name: 'Manage Outlook settings and processes', share: '15-20%', detail: 'Display settings, accounts, automatic replies, search folders, print and save.' },
      { name: 'Manage messages', share: '30-35%', detail: 'Create, format, reply, forward, flag, categorize and rule messages.' },
      { name: 'Manage schedules', share: '30-35%', detail: 'Appointments, meetings, recurring items, the scheduling assistant and invitations.' },
      { name: 'Manage contacts and tasks', share: '15-20%', detail: 'Contact records, contact groups, importing contacts and task management.' }
    ],
    samples: [
      {
        prompt: 'A user wants to apply a consistent signature with the company name to every new email automatically. Which feature should be configured?',
        options: ['A. A Quick Step', 'B. The default signatures setting', 'C. A message rule', 'D. A category'],
        answer: 'B',
        explanation: 'The default signatures setting in Outlook Options applies a chosen signature to new messages, replies and forwards automatically. Quick Steps automate multi-step actions, message rules act on received mail, and categories color-code items.'
      },
      {
        prompt: 'A user needs to schedule a meeting and find a time when all five invitees and the meeting room are available. Which feature shows each attendee\u2019s availability side by side?',
        options: ['A. The Scheduling Assistant', 'B. A Quick Step', 'C. An appointment', 'D. A category'],
        answer: 'A',
        explanation: 'The Scheduling Assistant displays the calendars of invitees and resources side by side so the user can find a time when everyone is available. An appointment is a calendar item without attendees, and Quick Steps and categories do not show availability.'
      },
      {
        prompt: 'A user wants messages from a specific client to move automatically into a dedicated folder as they arrive. Which feature should be created?',
        options: ['A. A search folder', 'B. A message rule', 'C. A signature', 'D. A contact group'],
        answer: 'B',
        explanation: 'A message rule applies an automatic action to incoming messages based on conditions, such as moving messages from a specific sender into a folder. Search folders group messages that meet criteria without moving them, and signatures and contact groups do not perform this action.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The MOS Outlook Associate exam is delivered by Certiport through authorized testing centers and, in many regions, online with proctoring. At a test center, arrive 30 minutes early with a valid ID; the exam runs about 50 minutes on the center\u2019s computer with Outlook installed, and candidates complete projects in the actual application while the exam software records the actions. For online delivery, complete the Certiport system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. The passing score is 700/1000, and results appear on screen at the end. The exam fee is about $100 (check for school, library and workforce vouchers before paying full price). During the exam, use the task list to skip the hardest tasks and return to them, because the clock rewards completing all the projects over perfecting one, and the message and schedule projects consume the most time; the settings and contact tasks are the fastest wins and should be cleared first. If the first attempt falls short, the retake policy allows a 24-hour wait after the first attempt, with subsequent retake rules set by Certiport, so a narrow miss can be re-sat quickly rather than delaying the plan. After passing, the certification is recorded in the candidate\u2019s Certiport/Microsoft Learn profile with a badge; MOS credentials do not expire. Afterwards, add the badge to your resume and LinkedIn, and consider the Word, Excel and PowerPoint Associate exams to complete the full MOS Associate certification, which requires passing three of the four Associate-level exams.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Voucher code if using a discounted voucher'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~50 minutes, performance-based projects in Outlook.' },
      { time: 'After the exam', detail: 'Score on screen; 700/1000 passes.' },
      { time: 'After passing', detail: 'Badge added to the Certiport/Microsoft profile; no expiry.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The exam is performance-based in the desktop Outlook application.',
      'The passing score is 700/1000 in ~50 minutes.',
      'Retakes: 24 hours after the first attempt, then per Certiport policy.',
      'The MOS credential does not expire.'
    ],
    afterwards: 'Add the badge to your resume and LinkedIn, keep the Certiport record for employer verification, and consider the Word, Excel and PowerPoint exams to complete the MOS Associate certification (three of four Associate exams).'
  }
};

export default data;
