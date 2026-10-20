// v2 per-state research increment — funeral-director
// Compiled 2026-10-20. Sources: ICFSEB NBE FAQ (theconferenceonline.org/faq — Arts 150
// scored items + Sciences 150 scored items, $285 per section, scaled pass 75 per section,
// Pearson VUE delivery, 30-day retake wait, scores never expire; 2025 first-time pass
// rates Arts 78% / Sciences 71% from The Conference's published statistics), per-state
// qualification tables compiled by FINE Mortuary College (fmc.edu/resources, cross-checked
// against primary sources: Kentucky KRS 316.030, Tennessee Board getting-started page,
// Oklahoma HB 1365 (2025), South Carolina Code 40-19-110), and BLS OEWS May 2025 state
// wages via O*NET OnLine (SOC 39-4031, Morticians, Undertakers, and Funeral Arrangers).
// BLS publishes no OEWS wage estimate for this occupation in AK, DC or VA — those three
// carry no wages field by design.

export default {
  key: 'funeral-director',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Alabama state law-and-rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (embalmer applicants)' },
          { name: 'Alabama laws and rules (LRR) exam', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section ($570 for both); Alabama application $230 + $38.25 background check + $50 LRR + $100 embalmer exam fee',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'ABFSE-accredited funeral service programme, a certificate course at an approved school, or a bachelor\u2019s degree in any field', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'No apprenticeship route listed; two affidavits from licensees required',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$44,930', p25: '$33,940', p75: '$55,520', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AL' },
      recentChanges: [{ year: 2026, change: 'ICFSEB charges $285 per NBE section; Arts and Sciences are scored independently and passing scores never expire.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Alabama license funeral directors and embalmers separately?', a: 'Yes. Funeral director applicants sit the NBE Arts section plus the Alabama laws-and-rules exam; embalmer applicants need both NBE sections. Alabama waives an apprenticeship requirement in favour of affidavits from two licensees.' },
        { q: 'How much does the Alabama route cost?', a: 'The NBE runs $285 per section ($570 for both). Alabama adds a $230 application, a $38.25 background check, a $50 laws-and-rules exam and a $100 embalmer examination fee.' },
        { q: 'What education qualifies in Alabama?', a: 'Graduation from an ABFSE-accredited funeral service programme, an approved certificate course, or a bachelor\u2019s degree in any field.' },
        { q: 'What do Alabama funeral directors earn?', a: 'BLS OEWS reports a May 2025 Alabama median of $44,930 for Morticians, Undertakers, and Funeral Arrangers, below the $55,010 national median.' }
      ],
      sources: [
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      exam: {
        vendor: 'State examinations plus Alaska law exam',
        parts: [
          { name: 'Alaska funeral directing/embalming examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'Alaska state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$150 application + $185 licence + $100 state law exam',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'At least one year (30 semester hours) of college credit', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship of at least 30 hours per week, with at least 24 case reports',
      wages: { note: 'BLS does not publish an OEWS wage estimate for Morticians, Undertakers, and Funeral Arrangers in Alaska \u2014 the sample is below publication standards. The national median is $55,010 (May 2025).', soc: '39-4031', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AK' },
      recentChanges: [{ year: 2026, change: 'NBE sections now cost $285 each; Alaska relies on its own state examinations rather than the NBE.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Alaska use the national NBE exam?', a: 'No \u2014 Alaska runs its own funeral directing/embalming examination plus a state law exam, an unusual choice among the states.' },
        { q: 'What are Alaska\u2019s apprenticeship rules?', a: 'One year of supervised work at 30 or more hours per week, documented with at least 24 case reports.' },
        { q: 'What education does Alaska require?', a: 'At least 30 semester hours of college credit \u2014 a lighter education floor than most states.' },
        { q: 'What do Alaska funeral professionals earn?', a: 'BLS withholds an OEWS wage estimate for this occupation in Alaska because the employment sample falls below publication standards; nationally the May 2025 median is $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Arizona laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (funeral director applicants)' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (embalmer applicants)' },
          { name: 'Arizona laws and rules (LRR) exam', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Arizona application $85 + $22 fingerprint check + $80 exam registration',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus a transcript from an approved funeral service programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'No apprenticeship; 25 funeral case reports (funeral director) or 25 embalming case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$41,870', p25: '$37,470', p75: '$46,200', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AZ' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Arizona applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Which NBE section does an Arizona funeral director take?', a: 'Arts only. Arizona splits the credential: funeral director applicants sit NBE Arts, embalmer applicants sit NBE Sciences, and everyone takes the Arizona laws-and-rules exam.' },
        { q: 'Does Arizona require an apprenticeship?', a: 'No formal apprenticeship \u2014 instead you document 25 funeral case reports (or 25 embalmings for the embalmer licence).' },
        { q: 'What does Arizona licensing cost?', a: 'An $85 application, a $22 fingerprint background check and $80 exam registration, plus $285 per NBE section.' },
        { q: 'What do Arizona funeral directors earn?', a: 'BLS OEWS reports a May 2025 Arizona median of $41,870 for Morticians, Undertakers, and Funeral Arrangers \u2014 below the $55,010 national median.' }
      ],
      sources: [
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    AR: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Arkansas state exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Arkansas state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set ($100)' }
        ],
        fee: '$285 per NBE section; Arkansas state exam $100 + $10 application + $22 background check',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or equivalent plus six classroom hours covering practice, ethics and funeral law', sourceUrl: 'https://fmc.edu/resources/' },
      experience: '18-month apprenticeship (six months creditable with mortuary school graduation); embalmer apprentices serve 12 months, funeral director apprentices 18 months; 50 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$36,120', p25: '$33,450', p75: '$49,200', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AR' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Arkansas applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the Arkansas apprenticeship?', a: 'Eighteen months for funeral directors (twelve for embalmers), with six months creditable if you graduate from mortuary school. You log 50 case reports along the way.' },
        { q: 'What education does Arkansas require?', a: 'A high school diploma or equivalent plus six classroom hours in practice, ethics and funeral law \u2014 one of the lightest education requirements in the country.' },
        { q: 'Does Arkansas use the NBE?', a: 'Yes \u2014 both sections, at $285 each, plus a $100 Arkansas state examination.' },
        { q: 'What do Arkansas funeral directors earn?', a: 'BLS OEWS reports a May 2025 Arkansas median of $36,120 for Morticians, Undertakers, and Funeral Arrangers, below the national median of $55,010.' }
      ],
      sources: [
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CA: {
      exam: {
        vendor: 'California Cemetery and Funeral Bureau laws-and-rules examination',
        parts: [
          { name: 'California laws and rules (LRR) examination', questions: 'Bureau-set', time: 'Bureau-set', pass: 'Bureau-set' }
        ],
        fee: 'Funeral director: $190 LRR + $380 licence; embalmer: $280 LRR',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'AA/AS degree or equivalent; embalmer applicants must graduate from an ABFSE-accredited funeral service programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'No apprenticeship requirement listed for the funeral director licence',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$50,750', p25: '$44,320', p75: '$61,340', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CA' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; California itself tests through its own laws-and-rules examination rather than the NBE.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      localNuance: 'California separates funeral director and embalmer licences with different exam and fee schedules, and registration runs through the Cemetery and Funeral Bureau under the Department of Consumer Affairs.',
      stateFaqs: [
        { q: 'Does California use the national NBE exam?', a: 'No. California tests through its own laws-and-rules examination run by the Cemetery and Funeral Bureau \u2014 one of the states that sits outside the NBE system.' },
        { q: 'What education does California require?', a: 'An AA/AS degree or equivalent for the funeral director licence; embalmer applicants must complete an ABFSE-accredited programme.' },
        { q: 'How much does a California licence cost?', a: 'Funeral directors pay a $190 laws-and-rules exam fee plus a $380 licence fee; embalmers pay $280 for the exam.' },
        { q: 'What do California funeral directors earn?', a: 'BLS OEWS reports a May 2025 California median of $50,750 for Morticians, Undertakers, and Funeral Arrangers \u2014 slightly below the $55,010 national median despite the state\u2019s high cost of living.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      exam: {
        vendor: 'State examination structure being phased in under SB24-173',
        parts: [
          { name: 'Colorado licensure examination (per the new funeral service rules)', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$275 licence application',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school diploma plus an associate degree including funeral service education, or graduation from an ABFSE-accredited programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One to three years of internship depending on the route; the Mortuary Science Practice internship runs one year',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,850', p25: '$47,080', p75: '$80,670', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CO' },
      recentChanges: [{ year: 2024, change: 'Colorado SB24-173 (signed 24 May 2024) created funeral-professional licensure after Colorado was the last state without it; applications opened May 2025 and licensure becomes mandatory on 1 January 2027.', sourceUrl: 'https://fmc.edu/resources/' }],
      stateFaqs: [
        { q: 'Is funeral licensure new in Colorado?', a: 'Yes \u2014 Colorado was the last state without individual funeral-professional licensure. SB24-173 created it, applications opened in May 2025, and licensure becomes mandatory on 1 January 2027.' },
        { q: 'What does Colorado require?', a: 'A high school diploma plus an associate degree containing funeral service education (or an ABFSE-accredited programme), one to three years of internship depending on the route, and a $275 application.' },
        { q: 'What do Colorado funeral directors earn?', a: 'BLS OEWS reports a May 2025 Colorado median of $60,850 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' },
        { q: 'Can I keep practising before the deadline?', a: 'The mandate bites on 1 January 2027 \u2014 until then the transition rules apply, and the state\u2019s new board publishes the current pathway.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Connecticut state law exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (embalmer applicants)' },
          { name: 'Connecticut state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Connecticut licence fee $210',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Board-approved education programme for funeral directors; an approved mortuary science programme for embalmers, with the Commissioner of Public Health\u2019s consent', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One year of full-time practical training under a licensed embalmer or funeral director, documented with 50 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$59,710', p25: '$40,390', p75: '$80,960', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CT' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Connecticut applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What practical experience does Connecticut require?', a: 'One year of full-time employment under a licensed embalmer or funeral director, documented with 50 case reports.' },
        { q: 'Does Connecticut require the NBE?', a: 'Yes \u2014 plus its own state law examination. Both sections are needed for the embalmer licence; $285 per section.' },
        { q: 'What does a Connecticut licence cost?', a: 'The licence fee is $210, on top of the NBE fees.' },
        { q: 'What do Connecticut funeral directors earn?', a: 'BLS OEWS reports a May 2025 Connecticut median of $59,710 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      exam: {
        vendor: 'ICFSEB standardized written exam; Delaware funeral service laws exam',
        parts: [
          { name: 'Conference (ICFSEB) written examination', questions: 'Board-recognized sections', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Delaware funeral service laws examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$211 licence + $140 laws-and-rules registration',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school graduation plus an associate degree (60 credit hours) in mortuary science from an ABFSE-accredited school', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship inside Delaware under a licensed funeral director',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$81,530', p25: '$76,520', p75: '$93,460', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=DE' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Delaware applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education does Delaware require?', a: 'A 60-credit associate degree in mortuary science from an ABFSE-accredited school, on top of high school graduation.' },
        { q: 'How long is the Delaware internship?', a: 'One year, served inside Delaware under a licensed funeral director \u2014 out-of-state internships do not satisfy it.' },
        { q: 'What does Delaware licensing cost?', a: 'A $211 licence fee plus $140 for the laws-and-rules registration, alongside NBE section fees.' },
        { q: 'What do Delaware funeral directors earn?', a: 'BLS OEWS reports a May 2025 Delaware median of $81,530 for Morticians, Undertakers, and Funeral Arrangers \u2014 the highest state figure in the country.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      exam: {
        vendor: 'District examination plus NBE',
        parts: [
          { name: 'District of Columbia state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'NBE Arts / Sciences', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$195 licence-and-rules registration + $65 application',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school diploma or GED plus an accredited mortuary programme of at least 12 months, or a two-year mortuary science associate degree', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Two years of apprenticeship after a 12-month programme; one year after a two-year associate degree \u2014 documented with 25 embalming and 25 funeral case reports',
      wages: { note: 'BLS does not publish an OEWS wage estimate for Morticians, Undertakers, and Funeral Arrangers in the District of Columbia \u2014 the sample is below publication standards. The national median is $55,010 (May 2025).', soc: '39-4031', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=DC' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to DC applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the DC apprenticeship?', a: 'Two years if you graduated from a 12-month mortuary programme, one year if you hold a two-year mortuary science associate degree.' },
        { q: 'What case documentation does DC expect?', a: '25 embalming case reports and 25 funeral case reports, filed with the Board of Funeral Directors.' },
        { q: 'What does DC licensing cost?', a: 'A $65 application fee and $195 for the licence-and-rules registration, plus NBE section fees at $285 each.' },
        { q: 'What do DC funeral directors earn?', a: 'BLS withholds an OEWS estimate for this occupation in the District \u2014 employment is too small to publish; nationally the May 2025 median is $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 DC wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      exam: {
        vendor: 'Florida state board exam; NBE sections by licence type',
        parts: [
          { name: 'Florida state board examination (laws and rules)', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (funeral director applicants)' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75 (embalmer applicants)' }
        ],
        fee: '$50 application + $242 state exam + $375 licence',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'Associate degree or higher in funeral services, or a degree in any other subject plus an approved mortuary science or funeral service arts course \u2014 from one of four state-approved programmes; plus a two-hour communicable disease course', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship at a licensed training agency; fingerprint cards and background check required',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$48,510', p25: '$36,220', p75: '$63,860', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=FL' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Florida applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Which exams does Florida use?', a: 'The Florida state board exam ($242) plus the NBE section matching your licence \u2014 Arts for funeral director, Sciences for embalmer.' },
        { q: 'How long is the Florida internship?', a: 'One year at a licensed training agency, with fingerprinting and a background check.' },
        { q: 'What does Florida licensing cost?', a: 'A $50 application, a $242 state exam and a $375 licence fee, plus $285 per NBE section.' },
        { q: 'What do Florida funeral directors earn?', a: 'BLS OEWS reports a May 2025 Florida median of $48,510 for Morticians, Undertakers, and Funeral Arrangers, just below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      exam: {
        vendor: 'NBE plus Georgia laws-and-rules exam delivered through PSI',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Georgia laws and rules (LRR) examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Georgia application $50 (+$10 processing) + $60 LRR',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or HSE plus graduation from an accredited college funeral service programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: '3,120 apprenticeship hours served over at least 18 months, with 50 funeral service and 50 embalming case reports; citizenship affidavit and background check required',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$49,990', p25: '$45,920', p75: '$61,240', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=GA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Georgia applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How many apprenticeship hours does Georgia require?', a: '3,120 hours served over no fewer than 18 months \u2014 among the largest hour requirements anywhere \u2014 with 50 funeral service and 50 embalming case reports.' },
        { q: 'Which exams does Georgia use?', a: 'Both NBE sections plus a Georgia laws-and-rules exam delivered through PSI.' },
        { q: 'What does Georgia licensing cost?', a: 'A $50 application (plus a $10 processing charge) and a $60 laws-and-rules fee, alongside NBE fees of $285 per section.' },
        { q: 'What do Georgia funeral directors earn?', a: 'BLS OEWS reports a May 2025 Georgia median of $49,990 for Morticians, Undertakers, and Funeral Arrangers, slightly below the national median of $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE',
        parts: [
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$285 per NBE section; Hawaii application $25',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school graduation or equivalent; a mortuary programme is not required but shortens the experience route', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Five years of practical experience under a registered embalmer or undertaker in Hawaii, or two years plus a high school education',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$46,310', p25: '$39,100', p75: '$47,330', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=HI' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Hawaii applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Is mortuary school required in Hawaii?', a: 'No \u2014 Hawaii is the standout experience-based state: five years of supervised practical experience qualifies you, cut to two years with a high school education route. Mortuary school is optional and shortens the clock.' },
        { q: 'Which NBE section does Hawaii use?', a: 'Sciences only \u2014 at $285 \u2014 alongside the experience requirements.' },
        { q: 'What does Hawaii licensing cost?', a: 'A $25 application fee plus the NBE section fee \u2014 among the cheapest state routes in the country.' },
        { q: 'What do Hawaii funeral directors earn?', a: 'BLS OEWS reports a May 2025 Hawaii median of $46,310 for Morticians, Undertakers, and Funeral Arrangers, below the national median of $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      exam: {
        vendor: 'Idaho State Board exam (SBE) plus both NBE sections',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Idaho State Board examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Idaho exam application $100 + $85 original licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: '60 semester hours (45 in the humanities, business or sciences) plus at least 15 semester hours of approved funeral service coursework', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Twelve months as a registered resident trainee, documented with 25 arrangements and 25 funeral case reports',
      eligibility: { minAge: 21 },
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,250', p25: '$50,690', p75: '$79,450', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ID' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Idaho applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does Idaho\u2019s education rule work?', a: 'Sixty semester hours overall \u2014 at least 45 in the humanities, business or sciences \u2014 plus 15 or more semester hours of approved funeral service coursework.' },
        { q: 'What does the Idaho residency require?', a: 'Twelve months as a registered resident trainee with 25 arrangement and 25 funeral case reports, and Idaho sets its minimum age at 21.' },
        { q: 'Which exams does Idaho stack?', a: 'All three: both NBE sections and the Idaho State Board examination \u2014 $100 to apply for exams plus an $85 original licence.' },
        { q: 'What do Idaho funeral directors earn?', a: 'BLS OEWS reports a May 2025 Idaho median of $60,250 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$285 per NBE section; Illinois application $100',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Accredited mortuary science associate or bachelor\u2019s degree including 30 semester hours (20 in liberal arts and sciences)', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Illinois funeral director and embalmer internship under board rules; immunization records required',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$69,600', p25: '$48,340', p75: '$100,410', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IL' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Illinois applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education does Illinois require?', a: 'An accredited mortuary science associate or bachelor\u2019s degree carrying 30 semester hours, 20 of them in the liberal arts and sciences.' },
        { q: 'Does Illinois use the NBE?', a: 'Yes \u2014 both sections at $285 each, with a $100 application through IDFPR.' },
        { q: 'What else does Illinois ask for?', a: 'An internship under board rules and immunization records \u2014 a detail few states require.' },
        { q: 'What do Illinois funeral directors earn?', a: 'BLS OEWS reports a May 2025 Illinois median of $69,600 for Morticians, Undertakers, and Funeral Arrangers \u2014 one of the strongest statewide medians, with the top quarter above $100,410.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$285 per NBE section; Indiana $100 application + $50 licence + $50 LRR',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: '30 semester hours of college coursework, or a 21-month approved funeral service programme, or a four-quarter programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship documented with 24 funeral and 24 embalming case reports; quarterly reports (four per year) for funeral directors',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,890', p25: '$44,640', p75: '$77,480', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IN' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Indiana applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the Indiana internship?', a: 'One year, documented with 24 funeral and 24 embalming case reports, with quarterly reports filed for funeral director applicants.' },
        { q: 'What education qualifies in Indiana?', a: 'Thirty semester hours of college coursework, a 21-month approved funeral service programme, or a four-quarter programme \u2014 a flexible set of routes.' },
        { q: 'What does Indiana licensing cost?', a: 'A $100 application, a $50 licence fee and a $50 laws-and-rules registration, plus NBE fees of $285 per section.' },
        { q: 'What do Indiana funeral directors earn?', a: 'BLS OEWS reports a May 2025 Indiana median of $60,890 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE \u2014 Arts, Science and Law sections',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Iowa laws section', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Iowa application $120',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: '60 semester hours with a GPA of at least 2.0, plus ABFSE-accredited funeral coursework and at least one hour of Iowa funeral law instruction', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Internship documented with at least 25 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$63,700', p25: '$54,040', p75: '$78,330', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Iowa applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What is distinctive about Iowa\u2019s education rule?', a: 'Sixty semester hours at a 2.0 GPA plus ABFSE coursework and at least one hour of Iowa funeral law instruction baked into the education requirement itself.' },
        { q: 'Which exams does Iowa require?', a: 'The NBE Arts, Sciences and Law sections \u2014 Iowa is one of the states that leans on the Conference\u2019s law coverage rather than its own exam.' },
        { q: 'What does Iowa licensing cost?', a: 'A $120 application plus $285 per NBE section.' },
        { q: 'What do Iowa funeral directors earn?', a: 'BLS OEWS reports a May 2025 Iowa median of $63,700 for Morticians, Undertakers, and Funeral Arrangers \u2014 well above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      exam: {
        vendor: 'Kansas state examination; ICFSEB written exam for embalmers',
        parts: [
          { name: 'Kansas state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'ICFSEB written examination (embalmer applicants)', questions: 'Board-recognized sections', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$150 assistant FD licence + $200 state exam + $288 licence',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'Two years of general college (at least 60 semester hours)', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship concluded with a board interview, documented with 25 funeral case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$58,580', p25: '$43,510', p75: '$72,100', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=KS' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Kansas embalmer applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Kansas license funeral directors and embalmers differently?', a: 'Yes \u2014 funeral directors sit the Kansas state exam, while embalmer applicants also take the ICFSEB written examination.' },
        { q: 'How does the Kansas apprenticeship end?', a: 'With a board interview after one year and 25 funeral case reports \u2014 Kansas is one of the few states that interviews candidates.' },
        { q: 'What does Kansas licensing cost?', a: 'A $150 assistant funeral director licence, a $200 state exam and a $288 full licence.' },
        { q: 'What do Kansas funeral directors earn?', a: 'BLS OEWS reports a May 2025 Kansas median of $58,580 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=KS', checkedOn: '2026-10' }
      ]
    },
    KY: {
      agencyUrl: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=50922',
      exam: {
        vendor: 'Board examination; NBE Arts and Sciences',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Kentucky board examination / laws and rules', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Kentucky LRR $100 + licence $100',
        sourceUrl: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=50922'
      },
      education: { hours: 'High school diploma or GED; an ABFSE-accredited associate degree substitutes for two years of the funeral director apprenticeship, and 30 semester credit hours substitute for one year (maximum two years substituted)', sourceUrl: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=50922' },
      experience: 'Funeral directors: three consecutive years of apprenticeship in a Kentucky funeral establishment with at least 25 funerals assisted. Embalmers: one year plus 25 dead human bodies embalmed under direct supervision. Apprentices register with the board, work full-time on salary, file semiannual sworn reports, and preceptors supervise no more than five apprentices at once',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$43,320', p25: '$29,730', p75: '$50,530', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=KY' },
      recentChanges: [{ year: 2021, change: 'The current KRS 316.030 apprenticeship framework (education substitutions, semiannual reports, five-apprentice preceptor cap) took effect 29 June 2021.', sourceUrl: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=50922' }],
      stateFaqs: [
        { q: 'How long is the Kentucky funeral director apprenticeship?', a: 'Three consecutive years by default. An ABFSE-accredited associate degree substitutes for two years and 30 semester credit hours for one \u2014 but no more than two years total can be substituted.' },
        { q: 'What case counts does Kentucky require?', a: 'Twenty-five funerals assisted for funeral directors; 25 dead human bodies embalmed under direct supervision for embalmers.' },
        { q: 'How are Kentucky apprentices supervised?', a: 'Apprentices appear before the board at the start, work full-time on a regular salary, file semiannual sworn statements of hours and cases, and each preceptor supervises at most five apprentices.' },
        { q: 'What do Kentucky funeral directors earn?', a: 'BLS OEWS reports a May 2025 Kentucky median of $43,320 for Morticians, Undertakers, and Funeral Arrangers \u2014 among the lowest state medians against $55,010 nationally.' }
      ],
      sources: [
        { label: 'Kentucky Revised Statutes 316.030', url: 'https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=50922', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kentucky wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=KY', checkedOn: '2026-10' }
      ]
    },
    LA: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Louisiana laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Louisiana laws and rules (LRR) examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Louisiana funeral director application $250',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or equivalent plus at least 30 semester hours of college credit', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Apprenticeship of 9 to 48 months including at least 1,560 contact hours, documented with 30 funeral case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$46,730', p25: '$30,990', p75: '$61,360', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=LA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Louisiana applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How is the Louisiana apprenticeship measured?', a: 'In both time and contact hours: 9 to 48 months overall with at least 1,560 contact hours, and 30 funeral case reports.' },
        { q: 'What education does Louisiana require?', a: 'A high school diploma plus at least 30 semester hours of college credit.' },
        { q: 'What does Louisiana licensing cost?', a: 'A $250 funeral director application plus NBE fees of $285 per section.' },
        { q: 'What do Louisiana funeral directors earn?', a: 'BLS OEWS reports a May 2025 Louisiana median of $46,730 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Louisiana wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=LA', checkedOn: '2026-10' }
      ]
    },
    ME: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Maine state law exam and practice exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Maine state law (LRR) and practice examinations', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Maine $75 practice exam + $230 licence + $140 LRR + $21 criminal record check',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Graduation from an ABFSE-accredited funeral service programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'A completed apprenticeship or internship under board rules',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,880', p25: '$43,880', p75: '$88,610', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ME' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Maine applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Maine run its own practical exam?', a: 'Yes \u2014 alongside the NBE and the state law exam, Maine charges $75 for a practice examination, a step few states keep.' },
        { q: 'What education does Maine require?', a: 'Graduation from an ABFSE-accredited funeral service programme.' },
        { q: 'What does Maine licensing cost in total?', a: 'The fee stack runs $75 practice exam, $230 licence, $140 laws-and-rules registration and a $21 criminal record check, plus NBE fees.' },
        { q: 'What do Maine funeral directors earn?', a: 'BLS OEWS reports a May 2025 Maine median of $60,880 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maine wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ME', checkedOn: '2026-10' }
      ]
    },
    MD: {
      exam: {
        vendor: 'NBE; Maryland legal and practical examinations',
        parts: [
          { name: 'NBE Arts / Sciences', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Maryland legal examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'Maryland practical examination', questions: 'Board-assessed', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Maryland licence $600 + $265 legal and practical exams',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'Transcript from an accredited mortuary science degree programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: '1,000-hour apprenticeship documented with a 20-funeral matrix, 20 embalming assists and four arrangements in each of four categories (pre-need, at-need, cremation, cemetery services)',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$58,060', p25: '$39,490', p75: '$80,010', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MD' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Maryland applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does Maryland document the apprenticeship?', a: '1,000 hours logged against a 20-funeral matrix, 20 embalming assists and four arrangements in each of four categories: pre-need, at-need, cremation and cemetery services.' },
        { q: 'Does Maryland run practical testing?', a: 'Yes \u2014 a practical examination alongside the legal exam, together $265, on top of a $600 licence fee.' },
        { q: 'What education does Maryland require?', a: 'A degree transcript from an accredited mortuary science programme.' },
        { q: 'What do Maryland funeral directors earn?', a: 'BLS OEWS reports a May 2025 Maryland median of $58,060 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maryland wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MD', checkedOn: '2026-10' }
      ]
    },
    MA: {
      exam: {
        vendor: 'Massachusetts laws and rules examination',
        parts: [
          { name: 'Massachusetts LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$65 licence + $50 LRR',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school diploma or equivalent plus an ABFSE-accredited mortuary science associate degree', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Two-year apprenticeship documented with 50 embalming case reports and 25 funeral or pre-need reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$62,120', p25: '$47,530', p75: '$82,150', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MA' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; Massachusetts tests through its own LRR examination.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the Massachusetts apprenticeship?', a: 'Two years, documented with 50 embalming case reports and 25 funeral or pre-need reports.' },
        { q: 'Which exam does Massachusetts use?', a: 'Its own laws-and-rules examination rather than the NBE \u2014 $50, with a $65 licence fee.' },
        { q: 'What education does Massachusetts require?', a: 'An ABFSE-accredited mortuary science associate degree on top of high school.' },
        { q: 'What do Massachusetts funeral directors earn?', a: 'BLS OEWS reports a May 2025 Massachusetts median of $62,120 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Massachusetts wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MA', checkedOn: '2026-10' }
      ]
    },
    MI: {
      exam: {
        vendor: 'National Arts and Science examinations (ICFSEB); Michigan legal exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Michigan legal examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Michigan application $20 + licence $305',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'At least 90 semester hours of non-remedial college credit plus graduation from an approved mortuary science programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One year as a registered resident trainee documented with 25 embalming or assistance case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,450', p25: '$45,280', p75: '$75,360', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MI' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Michigan applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What makes Michigan\u2019s education floor unusual?', a: 'Ninety semester hours of non-remedial college credit plus an approved mortuary science programme \u2014 one of the higher credit floors in the country.' },
        { q: 'How long is the Michigan residency?', a: 'One year as a registered resident trainee with 25 embalming or assistance case reports.' },
        { q: 'What does Michigan licensing cost?', a: 'A $20 application and a $305 licence, plus NBE fees of $285 per section.' },
        { q: 'What do Michigan funeral directors earn?', a: 'BLS OEWS reports a May 2025 Michigan median of $60,450 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Michigan wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MI', checkedOn: '2026-10' }
      ]
    },
    MN: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Minnesota state exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Minnesota state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Minnesota $125 LRR + $200 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Bachelor of Science in funeral science, or a bachelor\u2019s degree plus ABFSE funeral coursework, or an equivalent plus ABFSE coursework', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Completed internship documented with 25 embalming, 25 arrangement and 25 funeral service case reports; minimum age 21',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$49,760', p25: '$41,660', p75: '$61,810', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MN' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Minnesota applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Minnesota expect a bachelor\u2019s degree?', a: 'In practice yes \u2014 a BS in funeral science, or any bachelor\u2019s plus ABFSE funeral coursework, or an approved equivalent with that coursework. Minnesota also sets its minimum age at 21.' },
        { q: 'What case reports does Minnesota require?', a: 'Twenty-five each of embalmings, arrangements and funeral services.' },
        { q: 'What does Minnesota licensing cost?', a: 'A $125 laws-and-rules registration plus a $200 licence, alongside NBE fees of $285 per section.' },
        { q: 'What do Minnesota funeral directors earn?', a: 'BLS OEWS reports a May 2025 Minnesota median of $49,760 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Minnesota wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MN', checkedOn: '2026-10' }
      ]
    },
    MS: {
      exam: {
        vendor: 'Conference (ICFSEB) examinations and/or board-approved examinations',
        parts: [
          { name: 'Conference (ICFSEB) examination sections', questions: 'Board-recognized', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$100 funeral director licence / $125 funeral director + embalmer',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school diploma or GED', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'At least 12 months as a registered resident trainee, documented with 25 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$48,350', p25: '$42,960', p75: '$55,950', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MS' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Mississippi applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What does Mississippi require beyond high school?', a: 'Nothing in the classroom \u2014 a high school diploma or GED suffices, paired with 12 months as a registered resident trainee and 25 case reports.' },
        { q: 'How much does a Mississippi licence cost?', a: '$100 for a funeral director licence, $125 for the combined funeral director and embalmer credential.' },
        { q: 'Which exams does Mississippi accept?', a: 'The Conference (ICFSEB) examinations and/or board-approved examinations.' },
        { q: 'What do Mississippi funeral directors earn?', a: 'BLS OEWS reports a May 2025 Mississippi median of $48,350 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Mississippi wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MS', checkedOn: '2026-10' }
      ]
    },
    MO: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Missouri state exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Missouri state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section (state schedule lists $285 for NBE-Arts); Missouri licence $100 + $140 LRR',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus graduation from an accredited funeral service programme including a funeral directing course', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Twelve-month apprenticeship totalling at least 780 hours, documented with 10 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$42,940', p25: '$33,510', p75: '$59,670', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MO' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Missouri applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How is the Missouri apprenticeship defined?', a: 'Twelve months totalling at least 780 hours, with 10 case reports \u2014 one of the few states that specifies both duration and hours.' },
        { q: 'What education does Missouri require?', a: 'High school plus an accredited funeral service programme that includes a funeral directing course.' },
        { q: 'What does Missouri licensing cost?', a: 'A $100 licence and $140 laws-and-rules registration, plus the NBE at $285 per section.' },
        { q: 'What do Missouri funeral directors earn?', a: 'BLS OEWS reports a May 2025 Missouri median of $42,940 for Morticians, Undertakers, and Funeral Arrangers \u2014 among the lowest in the country.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Missouri wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MO', checkedOn: '2026-10' }
      ]
    },
    MT: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; open-book Montana legal exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Montana open-book legal examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Montana application $544',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'ABFSE-accredited funeral service associate degree (at least 60 semester credits or 90 quarter hours), or equivalent military experience', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship documented with 25 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$43,680', p25: '$36,540', p75: '$65,590', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MT' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Montana applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Montana accept military experience?', a: 'Yes \u2014 equivalent military experience can substitute for the ABFSE associate degree (60 semester credits or 90 quarter hours).' },
        { q: 'Is Montana\u2019s legal exam open book?', a: 'Yes \u2014 Montana runs an open-book state legal examination alongside the NBE.' },
        { q: 'What does Montana licensing cost?', a: 'A $544 application \u2014 one of the heaviest in the country \u2014 plus NBE fees of $285 per section.' },
        { q: 'What do Montana funeral directors earn?', a: 'BLS OEWS reports a May 2025 Montana median of $43,680 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Montana wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=MT', checkedOn: '2026-10' }
      ]
    },
    NE: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Nebraska legal and vital-statistics exams',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Nebraska legal examination and vital statistics forms examination', questions: 'Board-set', time: 'Board-set', pass: 'At least 75% on the forms exam' }
        ],
        fee: '$285 per NBE section; Nebraska licence $90',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus 60 semester hours of college credit (excluding mortuary school) and a complete course at an approved mortuary school', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Twelve months of continuous apprenticeship or six months of segmented training, documented with 25 embalming and 25 funeral case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$64,310', p25: '$46,140', p75: '$80,900', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NE' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Nebraska applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What is Nebraska\u2019s unusual exam addition?', a: 'A vital statistics forms examination requiring at least 75% \u2014 testing death certificate and permit paperwork alongside the NBE and the legal exam.' },
        { q: 'How is the Nebraska apprenticeship structured?', a: 'Twelve continuous months, or six months of segmented training, with 25 embalming and 25 funeral case reports.' },
        { q: 'What does the Nebraska education rule require?', a: 'Sixty semester hours of college credit outside mortuary school plus a complete mortuary school course \u2014 the state wants both broad education and professional training.' },
        { q: 'What do Nebraska funeral directors earn?', a: 'BLS OEWS reports a May 2025 Nebraska median of $64,310 for Morticians, Undertakers, and Funeral Arrangers \u2014 well above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nebraska wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NE', checkedOn: '2026-10' }
      ]
    },
    NV: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Nevada state exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Nevada state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Nevada $190 LRR + $375 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Two academic years (60 semester or 90 quarter hours) plus graduation from an ABFSE-accredited funeral service or embalming school approved by the board', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship; embalmer applicants document at least 50 embalmings',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$43,940', p25: '$36,330', p75: '$48,470', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NV' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Nevada applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education does Nevada require?', a: 'Two academic years (60 semester or 90 quarter hours) plus graduation from an ABFSE-accredited school that the board has approved.' },
        { q: 'What case count applies to Nevada embalmer applicants?', a: 'At least 50 embalmings documented during the one-year apprenticeship.' },
        { q: 'What does Nevada licensing cost?', a: 'A $190 laws-and-rules registration and a $375 licence, plus NBE fees of $285 per section.' },
        { q: 'What do Nevada funeral directors earn?', a: 'BLS OEWS reports a May 2025 Nevada median of $43,940 for Morticians, Undertakers, and Funeral Arrangers \u2014 among the lower state medians.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nevada wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NV', checkedOn: '2026-10' }
      ]
    },
    NH: {
      exam: {
        vendor: 'New Hampshire board examinations including a practical component',
        parts: [
          { name: 'New Hampshire board examination with practical component', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$170 application (embalmer) / $330 (funeral director + embalmer) + $150 practical exam',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'At least one year (30 semester credits) of higher education plus a complete course at an embalming school meeting board standards', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship under a New Hampshire-licensed embalmer, documented with 50 embalming and 25 funeral director case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$57,630', p25: '$51,180', p75: '$93,600', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NH' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; New Hampshire runs its own board examination with a practical component.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What case counts does New Hampshire expect?', a: 'Fifty embalming case reports and 25 funeral director reports across the one-year apprenticeship \u2014 heavy case documentation.' },
        { q: 'Does New Hampshire test practically?', a: 'Yes \u2014 a practical examination at $150 alongside the board application.' },
        { q: 'What does the New Hampshire application cost?', a: '$170 for the embalmer route or $330 for the combined funeral director and embalmer licence, plus the practical exam fee.' },
        { q: 'What do New Hampshire funeral directors earn?', a: 'BLS OEWS reports a May 2025 New Hampshire median of $57,630 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Hampshire wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NH', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; New Jersey legal and practical examinations',
        parts: [
          { name: 'NBE Arts / Sciences', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'New Jersey legal examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set ($125)' },
          { name: 'New Jersey practical examination', questions: 'Board-assessed', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; New Jersey legal exam $125 + licence $350',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'Minimum age 21; at least two years of college plus one year at an approved mortuary science programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Two-year residency reduced to one year for graduates of a three-year education route, documented with 75 embalming assists, 75 funerals directed and attendance at 25 additional services',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$69,110', p25: '$43,620', p75: '$77,890', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NJ' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to New Jersey applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the New Jersey residency?', a: 'Two years, cut to one if you complete a three-year education route \u2014 documented with 75 embalming assists, 75 funerals directed and attendance at 25 more services.' },
        { q: 'What does New Jersey expect before you apply?', a: 'Age 21, two years of college, and one year at an approved mortuary science programme.' },
        { q: 'What does New Jersey licensing cost?', a: 'A $125 legal examination and a $350 licence, plus NBE fees of $285 per section and a practical exam.' },
        { q: 'What do New Jersey funeral directors earn?', a: 'BLS OEWS reports a May 2025 New Jersey median of $69,110 for Morticians, Undertakers, and Funeral Arrangers \u2014 second only to Illinois among state medians.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Jersey wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NJ', checkedOn: '2026-10' }
      ]
    },
    NM: {
      exam: {
        vendor: 'ICFSEB NBE Sciences; New Mexico state examination',
        parts: [
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'New Mexico state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; New Mexico $15 background + $50 application + $100 LRR + $200 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus an ABFSE-accredited funeral science associate degree (at least 60 semester hours), plus communicable disease course and bloodborne pathogen certification', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship documented with 50 embalmings, 50 arrangements and 50 directives',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$50,380', p25: '$43,350', p75: '$60,310', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NM' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to New Mexico applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What health certifications does New Mexico add?', a: 'A communicable disease course certificate and bloodborne pathogen certification \u2014 on top of the ABFSE associate degree.' },
        { q: 'What case counts does New Mexico require?', a: 'Fifty embalmings, 50 arrangements and 50 directives across the one-year apprenticeship.' },
        { q: 'What does New Mexico licensing cost?', a: 'A $15 background check, $50 application, $100 laws-and-rules fee and $200 licence, plus NBE fees.' },
        { q: 'What do New Mexico funeral directors earn?', a: 'BLS OEWS reports a May 2025 New Mexico median of $50,380 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Mexico wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NM', checkedOn: '2026-10' }
      ]
    },
    NY: {
      agencyUrl: 'https://www.health.ny.gov',
      exam: {
        vendor: 'New York Board examinations; state laws and rules exam',
        parts: [
          { name: 'New York initial board examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' },
          { name: 'New York laws and rules examination (during or after residency)', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section where applicable; New York licence $125',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'A registered university-level funeral service programme of at least 60 semester hours (90 quarter hours); registration with the programme happens at enrollment', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year registered residency documented with 40 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$63,090', p25: '$58,970', p75: '$78,430', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NY' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; New York runs its own board and laws-and-rules examinations.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does New York structure funeral licensure?', a: 'You register with a state-registered funeral programme (at least 60 semester hours) at enrollment, serve a one-year registered residency with 40 case reports, then pass the board examination and the laws-and-rules exam.' },
        { q: 'When do you take the New York laws exam?', a: 'During or after the residency \u2014 New York schedules it around the registered year rather than at application.' },
        { q: 'What does a New York licence cost?', a: 'A $125 licence fee, plus exam fees through the state and any NBE sections.' },
        { q: 'What do New York funeral directors earn?', a: 'BLS OEWS reports a May 2025 New York median of $63,090 for Morticians, Undertakers, and Funeral Arrangers \u2014 well above the national median of $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New York wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NY', checkedOn: '2026-10' }
      ]
    },
    NC: {
      exam: {
        vendor: 'North Carolina state law exam; NBE or state subject exams',
        parts: [
          { name: 'North Carolina laws and rules examination', questions: 'Board-set', time: 'Within three years of application', pass: 'Board-set' },
          { name: 'NBE Arts / Sciences', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'North Carolina state Arts, Science and Pathology examinations (alternative to NBE)', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; North Carolina application $150 (in-state residents)',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'ABFSE-accredited mortuary science associate degree, or a board-approved funeral director programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship completed within three years, documented with 25 funeral and 25 embalming case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$60,730', p25: '$48,520', p75: '$75,390', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NC' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to North Carolina applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does North Carolina accept the NBE or run its own exams?', a: 'Both routes exist \u2014 the NBE, or North Carolina\u2019s own Arts, Science and Pathology examinations, whichever the board route you choose provides.' },
        { q: 'How long is the North Carolina apprenticeship?', a: 'One year completed within a three-year window, with 25 funeral and 25 embalming case reports.' },
        { q: 'What does North Carolina licensing cost?', a: 'A $150 application for in-state residents, plus exam fees.' },
        { q: 'What do North Carolina funeral directors earn?', a: 'BLS OEWS reports a May 2025 North Carolina median of $60,730 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Carolina wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=NC', checkedOn: '2026-10' }
      ]
    },
    ND: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; North Dakota laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'North Dakota LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; North Dakota licence $100',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus an approved funeral service programme and at least 60 semester hours of college credit', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Case documentation of 10 funeral arrangements and 25 embalmings',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$59,760', p25: '$54,060', p75: '$81,620', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ND' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to North Dakota applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education does North Dakota require?', a: 'An approved funeral service programme plus at least 60 semester hours of college credit, on top of high school.' },
        { q: 'What case documentation applies?', a: 'Ten funeral arrangements and 25 embalmings.' },
        { q: 'What does a North Dakota licence cost?', a: 'A $100 licence fee plus NBE fees of $285 per section.' },
        { q: 'What do North Dakota funeral directors earn?', a: 'BLS OEWS reports a May 2025 North Dakota median of $59,760 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Dakota wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=ND', checkedOn: '2026-10' }
      ]
    },
    OH: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Ohio laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Ohio LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Ohio licence $200 + $3.50 transaction fee + $140 LRR',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'Bachelor\u2019s degree from an accredited university; embalmer applicants also need a mortuary science degree', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Apprenticeship completed before initial licensure, per Ohio Board rules',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$57,800', p25: '$45,640', p75: '$76,230', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OH' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Ohio applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'Does Ohio require a bachelor\u2019s degree?', a: 'Yes \u2014 Ohio is one of the few states that asks funeral director applicants for a full bachelor\u2019s degree, and embalmer applicants need a mortuary science degree.' },
        { q: 'When does the Ohio apprenticeship happen?', a: 'Before initial licensure \u2014 the Ohio Board requires it to be complete before the first licence issues.' },
        { q: 'What does Ohio licensing cost?', a: 'A $200 licence with a $3.50 transaction fee plus a $140 laws-and-rules registration, alongside NBE fees of $285 per section.' },
        { q: 'What do Ohio funeral directors earn?', a: 'BLS OEWS reports a May 2025 Ohio median of $57,800 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Ohio wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OH', checkedOn: '2026-10' }
      ]
    },
    OK: {
      exam: {
        vendor: 'Oklahoma Funeral Directors and Embalmers Examinations; ICFSEB sections',
        parts: [
          { name: 'NBE Sciences and/or Arts', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Oklahoma Funeral Directors Examination / Oklahoma Embalmers Examination', questions: 'Board-set', time: 'Board-set', pass: '75 or higher' }
        ],
        fee: '$285 per NBE section; Oklahoma $100 LRR + $75 licence',
        sourceUrl: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=547964'
      },
      education: { hours: 'Graduation from an ABFSE-accredited mortuary science programme; funeral-director-only applicants complete a state-approved course of at least 30 semester hours covering business management, cremation, social sciences, legal/ethical/regulatory content and embalming essentials', sourceUrl: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=547964' },
      experience: 'One year as a registered apprentice (serviceable before, during or after school); funeral-director-only route adds 25 arrangement conferences and 25 funeral or memorial services assisted',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$47,780', p25: '$34,340', p75: '$72,440', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OK' },
      recentChanges: [{ year: 2025, change: 'Oklahoma HB 1365 (2025) established the Oklahoma Funeral Directors and Embalmers Examinations (75-point pass) and formalised a funeral-director-only route with a 30-semester-hour curriculum.', sourceUrl: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=547964' }],
      stateFaqs: [
        { q: 'What changed in Oklahoma in 2025?', a: 'HB 1365 created the Oklahoma Funeral Directors and Embalmers Examinations with a 75-point pass standard and formalised a funeral-director-only licence built on a 30-semester-hour curriculum.' },
        { q: 'How long is the Oklahoma apprenticeship?', a: 'One year as a registered apprentice \u2014 you can serve it before, during or after mortuary school.' },
        { q: 'What does the funeral-director-only route require?', a: 'Twenty-five arrangement conferences and 25 funeral or memorial services assisted under a licensed funeral director, on top of the state-approved coursework.' },
        { q: 'What do Oklahoma funeral directors earn?', a: 'BLS OEWS reports a May 2025 Oklahoma median of $47,780 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'Oklahoma Session Laws 2025 \u2014 HB 1365', url: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=547964', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oklahoma wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OK', checkedOn: '2026-10' }
      ]
    },
    OR: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Oregon laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Oregon LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Oregon $100 LRR + $160 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus graduation from an accredited funeral service school', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Funeral Service Practitioner apprenticeship; the combined director-and-embalmer licence adds a separate embalming apprenticeship, documented with 25 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$48,630', p25: '$38,330', p75: '$59,510', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OR' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Oregon applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      localNuance: 'Oregon licenses Funeral Service Practitioners \u2014 its own terminology \u2014 with an optional embalming apprenticeship stacked on for the combined credential.',
      stateFaqs: [
        { q: 'What is Oregon\u2019s licence called?', a: 'Funeral Service Practitioner (FSP) \u2014 with an additional embalming apprenticeship required for the combined director-and-embalmer licence.' },
        { q: 'What case documentation applies?', a: 'Twenty-five case reports across the apprenticeship.' },
        { q: 'What does Oregon licensing cost?', a: 'A $100 laws-and-rules fee and a $160 licence, plus NBE fees of $285 per section.' },
        { q: 'What do Oregon funeral directors earn?', a: 'BLS OEWS reports a May 2025 Oregon median of $48,630 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oregon wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=OR', checkedOn: '2026-10' }
      ]
    },
    PA: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Pennsylvania written, oral and practical examinations',
        parts: [
          { name: 'NBE Arts / Sciences', questions: '150 scored + 20 pretest per section', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Pennsylvania written, oral and practical examinations', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Pennsylvania $190 LRR + $25 licence',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'Minimum age 21; at least two years of accredited college plus one year at an ABFSE-accredited mortuary college; three hours of child abuse recognition training and three hours of continuing education', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Twelve-month residency documented with 35 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$63,580', p25: '$52,420', p75: '$77,520', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=PA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Pennsylvania applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What exams does Pennsylvania stack?', a: 'The NBE plus Pennsylvania\u2019s own written, oral and practical examinations \u2014 one of the few states still running an oral component.' },
        { q: 'How long is the Pennsylvania residency?', a: 'Twelve months with 35 case reports, following two years of college and one year of mortuary college.' },
        { q: 'What training add-ons does Pennsylvania require?', a: 'Three hours of child abuse recognition training and three hours of continuing education.' },
        { q: 'What do Pennsylvania funeral directors earn?', a: 'BLS OEWS reports a May 2025 Pennsylvania median of $63,580 for Morticians, Undertakers, and Funeral Arrangers \u2014 well above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Pennsylvania wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=PA', checkedOn: '2026-10' }
      ]
    },
    RI: {
      exam: {
        vendor: 'ICFSEB written examination (funeral directing and embalming parts); possible practical',
        parts: [
          { name: 'ICFSEB written examination, funeral directing and embalming parts', questions: 'Board-recognized', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$30 licence',
        sourceUrl: 'https://fmc.edu/resources/'
      },
      education: { hours: 'High school diploma or GED plus an associate degree from an accredited funeral service programme', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship or apprenticeship documented with 50 embalmings',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$55,420', p25: '$54,870', p75: '$139,100', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=RI' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Rhode Island applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How heavy is Rhode Island\u2019s case requirement?', a: 'Fifty embalmings across the one-year internship \u2014 double what most states ask.' },
        { q: 'What does a Rhode Island licence cost?', a: 'Just $30 \u2014 among the cheapest licences in the country, before exam fees.' },
        { q: 'Which exam does Rhode Island use?', a: 'The ICFSEB written examination covering funeral directing and embalming, with a possible practical component.' },
        { q: 'What do Rhode Island funeral directors earn?', a: 'BLS OEWS reports a May 2025 Rhode Island median of $55,420 for Morticians, Undertakers, and Funeral Arrangers \u2014 right at the national median, though the small sample makes the percentiles swing wide.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Rhode Island wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=RI', checkedOn: '2026-10' }
      ]
    },
    SC: {
      agencyUrl: 'https://scstatehouse.gov/Archives/CodeofLaws2018/t40c019.php',
      exam: {
        vendor: 'South Carolina board examination (standardized written test)',
        parts: [
          { name: 'South Carolina board examination', questions: 'Standardized written test', time: 'Board-set', pass: 'Pass mark set by board regulation' }
        ],
        fee: '$130 single credential / $195 dual + $140 LRR',
        sourceUrl: 'https://scstatehouse.gov/Archives/CodeofLaws2018/t40c019.php'
      },
      education: { hours: 'Funeral directors: 12 months at an accredited mortuary college or two years (60 credits) at an accredited academic college. Embalmers: a completed course at an ABFSE-accredited embalming college. High school education or equivalent required; no violent crime, felony or moral-turpitude conviction', sourceUrl: 'https://scstatehouse.gov/Archives/CodeofLaws2018/t40c019.php' },
      experience: 'Twenty-four months of apprenticeship under a directly supervising licensed embalmer or funeral director, documented with 50 case reports; exam applications due at least 30 days before the exam date',
      renewal: { cycle: 'Biennial (licenses and renewals expire 30 June)', sourceUrl: 'https://scstatehouse.gov/Archives/CodeofLaws2018/t40c019.php' },
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$40,020', p25: '$32,980', p75: '$62,730', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=SC' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; South Carolina administers its own standardized written board examination.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How long is the South Carolina apprenticeship?', a: 'Twenty-four months under the direct supervision of a licensed embalmer or funeral director, with 50 case reports.' },
        { q: 'What education does South Carolina require?', a: 'Twelve months at an accredited mortuary college or 60 college credits for funeral directors; embalmers complete an ABFSE-accredited embalming college course.' },
        { q: 'When do South Carolina licences expire?', a: 'Every 30 June on a two-year cycle \u2014 the statute fixes the renewal date statewide.' },
        { q: 'What do South Carolina funeral directors earn?', a: 'BLS OEWS reports a May 2025 South Carolina median of $40,020 for Morticians, Undertakers, and Funeral Arrangers \u2014 the lowest state median in the country.' }
      ],
      sources: [
        { label: 'South Carolina Code \u00a7 40-19-110', url: 'https://scstatehouse.gov/Archives/CodeofLaws2018/t40c019.php', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Carolina wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=SC', checkedOn: '2026-10' }
      ]
    },
    SD: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; South Dakota state exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'South Dakota state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; South Dakota licence $125',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'At least 90 college credits plus an ABFSE-accredited funeral service or embalming degree or certificate', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship with 12 monthly reports, documented with 25 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$47,840', p25: '$46,180', p75: '$61,390', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=SD' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to South Dakota applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does the South Dakota apprenticeship report?', a: 'Twelve monthly reports across the one-year apprenticeship, totalling 25 case reports.' },
        { q: 'What education does South Dakota require?', a: 'Ninety college credits plus an ABFSE-accredited funeral service or embalming degree or certificate.' },
        { q: 'What does a South Dakota licence cost?', a: 'A $125 licence fee plus NBE fees of $285 per section.' },
        { q: 'What do South Dakota funeral directors earn?', a: 'BLS OEWS reports a May 2025 South Dakota median of $47,840 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Dakota wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=SD', checkedOn: '2026-10' }
      ]
    },
    TN: {
      agencyUrl: 'https://preprodburnsafetn.tn.gov/commerce/regboards/funeral/license/start.html',
      exam: {
        vendor: 'Tennessee State Board Examinations (Arts and Science) plus the Tennessee Laws, Rules and Regulations exam, scheduled with the testing agency',
        parts: [
          { name: 'Tennessee State Board Arts examination', questions: 'Board-set', time: 'By appointment with the testing agency', pass: 'Board-set' },
          { name: 'Tennessee State Board Science examination', questions: 'Board-set', time: 'By appointment with the testing agency', pass: 'Board-set' },
          { name: 'Tennessee Laws, Rules and Regulations examination', questions: 'Board-set', time: 'By appointment with the testing agency', pass: 'Board-set' }
        ],
        fee: '$155 LRR + $435 licence application',
        sourceUrl: 'https://preprodburnsafetn.tn.gov/commerce/regboards/funeral/license/start.html'
      },
      education: { hours: 'Funeral directors: at least 30 semester hours of funeral service education at an ABFSE-accredited school. Embalmers: an associate degree of at least 60 semester hours from an accredited mortuary science programme. Candidates must be 18, immunised against communicable disease, and hold a high school diploma or GED', sourceUrl: 'https://preprodburnsafetn.tn.gov/commerce/regboards/funeral/license/start.html' },
      experience: 'Two-year apprenticeship for funeral directors, or one year with mortuary school (students must register with the board for credit); quarterly reports due within 60 days of each quarter, and a completion form signed by the supervising licensee',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$46,180', p25: '$41,600', p75: '$50,180', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=TN' },
      recentChanges: [{ year: 2026, change: 'The NBE remains $285 per section nationally; Tennessee runs its own State Board Arts and Science examinations plus the state LRR.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does the Tennessee apprenticeship work?', a: 'Two years for funeral directors, one if you attend mortuary school \u2014 and students must register with the board to earn credit. Quarterly reports are due within 60 days of each quarter\u2019s end.' },
        { q: 'Which exams does Tennessee run?', a: 'Its own State Board Arts and Science examinations plus the Tennessee Laws, Rules and Regulations exam, all scheduled directly with the testing agency.' },
        { q: 'What does Tennessee licensing cost?', a: 'A $155 laws-and-rules fee and a $435 licence application.' },
        { q: 'What do Tennessee funeral directors earn?', a: 'BLS OEWS reports a May 2025 Tennessee median of $46,180 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'Tennessee Board of Funeral Directors & Embalmers \u2014 Getting Started', url: 'https://preprodburnsafetn.tn.gov/commerce/regboards/funeral/license/start.html', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Tennessee wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=TN', checkedOn: '2026-10' }
      ]
    },
    TX: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Texas laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Texas LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Texas $89 LRR + $175 licence / $350 combined FD+embalmer',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus graduation from an accredited mortuary science school; FBI background check', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Temporary licence route of up to 24 months, employed throughout under a licensed funeral director or embalmer, documented with 45 case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$46,630', p25: '$33,030', p75: '$58,000', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=TX' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Texas applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does the Texas training licence work?', a: 'A temporary licence of up to 24 months during which you work under a licensed funeral director or embalmer \u2014 with an FBI background check \u2014 and log 45 case reports.' },
        { q: 'What does Texas licensing cost?', a: 'An $89 laws-and-rules registration with a $175 licence ($350 for the combined funeral director and embalmer credential), plus NBE fees of $285 per section.' },
        { q: 'Which NBE sections does Texas require?', a: 'Both Arts and Sciences, alongside the Texas laws-and-rules exam.' },
        { q: 'What do Texas funeral directors earn?', a: 'BLS OEWS reports a May 2025 Texas median of $46,630 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Texas wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=TX', checkedOn: '2026-10' }
      ]
    },
    UT: {
      exam: {
        vendor: 'Utah state examination plus both NBE sections',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Utah state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Utah $75 LRR + $160 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school education or higher plus an ABFSE-accredited funeral science associate degree', sourceUrl: 'https://fmc.edu/resources/' },
      experience: '2,000-hour licensed internship documented with 50 embalmings',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$72,800', p25: '$51,440', p75: '$88,610', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=UT' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Utah applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does Utah measure the internship?', a: 'In hours: 2,000 hours as a licensed intern, documented with 50 embalmings.' },
        { q: 'What education does Utah require?', a: 'An ABFSE-accredited funeral science associate degree on top of high school.' },
        { q: 'What do Utah funeral directors earn?', a: 'BLS OEWS reports a May 2025 Utah median of $72,800 for Morticians, Undertakers, and Funeral Arrangers \u2014 the highest state median in the country.' },
        { q: 'What does Utah licensing cost?', a: 'A $75 laws-and-rules fee and a $160 licence, plus NBE fees of $285 per section.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Utah wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=UT', checkedOn: '2026-10' }
      ]
    },
    VT: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Vermont laws and rules exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Vermont LRR examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Vermont application $85',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus at least two academic years at an ABFSE-accredited programme, or one academic year plus 30 additional college credits', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year training or apprenticeship that includes 30 funerals, plus 10 hours of approved live continuing education',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$48,740', p25: '$45,870', p75: '$59,610', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=VT' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Vermont applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What is inside the Vermont apprenticeship year?', a: 'Thirty funerals plus 10 hours of approved live continuing education \u2014 Vermont builds CE into initial training.' },
        { q: 'What education routes does Vermont accept?', a: 'Two academic years at an ABFSE-accredited programme, or one academic year plus 30 additional college credits.' },
        { q: 'What does Vermont licensing cost?', a: 'An $85 application plus NBE fees of $285 per section.' },
        { q: 'What do Vermont funeral directors earn?', a: 'BLS OEWS reports a May 2025 Vermont median of $48,740 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Vermont wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=VT', checkedOn: '2026-10' }
      ]
    },
    VA: {
      exam: {
        vendor: 'Virginia state examination plus NBE',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Virginia state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Virginia $170 LRR + $325 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus graduation from an ABFSE-accredited funeral school, or an associate degree of at least 60 credits including 30 hours of board-approved funeral directing coursework and a pathology course', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Funeral service or funeral directing internship; case documentation of 25 for a single credential and 50 for the dual credential',
      wages: { note: 'BLS does not publish an OEWS wage estimate for Morticians, Undertakers, and Funeral Arrangers in Virginia \u2014 the sample is below publication standards. The national median is $55,010 (May 2025).', soc: '39-4031', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=VA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Virginia applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education routes does Virginia accept?', a: 'An ABFSE-accredited funeral school graduation, or an associate degree of 60+ credits with 30 hours of board-approved funeral directing coursework and a pathology course.' },
        { q: 'How many case reports does Virginia need?', a: 'Twenty-five for a single credential, fifty for the dual funeral director and embalmer credential.' },
        { q: 'What does Virginia licensing cost?', a: 'A $170 laws-and-rules fee and a $325 licence, plus NBE fees of $285 per section.' },
        { q: 'What do Virginia funeral directors earn?', a: 'BLS withholds an OEWS estimate for this occupation in Virginia \u2014 employment is too small to publish; nationally the May 2025 median is $55,010.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Virginia wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=VA', checkedOn: '2026-10' }
      ]
    },
    WA: {
      exam: {
        vendor: 'Washington state examination plus NBE',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Washington state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Washington $135 application + $140 LRR',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'An ABFSE-accredited mortuary science associate degree, or at least 60 semester hours (90 quarter hours) including coursework in psychology, mathematics, English composition, social science, business administration and counselling', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'Internship of up to five years documented with 25 arrangement case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$59,700', p25: '$48,170', p75: '$72,160', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WA' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Washington applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What is unusual about Washington\u2019s internship window?', a: 'It can stretch up to five years \u2014 the longest allowance in the country \u2014 documented with 25 arrangement case reports.' },
        { q: 'What coursework does Washington name?', a: 'Psychology, mathematics, English composition, social science, business administration and counselling inside a 60-semester-hour (90-quarter-hour) package, or an ABFSE associate degree.' },
        { q: 'What does Washington licensing cost?', a: 'A $135 application and a $140 laws-and-rules registration, plus NBE fees of $285 per section.' },
        { q: 'What do Washington funeral directors earn?', a: 'BLS OEWS reports a May 2025 Washington median of $59,700 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Washington wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WA', checkedOn: '2026-10' }
      ]
    },
    WV: {
      exam: {
        vendor: 'West Virginia state examination plus NBE Arts',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'West Virginia state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; West Virginia $315 LRR + $200 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus graduation from a 12-month ABFSE-accredited mortuary science programme and additional college education \u2014 an associate degree (60 semester credits or 90 quarter hours) or a funeral service bachelor\u2019s', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year internship documented with 35 funeral and 35 embalming case reports',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$47,960', p25: '$37,080', p75: '$58,020', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WV' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to West Virginia applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'How does West Virginia structure education?', a: 'A 12-month ABFSE-accredited mortuary science programme plus additional college education \u2014 an associate degree of 60 semester credits or 90 quarter hours, or a funeral service bachelor\u2019s.' },
        { q: 'What case counts does West Virginia require?', a: 'Thirty-five funeral and 35 embalming case reports across the one-year internship.' },
        { q: 'What does West Virginia licensing cost?', a: 'A $315 laws-and-rules fee and a $200 licence, plus NBE fees.' },
        { q: 'What do West Virginia funeral directors earn?', a: 'BLS OEWS reports a May 2025 West Virginia median of $47,960 for Morticians, Undertakers, and Funeral Arrangers, below the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 West Virginia wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WV', checkedOn: '2026-10' }
      ]
    },
    WI: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE; Wisconsin legal exam',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'Wisconsin legal examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$285 per NBE section; Wisconsin $75 LRR + $60 licence',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      education: { hours: 'High school diploma or GED plus at least 24 semester credits across English/communication, social science, natural science and business, plus at least nine months of ABFSE-accredited funeral service education', sourceUrl: 'https://fmc.edu/resources/' },
      experience: 'One-year apprenticeship documented with 25 embalmings, 25 body preparations and 25 funerals \u2014 75 case reports total',
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$58,250', p25: '$47,430', p75: '$75,870', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WI' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Wisconsin applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What case counts does Wisconsin demand?', a: 'Seventy-five total: 25 embalmings, 25 body preparations and 25 funerals across the one-year apprenticeship.' },
        { q: 'What education does Wisconsin specify?', a: 'Twenty-four semester credits across four named areas plus at least nine months of ABFSE-accredited funeral service education.' },
        { q: 'What does Wisconsin licensing cost?', a: 'A $75 laws-and-rules fee and a $60 licence, plus NBE fees of $285 per section.' },
        { q: 'What do Wisconsin funeral directors earn?', a: 'BLS OEWS reports a May 2025 Wisconsin median of $58,250 for Morticians, Undertakers, and Funeral Arrangers \u2014 above the national median.' }
      ],
      sources: [
        { label: 'FINE Mortuary College \u2014 state licensing requirements', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wisconsin wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WI', checkedOn: '2026-10' }
      ]
    },
    WY: {
      exam: {
        vendor: 'ICFSEB (NBE) at Pearson VUE where the Wyoming board route requires it',
        parts: [
          { name: 'NBE Arts', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' },
          { name: 'NBE Sciences', questions: '150 scored + 20 pretest', time: 'Board-set appointment', pass: 'Scaled score 75' }
        ],
        fee: '$285 per NBE section; Wyoming board fees per its fee schedule',
        sourceUrl: 'https://theconferenceonline.org/faq'
      },
      wages: { soc: '39-4031', socName: 'Morticians, Undertakers, and Funeral Arrangers', median: '$55,570', p25: '$48,690', p75: '$85,270', national: '$55,010', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WY' },
      recentChanges: [{ year: 2026, change: 'ICFSEB\u2019s $285-per-section NBE pricing and independent Arts/Sciences scoring apply to Wyoming applicants.', sourceUrl: 'https://theconferenceonline.org/faq' }],
      stateFaqs: [
        { q: 'What education standard applies nationally that covers Wyoming?', a: 'Graduation from an ABFSE-accredited mortuary science programme is the most common NBE eligibility route everywhere, and Wyoming applicants use the same Conference examinations at $285 per section.' },
        { q: 'What do Wyoming funeral directors earn?', a: 'BLS OEWS reports a May 2025 Wyoming median of $55,570 for Morticians, Undertakers, and Funeral Arrangers \u2014 right at the national median, with the top quarter above $85,270.' },
        { q: 'What should I confirm with the Wyoming board before enrolling?', a: 'The board\u2019s current apprenticeship length and case-report counts \u2014 Wyoming\u2019s rules were not captured in the compiled national requirements table reviewed for this page, and its own fee schedule and rules are the operative authority.' },
        { q: 'Does the NBE score expire?', a: 'No \u2014 Conference exam scores never expire, so a passing Arts or Sciences section stays bankable while you finish any remaining Wyoming requirements.' }
      ],
      sources: [
        { label: 'ICFSEB NBE FAQ', url: 'https://theconferenceonline.org/faq', checkedOn: '2026-10' },
        { label: 'FINE Mortuary College \u2014 state licensing requirements (coverage note)', url: 'https://fmc.edu/resources/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wyoming wages, SOC 39-4031', url: 'https://www.onetonline.org/link/localwages/39-4031.00?st=WY', checkedOn: '2026-10' }
      ]
    }
  }
};
