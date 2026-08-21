const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Agile & project-delivery certifications desk',
    bio: 'This desk covers Scrum, SAFe and agile delivery credentials. Exam structure, fees and rules come from the certifying body\'s official pages (Scrum.org, Scaled Agile, PMI), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Scrum.org\'s PSM I exam page, the Scrum Guide, and BLS OOH Project Management Specialists (SOC 13-1082), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$100,750 median for project management specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "Professional Scrum Master" — the PSM I certification validates that you understand the Scrum framework and can apply it, and the wage question belongs to the role you perform with it. The closest official BLS occupation is Project Management Specialists, SOC 13-1082, which had a May 2024 median wage of $100,750, with the lowest 10 percent under $59,450 and the highest 10 percent above $170,380. The fit is deliberate: Scrum Masters and agile delivery leads operate in the same labour market as project managers, and BLS counts this occupation as one of the larger management-support groups, with 774,900 jobs in 2024 and a projected 9 percent growth from 2024 to 2034 — faster than the average for all occupations — with about 111,600 openings a year. The limitation to state plainly: the median covers all project management specialists, with or without agile credentials, and the certification itself carries no wage premium in BLS data; its economic value is as a hiring filter and a signal that you can operate inside Scrum. For many product-engineering organisations the PSM is a ticket to team-lead and delivery-owner tracks that sit above individual-contributor engineering pay, so the analyst should read the BLS figure as the relevant market benchmark, not the certification\'s price tag.',
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
    summary: 'Scrum.org does not publish cohort pass rates for the PSM I, and independent surveys are not official data, so we do not present them as authoritative. What Scrum.org does publish is the format and the cut score: the PSM I exam has 80 questions, a 60-minute time limit, and a passing score of 85 percent — you must answer at least 68 questions correctly. The exam is delivered online through a proctored web-based system, and there is no expiry: PSM certifications do not require renewal or continuing education, which is one of the reasons Scrum.org\'s credentials are popular. The absence of a published pass rate is not an absence of standards — the 85 percent line is high, and the exam is deliberately written to reward understanding of the Scrum Guide\'s accountabilities, events and artefacts rather than memorised trivia. Candidates who pass consistently report that the exam tests the reasoning behind Scrum decisions — who owns the Product Backlog, what happens when an event is cancelled, how scope changes are handled — and that the two-hour study guides sold by third parties under-prepare them because they optimise for recall rather than application. Treat the 85 percent line as the target on every practice exam, and score 90 percent-plus before sitting.',
    source: { label: 'Scrum.org - Professional Scrum Master I (PSM I) assessment', url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification' },
    caveat: 'Scrum.org publishes the 85% cut score but no cohort pass rate; any percentage circulating online is a third-party estimate.'
  },
  studyPlan: {
    summary: 'The PSM I is a 60-minute, 80-question online exam with an 85 percent pass line, and the entire curriculum is one document — the Scrum Guide — plus the Nexus guide at a lighter level. That narrow scope makes the study plan shorter than most certifications, but the exam rewards application, so the plan must include scenario practice, not just reading. A defensible plan is 20 to 40 hours over two to four weeks. Week one: read the Scrum Guide end to end twice and write out the accountabilities (Product Owner, Scrum Master, Developers), the events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) and the artefacts (Product Backlog, Sprint Backlog, Increment) in your own words. Week two: work the official Scrum.org open assessments repeatedly until you score 100 percent, then move to third-party question banks, tracking which topics you miss. Week three: drill the application items — what a Scrum Master does when a developer raises an impediment, how scope is handled mid-Sprint, what the Daily Scrum is for — and re-read the guide sections behind every miss. Week four: take two full 80-question timed practice exams, target 90 percent-plus, and schedule the real assessment. The plan is short because the scope is short, but the practice volume is what converts reading into the applied understanding the exam demands.',
    totalHours: '20-40 hours over 2-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Scrum Guide mastery', tasks: ['Read the Scrum Guide twice; summarise accountabilities, events and artefacts', 'Write out the rules for scope, time and the Definition of Done'], hours: 8 },
      { label: 'Week 2', focus: 'Official open assessments', tasks: ['Repeat Scrum.org open assessments to 100%', 'Start a topic-level error log'], hours: 8 },
      { label: 'Week 3', focus: 'Application drilling', tasks: ['Work third-party scenario banks', 'Re-read guide sections behind every miss'], hours: 10 },
      { label: 'Week 4', focus: 'Timed mocks and sit', tasks: ['Two full 80-question timed mocks at 90%+', 'Schedule and sit the real assessment'], hours: 8 }
    ],
    variants: [
      { label: 'Experienced Scrum Master', detail: 'Compress to 2 weeks; spend the time on the open assessments and tricky application items rather than the guide.' },
      { label: 'New to agile', detail: 'Stretch to 5 weeks and add a week of foundational agile vocabulary before the guide.' }
    ]
  },
  prepStrategies: {
    summary: 'The PSM I is unusual in that the entire body of knowledge is the Scrum Guide, so the highest-yield strategy is guide mastery plus scenario practice rather than buying a thick course. First, do the official Scrum.org open assessments repeatedly: they are free, they mirror the real item style, and scoring 100 percent on them is a baseline, not a finish line. Second, build a topic-level error log and re-read the guide section behind every miss; because the scope is narrow, most misses trace back to a specific rule you can isolate. Third, practise the application questions — what the Scrum Master does about an impediment, how the Product Owner reprioritises mid-Sprint, what happens when the Sprint Goal becomes obsolete — since the exam rewards applied judgement. Fourth, take at least two full timed practice exams at the real 60-minute, 80-question format and hold yourself to 90 percent, because the real exam adds unfamiliar phrasing that erodes a borderline score. Finally, beware third-party shortcuts: many vendors sell "guaranteed pass" dumps, which risk ban from the assessment and teach the wrong thing; the open assessments and the guide are sufficient and free.',
    items: [
      { title: 'Master the open assessments', detail: 'Free, official, and the closest thing to the real item style; score 100% repeatedly.' },
      { title: 'Keep a rule-level error log', detail: 'Every miss traces to a specific guide rule; isolate and re-read it.' },
      { title: 'Drill application items', detail: 'Impediment handling, mid-Sprint reprioritisation and event rules dominate the exam.' },
      { title: 'Take two timed mocks', detail: '60 minutes, 80 questions, 90% target — the real exam adds unfamiliar phrasing.' },
      { title: 'Avoid dump sites', detail: 'They risk assessment bans and teach recall, not the application the exam rewards.' }
    ]
  },
  resourceComparison: {
    summary: 'PSM I prep is cheap because the primary resource is free. The Scrum Guide and the Scrum.org open assessments cost nothing and are sufficient for a disciplined candidate; Scrum.org also offers free learning paths and a PSM I preparation course (paid, roughly $200-$300) that many candidates skip. Third-party prep splits into two tiers: comprehensive courses (a few hundred dollars) and question banks or exam simulators (usually $30-$150). The evidence from candidate communities is that the open assessments plus a good question bank outperform expensive courses for most candidates, because the exam is short and scope is narrow. Paid resources that genuinely add value are the question banks with answer explanations, since they expose the application style, and any course with a timed simulator. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Scrum Guide', values: ['Free', 'Official document', 'The entire body of knowledge; read it twice'] },
      { label: 'Scrum.org open assessments', values: ['Free', 'Online practice items', 'Item style and readiness baseline'] },
      { label: 'Scrum.org PSM I prep course', values: ['~$200-$300', 'Instructor-led online course', 'Structured learners who want a guided path'] },
      { label: 'Third-party question banks', values: ['$30-$150', 'Online practice exams', 'Volume and application-style exposure'] },
      { label: 'Dumps and "guaranteed pass" sites', values: ['$20-$100', 'Braindumps', 'Avoid — assessment-ban risk and wrong learning'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PSM I mistake is studying for recall instead of application: candidates memorise the Scrum Guide\'s vocabulary and then miss the items that ask what a Scrum Master should actually do in a described situation. The fix is scenario drilling from the start. The second mistake is relying on a single third-party course without ever doing the official open assessments, which are the closest thing to the real item style; candidates who score 100 percent on the open assessments are measurably better positioned. Third, many candidates misread the accountabilities — attributing Product Backlog ownership to the Scrum Master, or treating the Scrum Master as a project manager who assigns tasks — which the exam tests directly and mercilessly. Fourth, candidates overthink the timing: 60 minutes for 80 questions is comfortable, but only if you have practised at the real pace; slow readers run out of minutes. Finally, treating the exam as a checkbox misses the point of the pass standard: the 85 percent line is genuinely high, and candidates who sit at borderline practice scores fail — target 90 percent on every practice exam before booking.',
    items: [
      { mistake: 'Studying recall instead of application', fix: 'Drill "what would the Scrum Master do" scenarios from the first week.' },
      { mistake: 'Skipping the official open assessments', fix: 'They are free and the closest thing to the real item style; do them to 100%.' },
      { mistake: 'Misattributing accountabilities', fix: 'The Product Owner owns the Product Backlog; the Scrum Master serves the team and removes impediments.' },
      { mistake: 'Never practising the 60-minute pace', fix: 'Two timed mocks at the real format before sitting.' },
      { mistake: 'Sitting at borderline practice scores', fix: 'Target 90%+ on practice; the 85% line leaves no margin.' }
    ]
  },
  questionTypes: {
    summary: 'The PSM I is 80 multiple-choice questions in 60 minutes, delivered online under proctoring. Most items are single-answer, and a large share are scenario-based: a described situation inside a Sprint, followed by the correct Scrum Master action, the correct accountability, or the correct rule. The exam draws its rules from the Scrum Guide and tests them at the application level — who owns the Product Backlog, when a Sprint is cancelled, what the Daily Scrum is for, what the Definition of Done requires. A minority of items are pure knowledge checks on the framework\'s terminology. Samples below are editor-written illustrations of the published Scrum Guide content, not live exam items; they show the application style the exam rewards.',
    types: [
      { name: 'Scenario / application items', share: 'Majority', detail: 'Described situations with the correct Scrum action, accountability or rule.' },
      { name: 'Knowledge items', share: 'Large minority', detail: 'Framework terminology, events and artefacts from the Scrum Guide.' }
    ],
    samples: [
      {
        prompt: 'A developer reports a problem during the Daily Scrum that will slow the team\'s progress for the day. What should the Scrum Master do?',
        options: ['A. Assign tasks to the team to compensate', 'B. Facilitate the team addressing the problem after the Daily Scrum', 'C. Cancel the Sprint immediately', 'D. Report the problem to the Product Owner and pause the Sprint'],
        answer: 'B',
        explanation: 'The Daily Scrum is for inspection and planning; problems raised there are handled after the event, with the Scrum Master facilitating removal of the impediment. Assigning tasks, cancelling the Sprint or pausing it misreads the Scrum Master\'s role and the event\'s purpose.'
      },
      {
        prompt: 'Who is accountable for the value of the product and for ordering the Product Backlog?',
        options: ['A. The Scrum Master', 'B. The Developers', 'C. The Product Owner', 'D. The stakeholders'],
        answer: 'C',
        explanation: 'The Scrum Guide assigns accountability for the product\'s value and for ordering the Product Backlog to the Product Owner. The Scrum Master serves the team and process; the Developers own the work in the Sprint; stakeholders are not accountable for the Backlog.'
      },
      {
        prompt: 'A Sprint is cancelled because the Sprint Goal has become obsolete. What happens to the completed work?',
        options: ['A. It is discarded', 'B. The completed Product Backlog items are reviewed and released if potentially releasable', 'C. It becomes the next Sprint automatically', 'D. The team keeps it without review'],
        answer: 'B',
        explanation: 'The Scrum Guide states that when a Sprint is cancelled, completed Product Backlog items are reviewed, and items that are done and potentially releasable are accepted. Discarding the work, auto-rolling it over, or keeping it without review each misstate the cancellation rules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published Scrum Guide content, not live exam items.'
  },
  examDay: {
    summary: 'The PSM I is taken online through a proctored assessment platform at a time you schedule. Confirm your system meets the proctoring requirements — a working webcam, stable internet and a quiet room — and close unrelated applications before starting; the proctor monitors the session. The exam is 80 questions in 60 minutes; pace at about 40 seconds per item and flag items you are unsure of for review rather than lingering. There is no scheduled break, and the timer does not pause. Your result is shown immediately on completion, and the PSM I certification is permanent — it does not expire and requires no renewal, which distinguishes it from most vendor credentials. If you do not pass, you can retake by purchasing a new assessment attempt; there is no mandatory waiting period, but the professional move is to go back to the open assessments and the guide rather than immediately re-sitting. The afterwards: add the certification to your profile and employer records, and treat it as a foundation — the PSM II and PSM III, and the PSPO track, build on it if you want to go further.',
    bring: ['Computer with webcam and stable internet', 'Quiet, private testing space', 'Your Scrum.org login'],
    leave: ['Phone and other devices within reach of the proctor\'s view', 'Notes and open browser tabs — the assessment is closed book'],
    timeline: [
      { time: 'Before start', detail: 'Run the proctoring environment check; clear the desk and screen.' },
      { time: 'Exam', detail: '80 questions, 60 minutes; pace ~40 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Result shows immediately; no scheduled break exists in the session.' },
      { time: 'Next', detail: 'Save your certificate; the credential does not expire.' }
    ],
    rules: [
      'Closed-book online assessment under proctoring',
      '60 minutes for 80 questions; the clock does not pause',
      'No renewal or continuing education is required after passing'
    ],
    afterwards: 'On a pass, your PSM I is permanent. On a fail, purchase a new attempt after returning to the open assessments and the guide. Consider PSM II/III or the PSPO track for the next step.'
  }
};

export default data;
