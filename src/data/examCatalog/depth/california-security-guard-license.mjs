const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'State licensing & public safety desk',
    bio: 'The California security guard registration structure is drawn from the BSIS Security Guard Registration fact sheet and the California Department of Consumer Affairs licensing information, which are updated on a published revision cycle; BSIS does not publish pass rates for the Power to Arrest examination, which we state plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the BSIS Security Guard Registration fact sheet, the California EDD occupational license profile, and the BLS OOH Security Guards page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Security guards earned a May 2024 BLS median of $38,370, and the BSIS guard card is the registration gate for working as a security guard in California.',
    summary: 'The salary answer for the California BSIS security guard registration is a licensing story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $38,370 for SOC 33-9032 Security Guards, with the overall security guards and gambling surveillance officers group showing about 162,300 openings per year and little or no employment change projected from 2024 to 2034, and the guard card itself does not appear in wage data because the BLS classifies by job duty, not by certification. The BSIS guard card is the registration gate for private security work in California: candidates must be at least 18, pass a criminal history background check through the California DOJ and the FBI, complete the 8-hour Power to Arrest training, and hold a valid registration before they can be employed as a security guard by a licensed private patrol operator. Pay in this occupation is entry-level relative to other licensed occupations, with the BLS median well below the all-occupations median of $49,500, and earnings vary by assignment type, armed versus unarmed status, employer, and region, with armed posts and specialized sites typically paying more than standard unarmed posts. The BLS projects little or no change in security guard employment from 2024 to 2034, but the roughly 162,300 annual openings are driven almost entirely by replacement demand, so the job market for registered guards is steady and high-turnover rather than growing. Two caveats anchor the picture: first, the guard card is a state registration requirement, not an employment credential, so its value is realized through employment eligibility; second, the registration is the entry gate, and the additional 32 hours of security-officer skills training must be completed within the first six months of registration, with 8 hours of continuing training required annually to maintain the registration. For a candidate asking whether the California guard card pays, the direct answer is that it pays through the legal eligibility to work as a security guard in California, and the earnings follow the assignment and the employer rather than the card itself.',
    rows: [
      { label: 'Median annual wage', value: '$38,370', note: 'BLS OOH, Security Guards (SOC 33-9032), May 2024' },
      { label: 'All-occupations median', value: '$49,500', note: 'BLS reference point, May 2024' },
      { label: 'Job openings', value: '~162,300/year', note: 'Group total, mostly replacement demand (BLS 2024-2034)' },
      { label: 'Employment outlook', value: 'Little or no change', note: 'BLS projection, 2024-2034' }
    ],
    growth: 'BLS projects little or no change in security guard employment (2024-2034) with roughly 162,300 openings per year for the group, driven by replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Security Guards and Gambling Surveillance Officers', url: 'https://www.bls.gov/ooh/protective-service/security-guards.htm' }
  },
  passRate: {
    headline: 'BSIS does not publish pass rates for the Power to Arrest examination — the published standard is completion of the 8-hour training with the exam, followed by a DOJ/FBI background check, before the guard card is issued.',
    summary: 'The direct answer on pass rates is that the California Bureau of Security and Investigative Services does not publish pass-rate statistics for the Power to Arrest examination or the security guard registration process, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the structure: applicants must complete the 8-hour Power to Arrest training through a BSIS-approved provider, pass the examination that is part of that training, and pass a criminal history background check through the California DOJ and the FBI before the registration is issued — the background check, not the exam score, is the practical gate for most applicants. Under the current rules, the Power to Arrest training must be completed before the application is submitted, and new legislation (SB 652, effective January 1, 2026) tightened the timing so that the training must be completed within the six months preceding the application, and all training must come from a single certified provider — confirm the current requirement on the BSIS page, because the training rules are revised on a published cycle. The practical read on difficulty: the Power to Arrest course is an entry-level training course rather than a competitive examination, and candidates who attend the course and study the materials reliably pass, while the harder gate is the background check, where disqualifying convictions can block the registration. Because the registration itself requires the background check and the fees — about $50 for the application plus the DOJ and FBI fingerprint fees — the smart approach is to complete the Live Scan early and confirm the training provider is BSIS-approved, and to check the Bureau\u2019s disqualifying-conviction rules before paying for training, because a disqualifying record makes the exam moot.',
    source: { label: 'BSIS Security Guard Registration fact sheet', url: 'https://bsis.ca.gov/forms_pubs/guard_fact.shtml' },
    caveat: 'BSIS publishes no pass rates for the Power to Arrest examination; the published standard is completion of the 8-hour training with its exam and a clean DOJ/FBI background check before registration.'
  },
  studyPlan: {
    summary: 'An efficient California guard card plan is 10-15 hours over 2-3 weeks, because the Power to Arrest course is an entry-level training course rather than a competitive examination, and the real timeline is driven by the background check and the training sequencing, not by exam cramming. The BSIS-approved Power to Arrest course is the core: the 8-hour course covers the legal authority and limitations of a security guard, citizen\u2019s arrest procedures, use of force, liability, and emergency response, and the course ends with the examination that certifies completion — attending the course and studying its materials is the highest-yield planning decision, because the exam is tied to the course content. The plan should split into the 8-hour course (week 1), the Live Scan fingerprinting and application (weeks 1-2, run in parallel because the background check takes weeks), and the post-registration requirements (month 1-6), because California requires 32 hours of security-officer skills training within the first six months of registration and 8 hours of continuing training annually — planning the 32 hours early avoids a lapse risk. Candidates should also confirm the SB 652 timing rule, because the Power to Arrest training must now be completed within six months before the application, and verify the provider is BSIS-approved before paying. The practical read: the exam is rarely the failure point, so the plan should weight time toward the paperwork — Live Scan coding, the application form, and the fee — and toward scheduling the 32-hour training window, because those are the steps that delay real applicants.',
    totalHours: '10-15 hours of training time over 2-3 weeks (plus background-check waiting)',
    weeks: [
      { label: 'Week 1', focus: 'Power to Arrest training', tasks: ['Complete the 8-hour BSIS-approved Power to Arrest course', 'Pass the course examination and collect the certificate', 'Confirm the provider is BSIS-approved and the timing fits SB 652'], hours: 8 },
      { label: 'Week 1-2', focus: 'Live Scan and application', tasks: ['Complete Live Scan fingerprinting with the Security Guard Request form', 'Submit the registration application online via BreEZe with the fee', 'Track the background check and processing timeline'], hours: 3 },
      { label: 'Month 1-6', focus: 'Skills training', tasks: ['Complete the 32 hours of security-officer skills training within 6 months', 'Plan 16 hours within 30 days of employment and 16 more within 6 months', 'Keep all certificates of completion until registration expires'], hours: 32 },
      { label: 'Ongoing', focus: 'Renewal and continuing training', tasks: ['Complete 8 hours of continuing training annually', 'Renew the registration before the 2-year expiration', 'Maintain training certificates for inspection'], hours: 8 }
    ],
    variants: [
      { label: 'Armed guard goal', detail: 'Add the BSIS-approved firearms course (minimum 14 hours) and range qualification for the separate Firearm Permit.' },
      { label: 'Clean-record candidates', detail: 'The background check is routine; weight time toward the training and the application paperwork.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the California guard card is treating the process as a licensing pipeline rather than an exam, because the Power to Arrest exam is tied to the 8-hour course, and the real gates are the background check, the training sequencing, and the paperwork. First, verify the BSIS requirements on the official page before paying for anything, because the training timing rules changed under SB 652 — the Power to Arrest training must now be completed within six months before the application — and only a BSIS-approved provider counts. Second, complete the 8-hour Power to Arrest course through an approved provider and take the course examination seriously, because the certificate is the proof of completion the application requires, and the course content covers the legal rules the exam tests. Third, run the Live Scan fingerprinting and the application in parallel with the training, because the DOJ and FBI background check takes weeks and the application processing can add another 4-6 weeks, and using the correct Security Guard Request for Live Scan form with the right coding prevents delays. Fourth, plan the post-registration training before you start work, because the 32 hours of security-officer skills training must be completed within six months of registration — 16 hours within 30 days of employment and the remaining 16 within six months — and the 8-hour annual continuing training is required to renew. Fifth, budget the costs realistically — the application fee plus the DOJ and FBI fingerprint fees plus the course fee, typically totaling roughly $125-200 — and keep every certificate of completion, because the Bureau and employers can require proof until the registration expires. Finally, check the disqualifying-conviction rules before starting, because certain convictions block the registration and make the training time and fees moot.',
    items: [
      { title: 'Verify the current BSIS rules first', detail: 'SB 652 changed the training timing; only BSIS-approved providers count.' },
      { title: 'Complete the 8-hour Power to Arrest course', detail: 'Pass the course exam and keep the certificate; the application requires it.' },
      { title: 'Run Live Scan and the application in parallel', detail: 'The background check takes weeks; use the correct Live Scan form coding.' },
      { title: 'Plan the 32-hour skills training window', detail: '16 hours within 30 days of employment and 16 more within 6 months.' },
      { title: 'Budget the costs and keep certificates', detail: 'Typically ~$125-200 total; keep all training certificates until expiration.' }
    ]
  },
  resourceComparison: {
    summary: 'California guard card resources split into the official BSIS materials, the Power to Arrest training course, and the post-registration skills training, and the buying logic is anchored by the official BSIS fact sheet because it defines the requirements, fees, and training rules, and by a BSIS-approved training provider because only approved providers satisfy the law. The official BSIS materials — free — are the foundation of every plan and the authoritative reference for the requirements and the current fees. The Power to Arrest course, typically $25-75 from a BSIS-approved provider, is mandatory and includes the exam; the cheapest approved option satisfies the requirement, and online and in-person formats both work if the provider is approved. The 32-hour security-officer skills training, typically $100-250 depending on the provider, is required within six months of registration and is often provided or coordinated by the employer — confirm with the employer before paying, because many private patrol operators cover it. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The state fees are about $50 for the application plus the DOJ and FBI fingerprint processing fees, with the exact amounts on the BSIS fee page. A cheap readiness check is the BSIS fact sheet and the fee page before buying any training, because the requirements and the disqualifying-conviction rules determine whether the training investment makes sense. For most applicants the real decision is which training to buy first, and the answer is the mandatory 8-hour Power to Arrest course, because the certificate gates the application and the cheapest approved option satisfies the law; the 32-hour skills training can often wait until the employer confirms whether they will cover it.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'BSIS official fact sheet + fees', values: ['Free', 'Official documents', 'The authoritative requirements and current fees'], note: '' },
      { label: 'Power to Arrest course (8 hr)', values: ['$25-75', 'Approved provider, online or in-person', 'The mandatory entry training with its exam'], note: '' },
      { label: 'Security-officer skills training (32 hr)', values: ['$100-250', 'Approved provider', 'The 6-month post-registration requirement'], note: '' },
      { label: 'BSIS application + fingerprints', values: ['~$50 app + DOJ/FBI fees', 'BreEZe / Live Scan', 'The registration itself'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. State fees are about $50 for the application plus the DOJ and FBI fingerprint fees (confirm on the BSIS fee page).'
  },
  commonMistakes: {
    summary: 'The most common mistake on the California guard card process is completing the Power to Arrest training too early and outside the SB 652 timing window, because the training must now be completed within the six months preceding the application and an older certificate no longer counts; the second is using a provider that is not BSIS-approved, because only approved providers satisfy the law and the certificate is rejected at application. A third recurring error is skipping the background-check preparation, when the DOJ and FBI check is the real gate for many applicants and disqualifying convictions should be checked before paying for training. Candidates also routinely use the wrong Live Scan form or coding, which delays the background check by weeks when the Bureau cannot match the fingerprints to the application. Another pattern is ignoring the 32-hour skills-training deadline, when missing the six-month window can suspend the registration. Finally, some applicants lose the renewal, forgetting that the registration is valid for two years and requires 8 hours of annual continuing training to renew. These mistakes share one root: treating the process as exam prep rather than a licensing pipeline, when the background check and the paperwork, not the course exam, are what delay real applicants. The background-check errors are the costliest, because a disqualifying conviction makes the training time and fees moot, so checking the Bureau\u2019s disqualifying-conviction rules before paying is the cheapest prevention step in the process. The timing mistakes compound with the renewal: 16 hours of skills training must land within 30 days of employment and 16 more within six months, and the two-year registration requires 8 hours of annual continuing training, so a calendar that tracks both keeps the guard card active.',
    items: [
      { mistake: 'Completing the training outside the SB 652 window', fix: 'Confirm the timing rule; the Power to Arrest training must precede the application by at most six months.' },
      { mistake: 'Using a non-approved provider', fix: 'Verify the provider is BSIS-approved before paying; only approved providers count.' },
      { mistake: 'Skipping the background-check prep', fix: 'Check the disqualifying-conviction rules early and complete Live Scan with the correct form.' },
      { mistake: 'Using the wrong Live Scan coding', fix: 'Use the Security Guard Request for Live Scan form with the correct codes to avoid delays.' },
      { mistake: 'Missing the 32-hour or renewal deadlines', fix: 'Complete the 32-hour skills training within 6 months and 8 annual hours to renew the 2-year registration.' }
    ]
  },
  questionTypes: {
    summary: 'The Power to Arrest examination is the exam component of the mandatory 8-hour BSIS-approved training course, and the direct answer on format is that the questions come from the course content covering California arrest law, the legal authority and limitations of a security guard, citizen\u2019s arrest procedures, use of force, liability, and emergency response — the exact question count and format are set by the approved provider and confirmed in the course. The item style is typically multiple-choice, testing the legal rules a security guard must know on duty, and the passing standard is set by the course provider, with the certificate of completion serving as the proof the BSIS application requires. The samples below illustrate three of the content areas — arrest authority, use of force, and liability. The sample items are editor-written illustrations of the course content, not live exam items. The course content is effectively the question pool, because the examination tests the material the 8-hour course covers, so attending the course and studying its materials is what prepares a candidate; the items reward the legal rules a guard must know on duty rather than advanced legal theory. The format is set by the approved provider, not by the state, so the question count, the item style, and the passing standard vary by provider, and the certificate of completion is what the BSIS application requires rather than a passing score report. Because the exam is a course requirement rather than a competitive test, candidates who attend the course and study the materials reliably pass, and the harder gate in the process is the criminal history background check through the DOJ and the FBI, not the exam itself.',
    types: [
      { name: 'Arrest authority items', share: 'Core content', detail: 'When a guard may arrest, the citizen\u2019s arrest rules, and the limits of authority.' },
      { name: 'Use-of-force items', share: 'Core content', detail: 'Reasonable force standards and the consequences of excessive force.' },
      { name: 'Liability and procedure items', share: 'Core content', detail: 'Criminal and civil liability, emergency response, and reporting duties.' }
    ],
    samples: [
      {
        prompt: 'In California, a private security guard making a citizen\u2019s arrest for a felony must:',
        options: [
          'A. Turn the suspect over to a peace officer promptly',
          'B. Hold the suspect for as long as needed to question them',
          'C. Arrest the suspect without any need to call law enforcement',
          'D. Release the suspect if they refuse to answer questions'
        ],
        answer: 'A',
        explanation: 'A private person making a citizen\u2019s arrest for a felony must turn the suspect over to a peace officer promptly. The other options describe conduct outside a security guard\u2019s lawful authority and would create liability.'
      },
      {
        prompt: 'A security guard may use force on duty when:',
        options: [
          'A. It is reasonable and necessary to protect against imminent harm',
          'B. A supervisor orders it regardless of the situation',
          'C. The guard believes the suspect looks suspicious',
          'D. The suspect has previously committed a crime on the property'
        ],
        answer: 'A',
        explanation: 'Use of force must be reasonable and necessary to protect against imminent harm. Force cannot be justified by orders alone, suspicion, or a person\u2019s history without a present threat.'
      },
      {
        prompt: 'A security guard who detains a customer without legal justification could be liable for:',
        options: [
          'A. False imprisonment',
          'B. Breach of contract',
          'C. Defamation of the employer',
          'D. Trespass by the customer'
        ],
        answer: 'A',
        explanation: 'Detaining a person without legal justification is false imprisonment, a civil liability risk for guards. The other options do not describe the guard\u2019s unlawful detention of a customer.'
      }
    ],
    note: 'Samples are editor-written illustrations of the course content, not live exam items.'
  },
  examDay: {
    summary: 'The Power to Arrest examination happens as part of the mandatory 8-hour BSIS-approved training course, and the direct answer on what to expect is that you attend the course, study the materials covering California arrest law and guard procedures, and take the course examination at the end, with the certificate of completion serving as the proof the BSIS application requires — confirm the exam format with the provider before the class. The training itself can be completed online or in person through a BSIS-approved provider, and the course covers the legal authority and limitations of a security guard, citizen\u2019s arrest procedures, use of force, liability, and emergency response. After the course, the application pipeline runs separately: complete the Live Scan fingerprinting with the correct Security Guard Request form, submit the registration application online through BreEZe with the fee, and wait for the DOJ and FBI background check, with BSIS processing typically taking several weeks. The registration is valid for two years and requires 8 hours of annual continuing training to renew. Expect the paperwork and the background check to take longer than the course itself, so start the Live Scan early and track the application on the BSIS portal. If the registration is issued, complete the 32 hours of security-officer skills training within six months — 16 hours within 30 days of employment and the remaining 16 within six months — and keep every training certificate, because the Bureau and employers can require proof until the registration expires. Afterwards, the guard card enables employment with a licensed private patrol operator, and armed assignments require the separate BSIS firearms qualification.',
    bring: ['Government-issued photo ID', 'Course registration confirmation from the BSIS-approved provider', 'Payment method for the course fee', 'Application materials: Live Scan form and fee details'],
    leave: ['Disqualifying-conviction surprises — check the BSIS rules before paying for training', 'Outdated Power to Arrest certificates outside the SB 652 timing window', 'Unapproved-provider certificates', 'Anything on the provider\u2019s course-day prohibited list'],
    timeline: [
      { time: 'Course day', detail: 'Complete the 8-hour Power to Arrest course and take the examination' },
      { time: 'Week 1-2', detail: 'Complete Live Scan fingerprinting and submit the BreEZe application' },
      { time: 'Weeks 2-8', detail: 'Background check and BSIS processing; track the application status' },
      { time: 'After issue', detail: 'Complete the 32-hour skills training within 6 months and 8 annual hours to renew' }
    ],
    rules: ['Power to Arrest training must be from a BSIS-approved provider', 'Background check through DOJ and FBI is mandatory', 'Registration is valid 2 years; 8 annual continuing-training hours required', '32 hours of skills training required within the first 6 months'],
    afterwards: 'The guard card enables employment with a licensed private patrol operator. Complete the 32-hour skills training within 6 months, keep all certificates, and renew the 2-year registration with the annual 8-hour training.'
  }
};

export default data;
