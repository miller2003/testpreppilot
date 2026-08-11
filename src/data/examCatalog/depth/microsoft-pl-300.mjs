const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Cloud, data & analytics certifications desk',
    bio: 'We cover Microsoft role-based certifications. Format and fee facts come from Microsoft Learn official pages and are revised frequently; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the PL-300 exam structure, scoring, fees and renewal against Microsoft Learn official pages; verified BLS data-science wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'PL-300 certifies Power BI data analysis: data scientists earned a $112,590 median in May 2024 (BLS)',
    summary: 'PL-300 (Microsoft Power BI Data Analyst) certifies the skills to build data models, create reports and dashboards, and deliver business insight with Power BI - one of the most widely deployed analytics tools in the world. It is a role-based certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the analytics and data occupations that use it. BLS reported that data scientists (SOC 15-2051) earned a median of $112,590 in May 2024, projected to grow 22 percent from 2024 to 2034; related occupations include statisticians (15-2041) at about $99,460 and operations research analysts (15-2031) at about $83,610 (OEWS May 2024). The structural point is that the certification signals hands-on Power BI proficiency - DAX measures, data modeling, row-level security, and report deployment - which is exactly the skill set analytics teams hire for, and employers commonly list Power BI experience in analyst job descriptions. BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the hireability and promotion signal in a market where analytics roles carry the six-figure medians BLS documents. The certification is one of Microsoft\u2019s most-taken role-based exams, and it sits on the Power Platform and data path: it pairs naturally with the data-engineering and Azure data certifications. For an analyst already working with Excel or SQL, PL-300 is the credential that formalizes Power BI proficiency into a marketable certificate.',
    rows: [
      { label: 'Data scientists median, May 2024', value: '$112,590', note: 'BLS OEWS, SOC 15-2051' },
      { label: 'Statisticians median, May 2024', value: '~$99,460', note: 'BLS OEWS, SOC 15-2041' },
      { label: 'Operations research analysts median, May 2024', value: '~$83,610', note: 'BLS OEWS, SOC 15-2031' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Data-scientist employment is projected to grow 22 percent from 2024 to 2034, much faster than the average.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'PL-300 requires a passing score of 700 on a 1000-point scale; Microsoft publishes no pass rates',
    summary: 'Microsoft does not publish pass rates for PL-300 or any of its role-based exams; the only official passing information is the scaled-score threshold of 700 on a 1000-point scale. The exam runs about 100 minutes (the length Microsoft lists for PL-300) with roughly 40-60 questions, including case studies and performance-based labs that can add time; the exact question count and time are stated on the Microsoft Learn exam page and can vary with the current version, so candidates must verify the published details before booking. The exam covers four skill areas measured by Microsoft\u2019s published skills measured document: prepare the data (getting data, cleaning, transforming), model the data (tables, relationships, DAX measures, row-level security), visualize and analyze the data (report design, charts, AI visuals, dashboards), and deploy and maintain deliverables (workspaces, apps, paginated reports, performance). Microsoft retired the older DA-100 exam and replaced it with PL-300, so candidates must register for the current exam code. The certification is valid for one year (Microsoft moved role-based certifications to annual renewal in 2021), and renewal is free through a Microsoft Learn online assessment completed within the validity year. The honest summary is that the passing bar is a 700 scaled score, no pass-rate data exists, and the current exam code and skills measured document are the authoritative preparation blueprint.',
    source: { label: 'Microsoft Learn - Exam PL-300', url: 'https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/' },
    caveat: 'Microsoft publishes no pass rates; the passing score is 700/1000. Verify the current exam length and code on Microsoft Learn.'
  },
  studyPlan: {
    summary: 'A realistic PL-300 plan runs 60-100 hours over 6-10 weeks for someone with working Excel/SQL experience, and 100-150 hours for a newcomer to Power BI. Week 1: take the free Microsoft Learn practice assessment and build a baseline by working through the first skill area (prepare the data) in Power BI Desktop. Weeks 2-4: complete the Microsoft Learn training paths for data modeling and DAX, which are the conceptual core - star schemas, relationships, calculated columns vs measures, CALCULATE and the filter context - and practice by rebuilding a sample dataset with your own measures. Weeks 5-7: visualization and analytics - report design, bookmarks, drillthrough, AI visuals, and dashboards in the Power BI service - and deployment (workspaces, apps, row-level security, paginated reports). Weeks 8-9: timed practice with the Microsoft official practice tests and sample question sets, focusing on the case-study format, which bundles a scenario with multiple questions. Week 10: final review of the skills-measured document, one full practice run, and exam booking. The dominant resources are Microsoft Learn\u2019s free training paths (officially aligned with the exam), free hands-on labs, and a Power BI Desktop installation for daily practice; the certification fee is about $165 (USD, regional pricing varies), with discounts for students. The exam is delivered by Pearson VUE online or at test centers.',
    totalHours: '60-150 hours over 6-10 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Free practice assessment', 'Prepare-the-data exercises in Power BI Desktop'], hours: 8 },
      { label: 'Weeks 2-4', focus: 'Modeling and DAX', tasks: ['Microsoft Learn training paths', 'Build measures and relationships on a sample dataset'], hours: 30 },
      { label: 'Weeks 5-7', focus: 'Visualization and deployment', tasks: ['Reports, dashboards, bookmarks', 'Workspaces, apps, RLS, paginated reports'], hours: 30 },
      { label: 'Weeks 8-9', focus: 'Timed practice', tasks: ['Official practice tests', 'Case-study format practice'], hours: 20 },
      { label: 'Week 10', focus: 'Final review', tasks: ['Skills-measured document review', 'One full practice run'], hours: 12 }
    ],
    variants: [
      { label: 'Newcomer path', detail: 'Without Power BI experience, add 2-3 weeks of daily tool practice before the formal plan.' },
      { label: 'Annual renewal', detail: 'PL-300 requires a free Microsoft Learn online assessment within one year to renew.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective PL-300 strategies combine the official learning path with hands-on tool practice, because the exam rewards applied skills. Strategy one: install Power BI Desktop on day one and practice daily, because the exam tests the tool\u2019s behaviors (where buttons are, what the default actions are) that only hands-on use embeds; reading without doing underperforms on the lab-style questions. Strategy two: master the DAX fundamentals - CALCULATE, filter context, row context, time intelligence - because DAX questions are the most-difficult cluster and the most common cause of failing the modeling section; practice by writing measures from scratch, not just recognizing them. Strategy three: use the Microsoft Learn training paths as the primary content source, because they are written to the exam\u2019s skills measured and are free; treat the practice assessments as the checkpoint. Strategy four: practice the case-study format, which presents a business scenario with multiple questions and requires synthesizing several skills at once; Microsoft\u2019s official practice tests and the exam description cover the format. Strategy five: learn the "default" behaviors - what Power BI does when you create a relationship, what the implicit measures do, how row-level security filters - because the exam tests the platform\u2019s standard behavior, not edge-case overrides. Strategy six: time-box the exam-day logistics - verify the Pearson VUE system requirements for online delivery and run the equipment check ahead, because a failed check wastes the attempt.',
    items: [
      { title: 'Practice in Power BI Desktop daily', detail: 'The exam tests tool behaviors only hands-on use embeds.' },
      { title: 'Master DAX fundamentals', detail: 'CALCULATE and filter context are the hardest and most common failure point.' },
      { title: 'Use Microsoft Learn paths', detail: 'Free, aligned to the skills measured, and the primary content source.' },
      { title: 'Practice case studies', detail: 'The bundled scenario format synthesizes multiple skills.' },
      { title: 'Learn the default behaviors', detail: 'The exam tests standard platform behavior, not edge cases.' }
    ]
  },
  resourceComparison: {
    summary: 'The PL-300 resource market is anchored by Microsoft\u2019s free official content, which is unusually complete. The Microsoft Learn training paths for the Data Analyst Associate certification (free) cover the four skill areas with modules, demos and labs, and Microsoft publishes the skills-measured document (free) that is the exam blueprint; the free practice assessment approximates the exam format. Hands-on practice requires Power BI Desktop (free download) and a Power BI service account (free or trial), so the entire learning stack can cost nothing beyond the exam fee. Paid resources: the Microsoft official practice test (a paid practice exam on Microsoft\u2019s partner site, roughly $100 or included in some bundles), third-party practice-question banks ($20-$100), and courses ($100-$1,000) or bootcamps; the honest value ranking is free Microsoft content first, a paid practice-question bank second for exam-condition repetition, and courses mainly for structured schedules. The exam fee is about $165 (USD, regional pricing varies), and the annual renewal is free. The honest ranking: Microsoft Learn paths and skills-measured document (free), Power BI Desktop practice (free), a paid question bank for volume, and a course only for structure. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Microsoft Learn training paths', values: ['Free', 'Online', 'Primary content, aligned to the exam'] },
      { label: 'Skills-measured document', values: ['Free PDF', 'Downloadable', 'The exam blueprint'] },
      { label: 'Power BI Desktop + free practice assessment', values: ['Free', 'Desktop/online', 'Hands-on practice and baseline'] },
      { label: 'Paid practice-question bank', values: ['$20-$100', 'Online', 'Exam-condition repetition'] },
      { label: 'Course or bootcamp', values: ['$100-$1,000', 'Live/on-demand', 'Structured schedule'] }
    ],
    footnote: 'Prices dated 2025-26; exam fee ~$165 USD with regional variation. Renewal is free annually. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common PL-300 mistakes come from under-preparing the DAX and deployment sections and from treating the exam as a multiple-choice-only test. Mistake one: learning DAX by recognition instead of by writing measures; the exam tests applied DAX, and candidates who can read DAX but cannot write it under time pressure fail the modeling questions. Mistake two: ignoring the deployment and maintenance skill area (workspaces, apps, row-level security, paginated reports, performance optimization), which is a full quarter of the skills measured and is commonly skipped by candidates who focus on visualization. Mistake three: never practicing with the case-study format; the bundled-scenario questions are time-consuming, and candidates who meet them cold misallocate the exam time. Mistake four: practicing without the tool; the exam rewards knowing Power BI\u2019s actual behaviors, and candidates who study only from notes lose the lab-style items. Mistake five: assuming the certification is permanent; PL-300 requires annual renewal, and a lapsed certification must be re-earned with the exam. Mistake six: registering for the retired DA-100 content; third-party materials still circulate for the old exam, and practicing DA-100 content trains the wrong skills. Finally, candidates should verify the current exam code and length on Microsoft Learn before booking, because Microsoft updates role-based exams over time.',
    items: [
      { mistake: 'Reading DAX instead of writing it', fix: 'Write measures from scratch in daily practice.' },
      { mistake: 'Skipping deployment skills', fix: 'Workspaces, RLS and paginated reports are ~25% of the exam.' },
      { mistake: 'Meeting case studies cold', fix: 'Practice the bundled-scenario format under time.' },
      { mistake: 'Studying without the tool', fix: 'Practice in Power BI Desktop every session.' },
      { mistake: 'Using DA-100 (retired) content', fix: 'Verify the current PL-300 code and blueprint.' }
    ]
  },
  questionTypes: {
    summary: 'PL-300 is a Microsoft role-based exam with roughly 40-60 questions over about 100 minutes, including case studies and lab-style items; the exact counts are stated on the Microsoft Learn page and can vary by version. The four skill areas are: prepare the data (get data, transform and clean with Power Query), model the data (relationships, DAX measures, row-level security), visualize and analyze the data (report design, charts, AI visuals, dashboards), and deploy and maintain deliverables (workspaces, apps, paginated reports, performance). Question formats include multiple choice, multiple select, drag-and-drop, and case studies. The passing score is 700/1000. Samples below are editor-written illustrations of the published skills measured, not live exam items.',
    types: [
      { name: 'Prepare the data', share: '~25% of skills', detail: 'Power Query transforms, data sources, cleaning.' },
      { name: 'Model the data', share: '~30% of skills', detail: 'Relationships, DAX measures, RLS.' },
      { name: 'Visualize and analyze', share: '~25% of skills', detail: 'Report design, charts, AI visuals, dashboards.' },
      { name: 'Deploy and maintain', share: '~20% of skills', detail: 'Workspaces, apps, paginated reports, performance.' }
    ],
    samples: [
      {
        prompt: 'A data model has a Sales table and a Date table connected by a many-to-one relationship on the date key. A measure needs to compute year-over-year growth. Which DAX function is most appropriate for shifting the comparison period?',
        options: ['A. FILTER', 'B. SAMEPERIODLASTYEAR', 'C. SUMX', 'D. RANKX'],
        answer: 'B',
        explanation: 'SAMEPERIODLASTYEAR shifts the date filter back one year, which is the standard pattern for year-over-year measures; the others serve different purposes (filtering, row iteration, ranking).'
      },
      {
        prompt: 'A report must show only the rows a user is allowed to see, based on the user\u2019s email in a Users table. Which feature implements this in the Power BI service?',
        options: ['A. Row-level security (RLS)', 'B. Page-level filters', 'C. Bookmarks', 'D. Drillthrough'],
        answer: 'A',
        explanation: 'Row-level security defines DAX-based filters that restrict data by user identity; page filters, bookmarks and drillthrough do not enforce per-user data access.'
      },
      {
        prompt: 'A query combines 12 monthly CSV files that share the same structure. Which Power Query step most efficiently consolidates them?',
        options: ['A. Append queries after loading each file', 'B. Load from a folder and combine binaries with the sample-file transformation', 'C. Merge the files on a common key', 'D. Import each file into a separate table'],
        answer: 'B',
        explanation: 'Power Query\u2019s folder-based combine applies the sample-file transformations to all files and appends them, which is the efficient consolidation pattern; manual appends or separate tables do not scale.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills measured, not live exam items.'
  },
  examDay: {
    summary: 'PL-300 is delivered by Pearson VUE at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; personal electronics are not permitted. The exam runs about 100 minutes plus case-study time and instructions, and the screen shows a timer; candidates cannot bring notes or materials. For online delivery, complete the Pearson VUE system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules (no second monitors, no notes). The passing score is 700/1000, and results are available on screen shortly after the exam (for most candidates, within minutes or hours) with an official record in the Microsoft Learn profile. After passing, the certification is added to the profile with a badge; the certification is valid one year, and renewal is free through a Microsoft Learn online assessment within the validity year. Afterwards, add the badge to LinkedIn and resume, and plan the renewal assessment reminder, plus any follow-on certifications (such as the data-engineering or Azure data path).',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Knowledge of your Microsoft Learn sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~100 minutes plus case-study time; 40-60 questions.' },
      { time: 'After the exam', detail: 'Score on screen; 700/1000 passes.' },
      { time: 'Within 1 year', detail: 'Complete the free renewal assessment on Microsoft Learn.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The passing score is 700 on a 1000-point scale.',
      'No notes or materials are permitted in the exam.',
      'The certification is valid 1 year with free online renewal.'
    ],
    afterwards: 'Verify the badge in your Microsoft Learn profile, add it to LinkedIn and your resume, and set the renewal assessment reminder within the year.'
  }
};

export default data;
