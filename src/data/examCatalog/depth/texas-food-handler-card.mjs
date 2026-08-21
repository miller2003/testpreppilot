const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Food safety & hospitality certifications desk',
    bio: 'Texas food-handler facts in this guide come from the Texas DSHS food-handler program and the Texas Food Establishment Rules, including the approved-provider requirement, the 70 percent passing standard, the two-year validity and the employer-recordkeeping rule; no pass-rate statistics are published, which we state plainly. Salary figures come from the BLS occupational series named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the Texas DSHS food-handler training requirements, the approved-provider list, exam formats and the two-year validity against DSHS and approved-provider pages; verified BLS food-service wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The Texas Food Handler Card is an entry-level employment gate: fast food and counter workers earned a $27,010 median in May 2024 (BLS)',
    summary: 'The Texas Food Handler Card is an entry-level training credential that proves a foodservice employee understands basic food safety - proper handwashing, safe food temperatures, avoiding cross-contamination, and personal hygiene - and it is required by the Texas Food Establishment Rules for most foodservice employees in the state. It is not a job license for a specific occupation, so there is no single BLS SOC code attached to it; what it does is satisfy the food-safety training requirement that the Texas Department of State Health Services (DSHS) imposes on front-line foodservice staff. The salary story belongs to the occupations that require it. BLS reported that fast food and counter workers (SOC 35-3023), the largest foodservice occupation, earned a median of $27,010 in May 2024, while waiters and waitresses (35-3031) earned about $28,080 and restaurant cooks (35-2014) about $32,390; these are wage-and-salary figures that include tip-based roles where cash compensation is understated. The structural point for workers is that the card is cheap (online courses typically cost $7-$15), quick (about two hours), and valid for two years, so it functions as a hireability signal at the entry level, and many Texas employers cover the cost as part of onboarding, although Texas has no statute requiring employer payment the way California does. The upgrade path matters more than the card itself: the Food Protection Manager certification, which Texas recognizes for managers, opens the food-service-manager occupation, and food service managers (35-2021) earned a $65,310 median in May 2024 per BLS. Texas state law preempts local food-handler requirements, so a DSHS-approved card is valid statewide. BLS classifies workers by job duty, not certificates, so no credential maps to a specific wage; the card removes a hiring barrier, and the wage follows the job.',
    rows: [
      { label: 'Fast food and counter workers median, May 2024', value: '$27,010', note: 'BLS OEWS, SOC 35-3023' },
      { label: 'Waiters and waitresses median, May 2024', value: '~$28,080', note: 'BLS OEWS, SOC 35-3031 (tips understated)' },
      { label: 'Cooks, restaurant median, May 2024', value: '~$32,390', note: 'BLS OEWS, SOC 35-2014' },
      { label: 'Food service managers median, May 2024', value: '$65,310', note: 'BLS OEWS, SOC 35-2021' }
    ],
    growth: 'Foodservice employment is projected to grow about 6 percent from 2024 to 2034, with large replacement demand in entry roles.',
    source: { label: 'BLS Occupational Outlook Handbook - Food and Beverage Serving and Related Workers', url: 'https://www.bls.gov/ooh/food-preparation-and-serving/food-and-beverage-serving-and-related-workers.htm' }
  },
  passRate: {
    headline: 'Texas DSHS-approved courses typically require a 70 percent passing score on the final exam, and no pass-rate statistics are published for the state program.',
    summary: 'The direct answer on pass rates is that the Texas Department of State Health Services does not publish cohort pass-rate statistics for food-handler training, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the regulatory structure: under the Texas Food Establishment Rules, food employees must complete a food-handler training program from a DSHS-approved provider, and the exam format and passing score are set by each approved provider within the DSHS program requirements, with 70 percent the passing standard used across most approved courses and exam lengths typically running 25 to 40-plus multiple-choice questions depending on the provider. The training covers foodborne illness, personal hygiene, temperature control including the danger zone of 41-135 degrees F, cross-contamination prevention, cleaning and sanitizing, and safe food storage, and it is delivered online or in person with the certificate issued immediately upon passing. The certificate is valid for two years from the date of completion (some providers also sell a three-year option with an exam requirement), and renewal requires completing a new approved course because there is no test-out or refresher-only renewal path. The certificate must be kept on file at the food facility and is available for inspection, and the requirement applies within the first 30 days of employment per most approved providers and DSHS guidance, with Certified Food Protection Managers exempt. The practical read on difficulty: the content is a finite set of food-safety rules, the passing bar is typically 70 percent, and candidates who complete the course and review the missed items pass reliably, so completion is the realistic bar and the card is a compliance credential. Because no pass rate is published, the honest summary is that the structure is public, the cut is 70 percent at most approved providers, and candidates should study the course materials to that standard and verify the current DSHS rule on the training window.',
    source: { label: 'Texas DSHS - Food Handler Training Program', url: 'https://www.dshs.texas.gov/food-handler-training' },
    caveat: 'Texas DSHS publishes no pass rates for food-handler training. Approved courses typically require 70 percent on a 25-40+ question final exam, and certificates are valid for two years.'
  },
  studyPlan: {
    summary: 'The Texas Food Handler Card course is short and self-paced, so a study plan is measured in hours rather than weeks: a realistic plan is 1.5 to 2.5 hours in one or two sessions, because approved online courses typically run about two hours and end with a final exam of roughly 25 to 40 questions at a 70 percent passing bar. The course content is organized into core food-safety topics: foodborne illness and common pathogens, personal hygiene and handwashing, the temperature danger zone (41 degrees F to 135 degrees F) and proper hot and cold holding, cooking and reheating temperatures, cross-contamination and separation of foods, cleaning and sanitizing, and safe food storage with proper shelving and rotation. A realistic plan: session one (45-75 minutes) works through the course modules with the course materials open and takes notes on the temperature charts and the cross-contamination rules; session two (30-45 minutes) takes the final exam and reviews any missed items; if a retake is needed, session three (20-30 minutes) reviews the specific topics behind the missed questions and retakes, since most approved providers allow retakes. Because the exam is a training-certification assessment drawn from the course content, the failure mode is not difficulty but rushing: candidates who skip the temperature charts and the cross-contamination section tend to miss the largest cluster of items. The single most important thing to memorize is the temperature danger zone and the key cooking temperatures (poultry 165 degrees F, ground meats 155 degrees F, whole meats 145 degrees F, and hot holding at 135 degrees F or above), because these appear repeatedly across items. The certificate is valid for two years and must be kept on file at the workplace, so candidates should set a renewal reminder and note that Texas requires a new approved course at renewal rather than a refresher-only option. For candidates who plan to move up, the Food Protection Manager certification is the separate credential that Texas recognizes for manager positions.',
    totalHours: '1.5-2.5 hours (one to two sessions)',
    weeks: [
      { label: 'Session 1', focus: 'Course modules', tasks: ['Work through the DSHS-approved course modules', 'Note the temperature charts and cross-contamination rules'], hours: 1.25 },
      { label: 'Session 2', focus: 'Exam', tasks: ['Take the final exam (25-40+ questions)', 'Review missed items against the course materials'], hours: 0.75 },
      { label: 'Session 3 (if needed)', focus: 'Retake', tasks: ['Review the missed topics', 'Retake to 70% or better'], hours: 0.5 }
    ],
    variants: [
      { label: 'Bilingual delivery', detail: 'Many approved providers offer the course in English and Spanish; take it in the language you read most fluently.' },
      { label: 'Manager upgrade', detail: 'The Food Protection Manager certification is the separate credential Texas recognizes for managers.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective strategies for the Texas Food Handler Card exam are about memorizing a small set of rules and applying them consistently. Strategy one: memorize the temperature danger zone (41 degrees F to 135 degrees F) and the four critical cooking temperatures (165 degrees F for poultry, 155 degrees F for ground meats, 145 degrees F for whole muscle meats and fish, 135 degrees F for hot holding) because temperature items are the largest and most predictable cluster on the exam. Strategy two: understand cross-contamination in practice - separate cutting boards for raw and ready-to-eat foods, store raw meat below ready-to-eat food in the refrigerator, wash hands after touching raw meat - because scenario items test the application, not just the definition. Strategy three: master the handwashing rule (wash for at least 20 seconds with warm water and soap, before handling food, after using the restroom, after touching raw foods) since hygiene items recur across the exam. Strategy four: learn the difference between cleaning (removing soil) and sanitizing (reducing pathogens), a distinction the exam tests directly. Strategy five: cover the storage rules, including the 2-hour rule that becomes a 1-hour rule when ambient temperatures exceed 90 degrees F, a Texas-relevant point because summer heat moves food into the danger zone quickly. Strategy six: take the exam soon after finishing the course while the rules are fresh; the content is small enough that same-day testing is the efficient path, and retakes are available at most approved providers if the first attempt falls short. Finally, verify the provider is on the current DSHS-approved list before buying, because only approved courses satisfy the Texas requirement.',
    items: [
      { title: 'Memorize the temperature rules', detail: 'Danger zone 41-135 degrees F and the four cooking temperatures are the exam\u2019s core.' },
      { title: 'Apply cross-contamination rules', detail: 'Scenario items test separation, storage order and handwashing.' },
      { title: 'Know cleaning vs sanitizing', detail: 'The exam distinguishes removing soil from reducing pathogens.' },
      { title: 'Cover the storage and heat rules', detail: 'The 2-hour rule becomes 1 hour above 90 degrees F, a Texas-relevant point.' },
      { title: 'Verify the provider is DSHS-approved', detail: 'Only approved courses satisfy the Texas requirement.' }
    ]
  },
  resourceComparison: {
    summary: 'The Texas Food Handler Card resource market is simple because the state defines the path: the card must come from a DSHS-approved training provider, and the provider\u2019s course includes the training, the final exam and the certificate, typically priced between $7 and $15 for online delivery. The official DSHS list of approved programs is the authority candidates must use to verify a provider, because a course from any other source does not satisfy the Texas requirement even if it covers the same content; DSHS-approved online providers include the major national food-safety training companies, and in-person classes run $20-$40. Some providers offer the certificate in two validity options - a two-year certificate without an exam requirement and a three-year certificate that requires passing the exam - so candidates should read the provider\u2019s terms and match the option to their employer\u2019s expectation. The printed study guides some providers sell ($10-$20) are optional companions to the online course and are not required. Third-party quiz sites and free practice tests ($0-$10) exist and can help rehearse the question style, but they cannot issue the certificate and some carry outdated temperature values that conflict with the current FDA food code, so candidates should verify disputed answers against the course materials. The honest ranking: a DSHS-approved provider\u2019s course, optionally the provider\u2019s printed guide, and free practice quizzes - nothing else is needed, and many Texas employers cover the cost as part of onboarding. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission; Certified Food Protection Managers are exempt from the food-handler requirement.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DSHS-approved provider course (official path)', values: ['$7-15', 'Online or in-person', 'The required training, exam and certificate'], note: '' },
      { label: 'In-person classes', values: ['$20-40', 'Classroom', 'Candidates who prefer classroom delivery'], note: '' },
      { label: 'Provider printed study guide', values: ['$10-20', 'Print', 'Optional companion to the course'], note: '' },
      { label: 'Free practice quizzes', values: ['Free', 'Online', 'Question-style rehearsal; cannot issue the certificate'], note: '' },
      { label: 'Food Protection Manager certification', values: ['~$100-150', 'Proctored exam', 'The manager-level credential Texas recognizes'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Only DSHS-approved providers can satisfy the Texas food-handler requirement; certificates are valid for two years.'
  },
  commonMistakes: {
    summary: 'The most common mistakes on the Texas Food Handler Card exam are about memorizing the wrong details or misapplying the rules. Mistake one: taking a course from a provider that is not on the DSHS-approved list, which produces a certificate that does not satisfy the Texas requirement and wastes the money; candidates should verify approval before purchasing. Mistake two: confusing cleaning with sanitizing; the exam tests the distinction directly, and many candidates answer clean items as if cleaning removed pathogens. Mistake three: misremembering the hot-holding temperature (135 degrees F) or the cold-holding temperature (41 degrees F), which are the two most-tested numbers; getting the danger zone wrong cascades into several items. Mistake four: treating cross-contamination as a definition instead of a scenario; the exam presents situations (raw chicken stored above ready-to-eat food, one cutting board for everything) and tests whether the candidate can spot the risk. Mistake five: ignoring the heat rule, because in Texas summer temperatures routinely exceed 90 degrees F and the 2-hour rule becomes a 1-hour rule, a state-relevant scenario the exam can test. Mistake six: assuming the certificate never expires; the certificate is valid for two years, renewal requires a new approved course, and an expired certificate fails the same compliance check the original satisfied, so candidates should set a renewal reminder. Finally, candidates who skip checking the provider approval status or who assume a city-specific course is required waste money, because state law preempts local requirements and a DSHS-approved card is valid statewide. Candidates who verify the provider on the DSHS list, complete the course rather than guessing at the exam, and set a two-year renewal reminder avoid every one of these traps.',
    items: [
      { mistake: 'Using a non-approved provider', fix: 'Confirm the provider is on the DSHS approved list before buying; only approved courses satisfy the requirement.' },
      { mistake: 'Confusing clean and sanitize', fix: 'Cleaning removes soil; sanitizing reduces pathogens.' },
      { mistake: 'Misremembering key temperatures', fix: 'Hot hold 135 degrees F, cold hold 41 degrees F, danger zone 41-135 degrees F.' },
      { mistake: 'Memorizing instead of applying', fix: 'Practice the scenario items on cross-contamination and heat exposure.' },
      { mistake: 'Assuming the certificate never expires', fix: 'Track the two-year validity window; renewal requires a new approved course.' }
    ]
  },
  questionTypes: {
    summary: 'The Texas Food Handler Card final exam typically consists of 25 to 40-plus multiple-choice questions at a 70 percent passing bar, depending on the DSHS-approved provider, delivered at the end of an online or in-person course of about two hours; most providers display results immediately and allow retakes. Items are drawn from the course\u2019s core topics: foodborne illness and common pathogens, personal hygiene and handwashing, temperature control (the danger zone of 41-135 degrees F and the cooking and holding temperatures), cross-contamination prevention, cleaning and sanitizing, and safe food storage with proper rotation. Most items are either direct knowledge questions (what temperature) or scenario questions (what should the employee do next), and the temperature and cross-contamination clusters carry the largest share, with the 2-hour rule and its 90-degree F adjustment relevant in Texas. The exam is delivered through the provider\u2019s platform at the end of the course, results are displayed immediately, and most providers allow retakes at no extra cost, which makes the assessment a training check rather than a competitive gate. The passing bar of 70 percent means a candidate can miss up to 30 percent of the items and still pass, but the recurring scenario items all hinge on the temperature values and the cleaning-versus-sanitizing distinction, so those specifics must be learned rather than guessed. The question count varies by provider - roughly 25 questions at one end and 40-plus at the other - so candidates should confirm the exact format with the provider they chose and study the course materials to that length. Samples below are editor-written illustrations of the published course content, not live exam items.',
    types: [
      { name: 'Temperature control', share: 'Largest cluster', detail: 'Danger zone, cooking, hot/cold holding, cooling.' },
      { name: 'Personal hygiene', share: 'Core cluster', detail: 'Handwashing, illness exclusion, glove use.' },
      { name: 'Cross-contamination', share: 'Core cluster', detail: 'Separation, storage order, cleaning between tasks.' },
      { name: 'Cleaning and sanitizing', share: 'Core cluster', detail: 'Clean vs sanitize, sanitizer use, cloths.' },
      { name: 'Storage and rotation', share: 'Core cluster', detail: 'FIFO rotation, date marking, shelving at least 6 inches off the floor.' }
    ],
    samples: [
      {
        prompt: 'A food handler has been slicing raw chicken on a cutting board. Before using the same board to slice lettuce, the handler must do what first?',
        options: ['A. Wipe the board with a damp cloth', 'B. Wash, rinse and sanitize the board', 'C. Turn the board over', 'D. Spray the board with water'],
        answer: 'B',
        explanation: 'After raw meat contact, a cutting board must be washed, rinsed and sanitized before use with ready-to-eat food to prevent cross-contamination. Wiping or turning the board does not remove the contamination risk.'
      },
      {
        prompt: 'What is the temperature danger zone within which food must not be held for more than 4 hours cumulatively?',
        options: ['A. 32 degrees F to 100 degrees F', 'B. 41 degrees F to 135 degrees F', 'C. 50 degrees F to 150 degrees F', 'D. 60 degrees F to 140 degrees F'],
        answer: 'B',
        explanation: 'The FDA-based food code danger zone is 41 degrees F to 135 degrees F, the range in which pathogens grow rapidly. This is the single most-tested number on the exam.'
      },
      {
        prompt: 'At an outdoor Texas event with ambient temperatures above 90 degrees F, how long may perishable food sit out before it must be discarded?',
        options: ['A. 2 hours', 'B. 1 hour', 'C. 3 hours', 'D. 4 hours'],
        answer: 'B',
        explanation: 'The 2-hour rule becomes a 1-hour rule when ambient temperatures exceed 90 degrees F, because food moves into the danger zone more quickly in heat. This is a Texas-relevant scenario because summer events routinely exceed 90 degrees F.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published course content, not live exam items.'
  },
  examDay: {
    summary: 'The Texas Food Handler Card exam has no physical test center in the typical online format: the course and exam are completed through a DSHS-approved provider, online at any time on any device with an internet connection, with no proctor, no appointment and no deadline beyond the provider\u2019s enrollment window. Candidates enroll with an approved provider, complete the training modules (about two hours), and then take the final exam of roughly 25 to 40 questions, needing 70 percent to pass; results appear immediately, and most providers allow retakes at no extra cost. After passing, the certificate is issued immediately as a downloadable PDF and must be kept on file at the food facility, available for inspection; the certificate is valid for two years from the date of completion. Candidates should confirm their employer accepts the provider they chose (the DSHS-approved card is valid statewide because state law preempts local requirements), confirm the provider is on the current DSHS list, and ask whether the employer covers the cost, because many Texas employers pay for training as part of onboarding. The requirement applies within the first 30 days of employment per most approved providers and DSHS guidance, so new hires should complete the course promptly rather than waiting. Afterwards, the natural next step for career growth is the Food Protection Manager certification, the separate, proctored credential that Texas recognizes for manager positions; it opens the food-service-manager occupation and the higher wage range that occupation carries. Candidates should also remember that the certificate belongs to the employee and moves with them between Texas employers while valid, which makes it a portable compliance credential rather than a per-employer document.',
    bring: ['A DSHS-approved provider\u2019s course purchase', 'Stable internet connection (for online delivery)', 'About two hours of uninterrupted time', 'Employer requirements and cost confirmation'],
    leave: ['Proctoring or an appointment - there is none in the typical online format', 'Special software beyond a browser', 'Deadlines - the course is self-paced within the enrollment window'],
    timeline: [
      { time: 'Step 1', detail: 'Confirm the provider is on the DSHS approved list and enroll in the Texas course.' },
      { time: 'Step 2', detail: 'Work through the training modules (about 1.5-2 hours).' },
      { time: 'Step 3', detail: 'Take the final exam (25-40+ questions); 70% passes.' },
      { time: 'Step 4', detail: 'Retake if needed; download the certificate valid for two years.' },
      { time: 'Step 5', detail: 'Give the employer a copy for the file; plan the manager-certification upgrade if relevant.' }
    ],
    rules: [
      'The course and exam must come from a DSHS-approved provider; online delivery requires no proctor.',
      'The final exam typically requires a 70 percent passing score.',
      'The certificate is valid for two years and must be kept on file at the food facility.',
      'The requirement applies within the first 30 days of employment per most approved providers and DSHS guidance.',
      'Certified Food Protection Managers are exempt from the food-handler requirement.'
    ],
    afterwards: 'Provide the employer a copy of the certificate for the compliance file; set a renewal reminder for the two-year validity window, and consider the Food Protection Manager certification for manager roles.'
  }
};

export default data;
