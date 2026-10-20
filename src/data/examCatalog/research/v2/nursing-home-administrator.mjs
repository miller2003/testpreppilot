// v2 per-state research increment — nursing-home-administrator
// Compiled 2026-10-20. Sources: NAB exam information (nabweb.connectedcommunity.org),
// state board pages (URLs below), PMC "Nursing Home Administrators Licensure
// Requirements Summary" (J Public Health Manag Pract, PMC7837745 — cross-checked
// against current board pages for AL/AR/CA/NJ/PA/TX/VT/WA/WV/WY), CDPH NHAP fee
// list (eff. 2026-07-01), Texas HHSC NFA FAQ, and BLS OEWS May 2025 state wages
// via O*NET OnLine local wage tables (SOC 11-9111, Medical and Health Services
// Managers — the SOC under which BLS reports nursing home administrators).
// National exam facts verified on NAB's Exam Information page 2026-10-20:
//   CORE 100 scored + 25 pretest / 150 min; NHA LOS 60 scored + 15 pretest / 90 min;
//   CORE+NHA combo $480 effective 1 Feb 2026; delivered at Pearson VUE;
//   from 1 Jan 2026 max 4 attempts per exam per 1 Jul–30 Jun cycle.

export default {
  key: 'nursing-home-administrator',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      agencyUrl: 'http://www.alboenha.alabama.gov/qualifications.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE test centres; Alabama state examination set by the board',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Alabama state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); state exam fees per the board',
        sourceUrl: 'http://www.alboenha.alabama.gov/qualifications.aspx'
      },
      education: {
        hours: '1,000-hour AIT with a bachelor\u2019s degree; 2,000-hour AIT with an associate degree plus four years of supervisory nursing-home work; 500-hour internship with a bachelor\u2019s in health care administration; 200-hour internship with a master\u2019s in health care or hospital administration',
        sourceUrl: 'http://www.alboenha.alabama.gov/qualifications.aspx'
      },
      eligibility: { minAge: 19, education: 'High school diploma or associate degree minimum, scaling with the AIT length', other: 'US citizen or declared intent; good moral character' },
      renewal: { cycle: 'Annual', ce: '24 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$97,790', p25: '$79,500', p75: '$118,440', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AL' },
      recentChanges: [{ year: 2026, change: 'NAB capped every candidate at four attempts per exam per 1 July\u201330 June cycle and raised the CORE+NHA combined fee to $480 on 1 February 2026.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How long is the Alabama AIT internship?', a: 'It depends on your education. A bachelor\u2019s degree requires a 1,000-hour AIT; an associate degree requires 2,000 hours plus four years of supervisory work in a licensed nursing home. A bachelor\u2019s majoring in health care administration drops the internship to 500 hours, and a master\u2019s in health care or hospital administration to 200 hours.' },
        { q: 'Does Alabama have its own state exam beyond the NAB?', a: 'Yes. Alabama requires the NAB CORE and NHA Line of Service exams plus an Alabama state examination set by the Board of Examiners of Nursing Home Administrators.' },
        { q: 'How old do I have to be to hold an Alabama NHA licence?', a: 'Nineteen. Alabama\u2019s minimum age is among the lowest in the country, and candidates also need to be US citizens or have declared intentions of becoming one.' },
        { q: 'What do nursing home administrators earn in Alabama?', a: 'BLS OEWS reports a median of $97,790 for Medical and Health Services Managers \u2014 the SOC that includes nursing home administrators \u2014 in Alabama as of May 2025, with the middle half earning roughly $79,500 to $118,440. The national median is $123,860.' }
      ],
      sources: [
        { label: 'Alabama Board of Examiners of Nursing Home Administrators \u2014 Qualifications', url: 'http://www.alboenha.alabama.gov/qualifications.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      agencyUrl: 'http://dhss.alaska.gov/dhcs/Pages/hflc/fac_LTC.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE test centres',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '1,000-hour AIT plus at least 12 months of health care facility management experience',
        sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/'
      },
      eligibility: { education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: 'No state CE mandate recorded in the published requirements summary', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$132,240', p25: '$105,430', p75: '$173,840', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AK' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally on 1 January and 1 February 2026 respectively.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What does Alaska require beyond the NAB exams?', a: 'A bachelor\u2019s degree, a 1,000-hour administrator-in-training programme, and at least 12 months of health care facility management experience on top of the AIT. Alaska licenses by credentials for administrators already licensed in other states.' },
        { q: 'Does Alaska set its own licensing exam?', a: 'No. Alaska relies on the two NAB examinations \u2014 CORE (125 questions, 150 minutes) and the NHA Line of Service exam (75 questions, 90 minutes) \u2014 without an additional state law test.' },
        { q: 'Who approves my AIT in Alaska?', a: 'The Alaska Board of Nursing Home Administrators within the Division of Corporations, Business and Professional Licensing must approve the training and the preceptor before hours count. Preceptors are expected to cover NAB activities and use NAB forms.' },
        { q: 'What is the pay outlook in Alaska?', a: 'BLS OEWS puts the Alaska median for Medical and Health Services Managers at $132,240 (May 2025) \u2014 well above the $123,860 national median \u2014 reflecting the small, high-cost market.' }
      ],
      sources: [
        { label: 'Alaska CBPL \u2014 Nursing Home Administrators', url: 'https://www.commerce.alaska.gov/web/cbpl/professionallicensing/nursinghomeadministrators.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      agencyUrl: 'https://nciaboard.az.gov/',
      exam: {
        vendor: 'NAB at Pearson VUE test centres; Arizona jurisprudence component set by the board',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Arizona state/jurisprudence examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); board fees per the schedule effective 6 May 2024',
        sourceUrl: 'https://nciaboard.az.gov/'
      },
      education: {
        hours: '1,000-hour AIT (per the published 51-state requirements summary)',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'Bachelor\u2019s degree' },
      background: { method: 'FBI fingerprint background check through AZDPS', sourceUrl: 'https://nciaboard.az.gov/' },
      renewal: { cycle: 'Biennial', ce: '50 hours per biennium, tracked through CE Broker', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      application: { portal: 'NCIA Board online application portal', portalUrl: 'https://nciaboard.az.gov/', steps: ['Create one board portal account (duplicate profiles delay review)', 'Submit the administrator licence application', 'Complete the FBI fingerprint background check through AZDPS', 'Schedule exams after board approval'], sourceUrl: 'https://nciaboard.az.gov/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$128,850', p25: '$100,640', p75: '$166,190', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AZ' },
      recentChanges: [
        { year: 2025, change: 'Effective 1 August 2025, every nursing care institution administrator applicant must submit fingerprints for an FBI background check; AZDPS\u2019s electronic fingerprint system also scheduled a 2\u20133 week changeover on 1 November 2026.', sourceUrl: 'https://nciaboard.az.gov/' },
        { year: 2024, change: 'A new board fee schedule took effect 6 May 2024 (Arizona Secretary of State Register, Vol. 29, Issue 49).', sourceUrl: 'https://nciaboard.az.gov/' }
      ],
      localNuance: 'Arizona licenses Nursing Care Institution Administrators and, separately, Assisted Living Facility Managers through the same NCIA Board; licences and certificates expire 30 days after the holder\u2019s birthday.',
      stateFaqs: [
        { q: 'What is the Arizona board called?', a: 'The Board of Examiners of Nursing Care Institution Administrators and Assisted Living Facility Managers (NCIA Board) \u2014 one board covering both the nursing-home administrator licence and the assisted living manager certificate.' },
        { q: 'Do I need fingerprints in Arizona?', a: 'Yes. Since 1 August 2025 every administrator applicant must complete an FBI fingerprint background check through the Arizona Department of Public Safety under A.R.S. \u00a7\u00a7 36-446.03 and 41-1750.' },
        { q: 'How much continuing education does Arizona require?', a: '50 hours per biennial renewal cycle. The NCIA Board partners with CE Broker, so providers and licence holders track hours there.' },
        { q: 'When does my Arizona administrator licence expire?', a: '30 days after your birthday \u2014 Arizona anchors expiry to the birth date rather than a fixed calendar date, so new licensees\u2019 first cycle varies.' },
        { q: 'What do NHA-adjacent managers earn in Arizona?', a: 'The BLS OEWS May 2025 median for Medical and Health Services Managers in Arizona is $128,850, above the $123,860 national median.' }
      ],
      sources: [
        { label: 'Arizona NCIA Board', url: 'https://nciaboard.az.gov/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    AR: {
      agencyUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/',
      exam: {
        vendor: 'NAB at Pearson VUE; Arkansas state exam held in person at the DHS building in Little Rock',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score of 113' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score of 113' },
          { name: 'Arkansas state licensure exam', questions: 'Board-set on the Arkansas nursing home rules', time: 'In-person sitting', pass: '70' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); Arkansas application fees per DHS',
        sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/'
      },
      education: {
        hours: 'No standard AIT for candidates meeting the qualification table; candidates short on credentials complete the 640-hour Arkansas Health Care Foundation AIT (facility training plus classroom work)',
        breakdown: 'Minimum qualification: associate degree or higher, 3\u201312 months of nursing home experience scaled to the degree, work experience or coursework in five core areas (accounting, management, personnel, writing, resident care)',
        sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/'
      },
      eligibility: { education: 'Associate degree or higher; experience in a nursing home (3 months to 1 year depending on degree); criminal record check' },
      fees: [{ item: 'Licence renewal (annual, due 1 July)', fee: '$100', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/' }, { item: 'Late renewal after 1 July', fee: '$50 additional', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/' }],
      renewal: { cycle: 'Annual (expires 1 July; lapse after 1 September)', ce: '20 clock hours per licence year, or 6 semester hours in NAB-domain coursework', sourceUrl: 'https://humanservices.arkansas.gov/wp-content/uploads/NHA-Rules-010120.pdf' },
      application: { portal: 'Long-Term Care Facility Administrator QuickBase', portalUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/', steps: ['Submit the qualification review through QuickBase', 'After approval, register for the NAB exams (both parts required before the state exam)', 'Sit the Arkansas state exam in person in Little Rock', 'Get licensed within 18 months of application approval'], processingTime: 'File confirmation in 3\u20137 days; committee review thereafter', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$94,340', p25: '$76,140', p75: '$114,990', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AR' },
      recentChanges: [
        { year: 2024, change: 'The Rules for Nursing Homes were updated effective 1 November 2024.', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/' },
        { year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }
      ],
      stateFaqs: [
        { q: 'Does Arkansas require both a national and a state exam?', a: 'Yes. After DHS approves your application you take the NAB CORE and NHA Line of Service exams (scaled passing score 113), then an in-person Arkansas state exam on the state\u2019s nursing home rules with a 70 pass mark, held at the DHS building in Little Rock.' },
        { q: 'What if my degree and experience fall short?', a: 'You can enrol in the Arkansas Health Care Foundation\u2019s 640-hour Administrator-in-Training programme \u2014 facility-based training under a preceptor plus classroom courses \u2014 designed for candidates who have either extensive nursing home experience without a degree, or a degree without experience.' },
        { q: 'How does Arkansas licence renewal work?', a: 'Renew annually by 1 July with a $100 fee and 20 hours of approved continuing education. Renewals postmarked after 1 July add a $50 late charge, and a licence not renewed by 1 September expires on 2 September.' },
        { q: 'How long is the Arkansas licensure window?', a: 'You have 18 months from the date DHS approves your application to pass both exams and become licensed.' },
        { q: 'What do administrators earn in Arkansas?', a: 'BLS OEWS reports an Arkansas median of $94,340 for Medical and Health Services Managers (May 2025) \u2014 the lowest state figure in the country alongside Mississippi, against a $123,860 national median.' }
      ],
      sources: [
        { label: 'Arkansas DHS \u2014 NHA Licensing', url: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/office-of-long-term-care/nursing-home-administrator-licensing/', checkedOn: '2026-10' },
        { label: 'Arkansas Rules for Licensure of Nursing Home Administrators', url: 'https://humanservices.arkansas.gov/wp-content/uploads/NHA-Rules-010120.pdf', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CA: {
      agencyUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHA.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE for the national parts; California written/state examination under CDPH\u2019s NAB contract',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'California state examination', questions: 'CDPH-set', time: 'CDPH-set', pass: 'CDPH-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026), paid to NAB after the NHAP application and initial licensing fee are on file',
        sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx'
      },
      education: {
        hours: 'Bachelor\u2019s degree plus a 1,000-hour board-approved AIT; alternate routes include a master\u2019s with a 480-hour skilled-nursing internship, or 10 years of qualifying nursing-home experience (5 supervisory) combined with college units and a 1,000-hour AIT',
        sourceUrl: 'http://www.labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=996'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree or qualifying experience route; official transcript required (Health and Safety Code \u00a7 1416.22)' },
      fees: [
        { item: 'AIT programme application', fee: '$448', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
        { item: 'NHA licensing exam application (after AIT)', fee: '$936', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
        { item: 'In-person state examination', fee: '$634', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
        { item: 'Initial licence fee (FY 2025-26 schedule)', fee: '$814', sourceUrl: 'https://www.CDPH.CA.GOV/Programs/CHCQ/LCP/CDPH%20Document%20Library/25-26_Annual_Fee_Report.pdf' },
        { item: 'Provisional licence', fee: '$2,193', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
        { item: 'Reciprocity licensure application', fee: '$188', sourceUrl: 'https://www.CDPH.CA.GOV/Programs/CHCQ/LCP/CDPH%20Document%20Library/25-26_Annual_Fee_Report.pdf' }
      ],
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', fee: '$830 timely ($1,022 delinquent) from 1 July 2026', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
      application: { portal: 'CDPH Nursing Home Administrator Program (NHAP) paper applications; checks payable to NHAP', steps: ['Submit the NHAP application and initial licensing fee', 'For the online national exam route, apply to NAB once on file with NHAP', 'Complete the AIT or qualify via the experience routes', 'Sit the California state examination'], processingTime: 'AIT and examination applications 30\u201345 working days; reciprocity about 30 working days', sourceUrl: 'http://www.labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=996' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$141,480', p25: '$98,470', p75: '$205,390', employment: 75090, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CA' },
      recentChanges: [
        { year: 2026, change: 'NHAP fee list effective 1 July 2026 sets AIT at $448, licensing-exam application at $936, in-person state exam at $634, provisional licence at $2,193 and biennial renewal at $830.', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx' },
        { year: 2025, change: 'CDPH removed its own CE provider/course approval fees because NAB now performs those services under contract, keeping 2025-26 NHAP fees at 2024-25 levels.', sourceUrl: 'https://www.CDPH.CA.GOV/Programs/CHCQ/LCP/CDPH%20Document%20Library/25-26_Annual_Fee_Report.pdf' }
      ],
      reciprocity: { rule: 'Endorsement applicants licensed in another state are not re-examined when their licence verification includes the national exam score; reciprocity applications cost $188.', sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/' },
      stateFaqs: [
        { q: 'Who licenses nursing home administrators in California?', a: 'The California Department of Public Health\u2019s Nursing Home Administrator Program (NHAP) \u2014 a department programme rather than an independent board \u2014 under Health and Safety Code Chapter 2.35.' },
        { q: 'How much does California NHA licensure cost?', a: 'The AIT application is $448, the licensing-exam application after AIT is $936, the in-person state examination is $634, the initial licence is $814 and biennial renewal is $830 from 1 July 2026 \u2014 before the $480 NAB CORE+NHA fee paid to NAB.' },
        { q: 'Does California accept out-of-state administrators without retesting?', a: 'Yes for most endorsement applicants: if your licence verification includes your national exam score, California does not make you retest. The reciprocity application fee is $188.' },
        { q: 'Can I shorten the 1,000-hour AIT in California?', a: 'There are defined alternates rather than a simple reduction: a master\u2019s degree with a 480-hour skilled-nursing internship, or ten years of qualifying nursing-home work \u2014 five in a supervisory role \u2014 paired with specified college units and a 1,000-hour AIT.' },
        { q: 'What do California health services managers earn?', a: 'BLS OEWS puts California\u2019s May 2025 median for Medical and Health Services Managers at $141,480 with about 75,090 jobs statewide \u2014 among the largest and best-paid markets in the country.' }
      ],
      sources: [
        { label: 'CDPH NHAP Fee List (eff. 1 July 2026)', url: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/NHAPFees.aspx', checkedOn: '2026-10' },
        { label: 'CDPH Center for Health Care Quality 2025-26 Annual Fee Report', url: 'https://www.CDPH.CA.GOV/Programs/CHCQ/LCP/CDPH%20Document%20Library/25-26_Annual_Fee_Report.pdf', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      agencyUrl: 'https://dpo.colorado.gov/NursingHome',
      exam: {
        vendor: 'NAB at Pearson VUE; Colorado jurisprudence component',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Colorado state/jurisprudence examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://dpo.colorado.gov/NursingHome'
      },
      education: {
        hours: '500-hour AIT with a qualifying graduate credential, otherwise 1,000 hours (associate degree minimum)',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Associate degree minimum' },
      renewal: { cycle: 'Biennial', ce: 'No state CE mandate recorded in the published requirements summary', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$134,910', p25: '$103,600', p75: '$171,810', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CO' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Where does Colorado\u2019s NHA licence live administratively?', a: 'Under Colorado\u2019s Division of Professions and Occupations at DORA \u2014 the Board of Examiners of Nursing Home Administrators sits inside the regulatory division rather than a standalone agency.' },
        { q: 'How long is the Colorado AIT?', a: '1,000 hours on the standard route, reducible to 500 hours with a qualifying graduate credential.' },
        { q: 'Is there a Colorado-specific exam?', a: 'Yes \u2014 Colorado pairs the national NAB CORE and NHA exams with its own jurisprudence examination.' },
        { q: 'What does the licence pay in Colorado?', a: 'BLS OEWS reports a May 2025 Colorado median of $134,910 for Medical and Health Services Managers, comfortably above the $123,860 national median.' }
      ],
      sources: [
        { label: 'Colorado DORA DPO \u2014 Nursing Home Administrators', url: 'https://dpo.colorado.gov/NursingHome', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    CT: {
      agencyUrl: 'https://portal.ct.gov/DPH/Practitioner-Licensing--Investigations/NHA/Nursing-Home-Administrator-Licensing',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      renewal: { cycle: 'Per DPH schedule', ce: 'No state CE mandate recorded in the published requirements summary', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$130,790', p25: '$103,490', p75: '$167,620', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CT' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who handles NHA licensure in Connecticut?', a: 'The Connecticut Department of Public Health, through its Practitioner Licensing and Investigations section \u2014 nursing home administrator licensing sits inside DPH rather than an independent board.' },
        { q: 'Which exams does Connecticut use?', a: 'The two NAB examinations \u2014 CORE (125 questions, 150 minutes) and the NHA Line of Service exam (75 questions, 90 minutes), taken together for a combined $480 from 1 February 2026.' },
        { q: 'Is Connecticut a good market for administrators?', a: 'BLS OEWS reports a May 2025 Connecticut median of $130,790 for Medical and Health Services Managers, about 6% above the national median, in a state with a dense long-term-care sector.' },
        { q: 'What continues after I am licensed?', a: 'Renewals run on the DPH schedule; the published 51-state requirements summary records no separate state CE mandate for Connecticut, unlike most of its neighbours.' }
      ],
      sources: [
        { label: 'Connecticut DPH \u2014 NHA Licensing', url: 'https://portal.ct.gov/DPH/Practitioner-Licensing--Investigations/NHA/Nursing-Home-Administrator-Licensing', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      agencyUrl: 'https://dpr.delaware.gov/boards/nursinghomeadmin/newlicense/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '100-hour AIT \u2014 one of the shortest internships in the country',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Other qualifying route per the board (the state does not mandate a specific degree level in the published summary)' },
      renewal: { cycle: 'Biennial', ce: '48 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$134,820', p25: '$105,430', p75: '$187,120', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=DE' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How short can the AIT be anywhere in the US?', a: 'Delaware\u2019s 100-hour administrator-in-training requirement is among the shortest in the country \u2014 most states sit between 1,000 and 2,000 hours.' },
        { q: 'Does Delaware add a state exam?', a: 'No. Delaware uses the two NAB examinations only \u2014 CORE (125 questions, 150 minutes) and the NHA Line of Service exam (75 questions, 90 minutes).' },
        { q: 'What does Delaware require for renewal?', a: '48 hours of continuing education per biennial cycle \u2014 a comparatively heavy CE load that reflects the state\u2019s reliance on coursework in lieu of a longer internship.' },
        { q: 'What is the pay picture in Delaware?', a: 'BLS OEWS reports a May 2025 Delaware median of $134,820 for Medical and Health Services Managers \u2014 top ten nationally.' }
      ],
      sources: [
        { label: 'Delaware DPR \u2014 Board of Examiners of Nursing Home Administrators (new licence)', url: 'https://dpr.delaware.gov/boards/nursinghomeadmin/newlicense/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      exam: {
        vendor: 'NAB at Pearson VUE; District law component',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'District of Columbia examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '1,000-hour AIT (bachelor\u2019s degree standard)',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$155,140', p25: '$122,820', p75: '$189,950', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=DC' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Is DC the highest-paying place to hold an NHA licence?', a: 'It is second only to New York: BLS OEWS reports a May 2025 DC median of $155,140 for Medical and Health Services Managers, with the middle half earning $122,820\u2013$189,950.' },
        { q: 'Who licenses nursing home administrators in the District?', a: 'DC Health \u2014 the Board of Nursing Home Administration operates under the District\u2019s Department of Health rather than a standalone board.' },
        { q: 'What exams does DC require?', a: 'The two NAB examinations plus a District-specific law component. The national pair runs $480 combined from 1 February 2026.' },
        { q: 'How long is the DC AIT?', a: '1,000 hours, with a bachelor\u2019s degree as the standard education requirement.' }
      ],
      sources: [
        { label: 'DC Health \u2014 Board of Nursing Home Administration', url: 'https://dchealth.dc.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 DC wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      agencyUrl: 'https://floridasnursinghomeadmin.gov/the-board/',
      exam: {
        vendor: 'NAB at Pearson VUE; Florida laws-and-rules examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Florida laws and rules examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://floridasnursinghomeadmin.gov/the-board/'
      },
      education: {
        hours: '1,000-hour AIT with a bachelor\u2019s in health care administration or a related field (or 60 semester hours in prescribed subjects); 2,000-hour AIT with a bachelor\u2019s in any other field',
        sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree (health administration field shortens the AIT); board-approved internship under a licensed preceptor in a facility of at least 60 beds' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$120,360', p25: '$92,540', p75: '$160,440', employment: 42700, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=FL' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How long is the Florida AIT internship?', a: '1,000 hours if your bachelor\u2019s is in health care or health services administration (or you hold at least 60 semester hours in prescribed subjects); 2,000 hours with a bachelor\u2019s in any other field. The internship must run under a board-approved preceptor in a nursing home with at least 60 beds.' },
        { q: 'Does Florida have its own exam?', a: 'Yes \u2014 in addition to the NAB CORE and NHA Line of Service exams, Florida requires its laws and rules examination set by the Board of Nursing Home Administrators.' },
        { q: 'What is the Florida job market like?', a: 'One of the largest in the country: about 42,700 Medical and Health Services Managers jobs statewide (BLS OEWS, May 2025), with a median of $120,360 \u2014 slightly under the $123,860 national figure.' },
        { q: 'Who runs the Florida board?', a: 'The Board of Nursing Home Administrators operates under the Florida Department of Health at floridasnursinghomeadmin.gov.' },
        { q: 'What CE does Florida require?', a: '40 hours per two-year renewal cycle.' }
      ],
      sources: [
        { label: 'Florida Board of Nursing Home Administrators', url: 'https://floridasnursinghomeadmin.gov/the-board/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      agencyUrl: 'https://sos.ga.gov/board-long-term-care-facility-administrators',
      exam: {
        vendor: 'NAB at Pearson VUE; Georgia requirements set by the Secretary of State\u2019s board',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); board fees per the Secretary of State fee schedule',
        sourceUrl: 'https://sos.ga.gov/board-long-term-care-facility-administrators'
      },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$131,910', p25: '$99,060', p75: '$171,180', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=GA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses long-term care administrators in Georgia?', a: 'The Georgia Board of Long Term Care Facility Administrators, one of the Secretary of State\u2019s professional licensing boards.' },
        { q: 'Which exam do Georgia candidates take?', a: 'The NAB pair \u2014 CORE (125 questions, 150 minutes) and the NHA Line of Service exam (75 questions, 90 minutes) \u2014 after the board approves eligibility.' },
        { q: 'How does Georgia\u2019s pay compare?', a: 'Strongly: BLS OEWS reports a May 2025 Georgia median of $131,910 for Medical and Health Services Managers \u2014 above the national $123,860 and higher than most Southeastern states.' },
        { q: 'What should I check before enrolling in an AIT in Georgia?', a: 'The board\u2019s current rules at sos.ga.gov \u2014 Georgia\u2019s AIT and education table was not captured in the published national requirements summary, so the board\u2019s own licensing page is the authority for hour counts.' }
      ],
      sources: [
        { label: 'Georgia Board of Long Term Care Facility Administrators', url: 'https://sos.ga.gov/board-long-term-care-facility-administrators', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      agencyUrl: 'https://health.hawaii.gov/ohca/state-licensing-section/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: 'Up to 2,080-hour AIT (12 months full-time) on the standard route',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: 'No state CE mandate recorded in the published requirements summary', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$147,630', p25: '$106,550', p75: '$173,430', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=HI' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Where does Hawaii\u2019s NHA licensing sit?', a: 'In the Department of Commerce and Consumer Affairs\u2019 Professional and Vocational Licensing Division, with the Board of Examiners of Nursing Home Administrators; facility-side licensing runs through the Department of Health\u2019s Office of Health Care Assurance.' },
        { q: 'How long is the Hawaii AIT?', a: 'On the standard route expect up to 2,080 hours \u2014 a full 12 months \u2014 one of the longer internships nationally.' },
        { q: 'Does Hawaii require a state exam?', a: 'No. Hawaii uses the two NAB examinations without an additional state law test.' },
        { q: 'What do administrators earn in Hawaii?', a: 'BLS OEWS reports a May 2025 Hawaii median of $147,630 for Medical and Health Services Managers \u2014 third-highest in the country after New York and DC.' }
      ],
      sources: [
        { label: 'Hawaii DCCA PVL / DOH OHCA', url: 'https://health.hawaii.gov/ohca/state-licensing-section/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      exam: {
        vendor: 'NAB at Pearson VUE; Idaho law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Idaho state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '384-hour AIT minimum (one of the shortest in the country), paired with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$117,770', p25: '$86,900', p75: '$139,260', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ID' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How short is Idaho\u2019s AIT?', a: '384 hours \u2014 among the shortest administrator-in-training requirements in the country, roughly one-tenth of the heaviest states.' },
        { q: 'Does Idaho add its own exam?', a: 'Yes. Beyond the NAB CORE and NHA Line of Service exams, Idaho requires a state law examination through its board under the Division of Occupational and Professional Licenses.' },
        { q: 'What CE does Idaho require?', a: '20 hours per year on an annual renewal cycle.' },
        { q: 'What does the licence pay in Idaho?', a: 'BLS OEWS reports a May 2025 Idaho median of $117,770 for Medical and Health Services Managers, a little under the national $123,860.' }
      ],
      sources: [
        { label: 'Idaho DOPL \u2014 Nursing Home Administrators', url: 'https://dopl.idaho.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      agencyUrl: 'https://idfpr.illinois.gov',
      exam: {
        vendor: 'NAB at Pearson VUE; Illinois-specific examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Illinois state examination', questions: 'Department-set', time: 'Department-set', pass: 'Department-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); IDFPR application and licence fees separate',
        sourceUrl: 'https://idfpr.illinois.gov'
      },
      eligibility: { education: 'Bachelor\u2019s degree; candidates apply to both IDFPR and NAB (licence class 044)' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$117,850', p25: '$94,530', p75: '$164,440', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IL' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      localNuance: 'Illinois runs licensure through IDFPR (licence class 044) with both a department application and an NAB exam application; Chicago-area facilities operate inside one of the country\u2019s densest skilled-nursing markets.',
      stateFaqs: [
        { q: 'Who issues the Illinois NHA licence?', a: 'The Illinois Department of Financial and Professional Regulation (IDFPR) \u2014 licence class 044 \u2014 with candidates applying to both the department and NAB for exam approval.' },
        { q: 'Does Illinois add a state exam?', a: 'Yes. Beyond the NAB CORE and NHA Line of Service exams, Illinois requires its own state-specific examination.' },
        { q: 'What is the Illinois pay picture?', a: 'BLS OEWS reports a May 2025 Illinois median of $117,850 for Medical and Health Services Managers, with a wide spread ($94,530\u2013$164,440 for the middle half) reflecting the Chicago metro market.' },
        { q: 'Where do I file?', a: 'Through IDFPR\u2019s nursing home administrators profile page; exam scheduling follows NAB approval at Pearson VUE centres.' }
      ],
      sources: [
        { label: 'Illinois IDFPR \u2014 Nursing Home Administrators', url: 'https://idfpr.illinois.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      agencyUrl: 'https://www.in.gov/pla/professions/health-facility-administrators/',
      exam: {
        vendor: 'NAB at Pearson VUE; Indiana jurisprudence component',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Indiana state/jurisprudence examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.in.gov/pla/professions/health-facility-administrators/'
      },
      education: {
        hours: '728-hour AIT minimum, scaling to 1,040 hours on the standard route',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'Board-defined qualifying degree or experience route' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$104,140', p25: '$82,940', p75: '$134,950', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IN' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What does Indiana call the credential?', a: 'Indiana licenses Health Facility Administrators through the Professional Licensing Agency\u2019s State Board of Health Facility Administrators \u2014 the NAB exam path is the same.' },
        { q: 'How long is the Indiana AIT?', a: 'Between 728 and 1,040 hours depending on the qualifying education route.' },
        { q: 'Does Indiana require a state exam?', a: 'Yes \u2014 the NAB pair plus an Indiana jurisprudence component.' },
        { q: 'What does the licence pay in Indiana?', a: 'BLS OEWS reports a May 2025 Indiana median of $104,140 for Medical and Health Services Managers \u2014 below the national median.' }
      ],
      sources: [
        { label: 'Indiana PLA \u2014 Health Facility Administrators', url: 'https://www.in.gov/pla/professions/health-facility-administrators/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      agencyUrl: 'https://idph.iowa.gov/Licensure/Iowa-Board-of-Nursing-Home-Administrators',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://idph.iowa.gov/Licensure/Iowa-Board-of-Nursing-Home-Administrators'
      },
      education: {
        hours: '720-hour AIT with 12 months of qualifying experience credit',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$101,940', p25: '$84,180', p75: '$129,430', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Which board runs Iowa NHA licensing?', a: 'The Iowa Board of Nursing Home Administrators under the Iowa Department of Health and Human Services (formerly IDPH).' },
        { q: 'How long is the Iowa AIT?', a: '720 hours with up to 12 months of experience credit applied \u2014 shorter than the 1,000-hour standard in most states.' },
        { q: 'Does Iowa require a state exam?', a: 'No. Iowa relies on the two NAB examinations.' },
        { q: 'What does the licence pay in Iowa?', a: 'BLS OEWS reports a May 2025 Iowa median of $101,940 for Medical and Health Services Managers, below the national median \u2014 typical for rural Midwest markets.' }
      ],
      sources: [
        { label: 'Iowa Board of Nursing Home Administrators', url: 'https://idph.iowa.gov/Licensure/Iowa-Board-of-Nursing-Home-Administrators', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      agencyUrl: 'https://www.kdads.ks.gov',
      exam: {
        vendor: 'NAB at Pearson VUE; Kansas law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Kansas state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.kdads.ks.gov'
      },
      education: {
        hours: '480-hour AIT',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '50 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$111,030', p25: '$90,490', p75: '$143,450', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=KS' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      localNuance: 'Kansas licenses Adult Care Home Administrators through the Department for Aging and Disability Services (KDADS) rather than a standalone board \u2014 the same credential covers nursing facilities.',
      stateFaqs: [
        { q: 'What is the Kansas credential called?', a: 'Adult Care Home Administrator \u2014 issued by KDADS, which covers nursing homes and other adult care homes under one licence.' },
        { q: 'How long is the Kansas AIT?', a: '480 hours \u2014 on the shorter end nationally.' },
        { q: 'What CE does Kansas require?', a: '50 hours per biennial cycle \u2014 one of the heavier CE loads in the country.' },
        { q: 'What does the licence pay in Kansas?', a: 'BLS OEWS reports a May 2025 Kansas median of $111,030 for Medical and Health Services Managers, modestly below the national median.' }
      ],
      sources: [
        { label: 'Kansas KDADS \u2014 Adult Care Home Licensure', url: 'https://www.kdads.ks.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=KS', checkedOn: '2026-10' }
      ]
    },
    KY: {
      agencyUrl: 'https://ltca.ky.gov',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://ltca.ky.gov'
      },
      education: {
        hours: '1,080-hour AIT',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '30 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$103,450', p25: '$79,250', p75: '$135,630', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=KY' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses NHA candidates in Kentucky?', a: 'The Kentucky Board of Licensure for Long-Term Care Administrators (ltca.ky.gov), an independent board.' },
        { q: 'How long is the Kentucky AIT?', a: '1,080 hours \u2014 slightly above the 1,000-hour benchmark most states use.' },
        { q: 'Does Kentucky add a state exam?', a: 'No. Kentucky uses the two NAB examinations only.' },
        { q: 'What does the licence pay in Kentucky?', a: 'BLS OEWS reports a May 2025 Kentucky median of $103,450 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Kentucky Board of Licensure for Long-Term Care Administrators', url: 'https://ltca.ky.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kentucky wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=KY', checkedOn: '2026-10' }
      ]
    },
    LA: {
      agencyUrl: 'https://ldh.la.gov/page/longterm-care',
      exam: {
        vendor: 'NAB at Pearson VUE; Louisiana law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Louisiana state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://ldh.la.gov/page/longterm-care'
      },
      education: {
        hours: '1,040-hour AIT with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Annual', ce: '15 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$104,550', p25: '$83,440', p75: '$138,520', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=LA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses nursing facility administrators in Louisiana?', a: 'The Louisiana Board of Examiners of Nursing Facility Administrators, with licensure pages hosted through the Department of Health at ldh.la.gov.' },
        { q: 'How long is the Louisiana AIT?', a: '1,040 hours with a bachelor\u2019s degree \u2014 in line with the 1,000-hour standard.' },
        { q: 'Does Louisiana require a state exam?', a: 'Yes \u2014 a Louisiana law examination in addition to the NAB CORE and NHA Line of Service exams.' },
        { q: 'What CE and renewal cycle apply?', a: 'Annual renewal with 15 hours of continuing education per year \u2014 a lighter but more frequent cycle than most states.' },
        { q: 'What does the licence pay in Louisiana?', a: 'BLS OEWS reports a May 2025 Louisiana median of $104,550 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Louisiana LDH \u2014 Long-Term Care', url: 'https://ldh.la.gov/page/longterm-care', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Louisiana wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=LA', checkedOn: '2026-10' }
      ]
    },
    ME: {
      agencyUrl: 'https://www.maine.gov/pfr/professionallicensing/professions/nursing-home-administrators-licensing-board',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      eligibility: { education: 'Board-set; Maine is known for a strict preceptor standard \u2014 five years of licensed administrator experience, three of them full-time' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$120,320', p25: '$94,950', p75: '$159,170', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ME' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What makes Maine\u2019s AIT supervision distinctive?', a: 'Preceptors must hold five years of experience as licensed administrators, at least three full-time \u2014 among the strictest preceptor standards in the country \u2014 and Maine publishes its own preceptor course manual through the health care association.' },
        { q: 'Does Maine require a state exam?', a: 'Maine relies on the NAB CORE and NHA Line of Service exams; the board\u2019s licensing pages carry the current exam and application detail.' },
        { q: 'Can I license by endorsement in Maine?', a: 'Yes \u2014 endorsement is available for administrators licensed in other states, with NAB score transfer supporting the application.' },
        { q: 'What does the licence pay in Maine?', a: 'BLS OEWS reports a May 2025 Maine median of $120,320 for Medical and Health Services Managers \u2014 close to the national median.' }
      ],
      sources: [
        { label: 'Maine PFR \u2014 Nursing Home Administrators Licensing Board', url: 'https://www.maine.gov/pfr/professionallicensing/professions/nursing-home-administrators-licensing-board', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maine wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ME', checkedOn: '2026-10' }
      ]
    },
    MD: {
      agencyUrl: 'https://health.maryland.gov/bonha/Pages/licensing.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE; Maryland law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Maryland state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://health.maryland.gov/bonha/Pages/licensing.aspx'
      },
      education: {
        hours: '2,080-hour AIT (12 months full-time) \u2014 one of the longest in the country',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$131,810', p25: '$101,200', p75: '$170,900', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MD' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How long is Maryland\u2019s AIT?', a: '2,080 hours \u2014 a full year of full-time training \u2014 putting Maryland among the strictest states for internship length.' },
        { q: 'Does Maryland have its own exam?', a: 'Yes. The NAB pair plus a Maryland law examination set by the Board of Examiners of Nursing Home Administrators under the Department of Health.' },
        { q: 'What CE does Maryland require?', a: '40 hours per biennial renewal.' },
        { q: 'What does the licence pay in Maryland?', a: 'BLS OEWS reports a May 2025 Maryland median of $131,810 for Medical and Health Services Managers, above the national median.' }
      ],
      sources: [
        { label: 'Maryland Board of Examiners of NHA', url: 'https://health.maryland.gov/bonha/Pages/licensing.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Maryland wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MD', checkedOn: '2026-10' }
      ]
    },
    MA: {
      agencyUrl: 'https://www.mass.gov/nursing-home-administrator-licensing',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '1,040-hour AIT on the standard route (520-hour minimum with qualifying credit); AIT applications run through Mass.gov',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree; preceptors need five years of licensed administrator experience' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$134,360', p25: '$104,630', p75: '$178,540', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How does Massachusetts structure the AIT?', a: '1,040 hours standard, reducible to 520 hours with qualifying credit, filed as an AIT application through the state\u2019s licensing pages; preceptors must have five years of licensed experience.' },
        { q: 'Does Massachusetts require a state exam?', a: 'No. Massachusetts uses the two NAB examinations.' },
        { q: 'What CE does Massachusetts require?', a: '40 hours per biennial renewal.' },
        { q: 'What does the licence pay in Massachusetts?', a: 'BLS OEWS reports a May 2025 Massachusetts median of $134,360 for Medical and Health Services Managers \u2014 top ten nationally.' }
      ],
      sources: [
        { label: 'Massachusetts \u2014 Nursing Home Administrator Licensing', url: 'https://www.mass.gov/nursing-home-administrator-licensing', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Massachusetts wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MA', checkedOn: '2026-10' }
      ]
    },
    MI: {
      agencyUrl: 'https://www.michigan.gov/lara',
      exam: {
        vendor: 'NAB at Pearson VUE; Michigan-specific examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Michigan state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.michigan.gov/lara'
      },
      eligibility: { minAge: 18, education: 'Board-defined qualifying degree or experience route through LARA\u2019s Bureau of Professional Licensing' },
      renewal: { cycle: 'Biennial', ce: '36 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$107,570', p25: '$84,090', p75: '$139,450', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MI' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses nursing home administrators in Michigan?', a: 'The Michigan Board of Nursing Home Administrators inside LARA\u2019s Bureau of Professional Licensing.' },
        { q: 'Does Michigan add a state exam?', a: 'Yes \u2014 a Michigan-specific examination in addition to the NAB CORE and NHA Line of Service exams.' },
        { q: 'What CE does Michigan require?', a: '36 hours per biennial renewal.' },
        { q: 'What does the licence pay in Michigan?', a: 'BLS OEWS reports a May 2025 Michigan median of $107,570 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Michigan LARA \u2014 Nursing Home Administrators', url: 'https://www.michigan.gov/lara', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Michigan wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MI', checkedOn: '2026-10' }
      ]
    },
    MN: {
      agencyUrl: 'https://mn.gov/boards/beltss/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: 'Bachelor\u2019s degree with specified long-term care coursework; the AIT route runs up to 400 hours (0 for approved academic-programme graduates)',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree with specified LTC coursework' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$122,700', p25: '$99,440', p75: '$151,740', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MN' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What is Minnesota\u2019s licensing board called?', a: 'The Board of Executives for Long Term Services and Supports (BELTSS) \u2014 it licenses nursing home administrators and, separately, HCBS and assisted living directors.' },
        { q: 'How does Minnesota handle the AIT?', a: 'It leans on education: graduates of approved academic programmes can qualify with zero internship hours, while others complete up to 400 hours \u2014 far below the national norm.' },
        { q: 'Does Minnesota require a state exam?', a: 'No. The two NAB examinations are the testing requirement.' },
        { q: 'What does the licence pay in Minnesota?', a: 'BLS OEWS reports a May 2025 Minnesota median of $122,700 for Medical and Health Services Managers \u2014 essentially at the national median of $123,860.' }
      ],
      sources: [
        { label: 'Minnesota BELTSS', url: 'https://mn.gov/boards/beltss/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Minnesota wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MN', checkedOn: '2026-10' }
      ]
    },
    MS: {
      agencyUrl: 'https://www.msnha.ms.gov/index.html',
      exam: {
        vendor: 'NAB at Pearson VUE; Mississippi law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Mississippi state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.msnha.ms.gov/index.html'
      },
      education: {
        hours: '1,040-hour AIT; direct nursing home management experience counts toward preceptor eligibility',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Board-defined qualifying degree or experience route' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$98,160', p25: '$77,010', p75: '$126,000', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MS' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Where is the Mississippi NHA board online?', a: 'The Mississippi State Board of Nursing Home Administrators runs its own site at msnha.ms.gov.' },
        { q: 'How long is the Mississippi AIT?', a: '1,040 hours \u2014 the 1,000-hour standard.' },
        { q: 'Does Mississippi require a state exam?', a: 'Yes \u2014 a state law examination alongside the NAB CORE and NHA Line of Service exams.' },
        { q: 'What does the licence pay in Mississippi?', a: 'BLS OEWS reports a May 2025 Mississippi median of $98,160 for Medical and Health Services Managers \u2014 second-lowest nationally, ahead of only Arkansas.' }
      ],
      sources: [
        { label: 'Mississippi State Board of Nursing Home Administrators', url: 'https://www.msnha.ms.gov/index.html', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Mississippi wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MS', checkedOn: '2026-10' }
      ]
    },
    MO: {
      agencyUrl: 'https://health.mo.gov/information/boards/bnha/',
      exam: {
        vendor: 'NAB at Pearson VUE; Missouri law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score of 113 (board-published benchmark)' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Missouri state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://health.mo.gov/information/boards/bnha/'
      },
      education: {
        hours: '500-hour AIT minimum, scaling to 2,000 hours on the standard route',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Board-defined qualifying degree or experience route' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$104,370', p25: '$82,490', p75: '$135,780', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MO' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      reciprocity: { rule: 'Missouri publishes reciprocity criteria through the Department of Health and Senior Services and accepts the NAB Health Services Executive (HSE) credential as one licensure route; its reciprocity benchmark cites a scaled score of 113.', sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/' },
      stateFaqs: [
        { q: 'What scaled score does Missouri expect on the NAB exam?', a: 'Missouri\u2019s reciprocity materials cite a scaled score of 113 on the national examination \u2014 one of the few boards that publishes the benchmark.' },
        { q: 'Does Missouri accept the NAB HSE credential?', a: 'Yes \u2014 Missouri treats the Health Services Executive qualification as one of its licensure routes, distinctive among the states.' },
        { q: 'How long is the Missouri AIT?', a: 'Between 500 and 2,000 hours depending on the qualifying education and experience route.' },
        { q: 'What does the licence pay in Missouri?', a: 'BLS OEWS reports a May 2025 Missouri median of $104,370 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Missouri DHSS \u2014 Board of Nursing Home Administrators', url: 'https://health.mo.gov/information/boards/bnha/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Missouri wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MO', checkedOn: '2026-10' }
      ]
    },
    MT: {
      agencyUrl: 'https://boards.bsd.dli.mt.gov/nursing-home-administrators/',
      exam: {
        vendor: 'NAB at Pearson VUE; Montana law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Montana state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://boards.bsd.dli.mt.gov/nursing-home-administrators/'
      },
      eligibility: { education: 'Board-defined qualifying degree or experience route under the Department of Labor and Industry' },
      renewal: { cycle: 'Annual', ce: '25 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$105,840', p25: '$86,460', p75: '$137,370', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MT' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses Montana administrators?', a: 'The Montana Board of Nursing Home Administrators under the Department of Labor and Industry.' },
        { q: 'Does Montana require a state exam?', a: 'Yes \u2014 a Montana law examination plus the NAB pair.' },
        { q: 'What CE does Montana require?', a: '25 hours per year on an annual cycle.' },
        { q: 'What does the licence pay in Montana?', a: 'BLS OEWS reports a May 2025 Montana median of $105,840 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Montana DLI Board \u2014 Nursing Home Administrators', url: 'https://boards.bsd.dli.mt.gov/nursing-home-administrators/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Montana wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=MT', checkedOn: '2026-10' }
      ]
    },
    NE: {
      agencyUrl: 'https://dhhs.ne.gov/licensure/Pages/Nursing-Home-Administrator.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://dhhs.ne.gov/licensure/Pages/Nursing-Home-Administrator.aspx'
      },
      education: {
        hours: '640-hour AIT',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 19, education: 'Associate degree minimum; initial applicants sit the NAB exams only \u2014 no separate state exam' },
      renewal: { cycle: 'Biennial', ce: '50 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$107,700', p25: '$93,610', p75: '$134,650', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NE' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Does Nebraska require a state exam?', a: 'No for initial applicants \u2014 Nebraska requires only the NAB examinations, making it one of the simplest exam footprints in the country.' },
        { q: 'How long is the Nebraska AIT?', a: '640 hours \u2014 well below the 1,000-hour national norm.' },
        { q: 'What CE does Nebraska require?', a: '50 hours per biennial renewal \u2014 among the heaviest CE loads.' },
        { q: 'What does the licence pay in Nebraska?', a: 'BLS OEWS reports a May 2025 Nebraska median of $107,700 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Nebraska DHHS \u2014 Nursing Home Administrator Licensure', url: 'https://dhhs.ne.gov/licensure/Pages/Nursing-Home-Administrator.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nebraska wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NE', checkedOn: '2026-10' }
      ]
    },
    NV: {
      agencyUrl: 'https://beltca.nv.gov/Licensing/Licensing_Information/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://beltca.nv.gov/Licensing/Licensing_Information/'
      },
      education: {
        hours: '1,000-hour AIT with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '30 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$119,990', p25: '$97,000', p75: '$151,910', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NV' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      localNuance: 'The Nevada Board of Examiners for Long Term Care Administrators licenses nursing facility administrators and residential facility administrators \u2014 two credentials under one board.',
      stateFaqs: [
        { q: 'What board licenses Nevada administrators?', a: 'The Nevada Board of Examiners for Long Term Care Administrators (BELTCA), which covers nursing facilities and residential facilities alike.' },
        { q: 'How long is the Nevada AIT?', a: '1,000 hours with a bachelor\u2019s degree.' },
        { q: 'Does Nevada require a state exam?', a: 'No \u2014 the NAB pair only.' },
        { q: 'What does the licence pay in Nevada?', a: 'BLS OEWS reports a May 2025 Nevada median of $119,990 for Medical and Health Services Managers, just under the national median.' }
      ],
      sources: [
        { label: 'Nevada BELTCA \u2014 Licensing Information', url: 'https://beltca.nv.gov/Licensing/Licensing_Information/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Nevada wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NV', checkedOn: '2026-10' }
      ]
    },
    NH: {
      agencyUrl: 'https://www.oplc.nh.gov',
      exam: {
        vendor: 'NAB at Pearson VUE; New Hampshire law component',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'New Hampshire state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.oplc.nh.gov'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree with specified coursework credit' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$130,410', p25: '$101,570', p75: '$170,390', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NH' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Where does New Hampshire\u2019s NHA board sit?', a: 'In the Office of Professional Licensure and Certification (OPLC), which consolidated most of the state\u2019s health licensing boards.' },
        { q: 'Does New Hampshire add a state exam?', a: 'Yes \u2014 a state examination accompanies the NAB CORE and NHA Line of Service exams.' },
        { q: 'What CE does New Hampshire require?', a: '40 hours per biennial renewal.' },
        { q: 'What does the licence pay in New Hampshire?', a: 'BLS OEWS reports a May 2025 New Hampshire median of $130,410 for Medical and Health Services Managers, above the national median.' }
      ],
      sources: [
        { label: 'New Hampshire OPLC', url: 'https://www.oplc.nh.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Hampshire wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NH', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      agencyUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Board-set per administration' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Board-set per administration' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); New Jersey licence application $100',
        sourceUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/'
      },
      education: {
        hours: '1,750-hour AIT completed within the two years immediately preceding the application, in a nursing home with at least 60 beds',
        sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree; application packet includes form NH-1, AIP application (NH-8), transcript, three character references, ID and birth certificate; conviction of a crime of moral turpitude bars licensure' },
      background: { method: 'Criminal history record check with fingerprints through IdentoGO (IDEMIA), required at initial licensure and renewal', sourceUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/' },
      fees: [{ item: 'Licence application (form NH-1)', fee: '$100 (non-refundable)', sourceUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/' }],
      renewal: { cycle: 'Triennial', ce: '60 hours per three-year cycle, at least 4 in professional ethics; up to 10 hours carry over', sourceUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/' },
      application: { portal: 'New Jersey Department of Health paper application (NH-1), notarised; fingerprinting via IdentoGO Universal Enrollment', steps: ['Assemble the NH-1 packet (transcript, references, ID, fee)', 'Complete the board-registered AIT programme and have it certified', 'Wait for the Board\u2019s exam instructions after AIT certification \u2014 candidates do not self-schedule the exam', 'Complete the IdentoGO fingerprint appointment'], sourceUrl: 'https://www.nj.gov/health/healthfacilities/certification-licensing/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$145,650', p25: '$117,760', p75: '$208,030', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NJ' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally; New Jersey also runs its triennial 60-hour CE cycle with ethics minimums.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How long is the New Jersey AIT?', a: '1,750 hours \u2014 and it must be finished within the two years before you apply, inside a nursing home with at least 60 beds.' },
        { q: 'What CE does New Jersey require?', a: '60 hours per three-year renewal cycle \u2014 one of the heaviest totals anywhere \u2014 including at least 4 hours of professional ethics; up to 10 extra hours carry into the next cycle.' },
        { q: 'How does New Jersey fingerprinting work?', a: 'Through IdentoGO (IDEMIA) using a service code from the licensing board; the check is required at initial licensure and again at renewal. Applicants more than 20 miles from the border may use ink cards through local law enforcement.' },
        { q: 'What does the licence pay in New Jersey?', a: 'BLS OEWS reports a May 2025 New Jersey median of $145,650 for Medical and Health Services Managers \u2014 fourth-highest in the country.' },
        { q: 'When do I schedule the exam?', a: 'Only after the Board certifies your AIT completion \u2014 New Jersey instructs candidates not to apply for the exam until the Board sends specific instructions.' }
      ],
      sources: [
        { label: 'New Jersey DOH \u2014 Nursing Home Administrators Licensing', url: 'https://www.nj.gov/health/healthfacilities/certification-licensing/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Jersey wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NJ', checkedOn: '2026-10' }
      ]
    },
    NM: {
      agencyUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/nursing-home-administrators/',
      exam: {
        vendor: 'NAB at Pearson VUE; New Mexico jurisprudence examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'New Mexico jurisprudence examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/nursing-home-administrators/'
      },
      eligibility: { education: 'Board-defined qualifying route; preceptors need three years of licensed administrator experience' },
      renewal: { cycle: 'Annual', ce: '24 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$124,300', p25: '$97,740', p75: '$157,780', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NM' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses New Mexico administrators?', a: 'The New Mexico Board of Nursing Home Administrators under the Regulation and Licensing Department (RLD).' },
        { q: 'Does New Mexico require a state exam?', a: 'Yes \u2014 a jurisprudence examination plus the NAB pair.' },
        { q: 'What are New Mexico\u2019s preceptor rules?', a: 'Preceptors need three years of experience as licensed administrators \u2014 the standard set used by Washington, Oregon, South Carolina and Mississippi as well.' },
        { q: 'What does the licence pay in New Mexico?', a: 'BLS OEWS reports a May 2025 New Mexico median of $124,300 for Medical and Health Services Managers \u2014 just above the national median.' }
      ],
      sources: [
        { label: 'New Mexico RLD \u2014 Board of Nursing Home Administrators', url: 'https://www.rld.nm.gov/boards-and-commissions/individual-boards-and-commissions/nursing-home-administrators/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New Mexico wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NM', checkedOn: '2026-10' }
      ]
    },
    NY: {
      agencyUrl: 'https://www.health.ny.gov/professionals/nursing_home_administrator/licensure_program/licensure_process.htm',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); New York application and licence fees separate',
        sourceUrl: 'https://www.health.ny.gov/professionals/nursing_home_administrator/licensure_program/licensure_process.htm'
      },
      education: {
        hours: 'Up to 2,080-hour AIT (12 months full-time; 445-hour minimum with qualifying credit) plus a bachelor\u2019s degree with at least 15 credit hours in specified subjects',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree with 15 credit hours in specified subjects' },
      renewal: { cycle: 'Biennial', ce: '48 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$164,120', p25: '$123,170', p75: '$215,770', employment: 33200, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NY' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      reciprocity: { rule: 'New York offers no reciprocity \u2014 out-of-state administrators must complete the New York licensure process; NAB score transfer still supports the application.', sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/' },
      localNuance: 'New York licenses administrators through the Department of Health rather than the Education Department, and operates one of the country\u2019s largest and most closely surveyed nursing home sectors.',
      stateFaqs: [
        { q: 'Is New York the best-paying state for administrators?', a: 'Yes \u2014 BLS OEWS reports a May 2025 New York median of $164,120 for Medical and Health Services Managers, the highest in the country, with about 33,200 jobs statewide.' },
        { q: 'Does New York offer reciprocity?', a: 'No. New York is the standout exception \u2014 there is no reciprocity route, so even experienced out-of-state administrators file as New York applicants. NAB exam scores still transfer.' },
        { q: 'How long is the New York AIT?', a: 'Up to 2,080 hours \u2014 a full 12 months of full-time training \u2014 with a 445-hour minimum where qualifying credit applies.' },
        { q: 'Does New York require a state exam?', a: 'No. Both the 125-question CORE and the 75-question NHA Line of Service exam come from NAB.' },
        { q: 'What education does New York specify?', a: 'A bachelor\u2019s degree with at least 15 credit hours in specified subjects \u2014 a coursework floor beyond the degree itself.' }
      ],
      sources: [
        { label: 'New York DOH \u2014 NHA Licensure Process', url: 'https://www.health.ny.gov/professionals/nursing_home_administrator/licensure_program/licensure_process.htm', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 New York wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NY', checkedOn: '2026-10' }
      ]
    },
    NC: {
      agencyUrl: 'https://ncbenha.org',
      exam: {
        vendor: 'NAB at Pearson VUE; North Carolina law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'North Carolina state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://ncbenha.org'
      },
      education: {
        hours: '480-hour AIT minimum, scaling to 2,000 hours on the standard route',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Board-defined qualifying degree or experience route' },
      renewal: { cycle: 'Biennial', ce: '30 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$114,410', p25: '$88,510', p75: '$159,870', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NC' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses North Carolina administrators?', a: 'The North Carolina State Board of Examiners for Nursing Home Administrators at ncbenha.org \u2014 an independent board.' },
        { q: 'How long is the North Carolina AIT?', a: 'Between 480 and 2,000 hours depending on the education and experience route.' },
        { q: 'Does North Carolina require a state exam?', a: 'Yes \u2014 a state law examination in addition to the NAB pair.' },
        { q: 'What does the licence pay in North Carolina?', a: 'BLS OEWS reports a May 2025 North Carolina median of $114,410 for Medical and Health Services Managers, below the national median but strong for the Southeast.' }
      ],
      sources: [
        { label: 'North Carolina Board of Examiners for NHA', url: 'https://ncbenha.org', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Carolina wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=NC', checkedOn: '2026-10' }
      ]
    },
    ND: {
      agencyUrl: 'https://www.ndnha.org',
      exam: {
        vendor: 'NAB at Pearson VUE; North Dakota law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'North Dakota state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.ndnha.org'
      },
      education: {
        hours: '480-hour AIT with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$105,170', p25: '$89,460', p75: '$133,470', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ND' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses North Dakota administrators?', a: 'The North Dakota Board of Examiners for Nursing Home Administrators, which runs its own site at ndnha.org.' },
        { q: 'How long is the North Dakota AIT?', a: '480 hours with a bachelor\u2019s degree \u2014 on the short end nationally.' },
        { q: 'Does North Dakota require a state exam?', a: 'Yes \u2014 a state law examination plus the NAB pair.' },
        { q: 'What does the licence pay in North Dakota?', a: 'BLS OEWS reports a May 2025 North Dakota median of $105,170 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'North Dakota Board of Examiners for NHA', url: 'https://www.ndnha.org', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 North Dakota wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=ND', checkedOn: '2026-10' }
      ]
    },
    OH: {
      agencyUrl: 'https://beltss.ohio.gov',
      exam: {
        vendor: 'NAB at Pearson VUE; Ohio law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Ohio state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://beltss.ohio.gov'
      },
      education: {
        hours: '1,500-hour AIT with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree; preceptors need two years of in-state full-time work (35 hours a week) plus a preceptor certificate' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$106,140', p25: '$82,940', p75: '$136,220', employment: 24390, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OH' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What is Ohio\u2019s licensing board called?', a: 'The Ohio Board of Executives of Long-Term Services and Supports (BELTSS) \u2014 it licenses nursing home administrators and residential care facility leaders.' },
        { q: 'How long is the Ohio AIT?', a: '1,500 hours \u2014 50% longer than the 1,000-hour norm.' },
        { q: 'What are Ohio\u2019s preceptor requirements?', a: 'Two years of full-time in-state work (35 hours a week) plus a preceptor certificate \u2014 lighter than the three-to-five-year standards in neighbouring states.' },
        { q: 'Does Ohio require a state exam?', a: 'Yes \u2014 an Ohio law examination accompanies the NAB pair.' },
        { q: 'What does the licence pay in Ohio?', a: 'BLS OEWS reports about 24,390 Medical and Health Services Managers jobs in Ohio with a May 2025 median of $106,140.' }
      ],
      sources: [
        { label: 'Ohio BELTSS', url: 'https://beltss.ohio.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Ohio wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OH', checkedOn: '2026-10' }
      ]
    },
    OK: {
      agencyUrl: 'https://oklahoma.gov/health/services/licensing-inspections/long-term-care-administrator-licensing-program.html',
      exam: {
        vendor: 'NAB at Pearson VUE; Oklahoma law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Oklahoma state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://oklahoma.gov/health/services/licensing-inspections/long-term-care-administrator-licensing-program.html'
      },
      education: {
        hours: '560-hour AIT with a bachelor\u2019s degree',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Annual', ce: '24 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$101,270', p25: '$82,060', p75: '$131,040', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OK' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      localNuance: 'Oklahoma runs one licensing programme for nursing home, residential care and assisted living administrators through the State Department of Health\u2019s Long-Term Care Administrator Licensing Program.',
      stateFaqs: [
        { q: 'Who licenses Oklahoma long-term care administrators?', a: 'The Oklahoma State Department of Health\u2019s Long-Term Care Administrator Licensing Program, covering nursing homes, residential care and assisted living.' },
        { q: 'How long is the Oklahoma AIT?', a: '560 hours with a bachelor\u2019s degree \u2014 on the shorter end nationally.' },
        { q: 'Does Oklahoma require a state exam?', a: 'Yes \u2014 a state law examination plus the NAB pair.' },
        { q: 'What does the licence pay in Oklahoma?', a: 'BLS OEWS reports a May 2025 Oklahoma median of $101,270 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Oklahoma State Department of Health \u2014 LTC Administrator Licensing', url: 'https://oklahoma.gov/health/services/licensing-inspections/long-term-care-administrator-licensing-program.html', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oklahoma wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OK', checkedOn: '2026-10' }
      ]
    },
    OR: {
      agencyUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Nursing-Home-Administrators-License.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE; Oregon law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Oregon state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Nursing-Home-Administrators-License.aspx'
      },
      education: {
        hours: '960-hour AIT with a bachelor\u2019s degree; the AIT programme packet is published by the Oregon Health Authority',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'Bachelor\u2019s degree; preceptors need three years of licensed administrator experience' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$141,690', p25: '$115,620', p75: '$184,780', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OR' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses Oregon administrators?', a: 'The Nursing Home Administrators Board within the Oregon Health Authority\u2019s Health Licensing Office.' },
        { q: 'How long is the Oregon AIT?', a: '960 hours \u2014 just under the 1,000-hour benchmark.' },
        { q: 'Does Oregon require a state exam?', a: 'Yes \u2014 an Oregon law examination alongside the NAB pair.' },
        { q: 'What does the licence pay in Oregon?', a: 'BLS OEWS reports a May 2025 Oregon median of $141,690 for Medical and Health Services Managers \u2014 sixth-highest in the country.' }
      ],
      sources: [
        { label: 'Oregon OHA HLO \u2014 Nursing Home Administrators Board', url: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Nursing-Home-Administrators-License.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Oregon wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=OR', checkedOn: '2026-10' }
      ]
    },
    PA: {
      agencyUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx',
      exam: {
        vendor: 'NAB at Pearson VUE; Pennsylvania state examination under the Department of State',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'NAB scaled score of 113 (board-published benchmark)' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'NAB scaled score set by NAB' },
          { name: 'Pennsylvania state examination', questions: '35 scored + 10 pretest', time: 'Board-set', pass: '26 of 35 scored items' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); AIT application $50',
        sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx'
      },
      education: {
        hours: '1,000-hour AIT with a bachelor\u2019s degree; 800 hours with a master\u2019s degree. Training runs at least 20 but no more than 60 hours a week inside a Pennsylvania nursing home, mapped to department minimums (nursing 250h, business office 120h, dietary 120h, social services 80h, plus activities, maintenance, housekeeping and HR)',
        sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s or master\u2019s degree; the regulations offer 11 qualification options; Pennsylvania only credits AIT hours completed in a Pennsylvania nursing home' },
      fees: [{ item: 'AIT programme application', fee: '$50', sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx' }],
      renewal: { cycle: 'Biennial', ce: '48 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      application: { portal: 'Pennsylvania Department of State (PALS)', steps: ['Apply for board approval of the AIT programme at least 30 days before the planned start', 'Complete the AIT with department-signature certifications per rotation', 'Sit the NAB exams after board authorisation', 'Pass the Pennsylvania state examination on the License Act, Title 49 Chapter 39, Title 28 Part IV and 42 CFR Part 483'], processingTime: 'AIT applications reviewed about 30 days before start', sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$103,670', p25: '$81,130', p75: '$130,640', employment: 30480, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=PA' },
      recentChanges: [
        { year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally; Pennsylvania applies the NAB scaled score of 113.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' },
        { year: 2015, change: 'Pennsylvania\u2019s mandatory three hours of child abuse recognition and reporting training for initial applicants took effect 1 January 2015 and remains a condition of licensure.', sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx' }
      ],
      reciprocity: { rule: 'Pennsylvania licenses by endorsement for administrators already licensed elsewhere; the NAB scaled score of 113 is the board\u2019s benchmark.', sourceUrl: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx' },
      stateFaqs: [
        { q: 'How long is the Pennsylvania AIT?', a: '1,000 hours with a bachelor\u2019s degree, 800 with a master\u2019s \u2014 at 20 to 60 hours a week in a Pennsylvania-licensed nursing home only. Out-of-state AIT hours are not credited.' },
        { q: 'What is on the Pennsylvania state exam?', a: '35 scored items covering the Nursing Home Administrators License Act, Title 49 Chapter 39 regulations, Department of Health long-term care rules (Title 28 Part IV) and the federal Requirements of Participation at 42 CFR Part 483. You need 26 of 35 to pass.' },
        { q: 'What CE does Pennsylvania require?', a: '48 hours per biennial renewal, plus the three-hour child abuse recognition and reporting training for initial applicants.' },
        { q: 'What does the licence pay in Pennsylvania?', a: 'BLS OEWS reports about 30,480 Medical and Health Services Managers jobs with a May 2025 Pennsylvania median of $103,670 \u2014 Philadelphia runs higher, around $122,920, while smaller markets pull the statewide figure down.' }
      ],
      sources: [
        { label: 'Pennsylvania Department of State \u2014 Board of Examiners of NHA', url: 'https://www.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/NursingHomeAdministrators/Pages/default.aspx', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Pennsylvania wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=PA', checkedOn: '2026-10' }
      ]
    },
    RI: {
      agencyUrl: 'https://health.ri.gov',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '350-hour AIT with a bachelor\u2019s degree and 15 credit hours of specified coursework',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree with specified coursework' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$119,260', p25: '$94,050', p75: '$141,950', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=RI' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses Rhode Island administrators?', a: 'The Rhode Island Department of Health, which administers NHA licensure rather than delegating it to an independent board.' },
        { q: 'How long is the Rhode Island AIT?', a: '350 hours \u2014 among the shortest in the country.' },
        { q: 'Does Rhode Island require a state exam?', a: 'No. The two NAB examinations are the testing requirement.' },
        { q: 'What does the licence pay in Rhode Island?', a: 'BLS OEWS reports a May 2025 Rhode Island median of $119,260 for Medical and Health Services Managers, just under the national median.' }
      ],
      sources: [
        { label: 'Rhode Island Department of Health \u2014 Licensing', url: 'https://health.ri.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Rhode Island wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=RI', checkedOn: '2026-10' }
      ]
    },
    SC: {
      agencyUrl: 'https://llr.sc.gov/nha/',
      exam: {
        vendor: 'NAB at Pearson VUE; South Carolina law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'South Carolina state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://llr.sc.gov/nha/'
      },
      education: {
        hours: 'Six-month internship for candidates with a health care administration or related degree; longer AIT routes for other qualifications',
        sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree; preceptors need three years of licensed administrator experience' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$105,620', p25: '$82,850', p75: '$149,430', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=SC' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      reciprocity: { rule: 'South Carolina issues no reciprocal licence, but accepts NAB score transfers \u2014 out-of-state administrators apply through the standard process with transferred scores.', sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/' },
      localNuance: 'The South Carolina Board of Long Term Health Care Administrators under LLR also licenses community residential care facility administrators.',
      stateFaqs: [
        { q: 'Who licenses South Carolina administrators?', a: 'The Board of Long Term Health Care Administrators within the Department of Labor, Licensing and Regulation (LLR) at llr.sc.gov/nha.' },
        { q: 'Does South Carolina offer reciprocity?', a: 'No reciprocal licence is issued. NAB score transfers are accepted, so out-of-state exam results still count toward a South Carolina application.' },
        { q: 'How long is the South Carolina internship?', a: 'Six months for candidates holding a health care administration or related degree.' },
        { q: 'What does the licence pay in South Carolina?', a: 'BLS OEWS reports a May 2025 South Carolina median of $105,620 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'South Carolina LLR \u2014 Board of Long Term Health Care Administrators', url: 'https://llr.sc.gov/nha/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Carolina wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=SC', checkedOn: '2026-10' }
      ]
    },
    SD: {
      agencyUrl: 'https://doh.sd.gov/boards/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '240-hour AIT with a bachelor\u2019s degree \u2014 among the shortest in the country',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$122,050', p25: '$102,550', p75: '$149,880', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=SD' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How short is the South Dakota AIT?', a: '240 hours \u2014 one of the shortest administrator-in-training requirements in the country.' },
        { q: 'Does South Dakota require a state exam?', a: 'No. The NAB CORE and NHA Line of Service exams are the testing requirement.' },
        { q: 'What CE does South Dakota require?', a: '40 hours per biennial renewal \u2014 a heavier CE load that pairs with the short AIT.' },
        { q: 'What does the licence pay in South Dakota?', a: 'BLS OEWS reports a May 2025 South Dakota median of $122,050 for Medical and Health Services Managers \u2014 essentially at the national median.' }
      ],
      sources: [
        { label: 'South Dakota DOH \u2014 Boards', url: 'https://doh.sd.gov/boards/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 South Dakota wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=SD', checkedOn: '2026-10' }
      ]
    },
    TN: {
      agencyUrl: 'https://www.tn.gov/health/health-program-areas/health-professional-boards/nha-board.html',
      exam: {
        vendor: 'NAB at Pearson VUE; Tennessee jurisprudence examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Tennessee state jurisprudence examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.tn.gov/health/health-program-areas/health-professional-boards/nha-board.html'
      },
      education: {
        hours: '1,040-hour AIT completed over about six months; degree holders add a separate 400-hour for-credit internship',
        sourceUrl: 'https://nurseadministrator.org/how-to-become/nursing-home-administrator/'
      },
      eligibility: { minAge: 18, education: 'Associate degree minimum' },
      renewal: { cycle: 'Annual', ce: '18 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$107,120', p25: '$84,200', p75: '$144,560', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=TN' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How is Tennessee\u2019s AIT structured?', a: 'A 1,040-hour administrator-in-training programme spread over roughly six months, plus a separate 400-hour for-credit internship for candidates entering through a degree route.' },
        { q: 'Does Tennessee require a state exam?', a: 'Yes \u2014 a Tennessee jurisprudence examination alongside the NAB CORE and NHA Line of Service exams.' },
        { q: 'What CE does Tennessee require?', a: '18 hours per year \u2014 among the lighter annual requirements.' },
        { q: 'What does the licence pay in Tennessee?', a: 'BLS OEWS reports a May 2025 Tennessee median of $107,120 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Tennessee DOH \u2014 NHA Board', url: 'https://www.tn.gov/health/health-program-areas/health-professional-boards/nha-board.html', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Tennessee wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=TN', checkedOn: '2026-10' }
      ]
    },
    TX: {
      agencyUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs',
      exam: {
        vendor: 'NAB via PSI at Prometric-network centres; Texas state exam administered by HHSC',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Texas state examination', questions: 'Covers Texas Health and Safety Code Ch. 242 and 26 TAC Ch. 554', time: 'Computer-based at Prometric', pass: 'HHSC-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026; Texas\u2019 fee schedule lists $455 effective 6 January 2025 before the NAB increase); Texas state exam $210',
        sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs'
      },
      education: {
        hours: '1,000-hour AIT in a Texas nursing facility under an HHSC-approved preceptor, requested through TULIP; 500-hour reduced AIT for candidates with a health administration or nursing degree plus management experience (three years with a bachelor\u2019s, one with a master\u2019s)',
        breakdown: 'Bachelor\u2019s or master\u2019s degree in any subject plus at least 12 semester credit hours in long-term care administration covering the four NAB domains',
        sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/become-a-texas-nursing-facility-administrator'
      },
      eligibility: { education: 'Bachelor\u2019s degree plus 12 credit hours of NAB-domain LTC coursework; military service members and veterans may earn internship and fee credit' },
      background: { method: 'FBI-based fingerprint check through the Texas Department of Public Safety', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/become-a-texas-nursing-facility-administrator' },
      fees: [
        { item: 'Application', fee: '$100', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
        { item: 'Initial licensure', fee: '$250', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
        { item: 'Texas state examination', fee: '$210 (from 6 January 2025)', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
        { item: 'Provisional licence', fee: '$100', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' }
      ],
      renewal: { cycle: 'Biennial', ce: '40 hours of NAB or HHSC-approved CE per cycle including the HHSC infection control and PPE course (four modules)', fee: '$250 ($375 if renewed within 90 days late; $500 between 91 and 365 days)', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
      application: { portal: 'TULIP (Texas Unified Licensure Information Portal)', portalUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/become-a-texas-nursing-facility-administrator', steps: ['Create a TULIP applicant registration and submit the Initial License Application with the $100 fee', 'Email official transcripts showing the degree and the 12 credit hours of NAB-domain coursework', 'Request an internship with an approved preceptor (upload a resume if seeking the 500-hour route)', 'Complete the FBI fingerprint process through DPS and the HHSC infection control training', 'After approval, schedule the NAB and Texas exams; results post to TULIP in about five business days', 'Pay the $250 initial licence fee in TULIP once both exams are passed'], processingTime: 'Exam results five business days; licence issued five to ten business days after the initial fee posts', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/become-a-texas-nursing-facility-administrator' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$114,150', p25: '$86,080', p75: '$150,390', employment: 58420, national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=TX' },
      recentChanges: [
        { year: 2025, change: 'Texas fee schedule amendments effective 6 January 2025 set the state exam at $210 and list the NAB combo at $455 (before NAB\u2019s 1 February 2026 increase to $480).', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
        { year: 2024, change: '26 TAC \u00a7 555.3 fee schedule was re-adopted effective 18 September 2024 (Texas Register, Vol. 49, No. 37).', sourceUrl: 'https://www.law.cornell.edu/regulations/texas/26-Tex-Admin-Code-SS-555-3' }
      ],
      reciprocity: { rule: 'HHSC grants a provisional licence to administrators licensed in another state who show one year as administrator of record, a passing NAB score, and a passing state exam; the provisional route runs through the online portal with a $100 fee.', sourceUrl: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs' },
      stateFaqs: [
        { q: 'What exams does Texas require?', a: 'Three: the NAB CORE (125 questions, 150 minutes), the NAB NHA Line of Service exam (75 questions, 90 minutes) and the separate Texas state exam on Chapters 242 and 554 at $210. All are computer-based through the Prometric network, and failing any of them three times means repeating the full 1,000-hour AIT before retesting.' },
        { q: 'How much does Texas NFA licensure cost?', a: 'Application $100, initial licence $250, state exam $210 and the NAB pair at $480 (from 1 February 2026) \u2014 roughly $1,040 in fees before study materials.' },
        { q: 'How long is the Texas AIT?', a: '1,000 hours in a Texas nursing facility under an HHSC-approved preceptor. A 500-hour route exists for candidates with a qualifying health administration or nursing degree plus three years of management experience (one year with a master\u2019s).' },
        { q: 'What does the Texas licence pay?', a: 'BLS OEWS reports about 58,420 Medical and Health Services Managers jobs in Texas \u2014 second-most of any state \u2014 with a May 2025 median of $114,150.' },
        { q: 'Is there an out-of-state route?', a: 'Yes. HHSC issues a provisional licence to administrators licensed and in good standing elsewhere with at least one year as an administrator of record, NAB exam scores and a passing Texas state exam.' }
      ],
      sources: [
        { label: 'Texas HHSC \u2014 NFA FAQs', url: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/nfa-faqs', checkedOn: '2026-10' },
        { label: 'Texas HHSC \u2014 Become a Texas NFA', url: 'https://www.hhs.texas.gov/business/licensing-credentialing-regulation/long-term-care-credentialing/nf-administrators-licensing-enforcement/become-a-texas-nursing-facility-administrator', checkedOn: '2026-10' },
        { label: '26 TAC \u00a7 555.3 Schedule of Fees', url: 'https://www.law.cornell.edu/regulations/texas/26-Tex-Admin-Code-SS-555-3', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Texas wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=TX', checkedOn: '2026-10' }
      ]
    },
    UT: {
      agencyUrl: 'https://dopl.utah.gov',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); DOPL fees separate',
        sourceUrl: 'https://dopl.utah.gov'
      },
      education: {
        hours: '1,000-hour AIT; Utah also requires a Utah law and rules examination for licensure',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'Bachelor\u2019s degree' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$114,980', p25: '$94,050', p75: '$160,910', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=UT' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses Utah administrators?', a: 'The Utah Division of Professional Licensing (DOPL) \u2014 nursing home administrators sit inside the division\u2019s licensing programmes.' },
        { q: 'Does Utah require a state exam?', a: 'Yes \u2014 a Utah law and rules examination in addition to the NAB pair.' },
        { q: 'How long is the Utah AIT?', a: '1,000 hours \u2014 the national benchmark.' },
        { q: 'What does the licence pay in Utah?', a: 'BLS OEWS reports a May 2025 Utah median of $114,980 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Utah DOPL \u2014 Nursing Home Administrators', url: 'https://dopl.utah.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Utah wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=UT', checkedOn: '2026-10' }
      ]
    },
    VT: {
      agencyUrl: 'https://sos.vermont.gov/nursing-home-administrators/',
      exam: {
        vendor: 'NAB at Pearson VUE; Vermont examination component',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Vermont state examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://sos.vermont.gov/media/wjlh5h5k/ait-information-sheet.pdf'
      },
      education: {
        hours: '1,000-hour AIT completed within two years, mapped to the NAB Five Step Programme domains; preceptors need five years of licensed administrator experience and on-site supervision',
        sourceUrl: 'https://sos.vermont.gov/media/wjlh5h5k/ait-information-sheet.pdf'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree; AIT application must be approved by the Office of Professional Regulation before hours count' },
      renewal: { cycle: 'Biennial', ce: '40 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$128,690', p25: '$99,470', p75: '$162,740', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=VT' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'What does Vermont\u2019s AIT require?', a: '1,000 hours over no more than two years, covering the NAB Five Step Programme domains, under an on-site preceptor with five years of licensed experience. The application needs OPR approval before any hours count.' },
        { q: 'Does Vermont require a state exam?', a: 'Yes \u2014 a Vermont examination component accompanies the NAB pair.' },
        { q: 'What CE does Vermont require?', a: '40 hours per biennial renewal.' },
        { q: 'What does the licence pay in Vermont?', a: 'BLS OEWS reports a May 2025 Vermont median of $128,690 for Medical and Health Services Managers, above the national median.' }
      ],
      sources: [
        { label: 'Vermont OPR \u2014 NHA AIT Information Sheet', url: 'https://sos.vermont.gov/media/wjlh5h5k/ait-information-sheet.pdf', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Vermont wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=VT', checkedOn: '2026-10' }
      ]
    },
    VA: {
      agencyUrl: 'https://www.dhp.virginia.gov/Boards/LongTermCare/',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.dhp.virginia.gov/Boards/LongTermCare/'
      },
      education: {
        hours: '2,000-hour AIT completed within 24 months; the degree route includes a 320-hour internship. Sixty semester hours of college credit are the floor for AIT approval',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { education: 'At least 60 semester hours of college credit for AIT approval; bachelor\u2019s-level qualification for licensure' },
      renewal: { cycle: 'Annual', ce: '20 hours per year', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$129,270', p25: '$101,640', p75: '$164,600', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=VA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      localNuance: 'The Virginia Board of Long-Term Care Administrators licenses nursing home administrators and assisted living facility administrators through one board.',
      stateFaqs: [
        { q: 'How long is the Virginia AIT?', a: '2,000 hours completed within 24 months, with a 320-hour internship embedded in the degree route \u2014 Virginia pairs a long internship with a modest 60-semester-hour education floor.' },
        { q: 'Does Virginia require a state exam?', a: 'No. The two NAB examinations are the testing requirement.' },
        { q: 'What CE does Virginia require?', a: '20 hours per year on an annual renewal cycle.' },
        { q: 'What does the licence pay in Virginia?', a: 'BLS OEWS reports a May 2025 Virginia median of $129,270 for Medical and Health Services Managers, above the national median.' }
      ],
      sources: [
        { label: 'Virginia DHP \u2014 Board of Long-Term Care Administrators', url: 'https://www.dhp.virginia.gov/Boards/LongTermCare/', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'NHA Licensure Requirements Summary (peer-reviewed table)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Virginia wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=VA', checkedOn: '2026-10' }
      ]
    },
    WA: {
      agencyUrl: 'https://doh.wa.gov',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info'
      },
      education: {
        hours: '1,500-hour AIT over nine months, reducible to 500 hours with a master\u2019s in health administration or nursing; the board must approve the training plan before any hours count',
        sourceUrl: 'https://app.leg.wa.gov/wac/default.aspx?cite=246-843'
      },
      eligibility: { education: 'Bachelor\u2019s degree (required); board approval of the AIT plan is a precondition' },
      renewal: { cycle: 'Biennial', ce: '36 hours per biennium', sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$145,290', p25: '$110,720', p75: '$178,610', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WA' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'How long is the Washington AIT?', a: '1,500 hours across nine months with a bachelor\u2019s degree \u2014 or 500 hours with a master\u2019s in health administration or nursing (WAC 246-843).' },
        { q: 'Does Washington require a state exam?', a: 'No. The NAB CORE and NHA Line of Service exams are the testing requirement.' },
        { q: 'When should I file my AIT plan in Washington?', a: 'Before you start \u2014 Washington requires board approval of the training plan first, and hours worked before approval do not count.' },
        { q: 'What does the licence pay in Washington?', a: 'BLS OEWS reports a May 2025 Washington median of $145,290 for Medical and Health Services Managers \u2014 fifth-highest in the country.' }
      ],
      sources: [
        { label: 'Washington DOH \u2014 Nursing Home Administrators', url: 'https://doh.wa.gov', checkedOn: '2026-10' },
        { label: 'Washington Administrative Code 246-843', url: 'https://app.leg.wa.gov/wac/default.aspx?cite=246-843', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Washington wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WA', checkedOn: '2026-10' }
      ]
    },
    WV: {
      agencyUrl: 'https://www.state.wv.us/wvnha',
      exam: {
        vendor: 'NAB at Pearson VUE; West Virginia law examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'West Virginia state law examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://www.state.wv.us/wvnha'
      },
      education: {
        hours: '2,040-hour AIT with a bachelor\u2019s degree and 12 credit hours of specified coursework',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7837745/table/T1/'
      },
      eligibility: { minAge: 21, education: 'Bachelor\u2019s degree with specified coursework' },
      fees: [
        { item: 'Renewal (from 1 July 2024)', fee: '$400', sourceUrl: 'https://www.state.wv.us/wvnha' },
        { item: 'Temporary and emergency permits', fee: '$400', sourceUrl: 'https://www.state.wv.us/wvnha' },
        { item: 'Inactive status licence', fee: '$100', sourceUrl: 'https://www.state.wv.us/wvnha' }
      ],
      renewal: { cycle: 'Annual', ce: '20 hours per year; the board publishes CEU guidance and criminal history record check rules', fee: '$400 (from 1 July 2024)', sourceUrl: 'https://www.state.wv.us/wvnha' },
      application: { portal: 'Paper applications mailed to the WV Nursing Home Administrators Licensing Board (PO Box 522, Winfield, WV 25213)', steps: ['Choose the licence-by-exam, reciprocity or endorsement application', 'File the AIT and preceptor agreement with quarterly preceptor reports', 'Complete the criminal history record check', 'Submit certified checks or money orders per the board\u2019s payment instructions'], sourceUrl: 'https://www.state.wv.us/wvnha/dspapplications.cfm' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$112,010', p25: '$94,040', p75: '$161,450', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WV' },
      recentChanges: [{ year: 2024, change: 'Fee increases effective 1 July 2024: renewals and temporary/emergency permits $400, inactive status $100; original applications unchanged.', sourceUrl: 'https://www.state.wv.us/wvnha' }],
      stateFaqs: [
        { q: 'How long is the West Virginia AIT?', a: '2,040 hours \u2014 among the longest in the country \u2014 with a bachelor\u2019s degree including 12 credit hours of specified coursework.' },
        { q: 'What does West Virginia renewal cost now?', a: '$400 a year from 1 July 2024, with temporary and emergency permits also at $400 and inactive status at $100.' },
        { q: 'How do I file with the West Virginia board?', a: 'By mail: applications, renewal forms and the NAB verification report go to the board at PO Box 522, Winfield, WV 25213, by certified check, corporate check or money order.' },
        { q: 'Does West Virginia require a state exam?', a: 'Yes \u2014 a state law examination accompanies the NAB pair.' },
        { q: 'What does the licence pay in West Virginia?', a: 'BLS OEWS reports a May 2025 West Virginia median of $112,010 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'West Virginia NHA Licensing Board', url: 'https://www.state.wv.us/wvnha', checkedOn: '2026-10' },
        { label: 'WV Board \u2014 Applications and Forms', url: 'https://www.state.wv.us/wvnha/dspapplications.cfm', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 West Virginia wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WV', checkedOn: '2026-10' }
      ]
    },
    WI: {
      agencyUrl: 'https://dsps.wi.gov',
      exam: {
        vendor: 'NAB at Pearson VUE; Wisconsin statutes and rules examination',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score set by NAB' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score set by NAB' },
          { name: 'Wisconsin statutes and rules examination', questions: 'Board-set', time: 'Board-set', pass: 'Board-set' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026)',
        sourceUrl: 'https://dsps.wi.gov'
      },
      eligibility: { education: 'Approved degree or equivalent route through the Department of Safety and Professional Services\u2019 Examining Board' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$128,320', p25: '$104,940', p75: '$166,430', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WI' },
      recentChanges: [{ year: 2026, change: 'NAB attempt limits (four per exam per cycle) and the $480 CORE+NHA fee took effect nationally.', sourceUrl: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info' }],
      stateFaqs: [
        { q: 'Who licenses Wisconsin administrators?', a: 'The Nursing Home Administrator Examining Board within the Department of Safety and Professional Services (DSPS).' },
        { q: 'Does Wisconsin require a state exam?', a: 'Yes \u2014 a Wisconsin statutes and rules examination alongside the NAB pair.' },
        { q: 'What education does Wisconsin expect?', a: 'An approved degree or an equivalent qualifying route, confirmed with the Examining Board before an AIT is registered.' },
        { q: 'What does the licence pay in Wisconsin?', a: 'BLS OEWS reports a May 2025 Wisconsin median of $128,320 for Medical and Health Services Managers, above the national median.' }
      ],
      sources: [
        { label: 'Wisconsin DSPS \u2014 NHA Examining Board', url: 'https://dsps.wi.gov', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wisconsin wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WI', checkedOn: '2026-10' }
      ]
    },
    WY: {
      agencyUrl: 'https://nha.wyo.gov',
      exam: {
        vendor: 'NAB at Pearson VUE',
        parts: [
          { name: 'NAB CORE', questions: '125 (100 scored + 25 pretest)', time: '150 minutes', pass: 'Scaled score acceptable to the board' },
          { name: 'NAB NHA Line of Service', questions: '75 (60 scored + 15 pretest)', time: '90 minutes', pass: 'Scaled score acceptable to the board' }
        ],
        fee: '$480 for the CORE + NHA combination (from 1 February 2026); Wyoming application $350, provisional licence $400',
        sourceUrl: 'https://nha.wyo.gov/licensing/apply'
      },
      education: {
        hours: '500-hour AIT under a licensed administrator preceptor with a bachelor\u2019s degree',
        sourceUrl: 'https://nha.wyo.gov/licensing/apply'
      },
      eligibility: { minAge: 18, education: 'Bachelor\u2019s degree; two professional letters of recommendation; all previously held licences verified' },
      background: { method: 'Fingerprint background check \u2014 required for all new applicants since the 2022 legislation and emergency rules effective 20 July 2022', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
      fees: [
        { item: 'Application', fee: '$350', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
        { item: 'Provisional licence', fee: '$400', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
        { item: 'Annual renewal (expires 31 December)', fee: '$300', sourceUrl: 'https://nha.wyo.gov/licensing/apply' }
      ],
      renewal: { cycle: 'Annual (expires 31 December)', ce: '25 hours per year', fee: '$300', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
      application: { portal: 'Wyoming State Board of Nursing Home Administrators paper applications (Professional Licensing Boards Division, A&I)', steps: ['Print and complete the licence-by-examination, endorsement or temporary licence application', 'File the AIT/preceptor plan and agreement', 'Submit fingerprints with the application', 'The board office confirms receipt in 3\u20137 days and committee review takes 1\u20133 weeks'], processingTime: 'Receipt confirmation 3\u20137 days; review 1\u20133 weeks', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
      wages: { soc: '11-9111', socName: 'Medical and Health Services Managers (includes nursing home administrators)', median: '$108,030', p25: '$84,380', p75: '$136,380', national: '$123,860', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WY' },
      recentChanges: [{ year: 2022, change: 'Under 2022 legislation with emergency rules effective 20 July 2022, the board now requires fingerprint background checks for every new licensure application.', sourceUrl: 'https://nha.wyo.gov/licensing/apply' }],
      reciprocity: { rule: 'Endorsement requires a current, active NHA licence in good standing elsewhere with at least two years of experience; a 90-day temporary licence covers administrators relocating mid-process, and a provisional licence (six months, one 60-day extension) covers candidates still completing the AIT and NAB exams.', sourceUrl: 'https://nha.wyo.gov/licensing/apply' },
      stateFaqs: [
        { q: 'How long is the Wyoming AIT?', a: '500 hours under a licensed preceptor \u2014 half the national norm \u2014 paired with a bachelor\u2019s degree.' },
        { q: 'What does Wyoming licensure cost?', a: 'Application $350, provisional licence $400 and annual renewal $300; the licence expires every 31 December and 25 hours of continuing education are due each year.' },
        { q: 'Does Wyoming require fingerprints?', a: 'Yes \u2014 for all new applicants since 2022, under legislation and emergency rules effective 20 July 2022.' },
        { q: 'What are Wyoming\u2019s reciprocity rules?', a: 'Endorsement needs an active licence in good standing elsewhere plus two years of experience. A 90-day temporary licence covers movers mid-process, and a six-month provisional licence (extendable once by 60 days) covers candidates still finishing the AIT and NAB exams.' },
        { q: 'What does the licence pay in Wyoming?', a: 'BLS OEWS reports a May 2025 Wyoming median of $108,030 for Medical and Health Services Managers, below the national median.' }
      ],
      sources: [
        { label: 'Wyoming State Board of Nursing Home Administrators \u2014 Applications & Forms', url: 'https://nha.wyo.gov/licensing/apply', checkedOn: '2026-10' },
        { label: 'Wyoming Board \u2014 Contact', url: 'https://nha.wyo.gov/contact', checkedOn: '2026-10' },
        { label: 'NAB Exam Information', url: 'https://nabweb.connectedcommunity.org/nabsite/seeking-licensure/exam-info', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Wyoming wages, SOC 11-9111', url: 'https://www.onetonline.org/link/localwages/11-9111.00?st=WY', checkedOn: '2026-10' }
      ]
    }
  }
};
