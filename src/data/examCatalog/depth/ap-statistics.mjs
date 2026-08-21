const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Advanced Placement & college-credit desk',
    bio: 'The AP Statistics exam structure (question counts, timing, scoring) is drawn from the College Board official AP Statistics course and exam description, which is revised on a published cycle; the College Board publishes annual AP score distributions, and we cite that practice. College-credit outcomes and the exam fee are stated as of the current College Board program page.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the College Board official AP Statistics course and exam description (current edition) and the annual AP score distribution report.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'AP Statistics has no direct salary outcome — its value is college credit and placement, and the earnings impact flows through the bachelor\u2019s-degree premium and data-literate career paths.',
    summary: 'The salary answer for AP Statistics is the college-credit story shared by AP exams with a data-literacy twist: the BLS does not publish a wage for AP scores because the AP program is a college-credit and placement system, but statistics is the gateway course for data-analytics, business, economics, and quantitative majors, and those fields carry strong BLS wage profiles — data scientists earned a May 2024 median of $112,590 and financial analysts $101,350. A qualifying AP Statistics score (3 or higher, depending on the college) earns credit toward the introductory statistics requirement that nearly every major includes, which saves tuition and schedule pressure; a 4 or 5 at selective schools can satisfy the requirement entirely. AP Statistics is one of the largest AP exams, with roughly 260,000 test-takers per year, and colleges accept it widely for credit and placement because statistics is a general-education requirement. The exam is 3 hours: a multiple-choice section (40 questions, 90 minutes) and a free-response section (6 questions, 90 minutes, including one investigative task), scored 1-5, with a scientific or graphing calculator permitted. The honest caveat is that credit policies vary — some quantitative majors require an in-house statistics course regardless — so the score\u2019s value depends on the specific college\u2019s policy. For a candidate asking whether AP Statistics pays, the direct answer is that it pays through credit and placement at colleges that accept it, and it is one of the most broadly applicable AP credits because statistics is a near-universal requirement. The statistics career context reinforces the point: the BLS tracks data scientists at a May 2024 median of $112,590, financial analysts at $101,350, and the broader data-literate occupations, all of which require the college-level statistics foundation the AP credit accelerates — so the score’s value flows through both the tuition savings and the readiness for quantitative majors that carry these documented wage profiles.',
    rows: [
      { label: 'Annual test-takers', value: '~260,000', note: 'One of the largest AP exams (College Board)' },
      { label: 'Score scale', value: '1-5', note: '3+ typically qualifies for credit; 4-5 at selective schools' },
      { label: 'Exam length', value: '3 hours', note: '40 MC (90 min) + 6 FRQs (90 min)' },
      { label: 'Salary impact', value: 'Indirect', note: 'College credit and placement; statistics is a near-universal requirement' }
    ],
    growth: 'AP Statistics volume tracks the growth of the AP program and data-driven majors; it remains a top-10 AP exam.',
    source: { label: 'College Board AP Statistics course page', url: 'https://apstudents.collegeboard.org/courses/ap-statistics' }
  },
  passRate: {
    headline: 'The College Board publishes AP Statistics score distributions, not pass rates; in recent cycles roughly three-fifths of test-takers scored 3+ (qualifying), with 4 and 5 concentrated in the top quarter.',
    summary: 'The direct answer on pass rates requires precision: the College Board does not publish a "pass rate" for AP exams because scores are reported on a 1-5 scale and each college defines what qualifies, but the College Board does publish the annual score distribution for every AP subject, which is the closest published statistic. For AP Statistics in recent cycles, roughly three-fifths of test-takers scored 3 or higher — the score most colleges treat as qualifying — with the 4 and 5 scores concentrated in the top quarter of test-takers; the exact percentages shift modestly by year, and the College Board\u2019s annual report is the authoritative source. The exam structure is fixed and published: 40 multiple-choice questions in 90 minutes (50 percent of the score) and 6 free-response questions in 90 minutes (50 percent), with the free responses including five standard items and one investigative task, and a scientific or graphing calculator permitted throughout. The content covers the four big ideas: exploring data (graphical and numerical summaries), sampling and experimentation (study design), anticipating patterns (probability and sampling distributions), and statistical inference (confidence intervals and significance tests). The practical read on difficulty: AP Statistics is less computation-heavy than it is reasoning-heavy — the free responses reward explaining the reasoning (why a design is biased, what a confidence interval means, how a p-value is interpreted) — and candidates who practice the explanation language score higher than candidates who only compute statistics. Because the credit value depends on the college\u2019s policy, the smart approach is to check the target colleges\u2019 AP credit tables and drill the free-response explanation formats.',
    source: { label: 'College Board AP score distribution report and AP Statistics exam description', url: 'https://apcentral.collegeboard.org/courses/ap-statistics/exam' },
    caveat: 'The College Board publishes score distributions, not pass rates; whether a 3, 4, or 5 "passes" depends on each college\u2019s AP credit policy.'
  },
  studyPlan: {
    summary: 'An efficient AP Statistics study plan is 50-70 hours over 10-14 weeks, because the exam is a reasoning-heavy test and the fastest score gains come from mastering the four big ideas while drilling the free-response explanation formats that carry half the score. The College Board course and exam description is the scope map: exploring data, sampling and experimentation, anticipating patterns, and statistical inference, with the multiple-choice section (40 questions, 90 minutes) and the free-response section (6 questions, 90 minutes) each worth 50 percent. The study window should split into content coverage (weeks 1-8) and free-response explanation drilling (weeks 9-12), followed by full practice exams (weeks 13-14): the free responses reward the reasoning — describing design flaws, interpreting confidence intervals, explaining p-values — and candidates who practice that language outperform candidates who only compute. Candidates taking the course in school should budget the lower end; self-studying candidates should budget the upper end and add a structured review book or course. The final two weeks should be full practice exams at the real format — 40 MC in 90 minutes and 6 FRQs in 90 minutes, with the calculator — because the pacing and the explanation writing are the two things candidates underestimate. A mid-plan checkpoint helps: after the content-coverage weeks, take a section-level multiple-choice set and one free response to measure whether the inference procedures and their conditions are automatic, because the exam rewards procedure selection and the remaining weeks should target the weak procedures before the explanation drilling phase. Candidates who keep an inference flowchart during coverage report faster gains in the final practice-exam phase.',
    totalHours: '50-70 hours over 10-14 weeks',
    weeks: [
      { label: 'Week 1-4', focus: 'Data and study design', tasks: ['Study exploring data: graphs, center, spread, and shape', 'Master sampling and experimentation: designs, bias, and randomization', 'Practice identifying design flaws in scenarios'], hours: 20 },
      { label: 'Week 5-8', focus: 'Probability and inference', tasks: ['Study probability, random variables, and sampling distributions', 'Master confidence intervals and significance tests', 'Work the inference conditions for means and proportions'], hours: 22 },
      { label: 'Week 9-11', focus: 'Free-response explanation', tasks: ['Drill the six FRQ formats: the interpretation and explanation language', 'Practice the investigative task: a multi-part data analysis', 'Do a full 40-MC + 6-FRQ practice exam'], hours: 16 },
      { label: 'Week 12-14', focus: 'Full exams and readiness', tasks: ['Take two more full practice exams scoring 3+ then 4+', 'Re-drill the missed topics and explanations until clean', 'Confirm the exam-day logistics, calculator, and registration'], hours: 12 }
    ],
    variants: [
      { label: 'Taking the course in school', detail: 'Budget the lower end; weight time toward the free-response explanation formats.' },
      { label: 'Self-study', detail: 'Budget the upper end and add a structured review book or course for the inference content.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for AP Statistics is mastering the four big ideas while drilling the free-response explanation language, because the exam rewards reasoning — describing designs, interpreting intervals, and explaining p-values — more than computation, and candidates who practice the explanation formats score higher. First, use the College Board course and exam description as the checklist: the four big ideas and the exam formats are published, and studying them in order with the list in hand is the highest-yield plan. Second, drill the free-response formats deliberately: the six FRQs include an investigative task, and the scoring rewards the interpretation and conclusion language — candidates should practice writing what a confidence interval means and what a p-value does and does not show. Third, master the inference conditions: the exam expects candidates to state and check the conditions for each procedure (random, normal, independent), and that checklist is highly coachable. Fourth, practice study-design items, because describing the flaw in a sampling or experimental design and fixing it is a recurring scored skill. Fifth, run full practice exams at the real timing — 40 MC in 90 minutes and 6 FRQs in 90 minutes — because the pacing and the writing load are the constraints candidates underestimate. Finally, confirm the target colleges\u2019 AP credit policies, because the value of a 3 vs a 5 depends on where the score is sent. A further high-yield tactic is to build a one-page inference flowchart during study — which procedure, which conditions, which interpretation — because the exam tests procedure selection and the flowchart consolidates it.',
    items: [
      { title: 'Use the CED as the checklist', detail: 'The four big ideas and formats are published; study in order.' },
      { title: 'Drill the explanation language', detail: 'Practice interpreting intervals, p-values, and conclusions; the FRQs are scored on reasoning.' },
      { title: 'Master the inference conditions', detail: 'Random, normal, independent — state and check them for every procedure.' },
      { title: 'Practice study-design items', detail: 'Describing and fixing design flaws is a recurring scored skill.' },
      { title: 'Build an inference flowchart', detail: 'Which procedure, which conditions, which interpretation — one page consolidates it.' }
    ]
  },
  resourceComparison: {
    summary: 'AP Statistics prep resources split into the College Board official set, review books, and online courses, and the buying logic is anchored by the official materials because the College Board publishes the course and exam description, past free-response questions, scoring guidelines, and sample questions for free. The official free set — the CED and the past FRQs with scoring guidelines — defines the content and the reasoning standards precisely. Review books from major publishers, roughly $20-40, add structured coverage and practice exams. Online courses and question banks, $30-100, add video instruction and problem drilling. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is about $99 per AP exam (plus any school or state fees), with fee reductions available for eligible students. A cheap readiness check is the free sample questions and one past FRQ set from the College Board before buying anything. Candidates should also verify the school\u2019s AP exam registration process and deadline, because late registration fees are a common avoidable cost. The well-regarded review books track the current four-big-ideas framework and include full practice exams, and candidates should prefer an edition published after the most recent course update; the online courses that include past-FRQ explanation analysis add the most value because the interpretation language is where the score is won, and the free official materials should always come first. The well-regarded review books track the current four-big-ideas framework and include full practice exams, and candidates should prefer an edition published after the most recent course update; the online courses that include past-FRQ explanation analysis add the most value because the interpretation language is where the score is won, and the free official materials should always come first before any purchase, because the CED and the scoring guidelines define the reasoning standards precisely.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official materials', values: ['Free', 'CED + past FRQs + scoring guides', 'The authoritative content and scoring standards'], note: '' },
      { label: 'AP Statistics review book', values: ['$20-40', 'Book with unit reviews and practice', 'Structured coverage for any candidate'], note: '' },
      { label: 'Online course / question bank', values: ['$30-100', 'Video + drilling', 'Self-studiers wanting structure'], note: '' },
      { label: 'AP exam registration', values: ['~$99', 'School/College Board', 'The real exam; fee reductions available'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The AP exam fee is ~$99 with reductions for eligible students.'
  },
  commonMistakes: {
    summary: 'The most common mistake on AP Statistics is computing statistics without explaining the reasoning, because the free responses are scored on interpretation and conclusion language — candidates who give a p-value without interpreting it, or a confidence interval without stating its meaning, lose most of the credit; the second is confusing correlation with causation in the interpretation items. A third recurring error is skipping the inference conditions, when the exam expects candidates to state and check random, normal, and independent conditions for every procedure. Candidates also routinely mis-select procedures, using a t-test where a z-test or a matched-pairs design applies, when the exam rewards procedure selection. Another pattern is neglecting the investigative task, the multi-part free response that combines design, data, and inference skills. Finally, some candidates never run a full practice exam at the real 3-hour format, so the pacing and the writing load surprise them on test day. A further recurring error is stating conclusions without the evidence — a p-value without the context, or a confidence interval without its meaning — when the scoring rewards the full interpretation; others check the wrong conditions for the selected procedure, and some write the investigative task as a list of numbers rather than a reasoned analysis. Practicing the response structures against the scoring guidelines converts those losses into points. A further recurring error is stating conclusions without the evidence — a p-value without the context, or a confidence interval without its meaning — when the scoring rewards the full interpretation; others check the wrong conditions for the selected procedure, and some write the investigative task as a list of numbers rather than a reasoned analysis. Practicing the response structures against the scoring guidelines converts those losses into points, and candidates who build the inference flowchart during study find procedure selection automatic under the clock.',
    items: [
      { mistake: 'Computing without interpreting', fix: 'Practice the interpretation and conclusion language; the FRQs are scored on reasoning.' },
      { mistake: 'Confusing correlation with causation', fix: 'State the limits of observational data explicitly in the interpretation items.' },
      { mistake: 'Skipping the inference conditions', fix: 'State and check random, normal, and independent conditions for every procedure.' },
      { mistake: 'Mis-selecting the procedure', fix: 'Use the inference flowchart to choose between z/t, means/proportions, and paired designs.' },
      { mistake: 'Neglecting the investigative task', fix: 'Practice the multi-part free response that combines design, data, and inference.' }
    ]
  },
  questionTypes: {
    summary: 'The AP Statistics exam is 3 hours: 40 multiple-choice questions in 90 minutes (50 percent) and 6 free-response questions in 90 minutes (50 percent), scored 1-5, with a scientific or graphing calculator permitted throughout. The free-response section has five standard items and one investigative task, covering the four big ideas: exploring data, sampling and experimentation, anticipating patterns, and statistical inference. The samples below illustrate three formats — a study-design MC item, an inference FRQ, and an investigative-task prompt. The sample items are editor-written illustrations of the published format, not live test items. The multiple-choice section tests design, probability, and procedure selection, often with brief scenarios; the five standard free responses cover the concepts and procedures, and the investigative task combines design, data, and inference in one multi-part analysis. The interpretation and conclusion language — what an interval means, what a p-value does and does not show — is scored throughout, so the response structure matters as much as the statistics. The multiple-choice section tests design, probability, and procedure selection, often with brief scenarios; the five standard free responses cover the concepts and procedures, and the investigative task combines design, data, and inference in one multi-part analysis. The interpretation and conclusion language — what an interval means, what a p-value does and does not show — is scored throughout, so the response structure matters as much as the statistics, and candidates should practice writing the conclusions in full sentences rather than fragments. The investigative task rewards a full arc — the design, the analysis, and the interpretation — and candidates who rehearse it against the past-FRQ materials find the multi-part format predictable, so the final practice-exam phase should always include at least one complete investigative-task rehearsal under the clock.',
    types: [
      { name: 'Multiple choice on design and inference', share: '40 questions, 50%', detail: 'Study designs, probability, and procedure selection.' },
      { name: 'Inference FRQ', share: 'Common FRQ topic', detail: 'State conditions, run the procedure, interpret the result with conclusion language.' },
      { name: 'Investigative task', share: '1 of 6 FRQs', detail: 'A multi-part data-analysis problem combining design, data, and inference.' }
    ],
    samples: [
      {
        prompt: 'A researcher wants to estimate the average height of students at a large school. Which sampling method best avoids selection bias?',
        options: [
          'A. Surveying the first 50 students who arrive on Monday',
          'B. Selecting a simple random sample of 100 students',
          'C. Surveying only the basketball team',
          'D. Posting a survey online for volunteers'
        ],
        answer: 'B',
        explanation: 'A simple random sample gives every student an equal chance of selection, avoiding the selection bias of convenience (first arrivals), voluntary (online), or non-representative (team) samples.'
      },
      {
        prompt: 'Inference FRQ (illustrated): "A 95% confidence interval for a population mean is (12.4, 15.6). Interpret the interval in context."',
        options: [
          'A. State that 95% of the data lies in the interval',
          'B. State that we are 95% confident the population mean lies between 12.4 and 15.6',
          'C. State the sample mean only',
          'D. State that the interval will always contain the mean'
        ],
        answer: 'B',
        explanation: 'The correct interpretation is about the population mean: we are 95% confident the population mean lies between the bounds. The other options confuse the interval with data coverage or overstate certainty.'
      },
      {
        prompt: 'Investigative-task prompt (illustrated): "A company claims its batteries last longer than a competitor\u2019s. Design a study to compare the two batteries, and describe how you would analyze the results."',
        options: [
          'A. Describe a randomized comparative experiment with a paired or two-sample analysis plan',
          'B. State the claim only',
          'C. List battery features without a design',
          'D. Conclude which battery is better without data'
        ],
        answer: 'A',
        explanation: 'The investigative task rewards the full design: a randomized comparative experiment (ideally paired or with proper controls) and the appropriate analysis (two-sample t or paired t-test). A claim or conclusion without a design and analysis earns little credit.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published format, not live test items.'
  },
  examDay: {
    summary: 'The AP Statistics exam is a paper-and-pencil test administered at your school on the College Board\u2019s AP exam schedule, and the direct exam-day answer is that you will sit 40 multiple-choice questions in 90 minutes, then 6 free-response questions in 90 minutes, for a 3-hour exam scored 1-5, with scores released in July. Arrive with your school-issued admission ticket, a government-issued or school photo ID, and the permitted materials — No. 2 pencils for the multiple-choice section, black or blue pens for the free-response section, and an approved scientific or graphing calculator, per the College Board\u2019s current rules; no notes or electronic devices are permitted. The exam begins with the multiple-choice section, then a brief break, then the free-response section; the proctor enforces strict timing, and the calculator is permitted throughout. Expect a controlled testing environment with other AP candidates; follow the proctor\u2019s instructions exactly. In the multiple-choice section, pace to finish with review margin; in the free-response section, budget roughly 15 minutes per question and write the interpretation and conclusion language the scoring expects. Scores are released online in July through the College Board account. If the score falls short of the target colleges\u2019 credit policy, the exam can be retaken the following year — AP exams are offered once per year. The free-response timing should be budgeted at roughly 15 minutes per question, with the investigative task getting the largest share, and candidates should write the interpretation and conclusion statements in full sentences rather than fragments; the calculator is permitted throughout, so practice the inference computations with it, and the July score release should be checked against each college’s AP credit table.',
    bring: ['School-issued AP admission ticket', 'Photo ID (school or government issued)', 'No. 2 pencils and black/blue pens per College Board rules', 'Approved scientific or graphing calculator'],
    leave: ['Notes and electronic devices (prohibited)', 'Study materials', 'Personal stationery (the booklet and materials are provided)', 'Any item on the College Board prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present the admission ticket and ID, and check in' },
      { time: '90 min', detail: 'Multiple-choice section: 40 questions' },
      { time: '10 min', detail: 'Break between sections (per proctor instructions)' },
      { time: '90 min', detail: 'Free-response section: 6 questions including the investigative task' },
      { time: 'July', detail: 'Scores released online through the College Board account' }
    ],
    rules: ['No notes or electronic devices', 'No. 2 pencils for multiple choice; black/blue pens for free response', 'Calculator permitted throughout; confirm the current policy', 'Strict proctor-enforced timing on both sections'],
    afterwards: 'Receive the 1-5 score in July, send it to colleges through the College Board, and check each college\u2019s AP credit policy. The exam can be retaken the following year if the score falls short.'
  }
};

export default data;
