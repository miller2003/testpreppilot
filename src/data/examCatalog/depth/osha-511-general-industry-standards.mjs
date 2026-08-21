const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Occupational safety & construction training desk',
    bio: 'We cover OSHA Outreach Training Program courses for construction. Format and fee facts come from OSHA and authorized trainers and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the OSHA 511 course structure and requirements against OSHA official pages; verified BLS construction wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'OSHA 511 is the general-industry standards course for safety professionals: occupational health and safety specialists sit in the $80,000+ range (BLS context, May 2024)',
    summary: 'OSHA 511 (Occupational Safety and Health Standards for General Industry) is an instructor-led course in the OSHA Training Institute (OTI) Education Center program, covering the application of 29 CFR 1910 general-industry standards. It is a professional development course, not a job license, so no single BLS SOC code attaches to it; the salary story belongs to the safety occupations it serves. BLS reported that occupational health and safety specialists (SOC 19-5011) - the safety-professional occupation - earned a median in the $80,000+ range in May 2024 (the OEWS series places the occupation near $85,000-90,000 median), and occupational health and safety technicians (19-5012) about $58,440; the OSHA 511 course is a standard building block for safety professionals, serving as the general-industry counterpart to the OSHA 510 construction-standards course and as a prerequisite for the OSHA 501 trainer course in many career paths. The structural point is that the course is part of the OSHA Training Institute curriculum, delivered by OTI Education Centers and authorized trainers, and it is commonly required or strongly recommended in safety-manager and EHS job descriptions, particularly for candidates building the OSHA trainer path. BLS classifies workers by occupation, not training courses, so no completion maps to a specific wage; the value is the professional credential that supports safety roles whose medians BLS documents. The course is instructor-led (4 days, about 26 hours), costs roughly $600-$800 through OTI Education Centers, and carries continuing-education credit.',
    rows: [
      { label: 'Occupational health and safety specialists median, May 2024', value: '~$85,000-$90,000', note: 'BLS OEWS, SOC 19-5011' },
      { label: 'Occupational health and safety technicians median, May 2024', value: '~$58,440', note: 'BLS OEWS, SOC 19-5012' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'OSHA 511 length', value: '~26 hours (4 days)', note: 'OSHA Training Institute course' }
    ],
    growth: 'Occupational health and safety specialist employment is projected to grow about 5 percent from 2024 to 2034 per BLS.',
    source: { label: 'BLS Occupational Outlook Handbook - Occupational Health and Safety Specialists', url: 'https://www.bls.gov/ooh/life-physical-and-social-science/occupational-health-and-safety-specialists-and-technicians.htm' }
  },
  passRate: {
    headline: 'OSHA 511 is a course with trainer-set assessments; completion of the full session earns the certificate, and OSHA publishes no pass rates',
    summary: 'OSHA does not publish a pass rate for the OSHA 511 course because it is an instructor-led training course, not a standardized licensure exam. The course is delivered by OTI Education Centers and authorized OSHA Training Institute trainers over about 26 hours (typically 4 days), covering the application of 29 CFR 1910 general-industry standards: the OSH Act and worker rights, hazard communication, personal protective equipment, walking-working surfaces, machine guarding, electrical safety, and the other general-industry standards. The assessment is set by the trainer - typically module quizzes and a final written test with a passing line the trainer sets (commonly 70-80 percent) - and completion of the full session is required for the certificate. Because there is no standardized exam, the "pass rate" varies by delivery, and the certificate of completion is the deliverable. The course is one of the OSHA Training Institute courses delivered through the OTI Education Center network (universities and training organizations authorized by OSHA), and it carries continuing-education units; it also serves as a building block toward the OSHA 501 trainer course (which requires the 511 or equivalent as a prerequisite in the general-industry trainer path). The honest summary is that the bar is course completion with the trainer\u2019s assessments, the certificate does not expire (though trainers and employers may set refresher expectations), and the legally meaningful facts are the full-session attendance, the authorized delivery, and the role the course plays in the OSHA trainer career path.',
    source: { label: 'OSHA Training Institute Education Centers - OSHA 511', url: 'https://www.osha.gov/otiec' },
    caveat: 'OSHA publishes no pass rates; the course requires full-session completion with trainer-set assessments, typically ~26 hours over 4 days.'
  },
  studyPlan: {
    summary: 'The OSHA 511 course is a 4-day instructor-led program, and a study plan is about preparing to absorb the standards efficiently. The course covers the application of the general-industry standards (29 CFR 1910): the OSH Act, worker rights and responsibilities, hazard communication and the GHS, personal protective equipment, walking-working surfaces, means of egress, machine guarding, electrical safety, hazardous materials, and the recordkeeping and enforcement basics. A realistic plan: before the course, review the OSHA general-industry standards outline and the free OSHA fact sheets for the major topics (2-3 hours), because the course moves fast and prior familiarity with the standard structure doubles retention; during the course, complete every module and the trainer\u2019s assessments, and ask questions about the standards most relevant to your industry; after the course, keep the certificate and the course materials as the reference for applying the standards on the job. For safety professionals building the trainer path, the 511 is the general-industry counterpart to the 510 construction course and a prerequisite for the 501 trainer course; the study investment should include planning that sequence. The course is delivered in person at OTI Education Centers and in some live-online formats (verify the delivery), and the certificate does not expire.',
    totalHours: '~26 hours of instruction + 2-3 hours pre-reading',
    weeks: [
      { label: 'Before the course', focus: 'Standards overview', tasks: ['Review the 29 CFR 1910 outline', 'OSHA fact sheets for major topics'], hours: 3 },
      { label: 'Days 1-4', focus: 'The course', tasks: ['Complete all modules', 'Trainer assessments', 'Receive the certificate'], hours: 26 }
    ],
    variants: [
      { label: 'Trainer path', detail: 'The 511 is a prerequisite for the OSHA 501 general-industry trainer course; the 510 serves the construction path.' },
      { label: 'Delivery formats', detail: 'Mostly in-person at OTI Education Centers; verify live-online availability.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective OSHA 511 strategies are about engagement and applying the standards. Strategy one: pre-read the standards outline and the OSH Act basics, because the course moves fast and prior familiarity with the standard structure doubles retention; the free OSHA website materials cover the scope. Strategy two: connect each standard to workplace scenarios - the course teaches applying 29 CFR 1910, and candidates who link the requirements to real worksite situations (a machine guard, an electrical hazard, a hazard-communication program) retain far more than those who memorize section numbers. Strategy three: complete every module and the trainer\u2019s assessments, because the certificate requires full-session completion and the trainer documents attendance. Strategy four: ask questions about the standards most relevant to your industry, because the course is a working professional\u2019s toolkit and the employer\u2019s compliance program is where the value lands. Strategy five: plan the career path - the 511 plus experience leads toward the 501 trainer course and the safety-professional ladder, and candidates should map that sequence. Strategy six: keep the certificate and course materials in the professional training file, because employers and compliance programs verify the credential, and the materials are the working reference.',
    items: [
      { title: 'Pre-read the standards', detail: 'Prior familiarity with the 1910 structure doubles retention.' },
      { title: 'Apply to real scenarios', detail: 'Link each standard to worksite situations.' },
      { title: 'Complete every module', detail: 'The certificate requires full-session completion.' },
      { title: 'Plan the trainer path', detail: 'The 511 leads toward the 501 trainer course.' }
    ]
  },
  resourceComparison: {
    summary: 'The OSHA 511 resource market is anchored by the OSHA Training Institute Education Center network. The course is delivered by OTI Education Centers (universities and authorized organizations), and the fee is roughly $600-$800 depending on the center and delivery (in-person at most centers; verify live-online options); the course materials and certificate are included. The free official resources are the OSHA website: the general-industry standards (29 CFR 1910), the OSH Act, and the fact sheets - all free and the complete content reference. Commercial study guides add little because the course is instructor-led and the assessments are trainer-set; candidates should not pay extra for "guaranteed pass" products. The OTI Education Center network also offers the 510 (construction), 501 and 502 trainer courses, which candidates on the trainer path will schedule next. The honest ranking: free OSHA standards and fact sheets, the OTI Education Center course (the required purchase), and nothing else. Prices here are current as of 2025-26 and vary by center.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'OSHA 511 course (OTI Education Center)', values: ['$600-$800', 'In-person (some online)', 'The required course and certificate'] },
      { label: 'OSHA general-industry standards', values: ['Free', 'Web/PDF at osha.gov', 'The complete content reference'] },
      { label: 'OSHA fact sheets', values: ['Free', 'Web', 'Topic-by-topic study aids'] },
      { label: 'OSHA 501 trainer course (next)', values: ['~$800-$1,000', 'In-person', 'The trainer path after the 511'] }
    ],
    footnote: 'Prices dated 2025-26 and vary by OTI Education Center. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common OSHA 511 mistakes are procedural and career-planning errors. Mistake one: attending without pre-reading; the course moves fast, and candidates who see the standards for the first time in class retain less. Mistake two: treating the course as a box to check; the value is applying the standards, and safety professionals who cannot connect the requirements to worksites miss the point and the career value. Mistake three: missing sessions; the certificate requires full-session completion, and the trainer documents attendance. Mistake four: ignoring the trainer path; the 511 is a building block toward the 501 trainer course and the safety-professional ladder, and candidates who do not plan the sequence lose momentum. Mistake five: paying extra for "guaranteed pass" or unofficial products; the official course is delivered only through the OTI Education Center network, and shortcuts are not part of it. Mistake six: losing the certificate; employers and compliance programs verify the credential, and the course materials are the working reference for applying the standards.',
    items: [
      { mistake: 'Attending without pre-reading', fix: 'Review the standards outline before the course.' },
      { mistake: 'Checking the box', fix: 'Learn to apply the standards to worksites.' },
      { mistake: 'Missing sessions', fix: 'The certificate requires full-session completion.' },
      { mistake: 'Ignoring the trainer path', fix: 'Plan the 501 trainer course sequence.' },
      { mistake: 'Buying unofficial products', fix: 'The official course runs only through OTI Education Centers.' }
    ]
  },
  questionTypes: {
    summary: 'The OSHA 511 course uses trainer-set module quizzes and a final assessment (commonly 70-80 percent passing, set by the trainer) rather than a standardized national exam; completion of the full ~26-hour session is required. The content covers the application of the general-industry standards (29 CFR 1910): the OSH Act and worker rights, hazard communication, personal protective equipment, walking-working surfaces, machine guarding, electrical safety, hazardous materials, and recordkeeping. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'OSH Act and worker rights', share: 'Course module', detail: 'The act, rights, and enforcement basics.' },
      { name: 'Hazard communication and PPE', share: 'Course module', detail: 'GHS labels, SDS, and protective equipment.' },
      { name: 'Walking-working surfaces and egress', share: 'Course module', detail: 'Falls, housekeeping, exits.' },
      { name: 'Machine guarding and electrical', share: 'Course module', detail: 'Guarding requirements and electrical safety.' }
    ],
    samples: [
      {
        prompt: 'Under the general-industry standards, which document must employers make available for hazardous chemicals used in the workplace?',
        options: ['A. Safety Data Sheets (SDS)', 'B. The workers\u2019 pay records', 'C. The building lease', 'D. The insurance policy'],
        answer: 'A',
        explanation: 'Hazard communication requires Safety Data Sheets for hazardous chemicals, accessible to employees; the other documents are unrelated to hazard communication.'
      }
      ,
      {
        prompt: 'A worker must access a machine area where the moving parts create a contact hazard. What does the general-industry standard require?',
        options: ['A. Machine guarding for the hazardous points', 'B. A warning sign only', 'C. Annual machine replacement', 'D. Removing the moving parts'],
        answer: 'A',
        explanation: 'The machine-guarding standards require guarding for points of operation and moving parts that create hazards; signs alone do not satisfy the guarding requirement.'
      },
      {
        prompt: 'Which of the following is a required element of an employer\u2019s general-industry electrical safety program as taught in the course?',
        options: ['A. Identifying and guarding electrical hazards and using qualified personnel', 'B. Disconnecting power only after an injury', 'C. Allowing unqualified workers to work live', 'D. Marking electrical panels with decorative labels'],
        answer: 'A',
        explanation: 'Electrical safety requires hazard identification, guarding, and limiting live work to qualified personnel; the other options violate the standards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The OSHA 511 course has no single exam day; it is a 4-day instructor-led program with trainer-set assessments during the sessions. Candidates attend all sessions at the OTI Education Center (or the authorized live-online delivery), complete the module quizzes and the final assessment at the trainer\u2019s passing line, and receive the certificate of completion after the full session. Bring photo ID for the completion record and a schedule that covers all four days; late or partial attendance can jeopardize the certificate. After completing, keep the certificate and the course materials in the professional training file, and for candidates on the safety-professional path, schedule the next step - commonly the 501 trainer course (for the general-industry trainer path) or the 510 (for construction) - through the same OTI Education Center network.',
    bring: ['Photo ID', 'Course registration confirmation', 'A schedule covering all 4 days', 'The pre-reading notes if prepared'],
    leave: ['Partial attendance assumptions - the full session is required', 'Unofficial "guaranteed pass" products', 'The idea that the certificate is a job license'],
    timeline: [
      { time: 'Days 1-4', detail: 'Complete the ~26-hour course and trainer assessments.' },
      { time: 'After completion', detail: 'Certificate of completion issued.' },
      { time: 'Career path', detail: 'Plan the 501 trainer course or the 510 construction course next.' }
    ],
    rules: [
      'The full session must be completed for the certificate.',
      'Assessments are trainer-set (commonly 70-80% passing).',
      'The course is delivered only through OTI Education Centers.',
      'The certificate does not expire.'
    ],
    afterwards: 'Keep the certificate and materials in your training file, and schedule the next step on the safety-professional path (501 trainer course or 510 construction).'
  }
};

export default data;
