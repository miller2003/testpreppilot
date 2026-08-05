export const programs = [
  {
    id: 'bcen',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    bodyUrl: 'https://bcen.org',
    about: 'BCEN is the accredited certifying body for emergency, transport, trauma, flight, pediatric emergency, and burn nurses. Its credentials (CEN, CFRN, CPEN, CTRN, TCRN) are accredited by ABSNC and accepted by the ANCC Magnet Recognition Program, signaling ED clinical expertise to employers.',
    registrationSteps: [
      { title: 'Create a BCEN account', description: 'Set up or log in to your BCEN account and open the certification you want under My Certification.' },
      { title: 'Submit the application', description: 'Complete the online application; RN licensure is verified automatically for the CEN and similar for other credentials.' },
      { title: 'Pay the exam fee', description: 'Pay by credit card, ACH, or voucher. ENA members, military, and voucher-program candidates receive discounted pricing.' },
      { title: 'Receive your eligibility email', description: 'An eligibility email arrives once payment clears, opening a 90-day window to schedule with PSI.' },
      { title: 'Schedule and sit the exam', description: 'Book a PSI test center or Live Remote Proctoring appointment and sit the 3-hour computer-based exam.' }
    ],
    proctoring: 'Delivered at PSI testing centers worldwide or via Live Remote Proctoring. A government-issued photo ID matching the application name is required. Walk-ins are not allowed; scheduling within the 90-day window is mandatory.',
    retakePolicy: 'A discounted retest fee of $200 applies within one year of the initial exam date. BCEN Test Assurance (optional, about $70) bundles a free second attempt.',
    recertification: 'Credentials are valid for four years. Renew by completing 100 contact hours of continuing education (75 clinical/emergency-focused, 25 professional development) or by re-examination. A recertification fee applies.',
    scoreReporting: 'Pass/fail results are provided immediately at the test center. Scaled scores use a 0-900 system; BCEN does not publish an exact numeric pass point but most passing scores fall near 680-700.',
    providersNote: 'Official preparation includes the BCEN candidate handbook, content outline, and BCEN practice exams in your account. Third-party review courses (ENA, UWorld, Mometrix) are widely used but not endorsed by BCEN.',
    comparison: {
      title: 'BCEN emergency nursing credentials',
      columns: ['Credential', 'Focus', 'Exam fee (non-member)'],
      rows: [
        { label: 'CEN', values: ['General emergency nursing', '$380'] },
        { label: 'CFRN', values: ['Flight/air medical', '$380'] },
        { label: 'CPEN', values: ['Pediatric emergency', '$380'] },
        { label: 'CTRN', values: ['Transport (ground/air)', '$380'] },
        { label: 'TCRN', values: ['Trauma', '$380'] }
      ]
    },
    orgFaqs: [
      { q: 'Do I need emergency experience to sit the CEN?', a: 'No minimum experience is required, but BCEN recommends about two years in emergency or trauma nursing before testing.' },
      { q: 'Are BCEN exams available outside the U.S.?', a: 'Yes. Exams are offered at PSI centers worldwide and online via Live Remote Proctoring; they are English-only.' }
    ],
    sourceUrl: 'https://bcen.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'ibsc',
    body: 'International Board of Specialty Certification (IBSC)',
    bodyUrl: 'https://www.ibscertifications.org',
    about: 'IBSC certifies paramedics, nurses, dispatchers, and tactical responders in critical-care and transport specialties (FP-C, CCP-C, CP-C, TP-C, TR-C, WP-C, DICO-C, MTSP-C). Its exams are delivered by computer and recognized across air, ground, and critical-care transport services.',
    registrationSteps: [
      { title: 'Choose your credential and pathway', description: 'Select the exam (affiliate membership or non-member pricing) and confirm you meet the experience/prerequisite.' },
      { title: 'Apply and pay', description: 'Submit the online application and pay the exam fee; fees are non-refundable.' },
      { title: 'Schedule with the test provider', description: 'Schedule a computer-based appointment at a testing center or via ProProctor.' },
      { title: 'Sit the exam', description: 'Complete the roughly 2.5-hour exam (about 135 questions for paramedic credentials).' }
    ],
    proctoring: 'Computer-based testing at Prometric/authorized centers or via ProProctor remote proctoring. A $100 fee applies for switching exam type or delivery method within 30 days of the date; rescheduling inside 30 days costs $100.',
    retakePolicy: 'A new, complete registration and examination fee are required to reapply. IBSC does not offer a discounted retest.',
    recertification: 'Recertify by CE submission or by computer-based re-examination (fees: $285 affiliate / $385 non-member for FP-C/CCP-C/CP-C/TP-C; $175 / $195 for TR-C). A $125 late fee applies within 30 days of expiration.',
    scoreReporting: 'Results are provided at the test center. IBSC uses a scaled pass standard but does not publish the exact numeric cut score.',
    providersNote: 'IBSC publishes candidate handbooks per credential with content outlines. Third-party FP-C/TP-C review courses (FlightBridgeEd, IA Med) are popular but not endorsed.',
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nremt',
    body: 'National Registry of Emergency Medical Technicians (NREMT)',
    bodyUrl: 'https://www.nremt.org',
    about: 'The NREMT is the U.S. certifying body for EMS clinicians at the EMR, EMT, AEMT, and Paramedic levels. Its computer-adaptive and linear cognitive exams are used by nearly every state as the gateway to licensure, and it sets the national standard for entry-level competency.',
    registrationSteps: [
      { title: 'Create an NREMT account', description: 'Register or log in and select the certification level you are pursuing.' },
      { title: 'Verify eligibility', description: 'Your program director or state verifies training/licensure; submit any required documentation.' },
      { title: 'Pay the application fee', description: 'Pay the per-attempt exam fee (e.g., $104 EMT, $159 AEMT, $175 Paramedic).' },
      { title: 'Receive your ATT', description: 'An Authorization to Test posts to your account, valid up to 90 days.' },
      { title: 'Schedule with Pearson VUE', description: 'Book a Pearson VUE center or OnVUE online proctoring appointment and sit the exam.' }
    ],
    proctoring: 'Delivered at Pearson VUE testing centers or via OnVUE online proctoring. A government-issued photo ID matching the ATT is required. The cognitive exam is separate from any state psychomotor skills exam (psychomotor discontinued for AEMT/Paramedic as of July 2024).',
    retakePolicy: 'Failed attempts require a new application and fee; a 15-day wait applies between attempts. EMT candidates may attempt up to six times before remediation.',
    recertification: 'National certification renews every two years via the National Continued Competency Program (CE) or by re-examination. The recertification fee is $26; a $50 late fee applies after March 31.',
    scoreReporting: 'Pass/fail is determined against a fixed standard (scaled 950 on a 100-1500 scale). Scores post in your NREMT account; official score reports follow.',
    providersNote: 'NREMT does not endorse specific prep materials. State-approved training programs, Kaplan, and BoostPrep offer practice banks aligned to the current blueprints.',
    sourceUrl: 'https://www.nremt.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nha',
    body: 'National Healthcareer Association (NHA)',
    bodyUrl: 'https://www.nhanow.com',
    about: 'The NHA certifies allied health professionals across clinical, administrative, pharmacy, and patient-care roles (CCMA, CPhT/ExCPT, CPCT/A, CEHRS, CMAA, mental health technician). Its exams are delivered at PSI centers or by live remote proctoring and are widely accepted by employers.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Meet the training, education, or work-experience route for your chosen credential.' },
      { title: 'Create an NHA account and apply', description: 'Select the exam, verify eligibility, and submit the application and fee.' },
      { title: 'Receive your ATT', description: 'An Authorization to Test email arrives, valid for 90 days.' },
      { title: 'Schedule the exam', description: 'Book a PSI test center or live remote proctoring appointment.' },
      { title: 'Sit the exam', description: 'Complete the computer-based, multiple-choice exam and get a same-day pass/fail result.' }
    ],
    proctoring: 'Delivered at PSI testing centers or via live remote proctoring. A government-issued photo ID is required. All NHA exams are multiple-choice.',
    retakePolicy: 'There is no limit on retake attempts, but you must wait 30 days between attempts and repay the full exam fee each time. After three failures, NHA may require additional documentation or training.',
    recertification: 'Most NHA credentials renew every two years with 10 continuing education units (CEUs) and payment of the recertification fee. NHA offers free and low-cost CEU courses.',
    scoreReporting: 'Results are immediate (pass/fail) at the center, with an official score report typically within two business days. CPhT uses a scaled score; other exams report by domain.',
    providersNote: 'NHA sells its own study guides and practice tests. Third-party prep (CertPrep Academy, DrCertifications) is available but not endorsed.',
    sourceUrl: 'https://www.nhanow.com/certification',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'ptcb',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    bodyUrl: 'https://www.ptcb.org',
    about: 'PTCB is the leading certifier of pharmacy technicians in the U.S. Its CPhT is the technician credential pharmacists trust, complemented by the CSPT specialty and a suite of assessment-based certificate programs (billing, immunization, sterile compounding, and more).',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'For CPhT: complete a PTCB-recognized education program or 500 hours of work experience. For CSPT: be an active CPhT with sterile-compounding experience.' },
      { title: 'Apply and pay', description: 'Log in to your PTCB account, apply, and pay the fee (CPhT $129; CSPT $199 total).' },
      { title: 'Receive authorization', description: 'An email grants a one-year candidacy window and authorization to schedule.' },
      { title: 'Schedule and test', description: 'Book Pearson VUE (in-person or online) within 90 days of authorization and sit the exam.' }
    ],
    proctoring: 'Delivered in person at 1,400+ Pearson VUE centers (including military bases) or online via live proctor. A matching government-issued photo ID is required.',
    retakePolicy: 'CPhT retakes require a new $129 fee. CSPT retake is $149. A $20 authorization-extension fee applies if needed.',
    recertification: 'CPhT renews every three years with 20 continuing education hours (including one hour of pharmacy law and one of patient safety). CSPT renews with the CPhT and a competency attestation. Renewal fee is $55.',
    scoreReporting: 'Unofficial results appear on screen immediately; official results post to your PTCB account within three weeks.',
    providersNote: 'PTCB offers the PTCE Practice Bank and Pre-PTCE but endorses no third-party course. Many candidates use PTCB-recognized program materials and commercial question banks.',
    sourceUrl: 'https://www.ptcb.org/get-certified/apply-for-cpht',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nbrc',
    body: 'National Board for Respiratory Care (NBRC)',
    bodyUrl: 'https://www.nbrc.org',
    about: 'The NBRC is the sole U.S. organization that certifies respiratory therapists (CRT, RRT) and their specialties (ACCS, NPS, SDS, CPFT, RPFT). Its exams are the standard for state licensure and are delivered at 300+ assessment centers.',
    registrationSteps: [
      { title: 'Confirm admission requirements', description: 'For the TMC: hold an associate degree from a CoARC-accredited program (or CSRT RRT). Specialties require an active CRT or RRT.' },
      { title: 'Apply and pay', description: 'Submit the online application with the exam fee; credit-card applications process immediately.' },
      { title: 'Receive eligibility email', description: 'An email confirms eligibility with scheduling instructions.' },
      { title: 'Schedule the exam', description: 'Book at an assessment center (AMP/PSI) year-round.' },
      { title: 'Sit the exam', description: 'Complete the computer-based exam; TMC uses two cut scores (CRT and RRT eligibility).' }
    ],
    proctoring: 'Administered Monday-Saturday at 300+ assessment centers across the U.S. AARC members receive a one-time $40 discount on first attempts of CSE, PFT, NPS, SDS, ACCS, and AE-C.',
    retakePolicy: 'TMC and CSE may be attempted three times, then a 120-day wait applies. Specialty exams (PFT, NPS, SDS, ACCS) allow two attempts, then a 180-day wait.',
    recertification: 'CRT/RRT maintain through state licensure and NBRC renewal requirements; specialties recertify on their own cycles with CE. Details vary by credential.',
    scoreReporting: 'Scores are provided at the test center after completion. The TMC reports two cut scores; the CSE gives a pass/fail on 20 scored problems.',
    providersNote: 'NBRC offers free practice exams and paid Self-Assessment Exams (SAEs). Textbooks and commercial review courses support prep; NBRC endorses none.',
    sourceUrl: 'https://www.nbrc.org/resources',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'cci',
    body: 'Cardiovascular Credentialing International (CCI)',
    bodyUrl: 'https://cci-online.org',
    about: 'CCI credentials cardiovascular sonographers, invasive specialists, rhythm analysts, and technologists (RCS, RCIS, RCES, RCCS, RPhS, RVS, ACS, CCT, CRAT). Its exams are delivered at Pearson VUE and recognized across cath labs, echo labs, and vascular practices.',
    registrationSteps: [
      { title: 'Use the qualification pathway tool', description: 'Answer the eligibility questionnaire to identify the right exam and pathway.' },
      { title: 'Apply and pay', description: 'Submit the application with the fee ($365 registry-level, $175 technician-level); $100 is a non-refundable processing fee.' },
      { title: 'Receive your ATT', description: 'An Authorization to Test arrives within two business days, opening a 90-day window.' },
      { title: 'Schedule with Pearson VUE', description: 'Book at a Pearson Professional Center or authorized test center.' },
      { title: 'Sit the exam', description: 'Complete the 2- or 3-hour computer-based exam.' }
    ],
    proctoring: 'Administered year-round at Pearson Professional Centers and authorized test centers in the U.S. and internationally. A matching government-issued photo ID is required.',
    retakePolicy: 'Candidates may retest by reapplying and paying the full fee. Specific attempt limits are set per credential; contact CCI for details.',
    recertification: 'Registry- and certificate-level credentials renew every three years with 36 CEUs (30 cardiovascular-related for RCIS and similar). A first renewal fee applies 9-12 months after passing, then triennial renewal.',
    scoreReporting: 'Scores use a 0-900 scaled system; a scaled 650 or higher is required to pass. Results are reported after the exam.',
    providersNote: 'CCI endorses no review course. Recommended texts (Grossman, Kern, Watson) and commercial question banks are commonly used.',
    sourceUrl: 'https://cci-online.org',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'danb',
    body: 'Dental Assisting National Board (DANB)',
    bodyUrl: 'https://www.danb.org',
    about: 'DANB is the only nationally recognized certifying body for dental assistants, offering the CDA and specialty credentials (COA, CPFDA, CRFDA, CDIPC, NELDA) plus component exams (GC, RHS, ICE). DANB credentials are recognized or required in 39 states and by the U.S. Air Force and VA.',
    registrationSteps: [
      { title: 'Confirm eligibility pathway', description: 'Choose among CODA-program graduate, work-experience, or prior-credential pathways; current CPR is always required.' },
      { title: 'Apply and pay', description: 'Submit the application with the fee; a $75 non-refundable application fee is included.' },
      { title: 'Receive scheduling instructions', description: 'An email with a Test Admission Notice lets you schedule within 60 days.' },
      { title: 'Schedule with Pearson VUE', description: 'Book a Pearson VUE center appointment.' },
      { title: 'Sit the exam', description: 'Complete the component exam(s); each component passes at 400 on a 100-900 scale.' }
    ],
    proctoring: 'Delivered in person at Pearson VUE testing centers. Candidates have 60 days from approval to schedule and sit. The ICE component offers an online option in some cases.',
    retakePolicy: 'No discounted retake; failing a component means paying the same price to retake it. The full CDA may be taken as three components together or separately within a five-month window.',
    recertification: 'DANB certifications renew annually with a $75 fee and 12 continuing dental education (CDE) credits, including two in infection control and one in OSHA bloodborne pathogens. Current CPR is required.',
    scoreReporting: 'Results are mailed after the exam; each component is scored on a 100-900 scale with a 400 pass point.',
    providersNote: 'The DALE Foundation (official DANB affiliate) sells review products. DANB also publishes content outlines and sample questions.',
    sourceUrl: 'https://www.danb.org',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'cbspd',
    body: 'Certification Board for Sterile Processing and Distribution (CBSPD)',
    bodyUrl: 'https://www.cbspd.net',
    about: 'CBSPD certifies sterile processing professionals (technicians, instrument specialists, endoscope reprocessors, and managers). Its credentials are NCCA-accredited and accepted nationwide, including in state mandates that require SPD certification.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Meet the experience or training route for your credential (e.g., one year full-time SPD experience for the technician exam).' },
      { title: 'Obtain the application', description: 'Download the current application (online applications are not accepted); complete and document eligibility.' },
      { title: 'Pay and submit by mail', description: 'Pay by money order, facility check, or credit card; mail the application before the window deadline.' },
      { title: 'Schedule at a test site', description: 'Choose a CBSPD test site for one of four annual exam windows.' },
      { title: 'Sit the exam', description: 'Complete the computer-based exam (about 150 questions, 3 hours for the technician credential).' }
    ],
    proctoring: 'Offered in scheduled windows (about four times per year) at CBSPD test sites; computer-based, often at Pearson VUE or online remote proctoring. Late applications cost $10 more.',
    retakePolicy: 'Candidates reapply and repay the fee to retest. A passing score of 70% or above is required.',
    recertification: 'The technician-level credential renews every five years with 100 contact hours of continuing education per cycle and a renewal fee.',
    scoreReporting: 'Computerized exams give a pass/fail result at the center; official scores follow. The passing standard is approximately 70% on a scaled basis.',
    providersNote: 'CBSPD does not publish an official study guide; candidates use the HSPA/IAHCSMM Central Service Technical Manual and third-party prep.',
    sourceUrl: 'https://www.cbspd.net',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'hspa',
    body: 'Healthcare Sterile Processing Association (HSPA)',
    bodyUrl: 'https://www.myhspa.org',
    about: 'HSPA (formerly IAHCSMM) is the largest certifier of sterile processing professionals, offering the CRCST plus CIS, CHL, CER, and CCSVP. Its CRCST is the credential most often named in state mandates and job postings.',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'For CRCST: document 400 hours of hands-on SPD experience (or test first under provisional status and complete hours within six months).' },
      { title: 'Apply and pay', description: 'Submit the application and the flat $140 exam fee, which covers one retake.' },
      { title: 'Receive ATT', description: 'An Authorization to Test lets you schedule at Prometric.' },
      { title: 'Schedule at Prometric', description: 'Book an in-person Prometric test center appointment.' },
      { title: 'Sit the exam', description: 'Complete the 150-question, 3-hour computer-based exam.' }
    ],
    proctoring: 'Administered in person at Prometric testing centers (HSPA\'s sole vendor). The flat $140 fee bundles the first attempt and one retake; no member/non-member pricing.',
    retakePolicy: 'The $140 fee covers one retake. Subsequent attempts require a new $140 payment. CRCST is a prerequisite for CIS and CHL.',
    recertification: 'Renews annually with 12 CE credits plus a $50 renewal fee. CIS and CHL CE fold into the CRCST requirement.',
    scoreReporting: 'Preliminary pass/fail is given at the center; official results follow in about 4-6 weeks. The passing standard is 70% on a scaled basis.',
    providersNote: 'HSPA publishes the Sterile Processing Technical Manual (primary reference) and exam content outlines. Third-party prep (Sterile Processing University, CRCST study guides) is common.',
    sourceUrl: 'https://support.myhspa.org/hc/en-us/articles/360054349472-What-is-the-exam-fee',
    verified: true,
    confidence: 'high'
  },
  {
    id: 'nbstsa',
    body: 'National Board of Surgical Technology and Surgical Assisting (NBSTSA)',
    bodyUrl: 'https://www.nbstsa.org',
    about: 'NBSTSA certifies surgical technologists (CST) and surgical first assistants (CSFA). The CST is frequently required by hospitals, surgery centers, and travel assignments, and is recognized by the Association of Surgical Technologists (AST).',
    registrationSteps: [
      { title: 'Confirm eligibility', description: 'Graduate from a CAAHEP- or ABHES-accredited surgical technology program (or complete military training).' },
      { title: 'Apply and pay', description: 'Submit the application with the fee ($190 AST member / $290 non-member for CST).' },
      { title: 'Receive eligibility', description: 'NBSTSA confirms eligibility and authorizes testing.' },
      { title: 'Schedule with Pearson VUE', description: 'Book a Pearson VUE center appointment.' },
      { title: 'Sit the exam', description: 'Complete the 175-question, 4-hour computer-based exam.' }
    ],
    proctoring: 'Delivered at Pearson VUE testing centers. Candidates may take breaks but cannot add time; a matching photo ID is required. Up to three attempts per calendar year are allowed.',
    retakePolicy: 'Retakes require paying the total testing fee again (no separate discount). A 60-day wait applies between attempts.',
    recertification: 'CST renews every two years with 60 CE credits (including live credits) through AST or by re-examination; late renewal within 90 days costs more. CSFA renews on a similar cycle.',
    scoreReporting: 'Score reports are provided to all candidates; the CST passing score is 98 of 150 scored questions (recently lowered from 102).',
    providersNote: 'AST study guides and review courses (Alexander\'s Care of the Patient in Surgery, Surgical Technology: Principles and Practice) align with the exam. NBSTSA sells a practice exam.',
    sourceUrl: 'https://www.nbstsa.org/cst-first-timeretake-applicants',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'aama',
    body: 'American Association of Medical Assistants (AAMA)',
    bodyUrl: 'https://www.aama-ntl.org',
    about: 'The AAMA awards the CMA (AAMA), the most widely recognized medical assistant certification in the U.S. Eligibility requires graduation from a CAAHEP- or ABHES-accredited program, and the exam emphasizes administrative, clinical, and general knowledge.',
    registrationSteps: [
      { title: 'Confirm program accreditation', description: 'Verify your medical assisting program is CAAHEP- or ABHES-accredited (or use the recent-graduate route).' },
      { title: 'Apply and pay', description: 'Submit the application and fee ($250 non-member / $125 AAMA member).' },
      { title: 'Receive scheduling email', description: 'An enrollment email lets you schedule with PSI.' },
      { title: 'Schedule with PSI', description: 'Book a Prometric/PSI test center appointment.' },
      { title: 'Sit the exam', description: 'Complete the 200-question exam in four 40-minute segments.' }
    ],
    proctoring: 'Delivered at Prometric (PSI) testing centers. The exam runs in four timed 40-minute segments with optional breaks; a matching photo ID is required. Up to three attempts per calendar year.',
    retakePolicy: 'Retakes require the full fee again and a 60-day wait between attempts. Eligibility is valid for a limited window after graduation.',
    recertification: 'CMA (AAMA) recertifies every 60 months with 60 CEUs or by re-examination.',
    scoreReporting: 'Preliminary pass/fail shows on screen; official score reports email within about 24 hours. The minimum passing score is 405 on a 200-800 scale.',
    providersNote: 'AAMA offers a practice exam ($30) and the official Content Outline. ABHES/AAMA-aligned textbooks and commercial MA prep support study.',
    sourceUrl: 'https://www.aama-ntl.org/certification',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'amt',
    body: 'American Medical Technologists (AMT)',
    bodyUrl: 'https://www.americanmedtech.org',
    about: 'AMT certifies medical assistants (RMA), medical administrative specialists (CMAS), patient care technicians, phlebotomists, and laboratory professionals. AMT credentials are NCCA-accredited and accepted by employers nationwide.',
    registrationSteps: [
      { title: 'Check eligibility', description: 'Choose the education, military, work-experience, or instructor route for your credential.' },
      { title: 'Apply and pay', description: 'Submit the online application and fee ($135 for RMA/CMAS); the fee includes application, exam, and first annual fee.' },
      { title: 'Receive authorization', description: 'Processing takes 1-2 business days; an authorization code is issued.' },
      { title: 'Schedule with Pearson VUE', description: 'Book a Pearson VUE center or, for RMA/RPT, live remote proctoring.' },
      { title: 'Sit the exam', description: 'Complete the computer-based exam and see your score immediately.' }
    ],
    proctoring: 'Delivered at Pearson VUE testing centers or (RMA/RPT only) via live remote proctoring on a personal computer. Two forms of matching ID are required.',
    retakePolicy: 'Retakes are permitted no sooner than 45 days after a failure and require a non-refundable fee ($90 for RMA/CMAS). A lifetime limit of four attempts applies per credential.',
    recertification: 'Credentials renew every three years through the Certification Continuation Program with 30 CCP points and a nominal fee.',
    scoreReporting: 'Scores are available immediately at the center and transmitted to AMT within 24-48 hours. A passing scaled score of 70 (0-100) applies.',
    providersNote: 'AMT sells practice exams and fundamentals courses. Many candidates use program-aligned textbooks and commercial MA/admins prep.',
    sourceUrl: 'https://www.americanmedtech.org/certification/get-certified',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'ncct',
    body: 'National Center for Competency Testing (NCCT)',
    bodyUrl: 'https://www.ncctinc.com',
    about: 'NCCT has certified allied health professionals since 1989, offering the NCMA, TS (Technician Specialist), PT (Patient Care Technician), and other credentials. NCCT provides multiple eligibility paths (education, experience, military) and tests at Pearson VUE.',
    registrationSteps: [
      { title: 'Check eligibility', description: 'Use the online eligibility quiz to confirm the education, experience, or military route.' },
      { title: 'Apply and pay', description: 'Submit the online application and fee (e.g., $119 for NCMA/TS/PT).' },
      { title: 'Receive Authorization to Test', description: 'An ATT letter is sent once the application is approved.' },
      { title: 'Schedule with Pearson VUE', description: 'Book a Pearson VUE center or remote appointment.' },
      { title: 'Sit the exam', description: 'Complete the 165-question, 3-hour computer-based exam.' }
    ],
    proctoring: 'Delivered at Pearson VUE testing centers or remotely. A current government-issued photo ID and the ATT letter are required.',
    retakePolicy: 'Retakes require repaying the exam fee; the application is valid for one year. Specific attempt limits apply per credential.',
    recertification: 'NCCT credentials renew with annual continuing education (e.g., 14 hours/year for NCMA) and a renewal fee; the NCMA is valid for 24 months.',
    scoreReporting: 'Results are typically available immediately; a scaled score of 70 or higher is required to pass.',
    providersNote: 'NCCT sells practice exams and Interactive Review Systems. Program-aligned textbooks and commercial prep are also used.',
    sourceUrl: 'https://www.ncctinc.com/certifications/medical-assistant',
    verified: true,
    confidence: 'medium'
  },
  {
    id: 'nnaap',
    body: 'National Nurse Aide Assessment Program (NNAAP) / Pearson VUE',
    bodyUrl: 'https://www.pearsonvue.com',
    about: 'The NNAAP is the nurse aide competency evaluation used by many states to certify CNAs. It consists of a knowledge (written or oral) exam and a hands-on skills evaluation, administered today largely by Credentia/Pearson VUE under state nurse aide registries.',
    registrationSteps: [
      { title: 'Complete state-approved training', description: 'Finish a state-approved nurse aide training program (hours vary by state).' },
      { title: 'Create a CNA365 account', description: 'Register through Credentia/Pearson VUE for your state and submit the application.' },
      { title: 'Pay the exam fee', description: 'Pay the combined knowledge + skills fee (state-specific, commonly $135-$140).' },
      { title: 'Schedule both parts', description: 'Book the knowledge exam (test center or online) and the in-person skills evaluation.' },
      { title: 'Pass both within the window', description: 'Pass both parts within 24 months of training; you get up to three attempts.' }
    ],
    proctoring: 'The knowledge exam is taken at a Pearson VUE/Credentia test center or online with live remote proctoring; the skills evaluation is always in person with a Nurse Evaluator. Two forms of ID are required.',
    retakePolicy: 'You may retest failed parts (separate retest fees) within the 24-month window, up to three attempts total before retraining.',
    recertification: 'Certification is valid 24 months; renewal requires documentation of paid nursing-related work (often 8 hours in the period) and a renewal fee.',
    scoreReporting: 'Results are provided after the exam; both the knowledge and skills parts must pass. The knowledge exam is 70 multiple-choice questions (2 hours).',
    providersNote: 'States publish candidate handbooks with the NNAAP skills. Pearson/Credentia and state nurse aide registries provide official resources.',
    sourceUrl: 'https://www.pearsonvue.com',
    verified: false,
    confidence: 'medium'
  }
];

export const exams = [
  {
    slug: 'bcen-cen',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    tagline: 'The flagship emergency nursing credential that validates expertise across the full spectrum of ED patient care.',
    description: 'The Certified Emergency Nurse (CEN) is BCEN\'s flagship credential for registered nurses working in emergency departments and trauma centers. It validates clinical judgment across cardiovascular, respiratory, neurologic, trauma, and medical emergencies. Many employers prefer or require the CEN for ED staff, charge nurses, and travel contracts, and it supports Magnet and trauma-designation goals. No emergency experience is strictly required, though BCEN recommends about two years in the specialty before sitting.',
    quickAnswer: {
      summary: 'The CEN is a 175-question, 3-hour computer-based exam (150 scored, 25 unscored) given year-round at PSI centers or by live remote proctoring. The fee is $380 for non-members, $285 for ENA members, and $195 for military. You need a current, unrestricted RN license; the credential is valid for four years.',
      advantages: [
        'Signals ED clinical expertise to employers, supporting hiring and promotion in emergency and trauma settings',
        'Preferred or required by many Magnet hospitals and Level I/II trauma centers',
        'Strengthens travel-nurse applications for higher-acuity, premium contracts',
        'Validated against a criterion-referenced standard, not curved against other candidates',
        'Counts toward BCEN\'s broader emergency/transport/burn specialty ladder (CFRN, CPEN, CTRN, TCRN)'
      ]
    },
    roadmap: ['Confirm RN license is current and unrestricted', 'Create a BCEN account and choose ENA-member or non-member pricing', 'Pay the exam fee and receive a 90-day testing window', 'Study the 10 content areas using the BCEN outline and practice exams', 'Schedule with PSI and pass at the scaled standard', 'Maintain with 100 CE hours or re-exam every four years'],
    prerequisites: 'Current, unrestricted RN license in the U.S., a U.S. territory, Canada, or Australia. No minimum experience is required, though about two years in emergency or trauma nursing is recommended.',
    examMeta: {
      questions: '175 (150 scored, 25 unscored)',
      time: '3 hours',
      pass: 'Scaled 0-900 (most passes near 680-700)',
      fee: '$380 non-member / $285 ENA member / $195 military',
      format: 'Computer-based multiple choice',
      admin: 'PSI test centers or Live Remote Proctoring'
    },
    topics: [
      { name: 'Cardiovascular', weight: '18%' },
      { name: 'Respiratory', weight: '11%' },
      { name: 'Neurological', weight: '10%' },
      { name: 'Gastrointestinal', weight: '8%' },
      { name: 'Genitourinary/OB/GYN', weight: '6%' },
      { name: 'Medical Emergencies', weight: '12%' },
      { name: 'Trauma', weight: '14%' },
      { name: 'Environmental & Toxicology', weight: '5%' },
      { name: 'Communicable Diseases', weight: '4%' },
      { name: 'Professional Issues', weight: '12%' }
    ],
    examEssentials: [
      ['Eligibility', 'Current, unrestricted RN license (U.S., territory, Canada, or Australia)'],
      ['Delivery', 'PSI centers or live remote proctoring, year-round'],
      ['Retake', '$200 retest within one year of initial date'],
      ['Validity', '4 years; renew by 100 CE hours or re-exam'],
      ['Scale', 'Scores reported on a 0-900 scaled system']
    ],
    timeline: [
      { stage: 'Confirm eligibility', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day; 90-day window opens' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$380' },
        { item: 'Initial exam (ENA member)', fee: '$285' },
        { item: 'Retest (within 1 year)', fee: '$200' },
        { item: 'BCEN Test Assurance (optional 2nd attempt)', fee: '$70' },
        { item: 'Recertification by CE (every 4 yrs)', fee: '$250' }
      ],
      total: '$380-$630 first attempt',
      footnote: 'Fees are per BCEN\'s published schedule; military and voucher discounts may apply. Test Assurance is optional and bundles a free retake.'
    },
    difficulty: 'Moderate',
    audience: 'ED and trauma-center RNs seeking specialty recognition',
    time: '6-10 weeks',
    cost: '$380-$630',
    faqs: [
      { q: 'How hard is the CEN exam?', a: 'It is moderately difficult. The exam is broad but criterion-referenced, so it tests against a fixed standard rather than ranking candidates. Nurses with ED experience and a structured 6-10 week study plan pass at strong rates.' },
      { q: 'How long should I study for the CEN?', a: 'Most candidates study 6-10 weeks, reviewing all 10 content areas and taking BCEN practice exams. Those recently out of ED practice may need closer to 10-12 weeks.' },
      { q: 'Does the CEN expire?', a: 'Yes. The CEN is valid for four years. You renew by completing 100 contact hours of continuing education (75 emergency-focused, 25 professional development) or by re-taking the exam.' },
      { q: 'Is the CEN worth it?', a: 'For ED and transport nurses it is often worth it: many employers prefer or require it, it supports Magnet and trauma designations, and it strengthens travel contracts. The $380 fee is modest relative to the career signal.' },
      { q: 'What happens if I fail?', a: 'You may retest for $200 within one year of your initial exam date. BCEN Test Assurance (about $70) optionally bundles a free second attempt with the initial application.' }
    ],
    summaryPoints: [
      '175-question, 3-hour exam; $380 non-member / $285 ENA member',
      'Requires a current unrestricted RN license; no minimum experience',
      'Valid 4 years; renew by 100 CE hours or re-exam',
      'Recognized by Magnet hospitals, trauma centers, and travel agencies'
    ],
    relatedSlugs: ['bcen-cfrn', 'bcen-cpen', 'bcen-ctr-n', 'bcen-tcrn'],
    sourceUrl: 'https://bcen.org/cen/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'bcen-cfrn',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    tagline: 'The flight-nursing credential for RNs delivering care in air and ground medical transport.',
    description: 'The Certified Flight Registered Nurse (CFRN) validates the advanced knowledge RNs need to deliver care during air and ground medical transport. It covers flight physiology, safety, and high-acuity patient management for nurses working on helicopters and fixed-wing aircraft. Employers running air-medical programs and critical-care transport teams value the CFRN, and it pairs with BCEN\'s CTRN for broader transport recognition. A current RN license is required; about two years of transport or emergency experience is recommended.',
    quickAnswer: {
      summary: 'The CFRN is a 175-question, 3-hour computer-based exam (150 scored, 25 unscored) delivered at PSI centers or via Live Remote Proctoring. The fee is $380 non-member, $285 ENA member, or $195 military. You need a current RN license; the credential lasts four years.',
      advantages: [
        'Signals mastery of flight physiology and transport safety to air-medical employers',
        'Required or preferred by many flight and critical-care transport programs',
        'Pairs with the CTRN for full ground-and-air transport recognition',
        'Supports travel and leadership roles in transport nursing',
        'Criterion-referenced, not curved against other candidates'
      ]
    },
    roadmap: ['Hold a current RN license', 'Apply and pay BCEN (member or non-member)', 'Open your 90-day testing window', 'Study flight physiology, safety, and transport content', 'Schedule with PSI and pass at the scaled standard', 'Renew every 4 years by CE or exam'],
    prerequisites: 'Current, unrestricted RN license in the U.S., a territory, Canada, or Australia. Transport or emergency nursing experience is recommended but not mandatory.',
    examMeta: {
      questions: '175 (150 scored, 25 unscored)',
      time: '3 hours',
      pass: 'Scaled 0-900',
      fee: '$380 non-member / $285 ENA member / $195 military',
      format: 'Computer-based multiple choice',
      admin: 'PSI centers or Live Remote Proctoring'
    },
    topics: [
      { name: 'Transport Physiology & Environment' },
      { name: 'Pharmacology & Pain Management' },
      { name: 'Trauma & Medical Emergencies' },
      { name: 'Neonatal/Pediatric & Obstetric' },
      { name: 'Safety, Communications & Systems' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Current RN license'],
      ['Delivery', 'PSI or live remote proctoring'],
      ['Retake', '$200 within one year'],
      ['Validity', '4 years'],
      ['Scale', '0-900 scaled']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$380' },
        { item: 'Initial exam (ENA member)', fee: '$285' },
        { item: 'Retest (within 1 year)', fee: '$200' },
        { item: 'Recertification by CE', fee: '$250' }
      ],
      total: '$380-$580',
      footnote: 'Same BCEN fee schedule as the CEN; military and voucher discounts may apply.'
    },
    difficulty: 'Challenging',
    audience: 'Flight and critical-care transport RNs',
    time: '6-10 weeks',
    cost: '$380-$580',
    faqs: [
      { q: 'How hard is the CFRN?', a: 'The CFRN is challenging because it assumes master-level transport knowledge beyond general ED nursing. Candidates with flight or critical-care transport experience and a focused study plan do best.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks if you are new to transport, or 6-8 weeks with current flight experience. Use the BCEN outline and flight-specific review courses.' },
      { q: 'Does the CFRN expire?', a: 'Yes, every four years. Renew by 100 CE hours (75 transport/emergency-focused) or by re-examination.' },
      { q: 'Is the CFRN worth it?', a: 'For air-medical and critical-care transport nurses it is strongly worth it; many programs require it for hire. It also pairs with the CTRN for full transport credibility.' },
      { q: 'What if I fail?', a: 'Retest for $200 within one year of your initial date. Consider BCEN Test Assurance when you first apply to bundle a free retake.' }
    ],
    summaryPoints: [
      '175 questions, 3 hours; $380 non-member / $285 ENA member',
      'Built for air/ground transport RNs; current RN license required',
      'Valid 4 years; renew by CE or exam',
      'Pairs with CTRN for transport-ladder recognition'
    ],
    relatedSlugs: ['bcen-ctr-n', 'bcen-tcrn', 'bcen-cen', 'bcen-cpen'],
    sourceUrl: 'https://bcen.org/cfrn/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'bcen-cpen',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    tagline: 'The pediatric emergency nursing credential for RNs caring for infants, children, and adolescents.',
    description: 'The Certified Pediatric Emergency Nurse (CPEN) certifies RN expertise in emergency care for infants, children, and adolescents. It covers pediatric assessment, resuscitation, trauma, and family-centered care in the ED. Pediatric EDs, children\'s hospitals, and transport teams seek the CPEN, and it complements the general CEN. A current RN license is required; pediatric emergency experience is recommended but not mandatory.',
    quickAnswer: {
      summary: 'The CPEN is a 175-question, 3-hour computer-based exam (150 scored, 25 unscored) at PSI centers or via Live Remote Proctoring. The fee is $380 non-member, $285 ENA member, or $195 military. A current RN license is required; the credential is valid for four years.',
      advantages: [
        'Demonstrates pediatric emergency expertise to children\'s hospitals and EDs',
        'Complements the CEN for nurses splitting adult and pediatric shifts',
        'Preferred by pediatric transport and ED triage teams',
        'Supports Magnet and specialty-unit recognition',
        'Criterion-referenced, not curved'
      ]
    },
    roadmap: ['Hold a current RN license', 'Apply and pay BCEN', 'Open 90-day window', 'Study pediatric assessment, resuscitation, and trauma', 'Schedule with PSI and pass', 'Renew every 4 years by CE or exam'],
    prerequisites: 'Current, unrestricted RN license. Pediatric emergency experience is recommended but not required.',
    examMeta: {
      questions: '175 (150 scored, 25 unscored)',
      time: '3 hours',
      pass: 'Scaled 0-900',
      fee: '$380 non-member / $285 ENA member / $195 military',
      format: 'Computer-based multiple choice',
      admin: 'PSI centers or Live Remote Proctoring'
    },
    topics: [
      { name: 'Pediatric Assessment & Resuscitation' },
      { name: 'Trauma' },
      { name: 'Medical Emergencies' },
      { name: 'Environmental & Toxicology' },
      { name: 'Family-Centered Care' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Current RN license'],
      ['Delivery', 'PSI or live remote proctoring'],
      ['Retake', '$200 within one year'],
      ['Validity', '4 years'],
      ['Scale', '0-900 scaled']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$380' },
        { item: 'Initial exam (ENA member)', fee: '$285' },
        { item: 'Retest (within 1 year)', fee: '$200' },
        { item: 'Recertification by CE', fee: '$250' }
      ],
      total: '$380-$580',
      footnote: 'Same BCEN fee schedule as the CEN; military and voucher discounts may apply.'
    },
    difficulty: 'Moderate',
    audience: 'Pediatric ED and children\'s hospital RNs',
    time: '6-10 weeks',
    cost: '$380-$580',
    faqs: [
      { q: 'How hard is the CPEN?', a: 'It is moderately difficult and content-specific to pediatrics. ED nurses who already hold the CEN often find it manageable with focused pediatric review.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks, emphasizing pediatric assessment, resuscitation, and trauma content from the BCEN outline.' },
      { q: 'Does the CPEN expire?', a: 'Yes, every four years, renewed by 100 CE hours or re-examination.' },
      { q: 'Is the CPEN worth it?', a: 'For pediatric ED and children\'s hospital nurses it is worth it; many units prefer it and it strengthens a pediatric-focused resume.' },
      { q: 'What if I fail?', a: 'Retest for $200 within one year, or add BCEN Test Assurance at initial application for a bundled free retake.' }
    ],
    summaryPoints: [
      '175 questions, 3 hours; $380 non-member / $285 ENA member',
      'Pediatric emergency focus; current RN license required',
      'Valid 4 years; renew by CE or exam',
      'Pairs well with the general CEN'
    ],
    relatedSlugs: ['bcen-cen', 'bcen-ctr-n', 'bcen-tcrn', 'bcen-cfrn'],
    sourceUrl: 'https://bcen.org/cpen/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'bcen-ctr-n',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    tagline: 'The transport RN credential for ground and air critical-care transfers.',
    description: 'The Certified Transport Registered Nurse (CTRN) recognizes RNs who provide care during ground and air medical transport of critically ill or injured patients. It covers transport physiology, teamwork, and interfacility transfer management. Critical-care transport programs and flight services value the CTRN alongside the CFRN. A current RN license is required; transport or critical-care experience is recommended.',
    quickAnswer: {
      summary: 'The CTRN is a 175-question, 3-hour computer-based exam (150 scored, 25 unscored) at PSI centers or via Live Remote Proctoring. The fee is $380 non-member, $285 ENA member, or $195 military. A current RN license is required; the credential is valid for four years.',
      advantages: [
        'Validates ground and air transport competency to employers',
        'Stacks with the CFRN for complete transport credibility',
        'Recognized by critical-care transport and flight programs',
        'Supports leadership and educator roles in transport',
        'Criterion-referenced, not curved'
      ]
    },
    roadmap: ['Hold a current RN license', 'Apply and pay BCEN', 'Open 90-day window', 'Study transport physiology and interfacility care', 'Schedule with PSI and pass', 'Renew every 4 years by CE or exam'],
    prerequisites: 'Current, unrestricted RN license. Transport or critical-care experience is recommended.',
    examMeta: {
      questions: '175 (150 scored, 25 unscored)',
      time: '3 hours',
      pass: 'Scaled 0-900',
      fee: '$380 non-member / $285 ENA member / $195 military',
      format: 'Computer-based multiple choice',
      admin: 'PSI centers or Live Remote Proctoring'
    },
    topics: [
      { name: 'Transport Physiology' },
      { name: 'Patient Assessment' },
      { name: 'Trauma & Medical Emergencies' },
      { name: 'Neonatal/Pediatric & Obstetric' },
      { name: 'Safety & Communications' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Current RN license'],
      ['Delivery', 'PSI or live remote proctoring'],
      ['Retake', '$200 within one year'],
      ['Validity', '4 years'],
      ['Scale', '0-900 scaled']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$380' },
        { item: 'Initial exam (ENA member)', fee: '$285' },
        { item: 'Retest (within 1 year)', fee: '$200' },
        { item: 'Recertification by CE', fee: '$250' }
      ],
      total: '$380-$580',
      footnote: 'Same BCEN fee schedule as the CEN; military and voucher discounts may apply.'
    },
    difficulty: 'Challenging',
    audience: 'Ground and air transport RNs',
    time: '6-10 weeks',
    cost: '$380-$580',
    faqs: [
      { q: 'How hard is the CTRN?', a: 'It is challenging and assumes transport/critical-care knowledge. Nurses with current transport experience and a focused study plan pass at good rates.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing transport physiology, assessment, and interfacility care using the BCEN outline.' },
      { q: 'Does the CTRN expire?', a: 'Yes, every four years, renewed by 100 CE hours or re-examination.' },
      { q: 'Is the CTRN worth it?', a: 'For transport nurses it is worth it and stacks with the CFRN; many programs require or prefer it for transport roles.' },
      { q: 'What if I fail?', a: 'Retest for $200 within one year, or add BCEN Test Assurance at initial application for a bundled retake.' }
    ],
    summaryPoints: [
      '175 questions, 3 hours; $380 non-member / $285 ENA member',
      'Transport (ground/air) RN focus; current RN license required',
      'Valid 4 years; renew by CE or exam',
      'Stacks with CFRN for transport recognition'
    ],
    relatedSlugs: ['bcen-cfrn', 'bcen-cen', 'bcen-tcrn', 'bcen-cpen'],
    sourceUrl: 'https://bcen.org/ctrn/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'bcen-tcrn',
    body: 'Board of Certification for Emergency Nursing (BCEN)',
    tagline: 'The trauma nursing credential spanning injury prevention through rehabilitation.',
    description: 'The Trauma Certified Registered Nurse (TCRN) validates RN expertise in the care of trauma patients across the continuum from injury prevention through rehabilitation. It covers trauma assessment, systems, and population-specific care. Trauma centers and the ACS Trauma Quality Programs recognize the TCRN. A current RN license is required; trauma experience is recommended.',
    quickAnswer: {
      summary: 'The TCRN is a 175-question, 3-hour computer-based exam (150 scored, 25 unscored) at PSI centers or via Live Remote Proctoring. The fee is $380 non-member, $285 ENA member, or $195 military. A current RN license is required; the credential is valid for four years.',
      advantages: [
        'Recognized by trauma centers and ACS Trauma Quality Programs',
        'Signals trauma-system and population-specific expertise',
        'Supports trauma program coordinator and educator roles',
        'Complements the CEN for ED trauma nurses',
        'Criterion-referenced, not curved'
      ]
    },
    roadmap: ['Hold a current RN license', 'Apply and pay BCEN', 'Open 90-day window', 'Study trauma assessment, systems, and populations', 'Schedule with PSI and pass', 'Renew every 4 years by CE or exam'],
    prerequisites: 'Current, unrestricted RN license. Trauma experience is recommended.',
    examMeta: {
      questions: '175 (150 scored, 25 unscored)',
      time: '3 hours',
      pass: 'Scaled 0-900',
      fee: '$380 non-member / $285 ENA member / $195 military',
      format: 'Computer-based multiple choice',
      admin: 'PSI centers or Live Remote Proctoring'
    },
    topics: [
      { name: 'Injury Prevention & System' },
      { name: 'Trauma Assessment & Resuscitation' },
      { name: 'Population-Specific Trauma' },
      { name: 'Rehabilitation & Disposition' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Current RN license'],
      ['Delivery', 'PSI or live remote proctoring'],
      ['Retake', '$200 within one year'],
      ['Validity', '4 years'],
      ['Scale', '0-900 scaled']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$380' },
        { item: 'Initial exam (ENA member)', fee: '$285' },
        { item: 'Retest (within 1 year)', fee: '$200' },
        { item: 'Recertification by CE', fee: '$250' }
      ],
      total: '$380-$580',
      footnote: 'Same BCEN fee schedule as the CEN; military and voucher discounts may apply.'
    },
    difficulty: 'Moderate',
    audience: 'Trauma center and ED RNs',
    time: '6-10 weeks',
    cost: '$380-$580',
    faqs: [
      { q: 'How hard is the TCRN?', a: 'It is moderately difficult with a trauma-specific focus. ED and trauma nurses with relevant experience and a 6-10 week plan do well.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing trauma systems, assessment, and population-specific care from the BCEN outline.' },
      { q: 'Does the TCRN expire?', a: 'Yes, every four years, renewed by 100 CE hours or re-examination.' },
      { q: 'Is the TCRN worth it?', a: 'For trauma center nurses and program coordinators it is worth it; it is recognized by ACS Trauma Quality Programs.' },
      { q: 'What if I fail?', a: 'Retest for $200 within one year, or add BCEN Test Assurance at initial application for a bundled retake.' }
    ],
    summaryPoints: [
      '175 questions, 3 hours; $380 non-member / $285 ENA member',
      'Trauma-focused; current RN license required',
      'Valid 4 years; renew by CE or exam',
      'Recognized by ACS Trauma Quality Programs'
    ],
    relatedSlugs: ['bcen-cen', 'bcen-ctr-n', 'bcen-cfrn', 'bcen-cpen'],
    sourceUrl: 'https://bcen.org/tcrn/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-cp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s community and critical-care ground transport paramedic credential.',
    description: 'The Certified Paramedic (CP-C) is IBSC\'s credential for paramedics practicing in community and critical-care ground transport. It validates the master-level knowledge expected of experienced paramedics in mobile integrated health care and transport. Ground transport services and community paramedicine programs recognize the CP-C, which sits alongside the FP-C and TP-C. Active paramedic licensure and field experience are expected.',
    quickAnswer: {
      summary: 'The CP-C is a roughly 135-question, 2.5-hour computer-based exam (about 110 scored, 25 unscored) delivered by computer at testing centers or via ProProctor. The fee is $385 for non-members or $285 for IBSC affiliate members. An active paramedic license is expected.',
      advantages: [
        'Recognized by ground transport and community paramedicine programs',
        'Validates master-level paramedic knowledge beyond entry level',
        'Stacks with FP-C and TP-C for full transport credibility',
        'Internationally portable critical-care transport credential',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and experience', 'Apply and pay IBSC (affiliate or non-member)', 'Schedule computer-based exam', 'Study critical-care and community paramedicine content', 'Pass at the scaled standard', 'Recertify every 3-4 years by CE or exam'],
    prerequisites: 'Active paramedic licensure and documented critical-care/transport field experience are expected.',
    examMeta: {
      questions: 'About 135 (110 scored, 25 unscored)',
      time: '2.5 hours',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Cardiovascular & Resuscitation' },
      { name: 'Respiratory & Ventilation' },
      { name: 'Medical & Trauma' },
      { name: 'Pharmacology' },
      { name: 'Transport & Environment' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'IBSC exam fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Ground transport and community paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the CP-C?', a: 'It is challenging and assumes master-level paramedic knowledge. Experienced transport paramedics who study the IBSC outline and a review course pass at reasonable rates.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks, focusing on critical-care and community paramedicine content beyond the standard paramedic scope.' },
      { q: 'Does the CP-C expire?', a: 'Yes. Recertify by CE submission or by computer-based re-examination; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the CP-C worth it?', a: 'For ground transport and community paramedicine roles it is worth it and complements the FP-C/TP-C for full transport recognition.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'About 135 questions, 2.5 hours; $385 non-member / $285 affiliate',
      'For experienced transport/community paramedics',
      'Recert by CE or re-exam; late fee applies',
      'Stacks with FP-C and TP-C'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-ccp-c', 'ibsc-tp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  }
,
  {
    slug: 'ibsc-ccp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s critical-care paramedic credential for advanced transport.',
    description: 'The Critical Care Paramedic (CCP-C) certifies paramedics who provide advanced critical-care transport, including ventilator and hemodynamic management. It validates master-level critical-care knowledge beyond the standard paramedic scope. Air- and ground-critical-care transport programs seek the CCP-C. Active paramedic licensure and critical-care transport experience are expected.',
    quickAnswer: {
      summary: 'The CCP-C is a roughly 135-question, 2.5-hour computer-based exam (about 110 scored, 25 unscored) delivered at testing centers or via ProProctor. The fee is $385 for non-members or $285 for IBSC affiliate members. An active paramedic license is expected.',
      advantages: [
        'Recognized by air- and ground-critical-care transport programs',
        'Validates ventilator and hemodynamic management knowledge',
        'Stacks with FP-C and TP-C for full transport recognition',
        'Internationally portable critical-care credential',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and critical-care experience', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study ventilator, hemodynamic, and transport content', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'Active paramedic licensure and documented critical-care transport experience are expected.',
    examMeta: {
      questions: 'About 135 (110 scored, 25 unscored)',
      time: '2.5 hours',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Cardiovascular & Resuscitation' },
      { name: 'Respiratory & Ventilation' },
      { name: 'Neurologic & Trauma' },
      { name: 'Pharmacology' },
      { name: 'Transport & Environment' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + critical-care experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Critical-care transport paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the CCP-C?', a: 'It is challenging and assumes advanced critical-care knowledge. Experienced critical-care paramedics who study the IBSC outline and a review course do best.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks focusing on ventilator management, hemodynamics, and transport pharmacology beyond the standard paramedic scope.' },
      { q: 'Does the CCP-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the CCP-C worth it?', a: 'For critical-care transport roles it is worth it and stacks with the FP-C/TP-C for full transport recognition.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'About 135 questions, 2.5 hours; $385 non-member / $285 affiliate',
      'Advanced critical-care transport focus',
      'Recert by CE or re-exam',
      'Stacks with FP-C and TP-C'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-tp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-dico-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s EMS infection-control officer credential.',
    description: 'The Designated Infection Control Officer (DICO-C) certifies the EMS infection-control professional who protects responders and the public during outbreaks and daily operations. It covers exposure control, PPE, and communicable-disease response for dispatch and system-level roles. EMS agencies and public-health partners value the DICO-C. NAPSICO members receive discounted pricing.',
    quickAnswer: {
      summary: 'The DICO-C is a computer-based exam delivered at testing centers or via ProProctor, with a fee of $400 for non-members or $300 for NAPSICO members. It targets EMS infection-control officers and system-level responder-protection roles.',
      advantages: [
        'Recognized by EMS agencies and public-health partners',
        'Validates exposure control and PPE expertise',
        'Discounted fee for NAPSICO members',
        'Distinct from clinical transport credentials',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm infection-control or EMS role', 'Apply and pay IBSC (NAPSICO or non-member)', 'Schedule computer-based exam', 'Study exposure control and communicable-disease content', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'EMS or infection-control experience appropriate to the designated infection-control officer role is expected.',
    examMeta: {
      questions: 'Computer-based; count not individually published',
      time: '2.5 hours (approx)',
      pass: 'Scaled pass standard (not published)',
      fee: '$400 non-member / $300 NAPSICO member',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Exposure Control & PPE' },
      { name: 'Communicable Disease Response' },
      { name: 'Surveillance & Reporting' },
      { name: 'Dispatcher/System Safety' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'EMS/infection-control role'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '2.5 hours (approx)' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$400' },
        { item: 'Initial exam (NAPSICO member)', fee: '$300' },
        { item: 'Recert by CE or exam (non-member)', fee: '$400' },
        { item: 'Recert by CE or exam (NAPSICO)', fee: '$300' }
      ],
      total: '$400-$500',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Moderate',
    audience: 'EMS infection-control officers and dispatchers',
    time: '6-10 weeks',
    cost: '$400-$500',
    faqs: [
      { q: 'How hard is the DICO-C?', a: 'It is moderately difficult and focused on infection control rather than clinical transport. Candidates with EMS or public-health infection-control duties do well with targeted study.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing exposure control, PPE, and communicable-disease response from the IBSC outline.' },
      { q: 'Does the DICO-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the DICO-C worth it?', a: 'For EMS infection-control and dispatch leaders it is worth it; it signals system-level responder-protection expertise.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'Computer-based; $400 non-member / $300 NAPSICO member',
      'EMS infection-control officer focus',
      'Recert by CE or re-exam',
      'Distinct from IBSC clinical transport credentials'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-tp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-fp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s flagship flight paramedic credential for air medical transport.',
    description: 'The Flight Paramedic (FP-C) is IBSC\'s flagship critical-care transport credential for paramedics working in air medical and flight programs. It validates master-level knowledge of flight physiology, ventilator management, and high-acuity care. Air-medical employers frequently require or prefer the FP-C, and it pairs with the TP-C and CP-C. Active paramedic licensure and flight experience are expected.',
    quickAnswer: {
      summary: 'The FP-C is a roughly 135-question, 2.5-hour computer-based exam (110 scored, 25 unscored) at testing centers or via ProProctor. The fee is $385 non-member or $285 IBSC affiliate. An active paramedic license is expected; the credential is valid for several years with recertification.',
      advantages: [
        'Required or preferred by many air-medical programs',
        'Validates flight physiology and ventilator mastery',
        'Pairs with TP-C and CP-C for full transport recognition',
        'Internationally portable critical-care credential',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and flight experience', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study flight physiology and critical care', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'Active paramedic licensure and documented flight/critical-care transport experience are expected.',
    examMeta: {
      questions: 'About 135 (110 scored, 25 unscored)',
      time: '2.5 hours',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Flight Physiology & Environment' },
      { name: 'Cardiovascular & Resuscitation' },
      { name: 'Respiratory & Ventilation' },
      { name: 'Trauma & Medical' },
      { name: 'Pharmacology' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + flight experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Flight and air-medical paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the FP-C?', a: 'It is challenging and assumes master-level flight and critical-care knowledge. Experienced flight paramedics using a review course and the IBSC outline pass at reasonable rates.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks focusing on flight physiology, ventilator management, and transport pharmacology beyond the standard paramedic scope.' },
      { q: 'Does the FP-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the FP-C worth it?', a: 'For air-medical paramedics it is strongly worth it; most flight programs require or prefer it and it stacks with TP-C/CP-C.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'About 135 questions, 2.5 hours; $385 non-member / $285 affiliate',
      'Flight paramedic focus; active license expected',
      'Recert by CE or re-exam',
      'Pairs with TP-C and CP-C'
    ],
    relatedSlugs: ['ibsc-tp-c', 'ibsc-ccp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-mtsp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s mobile tactical emergency paramedic credential.',
    description: 'The Mobile Tactical Emergency Paramedic (MTSP-C) certifies paramedics operating in tactical and mobile emergency response, including law-enforcement and special-operations medical support. It validates the high-risk, austere-care knowledge needed beyond standard EMS. Tactical and mobile response teams recognize the MTSP-C. Active paramedic licensure and tactical experience are expected.',
    quickAnswer: {
      summary: 'The MTSP-C is a computer-based IBSC exam (fee $385 non-member or $285 affiliate) covering tactical and mobile emergency paramedicine. It targets paramedics in law-enforcement and special-operations medical support roles.',
      advantages: [
        'Recognized by tactical and mobile response teams',
        'Validates austere, high-risk care knowledge',
        'Distinct tactical credential within the IBSC family',
        'Stacks with FP-C/TP-C for broad transport credibility',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and tactical experience', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study tactical and austere-care content', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'Active paramedic licensure and tactical/mobile emergency response experience are expected.',
    examMeta: {
      questions: 'Computer-based; count not individually published',
      time: '2.5 hours (approx)',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Tactical Scene Safety' },
      { name: 'Austere & Prolonged Care' },
      { name: 'Trauma & Resuscitation' },
      { name: 'Pharmacology' },
      { name: 'Team Operations' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + tactical experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours (approx)' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'Fee assumed to follow the FP-C/TP-C schedule; confirm at ibscertifications.org. A $125 late fee applies within 30 days of recertification expiration.'
    },
    difficulty: 'Challenging',
    audience: 'Tactical and mobile emergency paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the MTSP-C?', a: 'It is challenging and assumes tactical/austere-care knowledge beyond standard EMS. Candidates with tactical team experience and focused study do best.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks reviewing tactical scene safety, prolonged field care, and trauma content.' },
      { q: 'Does the MTSP-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the MTSP-C worth it?', a: 'For tactical and special-operations medics it is worth it and complements the FP-C/TP-C within the IBSC family.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'Computer-based; $385 non-member / $285 affiliate (assumed)',
      'Tactical/mobile emergency paramedic focus',
      'Recert by CE or re-exam',
      'Complements FP-C and TP-C'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-tp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ibsc-tp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s ground transport paramedic credential.',
    description: 'The Transport Paramedic (TP-C) certifies paramedics in ground critical-care transport, covering interfacility transfer and stabilization en route. It validates transport-specific master-level knowledge. Ground transport services value the TP-C alongside the FP-C. Active paramedic licensure and transport experience are expected.',
    quickAnswer: {
      summary: 'The TP-C is a roughly 135-question, 2.5-hour computer-based exam (about 110 scored, 25 unscored) at testing centers or via ProProctor. The fee is $385 non-member or $285 IBSC affiliate. An active paramedic license is expected.',
      advantages: [
        'Recognized by ground critical-care transport services',
        'Validates interfacility transfer and stabilization skills',
        'Pairs with FP-C for full transport recognition',
        'Internationally portable transport credential',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and transport experience', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study transport and critical-care content', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'Active paramedic licensure and documented ground transport experience are expected.',
    examMeta: {
      questions: 'About 135 (110 scored, 25 unscored)',
      time: '2.5 hours',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Cardiovascular & Resuscitation' },
      { name: 'Respiratory & Ventilation' },
      { name: 'Medical & Trauma' },
      { name: 'Pharmacology' },
      { name: 'Transport & Environment' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + transport experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Ground transport paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the TP-C?', a: 'It is challenging and assumes master-level transport knowledge. Experienced ground transport paramedics who study the IBSC outline and a review course pass at reasonable rates.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks focusing on interfacility transfer, ventilator management, and transport pharmacology.' },
      { q: 'Does the TP-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the TP-C worth it?', a: 'For ground transport paramedics it is worth it and pairs with the FP-C for full transport recognition.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'About 135 questions, 2.5 hours; $385 non-member / $285 affiliate',
      'Ground transport paramedic focus',
      'Recert by CE or re-exam',
      'Pairs with FP-C'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-ccp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-tr-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s tactical responder credential for high-threat environments.',
    description: 'The Tactical Responder (TR-C) certifies EMS responders who operate in tactical and high-threat environments, including tactical medics and first responders. It validates scene-safety, austere-care, and tactical-team knowledge. SWAT and tactical EMS programs recognize the TR-C. Eligibility spans paramedics and other qualified responders.',
    quickAnswer: {
      summary: 'The TR-C is a computer-based IBSC exam delivered at testing centers or via ProProctor, with a fee of $195 for non-members or $175 for IBSC affiliate members. It targets tactical medics and high-threat-environment responders.',
      advantages: [
        'Recognized by SWAT and tactical EMS programs',
        'Validates scene-safety and austere-care knowledge',
        'Lower fee than the paramedic transport credentials',
        'Open to paramedics and other qualified responders',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm tactical/high-threat EMS role', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study tactical care and scene safety', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'EMS or tactical responder experience appropriate to high-threat environments is expected.',
    examMeta: {
      questions: 'Computer-based; count not individually published',
      time: '2.5 hours (approx)',
      pass: 'Scaled pass standard (not published)',
      fee: '$195 non-member / $175 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Tactical Scene Safety' },
      { name: 'Austere & Prolonged Care' },
      { name: 'Trauma & Resuscitation' },
      { name: 'Team Operations' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Tactical/high-threat EMS role'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '2.5 hours (approx)' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$195' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$175' },
        { item: 'Recert by CE or exam (non-member)', fee: '$195' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$175' }
      ],
      total: '$195-$295',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Moderate',
    audience: 'Tactical medics and high-threat responders',
    time: '6-10 weeks',
    cost: '$195-$295',
    faqs: [
      { q: 'How hard is the TR-C?', a: 'It is moderately difficult and focused on tactical care rather than general transport. Candidates with tactical team experience do well with targeted study.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing tactical scene safety, prolonged field care, and team operations.' },
      { q: 'Does the TR-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the TR-C worth it?', a: 'For SWAT and tactical EMS responders it is worth it; it signals high-threat-environment competence.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'Computer-based; $195 non-member / $175 affiliate',
      'Tactical responder focus',
      'Recert by CE or re-exam',
      'Lower fee than IBSC transport credentials'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-tp-c', 'ibsc-cp-c', 'ibsc-mtsp-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ibsc-wp-c',
    body: 'International Board of Specialty Certification (IBSC)',
    tagline: 'IBSC\'s wilderness and remote medicine paramedic credential.',
    description: 'The Wilderness Paramedic (WP-C) certifies paramedics in wilderness and remote medicine, covering extended-care and austere-environment decision making. It validates the knowledge needed when evacuation is delayed. Search-and-rescue, expedition, and remote-site employers value the WP-C. Active paramedic licensure and wilderness experience are expected.',
    quickAnswer: {
      summary: 'The WP-C is a computer-based IBSC exam (fee $385 non-member or $285 affiliate) covering wilderness and remote medicine. It targets paramedics in search-and-rescue, expedition, and remote-site roles.',
      advantages: [
        'Recognized by search-and-rescue and expedition employers',
        'Validates extended-care and austere decision making',
        'Distinct wilderness credential within the IBSC family',
        'Stacks with FP-C/TP-C for broad transport credibility',
        'Recertify by CE or re-exam'
      ]
    },
    roadmap: ['Confirm paramedic license and wilderness experience', 'Apply and pay IBSC', 'Schedule computer-based exam', 'Study wilderness and remote-care content', 'Pass at the scaled standard', 'Recertify by CE or re-exam'],
    prerequisites: 'Active paramedic licensure and wilderness/remote-medicine experience are expected.',
    examMeta: {
      questions: 'Computer-based; count not individually published',
      time: '2.5 hours (approx)',
      pass: 'Scaled pass standard (not published)',
      fee: '$385 non-member / $285 IBSC affiliate',
      format: 'Computer-based multiple choice',
      admin: 'Testing centers or ProProctor'
    },
    topics: [
      { name: 'Extended & Prolonged Care' },
      { name: 'Environmental Injuries' },
      { name: 'Trauma & Resuscitation' },
      { name: 'Pharmacology' },
      { name: 'Evacuation & Logistics' },
      { name: 'Professional Issues' }
    ],
    examEssentials: [
      ['Eligibility', 'Active paramedic license + wilderness experience'],
      ['Delivery', 'Computer-based (CBT) or ProProctor'],
      ['Retake', 'Full fee to reapply'],
      ['Recert', 'By CE or re-exam'],
      ['Scale', 'Scaled; cut score not published']
    ],
    timeline: [
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '8-12 weeks' },
      { stage: 'Test', duration: '2.5 hours (approx)' },
      { stage: 'Maintain', duration: 'Every 3-4 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Initial exam (non-member)', fee: '$385' },
        { item: 'Initial exam (IBSC affiliate)', fee: '$285' },
        { item: 'Recert by CE or exam (non-member)', fee: '$385' },
        { item: 'Recert by CE or exam (affiliate)', fee: '$285' }
      ],
      total: '$385-$485',
      footnote: 'IBSC fees are non-refundable; a $125 late fee applies within 30 days of expiration for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Wilderness and remote-medicine paramedics',
    time: '8-12 weeks',
    cost: '$385-$485',
    faqs: [
      { q: 'How hard is the WP-C?', a: 'It is challenging and assumes wilderness/austere-care knowledge. Candidates with remote-medicine experience and focused study do best.' },
      { q: 'How long should I study?', a: 'Plan 8-12 weeks reviewing extended care, environmental injuries, and evacuation logistics.' },
      { q: 'Does the WP-C expire?', a: 'Yes. Recertify by CE or re-exam; a $125 late fee applies within 30 days of expiration.' },
      { q: 'Is the WP-C worth it?', a: 'For search-and-rescue, expedition, and remote-site paramedics it is worth it and complements the FP-C/TP-C.' },
      { q: 'What if I fail?', a: 'You must reapply and pay the full fee again; IBSC does not offer a discounted retest.' }
    ],
    summaryPoints: [
      'Computer-based; $385 non-member / $285 affiliate',
      'Wilderness/remote medicine focus',
      'Recert by CE or re-exam',
      'Complements FP-C and TP-C'
    ],
    relatedSlugs: ['ibsc-fp-c', 'ibsc-tp-c', 'ibsc-cp-c', 'ibsc-tr-c'],
    sourceUrl: 'https://www.ibscertifications.org/exam/exam-fees',
    reviewed: '2026-08',
    confidence: 'high'
  }
,
  {
    slug: 'nremt-emt',
    body: 'National Registry of Emergency Medical Technicians (NREMT)',
    tagline: 'The national entry-level EMT certification that gates state licensure.',
    description: 'The NREMT Emergency Medical Technician (EMT) certification is the national standard for entry-level EMS providers delivering basic life support. The computer-adaptive cognitive exam is used by nearly every state as the gateway to EMT licensure. It tests assessment, airway, trauma, and medical emergencies, and it is required for ambulance and interface roles.',
    quickAnswer: {
      summary: 'The NREMT EMT cognitive exam is a computer-adaptive test of 70-120 questions (10 unscored pretest) with a 2-hour limit, delivered at Pearson VUE or via OnVUE. The fee is $104 per attempt. You also need a state psychomotor skills exam; the passing standard is a scaled 950 on a 100-1500 scale.',
      advantages: [
        'Nationally recognized and required for EMT licensure in most states',
        'Computer-adaptive format ends as soon as competency is shown',
        'Portable across states that use the National Registry',
        'Foundation for advancing to AEMT and Paramedic',
        'Same-day results at the test center'
      ]
    },
    roadmap: ['Complete a state-approved EMT course', 'Apply and pay the $104 fee', 'Receive your ATT (90-day window)', 'Pass the state psychomotor skills exam', 'Schedule the cognitive exam at Pearson VUE/OnVUE', 'Pass at the scaled 950 standard'],
    prerequisites: 'Completion of a state-approved EMT course and authorization from your program or state. A passing psychomotor exam is also required for full certification.',
    examMeta: {
      questions: '70-120 (10 unscored pretest)',
      time: '2 hours',
      pass: 'Scaled 950 / 1500',
      fee: '$104 per attempt',
      format: 'Computer-adaptive multiple choice',
      admin: 'Pearson VUE or OnVUE'
    },
    topics: [
      { name: 'Scene Size-Up and Safety', weight: '19%-23%' },
      { name: 'Primary Assessment', weight: '37%-41%' },
      { name: 'Secondary Assessment', weight: '4%-8%' },
      { name: 'Patient Treatment and Transport', weight: '20%-24%' },
      { name: 'Operations', weight: '10%-14%' }
    ],
    examEssentials: [
      ['Eligibility', 'State-approved EMT course completion'],
      ['Delivery', 'Pearson VUE or OnVUE'],
      ['Psychomotor', 'Separate state skills exam required'],
      ['Retake', '15-day wait; repay $104'],
      ['Validity', '2 years; renew by CE or exam']
    ],
    timeline: [
      { stage: 'Complete EMT course', duration: 'Weeks-months' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Test', duration: '2 hours' },
      { stage: 'Maintain', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'NREMT cognitive exam', fee: '$104' },
        { item: 'Retake (per attempt)', fee: '$104' },
        { item: 'State psychomotor exam', fee: 'Varies by state' },
        { item: 'Recertification', fee: '$26' }
      ],
      total: '$104-$200+',
      footnote: 'The cognitive fee is per NREMT; the psychomotor skills exam fee is set by your state and is separate.'
    },
    difficulty: 'Moderate',
    audience: 'Entry-level EMS providers',
    time: '4-8 weeks',
    cost: '$104+',
    faqs: [
      { q: 'How hard is the NREMT EMT?', a: 'It is moderately difficult. The first-attempt pass rate is roughly 70%, and the computer-adaptive format rewards consistent clinical reasoning over memorization.' },
      { q: 'How long should I study?', a: 'Most candidates study 4-8 weeks after course completion, drilling assessment flow and scenario questions under timed conditions.' },
      { q: 'Does the EMT certification expire?', a: 'Yes. National Registry certification renews every two years via the National Continued Competency Program (CE) or by re-examination.' },
      { q: 'Is the NREMT EMT worth it?', a: 'It is effectively required for EMT employment in most states, since they use the National Registry as the licensure gateway. The $104 fee is modest.' },
      { q: 'What if I fail?', a: 'You may retest after a 15-day wait by submitting a new application and the $104 fee; EMT candidates get up to six attempts before remediation.' }
    ],
    summaryPoints: [
      'Computer-adaptive 70-120 questions, 2 hours; $104',
      'Requires a separate state psychomotor exam',
      'Pass at scaled 950 / 1500',
      'Gateway to EMT licensure in most states'
    ],
    relatedSlugs: ['nremt-aemt', 'nremt-paramedic', 'nremt-emr', 'ibsc-cp-c'],
    sourceUrl: 'https://www.nremt.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'nremt-aemt',
    body: 'National Registry of Emergency Medical Technicians (NREMT)',
    tagline: 'The intermediate ALS credential between EMT and Paramedic.',
    description: 'The NREMT Advanced EMT (AEMT) certification sits between EMT and Paramedic, adding IV/IO access, medication administration, and advanced airway skills. Since July 2024 the NREMT AEMT is a single fixed linear cognitive exam; the separate psychomotor exam was discontinued. It is the national standard for intermediate-level ALS providers.',
    quickAnswer: {
      summary: 'The NREMT AEMT cognitive exam is a fixed linear computer test of 135 questions with a 3-hour limit, delivered at Pearson VUE or OnVUE. The fee is $159 per attempt; the passing standard is a scaled 950 on a 100-1500 scale.',
      advantages: [
        'National standard for intermediate ALS (AEMT) providers',
        'Adds IV/IO, meds, and advanced airway beyond EMT',
        'No separate psychomotor exam since July 2024',
        'Stepping stone to Paramedic',
        'Portable across states using the National Registry'
      ]
    },
    roadmap: ['Complete an AEMT program', 'Apply and pay the $159 fee', 'Receive your ATT', 'Study the ALS blueprint with clinical-judgment scenarios', 'Schedule at Pearson VUE/OnVUE', 'Pass at the scaled 950 standard'],
    prerequisites: 'Completion of a state-approved AEMT program (or equivalent state licensure pathway) and NREMT authorization.',
    examMeta: {
      questions: '135',
      time: '3 hours',
      pass: 'Scaled 950 / 1500',
      fee: '$159 per attempt',
      format: 'Linear computer-based',
      admin: 'Pearson VUE or OnVUE'
    },
    topics: [
      { name: 'Airway, Respiration & Ventilation' },
      { name: 'Cardiology & Resuscitation' },
      { name: 'Trauma' },
      { name: 'Medical, Obstetrics & Gynecology' },
      { name: 'EMS Operations' },
      { name: 'Clinical Judgment' }
    ],
    examEssentials: [
      ['Eligibility', 'AEMT program or state licensure pathway'],
      ['Delivery', 'Pearson VUE or OnVUE'],
      ['Psychomotor', 'Discontinued July 2024'],
      ['Retake', '15-day wait; repay $159'],
      ['Validity', '2 years; renew by CE or exam']
    ],
    timeline: [
      { stage: 'Complete AEMT program', duration: 'Weeks-months' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '3 hours' },
      { stage: 'Maintain', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'NREMT AEMT exam', fee: '$159' },
        { item: 'Retake (per attempt)', fee: '$159' },
        { item: 'Recertification', fee: '$26' }
      ],
      total: '$159-$185',
      footnote: 'A $50 late fee applies after March 31 for recertification.'
    },
    difficulty: 'Challenging',
    audience: 'Intermediate ALS EMS providers',
    time: '6-10 weeks',
    cost: '$159+',
    faqs: [
      { q: 'How hard is the AEMT?', a: 'It is challenging. The fixed 135-question linear format with clinical-judgment scenarios tests deeper ALS reasoning than the EMT, so a structured study plan is important.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing the ALS blueprint, IV/IO access, pharmacology, and scenario items under timed conditions.' },
      { q: 'Does the AEMT certification expire?', a: 'Yes, every two years, renewed by CE through the National Continued Competency Program or by re-examination.' },
      { q: 'Is the AEMT worth it?', a: 'For providers wanting ALS skills without the full paramedic scope, it is worth it and is a recognized national credential. Many use it as a step to Paramedic.' },
      { q: 'What if I fail?', a: 'Retest after a 15-day wait by reapplying and paying $159; a new application is required each attempt.' }
    ],
    summaryPoints: [
      'Fixed 135-question exam, 3 hours; $159',
      'Adds IV/IO, meds, advanced airway to EMT',
      'No psychomotor exam since July 2024',
      'Pass at scaled 950 / 1500'
    ],
    relatedSlugs: ['nremt-emt', 'nremt-paramedic', 'nremt-emr', 'ibsc-tp-c'],
    sourceUrl: 'https://www.nremt.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'nremt-emr',
    body: 'National Registry of Emergency Medical Technicians (NREMT)',
    tagline: 'The entry-level first-responder EMS credential.',
    description: 'The NREMT Emergency Medical Responder (EMR) certification is the entry-level credential for first responders who provide immediate care before an ambulance arrives. The computer-adaptive cognitive exam covers scene safety, assessment, and basic life support. Many fire, law-enforcement, and industrial responders hold the EMR.',
    quickAnswer: {
      summary: 'The NREMT EMR cognitive exam is a computer-adaptive test of 90-110 questions (about 30 unscored pretest) with a 2-hour limit at Pearson VUE or OnVUE. The fee is about $88 per attempt; the passing standard is a scaled 950 on a 100-1500 scale.',
      advantages: [
        'Entry-level credential for first responders and industrial teams',
        'Fast computer-adaptive format',
        'Foundation toward EMT and higher levels',
        'Recognized by many fire and law-enforcement agencies',
        'Portable across states using the National Registry'
      ]
    },
    roadmap: ['Complete an EMR course', 'Apply and pay the fee', 'Receive your ATT', 'Study scene safety and assessment', 'Schedule at Pearson VUE/OnVUE', 'Pass at the scaled 950 standard'],
    prerequisites: 'Completion of a state-approved EMR course and NREMT authorization.',
    examMeta: {
      questions: '90-110 (about 30 unscored)',
      time: '2 hours',
      pass: 'Scaled 950 / 1500',
      fee: '$88 per attempt',
      format: 'Computer-adaptive multiple choice',
      admin: 'Pearson VUE or OnVUE'
    },
    topics: [
      { name: 'Scene Size-Up and Safety', weight: '19%-23%' },
      { name: 'Primary Assessment', weight: '37%-41%' },
      { name: 'Secondary Assessment', weight: '4%-8%' },
      { name: 'Patient Treatment and Transport', weight: '20%-24%' },
      { name: 'Operations', weight: '10%-14%' }
    ],
    examEssentials: [
      ['Eligibility', 'State-approved EMR course'],
      ['Delivery', 'Pearson VUE or OnVUE'],
      ['Retake', '15-day wait; repay fee'],
      ['Validity', '2 years; renew by CE or exam'],
      ['Scale', 'Scaled 950 / 1500']
    ],
    timeline: [
      { stage: 'Complete EMR course', duration: 'Weeks' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '3-6 weeks' },
      { stage: 'Test', duration: '2 hours' },
      { stage: 'Maintain', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'NREMT EMR exam', fee: '$88' },
        { item: 'Retake (per attempt)', fee: '$88' },
        { item: 'Recertification', fee: '$26' }
      ],
      total: '$88-$114',
      footnote: 'EMR exam fee is per attempt; a $50 late fee applies after March 31 for recertification.'
    },
    difficulty: 'Easy',
    audience: 'First responders and industrial medics',
    time: '3-6 weeks',
    cost: '$88+',
    faqs: [
      { q: 'How hard is the EMR?', a: 'It is the easiest NREMT level. The computer-adaptive exam focuses on scene safety, assessment, and basic life support, and is very passable with course review.' },
      { q: 'How long should I study?', a: 'Plan 3-6 weeks, mostly reinforcing assessment flow and basic interventions from your EMR course.' },
      { q: 'Does the EMR certification expire?', a: 'Yes, every two years, renewed by CE or re-examination through the National Continued Competency Program.' },
      { q: 'Is the EMR worth it?', a: 'For fire, law-enforcement, and industrial responders it is worth it as the baseline national credential, and it is a ladder rung toward EMT.' },
      { q: 'What if I fail?', a: 'Retest after a 15-day wait by reapplying and paying the fee.' }
    ],
    summaryPoints: [
      'Computer-adaptive 90-110 questions, 2 hours; ~$88',
      'Entry-level first-responder credential',
      'Pass at scaled 950 / 1500',
      'Foundation toward EMT'
    ],
    relatedSlugs: ['nremt-emt', 'nremt-aemt', 'nremt-paramedic', 'ibsc-tr-c'],
    sourceUrl: 'https://www.nremt.org',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'nremt-paramedic',
    body: 'National Registry of Emergency Medical Technicians (NREMT)',
    tagline: 'The top national EMS credential for paramedics.',
    description: 'The NREMT Paramedic (NRP) certification is the highest EMS level, validating advanced life support including 12-lead ECG, advanced airway, and complex pharmacology. The computer-adaptive cognitive exam is used by nearly every state as the gateway to paramedic licensure. It requires graduation from a paramedic program and is the pinnacle of the EMS ladder.',
    quickAnswer: {
      summary: 'The NREMT Paramedic cognitive exam is a computer-adaptive test of 110-150 questions (20 unscored pretest) with a 3.5-hour limit at Pearson VUE or OnVUE. The fee is $175 per attempt; the passing standard is a scaled 950 on a 100-1500 scale. The separate psychomotor exam was discontinued in July 2024.',
      advantages: [
        'Highest national EMS credential; required for paramedic licensure',
        'Validates ALS: 12-lead, advanced airway, complex pharmacology',
        'Computer-adaptive with clinical-judgment scenarios',
        'Portable across states using the National Registry',
        'Top of the EMS career ladder'
      ]
    },
    roadmap: ['Graduate from a paramedic program', 'Apply and pay the $175 fee', 'Receive your ATT', 'Study the ALS blueprint with judgment scenarios', 'Schedule at Pearson VUE/OnVUE', 'Pass at the scaled 950 standard'],
    prerequisites: 'Graduation from a CAAHEP/CoAEMSP-accredited paramedic program and NREMT authorization. The psychomotor exam was discontinued in July 2024.',
    examMeta: {
      questions: '110-150 (20 unscored)',
      time: '3.5 hours',
      pass: 'Scaled 950 / 1500',
      fee: '$175 per attempt',
      format: 'Computer-adaptive multiple choice',
      admin: 'Pearson VUE or OnVUE'
    },
    topics: [
      { name: 'Clinical Judgment', weight: '34%-38%' },
      { name: 'Medical/Obstetrics/Gynecology', weight: '24%-28%' },
      { name: 'Cardiology and Resuscitation', weight: '10%-14%' },
      { name: 'Airway/Respiration/Ventilation', weight: '10%-14%' },
      { name: 'Trauma', weight: '10%-14%' },
      { name: 'EMS Operations', weight: '4%-8%' }
    ],
    examEssentials: [
      ['Eligibility', 'Paramedic program graduation'],
      ['Delivery', 'Pearson VUE or OnVUE'],
      ['Psychomotor', 'Discontinued July 2024'],
      ['Retake', '15-day wait; repay $175'],
      ['Validity', '2 years; renew by CE or exam']
    ],
    timeline: [
      { stage: 'Complete paramedic program', duration: 'Months' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '10-16 weeks' },
      { stage: 'Test', duration: '3.5 hours' },
      { stage: 'Maintain', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'NREMT Paramedic exam', fee: '$175' },
        { item: 'Retake (per attempt)', fee: '$175' },
        { item: 'Recertification', fee: '$26' }
      ],
      total: '$175-$201',
      footnote: 'A $50 late fee applies after March 31 for recertification. Some candidates take remedial training after three failures.'
    },
    difficulty: 'Hard',
    audience: 'Paramedics (highest EMS level)',
    time: '10-16 weeks',
    cost: '$175+',
    faqs: [
      { q: 'How hard is the NREMT Paramedic?', a: 'It is the hardest NREMT exam. The 3.5-hour adaptive test with clinical-judgment scenarios rewards deep ALS mastery; most candidates study 10-16 weeks.' },
      { q: 'How long should I study?', a: 'Plan 10-16 weeks using full-length timed practice exams and scenario drills across all ALS domains.' },
      { q: 'Does the Paramedic certification expire?', a: 'Yes, every two years, renewed by CE through the National Continued Competency Program or by re-examination.' },
      { q: 'Is the NREMT Paramedic worth it?', a: 'It is required for paramedic licensure in nearly every state and is the top EMS credential, so it is essential for the career.' },
      { q: 'What if I fail?', a: 'Retest after a 15-day wait by reapplying and paying $175; after three failures, remedial training may be required before more attempts.' }
    ],
    summaryPoints: [
      'Computer-adaptive 110-150 questions, 3.5 hours; $175',
      'Validates full ALS scope',
      'No psychomotor exam since July 2024',
      'Pass at scaled 950 / 1500'
    ],
    relatedSlugs: ['nremt-emt', 'nremt-aemt', 'nremt-emr', 'ibsc-fp-c'],
    sourceUrl: 'https://www.nremt.org',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'nha-cpht',
    body: 'National Healthcareer Association (NHA)',
    tagline: 'NHA\'s entry-level pharmacy technician credential (ExCPT).',
    description: 'The NHA Certified Pharmacy Technician (CPhT), delivered via the ExCPT exam, is an entry-level pharmacy technician credential accepted by employers nationwide. It covers pharmacy law, medications, dispensing, and safety. Unlike the PTCB CPhT, the NHA route offers multiple eligibility pathways including work experience, making it accessible to career changers.',
    quickAnswer: {
      summary: 'The NHA CPhT (ExCPT) exam is a 120-question, about 2-hour-10-minute computer-based test (100 scored, 20 pretest) at PSI centers or via live remote proctoring. The fee is $125. You need a high school diploma or equivalent and eligibility by training or work experience; the credential renews every two years.',
      advantages: [
        'Accepted by employers nationwide as an entry-level pharmacy tech credential',
        'Multiple eligibility paths including work experience',
        'Computer-based with same-day pass/fail results',
        'Renews every two years with 10 CEUs',
        'Distinct from the PTCB CPhT, broadening job options'
      ]
    },
    roadmap: ['Confirm eligibility (training or work experience)', 'Create an NHA account and apply', 'Pay $125 and get your ATT', 'Study pharmacy law, meds, and dispensing', 'Schedule at PSI or live proctoring', 'Pass and renew every 2 years with 10 CEUs'],
    prerequisites: 'High school diploma or equivalent, plus eligibility by completed pharmacy technician program, work experience, or military training. Current pharmacy technician registration where required by state.',
    examMeta: {
      questions: '120 (100 scored, 20 pretest)',
      time: '2 hours 10 minutes',
      pass: 'Scaled (domain score report)',
      fee: '$125',
      format: 'Computer-based multiple choice',
      admin: 'PSI centers or live remote proctoring'
    },
    topics: [
      { name: 'Role and General Duties', weight: '15%' },
      { name: 'Laws and Regulations', weight: '15%' },
      { name: 'Drugs and Drug Therapy', weight: '13%' },
      { name: 'Dispensing Process', weight: '43%' },
      { name: 'Medication Safety and Quality Assurance', weight: '14%' }
    ],
    examEssentials: [
      ['Eligibility', 'HS diploma + training/experience'],
      ['Delivery', 'PSI or live remote proctoring'],
      ['Retake', '30-day wait; full fee'],
      ['Validity', '2 years; 10 CEUs to renew'],
      ['Result', 'Same-day pass/fail']
    ],
    timeline: [
      { stage: 'Confirm eligibility', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Test', duration: '2 hours 10 minutes' },
      { stage: 'Maintain', duration: 'Every 2 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'NHA CPhT (ExCPT) exam', fee: '$125' },
        { item: 'Retake (full fee)', fee: '$125' },
        { item: 'Recertification (every 2 yrs)', fee: 'Varies' }
      ],
      total: '$125-$250',
      footnote: 'NHA does not limit retake attempts but requires a 30-day wait and full fee each time; after three failures, extra documentation may be required.'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring pharmacy technicians',
    time: '4-8 weeks',
    cost: '$125+',
    faqs: [
      { q: 'How hard is the NHA CPhT?', a: 'It is moderately difficult and very achievable with a dedicated 4-8 week study plan covering law, medications, and the dispensing process.' },
      { q: 'How long should I study?', a: 'Plan 4-8 weeks, emphasizing the dispensing-process domain (43% of scored questions) and pharmacy law.' },
      { q: 'Does the NHA CPhT expire?', a: 'Yes, every two years. Renew with 10 continuing education units and the recertification fee.' },
      { q: 'Is the NHA CPhT worth it?', a: 'It is worth it for pharmacy tech employment; many employers accept it, and its multiple eligibility paths make it accessible without a formal program.' },
      { q: 'What if I fail?', a: 'You may retake after a 30-day wait by paying the full $125 fee again; NHA does not cap attempts but may require extra documentation after three failures.' }
    ],
    summaryPoints: [
      '120 questions, 2h10m; $125',
      'Covers law, meds, dispensing, safety',
      'Multiple eligibility paths (training or experience)',
      'Renews every 2 years with 10 CEUs'
    ],
    relatedSlugs: ['ptcb-cpht', 'ptcb-cpht-adv', 'nha-ccma', 'nha-cmaa'],
    sourceUrl: 'https://www.nhanow.com/certification',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ptcb-cpht-adv',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs stacked advanced designation for technicians who complete specialty certificates plus experience.',
    description: 'The Advanced Certified Pharmacy Technician (CPhT-Adv) is not a single exam. It is an earned designation for active PTCB CPhTs who complete at least four PTCB certificate programs, or three certificate programs plus the CSPT specialty, and have three years of pharmacy technician work experience. Employers use CPhT-Adv to identify technicians with validated advanced skills across billing, compounding, immunization, medication safety, and medication therapy management. The credential is maintained through ordinary CPhT recertification every three years.',
    quickAnswer: {
      summary: 'CPhT-Adv is earned, not tested in one sitting. Active PTCB CPhTs qualify by completing four PTCB certificate programs (or three plus CSPT) and logging three years of experience. There is no separate application or exam fee; the designation is kept current through CPhT renewal every three years.',
      advantages: [
        'Signals validated advanced competency beyond the entry-level CPhT to employers',
        'Built from stackable certificates (billing, compounding, immunization, MTM, and more)',
        'No separate exam fee; cost is only the underlying certificates and CPhT renewal',
        'Differentiates candidates for lead, specialty, and management technician roles',
        'Counts toward career ladders in hospital, community, and health-system pharmacies'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT certification', 'Earn four PTCB certificate programs (or three plus CSPT)', 'Document three years of pharmacy technician experience', 'Confirm eligibility in your PTCB account', 'Claim the CPhT-Adv designation', 'Maintain through CPhT recertification every three years'],
    prerequisites: 'Active PTCB CPhT certification, completion of four PTCB certificate programs (or three plus CSPT), and three years of pharmacy technician work experience within the eligibility window.',
    examMeta: {
      questions: 'None - earned via certificate completion and experience',
      time: 'N/A',
      pass: 'N/A - designation earned, not scored',
      fee: '$0 (no separate exam fee)',
      format: 'Eligibility review of certificates plus experience',
      admin: 'PTCB account'
    },
    topics: [
      { name: 'Billing and Reimbursement' },
      { name: 'Medication History' },
      { name: 'Sterile Compounding (CSPT)' },
      { name: 'Medication Therapy Management' },
      { name: 'Immunization Administration' }
    ],
    examEssentials: [
      ['Eligibility', 'Active CPhT + 4 certificates (or 3 + CSPT) + 3 years experience'],
      ['Exam fee', 'None - no separate charge'],
      ['Delivery', 'Earn via PTCB account eligibility review'],
      ['Validity', 'Maintained through CPhT renewal every 3 years'],
      ['Stackable', 'Each certificate also stands alone on the CPhT ladder']
    ],
    timeline: [
      { stage: 'Earn core certificates', duration: 'Several months' },
      { stage: 'Accumulate 3 years experience', duration: 'Ongoing' },
      { stage: 'Claim designation', duration: '1 day' },
      { stage: 'Maintain', duration: 'Every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'Four certificate exams ($89 each)', fee: '$356' },
        { item: 'CPhT renewal (every 3 yrs)', fee: '$55' }
      ],
      total: '$356+ (underlying certificates only)',
      footnote: 'CPhT-Adv carries no application or exam fee of its own; total cost is the sum of the underlying certificates and CPhT maintenance.'
    },
    difficulty: 'N/A',
    audience: 'Experienced CPhTs pursuing advanced, specialty technician roles',
    time: '3 years experience plus certificate completion',
    cost: '$356+',
    faqs: [
      { q: 'Is there a CPhT-Adv exam?', a: 'No. CPhT-Adv is an earned designation, not a single test. You qualify by holding an active CPhT and completing four PTCB certificate programs (or three plus the CSPT) along with three years of experience.' },
      { q: 'How long does it take to earn?', a: 'It depends on how many certificates you still need and your experience clock. Most technicians reach it within a few years of active practice while stacking certificates.' },
      { q: 'Does CPhT-Adv expire?', a: 'It is maintained through your CPhT recertification every three years; there is no separate renewal step or fee for the advanced designation.' },
      { q: 'Is CPhT-Adv worth it?', a: 'For technicians targeting lead, specialty, or management roles it is worth it: it gives employers a single verified signal of advanced, stackable skills without another exam fee.' },
      { q: 'What if I only have some certificates?', a: 'Each certificate still stands alone and builds toward CPhT-Adv. You can claim the designation as soon as you meet the four-certificate (or three-plus-CSPT) and experience requirements.' }
    ],
    summaryPoints: [
      'Earned designation, not a single exam',
      'Active CPhT + 4 certificates (or 3 + CSPT) + 3 years',
      'No separate exam fee; maintained via CPhT renewal',
      'Stacks billable, compounding, and safety skills'
    ],
    relatedSlugs: ['ptcb-cpht', 'ptcb-cspt', 'ptcb-mtm', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/get-certified/advanced-cpht',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-billing',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for technicians who manage claims, reimbursement, and prior authorization.',
    description: 'The PTCB Billing and Reimbursement Certificate validates a technicians ability to process pharmacy and medical claims, navigate payer systems, and resolve rejections. It covers insurance programs, third-party adjudication, prior authorization, and audit readiness. The certificate is assessment-based: candidates must hold an active CPhT and pass a 75-question exam. It counts toward the CPhT-Adv ladder and signals advanced revenue-cycle competence to employers in retail, hospital, and specialty pharmacy.',
    quickAnswer: {
      summary: 'The Billing and Reimbursement Certificate Exam is a computer-based test with 75 multiple-choice questions and a 90-minute seat time (5-minute tutorial, 80-minute exam, 5-minute survey). The fee is $89. A scaled score of 300 (on a 0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Demonstrates revenue-cycle and claims expertise employers value',
        'Reduces claim rejections and prior-authorization delays in practice',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Stacks with other PTCB certificates for career advancement'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized education program (optional but recommended)', 'Apply and pay $89 in your PTCB account', 'Schedule at Pearson VUE or online proctoring', 'Pass at scaled 300', 'Use it toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Billing and Reimbursement education program is recommended but not strictly mandatory if you meet the CPhT prerequisite.',
    examMeta: {
      questions: '75 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Programs and Eligibility', weight: '26.67%' },
      { name: 'Pharmacy Claims Processing and Adjudication', weight: '36.67%' },
      { name: 'Prior Authorization', weight: '18.33%' },
      { name: 'Medical Claims Processing', weight: '8.33%' },
      { name: 'Audits and Compliance', weight: '10.00%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89; no formal limit stated'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers the single exam attempt; the certificate does not require renewal. Active CPhT status must be maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs working claims, reimbursement, or prior authorization',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Billing and Reimbursement exam?', a: 'It is moderately difficult, focused on claims adjudication and payer rules rather than clinical pharmacology. CPhTs with billing exposure pass comfortably with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB content outline and a recognized program. Prior billing experience shortens prep.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal; you keep the credential as long as your underlying CPhT stays active.' },
      { q: 'Is it worth it?', a: 'For technicians in claims, revenue cycle, or specialty pharmacy it is worth it: it builds toward CPhT-Adv and reduces costly claim errors. The $89 cost is low.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '75 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on claims, reimbursement, prior auth'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-med-history', 'ptcb-regulatory'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/billing-and-reimbursement',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-cpht',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'The core pharmacy technician credential pharmacists trust nationwide.',
    description: 'The Certified Pharmacy Technician (CPhT) is PTCBs flagship credential and the most recognized technician certification in U.S. pharmacies. The Pharmacy Technician Certification Exam (PTCE) covers medications, federal requirements, patient safety, and order entry and processing. Employers across retail, hospital, and mail-order settings prefer or require it, and several states tie technician registration to a national cert. Candidates qualify through a PTCB-Recognized education program or 500 hours of work experience.',
    quickAnswer: {
      summary: 'The PTCE is a 90-question, 2-hour computer-based exam (80 scored, 10 unscored) delivered at Pearson VUE centers or online. The fee is $129. You need a scaled score of 1,400 on a 1,000-1,600 scale to pass, and the credential is valid for three years with 20 continuing education hours.',
      advantages: [
        'Most widely accepted pharmacy technician credential in the U.S.',
        'Meets or supports state technician registration in many states',
        'Gateway to PTCB certificates and the CPhT-Adv ladder',
        'Preferred or required by major retail and hospital employers',
        'Two eligibility paths (education program or 500 work hours)'
      ]
    },
    roadmap: ['Choose the education or experience path', 'Create a PTCB account and apply', 'Pay the $129 fee', 'Receive your one-year candidacy window', 'Schedule at Pearson VUE or online', 'Pass at scaled 1,400 and renew every 3 years'],
    prerequisites: 'Complete a PTCB-Recognized education/training program (or within 60 days of completing one), OR have at least 500 hours of pharmacy technician work experience. A high school diploma or equivalent and full disclosure of any criminal or licensure actions are required.',
    examMeta: {
      questions: '90 (80 scored, 10 unscored)',
      time: '2 hours',
      pass: 'Scaled 1,400 of 1,000-1,600',
      fee: '$129',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Medications', weight: '40%' },
      { name: 'Patient Safety and Quality Assurance', weight: '26.25%' },
      { name: 'Order Entry and Processing', weight: '21.25%' },
      { name: 'Federal Requirements', weight: '12.5%' }
    ],
    examEssentials: [
      ['Eligibility', 'Recognized program or 500 work hours'],
      ['Delivery', 'Pearson VUE or online proctoring'],
      ['Retake', 'Repay $129; 60-day wait, up to 4 attempts'],
      ['Validity', '3 years; 20 CE hours to renew'],
      ['Scale', 'Pass at scaled 1,400 (1,000-1,600)']
    ],
    timeline: [
      { stage: 'Confirm eligibility', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '4-8 weeks' },
      { stage: 'Test', duration: '2 hours' },
      { stage: 'Maintain', duration: 'Every 3 years' }
    ],
    costBreakdown: {
      items: [
        { item: 'PTCE exam fee', fee: '$129' },
        { item: 'Retake (if needed)', fee: '$129' },
        { item: 'PTCB practice bank (optional)', fee: 'Varies' },
        { item: 'Renewal (every 3 yrs)', fee: '$55' }
      ],
      total: '$129-$184 first attempt',
      footnote: 'Up to four attempts are allowed with a 60-day wait between them; the $129 fee applies each time. Renewal requires 20 CE hours (1 law, 1 patient safety).'
    },
    difficulty: 'Moderate',
    audience: 'Aspiring and current pharmacy technicians',
    time: '4-8 weeks',
    cost: '$129+',
    faqs: [
      { q: 'How hard is the PTCB CPhT?', a: 'It is moderately difficult. The four domain areas are broad but the exam is criterion-referenced, so a structured 4-8 week study plan passes at strong rates.' },
      { q: 'How long should I study?', a: 'Plan 4-8 weeks, emphasizing medications (40%) and patient safety (26%). Candidates with work experience often need less time.' },
      { q: 'Does the CPhT expire?', a: 'Yes, every three years. Renew with 20 CE hours including one hour of pharmacy law and one of patient safety, plus the $55 renewal fee.' },
      { q: 'Is the CPhT worth it?', a: 'For pharmacy employment it is worth it: many employers require it and several states link registration to a national cert. It also unlocks PTCB specialty certificates.' },
      { q: 'What if I fail?', a: 'You may retake after a 60-day wait by paying $129 again, up to four total attempts. Use your score report to target weak domains.' }
    ],
    summaryPoints: [
      '90 questions, 2 hours; $129',
      'Pass scaled 1,400 of 1,000-1,600',
      'Two paths: education program or 500 hours',
      'Renews every 3 years with 20 CE hours'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cspt', 'nha-cpht', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/get-certified/apply-for-cpht',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-cspt',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs sterile-compounding specialty for technicians who prepare CSPs.',
    description: 'The Certified Compounded Sterile Preparation Technician (CSPT) validates expertise in compounded sterile preparations under USP <797> and related standards. It is a specialty certification for active CPhTs working in hospitals, home infusion, and compounding facilities. Candidates qualify through a recognized sterile-compounding program plus one year of experience, or three years of continuous CSP experience. The CSPT Exam has 75 questions (60 scored, 15 unscored) over two hours.',
    quickAnswer: {
      summary: 'The CSPT Exam is a computer-based test with 75 multiple-choice questions (60 scored, 15 unscored) and a two-hour seat time. Total fees are $199 (a $50 non-refundable application fee plus a $149 exam fee) within a one-year candidacy window. You must be an active CPhT and meet the sterile-compounding experience pathway; results are pass/fail with unofficial scores on screen.',
      advantages: [
        'Recognized specialty for hazardous and sterile compounding roles',
        'Required or preferred in hospital and infusion pharmacy settings',
        'Demonstrates USP <797>/<800> knowledge to employers',
        'Counts toward the CPhT-Adv advanced designation',
        'Validated against a rigorous published content outline'
      ]
    },
    roadmap: ['Hold an active CPhT', 'Meet the education-plus-experience or 3-year experience pathway', 'Pay $199 total and open a one-year window', 'Submit the competency attestation', 'Schedule at Pearson VUE or online within 90 days', 'Pass and maintain with CPhT renewal'],
    prerequisites: 'Active PTCB CPhT plus either a PTCB-Recognized sterile-compounding program and one year of continuous CSP experience, or three years of continuous CSP experience within the last eight years. A competency attestation from a supervisor is required.',
    examMeta: {
      questions: '75 (60 scored, 15 unscored)',
      time: '2 hours',
      pass: 'Computerized pass/fail (unofficial on screen)',
      fee: '$199 total ($50 application + $149 exam)',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Principles of Sterile Compounding' },
      { name: 'Infection Control and Aseptic Technique' },
      { name: 'Facilities, Engineering, and Environmental Monitoring' },
      { name: 'Hazardous Sterile Compounding (USP <800>)' },
      { name: 'Quality Assurance and Documentation' }
    ],
    examEssentials: [
      ['Eligibility', 'Active CPhT + CSP experience pathway'],
      ['Delivery', 'Pearson VUE or online proctoring'],
      ['Retake', 'Repay $149 exam fee within candidacy window'],
      ['Validity', 'Maintained with CPhT renewal + attestation'],
      ['Candidacy', 'One-year window; schedule within 90 days']
    ],
    timeline: [
      { stage: 'Confirm CPhT and experience', duration: '1 day' },
      { stage: 'Apply and pay $199', duration: '1 day' },
      { stage: 'Study', duration: '6-10 weeks' },
      { stage: 'Test', duration: '2 hours' }
    ],
    costBreakdown: {
      items: [
        { item: 'Application fee (non-refundable)', fee: '$50' },
        { item: 'Exam fee', fee: '$149' },
        { item: 'Retake exam fee', fee: '$149' },
        { item: 'Renewal (with CPhT, every 3 yrs)', fee: '$55' }
      ],
      total: '$199 first attempt',
      footnote: 'Total first-attempt cost is $199. A $20 authorization-extension fee applies if you need to extend the candidacy window beyond one year.'
    },
    difficulty: 'Challenging',
    audience: 'CPhTs in sterile compounding and infusion pharmacies',
    time: '6-10 weeks',
    cost: '$199',
    faqs: [
      { q: 'How hard is the CSPT?', a: 'It is challenging because it assumes hands-on sterile-compounding knowledge of USP <797> and <800>. Technicians actively doing CSPs and using the exam outline do best.' },
      { q: 'How long should I study?', a: 'Plan 6-10 weeks reviewing aseptic technique, engineering controls, and hazardous compounding, plus a recognized prep program if your experience is limited.' },
      { q: 'Does the CSPT expire?', a: 'It is maintained through your CPhT renewal every three years plus a competency attestation. There is no separate CSPT renewal cycle.' },
      { q: 'Is the CSPT worth it?', a: 'For hospital, infusion, and hazardous-compounding roles it is worth it; many employers require or prefer it and it counts toward CPhT-Adv.' },
      { q: 'What if I fail?', a: 'You repay the $149 exam fee and retest within your one-year candidacy window. A supervisor competency attestation is still required.' }
    ],
    summaryPoints: [
      '75 questions (60 scored), 2 hours; $199 total',
      'Active CPhT + sterile-compounding experience required',
      'Validated against USP <797>/<800>',
      'Counts toward CPhT-Adv; maintained with CPhT'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-hazardous-drug', 'ptcb-nonsterile-compounding'],
    sourceUrl: 'https://www.ptcb.org/credentials/certification/certified-compounded-sterile-preparation-technician-cspt/',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-controlled-substances',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for technicians handling controlled-substance controls and records.',
    description: 'The PTCB Controlled Substances Certificate focuses on DEA schedules, receiving and dispensing controls, recordkeeping, and diversion prevention. It is an assessment-based certificate for active CPhTs who support controlled-substance workflows in any pharmacy setting. The exam is computer-based and requires a scaled 300 to pass. It counts toward CPhT-Adv and signals strong compliance knowledge to employers managing high-risk inventories.',
    quickAnswer: {
      summary: 'The Controlled Substances Certificate Exam is a computer-based test of about 65 multiple-choice questions with a 90-minute seat time (5-minute tutorial, 80-minute exam, 5-minute survey). The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. An active PTCB CPhT is required.',
      advantages: [
        'Builds verified controlled-substance compliance expertise',
        'Supports diversion prevention and clean audits',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost with no renewal requirement',
        'Relevant across retail, hospital, and closed-door pharmacies'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Review DEA schedules and recordkeeping rules', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Controlled Substances education program is recommended to prepare.',
    examMeta: {
      questions: 'About 65 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Controlled Substance Schedules and Laws' },
      { name: 'Receiving, Storage, and Dispensing' },
      { name: 'Recordkeeping and Reporting' },
      { name: 'Diversion Prevention and Audits' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs handling controlled substances and compliance',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Controlled Substances exam?', a: 'It is moderately difficult, centered on DEA schedules, recordkeeping, and diversion controls. CPhTs working with controls pass with a few weeks of focused review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks, emphasizing schedules, receiving/dispensing rules, and audit readiness.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in controlled-substance-heavy settings it is worth it: it builds toward CPhT-Adv and strengthens audit and diversion-prevention skills for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      'About 65 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on DEA schedules and diversion control'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-regulatory', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/controlled-substances',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ptcb-hazardous-drug',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for safe handling of hazardous drugs under USP <800>.',
    description: 'The PTCB Hazardous Drug Management Certificate covers USP <800> requirements, engineering controls, PPE, transport, and disposal for hazardous drugs. It is an assessment-based certificate for active CPhTs who handle antineoplastics and other hazardous medications. The 55-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers in oncology, hospital, and infusion pharmacies value the compliance signal.',
    quickAnswer: {
      summary: 'The Hazardous Drug Management Certificate Exam is a computer-based test with 55 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates USP <800> hazardous-drug knowledge',
        'Critical for oncology, infusion, and hospital pharmacies',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Strengthens worker-safety and compliance posture'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized hazardous-drug program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Use toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Hazardous Drug Management education program is recommended.',
    examMeta: {
      questions: '55 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Engineering Controls', weight: '22%' },
      { name: 'Facility Cleaning', weight: '16%' },
      { name: 'Personal Protective Equipment', weight: '13%' },
      { name: 'Transport and Receiving', weight: '11%' },
      { name: 'Dispensing Final Dosage Forms', weight: '16%' },
      { name: 'Administrative', weight: '22%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs handling hazardous drugs and USP <800> compliance',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Hazardous Drug exam?', a: 'It is moderately difficult, focused on USP <800> engineering controls, PPE, and disposal. CPhTs in oncology or infusion settings pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program; hands-on hazardous-drug experience helps.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For hazardous-drug handling roles it is worth it: it verifies USP <800> knowledge for employers and counts toward CPhT-Adv at a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '55 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Centered on USP <800> hazardous-drug handling'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cspt', 'ptcb-nonsterile-compounding', 'ptcb-regulatory'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/hazardous-drug-management',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-immunization',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for technicians who support immunization delivery.',
    description: 'The PTCB Immunization Administration Certificate validates knowledge of vaccine schedules, safe administration, storage, and adverse-reaction management. It is an assessment-based certificate for active CPhTs supporting immunization services in community and health-system pharmacies. The 60-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. It signals to employers that a technician can support high-volume vaccine workflows safely.',
    quickAnswer: {
      summary: 'The Immunization Administration Certificate Exam is a computer-based test with 60 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates vaccine administration and storage knowledge',
        'Supports high-volume immunization workflows',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Valuable in community and health-system pharmacies'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized immunization program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Immunization Administration education program is required to apply.',
    examMeta: {
      questions: '60 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Concepts and Terminology of Vaccine Administration', weight: '30%' },
      { name: 'Vaccine Safety and Administration', weight: '50%' },
      { name: 'Documentation, Product Handling, and Adverse Reactions', weight: '20%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT + recognized program'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (required)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs supporting immunization services',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Immunization exam?', a: 'It is moderately difficult, emphasizing administration safety, storage, and adverse reactions. CPhTs in immunization-active pharmacies pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and the required recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in immunization-forward pharmacies it is worth it: it verifies administration knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '60 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on vaccine safety and administration'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-med-history', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/immunization-administration',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-med-history',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for accurate medication history and reconciliation.',
    description: 'The PTCB Medication History Certificate validates a technicians ability to collect and reconcile the best possible medication history, identify discrepancies, and support medication reconciliation at transitions of care. It is an assessment-based certificate for active CPhTs working in hospitals, clinics, and health-system pharmacies. The exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers value it for reducing medication errors at admission and discharge.',
    quickAnswer: {
      summary: 'The Medication History Certificate Exam is a computer-based test of about 65 multiple-choice questions with a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates medication reconciliation and history-taking skills',
        'Reduces admission and discharge medication errors',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Valuable in hospital and transitions-of-care settings'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized medication history program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Medication History education program is recommended to prepare.',
    examMeta: {
      questions: 'About 65 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Patient Identification and History Collection' },
      { name: 'Best Possible Medication History (BPMH)' },
      { name: 'Medication Reconciliation' },
      { name: 'Adherence and Discrepancies' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs in medication reconciliation and transitions of care',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Medication History exam?', a: 'It is moderately difficult, focused on reconciliation and history-collection concepts. CPhTs in hospital or clinic settings pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in reconciliation roles it is worth it: it verifies error-reduction skills and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      'About 65 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on reconciliation and BPMH'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-mtm', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/medication-history',
    reviewed: '2026-08',
    confidence: 'medium'
  },
  {
    slug: 'ptcb-mtm',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for medication therapy management support.',
    description: 'The PTCB Medication Therapy Management (MTM) Certificate validates a technicians knowledge of Medicare Part D MTM core elements, comprehensive medication reviews, and documentation. It is an assessment-based certificate for active CPhTs who support MTM services. The 65-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers in MTM-active pharmacies value the credential for improving adherence and identifying drug-related problems.',
    quickAnswer: {
      summary: 'The MTM Certificate Exam is a computer-based test with 65 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates MTM core elements and CMR documentation',
        'Supports Medicare Part D and adherence programs',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Valuable in community and health-system MTM roles'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized MTM program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Use toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Medication Therapy Management education program is required to apply.',
    examMeta: {
      questions: '65 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Medications and Medical Concepts', weight: '40%' },
      { name: 'Patient Safety and Quality Assurance Strategies', weight: '36%' },
      { name: 'MTM Administration and Management', weight: '24%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT + recognized program'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (required)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs supporting MTM and adherence services',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the MTM exam?', a: 'It is moderately difficult, emphasizing MTM core elements, Beers Criteria, and documentation. CPhTs in MTM roles pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and the required recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in MTM-active pharmacies it is worth it: it verifies Medicare Part D MTM knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '65 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on MTM core elements and CMRs'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-med-history', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/medication-therapy-management',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-nonsterile-compounding',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for nonsterile dosage-form compounding.',
    description: 'The PTCB Nonsterile Compounding Certificate validates knowledge of nonsterile dosage forms, equipment, and USP <795> processes. It is an assessment-based certificate for active CPhTs who compound nonsterile preparations. The 70-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers in community and hospital pharmacies value it for safe, accurate compounding.',
    quickAnswer: {
      summary: 'The Nonsterile Compounding Certificate Exam is a computer-based test with 70 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates USP <795> nonsterile compounding knowledge',
        'Supports accurate, safe dosage-form preparation',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Relevant in community and hospital pharmacies'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized nonsterile compounding program (or 12 months experience)', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Nonsterile Compounding education program, or 12 months of full-time compounding experience with a supervisor attestation, is required to apply.',
    examMeta: {
      questions: '70 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Regulations, Standards, and Guidelines', weight: '28%' },
      { name: 'Nonsterile Compounding Processes', weight: '72%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active CPhT + program or 12 months experience'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs performing nonsterile compounding',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Nonsterile Compounding exam?', a: 'It is moderately difficult, weighted heavily toward compounding processes and USP <795>. CPhTs who compound regularly pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program; hands-on compounding experience helps.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For compounding technicians it is worth it: it verifies USP <795> knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '70 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Centered on USP <795> nonsterile processes'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cspt', 'ptcb-hazardous-drug', 'ptcb-cpht'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/nonsterile-compounding',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-poct',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for point-of-care testing in the pharmacy.',
    description: 'The PTCB Point-of-Care Testing (POCT) Certificate validates a technicians ability to perform and support CLIA-waived tests in the pharmacy, including specimen collection, result reading, and documentation. It is an assessment-based certificate for active CPhTs supporting community testing services. The 60-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers expanding pharmacy-based testing value the credential.',
    quickAnswer: {
      summary: 'The Point-of-Care Testing Certificate Exam is a computer-based test with 60 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates CLIA-waived point-of-care testing skills',
        'Supports pharmacy-based testing services',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Relevant as pharmacies expand testing volume'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized POCT program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Point-of-Care Testing education program is required to apply.',
    examMeta: {
      questions: '60 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Safety and Precautions', weight: '16%' },
      { name: 'Diseases and Specimens', weight: '34%' },
      { name: 'CLIA-waived Tests', weight: '30%' },
      { name: 'Test Results, QC, and Recording', weight: '20%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active CPhT + recognized POCT program'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (required)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs supporting point-of-care testing',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the POCT exam?', a: 'It is moderately difficult, focused on CLIA-waived tests, specimen handling, and QC. CPhTs in testing-active pharmacies pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and the required recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in testing-forward pharmacies it is worth it: it verifies POCT knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '60 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on CLIA-waived pharmacy testing'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-immunization', 'ptcb-med-history'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/point-of-care-testing',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-regulatory',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for pharmacy regulatory and compliance knowledge.',
    description: 'The PTCB Regulatory Compliance Certificate covers federal and state pharmacy law, DEA requirements, USP standards, and safe compounding practices. It is an assessment-based certificate for active CPhTs in compliance, quality, or supervisory roles. The 70-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers value it for audit readiness and reduced regulatory risk.',
    quickAnswer: {
      summary: 'The Regulatory Compliance Certificate Exam is a computer-based test with 70 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates federal and state pharmacy law knowledge',
        'Strengthens audit readiness and compliance',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Valuable in quality, compliance, and supervisory roles'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized regulatory program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Regulatory Compliance education program is recommended to prepare.',
    examMeta: {
      questions: '70 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Federal and State Pharmacy Law' },
      { name: 'DEA and Controlled Substance Requirements' },
      { name: 'USP Standards and Safe Compounding' },
      { name: 'Quality and Compliance Programs' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs in compliance, quality, and supervision',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Regulatory Compliance exam?', a: 'It is moderately difficult, centered on federal/state law, DEA rules, and USP standards. CPhTs in compliance roles pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For quality and compliance technicians it is worth it: it verifies regulatory knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '70 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on law, DEA, and USP compliance'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-controlled-substances', 'ptcb-hazardous-drug', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/regulatory-compliance-certificate',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-supply-chain',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for supply chain and inventory management.',
    description: 'The PTCB Supply Chain and Inventory Management Certificate covers laws, suppliers, inventory control, and DSCSA track-and-trace requirements. It is an assessment-based certificate for active CPhTs in purchasing, inventory, and operations. The 75-question exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers in health-system and retail pharmacies value it for reducing shortages and diversion risk.',
    quickAnswer: {
      summary: 'The Supply Chain and Inventory Management Certificate Exam is a computer-based test with 75 multiple-choice questions and a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates DSCSA and inventory management knowledge',
        'Reduces shortages, waste, and diversion risk',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Valuable in purchasing and operations roles'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized supply chain program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Supply Chain and Inventory Management education program is recommended to prepare.',
    examMeta: {
      questions: '75 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Laws, Regulations, and Guidelines', weight: '37%' },
      { name: 'Inventory Management, Documentation, and Recordkeeping', weight: '35%' },
      { name: 'Types of Suppliers and Supply Chain Entities', weight: '28%' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs in purchasing, inventory, and operations',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Supply Chain exam?', a: 'It is moderately difficult, emphasizing DSCSA, suppliers, and inventory systems. CPhTs in operations roles pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For inventory and purchasing technicians it is worth it: it verifies DSCSA and supply-chain knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      '75 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on DSCSA and inventory control'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-billing', 'ptcb-regulatory'],
    sourceUrl: 'https://www.ptcb.org/credentials/supply-chain-and-inventory-management-certificate',
    reviewed: '2026-08',
    confidence: 'high'
  },
  {
    slug: 'ptcb-tpv',
    body: 'Pharmacy Technician Certification Board (PTCB)',
    tagline: 'PTCBs certificate for telepharmacy support services.',
    description: 'The PTCB Telepharmacy Certificate validates a technicians knowledge of remote pharmacy workflows, verification support, and technology used when a pharmacist supervises dispensing from a distance. It is an assessment-based certificate for active CPhTs in telepharmacy-enabled settings. The exam requires a scaled 300 to pass and counts toward CPhT-Adv. Employers operating remote or satellite sites value the credential.',
    quickAnswer: {
      summary: 'The Telepharmacy Certificate Exam is a computer-based test of about 60 multiple-choice questions with a 90-minute seat time. The fee is $89. A scaled score of 300 (0-400 scale) is required to pass, and the certificate does not expire. You must hold an active PTCB CPhT to sit it.',
      advantages: [
        'Validates remote-dispensing and verification support skills',
        'Supports telepharmacy-enabled and satellite sites',
        'Counts toward the CPhT-Adv advanced designation',
        'Low $89 cost and no renewal requirement',
        'Relevant as telepharmacy expands across states'
      ]
    },
    roadmap: ['Hold an active PTCB CPhT', 'Complete a PTCB-Recognized telepharmacy program', 'Apply and pay $89', 'Schedule at Pearson VUE or online', 'Pass at scaled 300', 'Apply toward CPhT-Adv'],
    prerequisites: 'Active PTCB CPhT certification is required. A PTCB-Recognized Telepharmacy education program is recommended to prepare.',
    examMeta: {
      questions: 'About 60 multiple-choice',
      time: '90 minutes (5-min tutorial, 80-min exam, 5-min survey)',
      pass: 'Scaled 300 of 0-400',
      fee: '$89',
      format: 'Computer-based multiple choice',
      admin: 'Online proctored or 1,400+ Pearson VUE test centers'
    },
    topics: [
      { name: 'Telepharmacy Models and Technology' },
      { name: 'Remote Verification and Workflow' },
      { name: 'Documentation and Compliance' }
    ],
    examEssentials: [
      ['Eligibility', 'Active PTCB CPhT required'],
      ['Delivery', 'Online proctored or Pearson VUE'],
      ['Retake', 'Repay $89 to retest'],
      ['Validity', 'Does not require renewal'],
      ['Scale', 'Pass at scaled 300 (0-400 range)']
    ],
    timeline: [
      { stage: 'Confirm CPhT active', duration: '1 day' },
      { stage: 'Apply and pay', duration: '1 day' },
      { stage: 'Study', duration: '2-4 weeks' },
      { stage: 'Test', duration: '90 minutes' }
    ],
    costBreakdown: {
      items: [
        { item: 'Certificate exam fee', fee: '$89' },
        { item: 'PTCB-Recognized prep (optional)', fee: 'Varies' }
      ],
      total: '$89',
      footnote: 'The $89 fee covers one attempt; the certificate does not require renewal. Active CPhT status is maintained separately.'
    },
    difficulty: 'Moderate',
    audience: 'CPhTs in telepharmacy-enabled settings',
    time: '2-4 weeks',
    cost: '$89',
    faqs: [
      { q: 'How hard is the Telepharmacy exam?', a: 'It is moderately difficult, covering remote workflow, verification, and compliance. CPhTs in telepharmacy sites pass with a few weeks of review.' },
      { q: 'How long should I study?', a: 'Most candidates study 2-4 weeks using the PTCB outline and a recognized program.' },
      { q: 'Does the certificate expire?', a: 'No. PTCB certificate programs do not require renewal as long as your underlying CPhT remains active.' },
      { q: 'Is it worth it?', a: 'For technicians in remote or satellite sites it is worth it: it verifies telepharmacy knowledge and counts toward CPhT-Adv for a low $89 cost.' },
      { q: 'What if I fail?', a: 'You reapply and repay the $89 fee. PTCB does not publish a hard attempt limit for certificate exams.' }
    ],
    summaryPoints: [
      'About 60 questions, 90 minutes; $89',
      'Pass scaled 300 of 0-400; CPhT required',
      'No renewal; counts toward CPhT-Adv',
      'Focuses on remote verification and workflow'
    ],
    relatedSlugs: ['ptcb-cpht-adv', 'ptcb-cpht', 'ptcb-regulatory', 'ptcb-billing'],
    sourceUrl: 'https://www.ptcb.org/credentials/certificate/telepharmacy',
    reviewed: '2026-08',
    confidence: 'medium'
  }
];

export default { programs, exams };
