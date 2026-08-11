const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'School admissions & gifted-education testing desk',
    bio: 'We cover ability tests used in school admissions and gifted programs, including the OLSAT-8. Format and fee facts come from the test publishers and school policies and are revised; wage and education-earnings figures come from the BLS occupational series named by code. We state plainly when a figure is not published.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Verified the OLSAT-8 structure, scoring and school-administered delivery against the publisher and school-district policies; verified BLS education-and-earnings data. Reviewed 2026-08.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'OLSAT-8 gates access to gifted programs and selective schools: bachelor-degree median weekly earnings were $1,543 in 2024 (BLS)',
    summary: 'The OLSAT-8 (Otis-Lennon School Ability Test, Eighth Edition) is a group-administered ability test used by school districts for gifted-and-talented program placement and by some private and magnet schools for admissions; it measures verbal and nonverbal reasoning rather than achievement. It is not a job credential, so no BLS SOC code corresponds to a score. The economic case runs through the educational pathways the test can open: gifted programs, accelerated coursework, and selective school admissions are access points to the academic pipeline whose outcomes BLS documents - in 2024, full-time workers age 25 and older with a bachelor degree earned median weekly wages of $1,543, versus $1,109 with an associate degree and $998 with a high-school diploma alone. The honest framing, which the research literature supports, is that OLSAT scores predict school performance and placement outcomes within the programs that use them, but the wage payoff belongs to the educational attainment the placements enable, not to the test itself. BLS classifies workers by occupation and education, not test scores, so no OLSAT percentile maps to a salary. For families, the practical value of the test is access: districts use a score threshold (often the 90th or 95th percentile on a composite) for gifted-program eligibility, and private schools use it alongside achievement tests for admission decisions, so a strong score widens options, while the long-term earnings evidence runs through the schooling those options provide. The test also has a diagnostic role: the verbal/nonverbal split identifies reasoning strengths and weaknesses that schools use to tailor instruction.',
    rows: [
      { label: 'Bachelor-degree median weekly earnings, 2024', value: '$1,543', note: 'BLS, workers 25+, full time' },
      { label: 'Associate-degree median weekly earnings, 2024', value: '$1,109', note: 'BLS, workers 25+, full time' },
      { label: 'High-school diploma median weekly earnings, 2024', value: '$998', note: 'BLS, workers 25+, full time' },
      { label: 'Typical OLSAT-8 eligibility threshold', value: '~90th-95th percentile', note: 'Set by each school district; varies widely' }
    ],
    growth: 'BLS projects 3 percent overall employment growth from 2024 to 2034; the wage-by-education gradient is the relevant comparison.',
    source: { label: 'BLS Occupational Outlook Handbook - Pay & Education', url: 'https://www.bls.gov/ooh/education/education-pays.htm' }
  },
  passRate: {
    headline: 'OLSAT-8 is not pass/fail; districts set gifted-placement thresholds, commonly around the 90th percentile',
    summary: 'The OLSAT-8 publisher (Pearson) does not publish a pass rate, and there is no universal passing score because the test is a norm-referenced ability measure. Scores are reported as a School Ability Index (SAI) with a mean of 100 and standard deviation of 16, plus percentile ranks by age group; the percentile, not the raw score, is what districts use. Gifted-and-talented eligibility thresholds are set by each district and vary widely - many use the 90th percentile on the composite or a specific subtest, some require the 95th or 97th, and others use a multi-measure system combining the OLSAT with achievement tests, teacher ratings and portfolios. Because the test is normed on a national age cohort, roughly 10 percent of students score at or above the 90th percentile, so the "pass rate" for gifted placement is definitionally about 10 percent or less wherever the 90th percentile threshold applies - but that is a property of the norming, not a test result. The OLSAT-8 is group-administered in schools (also individually when needed) with verbal and nonverbal items read aloud for the earliest grades, and the publisher recommends testing within a specific grade-level window. The honest summary for families is to ask the district for the exact eligibility criteria before the test, because the threshold and the weighting of the OLSAT within the overall placement process are the numbers that actually determine the outcome, and those vary by district and by program.',
    source: { label: 'Pearson OLSAT-8 product information', url: 'https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Ability-Aptitude/Otis-Lennon-School-Ability-Test-%7C-Eighth-Edition/p/100000492.html' },
    caveat: 'No pass rate exists; gifted thresholds are set by each district, commonly the 90th-95th percentile, and often combined with other measures.'
  },
  studyPlan: {
    summary: 'The OLSAT-8 measures reasoning ability, and preparation is a contested topic: most districts advise against test prep, while many families use light familiarity practice. The defensible middle ground is a light plan (5-10 hours) focused on format familiarity, because the test is untimed in the sense of being pace-tolerant and the items are unusual (analogies, classification, figural reasoning) compared with classroom work. The test has a Verbal section (verbal comprehension and verbal reasoning - following directions, antonyms, sentence completion, sentence arrangement, verbal classification, analogies) and a Nonverbal section (pictorial and figural reasoning - pictorial classification, pictorial analogies, figural classification, figural analogies, pattern matrices, figural series), with the mix varying by grade level. A sensible plan: week 1, obtain the publisher\u2019s sample questions (free samples are published) and the district\u2019s eligibility criteria, and complete one short practice set; weeks 2-3, practice the item types the student finds hardest, especially the figural reasoning formats, which are unlike schoolwork; week 4, one timed practice session under the district\u2019s reported format, then rest. Families should resist intensive drilling: the test\u2019s purpose is measuring reasoning, over-preparation distorts the placement decision, and districts using multi-measure systems weight classroom achievement and teacher ratings heavily. The highest-return preparation is actually developmental - reading with children, puzzles, and reasoning-rich conversation - which builds the underlying abilities the test samples.',
    totalHours: '5-10 hours of light format practice over 3-4 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Format and criteria', tasks: ['Publisher sample questions', 'District eligibility criteria'], hours: 2 },
      { label: 'Weeks 2-3', focus: 'Hardest item types', tasks: ['Figural reasoning practice', 'Verbal analogy and classification'], hours: 5 },
      { label: 'Week 4', focus: 'Timed session and rest', tasks: ['One timed practice session', 'Rest before the test'], hours: 3 }
    ],
    variants: [
      { label: 'District policy on prep', detail: 'Some districts discourage or prohibit test preparation; check the district\u2019s guidance before practicing.' },
      { label: 'Multi-measure systems', detail: 'Many districts combine the OLSAT with achievement tests, teacher ratings and portfolios; the OLSAT is one input.' }
    ]
  },
  prepStrategies: {
    summary: 'The most effective OLSAT strategies are about format familiarity and developmental support rather than cramming. Strategy one: learn the item types before the test, because the figural reasoning formats (pattern matrices, figural series, figural analogies) are unlike anything in classroom work, and format confusion measurably depresses scores; the publisher\u2019s free samples cover the types. Strategy two: verify the district\u2019s exact eligibility rules - the percentile threshold, which subscores count (some programs use the nonverbal score alone), and how the OLSAT is weighted against achievement tests and teacher ratings - because the preparation target follows the rule. Strategy three: check whether the district discourages prep; some districts explicitly advise against it, and honoring that guidance respects the placement process. Strategy four: build the underlying abilities developmentally - reading daily, verbal puzzles, analogies in conversation, pattern and sequence games - because the test samples reasoning developed over years, and this is the only preparation with real long-term value. Strategy five: manage the test-day environment - good sleep, a calm morning, and a clear explanation to the child that the test is not graded like schoolwork - because young students\u2019 performance is environment-sensitive. Strategy six: for private-school admissions use, ask the school which score they look at (composite vs verbal/nonverbal) and whether the OLSAT is one of several measures, and keep the practice proportionate to the stakes.',
    items: [
      { title: 'Learn the item types', detail: 'Figural reasoning formats are unlike schoolwork; know them before the test.' },
      { title: 'Check the district\u2019s rule', detail: 'Threshold, subscore use, and weighting vary by district.' },
      { title: 'Respect prep guidance', detail: 'Some districts discourage or prohibit prep; follow their policy.' },
      { title: 'Build abilities developmentally', detail: 'Reading, puzzles and reasoning-rich conversation have real value.' }
    ]
  },
  resourceComparison: {
    summary: 'The OLSAT-8 resource market is smaller and more restrained than the achievement-test market, and much of it sits in a gray zone. The official and appropriate resources are the publisher\u2019s free sample questions and the district\u2019s guidance materials, which are free and sufficient for format familiarity; Pearson publishes a brief OLSAT-8 brochure with sample items, and districts usually provide an information packet. Commercial "OLSAT prep" books and apps ($10-$40) exist and teach the item types, and some families use them for format practice; the honest caution is that intensive commercial prep for an ability test is both of questionable value (the test measures developed reasoning) and discouraged by many districts, and the returns are concentrated in format familiarity, which the free samples already provide. Full test-prep courses ($100-$1,000) for the OLSAT are overkill for most families. The most valuable "resource" is developmental: daily reading, puzzles and reasoning-rich activities that cost nothing. The honest ranking: free publisher samples and district materials, optionally a low-cost book for item-type practice, and nothing more. Prices here are current as of 2025-26 and change annually.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Publisher sample questions', values: ['Free', 'PDF', 'Item-type familiarity'] },
      { label: 'District guidance packet', values: ['Free', 'School materials', 'Eligibility rules and format'] },
      { label: 'Commercial prep book/app', values: ['$10-$40', 'Print/mobile', 'Extra item-type practice (optional)'] },
      { label: 'Full prep course', values: ['$100-$1,000', 'Live/online', 'Overkill for most families'] },
      { label: 'Developmental activities', values: ['Free', 'Home', 'Reading, puzzles, reasoning-rich conversation'] }
    ],
    footnote: 'Prices dated 2025-26; official samples and district guidance are sufficient for most families. No commission-based ranking.'
  },
  commonMistakes: {
    summary: 'The most common OLSAT-related mistakes are about expectations and preparation. Mistake one: intensive cramming for an ability test; the OLSAT measures developed reasoning, and heavy drilling both distorts the placement decision and often violates district guidance, while the returns are confined to format familiarity. Mistake two: not learning the item types at all - the opposite failure; a capable student who has never seen figural analogies or pattern matrices can score below their true ability, so at least the free samples are worth doing. Mistake three: focusing on the wrong score; families often chase the composite when the district\u2019s gifted program uses a subscore (some programs weigh the nonverbal score heavily), so the eligibility rule should drive the preparation target. Mistake four: ignoring the multi-measure context; many districts combine the OLSAT with achievement tests and teacher ratings, and a single strong or weak OLSAT score is not the whole decision. Mistake five: treating a lower-than-expected score as a verdict on the child; the test samples one narrow band of reasoning at one point in time, and districts frequently allow appeals or re-testing under specific conditions. Mistake six: testing a tired or anxious child; young students\u2019 performance is environment-sensitive, and a rushed morning can depress a score that shapes placement. Finally, families should ask the district directly what the score will and will not be used for, because assumptions about the test\u2019s role are the most common source of disappointment.',
    items: [
      { mistake: 'Intensive cramming', fix: 'Light format practice; the test measures developed reasoning.' },
      { mistake: 'Seeing item types cold', fix: 'Review the free samples; figural formats are unfamiliar.' },
      { mistake: 'Chasing the wrong score', fix: 'Follow the district\u2019s threshold and subscore rule.' },
      { mistake: 'Ignoring multi-measure systems', fix: 'The OLSAT is often one input among several.' },
      { mistake: 'Testing a tired child', fix: 'Sleep, calm morning, low-stress framing.' }
    ]
  },
  questionTypes: {
    summary: 'The OLSAT-8 has two sections. Verbal: verbal comprehension (following directions, antonyms, sentence completion, sentence arrangement) and verbal reasoning (verbal classification, verbal analogies). Nonverbal: pictorial reasoning (pictorial classification, pictorial analogies) and figural reasoning (figural classification, figural analogies, pattern matrices, figural series). The item mix varies by level; the earliest levels have read-aloud items. Results are reported as a School Ability Index (SAI, mean 100, SD 16) and percentile ranks by age. Samples below are editor-written illustrations of the published item formats, not live exam items.',
    types: [
      { name: 'Verbal comprehension', share: 'Verbal section', detail: 'Following directions, antonyms, sentence completion.' },
      { name: 'Verbal reasoning', share: 'Verbal section', detail: 'Verbal classification and analogies.' },
      { name: 'Pictorial reasoning', share: 'Nonverbal section', detail: 'Pictorial classification and analogies.' },
      { name: 'Figural reasoning', share: 'Nonverbal section', detail: 'Figural classification, analogies, matrices, series.' }
    ],
    samples: [
      {
        prompt: 'Verbal analogy: "Hand is to glove as foot is to ______."',
        options: ['A. sock', 'B. shoe', 'C. toe', 'D. ankle'],
        answer: 'B',
        explanation: 'A glove covers a hand as a shoe covers a foot; the analogy tests the relationship of covering, with "sock" a close distractor that also covers but is typically worn beneath.'
      },
      {
        prompt: 'Figural series: The pattern shows a circle, square, circle, square, ______. Which figure comes next?',
        options: ['A. A circle', 'B. A square', 'C. A triangle', 'D. A star'],
        answer: 'A',
        explanation: 'The series alternates circle and square; after square, the next figure is a circle.'
      },
      {
        prompt: 'Following directions: "Look at the row of animals: cat, dog, bird. Put a mark on the animal that flies."',
        options: ['A. Cat', 'B. Dog', 'C. Bird', 'D. None'],
        answer: 'C',
        explanation: 'The instruction asks for the animal that flies; the bird is the only one, and the item tests careful following of directions.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published item formats, not live exam items.'
  },
  examDay: {
    summary: 'The OLSAT-8 is group-administered at the student\u2019s school on a date the district schedules, typically during the school day, with the earliest levels using read-aloud items. There is no individual registration fee and no private testing in most districts (private schools arrange their own administrations). Parents should ensure the student is well-rested, has eaten, and understands that the test is not graded like schoolwork; the school handles materials, timing and instructions. The publisher recommends a specific testing window by grade level, and the administration typically takes under an hour for the OLSAT itself (total testing time varies by level). Results are returned to the school, which shares them with parents and applies them to the district\u2019s eligibility process; timing varies by district but is commonly within several weeks. Afterwards, families should ask the school to explain the score report (SAI, percentiles, verbal/nonverbal split), confirm how the district uses the result, and - if the outcome is disappointing - ask about the district\u2019s appeal or re-testing policy before assuming the result is final.',
    bring: ['A well-rested, fed student', 'A calm morning and low-stress framing', 'Any district-required forms already submitted'],
    leave: ['Test-day cramming - the test measures developed reasoning', 'Anxiety-inducing framing - treat it like a normal school activity', 'Assumptions about the score\u2019s role - ask the district'],
    timeline: [
      { time: 'Before the test', detail: 'District schedules the administration; parents ensure rest and food.' },
      { time: 'Test day', detail: 'Group administration at school; under an hour for the OLSAT.' },
      { time: 'Results', detail: 'Returned to the school, typically within several weeks.' },
      { time: 'After results', detail: 'Ask for the score report explanation and the district\u2019s use of it.' }
    ],
    rules: [
      'The test is group-administered at school; no individual registration fee.',
      'Earliest levels use read-aloud items.',
      'Districts set eligibility thresholds and often combine measures.',
      'Appeal and re-testing policies vary by district; ask directly.'
    ],
    afterwards: 'Review the score report with the school, confirm how the district uses the result, and ask about appeal or re-testing options if the outcome disappoints.'
  }
};

export default data;
