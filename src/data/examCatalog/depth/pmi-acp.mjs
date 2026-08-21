const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Project management certifications desk',
    bio: 'This desk covers PMI credentials. Exam structure, fees and rules come from PMI\'s official certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against PMI\'s PMI-ACP handbook and exam content outline, and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "PMI-ACP" — the Agile Certified Practitioner credential certifies agile project management competency, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: PMI-ACP holders work as agile project managers, scrum masters in scaled environments, delivery leads and agile coaches, all of which sit inside the project management specialist occupation. BLS counted 774,900 project management specialist jobs in 2024 and projects 9 percent growth from 2024 to 2034, faster than the average for all occupations, with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the PMI-ACP\'s value is as a multi-method agile credential — covering Scrum, Kanban, Lean, XP and hybrid — that employers use as a hiring signal for agile delivery roles. Read the number as the relevant market benchmark for delivery leadership, and note that agile-specific pay data comes from private salary surveys rather than BLS, so we do not quote it as government data.',
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
    headline: 'PMI publishes no pass rate — it publishes the format: 120 questions, 3 hours, passing set by psychometric standard setting',
    summary: 'PMI does not publish cohort pass rates for the PMI-ACP, and third-party surveys are not official data, so we do not treat them as authoritative. What PMI does publish is the format: the PMI-ACP is a 120-question, 3-hour computer-based exam, with about 20 unscored pretest questions included in the 120, delivered at Pearson VUE centres or through remote proctoring. PMI sets the passing score through standard setting rather than publishing a fixed percentage, so no "pass mark" figure exists to quote. The exam content is organised into seven domains: agile principles and mindset; value-driven delivery; stakeholder engagement; team performance; adaptive planning; problem detection and resolution; and continuous improvement, plus a tool-and-technique block drawn from agile methodologies including Scrum, Kanban, Lean, XP and hybrid approaches. The absence of a published pass rate is not an absence of standards: the exam rewards applied agile judgement, and PMI\'s own guidance is that candidates with agile training and experience who study the exam content outline are prepared. The practical reading: because the pass line is psychometric and unpublished, target 85 percent-plus on practice exams and use PMI\'s official exam prep materials, the closest thing to the real item style.',
    source: { label: 'PMI - Agile Certified Practitioner (PMI-ACP) certification', url: 'https://www.pmi.org/certifications/agile-acp' },
    caveat: 'PMI publishes the format but no pass rate or fixed passing percentage; the passing score is set through standard setting.'
  },
  studyPlan: {
    summary: 'The PMI-ACP is a 120-question, 3-hour exam (about 20 pretest items included) built on the seven agile domains — agile principles and mindset, value-driven delivery, stakeholder engagement, team performance, adaptive planning, problem detection and resolution, and continuous improvement — drawing on Scrum, Kanban, Lean, XP and hybrid methodologies. A defensible plan runs 80 to 120 hours over 8 to 10 weeks, on top of the certification\'s education requirement (21 contact hours of agile training). Weeks 1-2 build the agile mindset: the Agile Manifesto, its principles, and the value-driven delivery domain. Weeks 3-4 cover the methodology toolkit: Scrum, Kanban, Lean and XP practices, and the tools and techniques each contributes. Weeks 5-7 drill the people domains: stakeholder engagement, team performance, adaptive planning and continuous improvement, using scenario questions in volume. Weeks 8-10 add timed practice exams at the real 120-question, 3-hour format, at least two full simulations, with error-log review mapped to the domains. The plan is application-heavy because the ACP is a judgement exam; candidates who know the methodologies but cannot apply them to situations fail the scenario items.',
    totalHours: '80-120 hours over 8-10 weeks (plus the 21-hour agile training requirement)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Agile mindset', tasks: ['Complete the 21-hour agile training requirement', 'Work the principles, mindset and value-driven domains', 'Write the manifesto principles in your own words'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Methodology toolkit', tasks: ['Scrum, Kanban, Lean and XP practices', 'Tools and techniques across the methods', 'Hybrid and scaled agile basics'], hours: 25 },
      { label: 'Weeks 5-7', focus: 'People and planning domains', tasks: ['Stakeholder engagement and team performance scenarios', 'Adaptive planning, problem detection and continuous improvement', 'Question-bank drilling in volume'], hours: 35 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full 120-question, 3-hour practice exams', 'Review every miss mapped to the domains', 'Schedule the exam'], hours: 20 }
    ],
    variants: [
      { label: 'Working agile practitioner', detail: 'Compress the mindset phase; spend the extra time on methodology breadth and simulations.' },
      { label: 'Coming from predictive PM', detail: 'Add 2 weeks of agile fundamentals before the domains; the mindset shift takes time.' }
    ]
  },
  prepStrategies: {
    summary: 'The PMI-ACP rewards applied agile judgement across multiple methodologies, so the dominant strategy is scenario drilling rather than single-method depth. First, learn the methodology toolkit broadly: the exam draws on Scrum, Kanban, Lean, XP and hybrid approaches, and candidates who know only Scrum are tested outside their lane. Second, drill the people domains — stakeholder engagement and team performance — because the exam concentrates on how an agile practitioner responds to team and stakeholder situations. Third, practise the value-driven lens: every scenario should be read for how the response maximises delivered value, which is the exam\'s organising principle. Fourth, use PMI\'s official exam prep materials and practice exams, the closest thing to the real item style, and hold yourself to 85 percent-plus on practice because the pass line is psychometric and unpublished. Fifth, take at least two full 120-question timed simulations; the 3-hour stamina and the pretest items are part of the test. Finally, note the 21-hour training requirement early, because agile training courses vary in cost and schedule, and the requirement must be met before application.',
    items: [
      { title: 'Cover the methodology breadth', detail: 'Scrum, Kanban, Lean, XP and hybrid — single-method depth is not enough.' },
      { title: 'Drill the people domains', detail: 'Stakeholder engagement and team performance concentrate the scenario items.' },
      { title: 'Read scenarios through value', detail: 'The best response maximises delivered value; that is the organising principle.' },
      { title: 'Hold to 85%+ on practice', detail: 'The pass line is psychometric and unpublished; leave no margin.' },
      { title: 'Meet the 21-hour requirement early', detail: 'Agile training is a prerequisite; confirm it before application.' }
    ]
  },
  resourceComparison: {
    summary: 'PMI-ACP prep centres on the 21-hour agile training requirement, which most candidates meet through a PMI-authorised agile course (roughly $300-$800). On top of the course, the standard stack is a question bank ($50-$200) and practice-exam products. PMI\'s own materials — the exam content outline (free) and the official practice exam — are the authoritative scope and closest item style. Multi-method agile books, such as the Agile Practice Guide, sell for $30-$80 and are genuinely useful because the exam spans Scrum, Kanban, Lean and XP. Free resources include the exam content outline, PMI sample questions and agile community forums. A realistic total budget is $400 to $1,500 including the exam fee ($435 for PMI members, $495 for non-members). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PMI exam content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Agile Practice Guide', values: ['$30-$80', 'Printed or digital book', 'The multi-method reference for the toolkits'] },
      { label: 'PMI-authorised agile course', values: ['$300-$800', 'Live or self-paced course', 'The 21-hour training requirement and base prep'] },
      { label: 'Question banks', values: ['$50-$200', 'Online practice with explanations', 'Scenario drilling across the domains'] },
      { label: 'PMI official practice exam', values: ['$50-$150', 'Online simulated exam', 'The closest official item style'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the PMI-ACP exam fee is $435 member / $495 non-member; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PMI-ACP mistake is preparing with a single methodology: candidates who know Scrum deeply and treat the exam as a Scrum test fail the Kanban, Lean and XP items, because the ACP is deliberately multi-method. The fix is breadth across the toolkit. The second mistake is studying frameworks instead of applications — the exam rewards how a practitioner responds to a described situation, so scenario drilling matters more than terminology recall. Third, candidates under-prepare the people domains, treating agile as a process question when the exam concentrates on team and stakeholder situations. Fourth, many candidates skip the 21-hour training requirement planning and scramble at application time; confirm it early. Fifth, candidates who never run a full 3-hour simulation misjudge the pace — 120 questions in 180 minutes is about 90 seconds per item. Finally, answering scenario items from one company\'s agile practice instead of the framework\'s best response costs points; the exam wants the textbook-best agile answer.',
    items: [
      { mistake: 'Preparing with one methodology', fix: 'Cover Scrum, Kanban, Lean, XP and hybrid; the ACP is deliberately multi-method.' },
      { mistake: 'Studying frameworks, not applications', fix: 'Drill scenario items; the exam tests how you respond to situations.' },
      { mistake: 'Under-preparing the people domains', fix: 'Stakeholder engagement and team performance concentrate the scenarios.' },
      { mistake: 'Scrambling the 21-hour requirement', fix: 'Confirm agile training early; it is a prerequisite.' },
      { mistake: 'Skipping timed simulations', fix: '120 questions in 180 minutes; run two full simulations.' }
    ]
  },
  questionTypes: {
    summary: 'The PMI-ACP is a 120-question multiple-choice exam (about 20 pretest items included) in 3 hours, built on seven domains. Most items are scenario-based: a described agile situation — a team conflict, a backlog dispute, a stakeholder demand, a delivery problem — followed by the best agile response under the framework. The exam draws tools and techniques from Scrum, Kanban, Lean, XP and hybrid approaches, and the value-driven lens runs through the items. A minority of items are direct knowledge checks on agile terminology and techniques. Samples below are editor-written illustrations of the published outline, not live exam items; they show the applied, multi-method style of the real items.',
    types: [
      { name: 'Scenario / application items', share: 'Majority', detail: 'Agile situations with the best response under the framework and its methods.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Terminology, tools and techniques across Scrum, Kanban, Lean and XP.' }
    ],
    samples: [
      {
        prompt: 'A team\'s velocity drops for two consecutive sprints and the team reports no blockers. The agile practitioner\'s best first step is to:',
        options: ['A. Extend the sprint length', 'B. Facilitate the team diagnosing the cause of the reduced throughput', 'C. Add more developers to the team', 'D. Reduce the scope of the product backlog'],
        answer: 'B',
        explanation: 'The framework-first response is to help the team diagnose the cause — through retrospectives and data — before changing the process. Extending sprints, adding people or trimming scope without diagnosis treats the symptom.'
      },
      {
        prompt: 'In a Kanban-based project, a stakeholder asks why work items are not delivered by a fixed date. The best response is to:',
        options: ['A. Promise a fixed date to reassure them', 'B. Explain that Kanban optimises flow and uses cycle time and WIP limits rather than fixed iterations', 'C. Switch the team to Scrum immediately', 'D. Ignore the question'],
        answer: 'B',
        explanation: 'Kanban manages flow — WIP limits, cycle time and throughput — rather than fixed-duration iterations, so the accurate response explains that model. Promising fixed dates, switching methods on the spot, or ignoring the question each misread the Kanban approach.'
      },
      {
        prompt: 'A product owner keeps adding requirements during a sprint. Under the agile framework, the best response is to:',
        options: ['A. Accept the changes and extend the sprint', 'B. Reinforce that the sprint is time-boxed and queue new requirements for the product backlog', 'C. Cancel the sprint', 'D. Ask the team to work overtime'],
        answer: 'B',
        explanation: 'Agile frameworks time-box sprints; new requirements are queued in the product backlog for future work rather than injected mid-sprint. Extending the sprint, cancelling, or overtime all violate the time-boxing principle.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The PMI-ACP is a 120-question, 3-hour computer-based exam at a Pearson VUE centre or through remote proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 90 seconds per item, flag uncertain items for review, and treat the ~20 pretest items as scored. You receive your score immediately for computer-based delivery, with official results following. If you fail, retake per PMI scheduling rules. On a pass, the credential is valid for three years and requires 30 professional development units (PDUs) or a retake to renew. The afterwards matters: log your PDUs as you earn them, and consider how the credential combines with the PMP for predictive-plus-agile coverage, which many employers pair.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '120 questions in 3 hours; pace ~90 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Track your PDU requirement for the three-year renewal cycle.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '3 hours for 120 questions; the clock does not pause',
      'About 20 of 120 questions are pretest items and do not count'
    ],
    afterwards: 'On a pass, your PMI-ACP is valid for three years; earn 30 PDUs (or retake) to renew. On a fail, retake per PMI scheduling rules after additional domain study.'
  }
};

export default data;
