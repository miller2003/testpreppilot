const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Agile & project-delivery certifications desk',
    bio: 'This desk covers Scrum, SAFe and agile delivery credentials. Exam structure, fees and rules come from the certifying body\'s official pages (Scrum.org, Scaled Agile, PMI), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Scrum.org\'s PSPO I exam page, the Scrum Guide, and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Professional Scrum Product Owner" — the PSPO I certification validates that you understand the Product Owner accountability in Scrum, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: Product Owners and product managers operate in the same delivery leadership labour market as project managers, and BLS counted 774,900 jobs in this occupation in 2024, projecting 9 percent growth from 2024 to 2034 with about 111,600 openings a year. The limitation to state plainly: the median covers all project management specialists, credentialed or not, and no BLS series isolates Product Owners; the certification\'s value is as a hiring signal and a demonstration that you can run a Product Backlog inside Scrum. In product-engineering organisations, the Product Owner track typically sits at or above team-lead pay and often overlaps product-manager ladders, so the analyst should read the BLS figure as the relevant benchmark for the delivery-leadership market rather than as the certification\'s own price tag.',
    rows: [
      { label: 'Median annual wage, project management specialists', value: '$100,750', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $59,450', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $170,380', note: 'BLS OOH, SOC 13-1082, May 2024' },
      { label: 'Projected openings per year', value: '~111,600', note: 'BLS OOH, SOC 13-1082, 2024-2034' }
    ],
    growth: 'BLS projects 9 percent growth for project management specialists from 2024 to 2034, about 111,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Project Management Specialists', url: 'https://www.bls.gov/ooh/management/project-management-specialists.htm' }
  },
  passRate: {
    headline: 'Scrum.org publishes the passing standard — 85% (68 of 80) — and no cohort pass rate',
    summary: 'Scrum.org does not publish cohort pass rates for the PSPO I, and third-party surveys are not official data, so we do not treat them as authoritative. What Scrum.org does publish is the format and the cut score: the PSPO I exam has 80 questions, a 60-minute time limit, and a passing score of 85 percent — at least 68 correct answers. The exam is delivered online through a proctored platform, and the certification does not expire or require renewal. The absence of a published pass rate is not an absence of standards: the 85 percent line is genuinely high, and the exam is written to test applied Product Owner judgement — ordering the Product Backlog, handling stakeholder conflict, managing scope and value — rather than memorised Scrum terminology. Candidates who pass consistently report that the exam rewards the reasoning behind Product Owner decisions: what to do when a stakeholder demands a feature mid-Sprint, how to measure value, when to release an Increment. Third-party "pass guarantee" courses under-prepare candidates because they optimise for recall; the free Scrum.org open assessments and the Scrum Guide remain the best preparation. Target 90 percent-plus on practice before sitting.',
    source: { label: 'Scrum.org - Professional Scrum Product Owner I (PSPO I) assessment', url: 'https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification' },
    caveat: 'Scrum.org publishes the 85% cut score but no cohort pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The PSPO I is a 60-minute, 80-question online exam with an 85 percent pass line, and its body of knowledge is the Scrum Guide plus the Product Owner\'s practical toolkit: value definition, Backlog management, release planning and stakeholder engagement. A defensible plan runs 20 to 40 hours over two to four weeks. Week one: read the Scrum Guide twice with the Product Owner accountability as your lens, and write out the accountabilities, events and artefacts in your own words, paying special attention to the Product Backlog, the Sprint Goal and the Definition of Done. Week two: work the Scrum.org open assessments until you score 100 percent, then move to scenario questions about value and Backlog ordering. Week three: drill the applied decisions — how the Product Owner responds to mid-Sprint scope pressure, how value is communicated, how the Backlog is refined and estimated, and how release decisions are made. Week four: take two full timed practice exams at the real format, target 90 percent-plus, then sit the assessment. The plan is short because the scope is short, but the practice volume is what converts Product Owner concepts into the applied judgement the exam actually measures.',
    totalHours: '20-40 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Guide mastery through the PO lens', tasks: ['Read the Scrum Guide twice, focusing on the Product Owner accountability', 'Summarise the Product Backlog, Sprint Goal and Definition of Done'], hours: 8 },
      { label: 'Week 2', focus: 'Official open assessments', tasks: ['Repeat Scrum.org open assessments to 100%', 'Start an error log organised by Backlog topic'], hours: 8 },
      { label: 'Week 3', focus: 'Value and ordering decisions', tasks: ['Drill scenario items on Backlog ordering, value and release planning', 'Re-read the guide sections behind every miss'], hours: 10 },
      { label: 'Week 4', focus: 'Timed mocks and sit', tasks: ['Two full 80-question timed mocks at 90%+', 'Schedule and sit the real assessment'], hours: 8 }
    ],
    variants: [
      { label: 'Working Product Owner', detail: 'Compress to 2 weeks; the open assessments and tricky value items matter more than the guide.' },
      { label: 'Coming from the Scrum Master track', detail: 'Spend extra time on Backlog ordering and value decisions, which the PSM track covers less.' }
    ]
  },
  prepStrategies: {
    summary: 'The PSPO I rewards applied Product Owner judgement, so the highest-yield strategy is to practise decisions, not definitions. First, do the official Scrum.org open assessments repeatedly until you score 100 percent; they are free and the closest thing to the real item style. Second, build a decision log: for every scenario you miss, write down the correct Product Owner response and the reasoning, because the exam tests the reasoning chain, not the surface fact. Third, drill the value questions specifically — how a Product Owner measures and communicates value, how the Backlog is ordered, how scope is handled mid-Sprint — since these separate passers from fails more than any other topic. Fourth, take at least two full timed practice exams at the real 60-minute, 80-question format and hold yourself to 90 percent, because the real exam adds unfamiliar phrasing that erodes a borderline score. Finally, avoid dump sites and "guaranteed pass" products: they risk an assessment ban and teach recall rather than the applied judgement the exam measures; the guide and the open assessments are sufficient and free.',
    items: [
      { title: 'Master the open assessments', detail: 'Free, official and the closest thing to the real item style; score 100% repeatedly.' },
      { title: 'Keep a decision log', detail: 'Write the reasoning behind every missed scenario; the exam tests the reasoning chain.' },
      { title: 'Drill value and ordering', detail: 'Backlog ordering, value measurement and mid-Sprint scope handling dominate.' },
      { title: 'Take two timed mocks', detail: '60 minutes, 80 questions, 90% target — unfamiliar phrasing erodes borderline scores.' },
      { title: 'Avoid dump sites', detail: 'Assessment-ban risk and the wrong kind of learning; the guide and open assessments suffice.' }
    ]
  },
  resourceComparison: {
    summary: 'PSPO I prep is inexpensive because the core resources are free. The Scrum Guide and the Scrum.org open assessments cost nothing and are sufficient for a disciplined candidate; Scrum.org also offers a paid preparation course (roughly $200-$300) that some candidates find useful. Third-party resources split into courses (a few hundred dollars) and question banks or exam simulators (usually $30-$150). Community evidence suggests the open assessments plus a good scenario question bank outperform expensive courses for most candidates, because the exam is short and the scope is narrow. The paid resources that add genuine value are those with detailed answer explanations, since they expose the application style, and any timed simulator. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Scrum Guide', values: ['Free', 'Official document', 'The body of knowledge; read it twice through the PO lens'] },
      { label: 'Scrum.org open assessments', values: ['Free', 'Online practice items', 'Item style and readiness baseline'] },
      { label: 'Scrum.org PSPO prep course', values: ['~$200-$300', 'Instructor-led online course', 'Structured learners who want a guided path'] },
      { label: 'Third-party question banks', values: ['$30-$150', 'Online practice exams', 'Volume and application-style exposure'] },
      { label: 'Dumps and "guaranteed pass" sites', values: ['$20-$100', 'Braindumps', 'Avoid — assessment-ban risk and wrong learning'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PSPO I mistake is studying the framework as a Scrum Master would: candidates know the events and artefacts but have not practised the Product Owner\'s value and ordering decisions, which is where the exam concentrates its difficulty. The fix is scenario drilling from the start, focused on Backlog ordering and value. The second mistake is misattributing the accountability boundaries — treating the Product Owner as a requirements typist or as the team\'s manager, when the guide assigns responsibility for value and Backlog order, not for task assignment. Third, candidates skip the official open assessments and rely on a single third-party bank, losing the closest available proxy for the real item style. Fourth, many candidates overthink the timing: 60 minutes for 80 questions is comfortable at 45 seconds per item, but only with timed practice. Finally, sitting at borderline practice scores is the costliest error — the 85 percent line leaves no margin, and candidates who pass practice at 85 percent routinely fail the real exam on unfamiliar phrasing; target 90 percent-plus.',
    items: [
      { mistake: 'Studying the framework like a Scrum Master', fix: 'Drill the PO-specific decisions: value, ordering, scope and release.' },
      { mistake: 'Misreading the PO accountability', fix: 'The PO owns value and Backlog order; the team owns the how of delivery.' },
      { mistake: 'Skipping the open assessments', fix: 'They are free and the closest proxy for the real item style.' },
      { mistake: 'Never practising the clock', fix: 'Two timed mocks at the real 60-minute format before sitting.' },
      { mistake: 'Sitting at borderline practice scores', fix: 'Target 90%+ on practice; the 85% line leaves no margin.' }
    ]
  },
  questionTypes: {
    summary: 'The PSPO I is 80 multiple-choice questions in 60 minutes, delivered online under proctoring. The majority are scenario-based: a described product situation — a stakeholder demand, a Backlog dispute, a release question — followed by the correct Product Owner decision or rule. A large minority are knowledge items testing the Scrum Guide\'s accountabilities, events and artefacts as they apply to the Product Owner. The exam concentrates on value: how the Product Owner defines, measures and communicates value; how the Product Backlog is ordered and refined; and how scope is managed against the Sprint Goal. Samples below are editor-written illustrations of the published Scrum Guide content, not live exam items; they show the decision-based style the exam rewards.',
    types: [
      { name: 'Scenario / decision items', share: 'Majority', detail: 'Product situations with the correct PO decision: ordering, scope, value, release.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Guide rules on accountabilities, events and artefacts from the PO perspective.' }
    ],
    samples: [
      {
        prompt: 'A stakeholder demands a new feature during a Sprint, claiming it is urgent. What should the Product Owner do?',
        options: ['A. Add it to the Sprint Backlog immediately', 'B. Evaluate it against the product goals and the Sprint goal, and decide whether it warrants reordering the Product Backlog', 'C. Cancel the Sprint and re-plan', 'D. Instruct the Developers to work overtime to include it'],
        answer: 'B',
        explanation: 'The Product Owner is accountable for the Product Backlog and its ordering; a mid-Sprint demand is evaluated against goals, and the standard response is to consider reordering the Backlog for a future Sprint rather than injecting scope into the current one. Answers that inject scope or cancel the Sprint misread the PO accountability.'
      },
      {
        prompt: 'The Product Owner is accountable for the value of the product. The best way to communicate value to stakeholders is:',
        options: ['A. Reporting team velocity weekly', 'B. Showing progress toward the product goal through released Increments and the current Sprint goal', 'C. Sharing the number of hours worked', 'D. Reporting the number of Backlog items completed'],
        answer: 'B',
        explanation: 'Value is communicated through the Increment — working product released and usable — and progress toward the product goal. Velocity, hours and item counts measure activity, not value, and are not the Product Owner\'s value communication.'
      },
      {
        prompt: 'Who is accountable for the Definition of Done and for ensuring the Increment is potentially releasable at the end of each Sprint?',
        options: ['A. The Product Owner alone', 'B. The Developers, with the Product Owner and Scrum Master supporting the agreed Definition of Done', 'C. The Scrum Master alone', 'D. External auditors'],
        answer: 'B',
        explanation: 'The Developers are accountable for producing a done Increment; the Definition of Done is an agreement the whole Scrum Team owns, with the Product Owner typically requiring an appropriate standard and the Scrum Master supporting it. Placing the accountability on one role or on outsiders misstates the guide.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published Scrum Guide content, not live exam items.'
  },
  examDay: {
    summary: 'The PSPO I is taken online through a proctored assessment platform at a time you schedule. Confirm your system meets the proctoring requirements — webcam, stable internet and a quiet private space — and close unrelated applications before starting; the proctor monitors the session. The exam is 80 questions in 60 minutes; pace at about 45 seconds per item and flag uncertain items for review. There is no scheduled break and the timer does not pause. Your result appears immediately on completion, and the PSPO I certification does not expire or require renewal. If you do not pass, you purchase a new attempt; there is no mandatory waiting period, but the professional move is to return to the open assessments and the guide rather than re-sitting immediately. The afterwards: add the certification to your profile and treat it as a foundation — the PSPO II and PSPO III, and the PSM track, build on the same framework if you want to go further.',
    bring: ['Computer with webcam and stable internet', 'Quiet, private testing space', 'Your Scrum.org login'],
    leave: ['Phone and other devices within reach of the proctor\'s view', 'Notes and open browser tabs — the assessment is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '80 questions, 60 minutes; pace ~45 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Result shows immediately; no scheduled break exists in the session.' },
      { time: 'Next', detail: 'Save your certificate; the credential does not expire.' }
    ],
    rules: [
      'Closed-book online assessment under proctoring',
      '60 minutes for 80 questions; the clock does not pause',
      'No renewal or continuing education is required after passing'
    ],
    afterwards: 'On a pass, your PSPO I is permanent. On a fail, purchase a new attempt after returning to the open assessments and the guide. Consider PSPO II/III or the PSM track for the next step.'
  }
};

export default data;
