const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Food safety & hospitality certifications desk',
    bio: 'We cover the National Restaurant Association ServSafe program. Format and fee facts come from ServSafe official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the ServSafe Allergens course structure and exam against ServSafe official pages; verified BLS food-service wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Allergen training is a front-of-house requirement: first-line food prep supervisors earned a $38,100 median in May 2024 (BLS)',
    summary: 'The ServSafe Allergens certification trains foodservice staff to manage food allergies - recognizing the nine major allergens, preventing cross-contact, reading labels, and communicating allergen information to guests. It is a training credential, not a job license for one occupation, so no single BLS SOC code attaches to it; its role is to satisfy the allergen-awareness training that employers, state and local jurisdictions, and insurance and corporate programs increasingly require in restaurants and foodservice operations. The salary story belongs to the occupations that require it. BLS reported that first-line supervisors of food preparation and serving workers (SOC 35-1012) earned a median of $38,100 in May 2024, and fast food and counter workers (35-3023) about $27,010; front-of-house and management staff who complete allergen training typically sit in these roles, and the wage figures understate cash compensation where tips are involved. The structural point for workers is that allergen certification is increasingly a hireability and promotion requirement - many corporate restaurant brands and foodservice programs mandate it for all staff who interact with guests or food - and it is cheap (about $15) and quick (under two hours). For employers, the training supports compliance with food-allergy expectations in the FDA Food Code and reduces the risk of allergen-related incidents. BLS classifies workers by job duty, not certificates, so no credential maps to a specific wage; the certificate removes a training barrier and supports roles that carry the foodservice wage medians BLS documents. The natural upgrade path is the ServSafe Food Protection Manager certification for management roles.',
    rows: [
      { label: 'First-line supervisors of food prep median, May 2024', value: '$38,100', note: 'BLS OEWS, SOC 35-1012' },
      { label: 'Fast food and counter workers median, May 2024', value: '$27,010', note: 'BLS OEWS, SOC 35-3023' },
      { label: 'Food service managers median, May 2024', value: '$65,310', note: 'BLS OEWS, SOC 35-2021' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' }
    ],
    growth: 'Food and beverage service employment is projected to grow about 6 percent from 2024 to 2034, with large replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Food and Beverage Serving and Related Workers', url: 'https://www.bls.gov/ooh/food-preparation-and-serving/food-and-beverage-serving-and-related-workers.htm' }
  },
  passRate: {
    headline: 'The ServSafe Allergens course requires a 75 percent passing score on a 40-question exam (ServSafe official)',
    summary: 'ServSafe does not publish a national pass-rate statistic for the Allergens course, but the assessment mechanics are public. The course is delivered online (also in Spanish and other languages) and ends with a 40-question multiple-choice exam; the passing score is 75 percent, meaning a candidate must answer at least 30 of 40 correctly. The exam is not proctored in most delivery formats, because the course is training certification rather than licensure, and candidates may review the material and retake the exam if they do not pass. Because the content is a finite set of allergen-management rules - the nine major allergens, cross-contact prevention, label reading, communication with guests - the practical pass rate among people who complete the course is very high, and the certificate is issued electronically after passing. The certificate is valid for a period set by the employer or jurisdiction, commonly two to three years, and some employers require refresher training on a shorter cycle. The course covers four areas: understanding food allergies and intolerances, identifying the nine major allergens (milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soy, sesame), preventing cross-contact and label reading, and communicating allergen information to guests and kitchen staff. The honest summary is that completion with a 75 percent score is the realistic bar; the certificate\u2019s value is satisfying the training requirement and supporting the operation\u2019s allergen-safety position, and the number that matters is the 75 percent threshold plus the employer\u2019s validity policy.',
    source: { label: 'ServSafe Allergens official program', url: 'https://www.servsafe.com/ServSafe-Allergens' },
    caveat: 'ServSafe does not publish pass rates; the Allergens exam requires 75% on 40 questions with retakes available.'
  },
  studyPlan: {
    summary: 'The ServSafe Allergens course is short and self-paced, so a study plan is measured in hours rather than weeks. The content is organized around four areas: understanding food allergies (the immune response, the difference between allergies and intolerances, the severity of reactions), identifying the nine major allergens and their hidden sources, preventing cross-contact (separate equipment, storage, preparation, cleaning) and reading labels, and communicating allergen information to guests and between front and back of house. A realistic plan: session one (45-60 minutes) works through the course modules; session two (30-45 minutes) takes the 40-question exam and reviews missed items; if a retake is needed, session three (20-30 minutes) reviews the specific topics behind the missed questions and retakes. Because the exam is open-book in practice in most online formats and the passing bar is 75 percent, the failure mode is not difficulty but rushing - candidates who skip the cross-contact section (the most detail-heavy) tend to miss the largest cluster of questions. The single most important thing to memorize is the list of the nine major allergens and the difference between cross-contact (allergen transfer) and cross-contamination (pathogen transfer), because allergen-identification and cross-contact items repeat across the exam. For staff in operations that serve guests with allergies, the practical value of the course is the communication script: how to take an allergen order, how to confirm with the kitchen, and how to escalate when information is uncertain.',
    totalHours: '1.5-2.5 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Course modules', tasks: ['Work through the four modules', 'Note the nine allergens and cross-contact rules'], hours: 1 },
      { label: 'Session 2', focus: 'Exam', tasks: ['Take the 40-question exam', 'Review missed items'], hours: 0.75 },
      { label: 'Session 3 (if needed)', focus: 'Retake', tasks: ['Review missed topics', 'Retake to 75%+'], hours: 0.5 }
    ],
    variants: [
      { label: 'Bilingual delivery', detail: 'The course is available in multiple languages; take it in the language you read most fluently.' },
      { label: 'Manager path', detail: 'The Food Protection Manager certification covers allergens within its broader food-safety scope.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategies for the ServSafe Allergens exam are about memorizing the allergen list and applying cross-contact rules to scenarios. Strategy one: memorize the nine major allergens by name and their hidden sources - milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soy and sesame appear in processed foods under many names (casein, whey, albumin, lecithin) - because allergen-identification items are the largest cluster. Strategy two: learn the difference between cross-contact and cross-contamination cold; the exam tests the distinction directly, and the prevention steps differ (separate equipment and storage for allergens vs cleaning and sanitizing for pathogens). Strategy three: master the prevention sequence - dedicated equipment, separate storage (allergens stored below other items to prevent drips), cleaning between preparations, and label verification - because scenario items test the application. Strategy four: learn the communication protocol: confirm the allergen order with the guest, flag it to the kitchen, and never guess when label information is missing; scenario items test the escalation behavior. Strategy five: complete the official course rather than third-party summaries, because the exam is drawn from ServSafe\u2019s own materials. Strategy six: test soon after finishing the course while the rules are fresh; the content is small enough that same-day completion is the efficient path, and the retake is available if needed.',
    items: [
      { title: 'Memorize the nine allergens', detail: 'Milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame - and hidden names.' },
      { title: 'Learn cross-contact vs cross-contamination', detail: 'The exam tests the distinction and the different prevention steps.' },
      { title: 'Master the prevention sequence', detail: 'Separate equipment, storage order, cleaning, label checks.' },
      { title: 'Know the communication protocol', detail: 'Confirm with the guest, flag the kitchen, never guess.' }
    ]
  },
  resourceComparison: {
    summary: 'The ServSafe Allergens resource market is simple because ServSafe owns the official content and the certification. The official ServSafe Allergens course includes the training modules, the 40-question exam and the certificate, priced around $15; buying the official course is the standard path and the only way to get the certificate itself. ServSafe also publishes free resources including allergen-identification charts and cross-contact checklists. Third-party summaries and quizzes exist for free or a few dollars but are unnecessary: the official course contains everything the exam tests, and third-party content occasionally lists an outdated allergen set (the FDA added sesame as a major allergen in 2021, and some older materials omit it). Employers often pay for or reimburse the course, and some jurisdictions accept alternative allergen training, so candidates should confirm the accepted credential with their employer before purchasing. The honest ranking: the official online course and nothing else. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official ServSafe Allergens course', values: ['~$15', 'Online, self-paced', 'The required training, exam, and certificate'] },
      { label: 'Free ServSafe resources', values: ['Free', 'Web PDFs', 'Allergen charts and checklists'] },
      { label: 'Third-party quizzes', values: ['Free-$5', 'Online', 'Unnecessary; risk of outdated allergen lists'] }
    ],
    footnote: 'Prices dated 2025-26; ServSafe is the official provider. The FDA added sesame as a major allergen in 2021. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the ServSafe Allergens exam come from outdated allergen lists and from blurring cross-contact with cross-contamination. Mistake one: testing without the course; the exam is drawn from ServSafe\u2019s materials, and candidates who rely on general knowledge miss the specific hidden-source names. Mistake two: using an outdated allergen list; sesame became a major allergen under the FDA in 2021, and candidates who answer from older lists miss items on it. Mistake three: confusing cross-contact with cross-contamination; the exam tests the distinction, and the prevention steps differ - allergen separation versus pathogen elimination. Mistake four: answering scenario items with good intentions instead of the protocol; the exam rewards the specific sequence (separate equipment, storage order, label verification, never guessing), not a general "be careful" answer. Mistake five: skipping the communication items; the course\u2019s guest-facing protocol (confirm, flag, escalate) is a tested area, and front-of-house candidates who skip it lose a trainable cluster. Mistake six: assuming the certificate never expires; employers and jurisdictions set validity windows (commonly two to three years), and an expired certificate fails the same compliance check the original satisfied. Finally, candidates should confirm which certificate the employer requires, because some operations bundle allergens into the broader food-safety training.',
    items: [
      { mistake: 'Testing without the course', fix: 'Work the official modules; the exam comes from them.' },
      { mistake: 'Using an outdated allergen list', fix: 'Include sesame (major allergen since 2021).' },
      { mistake: 'Blurring cross-contact and contamination', fix: 'Allergen separation vs pathogen elimination.' },
      { mistake: 'Answering with general caution', fix: 'Apply the specific prevention and communication protocol.' },
      { mistake: 'Assuming the certificate is permanent', fix: 'Track the validity window set by employer or jurisdiction.' }
    ]
  },
  questionTypes: {
    summary: 'The ServSafe Allergens exam consists of 40 multiple-choice questions with a passing score of 75 percent (30 of 40). Items are drawn from four topic areas: understanding food allergies (the immune response, allergy vs intolerance, reaction severity), identifying the nine major allergens (milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soy, sesame) and their hidden sources, preventing cross-contact (separate equipment, storage, preparation, cleaning) and reading labels, and communicating allergen information to guests and kitchen staff. Most items are either direct knowledge questions or scenario questions. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Understanding food allergies', share: '~20% of items', detail: 'Immune response, allergy vs intolerance, severity.' },
      { name: 'Identifying major allergens', share: '~30% of items', detail: 'The nine allergens and hidden ingredient names.' },
      { name: 'Preventing cross-contact', share: '~30% of items', detail: 'Separate equipment, storage, preparation, label reading.' },
      { name: 'Communicating allergen information', share: '~20% of items', detail: 'Guest communication, kitchen handoff, escalation.' }
    ],
    samples: [
      {
        prompt: 'Which of the following is one of the nine major food allergens recognized by the FDA?',
        options: ['A. Sesame', 'B. Strawberries', 'C. Corn', 'D. Honey'],
        answer: 'A',
        explanation: 'Sesame was added as the ninth major allergen under FDA rules in 2021; strawberries, corn and honey are not on the major-allergen list.'
      },
      {
        prompt: 'What is the difference between cross-contact and cross-contamination?',
        options: ['A. They are the same thing', 'B. Cross-contact transfers an allergen; cross-contamination transfers pathogens', 'C. Cross-contact is cleaned with sanitizer; cross-contamination requires soap only', 'D. Cross-contact applies only to raw foods'],
        answer: 'B',
        explanation: 'Cross-contact is the transfer of an allergen to a food that should not contain it; cross-contamination is the transfer of pathogens. The prevention steps differ accordingly.'
      },
      {
        prompt: 'A guest tells the server they have a peanut allergy and asks if the sauce is safe. The sauce label does not list peanuts, but the kitchen cannot confirm the supplier. What should the server do?',
        options: ['A. Serve it and monitor the guest', 'B. Tell the guest it is safe because peanuts are not listed', 'C. Flag the uncertainty and recommend a different item the kitchen can confirm', 'D. Refuse to serve the guest anything'],
        answer: 'C',
        explanation: 'When label and supplier information cannot confirm safety, the server must never guess; the correct move is to flag the uncertainty and offer an item the kitchen can confirm as safe.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The ServSafe Allergens exam has no physical test center: the course and exam are completed online through ServSafe.com after purchasing access, at any time, on any device with an internet connection. There is no proctor, no appointment, and no deadline; candidates work through the four modules and then take the 40-question exam. The exam is timed by the platform with a generous allowance, and candidates who do not reach 75 percent can review and retake. After passing, the certificate is issued electronically (PDF download and a wallet card option), and the completion record is stored in the candidate\u2019s ServSafe account, which employers can verify. Candidates should confirm with their employer whether the ServSafe Allergens certificate is the accepted credential and note the certificate\u2019s validity window, commonly two to three years, and set a renewal reminder. Afterwards, the natural next step for career growth is the ServSafe Food Protection Manager certification, which covers allergens within the broader food-safety scope and is the credential health departments recognize for managers.',
    bring: ['ServSafe account and course access', 'Stable internet connection', '90-120 minutes of uninterrupted time', 'Employer requirements for the certificate'],
    leave: ['Proctoring or appointment - there is none', 'Special software beyond a browser', 'Deadlines - the course is self-paced'],
    timeline: [
      { time: 'Step 1', detail: 'Purchase and enroll in the official online course.' },
      { time: 'Step 2', detail: 'Work through the four modules (45-60 minutes).' },
      { time: 'Step 3', detail: 'Take the 40-question exam; 75% (30/40) passes.' },
      { time: 'Step 4', detail: 'Retake if needed; download the certificate.' },
      { time: 'Step 5', detail: 'Confirm the validity window and employer requirements.' }
    ],
    rules: [
      'The course and exam are fully online and unproctored.',
      'The passing score is 75% on 40 questions.',
      'The certificate is valid per employer/jurisdiction policy, commonly 2-3 years.',
      'The Food Protection Manager program covers allergens at management scope.'
    ],
    afterwards: 'Download the certificate and store it with the employer; set a renewal reminder, and consider the Food Protection Manager certification for management roles.'
  }
};

export default data;
