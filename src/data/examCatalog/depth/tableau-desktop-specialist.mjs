const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Data analytics & business-intelligence desk',
    bio: 'We cover Tableau certifications for data analytics. Format and fee facts come from Tableau official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Tableau Desktop Specialist exam structure, scoring and fees against Tableau official pages; verified BLS data-science wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Tableau Desktop Specialist evidences analytics-viz skill: data scientists earned a $112,590 median in May 2024 (BLS)',
    summary: 'The Tableau Desktop Specialist certification evidences foundational proficiency with Tableau Desktop - connecting to data, building worksheets and dashboards, and creating visualizations - which is one of the most widely used analytics and business-intelligence tools in the market. It is a vendor certification rather than a job license, so no single BLS SOC code attaches to it; the salary story belongs to the data and analytics occupations that use it. BLS reported that data scientists (SOC 15-2051) earned a median of $112,590 in May 2024, projected to grow 22 percent from 2024 to 2034, and statisticians (15-2041) about $99,460; analytics, business-intelligence and data-visualization roles that list Tableau sit in these ranges, and Tableau proficiency is a common requirement in analyst job postings. The structural point is that the Desktop Specialist is Tableau\u2019s entry-level certification (succeeding the retired Desktop Qualified Associate), and it evidences hands-on tool skill - data connections, table calculations, filters, charts and dashboarding - which is exactly what analytics teams hire for; it is also the natural precursor to the higher Tableau certifications (Data Analyst, Server Certified Associate, and the Architect/Consultant tiers). BLS classifies workers by occupation, not certifications, so no certificate maps to a specific wage; the value is the tool-specific signal in a market where visualization and analytics skills differentiate candidates. The exam is performance-based (the candidate builds solutions in Tableau Desktop during the test), runs 60 questions in 90 minutes (verify the current format), passes at 70 percent, and costs about $250.',
    rows: [
      { label: 'Data scientists median, May 2024', value: '$112,590', note: 'BLS OEWS, SOC 15-2051' },
      { label: 'Statisticians median, May 2024', value: '~$99,460', note: 'BLS OEWS, SOC 15-2041' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Desktop Specialist exam', value: '60 questions / 90 min (verify)', note: 'Tableau, 70% passing' }
    ],
    growth: 'Data-scientist employment is projected to grow 22 percent from 2024 to 2034; Tableau remains a leading analytics tool in job postings.',
    source: { label: 'BLS Occupational Outlook Handbook - Data Scientists', url: 'https://www.bls.gov/ooh/math/data-scientists.htm' }
  },
  passRate: {
    headline: 'Tableau Desktop Specialist requires 70 percent on the exam; Tableau publishes no pass rates',
    summary: 'Tableau does not publish pass rates for its certifications, but the assessment mechanics are public. The Tableau Desktop Specialist exam is a performance-based, computer-based test: the candidate answers questions while working in Tableau Desktop, with the exam software recording actions; the current format is 60 questions in 90 minutes with a passing score of 70 percent (verify the current question count, time and passing line on the Tableau certification page, as Tableau has updated the exam over the years). The exam covers the published skills areas: connecting to data (data source types, connections, data preparation), building data visualizations (marks, chart types, axes, filters, sorting), and analyzing data (groups, sets, calculations, table calculations, parameters), plus dashboard and story creation. Because the exam is performance-based, candidates must know where features live in Tableau Desktop and complete the actions, not just recall concepts. The exam is delivered by Pearson VUE online or at test centers, costs about $250 (verify current pricing), and the certification does not have a mandatory expiry under Tableau\u2019s current policy (verify the current validity, as Tableau has reviewed its certification lifecycle). The honest summary is that the passing bar is 70 percent on a performance-based exam, no pass-rate data exists, and the published exam guide with the skills areas is the authoritative preparation blueprint.',
    source: { label: 'Tableau Desktop Specialist certification', url: 'https://www.tableau.com/learn/certification' },
    caveat: 'Tableau publishes no pass rates; the exam requires 70% and is performance-based in Tableau Desktop (verify the current format and validity).'
  },
  studyPlan: {
    summary: 'A realistic Tableau Desktop Specialist plan runs 30-60 hours over 2-4 weeks for an analyst with some Tableau exposure, and 60-100 hours for a newcomer. The exam is performance-based, so preparation is about doing the work in Tableau Desktop. Week 1: download Tableau Desktop (the free trial or the free Tableau Public, which covers most features), review the published exam guide with the skills areas, and take a baseline - build a basic worksheet and dashboard to see where you stand; most candidates discover gaps in the features they rarely use (table calculations, sets, parameters, LOD expressions at the basics). Weeks 2-3: work through the skills areas with hands-on practice - connect to multiple data sources and prepare data, build the chart types and use marks, axes, filters and sorting; practice calculations (calculated fields, table calculations) and the analysis features (groups, sets, parameters); then build dashboards and stories. Week 4: take the official practice exam and sample questions, drill the exposed gaps, and take the real exam. The dominant resources are the Tableau free training videos and the official eLearning (much of it free), the official practice exam, and hands-on practice with public datasets; the exam fee is about $250, and Tableau\u2019s free training path covers the scope.',
    totalHours: '30-100 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline and exam guide', tasks: ['Install Tableau Desktop/Public', 'Review the skills areas; build a baseline viz'], hours: 8 },
      { label: 'Weeks 2-3', focus: 'Skills-area practice', tasks: ['Data connections and prep', 'Calculations, sets, parameters, dashboards'], hours: 35 },
      { label: 'Week 4', focus: 'Practice exam and real exam', tasks: ['Official practice exam', 'Drill gaps; take the real exam'], hours: 12 }
    ],
    variants: [
      { label: 'Beginner path', detail: 'Add 2 weeks of daily Tableau practice before the formal plan if the baseline is weak.' },
      { label: 'Career path', detail: 'The Desktop Specialist leads to the Data Analyst and Server certifications for the analytics career track.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Tableau Desktop Specialist strategies are hands-on and skills-driven. Strategy one: practice in Tableau Desktop daily - the exam is performance-based and rewards knowing exactly where features live, and candidates who study screenshots without doing the work underperform on the timed tasks. Strategy two: use the published exam guide as the checklist - the skills areas define the scope, and candidates who work through them systematically cover the features they rarely use (table calculations, sets, parameters, LOD basics). Strategy three: master the calculation and analysis features, because calculated fields and table calculations are the most common gap for self-taught users and a heavy share of the exam. Strategy four: learn the data-connection and preparation steps - connecting to multiple data sources, joins and blends at the basics, and data-pane organization - because data-connection items open the exam. Strategy five: practice dashboard and story creation, because the exam tests assembling worksheets into dashboards with actions and filters. Strategy six: use the official practice exam for the final week, because it replicates the performance format and the timing, and it is the closest predictor of readiness.',
    items: [
      { title: 'Practice in Tableau daily', detail: 'The performance-based exam rewards interface fluency.' },
      { title: 'Work the exam guide checklist', detail: 'The skills areas define the scope.' },
      { title: 'Master calculations', detail: 'Calculated fields and table calculations are the common gap.' },
      { title: 'Learn data connections', detail: 'Connections and prep open the exam.' },
      { title: 'Use the official practice exam', detail: 'The closest format match for the final week.' }
    ]
  },
  resourceComparison: {
    summary: 'The Tableau Desktop Specialist resource market has a strong free core. Tableau provides free training videos and a large share of the eLearning free (the Tableau eLearning platform includes free content, with the full subscription paid), plus the free exam guide and the official practice exam (verify current pricing for the practice exam, commonly modest). Hands-on practice requires Tableau Desktop (the free 14-day trial or the permanently free Tableau Public, which covers most features for practice) - so the learning stack can cost nothing beyond the exam fee. Commercial prep courses and question banks ($50-$400) add structure and practice volume, and the honest caveat is that only hands-on practice matches the performance format. The exam fee is about $250 (verify current pricing). The honest ranking: the free training videos and eLearning, Tableau Public or the trial for practice, the official practice exam, and a course only for structured learners. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Tableau free training videos', values: ['Free', 'Online', 'Feature and skill tutorials'] },
      { label: 'Tableau Public / Desktop trial', values: ['Free', 'Desktop', 'The hands-on practice surface'] },
      { label: 'Official practice exam', values: ['Modest fee (verify)', 'Online', 'Format calibration'] },
      { label: 'Commercial course / question bank', values: ['$50-$400', 'Online', 'Structure and practice volume'] }
    ],
    footnote: 'Prices dated 2025-26; the Desktop Specialist exam fee is ~$250. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Tableau Desktop Specialist mistakes come from studying instead of doing. Mistake one: reading about Tableau or watching videos without building in the tool; the exam is performance-based, and candidates who cannot navigate the interface quickly run out of time. Mistake two: skipping the calculations; calculated fields and table calculations are the most common gap and a heavy share of the exam, and candidates who avoid the math lose the largest cluster. Mistake three: ignoring the data-connection and preparation items; the exam opens with data skills, and candidates who only practiced visualization are surprised. Mistake four: practicing without the official exam guide; the skills areas define the scope, and candidates who practice what they already know miss the tested features they rarely use. Mistake five: assuming dashboard skills from worksheet practice; the exam tests assembling dashboards with actions and filters, which is a distinct skill. Mistake six: ignoring the format updates; Tableau has revised the certification over the years, and candidates should verify the current exam name, format and validity on the Tableau certification page.',
    items: [
      { mistake: 'Studying without building', fix: 'Practice in Tableau Desktop daily.' },
      { mistake: 'Skipping calculations', fix: 'Calculated fields and table calculations are the common gap.' },
      { mistake: 'Ignoring data preparation', fix: 'Connections and prep open the exam.' },
      { mistake: 'Practicing without the guide', fix: 'Work the published skills areas as the checklist.' },
      { mistake: 'Missing dashboard practice', fix: 'Dashboards with actions and filters are a distinct skill.' }
    ]
  },
  questionTypes: {
    summary: 'The Tableau Desktop Specialist exam is a performance-based, computer-based test (currently 60 questions in 90 minutes with a 70 percent passing line; verify the current format). The skills areas: connecting to and preparing data, exploring and analyzing data (marks, chart types, filters, sorting), and sharing insights (dashboards, stories, and the analysis features of groups, sets, calculations and parameters). The exam is delivered by Pearson VUE. Samples below are editor-written illustrations of the published skills areas, not live exam items.',
    types: [
      { name: 'Connecting to data', share: 'Skills area', detail: 'Data sources, connections, and preparation.' },
      { name: 'Building visualizations', share: 'Skills area', detail: 'Marks, chart types, axes, filters, sorting.' },
      { name: 'Analyzing data', share: 'Skills area', detail: 'Groups, sets, calculations, table calculations, parameters.' },
      { name: 'Sharing insights', share: 'Skills area', detail: 'Dashboards, stories, and worksheet organization.' }
    ],
    samples: [
      {
        prompt: 'A view shows sales by region. The analyst wants to see the share of each region within the total for each year. Which feature computes this most directly?',
        options: ['A. A table calculation (percent of total)', 'B. A filter on region', 'C. A data blend', 'D. A story'],
        answer: 'A',
        explanation: 'A table calculation with percent-of-total computes each region\u2019s share within the total; filters, blends and stories serve different purposes.'
      },
      {
        prompt: 'A worksheet needs to show only the top 5 products by profit. Which approach is most appropriate?',
        options: ['A. A top-N filter on the Product dimension', 'B. A color mark on the Product dimension', 'C. A dashboard action', 'D. A data source rename'],
        answer: 'A',
        explanation: 'A top-N filter limits the view to the top products by the measure; the other options do not restrict the displayed rows.'
      },
      {
        prompt: 'An analyst connects two tables that share a common field to combine them for analysis. Which feature performs this in Tableau Desktop?',
        options: ['A. A join or a blend on the common field', 'B. A table calculation', 'C. A dashboard layout', 'D. A story point'],
        answer: 'A',
        explanation: 'Joins combine tables at the data-source level and blends combine them at the worksheet level using the common field; the other options are not data-combination features.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published skills areas, not live exam items.'
  },
  examDay: {
    summary: 'The Tableau Desktop Specialist exam is delivered by Pearson VUE at test centers and online with a proctor. At a test center, arrive 30 minutes early with a valid ID; the exam runs about 90 minutes on the center\u2019s computer with Tableau Desktop installed, and candidates complete the performance-based tasks in the application while the exam software records the actions. For online delivery, complete the Pearson VUE system check ahead of time, use a quiet private room, and follow the proctor\u2019s rules. The passing score is 70 percent, and results appear on screen shortly after. The exam fee is about $250. After passing, the certification is recorded in the Tableau certification profile with a badge; verify the current validity policy on the Tableau certification page. Afterwards, add the badge to LinkedIn and your resume, and plan the next certification (such as the Data Analyst) for the analytics career path.',
    bring: ['Valid photo ID', 'Appointment confirmation', 'Online: verified system and quiet room', 'Tableau account sign-in'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Second monitors or devices for online delivery'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in (test center) or launch the proctor session (online).' },
      { time: 'Exam', detail: '~90 minutes; performance-based tasks in Tableau Desktop.' },
      { time: 'After the exam', detail: 'Score on screen; 70% passes.' },
      { time: 'After passing', detail: 'Badge added to the Tableau certification profile.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The exam is performance-based in Tableau Desktop.',
      'The passing score is 70% (verify the current format).',
      'Verify the current validity policy on the Tableau certification page.'
    ],
    afterwards: 'Add the badge to LinkedIn and your resume, and plan the next certification (Data Analyst or Server) for the analytics career path.'
  }
};

export default data;
