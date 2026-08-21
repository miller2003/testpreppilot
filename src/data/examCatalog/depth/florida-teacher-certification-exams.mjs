const data = {
  author: {
    name: 'TestPrepPilot Editorial Board',
    title: 'Teacher licensure & education certifications desk',
    bio: 'This Florida teacher certification exams guide is compiled from the Florida Department of Education Bureau of Educator Certification pages, the FTCE program information delivered by Pearson VUE, and the BLS Occupational Outlook Handbook (May 2024 data). The Florida DOE does not publish cohort pass rates for the FTCE exams, and any percentage circulating online is a private estimate, which we state plainly. Fees, question counts, and retake rules come from the official pages and should be confirmed there before registering.',
    url: '/editorial-policy'
  },
  reviewedBy: 'Reviewed against the Florida Department of Education FTCE program pages, the Pearson VUE Florida teacher certification test information, and the BLS OOH Kindergarten and Elementary School Teachers and High School Teachers pages (May 2024 data).',
  lastReviewed: '2026-08',
  salaryOutlook: {
    headline: 'Florida teachers follow the national BLS medians of $62,340 for elementary teachers and $64,580 for high school teachers (May 2024), and the FTCE exams are the licensure gate for both careers in the state.',
    summary: 'The salary answer for the Florida teacher certification exams is a teacher-licensure story: the BLS Occupational Outlook Handbook reports a May 2024 median annual wage of $62,340 for SOC 25-2021 Elementary School Teachers (except special education), with the lowest 10 percent earning below $46,440 and the highest 10 percent above $102,010, and a May 2024 median of $64,580 for SOC 25-2031 High School Teachers, with the lowest 10 percent near $47,330 and the highest 10 percent above $104,670; the FTCE scores themselves do not appear in wage data because BLS classifies by job duty, not by certification. The FTCE series is the licensure gate: Florida certification candidates must pass the General Knowledge test, the Professional Education test, and at least one subject area examination before they can earn a Florida Professional Certificate and hold a public teaching position, and the temporary certificate path gives new teachers a window to pass the remaining exams while teaching under supervision. Teacher pay in Florida follows the district salary schedules, which set compensation by years of service and education level, so the exams are the entry credential and the earnings follow the schedule and the district rather than the scores. The BLS projects a 2 percent decline in kindergarten and elementary school teacher employment from 2024 to 2034, with about 103,800 openings per year from replacement demand, and high school teaching shows a similar replacement-driven market, so the Florida market for certified teachers is steady but shaped by district budgets and enrollment. Two caveats anchor the picture: first, Florida teacher salaries are set locally and vary sharply by district, with some districts paying above the national median and others below it; second, the certification is the employment gate, and the temporary certificate path means candidates can work while completing the exams, which changes the cash-flow timing of entering the classroom. For a candidate asking whether the FTCE pays, the direct answer is that it pays through the teaching license it enables, and the earnings follow the district salary schedule rather than the exam scores.',
    rows: [
      { label: 'Median annual wage, elementary teachers', value: '$62,340', note: 'BLS OOH, Elementary School Teachers, except special education (SOC 25-2021), May 2024' },
      { label: 'Median annual wage, high school teachers', value: '$64,580', note: 'BLS OOH, High School Teachers (SOC 25-2031), May 2024' },
      { label: 'Lowest 10% (elementary)', value: '$46,440', note: 'Entry-level teachers in low-paying districts' },
      { label: 'Highest 10% (elementary)', value: '$102,010', note: 'Senior teachers in high-paying districts' },
      { label: 'Projected openings, K-8', value: '~103,800/year', note: 'BLS 2024-2034, mostly replacement demand' }
    ],
    growth: 'BLS projects a 2 percent decline in kindergarten and elementary school teacher employment from 2024 to 2034, with about 103,800 openings per year driven mostly by replacement demand; high school teacher employment is projected at roughly 1 percent change over the same decade.',
    source: { label: 'BLS Occupational Outlook Handbook - Kindergarten and Elementary School Teachers', url: 'https://www.bls.gov/ooh/education-training-and-library/kindergarten-and-elementary-school-teachers.htm' }
  },
  passRate: {
    headline: 'The Florida Department of Education publishes no pass rates for the FTCE exams — the Professional Education test is 100 questions in 2.5 hours with a scaled passing score of 200.',
    summary: 'The direct answer on pass rates is that the Florida Department of Education does not publish cohort pass-rate statistics for the FTCE exams, including the General Knowledge test, the Professional Education test, and the subject area examinations, so any percentage circulating online is a private estimate rather than an official figure, and we do not restate one here. What is published and verifiable is the exam structure: the Professional Education test (083) is a computer-based test of 100 multiple-choice questions with a 2.5-hour time limit and a passing score of 200 on the scaled score scale, delivered at Pearson VUE testing centers year-round; the General Knowledge test (082) is a four-subtest battery covering the Essay, English Language Skills, Reading, and Mathematics, with a scaled passing score of 200 on each multiple-choice subtest and a score of 8 out of 12 on the essay; and the subject area examinations are computer-based tests of roughly 80 multiple-choice questions with a scaled passing score of 200. All FTCE exams are computer-based and administered year-round by Pearson VUE, and candidates may retake any exam after a 31-calendar-day waiting period. The fee structure is published: the General Knowledge test costs $130 for all four subtests, and the Professional Education test and each subject area examination cost $150. The practical read on difficulty: the FTCE rewards content knowledge and, for the Professional Education test, the pedagogical knowledge the teaching role requires, so candidates who study the FLDOE test information and content outlines, then drill a current question bank, reliably clear the scaled 200 passing line, while candidates who sit cold on the reading and mathematics subtests tend to fail them. Because no pass rate is published, the honest planning approach is to treat the scaled 200 standard and the published outlines as the target, confirm the current fees and retake rules on the official pages, and not burn an attempt unprepared.',
    source: { label: 'Florida Department of Education - FTCE program', url: 'https://www.fldoe.org/teaching/certification/teacher-certification-exams.stml' },
    caveat: 'The Florida DOE publishes no FTCE pass rates. The Professional Education test is 100 questions in 2.5 hours with a scaled passing score of 200; the General Knowledge test is four subtests with a scaled 200 on each multiple-choice subtest and an 8 of 12 essay. Confirm current fees and retake rules on the official pages.'
  },
  studyPlan: {
    summary: 'An efficient FTCE study plan is 40-80 hours over 4-8 weeks per exam, because the Florida certification path typically requires the General Knowledge test, the Professional Education test, and at least one subject area examination, and the fastest gains come from covering each exam\u2019s content outline in proportion to its weight and drilling the item formats. The study window for each exam should split into content coverage (weeks 1-2), question-bank drilling (weeks 3-4), and a full practice test (week 5 for a longer plan): the Professional Education test rewards the pedagogy, learning theory, and professional practices in its outline, the General Knowledge subtests reward the basic-skills review plus timed practice, and the subject area examinations reward the content outline for your teaching field. Candidates should build the sequence around the certification steps: most candidates take the General Knowledge test first, then the Professional Education test and the subject area examination, but Florida also offers the temporary certificate path, which lets candidates begin teaching while completing the remaining exams, and the study plan should reflect whether the exams are being completed before or during the first year of teaching. Candidates with a strong content background in their subject should budget the lower end for the subject area exam and weight time toward the pedagogy and the General Knowledge subtests; candidates refreshing after years away from school should budget the upper end. The final week before each exam should include at least one full timed practice test at the real format, because the pacing, especially on the General Knowledge reading and mathematics subtests with their tight per-subtest clocks, is the thing candidates underestimate. A further high-yield habit is building a one-page review sheet for each exam\u2019s highest-weight topics, because the sheet becomes the final review tool.',
    totalHours: '40-80 hours per exam over 4-8 weeks',
    weeks: [
      { label: 'Week 1-2', focus: 'Content coverage from the outline', tasks: ['Download the exam\u2019s content outline from the official pages', 'Cover the highest-weight topics first', 'Review the format and the per-subtest timing'], hours: 20 },
      { label: 'Week 3-4', focus: 'Question-bank drilling', tasks: ['Drill 300-600 items for the target exam', 'Log every miss and re-read the related content area', 'Take timed subtest practice for the General Knowledge'], hours: 24 },
      { label: 'Week 5', focus: 'Full test and readiness', tasks: ['Take a full timed practice test scoring above the passing line', 'Re-drill the miss log until clean', 'Confirm the Pearson VUE booking and the exam fee'], hours: 8 }
    ],
    variants: [
      { label: 'Strong content background', detail: 'Budget the lower end for the subject area exam and weight time toward the pedagogy and General Knowledge subtests.' },
      { label: 'Returning or career-change candidate', detail: 'Budget the upper end and rebuild the basic-skills and pedagogy blocks before drilling.' },
      { label: 'Temporary certificate holder', detail: 'Complete the remaining exams during the first year of teaching, scheduling around the school calendar and the 31-day retake window.' }
    ]
  },
  prepStrategies: {
    summary: 'The dominant prep strategy for the FTCE exams is downloading each exam\u2019s content outline from the official pages and studying the highest-weight topics while drilling a current question bank with a miss log, because the Florida DOE and Pearson VUE publish the outlines and the scaled 200 passing line is best targeted with proportional coverage. First, map the certification sequence: confirm which exams your certification path requires, because most candidates need the General Knowledge test, the Professional Education test, and at least one subject area examination, and the official Bureau of Educator Certification pages list the requirements for your path after the application is filed. Second, use the official materials first: the FLDOE test information and content outlines for each exam define the exact topics and the item style, and the FTCE program pages publish the format, the timing, and the passing standard, so they are the scope map for every study plan. Third, study the highest-weight topics first, with the Professional Education test rewarding the pedagogy and professional practices in its outline and the General Knowledge subtests rewarding the basic-skills review; the essay subtest requires timed writing practice at the 8-of-12 standard. Fourth, drill a current question bank, 300-600 items per exam with explanations, and build a miss log tied to the content areas; the rehearsal converts the reading into recall under the clock. Fifth, rehearse the timing deliberately, especially for the General Knowledge subtests, because each multiple-choice subtest has its own time limit and candidates who practiced the per-subtest clocks score higher than candidates who practiced untimed. Finally, respect the retake rule, because candidates may retake any FTCE exam after a 31-calendar-day waiting period, and schedule each exam when practice scores clear the scaled 200 line with margin.',
    items: [
      { title: 'Map the certification sequence first', detail: 'Confirm which exams your path requires; most candidates take GK, PEd, and at least one subject area exam.' },
      { title: 'Use the official outlines as the scope', detail: 'The FLDOE test information and content outlines define the topics, format, and passing standard.' },
      { title: 'Study the highest-weight topics first', detail: 'Cover the outline in weight order; the essay subtest needs timed writing practice.' },
      { title: 'Drill a current bank with a miss log', detail: '300-600 items per exam with explanations, tied to the content areas.' },
      { title: 'Rehearse the per-subtest timing', detail: 'The General Knowledge subtests have separate clocks; practice timed, not untimed.' },
      { title: 'Respect the 31-day retake rule', detail: 'Schedule each exam when practice clears the scaled 200 line with margin.' }
    ]
  },
  resourceComparison: {
    summary: 'FTCE prep resources split into the official FLDOE and Pearson VUE materials, review books, question banks, and the registration fees, and the buying logic is anchored by the official test information because the Florida DOE and Pearson VUE publish the content outlines and the format, and the exams are written to those outlines. The official materials — the free FTCE program pages, the content outlines, and the Pearson VUE test information — are the foundation of every plan, and the official practice tests, roughly $20-40 each when available, are the most reliable readiness check because they mirror the format and the scaled scoring. Review books for the FTCE, roughly $30-60 each, add structured content coverage for the General Knowledge and Professional Education tests, which helps candidates refreshing the basics or the pedagogy; the well-regarded options track the current exam codes and outlines. Question banks and study subscriptions from reputable providers, roughly $30-100, add volume and explanations across the FTCE series, which helps candidates preparing for more than one exam at once; the banks that reference the current exam codes are the ones to choose. The exam fees are fixed and modest by teacher-certification standards: $130 for the four-subtest General Knowledge test, $150 for the Professional Education test, and $150 for each subject area examination, with the exact amounts confirmed on the official pages. The footnote that anchors the comparison: prices below are list prices as of mid-2026 and change frequently, and we rank nothing by commission. A cheap readiness check is the free content outline and a free practice set before buying anything, because candidates with a strong content background often need only the official practice test and a bank, not a full review course. Candidates should also confirm the 31-day retake rule and the temporary certificate options, because the retake schedule and the teaching-and-testing path affect the total cost and timeline.',
    columns: ['Resource', 'Price', 'Format', 'Best for'],
    rows: [
      { label: 'Official FLDOE outlines and FTCE test information', values: ['Free', 'Official pages and content outlines', 'The authoritative scope for every exam'], note: '' },
      { label: 'Official FTCE practice tests', values: ['$20-40 each', 'Official practice exams', 'The most reliable readiness check'], note: '' },
      { label: 'FTCE review book', values: ['$30-60 each', 'Book with content coverage', 'Candidates refreshing the basics or pedagogy'], note: '' },
      { label: 'Question bank or study subscription', values: ['$30-100', 'Online, current items', 'Multi-exam candidates and extra reps'], note: '' },
      { label: 'FTCE registration fees', values: ['$130 GK + $150 PEd + $150 per subject area', 'Pearson VUE', 'The real exams'], note: '' }
    ],
    footnote: 'List prices as of mid-2026 and change frequently; we rank nothing by commission. Confirm the current FTCE fees and retake rules on the official FLDOE and Pearson VUE pages before registering.'
  },
  commonMistakes: {
    summary: 'The most common mistake on the FTCE exams is skipping the official content outline and studying a general teaching book, because each FTCE exam is written to its published outline and candidates who study the wrong scope lose points on the exact topics the test covers; the second is under-pacing the General Knowledge subtests, spending too long on the reading passages and rushing the mathematics subtest, when each subtest has its own clock and the scaled 200 line is per subtest. A third recurring error is neglecting the essay subtest, treating the 8-of-12 standard as an afterthought, when candidates who never wrote timed essays fail the essay even after passing the multiple-choice subtests, and then must retake the full General Knowledge battery, paying the fee again. Candidates also routinely retake too quickly, forgetting that the FTCE requires a 31-calendar-day wait between attempts, and then discover the retake cannot be scheduled when they want it, which pushes the certification timeline out. Another pattern is taking the wrong subject area examination, sitting for an exam code that does not match the certification path, and wasting the $150 fee on a test the Bureau of Educator Certification does not accept for the application. Finally, some candidates delay the remaining exams after earning the temporary certificate and let the certification timeline lapse, turning a planned sequence into a scramble, when the temporary certificate path works best with a scheduled study plan across the first teaching year, and the lapse costs the job as much as the exams do.',
    items: [
      { mistake: 'Skipping the official content outline', fix: 'Download the outline for each exam code and study the published topics and weights.' },
      { mistake: 'Under-pacing the General Knowledge subtests', fix: 'Practice each subtest on its own clock; the reading and mathematics clocks are tight.' },
      { mistake: 'Neglecting the essay subtest', fix: 'Write timed practice essays; the 8-of-12 standard is a separate passing requirement.' },
      { mistake: 'Retaking before the waiting period', fix: 'Respect the 31-calendar-day retake rule when scheduling attempts.' },
      { mistake: 'Taking the wrong subject area exam', fix: 'Confirm the exam codes your certification path requires before paying the $150 fee.' }
    ]
  },
  questionTypes: {
    summary: 'The FTCE exams are computer-based multiple-choice tests delivered year-round at Pearson VUE testing centers, with the Professional Education test (083) using 100 multiple-choice questions in 2.5 hours and a scaled passing score of 200, the subject area examinations using roughly 80 multiple-choice questions with a scaled passing score of 200, and the General Knowledge test (082) split into four subtests — the Essay, English Language Skills, Reading, and Mathematics — with a scaled passing score of 200 on each multiple-choice subtest and a score of 8 of 12 on the essay. The Professional Education test covers the pedagogical knowledge and professional practices in its outline, including learning theory, instruction, assessment, and the professional environment; the subject area examinations cover the content of the teaching field; and the General Knowledge subtests cover basic English, reading, mathematics, and writing skills. The practical implication for pacing is that the Professional Education test allows 90 seconds per item, the General Knowledge reading and mathematics subtests have tight per-subtest clocks, and the essay requires disciplined timed writing, so the item mix rewards candidates who drilled the formats with a timer. Because the passing standards are per subtest for the General Knowledge test, candidates must prepare the essay as a separate requirement rather than relying on the multiple-choice subtests. The sample items below illustrate three of the content areas — a Professional Education pedagogy item, a General Knowledge mathematics item, and a subject-area science item. The sample items are editor-written illustrations of the published blueprint, not live exam items.',
    types: [
      { name: 'Professional Education pedagogy items', share: '100 questions, 2.5 hours', detail: 'Learning theory, instruction, assessment, and the professional environment.' },
      { name: 'General Knowledge subtest items', share: 'Four subtests', detail: 'Essay, English language skills, reading, and mathematics.' },
      { name: 'Subject area examination items', share: 'Roughly 80 questions per subject', detail: 'The content of the teaching field for the certification path.' }
    ],
    samples: [
      {
        prompt: 'A teacher plans to check whether students have mastered a lesson before moving to the next unit. Which assessment type serves this purpose most directly?',
        options: [
          'A. A summative assessment given at the end of the semester',
          'B. A formative assessment given during instruction',
          'C. A standardized placement test',
          'D. An aptitude test of general reasoning'
        ],
        answer: 'B',
        explanation: 'A formative assessment during instruction gives the teacher immediate evidence of what students have mastered and what needs reteaching before the next unit. A summative assessment comes at the end of the semester, a placement test sorts students, and an aptitude test measures reasoning rather than mastery of the lesson content.'
      },
      {
        prompt: 'A class has 30 students and the teacher wants to form groups of 5. What fraction of the class is in each group?',
        options: [
          'A. 1/6 of the class',
          'B. 1/5 of the class',
          'C. 1/3 of the class',
          'D. 5/30 is not a valid fraction'
        ],
        answer: 'A',
        explanation: 'Thirty students divided into groups of 5 makes 6 groups, so each group is 1 of the 6 groups, or 1/6 of the class. Choosing 1/5 mistakes the group size for the fraction, 1/3 does not follow from the numbers, and 5/30 is a valid fraction that reduces to 1/6, so it is equivalent rather than invalid.'
      },
      {
        prompt: 'Which scientific process is most directly involved when a student observes a plant bending toward a window over several days?',
        options: [
          'A. Osmosis through the root membrane',
          'B. Phototropism, a growth response to light',
          'C. Transpiration through the leaves',
          'D. Photosynthesis in the chloroplasts'
        ],
        answer: 'B',
        explanation: 'Phototropism is the growth response of a plant toward or away from light, which is exactly what the bending toward the window describes. Osmosis moves water across membranes, transpiration releases water vapor, and photosynthesis converts light energy into chemical energy — all real processes, but none is the growth response to light that the observation describes.'
      }
    ],
    note: 'Samples are editor-written illustrations of the published blueprint, not live exam items.'
  },
  examDay: {
    summary: 'The FTCE exams are computer-based tests delivered at Pearson VUE testing centers year-round, and the direct exam-day answer is that the Professional Education test runs 100 multiple-choice questions in 2.5 hours, the subject area examinations run roughly 80 questions, and the General Knowledge test runs its four subtests with their individual clocks, with scaled passing scores of 200 and results reported through the official scoring process after the appointment. Arrive about 30 minutes early with the required government-issued photo ID and your Pearson VUE admission information, because the center verifies identity before admittance, and leave phones, smartwatches, notes, and study materials in the storage the center provides, because the exams are proctored and closed-book. The exam begins with a software tutorial, then the clock starts; there are no scheduled breaks, so the timed-practice discipline matters, and the General Knowledge subtests each have their own time limit, so pace each subtest rather than borrowing time from the previous one. Expect an unofficial pass or non-pass result immediately for most FTCE exams, with the official score report following within about four weeks, and the score is reported for the certification application. If the score falls short, the exam may be retaken after the 31-calendar-day waiting period, so use the score report and the content-area breakdown to target the weak areas before the next attempt. Afterwards, the passing scores support the certification application with the Bureau of Educator Certification, and the temporary certificate path lets new teachers begin the first year of teaching while completing the remaining exams, so track the certification timeline and the exam schedule across that year.',
    bring: ['Government-issued photo ID', 'The Pearson VUE admission and appointment confirmation', 'Approved glasses or hearing aids if used', 'Plan to arrive about 30 minutes early for check-in'],
    leave: ['Phones, smartwatches, and other electronics (stored per center rules)', 'Study materials and notes', 'Personal stationery (the center provides materials)', 'Any item on the Pearson VUE prohibited list'],
    timeline: [
      { time: '30 min before', detail: 'Arrive, present the photo ID and admission information, and check in' },
      { time: '0-10 min', detail: 'Software tutorial, then the exam clock starts' },
      { time: 'Per exam', detail: 'Work the items; pace each General Knowledge subtest on its own clock' },
      { time: 'After the test', detail: 'Unofficial pass or non-pass result; official report within about four weeks' }
    ],
    rules: ['Valid government-issued photo ID and Pearson VUE admission required', 'No scheduled breaks; the exam clock runs continuously', 'No personal electronics in the test room', 'Retakes require a 31-calendar-day wait between attempts'],
    afterwards: 'Passing scores support the certification application with the Bureau of Educator Certification. Use the temporary certificate path to begin teaching while completing the remaining exams, and track the certification timeline across the first year.'
  }
};

export default data;
