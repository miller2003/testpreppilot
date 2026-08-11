const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Workplace safety & compliance certifications desk',
    bio: 'This desk covers OSHA and workplace-safety credentials. Program structure and rules come from the official pages (OSHA Training Institute, authorized trainers), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against OSHA\'s 510 course pages and BLS OOH First-Line Supervisors of Construction Trades (SOC 47-1011), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$80,820 median for first-line supervisors of construction trades (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "OSHA 510" — the OSHA 510 course certifies that a participant can teach the 10- and 30-hour construction Outreach classes and serves the safety-responsible tier of the construction workforce, and the wage question belongs to the occupation you work in with it. The closest official BLS occupation is First-Line Supervisors of Construction Trades and Extraction Workers, SOC 47-1011, which had a May 2024 median wage of $80,820, with the lowest 10 percent under $52,780 and the highest 10 percent above $125,930. The fit is deliberate: the 510 is aimed at construction safety coordinators, supervisors and the workers who become OSHA-authorized trainers, and the supervisory tier is the relevant benchmark. BLS counted 700,400 first-line construction supervisor jobs in 2024 and projects a 2 percent decline from 2024 to 2034, with about 41,400 openings a year. The limitation to state plainly: the 510 is a trainer-authorisation course, not a wage credential, and its value is the authority to teach the Outreach classes and the safety-competence signal for construction safety roles. Read the number as the market for the supervisory occupations the credential serves.',
    rows: [
      { label: 'Median annual wage, first-line supervisors of construction trades', value: '$80,820', note: 'BLS OOH, SOC 47-1011, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $52,780', note: 'BLS OOH, SOC 47-1011, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $125,930', note: 'BLS OOH, SOC 47-1011, May 2024' },
      { label: 'Projected openings per year', value: '~41,400', note: 'BLS OOH, SOC 47-1011, 2024-2034' }
    ],
    growth: 'BLS projects a 2 percent decline for first-line construction supervisors from 2024 to 2034, about 41,400 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - First-Line Supervisors of Construction Trades', url: 'https://www.bls.gov/ooh/management/first-line-supervisors-of-construction-trades-and-extraction-workers.htm' }
  },
  passRate: {
    headline: 'OSHA publishes no pass rate — the 510 is completed by passing the course\'s final exam and demonstrating the required presentation skills',
    summary: 'The OSHA 510 course does not publish cohort pass rates, and third-party estimates are not official data, so we do not treat them as authoritative. What OSHA does publish is the structure: the 510 is a 30-hour OSHA Training Institute course (typically 4-5 days) on the OSHA standards for the construction industry, and completion requires passing the course\'s final exam and, in most deliveries, demonstrating the ability to present the Outreach material. The course is the prerequisite for becoming an OSHA-authorized Outreach trainer for construction (the 10- and 30-hour construction classes), and the passing standard is set by the course\'s final assessment. The course content covers the construction standards (29 CFR 1926): the general safety and health provisions, the hazard communication, the personal protective equipment, the scaffolding, the fall protection, the excavation and the electrical standards. The absence of a published pass rate is not an absence of standards: the final exam requires genuine mastery of the standards, and the trainer-authorisation that follows carries the responsibility of teaching the Outreach material accurately.',
    source: { label: 'OSHA - 510: Occupational Safety and Health Standards for the Construction Industry', url: 'https://www.osha.gov/training/otiec' },
    caveat: 'OSHA publishes the course structure but no pass rate; completion requires passing the final exam and the presentation component.'
  },
  studyPlan: {
    summary: 'The OSHA 510 is a 30-hour (4-5 day) instructor-led course with a final exam, so the plan is a course-participation and review plan. Step one: review the course description and the 29 CFR 1926 construction standards in advance, especially the high-frequency topics — fall protection, scaffolding, excavation, electrical and PPE — because the course moves through the standards quickly and the prior review compounds the learning. Step two: attend the full course and engage with the standards discussions, because the final exam rewards applying the standards to the scenarios the course presents. Step three: prepare for the presentation component if your delivery includes it — practising presenting the Outreach material is part of the trainer-authorisation path. Step four: pass the final exam and complete the trainer-authorisation paperwork with OSHA (the 510 alone qualifies you for the trainer-track; the 502/503 update courses maintain the authorisation). The plan is standards-heavy because the exam tests the construction standards precisely; candidates who attend passively meet the final exam unprepared.',
    totalHours: '30 hours of course instruction (plus pre-course standards review)',
    weeks: [
      { label: 'Before the course', focus: 'Standards review', tasks: ['Review the 29 CFR 1926 high-frequency topics', 'Fall protection, scaffolding, excavation, electrical, PPE', 'Prepare questions on the standards'], hours: 5 },
      { label: 'The course (4-5 days)', focus: 'Instruction and exam', tasks: ['The standards and their applications', 'The final exam', 'The presentation component'], hours: 30 },
      { label: 'After the course', focus: 'Trainer authorisation', tasks: ['Complete the OSHA trainer paperwork', 'Plan the 502/503 update cycle', 'Begin teaching the Outreach classes'], hours: 'Varies' }
    ],
    variants: [
      { label: 'Construction safety professional', detail: 'The standards are familiar from the field; focus on the trainer-authorisation path and the exam format.' },
      { label: 'Supervisor adding the trainer role', detail: 'Add a review week on the high-frequency standards before the course.' }
    ]
  },
  prepStrategies: {
    summary: 'The 510 rewards genuine mastery of the construction standards, so the dominant strategy is reviewing the 29 CFR 1926 standards before the course and engaging deeply during it: the final exam tests the standards precisely, and the high-frequency topics — fall protection, scaffolding, excavation, electrical and PPE — carry the most weight. Second, attend the full course and participate in the standards discussions, because the exam rewards the applications the instructor covers. Third, prepare for the presentation component: the trainer-authorisation path includes demonstrating the ability to present the Outreach material, and practising the presentation is part of the course. Fourth, plan the trainer-track deliberately: the 510 qualifies you for the Outreach-trainer authorisation, and the 502 (construction trainer update) and 503 (general-industry update) courses maintain it. Finally, remember the responsibility that follows: as an authorized trainer you teach the Outreach classes, and the accuracy of the material you deliver is part of the role.',
    items: [
      { title: 'Review the standards first', detail: 'The final exam tests 29 CFR 1926 precisely; pre-review compounds the learning.' },
      { title: 'Engage in the course', detail: 'The exam rewards the applications the instructor covers.' },
      { title: 'Prepare the presentation', detail: 'The trainer path includes demonstrating the presentation.' },
      { title: 'Plan the trainer-track', detail: 'The 502/503 update courses maintain the authorisation.' },
      { title: 'Respect the responsibility', detail: 'As a trainer you teach the material; accuracy is part of the role.' }
    ]
  },
  resourceComparison: {
    summary: 'The 510 cost is dominated by the course tuition. The OSHA Training Institute Education Centers charge roughly $800 to $1,200 for the 510 course, depending on the center; some employers fund it for safety staff and supervisors. OSHA\'s publications — the 29 CFR 1926 standards and the construction fact sheets — are free and are the authoritative reference. The trainer-authorisation and the update courses (502/503) add future costs. A realistic total budget is $800 to $1,500 for the course. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OTI Education Center 510 course', values: ['~$800-$1,200', '30-hour instructor-led course', 'The credential itself'] },
      { label: '29 CFR 1926 standards', values: ['Free', 'Official regulations', 'The authoritative reference'] },
      { label: 'OSHA construction fact sheets', values: ['Free', 'Official publications', 'The high-frequency topics in brief'] },
      { label: '502/503 update courses', values: ['~$400-$700 each', 'Refresher courses', 'Maintaining the trainer authorisation'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; course tuition varies by center; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common 510 mistake is attending the course without the prior standards review: candidates who meet the dense standards content cold find the final exam harder than necessary, because the course moves quickly. The fix is a pre-course review of the high-frequency topics. The second mistake is treating the course as a certificate to collect rather than a trainer-authorisation path: the value is the authority to teach the Outreach classes, and candidates who ignore the presentation and the trainer paperwork leave the value unrealised. Third, some candidates confuse the 510 with the Outreach completion cards — the 510 is the trainer course, not the 10- or 30-hour worker card. Fourth, candidates skip the update-course planning and let the authorisation lapse. Finally, treating the 510 as a general safety credential rather than the construction-trainer gate misses its purpose.',
    items: [
      { mistake: 'Skipping the pre-course review', fix: 'Review the high-frequency standards; the course moves quickly.' },
      { mistake: 'Collecting the certificate', fix: 'The value is the trainer-authorisation path; complete the paperwork.' },
      { mistake: 'Confusing it with the Outreach cards', fix: 'The 510 is the trainer course, not the 10/30-hour worker card.' },
      { mistake: 'Ignoring the update cycle', fix: 'The 502/503 courses maintain the authorisation; plan them.' },
      { mistake: 'Treating it as a general credential', fix: 'It is the construction-trainer gate; understand its purpose.' }
    ]
  },
  questionTypes: {
    summary: 'The OSHA 510 course is assessed with a final exam testing the construction standards, typically multiple-choice and scenario-based items on the 29 CFR 1926 topics, plus the presentation component of the trainer-authorisation path. The samples below are editor-written illustrations of the kind of standards-application items the final exam presents, not official exam items.',
    types: [
      { name: 'Standards-application items', share: 'Final exam', detail: 'Applying 29 CFR 1926 to described construction situations.' },
      { name: 'High-frequency-topic items', share: 'Final exam, weighted', detail: 'Fall protection, scaffolding, excavation, electrical and PPE.' },
      { name: 'Presentation component', share: 'Trainer-authorisation path', detail: 'Demonstrating the ability to present the Outreach material.' }
    ],
    samples: [
      {
        prompt: 'A worker is exposed to a fall hazard of 12 feet on a construction site. Under 29 CFR 1926, the employer must provide:',
        options: ['A. Fall protection, because the fall-hazard threshold for construction is 6 feet', 'B. No protection at 12 feet', 'C. Protection only above 20 feet', 'D. A safety meeting only'],
        answer: 'A',
        explanation: 'Construction fall protection is required at 6 feet or more under 29 CFR 1926.501 — so a 12-foot exposure requires protection. The 20-foot threshold applies to other standards, and meetings alone do not protect the worker.'
      },
      {
        prompt: 'Before a worker enters an excavation deeper than 5 feet, the employer must ensure:',
        options: ['A. A protective system and the proper access and egress', 'B. No protection is needed', 'C. Only a safety vest', 'D. The worker signs a waiver'],
        answer: 'A',
        explanation: 'Excavations deeper than 5 feet require a protective system (shoring, sloping or shielding) and the required access and egress under the excavation standard. No protection, a vest alone or a waiver each fail the standard.'
      },
      {
        prompt: 'A scaffold is erected on a construction site. Under the scaffold standard, the scaffold must be:',
        options: ['A. Capable of supporting its load without failure and erected by trained workers with the required fall protection', 'B. Built from whatever materials are available', 'C. Inspected only when a problem appears', 'D. Left unsecured to move quickly'],
        answer: 'A',
        explanation: 'Scaffolds must support their rated load, be erected by trained workers and be used with the required fall protection under 29 CFR 1926.451. Improvised materials, inspection-only-on-problem or unsecured scaffolds each fail the standard.'
      }
    ],
    note: 'Samples are editor-written illustrations of the course\'s standards-application style, not official exam items.'
  },
  examDay: {
    summary: 'There is no "exam day" in the traditional sense — the 510 is a 30-hour instructor-led course whose final exam and presentation component are completed during the course. The practical checklist is the course week: confirm the course dates, the pre-course materials the center provides, and the delivery format (in-person or online), then attend the full course, complete the final exam and the presentation, and pass both. On completion, you are eligible to apply for the OSHA Outreach trainer authorisation, which requires the 510/511 (construction/general) as the base and the update courses to maintain it. The afterwards matters: complete the trainer-authorisation application with OSHA, plan the update-cycle training, and begin delivering the Outreach classes your authorisation covers.',
    bring: ['Identification for the course registration', 'The pre-course materials the center provides', 'A focus on the trainer-authorisation path, not just the certificate'],
    leave: ['Any assumption that the 510 equals the worker Outreach cards'],
    timeline: [
      { time: 'Before the course', detail: 'Confirm the dates, format and pre-course materials.' },
      { time: 'Course week', detail: 'Attend the 30 hours, complete the final exam and the presentation.' },
      { time: 'After completion', detail: 'Apply for the OSHA trainer authorisation.' },
      { time: 'Next', detail: 'Plan the update-cycle training and begin teaching.' }
    ],
    rules: [
      'The 510 is a 30-hour instructor-led course with a final exam',
      'The presentation component is part of the trainer-authorisation path',
      'The 502/503 update courses maintain the authorisation'
    ],
    afterwards: 'On completion, apply for the OSHA trainer authorisation, plan the update cycle and begin teaching the Outreach classes.'
  }
};

export default data;
