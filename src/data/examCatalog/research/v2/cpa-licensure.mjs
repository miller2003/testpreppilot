// v2 per-state research increment — cpa-licensure
// Compiled 2026-10-20. Sources: Uniform CPA Exam structure and fees cross-checked
// across 300hours' 2026 fee tracker ($268.59 per section from 4 July 2026; $262.64
// before; four sections $1,074.36; rolling 30-month credit window from first score
// release, raised from 18 months), LegalClarity's CPA licensing summary (AICPA
// ethics exam $250 members / $320 non-members, 90% pass; state-specific ethics exams
// in Arkansas, Wisconsin, North Carolina, California), 300hours' July-2026 and Atlas
// CPA Index's 31-August-2026 trackers for the 120-hour alternative pathway enacted
// state-by-state (bill numbers + effective dates reproduced only where the tracker
// lists them), accounting.com's Pennsylvania page (verified per-state fee/CPE detail),
// and BLS OEWS May 2025 wages via O*NET OnLine (SOC 13-2011, Accountants and Auditors).
// The 150-hour traditional pathway remains available in EVERY jurisdiction — the
// 120-hour route is an alternative, not a replacement.

export default {
  key: 'cpa-licensure',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Alabama charges a $120 one-time application fee instead of the standard evaluation',
        pass: '75 scaled; all four sections within a rolling 30-month window from the first score release',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration (bachelor\u2019s degree plus 30 additional hours), 24+ hours of accounting coursework and 24+ hours of business coursework', sourceUrl: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route' },
      experience: 'One year (about 2,000 hours) of qualifying experience verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$74,880', p25: '$60,840', p75: '$95,870', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AL' },
      recentChanges: [{ year: 2026, change: 'Alabama\u2019s alternative pathway legislation takes effect 15 October 2026, adding a bachelor\u2019s-degree-plus-experience route alongside the 150-hour standard.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'What does the Alabama CPA exam application cost?', a: 'Alabama replaces the standard education-evaluation fee with a $120 one-time application fee, and charges no per-section registration fee \u2014 so the exam bill is essentially the four NASBA section fees at $268.59 each.' },
        { q: 'Is Alabama keeping the 150-hour rule?', a: 'The 150-hour route remains, and an alternative pathway legislation takes effect 15 October 2026, letting a bachelor\u2019s-degree holder qualify through extra supervised experience instead of the extra 30 credit hours.' },
        { q: 'How long do I have to pass all four CPA sections?', a: 'Thirty months on a rolling clock that starts at your first score release \u2014 the national standard since NASBA raised it from 18 months.' },
        { q: 'What do Alabama accountants earn?', a: 'BLS OEWS reports a May 2025 Alabama median of $74,880 for Accountants and Auditors, well below the $83,680 national median.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Alaska education evaluation $121 + $109 per-section registration',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Two routes: the traditional 150 semester hours, or \u2014 since 1 January 2026 \u2014 a bachelor\u2019s degree alone (Alaska is the only jurisdiction whose 120-hour pathway requires no additional experience)', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year under the 150-hour route; no additional experience required on Alaska\u2019s 120-hour pathway (HB 121)',
      fees: [{ item: 'Education evaluation', fee: '$121', sourceUrl: 'https://300hours.com/cpa-exam-cost' }, { item: 'Per-section registration', fee: '$109', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$83,460', p25: '$72,230', p75: '$102,460', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AK' },
      recentChanges: [{ year: 2026, change: 'HB 121 took effect 1 January 2026 and fully repealed the 150-hour requirement \u2014 Alaska\u2019s pathway is the only one in the country that adds no substitute experience requirement.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Did Alaska really drop the 150-hour rule entirely?', a: 'Yes \u2014 HB 121, effective 1 January 2026, repealed it outright. Alaska is the only jurisdiction where a qualifying bachelor\u2019s degree alone meets the education requirement, with no added experience swap.' },
        { q: 'What does the Alaska CPA exam cost?', a: 'A $121 education evaluation plus $109 per-section registration on top of the $268.59 NASBA section fee \u2014 roughly $1,631 total for four sections at first attempt.' },
        { q: 'Do Alaska CPAs still take the AICPA ethics exam?', a: 'Roughly 40 states require the AICPA ethics course ($250 members / $320 non-members, 90% pass); Alaska\u2019s current board materials are the authority for its present ethics requirement.' },
        { q: 'What do Alaska accountants earn?', a: 'BLS OEWS reports a May 2025 Alaska median of $83,460 for Accountants and Auditors \u2014 essentially at the $83,680 national median.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Arizona board fees per its schedule',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Arizona had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) of qualifying experience verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,970', p25: '$64,990', p75: '$103,640', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AZ' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026, and the 30-month rolling credit window (up from 18) now applies to Arizona candidates.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Arizona still require 150 credit hours?', a: 'Yes \u2014 as of October 2026 Arizona sits in the group of jurisdictions that have not enacted the 120-hour alternative pathway.' },
        { q: 'How much is the CPA exam in Arizona?', a: 'Four sections at the national $268.59 rate \u2014 $1,074.36 \u2014 plus Arizona\u2019s own application and registration charges.' },
        { q: 'Which discipline should an Arizona candidate pick?', a: 'BAR (business analysis and reporting), ISC (information systems and controls) or TCP (tax compliance and planning) \u2014 the fee is identical, so the choice is about your career track, not cost.' },
        { q: 'What do Arizona accountants earn?', a: 'BLS OEWS reports a May 2025 Arizona median of $79,970 for Accountants and Auditors \u2014 below the $83,680 national median.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    AR: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Arkansas application $50 + $75 per-section application fee',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or \u2014 since board rules took effect 5 March 2026 \u2014 a bachelor\u2019s degree with an accounting concentration plus two years of CPA-verified experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years of CPA-verified experience on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$66,330', p25: '$52,570', p75: '$88,950', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AR' },
      recentChanges: [{ year: 2026, change: 'Board rules approved by the Legislative Council on 20 February 2026 took effect 5 March 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'How did Arkansas add the 120-hour route?', a: 'Through board rules rather than legislation \u2014 approved 20 February 2026 and effective 5 March 2026 \u2014 swapping the extra 30 credit hours for two years of CPA-verified experience.' },
        { q: 'What does the Arkansas exam cost?', a: 'A $50 application plus $75 per-section application fees on top of the national $268.59 section fee \u2014 about $1,424 total for four sections at first attempt.' },
        { q: 'Does Arkansas have its own ethics exam?', a: 'Yes \u2014 Arkansas is one of the states that administers a state-specific ethics exam instead of accepting only the AICPA course.' },
        { q: 'What do Arkansas accountants earn?', a: 'BLS OEWS reports a May 2025 Arkansas median of $66,330 for Accountants and Auditors, below the $83,680 national median.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 CPA licensing requirements', url: 'https://legalclarity.org/certified-public-accountant-requirements-and-licensing', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric; California PETH ethics exam separate',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' },
          { name: 'California PETH (Professional Ethics for CPAs)', questions: 'State ethics exam', time: 'Board-set', pass: 'Board-set (90% typical for AICPA-style ethics tests)' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); California board fees per the CBA schedule, PETH charged separately',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours; California enacted AB 1175 in October 2025 adding an alternative pathway whose provisions phase in through 2027', sourceUrl: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route' },
      experience: 'One year of general accounting experience under a licensed CPA; the alternative pathway swaps additional education for additional experience as its rules vest',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$97,050', p25: '$75,810', p75: '$125,850', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CA' },
      recentChanges: [{ year: 2025, change: 'AB 1175 (signed October 2025) created California\u2019s alternative licensure pathway; implementing provisions continue to phase in through 2027.', sourceUrl: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route' }],
      stateFaqs: [
        { q: 'What is the PETH?', a: 'California\u2019s own Professional Ethics exam \u2014 it runs separately from the AICPA ethics course that roughly 40 other states use, so budget for it as its own line item.' },
        { q: 'Is California dropping the 150-hour rule?', a: 'Partially and gradually: AB 1175 (October 2025) created an alternative pathway, but its provisions phase in through 2027, so the 150-hour standard is still the operative route for most candidates right now.' },
        { q: 'What do California CPAs earn?', a: 'BLS OEWS reports a May 2025 California median of $97,050 for Accountants and Auditors \u2014 among the highest state medians, against $83,680 nationally.' },
        { q: 'How long is the exam credit window in California?', a: 'Thirty months from your first score release \u2014 the national standard NASBA raised from 18 months.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 alternative CPA licensure (120-hour route)', url: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Colorado application ~$200, licensure application ~$150, biennial renewal ~$120 per the 2026 cost guide',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours through 2026; SB26-076 (signed 4 May 2026) adds the bachelor\u2019s-plus-two-years pathway effective 1 January 2027', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year verified by a licensed CPA; two years under the pathway from 1 January 2027',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$97,030', p25: '$74,900', p75: '$127,270', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CO' },
      recentChanges: [{ year: 2026, change: 'SB26-076 (signed 4 May 2026) creates the 120-hour alternative pathway effective 1 January 2027; until then the 150-hour standard governs licensure.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'When does Colorado\u2019s 120-hour pathway start?', a: '1 January 2027 \u2014 SB26-076 was signed 4 May 2026, so 2026 candidates still plan around the 150-hour standard.' },
        { q: 'What does Colorado CPA licensure cost?', a: 'The 2026 cost guide estimates about $200 for the initial exam application, $150 for the licensure application and $120 per biennial renewal, plus the four $268.59 section fees.' },
        { q: 'What do Colorado accountants earn?', a: 'BLS OEWS reports a May 2025 Colorado median of $97,030 for Accountants and Auditors \u2014 top-tier nationally.' },
        { q: 'How does Colorado handle reciprocity?', a: 'Through substantial equivalency: CPAs licensed in substantially equivalent jurisdictions qualify by endorsement, with the original state\u2019s education, exam and experience (the three E\u2019s) measured against Colorado\u2019s.' }
      ],
      sources: [
        { label: 'VoraPrep \u2014 Colorado CPA requirements 2026', url: 'https://voraprep.com/blog/cpa-requirements-colorado', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Connecticut board fees per its schedule',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 October 2025 (Public Act 25-36 / HB 7020) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$97,550', p25: '$78,020', p75: '$123,670', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CT' },
      recentChanges: [{ year: 2025, change: 'Public Act 25-36 (HB 7020) took effect 1 October 2025, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Does Connecticut offer the 120-hour route?', a: 'Yes \u2014 live since 1 October 2025 under Public Act 25-36: a bachelor\u2019s degree with an accounting concentration plus two years of qualifying experience replaces the extra 30 credit hours.' },
        { q: 'What do Connecticut accountants earn?', a: 'BLS OEWS reports a May 2025 Connecticut median of $97,550 for Accountants and Auditors \u2014 the fourth-highest state median in the country, behind New York, New Jersey and Massachusetts.' },
        { q: 'How long is the exam credit window?', a: 'Thirty months rolling from your first score release.' },
        { q: 'What is the exam fee basis?', a: 'The national NASBA section fee \u2014 $268.59 per section from 4 July 2026 \u2014 plus Connecticut\u2019s application and registration charges.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Delaware board fees per its schedule',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 30 July 2025 (HB 143) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$95,020', p25: '$74,270', p75: '$120,450', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=DE' },
      recentChanges: [{ year: 2025, change: 'HB 143 took effect 30 July 2025, adding the bachelor\u2019s-plus-two-years pathway \u2014 one of the earliest adopters.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'How early did Delaware adopt the alternative pathway?', a: 'HB 143 went live 30 July 2025 \u2014 among the first wave \u2014 letting a bachelor\u2019s degree holder substitute two years of experience for the extra 30 credits.' },
        { q: 'What do Delaware accountants earn?', a: 'BLS OEWS reports a May 2025 Delaware median of $95,020 for Accountants and Auditors \u2014 well above the national median, boosted by the banking and corporate sector.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Delaware\u2019s own application charges.' },
        { q: 'Do I need a separate ethics exam in Delaware?', a: 'Most candidates take the AICPA ethics course ($250 members / $320 non-members, 90% pass); a handful of states run their own instead, and Delaware\u2019s board materials govern which applies.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); DC board fees per its schedule',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 the District had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$111,530', p25: '$83,050', p75: '$156,730', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=DC' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; the 30-month rolling credit window applies nationwide.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Is DC the best-paying place to be an accountant?', a: 'Yes by a wide margin \u2014 BLS OEWS reports a May 2025 DC median of $111,530 for Accountants and Auditors, roughly a third above the $83,680 national figure, reflecting the federal and professional-services market.' },
        { q: 'Does DC offer the 120-hour pathway?', a: 'Not as of October 2026 \u2014 the District remains in the 150-hour group.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus DC\u2019s own charges.' },
        { q: 'Which discipline choices exist?', a: 'BAR, ISC or TCP \u2014 identical fees, so pick by career track.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 DC wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Florida board fees per its schedule',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Florida had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,250', p25: '$62,730', p75: '$103,140', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=FL' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Florida remains a 150-hour jurisdiction.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Florida accept the 120-hour pathway?', a: 'Not as of October 2026 \u2014 Florida is among the jurisdictions still requiring 150 semester hours, which matters if you licensed elsewhere under the new route and plan to move permanently to Florida.' },
        { q: 'What do Florida accountants earn?', a: 'BLS OEWS reports a May 2025 Florida median of $79,250 for Accountants and Auditors \u2014 below the $83,680 national median.' },
        { q: 'How does mobility work for 120-hour CPAs moving to Florida?', a: 'The UAA\u2019s individual-based mobility covers most practice, but permanent relocation into a 150-hour state can trigger extra coursework \u2014 the patchwork is real in Florida\u2019s case.' },
        { q: 'How long is the exam credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'CPACredits \u2014 CPA alternative pathway 2026', url: 'https://www.cpacredits.com/resources/the-cpa-alternative-pathway-2026/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG', questions: 'Three core sections (CPA Evolution)', time: 'Each 4-hour appointment', pass: '75 scaled per section' },
          { name: 'Discipline: BAR, ISC or TCP (choose one)', questions: 'One discipline section', time: '4-hour appointment', pass: '75 scaled' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Georgia education evaluation application $93',
        pass: '75 scaled; all four sections within a rolling 30-month window',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (HB 148) a bachelor\u2019s degree in accounting plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$81,900', p25: '$64,830', p75: '$109,110', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=GA' },
      recentChanges: [{ year: 2026, change: 'HB 148 took effect 1 January 2026: a bachelor\u2019s in accounting plus two years of experience now qualifies \u2014 Georgia specifies an accounting major rather than a concentration.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What is distinctive about Georgia\u2019s 120-hour pathway?', a: 'It requires an actual accounting bachelor\u2019s degree (not just a concentration) plus two years of experience, effective 1 January 2026 under HB 148.' },
        { q: 'What does the Georgia education evaluation cost?', a: '$93 for the education evaluation application, with the four section fees at the national $268.59 rate from 4 July 2026.' },
        { q: 'What do Georgia accountants earn?', a: 'BLS OEWS reports a May 2025 Georgia median of $81,900 for Accountants and Auditors, slightly below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Hawaii board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 10 April 2025 (Act 014 / SB 1291) a bachelor\u2019s degree plus two years of experience, or a master\u2019s degree plus one year', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years (or one with a master\u2019s) on the alternative route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$74,500', p25: '$60,710', p75: '$92,870', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=HI' },
      recentChanges: [{ year: 2025, change: 'Act 014 (SB 1291) took effect 10 April 2025 \u2014 one of the first alternative-pathway laws in the country \u2014 adding a bachelor\u2019s-plus-two-years route and a master\u2019s-plus-one-year route.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'How early did Hawaii adopt the alternative pathway?', a: 'April 2025 \u2014 Act 014 (SB 1291) was among the first in the nation, offering both a bachelor\u2019s-plus-two-years route and a master\u2019s-plus-one-year route.' },
        { q: 'What do Hawaii accountants earn?', a: 'BLS OEWS reports a May 2025 Hawaii median of $74,500 for Accountants and Auditors \u2014 below the $83,680 national median despite the high cost of living.' },
        { q: 'How long is the exam credit window?', a: 'Thirty months rolling from your first score release.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Hawaii\u2019s own application charges.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Idaho board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 July 2026 (H0563) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$74,730', p25: '$61,150', p75: '$93,400', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ID' },
      recentChanges: [{ year: 2026, change: 'H0563 took effect 1 July 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Idaho\u2019s 120-hour route live?', a: 'Yes \u2014 H0563 took effect 1 July 2026, so a bachelor\u2019s degree with an accounting concentration plus two years of experience now qualifies.' },
        { q: 'What do Idaho accountants earn?', a: 'BLS OEWS reports a May 2025 Idaho median of $74,730 for Accountants and Auditors, below the national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Idaho\u2019s application charges.' },
        { q: 'How does Idaho treat ethics?', a: 'The AICPA ethics course ($250 members / $320 non-members, 90% pass) is the standard route; Idaho\u2019s board materials govern its current requirement.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Illinois charges the highest education-evaluation fee in the country at $200',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration; published trackers disagree on the status of an Illinois alternative pathway, so the 150-hour standard is the safe planning basis', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$80,230', p25: '$66,290', p75: '$102,270', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IL' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; the 30-month rolling credit window applies to Illinois candidates.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'What does the Illinois education evaluation cost?', a: '$200 \u2014 the highest evaluation fee of any jurisdiction, against the $96 standard in most NASBA CPA Examination Services states.' },
        { q: 'Is the 150-hour rule still the requirement in Illinois?', a: 'The 150-hour standard remains the planning basis \u2014 published trackers disagree on whether an Illinois alternative pathway has taken effect, so candidates should treat 150 hours as the operative rule.' },
        { q: 'What do Illinois accountants earn?', a: 'BLS OEWS reports a May 2025 Illinois median of $80,230 for Accountants and Auditors, a little below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Indiana board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Indiana had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$77,720', p25: '$62,370', p75: '$100,120', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IN' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Indiana remains a 150-hour jurisdiction.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Indiana have the 120-hour pathway?', a: 'Not as of October 2026 \u2014 Indiana stays in the 150-hour group.' },
        { q: 'What do Indiana accountants earn?', a: 'BLS OEWS reports a May 2025 Indiana median of $77,720 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Indiana\u2019s application and registration charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Iowa charges a $96 evaluation plus $106 per-section registration \u2014 roughly $1,594 total for four sections at first attempt',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 July 2026 a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$77,440', p25: '$62,090', p75: '$98,150', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IA' },
      recentChanges: [{ year: 2026, change: 'Iowa\u2019s alternative pathway took effect 1 July 2026.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'What does the Iowa exam cost in total?', a: 'About $1,594 at first attempt for four sections: a $96 evaluation, $106 per-section registration and the national $268.59 section fee.' },
        { q: 'Is the 120-hour route live in Iowa?', a: 'Yes \u2014 effective 1 July 2026, a bachelor\u2019s degree with an accounting concentration plus two years of experience replaces the extra 30 credits.' },
        { q: 'What do Iowa accountants earn?', a: 'BLS OEWS reports a May 2025 Iowa median of $77,440 for Accountants and Auditors, below the national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Kansas board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 23 April 2026 (HB 2573) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,000', p25: '$62,960', p75: '$100,650', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=KS' },
      recentChanges: [{ year: 2026, change: 'HB 2573 took effect 23 April 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Kansas\u2019s alternative pathway live?', a: 'Yes \u2014 HB 2573 took effect 23 April 2026, adding the bachelor\u2019s-plus-two-years route alongside the 150-hour standard.' },
        { q: 'What do Kansas accountants earn?', a: 'BLS OEWS reports a May 2025 Kansas median of $79,000 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Kansas\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=KS', checkedOn: '2026-10' }
      ]
    },
    KY: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Kentucky board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration; published trackers disagree on the status of a Kentucky alternative pathway, so the 150-hour standard is the safe planning basis', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$75,270', p25: '$61,040', p75: '$96,780', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=KY' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; the 30-month rolling credit window applies to Kentucky candidates.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Is the 150-hour rule still operative in Kentucky?', a: 'Published trackers disagree on whether a Kentucky alternative pathway has taken effect, so candidates should plan around the 150-hour standard.' },
        { q: 'What do Kentucky accountants earn?', a: 'BLS OEWS reports a May 2025 Kentucky median of $75,270 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Kentucky\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kentucky wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=KY', checkedOn: '2026-10' }
      ]
    },
    LA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Louisiana board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 2 June 2026 (HB 548) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$73,810', p25: '$59,960', p75: '$91,830', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=LA' },
      recentChanges: [{ year: 2026, change: 'HB 548 took effect 2 June 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Louisiana\u2019s 120-hour route live?', a: 'Yes \u2014 HB 548 took effect 2 June 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Louisiana accountants earn?', a: 'BLS OEWS reports a May 2025 Louisiana median of $73,810 for Accountants and Auditors, below the national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Louisiana\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Louisiana wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=LA', checkedOn: '2026-10' }
      ]
    },
    ME: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Maine board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Maine had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$77,480', p25: '$63,920', p75: '$98,700', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ME' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Maine remains a 150-hour jurisdiction.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Maine offer the 120-hour route?', a: 'Not as of October 2026 \u2014 Maine remains in the 150-hour group.' },
        { q: 'What do Maine accountants earn?', a: 'BLS OEWS reports a May 2025 Maine median of $77,480 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Maine\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maine wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ME', checkedOn: '2026-10' }
      ]
    },
    MD: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Maryland board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours; HB 643 adds the bachelor\u2019s-plus-two-years pathway effective 1 October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route from October 2026',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$89,370', p25: '$73,100', p75: '$116,420', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MD' },
      recentChanges: [{ year: 2026, change: 'HB 643 takes effect 1 October 2026, adding Maryland to the 120-hour pathway states just after the NASBA fee increase to $268.59 per section on 4 July.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'When does Maryland\u2019s alternative pathway start?', a: '1 October 2026 under HB 643 \u2014 from that date a bachelor\u2019s degree with an accounting concentration plus two years of experience qualifies.' },
        { q: 'What do Maryland accountants earn?', a: 'BLS OEWS reports a May 2025 Maryland median of $89,370 for Accountants and Auditors \u2014 well above the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Maryland\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maryland wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MD', checkedOn: '2026-10' }
      ]
    },
    MA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Massachusetts charges $148 per-section registration',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Massachusetts had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$99,460', p25: '$79,370', p75: '$128,560', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MA' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Massachusetts remains a 150-hour jurisdiction with a $148 per-section registration charge.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Massachusetts have the 120-hour pathway?', a: 'Not as of October 2026 \u2014 Massachusetts stays in the 150-hour group.' },
        { q: 'What do Massachusetts accountants earn?', a: 'BLS OEWS reports a May 2025 Massachusetts median of $99,460 for Accountants and Auditors \u2014 the third-highest state median, behind New York and New Jersey.' },
        { q: 'What does the Massachusetts exam cost?', a: 'A $148 per-section registration on top of the national $268.59 section fee \u2014 roughly $1,666 for four sections at first attempt.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Massachusetts wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MA', checkedOn: '2026-10' }
      ]
    },
    MI: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Michigan board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Michigan had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$78,820', p25: '$63,850', p75: '$101,030', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MI' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Michigan remains a 150-hour jurisdiction.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Michigan offer the 120-hour route?', a: 'Not as of October 2026 \u2014 Michigan remains in the 150-hour group.' },
        { q: 'What do Michigan accountants earn?', a: 'BLS OEWS reports a May 2025 Michigan median of $78,820 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Michigan\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Michigan wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MI', checkedOn: '2026-10' }
      ]
    },
    MN: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Minnesota board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (SF 3045, signed 23 May 2025) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$81,600', p25: '$68,190', p75: '$105,020', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MN' },
      recentChanges: [{ year: 2026, change: 'SF 3045 (signed 23 May 2025) took full effect 1 January 2026 \u2014 Minnesota was one of the earliest movers on the 120-hour pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'How early did Minnesota move on the 120-hour pathway?', a: 'Governor Walz signed SF 3045 on 23 May 2025, and the new routes took full effect 1 January 2026 \u2014 among the earliest in the country.' },
        { q: 'What do Minnesota accountants earn?', a: 'BLS OEWS reports a May 2025 Minnesota median of $81,600 for Accountants and Auditors \u2014 just below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Minnesota\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 alternative CPA licensure', url: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Minnesota wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MN', checkedOn: '2026-10' }
      ]
    },
    MS: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Mississippi board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 July 2026 (HB 1137) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$68,100', p25: '$57,550', p75: '$93,640', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MS' },
      recentChanges: [{ year: 2026, change: 'HB 1137 took effect 1 July 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Mississippi\u2019s alternative pathway live?', a: 'Yes \u2014 HB 1137 took effect 1 July 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Mississippi accountants earn?', a: 'BLS OEWS reports a May 2025 Mississippi median of $68,100 for Accountants and Auditors \u2014 the second-lowest state median, ahead of only Arkansas.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Mississippi\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Mississippi wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MS', checkedOn: '2026-10' }
      ]
    },
    MO: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Missouri board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Missouri had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$76,590', p25: '$60,370', p75: '$99,580', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MO' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; Missouri remains a 150-hour jurisdiction.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Does Missouri have the 120-hour pathway?', a: 'Not as of October 2026 \u2014 Missouri remains in the 150-hour group.' },
        { q: 'What do Missouri accountants earn?', a: 'BLS OEWS reports a May 2025 Missouri median of $76,590 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Missouri\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Missouri wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MO', checkedOn: '2026-10' }
      ]
    },
    MT: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Montana charges a $146 education evaluation',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (SB 166) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$75,810', p25: '$61,690', p75: '$97,320', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MT' },
      recentChanges: [{ year: 2026, change: 'SB 166 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is Montana\u2019s 120-hour route live?', a: 'Yes \u2014 SB 166 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What does the Montana evaluation cost?', a: '$146 \u2014 one of the higher education-evaluation fees, against the $96 standard in most CPAES states.' },
        { q: 'What do Montana accountants earn?', a: 'BLS OEWS reports a May 2025 Montana median of $75,810 for Accountants and Auditors, below the national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Montana wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=MT', checkedOn: '2026-10' }
      ]
    },
    NE: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Nebraska board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 17 July 2026 (LB 718) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$72,080', p25: '$59,990', p75: '$90,660', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NE' },
      recentChanges: [{ year: 2026, change: 'LB 718 took effect 17 July 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Nebraska\u2019s alternative pathway live?', a: 'Yes \u2014 LB 718 took effect 17 July 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Nebraska accountants earn?', a: 'BLS OEWS reports a May 2025 Nebraska median of $72,080 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Nebraska\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nebraska wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NE', checkedOn: '2026-10' }
      ]
    },
    NV: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Nevada board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (AB 510) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$81,600', p25: '$68,190', p75: '$103,640', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NV' },
      recentChanges: [{ year: 2026, change: 'AB 510 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is Nevada\u2019s 120-hour route live?', a: 'Yes \u2014 AB 510 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Nevada accountants earn?', a: 'BLS OEWS reports a May 2025 Nevada median of $81,600 for Accountants and Auditors, just below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Nevada\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nevada wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NV', checkedOn: '2026-10' }
      ]
    },
    NH: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); New Hampshire charges $171 per-section registration \u2014 among the highest in the country \u2014 putting four first-attempt sections near $1,854',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 22 April 2026 (HB 1259) a bachelor\u2019s degree with an accounting concentration plus two years of experience, with interstate mobility provisions attached', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$83,470', p25: '$71,360', p75: '$105,160', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NH' },
      recentChanges: [{ year: 2026, change: 'HB 1259 (Chapter 34) was signed 22 April 2026 and took effect immediately, pairing the 120-hour pathway with interstate mobility provisions.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What makes New Hampshire\u2019s pathway notable?', a: 'HB 1259 was signed 22 April 2026 and effective immediately, and it attaches interstate mobility provisions \u2014 directly addressing the biggest worry about 120-hour licences.' },
        { q: 'Why is the New Hampshire exam expensive?', a: 'A $171 per-section registration \u2014 among the highest anywhere \u2014 stacks onto the national $268.59 section fee, putting four sections near $1,854 at first attempt.' },
        { q: 'What do New Hampshire accountants earn?', a: 'BLS OEWS reports a May 2025 New Hampshire median of $83,470 for Accountants and Auditors \u2014 essentially at the national median of $83,680.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Hampshire wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NH', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); New Jersey board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 11 February 2026 (A5598) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$100,830', p25: '$80,320', p75: '$129,280', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NJ' },
      recentChanges: [{ year: 2026, change: 'A5598 took effect 11 February 2026, making the 120-hour route a permanent option in New Jersey.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is New Jersey\u2019s 120-hour route permanent?', a: 'Yes \u2014 A5598 took effect 11 February 2026 and made the bachelor\u2019s-plus-two-years route a permanent licensure option.' },
        { q: 'What do New Jersey accountants earn?', a: 'BLS OEWS reports a May 2025 New Jersey median of $100,830 for Accountants and Auditors \u2014 the second-highest state median in the country behind New York.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus New Jersey\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Jersey wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NJ', checkedOn: '2026-10' }
      ]
    },
    NM: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); New Mexico board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (HB 296) a bachelor\u2019s degree plus two years of experience, or a master\u2019s degree plus one year', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years (or one with a master\u2019s) on the alternative route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$78,580', p25: '$63,290', p75: '$99,090', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NM' },
      recentChanges: [{ year: 2026, change: 'HB 296 took effect 1 January 2026, adding both the bachelor\u2019s-plus-two-years and master\u2019s-plus-one-year routes.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What routes does New Mexico\u2019s pathway offer?', a: 'Two: a bachelor\u2019s degree plus two years of experience, or a master\u2019s degree plus one year \u2014 both effective 1 January 2026 under HB 296.' },
        { q: 'What do New Mexico accountants earn?', a: 'BLS OEWS reports a May 2025 New Mexico median of $78,580 for Accountants and Auditors, below the national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus New Mexico\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Mexico wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NM', checkedOn: '2026-10' }
      ]
    },
    NY: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); New York board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since late 2025 (Assembly Bill 7613, signed November 2025) a bachelor\u2019s-degree route with added experience opening for 2026 candidates', sourceUrl: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route' },
      experience: 'One year on the 150-hour route; the alternative route swaps the extra 30 credits for additional verified experience',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$102,640', p25: '$79,760', p75: '$134,820', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NY' },
      recentChanges: [{ year: 2025, change: 'Assembly Bill 7613 was signed in November 2025, opening the alternative route for New York candidates in 2026.', sourceUrl: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route' }],
      stateFaqs: [
        { q: 'Is New York still a 150-hour state?', a: 'Not only \u2014 AB 7613 (signed November 2025) opened an alternative route for 2026 candidates, while the 150-hour pathway remains available.' },
        { q: 'Is New York the best-paying state for accountants?', a: 'Yes \u2014 BLS OEWS reports a May 2025 New York median of $102,640 for Accountants and Auditors, the highest in the country and about 23% above the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus New York\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 alternative CPA licensure', url: 'https://legalclarity.org/alternative-cpa-licensure-the-120-hour-route', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New York wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NY', checkedOn: '2026-10' }
      ]
    },
    NC: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); North Carolina board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (SB 321) a bachelor\u2019s degree with an accounting concentration plus two years of experience; North Carolina additionally requires an eight-hour course on its own accountancy statutes and rules', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$82,050', p25: '$65,120', p75: '$108,090', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NC' },
      recentChanges: [{ year: 2026, change: 'SB 321 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is North Carolina\u2019s 120-hour route live?', a: 'Yes \u2014 SB 321 took effect 1 January 2026. North Carolina also keeps its distinctive eight-hour course on state accountancy statutes and rules alongside the exam requirements.' },
        { q: 'What do North Carolina accountants earn?', a: 'BLS OEWS reports a May 2025 North Carolina median of $82,050 for Accountants and Auditors \u2014 just under the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus North Carolina\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 CPA licensing requirements', url: 'https://legalclarity.org/certified-public-accountant-requirements-and-licensing', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Carolina wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=NC', checkedOn: '2026-10' }
      ]
    },
    ND: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); North Dakota board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 North Dakota had not enacted a 120-hour alternative as of October 2026, with pathway legislation signalled for 2027', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$75,730', p25: '$60,960', p75: '$95,780', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ND' },
      recentChanges: [{ year: 2026, change: 'North Dakota signalled new pathway legislation for 2027; the 150-hour standard remains operative.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Does North Dakota have the 120-hour pathway?', a: 'Not yet \u2014 legislation has been signalled for 2027, and the 150-hour standard applies as of October 2026.' },
        { q: 'What do North Dakota accountants earn?', a: 'BLS OEWS reports a May 2025 North Dakota median of $75,730 for Accountants and Auditors, below the national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus North Dakota\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Dakota wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=ND', checkedOn: '2026-10' }
      ]
    },
    OH: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Ohio board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (HB 238) a bachelor\u2019s degree with accounting coursework plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,320', p25: '$63,020', p75: '$102,230', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OH' },
      recentChanges: [{ year: 2026, change: 'HB 238 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway \u2014 Ohio was one of the early large-state adopters.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Did Ohio drop the 150-hour rule?', a: 'It added an alternative: HB 238, effective 1 January 2026, lets a bachelor\u2019s degree with accounting coursework plus two years of experience replace the extra 30 credits.' },
        { q: 'What do Ohio accountants earn?', a: 'BLS OEWS reports a May 2025 Ohio median of $79,320 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Ohio\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Ohio wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OH', checkedOn: '2026-10' }
      ]
    },
    OK: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric (direct-to-board in Oklahoma)',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Oklahoma charges a $90 qualification fee plus $75 per-section application, with no standard registration charge',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Oklahoma had not enacted a 120-hour alternative as of October 2026', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,370', p25: '$59,990', p75: '$104,240', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OK' },
      recentChanges: [{ year: 2026, change: 'Oklahoma\u2019s fee structure (a $90 qualification fee plus $75 per-section application) sits alongside the national $268.59 section fee from 4 July 2026.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'What does the Oklahoma exam cost?', a: 'About $1,464 for four sections at first attempt: a $90 qualification fee, $75 per-section application fees and the national $268.59 section fee.' },
        { q: 'Does Oklahoma have the 120-hour pathway?', a: 'Not as of October 2026 \u2014 Oklahoma remains in the 150-hour group.' },
        { q: 'What do Oklahoma accountants earn?', a: 'BLS OEWS reports a May 2025 Oklahoma median of $79,370 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oklahoma wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OK', checkedOn: '2026-10' }
      ]
    },
    OR: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Oregon board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (SB 797) a bachelor\u2019s degree plus two years of experience, or a master\u2019s degree plus one year', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years (or one with a master\u2019s) on the alternative route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$85,800', p25: '$74,350', p75: '$104,150', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OR' },
      recentChanges: [{ year: 2026, change: 'SB 797 took effect 1 January 2026, adding both the bachelor\u2019s-plus-two-years and master\u2019s-plus-one-year routes.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What routes does Oregon\u2019s pathway offer?', a: 'SB 797, effective 1 January 2026, offers a bachelor\u2019s-plus-two-years route and a master\u2019s-plus-one-year route alongside the 150-hour standard.' },
        { q: 'What do Oregon accountants earn?', a: 'BLS OEWS reports a May 2025 Oregon median of $85,800 for Accountants and Auditors \u2014 above the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Oregon\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oregon wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=OR', checkedOn: '2026-10' }
      ]
    },
    PA: {
      agencyUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/AccountancyandAuditing/Pages/default.aspx',
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric, applied for through the NASBA CPA Portal',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Pennsylvania application $93 + $96 per-section registration; initial licence $65',
        sourceUrl: 'https://www.accounting.com/states/pennsylvania-cpa'
      },
      education: { hours: 'Traditional 150 semester hours with at least 24 credits in accounting subjects from a board-approved institution, or since 30 June 2025 (SB 719) a bachelor\u2019s degree with an accounting concentration plus two years of experience; candidates file a Moral Character Reference Form signed by three references (one CPA, two non-CPAs, known three years, Pennsylvania residents)', sourceUrl: 'https://www.accounting.com/states/pennsylvania-cpa' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route; no US citizenship or Social Security number required',
      fees: [
        { item: 'Exam application (education evaluation)', fee: '$93', sourceUrl: 'https://www.accounting.com/states/pennsylvania-cpa' },
        { item: 'Per-section registration', fee: '$96', sourceUrl: 'https://300hours.com/cpa-exam-cost' },
        { item: 'Initial licence', fee: '$65', sourceUrl: 'https://www.accounting.com/states/pennsylvania-cpa' }
      ],
      renewal: { cycle: 'Biennial, expiring 31 December of odd-numbered years', ce: '80 hours per biennium (4 in ethics; 24 in accounting or auditing if you perform attestation services; max 40 self-study; max 40 as teacher/discussion leader)', fee: '$100', sourceUrl: 'https://www.accounting.com/states/pennsylvania-cpa' },
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,000', p25: '$62,330', p75: '$99,990', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=PA' },
      recentChanges: [{ year: 2025, change: 'SB 719 took effect 30 June 2025, adding the bachelor\u2019s-plus-two-years pathway \u2014 Pennsylvania was in the first wave of large-state adopters.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What is unusual about the Pennsylvania character requirement?', a: 'A Moral Character Reference Form needs three references \u2014 one CPA and two non-CPAs, all Pennsylvania residents who have known you at least three years and none related to you.' },
        { q: 'What CPE does Pennsylvania require?', a: '80 hours per two-year cycle, including 4 hours of ethics; CPAs performing attestation services need 24 hours in accounting or auditing; no more than 40 hours from self-study or teaching each.' },
        { q: 'What do Pennsylvania accountants earn?', a: 'BLS OEWS reports a May 2025 Pennsylvania median of $79,000 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'How does Pennsylvania licensing cost break down?', a: 'A $93 exam application, $96 per-section registration, the national $268.59 section fee, a $65 initial licence and $100 biennial renewals.' }
      ],
      sources: [
        { label: 'Accounting.com \u2014 Pennsylvania CPA requirements', url: 'https://www.accounting.com/states/pennsylvania-cpa', checkedOn: '2026-10' },
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Pennsylvania wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=PA', checkedOn: '2026-10' }
      ]
    },
    RI: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Rhode Island board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 23 June 2026 (H8128) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$95,820', p25: '$76,400', p75: '$120,280', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=RI' },
      recentChanges: [{ year: 2026, change: 'H8128 took effect 23 June 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Rhode Island\u2019s 120-hour route live?', a: 'Yes \u2014 H8128 took effect 23 June 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Rhode Island accountants earn?', a: 'BLS OEWS reports a May 2025 Rhode Island median of $95,820 for Accountants and Auditors \u2014 well above the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Rhode Island\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Rhode Island wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=RI', checkedOn: '2026-10' }
      ]
    },
    SC: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); South Carolina board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 30 June 2025 (SB 176) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$76,560', p25: '$62,100', p75: '$99,080', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=SC' },
      recentChanges: [{ year: 2025, change: 'SB 176 took effect 30 June 2025, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is South Carolina\u2019s alternative pathway live?', a: 'Yes \u2014 SB 176 took effect 30 June 2025, among the earlier adopters.' },
        { q: 'What do South Carolina accountants earn?', a: 'BLS OEWS reports a May 2025 South Carolina median of $76,560 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus South Carolina\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Carolina wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=SC', checkedOn: '2026-10' }
      ]
    },
    SD: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); South Dakota charges a $40 board processing fee per section instead of an education-evaluation fee \u2014 about $1,234 total for four sections at first attempt',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 2 March 2026 (HB 1035) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$78,880', p25: '$66,970', p75: '$97,920', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=SD' },
      recentChanges: [{ year: 2026, change: 'HB 1035 took effect 2 March 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Why is the South Dakota exam cheap?', a: 'There is no education-evaluation fee \u2014 just a $40 board processing fee per section on top of the national $268.59, putting four sections around $1,234 at first attempt, one of the lowest totals anywhere.' },
        { q: 'Is South Dakota\u2019s 120-hour route live?', a: 'Yes \u2014 HB 1035 took effect 2 March 2026.' },
        { q: 'What do South Dakota accountants earn?', a: 'BLS OEWS reports a May 2025 South Dakota median of $78,880 for Accountants and Auditors, below the national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Dakota wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=SD', checkedOn: '2026-10' }
      ]
    },
    TN: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Tennessee board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (SB 1316) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$76,840', p25: '$62,430', p75: '$94,790', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=TN' },
      recentChanges: [{ year: 2026, change: 'SB 1316 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is Tennessee\u2019s 120-hour route live?', a: 'Yes \u2014 SB 1316 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Tennessee accountants earn?', a: 'BLS OEWS reports a May 2025 Tennessee median of $76,840 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Tennessee\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Tennessee wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=TN', checkedOn: '2026-10' }
      ]
    },
    TX: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (Texas\u2019 section fee changes on 1 August 2026; four sections total $1,154.36 under the current schedule); Texas charges a $20 Application of Intent \u2014 the lowest in the country \u2014 plus $15 per-section registration',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Two routes: the traditional 150 semester hours, or Pathway B under SB 262 (enacted May 2025) \u2014 a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on Pathway B',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$80,920', p25: '$65,560', p75: '$103,760', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=TX' },
      recentChanges: [{ year: 2025, change: 'SB 262 (May 2025) created Texas Pathway B \u2014 120 hours plus two years of experience; Texas\u2019 section-fee schedule changes on 1 August 2026.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Why is Texas the cheapest state to apply from?', a: 'A $20 Application of Intent and $15 per-section registration \u2014 the lowest administrative fees in the country \u2014 keep the four-section total near $1,154 under the current schedule.' },
        { q: 'What is Texas Pathway B?', a: 'Under SB 262 (May 2025): 120 semester hours plus two years of qualifying experience, an alternative to the 150-hour route.' },
        { q: 'What do Texas accountants earn?', a: 'BLS OEWS reports a May 2025 Texas median of $80,920 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Texas wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=TX', checkedOn: '2026-10' }
      ]
    },
    UT: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Utah board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 July 2026 a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,990', p25: '$61,910', p75: '$104,140', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=UT' },
      recentChanges: [{ year: 2026, change: 'Utah\u2019s alternative pathway took effect 1 July 2026.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Utah\u2019s 120-hour route live?', a: 'Yes \u2014 effective 1 July 2026, a bachelor\u2019s degree with an accounting concentration plus two years of experience qualifies.' },
        { q: 'What do Utah accountants earn?', a: 'BLS OEWS reports a May 2025 Utah median of $79,990 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Utah\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Utah wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=UT', checkedOn: '2026-10' }
      ]
    },
    VT: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Vermont board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 8 June 2026 (H.588) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$78,890', p25: '$66,190', p75: '$97,100', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=VT' },
      recentChanges: [{ year: 2026, change: 'H.588 took effect 8 June 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Is Vermont\u2019s alternative pathway live?', a: 'Yes \u2014 H.588 took effect 8 June 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Vermont accountants earn?', a: 'BLS OEWS reports a May 2025 Vermont median of $78,890 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Vermont\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Vermont wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=VT', checkedOn: '2026-10' }
      ]
    },
    VA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Virginia board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Traditional 150 semester hours, or since 1 January 2026 (HB 2042 / SB 1042) a bachelor\u2019s degree with an accounting concentration plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; two years on the 120-hour route',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$93,290', p25: '$74,250', p75: '$123,510', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=VA' },
      recentChanges: [{ year: 2026, change: 'HB 2042 / SB 1042 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years pathway.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'Is Virginia\u2019s 120-hour route live?', a: 'Yes \u2014 HB 2042 / SB 1042 took effect 1 January 2026, adding the bachelor\u2019s-plus-two-years route.' },
        { q: 'What do Virginia accountants earn?', a: 'BLS OEWS reports a May 2025 Virginia median of $93,290 for Accountants and Auditors \u2014 well above the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Virginia\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Virginia wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=VA', checkedOn: '2026-10' }
      ]
    },
    WA: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Washington board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Two routes: the traditional 150 semester hours (which sunsets 31 December 2035), or since 20 November 2025 a board-rule pathway (WAC 4-30-060 / WSR 25-21-108) \u2014 a bachelor\u2019s degree with an accounting concentration plus 24 months (4,000 hours) of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year on the 150-hour route; 4,000 hours over 24 months on the rule-based pathway',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$96,550', p25: '$79,180', p75: '$122,480', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WA' },
      recentChanges: [{ year: 2025, change: 'Washington\u2019s board adopted the alternative pathway administratively (WAC 4-30-060 / WSR 25-21-108, effective 20 November 2025) without waiting for the legislature, and set the 150-hour pathway to sunset 31 December 2035.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'How did Washington add its pathway without a new law?', a: 'Through board rulemaking \u2014 WAC 4-30-060 (WSR 25-21-108), effective 20 November 2025 \u2014 requiring 24 months / 4,000 hours of experience on the alternative route.' },
        { q: 'What happens to Washington\u2019s 150-hour route?', a: 'It sunsets on 31 December 2035 \u2014 Washington is the only state with a scheduled end date for the traditional pathway.' },
        { q: 'What do Washington accountants earn?', a: 'BLS OEWS reports a May 2025 Washington median of $96,550 for Accountants and Auditors \u2014 well above the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Washington wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WA', checkedOn: '2026-10' }
      ]
    },
    WV: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); West Virginia\u2019s $40 intent-to-sit fee is among the lowest registration charges',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: 'Three pathways since 24 May 2026 (HB 4088, signed 3 March 2026): bachelor\u2019s plus 30 credits plus one year of experience, a graduate degree plus one year, or a bachelor\u2019s plus two years of experience', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' },
      experience: 'One year or two years depending on the pathway chosen',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$73,320', p25: '$59,260', p75: '$91,660', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WV' },
      recentChanges: [{ year: 2026, change: 'HB 4088 (signed 3 March 2026, effective 24 May 2026) created three licensure pathways, the most granular structure of any state.', sourceUrl: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026' }],
      stateFaqs: [
        { q: 'What makes West Virginia\u2019s pathway structure distinctive?', a: 'Three formal routes since 24 May 2026: bachelor\u2019s + 30 credits + one year, graduate degree + one year, or bachelor\u2019s + two years of experience.' },
        { q: 'What does the West Virginia exam cost?', a: 'A $40 intent-to-sit fee plus the national $268.59 section fee \u2014 the $40 charge is among the lowest registration fees anywhere.' },
        { q: 'What do West Virginia accountants earn?', a: 'BLS OEWS reports a May 2025 West Virginia median of $73,320 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: 'Atlas CPA Index \u2014 120-credit pathway tracker (31 Aug 2026)', url: 'https://atlascpaindex.com/news/120-credit-cpa-pathway-2026', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 West Virginia wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WV', checkedOn: '2026-10' }
      ]
    },
    WI: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Wisconsin board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration; published trackers disagree on the status of a Wisconsin alternative pathway, so the 150-hour standard is the safe planning basis. Wisconsin administers its own state-specific ethics exam', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$79,400', p25: '$65,000', p75: '$100,800', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WI' },
      recentChanges: [{ year: 2026, change: 'The NASBA section fee rose to $268.59 on 4 July 2026; the 30-month rolling credit window applies to Wisconsin candidates.', sourceUrl: 'https://300hours.com/cpa-exam-cost' }],
      stateFaqs: [
        { q: 'Is the 150-hour rule still operative in Wisconsin?', a: 'Published trackers disagree on whether a Wisconsin alternative pathway has taken effect, so candidates should plan around the 150-hour standard.' },
        { q: 'Does Wisconsin have its own ethics exam?', a: 'Yes \u2014 Wisconsin is one of the states administering a state-specific ethics exam rather than accepting only the AICPA course.' },
        { q: 'What do Wisconsin accountants earn?', a: 'BLS OEWS reports a May 2025 Wisconsin median of $79,400 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 CPA licensing requirements', url: 'https://legalclarity.org/certified-public-accountant-requirements-and-licensing', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wisconsin wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WI', checkedOn: '2026-10' }
      ]
    },
    WY: {
      exam: {
        vendor: 'AICPA/NASBA Uniform CPA Exam at Prometric',
        parts: [
          { name: 'Core: AUD, FAR, REG + Discipline: BAR, ISC or TCP', questions: 'Three core sections plus one chosen discipline', time: 'Each 4-hour appointment', pass: '75 scaled per section; all four within a rolling 30-month window' }
        ],
        fee: '$268.59 per section from 4 July 2026 (four sections $1,074.36); Wyoming board fees per its schedule',
        sourceUrl: 'https://300hours.com/cpa-exam-cost'
      },
      education: { hours: '150 semester hours with an accounting concentration \u2014 Wyoming had not enacted a 120-hour alternative as of October 2026, with pathway legislation signalled for 2027', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' },
      experience: 'One year (about 2,000 hours) verified by a licensed CPA',
      wages: { soc: '13-2011', socName: 'Accountants and Auditors', median: '$77,620', p25: '$60,470', p75: '$100,560', national: '$83,680', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WY' },
      recentChanges: [{ year: 2026, change: 'Wyoming signalled new pathway legislation for 2027; the 150-hour standard remains operative, and the NASBA section fee rose to $268.59 on 4 July 2026.', sourceUrl: 'https://300hours.com/cpa-requirements-by-state/' }],
      stateFaqs: [
        { q: 'Does Wyoming have the 120-hour pathway?', a: 'Not yet \u2014 legislation has been signalled for 2027, and the 150-hour standard applies as of October 2026.' },
        { q: 'What do Wyoming accountants earn?', a: 'BLS OEWS reports a May 2025 Wyoming median of $77,620 for Accountants and Auditors, below the $83,680 national median.' },
        { q: 'What is the exam fee basis?', a: 'The national $268.59 per section from 4 July 2026, plus Wyoming\u2019s application charges.' },
        { q: 'How long is the credit window?', a: 'Thirty months rolling from your first score release.' }
      ],
      sources: [
        { label: '300Hours \u2014 CPA requirements by state', url: 'https://300hours.com/cpa-requirements-by-state/', checkedOn: '2026-10' },
        { label: '300Hours \u2014 CPA exam cost 2026', url: 'https://300hours.com/cpa-exam-cost', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wyoming wages, SOC 13-2011', url: 'https://www.onetonline.org/link/localwages/13-2011.00?st=WY', checkedOn: '2026-10' }
      ]
    }
  }
};
