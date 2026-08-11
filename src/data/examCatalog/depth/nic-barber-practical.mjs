const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Beauty, trades & skilled-licensure desk',
    bio: 'This desk covers beauty and skilled-licensure exams. Exam structure, fees and rules come from the testing body (NIC) and the state barber boards, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NIC barber practical examination pages and BLS OOH Barbers (SOC 39-5011), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$42,850 median for barbers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "NIC barber practical" — the NIC barber practical examination is the hands-on licensing component used by many state barber boards, and the wage question belongs to the occupation you enter with it. The closest official BLS occupation is Barbers, SOC 39-5011, which had a May 2024 median wage of $42,850, with the lowest 10 percent under $27,380 and the highest 10 percent above $72,940. The fit is direct: passing the barber licensing exams — practical and theory — plus the state requirements licenses you to practice barbering, and BLS counted 136,500 barber jobs in 2024, projecting 8 percent growth from 2024 to 2034 with about 18,100 openings a year. The limitation to state plainly: the BLS median covers all barbers, licensed or not, and barber income is tip- and client-driven, so the median understates what established barbers with a loyal clientele earn and overstates what new licensees earn while building a book. Read the number as the market for the occupation the licence unlocks, and note that the practical examination is the skills gate — the hands-on proof that the theory knowledge can be applied.',
    rows: [
      { label: 'Median annual wage, barbers', value: '$42,850', note: 'BLS OOH, SOC 39-5011, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $27,380', note: 'BLS OOH, SOC 39-5011, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $72,940', note: 'BLS OOH, SOC 39-5011, May 2024' },
      { label: 'Projected openings per year', value: '~18,100', note: 'BLS OOH, SOC 39-5011, 2024-2034' }
    ],
    growth: 'BLS projects 8 percent growth for barbers from 2024 to 2034, about 18,100 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Barbers', url: 'https://www.bls.gov/ooh/personal-care-and-service/barbers.htm' }
  },
  passRate: {
    headline: 'NIC publishes the format and the grading model — and does not publish cohort pass rates for the practical examination',
    summary: 'The National Interstate Council of State Boards of Cosmetology (NIC) does not publish cohort pass rates for the barber practical examination, and state boards do not publish a combined national figure, so any percentage you see online is a state-specific report or a third-party estimate; we do not treat them as authoritative. What the NIC does publish is the format: the barber practical is a performance-based examination in which the candidate demonstrates barbering procedures at a testing station — commonly including a haircut, a shave and additional services — while trained examiners score the performance against standardised criteria, and the passing line is set by the state board. The exam content follows the NIC practical content outline: sanitation and preparation, the haircutting and styling procedures, the shaving and facial-services procedures, and the professional and safety practices demonstrated during the session. The absence of a published pass rate is not an absence of standards: the practical is a skills gate, and the examiners evaluate the candidate\'s technique, sanitation and professionalism against the published criteria. The practical reading: preparation is hands-on rehearsal, not study — practise the exact procedures against the criteria, confirm your state\'s passing standard, and complete the state-required training hours first.',
    source: { label: 'NIC - Barber Practical Examination', url: 'https://www.nictesting.org/' },
    caveat: 'NIC publishes the format and criteria but no cohort pass rate; the passing line is set by each state board.'
  },
  studyPlan: {
    summary: 'The NIC barber practical examination is a performance-based test in which the candidate demonstrates barbering procedures — commonly a haircut, a shave and additional services — while examiners score the performance against standardised criteria. Because it is a skills test, the plan is a rehearsal plan, not a study plan. A defensible plan runs 20 to 40 hours of deliberate practice over 2 to 4 weeks, on top of the state-required training hours (typically 1,000-1,500 hours of barber school). Week one: obtain the NIC practical content outline and the state\'s exam details, and rehearse the sanitation and preparation procedures — the setup, the tool handling and the safety practices — because the exam scores the entire session, not just the finished service. Weeks two to three: rehearse the core procedures — the haircut, the shave and the additional services — timing each against the session limits and practising the technique the examiners look for. Week four: run full dress rehearsals of the entire session under timed conditions, and confirm the station logistics. The plan is skill-based because the practical rewards demonstrated technique; candidates who practise the exact procedures against the criteria pass at far higher rates than those who only review theory.',
    totalHours: '20-40 hours of rehearsal over 2-4 weeks (after the state training hours)',
    weeks: [
      { label: 'Week 1', focus: 'Outline and sanitation', tasks: ['Obtain the practical outline and state details', 'Rehearse sanitation and preparation procedures', 'Tool handling and safety practices'], hours: 10 },
      { label: 'Weeks 2-3', focus: 'Core procedures', tasks: ['The haircut procedure against the criteria', 'The shave procedure and technique', 'The additional services'], hours: 20 },
      { label: 'Week 4', focus: 'Dress rehearsals', tasks: ['Full timed session rehearsals', 'Confirm station logistics and materials', 'Final technique review'], hours: 10 }
    ],
    variants: [
      { label: 'Recent barber-school graduate', detail: 'The skills are fresh; focus rehearsal on the exact session flow and timing.' },
      { label: 'Retaking the practical', detail: 'Use your previous section feedback to target the specific procedures that failed.' }
    ]
  },
  prepStrategies: {
    summary: 'The barber practical rewards demonstrated technique, so the dominant strategy is criteria-based rehearsal: obtain the NIC practical content outline and the state\'s scoring criteria, and practise each procedure against them — the sanitation steps, the haircut technique, the shave angle and stroke, and the professional conduct during the session — because the examiners score the whole session. Second, rehearse the session flow under timing: the practical has session limits, and candidates who practise the full sequence at pace perform better than those who rehearse individual skills. Third, master the sanitation component deliberately: the setup, the tool handling and the disinfection practices are scored throughout, and they are where candidates lose points without realising it. Fourth, use a partner or instructor for feedback on the technique the examiners look for, because self-practice can reinforce errors. Finally, confirm the logistics — the station materials, the dress code and the check-in — because the practical is a live event, and preparation is about the session as a whole.',
    items: [
      { title: 'Rehearse against the criteria', detail: 'The examiners score the whole session; practise every procedure against the published criteria.' },
      { title: 'Time the full session', detail: 'Session limits reward practising the complete flow at pace.' },
      { title: 'Master the sanitation component', detail: 'Setup, tool handling and disinfection are scored throughout.' },
      { title: 'Get external feedback', detail: 'A partner or instructor catches technique errors self-practice misses.' },
      { title: 'Confirm the logistics', detail: 'Station materials, dress and check-in are part of the live event.' }
    ]
  },
  resourceComparison: {
    summary: 'Barber practical prep costs are dominated by the training program and the test fees, not the study materials. The NIC practical content outline (free) and the state board\'s exam details are the core references; barber school tuition ($5,000-$15,000 depending on the program) provides the skills and often includes practical-exam rehearsal. Mannequin heads and practice supplies ($50-$200) support home rehearsal, and some schools offer practical-exam prep sessions. The exam fee is set by the state board, commonly $100-$200 for the practical. A realistic total budget is $200 to $500 for the exam and supplies, on top of the training cost. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NIC practical outline + state details', values: ['Free', 'Official documents', 'The criteria and session structure'] },
      { label: 'Barber school tuition', values: ['$5,000-$15,000', 'Training program', 'The skills and state-hour requirement'] },
      { label: 'Practice supplies (mannequin, tools)', values: ['$50-$200', 'Hands-on materials', 'Home rehearsal'] },
      { label: 'Practical-exam prep sessions', values: ['$50-$300', 'School or studio coaching', 'External feedback on technique'] },
      { label: 'Practical exam', values: ['~$100-$200 (state-set)', 'Performance-based exam', 'The licensing gate'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; exam fees are set by state boards; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common barber practical mistake is practising services without practising the session: candidates who rehearse haircuts but never run the full timed sequence meet the live event unprepared for the flow, the sanitation scoring and the time pressure. The fix is full-session dress rehearsals. The second mistake is neglecting the sanitation component, which is scored throughout the session — candidates lose points on setup, tool handling and disinfection without realising it. Third, candidates practise without feedback and reinforce technique errors; use a partner or instructor. Fourth, some candidates ignore the state\'s specific criteria and session structure, practising the wrong procedures. Finally, candidates who treat the practical as a formality after passing theory underestimate the skills gate; the practical is where licensing is actually won or lost.',
    items: [
      { mistake: 'Practising skills, not sessions', fix: 'Run full timed dress rehearsals of the complete session.' },
      { mistake: 'Neglecting sanitation scoring', fix: 'Setup, tool handling and disinfection are scored throughout.' },
      { mistake: 'Practising without feedback', fix: 'Use a partner or instructor to catch technique errors.' },
      { mistake: 'Ignoring the state criteria', fix: 'Practise the exact procedures and structure your state uses.' },
      { mistake: 'Treating the practical as a formality', fix: 'The practical is the skills gate; rehearse seriously.' }
    ]
  },
  questionTypes: {
    summary: 'The NIC barber practical examination is not a written test — it is a performance-based examination in which the candidate demonstrates barbering procedures at a station while examiners score the performance against standardised criteria. The evaluated components are the sanitation and preparation, the haircutting and styling, the shaving and facial services, and the professional conduct of the session. The closest thing to "question types" is the set of criteria the examiners apply, and the samples below are editor-written illustrations of the kind of procedure standards a candidate is graded against, not exam questions.',
    types: [
      { name: 'Sanitation and preparation criteria', share: 'Scored throughout', detail: 'Setup, tool handling, disinfection and safety.' },
      { name: 'Service technique criteria', share: 'Scored per service', detail: 'Haircut, shave and additional-service technique.' },
      { name: 'Professional conduct criteria', share: 'Scored throughout', detail: 'Client interaction and session professionalism.' }
    ],
    samples: [
      {
        prompt: 'During the practical, a candidate finishes the haircut but leaves loose hair on the station and does not disinfect the clippers. The most appropriate practice is to:',
        options: ['A. Clean and disinfect the tools and station before completing the session', 'B. Move to the next service immediately', 'C. Leave the station for the next candidate to clean', 'D. Disinfect only if asked'],
        answer: 'A',
        explanation: 'The practical scores sanitation throughout; the candidate should clean and disinfect tools and the station as part of the professional workflow. Skipping it, deferring it or doing it only if asked fails the sanitation criteria.'
      },
      {
        prompt: 'When performing the shave procedure, the razor blade should be:',
        options: ['A. Held at a low angle with short, controlled strokes', 'B. Pressed firmly at a steep angle', 'C. Dragged quickly without control', 'D. Used only after the client leaves'],
        answer: 'A',
        explanation: 'A low angle with short, controlled strokes is the correct shaving technique — it minimises cuts and produces a clean result. Steep angles, fast uncontrolled strokes or wrong timing each fail the technique criteria.'
      },
      {
        prompt: 'Before beginning the services, the candidate\'s station preparation should include:',
        options: ['A. Setting up clean tools, fresh linens and the disinfectant solution', 'B. Arranging tools from the previous client', 'C. No preparation is needed', 'D. Preparing only the clippers'],
        answer: 'A',
        explanation: 'The preparation criteria require a clean, properly set-up station — clean tools, fresh linens and disinfectant ready. Reusing prior tools, skipping preparation or partial setup fail the sanitation and preparation standards.'
      }
    ],
    note: 'Samples are editor-written illustrations of the practical criteria, not exam questions — the practical is a performance test.'
  },
  examDay: {
    summary: 'The NIC barber practical examination is a live, performance-based session at the testing site your state board designates. Bring the required identification matching your registration, your exam confirmation, and the materials the state requires (commonly your tools, mannequin if used, and linens); confirm the exact list beforehand. Arrive early — late arrivals may forfeit the appointment and fee. During the session, perform the procedures in the order and time allowed, maintaining the sanitation and professional practices throughout, because the examiners score the entire session. Your result is reported after scoring, and the state board receives it. If you do not pass, the state board defines the retake policy and wait. On a pass, you still complete the theory examination and the remaining state requirements before the licence is issued. The afterwards matters: complete the remaining licensing steps promptly, because the practical result and the other components combine for the licence.',
    bring: ['Required identification matching your registration', 'Exam confirmation and the state\'s materials list', 'Your tools and supplies per the state requirements'],
    leave: ['Phone and personal electronics', 'Any assumption that the practical is a formality — it is the skills gate'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the site, materials list and the session structure.' },
      { time: 'Session', detail: 'Perform the procedures in order within the time allowed, maintaining sanitation throughout.' },
      { time: 'After submit', detail: 'Result is reported to the state board.' },
      { time: 'Next', detail: 'Complete the theory exam and the remaining state requirements.' }
    ],
    rules: [
      'The practical is a performance-based, timed session',
      'Sanitation and professional conduct are scored throughout',
      'The theory exam and state requirements complete the licence'
    ],
    afterwards: 'On a pass, complete the theory examination and the remaining state requirements to be licensed. On a fail, retake per your state board\'s policy after additional rehearsal.'
  }
};

export default data;
