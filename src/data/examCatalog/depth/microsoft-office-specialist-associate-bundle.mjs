const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Office productivity & desktop-applications desk',
    bio: 'We cover Microsoft Office Specialist certifications. The Associate-credential requirements in this guide come from Microsoft Learn official pages (three of four Associate exams for Office 2019; three exams across programs for Microsoft 365 Apps) and are revised; wage figures come from the BLS occupational series named by code. Microsoft publishes no pass rates for MOS exams, which we state plainly.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MOS Associate certification requirements, exam codes, scoring and fees against Microsoft Learn and Certiport pages; verified BLS wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The MOS Associate credential evidences cross-app office skill: secretaries and administrative assistants earned a $47,460 median in May 2024 (BLS)',
    summary: 'The Microsoft Office Specialist (MOS) Associate certification evidences hands-on proficiency across the core Microsoft Office applications - Word, Excel, PowerPoint and Outlook - and it is one of the most widely recognized software credentials for office work. It is a vendor certification, not a job license, so no single BLS SOC code attaches to it; the salary story belongs to the office and administrative occupations that use these applications daily. BLS reported that secretaries and administrative assistants, except legal, medical and executive (SOC 43-6014), earned a median of $47,460 in May 2024, with about 3,453,100 jobs and roughly 358,300 openings projected per year over 2024-2034; roles that list Word, Excel and Outlook proficiency - administrative assistants, coordinators, office clerks and analysts - sit in and around this range, and verifiable cross-app skill is a common differentiator in hiring at the entry level. The structural point is that the MOS Associate credential requires passing three of the four Associate-level exams, so it is a stronger signal than a single-app certification: it proves the candidate can work across the suite, not just in one application, which is what most office jobs actually require. The credential is commonly completed by students and early-career workers to evidence skills that most employers assume but few can verify, and it feeds directly into job-readiness programs and administrative and analyst job postings. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the verifiable signal. Each exam is performance-based (the candidate completes tasks in the actual application), costs about $100 (with discounts through schools and programs), and the exams do not expire. The honest caveat: BLS projects little or no change in the secretarial occupation through 2034, so the credential is a hiring and promotion signal rather than a gateway to a growing occupation.',
    rows: [
      { label: 'Secretaries and administrative assistants median, May 2024', value: '$47,460', note: 'BLS OEWS, SOC 43-6014' },
      { label: 'Employment, 2024', value: '3,453,100 jobs', note: 'BLS OOH, Secretaries and Administrative Assistants' },
      { label: 'Projected annual openings', value: '~358,300 per year', note: 'BLS OOH 2024-2034, mostly replacement demand' },
      { label: 'Exams required for the credential', value: '3 of 4 Associate exams', note: 'Microsoft Learn official requirements' }
    ],
    growth: 'BLS projects little or no change in secretaries and administrative assistants employment (2024-2034), with large replacement-driven openings each year; verifiable cross-app software skill remains a hiring differentiator.',
    source: { label: 'BLS Occupational Outlook Handbook - Secretaries and Administrative Assistants', url: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm' }
  },
  passRate: {
    headline: 'The MOS Associate credential requires passing three exams at 700 on a 1000-point scale each; Microsoft publishes no pass rates',
    summary: 'Microsoft and Certiport do not publish pass rates for MOS exams, including the exams that make up the Associate credential, but the credential requirements and assessment mechanics are public. For the Office 2019 program, the Microsoft Office Specialist: Associate certification requires passing three of the four Associate-level exams: MO-100 Microsoft Word, MO-200 Microsoft Excel, MO-300 Microsoft PowerPoint and MO-400 Microsoft Outlook. For the Microsoft 365 Apps program, the Associate certification requires passing three exams across different programs, with at least one of them a Microsoft 365 Apps exam (MO-110 Word, MO-210 Excel, MO-310 PowerPoint, or MO-410 Outlook). Each exam is a performance-based test: candidates complete tasks in the actual application while the exam software records their actions, with a time allowance of about 50 minutes and a passing score of 700 on a 1000-point scale. Because the exams are performance-based, candidates must know where features live and how to complete the required actions in each application, not just recall concepts; each app exam carries its own published objective groups that form the preparation blueprint. The exams are delivered by Certiport through authorized testing centers and online with proctoring, typically cost about $100 each (schools and workforce programs often offer discounted or free vouchers), and candidates who do not pass may retake after a 24-hour waiting period on the first retake, with subsequent retake rules varying by Certiport policy. Each individual exam also earns the app-specific Associate credential for that application, so the three-exam Associate certification stacks on top of the single-app credentials. The MOS credential does not expire. The honest summary is that no pass-rate statistics are published for any MOS exam, the passing bar is 700/1000 on each performance-based exam, and candidates should plan for three exams at about $100 each unless they secure vouchers.',
    source: { label: 'Microsoft Learn - Microsoft Office Specialist: Associate (Office 2019)', url: 'https://learn.microsoft.com/en-us/certifications/microsoft-office-specialist-associate-2019/' },
    caveat: 'Microsoft publishes no pass rates. The Associate credential requires passing three exams at 700/1000 each, performance-based, about 50 minutes per exam.'
  },
  studyPlan: {
    summary: 'A realistic MOS Associate plan runs 60-120 hours over 8-12 weeks for a candidate working through three exams, because the credential requires passing three of four Associate-level exams and the fastest path comes from scheduling the exams to build on each other. The single highest-yield planning decision is to confirm which three exams you will take and the program version you will test on (Office 2019 or Microsoft 365 Apps), because the Microsoft 365 Apps requirement includes at least one M365 Apps exam and the objective documents differ by version. The plan should split into exam-by-exam preparation: weeks 1-3 for the first app, weeks 4-6 for the second, weeks 7-9 for the third, and weeks 10-12 for the timed practice tests and the exam sittings. The two highest-value orderings are to start with the app you use most to build momentum, and to take the third exam within a few weeks of the first two so the skills stay fresh. Each exam\u2019s preparation follows the same pattern: review the published objectives document, practice hands-on in the real desktop application, drill the most-tested features (formulas and tables in Excel, styles and mail merge in Word, themes and slide masters in PowerPoint, rules and the scheduling assistant in Outlook), then complete a Certiport GMetrix practice test for that exam before sitting it. Candidates with strong everyday experience in all four apps should budget the lower end (about 60 hours) and weight time toward the GMetrix practice tests and the gap features; candidates refreshing the suite should budget the upper end and add a structured course. The budget should include three exam vouchers at about $100 each (or less with school or workforce discounts), plus the GMetrix practice tests at roughly $20-30 each. The final week before each exam should include at least one full timed practice test scoring above 700, because the pacing and the project format are what candidates underestimate.',
    totalHours: '60-120 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'First exam', tasks: ['Review the objectives document for the first app', 'Practice hands-on in the desktop application', 'Take a GMetrix practice test before the exam'], hours: 30 },
      { label: 'Weeks 4-6', focus: 'Second exam', tasks: ['Repeat the objective-driven practice for the second app', 'Drill the most-tested features', 'Take a timed practice test'], hours: 30 },
      { label: 'Weeks 7-9', focus: 'Third exam', tasks: ['Prepare the third app with the same pattern', 'Confirm the exam schedule for all three sittings'], hours: 30 },
      { label: 'Weeks 10-12', focus: 'Exams and gap closing', tasks: ['Sit the three exams', 'Re-drill any weak app between sittings', 'Confirm the credential in the Certiport profile'], hours: 30 }
    ],
    variants: [
      { label: 'Strong everyday experience', detail: 'Budget the lower end and weight time toward GMetrix practice tests and the gap features rather than full courses.' },
      { label: 'Beginner path', detail: 'Budget the upper end, add 2-3 weeks of daily practice in each app before the formal plan, and take the exams one at a time.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective MOS Associate strategies are hands-on, objective-driven and schedule-aware. Strategy one: confirm the program version and the three exams first, because the Office 2019 and Microsoft 365 Apps programs have different requirements (the M365 Apps Associate requires at least one Microsoft 365 Apps exam) and different objective documents; studying the wrong version is the most expensive mistake available. Strategy two: practice in the real desktop applications exclusively, because the exams record your actions and reward knowing exactly where features live; candidates who study screenshots without doing the actions underperform on the timed projects. Strategy three: use the published objectives document for each app as the checklist - every exam task maps to an objective, and working the checklists systematically is the highest-return preparation across all three exams. Strategy four: sequence the exams deliberately: start with the app you use most to build momentum, take the exams close enough together that the skills stay fresh, and plan the voucher budget before booking, because three exams at about $100 each add up quickly if vouchers are not secured. Strategy five: drill each app\u2019s most-tested features by name - formulas, tables, conditional formatting and charts in Excel; styles, headers, tables of contents and mail merge in Word; themes, slide masters and transitions in PowerPoint; rules, calendars and the scheduling assistant in Outlook - because these are where candidates lose points. Strategy six: use the Certiport GMetrix practice tests for the final week before each exam, because they replicate the performance format and timing and are the closest predictor of readiness. A further high-yield tactic is to manage the 50-minute clock on each exam by skipping difficult tasks and returning to them, since the exams score completed tasks and finishing the projects beats perfecting one.',
    items: [
      { title: 'Confirm the version and the three exams first', detail: 'Office 2019 and M365 Apps have different requirements and objectives; studying the wrong version wastes everything.' },
      { title: 'Practice in the real apps', detail: 'The exams record your actions; interface fluency is the score.' },
      { title: 'Work each objectives checklist', detail: 'Every task maps to a published objective in each app.' },
      { title: 'Sequence and budget the exams', detail: 'Three exams at ~$100 each; take them close together so skills stay fresh.' },
      { title: 'Drill the most-tested features', detail: 'Formulas, styles, slide masters, rules and calendars are where points are lost.' }
    ]
  },
  resourceComparison: {
    summary: 'The MOS Associate resource market has a clear official core and modest paid options, and the buying logic is the same for all three exams. The Microsoft Learn training modules are free for each app exam and map to the objectives; Microsoft also publishes the free objectives documents that are the exam blueprints, and both are the authoritative starting point because every exam task maps to a published objective. Hands-on practice requires only the desktop applications (a Microsoft 365 subscription or work/school account covers the full suite, which the exams test), and candidates should practice in the desktop apps specifically because the exams use the desktop versions rather than the web versions. The Certiport practice tests (GMetrix) cost about $20-30 each and are the closest match to the performance-based format; they are the standard paid purchase for each exam, and for a three-exam credential they are close to essential, because the project format and the 50-minute clock of each exam are best experienced in rehearsal. Commercial MOS prep books ($20-$40 each) and courses ($100-$500 per app) add structure and practice projects, and their value is practice volume rather than unique content; the app-specific editions are the ones to choose, because generic office-productivity courses do not cover the published objective groups. The exam fees are about $100 each (with frequent discounts through schools, libraries and workforce programs - candidates should check with their school or local workforce center for free or discounted vouchers, which is the single largest saving available on this credential, since three vouchers at full price total about $300). The honest ranking: free Microsoft Learn modules and the objectives documents, desktop-app practice, the GMetrix practice tests, and a course only for structure. Prices here are current as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn modules (per exam)', values: ['Free', 'Online', 'Objectives-aligned instruction'], note: '' },
      { label: 'Desktop-app practice', values: ['Subscription or existing', 'Desktop apps', 'The practice surface (exams use the desktop apps)'], note: '' },
      { label: 'Certiport GMetrix practice tests', values: ['$20-30 per exam', 'Online', 'Performance-format rehearsal'], note: '' },
      { label: 'Commercial prep book/course', values: ['$20-500 per app', 'Print/online', 'Practice volume and structure'], note: '' },
      { label: 'Three exam vouchers', values: ['~$100 each', 'Certiport', 'The real exams'], note: '' }
    ],
    footnote: 'Prices dated mid-2026; the MOS exam fee is ~$100 each with frequent school/workforce discounts. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the MOS Associate path come from version confusion and from studying instead of doing. Mistake one: studying for the wrong program version, because the Office 2019 and Microsoft 365 Apps Associate credentials have different requirements (the M365 Apps version requires at least one Microsoft 365 Apps exam) and different objective documents; candidates who prepare with 2019 material for a 365 exam, or vice versa, waste their study hours. Mistake two: taking the wrong set of exams, because the credential requires three specific Associate exams and candidates who pass only one or two never earn the Associate certification even though each exam earns the single-app credential. Mistake three: reading about the applications or watching videos without completing tasks in them; the exams are performance-based, and candidates who cannot navigate the ribbons and dialog boxes quickly run out of time. Mistake four: skipping the published objectives for each app, which means practicing what they already know and missing the obscure-but-tested features the objectives list. Mistake five: ignoring the 50-minute clock on each exam; the projects reward skipping and returning, and candidates who perfect the first project fail to finish the others. Mistake six: underestimating the cost and planning the voucher budget last, so the third exam sits unpaid when it is time to book; the three vouchers at about $100 each are the largest outlay and the most discountable through schools and workforce programs. Finally, candidates should take at least one GMetrix practice test per exam before the real sitting, because the performance format is best experienced in rehearsal.',
    items: [
      { mistake: 'Studying the wrong program version', fix: 'Confirm Office 2019 vs Microsoft 365 Apps requirements and objectives before studying.' },
      { mistake: 'Passing the wrong exam set', fix: 'The Associate credential requires three of the four Associate exams; plan all three.' },
      { mistake: 'Studying without doing', fix: 'Complete tasks in the real desktop applications.' },
      { mistake: 'Skipping the objectives', fix: 'Work each app\u2019s published objective groups as a checklist.' },
      { mistake: 'Ignoring the exam clock', fix: 'Skip difficult tasks and return; finishing projects beats perfecting one.' }
    ]
  },
  questionTypes: {
    summary: 'The MOS Associate credential consists of three performance-based exams, each about 50 minutes with multiple projects of tasks completed in the actual application and a passing score of 700/1000. For the Office 2019 program, candidates pass three of MO-100 Word, MO-200 Excel, MO-300 PowerPoint and MO-400 Outlook; for the Microsoft 365 Apps program, candidates pass three exams across different programs with at least one Microsoft 365 Apps exam. Each exam\u2019s published objective groups define the task content: Word covers creating and managing documents, formatting text and paragraphs, tables, references and mail merge; Excel covers worksheets, cells and ranges, tables, formulas and functions, charts and data formatting; PowerPoint covers presentations, slides, text, shapes, transitions and animations; Outlook covers settings, messages, schedules, and contacts and tasks. Because the exams are performance-based, tasks ask the candidate to produce a result in the application rather than select an answer, and the exam software records whether each task was completed correctly, so knowing where each feature lives in the desktop ribbon is the score; there is no multiple-choice recognition, and a candidate who cannot find a feature fails the task regardless of conceptual knowledge. Each exam interface includes a task list that lets candidates navigate between tasks, which supports the skip-and-return pacing strategy, and the three exams are scored independently at the same 700/1000 bar, so a candidate can pass two exams and retake the third without restarting the credential process. The samples below illustrate the Excel, Word and PowerPoint task styles at the Associate level; they are editor-written illustrations of the published objectives, not live exam items.',
    types: [
      { name: 'Word Associate tasks (MO-100)', share: 'One of the three required exams', detail: 'Documents, text and paragraph formatting, tables, references, mail merge.' },
      { name: 'Excel Associate tasks (MO-200)', share: 'One of the three required exams', detail: 'Worksheets, cells and ranges, tables, formulas and functions, charts.' },
      { name: 'PowerPoint Associate tasks (MO-300)', share: 'One of the three required exams', detail: 'Presentations, slides, text, shapes, transitions and animations.' },
      { name: 'Outlook Associate tasks (MO-400)', share: 'One of the three required exams', detail: 'Settings, messages, schedules, and contacts and tasks.' }
    ],
    samples: [
      {
        prompt: 'In Excel, a workbook contains monthly sales in cells B2:B13. Which formula returns the total sales for the first quarter (B2:B4)?',
        options: ['A. =SUM(B2:B4)', 'B. =TOTAL(B2:B13)', 'C. =ADD(B2:B4)', 'D. =SUM(B2:B13)'],
        answer: 'A',
        explanation: 'SUM with the range B2:B4 totals the first quarter; the other choices use non-existent functions or the wrong range. Formula tasks like this are core Excel Associate content.'
      },
      {
        prompt: 'In Word, which feature applies a consistent set of formatting choices to headings throughout a document so the heading style can be updated once and apply everywhere?',
        options: ['A. Styles', 'B. Track Changes', 'C. Mail Merge', 'D. AutoCorrect'],
        answer: 'A',
        explanation: 'Styles apply consistent formatting to text and update everywhere when the style changes; headings formatted with styles also feed the table of contents. Track Changes records edits, Mail Merge generates personalized documents, and AutoCorrect fixes typing.'
      },
      {
        prompt: 'In PowerPoint, a user wants the same logo to appear on every slide automatically. Which feature should be edited?',
        options: ['A. The slide master', 'B. A single slide', 'C. The transition gallery', 'D. The notes pane'],
        answer: 'A',
        explanation: 'Editing the slide master applies the logo to every slide in the presentation automatically; adding it to a single slide affects only that slide. Transitions and the notes pane do not control the layout content.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The three MOS Associate exams are delivered by Certiport through authorized testing centers and, in many regions, online with proctoring. At a test center, arrive 30 minutes early with a valid ID for each sitting; each exam runs about 50 minutes on the center\u2019s computer with the tested application installed, and candidates complete projects in the actual application while the exam software records the actions. For online delivery, complete the Certiport system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. The passing score is 700/1000 on each exam, and results appear on screen at the end of each sitting. The exam fees are about $100 each (check for school, library and workforce vouchers before paying full price, and book all three vouchers early so the schedule does not stall). During each exam, use the task list to skip the hardest tasks and return to them, because the 50-minute clock rewards completing all the projects over perfecting one. If an exam falls short of 700, the retake policy allows a 24-hour wait after the first attempt, with subsequent retake rules set by Certiport, so a narrow miss can be re-sat quickly and the three-exam schedule preserved. After passing the third required exam, the Associate credential is recorded in the candidate\u2019s Certiport/Microsoft Learn profile with a badge; MOS credentials do not expire. Afterwards, add the badge to your resume and LinkedIn, and consider the MOS Expert path, which requires the Associate credential plus two Expert-level exams for candidates who want to demonstrate advanced Word and Excel skills.',
    bring: ['Valid photo ID', 'Appointment confirmation for each sitting', 'Online: verified system and quiet room', 'Voucher codes for all three exams'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: 'Before each exam', detail: 'Complete a GMetrix practice test and score above 700 in the preceding week.' },
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~50 minutes, performance-based projects in the application.' },
      { time: 'After each exam', detail: 'Score on screen; 700/1000 passes.' },
      { time: 'After the third exam', detail: 'Associate credential added to the Certiport/Microsoft profile; no expiry.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'Each exam is performance-based in the desktop application.',
      'The passing score is 700/1000 in ~50 minutes per exam.',
      'The Associate credential requires three exams; each exam also earns its single-app credential.',
      'Retakes: 24 hours after the first attempt, then per Certiport policy.'
    ],
    afterwards: 'After three passing exams, the MOS Associate credential is on your profile. Add the badge to your resume and LinkedIn, and consider the MOS Expert path (Associate plus two Expert exams) for advanced Word and Excel skills.'
  }
};

export default data;
