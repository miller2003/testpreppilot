const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, IT & business-apps certifications desk',
    bio: 'Microsoft certification structure comes from Microsoft Learn official pages and is revised with each exam update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the MB-910 exam structure and domains against Microsoft Learn official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect computer-support and business-application roles at a May 2024 median of $61,550 for support specialists (BLS) — MB-910 is the Microsoft Dynamics 365 fundamentals exam, an entry credential for the business-apps ecosystem',
    summary: 'The direct answer is that the MB-910 (Microsoft Dynamics 365 Fundamentals) certification is an entry-level fundamentals exam, and the roles it serves — functional consultants, business analysts, and support staff in the Dynamics ecosystem — sit across BLS occupations including computer support specialists (SOC 15-1231), at a May 2024 median annual wage of $61,550, and management analysts (SOC 13-1111), at a higher median, with the Dynamics consultant track generally paying above the support median as experience and implementation skill build. The honest framing is that a fundamentals certification does not set pay by itself — it is the entry credential signalling familiarity with the Dynamics 365 product family (finance, supply chain, customer engagement, and business central) — and the income story follows the career path: Dynamics consultants with implementation experience are a specialised, well-paid niche within business software, and the fundamentals exam is the documented first rung. BLS counted about 649,000 computer support specialists in 2024 and projects about 4 percent employment growth from 2024 to 2034. The exam itself is an entry-level, no-prerequisite assessment: approximately 40 to 60 questions in about an hour, scored pass/fail around 700 on the 100-900 scale, covering the Dynamics 365 apps and their business value, with the Microsoft "fundamentals" tier designed as an accessible starting point. The practical read: MB-910 is a low-cost ($99), low-barrier certification for anyone entering the Microsoft business-applications ecosystem — consultants, analysts, sales and support roles — and its value is the ecosystem entry signal plus the prerequisite-style foundation for the higher-level functional consultant exams (e.g. MB-210, MB-230) that the role-based careers require.',
    rows: [
      { label: 'Median annual wage, computer support specialists', value: '$61,550', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 15-1231)' },
      { label: 'Median annual wage, management analysts', value: '$99,290', note: 'BLS OOH, May 2024 (SOC 13-1111)' },
      { label: 'Projected growth, computer support, 2024-34', value: '+4%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'Entry fundamentals', note: 'No prerequisites; $99 exam fee' }
    ],
    growth: 'BLS projects about 4% growth for computer support specialists from 2024 to 2034, with ~60,000 annual openings.',
    source: { label: 'BLS OOH — Computer Support Specialists', url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm' }
  },
  passRate: {
    headline: 'Microsoft publishes no pass rates — MB-910 is scored pass/fail around 700/900, and Microsoft reports scores rather than cohort pass data',
    summary: 'The core fact is that Microsoft does not publish pass rates for MB-910, and none is available from an independent source, because Microsoft reports candidate scores rather than cohort pass percentages. What is published is the exam structure: MB-910 is an entry-level fundamentals exam of approximately 40 to 60 questions with about 60 minutes allowed, delivered at Pearson VUE testing centers or online proctored, with a passing score of 700 on the 100-900 scale; there are no prerequisites, and the exam covers the Dynamics 365 application areas — Dynamics 365 apps and their business value (marketing, sales, customer service, field service, finance, supply chain, commerce, human resources, project operations, and business central), the concepts of business applications, and the implementation considerations. Because the fundamentals tier is designed as an accessible entry point and Microsoft publishes the skills-measured document, the practical pass rate is high for candidates who complete the free Microsoft Learn learning paths; the classic failure mode is skipping the Learn modules and missing the app-by-app coverage, since the exam samples the whole product family. The certification is valid for one year and renewable through Microsoft\u2019s short renewal assessment. The honest advice is to treat the skills-measured document as the syllabus, complete the official Learn paths, and use the official practice assessment to calibrate — the fundamentals exams reward broad product familiarity, so breadth of coverage matters more than depth in any single app.',
    source: { label: 'Microsoft Learn — MB-910 exam page', url: 'https://learn.microsoft.com/en-us/credentials/certifications/dynamics-365-fundamentals/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/900 and certification renews annually.'
  },
  studyPlan: {
    summary: 'Plan for roughly 2 to 4 weeks and 20 to 40 hours of study for MB-910, working through the free Microsoft Learn learning paths and calibrating with the official practice assessment — the fundamentals exam rewards broad coverage of the Dynamics 365 app family, so the study plan is breadth-first. The exam covers: the Dynamics 365 apps across the customer engagement family (marketing, sales, customer service, field service) and the finance and operations family (finance, supply chain, commerce, human resources, project operations), the Business Central app, and the cross-cutting concepts of business applications and implementation. The most effective sequence is: first, complete the official Learn learning paths for the exam in order; second, take notes on each app\u2019s purpose and business value, since the exam asks what each app does and when to use it; third, run the official practice assessment to find weak app areas; fourth, re-study those apps; and fifth, book the exam. The highest-yield habit is building the app-purpose map — for each Dynamics 365 app, one line on what it does and the business scenario it serves — because the exam\u2019s signature item presents a business need and asks which app addresses it. Budget the final days for reviewing the app map and the implementation-concepts content. After passing, plan the annual renewal and the next step — the role-based functional consultant exams (MB-210, MB-230, MB-920/930) that the consultant career path requires.',
    totalHours: '20-40 study hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Learn paths', tasks: ['Complete the official Learn learning paths', 'Build the app-purpose map for each Dynamics 365 app', 'Review business-application concepts'], hours: 20 },
      { label: 'Week 3', focus: 'Practice + gaps', tasks: ['Take the official practice assessment', 'Re-study weak app areas', 'Drill which-app items'], hours: 10 },
      { label: 'Week 4', focus: 'Exam readiness', tasks: ['Review the app map', 'Light practice pass', 'Book the exam'], hours: 5 }
    ],
    variants: [
      { label: 'Role-based consultant exams', detail: 'The functional consultant track (e.g. MB-210, MB-230) builds on the fundamentals foundation.' },
      { label: 'MB-920/930', detail: 'Related fundamentals exams for finance and supply chain / customer engagement specialisation.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes MB-910 is "build the app-purpose map and calibrate with the official practice assessment," and the single biggest error is studying one or two Dynamics 365 apps in depth and missing the exam\u2019s breadth. A second proven approach is mastering the "which app" item format — the exam presents a business scenario and asks which Dynamics 365 app addresses it, so building a one-line purpose map for every app is the highest-yield study artifact. Third, complete the free Microsoft Learn paths rather than third-party summaries, since the Learn modules mirror the exam\u2019s coverage and terminology. Fourth, use the official practice assessment to calibrate readiness — the fundamentals exams have a distinctive question style, and your practice score is the honest signal. Fifth, keep the timeline short: this is an entry exam, and a two-to-four-week plan with daily study blocks beats a dragged-out schedule. Finally, plan the renewal (12 months) and the consultant-exam next step, since the fundamentals credential\u2019s career value compounds when it leads into the role-based track.',
    items: [
      { title: 'Build the app-purpose map', detail: 'The "which app" items are the exam\u2019s signature; know each app\u2019s one-line value.' },
      { title: 'Study breadth, not depth', detail: 'The fundamentals exam samples the whole product family.' },
      { title: 'Use the official Learn paths', detail: 'They mirror the exam\u2019s coverage and terminology.' },
      { title: 'Calibrate with the practice assessment', detail: 'The question style is distinctive; practice scores are honest signals.' },
      { title: 'Plan the consultant track', detail: 'The credential\u2019s value compounds into the role-based exams.' }
    ]
  },
  resourceComparison: {
    summary: 'MB-910 is one of the cheapest Microsoft certifications: the exam fee is $99, the Learn learning paths are free, and a trial environment (Dynamics 365 trials) is available at no cost. The comparison below separates the official resources, the exam, and commercial prep, with prices current to this review. The buying rule is to use the free official resources first; a commercial Q-bank is optional reinforcement for candidates who want extra practice volume.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn learning paths', values: ['Free', 'Online modules', 'The official syllabus'] },
      { label: 'Dynamics 365 trial environments', values: ['Free', 'Hands-on trials', 'Seeing the apps in practice'] },
      { label: 'MB-910 exam registration', values: ['$99', 'Pearson VUE or online proctored', 'The exam itself'] },
      { label: 'Microsoft official practice assessment', values: ['~$0-25', 'Online practice exam', 'Readiness calibration'] },
      { label: 'Commercial Q-banks', values: ['~$20-50', 'Online practice questions', 'Supplemental drilling'] }
    ],
    footnote: 'Prices approximate and dated to this review; the certification renews annually via a short assessment.'
  },
  commonMistakes: {
    summary: 'The most common mistake is studying one Dynamics 365 app in depth and missing the exam\u2019s breadth across the product family; the second is skipping the official Learn paths and using general business-software knowledge. A third recurring error is confusing the customer-engagement apps (sales, service) with the finance-and-operations apps (finance, supply chain) on the "which app" items. Candidates also routinely book the exam without the practice assessment, and many let the one-year renewal lapse, losing the credential. Finally, some candidates expect the fundamentals exam to qualify them for consultant roles directly, ignoring the role-based track the certification is designed to precede.',
    items: [
      { mistake: 'Studying depth over breadth', fix: 'The exam samples the whole app family; build the app-purpose map.' },
      { mistake: 'Skipping the Learn paths', fix: 'The official modules mirror the exam\u2019s coverage and terminology.' },
      { mistake: 'Confusing the app families', fix: 'Separate customer-engagement from finance-and-operations apps on which-app items.' },
      { mistake: 'Booking without calibration', fix: 'Take the official practice assessment first.' },
      { mistake: 'Missing the annual renewal', fix: 'Complete the renewal assessment within 12 months.' }
    ]
  },
  questionTypes: {
    summary: 'MB-910 contains approximately 40 to 60 questions in about 60 minutes, scored pass/fail at 700 on the 100-900 scale, covering the Dynamics 365 app family and business-application concepts. The signature item format presents a business scenario and asks which Dynamics 365 app or capability addresses it. The samples below are editor-written illustrations of the published skills-measured document, not live exam items.',
    types: [
      { name: 'Customer engagement apps', share: '~30%', detail: 'Marketing, sales, customer service, and field service.' },
      { name: 'Finance & operations apps', share: '~30%', detail: 'Finance, supply chain, commerce, HR, and project operations.' },
      { name: 'Business Central', share: '~15%', detail: 'The small-to-midsize business ERP.' },
      { name: 'Business-applications concepts', share: '~25%', detail: 'Low-code, AI, and implementation considerations.' }
    ],
    samples: [
      {
        prompt: 'A sales organisation wants to track leads, opportunities, and quotes. Which Dynamics 365 app fits?',
        options: ['A. Dynamics 365 Finance', 'B. Dynamics 365 Sales', 'C. Dynamics 365 Supply Chain Management', 'D. Dynamics 365 Project Operations'],
        answer: 'B',
        explanation: 'Dynamics 365 Sales manages the sales pipeline from lead to opportunity to quote.'
      },
      {
        prompt: 'A manufacturing company needs to manage inventory and production. Which app addresses this?',
        options: ['A. Dynamics 365 Marketing', 'B. Dynamics 365 Sales', 'C. Dynamics 365 Supply Chain Management', 'D. Dynamics 365 Customer Service'],
        answer: 'C',
        explanation: 'Supply Chain Management covers inventory, procurement, and production operations.'
      },
      {
        prompt: 'Which Dynamics 365 app is designed for small and mid-sized businesses seeking an ERP?',
        options: ['A. Dynamics 365 Business Central', 'B. Dynamics 365 Marketing', 'C. Dynamics 365 Field Service', 'D. Dynamics 365 Human Resources'],
        answer: 'A',
        explanation: 'Business Central is the ERP for small and mid-sized organisations.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills-measured document, not live exam items.'
  },
  examDay: {
    summary: 'MB-910 is taken at a Pearson VUE testing center or online proctored: approximately 40 to 60 questions in about 60 minutes, pass/fail at 700 on the 100-900 scale, with results typically available within a day. The core rules: bring valid photo ID for center delivery; for online proctoring, complete the environment check with a quiet room, webcam, and no second screens. After passing, the certification is valid for 12 months with a short renewal assessment. The most useful exam-day habits: pace at about a minute per question, answer every item (no penalty for guessing), and on the which-app items, match the business scenario to the app\u2019s core purpose rather than over-thinking. If you do not pass, Microsoft allows retakes after a 24-hour wait for the first retake. After the exam, plan the renewal and the consultant-exam next step, and add the credential to your profile — the fundamentals certification is a useful entry signal for Dynamics ecosystem roles.',
    bring: ['Valid photo ID (center) or proctoring-ready environment (online)', 'Microsoft account credentials', 'Arrival 15-30 minutes early'],
    leave: ['Phone, smartwatch, and study materials', 'Personal notes in the testing room'],
    timeline: [
      { time: 'Study', detail: 'Complete Learn paths, build the app map, take the practice assessment.' },
      { time: 'Exam', detail: '40-60 questions in ~60 minutes; 700/900 to pass.' },
      { time: 'Result', detail: 'Pass/fail in a day; certification valid 12 months.' },
      { time: 'Next', detail: 'Plan the renewal and the consultant-exam track.' }
    ],
    rules: ['~40-60 questions, ~60 minutes', '700/900 passing score', 'Center or online proctored', 'Annual renewal assessment'],
    afterwards: 'Passing MB-910 earns the Microsoft Dynamics 365 Fundamentals certification (valid 12 months), the entry credential for the Dynamics ecosystem, leading into the role-based consultant exams.'
  }
};

export default data;
