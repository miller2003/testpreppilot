const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'English-language assessment desk',
    bio: 'The Duolingo English Test structure (adaptive format, timing, scoring) is drawn from the official DET program materials, which are revised on a published cycle. There is no single pass rate because DET has no pass/fail standard — institutions set their own cut scores, and we explain that plainly. Score-use and fee information is stated as of the current official program page.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the official Duolingo English Test program materials (current edition) for test format, scoring, and acceptance.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'The Duolingo English Test has no direct salary outcome — it is a proficiency gate for university admissions and migration, and its value is access to higher education and jobs that require English verification.',
    summary: 'The salary answer for the Duolingo English Test is indirect: the BLS does not publish a wage for English-proficiency scores, because DET is not an occupation credential but a computer-adaptive English-proficiency test used primarily for university admissions, visa applications, and employer English verification. The earnings story is the education-access premium: DET is accepted by thousands of universities worldwide, including many institutions in the United States, the United Kingdom, Canada, Australia, and Europe, and a strong score is a precondition for admission to degree programs whose graduates earn significantly more than non-degree earners — the BLS college-education earnings gap is the largest single wage differential in the US labor market. The test is scored on a 10-to-160 scale aligned to the Common European Framework of Reference (CEFR), with institutions setting their own cut scores — commonly 105-120 for undergraduate admissions and 120-135 for graduate programs at selective schools. The practical advantages of DET over proctored-center tests are speed and access: the test is taken at home on a computer, costs about $65, lasts about one hour, and returns results within about two days, which makes it the fastest English-proficiency option for application deadlines. The honest caveat is that acceptance is institution-specific — a candidate should verify that the target school or program accepts DET and check the program\u2019s cut score before investing, because not every institution accepts it, and some programs still require a proctored test such as TOEFL or IELTS. For a candidate asking whether DET pays, the direct answer is that it pays through the doors it opens: as an admission gate to degree programs and visa processes, the score is a cheap, fast credential whose earnings impact is measured in the lifetime wage difference between degree and non-degree employment.',
    rows: [
      { label: 'Score scale', value: '10-160', note: 'Aligned to CEFR (A1-C2)' },
      { label: 'Typical cut scores', value: '105-135', note: 'Institution-set; graduate programs often require 120+' },
      { label: 'Test length', value: '~1 hour', note: 'Computer-adaptive, taken at home' },
      { label: 'Salary impact', value: 'Indirect', note: 'Admission access to degree programs and visa processes' }
    ],
    growth: 'DET adoption has grown rapidly since its 2020 expansion; thousands of institutions now accept it, making it one of the fastest-growing English-proficiency tests.',
    source: { label: 'Duolingo English Test official program page', url: 'https://englishtest.duolingo.com' }
  },
  passRate: {
    headline: 'The Duolingo English Test has no published pass rate — it reports a 10-160 score with no pass/fail standard, and each institution sets its own cut line.',
    summary: 'The direct answer on pass rates is that none exists to publish: DET is scored on a 10-to-160 scale with no pass/fail threshold, so the program does not report pass rates the way certification bodies do. Instead, each accepting institution defines its own cut score, which is why the same 120 score can satisfy one school and fall short at another. What is published and stable is the test format: DET is a computer-adaptive test taken online at home under remote proctoring, lasting about one hour, and it measures integrated English skills through a mix of adaptive multiple-choice items and production tasks — reading, listening, writing, and speaking are assessed through item types such as read-and-select, listen-and-type, complete the sentences, interactive reading, writing samples, and speaking prompts. The adaptive engine adjusts item difficulty to the candidate\u2019s performance, and the final score on the 10-160 scale maps to the CEFR bands from A1 to C2, with sub-scores reported for literacy, comprehension, conversation, and production. The certification cost is about $65 per test, and results are delivered within roughly two days of the test, which is the fastest reporting window among major English-proficiency tests. The practical read on difficulty: because the test is adaptive and integrated, candidates who are strong in reading but weak in speaking see the production tasks pull their score down, so preparation should cover all four skills rather than drilling one format; the official free practice test on the DET site is the best readiness check because it returns a predicted score band. Because there is no pass/fail, the smart approach is to identify the target institution\u2019s cut score first, then practice until the free practice-test score clears it with margin, then sit the real test — and the ability to retake with new scores, subject to the program\u2019s retake rules, makes the test low-risk to attempt.',
    source: { label: 'Duolingo English Test official test format and scoring', url: 'https://englishtest.duolingo.com/institutions' },
    caveat: 'DET publishes no pass rate because the test has no pass/fail standard; institution cut scores on the 10-160 scale define what counts as acceptable.'
  },
  studyPlan: {
    summary: 'An efficient DET study plan is 4-8 weeks of about 40-60 total hours, because the test is a computer-adaptive, integrated-skills exam that rewards balanced proficiency across reading, listening, writing, and speaking, and the fastest score gains come from taking the official free practice test first and then targeting the weakest sub-skill. The first step is the official practice test on the DET site, which returns a predicted score band and identifies the production sub-skills (writing and speaking) that most often lag behind comprehension; candidates who are strong in reading but weak at typing their answers or speaking under time pressure see the production score drag down the total, and that gap is the study target. The study window should split into skill building (weeks 1-4) and adaptive-format rehearsal (weeks 5-8): the production tasks — typing responses and speaking prompts — need deliberate daily practice because they are timed and on-screen, and the adaptive reading and listening items reward exposure to a broad vocabulary range. Candidates applying to programs with a 105-120 cut should budget the lower end if their English is already intermediate; candidates at the beginner-intermediate boundary targeting 120+ should budget the upper end and add daily integrated practice. The final two weeks should be full-length practice sessions using the official test and reputable third-party simulations, because the one-hour adaptive format and the on-screen typing pace are the two things candidates underestimate, and the score ceiling on DET comes from production fluency, not from recognizing more vocabulary. Because the adaptive engine samples a wide difficulty range, candidates should also practice slightly above their comfortable level — if the free practice test predicts a 110, drilling materials at the 120-130 band prepares the adaptive climb, and the production prompts should be rehearsed at the same difficulty the target band requires, so the timed typing and speaking feel familiar rather than surprising on test day.',
    totalHours: '40-60 hours over 4-8 weeks',
    weeks: [
      { label: 'Week 1', focus: 'Diagnostic', tasks: ['Take the official DET free practice test', 'Record the predicted score band and sub-scores', 'Identify the weakest sub-skill (literacy, comprehension, conversation, production)'], hours: 6 },
      { label: 'Week 2-3', focus: 'Comprehension building', tasks: ['Drill the adaptive reading and listening item types', 'Build academic and everyday vocabulary by topic', 'Practice read-and-select, listen-and-type, and completion items'], hours: 14 },
      { label: 'Week 4-5', focus: 'Production skills', tasks: ['Practice on-screen typing responses under time limits', 'Drill the speaking prompts: describe, summarize, and answer', 'Work the writing-sample prompts and self-edit'], hours: 16 },
      { label: 'Week 6-7', focus: 'Full-length rehearsal', tasks: ['Take a full DET practice session each week', 'Log every miss by sub-skill and re-study the target', 'Re-take the official practice test to measure movement'], hours: 12 },
      { label: 'Week 8', focus: 'Readiness', tasks: ['Take one more full practice session above the target cut', 'Re-drill the miss log until clean', 'Confirm the testing environment, computer, and ID requirements'], hours: 8 }
    ],
    variants: [
      { label: 'Targeting a specific program cut', detail: 'Identify the institution\u2019s cut score (often published on the admissions page) and practice until the predicted score clears it with margin.' },
      { label: 'Weak production skills', detail: 'Weight time toward the writing and speaking prompts; production sub-scores most often lag comprehension.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the Duolingo English Test is balanced-skill practice with heavy emphasis on the production tasks, because the test is adaptive and integrated and the writing and speaking sub-scores most often pull down an otherwise strong total. First, take the official free practice test before any study: it returns a predicted score band and the sub-score breakdown, which tells you exactly where the points are lost. Second, drill the adaptive item types deliberately — read-and-select, listen-and-type, complete-the-sentences, and the interactive reading passages — because the adaptive engine adjusts difficulty and candidates who only practice static materials underperform on the on-screen formats. Third, practice the production tasks under time pressure every day: the typing responses and the speaking prompts are timed, and candidates who can think and type in English fluently outperform those who can recognize English but not produce it. Fourth, use the official free practice test weekly as the progress measure, because its predicted band is the most reliable readiness check and it is free to retake. Fifth, build vocabulary breadth deliberately — DET samples academic and everyday language across a wide range, and the adaptive engine rewards knowing more words at each band. Finally, check the target institution\u2019s acceptance and cut score before registering, because not every school accepts DET and the cut varies; then book the real test for a date that lands after the practice-score progression. A further high-yield tactic is to rehearse the test-day environment itself: DET is taken at home with remote proctoring, so practice in the same quiet room with the same computer and camera setup, and verify the system requirements and ID rules in advance, because environment-related disqualifications are the most avoidable cause of a wasted attempt.',
    items: [
      { title: 'Diagnose with the official practice test', detail: 'It returns a predicted band and sub-scores — the roadmap for study.' },
      { title: 'Drill the adaptive item types', detail: 'Read-and-select, listen-and-type, and completion items reward on-screen format fluency.' },
      { title: 'Practice production daily', detail: 'Timed typing responses and speaking prompts are where most candidates lose points.' },
      { title: 'Rehearse the test-day environment', detail: 'Take DET at home with proctoring; practice in the same room, computer, and camera setup.' },
      { title: 'Verify the target cut score first', detail: 'Institution acceptance and cut scores vary; check the admissions page before registering.' }
    ]
  },
  resourceComparison: {
    summary: 'DET prep resources are unusual because the official program provides a free practice test that returns a predicted score band, which makes the official materials the anchor of every plan and reduces the need for paid resources. The official free practice test on the DET site is the single highest-value resource — it is free, mirrors the real adaptive format, and returns a predicted band and sub-scores — and candidates should take it before buying anything. Third-party DET prep courses and question banks, typically $30-120, add structured practice and volume, which helps candidates who need more reps than the free test provides or who want skill-specific drills; reputable providers are the ones that reference the current test format. General English-proficiency courses, $50-200, help candidates whose fundamentals are weak, but they are a complement because DET\u2019s adaptive and production format needs format-specific rehearsal. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The test fee itself is about $65 per certification, which makes DET by far the cheapest major English-proficiency test, and results arrive within about two days, so a retake after a short study burst is affordable and fast. A cheap readiness check is the free official practice test before any purchase, because candidates within a few band points of the target cut often need only targeted production practice, not a paid course. Candidates should also confirm the program\u2019s retake rules, because the ability to send new scores to institutions is subject to the current policy, and institutions see the score reports they are sent, not every attempt.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official free practice test', values: ['Free', 'Online, adaptive, predicted band', 'The roadmap — take it first'], note: '' },
      { label: 'Third-party DET prep course', values: ['$30-120', 'Online, skill drills', 'Extra reps beyond the free test'], note: '' },
      { label: 'General English course', values: ['$50-200', 'Online or classroom', 'Candidates with weak fundamentals'], note: '' },
      { label: 'DET certification', values: ['~$65', 'Online, remote-proctored', 'The actual test; results in ~2 days'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Confirm the current DET fee and retake policy on the official site.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the Duolingo English Test is preparing for a traditional static test instead of DET\u2019s adaptive, integrated format, because the on-screen item types and the production tasks behave differently from paper-style English exams and candidates who drill only reading and listening arrive at the writing and speaking prompts cold; the second is ignoring the sub-score breakdown and studying all skills equally, when the production sub-scores most often drag down an otherwise strong total. A third recurring error is treating the test like a pass/fail and aiming at a generic score, when the real target is the specific institution cut score — a 115 might admit to one program and fall short at another. Candidates also routinely neglect the test-day environment: DET is taken at home with remote proctoring, and an unstable internet connection, an incorrect camera setup, or a room with prohibited materials can invalidate the attempt. Another pattern is skipping the free official practice test and buying paid materials first, when the free test is the most reliable diagnostic. Finally, some candidates wait until the application deadline, forgetting that the score report is valid and sendable only per the program\u2019s current rules and that institutions review scores within their own windows. A further recurring error is typing answers slowly, because the production tasks are timed on screen and candidates who are accurate but slow leave responses incomplete; others speak too quietly or too quickly in the speaking prompts, and the automated scoring rewards clear, natural pacing. Some candidates also skip the weekly practice-test retake and lose the trend measurement, and a few ignore the system-check requirements until the real attempt, risking an environment-related invalidation.',
    items: [
      { mistake: 'Preparing for a static test format', fix: 'Drill DET\u2019s adaptive item types and the timed production tasks; the format is part of the score.' },
      { mistake: 'Studying all skills equally', fix: 'Use the practice-test sub-scores and weight time toward the weakest sub-skill, usually production.' },
      { mistake: 'Aiming at a generic score', fix: 'Identify the target institution\u2019s cut score and practice until the predicted band clears it.' },
      { mistake: 'Neglecting the home-test environment', fix: 'Verify internet, computer, camera, and room requirements; practice in the same setup.' },
      { mistake: 'Waiting until the deadline', fix: 'Check the program\u2019s current retake and score-sending rules and plan the test around the application window.' }
    ]
  },
  questionTypes: {
    summary: 'The Duolingo English Test is a computer-adaptive test taken online at home under remote proctoring, lasting about one hour, and it reports a 10-160 score aligned to the CEFR with sub-scores for literacy, comprehension, conversation, and production. The adaptive engine mixes item types across skills: read-and-select, listen-and-type, complete-the-sentences, interactive reading passages, writing-sample prompts, and speaking prompts, with the difficulty adjusting to performance. The samples below illustrate three of the core item types — a read-and-select item, a completion item, and a writing-style prompt — using the real format. The sample items are editor-written illustrations of the published format, not live test items. The read-and-select items present a grid of words and ask which are real English, testing vocabulary breadth under speed; the completion items test grammar in context; the interactive reading passages add comprehension questions across a paragraph set; and the production prompts — a writing sample and speaking responses — are scored on the CEFR-aligned sub-skills, so candidates should practice producing complete, natural responses rather than fragments. The read-and-select items present a grid of words and ask which are real English, testing vocabulary breadth under speed; the completion items test grammar in context; the interactive reading passages add comprehension questions across a paragraph set; and the production prompts — a writing sample and speaking responses — are scored on the CEFR-aligned sub-skills. Candidates should practice producing complete, natural responses rather than fragments, because the production sub-scores most often lag comprehension, and the free official practice test is the best way to measure which item types pull down the overall band.',
    types: [
      { name: 'Read-and-select', share: 'Core adaptive type', detail: 'Select the real English words from a set; tests vocabulary breadth.' },
      { name: 'Complete-the-sentences', share: 'Core adaptive type', detail: 'Choose the word that completes a sentence correctly; tests grammar in context.' },
      { name: 'Interactive reading and production', share: 'Integrated tasks', detail: 'Passages with questions plus timed writing and speaking prompts.' }
    ],
    samples: [
      {
        prompt: 'Read-and-select item (illustrated): Which of the following are real English words?',
        options: [
          'A. beautiful',
          'B. teplid',
          'C. knowledge',
          'D. flurish'
        ],
        answer: 'A, C',
        explanation: '"Beautiful" and "knowledge" are real English words. "Teplid" and "flurish" are not — they resemble words (tepid, flourish) but are not real vocabulary, and the item type tests exactly this distinction.'
      },
      {
        prompt: 'Complete the sentence: "The report needs to be ___ before the meeting on Friday."',
        options: [
          'A. finished',
          'B. finishing',
          'C. finish',
          'D. finishes'
        ],
        answer: 'A',
        explanation: '"Needs to be" requires the past participle, so "finished" is correct: "the report needs to be finished." The other forms do not fit the passive construction.'
      },
      {
        prompt: 'Writing-style prompt (illustrated): "Write about a time you had to work with a team to solve a problem. What did you do, and what was the result?"',
        options: [
          'A. Write a single sentence only',
          'B. Write a short paragraph with details and a clear outcome',
          'C. List vocabulary words without sentences',
          'D. Repeat the prompt in your own words only'
        ],
        answer: 'B',
        explanation: 'The production tasks reward a developed response: a short paragraph with specific details and a clear outcome demonstrates the writing sub-skill. One-sentence or repeated-prompt answers underperform on the scoring rubric.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published format, not live test items.'
  },
  examDay: {
    summary: 'The Duolingo English Test is taken online at home on a computer under remote proctoring, and the direct exam-day answer is that the adaptive test lasts about one hour, costs about $65, and reports a 10-160 score within about two days, with no pass/fail — the target is the institution\u2019s cut score. Before the test, complete the system check on the official site: a working camera, microphone, and stable internet connection are required, and the proctoring rules require a quiet, private room with no other people, no headphones in most configurations, and no prohibited materials on the desk. Have the required photo ID and a clear workspace ready, because the proctor reviews the environment and the ID at the start. The test opens with the proctoring setup and ID verification, then the adaptive items run continuously for about an hour; the production tasks are timed, so pace the typing and speaking responses, and remember that the writing and speaking prompts have their own time limits. Expect no scheduled breaks — the test runs straight through — and keep your eyes on the screen, because proctoring software flags unusual behavior and a flagged attempt can be invalidated. The score and sub-scores appear in the DET account within about two days, and candidates can send the score to institutions through the account; check the program\u2019s current score-sending and retake rules, because they have changed across program versions, and institutions see the reports they are sent. If the score falls short of the target cut, the test can be retaken, and the sub-score breakdown shows which skill to improve before the next attempt.',
    bring: ['Government-issued photo ID for proctoring verification', 'A quiet, private room with no other people', 'A working computer with camera and microphone', 'A stable internet connection and a clear desk'],
    leave: ['Phone and other electronics (out of reach during the test)', 'Headphones, if the current program rules prohibit them', 'Notes and printed materials (remove from the desk)', 'Other people in the room'],
    timeline: [
      { time: 'Before the test', detail: 'Complete the system check; verify camera, microphone, internet, and ID' },
      { time: '0-10 min', detail: 'Proctoring setup and ID verification; environment review' },
      { time: '~1 hour', detail: 'Adaptive test: reading, listening, writing, and speaking items run continuously' },
      { time: 'After the test', detail: 'Score and sub-scores in the DET account within ~2 days' }
    ],
    rules: ['Quiet, private room required; no other people visible', 'Camera and microphone required for remote proctoring', 'No prohibited materials on the desk; follow the current program rules', 'The test runs straight through with no scheduled breaks'],
    afterwards: 'Receive the 10-160 score and sub-scores within about two days, send them to institutions through the DET account, and retake if the score falls short of the target cut — the sub-score breakdown shows which skill to improve.'
  }
};

export default data;
