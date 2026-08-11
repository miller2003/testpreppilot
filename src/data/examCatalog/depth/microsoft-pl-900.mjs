const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, data & analytics certifications desk',
    bio: 'We cover Microsoft fundamentals and role-based certifications. Format and fee facts come from Microsoft Learn official pages and are revised frequently; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PL-900 exam structure, scoring and fees against Microsoft Learn official pages; verified BLS management-analyst wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'PL-900 is the entry credential for the Power Platform: management analysts earned a $95,290 median in May 2024 (BLS)',
    summary: 'PL-900 (Microsoft Power Platform Fundamentals) certifies foundational knowledge of the Power Platform - Power Apps, Power Automate, Power BI and Power Virtual Agents (Copilot Studio in the current naming) - and its role in business solutions. It is an entry-level fundamentals certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the business and IT roles that use the platform. BLS reported that management analysts (SOC 13-1111) earned a median of $95,290 in May 2024 (OEWS), and data scientists (15-2051) about $112,590; the Power Platform is used across business-analyst, citizen-developer and IT roles to build apps, automate workflows and analyze data without heavy coding, and the fundamentals credential is the standard starting point for those pathways. The structural point is that PL-900 is one of Microsoft\u2019s most-taken fundamentals exams - the entry point to the Power Platform certifications (PL-100/200/300/400/500) - and its value is the credential that evidences platform literacy on a resume, particularly for business analysts, functional consultants and citizen developers. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the entry signal in a market where low-code skills are increasingly demanded. The exam is short (about 45 minutes, 40-60 questions), passes at 700/1000, costs about $99 (with student discounts), and the certification is valid for one year with free online renewal.',
    rows: [
      { label: 'Management analysts median, May 2024', value: '$95,290', note: 'BLS OEWS, SOC 13-1111' },
      { label: 'Data scientists median, May 2024', value: '$112,590', note: 'BLS OEWS, SOC 15-2051' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'PL-900 exam time', value: '~45 minutes', note: 'Microsoft Learn, fundamentals level' }
    ],
    growth: 'Management-analyst employment is projected to grow 7 percent from 2024 to 2034; low-code skills are increasingly part of the role.',
    source: { label: 'BLS Occupational Outlook Handbook - Management Analysts', url: 'https://www.bls.gov/ooh/business-and-financial/management-analysts.htm' }
  },
  passRate: {
    headline: 'PL-900 requires a passing score of 700 on a 1000-point scale; Microsoft publishes no pass rates',
    summary: 'Microsoft does not publish pass rates for PL-900 or its other fundamentals exams, but the assessment mechanics are public. PL-900 (Microsoft Power Platform Fundamentals) is a fundamentals-level exam of about 45 minutes with roughly 40-60 questions, delivered by Pearson VUE online or at test centers, with a passing score of 700 on a 1000-point scale. The exam covers four skill areas published by Microsoft: describe the business value of the Power Platform (the platform\u2019s components and their business use), describe the components of the Power Platform (Power Apps, Power Automate, Power BI, Power Virtual Agents/Copilot Studio, Dataverse and connectors), describe the business value of Microsoft 365 and Dynamics 365 apps as they integrate with the Power Platform, and describe basic security and governance considerations. The exam is fundamentals-level: it tests understanding and recognition rather than hands-on building, which is why it is a common first Microsoft certification for business and IT professionals. The certification is valid for one year (Microsoft moved fundamentals and role-based certifications to annual renewal in 2021), and renewal is free through a Microsoft Learn online assessment completed within the validity year. The honest summary is that the passing bar is 700/1000 on a short fundamentals exam, no pass-rate data exists, and the published skills-measured document is the authoritative preparation blueprint.',
    source: { label: 'Microsoft Learn - Exam PL-900', url: 'https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/1000 on a ~45-minute fundamentals exam with annual free renewal.'
  },
  studyPlan: {
    summary: 'A realistic PL-900 plan runs 15-30 hours over 1-3 weeks, even for candidates new to the Power Platform, because the exam is fundamentals-level. Week 1: complete the Microsoft Learn training path for PL-900 (the free "Microsoft Power Platform Fundamentals" learning path), which walks through the platform\u2019s components and their business value, and take the free practice assessment to calibrate. Week 2: hands-on exploration - create a trial Power Platform environment and click through Power Apps (canvas and model-driven apps), Power Automate (flows), Power BI (a basic report) and Copilot Studio (a basic agent), because the exam rewards recognizing where features live and what each component does; review the Microsoft Learn modules for any gaps the practice assessment exposed. Week 3: take the official practice test and sample questions, drill the exposed gaps, and take the real exam. The exam content clusters around: the business value of the platform (why organizations use it, common scenarios), the components and their roles (which component builds apps, automates workflows, analyzes data, or creates agents), the Dataverse and connectors (the data platform and integration), and security and governance basics. Candidates with any Microsoft 365 exposure can compress the plan to one week; complete newcomers should budget the full path. The exam fee is about $99 (student discounts available), and the certification requires annual renewal via a free Microsoft Learn assessment.',
    totalHours: '15-30 hours over 1-3 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Learning path and calibration', tasks: ['Microsoft Learn PL-900 path', 'Free practice assessment'], hours: 8 },
      { label: 'Week 2', focus: 'Hands-on exploration', tasks: ['Trial environment: Power Apps, Automate, BI, Copilot Studio', 'Review exposed gaps'], hours: 12 },
      { label: 'Week 3', focus: 'Practice and real exam', tasks: ['Official practice test', 'Drill gaps; take the exam'], hours: 6 }
    ],
    variants: [
      { label: 'Fast path', detail: 'Candidates with Microsoft 365 exposure can compress to one week with the learning path and practice test.' },
      { label: 'Renewal', detail: 'PL-900 is valid one year; renew free via a Microsoft Learn online assessment.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective PL-900 strategies exploit its fundamentals level: recognition and understanding, not building. Strategy one: learn which component does what - Power Apps builds apps, Power Automate automates workflows, Power BI analyzes data, Copilot Studio creates agents, and Dataverse stores the data - because component-identification items are the largest cluster and the distinctions are the exam\u2019s core. Strategy two: complete the Microsoft Learn training path, because it is free, written to the skills measured, and covers every objective; treat the practice assessment as the checkpoint. Strategy three: explore a trial environment hands-on for a few hours, because the exam rewards recognizing where features live, and candidates who have clicked through the components answer faster. Strategy four: learn the business-value framing - the exam asks why organizations use the platform and which component fits which business scenario - so study with business scenarios in mind, not just tool features. Strategy five: review the Dataverse and connectors concepts (the data platform, standard and custom tables, and how connectors integrate systems), which are a distinct testable area. Strategy six: verify the current exam code and renewal mechanics on Microsoft Learn, because the platform naming evolves (Power Virtual Agents became Copilot Studio) and the exam content tracks the current version.',
    items: [
      { title: 'Learn the component roles', detail: 'Apps, Automate, BI, Copilot Studio, Dataverse - what each does.' },
      { title: 'Complete the Learn path', detail: 'Free and written to the skills measured.' },
      { title: 'Explore a trial environment', detail: 'Recognition items reward hands-on clicking.' },
      { title: 'Study the business value', detail: 'Scenario items test which component fits which business need.' }
    ]
  },
  resourceComparison: {
    summary: 'The PL-900 resource market is anchored by Microsoft\u2019s free official content. The Microsoft Learn training path for Power Platform Fundamentals (free) covers all the objectives, and the free practice assessment approximates the exam; the skills-measured document (free) is the blueprint. Hands-on exploration requires a free Power Platform trial environment (sign up through Microsoft\u2019s free trial), so the learning stack can cost nothing beyond the exam fee. Paid resources: the Microsoft official practice test (roughly $100 or included in some bundles), third-party practice-question banks ($20-$100), and courses ($100-$1,000); the honest value ranking is free Microsoft content first, a paid practice-question bank second for exam-condition repetition, and courses mainly for structured schedules. The exam fee is about $99 (student discounts available), and the annual renewal is free. The honest ranking: Microsoft Learn path and skills-measured document (free), trial-environment exploration (free), a paid question bank for volume, and a course only for structure. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn PL-900 path', values: ['Free', 'Online', 'Primary content, aligned to the exam'] },
      { label: 'Skills-measured document', values: ['Free PDF', 'Downloadable', 'The exam blueprint'] },
      { label: 'Power Platform trial environment', values: ['Free', 'Web', 'Hands-on exploration'] },
      { label: 'Paid practice-question bank', values: ['$20-$100', 'Online', 'Exam-condition repetition'] },
      { label: 'Course or bootcamp', values: ['$100-$1,000', 'Live/on-demand', 'Structured schedule'] }
    ],
    footnote: 'Prices dated 2025-26; exam fee ~$99 USD with student discounts. Renewal is free annually. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common PL-900 mistakes come from over-studying or under-studying a fundamentals exam. Mistake one: over-preparing - treating a ~45-minute fundamentals exam like a role-based exam; candidates who spend hundreds of hours are over-investing, because the content is recognition-level and the free Learn path covers it. Mistake two: the opposite - skipping the hands-on exploration and guessing on component-recognition items; a few hours clicking through a trial environment answers the recognition questions that reading alone misses. Mistake three: confusing the components; the exam\u2019s core is knowing what Power Apps, Automate, BI and Copilot Studio each do, and candidates who blur them miss the largest cluster. Mistake four: using outdated materials that still call Power Virtual Agents by the old name or omit the current components; the platform naming evolves and the exam tracks the current version. Mistake five: ignoring the Dataverse and connectors section, which is a distinct testable area that self-study candidates often skip. Mistake six: letting the one-year validity lapse; PL-900 requires free annual renewal, and a lapsed certification disappears from the verifiable profile.',
    items: [
      { mistake: 'Over-preparing a fundamentals exam', fix: '15-30 hours is the realistic range; the Learn path covers it.' },
      { mistake: 'Skipping hands-on exploration', fix: 'Click through a trial environment for recognition items.' },
      { mistake: 'Confusing the components', fix: 'Learn what each component does - the exam\u2019s core.' },
      { mistake: 'Using outdated materials', fix: 'Match the current components and naming.' },
      { mistake: 'Letting the renewal lapse', fix: 'Renew free within one year on Microsoft Learn.' }
    ]
  },
  questionTypes: {
    summary: 'PL-900 is a Microsoft fundamentals exam of about 45 minutes with roughly 40-60 questions, delivered by Pearson VUE online or at test centers, passing at 700/1000. The four skill areas: describe the business value of the Power Platform, describe the components of the Power Platform (Power Apps, Power Automate, Power BI, Copilot Studio, Dataverse and connectors), describe the business value of Microsoft 365 and Dynamics 365 integration, and describe basic security and governance. Question formats include multiple choice, multiple select, and scenario-based items. Samples below are editor-written illustrations of the published skills measured, not live exam items.',
    types: [
      { name: 'Business value', share: '~25% of skills', detail: 'Why organizations use the platform and common scenarios.' },
      { name: 'Components', share: '~40% of skills', detail: 'Power Apps, Automate, BI, Copilot Studio, Dataverse, connectors.' },
      { name: 'M365 and Dynamics integration', share: '~20% of skills', detail: 'How the platform integrates with Microsoft 365 and Dynamics 365.' },
      { name: 'Security and governance', share: '~15% of skills', detail: 'Basic security, environments, and admin concepts.' }
    ],
    samples: [
      {
        prompt: 'A business analyst wants to create a data-entry app for the sales team without writing code, and store the data in a structured format. Which components are most appropriate?',
        options: ['A. Power Apps for the app and Dataverse for the data', 'B. Power BI for the app and Excel for the data', 'C. Copilot Studio for the app and SharePoint for the data', 'D. Power Automate for the app and Power BI for the data'],
        answer: 'A',
        explanation: 'Power Apps builds low-code apps and Dataverse provides structured, governed data storage; the other combinations mismatch the components\u2019 roles.'
      },
      {
        prompt: 'A team wants to automate the workflow that routes expense approvals to managers. Which component is most appropriate?',
        options: ['A. Power Automate', 'B. Power Apps', 'C. Power BI', 'D. Copilot Studio'],
        answer: 'A',
        explanation: 'Power Automate automates workflows and business processes, including approval flows; the other components build apps, analyze data, or create agents.'
      },
      {
        prompt: 'An organization needs a dashboard showing sales performance from multiple data sources. Which component is most appropriate?',
        options: ['A. Power BI', 'B. Power Apps', 'C. Dataverse', 'D. Copilot Studio'],
        answer: 'A',
        explanation: 'Power BI analyzes data and builds reports and dashboards from multiple sources; the other components build apps, store data, or create agents.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills measured, not live exam items.'
  },
  examDay: {
    summary: 'PL-900 is delivered by Pearson VUE at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; personal electronics are not permitted. The exam runs about 45 minutes, and the passing score is 700/1000; results appear on screen shortly after. For online delivery, complete the Pearson VUE system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. After passing, the certification is added to the Microsoft Learn profile with a badge; it is valid one year, and renewal is free through a Microsoft Learn online assessment within the validity year. Afterwards, add the badge to LinkedIn and your resume, set the renewal reminder, and consider the next Power Platform certifications (such as the PL-200 functional consultant or PL-300 data analyst) for the career path.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Microsoft Learn sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~45 minutes; 40-60 questions; 700/1000 passes.' },
      { time: 'After the exam', detail: 'Score on screen; badge added to the Microsoft profile.' },
      { time: 'Within 1 year', detail: 'Complete the free renewal assessment.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The passing score is 700 on a 1000-point scale.',
      'The certification is valid 1 year with free online renewal.',
      'Verify the current exam content on Microsoft Learn.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, set the renewal reminder, and plan the next Power Platform certification (PL-200 or PL-300) for the career path.'
  }
};

export default data;
