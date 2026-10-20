// v2 per-state research increment \u2014 cna-certification
// Compiled 2026-10-20. Method: state nurse aide registry pages + state-contracted
// testing vendor candidate handbooks/knowledge bases (Credentia NNAAP, Prometric,
// D&SDT-Headmaster) + state program pages. Wages: BLS OEWS state estimates for
// SOC 31-1131 (Nursing Assistants), May 2025 release (the current BLS OEWS
// publication as of compilation), captured from the O*NET OnLine local-wage tables
// and stored per state in reports/oews/311131/<ST>.csv. National median $42,260.
// Only facts verifiable from the cited source are included; fields the sources do
// not publish are omitted rather than estimated.

export default {
  key: 'cna-certification',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      agency: 'Alabama Department of Public Health \u2014 Nurse Aide Registry',
      agencyUrl: 'https://www.alabamapublichealth.gov/nurseaide/',
      exam: {
        vendor: 'Credentia (NNAAP)',
        vendorUrl: 'https://credentia.com/test-takers/al',
        parts: [
          { name: 'Written examination', questions: '70 multiple-choice', pass: 'Both portions must be passed' },
          { name: 'Oral examination (English or Spanish)', questions: '60 multiple-choice plus 10 reading-comprehension items', pass: 'Taken in place of the written test on request at application' },
          { name: 'Skills evaluation', questions: '5 randomly selected nurse aide skills', time: '30 minutes', pass: 'All five skills must be performed correctly' }
        ],
        fee: 'Written $55; English or Spanish oral $55; skills $80 (fees effective 1 September 2020)',
        practical: 'Five randomly selected skills performed before a Nurse Aide Evaluator in 30 minutes; every skill must be performed correctly to pass. Candidates on medical light duty may take the written or oral test but not the skills evaluation.',
        languages: ['English', 'Spanish oral examination'],
        sourceUrl: 'https://kb-al.credentia.com/en/article/introduction',
        sourceNote: 'Credentia Alabama candidate handbook knowledge base; fees from https://kb-al.credentia.com/en/article/exam-fees'
      },
      education: { hours: '75 clock hours minimum, including at least 16 hours of supervised clinical training in a nursing home and 16 hours of lab training', onlineAllowed: 'Alabama\u2019s standard restates the federal rule; the lab and clinical portions are in person', sourceUrl: 'https://www.alabamapublichealth.gov/nurseaide/' },
      eligibility: { other: 'Alabama nursing students who passed Fundamentals of Nursing and their clinical skills within the past 24 months may use an instructor letter as proof of training, but must still pass both exam portions' },
      fees: [
        { item: 'Written or oral examination', fee: '$55', sourceUrl: 'https://kb-al.credentia.com/en/article/exam-fees' },
        { item: 'Skills evaluation', fee: '$80', sourceUrl: 'https://kb-al.credentia.com/en/article/exam-fees' },
        { item: 'Registry listing', fee: 'No state fee', sourceUrl: 'https://www.alabamapublichealth.gov/nurseaide/' }
      ],
      application: { portal: 'Credentia CNA365', portalUrl: 'https://credentia.com/test-takers/al', steps: ['Complete an Alabama state-approved nurse aide training program', 'Create a CNA365 account and submit the online exam application with payment', 'Schedule the written or oral test and the skills evaluation once the application is approved'], sourceUrl: 'https://credentia.com/test-takers/al' },
      renewal: { cycle: 'No periodic renewal filing; the registry listing stays active only with at least 8 hours of paid nurse aide work every 24 months in a nursing home, hospital, home health agency, hospice or mental health facility', work: '8 paid hours per 24 months; after a longer gap the training program and both exam portions must be repeated', fee: 'No state fee', sourceUrl: 'https://www.alabamapublichealth.gov/nurseaide/' },
      reciprocity: { rule: 'Aides certified in other states are added to the Alabama registry after an Alabama nursing home hires them; Alabama charges no fee for the listing', sourceUrl: 'https://www.alabamapublichealth.gov/nurseaide/' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$34,140', p25: '$30,060', p75: '$36,390', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.alabamapublichealth.gov/nurseaide/' }],
      stateFaqs: [
        { q: 'How much does the Alabama nurse aide exam cost?', a: 'Credentia charges $55 for the written or oral test and $80 for the skills evaluation. Federal and state law bar Medicaid-nursing-home-employed candidates from paying these fees themselves \u2014 the employer must pay, and a facility that hires an aide within 12 months of completing training must reimburse the training and testing costs.' },
        { q: 'Does Alabama renew its CNA credential every two years?', a: 'There is no renewal filing or fee. The registry listing simply stays active as long as you have performed at least 8 hours of paid nurse aide work in the previous 24 months; let the work lapse and you must repeat training and both exam portions.' },
        { q: 'What is on the Alabama oral examination?', a: 'The oral test replaces the 70-question written exam with 60 multiple-choice questions plus 10 reading-comprehension items, and can be taken in English or Spanish on request at application.' },
        { q: 'Can an out-of-state CNA transfer to Alabama?', a: 'Yes \u2014 Alabama adds aides from other states to its registry after an Alabama nursing home hires them, and charges no state fee for the listing.' }
      ],
      sources: [
        { label: 'Credentia \u2014 Alabama candidate handbook (introduction)', url: 'https://kb-al.credentia.com/en/article/introduction', checkedOn: '2026-10' },
        { label: 'Credentia \u2014 Alabama exam fees', url: 'https://kb-al.credentia.com/en/article/exam-fees', checkedOn: '2026-10' },
        { label: 'Credentia \u2014 Alabama test-taker portal', url: 'https://credentia.com/test-takers/al', checkedOn: '2026-10' },
        { label: 'Alabama Department of Public Health \u2014 Nurse Aide Registry', url: 'https://www.alabamapublichealth.gov/nurseaide/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alabama wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AL', checkedOn: '2026-10' }
      ]
    },
    AK: {
      agency: 'Alaska Board of Nursing \u2014 Nurse Aide Registry',
      agencyUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx',
      exam: {
        vendor: 'Credentia (NNAAP)',
        vendorUrl: 'https://credentia.com/test-takers/ak',
        parts: [
          { name: 'Written examination', questions: '70 multiple-choice (60 scored, 10 pretest)', time: '2 hours', pass: 'Both portions must be passed' },
          { name: 'Oral examination', questions: '60 multiple-choice plus 10 reading-comprehension items', pass: 'Requested at application' },
          { name: 'Skills evaluation', questions: '5 randomly selected skills; hand hygiene is always included and one skill involves a measurement', pass: 'All five skills must be passed' }
        ],
        fee: 'Written or oral $30 plus skills $30 ($60 total)',
        practical: 'Five randomly selected nurse aide skills performed before an evaluator, with hand hygiene mandatory and at least one measurement skill; each may be attempted up to three times within 24 months of training completion.',
        languages: ['English', 'Oral version on request'],
        sourceUrl: 'https://kb-ak.credentia.com/en/article/eligibility-criteria',
        sourceNote: 'Credentia Alaska candidate handbook knowledge base'
      },
      education: { hours: '140 hours minimum \u2014 at least 60 hours of classroom instruction and 80 hours of clinical/skills training', sourceUrl: 'https://kb-ak.credentia.com/en/article/eligibility-criteria' },
      eligibility: { other: 'Six eligibility routes: new aide (E1), reinstatement (E2), one year of nursing education within two years (E3), military corpsman or medic training within five years (E4), foreign nursing program with certified English translations (E5), or a current or lapsed U.S. or Canadian nursing license (E6). Candidates file Form 08-4069 (by exam) or Form 08-4365 (reinstatement).', sourceUrl: 'https://kb-ak.credentia.com/en/article/eligibility-criteria' },
      fees: [
        { item: 'Written or oral examination', fee: '$30', sourceUrl: 'https://credentia.com/test-takers/ak' },
        { item: 'Skills evaluation', fee: '$30', sourceUrl: 'https://credentia.com/test-takers/ak' },
        { item: 'Initial application (by exam or endorsement)', fee: '$100 application + $100 certification + $75 fingerprint processing = $275', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' },
        { item: 'Biennial renewal', fee: '$100', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' },
        { item: 'Certificate verification', fee: '$20', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' }
      ],
      application: { portal: 'MyAlaska / Alaska Board of Nursing', portalUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx', steps: ['File the certification application (Form 08-4069) with fees and FD-258 fingerprint card', 'Training provider submits the Verification of Training on graduation day', 'Receive the Authorization to Test letter, then register with Credentia CNA365 at least 10 days before the exam date'], processingTime: 'Application review 1\u20133 weeks; Authorization to Test 1\u20137 business days after the Verification of Training', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' },
      renewal: { cycle: '24 months', work: 'Paid nurse aide work during the renewal period is required; aides who did not work must retake the competency evaluation under the E2 reinstatement route', fee: '$100', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' },
      reciprocity: { rule: 'Alaska accepts certification by endorsement from all states: a $275 total fee ($100 application, $100 certification, $75 fingerprinting) with proof of current out-of-state certification and qualifying employment or equivalency documentation', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$46,370', p25: '$45,120', p75: '$52,240', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AK' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx' }],
      stateFaqs: [
        { q: 'Why does Alaska require 140 training hours when the federal floor is 75?', a: 'Alaska sets its own standard well above OBRA \u201987: every Board-approved program must deliver at least 140 hours \u2014 60 classroom and 80 clinical/skills \u2014 before a candidate may sit for the NNAAP examination.' },
        { q: 'How much does Alaska certification cost end to end?', a: 'State fees total $275 for initial certification by exam or endorsement ($100 application, $100 certification, $75 fingerprinting), $60 for the Credentia exam ($30 written or oral + $30 skills), and $100 for each biennial renewal.' },
        { q: 'What happens if I stop working as a CNA in Alaska?', a: 'Alaska\u2019s renewal depends on paid work during the cycle. Aides who did not work or complete requirements during the renewal period file the reinstatement application (Form 08-4365) and retake the competency evaluation.' },
        { q: 'Which exam routes exist besides the standard training route?', a: 'Five alternates: reinstatement, one year of nursing education completed within the past two years, military corpsman or medic training within five years, foreign nursing education with certified English translations, or a current or lapsed U.S. or Canadian nursing license.' }
      ],
      sources: [
        { label: 'Credentia \u2014 Alaska handbook eligibility criteria', url: 'https://kb-ak.credentia.com/en/article/eligibility-criteria', checkedOn: '2026-10' },
        { label: 'Credentia \u2014 Alaska test-taker portal', url: 'https://credentia.com/test-takers/ak', checkedOn: '2026-10' },
        { label: 'Alaska Board of Nursing \u2014 Nurse Aide Registry', url: 'https://www.commerce.alaska.gov/web/cbpl/ProfessionalLicensing/NurseAideRegistry.aspx', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Alaska wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AK', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      agency: 'Arizona State Board of Nursing',
      agencyUrl: 'https://www.azbn.gov',
      exam: {
        vendor: 'D&SDT-Headmaster (TMU portal)',
        vendorUrl: 'https://www.hdmaster.com',
        parts: [
          { name: 'Knowledge examination (written or audio)', questions: '75 multiple-choice', time: '60 minutes', pass: '76%' },
          { name: 'Skills evaluation', questions: 'Randomly selected skills performed before an evaluator', time: '35\u201340 minutes', pass: 'All key steps plus 80% of remaining steps; both portions must be passed within 2 years of training completion' }
        ],
        fee: 'Knowledge $35 written / $45 audio; skills $95 (written + skills $130; audio + skills $140)',
        practical: 'Skills performed before a Headmaster evaluator in clinical attire with a valid government photo ID; after a third failed knowledge attempt a 45-day waiting period applies before retesting.',
        languages: ['English', 'Audio (read-aloud) knowledge test'],
        sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license'
      },
      education: { hours: '120 hours minimum \u2014 80 hours of classroom and laboratory instruction plus 40 hours of supervised clinical experience', onlineAllowed: 'Classroom content may be delivered in approved hybrid formats; the 40 clinical hours are supervised and in person', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
      eligibility: { minAge: 16, other: 'State law (A.R.S. 32-1645) sets age 16 as the minimum to practice; individual programs may set a higher bar. A.R.S. 32-1606 bars eligibility until three or more years after absolute discharge from the sentences for all felony convictions. Proof of U.S. citizenship or lawful presence is required.' },
      background: { method: 'The CNA registry route requires no fingerprint check; the separate Licensed Nursing Assistant (LNA) license requires a fingerprint-based background check ($50) processed through the Board', fee: '$50 (LNA fingerprint background check only)', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
      fees: [
        { item: 'Knowledge examination (written)', fee: '$35', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
        { item: 'Knowledge examination (audio)', fee: '$45', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
        { item: 'Skills evaluation', fee: '$95', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
        { item: 'CNA registry application and renewal', fee: 'No fee', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
        { item: 'LNA license application or renewal', fee: '$50', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
        { item: 'Endorsement from another state', fee: '$50', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' }
      ],
      application: { portal: 'Arizona Nurse Portal (AZBN) + Headmaster TMU portal', portalUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license', steps: ['Complete an AZBN-approved 120-hour training program and receive the certificate of completion', 'Register with the Headmaster TMU portal, upload the certificate and photo ID, and schedule both exam portions', 'After passing, apply in the Arizona Nurse Portal (CNA by exam) with proof of citizenship or lawful presence; Headmaster transmits results electronically'], processingTime: 'Registry listing approximately 30 days after all requirements are met and results are received', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
      renewal: { cycle: '24 months (by the end of the birth month)', work: 'CNA: at least 8 paid hours of nursing assistant work in 24 months; LNA: 160 hours in 24 months', fee: 'CNA renewal free; LNA renewal $50', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
      reciprocity: { rule: 'Endorsement for aides with active out-of-state certification: meet Arizona\u2019s 120-hour training requirement, show recent work history, and pay the $50 endorsement fee', sourceUrl: 'https://www.azbn.gov/licenses-and-certifications/apply-license' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$44,780', p25: '$38,320', p75: '$46,630', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AZ' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.azbn.gov' }],
      stateFaqs: [
        { q: 'What is the difference between Arizona\u2019s CNA and LNA credentials?', a: 'Both come from the same 120-hour course and the same Headmaster exam. The CNA is a free registry listing with no fingerprint check; the LNA is a Board license with a $50 application, a $50 fingerprint background check and a 160-hour work requirement to renew. The two titles are mutually exclusive, and the LNA is the gateway to Arizona\u2019s Certified Medication Assistant credential.' },
        { q: 'How much does the Arizona competency exam cost?', a: 'Headmaster charges $35 for the written knowledge test, $45 for the audio version, and $95 for the skills evaluation \u2014 $130 or $140 combined. The CNA registry application itself carries no fee.' },
        { q: 'What happens if I fail part of the Arizona exam?', a: 'Only the failed portion is retaken. Both portions must be passed within two years of training completion, and after a third failed knowledge attempt a 45-day waiting period applies before the next try.' },
        { q: 'Can I move my CNA certification to Arizona?', a: 'Yes, by endorsement: active out-of-state certification, evidence you meet Arizona\u2019s 120-hour training standard, recent work history, and a $50 fee through the Arizona Nurse Portal.' }
      ],
      sources: [
        { label: 'Arizona State Board of Nursing \u2014 applications and licensing', url: 'https://www.azbn.gov/licenses-and-certifications/apply-license', checkedOn: '2026-10' },
        { label: 'Arizona State Board of Nursing', url: 'https://www.azbn.gov', checkedOn: '2026-10' },
        { label: 'D&SDT-Headmaster', url: 'https://www.hdmaster.com', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arizona wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AZ', checkedOn: '2026-10' }
      ]
    },
    CA: {
      agency: 'California Department of Public Health \u2014 Aide and Technician Certification Section (ATCS)',
      agencyUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx',
      exam: {
        vendor: 'CDPH-approved vendors: Credentia, D&SDT-Headmaster, and the Regional Testing Center',
        vendorUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx',
        parts: [
          { name: 'Knowledge examination (written or oral)', questions: '70 multiple-choice', time: '120 minutes', pass: '75% (52 of 70 correct)' },
          { name: 'Skills evaluation', questions: '5 randomly selected skills, including mandatory hand hygiene', time: '30 minutes', pass: 'All five skills must be passed; each portion may be attempted up to three times before retraining is required' }
        ],
        fee: 'D&SDT-Headmaster fees effective 1 March 2026: knowledge $40, audio version $45, skills $100. Credentia sets its own fees',
        practical: 'Five randomly selected skills performed before an evaluator within 30 minutes, with hand hygiene mandatory on every candidate.',
        languages: ['English', 'Oral/audio knowledge test'],
        sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx',
        sourceNote: 'Headmaster fee increase posted on its California nurse aide page, effective 3-1-2026'
      },
      education: { hours: '160 hours minimum \u2014 60 hours of classroom theory plus 100 hours of supervised clinical training, more than double the federal floor', onlineAllowed: 'Theory portions may be delivered in approved formats; the 100 clinical hours are supervised and in person', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
      eligibility: { minAge: 16, other: 'Applicants must have no disqualifying criminal convictions and demonstrate functional English literacy. Nursing students, nurses and military medics may qualify by equivalency and still take the exam. The initial application (CDPH 283B) is filed at program enrollment, before patient contact.' },
      background: { method: 'California Live Scan fingerprinting (BCIA 8016) submitted with the initial application; out-of-state residents submit two FD-258 fingerprint cards by mail', fee: '$32 Department of Justice + $18 FBI = $50 in state and federal fees, plus the Live Scan operator\u2019s rolling fee; the FD-258 route carries a $32 DOJ check', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
      fees: [
        { item: 'CDPH application and renewal processing', fee: 'No fee', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
        { item: 'Knowledge examination (Headmaster, effective 3-1-2026)', fee: '$40 ($45 audio)', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
        { item: 'Skills evaluation (Headmaster, effective 3-1-2026)', fee: '$100', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
        { item: 'Live Scan fingerprinting (DOJ + FBI)', fee: '$50 plus operator fee', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' }
      ],
      application: { portal: 'CDPH Healthcare Professional Certification and Training Section', portalUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx', steps: ['Enroll in a CDPH-approved Nurse Assistant Training Program and submit the CDPH 283B initial application with Live Scan at enrollment', 'Complete 160 hours (60 theory + 100 clinical); the program director signs the application to confirm completion', 'Test with a CDPH-approved vendor; CDPH issues the certificate after exam results and criminal record clearance arrive'], processingTime: 'Up to 30 business days for application review; at least 60 days for exam results to reach CDPH from the testing vendor', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
      renewal: { cycle: '24 months', work: 'Maintained criminal record clearance, at least one day of paid work in a facility, and 48 hours of in-service training or CEUs with at least 12 hours in each year of the cycle', fee: 'No CDPH fee', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
      reciprocity: { rule: 'Reciprocity applicants (CDPH 283E) with active, unencumbered certification from another state are certified without repeating training or the exam; because California requires 160 hours, applicants from 75-hour states may be asked for supplemental training', sourceUrl: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$47,630', p25: '$45,850', p75: '$54,800', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CA' },
      recentChanges: [{ year: 2026, change: 'D&SDT-Headmaster raised its California testing fees effective 1 March 2026: knowledge $40, audio $45, skills $100.', sourceUrl: 'https://licensingatlas.com/cna/ca-cna' }],
      stateFaqs: [
        { q: 'Why does California require 160 hours of CNA training?', a: 'California law sets its own standard \u2014 60 classroom hours plus 100 supervised clinical hours \u2014 more than double the federal 75-hour floor. This is also why out-of-state CNAs transferring to California are often asked to complete additional training.' },
        { q: 'How much does California charge for CNA certification?', a: 'CDPH charges nothing: no application fee, no renewal fee. What candidates pay is fingerprinting (DOJ $32 + FBI $18 plus the Live Scan operator\u2019s fee) and the testing vendor\u2019s fees \u2014 Headmaster\u2019s California fees rose to $40 knowledge / $45 audio / $100 skills effective 1 March 2026.' },
        { q: 'When do I apply for California CNA certification?', a: 'At enrollment, not after graduation: the CDPH 283B initial application and Live Scan go in before you have any patient contact, and the program director signs the application to confirm completion later.' },
        { q: 'What does California renewal require beyond the standard work rule?', a: 'Every 24 months you need maintained criminal record clearance, at least one day of paid facility work, and 48 hours of in-service training or CEUs with at least 12 hours in each year \u2014 a continuing-education load most states do not impose on nurse aides.' }
      ],
      sources: [
        { label: 'CDPH \u2014 Aide and Technician Certification Section (ATCS)', url: 'https://www.cdph.ca.gov/Programs/CHCQ/LCP/Pages/ATCS.aspx', checkedOn: '2026-10' },
        { label: 'Licensing Atlas \u2014 California CNA (quoting CDPH FAQ and Headmaster posted fees)', url: 'https://licensingatlas.com/cna/ca-cna', checkedOn: '2026-10' },
        { label: 'Credentia \u2014 NNAAP administrator', url: 'https://www.credentia.com', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 California wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CA', checkedOn: '2026-10' }
      ]
    },
    CO: {
      agency: 'Colorado State Board of Nursing (DORA)',
      agencyUrl: 'https://dpo.colorado.gov/Nursing',
      exam: {
        vendor: 'Credentia (NNAAP)',
        vendorUrl: 'https://credentia.com/test-takers/co',
        parts: [
          { name: 'Written examination', questions: '70 multiple-choice (including 10 pretest items)', time: '90 minutes', pass: 'Both portions must be passed' },
          { name: 'Oral examination', questions: '60 multiple-choice plus 10 reading-comprehension items', pass: 'Requested at application' },
          { name: 'Skills evaluation', questions: '5 randomly selected skills, including mandatory hand hygiene', pass: 'All five skills must be passed' }
        ],
        fee: 'Written + skills $145 (oral + skills $145); written or oral only $50; skills only $95',
        practical: 'Five randomly selected nurse aide skills including mandatory hand hygiene; three attempts per component within 24 months of the application date. Testing is offered at Colorado regional test sites or by online remote proctoring.',
        languages: ['English', 'Spanish oral examination'],
        sourceUrl: 'https://credentia.com/test-takers/co'
      },
      education: { hours: '75 hours minimum, including at least 16 hours of supervised clinical practice', sourceUrl: 'https://dpo.colorado.gov/Nursing' },
      eligibility: { minAge: 16, other: 'Applicants must clear FBI/CBI fingerprint background checks and meet program-level immunization and CPR requirements before clinical training' },
      background: { method: 'Fingerprint-based FBI and CBI (Colorado Bureau of Investigation) background checks', sourceUrl: 'https://dpo.colorado.gov/Nursing' },
      fees: [
        { item: 'Written + skills examination', fee: '$145', sourceUrl: 'https://credentia.com/test-takers/co' },
        { item: 'Written or oral retake only', fee: '$50', sourceUrl: 'https://credentia.com/test-takers/co' },
        { item: 'Skills retake only', fee: '$95', sourceUrl: 'https://credentia.com/test-takers/co' },
        { item: 'Endorsement or reinstatement application', fee: '$50', sourceUrl: 'https://dpo.colorado.gov/Nursing' }
      ],
      application: { portal: 'Credentia CNA365', portalUrl: 'https://credentia.com/test-takers/co', steps: ['Complete a Board-approved 75-hour training program', 'Create a CNA365 account, select the eligibility route, upload documents and pay', 'Schedule in person at a regional test site or by remote proctoring once approved; pass both portions within 24 months of the application date'], sourceUrl: 'https://credentia.com/test-takers/co' },
      renewal: { cycle: '2 years', work: 'At least 8 hours of paid nursing-related work under RN/LPN supervision in the prior 24 months', fee: '$50 (reinstatement)', sourceUrl: 'https://dpo.colorado.gov/Nursing' },
      reciprocity: { rule: 'Endorsement: out-of-state CNAs apply online through the DORA portal with proof of active, unencumbered certification and fingerprinting, pay $50, and are not retested; passing results transmitted by Credentia update the registry by the next business day', sourceUrl: 'https://dpo.colorado.gov/Nursing' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$47,380', p25: '$44,550', p75: '$49,920', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CO' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://dpo.colorado.gov/Nursing' }],
      stateFaqs: [
        { q: 'What does the Colorado CNA exam cost?', a: 'Credentia charges $145 for the written or oral test plus skills evaluation taken together; retaking just the knowledge portion is $50 and just the skills portion is $95.' },
        { q: 'Can I take the Colorado CNA exam online?', a: 'Yes \u2014 Colorado candidates may test in person at a regional test site or by online remote proctoring through Credentia.' },
        { q: 'How long do I have to pass both Colorado exam portions?', a: 'Twenty-four months from the date your application is received, with up to three attempts per component before retraining is required.' },
        { q: 'What does Colorado charge out-of-state CNAs to transfer?', a: 'A $50 endorsement application through the DORA portal, plus fingerprinting; Colorado does not retest aides who hold active, unencumbered certification from another state.' }
      ],
      sources: [
        { label: 'Credentia \u2014 Colorado test-taker portal', url: 'https://credentia.com/test-takers/co', checkedOn: '2026-10' },
        { label: 'Colorado State Board of Nursing (DORA)', url: 'https://dpo.colorado.gov/Nursing', checkedOn: '2026-10' },
        { label: 'Colorado Nurse Aide Registry search (via Credentia Colorado page)', url: 'https://credentia.com/test-takers/co', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Colorado wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CO', checkedOn: '2026-10' }
      ]
    },
    AR: {
      agency: 'Arkansas Department of Human Services \u2014 Office of Long Term Care',
      agencyUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/',
      exam: {
        vendor: 'Prometric',
        vendorUrl: 'https://www.prometric.com/NurseAide/AR',
        parts: [
          { name: 'Written (or oral) test', pass: 'Both portions must be passed' },
          { name: 'Clinical skills test', questions: 'Randomly selected skills performed before an evaluator', pass: 'All critical steps must be completed correctly' }
        ],
        fee: 'First attempt written (or oral) + skills $75; skills-only retake $55; written (or oral)-only retake $20; $10 nonrefundable eligibility screening fee for first-time testers',
        practical: 'The clinical skills test is performed before a Prometric evaluator at a regional test site or in-facility site; candidates must present the original Authorization to Test letter and one government-issued photo ID matching the application name exactly.',
        languages: ['English only', 'Oral test available as an ESL accommodation \u2014 translators and translation dictionaries are not permitted'],
        sourceUrl: 'https://www.prometric.com/files/AR_CNA_CIB.pdf',
        sourceNote: 'Arkansas Candidate Information Bulletin'
      },
      education: { hours: '90 hours of state-approved training, including at least 16 hours of clinical practice in an approved long-term care facility', onlineAllowed: 'Hybrid formats permitted; the clinical hours are in person under a licensed nurse\u2019s supervision', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/' },
      eligibility: { other: 'Certification routes include new Arkansas-trained aides, previously certified Arkansas aides (self-pay), RN or LPN students with OLTC approval, aides trained or certified in another state, and other OLTC-approved routes; candidates employed by or holding a letter of intent from a Medicaid-certified nursing home have fees paid by DHS' },
      fees: [
        { item: 'Written (or oral) + clinical skills test, first attempt', fee: '$75', sourceUrl: 'https://www.prometric.com/files/AR_CNA_CIB.pdf' },
        { item: 'Eligibility screening fee (first-time testers, each new training program)', fee: '$10', sourceUrl: 'https://www.prometric.com/files/AR_CNA_CIB.pdf' },
        { item: 'Clinical skills retake only', fee: '$55', sourceUrl: 'https://www.prometric.com/files/AR_CNA_CIB.pdf' },
        { item: 'Written or oral retake only', fee: '$20', sourceUrl: 'https://www.prometric.com/files/AR_CNA_CIB.pdf' }
      ],
      application: { portal: 'Prometric Arkansas Nurse Aide', portalUrl: 'https://www.prometric.com/NurseAide/AR', steps: ['Complete an OLTC-approved training program', 'Submit the Prometric examination application with the training completion document, the $10 eligibility screening fee, and (for employed candidates) an original employer letter or letter of intent on facility letterhead', 'Test at a regional test site or in-facility site with an Authorization to Test letter'], sourceUrl: 'https://www.prometric.com/files/AR_CNA_APP.pdf' },
      renewal: { cycle: '24 months', work: 'At least 8 hours of paid nurse aide work per 24-month period; private-pay and home-health aides verify with a pay stub and a notarized employer letter describing duties', fee: 'Renewal filed through Prometric on behalf of the state', sourceUrl: 'https://www.prometric.com/NurseAide/AR' },
      reciprocity: { rule: 'Aides certified in another state apply through the OLTC approval route: current certification in good standing with no negative findings, training of at least 90 hours, and a competency exam substantially similar to Arkansas\u2019s; aides trained out of state without an exam must pass the Arkansas exam within one year of training completion', sourceUrl: 'https://www.prometric.com/files/AR_CNA_APP.pdf' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$34,430', p25: '$30,200', p75: '$36,070', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AR' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/' }],
      stateFaqs: [
        { q: 'How much does the Arkansas nurse aide exam cost?', a: 'Prometric charges $75 for the written (or oral) test and clinical skills test together, $55 to retake only the skills test, and $20 to retake only the written or oral test, plus a one-time $10 eligibility screening fee. Candidates employed by or promised a job at a Medicaid-certified nursing home have DHS pay the test fee.' },
        { q: 'Is the Arkansas exam offered in other languages?', a: 'No. The Arkansas Nursing Assistant Competency Exam is offered only in English; translators and translation dictionaries are barred, though an oral test format is available as an ESL accommodation.' },
        { q: 'What happens if my Arkansas certification lapses?', a: 'If expired for less than 24 months, you retest through Prometric ($20 written, $55 skills, or $75 both) without new training. After 24 months expired, you must pass the exam and complete 16 hours of clinical training to recertify.' },
        { q: 'Who pays for Arkansas CNA testing?', a: 'DHS funds testing for aides employed by, or holding a dated letter of intent from, a Medicaid-certified nursing facility; independent candidates pay their own fees.' }
      ],
      sources: [
        { label: 'Prometric \u2014 Arkansas Candidate Information Bulletin (PDF)', url: 'https://www.prometric.com/files/AR_CNA_CIB.pdf', checkedOn: '2026-10' },
        { label: 'Prometric \u2014 Arkansas examination application (PDF)', url: 'https://www.prometric.com/files/AR_CNA_APP.pdf', checkedOn: '2026-10' },
        { label: 'Arkansas DHS \u2014 Office of Long Term Care / Provider Services', url: 'https://humanservices.arkansas.gov/divisions-shared-services/provider-services-quality-assurance/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Arkansas wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=AR', checkedOn: '2026-10' }
      ]
    },
    CT: {
      agency: 'Connecticut Department of Public Health \u2014 Nurse Aide Registry',
      agencyUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nurseaide/nurse-aide-registry',
      exam: {
        vendor: 'Prometric',
        vendorUrl: 'https://www.prometric.com/exams/nurseaide-ct',
        parts: [
          { name: 'Written examination', pass: 'Both the written and practical parts must be passed' },
          { name: 'Oral examination', pass: 'Available in place of the written test' },
          { name: 'Practical (clinical skills) examination', pass: 'Both parts must be passed for registry placement' }
        ],
        fee: 'From 1 August 2026: written + clinical skills $125; oral + clinical skills $125; clinical skills only $77; written only $48; oral only $48 (previously $118 combined)',
        practical: 'Prometric publishes the exact clinical skills checklist its evaluators use, along with skills timing information and indirect-care behavior forms, on the Connecticut exam page.',
        languages: ['English', 'Oral examination'],
        sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct'
      },
      education: { hours: '100 hours of DPH-approved nurse aide training', sourceUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nurseaide/route-1---new-cna' },
      eligibility: { other: 'Route 1 (new CNA): successful completion of a DPH-approved training program; candidates have 24 months from training completion to pass the exam, with no limit on attempts within that window' },
      fees: [
        { item: 'Written + clinical skills examination (from 1 August 2026)', fee: '$125', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' },
        { item: 'Written or oral retake only', fee: '$48', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' },
        { item: 'Clinical skills retake only', fee: '$77', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' }
      ],
      application: { portal: 'Prometric Connecticut Nurse Aide', portalUrl: 'https://www.prometric.com/exams/nurseaide-ct', steps: ['Complete a DPH-approved nurse aide training program', 'Apply to Prometric online (immediate card payment) or by mail with certified check or money order', 'Pass both the written and practical portions within 24 months of training completion'], sourceUrl: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nurseaide/route-1---new-cna' },
      renewal: { cycle: 'Certification renewal is filed through Prometric, which manages the CNA Registry for DPH; submit the renewal form at least 2 weeks before expiration with employment verification', work: 'Employment verification forms document paid nurse aide work during the certification period', processingTime: 'Allow 10 business days from mailing date for renewal processing', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' },
      reciprocity: { rule: 'Out-of-state CNAs apply through Prometric\u2019s Connecticut registry services; Connecticut grants certification based on the candidate\u2019s active standing and verification from the prior registry', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$44,790', p25: '$41,900', p75: '$47,180', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CT' },
      recentChanges: [{ year: 2026, change: 'Prometric implemented new Connecticut exam pricing effective 1 August 2026: written + skills $125, written or oral only $48, skills only $77 (previously $118 combined).', sourceUrl: 'https://www.prometric.com/exams/nurseaide-ct' }],
      stateFaqs: [
        { q: 'Who runs the Connecticut CNA exam and registry?', a: 'The Department of Public Health contracts both to Prometric: it develops and administers the Nurse Aide Competency Exam and manages the Certified Nurse Aide Registry, including renewal processing.' },
        { q: 'What does the Connecticut exam cost from August 2026?', a: 'Effective 1 August 2026: $125 for the written and clinical skills together, $125 oral plus skills, $48 for a written- or oral-only retake, and $77 for a skills-only retake \u2014 up from the previous $118 combined fee.' },
        { q: 'How many times can I take the Connecticut CNA exam?', a: 'There is no limit on attempts, but both the written and practical parts must be passed within 24 months of completing your training program.' },
        { q: 'When should I file my Connecticut renewal?', a: 'Submit the Prometric renewal form at least two weeks before your certificate expires, with the employment verification form documenting your paid nurse aide work; processing takes about 10 business days.' }
      ],
      sources: [
        { label: 'Prometric \u2014 Connecticut Nurse Aide Exam page (fees, registry, renewal)', url: 'https://www.prometric.com/exams/nurseaide-ct', checkedOn: '2026-10' },
        { label: 'Connecticut DPH \u2014 Route 1: New CNA', url: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nurseaide/route-1---new-cna', checkedOn: '2026-10' },
        { label: 'Connecticut DPH \u2014 Nurse Aide Registry', url: 'https://portal.ct.gov/dph/practitioner-licensing--investigations/nurseaide/nurse-aide-registry', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Connecticut wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=CT', checkedOn: '2026-10' }
      ]
    },
    DE: {
      agency: 'Delaware Division of Health Care Quality (DHSS) \u2014 CNA Registry',
      agencyUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/',
      exam: {
        vendor: 'Prometric (NNAAP)',
        vendorUrl: 'https://www.prometric.com/nurseaide/DE',
        parts: [
          { name: 'Written test', questions: '60 multiple-choice', time: '90 minutes', pass: '72%' },
          { name: 'Oral test', pass: 'Same content read aloud with a replay option' },
          { name: 'Clinical skills test', questions: '5 skills: hand hygiene (always tested), indirect care (scored on all tasks), and 3 randomly selected skills', pass: 'All five must be passed; both portions within 3 attempts and 24 months of training' }
        ],
        fee: 'Written + clinical skills $115 (oral + skills $115); skills-only retake $75; written- or oral-only retake $40',
        practical: 'Five skills performed before a Prometric evaluator \u2014 hand hygiene is always included and indirect care behaviors are scored on every task. A $25 rescheduling fee applies with fewer than five business days\u2019 notice.',
        languages: ['English', 'Oral version'],
        sourceUrl: 'https://www.prometric.com/nurseaide/DE'
      },
      education: { hours: '150 hours minimum, equally divided between classroom instruction (75) and supervised clinical training (75) in a licensed facility', onlineAllowed: 'Fully online programs are not approved; the clinical component is in person', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' },
      eligibility: { other: 'Training must be completed within 24 months of the exam date; graduates of DHCQ-approved programs only' },
      fees: [
        { item: 'Written + clinical skills examination', fee: '$115', sourceUrl: 'https://www.prometric.com/nurseaide/DE' },
        { item: 'Written or oral retake only', fee: '$40', sourceUrl: 'https://www.prometric.com/nurseaide/DE' },
        { item: 'Clinical skills retake only', fee: '$75', sourceUrl: 'https://www.prometric.com/nurseaide/DE' },
        { item: 'Certification renewal (through RELIAS)', fee: '$25', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' },
        { item: 'Reciprocity application', fee: '$30', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' },
        { item: 'Lapsed-certification retest (both exams via Prometric)', fee: '$115', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' }
      ],
      application: { portal: 'Prometric Delaware Nurse Aide', portalUrl: 'https://www.prometric.com/nurseaide/DE', steps: ['Complete a DHCQ-approved 150-hour training program', 'Apply to Prometric online with a card or by mail with certified check or money order', 'Receive the admission letter by email and test with two valid IDs in clinical attire'], sourceUrl: 'https://www.prometric.com/nurseaide/DE' },
      renewal: { cycle: '24 months', ce: '24 hours of approved continuing education (RELIAS CEUs), including 6 hours of dementia training and 2 hours of abuse-prevention training', work: 'At least 64 hours of paid nursing-related service under nurse or physician supervision during the certification period, self-reported on the online 64-hour worked renewal form', fee: '$25', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' },
      reciprocity: { rule: 'Delaware grants reciprocity ($30, about 30 days processing) to CNAs holding a current certificate in good standing who either have three months of full-time paid CNA experience under nurse supervision or completed training of at least 150 hours; CNAs certified in Maryland must also hold a current Geriatric Nursing Assistant certificate', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$42,030', p25: '$38,490', p75: '$45,210', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=DE' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/' }],
      stateFaqs: [
        { q: 'Why is Delaware\u2019s training requirement 150 hours?', a: 'Delaware law requires 150 hours \u2014 twice the federal floor \u2014 split evenly: 75 hours of classroom instruction and 75 hours of supervised clinical training in a licensed facility.' },
        { q: 'What are Delaware\u2019s renewal requirements?', a: 'Every 24 months: 24 RELIAS continuing-education hours (including 6 dementia and 2 abuse-prevention hours), at least 64 paid hours of nursing-related work, the online 64-hour self-report, and a $25 fee paid through the RELIAS site.' },
        { q: 'What happens if I let my Delaware certification lapse?', a: 'You schedule both the written and clinical skills exams through Prometric ($115) to regain certification; CNAs who miss the 64-hour work requirement either retrain and retest or just retest.' },
        { q: 'What is unusual about Delaware reciprocity from Maryland?', a: 'Maryland CNAs must also hold a current Geriatric Nursing Assistant (GNA) certificate to be eligible \u2014 an extra layer no other state\u2019s transferees face.' }
      ],
      sources: [
        { label: 'Delaware DHSS Division of Health Care Quality \u2014 CNA Registry (recertification, reciprocity, FAQ)', url: 'https://dhss.delaware.gov/dhcq/dhcq/cna-registry/', checkedOn: '2026-10' },
        { label: 'Prometric \u2014 Delaware Nurse Aide', url: 'https://www.prometric.com/nurseaide/DE', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Delaware wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=DE', checkedOn: '2026-10' }
      ]
    },
    DC: {
      agency: 'District of Columbia Board of Nursing (DC Health)',
      agencyUrl: 'https://dchealth.dc.gov/bon',
      exam: {
        vendor: 'Credentia (NNAAP)',
        vendorUrl: 'https://credentia.com/test-takers/dc',
        parts: [
          { name: 'Written examination', questions: 'NNAAP written test', pass: 'Both portions must be passed' },
          { name: 'Oral examination (English or Spanish)', pass: 'Taken in place of the written test' },
          { name: 'Skills evaluation', pass: 'Both portions must be passed for registry placement' }
        ],
        fee: 'Written $55; English or Spanish oral $55; skills evaluation $110',
        practical: 'The NNAAP skills evaluation is performed before a Credentia Nurse Aide Evaluator; three attempts are allowed per portion, and both parts must be passed within a two-year period.',
        languages: ['English', 'Spanish oral examination'],
        sourceUrl: 'https://kb-dc.credentia.com/en/article/exam-fee'
      },
      education: { hours: '120 hours minimum \u2014 45 classroom hours, 30 lab hours, and 45 hours of clinical practicum in a nursing facility \u2014 completed within 24 months of the exam application', sourceUrl: 'https://dchealth.dc.gov/bon' },
      eligibility: { other: 'Testing routes include newly trained aides, nursing-school graduates, licensed nurses, and lapsed DC certificate holders; documentation varies by route' },
      fees: [
        { item: 'Written or oral examination', fee: '$55', sourceUrl: 'https://kb-dc.credentia.com/en/article/exam-fee' },
        { item: 'Skills evaluation', fee: '$110', sourceUrl: 'https://kb-dc.credentia.com/en/article/exam-fee' },
        { item: 'Renewal', fee: '$12', sourceUrl: 'https://dchealth.dc.gov/bon' },
        { item: 'Endorsement (out-of-state CNA, no exam)', fee: '$15', sourceUrl: 'https://dchealth.dc.gov/bon' }
      ],
      application: { portal: 'Credentia CNA365', portalUrl: 'https://credentia.com/test-takers/dc', steps: ['Complete a DC Health-approved 120-hour training program within the prior 24 months', 'Register and apply through Credentia CNA365 with the documents for your eligibility route', 'Pass both the written (or oral) test and the skills evaluation'], sourceUrl: 'https://credentia.com/test-takers/dc' },
      renewal: { cycle: '2 years', ce: '24 contact hours of continuing education, including at least 2 hours of cultural competency or specialized clinical training for patients who identify as LGBTQ and at least 10% addressing DC-designated public health priorities', work: 'At least 8 hours of paid nursing-related service during the certification period, verified by the employer at renewal', fee: '$12', sourceUrl: 'https://dchealth.dc.gov/bon' },
      reciprocity: { rule: 'Endorsement for CNAs holding a current, unencumbered credential from another state who passed a Board-approved or CMS-recognized nurse aide assessment (NNAAP, NACEP or ETS); $15 endorsement fee, no retest', sourceUrl: 'https://dchealth.dc.gov/bon' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$47,700', p25: '$42,400', p75: '$51,850', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=DC' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://dchealth.dc.gov/bon' }],
      stateFaqs: [
        { q: 'How much does DC CNA testing cost?', a: 'Credentia charges $55 for the written test or either oral version (English or Spanish) and $110 for the skills evaluation. DC nursing homes must pay the NNAAP fees for their employed aides, including retests.' },
        { q: 'What makes DC\u2019s renewal CE requirement unusual?', a: 'The 24 biennial contact hours must include at least 2 hours on cultural competency or LGBTQ patient clinical training, and at least 10% of the total must address public health priorities designated by the DC Director of Health.' },
        { q: 'How long do I have to pass both DC exam portions?', a: 'Both the skills evaluation and the knowledge exam must be passed within a two-year period, with three attempts allowed per portion before retraining is required.' },
        { q: 'What happens if my DC certification lapses?', a: 'Reinstatement is possible within five years of expiration with 24 CE hours in the prior two years, 8 paid hours of nursing work in the prior 24 months, and current registration; after five years you must complete a new approved program and pass the NNAAP again.' }
      ],
      sources: [
        { label: 'Credentia \u2014 District of Columbia exam fee', url: 'https://kb-dc.credentia.com/en/article/exam-fee', checkedOn: '2026-10' },
        { label: 'Credentia \u2014 DC test-taker portal', url: 'https://credentia.com/test-takers/dc', checkedOn: '2026-10' },
        { label: 'DC Board of Nursing (DC Health)', url: 'https://dchealth.dc.gov/bon', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 District of Columbia wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=DC', checkedOn: '2026-10' }
      ]
    },
    FL: {
      agency: 'Florida Board of Nursing \u2014 Certified Nursing Assistant Program',
      agencyUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/',
      exam: {
        vendor: 'Prometric',
        vendorUrl: 'https://www.prometric.com/nurseaide/fl',
        parts: [
          { name: 'Written (or oral) knowledge test', questions: '60 multiple-choice', time: '90 minutes', pass: '70%; Florida uses its own content outline \u2014 Promotion of Safety 22%, Basic Nursing Care 24%, Role of the Nurse Aide 20%, Promotion of Function and Health 20%, Specialized Care 14% \u2014 not the national NNAAP weighting' },
          { name: 'Clinical skills evaluation', questions: '5 randomly selected nurse aide skills', pass: 'All five must be passed; handwashing is evaluated at the start and end of every skill' }
        ],
        fee: 'Both portions $155; written-only retake $35; skills-only retake $120',
        practical: 'Five randomly selected skills performed before a Prometric evaluator at a skills testing facility; up to 3 attempts, and a third failure of either portion requires completing a new 120-hour Board-approved program.',
        languages: ['English', 'Oral version'],
        sourceUrl: 'https://www.prometric.com/nurseaide/fl'
      },
      education: { hours: '120 hours minimum \u2014 at least 80 hours of classroom and lab instruction plus 40 hours of supervised clinical practice, with at least 16 classroom hours before clinical work begins', onlineAllowed: 'Hybrid formats exist, but the 40 clinical hours are supervised and in person', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
      eligibility: { minAge: 18, education: 'Age 18, or a high school diploma or GED equivalent', other: 'Florida uniquely allows candidates to challenge the CNA examination without completing a formal training program, which makes it one of the fastest and cheapest states in which to certify' },
      background: { method: 'Level 2 background screening through electronic Livescan fingerprinting submitted to the Florida Department of Law Enforcement Care Provider Background Screening Clearinghouse', fee: 'Livescan fees vary by provider', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
      fees: [
        { item: 'Written + skills examination', fee: '$155', sourceUrl: 'https://www.prometric.com/nurseaide/fl' },
        { item: 'Written retake only', fee: '$35', sourceUrl: 'https://www.prometric.com/nurseaide/fl' },
        { item: 'Skills retake only', fee: '$120', sourceUrl: 'https://www.prometric.com/nurseaide/fl' },
        { item: 'Initial application (Florida Board of Nursing)', fee: '$75', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
        { item: 'Renewal (biennium)', fee: '$55', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' }
      ],
      application: { portal: 'Prometric (exam) + Florida MQA Services Portal (renewal)', portalUrl: 'https://www.prometric.com/nurseaide/fl', steps: ['Apply through Prometric; the training provider electronically verifies completion with the Board (challenge candidates apply by examination)', 'The Board reviews the application within 30 days and issues an eligibility statement to Prometric', 'Pass both portions; the certificate is issued and mailed after processing'], processingTime: 'Board application review within 30 days; certificate issuance may take four or more weeks after passing', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
      renewal: { cycle: '2 years (renewal by May 31 of the renewal year; half of Florida CNAs renew in even years, half in odd)', ce: '24 hours of in-service training each biennium', work: 'Paid nursing-related services within the last 24 consecutive months', fee: '$55', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
      reciprocity: { rule: 'Out-of-state CNAs apply for Florida certification by endorsement; applicants with lapsed or unverified work history are routed to the examination pathway', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$37,510', p25: '$36,040', p75: '$42,310', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=FL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/' }],
      stateFaqs: [
        { q: 'Can I become a Florida CNA without taking a training course?', a: 'Yes \u2014 Florida is unusual in letting candidates challenge the state exam directly, which is why Florida is one of the fastest and cheapest states in which to certify. Most candidates still complete a 120-hour approved program.' },
        { q: 'Is the Florida CNA written exam the standard NNAAP?', a: 'No. Prometric\u2019s Florida exam is 60 questions in 90 minutes \u2014 shorter than the 70-question, 2-hour NNAAP format most states use \u2014 and follows a Florida-specific content outline with Basic Nursing Care (24%) and Promotion of Safety (22%) as the largest domains.' },
        { q: 'What happens after three failed attempts in Florida?', a: 'Failing either portion three times requires completing another full 120-hour Board-approved training program before testing again.' },
        { q: 'How does Florida\u2019s renewal calendar work?', a: 'Certification renews every two years by May 31 of your renewal year \u2014 half the state renews in even years and half in odd \u2014 with 24 hours of in-service training and paid work within the last 24 consecutive months; renewals are filed online up to 90 days early.' }
      ],
      sources: [
        { label: 'Prometric \u2014 Florida nurse aide exam', url: 'https://www.prometric.com/nurseaide/fl', checkedOn: '2026-10' },
        { label: 'Florida Board of Nursing \u2014 Certified Nursing Assistant', url: 'https://floridasnursing.gov/licensing/certified-nursing-assistant/', checkedOn: '2026-10' },
        { label: 'Florida MQA Services Portal (renewals and verification)', url: 'https://mqa-internet.doh.state.fl.us/MQASearchServices/Home', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Florida wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=FL', checkedOn: '2026-10' }
      ]
    },
    GA: {
      agency: 'Georgia Department of Community Health \u2014 Georgia Nurse Aide Registry (administered by Alliant Health Solutions)',
      agencyUrl: 'https://nurseaide.allianthealth.org',
      exam: {
        vendor: 'Credentia (NNAAP)',
        vendorUrl: 'https://credentia.com/test-takers/ga',
        parts: [
          { name: 'Knowledge examination (written or oral)', questions: '70 multiple-choice', pass: 'Both components must be passed within 12 months of training completion; 3 attempts per component' },
          { name: 'Skills evaluation', questions: '5 randomly selected CNA skills, including handwashing', pass: 'All five must be passed; failure after three attempts on either part requires retraining' }
        ],
        fee: 'Written + skills $130; oral + skills $130; written or oral only $35; skills only $95',
        practical: 'Five randomly selected skills including handwashing, performed before a Credentia evaluator at in-facility or regional test sites; skills evaluation scheduling must be reserved at least two business days in advance.',
        languages: ['English', 'Oral examination'],
        sourceUrl: 'https://credentia.com/test-takers/ga'
      },
      education: { hours: '85 hours minimum \u2014 61 hours of classroom and lab instruction plus 24 hours of supervised clinical training in a nursing home', sourceUrl: 'https://nurseaide.allianthealth.org' },
      eligibility: { other: 'No high school diploma is required by the registry; individual training programs set their own admission requirements. Aides trained in a long-term care facility must certify within 120 days of starting the program.' },
      background: { method: 'Criminal background check per Georgia law for healthcare workers, typically arranged by the employer or training program (Georgia Crime Information Center check; federal fingerprint check commonly added by employers)', sourceUrl: 'https://nurseaide.allianthealth.org' },
      fees: [
        { item: 'Written + skills examination', fee: '$130', sourceUrl: 'https://credentia.com/test-takers/ga' },
        { item: 'Written or oral retake only', fee: '$35', sourceUrl: 'https://credentia.com/test-takers/ga' },
        { item: 'Skills retake only', fee: '$95', sourceUrl: 'https://credentia.com/test-takers/ga' },
        { item: 'Registry listing and renewal', fee: 'No fee', sourceUrl: 'https://nurseaide.allianthealth.org' }
      ],
      application: { portal: 'Credentia CNA365 (exam) + Georgia MMIS Nurse Aide portal (reciprocity, program lists)', portalUrl: 'https://credentia.com/test-takers/ga', steps: ['Complete a Georgia-approved 85-hour Nurse Aide Training Program', 'Create a CNA365 account, select eligibility route E1, upload training verification and ID, and pay', 'Schedule the skills evaluation and knowledge exam; pass both within 12 months of training completion'], processingTime: 'Registry listing appears within about 10 business days of passing', sourceUrl: 'https://credentia.com/test-takers/ga' },
      renewal: { cycle: '24 months', work: 'At least 8 hours of paid nursing or nursing-related work under licensed-nurse supervision reported by the aide inside the period, with a pay stub or W-2 and employer sign-off (private-duty work needs a notarized supervising-nurse statement)', fee: 'No fee', sourceUrl: 'https://nurseaide.allianthealth.org' },
      reciprocity: { rule: 'Reciprocity through the Georgia MMIS Nurse Aide portal: current, good-standing out-of-state certification plus verification of at least 8 hours of paid aide employment within the prior two years under licensed-nurse supervision; no fee; web-portal verifications process within about 14 days. Aides who have not worked in two years apply through the reciprocity examination pathway instead.', sourceUrl: 'https://nurseaide.allianthealth.org' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$37,680', p25: '$35,490', p75: '$42,980', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=GA' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://nurseaide.allianthealth.org' }],
      stateFaqs: [
        { q: 'Who administers the Georgia Nurse Aide Registry?', a: 'Alliant Health Solutions operates the registry and the Georgia CareConnect nurse aide program under contract with the Department of Community Health; exam registration runs through Credentia\u2019s CNA365 portal.' },
        { q: 'How much does the Georgia NNAAP exam cost?', a: '$130 for the written or oral test plus skills evaluation; retaking only the knowledge portion is $35 and only the skills portion $95. Georgia nursing homes must pay NNAAP fees for their employed aides.' },
        { q: 'How do I renew my Georgia registry listing?', a: 'You report it yourself: at least 8 hours of paid aide work in the 24-month window, documented with a pay stub or W-2 and your employer\u2019s signature on the renewal form. There is no renewal fee, and private-duty workers submit a notarized statement from the supervising nurse.' },
        { q: 'What happens if my Georgia listing expires?', a: 'Within a year past expiration you can retake and pass the written or oral and skills exams without retraining; a year or more out requires completing a new state-approved training program before retesting.' }
      ],
      sources: [
        { label: 'Credentia \u2014 Georgia test-taker portal', url: 'https://credentia.com/test-takers/ga', checkedOn: '2026-10' },
        { label: 'Georgia Nurse Aide Registry (Alliant Health Solutions / DCH)', url: 'https://nurseaide.allianthealth.org', checkedOn: '2026-10' },
        { label: 'Georgia DCH Nurse Aide program via Georgia MMIS portal', url: 'https://www.mmis.georgia.gov', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Georgia wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=GA', checkedOn: '2026-10' }
      ]
    },
    HI: {
      agency: 'Hawaii DCCA Professional and Vocational Licensing \u2014 Nurse Aide Registry',
      agencyUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/',
      exam: {
        vendor: 'Prometric',
        vendorUrl: 'https://www.prometric.com/nurseaide/HI',
        parts: [
          { name: 'Knowledge test (written)', questions: '60 multiple-choice', time: '90 minutes', pass: 'Both sections must be passed' },
          { name: 'Clinical skills test', questions: '5 assigned skills, including hand hygiene', pass: 'Both sections must be passed; up to three attempts within two years' }
        ],
        fee: 'Application processing $25; written + clinical skills $200; oral + clinical skills $210; clinical skills only $150; written only $50; oral only $60; rescheduling with 5+ business days notice $25',
        practical: 'Five assigned skills including hand hygiene, performed before a Prometric evaluator; candidates bring an Authorization to Test letter, one government-issued photo ID with signature and a second signature-bearing ID.',
        languages: ['English', 'Oral examination'],
        sourceUrl: 'https://www.prometric.com/nurseaide/HI'
      },
      education: { hours: '100 hours of state-approved training \u2014 at least 70 hours of classroom instruction and 30 hours of supervised clinical practice', sourceUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/' },
      eligibility: { minAge: 18 },
      background: { method: 'Criminal background check plus physical examination and 2-step TB clearance, generally required by training programs and for certification', sourceUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/' },
      fees: [
        { item: 'Application processing', fee: '$25', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
        { item: 'Written + clinical skills examination', fee: '$200', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
        { item: 'Written or oral retake only', fee: '$50 written / $60 oral', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
        { item: 'Clinical skills retake only', fee: '$150', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
        { item: 'Renewal (biennium)', fee: '$27', sourceUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/' }
      ],
      application: { portal: 'Prometric Hawaii Nurse Aide Program', portalUrl: 'https://www.prometric.com/nurseaide/HI', steps: ['Complete a DCCA-approved 100-hour training program', 'Submit the Hawaii Nurse Aide Application (to the training provider for in-facility testing, or mailed to Prometric in Kailua for regional testing) with the completion certificate and payment', 'Receive the Authorization to Test letter and schedule the exam'], processingTime: 'Certificate and wallet card mailed within about five business days of passing both parts', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
      renewal: { cycle: '2 years', ce: '24 hours of continuing education per cycle for CNAs not working in Medicare/Medicaid-approved facilities', work: 'At least 8 hours of paid CNA work in the preceding 24 months', fee: '$27', sourceUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/' },
      reciprocity: { rule: 'Reciprocity through Prometric: proof of active, unencumbered certification in the current state plus verification of CNA employment within the last 24 months; if the prior training fell short of Hawaii\u2019s 100-hour minimum, additional training may be required before the listing is granted', sourceUrl: 'https://www.prometric.com/nurseaide/HI' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$45,350', p25: '$40,060', p75: '$50,440', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=HI' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://cca.hawaii.gov/pvl/boards/nursing/' }],
      stateFaqs: [
        { q: 'How much does the Hawaii CNA exam cost?', a: 'Prometric charges $25 for application processing and $200 for the written and clinical skills tests together ($210 with the oral version); retakes are $50 written, $60 oral, or $150 skills only.' },
        { q: 'Why does Hawaii require 100 training hours?', a: 'Hawaii sets its standard above the federal 75-hour floor: every DCCA-approved program must deliver at least 100 hours, with at least 70 classroom and 30 supervised clinical.' },
        { q: 'What does Hawaii renewal require?', a: 'Every two years: at least 8 hours of paid CNA work in the preceding 24 months, a $27 renewal fee, and \u2014 for aides not working in Medicare/Medicaid-approved facilities \u2014 24 hours of continuing education.' },
        { q: 'What happens if I arrive late to my Hawaii exam?', a: 'A late arrival or missed exam forfeits your fees and requires paying the full fee again to reschedule; notifying Prometric at least five business days ahead limits the penalty to the $25 rescheduling charge.' }
      ],
      sources: [
        { label: 'Prometric \u2014 Hawaii Nurse Aide Program', url: 'https://www.prometric.com/nurseaide/HI', checkedOn: '2026-10' },
        { label: 'Hawaii DCCA PVL \u2014 Board of Nursing / Nurse Aide Registry', url: 'https://cca.hawaii.gov/pvl/boards/nursing/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Hawaii wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=HI', checkedOn: '2026-10' }
      ]
    },
    ID: {
      agency: 'Idaho Department of Health and Welfare \u2014 Idaho Nurse Aide Program / CNA Registry',
      agencyUrl: 'https://healthandwelfare.idaho.gov',
      exam: {
        vendor: 'Prometric (written/oral knowledge exam) + manual skills test at Idaho regional career-technical colleges',
        vendorUrl: 'https://www.prometric.com/exams/nurseaide-id',
        parts: [
          { name: 'Manual skills test', questions: 'Skills demonstration scored pass/fail by a nurse evaluator', pass: 'Three attempts allowed within 6 months of program completion; after three unsuccessful attempts another training program must be completed' },
          { name: 'Written (or oral) knowledge exam', vendor: 'Prometric', pass: 'Three attempts allowed; scheduled within one year of program completion' }
        ],
        fee: 'Written exam $34 plus testing-site fees; oral exam $34 plus testing-site fees (pricing effective 1 July 2026); training programs and test sites may add their own fees',
        practical: 'The skills evaluation is taken in person at one of six Idaho regional career-technical colleges or an approved contractor site; Prometric reports passing results to the registry within two business days.',
        languages: ['English', 'Spanish', 'Oral exam'],
        sourceUrl: 'https://www.prometric.com/exams/nurseaide-id'
      },
      education: { hours: '120 clock hours minimum \u2014 80 hours of classroom instruction (including at least 40 hours of laboratory/skills training) plus clinical instruction including at least 32 hours in a clinical facility with at least 16 hours in a nursing home where an RN is on duty', onlineAllowed: 'The state curriculum\u2019s laboratory and clinical components are in person', sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
      eligibility: { other: 'Nursing students who completed one semester of an accredited nursing program (a basic nursing course, not prerequisites) may challenge the exam with an Approval to Test letter; paramedics, EMTs, military medics and medical assistants may not. A person without a Social Security number may test but is not placed on the registry until an SSN or ITIN is provided.', sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
      background: { method: 'State and federal fingerprint background check coordinated through the Idaho Department of Health and Welfare Criminal History Unit; results must clear before registry placement', sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
      fees: [
        { item: 'Written or oral knowledge exam', fee: '$34 plus site fees', sourceUrl: 'https://www.prometric.com/exams/nurseaide-id' },
        { item: 'Certification, renewal, and registry listing', fee: 'No fee', sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
        { item: 'Duplicate certificate or card', fee: '$15', sourceUrl: 'https://licensingatlas.com/cna/id-cna' }
      ],
      application: { portal: 'Prometric Idaho Nurse Aide (testing arranged directly with the training program)', portalUrl: 'https://www.prometric.com/exams/nurseaide-id', steps: ['Complete a state-approved 120-hour nursing assistant training program using the state curriculum', 'Take the manual skills test at a regional career-technical college within 6 months of completion', 'Take the Prometric written or oral knowledge exam within one year of completion; Prometric reports passing results to the registry within two business days and mails the certificate'], sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
      renewal: { cycle: '24 months', work: 'At least 8 hours of paid CNA or nursing-related work in the period (volunteer hours do not count); without it, both the skills and written tests must be retaken', fee: 'No fee', sourceUrl: 'https://licensingatlas.com/cna/id-cna' },
      reciprocity: { rule: 'An aide active and in good standing on another state\u2019s registry may be added to the Idaho registry without an exam, but only when living in Idaho or holding an offer of Idaho employment; Prometric publishes the reciprocity application form', sourceUrl: 'https://www.prometric.com/exams/nurseaide-id' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$38,650', p25: '$36,300', p75: '$46,250', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=ID' },
      recentChanges: [{ year: 2026, change: 'Prometric implemented new Idaho written/oral exam pricing of $34 plus testing-site fees effective 1 July 2026.', sourceUrl: 'https://www.prometric.com/exams/nurseaide-id' }],
      stateFaqs: [
        { q: 'Why is Idaho\u2019s skills test different from other states\u2019?', a: 'Idaho splits the competency evaluation: the manual skills test is taken in person at one of six regional career-technical colleges within six months of training, and the written or oral knowledge exam is taken through Prometric within a year \u2014 each with three attempts.' },
        { q: 'How much does Idaho certification cost the state?', a: 'Nothing: the Department charges no fees for certification, renewal, or registry listing. The only exam cost is Prometric\u2019s $34 written or oral fee plus site fees, and a duplicate certificate is $15.' },
        { q: 'Can nursing students skip Idaho CNA training?', a: 'Nursing students who have completed one semester of an accredited program \u2014 a basic nursing course, not prerequisites \u2014 may challenge the exam with an Approval to Test letter. Paramedics, EMTs, military medics and medical assistants may not.' },
        { q: 'What happens if I stop working as an Idaho CNA?', a: 'Renewal every 24 months requires at least 8 paid hours of CNA work \u2014 volunteer hours do not count. Without it, both the skills and written tests must be retaken.' }
      ],
      sources: [
        { label: 'Prometric \u2014 Idaho Nurse Aide Exam', url: 'https://www.prometric.com/exams/nurseaide-id', checkedOn: '2026-10' },
        { label: 'Licensing Atlas \u2014 Idaho CNA (quoting IDHW Nurse Aide Program FAQ and state curriculum)', url: 'https://licensingatlas.com/cna/id-cna', checkedOn: '2026-10' },
        { label: 'Idaho Department of Health and Welfare \u2014 Nurse Aide Program', url: 'https://healthandwelfare.idaho.gov', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Idaho wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=ID', checkedOn: '2026-10' }
      ]
    },
    IL: {
      agency: 'Illinois Department of Public Health \u2014 Health Care Worker Registry',
      agencyUrl: 'https://dph.illinois.gov/topics-services/health-care-regulation/nursing-homes/health-care-worker-registry.html',
      exam: {
        vendor: 'Southern Illinois University Carbondale \u2014 INACE project (Illinois Nurse Assistant/Aide Competency Examination)',
        vendorUrl: 'https://www.nurseaidetesting.com',
        parts: [
          { name: 'Written competency examination', questions: '85 multiple-choice across six duty areas', time: '90 minutes', pass: 'Pass/fail (cut score not publicly released); available in English or Spanish, paper or computer-based at about 50 test sites' },
          { name: 'Manual skills evaluation', pass: 'The 21 mandated skills are evaluated inside the training program by approved instructors \u2014 Illinois has no separate state-administered skills exam' }
        ],
        fee: 'Initial exam $85; failed-exam retake $85; no-show reschedule $55; out-of-state CNA application $25 (money order)',
        practical: 'Because the 21 performance skills are assessed during the Basic Nursing Assistant Training Program itself, the INACE written test is the only state exam; three opportunities are allowed within 12 months of program completion before retraining.',
        languages: ['English', 'Spanish'],
        sourceUrl: 'https://licensingatlas.com/cna/il-cna'
      },
      education: { hours: '120 hours minimum \u2014 62 hours theory, 18 hours laboratory, 40 hours clinical \u2014 in an IDPH-approved Basic Nursing Assistant Training Program, with at least 16 classroom hours before any direct resident contact', onlineAllowed: 'Clinical hours are supervised and in person', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
      eligibility: { other: 'Equivalency routes exist for nursing students and military-trained applicants; an Illinois-licensed RN or LPN in good standing may work as a CNA without a registry listing, but a nurse licensed only in another state may not' },
      background: { method: 'Fingerprint-based criminal history records check under the Health Care Worker Background Check Act (225 ILCS 46), initiated by the training program before the student enters training through an IDPH-approved Livescan vendor; results post electronically to the registry. A disqualifying conviction ends enrollment unless IDPH grants a Health Care Worker Waiver (waiver processing 6\u20138 weeks).', fee: 'Livescan vendor fees vary', sourceUrl: 'https://thecnaguide.com/cna-license-registration/illinois' },
      fees: [
        { item: 'INACE written examination (first attempt)', fee: '$85', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
        { item: 'INACE retake', fee: '$85', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
        { item: 'No-show reschedule', fee: '$55', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
        { item: 'Out-of-state CNA application', fee: '$25', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
        { item: 'Registry listing and renewal', fee: 'No fee', sourceUrl: 'https://dph.illinois.gov/topics-services/health-care-regulation/nursing-homes/health-care-worker-registry.html' }
      ],
      application: { portal: 'INACE / nurseaidetesting.com (exam) + IDPH Health Care Worker Registry', portalUrl: 'https://www.nurseaidetesting.com', steps: ['Complete an IDPH-approved 120-hour BNATP; the program initiates the fingerprint check before training begins', 'The program files graduate information and the candidate buys an exam seat with the SIUC INACE project', 'Pass the written exam within 12 months of program completion (three attempts); SIUC submits results to IDPH and the registry listing posts automatically'], sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
      renewal: { cycle: 'Registry listing stays active with at least 8 hours of paid nursing or nursing-related work under licensed-nurse supervision in every 24 consecutive months (private duty work does not count); employers enter the employment dates in the registry', fee: 'No fee', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
      reciprocity: { rule: 'Active out-of-state CNAs transfer onto the Health Care Worker Registry without retesting by filing the $25 out-of-state application (money order) with verification of their current listing', sourceUrl: 'https://licensingatlas.com/cna/il-cna' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$45,960', p25: '$39,420', p75: '$48,380', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IL' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://dph.illinois.gov/topics-services/health-care-regulation/nursing-homes/health-care-worker-registry.html' }],
      stateFaqs: [
        { q: 'Why doesn\u2019t Illinois have a state skills exam?', a: 'Illinois folds the skills evaluation into training: the 21 mandated performance skills are assessed inside the Basic Nursing Assistant Training Program by approved instructors, so the INACE written exam at Southern Illinois University Carbondale is the only state test.' },
        { q: 'How much does the Illinois CNA exam cost?', a: 'The INACE written exam is $85 for the first attempt and $85 for a retake, with a $55 no-show reschedule charge; the state charges nothing for the registry listing itself.' },
        { q: 'What is the Illinois Health Care Worker Registry?', a: 'It is a multi-role registry run by IDPH covering nursing assistants and other direct-care workers. Illinois issues no CNA certificate or license number \u2014 the registry listing is the sole official proof of certification, and employers must check it before hiring.' },
        { q: 'How long do I have to pass the INACE exam?', a: 'Twelve months after program completion, with three attempts; exhausting the attempts or the clock means completing another approved training program before retesting.' }
      ],
      sources: [
        { label: 'Licensing Atlas \u2014 Illinois CNA (quoting IDPH Health Care Worker Registry and SIUC INACE)', url: 'https://licensingatlas.com/cna/il-cna', checkedOn: '2026-10' },
        { label: 'Illinois DPH \u2014 Health Care Worker Registry', url: 'https://dph.illinois.gov/topics-services/health-care-regulation/nursing-homes/health-care-worker-registry.html', checkedOn: '2026-10' },
        { label: 'INACE \u2014 nurseaidetesting.com', url: 'https://www.nurseaidetesting.com', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Illinois wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IL', checkedOn: '2026-10' }
      ]
    },
    IN: {
      agency: 'Indiana Department of Health \u2014 Indiana Aides Registry',
      agencyUrl: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/',
      exam: {
        vendor: 'Ivy Tech Community College (CNA/QMA Central Testing Office) for the Indiana Department of Health',
        vendorUrl: 'https://www.ivytech.edu/student-services/support-services/testing-services/cna-qma-home-health-aide-testing-information/',
        parts: [
          { name: 'Written test (computer-based)', questions: '100 multiple-choice', pass: '80% (80 correct answers)' },
          { name: 'Skills competency test', questions: 'Hand hygiene plus 4 additional randomly chosen skills', pass: 'Competency demonstrated before a tester; 3 attempts allowed for both written and skills' }
        ],
        fee: 'Both written and skills tests $100; a single test (written or skills) $90 (fees as of 1 January 2025)',
        practical: 'Five skills \u2014 hand hygiene plus four randomly chosen \u2014 demonstrated before a tester at Ivy Tech campus testing centers statewide; the application is filed online with Ivy Tech\u2019s Central Testing Office in Indianapolis.',
        languages: ['English'],
        sourceUrl: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification'
      },
      education: { hours: '105-hour state-approved Nurse Aide Training Program (at least 75 classroom and 30 clinical hours)', sourceUrl: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/' },
      eligibility: { other: 'No state-set minimum age or education requirement for registry consideration; individual training programs may require age 18 or a diploma. Background checks are carried out by the employing provider or agency.' },
      fees: [
        { item: 'Written + skills tests (as of 1 January 2025)', fee: '$100', sourceUrl: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification' },
        { item: 'Single test (written or skills)', fee: '$90', sourceUrl: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification' },
        { item: 'Registry listing and renewal', fee: 'Free application', sourceUrl: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/' }
      ],
      application: { portal: 'Ivy Tech CNA/QMA Central Testing Office (online application)', portalUrl: 'https://www.ivytech.edu/student-services/support-services/testing-services/cna-qma-home-health-aide-testing-information/', steps: ['Complete a 105-hour ISDH-approved Nurse Aide Training Program', 'Apply and pay online through Ivy Tech\u2019s testing application', 'Pass both the written and skills portions; Ivy Tech reports passes to the Indiana Aides Registry automatically'], processingTime: 'Applications process in roughly 90 days from passing', sourceUrl: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification' },
      renewal: { cycle: '2 years', work: 'At least 8 hours of paid aide or aide-related services in the 24 months before expiration (private-care hours are not accepted); renew online through the Indiana CNA license portal, or within 8 months of expiration; older lapses require the employer-submitted expired renewal form to aides@health.in.gov', fee: 'Free online renewal', sourceUrl: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/' },
      reciprocity: { rule: 'Out-of-state CNAs apply to the Indiana Aides Registry through the Department of Health; Indiana verifies the active, good-standing listing from the prior state registry', sourceUrl: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$38,330', p25: '$37,020', p75: '$44,420', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IN' },
      recentChanges: [{ year: 2025, change: 'Ivy Tech\u2019s competency evaluation fees rose effective 1 January 2025: $100 for both written and skills tests, $90 for a single test.', sourceUrl: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification' }],
      stateFaqs: [
        { q: 'Why does Indiana\u2019s written test have 100 questions?', a: 'Indiana runs its own competency evaluation through Ivy Tech rather than a national vendor, and its test plan uses 100 multiple-choice questions with an 80% pass mark \u2014 longer and higher-stakes than the 60\u201375 question exams most states use.' },
        { q: 'How much does the Indiana CNA exam cost?', a: 'As of 1 January 2025, $100 for both the written and skills tests or $90 for a single test, paid to Ivy Tech Community College when scheduling.' },
        { q: 'Do private-duty hours count toward Indiana renewal?', a: 'No \u2014 Indiana accepts only at least 8 hours of paid aide or aide-related services during the 24 months before expiration; private care hours are not accepted.' },
        { q: 'Who adds me to the Indiana Aides Registry?', a: 'You never apply to the registry yourself: Ivy Tech reports your passing results to the Indiana Department of Health, which places you on the registry.' }
      ],
      sources: [
        { label: 'Indiana Department of Health \u2014 CNA Certification & Recertification', url: 'https://secure.in.gov/health/ltc/aide-training-and-certification/cna/certification-and-recertification', checkedOn: '2026-10' },
        { label: 'Indiana Department of Health \u2014 Aide Training and Certification', url: 'https://www.in.gov/health/ltc/aide-training-and-certification/cna/', checkedOn: '2026-10' },
        { label: 'Ivy Tech \u2014 CNA/QMA Testing Information', url: 'https://www.ivytech.edu/student-services/support-services/testing-services/cna-qma-home-health-aide-testing-information/', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Indiana wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IN', checkedOn: '2026-10' }
      ]
    },
    IA: {
      agency: 'Iowa Department of Inspections, Appeals, and Licensing \u2014 Direct Care Worker Registry',
      agencyUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas',
      exam: {
        vendor: 'TestMaster Universe / Headmaster (central testing administrator since January 2026), with Credentia available for the remotely proctored knowledge exam',
        vendorUrl: 'https://www.hdmaster.com',
        parts: [
          { name: 'Written (knowledge) test', questions: '70 items', pass: 'Both tests must be passed within three attempts' },
          { name: 'Skills test', questions: '5 randomly selected nurse aide skills', pass: 'Both tests must be passed within three attempts; failing either three times requires retaking the 75-hour course and starting a new testing cycle' }
        ],
        fee: 'Written test $50 proctored at an Iowa community college ($50 online via Headmaster or $70 via Credentia); skills test $115 at a community college or $135 through Health Tech Associates',
        practical: 'Five randomly selected skills performed before an evaluator; candidates must pass both a written and a skills test within four months of their hire date for facility-employed aides.',
        languages: ['English'],
        sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas'
      },
      education: { hours: '75 hours minimum, of which 30 hours are clinical; courses taught in Iowa must be approved by DIAL', onlineAllowed: 'Community college courses pair classroom study with in-person clinical training', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
      eligibility: { minAge: 16, education: 'No high school diploma or GED required by DIAL; individual programs set their own admission standards' },
      background: { method: 'Criminal background check through DIAL\u2019s Health Facilities Division; substantiated abuse, neglect, mistreatment or misappropriation findings bar registry placement. Vaccination or signed waivers for Hepatitis B, COVID-19, influenza and tuberculosis are required.', sourceUrl: 'https://freecnatraining.org/cna-requirements/iowa' },
      fees: [
        { item: 'Written test (proctored at community college or online via Headmaster)', fee: '$50', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
        { item: 'Written test (online via Credentia)', fee: '$70', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
        { item: 'Skills test (community college)', fee: '$115', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
        { item: 'Skills test (Health Tech Associates)', fee: '$135', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
        { item: 'Registry placement and renewal', fee: 'No cost', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' }
      ],
      application: { portal: 'DIAL Direct Care Worker Registry (placement is automatic after testing)', portalUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas', steps: ['Enroll yourself or be sponsored by your employer in a DIAL-approved 75-hour course at a community college, health care facility, or approved private entity', 'Pass both the written and skills tests at an Iowa community college testing site (registration and payment run through TestMaster Universe/Headmaster as of January 2026)', 'The testing entity submits your name and scores to DIAL automatically; allow at least two weeks for the registry listing'], sourceUrl: 'https://dial.iowa.gov/licenses/medical/direct-care/how-do-i-placement-dcw-registry' },
      renewal: { cycle: 'The certificate itself does not expire; registry-active status lapses after 24 consecutive months without work', work: 'At least 8 hours of qualifying paid employment in a two-year period; aides in certified long-term care facilities must also complete 12 hours of in-service training per year (employer-provided)', fee: 'No cost', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
      reciprocity: { rule: 'A CNA active on another state\u2019s direct care worker/CNA registry can transfer to the Iowa registry through DIAL\u2019s transfer process without retesting', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$39,350', p25: '$37,360', p75: '$45,650', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IA' },
      recentChanges: [{ year: 2026, change: 'As of January 2026, Iowa community colleges serve only as testing sites and proctors, with registration, payment, and exam records handled centrally through TestMaster Universe/Headmaster.', sourceUrl: 'https://dial.iowa.gov/licenses/health-professions/cnas' }],
      stateFaqs: [
        { q: 'Does the Iowa CNA certificate expire?', a: 'The certificate itself never expires. What lapses is registry-active status: stop performing qualifying paid aide work for 24 consecutive months and you must retake both competency tests to become active again.' },
        { q: 'How much does the Iowa competency exam cost?', a: 'The written test is $50 at a community college or online through Headmaster ($70 through Credentia\u2019s remote option), and the skills test is $115 at a community college or $135 through Health Tech Associates.' },
        { q: 'What changed in Iowa testing in January 2026?', a: 'Community colleges became testing sites and proctors only \u2014 registration, payment, and exam records moved to TestMaster Universe/Headmaster as the central administrator.' },
        { q: 'Who pays for CNA training in Iowa?', a: 'Course costs are set by the community college or entity offering it, but for aides working in certified nursing homes the employer typically pays \u2014 and facilities must also provide 12 hours of in-service training per year.' }
      ],
      sources: [
        { label: 'Iowa DIAL \u2014 Certified Nursing Assistants (CNAs)', url: 'https://dial.iowa.gov/licenses/health-professions/cnas', checkedOn: '2026-10' },
        { label: 'Iowa DIAL \u2014 How Do I Get Placed on the DCW Registry?', url: 'https://dial.iowa.gov/licenses/medical/direct-care/how-do-i-placement-dcw-registry', checkedOn: '2026-10' },
        { label: 'IASourceLink \u2014 CNA licensing summary (DIAL)', url: 'https://license.iasourcelink.com/resource-navigator/embed/detail/375830/4025', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Iowa wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=IA', checkedOn: '2026-10' }
      ]
    },
    KS: {
      agency: 'Kansas Department for Aging and Disability Services \u2014 Health Occupations Credentialing / Kansas Nurse Aide Registry',
      agencyUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide',
      exam: {
        vendor: 'KDADS Health Occupations Credentialing (state-administered)',
        vendorUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide',
        parts: [
          { name: 'Written (or oral) knowledge test', questions: '100 multiple-choice', pass: '75%' },
          { name: 'Skills evaluation', questions: 'Skills performed before an observer', pass: 'Both parts must be passed; up to 3 attempts within 12 months of the training program start date, after which the full 90-hour program must be retaken. Out-of-state reciprocity applicants get only one attempt.' }
        ],
        fee: '$20 nonrefundable application fee paid to KDADS; $20 rescheduling fee for a missed test date',
        practical: 'Skills graded by an observer at roughly 32 approved Kansas testing sites, typically hosted at community colleges and vocational schools; training-program instructors commonly collect class applications and fees for submission to KDADS.',
        languages: ['English', 'Oral version'],
        sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide'
      },
      education: { hours: '90 hours minimum, including 45 hours of clinical or lab practice in an approved setting', onlineAllowed: 'KDADS permits distance-learning coursework under pilot status with an advance proposal, but the 90-hour core is unchanged', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
      eligibility: { minAge: 16, other: 'Applicants under 18 require parental consent; no state education requirement for registry consideration. Correspondence courses are not approved.' },
      background: { method: 'Adult Care Home Criminal Record Check through KDADS; disqualifying convictions may be addressed by petitioning KDADS for a waiver', fee: 'Set by the screening vendor', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
      fees: [
        { item: 'CNA application (nonrefundable, paid to KDADS)', fee: '$20', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
        { item: 'Missed-test rescheduling', fee: '$20', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
        { item: 'Renewal', fee: 'No fee (status maintained through work verification)', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' }
      ],
      application: { portal: 'KDADS Health Occupations Credentialing', portalUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide', steps: ['Complete a KDADS-approved 90-hour training program', 'Submit the application with the $20 fee and completed criminal record check (training programs often collect these for the class)', 'Receive the approval-to-test notification by mail with the assigned test date and center; pass both portions'], processingTime: 'Registry records typically update within 48 hours of passing and clearing the background check', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
      renewal: { cycle: '2 years', work: 'At least 8 paid hours in a nurse aide role during the 24-month period in a qualifying facility (nursing home, hospital, or home health \u2014 not a doctor\u2019s office or clinic), verified by employer report', fee: 'No fee', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
      reciprocity: { rule: 'Out-of-state CNAs file an interstate application with KDADS and receive a single attempt to pass the Kansas exam; aides currently active out of state in good standing may alternatively qualify without testing under the interstate route', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' },
      wages: { soc: '31-1131', socName: 'Nursing Assistants', median: '$38,010', p25: '$36,210', p75: '$44,170', year: 'May 2025', sourceUrl: 'https://www.onetonline.org/link/localwages/31-1131.00?st=KS' },
      recentChanges: [{ year: null, change: 'No regulatory changes verified as of 2026-10.', sourceUrl: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide' }],
      stateFaqs: [
        { q: 'Does Kansas use a national testing vendor?', a: 'No \u2014 KDADS Health Occupations Credentialing administers the Kansas Nurse Aide Competency Exam itself at about 32 approved sites statewide, one of the few states outside the Prometric/Credentia/Headmaster system.' },
        { q: 'How much does Kansas CNA certification cost?', a: 'A $20 nonrefundable application fee to KDADS (plus the vendor-set criminal record check); there is no renewal fee, since active status is maintained through verified paid work.' },
        { q: 'What happens after three failed attempts in Kansas?', a: 'The full 90-hour training program must be retaken before a new testing cycle \u2014 and out-of-state reciprocity applicants get only one attempt at the Kansas exam.' },
        { q: 'What work counts toward Kansas renewal?', a: 'At least 8 paid hours in a nurse aide role during the 24-month window in a qualifying facility such as a nursing home, hospital, or home health agency \u2014 work in a doctor\u2019s office or clinic does not qualify.' }
      ],
      sources: [
        { label: 'KDADS \u2014 Nurse Aide Credentialing and Registry', url: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide', checkedOn: '2026-10' },
        { label: 'Kansas Nurse Aide Registry verification', url: 'https://www.kdads.ks.gov/commissions/survey-certification-and-credentialing-commission/credentialing/nurse-aide', checkedOn: '2026-10' },
        { label: 'O*NET / BLS OEWS May 2025 \u2014 Kansas wages, SOC 31-1131', url: 'https://www.onetonline.org/link/localwages/31-1131.00?st=KS', checkedOn: '2026-10' }
      ]
    }
  }
};
