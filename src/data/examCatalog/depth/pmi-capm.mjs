const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Project management certifications desk',
    bio: 'This desk covers PMI credentials. Exam structure, fees and rules come from PMI\'s official certification pages, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against PMI\'s CAPM handbook and exam content outline, and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CAPM" — the Certified Associate in Project Management credential certifies foundational project management knowledge, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: CAPM holders work as project coordinators, junior project managers, analysts and team members on project teams, all of which sit inside this occupation. BLS counted 774,900 project management specialist jobs in 2024 and projects 9 percent growth from 2024 to 2034, faster than the average for all occupations, with about 111,600 openings a year. The limitation to state plainly: the BLS median covers the whole occupation at all levels, and entry-level project roles typically pay below the median while senior project managers pay above it; the CAPM is a foundation credential, so the realistic benchmark for a new holder is the lower half of the distribution, climbing as experience and responsibility grow. Read the number as the market for the occupation, not the value of the entry credential.',
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
    headline: 'PMI publishes no pass rate — it publishes the format: 150 questions, 3 hours, passing set by psychometric standard setting',
    summary: 'PMI does not publish cohort pass rates for the CAPM, and third-party surveys are not official data, so we do not treat them as authoritative. What PMI does publish is the format: the CAPM is a 150-question, 3-hour computer-based exam, with about 15 unscored pretest questions included in the 150, delivered at Pearson VUE centres or through remote proctoring. PMI sets the passing score through standard setting rather than publishing a fixed percentage, so no "pass mark" figure exists to quote. The exam content is built on the PMBOK Guide\'s framework, organised into domain areas covering project management fundamentals, predictive, agile and hybrid approaches, and the business environment. The absence of a published pass rate is not an absence of standards: the exam is a knowledge test — the CAPM rewards recall and application of the framework, and PMI\'s own guidance is that candidates with 23 hours of project management education who study the exam content outline are prepared. The practical reading: because the pass line is psychometric and unpublished, candidates should target well above comfortable on practice exams — 85 percent-plus — and use PMI\'s official exam prep materials, which are the closest thing to the real item style.',
    source: { label: 'PMI - Certified Associate in Project Management (CAPM) certification', url: 'https://www.pmi.org/certifications/certified-associate-capm' },
    caveat: 'PMI publishes the format but no pass rate or fixed passing percentage; the passing score is set through standard setting.'
  },
  studyPlan: {
    summary: 'The CAPM is a 150-question, 3-hour exam (about 15 pretest items included) built on the project management framework in the PMBOK Guide, with the exam content outline organised into domain areas: project management fundamentals and core concepts; predictive, plan-based methodologies; agile and hybrid frameworks; and business analysis and the business environment. A defensible plan runs 60 to 90 hours over 6 to 8 weeks, built around the 23 hours of formal project management education the certification requires. Weeks 1-2 build the framework: work the fundamentals domain and the process groups — initiating, planning, executing, monitoring and controlling, closing — with the ITTO-style knowledge that anchors the exam. Weeks 3-4 add the methodologies: predictive tools and techniques, then agile frameworks such as Scrum, Kanban and hybrid approaches. Weeks 5-6 shift to question-bank drilling in volume, organised by domain, with an error log that traces every miss to the outline. Weeks 7-8 add timed practice exams at the real 150-question, 3-hour format, at least two full simulations. The plan is knowledge-heavy because the CAPM is a knowledge exam; the 23-hour education requirement can be met through a PMI-authorised course, which doubles as your main study resource.',
    totalHours: '60-90 hours over 6-8 weeks (plus the 23-hour education requirement)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Framework fundamentals', tasks: ['Complete the 23-hour PM education requirement', 'Work the fundamentals and process-group domains', 'Build process-group notes'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Methodologies', tasks: ['Predictive tools and techniques', 'Agile, Scrum, Kanban and hybrid frameworks', 'Business environment domain'], hours: 20 },
      { label: 'Weeks 5-6', focus: 'Domain drilling', tasks: ['Question-bank practice organised by domain', 'Maintain an error log mapped to the outline'], hours: 20 },
      { label: 'Weeks 7-8', focus: 'Timed simulations', tasks: ['Two full 150-question, 3-hour practice exams', 'Review every miss; re-study weak domains', 'Schedule the exam'], hours: 15 }
    ],
    variants: [
      { label: 'Student track', detail: 'The CAPM is popular with students; the 23-hour education can come from a university course or a PMI-authorised provider.' },
      { label: 'Working professionals', detail: 'Stretch to 10 weeks at 10-12 hours per week; protect the timed simulation phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The CAPM is a knowledge exam, so the dominant strategy is systematic coverage of the exam content outline with heavy question-bank drilling, rather than deep professional experience. First, complete the 23-hour education requirement with a PMI-authorised course and use its materials as your primary study resource, because the course is built around the exam content outline. Second, learn the process groups and knowledge areas as a connected system — which processes feed which, what each process produces — because the exam rewards framework fluency, not isolated facts. Third, drill agile and hybrid material as a distinct block: the CAPM covers predictive, agile and hybrid approaches, and candidates with only waterfall experience routinely under-prepare the agile items. Fourth, use the official PMI exam prep materials and practice exams, the closest thing to the real item style, and hold yourself to 85 percent-plus on practice because the pass line is psychometric and unpublished. Fifth, take at least two full 150-question timed simulations; the 3-hour stamina and the pretest items are part of the test. Finally, do not underestimate the exam as "the easy PMI exam" — the breadth of the outline is real, and shallow preparation fails it.',
    items: [
      { title: 'Use the 23-hour course as your base', detail: 'PMI-authorised courses are built around the exam content outline.' },
      { title: 'Learn the process system', detail: 'Which processes feed which and what each produces; the exam rewards framework fluency.' },
      { title: 'Drill agile and hybrid as a block', detail: 'Predictive-only experience under-prepares the agile and hybrid items.' },
      { title: 'Hold to 85%+ on practice', detail: 'The pass line is psychometric and unpublished; leave no margin.' },
      { title: 'Run two full simulations', detail: '150 questions in 3 hours; stamina and pretest handling are part of the test.' }
    ]
  },
  resourceComparison: {
    summary: 'CAPM prep centres on the 23-hour education requirement, which most candidates meet through a PMI-authorised course; these courses range from roughly $300 to $800 and serve as the primary study resource. On top of the course, the standard stack is a question bank ($50-$200) and one or two practice-exam products. PMI\'s own materials — the exam content outline (free) and the official practice exam — are the authoritative scope and the closest item style. Books such as the CAPM Exam Prep guides and PMBOK-aligned study guides sell for $50-$150 and work well as reference alongside a course. Free resources include the exam content outline, PMI\'s sample questions and the project-management community forums. A realistic total budget is $400 to $1,200 including the exam fee ($225 for PMI members, $300 for non-members). Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PMI exam content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'PMI-authorised 23-hour course', values: ['$300-$800', 'Live or self-paced course', 'The education requirement and base prep'] },
      { label: 'CAPM study guides / books', values: ['$50-$150', 'Printed or digital book', 'Reference alongside the course'] },
      { label: 'Question banks', values: ['$50-$200', 'Online practice with explanations', 'Domain drilling in volume'] },
      { label: 'PMI official practice exam', values: ['$50-$150', 'Online simulated exam', 'The closest official item style'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; the CAPM exam fee is $225 member / $300 non-member; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CAPM mistake is treating it as trivial because it is the "associate" credential: candidates under-study the breadth of the outline and fail the agile and hybrid items, which sit alongside the predictive material. The fix is full-domain coverage. The second mistake is studying the PMBOK Guide as a book to read rather than a framework to drill — the exam rewards recall and application of process interactions, so question banks are where learning happens. Third, candidates with waterfall-only experience skip the agile block; the CAPM explicitly tests Scrum, Kanban and hybrid approaches. Fourth, many candidates ignore the pretest items and then panic when they cannot tell which 15 are unscored; treat all 150 as scored. Fifth, candidates who never run a full 3-hour simulation underestimate the stamina and misjudge pacing — 150 questions in 180 minutes is about 72 seconds per item. Finally, using stale materials costs points: the exam content outline and PMBOK-based content are updated, so confirm your course and books match the current outline.',
    items: [
      { mistake: 'Under-studying the breadth', fix: 'Cover all domains — predictive, agile, hybrid and business environment — fully.' },
      { mistake: 'Reading instead of drilling', fix: 'Question banks are where framework fluency is built; read to fill gaps.' },
      { mistake: 'Skipping the agile block', fix: 'The CAPM explicitly tests Scrum, Kanban and hybrid approaches.' },
      { mistake: 'Never running a full simulation', fix: '150 questions in 180 minutes; run two timed simulations.' },
      { mistake: 'Using stale materials', fix: 'Confirm your course and books match the current exam content outline.' }
    ]
  },
  questionTypes: {
    summary: 'The CAPM is a 150-question multiple-choice exam (about 15 pretest items included) in 3 hours. Items test project management knowledge across the exam content outline: fundamentals and core concepts, predictive methodologies, agile and hybrid frameworks, and business environment. Many items are scenario-based — a described project situation followed by the correct process, tool, technique or output — while others are direct knowledge items on framework terminology. The samples below are editor-written illustrations of the published outline, not live exam items; they show the framework-recall and application style of the real items.',
    types: [
      { name: 'Scenario / application items', share: 'Majority', detail: 'Project situations with the correct process, tool, technique or output.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Framework terminology, process interactions and methodology rules.' }
    ],
    samples: [
      {
        prompt: 'A project is underway and the sponsor asks the project manager to confirm the project remains viable against its business justification. This is primarily the work of:',
        options: ['A. The initiating process group, confirming the business case', 'B. The executing process group', 'C. The closing process group', 'D. The procurement process group'],
        answer: 'A',
        explanation: 'The business case and project viability are established and revisited in the initiating process group; confirming the business justification belongs there. Executing, closing and procurement describe different process purposes.'
      },
      {
        prompt: 'In a Scrum-based project, who is accountable for prioritising the product backlog?',
        options: ['A. The project manager', 'B. The product owner', 'C. The development team', 'D. The stakeholders'],
        answer: 'B',
        explanation: 'In Scrum, the product owner owns the product backlog and its ordering. The project manager role is not defined in Scrum, the development team owns the how of delivery, and stakeholders do not own the backlog.'
      },
      {
        prompt: 'A project manager uses a hybrid approach on a project with a stable scope but a delivery team that benefits from iterative feedback. The best combination is:',
        options: ['A. A predictive plan with no iteration', 'B. Predictive planning for scope with iterative execution and feedback cycles', 'C. A fully agile approach with no baseline', 'D. Deferring planning until delivery'],
        answer: 'B',
        explanation: 'Hybrid approaches combine predictive planning (stable scope and baseline) with iterative execution and feedback cycles — matching the described project. Fully predictive or fully agile extremes, or no planning at all, misread the hybrid model.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The CAPM is a 150-question, 3-hour computer-based exam at a Pearson VUE centre or through remote proctoring. Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and the fee. Pace at about 72 seconds per item, flag uncertain items for review, and treat the ~15 pretest items as scored — they are indistinguishable. You receive your score immediately for computer-based delivery, with official results following. If you fail, PMI allows retakes within a year at a reduced rate in some cases; there is no published waiting period beyond the scheduling rules. On a pass, the CAPM is valid for five years and requires 15 professional development units (PDUs) or a retake to renew. The afterwards matters: the CAPM is a foundation — many holders move to the PMP once they accumulate the required project experience, so plan the career path while the framework is fresh.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Exam', detail: '150 questions in 3 hours; pace ~72 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Score appears on screen; official results follow.' },
      { time: 'Next', detail: 'Track your PDU requirement for the five-year renewal cycle.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      '3 hours for 150 questions; the clock does not pause',
      'About 15 of 150 questions are pretest items and do not count'
    ],
    afterwards: 'On a pass, your CAPM is valid for five years; earn 15 PDUs (or retake) to renew. On a fail, retake within the scheduling rules after additional outline-focused study. Plan the path to the PMP as experience accrues.'
  }
};

export default data;
