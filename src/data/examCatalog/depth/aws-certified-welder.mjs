const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Skilled trades & manufacturing certifications desk',
    bio: 'This desk covers welder and skilled-trade credentials. Program structure and rules come from the certifying body\'s official pages (American Welding Society, NCCER), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the American Welding Society\'s Certified Welder program pages and BLS OOH Welders, Cutters, Solderers, and Brazers (SOC 51-4121), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$51,000 median for welders, cutters, solderers and brazers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AWS Certified Welder" — the American Welding Society\'s Certified Welder (CW) program certifies that a welder can produce sound welds under a qualified welding procedure specification (WPS), and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Welders, Cutters, Solderers, and Brazers, SOC 51-4121, which had a May 2024 median wage of $51,000, with the lowest 10 percent under $36,960 and the highest 10 percent above $76,560. The fit is direct: AWS CW holders work as production and structural welders in manufacturing, construction, shipbuilding and repair, all inside this occupation. BLS counted 399,900 welder jobs in 2024 and projects 6 percent growth from 2024 to 2034, about as fast as the average for all occupations, with roughly 37,000 openings a year, almost all from replacement demand as experienced welders retire. The limitation to state plainly: the BLS median covers the whole occupation at all levels, credentialed or not, and welding pay varies strongly by industry and location — structural and pipeline welding with certifications commands a premium, while entry-level production welding pays below the median. Read the number as the market for the occupation, with the AWS CW credential as a portability and hiring signal.',
    rows: [
      { label: 'Median annual wage, welders, cutters, solderers and brazers', value: '$51,000', note: 'BLS OOH, SOC 51-4121, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $36,960', note: 'BLS OOH, SOC 51-4121, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $76,560', note: 'BLS OOH, SOC 51-4121, May 2024' },
      { label: 'Projected openings per year', value: '~37,000', note: 'BLS OOH, SOC 51-4121, 2024-2034' }
    ],
    growth: 'BLS projects 6 percent growth for welders from 2024 to 2034, about 37,000 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Welders, Cutters, Solderers, and Brazers', url: 'https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm' }
  },
  passRate: {
    headline: 'AWS publishes no pass rate — the CW is a performance test graded against visual and bend-test criteria, not a written exam',
    summary: 'The American Welding Society does not publish cohort pass rates for the Certified Welder program, and it is important to understand what the CW is: unlike a written certification exam, the CW is a performance test. The welder fabricates test coupons under a qualified welding procedure specification (WPS) at an AWS-accredited testing facility (ATF), and the coupons are evaluated against the acceptance criteria — visual inspection plus guided bend tests (and radiography or other methods where the WPS requires them). There is no fixed "passing score" to publish because the result is a pass/fail judgement of the weld quality against AWS D1.1 or the applicable standard\'s criteria. The certification itself is portable: it travels with the welder across employers and is accepted as proof of qualification under many codes. A certificate is valid for six months and is renewed by providing proof of continuity — welding in a qualified position within the six-month window or retesting. The absence of a published pass rate is not an absence of standards: the criteria are exact and published in the standards, and an experienced welder who practises the test positions under the WPS is prepared. The practical reading: preparation is practice, not study, and the test welds are graded against precise dimensional and visual criteria.',
    source: { label: 'American Welding Society - Certified Welder (CW) program', url: 'https://www.aws.org/certification/page/certified-welder-cw' },
    caveat: 'AWS publishes the acceptance criteria but no pass rate; the CW is a performance test, not a written exam with a score distribution.'
  },
  studyPlan: {
    summary: 'The AWS Certified Welder program has no written exam — it is a performance test — so the study plan is a practice plan. The process is: the welder registers for testing, chooses the welding process and positions to certify in (for example SMAW 3G and 4G plate, or FCAW pipe), and reports to an AWS-accredited testing facility, which provides the WPS. The welder fabricates test coupons under the WPS, and the facility evaluates them against the acceptance criteria of the applicable standard, typically AWS D1.1 for structural steel. A defensible preparation plan runs 20 to 60 hours of practice depending on the welder\'s current skill. Week one: confirm the exact test positions and the WPS you will be tested under, and practise the fit-up and techniques for those positions. Weeks two to three: run practice coupons repeatedly, comparing each against the published acceptance criteria — bead profile, penetration, porosity, fusion, undercut and distortion — and adjust technique until your coupons pass the criteria consistently. Week four: rehearse the test-day conditions, including the time allowed, and schedule the test. The plan is skill-based because the test is skill-based; for a welder new to a process, add formal training before the practice phase.',
    totalHours: '20-60 hours of practice (plus formal training if new to the process)',
    weeks: [
      { label: 'Week 1', focus: 'Test setup', tasks: ['Confirm test positions, process and the WPS', 'Practise fit-up and joint preparation', 'Review the acceptance criteria you will be graded against'], hours: 10 },
      { label: 'Weeks 2-3', focus: 'Coupon practice', tasks: ['Run practice coupons in the test positions', 'Evaluate each against the criteria and adjust technique', 'Repeat until coupons pass consistently'], hours: 25 },
      { label: 'Week 4', focus: 'Test-day rehearsal', tasks: ['Rehearse test conditions and timing', 'Final coupon runs', 'Schedule the test at an accredited facility'], hours: 10 }
    ],
    variants: [
      { label: 'Experienced welder, new process', detail: 'Add formal training or supervised practice in the new process before the coupon phase.' },
      { label: 'Renewing a certification', detail: 'Confirm the continuity requirements; a weld within the six-month window may renew without retesting.' }
    ]
  },
  prepStrategies: {
    summary: 'Because the AWS CW is a performance test, the dominant strategy is criterion-based practice: obtain the published acceptance criteria for the standard and position you are testing (typically AWS D1.1), and evaluate every practice coupon against them — bead profile, penetration, porosity, fusion, undercut and distortion — because the test is graded against those exact criteria. Second, practise under the WPS, not your usual settings: the procedure specifies the process, filler metal, amperage range, and technique, and the coupons must meet the WPS. Third, rehearse the test positions specifically: certification is position-specific, so certify in the positions your work requires (flat, horizontal, vertical or overhead) and practise those. Fourth, if you are new to the process, get formal training first — the test is not the place to learn a process. Fifth, confirm the facility and logistics early: testing happens at AWS-accredited testing facilities, and scheduling, fees and the WPS options vary by facility, so call ahead. Finally, understand the six-month validity and continuity rule: keep a weld log and weld within the window to renew without retesting.',
    items: [
      { title: 'Practise against the criteria', detail: 'Grade every coupon on bead profile, penetration, porosity, fusion, undercut and distortion.' },
      { title: 'Weld to the WPS', detail: 'The procedure specifies process, filler and settings; the coupons must meet it.' },
      { title: 'Rehearse your positions', detail: 'Certification is position-specific; practise the positions your work needs.' },
      { title: 'Train before testing if new', detail: 'The test is not the place to learn a process.' },
      { title: 'Know the six-month continuity rule', detail: 'Weld within the window to renew without retesting; keep a weld log.' }
    ]
  },
  resourceComparison: {
    summary: 'AWS CW preparation costs are dominated by testing, not study materials. The AWS website and the applicable standard (AWS D1.1 for structural steel) define the criteria; the D1.1 code book costs roughly $100-$200 and is the definitive reference for acceptance criteria, though many welders learn the criteria through their employer or training program. Testing at an AWS-accredited facility typically costs $100-$300 per session depending on the number of positions and the facility; the initial certification application has a fee, and renewal through continuity has a lower cost. Formal training programs — vocational courses and apprenticeship hours — range from a few hundred to several thousand dollars but are typically part of an employer or school pathway. A realistic total budget for the test itself is $150 to $400. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AWS certification pages', values: ['Free', 'Official program information', 'Program rules, positions and facility search'] },
      { label: 'AWS D1.1 code book', values: ['$100-$200', 'Printed or digital standard', 'The definitive acceptance criteria'] },
      { label: 'Testing at an accredited facility', values: ['$100-$300/session', 'In-person performance test', 'The certification itself'] },
      { label: 'Vocational training programs', values: ['$500-$5,000', 'Classroom and shop training', 'Learning the process before testing'] },
      { label: 'Apprenticeship hours', values: ['Varies', 'On-the-job training', 'Skill building and paid practice'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; facility testing fees vary; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AWS CW mistake is treating the test like a written exam: welders who "study" instead of practising coupons arrive at the facility unprepared for the physical skill the test measures. The fix is criterion-based practice. The second mistake is ignoring the WPS: welders weld to their usual settings instead of the procedure\'s specified process, filler and parameters, and the coupons fail. Third, many welders under-practise the specific test positions — certifying in flat when the work requires vertical — and then fail or waste a session on the wrong positions. Fourth, welders misjudge the acceptance criteria, focusing on appearance while missing penetration, fusion or distortion requirements; obtain the actual criteria and grade every coupon against them. Finally, forgetting the six-month continuity rule loses the certification: a welder who passes but does not weld in a qualified position within six months must retest. Keep the weld log and the schedule.',
    items: [
      { mistake: 'Studying instead of practising', fix: 'Run coupons against the criteria; the test measures physical skill.' },
      { mistake: 'Ignoring the WPS', fix: 'Weld to the procedure\'s specified process, filler and parameters.' },
      { mistake: 'Practising the wrong positions', fix: 'Certify in the positions your work requires and practise those.' },
      { mistake: 'Grading only appearance', fix: 'Grade penetration, fusion and distortion against the published criteria.' },
      { mistake: 'Forgetting the continuity rule', fix: 'Weld within the six-month window to renew; keep a weld log.' }
    ]
  },
  questionTypes: {
    summary: 'The AWS Certified Welder program does not use written exam questions — it is a performance test in which the welder fabricates test coupons under a qualified WPS and the facility evaluates them against the acceptance criteria of the applicable standard, typically AWS D1.1. The evaluation checks visual criteria — bead profile, undercut, porosity, fusion, contour — and mechanical criteria through guided bend tests, which verify penetration and soundness. The closest thing to "question types" is the set of evaluation points the grader applies, and the samples below are editor-written illustrations of the kind of criteria a welder is graded against, not exam items, because no written exam exists for the CW.',
    types: [
      { name: 'Visual inspection criteria', share: 'Applied to every coupon', detail: 'Bead profile, undercut, porosity, fusion, contour and dimensional limits.' },
      { name: 'Guided bend tests', share: 'Applied per the WPS', detail: 'Mechanical verification of penetration and soundness.' },
      { name: 'Additional methods', share: 'When the WPS requires', detail: 'Radiography or other NDE for certain procedures.' }
    ],
    samples: [
      {
        prompt: 'A 3G SMAW test coupon shows a slight undercut along the toe of the weld. The most appropriate correction is to:',
        options: ['A. Adjust the technique — travel angle, speed and amperage — so the filler wets into the toe', 'B. Increase the travel speed to finish faster', 'C. Reduce the weld size to hide the undercut', 'D. Ignore it; undercut does not affect the bend test'],
        answer: 'A',
        explanation: 'Undercut is corrected by technique — travel angle, speed and amperage — so the filler wets into the base metal toe. Faster travel, smaller welds or ignoring the defect each fail the visual acceptance criteria.'
      },
      {
        prompt: 'A guided bend test fails due to a lack of fusion at the root. The most likely cause is:',
        options: ['A. Insufficient root penetration from low amperage or poor technique', 'B. Excessively wide beads', 'C. A clean, dry joint', 'D. Too much filler metal'],
        answer: 'A',
        explanation: 'Lack of fusion at the root points to insufficient penetration — typically low amperage, wrong travel angle or poor root technique. Wide beads, clean joints and filler amount are not the cause of root fusion failure.'
      },
      {
        prompt: 'A welder\'s CW certification was issued six months ago and the welder has not welded in a qualified position since. To keep the certification valid, the welder must:',
        options: ['A. Retest, or document qualifying welding within the continuity window', 'B. Pay the renewal fee with no other action', 'C. Submit a written affidavit only', 'D. Take a written open-book exam'],
        answer: 'A',
        explanation: 'AWS CW continuity requires welding in a qualified position within the six-month window, documented, or retesting. Fees alone, affidavits without welding, or a written exam do not satisfy the continuity rule.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published acceptance criteria, not live exam items — the CW is a performance test with no written exam.'
  },
  examDay: {
    summary: 'Test day for the AWS CW is a session at an AWS-accredited testing facility (ATF), not a written exam. Bring the required identification and the WPS information the facility needs; the facility provides the materials, filler and equipment in most cases. Arrive on time — the session is scheduled, and the facility sets the time allowed for each position. The process: the welder fabricates test coupons under the WPS, the facility performs visual inspection, and the coupons are then evaluated by guided bend testing (or the method the WPS requires); results are reported after the evaluation, with certified welders receiving their certification documents and wallet card. On a fail, the welder can retest, typically paying another session fee and practising the failing positions first. On a pass, the certification is valid for six months and renewed by documenting continuity — welding in a qualified position within the window — or by retesting. The afterwards matters: keep a weld log of qualifying work, because continuity documentation is what renews the certificate without another test.',
    bring: ['Valid government-issued photo ID', 'The WPS and position information for your test session', 'Any PPE or tools the facility requires'],
    leave: ['Personal items not allowed in the test area', 'Preconceptions about welding to your own settings — weld to the WPS'],
    timeline: [
      { time: 'Before the session', detail: 'Confirm the session time, positions and fee with the accredited facility.' },
      { time: 'At the facility', detail: 'Check in, receive the WPS and fabricate the test coupons in the scheduled positions.' },
      { time: 'Evaluation', detail: 'The facility performs visual inspection and the required mechanical tests (typically guided bends).' },
      { time: 'Afterwards', detail: 'Results are reported; on a pass you receive certification documents and the wallet card.' }
    ],
    rules: [
      'Weld to the WPS — process, filler and parameters as specified',
      'The facility sets the time allowed per position',
      'The certification is valid six months and renews through documented continuity or retesting'
    ],
    afterwards: 'On a pass, document your qualifying welding to renew through continuity within six months. On a fail, practise the failing positions and retest at the facility.'
  }
};

export default data;
