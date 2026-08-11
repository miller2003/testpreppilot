const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Health-profession admissions testing desk',
    bio: 'We cover health-profession admission tests including the DAT. Format and fee facts come from the ADA official pages and are revised; wage figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the DAT structure, scoring, fees and delivery against the ADA official pages; verified BLS dentist wage data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The DAT gates dental-school admission: dentists earned a $179,210 median in May 2024 (BLS)',
    summary: 'The Dental Admission Test (DAT) is the standardized admissions test for dental school, required by nearly all US dental schools, and it is one component of the dental-school application alongside GPA, coursework, interviews and the application essay. It is an admissions test, not a job credential, so no BLS SOC code corresponds to a score; the salary story runs through the dental career it helps unlock. BLS reported that dentists (SOC 29-1021) earned a median of $179,210 in May 2024, projected to grow 6 percent from 2024 to 2034, with substantial variation by specialty, setting and practice type (general dentists vs specialists, private practice vs employed). The DAT matters to this picture because dental school is the sole pathway to the profession, admission is competitive, and the DAT is one of the strongest predictors schools weigh alongside the GPA; a strong score widens admission options and can affect scholarship and school choice. BLS classifies workers by occupation and education, not test scores, so no DAT score maps to a salary; the connection runs through dental-school admission, completion and licensure. The honest framing is the same as for any admissions test: prepare seriously because the score shapes admission outcomes, and understand that the wage payoff the data supports runs through the degree and the license, not the score itself. The DAT runs about 4.5 hours, costs about $525, and is scored on a 1-30 scale.',
    rows: [
      { label: 'Dentists median, May 2024', value: '$179,210', note: 'BLS OEWS, SOC 29-1021' },
      { label: 'All-occupation median, May 2024', value: '$49,500', note: 'BLS OEWS' },
      { label: 'DAT score range', value: '1-30 per section', note: 'ADA, standardized scale' },
      { label: 'DAT length', value: '~4.5 hours', note: 'ADA' }
    ],
    growth: 'Dentist employment is projected to grow 6 percent from 2024 to 2034 per BLS; dental-school admission remains competitive.',
    source: { label: 'BLS Occupational Outlook Handbook - Dentists', url: 'https://www.bls.gov/ooh/healthcare/dentists.htm' }
  },
  passRate: {
    headline: 'The DAT has no pass/fail line; sections score 1-30 and schools weigh scores against their applicant pools',
    summary: 'The ADA publishes no pass rate for the DAT because there is no passing score. The DAT is scored on a 1-30 standardized scale per section (the scale is normalized so a 15-16 is roughly average), and the key numbers are the Academic Average (the average of the Biology, General Chemistry, Organic Chemistry, Reading Comprehension and Quantitative Reasoning sections) and the Perceptual Ability (PAT) score, which schools weigh against their applicant pools. There is no universal target: competitive dental schools commonly report Academic Averages in the 20-23 range for admitted classes, while the applicant pool average sits in the high teens to low 20s depending on the cycle. The test runs about 4.5 hours and contains six sections: Survey of the Natural Sciences (100 questions: Biology 40, General Chemistry 30, Organic Chemistry 30), Perceptual Ability Test (90 questions), Reading Comprehension (50 questions), and Quantitative Reasoning (40 questions). The exam is computer-based, delivered by Prometric, and costs about $525 (verify the current fee); candidates may retake after a 90-day wait, with a limit of three attempts (and a fourth with a special request). Scores are reported to the ADA and to dental schools through AADSAS. The honest takeaway: build the target from each school\u2019s admitted-class averages, not from a pass line that does not exist, and plan the testing timeline around dental-school application cycles.',
    source: { label: 'ADA DAT official information', url: 'https://www.ada.org/education/dental-admission-test' },
    caveat: 'No pass rate exists; targets come from school admitted-class averages. Retake rules: 90-day wait, 3-attempt limit.'
  },
  studyPlan: {
    summary: 'A serious DAT plan runs 200-350 hours over 3-6 months, and the natural-sciences section dominates the prep. The test has six sections: Survey of the Natural Sciences (Biology 40 questions, General Chemistry 30, Organic Chemistry 30 - 100 questions total), Perceptual Ability Test (90 questions), Reading Comprehension (50 questions), and Quantitative Reasoning (40 questions), running about 4.5 hours. Month 1: establish the baseline with a full practice test, and start the Biology content review (cellular and molecular biology, genetics, anatomy and physiology, evolution and ecology) - the largest single section. Months 2-3: General Chemistry and Organic Chemistry content review with daily practice questions, and start the PAT training - the PAT (angle ranking, hole punching, cube counting, pattern folding) is a trainable skill that many candidates under-prepare, and daily PAT practice is essential because the sections are unlike anything in coursework. Month 4: Reading Comprehension strategy (the passages are scientific and time-pressured) and Quantitative Reasoning review (math through algebra, some trig), with daily question volume across all sections. Month 5: full timed practice tests weekly, targeted review of the weakest sections, and taper. The dominant resources are the official DAT practice tests (ADA materials and the Prometric practice test), the major DAT prep books and question banks, and the study apps; the honest expectation is that most successful candidates use a structured prep program or book series.',
    totalHours: '200-350 hours over 3-6 months',
    weeks: [
      { label: 'Month 1', focus: 'Baseline and Biology', tasks: ['Full practice test', 'Biology content review'], hours: 60 },
      { label: 'Months 2-3', focus: 'Chemistry and PAT', tasks: ['Gen Chem and O Chem with daily Qs', 'Daily PAT practice'], hours: 140 },
      { label: 'Month 4', focus: 'Reading and Quant', tasks: ['Reading strategy', 'Quantitative review; daily volume'], hours: 80 },
      { label: 'Month 5', focus: 'Full tests and taper', tasks: ['Weekly full timed tests', 'Target weak sections'], hours: 60 }
    ],
    variants: [
      { label: 'Timeline', detail: 'Most candidates take the DAT in the spring or summer before the AADSAS application cycle; plan the retake buffer.' },
      { label: 'Retake rules', detail: '90-day wait between attempts with a 3-attempt limit; a strong first-attempt plan matters.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective DAT strategies treat the natural sciences as the foundation and the PAT as a trainable skill. Strategy one: weight the Survey of the Natural Sciences heavily - it is 100 questions and the largest block, and Biology is the single largest section, so the content review must be deep and systematic; a structured prep book or course is the standard approach because the content spans three sciences. Strategy two: train the PAT daily - angle ranking, hole punching, cube counting and pattern folding are unlike anything in coursework, and the sections are trainable with daily practice; candidates who skip PAT training lose an entire testable skill set. Strategy three: practice with official materials for the format - the ADA practice test and the Prometric practice exam match the computer-based delivery, and timing rehearsal matters in a 4.5-hour exam. Strategy four: master the timing per section - the natural sciences allow about 90 minutes, PAT 60, Reading 60 and Quant 45 - and practice section blocks under time, because pacing is the silent failure mode. Strategy five: build the biology depth first, because it is the largest section and the content is memorization-heavy; chemistry follows with problem practice. Strategy six: manage the retake reality - the 90-day wait and the 3-attempt limit mean the first attempt should come after a full-length practice-test score at or above the target.',
    items: [
      { title: 'Weight the natural sciences', detail: '100 questions and the largest block; Biology is the biggest section.' },
      { title: 'Train the PAT daily', detail: 'Angle ranking, hole punching, cube counting are trainable.' },
      { title: 'Rehearse the section timing', detail: '4.5-hour pacing is a silent failure mode.' },
      { title: 'Use official practice tests', detail: 'The computer-based format matches the real delivery.' },
      { title: 'Plan for the retake rules', detail: '90-day wait, 3-attempt limit - make the first attempt count.' }
    ]
  },
  resourceComparison: {
    summary: 'The DAT resource market has a clear official core and a well-developed commercial field. The official ADA DAT practice test and the Prometric practice exam (about $50-100 combined) match the computer-based format and are the accuracy standard for calibration. Commercial prep dominates the study hours: the major DAT prep books ($50-$100 each for the full series) and online question banks and courses ($300-$1,000+) provide the content review, question volume and PAT training that the official materials do not fully cover; the most popular prep programs are the standard investment for serious candidates. Free resources include the ADA DAT guide (free PDF) and free PAT practice apps, which are useful supplements. The exam fee is about $525 (verify current pricing), and candidates should budget for the full prep investment. The honest ranking: the official practice tests for calibration, a structured prep book series or course for content, a question bank for volume, and free PAT apps for daily training. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official ADA practice test', values: ['$50-$100', 'Online', 'Format calibration'] },
      { label: 'DAT prep book series', values: ['$50-$100 per book', 'Print/ebook', 'Content review across the sciences'] },
      { label: 'Prep course / question bank', values: ['$300-$1,000+', 'Online', 'Structure, volume, and PAT training'] },
      { label: 'Free PAT practice apps', values: ['Free', 'Mobile', 'Daily perceptual-ability training'] },
      { label: 'ADA DAT guide', values: ['Free PDF', 'Downloadable', 'Format and scoring information'] }
    ],
    footnote: 'Prices dated 2025-26; the DAT exam fee is ~$525. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common DAT mistakes come from mis-weighting the sections and under-preparing the PAT. Mistake one: under-preparing the PAT; the perceptual-ability sections are unlike anything in coursework and are trainable, but candidates who skip daily PAT practice leave an entire skill set untrained. Mistake two: studying chemistry at the expense of Biology, the largest single section; the Biology content (cellular biology, genetics, anatomy, evolution) rewards depth, and candidates who shortchange it lose the biggest block. Mistake three: ignoring the timing; the 4.5-hour exam with six sections rewards section-block rehearsal, and candidates who practice untimed misjudge pacing. Mistake four: walking into the first attempt without a full practice test at or above the target; the 90-day wait and 3-attempt limit make a calibrated first attempt valuable. Mistake five: using outdated materials; the DAT content and delivery have evolved, and candidates should match the current format. Mistake six: ignoring the reading-comprehension section as "easy"; the scientific passages are time-pressured, and untrained candidates lose points on a section that strategy improves. Finally, candidates should plan the timeline around the application cycle, because a late score narrows school options.',
    items: [
      { mistake: 'Under-preparing the PAT', fix: 'Daily PAT training; the sections are trainable.' },
      { mistake: 'Shortchanging Biology', fix: 'It is the largest single section; study it deep.' },
      { mistake: 'Practicing untimed', fix: 'Rehearse the section blocks under time.' },
      { mistake: 'Uncalibrated first attempt', fix: 'Hit the target on a full practice test first.' },
      { mistake: 'Ignoring the timeline', fix: 'Plan around the dental-school application cycle.' }
    ]
  },
  questionTypes: {
    summary: 'The DAT is a computer-based exam of about 4.5 hours with six sections: Survey of the Natural Sciences (Biology 40, General Chemistry 30, Organic Chemistry 30 - 100 questions, ~90 minutes), Perceptual Ability Test (90 questions, ~60 minutes), Reading Comprehension (50 questions, ~60 minutes), and Quantitative Reasoning (40 questions, ~45 minutes). Sections score 1-30; the Academic Average and PAT are the key reported numbers. The exam is delivered by Prometric and costs about $525. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'Biology', share: '40 items', detail: 'Cellular and molecular, genetics, anatomy, evolution, ecology.' },
      { name: 'General and Organic Chemistry', share: '60 items', detail: 'General chemistry and organic reactions and mechanisms.' },
      { name: 'Perceptual Ability', share: '90 items', detail: 'Angle ranking, hole punching, cube counting, pattern folding.' },
      { name: 'Reading and Quantitative', share: '90 items', detail: 'Scientific passages; math through algebra and some trig.' }
    ],
    samples: [
      {
        prompt: 'Biology item: Which organelle is primarily responsible for ATP production in eukaryotic cells?',
        options: ['A. Ribosome', 'B. Mitochondrion', 'C. Golgi apparatus', 'D. Lysosome'],
        answer: 'B',
        explanation: 'The mitochondrion carries out cellular respiration and produces most ATP; the other organelles serve protein synthesis, modification and digestion roles.'
      },
      {
        prompt: 'General chemistry item: What is the pH of a solution with a hydrogen ion concentration of 1 × 10⁻³ M?',
        options: ['A. 2', 'B. 3', 'C. 7', 'D. 10'],
        answer: 'B',
        explanation: 'pH = -log[H+]; for 1 × 10⁻³ M, the pH is 3.'
      },
      {
        prompt: 'Quantitative item: If 2x + 3 = 15, what is the value of x?',
        options: ['A. 5', 'B. 6', 'C. 9', 'D. 12'],
        answer: 'B',
        explanation: 'Subtract 3 from both sides: 2x = 12; divide by 2: x = 6.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'The DAT is administered by Prometric at authorized test centers, on scheduled testing dates throughout the year (candidates select a date when registering). On the day, arrive 30 minutes early with the admission letter and a valid government-issued photo ID; the exam is computer-based, about 4.5 hours including a scheduled break, and personal electronics are not permitted; a calculator function is built into the software for the Quantitative section (no personal calculators). The ADA requires candidates to take the exam under the current testing protocols; scores are reported to the ADA and released to the candidate and dental schools through the AADSAS application system, typically within several weeks. Candidates may retake after a 90-day wait, with a limit of three attempts (a fourth requires a special request to the ADA). Afterwards, send scores to target schools through AADSAS before deadlines, and use the section breakdown to plan any retake; the DAT score is part of the dental-school application package alongside GPA, coursework, interviews and the personal statement.',
    bring: ['Admission letter', 'Valid government-issued photo ID', 'Appointment confirmation', 'A rested morning for the 4.5-hour exam'],
    leave: ['Phone, smartwatch, and personal electronics', 'Personal calculators or notes', 'Anything requiring lockers - plan to stow it'],
    timeline: [
      { time: '30 min before', detail: 'Arrive and check in at the Prometric center.' },
      { time: 'Natural Sciences', detail: '~90 minutes, 100 questions.' },
      { time: 'PAT', detail: '~60 minutes, 90 questions.' },
      { time: 'Break', detail: 'Scheduled break.' },
      { time: 'Reading and Quantitative', detail: '~60 and ~45 minutes.' },
      { time: 'Several weeks later', detail: 'Scores released to the ADA and schools.' }
    ],
    rules: [
      'Valid ID and the admission letter are mandatory.',
      'Personal electronics and calculators are not permitted.',
      'The exam is computer-based with a built-in calculator for Quant.',
      'Retake: 90-day wait, 3-attempt limit.'
    ],
    afterwards: 'Send scores to target schools through AADSAS before deadlines, and use the section breakdown to plan any retake.'
  }
};

export default data;
