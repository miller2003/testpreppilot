const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'School admissions & independent-school testing desk',
    bio: 'We cover SSAT and other independent-school admission tests. Format and fee facts come from the EMA/SSAT official pages and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the SSAT Upper Level format, scoring and fees against SSAT official pages; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The SSAT gates independent-school admission: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The SSAT (Secondary School Admission Test) is an admissions test for independent and private schools, and it is used by hundreds of schools across the US and internationally for admission to grades 3-12 (the Upper Level serves grades 8-11 applicants). It is an admissions test, not a job credential, so no BLS SOC code corresponds to a score; the economic case runs through the educational pathway the test helps open. The independent-school pipeline leads to college, and the earnings evidence BLS documents is the same gradient that frames all admissions testing: in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone. The honest framing, which the research literature supports, is that the SSAT predicts school performance and admission outcomes within the schools that use it, but the wage payoff belongs to the educational attainment the placements enable, not to the test itself. BLS classifies workers by occupation and education, not test scores, so no SSAT percentile maps to a salary. For families, the practical value is access: schools weigh the SSAT alongside grades, interviews, recommendations and school reports, and a strong score widens admission options at the schools that require it. The SSAT also offers the Character Skills Snapshot (a separate, non-cognitive assessment some schools request) and score-choice options that let families choose which scores to send; the Upper Level scores run 1500-2400 (500-800 per section).',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'SSAT Upper Level score range', value: '1500-2400', note: 'EMA/SSAT, 500-800 per section' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'The SSAT has no pass/fail line; scores run 1500-2400 and each school sets its own expectations',
    summary: 'The SSAT organization does not publish a pass rate because there is no passing score. The SSAT Upper Level is scored 1500-2400, with each of three sections (Quantitative, Verbal, Reading) scored 500-800; the total is the sum. Scores are reported with percentiles by grade and gender, and schools use the scores as one input alongside grades, interviews, recommendations and school reports. Because each school weighs the SSAT differently, there is no universal target; families research each school\u2019s typical admitted range and stated policy. The SSAT offers Score Choice, which lets families send only their best scores (or specific sittings), and the "Flex" testing option in addition to the standard testing dates. The test itself runs about 3 hours 5 minutes for the Upper Level: Writing Sample (25 minutes, unscored but sent to schools), Quantitative (2 sections of 25 questions, 30 minutes each), Verbal (60 questions, 30 minutes), Reading (40 questions, 40 minutes), plus a break and an experimental section. The Writing Sample is not scored but is forwarded to schools. The SSAT also reports the Character Skills Snapshot separately when the family opts in, and some schools require it. The honest takeaway: define the target from each school\u2019s admitted range and policy, not from a pass line that does not exist, and use Score Choice to manage which scores schools see.',
    source: { label: 'SSAT official scoring information', url: 'https://www.ssat.org' },
    caveat: 'No pass rate exists; targets come from each school\u2019s admitted range and weighting.'
  },
  studyPlan: {
    summary: 'A realistic SSAT Upper Level plan runs 40-80 hours over 6-12 weeks. The test has three scored sections: Quantitative (50 questions across two 30-minute sections, testing arithmetic, elementary algebra, geometry and word problems), Verbal (60 questions in 30 minutes - 30 synonyms and 30 analogies), and Reading (40 questions in 40 minutes across passages). Week 1: take an official SSAT practice test and record the three section scores. Weeks 2-5: build vocabulary - the Verbal section\u2019s synonyms and analogies reward a broad vocabulary, and a systematic word list plus daily reading is the highest-yield investment; most Upper Level candidates need hundreds of words. Weeks 4-7: Quantitative practice, focusing on the question types and on careless-error reduction; the math content is below the level of the school curriculum for many applicants, so accuracy and timing dominate. Weeks 6-9: Reading - practice passage strategies (main idea, inference, vocabulary-in-context) under the 40-minute timing. Weeks 10-12: timed full tests weekly, error review, and test-day logistics. The official SSAT materials (the SSAT.org practice tests and the Official Guide) are the accuracy standard; third-party materials vary in fidelity. Families should also confirm the Character Skills Snapshot requirement at target schools and schedule the SSAT sitting with enough lead time for the application deadlines (fall/winter sittings for spring application cycles).',
    totalHours: '40-80 hours over 6-12 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Baseline', tasks: ['Official SSAT practice test', 'Section scores and error log'], hours: 6 },
      { label: 'Weeks 2-5', focus: 'Verbal and vocabulary', tasks: ['Systematic word list', 'Synonym and analogy drills, daily reading'], hours: 30 },
      { label: 'Weeks 4-7', focus: 'Quantitative', tasks: ['Question-type drills', 'Accuracy and timing'], hours: 24 },
      { label: 'Weeks 6-9', focus: 'Reading', tasks: ['Passage strategies', 'Timed passage sets'], hours: 16 },
      { label: 'Weeks 10-12', focus: 'Full timed tests', tasks: ['Weekly full tests', 'Error review and logistics'], hours: 18 }
    ],
    variants: [
      { label: 'Grade-specific percentiles', detail: 'Percentiles are reported by grade and gender; compare against the target school\u2019s admitted range for your grade.' },
      { label: 'Character Skills Snapshot', detail: 'Some schools request the separate non-cognitive Snapshot; confirm the requirement before registering.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective SSAT strategies target the Verbal section\u2019s vocabulary load and the test\u2019s timing. Strategy one: build vocabulary systematically - the Verbal section rewards word knowledge more than any other single factor, and a structured word list plus daily reading is the highest-return preparation; synonyms and analogies both depend on it. Strategy two: learn the analogy logic - the SSAT analogies test specific relationships (synonym, antonym, part-whole, cause-effect), and practicing the relationship types converts vocabulary into scores. Strategy three: practice the Quantitative sections under the two 30-minute blocks, because the content is often below the applicant\u2019s current math class and the real challenge is accuracy under time; careless errors are the main score leak. Strategy four: use official SSAT materials for practice tests - the official practice tests and Official Guide match the format and scoring, while third-party materials vary in fidelity and can mislead on the Writing Sample\u2019s role. Strategy five: use Score Choice strategically - families can choose which sittings to send, so planning two sittings and sending the best reduces stress and risk. Strategy six: manage the day itself - the test runs over three hours with an unscored Writing Sample and experimental section, so stamina and a rested morning matter; the Writing Sample is sent to schools even though unscored, so it should be taken seriously.',
    items: [
      { title: 'Build vocabulary daily', detail: 'The Verbal section rewards word knowledge above all else.' },
      { title: 'Learn analogy relationships', detail: 'Synonym, antonym, part-whole, cause-effect types.' },
      { title: 'Practice Quant under timing', detail: 'The content is often below the curriculum; accuracy under time is the test.' },
      { title: 'Use official practice tests', detail: 'Only official materials match the format and scoring.' },
      { title: 'Plan Score Choice', detail: 'Two sittings with the best score sent reduces risk.' }
    ]
  },
  resourceComparison: {
    summary: 'The SSAT resource market is anchored by the official SSAT.org materials, which are the accuracy standard. The official SSAT practice tests (available on ssat.org, including a free practice test and paid practice packs around $20-50) and the Official Guide to the SSAT (about $25-40) match the format and scoring; using them is the recommended baseline. The free official resources include a practice test and format information. Commercial SSAT prep books ($15-$40) and courses ($200-$2,000) provide structure and practice volume; the major publishers\u2019 books are serviceable, and courses are most defensible for students needing pacing or vocabulary accountability. Tutoring ($60-$200/hour) is common in competitive markets where families target specific schools. The Character Skills Snapshot requires no preparation (it is a non-cognitive measure). The honest ranking: official practice tests and Official Guide first, a commercial book for volume, and courses or tutoring only when structure or specific gaps justify the cost. Prices here are current as of the 2025-26 admission cycle and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official SSAT practice tests', values: ['Free test; paid packs $20-$50', 'Online', 'Format and scoring fidelity'] },
      { label: 'Official Guide to the SSAT', values: ['$25-$40', 'Print/ebook', 'Structure and strategy'] },
      { label: 'Commercial prep book', values: ['$15-$40', 'Print', 'Practice volume'] },
      { label: 'Course or tutor', values: ['$200-$2,000', 'Live/online/1:1', 'Structure and targeted gaps'] }
    ],
    footnote: 'Prices dated 2025-26; ssat.org official materials are the accuracy standard. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common SSAT mistakes come from vocabulary gaps and timing miscalculation. Mistake one: neglecting the Verbal section\u2019s vocabulary load; candidates who focus on math while ignoring synonyms and analogies lose the most trainable points, because vocabulary builds slowly and must start early. Mistake two: guessing wildly on analogies; learning the relationship types converts blind guessing into educated elimination. Mistake three: practicing quantitative without the two-30-minute-block timing; the SSAT\u2019s math content is often below the applicant\u2019s grade level, so the real failure mode is careless errors under time pressure, not missing concepts. Mistake four: ignoring the Writing Sample because it is unscored; it is sent to schools, and a careless sample undermines an otherwise strong application. Mistake five: using third-party practice tests that misrepresent the format; the score can be misleading and wastes preparation. Mistake six: forgetting the Character Skills Snapshot and the school-specific requirements; some schools require the Snapshot or a specific testing window, and missing them complicates the application. Finally, families should plan the testing timeline around application deadlines - fall and winter sittings for spring cycles - because late scores narrow options.',
    items: [
      { mistake: 'Neglecting vocabulary', fix: 'Start the word list early; it builds slowly.' },
      { mistake: 'Guessing on analogies', fix: 'Learn the relationship types for educated elimination.' },
      { mistake: 'Practicing Quant untimed', fix: 'Train the two 30-minute blocks for accuracy under time.' },
      { mistake: 'Ignoring the Writing Sample', fix: 'It is unscored but sent to every school.' },
      { mistake: 'Misplanning the timeline', fix: 'Sit early enough for application deadlines.' }
    ]
  },
  questionTypes: {
    summary: 'The SSAT Upper Level has three scored sections: Quantitative (50 questions in two 30-minute sections - arithmetic, elementary algebra, geometry, word problems), Verbal (60 questions in 30 minutes - 30 synonyms and 30 analogies), and Reading (40 questions in 40 minutes across prose and poetry passages). The total scores 1500-2400 (500-800 per section), plus an unscored Writing Sample (25 minutes, sent to schools) and an experimental section. Scores are reported with grade- and gender-based percentiles. Samples below are editor-written illustrations of the published test specifications, not live exam items.',
    types: [
      { name: 'Quantitative', share: '50 items / 60 min', detail: 'Arithmetic, elementary algebra, geometry, word problems.' },
      { name: 'Verbal', share: '60 items / 30 min', detail: '30 synonyms and 30 analogies.' },
      { name: 'Reading', share: '40 items / 40 min', detail: 'Prose and poetry passages.' },
      { name: 'Writing Sample', share: '25 min (unscored)', detail: 'One prompt, sent to schools.' }
    ],
    samples: [
      {
        prompt: 'Synonym: Which word is closest in meaning to "abundant"?',
        options: ['A. scarce', 'B. plentiful', 'C. absent', 'D. broken'],
        answer: 'B',
        explanation: '"Abundant" means existing in large quantities; "plentiful" is the closest match, while "scarce" is the antonym.'
      },
      {
        prompt: 'Analogy: "Brush is to painting as chisel is to ______."',
        options: ['A. sculpture', 'B. hammer', 'C. wood', 'D. artist'],
        answer: 'A',
        explanation: 'A brush is a tool used in painting as a chisel is a tool used in sculpture; the relationship is tool-to-activity.'
      },
      {
        prompt: 'Quantitative: If 3x + 4 = 19, what is the value of x?',
        options: ['A. 3', 'B. 5', 'C. 7', 'D. 8'],
        answer: 'B',
        explanation: 'Subtract 4 from both sides: 3x = 15; divide by 3: x = 5.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published test specifications, not live exam items.'
  },
  examDay: {
    summary: 'The SSAT Upper Level is administered on standard national testing dates (typically eight per year, fall through spring) at approved test centers, plus Flex testing arranged by schools on alternative dates. On the day, students check in with an admission ticket and a valid photo ID; the test is paper-based, so bring sharpened No. 2 pencils. The total testing time is about 3 hours 5 minutes for the scored sections plus the Writing Sample and break, so plan for a full morning. Phones, smartwatches and calculators are not permitted (no calculator use on the SSAT). Students with documented disabilities apply for accommodations through the SSAT organization in advance. Scores post online about two weeks after the test, and Score Choice lets families choose which sittings to send to schools. Afterwards, send the score and the Writing Sample to target schools before deadlines, verify each school\u2019s weighting and any Character Skills Snapshot requirement, and plan any retake around the school\u2019s superscore or score-choice policy.',
    bring: ['Admission ticket', 'Valid photo ID', 'Sharpened No. 2 pencils', 'A rested morning'],
    leave: ['Phone, smartwatch, and personal electronics', 'Calculator (not permitted on the SSAT)', 'Notes or study materials'],
    timeline: [
      { time: 'Check-in', detail: 'Arrive and check in with the admission ticket and ID.' },
      { time: 'Writing Sample', detail: '25 minutes, unscored but sent to schools.' },
      { time: 'Quantitative 1-2', detail: 'Two 30-minute sections (50 questions total).' },
      { time: 'Break', detail: 'Short break.' },
      { time: 'Verbal', detail: '30 minutes, 60 questions.' },
      { time: 'Reading', detail: '40 minutes, 40 questions.' },
      { time: '~2 weeks later', detail: 'Scores post; Score Choice available.' }
    ],
    rules: [
      'The SSAT is paper-based; fill in bubbles with No. 2 pencils.',
      'Calculators are not permitted.',
      'Personal electronics are not permitted in the testing room.',
      'Accommodations must be pre-approved through the SSAT organization.'
    ],
    afterwards: 'Send scores and the Writing Sample before deadlines, verify each school\u2019s weighting and Snapshot requirement, and plan any retake with Score Choice.'
  }
};

export default data;
