const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Advanced Placement & college-credit desk',
    bio: 'The AP Calculus AB exam structure (question counts, timing, scoring) is drawn from the College Board official AP Calculus AB course and exam description, which is revised on a published cycle; the College Board publishes annual AP score distributions, and we cite that practice. College-credit outcomes and the exam fee are stated as of the current College Board program page.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the College Board official AP Calculus AB course and exam description (current edition) and the annual AP score distribution report.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'AP Calculus AB has no direct salary outcome — its value is college credit and placement, and the earnings impact flows through the bachelor\u2019s-degree premium and STEM and quantitative career paths.',
    summary: 'The salary answer for AP Calculus AB is the college-credit story shared by AP exams, with a STEM-weighted twist: the BLS does not publish a wage for AP scores because the AP program is a college-credit and placement system, but calculus is the gateway course for STEM, engineering, and quantitative majors, and those majors carry some of the highest starting salaries in the BLS data. A qualifying AP Calculus AB score (3 or higher, depending on the college) earns credit toward the first-semester college calculus course, which places students directly into Calculus II and keeps STEM majors on schedule — and a 4 or 5 at selective schools can satisfy the calculus requirement entirely, saving thousands in tuition and a semester of schedule pressure. AP Calculus AB is one of the largest AP exams, with roughly 270,000 test-takers per year, and colleges across the STEM spectrum accept it for placement and credit. The exam is 3 hours 15 minutes: a multiple-choice section (45 questions, 105 minutes, with 30 calculator-free and 15 calculator-permitted) and a free-response section (6 questions, 90 minutes, with 2 calculator-permitted), scored 1-5. The honest caveat is that credit policies vary: engineering and pre-med programs sometimes cap AP math credit or require a placement exam, and a 3 may place rather than credit at selective schools, so the score\u2019s value depends on the specific college\u2019s policy. For a candidate asking whether AP Calculus AB pays, the direct answer is that it pays through credit, placement, and the STEM pathway it opens — the highest-leverage AP exam for students heading into quantitative majors.',
    rows: [
      { label: 'Annual test-takers', value: '~270,000', note: 'One of the largest AP exams (College Board)' },
      { label: 'Score scale', value: '1-5', note: '3+ typically qualifies for credit; 4-5 at selective schools' },
      { label: 'Exam length', value: '3h15m', note: '45 MC (105 min) + 6 FRQs (90 min)' },
      { label: 'Salary impact', value: 'Indirect', note: 'College credit and placement; gateway to STEM majors' }
    ],
    growth: 'AP Calculus AB volume tracks the growth of the AP program and STEM enrollment; it remains one of the most-taken AP exams.',
    source: { label: 'College Board AP Calculus AB course page', url: 'https://apstudents.collegeboard.org/courses/ap-calculus-ab' }
  },
  passRate: {
    headline: 'The College Board publishes AP Calculus AB score distributions, not pass rates; in recent cycles roughly three-fifths of test-takers scored 3+ (qualifying), with 4 and 5 concentrated in the top quarter.',
    summary: 'The direct answer on pass rates requires precision: the College Board does not publish a "pass rate" for AP exams because scores are reported on a 1-5 scale and each college defines what qualifies, but the College Board does publish the annual score distribution for every AP subject, which is the closest published statistic. For AP Calculus AB in recent cycles, roughly three-fifths of test-takers scored 3 or higher — the score most colleges treat as qualifying — with the 4 and 5 scores concentrated in the top quarter of test-takers; the exact percentages shift modestly by year, and the College Board\u2019s annual report is the authoritative source. The exam structure is fixed and published: 45 multiple-choice questions in 105 minutes (50 percent of the score, split into a calculator-free section of 30 questions and a calculator-permitted section of 15) and 6 free-response questions in 90 minutes (50 percent, with 2 calculator-permitted), scored 1-5, with a scientific or graphing calculator permitted in the designated sections. The content covers the first-semester college calculus course: limits and continuity, differentiation, applications of derivatives, integration, and the Fundamental Theorem, plus the analytical and numerical approaches the course requires. The practical read on difficulty: AP Calculus AB is a math-exam-with-writing — the free responses require justifying answers with the reasoning the scoring expects (e.g., citing the Fundamental Theorem or the conditions for a relative extremum) — and candidates who practice the free-response justification language score higher than candidates who compute correctly but write weak justifications. Because the credit value depends on the college\u2019s policy, the smart approach is to check the target colleges\u2019 AP credit tables and study the free-response justification formats deliberately.',
    source: { label: 'College Board AP score distribution report and AP Calculus AB exam description', url: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam' },
    caveat: 'The College Board publishes score distributions, not pass rates; whether a 3, 4, or 5 "passes" depends on each college\u2019s AP credit policy.'
  },
  studyPlan: {
    summary: 'An efficient AP Calculus AB study plan is 60-90 hours over 10-16 weeks, because the exam is a skill-and-justification test and the fastest score gains come from mastering the differentiation and integration techniques while drilling the free-response justification formats that carry half the score. The College Board course and exam description is the scope map: limits and continuity, differentiation (including the chain rule, implicit differentiation, and related rates), applications of derivatives (optimization, curve sketching), integration and the Fundamental Theorem, and applications of integrals (area, volume), with the multiple-choice section (45 questions, 105 minutes) and the free-response section (6 questions, 90 minutes) each worth 50 percent. The study window should split into technique mastery (weeks 1-8) and free-response justification drilling (weeks 9-12), followed by full practice exams (weeks 13-16): the free responses require not just the answer but the justification — citing the derivative rules, the conditions for extrema, or the Fundamental Theorem — and candidates who practice that language score higher. Candidates taking the course in school should budget the lower end; self-studying candidates should budget the upper end and add a structured review book or course. The final three weeks should be full practice exams at the real format — 45 MC in 105 minutes and 6 FRQs in 90 minutes, with the calculator policy — because the pacing and the justification writing are the two things candidates underestimate. A mid-plan checkpoint helps: after the technique-coverage weeks, take a calculator-free multiple-choice set and one free response to measure whether the routines are automatic, because the exam rewards speed on the routine items and the remaining weeks should target the weak techniques before the justification drilling phase. Candidates who keep a running error log during coverage report faster gains in the final practice-exam phase.',
    totalHours: '60-90 hours over 10-16 weeks',
    weeks: [
      { label: 'Week 1-4', focus: 'Limits and differentiation', tasks: ['Study limits, continuity, and the definition of the derivative', 'Master differentiation rules: product, quotient, chain, implicit', 'Practice related-rates and tangent-line problems'], hours: 24 },
      { label: 'Week 5-8', focus: 'Applications and integration', tasks: ['Study optimization, curve sketching, and the Mean Value Theorem', 'Master integration: antiderivatives, u-substitution, and the Fundamental Theorem', 'Practice area and volume problems'], hours: 24 },
      { label: 'Week 9-12', focus: 'Free-response justification', tasks: ['Drill the six FRQ formats and the justification language the scoring expects', 'Practice citing conditions: extrema, concavity, and the FTC', 'Do a full 45-MC + 6-FRQ practice exam'], hours: 20 },
      { label: 'Week 13-16', focus: 'Full exams and readiness', tasks: ['Take two more full practice exams scoring 3+ then 4+', 'Re-drill the missed techniques and justifications until clean', 'Confirm the exam-day logistics, calculator, and registration'], hours: 18 }
    ],
    variants: [
      { label: 'Taking the course in school', detail: 'Budget the lower end; weight time toward the free-response justification formats.' },
      { label: 'Self-study', detail: 'Budget the upper end and add a structured review book or course for the technique sequence.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for AP Calculus AB is technique mastery plus free-response justification drilling, because the exam rewards both correct computation and the reasoning language the scoring expects, and candidates who practice the justification formats outperform those who only drill computational problems. First, use the College Board course and exam description as the checklist: the units, the calculator policy, and the exam formats are published, and studying the technique sequence — limits to derivatives to integrals — in order is the highest-yield plan. Second, master the differentiation and integration techniques until they are automatic: the multiple-choice section rewards speed, and candidates who can differentiate and integrate routine functions quickly leave time for the hard items. Third, drill the free-response justification language deliberately: the scoring expects candidates to cite the rules and conditions (the derivative definition, the chain rule, the Mean Value Theorem conditions, the Fundamental Theorem), and practicing that language against past College Board FRQs with their scoring guidelines is the fastest way to raise the FRQ score. Fourth, practice the calculator-permitted items with the approved calculator, because efficiency on the calculator sections saves time for the calculator-free work. Fifth, run full practice exams at the real timing — 45 MC in 105 minutes and 6 FRQs in 90 minutes — because the pacing and the writing load are the constraints candidates underestimate. Finally, confirm the target colleges\u2019 AP credit policies, because the value of a 3 vs a 5 depends on where the score is sent, and STEM programs often have specific math placement policies. A further high-yield tactic is to build a formula and justification cheat-sheet during study — derivative rules, the FTC, the conditions for extrema and concavity — because the act of writing it consolidates the material and the sheet becomes the final review list.',
    items: [
      { title: 'Master techniques until automatic', detail: 'The MC section rewards speed; drill differentiation and integration routines.' },
      { title: 'Drill the justification language', detail: 'The FRQs are scored on the reasoning — cite rules and conditions explicitly.' },
      { title: 'Practice with the approved calculator', detail: 'Efficiency on calculator sections saves time for calculator-free work.' },
      { title: 'Use past FRQs and scoring guidelines', detail: 'College Board materials show exactly what the justifications must include.' },
      { title: 'Build a cheat-sheet during study', detail: 'Writing rules and conditions consolidates the material and becomes the final review list.' }
    ]
  },
  resourceComparison: {
    summary: 'AP Calculus AB prep resources split into the College Board official set, review books, and online courses, and the buying logic is anchored by the official materials because the College Board publishes the course and exam description, past free-response questions, scoring guidelines, and sample questions for free. The official free set — the CED and the past FRQs with scoring guidelines — defines the content and the justification standards precisely. Review books from major publishers, roughly $20-40, add structured technique coverage and practice exams, which helps both course-takers and self-studiers. Online courses and question banks, $30-100, add video instruction and problem drilling, which helps self-studying candidates who want structure and worked examples. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is about $99 per AP exam (plus any school or state fees), with fee reductions available for eligible students. A cheap readiness check is the free sample questions and one past FRQ set from the College Board before buying anything, because candidates who took the course often need only the review book and full practice exams. Candidates should also verify the school\u2019s AP exam registration process and deadline, because late registration fees are a common avoidable cost. The well-regarded review books track the current course framework and include full practice exams at the real timing, and candidates should prefer an edition published after the most recent course update; the online courses that include worked free-response solutions add the most value because the justification language is where the score is won, and the free official materials should always come first.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official materials', values: ['Free', 'CED + past FRQs + scoring guides', 'The authoritative content and scoring standards'], note: '' },
      { label: 'AP Calculus AB review book', values: ['$20-40', 'Book with technique reviews and practice', 'Structured coverage for any candidate'], note: '' },
      { label: 'Online course / question bank', values: ['$30-100', 'Video + problem drilling', 'Self-studiers wanting worked examples'], note: '' },
      { label: 'AP exam registration', values: ['~$99', 'School/College Board', 'The real exam; fee reductions available'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The AP exam fee is ~$99 with reductions for eligible students.'
  },
  commonMistakes: {
    summary: 'The most common mistake on AP Calculus AB is computing correctly but writing weak justifications on the free responses, because the scoring rewards the reasoning language — citing derivative rules, the Mean Value Theorem conditions, or the Fundamental Theorem — and candidates who give bare answers lose most of the credit; the second is mis-using the calculator, either relying on it in the calculator-free section or failing to practice the calculator-permitted items. A third recurring error is under-practicing related rates and optimization, which are high-frequency free-response topics with a checklist structure (diagram, rates, equation, differentiate, evaluate). Candidates also routinely mis-time the exam, spending too long on the calculator-free multiple-choice items and rushing the FRQs. Another pattern is skipping the justification practice for existence conditions — the continuity and differentiability conditions behind the MVT and extrema — which the FRQ scoring expects. Finally, some candidates never run a full practice exam at the real 3h15m format, so the pacing and the writing load surprise them on test day. A further recurring error is dropping the differential when working related rates or failing to include units in application answers, which costs partial credit the scoring would otherwise award; others mis-apply the Fundamental Theorem by evaluating antiderivatives at the wrong bounds, and some leave the calculator-free section items blank instead of attempting the algebra, when partial-credit show-your-work items reward any correct step. A further recurring error is dropping the differential when working related rates or failing to include units in application answers, which costs partial credit the scoring would otherwise award; others mis-apply the Fundamental Theorem by evaluating antiderivatives at the wrong bounds, and some leave the calculator-free section items blank instead of attempting the algebra, when partial-credit show-your-work items reward any correct step. Candidates who run full practice exams at the real 3h15m timing find the justification writing manageable when the technique routines are automatic.',
    items: [
      { mistake: 'Computing without justifications', fix: 'Practice citing the rules and conditions the FRQ scoring expects; the reasoning is most of the credit.' },
      { mistake: 'Mis-using the calculator', fix: 'Practice the calculator-permitted items with the approved calculator; know which section allows it.' },
      { mistake: 'Under-practicing related rates and optimization', fix: 'Drill the checklist structure: diagram, rates, equation, differentiate, evaluate.' },
      { mistake: 'Mis-pacing the exam', fix: 'Practice the 45-MC + 6-FRQ timing; leave time for the justification writing.' },
      { mistake: 'Skipping existence-condition practice', fix: 'Know the continuity and differentiability conditions behind the MVT and extrema; the scoring expects them.' }
    ]
  },
  questionTypes: {
    summary: 'The AP Calculus AB exam is 3 hours 15 minutes: 45 multiple-choice questions in 105 minutes (50 percent) and 6 free-response questions in 90 minutes (50 percent), scored 1-5. The multiple-choice section is split into a calculator-free part (30 questions) and a calculator-permitted part (15 questions); the free-response section has 2 calculator-permitted and 4 calculator-free questions. The content covers limits, differentiation, applications, integration, and the Fundamental Theorem. The samples below illustrate three formats — a calculator-free MC item, a related-rates FRQ, and an integration FRQ. The sample items are editor-written illustrations of the published format, not live test items. The calculator-free multiple-choice items test limits, derivatives, and antiderivatives computable by hand; the calculator-permitted items add numerical work; and the free responses cover the full range — limits and continuity, differentiation with justification, related rates, optimization, area and volume with the Fundamental Theorem, and the analytical reasoning the scoring expects. The justification requirements are published in the scoring guidelines, and candidates should practice writing them explicitly. The calculator-free multiple-choice items test limits, derivatives, and antiderivatives computable by hand; the calculator-permitted items add numerical work; and the free responses cover the full range — limits and continuity, differentiation with justification, related rates, optimization, area and volume with the Fundamental Theorem, and the analytical reasoning the scoring expects. The justification requirements are published in the scoring guidelines, and candidates should practice writing them explicitly — citing the derivative rules, the Mean Value Theorem conditions, and the Fundamental Theorem — because the reasoning language is most of the free-response credit.',
    types: [
      { name: 'Calculator-free multiple choice', share: '30 questions', detail: 'Limits, derivatives, and integrals computable by hand.' },
      { name: 'Related-rates FRQ', share: 'Common FRQ topic', detail: 'Diagram, rates, equation, differentiate, and evaluate with justification.' },
      { name: 'Integration and FTC FRQ', share: 'Common FRQ topic', detail: 'Compute an integral and justify with the Fundamental Theorem; often an accumulation or area problem.' }
    ],
    samples: [
      {
        prompt: 'Compute the limit: limit as x approaches 3 of (x^2 - 9) / (x - 3).',
        options: [
          'A. 0',
          'B. 3',
          'C. 6',
          'D. Undefined'
        ],
        answer: 'C',
        explanation: 'Factor the numerator: x^2 - 9 = (x - 3)(x + 3). Cancel the (x - 3) factor to get x + 3, which evaluates to 6 at x = 3. The limit exists and equals 6 even though the original expression is undefined at x = 3.'
      },
      {
        prompt: 'Related-rates FRQ (illustrated): "A balloon is being inflated at a rate of 10 cubic feet per minute. Find the rate of change of the radius when the radius is 2 feet."',
        options: [
          'A. State the formula and differentiate without evaluating',
          'B. Use V = (4/3)pi r^3, differentiate, substitute dV/dt = 10 and r = 2, and solve for dr/dt',
          'C. Answer with a number only',
          'D. State the balloon\u2019s volume'
        ],
        answer: 'B',
        explanation: 'The related-rates format rewards the full solution: the volume formula, implicit differentiation with respect to time, substitution of the given rate and radius, and solving for dr/dt with the units. A bare number earns little credit.'
      },
      {
        prompt: 'Evaluate the definite integral from 1 to 4 of (2x + 1) dx.',
        options: [
          'A. 16',
          'B. 18',
          'C. 20',
          'D. 24'
        ],
        answer: 'B',
        explanation: 'The antiderivative is x^2 + x. Evaluate at the bounds: (16 + 4) - (1 + 1) = 20 - 2 = 18. The Fundamental Theorem gives the definite integral as 18.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published format, not live test items.'
  },
  examDay: {
    summary: 'The AP Calculus AB exam is a paper-and-pencil test administered at your school on the College Board\u2019s AP exam schedule, and the direct exam-day answer is that you will sit 45 multiple-choice questions in 105 minutes (30 calculator-free + 15 calculator-permitted), then 6 free-response questions in 90 minutes, for a 3h15m exam scored 1-5, with scores released in July. Arrive with your school-issued admission ticket, a government-issued or school photo ID, and the permitted materials — No. 2 pencils for the multiple-choice section, black or blue pens for the free-response section, and an approved scientific or graphing calculator, per the College Board\u2019s current rules; no notes or electronic devices are permitted. The exam begins with the multiple-choice section, then a brief break, then the free-response section; the proctor enforces strict timing, and the calculator is allowed only in the designated parts. Expect a controlled testing environment with other AP candidates; follow the proctor\u2019s instructions exactly. In the multiple-choice section, pace to finish with review margin; in the free-response section, budget roughly 15 minutes per question and write the justifications the scoring expects — show the derivatives, the conditions, and the evaluation steps. Scores are released online in July through the College Board account, and the score report can be sent to colleges. If the score falls short of the target colleges\u2019 credit policy, the exam can be retaken the following year — AP exams are offered once per year. The free-response timing should be budgeted at roughly 15 minutes per question, with the justification steps written out in the order the scoring expects — the derivative setup, the conditions, and the evaluation — and candidates should label their answers by part so the scoring reads cleanly; the calculator is allowed only in the designated parts, so know which section permits it before the appointment.',
    bring: ['School-issued AP admission ticket', 'Photo ID (school or government issued)', 'No. 2 pencils and black/blue pens per College Board rules', 'Approved scientific or graphing calculator'],
    leave: ['Notes and electronic devices (prohibited)', 'Study materials', 'Personal stationery (the booklet and materials are provided)', 'Any item on the College Board prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present the admission ticket and ID, and check in' },
      { time: '105 min', detail: 'Multiple-choice section: 30 calculator-free + 15 calculator-permitted' },
      { time: '10 min', detail: 'Break between sections (per proctor instructions)' },
      { time: '90 min', detail: 'Free-response section: 6 questions with justification' },
      { time: 'July', detail: 'Scores released online through the College Board account' }
    ],
    rules: ['No notes or electronic devices', 'No. 2 pencils for multiple choice; black/blue pens for free response', 'Calculator allowed only in designated parts; confirm the current policy', 'Strict proctor-enforced timing on both sections'],
    afterwards: 'Receive the 1-5 score in July, send it to colleges through the College Board, and check each college\u2019s AP credit and math-placement policy. The exam can be retaken the following year if the score falls short.'
  }
};

export default data;
