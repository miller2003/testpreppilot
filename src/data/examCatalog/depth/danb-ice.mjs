const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Dental & allied-health certifications desk',
    bio: 'This desk covers dental-assisting certifications. Exam structure, fees and rules come from the certifying body\'s official pages (DANB), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the DANB Infection Control (ICE) exam pages and BLS OOH Dental Assistants (SOC 31-9091), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$47,840 median for dental assistants (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "ICE" — the DANB Infection Control Exam validates dental-assistant infection-control knowledge, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Dental Assistants, SOC 31-9091, which had a May 2024 median wage of $47,840, with the lowest 10 percent under $33,900 and the highest 10 percent above $61,420. The fit is direct: DANB-certified dental assistants work in dental offices, clinics and public-health settings, and the ICE credential is one of the components of the DANB Certified Dental Assistant (CDA) certification, which many employers and states require or prefer. BLS counted 338,200 dental assistant jobs in 2024 and projects 9 percent growth from 2024 to 2034, faster than the average for all occupations, with about 28,300 openings a year. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as an employability and safety signal — employers weigh the DANB credentials in hiring, and several states require infection-control certification for expanded duties. Read the number as the market for the occupation the credential serves.',
    rows: [
      { label: 'Median annual wage, dental assistants', value: '$47,840', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $33,900', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $61,420', note: 'BLS OOH, SOC 31-9091, May 2024' },
      { label: 'Projected openings per year', value: '~28,300', note: 'BLS OOH, SOC 31-9091, 2024-2034' }
    ],
    growth: 'BLS projects 9 percent growth for dental assistants from 2024 to 2034, about 28,300 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Dental Assistants', url: 'https://www.bls.gov/ooh/healthcare/dental-assistants.htm' }
  },
  passRate: {
    headline: 'DANB publishes pass rates by exam — the ICE pass rate is not published as a single national figure, and DANB reports performance by section',
    summary: 'DANB does not publish a single national pass rate for the ICE exam in a fixed annual figure, and third-party estimates are not official data, so we do not treat them as authoritative. What DANB does publish is the format and the passing standard: the ICE exam is a computer-based test of 100 scored multiple-choice questions with a 75-minute time limit, and the result is reported as pass/fail with a section-by-section performance breakdown. The exam is delivered at Pearson VUE centres or through remote proctoring. The exam content follows the published ICE outline: preventing cross-contamination (personal protective equipment, hand hygiene, and the infection-control work practices), preventing cross-contamination with dental unit waterlines and biofilms, and the dental-unit waterline and surface-disinfection requirements. The absence of a published pass rate is not an absence of standards: the 100-question format rewards precise knowledge of the infection-control protocols, and DANB\'s section breakdown lets candidates see exactly where they fell short. The practical reading: study the DANB ICE outline and the infection-control standards, and hold yourself to 80 percent-plus on practice, because the licensure-adjacent pass line leaves little margin.',
    source: { label: 'DANB - Infection Control (ICE) Exam', url: 'https://www.danb.org/exams-certifications/exams/infection-control-exam' },
    caveat: 'DANB publishes the format and section performance but no single national pass rate.'
  },
  studyPlan: {
    summary: 'The DANB ICE exam is a 100-question, 75-minute computer-based exam built on the published outline: preventing cross-contamination (PPE, hand hygiene, and the work practices), preventing cross-contamination with dental unit waterlines and biofilms, and the surface-disinfection and waterline requirements. A defensible plan runs 30 to 50 hours over 3 to 4 weeks, ideally on top of dental-assisting training or work experience. Week one: the fundamentals of infection control — the chain of infection, PPE selection and use, hand hygiene and the standard precautions — because the exam assumes clinical fluency. Week two: the work practices — instrument processing, the sterilisation methods (autoclave cycles, chemical and dry-heat sterilisation), and the storage of sterile instruments. Week three: waterlines and surface disinfection — the biofilm problem, the waterline treatment, and the surface-disinfection agents and procedures. Week four: practice-question drilling in volume and timed practice exams at the real 100-question, 75-minute format. The plan is protocol-heavy because the exam rewards precise knowledge of the procedures; candidates who memorise general hygiene and skip the specifics fail the exact-number items.',
    totalHours: '30-50 hours over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Infection-control fundamentals', tasks: ['The chain of infection and standard precautions', 'PPE selection and hand hygiene', 'Occupational exposure management'], hours: 10 },
      { label: 'Week 2', focus: 'Instrument processing', tasks: ['Cleaning, packaging and sterilisation methods', 'Autoclave cycles and monitoring', 'Sterile storage and handling'], hours: 12 },
      { label: 'Week 3', focus: 'Waterlines and surfaces', tasks: ['Dental unit waterline biofilms', 'Waterline treatment protocols', 'Surface disinfection agents and procedures'], hours: 12 },
      { label: 'Week 4', focus: 'Drill and mocks', tasks: ['Practice-question drilling in volume', 'Timed practice exams at the real format', 'Review weak outline areas'], hours: 12 }
    ],
    variants: [
      { label: 'Working dental assistant', detail: 'The clinical protocols are familiar; focus study on the exact numbers — cycles, times and agents.' },
      { label: 'Student completing training', detail: 'Add 1-2 weeks of infection-control fundamentals before the full plan.' }
    ]
  },
  prepStrategies: {
    summary: 'The ICE exam rewards precise knowledge of the infection-control protocols, so the dominant strategy is learning the exact numbers and steps: sterilisation cycles and times, the high-level vs intermediate vs low-level disinfection categories, the waterline treatment protocols and the PPE specifics, because the exam tests them precisely. Second, use the DANB ICE outline as the scope map and the DANB practice test as the item-style reference; DANB\'s official materials are the closest thing to the real exam. Third, master the instrument-processing sequence — cleaning before sterilisation, the packaging rules and the steriliser monitoring — a distinct and heavily weighted block. Fourth, drill the waterline and surface-disinfection material, which candidates with only general hygiene knowledge routinely miss. Finally, take at least two timed practice exams at the real 100-question, 75-minute format; the pace is tight, and the section breakdown on the real exam rewards balanced coverage.',
    items: [
      { title: 'Learn the exact numbers', detail: 'Cycles, times, disinfection levels and agents are tested precisely.' },
      { title: 'Use the DANB outline and practice test', detail: 'The authoritative scope and the closest item style.' },
      { title: 'Master instrument processing', detail: 'Cleaning, packaging, sterilisation and monitoring is a heavily weighted block.' },
      { title: 'Drill waterlines and surfaces', detail: 'A distinct area that general-hygiene-only study misses.' },
      { title: 'Run two timed practice exams', detail: '100 questions in 75 minutes is a tight pace; rehearse it.' }
    ]
  },
  resourceComparison: {
    summary: 'DANB ICE prep is inexpensive because the official materials are low-cost. The DANB ICE outline (free) and the DANB practice test (about $35) are the core resources; dental-assisting textbooks ($50-$150) cover the infection-control material in depth, and many dental-assisting programs bundle review materials. Third-party question banks ($30-$100) add volume. The exam fee is about $145-$185 depending on DANB membership and whether it is taken as part of the CDA bundle. A realistic total budget is $200 to $500 including the exam fee. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'DANB ICE outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'DANB practice test', values: ['~$35', 'Official online practice', 'The closest official item style'] },
      { label: 'Dental-assisting textbooks', values: ['$50-$150', 'Printed or digital book', 'Infection-control depth'] },
      { label: 'Third-party question banks', values: ['$30-$100', 'Online practice items', 'Drilling volume'] },
      { label: 'ICE exam', values: ['~$145-$185', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; DANB fees vary by membership and bundle; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common ICE mistake is studying general hygiene instead of the specific protocols: candidates who know the chain of infection but not the sterilisation cycles, disinfection levels or waterline requirements miss the exact-number items that dominate the exam. The fix is protocol-specific study. The second mistake is confusing the disinfection levels — high, intermediate and low — and which surface or situation each applies to; the exam tests the categories precisely. Third, candidates under-prepare the instrument-processing sequence, a heavily weighted block. Fourth, some candidates never take a timed practice exam and misjudge the 75-minute pace. Finally, candidates treat ICE as a standalone checkbox without understanding it is a component of the broader DANB CDA certification; plan the full credential path.',
    items: [
      { mistake: 'Studying general hygiene', fix: 'Learn the specific protocols: cycles, times, levels and agents.' },
      { mistake: 'Confusing the disinfection levels', fix: 'High, intermediate and low levels and their uses are tested precisely.' },
      { mistake: 'Under-preparing instrument processing', fix: 'The cleaning-to-sterilisation sequence is a heavily weighted block.' },
      { mistake: 'Skipping timed practice', fix: '100 questions in 75 minutes; run timed practice exams.' },
      { mistake: 'Missing the CDA path', fix: 'ICE is a component of the DANB CDA; plan the full credential.' }
    ]
  },
  questionTypes: {
    summary: 'The ICE exam is a 100-question multiple-choice exam in 75 minutes. The items test the published outline: preventing cross-contamination, the waterline and biofilm requirements, and the disinfection and sterilisation protocols — with a heavy concentration on the exact procedures, numbers and categories. Samples below are editor-written illustrations of the published outline, not live exam items; they show the protocol-precision style of the real items.',
    types: [
      { name: 'Sterilisation and processing items', share: 'Largest block', detail: 'Cycles, times, monitoring and sterile storage.' },
      { name: 'Disinfection-level items', share: 'Large block', detail: 'High, intermediate and low levels and their uses.' },
      { name: 'Waterline and PPE items', share: 'Meaningful block', detail: 'Biofilm control and protective equipment specifics.' }
    ],
    samples: [
      {
        prompt: 'A surface that comes into contact with mucous membranes but is not critical should be cleaned and disinfected with which level of disinfectant?',
        options: ['A. Intermediate-level disinfectant', 'B. Low-level disinfectant only', 'C. Soap and water', 'D. No disinfection is needed'],
        answer: 'A',
        explanation: 'Semi-critical surfaces require intermediate-level disinfection. Low-level disinfectants serve non-critical surfaces, and soap-and-water or no disinfection does not meet the standard for mucous-membrane contact.'
      },
      {
        prompt: 'The most reliable method for monitoring that a sterilisation cycle reached the required conditions is:',
        options: ['A. A biological indicator (spore test)', 'B. The autoclave timer', 'C. Visual inspection of the instruments', 'D. The packaging colour'],
        answer: 'A',
        explanation: 'Biological indicators (spore tests) verify that sterilisation conditions were actually achieved — the most reliable monitoring method. Timers, visual inspection and packaging indicators are less definitive.'
      },
      {
        prompt: 'Before sterilisation, instruments must first be:',
        options: ['A. Cleaned to remove debris and bioburden', 'B. Wrapped in thick layers', 'C. Soaked in disinfectant indefinitely', 'D. Dried with a cloth only'],
        answer: 'A',
        explanation: 'Cleaning must precede sterilisation — debris and bioburden shield microorganisms from the sterilisation process. Wrapping, soaking or drying alone do not substitute for cleaning.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The DANB ICE exam is a 100-question, 75-minute computer-based exam at a Pearson VUE centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 45 seconds per item, flag uncertain items for review, and budget the tight window carefully. Your result is reported as pass/fail after the exam, with the section-by-section performance breakdown. If you do not pass, the DANB retake policy and fee apply. On a pass, the ICE component counts toward the DANB Certified Dental Assistant (CDA) certification, which requires passing ICE plus the other components (typically RHS and GC), and DANB certifications renew on a cycle with continuing education. The afterwards matters: plan the remaining CDA components and the renewal cycle.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '100 questions in 75 minutes; pace ~45 seconds per item.' },
      { time: 'After submit', detail: 'Pass/fail is reported with the section breakdown.' },
      { time: 'Next', detail: 'Plan the remaining CDA components and the renewal cycle.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '75 minutes for 100 questions; the clock does not pause',
      'ICE counts toward the DANB CDA certification'
    ],
    afterwards: 'On a pass, apply the ICE component toward the CDA and plan the renewal cycle. On a fail, retake per the DANB policy after additional outline study.'
  }
};

export default data;
