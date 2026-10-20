// v2 per-state research increment — professional-engineer
// Compiled 2026-10-20. National exam facts from the NCEES Examinee Guide (May 2026
// fee schedule as published): FE $225 and PE $400 per attempt for most disciplines,
// both computer-based and offered year-round with one attempt per quarterly window
// and a maximum of three attempts in any 12-month period; PE Structural is a separate
// exam at $350 per section (vertical and lateral breadth year-round, depth sessions
// twice a year); several low-volume PE disciplines run only once a year (2026 dates:
// 27–28 October; some 2027 dates in April). Authorisation expires 12 months after
// approval. Wages use SOC 17-2051 (Civil Engineers), the largest PE discipline, via
// BLS OEWS May 2025 through O*NET OnLine — the wage field states that scope explicitly.
// State-specific detail verified on primary sources: California requires separate
// Seismic Principles and Engineering Surveying exams on top of the national PE;
// Georgia requires an NCEES Record for comity; Massachusetts allows a master's plus
// an ABET bachelor's to cut experience to three years; Montana runs a joint PE/LS
// board with NCEES-Record comity; DC adds a state exam ($250), biennial renewal at
// $155 with 20 PDH including one ethics hour, and licenses expiring 31 August in even
// years (from the v1 dossier, verified at source).

export default {
  key: 'professional-engineer',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment (5 h 20 m exam time)', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment (8 h exam time) with a scheduled break', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Alabama application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$99,010', p25: '$77,750', p75: '$128,900', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AL' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400, one attempt per quarterly window and three per 12 months.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What does the two-exam NCEES path cost an Alabama candidate?', a: 'FE at $225 plus PE at $400 \u2014 $625 to NCEES \u2014 with Alabama\u2019s own application fees charged separately.' },
        { q: 'How often can I sit the FE or PE?', a: 'Once per quarterly window and at most three times in 12 months, under the national NCEES rule.' },
        { q: 'What do Alabama civil engineers earn?', a: 'BLS OEWS reports a May 2025 Alabama median of $99,010 for Civil Engineers \u2014 the largest PE discipline \u2014 just under the $100,840 national median.' },
        { q: 'When does exam authorisation expire?', a: 'Twelve months from approval; an unscheduled authorisation forfeits the fee.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Alaska application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$114,730', p25: '$94,960', p75: '$134,280', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AK' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Is Alaska a top-paying state for civil engineers?', a: 'Yes \u2014 BLS OEWS reports a May 2025 Alaska median of $114,730 for Civil Engineers, about 14% above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, paid to NCEES, plus Alaska\u2019s board fees.' },
        { q: 'Which PE disciplines are not year-round?', a: 'Agricultural and Biological, Architectural, Electrical and Computer: Computer Engineering, Industrial and Systems, and Metallurgical and Materials test once a year (28 October 2026); Mining, Naval Architecture, Nuclear and Petroleum on 27 October 2026; Control Systems and EC: Electronics on 14 April 2027.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Arizona application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$89,660', p25: '$76,340', p75: '$109,930', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AZ' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Arizona civil engineers earn?', a: 'BLS OEWS reports a May 2025 Arizona median of $89,660 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Arizona\u2019s board fees.' },
        { q: 'Is PE Structural the same as PE Civil: Structural?', a: 'No \u2014 PE Civil: Structural is a year-round PE Civil depth; PE Structural is the separate four-section exam at $350 per section.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    AR: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Arkansas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$85,020', p25: '$64,500', p75: '$105,090', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AR' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Arkansas civil engineers earn?', a: 'BLS OEWS reports a May 2025 Arkansas median of $85,020 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Arkansas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE; California adds two state exams',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'California Seismic Principles examination', questions: 'State-set', time: 'State-set', pass: 'State-set' },
          { name: 'California Engineering Surveying examination', questions: 'State-set', time: 'State-set', pass: 'State-set' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; California state exams and application fees charged by the board',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$122,500', p25: '$96,590', p75: '$149,350', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400; California\u2019s Seismic Principles and Engineering Surveying requirements remain on top of the national exams.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What makes the California PE distinctive?', a: 'California requires separate Seismic Principles and Engineering Surveying examinations beyond the national NCEES PE \u2014 the country\u2019s best-known state-specific add-on.' },
        { q: 'Is California the top-paying state for civil engineers?', a: 'Yes \u2014 BLS OEWS reports a May 2025 California median of $122,500 for Civil Engineers, about 21% above the $100,840 national median.' },
        { q: 'What does the national part cost?', a: 'FE $225 plus PE $400 to NCEES, with California\u2019s exam and application fees on top.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, on the NCEES side.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Colorado application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$101,420', p25: '$82,830', p75: '$132,200', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CO' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Colorado civil engineers earn?', a: 'BLS OEWS reports a May 2025 Colorado median of $101,420 for Civil Engineers, just above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Colorado\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Connecticut application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$103,150', p25: '$83,390', p75: '$130,150', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Connecticut civil engineers earn?', a: 'BLS OEWS reports a May 2025 Connecticut median of $103,150 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Connecticut\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Delaware application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$100,220', p25: '$81,470', p75: '$126,810', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=DE' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Delaware civil engineers earn?', a: 'BLS OEWS reports a May 2025 Delaware median of $100,220 for Civil Engineers, essentially at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Delaware\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE; DC adds a state examination',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'District of Columbia state examination', questions: 'DC laws and practice', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; DC state exam $250 plus a $65 application',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      renewal: { cycle: 'Biennial, expiring 31 August in even years', ce: '20 PDH per renewal including one ethics hour', fee: '$155', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$103,880', p25: '$82,120', p75: '$130,720', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=DC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400; DC\u2019s state exam ($250) and biennial $155 renewal with 20 PDH including one ethics hour remain in force.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What does DC add beyond the NCEES exams?', a: 'A $250 District examination, a $65 application fee, and a biennial renewal at $155 carrying 20 professional development hours including one ethics hour.' },
        { q: 'When do DC PE licences renew?', a: 'Every two years, expiring 31 August in even years; endorsement applicants submit an NCEES Record.' },
        { q: 'What do DC civil engineers earn?', a: 'BLS OEWS reports a May 2025 DC median of $103,880 for Civil Engineers, above the $100,840 national median.' },
        { q: 'How are NCEES attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'DC Board of Professional Engineers (via v1 dossier, verified at source)', url: 'https://dlcp.dc.gov/page/board-professional-engineers', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 DC wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Florida application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,570', p25: '$76,740', p75: '$128,450', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=FL' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Florida civil engineers earn?', a: 'BLS OEWS reports a May 2025 Florida median of $98,570 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Florida\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE (Fundamentals of Engineering)', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE (Principles and Practice of Engineering)', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Georgia board fees per the Secretary of State schedule',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$84,240', p25: '$75,090', p75: '$114,380', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=GA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What does Georgia require from comity applicants?', a: 'An NCEES Record \u2014 Georgia will not process an out-of-state application without one; the joint PE/LS board sits under the Secretary of State.' },
        { q: 'What do Georgia civil engineers earn?', a: 'BLS OEWS reports a May 2025 Georgia median of $84,240 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Georgia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'Georgia State Board (via v1 dossier, verified at source)', url: 'https://sos.ga.gov/georgia-state-board-professional-engineers-and-land-surveyors', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Hawaii application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$94,280', p25: '$77,720', p75: '$113,550', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=HI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Hawaii civil engineers earn?', a: 'BLS OEWS reports a May 2025 Hawaii median of $94,280 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Hawaii\u2019s board fees.' },
        { q: 'Is the FE reference handbook searchable?', a: 'Yes \u2014 NCEES supplies an on-screen, searchable electronic reference handbook for its CBT exams.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Idaho application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,030', p25: '$78,990', p75: '$113,160', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ID' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Idaho civil engineers earn?', a: 'BLS OEWS reports a May 2025 Idaho median of $98,030 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Idaho\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Illinois application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$99,760', p25: '$79,650', p75: '$125,990', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IL' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Illinois civil engineers earn?', a: 'BLS OEWS reports a May 2025 Illinois median of $99,760 for Civil Engineers, essentially at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Illinois\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Indiana application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,270', p25: '$77,510', p75: '$121,550', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Indiana civil engineers earn?', a: 'BLS OEWS reports a May 2025 Indiana median of $98,270 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Indiana\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Iowa application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$96,430', p25: '$76,760', p75: '$120,230', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Iowa civil engineers earn?', a: 'BLS OEWS reports a May 2025 Iowa median of $96,430 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Iowa\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Kansas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$96,880', p25: '$77,170', p75: '$125,990', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=KS' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Kansas civil engineers earn?', a: 'BLS OEWS reports a May 2025 Kansas median of $96,880 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Kansas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=KS', checkedOn: '2026-10' }
      ]
    },
    KY: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Kentucky application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$100,930', p25: '$78,960', p75: '$122,930', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=KY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Kentucky civil engineers earn?', a: 'BLS OEWS reports a May 2025 Kentucky median of $100,930 for Civil Engineers, right at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Kentucky\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kentucky wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=KY', checkedOn: '2026-10' }
      ]
    },
    LA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Louisiana application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$105,380', p25: '$78,770', p75: '$127,940', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=LA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Louisiana civil engineers earn?', a: 'BLS OEWS reports a May 2025 Louisiana median of $105,380 for Civil Engineers, above the $100,840 national median \u2014 coastal-resilience work keeps demand high.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Louisiana\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Louisiana wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=LA', checkedOn: '2026-10' }
      ]
    },
    ME: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Maine application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$97,820', p25: '$80,410', p75: '$113,330', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ME' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Maine civil engineers earn?', a: 'BLS OEWS reports a May 2025 Maine median of $97,820 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Maine\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maine wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ME', checkedOn: '2026-10' }
      ]
    },
    MD: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Maryland application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$100,680', p25: '$81,640', p75: '$126,620', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MD' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Maryland civil engineers earn?', a: 'BLS OEWS reports a May 2025 Maryland median of $100,680 for Civil Engineers, essentially at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Maryland\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maryland wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MD', checkedOn: '2026-10' }
      ]
    },
    MA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Massachusetts application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      education: { hours: 'A master\u2019s degree paired with an ABET bachelor\u2019s can reduce the experience requirement to three years (board guidance)', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$106,730', p25: '$84,570', p75: '$134,810', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Can a master\u2019s degree shorten the Massachusetts experience requirement?', a: 'Yes \u2014 a master\u2019s degree combined with an ABET bachelor\u2019s can reduce it to three years under the board\u2019s guidance.' },
        { q: 'What do Massachusetts civil engineers earn?', a: 'BLS OEWS reports a May 2025 Massachusetts median of $106,730 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Massachusetts\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'Massachusetts board guidance (via v1 dossier, verified at source)', url: 'https://www.mass.gov/orgs/board-of-registration-of-professional-engineers-and-of-land-surveyors', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Massachusetts wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MA', checkedOn: '2026-10' }
      ]
    },
    MI: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Michigan application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$92,100', p25: '$75,470', p75: '$109,870', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Michigan civil engineers earn?', a: 'BLS OEWS reports a May 2025 Michigan median of $92,100 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Michigan\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Michigan wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MI', checkedOn: '2026-10' }
      ]
    },
    MN: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Minnesota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$101,480', p25: '$80,500', p75: '$129,670', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Minnesota civil engineers earn?', a: 'BLS OEWS reports a May 2025 Minnesota median of $101,480 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Minnesota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Minnesota wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MN', checkedOn: '2026-10' }
      ]
    },
    MS: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Mississippi application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$100,170', p25: '$75,730', p75: '$124,240', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MS' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Mississippi civil engineers earn?', a: 'BLS OEWS reports a May 2025 Mississippi median of $100,170 for Civil Engineers, essentially at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Mississippi\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Mississippi wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MS', checkedOn: '2026-10' }
      ]
    },
    MO: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Missouri application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$92,750', p25: '$77,410', p75: '$114,990', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MO' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Missouri civil engineers earn?', a: 'BLS OEWS reports a May 2025 Missouri median of $92,750 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Missouri\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Missouri wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MO', checkedOn: '2026-10' }
      ]
    },
    MT: {
      agencyUrl: 'https://boards.bsd.dli.mt.gov/professional-engineers-and-land-surveyors/',
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Montana board fees per the DLI schedule',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$93,070', p25: '$76,770', p75: '$105,980', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      localNuance: 'Montana runs a joint Board of Professional Engineers and Professional Land Surveyors under the Department of Labor and Industry, with comity filed through an NCEES Record.',
      stateFaqs: [
        { q: 'How is Montana\u2019s PE board organised?', a: 'As a joint engineers-and-surveyors board under the Department of Labor and Industry, with comity applications processed through an NCEES Record.' },
        { q: 'What do Montana civil engineers earn?', a: 'BLS OEWS reports a May 2025 Montana median of $93,070 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Montana\u2019s DLI fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'Montana DLI joint board', url: 'https://boards.bsd.dli.mt.gov/professional-engineers-and-land-surveyors/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Montana wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=MT', checkedOn: '2026-10' }
      ]
    },
    NE: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Nebraska application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$103,150', p25: '$80,410', p75: '$125,930', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NE' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Nebraska civil engineers earn?', a: 'BLS OEWS reports a May 2025 Nebraska median of $103,150 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Nebraska\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nebraska wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NE', checkedOn: '2026-10' }
      ]
    },
    NV: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Nevada application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$104,310', p25: '$83,530', p75: '$148,150', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NV' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Nevada civil engineers earn?', a: 'BLS OEWS reports a May 2025 Nevada median of $104,310 for Civil Engineers, above the $100,840 national median, with a 90th percentile of $148,150.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Nevada\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nevada wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NV', checkedOn: '2026-10' }
      ]
    },
    NH: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; New Hampshire application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,710', p25: '$76,960', p75: '$118,980', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NH' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Hampshire civil engineers earn?', a: 'BLS OEWS reports a May 2025 New Hampshire median of $98,710 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus New Hampshire\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Hampshire wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NH', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; New Jersey application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$104,660', p25: '$82,270', p75: '$134,270', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NJ' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Jersey civil engineers earn?', a: 'BLS OEWS reports a May 2025 New Jersey median of $104,660 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus New Jersey\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Jersey wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NJ', checkedOn: '2026-10' }
      ]
    },
    NM: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; New Mexico application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$103,900', p25: '$79,570', p75: '$129,310', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NM' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Mexico civil engineers earn?', a: 'BLS OEWS reports a May 2025 New Mexico median of $103,900 for Civil Engineers, above the $100,840 national median \u2014 national-lab and federal work support the market.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus New Mexico\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Mexico wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NM', checkedOn: '2026-10' }
      ]
    },
    NY: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; New York application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$103,760', p25: '$84,740', p75: '$135,920', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New York civil engineers earn?', a: 'BLS OEWS reports a May 2025 New York median of $103,760 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus New York\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New York wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NY', checkedOn: '2026-10' }
      ]
    },
    NC: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; North Carolina application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$100,730', p25: '$79,140', p75: '$125,730', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do North Carolina civil engineers earn?', a: 'BLS OEWS reports a May 2025 North Carolina median of $100,730 for Civil Engineers, essentially at the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus North Carolina\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Carolina wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=NC', checkedOn: '2026-10' }
      ]
    },
    ND: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; North Dakota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,190', p25: '$76,950', p75: '$117,060', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ND' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do North Dakota civil engineers earn?', a: 'BLS OEWS reports a May 2025 North Dakota median of $98,190 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus North Dakota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Dakota wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=ND', checkedOn: '2026-10' }
      ]
    },
    OH: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Ohio application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$96,220', p25: '$77,820', p75: '$124,930', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OH' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Ohio civil engineers earn?', a: 'BLS OEWS reports a May 2025 Ohio median of $96,220 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Ohio\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Ohio wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OH', checkedOn: '2026-10' }
      ]
    },
    OK: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Oklahoma application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,760', p25: '$79,170', p75: '$127,590', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OK' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Oklahoma civil engineers earn?', a: 'BLS OEWS reports a May 2025 Oklahoma median of $98,760 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Oklahoma\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oklahoma wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OK', checkedOn: '2026-10' }
      ]
    },
    OR: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Oregon application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$105,250', p25: '$82,580', p75: '$135,870', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OR' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Oregon civil engineers earn?', a: 'BLS OEWS reports a May 2025 Oregon median of $105,250 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Oregon\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oregon wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=OR', checkedOn: '2026-10' }
      ]
    },
    PA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Pennsylvania application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$97,850', p25: '$77,920', p75: '$122,320', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=PA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Pennsylvania civil engineers earn?', a: 'BLS OEWS reports a May 2025 Pennsylvania median of $97,850 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Pennsylvania\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Pennsylvania wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=PA', checkedOn: '2026-10' }
      ]
    },
    RI: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Rhode Island application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$99,300', p25: '$79,040', p75: '$150,160', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=RI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Rhode Island civil engineers earn?', a: 'BLS OEWS reports a May 2025 Rhode Island median of $99,300 for Civil Engineers, just under the $100,840 national median \u2014 though the small sample pushes the 90th percentile to $150,160.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Rhode Island\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Rhode Island wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=RI', checkedOn: '2026-10' }
      ]
    },
    SC: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; South Carolina application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$101,600', p25: '$80,360', p75: '$131,550', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=SC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do South Carolina civil engineers earn?', a: 'BLS OEWS reports a May 2025 South Carolina median of $101,600 for Civil Engineers, above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus South Carolina\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Carolina wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=SC', checkedOn: '2026-10' }
      ]
    },
    SD: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; South Dakota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$98,700', p25: '$80,560', p75: '$115,180', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=SD' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do South Dakota civil engineers earn?', a: 'BLS OEWS reports a May 2025 South Dakota median of $98,700 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus South Dakota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Dakota wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=SD', checkedOn: '2026-10' }
      ]
    },
    TN: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Tennessee application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$95,910', p25: '$76,900', p75: '$123,160', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=TN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Tennessee civil engineers earn?', a: 'BLS OEWS reports a May 2025 Tennessee median of $95,910 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Tennessee\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Tennessee wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=TN', checkedOn: '2026-10' }
      ]
    },
    TX: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Texas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$96,860', p25: '$77,200', p75: '$127,340', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=TX' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Texas civil engineers earn?', a: 'BLS OEWS reports a May 2025 Texas median of $96,860 for Civil Engineers, below the $100,840 national median \u2014 though the state employs one of the largest PE workforces anywhere.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Texas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Texas wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=TX', checkedOn: '2026-10' }
      ]
    },
    UT: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Utah application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$96,830', p25: '$78,510', p75: '$123,240', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=UT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Utah civil engineers earn?', a: 'BLS OEWS reports a May 2025 Utah median of $96,830 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Utah\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Utah wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=UT', checkedOn: '2026-10' }
      ]
    },
    VT: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Vermont application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$95,600', p25: '$78,870', p75: '$104,770', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=VT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Vermont civil engineers earn?', a: 'BLS OEWS reports a May 2025 Vermont median of $95,600 for Civil Engineers, below the $100,840 national median \u2014 with one of the tightest percentile spreads in the country.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Vermont\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Vermont wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=VT', checkedOn: '2026-10' }
      ]
    },
    VA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Virginia application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$97,120', p25: '$79,150', p75: '$126,780', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=VA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Virginia civil engineers earn?', a: 'BLS OEWS reports a May 2025 Virginia median of $97,120 for Civil Engineers, just below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Virginia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Virginia wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=VA', checkedOn: '2026-10' }
      ]
    },
    WA: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Washington application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$110,000', p25: '$96,230', p75: '$133,050', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Is Washington a top-paying state for civil engineers?', a: 'Yes \u2014 BLS OEWS reports a May 2025 Washington median of $110,000 for Civil Engineers, about 9% above the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Washington\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Washington wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WA', checkedOn: '2026-10' }
      ]
    },
    WV: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; West Virginia application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$86,930', p25: '$62,070', p75: '$112,400', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WV' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do West Virginia civil engineers earn?', a: 'BLS OEWS reports a May 2025 West Virginia median of $86,930 for Civil Engineers \u2014 the lowest state median in the country against $100,840 nationally.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus West Virginia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 West Virginia wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WV', checkedOn: '2026-10' }
      ]
    },
    WI: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Wisconsin application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$94,600', p25: '$75,920', p75: '$111,400', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Wisconsin civil engineers earn?', a: 'BLS OEWS reports a May 2025 Wisconsin median of $94,600 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Wisconsin\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wisconsin wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WI', checkedOn: '2026-10' }
      ]
    },
    WY: {
      exam: {
        vendor: 'NCEES FE and PE at Pearson VUE',
        parts: [
          { name: 'NCEES FE', questions: '110 questions', time: '6-hour appointment', pass: 'Scaled cut score, pass/fail' },
          { name: 'NCEES PE', questions: '80 questions in the chosen discipline', time: '9-hour appointment', pass: 'Scaled cut score, pass/fail' }
        ],
        fee: 'FE $225 + PE $400 payable to NCEES; Wyoming application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-2051', socName: 'Civil Engineers (largest PE discipline \u2014 wage proxy for the licensed cohort)', median: '$90,590', p25: '$77,610', p75: '$106,220', national: '$100,840', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FE $225, PE $400.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Wyoming civil engineers earn?', a: 'BLS OEWS reports a May 2025 Wyoming median of $90,590 for Civil Engineers, below the $100,840 national median.' },
        { q: 'What does the NCEES path cost?', a: 'FE $225 plus PE $400, plus Wyoming\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months.' },
        { q: 'When does authorisation expire?', a: 'Twelve months from approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wyoming wages, SOC 17-2051', url: 'https://www.onetonline.org/link/localwages/17-2051.00?st=WY', checkedOn: '2026-10' }
      ]
    }
  }
};
