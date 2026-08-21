const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Recreation & safety certifications desk',
    bio: 'This desk covers recreation, range and safety credentials. Program structure and rules come from the certifying body\'s official pages (NRA), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code, with explicit caveats where no direct occupation exists. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NRA Range Safety Officer program pages and BLS OOH Recreation Workers (SOC 39-9032) as the closest-fit occupation, May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct BLS occupation exists — the closest fit is recreation workers ($35,850 median, BLS May 2024), with an explicit caveat',
    summary: 'There is no Bureau of Labor Statistics occupation called "Range Safety Officer", and we state that plainly: the RSO is a volunteer or part-time professional role at shooting ranges, training organisations and events, so no government wage exists for it. The closest occupational fit by work context is Recreation Workers, SOC 39-9032, which had a May 2024 median wage of $35,850, with the lowest 10 percent under $24,380 and the highest 10 percent above $57,300 — and we use it only as context, because most RSO work is voluntary or bundled into other roles rather than a standalone salaried occupation. BLS counted 314,800 recreation worker jobs in 2024 and projects a 9 percent decline from 2024 to 2034, with about 41,400 openings a year. The honest framing: the RSO credential\'s value is not a wage but the authority to perform the safety role — many ranges require an RSO on duty, shooting clubs need certified officers for events, and the certification is often a volunteer-role requirement rather than a paid position. Read the recreation figure as context for the facility-role market the credential connects to, and treat the RSO as a responsibility credential, not a career wage.',
    rows: [
      { label: 'Median annual wage, recreation workers (closest-fit context)', value: '$35,850', note: 'BLS OOH, SOC 39-9032, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $24,380', note: 'BLS OOH, SOC 39-9032, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $57,300', note: 'BLS OOH, SOC 39-9032, May 2024' },
      { label: 'Typical RSO compensation', value: 'Often volunteer; paid roles vary by range', note: 'Market observation, not a BLS figure' }
    ],
    growth: 'BLS projects a 9 percent decline for recreation workers from 2024 to 2034, about 41,400 openings per year — cited as context, not as an RSO wage series.',
    source: { label: 'BLS Occupational Outlook Handbook - Recreation Workers', url: 'https://www.bls.gov/ooh/personal-care-and-service/recreation-workers.htm' }
  },
  passRate: {
    headline: 'NRA publishes no pass rate — the RSO credential is earned by completing the course, and the NRA certifies on course completion',
    summary: 'The NRA does not publish cohort pass rates for the Range Safety Officer course, and third-party estimates are not official data, so we do not treat them as authoritative. What the NRA does publish is the structure: the RSO credential is earned by completing the NRA Range Safety Officer course — an instructor-led program of roughly 8-10 hours, typically delivered in a single day — which covers the range safety officer\'s role: range rules and procedures, firearm safety fundamentals, the RSO\'s duties during live-fire activities, and the incident-response responsibilities. The course includes both classroom instruction and practical range work, and the NRA certifies candidates who complete the course successfully, with the instructor verifying the candidate\'s performance. The absence of a published pass rate is not an absence of standards: the course is a training-and-performance credential, and the practical component means the instructor verifies that the candidate can perform the role, not just recite the material. The practical reading: preparation is about engaging with the course and the range exercises, and the real gate after certification is the range\'s willingness to accept the credential and the candidate\'s judgement in the role.',
    source: { label: 'NRA - Range Safety Officer certification', url: 'https://firearmtraining.nra.org/course-catalog/rso' },
    caveat: 'The NRA certifies on successful course completion and publishes no cohort pass rate.'
  },
  studyPlan: {
    summary: 'The NRA Range Safety Officer credential is earned by completing the one-day RSO course — roughly 8-10 hours of instruction covering the range rules, the firearm-safety fundamentals, the RSO\'s duties during live fire, and incident response — with both classroom and practical range components. Because the credential is course-based, the plan is a participation and preparation plan, not an exam study plan. Step one: obtain the NRA RSO student handbook or course outline in advance, and review the range rules and the firearm-safety fundamentals so the classroom portion is reinforcement, not first exposure. Step two: attend the full course — the classroom instruction, the range exercises and the practical evaluations — and ask questions about the scenarios the instructor presents, because the course rewards engagement. Step three: after certification, study the range\'s specific rules if you are taking the credential for a particular range, since the NRA certification is the base and each facility adds its own procedures. The plan is short because the credential is a one-day course; the value is in the role you perform with it, not in extended preparation.',
    totalHours: '8-10 hours of course instruction (plus light pre-course review)',
    weeks: [
      { label: 'Before the course', focus: 'Pre-course review', tasks: ['Review the RSO handbook or course outline', 'Refresh the firearm-safety fundamentals', 'Prepare questions on the scenarios'], hours: 2 },
      { label: 'The course (1 day)', focus: 'Instruction and range work', tasks: ['Classroom: rules, duties and incident response', 'Range exercises and practical evaluation', 'Course completion and certification'], hours: 8 },
      { label: 'After certification', focus: 'Facility specifics', tasks: ['Learn the range\'s specific rules and procedures', 'Shadow an experienced RSO if possible', 'Begin performing the role'], hours: 'Varies' }
    ],
    variants: [
      { label: 'Experienced shooter', detail: 'The safety fundamentals are familiar; focus on the RSO duties, range management and incident response.' },
      { label: 'Range employee', detail: 'The course is often employer-funded; coordinate with your range for the credential they require.' }
    ]
  },
  prepStrategies: {
    summary: 'The RSO credential rewards understanding the safety role, so the dominant strategy is engaging with the course material and the range exercises rather than memorising: the course covers the RSO\'s duties during live fire — monitoring shooters, enforcing range rules, stopping unsafe acts and responding to incidents — and the instructor verifies the candidate can perform the role. Second, master the firearm-safety fundamentals (the NRA\'s three fundamental rules and the safety practices) before the course, so the classroom portion builds on them. Third, take the incident-response scenarios seriously: the course presents situations an RSO must handle, and the judgement they reward is the core of the role. Fourth, after certification, study the specific range\'s rules, because the NRA credential is the base certification and each facility adds its own procedures. Finally, treat the credential as a responsibility, not a decoration: the RSO is the person who stops unsafe acts, and the certification carries that authority.',
    items: [
      { title: 'Engage with the range exercises', detail: 'The instructor verifies the role, not just the material.' },
      { title: 'Master the safety fundamentals', detail: 'The NRA fundamentals are the base the whole course builds on.' },
      { title: 'Take the incident scenarios seriously', detail: 'Response judgement is the core of the RSO role.' },
      { title: 'Learn the facility specifics', detail: 'The NRA credential is the base; each range adds its own rules.' },
      { title: 'Treat it as a responsibility', detail: 'The RSO is the person who stops unsafe acts.' }
    ]
  },
  resourceComparison: {
    summary: 'RSO prep is inexpensive because the credential is a one-day course. The NRA Range Safety Officer course typically costs $50-$150 depending on the instructor and location, and the fee includes the course materials and the certification. The NRA\'s firearm-safety publications and the course outline are the references; some instructors provide the student handbook in the fee. Free resources include the NRA\'s firearm-safety fundamentals pages. A realistic total budget is $50 to $200 including the course. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NRA RSO course', values: ['$50-$150', 'One-day instructor-led course', 'The credential itself'] },
      { label: 'Course materials/handbook', values: ['Often included', 'Printed or digital', 'The classroom reference'] },
      { label: 'NRA safety publications', values: ['Free-$20', 'Official materials', 'The safety fundamentals base'] },
      { label: 'Employer or club sponsorship', values: ['Varies', 'Coordinated through the range', 'Range employees and club volunteers'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; course fees vary by instructor; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common RSO mistake is treating the course as a checkbox: candidates who attend passively finish certified but unprepared to actually perform the role — stopping unsafe acts, managing a range and responding to incidents. The fix is active engagement with the scenarios and range exercises. The second mistake is neglecting the facility specifics: the NRA credential is the base certification, and each range adds its own rules; candidates who assume the credential covers everything arrive at a new range without its procedures. Third, some candidates forget the RSO\'s core duty — the authority and obligation to stop unsafe acts — and treat the role as a monitor rather than an enforcer. Fourth, candidates skip the pre-course review and meet the safety fundamentals cold. Finally, treating the certification as a personal badge rather than a responsibility to the shooters on the range misses the point of the credential.',
    items: [
      { mistake: 'Attending passively', fix: 'Engage with the scenarios; the instructor verifies the role.' },
      { mistake: 'Ignoring facility specifics', fix: 'The NRA credential is the base; learn each range\'s rules.' },
      { mistake: 'Forgetting the authority to stop', fix: 'Stopping unsafe acts is the RSO\'s core duty.' },
      { mistake: 'Skipping the pre-course review', fix: 'The safety fundamentals are the base; review them first.' },
      { mistake: 'Treating it as a badge', fix: 'The credential is a responsibility to the shooters on the range.' }
    ]
  },
  questionTypes: {
    summary: 'The NRA RSO program has no written exam in the traditional sense — the credential is earned by completing the course, and the instructor evaluates the candidate through the classroom participation, the range exercises and the practical performance. The course presents range-safety scenarios the candidate must reason through, and the samples below are editor-written illustrations of the kind of scenario judgements an RSO is evaluated on, not exam questions.',
    types: [
      { name: 'Scenario-judgement evaluations', share: 'Throughout the course', detail: 'Handling unsafe acts, range violations and incidents.' },
      { name: 'Range-practice evaluations', share: 'Practical component', detail: 'Performing the monitoring and response duties on the range.' }
    ],
    samples: [
      {
        prompt: 'During live fire, an RSO notices a shooter pointing a firearm downrange while moving it toward other shooters. The most appropriate action is:',
        options: ['A. Stop the unsafe act immediately and correct the muzzle direction', 'B. Wait until the cease-fire', 'C. Note it and report it later', 'D. Ask other shooters to move'],
        answer: 'A',
        explanation: 'The RSO\'s core duty is stopping unsafe acts immediately — a muzzle not pointed downrange is a priority stop. Deferring to the cease-fire, reporting later or moving others each leave the unsafe condition in place.'
      },
      {
        prompt: 'A shooter refuses to follow the range\'s eye-and-ear-protection rule. The RSO should:',
        options: ['A. Enforce the rule and stop the shooter if they will not comply', 'B. Allow it for experienced shooters', 'C. Ignore it to avoid conflict', 'D. Ask the shooter\'s friends to convince them'],
        answer: 'A',
        explanation: 'Range rules are enforced uniformly; the RSO must require compliance and stop the shooter if they will not comply. Exceptions, ignoring or delegation each undermine the safety rules the RSO exists to enforce.'
      },
      {
        prompt: 'An RSO is alone on the range when a shooter is injured. The most appropriate response is to:',
        options: ['A. Stop the firing, secure the firearms and call for emergency help', 'B. Continue monitoring while the shooter self-reports', 'C. Have the shooters clear the range on their own', 'D. Leave the range to find help'],
        answer: 'A',
        explanation: 'Incident response begins with stopping the firing, securing the firearms and calling for emergency help — the structured response the course covers. Continuing fire, self-report or leaving the range each worsen the situation.'
      }
    ],
    note: 'Samples are editor-written illustrations of the course\'s scenario evaluations, not exam questions — the RSO is certified on course completion.'
  },
  examDay: {
    summary: 'There is no "exam day" for the NRA RSO credential in the traditional sense — the certification is earned by completing the one-day course. The practical checklist is the course session: confirm the date, time and what to bring (typically your own firearm for the range exercises if the course requires it), and attend the full session — classroom instruction, range exercises and the practical evaluation. The instructor certifies candidates who complete the course successfully. The afterwards is where the credential becomes a role: if you are taking the RSO for a specific range, learn that facility\'s rules and procedures, shadow an experienced RSO where possible, and begin performing the monitoring and response duties. Treat the credential as the authority and obligation to keep shooters safe, and keep the certification card for verification.',
    bring: ['Valid identification for the course registration', 'Any equipment the course requires (check with the instructor)', 'A focus on the safety role, not just the certificate'],
    leave: ['Any assumption that the credential replaces a facility\'s specific rules'],
    timeline: [
      { time: 'Before the course', detail: 'Confirm the date, location and required equipment.' },
      { time: 'Course day', detail: 'Classroom instruction, range exercises and the practical evaluation.' },
      { time: 'After completion', detail: 'Receive the NRA RSO certification.' },
      { time: 'Next', detail: 'Learn the facility\'s rules and begin performing the role.' }
    ],
    rules: [
      'The credential is earned by completing the one-day course',
      'The practical range component is part of the evaluation',
      'Each range adds its own rules to the NRA base certification'
    ],
    afterwards: 'On completion, receive the NRA RSO certification, learn the facility\'s specific rules and begin the monitoring and response role.'
  }
};

export default data;
