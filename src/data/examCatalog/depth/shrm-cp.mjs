const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Human resources & people-operations certifications desk',
    bio: 'This desk covers HR certification programs. Exam structure, fees and rules come from the certifying body\'s official pages (SHRM, HRCI), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against SHRM\'s SHRM-CP exam pages and exam options page, and BLS OOH Human Resources Specialists (SOC 13-1071), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$71,320 median for human resources specialists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "SHRM-CP" — the credential certifies HR competency, and the wage question belongs to the HR role you perform with it. The closest official BLS occupation is Human Resources Specialists, SOC 13-1071, which had a May 2024 median wage of $71,320, with the lowest 10 percent under $43,380 and the highest 10 percent above $119,380. The fit is deliberate: SHRM-CP holders work as HR generalists, recruiters, benefits and compensation specialists, and employee-relations staff, all of which sit inside this occupation. BLS counted 690,900 human resources specialist jobs in 2024 and projects 7 percent growth from 2024 to 2034, faster than the average for all occupations, with about 64,900 openings a year, most from replacement demand. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as a competency signal that employers use in hiring and promotion — HR roles that ask for the SHRM-CP or PHR tend to sit at or above the occupation median, but that is a market observation, not a BLS figure. Read the number as the relevant benchmark for generalist HR work, and note that pay climbs as roles move toward HR management, which BLS reports separately.',
    rows: [
      { label: 'Median annual wage, human resources specialists', value: '$71,320', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $43,380', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $119,380', note: 'BLS OOH, SOC 13-1071, May 2024' },
      { label: 'Median, human resources managers (senior track)', value: '$141,690', note: 'BLS OOH, SOC 11-3121, May 2024' }
    ],
    growth: 'BLS projects 7 percent growth for human resources specialists from 2024 to 2034, about 64,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Human Resources Specialists', url: 'https://www.bls.gov/ooh/business-and-financial/human-resources-specialists.htm' }
  },
  passRate: {
    headline: 'SHRM publishes no official pass rate; reported testing-window pass rates cluster around 65-70%',
    summary: 'SHRM does not publish official cohort pass rates for the SHRM-CP exam, and the figures that circulate in the HR community come from SHRM\'s annual testing-window reporting and third-party estimates; we treat them as directional, not authoritative. What SHRM does publish is the format and scoring: the SHRM-CP exam has 134 questions — 80 knowledge-based items and 54 situational-judgment items, of which 24 are field-test items that do not count toward the score — delivered in two sections totalling 3 hours 40 minutes of testing, with the whole appointment running about four hours. Scoring is scaled (a pass requires a scaled score of 200 on SHRM\'s 120-200 scale), and roughly 40 percent of items are situational judgment, meaning there is frequently no single textbook answer. The structural point that matters more than any pass-rate number is the exam\'s design: it tests the SHRM Body of Applied Skills and Knowledge (BASK), split half across the behavioural competency clusters (Leadership, Interpersonal, Business) and half across the HR knowledge domains (People, Organization, Workplace). Candidates who study only factual HR law fail the situational-judgment half; candidates who study only judgement fail the knowledge half. Treat reported pass rates as context, and let the item mix drive your study plan.',
    source: { label: 'SHRM - SHRM-CP exam format and options', url: 'https://www.shrm.org/credentials/certification/shrm-cp' },
    caveat: 'SHRM publishes the format and scoring but no official pass rate; figures circulating online are testing-window reporting or third-party estimates.'
  },
  studyPlan: {
    summary: 'The SHRM-CP is a 134-question exam in two 110-minute testing sections, and its curriculum is the SHRM BASK: nine behavioural competencies (Leadership, Ethical Practice, Relationship Management, Communication, Global & Cultural Effectiveness, Business Acumen, Consultation, Analytical Aptitude, Strategic Thinking) and three knowledge domains (People, Organization, Workplace). Because half the items are situational-judgment, the study plan must train decision-making, not just recall. A defensible plan runs 80 to 120 hours over 8 to 12 weeks. Weeks 1-3 build the framework: work each competency and domain through a study guide or course, and take notes organised by the BASK structure. Weeks 4-7 shift to application: work situational-judgment practice items in volume, and learn to apply the "best HR response" reasoning — evaluating the situation, the options and the likely outcome — rather than memorising a right answer. Weeks 8-10 add timed practice exams at the real format, at least two full simulations, with review of every miss against the BASK. The final two weeks are targeted re-study of weak areas plus a final full mock. Because employment law changes, use current-year materials and confirm the exam window format at registration.',
    totalHours: '80-120 hours over 8-12 weeks',
    weeks: [
      { label: 'Weeks 1-3', focus: 'BASK framework', tasks: ['Work the nine competencies and three knowledge domains', 'Take notes organised by the BASK structure', 'Build a current-events and employment-law timeline'], hours: 35 },
      { label: 'Weeks 4-7', focus: 'Situational-judgment drilling', tasks: ['Work SJT practice items in volume', 'Learn the best-response reasoning chain', 'Fill knowledge gaps surfaced by practice'], hours: 40 },
      { label: 'Weeks 8-10', focus: 'Timed simulations', tasks: ['Two full timed practice exams at the real format', 'Review every miss against the BASK', 'Re-study weak competencies'], hours: 30 },
      { label: 'Weeks 11-12', focus: 'Final polish', tasks: ['One final full mock', 'Final review of law-heavy domains (Workplace, People)', 'Schedule the exam window'], hours: 15 }
    ],
    variants: [
      { label: 'Experienced HR generalist', detail: 'Compress the framework phase to 2 weeks; spend the extra time on SJT volume and timed simulations.' },
      { label: 'Early-career candidate', detail: 'Stretch to 14 weeks; add an employment-law primer before the BASK work.' }
    ]
  },
  prepStrategies: {
    summary: 'The single most important SHRM-CP strategy is to train the situational-judgment reasoning chain: read the scenario, identify the HR competency or domain it tests, evaluate the options for the most effective and ethical response, and justify the choice — because 40 percent of the exam has no single textbook answer. Second, balance the curriculum: the exam splits items across competencies and domains, so a plan that studies only employment law or only leadership theory will miss half the exam. Third, use official SHRM materials: the SHRM Learning System maps directly to the BASK, and while it is expensive, it is the only resource built from the actual competency model; many candidates combine it with a question bank. Fourth, stay current: employment law questions reflect the law in effect at testing, so confirm your materials are current-year and follow major federal and state changes. Fifth, take at least two full timed simulations, because the two-section format and the mental stamina of 3 hours 40 minutes are part of the test. Finally, be realistic about the field-test items: 24 of the 134 questions do not count, but you cannot identify them, so answer all as if scored.',
    items: [
      { title: 'Train the SJT reasoning chain', detail: 'Scenario → competency → best response → justification; 40% of items are situational judgment.' },
      { title: 'Balance competencies and domains', detail: 'Half the exam is behavioural competencies; half is the People/Organization/Workplace knowledge domains.' },
      { title: 'Use the SHRM Learning System', detail: 'The only resource built from the actual BASK; pair it with a question bank.' },
      { title: 'Stay current on law', detail: 'The exam reflects the law in effect at testing; use current-year materials.' },
      { title: 'Run two full simulations', detail: 'The two-section, 3h40m format needs stamina training, not just knowledge.' }
    ]
  },
  resourceComparison: {
    summary: 'SHRM-CP prep is dominated by the SHRM Learning System, which is the official BASK-mapped product and the default choice for most candidates; it is expensive, typically several hundred to over a thousand dollars depending on format (self-study, live, or hybrid). Third-party providers — including the major HR prep companies and independent trainers — sell courses, books and question banks at a wide price range, from about $100 for a question bank to several hundred for a full course. Because the exam is competency-based and the situational-judgment items are hard to self-grade, the most useful paid resources are those with answer-explanations and mock exams. Free resources include SHRM\'s BASK outline and exam specifications, plus a limited set of free sample questions; they are sufficient for orientation but not for passing. A realistic total budget is $500 to $2,500 including the exam fee (roughly $350-$500 depending on membership and timing) and the Learning System. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'SHRM BASK outline + exam specs', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'SHRM Learning System', values: ['$700-$1,500', 'Books + online learning + practice exams', 'The official BASK-mapped path; the default choice'] },
      { label: 'Third-party courses', values: ['$300-$900', 'Live or self-paced classes', 'Candidates who want instruction with the materials'] },
      { label: 'Question banks', values: ['$100-$300', 'Online practice items with explanations', 'SJT volume between study blocks'] },
      { label: 'Free sample questions', values: ['$0', 'SHRM sample items', 'Orientation before committing to paid resources'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; SHRM exam fees vary by membership and timing; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common SHRM-CP mistake is studying only factual HR knowledge: candidates who drill employment-law definitions and then meet a paper where 40 percent of items are situational judgment, with no single right answer, are unprepared. The fix is to train the SJT reasoning chain from week one. The second mistake is letting the field-test items distort behaviour — candidates waste effort trying to identify the 24 unscored questions; they are indistinguishable, so treat all 134 as scored. Third, many candidates skip full timed simulations and then underestimate the stamina of two 110-minute sections; the format itself is part of the test. Fourth, candidates use outdated materials and answer law questions from a prior year\'s rules; the exam reflects the law in effect at testing. Fifth, some candidates answer situational-judgment items from their own workplace intuition instead of the competency framework — the exam wants the best HR response under the BASK, which is not always what a particular company would do. Finally, neglecting the behavioural competencies (Leadership, Business Acumen, Strategic Thinking) because they feel soft is a direct cause of failure, since they anchor half the exam.',
    items: [
      { mistake: 'Studying only HR law', fix: 'Half the exam is behavioural competencies and situational judgment; train both from week one.' },
      { mistake: 'Trying to identify field-test items', fix: '24 of 134 are unscored but indistinguishable; answer all as scored.' },
      { mistake: 'Skipping timed simulations', fix: 'Two full simulations; the two-section stamina is part of the test.' },
      { mistake: 'Using outdated materials', fix: 'The exam reflects the law in effect at testing; confirm current-year content.' },
      { mistake: 'Answering SJT from company intuition', fix: 'Apply the BASK best-response framework, not one employer\'s habits.' }
    ]
  },
  questionTypes: {
    summary: 'The SHRM-CP contains two item types: knowledge-based multiple-choice items that test factual HR content across the People, Organization and Workplace domains, and situational-judgment items that present an HR scenario and ask for the best response. The SJT items — roughly 40 percent of the exam — are the defining feature: they have no single textbook answer and reward the reasoning that aligns with the SHRM competency model, evaluating the situation, the options and the likely outcomes. Knowledge items test definitions, requirements and legal rules, including employment law in effect at testing. Samples below are editor-written illustrations of the published BASK, not live exam items; they show the shape of both item types.',
    types: [
      { name: 'Knowledge-based items', share: 'Roughly 60%', detail: 'Factual HR content across People, Organization and Workplace domains.' },
      { name: 'Situational-judgment items', share: 'Roughly 40%', detail: 'Scenarios with the best-response choice under the competency model.' }
    ],
    samples: [
      {
        prompt: 'An employee reports what they believe is retaliation after filing a complaint. Under the SHRM framework, the HR professional\'s first priority is to:',
        options: ['A. Document the report and initiate a prompt, impartial investigation', 'B. Reassure the employee that retaliation will not recur', 'C. Counsel the manager about appropriate behaviour', 'D. Ask the employee to submit the complaint in writing and wait'],
        answer: 'A',
        explanation: 'The best HR response under the framework is a prompt, impartial investigation once a retaliation concern is raised. Reassurance without action, manager counselling in isolation, or requiring written formality before action each delay the investigation the situation requires.'
      },
      {
        prompt: 'Which law governs an employer\'s obligation to provide unpaid, job-protected leave for qualifying family and medical reasons?',
        options: ['A. The Fair Labor Standards Act (FLSA)', 'B. The Family and Medical Leave Act (FMLA)', 'C. Title VII of the Civil Rights Act', 'D. The Americans with Disabilities Act (ADA)'],
        answer: 'B',
        explanation: 'The FMLA provides unpaid, job-protected leave for qualifying family and medical reasons at covered employers. The FLSA governs wages and hours, Title VII prohibits discrimination, and the ADA covers disability accommodation — none is the leave law.'
      },
      {
        prompt: 'A manager asks HR to "just run a quick check" on a candidate\'s social media before an offer. The best HR response is to:',
        options: ['A. Run the check as asked; it is standard practice', 'B. Define the purpose and scope, and ensure the screening is job-relevant and consistent', 'C. Refuse any social-media screening', 'D. Run the check without telling the candidate'],
        answer: 'B',
        explanation: 'The best HR response aligns screening with job relevance and consistency, and defines the purpose and scope before acting. Unbounded or undisclosed screening creates legal and ethical risk, while refusing all screening overcorrects; a defined, consistent process is the framework-aligned answer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published BASK, not live exam items.'
  },
  examDay: {
    summary: 'The SHRM-CP is a computer-based exam taken at an authorized testing centre or via remote proctoring, in two sections of 1 hour 50 minutes each (3 hours 40 minutes of testing, about four hours total including the tutorial and administrative time). Bring a valid government-issued photo ID matching your registration name and your appointment confirmation; personal items go in the locker. Arrive 30 minutes early; late arrivals forfeit the appointment and fee. The exam has 134 questions with 24 field-test items that do not count; pace at roughly 1.5 minutes per item across both sections, and use the short break between sections to reset. You receive your score on screen for computer-based delivery, and official results follow by email. If you fail, you may retake in a future window; there is no wait beyond the testing-window schedule. On a pass, the credential is valid for three years and requires 60 professional development credits (PDCs) or a retake to renew. The afterwards matters as much as the pass: log your PDCs as you earn them, because renewal auditing is part of the program.',
    bring: ['Valid government-issued photo ID matching your registration name', 'Appointment confirmation', 'Comfortable clothing for a four-hour appointment'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: '30 minutes before', detail: 'Arrive, check in, store belongings and complete centre security steps.' },
      { time: 'Section 1', detail: '1h50m of items; pace ~1.5 minutes per item, flag and review.' },
      { time: 'Break', detail: 'Short break between sections; do not discuss exam content in the waiting area.' },
      { time: 'Section 2', detail: '1h50m of items; finish and confirm submission.' },
      { time: 'Afterwards', detail: 'Score appears on screen; official results follow by email.' }
    ],
    rules: [
      'No personal electronics in the testing room',
      'Two 110-minute sections; the clock runs per section',
      '24 of 134 questions are field-test items and do not count'
    ],
    afterwards: 'On a pass, your SHRM-CP is valid for three years; earn 60 PDCs (or retake) to renew. On a fail, retake in a future testing window after additional BASK-focused study.'
  }
};

export default data;
