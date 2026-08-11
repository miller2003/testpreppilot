const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Aviation & unmanned aircraft desk',
    bio: 'FAA TRUST program structure comes from the FAA official UAS pages and is revised with each update. Wage figures come from the BLS OEWS series named by code, with the occupational fit noted since BLS has no dedicated uncrewed-aircraft code. This desk states plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the FAA TRUST program, provider model, and testing requirements against FAA official pages; wages against BLS OEWS May 2024.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'No direct occupation — TRUST is the free recreational-drone knowledge test; the commercial drone path it leads toward sits inside occupations like commercial pilots, at a May 2024 median of $122,670 (BLS)',
    summary: 'The direct answer is that the FAA TRUST (The Recreational UAS Safety Test) has no salary of its own — it is a free, mandatory knowledge test for recreational drone operators, not a credential of record for a job, and no BLS occupation corresponds to it. The honest salary story is the commercial drone pathway the test sits at the front of: flying drones for pay requires the separate FAA Part 107 Remote Pilot certificate, and commercial drone pilots typically fall into BLS occupation categories such as commercial pilots (SOC 53-2012), at a May 2024 median annual wage of $122,670, with the lowest 10 percent under about $59,000 and the highest 10 percent above about $239,000 — though the BLS category is dominated by manned aviation, and drone-specific pay data is not published separately. For hobby and recreational operators, which is who TRUST serves, the financial relevance is compliance: since June 2021, every recreational drone operator must pass TRUST and carry proof, and flying without it exposes you to FAA enforcement and fines, while the test itself costs nothing. The career-relevant framing is the ladder: TRUST qualifies you to fly recreationally under the Exception for Recreational Flyers, and when you want to earn from drone work — real estate photography, inspection, mapping, cinematography — you must add the Part 107 Remote Pilot certificate, which is a separate proctored FAA knowledge exam (60 questions, 70 percent to pass, $175 fee). BLS projects about 5 percent growth for commercial pilots from 2024 to 2034, with about 18,000 annual openings. The practical read: take TRUST in about 30 minutes online at no cost because the law requires it for recreational flight, treat it as the awareness step for safe flying, and if your goal is paid drone work, plan the Part 107 step that actually opens the commercial roles.',
    rows: [
      { label: 'Median annual wage, commercial pilots', value: '$122,670', note: 'BLS Occupational Outlook Handbook, May 2024 (SOC 53-2012)' },
      { label: 'Lowest 10 percent', value: 'less than $59,330', note: 'BLS OOH, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $239,200', note: 'BLS OOH, May 2024' },
      { label: 'The test itself', value: 'No direct occupation', note: 'Free recreational UAS safety test; commercial work needs Part 107' }
    ],
    growth: 'BLS projects about 5% growth for commercial pilots from 2024 to 2034; drone-specific occupational data is not published separately.',
    source: { label: 'BLS OOH — Airline and Commercial Pilots', url: 'https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm' }
  },
  passRate: {
    headline: 'No pass rate is published — TRUST is a pass/fail knowledge test with an 80% cut score (12 of 15), and because it is open-book and can be retaken, completion is near-universal for operators who read the material',
    summary: 'The core fact is that the FAA does not publish pass rates for TRUST, and none exists as a meaningful statistic, because the test is designed as an awareness gate rather than a screening exam. What the FAA publishes is the test structure: TRUST consists of 15 multiple-choice questions, you must answer 12 of 15 correctly (80 percent), and you must pass before flying recreationally under the Exception for Recreational Flyers. The test is administered online through FAA-approved test administrators (including organisations like the Boy Scouts, the Academy of Model Aeronautics, and several drone-training companies), it is open-book in the sense that the safety material is available for study, and you can retake it as many times as needed to pass. Because the content is drawn directly from the FAA\u2019s recreational UAS safety guidance — where you may fly, the 400-foot ceiling, visual line of sight, airspace restrictions, and safety rules — the practical pass rate approaches universal for operators who read the material once. The numbers that actually matter are the compliance facts: since June 2021 the FAA requires all recreational flyers to carry proof of TRUST completion when flying, and law enforcement and FAA personnel can ask to see it. The preparation implication is minimal by design: set aside 30 minutes, read the safety guidance, take the test on an approved administrator\u2019s site, and save the PDF certificate on your phone or in your drone case. The distinction to remember is that TRUST qualifies you only for recreational flight; earning money with a drone requires the Part 107 Remote Pilot certificate, which is a proctored FAA knowledge exam with a 70 percent pass line and a published fee.',
    source: { label: 'FAA — The Recreational UAS Safety Test (TRUST)', url: 'https://www.faa.gov/uas/recreational_flyers/knowledge_test_updates' },
    caveat: 'No official pass rate is published; TRUST requires 80% (12/15) and is retakeable until passed.'
  },
  studyPlan: {
    summary: 'Plan for roughly 30 to 45 minutes total — read the FAA\u2019s recreational UAS safety guidance, take the 15-question TRUST on any approved administrator\u2019s platform, and save the certificate — and because the test is open-book and retakeable, there is no long study arc to budget. The content covers the core recreational rules: where you may fly (away from airports and air traffic, not over people or moving vehicles in most cases), the 400-foot altitude ceiling, keeping the drone within visual line of sight at all times, yielding to manned aircraft, the requirement to fly only under the Exception for Recreational Flyers, and the need to register the drone if it weighs more than 0.55 pounds. The most efficient sequence is: first, read the FAA\u2019s recreational flyer guidance on the official site; second, run the test on an approved administrator platform, keeping the material open in another window; third, retake if you fall short of 12 correct, reviewing the missed items. There is no study book worth buying — the entire body of knowledge is a few pages of public guidance — and the only real preparation is reading them. The higher-stakes study arc belongs to the Part 107 certificate for commercial work: 15 to 25 hours of study covering airspace, weather, sectional charts, and remote-pilot rules, with a 60-question proctored exam at a PSI or similar testing center. If your goal is paid drone work, budget that separate effort after TRUST, and remember that TRUST does not count toward Part 107 — they are separate credentials for separate flight purposes.',
    totalHours: '30-45 minutes for TRUST; 15-25 hours if also pursuing Part 107',
    weeks: [
      { label: 'Session 1 (30-45 min)', focus: 'Read + test', tasks: ['Read the FAA recreational UAS safety guidance', 'Take TRUST on an approved administrator site', 'Save the PDF certificate'], hours: 0.75 },
      { label: 'Optional: Part 107 path', focus: 'Commercial drone work', tasks: ['Study airspace, weather, and charts', 'Take a Part 107 prep course or self-study', 'Book the proctored FAA knowledge exam'], hours: 20 }
    ],
    variants: [
      { label: 'Part 107 Remote Pilot certificate', detail: 'The separate FAA certification for commercial drone work: 60 proctored questions, 70% to pass, $175 fee.' },
      { label: 'Drone registration', detail: 'Drones over 0.55 lbs must be registered with the FAA; registration is separate from TRUST.' }
    ]
  },
  prepStrategies: {
    summary: 'The strategy for TRUST is simply "read the FAA guidance once and keep it open during the test," and the single biggest error is over-preparing or buying a paid prep product for a free 15-question awareness test. Because the test is open-book and retakeable with an 80 percent line, the actual skill being tested is familiarity with the recreational rules, not mastery. A second useful habit is taking the test on an approved administrator\u2019s platform that clearly issues the FAA-recognised certificate, since the certificate\u2019s validity depends on using an FAA-approved administrator. Third, memorise the few numeric and boundary rules that the questions reliably test: 400 feet, line of sight, yielding to manned aircraft, and the airport-adjacency restrictions. Fourth, save the certificate in two places and store it with your drone kit — proof of completion is a carry requirement, not just a formality. Fifth, if your plans include earning, schedule the Part 107 study separately and early, because the commercial path is where the knowledge load actually lives. Finally, keep track of rule updates: the FAA periodically adjusts recreational rules and the approved-administrator list, so check the official page before flying rather than relying on a year-old summary.',
    items: [
      { title: 'Read, do not cram', detail: 'The full body of knowledge is a few pages of FAA guidance; keep it open during the test.' },
      { title: 'Use an FAA-approved administrator', detail: 'Only approved platforms issue the recognised TRUST certificate.' },
      { title: 'Memorise the boundary rules', detail: '400 feet, line of sight, yield to manned aircraft, airport restrictions.' },
      { title: 'Carry proof of completion', detail: 'Save the PDF in two places; proof is a carry requirement while flying.' },
      { title: 'Plan Part 107 separately', detail: 'Commercial work needs the proctored Part 107 exam — a different, heavier study arc.' }
    ]
  },
  resourceComparison: {
    summary: 'TRUST is free by law — the FAA mandates that approved test administrators offer it at no cost — so the entire preparation budget is zero. The comparison below separates the official FAA guidance, approved test administrators, and the paid Part 107 path, with prices current to this review. The buying rule is to never pay for TRUST itself; if a site charges for the recreational test, it is not operating within the FAA\u2019s program.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'FAA recreational UAS guidance', values: ['Free', 'Official web pages', 'The exact material the test covers'] },
      { label: 'TRUST via FAA-approved administrators', values: ['Free', 'Online 15-question test', 'The certificate itself'] },
      { label: 'Part 107 prep courses (e.g. FAA-approved schools)', values: ['~$150-300', 'Online course', 'Commercial drone certification'] },
      { label: 'Part 107 knowledge exam', values: ['$175', 'Proctored at a testing center', 'The Remote Pilot certificate'] }
    ],
    footnote: 'Prices approximate and dated to this review; TRUST must be free on approved administrators — do not pay for it.'
  },
  commonMistakes: {
    summary: 'The most common mistake is paying for a TRUST prep product or an "instant certificate" site that is not an FAA-approved administrator, which produces a certificate the FAA does not recognise; the second is flying recreationally without the test, which is a compliance violation with enforcement exposure. A third recurring error is confusing TRUST with Part 107 and assuming the recreational test qualifies you for paid work — it does not. Candidates also routinely fail to carry proof of completion, treating the PDF as optional when it is a carry requirement. Finally, many operators take the test once and never check for rule updates, flying on outdated assumptions about altitudes and airport restrictions.',
    items: [
      { mistake: 'Paying for the test', fix: 'TRUST is free by law; use an FAA-approved administrator only.' },
      { mistake: 'Flying without it', fix: 'Pass TRUST before first recreational flight and carry proof.' },
      { mistake: 'Treating TRUST as a commercial licence', fix: 'Paid drone work requires the separate Part 107 certificate.' },
      { mistake: 'Not carrying proof', fix: 'Save the PDF on your phone and in your drone case — it is a carry requirement.' },
      { mistake: 'Ignoring rule updates', fix: 'Check the FAA recreational pages before flying; rules and the administrator list change.' }
    ]
  },
  questionTypes: {
    summary: 'TRUST contains 15 multiple-choice questions covering the recreational UAS safety rules: where recreational drones may fly, altitude and line-of-sight limits, yielding to manned aircraft, the Exception for Recreational Flyers, and registration obligations. The items are straightforward rule-based questions drawn from the FAA guidance. The samples below are editor-written illustrations of the published safety guidance, not live exam items.',
    types: [
      { name: 'Operating rules', share: '~30%', detail: 'Altitude, line of sight, yielding, and safe operation.' },
      { name: 'Airspace & locations', share: '~25%', detail: 'Airport proximity, restricted areas, and where flying is allowed.' },
      { name: 'The Exception for Recreational Flyers', share: '~20%', detail: 'Eligibility and conditions of recreational flight.' },
      { name: 'Registration', share: '~15%', detail: 'When a drone must be registered.' },
      { name: 'Safety responsibilities', share: '~10%', detail: 'General safe flying and community considerations.' }
    ],
    samples: [
      {
        prompt: 'Under the Exception for Recreational Flyers, how high may you generally fly a drone?',
        options: ['A. Up to 400 feet above ground level', 'B. Up to 1,000 feet above ground level', 'C. Any altitude in uncontrolled airspace', 'D. No altitude limit exists'],
        answer: 'A',
        explanation: 'Recreational flyers must keep the drone at or below 400 feet above ground level in most circumstances.'
      },
      {
        prompt: 'While flying a drone, you see a manned aircraft approaching. What should you do?',
        options: ['A. Continue flying and watch the aircraft', 'B. Yield, giving the aircraft the right of way', 'C. Fly higher than the aircraft', 'D. Land immediately without observing'],
        answer: 'B',
        explanation: 'Recreational drone operators must yield right of way to manned aircraft at all times.'
      },
      {
        prompt: 'At what weight must a recreational drone be registered with the FAA?',
        options: ['A. More than 0.55 pounds', 'B. More than 5 pounds', 'C. Any drone ever', 'D. More than 55 pounds'],
        answer: 'A',
        explanation: 'Drones weighing more than 0.55 pounds (250 grams) must be registered with the FAA.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published safety guidance, not live exam items.'
  },
  examDay: {
    summary: 'There is no physical exam day for TRUST — you complete the 15-question test online through an FAA-approved administrator whenever you are ready, at no cost, and you can retake it until you pass. The core rules: pass with 12 of 15 correct, use an approved administrator platform, and carry your certificate as proof when flying. The "exam-day" discipline is picking a quiet 30 minutes, reading the FAA guidance first, and running the test with the guidance available in another window. After passing, the administrator issues your certificate — download the PDF immediately and store it in two places, including your phone, since proof is a carry requirement. If you fall short of 12 correct, review the missed items and retake; there is no waiting period. After TRUST, register your drone if it weighs more than 0.55 pounds (a separate FAA process with its own small fee), and if your goal is paid drone work, start the Part 107 study arc and book the proctored knowledge exam. The most useful habits: treat the test seriously enough to read the guidance — the 80 percent line is forgiving, but a skipped read can still cost you the pass — and keep the certificate file named clearly so you can find it quickly when asked.',
    bring: ['FAA guidance open in a second window', '30 minutes of quiet time'],
    leave: ['Money — TRUST is free by law', 'The assumption that passing once means rules never change'],
    timeline: [
      { time: 'Read', detail: 'Review the FAA recreational UAS safety guidance (10-15 min).' },
      { time: 'Test', detail: 'Take the 15-question TRUST on an approved administrator site; 12/15 to pass.' },
      { time: 'Certificate', detail: 'Download the PDF and save two copies.' },
      { time: 'Next', detail: 'Register the drone if over 0.55 lbs; plan Part 107 for commercial work.' }
    ],
    rules: ['12 of 15 (80%) to pass', 'Free on approved administrators', 'Retakeable until passed', 'Proof must be carried when flying'],
    afterwards: 'Passing issues your TRUST certificate, required for all recreational drone flight; register your drone separately and pursue Part 107 for paid work.'
  }
};

export default data;
