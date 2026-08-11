const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Office productivity & desktop-applications desk',
    bio: 'We cover Microsoft Office Specialist certifications. Format and fee facts come from Microsoft/Certiport official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MOS Word Associate (MO-100) exam structure, scoring and fees against Certiport/Microsoft official pages; verified BLS wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'MOS Word Associate evidences document-production skill: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'The Microsoft Office Specialist (MOS) Word Associate certification evidences hands-on proficiency with Microsoft Word - creating and formatting documents, working with references, layout and collaboration features - which is a core skill across office, administrative and support occupations. It is a vendor certification, not a job license, so no single BLS SOC code attaches to it; the salary story belongs to the office occupations that use Word daily. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, and office and administrative support occupations as a group carried a $46,320 median; roles that list Word proficiency - administrative assistants, clerks, coordinators, legal and medical support staff - span these ranges. The structural point is that the certification is a recognized, verifiable signal of a skill that most employers assume but few can verify, and it is commonly completed by students and entry-level workers to strengthen applications for administrative and support roles; it also feeds job-readiness and workforce programs and pairs with the Excel and PowerPoint Associate exams for the full MOS Associate certification. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the hireability signal in a market where document-production skill is a near-universal requirement. The exam is performance-based (the candidate completes tasks in the actual Word application), costs about $100 (with frequent discounts through schools and workforce programs), and the MOS credential does not expire.',
    rows: [
      { label: 'Computer support specialists median, May 2024', value: '$61,550', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'Office and administrative support median, May 2024', value: '$46,320', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'MOS exam delivery', value: 'Performance-based in Word', note: 'Certiport/Microsoft' }
    ],
    growth: 'Office-support employment is projected to change modestly through 2034; verifiable software skill remains a hiring differentiator.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'MOS Word Associate requires a passing score of 700 on a 1000-point scale; Microsoft publishes no pass rates',
    summary: 'Microsoft and Certiport do not publish pass rates for MOS exams, but the assessment mechanics are public. The MOS Word Associate exam (MO-100) is a performance-based test: candidates complete tasks in the actual Word application while the exam software records their actions, with roughly 5-7 projects made up of 25-35 tasks (the exact count is stated in the exam objectives and can vary); the time allowance is about 50 minutes, and the passing score is 700 on a 1000-point scale. The exam covers five objective groups published by Microsoft: manage documents (create, navigate, save, share); insert and format text, paragraphs and sections; manage tables and lists; create and manage references (footnotes, citations, captions, indexes); and insert and format graphics, plus collaboration features at the Associate level (track changes, comments, comparing documents). Because the exam is performance-based, candidates must know where features live in Word and complete the actions, not just recall concepts. The exam is delivered by Certiport through authorized testing centers and online in many regions, typically costs about $100 (schools and workforce programs often offer discounted or free vouchers), and candidates who do not pass may retake after the Certiport waiting period. The MOS credential does not expire. The honest summary is that the passing bar is 700/1000 on a performance-based exam, and the published objectives document is the authoritative preparation blueprint.',
    source: { label: 'Microsoft Learn - MOS Word Associate (MO-100)', url: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-word-associate/' },
    caveat: 'Microsoft publishes no pass rates; the exam requires 700/1000 and is performance-based in Word with ~50 minutes allowed.'
  },
  studyPlan: {
    summary: 'A realistic MOS Word Associate plan runs 15-35 hours over 2-4 weeks for someone with everyday Word experience, and more for a beginner. The exam is performance-based, so preparation is about completing tasks in the real application. Week 1: review the published objectives document (the five objective groups) and complete a practice project to find the gaps - most candidates discover weaknesses in features they rarely use (styles, table of contents, mail merge, headers/footers, track changes). Weeks 2-3: work through the objectives with hands-on practice - create practice documents that exercise each group, using the free Microsoft Learn training modules and building a document with styles, references, tables and graphics; the key is doing the actions, not reading about them. Week 4: complete the Certiport practice test (GMetrix, roughly $20-30) under timed conditions, drill the exposed gaps, and take the real exam. The five objective groups: manage documents (saving, sharing, navigation, printing); insert and format text, paragraphs and sections (font and paragraph formatting, styles, headers and footers); manage tables and lists (creating and formatting tables, bulleted and numbered lists); create and manage references (footnotes, citations, captions, indexes, table of contents); and insert and format graphics (images, shapes, text boxes) with collaboration features at the Associate level (track changes, comments). Candidates who pass Word Associate can add Excel and PowerPoint Associate to complete the MOS Associate certification.',
    totalHours: '15-35 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline and objectives', tasks: ['Review the published objectives', 'Practice project to find gaps'], hours: 5 },
      { label: 'Weeks 2-3', focus: 'Hands-on objective practice', tasks: ['Practice documents per objective group', 'Styles, references, tables, graphics'], hours: 18 },
      { label: 'Week 4', focus: 'Practice test and real exam', tasks: ['GMetrix practice test', 'Drill gaps; take the real exam'], hours: 8 }
    ],
    variants: [
      { label: 'Beginner path', detail: 'Add 2 weeks of daily Word practice before the formal plan if the baseline is weak.' },
      { label: 'MOS Associate bundle', detail: 'Pass Word, Excel and PowerPoint Associate to earn the full MOS Associate certification.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective MOS Word strategies are hands-on and objective-driven. Strategy one: practice in the real Word desktop application, because the exam records your actions and rewards knowing exactly where features live; candidates who study screenshots without doing the actions underperform on the timed projects. Strategy two: use the published objectives as the checklist - every exam task maps to an objective, and candidates who work through the list systematically cover the obscure-but-tested features (styles, TOC, mail merge, headers/footers) that daily users rarely touch. Strategy three: master the formatting and style features - styles, paragraph formatting, sections, headers and footers - because they form a large share of the tasks and are the most common gap for self-taught users. Strategy four: learn the reference features (footnotes, citations, captions, indexes, table of contents) and the collaboration features (track changes, comments), which are distinct, testable clusters. Strategy five: use the Certiport practice tests (GMetrix) for the final week, because they replicate the performance format and timing. Strategy six: manage the 50-minute clock by skipping difficult tasks and returning to them, since the exam scores completed tasks; finishing the projects beats perfecting one.',
    items: [
      { title: 'Practice in the real app', detail: 'The exam records your actions; interface fluency is the score.' },
      { title: 'Work the objectives checklist', detail: 'Every task maps to a published objective.' },
      { title: 'Master styles and formatting', detail: 'The most common gap for self-taught users.' },
      { title: 'Learn references and collaboration', detail: 'Footnotes, TOC, track changes are distinct clusters.' },
      { title: 'Use GMetrix for the final week', detail: 'It replicates the performance format and timing.' }
    ]
  },
  resourceComparison: {
    summary: 'The MOS Word resource market has a clear official core. The Microsoft Learn training modules for MO-100 are free and map to the objectives; Microsoft also publishes the free objectives document that is the exam blueprint. Hands-on practice requires only Word (the exam uses the desktop application, so candidates should practice in the desktop version rather than the web app). The Certiport practice tests (GMetrix) cost about $20-30 and are the closest match to the performance-based format; they are the standard paid purchase. Commercial MOS prep books ($15-$40) and courses ($100-$500) add structure and practice projects, and their value is practice volume rather than unique content. The exam fee is about $100, with frequent discounts through schools, libraries and workforce programs - candidates should check for free or discounted vouchers before paying full price. The honest ranking: free Microsoft Learn modules and the objectives document, Word practice, the GMetrix practice test, and a course only for structure. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn MO-100 modules', values: ['Free', 'Online', 'Objectives-aligned instruction'] },
      { label: 'Word desktop practice', values: ['Subscription or existing', 'Desktop app', 'The practice surface (exam uses the desktop app)'] },
      { label: 'Certiport GMetrix practice tests', values: ['$20-$30', 'Online', 'Performance-format rehearsal'] },
      { label: 'Commercial prep book/course', values: ['$15-$500', 'Print/online', 'Practice volume and structure'] }
    ],
    footnote: 'Prices dated 2025-26; the MOS exam fee is ~$100 with frequent school/workforce discounts. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common MOS Word mistakes come from studying instead of doing. Mistake one: reading about Word or watching videos without completing tasks in the application; the exam is performance-based, and candidates who cannot navigate the ribbon and dialog boxes quickly run out of time. Mistake two: skipping the published objectives; candidates who practice what they already know miss the tested features they rarely use (styles, TOC, mail merge, headers/footers). Mistake three: neglecting the reference features; footnotes, citations, captions and indexes form a distinct testable cluster that many daily users have never used. Mistake four: ignoring the timing; the 50-minute clock with multiple projects rewards skipping and returning, and candidates who perfect the first project fail to finish. Mistake five: practicing in the web app; the exam uses the desktop application, and feature locations differ. Mistake six: assuming the certification expires; MOS does not expire, but candidates should keep the Certiport record for resumes and employer verification. Finally, candidates should take at least one GMetrix practice test before the real exam, because the performance format is best experienced in rehearsal.',
    items: [
      { mistake: 'Studying without doing', fix: 'Complete tasks in the real desktop app.' },
      { mistake: 'Skipping the objectives', fix: 'Work the published objective groups as a checklist.' },
      { mistake: 'Neglecting references', fix: 'Footnotes, TOC, captions and indexes are a distinct cluster.' },
      { mistake: 'Ignoring the clock', fix: 'Skip difficult tasks; finishing beats perfecting.' },
      { mistake: 'Practicing in the web app', fix: 'The exam uses the desktop application.' }
    ]
  },
  questionTypes: {
    summary: 'The MOS Word Associate exam (MO-100) is a performance-based test of about 50 minutes, with multiple projects containing 25-35 total tasks completed in the actual Word application; the passing score is 700/1000. The published objective groups: manage documents; insert and format text, paragraphs and sections; manage tables and lists; create and manage references; and insert and format graphics (with collaboration features at the Associate level). Tasks include applying styles, creating a table of contents, inserting footnotes, building tables, and using track changes. Samples below are editor-written illustrations of the published objectives, not live exam items.',
    types: [
      { name: 'Manage documents', share: 'Objective group', detail: 'Saving, sharing, navigation, printing.' },
      { name: 'Text, paragraphs, sections', share: 'Objective group', detail: 'Styles, formatting, headers and footers.' },
      { name: 'Tables, lists, references', share: 'Objective group', detail: 'Tables, lists, footnotes, TOC, captions, indexes.' },
      { name: 'Graphics and collaboration', share: 'Objective group', detail: 'Images, shapes, track changes, comments.' }
    ],
    samples: [
      {
        prompt: 'A document needs a clickable list of its headings and page numbers at the front. Which feature creates it?',
        options: ['A. A table of contents', 'B. A footer', 'C. A bookmark', 'D. A hyperlink'],
        answer: 'A',
        explanation: 'A table of contents, built from heading styles, generates the navigable list of headings with page numbers; the other options serve different purposes.'
      },
      {
        prompt: 'A user wants a paragraph to appear at the top of every page with the document title. Which feature is most appropriate?',
        options: ['A. A header', 'B. A footnote', 'C. A text box', 'D. A caption'],
        answer: 'A',
        explanation: 'Headers repeat at the top of pages and can carry the title; footnotes sit at the bottom, text boxes are positioned content, and captions label figures.'
      },
      {
        prompt: 'Two colleagues need to review a document and see each other\u2019s suggested changes. Which feature should be used?',
        options: ['A. Track Changes with comments', 'B. Mail merge', 'C. Index', 'D. Section break'],
        answer: 'A',
        explanation: 'Track Changes records edits and comments lets reviewers add notes; the other features serve different document tasks.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The MOS Word Associate exam is delivered by Certiport through authorized testing centers and, in many regions, online with proctoring. At a test center, arrive 30 minutes early with a valid ID; the exam runs about 50 minutes on the center\u2019s computer with Word installed, and candidates complete projects in the actual application while the exam software records the actions. For online delivery, complete the Certiport system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. The passing score is 700/1000, and results appear on screen at the end. The exam fee is about $100 (check for school, library and workforce vouchers). After passing, the certification is recorded in the candidate\u2019s Certiport/Microsoft Learn profile with a badge; MOS credentials do not expire. Afterwards, add the badge to your resume and LinkedIn, and consider the Excel and PowerPoint Associate exams to complete the MOS Associate certification.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Voucher code if using a discounted voucher'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~50 minutes, performance-based projects in Word.' },
      { time: 'After the exam', detail: 'Score on screen; 700/1000 passes.' },
      { time: 'After passing', detail: 'Badge added to the Certiport/Microsoft profile; no expiry.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The exam is performance-based in the desktop Word application.',
      'The passing score is 700/1000 in ~50 minutes.',
      'The MOS credential does not expire.'
    ],
    afterwards: 'Add the badge to your resume and LinkedIn, keep the Certiport record for verification, and consider the Excel and PowerPoint exams for the full MOS Associate.'
  }
};

export default data;
