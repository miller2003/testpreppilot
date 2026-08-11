const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Beauty, trades & skilled-licensure desk',
    bio: 'This desk covers beauty and skilled-licensure exams. Exam structure, fees and rules come from the testing body (NIC) and the state barber boards, which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the NIC barber theory exam pages and BLS OOH Barbers (SOC 39-5011), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$42,850 median for barbers (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "NIC barber" — the NIC barber theory examination is the licensing exam used by many state barber boards, and the wage question belongs to the occupation you enter with it. The closest official BLS occupation is Barbers, SOC 39-5011, which had a May 2024 median wage of $42,850, with the lowest 10 percent under $27,380 and the highest 10 percent above $72,940. The fit is direct: passing the barber licensing exams — theory and practical — plus the state requirements licenses you to practice barbering, and BLS counted 136,500 barber jobs in 2024, projecting 8 percent growth from 2024 to 2034, faster than the average for all occupations, with about 18,100 openings a year. The limitation to state plainly: the BLS median covers all barbers, licensed or not, and barber income is tip- and client-driven, so the median understates what established barbers with a loyal clientele earn and overstates what new licensees earn while building a book. Read the number as the market for the occupation the licence unlocks, and note that the NIC theory exam is one component — the state board also requires the practical examination and the state\'s training hours.',
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
    headline: 'NIC publishes the format and the typical passing line (75%) — and does not publish cohort pass rates',
    summary: 'The National Interstate Council of State Boards of Cosmetology (NIC) does not publish cohort pass rates for the barber theory examination, and state boards do not publish a combined national figure, so any percentage you see online is a state-specific report or a third-party estimate; we do not treat them as authoritative. What the NIC does publish is the format: the barber theory examination is a computer-based, multiple-choice exam of roughly 100 questions with a 2-hour time limit, and the passing line is set by the state board using the exam — the commonly used passing standard is 75 percent, but each state determines the cut score and you should confirm your state\'s number. The exam content follows the NIC barber examination content outline: barbering fundamentals (tools, sanitation and safety), the science of barbering (hair, skin and scalp), haircutting and styling, shaving and facial services, chemical services, and state-law and professional-practice topics. The absence of a published pass rate is not an absence of standards: the exam is a licensing gate, and the state boards use it to verify that candidates have the knowledge the training hours were meant to build. The practical reading: study your state\'s cut score, complete the state-required training hours first, and drill the theory outline with practice questions.',
    source: { label: 'NIC - Barber Theory Examination', url: 'https://www.nictesting.org/' },
    caveat: 'NIC publishes the format and outline but no cohort pass rate; the passing line is set by each state board, commonly 75%.'
  },
  studyPlan: {
    summary: 'The NIC barber theory examination is a roughly 100-question, 2-hour computer-based exam built on the NIC content outline: barbering fundamentals, the science of barbering, haircutting and styling, shaving and facial services, chemical services, and professional practice and state law. A defensible plan runs 40 to 70 hours over 4 to 6 weeks, on top of the state-required training hours (typically 1,000-1,500 hours of barber school). Weeks 1-2: the fundamentals and science — sanitation, disinfection, tools, and the structure and disorders of hair, skin and scalp — because the science items reward precise terminology. Weeks 3-4: the services — haircutting and styling techniques, shaving and facial services, and chemical services — learning the procedures and the safety rules. Week 5: professional practice and state law — the board rules, sanitation laws and professional conduct. Week 6: practice-question drilling in volume and timed practice exams at the real format. The plan is knowledge-heavy because the theory exam tests what the training taught; the practical examination is a separate hands-on component.',
    totalHours: '40-70 hours over 4-6 weeks (after the state training hours)',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Fundamentals and science', tasks: ['Sanitation, disinfection and tools', 'Hair, skin and scalp structure and disorders', 'Terminology precision'], hours: 20 },
      { label: 'Weeks 3-4', focus: 'Services', tasks: ['Haircutting and styling techniques', 'Shaving and facial services', 'Chemical services and their safety rules'], hours: 25 },
      { label: 'Week 5', focus: 'Practice and state law', tasks: ['Professional practice and conduct', 'State board rules and sanitation laws', 'Practice-question drilling'], hours: 12 },
      { label: 'Week 6', focus: 'Timed mocks', tasks: ['Two timed practice exams at the real format', 'Review weak outline areas', 'Schedule the examination'], hours: 10 }
    ],
    variants: [
      { label: 'Recent barber-school graduate', detail: 'The services content is fresh; focus study on the science terminology and state-law blocks.' },
      { label: 'Transferring from another state', detail: 'Confirm your state\'s reciprocity rules and the exam your state uses; some states accept the NIC exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The barber theory exam rewards precise knowledge of the NIC content outline, so the dominant strategy is systematic coverage with practice-question drilling: the exam draws from every outline area, and candidates who study only the haircutting material they enjoy fail the science and state-law items. Second, master the sanitation and safety material exactly — the disinfection levels, the tool-sterilisation rules and the state sanitation laws are tested precisely, and they are the most commonly missed block. Third, learn the terminology: the science items reward knowing the exact names of hair, skin and scalp structures and disorders, so build flashcards. Fourth, use NIC-style practice exams, the closest thing to the real item style, and hold yourself to 80 percent-plus on practice because the 75 percent line leaves little margin. Finally, remember the theory exam is one half of licensing — the practical examination and the state\'s training-hour requirement complete the path, so plan both.',
    items: [
      { title: 'Cover every outline area', detail: 'The exam draws from all areas; science and law items punish one-topic study.' },
      { title: 'Master sanitation and safety', detail: 'Disinfection levels and state sanitation laws are the most-missed block.' },
      { title: 'Build terminology flashcards', detail: 'Hair, skin and scalp structures and disorders are tested by name.' },
      { title: 'Hold to 80%+ on practice', detail: 'The 75% line leaves little margin.' },
      { title: 'Plan the practical exam', detail: 'Theory is one half; the practical and state hours complete the path.' }
    ]
  },
  resourceComparison: {
    summary: 'Barber theory prep is inexpensive because the main cost is the training program, not the study materials. The NIC content outline (free) and NIC-style practice exams ($20-$80) are the core study resources; barber textbooks ($50-$150) cover the science and services material in depth, and many barber schools bundle review materials with the program. Free resources include the NIC outline, state board handbooks and state-law summaries. The exam fee is set by the state board, commonly $50-$150 for the theory examination. A realistic total budget is $100 to $400 for the exam and materials, on top of the training program cost. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NIC content outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Barber textbooks', values: ['$50-$150', 'Printed or digital book', 'Science and services depth'] },
      { label: 'Practice exams', values: ['$20-$80', 'Online practice items', 'The closest item style'] },
      { label: 'State board handbook', values: ['Free', 'Official state publication', 'Your state\'s rules and cut score'] },
      { label: 'Barber theory exam', values: ['~$50-$150 (state-set)', 'Computer-based exam', 'The licensing gate'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; exam fees are set by state boards; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common barber theory mistake is studying only the service techniques: candidates who know haircutting procedures but skip the science and sanitation material fail the items on terminology, disinfection and state law. The fix is full-outline coverage. The second mistake is treating the theory exam as the whole licence — the practical examination and the state training hours are separate requirements, and candidates who pass theory but neglect the practical plan stall at the finish. Third, candidates misremember the sanitation rules, which are tested precisely and carry real weight. Fourth, some candidates never take a timed practice exam and misjudge the 2-hour pace. Finally, candidates who do not confirm their state\'s cut score study toward a vague national target; your state\'s line is the number that matters.',
    items: [
      { mistake: 'Studying services only', fix: 'Cover science, sanitation and state law; the exam draws from all areas.' },
      { mistake: 'Neglecting the practical exam', fix: 'Theory is one half; plan the practical and the state hours.' },
      { mistake: 'Misremembering sanitation rules', fix: 'Disinfection levels and laws are tested precisely.' },
      { mistake: 'Skipping timed practice', fix: '~100 questions in 2 hours; run timed practice exams.' },
      { mistake: 'Ignoring your state\'s cut score', fix: 'Confirm your state\'s passing line and target practice above it.' }
    ]
  },
  questionTypes: {
    summary: 'The NIC barber theory examination is a computer-based multiple-choice exam of roughly 100 questions in 2 hours. The items cover the NIC content outline: barbering fundamentals, the science of barbering, haircutting and styling, shaving and facial services, chemical services, and professional practice and state law — with many items testing precise terminology, procedure rules and sanitation requirements. Samples below are editor-written illustrations of the published outline, not live exam items; they show the knowledge style of the real items.',
    types: [
      { name: 'Science and terminology items', share: 'Large block', detail: 'Hair, skin and scalp structures and disorders.' },
      { name: 'Service procedure items', share: 'Large block', detail: 'Haircutting, shaving, styling and chemical procedures.' },
      { name: 'Sanitation and law items', share: 'Meaningful block', detail: 'Disinfection levels, sanitation laws and professional practice.' }
    ],
    samples: [
      {
        prompt: 'Which disinfection level is required for implements that contact broken skin?',
        options: ['A. Hospital-grade disinfectant after cleaning', 'B. Soap and water only', 'C. A household cleaner', 'D. Alcohol applied briefly'],
        answer: 'A',
        explanation: 'Implements that contact broken skin require hospital-grade disinfection after cleaning. Soap and water, household cleaners or brief alcohol application do not meet the disinfection standard for blood-exposure risk.'
      },
      {
        prompt: 'The portion of the hair that lies beneath the skin surface is the:',
        options: ['A. Root', 'B. Shaft', 'C. Cuticle', 'D. Cortex'],
        answer: 'A',
        explanation: 'The root is the part of the hair below the skin surface; the shaft is the visible portion above, and the cuticle and cortex are layers of the hair structure.'
      },
      {
        prompt: 'When performing a shave, the razor should generally be held at which angle to the skin?',
        options: ['A. A low angle, approximately 30 degrees or less', 'B. A 90-degree angle', 'C. A 60-degree angle', 'D. Any angle works'],
        answer: 'A',
        explanation: 'A low angle — roughly 30 degrees or less — is the correct shaving angle to avoid cutting the skin. Steeper angles increase the risk of nicks and cuts.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The NIC barber theory examination is a computer-based exam of roughly 100 questions in 2 hours, taken at the testing site your state board designates. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 70 seconds per item, flag uncertain items for review, and finish with time to spare. Your result is reported after scoring, and the state board receives the score; the passing line is your state\'s cut score. If you do not pass, the state board defines the retake policy and wait. On a pass, you still complete the practical examination and the remaining state requirements before the licence is issued. The afterwards matters: schedule the practical exam promptly while the material is fresh, and complete the state board\'s licensing paperwork.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the site allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the site, ID requirements and your state\'s cut score.' },
      { time: 'Exam', detail: '~100 questions in 2 hours; pace ~70 seconds per item.' },
      { time: 'After submit', detail: 'Result is reported to the state board; your score reflects your state\'s cut line.' },
      { time: 'Next', detail: 'Schedule the practical exam and complete the remaining state requirements.' }
    ],
    rules: [
      'The exam is computer-based and closed book',
      '~100 questions in 2 hours; the clock does not pause',
      'The theory exam is one component; the practical exam and state hours follow'
    ],
    afterwards: 'On a pass, complete the practical examination and the state requirements to be licensed. On a fail, retake per your state board\'s policy after additional outline study.'
  }
};

export default data;
