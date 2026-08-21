const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Occupational safety & maritime training desk',
    bio: 'We cover OSHA outreach training programs. Format and fee facts come from OSHA and authorized trainers and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the OSHA 10 maritime outreach course structure and requirements against OSHA official pages; verified BLS maritime wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'OSHA 10 maritime is an entry-level safety requirement in marine operations: water transportation and related roles carry transportation-group medians near $42,740 (BLS, May 2024)',
    summary: 'The OSHA 10-hour maritime outreach course is a voluntary-but-widely-required safety training program covering maritime workplace hazards - fall protection, personal protective equipment, hazardous materials, material handling, and the specific hazards of shipyard, marine terminal and longshoring operations. It is a training certificate, not a job license for one occupation, so no single BLS SOC code attaches to it; the salary story belongs to the maritime and transportation occupations that embed it in hiring requirements. BLS reported that transportation and material moving occupations carried a median of $42,740 in May 2024, with maritime-specific roles varying: shipyard and marine-terminal workers, longshore workers, and water-transportation support staff sit across the transportation group, and the specific wage depends on the title and the port. The structural point for workers is that the OSHA 10 certificate functions as an entry-level hireability requirement in many maritime employers\u2019 onboarding: shipyards, marine terminals, port operators and contractors commonly require it before site access, alongside the OSHA 30 for supervisory roles, and it is cheap ($50-$150) and short (10 hours). BLS classifies workers by job duty, not training certificates, so no completion maps to a specific wage; the certificate removes a site-access barrier, and the wage follows the job. For a candidate entering maritime work, the OSHA 10 maritime certificate is the standard first safety credential, and the honest framing is that it satisfies the employer\u2019s training requirement and supports site access, with the wage set by the specific role and port.',
    rows: [
      { label: 'Transportation and material moving occupations median, May 2024', value: '$42,740', note: 'BLS OEWS occupational group' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'OSHA 10 course length', value: '10 hours', note: 'OSHA outreach training' },
      { label: 'Certificate validity', value: 'Indefinite (no expiry)', note: 'OSHA outreach cards do not expire' }
    ],
    growth: 'Transportation and material moving employment is projected to grow about 3 percent from 2024 to 2034; maritime hiring follows port and shipyard demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Transportation and Material Moving Occupations', url: 'https://www.bls.gov/ooh/transportation-and-material-moving/home.htm' }
  },
  passRate: {
    headline: 'OSHA 10 maritime is training, not an exam: completion requires 10 hours of instruction with per-module quizzes set by the trainer',
    summary: 'OSHA does not publish a pass rate for the 10-hour maritime outreach course because it is a training program, not a licensure exam, and OSHA does not administer or score a standardized test. The course is delivered by OSHA-authorized outreach trainers (approved through the OSHA Outreach Training Program) and consists of 10 hours of instruction covering mandatory topics - including an introduction to OSHA, fall protection, personal protective equipment, hazardous materials, and maritime-specific hazard awareness for the shipyard, marine terminal and longshoring industries - plus elective topics at the trainer\u2019s discretion. Each trainer sets the module quizzes and any final assessment; a common pattern is per-module quizzes with a 70-80 percent passing line, and candidates must complete the full 10 hours of instruction to receive the OSHA 10 card. Because there is no standardized exam, the "pass rate" varies by trainer, and the completion card is the deliverable. The course is delivered in person (the traditional format) and online by many authorized trainers (OSHA allows online delivery of the outreach courses when the trainer is authorized). The OSHA 10 card does not expire - it has no formal validity period - though employers and sites may set their own refresher expectations, and some employers prefer a recent training date. The honest summary is that the bar is course completion with the trainer\u2019s assessments, and the legally meaningful facts are the 10-hour requirement, the authorized-trainer delivery, and the non-expiring card.',
    source: { label: 'OSHA Outreach Training Program - Maritime', url: 'https://www.osha.gov/training/outreach' },
    caveat: 'No national pass rate exists; each authorized trainer sets its own quizzes. Completion requires the full 10 hours; the card does not expire.'
  },
  studyPlan: {
    summary: 'The OSHA 10 maritime course is 10 hours of training, typically delivered in one or two days in person or split into self-paced modules online, and a study plan is about absorbing the mandatory topics rather than weeks of preparation. The mandatory curriculum covers: an introduction to OSHA and worker rights, fall protection, personal protective equipment, hazardous materials, and maritime-specific hazard awareness (the distinct hazards of shipyard employment, marine terminals and longshoring - including working at heights on vessels, confined spaces, crane and material-handling operations, and the electrical and chemical hazards of the marine environment). A realistic plan: before the course, review the OSHA maritime fact sheets and the course outline (1 hour); during the course, complete each module\u2019s quiz at the trainer\u2019s passing line and ask questions on the topics most relevant to your work; after the course, keep the completion card and the course materials for reference. Because the course is trainer-delivered and the quizzes map to the modules, the failure mode is not difficulty but missing sessions - candidates who skip modules cannot complete the 10-hour requirement and do not receive the card. The most important things to retain are the worker-rights basics (how to report hazards and file complaints) and the maritime-specific hazards (falls, confined spaces, cranes, hazardous materials), because those are what employers verify in site orientations and what the course is designed to teach.',
    totalHours: '10 hours of instruction + 1 hour self-study',
    weeks: [
      { label: 'Before the course', focus: 'OSHA basics', tasks: ['Review OSHA maritime fact sheets', 'Review the course outline'], hours: 1 },
      { label: 'The course', focus: '10-hour training', tasks: ['Complete all modules', 'Module quizzes', 'Receive the OSHA 10 card'], hours: 10 }
    ],
    variants: [
      { label: 'In-person vs online', detail: 'Both are accepted when delivered by an authorized trainer; in-person adds interaction, online adds scheduling flexibility.' },
      { label: 'OSHA 30 for supervisors', detail: 'Supervisory roles often require the 30-hour course; the 10-hour card is the entry level.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategies for the OSHA 10 maritime course are about engagement and retention rather than exam gaming. Strategy one: attend every session and complete every module, because the 10-hour requirement is the compliance fact - missing a module means the card is not issued, and the trainer documents hours. Strategy two: connect the content to your specific work environment - whether shipyard, terminal or longshore - because the course is most valuable when the maritime-specific hazards (falls from vessels, confined spaces, crane operations, hazardous materials) are tied to the tasks you will actually do, and that linkage is what employers probe in site orientations. Strategy three: learn the worker-rights basics - how to identify hazards, report them, and file a complaint with OSHA - because these are tested in the course and are the practical core of the training. Strategy four: take the module quizzes seriously as the trainer sets them, because they are the assessment and the passing line is real even though it varies by trainer. Strategy five: keep the completion card and the course materials in your training file, because employers and sites verify the card at access, and the materials are the reference for the safety topics. Strategy six: ask the trainer about the site-specific requirements where you will work, because many employers layer their own orientation on top of the OSHA 10.',
    items: [
      { title: 'Complete every module', detail: 'The 10-hour requirement is the compliance fact.' },
      { title: 'Connect to your work', detail: 'Maritime-specific hazards matter most in your tasks.' },
      { title: 'Learn worker rights', detail: 'Hazard reporting and complaints are the practical core.' },
      { title: 'Keep the card and materials', detail: 'Sites verify the card at access.' }
    ]
  },
  resourceComparison: {
    summary: 'The OSHA 10 maritime resource market is anchored by OSHA\u2019s free official materials and the authorized trainers. The OSHA website publishes the maritime fact sheets, the Outreach Training Program requirements and the course outline - all free - and candidates should verify that the chosen trainer is authorized under the OSHA Outreach Training Program, because only authorized trainers can issue the official OSHA 10 card. The course fee is $50-$150 (in-person and online options; employers often pay). Commercial study guides and quiz sites exist at $10-$40 but are largely unnecessary because the course contains the content and the assessments are trainer-set; candidates should not pay extra for "guaranteed card" products, which are not part of the official program. The honest ranking: free OSHA materials, the authorized trainer\u2019s course (the required purchase), and nothing else. Prices here are current as of 2025-26 and vary by trainer.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OSHA maritime fact sheets', values: ['Free', 'PDF at osha.gov', 'Course content overview'] },
      { label: 'Authorized 10-hour course', values: ['$50-$150', 'In-person/online', 'The required training and the OSHA 10 card'] },
      { label: 'OSHA Outreach Program info', values: ['Free', 'Web', 'Verifying trainer authorization'] },
      { label: 'Commercial study guides', values: ['$10-$40', 'Print/online', 'Unnecessary; course contains the content'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by trainer; verify OSHA authorization before paying. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common OSHA 10 maritime mistakes are procedural. Mistake one: taking the course from a trainer who is not OSHA-authorized; the card is not the official OSHA card and may be rejected at site access, so the authorization should be verified before paying. Mistake two: skipping modules or rushing the 10 hours; the trainer documents hours, and the card is not issued without the full requirement. Mistake three: treating the course as a box to check and ignoring the content; the maritime-specific hazards (falls, confined spaces, cranes, hazardous materials) are what the employer\u2019s site orientation and the job itself will probe. Mistake four: losing the card; employers and sites verify it at access, and a lost card requires requesting a replacement through the training program. Mistake five: assuming the course is a license; the OSHA 10 card does not certify competency for any job - it documents training - and the employer\u2019s site-specific requirements still apply. Mistake six: paying extra for "guaranteed card" or unofficial products; the official program delivers the card through authorized trainers, and premium-priced shortcuts are not part of it. Finally, candidates should keep the card and course materials in a personal training file, because the card does not expire but employers may prefer recent training.',
    items: [
      { mistake: 'Using an unauthorized trainer', fix: 'Verify OSHA Outreach Training Program authorization.' },
      { mistake: 'Skipping modules', fix: 'Complete the full 10 hours; the card requires it.' },
      { mistake: 'Ignoring the content', fix: 'The maritime hazards are what the job probes.' },
      { mistake: 'Losing the card', fix: 'Keep it in a personal training file.' },
      { mistake: 'Paying for unofficial shortcuts', fix: 'Only authorized trainers issue the official card.' }
    ]
  },
  questionTypes: {
    summary: 'The OSHA 10 maritime course uses trainer-set module quizzes rather than a standardized national exam; a common pattern is per-module quizzes with a 70-80 percent passing line, and completion requires the full 10 hours of instruction. The mandatory content covers an introduction to OSHA and worker rights, fall protection, personal protective equipment, hazardous materials, and maritime-specific hazard awareness (shipyard, marine terminal and longshoring hazards). Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'OSHA and worker rights', share: 'Mandatory topic', detail: 'Hazard recognition, reporting, complaints.' },
      { name: 'Fall protection and PPE', share: 'Mandatory topics', detail: 'Falls on vessels, personal protective equipment.' },
      { name: 'Hazardous materials', share: 'Mandatory topic', detail: 'Chemical hazards and handling in marine settings.' },
      { name: 'Maritime-specific hazards', share: 'Mandatory topic', detail: 'Shipyard, terminal and longshoring hazards.' }
    ],
    samples: [
      {
        prompt: 'A worker on a vessel sees a fall hazard and reports it to the supervisor, who takes no action. What is the worker\u2019s protected recourse?',
        options: ['A. Filing a complaint with OSHA without retaliation', 'B. Quitting immediately', 'C. Fixing the hazard silently', 'D. Ignoring the hazard'],
        answer: 'A',
        explanation: 'Workers have the right to file a complaint with OSHA and are protected from retaliation for exercising their safety rights; the other options are not the protected recourse.'
      },
      {
        prompt: 'Which topic is a mandatory component of the OSHA 10-hour maritime outreach course?',
        options: ['A. Fall protection', 'B. Sailing navigation', 'C. Vessel engine repair', 'D. Fishing techniques'],
        answer: 'A',
        explanation: 'Fall protection is one of the mandatory topics of the 10-hour maritime outreach curriculum; the others are job skills outside the safety-training scope.'
      },
      {
        prompt: 'An employer requires an OSHA 10 card for site access. Which statement about the card is correct?',
        options: ['A. It documents 10 hours of safety training', 'B. It licenses the worker for any job', 'C. It expires after one year', 'D. It replaces site-specific orientation'],
        answer: 'A',
        explanation: 'The OSHA 10 card documents completion of the 10-hour training; it is not a license, does not expire, and does not replace the employer\u2019s site-specific requirements.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The OSHA 10 maritime course has no single exam day; completion requires attending the full 10 hours of training (in person over one or two days, or self-paced online through an authorized trainer) and passing the trainer\u2019s module quizzes. For in-person delivery, attend every session and bring photo ID for the completion record; for online delivery, complete the modules in the provider\u2019s system and the quizzes at the passing line. After completing the course and quizzes, the trainer issues the OSHA 10 card (paper or electronic depending on the provider), and the completion is recorded with the trainer. The card does not expire. Afterwards, keep the card in a personal training file, verify whether the employer or site requires the OSHA 30 for supervisory roles, and retain the course materials as the reference for the safety topics.',
    bring: ['Photo ID (in-person)', 'Course enrollment confirmation', 'A schedule that covers the full 10 hours', 'Online: stable connection for the provider system'],
    leave: ['Assumptions that partial attendance earns the card', 'Unofficial "guaranteed card" shortcuts', 'The idea that the card is a job license'],
    timeline: [
      { time: 'Course', detail: 'Complete the 10 hours (in-person or authorized online).' },
      { time: 'Quizzes', detail: 'Trainer-set module quizzes at the passing line.' },
      { time: 'After completion', detail: 'Trainer issues the OSHA 10 card.' },
      { time: 'Ongoing', detail: 'Card does not expire; employer may add site requirements.' }
    ],
    rules: [
      'The trainer must be OSHA-authorized.',
      'The full 10 hours must be completed.',
      'The card documents training; it is not a license and does not expire.',
      'Supervisory roles often require the OSHA 30.'
    ],
    afterwards: 'Keep the card in your training file, confirm any site-specific orientation, and consider the OSHA 30 if moving into a supervisory role.'
  }
};

export default data;
