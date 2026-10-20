// v2 per-state research increment — land-surveyor
// Compiled 2026-10-20. National exam facts from the NCEES Examinee Guide (May 2026
// fee schedule, as published): FS $225, PS $375 — both computer-based, year-round in
// quarterly windows (Jan–Mar, Apr–Jun, Jul–Sep, Oct–Dec), one attempt per window and
// max three attempts in any 12-month period, authorisation expires after 12 months.
// (Note: the $400 figure sometimes quoted is the PE engineering exam fee, not PS.)
// State-specific detail verified on primary sources: Illinois IDFPR PLS qualifications
// (FS + PS + Illinois Jurisdiction exam; 4 years responsible charge; odd-year Nov 30
// renewal), Maryland DLLR PLS FAQs (five licensure options; Maryland Law and Ethics
// 2-hour open-book exam plus Maryland Storm Drain and Road Grade Design 4-hour exam;
// $60 application + $39 per state exam), Oklahoma PELS statutes (4- or 6-year routes;
// Oklahoma Law and Surveying exam required even for comity), Maine Board rulemaking
// (24 months supervised experience + PS + Maine-specific exam for endorsement), and
// the Ohio Board's legislative testimony (2-hour state exam inside the $75 application;
// 30 CE hours biennially including 2 hours of rules/ethics; $50 initial / $40 renewal).
// Wages: BLS OEWS May 2025 via O*NET OnLine (SOC 17-1022, Surveyors). BLS publishes no
// estimate for DC — that jurisdiction carries no wages field by design.

export default {
  key: 'land-surveyor',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; Alabama board sets state requirements',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES (fees in effect since 1 January 2024); Alabama application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      education: { hours: 'Surveying degree plus progressive experience per the NCEES Model Law framework Alabama follows', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$66,840', p25: '$50,700', p75: '$86,820', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AL' },
      recentChanges: [{ year: 2024, change: 'NCEES exam fees effective 1 January 2024 set FS at $225 and PS at $375, with one attempt per quarterly window and three attempts per 12-month period.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What does the NCEES exam path cost an Alabama candidate?', a: 'FS at $225 plus PS at $375 \u2014 $600 to NCEES \u2014 with Alabama\u2019s own application fees charged separately by the board.' },
        { q: 'How often can I sit the FS or PS in Alabama?', a: 'Once per quarterly testing window and no more than three times in any 12-month period, the national NCEES rule unless the Alabama board is stricter.' },
        { q: 'What do Alabama surveyors earn?', a: 'BLS OEWS reports a May 2025 Alabama median of $66,840 for Surveyors, below the $75,440 national median.' },
        { q: 'How long is my exam authorisation valid?', a: 'Twelve months from approval \u2014 miss the window and the registration fee is forfeited.' }
      ],
      sources: [
        { label: 'NCEES Examinee Guide fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Alaska application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$99,550', p25: '$81,050', p75: '$126,390', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AK' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375, quarterly windows with the three-attempts-per-12-months cap.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Is Alaska the top-paying state for surveyors?', a: 'Yes \u2014 BLS OEWS reports a May 2025 Alaska median of $99,550 for Surveyors, the highest in the country and roughly 32% above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375, paid to NCEES, plus Alaska\u2019s own application fees.' },
        { q: 'How many attempts are allowed?', a: 'One per quarterly window, up to three in 12 months, under the NCEES rule.' },
        { q: 'When does exam authorisation lapse?', a: 'After 12 months from approval; unscheduled authorisations forfeit the fee.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Arizona application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$77,490', p25: '$59,390', p75: '$94,730', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AZ' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Arizona surveyors earn?', a: 'BLS OEWS reports a May 2025 Arizona median of $77,490 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Arizona\u2019s board fees.' },
        { q: 'How are exam attempts limited?', a: 'One per quarterly window and three per 12 months under the NCEES rule.' },
        { q: 'What happens if I do not schedule in time?', a: 'Authorisation expires after 12 months and the registration fee is forfeited.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    AR: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Arkansas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$51,800', p25: '$42,660', p75: '$65,150', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AR' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Arkansas surveyors earn?', a: 'BLS OEWS reports a May 2025 Arkansas median of $51,800 for Surveyors \u2014 among the lowest state medians, against $75,440 nationally.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Arkansas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; California board administers state requirements',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; California application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$105,330', p25: '$78,500', p75: '$134,250', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Is California the best-paying state for surveyors?', a: 'Yes \u2014 BLS OEWS reports a May 2025 California median of $105,330 for Surveyors, the highest in the country and about 40% above the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus California\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval, with the fee forfeited if unscheduled.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Colorado application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$79,310', p25: '$63,700', p75: '$100,240', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CO' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Colorado surveyors earn?', a: 'BLS OEWS reports a May 2025 Colorado median of $79,310 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Colorado\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Connecticut application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$76,730', p25: '$70,880', p75: '$95,540', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Connecticut surveyors earn?', a: 'BLS OEWS reports a May 2025 Connecticut median of $76,730 for Surveyors, just above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Connecticut\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Delaware application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$82,890', p25: '$73,990', p75: '$99,580', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=DE' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Delaware surveyors earn?', a: 'BLS OEWS reports a May 2025 Delaware median of $82,890 for Surveyors, above the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Delaware\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; DC application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { note: 'BLS does not publish an OEWS wage estimate for Surveyors in the District of Columbia \u2014 the sample is below publication standards. The national median is $75,440 (May 2025).', soc: '17-1022', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=DC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do DC surveyors earn?', a: 'BLS withholds an OEWS estimate for Surveyors in the District because employment is too small to publish; nationally the May 2025 median is $75,440.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus DC\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 DC wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Florida application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$65,480', p25: '$57,870', p75: '$94,530', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=FL' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Florida surveyors earn?', a: 'BLS OEWS reports a May 2025 Florida median of $65,480 for Surveyors, below the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Florida\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Georgia application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$58,100', p25: '$48,610', p75: '$78,400', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=GA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Georgia surveyors earn?', a: 'BLS OEWS reports a May 2025 Georgia median of $58,100 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Georgia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Hawaii application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$82,200', p25: '$61,030', p75: '$96,550', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=HI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375, one attempt per quarterly window.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Hawaii surveyors earn?', a: 'BLS OEWS reports a May 2025 Hawaii median of $82,200 for Surveyors, about 9% above the $75,440 national median.' },
        { q: 'What is the exam sequencing?', a: 'FS first (usually during or right after the surveying degree), then PS after the required experience \u2014 the same two-stage NCEES structure used in every jurisdiction.' },
        { q: 'What does rescheduling cost?', a: 'Pearson VUE charges reschedule fees that grow as the appointment approaches \u2014 moving a date inside 24\u201348 hours costs more than moving it earlier, and cancellations inside 48 hours forfeit everything.' },
        { q: 'Are practice exams available?', a: 'Yes \u2014 NCEES sells official practice exams through its Study with NCEES platform for both FS and PS.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Idaho application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$73,940', p25: '$60,810', p75: '$96,340', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ID' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Idaho surveyors earn?', a: 'BLS OEWS reports a May 2025 Idaho median of $73,940 for Surveyors, just below the $75,440 national median.' },
        { q: 'How long do FS scores stay valid?', a: 'Indefinitely once accepted \u2014 the FS credential is the foundation for the later PS application in Idaho as everywhere.' },
        { q: 'What reference materials are allowed?', a: 'NCEES supplies an on-screen reference handbook for its CBT exams; personal printed materials are not brought into the Pearson VUE centre.' },
        { q: 'How do I register?', a: 'Through MyNCEES at ncees.org after your Idaho board approves eligibility; scheduling happens at Pearson VUE centres.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      agencyUrl: 'https://idfpr.illinois.gov',
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; Illinois Jurisdiction (IJ) exam',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'Illinois Jurisdiction (IJ) examination', questions: 'Illinois-specific land surveying law and practice', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Illinois application fees separate; the IJ exam is an additional Illinois requirement',
        sourceUrl: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf'
      },
      education: { hours: 'A baccalaureate degree with 24 semester hours of land surveying coursework (from an approved programme or reviewed by the board); internationally educated applicants need an NCEES credential evaluation', sourceUrl: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf' },
      experience: 'Minimum four years of professional land surveying experience in responsible charge, filed on the VE-LSR form by each supervisor',
      renewal: { cycle: 'Licences expire 30 November of each odd-numbered year regardless of issuance date', sourceUrl: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf' },
      application: { portal: 'IDFPR online application', steps: ['Create the application (active for three years from receipt)', 'Upload official transcripts or, for Illinois Surveyor Interns, the SI certificate', 'Certify FS/PS score transmittal through MyNCEES', 'Upload the IJ exam score report and VE-LSR experience forms', 'An NCEES Record substitutes for transcripts, exam certifications and experience forms'], sourceUrl: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf' },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$75,980', p25: '$59,940', p75: '$100,380', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IL' },
      recentChanges: [{ year: 2025, change: 'Illinois\u2019s PLS qualifications document was revised September 2025, confirming the three-exam structure (FS, PS and the Illinois Jurisdiction exam) and the four-year responsible-charge standard.', sourceUrl: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf' }],
      stateFaqs: [
        { q: 'What is the Illinois Jurisdiction exam?', a: 'A third, Illinois-specific examination on state land surveying law and practice, required on top of the NCEES FS and PS \u2014 its score report uploads with your application.' },
        { q: 'How much experience does Illinois require?', a: 'Four years in responsible charge, documented on VE-LSR forms filed separately for each supervising employer.' },
        { q: 'Does an NCEES Record help in Illinois?', a: 'Yes \u2014 submitting an NCEES Record means you do not separately upload transcripts, exam certifications (except the IJ) or experience forms.' },
        { q: 'What do Illinois surveyors earn?', a: 'BLS OEWS reports a May 2025 Illinois median of $75,980 for Surveyors, essentially at the $75,440 national median.' }
      ],
      sources: [
        { label: 'Illinois IDFPR \u2014 PLS Qualifications for Licensure (rev. 9/2025)', url: 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/core/dpr/035-qualifications-for-licensure.pdf', checkedOn: '2026-10' },
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Indiana application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$80,510', p25: '$61,080', p75: '$100,920', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Indiana surveyors earn?', a: 'BLS OEWS reports a May 2025 Indiana median of $80,510 for Surveyors, above the $75,440 national median.' },
        { q: 'Can international degrees qualify?', a: 'Most boards, following the NCEES model, require a credentials evaluation for foreign degrees; Indiana\u2019s board applies its own review to the evaluation.' },
        { q: 'What are the 2026 testing windows?', a: 'January\u2013March, April\u2013June, July\u2013September and October\u2013December, with FS and PS offered year-round at Pearson VUE centres.' },
        { q: 'What does a missed authorisation cost?', a: 'Authorisation expires after 12 months and the registration fee is forfeited \u2014 schedule promptly after board approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Iowa application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$77,090', p25: '$68,580', p75: '$102,220', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Iowa surveyors earn?', a: 'BLS OEWS reports a May 2025 Iowa median of $77,090 for Surveyors, slightly above the $75,440 national median.' },
        { q: 'What ID do I bring on exam day?', a: 'A government-issued photo ID whose name matches the appointment confirmation letter exactly \u2014 mismatches must be fixed with NCEES before test day.' },
        { q: 'How quickly do I need to schedule?', a: 'At least one business day before testing, though seats fill first-come, so book as early as possible after approval.' },
        { q: 'Are refunds available?', a: 'Cancellations more than 48 hours ahead refund the NCEES fee minus a $50 administrative charge; inside 48 hours nothing is refunded.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Kansas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$75,860', p25: '$63,200', p75: '$95,260', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=KS' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Kansas surveyors earn?', a: 'BLS OEWS reports a May 2025 Kansas median of $75,860 for Surveyors, essentially at the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Kansas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window and three per 12 months under the NCEES rule, unless the Kansas board is stricter.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=KS', checkedOn: '2026-10' }
      ]
    },
    KY: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Kentucky application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$71,840', p25: '$49,300', p75: '$78,690', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=KY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Kentucky surveyors earn?', a: 'BLS OEWS reports a May 2025 Kentucky median of $71,840 for Surveyors, below the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Kentucky\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval, with the fee forfeited if unscheduled.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kentucky wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=KY', checkedOn: '2026-10' }
      ]
    },
    LA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Louisiana application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$63,140', p25: '$48,660', p75: '$91,260', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=LA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Louisiana surveyors earn?', a: 'BLS OEWS reports a May 2025 Louisiana median of $63,140 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Louisiana\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Louisiana wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=LA', checkedOn: '2026-10' }
      ]
    },
    ME: {
      agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/land-surveyors',
      exam: {
        vendor: 'NCEES PS at Pearson VUE; Maine-specific examination',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'Maine-specific examination', questions: 'Surveying topics focused on Maine practice', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Maine application fees separate; the Maine-specific exam is an additional requirement for both exam and endorsement applicants',
        sourceUrl: 'https://www.maine.gov/pfr/professionallicensing/sites/maine.gov.pfr.professionallicensing/files/inline-files/February%2025%2C%202025%20Agenda%20%28PDF%29.pdf'
      },
      experience: 'Endorsement applicants must document 24 months of full-time experience under a licensed land surveyor, alongside a passing PS score and the Maine-specific exam; all applicants must show good standing in every jurisdiction where licensed',
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$83,200', p25: '$61,480', p75: '$118,020', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ME' },
      recentChanges: [{ year: 2025, change: 'Maine\u2019s proposed rulemaking (Chapters 50, 60, 80 and 90, February 2025) tightened the endorsement pathway: 24 months of supervised experience, a passing PS score, and the Maine-specific jurisprudence exam.', sourceUrl: 'https://www.maine.gov/pfr/professionallicensing/sites/maine.gov.pfr.professionallicensing/files/inline-files/Proposed%20Rulemaking%20Chapters%2050%2C%2060%2C%2080%20and%2090_0.pdf' }],
      stateFaqs: [
        { q: 'What does Maine require from out-of-state surveyors?', a: 'Under the 2025 rulemaking: proof of an active license in a substantially equivalent jurisdiction, 24 months of full-time supervised experience, a passing NCEES PS score, and Maine\u2019s own exam focused on Maine practice.' },
        { q: 'What does the Maine-specific exam cover?', a: 'Surveying topics with a focus on Maine practice \u2014 the state\u2019s jurisprudence layer on top of the national PS.' },
        { q: 'What do Maine surveyors earn?', a: 'BLS OEWS reports a May 2025 Maine median of $83,200 for Surveyors, above the $75,440 national median.' },
        { q: 'What does good standing mean here?', a: 'No pending complaints, investigations or suspensions in any jurisdiction, and no surrendered or revoked licenses.' }
      ],
      sources: [
        { label: 'Maine Board \u2014 rulemaking chapters 50/60 (2025)', url: 'https://www.maine.gov/pfr/professionallicensing/sites/maine.gov.pfr.professionallicensing/files/inline-files/Proposed%20Rulemaking%20Chapters%2050%2C%2060%2C%2080%20and%2090_0.pdf', checkedOn: '2026-10' },
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maine wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ME', checkedOn: '2026-10' }
      ]
    },
    MD: {
      agencyUrl: 'https://labor.maryland.gov/license/ls/',
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; two Maryland state-specific exams',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'Maryland Law and Ethics examination', questions: '60 multiple-choice questions, open book', time: '2 hours', pass: 'Board-set' },
          { name: 'Maryland Storm Drain and Road Grade Design examination', questions: 'Principles-and-practice problems, open book, calculators allowed', time: '4 hours', pass: 'Board-set' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Maryland state exams $60 application (non-refundable) + $39 per exam',
        sourceUrl: 'https://labor.maryland.gov/license/ls/lslicfaqs.shtml'
      },
      education: { hours: 'Five licensure options: a four-year accredited land surveying degree + 2 years experience; a four-year physical science degree + 4 years; any four-year degree with 30 surveying credits + 4 years; high school plus 30 surveying credits + 6 years; or high school plus 9 years. Land surveying coursework earns one year of experience credit per 30 semester hours, capped at three years', sourceUrl: 'https://labor.maryland.gov/license/ls/lslicfaqs.shtml' },
      experience: 'Reported on the Report of Professional Experience (RPE) form, started by the applicant and completed by the person in responsible charge, sent to the board directly by the verifier',
      application: { portal: 'Maryland Board for Professional Land Surveyors electronic application', steps: ['Confirm your licensure option', 'Create an NCEES account and apply to Maryland for licensure by examination', 'Register for and pass the FS exam', 'Pay the licensing fee and submit transcripts, RPE forms and references', 'After monthly board approval, sit the PS and both Maryland state exams', 'Confirm all exam passes \u2014 the licence is then released'], processingTime: 'The board approves applications at monthly meetings', sourceUrl: 'https://labor.maryland.gov/license/ls/lslicfaqs.shtml' },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$64,910', p25: '$52,800', p75: '$87,700', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MD' },
      recentChanges: [{ year: 2026, change: 'Maryland\u2019s published PLS FAQ confirms the two-exam state layer (Law and Ethics; Storm Drain and Road Grade Design) at $39 per exam plus a $60 application.', sourceUrl: 'https://labor.maryland.gov/license/ls/lslicfaqs.shtml' }],
      stateFaqs: [
        { q: 'What are Maryland\u2019s two state exams?', a: 'A 2-hour open-book Maryland Law and Ethics exam (60 multiple-choice questions) and a 4-hour open-book Storm Drain and Road Grade Design exam \u2014 $39 each plus a $60 application.' },
        { q: 'Which of the five Maryland options is fastest?', a: 'The approved land surveying curriculum route: a four-year accredited degree plus two years of experience. Non-degree applicants need up to nine years.' },
        { q: 'Can coursework shorten the experience requirement?', a: 'Yes \u2014 each 30 semester hours of approved surveying coursework earns one year of experience credit, capped at three years.' },
        { q: 'What do Maryland surveyors earn?', a: 'BLS OEWS reports a May 2025 Maryland median of $64,910 for Surveyors, below the $75,440 national median.' }
      ],
      sources: [
        { label: 'Maryland DLLR \u2014 PLS Licensing FAQs', url: 'https://labor.maryland.gov/license/ls/lslicfaqs.shtml', checkedOn: '2026-10' },
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maryland wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MD', checkedOn: '2026-10' }
      ]
    },
    MA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Massachusetts application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      education: { hours: 'A master\u2019s degree combined with an ABET bachelor\u2019s can reduce the experience requirement to three years (per the Massachusetts board\u2019s published guidance)', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$94,590', p25: '$76,770', p75: '$104,450', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Can a master\u2019s degree shorten the Massachusetts path?', a: 'Yes \u2014 the board\u2019s guidance allows a master\u2019s degree paired with an ABET bachelor\u2019s to cut the experience requirement to three years.' },
        { q: 'What do Massachusetts surveyors earn?', a: 'BLS OEWS reports a May 2025 Massachusetts median of $94,590 for Surveyors \u2014 the second-highest state median, behind only California.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Massachusetts\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Massachusetts wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MA', checkedOn: '2026-10' }
      ]
    },
    MI: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Michigan application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$72,080', p25: '$61,130', p75: '$78,740', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Michigan surveyors earn?', a: 'BLS OEWS reports a May 2025 Michigan median of $72,080 for Surveyors, below the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Michigan\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Michigan wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MI', checkedOn: '2026-10' }
      ]
    },
    MN: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Minnesota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$83,620', p25: '$67,190', p75: '$100,130', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Minnesota surveyors earn?', a: 'BLS OEWS reports a May 2025 Minnesota median of $83,620 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Minnesota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Minnesota wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MN', checkedOn: '2026-10' }
      ]
    },
    MS: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Mississippi application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$58,720', p25: '$47,080', p75: '$77,920', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MS' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Mississippi surveyors earn?', a: 'BLS OEWS reports a May 2025 Mississippi median of $58,720 for Surveyors \u2014 among the lowest state medians, against $75,440 nationally.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Mississippi\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Mississippi wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MS', checkedOn: '2026-10' }
      ]
    },
    MO: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Missouri application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$62,110', p25: '$49,460', p75: '$77,630', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MO' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Missouri surveyors earn?', a: 'BLS OEWS reports a May 2025 Missouri median of $62,110 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Missouri\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Missouri wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MO', checkedOn: '2026-10' }
      ]
    },
    MT: {
      agencyUrl: 'https://boards.bsd.dli.mt.gov/professional-engineers-and-land-surveyors/',
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Montana board fees per the DLI schedule',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$84,610', p25: '$71,730', p75: '$104,810', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      localNuance: 'Montana runs a joint Board of Professional Engineers and Professional Land Surveyors under the Department of Labor and Industry, and comity applicants file through an NCEES Record.',
      stateFaqs: [
        { q: 'How is Montana\u2019s surveyor board organised?', a: 'As a joint engineers-and-surveyors board under the Department of Labor and Industry, with comity applications processed through an NCEES Record.' },
        { q: 'What do Montana surveyors earn?', a: 'BLS OEWS reports a May 2025 Montana median of $84,610 for Surveyors, well above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Montana\u2019s DLI fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'Montana DLI joint board', url: 'https://boards.bsd.dli.mt.gov/professional-engineers-and-land-surveyors/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Montana wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=MT', checkedOn: '2026-10' }
      ]
    },
    NE: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Nebraska application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$68,050', p25: '$59,500', p75: '$80,100', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NE' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Nebraska surveyors earn?', a: 'BLS OEWS reports a May 2025 Nebraska median of $68,050 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Nebraska\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nebraska wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NE', checkedOn: '2026-10' }
      ]
    },
    NV: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Nevada application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$82,460', p25: '$76,000', p75: '$102,900', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NV' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Nevada surveyors earn?', a: 'BLS OEWS reports a May 2025 Nevada median of $82,460 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Nevada\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nevada wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NV', checkedOn: '2026-10' }
      ]
    },
    NH: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; New Hampshire application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$65,130', p25: '$60,170', p75: '$80,490', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NH' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Hampshire surveyors earn?', a: 'BLS OEWS reports a May 2025 New Hampshire median of $65,130 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus New Hampshire\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Hampshire wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NH', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; New Jersey application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$77,160', p25: '$65,070', p75: '$100,490', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NJ' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Jersey surveyors earn?', a: 'BLS OEWS reports a May 2025 New Jersey median of $77,160 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus New Jersey\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Jersey wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NJ', checkedOn: '2026-10' }
      ]
    },
    NM: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; New Mexico application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$74,230', p25: '$53,730', p75: '$93,480', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NM' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New Mexico surveyors earn?', a: 'BLS OEWS reports a May 2025 New Mexico median of $74,230 for Surveyors, just under the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus New Mexico\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Mexico wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NM', checkedOn: '2026-10' }
      ]
    },
    NY: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; New York application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$78,870', p25: '$63,600', p75: '$103,540', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do New York surveyors earn?', a: 'BLS OEWS reports a May 2025 New York median of $78,870 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus New York\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New York wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NY', checkedOn: '2026-10' }
      ]
    },
    NC: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; North Carolina application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$76,210', p25: '$57,730', p75: '$100,890', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do North Carolina surveyors earn?', a: 'BLS OEWS reports a May 2025 North Carolina median of $76,210 for Surveyors, just above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus North Carolina\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Carolina wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=NC', checkedOn: '2026-10' }
      ]
    },
    ND: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; North Dakota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$79,360', p25: '$74,700', p75: '$109,260', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ND' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do North Dakota surveyors earn?', a: 'BLS OEWS reports a May 2025 North Dakota median of $79,360 for Surveyors, above the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus North Dakota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Dakota wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=ND', checkedOn: '2026-10' }
      ]
    },
    OH: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; Ohio two-hour state surveying exam',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'Ohio state-specific surveying examination', questions: 'Ohio surveying laws and rules (does not duplicate the national exams)', time: '2 hours', pass: 'Board-set' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; the Ohio state exam\u2019s cost is included in the board\u2019s $75 application fee',
        sourceUrl: 'https://search-prod.lis.state.oh.us/cm_pub_api/api/unwrap/general_assembly_135/chamber/135th_ga/ready_for_publication/committee_docs/cmte_h_state_local_govt_1/submissions/cmte_h_state_local_govt_1_2023-09-19-0100_755/lsc.boardofengineersandsurveyors.pdf'
      },
      education: { hours: 'Surveying degree programme, with the FS typically taken in the final year or shortly after graduation', sourceUrl: 'https://search-prod.lis.state.oh.us/cm_pub_api/api/unwrap/general_assembly_135/chamber/135th_ga/ready_for_publication/committee_docs/cmte_h_state_local_govt_1/submissions/cmte_h_state_local_govt_1_2023-09-19-0100_755/lsc.boardofengineersandsurveyors.pdf' },
      renewal: { cycle: 'Two years', ce: '30 hours per biennium, including 2 hours on board rules or professional ethics', fee: '$50 initial, $40 renewal (unchanged since 2004 \u2014 among the lowest in the country)', sourceUrl: 'https://search-prod.lis.state.oh.us/cm_pub_api/api/unwrap/general_assembly_135/chamber/135th_ga/ready_for_publication/committee_docs/cmte_h_state_local_govt_1/submissions/cmte_h_state_local_govt_1_2023-09-19-0100_755/lsc.boardofengineersandsurveyors.pdf' },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$70,620', p25: '$57,280', p75: '$91,070', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OH' },
      recentChanges: [{ year: 2023, change: 'The Ohio Board\u2019s testimony to the General Assembly (September 2023) documented the three-exam structure, the $75 application covering the state exam, and renewal fees unchanged since 2004.', sourceUrl: 'https://search-prod.lis.state.oh.us/cm_pub_api/api/unwrap/general_assembly_135/chamber/135th_ga/ready_for_publication/committee_docs/cmte_h_state_local_govt_1/submissions/cmte_h_state_local_govt_1_2023-09-19-0100_755/lsc.boardofengineersandsurveyors.pdf' }],
      stateFaqs: [
        { q: 'What is Ohio\u2019s third exam?', a: 'A two-hour state-specific test on Ohio surveying laws and rules, developed by a board committee with a psychometrician \u2014 its cost is folded into the $75 application fee and it deliberately does not duplicate the NCEES content.' },
        { q: 'What CE does Ohio require?', a: '30 hours per two-year renewal, of which 2 hours must cover board rules or professional ethics.' },
        { q: 'How do Ohio fees compare?', a: 'Initial registration is $50 and renewal $40 \u2014 the renewal has not increased since 2004 and ranks among the lowest of any engineering and surveying board in the country.' },
        { q: 'What do Ohio surveyors earn?', a: 'BLS OEWS reports a May 2025 Ohio median of $70,620 for Surveyors, below the $75,440 national median.' }
      ],
      sources: [
        { label: 'Ohio Board of Engineers and Surveyors \u2014 legislative testimony', url: 'https://search-prod.lis.state.oh.us/cm_pub_api/api/unwrap/general_assembly_135/chamber/135th_ga/ready_for_publication/committee_docs/cmte_h_state_local_govt_1/submissions/cmte_h_state_local_govt_1_2023-09-19-0100_755/lsc.boardofengineersandsurveyors.pdf', checkedOn: '2026-10' },
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Ohio wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OH', checkedOn: '2026-10' }
      ]
    },
    OK: {
      agencyUrl: 'https://www.ok.gov/pels/',
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE; Oklahoma Law and Surveying examination',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'Oklahoma Law and Surveying examination', questions: 'Oklahoma laws, procedures and practices', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Oklahoma application fees separate',
        sourceUrl: 'https://www.ok.gov/pels/Regulations/Statutes/index.html'
      },
      education: { hours: 'Two routes: a four-year board-approved surveying programme plus four years of progressive office and field experience (at least two after the degree), or a two-year programme plus six years. An alternative two-year route with the board\u2019s core surveying curriculum also requires six years', sourceUrl: 'https://www.ok.gov/pels/Regulations/Statutes/index.html' },
      experience: 'Progressive combined office and field experience on land surveying projects, verified to the board\u2019s satisfaction; applicants also submit five references, three from licensed land surveyors with personal knowledge of the experience',
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$61,300', p25: '$48,850', p75: '$85,600', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OK' },
      recentChanges: [{ year: 2026, change: 'Oklahoma\u2019s published statutes confirm that even comity and endorsement applicants must pass the written Oklahoma Law and Surveying examination \u2014 no out-of-state route skips it.', sourceUrl: 'https://www.ok.gov/pels/Regulations/Statutes/index.html' }],
      stateFaqs: [
        { q: 'Can I skip the Oklahoma law exam if I am licensed elsewhere?', a: 'No \u2014 Oklahoma statutes require every applicant, including those licensed by comity, to pass the written Oklahoma Law and Surveying examination on state laws, procedures and practices.' },
        { q: 'What are Oklahoma\u2019s experience routes?', a: 'Four-year surveying graduates need four years of progressive experience (two after the degree); two-year graduates and the alternative-curriculum route need six years.' },
        { q: 'How many references does Oklahoma want?', a: 'Five \u2014 three of them licensed land surveyors with personal knowledge of your experience.' },
        { q: 'What do Oklahoma surveyors earn?', a: 'BLS OEWS reports a May 2025 Oklahoma median of $61,300 for Surveyors, below the $75,440 national median.' }
      ],
      sources: [
        { label: 'Oklahoma PELS \u2014 Statutes', url: 'https://www.ok.gov/pels/Regulations/Statutes/index.html', checkedOn: '2026-10' },
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oklahoma wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OK', checkedOn: '2026-10' }
      ]
    },
    OR: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Oregon application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$97,070', p25: '$78,850', p75: '$112,260', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OR' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'Is Oregon among the top-paying states?', a: 'Yes \u2014 BLS OEWS reports a May 2025 Oregon median of $97,070 for Surveyors, second only to California and about 29% above the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Oregon\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oregon wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=OR', checkedOn: '2026-10' }
      ]
    },
    PA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Pennsylvania application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$75,950', p25: '$60,630', p75: '$93,720', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=PA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Pennsylvania surveyors earn?', a: 'BLS OEWS reports a May 2025 Pennsylvania median of $75,950 for Surveyors, essentially at the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Pennsylvania\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Pennsylvania wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=PA', checkedOn: '2026-10' }
      ]
    },
    RI: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Rhode Island application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$62,670', p25: '$53,500', p75: '$79,340', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=RI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Rhode Island surveyors earn?', a: 'BLS OEWS reports a May 2025 Rhode Island median of $62,670 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Rhode Island\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Rhode Island wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=RI', checkedOn: '2026-10' }
      ]
    },
    SC: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; South Carolina application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$63,300', p25: '$50,610', p75: '$83,410', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=SC' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do South Carolina surveyors earn?', a: 'BLS OEWS reports a May 2025 South Carolina median of $63,300 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus South Carolina\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Carolina wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=SC', checkedOn: '2026-10' }
      ]
    },
    SD: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; South Dakota application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$77,190', p25: '$68,890', p75: '$100,580', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=SD' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do South Dakota surveyors earn?', a: 'BLS OEWS reports a May 2025 South Dakota median of $77,190 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus South Dakota\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Dakota wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=SD', checkedOn: '2026-10' }
      ]
    },
    TN: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Tennessee application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$76,340', p25: '$58,430', p75: '$92,610', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=TN' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Tennessee surveyors earn?', a: 'BLS OEWS reports a May 2025 Tennessee median of $76,340 for Surveyors, just above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Tennessee\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Tennessee wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=TN', checkedOn: '2026-10' }
      ]
    },
    TX: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Texas application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$61,150', p25: '$49,660', p75: '$81,120', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=TX' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Texas surveyors earn?', a: 'BLS OEWS reports a May 2025 Texas median of $61,150 for Surveyors \u2014 notably below the national median despite the state\u2019s size, reflecting its large rural share of practice.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Texas\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Texas wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=TX', checkedOn: '2026-10' }
      ]
    },
    UT: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Utah application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$73,230', p25: '$58,790', p75: '$94,560', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=UT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Utah surveyors earn?', a: 'BLS OEWS reports a May 2025 Utah median of $73,230 for Surveyors, just below the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Utah\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Utah wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=UT', checkedOn: '2026-10' }
      ]
    },
    VT: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Vermont application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$76,450', p25: '$59,670', p75: '$80,600', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=VT' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Vermont surveyors earn?', a: 'BLS OEWS reports a May 2025 Vermont median of $76,450 for Surveyors, just above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Vermont\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Vermont wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=VT', checkedOn: '2026-10' }
      ]
    },
    VA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Virginia application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$71,070', p25: '$59,860', p75: '$94,330', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=VA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Virginia surveyors earn?', a: 'BLS OEWS reports a May 2025 Virginia median of $71,070 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Virginia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Virginia wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=VA', checkedOn: '2026-10' }
      ]
    },
    WA: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Washington application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$85,610', p25: '$76,000', p75: '$119,060', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WA' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Washington surveyors earn?', a: 'BLS OEWS reports a May 2025 Washington median of $85,610 for Surveyors, well above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Washington\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Washington wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WA', checkedOn: '2026-10' }
      ]
    },
    WV: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; West Virginia application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$61,520', p25: '$49,340', p75: '$80,140', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WV' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do West Virginia surveyors earn?', a: 'BLS OEWS reports a May 2025 West Virginia median of $61,520 for Surveyors, below the national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus West Virginia\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 West Virginia wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WV', checkedOn: '2026-10' }
      ]
    },
    WI: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Wisconsin application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$79,650', p25: '$65,560', p75: '$96,690', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WI' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Wisconsin surveyors earn?', a: 'BLS OEWS reports a May 2025 Wisconsin median of $79,650 for Surveyors, above the $75,440 national median.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Wisconsin\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wisconsin wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WI', checkedOn: '2026-10' }
      ]
    },
    WY: {
      exam: {
        vendor: 'NCEES FS and PS at Pearson VUE',
        parts: [
          { name: 'NCEES FS (Fundamentals of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' },
          { name: 'NCEES PS (Principles and Practice of Surveying)', questions: 'Computer-based national exam', time: 'Quarterly windows', pass: 'Board-set acceptance' }
        ],
        fee: 'FS $225 + PS $375 payable to NCEES; Wyoming application fees separate',
        sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy'
      },
      wages: { soc: '17-1022', socName: 'Surveyors', median: '$81,250', p25: '$76,690', p75: '$102,000', national: '$75,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WY' },
      recentChanges: [{ year: 2024, change: 'NCEES fees effective 1 January 2024: FS $225, PS $375.', sourceUrl: 'https://castleporttestprep.com/ncees-exam-retake-policy' }],
      stateFaqs: [
        { q: 'What do Wyoming surveyors earn?', a: 'BLS OEWS reports a May 2025 Wyoming median of $81,250 for Surveyors, above the $75,440 national median \u2014 with an unusually tight 25th-to-median spread.' },
        { q: 'What do the national exams cost?', a: 'FS $225 and PS $375 to NCEES, plus Wyoming\u2019s board fees.' },
        { q: 'How are attempts limited?', a: 'One per quarterly window, three per 12 months, under the NCEES rule.' },
        { q: 'When does authorisation expire?', a: 'Twelve months after approval.' }
      ],
      sources: [
        { label: 'NCEES fee schedule (via CastlePort, May 2026 guide)', url: 'https://castleporttestprep.com/ncees-exam-retake-policy', checkedOn: '2026-10' },
        { label: 'NCEES Examinee Guide', url: 'https://ncees.org/wp-content/uploads/ExamineeGuide_June-2020.pdf', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wyoming wages, SOC 17-1022', url: 'https://www.onetonline.org/link/localwages/17-1022.00?st=WY', checkedOn: '2026-10' }
      ]
    }
  }
};
