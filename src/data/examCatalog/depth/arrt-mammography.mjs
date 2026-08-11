const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Radiologic & medical imaging certifications desk',
    bio: 'The ARRT Mammography exam structure and scoring are drawn from the ARRT Examination Content Specifications and ARRT candidate materials, which are updated on a published revision cycle; ARRT publishes pass-rate statistics in its Annual Exam Report. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where ARRT or BLS does not publish a figure, we say so plainly rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against ARRT Mammography candidate requirements and content specifications, and the BLS OOH Radiologic and MRI Technologists page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Radiologic and MRI technologists earned a May 2024 BLS median of $77,660, and the Mammography credential (R.T.(R)(M)) is the standard qualification for breast-imaging roles.',
    summary: 'The salary conclusion for the Mammography credential follows the imaging-specialty pattern: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $77,660 for SOC 29-2034 Radiologic and MRI Technologists, with the lowest 10 percent below $52,360 and the highest 10 percent above $106,990. The BLS classifies by job duty rather than certificate, so the (M) designation does not appear as its own wage line, but employers treat R.T.(R)(M) as the required or strongly preferred qualification for mammography positions, and breast-imaging technologists typically sit at or above the imaging median because the role demands specialized positioning skill, patient-communication ability, and image-quality judgment under the MQSA regulatory framework. Mammography work also tends to follow predictable outpatient schedules — many positions are in dedicated breast centers and imaging clinics with limited on-call — which candidates weigh against the slightly narrower scope of the role compared with general radiography. The BLS projects about 4 percent growth for radiologic and MRI technologists from 2024 to 2034 with roughly 10,800 openings per year, and breast-imaging demand tracks the aging population and the ongoing national screening-volume debate, which has kept mammography technologists steadily employed through policy shifts. Two caveats anchor the picture: first, the credential requires an existing ARRT primary credential plus breast-imaging structured education and documented clinical competencies, so it is an add-on for radiographers rather than an entry point; second, more than 75 percent of states license radiologic technologists separately, and some states add mammography-specific permit requirements, so certification and licensure are two different gates. For a candidate asking whether the Mammography credential pays, the direct answer is that it pays at or modestly above the imaging median and is one of the most portable specialization add-ons a radiographer can earn.',
    rows: [
      { label: 'Median annual wage', value: '$77,660', note: 'BLS OOH, Radiologic and MRI Technologists (SOC 29-2034), May 2024' },
      { label: 'Lowest 10%', value: '$52,360', note: 'Entry-level radiography positions' },
      { label: 'Highest 10%', value: '$106,990', note: 'Senior/specialist imaging technologists' },
      { label: 'Work pattern', value: 'Mostly outpatient', note: 'Breast centers and imaging clinics; limited on-call in most roles' }
    ],
    growth: 'BLS projects about 4 percent growth for radiologic and MRI technologists (2024-2034), with roughly 10,800 openings per year from growth plus replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Radiologic and MRI Technologists', url: 'https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm' }
  },
  passRate: {
    headline: 'ARRT publishes first-attempt pass rates in its Annual Exam Report; the passing standard for Mammography is a scaled score of 75 on the 1-99 scale.',
    summary: 'The direct answer on pass rates is that ARRT publishes pass-rate statistics in its Annual Exam Report, and we deliberately do not restate a specific Mammography percentage here because the authoritative figure changes each year and should be read from the current report; for context, the 2024 report lists a 73.9 percent first-attempt pass rate for the related CT exam, and ARRT\u2019s reported rates for post-primary imaging exams have clustered in the low-70s to low-80s range in recent years. What is stable and official is the passing standard: like every ARRT exam, Mammography requires a total scaled score of 75 on ARRT\u2019s 1-to-99 scale, which is not 75 percent correct — ARRT\u2019s scoring analysis for its exams shows the approximate percent-correct needed to reach scaled 75 typically lands in the mid-60s to low-70s because scaling adjusts for form difficulty. The exam itself is delivered by computer at Pearson VUE centers, with the structure defined by the current ARRT Mammography content specifications: a several-hundred-item total made up of scored questions plus unscored pilot items, with the appointment running about 3.5 hours including the tutorial and administrative steps (confirm the exact current question count on the ARRT website, because the specification was revised on ARRT\u2019s published cycle). The content splits across the familiar ARRT category structure — Patient Care, Safety, Image Production, and Procedures — with the breast-imaging procedure and image-production categories carrying the largest weight, which tells candidates exactly where to aim their study. ARRT allows up to three attempts within three years of the first exam window opening, each with a new application and fee. The read for a candidate: the exam is passable with proportional, outline-driven study, but the clustered scoring near the passing mark means margin matters, and candidates with current breast-imaging clinical experience have a substantial advantage.',
    source: { label: 'ARRT Annual Exam Report and ARRT Mammography content specifications', url: 'https://www.arrt.org/exam-registration/eligible-candidates/post-primary-exams' },
    caveat: 'ARRT publishes pass rates per exam in its Annual Exam Report; confirm the current Mammography figure at the source. The scaled passing score of 75 applies to all ARRT exams.'
  },
  studyPlan: {
    summary: 'An efficient ARRT Mammography study plan is 6-8 weeks of about 80-110 total hours, because candidates arrive with an existing ARRT primary credential and much of the patient-care, safety, and physics fundamentals are shared material — the study time should concentrate on breast-imaging-specific content: positioning, image quality and evaluation, pathology and anatomy of the breast, and the MQSA regulatory context. The published content specifications are the scope map, and studying the categories in proportion to their question weight is the highest-yield planning decision; the Procedures and Image Production categories carry most of the scored items. The eligibility gates should be finished before the study window: ARRT requires structured education in breast imaging plus documented clinical competencies in mammography, and the documentation task in particular is a scheduling bottleneck that eats into study time when left late. Candidates already working in a breast center have the fastest path because their daily positioning and image-evaluation work is the exam material; candidates crossing from general radiography without current mammography exposure should budget the upper end of the range and should seek clinical observation or a cross-training rotation before the exam. The final three weeks should be question-bank and mock-exam work at the real format, because the appointment\u2019s length and the mixed pilot items reward rehearsal: two or three full timed mocks build the pacing discipline that clustered scoring rewards, and the image-evaluation items are best drilled against real breast-imaging images rather than text.',
    totalHours: '80-110 hours over 6-8 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Breast imaging foundations', tasks: ['Study breast anatomy, pathology, and imaging indications', 'Cover MQSA regulations and the technologist\u2019s role in the quality program', 'Review positioning principles and compression technique'], hours: 25 },
      { label: 'Week 3-4', focus: 'Procedures and image quality', tasks: ['Drill positioning for craniocaudal, mediolateral oblique, and supplemental views', 'Study image evaluation: artifacts, positioning errors, density, and contrast', 'Work the quality-assurance and QC tasks tested on the exam'], hours: 30 },
      { label: 'Week 5', focus: 'Patient care and safety', tasks: ['Review patient communication, history-taking, and informed consent', 'Study radiation safety and dose considerations in breast imaging', 'Cover contrast and interventional procedures if the blueprint includes them'], hours: 15 },
      { label: 'Week 6-7', focus: 'Question-bank drilling', tasks: ['Drill 400-800 items from a current Mammography bank', 'Log every miss and re-read the associated content outline topic', 'Take one full-length timed mock'], hours: 20 },
      { label: 'Week 8', focus: 'Mocks and readiness', tasks: ['Take two more full-length timed mocks scoring above scaled 75', 'Re-drill the miss log until clean', 'Confirm Pearson VUE booking and photo ID requirements'], hours: 15 }
    ],
    variants: [
      { label: 'Current breast-center technologists', detail: 'Fastest path; daily positioning and image-evaluation work is the exam material, so weight time toward the less familiar regulatory and QC content.' },
      { label: 'Cross-training radiographers', detail: 'Budget the upper end and seek a clinical rotation or observation hours in mammography before the exam.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for ARRT Mammography is studying the current content specifications in weight order and drilling a current question bank with a miss log, because the scored items follow the published category counts and the passing standard sits at a scaled 75 with clustered scoring. First, download the current ARRT Mammography content specifications and use them as the master checklist; allocate study time in proportion to question weight, which puts Procedures and Image Production first. Second, finish the eligibility gates early — the breast-imaging structured education and the documented clinical competencies — because both are application requirements and the documentation task is a scheduling bottleneck. Third, drill a current question bank, 400-800 items with explanations, and build a miss log tied to the outline; the bank rehearsal converts the outline into recall, and the explanations fix the positioning-error and image-evaluation distinctions the exam tests. Fourth, study with real breast-imaging images, because the exam includes image-evaluation items that reward recognizing positioning errors, artifacts, and density on a film or digital image — candidates who study from text alone lose those items. Fifth, run at least two full-length timed mocks at the real appointment length, because the mixed pilot items and the long format surprise candidates who only drill in short blocks. Finally, book the exam inside the testing window so the appointment lands when the miss log is clean. A further high-yield tactic is to learn the quality-control material as a checklist of the technologist\u2019s daily, weekly, and annual tasks, because the MQSA-driven QC items reward knowing who does what on the QA calendar, and candidates who memorise the phantom-image and repeat-analysis tasks answer those items quickly. Use the ARRT annual report\u2019s domain feedback after any failed attempt to re-target study, and treat the three-attempt, three-year limit as a budget to protect.',
    items: [
      { title: 'Study the outline in weight order', detail: 'Procedures and Image Production carry the exam; allocate time proportionally, not front-to-back.' },
      { title: 'Finish eligibility gates early', detail: 'Complete breast-imaging structured education and clinical competencies before the study window.' },
      { title: 'Drill a current bank with a miss log', detail: '400-800 items with explanations, tied to the content outline.' },
      { title: 'Study with real images', detail: 'Positioning-error, artifact, and density items reward visual recognition; use an image library.' },
      { title: 'Learn QC as a task calendar', detail: 'MQSA-driven quality-control items reward knowing the technologist\u2019s daily/weekly/annual tasks.' }
    ]
  },
  resourceComparison: {
    summary: 'ARRT Mammography prep resources split into the free official set, current question banks, and structured courses, and the buying logic is dominated by currency: ARRT revises content specifications on a published cycle, so material must match the current blueprint, and the first purchase rule is to verify the edition. The free ARRT stack — the content specifications, the candidate handbook, and the ARRT website resources — covers the scope definition completely at zero cost and should anchor every plan. The paid question bank is the standard purchase, typically $60-150 for a subscription with explanations and mock exams; the bank is the closest thing to the real item style and the image-evaluation items benefit from a bank that includes images. Structured courses and live review workshops run $200-600 and add video instruction, which helps candidates who are weak in positioning or who want external pacing. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Employers are the hidden variable: many imaging departments and breast centers reimburse mammography prep materials because the credential reduces cross-training cost, so candidates should ask their manager before buying anything. A cheap readiness check is taking the free sample items ARRT and its vendors publish before purchasing, because technologists with current breast-center experience often score higher than expected and need only the bank. Candidates should also note that the application fee is per attempt and that ARRT renewal is a shared $65 annual fee plus 24 CEUs per biennium across all ARRT credentials, so the Mammography add-on does not create a second CE bill.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ARRT content specifications (official)', values: ['Free (PDF)', 'Official document', 'The authoritative scope map'], note: '' },
      { label: 'Mammography question bank', values: ['$60-150', 'Online, current items + mocks', 'Bank-driven rehearsal at volume'], note: '' },
      { label: 'Structured review course', values: ['$200-600', 'Video + live sessions', 'Candidates wanting external pacing'], note: '' },
      { label: 'Employer-sponsored prep', values: ['Often $0 (reimbursed)', 'Department-funded', 'Candidates employed in imaging'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Verify that any paid material matches the current ARRT Mammography content specification revision before purchase.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the ARRT Mammography exam is studying from an outdated review book, because ARRT revises its content specifications on a published cycle and candidates prepared against an older outline meet re-weighted or replaced items; the second is studying the categories in book order instead of weight order, which starves the Procedures and Image Production domains that carry the bulk of the scored items. A third recurring error is treating the scaled score of 75 as 75 percent correct — candidates over-study easy material and under-prepare the hard image-evaluation items, when ARRT\u2019s own analysis shows the percent-correct needed to reach scaled 75 is typically lower because scaling adjusts for form difficulty. Candidates also routinely underestimate the eligibility gates, letting the breast-imaging structured education and clinical competency documentation slide until they collide with exam scheduling. Another pattern is studying from text alone and skipping image-based rehearsal, which loses the positioning-error and artifact items that reward visual recognition. Finally, some candidates ignore the quality-control material because it feels administrative, and then miss the MQSA-driven QC items that appear on the exam.',
    items: [
      { mistake: 'Studying a pre-revision outline or review book', fix: 'Download the current ARRT Mammography content specifications and buy material published after the revision.' },
      { mistake: 'Studying in review-book order', fix: 'Allocate time by question weight: Procedures and Image Production first, then Patient Care and Safety.' },
      { mistake: 'Treating scaled 75 as 75 percent correct', fix: 'Understand that scaling means the percent-correct needed is lower; target the weighted domains, not a raw percentage.' },
      { mistake: 'Studying from text only', fix: 'Drill the image-evaluation items against real breast-imaging images; visual recognition is tested directly.' },
      { mistake: 'Skipping the QC material', fix: 'Learn the MQSA-driven quality-control tasks as a calendar of the technologist\u2019s daily, weekly, and annual duties.' }
    ]
  },
  questionTypes: {
    summary: 'The ARRT Mammography exam is a computer-based test delivered at Pearson VUE centers, with the total made up of scored questions plus unscored pilot items in the standard ARRT four-option, single-best-answer multiple-choice format; the current content specifications place the weight in the Procedure and Image Production categories, and the exam includes image-based items that reward visual recognition of anatomy, positioning errors, and artifacts. The sample items below illustrate the published style across three areas — a positioning item, an image-evaluation item, and a quality-control item. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Single-best-answer multiple choice', share: 'All scored items', detail: 'Four options per item; the standard ARRT format.' },
      { name: 'Image-based items', share: 'Subset of Procedures and Image Production', detail: 'Identify positioning errors, anatomy, or findings on images.' },
      { name: 'Quality-control items', share: 'Within Image Production', detail: 'MQSA-driven tasks: phantom images, repeat analysis, and the QC calendar.' }
    ],
    samples: [
      {
        prompt: 'Which positioning error is most likely when the inframammary fold appears cut off on a craniocaudal (CC) view?',
        options: [
          'A. Insufficient compression',
          'B. The breast not being pulled away from the chest wall adequately',
          'C. Excessive posterior angulation of the tube',
          'D. The image receptor placed too low'
        ],
        answer: 'B',
        explanation: 'The inframammary fold should be visible on a proper CC view; when it is cut off, the usual cause is inadequate anterior traction of the breast away from the chest wall. Compression, angulation, and receptor height produce different failures.'
      },
      {
        prompt: 'Which finding on a mammogram most directly indicates a positioning error on the mediolateral oblique (MLO) view?',
        options: [
          'A. The pectoral muscle shadow missing or too short',
          'B. Increased glandular density throughout the image',
          'C. A radiopaque skin marker visible in the corner',
          'D. Decreased contrast between fat and glandular tissue'
        ],
        answer: 'A',
        explanation: 'The MLO view must demonstrate the pectoral muscle to the level of the nipple; a missing or short pectoral shadow is a classic positioning error. Density, markers, and contrast relate to technique, not positioning.'
      },
      {
        prompt: 'Which quality-control task is performed by the technologist on a routine daily basis under a typical MQSA program?',
        options: [
          'A. Annual physicist performance evaluation',
          'B. Phantom image acquisition and review',
          'C. Full facility accreditation application',
          'D. Radiologist peer review of all studies'
        ],
        answer: 'B',
        explanation: 'Phantom image acquisition and review is a routine QC task in the technologist\u2019s quality-assurance calendar. The annual physicist evaluation, accreditation, and peer review are performed by other roles on different schedules.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The ARRT Mammography exam is a computer-based appointment at a Pearson VUE testing center, and the direct exam-day answer is that you will sit a several-hundred-item test in the standard ARRT single-best-answer format, with an appointment of about 3.5 hours including the tutorial and administrative steps, and a scaled score of 75 on the 1-99 scale required to pass — confirm the exact current question count on the ARRT website, because the specification is revised on ARRT\u2019s published cycle. Arrive with two forms of government-issued photo ID, because Pearson VUE enforces the two-ID rule strictly; check the ARRT Candidate Status Report and the center\u2019s booking confirmation for any additional instructions. The appointment begins with a brief nondisclosure agreement window, then a tutorial, then the testing clock starts; there are no scheduled breaks and the exam cannot be paused, so full-length mock discipline matters. Pilot items are indistinguishable from scored ones, so answer every question as if it counts. Expect a quiet, proctored environment with a visible countdown clock; pace to leave margin for the image-based items. A preliminary scaled score appears on screen immediately after submission, with the official report following through the ARRT account within about two weeks; pass results feed the annual renewal cycle ($65 per credential) and the 24-CEU biennial obligation shared across ARRT credentials. If you do not pass, you may reapply — each attempt requires a new application and fee, with a maximum of three attempts within three years of the first exam window opening, and the testing window resets with each new Authorization to Test.',
    bring: ['Two forms of government-issued photo ID', 'ARRT Candidate Status Report and booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Scratch paper from home (the center supplies its own)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present two IDs, sign in, and store personal items in a locker' },
      { time: '0-2 min', detail: 'Complete the ARRT nondisclosure agreement' },
      { time: '0-180 min', detail: 'Work the exam items; pilot items are mixed in — answer everything' },
      { time: 'Immediately after', detail: 'Preliminary scaled score on screen; official report within ~2 weeks via the ARRT account' }
    ],
    rules: ['Two forms of government-issued photo ID required', 'No scheduled breaks; the testing clock runs continuously', 'No personal electronics in the test room', 'Answer every item; pilot questions are indistinguishable from scored ones'],
    afterwards: 'A passing scaled score of 75 certifies the R.T.(R)(M) designation. Maintain it with the $65 annual renewal and 24 CEUs per biennium (shared across ARRT credentials). If you fail, you may reapply with a new application and fee, up to three attempts within three years.'
  }
};

export default data;
