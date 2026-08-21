const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Workplace safety & compliance certifications desk',
    bio: 'This desk covers OSHA and workplace-safety credentials. Program structure and rules come from the official pages (OSHA Outreach Training Program, authorized training providers), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against OSHA\'s Outreach Training Program pages (30-hour general industry) and BLS OOH data for the supervisory occupations the training serves, May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$72,590 median for first-line supervisors of production and operating workers — the supervisory occupations OSHA 30 serves (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "OSHA 30" — the 30-Hour General Industry Outreach card is a supervisor-level training credential, and the wage question belongs to the occupation you work in with it. The 30-hour program targets supervisors, managers and safety-responsible personnel in manufacturing and general industry, and we cite First-Line Supervisors of Production and Operating Workers, SOC 51-1011, as the representative occupation: May 2024 median of $72,590, with the lowest 10 percent under $48,020 and the highest 10 percent above $113,770. BLS counted 603,300 first-line production supervisor jobs in 2024 and projects a 2 percent decline from 2024 to 2034, with about 52,900 openings a year, almost all replacement demand. The limitation to state plainly: the 30-hour card is a training credential, not a licence or a degree, and its economic value is employability — many employers require or prefer it for supervisory and safety-coordinator roles, and it signals a deeper hazard-management competence than the 10-hour card. Read the cited wage as the market for the supervisory occupations the card serves, not as the value of the card itself, and note that the 30-hour program is a deeper version of the 10-hour content, not a different credential type.',
    rows: [
      { label: 'Median annual wage, first-line supervisors of production', value: '$72,590', note: 'BLS OOH, SOC 51-1011, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $48,020', note: 'BLS OOH, SOC 51-1011, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $113,770', note: 'BLS OOH, SOC 51-1011, May 2024' },
      { label: 'Median, maintenance and repair workers (skilled role on the floor)', value: '$52,740', note: 'BLS OOH, SOC 49-9071, May 2024' }
    ],
    growth: 'BLS projects a 2 percent decline for first-line production supervisors from 2024 to 2034, about 52,900 openings per year, nearly all replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - First-Line Supervisors of Production and Operating Workers', url: 'https://www.bls.gov/ooh/management/first-line-supervisors-of-production-and-operating-workers.htm' }
  },
  passRate: {
    headline: 'OSHA publishes no pass rate — the 30-hour card is earned by completing the training, not by passing a scored exam',
    summary: 'The OSHA Outreach 30-Hour General Industry training is not a scored exam, and OSHA publishes no pass rate because there is no test to pass. The card is earned by completing 30 hours of instruction through an OSHA-authorized trainer or authorized online provider, which verifies completion and issues the Department of Labor wallet card. The structure is fixed by OSHA: the 30 hours include about 7 hours of mandatory topics — introduction to OSHA and workers\' rights, walking-working surfaces, exit routes and emergency action plans, electrical safety, personal protective equipment, and hazard communication — plus elective hours from the approved general-industry topic list, including machine guarding, materials handling, industrial hygiene, and recordkeeping, with a minimum of 5 hours of mandatory instruction on hazard identification and control methods. Because there is no exam, preparation means completing the modules, passing the provider\'s section quizzes, and retaining the documentation. The real gate, as with the 10-hour card, is provider authorization: only OSHA-authorized providers may issue valid cards, so verify the vendor before paying.',
    source: { label: 'OSHA - Outreach Training Program (30-hour General Industry)', url: 'https://www.osha.gov/outreach' },
    caveat: 'OSHA publishes the training-hour structure but no pass rate, because the card is earned by completing the training rather than passing a scored exam.'
  },
  studyPlan: {
    summary: 'The OSHA 30-Hour General Industry card requires completing 30 hours of authorized training with no scored exam, so the plan is about coverage, engagement and provider choice. OSHA mandates roughly 7 hours of core topics — introduction to OSHA and workers\' rights, walking-working surfaces, exit routes and emergency action plans, electrical safety, personal protective equipment and hazard communication — and the remaining hours are electives chosen by the provider, commonly including machine guarding, materials handling, industrial hygiene, welding and hot-work safety, and recordkeeping. A practical plan spans five to seven sessions over one to three weeks. Sessions one and two: the mandatory core, with notes on the hazard-control hierarchy and the relevant 29 CFR 1910 standards. Sessions three to five: the hazard-specific electives, matched to your industry. Sessions six and seven: the management-oriented content — safety programs, incident investigation and recordkeeping — which is where the 30-hour card goes beyond the 10-hour material. Because the value is retention for supervisors, take the quizzes seriously and keep the documentation.',
    totalHours: '30 hours of authorized training (no scored exam)',
    weeks: [
      { label: 'Sessions 1-2 (about 10 hours)', focus: 'Mandatory core', tasks: ['Introduction to OSHA and workers\' rights', 'Walking-working surfaces, exit routes, emergency plans', 'Electrical safety, PPE, hazard communication'], hours: 10 },
      { label: 'Sessions 3-5 (about 12 hours)', focus: 'Hazard electives', tasks: ['Machine guarding and materials handling', 'Industrial hygiene and chemical safety', 'Industry-matched electives (welding, hot work, ergonomics)'], hours: 12 },
      { label: 'Sessions 6-7 (about 8 hours)', focus: 'Management content', tasks: ['Safety programs and hazard identification methods', 'Incident investigation and recordkeeping', 'Confirm card issuance and keep records'], hours: 8 }
    ],
    variants: [
      { label: 'Supervisor in manufacturing', detail: 'Prioritize machine guarding, lockout/tagout and industrial-hygiene electives.' },
      { label: 'Warehouse or distribution lead', detail: 'Prioritize materials handling, powered industrial trucks and ergonomics electives.' }
    ]
  },
  prepStrategies: {
    summary: 'Because the OSHA 30-Hour General Industry card is earned by completing authorized training rather than passing an exam, the dominant strategy is provider diligence and deliberate topic coverage. First, verify the provider: only OSHA-authorized trainers and authorized online providers issue valid Department of Labor cards, and OSHA publishes a searchable provider list — an unauthorized vendor\'s card will not be accepted. Second, complete the mandatory core fully: the roughly 7 hours of required topics are non-negotiable, and the card is invalid without them. Third, choose electives to match your role: supervisors in manufacturing should take machine guarding and lockout/tagout, while warehouse leads should take materials handling and powered industrial trucks; the value of the card is that your hazard knowledge matches your workplace. Fourth, engage with the management content — safety programs, incident investigation and recordkeeping — because that is what separates the 30-hour supervisor credential from the 10-hour worker card. Finally, keep the completion certificate and wallet card, because employers and audits ask for them.',
    items: [
      { title: 'Verify the provider is authorized', detail: 'Only OSHA-authorized providers issue valid cards; check the OSHA list first.' },
      { title: 'Complete the mandatory core', detail: 'The ~7 hours of required topics are non-negotiable.' },
      { title: 'Match electives to your role', detail: 'Manufacturing and warehouse supervisors face different hazards.' },
      { title: 'Engage the management content', detail: 'Safety programs and recordkeeping are the supervisor-level value.' },
      { title: 'Keep the documentation', detail: 'The card and certificate are what employers and audits ask for.' }
    ]
  },
  resourceComparison: {
    summary: 'OSHA 30-Hour General Industry costs are modest and dominated by the training provider. Authorized online providers charge roughly $80 to $200 for the self-paced 30-hour course, while in-person training with an authorized trainer runs roughly $150 to $400 depending on the host organization; the 30-hour course is naturally more expensive than the 10-hour because it is three times the hours. OSHA\'s own publications — the General Industry standards (29 CFR 1910), the hazard fact sheets and osha.gov pages — are free and authoritative. Some employers fund the training for supervisors, and labor unions and industry associations often host discounted group sessions. A realistic total budget is $100 to $400. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OSHA.gov publications', values: ['Free', 'Official standards and fact sheets', 'The authoritative hazard reference'] },
      { label: 'Authorized online provider', values: ['~$80-$200', 'Self-paced 30-hour course', 'The common low-cost path'] },
      { label: 'Authorized in-person trainer', values: ['~$150-$400', 'Instructor-led training', 'Employer-hosted or group training'] },
      { label: 'Union/industry group sessions', values: ['Varies', 'Group training events', 'Discounted supervisor training'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; pricing varies by provider; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common mistake with the OSHA 30-Hour card is buying from an unauthorized provider: unauthorized vendors issue cards that employers and jurisdictions will not accept. The fix is checking OSHA\'s authorized-provider list before paying. The second mistake is treating the 30-hour card as a safety-management certification — it is an Outreach training credential, not the same as the OSHA 510/511 trainer courses or a professional certification such as the Certified Safety Professional. Third, some candidates rush through online modules and skip the quizzes, losing the retention value that employers actually care about in supervisors. Fourth, workers confuse the 10-hour and 30-hour cards, taking the wrong level for their role; the 30-hour is for supervisors and safety-responsible staff, the 10-hour for entry workers. Finally, losing the documentation creates a retake cost; store the wallet card and certificate.',
    items: [
      { mistake: 'Buying from an unauthorized vendor', fix: 'Check OSHA\'s authorized-provider list before paying.' },
      { mistake: 'Treating it as a professional certification', fix: 'It is an Outreach credential; know what it is and is not.' },
      { mistake: 'Rushing the modules', fix: 'The quizzes and retention matter for supervisor roles.' },
      { mistake: 'Taking the wrong card level', fix: 'The 30-hour is for supervisors; the 10-hour is for entry workers.' },
      { mistake: 'Losing the documentation', fix: 'Store the wallet card and completion certificate.' }
    ]
  },
  questionTypes: {
    summary: 'The OSHA 30-Hour General Industry program has no scored final exam, so there are no exam questions in the traditional sense. Authorized providers include section quizzes to reinforce the material, typically multiple-choice items on hazard recognition, the hierarchy of controls and the relevant 29 CFR 1910 standards, often at the supervisor-decision level. The samples below are editor-written illustrations of the kind of section-quiz items providers use, not official exam items; they show the supervisor-focused style of the training content.',
    types: [
      { name: 'Hazard-recognition items', share: 'Typical section quizzes', detail: 'Identifying hazards in described work situations.' },
      { name: 'Supervisor-decision items', share: 'Typical section quizzes', detail: 'Responding to hazards, enforcing controls and managing programs.' },
      { name: 'Standard-and-recordkeeping items', share: 'Typical section quizzes', detail: 'Applying 29 CFR 1910 standards and OSHA recordkeeping.' }
    ],
    samples: [
      {
        prompt: 'A supervisor observes workers removing machine guards to speed up a job. The most appropriate response is:',
        options: ['A. Stop the unsafe practice immediately and require the guards to be reinstalled', 'B. Allow it if production targets are met', 'C. Document it and address it at the next meeting', 'D. Report only if an injury occurs'],
        answer: 'A',
        explanation: 'Removing machine guards is an immediate serious hazard; the supervisor must stop the practice and require compliance. Allowing it for production, deferring to a meeting or waiting for an injury each fail the supervisor\'s safety duty.'
      },
      {
        prompt: 'Under OSHA recordkeeping rules, which workplace injury generally must be recorded on the OSHA 300 log?',
        options: ['A. A work-related injury requiring medical treatment beyond first aid', 'B. Any first-aid-treated injury', 'C. Any injury regardless of cause', 'D. Only injuries requiring hospitalisation'],
        answer: 'A',
        explanation: 'Recordable injuries are work-related injuries requiring medical treatment beyond first aid, among other criteria. First-aid-only injuries are not recordable, and hospitalisation is not the threshold — that distinction is a common trap.'
      },
      {
        prompt: 'A supervisor must control exposure to a chemical with a permissible exposure limit. The most appropriate first control is:',
        options: ['A. Engineering controls such as ventilation', 'B. Requiring respirators for everyone', 'C. Rotating workers to reduce exposure time', 'D. Posting a warning sign'],
        answer: 'A',
        explanation: 'The hierarchy of controls puts engineering controls — ventilation, isolation or substitution — above administrative controls and PPE. Respirators, rotation and signs are lower-order controls that should follow, not replace, engineering measures.'
      }
    ],
    note: 'Samples are editor-written illustrations of typical provider section quizzes, not official exam items — the program has no scored final exam.'
  },
  examDay: {
    summary: 'There is no "exam day" for the OSHA 30-Hour General Industry card in the traditional sense — the card is earned by completing the authorized training. For online delivery, you work through the modules at your own pace within the provider\'s window, complete the section quizzes, and receive the Department of Labor wallet card after OSHA processes the completion (typically a few weeks, or immediate for some providers with the electronic card). For in-person delivery, you attend the instructor-led sessions across the required hours and receive the card through the same process. The practical checklist: confirm the provider\'s OSHA authorization, complete all 30 hours including the mandatory core, keep the completion certificate, and allow time for card issuance. The afterwards matters: provide the card and certificate to your employer if required, store the documentation, and remember that while the card does not expire under OSHA rules, some employers and cities impose their own renewal expectations.',
    bring: ['Valid identification for the training registration', 'Confirmation of your provider and course', 'A quiet, focused environment for online modules'],
    leave: ['Any assumption that the card equals a professional safety certification', 'Non-authorized provider purchases — verify first'],
    timeline: [
      { time: 'Before starting', detail: 'Verify the provider\'s OSHA authorization and confirm the mandatory core is included.' },
      { time: 'Training', detail: 'Complete all 30 hours across the core and elective modules.' },
      { time: 'Quizzes', detail: 'Pass the provider\'s section quizzes to confirm completion.' },
      { time: 'Afterwards', detail: 'Receive the DOL wallet card and keep the completion certificate.' }
    ],
    rules: [
      'The card is earned by completing authorized training, not by passing an exam',
      'The mandatory core topics are required for a valid card',
      'The card does not expire under OSHA rules, though employers may impose their own expectations'
    ],
    afterwards: 'On completion, receive the DOL wallet card, provide it to your employer if required, and store the certificate. The card does not expire, but check employer and jurisdiction requirements.'
  }
};

export default data;
