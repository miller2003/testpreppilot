// Depth content for: microsoft-office-specialist-word-expert
// MO-101 is the Word Expert exam on the Office 2019 MOS track.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Productivity & office-software certifications desk',
    bio: 'This guide is compiled by our productivity and office-software certifications desk. Microsoft Office Specialist exams are revised with each Office release, and older versions are retired, so we track the exam by its code and version and warn when material for a previous Office version will not match the current blueprint. Exam structure, passing scores, and pricing come from Microsoft Learn and Certiport, the authorised MOS testing channel. We also track the validity policy for MOS credentials, which changed in September 2025, because it is one of the most common sources of confusion for candidates. Wage figures come from the Bureau of Labor Statistics occupational series closest to the office work this certification supports, named by SOC code.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam objectives, passing score, duration, and the September 2025 validity change were verified against Microsoft Learn and Certiport program pages for the current MOS Word Expert credential.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation \u2014 the reference is computer support specialists at a $61,550 median (BLS, May 2024), and the real payoff is a portable, verifiable proof of advanced Office skill',
    summary:
      'There is no Bureau of Labor Statistics occupation called "Microsoft Word expert", so the salary story is indirect and should be stated honestly. The closest official reference is Computer Support Specialists (SOC 15-1231), the occupational series most commonly associated with credential-bearing office and support work, which had a May 2024 median of $61,550, with network support specialists earning a median of $73,340 and user support specialists $60,340. But the more accurate framing is that MOS Word Expert is not a gate to any one job title \u2014 it is a verifiable signal of advanced document-production skill that attaches to office professionals, executive assistants, paralegals, technical writers, legal and medical document specialists, and support staff in nearly every industry. BLS projects a 3 percent employment decline for computer support specialists from 2024 to 2034, driven largely by automation and self-service support, but that projection does not describe the broad office-worker population the certification actually serves. The honest economic case is that the credential is cheap, fast, and evergreen: the exam costs roughly $100, requires a few weeks of practice, never expires if earned before September 2025, and after that date carries a five-year validity that is straightforward to renew. Candidates typically hold it as one credential in a stack \u2014 pairing it with other MOS Expert exams, project-management or bookkeeping certificates, or a degree \u2014 rather than relying on it alone. The value sits in the verification: a project-based exam that requires actually performing the tasks under a clock is harder to bluff than a multiple-choice test, which is why employers and staffing agencies treat MOS results as meaningful.',
    rows: [
      { label: 'Reference: median wage, computer support specialists', value: '$61,550', note: 'BLS Occupational Outlook Handbook, May 2024' },
      { label: 'Reference: computer network support specialists', value: '$73,340', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Reference: computer user support specialists', value: '$60,340', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'The certification itself', value: 'No direct occupation', note: 'A portable proof of advanced Word skill, not a job-title gate' }
    ],
    growth: 'BLS projects a 3% decline for computer support specialists 2024-34; the certification serves a broader office-worker population that BLS does not isolate.',
    source: {
      label: 'BLS Occupational Outlook Handbook \u2014 Computer Support Specialists',
      url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm'
    }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rate \u2014 but it does publish the bar: 700 out of 1,000 on a project-based exam, and the retake policy is 24 hours between attempts',
    summary:
      'Microsoft does not publish pass-rate statistics for the MO-101 Word Expert exam or any other MOS exam, and Certiport does not either, so any figure you see online is unverifiable. What is published and matters more is the scoring bar: the exam is scored on a 1,000-point scale and you need 700 to pass. Because the MOS exams are project-based \u2014 you perform tasks inside a real Office application rather than choosing letters \u2014 the score reflects completed tasks and the points attached to each, not a percentage of multiple-choice questions. The practical implication is that preparation is measured in hands-on task fluency: a candidate who can complete the published skill areas quickly and correctly will score; one who has merely read about the features will not. The retake policy is also published and unusually forgiving: if you fail, you may retake after 24 hours, with subsequent retake intervals that vary depending on how many attempts you have used \u2014 an improvement over the older MOS retake rules. The exam runs about 50 minutes, is proctored, and is delivered through Certiport for students and educators, with pricing of roughly $100 varying by region and testing channel. The credential math is favourable: a 50-minute, $100, hands-on exam with a 700/1,000 bar and a fast retake is one of the lowest-friction skill credentials in the Microsoft ecosystem, which is why it is a staple of office-skills credentialing in schools, workforce programs, and hiring pipelines.',
    source: {
      label: 'Microsoft Learn \u2014 MOS Word Expert (Office 2019) certification',
      url: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-word-expert-2019/'
    },
    caveat:
      'Microsoft publishes no MOS pass rates. Published and verifiable are the 700/1,000 passing score, the ~50-minute project-based format, the ~$100 fee, and the retake policy. We have deliberately left no pass-rate percentage in this table.'
  },
  studyPlan: {
    summary:
      'Plan for two to four weeks and 20 to 40 hours of hands-on practice for MO-101, and understand that almost none of that time should be reading. This is a project-based exam: you sit at a computer running Word and complete tasks, scored on a 1,000-point scale with a 700 pass mark, over about 50 minutes. The published skill areas are Manage Document Options and Settings, Use Advanced Editing and Formatting Features, Create Custom Document Elements, and Use Advanced Word Features \u2014 styles, building blocks, indexes, tables of figures, fields, forms, macros, and mail merge. The fastest way to baseline is to open the official skills outline, then work through each skill area in the real application rather than from a video. Week one should cover document options and settings plus advanced editing and formatting: templates, language options, find-and-replace techniques, paragraph layout, and styles. Week two should be custom document elements and advanced features: building blocks, design elements, indexes, tables of figures, fields, forms, controls, macros, and a full mail merge \u2014 the mail merge and field work is where candidates most often lose points because the steps are fiddly and sequential. Weeks three and four should be timed practice: run complete project-style tasks under the clock, then repeat the tasks you could not finish. Because the exam grades completed tasks, the difference between a 690 and a 710 is often simply finishing the last task set, so practise finishing under pressure. If you hold the Word Associate credential or have strong day-to-day Word fluency, compress the first two weeks and spend the recovered time on timed project rehearsals.',
    totalHours: '20-40 hours over 2-4 weeks',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Document options, settings, and advanced editing',
        tasks: [
          'Read the official MO-101 skills outline and map each skill to the application',
          'Practise templates, document themes, language options, and collaboration settings',
          'Drill find-and-replace techniques, paste options, and paragraph-layout configuration',
          'Rebuild your style system: create, modify, and assign styles until it is automatic'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 2',
        focus: 'Custom elements and advanced Word features',
        tasks: [
          'Create and modify building blocks and custom design elements',
          'Build and manage indexes and tables of figures from scratch',
          'Work with forms, fields, and controls; record and edit a simple macro',
          'Complete a full mail merge start to finish, including data source and field mapping'
        ],
        hours: '8-10 hrs'
      },
      {
        label: 'Week 3',
        focus: 'Timed project practice',
        tasks: [
          'Run complete project-style task sets under a 50-minute clock',
          'Identify the tasks you cannot finish and re-drill those specific skills',
          'Practise moving through tasks in the most point-efficient order',
          'Repeat the mail merge, field, and index workflows until sequential steps are memorised'
        ],
        hours: '6-10 hrs'
      },
      {
        label: 'Week 4',
        focus: 'Full rehearsals and gap closing',
        tasks: [
          'Take one full 50-minute timed rehearsal that mirrors the exam interface',
          'Score yourself against the 700/1,000 bar and review every partial task',
          'Re-drill the highest-point tasks you left unfinished',
          'Confirm scheduling, delivery method, and the retake policy before test day'
        ],
        hours: '6-10 hrs'
      }
    ],
    variants: [
      { label: 'Already holding the Word Associate credential', detail: 'Compress week one to a few hours of skills-outline review and spend nearly all your time on timed project rehearsals and the advanced features \u2014 fields, forms, indexes, and mail merge \u2014 that Associate-level work rarely touches.' },
      { label: 'Strong everyday Word user', detail: 'You know the features but probably do not know them by exam name. Spend a half-day mapping your fluency to the official skill areas, then two weeks of timed project practice to convert familiarity into task speed.' },
      { label: 'Learning from near-zero Office experience', detail: 'Add two weeks and start with the Word Associate-level fundamentals before touching Expert material. The Expert exam assumes fluent navigation and formatting control, and the clock will punish a lack of muscle memory.' }
    ]
  },
  prepStrategies: {
    summary:
      'The single most important study technique for MO-101 is to practise the actual tasks in the actual application, under a clock, because the exam is project-based and grades completed work \u2014 no amount of reading substitutes for performing a mail merge or building an index from scratch. Second, map every item in the official skills outline to a concrete demonstration you can perform, and treat any skill you cannot demonstrate unaided as unlearned. Third, rehearse the sequential workflows \u2014 mail merge, fields, forms, building blocks, tables of figures \u2014 until the step order is memorised, because these are where candidates lose the most points to forgotten intermediate steps. Fourth, practise finishing under pressure: the 700/1,000 bar is often decided by task completion, so learn to move through tasks in point-efficient order and to keep going when the clock is low rather than polishing an early task. Fifth, use the retake policy strategically but not as a crutch \u2014 the 24-hour retake window means a narrow miss can be corrected quickly, but only if you spend the gap drilling the specific task types you failed. Finally, be careful with third-party practice resources: the best alignment is Microsoft Learn\u2019s official materials and Certiport practice tests, and the honest signal is a full timed rehearsal, not a question bank.',
    items: [
      {
        title: 'Practise in Word, not from a video',
        detail: 'The exam runs the real application and grades completed tasks. For every skill in the outline, perform it yourself \u2014 styles, building blocks, indexes, fields, forms, macros, mail merge. If you cannot demonstrate it unaided in under a minute, it is not learned.'
      },
      {
        title: 'Memorise the sequential workflows',
        detail: 'Mail merge, fields, forms, and tables of figures are multi-step and unforgiving: one missed intermediate step breaks the result. Repeat each workflow several times until the order is automatic, because under the clock you will not have time to rediscover it.'
      },
      {
        title: 'Rehearse finishing under the clock',
        detail: 'The 700/1,000 bar is frequently decided by task completion. Run 50-minute project rehearsals, learn which task types earn points fastest, and practise leaving partial tasks rather than polishing an early one while later ones go untouched.'
      },
      {
        title: 'Score your rehearsals against 700/1,000',
        detail: 'Review every incomplete or partial task in each timed rehearsal and re-drill exactly those skill areas. A rehearsal you do not score and review is just typing; the review is where the improvement happens.'
      },
      {
        title: 'Use the retake policy deliberately',
        detail: 'You can retake after 24 hours, so a narrow miss is recoverable \u2014 but only if the gap is spent drilling the specific task types that failed. Do not book an immediate retake on the same preparation and expect a different result.'
      },
      {
        title: 'Be suspicious of question banks',
        detail: 'MOS is project-based, so multiple-choice question banks misrepresent the exam. Prefer Microsoft Learn\u2019s official skills outline and Certiport practice content, and treat a full timed rehearsal as the only honest readiness signal.'
      }
    ]
  },
  resourceComparison: {
    summary:
      'MO-101 preparation is dominated by a few cheap, high-quality resources, and the total cost of the certification \u2014 about $100 for the exam plus whatever you spend on practice \u2014 is low by certification standards. The mandatory spend is the exam itself, which is delivered through Certiport for students and educators (and through authorised test centres for others) at roughly $100, varying by region and channel. Microsoft Learn provides the official skills outline free, and that document \u2014 not any third-party book \u2014 is the authoritative syllabus. Practice options range from free skills-outline work in your own copy of Word, to Certiport\u2019s official practice tests, to third-party MOS prep courses and books in the $20-40 range. The buying rule is simple: spend first on the official outline and your own hands-on practice in Word, add a Certiport-style practice test for format calibration, and treat expensive prep courses as optional accelerators rather than requirements. One caution: Office 2019 and Microsoft 365 App versions of the Word Expert exams cover different skill lists, and old material for prior Office versions (2016, 2013) does not match the current exam \u2014 check the exam code and version on anything you buy.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'MO-101 exam voucher', values: ['~$100 (varies by region/channel)', 'Project-based, ~50 minutes, proctored', 'The required step \u2014 delivered through Certiport or an authorised centre'] },
      { label: 'Official MO-101 skills outline (Microsoft Learn)', values: ['Free', 'PDF / web document', 'The authoritative syllabus \u2014 map every task to it first'] },
      { label: 'Your own copy of Word + sample documents', values: ['Free if you already have Word', 'Hands-on practice in the real application', 'The core of preparation for a project-based exam'] },
      { label: 'Certiport practice test / official prep', values: ['~$20-50', 'Timed practice in the exam interface', 'Format calibration and honest readiness scoring'] },
      { label: 'Third-party MOS prep books (e.g. MOS Study Guide)', values: ['~$25-45', 'Print + companion files', 'Structured, ordered coverage of the skill areas'] },
      { label: 'Video courses and instructor-led training', values: ['~$15-60', 'Online video or live class', 'Visual learners and those who prefer guided pacing \u2014 optional'] }
    ],
    footnote: 'Prices checked 2026-08 in USD and approximate. Office 2019 and Microsoft 365 App versions are different exams with different skill outlines; confirm the version label before buying any prep material. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'The most common MO-101 mistakes come from treating a project-based exam like a multiple-choice one. Candidates study by reading and watching rather than performing, lose points to the sequential workflows like mail merge and fields, and never rehearse under the 50-minute clock, so they run out of time on tasks they could have completed with practice. A second cluster of errors is version confusion: studying material for the wrong Office version \u2014 the Microsoft 365 Apps Word Expert exam and the Office 2019 exam test different skill lists \u2014 and buying books or question banks that are not aligned to the current code. Candidates also over-rely on question banks, which misrepresent the format, and under-weight the finish discipline that actually decides the 700/1,000 bar. Finally, many people misunderstand the exam\u2019s role in the MOS Expert credential: passing MO-101 alone does not grant the Word Expert certification, which also requires the Word Associate credential, so candidates should confirm their path before booking.',
    items: [
      {
        mistake: 'Studying by reading and watching instead of performing',
        fix: 'Every skill in the outline must be demonstrated in the real application. Perform each task yourself \u2014 styles, building blocks, fields, forms, macros, mail merge \u2014 until it is fluent, because the exam grades completed work, not recognition.'
      },
      {
        mistake: 'Losing points on multi-step workflows',
        fix: 'Mail merge, fields, indexes, and tables of figures break on missed intermediate steps. Repeat each workflow several times until the step order is memorised, then drill them under the clock.'
      },
      {
        mistake: 'Never rehearsing under the 50-minute limit',
        fix: 'Run full timed project rehearsals and score them against 700/1,000. The bar is often decided by task completion, and the only way to learn to finish is to practise finishing under pressure.'
      },
      {
        mistake: 'Studying the wrong Office version',
        fix: 'The Office 2019 and Microsoft 365 Apps Word Expert exams test different skill lists. Confirm the exam code and version label on any course, book, or question bank before buying, and prefer the official skills outline.'
      },
      {
        mistake: 'Relying on multiple-choice question banks',
        fix: 'MOS is project-based; question banks misrepresent the format. Use official Microsoft Learn material and Certiport-style timed practice instead, and treat a full rehearsal as the real readiness signal.'
      },
      {
        mistake: 'Assuming MO-101 alone grants the Expert credential',
        fix: 'The Word Expert certification requires the Word Associate credential (MO-100) in addition to MO-101 in the standard path. Confirm the certification requirements on Microsoft Learn before booking so your exam sequence is correct.'
      }
    ]
  },
  questionTypes: {
    summary:
      'MO-101 is a project-based exam of about 50 minutes in which you perform tasks inside a live copy of Word, scored on a 1,000-point scale with a 700 passing mark. There is no traditional multiple-choice paper; instead, task-based items present a document and a written instruction \u2014 "apply Heading 1 style to the titles and update the table of contents," "create a building block named Q1 that inserts the standard header," "complete the mail merge so each record generates its own letter" \u2014 and the scoring engine grades the state of your document when you submit. The four published skill areas are Manage Document Options and Settings, Use Advanced Editing and Formatting Features, Create Custom Document Elements, and Use Advanced Word Features. The samples below are editor-written illustrations of the published skill areas, not live exam items. Because the exam is proctored and interactive, the practical advice is to complete every task rather than perfect one, to read each instruction for its exact requirement, and to move through the paper in the order that earns points fastest.',
    types: [
      { name: 'Project-style document tasks', share: 'The bulk of the paper', detail: 'A document and an instruction; the grading engine checks your completed document state. Covers styles, formatting, headers, templates, and document options.' },
      { name: 'Custom element creation', share: 'A substantial share', detail: 'Create building blocks, design elements, indexes, and tables of figures to specification, exactly as the instruction states.' },
      { name: 'Sequential workflow tasks', share: 'A substantial share', detail: 'Fields, forms, controls, and mail merge \u2014 multi-step tasks that break on any missed intermediate step.' },
      { name: 'Automation and advanced features', share: 'A smaller but real share', detail: 'Macro creation and simple automation, plus advanced editing and formatting features applied to a live document.' }
    ],
    samples: [
      {
        prompt: 'The active document contains a title formatted with the Normal style. Apply the Heading 1 style to the title line only, then update the table of contents so the title appears in it.',
        options: [
          'A. Select the title, choose Heading 1 from the Styles gallery, then right-click the table of contents and choose Update Field',
          'B. Select the whole document, apply Heading 1, then re-insert the table of contents from scratch',
          'C. Apply Heading 1 to the title, then delete and re-create the table of contents',
          'D. Use Find and Replace to change Normal to Heading 1 throughout, then print preview the document'
        ],
        answer: 'A',
        explanation: 'The instruction is precise: apply Heading 1 to the title line only, then update the existing table of contents so it reflects the change. Option A is the exact procedure \u2014 style the title, then update the field that drives the table of contents. B and D change more than the title (the whole document, or all text via Find and Replace), and C re-creates the TOC rather than updating it, which is not what the instruction asked.'
      },
      {
        prompt: 'Create a building block that inserts a standard header reading "Confidential \u2014 Draft" in a bold font, name it "DraftHeader", and make it available to all future documents based on the current template.',
        options: [
          'A. Insert the header, select it, and use Insert \u2192 Quick Parts \u2192 Save Selection to Quick Part Gallery, naming it DraftHeader',
          'B. Insert the header and save it as a Building Block without naming it, so Word assigns a default name',
          'C. Type the header text directly into the header area of one document and leave it there',
          'D. Create the header in a new document and save the document itself with the name DraftHeader'
        ],
        answer: 'A',
        explanation: 'A building block is created by saving a selection to a Quick Part Gallery with an explicit name, which is exactly what option A describes. B is wrong because unnamed building blocks defeat the purpose of a named reusable element, C does not create a reusable building block at all, and D confuses a saved document with a reusable header component. The requirement "available to all future documents based on the current template" is satisfied because the gallery is saved against the template.'
      },
      {
        prompt: 'You must produce one personalised letter per customer from a data source. Each letter should repeat the merge fields for name and address and be placed on its own page. Which tool performs this in one operation?',
        options: [
          'A. Mail Merge with the data source connected and the merge executed to individual documents',
          'B. Copy and paste each customer\u2019s details manually into separate documents',
          'C. A table of figures that lists each customer name and address',
          'D. A bookmark that stores all customer records in a single field'
        ],
        answer: 'A',
        explanation: 'Mail merge is the designed tool: you connect the data source, insert the merge fields for name and address, and execute the merge so each record produces its own letter on its own page. B is technically possible but is manual, slow, and error-prone \u2014 the opposite of the "one operation" the item describes. C is a different feature entirely (a reference list), and D has no role in producing per-record documents.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skill areas, not live exam items. The live exam is interactive project work in the Word application.'
  },
  examDay: {
    summary:
      'MO-101 is a proctored, project-based exam of about 50 minutes in which you perform tasks inside a live copy of Word, with a passing score of 700 out of 1,000. It is delivered through Certiport for students and educators and through authorised testing channels for others, either in person or online, and it costs roughly $100 depending on region. Bring a valid photo ID and know your testing account credentials; for online delivery you will need a quiet room, a webcam, a working microphone, and a system that passes the proctor\u2019s pre-check. The exam is not a test of memorised shortcuts \u2014 it is a test of completing tasks correctly under a clock \u2014 so the mental prep is about procedure and pacing. Read each instruction carefully and do exactly what it asks, because the scoring engine grades your document state, not your intent; a task that asks you to update the table of contents is failed if you delete it and start over. Move through the paper in point-efficient order, completing every task you can, and keep going when the clock is low rather than polishing an early task. If you fail, the published retake policy lets you retake after 24 hours, so a narrow miss is recoverable \u2014 but only if you spend the gap drilling the exact task types you failed.',
    bring: [
      'A valid, government-issued photo ID',
      'Your Certiport / testing account sign-in details',
      'For online delivery: a quiet room, webcam, microphone, and a pre-tested system',
      'A clear picture of the scheduled time and delivery method'
    ],
    leave: [
      'Notes, cheat sheets, and printed style guides \u2014 the exam is closed-book',
      'Phones, smartwatches, and other devices \u2014 out of reach for online proctoring',
      'A second monitor and any other person in the room for online delivery',
      'The instinct to open Help or the web mid-task \u2014 not permitted during the exam'
    ],
    timeline: [
      { time: 'Days before', detail: 'Run any system pre-checks for online delivery; confirm the appointment, ID, and check-in rules.' },
      { time: '15 minutes before', detail: 'Arrive at the centre or begin online check-in with ID verification and room scan for online proctoring.' },
      { time: 'The exam (~50 min)', detail: 'Project-based tasks in Word, graded on your final document state; passing is 700/1,000.' },
      { time: 'After submission', detail: 'Your score appears on completion; the credential is awarded through your MOS account and verifiable digitally.' }
    ],
    rules: [
      'Project-based and proctored \u2014 you perform tasks in the real Word application.',
      'About 50 minutes, passing at 700 out of 1,000.',
      'Closed-book; no external references, Help lookup, or web access during the exam.',
      'Retake permitted after 24 hours following a failed attempt; subsequent retake intervals vary.',
      'The Word Expert certification in the standard path requires the Word Associate credential in addition to MO-101.'
    ],
    afterwards:
      'Your MO-101 score appears when you complete the exam, and passing at 700 or above contributes to the Microsoft Office Specialist: Word Expert credential in combination with the Word Associate credential in the standard path. Your certification is recorded in your MOS account and is verifiable digitally, which is the point \u2014 employers and staffing agencies can check it, and you can display it on LinkedIn and resumes. Validity depends on when the credential was issued: MOS certifications earned before September 2, 2025 never expire, while those issued on or after that date are valid for five years and renewable through Microsoft\u2019s renewal process \u2014 check your certification dashboard for the current requirement. On a pass, update your verification links and profile promptly, and consider stacking the credential with related MOS Expert exams. On a narrow miss, use the 24-hour retake window strategically: review which task types went unfinished or partial, drill exactly those in Word, and retake quickly rather than letting the gap grow. The exam is cheap and fast, so the cost of a retake is low, but the preparation cost is only wasted if you repeat it on the same gaps.'
  }
};

export default data;
