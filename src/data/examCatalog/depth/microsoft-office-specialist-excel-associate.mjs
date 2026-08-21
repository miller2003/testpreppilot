const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Office productivity & desktop-applications desk',
    bio: 'We cover Microsoft Office Specialist certifications. Format and fee facts come from Microsoft/Certiport official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MOS Excel Associate (MO-200) exam structure, scoring and fees against Certiport/Microsoft official pages; verified BLS wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'MOS Excel Associate evidences practical spreadsheet skill: computer support specialists earned a $61,550 median in May 2024 (BLS)',
    summary: 'The Microsoft Office Specialist (MOS) Excel Associate certification evidences hands-on proficiency with Microsoft Excel - creating and managing worksheets, formulas, charts and tables - which is one of the most demanded software skills across office occupations. It is a vendor certification, not a job license, so no single BLS SOC code attaches to it; the salary story belongs to the office and support occupations that use Excel daily. BLS reported that computer support specialists (SOC 15-1231) earned a median of $61,550 in May 2024, and office and administrative support occupations as a group carried a $46,320 median; roles that list Excel proficiency - administrative assistants, data-entry staff, analysts and coordinators - span these ranges, and Excel skill is a common differentiator in hiring at the entry level. The structural point is that the certification is one of the most widely recognized software credentials, issued by Microsoft through Certiport, and it is commonly completed by students and early-career workers to evidence a skill that most employers assume but few can verify; it also feeds directly into job-readiness programs and is a standard requirement or bonus in many administrative and analyst job postings. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the verifiable signal in a market where spreadsheet proficiency is a near-universal requirement. The exam is performance-based (the candidate completes tasks in the actual Excel application), costs about $100 (with discounts through schools and programs), and pairs with the Word and PowerPoint Associate exams for the MOS Associate certification.',
    rows: [
      { label: 'Computer support specialists median, May 2024', value: '$61,550', note: 'BLS OEWS, SOC 15-1231' },
      { label: 'Office and administrative support median, May 2024', value: '$46,320', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'MOS exam delivery', value: 'Performance-based in Excel', note: 'Certiport/Microsoft' }
    ],
    growth: 'Office-support employment is projected to change modestly through 2034; verifiable software skill remains a hiring differentiator at entry level.',
    source: { label: 'BLS Occupational Outlook Handbook - Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'MOS Excel Associate requires a passing score of 700 on a 1000-point scale; Microsoft publishes no pass rates',
    summary: 'Microsoft and Certiport do not publish pass rates for MOS exams, but the assessment mechanics are public. The MOS Excel Associate exam (MO-200) is a performance-based test: candidates complete tasks in the actual Excel application while the exam software records their actions, with roughly 5-7 projects made up of 25-35 tasks (the exact task count is stated in the exam objectives and can vary); the time allowance is about 50 minutes, and the passing score is 700 on a 1000-point scale. Because the exam is performance-based, candidates must know where features live and how to complete the required actions in Excel, not just recall concepts; the exam covers six objective groups published by Microsoft: manage worksheets and workbooks; manage data cells and ranges; manage tables and table data; perform operations by using formulas and functions; manage charts; and (for the Associate level) manage data formatting. The exam is delivered by Certiport through authorized testing centers (and online in many regions), typically costs about $100 (schools and workforce programs often offer discounted or free vouchers), and candidates who do not pass may retake after a waiting period (Certiport applies a 24-hour wait for retakes, with limits). The MOS credential does not expire (unlike Microsoft\u2019s role-based certifications), which makes it a durable resume line. The honest summary is that the passing bar is 700/1000 on a performance-based exam, and the published objectives document is the authoritative preparation blueprint.',
    source: { label: 'Microsoft Learn - MOS Excel Associate (MO-200)', url: 'https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-associate/' },
    caveat: 'Microsoft publishes no pass rates; the exam requires 700/1000 and is performance-based in Excel with ~50 minutes allowed.'
  },
  studyPlan: {
    summary: 'A realistic MOS Excel Associate plan runs 20-40 hours over 2-5 weeks for someone with everyday Excel experience, and 40-60 hours for a beginner. The exam is performance-based, so preparation is about completing tasks in the real application. Week 1: take a baseline - work through the published objectives document (the six objective groups) and complete a practice project to see where you stand; most candidates discover gaps in features they rarely use (advanced tables, conditional formatting, functions like SUMIFS and XLOOKUP). Weeks 2-4: work through the objectives with hands-on practice - create practice workbooks that exercise each objective group, using the free Microsoft Learn training modules and the Certiport practice tests; the key is doing the actions, not reading about them. Week 5: complete the official practice test (Certiport\u2019s GMetrix practice exams, roughly $20-30) under timed conditions, drill the exposed gaps, and take the real exam. The six objective groups: manage worksheets and workbooks (sheets, views, workbook properties, printing); manage data cells and ranges (entry, fill, formatting, conditional formatting, named ranges); manage tables and table data (tables, structured references, sorting, filtering); perform operations using formulas and functions (formula syntax, functions including SUM, AVERAGE, COUNT, IF, SUMIF(S), VLOOKUP/XLOOKUP, text functions); manage charts (chart creation, chart types, elements, formatting); and manage data formatting at the Associate level. Candidates who pass Excel Associate can add Word and PowerPoint Associate to complete the MOS Associate certification.',
    totalHours: '20-60 hours over 2-5 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline and objectives', tasks: ['Review the published objectives', 'Practice project to find gaps'], hours: 6 },
      { label: 'Weeks 2-4', focus: 'Hands-on objective practice', tasks: ['Practice workbooks per objective group', 'Functions, tables, charts, formatting'], hours: 24 },
      { label: 'Week 5', focus: 'Practice test and real exam', tasks: ['GMetrix practice test', 'Drill gaps; take the real exam'], hours: 10 }
    ],
    variants: [
      { label: 'Beginner path', detail: 'Add 2-3 weeks of daily Excel practice before the formal plan if the baseline is weak.' },
      { label: 'MOS Associate bundle', detail: 'Pass Excel, Word and PowerPoint Associate to earn the full MOS Associate certification.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective MOS Excel strategies are hands-on and objective-driven. Strategy one: practice in the real Excel application exclusively, because the exam records your actions in the software and rewards knowing exactly where features live; candidates who study screenshots or videos without doing the actions underperform on the timed projects. Strategy two: use the published objectives document as the checklist - Microsoft publishes the six objective groups with the specific skills tested, and every exam task maps to an objective; working through the checklist systematically is the highest-return preparation. Strategy three: master the most-tested functions (SUM, AVERAGE, COUNT, IF, SUMIF/SUMIFS, VLOOKUP or XLOOKUP, and text functions) because formula items carry heavy weight and are the most common failure point; practice building them from scratch, not just recognizing them. Strategy four: learn the table and data-management features (structured references, sorting, filtering, conditional formatting), which form a large share of the tasks. Strategy five: use the Certiport practice tests (GMetrix) for the final week, because they replicate the performance-based format and the timing, and they are the closest predictor of readiness. Strategy six: manage the 50-minute clock by skipping difficult tasks and returning to them, since the exam scores completed tasks; finishing the projects beats perfecting one.',
    items: [
      { title: 'Practice in the real app', detail: 'The exam records your actions; interface fluency is the score.' },
      { title: 'Work the objectives checklist', detail: 'Every task maps to a published objective.' },
      { title: 'Master the core functions', detail: 'SUMIFS, VLOOKUP/XLOOKUP, IF and text functions are heavily tested.' },
      { title: 'Learn tables and formatting', detail: 'Structured references, filtering, conditional formatting.' },
      { title: 'Use GMetrix for the final week', detail: 'It replicates the performance format and timing.' }
    ]
  },
  resourceComparison: {
    summary: 'The MOS Excel resource market has a clear official core and modest paid options. The Microsoft Learn training modules for MO-200 are free and map to the objectives; Microsoft also publishes the free objectives document that is the exam blueprint. Hands-on practice requires only Excel (a Microsoft 365 subscription or the free Excel web app covers most features, though the exam tests the desktop application, so candidates should practice in the desktop version). The Certiport practice tests (GMetrix) cost about $20-30 and are the closest match to the performance-based format; they are the standard paid purchase. Commercial MOS prep books ($20-$40) and courses ($100-$500) add structure and practice projects, and their value is practice volume rather than unique content. The exam fee itself is about $100 (with frequent discounts through schools, libraries and workforce programs - candidates should check with their school or local workforce center for free or discounted vouchers). The honest ranking: free Microsoft Learn modules and the objectives document, Excel practice, the GMetrix practice test, and a course only for structure. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn MO-200 modules', values: ['Free', 'Online', 'Objectives-aligned instruction'] },
      { label: 'Excel desktop practice', values: ['Subscription or existing', 'Desktop app', 'The practice surface (exam uses the desktop app)'] },
      { label: 'Certiport GMetrix practice tests', values: ['$20-$30', 'Online', 'Performance-format rehearsal'] },
      { label: 'Commercial prep book/course', values: ['$20-$500', 'Print/online', 'Practice volume and structure'] }
    ],
    footnote: 'Prices dated 2025-26; the MOS exam fee is ~$100 with frequent school/workforce discounts. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common MOS Excel mistakes come from studying instead of doing. Mistake one: reading about Excel or watching videos without completing tasks in the application; the exam is performance-based, and candidates who cannot navigate the ribbon and dialog boxes quickly run out of time. Mistake two: skipping the published objectives; candidates who practice what they already know miss the obscure-but-tested features (e.g., print area, custom views, data validation) that the objectives list. Mistake three: under-preparing the formula cluster; formula items carry heavy weight, and candidates who recognize functions but cannot build them from scratch lose the task. Mistake four: ignoring the timing; the 50-minute clock with multiple projects rewards skipping and returning, and candidates who perfect the first project fail to finish. Mistake five: practicing in the web app only; the exam uses the desktop application, and feature locations differ, so a candidate fluent in Excel for the web can be lost in the desktop ribbon. Mistake six: assuming the certification expires; MOS does not expire, but candidates should still keep the Certiport record accessible for resumes and employer verification. Finally, candidates should take at least one GMetrix practice test before the real exam, because the performance format is best experienced in rehearsal.',
    items: [
      { mistake: 'Studying without doing', fix: 'Complete tasks in the real desktop app.' },
      { mistake: 'Skipping the objectives', fix: 'Work the published objective groups as a checklist.' },
      { mistake: 'Under-preparing formulas', fix: 'Build core functions from scratch daily.' },
      { mistake: 'Ignoring the clock', fix: 'Skip difficult tasks; finishing beats perfecting.' },
      { mistake: 'Practicing in the web app', fix: 'The exam uses the desktop application.' }
    ]
  },
  questionTypes: {
    summary: 'The MOS Excel Associate exam (MO-200) is a performance-based test of about 50 minutes, with multiple projects containing 25-35 total tasks completed in the actual Excel application; the passing score is 700/1000. The published objective groups are: manage worksheets and workbooks; manage data cells and ranges; manage tables and table data; perform operations by using formulas and functions; manage charts; and manage data formatting. Tasks include creating and formatting worksheets, using functions, building tables with structured references, creating charts, and applying conditional formatting. Samples below are editor-written illustrations of the published objectives, not live exam items.',
    types: [
      { name: 'Manage worksheets and workbooks', share: 'Objective group', detail: 'Sheets, views, workbook properties, printing.' },
      { name: 'Manage cells, ranges, tables', share: 'Objective group', detail: 'Formatting, conditional formatting, structured references.' },
      { name: 'Formulas and functions', share: 'Objective group', detail: 'SUM, IF, SUMIFS, VLOOKUP/XLOOKUP, text functions.' },
      { name: 'Charts and formatting', share: 'Objective group', detail: 'Chart creation, elements, and data formatting.' }
    ],
    samples: [
      {
        prompt: 'A workbook contains monthly sales in cells B2:B13. Which formula returns the total sales for the first quarter (B2:B4)?',
        options: ['A. =SUM(B2:B4)', 'B. =TOTAL(B2:B13)', 'C. =ADD(B2:B4)', 'D. =SUM(B2:B13)'],
        answer: 'A',
        explanation: 'SUM with the range B2:B4 totals the first quarter; the other choices use non-existent functions or the wrong range.'
      },
      {
        prompt: 'A user wants to highlight cells in column C that are greater than 1000. Which feature applies the formatting automatically?',
        options: ['A. Conditional formatting', 'B. Cell styles', 'C. Data validation', 'D. Custom views'],
        answer: 'A',
        explanation: 'Conditional formatting applies rules that format cells based on their values (e.g., greater than 1000); the other features do not automate value-based formatting.'
      },
      {
        prompt: 'A data range has a header row and needs to reference the column of values by name in formulas. What should be created first?',
        options: ['A. A table with structured references', 'B. A chart', 'C. A named print area', 'D. A custom sort'],
        answer: 'A',
        explanation: 'Converting the range to a table enables structured references by column name (e.g., [Sales]); the other options do not create name-based references.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published objectives, not live exam items.'
  },
  examDay: {
    summary: 'The MOS Excel Associate exam is delivered by Certiport through authorized testing centers and, in many regions, online with proctoring. At a test center, arrive 30 minutes early with a valid ID; the exam runs about 50 minutes on the center\u2019s computer with Excel installed, and candidates complete projects in the actual application while the exam software records the actions. For online delivery, complete the Certiport system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. The passing score is 700/1000, and results appear on screen at the end. The exam fee is about $100 (check for school, library and workforce vouchers before paying full price). After passing, the certification is recorded in the candidate\u2019s Certiport/Microsoft Learn profile with a badge; MOS credentials do not expire. Afterwards, add the badge to your resume and LinkedIn, and consider the Word and PowerPoint Associate exams to complete the MOS Associate certification.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Voucher code if using a discounted voucher'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~50 minutes, performance-based projects in Excel.' },
      { time: 'After the exam', detail: 'Score on screen; 700/1000 passes.' },
      { time: 'After passing', detail: 'Badge added to the Certiport/Microsoft profile; no expiry.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The exam is performance-based in the desktop Excel application.',
      'The passing score is 700/1000 in ~50 minutes.',
      'The MOS credential does not expire.'
    ],
    afterwards: 'Add the badge to your resume and LinkedIn, keep the Certiport record for employer verification, and consider the Word and PowerPoint exams for the full MOS Associate.'
  }
};

export default data;
