export default {
  key: "private-investigator",
  compiledOn: "2026-10-20",
  states: {
    AL: {
      agency: "Alabama Private Investigation Board (APIB)",
      agencyUrl: "https://www.apib.alabama.gov/",
      exam: {
        vendor: "State board (Alabama Private Investigation Board)",
        vendorUrl: "https://www.apib.alabama.gov/",
        fee: "Not published separately from the application fee",
        languages: ["English"],
        sourceUrl: "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf",
        sourceNote: "Section 34-25B-12 requires passing an examination administered by the board twice annually. The board provides a study guide to applicants and does not publish a question count, time limit, or passing score."
      },
      experience: "Applicant guidance calls for two years of experience, education, or training in the investigation field, including 120 hours of practical field experience; qualifying backgrounds include special investigations work, prior law enforcement, or a two-year related degree.",
      eligibility: {
        minAge: 21,
        citizenship: "Proof of citizenship is submitted with the application",
        other: "No felony convictions and no conviction of a crime of moral turpitude (the board makes the final interpretation); the applicant must not have been declared incompetent by a court unless later declared competent."
      },
      background: {
        method: "Three sets of classifiable fingerprints submitted through the Alabama Law Enforcement Agency (ALEA) for state and FBI checks",
        fee: "$37 ALEA background-check fee",
        disqualifiers: "Felony convictions and crimes of moral turpitude",
        sourceUrl: "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf"
      },
      fees: [
        { item: "Application", fee: "$100 nonrefundable application fee to the board", sourceUrl: "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/" },
        { item: "Background check", fee: "$37 paid to ALEA for state and FBI fingerprint comparison", sourceUrl: "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/" },
        { item: "Agency license (2 years)", fee: "Statutory caps: up to $50 for agencies with 2 or fewer licensed investigators, up to $200 for agencies with 3 or more, up to $500 for out-of-state agencies", sourceUrl: "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf" },
        { item: "Renewal late fee", fee: "Up to $200 administrative late fee after expiration", sourceUrl: "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf" }
      ],
      application: {
        portal: "Paper application filed with the board",
        portalUrl: "https://www.apib.alabama.gov/",
        steps: [
          "Download the application from the board and list all residences, employment, convictions, and pending charges for the past five years.",
          "Submit three classifiable fingerprint sets, a photograph, proof of citizenship, and the $100 application fee plus the $37 ALEA background-check fee.",
          "Sit for the board examination, which is administered twice each year; a study guide is provided.",
          "After board approval, pay the license fee and receive the private investigator license."
        ],
        processingTime: "The board does not publish a processing time.",
        sourceUrl: "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf"
      },
      renewal: {
        cycle: "2 years",
        fee: "Set by board rule; agency license fees are capped at $50-$200 in state (see fees)",
        late: "A late fee of up to $200 applies to renewals postmarked after expiration, and renewal applications are not accepted more than 30 days after expiration unless the board waives the deadline",
        sourceUrl: "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$46,810", p25: "$37,740", p75: "$52,610", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=AL" },
      localNuance: "Alabama licenses individuals and, since January 1, 2024, private investigation agencies separately. Agencies must display their license number on advertisements, letterhead, reports, and invoices, and each invoice must show the license number and billed time of every licensee whose services are charged.",
      recentChanges: [
        { year: 2023, change: "The 2023 rewrite of the Alabama Private Investigation Regulatory Act (HB75, Act 2023-306) required business entities conducting private investigations to hold an agency license beginning January 1, 2024, set agency fee caps at $50-$200 in state and $500 out of state, and added a late fee of up to $200 with a 30-day post-expiration renewal window.", sourceUrl: "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf" }
      ],
      stateFaqs: [
        { q: "How often is the Alabama private investigator exam offered?", a: "The Alabama Private Investigation Board administers its own examination twice each year under Section 34-25B-12 of the Private Investigation Regulatory Act. A study guide is provided to every applicant, and the board does not publish a question count or passing score." },
        { q: "What are the basic eligibility rules in Alabama?", a: "Applicants must be at least 21, submit proof of citizenship, and pass state and FBI fingerprint checks through ALEA. A felony conviction or a crime of moral turpitude disqualifies an applicant, with the board making the final call on moral turpitude." },
        { q: "Do agencies need a separate Alabama license?", a: "Yes. Since January 1, 2024, any business entity conducting private investigations must hold an agency license. Statutory caps limit the fee to $50 for agencies with two or fewer licensed investigators, $200 for larger in-state agencies, and $500 for out-of-state agencies." },
        { q: "What happens if an Alabama PI license lapses?", a: "A renewal postmarked after expiration draws an administrative late fee of up to $200. The board will not accept a renewal application more than 30 days after expiration unless it waives the deadline for good cause, so a lapsed licensee may need to reapply." }
      ],
      sources: [
        { label: "Alabama Private Investigation Regulatory Act (Chapter 25B)", url: "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf", checkedOn: "2026-10" },
        { label: "HB75 (2023) - Alabama Private Investigation Regulatory Act rewrite", url: "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf", checkedOn: "2026-10" },
        { label: "Alabama Private Investigation Board", url: "https://www.apib.alabama.gov/", checkedOn: "2026-10" },
        { label: "Alabama PI rules and licensing overview (LegalClarity)", url: "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/", checkedOn: "2026-10" },
        { label: "O*NET local wages for Alabama, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=AL", checkedOn: "2026-10" }
      ]
    },
    AZ: {
      agency: "Arizona Department of Public Safety (DPS), Security Guard & Private Investigator Licensing Unit",
      agencyUrl: "https://licensing.azdps.gov/contact-0",
      experience: "The agency's qualifying party needs at least three years of full-time investigative experience, or the equivalent, gained with private, federal, state, county, or municipal entities (A.R.S. Section 32-2422(A)).",
      eligibility: {
        minAge: 21,
        citizenship: "US citizenship or lawful residency is required",
        other: "Statutory character standards apply to the qualifying party under A.R.S. Section 32-2422, including disqualification for felonies and recent specified misdemeanors. Registered PI employees must be at least 18 (A.R.S. Section 32-2441)."
      },
      background: {
        method: "Fingerprint card plus the Fingerprint Affidavit form, sealed in a single envelope, submitted with the application",
        fee: "$22 fingerprint processing fee",
        disqualifiers: "Felony convictions and recent specified misdemeanors under A.R.S. Section 32-2422",
        sourceUrl: "https://licensing.azdps.gov/contact-0"
      },
      fees: [
        { item: "Agency application", fee: "$250", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Agency license", fee: "$400", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Agency license renewal", fee: "$250", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Private investigator registration (new or renewal)", fee: "$50", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Additional employer registration", fee: "$10", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Fingerprint processing", fee: "$22", sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing" },
        { item: "Surety bond", fee: "$2,500 continuous four-year bond in the agency name (A.R.S. Section 32-2423)", sourceUrl: "https://licensing.azdps.gov/contact-0" }
      ],
      application: {
        portal: "DPS Public Services Portal (PSP)",
        portalUrl: "https://licensing.azdps.gov/",
        steps: [
          "Obtain approval of the agency name from the Licensing Unit before filing with the Arizona Secretary of State.",
          "Submit the agency application, fingerprints, fingerprint affidavit, and fees through the Public Services Portal.",
          "Wait for the Licensing Unit's approval notice before purchasing the $2,500 surety bond and workers' compensation insurance.",
          "Register each private investigator employee ($50) after the agency license is issued; Arizona does not prescribe a written examination for PI agency licensure or employee registration."
        ],
        processingTime: "About 15 business days after submission (5 days administrative completeness review plus 10 days substantive review under A.A.C. R13-2-105).",
        sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing"
      },
      renewal: {
        cycle: "4 years",
        fee: "$250 agency renewal; $50 per private investigator registration renewal",
        late: "$100 agency late renewal fee; $10 associate late renewal fee; renewals are accepted up to 180 days before expiration",
        sourceUrl: "https://www.azdps.gov/services/public-services-center/licensing"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$61,030", p25: "$41,450", p75: "$79,790", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=AZ" },
      localNuance: "Arizona issues the agency license to a qualifying party rather than to the business entity, and PI employee registrations expire with the employing agency's four-year license. First-time applicants whose family income is at or below 200 percent of the federal poverty level, active-duty military spouses, and recently discharged veterans can have the initial license fee waived under A.R.S. 41-1080.01, though the $22 fingerprint fee still applies.",
      recentChanges: [
        { year: 2026, change: "Effective July 8, 2026, any fingerprints received by DPS must be accompanied by the completed Fingerprint Affidavit form and fingerprint card sealed in a single envelope; packets received in any other form are rejected.", sourceUrl: "https://licensing.azdps.gov/contact-0" },
        { year: 2026, change: "The Licensing Unit is transitioning to a new licensing system with service disruptions, and any form or application signed and received after July 1, 2026 must be the newest version or it will be rejected.", sourceUrl: "https://licensing.azdps.gov/contact-0" }
      ],
      stateFaqs: [
        { q: "Does Arizona require a private investigator exam?", a: "No. Arizona PI agency licensure is based on the qualifying party's three years of investigative experience, character standards, fingerprints, and the $2,500 surety bond under A.R.S. Title 32, Chapter 24. No written examination is prescribed for agency licensure or employee registration." },
        { q: "How long is an Arizona PI license valid?", a: "Agency licenses and the employee registrations tied to them run on four-year cycles. DPS accepts renewal applications up to 180 days before expiration, and the agency renewal fee is $250 with a $100 late fee." },
        { q: "What does an Arizona PI agency pay in state fees?", a: "The agency application is $250, the agency license is $400, and each private investigator registration is $50, plus a $22 fingerprint processing fee. All fees are nonrefundable under A.A.C. R13-2-102." },
        { q: "Who qualifies for an Arizona initial-license fee waiver?", a: "Under A.R.S. 41-1080.01, first-time applicants whose family income does not exceed 200 percent of the federal poverty guidelines, active-duty military spouses, and honorably discharged veterans discharged within the previous two years can have the initial license fee waived. The $22 fingerprint fee still applies." }
      ],
      sources: [
        { label: "Arizona DPS Licensing (fees and FAQ)", url: "https://www.azdps.gov/services/public-services-center/licensing", checkedOn: "2026-10" },
        { label: "Arizona DPS Security Guard & Private Investigator Licensing Unit", url: "https://licensing.azdps.gov/contact-0", checkedOn: "2026-10" },
        { label: "Arizona DPS SGPI Licensing (fee schedule)", url: "https://www.azdps.gov/services/public-services-center/sgpi-licensing", checkedOn: "2026-10" },
        { label: "Arizona PI licensing overview (License Navigator)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arizona", checkedOn: "2026-10" },
        { label: "O*NET local wages for Arizona, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=AZ", checkedOn: "2026-10" }
      ]
    },
    AR: {
      agency: "Arkansas State Police, Regulatory Services Division (Private Investigators / Security / Alarm)",
      agencyUrl: "https://dps.arkansas.gov/?p=6133",
      exam: {
        vendor: "Arkansas State Police (in-house, proctored)",
        vendorUrl: "https://dps.arkansas.gov/?p=6133",
        parts: [
          { name: "Private investigator examination", questions: "Minimum 100 scored", time: "Not published", pass: "70%" }
        ],
        fee: "$50 re-examination fee when the State Police administers the retake",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402",
        sourceNote: "17 CAR Section 350-1103: the exam covers the subjects in 17 CAR 350-1102, the licensing part, field note taking and report writing, and the Arkansas Criminal Code; it is taken in person."
      },
      education: {
        hours: "No standalone pre-licensing training hours for the Credentialed Private Investigator credential",
        breakdown: "Company-license applicants who do not meet the manager experience threshold must complete a 210-hour course of instruction covering criminal law, civil law, security functions, supervision and management, and related subjects",
        onlineAllowed: "Not applicable",
        apprenticeship: "A CPI works under the supervision of a qualified manager of a Class A investigations company, who provides on-the-job training",
        sourceUrl: "https://legalclarity.org/how-to-get-a-private-investigator-license-in-arkansas"
      },
      experience: "No set experience hours for a CPI credential; the credential holder must work under a qualified manager of a Class A investigations company. Five consecutive years of law-enforcement experience, current or ended within the last five years, exempts an applicant from the examination (17 CAR Section 350-1103(g)).",
      eligibility: {
        minAge: 18,
        citizenship: "Non-US citizens must attach current, valid proof of eligibility to work in the United States",
        other: "Applicants cannot be suffering from habitual drunkenness or narcotics addiction or dependence, cannot have a dishonorable military discharge, cannot have been adjudicated mentally incompetent or involuntarily committed, and cannot be registered sex offenders (A.C.A. Section 17-40-306)."
      },
      background: {
        method: "Two classifiable fingerprint cards submitted with the application; the State Police run state and FBI criminal history checks",
        fee: "$22 state check plus $14.25 in FBI fees ($36.25 total)",
        disqualifiers: "Convictions listed in the disqualifying statutes block licensure; sealed or expunged convictions still disqualify unless the applicant receives a pardon under the governor's clemency authority",
        sourceUrl: "https://dps.arkansas.gov/?p=6133"
      },
      fees: [
        { item: "CPI application", fee: "$450 nonrefundable", sourceUrl: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arkansas" },
        { item: "Background checks", fee: "$36.25 ($22 state plus $14.25 FBI)", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas" },
        { item: "CPI renewal (2 years)", fee: "$150 plus new fingerprint and background-check fees", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas" },
        { item: "Re-examination", fee: "$50 if administered by the Division of Arkansas State Police", sourceUrl: "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402" }
      ],
      application: {
        portal: "Paper application filed with the Arkansas State Police Regulatory Services Division",
        portalUrl: "https://dps.arkansas.gov/?p=6133",
        steps: [
          "Secure employment with a Class A investigations company; the CPI application must be filed within 14 calendar days of hire (A.C.A. Section 17-40-325).",
          "Submit the CPI application with two passport-style photos, two classifiable fingerprint cards, the Authority to Release form, and the $450 fee plus background-check fees.",
          "Take the proctored examination, administered Tuesdays at 9:00 a.m. at Little Rock State Police Headquarters; study material is Act 393 of 2015 and the Private Security & Alarm Service Rules.",
          "Receive the credential; since August 5, 2025, identification cards are disseminated electronically by email, and the credential must be produced on request while working."
        ],
        processingTime: "The Division does not publish a processing time.",
        sourceUrl: "https://dps.arkansas.gov/?p=6133"
      },
      renewal: {
        cycle: "2 years",
        fee: "$150 plus new fingerprints and background-check fees",
        late: "Renew within the 90 days before expiration on the ASP renewal form",
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas"
      },
      reciprocity: {
        rule: "Arkansas maintains reciprocal agreements relating to private investigator licenses issued by Tennessee, Louisiana, and Oklahoma, per the State Police program page.",
        agreements: ["Tennessee", "Louisiana", "Oklahoma"],
        sourceUrl: "https://dps.arkansas.gov/?p=6133"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$47,750", p25: "$37,970", p75: "$69,990", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=AR" },
      localNuance: "A CPI credential alone does not authorize independent practice; investigators must operate under a Class A investigations company. Entrepreneurs instead license a Class A company, whose qualified manager must pass the same state exam, and no individual bond applies to a CPI (insurance minimums attach to certain company license classes).",
      recentChanges: [
        { year: 2026, change: "The federal background-check fee increases from $10 to $13 effective October 1, 2026, and all previous versions of PI-Security applications become invalid on that date; updated applications display a 10-2026 effective date.", sourceUrl: "https://dps.arkansas.gov/?p=6133" },
        { year: 2025, change: "Effective August 5, 2025, Arkansas State Police identification cards for credentialed investigators are disseminated electronically via email rather than in paper form.", sourceUrl: "https://dps.arkansas.gov/?p=6133" }
      ],
      stateFaqs: [
        { q: "When and where is the Arkansas PI exam given?", a: "The State Police administer the exam in person on Tuesdays at 9:00 a.m. at Little Rock State Police Headquarters. The study material is Act 393 of 2015 and the Private Security & Alarm Service Rules, excluding polygraph and voice-stress material." },
        { q: "Who is exempt from the Arkansas PI exam?", a: "Applicants with five consecutive years of law-enforcement experience who are currently employed in law enforcement or retired or left within the last five years are exempt under 17 CAR Section 350-1103(g). A confirming letter from the department is required." },
        { q: "How much does a first Arkansas CPI credential cost?", a: "The application fee is $450 plus $36.25 in state and FBI background-check fees, for a total of about $486.25. Renewal every two years is $150 plus new background-check fees." },
        { q: "Does Arkansas recognize other states' PI licenses?", a: "Yes. The State Police maintain reciprocal agreements with Tennessee, Louisiana, and Oklahoma. Investigators licensed elsewhere apply through the standard process, and Arkansas does not issue temporary permits for short-term out-of-state work." }
      ],
      sources: [
        { label: "Arkansas State Police - Private Investigators / Security / Alarm program page", url: "https://dps.arkansas.gov/?p=6133", checkedOn: "2026-10" },
        { label: "17 CAR Section 350-1103 - Private investigator examination (Code of Arkansas Rules)", url: "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402", checkedOn: "2026-10" },
        { label: "Arkansas PI license guide (License Navigator)", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arkansas", checkedOn: "2026-10" },
        { label: "Arkansas PI licensing requirements (LegalClarity)", url: "https://legalclarity.org/private-investigator-arkansas-licensing-laws/", checkedOn: "2026-10" },
        { label: "O*NET local wages for Arkansas, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=AR", checkedOn: "2026-10" }
      ]
    },
    CA: {
      agency: "California Bureau of Security and Investigative Services (BSIS)",
      agencyUrl: "https://www.bsis.ca.gov/forms_pubs/pi_fact",
      exam: {
        vendor: "PSI (state-contracted testing vendor)",
        vendorUrl: "https://www.bsis.ca.gov/forms_pubs/pi_fact",
        parts: [
          { name: "Private investigator qualifying examination", questions: "Question count not published by BSIS", time: "120 minutes", pass: "Not published" }
        ],
        fee: "$50 application and exam fee paid to BSIS with the application",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.bsis.ca.gov/forms_pubs/pi_fact",
        sourceNote: "BSIS factsheet: a two-hour multiple-choice examination covering laws and regulations, terminology, civil and criminal liability, evidence handling, undercover investigations, and surveillance. Scheduling is handled through PSI after BSIS approves eligibility."
      },
      education: {
        hours: "6,000 hours (three years) of compensated investigative experience",
        breakdown: "A law degree or a completed four-year police science course plus two years (4,000 hours) qualifies; an associate degree in police science, criminal law, or justice plus two and a half years (5,000 hours) qualifies. The BSIS FAQ credits 2,000 hours for a law or bachelor's degree and 1,000 hours for an associate degree.",
        onlineAllowed: "Not applicable -- the requirement is compensated experience, not coursework",
        apprenticeship: "Qualifying employment includes sworn law enforcement, military police, insurance adjusting, employment by a licensed PI or licensed repossessor, arson investigation for a public fire agency, and public defender office investigation. Process serving, records research, and debt collection do not count.",
        sourceUrl: "https://www.bsis.ca.gov/forms_pubs/pi_fact"
      },
      experience: "Three years (6,000 hours) of compensated investigative experience, with degree substitutions reducing the requirement to 5,000 or 4,000 hours; experience must be certified by the employer (Business and Professions Code Chapter 11.3).",
      eligibility: {
        minAge: 18,
        other: "Applicants must undergo DOJ and FBI criminal history checks. Per FBI guidelines, the application must be submitted to BSIS before completing the Live Scan background check, and the check is required even for holders of other BSIS licenses."
      },
      background: {
        method: "Live Scan fingerprinting submitted to the California Department of Justice and the FBI",
        fee: "$32 DOJ plus $17 FBI processing, paid at the time of fingerprinting (plus the Live Scan site's rolling fee)",
        disqualifiers: "Felony and disqualifying misdemeanor history; BSIS evaluates criminal history on every PI application regardless of other BSIS credentials held",
        sourceUrl: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
      },
      fees: [
        { item: "Application and exam", fee: "$50", sourceUrl: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862" },
        { item: "Initial license (2 years)", fee: "$175, paid after notification that the exam was passed", sourceUrl: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862" },
        { item: "Renewal (2 years)", fee: "$125", sourceUrl: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862" },
        { item: "Fingerprint processing", fee: "$32 DOJ + $17 FBI", sourceUrl: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862" }
      ],
      application: {
        portal: "BreEZe",
        portalUrl: "https://www.bsis.ca.gov/",
        steps: [
          "Submit the application (Form 31B-4), two passport-quality photographs, the employer-certified experience certification (Form 31B-8), and the $50 fee through BreEZe or by mail; BreEZe submission can cut processing by up to two weeks.",
          "Complete Live Scan fingerprinting for the DOJ and FBI checks only after the application has been submitted, and keep the Live Scan form showing the ATI number.",
          "After BSIS verifies eligibility, schedule the two-hour multiple-choice examination with PSI at one of its California test centers.",
          "Upon passing, submit the $175 license fee to receive the license."
        ],
        processingTime: "About 120 days on average per the state labor market information listing; BSIS notes BreEZe filing bypasses the cashiering office and can reduce processing time by up to two weeks.",
        sourceUrl: "http://bsis.ca.gov/consumers/faqs/pi.shtml"
      },
      renewal: {
        cycle: "2 years",
        ce: "None for the PI license; firearms permit holders complete periodic requalification",
        fee: "$125",
        late: "The license becomes delinquent 30 days after expiration and can be renewed up to three years after expiration; after three years a new application is required",
        sourceUrl: "http://bsis.ca.gov/consumers/faqs/pi.shtml"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$61,250", p25: "$45,380", p75: "$82,110", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=CA" },
      localNuance: "Carrying a gun on duty requires a separate BSIS firearms permit (US citizenship or permanent residency, age 21, an 8-hour power-to-arrest course, and a 14-hour firearms course), and a BSIS permit still does not authorize concealed carry without a local CCW. PIs may protect persons only when incidental to an investigation, never property, and LLC-organized firms must carry errors-and-omissions insurance.",
      recentChanges: [
        { year: 2025, change: "BSIS implemented a 10 percent increase to all eligible licensing fees effective October 1, 2025, amending CCR sections 638 through 642.5; applications postmarked before October 1, 2025 kept the prior fee amounts, so current application, license, and renewal charges differ from the pre-increase figures.", sourceUrl: "https://www.bsis.ca.gov/forms_pubs/notice_fee_increase.pdf" }
      ],
      stateFaqs: [
        { q: "What does the California PI exam cover?", a: "It is a two-hour multiple-choice test administered through PSI covering laws and regulations, terminology, civil and criminal liability, evidence handling, undercover investigations, and surveillance. BSIS approves eligibility first and then sends scheduling instructions." },
        { q: "How do degrees reduce California's experience requirement?", a: "The base requirement is 6,000 hours (three years) of compensated investigative experience. A law degree or bachelor's degree credits 2,000 hours, cutting the requirement to 4,000 hours, and an associate degree in police science, criminal law, or justice credits 1,000 hour for a 5,000-hour requirement." },
        { q: "Does California require a bond for private investigators?", a: "No surety bond is required for individual PI licensees. LLC-organized firms must carry errors-and-omissions insurance, and PIs who carry a firearm and provide armed bodyguard services incidental to an investigation need $1,000,000 in commercial general liability coverage." },
        { q: "What happens if a California PI license expires?", a: "The license becomes delinquent 30 days after expiration. It can still be renewed up to three years after expiration, but after that point a new application and the full licensing process are required." }
      ],
      sources: [
        { label: "BSIS Private Investigator License factsheet", url: "https://www.bsis.ca.gov/forms_pubs/pi_fact", checkedOn: "2026-10" },
        { label: "BSIS Private Investigator FAQ", url: "http://bsis.ca.gov/consumers/faqs/pi.shtml", checkedOn: "2026-10" },
        { label: "BSIS Notice of Fee Increase effective October 1, 2025", url: "https://www.bsis.ca.gov/forms_pubs/notice_fee_increase.pdf", checkedOn: "2026-10" },
        { label: "California LMIS occupational license listing (fees)", url: "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862", checkedOn: "2026-10" },
        { label: "O*NET local wages for California, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=CA", checkedOn: "2026-10" }
      ]
    },
    CT: {
      agency: "Connecticut Department of Emergency Services and Public Protection (DESPP), State Police Special Licensing and Firearms Unit",
      agencyUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives",
      experience: "Five years of full-time investigative experience as a licensed private detective, registered private investigator, proprietary detective agency operator, federal/state/local government investigator, or police detective, or ten years as a police officer with a federal, state, or organized municipal department. The commissioner may substitute up to one year of experience for satisfactory completion of relevant coursework. Employment as a security officer does not count.",
      eligibility: {
        minAge: 25,
        citizenship: "US citizen, naturalized US citizen, or legal resident alien, with documentation required",
        other: "Good moral character is required. No license is issued to anyone convicted of a felony, convicted of specified misdemeanors (including assault, threatening, stalking, and drug offenses) within the past seven years, convicted of any offense involving moral turpitude, or discharged from military service under conditions demonstrating questionable moral character. Applicants currently vested with police powers are barred."
      },
      background: {
        method: "Fingerprinting through the CCHRS online portal (FLEXCHECK pre-enrollment with Idemia), with an FBI privacy-rights form",
        fee: "$75 state plus $12-$13.25 federal, paid online through FLEXCHECK",
        disqualifiers: "Any felony conviction; listed misdemeanor convictions within the past seven years; any moral-turpitude offense; questionable-condition military discharge",
        sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives"
      },
      fees: [
        { item: "Individual private detective license (initial 2 years)", fee: "$1,450", sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives" },
        { item: "Individual private detective license (2-year renewal)", fee: "$625", sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives" },
        { item: "Private detective agency license (initial / renewal, 2 years)", fee: "$1,750 initial / $1,000 renewal", sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives" },
        { item: "Employee registration", fee: "$40 one-time per registered investigator, plus fingerprint fees", sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives" },
        { item: "Fingerprints", fee: "$75 state + $13.25 federal via CCHRS/FLEXCHECK", sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives" },
        { item: "Surety bond and insurance", fee: "$10,000 performance surety bond (Form DPS-363-C) plus a $300,000 general liability policy", sourceUrl: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives" }
      ],
      application: {
        portal: "Paper application (Form DPS-366-C) filed with the Special Licensing and Firearms Unit",
        portalUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives",
        steps: [
          "Complete and notarize Form DPS-366-C and include two 2 x 2 passport-style photographs and proof of citizenship or permanent residency.",
          "Pre-enroll for fingerprints online through CCHRS/FLEXCHECK and pay the $75 state and $13.25 federal fees.",
          "Provide a three-year motor vehicle record, a recent credit bureau report, proof of high school education or equivalent, and a DD-214 if applicable.",
          "Arrange four character-reference letters sent directly to SLFU by the authors within 60 days, plus employer verification letters describing dates, duties, and reasons for leaving, sent directly by past employers.",
          "File the $10,000 bond on Form DPS-363-C and the $300,000 general liability certificate. Connecticut does not administer a written licensing examination; DESPP evaluates age, character, experience, and background."
        ],
        processingTime: "DESPP does not publish a processing time.",
        sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      },
      renewal: {
        cycle: "2 years",
        fee: "$625 individual / $1,000 agency (Form DPS-331-C)",
        sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$75,010", p25: "$42,130", p75: "$83,320", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=CT" },
      localNuance: "Connecticut issues a separate private detective-fire license with its own fee classification, and a license granted on the basis of municipal fire-department investigation experience is restricted to that type of investigation. Agency licensees must register every investigator employee, and corporate officials must be registered with SLFU even though they cannot work as investigators unless separately registered.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives" }
      ],
      stateFaqs: [
        { q: "Is there an exam for a Connecticut private detective license?", a: "No. DESPP does not list or administer a written licensing examination. Licensure turns on age (25), moral character, five years of full-time investigative experience or ten years as a police officer, and the fingerprint-based background checks." },
        { q: "What bond and insurance does Connecticut require?", a: "Applicants must post a $10,000 performance surety bond with the state on Form DPS-363-C and carry a $300,000 general liability policy before licensure. Anyone aggrieved by the licensee's acts may proceed against the bond to recover damages." },
        { q: "How much does a Connecticut PI license cost?", a: "An individual private detective license costs $1,450 for the initial two-year term and $625 for each two-year renewal. Agency licenses cost $1,750 initially and $1,000 to renew, with checks payable to Treasurer, State of Connecticut." },
        { q: "How do new investigators build qualifying experience in Connecticut?", a: "Most start as registered private investigators under a licensed detective, which requires only age 18, good moral character, and background checks, at a $40 registration fee. The full license later requires five years of full-time investigative experience, with up to one year substitutable for relevant coursework." }
      ],
      sources: [
        { label: "DESPP Special Licensing and Firearms - Private Detectives (fees and instructions)", url: "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives", checkedOn: "2026-10" },
        { label: "DESPP knowledge base - Private Detectives FAQ (qualifications)", url: "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives", checkedOn: "2026-10" },
        { label: "Connecticut PI license cost guide (License Navigator)", url: "https://licensenavigator.ai/blog/private-investigator-license-cost-connecticut", checkedOn: "2026-10" },
        { label: "Connecticut PI requirements overview (LegalClarity)", url: "https://legalclarity.org/how-to-become-a-private-investigator-in-ct-requirements", checkedOn: "2026-10" },
        { label: "O*NET local wages for Connecticut, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=CT", checkedOn: "2026-10" }
      ]
    },
    DE: {
      agency: "Delaware State Police (DSP), Professional Licensing Section",
      agencyUrl: "https://dsp.delaware.gov/tag/questions/?p=34",
      experience: "Individual private investigator licensees need no documented investigative experience; the gate is employment by a licensed Delaware agency. An agency license holder needs at least five years of investigative experience or five years as a police officer for any local, state, or federal agency (or equivalent with certification from a law-enforcement academy).",
      eligibility: {
        minAge: 21,
        other: "Individual licensees must be at least 21 and employed by a licensed private detective agency; agency license holders must be at least 25. Disqualifiers: any felony conviction; theft-, drug-, or moral-turpitude misdemeanors within the last seven years (no more than two in a lifetime, none arising from employment in the regulated field); juvenile felony adjudications; dishonorable military discharge; and membership or employment in a law-enforcement organization."
      },
      background: {
        method: "Fingerprint and photo appointment scheduled with IdentoGO (service code 27S48X for license holders), which forwards results to DSP Professional Licensing",
        fee: "$105 application fee paid through IdentoGO at the time of application",
        disqualifiers: "Felony convictions; theft-, drug-, or moral-turpitude misdemeanors within seven years; dishonorable discharge; law-enforcement membership",
        sourceUrl: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
      },
      fees: [
        { item: "Individual PI application or renewal", fee: "$105 nonrefundable, paid when registering with IdentoGO", sourceUrl: "https://dsp.delaware.gov/tag/questions/?p=34" },
        { item: "Replacement or agency-change card", fee: "$5", sourceUrl: "https://dsp.delaware.gov/tag/questions/?p=34" },
        { item: "Class A private investigative agency license", fee: "$300 in-state / $500 out-of-state / $250 sole proprietor", sourceUrl: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf" },
        { item: "Agency surety bond", fee: "$10,000 ($5,000 for sole proprietors), in the name of the agency", sourceUrl: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf" },
        { item: "Agency liability insurance", fee: "$1,000,000 commercial general liability per occurrence", sourceUrl: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf" }
      ],
      application: {
        portal: "Applications filed with DSP Professional Licensing; fingerprints through IdentoGO",
        portalUrl: "https://dsp.delaware.gov/tag/questions/?p=34",
        steps: [
          "For an individual license, secure employment (or a firm offer) from a licensed Delaware private detective agency; applications without agency employment are denied.",
          "Schedule a fingerprint and photo appointment with IdentoGO and pay the $105 application fee at the appointment.",
          "Agencies file the agency application, license-holder application with five character references, surety bond, and $1,000,000 liability certificate with Professional Licensing.",
          "Pick up the license identification card at the Dover State Bureau of Identification office (3-5 business days) or receive it by mail (about 10 business days). Delaware does not require an examination or outside training for individual PI licensees."
        ],
        processingTime: "3-5 business days for pickup at the Dover SBI office, or at least 10 business days by mail after approval.",
        sourceUrl: "https://dsp.delaware.gov/tag/questions/?p=34"
      },
      renewal: {
        cycle: "5 years",
        fee: "$105",
        late: "The license expires on the licensee's actual birthdate and must be valid to be replaced or transferred between agencies",
        sourceUrl: "https://dsp.delaware.gov/tag/questions/?p=34"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$55,710", p25: "$47,520", p75: "$67,800", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=DE" },
      localNuance: "PI licensing sits with the State Police Professional Licensing Section, not the Division of Professional Regulation, so it does not appear in the DELPROS portal. Delaware's recording-consent rules are a practical trap: Title 11 Section 2402 reads as one-party consent, but the Section 1335 privacy statute imposes all-party-consent liability, so investigators treat the state as all-party consent.",
      recentChanges: [
        { year: 2023, change: "DSP reissued the Class A Private Investigative Agency licensure instructions in August 2023, setting the in-state agency fee at $300 (with $500 for out-of-state agencies and $250 for sole proprietors), a $10,000 agency bond, and IdentoGO-based fingerprinting for license holders.", sourceUrl: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf" }
      ],
      stateFaqs: [
        { q: "Does Delaware require PI training or an exam?", a: "No. The DSP PI FAQ states that no outside training is required for the individual license, and no examination is administered. Employment by a licensed agency is the substantive gate, and the Board of Examiners reviews agency license-holder qualifications." },
        { q: "Can a Delaware PI carry a concealed firearm?", a: "No. The State Police FAQ is explicit that a Private Investigator license does not authorize concealed carry. Delaware's concealed-carry permit process is separate." },
        { q: "How long is a Delaware PI license valid?", a: "Five years, expiring on the licensee's actual birthdate. The license is portable between all Delaware-licensed private detective agencies, and moving between agencies requires a $5 replacement card processed at a State Bureau of Identification office." },
        { q: "What does an individual Delaware PI license cost?", a: "The application and renewal fee is $105, nonrefundable, paid through IdentoGO. The card itself is printed on site or mailed, and a replacement costs $5. Agency licenses cost $300 in state with a $10,000 bond and $1,000,000 liability insurance." }
      ],
      sources: [
        { label: "Delaware State Police - Private Investigator FAQ", url: "https://dsp.delaware.gov/tag/questions/?p=34", checkedOn: "2026-10" },
        { label: "DSP Class A Private Investigative Agency licensure instructions (August 2023)", url: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf", checkedOn: "2026-10" },
        { label: "DSP Class C agency procedures (2017, superseded fee reference)", url: "https://dsp.delaware.gov/wp-content/uploads/sites/118/2018/09/Class-C-Procedures-2017.pdf", checkedOn: "2026-10" },
        { label: "Delaware PI licensing overview (StartBusinessByState)", url: "https://startbusinessbystate.com?p=964/", checkedOn: "2026-10" },
        { label: "O*NET local wages for Delaware, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=DE", checkedOn: "2026-10" }
      ]
    },
    DC: {
      agency: "DC Department of Licensing and Consumer Protection (DLCP), Occupational and Professional Licensing Security Program",
      agencyUrl: "https://dlcp.dc.gov/page/security-program",
      experience: "DLCP publishes no minimum experience-hour requirement for the Private Detective credential; applications undergo suitability review under Title 17 of the DC Municipal Regulations, with Metropolitan Police Department fingerprinting and approval by the MPD Chief of Police.",
      eligibility: {
        other: "Individual private detective applicants must be District residents and hold a firm employment offer from a licensed DC detective agency, per the Security Program's application requirements. Fingerprints are taken by MPD, and a notarized arrest affidavit and authorization to release accompany the application."
      },
      background: {
        method: "Fingerprints scheduled directly with the Metropolitan Police Department (MPD), plus a notarized arrest affidavit and authorization-to-release form filed with DLCP",
        fee: "Not published on the DLCP fee schedule",
        disqualifiers: "Suitability is determined by MPD and DLCP under the District's security license laws and 17 DCMR; the arrest affidavit discloses criminal history for review",
        sourceUrl: "https://dlcp.dc.gov/page/security-program"
      },
      fees: [
        { item: "Private Detective (PD), individual - new application", fee: "$500", sourceUrl: "https://dlcp.dc.gov/page/security-program" },
        { item: "Private Detective (PD), individual - renewal", fee: "$500", sourceUrl: "https://dlcp.dc.gov/page/security-program" },
        { item: "Private Detective Business (PDB), agency - new application", fee: "$1,000", sourceUrl: "https://dlcp.dc.gov/page/security-program" },
        { item: "Private Detective Business (PDB), agency - renewal", fee: "$935", sourceUrl: "https://dlcp.dc.gov/page/security-program" },
        { item: "Private Detective Individual Business (PAI) - new / renewal", fee: "$500 / $412", sourceUrl: "https://dlcp.dc.gov/page/security-program" },
        { item: "Detective Agency basic business license (2-year)", fee: "$99", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-requirements-washington-dc" },
        { item: "Surety bond", fee: "$5,000 individual (17 DCMR Section 2003); agency bonds up to $25,000 under D.C. Code Section 5-121.01", sourceUrl: "https://code.dccouncil.gov/us/dc/council/code/sections/5-121.01" }
      ],
      application: {
        portal: "DLCP online occupational licensing application",
        portalUrl: "https://govservices.dcra.dc.gov/oplanewlicense",
        steps: [
          "Complete and notarize the arrest affidavit and authorization-to-release documents before applying.",
          "Schedule fingerprints with MPD (online or at 202-671-6705).",
          "Submit the Private Detective (PD), Private Detective Business (PDB), or PAI application with the fee through the DLCP portal.",
          "Clear the MPD background review and Chief of Police approval, then keep the required surety bond active. DLCP does not list an examination for the Private Detective credential; the $69 PSI exam on the program page applies to security officers."
        ],
        processingTime: "DLCP does not publish a processing time; applicant guidance notes the FBI background check alone can take up to two weeks.",
        sourceUrl: "https://dlcp.dc.gov/page/security-program"
      },
      renewal: {
        cycle: "2 years, with renewals due by October 31 of even-numbered years",
        fee: "$500 PD / $935 PDB / $412 PAI",
        late: "DLCP provides a 15-day grace period while renewal applications are being processed",
        sourceUrl: "https://dlcp.dc.gov/page/security-program"
      },
      reciprocity: {
        rule: "The District has no reciprocity agreement with Virginia or Maryland; a license from another jurisdiction does not authorize PI work in DC, and DC credentials are required to practice there.",
        agreements: null,
        sourceUrl: "https://licensenavigator.ai/blog/dc-private-investigator-license-requirements"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$72,720", p25: "$46,330", p75: "$107,920", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=DC" },
      localNuance: "Licensing is split: DLCP's Security Program issues the occupational credential, MPD's Security Officers Management Branch handles fingerprints and final approval, and a firm advertising as a detective agency also needs a Detective Agency basic business license and must print its license number in every advertisement (17 DCMR Section 2110.1). Firearms require separate MPD registration.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dlcp.dc.gov/page/security-program" }
      ],
      stateFaqs: [
        { q: "Do you need a license to be a private investigator in DC?", a: "Yes. Acting as a private detective requires a DLCP Security Program credential with MPD fingerprinting and Chief of Police approval under D.C. Code Section 47-2853.208 and Section 5-121.03. Working without compliance is subject to penalties." },
        { q: "Does DC require an exam or experience hours for private detectives?", a: "DLCP publishes no written exam or minimum experience hours for the Private Detective credential; suitability review under 17 DCMR governs. The $69 PSI exam listed on the Security Program page is for security officers, not private detectives." },
        { q: "What bonds do DC private detectives carry?", a: "Individual private detectives maintain a $5,000 corporate surety bond for the license term under 17 DCMR Section 2003. Detective agencies file a bond of up to $25,000 as authorized by D.C. Code Section 5-121.01." },
        { q: "Can a Virginia or Maryland PI work cases in DC?", a: "No. Licensing is jurisdiction-specific and DC has no reciprocity agreement with neighboring states. Investigators working District cases need the DC credential, and agencies that advertise also need the Detective Agency basic business license." }
      ],
      sources: [
        { label: "DLCP Security Program (fees, applications, renewals)", url: "https://dlcp.dc.gov/page/security-program", checkedOn: "2026-10" },
        { label: "DC License Navigator - DC PI license requirements", url: "https://licensenavigator.ai/blog/private-investigator-license-requirements-washington-dc", checkedOn: "2026-10" },
        { label: "DC License Navigator - DC PI guide (bonds, DCMR citations)", url: "https://licensenavigator.ai/blog/dc-private-investigator-license-requirements", checkedOn: "2026-10" },
        { label: "D.C. Code Section 5-121.01 (bond authority)", url: "https://code.dccouncil.gov/us/dc/council/code/sections/5-121.01", checkedOn: "2026-10" },
        { label: "O*NET local wages for District of Columbia, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=DC", checkedOn: "2026-10" }
      ]
    },
    FL: {
      agency: "Florida Department of Agriculture and Consumer Services (FDACS), Division of Licensing",
      agencyUrl: "https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses",
      exam: {
        vendor: "Everblue (FDACS-approved testing provider)",
        vendorUrl: "https://register.fdacs.onlinetestportal.com/",
        parts: [
          { name: "Chapter 493 private investigator examination", questions: "Question count not published", time: "1.5-2 hours", pass: "Not published" }
        ],
        fee: "$70, paid directly to Everblue at registration",
        practical: null,
        languages: ["English"],
        sourceUrl: "http://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf",
        sourceNote: "The exam covers Sections 493.6100 through 493.6203 and Section 493.6301(5), Florida Statutes -- the business practices and legal responsibilities of the private investigative industry. It is administered remotely online or at Everblue facilities, and preliminary results display immediately."
      },
      education: {
        hours: "40-hour professional training course for the Class CC intern path",
        breakdown: "The intern course covers general investigative techniques and Chapter 493, offered by a state university or a school under the Department of Education's purview; the certificate must accompany the Class CC application",
        onlineAllowed: "The Class CC training may be provided face-to-face, online, or as a home-study course under Department of Education rules",
        apprenticeship: "A Class CC intern serves a two-year internship under a designated sponsor holding a Class C, MA, or M license (Section 493.6203(6), F.S.)",
        sourceUrl: "http://leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6203.html//"
      },
      experience: "Two years of lawfully gained, verifiable, full-time experience: private investigative work or equivalent fields, up to one year of criminal-justice college coursework or law-enforcement training, time as a Class CC licensed intern, or any combination (Section 493.6203(4), F.S.). Bodyguard work is not creditable.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen, permanent legal resident, or holder of a work visa from US Citizenship and Immigration Services",
        other: "Good moral character, no disqualifying criminal history, and no history of mental illness, alcohol abuse, or substance abuse are required of all Chapter 493 applicants."
      },
      background: {
        method: "Electronic fingerprints submitted through an FDLE-approved vendor for the state and federal checks",
        fee: "$42 fingerprint processing plus $10.75 FDLE fingerprint retention, included in the initial fee total",
        disqualifiers: "Felony convictions and disqualifying criminal history under Chapter 493; a forcible-felony arrest triggers immediate suspension",
        sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
      },
      fees: [
        { item: "Application", fee: "$50", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida" },
        { item: "Class C license", fee: "$75 (statutory maximum under Section 493.6202, F.S.)", sourceUrl: "http://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html" },
        { item: "Fingerprints", fee: "$42 processing + $10.75 FDLE retention", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida" },
        { item: "Examination", fee: "$70 paid to Everblue", sourceUrl: "http://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf" },
        { item: "Class CC intern license", fee: "$60 license fee (statutory maximum) plus application and fingerprint fees", sourceUrl: "http://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html" },
        { item: "Renewal (2 years)", fee: "$75 plus $16.75 fingerprint retention", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida" }
      ],
      application: {
        portal: "FDACS Division of Licensing (paper or online submission)",
        portalUrl: "https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses",
        steps: [
          "Pass the Chapter 493 examination through Everblue before applying; proof of passing must accompany the application.",
          "Complete the Class C application (FDACS-16018) and the Affidavit of Experience (FDACS-16023) documenting two years of qualifying experience.",
          "Include a passport-style color photo taken within six months and electronic fingerprints from an FDLE-approved vendor.",
          "Hold or take a position with a licensed Class A/AA/AB private investigative agency, as the Class C application requires affiliation with a licensed agency.",
          "Initial FDACS fees total $177.75 ($50 application + $75 license + $42 fingerprints + $10.75 retention), plus the $70 exam paid to Everblue. Veterans applying within 24 months of discharge receive a waiver of the initial license fee with a DD-214."
        ],
        processingTime: "One to three months depending on application volume and whether the background review flags anything.",
        sourceUrl: "https://legalclarity.org/class-c-private-investigator-license-requirements-in-florida"
      },
      renewal: {
        cycle: "2 years",
        ce: "14 hours of approved continuing education every two years, including at least 2 hours of ethics",
        fee: "$75 plus $16.75 fingerprint retention ($91.75 total)",
        sourceUrl: "https://legalclarity.org/how-to-become-a-detective-in-florida/"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$50,640", p25: "$38,120", p75: "$64,080", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=FL" },
      localNuance: "A Class C or CC license never authorizes carrying a firearm on duty; armed work requires a separate Class G Statewide Firearm License with 28 hours of initial training and 4 hours of annual requalification. Applicants without experience start with the Class CC intern license (40-hour course plus two-year sponsored internship), and Florida issued 6,929 Class C licenses as of October 31, 2025.",
      recentChanges: [
        { year: 2026, change: "FDACS reissued the Class C Private Investigator application packet (FDACS-16018, rev. 03/2026) with updated experience documentation requirements.", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida" }
      ],
      stateFaqs: [
        { q: "When must the Florida PI exam be taken?", a: "Before applying. Section 493.6203(5), F.S. requires Class C, MA, and M applicants to pass the Chapter 493 examination before submitting the license application, and proof of passing must be included in the packet. The exam is administered by Everblue for $70, remotely or at its facilities." },
        { q: "What does the Florida PI exam cover?", a: "It tests Sections 493.6100 through 493.6203 and Section 493.6301(5) of the Florida Statutes -- the licensing framework, business practices, prohibited conduct, and legal responsibilities of individuals and agencies. FDACS publishes Chapter 493 and the Private Investigator Handbook as study materials." },
        { q: "How does the Class CC intern path work?", a: "Applicants without two years of experience complete a 40-hour professional training course, then intern under a Class C, MA, or M sponsor for two years with a Class CC license ($60 license fee). The internship plus a sponsor recommendation leads to Class C eligibility." },
        { q: "Can a Florida PI carry a gun on duty?", a: "Only with a separate Class G Statewide Firearm License, which requires 28 hours of initial training and 4 hours of annual requalification, and only when duties and the employing agency require it. Open carry is prohibited." }
      ],
      sources: [
        { label: "FDACS examination FAQ for PI/PI manager licenses (Everblue)", url: "http://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf", checkedOn: "2026-10" },
        { label: "Section 493.6203, Florida Statutes - license requirements", url: "http://leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/493.6203.html//", checkedOn: "2026-10" },
        { label: "Section 493.6202, Florida Statutes - fees", url: "http://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html", checkedOn: "2026-10" },
        { label: "Florida Class C fee breakdown (License Navigator)", url: "https://licensenavigator.ai/blog/private-investigator-license-cost-florida", checkedOn: "2026-10" },
        { label: "Florida PI licensing overview (LegalClarity)", url: "https://legalclarity.org/class-c-private-investigator-license-requirements-in-florida", checkedOn: "2026-10" },
        { label: "O*NET local wages for Florida, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=FL", checkedOn: "2026-10" }
      ]
    },
    GA: {
      agency: "Georgia State Board of Private Detective and Security Agencies (Secretary of State)",
      agencyUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
      exam: {
        vendor: "PSI",
        vendorUrl: "https://candidate.psiexams.com/",
        parts: [
          { name: "Private Detective Licensure Examination", questions: "Question count not published", time: "About 3 hours, closed book", pass: "Set by the Board" }
        ],
        fee: "$125",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
        sourceNote: "Content areas per the Board's application information sheet: legal, ethical, and professional standards; observation/surveillance; rules of evidence and evidence handling; interviewing/interrogation; and case management, administration, and reporting. The $125 fee appears in the PSI candidate information bulletin. Applicants may retake the exam, but not more than three times without a new application (Rule 509-2-.02)."
      },
      education: {
        hours: "70-hour basic training course for registered private detective employees",
        breakdown: "Board Rule 509-3-.06 prescribes the curriculum, covering Georgia law, surveillance, evidence handling, interviewing, and professional ethics; the course must come from a Board-approved instructor",
        onlineAllowed: "Not specified by the Board",
        apprenticeship: "New employees are hired by a licensed company at age 18 or older with no experience prerequisite; the company must submit the employee registration application within 30 days of hiring and is responsible for Board-approved training",
        sourceUrl: "https://privateinvesticatoredu.org/georgia/"
      },
      experience: "Company (agency) license applicants need two years of experience as a licensed private detective with a licensed agency, two years in law enforcement with a federal, state, county, or municipal agency, or a four-year criminal justice or related degree from an accredited university (Rule 509-2-.02). Full-time means at least 30 hours per week.",
      eligibility: {
        other: "Licenses are issued to companies; the applicant must be the owner, a partner, or an officer or member of the entity, documented with certified corporate paperwork. Employees must be at least 18 and registered by the company under O.C.G.A. 43-38-7."
      },
      background: {
        method: "GAPS (Georgia Applicant Processing Service) fingerprint scanning; applicants are emailed after Board review and must complete prints within 90 days or the registration is canceled and refunded",
        fee: "Paid through GAPS at the fingerprint site; the Board does not publish the amount on the application sheet",
        disqualifiers: "Felony convictions and misdemeanors involving moral turpitude or illegal weapon use are grounds for denial under O.C.G.A. 43-38-6, assessed case by case",
        sourceUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
      },
      fees: [
        { item: "Application", fee: "$100", sourceUrl: "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license" },
        { item: "Private Detective Company license", fee: "$300", sourceUrl: "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license" },
        { item: "Examination (PSI)", fee: "$125", sourceUrl: "https://privateinvesticatoredu.org/georgia/" },
        { item: "Employee registration", fee: "$45 per unarmed employee / $70 per armed employee", sourceUrl: "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license" },
        { item: "Surety bond", fee: "$25,000 bond (or a $1,000,000 general liability certificate naming the Board, or a certified audited financial statement showing net worth above $50,000)", sourceUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf" }
      ],
      application: {
        portal: "GOALS (Georgia licensing portal), with paper application materials mailed to the Board office in Macon",
        portalUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
        steps: [
          "Complete the Applicant Registration Form with a personal email address; third-party or agency email addresses are not permitted.",
          "Submit an original notarized letter of experience from the employer (with POST certification details for law-enforcement experience) or a certified sealed transcript for degree applicants.",
          "After Board processing, complete GAPS fingerprinting within 90 days of the notification email.",
          "Pass the PSI Private Detective examination; all company applicants must take it regardless of experience or out-of-state licensure.",
          "After passing, pay the license fee and file the $25,000 surety bond, $1,000,000 liability certificate, or audited net-worth statement. The Board does not publish a processing time; complete applications are typically reviewed in about 6 to 8 weeks."
        ],
        processingTime: "The Board does not publish a processing time; licensing guides report roughly 6 to 8 weeks for complete applications.",
        sourceUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
      },
      renewal: {
        cycle: "2 years",
        fee: "Company renewal fees are set by the Board's published fee schedule; renewals open 90 days before expiration through the GOALS portal",
        late: "Late renewals carry a higher fee (guides report $800 versus the on-time amount for company licenses)",
        sourceUrl: "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license"
      },
      reciprocity: {
        rule: "Georgia has Limited License Recognition Agreements allowing properly licensed investigators from partner states to work in Georgia up to 30 days per calendar year on cases originating in their home state (O.C.G.A. 43-38-15). Company-license applicants must still pass the Georgia examination; no reciprocity exempts anyone from the exam.",
        agreements: ["California", "Florida", "North Carolina", "Louisiana", "Oklahoma", "Virginia", "Tennessee", "Alabama"],
        sourceUrl: "https://privateinvesticatoredu.org/georgia/"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$45,060", p25: "$38,650", p75: "$59,950", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=GA" },
      localNuance: "Georgia licenses companies, not individual investigators; working PIs are registered employees of a licensed company and carry no personal license. Registered employees must complete the Board's 70-hour basic training course before performing investigative work, and all applications run through the GOALS portal with GAPS fingerprinting.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf" }
      ],
      stateFaqs: [
        { q: "Can an individual get a private investigator license in Georgia?", a: "No. Licenses are issued only to companies, with a qualified owner, partner, officer, or member as license holder. Working investigators are registered employees of a licensed company, registered at $45 (unarmed) or $70 (armed) per employee." },
        { q: "Does Georgia waive the exam for experienced or out-of-state investigators?", a: "No. Every company-license applicant must take the PSI examination, regardless of years of experience or licensure in other states. Reinstatement applicants who have not passed within the last five years must retake it." },
        { q: "What are the financial requirements for a Georgia PI company?", a: "After passing the exam, the applicant files the license fee plus one of three financial proofs: an original $25,000 surety bond, a $1,000,000 general liability certificate naming the Board, or a certified audited financial statement showing net worth above $50,000 (which requires prior Board review)." },
        { q: "What training do Georgia PI employees need?", a: "Registered employees must complete the Board's 70-hour basic training course from a Board-approved instructor, covering criminal law, surveillance, evidence handling, interviewing, and Georgia rules. The company is responsible for the training and for registering the employee within 30 days of hire." }
      ],
      sources: [
        { label: "Georgia Board - Agency (Company) License application information sheet", url: "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf", checkedOn: "2026-10" },
        { label: "Georgia Board Rules, Department 509 (Rule 509-2-.02 qualifications and exam)", url: "https://rules.sos.state.ga.us/download_pdf.aspx?st=GASOS&year=2024&dept=Departments&pdf=Department%20509%20GEORGIA%20BOARD%20OF%20PRIVATE%20DETECTIVE%20AND%20SECURITY%20AGENCIES", checkedOn: "2026-10" },
        { label: "Georgia PI licensing guide (PrivateInvestigatorEdu)", url: "https://privateinvesticatoredu.org/georgia/", checkedOn: "2026-10" },
        { label: "Georgia PI license steps and fees (SuretyBonds)", url: "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license", checkedOn: "2026-10" },
        { label: "GAPPI FAQ (Georgia Association of Professional Private Investigators)", url: "https://www.gappi.org/faq", checkedOn: "2026-10" },
        { label: "O*NET local wages for Georgia, SOC 33-9021", url: "https://www.onetonline.org/link/localwages/33-9021.00?st=GA", checkedOn: "2026-10" }
      ]
    }
  }
};
