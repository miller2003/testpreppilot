const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Emergency management & NIMS desk',
    bio: 'IS-800 structure and content come from the FEMA Emergency Management Institute official course page and are revised with each update. Wage figures come from the BLS OEWS series named by code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the IS-800 course format, unit content, and final-exam policy against FEMA EMI official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — IS-800 (National Response Framework) is a FEMA training course required in many emergency-management and public-safety roles, where emergency management directors earn a median of $86,130 (BLS, May 2024)',
    summary: 'The direct answer is that IS-800 has no salary of its own — it is a free FEMA online training course (National Response Framework, An Introduction), not a job credential, and no BLS occupation corresponds to holding it. The honest salary story is about the roles that list it as a training requirement: emergency management directors (SOC 11-9161), at a May 2024 median annual wage of $86,130 with the highest 10 percent above about $150,000; emergency management specialists and coordinators at the state and local level; and public-safety personnel in police, fire, and healthcare whose agencies mandate NIMS training as a condition of grant funding. BLS projects about 4 percent growth for emergency management directors from 2024 to 2034, with a few thousand openings per year. The practical read is that IS-800 is the "how the nation responds" companion to the ICS courses: it explains the National Response Framework — the doctrine that lays out how federal, state, tribal, and local governments coordinate with private and nonprofit partners during major incidents — and most agencies bundle it with IS-100/IS-200/IS-700 as the standard NIMS training package. Completing it costs nothing, takes a few hours, and is a checkbox that keeps your training record compliant, which matters for promotion eligibility in many public-safety agencies. The pay effect is indirect but real: the course sits in the required-training block that public-safety and emergency-management candidates must clear to be eligible for the roles with the wages quoted above. For most candidates the smartest framing is compliance-plus-knowledge: complete the course free, keep the certificate in your training file, and treat it as the doctrinal context for the ICS operational training that follows.',
    rows: [
      { label: 'Median annual wage, emergency management directors', value: '$86,130', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 11-9161)' },
      { label: 'Highest 10 percent, emergency management directors', value: '>$150,000', note: 'BLS OOH, May 2024' },
      { label: 'Projected growth, 2024-34', value: '+4%', note: 'BLS Employment Projections' },
      { label: 'The course itself', value: 'No direct occupation', note: 'Free FEMA EMI online course (IS-800)' }
    ],
    growth: 'BLS projects about 4% growth for emergency management directors from 2024 to 2034, with annual openings driven mainly by replacement.',
    source: { label: 'BLS OOH — Emergency Management Directors', url: 'https://www.bls.gov/ooh/management/emergency-management-directors.htm' }
  },
  passRate: {
    headline: 'No pass rate is published — IS-800 is an open-book online course with a final exam, and the real gate is completing it on the FEMA EMI platform, not a cohort percentage',
    summary: 'The core fact is that FEMA does not publish pass rates for IS-800, and none exists as a meaningful statistic, because the course is self-paced online training with an open-book final exam — the kind of assessment nearly everyone completes. What is published is the course structure: IS-800 is delivered on the FEMA Emergency Management Institute independent-study platform, contains roughly 25 to 35 minutes of reading and graphics per unit across about seven units, and ends with a final exam of 25 multiple-choice questions. The final exam requires a score of 75 percent or higher to pass, is open-book (you may keep the course text open while answering), and you must complete it in a single session on the EMI site. Because the material is directly drawn from the course text, the practical pass rate approaches universal for candidates who read the units, and the common failure mode is failing to finish the exam in one sitting or rushing without reading. What actually matters beyond the pass is the completion record: FEMA issues a certificate of completion with your name, course number, and date, which agencies file for NIMS compliance and grant-condition documentation. The honest preparation advice is therefore to read each unit rather than skim, use the course\u2019s built-in unit reviews, and take the final with the text available — the exam is a comprehension check on the National Response Framework\u2019s key concepts (the five framework guiding principles, core capabilities, the roles of federal and state agencies, and the Emergency Support Functions). If you fail the first attempt at the 75 percent cut, the EMI platform allows retakes after reviewing the course.',
    source: { label: 'FEMA EMI — IS-800 course page', url: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-800' },
    caveat: 'No official pass rate is published; the final exam is open-book with a 75% cut score set by FEMA.'
  },
  studyPlan: {
    summary: 'Plan for roughly 2 to 3 hours of total course time — the IS-800 reading plus the 25-question final — and complete it in one or two sittings, because the exam is open-book and draws directly from the text. The course covers the National Response Framework (NRF): the doctrine governing how the nation responds to all-hazards incidents, including the framework\u2019s guiding principles (engaged partnership, tiered response, scalable and flexible operational capabilities, unity of effort through unified command), the roles of local, state, tribal, territorial, and federal governments, the five mission areas (prevention, protection, mitigation, response, recovery), core capabilities, and the Emergency Support Functions (ESFs) that group federal assistance. The highest-yield study sequence is: first, read the course overview and the unit on the framework\u2019s principles, since those concepts recur throughout the exam; second, work through the unit on roles and responsibilities, learning who does what at each level of government; third, review the ESFs and core capabilities with the course\u2019s own summaries; and fourth, take the final with the text open, using the course search function to verify answers. Because the course is the doctrinal companion to the ICS series, the best preparation is having completed IS-100, IS-200, or IS-700 first — the concepts of unified command and incident management carry over, and IS-800 explicitly builds on them. Budget the 75 percent cut score into your approach: 25 questions means you can miss up to 6 and still pass, so if a question stumps you, mark your best answer and move on rather than losing time. Save the certificate immediately after passing and file it with your agency training records.',
    totalHours: '2-3 hours total',
    weeks: [
      { label: 'Sitting 1 (60-90 min)', focus: 'Course reading', tasks: ['Read the IS-800 units on the EMI platform', 'Note the five guiding principles and mission areas', 'Review the ESF list'], hours: 1.5 },
      { label: 'Sitting 2 (30-45 min)', focus: 'Final exam', tasks: ['Take the 25-question open-book final', 'Verify answers against the course text', 'Download the certificate'], hours: 0.75 }
    ],
    variants: [
      { label: 'NIMS training bundle', detail: 'Agencies typically pair IS-800 with IS-100, IS-200, and IS-700 as the standard required package.' },
      { label: 'Classroom-delivered versions', detail: 'Some agencies teach IS-800 content in instructor-led sessions; the online course remains the standard record.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy that makes IS-800 a low-stress completion is "read the units actively, then take the open-book final with the text available" — and the single biggest error is treating the course like a closed-book test and panicking over the 75 percent cut score. Because the final is open-book, the actual skill being tested is locating information efficiently, so learn the course text\u2019s layout — where the principles, mission areas, and ESFs are described — before you start the exam. A second proven approach is completing the ICS prerequisite courses first, because IS-800 explicitly assumes familiarity with unified command and incident management, and candidates who skip them spend more time decoding the terminology. Third, take notes on the five framework guiding principles and the five mission areas, since those two lists appear in multiple exam items in different wording. Fourth, use the EMI platform\u2019s course search function during the final to verify any answer you are unsure about; there is no penalty for checking. Fifth, do not over-prepare — this is a 2-to-3-hour course, and spending 10 hours on it is a misallocation compared with the ICS operational courses that follow. Finally, keep the certificate accessible in two places and confirm your agency files it, because the record — not the pass itself — is what NIMS compliance checks verify.',
    items: [
      { title: 'Read actively, then use the text', detail: 'The final is open-book; the skill tested is finding information efficiently.' },
      { title: 'Do the ICS prerequisites first', detail: 'IS-100/IS-200/IS-700 familiarity makes the NRF terminology decode faster.' },
      { title: 'Memorise the two key lists', detail: 'The five guiding principles and five mission areas recur across exam items.' },
      { title: 'Use the course search during the final', detail: 'There is no penalty for verifying answers against the text.' },
      { title: 'Keep the certificate on file', detail: 'Agencies file the completion record for NIMS compliance checks.' }
    ]
  },
  resourceComparison: {
    summary: 'IS-800 is a free FEMA course, so the entire preparation budget is effectively zero, and the official EMI platform is the only source that produces the valid certificate. The comparison below separates the official course, companion ICS courses, and optional third-party summaries, with prices current to this review. The buying rule is simple: complete the official course for the certificate, and use free NIMS reference materials rather than paying for commercial summaries of public-domain doctrine.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FEMA EMI IS-800 course', values: ['Free', 'Self-paced online + open-book final', 'The valid certificate itself'] },
      { label: 'Companion ICS courses (IS-100, IS-200, IS-700)', values: ['Free', 'Self-paced online', 'The standard NIMS bundle'] },
      { label: 'FEMA National Response Framework document', values: ['Free', 'PDF', 'Deeper doctrinal reference'] },
      { label: 'Third-party NIMS study guides', values: ['~$10-30', 'Book or PDF', 'Optional review of public-domain content'] }
    ],
    footnote: 'All prices approximate and dated to this review; the official FEMA course is free and the only source of the valid certificate.'
  },
  commonMistakes: {
    summary: 'The most common mistake is treating IS-800 as a closed-book exam and skipping the reading, which converts an open-book course into a guessing exercise; the second is taking the final without the course text accessible and losing points on easily verified answers. A third recurring error is missing the 75 percent cut score by rushing — 25 questions means six misses fail the course, so spending 30 minutes on the final is normal. Candidates also routinely confuse the National Response Framework (the doctrinal document IS-800 teaches) with the ICS operational system taught in the ICS courses, and mix up the five mission areas. Finally, many candidates complete the course but never download or file the certificate, leaving their NIMS training record incomplete when the agency checks it.',
    items: [
      { mistake: 'Skipping the reading', fix: 'Read the units; the open-book final draws directly from the text.' },
      { mistake: 'Taking the final without the text', fix: 'Keep the course text open and use search to verify answers.' },
      { mistake: 'Rushing past the cut score', fix: 'Six misses fail the 25-question exam; budget 30 minutes for the final.' },
      { mistake: 'Mixing up NRF and ICS', fix: 'IS-800 teaches the response doctrine; the ICS courses teach operational command — keep them separate.' },
      { mistake: 'Not filing the certificate', fix: 'Download the completion record and file it with your agency for NIMS compliance.' }
    ]
  },
  questionTypes: {
    summary: 'The IS-800 final exam contains 25 multiple-choice questions testing the National Response Framework\u2019s key concepts: the five guiding principles, the five mission areas, the levels of government and their roles, core capabilities, and the Emergency Support Functions. Most items are recall-style with scenario dressing — for example, identifying which level of government leads a response, or which mission area a described action belongs to. There are no essays or simulations; the exam is a straightforward comprehension check. The samples below are editor-written illustrations of the course content, not live exam items.',
    types: [
      { name: 'Guiding principles', share: '~25%', detail: 'Engaged partnership, tiered response, scalable capabilities, unity of effort.' },
      { name: 'Roles & responsibilities', share: '~25%', detail: 'Local, state, tribal, territorial, and federal roles in response.' },
      { name: 'Mission areas & core capabilities', share: '~25%', detail: 'Prevention, protection, mitigation, response, recovery.' },
      { name: 'Emergency Support Functions', share: '~15%', detail: 'How federal assistance is grouped and delivered.' },
      { name: 'Framework fundamentals', share: '~10%', detail: 'Purpose and structure of the NRF.' }
    ],
    samples: [
      {
        prompt: 'Which of the five NRF guiding principles describes the ability to adjust the response to the incident\u2019s size and complexity?',
        options: ['A. Engaged partnership', 'B. Tiered response', 'C. Scalable, flexible, and adaptable operational capabilities', 'D. Unity of effort through unified command'],
        answer: 'C',
        explanation: 'The NRF\u2019s principles include scalable, flexible, and adaptable operational capabilities, allowing the response to match the incident.'
      },
      {
        prompt: 'Which level of government has the primary responsibility for incident response at the scene?',
        options: ['A. Federal government', 'B. Local government', 'C. Tribal government only', 'D. The private sector'],
        answer: 'B',
        explanation: 'The NRF recognises that incident response begins and ends at the local level, with state and federal support scaled to need.'
      },
      {
        prompt: 'Planning, public information, and warning fall under which mission area?',
        options: ['A. Prevention', 'B. Response', 'C. Recovery', 'D. Protection'],
        answer: 'D',
        explanation: 'Protection includes capabilities such as planning, public information, and warning that safeguard communities from hazards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the course content, not live exam items.'
  },
  examDay: {
    summary: 'There is no scheduled exam day for IS-800 — the entire course, including the final, is completed online at your convenience on the FEMA EMI platform, and the final must be completed in a single session. The core rules: log in to the EMI independent-study site, work through the course units, and take the 25-question final with a 75 percent passing score; the exam is open-book and there is no time limit reported by the platform for most candidates. Because it is online and self-paced, the "exam-day" discipline is choosing a block of 60 to 90 minutes without interruptions, having the course text open in a second window, and finishing the final without closing the browser mid-exam. After passing, the EMI platform generates your certificate of completion; download it immediately and save a copy, since the site retains records but agencies want the document in your file. If you fail the first attempt, review the course and retake; the platform permits retesting. The most useful habits are reading the units in the order presented, using the built-in unit reviews, and verifying uncertain answers against the text during the final rather than guessing.',
    bring: ['FEMA EMI login', 'Course text open in a second window', '60-90 minutes of uninterrupted time'],
    leave: ['Distractions — the final must be completed in a single session', 'The assumption of a closed-book test'],
    timeline: [
      { time: 'Login', detail: 'Access the EMI independent-study platform with your FEMA SID.' },
      { time: 'Read', detail: 'Work through the IS-800 units in order; note the principles, mission areas, and ESFs.' },
      { time: 'Final', detail: '25 open-book questions, 75% to pass, single session.' },
      { time: 'Certificate', detail: 'Download the completion record immediately and file it.' }
    ],
    rules: ['Open-book final with the course text', '75% cut score (25 questions)', 'Single-session final', 'Retakes permitted after review'],
    afterwards: 'Passing issues the IS-800 certificate of completion, filed with your agency for NIMS compliance; pair it with IS-100/IS-200/IS-700 for the standard training package.'
  }
};

export default data;
