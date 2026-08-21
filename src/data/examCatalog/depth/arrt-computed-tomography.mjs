const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Radiologic & medical imaging certifications desk',
    bio: 'The ARRT CT exam structure (question count, time, scoring) is drawn from the ARRT Examination Content Specifications and the ARRT Annual Exam Report, which are updated on a published revision cycle. Wage figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024). Where ARRT or BLS does not publish a figure, we say so plainly rather than estimating.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the ARRT Computed Tomography content specifications (board-approved 2025, effective September 2026) and the ARRT Annual Exam Report pass-rate data (2024).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Radiologic technologists earned a May 2024 BLS median of $77,660, and the CT credential is the standard path to higher-paying imaging roles.',
    summary: 'The salary conclusion for the CT credential is a clear step-up story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $77,660 for SOC 29-2034 Radiologic and MRI Technologists, with the lowest 10 percent earning below $52,360 and the highest 10 percent above $106,990. The BLS classifies by job duty, not by certificate, so the CT designation itself does not appear in the wage data — but employers treat R.T.(R)(CT) as the standard qualification for computed-tomography positions, and CT technologists consistently land above the radiography median because the modality carries higher acuity, more on-call work, and greater technical responsibility. Outpatient imaging centers, specialty hospitals, and trauma centers pay a premium over the median, and cross-training from radiography into CT is one of the most common and cheapest career moves in imaging: the eligibility path requires an existing ARRT primary credential, 16 hours of structured education, and 125 documented CT procedures, so an employed radiographer can often earn the CT credential while working. The BLS projects about 4 percent growth for radiologic and MRI technologists from 2024 to 2034, with roughly 10,800 openings per year driven by replacement demand as the workforce ages and by rising imaging volume in an aging population. Two caveats anchor the picture: first, more than 75 percent of states license radiologic technologists separately, so the ARRT credential and a state license are different gates and candidates must check their state board; second, the earnings premium depends on the employer — a rural clinic may pay flat across modalities, while a metropolitan trauma center will not. For a candidate asking whether the CT credential pays, the direct answer is yes, modestly but reliably, and it is the least expensive specialization to add after an existing primary credential.',
    rows: [
      { label: 'Median annual wage', value: '$77,660', note: 'BLS OOH, Radiologic and MRI Technologists (SOC 29-2034), May 2024' },
      { label: 'Lowest 10%', value: '$52,360', note: 'Entry-level radiography positions' },
      { label: 'Highest 10%', value: '$106,990', note: 'Senior/specialist imaging technologists' },
      { label: 'CT-specific premium', value: 'Above radiography median', note: 'Employers pay more for the CT designation in most markets' }
    ],
    growth: 'BLS projects about 4 percent growth for radiologic and MRI technologists (2024-2034), with roughly 10,800 openings per year from growth plus replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - Radiologic and MRI Technologists', url: 'https://www.bls.gov/ooh/healthcare/radiologic-technologists.htm' }
  },
  passRate: {
    headline: 'ARRT reported a 73.9% first-attempt pass rate for the CT exam in 2024; a scaled score of 75 on a 1-99 scale is the passing standard.',
    summary: 'The direct answer on pass rates is unusually well documented: ARRT publishes pass-rate statistics in its Annual Exam Report, and the 2024 report lists a 73.9 percent first-attempt pass rate for Computed Tomography, with a mean scaled score of 79.2 for all candidates. That means roughly three of every four first-time test-takers pass, and the passing standard is a scaled score of 75 on ARRT\u2019s 1-to-99 scale — which is not 75 percent correct: ARRT\u2019s own analysis for CT puts the approximate percent-correct needed to pass at about 66 percent, because scaling adjusts for form difficulty. The exam itself, under the content specifications effective September 2026, totals 195 items: 165 scored questions plus 30 unscored pilot items, with 180 minutes of test time inside a 210-minute (3.5-hour) appointment. The scored items split into four categories — Procedures 71 questions (43.0%), Image Production 52 questions (31.5%), Patient Care 21 questions (12.7%), and Safety 21 questions (12.7%) — which tells candidates exactly where the weight sits: procedure and anatomy knowledge carries the exam. The clustered scoring profile matters more than the headline rate: with the mean only about four scaled points above the passing mark, a handful of missed items separates pass from fail, and the 3.5-hour appointment with mixed pilot items rewards pacing discipline. ARRT allows up to three attempts within three years of the first exam window opening, with a new application and fee required per attempt. The read for a candidate is encouraging but not casual: the majority of first-timers pass, yet the exam is unforgiving at the margin, and candidates who study the Procedures and Image Production domains proportionally to their weight have the strongest odds.',
    source: { label: 'ARRT Annual Exam Report and ARRT Computed Tomography content specifications', url: 'https://www.arrt.org/exam-registration/eligible-candidates/post-primary-exams' },
    caveat: 'Pass-rate figures are ARRT-published and vary by year; confirm the current report on the ARRT website. The scaled passing score of 75 applies to all ARRT exams.'
  },
  studyPlan: {
    summary: 'An efficient ARRT CT study plan is 8-10 weeks of about 100-140 total hours, because the exam is a breadth test with the weight concentrated in Procedures (43%) and Image Production (31.5%), and candidates who already hold a radiography primary credential arrive with most of the patient-care and safety fundamentals already in place. The published content specifications are the scope map: 165 scored questions across four categories, and studying the categories in proportion to their question counts is the single highest-yield planning decision. Candidates coming from radiography should budget the lower end of the range because CT-specific physics and procedure material builds on existing knowledge; candidates crossing from nuclear medicine or radiation therapy should budget the upper end because CT anatomy and image-production content is less familiar. The structured-education requirement (16 hours in patient care, safety, image production, and procedures) can double as the first four weeks of the study plan if it is completed through courses that track the content outline. The clinical requirement — 125 documented procedures across the ARRT category list — should be finished before the study window, because competency documentation is the gate to scheduling and candidates who let it run late compress their study time. The final three weeks should be question-bank and mock-exam work at the real format, because the 195-item appointment with mixed pilot questions rewards rehearsal: two or three full timed mock exams at 180 minutes build the pacing discipline that the clustered scoring rewards.',
    totalHours: '100-140 hours over 8-10 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Physics and image production', tasks: ['Study CT physics: x-ray production, pitch, kVp, mAs, slice thickness', 'Work reconstruction: filtered back-projection vs iterative', 'Cover image quality: artifacts, noise, contrast resolution'], hours: 30 },
      { label: 'Week 3-5', focus: 'Procedures and anatomy', tasks: ['Drill cross-sectional anatomy by body region (head, chest, abdomen, pelvis)', 'Study protocols: contrast timing, scan delays, positioning', 'Cover pathology and indications for each region'], hours: 45 },
      { label: 'Week 6', focus: 'Patient care and safety', tasks: ['Review contrast administration, adverse reactions, renal function checks', 'Study radiation safety, dose optimization, shielding', 'Complete remaining structured-education categories if needed'], hours: 15 },
      { label: 'Week 7-8', focus: 'Question-bank drilling', tasks: ['Drill 500-1,000 items from a current CT bank', 'Log every miss and re-read the associated content outline topic', 'Take one full 195-item timed mock'], hours: 25 },
      { label: 'Week 9-10', focus: 'Mocks and readiness', tasks: ['Take two more full-length timed mocks scoring above 75 scaled', 'Re-drill the miss log until clean', 'Confirm Pearson VUE booking and photo ID requirements'], hours: 25 }
    ],
    variants: [
      { label: 'Radiography background', detail: 'Fastest path; patient care and safety material is largely review, so weight time toward Procedures and Image Production.' },
      { label: 'NMTCB-supported path', detail: 'The application fee doubles to $450 for NMTCB-supported candidates; budget accordingly and confirm eligibility in the ARRT account.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for ARRT CT is studying the content outline in proportion to question weight and drilling a current question bank at volume, because the 165 scored items follow the published category counts and the mean scaled score sits only about four points above the passing mark, which makes targeted preparation decisive. First, download the current ARRT CT content specifications and use them as the master checklist: score the four categories (Procedures 43%, Image Production 31.5%, Patient Care 12.7%, Safety 12.7%) and allocate study time in the same proportions rather than studying from front to back of a review book. Second, complete the 16 hours of structured education and the 125-procedure clinical documentation early, because both are eligibility gates and the documentation task, in particular, is a scheduling bottleneck that eats into study time when left late. Third, drill a current question bank — 500-1,000 items with explanations — and build a miss log tied to the content outline, because the bank rehearsal converts the outline into recall and the explanations fix the physics and protocol distinctions the exam tests. Fourth, run at least three full-length timed mocks at the 180-minute format, because the appointment runs 210 minutes with 30 pilot items mixed in, and candidates who only drill in short blocks mis-pace on the real paper. Fifth, prioritise the image-based items: the exam includes identifying anatomy on scans and clip interpretation, so study with an atlas or modality images open, not just text. Finally, book the exam inside the 365-day testing window early, so the appointment lands when the miss log is clean rather than when the window forces it. A further high-yield tactic is to study the artifact and quality topics with images, because Image Production items reward visual recognition — beam-hardening, partial-volume, motion, and metal artifacts are tested repeatedly, and candidates who can name them on a picture answer those items quickly. Use the ARRT annual report\u2019s domain feedback after any failed attempt to re-target study, and treat the three-attempt, three-year limit as a budget to protect rather than a deadline to test.',
    items: [
      { title: 'Study the outline in weight order', detail: 'Procedures (43%) and Image Production (31.5%) carry the exam; allocate time proportionally.' },
      { title: 'Finish eligibility gates early', detail: 'Complete 16 hours of structured education and 125 documented procedures before the study window.' },
      { title: 'Drill a current bank with a miss log', detail: '500-1,000 items with explanations, tied to the content outline, converts study into recall.' },
      { title: 'Run full-length timed mocks', detail: 'Three mocks at 180 minutes build the pacing the 195-item appointment demands.' },
      { title: 'Study images, not just text', detail: 'Anatomy, artifacts, and clip items reward visual recognition; use an atlas while studying.' }
    ]
  },
  resourceComparison: {
    summary: 'ARRT CT prep resources split into the free official set, current question banks, and structured courses, and the buying logic is dominated by currency: ARRT revised the CT content specifications effective September 2026, so material published before that revision risks testing candidates against an outdated outline, and the first purchase rule is to verify the edition matches the current blueprint. The free ARRT stack — the content specifications document, the ARRT CT handbook of prerequisites, and the ARRT website\u2019s candidate resources — covers the scope definition completely at zero cost and should anchor every plan. The paid question bank is the standard purchase, with prices typically $60-150 for a subscription that includes explanations, image items, and mock exams; the bank is the closest thing to the real item style and the miss-log workflow depends on it. Structured courses and live review workshops run $200-600 and add video instruction and pacing, which helps candidates who want external structure or who are weak in physics. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. Employers are the hidden variable: many imaging departments pay for or reimburse CT prep materials because the credential reduces their cross-training cost, so candidates should ask their manager before buying anything. A cheap readiness check is taking the free sample items ARRT and its vendors publish before purchasing, because radiographers with recent clinical CT exposure often score higher than expected and need only the bank, not the course. Candidates should also note that the $225 application fee is per attempt and that the 24-CEU biennial renewal obligation applies to the primary credential, so the CT designation adds maintenance but not a second CE bill.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ARRT content specifications (official)', values: ['Free (PDF)', 'Official document', 'The authoritative scope map'], note: '' },
      { label: 'CT question bank', values: ['$60-150', 'Online, current items + mocks', 'Bank-driven rehearsal at volume'], note: '' },
      { label: 'Structured review course', values: ['$200-600', 'Video + live sessions', 'Candidates wanting external pacing'], note: '' },
      { label: 'Employer-sponsored prep', values: ['Often $0 (reimbursed)', 'Department-funded', 'Candidates employed in imaging'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Verify that any paid material matches the current ARRT CT content specification revision before purchase.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the ARRT CT exam is studying from an outdated review book or bank, because ARRT revised the content specifications effective September 2026 and candidates prepared against an older outline meet items that have been re-weighted or replaced; the second is studying the four categories in review-book order instead of weight order, which starves the Procedures and Image Production domains that carry 74 percent of the scored items. A third recurring error is treating the scaled score of 75 as 75 percent correct — candidates who aim for 75 percent over-study the easy material and under-prepare the hard procedure items, when ARRT\u2019s own data shows roughly 66 percent correct converts to the passing scaled score. Candidates also routinely underestimate the clinical and education gates, letting the 125-procedure documentation slide until it collides with exam scheduling and compresses real study time. Another pattern is skipping the full-length mock, so the 195-item appointment with 30 mixed pilot items surprises them on pacing. Finally, some candidates ignore the image-based items and study from text alone, losing the anatomy and artifact items that reward visual recognition.',
    items: [
      { mistake: 'Studying a pre-2026 outline or review book', fix: 'Download the current ARRT CT content specifications and buy material published after the revision; currency is the top predictor of a pass.' },
      { mistake: 'Studying in review-book order', fix: 'Allocate time by question weight: Procedures and Image Production first, then Patient Care and Safety.' },
      { mistake: 'Aiming for 75 percent correct', fix: 'Understand that scaled 75 equals roughly 66 percent correct; target mastery of the weighted domains, not a raw percentage.' },
      { mistake: 'Letting eligibility gates run late', fix: 'Finish the 16 structured-education hours and 125 procedures before the study window; they are scheduling bottlenecks.' }
    ]
  },
  questionTypes: {
    summary: 'The ARRT CT exam is 195 items total (165 scored plus 30 unscored pilot questions) delivered by computer at Pearson VUE centers, and the published format is four-option, single-best-answer multiple choice — ARRT\u2019s current CT blueprint does not use multi-select, ordering, or fill-in-the-blank items. The scored content follows the four categories: Procedures (71 items), Image Production (52 items), Patient Care (21 items), and Safety (21 items), and the exam includes image-based items in which candidates identify anatomy on a scan or interpret a clip, which is why studying with images matters. The samples below illustrate the published item style across three of the four categories — a safety item, an image-production item, and a procedure item — with four options each. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Single-best-answer multiple choice', share: 'All scored items', detail: 'Four options per item; the official format for the current CT blueprint.' },
      { name: 'Image-based items', share: 'Subset of Procedures and Image Production', detail: 'Identify anatomy, artifacts, or findings on images; rewards atlas study.' },
      { name: 'Protocol and contrast items', share: 'Within Patient Care', detail: 'Contrast timing, renal function checks, adverse-reaction management.' }
    ],
    samples: [
      {
        prompt: 'A patient on metformin presents for a contrast-enhanced CT with a recent eGFR of 42 mL/min. What is the appropriate action?',
        options: [
          'A. Proceed with contrast and continue metformin normally',
          'B. Hold metformin per the ordering physician\u2019s instructions after reviewing renal function',
          'C. Refuse the study regardless of the physician\u2019s orders',
          'D. Double the contrast dose to compensate for renal impairment'
        ],
        answer: 'B',
        explanation: 'Metformin plus iodinated contrast raises the risk of lactic acidosis in patients with reduced renal function; the protocol is to check renal function and follow the ordering physician\u2019s instruction to hold metformin — not to withhold contrast from every metformin patient automatically.'
      },
      {
        prompt: 'Which image artifact is caused by high-attenuation material such as dental amalgam or metal implants?',
        options: [
          'A. Motion artifact',
          'B. Beam hardening (streak) artifact',
          'C. Partial volume averaging',
          'D. Equipment calibration artifact'
        ],
        answer: 'B',
        explanation: 'High-attenuation objects cause beam-hardening streak artifacts radiating from the object. Motion, partial-volume, and equipment artifacts have different causes and appearances, which is why image-based recognition is tested.'
      },
      {
        prompt: 'Which scan parameter most directly controls the spatial resolution of the reconstructed image along the z-axis?',
        options: [
          'A. Peak kilovoltage (kVp)',
          'B. Reconstructed slice thickness',
          'C. Display field of view',
          'D. Scan start time'
        ],
        answer: 'B',
        explanation: 'Reconstructed slice thickness governs z-axis spatial resolution; kVp affects beam energy and dose, DFOV affects in-plane display, and scan start time affects contrast timing rather than resolution.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The ARRT CT exam is a computer-based appointment at a Pearson VUE testing center, and the direct exam-day answer is that you will sit a 195-item test (165 scored plus 30 pilot questions) with 180 minutes of test time inside a 210-minute (3.5-hour) appointment, and a scaled score of 75 on the 1-99 scale is required to pass. Arrive with two forms of government-issued photo ID, because Pearson VUE enforces the two-ID rule strictly; check your ARRT Candidate Status Report and the center\u2019s booking confirmation for any additional instructions. The appointment begins with a 2-minute nondisclosure agreement window, then a brief tutorial, then the clock starts on the 180 minutes of testing; there are no scheduled breaks, and the exam cannot be paused, so the full-length mock discipline matters. All items are single-best-answer with four options, and pilot items are indistinguishable from scored ones — answer every question as if it counts. Expect the environment to be quiet and proctored with a visible countdown clock; pace at roughly 60 items per 55 minutes to leave margin for the image-based items. A preliminary scaled score appears on screen immediately after submission, with the official report following through the ARRT account within about two weeks; pass results feed the annual renewal cycle ($65 per credential) and the 24-CEU biennial obligation shared across ARRT credentials. If you do not pass, you may reapply — each attempt requires a new application and the $225 fee, with a maximum of three attempts within three years of the first exam window opening, and the 365-day testing window resets with each new Authorization to Test.',
    bring: ['Two forms of government-issued photo ID', 'ARRT Candidate Status Report and booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the appointment (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Scratch paper from home (the center supplies its own)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present two IDs, sign in, and store personal items in a locker' },
      { time: '0-2 min', detail: 'Complete the ARRT nondisclosure agreement' },
      { time: '0-180 min', detail: 'Work the 195 items; pilot items are mixed in — answer everything' },
      { time: 'Immediately after', detail: 'Preliminary scaled score on screen; official report within ~2 weeks via the ARRT account' }
    ],
    rules: ['Two forms of government-issued photo ID required', 'No scheduled breaks; the 180-minute clock runs continuously', 'No personal electronics in the test room', 'Answer every item; pilot questions are indistinguishable from scored ones'],
    afterwards: 'A passing scaled score of 75 certifies the R.T.(R)(CT) designation. Maintain it with the $65 annual renewal and 24 CEUs per biennium (shared across ARRT credentials). If you fail, you may reapply with a new application and fee, up to three attempts within three years.'
  }
};

export default data;
