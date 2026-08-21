// Depth content for: tableau-certified-data-analyst
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Cloud, data & developer certifications desk',
    bio: 'This guide is compiled and maintained by our technology-certifications desk. Vendor exams in this space are revised frequently, so we track each exam against the vendor\u2019s own certification page and exam guide and state plainly when a figure is not published. Fees, scoring, retake rules and renewal terms come from the vendor\u2019s certification pages. Wage figures come from the Bureau of Labor Statistics occupational series closest to the role, named by SOC code, with the caveat that BLS classifies by job duties rather than by certificate.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam structure, timing, passing score and fee verified against the Tableau Certified Data Analyst official exam guide; salary cross-checked against BLS May 2024 data for SOC 15-2051.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$112,590 median for data scientists (BLS, May 2024) — the Tableau Certified Data Analyst credential sits inside the data-analysis workforce this occupation describes',
    summary:
      'The direct answer is that the Tableau Certified Data Analyst certification has no BLS occupation of its own — it is a vendor credential for people who build analyses and dashboards — but the closest official series, Data Scientists (SOC 15-2051), earned a May 2024 median of $112,590, with the lowest 10 percent below $63,650 and the highest 10 percent above $194,410, and the credential sits squarely inside that workforce. BLS counts about 245,900 data scientist jobs in 2024, projects 34 percent employment growth from 2024 to 2034 — one of the fastest rates in the handbook — and projects about 23,400 openings per year. The Tableau credential is more accurately described as the analyst tier of that occupation: the certification\u2019s own audience description targets people who enable stakeholders to make business decisions by understanding the business problem, identifying data to explore, and delivering actionable insights using Tableau Desktop, Tableau Prep and either Tableau Server or Tableau Cloud, with a minimum of about six months of experience recommended and the Desktop Specialist certification as a stated stepping stone. The wage data matters in two ways for a candidate. First, the credential is not a wage ticket by itself — BLS classifies by job duties, not by certificate, and a Tableau badge does not move the BLS line — but it is a signalling credential for analyst and BI roles whose salaries cluster in the middle and upper parts of the data-science distribution. Second, the 34 percent projected growth is the structural reason to invest: the volume of data and the demand for data-driven decisions are growing the entire workforce the credential serves. The certification is also cheap relative to its category — a $250 exam fee with no course requirement — which makes the cost-benefit case unusually clean for a working analyst who already uses Tableau daily.',
    rows: [
      { label: 'Median annual wage, data scientists', value: '$112,590', note: 'BLS OOH, SOC 15-2051, May 2024 ($54.13/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $63,650', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $194,410', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Employment, 2024', value: '245,900 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~23,400 per year', note: 'BLS OOH Job Outlook, 2024-34' }
    ],
    growth: '34% projected change 2024-34 (much faster than average) — the fastest growth profile among the occupations covered by the technology certifications on this site',
    source: {
      label: 'BLS Occupational Outlook Handbook — Data Scientists',
      url: 'https://www.bls.gov/ooh/math/data-scientists.htm'
    }
  },
  passRate: {
    headline: 'Tableau publishes no pass rate — it publishes a 65% passing score on a scaled 100-1000 scale, with results by email within 48 hours',
    summary:
      'Tableau does not publish pass-rate statistics for the Certified Data Analyst exam or any of its certifications, so there is no official figure to quote — the \u201c~70 percent\u201d figures that circulate in prep materials are estimates, not Tableau data, and should be treated as such. What Tableau publishes, in its official exam guide, is the scoring model and the passing standard. The exam is scored on a scale of 100 to 1000, the passing score is 65 percent, and results are reported by email within 48 hours of completion, with score reports available in your certification account. The exam uses a compensatory scoring model — you do not need to pass individual sections, only the overall exam — and scaled scoring equates across exam forms so that a harder form demands the same underlying ability as an easier one; you do not receive partial credit for a partially correct multiple-select item, and unanswered items earn nothing, so answering everything matters. The exam structure per the current official guide is a timed, proctored session of 105 minutes covering roughly 60 scored multiple-choice and multiple-select questions plus up to five unscored items, delivered at a Pearson VUE centre or online, and the exam guide describes a hands-on component to the assessment structure in addition to the knowledge items. The practical consequence of the missing pass-rate data is that the readiness signal is your own practice-exam score against the 65 percent line under real timing, and because Tableau\u2019s exam emphasises applied Tableau skill — data connection, transformation, analysis, dashboarding and publishing — the strongest preparation is hands-on work in the product rather than question-bank volume alone.',
    source: {
      label: 'Tableau — Certified Data Analyst exam guide',
      url: 'https://www.tableau.com/learn/certification/tableau-certified-data-analyst-exam-guide'
    },
    caveat:
      'Tableau publishes no pass-rate statistics. Published facts are the 65% passing score on a 100-1000 scaled scale, the 105-minute timed format, the ~60 scored questions plus up to five unscored items, the $250 registration fee, and the 2-year validity. Any pass-rate percentage is an unsourced estimate.'
  },
  studyPlan: {
    summary:
      'Plan for 4 to 8 weeks and 40 to 80 hours of study, weighted to the two domains that make up most of the exam — Explore and Analyze Data, and Create Charts and Dashboards — because the Certified Data Analyst exam is an applied skills test and the analysis domain carries the largest weight. The exam guide structures the content into domains covering connecting to and transforming data, exploring and analysing data, creating charts and dashboards, and publishing and sharing content, and the exam is a 105-minute, proctored session of roughly 60 scored multiple-choice and multiple-select questions plus up to five unscored items at a 65 percent passing score, with a hands-on component to the assessment. Weeks 1-2 cover the data foundations: connecting to data sources, choosing live connections versus extracts, joins, relationships, unions and blends, cleaning data in Tableau Prep, and customising fields. Weeks 3-4 are the analytical heart of the exam and deserve the most hours: calculated fields, Level of Detail (LOD) expressions, table calculations, parameters, filters and the filter order of operations, sets and groups, and analytics objects such as forecasts and trend lines. Weeks 5-6 cover dashboards and publishing: building interactive dashboards with actions, applying design principles, publishing to Tableau Server or Tableau Cloud, scheduling refreshes, and managing permissions and subscriptions. Weeks 7-8 are the rehearsal phase: full-length timed practice exams at the 65 percent line, plus hands-on timed labs in Tableau itself, because the exam tests whether you can perform the workflow, not just recognise it. The pacing rule for 105 minutes over roughly 65 items is about 1.6 minutes per item, and the realistic exam behaviour is that multiple-select items and scenario questions take the longest, so answer everything and flag the slow ones.',
    totalHours: '40-80 hours over 4-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Connect and transform data', tasks: ['Connect to different data source types; learn when to use live connections vs extracts', 'Master joins, relationships, unions and blends; clean messy data in Tableau Prep', 'Customise fields: types, aliases, sorting, dimension vs measure, discrete vs continuous'], hours: '10-12 hrs/week' },
      { label: 'Weeks 3-4', focus: 'Explore and analyze data (largest domain)', tasks: ['Write calculated fields: date, logical, aggregate, number, string and type-conversion functions', 'Master LOD expressions (FIXED, INCLUDE, EXCLUDE), table calculations and parameters', 'Learn the filter order of operations and analytics objects like forecasts and trend lines'], hours: '12-14 hrs/week' },
      { label: 'Weeks 5-6', focus: 'Dashboards and publishing', tasks: ['Build interactive dashboards with filter, URL and highlight actions', 'Apply design and formatting principles for effective presentations', 'Learn publishing to Tableau Server/Cloud: schedules, subscriptions, permissions, custom views'], hours: '10-12 hrs/week' },
      { label: 'Weeks 7-8', focus: 'Timed practice and hands-on rehearsal', tasks: ['Take full-length timed practice exams and score against the 65% line', 'Perform hands-on timed tasks in Tableau: connect, transform, analyse, build, publish', 'Re-drill the domains that drag your practice score below 65'], hours: '10-12 hrs/week' }
    ],
    variants: [
      { label: 'Daily Tableau user preparing for the credential', detail: 'Three to four weeks. Your daily work covers most of the analysis and dashboarding content; spend the time on the exam\u2019s specific vocabulary, the LOD and table-calculation details, and the publish-and-share domain you rarely touch as an analyst.' },
      { label: 'Desktop Specialist holder advancing', detail: 'Four to six weeks. The Specialist is a stated stepping stone; what is new at the Data Analyst level is the analytical depth — LOD expressions, table calculations and filter order of operations — plus the Tableau Prep workflows.' },
      { label: 'Newer to Tableau, no certification background', detail: 'Eight to ten weeks. Add two weeks of structured tool training before the exam content, and accept that hands-on lab time in Tableau is the non-negotiable component of preparation.' }
    ]
  },
  prepStrategies: {
    summary:
      'The strategy that reliably passes the Certified Data Analyst exam is \u201cpractise the analytical details hands-on and rehearse under the real clock,\u201d because the exam is an applied-skills assessment — the analysis domain carries the largest weight and the items test whether you can reason about LOD expressions, table calculations and the filter order of operations, not whether you recognise a description of them. The single biggest error is studying like a trivia exam and skipping the hands-on work, because candidates who can describe a feature but cannot build the calculation under time pressure lose the same points every sitting. A second proven approach is to master the filter order of operations deliberately — extract filters, data source filters, context filters, FIXED LODs, dimension filters, INCLUDE/EXCLUDE LODs, measure filters, table calculations — because this single sequence quietly explains a whole family of \u201cwhy is the number what it is\u201d questions. Third, drill the LOD expressions (FIXED, INCLUDE, EXCLUDE) with real problems rather than syntax cards: understand what each one computes at a different level of detail than the view, which is the exam\u2019s most reliably tested analytical concept. Fourth, use full-length timed practice as the calibration tool — 105 minutes over roughly 65 items at a 65 percent line — and treat practice scores as the honest readiness signal. Finally, because the exam guide lists no prerequisites but recommends about six months of Tableau experience and the Desktop Specialist as a stepping stone, take the exam only when your hands-on speed in Tableau is automatic, because the scenarios on the exam assume a working fluency that reading cannot substitute for.',
    items: [
      { title: 'Practise the analytical details hands-on', detail: 'The analysis domain is the largest, and items test LOD expressions, table calculations and the filter order of operations. Build each concept in Tableau until you can reason about it, because the exam rewards performing the workflow, not recognising a description.' },
      { title: 'Master the filter order of operations', detail: 'The sequence — extract, data source, context, FIXED LOD, dimension, INCLUDE/EXCLUDE, measure, table calculations — explains a whole family of questions about why a number changes or does not change when a filter is applied. Internalise it early; it pays off across the exam.' },
      { title: 'Drill LOD expressions with problems, not cards', detail: 'FIXED, INCLUDE and EXCLUDE are the exam\u2019s most reliable analytical concepts. Work real examples: when do you need a FIXED LOD because a dimension filter would otherwise change the result, and when does a context filter solve it instead?' },
      { title: 'Rehearse under the real clock', detail: '105 minutes over roughly 65 items at a 65% passing line is a genuine pacing constraint. Take at least two full-length timed exams; an untimed practice score overstates readiness on the multiple-select items that consume the most time.' },
      { title: 'Take the exam only when hands-on speed is automatic', detail: 'Tableau recommends ~6 months of experience and the Desktop Specialist as a stepping stone. If you hesitate while building a chart or writing a calculation, the scenarios will punish that hesitation under the clock.' },
      { title: 'Know the scoring model', detail: 'Compensatory scoring means only the overall exam matters, but multiple-select items earn no partial credit and unanswered items earn nothing. Answer everything, flag the slow ones, and return only if time allows.' }
    ]
  },
  resourceComparison: {
    summary:
      'Tableau Certified Data Analyst preparation is built around Tableau\u2019s own learning resources — the official exam guide, the Analyst learning path, the free training available through Tableau\u2019s site and the Trailhead-aligned content — and the buying rule is to use the official exam guide as the syllabus and the free official training as the content, because the exam tests applied Tableau skill and the vendor\u2019s own material is the best-aligned source. The exam itself costs $250, with a $25 rescheduling fee, and the certification is valid for two years. Third-party practice question banks add volume and exam-style rehearsal, but they are supplements to hands-on work in the product, not substitutes, because the exam\u2019s scenarios assume real Tableau fluency.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Tableau Certified Data Analyst exam guide', values: ['Free', 'Official PDF — domains, weights, scoring, logistics', 'The authoritative syllabus; start here'] },
      { label: 'Tableau exam registration', values: ['$250, plus $25 reschedule fee', 'Proctored, at a Pearson VUE centre or online', 'The exam itself'] },
      { label: 'Tableau free training and Analyst learning path', values: ['Free', 'Official online courses and hands-on exercises', 'Building the applied skill the exam actually tests'] },
      { label: 'Third-party practice question banks', values: ['~$30-100 depending on provider', 'Online timed practice scored to the exam format', 'Rehearsal volume after the official content is done'] },
      { label: 'Your own Tableau Desktop or Tableau Public work', values: ['Free to subscription cost', 'Hands-on practice building real analyses', 'The non-negotiable preparation — LODs, table calcs, dashboards'] }
    ],
    footnote: 'Prices checked 2026-08 in USD. Tableau\u2019s certification pages publish current fees; the certification is valid for 2 years. We do not rank by commission.'
  },
  commonMistakes: {
    summary:
      'The most common Certified Data Analyst mistakes are all consequences of preparing for an applied-skills exam as if it were a recall exam: studying descriptions instead of building the calculations, skipping hands-on timed rehearsal, and memorising LOD syntax without understanding what each expression computes. The rest are process errors — ignoring the filter order of operations, neglecting the small publish-and-share domain, under-weighting multiple-select items\u2019 all-or-nothing scoring, and sitting before hands-on speed is automatic.',
    items: [
      { mistake: 'Studying descriptions instead of building calculations', fix: 'The exam tests applied Tableau skill. For every concept — LOD expressions, table calculations, parameters — build it in Tableau until you can reason about what it computes, because recognition does not survive the scenario items.' },
      { mistake: 'Memorising LOD syntax without the concept', detail: 'FIXED, INCLUDE and EXCLUDE are reliable exam territory, but the items test what each computes at a different level of detail than the view, not the syntax. Work real examples: when does a dimension filter change a FIXED result, and when does a context filter fix it?' },
      { mistake: 'Ignoring the filter order of operations', fix: 'The sequence of filter application explains a whole family of \u201cwhy is the number what it is\u201d questions. Internalise the order — extract, data source, context, FIXED, dimension, INCLUDE/EXCLUDE, measure, table calculations — and use it to reason through scenarios.' },
      { mistake: 'Skipping hands-on timed rehearsal', fix: '105 minutes over roughly 65 items at 65% is a real clock, and the exam assumes working fluency in Tableau. Take full-length timed practice plus timed hands-on tasks; untimed review does not prepare you for the pace.' },
      { mistake: 'Neglecting the publish-and-share domain', detail: 'It is the smallest domain, but it is also the one analysts rarely touch daily — publishing, scheduling, subscriptions, permissions, custom views. A few focused hours here earn the easiest marks on the exam.' },
      { mistake: 'Under-weighting multiple-select scoring', fix: 'Multiple-select items earn no partial credit, and unanswered items earn nothing. Read the stem for how many answers are required and treat every item as answerable, because the 65% line leaves little room for blank guesses.' }
    ]
  },
  questionTypes: {
    summary:
      'The Tableau Certified Data Analyst exam is a proctored, 105-minute session of roughly 60 scored multiple-choice and multiple-select questions plus up to five unscored items, delivered at a Pearson VUE centre or online, scored on a 100-1000 scale with a 65 percent passing score and results by email within 48 hours. The exam guide describes the assessment as spanning the data analysis workflow — connecting to and transforming data, exploring and analysing data, creating charts and dashboards, and publishing and sharing content — and the item style is dominated by scenario questions in which a business problem is described and you must select the correct Tableau approach, calculation, or configuration, with distractors that are real but second-best choices. Because scoring is compensatory and there is no partial credit on multiple-select items, the pacing rule is roughly 1.6 minutes per item and the strategy is to answer everything. The samples below are editor-written illustrations of the published domain content and item style; they are not live exam items.',
    types: [
      { name: 'Scenario-based knowledge items', share: 'The dominant format', detail: 'A business problem is described and you select the correct approach, calculation or configuration. Distractors are usually real Tableau features that are merely second-best for the stated goal.' },
      { name: 'Multiple-select items', share: 'A regular minority', detail: 'The stem specifies how many answers to select and scoring is all-or-nothing — no partial credit. Common where several steps together complete a correct analysis.' },
      { name: 'Concept and vocabulary items', share: 'A regular minority', detail: 'Direct questions on dimensions vs measures, discrete vs continuous, live vs extract, and the filter order of operations. These reward knowing the exact framework Tableau uses.' },
      { name: 'Calculation and formula items', share: 'Concentrated in the analysis domain', detail: 'Questions asking which formula or expression produces a described result, including LOD expressions and table calculations. These test understanding of what the expression computes.' }
    ],
    samples: [
      {
        prompt: 'An analyst builds a view showing sales by region and applies a dimension filter on region. A FIXED LOD expression in the view continues to return the same value regardless of which region is selected. Why?',
        options: [
          'A. The FIXED LOD is calculated after dimension filters, so filtering a dimension does not change its result',
          'B. The FIXED LOD is applied before dimension filters in the order of operations, so filtering a dimension does not change its result',
          'C. Dimension filters always affect FIXED LOD expressions unless the filter is promoted to a measure filter',
          'D. FIXED LOD expressions cannot be used in the same view as dimension filters'
        ],
        answer: 'B',
        explanation: 'FIXED LOD expressions are computed before dimension filters in Tableau\u2019s order of operations, so a dimension filter does not change the FIXED result — which is the behaviour the scenario describes. A states the sequence backwards: FIXED runs earlier, not later. C is wrong on the mechanics — the standard remedy is a context filter, which runs before FIXED, not a measure filter. D is false; FIXED LODs and dimension filters coexist routinely, and understanding exactly this interaction is the point of the question. This is the exam\u2019s most reliably tested analytical concept.'
      },
      {
        prompt: 'An analyst needs each row of a data source cleaned before analysis: removing extra header rows, pivoting columns, and splitting a combined field. Which Tableau product and workflow should the analyst use?',
        options: [
          'A. Tableau Prep — connecting to the data and applying cleaning steps such as pivot and split, then outputting the cleaned data',
          'B. Tableau Desktop — editing the source directly in the data pane',
          'C. Tableau Server — running a SQL query against the published workbook',
          'D. Tableau Cloud — changing the source schema through subscriptions'
        ],
        answer: 'A',
        explanation: 'Tableau Prep is the product built for data preparation — connecting to sources, inspecting and cleaning data, pivoting, splitting, aggregating and joining — and the workflow is to clean in Prep, then output for analysis in Desktop. B is wrong because Desktop does not edit source rows; it connects to and shapes data at the worksheet level, not the row level. C and D are publish-and-share products, not preparation tools, and neither changes source rows. The item tests the connect-and-transform domain, where knowing which product does the cleaning is core knowledge.'
      },
      {
        prompt: 'A dashboard with three sheets should highlight data in one sheet when a user clicks a data point in another sheet, and the highlight should follow the clicked value across all three sheets. Which feature should the analyst use?',
        options: [
          'A. A URL action',
          'B. A highlight action',
          'C. A dashboard filter',
          'D. A table calculation'
        ],
        answer: 'B',
        explanation: 'A highlight action is the dashboard feature that highlights marks in other sheets when a user selects a mark, using the selection to drive emphasis without filtering — exactly the described behaviour across the three sheets. A (URL action) navigates to an external web page and is not for highlighting. C (dashboard filter) would filter the views rather than merely highlight, changing the data displayed instead of emphasising marks. D is an analytical calculation and has nothing to do with interaction. The item tests the dashboard-interactivity content of the create-charts-and-dashboards domain.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published domain content and item style; they are not live exam items.'
  },
  examDay: {
    summary:
      'The Certified Data Analyst exam is a proctored, 105-minute session at a Pearson VUE testing centre or in an online proctored environment, with roughly 60 scored multiple-choice and multiple-select questions plus up to five unscored items, a 65 percent passing score, and results by email within 48 hours. The practical preparation is split between logistics and environment: at a centre, arrive 30 minutes early with a valid government-issued photo ID whose name matches your registration exactly — a mismatch terminates the session — and expect lockers for phones and bags; online, complete the system test on the same machine and network you will use, set up a cleared room, and follow the check-in process that begins 30 minutes before the scheduled time. No reference materials are permitted in either mode, and internet access is prohibited during the exam, so the applied Tableau knowledge must be in your head, not your bookmarks. Once the clock starts, work the roughly 65 items you will see at about 1.6 minutes each, answer everything, and flag the multiple-select and scenario items that take the longest, because multiple-select items earn no partial credit and unanswered items earn nothing. There is no scheduled break in the 105-minute window, so hydration and bathroom planning happen before the session. After submitting, the score report is emailed within 48 hours and is also available in your certification account; a failing score report includes performance by section, which is the diagnostic you use to plan a retake.',
    bring: [
      'A valid government-issued photo ID in its original form, matching your exam registration name exactly',
      'Your Pearson VUE scheduling confirmation and certification account login',
      'For online proctoring: a system-test-passed machine, webcam, microphone and a cleared private room',
      'A strategy for 105 minutes: ~1.6 minutes per item, answer everything, flag the slow items'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers and earbuds — locker at a centre, out of reach online',
      'Notes, books and study materials — no references are permitted, and internet access is prohibited during the exam',
      'Your own paper and pens — the centre provides what is permitted, and online proctoring restricts materials further',
      'Other people in the room, and for online proctoring, any second monitor',
      'Any item that could be construed as recording or transmitting the exam'
    ],
    timeline: [
      { time: 'The week before', detail: 'Complete the online system test on the exact machine and network you will use; confirm the centre address and ID policy if testing in person.' },
      { time: '30 minutes before', detail: 'Arrive at the centre or begin online check-in, which involves environment verification and ID presentation.' },
      { time: 'Check-in', detail: 'ID verification and seating; at a centre, personal items go to a locker.' },
      { time: '0-105 minutes', detail: 'Work the ~65 items at ~1.6 minutes each; answer everything and flag the slow multiple-select and scenario items.' },
      { time: 'Within 48 hours', detail: 'The score report is emailed and posted to your certification account; failing reports include section performance.' }
    ],
    rules: [
      '105 minutes, proctored, at a Pearson VUE centre or online.',
      'Roughly 60 scored questions plus up to five unscored items.',
      '65% passing score on a 100-1000 scaled scale; compensatory scoring.',
      'No references and no internet access during the exam.',
      'Multiple-select items earn no partial credit; unanswered items earn nothing.',
      'No scheduled break; the clock does not stop.',
      'Government-issued photo ID required; a name mismatch terminates the session.',
      'Results by email within 48 hours; the certification is valid for 2 years.'
    ],
    afterwards:
      'Your score report arrives by email within 48 hours and is also available in your certification account; a pass earns the Tableau Certified Data Analyst title, which is valid for two years, and you can display the credential on your LinkedIn profile and resume through the credentialing platform. On a pass, the two-year validity is the planning constraint: Tableau publishes renewal requirements for its certifications, and keeping the credential current is a scheduled activity, not a one-time event. On a fail, the score report\u2019s section-level feedback is the diagnostic — it shows how you performed in each domain, and the correct response is to re-weight your preparation toward the weakest domains and the hands-on tasks behind them, because this exam is applied and the fix for a low analysis-domain score is building calculations and LODs in Tableau, not re-reading notes. Tableau allows retakes with the $250 fee each time, so treat a retake as a targeted project with a clear practice-score gate: do not resit until timed practice sits comfortably above the 65 percent line. Because the credential assumes roughly six months of Tableau experience, the final judgement is honest about readiness: a candidate who can connect, transform, analyse and publish without hesitation under the clock is ready; a candidate who still fumbles an LOD or a table calculation is paying $250 to confirm a gap they already know exists.'
  }
};

export default data;
