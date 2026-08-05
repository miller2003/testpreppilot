export const programs = [
  {
    id: 'us-air-force',
    body: 'United States Air Force',
    bodyUrl: 'https://www.airforce.com',
    about: 'The United States Air Force (and Space Force) uses the AFOQT and TBAS to select officers for pilot, combat systems officer, air battle manager and other rated careers. The AFOQT is a multi-subtest aptitude test; TBAS is a psychomotor battery whose results are combined with AFOQT pilot scores and documented flying hours into the Pilot Candidate Selection Method (PCSM) score used by rated accession boards.',
    registrationSteps: [
      { title: 'Contact an officer recruiter or ROTC detachment', description: 'Rated candidates arrange testing through a recruiter, an ROTC unit or the USAF Academy; the test is not booked by the public directly.', duration: 'varies' },
      { title: 'Take the AFOQT', description: 'Sit the proctored AFOQT at a Military Entrance Processing Station, base education office or contracted site on the scheduled date.', duration: 'about 3.5 hours' },
      { title: 'Take the TBAS', description: 'After the AFOQT, complete the TBAS psychomotor battery at a qualified testing location if you are a pilot or CSO candidate.', duration: 'about 1.5 hours' },
      { title: 'Receive your PCSM score', description: 'The Air Force combines your AFOQT pilot subscore, TBAS results and any logged flying hours into a PCSM score of 1 to 99.', duration: 'after testing' },
      { title: 'Use results at the rated board', description: 'Your AFOQT composites and PCSM feed the selection board that fills pilot, CSO and ABM slots.', duration: 'board cycle' }
    ],
    proctoring: 'The AFOQT is administered in person under a proctor at MEPS, base education offices and some ROTC detachments. The TBAS is given at designated test sites on approved workstations.',
    retakePolicy: 'The AFOQT may be taken once, then a second time after a 150-day wait; a third attempt requires a waiver. The TBAS can be retaken to improve the PCSM score subject to Air Force policy and waiting periods.',
    recertification: 'These are selection tests rather than certifications, so there is no renewal; scores are used for the applicable accession board.',
    scoreReporting: 'The AFOQT reports six composites (Pilot, CSO, ABM, Academic Aptitude, Verbal, Quantitative) on a 1 to 99 scale. The TBAS contributes to the PCSM score, also 1 to 99.',
    providersNote: 'Use the official AFOQT study guide and free practice sets; no paid course is required, and the TBAS is best prepared for with the official familiarity materials.',
    orgFaqs: [
      { q: 'How many times can I take the AFOQT?', a: 'Generally twice, with a 150-day wait between attempts; a third attempt needs a waiver. Plan the first attempt carefully because retakes are limited.' },
      { q: 'What is the PCSM score?', a: 'The Pilot Candidate Selection Method score blends your AFOQT pilot subscore, your TBAS performance and any logged flying hours into a single 1 to 99 number that rated boards weigh heavily.' }
    ],
    sourceUrl: 'https://www.airforce.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'us-navy',
    body: 'United States Navy',
    bodyUrl: 'https://www.navy.com',
    about: 'The United States Navy uses the Aviation Selection Test Battery (ASTB-E) to select officers for aviation programs (pilot and naval flight officer) and the Officer Aptitude Rating (OAR) subset for non-aviation officer accessions. The ASTB-E yields an OAR of 20 to 80 plus aviation stanines used by Navy, Marine Corps and Coast Guard boards.',
    registrationSteps: [
      { title: 'Contact an officer recruiter or NROTC unit', description: 'Aviation and officer candidates arrange the ASTB-E through a recruiter or NROTC; it is not booked publicly.', duration: 'varies' },
      { title: 'Schedule the ASTB-E', description: 'Book a test seat at a Navy test site, MEPS or participating NROTC detachment on an open date.', duration: '15 minutes' },
      { title: 'Take the battery', description: 'Complete the ASTB-E subtests; candidates who only need the officer aptitude rating receive the OAR from the same math, reading and mechanical subtests.', duration: 'about 3 hours' },
      { title: 'Receive scores', description: 'Get the OAR (20 to 80) and the aviation stanines (AQR, PFAR, FOFAR) used for aviation selection.', duration: 'same day or after' }
    ],
    proctoring: 'The ASTB-E is administered at Navy test sites, MEPS and NROTC detachments under proctoring; valid photo identification is required and calculators are not permitted.',
    retakePolicy: 'After a first attempt there is a 30-day wait; after a second attempt the wait rises to 90 days. A maximum of three attempts is allowed within the rolling policy, and each attempt carries the full testing fee.',
    recertification: 'The ASTB-E and OAR are selection scores, not certifications, so there is no renewal.',
    scoreReporting: 'The OAR ranges from 20 to 80. Aviation subtests report stanines of 1 to 9 (AQR, PFAR, FOFAR) and a BI (biographical) score.',
    providersNote: 'Use the official ASTB study guide; the math, mechanical comprehension and aviation/naval aviation knowledge sections reward steady review more than cramming.',
    orgFaqs: [
      { q: 'Can I take only the OAR?', a: 'The OAR is the three-subtest portion of the ASTB-E (math, reading, mechanical comprehension). You sit the same battery; non-aviation programs simply use the OAR rather than the aviation stanines.' },
      { q: 'How many ASTB-E attempts do I get?', a: 'Up to three, with a 30-day wait after the first attempt and a 90-day wait after the second. Aviation boards see all attempts.' }
    ],
    sourceUrl: 'https://www.navy.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'defense-language-institute',
    body: 'Defense Language Institute Foreign Language Center',
    bodyUrl: 'https://www.dliflc.edu',
    about: 'The Defense Language Institute Foreign Language Center (DLIFLC) operates the Defense Language Aptitude Battery (DLAB) and the Defense Language Proficiency Test (DLPT). The DLAB predicts how quickly a service member can learn a foreign language, while the DLPT certifies reading and listening proficiency in a specific language and drives Foreign Language Proficiency Bonus (FLPB) pay.',
    registrationSteps: [
      { title: 'Enter the language pipeline through your branch', description: 'The DLAB is taken before assignment to language training; the DLPT is taken during and after DLIFLC coursework or on the job.', duration: 'varies' },
      { title: 'Take the DLAB for aptitude', description: 'Sit the DLAB, which teaches an artificial language and tests pattern recognition rather than any known foreign tongue.', duration: 'about 2 hours' },
      { title: 'Take the DLPT for proficiency', description: 'Complete the DLPT in the specific language needed; reading and listening are assessed separately.', duration: 'by language' },
      { title: 'Use results for assignment and pay', description: 'DLAB results support language-school selection; DLPT levels set FLPB pay and recurring proficiency requirements.', duration: 'ongoing' }
    ],
    proctoring: 'Both tests are administered at DLIFLC, military education centers and approved test sites under proctoring; the DLPT is delivered by computer at most locations.',
    retakePolicy: 'The DLAB may be retaken after a six-month wait. The DLPT is taken for annual recertification and whenever a new language or higher level is required.',
    recertification: 'DLPT proficiency is recertified roughly every year for bonus-eligible linguists; the DLAB does not expire for selection but is a one-time aptitude read.',
    scoreReporting: 'The DLAB is scored out of 164 with category cutoffs (roughly 95/100/105/110) for language difficulty tiers. The DLPT uses the ILR scale of 0 to 5, read separately for listening and reading.',
    providersNote: 'Use official DLIFLC and Defense Language Office materials; commercial DLAB prep is of limited value because the test uses an invented language.',
    orgFaqs: [
      { q: 'What DLPT level do I need for language pay?', a: 'FLPB pay requires at least a 2/2 in listening and reading on the ILR scale for most languages, with higher payments at 3/3 and above; some languages set a higher minimum.' },
      { q: 'How long is a DLAB score valid?', a: 'The DLAB is an aptitude test taken once before language training; it does not expire for selection purposes, but a retake is allowed only after a six-month wait.' }
    ],
    sourceUrl: 'https://www.dliflc.edu',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'wonderlic',
    body: 'Wonderlic, Inc.',
    bodyUrl: 'https://www.wonderlic.com',
    about: 'Wonderlic, Inc. publishes cognitive and scholastic ability tests used by employers, career schools and colleges. The Wonderlic Cognitive Ability Test is a 12-minute, 50-question general intelligence screen, while the Wonderlic Scholastic Level Exam (SLE) documents ability-to-benefit for career-school admission and federal financial aid eligibility.',
    registrationSteps: [
      { title: 'Receive an invitation from the employer or school', description: 'Wonderlic tests are administered by the organization, not booked by the candidate; you get a link or a test-center appointment.', duration: 'varies' },
      { title: 'Confirm the test version', description: 'Employers use the Cognitive Ability Test; career schools and colleges use the SLE for admission and Title IV ability-to-benefit documentation.', duration: 'varies' },
      { title: 'Take the test under monitoring', description: 'Complete the timed test online with the administrator monitoring, or at a proctored site.', duration: '12 to 30 minutes' },
      { title: 'Receive the report', description: 'The organization gets a scored report with a percentile compared to the relevant norm group.', duration: 'immediately after' }
    ],
    proctoring: 'Administered by the requesting employer or school, usually online with identity and session monitoring; some settings use a proctored room.',
    retakePolicy: 'Retakes follow the administering organization policy; Wonderlic permits a retest after a waiting period set by the administrator, and some uses cap the number of attempts.',
    recertification: 'These are aptitude screenings, not certifications, so there is no renewal.',
    scoreReporting: 'The Cognitive Ability Test is scored 0 to 50; the SLE reports a raw and scale score with percentiles relative to the scholastic norm group.',
    providersNote: 'Official Wonderlic practice tests are the best preparation; the test is heavily speeded, so answering quickly and accurately matters more than deep study.',
    orgFaqs: [
      { q: 'Is the Wonderlic timed?', a: 'Yes. The Cognitive Ability Test gives 12 minutes for 50 questions, and the SLE gives about 30 minutes; pacing is the single biggest factor in the score.' },
      { q: 'What is a good Wonderlic score?', a: 'The average among adult test takers is about 20 out of 50. Employers and schools set their own cut scores, so ask the organization what it requires.' }
    ],
    sourceUrl: 'https://www.wonderlic.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'act',
    body: 'ACT, Inc.',
    bodyUrl: 'https://www.act.org',
    about: 'ACT, Inc. is a nonprofit assessment organization behind the ACT college-entrance exam, the ACT Aspire longitudinal assessment (grades 3 to 10) and the WorkKeys workplace-skills battery that yields the National Career Readiness Certificate (NCRC). Aspire tracks growth toward ACT college-readiness benchmarks; WorkKeys certifies foundational job skills.',
    registrationSteps: [
      { title: 'For Aspire, test through the school', description: 'ACT Aspire is given by schools in their testing windows; families do not register individually.', duration: 'school window' },
      { title: 'For WorkKeys, find a test center or online seat', description: 'Book the Applied Math, Graphic Literacy and Workplace Documents assessments at an authorized center or via online proctoring.', duration: '15 minutes' },
      { title: 'Take the assessment', description: 'Aspire is administered online or on paper by grade and subject; WorkKeys is taken per skill and scored to a level.', duration: 'by test' },
      { title: 'Receive scores and the NCRC', description: 'Aspire reports subject scale scores; WorkKeys issues an NCRC level (Bronze through Platinum) when all three assessments meet the threshold.', duration: 'after scoring' }
    ],
    proctoring: 'ACT Aspire is school-administered under standard conditions. WorkKeys is delivered at authorized test centers and through online proctoring with identity verification.',
    retakePolicy: 'Aspire is given in scheduled school windows and is not individually retaken. WorkKeys retakes follow the test-center policy and are commonly permitted to improve a level.',
    recertification: 'The NCRC is valid for two years; ACT Aspire is an annual growth measure with no renewal.',
    scoreReporting: 'ACT Aspire reports scale scores that vary by grade and subject with readiness benchmarks. WorkKeys reports skill levels 3 to 7 that map to NCRC tiers.',
    providersNote: 'Use official ACT Aspire practice and the free WorkKeys sample questions; for the NCRC, the online KeyTrain-style prep helps raise a level.',
    orgFaqs: [
      { q: 'What NCRC level do employers want?', a: 'A Silver NCRC (level 4 on all three WorkKeys assessments) aligns with the foundational skills for about two-thirds of jobs; Gold and Platinum open more doors and some college credit.' },
      { q: 'Is ACT Aspire the same as the ACT?', a: 'No. Aspire is a grades 3 to 10 longitudinal assessment tied to ACT benchmarks, while the ACT is the separate college-admission exam taken in grade 11 or 12.' }
    ],
    sourceUrl: 'https://www.act.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'scholastic-testing-service',
    body: 'Scholastic Testing Service',
    bodyUrl: 'https://www.ststesting.com',
    about: 'Scholastic Testing Service (STS) publishes the High School Placement Test (HSPT) used by Catholic and many other private high schools for admission and placement. The HSPT screens verbal, quantitative, reading, mathematics and language skills of eighth graders in a single sitting.',
    registrationSteps: [
      { title: 'Pick the target high school', description: 'Each school sets its own HSPT date and registration; you register through the school, not STS directly.', duration: 'varies' },
      { title: 'Register and pay the fee', description: 'Sign up with the admissions office for the school test date; fees and deadlines are set by the school.', duration: '15 minutes' },
      { title: 'Take the HSPT on test day', description: 'Sit the exam at the school on its scheduled morning, supervised by school staff.', duration: 'about 2.5 hours' },
      { title: 'Receive scores at the school', description: 'The school gets the report with subtest and total scale scores plus national percentiles and uses them for admission and placement.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at the host high school on a single Saturday under proctoring by school personnel; students typically test at only one school.',
    retakePolicy: 'The HSPT is generally taken once per admission cycle; retaking at a second school in the same year is usually not permitted, so choose the test site carefully.',
    recertification: 'The HSPT is an admission screen, not a certification, so there is no renewal.',
    scoreReporting: 'Subtests and the total are reported on a 200 to 800 scale with national percentile ranks; schools set their own admission and scholarship cut scores.',
    providersNote: 'Use the official STS HSPT preparation handbook; the test rewards steady verbal and math fundamentals more than last-minute cramming.',
    orgFaqs: [
      { q: 'Can my child take the HSPT more than once?', a: 'Typically no. Most schools allow one attempt per admissions cycle, and taking it at a second school in the same year is generally prohibited.' },
      { q: 'What HSPT score do Catholic high schools want?', a: 'Each school sets its own cut score and weighs the HSPT alongside grades and records; ask the admission office what it considers competitive.' }
    ],
    sourceUrl: 'https://www.ststesting.com',
    verified: true,
    confidence: 'high'
  }
  ,
  {
    id: 'johns-hopkins-cty',
    body: 'Johns Hopkins Center for Talented Youth',
    bodyUrl: 'https://cty.jhu.edu',
    about: 'The Johns Hopkins Center for Talented Youth (CTY) uses the School and College Ability Test (SCAT) to qualify students in grades 2 through 8 for its gifted and advanced programs. The SCAT is an above-grade-level test: it measures verbal and quantitative reasoning at a level one to two grades above the student so that advanced learners are not ceilinged by grade-level exams.',
    registrationSteps: [
      { title: 'Create a CTY account', description: 'A parent opens a CTY account and enrolls the student in the talent search or program that requires the SCAT.', duration: '10 minutes' },
      { title: 'Register for the SCAT', description: 'Choose a Prometric test center, a school-based administration or the remote proctored option, then pick a date.', duration: '15 minutes' },
      { title: 'Take the SCAT', description: 'Complete the two above-grade-level sections (verbal and quantitative) under proctoring.', duration: 'about 1 hour' },
      { title: 'Receive scores and eligibility', description: 'CTY reports the scaled scores with above-grade percentiles and tells you which programs the student qualifies for.', duration: 'after scoring' }
    ],
    proctoring: 'The SCAT is given at Prometric centers, at CTY-approved school sites and through remotely proctored online sessions with identity verification.',
    retakePolicy: 'A student may take the SCAT up to twice in a 12-month period; CTY treats the higher valid score as the qualification result.',
    recertification: 'The SCAT is an ability screen for program eligibility, not a certification, so there is no renewal.',
    scoreReporting: 'Verbal and quantitative sections are scaled 400 to 514; results are reported as percentiles against the above-grade norm group.',
    providersNote: 'Use the official CTY SCAT sample questions; because the test is above grade level, familiarizing the student with harder material helps more than drill.',
    orgFaqs: [
      { q: 'How many times can my child take the SCAT?', a: 'Up to twice within a 12-month period. CTY uses the stronger valid score for program qualification, so a retake can open higher-level courses.' },
      { q: 'What SCAT score qualifies for CTY?', a: 'Eligibility depends on the program and the above-grade percentile; CTY publishes the qualifying scores by grade after each administration.' }
    ],
    sourceUrl: 'https://cty.jhu.edu',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'archdiocese-ny-brooklyn',
    body: 'Archdiocese of New York and Diocese of Brooklyn and Queens',
    bodyUrl: 'https://www.tachs.info',
    about: 'The Archdiocese of New York and the Diocese of Brooklyn and Queens jointly administer the Test for Admission into Catholic High Schools (TACHS) for eighth graders seeking admission to Catholic high schools in the New York City area. The single exam covers reading, written expression, mathematics and general reasoning ability.',
    registrationSteps: [
      { title: 'Register through TACHS', description: 'A parent registers the eighth grader on the TACHS website and pays the fee; the student may list up to three or four schools.', duration: '15 minutes' },
      { title: 'Receive a test site assignment', description: 'TACHS assigns the student to a Catholic high school testing location for the November test date.', duration: 'before test day' },
      { title: 'Take the TACHS', description: 'Sit the exam on the scheduled morning at the assigned school under proctoring.', duration: 'about 2.5 hours' },
      { title: 'Scores route to your schools', description: 'Results are sent to the schools you listed; each school makes its own admission decision.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at assigned Catholic high schools on a single Saturday in November under proctoring by school staff; photo ID and admission ticket are required.',
    retakePolicy: 'The TACHS is given once per year; a student cannot retake it for the same admissions cycle.',
    recertification: 'The TACHS is an admission screen, not a certification, so there is no renewal.',
    scoreReporting: 'The exam yields a total score with national and local percentiles that the receiving schools use for admission and placement.',
    providersNote: 'Use the official TACHS handbook and practice tests; the test is straightforward reasoning and math rather than memorized content.',
    orgFaqs: [
      { q: 'Can my child take the TACHS more than once?', a: 'No. The TACHS is administered once each year, so the single attempt is what all of your chosen schools receive.' },
      { q: 'Which schools accept the TACHS?', a: 'Member Catholic high schools in the Archdiocese of New York and the Dioceses of Brooklyn and Queens accept the TACHS; confirm the current list on the TACHS site.' }
    ],
    sourceUrl: 'https://www.tachs.info',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'aspen-uarizona',
    body: 'Aspen Publishing and the University of Arizona',
    bodyUrl: 'https://www.jdnext.com',
    about: 'JD-Next is an eight-week online law course followed by a final assessment that law schools may accept in place of, or alongside, the LSAT under American Bar Association variance approval. Developed at the University of Arizona James E. Rogers College of Law and delivered with Aspen Publishing, it teaches the reading, analysis and exam skills of a first-year legal-education course.',
    registrationSteps: [
      { title: 'Apply to a participating school or directly', description: 'Some law schools admit through JD-Next directly; others let you enroll in a cohort and submit the score. Check each school policy.', duration: 'varies' },
      { title: 'Enroll in an eight-week cohort', description: 'Register for a scheduled cohort, pay the program fee and gain access to the online modules and readings.', duration: '15 minutes' },
      { title: 'Complete the coursework', description: 'Work through the video lessons, readings and practice exercises on a set schedule over eight weeks.', duration: '8 weeks' },
      { title: 'Take the final assessment', description: 'Sit the proctored final assessment that measures the legal-analysis skills taught in the course.', duration: 'about 2 hours' }
    ],
    proctoring: 'The final assessment is taken online with remote proctoring and identity verification; the course itself is self-paced within the cohort schedule.',
    retakePolicy: 'Cohorts run several times a year; whether you may retake depends on the admitting school policy and the cohort rules.',
    recertification: 'JD-Next is an admission assessment, not a certification, so there is no renewal.',
    scoreReporting: 'The final assessment is scored on a 400 to 1000 scale; schools set their own acceptable or recommended scores.',
    providersNote: 'Use the official JD-Next course materials and practice assessments; the assessment rewards the analytical method taught in the course, not outside trivia.',
    orgFaqs: [
      { q: 'Is JD-Next accepted instead of the LSAT?', a: 'More than 60 law schools accept JD-Next under ABA variance, either as an alternative or a supplement to the LSAT; each school sets its own policy, so check the list on the JD-Next site.' },
      { q: 'How is JD-Next scored?', a: 'The final assessment is reported on a 400 to 1000 scale. Because it tests skills taught in the course, completing the eight weeks is the main preparation.' }
    ],
    sourceUrl: 'https://www.jdnext.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'law-school-admission-council',
    body: 'Law School Admission Council',
    bodyUrl: 'https://www.lsac.org',
    about: 'The Law School Admission Council (LSAC) administers the Law School Admission Test (LSAT), the standard admission exam for law schools in the United States and Canada. The LSAT measures logical reasoning, analytical reasoning and reading comprehension, and now includes a separately administered, scored LSAT Writing sample.',
    registrationSteps: [
      { title: 'Create an LSAC account', description: 'Open a free LSAC account and add your information; this is also where you send scores and track applications.', duration: '10 minutes' },
      { title: 'Register for a test date', description: 'Choose an in-person administration at a Prometric center or the remote LSAT; book early because seats fill quickly.', duration: '15 minutes' },
      { title: 'Complete LSAT Writing', description: 'Do the writing sample in advance through the online proctoring platform; it is required before scores are released.', duration: '35 minutes' },
      { title: 'Take the LSAT and send scores', description: 'Sit the multiple-choice test and route official score reports to your schools through LSAC.', duration: 'test day' }
    ],
    proctoring: 'The multiple-choice LSAT is given at Prometric centers or remotely with live online proctoring and a secured browser; LSAT Writing is remotely proctored.',
    retakePolicy: 'You may take the LSAT up to five times in the current five-year reportable period and up to seven times in a lifetime, with limits on how many times per year.',
    recertification: 'The LSAT is an admission test, not a certification, so there is no renewal.',
    scoreReporting: 'The LSAT is scored on a 120 to 180 scale in one-point increments; most test takers cluster around a median near 152.',
    providersNote: 'Use official LSAC LawHub prep, including the free and paid practice tests; the analytical reasoning games reward methodical diagramming.',
    orgFaqs: [
      { q: 'How many times can I take the LSAT?', a: 'Up to five times in the current five-year reporting window and seven times lifetime, with per-year caps. Schools see all reportable scores, so plan retakes thoughtfully.' },
      { q: 'How long are LSAT scores valid?', a: 'LSAC reports scores from the past five years; most law schools accept scores within that window, though some prefer more recent results.' }
    ],
    sourceUrl: 'https://www.lsac.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'duolingo',
    body: 'Duolingo, Inc.',
    bodyUrl: 'https://englishtest.duolingo.com',
    about: 'Duolingo, Inc. offers the Duolingo English Test (DET), an adaptive English-proficiency exam taken entirely at home in about an hour. It is accepted for admission by thousands of colleges and universities in the United States and abroad as a convenient, lower-cost alternative to center-based tests.',
    registrationSteps: [
      { title: 'Create a DET account', description: 'Sign up on the Duolingo English Test site and confirm the school list that should receive your score.', duration: '5 minutes' },
      { title: 'Verify your identity', description: 'Upload a government ID and complete the photo and environment checks before the test opens.', duration: '5 minutes' },
      { title: 'Take the test at home', description: 'Complete the adaptive test in one sitting with your camera on; the system records the session for review.', duration: 'about 1 hour' },
      { title: 'Receive and send results', description: 'Get your certified score within two days and forward it to the schools you selected.', duration: 'within 2 days' }
    ],
    proctoring: 'Taken at home with the webcam on; an automated system plus human reviewers check the session for integrity, and the test must be completed in one uninterrupted sitting.',
    retakePolicy: 'You may take the test up to three times within any 30-day window, as long as each attempt is certified.',
    recertification: 'The DET is a proficiency exam, not a certification, but scores are valid for two years from the test date.',
    scoreReporting: 'The overall score runs from 10 to 160 in one-point increments, with subscore bands for literacy, comprehension, conversation and production.',
    providersNote: 'Use the free official practice test; because the exam adapts, a calm, focused single sitting matters more than memorized answers.',
    orgFaqs: [
      { q: 'How many times can I take the Duolingo English Test?', a: 'Up to three certified tests in any 30-day period. Each attempt is scored, and you choose which results to send.' },
      { q: 'Is the Duolingo English Test accepted for admission?', a: 'Yes, by thousands of institutions, though each school sets its own minimum. Verify the required score with the admission office before booking.' }
    ],
    sourceUrl: 'https://englishtest.duolingo.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'itep',
    body: 'International Test of English Proficiency',
    bodyUrl: 'https://www.itepexam.com',
    about: 'The International Test of English Proficiency (iTEP) offers the iTEP Academic exam used by US colleges, intensive English programs and pathway providers to assess the English proficiency of applicants. It measures grammar, listening, reading, writing and speaking and reports CEFR-aligned levels.',
    registrationSteps: [
      { title: 'Find a certified iTEP center or online seat', description: 'Register at an authorized iTEP Test Center or through the iTEP Virtual Testing System for an online-proctored attempt.', duration: '15 minutes' },
      { title: 'Take the exam', description: 'Complete the Academic-Plus sections (grammar, listening, reading, writing, speaking) in a single sitting.', duration: '90 minutes' },
      { title: 'Receive the report', description: 'Get the official score report with an overall 0 to 6 level and CEFR alignment, usually within one business day.', duration: 'within 24 hours' }
    ],
    proctoring: 'Delivered at certified test centers or online through the iTEP Virtual Testing System with live proctor monitoring and identity verification.',
    retakePolicy: 'Retakes follow the test-center or institution policy; iTEP Academic is on-demand, so scheduling a new attempt is usually quick.',
    recertification: 'The iTEP Academic is a proficiency exam, not a certification; scores are valid for two years.',
    scoreReporting: 'The overall score runs from 0 to 6 in 0.1 increments, with separate levels for each skill aligned to the CEFR.',
    providersNote: 'Use official iTEP practice tests; the speaking and writing sections are graded by trained ESL professionals, so clear structure helps.',
    orgFaqs: [
      { q: 'How is iTEP Academic scored?', a: 'You receive an overall level from 0 to 6 (in 0.1 steps) and per-skill levels, all aligned to the CEFR. Grammar, listening and reading are auto-scored; writing and speaking are graded by trained reviewers.' },
      { q: 'Where is iTEP Academic accepted?', a: 'Over 1,000 institutions worldwide partner with iTEP, including many US colleges and pathway programs; confirm the specific school before registering.' }
    ],
    sourceUrl: 'https://www.itepexam.com',
    verified: true,
    confidence: 'high'
  }
  ,
  {
    id: 'languagecert',
    body: 'LanguageCert',
    bodyUrl: 'https://www.languagecert.org',
    about: 'LanguageCert is an international awarding body offering LanguageCert Academic, a four-skill English test for higher-education admission. The exam is delivered at test centers or online with live remote proctoring and is reported on the LanguageCert Global Scale aligned to the CEFR from B1 to C2.',
    registrationSteps: [
      { title: 'Register on the LanguageCert site', description: 'Create an account and choose the online proctored option or an authorized test center near you.', duration: '10 minutes' },
      { title: 'Select a date', description: 'LanguageCert Academic is on-demand, so pick a time that fits your application deadline.', duration: '5 minutes' },
      { title: 'Take the test', description: 'Complete the listening, reading, writing and live speaking components in one sitting.', duration: 'about 2.5 hours' },
      { title: 'Receive the report', description: 'Get official results with an overall 0 to 100 score and CEFR level, typically within five working days.', duration: 'within 5 days' }
    ],
    proctoring: 'Delivered at authorized test centers or online with live remote proctoring and identity verification; the speaking component is a live video session with an examiner.',
    retakePolicy: 'Retakes follow LanguageCert policy and are commonly permitted; because it is on-demand, a new attempt can usually be scheduled quickly.',
    recertification: 'LanguageCert Academic is a proficiency exam, not a certification; results are valid for two years.',
    scoreReporting: 'Scores run from 0 to 100 on the LanguageCert Global Scale, mapped to CEFR levels B1, B2, C1 and C2 with Pass, Merit and Distinction tiers.',
    providersNote: 'Use the official LanguageCert practice tests and sample papers; the listening audio is played twice, which helps on test day.',
    orgFaqs: [
      { q: 'How is LanguageCert Academic scored?', a: 'You receive an overall 0 to 100 score aligned to the CEFR (B1 to C2) and a per-skill breakdown. A C1 Pass is broadly equivalent to IELTS 7.0.' },
      { q: 'Where is LanguageCert Academic accepted?', a: 'A growing number of US and international institutions accept it; always confirm the required level with the admission office before booking.' }
    ],
    sourceUrl: 'https://www.languagecert.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'mcgraw-hill',
    body: 'McGraw Hill',
    bodyUrl: 'https://www.aleks.com',
    about: 'McGraw Hill publishes ALEKS Placement, Preparation and Learning (PPL), an adaptive mathematics placement system used by colleges and universities to place incoming students into the right math course. ALEKS pairs an initial assessment with a personalized Prep and Learning Module and several retake attempts.',
    registrationSteps: [
      { title: 'Get ALEKS access from your college', description: 'Your school provides a license code or link; some charge a small fee, others include it in enrollment.', duration: 'varies' },
      { title: 'Take the initial assessment', description: 'Complete the untimed, adaptive math assessment in one sitting using paper and pencil for work.', duration: '60 to 90 minutes' },
      { title: 'Work the learning module', description: 'Use the personalized Prep and Learning Module to close gaps before a retake, as your school requires.', duration: '5-plus hours' },
      { title: 'Retake to improve placement', description: 'Sit a proctored reassessment to try for a higher course placement.', duration: '60 to 90 minutes' }
    ],
    proctoring: 'The initial assessment is often unproctored, but many colleges require a proctored reassessment using Respondus LockDown Browser and Monitor with a webcam.',
    retakePolicy: 'Most schools allow up to four or five placement attempts, with a required study period (commonly about five hours) and a short wait between them.',
    recertification: 'An ALEKS PPL placement result is typically valid for about 12 months for course enrollment.',
    scoreReporting: 'The overall score is a number from 0 to 100 representing the percentage of math topics mastered; course placement depends on the score and the student major.',
    providersNote: 'Use the included Prep and Learning Module between attempts; it is the fastest way to raise a placement because it targets exactly the topics you missed.',
    orgFaqs: [
      { q: 'How many questions are on the ALEKS assessment?', a: 'Up to 30 open-response questions, and it is untimed; most students finish in 60 to 90 minutes. You cannot go back and change an answer once submitted.' },
      { q: 'Is the ALEKS PPL timed?', a: 'The assessment is not strictly timed, but you must complete it within 24 hours of starting. The learning module work between attempts is what usually moves your placement.' }
    ],
    sourceUrl: 'https://www.aleks.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'texas-higher-ed',
    body: 'Texas Higher Education Coordinating Board',
    bodyUrl: 'https://www.tsia2.acsite.org',
    about: 'The Texas Higher Education Coordinating Board oversees the Texas Success Initiative and the TSIA2 placement assessment required of most entering students at Texas public colleges and universities. The TSIA2 checks readiness in English language arts/reading and mathematics so students are placed into college-level or developmental courses.',
    registrationSteps: [
      { title: 'Check your exemption status', description: 'SAT, ACT, STAAR or prior college coursework may exempt you from part or all of the TSIA2; confirm with the college.', duration: 'varies' },
      { title: 'Find a test site', description: 'Register through the admissions or testing office of the Texas college you plan to attend.', duration: '15 minutes' },
      { title: 'Take the diagnostic and assessment', description: 'Complete the ELAR and Mathematics assessments, with a diagnostic first if you score below the college-ready mark.', duration: 'about 2 to 3 hours' },
      { title: 'Receive placement', description: 'The college uses your scores to place you into the right courses and advising track.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at Texas college and university testing centers under standard proctoring; a photo ID is required.',
    retakePolicy: 'You may retake the TSIA2 after a waiting period and advising, per the college policy; a diagnostic then a shorter reassessment is the usual path.',
    recertification: 'TSIA2 scores are valid for placement for five years from the test date.',
    scoreReporting: 'College readiness is met at ELAR 945 with an essay of 5 or higher, or Mathematics 950. Below those marks, a diagnostic and developmental placement apply.',
    providersNote: 'Use the official TSIA2 sample questions and the free practice app; the essay matters for the ELAR college-ready call.',
    orgFaqs: [
      { q: 'Who has to take the TSIA2?', a: 'Most first-time entering students at Texas public colleges must take it unless they are exempt through SAT, ACT, STAAR or prior college credit. Check your specific exemption with the school.' },
      { q: 'What TSIA2 score is college ready?', a: 'ELAR 945 with an essay score of at least 5, or Mathematics 950. Scoring below triggers a diagnostic and placement into a supporting course.' }
    ],
    sourceUrl: 'https://www.tsia2.acsite.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'us-army',
    body: 'United States Army',
    bodyUrl: 'https://www.goarmy.com',
    about: 'The United States Army uses the Selection Instrument for Flight Training (SIFT) to select warrant officer candidates for flight training. The SIFT measures spatial aptitude, aviation knowledge, math and mechanical reasoning, and replaced the older flight-aptitude selection battery in 2014.',
    registrationSteps: [
      { title: 'Contact a warrant officer recruiter', description: 'Army aviation candidates arrange the SIFT through a recruiter or the WOFT (warrant officer flight training) pipeline; it is not booked publicly.', duration: 'varies' },
      { title: 'Take the SIFT', description: 'Sit the seven-subtest battery at MEPS or an Army test site under proctoring.', duration: 'about 3 hours' },
      { title: 'Use the score at the board', description: 'Your SIFT score feeds the warrant officer aviation selection board along with other packet items.', duration: 'board cycle' }
    ],
    proctoring: 'Administered at Military Entrance Processing Stations and approved Army test sites under proctoring with photo identification.',
    retakePolicy: 'A candidate may attempt the SIFT a maximum of two times in a lifetime, with a 180-day wait between attempts.',
    recertification: 'The SIFT is a selection test, not a certification, so there is no renewal.',
    scoreReporting: 'The SIFT is scored on a 20 to 80 scale; a minimum of 40 is required to qualify for flight-training consideration.',
    providersNote: 'Use the official SIFT study guide; calculators are not permitted, so practice the math and mechanical sections by hand.',
    orgFaqs: [
      { q: 'How many times can I take the SIFT?', a: 'Only twice in a lifetime, with a 180-day wait between attempts. Treat the first attempt as the one that counts.' },
      { q: 'What score do I need on the SIFT?', a: 'You must score at least 40 on the 20 to 80 scale to be considered for Army aviation warrant officer training; competitive boards look for meaningfully higher scores.' }
    ],
    sourceUrl: 'https://www.goarmy.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'curriculum-associates',
    body: 'Curriculum Associates',
    bodyUrl: 'https://www.curriculumassociates.com',
    about: 'Curriculum Associates makes i-Ready, an adaptive diagnostic in reading and mathematics given by schools three times a year to students in kindergarten through grade 8 (and some high-school English learners). The goal is to find skill gaps and guide instruction, not to assign a pass or fail grade.',
    registrationSteps: [
      { title: 'Test through the school', description: 'i-Ready is school-administered in fall, winter and spring windows; families do not register individually.', duration: 'school window' },
      { title: 'Student takes the diagnostic', description: 'The student completes the adaptive reading and math diagnostic on a computer at school.', duration: '45 to 75 min per subject' },
      { title: 'Teacher uses the data', description: 'The teacher reads the scale score and placement level and assigns lessons to target gaps.', duration: 'ongoing' }
    ],
    proctoring: 'Given at school under normal classroom supervision; the adaptive engine adjusts difficulty in real time.',
    retakePolicy: 'Administered on the school calendar (typically three times a year) and not individually retaken; there is no pass or fail.',
    recertification: 'The diagnostic is an instructional tool, not a certification, so there is no renewal.',
    scoreReporting: 'Reports a scale score (roughly 100 to 800) and a percentile plus a placement level such as below, on or above grade level; growth is tracked across windows.',
    providersNote: 'Families can use the official i-Ready family resources and at-home practice; the test adapts, so steady reading and math practice helps more than cramming.',
    orgFaqs: [
      { q: 'Is the i-Ready Diagnostic graded?', a: 'No. It is a diagnostic, not a graded test. It reports a scale score and a placement level so teachers can target instruction; it does not pass or fail a student.' },
      { q: 'How often is i-Ready given?', a: 'Most schools administer it three times a year (fall, winter, spring) to measure growth; some also use short checks between windows.' }
    ],
    sourceUrl: 'https://www.curriculumassociates.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nwea',
    body: 'NWEA',
    bodyUrl: 'https://www.nwea.org',
    about: 'NWEA (now part of HMH) makes MAP Growth, a computer-adaptive interim assessment used by schools to measure achievement and academic growth in reading, language, mathematics and science from kindergarten through grade 12. MAP Growth reports stable RIT scores that track growth over time.',
    registrationSteps: [
      { title: 'Test through the school', description: 'MAP Growth is school-administered in fall, winter and spring windows; families do not register individually.', duration: 'school window' },
      { title: 'Student takes the adaptive test', description: 'The student completes the untimed adaptive test on a computer; difficulty adjusts to each answer.', duration: 'under 1 hour per subject' },
      { title: 'Teacher uses the RIT score', description: 'The teacher reads the RIT score and percentile to plan instruction and monitor growth.', duration: 'ongoing' }
    ],
    proctoring: 'Given at school under normal conditions; the adaptive engine personalizes the question stream for each student.',
    retakePolicy: 'Administered on the school calendar (commonly three times a year) and not individually retaken; there is no pass or fail.',
    recertification: 'MAP Growth is an interim assessment, not a certification, so there is no renewal.',
    scoreReporting: 'Reports a RIT score (a stable scale like feet and inches) with national percentiles; RIT lets schools compare growth across grades and subjects.',
    providersNote: 'Families can use the official NWEA practice site (practice.mapnwea.org) to familiarize students with the interface; the test is untimed.',
    orgFaqs: [
      { q: 'What is a RIT score?', a: 'A RIT score is a stable measure of achievement on a scale that works across grades, like marking height on a growth chart. It shows the level where a student answered about half the questions correctly.' },
      { q: 'Is MAP Growth a pass/fail test?', a: 'No. MAP Growth measures current achievement and growth over time; it is not a pass/fail test and is not used for grade-level proficiency alone.' }
    ],
    sourceUrl: 'https://www.nwea.org',
    verified: true,
    confidence: 'high'
  }
  ,
  {
    id: 'nces',
    body: 'National Center for Education Statistics',
    bodyUrl: 'https://nces.ed.gov/nationsreportcard',
    about: 'The National Center for Education Statistics (NCES), within the US Department of Education, runs the National Assessment of Educational Progress (NAEP), the Nation’s Report Card. NAEP is a congressionally mandated sample assessment of student achievement in reading, mathematics, science, writing and other subjects; it reports national and state trends, never individual student scores.',
    registrationSteps: [
      { title: 'Selected schools participate', description: 'NAEP samples schools and students; a family cannot opt in individually, and participation by students is voluntary.', duration: 'varies' },
      { title: 'Student takes the assessment', description: 'Selected students complete the assessment in one subject during regular school hours.', duration: '90 to 120 minutes' },
      { title: 'Results are published as group data', description: 'NCES reports scale scores and achievement levels for the nation, states and some urban districts, not for individuals or schools.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at school by NAEP representatives; accommodations are provided for students with disabilities and English learners.',
    retakePolicy: 'NAEP is a sample assessment given in scheduled years (reading and math every two years), so there is no individual retake.',
    recertification: 'NAEP is a survey, not a certification, so there is no renewal.',
    scoreReporting: 'Main NAEP reports a 0 to 500 scale (0 to 300 for some subjects) with achievement levels Basic, Proficient and Advanced. Individual student scores are never reported.',
    providersNote: 'Use the public NAEP Tools on the Nations Report Card site to see released questions and trends; these are for understanding, not individual prep.',
    orgFaqs: [
      { q: 'Will I get my child’s NAEP score?', a: 'No. NAEP is a sample survey and federal law prohibits reporting results for individual students or schools; it only publishes group trends.' },
      { q: 'Is NAEP required?', a: 'Participation is voluntary for every student, school and state, but federal law requires states that receive Title I funds to take part in the grades 4 and 8 reading and math assessments.' }
    ],
    sourceUrl: 'https://nces.ed.gov/nationsreportcard',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nysed',
    body: 'New York State Education Department',
    bodyUrl: 'https://www.nysed.gov',
    about: 'The New York State Education Department administers the New York State Regents Examinations, the subject-specific high-school exit exams in English, mathematics, science and social studies. Earning passing scores on the required Regents exams is part of qualifying for a Regents or Advanced Regents diploma.',
    registrationSteps: [
      { title: 'Take Regents exams at your high school', description: 'Students sit the exams in their school during the January, June and August windows after completing the course.', duration: 'school window' },
      { title: 'Meet the score requirements', description: 'A Regents diploma needs a score of 65 or higher on the required exams; an Advanced Regents diploma requires more exams at 65 plus a language sequence.', duration: 'varies' },
      { title: 'Use scores for the diploma', description: 'The school applies the scores toward the diploma type; a 90 average across required exams earns honors.', duration: 'graduation' }
    ],
    proctoring: 'Administered at the student’s high school under proctoring by school staff during state testing windows.',
    retakePolicy: 'Students may retake a Regents exam in a later administration (January, June or August); some students may appeal a score within three points of 65.',
    recertification: 'Regents exams are high-school exit exams, not certifications, so there is no renewal.',
    scoreReporting: 'Each exam is scored 0 to 100; 65 is the passing mark, and a computed average of 90 or better across required exams earns a Regents diploma with honors.',
    providersNote: 'Use the official NYSED Regents prep and the released exams with answer keys; the exams reward course mastery.',
    orgFaqs: [
      { q: 'How many Regents exams do I need?', a: 'A standard Regents diploma requires five exams at 65 or better (one each in English, math, science, and two in social studies). An Advanced Regents diploma requires about eight.' },
      { q: 'What is a passing Regents score?', a: '65 out of 100 is the passing score on each exam. An average of 90 or higher across the required exams earns a diploma with honors.' }
    ],
    sourceUrl: 'https://www.nysed.gov',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'parcc',
    body: 'Partnership for Assessment of Readiness for College and Careers',
    bodyUrl: 'https://www.parcconline.org',
    about: 'The Partnership for Assessment of Readiness for College and Careers (PARCC) was a multi-state consortium that developed Common Core-aligned English language arts and mathematics assessments for grades 3 through 11. The consortium disbanded in 2017 and its question bank is now managed by New Meridian; most former member states have moved to their own custom tests built from that content.',
    registrationSteps: [
      { title: 'Note the consortium no longer operates', description: 'PARCC as a full consortia test effectively ended after 2018; states now use their own assessments derived from or inspired by the PARCC item bank.', duration: 'n/a' },
      { title: 'Check your state test', description: 'If your state previously used PARCC, find the current state assessment name and schedule from the state education agency.', duration: 'varies' },
      { title: 'Prepare with released content', description: 'Legacy PARCC practice items remain useful for the skills tested by successor state exams.', duration: 'varies' }
    ],
    proctoring: 'When offered, PARCC was school-administered under standard conditions; successor state tests follow the same model.',
    retakePolicy: 'PARCC is no longer administered as a consortium test, so there is no retake of the original exam.',
    recertification: 'PARCC was a state accountability assessment, not a certification, so there is no renewal.',
    scoreReporting: 'Legacy PARCC reported five performance levels, with Level 3 and above indicating "meets expectations" for college and career readiness.',
    providersNote: 'Use released PARCC practice items for skill practice, but confirm your current state exam name and format with the state education agency.',
    orgFaqs: [
      { q: 'Is PARCC still given?', a: 'The PARCC consortium ended in 2017 and the full test was last given around 2018. Its item bank now underpins custom state tests managed by New Meridian.' },
      { q: 'What replaced PARCC?', a: 'Former member states built their own assessments from the PARCC content. New Jersey, for example, kept a PARCC-style test for some time; check your state education agency for the current exam.' }
    ],
    sourceUrl: 'https://www.parcconline.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'smarter-balanced',
    body: 'Smarter Balanced Assessment Consortium',
    bodyUrl: 'https://smarterbalanced.org',
    about: 'The Smarter Balanced Assessment Consortium is a member-state group that developed a computer-adaptive summative assessment in English language arts/literacy and mathematics for grades 3 through 8 and high school. Member states use it for state accountability and to report college- and career-readiness levels.',
    registrationSteps: [
      { title: 'Test through the school', description: 'Smarter Balanced is given by member-state schools in the spring window; families do not register individually.', duration: 'school window' },
      { title: 'Student takes the adaptive test', description: 'The student completes the computer-adaptive ELA/literacy and math tests, including performance tasks.', duration: 'varies by grade' },
      { title: 'Receive the report', description: 'The school reports a scale score and one of four achievement levels to families.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at school under standard conditions; the computer-adaptive engine selects question difficulty in real time.',
    retakePolicy: 'Given annually in the spring by member states; retake rules follow the state policy, and it is not individually retaken.',
    recertification: 'Smarter Balanced is a state accountability assessment, not a certification, so there is no renewal.',
    scoreReporting: 'Reports a scaled score from about 2000 to 3000 that rises across grades, sorted into four levels; Level 3 and above are considered on track for college and career readiness.',
    providersNote: 'Use the official Smarter Balanced practice tests and the sample items; the adaptive format means easier and harder questions appear based on answers.',
    orgFaqs: [
      { q: 'What Smarter Balanced score is proficient?', a: 'Level 3 indicates the student has met the achievement standard and is on track for college and career readiness; Levels 1 and 2 are below standard.' },
      { q: 'Is the Smarter Balanced test adaptive?', a: 'Yes. The computer-adaptive version adjusts question difficulty to the student, and performance tasks measure deeper writing and problem solving.' }
    ],
    sourceUrl: 'https://smarterbalanced.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'texas-education-agency',
    body: 'Texas Education Agency',
    bodyUrl: 'https://tea.texas.gov',
    about: 'The Texas Education Agency runs STAAR, the State of Texas Assessments of Academic Readiness, covering grades 3 through 8 plus five high-school end-of-course exams (English I and II, Algebra I, Biology and US History). STAAR was redesigned for 2023 with online delivery, new question types and an evidence-based writing component.',
    registrationSteps: [
      { title: 'Test through the school', description: 'STAAR is given by Texas public schools in spring windows; families do not register individually.', duration: 'school window' },
      { title: 'Student takes the redesigned STAAR', description: 'The student completes the online tests, now capped at 75 percent multiple choice with more constructed responses and cross-curricular passages.', duration: 'varies by grade' },
      { title: 'Receive the report', description: 'Families view scores on TexasAssessment.gov using the student access code from the school.', duration: 'after scoring' }
    ],
    proctoring: 'Administered at school, almost entirely online since 2023, with on-screen accommodations and standard test security.',
    retakePolicy: 'Given annually; high-school end-of-course exams may be retaken, and the grade-promotion stakes for grades 5 and 8 were removed in the 2023 redesign.',
    recertification: 'STAAR is a state accountability assessment, not a certification, so there is no renewal.',
    scoreReporting: 'Reports "approaches," "meets" and "masters" grade-level standards; the scales were reset with the 2023 redesign, so results are not directly comparable to prior years.',
    providersNote: 'Use the official TexasAssessment.gov practice site so students learn the platform and new question types before test day.',
    orgFaqs: [
      { q: 'Is STAAR required in Texas?', a: 'Yes, for students in Texas public schools, though the 2023 redesign removed the grade-promotion stakes for grades 5 and 8 and moved testing almost fully online.' },
      { q: 'What changed in the 2023 STAAR redesign?', a: 'Tests are now online, capped at 75 percent multiple choice, include evidence-based writing at every grade, and use refreshed scales, so scores are not directly comparable to older STAAR.' }
    ],
    sourceUrl: 'https://tea.texas.gov',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'data-recognition-corp',
    body: 'Data Recognition Corporation',
    bodyUrl: 'https://www.datarecognitioncorp.com',
    about: 'Data Recognition Corporation publishes TerraNova, Third Edition, a nationally norm-referenced achievement battery for grades K through 12. Private schools, homeschool families and some districts use it to benchmark students against a national sample rather than against a single state standard.',
    registrationSteps: [
      { title: 'Order the test', description: 'Families and schools order TerraNova 3 through a test service or homeschool provider, which rents the materials.', duration: 'varies' },
      { title: 'Administer the test', description: 'A qualified administrator (or, for TerraNova 2, a parent) gives the timed sections across several days.', duration: '1.5 to 4.5 hours' },
      { title: 'Return materials for scoring', description: 'Send the completed booklets back; the service returns a report with percentile ranks and grade equivalents.', duration: 'after return' }
    ],
    proctoring: 'TerraNova 3 is administered by a qualified tester or proctor; TerraNova 2 may be parent-administered without a bachelor’s degree under the provider rules.',
    retakePolicy: 'Homeschool and private-school users may retest on the schedule their state or program requires; there is no fixed national limit.',
    recertification: 'TerraNova is an achievement test, not a certification, so there is no renewal.',
    scoreReporting: 'Reports National Percentile Ranks, Normal Curve Equivalents, grade-equivalent scores and stanines against the national norm group.',
    providersNote: 'Use a recognized testing service such as Seton Testing; the test is norm-referenced, so the percentile (not the number correct) is the key number.',
    orgFaqs: [
      { q: 'Can a parent administer TerraNova?', a: 'TerraNova 2 can be parent-administered without a bachelor’s degree; TerraNova 3 is given by a qualified tester. Both satisfy many state homeschool testing rules.' },
      { q: 'What does TerraNova measure?', a: 'It covers reading, language, mathematics, and (by grade) spelling, vocabulary, science and social studies, reporting where a student falls versus a national sample.' }
    ],
    sourceUrl: 'https://www.datarecognitioncorp.com',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'wida',
    body: 'WIDA at the University of Wisconsin-Madison',
    bodyUrl: 'https://wida.wisc.edu',
    about: 'WIDA, based at the University of Wisconsin-Madison, develops the ACCESS for ELLs suite of English-language-proficiency assessments. Most US states use ACCESS to measure the listening, speaking, reading and writing growth of English learners once a year.',
    registrationSteps: [
      { title: 'Identified English learners are tested at school', description: 'Schools administer ACCESS annually to students identified as English learners; families do not register.', duration: 'school window' },
      { title: 'Student takes the four domains', description: 'The student completes listening, speaking, reading and writing, online (grades 1-12), on paper or in kindergarten formats.', duration: 'varies by grade' },
      { title: 'Scores guide services', description: 'The school uses proficiency levels to plan support and to decide when a student can exit EL services.', duration: 'ongoing' }
    ],
    proctoring: 'Administered at school by trained staff; ACCESS Online is computer-adaptive, and the speaking domain is recorded and scored by the test partner.',
    retakePolicy: 'Given once per year to each identified English learner; there is no individual retake.',
    recertification: 'ACCESS is an annual proficiency assessment, not a certification, so there is no renewal.',
    scoreReporting: 'Reports proficiency levels 1 to 6 (Entering through Reaching) with scale scores of about 100 to 600; exit thresholds are set by each state.',
    providersNote: 'Use the official WIDA family resources and sample items; the test is standards-based, so no comparison to monolingual peers is intended.',
    orgFaqs: [
      { q: 'How often is ACCESS given?', a: 'Once a year, in the winter testing window, to every student identified as an English learner in a WIDA member state.' },
      { q: 'What ACCESS score lets a student exit EL services?', a: 'Each state sets its own exit threshold, often around an overall 4.2 with a 3.5 speaking. Ask your school or state education agency for the exact cut.' }
    ],
    sourceUrl: 'https://wida.wisc.edu',
    verified: true,
    confidence: 'high'
  }
];

export const exams = [
  // __EXAMS__
  {
    slug: 'afoqt',
    body: 'United States Air Force',
    tagline: 'The officer-selection test that opens Air Force and Space Force rated careers.',
    description: 'The Air Force Officer Qualifying Test (AFOQT) is the multi-subtest aptitude exam used to select officers for pilot, combat systems officer, air battle manager and a range of non-rated careers. It covers verbal, quantitative, aviation and spatial material and produces six composite scores on a 1 to 99 scale. The AFOQT is required for every rated board and is paired with the TBAS and flying hours into the PCSM score for aviators.',
    quickAnswer: {
      summary: 'The AFOQT is a free, Air Force-administered aptitude test for officer candidates, taken once or twice in a lifetime. It yields six composites scored 1 to 99, and minimum subscore floors (Verbal 15, Quantitative 10, Pilot 25) gate aviation paths.',
      advantages: [
        'Required for every Air Force and Space Force rated board',
        'Free for service-referred candidates',
        'Six composites let you aim at the path that fits your strengths',
        'Pairs with TBAS and flight hours into a single PCSM score'
      ]
    },
    roadmap: [
      'Get referred by a recruiter, ROTC detachment or academy',
      'Study the 12 subtests for 4 to 8 weeks',
      'Sit the 3h 36m AFOQT',
      'Take the TBAS if you are an aviator candidate',
      'Use your composites at the selection board'
    ],
    prerequisites: 'Open to officer candidates, ROTC cadets and academy students referred by a recruiter or detachment; you must meet Air Force commissioning eligibility, but there is no civilian walk-in route.',
    examMeta: {
      questions: 'About 516 items across 12 subtests (Form T)',
      time: '3 hours 36 minutes',
      pass: 'No single pass; floors of Verbal 15, Quantitative 10, Pilot 25',
      fee: '$0 (Air Force administered)',
      format: 'Multiple choice, paper or computer',
      admin: 'MEPS, base education offices, ROTC detachments'
    },
    topics: [
      { name: 'Pilot composite', weight: '', note: 'Table Reading, Instrument Comprehension, Aviation Information, General Science, Math Knowledge, Block Counting' },
      { name: 'Combat Systems Officer composite', weight: '', note: 'Verbal Analogies, Math Knowledge, Table Reading, Instrument Comprehension, Block Counting, Aviation Information' },
      { name: 'Air Battle Manager composite', weight: '', note: 'Verbal Analogies, Math Knowledge, Table Reading, Instrument Comprehension, Block Counting' },
      { name: 'Academic Aptitude', weight: '', note: 'Verbal and Quantitative composites combined' },
      { name: 'Verbal composite', weight: '', note: 'Word Knowledge and Verbal Analogies' },
      { name: 'Quantitative composite', weight: '', note: 'Arithmetic Reasoning and Math Knowledge' }
    ],
    examEssentials: [
      ['Composites', 'Six scores on a 1 to 99 scale'],
      ['Minimum floors', 'Verbal 15, Quantitative 10, Pilot 25 for aviators'],
      ['Attempts', 'Up to 2 lifetime, 150-day wait between; 3rd needs a waiver'],
      ['Cost', '$0 for Air Force-referred candidates'],
      ['Validity', 'No expiry for selection; used for the board']
    ],
    timeline: [
      { stage: 'Referral', duration: 'varies' },
      { stage: 'Study', duration: '4 to 8 weeks' },
      { stage: 'AFOQT', duration: '3h 36m' },
      { stage: 'TBAS (aviators)', duration: '1.5 hours' },
      { stage: 'Board', duration: 'selection cycle' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The AFOQT is free for candidates referred by the Air Force; budget separately for self-study books or a prep course if you choose one (typically $20 to $200).'
    },
    difficulty: 'Challenging',
    audience: 'Air Force and Space Force officer candidates for rated and non-rated careers.',
    time: '4 to 8 weeks',
    cost: '$0',
    faqs: [
      { q: 'How many times can I take the AFOQT?', a: 'Generally twice, with a 150-day wait between attempts. A third attempt requires a waiver, so treat the first sitting as the one that counts.' },
      { q: 'What score do I need for pilot?', a: 'There is no single pass. You must clear the subscore floors (Verbal 15, Quantitative 10) and a Pilot composite of at least 25, then compete on the combined PCSM score at the board.' },
      { q: 'Is the AFOQT free?', a: 'Yes. The Air Force administers it at no charge to referred candidates; you only pay if you buy commercial study materials.' },
      { q: 'What is a good AFOQT score?', a: 'Each composite runs 1 to 99. Competitive rated boards look for strong Pilot and Academic numbers; the minimum floors only mark eligibility, not strength.' }
    ],
    summaryPoints: [
      'The AFOQT is required for all Air Force and Space Force officer boards',
      'Six composites are scored 1 to 99; subscore floors gate aviation paths',
      'You get at most two attempts, 150 days apart, so prepare seriously',
      'It is free when referred by the Air Force'
    ],
    relatedSlugs: ['tbas'],
    sourceUrl: 'https://www.airforce.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'tbas',
    body: 'United States Air Force',
    tagline: 'The psychomotor battery that turns your AFOQT pilot score and flying hours into a PCSM.',
    description: 'The Test of Basic Aviation Skills (TBAS) is a computerized psychomotor and multitasking battery taken by Air Force pilot and combat systems officer candidates. Its results are combined with your AFOQT pilot subscore and any documented flying hours into the Pilot Candidate Selection Method (PCSM) score. The PCSM is the number rated boards weigh most heavily for pilot and CSO slots.',
    quickAnswer: {
      summary: 'The TBAS is a free, Air Force-administered psychomotor test for aviator candidates. It has no pass/fail of its own; it feeds the PCSM score (1 to 99) alongside your AFOQT pilot subscore and logged flight time.',
      advantages: [
        'Directly drives the PCSM score used by rated boards',
        'Flying hours can lift your PCSM even with a modest TBAS',
        'Free for Air Force-referred candidates',
        'Short, single-session test'
      ]
    },
    roadmap: [
      'Qualify with an AFOQT pilot subscore',
      'Schedule the TBAS at a test site',
      'Complete the psychomotor tasks in one sitting',
      'Receive your PCSM score',
      'Compete at the rated board'
    ],
    prerequisites: 'You must have a qualifying AFOQT pilot subscore and be a pilot or combat systems officer candidate referred by the Air Force.',
    examMeta: {
      questions: 'Multiple psychomotor and multitasking subtests (no fixed item count)',
      time: 'about 1.5 hours',
      pass: 'No pass/fail; contributes to PCSM 1 to 99',
      fee: '$0 (Air Force administered)',
      format: 'Computerized psychomotor tasks',
      admin: 'Designated TBAS test sites'
    },
    topics: [
      { name: 'Spatial Ability', weight: '', note: 'Mental rotation and spatial relationship tasks' },
      { name: 'Directional Orientation', weight: '', note: 'Tracking heading and position under pressure' },
      { name: 'Rotor Tracking', weight: '', note: 'Single-target tracking task' },
      { name: 'Horizontal Tracking', weight: '', note: 'Maintaining a moving target horizontally' },
      { name: 'Combined Tracking', weight: '', note: 'Multi-target tracking with added inputs' },
      { name: 'Biographical / Attitude', weight: '', note: 'Self-report temperament inventory' }
    ],
    examEssentials: [
      ['Output', 'Feeds the PCSM score (1 to 99)'],
      ['Formula', 'AFOQT pilot + TBAS + logged flying hours'],
      ['Attempts', 'Retake allowed to improve PCSM per Air Force policy'],
      ['Cost', '$0 for Air Force-referred candidates']
    ],
    timeline: [
      { stage: 'AFOQT pilot subscore', duration: 'before TBAS' },
      { stage: 'TBAS session', duration: '1.5 hours' },
      { stage: 'PCSM issued', duration: 'after scoring' },
      { stage: 'Rated board', duration: 'cycle' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The TBAS is free for Air Force-referred candidates; the main cost is the flight time that can raise your PCSM if you log hours.'
    },
    difficulty: 'Challenging',
    audience: 'Air Force pilot and combat systems officer candidates.',
    time: '2 to 4 weeks',
    cost: '$0',
    faqs: [
      { q: 'Is there a passing TBAS score?', a: 'No. The TBAS has no pass/fail by itself; it contributes to your PCSM score, which also factors in your AFOQT pilot subscore and any logged flying hours.' },
      { q: 'Do flight hours really help?', a: 'Yes. The PCSM formula credits documented flying hours (capped around 60), so candidates with civilian or solo time can lift their score even with a modest TBAS.' },
      { q: 'Can I retake the TBAS?', a: 'Yes, the Air Force allows a retake to improve the PCSM subject to its waiting-period policy; plan the first attempt well because the PCSM feeds the board.' },
      { q: 'Is the TBAS free?', a: 'Yes. The TBAS is administered free by Air Force officer selection, and candidates pay nothing to take it.' }
    ],
    summaryPoints: [
      'The TBAS is the psychomotor half of the pilot-selection score',
      'It combines with AFOQT pilot and flight hours into the PCSM (1 to 99)',
      'No pass/fail on its own; the PCSM is what boards see',
      'Free for Air Force-referred aviator candidates'
    ],
    relatedSlugs: ['afoqt'],
    sourceUrl: 'https://www.airforce.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'astb-e',
    body: 'United States Navy',
    tagline: 'The aviation selection battery for future Navy, Marine and Coast Guard pilots and flight officers.',
    description: 'The Aviation Selection Test Battery (ASTB-E) is the selection exam for Navy, Marine Corps and Coast Guard aviation officer programs. It combines multiple-choice academic subtests with performance-based measures of aviation aptitude. The result is an Officer Aptitude Rating (OAR) of 20 to 80 for non-aviation use, plus aviation stanines (AQR, PFAR, FOFAR) for pilot and naval flight officer boards.',
    quickAnswer: {
      summary: 'The ASTB-E is a free, Navy-administered test for aviation officer candidates. It yields an OAR of 20 to 80 and aviation stanines of 1 to 9; up to three attempts are allowed with waiting periods between them.',
      advantages: [
        'Single test covers both OAR and aviation stanines',
        'Free for service-referred candidates',
        'Performance-based tasks measure real aviation aptitude',
        'Used across Navy, Marine Corps and Coast Guard aviation'
      ]
    },
    roadmap: [
      'Get referred by a recruiter or NROTC unit',
      'Study math, reading, mechanical and aviation topics',
      'Schedule the ASTB-E at a Navy test site',
      'Take the seven subtests in one sitting',
      'Use OAR and stanines at the board'
    ],
    prerequisites: 'Officer candidate or midshipman referred for aviation; you must clear the medical and eligibility screens for flight training.',
    examMeta: {
      questions: 'Seven subtests: Math Skills, Reading Comprehension, Mechanical Comprehension, Aviation/Nautical Info, Biographical Inventory, Performance-Based Measures (2)',
      time: 'about 3 hours',
      pass: 'OAR 20 to 80; aviation stanines 1 to 9; boards set needs',
      fee: '$0 for service-referred candidates',
      format: 'Multiple choice plus performance-based aviation tasks',
      admin: 'Navy test sites, MEPS, NROTC detachments'
    },
    topics: [
      { name: 'Math Skills', weight: '', note: 'Arithmetic and algebra reasoning' },
      { name: 'Reading Comprehension', weight: '', note: 'Understanding written passages' },
      { name: 'Mechanical Comprehension', weight: '', note: 'Basic physics and mechanical principles' },
      { name: 'Aviation / Nautical Information', weight: '', note: 'Aviation and seamanship knowledge' },
      { name: 'Performance-Based Measures', weight: '', note: 'Two timed aviation-aptitude tasks' },
      { name: 'Biographical Inventory', weight: '', note: 'Self-report aviation-fit temperament' }
    ],
    examEssentials: [
      ['OAR', '20 to 80, used for non-aviation officer programs'],
      ['Aviation stanines', 'AQR, PFAR, FOFAR on a 1 to 9 scale'],
      ['Attempts', 'Up to 3; 30-day wait then 90-day wait'],
      ['Cost', '$0 for service-referred candidates']
    ],
    timeline: [
      { stage: 'Referral', duration: 'varies' },
      { stage: 'Study', duration: '4 to 8 weeks' },
      { stage: 'ASTB-E', duration: 'about 3 hours' },
      { stage: 'Board', duration: 'cycle' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The ASTB-E is free for candidates referred by the Navy; commercial study guides are the only optional cost.'
    },
    difficulty: 'Hard',
    audience: 'Navy, Marine Corps and Coast Guard aviation officer candidates.',
    time: '4 to 8 weeks',
    cost: '$0',
    faqs: [
      { q: 'How many times can I take the ASTB-E?', a: 'Up to three attempts: a 30-day wait after the first and a 90-day wait after the second. Aviation boards see all valid attempts.' },
      { q: 'What is a good ASTB-E score?', a: 'The OAR runs 20 to 80 and aviation stanines run 1 to 9. Competitive pilot and NFO boards look for high AQR/PFAR/FOFAR stanines; there is no fixed pass mark.' },
      { q: 'Is the ASTB-E free?', a: 'Yes, for service-referred candidates. You pay only if you buy outside study materials.' },
      { q: 'How many times can I take the ASTB-E?', a: 'Up to three attempts in a lifetime, with a 30-day wait after the first try and a 90-day wait before later attempts.' }
    ],
    summaryPoints: [
      'The ASTB-E selects Navy, Marine and Coast Guard aviation officers',
      'It yields an OAR (20 to 80) and aviation stanines (1 to 9)',
      'Up to three attempts, with 30- then 90-day waits',
      'Free when referred by the service'
    ],
    relatedSlugs: ['oar-officer-aptitude-rating', 'tbas', 'afoqt'],
    sourceUrl: 'https://www.navy.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'oar-officer-aptitude-rating',
    body: 'United States Navy',
    tagline: 'The three-subtest math, reading and mechanical score used for non-aviation Navy officer programs.',
    description: 'The Officer Aptitude Rating (OAR) is the three-subtest portion of the ASTB-E covering math skills, reading comprehension and mechanical comprehension. Non-aviation Navy and Coast Guard officer programs use the OAR alone, so candidates who do not need aviation stanines still sit the same battery and receive a single 20 to 80 score. It is a fast, free screen administered by the Navy.',
    quickAnswer: {
      summary: 'The OAR is the non-aviation subset of the ASTB-E, scored 20 to 80 from math, reading and mechanical subtests. It is free for service-referred candidates and follows the same attempt rules as the ASTB-E.',
      advantages: [
        'Single 20 to 80 number used by non-aviation boards',
        'Free for service-referred candidates',
        'Same battery as aviation candidates, so you can add aviation later',
        'Straightforward math, reading and mechanical content'
      ]
    },
    roadmap: [
      'Get referred by a recruiter or NROTC unit',
      'Study math, reading and mechanical basics',
      'Schedule the ASTB-E at a Navy test site',
      'Receive your OAR from the academic subtests',
      'Use the OAR at the officer board'
    ],
    prerequisites: 'Officer candidate or midshipman referred by a recruiter or NROTC; needed for non-aviation officer accessions rather than flight training.',
    examMeta: {
      questions: 'Three subtests: Math Skills, Reading Comprehension, Mechanical Comprehension',
      time: 'about 2 hours',
      pass: 'OAR 20 to 80; program boards set minimums',
      fee: '$0 for service-referred candidates',
      format: 'Multiple choice',
      admin: 'Navy test sites, MEPS, NROTC detachments'
    },
    topics: [
      { name: 'Math Skills', weight: '', note: 'Arithmetic and algebra reasoning' },
      { name: 'Reading Comprehension', weight: '', note: 'Understanding written passages' },
      { name: 'Mechanical Comprehension', weight: '', note: 'Basic physics and mechanical principles' }
    ],
    examEssentials: [
      ['Score', 'OAR on a 20 to 80 scale'],
      ['Attempts', 'Up to 3; 30-day then 90-day wait'],
      ['Cost', '$0 for service-referred candidates'],
      ['Used for', 'Non-aviation Navy and Coast Guard officer programs']
    ],
    timeline: [
      { stage: 'Referral', duration: 'varies' },
      { stage: 'Study', duration: '3 to 6 weeks' },
      { stage: 'ASTB-E (OAR subtests)', duration: 'about 2 hours' },
      { stage: 'Board', duration: 'cycle' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The OAR is free for service-referred candidates; optional commercial study guides are the only cost.'
    },
    difficulty: 'Moderate',
    audience: 'Non-aviation Navy and Coast Guard officer candidates.',
    time: '3 to 6 weeks',
    cost: '$0',
    faqs: [
      { q: 'Is the OAR the same test as the ASTB-E?', a: 'The OAR is the three academic subtests of the ASTB-E. Non-aviation candidates sit the same battery and receive the OAR; aviation candidates additionally get the aviation stanines.' },
      { q: 'How many OAR attempts do I get?', a: 'Up to three, with a 30-day wait after the first attempt and a 90-day wait after the second, matching the ASTB-E attempt rule.' },
      { q: 'What OAR do I need?', a: 'The OAR runs 20 to 80 and each officer program sets its own competitive minimum; ask your recruiter what the board expects.' },
      { q: 'Is the OAR the same as the ASTB-E?', a: 'The OAR is the academic portion of the ASTB-E. If you skip the aviation subtests, only the OAR (20 to 80) is reported.' }
    ],
    summaryPoints: [
      'The OAR is the non-aviation subset of the ASTB-E',
      'It scores 20 to 80 from math, reading and mechanical subtests',
      'Free for service-referred candidates',
      'Up to three attempts with waiting periods'
    ],
    relatedSlugs: ['astb-e'],
    sourceUrl: 'https://www.navy.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dlab',
    body: 'Defense Language Institute Foreign Language Center',
    tagline: 'The artificial-language aptitude test that decides if you can get into language school.',
    description: 'The Defense Language Aptitude Battery (DLAB) predicts how quickly a service member can learn a foreign language by teaching an invented language and testing pattern recognition. It is taken before assignment to Defense Language Institute training, and the score places candidates into language difficulty tiers. The DLAB is not a test of any known foreign tongue, so prior language study does not directly help.',
    quickAnswer: {
      summary: 'The DLAB is a free, military-administered aptitude test built on an artificial language. Scored out of 164, it sorts candidates into language-difficulty categories; you may retake it only after a six-month wait.',
      advantages: [
        'Determines which language tier you can train in',
        'Free when administered by the military',
        'Short, single-session test',
        'Predicts language-learning speed, not prior knowledge'
      ]
    },
    roadmap: [
      'Enter the language pipeline through your branch',
      'Study the invented-language pattern logic',
      'Take the DLAB under proctoring',
      'Receive your score and category',
      'Use it for language-school assignment'
    ],
    prerequisites: 'Service member or recruit in a language-training pipeline; some civilian language roles also use it.',
    examMeta: {
      questions: '126 multiple-choice items',
      time: 'about 2 hours',
      pass: 'No pass/fail; category cutoffs near 95/100/105/110',
      fee: '$0 (military administered)',
      format: 'Multiple choice based on an invented language',
      admin: 'DLIFLC and military education centers'
    },
    topics: [
      { name: 'Grammar patterns', weight: '', note: 'Infer rules of the invented language' },
      { name: 'Vocabulary', weight: '', note: 'Learn and apply invented words' },
      { name: 'Syntax', weight: '', note: 'Build correct invented-language sentences' },
      { name: 'Listening / tones', weight: '', note: 'Apply patterns to spoken invented forms' }
    ],
    examEssentials: [
      ['Score', 'Out of 164'],
      ['Categories', 'Cutoffs near 95 / 100 / 105 / 110 by language difficulty'],
      ['Retake', 'Six-month wait'],
      ['Cost', '$0 when military-administered']
    ],
    timeline: [
      { stage: 'Pipeline referral', duration: 'varies' },
      { stage: 'Study', duration: '2 to 4 weeks' },
      { stage: 'DLAB', duration: 'about 2 hours' },
      { stage: 'Assignment', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The DLAB is free when given by the military; commercial DLAB prep has limited value because the test uses an invented language.'
    },
    difficulty: 'Moderate',
    audience: 'Military members and recruits entering language training.',
    time: '2 to 4 weeks',
    cost: '$0',
    faqs: [
      { q: 'What DLAB score do I need?', a: 'There is no pass/fail. The score (out of 164) places you into a language difficulty tier; harder languages such as Arabic or Mandarin need the higher category cutoffs.' },
      { q: 'How often can I take the DLAB?', a: 'Only after a six-month wait, so prepare well the first time.' },
      { q: 'Does speaking a foreign language help?', a: 'Not directly. The DLAB uses an invented language to measure aptitude for learning, not your existing language skill.' },
      { q: 'How long is a DLAB score valid?', a: 'There is no fixed expiry, but a six-month wait applies before you may retest, and scores are used at language-training selection.' }
    ],
    summaryPoints: [
      'The DLAB predicts language-learning aptitude with an invented language',
      'Scored out of 164 and sorted into language-difficulty categories',
      'Retake only after a six-month wait',
      'Free when administered by the military'
    ],
    relatedSlugs: ['dlpt'],
    sourceUrl: 'https://www.dliflc.edu',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'dlpt',
    body: 'Defense Language Institute Foreign Language Center',
    tagline: 'The proficiency test that certifies your foreign-language skill and unlocks language pay.',
    description: 'The Defense Language Proficiency Test (DLPT) measures reading and listening proficiency in a specific foreign language using the Interagency Language Roundtable (ILR) scale of 0 to 5. Military linguists take it during and after Defense Language Institute training and on the job; the score sets Foreign Language Proficiency Bonus (FLPB) pay and recurring recertification. It is a certification of what you can actually do in the language.',
    quickAnswer: {
      summary: 'The DLPT is a free, military-administered proficiency test scored on the ILR scale of 0 to 5 for reading and listening. Higher levels drive Foreign Language Proficiency Bonus pay and must be recertified about every year.',
      advantages: [
        'Directly sets Foreign Language Proficiency Bonus pay',
        'Measures real reading and listening ability',
        'Free when administered by the military',
        'Annual recertification keeps pay current'
      ]
    },
    roadmap: [
      'Train or serve in a language role',
      'Take the DLPT in your language',
      'Receive ILR reading and listening levels',
      'Qualify for FLPB pay',
      'Recertify about every year'
    ],
    prerequisites: 'Service member or linguist in a language role, or a Defense Language Institute student nearing course completion.',
    examMeta: {
      questions: 'Varies by language and modality',
      time: 'varies by language',
      pass: 'ILR 0 to 5; FLPB typically needs 2/2 minimum',
      fee: '$0 (military administered)',
      format: 'Multiple choice, computer-delivered reading and listening',
      admin: 'DLIFLC and military test sites'
    },
    topics: [
      { name: 'Reading comprehension (ILR)', weight: '', note: 'Scored 0 to 5 on the ILR scale' },
      { name: 'Listening comprehension (ILR)', weight: '', note: 'Scored 0 to 5 on the ILR scale' }
    ],
    examEssentials: [
      ['Scale', 'ILR 0 to 5, read separately for listening and reading'],
      ['Pay', 'FLPB usually needs 2/2; higher pay at 3/3 and above'],
      ['Recert', 'About every year for bonus-eligible linguists'],
      ['Cost', '$0 when military-administered']
    ],
    timeline: [
      { stage: 'Language training or role', duration: 'varies' },
      { stage: 'DLPT', duration: 'by language' },
      { stage: 'FLPB set', duration: 'after scoring' },
      { stage: 'Annual recert', duration: 'yearly' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The DLPT is free when given by the military; the financial upside is Foreign Language Proficiency Bonus pay, which scales with your ILR level.'
    },
    difficulty: 'Moderate',
    audience: 'Military linguists and language students.',
    time: 'current proficiency',
    cost: '$0',
    faqs: [
      { q: 'What DLPT level do I need for language pay?', a: 'Foreign Language Proficiency Bonus generally requires at least a 2/2 in listening and reading on the ILR scale, with higher payments at 3/3 and above; some languages set a higher floor.' },
      { q: 'How long is a DLPT score valid?', a: 'For bonus eligibility, linguists recertify roughly every year. The test itself is a point-in-time proficiency read, not a lifetime credential.' },
      { q: 'Is the DLPT free?', a: 'Yes, when administered by the military or DLIFLC. The value is the language pay it unlocks.' },
      { q: 'Can civilians take the DLPT?', a: 'No. The DLPT is reserved for military and authorized government personnel. Civilians use other proficiency exams.' }
    ],
    summaryPoints: [
      'The DLPT certifies reading and listening on the ILR 0 to 5 scale',
      'It drives Foreign Language Proficiency Bonus pay',
      'Recertified about yearly for bonus-eligible linguists',
      'Free when military-administered'
    ],
    relatedSlugs: ['dlab'],
    sourceUrl: 'https://www.dliflc.edu',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'wonderlic-cognitive-ability-test',
    body: 'Wonderlic, Inc.',
    tagline: 'The 12-minute, 50-question brain test used in hiring and once at the NFL Combine.',
    description: 'The Wonderlic Cognitive Ability Test (often called the Wonderlic Personnel Test) is a 12-minute, 50-question measure of general cognitive ability used in employment screening and formerly at the NFL Scouting Combine. Employers use the score to compare how quickly candidates process and apply information. There is no pass/fail; the result is a 0 to 50 score compared with the relevant norm group.',
    quickAnswer: {
      summary: 'The Wonderlic Cognitive Ability Test is a timed 50-question intelligence screen scored 0 to 50 (average about 20). Employers administer it; the candidate usually pays nothing and cannot book it directly.',
      advantages: [
        'Fast, standardized cognitive screen for hiring',
        'Scored instantly on a 0 to 50 scale',
        'Widely recognized by employers',
        'Free for the candidate when employer-paid'
      ]
    },
    roadmap: [
      'Receive the test invitation from an employer',
      'Confirm the version and rules',
      'Take the 12-minute test under monitoring',
      'Employer reviews your 0 to 50 score',
      'Continue the hiring process'
    ],
    prerequisites: 'None for the individual; the test is administered by an employer or organization that requests it.',
    examMeta: {
      questions: '50 questions',
      time: '12 minutes',
      pass: 'No pass/fail; scored 0 to 50',
      fee: '$0 for the candidate (employer-paid)',
      format: 'Multiple choice, online or paper',
      admin: 'Administered by the requesting organization'
    },
    topics: [
      { name: 'General reasoning', weight: '', note: 'Logic and pattern questions' },
      { name: 'Verbal', weight: '', note: 'Word meanings and analogies' },
      { name: 'Numerical', weight: '', note: 'Quick arithmetic and estimation' },
      { name: 'Spatial', weight: '', note: 'Visual and sequencing items' }
    ],
    examEssentials: [
      ['Score', '0 to 50; adult average about 20'],
      ['Timing', '12 minutes for 50 items; pacing is decisive'],
      ['Retake', 'Per the employer policy'],
      ['Cost to candidate', '$0 when the employer pays']
    ],
    timeline: [
      { stage: 'Invitation', duration: 'varies' },
      { stage: 'Prepare', duration: '1 to 2 weeks' },
      { stage: 'Test', duration: '12 minutes' },
      { stage: 'Result', duration: 'immediate' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam (employer-paid)', fee: '$0' }],
      total: '$0',
      footnote: 'The employer or school pays the administration fee; the candidate normally pays nothing and cannot register independently.'
    },
    difficulty: 'Moderate',
    audience: 'Job applicants and some admissions candidates.',
    time: '1 to 2 weeks',
    cost: '$0 (employer-paid)',
    faqs: [
      { q: 'Is the Wonderlic timed?', a: 'Yes. You get 12 minutes for 50 questions, so speed and accuracy together drive the score more than deep study.' },
      { q: 'What is a good Wonderlic score?', a: 'The adult average is about 20 out of 50. Employers set their own cut scores, so ask the organization what it considers competitive.' },
      { q: 'Can I take the Wonderlic on my own?', a: 'No. It is administered by the requesting employer or school; candidates receive an invitation rather than booking it themselves.' },
      { q: 'Can I prepare for the Wonderlic?', a: 'Practice helps mainly with pacing, since the 12-minute limit is the real challenge. The employer controls access, so you cannot self-book.' }
    ],
    summaryPoints: [
      'The Wonderlic is a 12-minute, 50-question cognitive screen',
      'Scored 0 to 50 with an adult average near 20',
      'Employers set the cut score; there is no pass/fail',
      'Free for the candidate when the employer pays'
    ],
    relatedSlugs: ['wonderlic-scholastic-level-exam'],
    sourceUrl: 'https://www.wonderlic.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'wonderlic-scholastic-level-exam',
    body: 'Wonderlic, Inc.',
    tagline: 'The short cognitive screen career schools use for ability-to-benefit admission.',
    description: 'The Wonderlic Scholastic Level Exam (SLE) is a brief cognitive ability test used by career schools and colleges to document ability-to-benefit for admission and federal financial aid eligibility. It measures the same kind of reasoning as the personnel test but is aimed at the school-setting context. The school sets the cut score it needs; the candidate usually pays nothing.',
    quickAnswer: {
      summary: 'The Wonderlic SLE is a roughly 30-minute, 50-question cognitive test that career schools use for ability-to-benefit admission and federal-aid documentation. The school sets the passing cut, and the test is usually free to the applicant.',
      advantages: [
        'Common ability-to-benefit requirement for career schools',
        'Short, about 30 minutes',
        'Usually free to the applicant',
        'Helps document federal-aid eligibility'
      ]
    },
    roadmap: [
      'Confirm your school requires the SLE',
      'Schedule it through the school or a link',
      'Take the timed test under monitoring',
      'School checks the ability-to-benefit cut',
      'Continue enrollment and aid steps'
    ],
    prerequisites: 'None; the school requires it as part of admission and federal-aid ability-to-benefit documentation.',
    examMeta: {
      questions: '50 questions',
      time: 'about 30 minutes',
      pass: 'No fixed pass; school sets the ability-to-benefit cut',
      fee: '$0 for the candidate (school-paid)',
      format: 'Multiple choice, online or paper',
      admin: 'Administered by the school'
    },
    topics: [
      { name: 'Verbal reasoning', weight: '', note: 'Word meanings and reading-based items' },
      { name: 'Numerical reasoning', weight: '', note: 'Arithmetic and applied math' },
      { name: 'General reasoning', weight: '', note: 'Logic and pattern recognition' }
    ],
    examEssentials: [
      ['Score', 'Reported as a raw and scale score with percentiles'],
      ['Cut', 'Set by the school for ability-to-benefit'],
      ['Retake', 'Per the school policy'],
      ['Cost to candidate', '$0 when school-paid']
    ],
    timeline: [
      { stage: 'School requirement', duration: 'varies' },
      { stage: 'Prepare', duration: '1 to 2 weeks' },
      { stage: 'Test', duration: 'about 30 minutes' },
      { stage: 'Admission', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam (school-paid)', fee: '$0' }],
      total: '$0',
      footnote: 'The school pays the administration fee; the applicant normally pays nothing and cannot book the SLE independently.'
    },
    difficulty: 'Easy',
    audience: 'Career-school and college applicants needing ability-to-benefit.',
    time: '1 to 2 weeks',
    cost: '$0',
    faqs: [
      { q: 'What is the SLE used for?', a: 'Career schools and colleges use it to document ability-to-benefit, a federal-aid eligibility check, and as part of admission screening.' },
      { q: 'Is there a passing SLE score?', a: 'There is no single national pass mark; each school sets the cut score it requires for admission and aid.' },
      { q: 'How long is the SLE?', a: 'About 30 minutes for 50 questions, longer than the 12-minute personnel version because it is not as speeded.' },
      { q: 'How is the SLE used?', a: 'Career colleges use the SLE for admission and course placement. Each school sets its own passing score.' }
    ],
    summaryPoints: [
      'The SLE documents ability-to-benefit for career-school admission',
      'About 30 minutes and 50 questions',
      'The school sets the cut score',
      'Free to the applicant when the school pays'
    ],
    relatedSlugs: ['wonderlic-cognitive-ability-test'],
    sourceUrl: 'https://www.wonderlic.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'act-aspire',
    body: 'ACT, Inc.',
    tagline: 'The grades 3 to 10 longitudinal test that tracks growth toward ACT benchmarks.',
    description: 'ACT Aspire is a vertically scaled assessment system for grades 3 through 10 that tracks student growth toward the ACT college-readiness benchmarks. It covers English, math, reading, science and writing, and reports scale scores that rise across grades so a student can be compared with the same grade-level expectations year over year. Schools administer it; families do not register individually.',
    quickAnswer: {
      summary: 'ACT Aspire is a school-administered, grades 3 to 10 assessment that predicts progress toward ACT college-readiness benchmarks. It is not pass/fail; families pay nothing because the school runs it.',
      advantages: [
        'Tracks growth across grades 3 to 10',
        'Linked to ACT college-readiness benchmarks',
        'Covers English, math, reading, science and writing',
        'Free to families (school-administered)'
      ]
    },
    roadmap: [
      'Test through the school in its window',
      'Student completes the subject assessments',
      'School receives scale scores and benchmarks',
      'Teacher and family review growth',
      'Use results to target instruction'
    ],
    prerequisites: 'None for the student; the school administers Aspire in its testing window.',
    examMeta: {
      questions: 'Per subject, selected- and constructed-response items',
      time: '40 to 75 minutes per subject',
      pass: 'Meets ACT readiness benchmark per grade (no pass/fail)',
      fee: '$0 for families (school-administered)',
      format: 'Online or paper, multiple choice plus writing',
      admin: 'Schools'
    },
    topics: [
      { name: 'English', weight: '', note: 'Usage, mechanics, rhetoric; benchmark ~413 to 428 by grade' },
      { name: 'Mathematics', weight: '', note: 'Benchmark ~413 to 432 by grade' },
      { name: 'Reading', weight: '', note: 'Benchmark ~415 to 428 by grade' },
      { name: 'Science', weight: '', note: 'Benchmark ~418 to 432 by grade' },
      { name: 'Writing', weight: '', note: 'Brief constructed response' }
    ],
    examEssentials: [
      ['Scale', 'Grade-specific scale, roughly 400 to 460'],
      ['Benchmarks', 'Research-based readiness marks per grade'],
      ['Grades', '3 through 10'],
      ['Cost', '$0 for families']
    ],
    timeline: [
      { stage: 'School window', duration: 'fall and spring' },
      { stage: 'Assess', duration: 'per subject' },
      { stage: 'Report', duration: 'after scoring' },
      { stage: 'Instruction', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'ACT Aspire is paid for by the school or district; families are not billed and cannot register on their own.'
    },
    difficulty: 'Moderate',
    audience: 'Students in grades 3 to 10 at participating schools.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'Is ACT Aspire the same as the ACT?', a: 'No. Aspire is a grades 3 to 10 longitudinal assessment tied to ACT benchmarks; the ACT is the separate college-admission exam taken in grade 11 or 12.' },
      { q: 'What is a good Aspire score?', a: 'Aim to meet or beat the grade-specific readiness benchmark in each subject; above benchmark means on track for college readiness.' },
      { q: 'Does my child take Aspire individually?', a: 'No, the school administers it in its testing window. Families receive the report but do not register.' },
      { q: 'Is ACT Aspire a college admissions test?', a: 'No. Aspire is a standards-based progress monitor for grades 3 to 10. The ACT is the separate admissions exam.' }
    ],
    summaryPoints: [
      'ACT Aspire tracks growth in grades 3 to 10',
      'Scale scores are linked to ACT readiness benchmarks',
      'Covers English, math, reading, science and writing',
      'Free to families because the school runs it'
    ],
    relatedSlugs: ['act-workkeys', 'hspt'],
    sourceUrl: 'https://www.act.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'act-workkeys',
    body: 'ACT, Inc.',
    tagline: 'The workplace-skills tests that earn the National Career Readiness Certificate.',
    description: 'ACT WorkKeys is a family of workplace-skills assessments in Applied Math, Graphic Literacy and Workplace Documents. Scoring Level 3 or higher on all three earns the ACT WorkKeys National Career Readiness Certificate (NCRC) at the Bronze, Silver, Gold or Platinum level. Employers and states use the NCRC to signal foundational job skills, and some colleges grant credit for Silver and above.',
    quickAnswer: {
      summary: 'ACT WorkKeys measures Applied Math, Graphic Literacy and Workplace Documents; scoring Level 3 or higher on all three earns the NCRC. It is open to anyone through test centers or online, often free when a state or employer sponsors it.',
      advantages: [
        'Earns the portable NCRC credential',
        'Four levels: Bronze, Silver, Gold, Platinum',
        'Accepted by employers and some colleges for credit',
        'Often free through state or employer sponsorship'
      ]
    },
    roadmap: [
      'Find a WorkKeys center or online seat',
      'Take the three skill assessments',
      'Reach Level 3+ on all three',
      'Receive your NCRC level',
      'Share it with employers or colleges'
    ],
    prerequisites: 'None; open to job seekers, students and workers through authorized centers or online proctoring.',
    examMeta: {
      questions: 'Varies by assessment (Applied Math, Graphic Literacy, Workplace Documents)',
      time: 'about 1 hour per assessment',
      pass: 'Level 3 earns Bronze NCRC; 4 Silver, 5 Gold, 6 Platinum',
      fee: '$0 to about $50 depending on sponsor',
      format: 'Multiple choice, online or paper',
      admin: 'Authorized test centers and online proctoring'
    },
    topics: [
      { name: 'Applied Math', weight: '', note: 'Real-world math problem solving' },
      { name: 'Graphic Literacy', weight: '', note: 'Reading and using workplace graphics' },
      { name: 'Workplace Documents', weight: '', note: 'Reading and using written information' }
    ],
    examEssentials: [
      ['NCRC levels', 'Bronze 3, Silver 4, Gold 5, Platinum 6'],
      ['Validity', 'NCRC valid 2 years'],
      ['Credit', 'ACE recommends college credit at Silver and above'],
      ['Cost', '$0 to about $50; sponsors often cover it']
    ],
    timeline: [
      { stage: 'Register', duration: 'varies' },
      { stage: 'Prepare', duration: '1 to 3 weeks' },
      { stage: 'Test', duration: 'about 3 hours total' },
      { stage: 'NCRC', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Assessment fee', fee: '$0 to $50' }],
      total: '$0 to $50',
      footnote: 'Many states and employers cover the full cost, so check whether your sponsor offers it free before paying.'
    },
    difficulty: 'Moderate',
    audience: 'Job seekers and career-technical students.',
    time: '1 to 3 weeks',
    cost: '$0 to $50',
    faqs: [
      { q: 'What NCRC level do I need?', a: 'A Silver NCRC (Level 4 on all three assessments) aligns with the foundational skills for about two-thirds of jobs; Gold and Platinum open more doors, and some colleges grant credit at Silver and above.' },
      { q: 'How long is the NCRC valid?', a: 'Two years. Retake the assessments to renew or raise your level.' },
      { q: 'Is WorkKeys free?', a: 'It can be. Many states and employers sponsor it at no cost to the candidate; otherwise expect roughly $50 for the three assessments.' },
      { q: 'What is the NCRC?', a: 'WorkKeys yields the National Career Readiness Certificate at Bronze, Silver, Gold or Platinum, based on scale scores of 3 to 6.' }
    ],
    summaryPoints: [
      'WorkKeys yields the portable NCRC workplace credential',
      'Levels run Bronze (3) to Platinum (6) on three assessments',
      'NCRC is valid two years and may earn college credit',
      'Often free through a state or employer sponsor'
    ],
    relatedSlugs: ['act-aspire'],
    sourceUrl: 'https://www.act.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'hspt',
    body: 'Scholastic Testing Service',
    tagline: 'The Catholic high school entrance and placement exam for eighth graders.',
    description: 'The High School Placement Test (HSPT) is the entrance and placement exam used by many Catholic and private high schools for eighth graders. It screens verbal, quantitative, reading, mathematics and language skills in a single sitting and reports scale scores that schools use for admission, scholarship and course placement. You register through the target school rather than directly with the publisher.',
    quickAnswer: {
      summary: 'The HSPT is a roughly 2.5-hour, 298-question exam for eighth graders applying to Catholic and private high schools. It is taken once per admissions cycle at the school, and the school sets the admission cut score.',
      advantages: [
        'Widely accepted by Catholic high schools',
        'Single sitting covers five skill areas',
        'Used for admission, scholarships and placement',
        'Straightforward reasoning and math content'
      ]
    },
    roadmap: [
      'Pick the target high school',
      'Register and pay through the school',
      'Study verbal, math and language basics',
      'Take the HSPT on test day',
      'School applies your scores'
    ],
    prerequisites: 'Open to eighth graders applying to HSPT-using Catholic or private high schools; you register through the school, not STS directly.',
    examMeta: {
      questions: '298 questions',
      time: 'about 2.5 hours',
      pass: '200 to 800 per subtest; school sets the cut',
      fee: '$0 to about $70 (paid to the school)',
      format: 'Multiple choice plus one writing prompt',
      admin: 'Host high school on test day'
    },
    topics: [
      { name: 'Verbal Skills', weight: '', note: 'Analies, synonyms, logic' },
      { name: 'Quantitative Skills', weight: '', note: 'Number and thinking skills' },
      { name: 'Reading', weight: '', note: 'Comprehension of passages' },
      { name: 'Mathematics', weight: '', note: 'Arithmetic through basic algebra' },
      { name: 'Language', weight: '', note: 'Grammar, usage, spelling' }
    ],
    examEssentials: [
      ['Scale', '200 to 800 per subtest and total'],
      ['Attempts', 'Generally once per admissions cycle'],
      ['Cost', '$0 to about $70, set by the school'],
      ['Use', 'Admission, scholarships, placement']
    ],
    timeline: [
      { stage: 'Registration', duration: 'fall' },
      { stage: 'Study', duration: '2 to 3 months' },
      { stage: 'Test day', duration: '2.5 hours' },
      { stage: 'Results', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Registration fee', fee: '$0 to $70' }],
      total: '$0 to $70',
      footnote: 'The fee is set by the host school; some schools offer waivers for eligible families.'
    },
    difficulty: 'Moderate',
    audience: 'Eighth graders applying to Catholic and private high schools.',
    time: '2 to 3 months',
    cost: '$0 to $70',
    faqs: [
      { q: 'Can my child take the HSPT more than once?', a: 'Usually no. Most schools allow one attempt per admissions cycle, and taking it at a second school in the same year is generally not permitted.' },
      { q: 'What HSPT score do schools want?', a: 'Each school sets its own cut score and weighs the HSPT with grades and records; ask the admission office what it considers competitive.' },
      { q: 'Is the HSPT hard?', a: 'It is moderate-difficulty reasoning and math; a steady review of verbal and math fundamentals over a few months is the best preparation.' },
      { q: 'Who receives the HSPT score?', a: 'The schools you list on registration receive scores. You do not get a public report, and each school may set its own cutoff.' }
    ],
    summaryPoints: [
      'The HSPT is the Catholic high school entrance exam for eighth graders',
      '298 questions across five skill areas in about 2.5 hours',
      'Scale scores run 200 to 800; schools set the cut',
      'Usually taken once per admissions cycle'
    ],
    relatedSlugs: ['scat-johns-hopkins', 'tachs'],
    sourceUrl: 'https://www.ststesting.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'scat-johns-hopkins',
    body: 'Johns Hopkins Center for Talented Youth',
    tagline: 'The above-grade-level ability test that qualifies kids for gifted programs.',
    description: 'The School and College Ability Test (SCAT) is the above-grade-level ability test used by the Johns Hopkins Center for Talented Youth to qualify students in grades 2 through 8 for gifted and advanced programs. It measures verbal and quantitative reasoning at a level one to two grades above the student, so advanced learners are not ceilinged by grade-level exams. CTY reports scaled scores with above-grade percentiles.',
    quickAnswer: {
      summary: 'The SCAT is an above-grade-level test for grades 2 to 8 with two 55-question sections (verbal and quantitative). Scaled 400 to 514 against an above-grade norm group, it is taken up to twice a year and used for CTY program eligibility.',
      advantages: [
        'Above-grade level avoids ceiling effects for bright kids',
        'Two short sections, about an hour total',
        'Qualifies students for CTY gifted programs',
        'Up to twice per year'
      ]
    },
    roadmap: [
      'Open a CTY account',
      'Register for the SCAT',
      'Choose a center or remote proctor',
      'Take the verbal and quantitative sections',
      'Receive scores and eligibility'
    ],
    prerequisites: 'Open to students in grades 2 to 8; register through a CTY account for talent-search eligibility.',
    examMeta: {
      questions: 'Two sections of 55 questions each (verbal and quantitative)',
      time: 'about 1 hour (22 minutes per section plus breaks)',
      pass: 'No pass/fail; scaled 400 to 514 with above-grade percentiles',
      fee: '$0 to about $60 (family-paid)',
      format: 'Multiple choice, above grade level',
      admin: 'Prometric, school sites or remote proctoring'
    },
    topics: [
      { name: 'Verbal reasoning', weight: '', note: 'Above-grade analogies; scaled 400 to 514' },
      { name: 'Quantitative reasoning', weight: '', note: 'Above-grade math problems; scaled 400 to 514' },
      { name: 'Verbal percentiles', weight: '', note: 'Compared to a group one to two grades ahead' },
      { name: 'Quantitative percentiles', weight: '', note: 'Compared to a group one to two grades ahead' }
    ],
    examEssentials: [
      ['Scale', '400 to 514 per section'],
      ['Norm', 'Above-grade comparison group'],
      ['Attempts', 'Up to twice per 12 months'],
      ['Cost', '$0 to about $60, family-paid']
    ],
    timeline: [
      { stage: 'CTY account', duration: 'varies' },
      { stage: 'Study', duration: '4 to 8 weeks' },
      { stage: 'Test', duration: 'about 1 hour' },
      { stage: 'Eligibility', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Test fee', fee: '$0 to $60' }],
      total: '$0 to $60',
      footnote: 'Paid by the family; some schools or scholarships cover the fee for eligible students.'
    },
    difficulty: 'Moderate',
    audience: 'Grades 2 to 8 students seeking gifted-program qualification.',
    time: '4 to 8 weeks',
    cost: '$0 to $60',
    faqs: [
      { q: 'How many times can my child take the SCAT?', a: 'Up to twice within a 12-month period. CTY uses the stronger valid score for program qualification.' },
      { q: 'Why is the SCAT above grade level?', a: 'Testing a grade or two above the student prevents advanced learners from hitting a ceiling, giving a clearer read on their ability.' },
      { q: 'What SCAT score qualifies for CTY?', a: 'Eligibility depends on the program and the above-grade percentile; CTY publishes the qualifying scores by grade after each administration.' },
      { q: 'Is SCAT required for CTY?', a: 'A qualifying SCAT score is the main route into Johns Hopkins CTY gifted programs, and testing is offered several times a year.' }
    ],
    summaryPoints: [
      'The SCAT is an above-grade-level ability test for grades 2 to 8',
      'Two 55-question sections scaled 400 to 514',
      'Used for CTY gifted-program eligibility',
      'Up to twice per year; family-paid'
    ],
    relatedSlugs: ['hspt'],
    sourceUrl: 'https://cty.jhu.edu',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'tachs',
    body: 'Archdiocese of New York and Diocese of Brooklyn and Queens',
    tagline: 'The single entrance exam for Catholic high schools in the New York City area.',
    description: 'The Test for Admission into Catholic High Schools (TACHS) is the entrance exam for eighth graders seeking admission to Catholic high schools in the Archdiocese of New York and the Dioceses of Brooklyn and Queens. A single sitting covers reading, written expression, mathematics and general reasoning ability, and the scores are sent to the schools you list. Each school then makes its own admission decision.',
    quickAnswer: {
      summary: 'The TACHS is a single, once-a-year exam for eighth graders entering New York-area Catholic high schools. It covers reading, written expression, math and ability, and scores go straight to the schools you list.',
      advantages: [
        'One test for many NY Catholic high schools',
        'Single sitting, about 2.5 hours',
        'Covers reading, writing, math and reasoning',
        'Scores routed to your chosen schools'
      ]
    },
    roadmap: [
      'Register through the TACHS website',
      'List your target schools',
      'Receive a test-site assignment',
      'Take the TACHS on test day',
      'Schools receive and use your scores'
    ],
    prerequisites: 'Open to eighth graders applying to member Catholic high schools; register via TACHS and list up to three or four schools.',
    examMeta: {
      questions: 'About 120 questions across four sections',
      time: 'about 2.5 hours',
      pass: 'No pass/fail; schools set admission using the score',
      fee: '$0 to about $78 (paid at registration)',
      format: 'Multiple choice plus a written expression sample',
      admin: 'Assigned Catholic high school on a Saturday'
    },
    topics: [
      { name: 'Reading', weight: '', note: 'Comprehension of passages' },
      { name: 'Written Expression', weight: '', note: 'Grammar, usage and a writing sample' },
      { name: 'Mathematics', weight: '', note: 'Arithmetic through pre-algebra' },
      { name: 'Ability', weight: '', note: 'General reasoning items' }
    ],
    examEssentials: [
      ['Administration', 'Once per year, in November'],
      ['Schools', 'List up to three or four at registration'],
      ['Score use', 'Schools set their own admission rules'],
      ['Cost', '$0 to about $78']
    ],
    timeline: [
      { stage: 'Registration', duration: 'fall' },
      { stage: 'Study', duration: '2 to 3 months' },
      { stage: 'Test day', duration: '2.5 hours' },
      { stage: 'Results', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Registration fee', fee: '$0 to $78' }],
      total: '$0 to $78',
      footnote: 'Set by TACHS at registration; the fee covers score routing to your listed schools.'
    },
    difficulty: 'Moderate',
    audience: 'Eighth graders in the New York Catholic high school pipeline.',
    time: '2 to 3 months',
    cost: '$0 to $78',
    faqs: [
      { q: 'Can my child take the TACHS more than once?', a: 'No. It is given once each year, so the single attempt is what all of your listed schools receive.' },
      { q: 'Which schools accept the TACHS?', a: 'Member Catholic high schools in the Archdiocese of New York and the Dioceses of Brooklyn and Queens accept it; confirm the current list on the TACHS site.' },
      { q: 'How should we prepare?', a: 'Use the official TACHS handbook and practice tests; the content is straightforward reasoning and math rather than memorized facts.' },
      { q: 'Can I take the TACHS more than once?', a: 'No. TACHS is given a single time each admissions cycle, and you choose your target schools when you register.' }
    ],
    summaryPoints: [
      'The TACHS is the NY-area Catholic high school entrance exam',
      'One sitting covers reading, writing, math and ability',
      'Given once a year; scores go to your listed schools',
      'Each school sets its own admission cut'
    ],
    relatedSlugs: ['hspt', 'scat-johns-hopkins'],
    sourceUrl: 'https://www.tachs.info',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'jd-next',
    body: 'Aspen Publishing and the University of Arizona',
    tagline: 'The eight-week law course and assessment some law schools accept instead of the LSAT.',
    description: 'JD-Next is an eight-week online law course followed by a final assessment that more than 60 law schools may accept in place of, or alongside, the LSAT under ABA variance approval. Developed at the University of Arizona and delivered with Aspen Publishing, it teaches the reading, analysis and exam skills of a first-year legal-education course and assesses them directly.',
    quickAnswer: {
      summary: 'JD-Next is an eight-week online law course plus a proctored final assessment scored 400 to 1000. Over 60 law schools accept it under ABA variance, either as an LSAT alternative or supplement.',
      advantages: [
        'Accepted by 60-plus law schools under ABA variance',
        'Teaches real 1L skills, not just test tricks',
        'Online and self-paced within the cohort',
        'Can replace or supplement the LSAT'
      ]
    },
    roadmap: [
      'Confirm your schools accept JD-Next',
      'Enroll in an eight-week cohort',
      'Complete the course modules',
      'Take the proctored final assessment',
      'Send the 400 to 1000 score to schools'
    ],
    prerequisites: 'Varies by school; some admit through JD-Next directly while others require a cohort enrollment. A bachelor’s degree is generally expected for law admission.',
    examMeta: {
      questions: 'Final assessment embedded in the course',
      time: '8-week course plus about 2-hour assessment',
      pass: '400 to 1000 scale; each school sets its acceptable score',
      fee: '$399 to $499 (program fee)',
      format: 'Online course plus proctored assessment',
      admin: 'Online with remote proctoring'
    },
    topics: [
      { name: 'Legal reading', weight: '', note: 'Case and statute comprehension' },
      { name: 'Rule application', weight: '', note: 'Applying law to facts' },
      { name: 'Analysis', weight: '', note: 'Reasoning to a conclusion' },
      { name: 'Exam writing', weight: '', note: 'Structured essay responses' }
    ],
    examEssentials: [
      ['Score', '400 to 1000'],
      ['Acceptance', '60-plus schools via ABA variance'],
      ['Cohorts', 'Run several times per year'],
      ['Cost', '$399 to $499 all-in']
    ],
    timeline: [
      { stage: 'Enroll', duration: 'varies' },
      { stage: 'Coursework', duration: '8 weeks' },
      { stage: 'Assessment', duration: 'about 2 hours' },
      { stage: 'Score', duration: 'after proctoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Program and assessment fee', fee: '$399 to $499' }],
      total: '$399 to $499',
      footnote: 'One fee covers the course and the final assessment; some schools or partners offer reduced or sponsored seats.'
    },
    difficulty: 'Challenging',
    audience: 'Applicants to JD-Next-accepting law schools.',
    time: '8 weeks plus test',
    cost: '$399 to $499',
    faqs: [
      { q: 'Is JD-Next accepted instead of the LSAT?', a: 'More than 60 law schools accept it under ABA variance, either as an alternative or a supplement to the LSAT; each school sets its own policy, so check the list on the JD-Next site.' },
      { q: 'How is JD-Next scored?', a: 'The final assessment is reported on a 400 to 1000 scale. Because it tests skills taught in the course, completing the eight weeks is the main preparation.' },
      { q: 'Do I need a law degree to take it?', a: 'No. JD-Next is for admission to law school, so a bachelor’s or expected degree is the usual prerequisite, not a law degree.' },
      { q: 'How many law schools accept JD-Next?', a: 'More than 60 law schools accept JD-Next as an alternative or supplement to the LSAT, including some that are LSAT-optional.' }
    ],
    summaryPoints: [
      'JD-Next is an 8-week course plus a 400 to 1000 assessment',
      'Accepted by 60-plus law schools under ABA variance',
      'Teaches first-year legal skills directly',
      'One fee of $399 to $499 covers course and test'
    ],
    relatedSlugs: ['law-school-admission-test'],
    sourceUrl: 'https://www.jdnext.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'law-school-admission-test',
    body: 'Law School Admission Council',
    tagline: 'The standard admission test for US and Canadian law schools.',
    description: 'The Law School Admission Test (LSAT) is the standard admission exam for law schools in the United States and Canada. It measures logical reasoning, analytical reasoning and reading comprehension through four 35-minute multiple-choice sections, plus a separately administered, scored writing sample. Most law schools weigh the 120 to 180 scaled score heavily in admission.',
    quickAnswer: {
      summary: 'The LSAT is the main US and Canadian law-school admission test: four 35-minute sections (two logical reasoning, one analytical reasoning, one reading comprehension) plus a writing sample, scored 120 to 180. Registration is $238 and the test is taken at Prometric or remotely.',
      advantages: [
        'Required or accepted by nearly every US and Canadian law school',
        'Tests reasoning skills law school rewards',
        'Scores valid for five years',
        'Official free and low-cost prep available'
      ]
    },
    roadmap: [
      'Create an LSAC account',
      'Register for a test date',
      'Complete LSAT Writing in advance',
      'Take the multiple-choice test',
      'Send scores to your schools'
    ],
    prerequisites: 'A bachelor’s degree or expected degree for law admission; anyone may register, though most test during the application cycle.',
    examMeta: {
      questions: 'Four 35-minute multiple-choice sections plus a 35-minute writing sample',
      time: 'About 3 hours plus writing',
      pass: '120 to 180 scaled; median near 152',
      fee: '$238 (fee waiver available)',
      format: 'Multiple choice (LR, AR, RC) plus writing',
      admin: 'Prometric centers or remote proctoring'
    },
    topics: [
      { name: 'Logical Reasoning', weight: '', note: 'Two sections; argument analysis' },
      { name: 'Analytical Reasoning', weight: '', note: 'Logic games and sequencing' },
      { name: 'Reading Comprehension', weight: '', note: 'Long-passage understanding' },
      { name: 'LSAT Writing', weight: '', note: 'Scored, unscored-for-admission essay' }
    ],
    examEssentials: [
      ['Score', '120 to 180 scaled'],
      ['Attempts', 'Up to 5 in 5 years, 7 lifetime'],
      ['Validity', '5 years'],
      ['Fee', '$238; waiver available']
    ],
    timeline: [
      { stage: 'Register', duration: 'varies' },
      { stage: 'Study', duration: '2 to 4 months' },
      { stage: 'Test day', duration: 'about 3 hours' },
      { stage: 'Scores', duration: 'after release' }
    ],
    costBreakdown: {
      items: [{ item: 'Registration', fee: '$238' }, { item: 'Official prep (optional)', fee: '$0 to $120' }],
      total: '$238 to $360',
      footnote: 'A need-based fee waiver covers the registration and some prep; budget extra only if you choose a commercial course.'
    },
    difficulty: 'Hard',
    audience: 'Law school applicants.',
    time: '2 to 4 months',
    cost: '$238 to $360',
    faqs: [
      { q: 'How many times can I take the LSAT?', a: 'Up to five times in the current five-year reporting window and seven times lifetime, with per-year caps. Schools see all reportable scores, so plan retakes thoughtfully.' },
      { q: 'How long are LSAT scores valid?', a: 'LSAC reports scores from the past five years; most law schools accept them within that window, though some prefer more recent results.' },
      { q: 'What is a good LSAT score?', a: 'The scale runs 120 to 180 with a median near 152; competitive schools often look well above the median, but each sets its own range.' },
      { q: 'How many times can I take the LSAT?', a: 'Up to five times in the current reportable window and seven times lifetime, with limits on how close attempts can be.' }
    ],
    summaryPoints: [
      'The LSAT is the standard US and Canadian law-school test',
      'Scored 120 to 180; median near 152',
      'Four 35-minute sections plus a writing sample',
      '$238 to register, with fee waivers available'
    ],
    relatedSlugs: ['jd-next'],
    sourceUrl: 'https://www.lsac.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'duolingo-english-test',
    body: 'Duolingo, Inc.',
    tagline: 'The one-hour, at-home English test accepted by thousands of colleges.',
    description: 'The Duolingo English Test (DET) is an adaptive English-proficiency exam taken entirely at home in about an hour. It is accepted for admission by thousands of colleges and universities in the United States and abroad as a convenient, lower-cost alternative to center-based tests. The test adapts to the candidate, requires the webcam on, and is reviewed by both software and humans.',
    quickAnswer: {
      summary: 'The DET is a one-hour, at-home adaptive English test scored 10 to 160. It is accepted by thousands of schools, costs about $70, and you may take it up to three times in 30 days. Results arrive within two days.',
      advantages: [
        'Taken at home in about one hour',
        'Accepted by thousands of institutions',
        'Low cost, about $70',
        'Results in two days; up to 3 tests per month'
      ]
    },
    roadmap: [
      'Create a DET account',
      'Verify your ID and environment',
      'Take the test in one sitting',
      'Receive results in two days',
      'Send scores to your schools'
    ],
    prerequisites: 'None beyond a computer, webcam and government ID; open to any applicant.',
    examMeta: {
      questions: 'Adaptive, roughly 45 to 60 items',
      time: 'about 1 hour',
      pass: '10 to 160; schools set minimums (often 105+)',
      fee: '$70 (lower with subscription)',
      format: 'Adaptive, online, one sitting',
      admin: 'At home with webcam and AI plus human review'
    },
    topics: [
      { name: 'Literacy', weight: '', note: 'Reading and writing subscore' },
      { name: 'Comprehension', weight: '', note: 'Listening and reading subscore' },
      { name: 'Conversation', weight: '', note: 'Speaking and listening subscore' },
      { name: 'Production', weight: '', note: 'Speaking and writing subscore' }
    ],
    examEssentials: [
      ['Score', '10 to 160 overall'],
      ['Attempts', 'Up to 3 certified tests per 30 days'],
      ['Validity', '2 years'],
      ['Results', 'Within about 2 days']
    ],
    timeline: [
      { stage: 'Account and ID', duration: '10 minutes' },
      { stage: 'Study', duration: '2 to 4 weeks' },
      { stage: 'Test', duration: 'about 1 hour' },
      { stage: 'Results', duration: '2 days' }
    ],
    costBreakdown: {
      items: [{ item: 'Test fee', fee: '$70' }],
      total: '$70',
      footnote: 'A subscription plan lowers the per-test price; a small fee applies to send a certificate. Verify the school minimum before booking.'
    },
    difficulty: 'Moderate',
    audience: 'International and English-learner college applicants.',
    time: '2 to 4 weeks',
    cost: '$70',
    faqs: [
      { q: 'How many times can I take the Duolingo English Test?', a: 'Up to three certified tests within any 30-day window. Each attempt is scored, and you choose which results to send.' },
      { q: 'Is the DET accepted for admission?', a: 'Yes, by thousands of institutions, though each school sets its own minimum. Verify the required score with the admission office before booking.' },
      { q: 'How long is a DET score valid?', a: 'Two years from the test date. Results are typically available within two days.' },
      { q: 'How many times can I take the DET?', a: 'Up to three certified attempts within any 30-day window, and each attempt carries the standard fee.' }
    ],
    summaryPoints: [
      'The DET is a one-hour at-home adaptive English test',
      'Scored 10 to 160; schools set their own minimum',
      'About $70 and up to three tests per month',
      'Results in roughly two days'
    ],
    relatedSlugs: ['itep-academic', 'languagecert-academic'],
    sourceUrl: 'https://englishtest.duolingo.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'itep-academic',
    body: 'International Test of English Proficiency',
    tagline: 'The 90-minute, five-skill English test for college admission.',
    description: 'The iTEP Academic exam assesses grammar, listening, reading, writing and speaking for college and pathway-program admission. It is delivered at certified test centers or online through the iTEP Virtual Testing System, and reports an overall 0 to 6 level aligned to the CEFR. Results are typically available within one business day.',
    quickAnswer: {
      summary: 'iTEP Academic is a 90-minute test of five English skills (grammar, listening, reading, writing, speaking) scored 0 to 6 with CEFR alignment. It costs about $129 and results post within a day.',
      advantages: [
        'Five skills assessed in 90 minutes',
        'CEFR-aligned 0 to 6 score',
        'Results within one business day',
        'Online or at certified centers'
      ]
    },
    roadmap: [
      'Find a certified iTEP center or online seat',
      'Register and pay',
      'Take the five sections',
      'Receive the 0 to 6 report',
      'Send scores to your school'
    ],
    prerequisites: 'None beyond a computer and ID; open to any applicant through a center or online.',
    examMeta: {
      questions: 'Five sections: grammar, listening, reading, writing, speaking',
      time: '90 minutes',
      pass: '0 to 6 overall; schools set CEFR minimums',
      fee: '$129 (global retail)',
      format: 'Online or at a certified center',
      admin: 'Certified centers or online virtual testing'
    },
    topics: [
      { name: 'Grammar', weight: '', note: 'Structure and error identification' },
      { name: 'Listening', weight: '', note: 'Conversations and lectures' },
      { name: 'Reading', weight: '', note: 'Academic passages' },
      { name: 'Writing', weight: '', note: 'Two timed essays' },
      { name: 'Speaking', weight: '', note: 'Recorded responses' }
    ],
    examEssentials: [
      ['Score', '0 to 6 overall, CEFR-aligned'],
      ['Results', 'Within 1 business day'],
      ['Validity', '2 years'],
      ['Cost', '$129 retail']
    ],
    timeline: [
      { stage: 'Register', duration: 'varies' },
      { stage: 'Study', duration: '2 to 4 weeks' },
      { stage: 'Test', duration: '90 minutes' },
      { stage: 'Report', duration: '1 day' }
    ],
    costBreakdown: {
      items: [{ item: 'Test fee', fee: '$129' }],
      total: '$129',
      footnote: 'Institutions may receive significant discounts; confirm your school’s accepted minimum level before registering.'
    },
    difficulty: 'Moderate',
    audience: 'College and pathway-program applicants.',
    time: '2 to 4 weeks',
    cost: '$129',
    faqs: [
      { q: 'How is iTEP Academic scored?', a: 'You receive an overall level from 0 to 6 in 0.1 steps and per-skill levels, all aligned to the CEFR. Grammar, listening and reading are auto-scored; writing and speaking are graded by trained reviewers.' },
      { q: 'Where is iTEP Academic accepted?', a: 'Over 1,000 institutions worldwide partner with iTEP, including many US colleges and pathway programs; confirm the specific school before registering.' },
      { q: 'How long are scores valid?', a: 'Two years. Results are typically available within one business day.' },
      { q: 'How soon are iTEP results available?', a: 'Scores are typically released within one business day of the proctored test.' }
    ],
    summaryPoints: [
      'iTEP Academic tests five English skills in 90 minutes',
      'Scored 0 to 6 and aligned to the CEFR',
      'About $129 with results in a day',
      'Online or at certified test centers'
    ],
    relatedSlugs: ['duolingo-english-test', 'languagecert-academic'],
    sourceUrl: 'https://www.itepexam.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'languagecert-academic',
    body: 'LanguageCert',
    tagline: 'The four-skill academic English test with live speaking and fast results.',
    description: 'LanguageCert Academic is a four-skill English test for university admission, delivered at test centers or online with live remote proctoring. It assesses listening, reading, writing and speaking and is reported on the LanguageCert Global Scale of 0 to 100, aligned to the CEFR from B1 to C2. The speaking component is a live video session with an examiner, and results typically post within five working days.',
    quickAnswer: {
      summary: 'LanguageCert Academic is a four-skill English test (listening, reading, writing, live speaking) scored 0 to 100 and aligned to CEFR B1 to C2. It is on-demand online or at centers, with results in about five days.',
      advantages: [
        'Live examiner speaking, not AI-only',
        'CEFR B1 to C2 aligned',
        'On-demand, online or at centers',
        'Results within five working days'
      ]
    },
    roadmap: [
      'Register on the LanguageCert site',
      'Choose a center or online proctoring',
      'Take the four skills',
      'Complete the live speaking session',
      'Receive the 0 to 100 report'
    ],
    prerequisites: 'None beyond a passport and a quiet space; open to any applicant online or at a center.',
    examMeta: {
      questions: 'Listening 30, Reading 30, Writing 2 tasks, Speaking 4 tasks',
      time: 'about 2 hours 34 minutes',
      pass: '0 to 100 Global Scale; CEFR B1 to C2',
      fee: '$0 to about $250 (varies by location)',
      format: 'Online proctored or test center',
      admin: 'Test centers or live online proctoring'
    },
    topics: [
      { name: 'Listening', weight: '', note: 'Audio played twice' },
      { name: 'Reading', weight: '', note: 'Academic texts and tasks' },
      { name: 'Writing', weight: '', note: 'Two timed tasks' },
      { name: 'Speaking', weight: '', note: 'Live video with an examiner' }
    ],
    examEssentials: [
      ['Score', '0 to 100 Global Scale, CEFR B1 to C2'],
      ['Speaking', 'Live examiner, not automated'],
      ['Results', 'Within 5 working days'],
      ['Validity', '2 years']
    ],
    timeline: [
      { stage: 'Register', duration: 'varies' },
      { stage: 'Study', duration: '2 to 4 weeks' },
      { stage: 'Test', duration: 'about 2.5 hours' },
      { stage: 'Report', duration: '5 days' }
    ],
    costBreakdown: {
      items: [{ item: 'Test fee', fee: '$0 to $250' }],
      total: '$0 to $250',
      footnote: 'Price varies by country and delivery; confirm the required CEFR level with your institution before booking.'
    },
    difficulty: 'Moderate',
    audience: 'University applicants needing academic English proof.',
    time: '2 to 4 weeks',
    cost: '$0 to $250',
    faqs: [
      { q: 'How is LanguageCert Academic scored?', a: 'You receive an overall 0 to 100 score aligned to the CEFR (B1 to C2) and a per-skill breakdown. A C1 Pass is broadly equivalent to IELTS 7.0.' },
      { q: 'Where is LanguageCert Academic accepted?', a: 'A growing number of US and international institutions accept it; always confirm the required level with the admission office before booking.' },
      { q: 'How long are scores valid?', a: 'Two years. The speaking component is a live video session with an examiner, and results post within about five working days.' },
      { q: 'When do LanguageCert results post?', a: 'Results are usually released within about five working days.' }
    ],
    summaryPoints: [
      'LanguageCert Academic tests four skills for admission',
      'Scored 0 to 100, CEFR B1 to C2',
      'Live speaking with an examiner',
      'On-demand, with results in about five days'
    ],
    relatedSlugs: ['duolingo-english-test', 'itep-academic'],
    sourceUrl: 'https://www.languagecert.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'aleks-ppl',
    body: 'McGraw Hill',
    tagline: 'The adaptive math placement system colleges use to put you in the right course.',
    description: 'ALEKS Placement, Preparation and Learning (PPL) is an adaptive mathematics assessment used by colleges to place incoming students into the right math course. It pairs an untimed initial assessment with a personalized Prep and Learning Module and several retake attempts, reporting a 0 to 100 score that represents the percentage of math topics mastered.',
    quickAnswer: {
      summary: 'ALEKS PPL is an untimed, adaptive math placement test of up to 30 open-response questions, scored 0 to 100 by topics mastered. Your school provides access, often for a small fee, and many require a proctored reassessment.',
      advantages: [
        'Places you precisely by topic mastery',
        'Includes a learning module to raise placement',
        'Several attempts allowed',
        'Usually low cost through your school'
      ]
    },
    roadmap: [
      'Get ALEKS access from your college',
      'Take the untimed initial assessment',
      'Work the learning module',
      'Retake for a higher placement',
      'Enroll in the matched course'
    ],
    prerequisites: 'You must be an incoming or current student at a college that uses ALEKS; the school provides access and any fee.',
    examMeta: {
      questions: 'Up to 30 open-response questions',
      time: '60 to 90 minutes (untimed, 24-hour limit)',
      pass: '0 to 100 topics mastered; course-specific cut',
      fee: '$0 to about $25 (school-set)',
      format: 'Adaptive, open-response, online',
      admin: 'Often unproctored initial, proctored reassessment (Respondus)'
    },
    topics: [
      { name: 'Real numbers', weight: '', note: 'Fractions, integers, percentages' },
      { name: 'Equations and inequalities', weight: '', note: 'Linear, quadratic, systems' },
      { name: 'Functions', weight: '', note: 'Linear and quadratic graphs' },
      { name: 'Exponents and polynomials', weight: '', note: 'Integer exponents, factoring' },
      { name: 'Rational expressions', weight: '', note: 'Rational equations and functions' },
      { name: 'Geometry and trigonometry', weight: '', note: 'Area, volume, trig functions' }
    ],
    examEssentials: [
      ['Score', '0 to 100 topics mastered'],
      ['Attempts', 'Up to 4 to 5, with study between'],
      ['Validity', 'About 12 months'],
      ['Cost', '$0 to about $25 via the school']
    ],
    timeline: [
      { stage: 'Access', duration: 'varies' },
      { stage: 'Initial assessment', duration: '60 to 90 min' },
      { stage: 'Learning module', duration: '5-plus hours' },
      { stage: 'Reassessment', duration: '60 to 90 min' }
    ],
    costBreakdown: {
      items: [{ item: 'ALEKS fee', fee: '$0 to $25' }],
      total: '$0 to $25',
      footnote: 'Many schools include the fee in enrollment or charge a small per-attempt fee; the learning module is part of the license.'
    },
    difficulty: 'Moderate',
    audience: 'Incoming college students needing math placement.',
    time: '1 to 3 weeks',
    cost: '$0 to $25',
    faqs: [
      { q: 'How many questions are on the ALEKS assessment?', a: 'Up to 30 open-response questions, and it is untimed; most students finish in 60 to 90 minutes. You cannot go back and change an answer once submitted.' },
      { q: 'Is the ALEKS PPL timed?', a: 'The assessment is not strictly timed, but you must complete it within 24 hours of starting. The learning module work between attempts is what usually moves your placement.' },
      { q: 'How many times can I take it?', a: 'Most schools allow up to four or five placement attempts, with a required study period and a short wait between them.' },
      { q: 'What is a good ALEKS score?', a: 'Many colleges place students into college-level math around 30 to 45 and into higher courses above that. Each school sets its own cut.' }
    ],
    summaryPoints: [
      'ALEKS PPL is an adaptive math placement system',
      'Scored 0 to 100 by topics mastered',
      'A learning module helps raise your placement',
      'Low cost through your school, with proctored retakes'
    ],
    relatedSlugs: ['tsi-assessment-2'],
    sourceUrl: 'https://www.aleks.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'tsi-assessment-2',
    body: 'Texas Higher Education Coordinating Board',
    tagline: 'The Texas placement test that decides your first college courses.',
    description: 'The Texas Success Initiative Assessment 2.0 (TSIA2) is the placement test required of most entering students at Texas public colleges and universities. It checks readiness in English language arts/reading and mathematics so students are placed into college-level or supporting courses. SAT, ACT, STAAR or prior college credit can exempt part or all of it.',
    quickAnswer: {
      summary: 'The TSIA2 is the Texas college placement test in ELAR and mathematics. You are college ready at ELAR 945 with an essay of 5, or Math 950; below those marks triggers a diagnostic and a supporting course. It is low cost through the college.',
      advantages: [
        'Required placement for Texas public colleges',
        'Clear college-ready cut scores',
        'Exemptions via SAT, ACT or STAAR',
        'Low cost through the school'
      ]
    },
    roadmap: [
      'Check your exemption status',
      'Find a Texas college test site',
      'Take the diagnostic and assessment',
      'Receive your placement',
      'Register for the right courses'
    ],
    prerequisites: 'Entering student at a Texas public college; SAT, ACT, STAAR or prior credit may exempt part or all.',
    examMeta: {
      questions: 'ELAR and Mathematics assessments (diagnostic if below)',
      time: 'untimed; about 2 to 3 hours',
      pass: 'ELAR 945 + essay 5; Math 950',
      fee: '$0 to about $10 per portion (school-set)',
      format: 'Multiple choice, computer',
      admin: 'Texas college testing centers'
    },
    topics: [
      { name: 'ELAR', weight: '', note: 'Reading and writing readiness' },
      { name: 'Mathematics', weight: '', note: 'Quantitative readiness' },
      { name: 'Essay', weight: '', note: 'Scored 1 to 8; 5+ needed with ELAR 945' },
      { name: 'Diagnostic', weight: '', note: 'Given if below the college-ready mark' }
    ],
    examEssentials: [
      ['College ready', 'ELAR 945 + essay 5, or Math 950'],
      ['Validity', '5 years for placement'],
      ['Retake', 'Per college policy, with advising'],
      ['Cost', '$0 to about $20 total']
    ],
    timeline: [
      { stage: 'Exemption check', duration: 'varies' },
      { stage: 'Study', duration: '1 to 2 weeks' },
      { stage: 'Test', duration: '2 to 3 hours' },
      { stage: 'Placement', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Assessment fee', fee: '$0 to $10 per portion' }],
      total: '$0 to $20',
      footnote: 'Set by the college; some schools waive the fee for advising or orientation attendees.'
    },
    difficulty: 'Moderate',
    audience: 'Entering Texas public college students.',
    time: '1 to 2 weeks',
    cost: '$0 to $20',
    faqs: [
      { q: 'Who has to take the TSIA2?', a: 'Most first-time entering students at Texas public colleges must take it unless exempt through SAT, ACT, STAAR or prior college credit. Check your specific exemption with the school.' },
      { q: 'What TSIA2 score is college ready?', a: 'ELAR 945 with an essay score of at least 5, or Mathematics 950. Scoring below triggers a diagnostic and placement into a supporting course.' },
      { q: 'How long are TSIA2 scores valid?', a: 'For placement purposes, TSIA2 scores are valid for five years from the test date.' },
      { q: 'Who must take the TSIA2?', a: 'Texas public college students take it unless exempt by SAT, ACT or other state-approved criteria.' }
    ],
    summaryPoints: [
      'The TSIA2 places Texas public college students',
      'College ready at ELAR 945 + essay 5 or Math 950',
      'SAT, ACT, STAAR or credit can exempt you',
      'Low cost through the college'
    ],
    relatedSlugs: ['aleks-ppl', 'staar'],
    sourceUrl: 'https://www.tsia2.acsite.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'sift-army-flight-test',
    body: 'United States Army',
    tagline: 'The Army flight-aptitude test that gates warrant officer aviation.',
    description: 'The Selection Instrument for Flight Training (SIFT) is the Army test used to select warrant officer candidates for flight training. It measures spatial aptitude, aviation knowledge, math and mechanical reasoning across seven subtests. A minimum score of 40 on the 20 to 80 scale is required to be considered for aviation, and only two attempts are allowed in a lifetime.',
    quickAnswer: {
      summary: 'The SIFT is the Army flight-aptitude test (20 to 80 scale, minimum 40) with seven subtests covering spatial, math, mechanical and aviation material. It is free when Army-administered and may be taken at most twice in a lifetime.',
      advantages: [
        'Required for Army warrant officer aviation',
        'Free when Army-administered',
        'Covers spatial, math and aviation aptitude',
        'Clear minimum score of 40'
      ]
    },
    roadmap: [
      'Contact a warrant officer recruiter',
      'Study spatial, math and aviation topics',
      'Take the SIFT at a test site',
      'Meet the minimum 40',
      'Use the score at the aviation board'
    ],
    prerequisites: 'Warrant officer flight-training candidate referred by a recruiter; meet medical and eligibility screens.',
    examMeta: {
      questions: 'Seven subtests',
      time: 'about 3 hours',
      pass: '20 to 80; minimum 40 to qualify',
      fee: '$0 (Army administered)',
      format: 'Multiple choice plus performance tasks',
      admin: 'MEPS or Army test sites'
    },
    topics: [
      { name: 'Simple Drawings', weight: '', note: 'Spatial visualization' },
      { name: 'Math', weight: '', note: 'Arithmetic and algebra' },
      { name: 'Mechanical Comprehensions', weight: '', note: 'Mechanical principles' },
      { name: 'Aviation / General Info', weight: '', note: 'Aviation knowledge' },
      { name: 'Spatial Apperception', weight: '', note: 'Rotations and orientation' },
      { name: 'Reading Comprehension', weight: '', note: 'Understanding written material' },
      { name: 'Hidden Figures', weight: '', note: 'Figure-ground perception' }
    ],
    examEssentials: [
      ['Score', '20 to 80; minimum 40 to qualify'],
      ['Attempts', '2 lifetime, 180-day wait'],
      ['Calculator', 'Not permitted'],
      ['Cost', '$0 when Army-administered']
    ],
    timeline: [
      { stage: 'Referral', duration: 'varies' },
      { stage: 'Study', duration: '4 to 8 weeks' },
      { stage: 'SIFT', duration: 'about 3 hours' },
      { stage: 'Board', duration: 'cycle' }
    ],
    costBreakdown: {
      items: [{ item: 'Exam administration', fee: '$0' }],
      total: '$0',
      footnote: 'The SIFT is free for Army-referred candidates; the only cost is self-study material if you choose it.'
    },
    difficulty: 'Challenging',
    audience: 'Army warrant officer flight candidates.',
    time: '4 to 8 weeks',
    cost: '$0',
    faqs: [
      { q: 'How many times can I take the SIFT?', a: 'Only twice in a lifetime, with a 180-day wait between attempts. Treat the first attempt as the one that counts.' },
      { q: 'What score do I need on the SIFT?', a: 'You must score at least 40 on the 20 to 80 scale to be considered for Army aviation warrant officer training; competitive boards look for meaningfully higher scores.' },
      { q: 'Can I use a calculator on the SIFT?', a: 'No. Calculators are not permitted, so practice the math and mechanical sections by hand before test day.' },
      { q: 'How many times can I take the SIFT?', a: 'A maximum of two attempts in a lifetime, with a 180-day wait between them and no calculators allowed.' }
    ],
    summaryPoints: [
      'The SIFT selects Army warrant officer aviators',
      'Scored 20 to 80; 40 is the minimum',
      'Two lifetime attempts, 180 days apart',
      'Free when Army-administered; no calculator'
    ],
    relatedSlugs: ['afoqt', 'astb-e', 'tbas'],
    sourceUrl: 'https://www.goarmy.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'i-ready-diagnostic',
    body: 'Curriculum Associates',
    tagline: 'The K-8 reading and math diagnostic that guides classroom instruction.',
    description: 'The i-Ready Diagnostic is an adaptive reading and mathematics assessment given by schools three times a year to students in kindergarten through grade 8 (and some high-school English learners). It identifies skill gaps and guides personalized instruction rather than grading students. Results show a scale score and a placement level such as below, on or above grade level.',
    quickAnswer: {
      summary: 'i-Ready is a school-administered, adaptive K-8 diagnostic in reading and math. It is not graded; it reports a scale score and a placement level so teachers can target instruction. Families pay nothing.',
      advantages: [
        'Adaptive, pinpoints skill gaps',
        'Given three times a year to track growth',
        'Not a pass/fail grade',
        'Free to families (school-run)'
      ]
    },
    roadmap: [
      'Test through the school',
      'Student takes reading and math',
      'Teacher reads the scale score',
      'Lessons target the gaps',
      'Repeat in winter and spring'
    ],
    prerequisites: 'None for the student; school-administered in fall, winter and spring windows.',
    examMeta: {
      questions: 'Adaptive; about 50 to 60 per subject',
      time: 'Untimed; 45 to 75 minutes per subject',
      pass: 'Not graded; scale score with placement level',
      fee: '$0 for families (school-paid)',
      format: 'Adaptive, online',
      admin: 'Schools'
    },
    topics: [
      { name: 'Reading', weight: '', note: 'Phonics, comprehension, vocabulary' },
      { name: 'Mathematics', weight: '', note: 'Number sense, operations, algebra' },
      { name: 'Foundational skills', weight: '', note: 'Screened for early grades' },
      { name: 'Growth monitoring', weight: '', note: 'Short checks between windows' }
    ],
    examEssentials: [
      ['Score', 'Scale score (about 100 to 800) and percentile'],
      ['Placement', 'Below, on or above grade level'],
      ['Frequency', 'Three times per year'],
      ['Cost', '$0 for families']
    ],
    timeline: [
      { stage: 'Fall window', duration: 'start of year' },
      { stage: 'Winter window', duration: 'mid-year' },
      { stage: 'Spring window', duration: 'end of year' },
      { stage: 'Instruction', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'i-Ready is paid for by the school or district; families do not register or pay.'
    },
    difficulty: 'Moderate',
    audience: 'K-8 students and some high-school English learners.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'Is the i-Ready Diagnostic graded?', a: 'No. It is a diagnostic, not a graded test. It reports a scale score and a placement level so teachers can target instruction; it does not pass or fail a student.' },
      { q: 'How often is i-Ready given?', a: 'Most schools administer it three times a year (fall, winter, spring) to measure growth; some also use short checks between windows.' },
      { q: 'What is a good i-Ready score?', a: 'Aim for an on-grade-level placement in each subject; the scale score rises as the student grows, so the trend matters more than a single number.' },
      { q: 'Is i-Ready a pass/fail test?', a: 'No. It is a diagnostic that places students on a learning path. Schools use it to guide instruction, not to pass or fail.' }
    ],
    summaryPoints: [
      'i-Ready is an adaptive K-8 diagnostic',
      'Not graded; reports a scale score and placement level',
      'Given three times a year to track growth',
      'Free to families because the school runs it'
    ],
    relatedSlugs: ['map-growth'],
    sourceUrl: 'https://www.curriculumassociates.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'map-growth',
    body: 'NWEA',
    tagline: 'The computer-adaptive K-12 test that tracks academic growth over time.',
    description: 'MAP Growth is a computer-adaptive interim assessment used by schools to measure achievement and growth in reading, language, mathematics and science from kindergarten through grade 12. It reports stable RIT scores that let teachers and families compare a student’s growth across grades and subjects, and it is given in fall, winter and spring.',
    quickAnswer: {
      summary: 'MAP Growth is a school-administered, adaptive K-12 test in reading, language, math and science. It is not pass/fail; it reports a stable RIT score that tracks growth over time. Families pay nothing.',
      advantages: [
        'Adaptive, precise growth measurement',
        'K-12, four subjects',
        'RIT score tracks growth across grades',
        'Free to families (school-run)'
      ]
    },
    roadmap: [
      'Test through the school',
      'Student takes the adaptive test',
      'Teacher reads the RIT score',
      'Instruction is adjusted',
      'Repeat across the year'
    ],
    prerequisites: 'None for the student; school-administered in fall, winter and spring windows.',
    examMeta: {
      questions: 'Adaptive; varies by subject',
      time: 'Untimed; under 1 hour per subject',
      pass: 'Not pass/fail; RIT score',
      fee: '$0 for families (school-paid)',
      format: 'Adaptive, online',
      admin: 'Schools'
    },
    topics: [
      { name: 'Reading', weight: '', note: 'Literature and informational text' },
      { name: 'Mathematics', weight: '', note: 'Number, algebra, geometry, data' },
      { name: 'Language Usage', weight: '', note: 'Grammar and writing conventions' },
      { name: 'Science', weight: '', note: 'Life, physical, earth science' }
    ],
    examEssentials: [
      ['Score', 'RIT scale (stable across grades)'],
      ['Frequency', 'Three times per year'],
      ['Percentiles', 'Compared to a national norm group'],
      ['Cost', '$0 for families']
    ],
    timeline: [
      { stage: 'Fall window', duration: 'start of year' },
      { stage: 'Winter window', duration: 'mid-year' },
      { stage: 'Spring window', duration: 'end of year' },
      { stage: 'Instruction', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'MAP Growth is paid for by the school or district; families do not register or pay.'
    },
    difficulty: 'Moderate',
    audience: 'K-12 students at NWEA member schools.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'What is a RIT score?', a: 'A RIT score is a stable measure of achievement on a scale that works across grades, like marking height on a growth chart. It shows the level where a student answered about half the questions correctly.' },
      { q: 'Is MAP Growth a pass/fail test?', a: 'No. MAP Growth measures current achievement and growth over time; it is not a pass/fail test and is not used for grade-level proficiency alone.' },
      { q: 'How often is MAP Growth given?', a: 'Commonly three times a year (fall, winter, spring), so teachers can track growth and adjust instruction.' },
      { q: 'Is MAP Growth pass/fail?', a: 'No. MAP Growth reports a RIT score showing growth over time, with no pass/fail cut.' }
    ],
    summaryPoints: [
      'MAP Growth is an adaptive K-12 interim assessment',
      'Reports a stable RIT score for growth tracking',
      'Covers reading, language, math and science',
      'Free to families because the school runs it'
    ],
    relatedSlugs: ['i-ready-diagnostic', 'naep'],
    sourceUrl: 'https://www.nwea.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'naep',
    body: 'National Center for Education Statistics',
    tagline: 'The Nation’s Report Card — a sample survey, not a test your child can take.',
    description: 'The National Assessment of Educational Progress (NAEP), known as the Nation’s Report Card, is a congressionally mandated sample assessment of student achievement. It reports the nation, states and some urban districts in subjects like reading, mathematics, science and writing, but it never reports individual student or school scores. Selected schools and students participate; families cannot opt in.',
    quickAnswer: {
      summary: 'NAEP is the federal sample survey (the Nation’s Report Card) that reports group trends in reading, math, science and more. It is not a test a family can take or prep for, and no individual scores are ever released.',
      advantages: [
        'Gold-standard national trend data',
        'Common measure across states',
        'Reports only group results, protecting privacy',
        'Federally funded, no cost to families'
      ]
    },
    roadmap: [
      'Your school is selected in the sample',
      'Your child may be chosen to participate',
      'The student takes one subject',
      'NAEP scores the group data',
      'Results publish as the Nation’s Report Card'
    ],
    prerequisites: 'Selected schools and students only; families cannot opt in, and a student’s participation is voluntary.',
    examMeta: {
      questions: 'Varies by subject and grade',
      time: '90 to 120 minutes',
      pass: 'No individual score; group achievement levels',
      fee: '$0 (federally funded)',
      format: 'Multiple choice and constructed response',
      admin: 'Schools, by NAEP representatives'
    },
    topics: [
      { name: 'Reading', weight: '', note: 'Grades 4, 8, 12' },
      { name: 'Mathematics', weight: '', note: 'Grades 4, 8, 12' },
      { name: 'Science', weight: '', note: 'Periodic, grades 4, 8, 12' },
      { name: 'Writing', weight: '', note: 'Periodic administration' },
      { name: 'Other subjects', weight: '', note: 'Civics, history, geography, arts' }
    ],
    examEssentials: [
      ['Reporting', 'Group only; no individual scores'],
      ['Scale', '0 to 500, with Basic/Proficient/Advanced'],
      ['Schedule', 'Reading and math every 2 years'],
      ['Cost', '$0 to families']
    ],
    timeline: [
      { stage: 'Sample selection', duration: 'varies' },
      { stage: 'Administration', duration: 'winter' },
      { stage: 'Scoring', duration: 'after testing' },
      { stage: 'Publication', duration: '6 to 12 months later' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'NAEP is federally funded; there is no fee and no individual registration or prep.'
    },
    difficulty: 'Moderate',
    audience: 'Sampled US students in grades 4, 8 and 12 (and ages 9, 13, 17).',
    time: 'n/a (sample survey)',
    cost: '$0',
    faqs: [
      { q: 'Will I get my child’s NAEP score?', a: 'No. NAEP is a sample survey and federal law prohibits reporting results for individual students or schools; it only publishes group trends.' },
      { q: 'Is NAEP required?', a: 'Participation is voluntary for every student, school and state, but federal law requires states that receive Title I funds to take part in the grades 4 and 8 reading and math assessments.' },
      { q: 'What does NAEP measure?', a: 'Reading and math every two years, plus science, writing and other subjects periodically, reported as scale scores and achievement levels for groups.' },
      { q: 'Do I get my own NAEP score?', a: 'No. NAEP is a sample assessment and reports only group results, never individual student scores.' }
    ],
    summaryPoints: [
      'NAEP is the Nation’s Report Card sample survey',
      'Reports only group trends, never individual scores',
      'Reading and math every two years; other subjects periodically',
      'Free and federally funded; no family registration'
    ],
    relatedSlugs: ['map-growth', 'smarter-balanced-summative-assessments'],
    sourceUrl: 'https://nces.ed.gov/nationsreportcard',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'new-york-regents-examinations',
    body: 'New York State Education Department',
    tagline: 'The subject-specific exit exams behind a New York Regents diploma.',
    description: 'The New York State Regents Examinations are the subject-specific high-school exit exams in English, mathematics, science and social studies. Earning passing scores on the required Regents exams is part of qualifying for a Regents or Advanced Regents diploma. Each exam is scored 0 to 100, with 65 the passing mark and a 90 average across required exams earning honors.',
    quickAnswer: {
      summary: 'The Regents exams are New York’s subject-specific high-school exit tests, scored 0 to 100. A standard Regents diploma needs five exams at 65 or better; an Advanced Regents needs about eight. Schools administer them in January, June and August.',
      advantages: [
        'Required for New York Regents diplomas',
        'Clear 65 passing mark',
        'Multiple administrations per year',
        'Free to public school students'
      ]
    },
    roadmap: [
      'Complete the course',
      'Register through your high school',
      'Take the exam in the window',
      'Score 65 or higher',
      'Apply toward your diploma'
    ],
    prerequisites: 'New York public high school students; taken after completing each course.',
    examMeta: {
      questions: 'Varies by subject (typically 3 to 4 parts)',
      time: '3 hours per exam',
      pass: '65 to pass; 90 average for honors',
      fee: '$0 (public school)',
      format: 'Multiple choice, short answer, essay',
      admin: 'Student’s high school'
    },
    topics: [
      { name: 'English Language Arts', weight: '', note: 'Reading, writing, text analysis' },
      { name: 'Mathematics', weight: '', note: 'Algebra, Geometry, Algebra II' },
      { name: 'Science', weight: '', note: 'Living Environment, Chemistry, Physics' },
      { name: 'Social Studies', weight: '', note: 'Global and US History and Government' }
    ],
    examEssentials: [
      ['Standard diploma', '5 exams at 65 or better'],
      ['Advanced diploma', 'About 8 exams at 65 plus a language sequence'],
      ['Honors', '90 average across required exams'],
      ['Cost', '$0 for public school students']
    ],
    timeline: [
      { stage: 'Coursework', duration: 'school year' },
      { stage: 'Exam', duration: '3 hours' },
      { stage: 'Retake', duration: 'later window' },
      { stage: 'Diploma', duration: 'graduation' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'Regents exams are given by public schools at no charge; private-school candidates may arrange testing through their school.'
    },
    difficulty: 'Moderate',
    audience: 'New York high school students.',
    time: 'course plus exam',
    cost: '$0',
    faqs: [
      { q: 'How many Regents exams do I need?', a: 'A standard Regents diploma requires five exams at 65 or better (one each in English, math, science, and two in social studies). An Advanced Regents diploma requires about eight.' },
      { q: 'What is a passing Regents score?', a: '65 out of 100 is the passing score on each exam. An average of 90 or higher across the required exams earns a diploma with honors.' },
      { q: 'Can I retake a Regents exam?', a: 'Yes. Regents exams are given in January, June and August, and you may retake an exam in a later administration to raise the score.' },
      { q: 'What score passes a Regents exam?', a: 'A 65 is the passing score, and 90 or above earns the with-honors distinction.' }
    ],
    summaryPoints: [
      'Regents exams are New York’s high-school exit tests',
      'Scored 0 to 100; 65 is the passing mark',
      'A 90 average earns a diploma with honors',
      'Free to public school students'
    ],
    relatedSlugs: ['staar', 'smarter-balanced-summative-assessments', 'parcc-assessment'],
    sourceUrl: 'https://www.nysed.gov',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'parcc-assessment',
    body: 'Partnership for Assessment of Readiness for College and Careers',
    tagline: 'The retired multi-state Common Core test now living on as state item banks.',
    description: 'PARCC (the Partnership for Assessment of Readiness for College and Careers) was a multi-state consortium that developed Common Core-aligned English language arts and mathematics assessments for grades 3 through 11. The consortium disbanded in 2017 and its question bank is now managed by New Meridian; most former member states have moved to their own custom tests built from that content. This entry documents the legacy exam rather than a bookable test.',
    quickAnswer: {
      summary: 'PARCC was a multi-state Common Core test given through 2018; the consortium ended in 2017 and its item bank now underpins custom state tests run by New Meridian. It is no longer a single bookable exam, so check your state’s current assessment.',
      advantages: [
        'Set a high bar for Common Core testing',
        'Item bank still used by states via New Meridian',
        'Legacy practice items remain useful',
        'Free when states offered it'
      ]
    },
    roadmap: [
      'Note the consortium no longer operates',
      'Identify your current state test',
      'Use legacy PARCC items for practice',
      'Prepare for the state-specific exam',
      'Test in your state’s window'
    ],
    prerequisites: 'Historically state-administered; now replaced by state-specific assessments derived from the PARCC content.',
    examMeta: {
      questions: 'ELA grades 3 to 11, math grades 3 to 8 and high school',
      time: 'varies by state',
      pass: 'Legacy: Level 3+ meets expectations',
      fee: '$0 (state-funded when offered)',
      format: 'Computer-based, with performance tasks',
      admin: 'Schools'
    },
    topics: [
      { name: 'ELA / Literacy', weight: '', note: 'Grades 3 to 11' },
      { name: 'Mathematics', weight: '', note: 'Grades 3 to 8 and high school' },
      { name: 'Performance tasks', weight: '', note: 'Extended, real-world items' }
    ],
    examEssentials: [
      ['Status', 'Consortium ended 2017; full test last given ~2018'],
      ['Item bank', 'Now managed by New Meridian'],
      ['Legacy levels', '1 to 5; Level 3 meets expectations'],
      ['Cost', '$0 when states offered it']
    ],
    timeline: [
      { stage: 'Discontinued', duration: 'after 2018' },
      { stage: 'State replacement', duration: 'ongoing' },
      { stage: 'Practice', duration: 'varies' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'PARCC is no longer administered as a single consortium test; any cost now applies to your state’s successor exam.'
    },
    difficulty: 'Moderate',
    audience: 'Students in former PARCC states (historical entry).',
    time: 'n/a (retired)',
    cost: '$0',
    faqs: [
      { q: 'Is PARCC still given?', a: 'The PARCC consortium ended in 2017 and the full test was last given around 2018. Its item bank now underpins custom state tests managed by New Meridian.' },
      { q: 'What replaced PARCC?', a: 'Former member states built their own assessments from the PARCC content. New Jersey kept a PARCC-style test for some time; check your state education agency for the current exam.' },
      { q: 'Is PARCC still given?', a: 'No. The PARCC consortium dissolved in 2017. Some states kept the item bank through New Meridian, but the PARCC name is retired.' },
      { q: 'Did students pass or fail PARCC?', a: 'PARCC reported achievement levels rather than a simple pass/fail. States set their own cut scores for proficiency.' }
    ],
    summaryPoints: [
      'PARCC was a multi-state Common Core assessment',
      'The consortium ended in 2017; the test is retired',
      'Its item bank now powers state tests via New Meridian',
      'Check your state for the current equivalent exam'
    ],
    relatedSlugs: ['smarter-balanced-summative-assessments', 'new-york-regents-examinations'],
    sourceUrl: 'https://www.parcconline.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'smarter-balanced-summative-assessments',
    body: 'Smarter Balanced Assessment Consortium',
    tagline: 'The computer-adaptive state test for grades 3-8 and high school in member states.',
    description: 'The Smarter Balanced Summative Assessments are the computer-adaptive English language arts/literacy and mathematics tests used by member states for grades 3 through 8 and high school. The adaptive engine adjusts difficulty to the student and performance tasks measure deeper writing and problem solving. Results sort students into four achievement levels, with Level 3 indicating on track for college and career readiness.',
    quickAnswer: {
      summary: 'Smarter Balanced is the computer-adaptive state test in ELA and math for grades 3-8 and high school used by member states. It reports a scale score (~2000-3000) and four levels; Level 3 means meets standard. Schools administer it in spring at no cost to families.',
      advantages: [
        'Computer-adaptive, precise measurement',
        'Four clear achievement levels',
        'Aligned to college and career readiness',
        'Free to families (state-funded)'
      ]
    },
    roadmap: [
      'Test through the school in spring',
      'Student takes the adaptive ELA and math',
      'Complete the performance tasks',
      'Receive the scale score and level',
      'Use results for support and placement'
    ],
    prerequisites: 'Student at a Smarter Balanced member-state school; taken in the spring window.',
    examMeta: {
      questions: 'Adaptive ELA and math, plus performance tasks',
      time: 'varies by grade',
      pass: 'Level 3 meets standard (scale ~2000 to 3000)',
      fee: '$0 (state-funded)',
      format: 'Computer-adaptive plus performance tasks',
      admin: 'Schools'
    },
    topics: [
      { name: 'ELA / Literacy', weight: '', note: 'Reading, writing, research' },
      { name: 'Mathematics', weight: '', note: 'Concepts, problem solving, modeling' },
      { name: 'Performance tasks', weight: '', note: 'Extended, real-world items' }
    ],
    examEssentials: [
      ['Levels', 'Four; Level 3 meets the standard'],
      ['Scale', 'About 2000 to 3000, rising by grade'],
      ['Member states', 'Consortium of states using the full test'],
      ['Cost', '$0 to families']
    ],
    timeline: [
      { stage: 'Spring window', duration: 'end of year' },
      { stage: 'Assess', duration: 'varies' },
      { stage: 'Report', duration: 'after scoring' },
      { stage: 'Instruction', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'Smarter Balanced is paid for by member states; families do not register or pay.'
    },
    difficulty: 'Moderate',
    audience: 'Students in Smarter Balanced member states.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'What Smarter Balanced score is proficient?', a: 'Level 3 indicates the student has met the achievement standard and is on track for college and career readiness; Levels 1 and 2 are below standard.' },
      { q: 'Is the Smarter Balanced test adaptive?', a: 'Yes. The computer-adaptive version adjusts question difficulty to the student, and performance tasks measure deeper writing and problem solving.' },
      { q: 'Which states use Smarter Balanced?', a: 'A consortium of member states uses the full test for grades 3-8 and high school; confirm your state’s participation with its education agency.' },
      { q: 'What do Smarter Balanced levels mean?', a: 'Results fall in four achievement levels, with level 3 generally meaning on track for the next grade.' }
    ],
    summaryPoints: [
      'Smarter Balanced is a computer-adaptive state test',
      'Covers ELA and math for grades 3-8 and high school',
      'Level 3 means meets the college-ready standard',
      'Free to families; state-funded'
    ],
    relatedSlugs: ['parcc-assessment', 'new-york-regents-examinations', 'staar'],
    sourceUrl: 'https://smarterbalanced.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'staar',
    body: 'Texas Education Agency',
    tagline: 'The Texas statewide test for grades 3-8 and five high-school end-of-course exams.',
    description: 'STAAR (the State of Texas Assessments of Academic Readiness) covers grades 3 through 8 plus five high-school end-of-course exams: English I, English II, Algebra I, Biology and US History. The 2023 redesign moved testing almost fully online, capped multiple choice at 75 percent, added evidence-based writing, and reset the scales, so results are not directly comparable to older STAAR.',
    quickAnswer: {
      summary: 'STAAR is the Texas statewide test for grades 3-8 and five high-school end-of-course exams. Redesigned for 2023, it is mostly online, caps multiple choice at 75 percent, and reports approaches/meets/masters grade-level standards. It is free to Texas public school students.',
      advantages: [
        'Required Texas accountability test',
        'Covers grades 3-8 and five EOCs',
        'Redesigned for online, skills-based items',
        'Free to public school students'
      ]
    },
    roadmap: [
      'Test through the school in spring',
      'Student takes the redesigned STAAR',
      'Receive the approaches/meets/masters report',
      'Use results for support',
      'Retake EOCs as needed'
    ],
    prerequisites: 'Texas public school student; taken in spring windows.',
    examMeta: {
      questions: 'Varies by grade and subject',
      time: 'varies by grade',
      pass: 'Approaches grade level; scales reset in 2023',
      fee: '$0 (state-funded)',
      format: 'Online, 75 percent multiple-choice cap',
      admin: 'Schools'
    },
    topics: [
      { name: 'Grades 3 to 8 RLA and Math', weight: '', note: 'Reading-language arts and math' },
      { name: 'Grades 5 and 8 Science', weight: '', note: 'Plus grade 8 social studies' },
      { name: 'End-of-course exams', weight: '', note: 'English I/II, Algebra I, Biology, US History' }
    ],
    examEssentials: [
      ['Coverage', 'Grades 3-8 plus 5 EOCs'],
      ['Redesign', 'Online since 2023; new question types'],
      ['Levels', 'Approaches, meets, masters grade level'],
      ['Cost', '$0 to public school students']
    ],
    timeline: [
      { stage: 'Spring window', duration: 'end of year' },
      { stage: 'Assess', duration: 'varies' },
      { stage: 'Report', duration: 'after scoring' },
      { stage: 'Support', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'STAAR is funded by the state; Texas public school students are not billed. The 2023 redesign reset scales, so scores are not comparable to prior years.'
    },
    difficulty: 'Moderate',
    audience: 'Texas public school students.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'Is STAAR required in Texas?', a: 'Yes, for students in Texas public schools, though the 2023 redesign removed the grade-promotion stakes for grades 5 and 8 and moved testing almost fully online.' },
      { q: 'What changed in the 2023 STAAR redesign?', a: 'Tests are now online, capped at 75 percent multiple choice, include evidence-based writing at every grade, and use refreshed scales, so scores are not directly comparable to older STAAR.' },
      { q: 'What do STAAR levels mean?', a: 'Students are reported as approaches, meets or masters grade-level standards; meets and masters indicate stronger readiness.' },
      { q: 'Can a family opt out of STAAR?', a: 'Texas law has no general opt-out. STAAR is given by schools, though local refusal handling varies.' }
    ],
    summaryPoints: [
      'STAAR covers grades 3-8 and five high-school EOCs',
      'Redesigned in 2023 for online, skills-based testing',
      'Reports approaches/meets/masters standards',
      'Free to Texas public school students'
    ],
    relatedSlugs: ['new-york-regents-examinations', 'tsi-assessment-2', 'smarter-balanced-summative-assessments'],
    sourceUrl: 'https://tea.texas.gov',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'terranova-3',
    body: 'Data Recognition Corporation',
    tagline: 'The nationally norm-referenced achievement test many private and homeschoolers use.',
    description: 'TerraNova, Third Edition (TerraNova 3) is a nationally norm-referenced achievement battery for grades K through 12 published by Data Recognition Corporation. Private schools, homeschool families and some districts use it to benchmark students against a national sample rather than a single state standard. Results report National Percentile Ranks, grade equivalents and stanines, and each section is timed.',
    quickAnswer: {
      summary: 'TerraNova 3 is a norm-referenced K-12 achievement test used by private schools and homeschoolers to compare a student with a national sample. It costs roughly $35 to $43 per student and is administered by a school or qualified tester (parents may give TerraNova 2).',
      advantages: [
        'National comparison, not a single state standard',
        'Widely accepted for homeschool compliance',
        'Covers core subjects K-12',
        'Timed sections keep it efficient'
      ]
    },
    roadmap: [
      'Order the test through a provider',
      'Schedule the administration',
      'Give the timed sections over several days',
      'Return materials for scoring',
      'Receive the percentile report'
    ],
    prerequisites: 'Ordered by a school or homeschool family through a test service or provider.',
    examMeta: {
      questions: 'Varies by grade and battery',
      time: '1.5 to 4.5 hours total',
      pass: 'Not pass/fail; national percentile',
      fee: '$35 to $43 per student (typical)',
      format: 'Timed, multiple choice (short answer grades 5+)',
      admin: 'School or qualified tester (parent for TerraNova 2)'
    },
    topics: [
      { name: 'Reading / Language', weight: '', note: 'Comprehension, vocabulary, mechanics' },
      { name: 'Mathematics', weight: '', note: 'Concepts, computation, problem solving' },
      { name: 'Science', weight: '', note: 'Available in many editions' },
      { name: 'Social Studies', weight: '', note: 'Available in many editions' }
    ],
    examEssentials: [
      ['Type', 'Nationally norm-referenced'],
      ['Scores', 'Percentile ranks, NCE, grade equivalent, stanines'],
      ['Grades', 'K through 12'],
      ['Cost', '$35 to $43 per student typical']
    ],
    timeline: [
      { stage: 'Order', duration: 'varies' },
      { stage: 'Administer', duration: '1.5 to 4.5 hours' },
      { stage: 'Score', duration: 'after return' },
      { stage: 'Report', duration: 'after scoring' }
    ],
    costBreakdown: {
      items: [{ item: 'Test materials', fee: '$35 to $43 per student' }],
      total: '$35 to $43',
      footnote: 'Price varies by provider and battery; some states require TerraNova 3 specifically for homeschool compliance.'
    },
    difficulty: 'Moderate',
    audience: 'Private-school and homeschool students.',
    time: '1 to 2 weeks',
    cost: '$35 to $43',
    faqs: [
      { q: 'Can a parent administer TerraNova?', a: 'TerraNova 2 can be parent-administered without a bachelor’s degree; TerraNova 3 is given by a qualified tester. Both satisfy many state homeschool testing rules.' },
      { q: 'What does TerraNova measure?', a: 'It covers reading, language, mathematics, and (by grade) spelling, vocabulary, science and social studies, reporting where a student falls versus a national sample.' },
      { q: 'How is the score reported?', a: 'As National Percentile Ranks, Normal Curve Equivalents, grade-equivalent scores and stanines against the national norm group; the percentile is the key number.' },
      { q: 'Who receives the TerraNova score?', a: 'Schools and districts receive norm-referenced scores comparing students to a national sample. Families get the report through the school.' }
    ],
    summaryPoints: [
      'TerraNova 3 is a norm-referenced K-12 achievement test',
      'Compares students to a national sample',
      'Used by private schools and homeschoolers',
      'About $35 to $43 per student'
    ],
    relatedSlugs: ['map-growth', 'i-ready-diagnostic'],
    sourceUrl: 'https://www.datarecognitioncorp.com',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'wida-access-for-ells',
    body: 'WIDA at the University of Wisconsin-Madison',
    tagline: 'The annual English-proficiency test for English learners in most states.',
    description: 'WIDA ACCESS for ELLs is the annual English-language-proficiency assessment used by most US states to measure the listening, speaking, reading and writing growth of English learners. Given once a year to identified students, it reports proficiency levels 1 to 6 (Entering through Reaching) with scale scores of about 100 to 600. Each state sets its own exit threshold for leaving English-learner services.',
    quickAnswer: {
      summary: 'WIDA ACCESS is the annual English-proficiency test for English learners in most states. It measures listening, speaking, reading and writing, reports levels 1 to 6, and is free to families because the state funds it. Each state sets the exit threshold.',
      advantages: [
        'Annual, tracks ELL growth',
        'Four domains: listening, speaking, reading, writing',
        'Levels 1 to 6 with scale scores',
        'Free to families (state-funded)'
      ]
    },
    roadmap: [
      'Identified ELL tested at school',
      'Student takes the four domains',
      'School reads the proficiency levels',
      'Plan supports or exit',
      'Retest next year'
    ],
    prerequisites: 'Identified English learner at a WIDA member-state school; tested annually.',
    examMeta: {
      questions: 'Listening, speaking, reading, writing items',
      time: 'varies by grade',
      pass: 'Proficiency levels 1 to 6; state exit thresholds',
      fee: '$0 (state-funded)',
      format: 'Online adaptive (grades 1-12), paper, or kindergarten',
      admin: 'Schools'
    },
    topics: [
      { name: 'Listening', weight: '', note: 'Understanding spoken English' },
      { name: 'Speaking', weight: '', note: 'Expressing ideas aloud' },
      { name: 'Reading', weight: '', note: 'Understanding written English' },
      { name: 'Writing', weight: '', note: 'Expressing ideas in writing' }
    ],
    examEssentials: [
      ['Levels', '1 to 6 (Entering to Reaching)'],
      ['Scale', 'About 100 to 600'],
      ['Frequency', 'Once per year'],
      ['Exit', 'State-set threshold (often ~4.2 overall)']
    ],
    timeline: [
      { stage: 'Winter window', duration: 'annual' },
      { stage: 'Assess', duration: 'varies' },
      { stage: 'Report', duration: 'after scoring' },
      { stage: 'Services', duration: 'ongoing' }
    ],
    costBreakdown: {
      items: [{ item: 'Administration', fee: '$0' }],
      total: '$0',
      footnote: 'WIDA ACCESS is funded by member states; families do not register or pay. Exit thresholds are set by each state.'
    },
    difficulty: 'Moderate',
    audience: 'English learners in WIDA member states.',
    time: 'school year',
    cost: '$0',
    faqs: [
      { q: 'How often is ACCESS given?', a: 'Once a year, in the winter testing window, to every student identified as an English learner in a WIDA member state.' },
      { q: 'What ACCESS score lets a student exit EL services?', a: 'Each state sets its own exit threshold, often around an overall 4.2 with a 3.5 speaking. Ask your school or state education agency for the exact cut.' },
      { q: 'What do the ACCESS levels mean?', a: 'Levels run 1 (Entering) to 6 (Reaching) and describe how a student uses English for academic tasks; the scale score tracks growth across grades.' },
      { q: 'How often is WIDA ACCESS given?', a: 'Once each spring, to track English learners yearly progress toward proficiency.' }
    ],
    summaryPoints: [
      'WIDA ACCESS is the annual ELL proficiency test',
      'Measures listening, speaking, reading and writing',
      'Reports levels 1 to 6 with scale scores',
      'Free to families; state-funded'
    ],
    relatedSlugs: ['duolingo-english-test', 'map-growth'],
    sourceUrl: 'https://wida.wisc.edu',
    reviewed: '2026-08',
    confidence: 'high'
  }
];

export default { programs, exams };
