const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Emergency management & NIMS desk',
    bio: 'ICS-300 structure and prerequisites come from FEMA Emergency Management Institute official pages and are revised with each course update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ICS-300 course format, prerequisites, and unit content against FEMA EMI official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — but ICS-300 is required for most supervisory and command roles, where emergency management directors earn a median of $86,130 (BLS, May 2024)',
    summary: 'The direct answer is that ICS-300 has no salary of its own because it is an incident-command training course, not a job credential — no BLS occupation corresponds to holding it. The honest salary story is about the roles that require it: ICS-300 (Intermediate Incident Command System for Expanding Incidents) is the mandatory course for personnel who will supervise or command expanding incidents, and it is a common requirement for fire officers, emergency management coordinators, public works supervisors, and healthcare incident commanders. The most directly relevant BLS occupation is emergency management directors (SOC 11-9161), who earn a May 2024 median annual wage of $86,130, with the highest 10 percent above about $150,000, and projected employment growth of about 4 percent from 2024 to 2034. For firefighters who take ICS-300 as part of officer-development tracks, the relevant occupation is firefighters (SOC 33-2011) at a May 2024 median of $59,530, or fire inspectors and prevention specialists at higher medians. The practical read is that ICS-300 does not move your pay by itself — it unlocks eligibility for command positions and promotions, and the pay effect comes from the rank you can hold once the course is on your record. Most people take it employer-sponsored, so out-of-pocket cost is usually zero, and the value is positional: you cannot staff an Operations Section Chief or Planning Section Chief slot at an expanding incident without it. BLS projects about 3,000 annual openings for emergency management directors and roughly 30,000 for firefighters, so the course sits at the gate of stable public-sector career ladders rather than a fast-growing private field.',
    rows: [
      { label: 'Median annual wage, emergency management directors', value: '$86,130', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 11-9161)' },
      { label: 'Median annual wage, firefighters', value: '$59,530', note: 'BLS OOH, May 2024 (SOC 33-2011)' },
      { label: 'Highest 10%, emergency management directors', value: '>$150,000', note: 'BLS OOH, May 2024' },
      { label: 'The course itself', value: 'No direct occupation', note: 'FEMA EMI training course, commonly employer-sponsored' }
    ],
    growth: 'BLS projects about 4% growth for emergency management directors and about 1% for firefighters from 2024 to 2034; annual openings are driven mainly by replacement.',
    source: { label: 'BLS OOH — Emergency Management Directors', url: 'https://www.bls.gov/ooh/management/emergency-management-directors.htm' }
  },
  passRate: {
    headline: 'No pass rate exists — ICS-300 is a course with a final exam, and FEMA does not publish cohort pass data; completion, not a percentage, is the record that matters',
    summary: 'The core fact is that there is no published pass rate for ICS-300, because the course is administered through authorized instructors and state or local training officers rather than a single national proctored exam, and FEMA does not publish completion statistics by course. What is published is the course itself: ICS-300 is a two-day (16-hour), instructor-led, classroom-delivered course that builds on the IS-100 and IS-200 online prerequisites plus ICS-700, and it is delivered by emergency management agencies, fire academies, and state training offices rather than by FEMA directly. The assessment is a final exam written by the course materials set (commonly multiple choice, with about a 70 to 80 percent cut score set by the hosting agency), and because the course is designed as training for professionals already working in emergency management, the realistic completion rate is high — candidates who attend and participate pass. The numbers that are actually published are the prerequisite requirements: you must hold IS-100, IS-200, and ICS-700 completion records before enrolling, which is why the practical preparation is completing those online courses (free on FEMA\u2019s EMI site) well before your ICS-300 class date. The professional significance of ICS-300 is positional: your completion record goes into your agency\u2019s training file and is the documented prerequisite for ICS-400 and for command-level positions at expanding incidents. Treat the course as paid training your agency schedules, complete the prerequisites in advance, and ask your instructor for the specific final-exam format used by your host agency, since cut scores and question counts vary locally.',
    source: { label: 'FEMA EMI — ICS-300 course page', url: 'https://training.fema.gov/nims/' },
    caveat: 'No official pass rate is published; the course is instructor-delivered with locally administered finals.'
  },
  studyPlan: {
    summary: 'Plan for the 16-hour classroom course plus roughly 4 to 8 hours of prerequisite work beforehand, and treat the IS-100/IS-200/ICS-700 online courses as the real study load — they are free on FEMA\u2019s site and required before you can take ICS-300. The ICS-300 curriculum covers the incident command system at the expanding-incident level: unified command, incident organization and management by objectives, the planning process (the P), resource management, and the roles of command and general staff, with heavy use of scenario exercises where the class builds an Incident Action Plan for a simulated expanding incident. The final exam typically runs 30 to 50 multiple-choice questions testing your ability to apply the concepts to scenarios, not just recall definitions. The most efficient preparation sequence is: first, complete IS-100, IS-200, and IS-700 with active note-taking on the ICS organizational structure (the difference between command staff and general staff is the classic exam trap); second, review the planning P cycle — the sequence of meetings and briefings that produce the Incident Action Plan; third, attend the classroom course with those concepts fresh, since the classroom exercises assume you know the fundamentals. Because the course is scenario-heavy, the highest-yield habit is talking through the tabletop exercises with classmates rather than quietly reading; the instructor\u2019s feedback in the exercises is where the concepts click. Budget a week or two between finishing the online prerequisites and the classroom date so the material is fresh but not crammed, and ask your host agency whether the final is open-book, since policy varies by provider.',
    totalHours: '16 classroom hours + 4-8 hours of prerequisite online courses',
    weeks: [
      { label: '2-4 weeks before', focus: 'Prerequisites', tasks: ['Complete IS-100, IS-200, and IS-700 on the FEMA EMI site', 'Take notes on command vs general staff and the planning P', 'Save completion certificates'], hours: 6 },
      { label: 'Course days (2 days)', focus: 'ICS-300 classroom', tasks: ['Participate in scenario exercises', 'Learn the planning process and unified command', 'Take the final exam'], hours: 16 },
      { label: 'After', focus: 'ICS-400 pathway', tasks: ['Confirm your completion record is in your agency file', 'Plan ICS-400 if your role requires command-level training'], hours: 1 }
    ],
    variants: [
      { label: 'ICS-400', detail: 'The advanced command and general staff course; requires ICS-300 completion and is the top of the ICS training ladder.' },
      { label: 'Agency-delivered versions', detail: 'Some states add local exercises or an agency-specific module to the standard 16-hour format.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that reliably gets candidates through ICS-300 is "master the prerequisite concepts before the classroom, then treat the course as participation training rather than a test to cram." The single biggest error is enrolling without IS-100/IS-200/IS-700 completion records — instructors will turn you away or require you to complete them mid-course. A second proven approach is learning the difference between command staff and general staff cold, along with the Planning P cycle, because the classroom exercises and the final both test organisational placement: who reports to whom, and what the Operations Section does versus Planning. Third, practise reading and building an Incident Action Plan — the course\u2019s central artifact — by reviewing the ICS forms (ICS-201 incident briefing, ICS-202 objectives, ICS-203 organization chart) before class. Fourth, in the scenario exercises, volunteer for the roles you are least familiar with; the point of the course is to rotate through command roles so you leave having staffed the positions, not just watched. Fifth, write down the instructor\u2019s corrections during tabletop exercises — those are the exact scenarios the final reuses in different clothing. Finally, confirm the final-exam format with the host agency beforehand so you know whether to prepare closed-book recall or open-book application.',
    items: [
      { title: 'Finish the prerequisites first', detail: 'IS-100, IS-200, and IS-700 completion records are required to enrol; instructors check them.' },
      { title: 'Learn command vs general staff', detail: 'Organisational placement questions dominate the exam and the exercises.' },
      { title: 'Review the Planning P cycle', detail: 'The meeting/briefing sequence that produces the Incident Action Plan.' },
      { title: 'Volunteer for unfamiliar roles', detail: 'The course rotates you through command positions; take the ones you do not know.' },
      { title: 'Capture instructor corrections', detail: 'Tabletop feedback scenarios are the same logic the final reuses.' }
    ]
  },
  resourceComparison: {
    summary: 'ICS-300 is almost entirely free through government channels — FEMA\u2019s prerequisite courses cost nothing, and the classroom course is typically paid for by the sponsoring agency — so the cost picture is very different from commercial exam prep. The comparison below separates the free official prerequisites, the agency-delivered classroom course, and commercial study aids, with prices current to this review. The buying rule is simple: never pay a private vendor for "ICS-300 certification" — the course is only valid when delivered by an authorized instructor through your agency or a recognized emergency-management training provider.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FEMA EMI online courses (IS-100, IS-200, IS-700)', values: ['Free', 'Self-paced online', 'The required prerequisites'] },
      { label: 'ICS-300 classroom course', values: ['Usually employer-sponsored', 'In-person, 2 days', 'The required course itself'] },
      { label: 'FEMA NIMS resource library', values: ['Free', 'Reference documents', 'Reviewing ICS forms and org structure'] },
      { label: 'State emergency management training catalogs', values: ['Free/vary', 'Course listings', 'Finding authorized ICS-300 classes near you'] },
      { label: 'Commercial study guides (e.g. Mometrix)', values: ['~$20-40', 'Book or PDF', 'Optional final-exam review'] }
    ],
    footnote: 'Prices approximate and dated to this review; only agency-authorized delivery yields a valid ICS-300 record.'
  },
  commonMistakes: {
    summary: 'The most common mistake is arriving at ICS-300 without the prerequisite completion records and being unable to enrol; the second is treating the classroom course as a lecture to sit through when the exercises are the actual learning mechanism. A third recurring error is confusing command staff (public information officer, safety officer, liaison officer) with general staff (operations, planning, logistics, finance) — the classic exam miss. Candidates also routinely fail to review the planning P before class and then struggle to follow the exercise sequence, and many skip the ICS forms review, leaving them unable to read an Incident Action Plan in the scenario. Finally, some candidates never confirm their completion record made it into their agency training file, which is the record that actually matters for promotion and ICS-400 eligibility.',
    items: [
      { mistake: 'Enrolling without prerequisites', fix: 'Complete IS-100, IS-200, and IS-700 and save the certificates before class.' },
      { mistake: 'Treating the course as a lecture', fix: 'Participate actively in tabletop exercises; that is where the concepts stick.' },
      { mistake: 'Confusing command and general staff', fix: 'Memorise the five command/general staff positions and their reporting lines.' },
      { mistake: 'Not reviewing the planning P', fix: 'Study the meeting/briefing cycle before class so exercises make sense.' },
      { mistake: 'Losing your completion record', fix: 'Confirm the record is in your agency training file; it gates ICS-400 and promotions.' }
    ]
  },
  questionTypes: {
    summary: 'The ICS-300 final exam typically contains 30 to 50 multiple-choice questions, most of them scenario-based: you are given an expanding incident and asked to place the right person in the right position, order the planning steps, or select the correct resource-management action. Direct-knowledge items cover ICS terminology and the command/general staff structure, and a minority ask you to interpret an ICS form. Because the course is application-focused, the final rewards having done the exercises rather than memorising definitions. The samples below are editor-written illustrations of the standard curriculum, not live exam items.',
    types: [
      { name: 'Organisation & command structure', share: '~30%', detail: 'Command vs general staff, chain of command, span of control.' },
      { name: 'Planning process (the P)', share: '~25%', detail: 'Meeting and briefing sequence leading to the Incident Action Plan.' },
      { name: 'Resource management', share: '~15%', detail: 'Resource ordering, tracking, and demobilisation.' },
      { name: 'Unified command', share: '~15%', detail: 'Multi-agency command structures and shared objectives.' },
      { name: 'ICS forms interpretation', share: '~15%', detail: 'Reading ICS-201/202/203 documents in scenarios.' }
    ],
    samples: [
      {
        prompt: 'Which staff member is responsible for safety at an expanding incident?',
        options: ['A. Operations Section Chief', 'B. Safety Officer', 'C. Logistics Section Chief', 'D. Planning Section Chief'],
        answer: 'B',
        explanation: 'The Safety Officer is part of command staff and monitors incident operations for safety hazards.'
      },
      {
        prompt: 'What is the first step in the planning P process?',
        options: ['A. Tactics meeting', 'B. Initial response and assessment', 'C. Operations briefing', 'D. Strategy meeting'],
        answer: 'B',
        explanation: 'The planning process begins with initial response and assessment of the incident, then moves into the formal planning meetings.'
      },
      {
        prompt: 'When two agencies share command of an incident, the structure is called:',
        options: ['A. Area command', 'B. Unified command', 'C. Single command', 'D. Multi-agency coordination'],
        answer: 'B',
        explanation: 'Unified command occurs when agencies work together through their designated incident commanders under a single Incident Action Plan.'
      }
    ],
    note: 'Samples are editor-written illustrations of the standard curriculum, not live exam items.'
  },
  examDay: {
    summary: 'ICS-300 runs as a two-day classroom course, and "exam day" is the end of day two, when the final is administered in the classroom by the instructor. The core rules are simple: attend both days fully (the course is time-based, so partial attendance can invalidate the record), bring your prerequisite completion records in case the instructor re-checks them, and participate in the exercises. The final is typically multiple choice on paper or an online system, with a passing score set by the host agency (commonly around 70 to 80 percent), and most agencies allow a retake if you fall short. Because the course is scenario-heavy, the most useful exam-day habit is to have actively staffed different roles during the exercises — the final scenarios reuse the same organisational logic. After passing, ask for a copy of your completion record and make sure your agency training officer files it; that document is what ICS-400 enrollment and promotion panels check. If your agency did not sponsor the course, keep the record with your professional training documents and note the course date for your NIMS compliance records.',
    bring: ['Prerequisite completion records (IS-100, IS-200, IS-700)', 'Photo ID', 'Notebook for exercise notes'],
    leave: ['The assumption that attendance alone suffices — participation in exercises is graded', 'Passive "just listening" mode'],
    timeline: [
      { time: 'Day 1', detail: 'ICS fundamentals review, organisation, and first tabletop exercises.' },
      { time: 'Day 2 morning', detail: 'Planning process exercises; building an Incident Action Plan in scenarios.' },
      { time: 'Day 2 afternoon', detail: 'Final exam administered by the instructor.' },
      { time: 'After', detail: 'Get a copy of the completion record and file it with your agency.' }
    ],
    rules: ['Full two-day attendance required', 'Prerequisite records checked', 'Final cut score set by host agency', 'Retakes typically allowed'],
    afterwards: 'Passing yields an ICS-300 completion record, the prerequisite for ICS-400 and for command-level roles at expanding incidents; file it with your agency.'
  }
};

export default data;
