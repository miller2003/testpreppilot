const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Food safety & hospitality certifications desk',
    bio: 'We cover the National Restaurant Association ServSafe program. Format and fee facts come from ServSafe official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ServSafe Alcohol Primary course structure and exam against ServSafe official pages; verified BLS food-service wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Alcohol certification is a hiring requirement in licensed venues: bartenders earned a $29,820 median in May 2024 (BLS)',
    summary: 'The ServSafe Alcohol Primary certification proves that a server or seller understands responsible alcohol service - checking IDs, recognizing intoxication, avoiding service to minors, and handling difficult situations. It is a training credential, not a job license for a specific occupation, so no single BLS SOC code attaches to it; its role is to satisfy the alcohol-service training requirement that employers and many state and local jurisdictions impose on staff in licensed venues. The salary story belongs to the occupations that require it. BLS reported that bartenders (SOC 35-3011) earned a median of $29,820 in May 2024, and waiters and waitresses (35-3031) about $28,080; these wage-and-salary figures understate cash compensation because tips form a large share of income in these roles, and BLS notes that hourly earnings data capture only the base wage. The structural point for workers is that alcohol-service certification is a de facto hireability requirement in bars, restaurants, hotels and event venues - many employers will not schedule a new hire on a bar or service floor until the training is complete - and it is cheap ($15 or less in most formats) and quick (under two hours). For employers, the certificate documents compliance with responsible-service expectations and supports defense in liability situations. BLS classifies workers by job duty, not certificates, so no credential maps to a specific wage; the certificate removes a hiring barrier, and the income follows the job, including the tips that the base wage understates. The upgrade path is the ServSafe Alcohol Advanced program for managers and the Food Protection Manager certification for food-safety management roles.',
    rows: [
      { label: 'Bartenders median, May 2024', value: '$29,820', note: 'BLS OEWS, SOC 35-3011 (base wage; tips understated)' },
      { label: 'Waiters and waitresses median, May 2024', value: '~$28,080', note: 'BLS OEWS, SOC 35-3031 (base wage; tips understated)' },
      { label: 'Food service managers median, May 2024', value: '$65,310', note: 'BLS OEWS, SOC 35-2021' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Food and beverage service employment is projected to grow about 6 percent from 2024 to 2034, with large replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Food and Beverage Serving and Related Workers', url: 'https://www.bls.gov/ooh/food-preparation-and-serving/food-and-beverage-serving-and-related-workers.htm' }
  },
  passRate: {
    headline: 'The ServSafe Alcohol Primary course requires a 75 percent passing score on a 25-question exam (ServSafe official)',
    summary: 'ServSafe does not publish a national pass-rate statistic for the Alcohol Primary course, but the assessment mechanics are public. The course is delivered online (also in Spanish and other languages) and ends with a 25-question multiple-choice exam; the passing score is 75 percent, meaning a candidate must answer at least 19 of 25 correctly. The exam is not proctored in most delivery formats, because the course is training certification rather than licensure, and candidates may review the material and retake the exam if they do not pass. Because the content is a finite set of responsible-service rules - ID verification, signs of intoxication, policies for refusing service, and local law variations - the practical pass rate among people who complete the course is very high, and the certificate is issued electronically (PDF and wallet card) after passing. The certificate is valid for a period set by the employer or jurisdiction - commonly two to three years, though some states require renewal on a different cycle, and some employers require refresher training annually; candidates should confirm the requirement where they work. The exam covers four topic areas: the responsible server\u2019s role, recognizing and preventing intoxication, checking identification, and handling difficult situations. The honest summary is that completion with a 75 percent score is the realistic bar; the certificate\u2019s value is satisfying the training requirement and supporting the employer\u2019s responsible-service position, and the number that matters is the 75 percent threshold plus the jurisdiction\u2019s validity window.',
    source: { label: 'ServSafe Alcohol Primary official program', url: 'https://www.servsafe.com/ServSafe-Alcohol' },
    caveat: 'ServSafe does not publish pass rates; the Primary exam requires 75% on 25 questions with retakes available.'
  },
  studyPlan: {
    summary: 'The ServSafe Alcohol Primary course is short and self-paced, so a study plan is measured in hours rather than weeks. The content is organized around four areas: the responsible server\u2019s role (why training matters, server liability), recognizing and preventing intoxication (signs and symptoms, pacing service), checking identification (valid ID features, refusal when unsure), and handling difficult situations (refusing service professionally, dealing with angry guests). A realistic plan: session one (30-45 minutes) works through the course modules with the official materials; session two (20-30 minutes) takes the 25-question exam and reviews missed items; if a retake is needed, session three (15-20 minutes) reviews the specific topics behind the missed questions and retakes. Because the exam is open-book in practice in most online formats and the passing bar is 75 percent, the failure mode is not difficulty but rushing - candidates who skip the ID-checking section (which has the most detail-heavy items) tend to miss the largest cluster of questions. The single most important thing to learn is the ID verification process: checking the birth date, the physical features (photo, age, height), the security features, and knowing the legal refusal rules in the state where you serve, because these items repeat across the exam. For staff in states with specific responsible-service requirements (such as server training mandates), the ServSafe certificate is one of the accepted credentials, and candidates should confirm which program their state or employer requires.',
    totalHours: '1-2 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Course modules', tasks: ['Work through the four modules', 'Note ID-check and intoxication signs'], hours: 0.75 },
      { label: 'Session 2', focus: 'Exam', tasks: ['Take the 25-question exam', 'Review missed items'], hours: 0.5 },
      { label: 'Session 3 (if needed)', focus: 'Retake', tasks: ['Review missed topics', 'Retake to 75%+'], hours: 0.33 }
    ],
    variants: [
      { label: 'State requirements', detail: 'Some states mandate specific responsible-service training; confirm which certificate the state or employer requires.' },
      { label: 'Manager upgrade', detail: 'The ServSafe Alcohol Advanced program is the manager-level certification with a longer exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategies for the ServSafe Alcohol Primary exam are about mastering a small set of responsible-service rules and applying them to scenarios. Strategy one: learn the ID-checking process step by step - verify the birth date, compare the photo and physical descriptors, check the security features, and refuse if anything is uncertain - because ID items are the most common and the most detail-heavy. Strategy two: memorize the common signs of intoxication (slurred speech, unsteady movement, flushed appearance, impaired judgment) and the pacing rules for service, because recognition items test the observable signs, not vague definitions. Strategy three: know the refusal process cold: state the policy clearly, stay calm, avoid arguments, and involve a manager or security when needed, because scenario items test the professional response, not the confrontation. Strategy four: review the local law variations - minimum legal drinking age (21 in all US states), and any state-specific rules - because the exam frames items around the legal context. Strategy five: complete the official course rather than third-party summaries, because the exam is drawn from ServSafe\u2019s own materials. Strategy six: test soon after finishing the course while the rules are fresh; the content is small enough that same-day completion is the efficient path, and the retake is available if needed.',
    items: [
      { title: 'Master the ID check', detail: 'Birth date, photo, descriptors, security features, refusal.' },
      { title: 'Know the signs of intoxication', detail: 'Slurred speech, unsteadiness, flushed appearance, judgment.' },
      { title: 'Practice the refusal process', detail: 'Calm, clear policy; escalate to a manager when needed.' },
      { title: 'Review local law basics', detail: 'Legal age 21 and state-specific rules frame the items.' }
    ]
  },
  resourceComparison: {
    summary: 'The ServSafe Alcohol Primary resource market is simple because ServSafe owns the official content and the certification. The official ServSafe Alcohol Primary course includes the training modules, the 25-question exam and the certificate, priced around $15 (occasionally higher through resellers or with print materials); buying the official course is the standard path and the only way to get the certificate itself. ServSafe also publishes a printed Alcohol Primary guide (about $15) and free resources including ID-checking checklists. Third-party summaries and quizzes exist for free or a few dollars but are unnecessary: the official course contains everything the exam tests, and third-party content occasionally states rules that conflict with current state laws. Employers often pay for or reimburse the course, and some states accept alternative responsible-service certificates, so candidates should confirm the accepted credential with their employer before purchasing. The honest ranking: the official online course, optionally the printed guide, and nothing else. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official ServSafe Alcohol Primary course', values: ['~$15', 'Online, self-paced', 'The required training, exam, and certificate'] },
      { label: 'ServSafe Alcohol Primary Guide', values: ['~$15', 'Print', 'Study companion'] },
      { label: 'Free ServSafe resources', values: ['Free', 'Web PDFs', 'ID-checking checklists and rules'] },
      { label: 'Third-party quizzes', values: ['Free-$5', 'Online', 'Unnecessary; official course suffices'] }
    ],
    footnote: 'Prices dated 2025-26; ServSafe is the official provider. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the ServSafe Alcohol Primary exam come from skipping the detail-heavy ID section and misreading scenario items. Mistake one: testing without the course; the exam is drawn from ServSafe\u2019s materials, and candidates who rely on general knowledge miss the specific ID-verification steps. Mistake two: treating ID checking as a single step; the exam tests the full sequence - birth date, photo comparison, physical descriptors, security features, and refusal when uncertain - and candidates who answer from habit miss the items that probe the sequence. Mistake three: confusing "signs of intoxication" with subjective impressions; the exam rewards the observable, documented signs (speech, movement, appearance), not judgments like "seems drunk." Mistake four: answering refusal scenarios with confrontation; the professional response is calm, policy-based refusal with escalation, and scenario items test that. Mistake five: ignoring state variation; items are framed around the legal context, and candidates who assume one national rule miss local-law items. Mistake six: assuming the certificate never expires; employers and states set validity windows (commonly two to three years), and an expired certificate fails the same compliance check the original satisfied. Finally, candidates should confirm which certificate the employer requires - Primary for servers, Advanced for managers - because taking the wrong level wastes the fee.',
    items: [
      { mistake: 'Testing without the course', fix: 'Work the official modules; the exam comes from them.' },
      { mistake: 'Reducing ID check to one step', fix: 'Learn the full verification sequence, including refusal.' },
      { mistake: 'Answering with subjective impressions', fix: 'Use the observable, documented signs of intoxication.' },
      { mistake: 'Choosing confrontation in refusal items', fix: 'Calm, policy-based refusal with escalation.' },
      { mistake: 'Assuming the certificate is permanent', fix: 'Track the validity window set by employer or state.' }
    ]
  },
  questionTypes: {
    summary: 'The ServSafe Alcohol Primary exam consists of 25 multiple-choice questions with a passing score of 75 percent (19 of 25). Items are drawn from four topic areas: the responsible server\u2019s role and liability, recognizing and preventing intoxication (signs, pacing, food service), checking identification (verification steps and refusal), and handling difficult situations (professional refusal, escalation, documentation). Most items are either direct knowledge questions or scenario questions (what should the server do next). Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Responsible server\u2019s role', share: '~20% of items', detail: 'Liability, role of training, policies.' },
      { name: 'Recognizing and preventing intoxication', share: '~30% of items', detail: 'Signs, pacing, food, refusal triggers.' },
      { name: 'Checking identification', share: '~30% of items', detail: 'Verification sequence, security features, refusal.' },
      { name: 'Handling difficult situations', share: '~20% of items', detail: 'Professional refusal, escalation, documentation.' }
    ],
    samples: [
      {
        prompt: 'A guest hands the server an ID that looks slightly worn. Which step should the server take first when checking the ID?',
        options: ['A. Verify the birth date', 'B. Compare the photo to the guest\u2019s face', 'C. Check the security features', 'D. Ask the guest their birth date'],
        answer: 'B',
        explanation: 'The verification sequence starts with comparing the photo and physical descriptors to the guest, then checks the birth date and security features; the exam rewards the order of the checks.'
      },
      {
        prompt: 'Which of the following is a documented sign of intoxication?',
        options: ['A. The guest is speaking more quietly than usual', 'B. The guest\u2019s speech is slurred and their movement is unsteady', 'C. The guest is drinking water', 'D. The guest is laughing with friends'],
        answer: 'B',
        explanation: 'Slurred speech and unsteady movement are observable, documented signs of intoxication; the distractors are normal behaviors, not signs.'
      },
      {
        prompt: 'A guest who was refused service becomes loud and argumentative. What should the server do?',
        options: ['A. Argue back to establish the point', 'B. Stay calm, restate the policy, and call a manager', 'C. Serve the guest to avoid a scene', 'D. Escort the guest out physically'],
        answer: 'B',
        explanation: 'The professional response is calm, policy-based refusal with escalation to a manager; arguing escalates the situation, serving violates policy, and physical removal is a security function.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The ServSafe Alcohol Primary exam has no physical test center: the course and exam are completed online through ServSafe.com after purchasing access, at any time, on any device with an internet connection. There is no proctor, no appointment, and no deadline; candidates work through the four modules and then take the 25-question exam. The exam is timed by the platform with a generous allowance, and candidates who do not reach 75 percent can review and retake. After passing, the certificate is issued electronically (PDF download and a wallet card option), and the completion record is stored in the candidate\u2019s ServSafe account, which employers can verify. Candidates should confirm with their employer or state whether the ServSafe certificate is the accepted credential (some states accept other responsible-service training) and note the certificate\u2019s validity window, commonly two to three years, and set a renewal reminder. Afterwards, the natural next step for managers is the ServSafe Alcohol Advanced program, which covers the same topics at greater depth with a longer exam.',
    bring: ['ServSafe account and course access', 'Stable internet connection', '60-90 minutes of uninterrupted time', 'Employer/state requirements for the certificate'],
    leave: ['Proctoring or appointment - there is none', 'Special software beyond a browser', 'Deadlines - the course is self-paced'],
    timeline: [
      { time: 'Step 1', detail: 'Purchase and enroll in the official online course.' },
      { time: 'Step 2', detail: 'Work through the four modules (30-45 minutes).' },
      { time: 'Step 3', detail: 'Take the 25-question exam; 75% (19/25) passes.' },
      { time: 'Step 4', detail: 'Retake if needed; download the certificate.' },
      { time: 'Step 5', detail: 'Confirm the validity window and any state requirements.' }
    ],
    rules: [
      'The course and exam are fully online and unproctored.',
      'The passing score is 75% on 25 questions.',
      'The certificate is valid per employer/state policy, commonly 2-3 years.',
      'The Alcohol Advanced program is the manager-level certification.'
    ],
    afterwards: 'Download the certificate and store it with the employer; set a renewal reminder for the validity window, and consider the Alcohol Advanced program for manager roles.'
  }
};

export default data;
