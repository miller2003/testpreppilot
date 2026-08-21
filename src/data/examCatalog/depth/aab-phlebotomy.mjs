const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Allied-health & clinical-support certifications desk',
    bio: 'This desk covers allied-health certifications. Exam structure, fees and rules come from the certifying body\'s official pages (AAB, NREMT, NHA and state agencies), which are revised regularly; wage figures come from the Bureau of Labor Statistics Occupational Outlook Handbook series named by SOC code. When a figure is not published, we say so plainly rather than guessing.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified against the American Association of Bioanalysts (AAB) phlebotomy certification program pages and BLS OOH Phlebotomists (SOC 31-9097), May 2024 data.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: '$43,660 median for phlebotomists (BLS, May 2024)',
    summary: 'There is no Bureau of Labor Statistics occupation called "AAB-certified phlebotomist" — the AAB phlebotomy certification validates specimen-collection competency, and the wage question belongs to the occupation you perform with it. The closest official BLS occupation is Phlebotomists, SOC 31-9097, which had a May 2024 median wage of $43,660, with the lowest 10 percent under $34,250 and the highest 10 percent above $57,050. The fit is direct: certified phlebotomists draw blood and collect specimens in hospitals, clinics, labs and blood-donation centres, all inside this occupation. BLS counted 135,700 phlebotomist jobs in 2024 and projects a striking 17 percent growth from 2024 to 2034 — much faster than the average for all occupations — with about 18,900 openings a year, driven by the healthcare needs of an ageing population. The limitation to state plainly: the BLS median covers the whole occupation, credentialed or not, and the certification\'s value is as an employability and compliance signal — many employers and states require an accredited certification for phlebotomy roles. Read the number as the market for the occupation, with the credential as the entry ticket.',
    rows: [
      { label: 'Median annual wage, phlebotomists', value: '$43,660', note: 'BLS OOH, SOC 31-9097, May 2024' },
      { label: 'Lowest 10 percent', value: 'Under $34,250', note: 'BLS OOH, SOC 31-9097, May 2024' },
      { label: 'Highest 10 percent', value: 'Above $57,050', note: 'BLS OOH, SOC 31-9097, May 2024' },
      { label: 'Projected openings per year', value: '~18,900', note: 'BLS OOH, SOC 31-9097, 2024-2034' }
    ],
    growth: 'BLS projects 17 percent growth for phlebotomists from 2024 to 2034, about 18,900 openings per year.',
    source: { label: 'BLS Occupational Outlook Handbook - Phlebotomists', url: 'https://www.bls.gov/ooh/healthcare/phlebotomists.htm' }
  },
  passRate: {
    headline: 'AAB publishes the exam format and passing standard rather than a cohort pass rate',
    summary: 'The American Association of Bioanalysts does not publish cohort pass rates for its phlebotomy technician certification exam, and third-party estimates are not official data, so we do not treat them as authoritative. What AAB does publish is the program structure: the certification requires meeting the eligibility criteria — typically a high school diploma or equivalent plus a phlebotomy training program or documented experience — and passing the AAB phlebotomy certification exam, which is a computer-based multiple-choice examination administered through AAB\'s testing program. The exam covers the phlebotomist\'s scope: specimen collection (venipuncture, capillary draws), specimen handling and processing, safety and infection control, and professionalism. The passing standard is set by AAB\'s psychometric process, and AAB publishes the application handbook with the current exam details at application time. The absence of a published pass rate is not an absence of standards: the exam validates that a candidate can perform phlebotomy safely and correctly, which is what employers and states check. The practical reading: complete an accredited training program with hands-on draws, study the AAB exam content outline from the handbook, and prepare for a straightforward knowledge-and-safety exam.',
    source: { label: 'American Association of Bioanalysts - Phlebotomy Technician certification', url: 'https://www.aab.org/aab/PhlebotomyCertification.asp' },
    caveat: 'AAB publishes the program structure and exam outline but no cohort pass rate; the current exam details are in the AAB application handbook.'
  },
  studyPlan: {
    summary: 'The AAB phlebotomy certification requires meeting eligibility first — typically a high school diploma or equivalent plus completion of a phlebotomy training program (usually 40-100 hours of classroom and clinical practice) or equivalent experience — then passing the AAB certification exam. The exam covers specimen collection, handling and processing, safety and infection control, and professionalism, per the AAB exam content outline. A defensible plan runs 20 to 40 hours of exam study after the training program, over 2 to 3 weeks. Week one: work the AAB exam content outline and the phlebotomy textbook chapters on venipuncture and capillary collection, including order of draw and additives. Week two: cover specimen handling, safety and infection control — the items where clinical students often lose points — and the professional standards of the role. Week three: drill practice questions in volume and take the AAB practice exam, then schedule the certification exam. The plan assumes the hands-on training is complete; the exam rewards knowing the why behind collection procedures, so study the reasons for each step, not just the steps.',
    totalHours: '20-40 hours of exam study over 2-3 weeks (after the required training program)',
    weeks: [
      { label: 'Week 1', focus: 'Collection procedures', tasks: ['Venipuncture and capillary collection procedures', 'Order of draw, additives and tubes', 'Troubleshooting failed draws'], hours: 12 },
      { label: 'Week 2', focus: 'Handling, safety and professionalism', tasks: ['Specimen handling, processing and storage', 'Safety, infection control and HIPAA basics', 'Professional standards of the role'], hours: 12 },
      { label: 'Week 3', focus: 'Drill and exam', tasks: ['Practice-question drilling in volume', 'Take the AAB practice exam', 'Schedule and sit the certification exam'], hours: 10 }
    ],
    variants: [
      { label: 'Training program completed recently', detail: 'The clinical material is fresh; focus study on handling, safety and the exam style.' },
      { label: 'Experience-based eligibility', detail: 'Add 1 week reviewing the textbook basics before the drill phase.' }
    ]
  },
  prepStrategies: {
    summary: 'The AAB phlebotomy exam rewards knowing the why behind collection procedures, so the dominant strategy is to study the reasons for each step — why the order of draw matters, what each additive does, why tubes must fill to the correct level — because the exam tests understanding, not just steps. Second, use the AAB exam content outline and the application handbook as the scope map; they list what can appear, and the AAB practice exam is the closest thing to the real item style. Third, drill the safety and infection control material deliberately: it is a distinct block, and candidates who focus only on venipuncture mechanics routinely lose those items. Fourth, study specimen handling and processing — centrifugation, storage and transport — which is a larger share of the exam than many candidates expect. Finally, remember that the certification rides on the training and eligibility: complete the hands-on program with sufficient successful draws, because the exam validates a skill, and employers will verify the clinical experience behind the credential.',
    items: [
      { title: 'Study the why, not just the steps', detail: 'Order of draw, additives and fill levels are tested as understanding.' },
      { title: 'Use the AAB outline and handbook', detail: 'The authoritative scope; the practice exam is the closest item style.' },
      { title: 'Drill safety and infection control', detail: 'A distinct block; collection-only study loses those items.' },
      { title: 'Learn specimen processing', detail: 'Centrifugation, storage and transport are a larger share than expected.' },
      { title: 'Complete the clinical training', detail: 'The exam validates a skill; employers verify the draws behind it.' }
    ]
  },
  resourceComparison: {
    summary: 'Phlebotomy certification costs are dominated by the training program, not the exam. Accredited phlebotomy training programs range from roughly $700 to $2,500 depending on the institution and whether they include the clinical hours; community-college programs are often the lower-cost route. The AAB certification fee is typically about $100-$150 (with reduced rates for students in some programs), and the AAB application handbook and exam content outline are free. Study materials — phlebotomy textbooks ($50-$100) and practice-question products ($30-$80) — are modest. A realistic total budget is $800 to $2,800 including training. Prices below are list prices as of mid-2026 and change frequently; we rank nothing by commission.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'AAB handbook + exam outline', values: ['Free', 'Official PDF', 'The authoritative scope; read it first'] },
      { label: 'Accredited training program', values: ['$700-$2,500', 'Classroom + clinical hours', 'The eligibility and hands-on skill'] },
      { label: 'Phlebotomy textbook', values: ['$50-$100', 'Printed or digital book', 'The reference for the exam content'] },
      { label: 'Practice-question products', values: ['$30-$80', 'Online practice items', 'Volume drilling before the exam'] },
      { label: 'AAB certification exam', values: ['~$100-$150', 'Computer-based exam', 'The certification itself'] }
    ],
    footnote: 'List prices as of mid-2026, subject to change; AAB fees and program costs vary; no commission or affiliate ranking is implied.'
  },
  commonMistakes: {
    summary: 'The most common AAB phlebotomy mistake is focusing study entirely on venipuncture mechanics and neglecting specimen handling, safety and infection control — the blocks where many candidates lose points. The fix is full coverage of the exam content outline. The second mistake is memorising the steps without the reasons; the exam tests why the order of draw matters and what each additive does, so study the underlying logic. Third, candidates under-prepare the professional and safety items — HIPAA, infection control and professionalism — treating them as common sense when they are tested precisely. Fourth, some candidates rush the eligibility step and arrive at the exam without the documented clinical hours; confirm the training requirement before studying. Finally, treating the exam as the whole credential is the quiet mistake: employers verify the clinical experience and the certification together, so keep the training documentation and be ready to demonstrate the skill in a working interview.',
    items: [
      { mistake: 'Studying only venipuncture', fix: 'Cover handling, safety and infection control; they are distinct blocks.' },
      { mistake: 'Memorising steps without reasons', fix: 'Learn why the order of draw and additives matter.' },
      { mistake: 'Under-preparing professional items', fix: 'HIPAA, infection control and professionalism are tested precisely.' },
      { mistake: 'Rushing the eligibility step', fix: 'Confirm the training requirement before studying for the exam.' },
      { mistake: 'Treating the exam as the whole credential', fix: 'Employers verify the clinical experience and certification together.' }
    ]
  },
  questionTypes: {
    summary: 'The AAB phlebotomy certification exam is a computer-based multiple-choice examination covering the phlebotomist\'s scope: specimen collection, specimen handling and processing, safety and infection control, and professionalism. Many items are scenario-based — a described patient or collection situation followed by the correct procedure, tube, handling step or safety practice — while others test knowledge directly. Samples below are editor-written illustrations of the AAB exam content outline, not live exam items; they show the clinical-safety style of the real items.',
    types: [
      { name: 'Collection procedure items', share: 'Majority', detail: 'Venipuncture, capillary draws, order of draw and troubleshooting.' },
      { name: 'Handling and processing items', share: 'Large minority', detail: 'Specimen handling, centrifugation, storage and transport.' },
      { name: 'Safety and professional items', share: 'Large minority', detail: 'Infection control, HIPAA and professional standards.' }
    ],
    samples: [
      {
        prompt: 'A phlebotomist must collect a coagulation test in a light-blue tube. Which order-of-draw rule applies?',
        options: ['A. Collect the light-blue tube before tubes with additives that could contaminate it', 'B. Collect it after the EDTA tube', 'C. Collect it last in the sequence', 'D. Order does not matter for coagulation tests'],
        answer: 'A',
        explanation: 'The light-blue (citrate) tube must be collected before tubes containing additives that could contaminate the specimen, per the standard order of draw. Collecting it after EDTA or last risks contamination and an invalid coagulation result.'
      },
      {
        prompt: 'A phlebotomist accidentally sticks their hand with a used needle. The first action should be to:',
        options: ['A. Wash the site and follow the facility\'s exposure-reporting protocol', 'B. Continue the draw and report later', 'C. Apply a bandage and ignore it', 'D. Test the needle for contamination'],
        answer: 'A',
        explanation: 'A needle-stick exposure requires immediate site washing and the facility\'s exposure-control protocol — reporting and follow-up care. Continuing the draw, ignoring it or testing the needle each delay the required response.'
      },
      {
        prompt: 'Which of the following is an anticoagulant used in lavender-top (EDTA) tubes?',
        options: ['A. EDTA', 'B. Sodium citrate', 'C. Heparin', 'D. No additive'],
        answer: 'A',
        explanation: 'Lavender-top tubes contain EDTA, the anticoagulant used for hematology specimens. Sodium citrate is the light-blue tube\'s additive, heparin is in green tubes, and lavender tubes are not additive-free.'
      }
    ],
    note: 'Samples are editor-written illustrations of the AAB exam content outline, not live exam items.'
  },
  examDay: {
    summary: 'The AAB phlebotomy certification exam is a computer-based multiple-choice exam scheduled through AAB\'s testing program, typically at a testing centre or through the designated testing platform. Bring the required identification and your exam confirmation; arrive on time — late arrivals may forfeit the appointment and fee. The exam is timed; pace yourself to cover every item and review flagged questions. Your result is reported after the exam, and AAB issues the certification and documentation on a pass. If you do not pass, the AAB handbook describes the retake process. On a pass, the certification is valid for a defined period and is renewed through continuing education or retesting per AAB\'s current policy — check the handbook for the exact cycle. The afterwards matters: keep your training documentation, because employers verify the clinical experience behind the credential, and check whether your state or employer requires a specific phlebotomy certification.',
    bring: ['Required identification per the exam confirmation', 'Exam confirmation and any required forms'],
    leave: ['Personal electronics and study materials', 'Any assumption that the exam replaces the clinical training requirement'],
    timeline: [
      { time: 'Before the exam', detail: 'Confirm the appointment, identification requirements and location or platform.' },
      { time: 'Exam', detail: 'Timed computer-based exam covering collection, handling, safety and professionalism.' },
      { time: 'After submit', detail: 'Result is reported; a pass issues the certification and documentation.' },
      { time: 'Next', detail: 'Keep the training documentation and note the renewal cycle from the handbook.' }
    ],
    rules: [
      'The exam is computer-based and timed',
      'Eligibility (training or experience) must be met before sitting',
      'Renewal follows AAB\'s current policy — check the handbook'
    ],
    afterwards: 'On a pass, keep your documentation and note the renewal cycle. On a fail, follow the AAB retake process after additional study.'
  }
};

export default data;
