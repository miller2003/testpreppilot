const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Teacher licensure & education certifications desk',
    bio: 'The Praxis Geography exam structure is drawn from the ETS Praxis official test information for test code 5921, which is updated on a published revision cycle; ETS does not publish pass rates, and each state sets its own passing score, which we state plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the ETS Praxis test information for Geography (5921) and the BLS OOH High School Teachers page (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'High school teachers earned a May 2024 BLS median of $64,580, and the Praxis Geography score is the licensure gate for geography teaching roles.',
    summary: 'The salary answer for the Praxis Geography exam is a teacher-licensure story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $64,580 for SOC 25-2031 High School Teachers, with the lowest 10 percent earning below $48,250 and the highest 10 percent above $108,150, and the Praxis score itself does not appear in wage data because the BLS classifies by job duty, not by certification. The exam is the licensure gate for geography and social-studies teaching roles in the states that use the Praxis series: candidates must pass the state-set passing score — each state publishes its own cut score on the ETS portal, and the exact number varies by state and year — before they can hold a geography teaching position in a public school. Teacher pay varies substantially by state and district, with the BLS noting that the highest-paying states for secondary teachers sit well above the national median, and geography teachers follow the same schedule-based compensation system as other secondary teachers, with pay rising with years of service and advanced degrees. The BLS projects about 1 percent decline in high-school-teacher employment from 2024 to 2034, but roughly 60,000 openings per year from replacement demand, so the job market for licensed geography teachers is steady rather than booming, and the license — not the subject — is the employment gate. Two caveats anchor the picture: first, the Praxis score is a state-licensure requirement, not an employment credential, so its value is realized through the license; second, geography teaching roles are often part of a social-studies assignment, so some states require additional social-studies exams. For a candidate asking whether Praxis Geography pays, the direct answer is that it pays through the teaching license it enables, and the earnings follow the state salary schedule rather than the score itself.',
    rows: [
      { label: 'Median annual wage', value: '$64,580', note: 'BLS OOH, High School Teachers (SOC 25-2031), May 2024' },
      { label: 'Lowest 10%', value: '$48,250', note: 'Entry-level and low-paying states' },
      { label: 'Highest 10%', value: '$108,150', note: 'Senior teachers in high-paying states' },
      { label: 'Job openings', value: '~60,000/year', note: 'Mostly replacement demand (BLS 2024-2034)' }
    ],
    growth: 'BLS projects about 1 percent change in high-school-teacher employment (2024-2034) with roughly 60,000 openings per year, driven by replacement demand.',
    source: { label: 'BLS Occupational Outlook Handbook - High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish Praxis pass rates — each state sets its own passing score for Geography (5921), so "passing" varies by licensure state.',
    summary: 'The direct answer on pass rates is that ETS does not publish cohort pass-rate statistics for Praxis exams, including Geography (5921), so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the reporting structure: each state that uses the Praxis series sets its own passing score on the ETS scaled-score scale, and the passing mark for Geography varies by state and is published on each state\u2019s teacher-licensure page and on the ETS state requirements tool — so the same score can clear one state\u2019s requirement and fall short at another, and the candidate\u2019s target is the licensure state\u2019s cut, not a national number. The exam itself, under the current ETS test information for 5921, is a computer-based test of roughly 100 questions with a 2-hour time limit, delivered at Pearson VUE centers, with content spanning world and United States geography, physical and human geography, and the geographic skills and technology the teaching role requires — the exact question count and time should be confirmed on the current ETS page, because ETS revises test specifications on a published cycle. The practical read on difficulty: the exam rewards both content knowledge and the map-and-data interpretation skills geography teaching requires, and candidates who study the ETS test-at-a-glance and the official study companion, then drill a current question bank, reliably clear the state-set passing mark, while candidates who sit cold underperform on the physical-geography and geographic-skills items. Because the passing mark is state-set, the smart approach is to confirm the target state\u2019s cut score first, study to that target, and retake after the ETS-mandated waiting period if the first attempt falls short.',
    source: { label: 'ETS Praxis test information for Geography (5921)', url: 'https://praxis.ets.org/test/5921' },
    caveat: 'ETS publishes no pass rates for Praxis exams; the passing score for Geography (5921) is set by each state and varies, so confirm the target state\u2019s cut score on the ETS state requirements tool.'
  },
  studyPlan: {
    summary: 'An efficient Praxis Geography study plan is 40-60 hours over 4-6 weeks, because the exam is a content-breadth test and the fastest score gains come from covering the content categories in the ETS test-at-a-glance while drilling the map-and-data interpretation skills the items reward. The ETS official materials are the scope map: the test-at-a-glance for 5921 lists the content categories and their approximate weights — world and United States geography, physical and human geography, and geographic skills and technology — and studying the categories in proportion to their weight is the highest-yield planning decision. The study window should split into content coverage (weeks 1-3) and question-bank and map-skills drilling (weeks 4-5), followed by a full practice test (week 6): the map-interpretation and data items reward hands-on practice with atlases and the question formats, and candidates who drill the formats against a current bank score higher than candidates who only read geography texts. Candidates with a strong geography or social-studies background should budget the lower end; candidates refreshing after years away from the subject should budget the upper end and add atlas work. The final week should include at least one full timed practice test at the real format, because the pacing and the question mix are the two things candidates underestimate, and the state-set passing mark is best targeted when practice scores clear it with margin.',
    totalHours: '40-60 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'World and US geography', tasks: ['Study world regions: continents, physical features, and cultural patterns', 'Cover United States geography: regions, states, and landforms', 'Build map-reading skills with an atlas'], hours: 16 },
      { label: 'Week 3', focus: 'Physical and human geography', tasks: ['Study physical geography: climate, landforms, and ecosystems', 'Cover human geography: population, culture, and economic patterns', 'Review geographic skills and geospatial technology'], hours: 12 },
      { label: 'Week 4-5', focus: 'Question-bank drilling', tasks: ['Drill 300-500 items from a current Praxis Geography bank', 'Log every miss and re-read the associated content category', 'Practice map and data interpretation items'], hours: 16 },
      { label: 'Week 6', focus: 'Full test and readiness', tasks: ['Take a full timed practice test scoring above the target cut', 'Re-drill the miss log until clean', 'Confirm the Pearson VUE booking and the target state\u2019s passing score'], hours: 8 }
    ],
    variants: [
      { label: 'Strong geography background', detail: 'Budget the lower end and weight time toward the question formats and map-skills drilling.' },
      { label: 'Returning candidates', detail: 'Budget the upper end and add atlas work to refresh map-reading before the content review.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for Praxis Geography is studying the ETS content categories in weight order and drilling a current question bank with a miss log, because the exam rewards the applied map-and-data skills as much as content knowledge, and the state-set passing mark is best targeted with proportional coverage. First, confirm the target licensure state\u2019s passing score on the ETS state requirements tool, because the cut varies by state and the study target should be that number with margin. Second, use the official ETS materials — the test-at-a-glance, the study companion, and the ETS practice test — because they define the content categories and item style precisely, and the official practice test is the most reliable readiness check. Third, study the content categories in weight order, with world and United States geography and the physical/human geography split receiving the largest share, and the geographic-skills items receiving deliberate attention because they are format-specific. Fourth, drill a current question bank, 300-500 items with explanations, and build a miss log tied to the content categories; the bank rehearsal converts the reading into recall. Fifth, practice the map and data interpretation deliberately — the exam includes atlas-style and data items, and candidates who rehearse reading maps and interpreting geographic data score higher on those items. Finally, schedule the exam when practice scores clear the state cut with margin, and protect the ETS retake waiting period by not burning the first attempt unprepared. A further high-yield tactic is to build a one-page map and terminology review during study — key physical features, regions, and the geographic vocabulary — because the recall items reward the consolidated list, and the sheet becomes the final review tool.',
    items: [
      { title: 'Confirm the state cut score first', detail: 'Each state sets its own passing score; target that number with margin.' },
      { title: 'Use the official ETS materials', detail: 'The test-at-a-glance and study companion define the content categories and item style.' },
      { title: 'Study the categories in weight order', detail: 'World/US geography and physical-human geography carry the exam.' },
      { title: 'Drill a current bank with a miss log', detail: '300-500 items with explanations, tied to the content categories.' },
      { title: 'Practice map and data interpretation', detail: 'Atlas-style and data items are format-specific and coachable.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis Geography prep resources split into the ETS official set, review books, and question banks, and the buying logic is anchored by the official materials because ETS publishes the test-at-a-glance, the study companion, and an official practice test that define the content and the item style precisely. The official ETS set — free to roughly $30-50 for the practice test — is the foundation of every plan and the most reliable readiness check. Review books for Praxis geography, roughly $25-40, add structured content coverage, which helps candidates refreshing the content; the well-regarded options track the current test code and content categories. Question banks from reputable providers, roughly $30-60, add volume and explanations, which helps candidates who need more reps than the official practice test provides; the banks that reference the current 5921 test code are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is about $130 per Praxis test (ETS sets the fee), with the exact amount on the ETS registration page. A cheap readiness check is the free test-at-a-glance and the sample questions before buying anything, because candidates with a strong geography background often need only the official practice test and a bank, not a full review course. Candidates should also confirm the retake policy and waiting period, because ETS sets the retake rules and the licensure timeline depends on them.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS official materials + practice test', values: ['Free to ~$50', 'Official documents + practice test', 'The authoritative scope and readiness check'], note: '' },
      { label: 'Praxis geography review book', values: ['$25-40', 'Book with content coverage', 'Candidates refreshing the content'], note: '' },
      { label: 'Question bank', values: ['$30-60', 'Online, current items', 'Extra reps beyond the official set'], note: '' },
      { label: 'Praxis registration', values: ['~$130', 'ETS/Pearson VUE', 'The real test'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The Praxis fee is ~$130 per test (confirm on the ETS page).'
  },
  commonMistakes: {
    summary: 'The most common mistake on Praxis Geography is studying the content without the map and data skills the exam rewards, because the applied interpretation items are format-specific and candidates who only read geography texts lose points on the atlas-style and data items; the second is treating the exam like a national-standard test, when the passing score is set by each state and the real target is the licensure state\u2019s cut. A third recurring error is skipping the official practice test and sitting cold, when the official readiness check is the cheapest way to target the study plan. Candidates also routinely mis-pace the exam, spending too long on the recall items and rushing the interpretation items. Another pattern is using an outdated review source that references an older test code or content outline, when ETS revises specifications on a published cycle. Finally, some candidates retake too quickly after a failed attempt, forgetting the ETS-mandated waiting period and re-sitting without the targeted re-study the miss log should have guided.',
    items: [
      { mistake: 'Skipping map and data practice', fix: 'Drill the atlas-style and data items; they are format-specific and coachable.' },
      { mistake: 'Aiming at a national standard', fix: 'Confirm the licensure state\u2019s cut score and study to that target with margin.' },
      { mistake: 'Skipping the official practice test', fix: 'Take the ETS practice test first; it is the most reliable readiness check.' },
      { mistake: 'Using outdated materials', fix: 'Verify that any review source references the current 5921 test code and content outline.' },
      { mistake: 'Retaking without targeted study', fix: 'Use the miss log to re-study weak categories before the next attempt within the ETS waiting rules.' }
    ]
  },
  questionTypes: {
    summary: 'The Praxis Geography exam (5921) is a computer-based multiple-choice test of roughly 100 questions over 2 hours, delivered at Pearson VUE centers, with content spanning world and United States geography, physical and human geography, and geographic skills and technology — the exact question count and time should be confirmed on the current ETS page. The item style is single-best-answer, with a mix of knowledge-recall items and applied items that use maps, data tables, and geographic scenarios. The samples below illustrate three of the content areas — a physical-geography item, a human-geography item, and a map-skills item. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'Knowledge-recall items', share: 'Substantial share', detail: 'Physical features, regions, and geographic vocabulary.' },
      { name: 'Applied map and data items', share: 'Substantial share', detail: 'Interpret maps, charts, and geographic data.' },
      { name: 'Human and physical geography items', share: 'Core content', detail: 'Population, culture, climate, and landforms.' }
    ],
    samples: [
      {
        prompt: 'Which region is most likely to experience a Mediterranean climate, with hot dry summers and mild wet winters?',
        options: [
          'A. The interior of central Asia',
          'B. Coastal areas of the Mediterranean basin',
          'C. The equatorial rainforest zone',
          'D. The polar tundra zone'
        ],
        answer: 'B',
        explanation: 'The Mediterranean climate — hot dry summers and mild wet winters — is characteristic of coastal areas around the Mediterranean basin, plus similar zones in California, Chile, and southwestern Australia. The other regions have continental, tropical, or polar climates.'
      },
      {
        prompt: 'Which geographic concept best describes the movement of people from rural areas to cities?',
        options: [
          'A. Urbanization',
          'B. Gentrification',
          'C. Suburbanization',
          'D. Counter-urbanization'
        ],
        answer: 'A',
        explanation: 'Urbanization is the increasing concentration of population in cities, driven by rural-to-urban migration. Gentrification changes existing urban neighborhoods, suburbanization moves population to the urban fringe, and counter-urbanization moves it away from cities.'
      },
      {
        prompt: 'A map shows population density highest along a nation\u2019s river valleys. Which factor most directly explains this pattern?',
        options: [
          'A. Access to water for agriculture and transport',
          'B. Higher elevation and cooler temperatures',
          'C. Distance from national borders',
          'D. Concentration of mineral extraction sites'
        ],
        answer: 'A',
        explanation: 'River valleys concentrate population because they provide water for agriculture, transport routes, and fertile soils. Elevation, border distance, and mining do not explain the river-valley pattern.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Geography exam is a computer-based test delivered at Pearson VUE centers, and the direct exam-day answer is that you will sit roughly 100 multiple-choice questions over 2 hours (confirm the current specification on the ETS page), with a scaled score reported to the licensure state and the result shown as pass/fail based on the state-set passing score. Arrive with the required government-issued photo ID and your ETS admission ticket, and follow the Pearson VUE check-in rules, because the center enforces strict identification procedures. The appointment begins with a tutorial on the testing software, then the exam clock starts; there are no scheduled breaks, so the timed-practice discipline matters. All items are single-best-answer, and the software supports flagging items for review — use the flag feature rather than leaving items blank. Expect a quiet, proctored environment with a visible countdown clock; pace at roughly 30 seconds per question to leave review margin. A preliminary pass/fail result appears at the end of the appointment, with the official score report following in the ETS account within a short window, and the score is reported to the licensure state per the registration selection. If the score falls short of the state\u2019s cut, the exam can be retaken after the ETS-mandated waiting period, so confirm the retake rules and re-study the miss log before the next attempt. Afterwards, the passing score supports the state teaching license application, and the teacher-licensure process continues with the state\u2019s other requirements.',
    bring: ['Government-issued photo ID', 'ETS admission ticket and Pearson VUE booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the test (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Personal stationery (the center provides materials)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present ID and admission ticket, and check in' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '~2 hours', detail: 'Work the multiple-choice items; flag for review and pace' },
      { time: 'After the test', detail: 'Preliminary pass/fail on screen; official report in the ETS account' }
    ],
    rules: ['Valid photo ID and ETS admission ticket required', 'No scheduled breaks; the exam clock runs continuously', 'No personal electronics in the test room', 'Answer every item; flagging for review is supported'],
    afterwards: 'A passing score supports the state teaching license. Confirm the licensure state\u2019s other requirements, and retake after the ETS waiting period with targeted miss-log study if the score falls short of the cut.'
  }
};

export default data;
