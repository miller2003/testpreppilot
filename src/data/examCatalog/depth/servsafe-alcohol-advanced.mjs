const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Foodservice & responsible-service desk',
    bio: 'ServSafe Alcohol structure and policy come from the National Restaurant Association official pages and are revised with each program update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ServSafe Alcohol course structure, exam length, and passing score against National Restaurant Association pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Expect bartender roles — the jobs this certification gates — at a May 2024 median of $29,820 (BLS), with managers who oversee alcohol service earning $65,310',
    summary: 'The direct answer is that the ServSafe Alcohol certification does not have its own BLS occupation, but it is the responsible-alcohol-service credential required or preferred in thousands of bars, restaurants, and hospitality venues, and the occupations it gates are bartenders (SOC 35-3011) at a May 2024 median annual wage of $29,820, with the highest 10 percent above about $55,000, and food service managers (SOC 35-3031) at a May 2024 median of $65,310 for the staff who supervise alcohol service. The honest framing is that the certification is a legal-responsibility gate, not a wage multiplier: employers require it to hire you behind the bar or to keep the establishment compliant with state responsible-service laws, and the pay is set by the venue, tip culture, and local market rather than by the credential itself. Because bartending is a tipped occupation, actual earnings are heavily venue- and volume-dependent, and the BLS median understates what experienced bartenders at high-volume venues take home. The certification matters most as an employability checkbox: many state alcohol-beverage control agencies mandate responsible-service training for servers and sellers, and venues list a current ServSafe Alcohol card as a hiring condition. The career-relevant detail is that the course also teaches the policies managers need — checking IDs, recognising impairment, refusing service, and handling liability — which is why the advanced version of the course is common among bar managers and beverage directors on the way to food service management roles with the higher median above. BLS projects about 5 percent growth for bartenders from 2024 to 2034, with about 100,000 openings per year, most from turnover and the churn of the hospitality workforce. The practical read: take the course as a required-responsibility credential, expect the pay to come from the tipped role or the manager track it supports, and keep the certification current since many states and venues tie it to employment.',
    rows: [
      { label: 'Median annual wage, bartenders', value: '$29,820', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 35-3011)' },
      { label: 'Median annual wage, food service managers', value: '$65,310', note: 'BLS OOH, May 2024 (SOC 35-3031)' },
      { label: 'Projected growth, bartenders, 2024-34', value: '+5%', note: 'BLS Employment Projections' },
      { label: 'The certification itself', value: 'No direct occupation', note: 'Responsible-alcohol-service credential' }
    ],
    growth: 'BLS projects about 5% growth for bartenders from 2024 to 2034, with roughly 100,000 annual openings, largely from turnover.',
    source: { label: 'BLS OOH — Bartenders', url: 'https://www.bls.gov/ooh/food-preparation-and-serving/bartenders.htm' }
  },
  passRate: {
    headline: 'No pass rate is published — the ServSafe Alcohol exam requires 75% and retakes are common and allowed; the certification is a training credential, not a licensure gate',
    summary: 'The core fact is that the National Restaurant Association does not publish pass rates for the ServSafe Alcohol exam, and none is available from an independent national source, so treat any percentage you see online as anecdotal. What is published is the exam structure: the ServSafe Alcohol Primary exam contains 40 multiple-choice questions with a passing score of 75 percent (30 of 40 correct), you have 60 minutes, and you can retake the exam after review if you do not pass the first time. The course itself is typically delivered in a few hours — online self-paced or in-person — and covers the core responsible-service topics: how alcohol affects the body, recognising signs of intoxication, checking identification, refusing service, and preventing and managing liability. Because it is a training credential rather than a professional licensure exam, the practical pass rate is high among candidates who complete the course, and the common failure mode is rushing through the online version without absorbing the ID-checking and impairment-recognition material. The certification is valid for three years, after which you must renew by retaking the course. The preparation implication is straightforward: complete the course content rather than skimming, take the practice questions the course provides, and remember the exam rewards the specific policy answers the National Restaurant Association teaches — for example, when an ID looks suspicious, the trained response is to refuse service regardless of the patron\u2019s age. If your employer or state requires the certification, confirm whether the primary course satisfies the requirement, since some states accept the course while others require an additional state-specific module.',
    source: { label: 'ServSafe — Alcohol certification', url: 'https://www.servsafe.com/' },
    caveat: 'No official pass rate is published; the exam requires 75% (30/40) with retakes permitted.'
  },
  studyPlan: {
    summary: 'Plan for roughly 4 to 6 hours total — the ServSafe Alcohol course takes about 3 to 4 hours (online self-paced or a half-day class) plus 1 to 2 hours of review and the 40-question exam. The curriculum covers six content areas: the effects of alcohol on the body and behaviour, recognising intoxication and impairment, checking identification and spotting fakes, refusing service and handling difficult situations, preventing and managing alcohol-related liability, and state laws that vary by jurisdiction. The highest-yield study sequence is: first, master the impairment-recognition section, because exam items repeatedly ask you to identify behavioural signs of intoxication from a described patron; second, learn the ID-checking rules — the documents that are valid, how to spot alterations, and the "look, feel, ask" style checks the course teaches; third, review the refusal-of-service scenarios, since the correct answer is almost always refusing service when in doubt; and fourth, run the course\u2019s practice questions to confirm you can hold the 75 percent line. Because the exam rewards the course\u2019s specific policies over general knowledge, the most efficient preparation is to work through the course materials in order and use the built-in practice items rather than outside resources. Budget the final hour for a quiet exam sitting with the 60-minute limit in mind — 40 questions in 60 minutes is comfortable, but only if you do not second-guess yourself into time pressure. After passing, keep the certificate and note the three-year validity, and check your state\u2019s specific requirements, since some states add a local module or mandate a renewal cadence.',
    totalHours: '4-6 hours total (course + exam)',
    weeks: [
      { label: 'Session 1 (3-4 hrs)', focus: 'Course content', tasks: ['Complete the ServSafe Alcohol course modules', 'Note the ID-checking and impairment-recognition rules', 'Do the built-in practice questions'], hours: 4 },
      { label: 'Session 2 (1 hr)', focus: 'Exam', tasks: ['Review weak areas from practice', 'Take the 40-question exam (60 min, 75% to pass)'], hours: 1 }
    ],
    variants: [
      { label: 'ServSafe Alcohol Advanced', detail: 'A deeper program for managers and owners covering policy, liability management, and staff training.' },
      { label: 'State-specific modules', detail: 'Some states require an additional state-law component alongside the national course.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes ServSafe Alcohol is "learn the course\u2019s specific policies, not your intuition about drinking," and the single biggest error is bringing personal beliefs about alcohol into a test that rewards the National Restaurant Association\u2019s trained responses. A second proven approach is memorising the impairment-recognition framework — the exam presents a described patron and asks which signs indicate intoxication, so build a checklist of behavioural cues from the course rather than relying on experience. Third, internalise the ID rules as absolute: when an ID is altered, damaged, or looks fake, the trained answer is to refuse service, and the exam tests that boundary repeatedly. Fourth, practise the refusal-of-service phrasing, since scenario items ask what you should say or do when a patron argues. Fifth, run the practice questions twice — once after the course and once the morning of the exam — because the second pass confirms the 75 percent line. Finally, take the exam in a quiet, uninterrupted sitting; the 60-minute limit is generous, but split attention is the most common reason candidates miss easy policy items.',
    items: [
      { title: 'Learn the course policies, not intuition', detail: 'The exam rewards the Association\u2019s trained responses over personal judgement.' },
      { title: 'Build an impairment cue checklist', detail: 'Scenario items describe a patron; identify the behavioural signs of intoxication.' },
      { title: 'Treat ID rules as absolute', detail: 'Altered or suspicious IDs mean refusing service — the exam tests this boundary.' },
      { title: 'Practise refusal scenarios', detail: 'Know the trained phrasing for declining service to an intoxicated patron.' },
      { title: 'Take the exam uninterrupted', detail: 'The 60-minute limit is generous; split attention costs easy policy items.' }
    ]
  },
  resourceComparison: {
    summary: 'ServSafe Alcohol preparation is dominated by the official course itself — the exam is only valid when you take it through the National Restaurant Association or an authorized proctor — and the total cost is typically $15 to $30 for the online course with exam included. The comparison below separates the official course, state-mandated alternatives, and optional practice materials, with prices current to this review. The buying rule is to confirm your employer or state\u2019s accepted provider before paying, since some venues sponsor the course and some states accept only the official ServSafe credential.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ServSafe Alcohol Primary (official)', values: ['~$15-30', 'Online self-paced + 40-question exam', 'The standard certification'] },
      { label: 'Employer-sponsored training', values: ['Often free', 'In-house or paid course', 'Hiring-time candidates'] },
      { label: 'ServSafe practice questions', values: ['Included', 'Online', 'Confirming the 75% line'] },
      { label: 'State alcohol-beverage courses', values: ['~$10-40', 'State platform', 'Candidates in states with separate mandates'] }
    ],
    footnote: 'Prices approximate and dated to this review; certification is valid 3 years and renewal requires retaking the course.'
  },
  commonMistakes: {
    summary: 'The most common mistake is answering from personal judgement about alcohol instead of the course\u2019s trained policies, which fails the scenario items that make up most of the exam; the second is being overly confident about ID assessment and missing the "refuse when in doubt" boundary. A third recurring error is misidentifying impairment signs — confusing normal social behaviour with intoxication cues, or missing the cumulative signs the course teaches. Candidates also routinely skip the practice questions and then discover the 75 percent cut score is less forgiving than expected, and many fail to check whether their state requires the official ServSafe credential or accepts a different course, wasting money on the wrong provider. Finally, some candidates lose the exam by rushing in a shared or noisy setting despite the generous 60-minute window.',
    items: [
      { mistake: 'Answering from personal judgement', fix: 'Learn the Association\u2019s trained responses; scenario items test policy, not opinion.' },
      { mistake: 'Overconfident ID assessment', fix: 'When an ID is suspicious, the trained answer is to refuse service — memorise that boundary.' },
      { mistake: 'Missing impairment cues', fix: 'Build the course\u2019s behavioural checklist; the exam describes patrons and asks you to identify signs.' },
      { mistake: 'Skipping practice questions', fix: 'Run the built-in practice items twice to confirm you hold the 75% line.' },
      { mistake: 'Wrong provider for your state', fix: 'Confirm your state or employer accepts the official ServSafe credential before paying.' }
    ]
  },
  questionTypes: {
    summary: 'The ServSafe Alcohol exam contains 40 multiple-choice questions answered in 60 minutes, with a passing score of 75 percent (30 correct). The item mix is dominated by scenario questions: a described patron, ID, or service situation with the trained response as the correct answer. Content areas include alcohol effects and intoxication recognition, ID checking, refusing service, and liability management. The samples below are editor-written illustrations of the published curriculum, not live exam items.',
    types: [
      { name: 'Impairment recognition', share: '~30%', detail: 'Identifying behavioural signs of intoxication in described patrons.' },
      { name: 'ID checking', share: '~25%', detail: 'Valid documents, alterations, and refusing service on suspicious IDs.' },
      { name: 'Refusing service', share: '~20%', detail: 'Handling intoxicated patrons and difficult situations.' },
      { name: 'Alcohol effects', share: '~15%', detail: 'How alcohol affects the body and behaviour.' },
      { name: 'Liability & law', share: '~10%', detail: 'Preventing and managing alcohol-related liability.' }
    ],
    samples: [
      {
        prompt: 'A patron who appears under 30 presents a driver\u2019s license with a rough, uneven edge. What should you do?',
        options: ['A. Accept it if the photo matches', 'B. Refuse service because the ID may be altered', 'C. Ask for a second form of ID', 'D. Serve and note the time'],
        answer: 'B',
        explanation: 'An altered or damaged ID is suspicious; the trained response is to refuse service.'
      },
      {
        prompt: 'Which signs may indicate a patron is becoming intoxicated?',
        options: ['A. Loud voice and rapid speech', 'B. Calm, quiet behaviour only', 'C. Ordering water with every drink', 'D. Checking a phone occasionally'],
        answer: 'A',
        explanation: 'Loud, rapid speech and other behavioural changes are among the signs of intoxication the course teaches.'
      },
      {
        prompt: 'A patron argues that refusing service is unfair. What is the trained response?',
        options: ['A. Explain the policy calmly and refuse service', 'B. Serve a lower-alcohol drink instead', 'C. Ask the patron to leave immediately', 'D. Call the manager to argue the case'],
        answer: 'A',
        explanation: 'The trained approach is to explain the policy calmly and firmly refuse service.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published curriculum, not live exam items.'
  },
  examDay: {
    summary: 'The ServSafe Alcohol exam is taken online through the ServSafe platform (or on paper in some classroom courses), with 40 questions and a 60-minute time limit; a score of 75 percent (30 of 40) passes. The core rules: complete the exam in one sitting, keep your course materials and notes handy if the online version is open-book (most are closed-book by design, so prepare accordingly), and have a quiet, stable connection. The certification is valid for three years. After passing, you can print or download your certificate immediately; employers and state agencies accept the card or PDF as proof of completion. If you fail, review the missed content and retake — the platform permits retesting. The most useful exam-day habits: do the practice questions first to warm up, answer every item (there is no penalty for guessing on unanswered questions you skip, but answering everything maximises your shot at 30 correct), and do not second-guess the trained policy answers — the exam wants the course\u2019s response, not your debate.',
    bring: ['ServSafe account login', 'Quiet, stable connection', 'Review notes on ID rules and impairment cues'],
    leave: ['Distractions — the exam is a single-sitting, 60-minute assessment', 'The urge to argue with the policy answers'],
    timeline: [
      { time: 'Before', detail: 'Complete the course; run practice questions; confirm the 75% target.' },
      { time: 'Exam', detail: '40 questions in 60 minutes; 30 correct to pass.' },
      { time: 'After', detail: 'Download the certificate; note the 3-year validity.' },
      { time: 'Renewal', detail: 'Retake the course before expiry to renew.' }
    ],
    rules: ['75% (30/40) to pass', '60-minute limit', 'Single sitting', 'Valid 3 years, then renewal'],
    afterwards: 'Passing issues the ServSafe Alcohol certification (3 years); present it to employers, keep the PDF, and renew before expiry.'
  }
};

export default data;
