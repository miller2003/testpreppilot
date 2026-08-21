const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'The Praxis Music exam structure is drawn from the ETS Praxis official test information for test code 5113, which is updated on a published revision cycle; ETS does not publish pass rates, and each state sets its own passing score, which we state plainly. Salary figures come from the BLS Occupational Outlook Handbook occupation pages named by SOC code (May 2024).',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the ETS Praxis test information for Music: Content Knowledge (5113) and the BLS OOH teacher occupation pages (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'K-12 teachers earned May 2024 BLS medians of $62,310-$64,580 by grade band, and the Praxis Music score is the licensure gate for school music teaching roles.',
    summary: 'The salary answer for the Praxis Music exam is a teacher-licensure story: the BLS Occupational Outlook Handbook reports May 2024 median annual wages of $62,310 for SOC 25-2021 Kindergarten and Elementary School Teachers, $62,970 for SOC 25-2022 Middle School Teachers, and $64,580 for SOC 25-2031 High School Teachers, and the Praxis score itself does not appear in wage data because the BLS classifies by job duty, not by certification. The exam is the licensure gate for music teaching roles in the states that use the Praxis series: candidates must pass the state-set passing score — each state publishes its own cut score on the ETS portal, and the exact number varies by state and year — before they can hold a music teaching position in a public school, and most states license music teachers as elementary, middle, or secondary teachers depending on the assignment. Teacher pay varies substantially by state and district, with the BLS noting that the highest-paying states for teachers sit well above the national median, and music teachers follow the same schedule-based compensation system as other teachers, with pay rising with years of service and advanced degrees. The BLS projects slow employment change for teachers from 2024 to 2034, but tens of thousands of openings per year from replacement demand, so the job market for licensed music teachers is steady, and the license — not the subject — is the employment gate. Two caveats anchor the picture: first, the Praxis score is a state-licensure requirement, not an employment credential, so its value is realized through the license; second, music positions are often shared across schools or districts and can be fewer in number than classroom-teacher positions, so the license pairs with job-search persistence. For a candidate asking whether Praxis Music pays, the direct answer is that it pays through the teaching license it enables, and the earnings follow the state salary schedule rather than the score itself.',
    rows: [
      { label: 'Median annual wage (elementary)', value: '$62,310', note: 'BLS OOH, Kindergarten & Elementary School Teachers (SOC 25-2021), May 2024' },
      { label: 'Median annual wage (middle)', value: '$62,970', note: 'BLS OOH, Middle School Teachers (SOC 25-2022), May 2024' },
      { label: 'Median annual wage (high school)', value: '$64,580', note: 'BLS OOH, High School Teachers (SOC 25-2031), May 2024' },
      { label: 'Job openings', value: 'Tens of thousands/year', note: 'Mostly replacement demand (BLS 2024-2034)' }
    ],
    growth: 'BLS projects slow employment change for K-12 teachers (2024-2034) with large annual openings driven by replacement demand; music assignments follow the district staffing cycle.',
    source: { label: 'BLS Occupational Outlook Handbook - High School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/high-school-teachers.htm' }
  },
  passRate: {
    headline: 'ETS does not publish Praxis pass rates — each state sets its own passing score for Music (5113), so "passing" varies by licensure state.',
    summary: 'The direct answer on pass rates is that ETS does not publish cohort pass-rate statistics for Praxis exams, including Music: Content Knowledge (5113), so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and stable is the reporting structure: each state that uses the Praxis series sets its own passing score on the ETS scaled-score scale, and the passing mark for Music varies by state and is published on each state\u2019s teacher-licensure page and on the ETS state requirements tool — so the same score can clear one state\u2019s requirement and fall short at another, and the candidate\u2019s target is the licensure state\u2019s cut, not a national number. The exam itself, under the current ETS test information for 5113, is a computer-based test of 120 selected-response questions — 30 of which are based on recorded musical excerpts — with a 2-hour time limit divided into a listening section and a non-listening section, delivered at Pearson VUE centers, with content spanning music theory, history and literature, performance, listening analysis, and music pedagogy — the exact specification should be confirmed on the current ETS page, because ETS revises test specifications on a published cycle. The practical read on difficulty: the exam rewards both a broad music education background and the listening-analysis skill the audio items require, and candidates who studied music education in college and rehearse the audio format reliably clear the state-set passing mark, while candidates who sit cold underperform on the listening and pedagogy items. Because the passing mark is state-set, the smart approach is to confirm the target state\u2019s cut score first, study to that target, and retake after the ETS-mandated waiting period if the first attempt falls short.',
    source: { label: 'ETS Praxis test information for Music: Content Knowledge (5113)', url: 'https://praxis.ets.org/test/5113' },
    caveat: 'ETS publishes no pass rates for Praxis exams; the passing score for Music (5113) is set by each state and varies, so confirm the target state\u2019s cut score on the ETS state requirements tool.'
  },
  studyPlan: {
    summary: 'An efficient Praxis Music study plan is 40-60 hours over 4-6 weeks, because the exam combines a broad music-content base with 30 audio-based listening items, and the fastest score gains come from covering the content categories in the ETS test-at-a-glance while drilling the listening-analysis format the audio section rewards. The ETS official materials are the scope map: the test-at-a-glance for 5113 lists the content categories and their approximate weights — music history and literature, theory and composition, performance, listening, and pedagogy — and studying the categories in proportion to their weight is the highest-yield planning decision. The study window should split into content coverage (weeks 1-3) and listening and question-bank drilling (weeks 4-5), followed by a full practice test (week 6): the 30 audio items reward hands-on practice identifying excerpts, and candidates who rehearse with recorded music and the question formats score higher than candidates who only read music texts. Candidates with a completed music education degree should budget the lower end; candidates refreshing after years away from the field should budget the upper end and add history and theory review. The final week should include at least one full timed practice test at the real format, because the two-section structure and the listening pacing are the two things candidates underestimate, and the state-set passing mark is best targeted when practice scores clear it with margin.',
    totalHours: '40-60 hours over 4-6 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Music history, literature, and theory', tasks: ['Study the major periods, genres, and composers across the Western canon', 'Cover music theory: notation, harmony, form, and analysis', 'Review world music and jazz traditions represented on the test'], hours: 16 },
      { label: 'Week 3', focus: 'Performance, listening, and pedagogy', tasks: ['Study the instruments and vocal techniques across the K-12 ensemble spectrum', 'Cover listening-analysis skills: timbre, form, and stylistic identification', 'Review music education pedagogy and curriculum approaches'], hours: 12 },
      { label: 'Week 4-5', focus: 'Listening and question-bank drilling', tasks: ['Drill 300-500 items from a current Praxis Music bank', 'Practice the audio items with recorded excerpts and a miss log', 'Re-read the content categories tied to every miss'], hours: 16 },
      { label: 'Week 6', focus: 'Full test and readiness', tasks: ['Take a full timed practice test scoring above the target cut', 'Re-drill the miss log and re-listen to weak excerpt styles', 'Confirm the Pearson VUE booking and the target state\u2019s passing score'], hours: 8 }
    ],
    variants: [
      { label: 'Music education degree holder', detail: 'Budget the lower end and weight time toward the listening format and question drilling.' },
      { label: 'Returning candidates', detail: 'Budget the upper end and add history and theory review before the pedagogy content.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for Praxis Music is studying the ETS content categories in weight order and drilling the audio-based listening items, because the exam rewards applied listening analysis as much as content knowledge, and the state-set passing mark is best targeted with proportional coverage. First, confirm the target licensure state\u2019s passing score on the ETS state requirements tool, because the cut varies by state and the study target should be that number with margin. Second, use the official ETS materials — the test-at-a-glance, the study companion, and the ETS practice test — because they define the content categories and item style precisely, and the official practice test is the most reliable readiness check. Third, study the content categories in weight order, with music history and theory receiving the largest share, and the pedagogy items receiving deliberate attention because they are the professional core of the exam. Fourth, drill a current question bank, 300-500 items with explanations, and build a miss log tied to the content categories; the bank rehearsal converts the reading into recall. Fifth, practice the listening items deliberately — identify excerpts by period, composer, genre, and form, using recordings that mirror the exam\u2019s audio style — because the 30 audio questions are format-specific and coachable. Finally, schedule the exam when practice scores clear the state cut with margin, and protect the ETS retake waiting period by not burning the first attempt unprepared. A further high-yield tactic is to build a one-page listening map of the major eras and composers during study — key works, characteristic forms, and identifying traits — because the audio items reward the consolidated reference, and the sheet becomes the final review tool.',
    items: [
      { title: 'Confirm the state cut score first', detail: 'Each state sets its own passing score; target that number with margin.' },
      { title: 'Use the official ETS materials', detail: 'The test-at-a-glance and study companion define the content categories and item style.' },
      { title: 'Study the categories in weight order', detail: 'History and theory carry the exam; pedagogy is the professional core.' },
      { title: 'Drill a current bank with a miss log', detail: '300-500 items with explanations, tied to the content categories.' },
      { title: 'Practice the listening items deliberately', detail: 'Identify excerpts by era, composer, genre, and form; the 30 audio items are coachable.' }
    ]
  },
  resourceComparison: {
    summary: 'Praxis Music prep resources split into the ETS official set, review books, and question banks, and the buying logic is anchored by the official materials because ETS publishes the test-at-a-glance, the study companion, and an official practice test that define the content and the item style precisely. The official ETS set — free to roughly $30-50 for the practice test — is the foundation of every plan and the most reliable readiness check. Review books for Praxis music, roughly $25-40, add structured content coverage, which helps candidates refreshing the music history and theory content; the well-regarded options track the current test code and content categories. Question banks from reputable providers, roughly $30-60, add volume and explanations, which helps candidates who need more reps than the official practice test provides; the banks that reference the current 5113 test code are the ones to choose. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is $130 for Music: Content Knowledge (ETS sets the fee), with the exact amount on the ETS registration page. A cheap readiness check is the free test-at-a-glance and the sample questions before buying anything, because candidates with a music education degree often need only the official practice test and a bank, not a full review course. Candidates should also confirm the retake policy and waiting period, because ETS sets the retake rules and the licensure timeline depends on them.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'ETS official materials + practice test', values: ['Free to ~$50', 'Official documents + practice test', 'The authoritative scope and readiness check'], note: '' },
      { label: 'Praxis music review book', values: ['$25-40', 'Book with content coverage', 'Candidates refreshing history and theory'], note: '' },
      { label: 'Question bank with audio items', values: ['$30-60', 'Online, current items', 'Extra reps beyond the official set'], note: '' },
      { label: 'Praxis registration', values: ['$130', 'ETS/Pearson VUE', 'The real test'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The Praxis fee for Music: Content Knowledge is $130 (confirm on the ETS page).'
  },
  commonMistakes: {
    summary: 'The most common mistake on Praxis Music is studying the content without rehearsing the audio-based listening items, because the 30 listening questions are format-specific and candidates who only read music history texts lose points on the excerpt-identification items; the second is treating the exam like a national-standard test, when the passing score is set by each state and the real target is the licensure state\u2019s cut. A third recurring error is skipping the official practice test and sitting cold, when the official readiness check is the cheapest way to target the study plan. Candidates also routinely mis-pace the two-section structure, spending too long on the listening section and rushing the non-listening section. Another pattern is using an outdated review source that references an older test code or content outline, when ETS revises specifications on a published cycle. Finally, some candidates retake too quickly after a failed attempt, forgetting the ETS-mandated waiting period and re-sitting without the targeted re-study the miss log should have guided.',
    items: [
      { mistake: 'Skipping listening-item rehearsal', fix: 'Drill excerpt identification by era, composer, genre, and form; the 30 audio items are coachable.' },
      { mistake: 'Aiming at a national standard', fix: 'Confirm the licensure state\u2019s cut score and study to that target with margin.' },
      { mistake: 'Skipping the official practice test', fix: 'Take the ETS practice test first; it is the most reliable readiness check.' },
      { mistake: 'Mis-pacing the two-section format', fix: 'Rehearse the listening and non-listening split during timed practice.' },
      { mistake: 'Using outdated materials', fix: 'Verify that any review source references the current 5113 test code and content outline.' }
    ]
  },
  questionTypes: {
    summary: 'The Praxis Music: Content Knowledge exam (5113) is a computer-based test of 120 selected-response questions over 2 hours, with 30 of the questions based on recorded musical excerpts, delivered at Pearson VUE centers, with content spanning music history and literature, theory, performance, listening analysis, and pedagogy — the exact specification should be confirmed on the current ETS page. The item style is single-best-answer, with a mix of knowledge-recall items, theory items, and the audio-based listening items. The samples below illustrate three of the content areas — a music history item, a theory item, and a pedagogy item. The sample items are editor-written illustrations of the published blueprint, not live test items.',
    types: [
      { name: 'Listening-analysis items', share: '30 of 120', detail: 'Identify excerpts by period, composer, genre, and form from recorded music.' },
      { name: 'History and literature items', share: 'Substantial share', detail: 'Composers, periods, genres, and representative works.' },
      { name: 'Theory, performance, and pedagogy items', share: 'Core content', detail: 'Notation, harmony, form, instruments, and teaching practice.' }
    ],
    samples: [
      {
        prompt: 'A musical work features a solo vocalist, an orchestra, and a dramatic story unfolding across multiple movements with recitative and aria sections. This work is best classified as which genre?',
        options: [
          'A. Opera',
          'B. Symphony',
          'C. String quartet',
          'D. Art song'
        ],
        answer: 'A',
        explanation: 'Opera is a dramatic stage genre that combines solo vocalists, orchestra, and a story, structured with recitatives and arias. A symphony is a large orchestral work without staged drama, a string quartet is chamber music for four strings, and an art song is a solo vocal setting of a poem.'
      },
      {
        prompt: 'In a major key, which chord is built on the fifth scale degree and typically creates the strongest pull back to the tonic?',
        options: [
          'A. The dominant chord',
          'B. The subdominant chord',
          'C. The mediant chord',
          'D. The submediant chord'
        ],
        answer: 'A',
        explanation: 'The dominant chord, built on the fifth scale degree, contains the leading tone and creates the strongest harmonic pull to the tonic, forming the basis of the dominant-tonic cadence that defines tonal harmony. The other chords have weaker or different functions.'
      },
      {
        prompt: 'A beginning band program is selecting instruments for students. Which instrument is generally considered the most physically accessible for a young student to produce a first sound?',
        options: [
          'A. Flute',
          'B. Tuba',
          'C. Violin',
          'D. Percussion (bells)'
        ],
        answer: 'D',
        explanation: 'Percussion instruments such as bells produce a sound immediately when struck, which makes them accessible for a first sound, though rhythm and technique still take practice. Flute embouchure, tuba breath support, and violin intonation all present greater first-sound challenges for beginners.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The Praxis Music: Content Knowledge exam is a computer-based test delivered at Pearson VUE centers, and the direct exam-day answer is that you will sit 120 selected-response questions over 2 hours — 30 based on recorded musical excerpts in a listening section, followed by the non-listening section (confirm the current specification on the ETS page) — with a scaled score reported to the licensure state and the result shown as pass/fail based on the state-set passing score. Arrive with the required government-issued photo ID and your ETS admission ticket, and follow the Pearson VUE check-in rules, because the center enforces strict identification procedures. The appointment begins with a tutorial on the testing software, then the exam clock starts; there are no scheduled breaks, so the timed-practice discipline matters. The listening section plays the recorded excerpts with the questions on screen, and the software supports flagging items for review — use the flag feature rather than leaving items blank, and answer every item. Expect a quiet, proctored environment with a visible countdown clock; pace the 90 non-listening questions to roughly 45-55 seconds each so the listening section is not rushed. A preliminary pass/fail result appears at the end of the appointment, with the official score report following in the ETS account within a short window, and the score is reported to the licensure state per the registration selection. If the score falls short of the state\u2019s cut, the exam can be retaken after the ETS-mandated waiting period, so confirm the retake rules and re-study the miss log before the next attempt. Afterwards, the passing score supports the state music-teaching license application, and the teacher-licensure process continues with the state\u2019s other requirements.',
    bring: ['Government-issued photo ID', 'ETS admission ticket and Pearson VUE booking confirmation', 'Approved glasses or hearing aids if used', 'Snacks for before the test (not in the test room)'],
    leave: ['Phone, smartwatch, and other electronics (stored per center rules)', 'Study materials and notes', 'Personal stationery (the center provides materials)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '15-30 min before', detail: 'Arrive, present ID and admission ticket, and check in' },
      { time: '0-10 min', detail: 'Tutorial on the testing software; then the clock starts' },
      { time: '2 hours', detail: 'Listening section with 30 audio items, then the non-listening section; flag and pace' },
      { time: 'After the test', detail: 'Preliminary pass/fail on screen; official report in the ETS account' }
    ],
    rules: ['Valid photo ID and ETS admission ticket required', 'No scheduled breaks; the exam clock runs continuously', 'No personal electronics in the test room', 'Answer every item; flagging for review is supported'],
    afterwards: 'A passing score supports the state music-teaching license. Confirm the licensure state\u2019s other requirements, and retake after the ETS waiting period with targeted miss-log study if the score falls short of the cut.'
  }
};

export default data;
