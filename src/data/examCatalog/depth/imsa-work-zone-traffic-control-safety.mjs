const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Highway & traffic-control credentialing desk',
    bio: 'Work-zone traffic control structure comes from the IMSA (International Municipal Signal Association) official pages and state DOT requirements, which vary by state and are revised. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IMSA work-zone traffic control certification structure and state requirements against IMSA official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Flaggers and traffic-control workers sit inside construction labourer occupations at a May 2024 median of $46,730 (BLS) — the IMSA certification is the credential many agencies and contractors require for work-zone safety roles',
    summary: 'The direct answer is that the IMSA work-zone traffic control certification does not have its own BLS occupation — flaggers and traffic-control workers are classified within construction labourer occupations, most directly construction laborers (SOC 47-2061), at a May 2024 median annual wage of $46,730, with the lowest 10 percent under about $33,600 and the highest 10 percent above about $75,600. The honest framing is that the certification is a competence credential that many state DOTs, municipalities, and contractors require for personnel who set up and operate work-zone traffic control — flaggers, TCP (traffic control person) supervisors, and work-zone setup crews — and the pay is set by the construction labour market and prevailing-wage rules rather than by the certificate itself. BLS counted over a million construction laborers in 2024 and projects about 7 percent employment growth from 2024 to 2034, faster than average, with infrastructure spending a key driver. The credential\u2019s role is positional: IMSA offers certification levels for work-zone traffic control, and state agencies commonly require certified flaggers or TCPs on their projects, so the certification is a hiring gate on government-funded work. The practical read: the certification involves a short training course (typically a day or two) and a written exam, costs a few hundred dollars (often employer-paid), and is renewable, and it is the kind of credential that turns a general-labourer resume into an employable work-zone-safety resume. For candidates already in construction labour, the certification is a low-cost differentiator that qualifies you for flagging and TCP roles on highway projects, which are steady, safety-regulated positions with the occupation\u2019s median pay and higher in prevailing-wage jurisdictions.',
    rows: [
      { label: 'Median annual wage, construction laborers', value: '$46,730', note: 'BLS OEWS, May 2024 (SOC 47-2061)' },
      { label: 'Lowest 10 percent', value: 'less than $33,610', note: 'BLS OEWS, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $75,560', note: 'BLS OEWS, May 2024' },
      { label: 'Employment, 2024', value: '1,057,660 jobs', note: 'BLS OEWS, May 2024' },
      { label: 'Projected change, 2024-34', value: '+7%', note: 'BLS Employment Projections' }
    ],
    growth: 'BLS projects about 7% growth for construction laborers from 2024 to 2034, much faster than average, with infrastructure spending a key driver.',
    source: { label: 'BLS OEWS — Construction Laborers (47-2061)', url: 'https://www.bls.gov/oes/current/oes472061.htm' }
  },
  passRate: {
    headline: 'No national pass rate is published — IMSA certifies through its exams and training partners, and states set their own requirements; the exam rewards the MUTCD standards knowledge',
    summary: 'The core fact is that there is no published national pass rate for IMSA work-zone traffic control certification, because IMSA (International Municipal Signal Association) certifies through its own exams and network of training partners, and state DOTs and agencies set their own acceptance and renewal requirements — some states run their own flagger programs, others require IMSA or a state-approved equivalent. What is published is the certification structure: IMSA offers certification levels for work-zone traffic control covering the Manual on Uniform Traffic Control Devices (MUTCD) standards — signing, pavement markings, channelising devices, flagging procedures, and temporary traffic control plans — delivered as training with a written exam, and certification is typically valid for a defined period (commonly three years) before renewal. The exam tests the MUTCD standards knowledge that governs work zones, so the practical preparation is studying the MUTCD chapters on temporary traffic control and the IMSA course materials. Because the certification is a competence credential rather than a licence, pass rates vary by state and provider and are not published centrally; the common failure mode is taking the exam without studying the MUTCD specifics, especially flagging procedures and device spacing requirements. The honest advice is to confirm your state\u2019s accepted credentials — some highway projects require IMSA specifically, others accept any state-approved flagger card — and to study the MUTCD temporary-traffic-control content before the exam rather than relying on field experience alone, since the written test is standards-based.',
    source: { label: 'IMSA — Work Zone Traffic Control certification', url: 'https://www.imsasafety.org/' },
    caveat: 'No national pass rate is published; certification requirements and acceptance vary by state.'
  },
  studyPlan: {
    summary: 'Plan for roughly 8 to 12 hours of study for the IMSA work-zone traffic control exam — a one-to-two-day training course plus review of the MUTCD temporary traffic control standards — and confirm your state\u2019s specific credential requirements before booking. The content covers: the MUTCD fundamentals for temporary traffic control, signing and device standards, flagging procedures and signals, channelising devices and spacing, work-zone setup and layout, and safety and liability considerations. The most efficient study sequence is: first, attend the IMSA (or state-approved) training course, which covers the exam\u2019s content; second, study the MUTCD temporary traffic control chapters, since the exam is standards-based and rewards knowing device names, spacing, and flagging signals; third, practise the flagging signals and device-layout questions; and fourth, take the written exam. Because the exam rewards precise standards knowledge — exact device spacing, correct flagging signals, proper sign placement — the study approach is memorisation of the MUTCD specifics rather than general highway knowledge. The highest-yield areas are flagging procedures and channelising device standards, which appear across the exam. After certification, budget the renewal (commonly every three years) and keep your certification card, since agencies check it on site. If your state runs its own flagger program, compare the requirements before choosing the IMSA route, since some employers will accept either.',
    totalHours: '8-12 study hours + course delivery',
    weeks: [
      { label: 'Week 1', focus: 'Course + MUTCD', tasks: ['Attend the IMSA/state-approved course', 'Study MUTCD temporary traffic control chapters', 'Learn device names and spacing'], hours: 8 },
      { label: 'Week 2', focus: 'Exam readiness', tasks: ['Drill flagging signals and procedures', 'Review channelising and signing standards', 'Take the written exam'], hours: 4 }
    ],
    variants: [
      { label: 'State flagger programs', detail: 'Some states run their own flagger certification; requirements vary, and some projects accept either.' },
      { label: 'TCP / supervisor levels', detail: 'Higher certification levels cover supervising work-zone traffic control and temporary traffic control plans.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably passes the IMSA work-zone exam is "study the MUTCD temporary-traffic-control standards precisely, then drill the flagging signals," and the single biggest error is relying on field experience instead of the written standards the exam tests. A second proven approach is memorising the device-spacing and sign-placement specifics, because the exam rewards exact numbers — how far apart channelising devices are spaced, what signs are required where — rather than general knowledge. Third, learn the flagging signals as a fixed set: stop, slow, and the emergency signals, since the exam tests the correct signal for the described situation. Fourth, understand the temporary traffic control plan components — advance warning, transition, activity, and termination areas — because the exam asks you to identify the correct layout. Fifth, confirm your state\u2019s accepted credential and renewal period early, so you do not certify with a provider your local projects reject. Finally, take the training course seriously rather than treating it as a card-issuing formality: the course covers the exact exam content, and candidates who engage with the MUTCD examples pass at far higher rates.',
    items: [
      { title: 'Study the MUTCD specifics', detail: 'The exam is standards-based; device spacing, signs, and layouts are tested precisely.' },
      { title: 'Memorise device spacing and signs', detail: 'Exact numbers — spacing, sign placement — are the exam\u2019s reward.' },
      { title: 'Learn the flagging signals', detail: 'Stop, slow, and emergency signals are tested as a fixed set.' },
      { title: 'Understand the TTC plan areas', detail: 'Advance warning, transition, activity, and termination layouts.' },
      { title: 'Confirm state acceptance early', detail: 'Not every agency accepts every provider; check before paying.' }
    ]
  },
  resourceComparison: {
    summary: 'IMSA work-zone certification costs a few hundred dollars through IMSA training partners, with the MUTCD as the free authoritative reference, and many employers sponsor the training. The comparison below separates the IMSA course, state programs, and official references, with prices current to this review. The buying rule is to confirm which credential your state\u2019s projects require before paying, and to prefer employer-sponsored training when available.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'IMSA work-zone traffic control course + exam', values: ['~$200-400', '1-2 day course + written exam', 'The IMSA certification'] },
      { label: 'State-approved flagger programs', values: ['~$50-150', 'Short course + card', 'States with their own accepted programs'] },
      { label: 'MUTCD (Manual on Uniform Traffic Control Devices)', values: ['Free', 'Official standards document', 'The exam\u2019s authoritative source'] },
      { label: 'Employer-sponsored training', values: ['Often free', 'In-house or paid course', 'Hiring-time candidates'] }
    ],
    footnote: 'Prices approximate and dated to this review; certification validity and state acceptance vary.'
  },
  commonMistakes: {
    summary: 'The most common mistake is taking the exam on field experience alone and missing the MUTCD-specific standards questions; the second is failing to confirm which credential local projects accept, then holding a card that does not qualify for the work. A third recurring error is mixing up the flagging signals or device-spacing numbers under exam pressure, since those items reward precision. Candidates also routinely skip the temporary traffic control plan layout content, which is a dependable share of the exam, and many let certification lapse past its validity, losing eligibility for work-zone roles mid-season. Finally, some candidates treat the training course as a formality and never open the MUTCD, converting an accessible certification into a guessing exercise.',
    items: [
      { mistake: 'Relying on field experience', fix: 'Study the MUTCD standards; the written exam is standards-based.' },
      { mistake: 'Wrong credential for your state', fix: 'Confirm which flagger/TCP cards your local projects accept.' },
      { mistake: 'Mixing up signals and spacing', fix: 'Drill the flagging signals and device spacing to precision.' },
      { mistake: 'Skipping the TTC plan layout', fix: 'Learn the four work-zone areas; layout questions recur.' },
      { mistake: 'Letting certification lapse', fix: 'Track the validity period and renew before it expires.' }
    ]
  },
  questionTypes: {
    summary: 'The IMSA work-zone traffic control exam is a written multiple-choice test covering the MUTCD standards for temporary traffic control: signing, flagging procedures and signals, channelising devices and spacing, work-zone layout, and safety. Item formats include direct standards questions and scenario items about correct device placement or signals. The samples below are editor-written illustrations of the published standards content, not live exam items.',
    types: [
      { name: 'Flagging procedures', share: '~25%', detail: 'Signals, positioning, and flagger safety.' },
      { name: 'Signing & devices', share: '~25%', detail: 'Sign types, channelising devices, and spacing standards.' },
      { name: 'Work-zone layout', share: '~20%', detail: 'Advance warning, transition, activity, and termination areas.' },
      { name: 'MUTCD standards', share: '~20%', detail: 'General temporary traffic control standards and references.' },
      { name: 'Safety & liability', share: '~10%', detail: 'Worker protection and compliance responsibilities.' }
    ],
    samples: [
      {
        prompt: 'Which signal should a flagger use to stop approaching traffic?',
        options: ['A. Flag extended horizontally across the lane', 'B. Flag held straight down at the side', 'C. Flag raised and lowered repeatedly', 'D. Flag held above the head'],
        answer: 'A',
        explanation: 'The stop signal is the flag extended horizontally across the lane at arm\u2019s length.'
      },
      {
        prompt: 'Which area of a temporary traffic control zone comes first for approaching drivers?',
        options: ['A. Activity area', 'B. Termination area', 'C. Advance warning area', 'D. Transition area'],
        answer: 'C',
        explanation: 'The advance warning area is the first zone, alerting drivers that roadwork is ahead.'
      },
      {
        prompt: 'What is the primary purpose of channelising devices in a work zone?',
        options: ['A. Decoration', 'B. Guiding traffic through the work zone safely', 'C. Blocking all traffic', 'D. Marking equipment storage'],
        answer: 'B',
        explanation: 'Channelising devices guide traffic through the work zone along the intended path.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published standards content, not live exam items.'
  },
  examDay: {
    summary: 'The IMSA work-zone traffic control exam is administered by IMSA or its training partner at the end of the course, as a written multiple-choice test; passing earns the certification, which is typically valid for about three years before renewal. The core rules: bring photo ID, complete the course prerequisites, and follow the provider\u2019s exam instructions; the exam is closed-book. Some state programs add a practical component or a state-specific module. After passing, you receive your certification card or record, which agencies and contractors check on site — keep it accessible and track the renewal date. The most useful exam-day habits: review your flagging-signal and device-spacing notes before the exam, answer every question (no penalty for guessing), and read scenario items for the MUTCD-standard answer rather than field habit. If your state requires a specific card format, confirm the provider issues it before taking the exam, and if you are pursuing the TCP or supervisor level, plan the next certification after the flagger-level pass.',
    bring: ['Photo ID', 'Course notes for review', 'State requirement confirmation'],
    leave: ['Study materials (closed-book exam)', 'Field-habit answers where the standard differs'],
    timeline: [
      { time: 'Course', detail: 'Complete the IMSA/state-approved training course.' },
      { time: 'Exam', detail: 'Written multiple-choice exam on MUTCD standards.' },
      { time: 'Certification', detail: 'Receive the card/record; note the validity period.' },
      { time: 'Renewal', detail: 'Renew before expiry (commonly 3 years).' }
    ],
    rules: ['Closed-book written exam', 'Course prerequisites required', 'Certification typically valid ~3 years', 'State acceptance varies'],
    afterwards: 'Passing earns the IMSA work-zone traffic control certification, qualifying you for flagging and TCP roles on highway projects that require the credential.'
  }
};

export default data;
