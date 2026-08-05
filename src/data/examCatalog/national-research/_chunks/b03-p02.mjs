export const programs = [
  {
    id: 'pearson',
    body: 'Pearson',
    bodyUrl: 'https://www.pearsonassessments.com',
    about: 'Pearson is a global learning company that publishes many of the individually and group-administered ability, achievement and English-proficiency assessments used in US school admissions, gifted screening and university placement. Its clinical and educational instruments are sold to qualified professionals and schools rather than booked directly by families, while its Pearson Test of English (PTE) family is scheduled by individual test takers worldwide.',
    registrationSteps: [
      { title: 'Confirm the assessment your school requires', description: 'Ask the admissions or gifted office which Pearson instrument it accepts, since ability and achievement tests differ by age and purpose.', duration: 'per school' },
      { title: 'Locate a qualified administrator', description: 'For KBIT-2, WISC-V, WPPSI-IV and similar tools, book a licensed psychologist or school psychologist; schools usually handle NNAT3, OLSAT and Stanford 10 directly.', duration: 'varies' },
      { title: 'Schedule the administration', description: 'Book a testing appointment or wait for the school testing window; PTE Academic is booked through the test taker Pearson account.', duration: 'varies' },
      { title: 'Prepare as advised', description: 'Ability tests need little study; PTE Academic benefits from the official scored practice test and sample questions.', duration: 'varies' },
      { title: 'Receive the report', description: 'The examiner or school issues a written report with standard scores and percentiles that you submit to the admissions office.', duration: 'after testing' }
    ],
    proctoring: 'Ability and achievement instruments are administered by qualified examiners or school staff under standard conditions; PTE Academic is taken at a Pearson VUE centre or at home with online proctoring.',
    retakePolicy: 'Most ability and achievement tests are given once per admissions cycle and retaken only if the school permits a later administration. PTE Academic may be retaken with no fixed lifetime limit, subject to a short waiting period between attempts.',
    recertification: 'These are diagnostic or admissions assessments rather than certifications, so there is no recertification; scores reflect performance on the test date.',
    scoreReporting: 'Scores are reported as standard scores, indexes or scales with age- or grade-based percentiles depending on the instrument; PTE Academic uses a 10 to 90 overall scale.',
    providersNote: 'Preparation is usually through the school or a licensed psychologist; for PTE Academic use official Pearson practice and the free scored mock test rather than unlicensed third-party guarantees.',
    comparison: {
      title: 'Selected Pearson admissions and ability tests',
      columns: ['Test', 'Used for', 'Length', 'Score'],
      rows: [
        { label: 'KBIT-2', values: ['Brief ability screen', '15 to 30 min', 'Standard score 100'] },
        { label: 'WISC-V', values: ['Full IQ evaluation', '45 to 65 min', 'FSIQ 100'] },
        { label: 'PTE Academic', values: ['English proficiency', '2 hours', '10 to 90'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I book a Pearson ability test directly?', a: 'The publisher restricts ability and achievement instruments to qualified purchasers, so families usually arrange administration through a school or licensed psychologist rather than booking on their own.' },
      { q: 'Is PTE Academic the same as the school ability tests?', a: 'No. PTE Academic is an English-proficiency exam that any adult can book individually, while KBIT-2, WISC-V and similar tools are clinically administered assessments.' }
    ],
    sourceUrl: 'https://www.pearsonassessments.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'enrollment-management-association',
    body: 'Enrollment Management Association',
    bodyUrl: 'https://www.ssat.org',
    about: 'The Enrollment Management Association (EMA) is a nonprofit that runs the SSAT and the Character Skills Snapshot for independent and private school admission in the United States and internationally. Its assessments give admission teams a standardised academic and character read on applicants from elementary through upper grade levels.',
    registrationSteps: [
      { title: 'Create an SSAT account', description: 'Parents open a free SSAT account and add the student, using a name that matches the test-day identification.', duration: '10 minutes' },
      { title: 'Choose a level and date', description: 'Select Elementary, Middle or Upper Level and a Standard test date at a school or Prometric centre, or a Flex date by arrangement.', duration: '15 minutes' },
      { title: 'Pay the registration fee', description: 'Fees vary by level, location and delivery; a fee waiver is available for eligible families through the member school.', duration: '5 minutes' },
      { title: 'Add the Character Skills Snapshot', description: 'Opt in to the Snapshot so the student completes the online questionnaire alongside the SSAT if the schools request it.', duration: '5 minutes' },
      { title: 'Test and send scores', description: 'Sit the exam and route score reports to chosen schools; Snapshot results post to the same account.', duration: 'test day' }
    ],
    proctoring: 'Standard SSAT administrations are supervised at member schools and authorised Prometric centres; at-home testing uses online proctoring. The Character Skills Snapshot is an unsupervised online questionnaire.',
    retakePolicy: 'Middle and Upper Level may be taken up to six Standard administrations plus one Flex test per testing year; Elementary Level is limited to three administrations per year. The Snapshot may be taken once per testing year.',
    recertification: 'SSAT scores are used for the admission cycle and are not renewed; the Snapshot is a single annual read of student preferences and attitudes.',
    scoreReporting: 'Middle Level scales 440 to 710 per section and 1320 to 2130 total; Upper Level scales 500 to 800 per section and 1500 to 2400 total, with percentiles based on the past three admission-year cohorts.',
    providersNote: 'Use the official SSAT practice materials and the EMA character resources; many prep publishers offer courses, but the test itself is straightforward reasoning and reading.',
    comparison: {
      title: 'SSAT levels compared',
      columns: ['Level', 'Grades', 'Section scale', 'Total scale'],
      rows: [
        { label: 'Elementary', values: ['3 to 4', 'No scaled total', 'Raw only'] },
        { label: 'Middle', values: ['5 to 7', '440 to 710', '1320 to 2130'] },
        { label: 'Upper', values: ['8 to 11', '500 to 800', '1500 to 2400'] }
      ]
    },
    orgFaqs: [
      { q: 'How many times can my child take the SSAT?', a: 'Middle and Upper Level students may sit up to six Standard and one Flex test per year; Elementary Level students may take the test up to three times per year.' },
      { q: 'What is the Character Skills Snapshot?', a: 'It is an online questionnaire that complements the SSAT by reporting a student preferences, attitudes and beliefs to participating admission teams; it is not a right-or-wrong test.' }
    ],
    sourceUrl: 'https://www.ssat.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'educational-records-bureau',
    body: 'Educational Records Bureau',
    bodyUrl: 'https://www.erblearn.org',
    about: 'Educational Records Bureau (ERB) is a nonprofit member organisation that develops the Independent School Entrance Exam (ISEE) and related assessment tools for independent school admission in the United States and abroad. The ISEE gives private schools a standardised measure of verbal, quantitative, reading and mathematics reasoning across Primary through Upper levels.',
    registrationSteps: [
      { title: 'Create an ERB account', description: 'A parent or guardian opens a free ERB account and adds the student with a name matching the test-day ID.', duration: '10 minutes' },
      { title: 'Select the ISEE level', description: 'Choose Primary, Lower, Middle or Upper based on the grade the student is entering; the level sets the content and length.', duration: '10 minutes' },
      { title: 'Pick a test location or at-home', description: 'Book a school, Prometric or ERB at-home administration; some schools also host their own test dates.', duration: '15 minutes' },
      { title: 'Pay the registration fee', description: 'Fees vary by level and delivery; a limited number of fee waivers are available through member schools.', duration: '5 minutes' },
      { title: 'Test and route scores', description: 'Sit the exam and send official reports to up to the included number of schools, with extras available for a fee.', duration: 'test day' }
    ],
    proctoring: 'ISEE is administered at member schools, Prometric centres and via ERB at-home online proctoring. Primary Level is delivered on a computer at a test site or at home with parental supervision.',
    retakePolicy: 'A student may take the ISEE once per admission season (Fall, Winter, Spring) for a maximum of three times in a 12-month period; retesting more often is not permitted.',
    recertification: 'ISEE scores are used for the admission cycle and are not renewed; there is no certification attached to the exam.',
    scoreReporting: 'All levels report scaled scores of 760 to 940 per section with stanines of 1 to 9 and percentiles based on a rolling norms group; the essay is sent unscored to schools.',
    providersNote: 'Use the official ERB What to Expect guides and practice questions; the format rewards steady reasoning more than memorised content.',
    comparison: {
      title: 'ISEE levels compared',
      columns: ['Level', 'Grades', 'Length', 'Score'],
      rows: [
        { label: 'Primary', values: ['2 to 4', 'About 1 hour', 'Scaled 760 to 940'] },
        { label: 'Lower', values: ['4 to 5', '2h 20m', 'Scaled 760 to 940'] },
        { label: 'Middle/Upper', values: ['6 to 11', '2h 40m', 'Scaled 760 to 940'] }
      ]
    },
    orgFaqs: [
      { q: 'How many times can my child take the ISEE?', a: 'A student may test once per admission season, up to three times in a year, which is stricter than the SSAT rule; plan the attempt carefully.' },
      { q: 'Is there a guessing penalty on the ISEE?', a: 'No. The ISEE does not penalise wrong answers, so students should answer every question even when unsure.' }
    ],
    sourceUrl: 'https://www.erblearn.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'us-department-of-defense',
    body: 'United States Department of Defense',
    bodyUrl: 'https://www.officialasvab.com',
    about: 'The United States Department of Defense administers the ASVAB family of aptitude assessments used for military enlistment eligibility, career matching and the AFQT eligibility score. Through the ASVAB Career Exploration Program it also provides a school-based version with interest inventories for high school and postsecondary students.',
    registrationSteps: [
      { title: 'Talk to a recruiter or counselor', description: 'For enlistment, contact a branch recruiter to schedule the ASVAB at a MEPS or MET site; for the CEP, ask your school counselor.', duration: 'varies' },
      { title: 'Take the test', description: 'Sit the paper or computer-adaptive ASVAB under proctoring; the PiCAT version is taken unproctored at home first, then verified at MEPS.', duration: 'about 3 hours' },
      { title: 'Review scores and line scores', description: 'Receive subtest scores, composite line scores and the AFQT percentile that determine branch eligibility and job qualification.', duration: 'same day or after' },
      { title: 'Use results for enlistment or careers', description: 'A recruiter matches your line scores to military occupations; CEP users explore civilian careers with the same data.', duration: 'ongoing' }
    ],
    proctoring: 'The enlistment ASVAB is administered at Military Entrance Processing Stations and mobile test sites under strict control; the CEP is given at schools. The PiCAT is unproctored at home but must be confirmed by a short verification test at MEPS.',
    retakePolicy: 'After a first attempt, the ASVAB may be retaken after 30 days, then 30 days again, and thereafter every six months. PiCAT verification failure triggers a full ASVAB instead.',
    recertification: 'Enlistment scores are valid for two years; there is no renewal, but a new test updates eligibility and line scores.',
    scoreReporting: 'The AFQT is a percentile of 1 to 99 derived from word knowledge, paragraph comprehension, arithmetic reasoning and mathematics knowledge; the ten subtests also feed composite line scores for job qualification.',
    providersNote: 'Use the official ASVAB practice and the recruiter-provided study guide; the test is aptitude-based, so broad review of math and vocabulary helps most.',
    comparison: {
      title: 'ASVAB family compared',
      columns: ['Version', 'For', 'Where', 'Score'],
      rows: [
        { label: 'ASVAB (enlistment)', values: ['Military entry', 'MEPS or MET', 'AFQT percentile'] },
        { label: 'ASVAB CEP', values: ['School careers', 'High schools', 'Same scales'] },
        { label: 'PiCAT', values: ['At-home entry', 'Home plus MEPS', 'AFQT percentile'] }
      ]
    },
    orgFaqs: [
      { q: 'Does the ASVAB cost money?', a: 'No. The enlistment ASVAB and the school-based Career Exploration Program are free to test takers; only a retest at MEPS carries no fee either.' },
      { q: 'What is the AFQT?', a: 'The AFQT is not a separate test but a percentile score built from four ASVAB subtests; it is the gate for enlistment eligibility in every branch.' }
    ],
    sourceUrl: 'https://www.officialasvab.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'riverside-insights',
    body: 'Riverside Insights',
    bodyUrl: 'https://www.riversideinsights.com',
    about: 'Riverside Insights publishes the Cognitive Abilities Test (CogAT), the Iowa Assessments and the Stanford-Binet Intelligence Scales, Fifth Edition, used by US schools and homeschool families for gifted identification, achievement documentation and ability evaluation. These instruments are sold to qualified educators and psychologists rather than booked directly by families.',
    registrationSteps: [
      { title: 'Confirm the required instrument', description: 'Ask the school or program whether it wants CogAT, Iowa Assessments or a Stanford-Binet evaluation, since each serves a different purpose.', duration: 'per school' },
      { title: 'Arrange administration', description: 'Schools administer CogAT and Iowa Assessments in group sittings; Stanford-Binet requires a licensed psychologist for individual administration.', duration: 'varies' },
      { title: 'Prepare the student', description: 'These are ability and achievement measures, so normal rest and routine matter more than cramming; review sample item types if provided.', duration: 'varies' },
      { title: 'Receive the report', description: 'The school or psychologist issues standard scores, age or grade percentiles and, for Stanford-Binet, a full profile.', duration: 'after testing' }
    ],
    proctoring: 'CogAT and Iowa Assessments are group-administered by school staff under standard conditions; the Stanford-Binet is individually administered by a qualified examiner.',
    retakePolicy: 'Retake rules follow each school or program; ability and achievement tests are typically given once per admissions or identification cycle rather than repeatedly.',
    recertification: 'These are diagnostic assessments, not certifications, so there is no recertification requirement.',
    scoreReporting: 'CogAT and Iowa report standard scores and percentiles; the Stanford-Binet 5 reports a Full Scale IQ with a mean of 100 and standard deviation of 15.',
    providersNote: 'Preparation is through the school or a licensed psychologist; Riverside provides educator guides and sample items rather than public self-study courses.',
    comparison: {
      title: 'Riverside admissions and ability tests',
      columns: ['Test', 'Measures', 'Admin', 'Score'],
      rows: [
        { label: 'CogAT', values: ['Reasoning abilities', 'Group', 'Standard score'] },
        { label: 'Iowa Assessments', values: ['Achievement', 'Group', 'Percentile'] },
        { label: 'Stanford-Binet 5', values: ['Full intelligence', 'Individual', 'FSIQ 100'] }
      ]
    },
    orgFaqs: [
      { q: 'Can I book these tests on my own?', a: 'CogAT and Iowa Assessments are arranged through a school; the Stanford-Binet 5 is booked with a licensed psychologist because it requires individual administration.' },
      { q: 'Why pair CogAT with Iowa?', a: 'Many gifted programs use CogAT for reasoning ability and Iowa Assessments for achievement to separate innate aptitude from learned content.' }
    ],
    sourceUrl: 'https://www.riversideinsights.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'cambridge-assessment',
    body: 'Cambridge University Press and Assessment',
    bodyUrl: 'https://www.cambridgeenglish.org',
    about: 'Cambridge University Press and Assessment runs the Cambridge English Qualifications, including B2 First, C1 Advanced and C2 Proficiency, which certify English ability at CEFR levels B2, C1 and C2. The exams are delivered through a global network of authorised centres and are accepted by many US universities and employers as proof of academic English readiness.',
    registrationSteps: [
      { title: 'Choose your level', description: 'Select B2 First, C1 Advanced or C2 Proficiency based on your current English level and the requirement of the institution you are targeting.', duration: 'self-check' },
      { title: 'Find an authorised centre', description: 'Register through a local Cambridge English centre; there is no direct individual booking with the publisher.', duration: '15 minutes' },
      { title: 'Pay the exam fee', description: 'Centres set local fees, generally ranging from about 170 to 280 US dollars depending on level and country.', duration: '5 minutes' },
      { title: 'Prepare with official materials', description: 'Use the free Cambridge sample papers, the exam preparation resources and the practice tests for your level.', duration: '4 to 12 weeks' },
      { title: 'Test and await results', description: 'Sit the paper-based or computer-based exam; results and a certificate follow several weeks later.', duration: 'test day' }
    ],
    proctoring: 'Cambridge English exams are administered at authorised centres under standard exam conditions, with the speaking test conducted by a trained examiner, sometimes paired with another candidate.',
    retakePolicy: 'There is no limit on retakes; candidates may register for the next available session at a centre. Because certificates do not expire, many candidates simply hold their best result.',
    recertification: 'Cambridge English certificates are valid for life and do not require renewal, though some institutions set their own recency preference.',
    scoreReporting: 'All levels report on the Cambridge English Scale, with B2 First at 160 to 179, C1 Advanced at 180 to 210 and C2 Proficiency at 200 to 230, plus an overall CEFR level.',
    providersNote: 'Use the official Cambridge sample papers and preparation; the exams reward real communication, so broad reading and writing practice matters more than drill.',
    comparison: {
      title: 'Cambridge English levels compared',
      columns: ['Qualification', 'CEFR', 'Scale', 'Length'],
      rows: [
        { label: 'B2 First', values: ['B2', '160 to 179', 'About 3.5 hours'] },
        { label: 'C1 Advanced', values: ['C1', '180 to 210', 'About 4 hours'] },
        { label: 'C2 Proficiency', values: ['C2', '200 to 230', 'About 4 hours'] }
      ]
    },
    orgFaqs: [
      { q: 'Do Cambridge certificates expire?', a: 'No. Cambridge English certificates are valid for life and do not need renewal, though a specific university may prefer a recent score.' },
      { q: 'Are these accepted by US universities?', a: 'Many US institutions accept B2 First, C1 Advanced and C2 Proficiency for English proficiency, but each school sets its own minimum, so confirm before booking.' }
    ],
    sourceUrl: 'https://www.cambridgeenglish.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'acuity-insights',
    body: 'Acuity Insights',
    bodyUrl: 'https://www.acuityinsights.app',
    about: 'Acuity Insights (formerly Altus) runs the Altus Suite used by health-professions programs in the United States and Canada. It includes Casper, an open-response situational judgment test, and Duet, a short values-alignment assessment that matches applicant priorities with program characteristics.',
    registrationSteps: [
      { title: 'Confirm the required assessments', description: 'Check each program page to see whether it requires Casper, Duet or both, and on which test dates.', duration: 'per program' },
      { title: 'Create an Acuity account', description: 'Register at acuityinsights.app and verify your identity before booking a distribution window.', duration: '10 minutes' },
      { title: 'Book Casper and Duet', description: 'Reserve a Casper test date and add Duet for the specific programs; fees depend on the number of schools receiving scores.', duration: '15 minutes' },
      { title: 'Complete the assessments', description: 'Take Casper on the scheduled date and finish Duet online; each has a single attempt per admission cycle.', duration: 'test day' },
      { title: 'Scores sent to programs', description: 'Results are released to the programs you selected; you cannot see your own Casper quartile.', duration: 'after grading' }
    ],
    proctoring: 'Casper is taken online with identity verification and automated proctoring, including webcam and microphone checks. Duet is an unproctored values exercise completed at your convenience.',
    retakePolicy: 'Casper and Duet each allow one attempt per admission cycle; you generally cannot retake either for the same cycle even if you are unhappy with the result.',
    recertification: 'Scores are used for the admission cycle and are not renewed; the assessments are point-in-time measures for that year.',
    scoreReporting: 'Casper reports a quartile of 1 to 4 (Q1 lowest to Q4 highest) based on a standardised score. Duet returns a compatibility view to the program rather than a public number to the applicant.',
    providersNote: 'Practice with the free Acuity sample scenarios and the Casper preview; the test measures judgment and communication, not academic knowledge.',
    comparison: {
      title: 'Altus Suite components',
      columns: ['Assessment', 'Measures', 'Length', 'Result'],
      rows: [
        { label: 'Casper', values: ['Situational judgment', '60 to 90 min', 'Quartile 1 to 4'] },
        { label: 'Duet', values: ['Values alignment', '15 to 20 min', 'Match view'] }
      ]
    },
    orgFaqs: [
      { q: 'How much does Casper cost?', a: 'A base US fee is about 85 dollars plus roughly 18 dollars for each additional school receiving the score; Duet is included for programs that require it.' },
      { q: 'Can I see my Casper score?', a: 'No. Only the programs receive your Casper quartile; applicants receive confirmation that the score was sent but not the result itself.' }
    ],
    sourceUrl: 'https://www.acuityinsights.app',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'american-dental-association',
    body: 'American Dental Association',
    bodyUrl: 'https://www.ada.org',
    about: 'The American Dental Association (ADA) administers the Dental Admission Test (DAT) and the Optometry Admission Test (OAT) through its Department of Testing Services. Both are computer-based admissions exams required by the large majority of US dental and optometry schools and taken at Prometric centres.',
    registrationSteps: [
      { title: 'Create a DENTPIN', description: 'Apply for a Dental Admission Test Program Identifier Number (DENTPIN) through the ADA before scheduling either exam.', duration: '10 minutes' },
      { title: 'Schedule the exam', description: 'Book a Prometric centre date for the DAT or OAT after receiving eligibility; OAT candidates may schedule once the DENTPIN is active.', duration: '15 minutes' },
      { title: 'Pay the exam fee', description: 'The DAT fee is 580 dollars for 2026 and the OAT fee is 520 dollars; both include official score reports to the schools you select.', duration: '5 minutes' },
      { title: 'Prepare with official guides', description: 'Use the ADA candidate guides and practice tests that describe the section timing and content for each exam.', duration: '2 to 4 months' },
      { title: 'Test and receive scores', description: 'Sit the exam at Prometric; unofficial DAT scores print at the centre and official scores post soon after.', duration: 'test day' }
    ],
    proctoring: 'Both exams are delivered at Prometric test centres under standard security, with photo ID and biometric check-in. There is no at-home option.',
    retakePolicy: 'Each exam requires a 60-day wait between attempts and a maximum of four attempts in any 12-month period; after three attempts a candidate needs special permission to continue.',
    recertification: 'Scores are valid for two to three years depending on the professional school; they are not renewed, but a retest updates the record.',
    scoreReporting: 'The DAT moved to a 200 to 600 scale per section starting in March 2025; the OAT remains on a 200 to 400 scale. Both report an academic average and a total science average.',
    providersNote: 'Use the official ADA candidate guides and full-length practice; the science content is substantial, so content review usually dominates preparation.',
    comparison: {
      title: 'ADA admissions exams',
      columns: ['Exam', 'For', 'Length', 'Score'],
      rows: [
        { label: 'DAT', values: ['Dental school', 'About 5h 15m', '200 to 600'] },
        { label: 'OAT', values: ['Optometry school', 'About 4h 40m', '200 to 400'] }
      ]
    },
    orgFaqs: [
      { q: 'How much does the DAT cost?', a: 'The DAT fee is 580 dollars for 2026 and includes the score reports sent to the schools you choose at registration.' },
      { q: 'How many times can I take the OAT?', a: 'You may retake the OAT after a 60-day wait, up to four times within 12 months, with additional attempts requiring ADA approval.' }
    ],
    sourceUrl: 'https://www.ada.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'gmac',
    body: 'Graduate Management Admission Council',
    bodyUrl: 'https://www.gmac.com',
    about: 'The Graduate Management Admission Council (GMAC) owns the GMAT Focus Edition and the Executive Assessment, the leading admissions exams for full-time, part-time and executive MBA and business master programs worldwide. Both are delivered through Pearson VUE and accepted by thousands of graduate business schools.',
    registrationSteps: [
      { title: 'Create a GMAC account', description: 'Register at mba.com with a name matching your ID; this account handles both the GMAT Focus Edition and the Executive Assessment.', duration: '10 minutes' },
      { title: 'Book the exam', description: 'Pick a Pearson VUE centre or the online version, then choose a date; the GMAT Focus Edition and the Executive Assessment have separate portals.', duration: '15 minutes' },
      { title: 'Pay the fee', description: 'The GMAT Focus Edition is 275 dollars at a centre or 300 dollars online; the Executive Assessment is 350 dollars.', duration: '5 minutes' },
      { title: 'Prepare with official prep', description: 'Use the free GMAT Focus Official Starter Kit and the Executive Assessment official guide for practice.', duration: '4 to 10 weeks' },
      { title: 'Test and send scores', description: 'Sit the exam and send official reports to your selected programs; score review differs by exam.', duration: 'test day' }
    ],
    proctoring: 'Both exams are delivered at Pearson VUE centres or online with live proctoring. Online test takers complete an equipment and room scan before starting.',
    retakePolicy: 'The GMAT Focus Edition requires a 16-day gap and allows up to five attempts in 12 months and eight in a lifetime. The Executive Assessment allows a maximum of two attempts.',
    recertification: 'Scores are valid for five years from the test date and are not renewed; older scores age out of the reporting system.',
    scoreReporting: 'The GMAT Focus Edition totals 205 to 805 in 10-point increments across Quantitative, Verbal and Data Insights. The Executive Assessment totals 100 to 200, with each section scored 0 to 20.',
    providersNote: 'Start with the official GMAC practice; third-party courses are common but only official materials use real retired items.',
    comparison: {
      title: 'GMAC business admissions exams',
      columns: ['Exam', 'For', 'Length', 'Score'],
      rows: [
        { label: 'GMAT Focus Edition', values: ['MBA and masters', '2h 15m', '205 to 805'] },
        { label: 'Executive Assessment', values: ['Executive MBA', '90 minutes', '100 to 200'] }
      ]
    },
    orgFaqs: [
      { q: 'How many times can I take the GMAT Focus Edition?', a: 'You may retake it after a 16-day wait, up to five times in 12 months and eight times in a lifetime.' },
      { q: 'What is the Executive Assessment for?', a: 'It is a shorter 90-minute test designed for experienced professionals applying to executive MBA programs, with a limit of two attempts.' }
    ],
    sourceUrl: 'https://www.gmac.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'michigan-language-assessment',
    body: 'Michigan Language Assessment',
    bodyUrl: 'https://michiganassessment.org',
    about: 'Michigan Language Assessment, a joint venture of the University of Michigan and Cambridge, offers the Examination for the Certificate of Proficiency in English (ECPE) at CEFR C2 and the modular Michigan English Test (MET) covering CEFR A2 to C1. Both are used for academic admission, employment and immigration evidence of English ability.',
    registrationSteps: [
      { title: 'Choose the test', description: 'Select the ECPE for a C2 certificate or the MET for a modular A2 to C1 result depending on your goal.', duration: 'self-check' },
      { title: 'Find a test centre', description: 'Register through an authorised Michigan Language Assessment centre; there is no direct publisher booking.', duration: '15 minutes' },
      { title: 'Pay the fee', description: 'Centres set local fees depending on the test and modules selected.', duration: '5 minutes' },
      { title: 'Prepare with official practice', description: 'Use the free sample tests and the official preparation books for the ECPE or MET.', duration: '4 to 8 weeks' },
      { title: 'Test and collect results', description: 'Sit the exam at the centre and receive a certificate and score report after grading.', duration: 'test day' }
    ],
    proctoring: 'Both exams are administered at authorised centres under standard exam conditions, with the speaking component conducted by a trained examiner.',
    retakePolicy: 'There is no fixed limit; candidates may re-register for the next available administration. ECPE certificates are valid for life, while MET results are accepted within the recency window a school sets.',
    recertification: 'The ECPE certificate does not expire. The MET is a point-in-time proficiency report and is not renewed.',
    scoreReporting: 'The ECPE reports a pass or fail at C2 with section results. The MET reports a score and CEFR level per module, with an overall level from A2 to C1.',
    providersNote: 'Use the official Michigan sample tests and preparation books; the exams measure practical academic and workplace English.',
    comparison: {
      title: 'Michigan English exams',
      columns: ['Test', 'CEFR', 'Format', 'Validity'],
      rows: [
        { label: 'ECPE', values: ['C2', '4 skills', 'Lifetime'] },
        { label: 'MET', values: ['A2 to C1', 'Modular', 'Per school'] }
      ]
    },
    orgFaqs: [
      { q: 'Does the ECPE expire?', a: 'No. The ECPE certificate is a lifetime C2 qualification and does not require renewal.' },
      { q: 'What is the MET?', a: 'The MET is a modular English test covering A2 to C1 with separate listening, reading, writing and speaking modules that you can combine as needed.' }
    ],
    sourceUrl: 'https://michiganassessment.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'ielts-partners',
    body: 'British Council, IDP: IELTS Australia and Cambridge University Press and Assessment',
    bodyUrl: 'https://www.ielts.org',
    about: 'IELTS is owned by the British Council, IDP: IELTS Australia and Cambridge University Press and Assessment, and is one of the world most widely accepted English-proficiency tests. The Academic module is used for university admission and the General Training module for migration and vocational purposes, with testing at centres worldwide and on computer.',
    registrationSteps: [
      { title: 'Choose your module', description: 'Select IELTS Academic for degree admission or IELTS General Training for migration and some vocational programs.', duration: 'per goal' },
      { title: 'Find a test centre', description: 'Register through an official IELTS centre or online booking for a paper or computer appointment.', duration: '15 minutes' },
      { title: 'Pay the fee', description: 'US fees generally run about 215 to 250 dollars depending on the centre and format.', duration: '5 minutes' },
      { title: 'Prepare with official materials', description: 'Use the free IELTS practice tests and the British Council or IDP preparation resources.', duration: '4 to 8 weeks' },
      { title: 'Test and get results', description: 'Complete the four skills; speaking may fall on a separate day. Results post 3 to 13 days after the test.', duration: 'test day' }
    ],
    proctoring: 'IELTS is delivered at official centres with supervised speaking interviews and, increasingly, on computer with secure check-in. Computer-delivered testing is being expanded across the US market.',
    retakePolicy: 'There is no limit on retakes; candidates may book the next available date. A One Skill Retake lets you redo a single section within 60 days of the original test.',
    recertification: 'IELTS scores are valid for two years from the test date and are not renewed; older results age out for admission use.',
    scoreReporting: 'Each of the four skills is banded 0 to 9 in half-band steps, and the overall band is the average. Results are reported on the Test Report Form.',
    providersNote: 'Use the official IELTS practice and the free British Council and IDP apps; the speaking interview rewards natural communication over scripts.',
    comparison: {
      title: 'IELTS modules compared',
      columns: ['Module', 'For', 'Reading and Writing', 'Score'],
      rows: [
        { label: 'Academic', values: ['University entry', 'Academic texts', 'Bands 0 to 9'] },
        { label: 'General Training', values: ['Migration, vocational', 'Everyday texts', 'Bands 0 to 9'] }
      ]
    },
    orgFaqs: [
      { q: 'What is the difference between Academic and General Training?', a: 'Academic uses scholarly reading and writing tasks for degree admission, while General Training uses everyday and workplace texts for migration and some vocational programs.' },
      { q: 'Can I retake just one section?', a: 'Yes. The IELTS One Skill Retake lets you retake a single section within 60 days and receive a new Test Report Form combining it with the other scores.' }
    ],
    sourceUrl: 'https://www.ielts.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'catholic-diocesan-schools',
    body: 'Participating Catholic diocesan school systems',
    bodyUrl: 'https://www.coopexam.org',
    about: 'The Cooperative Admissions Examination (COOP) is administered by participating Catholic diocesan school systems, chiefly in New Jersey and the Philadelphia area, for admission to member Catholic high schools. It is a single shared entrance exam that lets a student apply to multiple member schools with one sitting.',
    registrationSteps: [
      { title: 'Confirm member schools', description: 'Check the diocesan COOP list to confirm which Catholic high schools accept the exam and their deadlines.', duration: 'per school' },
      { title: 'Register for the COOP', description: 'Register through the diocesan COOP office, usually with a single fee covering the listed member schools.', duration: '15 minutes' },
      { title: 'Prepare with the guide', description: 'Use the official COOP practice test and the content outline covering reasoning, language and mathematics.', duration: '4 to 8 weeks' },
      { title: 'Sit the exam', description: 'Take the test on the scheduled fall date at a member school; scores are sent to the schools you listed.', duration: 'test day' },
      { title: 'Await admission decisions', description: 'Member schools use the COOP along with transcripts and records to make admission and scholarship decisions.', duration: 'weeks after' }
    ],
    proctoring: 'The COOP is administered in person at member Catholic high schools under standard test-day supervision on a single shared date.',
    retakePolicy: 'The COOP is offered once per admission cycle, so a student generally gets one attempt; diocesan rules do not provide a routine retake.',
    recertification: 'The exam result is used for that admission cycle and is not renewed or carried forward.',
    scoreReporting: 'The COOP reports a scaled score and percentile relative to other test takers, and many member schools also use it for scholarship cutoffs.',
    providersNote: 'Use the official diocesan practice test; the content is straightforward reasoning, language and math rather than memorised facts.',
    comparison: {
      title: 'Catholic diocesan entrance options',
      columns: ['Exam', 'Region', 'Schools', 'Result'],
      rows: [
        { label: 'COOP', values: ['NJ and Philadelphia', 'Member diocesan', 'Scaled score'] }
      ]
    },
    orgFaqs: [
      { q: 'Which schools accept the COOP?', a: 'Member Catholic high schools in New Jersey and the Philadelphia area accept the COOP; confirm the current diocesan list because membership can change.' },
      { q: 'Can my child take the COOP more than once?', a: 'No. The COOP is offered once per admission cycle, so plan the single attempt carefully and prepare in advance.' }
    ],
    sourceUrl: 'https://www.coopexam.org',
    verified: true,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'kbit-2',
    body: 'Pearson',
    tagline: 'A quick, individually administered screening of verbal and nonverbal reasoning for gifted-program consideration.',
    description: 'The Kaufman Brief Intelligence Test, Second Edition (KBIT-2) is an individually administered screening designed to estimate verbal and nonverbal intelligence in about 15 to 30 minutes. Schools and psychologists use it to identify children for gifted and talented programs, to document cognitive strength and to support admissions portfolios where a short ability measure is preferred over a full IQ battery. It is not a pass or fail exam and reports standard scores with percentiles rather than a threshold.',
    quickAnswer: {
      summary: 'The KBIT-2 is a brief, individually administered ability screen that estimates verbal and nonverbal intelligence through Vocabulary and Matrices tasks. It is usually given by a psychologist or school psychologist to support gifted screening and admissions evidence, takes about 15 to 30 minutes, and reports standard scores with percentiles rather than a pass mark.',
      advantages: [
        'Much faster than a full IQ evaluation',
        'Covers both verbal and nonverbal reasoning',
        'Widely accepted for gifted-program documentation',
        'Reports standard scores and percentiles',
        'Can be used across a wide age span'
      ]
    },
    roadmap: ['Ask the school which ability test it accepts', 'Locate a qualified examiner', 'Schedule a 15 to 30 minute session', 'Receive the written report', 'Submit it with the admissions packet'],
    prerequisites: 'There is no formal eligibility gate, but the publisher restricts purchase to qualified professionals. It is typically requested for children and adolescents being considered for gifted or private-school placement.',
    examMeta: {
      questions: 'Two subtests: Vocabulary and Matrices, about 20 to 40 items each',
      time: '15 to 30 minutes',
      pass: 'No pass mark; standard score mean 100, SD 15',
      fee: 'Administered by a qualified professional; no public fee',
      format: 'Individually administered, oral and nonverbal items',
      admin: 'Pearson (publisher); given by psychologists and schools'
    },
    topics: [
      { name: 'Verbal (Vocabulary)' },
      { name: 'Nonverbal (Matrices)' }
    ],
    examEssentials: [
      ['Age range', 'About 4 to 90 years'],
      ['Scoring', 'Standard score mean 100, SD 15'],
      ['Use', 'Gifted screening and admissions evidence'],
      ['Administration', 'Individually, by a qualified professional']
    ],
    timeline: [{ stage: 'Referral', duration: 'Per school request' }, { stage: 'Testing', duration: '15 to 30 minutes' }, { stage: 'Report', duration: 'Same or next session' }],
    costBreakdown: { items: [{ item: 'Professional administration (varies by provider)', fee: 'Varies' }], total: 'Varies', footnote: 'The KBIT-2 is sold to qualified purchasers; families pay the administering psychologist or school, not Pearson directly.' },
    difficulty: 'Light',
    audience: 'Families seeking gifted or private-school placement',
    time: '15 to 30 minutes on the test day',
    cost: 'Varies by provider',
    faqs: [
      { q: 'Can I book the KBIT-2 directly?', a: 'No. Pearson restricts the KBIT-2 to qualified purchasers, so families arrange administration through a school or a licensed psychologist rather than booking on their own.' },
      { q: 'Is there a passing score?', a: 'No. The KBIT-2 is a screening measure that reports a standard score and percentile; schools interpret the result against their own gifted or admissions criteria.' },
      { q: 'How is it different from the WISC-V?', a: 'The KBIT-2 is a short two-subtest screen, while the WISC-V is a fuller individual IQ battery with more subtests and a longer administration.' },
      { q: 'How long are results valid?', a: 'Ability scores are a snapshot of the test date; schools use the report for the current admission cycle, and a retest is only done if the school permits a later administration.' }
    ],
    summaryPoints: [
      'Brief individually administered ability screen of about 15 to 30 minutes',
      'Reports verbal and nonverbal standard scores with percentiles',
      'Commonly used for gifted screening and private-school evidence'
    ],
    relatedSlugs: ['nnat3', 'wisc-v', 'stanford-binet-5'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'nnat3',
    body: 'Pearson',
    tagline: 'A language-free reasoning test using shapes and patterns for K-12 gifted screening.',
    description: 'The Naglieri Nonverbal Ability Test, Third Edition (NNAT3) measures general reasoning with diagrammatic puzzles that do not depend on reading or spoken language, making it a fairer screen for multilingual and diverse learners. Schools administer it in groups from kindergarten through grade 12 to identify gifted and talented candidates, and it is one of the most common ability screens used in US public and private gifted programs. The test reports a Naglieri Ability Index rather than measuring achievement.',
    quickAnswer: {
      summary: 'The NNAT3 is a group-administered, language-free reasoning test that uses shape and pattern puzzles to estimate general ability. Schools give it to students in kindergarten through grade 12 for gifted screening, it takes about 30 minutes, and it reports a Naglieri Ability Index with percentiles rather than a pass mark.',
      advantages: [
        'Language-free, reducing bias for English learners',
        'Quick group administration of about 30 minutes',
        'Widely used for gifted and talented identification',
        'Reports an ability index and percentiles',
        'Covers a full K to 12 grade span'
      ]
    },
    roadmap: ['Ask if the school uses NNAT3', 'Confirm the testing window', 'Ensure a rested test taker', 'School administers the 30 minute test', 'Receive the ability report'],
    prerequisites: 'Given by schools to students in kindergarten through grade 12; there is no individual registration. It is administered in levels A through G matched to grade.',
    examMeta: {
      questions: '48 multiple-choice puzzles',
      time: '30 minutes',
      pass: 'No pass mark; Naglieri Ability Index mean 100, SD 15',
      fee: 'Administered by schools; no public registration fee',
      format: 'Group-administered, multiple-choice, figure based',
      admin: 'Pearson; given by schools'
    },
    topics: [
      { name: 'Pattern completion' },
      { name: 'Reasoning by analogy' },
      { name: 'Serial reasoning' },
      { name: 'Spatial visualisation' }
    ],
    examEssentials: [
      ['Format', 'Language-free, figure-based items'],
      ['Levels', 'A through G (K to grade 12)'],
      ['Scoring', 'Naglieri Ability Index, percentiles'],
      ['Use', 'Gifted and talented screening']
    ],
    timeline: [{ stage: 'School administers', duration: '30 minutes' }, { stage: 'Scoring', duration: 'Automated' }, { stage: 'Report', duration: 'To family per school' }],
    costBreakdown: { items: [{ item: 'Administered by the school', fee: 'No public fee' }], total: 'No public fee', footnote: 'Schools license NNAT3; families are not billed by Pearson for the administration.' },
    difficulty: 'Moderate',
    audience: 'K-12 students being screened for gifted programs',
    time: '30 minutes',
    cost: 'No public fee',
    faqs: [
      { q: 'Do I register my child for the NNAT3?', a: 'No. The school administers the NNAT3 during a testing window; families do not book or pay Pearson directly.' },
      { q: 'Is there a passing score?', a: 'No. The NNAT3 reports a Naglieri Ability Index and percentile; the school sets its own gifted-program cutoff.' },
      { q: 'How can my child prepare?', a: 'Because the items are nonverbal patterns, light familiarisation with sample puzzles helps, but cramming is not useful for a reasoning screen.' },
      { q: 'How is it different from the OLSAT?', a: 'The NNAT3 is entirely nonverbal and language-free, while the OLSAT 8 includes verbal reasoning items in addition to nonverbal ones.' }
    ],
    summaryPoints: [
      'Language-free group ability screen of 48 pattern puzzles',
      'Used by schools for K-12 gifted identification',
      'Reports a Naglieri Ability Index with percentiles'
    ],
    relatedSlugs: ['cogat', 'olsat-8', 'kbit-2'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'olsat-8',
    body: 'Pearson',
    tagline: 'A group-administered school ability test for verbal and nonverbal reasoning used in gifted admissions.',
    description: 'The Otis-Lennon School Ability Test, Eighth Edition (OLSAT 8) is a group-administered measure of verbal and nonverbal reasoning given by schools from kindergarten through grade 12. Large districts use it for gifted and talented identification and some private schools review it for admission. It estimates a student general reasoning ability relative to age peers through a School Ability Index rather than measuring achievement or learned content, which makes it a common companion to achievement batteries.',
    quickAnswer: {
      summary: 'The OLSAT 8 is a group-administered school ability test covering verbal and nonverbal reasoning for students in kindergarten through grade 12. Schools use it for gifted identification and some private-school admission, it takes about 40 to 60 minutes, and it reports a School Ability Index with percentiles rather than a pass mark.',
      advantages: [
        'Group administration keeps school testing efficient',
        'Measures reasoning, not just achievement',
        'Commonly accepted for gifted identification',
        'Reports a School Ability Index and percentiles',
        'Spans kindergarten through grade 12'
      ]
    },
    roadmap: ['Confirm the school requires OLSAT 8', 'Note the testing window', 'Review sample item types', 'School administers the test', 'Receive the ability report'],
    prerequisites: 'Given by schools to students in kindergarten through grade 12; there is no individual registration. Levels A through G match the student grade.',
    examMeta: {
      questions: 'Varies by level, roughly 40 to 72 items',
      time: '40 to 60 minutes',
      pass: 'No pass mark; School Ability Index mean 100, SD 16',
      fee: 'Administered by schools; no public registration fee',
      format: 'Group-administered, multiple-choice',
      admin: 'Pearson; given by schools'
    },
    topics: [
      { name: 'Verbal comprehension' },
      { name: 'Verbal reasoning' },
      { name: 'Pictorial reasoning' },
      { name: 'Figural reasoning' },
      { name: 'Quantitative reasoning' }
    ],
    examEssentials: [
      ['Levels', 'A through G (K to grade 12)'],
      ['Scoring', 'School Ability Index, percentiles'],
      ['Use', 'Gifted identification, some admissions'],
      ['Administration', 'Group, by schools']
    ],
    timeline: [{ stage: 'School administers', duration: '40 to 60 minutes' }, { stage: 'Scoring', duration: 'Automated' }, { stage: 'Report', duration: 'To family per school' }],
    costBreakdown: { items: [{ item: 'Administered by the school', fee: 'No public fee' }], total: 'No public fee', footnote: 'Schools license OLSAT 8; families are not billed by Pearson for the administration.' },
    difficulty: 'Moderate',
    audience: 'K-12 students screened for gifted or admission',
    time: '40 to 60 minutes',
    cost: 'No public fee',
    faqs: [
      { q: 'Can I register my child for the OLSAT 8?', a: 'No. The OLSAT 8 is administered by schools during a testing window, and families do not pay a separate registration fee to Pearson.' },
      { q: 'Is there a passing score?', a: 'No. It reports a School Ability Index and percentile; the school sets any gifted or admission cutoff.' },
      { q: 'How is it different from the NNAT3?', a: 'The OLSAT 8 includes verbal reasoning items, while the NNAT3 is entirely nonverbal and language-free.' },
      { q: 'Should my child study for it?', a: 'Reasoning tests are not knowledge tests, but a short look at sample questions can reduce anxiety on the test day.' }
    ],
    summaryPoints: [
      'Group ability test of verbal and nonverbal reasoning',
      'Used for K-12 gifted identification and some admissions',
      'Reports a School Ability Index with percentiles'
    ],
    relatedSlugs: ['nnat3', 'cogat', 'kbit-2'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'wisc-v',
    body: 'Pearson',
    tagline: 'The leading individually administered IQ test for ages 6 to 16, accepted for gifted and admissions evidence.',
    description: 'The Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V) is the most widely used individually administered intelligence test for children aged 6 to 16. A qualified examiner gives 10 to 11 subtests across five indices to produce a Full Scale IQ and a profile of strengths. Many private schools and gifted programs accept a WISC-V report as cognitive evidence, and it is also used clinically for learning evaluations. It reports a mean of 100 with a standard deviation of 15.',
    quickAnswer: {
      summary: 'The WISC-V is the standard individually administered IQ test for children aged 6 to 16, taking about 45 to 65 minutes with a qualified psychologist. It produces a Full Scale IQ and five index scores with a mean of 100, and many private schools and gifted programs accept the report as cognitive evidence.',
      advantages: [
        'Gold-standard individual IQ measure for children',
        'Produces a full profile of cognitive strengths',
        'Widely accepted by schools and clinicians',
        'Reports FSIQ and index scores with percentiles',
        'Covers ages 6 to 16'
      ]
    },
    roadmap: ['Ask the school which IQ test it accepts', 'Book a licensed psychologist', 'Complete the 45 to 65 minute testing', 'Receive the full report', 'Submit it with the application'],
    prerequisites: 'Intended for children aged 6 to 16; administration is restricted to qualified examiners. There is no formal gate other than the age range.',
    examMeta: {
      questions: '10 to 11 subtests across five indices',
      time: '45 to 65 minutes',
      pass: 'No pass mark; FSIQ mean 100, SD 15',
      fee: 'Administered by a qualified professional',
      format: 'Individually administered, oral and nonverbal',
      admin: 'Pearson; given by psychologists'
    },
    topics: [
      { name: 'Verbal Comprehension' },
      { name: 'Visual Spatial' },
      { name: 'Fluid Reasoning' },
      { name: 'Working Memory' },
      { name: 'Processing Speed' }
    ],
    examEssentials: [
      ['Age range', '6 to 16 years'],
      ['Scoring', 'FSIQ mean 100, SD 15'],
      ['Administration', 'Individually by a psychologist'],
      ['Use', 'Gifted evidence, clinical evaluation']
    ],
    timeline: [{ stage: 'Referral', duration: 'Per school or clinician' }, { stage: 'Testing', duration: '45 to 65 minutes' }, { stage: 'Report', duration: 'Same or next session' }],
    costBreakdown: { items: [{ item: 'Professional administration (varies by provider)', fee: 'Varies' }], total: 'Varies', footnote: 'The WISC-V is sold to qualified purchasers; families pay the administering psychologist, not Pearson directly.' },
    difficulty: 'Light',
    audience: 'Families of children aged 6 to 16',
    time: '45 to 65 minutes on the test day',
    cost: 'Varies by provider',
    faqs: [
      { q: 'Who can administer the WISC-V?', a: 'Only a qualified examiner, usually a school or licensed psychologist, may administer the WISC-V; families cannot buy or give it directly.' },
      { q: 'Is there a passing score?', a: 'No. The WISC-V reports a Full Scale IQ and index scores; schools interpret the result against their own gifted or admission criteria.' },
      { q: 'How is it different from the WPPSI-IV?', a: 'The WISC-V covers ages 6 to 16, while the WPPSI-IV is for younger children aged 2 years 6 months to 7 years 7 months.' },
      { q: 'How long are the results used?', a: 'The report is a snapshot for the current admission or clinical purpose; a retest is only done if the school or clinician permits a later administration.' }
    ],
    summaryPoints: [
      'Individually administered IQ test for ages 6 to 16',
      'Produces FSIQ and five index scores, mean 100',
      'Accepted for gifted evidence and clinical evaluation'
    ],
    relatedSlugs: ['wppsi-iv', 'kbit-2', 'stanford-binet-5'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'wppsi-iv',
    body: 'Pearson',
    tagline: 'An individually administered IQ test for ages 2.5 to 7.7, often required for early private-school entry.',
    description: 'The Wechsler Preschool and Primary Scale of Intelligence, Fourth Edition (WPPSI-IV) is an individually administered intelligence test for children aged 2 years 6 months to 7 years 7 months. A psychologist or school psychologist administers the core subtests in about 30 to 60 minutes, and many early-childhood private school programs and gifted preschools request it as cognitive evidence for young applicants. It reports a standard score with a mean of 100 and a standard deviation of 15.',
    quickAnswer: {
      summary: 'The WPPSI-IV is an individually administered IQ test for children aged 2 years 6 months to 7 years 7 months, given by a qualified psychologist in about 30 to 60 minutes. Early private schools and gifted preschools often request it as cognitive evidence, and it reports a standard score with a mean of 100.',
      advantages: [
        'Designed specifically for very young children',
        'Individually tailored administration keeps young kids engaged',
        'Accepted for early private-school entry',
        'Reports standard scores with percentiles',
        'Covers ages 2:6 to 7:7'
      ]
    },
    roadmap: ['Confirm the school wants WPPSI-IV', 'Book a licensed psychologist', 'Complete the 30 to 60 minute testing', 'Receive the report', 'Include it in the application'],
    prerequisites: 'For children aged 2 years 6 months to 7 years 7 months; administration is restricted to qualified examiners.',
    examMeta: {
      questions: 'Core subtests, about 5 to 7',
      time: '30 to 60 minutes',
      pass: 'No pass mark; mean 100, SD 15',
      fee: 'Administered by a qualified professional',
      format: 'Individually administered, play and verbal items',
      admin: 'Pearson; given by psychologists'
    },
    topics: [
      { name: 'Verbal' },
      { name: 'Nonverbal' },
      { name: 'Working Memory' },
      { name: 'Processing Speed' }
    ],
    examEssentials: [
      ['Age range', '2:6 to 7:7 years'],
      ['Scoring', 'Standard score mean 100, SD 15'],
      ['Administration', 'Individually by a psychologist'],
      ['Use', 'Early private-school and gifted entry']
    ],
    timeline: [{ stage: 'Referral', duration: 'Per school' }, { stage: 'Testing', duration: '30 to 60 minutes' }, { stage: 'Report', duration: 'Same or next session' }],
    costBreakdown: { items: [{ item: 'Professional administration (varies by provider)', fee: 'Varies' }], total: 'Varies', footnote: 'The WPPSI-IV is sold to qualified purchasers; families pay the administering psychologist, not Pearson directly.' },
    difficulty: 'Light',
    audience: 'Families of children aged 2.5 to 7.7',
    time: '30 to 60 minutes on the test day',
    cost: 'Varies by provider',
    faqs: [
      { q: 'Who can give the WPPSI-IV?', a: 'Only a qualified examiner, typically a school or licensed psychologist, may administer the WPPSI-IV; families cannot administer it at home.' },
      { q: 'Is there a passing score?', a: 'No. It reports a standard score and percentile; the school interprets the result against its own early-entry criteria.' },
      { q: 'How is it different from the WISC-V?', a: 'The WPPSI-IV is for ages 2:6 to 7:7, while the WISC-V covers ages 6 to 16, so they barely overlap at the young end.' },
      { q: 'How should my child prepare?', a: 'Very young children should not cram; a normal routine and rest are more helpful than any drill for an individually administered screen.' }
    ],
    summaryPoints: [
      'Individually administered IQ test for ages 2.5 to 7.7',
      'Often requested for early private-school entry',
      'Reports a standard score with a mean of 100'
    ],
    relatedSlugs: ['wisc-v', 'kbit-2', 'stanford-binet-5'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'miller-analogies-test',
    body: 'Pearson',
    tagline: 'A retired analogy-based graduate admissions test that Pearson ended in November 2023.',
    description: 'The Miller Analogies Test (MAT) was an analogy-driven graduate admissions exam that Pearson officially retired on 15 November 2023; score reports are no longer issued and new registrations are closed. It was historically accepted by some master and doctoral programs, particularly in the humanities and social sciences, as an alternative to the GRE General Test. Applicants who earned a valid score before retirement may still report it where a program allows, but the test cannot be taken today.',
    quickAnswer: {
      summary: 'The Miller Analogies Test was a graduate admissions exam built from 120 analogy questions that Pearson retired on 15 November 2023. It is no longer offered or scored, so new test takers cannot register; programs that once accepted it now rely on the GRE General Test or program-specific requirements.',
      advantages: [
        'Once a fast, single-skill graduate screen',
        'Favoured by some humanities and social-science programs',
        'Required less broad content study than broad exams',
        'Scores were reportable for a defined window',
        'Served as a GRE alternative at many schools'
      ]
    },
    roadmap: ['Confirm your program still references it', 'Look for any valid prior score', 'Otherwise plan around the GRE General Test', 'Highlight coursework and writing', 'Submit available evidence'],
    prerequisites: 'Historically open to graduate applicants; now closed to new registration. Former candidates needed a bachelor degree or equivalent standing.',
    examMeta: {
      questions: '120 analogies (about 100 scored)',
      time: '60 minutes',
      pass: 'No pass mark; scaled score with percentiles',
      fee: 'Discontinued',
      format: 'Multiple-choice analogies, computer-delivered',
      admin: 'Pearson (retired)'
    },
    topics: [
      { name: 'Analogical reasoning' },
      { name: 'Humanities' },
      { name: 'Social sciences' },
      { name: 'Natural sciences' },
      { name: 'Mathematics' }
    ],
    examEssentials: [
      ['Status', 'Retired 15 November 2023'],
      ['Scoring', 'Scaled 200 to 600 historically'],
      ['Validity', 'Former scores may still be reportable'],
      ['Replacement', 'GRE General Test and program-specific tests']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through 15 Nov 2023' }],
    costBreakdown: { items: [{ item: 'Former registration fee', fee: '$90' }], total: 'Discontinued', footnote: 'No longer bookable; last fee shown for reference only.' },
    difficulty: 'Moderate',
    audience: 'Former graduate applicants',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I still take the Miller Analogies Test?', a: 'No. Pearson retired the MAT on 15 November 2023, and no new registrations or score reports are available.' },
      { q: 'What should applicants use instead?', a: 'Most programs that once accepted the MAT now use the GRE General Test or their own subject requirements, so confirm the current policy with each school.' },
      { q: 'Are my old MAT scores still valid?', a: 'If you tested before retirement, a program may still accept the report where its policy allows, but you cannot earn a new score.' },
      { q: 'Why was the MAT discontinued?', a: 'Pearson ended the MAT as part of a broader reduction of its admissions-test portfolio after program demand shifted to broader exams such as the GRE.' }
    ],
    summaryPoints: [
      'Retired by Pearson on 15 November 2023',
      'Was a 120-question analogy-based graduate exam',
      'Modern applicants substitute the GRE General Test'
    ],
    relatedSlugs: ['pharmacy-college-admission-test'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'pharmacy-college-admission-test',
    body: 'Pearson',
    tagline: 'A retired pharmacy school admissions test that ended in January 2024.',
    description: 'The Pharmacy College Admission Test (PCAT) was a standardized admissions exam for doctor of pharmacy (PharmD) programs that Pearson retired after 10 January 2024. It covered writing, biological and chemical sciences, critical reading and quantitative ability, and was historically required or recommended by many PharmCAS programs. New test takers can no longer register, and schools have moved to test-optional or holistic review; applicants with a still-valid score may report it where allowed.',
    quickAnswer: {
      summary: 'The PCAT was a pharmacy school admissions exam covering writing, science, reading and quantitative sections that Pearson retired after 10 January 2024. It is no longer offered, so new applicants cannot register; most PharmD programs now use test-optional or holistic review instead of a required PCAT score.',
      advantages: [
        'Once a common pharmacy admissions benchmark',
        'Covered science and quantitative readiness',
        'Scores were reportable for a defined window',
        'Accepted by many PharmCAS programs',
        'Structured like other health-admissions exams'
      ]
    },
    roadmap: ['Confirm your PharmD program PCAT policy', 'Look for any valid prior score', 'Otherwise apply test-optional where allowed', 'Strengthen coursework and experience', 'Submit available evidence'],
    prerequisites: 'Historically for PharmD applicants with prerequisite coursework; now closed to new registration.',
    examMeta: {
      questions: 'Approximately 192 multiple-choice plus one writing essay',
      time: 'About 3 hours 40 minutes',
      pass: 'No pass mark; scaled 200 to 600',
      fee: 'Discontinued',
      format: 'Multiple-choice and essay, computer-delivered',
      admin: 'Pearson (retired)'
    },
    topics: [
      { name: 'Writing' },
      { name: 'Biological Sciences' },
      { name: 'Chemical Sciences' },
      { name: 'Critical Reading' },
      { name: 'Quantitative Ability' }
    ],
    examEssentials: [
      ['Status', 'Retired 10 January 2024'],
      ['Scoring', 'Scaled 200 to 600 per section'],
      ['Validity', 'Former scores may still be reportable'],
      ['Replacement', 'Program-specific, often test-optional']
    ],
    timeline: [{ stage: 'Historical administration', duration: 'Through 10 Jan 2024' }],
    costBreakdown: { items: [{ item: 'Former registration fee', fee: '$210' }], total: 'Discontinued', footnote: 'No longer bookable; last fee shown for reference only.' },
    difficulty: 'Hard',
    audience: 'Former PharmD applicants',
    time: 'Not currently offered',
    cost: 'Discontinued',
    faqs: [
      { q: 'Can I still register for the PCAT?', a: 'No. Pearson retired the PCAT after 10 January 2024, and the exam is no longer scheduled or scored.' },
      { q: 'How do PharmD programs admit students now?', a: 'Most PharmCAS programs have moved to test-optional or holistic review, weighing prerequisites, GPA, experience and letters rather than a required PCAT score.' },
      { q: 'Are my old PCAT scores still accepted?', a: 'If you tested before retirement, a program may still consider the report where its policy allows, but you cannot earn a new score.' },
      { q: 'Was the PCAT like the DAT or OAT?', a: 'It was similar in being a health-admissions exam with science and quantitative sections, but the DAT and OAT remain active while the PCAT is retired.' }
    ],
    summaryPoints: [
      'Retired by Pearson after 10 January 2024',
      'Was a 3h 40m PharmD admissions exam',
      'Programs now use test-optional or holistic review'
    ],
    relatedSlugs: ['miller-analogies-test'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'pte-academic',
    body: 'Pearson',
    tagline: 'A fully computer-scored English test with results in about two days for university admission.',
    description: 'PTE Academic is Pearson computer-based English proficiency test for study, work and migration, completed in about two hours at a Pearson VUE centre or at home. All speaking, writing, reading and listening items are scored by automated speech and writing engines, so results are typically available within two days. It is accepted by thousands of universities, including many US institutions, and by a range of governments for visa purposes, and it pairs a fast turnaround with a single 10 to 90 score scale.',
    quickAnswer: {
      summary: 'PTE Academic is a fully computer-scored English test lasting about two hours at a Pearson VUE centre or at home, with results usually in two days. It is accepted by many US universities and governments for visas, and it reports a single overall score from 10 to 90 that is valid for two years.',
      advantages: [
        'Results typically within two days',
        'Fully computer-scored for consistent grading',
        'Accepted by thousands of universities and visa bodies',
        'Single 10 to 90 score scale is easy to read',
        'Centre and at-home delivery are available'
      ]
    },
    roadmap: ['Check the school accepts PTE Academic', 'Book a centre or at-home slot', 'Take the official scored practice test', 'Test in about two hours', 'Send scores to institutions'],
    prerequisites: 'Open to any test taker needing proof of English; most users are applying to university or for a visa, but there is no formal eligibility gate to register.',
    examMeta: {
      questions: 'About 70 to 91 items across three timed parts',
      time: '2 hours',
      pass: 'No pass mark; score 10 to 90',
      fee: '$215 to $250 (US); varies by country',
      format: 'Computer-delivered, integrated speaking and writing',
      admin: 'Pearson VUE centres and at home'
    },
    topics: [
      { name: 'Speaking and Writing' },
      { name: 'Reading' },
      { name: 'Listening' }
    ],
    examEssentials: [
      ['Score scale', '10 to 90 overall'],
      ['Results', 'Typically within 2 days'],
      ['Validity', '2 years'],
      ['Delivery', 'Centre or at home']
    ],
    timeline: [{ stage: 'Book', duration: 'Online' }, { stage: 'Test', duration: '2 hours' }, { stage: 'Results', duration: 'About 2 days' }],
    costBreakdown: { items: [{ item: 'Test fee (US)', fee: '$215 to $250' }, { item: 'Additional score reports', fee: 'Most included free' }], total: '$215 to $250', footnote: 'Fees vary by country and currency; some locations add a centre surcharge.' },
    difficulty: 'Moderate',
    audience: 'University and visa English-proficiency applicants',
    time: 'About 2 hours on the test day',
    cost: '$215 to $250',
    faqs: [
      { q: 'How fast are PTE Academic results?', a: 'Most test takers receive scores within two days because all items are scored by automated engines rather than by human raters.' },
      { q: 'Is PTE Academic accepted by US universities?', a: 'Yes, a large and growing number of US institutions accept PTE Academic for admission, but you should confirm the minimum score on each school admissions page.' },
      { q: 'How long is the score valid?', a: 'PTE Academic scores are valid for two years from the test date, which matches the typical English-test validity used by universities and visa offices.' },
      { q: 'Can I take it at home?', a: 'Yes. PTE Academic is offered at Pearson VUE centres and as an online at-home version with identity verification and proctoring.' }
    ],
    summaryPoints: [
      'Two-hour computer-scored English test',
      'Results usually within two days, score 10 to 90',
      'Accepted by many US universities and visa programs'
    ],
    relatedSlugs: ['ielts-academic', 'cambridge-b2-first'],
    sourceUrl: 'https://www.pearsonpte.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'character-skills-snapshot',
    body: 'Enrollment Management Association',
    tagline: 'An online questionnaire that adds a character read to the SSAT for independent school admission.',
    description: 'The Character Skills Snapshot is an online questionnaire from the Enrollment Management Association that complements the SSAT by reporting a student preferences, attitudes and beliefs to participating independent school admission teams. It is not a right-or-wrong test; instead it gives schools a developmental view of eight character strengths such as resilience, open-mindedness and teamwork. Families opt in through the SSAT account, and the student completes it online at home or school.',
    quickAnswer: {
      summary: 'The Character Skills Snapshot is an unsupervised online questionnaire that works alongside the SSAT to show independent schools a student character strengths rather than academic scores. It is taken once per testing year at home or school and reports a developmental profile, not a pass mark.',
      advantages: [
        'Shows character strengths beyond test scores',
        'Takes only about 15 to 20 minutes',
        'Completed online at home or school',
        'Gives schools a developmental read',
        'Pairs naturally with the SSAT'
      ]
    },
    roadmap: ['Opt in through the SSAT account', 'Confirm schools request it', 'Have the student complete it online', 'Schools receive the profile', 'Use alongside SSAT scores'],
    prerequisites: 'The student must have an SSAT registration; the Snapshot is added through the same EMA account. It is intended for elementary through upper applicants whose schools request it.',
    examMeta: {
      questions: 'About 30 scenario-based items',
      time: '15 to 20 minutes',
      pass: 'No pass mark; reports a character profile',
      fee: 'Included with SSAT or a small add-on fee',
      format: 'Online questionnaire, unsupervised',
      admin: 'Enrollment Management Association'
    },
    topics: [
      { name: 'Resilience' },
      { name: 'Open-mindedness' },
      { name: 'Intellectual Curiosity' },
      { name: 'Teamwork' },
      { name: 'Responsibility' }
    ],
    examEssentials: [
      ['Type', 'Online character questionnaire'],
      ['Scoring', 'Developmental profile, not a score'],
      ['Attempts', 'Once per testing year'],
      ['Use', 'Supplements the SSAT for admission']
    ],
    timeline: [{ stage: 'Opt in', duration: 'With SSAT registration' }, { stage: 'Complete', duration: '15 to 20 minutes' }, { stage: 'Report', duration: 'To schools automatically' }],
    costBreakdown: { items: [{ item: 'With SSAT registration', fee: 'Included or small add-on' }], total: 'Included or small add-on', footnote: 'Fee structures vary by school and waiver status; confirm with the SSAT account.' },
    difficulty: 'Light',
    audience: 'Independent school applicants and families',
    time: '15 to 20 minutes',
    cost: 'Included or small add-on',
    faqs: [
      { q: 'Is the Character Skills Snapshot a test?', a: 'No. It is a questionnaire about preferences and attitudes, not an academic test, and there are no right or wrong answers.' },
      { q: 'How many times can my child take it?', a: 'A student may complete the Snapshot once per testing year, which matches the SSAT testing-year calendar.' },
      { q: 'Does it count toward admission?', a: 'Schools use it as a supplement to the SSAT and records; it is a read on character strengths rather than a numeric gate.' },
      { q: 'Do all schools require it?', a: 'No. Only participating member schools request the Snapshot, so confirm with each admission office before adding it.' }
    ],
    summaryPoints: [
      'Online character questionnaire that complements the SSAT',
      'Reports a developmental profile, not a pass mark',
      'Taken once per year at home or school'
    ],
    relatedSlugs: ['ssat-elementary-level', 'ssat-middle-level', 'ssat-upper-level'],
    sourceUrl: 'https://www.ssat.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ssat-elementary-level',
    body: 'Enrollment Management Association',
    tagline: 'The SSAT level for grades three and four, with no wrong-answer penalty and an unscored writing sample.',
    description: 'The SSAT Elementary Level is the entry version of the Secondary School Admission Test for students in grades three and four. It uses two quantitative sections, one verbal section and one reading section plus an unscored writing sample and an experimental section, and it does not penalise wrong answers. Schools receive raw scores and percentiles based on the past three admission-year cohorts, which makes it a gentle first standardized test for young applicants.',
    quickAnswer: {
      summary: 'The SSAT Elementary Level is for grades 3 and 4 and takes about two hours. It has quantitative, verbal and reading multiple-choice sections plus an unscored writing sample, with no penalty for wrong answers. US registration is about 112 dollars and international about 229 dollars.',
      advantages: [
        'Designed for young grades 3 to 4 applicants',
        'No guessing penalty eases test anxiety',
        'Includes an unscored writing sample',
        'Gentle first standardized test experience',
        'Percentiles based on recent cohorts'
      ]
    },
    roadmap: ['Create the SSAT account', 'Pick Elementary Level', 'Choose a Standard or Flex date', 'Prepare with official practice', 'Send scores to schools'],
    prerequisites: 'Open to students in grades 3 and 4 applying to independent schools. A parent registers the student; the level is set by current grade.',
    examMeta: {
      questions: 'About 110 to 120 multiple-choice plus unscored writing',
      time: 'About 2 hours 5 minutes with breaks',
      pass: 'No pass mark; raw score and percentile',
      fee: 'US $112; International $229',
      format: 'Multiple-choice plus unscored writing sample',
      admin: 'Enrollment Management Association'
    },
    topics: [
      { name: 'Quantitative (Math)' },
      { name: 'Verbal' },
      { name: 'Reading' },
      { name: 'Writing sample (unscored)' }
    ],
    examEssentials: [
      ['Grades', '3 and 4'],
      ['Penalty', 'No wrong-answer penalty'],
      ['Writing', 'Unscored sample sent to schools'],
      ['Score', 'Raw score and percentile']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 8 weeks' }, { stage: 'Test', duration: 'About 2 hours' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'US Standard registration', fee: '$112' }, { item: 'International registration', fee: '$229' }, { item: 'Additional score reports', fee: 'Per report fee' }], total: '$112 to $229', footnote: 'Flex and late deadlines may add fees; fee waivers are available through member schools.' },
    difficulty: 'Light',
    audience: 'Families of grades 3 to 4 applicants',
    time: '4 to 8 weeks typical prep',
    cost: '$112 to $229',
    faqs: [
      { q: 'How many times can my child take the Elementary SSAT?', a: 'Elementary Level students may take the SSAT up to three times per testing year, which is fewer than the Middle and Upper Level limits.' },
      { q: 'Is there a penalty for guessing?', a: 'No. The Elementary Level does not penalise wrong answers, so students should answer every question.' },
      { q: 'How is the writing sample used?', a: 'The writing sample is unscored but sent to schools as a direct look at the student writing.' },
      { q: 'What score do schools want?', a: 'There is no pass mark; schools review the percentile alongside the student record and the writing sample.' }
    ],
    summaryPoints: [
      'SSAT for grades 3 and 4, about two hours',
      'No guessing penalty and an unscored writing sample',
      'US fee about 112 dollars, international 229 dollars'
    ],
    relatedSlugs: ['ssat-middle-level', 'ssat-upper-level', 'character-skills-snapshot'],
    sourceUrl: 'https://www.ssat.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ssat-middle-level',
    body: 'Enrollment Management Association',
    tagline: 'The SSAT level for grades five through seven, scored 440 to 710 per section with a guessing penalty.',
    description: 'The SSAT Middle Level is the version of the Secondary School Admission Test for students in grades five through seven. It includes an unscored writing sample, two quantitative sections, one reading section and one verbal section plus an experimental section, and it applies a guessing penalty for wrong answers. Scores are scaled 440 to 710 per section and 1320 to 2130 total, with percentiles drawn from the past three admission-year cohorts and sent to independent schools.',
    quickAnswer: {
      summary: 'The SSAT Middle Level is for grades 5 to 7 and runs about three hours. It scales 440 to 710 per section and 1320 to 2130 total, penalises wrong answers, and costs about 172 dollars at a US Standard date, 242 at Prometric, 258 at home and 329 internationally.',
      advantages: [
        'Standardized read for grades 5 to 7 applicants',
        'Percentiles benchmark against recent cohorts',
        'Multiple delivery options including at home',
        'Writing sample sent to schools',
        'Up to six Standard dates per year'
      ]
    },
    roadmap: ['Create the SSAT account', 'Pick Middle Level', 'Choose Standard, Prometric or at-home', 'Use official practice', 'Route scores to schools'],
    prerequisites: 'Open to students in grades 5 through 7. A parent registers the student and selects the level by current grade.',
    examMeta: {
      questions: 'About 167 multiple-choice plus unscored writing',
      time: 'About 3 hours 10 minutes with breaks',
      pass: 'No pass mark; 440 to 710 per section',
      fee: 'US $172 Standard; $242 Prometric; $258 At Home; $329 Intl',
      format: 'Multiple-choice plus unscored writing sample',
      admin: 'Enrollment Management Association'
    },
    topics: [
      { name: 'Quantitative (Math)' },
      { name: 'Verbal' },
      { name: 'Reading' },
      { name: 'Writing sample (unscored)' }
    ],
    examEssentials: [
      ['Grades', '5 to 7'],
      ['Scoring', '440 to 710 per section, 1320 to 2130 total'],
      ['Penalty', 'Wrong answers are penalised'],
      ['Retake', 'Up to 6 Standard plus 1 Flex per year']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: 'About 3 hours' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'US Standard registration', fee: '$172' }, { item: 'Prometric centre', fee: '$242' }, { item: 'At Home', fee: '$258' }, { item: 'International', fee: '$329' }], total: '$172 to $329', footnote: 'Flex, late and change fees apply; fee waivers are available through member schools.' },
    difficulty: 'Moderate',
    audience: 'Families of grades 5 to 7 applicants',
    time: '8 to 12 weeks typical prep',
    cost: '$172 to $329',
    faqs: [
      { q: 'How many times can my child take the Middle Level SSAT?', a: 'Middle Level students may take up to six Standard administrations and one Flex test per testing year, more than the Elementary Level allows.' },
      { q: 'Is there a guessing penalty?', a: 'Yes. Wrong answers are penalised on the Middle and Upper Levels, so blind guessing can lower the score; the Elementary Level has no penalty.' },
      { q: 'What is a good Middle Level score?', a: 'There is no pass mark. Competitive independent schools often look for percentiles well above the median, but each sets its own expectations.' },
      { q: 'Can my child take it at home?', a: 'Yes. The Middle Level is offered at schools, Prometric centres and as an online at-home version with proctoring.' }
    ],
    summaryPoints: [
      'SSAT for grades 5 to 7, about three hours',
      'Scaled 440 to 710 per section, 1320 to 2130 total',
      'Wrong answers are penalised; up to six Standard dates a year'
    ],
    relatedSlugs: ['ssat-upper-level', 'ssat-elementary-level', 'character-skills-snapshot'],
    sourceUrl: 'https://www.ssat.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ssat-upper-level',
    body: 'Enrollment Management Association',
    tagline: 'The SSAT level for grades eight through eleven, scored 500 to 800 per section and required by most boarding schools.',
    description: 'The SSAT Upper Level is the version of the Secondary School Admission Test for students in grades eight through eleven and is required by most US boarding schools and many day independent schools. It includes an unscored writing sample, two quantitative sections, one reading section and one verbal section plus an experimental section, with a guessing penalty for wrong answers. Scores scale 500 to 800 per section and 1500 to 2400 total, with percentiles based on the past three admission-year cohorts.',
    quickAnswer: {
      summary: 'The SSAT Upper Level is for grades 8 to 11 and runs about three hours. It scales 500 to 800 per section and 1500 to 2400 total, penalises wrong answers, and costs about 172 dollars at a US Standard date, 242 at Prometric, 258 at home and 329 internationally. It is the main test for boarding school admission.',
      advantages: [
        'Required by most US boarding schools',
        'Percentiles benchmark against recent cohorts',
        'Multiple delivery options including at home',
        'Writing sample sent to schools',
        'Up to six Standard dates per year'
      ]
    },
    roadmap: ['Create the SSAT account', 'Pick Upper Level', 'Choose Standard, Prometric or at-home', 'Use official practice', 'Route scores to schools'],
    prerequisites: 'Open to students in grades 8 through 11. A parent registers the student and selects the level by current grade.',
    examMeta: {
      questions: 'About 167 multiple-choice plus unscored writing',
      time: 'About 3 hours 10 minutes with breaks',
      pass: 'No pass mark; 500 to 800 per section',
      fee: 'US $172 Standard; $242 Prometric; $258 At Home; $329 Intl',
      format: 'Multiple-choice plus unscored writing sample',
      admin: 'Enrollment Management Association'
    },
    topics: [
      { name: 'Quantitative (Math)' },
      { name: 'Verbal' },
      { name: 'Reading' },
      { name: 'Writing sample (unscored)' }
    ],
    examEssentials: [
      ['Grades', '8 to 11'],
      ['Scoring', '500 to 800 per section, 1500 to 2400 total'],
      ['Penalty', 'Wrong answers are penalised'],
      ['Retake', 'Up to 6 Standard plus 1 Flex per year']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: 'About 3 hours' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'US Standard registration', fee: '$172' }, { item: 'Prometric centre', fee: '$242' }, { item: 'At Home', fee: '$258' }, { item: 'International', fee: '$329' }], total: '$172 to $329', footnote: 'Flex, late and change fees apply; fee waivers are available through member schools.' },
    difficulty: 'Challenging',
    audience: 'Families of grades 8 to 11 applicants',
    time: '8 to 12 weeks typical prep',
    cost: '$172 to $329',
    faqs: [
      { q: 'How many times can my child take the Upper Level SSAT?', a: 'Upper Level students may take up to six Standard administrations and one Flex test per testing year.' },
      { q: 'Is there a guessing penalty?', a: 'Yes. Wrong answers are penalised on the Upper and Middle Levels, so strategic guessing matters more than on the Elementary Level.' },
      { q: 'What score do boarding schools want?', a: 'There is no pass mark. Competitive boarding schools often look for strong percentiles, but each school sets its own admission criteria.' },
      { q: 'Can my child take it at home?', a: 'Yes. The Upper Level is offered at schools, Prometric centres and as an online at-home version with proctoring.' }
    ],
    summaryPoints: [
      'SSAT for grades 8 to 11, about three hours',
      'Scaled 500 to 800 per section, 1500 to 2400 total',
      'Main test for US boarding school admission'
    ],
    relatedSlugs: ['ssat-middle-level', 'ssat-elementary-level', 'isee-upper-level'],
    sourceUrl: 'https://www.ssat.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'isee-lower-level',
    body: 'Educational Records Bureau',
    tagline: 'The ISEE level for grades four and five, with verbal, quantitative, reading, mathematics and an essay.',
    description: 'The ISEE Lower Level is the Independent School Entrance Exam version for students in grades four and five. It measures verbal reasoning, quantitative reasoning, reading comprehension and mathematics achievement, and includes an essay sent to schools. The Lower Level takes about two hours and twenty minutes and reports scaled scores of 760 to 940 per section with stanines of 1 to 9. There is no penalty for wrong answers.',
    quickAnswer: {
      summary: 'The ISEE Lower Level is for grades 4 and 5 and runs about two hours and twenty minutes. It covers verbal reasoning, quantitative reasoning, reading and mathematics plus an essay, reports scaled scores of 760 to 940 with stanines, and has no guessing penalty. Registration is about 165 dollars standard or 240 dollars with the premium option.',
      advantages: [
        'Standardized read for grades 4 to 5 applicants',
        'No penalty for wrong answers',
        'Reports stanines and percentiles',
        'Essay sent directly to schools',
        'Accepted by many independent schools'
      ]
    },
    roadmap: ['Create the ERB account', 'Pick Lower Level', 'Choose a test location or at-home', 'Use the official practice guide', 'Send scores to schools'],
    prerequisites: 'Open to students in grades 4 and 5. A parent registers the student and selects the level by the grade the student is entering.',
    examMeta: {
      questions: 'About 127 multiple-choice plus an essay',
      time: '2 hours 20 minutes',
      pass: 'No pass mark; 760 to 940 per section',
      fee: 'About $165 standard; $240 premium; plus $35 by phone',
      format: 'Multiple-choice plus essay',
      admin: 'Educational Records Bureau'
    },
    topics: [
      { name: 'Verbal Reasoning' },
      { name: 'Quantitative Reasoning' },
      { name: 'Reading Comprehension' },
      { name: 'Mathematics Achievement' },
      { name: 'Essay' }
    ],
    examEssentials: [
      ['Grades', '4 and 5'],
      ['Scoring', '760 to 940 per section, stanines 1 to 9'],
      ['Penalty', 'No wrong-answer penalty'],
      ['Retake', 'Once per season, max 3 per year']
    ],
    timeline: [{ stage: 'Study', duration: '6 to 10 weeks' }, { stage: 'Test', duration: '2h 20m' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'Standard registration', fee: '$165' }, { item: 'Premium registration', fee: '$240' }, { item: 'Phone registration', fee: '+$35' }], total: '$165 to $275', footnote: 'At-home and Prometric options may carry different fees; fee waivers are limited through member schools.' },
    difficulty: 'Moderate',
    audience: 'Families of grades 4 to 5 applicants',
    time: '6 to 10 weeks typical prep',
    cost: '$165 to $275',
    faqs: [
      { q: 'How many times can my child take the ISEE?', a: 'A student may take the ISEE once per admission season, for a maximum of three times in a 12-month period, which is stricter than the SSAT rule.' },
      { q: 'Is there a guessing penalty?', a: 'No. The ISEE does not penalise wrong answers, so students should answer every question.' },
      { q: 'What is a good Lower Level score?', a: 'There is no pass mark. Schools review stanines and percentiles alongside the essay and school records.' },
      { q: 'How is the ISEE different from the SSAT?', a: 'Both are independent-school entrance exams, but the ISEE allows only three attempts a year and has no guessing penalty, while the SSAT allows more attempts and penalises wrong answers on Middle and Upper Levels.' }
    ],
    summaryPoints: [
      'ISEE for grades 4 and 5, 2h 20m',
      'Scaled 760 to 940 with stanines, no penalty',
      'Once per season, three times a year maximum'
    ],
    relatedSlugs: ['isee-middle-level', 'isee-upper-level', 'isee-primary-level'],
    sourceUrl: 'https://www.erblearn.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'isee-middle-level',
    body: 'Educational Records Bureau',
    tagline: 'The ISEE level for grades six and seven applying to grades seven and eight at independent schools.',
    description: 'The ISEE Middle Level is the Independent School Entrance Exam version for students in grades six and seven who are applying to grades seven and eight at independent schools. It measures verbal reasoning, quantitative reasoning, reading comprehension and mathematics achievement, and includes an essay sent to schools. The Middle Level takes about two hours and forty minutes and reports scaled scores of 760 to 940 per section with stanines of 1 to 9, and there is no penalty for wrong answers.',
    quickAnswer: {
      summary: 'The ISEE Middle Level is for grades 6 and 7 entering grades 7 and 8, and runs about two hours and forty minutes. It covers verbal reasoning, quantitative reasoning, reading, mathematics and an essay, reports scaled scores of 760 to 940 with stanines, and has no guessing penalty. Registration is about 165 dollars standard or 240 dollars premium.',
      advantages: [
        'Standardized read for grades 6 to 7 applicants',
        'No penalty for wrong answers',
        'Reports stanines and percentiles',
        'Essay sent directly to schools',
        'Accepted by many independent schools'
      ]
    },
    roadmap: ['Create the ERB account', 'Pick Middle Level', 'Choose a test location or at-home', 'Use the official practice guide', 'Send scores to schools'],
    prerequisites: 'Open to students in grades 6 and 7 entering grades 7 and 8. A parent registers the student and selects the level by the entry grade.',
    examMeta: {
      questions: 'About 160 multiple-choice plus an essay',
      time: '2 hours 40 minutes',
      pass: 'No pass mark; 760 to 940 per section',
      fee: 'About $165 standard; $240 premium; plus $35 by phone',
      format: 'Multiple-choice plus essay',
      admin: 'Educational Records Bureau'
    },
    topics: [
      { name: 'Verbal Reasoning' },
      { name: 'Quantitative Reasoning' },
      { name: 'Reading Comprehension' },
      { name: 'Mathematics Achievement' },
      { name: 'Essay' }
    ],
    examEssentials: [
      ['Grades', '6 and 7 (entering 7 and 8)'],
      ['Scoring', '760 to 940 per section, stanines 1 to 9'],
      ['Penalty', 'No wrong-answer penalty'],
      ['Retake', 'Once per season, max 3 per year']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: '2h 40m' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'Standard registration', fee: '$165' }, { item: 'Premium registration', fee: '$240' }, { item: 'Phone registration', fee: '+$35' }], total: '$165 to $275', footnote: 'At-home and Prometric options may carry different fees; fee waivers are limited through member schools.' },
    difficulty: 'Moderate',
    audience: 'Families of grades 6 to 7 applicants',
    time: '8 to 12 weeks typical prep',
    cost: '$165 to $275',
    faqs: [
      { q: 'How many times can my child take the ISEE?', a: 'A student may take the ISEE once per admission season, up to three times in a 12-month period.' },
      { q: 'Is there a guessing penalty?', a: 'No. The ISEE does not penalise wrong answers, so students should answer every question even when unsure.' },
      { q: 'What score do schools want?', a: 'There is no pass mark; schools review stanines and percentiles with the essay and records.' },
      { q: 'How is the Middle Level different from the Lower Level?', a: 'The content and length differ by age; the Middle Level is for grades 6 and 7 entering 7 and 8 and is longer than the Lower Level.' }
    ],
    summaryPoints: [
      'ISEE for grades 6 to 7, 2h 40m',
      'Scaled 760 to 940 with stanines, no penalty',
      'Once per season, three times a year maximum'
    ],
    relatedSlugs: ['isee-lower-level', 'isee-upper-level', 'isee-primary-level'],
    sourceUrl: 'https://www.erblearn.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'isee-primary-level',
    body: 'Educational Records Bureau',
    tagline: 'The shortest ISEE level, given on computer to young applicants in grades two through four with a picture prompt.',
    description: 'The ISEE Primary Level is the shortest version of the Independent School Entrance Exam, given on computer to young applicants in grades two through four. It uses a picture prompt and brief auditory and reading-based tasks rather than a long essay, making it appropriate for early learners. The Primary Level takes about one hour, reports scaled scores of 760 to 940, and there is no penalty for wrong answers.',
    quickAnswer: {
      summary: 'The ISEE Primary Level is for grades 2 to 4 and takes about one hour on computer. It uses a picture prompt and short tasks suited to young children, reports scaled scores of 760 to 940, and has no guessing penalty. At-home registration is about 130 dollars through the school or 185 dollars through ERB.',
      advantages: [
        'Built for young grades 2 to 4 applicants',
        'Computer delivery with a picture prompt',
        'Short, about one hour',
        'No penalty for wrong answers',
        'Gentle first entrance-exam experience'
      ]
    },
    roadmap: ['Create the ERB account', 'Pick Primary Level', 'Choose a test site or at-home', 'Familiarise with the format', 'Send scores to schools'],
    prerequisites: 'Open to students in grades 2 through 4. A parent registers the student and selects the level by the entry grade.',
    examMeta: {
      questions: 'Brief auditory, reading and math tasks plus picture prompt',
      time: 'About 1 hour',
      pass: 'No pass mark; 760 to 940',
      fee: 'About $130 school-based; $185 ERB at-home',
      format: 'Computer-delivered with picture prompt',
      admin: 'Educational Records Bureau'
    },
    topics: [
      { name: 'Auditory Reasoning' },
      { name: 'Reading' },
      { name: 'Mathematics' },
      { name: 'Picture Prompt' }
    ],
    examEssentials: [
      ['Grades', '2 to 4'],
      ['Scoring', '760 to 940'],
      ['Penalty', 'No wrong-answer penalty'],
      ['Length', 'About 1 hour']
    ],
    timeline: [{ stage: 'Prepare', duration: 'Light familiarisation' }, { stage: 'Test', duration: 'About 1 hour' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'School-based registration', fee: '$130' }, { item: 'ERB at-home registration', fee: '$185' }], total: '$130 to $185', footnote: 'Fees vary by arrangement with the member school; fee waivers are limited.' },
    difficulty: 'Light',
    audience: 'Families of grades 2 to 4 applicants',
    time: 'Light preparation',
    cost: '$130 to $185',
    faqs: [
      { q: 'How many times can my child take the Primary Level ISEE?', a: 'As with other ISEE levels, a student may test once per admission season, up to three times in a year.' },
      { q: 'Is there a guessing penalty?', a: 'No. The Primary Level does not penalise wrong answers.' },
      { q: 'Does the Primary Level have an essay?', a: 'No. The Primary Level uses a picture prompt and short tasks rather than the essay used on the Lower, Middle and Upper Levels.' },
      { q: 'How is it given?', a: 'The Primary Level is delivered on a computer at a test site or at home with parental supervision.' }
    ],
    summaryPoints: [
      'ISEE for grades 2 to 4, about one hour',
      'Computer delivery with a picture prompt',
      'Scaled 760 to 940, no guessing penalty'
    ],
    relatedSlugs: ['isee-lower-level', 'isee-middle-level', 'isee-upper-level'],
    sourceUrl: 'https://www.erblearn.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'isee-upper-level',
    body: 'Educational Records Bureau',
    tagline: 'The ISEE level for grades eight through eleven, reported in stanines with no penalty for wrong answers.',
    description: 'The ISEE Upper Level is the Independent School Entrance Exam version for students in grades eight through eleven. It measures verbal reasoning, quantitative reasoning, reading comprehension and mathematics achievement, and includes an essay sent to schools. The Upper Level takes about two hours and forty minutes and reports scaled scores of 760 to 940 per section with stanines of 1 to 9. There is no penalty for wrong answers, which distinguishes it from the SSAT Upper Level.',
    quickAnswer: {
      summary: 'The ISEE Upper Level is for grades 8 to 11 and runs about two hours and forty minutes. It covers verbal reasoning, quantitative reasoning, reading, mathematics and an essay, reports scaled scores of 760 to 940 with stanines, and has no guessing penalty. Registration is about 165 dollars standard or 240 dollars premium.',
      advantages: [
        'Standardized read for grades 8 to 11 applicants',
        'No penalty for wrong answers',
        'Reports stanines and percentiles',
        'Essay sent directly to schools',
        'Accepted by many independent schools'
      ]
    },
    roadmap: ['Create the ERB account', 'Pick Upper Level', 'Choose a test location or at-home', 'Use the official practice guide', 'Send scores to schools'],
    prerequisites: 'Open to students in grades 8 through 11. A parent registers the student and selects the level by the entry grade.',
    examMeta: {
      questions: 'About 160 multiple-choice plus an essay',
      time: '2 hours 40 minutes',
      pass: 'No pass mark; 760 to 940 per section',
      fee: 'About $165 standard; $240 premium; plus $35 by phone',
      format: 'Multiple-choice plus essay',
      admin: 'Educational Records Bureau'
    },
    topics: [
      { name: 'Verbal Reasoning' },
      { name: 'Quantitative Reasoning' },
      { name: 'Reading Comprehension' },
      { name: 'Mathematics Achievement' },
      { name: 'Essay' }
    ],
    examEssentials: [
      ['Grades', '8 to 11'],
      ['Scoring', '760 to 940 per section, stanines 1 to 9'],
      ['Penalty', 'No wrong-answer penalty'],
      ['Retake', 'Once per season, max 3 per year']
    ],
    timeline: [{ stage: 'Study', duration: '8 to 12 weeks' }, { stage: 'Test', duration: '2h 40m' }, { stage: 'Scores', duration: 'A few days to weeks' }],
    costBreakdown: { items: [{ item: 'Standard registration', fee: '$165' }, { item: 'Premium registration', fee: '$240' }, { item: 'Phone registration', fee: '+$35' }], total: '$165 to $275', footnote: 'At-home and Prometric options may carry different fees; fee waivers are limited through member schools.' },
    difficulty: 'Challenging',
    audience: 'Families of grades 8 to 11 applicants',
    time: '8 to 12 weeks typical prep',
    cost: '$165 to $275',
    faqs: [
      { q: 'How many times can my child take the ISEE?', a: 'A student may take the ISEE once per admission season, up to three times in a 12-month period.' },
      { q: 'Is there a guessing penalty?', a: 'No. The ISEE does not penalise wrong answers, which is a key difference from the SSAT Upper Level.' },
      { q: 'What score do schools want?', a: 'There is no pass mark; schools review stanines and percentiles with the essay and records.' },
      { q: 'How is the Upper Level different from the SSAT Upper Level?', a: 'Both serve grades 8 to 11, but the ISEE has no guessing penalty and limits testing to three times a year, while the SSAT allows more attempts and penalises wrong answers.' }
    ],
    summaryPoints: [
      'ISEE for grades 8 to 11, 2h 40m',
      'Scaled 760 to 940 with stanines, no penalty',
      'Once per season, three times a year maximum'
    ],
    relatedSlugs: ['isee-lower-level', 'isee-middle-level', 'ssat-upper-level'],
    sourceUrl: 'https://www.erblearn.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'afqt',
    body: 'United States Department of Defense',
    tagline: 'The percentile score from four ASVAB subtests that decides US military enlistment eligibility.',
    description: 'The Armed Forces Qualification Test (AFQT) is not a separate exam but a percentile score derived from four ASVAB subtests: word knowledge, paragraph comprehension, arithmetic reasoning and mathematics knowledge. The Department of Defense uses the AFQT to decide whether an applicant is eligible to enlist and into which category. It ranges from 1 to 99, and each branch sets its own minimum, typically from 31 to 36, with higher scores opening more career fields.',
    quickAnswer: {
      summary: 'The AFQT is the enlistment eligibility score built from four ASVAB subtests, reported as a percentile from 1 to 99. It is free because it comes from the ASVAB, and each military branch sets a minimum, usually 31 to 36, with higher scores qualifying for more jobs.',
      advantages: [
        'Determines basic enlistment eligibility',
        'Reported as a clear 1 to 99 percentile',
        'Free because it is part of the ASVAB',
        'Higher scores unlock more career fields',
        'Same underlying test across all branches'
      ]
    },
    roadmap: ['Take the ASVAB', 'Receive the AFQT percentile', 'Compare with branch minimums', 'Qualify for jobs by line scores', 'Work with a recruiter'],
    prerequisites: 'There is no standalone AFQT registration; you earn the score by taking the ASVAB through a recruiter or the Career Exploration Program.',
    examMeta: {
      questions: 'Derived from 4 ASVAB subtests',
      time: 'Part of the full ASVAB administration',
      pass: 'No pass mark; percentile 1 to 99, branch minimums vary',
      fee: 'Free (from the ASVAB)',
      format: 'Score derived from ASVAB subtests',
      admin: 'United States Department of Defense'
    },
    topics: [
      { name: 'Word Knowledge' },
      { name: 'Paragraph Comprehension' },
      { name: 'Arithmetic Reasoning' },
      { name: 'Mathematics Knowledge' }
    ],
    examEssentials: [
      ['Range', 'Percentile 1 to 99'],
      ['Source', 'Four ASVAB subtests'],
      ['Branch minimums', 'Typically 31 to 36'],
      ['Use', 'Enlistment eligibility gate']
    ],
    timeline: [{ stage: 'Take ASVAB', duration: 'Test day' }, { stage: 'AFQT issued', duration: 'With scores' }, { stage: 'Recruiter review', duration: 'Ongoing' }],
    costBreakdown: { items: [{ item: 'Included with the ASVAB', fee: 'Free' }], total: 'Free', footnote: 'The AFQT is a derived score, so there is no separate fee.' },
    difficulty: 'Moderate',
    audience: 'US military enlistment applicants',
    time: 'No separate test',
    cost: 'Free',
    faqs: [
      { q: 'Is the AFQT a separate test?', a: 'No. The AFQT is a percentile score calculated from four ASVAB subtests; you earn it by taking the ASVAB itself.' },
      { q: 'What AFQT do I need to enlist?', a: 'Each branch sets a minimum; Army is typically 31, while Navy, Marines, Air Force and Coast Guard are usually 35 or 36, with some jobs requiring more.' },
      { q: 'Does a higher AFQT help?', a: 'Yes. A higher AFQT percentile broadens the career fields you can enter and may support enlistment incentives.' },
      { q: 'How long is the AFQT valid?', a: 'ASVAB scores, including the AFQT, are valid for two years for enlistment purposes.' }
    ],
    summaryPoints: [
      'Derived percentile score from four ASVAB subtests',
      'Ranges 1 to 99; branch minimums about 31 to 36',
      'Free because it comes from the ASVAB'
    ],
    relatedSlugs: ['asvab', 'asvab-career-exploration-program', 'picat'],
    sourceUrl: 'https://www.officialasvab.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'asvab',
    body: 'United States Department of Defense',
    tagline: 'The free multiple-aptitude battery that decides US military enlistment eligibility and job qualification.',
    description: 'The Armed Services Vocational Aptitude Battery (ASVAB) is the multiple-aptitude test used by all US military branches to determine enlistment eligibility and qualification for military occupations. It is free, delivered at Military Entrance Processing Stations and mobile sites, and covers ten subtests that feed both the AFQT eligibility score and composite line scores for specific jobs. The computer-adaptive version has about 135 questions and takes roughly two and a half to three hours.',
    quickAnswer: {
      summary: 'The ASVAB is a free, multiple-aptitude enlistment test given at MEPS, with about 135 computer-adaptive questions over roughly two and a half to three hours. It produces the AFQT eligibility percentile and composite line scores that match you to military jobs, and it may be retaken after 30 days, then 30 days, then every six months.',
      advantages: [
        'Free to all enlistment applicants',
        'Determines both eligibility and job match',
        'Accepted by every US military branch',
        'Computer-adaptive and efficiently timed',
        'Also used by the school Career Exploration Program'
      ]
    },
    roadmap: ['Contact a recruiter', 'Schedule the ASVAB at MEPS', 'Prepare with the official guide', 'Test and receive line scores', 'Match jobs with a recruiter'],
    prerequisites: 'Open to enlistment applicants working with a branch recruiter, and to students through the school-based Career Exploration Program. Minimum age and residency rules apply per branch.',
    examMeta: {
      questions: 'About 135 questions across 10 subtests (CAT-ASVAB)',
      time: 'About 2.5 to 3 hours',
      pass: 'No pass mark; AFQT percentile 1 to 99',
      fee: 'Free',
      format: 'Multiple-choice, computer-adaptive or paper',
      admin: 'United States Department of Defense'
    },
    topics: [
      { name: 'General Science' },
      { name: 'Arithmetic Reasoning' },
      { name: 'Word Knowledge' },
      { name: 'Paragraph Comprehension' },
      { name: 'Mathematics Knowledge' }
    ],
    examEssentials: [
      ['Subtests', '10, feeding AFQT and line scores'],
      ['AFQT', 'Percentile 1 to 99 from 4 subtests'],
      ['Cost', 'Free for enlistment applicants'],
      ['Retake', '30 days, then 30 days, then 6 months']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 6 weeks' }, { stage: 'Test', duration: 'About 3 hours' }, { stage: 'Scores', duration: 'Same or next day' }],
    costBreakdown: { items: [{ item: 'Enlistment ASVAB', fee: 'Free' }], total: 'Free', footnote: 'There is no fee for the enlistment ASVAB or the school Career Exploration Program.' },
    difficulty: 'Moderate',
    audience: 'US military enlistment applicants and students',
    time: '2 to 6 weeks typical prep',
    cost: 'Free',
    faqs: [
      { q: 'How much does the ASVAB cost?', a: 'Nothing. The enlistment ASVAB and the school Career Exploration Program are free to test takers.' },
      { q: 'How many times can I take the ASVAB?', a: 'After a first attempt you may retake it after 30 days, then 30 days again, and after that every six months.' },
      { q: 'What is the difference between AFQT and line scores?', a: 'The AFQT decides eligibility; the line scores, built from various subtests, decide which military jobs you qualify for.' },
      { q: 'How long are ASVAB scores valid?', a: 'Enlistment scores are valid for two years from the test date.' }
    ],
    summaryPoints: [
      'Free multiple-aptitude enlistment battery',
      'About 135 questions over 2.5 to 3 hours',
      'Drives AFQT eligibility and job line scores'
    ],
    relatedSlugs: ['afqt', 'asvab-career-exploration-program', 'picat'],
    sourceUrl: 'https://www.officialasvab.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'asvab-career-exploration-program',
    body: 'United States Department of Defense',
    tagline: 'The school-based ASVAB paired with interest inventories for student career planning.',
    description: 'The ASVAB Career Exploration Program (CEP) brings the ASVAB into high schools and postsecondary institutions as a free career-planning tool rather than an enlistment gate. Students take the same aptitude subtests and then pair the results with interest inventories and work-value surveys to explore civilian and military career paths. Scores are not sent to recruiters unless the student later chooses to enlist, and the program is widely used in US counseling offices.',
    quickAnswer: {
      summary: 'The ASVAB Career Exploration Program is the school-based version of the ASVAB, offered free to high school and postsecondary students for career planning. It pairs aptitude scores with interest inventories and is not shared with recruiters unless the student later enlists.',
      advantages: [
        'Free career planning for students',
        'Pairs aptitude with interest inventories',
        'Not an enlistment commitment',
        'Uses the same proven ASVAB subtests',
        'Widely available in US schools'
      ]
    },
    roadmap: ['Ask the school counselor', 'Sign up for the CEP', 'Take the ASVAB at school', 'Explore careers with the tools', 'Decide on next steps'],
    prerequisites: 'Open to high school and postsecondary students through a participating school; there is no enlistment commitment to participate.',
    examMeta: {
      questions: 'Same aptitude subtests as the ASVAB',
      time: 'About 2.5 to 3 hours',
      pass: 'No pass mark; reports aptitude and interest profiles',
      fee: 'Free through the school',
      format: 'Multiple-choice, group-administered',
      admin: 'United States Department of Defense'
    },
    topics: [
      { name: 'Aptitude subtests' },
      { name: 'Interest inventory' },
      { name: 'Work-values survey' },
      { name: 'Career exploration' }
    ],
    examEssentials: [
      ['Audience', 'High school and postsecondary students'],
      ['Use', 'Career planning, not enlistment'],
      ['Cost', 'Free through schools'],
      ['Privacy', 'Not sent to recruiters by default']
    ],
    timeline: [{ stage: 'School administers', duration: 'About 3 hours' }, { stage: 'Explore results', duration: 'Counseling sessions' }, { stage: 'Plan', duration: 'Ongoing' }],
    costBreakdown: { items: [{ item: 'School-based CEP', fee: 'Free' }], total: 'Free', footnote: 'The CEP is provided to schools at no cost to students.' },
    difficulty: 'Light',
    audience: 'Students exploring careers',
    time: 'About 3 hours',
    cost: 'Free',
    faqs: [
      { q: 'Does the CEP commit my child to the military?', a: 'No. The CEP is a career-exploration tool; results are not sent to recruiters unless the student later chooses to enlist.' },
      { q: 'How is the CEP different from the enlistment ASVAB?', a: 'The content is the same, but the CEP is school-based and paired with interest tools, while the enlistment ASVAB is taken at MEPS for qualification.' },
      { q: 'What grades take the CEP?', a: 'It is generally offered to high school students, often in grades 10 through 12, and to some postsecondary students.' },
      { q: 'Is there a fee?', a: 'No. The CEP is provided to participating schools at no cost to students.' }
    ],
    summaryPoints: [
      'School-based ASVAB for career planning',
      'Free and not an enlistment commitment',
      'Pairs aptitude with interest inventories'
    ],
    relatedSlugs: ['asvab', 'afqt', 'picat'],
    sourceUrl: 'https://www.asvabprogram.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'picat',
    body: 'United States Department of Defense',
    tagline: 'An unproctored at-home version of the ASVAB confirmed by a short MEPS verification test.',
    description: 'The Pending Internet Computerized Adaptive Test (PiCAT) is an unproctored, at-home version of the ASVAB that a recruiter can authorize before a candidate visits a Military Entrance Processing Station. After finishing the PiCAT at home, the candidate must take a short verification test at MEPS; if the verification is passed, the PiCAT scores become the official ASVAB scores. If verification fails, the candidate takes the full ASVAB instead.',
    quickAnswer: {
      summary: 'The PiCAT is an unproctored at-home version of the ASVAB arranged by a recruiter. After completing it, you confirm the result with a short verification test at MEPS; passing verification makes the PiCAT your official score, while failing triggers the full ASVAB.',
      advantages: [
        'Take the ASVAB at home at your own pace',
        'Avoids a full MEPS sitting if verified',
        'Same content and scoring as the ASVAB',
        'Free through the enlistment process',
        'Less test-day pressure'
      ]
    },
    roadmap: ['Talk to a recruiter', 'Get PiCAT authorization', 'Complete it at home', 'Verify at MEPS', 'Receive official scores'],
    prerequisites: 'Offered to enlistment applicants by a recruiter; it is not available through the school Career Exploration Program and requires a later MEPS visit.',
    examMeta: {
      questions: 'Same length as the CAT-ASVAB',
      time: 'About 2.5 to 3 hours at home',
      pass: 'No pass mark; AFQT percentile 1 to 99',
      fee: 'Free',
      format: 'Unproctored at-home, verified at MEPS',
      admin: 'United States Department of Defense'
    },
    topics: [
      { name: 'Same ASVAB subtests' },
      { name: 'MEPS verification' }
    ],
    examEssentials: [
      ['Delivery', 'Unproctored at home'],
      ['Confirmation', 'Short verification test at MEPS'],
      ['Cost', 'Free'],
      ['Fallback', 'Failed verification means full ASVAB']
    ],
    timeline: [{ stage: 'At-home test', duration: 'About 3 hours' }, { stage: 'MEPS verify', duration: 'Short session' }, { stage: 'Scores', duration: 'Official if verified' }],
    costBreakdown: { items: [{ item: 'PiCAT with MEPS verification', fee: 'Free' }], total: 'Free', footnote: 'The PiCAT is part of the free enlistment process arranged by a recruiter.' },
    difficulty: 'Moderate',
    audience: 'US military enlistment applicants',
    time: 'About 3 hours at home',
    cost: 'Free',
    faqs: [
      { q: 'Is the PiCAT the same as the ASVAB?', a: 'It covers the same content and scoring, but it is taken unproctored at home and then confirmed by a short verification test at MEPS.' },
      { q: 'What happens if I fail verification?', a: 'If the verification test does not confirm your PiCAT, you take the full ASVAB at MEPS and those scores are used instead.' },
      { q: 'How much does the PiCAT cost?', a: 'It is free as part of the enlistment process arranged through a recruiter.' },
      { q: 'Can students take the PiCAT at school?', a: 'No. The PiCAT is for enlistment applicants through a recruiter; students use the ASVAB Career Exploration Program instead.' }
    ],
    summaryPoints: [
      'Unproctored at-home ASVAB confirmed at MEPS',
      'Free through the enlistment process',
      'Failed verification triggers the full ASVAB'
    ],
    relatedSlugs: ['asvab', 'afqt', 'asvab-career-exploration-program'],
    sourceUrl: 'https://www.officialasvab.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cogat',
    body: 'Riverside Insights',
    tagline: 'A group reasoning test with verbal, quantitative and nonverbal batteries for gifted screening.',
    description: 'The Cognitive Abilities Test (CogAT) is a group-administered measure of reasoning ability used widely by US schools for gifted and talented screening. It has three batteries, verbal, quantitative and nonverbal, each with multiple subtests, and is given in levels matched to kindergarten through grade 12. Schools often pair CogAT with an achievement battery such as the Iowa Assessments to separate reasoning ability from learned content.',
    quickAnswer: {
      summary: 'The CogAT is a group-administered reasoning test with verbal, quantitative and nonverbal batteries used mainly for K-12 gifted screening. Schools administer it in levels from kindergarten through grade 12, it takes roughly one to three hours depending on the level, and it reports standard scores and percentiles rather than a pass mark.',
      advantages: [
        'Group administration is efficient for schools',
        'Three batteries cover varied reasoning',
        'Common gifted-screening instrument',
        'Reports standard scores and percentiles',
        'Often paired with achievement tests'
      ]
    },
    roadmap: ['Confirm the school uses CogAT', 'Note the testing window', 'Review sample item types', 'School administers the test', 'Receive the ability profile'],
    prerequisites: 'Given by schools to students in kindergarten through grade 12; there is no individual registration. Levels match the student grade.',
    examMeta: {
      questions: 'Varies by level and form, roughly 118 to 176 items',
      time: 'About 1 to 3 hours depending on level',
      pass: 'No pass mark; standard score mean 100, SD 16',
      fee: 'Administered by schools; no public fee',
      format: 'Group-administered, multiple-choice',
      admin: 'Riverside Insights; given by schools'
    },
    topics: [
      { name: 'Verbal battery' },
      { name: 'Quantitative battery' },
      { name: 'Nonverbal battery' }
    ],
    examEssentials: [
      ['Batteries', 'Verbal, quantitative, nonverbal'],
      ['Levels', 'K through grade 12'],
      ['Scoring', 'Standard score mean 100, SD 16'],
      ['Use', 'Gifted screening, ability profile']
    ],
    timeline: [{ stage: 'School administers', duration: '1 to 3 hours' }, { stage: 'Scoring', duration: 'Automated' }, { stage: 'Report', duration: 'To family per school' }],
    costBreakdown: { items: [{ item: 'Administered by the school', fee: 'No public fee' }], total: 'No public fee', footnote: 'Schools license CogAT; families are not billed by Riverside for the administration.' },
    difficulty: 'Moderate',
    audience: 'K-12 students screened for gifted programs',
    time: '1 to 3 hours depending on level',
    cost: 'No public fee',
    faqs: [
      { q: 'Can I register my child for the CogAT?', a: 'No. The CogAT is administered by schools during a testing window, and families do not pay a separate public fee.' },
      { q: 'Is there a passing score?', a: 'No. The CogAT reports a standard score and percentile; the school sets any gifted-program cutoff.' },
      { q: 'Why pair CogAT with Iowa?', a: 'CogAT measures reasoning while the Iowa Assessments measure achievement, so together they separate aptitude from learned content for gifted identification.' },
      { q: 'How is it different from the NNAT3?', a: 'The CogAT has verbal, quantitative and nonverbal batteries, while the NNAT3 is entirely nonverbal and language-free.' }
    ],
    summaryPoints: [
      'Group reasoning test with three batteries',
      'Used for K-12 gifted screening',
      'Reports standard scores and percentiles'
    ],
    relatedSlugs: ['iowa-assessments', 'nnat3', 'olsat-8'],
    sourceUrl: 'https://www.riversideinsights.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'iowa-assessments',
    body: 'Riverside Insights',
    tagline: 'A nationally normed achievement battery used by private schools and homeschool families.',
    description: 'The Iowa Assessments are a nationally normed achievement battery covering reading, written expression, mathematics, science and social studies, used by private schools and homeschool families to document grade-level mastery. The test is group-administered in levels from kindergarten through grade 12 and reports national percentiles and grade equivalents. It is often paired with the CogAT to support gifted identification and academic placement.',
    quickAnswer: {
      summary: 'The Iowa Assessments are a nationally normed achievement battery for kindergarten through grade 12, covering reading, writing, math, science and social studies. Schools and homeschool families use it to track grade-level progress, it is group-administered over several hours, and it reports national percentiles and grade equivalents rather than a pass mark.',
      advantages: [
        'Nationally normed achievement data',
        'Broad subject coverage in one battery',
        'Used by private schools and homeschoolers',
        'Reports percentiles and grade equivalents',
        'Pairs well with ability tests'
      ]
    },
    roadmap: ['Confirm the school or program requires it', 'Note the testing window', 'Review subject areas', 'School or co-op administers the test', 'Receive the achievement report'],
    prerequisites: 'Given by schools or homeschool groups to students in kindergarten through grade 12; there is no individual registration in most cases.',
    examMeta: {
      questions: 'Varies by level and subject battery',
      time: 'Several hours across subtests',
      pass: 'No pass mark; national percentile and grade equivalent',
      fee: 'Administered by schools or co-ops; no public fee',
      format: 'Group-administered, multiple-choice',
      admin: 'Riverside Insights; given by schools'
    },
    topics: [
      { name: 'Reading' },
      { name: 'Written Expression' },
      { name: 'Mathematics' },
      { name: 'Science' },
      { name: 'Social Studies' }
    ],
    examEssentials: [
      ['Coverage', 'Reading, writing, math, science, social studies'],
      ['Levels', 'K through grade 12'],
      ['Scoring', 'National percentile, grade equivalent'],
      ['Use', 'Achievement and placement documentation']
    ],
    timeline: [{ stage: 'School administers', duration: 'Several hours' }, { stage: 'Scoring', duration: 'Automated' }, { stage: 'Report', duration: 'To family per school' }],
    costBreakdown: { items: [{ item: 'Administered by school or co-op', fee: 'No public fee' }], total: 'No public fee', footnote: 'Schools and homeschool co-ops license the Iowa Assessments; families are not billed by Riverside directly.' },
    difficulty: 'Moderate',
    audience: 'K-12 students in private or homeschool settings',
    time: 'Several hours across subtests',
    cost: 'No public fee',
    faqs: [
      { q: 'Can homeschool families use the Iowa Assessments?', a: 'Yes. Many homeschool co-ops and private schools administer the Iowa Assessments to document grade-level achievement.' },
      { q: 'Is there a passing score?', a: 'No. It reports national percentiles and grade equivalents; the school or family interprets the result against expectations.' },
      { q: 'How is it different from the CogAT?', a: 'The Iowa Assessments measure achievement of learned content, while the CogAT measures reasoning ability. Schools often use both.' },
      { q: 'How long does it take?', a: 'Administration spans several hours across the subject subtests, often split across more than one sitting depending on the level.' }
    ],
    summaryPoints: [
      'Nationally normed K-12 achievement battery',
      'Covers reading, writing, math, science and social studies',
      'Reports percentiles and grade equivalents'
    ],
    relatedSlugs: ['cogat', 'stanford-achievement-test-10', 'stanford-binet-5'],
    sourceUrl: 'https://www.riversideinsights.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'stanford-binet-5',
    body: 'Riverside Insights',
    tagline: 'An individually administered IQ test accepted by gifted programs and high-IQ societies.',
    description: 'The Stanford-Binet Intelligence Scales, Fifth Edition (SB5) is an individually administered intelligence test for ages 2 through 85 plus, covering five cognitive factors. A qualified examiner gives the subtests in about 45 to 75 minutes, and many gifted programs and high-IQ societies accept the Full Scale IQ as cognitive evidence. It reports a mean of 100 with a standard deviation of 15 and yields a profile of strengths.',
    quickAnswer: {
      summary: 'The Stanford-Binet 5 is an individually administered IQ test for ages 2 to 85 plus, given by a qualified psychologist in about 45 to 75 minutes. It produces a Full Scale IQ with a mean of 100 and is accepted by gifted programs and high-IQ societies as cognitive evidence.',
      advantages: [
        'Very wide age range, 2 to 85 plus',
        'Individually tailored administration',
        'Accepted by gifted programs and IQ societies',
        'Reports FSIQ and factor scores',
        'Strong clinical and admissions track record'
      ]
    },
    roadmap: ['Ask the school which IQ test it accepts', 'Book a licensed psychologist', 'Complete the 45 to 75 minute testing', 'Receive the full report', 'Submit it with the application'],
    prerequisites: 'For ages 2 through 85 plus; administration is restricted to qualified examiners. There is no formal gate other than the age range.',
    examMeta: {
      questions: 'Subtests across five cognitive factors',
      time: '45 to 75 minutes',
      pass: 'No pass mark; FSIQ mean 100, SD 15',
      fee: 'Administered by a qualified professional',
      format: 'Individually administered, oral and nonverbal',
      admin: 'Riverside Insights; given by psychologists'
    },
    topics: [
      { name: 'Fluid Reasoning' },
      { name: 'Knowledge' },
      { name: 'Quantitative Reasoning' },
      { name: 'Visual-Spatial Processing' },
      { name: 'Working Memory' }
    ],
    examEssentials: [
      ['Age range', '2 to 85 plus'],
      ['Scoring', 'FSIQ mean 100, SD 15'],
      ['Administration', 'Individually by a psychologist'],
      ['Use', 'Gifted evidence, IQ societies']
    ],
    timeline: [{ stage: 'Referral', duration: 'Per school or clinician' }, { stage: 'Testing', duration: '45 to 75 minutes' }, { stage: 'Report', duration: 'Same or next session' }],
    costBreakdown: { items: [{ item: 'Professional administration (varies by provider)', fee: 'Varies' }], total: 'Varies', footnote: 'The SB5 is sold to qualified purchasers; families pay the administering psychologist, not Riverside directly.' },
    difficulty: 'Light',
    audience: 'Families and adults needing an IQ evaluation',
    time: '45 to 75 minutes on the test day',
    cost: 'Varies by provider',
    faqs: [
      { q: 'Who can administer the Stanford-Binet 5?', a: 'Only a qualified examiner, usually a school or licensed psychologist, may administer the SB5.' },
      { q: 'Is there a passing score?', a: 'No. It reports a Full Scale IQ and factor scores; schools or societies interpret the result against their own criteria.' },
      { q: 'How is it different from the WISC-V?', a: 'The SB5 spans ages 2 to 85 plus, while the WISC-V is for ages 6 to 16, so the SB5 serves a much wider age range.' },
      { q: 'Why do high-IQ societies accept it?', a: 'Societies such as Mensa accept the SB5 Full Scale IQ because it is a standardised, individually administered measure with a well-established scale.' }
    ],
    summaryPoints: [
      'Individually administered IQ test, ages 2 to 85 plus',
      'Produces FSIQ with a mean of 100',
      'Accepted for gifted evidence and IQ societies'
    ],
    relatedSlugs: ['wisc-v', 'kbit-2', 'cogat'],
    sourceUrl: 'https://www.riversideinsights.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cambridge-b2-first',
    body: 'Cambridge University Press and Assessment',
    tagline: 'An upper-intermediate Cambridge English qualification at CEFR B2 for university and work proof.',
    description: 'Cambridge English B2 First, also called the First Certificate in English, is a CEFR B2 qualification that proves a candidate can use everyday written and spoken English for work and study. It is delivered through authorised centres in four papers, Reading and Use of English, Writing, Listening and Speaking, over about three and a half hours. Many US institutions accept B2 First for English proficiency, and the certificate is valid for life.',
    quickAnswer: {
      summary: 'B2 First is a CEFR B2 Cambridge English exam taken at an authorised centre in four papers over about three and a half hours. It proves upper-intermediate English for study and work, reports on the Cambridge English Scale at 160 to 179, and the certificate never expires.',
      advantages: [
        'Globally recognised B2 qualification',
        'Accepted by some US universities',
        'Certificate valid for life',
        'Four papers cover real communication',
        'Clear CEFR-linked score'
      ]
    },
    roadmap: ['Choose B2 First level', 'Find an authorised centre', 'Pay the local fee', 'Prepare with official papers', 'Sit the exam and await results'],
    prerequisites: 'Open to any candidate at the right level; there is no formal eligibility gate, but centres may advise a level check first.',
    examMeta: {
      questions: 'Four papers: Reading and Use of English, Writing, Listening, Speaking',
      time: 'About 3 hours 30 minutes',
      pass: 'No pass mark; Cambridge English Scale 160 to 179 (B2)',
      fee: 'About $170 to $220 (varies by country)',
      format: 'Paper-based or computer-based at a centre',
      admin: 'Cambridge University Press and Assessment'
    },
    topics: [
      { name: 'Reading and Use of English' },
      { name: 'Writing' },
      { name: 'Listening' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['CEFR', 'B2'],
      ['Scale', '160 to 179'],
      ['Papers', 'Four skills plus Use of English'],
      ['Validity', 'Lifetime certificate']
    ],
    timeline: [{ stage: 'Prepare', duration: '4 to 12 weeks' }, { stage: 'Test', duration: 'About 3.5 hours' }, { stage: 'Results', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Exam fee (local centre)', fee: '$170 to $220' }, { item: 'Preparation materials', fee: 'Optional' }], total: '$170 to $220', footnote: 'Centres set local fees; some add a small administration charge.' },
    difficulty: 'Moderate',
    audience: 'University and work English-proficiency candidates',
    time: '4 to 12 weeks typical prep',
    cost: '$170 to $220',
    faqs: [
      { q: 'Does the B2 First certificate expire?', a: 'No. Cambridge English certificates are valid for life and do not require renewal, though a school may prefer a recent result.' },
      { q: 'Is B2 First accepted by US universities?', a: 'Some US institutions accept B2 First for English proficiency, but each school sets its own minimum, so confirm before booking.' },
      { q: 'How is it scored?', a: 'It reports on the Cambridge English Scale, with B2 at 160 to 179 and an overall CEFR level.' },
      { q: 'How long does the test take?', a: 'The four papers take about three and a half hours, usually across a single test day with the speaking test scheduled separately.' }
    ],
    summaryPoints: [
      'CEFR B2 Cambridge English qualification',
      'Four papers over about 3.5 hours',
      'Scale 160 to 179, lifetime certificate'
    ],
    relatedSlugs: ['cambridge-c1-advanced', 'cambridge-c2-proficiency', 'ielts-academic'],
    sourceUrl: 'https://www.cambridgeenglish.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cambridge-c1-advanced',
    body: 'Cambridge University Press and Assessment',
    tagline: 'A CEFR C1 Cambridge English qualification accepted by many US universities.',
    description: 'Cambridge English C1 Advanced, formerly the Certificate in Advanced English, is a CEFR C1 qualification proving high-level English for academic and professional use. It is delivered at authorised centres in four papers, Reading and Use of English, Writing, Listening and Speaking, over about four hours, and is accepted by a large number of US universities and employers. The certificate is valid for life and reports on the Cambridge English Scale at 180 to 210.',
    quickAnswer: {
      summary: 'C1 Advanced is a CEFR C1 Cambridge English exam taken at an authorised centre in four papers over about four hours. It proves advanced academic and professional English, reports on the Cambridge English Scale at 180 to 210, and the certificate never expires.',
      advantages: [
        'Recognised advanced C1 qualification',
        'Accepted by many US universities',
        'Certificate valid for life',
        'Four papers cover academic English',
        'Clear CEFR-linked score'
      ]
    },
    roadmap: ['Choose C1 Advanced level', 'Find an authorised centre', 'Pay the local fee', 'Prepare with official papers', 'Sit the exam and await results'],
    prerequisites: 'Open to any candidate at the right level; centres may advise a level check, but there is no formal gate.',
    examMeta: {
      questions: 'Four papers: Reading and Use of English, Writing, Listening, Speaking',
      time: 'About 4 hours',
      pass: 'No pass mark; Cambridge English Scale 180 to 210 (C1)',
      fee: 'About $200 to $260 (varies by country)',
      format: 'Paper-based or computer-based at a centre',
      admin: 'Cambridge University Press and Assessment'
    },
    topics: [
      { name: 'Reading and Use of English' },
      { name: 'Writing' },
      { name: 'Listening' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['CEFR', 'C1'],
      ['Scale', '180 to 210'],
      ['Papers', 'Four skills plus Use of English'],
      ['Validity', 'Lifetime certificate']
    ],
    timeline: [{ stage: 'Prepare', duration: '6 to 12 weeks' }, { stage: 'Test', duration: 'About 4 hours' }, { stage: 'Results', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Exam fee (local centre)', fee: '$200 to $260' }, { item: 'Preparation materials', fee: 'Optional' }], total: '$200 to $260', footnote: 'Centres set local fees; some add a small administration charge.' },
    difficulty: 'Challenging',
    audience: 'University and professional English candidates',
    time: '6 to 12 weeks typical prep',
    cost: '$200 to $260',
    faqs: [
      { q: 'Does C1 Advanced expire?', a: 'No. The certificate is valid for life and does not require renewal.' },
      { q: 'Will US universities accept it?', a: 'Many US universities accept C1 Advanced for English proficiency, but you should confirm the minimum score on each admissions page.' },
      { q: 'How is it scored?', a: 'It reports on the Cambridge English Scale, with C1 at 180 to 210 and an overall CEFR level.' },
      { q: 'How long does the test take?', a: 'The four papers take about four hours, usually across a single test day with the speaking test scheduled separately.' }
    ],
    summaryPoints: [
      'CEFR C1 Cambridge English qualification',
      'Four papers over about 4 hours',
      'Scale 180 to 210, lifetime certificate'
    ],
    relatedSlugs: ['cambridge-b2-first', 'cambridge-c2-proficiency', 'ielts-academic'],
    sourceUrl: 'https://www.cambridgeenglish.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'cambridge-c2-proficiency',
    body: 'Cambridge University Press and Assessment',
    tagline: 'The highest Cambridge English qualification at CEFR C2, showing near-native mastery.',
    description: 'Cambridge English C2 Proficiency, formerly the Certificate of Proficiency in English, is the highest level Cambridge English qualification at CEFR C2. It proves near-native mastery of English for academic and professional purposes and is delivered at authorised centres in four papers, Reading and Use of English, Writing, Listening and Speaking, over about four hours. The certificate is valid for life and reports on the Cambridge English Scale at 200 to 230.',
    quickAnswer: {
      summary: 'C2 Proficiency is the top Cambridge English exam at CEFR C2, taken at an authorised centre in four papers over about four hours. It shows near-native mastery for academic and professional use, reports on the Cambridge English Scale at 200 to 230, and the certificate never expires.',
      advantages: [
        'Highest-level Cambridge English proof',
        'Shows near-native mastery',
        'Accepted by top universities and employers',
        'Certificate valid for life',
        'Clear CEFR-linked score'
      ]
    },
    roadmap: ['Choose C2 Proficiency level', 'Find an authorised centre', 'Pay the local fee', 'Prepare with official papers', 'Sit the exam and await results'],
    prerequisites: 'Open to any candidate at the right level; centres may advise a level check, but there is no formal gate.',
    examMeta: {
      questions: 'Four papers: Reading and Use of English, Writing, Listening, Speaking',
      time: 'About 4 hours',
      pass: 'No pass mark; Cambridge English Scale 200 to 230 (C2)',
      fee: 'About $220 to $280 (varies by country)',
      format: 'Paper-based or computer-based at a centre',
      admin: 'Cambridge University Press and Assessment'
    },
    topics: [
      { name: 'Reading and Use of English' },
      { name: 'Writing' },
      { name: 'Listening' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['CEFR', 'C2'],
      ['Scale', '200 to 230'],
      ['Papers', 'Four skills plus Use of English'],
      ['Validity', 'Lifetime certificate']
    ],
    timeline: [{ stage: 'Prepare', duration: '8 to 16 weeks' }, { stage: 'Test', duration: 'About 4 hours' }, { stage: 'Results', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Exam fee (local centre)', fee: '$220 to $280' }, { item: 'Preparation materials', fee: 'Optional' }], total: '$220 to $280', footnote: 'Centres set local fees; some add a small administration charge.' },
    difficulty: 'Hard',
    audience: 'Advanced academic and professional English candidates',
    time: '8 to 16 weeks typical prep',
    cost: '$220 to $280',
    faqs: [
      { q: 'Does C2 Proficiency expire?', a: 'No. The certificate is valid for life and does not require renewal.' },
      { q: 'Who accepts C2 Proficiency?', a: 'Many top universities and employers accept C2 Proficiency as proof of near-native English; confirm the requirement with each institution.' },
      { q: 'How is it scored?', a: 'It reports on the Cambridge English Scale, with C2 at 200 to 230 and an overall CEFR level.' },
      { q: 'How long does the test take?', a: 'The four papers take about four hours, usually across a single test day with the speaking test scheduled separately.' }
    ],
    summaryPoints: [
      'CEFR C2, the highest Cambridge English level',
      'Four papers over about 4 hours',
      'Scale 200 to 230, lifetime certificate'
    ],
    relatedSlugs: ['cambridge-c1-advanced', 'cambridge-b2-first', 'ielts-academic'],
    sourceUrl: 'https://www.cambridgeenglish.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'casper-test',
    body: 'Acuity Insights',
    tagline: 'An open-response situational judgment test required by many health-professions programs.',
    description: 'The Casper Situational Judgment Test is an open-response exam in the Altus Suite that many US and Canadian medical, dental, nursing and other health-professions programs require. It presents video and text scenarios and asks the test taker to type responses that show judgment, ethics and communication. In the United States the base fee is about 85 dollars plus roughly 18 dollars for each additional school receiving the score, and the result is a quartile of 1 to 4 that only the programs see.',
    quickAnswer: {
      summary: 'Casper is an open-response situational judgment test for health-professions admission, taken online with proctoring. It presents about 14 scenarios with video and typed responses over 60 to 90 minutes. The US base fee is about 85 dollars plus 18 dollars per additional school, and the result is a quartile of 1 to 4 sent only to programs.',
      advantages: [
        'Required by many health-professions schools',
        'Measures judgment, not academic knowledge',
        'Online with identity verification',
        'One attempt per admission cycle',
        'Widely used across medicine and dentistry'
      ]
    },
    roadmap: ['Confirm programs require Casper', 'Create an Acuity account', 'Book a test date', 'Practice with sample scenarios', 'Complete it online and send scores'],
    prerequisites: 'For applicants to health-professions programs that require it; there is no academic prerequisite, but you must register through Acuity with the programs in mind.',
    examMeta: {
      questions: 'About 14 scenarios, video and typed responses',
      time: '60 to 90 minutes',
      pass: 'No pass mark; quartile 1 to 4',
      fee: 'About $85 base plus ~$18 per additional school (US)',
      format: 'Online, open-response, proctored',
      admin: 'Acuity Insights'
    },
    topics: [
      { name: 'Situational judgment' },
      { name: 'Ethics and professionalism' },
      { name: 'Communication' },
      { name: 'Empathy' }
    ],
    examEssentials: [
      ['Result', 'Quartile 1 to 4, sent to programs'],
      ['Attempts', 'One per admission cycle'],
      ['Delivery', 'Online with proctoring'],
      ['Fee', 'About $85 plus $18 per school (US)']
    ],
    timeline: [{ stage: 'Book', duration: 'Per test date' }, { stage: 'Test', duration: '60 to 90 minutes' }, { stage: 'Scores', duration: 'Sent to programs' }],
    costBreakdown: { items: [{ item: 'Base fee (US)', fee: '~$85' }, { item: 'Each additional school', fee: '~$18' }], total: '~$85 plus $18 per school', footnote: 'Exact fees and currency vary by country; Duet is included where programs require it.' },
    difficulty: 'Moderate',
    audience: 'Health-professions program applicants',
    time: '60 to 90 minutes on the test day',
    cost: '~$85 plus $18 per school',
    faqs: [
      { q: 'How much does Casper cost?', a: 'In the US the base fee is about 85 dollars plus roughly 18 dollars for each additional school receiving the score.' },
      { q: 'Can I see my Casper score?', a: 'No. Only the programs receive your quartile; applicants get confirmation that the score was sent but not the result.' },
      { q: 'How many times can I take Casper?', a: 'One attempt per admission cycle; you generally cannot retake it for the same cycle.' },
      { q: 'What does Casper measure?', a: 'It measures situational judgment, ethics, communication and empathy through open responses to video and text scenarios, not academic knowledge.' }
    ],
    summaryPoints: [
      'Open-response situational judgment test',
      'About 14 scenarios over 60 to 90 minutes',
      'Quartile 1 to 4 sent only to programs'
    ],
    relatedSlugs: ['duet-acuity-insights', 'dental-admission-test', 'optometry-admission-test'],
    sourceUrl: 'https://www.acuityinsights.app',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'duet-acuity-insights',
    body: 'Acuity Insights',
    tagline: 'A short values-alignment assessment that matches applicant priorities with program characteristics.',
    description: 'Duet is the values-alignment assessment in the Altus Suite that complements Casper for health-professions admission. It presents about 30 pairs of characteristics and asks the applicant to choose which matters more, building a profile that programs compare with their own priorities. Duet takes about 15 to 20 minutes, is unproctored, and returns a compatibility view to the program rather than a public score to the applicant. It is included where a program requires it.',
    quickAnswer: {
      summary: 'Duet is a short, unproctored values-alignment assessment in the Altus Suite that takes about 15 to 20 minutes. It asks you to compare about 30 pairs of characteristics so programs can see how well your priorities match theirs, and it returns a view to the program rather than a score to you.',
      advantages: [
        'Quick, about 15 to 20 minutes',
        'Shows fit with a specific program',
        'Unproctored and easy to complete',
        'Complements Casper for admission',
        'Often included with no extra base fee'
      ]
    },
    roadmap: ['Confirm the program uses Duet', 'Open Duet in your Acuity account', 'Complete the paired comparisons', 'Submit the profile', 'Programs receive the match view'],
    prerequisites: 'For applicants to programs that require Duet; it is taken through the same Acuity account used for Casper.',
    examMeta: {
      questions: 'About 30 paired-characteristic comparisons',
      time: '15 to 20 minutes',
      pass: 'No pass mark; returns a match view to programs',
      fee: 'Included where required by a program',
      format: 'Online, unproctored, paired comparison',
      admin: 'Acuity Insights'
    },
    topics: [
      { name: 'Values alignment' },
      { name: 'Program fit' }
    ],
    examEssentials: [
      ['Length', 'About 15 to 20 minutes'],
      ['Result', 'Match view to the program'],
      ['Attempts', 'One per admission cycle'],
      ['Cost', 'Included where required']
    ],
    timeline: [{ stage: 'Open', duration: 'In Acuity account' }, { stage: 'Complete', duration: '15 to 20 minutes' }, { stage: 'Report', duration: 'To program' }],
    costBreakdown: { items: [{ item: 'Included with Altus Suite where required', fee: 'No separate base fee' }], total: 'Included where required', footnote: 'If a program requires Duet, it is part of the Altus Suite rather than a separately billed exam.' },
    difficulty: 'Light',
    audience: 'Health-professions program applicants',
    time: '15 to 20 minutes',
    cost: 'Included where required',
    faqs: [
      { q: 'Do I get a Duet score?', a: 'No. Duet returns a compatibility view to the program; you do not receive a numeric result.' },
      { q: 'How long does Duet take?', a: 'It takes about 15 to 20 minutes and is unproctored, so you complete it at your convenience.' },
      { q: 'Is Duet the same as Casper?', a: 'No. Casper is a proctored situational judgment test, while Duet is an unproctored values-alignment exercise that shows program fit.' },
      { q: 'How many times can I take Duet?', a: 'One attempt per admission cycle, like Casper.' }
    ],
    summaryPoints: [
      'Unproctored values-alignment assessment',
      'About 15 to 20 minutes, 30 paired comparisons',
      'Returns a fit view to programs, not a score'
    ],
    relatedSlugs: ['casper-test', 'dental-admission-test', 'optometry-admission-test'],
    sourceUrl: 'https://www.acuityinsights.app',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'dental-admission-test',
    body: 'American Dental Association',
    tagline: 'The computer-based admissions test for US dental schools covering science, perceptual ability and reasoning.',
    description: 'The Dental Admission Test (DAT) is the computer-based admissions exam required by the large majority of US dental schools. It covers survey of natural sciences, perceptual ability, reading comprehension and quantitative reasoning across about five hours and fifteen minutes at a Prometric centre. Since March 2025 the DAT reports a 200 to 600 scale per section. The 2026 fee is 580 dollars and includes official score reports to the schools you select.',
    quickAnswer: {
      summary: 'The DAT is the required admissions test for most US dental schools, taken at a Prometric centre over about five hours and fifteen minutes. It covers natural sciences, perceptual ability, reading and quantitative reasoning, uses a 200 to 600 scale, and costs 580 dollars for 2026 with score reports included.',
      advantages: [
        'Required by most US dental schools',
        'Standardised science and perceptual measure',
        'Score reports included in the fee',
        'Clear 200 to 600 section scale',
        'Taken year-round at Prometric'
      ]
    },
    roadmap: ['Get a DENTPIN', 'Schedule at Prometric', 'Pay the 580 dollar fee', 'Prepare with the ADA guide', 'Test and send scores'],
    prerequisites: 'For dental school applicants; a DENTPIN is required before scheduling, and most takers are applying to DDS or DMD programs.',
    examMeta: {
      questions: 'About 280 items across four sections',
      time: 'About 5 hours 15 minutes',
      pass: 'No pass mark; 200 to 600 per section (since Mar 2025)',
      fee: '$580 (2026); includes score reports',
      format: 'Computer-based at Prometric',
      admin: 'American Dental Association'
    },
    topics: [
      { name: 'Survey of Natural Sciences' },
      { name: 'Perceptual Ability' },
      { name: 'Reading Comprehension' },
      { name: 'Quantitative Reasoning' }
    ],
    examEssentials: [
      ['Sections', 'SNS, PAT, RC, QR'],
      ['Scale', '200 to 600 per section'],
      ['Fee', '$580 (2026)'],
      ['Retake', '60-day wait, max 4 per 12 months']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 months' }, { stage: 'Test', duration: 'About 5h 15m' }, { stage: 'Scores', duration: 'Shortly after' }],
    costBreakdown: { items: [{ item: 'Exam fee (2026)', fee: '$580' }, { item: 'Additional score reports', fee: 'Included' }], total: '$580', footnote: 'The fee includes official score reports to the schools you select at registration.' },
    difficulty: 'Hard',
    audience: 'US dental school applicants',
    time: '2 to 4 months typical prep',
    cost: '$580',
    faqs: [
      { q: 'How much does the DAT cost?', a: 'The DAT fee is 580 dollars for 2026 and includes the score reports sent to the schools you choose at registration.' },
      { q: 'How is the DAT scored now?', a: 'Since March 2025 the DAT reports a 200 to 600 scale per section, replacing the older 1 to 30 scale.' },
      { q: 'How many times can I take the DAT?', a: 'You must wait 60 days between attempts and may take it up to four times in 12 months; after three attempts you need special permission.' },
      { q: 'Where do I take the DAT?', a: 'At a Prometric test centre; there is no at-home option.' }
    ],
    summaryPoints: [
      'Required for most US dental schools',
      'About 5h 15m, four sections, 200 to 600 scale',
      '580 dollars for 2026, reports included'
    ],
    relatedSlugs: ['optometry-admission-test', 'casper-test', 'gmat-focus-edition'],
    sourceUrl: 'https://www.ada.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'optometry-admission-test',
    body: 'American Dental Association',
    tagline: 'The admissions test for US optometry schools covering science, reading, physics and reasoning.',
    description: 'The Optometry Admission Test (OAT) is the computer-based admissions exam required by US optometry schools. It covers natural sciences, reading comprehension, physics and quantitative reasoning across about four hours and forty minutes at a Prometric centre, and reports a 200 to 400 scale. The fee is 520 dollars and includes official score reports to the schools you select. It is administered by the American Dental Association, the same body that runs the DAT.',
    quickAnswer: {
      summary: 'The OAT is the required admissions test for US optometry schools, taken at a Prometric centre over about four hours and forty minutes. It covers natural sciences, reading, physics and quantitative reasoning, uses a 200 to 400 scale, and costs 520 dollars with score reports included.',
      advantages: [
        'Required by US optometry schools',
        'Standardised science and physics measure',
        'Score reports included in the fee',
        'Clear 200 to 400 scale',
        'Taken year-round at Prometric'
      ]
    },
    roadmap: ['Get a DENTPIN', 'Schedule at Prometric', 'Pay the 520 dollar fee', 'Prepare with the ADA guide', 'Test and send scores'],
    prerequisites: 'For optometry school applicants; a DENTPIN is required before scheduling, and most takers are applying to OD programs.',
    examMeta: {
      questions: 'About 230 items across four sections',
      time: 'About 4 hours 40 minutes',
      pass: 'No pass mark; 200 to 400 scale',
      fee: '$520; includes score reports',
      format: 'Computer-based at Prometric',
      admin: 'American Dental Association'
    },
    topics: [
      { name: 'Natural Sciences' },
      { name: 'Reading Comprehension' },
      { name: 'Physics' },
      { name: 'Quantitative Reasoning' }
    ],
    examEssentials: [
      ['Sections', 'NS, RC, Physics, QR'],
      ['Scale', '200 to 400'],
      ['Fee', '$520'],
      ['Retake', '60-day wait, max 4 per 12 months']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 4 months' }, { stage: 'Test', duration: 'About 4h 40m' }, { stage: 'Scores', duration: 'Shortly after' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$520' }, { item: 'Additional score reports', fee: 'Included' }], total: '$520', footnote: 'The fee includes official score reports to the schools you select at registration.' },
    difficulty: 'Hard',
    audience: 'US optometry school applicants',
    time: '2 to 4 months typical prep',
    cost: '$520',
    faqs: [
      { q: 'How much does the OAT cost?', a: 'The OAT fee is 520 dollars and includes the score reports sent to the schools you choose at registration.' },
      { q: 'How is the OAT scored?', a: 'The OAT reports a 200 to 400 scale per section, with an academic average and total science average.' },
      { q: 'How many times can I take the OAT?', a: 'You must wait 60 days between attempts and may take it up to four times in 12 months, with further attempts needing ADA approval.' },
      { q: 'Where do I take the OAT?', a: 'At a Prometric test centre; there is no at-home option.' }
    ],
    summaryPoints: [
      'Required for US optometry schools',
      'About 4h 40m, four sections, 200 to 400 scale',
      '520 dollars, reports included'
    ],
    relatedSlugs: ['dental-admission-test', 'casper-test', 'gmat-focus-edition'],
    sourceUrl: 'https://www.ada.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'executive-assessment',
    body: 'Graduate Management Admission Council',
    tagline: 'A ninety-minute business school test designed for experienced executive MBA candidates.',
    description: 'The Executive Assessment is a 90-minute business school admissions test from GMAC designed for experienced professionals applying to executive MBA programs. It covers Integrated Reasoning, Verbal Reasoning and Quantitative Reasoning in three 30-minute sections and reports a total score of 100 to 200, with each section scored 0 to 20. Scores are valid for five years, and a candidate may take the exam a maximum of two times.',
    quickAnswer: {
      summary: 'The Executive Assessment is a 90-minute GMAC test for executive MBA applicants, covering Integrated Reasoning, Verbal and Quantitative sections of 30 minutes each. It reports a total of 100 to 200 with section scores 0 to 20, allows a maximum of two attempts, and scores are valid for five years.',
      advantages: [
        'Short 90-minute format for busy professionals',
        'Built for executive MBA admission',
        'Scores valid for five years',
        'Integrated, verbal and quantitative sections',
        'Accepted by many EMBA programs'
      ]
    },
    roadmap: ['Confirm the EMBA requires it', 'Book through GMAC', 'Pay the 350 dollar fee', 'Use the official guide', 'Test and send scores'],
    prerequisites: 'For experienced professionals applying to executive MBA programs; schools generally expect significant work experience rather than a fixed eligibility rule.',
    examMeta: {
      questions: 'About 40 questions across three sections',
      time: '90 minutes',
      pass: 'No pass mark; total 100 to 200',
      fee: '$350',
      format: 'Computer-delivered at Pearson VUE or online',
      admin: 'Graduate Management Admission Council'
    },
    topics: [
      { name: 'Integrated Reasoning' },
      { name: 'Verbal Reasoning' },
      { name: 'Quantitative Reasoning' }
    ],
    examEssentials: [
      ['Sections', 'IR, Verbal, Quant, 30 minutes each'],
      ['Scoring', 'Total 100 to 200; section 0 to 20'],
      ['Attempts', 'Maximum of 2'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Study', duration: '2 to 6 weeks' }, { stage: 'Test', duration: '90 minutes' }, { stage: 'Scores', duration: 'Same or next day' }],
    costBreakdown: { items: [{ item: 'Exam fee', fee: '$350' }, { item: 'Additional score reports', fee: 'Included' }], total: '$350', footnote: 'The fee includes the score reports sent to the programs you select.' },
    difficulty: 'Moderate',
    audience: 'Executive MBA applicants with work experience',
    time: '2 to 6 weeks typical prep',
    cost: '$350',
    faqs: [
      { q: 'How many times can I take the Executive Assessment?', a: 'You may take it a maximum of two times; this is stricter than the GMAT Focus Edition limit.' },
      { q: 'How is it different from the GMAT Focus Edition?', a: 'The Executive Assessment is a 90-minute test for experienced EMBA candidates, while the GMAT Focus Edition is a longer 2h 15m test for broader business programs.' },
      { q: 'How long are scores valid?', a: 'Executive Assessment scores are valid for five years from the test date.' },
      { q: 'What does it cost?', a: 'The fee is 350 dollars and includes the score reports sent to your selected programs.' }
    ],
    summaryPoints: [
      '90-minute EMBA admissions test',
      'Three 30-minute sections, 100 to 200 total',
      'Maximum two attempts, valid five years'
    ],
    relatedSlugs: ['gmat-focus-edition', 'dental-admission-test', 'optometry-admission-test'],
    sourceUrl: 'https://www.gmac.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'gmat-focus-edition',
    body: 'Graduate Management Admission Council',
    tagline: 'The current GMAT with Quantitative, Verbal and Data Insights sections and a 205 to 805 total.',
    description: 'The GMAT Focus Edition is the current Graduate Management Admission Test used by thousands of MBA and business master programs worldwide. It measures Quantitative Reasoning, Verbal Reasoning and Data Insights in three 45-minute sections over about two hours and fifteen minutes, and it reports a total score from 205 to 805 in 10-point increments. Scores are valid for five years, and you may send them to schools with score review available after the test.',
    quickAnswer: {
      summary: 'The GMAT Focus Edition is the current GMAT for MBA and masters admission, taken at a Pearson VUE centre or online in about two hours and fifteen minutes. It covers Quantitative, Verbal and Data Insights, scores 205 to 805, costs 275 dollars at a centre or 300 dollars online, and allows five attempts per year.',
      advantages: [
        'Accepted by thousands of business programs',
        'Focused 2h 15m format with three sections',
        'Score review before sending to schools',
        'Scores valid for five years',
        'Centre and online delivery available'
      ]
    },
    roadmap: ['Create a GMAC account', 'Book a centre or online slot', 'Use the official starter kit', 'Test in 2h 15m', 'Send scores to schools'],
    prerequisites: 'Open to any test taker; most users are applying to graduate business programs, but there is no formal eligibility gate to register.',
    examMeta: {
      questions: 'About 64 questions across three sections',
      time: '2 hours 15 minutes',
      pass: 'No pass mark; total 205 to 805',
      fee: '$275 centre; $300 online',
      format: 'Computer-delivered at Pearson VUE or online',
      admin: 'Graduate Management Admission Council'
    },
    topics: [
      { name: 'Quantitative Reasoning' },
      { name: 'Verbal Reasoning' },
      { name: 'Data Insights' }
    ],
    examEssentials: [
      ['Sections', 'Quant, Verbal, Data Insights, 45 min each'],
      ['Scoring', '205 to 805 in 10-point steps'],
      ['Attempts', 'Up to 5 per 12 months, 8 lifetime'],
      ['Validity', '5 years']
    ],
    timeline: [{ stage: 'Study', duration: '4 to 10 weeks' }, { stage: 'Test', duration: '2h 15m' }, { stage: 'Scores', duration: 'Same or next day' }],
    costBreakdown: { items: [{ item: 'Exam fee (centre)', fee: '$275' }, { item: 'Exam fee (online)', fee: '$300' }, { item: 'Additional score reports', fee: 'Included' }], total: '$275 to $300', footnote: 'A 16-day gap applies between attempts; some reschedule and cancellation fees may apply.' },
    difficulty: 'Challenging',
    audience: 'MBA and business master applicants',
    time: '4 to 10 weeks typical prep',
    cost: '$275 to $300',
    faqs: [
      { q: 'How many times can I take the GMAT Focus Edition?', a: 'You may retake it after a 16-day wait, up to five times in 12 months and eight times in a lifetime.' },
      { q: 'How is it scored?', a: 'It reports a total score of 205 to 805 in 10-point increments, built from the three section scores.' },
      { q: 'How much does it cost?', a: 'The fee is 275 dollars at a test centre or 300 dollars for the online version, and includes score reports to your selected schools.' },
      { q: 'How long are scores valid?', a: 'GMAT Focus Edition scores are valid for five years from the test date.' }
    ],
    summaryPoints: [
      'Current GMAT for MBA and masters admission',
      'Three 45-minute sections, 205 to 805 total',
      '275 to 300 dollars, valid five years'
    ],
    relatedSlugs: ['executive-assessment', 'gre-general-test', 'pte-academic'],
    sourceUrl: 'https://www.gmac.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ecpe-michigan',
    body: 'Michigan Language Assessment',
    tagline: 'A CEFR C2 English proficiency certificate from Michigan Language Assessment.',
    description: 'The Examination for the Certificate of Proficiency in English (ECPE) is a CEFR C2 English qualification from Michigan Language Assessment used for academic and employment purposes. It has four components, writing, listening, reading and speaking, administered at authorised centres, and it results in a pass or fail at C2 with section results. The certificate is valid for life and does not require renewal.',
    quickAnswer: {
      summary: 'The ECPE is a CEFR C2 English proficiency exam from Michigan Language Assessment with writing, listening, reading and speaking components. It is taken at authorised centres, results in a pass or fail at C2 with section scores, and the certificate is valid for life.',
      advantages: [
        'Recognised C2 proficiency certificate',
        'Used for academic and employment proof',
        'Certificate valid for life',
        'Four skills assessed at advanced level',
        'Administered at authorised centres'
      ]
    },
    roadmap: ['Choose the ECPE', 'Find an authorised centre', 'Pay the local fee', 'Prepare with official practice', 'Sit the exam and collect results'],
    prerequisites: 'Open to candidates at the C2 level; there is no formal gate, but centres may advise readiness.',
    examMeta: {
      questions: 'Writing, listening, reading and speaking components',
      time: 'About 3 hours plus speaking',
      pass: 'Pass or fail at C2, with section results',
      fee: 'Set by the local centre',
      format: 'Paper-based at an authorised centre',
      admin: 'Michigan Language Assessment'
    },
    topics: [
      { name: 'Writing' },
      { name: 'Listening' },
      { name: 'Reading' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['CEFR', 'C2'],
      ['Result', 'Pass or fail with section scores'],
      ['Validity', 'Lifetime certificate'],
      ['Delivery', 'Authorised centres']
    ],
    timeline: [{ stage: 'Prepare', duration: '6 to 12 weeks' }, { stage: 'Test', duration: 'About 3 hours plus speaking' }, { stage: 'Results', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Exam fee (local centre)', fee: 'Set by centre' }], total: 'Set by centre', footnote: 'Centres set local fees depending on the location and currency.' },
    difficulty: 'Hard',
    audience: 'Advanced academic and professional English candidates',
    time: '6 to 12 weeks typical prep',
    cost: 'Set by centre',
    faqs: [
      { q: 'Does the ECPE certificate expire?', a: 'No. The ECPE is a lifetime C2 certificate and does not require renewal.' },
      { q: 'What level is the ECPE?', a: 'It certifies CEFR C2, the highest common reference level, showing near-native proficiency.' },
      { q: 'How is it different from the MET?', a: 'The ECPE is a single C2 certificate, while the MET is modular and covers A2 to C1, so they serve different proficiency goals.' },
      { q: 'Where do I take it?', a: 'At an authorised Michigan Language Assessment centre; there is no direct publisher booking.' }
    ],
    summaryPoints: [
      'CEFR C2 proficiency certificate from Michigan',
      'Four components, pass or fail at C2',
      'Lifetime certificate, no renewal'
    ],
    relatedSlugs: ['michigan-english-test', 'cambridge-c2-proficiency', 'ielts-academic'],
    sourceUrl: 'https://michiganassessment.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'michigan-english-test',
    body: 'Michigan Language Assessment',
    tagline: 'A modular English test covering CEFR A2 to C1 across listening, reading, writing and speaking.',
    description: 'The Michigan English Test (MET) is a modular English proficiency exam from Michigan Language Assessment that covers CEFR levels A2 to C1. Test takers can combine listening, reading, writing and speaking modules as needed, and each is reported with a score and CEFR level. It is used for study, work and immigration evidence, and it is delivered at authorised centres with official practice materials available.',
    quickAnswer: {
      summary: 'The MET is a modular Michigan Language Assessment exam covering CEFR A2 to C1 across listening, reading, writing and speaking modules you can combine as needed. It reports a score and level per module, is taken at authorised centres, and serves study, work and immigration purposes.',
      advantages: [
        'Modular, pick the skills you need',
        'Covers A2 to C1 in one framework',
        'Per-module score and CEFR level',
        'Used for study, work and migration',
        'Official practice materials available'
      ]
    },
    roadmap: ['Choose your MET modules', 'Find an authorised centre', 'Pay the local fee', 'Prepare with official practice', 'Sit the test and get results'],
    prerequisites: 'Open to candidates from A2 to C1 level; there is no formal gate, but you select the modules that match your goal.',
    examMeta: {
      questions: 'Modular: listening, reading, writing, speaking',
      time: 'About 155 minutes for the full four skills',
      pass: 'No pass mark; score with CEFR level A2 to C1',
      fee: 'Set by the local centre',
      format: 'Paper-based at an authorised centre',
      admin: 'Michigan Language Assessment'
    },
    topics: [
      { name: 'Listening' },
      { name: 'Reading' },
      { name: 'Writing' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['Range', 'CEFR A2 to C1'],
      ['Format', 'Modular four skills'],
      ['Scoring', 'Score and CEFR level per module'],
      ['Delivery', 'Authorised centres']
    ],
    timeline: [{ stage: 'Prepare', duration: '4 to 8 weeks' }, { stage: 'Test', duration: 'About 2.5 hours for four skills' }, { stage: 'Results', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Exam fee (local centre)', fee: 'Set by centre' }], total: 'Set by centre', footnote: 'Fees depend on the modules selected and the local centre currency.' },
    difficulty: 'Moderate',
    audience: 'Study, work and migration English candidates',
    time: '4 to 8 weeks typical prep',
    cost: 'Set by centre',
    faqs: [
      { q: 'Is the MET like the ECPE?', a: 'They are related but different; the MET is modular and covers A2 to C1, while the ECPE is a single C2 certificate.' },
      { q: 'Can I take only some skills?', a: 'Yes. The MET is modular, so you can combine the listening, reading, writing and speaking modules that your school or employer requires.' },
      { q: 'What score do I get?', a: 'Each module returns a score and a CEFR level from A2 to C1, with an overall level across the modules you take.' },
      { q: 'Where do I take it?', a: 'At an authorised Michigan Language Assessment centre; there is no direct publisher booking.' }
    ],
    summaryPoints: [
      'Modular Michigan English test, A2 to C1',
      'Listening, reading, writing and speaking modules',
      'Per-module score with CEFR level'
    ],
    relatedSlugs: ['ecpe-michigan', 'ielts-academic', 'cambridge-b2-first'],
    sourceUrl: 'https://michiganassessment.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ielts-academic',
    body: 'British Council, IDP: IELTS Australia and Cambridge University Press and Assessment',
    tagline: 'A four-skill English test scored 0 to 9 bands for university admission of international applicants.',
    description: 'IELTS Academic is the version of IELTS used for university admission, with reading and writing tasks based on academic texts. It covers listening, reading, writing and speaking across about two hours and forty-five minutes, and each skill is banded 0 to 9 with an overall band as the average. It is accepted by many US universities for international applicants, and a One Skill Retake lets you redo a single section within 60 days.',
    quickAnswer: {
      summary: 'IELTS Academic is the university-admission version of IELTS, taken in about two hours and forty-five minutes across listening, reading, writing and speaking. Each skill is banded 0 to 9, the score is valid for two years, and US fees generally run about 215 to 250 dollars. A One Skill Retake allows redoing one section within 60 days.',
      advantages: [
        'Accepted by many US universities',
        'Four skills with 0 to 9 band scores',
        'One Skill Retake within 60 days',
        'Academic reading and writing tasks',
        'Paper and computer delivery available'
      ]
    },
    roadmap: ['Choose IELTS Academic', 'Find a test centre', 'Pay about 215 to 250 dollars', 'Prepare with official practice', 'Test and get results in days'],
    prerequisites: 'Open to any test taker; most users are international applicants to universities, but there is no formal eligibility gate.',
    examMeta: {
      questions: 'Listening 40, Reading 40, Writing 2 tasks, Speaking 3 parts',
      time: '2 hours 45 minutes',
      pass: 'No pass mark; bands 0 to 9',
      fee: 'About $215 to $250 (US)',
      format: 'Paper or computer at a centre',
      admin: 'British Council, IDP: IELTS Australia and Cambridge University Press and Assessment'
    },
    topics: [
      { name: 'Listening' },
      { name: 'Reading' },
      { name: 'Writing' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['Bands', '0 to 9 per skill, overall average'],
      ['Validity', '2 years'],
      ['One Skill Retake', 'Within 60 days'],
      ['Fee', 'About $215 to $250 (US)']
    ],
    timeline: [{ stage: 'Prepare', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '2h 45m' }, { stage: 'Results', duration: '3 to 13 days' }],
    costBreakdown: { items: [{ item: 'Test fee (US)', fee: '$215 to $250' }, { item: 'One Skill Retake', fee: 'Separate fee' }], total: '$215 to $250', footnote: 'Fees vary by centre and format; some locations charge a small administration fee.' },
    difficulty: 'Moderate',
    audience: 'International university applicants',
    time: '4 to 8 weeks typical prep',
    cost: '$215 to $250',
    faqs: [
      { q: 'How is IELTS Academic scored?', a: 'Each of the four skills is banded 0 to 9 in half-band steps, and the overall band is the average, reported on the Test Report Form.' },
      { q: 'What is the One Skill Retake?', a: 'It lets you retake a single section within 60 days of the original test and receive a new Test Report Form combining it with the other scores.' },
      { q: 'How long is the score valid?', a: 'IELTS scores are valid for two years from the test date, which matches typical university and visa requirements.' },
      { q: 'How much does it cost?', a: 'In the US, IELTS Academic generally costs about 215 to 250 dollars depending on the centre and format.' }
    ],
    summaryPoints: [
      'University-admission English test, bands 0 to 9',
      'About 2h 45m across four skills',
      'Valid two years, One Skill Retake available'
    ],
    relatedSlugs: ['ielts-general-training', 'pte-academic', 'cambridge-b2-first'],
    sourceUrl: 'https://www.ielts.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ielts-general-training',
    body: 'British Council, IDP: IELTS Australia and Cambridge University Press and Assessment',
    tagline: 'The IELTS version for everyday and workplace English, used mainly for migration and vocational programs.',
    description: 'IELTS General Training is the version of IELTS focused on everyday and workplace English rather than academic study. It covers listening, reading, writing and speaking over about two hours and forty-five minutes, with reading and writing tasks based on general interest and workplace texts. It is used mainly for migration and some vocational programs, and it is banded 0 to 9 with a two-year validity, like IELTS Academic.',
    quickAnswer: {
      summary: 'IELTS General Training is the migration and vocational version of IELTS, taken in about two hours and forty-five minutes across four skills. It uses everyday and workplace texts instead of academic ones, is banded 0 to 9, costs about 215 to 250 dollars in the US, and is valid for two years.',
      advantages: [
        'Built for migration and vocational use',
        'Everyday and workplace English tasks',
        'Four skills with 0 to 9 band scores',
        'One Skill Retake within 60 days',
        'Accepted by visa and program bodies'
      ]
    },
    roadmap: ['Choose IELTS General Training', 'Find a test centre', 'Pay about 215 to 250 dollars', 'Prepare with official practice', 'Test and get results in days'],
    prerequisites: 'Open to any test taker; most users are applying for migration or vocational programs rather than degree admission.',
    examMeta: {
      questions: 'Listening 40, Reading 40, Writing 2 tasks, Speaking 3 parts',
      time: '2 hours 45 minutes',
      pass: 'No pass mark; bands 0 to 9',
      fee: 'About $215 to $250 (US)',
      format: 'Paper or computer at a centre',
      admin: 'British Council, IDP: IELTS Australia and Cambridge University Press and Assessment'
    },
    topics: [
      { name: 'Listening' },
      { name: 'Reading' },
      { name: 'Writing' },
      { name: 'Speaking' }
    ],
    examEssentials: [
      ['Bands', '0 to 9 per skill, overall average'],
      ['Use', 'Migration and vocational programs'],
      ['Validity', '2 years'],
      ['Fee', 'About $215 to $250 (US)']
    ],
    timeline: [{ stage: 'Prepare', duration: '4 to 8 weeks' }, { stage: 'Test', duration: '2h 45m' }, { stage: 'Results', duration: '3 to 13 days' }],
    costBreakdown: { items: [{ item: 'Test fee (US)', fee: '$215 to $250' }, { item: 'One Skill Retake', fee: 'Separate fee' }], total: '$215 to $250', footnote: 'Fees vary by centre and format; some locations charge a small administration fee.' },
    difficulty: 'Moderate',
    audience: 'Migration and vocational English candidates',
    time: '4 to 8 weeks typical prep',
    cost: '$215 to $250',
    faqs: [
      { q: 'How is General Training different from Academic?', a: 'General Training uses everyday and workplace reading and writing texts for migration and vocational purposes, while Academic uses scholarly texts for degree admission.' },
      { q: 'How is it scored?', a: 'Each skill is banded 0 to 9, and the overall band is the average, just like IELTS Academic.' },
      { q: 'How long is the score valid?', a: 'Scores are valid for two years from the test date.' },
      { q: 'Can I use it for university?', a: 'Generally no; universities usually require IELTS Academic, so confirm the module a school accepts before booking.' }
    ],
    summaryPoints: [
      'Migration and vocational IELTS version',
      'Everyday and workplace texts, bands 0 to 9',
      'About 2h 45m, valid two years'
    ],
    relatedSlugs: ['ielts-academic', 'pte-academic', 'cambridge-b2-first'],
    sourceUrl: 'https://www.ielts.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'coop-exam',
    body: 'Participating Catholic diocesan school systems',
    tagline: 'The Catholic high school entrance exam for New Jersey and the Philadelphia area.',
    description: 'The Cooperative Admissions Examination (COOP) is the shared entrance exam used by participating Catholic high schools in New Jersey and the Philadelphia area. It covers reasoning, language and mathematics in a single sitting on a fall test date, and scores are sent to the member schools the student lists. It is offered once per admission cycle, so most applicants get one attempt, and many schools also use it for scholarship decisions.',
    quickAnswer: {
      summary: 'The COOP is the Catholic high school entrance exam for member schools in New Jersey and the Philadelphia area, taken once per admission cycle in a single sitting covering reasoning, language and mathematics. A single registration fee covers the listed member schools, and scores support both admission and scholarships.',
      advantages: [
        'One test for many member schools',
        'Covers reasoning, language and math',
        'Used for admission and scholarships',
        'Single registration covers listed schools',
        'Clear fall test date'
      ]
    },
    roadmap: ['Confirm member schools', 'Register through the diocese', 'Prepare with the practice test', 'Sit the exam in fall', 'Await admission decisions'],
    prerequisites: 'For students applying to member Catholic high schools in New Jersey and the Philadelphia area; registration is through the diocesan COOP office.',
    examMeta: {
      questions: 'Reasoning, language and mathematics sections',
      time: 'About 2 hours',
      pass: 'No pass mark; scaled score and percentile',
      fee: 'Single registration fee covering listed schools',
      format: 'Paper-based at a member school',
      admin: 'Participating Catholic diocesan school systems'
    },
    topics: [
      { name: 'Reasoning' },
      { name: 'Language' },
      { name: 'Mathematics' }
    ],
    examEssentials: [
      ['Region', 'NJ and Philadelphia area'],
      ['Schools', 'Member diocesan high schools'],
      ['Attempts', 'Once per admission cycle'],
      ['Use', 'Admission and scholarships']
    ],
    timeline: [{ stage: 'Register', duration: 'Before fall date' }, { stage: 'Test', duration: 'About 2 hours' }, { stage: 'Decisions', duration: 'Weeks after' }],
    costBreakdown: { items: [{ item: 'Registration fee', fee: 'Set by the diocese' }], total: 'Set by the diocese', footnote: 'One fee typically covers the member schools you list; confirm the current diocesan fee.' },
    difficulty: 'Moderate',
    audience: 'Catholic high school applicants in NJ and Philadelphia',
    time: 'About 2 hours on the test day',
    cost: 'Set by the diocese',
    faqs: [
      { q: 'Which schools accept the COOP?', a: 'Member Catholic high schools in New Jersey and the Philadelphia area accept the COOP; confirm the current diocesan list because membership can change.' },
      { q: 'Can my child take the COOP more than once?', a: 'No. The COOP is offered once per admission cycle, so plan the single attempt carefully.' },
      { q: 'What does the COOP cover?', a: 'It covers reasoning, language and mathematics in a single sitting, and many schools use the score for both admission and scholarships.' },
      { q: 'How do I register?', a: 'Through the diocesan COOP office, usually with one fee covering the member schools you list.' }
    ],
    summaryPoints: [
      'Catholic high school entrance exam for NJ and Philadelphia',
      'Reasoning, language and math in one sitting',
      'Offered once per admission cycle'
    ],
    relatedSlugs: ['ssat-upper-level', 'isee-upper-level'],
    sourceUrl: 'https://www.coopexam.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'stanford-achievement-test-10',
    body: 'Pearson',
    tagline: 'A nationally normed achievement battery used by private schools and homeschool families.',
    description: 'The Stanford Achievement Test Series, Tenth Edition (Stanford 10) is a nationally normed achievement battery used by private schools and homeschool families to document reading, mathematics and content-area mastery. It is group-administered in levels from kindergarten through grade 12 and reports national percentiles, stanines and grade equivalents across subject areas such as reading, mathematics, language, spelling, science and social science. There is no public registration fee because schools and co-ops administer it.',
    quickAnswer: {
      summary: 'The Stanford 10 is a nationally normed achievement battery for kindergarten through grade 12, covering reading, math, language, spelling, science and social science. Private schools and homeschool co-ops administer it in group sittings, it reports national percentiles and grade equivalents, and there is no public registration fee.',
      advantages: [
        'Nationally normed achievement data',
        'Broad subject coverage in one battery',
        'Used by private schools and homeschoolers',
        'Reports percentiles and grade equivalents',
        'Group administration is efficient'
      ]
    },
    roadmap: ['Confirm the school or co-op uses Stanford 10', 'Note the testing window', 'Review subject areas', 'School or co-op administers the test', 'Receive the achievement report'],
    prerequisites: 'Given by schools or homeschool groups to students in kindergarten through grade 12; there is no individual registration in most cases.',
    examMeta: {
      questions: 'Varies by level and subject battery',
      time: 'Several hours across subtests',
      pass: 'No pass mark; national percentile and grade equivalent',
      fee: 'Administered by schools or co-ops; no public fee',
      format: 'Group-administered, multiple-choice',
      admin: 'Pearson'
    },
    topics: [
      { name: 'Reading' },
      { name: 'Mathematics' },
      { name: 'Language' },
      { name: 'Spelling' },
      { name: 'Science' },
      { name: 'Social Science' }
    ],
    examEssentials: [
      ['Coverage', 'Reading, math, language, spelling, science, social studies'],
      ['Levels', 'K through grade 12'],
      ['Scoring', 'National percentile, stanine, grade equivalent'],
      ['Use', 'Achievement documentation']
    ],
    timeline: [{ stage: 'School administers', duration: 'Several hours' }, { stage: 'Scoring', duration: 'Automated' }, { stage: 'Report', duration: 'To family per school' }],
    costBreakdown: { items: [{ item: 'Administered by school or co-op', fee: 'No public fee' }], total: 'No public fee', footnote: 'Schools and homeschool co-ops license the Stanford 10; families are not billed by Pearson directly.' },
    difficulty: 'Moderate',
    audience: 'K-12 students in private or homeschool settings',
    time: 'Several hours across subtests',
    cost: 'No public fee',
    faqs: [
      { q: 'Can homeschool families use the Stanford 10?', a: 'Yes. Many homeschool co-ops and private schools administer the Stanford 10 to document grade-level achievement.' },
      { q: 'Is there a passing score?', a: 'No. It reports national percentiles, stanines and grade equivalents; the school or family interprets the result against expectations.' },
      { q: 'How is it different from the Iowa Assessments?', a: 'Both are nationally normed achievement batteries; schools choose between them based on preference, and content emphasis differs slightly by publisher.' },
      { q: 'How long does it take?', a: 'Administration spans several hours across the subject subtests, often split across more than one sitting depending on the level.' }
    ],
    summaryPoints: [
      'Nationally normed K-12 achievement battery',
      'Covers reading, math, language, spelling, science and social studies',
      'Reports percentiles and grade equivalents'
    ],
    relatedSlugs: ['iowa-assessments', 'cogat', 'stanford-binet-5'],
    sourceUrl: 'https://www.pearsonassessments.com',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
