export default {
  key: "security-guard",
  compiledOn: "2026-10-20",
  states: {
    OR: {
      agency: "Oregon DPSST Private Security Program",
      agencyUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
      exam: {
        vendor: "DPSST-approved unarmed instructor (state board)",
        vendorUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
        parts: [
          { name: "Unarmed basic written examination and assessments", questions: "The department does not publish a question count.", time: "Administered within the 14-hour basic course", pass: "85%" }
        ],
        fee: "Included in course tuition paid to the instructor; no separate state exam fee",
        practical: null,
        sourceUrl: "https://content.govdelivery.com/attachments/ORDPSST/2025/04/29/file_attachments/3245499/Instructor%20Bulletin%202025.pdf",
        sourceNote: "DPSST Instructor Bulletin 2025-1 describes the 85% pass standard and two-tier remediation"
      },
      education: {
        hours: "14",
        breakdown: "DPSST-approved unarmed basic course covering regulatory law, criminal and civil law, patrol procedures, emergency response, and report writing; the 14 hours include the exam and assessments.",
        onlineAllowed: "Training is delivered by DPSST-certified instructors in classroom or approved instructor-led online formats.",
        apprenticeship: null,
        sourceUrl: "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf"
      },
      experience: "No prior experience required for unarmed certification.",
      eligibility: {
        minAge: 18,
        citizenship: null,
        education: "High school diploma, GED certificate, or a two-year or four-year post-secondary degree from an accredited institution",
        other: "Must meet DPSST moral fitness standards, determined through a criminal records check and department investigation."
      },
      background: {
        method: "Fingerprints submitted to DPSST by ink, LiveScan, or electronic fingerprinting through Fieldprint",
        fee: "$45 background check fee through September 30, 2026; $48 on or after October 1, 2026, plus vendor fingerprint charges",
        disqualifiers: "Mandatory denial for anyone required to register as a sex offender or convicted of certain crimes listed in OAR 259-060-0300 to 259-060-0320; discretionary denial for other moral fitness violations.",
        sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      fees: [
        { item: "Unarmed professional certification (2 years)", fee: "$104", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" },
        { item: "Background check fee", fee: "$45 through September 30, 2026; $48 on or after October 1, 2026", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" },
        { item: "Upgrade to armed", fee: "$50", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" },
        { item: "Late fee", fee: "$40", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" },
        { item: "Replacement card", fee: "$27", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" }
      ],
      application: {
        portal: "DPSST paper application packet (Form PS-1)",
        portalUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
        steps: [
          "Complete the 14-hour DPSST-approved unarmed basic course and pass the written exam and assessments with at least 85%.",
          "Obtain Form PS-6 (Training Affidavit) from your instructor; it must reach DPSST within 180 days of the course completion date.",
          "Submit the application packet to DPSST: Form PS-1, Form PS-6, fingerprints, and the nonrefundable fees (no cash or personal checks).",
          "If already hired, an employing licensed manager may issue Form PS-20 (Temporary Work Permit), which you must carry until the permanent certification card arrives.",
          "Renew every two years with Form PS-21, a 4-hour unarmed refresher course and exam, and the renewal fee; renewal may be started up to 180 days before expiration."
        ],
        processingTime: "About one month, varying with application completeness and the background check",
        sourceUrl: "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "4-hour unarmed refresher course and exam (the refresher includes a 50-question closed-book exam with an 85% pass standard)",
        fee: "$104",
        late: "$40 late fee if the renewal packet arrives after expiration; certifications expired more than four years require retaking the full basic course",
        sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$45,500", p25: "$39,680", p75: "$48,420", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=OR" },
      localNuance: "Oregon certifies individuals directly, but an unarmed provider must work under (or become) a DPSST-licensed executive or supervisory manager. The manager-issued PS-20 temporary work permit is valid for 120 days. Armed certification adds a 24-hour basic firearms course plus annual marksmanship qualification and armed refresher training.",
      recentChanges: [
        { year: 2026, change: "DPSST 2-2026 (effective February 1, 2026) amended OAR 259-060-0120 so that failure to comply with the minimum certification standards is grounds to suspend private security professional certifications, including unarmed.", sourceUrl: "https://www.oregon.gov/dpsst/Rules/SOS_Perm_TrackedChnages_OAR259Div60_PS_EmergencySuspension.pdf" },
        { year: 2026, change: "The private security background check fee rises from $45 to $48 for applications submitted on or after October 1, 2026.", sourceUrl: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx" }
      ],
      stateFaqs: [
        { q: "How long does Oregon unarmed security certification last?", a: "The DPSST unarmed private security professional certification is valid for two years. Renewal requires Form PS-21, the 4-hour refresher course and exam, and the $104 renewal fee, submitted before expiration to avoid the $40 late fee." },
        { q: "What score do I need on the Oregon unarmed security exam?", a: "DPSST sets an 85% pass standard on the unarmed basic written examination. Students scoring between 85% and 99% receive individualized remediation from the instructor on missed questions, while scores below 85% require reinstruction and a complete re-examination." },
        { q: "Can I work while my Oregon security application is pending?", a: "Yes, if your employing licensed manager issues Form PS-20 (Temporary Work Permit). You must carry it whenever performing unarmed security duties until the permanent certification card arrives, and a copy must be filed with DPSST." },
        { q: "What education do I need to become an unarmed guard in Oregon?", a: "You need a high school diploma, a GED certificate, or a two- or four-year post-secondary degree from an accredited institution recognized by the Oregon Office of Degree Authorization, plus the 14-hour DPSST basic course." }
      ],
      sources: [
        { label: "Oregon DPSST - Private Security Certification and Licensing Fees", url: "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx", checkedOn: "2026-10" },
        { label: "Oregon DPSST - Unarmed Private Security Professional Training (v2.0)", url: "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf", checkedOn: "2026-10" },
        { label: "DPSST Instructor Bulletin 2025-1 - Training Requirements and Remediation Standards", url: "https://content.govdelivery.com/attachments/ORDPSST/2025/04/29/file_attachments/3245499/Instructor%20Bulletin%202025.pdf", checkedOn: "2026-10" },
        { label: "DPSST Permanent Administrative Order 2-2026 (OAR 259-060 amendments)", url: "https://www.oregon.gov/dpsst/Rules/SOS_Perm_TrackedChnages_OAR259Div60_PS_EmergencySuspension.pdf", checkedOn: "2026-10" },
        { label: "Oregon License Directory - Private Security certification requirements", url: "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/598", checkedOn: "2026-10" }
      ]
    },
    SC: {
      agency: "SLED Private Security Regulatory Services",
      agencyUrl: "https://sled.sc.gov/forms/security/seclicnew.pdf",
      exam: {
        vendor: "SLED-certified private security company training officer (employer)",
        vendorUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-420",
        parts: [
          { name: "Basic training written examination", questions: "Questions drawn from the lesson plan performance objectives used by the certified trainer; the state does not publish a question count.", time: "Administered during the 4-hour basic course", pass: "Scored and documented in the employer's files before duties begin" }
        ],
        fee: "No separate state exam fee",
        practical: "Armed officers must demonstrate safe and competent use of each firearm on a supervised range; unarmed officers have no practical requirement.",
        sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
      },
      education: {
        hours: "4 (plus 2)",
        breakdown: "A SLED-approved basic course of at least 4 hours delivered by a certified company training officer using South Carolina Technical College Private Security Training School material, followed by at least 2 hours of employer-specific orientation covering equipment, post duties, and employer topics.",
        onlineAllowed: "The basic course is delivered by a certified training officer; SLED does not publish an online option for the standard course.",
        apprenticeship: "An alternative basic course approved by SLED, developed by an accredited agency or educational institution, qualifies a holder as a Certified Private Security Officer rather than a Registered Private Security Officer.",
        sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
      },
      experience: "No experience required for officer registration; the employing company's licensee needs two years of supervisory or administrative security experience or sworn law enforcement service.",
      eligibility: {
        minAge: 18,
        citizenship: null,
        education: null,
        other: "Registration flows through a SLED-licensed security company, which files the officer's registration and documents required training; a SLED-approved pre-employment drug test is expected."
      },
      background: {
        method: "Two complete fingerprint card sets filed with SLED by the employing company",
        fee: "Covered within the company licensing process; officer registration fees are separate",
        disqualifiers: "SLED conducts a background investigation under S.C. Code Ann. 40-18-50(C); the agency does not publish a specific disqualifying offense list on its registration forms.",
        sourceUrl: "https://sled.sc.gov/forms/security/seclicnew.pdf"
      },
      fees: [
        { item: "Unarmed private security officer registration (1 year)", fee: "$65", sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-408" },
        { item: "Armed private security officer registration (1 year)", fee: "$110", sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-408" },
        { item: "Replacement registration card", fee: "$20", sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-408" },
        { item: "Contract security business license (1 year)", fee: "$350 plus a $10,000 surety bond posted with SLED", sourceUrl: "https://sled.sc.gov/forms/security/seclicnew.pdf" }
      ],
      application: {
        portal: "SLED Regulatory Services paper filing through the employing licensed company",
        portalUrl: "https://sled.sc.gov/forms/security/seclicnew.pdf",
        steps: [
          "Get hired by a SLED-licensed contract security company; officers cannot register independently.",
          "Complete the 4-hour SLED-approved basic training and the company-designed written exam, plus 2 hours of employer orientation, before working at a client site.",
          "The employer submits the officer registration application and fees to SLED with fingerprint cards and training documentation.",
          "Begin carrying the SLED registration card once issued; training records stay with the employer and the officer.",
          "Renew annually - renewal applications must reach SLED between 30 and 60 days before expiration."
        ],
        processingTime: "The state does not publish a fixed processing time; basic training, the exam, and the registration application must all be complete before duties start at a client site.",
        sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
      },
      renewal: {
        cycle: "1 year",
        ce: "No state continuing education requirement; training documentation must be maintained by the employer and re-established with a new employer",
        fee: "$65 unarmed ($110 armed), paid with the renewal application",
        late: "Failure to file a timely renewal renders the registration invalid; applications are accepted 30-60 days before expiration.",
        sourceUrl: "https://www.law.cornell.edu/regulations/south-carolina/R-73-408"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,460", p25: "$30,130", p75: "$38,220", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=SC" },
      localNuance: "South Carolina registers officers only through SLED-licensed security companies - there is no independent guard registration. A registration card alone is not proof of training; on a change of employer the officer must furnish training records or the new employer must repeat the required training. Rifles and shotguns are prohibited at security posts unless SLED approves the site in writing.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sled.sc.gov/forms/security/seclicnew.pdf" }
      ],
      stateFaqs: [
        { q: "How much does an unarmed security registration cost in South Carolina?", a: "Unarmed private security officer registration costs $65 per year, and the armed registration is $110 per year, per SLED regulation 73-408. A replacement card is $20, and the employing company pays a separate $350 annual business license plus a $10,000 bond." },
        { q: "How long is South Carolina security officer training?", a: "The standard basic course is at least 4 hours taught by a SLED-certified company training officer, ending with a written exam built from the course performance objectives. Officers also complete at least 2 hours of employer-specific orientation before working a client site." },
        { q: "Can I apply for a SLED security registration without a job?", a: "No. Registration is tied to a SLED-licensed security company, which files the application and certifies your training. If you change employers, you must provide your training records to the new employer or repeat the required training." },
        { q: "When must I renew my South Carolina guard registration?", a: "Registrations last one year. Renewal applications must be received by SLED at least 30 days but no more than 60 days before expiration; missing the window invalidates the registration and the officer must stop working under it." }
      ],
      sources: [
        { label: "SLED - New Contract Security Business License requirements", url: "https://sled.sc.gov/forms/security/seclicnew.pdf", checkedOn: "2026-10" },
        { label: "S.C. Code Regs. 73-420 - Training; Private Security Officers", url: "https://www.law.cornell.edu/regulations/south-carolina/R-73-420", checkedOn: "2026-10" },
        { label: "S.C. Code Regs. 73-408 - License and Registration Period; Renewal; Fees", url: "https://www.law.cornell.edu/regulations/south-carolina/R-73-408", checkedOn: "2026-10" },
        { label: "SLED - Renewal Contract Security Business License", url: "https://sled.sc.gov/forms/security/seclicrenewal.pdf", checkedOn: "2026-10" }
      ]
    },
    TN: {
      agency: "Tennessee Department of Commerce and Insurance - Private Protective Services",
      agencyUrl: "https://www.tn.gov/commerce/regulatory/pps.html",
      exam: {
        vendor: "State-certified private protective trainer (state board)",
        vendorUrl: "https://www.tn.gov/commerce/regulatory/pps.html",
        parts: [
          { name: "Unarmed general training examination", questions: "The department does not publish a question count.", time: "Administered at the end of the 4-hour course", pass: "Passing score set by the certified trainer under the department's suggested curriculum" }
        ],
        fee: "Included in course tuition paid to the certified trainer",
        practical: null,
        sourceUrl: "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
      },
      education: {
        hours: "4",
        breakdown: "Four one-hour blocks: orientation and professional conduct, legal powers and limitations of a security guard, emergency procedures, and general duties.",
        onlineAllowed: "Yes - state-certified trainers may deliver the unarmed general course online.",
        apprenticeship: "Recent law enforcement or correctional training completed within a year of applying may qualify for a training exemption under Tenn. Code Ann. 62-35-118(d).",
        sourceUrl: "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
      },
      experience: "No prior experience required for unarmed registration.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or legal resident alien",
        education: null,
        other: "Good moral character required; a felony, or a misdemeanor involving weapons, assault, theft, or controlled substances, must have had its sentence or probation completed at least five years before applying."
      },
      background: {
        method: "Electronic fingerprinting through IdentoGO (ORI TN920120Z) for TBI and FBI checks",
        fee: "TBI and FBI processing fees paid to IdentoGO at scheduling; the department does not publish a fixed combined amount",
        disqualifiers: "Denial within five years of completing a sentence for a felony or listed misdemeanors; misrepresentation is grounds for denial, suspension, or revocation; working unregistered can bring civil penalties up to $2,000 per occurrence.",
        sourceUrl: "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
      },
      fees: [
        { item: "Unarmed application fee", fee: "$75", sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf" },
        { item: "Unarmed registration fee", fee: "$20 (total $95 initial)", sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf" },
        { item: "Unarmed timely renewal", fee: "$70", sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf" },
        { item: "Adding a classification to the card", fee: "$25", sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf" }
      ],
      application: {
        portal: "TDCI CORE",
        portalUrl: "https://core.tn.gov/",
        steps: [
          "Complete the 4-hour general training course with a state-certified trainer and obtain the completion certificate.",
          "Schedule electronic fingerprinting at an IdentoGO location, selecting Department of Commerce and Insurance - Unarmed Guards.",
          "Create a TDCI CORE account, submit the unarmed guard application, and upload the training certificate and identification documents.",
          "Pay the $95 combined fee ($75 application + $20 registration) plus fingerprint processing.",
          "Unarmed applicants may work on unarmed assignments while the application is pending once the complete application and fee are submitted, carrying proof of submission for up to 75 business days."
        ],
        processingTime: "Registration cards commonly arrive in about 2-4 weeks after submission; the department does not publish a fixed processing period.",
        sourceUrl: "https://www.guardtrainingtn.blog/2026/06/how-to-get-unarmed-security-guard-license-tennessee-2026.html"
      },
      renewal: {
        cycle: "2 years",
        ce: "2 hours of refresher training for unarmed guards (armed guards complete 4 hours including firearms range training)",
        fee: "$70 timely renewal",
        late: "$20 per month during the 3-month late renewal period; after three months expired, the guard must reapply as a new applicant.",
        sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$36,000", p25: "$30,850", p75: "$40,620", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=TN" },
      localNuance: "Guards posted where alcohol is consumed on premises must complete de-escalation, safe restraint, first aid, and CPR training within 15 days of assignment (the Dallas Law requirement). Carrying a baton, stun gun, or chemical spray requires 4 hours of certified training per device, and armed guards assigned to schools need 8 hours of active shooter training first.",
      recentChanges: [
        { year: 2024, change: "Tennessee's fee rules for security guard registrations set unarmed application and registration at $75 plus $20, armed at $100 plus $30, timely unarmed renewal at $70, and a $20-per-month late renewal penalty within the three-month grace period.", sourceUrl: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf" }
      ],
      stateFaqs: [
        { q: "How much does a Tennessee unarmed guard registration cost?", a: "The initial unarmed registration costs $95 total - a $75 application fee plus a $20 registration fee - paid through the TDCI CORE portal. Fingerprint processing through IdentoGO is billed separately by the TBI and FBI vendor." },
        { q: "Can I work as an unarmed guard while my Tennessee application is pending?", a: "Yes. Once the complete application and fee are submitted, unarmed applicants may work unarmed assignments carrying proof of submission for up to 75 business days. Armed applicants must wait for the physical registration card." },
        { q: "What is the Dallas Law requirement for Tennessee guards?", a: "Guards assigned to bars, nightclubs, or venues with on-premises alcohol must complete training in de-escalation, safe restraint, first aid, and CPR within 15 days of starting that assignment. Many providers offer this as a separate Dallas Law certification course." },
        { q: "What criminal history disqualifies a Tennessee guard registration?", a: "A felony, or a misdemeanor involving weapons, shoplifting, assault, or drugs, is disqualifying until at least five years have passed since the sentence or probation was completed. The clock runs from the end of the sentence, not the conviction date." }
      ],
      sources: [
        { label: "Tennessee Department of Commerce and Insurance - Private Protective Services", url: "https://www.tn.gov/commerce/regulatory/pps.html", checkedOn: "2026-10" },
        { label: "Tennessee Rules Filing - Security Guard fee schedule (April 2024)", url: "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf", checkedOn: "2026-10" },
        { label: "Tenn. Code Ann. 62-35-117/118 - Registration requirements and training (summary)", url: "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee", checkedOn: "2026-10" },
        { label: "Unarmed security guard registration guide (TDCI CORE process)", url: "https://www.guardtrainingtn.blog/2026/06/how-to-get-unarmed-security-guard-license-tennessee-2026.html", checkedOn: "2026-10" }
      ]
    },
    TX: {
      agency: "Texas Department of Public Safety - Private Security Program (TOPS)",
      agencyUrl: "https://www.dps.texas.gov/section/private-security",
      exam: {
        vendor: "DPS-approved training school or the licensee's manager (state board)",
        vendorUrl: "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf",
        parts: [
          { name: "Level II training course written test", questions: "The department does not publish a question count.", time: "Administered within the Level II course", pass: "Training schools commonly require 75%; DPS does not publish a state minimum score" }
        ],
        fee: "Included in course tuition paid to the training provider",
        practical: null,
        sourceUrl: "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf"
      },
      education: {
        hours: "Level II course (no state minimum hours published)",
        breakdown: "Board-prepared Level II material covering the security officer role, applicable Occupations Code and Administrative Code rules, communication and conflict resolution, use of force, arrest procedures, documentation, and emergencies; a completion certificate (Form PSP-36) must accompany the application.",
        onlineAllowed: "Yes - DPS-approved providers offer the Level II course online with a test.",
        apprenticeship: null,
        sourceUrl: "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf"
      },
      experience: "No prior experience required for a noncommissioned (unarmed) registration.",
      eligibility: {
        minAge: 18,
        citizenship: null,
        education: null,
        other: "Disqualifying under Occupations Code 1702.113 and 37 TAC 35.4: current charges for listed offenses, sex offender registration, dishonorable military discharge, or court-declared incompetence; felony convictions generally bar for 10 years, Class A misdemeanors 5 years, Class B misdemeanors 2 years, with some offenses permanent."
      },
      background: {
        method: "Electronic fingerprinting through IdentoGO, scheduled by email after the TOPS application and payment are submitted",
        fee: "$28.25 FBI fingerprint check, plus state processing charges collected through TOPS",
        disqualifiers: "See Occupations Code 1702.113 disqualifiers above; a pending charge for a listed offense can summarily suspend an existing registration.",
        sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      fees: [
        { item: "Noncommissioned security officer original or renewal", fee: "$37 ($30 registration + $5 pocket card + $2 subscription)", sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf" },
        { item: "FBI fingerprint check", fee: "$28.25", sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf" },
        { item: "Late renewal (0-90 days expired)", fee: "$52", sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf" },
        { item: "Late renewal (90 days or more expired)", fee: "$67", sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf" },
        { item: "Duplicate pocket card", fee: "$17", sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf" }
      ],
      application: {
        portal: "Texas Online Private Security (TOPS)",
        portalUrl: "https://tops.portal.texas.gov/",
        steps: [
          "Complete the Level II training course with a DPS-approved school or the licensee's manager and obtain the PSP-36 training certificate.",
          "Create a TOPS profile, select the noncommissioned security officer application, and complete personal information, training documentation, and criminal history disclosures.",
          "Pay the $37 total through TOPS; DPS emails IdentoGO scheduling instructions within about an hour for electronic fingerprints.",
          "Arrange employer affiliation with a DPS-licensed security company - DPS will not issue the pocket card until you are affiliated, though it will process an unaffiliated application.",
          "Once TOPS status shows ACTIVE, you may work unarmed and carry printed confirmation until the physical pocket card arrives."
        ],
        processingTime: "Paper applications take four to eight weeks; online TOPS applications vary, and the background check is usually the longest step.",
        sourceUrl: "https://onlinetexasltc.com/how-to-get-texas-level-ii-security-license/"
      },
      renewal: {
        cycle: "2 years",
        ce: "None for noncommissioned officers - they are exempt from continuing education under 37 TAC 35.161 (commissioned officers need 6 hours plus firearms proficiency)",
        fee: "$37 (same as original)",
        late: "$15 more within 90 days of expiration ($52 total) and $30 more after 90 days ($67 total); after one year expired, a new original application with new fingerprints is required.",
        sourceUrl: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,980", p25: "$29,290", p75: "$43,630", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=TX" },
      localNuance: "Texas licenses the company, not just the person: a noncommissioned registration must be affiliated with a DPS-licensed security business, and if you stay unaffiliated for two years the registration cannot be renewed. The Level II/III/IV labels are training courses; the actual credentials are the noncommissioned or commissioned (armed) registration and the personal protection officer endorsement.",
      recentChanges: [
        { year: 2024, change: "DPS refreshed the private security training curriculum; certificates issued under the superseded curriculum are no longer accepted for new applications.", sourceUrl: "https://securitydogma.com/?p=1698" }
      ],
      stateFaqs: [
        { q: "What does a Texas noncommissioned (unarmed) security registration cost?", a: "The DPS fee schedule lists $37 total for an original or renewal - $30 registration plus $5 pocket card plus $2 subscription. The FBI fingerprint check adds $28.25, so budget about $65.25 before training tuition." },
        { q: "How many hours is Texas Level II training?", a: "DPS does not publish a minimum hour count for the Level II course. Providers typically run it in about six hours, in person or online, ending with a written test; the completion certificate must be submitted with the TOPS application." },
        { q: "Do Texas unarmed guards need continuing education to renew?", a: "No. Noncommissioned security officers are exempt from continuing education under 37 TAC 35.161. Renewal is the $37 fee through TOPS; only commissioned officers and personal protection officers owe 6 hours of CE and firearms proficiency." },
        { q: "Can I work while my Texas TOPS application is pending?", a: "For unarmed work, Texas allows certain applicants to work while pending, but the employer tracks the application status, fee payment, electronic fingerprints, and documented pre-employment background checks meet DPS working-before-licensure rules. A pending application never authorizes armed work." }
      ],
      sources: [
        { label: "Texas DPS Private Security Fee Schedule (PDF)", url: "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf", checkedOn: "2026-10" },
        { label: "Texas Private Security Administrative Rules - 37 TAC 35.141 Training Requirements (PDF)", url: "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf", checkedOn: "2026-10" },
        { label: "Texas DPS TOPS Level II application walkthrough", url: "https://onlinetexasltc.com/how-to-get-texas-level-ii-security-license/", checkedOn: "2026-10" },
        { label: "Texas Security Guard License Requirements (Occupations Code 1702 summary)", url: "https://securitydogma.com/?p=1698", checkedOn: "2026-10" }
      ]
    },
    UT: {
      agency: "Utah Division of Professional Licensing (DOPL)",
      agencyUrl: "https://dopl.utah.gov/unar",
      exam: {
        vendor: "DOPL-approved basic training provider (state board)",
        vendorUrl: "https://dopl.utah.gov/unar",
        parts: [
          { name: "Basic training final examination", questions: "The department does not publish a question count.", time: "Administered at the end of the 8-hour basic course", pass: "80%" }
        ],
        fee: "Included in course tuition paid to the approved provider",
        practical: null,
        sourceUrl: "https://utrules.elaws.us/uac/r156-63a-603"
      },
      education: {
        hours: "8",
        breakdown: "At least 8 hours of classroom or online instruction covering the nature and role of private security, applicable state laws and rules, legal responsibilities (constitutional law, search and seizure), situational response, security ethics, use of force and de-escalation, report writing, patrol techniques, and workplace sexual harassment, ending with the final exam.",
        onlineAllowed: "Yes - the rule allows classroom or online instruction.",
        apprenticeship: null,
        sourceUrl: "https://utrules.elaws.us/uac/r156-63a-603"
      },
      experience: "No prior experience required for unarmed licensure.",
      eligibility: {
        minAge: 18,
        citizenship: null,
        education: null,
        other: "Applicants may not have been convicted of a felony or of a crime that indicates the public interest is not served by licensure (Utah Code 58-63-302); armed applicants must be 18 or older under rule R156-63a-302e."
      },
      background: {
        method: "Fingerprint background check through the Utah Bureau of Criminal Identification and the FBI; Utah residents submit electronically through an authorized vendor, out-of-state residents submit two FD-258 fingerprint cards",
        fee: "BCI and FBI processing fees collected with the application",
        disqualifiers: "Felony convictions bar licensure; misrepresentation of history discovered in the background check can sink an application.",
        sourceUrl: "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf"
      },
      fees: [
        { item: "Unarmed private security officer application", fee: "$60", sourceUrl: "https://dopl.utah.gov/unar" },
        { item: "Renewal fee", fee: "$42", sourceUrl: "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer" }
      ],
      application: {
        portal: "My License One (UtahID login)",
        portalUrl: "https://dopl.utah.gov/unar",
        steps: [
          "Complete a DOPL-approved 8-hour basic training course and pass the final exam with at least 80%.",
          "Apply online through DOPL (My License One via UtahID) or by manual Security Officer application form.",
          "Submit fingerprints - electronic enrollment for Utah residents, two FD-258 cards for out-of-state residents - for BCI and FBI checks.",
          "Provide a working email address; DOPL communicates with security officers exclusively by email.",
          "An interim permit may be issued immediately if the application includes an official BCI report showing no criminal record."
        ],
        processingTime: "The division does not publish a fixed processing time; interim permits under R156-63a-302g allow qualifying applicants to start sooner.",
        sourceUrl: "https://dopl.utah.gov/unar"
      },
      renewal: {
        cycle: "2 years (expires November 30 of even years)",
        ce: "32 hours of continuing education per two-year cycle (armed officers add 16 hours of firearms training in 4-hour blocks every six months)",
        fee: "$42",
        late: "Continuing to practice after expiration is unlawful under Utah Code 58-1-501/502; DOPL may discipline for any period worked unlicensed.",
        sourceUrl: "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer"
      },
      reciprocity: {
        rule: "Licensure by endorsement is available to applicants currently licensed as an unarmed private security officer in another US state, territory, or district; DOPL publishes a list of approved jurisdictions.",
        agreements: null,
        sourceUrl: "https://dopl.utah.gov/unar"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$42,700", p25: "$36,410", p75: "$45,640", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=UT" },
      localNuance: "All Utah security officer licenses renew on a single statewide date - November 30 of even-numbered years - regardless of when you first licensed. Renewal requires a criminal history background check performed by the division, and working on an expired license is a criminal offense.",
      recentChanges: [
        { year: 2023, change: "The Security Personnel Licensing Act (Utah Code 58-63-302) was amended by Chapter 223 of the 2023 General Session, updating the qualifications and application requirements for unarmed private security officers.", sourceUrl: "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf" }
      ],
      stateFaqs: [
        { q: "How much training does Utah require for an unarmed security officer?", a: "A DOPL-approved basic course of at least 8 hours, in classroom or online format, covering legal authority, use of force and de-escalation, report writing, patrol techniques, and ethics, ending with a final exam that requires at least 80% to pass." },
        { q: "When do Utah security officer licenses expire?", a: "All security officer licenses renew on November 30 of even-numbered years. The renewal fee is $42 and unarmed officers must complete 32 hours of continuing education per two-year cycle." },
        { q: "Does Utah recognize guard cards from other states?", a: "Yes, through licensure by endorsement. DOPL maintains a list of approved jurisdictions and lets current unarmed private security officer licensees from those states qualify without repeating the Utah basic course." },
        { q: "What happens if I work unlicensed in Utah?", a: "Working without a valid license is a class A misdemeanor under Utah Code 58-63-503, and DOPL can impose administrative fines - up to $1,000 for a first offense and $2,000 per day for continued violations - even after the license is later renewed." }
      ],
      sources: [
        { label: "Utah DOPL - Apply for an Unarmed Private Security Officer License", url: "https://dopl.utah.gov/unar", checkedOn: "2026-10" },
        { label: "Utah DOPL - Renew a Security Officer License", url: "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer", checkedOn: "2026-10" },
        { label: "Utah Code 58-63 Security Personnel Licensing Act (PDF)", url: "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf", checkedOn: "2026-10" },
        { label: "Utah Admin Code R156-63a-603 - Basic Education and Training Program", url: "https://utrules.elaws.us/uac/r156-63a-603", checkedOn: "2026-10" }
      ]
    },
    VA: {
      agency: "Virginia Department of Criminal Justice Services (DCJS) - Private Security Services",
      agencyUrl: "http://www.dcjs.virginia.gov/node/35",
      exam: {
        vendor: "DCJS-certified private security training school (state board)",
        vendorUrl: "http://www.dcjs.virginia.gov/node/35",
        parts: [
          { name: "01E Security Officer Core Subjects written exam", questions: "The department does not publish a question count.", time: "Administered at the end of the 18-hour entry-level course", pass: "Passing score set by the certified school under DCJS standards" }
        ],
        fee: "Included in course tuition paid to the training school",
        practical: "The 01E course includes practical exercises such as patrol, access control, and confrontation management.",
        sourceUrl: "https://www.doublegacademy.com/event/01e-security-officer-armed-unarmed-5-2/"
      },
      education: {
        hours: "18",
        breakdown: "Course 01E (Security Officer Core Subjects) covering law and DCJS regulations, report writing, courtroom behavior, use of force, communication, patrol tactics, confrontation management, emergencies, and access control.",
        onlineAllowed: "Initial 01E entry-level training is classroom-based; the 4-hour 01I in-service refresher may be completed online.",
        apprenticeship: "Training exemptions are available under 6VAC20-174-190 for prior private security training or qualified law enforcement experience; an entry-level training exemption application costs $25.",
        sourceUrl: "http://www.dcjs.virginia.gov/node/35"
      },
      experience: "No prior experience required; training completion must be within 12 months of filing the registration application.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or legal resident alien of the United States",
        education: null,
        other: "Registration is barred for any felony conviction or misdemeanor involving moral turpitude, assault and battery, property damage, controlled substances, prohibited sexual behavior, or firearms; the DCJS Director may waive the bar on written request."
      },
      background: {
        method: "Fingerprint appointment through Fieldprint Virginia (fieldprintvirginia.com or 877-614-4364); DCJS is notified automatically",
        fee: "$50 fingerprint processing application, plus the $25 registration fee",
        disqualifiers: "Any felony, or listed misdemeanors, in Virginia or any other jurisdiction including military court martial; applicants with convictions or protective orders must file a Criminal History Supplemental Form.",
        sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      fees: [
        { item: "Initial registration", fee: "$25", sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20" },
        { item: "Fingerprint processing application", fee: "$50", sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20" },
        { item: "Registration renewal", fee: "$20", sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20" },
        { item: "Replacement registration card", fee: "$20", sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20" },
        { item: "Entry-level training exemption", fee: "$25", sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20" }
      ],
      application: {
        portal: "DCJS Online Regulatory Licensing (Lotus)",
        portalUrl: "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/online-regulatory-licensing",
        steps: [
          "Complete the 18-hour 01E Security Officer Core Subjects course at a DCJS-certified school; the school reports completion to DCJS.",
          "Schedule and complete fingerprinting through Fieldprint Virginia on or before your first day of work.",
          "Apply online through DCJS Online Regulatory Licensing, including the Criminal History Processing form, and pay the nonrefundable fees.",
          "Unarmed officers may work up to 90 days while completing training if fingerprints were submitted by the hire date, and must be registered by day 120 of employment.",
          "Renew every 24 months with 4 hours of 01I in-service training completed during each registration period."
        ],
        processingTime: "A temporary authorization is typically issued in about 30 days; DCJS does not publish a fixed total processing time.",
        sourceUrl: "https://securitydogma.com/licensing/virginia"
      },
      renewal: {
        cycle: "24 months",
        ce: "4 hours of 01I Security Officer Core Subjects in-service training per 24-month registration period",
        fee: "$20",
        late: "Within 60 days after expiration, reinstatement requires meeting all renewal requirements plus a reinstatement fee of 50% above the renewal fee; after 60 days, all initial requirements must be met again.",
        sourceUrl: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$43,640", p25: "$35,990", p75: "$54,850", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=VA" },
      localNuance: "Virginia defines the unarmed category as an officer who does not carry or have access to a firearm on duty - touching a firearm means you need the armed registration and a firearms endorsement renewed every 12 months. Virginia does not accept other states' guard cards, but offers a $25 entry-level training exemption evaluation for prior training or law enforcement experience.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "http://www.dcjs.virginia.gov/node/35" }
      ],
      stateFaqs: [
        { q: "How much does a Virginia unarmed security registration cost?", a: "Under 6VAC20-174-20, the initial registration is $25 and fingerprint processing is $50, so a new unarmed officer pays $75 in state fees. Renewal is $20, a replacement card is $20, and paper filings carry a $5 manual processing fee." },
        { q: "How long is Virginia unarmed security officer training?", a: "The 01E Security Officer Core Subjects entry-level course is 18 hours, taught by a DCJS-certified school. Training counts only if the registration application is filed within 12 months of completing the course." },
        { q: "Can I work while completing Virginia unarmed training?", a: "Yes - unarmed officers may work up to 90 consecutive days while finishing entry-level training, provided fingerprints were submitted on or before the hire date, and must hold the DCJS registration by their 120th day of employment." },
        { q: "What disqualifies a DCJS registration in Virginia?", a: "Any felony conviction, or a misdemeanor involving moral turpitude, assault and battery, property damage, controlled substances, prohibited sexual behavior, or firearms, bars registration in Virginia and every other jurisdiction, including military court martial. The DCJS Director may waive the bar if you request it in writing." }
      ],
      sources: [
        { label: "Virginia DCJS - Unarmed Security Officer/Courier", url: "http://www.dcjs.virginia.gov/node/35", checkedOn: "2026-10" },
        { label: "6VAC20-174-20 - Fees (Virginia Administrative Code)", url: "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20", checkedOn: "2026-10" },
        { label: "Virginia Security Guard License Requirements (Code 9.1-139 and 6VAC20-174 summary)", url: "https://securitydogma.com/licensing/virginia", checkedOn: "2026-10" },
        { label: "DCJS training presentation - Entry-level and in-service hour requirements", url: "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/training-events/5318/2020-15_crime_prevention_law_and_liability.pdf", checkedOn: "2026-10" }
      ]
    },
    WA: {
      agency: "Washington State Department of Licensing (DOL) - Private Security Guard Program",
      agencyUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed",
      exam: {
        vendor: "DOL-certified trainer (state board)",
        vendorUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed",
        parts: [
          { name: "Pre-assignment training test", questions: "The department does not publish a question count.", time: "Administered at the end of the 8-hour pre-assignment training", pass: "Passing score set by the certified trainer; a test is required" }
        ],
        fee: "Included in training arranged by the employer or certified trainer",
        practical: null,
        sourceUrl: "https://www.diligencesecuritywa.com/post/how-to-become-a-security-officer-in-washington-state"
      },
      education: {
        hours: "8 pre-assignment + 8 post-assignment + 4 annual",
        breakdown: "8 hours of pre-assignment training (at least 4 in formal classroom) with a test, delivered by a DOL-certified trainer; then 8 hours of initial post-assignment training within the statutory deadline; then at least 4 hours of annual refresher training, of which no more than 1 hour may cover customer service and at least 3 hours must cover emergency response including post orders and life safety.",
        onlineAllowed: "The rule allows the second 4 hours of pre-assignment and post-assignment training as individual instruction; at least 4 pre-assignment hours must be formal classroom.",
        apprenticeship: "Pre-assignment training is waived for former full-time sworn peace officers (within five years) who pass the standard examination.",
        sourceUrl: "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-105"
      },
      experience: "No prior experience required, but the applicant must be employed by or hold a job offer from a licensed private security guard company.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or resident alien",
        education: null,
        other: "The DOL director may withhold a license for any conviction the director finds directly related to the capacity to perform security guard duties, notwithstanding the restoration of employment rights act (RCW 18.170.030)."
      },
      background: {
        method: "Fingerprint-based background check through IdentoGO; unarmed applicants need the Washington State Patrol check only, armed applicants need WSP plus FBI",
        fee: "$33.05 unarmed ($12.05 fingerprints + $21 background check); $45.05 armed",
        disqualifiers: "Convictions the director determines directly relate to guard duties and justify withholding the license; gross misdemeanor or felony convictions within the last five years must be disclosed with an explanation.",
        sourceUrl: "http://www.dol.wa.gov/sites/default/files/forms/690008.pdf"
      },
      fees: [
        { item: "Unarmed private security guard license", fee: "$101 initial", sourceUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards" },
        { item: "License renewal", fee: "$95 (late renewal $110)", sourceUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards" },
        { item: "Armed endorsement", fee: "$10 additional", sourceUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards" },
        { item: "Print-and-mail license", fee: "$5 per copy (self-print online is free)", sourceUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards" }
      ],
      application: {
        portal: "DOL Professions Online (SecureAccess Washington)",
        portalUrl: "https://professions.dol.wa.gov",
        steps: [
          "Get hired by, or hold an offer from, a licensed private security guard company - the company must certify your hiring and training on the application (Form PSG-690-008).",
          "Complete 8 hours of pre-assignment training with a DOL-certified trainer and pass the test; the company attests to completion.",
          "Apply online through professions.dol.wa.gov (or by mail) and pay the $101 unarmed license fee.",
          "Complete fingerprinting through IdentoGO after the application is submitted; out-of-state applicants use a law enforcement agency.",
          "Complete 8 hours of initial post-assignment training by the statutory deadline (June 30 or December 31 of the following year, depending on licensing date), then 4 hours of refresher training each year."
        ],
        processingTime: "Processing can take up to 60 days, driven largely by the fingerprint background check; DOL issues a temporary registration valid up to 60 days while the application is reviewed.",
        sourceUrl: "https://www.diligencesecuritywa.com/post/how-to-become-a-security-officer-in-washington-state"
      },
      renewal: {
        cycle: "2 years",
        ce: "4 hours of refresher training each year (max 1 hour customer service; at least 3 hours emergency response, post orders, and life safety)",
        fee: "$95",
        late: "$110 late renewal",
        sourceUrl: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$47,100", p25: "$42,030", p75: "$56,990", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=WA" },
      localNuance: "Washington is employer-driven: you cannot self-license and then look for work, because the application requires company certification of hiring. In-house guards employed directly by a single non-security employer are exempt under RCW 18.170.020, as are uniform-free crowd management and guest services staff at organized events.",
      recentChanges: [
        { year: 2023, change: "The Washington State Criminal Justice Training Commission clarified that DOL temporary registration cards - valid up to 60 days - no longer qualify a guard to participate in armed firearms certificate qualifications; a valid unarmed license is required first.", sourceUrl: "https://www.cjtc.wa.gov/sites/default/files/2024-06/communication---update---unarmed-license-requirement-%28pspi%29.pdf" }
      ],
      stateFaqs: [
        { q: "How much does a Washington unarmed security guard license cost?", a: "The initial unarmed license is $101, renewal is $95 ($110 if late), and the armed endorsement adds $10. Fingerprints and background checks are separate: $33.05 for unarmed (WSP only) or $45.05 for armed (WSP plus FBI)." },
        { q: "Can I get a Washington guard card without a job offer?", a: "No. RCW 18.170.030 requires you to be employed by, or hold an employment offer from, a licensed private security company, and the company must sign the certification of hiring and training on your application." },
        { q: "What training does Washington require each year for security guards?", a: "After the 8-hour pre-assignment and 8-hour post-assignment courses, every guard needs at least 4 hours of refresher training annually. No more than 1 hour may be customer service content; the remaining 3 hours must cover emergency response, post orders, and life safety." },
        { q: "How long does DOL take to issue a security guard license?", a: "Expect up to 60 days, with the fingerprint background check usually the slowest step. DOL issues a temporary registration - valid up to 60 days and not valid for armed work - while the application is pending." }
      ],
      sources: [
        { label: "Washington DOL - Fees: Security Guards", url: "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards", checkedOn: "2026-10" },
        { label: "DOL Form PSG-690-008 - Apply for private security guard license (PDF)", url: "http://www.dol.wa.gov/sites/default/files/forms/690008.pdf", checkedOn: "2026-10" },
        { label: "RCW 18.170.030 - Security guard license requirements", url: "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-030", checkedOn: "2026-10" },
        { label: "RCW 18.170.105 - Training requirements", url: "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-105", checkedOn: "2026-10" },
        { label: "WSCJTC memo - Unarmed license requirement for firearms qualification (Nov 2023)", url: "https://www.cjtc.wa.gov/sites/default/files/2024-06/communication---update---unarmed-license-requirement-%28pspi%29.pdf", checkedOn: "2026-10" }
      ]
    },
    WV: {
      agency: "West Virginia Secretary of State - Private Investigator and Security Guard Licensing",
      agencyUrl: "https://sos.wv.gov/licensing",
      education: {
        hours: "1 year (experience or training)",
        breakdown: "No pre-assignment course is mandated by the state. Qualification is based on at least one year of verified full-time employment in the security guard business (or private investigation) for a licensed firm, or one year of substantially equivalent training or experience.",
        onlineAllowed: "Not applicable - qualification is by experience or equivalent training rather than a state course.",
        apprenticeship: null,
        sourceUrl: "https://sos.wv.gov/media/344/download"
      },
      experience: "At least one year of verified full-time employment conducting security guard business or private investigation business for a licensed firm, or one year of substantially equivalent training or experience, documented by a notarized employer statement or transcripts.",
      eligibility: {
        minAge: null,
        citizenship: "The application requires citizenship disclosure; non-resident applicants file a separate non-resident application with higher fees",
        education: null,
        other: "Applicants must show good character, competency, and integrity, including character references from five reputable citizens who have known the applicant at least five years and are unrelated by blood or marriage."
      },
      background: {
        method: "Criminal history background check through the West Virginia State Police, authorized in the application; a full-face passport-style photo taken within one year accompanies the filing",
        fee: "$50 nonrefundable criminal history background check fee payable to the Secretary of State",
        disqualifiers: "The application requires disclosure of all arrests and convictions; the Secretary of State evaluates good character and integrity under W. Va. Code 30-18-6.",
        sourceUrl: "https://code.wvlegislature.gov/30-18-6/"
      },
      fees: [
        { item: "Application processing (background check)", fee: "$50 nonrefundable", sourceUrl: "https://code.wvlegislature.gov/30-18-6/" },
        { item: "Security guard license (resident individual)", fee: "$100", sourceUrl: "https://sos.wv.gov/media/344/download" },
        { item: "Combined PI/SG individual license (resident)", fee: "$200", sourceUrl: "https://sos.wv.gov/media/344/download" },
        { item: "Surety bond or liability insurance", fee: "$5,000 surety bond conditioned on faithful and honest conduct (or sufficient liability insurance)", sourceUrl: "https://code.wvlegislature.gov/30-18-6/" }
      ],
      application: {
        portal: "WV Secretary of State paper application (Form PISG_APP)",
        portalUrl: "https://sos.wv.gov/media/344/download",
        steps: [
          "Document one year of qualifying security guard employment or equivalent training, with a sworn notarized employer statement or coursework transcripts.",
          "Gather five character reference forms from citizens who have known you at least five years, written specifically for the application.",
          "File the initial application (Form PISG_APP) with the $50 background check fee and $100 resident individual license fee, one recent full-face photo, and the completed $5,000 surety bond form or proof of liability insurance.",
          "After approval, register with the WV State Tax Department for any required business license.",
          "The initial license is valid for two years from approval; renewals are filed with the Secretary of State thereafter."
        ],
        processingTime: "The state does not publish a fixed processing time; review includes the State Police criminal background report.",
        sourceUrl: "https://sos.wv.gov/media/344/download"
      },
      renewal: {
        cycle: "2 years (initial license valid two years from approval; renewed by filing the renewal application)",
        ce: "The state does not publish a continuing education requirement for security guard licensees.",
        fee: null,
        late: "An additional late application fee applies when a renewal application is filed after the license expiration date (W. Va. Code 30-18-14).",
        sourceUrl: "https://sos.wv.gov/media/344/download"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$28,800", p25: "$20,800", p75: "$35,990", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=WV" },
      localNuance: "West Virginia licenses individual security guards through the Secretary of State rather than a police or commerce agency, and the filing burden is unusually personal: five five-year character references, a passport photo, and a $5,000 surety bond or liability insurance. Approved licensees must also register with the WV State Tax Department.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.wv.gov/licensing" }
      ],
      stateFaqs: [
        { q: "What experience do I need for a West Virginia security guard license?", a: "One year of verified full-time employment in the security guard or private investigation business for a licensed firm, or one year of substantially equivalent training or experience. Employers must attest in a sworn notarized statement; coursework can substitute in part via transcripts." },
        { q: "How much does a WV security guard license cost?", a: "Applicants pay a $50 nonrefundable background processing fee plus a $100 license fee for a resident individual ($200 for a combined PI/security guard individual license). A $5,000 surety bond or proof of liability insurance is also required." },
        { q: "Does West Virginia require an exam or training course for security guards?", a: "No state examination or pre-assignment course is required under W. Va. Code 30-18-6. Qualification rests on the one-year experience or training requirement, background review through the State Police, and character references." },
        { q: "How long is a West Virginia security guard license valid?", a: "The initial license is valid for two years from the date of approval by the Secretary of State. Renewal applications are filed with the Secretary of State, and a late application fee applies if the renewal is filed after expiration." }
      ],
      sources: [
        { label: "WV Secretary of State - Private Investigator and/or Security Guard License Initial Application (PISG_APP)", url: "https://sos.wv.gov/media/344/download", checkedOn: "2026-10" },
        { label: "W. Va. Code 30-18-6 - Application requirements for a security guard license", url: "https://code.wvlegislature.gov/30-18-6/", checkedOn: "2026-10" },
        { label: "WV Secretary of State - Licensing (PI and Security Guard overview)", url: "https://sos.wv.gov/licensing", checkedOn: "2026-10" },
        { label: "WV Secretary of State - Homepage contact and program listing", url: "https://sos.wv.gov/", checkedOn: "2026-10" }
      ]
    },
    WI: {
      agency: "Wisconsin Department of Safety and Professional Services (DSPS)",
      agencyUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf",
      education: {
        hours: null,
        breakdown: "Wisconsin does not mandate pre-assignment training hours for an unarmed private security person permit. The credential is based on the application, employer sponsorship, and state and federal criminal record searches; training is set by the sponsoring licensed agency.",
        onlineAllowed: "Not applicable - no state training course is required.",
        apprenticeship: null,
        sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      },
      experience: "No experience requirement for a private security person permit; qualification is by application, sponsorship, and background check.",
      eligibility: {
        minAge: 18,
        citizenship: null,
        education: null,
        other: "Applicants convicted of a felony anywhere, unless pardoned, are ineligible with no exceptions; DSPS may also refuse a permit for misdemeanor convictions or rule violations, and may deny for drug or alcohol impairment or conditions affecting fitness (SPS 31.02)."
      },
      background: {
        method: "Electronic fingerprints through Fieldprint (code FPWISECURITY), arranged after DSPS receives the application and the signed FBI Authorization for Release (Form 2687); a recent photograph is submitted with Form 2687",
        fee: "$8 background check fee (included in the $45 temporary-plus-regular option)",
        disqualifiers: "Any felony conviction without a pardon is an absolute bar; misdemeanor records are evaluated case by case and can support a Notice of Denial.",
        sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      },
      fees: [
        { item: "Regular private security permit", fee: "$27", sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf" },
        { item: "Temporary permit (optional, added to regular permit)", fee: "$10 (total $45 with temporary permit, regular permit, and $8 background check)", sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf" },
        { item: "Late renewal after five or more years expired", fee: "$52 ($27 credential fee + $25 late renewal fee)", sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf" }
      ],
      application: {
        portal: "DSPS LicensE",
        portalUrl: "https://license.wi.gov/",
        steps: [
          "Line up employment with a licensed private detective/security agency - the agency must complete Form 3038 certifying it will employ you and take responsibility for your conduct.",
          "Apply and pay online through LicensE; optionally request a temporary permit, which issues for 30 days if the state DOJ check shows no criminal history and does not allow carrying a firearm.",
          "Submit electronic fingerprints through Fieldprint and the signed FBI Authorization for Release of FBI Information (Form 2687) with a recent photograph.",
          "Complete Form 2254 (Convictions and Pending Charges) disclosures; DSPS runs state and federal criminal record searches.",
          "Once the background search is satisfactory, DSPS issues the regular permit; filing an application alone is not authorization to work."
        ],
        processingTime: "The temporary permit can be issued immediately upon a clean DOJ check and expires after 30 days; the regular permit issues once the state and federal record search completes. DSPS does not publish a fixed total processing time.",
        sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      },
      renewal: {
        cycle: "Up to 2 years (no license is issued for a longer period than 2 years under Wis. Stat. 440.26(3))",
        ce: "The state does not publish a continuing education requirement for private security permit holders.",
        fee: null,
        late: "A credential expired more than five years requires a new application (Late Renewal After Five Years) with the $52 fee; the department may not renew without evidence that the required bond or liability policy remains in force.",
        sourceUrl: "https://docs.legis.wisconsin.gov/statutes/statutes/440/ii/26/8"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$37,440", p25: "$35,030", p75: "$46,210", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=WI" },
      localNuance: "Wisconsin's model is employer-tied: a private security permit authorizes work only for the licensed private detective agency that sponsors it, and a new agency must notify DSPS within five days of a change of employment. Guards directly employed (W-2) by a business or industrial company for their own premises are exempt from the permit under Wis. Stat. 440.26.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf" }
      ],
      stateFaqs: [
        { q: "Do Wisconsin security guards need an individual license?", a: "Yes. Anyone acting as a private security person - private police, guard, or watch person - for a private security agency needs a DSPS private security permit under Wis. Stat. 440.26. Only guards directly employed by a business for its own premises are exempt." },
        { q: "How much does a Wisconsin private security permit cost?", a: "The regular permit is $27. Adding the optional 30-day temporary permit brings the total to $45 ($10 temporary + $27 regular + $8 background check). A late renewal after five or more years expired costs $52." },
        { q: "Can I work while my Wisconsin permit application is pending?", a: "Only with a temporary permit. DSPS issues one for 30 days if the state DOJ check shows no criminal history, and it does not allow carrying a firearm. Filing the application alone is not authorization to practice." },
        { q: "What criminal history bars a Wisconsin security permit?", a: "A felony conviction in Wisconsin or any other state is an absolute bar unless you have been pardoned - DSPS states there are no exceptions. Misdemeanor convictions and pending charges are evaluated and can also result in a Notice of Denial." }
      ],
      sources: [
        { label: "Wisconsin DSPS - Private Security Permit Application Information (Form 2271)", url: "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf", checkedOn: "2026-10" },
        { label: "Wis. Stat. 440.26 - Private detectives, investigators and security personnel", url: "https://docs.legis.wisconsin.gov/statutes/statutes/440/ii/26/8", checkedOn: "2026-10" },
        { label: "Wisconsin Security Guard License Requirements and Fees (SPS 31 summary)", url: "https://legalclarity.org/wisconsin-security-guard-license-requirements-and-fees", checkedOn: "2026-10" },
        { label: "Wisconsin DSPS LicensE portal", url: "https://license.wi.gov/", checkedOn: "2026-10" }
      ]
    }
  }
};
