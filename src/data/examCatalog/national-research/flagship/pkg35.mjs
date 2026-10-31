// Flagship rewrite - pkg35: CDL knowledge tests (General, Air Brakes, Combination, Hazmat).
// Sources read 2026-10-20:
//   49 CFR 383.111 (knowledge areas), 383.121 (hazmat knowledge), 383.135 (80 percent standard,
//   L restriction, Group A rule), 383.25 (CLP validity, 14-day wait), 383.71 / 383.73 (ELDT scope,
//   hazmat renewal retest), 383.133 (retake test version, test languages), 383.153 (endorsement and
//   restriction codes), 49 CFR 1572.5 (TSA threat assessment); TSA HAZMAT Endorsement page (fee);
//   Washington State DOL CDL knowledge test page (example state question counts).
// Not published nationally and therefore NOT stated as national facts: question counts, time limits,
// fees and retake waiting periods (all set by the issuing state), and pass rates.

const BODY = 'State Driver Licensing Agencies (AAMVA model curriculum)';
const CFR = 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-383';
const WA = 'https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/cdl-knowledge-test';
const TSA = 'https://www.tsa.gov/for-industry/hazmat-endorsement';

export const programs = [
  {
    id: 'state-driver-licensing-agencies-aamva-model-curriculum-',
    body: BODY,
    bodyUrl: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license',
    about: 'There is no single CDL testing agency: each state driver licensing agency (a DMV, DPS, DOL or similar office) gives the commercial knowledge tests, and every state builds its tests from the federal minimum standards in 49 CFR Part 383 and the AAMVA model CDL driver manual. FMCSA fixes what must be tested and the 80 percent passing line; the state sets the question count, fees, language options and retake waits. A pass earns a Commercial Learner’s Permit (CLP), and a skills test later converts it to a CDL.',
    registrationSteps: [
      {
        title: 'Confirm age, residency and the class you need',
        description: 'You must be at least 18 to hold a CLP under 49 CFR 383.25, and you apply in the state where you are domiciled. Choose Class A (combination vehicles), Class B (straight trucks and buses) or Class C, and list the endorsements you want, because that decides which knowledge tests you take.',
        subSteps: ['Hold a valid regular driver license from the same state', 'Decide on Class A or Class B', 'List the endorsements you plan to add: H, N, P, S or T'],
        duration: '',
        note: 'Intrastate-only CDLs can carry a K restriction; interstate drivers need the full federal standard.'
      },
      {
        title: 'Get the medical certificate and gather identity documents',
        description: 'Most drivers need a DOT medical examiner’s certificate on file with the state, plus proof of identity, lawful presence and residency. Bring original documents; the state will not accept photocopies. Federal rules also require you to list every state where you held a license in the previous 10 years.',
        subSteps: ['Book a DOT medical exam with a certified medical examiner', 'Collect proof of identity, lawful presence and state residency', 'Write down your 10-year license history'],
        duration: '',
        note: ''
      },
      {
        title: 'Study the CDL manual published by your own state',
        description: 'Each state publishes a CDL driver manual based on the AAMVA model, and its knowledge tests are written from that manual. Download the current edition from your state agency and use its official practice questions where offered. The federal knowledge areas are listed in 49 CFR 383.111.',
        subSteps: ['Download the current state CDL manual', 'Read the General Knowledge sections first', 'Add Air Brakes, Combination Vehicles or the endorsement sections you need'],
        duration: '',
        note: 'Entry-Level Driver Training (ELDT) is not required before the CLP knowledge tests; it is required before the Class A or B skills test and before the first hazmat knowledge test.'
      },
      {
        title: 'Take the knowledge tests at a state testing location',
        description: 'Visit a state licensing office or authorized testing site, pay the state’s testing fee and sit the tests. The General Knowledge test is the base, and Air Brakes, Combination Vehicles and endorsement tests are added as the vehicle requires. Each test is scored separately against the 80 percent standard in 49 CFR 383.135.',
        subSteps: ['Make an appointment if your state requires one', 'Bring the identity and medical documents', 'Ask which languages the state tests are offered in'],
        duration: 'One visit when all needed tests are taken together',
        note: 'On a retake the state must give a different version of the test.'
      },
      {
        title: 'Receive the CLP and complete training and skills testing',
        description: 'A passing result produces a CLP. A CLP is valid for no more than one year from first issue, and you cannot take the skills test in the first 14 days. Class A and B applicants complete ELDT theory and behind-the-wheel training with a provider on the FMCSA Training Provider Registry before the skills test.',
        subSteps: ['Wait at least 14 days after first CLP issue', 'Complete ELDT with a registered provider', 'Pass the pre-trip inspection, basic vehicle control and on-road skills tests'],
        duration: 'CLP valid up to 1 year',
        note: 'If the CLP lapses before the skills test, the knowledge tests must be repeated.'
      },
      {
        title: 'Add the hazmat endorsement if you need it',
        description: 'The H endorsement needs ELDT hazmat theory before the first hazmat knowledge test, a pass on the hazmat knowledge test, and a TSA security threat assessment under 49 CFR Part 1572. Start the TSA application early, because the state cannot issue the endorsement until TSA clears you.',
        subSteps: ['Complete hazmat ELDT with a registered provider', 'Enroll with TSA and be fingerprinted', 'Pass the hazmat knowledge test at the state agency'],
        duration: 'TSA review time varies; start before you test',
        note: ''
      }
    ],
    proctoring: 'Knowledge tests are administered by the state licensing agency or a state-authorized third-party tester, usually on a computer and sometimes on paper or orally. Under 49 CFR 383.133 a knowledge test may be given in a foreign language only if no interpreter is used. Identity and residency documents are checked before testing.',
    retakePolicy: 'Federal rules set no retake waiting period or attempt limit; the state decides both. Under 49 CFR 383.133 the state must give a different version of the test when you retake one you failed. Many states charge the testing fee again for each attempt. Check your state’s waiting period and fee before you leave the office.',
    recertification: 'A CLP is valid for no more than one year from first issue under 49 CFR 383.25(c); if it expires before you pass the skills test you must retake the knowledge tests. A CDL renews on the state cycle, and a hazmat endorsement requires passing the 49 CFR 383.121 knowledge test again at each CDL renewal under 49 CFR 383.71(d)(3). The TSA threat assessment is valid for five years.',
    scoreReporting: 'The standard is 80 percent correct on each test (49 CFR 383.135), reported by the state, usually the same day at the testing location. There is no scaled score. A pass is recorded on your CLP, and a failed air brakes portion adds an L restriction, while a failed combination portion means no Group A permit is issued.',
    refundPolicy: 'Refund and rescheduling rules are set by each state agency, and most states treat the testing fee as non-refundable once a test is attempted. Federal rules do not address refunds. Ask your state agency whether a fee covers one attempt or a set of tests before you pay.',
    providersNote: 'The state driver manual and the state’s official practice questions are the authoritative study sources, and they are free. For ELDT you must use a provider listed on the FMCSA Training Provider Registry. Treat any app that quotes a national CDL pass rate with caution, because neither FMCSA nor the states publish one.',
    comparison: {
      title: 'CDL knowledge tests compared',
      columns: ['Test', 'Federal requirement', 'What failing it does', 'Fee'],
      rows: [
        { label: 'General Knowledge', values: ['80 percent correct; required of every CLP applicant', 'No CLP is issued', 'Set by the state'] },
        { label: 'Air Brakes', values: ['80 percent correct; required for vehicles with air brakes', 'CLP or CDL carries an L restriction', 'Set by the state'] },
        { label: 'Combination Vehicles', values: ['80 percent correct; required for Class A', 'No Group A CLP or CDL can be issued', 'Set by the state'] },
        { label: 'Hazmat (H endorsement)', values: ['80 percent correct plus TSA security threat assessment and hazmat ELDT', 'No H endorsement is issued', 'State test fee plus TSA fee ($85.25 per TSA, as of October 2026)'] }
      ]
    },
    orgFaqs: [
      {
        q: 'Who gives the CDL knowledge tests?',
        a: 'Your state driver licensing agency gives the CDL knowledge tests, not FMCSA or AAMVA. Federal rules in 49 CFR Part 383 set the minimum content and the 80 percent passing score, and the AAMVA model manual is the template most states follow. The state decides the question count, fees, languages and retake waits.'
      },
      {
        q: 'Do I need ELDT before the CDL knowledge tests?',
        a: 'No, not for the CLP knowledge tests. Entry-Level Driver Training from a provider on the FMCSA Training Provider Registry is required before the first Class A or B skills test, before the first passenger or school bus skills test, and before the first hazmat knowledge test, under 49 CFR 383.71.'
      },
      {
        q: 'Are CDL knowledge test questions the same in every state?',
        a: 'The required topics are federal, but the questions and their number are not identical. Each state writes its tests from its own manual. For example, Washington lists 50 questions for General Knowledge, 25 for Air Brakes, 20 for Combination Vehicles and 30 for Hazardous Materials, while other states use different counts.'
      }
    ],
    sourceUrl: CFR,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'cdl-general-knowledge-test',
    body: BODY,
    tagline: 'The first CDL test: the 80 percent knowledge exam every Commercial Learner’s Permit applicant must pass.',
    description: 'The CDL General Knowledge Test requires at least 80 percent correct under 49 CFR 383.135, and every CLP applicant must pass it first. It is the base test for Class A, B and C commercial licenses and covers the 20 general knowledge areas in 49 CFR 383.111(a), from driver rules and inspections to speed management, hazard perception and cargo securement. Your state sets the question count and fee. Passing it earns a Commercial Learner’s Permit valid up to one year, which you need before the skills tests.',
    quickAnswer: {
      summary: 'The CDL General Knowledge Test is a state-run multiple-choice exam on the federal knowledge areas in 49 CFR 383.111(a). You must answer at least 80 percent correctly. Passing it, with proof of age, identity and medical certification, gets you a Commercial Learner’s Permit valid up to one year, and the 14-day skills-test wait then starts.',
      advantages: [
        'It is the one test every commercial permit applicant takes, whatever the vehicle class.',
        'The passing line is the same in every state: 80 percent correct under 49 CFR 383.135.',
        'The content is public in the federal rule and in your state’s free CDL manual.',
        'Passing opens the CLP, which starts the mandatory 14-day wait before the skills test.'
      ]
    },
    roadmap: [
      'Confirm you are 18 or older and decide on Class A, B or C',
      'Download your state CDL manual and study the General Knowledge sections',
      'Pay your state testing fee and sit the knowledge test',
      'Collect the CLP and add Air Brakes, Combination or endorsement tests if needed',
      'Complete ELDT, wait 14 days and take the skills tests'
    ],
    prerequisites: 'Be at least 18 years old, hold a valid regular driver license from your state of domicile, and carry the identity, lawful-presence and residency documents your state requires. Most drivers also need a DOT medical examiner’s certificate on file.',
    eligibility: 'Under 49 CFR 383.25 a CLP applicant must be 18 or older and hold a driver license from the issuing state. Entry-Level Driver Training is not required before this knowledge test; it is required before the Class A or B skills test.',
    examMeta: {
      questions: 'Set by the issuing state; no federal count. Washington, for example, lists 50 questions with 40 needed to pass.',
      time: 'No federal time limit; the state sets any limit and tells you at check-in.',
      pass: '80 percent of questions correct (49 CFR 383.135); not scaled',
      fee: 'Set by the state; there is no federal fee. A retake usually costs the state fee again.',
      format: 'Multiple choice, usually computer-based at a state licensing office; paper and oral versions exist.',
      admin: 'State driver licensing agency (federal standard: FMCSA, 49 CFR Part 383)'
    },
    topics: [
      { name: 'Driver-related rules and safe operation', weight: '', note: 'Parts 391-397 rules on inspection and maintenance, fatigue, vision, hearing, health, alcohol and drugs.' },
      { name: 'Basic control, shifting and backing', weight: '', note: 'Starting, stopping, shifting patterns, and straight-line and curved backing.' },
      { name: 'Visual search, communication and speed management', weight: '', note: 'Mirrors and scanning, signals and horn use, and how speed affects stopping distance.' },
      { name: 'Space management and hazard perception', weight: '', note: 'Space ahead, behind and to the sides, plus road features and clues from other road users.' },
      { name: 'Night operation and extreme driving conditions', weight: '', note: 'Night driving, bad weather, hot weather and mountain driving.' },
      { name: 'Emergency maneuvers and skids', weight: '', note: 'Evasive steering, emergency stops, blowouts, brake failure, and skid causes and recovery.' },
      { name: 'Cargo and vehicle control', weight: '', note: 'Securement, weight distribution and the driver’s responsibilities for cargo.' },
      { name: 'Vehicle inspections', weight: '', note: 'Pre-trip, en route and post-trip inspection and reporting defects.' }
    ],
    examEssentials: [
      ['Passing standard', '80 percent correct, per 49 CFR 383.135(a)(1); no scaling or curve'],
      ['Content', '20 general knowledge areas listed in 49 CFR 383.111(a), tested from your state manual'],
      ['CLP validity', 'No more than 1 year from first issue (49 CFR 383.25(c))'],
      ['Skills-test wait', 'At least 14 days after first CLP issue before the CDL skills test'],
      ['Retake version', 'The state must give a different test version on a retake (49 CFR 383.133)'],
      ['ELDT', 'Not required for this test; required before the first Class A or B skills test (49 CFR 383.71)'],
      ['Minimum age', '18 to hold a CLP (49 CFR 383.25)']
    ],
    timeline: [
      { stage: 'Study the state CDL manual', duration: 'Self-paced; the study plan on this page budgets 15-30 hours' },
      { stage: 'Knowledge test visit', duration: 'One office visit; results usually the same day' },
      { stage: 'Mandatory wait before the skills test', duration: '14 days from first CLP issue' },
      { stage: 'CLP validity window', duration: 'Up to 1 year from first issue' }
    ],
    costBreakdown: {
      items: [
        { item: 'State knowledge test fee', fee: 'Set by each state; no federal fee' },
        { item: 'CLP issuance fee', fee: 'Set by each state' },
        { item: 'DOT medical examination', fee: 'Set by the medical examiner' },
        { item: 'Study material (state CDL manual and practice questions)', fee: 'Free from the state agency' }
      ],
      total: 'No national total: state test and permit fees are set by each state, and the manual is free',
      footnote: 'Fees are state-set. Check your state agency’s fee schedule for the exact amounts as of October 2026.'
    },
    difficulty: 'Moderate',
    audience: 'New commercial drivers, drivers upgrading from Class C, and anyone who needs a CLP before CDL training and skills testing.',
    time: 'Self-paced study, one testing visit, then a 14-day wait before the skills test',
    cost: 'State-set test and permit fees; study manual is free',
    faqs: [
      { q: 'What is a passing score on the CDL general knowledge test?', a: 'A passing score is 80 percent correct, set by 49 CFR 383.135(a)(1) and applied in every state. There is no scaling or curve. On a 50-question test that means 40 correct answers. The state decides how many questions you get, so check your state manual for the exact number.' },
      { q: 'How many questions are on the CDL general knowledge test?', a: 'The number is set by each state; federal rules do not fix it. Washington State, for instance, lists 50 questions with 40 needed to pass. Other states may use different counts, so confirm the figure in your own state CDL manual or on the licensing agency website before you test.' },
      { q: 'Is the CDL general knowledge test hard?', a: 'The test is moderate for prepared candidates, because it is written from a free state manual and graded against a fixed 80 percent line. Failures usually come from studying another state’s material or skipping cargo and hazard sections. No national pass rate is published, so any percentage quoted online is unofficial.' },
      { q: 'Do I need ELDT before the CDL general knowledge test?', a: 'No. Entry-Level Driver Training is not required to take the CLP knowledge tests. Under 49 CFR 383.71 it is required before the first Class A or B skills test, before a passenger or school bus skills test, and before the first hazmat knowledge test. Use a provider listed on the FMCSA Training Provider Registry.' },
      { q: 'How long is a CDL learner permit valid?', a: 'A Commercial Learner’s Permit is valid for no more than one year from its first issue date, under 49 CFR 383.25(c). A shorter permit can be renewed, but total validity still cannot pass one year from the first issue. If it lapses before you pass the skills test, you must retake the knowledge tests.' },
      { q: 'How long must I wait to take the CDL skills test after the permit?', a: 'You must wait at least 14 days after the CLP is first issued before taking the CDL skills test, according to 49 CFR 383.25(e). Use that time to finish Entry-Level Driver Training if you are a Class A or B applicant, and to practice the pre-trip inspection and basic vehicle control maneuvers.' },
      { q: 'Can I retake the CDL general knowledge test if I fail?', a: 'Yes, but the waiting period and fee are set by your state, not by federal rules. Federal rule 49 CFR 383.133 does require the state to give you a different version of the test on a retake. Ask the testing office whether you can retest the next day and whether the fee applies again.' }
    ],
    summaryPoints: [
      'Passing requires 80 percent correct under 49 CFR 383.135; there is no curve and no scaled score.',
      'The test covers the 20 general knowledge areas in 49 CFR 383.111(a), drawn from your state CDL manual.',
      'A CLP is valid up to 1 year and you must wait 14 days before the skills test.',
      'Question counts, time limits and fees are set by each state; Washington lists 50 questions with 40 to pass.',
      'ELDT is not required for this test but is required before the Class A or B skills test.'
    ],
    relatedSlugs: ['cdl-air-brakes-knowledge-test', 'cdl-combination-vehicles-knowledge-test', 'cdl-pre-trip-vehicle-inspection-test', 'cdl-hazmat-endorsement-knowledge-test'],
    sourceUrl: CFR,
    reviewed: '2026-10',
    confidence: 'medium'
  },
  {
    slug: 'cdl-air-brakes-knowledge-test',
    body: BODY,
    tagline: 'The 80 percent test that keeps the L restriction off your CLP or CDL.',
    description: 'The CDL Air Brakes Knowledge Test needs at least 80 percent correct, and failing it puts an L restriction on your CLP or CDL under 49 CFR 383.135(a)(2). Drivers of any truck or bus with air brakes take it with the General Knowledge test. It covers the seven air brake knowledge areas in 49 CFR 383.111(b), from system terminology and contaminated air to air loss tests, pressure warnings and the tractor protection valve. Washington lists 25 questions with 20 to pass; other states set their own count.',
    quickAnswer: {
      summary: 'The CDL Air Brakes Knowledge Test is a state-run exam on seven federal knowledge areas for air-braked vehicles. You need 80 percent correct. A failing score does not block the permit; instead the CLP or CDL is restricted with an L code, which bars you from driving air-braked commercial vehicles.',
      advantages: [
        'Passing removes the L restriction, so you can drive air-braked trucks and buses.',
        'Failing still lets you hold a CLP, so the cost is a restriction rather than a refusal.',
        'The content is limited to seven federal areas in 49 CFR 383.111(b).',
        'It is a shorter test than General Knowledge, and states commonly give it on the same visit.'
      ]
    },
    roadmap: [
      'Pass or schedule the General Knowledge test at your state agency',
      'Study the Air Brakes section of your state CDL manual',
      'Take the Air Brakes test at the same visit if possible',
      'Check that your CLP shows no L restriction',
      'Plan the pre-trip air brake check for the skills test'
    ],
    prerequisites: 'You need to be applying for, or already hold, a CLP or CDL in the state that issues it. The Air Brakes test is taken in addition to the General Knowledge test, not instead of it.',
    eligibility: 'Any CLP or CDL applicant who will drive a commercial vehicle with air brakes must pass this test. Entry-Level Driver Training is not required before this knowledge test, but the pre-trip air brake inspection is graded in the later skills test.',
    examMeta: {
      questions: 'Set by the issuing state; no federal count. Washington lists 25 questions with 20 needed to pass.',
      time: 'No federal time limit; the state sets any limit.',
      pass: '80 percent of questions correct (49 CFR 383.135); failing adds an L restriction',
      fee: 'Set by the state; there is no federal fee.',
      format: 'Multiple choice, usually computer-based at a state licensing office.',
      admin: 'State driver licensing agency (federal standard: FMCSA, 49 CFR 383.111(b) and 383.135)'
    },
    topics: [
      { name: 'General air brake system terminology', weight: '', note: 'Parts and names used throughout the state air brakes manual section.' },
      { name: 'Dangers of contaminated air supply', weight: '', note: 'Dirt, moisture and oil in the air supply.' },
      { name: 'Consequences of severed or disconnected air lines between the power unit and trailer', weight: '', note: 'What happens to braking when an air line separates.' },
      { name: 'Consequences of low air pressure readings', weight: '', note: 'Warning thresholds and what low pressure means for braking.' },
      { name: 'Pre-trip inspection procedures', weight: '', note: 'Fail-safe devices, system monitoring devices and low-pressure alarms.' },
      { name: 'En route and post-trip inspection procedures', weight: '', note: 'Failure-prone defects, air loss tests and pressures at which warnings and the tractor protection valve act.' },
      { name: 'General operating practices', weight: '', note: 'Braking technique, antilock brakes, emergency stops and the parking brake.' }
    ],
    examEssentials: [
      ['Passing standard', '80 percent correct per 49 CFR 383.135(a)(1)'],
      ['Failing consequence', 'CLP or CDL is issued with an L restriction (no air-braked vehicles), per 383.135(a)(2)'],
      ['Content', 'Seven knowledge areas in 49 CFR 383.111(b)'],
      ['Restriction codes', 'L = no air brake equipped CMV; Z = no full air brake equipped CMV (49 CFR 383.153)'],
      ['Retake version', 'The state must give a different version on a retake (49 CFR 383.133)'],
      ['Skills test link', 'Air brake equipment is also graded in the pre-trip portion of the skills test (49 CFR 383.113)']
    ],
    timeline: [
      { stage: 'Study the Air Brakes manual section', duration: 'Self-paced; a few focused study sessions' },
      { stage: 'Take the test with General Knowledge', duration: 'Same office visit; results usually the same day' },
      { stage: 'Retest if the L restriction was applied', duration: 'State sets the wait; ask the testing office' },
      { stage: 'Skills test air brake check', duration: 'After the 14-day CLP wait' }
    ],
    costBreakdown: {
      items: [
        { item: 'State Air Brakes knowledge test fee', fee: 'Set by each state; often bundled with other CLP tests' },
        { item: 'Retest fee after a failure', fee: 'Set by each state' },
        { item: 'Study material (state CDL manual and practice questions)', fee: 'Free from the state agency' }
      ],
      total: 'No national total: fees are set by each state, and the manual is free',
      footnote: 'Fees are state-set; confirm the amount on your state agency website as of October 2026.'
    },
    difficulty: 'Moderate',
    audience: 'Applicants who will drive air-braked trucks or buses, and drivers who were issued a CLP with an L restriction.',
    time: 'A few days of focused study, then one test visit',
    cost: 'State-set test fee; study manual is free',
    faqs: [
      { q: 'What happens if I fail the CDL air brakes test?', a: 'Your CLP or CDL is issued with an L restriction, which means you may not drive a commercial vehicle equipped with air brakes. This rule comes from 49 CFR 383.135(a)(2). You can retake the test once your state allows, and passing it lets the state remove the restriction.' },
      { q: 'How many questions are on the CDL air brakes test?', a: 'The number is set by each state. Washington lists 25 questions with 20 needed to pass, which is 80 percent. Other states may use different counts, so check your state CDL manual or licensing agency website. Federal rules fix only the 80 percent passing standard, not the question count.' },
      { q: 'What is the passing score for the CDL air brakes test?', a: 'You must answer at least 80 percent of the questions correctly, as 49 CFR 383.135(a)(1) requires for every CDL knowledge test. The score is not scaled or curved. On a 25-question test that is 20 correct answers. A lower score leaves your permit restricted with the L code.' },
      { q: 'What does the L restriction mean on a CDL?', a: 'The L restriction means you may not operate a commercial motor vehicle with air brakes. Under 49 CFR 383.153 it appears on a CLP or CDL when you fail the air brakes knowledge test or take the skills test in a vehicle without air brakes. Passing the test and the air brake skills lets the state remove it.' },
      { q: 'What does the Z restriction mean on a CDL?', a: 'The Z restriction means no full air brake equipped commercial motor vehicle, according to 49 CFR 383.153. It is different from L, which bars any vehicle with air brakes. Z is not listed on a CLP, and your state explains how it applies in its CDL manual.' },
      { q: 'Is the CDL air brakes test hard?', a: 'It is moderate for prepared candidates because it is limited to seven federal knowledge areas in 49 CFR 383.111(b). Most misses come from the pressure thresholds in your state manual and from confusing service, parking and emergency brakes. No national pass rate is published, so any figure online is unofficial.' },
      { q: 'Do I need to take the air brakes test if my truck has air brakes?', a: 'Yes. If you will drive any commercial vehicle with air brakes, you must pass this test or your CLP or CDL carries the L restriction. Take it at the same visit as General Knowledge when possible. The air brake equipment is also checked again in the pre-trip portion of the skills test.' }
    ],
    summaryPoints: [
      'Passing requires 80 percent correct; failing adds the L restriction under 49 CFR 383.135(a)(2).',
      'Seven knowledge areas are tested, listed in 49 CFR 383.111(b).',
      'Washington lists 25 questions with 20 needed to pass; other states set their own counts.',
      'L means no air-braked vehicles; Z means no full air brake equipped vehicles (49 CFR 383.153).'
    ],
    relatedSlugs: ['cdl-general-knowledge-test', 'cdl-combination-vehicles-knowledge-test', 'cdl-pre-trip-vehicle-inspection-test', 'cdl-school-bus-endorsement-knowledge-test'],
    sourceUrl: CFR,
    reviewed: '2026-10',
    confidence: 'medium'
  },
  {
    slug: 'cdl-combination-vehicles-knowledge-test',
    body: BODY,
    tagline: 'The Class A gate: without this 80 percent test, no Group A permit or license is issued.',
    description: 'The CDL Combination Vehicles Knowledge Test is required for Class A and requires 80 percent correct, because 49 CFR 383.135(a)(3) bars a Group A CLP or CDL if you fail it. It tests coupling and uncoupling, combination vehicle inspection and safe operating practices from 49 CFR 383.111(c). Tractor-trailer applicants take it with General Knowledge and usually Air Brakes. Washington lists 20 questions with 16 to pass; other states set their own count.',
    quickAnswer: {
      summary: 'The CDL Combination Vehicles Knowledge Test is the extra state exam Class A applicants must pass. It needs 80 percent correct and covers three federal areas: coupling and uncoupling, inspection and operating practices. Failing it means the state cannot issue a Group A permit, so it directly blocks tractor-trailer work.',
      advantages: [
        'Passing is the only knowledge-test route to a Group A permit for tractor-trailers.',
        'Only three federal knowledge areas are listed in 49 CFR 383.111(c).',
        'It is a short test that is typically taken on the same visit as General Knowledge.',
        'It also sets up the coupling and inspection skills graded later in the skills test.'
      ]
    },
    roadmap: [
      'Decide on Class A and confirm you need the combination test',
      'Study the Combination Vehicles section of your state manual',
      'Take it with General Knowledge, and Air Brakes if your tractor needs it',
      'Collect the Group A CLP and complete ELDT',
      'Wait 14 days and take the Class A skills tests'
    ],
    prerequisites: 'You must be applying for a Class A CLP or CDL in the state that issues it, and you must also pass the General Knowledge test. Most tractor-trailers also require the Air Brakes test.',
    eligibility: 'The Combination Vehicles test applies to applicants for Group A permits and licenses. ELDT is not required before this knowledge test, but Class A applicants must complete it before the first skills test under 49 CFR 383.71.',
    examMeta: {
      questions: 'Set by the issuing state; no federal count. Washington lists 20 questions with 16 needed to pass.',
      time: 'No federal time limit; the state sets any limit.',
      pass: '80 percent of questions correct (49 CFR 383.135); failing blocks a Group A permit',
      fee: 'Set by the state; there is no federal fee.',
      format: 'Multiple choice, usually computer-based at a state licensing office.',
      admin: 'State driver licensing agency (federal standard: FMCSA, 49 CFR 383.111(c) and 383.135)'
    },
    topics: [
      { name: 'Coupling and uncoupling', weight: '', note: 'Correct procedures for connecting a tractor to a semi-trailer and disconnecting them.' },
      { name: 'Vehicle inspection', weight: '', note: 'Goals and methods of inspecting combination vehicles, including steps unique to them.' },
      { name: 'General operating practices and procedures: safe operation of combination vehicles', weight: '', note: 'Handling, stability and other operating rules for tractor-trailers.' },
      { name: 'General operating practices and procedures: air brakes', weight: '', note: 'Air brake knowledge as it applies to combination vehicles and the trailer air lines.' }
    ],
    examEssentials: [
      ['Passing standard', '80 percent correct per 49 CFR 383.135(a)(1)'],
      ['Failing consequence', 'No Group A CLP or CDL can be issued (49 CFR 383.135(a)(3))'],
      ['Content', 'Three knowledge areas in 49 CFR 383.111(c)'],
      ['Restriction link', 'A skills test taken in a straight truck leaves an O restriction: no tractor-trailer (49 CFR 383.153)'],
      ['Retake version', 'The state must give a different version on a retake (49 CFR 383.133)'],
      ['Related endorsement', 'Doubles and triples use a separate T endorsement knowledge test']
    ],
    timeline: [
      { stage: 'Study the Combination Vehicles section', duration: 'Self-paced; a few focused study sessions' },
      { stage: 'Take the test with General Knowledge', duration: 'Same office visit; results usually the same day' },
      { stage: 'Retest after a failure', duration: 'State sets the wait; ask the testing office' },
      { stage: 'Class A skills tests', duration: 'After the 14-day CLP wait and ELDT' }
    ],
    costBreakdown: {
      items: [
        { item: 'State Combination Vehicles knowledge test fee', fee: 'Set by each state; often bundled with other CLP tests' },
        { item: 'Retest fee after a failure', fee: 'Set by each state' },
        { item: 'Study material (state CDL manual and practice questions)', fee: 'Free from the state agency' }
      ],
      total: 'No national total: fees are set by each state, and the manual is free',
      footnote: 'Fees are state-set; confirm the amount on your state agency website as of October 2026.'
    },
    difficulty: 'Moderate',
    audience: 'Class A applicants who will drive tractor-trailers, and Class B holders upgrading to Class A.',
    time: 'A few days of focused study, then one test visit',
    cost: 'State-set test fee; study manual is free',
    faqs: [
      { q: 'Do I need the combination vehicles test for a Class A CDL?', a: 'Yes. Federal rule 49 CFR 383.135(a)(3) says an applicant who scores below 80 percent on the combination vehicle portion must not be issued a Group A CLP or CDL. Class A applicants therefore have to pass it, in addition to General Knowledge and Air Brakes if the tractor has air brakes.' },
      { q: 'How many questions are on the CDL combination vehicles test?', a: 'Each state sets the number. Washington lists 20 questions with 16 needed to pass, which equals 80 percent. Other states may differ, so confirm in your state CDL manual. Federal rules fix only the 80 percent passing standard and the three knowledge areas, not the exact question count.' },
      { q: 'What is the passing score for the CDL combination vehicles test?', a: 'The passing score is 80 percent correct, required by 49 CFR 383.135 for each knowledge test. It is not scaled or curved. On a 20-question test you need 16 correct answers. A lower score means no Group A permit or license is issued until you pass a retest.' },
      { q: 'What does the CDL combination vehicles test cover?', a: 'It covers three areas from 49 CFR 383.111(c): coupling and uncoupling a tractor and semi-trailer, inspecting combination vehicles, and general operating practices, including safe operation and air brakes. Your state manual expands these into coupling order, trailer air line roles, handling and stability.' },
      { q: 'Is the CDL combination vehicles test hard?', a: 'It is moderate. The scope is only three federal areas, but questions ask for exact sequences such as coupling and uncoupling steps, so memorizing the order matters. No national pass rate is published, so a pass-rate figure on an app or website is unofficial. Use your own state manual.' },
      { q: 'Is the combination vehicles test the same as doubles and triples?', a: 'No. The Combination Vehicles test covers ordinary tractor-trailer combinations for Class A. Doubles and triples require a separate T endorsement knowledge test, whose federal areas in 49 CFR 383.115 include assembly and hookup, trailer placement, handling and stability, and traffic problems. You take it after you hold a CLP.' },
      { q: 'What if I take the skills test in a straight truck?', a: 'You can get a Class B or a Class A license with an O restriction, which means no tractor-trailer, under the restriction codes in 49 CFR 383.153. The restriction is lifted by passing the skills test in a representative tractor-trailer. This knowledge test is still required to hold a Group A permit.' }
    ],
    summaryPoints: [
      'Passing requires 80 percent correct; failing means no Group A CLP or CDL (49 CFR 383.135(a)(3)).',
      'The federal content is three areas in 49 CFR 383.111(c): coupling and uncoupling, inspection and operating practices.',
      'Washington lists 20 questions with 16 needed to pass; other states set their own counts.',
      'Doubles and triples require a separate T endorsement knowledge test.'
    ],
    relatedSlugs: ['cdl-general-knowledge-test', 'cdl-air-brakes-knowledge-test', 'cdl-doubles-triples-knowledge-test', 'cdl-pre-trip-vehicle-inspection-test'],
    sourceUrl: CFR,
    reviewed: '2026-10',
    confidence: 'medium'
  },
  {
    slug: 'cdl-hazmat-endorsement-knowledge-test',
    body: BODY,
    tagline: 'The H endorsement: an 80 percent knowledge test plus a TSA background check.',
    description: 'The CDL Hazardous Materials (H) endorsement requires an 80 percent knowledge test and a TSA security threat assessment before a state can add it to your license. Hazmat ELDT is required before your first attempt, and the test is retaken at every CDL renewal. The test covers the five areas in 49 CFR 383.121: regulations, handling, emergency equipment, emergency response and other operating practices. Washington lists 30 questions with 24 to pass.',
    quickAnswer: {
      summary: 'The CDL Hazmat Endorsement Knowledge Test is a state-run exam on 49 CFR 383.121 that requires 80 percent correct. Unlike the other CDL tests it has two extra gates: completed hazmat ELDT before the first attempt, and a TSA security threat assessment with a fee of $85.25, as of October 2026.',
      advantages: [
        'The H endorsement lets you haul placarded hazardous materials, widening the loads you can take.',
        'The five test areas are fixed in 49 CFR 383.121, so you know the scope.',
        'The TSA assessment covers five years, so you do not repeat it at every CDL renewal.',
        'A valid TWIC can reduce the TSA fee to $41 in states that accept it.'
      ]
    },
    roadmap: [
      'Complete hazmat ELDT with a provider on the FMCSA registry',
      'Start the TSA threat assessment and fingerprinting',
      'Study the hazmat section of your state CDL manual',
      'Pass the hazmat knowledge test at the state agency',
      'Receive the H endorsement once TSA clears you'
    ],
    prerequisites: 'You must meet the TSA security threat assessment standards in 49 CFR Part 1572, complete hazmat Entry-Level Driver Training before the first knowledge test attempt, and be applying for or holding a CDL or CLP.',
    eligibility: 'The TSA can deny an endorsement for a disqualifying criminal offense, immigration status, a TSA threat finding or a mental capacity adjudication under 49 CFR 1572.5. Lawful permanent residents must also give a USCIS Alien registration number.',
    examMeta: {
      questions: 'Set by the issuing state; no federal count. Washington lists 30 questions with 24 needed to pass.',
      time: 'No federal time limit; the state sets any limit.',
      pass: '80 percent of questions correct (49 CFR 383.135), plus a TSA security threat assessment',
      fee: 'State test fee (set by the state) plus the TSA threat assessment fee of $85.25 per TSA, or $41 reduced with a valid TWIC (as of October 2026)',
      format: 'Multiple choice, usually computer-based at a state licensing office; fingerprinting is a separate TSA enrollment.',
      admin: 'State driver licensing agency (knowledge test); TSA (security threat assessment)'
    },
    topics: [
      { name: 'Hazardous materials regulations', weight: '', note: 'The hazardous materials table, shipping documents, marking, labeling, placarding, packaging, accident reporting, and tunnel and railroad crossing rules.' },
      { name: 'Hazardous materials handling', weight: '', note: 'Forbidden materials, loading and unloading, cargo segregation, attending vehicles, parking, routes, cargo tanks and safe havens.' },
      { name: 'Emergency equipment operation', weight: '', note: 'Using equipment to protect the public, fire precautions and tank vehicle emergency equipment.' },
      { name: 'Emergency response procedures', weight: '', note: 'Accident types, driving near a fire, emergency procedures, and Class 1.1 and 1.2 explosive requirements.' },
      { name: 'Other operating practices and procedures', weight: '', note: 'Operating rules not covered in the other four areas.' }
    ],
    examEssentials: [
      ['Passing standard', '80 percent correct per 49 CFR 383.135(a)(1); the endorsement test is separate from General Knowledge'],
      ['Content', 'Five areas in 49 CFR 383.121, based on 49 CFR parts 171, 172, 173, 177, 178 and 397'],
      ['ELDT', 'Hazmat theory training is required before the first hazmat knowledge test (49 CFR 383.71 and 383.73)'],
      ['TSA assessment', 'Required under 49 CFR Part 1572; fee payment valid for five years; reduced $41 fee with a valid TWIC'],
      ['Renewal', 'The 383.121 test is retaken at each CDL renewal (49 CFR 383.71(d)(3))'],
      ['Endorsement code', 'H = hazardous materials; X = tank vehicle plus hazardous materials (49 CFR 383.153)']
    ],
    timeline: [
      { stage: 'Hazmat ELDT theory', duration: 'Complete before the first knowledge test; length set by the provider' },
      { stage: 'TSA enrollment and review', duration: 'Start weeks before the test; TSA review time varies' },
      { stage: 'Hazmat knowledge test', duration: 'One state office visit; results usually the same day' },
      { stage: 'Endorsement validity', duration: 'TSA assessment covers five years; retest at each CDL renewal' }
    ],
    costBreakdown: {
      items: [
        { item: 'TSA security threat assessment (per TSA, as of October 2026)', fee: '$85.25 (reduced $41 with a valid TWIC where the state accepts it)' },
        { item: 'State hazmat knowledge test fee', fee: 'Set by each state' },
        { item: 'Hazmat ELDT theory course', fee: 'Set by the registered provider' },
        { item: 'Study material (state CDL manual hazmat section)', fee: 'Free from the state agency' }
      ],
      total: 'About $85.25 for TSA plus the state test fee and the ELDT course price',
      footnote: 'The TSA amount is the figure TSA lists for agent states. Some states collect fingerprints themselves and may add their own fee; confirm with your state agency.'
    },
    difficulty: 'Moderate to hard',
    audience: 'Drivers who haul placarded materials such as fuel, chemicals or compressed gases, and tank or flatbed drivers whose employers require H.',
    time: 'ELDT and TSA enrollment first; then one test visit',
    cost: 'TSA fee $85.25 plus state test fee and ELDT course',
    faqs: [
      { q: 'What is a passing score on the CDL hazmat endorsement test?', a: 'You must answer at least 80 percent of the questions correctly, per 49 CFR 383.135(a)(1). The score is not scaled. On Washington’s 30-question test that means 24 correct answers. A state may use a different question count, but the 80 percent standard is the same everywhere.' },
      { q: 'How much does the TSA hazmat endorsement background check cost?', a: 'TSA lists $85.25 for new and renewing applicants, effective January 1, 2025, with a reduced $41 fee for drivers who hold a valid TWIC. The payment covers five years. This is separate from the state knowledge test fee, and non-agent states may add their own fee, so confirm with your state.' },
      { q: 'Do I need ELDT for the hazmat endorsement test?', a: 'Yes. Under 49 CFR 383.71 and 383.73, hazmat theory training from a provider on the FMCSA Training Provider Registry must be completed before your first hazmat knowledge test attempt, and the state may not administer the test without it. This differs from the General Knowledge test, which needs no ELDT.' },
      { q: 'How long is a hazmat endorsement valid?', a: 'The TSA threat assessment is valid for five years, but the endorsement itself rides on your CDL. Under 49 CFR 383.71(d)(3) you must pass the hazmat knowledge test again each time the CDL renews, and your state may also require a new TSA assessment. Check your state renewal rules.' },
      { q: 'How many questions are on the CDL hazmat test?', a: 'The number is set by each state. Washington lists 30 questions with 24 needed to pass. Other states may use different counts. Federal rules set only the 80 percent standard and the five content areas in 49 CFR 383.121, so check your state CDL manual for the exact figure.' },
      { q: 'Is the CDL hazmat endorsement test hard?', a: 'It is moderate to hard because it is a memory test on placards, labels, the hazardous materials table, loading and segregation rules. No national pass rate is published, so figures on apps are unofficial. The best prep is the hazmat section of your own state CDL manual and its official practice questions.' },
      { q: 'What disqualifies you from a hazmat endorsement?', a: 'TSA can deny an endorsement for a disqualifying criminal offense, ineligible immigration status, a TSA threat finding, or a mental capacity adjudication, according to 49 CFR 1572.5. TSA also will not clear you while a commercial motor vehicle disqualification under 49 CFR 383.51 is unresolved. A waiver can be requested.' }
    ],
    summaryPoints: [
      'Passing requires 80 percent correct on the test built from the five areas in 49 CFR 383.121.',
      'Hazmat ELDT must be complete before the first knowledge test attempt.',
      'The TSA fee is $85.25 (reduced $41 with a valid TWIC) per TSA, as of October 2026, valid five years.',
      'The hazmat test is retaken at each CDL renewal under 49 CFR 383.71(d)(3).'
    ],
    relatedSlugs: ['cdl-tank-vehicle-endorsement-knowledge-test', 'cdl-general-knowledge-test', 'dot-hazmat-employee-training', 'cdl-passenger-endorsement-knowledge-test'],
    sourceUrl: TSA,
    reviewed: '2026-10',
    confidence: 'medium'
  }
];

export default { programs, exams };
