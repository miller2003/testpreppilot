const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Allied-health & clinical-support certifications desk',
    bio: 'This desk covers allied-health certifications. Exam structure, fees and rules come from the certifying body\'s official pages (PTCB), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the PTCB Pharmacy Technician Certification Exam pages and BLS OOH Pharmacy Technicians (SOC 29-2052), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$41,380 median for pharmacy technicians (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "CPhT" — the PTCB Pharmacy Technician Certification validates pharmacy-technician competency, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Pharmacy Technicians, SOC 29-2052, which had a May 2024 median wage of $41,380, with the lowest 10 percent under $31,970 and the highest 10 percent above $52,870. The fit is direct: PTCB-certified technicians work in retail, hospital and mail-order pharmacies, compounding and supporting pharmacists, all inside this occupation. BLS counted 445,300 pharmacy technician jobs in 2024 and projects 5 percent growth from 2024 to 2034, about as fast as the average for all occupations, with about 31,600 openings a year, driven by an ageing population\'s medication needs. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as an employability and compliance signal — the PTCB is the most widely recognised pharmacy-technician credential, many employers require it, and several states mandate national certification for registration. Read the number as the market for the occupation, with the credential as the standard entry ticket.',
    rows: [
      { label: 'Median annual wage, pharmacy technicians', value: '$41,380', note: 'BLS OOH, SOC 29-2052, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $31,970', note: 'BLS OOH, SOC 29-2052, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $52,870', note: 'BLS OOH, SOC 29-2052, May 2024' },
      { label: 'Projected openings per year', value: '~31,600', note: 'BLS OOH, SOC 29-2052, 2024-2034' }
    ],
    growth: 'BLS projects 5 percent growth for pharmacy technicians from 2024 to 2034, about 31,600 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Pharmacy Technicians', url: 'https://www.bls.gov/ooh/healthcare/pharmacy-technicians.htm' }
  },
  passRate: {
    headline: 'PTCB publishes pass-rate data — the reported first-attempt pass rate for the PTCE is around 70-75% in recent years',
    summary: 'The Pharmacy Technician Certification Board publishes pass-rate information for the Pharmacy Technician Certification Exam (PTCE), and the reported first-attempt pass rate has historically clustered in the roughly 70-75 percent range in recent published cycles; we present it as the body\'s own reporting, noting the figure varies by cycle and year. What the PTCB also publishes is the format: the PTCE has 90 questions with a 2-hour time limit (1 hour 50 minutes of testing time plus a tutorial), delivered by computer at Pearson VUE centres or through remote proctoring, and the result is reported as pass/fail. The exam content follows the published exam outline: pharmacology for technicians; pharmacy law and regulations; sterile and non-sterile compounding; medication safety; pharmacy quality assurance; medication order entry and fill process; pharmacy inventory management; and pharmacy billing and reimbursement. The practical reading: the published pass rate reflects a demanding-but-passable exam, and the strongest predictor of success is structured preparation — candidates who complete a PTCB-recognised education program and work practice exams pass at higher rates than the overall cohort.',
    source: { label: 'PTCB - Pharmacy Technician Certification Exam (PTCE)', url: 'https://www.ptcb.org/' },
    caveat: 'PTCB publishes pass-rate data that varies by cycle; the figure above is the recent reported range, not a fixed number.'
  },
  studyPlan: {
    summary: 'The PTCE is a 90-question, 2-hour exam covering the published outline: pharmacology, pharmacy law, sterile and non-sterile compounding, medication safety, quality assurance, order entry and fill, inventory management, and billing and reimbursement. A defensible plan runs 60 to 100 hours over 6 to 8 weeks, ideally on top of a PTCB-recognised training program or pharmacy work experience. Weeks 1-2: pharmacology and pharmacy law — the top-200 drugs, their classes and uses, and the federal regulations (including the CSA schedules and HIPAA), because law and pharmacology carry large weights. Weeks 3-4: order entry and fill, and medication safety — prescriptions, sig codes, calculations, and the error-prevention rules. Weeks 5-6: compounding — sterile and non-sterile techniques, beyond-use dating and the safety requirements — and inventory and billing. Weeks 7-8: practice-exam drilling in volume, at least two full timed practice exams at the real 90-question format, with error-log review. The plan is calculation-heavy because the exam tests pharmacy math (dosages, dilutions, percentages) directly; candidates who are weak on math must add a review block.',
    totalHours: '60-100 hours over 6-8 weeks',
    weeks: [
      { label: 'Weeks 1-2', focus: 'Pharmacology and law', tasks: ['Top-200 drugs: classes, uses, brand/generic', 'Federal pharmacy law and CSA schedules', 'HIPAA and confidentiality rules'], hours: 25 },
      { label: 'Weeks 3-4', focus: 'Order entry, safety, math', tasks: ['Prescription interpretation and sig codes', 'Pharmacy calculations: dosages, dilutions', 'Medication safety and error prevention'], hours: 25 },
      { label: 'Weeks 5-6', focus: 'Compounding, inventory, billing', tasks: ['Sterile and non-sterile compounding', 'Beyond-use dating and safety', 'Inventory management and billing basics'], hours: 25 },
      { label: 'Weeks 7-8', focus: 'Drill and mocks', tasks: ['Practice-exam drilling in volume', 'Two full timed practice exams', 'Review weak outline areas'], hours: 20 }
    ],
    variants: [
      { label: 'Working pharmacy technician', detail: 'The job accelerates the order-entry and inventory phases; focus study on law, math and compounding.' },
      { label: 'Career-changer', detail: 'Add 2-3 weeks of pharmacy fundamentals and math review before the outline work.' }
    ]
  },
  prepStrategies: {
    summary: 'The PTCE rewards accuracy across a broad outline, so the dominant strategy is systematic coverage with calculation fluency: pharmacy math is tested directly, and candidates who are not fluent in dosage, dilution and percentage calculations lose a real block of items. Second, master pharmacology and law early — the top-200 drugs and the federal regulations carry large weights, and the law items reward precise knowledge of schedules, storage and recordkeeping. Third, drill the compounding material deliberately, including the beyond-use dating rules and the sterile technique standards, which are a distinct content area. Fourth, use the PTCB practice tools and recognised prep products, and hold yourself to 80 percent-plus on practice because the pass line is real. Fifth, take at least two full timed practice exams at the real 90-question, 2-hour format; the pacing and the exam interface are part of the test. Finally, confirm your eligibility path early — the PTCB requires meeting one of the eligibility routes (such as completing a recognised education program or equivalent work experience) before you can register.',
    items: [
      { title: 'Build calculation fluency', detail: 'Pharmacy math is tested directly; drill dosages, dilutions and percentages.' },
      { title: 'Master pharmacology and law', detail: 'The top-200 drugs and the federal regulations carry the largest weights.' },
      { title: 'Drill compounding', detail: 'Sterile technique and beyond-use dating are a distinct content area.' },
      { title: 'Hold to 80%+ on practice', detail: 'The pass line is real; leave no margin on a 90-question exam.' },
      { title: 'Confirm the eligibility route', detail: 'The PTCB requires a recognised education program or equivalent experience.' }
    ]
  },
  resourceComparison: {
    summary: 'PTCE prep spans the PTCB\'s official resources and third-party providers. The PTCB exam outline (free) and the PTCB practice exam are the authoritative scope and the closest official item style. The dominant prep providers — including the well-known pharmacy-technician prep companies — sell courses and question banks from roughly $30 for a book to $400 for a full course; many pharmacy-technician education programs bundle the prep with the training. Free resources include the outline, PTCB sample questions and pharmacy-community study groups. A realistic total budget is $200 to $1,500 including the exam fee (about $129, or $80 for PTCB-recognised program graduates in some cases) and the training program if you need one. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'PTCB exam outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'PTCB practice exam', values: ['~$29-$50', 'Official online practice', 'The closest official item style'] },
      { label: 'Prep courses and question banks', values: ['$30-$400', 'Books, courses and online banks', 'Structured preparation'] },
      { label: 'Pharmacy-technician training program', values: ['$500-$1,500', 'Classroom or online + externship', 'The eligibility path for new technicians'] },
      { label: 'PTCE exam', values: ['~$129 (lower for program grads)', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; PTCB fees vary by eligibility route; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common PTCE mistake is weak pharmacy math: candidates who focus on drug names and skip the calculation items lose a block of directly-testable points. The fix is a dedicated math review. The second mistake is under-preparing pharmacy law, which rewards precise knowledge of the CSA schedules, recordkeeping and storage rules. Third, candidates treat compounding as a minor topic, but sterile and non-sterile compounding is a distinct content area with specific rules. Fourth, some candidates register without confirming their eligibility route and are delayed at application; confirm it early. Finally, candidates who never take a full timed practice exam underestimate the 90-question, 2-hour pacing and the exam interface; two timed mocks are the minimum.',
    items: [
      { mistake: 'Weak pharmacy math', fix: 'Drill dosages, dilutions and percentages until fluent.' },
      { mistake: 'Under-preparing law', fix: 'Learn the CSA schedules, storage and recordkeeping precisely.' },
      { mistake: 'Treating compounding as minor', fix: 'Sterile and non-sterile compounding is a distinct tested area.' },
      { mistake: 'Delaying the eligibility route', fix: 'Confirm the education or experience requirement before studying.' },
      { mistake: 'Skipping timed mocks', fix: '90 questions in 2 hours; run two full timed practice exams.' }
    ]
  },
  questionTypes: {
    summary: 'The PTCE is a 90-question multiple-choice exam in 2 hours. The items cover the published outline — pharmacology, pharmacy law, compounding, medication safety, order entry and fill, inventory and billing — with a meaningful share of calculation items requiring pharmacy math, and scenario items describing pharmacy situations followed by the correct action. Samples below are editor-written illustrations of the published outline, not live exam items; they show the applied pharmacy style of the real items.',
    types: [
      { name: 'Pharmacology and law items', share: 'Largest block', detail: 'Drug classes, uses and the federal regulations.' },
      { name: 'Calculation items', share: 'Meaningful block', detail: 'Dosages, dilutions, percentages and flow rates.' },
      { name: 'Practice and safety items', share: 'Large block', detail: 'Order entry, compounding, safety and inventory.' }
    ],
    samples: [
      {
        prompt: 'A prescription calls for a patient to take 500 mg of a medication twice daily for 10 days. How many 500 mg tablets should be dispensed?',
        options: ['A. 20', 'B. 10', 'C. 40', 'D. 15'],
        answer: 'A',
        explanation: 'Two tablets per day (500 mg twice daily) for 10 days equals 20 tablets. The calculation is dose frequency (2 per day) times duration (10 days); the other options misapply the numbers.'
      },
      {
        prompt: 'Which federal schedule contains drugs with a high potential for abuse and no currently accepted medical use in the United States?',
        options: ['A. Schedule I', 'B. Schedule II', 'C. Schedule III', 'D. Schedule IV'],
        answer: 'A',
        explanation: 'Schedule I drugs have a high abuse potential and no currently accepted medical use. Schedule II-V drugs have accepted medical uses with decreasing control levels.'
      },
      {
        prompt: 'A technician notices a look-alike drug in the inventory bin next to the correct medication. The most appropriate action is to:',
        options: ['A. Separate the drugs and report the potential mix-up to the pharmacist', 'B. Leave them and be careful during filling', 'C. Discard the look-alike drug', 'D. Ignore it if the labels are different'],
        answer: 'A',
        explanation: 'Look-alike medications are a known safety risk; the correct response is to separate them and report the issue so the pharmacist can manage the inventory. Leaving them, discarding stock or ignoring the risk each fail the medication-safety duty.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published outline, not live exam items.'
  },
  examDay: {
    summary: 'The PTCE is a 90-question, 2-hour computer-based exam at a Pearson VUE centre or through remote proctoring. Bring the required identification matching your registration and your exam confirmation; personal items go in the locker. Arrive early — late arrivals may forfeit the appointment and fee. Pace at about 75 seconds per item, flag uncertain items for review, and budget extra time for the calculation items. Your result is reported as pass/fail on completion, with the official record following. If you do not pass, the PTCB retake policy defines the waiting period. On a pass, the CPhT certification is valid for two years and is renewed by completing 20 hours of continuing education (including at least 1 hour in pharmacy law) or by retaking the exam. The afterwards matters: log your continuing education as you earn it, because the PTCB audits renewals, and confirm your state\'s registration requirements alongside the national certification.',
    bring: ['Required identification matching your registration', 'Exam confirmation'],
    leave: ['Phone, smartwatch and all electronics', 'Notes and study materials', 'Personal bags beyond what the centre allows'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, ID requirements and delivery mode.' },
      { time: 'Exam', detail: '90 questions in 2 hours; pace ~75 seconds per item, flag and review.' },
      { time: 'After submit', detail: 'Pass/fail is reported; the official record follows.' },
      { time: 'Next', detail: 'Plan the 20-hour CE renewal cycle and state registration.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      '2 hours for 90 questions; the clock does not pause',
      'The certification renews every 2 years with 20 CE hours (or a retake)'
    ],
    afterwards: 'On a pass, your CPhT is valid for two years; earn 20 CE hours (including 1 law hour) or retake to renew. On a fail, retake per the PTCB policy after additional study.'
  }
};

export default data;
