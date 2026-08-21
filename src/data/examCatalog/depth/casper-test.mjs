const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Admissions & professional testing desk',
    bio: 'This desk covers admissions and situational-judgment testing. Exam structure, fees and rules come from the testing body\'s official pages (Acuity Insights/CASPer), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against Acuity Insights\' CASPer test pages and BLS OOH data for the health-professions careers the test gates, May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$130,020 median for physician assistants — a representative health-professions career CASPer applicants target (BLS, May 2024)',
    summary: 'The CASPer situational-judgment test is not an occupation and produces no wage of its own — it is an admissions screen used by medical, physician-assistant, nursing, dental, pharmacy and veterinary programs to assess non-academic attributes. The wage question therefore belongs to the professional career you are applying to enter, and we cite Physician Assistants, SOC 29-1071, as a representative example: May 2024 median of $130,020, with the lowest 10 percent under $91,000 and the highest 10 percent above $171,950. BLS counted 135,700 physician assistant jobs in 2024 and projects a striking 29 percent growth from 2024 to 2034, with about 12,800 openings a year. The limitation to state plainly: each profession CASPer serves has its own salary distribution — medicine, nursing, dentistry, pharmacy and veterinary medicine differ widely — so the cited figure is illustrative, not universal, and the test itself is a gate whose value is admission to a program, not a wage. Read the numbers as the market for the careers the test helps you enter, and treat a strong CASPer performance as one component of an application that also includes academics, experience and interviews.',
    rows: [
      { label: 'Median annual wage, physician assistants (representative target career)', value: '$130,020', note: 'BLS OOH, SOC 29-1071, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $91,000', note: 'BLS OOH, SOC 29-1071, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $171,950', note: 'BLS OOH, SOC 29-1071, May 2024' },
      { label: 'Median, registered nurses (another common target)', value: '$89,010', note: 'BLS OOH, SOC 29-1141, May 2024' }
    ],
    growth: 'BLS projects 29 percent growth for physician assistants from 2024 to 2034, about 12,800 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Physician Assistants', url: 'https://www.bls.gov/ooh/healthcare/physician-assistants.htm' }
  },
  passRate: {
    headline: 'CASPer is not scored pass/fail — candidates receive a percentile ranking, and there is no published pass rate',
    summary: 'The CASPer test does not report a pass/fail result and has no pass rate to publish: it is a computer-based situational-judgment test that measures non-academic attributes — professionalism, ethics, empathy, collaboration and resilience — and candidates receive a percentile score that admissions committees use alongside academics and the rest of the application. The test presents video and text-based scenarios of challenging situations in professional settings, and the candidate responds in writing, with the responses rated by trained raters using a standardized rubric. Because the score is a percentile rather than a pass line, there is no single "passing" threshold; each program decides how to weight the CASPer within its admissions process, and programs can see how a candidate\'s score compares with other test takers applying in the same cycle. The practical reading: because there is no pass/fail, preparation focuses on understanding the response style the rubric rewards — addressing the perspective of everyone involved, showing professional judgment and empathy, and explaining your reasoning — rather than memorising content. Free official practice scenarios are the best preparation.',
    source: { label: 'Acuity Insights - CASPer test', url: 'https://acuityinsights.app/casper' },
    caveat: 'CASPer reports a percentile score rather than pass/fail; no pass rate exists, and each program sets its own weighting.'
  },
  studyPlan: {
    summary: 'The CASPer test is a roughly 90-minute computer-based situational-judgment test with no content curriculum — the scenarios are drawn from everyday professional situations, and the test measures how you reason, not what you know — so the study plan is a practice plan, not a content plan. A defensible plan runs 5 to 10 hours over one to two weeks. Days one to two: take the free official practice test to understand the format — typed responses to video and text scenarios, with a short answer window for each. Days three to five: review the official sample responses and the rubric guidance, and learn the response structure the raters reward: identify the issue, consider every stakeholder\'s perspective, state your decision and your reasoning. Days six to eight: practise with the official practice scenarios and third-party practice banks, typing full responses under the real time constraint. Day nine: take a second full timed practice test and review your response lengths and coverage. Day ten: schedule and sit the real test. The plan is short because the test is skill-based; typing speed and structured reasoning matter more than hours of study.',
    totalHours: '5-10 hours over 1-2 weeks',
    weeks: [
      { label: 'Days 1-2', focus: 'Format familiarisation', tasks: ['Take the free official practice test', 'Learn the video and text scenario formats', 'Understand the typed-response timing'], hours: 2 },
      { label: 'Days 3-5', focus: 'Response structure', tasks: ['Review official sample responses and rubric', 'Learn the stakeholder-perspective structure', 'Practise planning answers before typing'], hours: 3 },
      { label: 'Days 6-8', focus: 'Timed practice', tasks: ['Work practice scenarios with the real time window', 'Type full responses for each', 'Review response length and coverage'], hours: 3 },
      { label: 'Days 9-10', focus: 'Final run and sit', tasks: ['Second full timed practice test', 'Schedule and sit the real test'], hours: 2 }
    ],
    variants: [
      { label: 'Strong writer', detail: 'Compress to 3-5 days; focus on the professional-judgment scenarios rather than typing mechanics.' },
      { label: 'Slow typist', detail: 'Add 2-3 days of typed-response practice; the short answer windows reward typing speed.' }
    ]
  },
  prepStrategies: {
    summary: 'The CASPer rewards a specific response structure, so the dominant strategy is learning the rubric\'s expectations and practising the format under real timing. First, use the free official practice test and sample responses: they are the only material produced by the test\'s creators and show exactly how responses are scored. Second, learn the response structure the raters reward: identify the core issue, consider the perspectives of every person involved, state what you would do, and explain your reasoning — responses that name the reasoning score higher than answers that jump to conclusions. Third, practise professional-judgment consistently: the scenarios often present no perfect option, and the raters look for ethical, empathetic and collaborative reasoning rather than a "right answer". Fourth, type your practice responses under the real time window, because the short answer periods are the test\'s main pressure point and typing speed matters. Finally, do not cram content — there is none to cram; a few focused practice sessions spread over a week outperform marathon study.',
    items: [
      { title: 'Use the official practice test', detail: 'The creators\' own material shows exactly how responses are scored.' },
      { title: 'Learn the response structure', detail: 'Issue → stakeholders → decision → reasoning scores highest.' },
      { title: 'Practise professional judgment', detail: 'The scenarios have no perfect option; empathy and ethics are graded.' },
      { title: 'Type under the real timing', detail: 'The short answer windows are the main pressure point.' },
      { title: 'Do not cram', detail: 'There is no content to cram; a few focused sessions win.' }
    ]
  },
  resourceComparison: {
    summary: 'CASPer prep is inexpensive because the official resources are free or low-cost. The official practice test and sample scenarios on the Acuity Insights site are free, and the full test fee is roughly $10 per test administration plus a distribution fee to programs, paid at registration. Third-party CASPer prep services sell practice banks and courses ranging from roughly $20 to $200, with quality varying widely; the official materials plus any well-reviewed practice bank are sufficient for most candidates. Free resources also include the CASPer FAQ and the response-style guidance published by the test\'s creators. A realistic total budget is $10 to $150 including the test fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official CASPer practice test', values: ['Free', 'Official online practice', 'Format and scoring expectations'] },
      { label: 'Official sample responses', values: ['Free', 'Official PDF', 'The response structure the rubric rewards'] },
      { label: 'CASPer test fee', values: ['~$10 + distribution fees', 'Online test administration', 'The test itself'] },
      { label: 'Third-party practice banks', values: ['$20-$200', 'Online scenario practice', 'Extra timed practice (quality varies)'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; CASPer fees vary by program distribution; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common CASPer mistake is trying to prepare like a content exam: candidates who search for "answers" to scenarios misunderstand that the test measures judgment, not knowledge, and every scenario is new. The fix is practising the response structure rather than memorising content. The second mistake is writing answers that skip the reasoning: responses that state what the candidate would do without explaining why score lower, because the rubric rewards the reasoning chain. Third, candidates rush into a decision without considering every stakeholder; the scenarios are deliberately multi-perspective, and answers that consider only one person\'s view miss the rubric\'s core expectation. Fourth, slow typing under the real time window leaves responses truncated; practice under the real timing. Finally, candidates treat the CASPer as a box to check and take it cold — the percentile scoring means a poor relative performance is a real application risk, so the few hours of official practice are worth taking.',
    items: [
      { mistake: 'Preparing like a content exam', fix: 'The test measures judgment; practise the response structure, not content.' },
      { mistake: 'Stating actions without reasoning', fix: 'The rubric rewards the reasoning chain behind the decision.' },
      { mistake: 'Considering one stakeholder', fix: 'The scenarios are multi-perspective; weigh everyone involved.' },
      { mistake: 'Underestimating typing pressure', fix: 'Practise under the real answer windows.' },
      { mistake: 'Taking it cold', fix: 'The percentile score is an application risk; do the official practice.' }
    ]
  },
  questionTypes: {
    summary: 'The CASPer test presents two types of scenarios: video-based situations, where a short video clip sets the scene, and text-based situations, where a written description does — each followed by two to three open-ended questions asking how you would respond or what you would consider, with typed answers and a short time window per response. The scenarios cover everyday professional and personal situations that probe professionalism, ethics, empathy, collaboration and resilience. There are no right answers; trained raters score the responses against a rubric. Samples below are editor-written illustrations of the test\'s scenario style, not live test items; they show the judgment-based format.',
    types: [
      { name: 'Video-based scenarios', share: 'About half', detail: 'A video sets the scene, followed by typed-response questions.' },
      { name: 'Text-based scenarios', share: 'About half', detail: 'A written description, followed by typed-response questions.' },
      { name: 'Follow-up questions', share: 'Every scenario', detail: 'Additional questions probing the response and its reasoning.' }
    ],
    samples: [
      {
        prompt: 'A team member consistently misses deadlines, and the rest of the team must absorb the work. Your supervisor asks you to "handle it". What is the most appropriate response?',
        options: ['A. Speak privately with the team member to understand the cause, then work with them and the supervisor on a plan', 'B. Report the team member to human resources immediately', 'C. Do the extra work quietly to keep the peace', 'D. Confront the team member publicly to set an example'],
        answer: 'A',
        explanation: 'The best response considers every stakeholder: the team member (the cause is unknown), the team (the workload), and the supervisor (the request). A private conversation to understand the cause, followed by a collaborative plan, addresses the issue professionally; immediate escalation, silent absorption or public confrontation each fail the professional-judgment and empathy criteria.'
      },
      {
        prompt: 'A colleague asks you to cover for their absence by not recording a procedure error they made. What should you consider?',
        options: ['A. The professional and ethical duty to report, and the colleague\'s intent', 'B. Only whether the error caused harm', 'C. Whether anyone would find out', 'D. The colleague\'s friendship'],
        answer: 'A',
        explanation: 'The scenario probes professional integrity: the duty to report a procedural error stands regardless of harm or detection, while considering the colleague\'s intent and supporting them in reporting appropriately reflects empathy. Harm-only, detection-only or friendship-based reasoning miss the professional-ethics core the rubric rewards.'
      },
      {
        prompt: 'You are assigned to a team project where a member with less experience is struggling. The project is behind schedule. What is the most appropriate approach?',
        options: ['A. Offer support and training to help the member contribute, while keeping the project on track', 'B. Redo the member\'s work yourself', 'C. Exclude the member from the remaining tasks', 'D. Blame the member to the project lead'],
        answer: 'A',
        explanation: 'The best response balances support for the struggling member with the project\'s needs: offering training and support develops the member while keeping the timeline realistic. Redoing the work, exclusion or blame each fail the collaboration and resilience attributes the rubric measures.'
      }
    ],
    note: 'Samples are editor-written illustrations of the test\'s scenario style, not live test items — CASPer is a judgment test with no right answers.'
  },
  examDay: {
    summary: 'The CASPer test is taken online at a scheduled time, typically in a single roughly 90-minute session, from a computer with a stable internet connection; the test is proctored. Confirm the system requirements, the test window your programs require, and that you have the test fee and distribution set up through the CASPer registration portal. Arrive at the session with your setup ready — a quiet space, working camera for proctoring and no interruptions. The test presents the scenarios and answer windows sequentially; pace yourself so every response is complete. Because there is no pass/fail, there is no "result day" in the traditional sense — the percentile score is released to your designated programs, and you can view your score through the portal. The afterwards matters: note the programs your score was distributed to, and remember that the CASPer is one component of an application, so a strong performance complements but does not replace academics, experience and interviews.',
    bring: ['Computer with webcam and stable internet', 'A quiet, private testing space', 'Your CASPer registration and program distribution list'],
    leave: ['Distractions — the session is proctored and time-boxed', 'Any expectation of a pass/fail result — you receive a percentile score'],
    timeline: [
      { time: 'Before the session', detail: 'Confirm system requirements, registration and program distribution.' },
      { time: 'Test session', detail: 'Roughly 90 minutes of video and text scenarios with typed responses.' },
      { time: 'After submit', detail: 'The percentile score is released to your designated programs.' },
      { time: 'Next', detail: 'View your score in the portal and continue the rest of your application.' }
    ],
    rules: [
      'The test is online and proctored; a working camera is required',
      'Responses are typed into short answer windows',
      'There is no pass/fail — programs receive a percentile score'
    ],
    afterwards: 'On completion, your percentile score is distributed to the programs you designated; view it in the portal. Use the performance as one component of your broader application.'
  }
};

export default data;
