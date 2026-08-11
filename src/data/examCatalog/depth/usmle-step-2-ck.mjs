const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Medical licensure & graduate-medical-education desk',
    bio: 'We cover USMLE examinations for physician licensure. Format and fee facts come from the USMLE program official pages (NBME, FSMB, ECFMG) and are revised; wage figures come from the BLS occupational series named by code, and we state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the USMLE Step 2 CK format, scoring and scheduling against USMLE official pages; verified BLS physician wage data and residency match data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Step 2 CK drives residency match outcomes, and physician incomes are the highest tier BLS documents',
    summary: 'The USMLE Step 2 CK (Clinical Knowledge) is a component of the United States Medical Licensing Examination, and it is taken by every US medical student and by international medical graduates pursuing US residency. It is a licensing gate, not a job credential, so the salary story runs through the physician career it unlocks. BLS does not publish a single median wage for physicians and surgeons - the OOH notes the occupation spans hundreds of specialties with wide earnings variation - but the published physician-earnings surveys (e.g., the annual compensation surveys from medical associations) consistently place physician incomes far above the all-occupation median of $49,500, with primary care and specialty medians typically in the low six figures and procedural specialties substantially higher. The step that matters most for the economics is the residency match: Step 2 CK scores are one of the strongest predictors of program interviews and match success, and the specialty chosen in the match determines the career earnings trajectory, because specialty (not USMLE score) is the dominant income driver. BLS classifies workers by occupation, not test scores, so no Step 2 CK score maps to a salary; the connection runs through the residency match, specialty choice and practice setting. The honest framing for students is that Step 2 CK is a high-stakes exam whose practical payoff is measured in match outcomes - interviews, rank lists and specialty options - and that the income follows the specialty and career path, with the exam as the gate that opens them.',
    rows: [
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'Physicians and surgeons', value: 'Not a single published median', note: 'BLS OOH notes wide variation by specialty; association surveys report six-figure medians' },
      { label: 'Step 2 CK passing standard', value: '3-digit scale; passing standard set by the USMLE', note: 'USMLE program, updated periodically' },
      { label: 'Residency match role', value: 'Score used by programs', note: 'One of the strongest predictors of interview and match outcomes' }
    ],
    growth: 'Physician employment is projected to grow faster than the average from 2024 to 2034 per BLS; residency match competition varies by specialty.',
    source: { label: 'BLS Occupational Outlook Handbook - Physicians and Surgeons', url: 'https://www.bls.gov/ooh/healthcare/physicians-and-surgeons.htm' }
  },
  passRate: {
    headline: 'The USMLE publishes first-time pass rates by examinee group: Step 2 CK first-time pass rates for US MD seniors have been approximately 93-96 percent in recent years',
    summary: 'The USMLE program publishes annual performance data, including first-time pass rates, and these are the closest thing to an official pass-rate statistic for Step 2 CK. In recent reporting years, first-time pass rates for US MD seniors on Step 2 CK have been approximately 93-96 percent; for US DO seniors and international medical graduates the rates are lower and have varied more (international graduates typically pass at lower first-attempt rates, commonly in the high 70s to mid 80s in recent years). These are cohort statistics, not individual predictions, and the USMLE cautions that performance varies with preparation, clinical exposure and examinee background. Step 2 CK is a computer-based, single-day exam of about 8 hours (the current format) with approximately 300 multiple-choice items in six blocks, testing clinical knowledge across medical disciplines; the exam moved to a shorter format in recent years, and the USMLE discontinued the separate Step 2 CS clinical-skills exam (the CS component was permanently discontinued in early 2021, with pass statuses granted to previously scheduled examinees). Scores are reported on a 3-digit scale with a passing standard set by the USMLE; the specific passing threshold is updated periodically, and candidates should verify the current standard on the official USMLE site. Scores are typically released 2-4 weeks after the exam. The honest summary is that the official first-time pass rates are published and favorable for US MD seniors, but the score also matters competitively for residency applications, because programs see the numeric score and use it in interview selection.',
    source: { label: 'USMLE performance data and Step 2 CK information', url: 'https://www.usmle.org/step-exams/step-2-ck' },
    caveat: 'Pass rates are cohort statistics published annually; recent US MD senior first-time pass rates on Step 2 CK were approximately 93-96%. Verify the current passing standard on usmle.org.'
  },
  studyPlan: {
    summary: 'Step 2 CK preparation is a major commitment - typically 4-8 weeks of dedicated study (more for students with weaker shelves) after completing core clinical clerkships. The exam tests clinical knowledge across internal medicine, surgery, pediatrics, OB/GYN, psychiatry, neurology, family medicine and preventive medicine, in single-best-answer clinical vignettes. A realistic plan: 300-500 hours over 4-8 weeks. Week 1: establish the baseline with a practice exam (NBME practice forms or the official practice materials) and a question-bank diagnostic; set a target score aligned with your residency goals. Weeks 2-6: complete a full pass of the highest-yield content (internal medicine is the largest subject) integrated with daily question-bank practice - the standard pattern is 40-80 questions per day with detailed review of every answer, including the incorrect options, because the review is where the learning happens. Weeks 6-7: increase to timed blocks and full simulated exams (4-5 practice exams) to build stamina for the 8-hour day. Week 8: targeted review of the weakest subjects, two more practice exams, and taper. The dominant resources are the question banks (UWorld is the near-universal standard, typically 3,000+ questions) and the NBME practice exams, which are the closest predictors of the real score. Students should also prioritize sleep and schedule the exam before the ERAS residency-application submission window, because programs want the score early in the interview season.',
    totalHours: '300-500 hours over 4-8 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Practice exam', 'Question-bank diagnostic', 'Set target score'], hours: 40 },
      { label: 'Weeks 2-6', focus: 'Content + daily Qs', tasks: ['Internal medicine and highest-yield content', '40-80 questions daily with full review'], hours: 280 },
      { label: 'Weeks 6-7', focus: 'Timed blocks and exams', tasks: ['Timed question blocks', 'Full simulated exams for stamina'], hours: 90 },
      { label: 'Week 8', focus: 'Targeted review and taper', tasks: ['Weakest subjects', 'Two practice exams, then rest'], hours: 60 }
    ],
    variants: [
      { label: 'International graduates', detail: 'IMGs typically need longer dedicated prep and score lower on average; plan 8-12 weeks and target the score requirements of the programs you are applying to.' },
      { label: 'Score-based specialty goals', detail: 'Competitive specialties (dermatology, orthopedics, neurosurgery) have higher average Step 2 scores; set the target accordingly.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective Step 2 CK strategies center on active question practice and deliberate review. Strategy one: make the question bank the backbone - 40-80 questions daily with a full review of every answer, including why each incorrect option is wrong, because the vignette style and the clinical reasoning patterns are learned through volume; the standard UWorld pass (or equivalent high-quality bank) is the near-universal preparation. Strategy two: use the NBME practice exams as progress checks, because they are the closest predictor of the real score and identify the specific subjects dragging the score; take one at baseline, one at mid-point and one or two in the final week. Strategy three: weight internal medicine heavily - it is the largest subject and the frame for much of the rest - and use the clinical guidelines and summaries that the major prep resources organize by system. Strategy four: practice stamina deliberately - the exam runs about 8 hours across six blocks, and taking full-length simulated exams is the only way to train the endurance and the break strategy. Strategy five: review the incorrect options, not just the correct answer, because the item explanations are where the differential-diagnosis thinking is taught. Strategy six: manage the timeline around the match - schedule the exam early enough that the score is available for ERAS submission, because programs weigh Step 2 heavily in interview selection, and a late score can cost interviews.',
    items: [
      { title: 'Make the Q-bank the backbone', detail: '40-80 questions daily with full answer review.' },
      { title: 'Use NBME practice exams as checks', detail: 'They are the closest score predictors.' },
      { title: 'Weight internal medicine', detail: 'It is the largest subject and frames the rest.' },
      { title: 'Train the 8-hour stamina', detail: 'Full simulated exams build the endurance and break plan.' },
      { title: 'Timeline around the match', detail: 'Score early enough for ERAS submission.' }
    ]
  },
  resourceComparison: {
    summary: 'The Step 2 CK resource market is consolidated and expensive, but the core purchases are standard. The question banks dominate: UWorld Step 2 CK is the near-universal first purchase (a subscription covering the full question bank, typically several hundred dollars for a 90-180 day subscription, with thousands of questions and detailed explanations); Amboss and the NBME/USMLE official question materials are the main alternatives and supplements. The NBME practice exams (roughly $60 each) are the closest score predictors and are a standard purchase for progress checks; the official USMLE practice materials (free) provide format familiarity. Content review resources - textbooks, anki decks (free or low-cost community decks) and video lectures - supplement the question-based learning. Total spending for a typical student runs several hundred to over a thousand dollars when including the exam fee (Step 2 CK registration is several hundred dollars, plus scheduling). The honest ranking: the question bank first, NBME practice exams second, anki and content resources for retention, and tutoring ($50-$150/hour) only for students with specific deficits. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'UWorld Step 2 CK question bank', values: ['$300-$600 (subscription)', 'Online', 'The standard Q-bank with explanations'] },
      { label: 'NBME practice exams', values: ['~$60 each', 'Online', 'The closest score predictors'] },
      { label: 'Official USMLE practice materials', values: ['Free', 'Online', 'Format familiarity'] },
      { label: 'Anki decks', values: ['Free-$20', 'App', 'Spaced-repetition retention'] },
      { label: 'Tutoring', values: ['$50-$150/hr', '1:1', 'Targeted deficits'] }
    ],
    footnote: 'Prices dated 2025-26; include the Step 2 CK exam fee in planning. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common Step 2 CK mistakes are about preparation style and timing. Mistake one: passive content review without question volume; the exam tests clinical reasoning in vignettes, and students who read textbooks without daily question practice underperform their knowledge. Mistake two: skipping NBME practice exams and walking into the real exam with no calibrated score; the NBMEs are the closest predictors, and students who avoid them for fear of low scores lose the most valuable calibration data. Mistake three: not reviewing the incorrect options; the item explanations, including why each distractor is wrong, are where the reasoning is taught, and rushing the review forfeits the learning. Mistake four: scheduling the exam too late in the season; a score that arrives after ERAS submission or interview invitations are sent weakens the application regardless of the number. Mistake five: ignoring stamina; the 8-hour format punishes students who never simulate the full day. Mistake six: misweighting subjects - spending weeks on small subjects while internal medicine (the largest) gets short shrift. Finally, students should verify the current exam length and passing standard on usmle.org, because the format was shortened and the CS component was discontinued, and outdated advice abounds.',
    items: [
      { mistake: 'Passive review without Qs', fix: 'Daily question practice with full review.' },
      { mistake: 'Avoiding NBME practice exams', fix: 'They are the closest predictors; use them for calibration.' },
      { mistake: 'Skipping the incorrect-option review', fix: 'The explanations teach the differential reasoning.' },
      { mistake: 'Late scheduling around the match', fix: 'Score early enough for ERAS submission.' },
      { mistake: 'Following outdated format advice', fix: 'Verify the current length and standard on usmle.org.' }
    ]
  },
  questionTypes: {
    summary: 'Step 2 CK is a single-day computer-based exam of about 8 hours (current format) with approximately 300 single-best-answer multiple-choice items in six blocks, each block allowing about 60 minutes (the exact block timing is set by the current format; verify on usmle.org). Items are clinical vignettes: a patient presentation, history, physical findings, and often lab or imaging data, with one best answer among distractors; the exam spans internal medicine, surgery, pediatrics, OB/GYN, psychiatry, neurology, family medicine, and preventive medicine. The exam tests diagnosis, management, and next steps in clinical care. Samples below are editor-written illustrations of the published item format, not live exam items.',
    types: [
      { name: 'Internal medicine', share: 'Largest subject', detail: 'Diagnosis and management vignettes.' },
      { name: 'Surgery and OB/GYN', share: 'Large subjects', detail: 'Preop, perioperative, and obstetric management.' },
      { name: 'Pediatrics, psychiatry, neurology', share: 'Substantial subjects', detail: 'Age-specific and behavioral presentations.' },
      { name: 'Family and preventive medicine', share: 'Smaller subjects', detail: 'Screening, health maintenance, ethics.' }
    ],
    samples: [
      {
        prompt: 'A 58-year-old man with hypertension presents with sudden severe headache and blurred vision. Blood pressure is 210/120 mm Hg. Funduscopic exam shows papilledema. Which is the most appropriate next step?',
        options: ['A. Recheck the blood pressure in one hour', 'B. Admit for immediate blood-pressure control', 'C. Start an ACE inhibitor in the clinic and follow up weekly', 'D. Order a urine culture'],
        answer: 'B',
        explanation: 'Severe hypertension with papilledema indicates hypertensive emergency with end-organ damage; immediate blood-pressure control in a monitored setting is the correct next step.'
      },
      {
        prompt: 'A 32-year-old woman at 28 weeks gestation reports persistent headache and sees spots in her vision. Blood pressure is 165/105 mm Hg, and urine protein is 2+. Which diagnosis is most consistent with these findings?',
        options: ['A. Gestational diabetes', 'B. Preeclampsia', 'C. Urinary tract infection', 'D. Migraine without complication'],
        answer: 'B',
        explanation: 'New-onset hypertension with proteinuria after 20 weeks gestation defines preeclampsia; the visual symptoms signal severe features requiring urgent management.'
      },
      {
        prompt: 'A 5-year-old boy presents with a barking cough and stridor that worsens at night. Which condition is most likely?',
        options: ['A. Bacterial pneumonia', 'B. Croup', 'C. Asthma exacerbation', 'D. Foreign body aspiration'],
        answer: 'B',
        explanation: 'Barking cough and nighttime stridor in a young child are classic for croup (laryngotracheobronchitis), typically viral and managed supportively.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published item format, not live exam items.'
  },
  examDay: {
    summary: 'Step 2 CK is administered at Prometric test centers on days scheduled through the USMLE registration system; candidates register with the appropriate registration entity (NBME/FSMB for US students, ECFMG for international graduates) and schedule at an eligible Prometric site. On the day, arrive 30 minutes early with a valid ID matching the registration; the exam runs about 8 hours including six question blocks and scheduled breaks (lunch and optional breaks), and personal electronics are not permitted. The center provides scratch paper and a calculator function within the testing software. Scores are typically released 2-4 weeks after the exam, and passing is determined by the current passing standard on the 3-digit scale. The score is reported to the candidate and to the registration entity, and candidates can send scores to residency programs through the ERAS process; the score is also used for ECFMG certification for international graduates. Afterwards, review the score against your residency goals, plan the timing of Step 3 (which for US MDs is typically taken during residency, with state-specific requirements), and use the performance data to shape the residency application narrative.',
    bring: ['Valid photo ID matching the registration', 'Appointment confirmation', 'Snacks and water for scheduled breaks', 'A plan for the ~8-hour day'],
    leave: ['Phone, smartwatch, and personal electronics', 'Notes or study materials', 'Anything requiring lockers at the center - plan to stow it'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in with valid ID.' },
      { time: 'Blocks 1-3', detail: 'Three question blocks with scheduled breaks.' },
      { time: 'Lunch', detail: 'Scheduled lunch break.' },
      { time: 'Blocks 4-6', detail: 'Three question blocks.' },
      { time: '2-4 weeks later', detail: 'Scores released; passing per the current standard.' }
    ],
    rules: [
      'Valid ID is mandatory; personal electronics are prohibited.',
      'The exam runs ~8 hours with scheduled breaks.',
      'Passing follows the current USMLE standard on the 3-digit scale.',
      'Scores are sent to programs through ERAS; ECFMG uses the score for IMG certification.'
    ],
    afterwards: 'Review the score against residency goals, ensure it reaches ERAS on time, and plan Step 3 timing according to your state and residency requirements.'
  }
};

export default data;
