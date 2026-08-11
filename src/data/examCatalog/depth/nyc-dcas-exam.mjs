const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Public service & civil-service testing desk',
    bio: 'We cover New York City civil-service examinations administered by DCAS. Format and fee facts come from NYC DCAS official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the NYC DCAS exam application process, format and appointment requirements against DCAS official pages; verified BLS public-sector wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'DCAS exams are the gate to NYC public employment: police officers earned a $76,290 median and firefighters $59,530 in May 2024 (BLS)',
    summary: 'The NYC Department of Citywide Administrative Services (DCAS) administers the civil-service examinations that gate employment in roughly one hundred thousand New York City positions, from police officers and firefighters to administrative staff, engineers, inspectors and maintenance workers. There is no single BLS SOC code for "city employee," because the exams cover hundreds of titles, so the salary story is told through the specific occupations and through NYC\u2019s published pay scales for each title. For the largest public-safety titles, BLS reported that police and detectives earned a median of $76,290 in May 2024 and firefighters $59,530; NYC\u2019s own salary schedules for uniformed titles are public and typically sit at or above those national medians given the city\u2019s cost of living and collective-bargaining agreements. For administrative and technical titles, the comparable national medians include office and administrative support at $46,320 and construction and building inspectors at $72,120 (May 2024). The structural point for candidates is that the DCAS exam is a competition, not a license: candidates are scored, placed on an eligible list ranked by score (with veterans\u2019 credits where applicable), and appointed in list order as vacancies occur, so the exam score directly drives the probability and speed of hiring. BLS classifies workers by job duty, not exam scores, so no civil-service grade maps to a wage; the wage belongs to the title, and the exam determines access to it. Candidates should check the specific title\u2019s salary range on the DCAS job listing, because the same exam process covers titles that pay from roughly $40,000 to well over $100,000.',
    rows: [
      { label: 'Police and detectives median, May 2024', value: '$76,290', note: 'BLS OEWS, SOC 33-3051' },
      { label: 'Firefighters median, May 2024', value: '$59,530', note: 'BLS OEWS, SOC 33-2011' },
      { label: 'Construction and building inspectors median, May 2024', value: '$72,120', note: 'BLS OEWS, SOC 47-4011' },
      { label: 'Office and administrative support median, May 2024', value: '$46,320', note: 'BLS OEWS occupational group' }
    ],
    growth: 'Local government employment and the occupations above provide the context; NYC publishes per-title salary schedules on DCAS listings.',
    source: { label: 'NYC DCAS civil service examinations', url: 'https://www.nyc.gov/site/dcas/employment/civil-service-examinations.page' }
  },
  passRate: {
    headline: 'DCAS exams are competitive ranking tests, not pass/fail: scores place candidates on eligible lists in rank order',
    summary: 'NYC DCAS does not publish pass rates for civil-service examinations because the exams are competitive ranking tests rather than pass/fail licenses. Candidates are scored (typically 0-100, sometimes with a qualifying exam first), and the score determines placement on an eligible list; hiring agencies appoint from the list in rank order as vacancies arise, with veterans\u2019 preference credits where applicable. For many titles, there is a minimum passing score (often 70) below which the candidate is not placed on the list, but the meaningful competition is the rank, because a list of hundreds of candidates is exhausted in order. Some exams have two stages: a qualifying written/performance exam and, for certain titles, an interview or physical-performance component; the physical fitness test for uniformed titles (e.g., the FDNY and NYPD physical exams) is pass/fail and separate from the written ranking. Exam announcements state the format, the scoring method, and the list duration (typically four years, sometimes extended). Candidates who score below the cut can retake the exam when it is next offered, and because many titles are tested infrequently (some every few years), missing a cycle can mean a long wait. The honest summary is that the score that matters is your rank on the eligible list relative to the number of projected vacancies, and the exam announcement\u2019s scoring rules (including veterans\u2019 credits and any residency requirements) should be read before applying. DCAS publishes exam results online and notifies candidates by mail or email.',
    source: { label: 'NYC DCAS exam process and eligible lists', url: 'https://www.nyc.gov/site/dcas/employment/exam-process.page' },
    caveat: 'No pass rate is published; exams are competitive rankings, often with a minimum passing score (commonly 70) and list-rank hiring.'
  },
  studyPlan: {
    summary: 'Preparation for NYC DCAS exams depends entirely on the title, because the exams range from general ability tests to technical trade exams. The most common DCAS written exams are multiple-choice tests of verbal ability, math, and reasoning (used for administrative and clerical titles) or technical knowledge (used for engineering, inspection, and trade titles). A realistic plan for a general administrative exam: 20-40 hours over 4-8 weeks. Week 1: obtain the exam announcement and the DCAS "Candidate Handbook" for the title, which states the subject areas and sample questions; take a timed practice test under exam conditions. Weeks 2-5: drill the announced subject areas - verbal reasoning, arithmetic and word problems, and the title-specific content (e.g., supervision for supervisory titles, construction codes for inspector titles) - using DCAS sample questions and the title\u2019s reference materials. Weeks 6-8: full timed practice exams and pacing work; the exam is scored on accuracy and completeness, and pacing matters because candidates who leave items blank forfeit potential points. For technical titles (e.g., plumbing inspector, electrical engineer), the plan is longer (60-100 hours) and content-driven, using the codes and manuals named in the announcement. For uniformed titles, add physical fitness preparation for the separate physical-performance test. Candidates should also review the announcement for veterans\u2019 credits, residency requirements and the education/experience qualifications, because an ineligible application wastes the cycle.',
    totalHours: '20-40 hours for general exams; 60-100 hours for technical titles',
    weeks: [
      { label: 'Week 1', focus: 'Announcement and baseline', tasks: ['Read the exam announcement and Candidate Handbook', 'Timed practice test'], hours: 5 },
      { label: 'Weeks 2-5', focus: 'Announced subject areas', tasks: ['Verbal, math, and title-specific drills', 'DCAS sample questions'], hours: 18 },
      { label: 'Weeks 6-8', focus: 'Timed practice exams', tasks: ['Full timed practice exams', 'Pacing and error review'], hours: 12 },
      { label: 'Uniformed titles (add)', focus: 'Physical performance', tasks: ['Train for the physical fitness test', 'Verify the announcement requirements'], hours: 'ongoing' }
    ],
    variants: [
      { label: 'Technical titles', detail: 'Engineering, inspection and trade exams require deeper content study using the codes and manuals named in the announcement.' },
      { label: 'Physical-performance titles', detail: 'Uniformed titles add a separate pass/fail physical test; train for it in parallel.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective DCAS strategies start with reading the exam announcement carefully, because the announcement defines the format, subjects, scoring and qualifications, and applying to the wrong title or missing a requirement wastes the cycle. Strategy one: verify eligibility before applying - the announcement lists education, experience, residency and license requirements, and some titles require a NYC residency or specific credentials; an ineligible application is rejected. Strategy two: practice with the DCAS Candidate Handbook and sample questions for the specific title, because DCAS formats are distinctive and the announced subject areas are the test blueprint. Strategy three: pace the written exam deliberately - answer every item, skip and return to hard items, and use the full time, because rank placement rewards accuracy and completeness. Strategy four: for technical titles, study the actual codes and manuals named in the announcement (e.g., the NYC construction codes, the electrical code), because the exam tests applied knowledge from those documents. Strategy five: for uniformed titles, train for the physical-performance test concurrently and verify the passing standards, which are published and scored pass/fail. Strategy six: track the application window - many DCAS exams have a short filing period (often two to four weeks), and missing it means waiting years for the next cycle; set reminders from the exam schedule. Finally, apply to multiple titles you qualify for, because list placement across several titles multiplies the hiring chances.',
    items: [
      { title: 'Verify eligibility first', detail: 'Education, experience, residency and license requirements are on the announcement.' },
      { title: 'Use the Candidate Handbook', detail: 'Sample questions and announced subjects are the blueprint.' },
      { title: 'Answer everything', detail: 'Rank placement rewards accuracy and completeness.' },
      { title: 'Study the named codes', detail: 'Technical titles test the codes and manuals listed in the announcement.' },
      { title: 'Track the filing window', detail: 'Many exams file for 2-4 weeks; missing one can mean years.' }
    ]
  },
  resourceComparison: {
    summary: 'The DCAS preparation market is anchored by official free materials. The NYC DCAS website publishes the exam announcement, the Candidate Handbook for each title (which includes sample questions), the exam schedule, and study materials for many titles - all free. For technical titles, the codes and manuals named in the announcement (NYC construction codes, NFPA standards, etc.) are the required study texts and can be accessed through the agency or purchased; some are free online. The DCAS "Guide to Taking a Civil Service Examination" is a free PDF covering test-taking strategy. Commercial civil-service test-prep books ($15-$40) and courses ($100-$1,000) exist and provide practice volume and general-ability drills, but for DCAS specifically the official materials are unusually complete, and the honest advice is to start free and official, add a commercial book only for extra practice on general ability, and use courses mainly for candidates who need structured accountability. Third-party "DCAS exam" sites sometimes sell old exam content that is outdated; candidates should verify currency. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DCAS Candidate Handbook', values: ['Free', 'PDF per title', 'The blueprint with sample questions'] },
      { label: 'Exam announcement and schedule', values: ['Free', 'Online', 'Eligibility, format, filing window'] },
      { label: 'Guide to Taking a Civil Service Exam', values: ['Free PDF', 'Downloadable', 'Test-taking strategy'] },
      { label: 'Title codes and manuals', values: ['Free-paid', 'Print/online', 'Technical-title content study'] },
      { label: 'Commercial prep book/course', values: ['$15-$1,000', 'Print/online', 'Practice volume and structure'] }
    ],
    footnote: 'Prices dated 2025-26; DCAS official materials are free and the accuracy standard. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common DCAS mistakes are procedural rather than academic. Mistake one: applying to a title without verifying eligibility - education, experience, residency or license requirements are on the announcement, and an ineligible application is rejected after the filing fee is paid. Mistake two: missing the filing window; many exams file for only two to four weeks and are offered every few years, so a missed window can cost years. Mistake three: skipping the Candidate Handbook and walking into an unfamiliar format; DCAS written exams have specific subject structures, and candidates who do not practice the announced subjects leave points on the table. Mistake four: leaving items blank; the exams are scored on answered items, and rank placement rewards completeness, so educated guesses beat blanks. Mistake five: ignoring the separate physical-performance test for uniformed titles; passing the written exam without qualifying on the physical test means no appointment. Mistake six: failing to verify veterans\u2019 credits and residency rules before the deadline; these affect rank placement and eligibility. Finally, candidates should not assume that a high score guarantees a fast hire - appointment depends on vacancies and list order - and should apply to multiple titles they qualify for rather than betting on one.',
    items: [
      { mistake: 'Applying without eligibility check', fix: 'Read the announcement\u2019s qualifications before filing.' },
      { mistake: 'Missing the filing window', fix: 'Track the schedule; many exams file for 2-4 weeks.' },
      { mistake: 'Skipping the Candidate Handbook', fix: 'Practice the announced subjects and sample questions.' },
      { mistake: 'Leaving items blank', fix: 'Answer everything; completeness helps rank.' },
      { mistake: 'Ignoring the physical test', fix: 'Uniformed titles require the separate pass/fail physical performance test.' }
    ]
  },
  questionTypes: {
    summary: 'DCAS written exams vary by title, but the common formats are multiple-choice tests of verbal ability (reading comprehension, vocabulary, grammar), math (arithmetic, word problems, graphs), and reasoning (logical sequence, classification), plus title-specific technical content for engineering, inspection, trade and supervisory positions. Uniformed titles add a physical-performance test scored pass/fail. Scoring is typically 0-100 with a minimum passing score (commonly 70), and candidates are ranked on an eligible list with veterans\u2019 credits applied where eligible. Samples below are editor-written illustrations of the published general-ability formats, not live exam items.',
    types: [
      { name: 'Verbal ability', share: 'Common component', detail: 'Reading comprehension, vocabulary, grammar.' },
      { name: 'Math and reasoning', share: 'Common component', detail: 'Arithmetic, word problems, sequence, classification.' },
      { name: 'Title-specific content', share: 'Technical titles', detail: 'Codes, procedures, supervision, inspection knowledge.' },
      { name: 'Physical performance', share: 'Uniformed titles', detail: 'Separate pass/fail physical fitness test.' }
    ],
    samples: [
      {
        prompt: 'A city office receives 240 applications for a position. If one-third are disqualified on eligibility, how many remain?',
        options: ['A. 80', 'B. 120', 'C. 160', 'D. 200'],
        answer: 'C',
        explanation: 'One-third of 240 is 80; subtracting the disqualified leaves 160.'
      },
      {
        prompt: 'Choose the sentence that is grammatically correct:',
        options: ['A. The report were reviewed by the committee', 'B. The report was reviewed by the committee', 'C. The report is reviewed by the committee yesterday', 'D. The report will reviewed by the committee'],
        answer: 'B',
        explanation: '"Was reviewed" correctly pairs the singular subject with the past tense; the other choices have subject-verb or tense errors.'
      },
      {
        prompt: 'Instructions state: "All permit applications must be stamped with the date received before routing to the review unit." A clerk receives an application after the unit has closed. What should the clerk do?',
        options: ['A. Route it without the stamp', 'B. Stamp the date received and route it the next business day', 'C. Return it to the applicant', 'D. Stamp tomorrow\u2019s date'],
        answer: 'B',
        explanation: 'The instruction requires stamping the date received before routing; stamping the actual date and routing on the next business day follows the procedure without falsifying the record.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published general-ability formats, not live exam items.'
  },
  examDay: {
    summary: 'NYC DCAS exams are administered at designated test sites in New York City, typically on a Saturday or weekday evening listed in the exam announcement, with computer-based testing for many titles and paper for others. Candidates must bring the admission notice and a valid government-issued photo ID; personal electronics are not permitted in the testing room. Arrive 30 minutes early, because late arrivals may not be admitted. The written exam typically runs 2-4 hours depending on the title, with instructions and a brief before testing. For uniformed titles, the physical-performance test is scheduled separately and requires the announced dress and identification. Exam results are posted online and candidates are placed on the eligible list in score order with veterans\u2019 credits applied; the list duration is stated in the announcement (typically four years). Afterwards, monitor the list status and respond to canvass letters from hiring agencies, because appointment requires an active response to each canvass within the stated deadline, and missing a canvass can remove the candidate from consideration for that round.',
    bring: ['Admission notice', 'Valid government-issued photo ID', 'Two sharpened pencils (paper exams)', 'Physical test: announced dress and ID (uniformed titles)'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Unauthorized reference materials for technical exams'],
    timeline: [
      { time: 'Filing period', detail: 'File within the announced window (often 2-4 weeks).' },
      { time: 'Exam day', detail: 'Arrive 30 minutes early; written exam runs 2-4 hours.' },
      { time: 'Results', detail: 'Scores posted online; eligible list created in rank order.' },
      { time: 'List period', detail: 'Typically 4 years; respond to each canvass within the deadline.' },
      { time: 'Appointment', detail: 'Agencies appoint in list order as vacancies arise.' }
    ],
    rules: [
      'Admission notice and photo ID are required; electronics are prohibited.',
      'Late arrivals may not be admitted.',
      'Physical-performance tests are separate and scored pass/fail.',
      'Veterans\u2019 credits and residency rules are stated in the announcement.'
    ],
    afterwards: 'Check your rank on the eligible list, respond to every canvass letter within the deadline, and apply to other titles you qualify for to multiply hiring chances.'
  }
};

export default data;
