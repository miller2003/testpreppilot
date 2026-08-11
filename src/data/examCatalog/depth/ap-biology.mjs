const data = {
  author: {
    name: 'TestPrepPilot Editorial Desk',
    title: 'Advanced Placement & college-credit desk',
    bio: 'The AP Biology exam structure (question counts, timing, scoring) is drawn from the College Board official AP Biology course and exam description, which is revised on a published cycle; the College Board publishes annual AP score distributions, and we cite that practice. College-credit outcomes and the exam fee are stated as of the current College Board program page.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the College Board official AP Biology course and exam description (current edition) and the annual AP score distribution report.',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'AP Biology has no direct salary outcome — its value is college credit and placement, and the earnings impact flows through the bachelor\u2019s-degree wage premium and STEM pathways.',
    summary: 'The salary answer for AP Biology is the college-credit story shared by all AP exams: the BLS does not publish a wage for AP scores, because the AP program is a college-credit and placement system, not a job certification. The earnings context is the college premium — bachelor\u2019s degree holders earn substantially more over a career than high-school-only workers, and STEM and health-science majors carry some of the highest starting salaries — so a qualifying AP Biology score (3 or higher, depending on the college) that earns credit toward introductory-biology requirements reduces time to degree and tuition cost. AP Biology is one of the largest AP exams, with roughly 280,000 test-takers per year in recent cycles, and it grants credit toward introductory biology at many colleges, which matters for students on pre-med, health-science, and life-science paths who otherwise retake the course in college. The exam is 3 hours: a multiple-choice section (60 questions, 90 minutes) and a free-response section (6 questions, 90 minutes, including two long essays and four short-answer items), scored 1-5, with 3+ typically qualifying for credit and 4-5 earning credit at selective schools. The practical value of a 4 or 5 is concrete: at a school charging tens of thousands in annual tuition, skipping an introductory course with a lab can save thousands of dollars and a semester of schedule pressure. The honest caveat is that credit policies vary by college — many selective schools cap or decline AP credit for introductory lab science, and pre-med programs often prefer a college transcript in biology — so the score\u2019s value depends on the specific college\u2019s AP credit policy. For a candidate asking whether AP Biology pays, the direct answer is that it pays through credit and placement at colleges that accept it, converting to tuition savings and schedule flexibility, and it is particularly valuable on STEM and pre-health pathways.',
    rows: [
      { label: 'Annual test-takers', value: '~280,000', note: 'One of the largest AP exams (College Board)' },
      { label: 'Score scale', value: '1-5', note: '3+ typically qualifies for credit; 4-5 at selective schools' },
      { label: 'Exam length', value: '3 hours', note: '60 MC (90 min) + 6 FRQs (90 min)' },
      { label: 'Salary impact', value: 'Indirect', note: 'College credit and placement; strongest on STEM/pre-health paths' }
    ],
    growth: 'AP Biology volume tracks the growth of the AP program and STEM interest; the College Board reports multi-million total AP administrations per year.',
    source: { label: 'College Board AP Biology course page', url: 'https://apstudents.collegeboard.org/courses/ap-biology' }
  },
  passRate: {
    headline: 'The College Board publishes AP Biology score distributions, not pass rates; in recent cycles roughly two-thirds of test-takers scored 3+ (qualifying), with 4 and 5 concentrated in the top quarter.',
    summary: 'The direct answer on pass rates requires precision: the College Board does not publish a "pass rate" for AP exams because scores are reported on a 1-5 scale and each college defines what qualifies, but the College Board does publish the annual score distribution for every AP subject, which is the closest published statistic. For AP Biology in recent cycles, roughly two-thirds of test-takers scored 3 or higher — the score most colleges treat as qualifying — with the 4 and 5 scores concentrated in the top quarter of test-takers; the exact percentages shift modestly by year, and the College Board\u2019s annual report is the authoritative source. The exam structure is fixed and published: 60 multiple-choice questions in 90 minutes (50 percent of the score) and 6 free-response questions in 90 minutes (50 percent), with the free responses including two long essays (one often on experimental design or data analysis) and four short-answer items, plus a calculator policy that allows a scientific or graphing calculator. The score scale is 1 (lowest) to 5 (highest), with 3 commonly accepted for credit, 4 accepted widely, and 5 accepted at nearly all colleges that grant AP credit, though selective institutions increasingly cap or decline credit for introductory lab science. The practical read on difficulty: AP Biology is content-dense — eight units from cellular energetics and genetics to ecology and evolution — and the free-response section rewards applying the science practices (data analysis, experimental design, claims with evidence), so candidates who drill the FRQ formats score higher than candidates who only memorize facts. Because the credit value depends on the college\u2019s policy, the smart approach is to check the target colleges\u2019 AP credit tables and study the free-response and data-analysis formats deliberately.',
    source: { label: 'College Board AP score distribution report and AP Biology exam description', url: 'https://apcentral.collegeboard.org/courses/ap-biology/exam' },
    caveat: 'The College Board publishes score distributions, not pass rates; whether a 3, 4, or 5 "passes" depends on each college\u2019s AP credit policy.'
  },
  studyPlan: {
    summary: 'An efficient AP Biology study plan is 60-80 hours over 10-14 weeks, because the exam is a content-dense breadth test with an applied free-response section, and the fastest score gains come from covering the eight units while drilling the data-analysis and experimental-design formats that carry half the score. The College Board course and exam description is the scope map: the eight units — Chemistry of Life, Cell Structure and Function, Cellular Energetics, Cell Communication and Cell Cycle, Heredity, Gene Expression and Regulation, Natural Selection, and Ecology — with the multiple-choice section (60 questions, 90 minutes) and the free-response section (6 questions, 90 minutes) each worth 50 percent. The study window should split into content coverage (weeks 1-8) and free-response and data-analysis drilling (weeks 9-12), followed by full practice exams (weeks 13-14): the science practices — data analysis, experimental design, and claims-with-evidence reasoning — are the difference between a 3 and a 5, and candidates who practice them against past free-response questions outperform candidates who only review content. Candidates taking the course in school should budget the lower end and weight time toward the FRQ formats; self-studying candidates should budget the upper end and add a review book or course. The final two weeks should be full practice exams at the real format — 60 MC in 90 minutes and 6 FRQs in 90 minutes, with the calculator policy — because the writing pace and the data-analysis items are the two things candidates underestimate. A mid-plan checkpoint helps: after the content-coverage weeks, take a section-level multiple-choice set and a single free response to measure whether the material is sticking, because the nine-unit breadth means some units will need a second pass before the FRQ drilling phase. Candidates who add weekly concept-map reviews during coverage report better retention of the unit connections the applied items test.',
    totalHours: '60-80 hours over 10-14 weeks',
    weeks: [
      { label: 'Week 1-4', focus: 'Cell and molecular units', tasks: ['Study Chemistry of Life, Cell Structure, and Cellular Energetics', 'Cover Cell Communication, Cell Cycle, and Heredity', 'Review the molecule-level processes with diagrams'], hours: 24 },
      { label: 'Week 5-8', focus: 'Genetics, evolution, ecology', tasks: ['Study Gene Expression, Natural Selection, and Ecology', 'Work the unit review questions and concept maps', 'Take a section-level multiple-choice set'], hours: 20 },
      { label: 'Week 9-11', focus: 'Free-response formats', tasks: ['Drill the long and short FRQs: claims with evidence, data analysis, experimental design', 'Practice interpreting graphs and statistical patterns', 'Do a full 60-MC + 6-FRQ practice exam'], hours: 18 },
      { label: 'Week 12-14', focus: 'Full exams and readiness', tasks: ['Take two more full practice exams scoring 3+ then 4+', 'Re-drill the missed units and FRQ formats until clean', 'Confirm the exam-day logistics and registration'], hours: 14 }
    ],
    variants: [
      { label: 'Taking the course in school', detail: 'Budget the lower end; weight time toward the FRQ and data-analysis formats.' },
      { label: 'Self-study', detail: 'Budget the upper end and add a structured review book or course to cover the eight units.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for AP Biology is covering the eight units systematically while drilling the free-response and data-analysis formats, because the exam rewards the science practices — claims with evidence, data analysis, and experimental design — as much as content knowledge. First, use the College Board course and exam description as the checklist: the eight units, the four science practices, and the exam formats are all published, and studying the content in unit order with the list in hand is the highest-yield plan. Second, drill the free-response formats deliberately: the six FRQs include long essays on experimental design and data analysis, and the scoring rewards applying the practices to the specific scenario, so practice with past College Board FRQs and their scoring guidelines. Third, build the vocabulary and process knowledge the MC section assumes — the four big ideas (evolution, energetics, information, systems) organize the content, and candidates who can explain processes in their own words handle the applied items better than candidates who only memorize terms. Fourth, practice data interpretation: the exam includes graphs and data tables in both sections, and the ability to describe trends, support claims, and design experiments from data is a major scored skill. Fifth, run full practice exams at the real timing — 60 MC in 90 minutes and 6 FRQs in 90 minutes — because the writing pace is the constraint most candidates underestimate. Finally, confirm the target colleges\u2019 AP credit policies, because the value of a 3 vs a 5 depends on where the score is sent. A further high-yield tactic is to practice the experimental-design FRQ weekly, because it is the most consistently scored free-response type and the design-detail checklist (variables, controls, replication) is highly coachable.',
    items: [
      { title: 'Use the CED as the checklist', detail: 'The eight units and four science practices are published; study in unit order.' },
      { title: 'Drill the FRQ formats', detail: 'Claims with evidence, data analysis, and experimental design are scored skills.' },
      { title: 'Practice data interpretation', detail: 'Graphs and data tables appear in both sections; describe trends and support claims.' },
      { title: 'Use past FRQs and scoring guidelines', detail: 'College Board materials show exactly how the responses are scored.' },
      { title: 'Practice experimental design weekly', detail: 'The variables-controls-replication checklist is coachable and consistently scored.' }
    ]
  },
  resourceComparison: {
    summary: 'AP Biology prep resources split into the College Board official set, review books, and online courses, and the buying logic is anchored by the official materials because the College Board publishes the course and exam description, past free-response questions, scoring guidelines, and sample questions for free. The official free set — the CED and the past FRQs with scoring guidelines — defines the content and scoring standards precisely. Review books from major publishers, roughly $20-40, add structured unit coverage and practice exams, which helps both course-takers and self-studiers; the well-regarded options are those that track the current course framework and the four big ideas. Online courses and question banks, $30-100, add video instruction and drilling, which helps self-studying candidates who want structure. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. The exam fee is about $99 per AP exam (plus any school or state fees), with fee reductions available for eligible students. A cheap readiness check is the free sample questions and one past FRQ set from the College Board before buying anything, because candidates who took the course often need only the review book and full practice exams. Candidates should also verify the school\u2019s AP exam registration process and deadline, because late registration fees are a common avoidable cost. The well-regarded review books track the current nine-unit framework and the science practices, and candidates should prefer an edition published after the most recent course update; the online courses that include past-FRQ analysis add the most value, because the applied formats are where the score is won, and the free official materials should always be the first resource before any purchase.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'College Board official materials', values: ['Free', 'CED + past FRQs + scoring guides', 'The authoritative content and scoring standards'], note: '' },
      { label: 'AP Biology review book', values: ['$20-40', 'Book with unit reviews and practice', 'Structured coverage for any candidate'], note: '' },
      { label: 'Online course / question bank', values: ['$30-100', 'Video + drilling', 'Self-studiers wanting structure'], note: '' },
      { label: 'AP exam registration', values: ['~$99', 'School/College Board', 'The real exam; fee reductions available'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. The AP exam fee is ~$99 with reductions for eligible students.'
  },
  commonMistakes: {
    summary: 'The most common mistake on AP Biology is memorizing facts without practicing the applied formats, because the exam rewards claims-with-evidence reasoning, data analysis, and experimental design as much as content knowledge, and candidates who only memorize terms underperform on the free-response items; the second is neglecting the writing pace, spending too long on the multiple-choice section and rushing the six FRQs. A third recurring error is ignoring the experimental-design items, which are consistently scored and highly coachable — candidates who never practice designing experiments with proper variables, controls, and replication lose easy points. Candidates also routinely underprepare for the data-analysis items, skipping graph interpretation practice and then struggling with the data tables in both sections. Another pattern is studying units unevenly, favoring the molecular units and neglecting evolution and ecology, when the exam covers all eight units. Finally, some candidates never run a full practice exam at the real 3-hour format, so the timing and the writing load surprise them on test day. A further recurring error is writing conclusions that do not connect to the data, when the scoring rewards claims explicitly tied to the evidence in the graph or table; others confuse the unit concepts under time pressure, and some skip the short-answer formats, which are a large share of the free-response credit. Practicing the response structures against the scoring guidelines converts those losses into points. A further recurring error is writing conclusions that do not connect to the data, when the scoring rewards claims explicitly tied to the evidence in the graph or table; others confuse the unit concepts under time pressure, and some skip the short-answer formats, which are a large share of the free-response credit. Practicing the response structures against the scoring guidelines converts those losses into points, and candidates who run full practice exams at the real timing find that the writing load is manageable when the formats are familiar.',
    items: [
      { mistake: 'Memorizing without practicing the formats', fix: 'Drill claims-with-evidence, data analysis, and experimental design against past FRQs.' },
      { mistake: 'Mis-pacing the exam', fix: 'Practice the 60-MC + 6-FRQ timing in full exams; reserve time for the essays.' },
      { mistake: 'Ignoring experimental design', fix: 'Practice the design checklist — variables, controls, replication — weekly.' },
      { mistake: 'Skipping data-analysis practice', fix: 'Interpret graphs and data tables in both sections; describe trends and support claims.' },
      { mistake: 'Studying units unevenly', fix: 'Cover all eight units; evolution and ecology are tested as much as the molecular units.' }
    ]
  },
  questionTypes: {
    summary: 'The AP Biology exam is 3 hours: 60 multiple-choice questions in 90 minutes (50 percent) and 6 free-response questions in 90 minutes (50 percent), scored 1-5, with a scientific or graphing calculator permitted. The multiple-choice section tests all eight units, often with data tables and diagrams, and the free-response section includes two long essays (one commonly on experimental design or data analysis) and four short-answer items. The samples below illustrate three formats — a stimulus-based MC item, a data-analysis FRQ, and an experimental-design prompt. The sample items are editor-written illustrations of the published format, not live test items. The multiple-choice section presents discrete and stimulus-based items, with data tables and diagrams used across the eight units; the free responses include the two long essays — one commonly asking for experimental design or data analysis — and four short-answer items that test specific concepts with brief explanations. The science practices (data analysis, experimental design, claims with evidence) are scored throughout, so the response structure matters as much as the biology content. The multiple-choice section presents discrete and stimulus-based items, with data tables and diagrams used across the eight units; the free responses include the two long essays — one commonly asking for experimental design or data analysis — and four short-answer items that test specific concepts with brief explanations. The science practices (data analysis, experimental design, claims with evidence) are scored throughout, so the response structure matters as much as the biology content, and the graph-interpretation skills practiced against past FRQs carry directly into the stimulus items in the multiple-choice section as well.',
    types: [
      { name: 'Multiple choice with stimulus', share: '60 questions, 50%', detail: 'Data tables, diagrams, and process questions across the eight units.' },
      { name: 'Data-analysis FRQ', share: '1-2 of 6 FRQs', detail: 'Interpret a graph or table, describe trends, and support a claim with evidence.' },
      { name: 'Experimental-design FRQ', share: '1 of 6 FRQs', detail: 'Design an experiment: variables, controls, replication, and expected results.' }
    ],
    samples: [
      {
        prompt: 'A cell is placed in a hypertonic solution. Which process most directly explains the resulting water movement?',
        options: [
          'A. Active transport of solutes into the cell',
          'B. Osmosis of water out of the cell across the membrane',
          'C. Endocytosis of the surrounding solution',
          'D. Facilitated diffusion of glucose into the cell'
        ],
        answer: 'B',
        explanation: 'In a hypertonic solution the external solute concentration is higher, so water moves by osmosis out of the cell across the membrane. Active transport, endocytosis, and facilitated diffusion do not explain the passive water movement driven by the concentration gradient.'
      },
      {
        prompt: 'Data-analysis FRQ (illustrated): "A researcher measures oxygen production in two plant groups over time. Group A shows a rising trend and Group B a flat line. Describe the trend and propose one biological explanation for the difference."',
        options: [
          'A. Restate the data without explanation',
          'B. Describe the trend and propose a mechanism (e.g., a limiting factor)',
          'C. Answer with a single word',
          'D. Discuss an unrelated topic'
        ],
        answer: 'B',
        explanation: 'The data-analysis FRQ rewards describing the trend accurately (Group A rising, Group B flat) and proposing a reasoned biological explanation (e.g., a limiting factor such as light or CO2). Restating data or single-word answers earn little credit.'
      },
      {
        prompt: 'Experimental-design FRQ (illustrated): "Design a controlled experiment to test whether a new fertilizer increases plant growth. Include the hypothesis, variables, and controls."',
        options: [
          'A. Describe the experiment with hypothesis, independent/dependent variables, and a control group',
          'B. State only the hypothesis',
          'C. List materials without a procedure',
          'D. Describe the expected conclusion only'
        ],
        answer: 'A',
        explanation: 'The experimental-design FRQ rewards the full design: a testable hypothesis, the independent and dependent variables, a control group, and replication. Partial answers with only a hypothesis or materials earn limited credit.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published format, not live test items.'
  },
  examDay: {
    summary: 'The AP Biology exam is a paper-and-pencil test administered at your school on the College Board\u2019s AP exam schedule, and the direct exam-day answer is that you will sit 60 multiple-choice questions in 90 minutes, then 6 free-response questions in 90 minutes, for a 3-hour exam scored 1-5, with scores released in July. Arrive with your school-issued admission ticket, a government-issued or school photo ID, and the permitted materials — No. 2 pencils for the multiple-choice section, black or blue pens for the free-response section, and an approved scientific or graphing calculator, per the College Board\u2019s current rules; no notes or electronic devices are permitted. The exam begins with the multiple-choice section, then a brief break, then the free-response section; the proctor enforces strict timing, and the essays are written in the provided booklet. Expect a controlled testing environment with other AP candidates; follow the proctor\u2019s instructions exactly, because College Board security rules are strict. In the multiple-choice section, pace to finish with review margin; in the free-response section, budget roughly 15 minutes per question and write structured answers with data analysis and experimental-design detail. Scores are released online in July through the College Board account, and the score report can be sent to colleges. If the score falls short of the target colleges\u2019 credit policy, the exam can be retaken the following year — AP exams are offered once per year. The free-response timing should be budgeted at roughly 15 minutes per question, with the two long essays getting the largest share, and candidates should label their answers by question part so the scoring reads cleanly; the calculator is permitted, so practice the data-analysis items with it, and the July score release should be checked against each college’s AP credit table.',
    bring: ['School-issued AP admission ticket', 'Photo ID (school or government issued)', 'No. 2 pencils and black/blue pens per College Board rules', 'Approved scientific or graphing calculator'],
    leave: ['Notes and electronic devices (prohibited)', 'Study materials', 'Personal stationery (the booklet and materials are provided)', 'Any item on the College Board prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present the admission ticket and ID, and check in' },
      { time: '90 min', detail: 'Multiple-choice section: 60 questions' },
      { time: '10 min', detail: 'Break between sections (per proctor instructions)' },
      { time: '90 min', detail: 'Free-response section: 6 questions including data-analysis and design items' },
      { time: 'July', detail: 'Scores released online through the College Board account' }
    ],
    rules: ['No notes or electronic devices', 'No. 2 pencils for multiple choice; black/blue pens for free response', 'Approved calculator only; confirm the current policy', 'Strict proctor-enforced timing on both sections'],
    afterwards: 'Receive the 1-5 score in July, send it to colleges through the College Board, and check each college\u2019s AP credit policy. The exam can be retaken the following year if the score falls short.'
  }
};

export default data;
