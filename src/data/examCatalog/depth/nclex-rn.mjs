// Depth content for: nclex-rn
// Fill ONLY the sections you have real, sourced data for. Omit fields you
// cannot verify rather than inventing numbers. Each prose section needs
// >=250 words of exam-specific narrative. See examDepth.mjs for the full schema.
const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Nursing & healthcare certification desk',
    bio: 'This guide is compiled and maintained by our healthcare-certifications desk. The NCLEX is owned and operated by the National Council of State Boards of Nursing (NCSBN), and we track the published test plan by its effective date - the current RN Test Plan became effective 1 April 2026. Exam length, the adaptive stopping rule, the passing standard and the fees come from NCSBN and the individual Nursing Regulatory Bodies; fees and retake rules vary by state board, so we state the published ranges and flag where you must check your own board. Wage figures come from the Bureau of Labor Statistics occupation Registered Nurses (SOC 29-1141), named by SOC code; BLS classifies by job duties rather than by license.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Exam length, the adaptive stopping rule, the NGN case-study requirement, the passing standard and the published first-time US-educated pass rates were taken from the NCSBN NCLEX Examinations pages and the 2026 RN Test Plan, and checked against the 1 April 2026 effective date.',
  lastReviewed: '2026-08',

  // P0-1  Career outlook & salary (cite BLS where an SOC fits)
  salaryOutlook: {
    headline: '$93,600 median for registered nurses (BLS SOC 29-1141, May 2024)',
    summary:
      'The Bureau of Labor Statistics classifies registered nurses under SOC code 29-1141, and that is the occupation an RN license unlocks. The May 2024 median wage was $93,600 a year, which works out to roughly $45.00 an hour. The spread is wide and worth reading carefully. The lowest 10 percent earned less than $66,030, which tends to be nurses in the lowest-paying settings or the lowest-cost regions, while the highest 10 percent earned more than $135,320, typically in high-cost metropolitan areas, specialised hospital units, or advanced-practice-adjacent roles. The 25th percentile sat at about $78,610 and the 75th at about $107,960, so the typical RN is earning in the low six figures once they are past the early years. BLS reported mean annual pay of about $98,430. Employment was 3,391,000 jobs in 2024, making registered nursing one of the largest occupations in the country. BLS projects 5 percent employment growth from 2024 to 2034 - about as fast as the average for all occupations - driven by an ageing population and the continuing need for healthcare. Critically for a new graduate, the openings number is large: about 189,100 job openings a year, on average, over the decade, and most of those arise from replacement needs as experienced nurses retire or leave the field rather than from new positions. That is the reassuring part of the salary story: the barrier is not demand but the license itself. Passing the NCLEX-RN is what converts a nursing degree into that wage, which is why the exam sits where it does in the pipeline. State-by-state pay varies enormously, and BLS publishes the figures by state and metro area for SOC 29-1141; we have quoted the national medians here because that is what is comparable across the other exams on this site.',
    rows: [
      { label: 'Median annual wage, registered nurses', value: '$93,600', note: 'BLS Occupational Outlook Handbook, May 2024 ($45.00/hr)' },
      { label: 'Lowest 10 percent', value: 'less than $66,030', note: 'BLS OOH Pay tab, May 2024' },
      { label: '25th percentile', value: 'about $78,610', note: 'BLS OOH Pay tab, May 2024' },
      { label: '75th percentile', value: 'about $107,960', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Highest 10 percent', value: 'more than $135,320', note: 'BLS OOH Pay tab, May 2024' },
      { label: 'Mean annual wage', value: 'about $98,430', note: 'BLS OES, May 2024' },
      { label: 'Employment, 2024', value: '3,391,000 jobs', note: 'BLS OOH Quick Facts, 2024' },
      { label: 'Projected annual openings', value: '~189,100 per year', note: 'BLS OOH Job Outlook, 2024-34 - mostly replacement need' }
    ],
    growth: '+5% projected change 2024-34; about 189,100 openings a year, mostly replacement as experienced nurses retire',
    source: {
      label: 'BLS Occupational Outlook Handbook - Registered Nurses',
      url: 'https://www.bls.gov/ooh/healthcare/registered-nurses.htm'
    }
  },

  // P0-2  Pass rates
  passRate: {
    headline: 'NCSBN publishes no single blended pass rate - but reports first-time, US-educated rates (2023: 88.56%, 2024: 91.2%, 2025: ~86.7%)',
    summary:
      'NCSBN does not publish a single blended pass rate for the NCLEX-RN, and anyone quoting one precise national percentage is combining categories that the board keeps separate on purpose. What NCSBN does publish, in its annual NCLEX Examination Statistics report, is pass rates broken out by candidate type. The figure candidates care about most is the first-time, US-educated candidate rate, which is the cleanest signal of how well new graduates from American programs do. That rate has moved around in recent years: for 2023 it was 88.56 percent; for 2024 it was 91.2 percent; and for 2025 the first-time US-educated rate was approximately 86.7 percent. These figures are reported to one decimal place by NCSBN; we cite the nearest published value and flag the 2025 figure as approximate because the final audited number may shift slightly as the reporting year closes. The pass rate for repeat test-takers and for internationally educated candidates is materially lower, and NCSBN reports those separately, which is why a single blended number would be misleading rather than informative. The practical takeaway for a first-time candidate coming out of a US nursing program is that the odds are strongly in your favour - roughly nine in ten pass - provided you prepare for the test as it is actually written rather than as it is imagined. It is worth being clear about what the pass rate is not: it is not a statement of how hard the content is in the abstract, because the exam is adaptive and the difficulty of the items you see depends on how you are performing. It is also not a fixed bar you can target. The pass standard itself is set in logits - the April 2026 passing standard is 0.00 logits - and is reviewed periodically by NCSBN\'s Board of Directors; we explain what that means in the question-types section. We have deliberately not invented a pass rate; the numbers above are the ones NCSBN publishes, and the blended figure candidates search for does not exist.',
    source: {
      label: 'NCSBN - NCLEX Examination Statistics & Publications',
      url: 'https://www.ncsbn.org/exams/exam-statistics-and-publications.page'
    },
    caveat:
      'NCSBN publishes no single blended NCLEX-RN pass rate. It reports first-time US-educated rates separately (2023: 88.56%; 2024: 91.2%; 2025: ~86.7%), along with lower repeat and internationally educated rates. We have used those published figures rather than inventing a national blend. The 2025 figure is approximate pending NCSBN\'s final audited report.'
  },

  // P0-3  Study plan / timetable
  studyPlan: {
    summary:
      'The defining fact about NCLEX preparation is that the exam is computer adaptive, so you are not studying toward a fixed set of questions you can memorise. The RN exam delivers a minimum of 85 and a maximum of 150 scored and pretest items, plus up to 15 unscored pretest items, within a five-hour appointment that includes the tutorial, the items, and any breaks you take. Before 2023 the exam could end at 75 items; under the current blueprint - and the 2026 RN Test Plan effective 1 April 2026 - the floor is 85. Embedded in the maximum-length exam are three NGN case studies, each carrying roughly six items, built on the new clinical judgment measurement model. Your appointment also includes a short tutorial at the start and two optional breaks, but the clock keeps running except during an optional break you request. Note that the 95 percent confidence rule means the computer stops once it is sufficiently confident you are above or below the passing standard, so the number of items you actually answer varies - some candidates finish at 85, others go all the way to 150 - and that variability is normal, not a signal of how you are doing. The study plan below assumes a candidate with a recent nursing-school foundation who needs to convert knowledge into the way the NCLEX actually tests it: application, analysis and the NGN clinical-judgment items. We have split it across twelve weeks at roughly 12 to 15 hours a week, which is realistic for someone studying full time in the weeks after graduation. If you are further from school, extend the early weeks. The single biggest error is treating NCLEX prep like a content review; the content is largely known, the skill is answering application questions quickly and reading case studies without freezing.',
    totalHours: '140-180 hours',
    weeks: [
      {
        label: 'Week 1',
        focus: 'Test mechanics and a true baseline',
        tasks: [
          'Read the 2026 RN Test Plan so you know the Client Needs categories and their percentage bands before you study a single topic',
          'Learn the CAT rules cold: 85-150 items, up to 15 pretest, 5 hours, three NGN case studies, the 95% confidence stopping rule',
          'Take one full adaptive baseline exam from a reputable qbank and record your performance by Client Needs category',
          'Set up a weak-area tracker; every subsequent miss gets tagged to one of the eight Client Needs areas'
        ],
        hours: '12-15 hrs'
      },
      {
        label: 'Weeks 2-3',
        focus: 'Management of Care (15-21%) and Safety & Infection Control (10-16%)',
        tasks: [
          'Management of Care: delegation, supervision, advocacy, informed consent, legal responsibilities, ethics, confidentiality, and establishing priorities',
          'Work delegation questions until you can apply the RN/LPN/UAP scope rules reflexively - these are heavily tested and easy to over-think',
          'Safety & Infection Control: standard and transmission-based precautions, asepsis, airway, restraint, fall and injury prevention, disaster response',
          'Drill prioritization frameworks (ABCs, Maslow, acuity) on applied items, not on definitions'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 4-5',
        focus: 'Pharmacological & Parenteral Therapies (13-19%) and Reduction of Risk (9-15%)',
        tasks: [
          'Medication administration: calculation, three checks and rights, IV therapy, blood products, central lines, parenteral nutrition',
          'Pharmacology by system - know action, side effects, nursing considerations and patient teaching for the high-frequency drug classes',
          'Reduction of Risk: risk factors, risk-reduction teaching, procedural complications, and identifying who is most at risk',
          'Practise dosage calculation daily; arithmetic errors are an avoidable, expensive way to miss'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Weeks 6-7',
        focus: 'Physiological Adaptation (11-17%) and Basic Care & Comfort (6-12%)',
        tasks: [
          'Physiological Adaptation: complex acute and chronic illness across systems, fluid and electrolyte balance, hemodynamics, ventilatory management',
          'Work applied patho items where you must pick the next nursing action, not just recognise the disease',
          'Basic Care & Comfort: nutrition, elimination, mobility, sleep, assistive devices, non-pharmacological comfort measures',
          'Pair each system with its most common NCLEX presentation so you recognise it under time pressure'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Week 8',
        focus: 'Health Promotion (6-12%) and Psychosocial Integrity (6-12%)',
        tasks: [
          'Health Promotion: growth and development across the lifespan, prenatal and well-child care, screening, immunization, lifestyle teaching',
          'Psychosocial: therapeutic communication, mental health disorders, substance use, grieving, abuse and neglect, and the behavioral crises',
          'Practise communication items - they test what you say next, and the "non-therapeutic response" distractors are subtle',
          'Review developmental milestones and Erikson stages as quick-reference anchors'
        ],
        hours: '13-15 hrs'
      },
      {
        label: 'Week 9',
        focus: 'NGN case studies and clinical judgment',
        tasks: [
          'Study the six NGN item types: multiple response, drag-and-drop, cloze (drop-down), enhanced hot spot, matrix/grid, and bow-tie',
          'Practise the Clinical Judgment Measurement Model: recognize cues, analyze cues, prioritize hypotheses, generate solutions, take action, evaluate outcomes',
          'Do at least one full case study per day; read every rationale, especially for the partial-credit items',
          'Learn the bow-tie format specifically, since it is the one candidates find most unfamiliar'
        ],
        hours: '13-15 hrs'
      },
      {
        label: 'Weeks 10-11',
        focus: 'Full-length adaptive simulations and gap closing',
        tasks: [
          'Two to three full 5-hour simulation sittings under real conditions: timed, in one block, with the optional breaks',
          'Re-tag every miss to a Client Needs area and attack the bottom two with focused content review',
          'Drill your weakest NGN item type until partial-credit logic is automatic',
          'Stop learning new content by Week 11; consolidate and correct instead'
        ],
        hours: '13-15 hrs/week'
      },
      {
        label: 'Week 12',
        focus: 'Final review and exam logistics',
        tasks: [
          'Light mixed review of high-yield topics and a single timed half-exam to stay sharp',
          'Confirm your ATT is valid, your test centre is located, and the ID rule is met (government photo ID, name matching exactly)',
          'Plan the 5-hour day: meals, the optional breaks, what you will do in the tutorial minutes',
          'One rest day before the exam; do not study the morning of'
        ],
        hours: '8-10 hrs'
      }
    ],
    variants: [
      { label: 'Recent graduate, full-time studier', detail: 'Eight to ten weeks. You are close to the content; collapse the early weeks and spend the recovered time on NGN case studies and full adaptive simulations, which are the parts school prepared you for least.' },
      { label: 'Working nurse or international-educated candidate', detail: 'Sixteen to twenty weeks at 8-10 hrs/week. You likely need more repetition on US-style application items and on the communication and delegation rules that differ from other systems; treat the baseline exam as the real starting line.' },
      { label: 'Years away from nursing content', detail: 'Twenty weeks or more. Do not rush the systems review; an adaptive exam punishes shaky content with harder items, so build the foundation first and only then add simulation volume.' }
    ]
  },

  // P0-4  Prep strategies & study techniques
  prepStrategies: {
    summary:
      'The NCLEX fails most often not because candidates lack nursing knowledge but because they study the way they studied in school, reading and re-reading notes, instead of practising the applied, decision-making format the exam actually uses. The NCLEX is a criterion-referenced, computer-adaptive test, which means it is engineered to locate your ability relative to the passing standard (0.00 logits under the April 2026 standard) rather than to ask every candidate the same fixed set of questions. That design has direct consequences for how you should prepare. First, volume of questions matters far less than the quality of your review: every missed item should send you back to the underlying principle, not just to the correct letter, because the exam will invert the scenario and test the same principle from the other side. Second, the exam is dominated by application and analysis items, so you must practise choosing the next nursing action under time pressure, not merely recognising terminology. Third, the NGN case studies are new to most candidates and use partial credit, so you cannot afford to treat them as an afterthought. Fourth, calibrate with the official NCSBN practice exam rather than trusting only a commercial qbank, because only NCSBN\'s items are built on the same engine as the live test and give you the most honest read on readiness. Fifth, use spaced retrieval and active recall rather than a single long cram, because the content is large and the exam rewards durable command of pharmacology, lab values and priority frameworks. The strategies below are ordered by the size of the point swing they produce, and the first three are worth more than the rest combined because they address the mistakes that actually cause failures.',
    items: [
      {
        title: 'Learn the adaptive rules so the exam stops surprising you',
        detail: 'Know that the computer keeps feeding items until it is 95 percent confident you are above or below the standard, within the 85-150 item window. Understanding this stops you from reading the number of items you have answered as a score - it is not. It also explains why some people finish at 85 and others sit for 150; both are normal.'
      },
      {
        title: 'Practise prioritization with a fixed framework',
        detail: 'A huge share of RN items ask you to pick the most urgent action or the highest-priority patient. Rely on stable frameworks - ABCs, then Maslow, then acuity/stable-versus-unstable - rather than guessing. Candidates who improvise a new rationale each time are the ones who fall for the plausible-but-not-urgent distractor.'
      },
      {
        title: 'Treat NGN case studies as a separate skill',
        detail: 'The case studies use six item types and the Clinical Judgment Measurement Model, and they award partial credit. Spend a full week on them. Learn the bow-tie and matrix formats specifically, because the partial-credit logic is different from single-answer multiple choice and most qbanks under-weight them.'
      },
      {
        title: 'Review every rationale, not just the wrong answers',
        detail: 'For each item you got right, confirm you were right for the right reason. The NCLEX will invert the scenario and test the same principle from the other side; pattern-matching to a remembered answer fails the moment the stem changes. Rationale review is where content sticks.'
      },
      {
        title: 'Simulate the full five-hour block before test day',
        detail: 'Endurance is real. Sitting a full 150-item, five-hour simulation teaches you where your focus dips and how to use the optional breaks. Candidates who have never done a full block routinely fade in the back third, exactly where the harder items cluster.'
      },
      {
        title: 'Drill dosage and IV calculation until it is automatic',
        detail: 'Calculation items are pure, avoidable points. A arithmetic slip on a medication question can end an otherwise strong run. Ten minutes of calculation drill most days removes an entire category of cheap losses.'
      }
    ]
  },

  // P0-5  Study-resource comparison table
  resourceComparison: {
    summary:
      'The NCLEX has no version number to track the way CompTIA or Cisco exams do, but there is a meaningful generation gap you must respect: the Next Generation NCLEX (NGN) case studies and the new item types are now a permanent part of the exam, and any resource dated before 2023 will not prepare you for them. The most important buying decision is therefore whether the qbank actually contains NGN-style case studies with partial credit, because a traditional multiple-choice-only product leaves a large, scored chunk of the exam unpractised and leaves you guessing on the bow-tie and matrix formats. Beyond that, the dividing line is official versus third-party: NCSBN sells its own practice exams, the Candidate Bulletin and the NCSBN Practice Exam, which are the only items built on the same engine and item-writing as the live test, versus the larger commercial qbanks that offer more volume, better analytics and adaptive study plans. Most candidates use one commercial qbank for volume and the NCSBN practice exam for a calibrated baseline, and that combination is usually sufficient. Be sceptical of any product that promises a guaranteed pass or sells "real" NCLEX questions; no legitimate third party has live items, and the ones that claim to are either mislabelled or risky to rely on. A single high-quality qbank that you actually finish beats three you abandon, so choose one with strong rationales and commit to it rather than sampling many. Free resources - your nursing-school content, the NCSBN test plan, and reputable skills videos - cover the foundation; the paid spend should go to NGN-capable practice.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'NCSBN Practice Exam (official)', values: ['~$150 for a set of two forms (price set by NCSBN)', 'Computer-based, on the live-style engine', 'A calibrated baseline that predicts readiness better than any third-party test'] },
      { label: 'NCSBN Candidate Bulletin & test plan', values: ['Free', 'PDF', 'The authoritative rules and category weights - read before buying anything'] },
      { label: 'UWorld NCLEX-RN Qbank', values: ['Typically $100-200 for a 30-365 day subscription, depending on length', 'Computer-based qbank with NGN-style items and rationales', 'High-volume practice with strong rationales and a realistic interface'] },
      { label: 'Kaplan NCLEX-RN Prep', values: ['~$200-500 depending on the package (class, qbank, or both)', 'Live/online class plus qbank', 'Structured instruction and the Kaplan decision-tree method for priority items'] },
      { label: 'Archer Review', values: ['~$30-150 for short-term subscriptions', 'Computer-based qbank with readiness assessments', 'A lower-cost qbank for extra volume close to the exam'] },
      { label: 'Saunders Comprehensive Review (book)', values: ['~$40-60', 'Print + access code', 'One ordered content reference to close knowledge gaps; confirm it is the NGN edition'] },
      { label: 'Your nursing-school content (notes, textbooks)', values: ['Free', 'Already owned', 'The foundation; reorganise it by Client Needs category rather than by course'] }
    ],
    footnote: 'Prices checked 2026-08 in USD before tax and vary by promotion and region. NCSBN practice-exam pricing is set by the council; commercial qbank prices change frequently, so confirm at the source before buying. We do not rank by commission, and we note plainly that no third-party resource contains live exam items.'
  },

  // P0-6  Common mistakes
  commonMistakes: {
    summary:
      'The failures on this exam are strikingly predictable, and almost none of them are about not knowing enough nursing. They are about preparing for the wrong test. The list below collects the errors we see most often, and the first three cause the majority of retakes. The throughline is that the NCLEX rewards applied judgment delivered under a clock, and most candidates prepare by accumulating content instead of practising the application and analysis items that dominate the paper. A secondary theme is the new NGN format: candidates who trained entirely on legacy multiple-choice books walk into case studies they have never seen, lose partial credit they could have earned, and burn time learning the bow-tie interface on the day itself. A third theme is endurance and logistics - the five-hour block, the 85-to-150 item variability, and the check-in rules - where avoidable mistakes cost seats and clear heads. Concretely, the typical failing candidate has read a lot, recognised most terminology, and then frozen on a priority item that asked for the next action rather than a fact; never rehearsed a full five-hour simulation and faded in the back third; treated the number of items answered as a running score; skipped NGN practice; and walked in without confirming that the name on their ID matched their NCSBN registration. None of these are knowledge gaps, which is exactly why they are so frustrating to fix after the fact. The remediation is cheaper before the exam than after it: practise application, simulate the full block, respect the NGN, and handle the logistics the week before.',
    items: [
      {
        mistake: 'Studying content instead of practising application',
        fix: 'The NCLEX is overwhelmingly application and analysis. Reading notes reinforces recognition, not decision-making. Convert most of your hours into answered, reviewed items where you must pick the next nursing action. If you can explain a disease but cannot choose the priority intervention, you are not ready.'
      },
      {
        mistake: 'Ignoring the NGN case studies and new item types',
        fix: 'NGN case studies with partial credit and the six new item types are a permanent, scored part of the exam. Any resource dated before 2023, and any qbank that is multiple-choice only, leaves that chunk unpractised. Spend a dedicated week on case studies and learn the bow-tie and matrix formats specifically.'
      },
      {
        mistake: 'Treating the number of items answered as a score',
        fix: 'Because the exam is adaptive and stops on a 95 percent confidence rule, finishing at 85 is not "doing badly" and going to 150 is not "failing." Reading the item count as a signal makes candidates panic or relax at the wrong moment. The only number that matters is the one you get at the end.'
      },
      {
        mistake: 'Not simulating the full five-hour block',
        fix: 'Focus and decision quality degrade in the back third of a 150-item, five-hour exam. Candidates who never sat a full block fade exactly where the harder items cluster. Run at least two full-length simulations, breaks included, before test day.'
      },
      {
        mistake: 'Choking on priority and delegation items',
        fix: 'Management of Care is the single largest Client Needs band (15-21 percent) and is built on delegation scope and prioritization. Learn the RN/LPN/UAP boundaries and a fixed priority framework (ABCs, Maslow, acuity) until they are reflexive; these are high-frequency, high-swing points.'
      },
      {
        mistake: 'Losing the seat to the ID or ATT rule',
        fix: 'You need a government-issued photo ID whose name matches your NCSBN registration exactly, and a valid Authorization to Test. A mismatch or an expired ATT means no exam and a forfeited fee. Confirm both the week before, not the morning of.'
      }
    ]
  },

  // P0-7  Question types & worked examples
  questionTypes: {
    summary:
      'Under the 2026 RN Test Plan, the NCLEX-RN is a computer-adaptive test delivering 85 to 150 items plus up to 15 unscored pretest items, in a five-hour appointment. The content is organised into the NCSBN Client Needs framework: Management of Care (15-21%), Safety and Infection Control (10-16%), Health Promotion and Maintenance (6-12%), Psychosocial Integrity (6-12%), Basic Care and Comfort (6-12%), Pharmacological and Parenteral Therapies (13-19%), Reduction of Risk Potential (9-15%), and Physiological Adaptation (11-17%). A maximum-length exam also contains three NGN case studies of about six items each. The exam is not scored as a percentage. NCSBN sets the passing standard in logits - the April 2026 standard is 0.00 logits - where a logit is a unit on the scale of candidate ability the adaptive engine estimates. The computer applies a 95 percent confidence interval rule: it keeps testing until it is 95 percent sure you are above or below the standard, then stops. Passing, therefore, is about demonstrating ability at or above that logit threshold, not about clearing a fixed fraction of questions. Most items are multiple choice, but NGN adds multiple response, drag-and-drop/ordered response, cloze (drop-down) items, enhanced hot-spot items, matrix/grid items, and the bow-tie format, several of which award partial credit. One further point worth stating plainly: the legacy select-all-that-apply items are all-or-nothing, so a single wrongly ticked box loses the whole item, whereas the NGN case-study items award partial credit per element, which is why case-study practice protects your score more efficiently than drilling more multiple choice. The three worked samples below illustrate the legacy single-best-answer style and the NGN case-study logic; they are written by editors to the published blueprint and are not live exam items.',
    types: [
      { name: 'Multiple-choice (single best answer)', share: 'The bulk of the legacy items', detail: 'A stem describing a patient situation and four options; you select the one best nursing action. Distractors are usually plausible alternative actions, so priority frameworks matter more than recognition.' },
      { name: 'NGN case studies (partial credit)', share: 'Three case studies embedded in a maximum-length exam', detail: 'A clinical scenario with several linked items across six new item types, scored with partial credit against the Clinical Judgment Measurement Model (recognize cues, analyze cues, prioritize hypotheses, generate solutions, take action, evaluate outcomes).' },
      { name: 'Multiple response (select all that apply)', share: 'Common, especially in Management of Care and Pharm', detail: 'More than one option is correct and credit requires selecting all and only the correct ones; there is no partial credit on the legacy version of this item.' },
      { name: 'Drag-and-drop / ordered response and cloze', share: 'NGN item types', detail: 'You order steps of a procedure or fill drop-downs in a narrative; these test procedural knowledge and clinical judgment rather than recall.' },
      { name: 'Enhanced hot spot and matrix/grid', share: 'NGN item types', detail: 'Hot-spot items ask you to click the correct location on an image; matrix items ask you to classify options across rows and columns. Both appear in case studies.' }
    ],
    samples: [
      {
        prompt: 'A nurse is caring for four clients on a medical-surgical unit. Which client should the nurse assess FIRST?',
        options: [
          'A. A client with pneumonia whose oxygen saturation is 91% on 2 L nasal cannula and who is comfortably conversing',
          'B. A client 2 days post-operative from abdominal surgery who reports pain rated 6/10',
          'C. A client with a pulmonary embolus whose respiratory rate is 32/min, who is using accessory muscles, and who is unable to complete sentences',
          'D. A client with heart failure whose weight is up 1 kg since yesterday and who has 1+ bilateral pedal edema'
        ],
        answer: 'C',
        explanation: 'This is a priority item, and the ABC framework (Airway, Breathing, Circulation) points to the client with the most acute breathing problem. Option C shows respiratory distress - tachypnea at 32, accessory muscle use, and inability to speak in full sentences - which signals impending respiratory failure and is the most urgent. A is stable on low-flow oxygen; B has expected post-op pain; D shows mild, anticipated heart-failure changes. Candidates who pick B or D are choosing real problems, but not the most immediately life-threatening one, which is exactly the distractor design.'
      },
      {
        prompt: 'A nurse is verifying a provider\'s order: administer 1 g of ceftriaxone IV piggyback over 30 minutes. The pharmacy supplies a 1 g vial to be reconstituted to a total volume of 50 mL. At what rate in mL/hr should the infusion pump be set?',
        options: [
          'A. 50 mL/hr',
          'B. 100 mL/hr',
          'C. 150 mL/hr',
          'D. 200 mL/hr'
        ],
        answer: 'B',
        explanation: 'The total volume is 50 mL to infuse over 30 minutes. Rate = volume / time = 50 mL / 0.5 hr = 100 mL/hr. This is a straightforward calculation item, and a arithmetic slip is the only way to miss it, which is why daily calculation drill is worth the time. A is the volume, not the rate; C and D come from mis-dividing the time. Always recheck the units: mL per hour, not per minute.'
      },
      {
        prompt: 'NGN-style (bow-tie): A 54-year-old client is admitted with chest pain and diagnosed with an acute myocardial infarction. Select the THREE highest-priority nursing actions to take in the first 30 minutes (partial credit applies).',
        options: [
          'A. Obtain a 12-lead ECG',
          'B. Administer sublingual nitroglycerin as ordered',
          'C. Schedule the client for discharge teaching',
          'D. Establish IV access and draw cardiac enzymes',
          'E. Provide a low-sodium diet education packet',
          'F. Administer aspirin as ordered and apply continuous telemetry'
        ],
        answer: 'A, B, D, F',
        explanation: 'Under the Clinical Judgment Measurement Model, the immediate priorities for an acute MI are assessment and stabilization: a 12-lead ECG (A) to confirm and locate the infarct, IV access with cardiac enzymes (D) for diagnosis and a pathway, ordered nitroglycerin (B) for ischemia, and aspirin plus telemetry (F) for reperfusion adjunct and monitoring. C and E are appropriate later but not in the first 30 minutes, so selecting them costs credit while omitting A, B, D, or F loses the partial-credit points. NGN awards credit per correct element, so even a partial correct selection scores something - unlike legacy multiple response, where it is all or nothing.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },

  // P0-8  Exam-day guide
  examDay: {
    summary:
      'The NCLEX-RN is delivered by appointment at a Pearson VUE test centre; as of the 2026 Test Plan there is still no at-home/remote-proctored option for the NCLEX, so plan to travel to a centre. Your appointment is five hours long, covering the tutorial, a short pre-simulation, the items themselves (a minimum of 85 and up to 150 plus pretest), and two optional breaks. The clock runs during everything except an optional break you request, so use the breaks deliberately. The computer is adaptive: it will keep serving items until it reaches the 95 percent confidence stopping point or the 150-item maximum, at which point it ends - sometimes well before five hours, sometimes right at the limit. You will not know during the exam whether you are passing; the result is delivered at the end, and in most US jurisdictions you can pay NCSBN for Quick Results (about $7.95) within 48 hours, with the official result posted to your board of nursing shortly after. The most common non-clinical failure on the day is the identification rule: you must present a valid government-issued photo ID with a name that matches your NCSBN registration exactly, or you will be turned away and your fee forfeited. Confirm both the ID and the validity of your Authorization to Test the week before. Plan the day as a five-hour event even if you finish at 85 items, because the appointment is booked for the full block and the centre schedules accordingly; bring food and water for the optional break, and use the break to reset rather than to cram. Tell anyone driving you that pickup time is uncertain. The single most common avoidable loss is the ID mismatch, so verify the name on your registration twice the week before, because a turned-away candidate forfeits the fee and the seat.',
    bring: [
      'One valid, government-issued photo ID (passport or driver\'s license) with a name matching your NCSBN registration exactly',
      'Your Authorization to Test (ATT) confirmation and any appointment confirmation number',
      'Prescription glasses if you need them for screen reading; the centre provides a locker for everything else',
      'A snack and water for your optional break, stored in the locker until then',
      'Arrive early - Pearson VUE requires check-in time before your scheduled start'
    ],
    leave: [
      'Phones, smartwatches, fitness trackers, calculators and any electronic device - locked in the centre locker',
      'All notes, books, scratch paper and cheat sheets; the centre provides a wipe-board or note-taking material',
      'Bags, coats and outerwear beyond what you can store in the locker',
      'Any food or drink inside the testing room (it stays in the locker until your break)',
      'Another person; guests are not permitted in the centre'
    ],
    timeline: [
      { time: 'The week before', detail: 'Confirm your ID name matches your NCSBN registration exactly and that your ATT has not expired. A mismatch or expired ATT means no exam and a lost fee.' },
      { time: 'The night before', detail: 'Sleep. A five-hour adaptive exam punishes fatigue most in the back third where harder items cluster. Do not cram.' },
      { time: '30 minutes before', detail: 'Arrive at the Pearson VUE centre. Check-in includes ID verification, a photo, a palm-vein or signature capture, and locker assignment.' },
      { time: 'Start of appointment', detail: 'Tutorial and a short pre-simulation that do not count; use them to settle. Then the adaptive items begin.' },
      { time: 'After item 85', detail: 'An optional break becomes available. Take it if you need to; the clock pauses only during the break you request.' },
      { time: 'During the exam', detail: 'Answer at a steady pace. You cannot skip and return on the NCLEX - each item is locked once you submit it, so read carefully before confirming.' },
      { time: 'After the case studies', detail: 'A second optional break is available before the exam concludes at the adaptive stopping point or item 150.' },
      { time: 'At the end', detail: 'The screen confirms completion. The official result posts to your board of nursing; Quick Results (about $7.95) are typically available within 48 hours where offered.' }
    ],
    rules: [
      'No at-home/remote testing for the NCLEX as of the 2026 Test Plan; you test at a Pearson VUE centre.',
      'Five-hour appointment: 85-150 items plus up to 15 unscored pretest, with three NGN case studies on a maximum-length exam.',
      'Computer adaptive with a 95% confidence stopping rule; the exam ends when the engine is confident you are above or below the passing standard (0.00 logits, April 2026).',
      'You cannot skip and return to items; each is locked once submitted, so read carefully before confirming.',
      'Two optional breaks are available (after item 85 and after the case studies); the clock runs except during a requested break.',
      'Valid government photo ID with a name matching your registration exactly is required, or you are turned away.',
      'No personal items in the room; the centre provides note-taking material and a locker.'
    ],
    afterwards:
      'You will not get a pass/fail on screen the moment you finish in most jurisdictions; the official result is posted to your Nursing Regulatory Board, and where available you can pay NCSBN about $7.95 for Quick Results within roughly 48 hours. On a pass, your license is issued by your state board - the NCLEX is the gateway, not the license itself - so watch for your board\'s notification and any additional steps such as a background check. Diary the renewal requirements of your specific state, because RN licensure is state-based and renewal cycles differ. On a fail, NCSBN and your board tell you how close you were via a Candidate Performance Report that breaks down performance by Client Needs category; use it precisely as the blueprint says. You must wait a mandatory period (commonly 45 days, set by your board) before retesting, and you get a fresh ATT. Do not re-sit on the same study pattern - the performance report shows exactly which Client Needs bands dragged you down, and that is where to spend the wait. Most candidates who fail once pass on the second attempt when they close the specific gap rather than re-reading everything.'
  }
};

export default data;
