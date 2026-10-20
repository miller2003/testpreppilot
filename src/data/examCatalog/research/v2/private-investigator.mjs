// v2 per-state research increment — private-investigator
// Merged from 5 research fragment(s) on 2026-10-20
// by the state-pages flagship program (see reports/STATE-PAGES-FLAGSHIP-PLAN-2026-10-20.md).
// Wages: BLS OEWS May 2025 state tables via O*NET OnLine localwages pages.
// Field contract: src/data/examCatalog/RESEARCH_SCHEMA.md ("v2 per-state research increment").

export default {
  key: 'private-investigator',
  compiledOn: '2026-10-20',
  states: {
  "AL": {
    "agency": "Alabama Private Investigation Board (APIB)",
    "agencyUrl": "https://www.apib.alabama.gov/",
    "exam": {
      "vendor": "State board (Alabama Private Investigation Board)",
      "vendorUrl": "https://www.apib.alabama.gov/",
      "fee": "Not published separately from the application fee",
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf",
      "sourceNote": "Section 34-25B-12 requires passing an examination administered by the board twice annually. The board provides a study guide to applicants and does not publish a question count, time limit, or passing score."
    },
    "experience": "Applicant guidance calls for two years of experience, education, or training in the investigation field, including 120 hours of practical field experience; qualifying backgrounds include special investigations work, prior law enforcement, or a two-year related degree.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "Proof of citizenship is submitted with the application",
      "other": "No felony convictions and no conviction of a crime of moral turpitude (the board makes the final interpretation); the applicant must not have been declared incompetent by a court unless later declared competent."
    },
    "background": {
      "method": "Three sets of classifiable fingerprints submitted through the Alabama Law Enforcement Agency (ALEA) for state and FBI checks",
      "fee": "$37 ALEA background-check fee",
      "disqualifiers": "Felony convictions and crimes of moral turpitude",
      "sourceUrl": "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf"
    },
    "fees": [
      {
        "item": "Application",
        "fee": "$100 nonrefundable application fee to the board",
        "sourceUrl": "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/"
      },
      {
        "item": "Background check",
        "fee": "$37 paid to ALEA for state and FBI fingerprint comparison",
        "sourceUrl": "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/"
      },
      {
        "item": "Agency license (2 years)",
        "fee": "Statutory caps: up to $50 for agencies with 2 or fewer licensed investigators, up to $200 for agencies with 3 or more, up to $500 for out-of-state agencies",
        "sourceUrl": "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf"
      },
      {
        "item": "Renewal late fee",
        "fee": "Up to $200 administrative late fee after expiration",
        "sourceUrl": "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf"
      }
    ],
    "application": {
      "portal": "Paper application filed with the board",
      "portalUrl": "https://www.apib.alabama.gov/",
      "steps": [
        "Download the application from the board and list all residences, employment, convictions, and pending charges for the past five years.",
        "Submit three classifiable fingerprint sets, a photograph, proof of citizenship, and the $100 application fee plus the $37 ALEA background-check fee.",
        "Sit for the board examination, which is administered twice each year; a study guide is provided.",
        "After board approval, pay the license fee and receive the private investigator license."
      ],
      "processingTime": "The board does not publish a processing time.",
      "sourceUrl": "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "Set by board rule; agency license fees are capped at $50-$200 in state (see fees)",
      "late": "A late fee of up to $200 applies to renewals postmarked after expiration, and renewal applications are not accepted more than 30 days after expiration unless the board waives the deadline",
      "sourceUrl": "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$46,810",
      "p25": "$37,740",
      "p75": "$52,610",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=AL"
    },
    "localNuance": "Alabama licenses individuals and, since January 1, 2024, private investigation agencies separately. Agencies must display their license number on advertisements, letterhead, reports, and invoices, and each invoice must show the license number and billed time of every licensee whose services are charged.",
    "recentChanges": [
      {
        "year": 2023,
        "change": "The 2023 rewrite of the Alabama Private Investigation Regulatory Act (HB75, Act 2023-306) required business entities conducting private investigations to hold an agency license beginning January 1, 2024, set agency fee caps at $50-$200 in state and $500 out of state, and added a late fee of up to $200 with a 30-day post-expiration renewal window.",
        "sourceUrl": "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How often is the Alabama private investigator exam offered?",
        "a": "The Alabama Private Investigation Board administers its own examination twice each year under Section 34-25B-12 of the Private Investigation Regulatory Act. A study guide is provided to every applicant, and the board does not publish a question count or passing score."
      },
      {
        "q": "What are the basic eligibility rules in Alabama?",
        "a": "Applicants must be at least 21, submit proof of citizenship, and pass state and FBI fingerprint checks through ALEA. A felony conviction or a crime of moral turpitude disqualifies an applicant, with the board making the final call on moral turpitude."
      },
      {
        "q": "Do agencies need a separate Alabama license?",
        "a": "Yes. Since January 1, 2024, any business entity conducting private investigations must hold an agency license. Statutory caps limit the fee to $50 for agencies with two or fewer licensed investigators, $200 for larger in-state agencies, and $500 for out-of-state agencies."
      },
      {
        "q": "What happens if an Alabama PI license lapses?",
        "a": "A renewal postmarked after expiration draws an administrative late fee of up to $200. The board will not accept a renewal application more than 30 days after expiration unless it waives the deadline for good cause, so a lapsed licensee may need to reapply."
      }
    ],
    "sources": [
      {
        "label": "Alabama Private Investigation Regulatory Act (Chapter 25B)",
        "url": "https://www.apib.alabama.gov/PDF/law/CHAPTER_25B.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "HB75 (2023) - Alabama Private Investigation Regulatory Act rewrite",
        "url": "https://www.legislature.state.al.us/pdf/SearchableInstruments/2023RS/HB75-enr.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Alabama Private Investigation Board",
        "url": "https://www.apib.alabama.gov/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Alabama PI rules and licensing overview (LegalClarity)",
        "url": "https://legalclarity.org/alabama-private-investigator-rules-and-licensing/",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Alabama, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=AL",
        "checkedOn": "2026-10"
      }
    ]
  },
  "AZ": {
    "agency": "Arizona Department of Public Safety (DPS), Security Guard & Private Investigator Licensing Unit",
    "agencyUrl": "https://licensing.azdps.gov/contact-0",
    "experience": "The agency's qualifying party needs at least three years of full-time investigative experience, or the equivalent, gained with private, federal, state, county, or municipal entities (A.R.S. Section 32-2422(A)).",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizenship or lawful residency is required",
      "other": "Statutory character standards apply to the qualifying party under A.R.S. Section 32-2422, including disqualification for felonies and recent specified misdemeanors. Registered PI employees must be at least 18 (A.R.S. Section 32-2441)."
    },
    "background": {
      "method": "Fingerprint card plus the Fingerprint Affidavit form, sealed in a single envelope, submitted with the application",
      "fee": "$22 fingerprint processing fee",
      "disqualifiers": "Felony convictions and recent specified misdemeanors under A.R.S. Section 32-2422",
      "sourceUrl": "https://licensing.azdps.gov/contact-0"
    },
    "fees": [
      {
        "item": "Agency application",
        "fee": "$250",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Agency license",
        "fee": "$400",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Agency license renewal",
        "fee": "$250",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Private investigator registration (new or renewal)",
        "fee": "$50",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Additional employer registration",
        "fee": "$10",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Fingerprint processing",
        "fee": "$22",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Surety bond",
        "fee": "$2,500 continuous four-year bond in the agency name (A.R.S. Section 32-2423)",
        "sourceUrl": "https://licensing.azdps.gov/contact-0"
      }
    ],
    "application": {
      "portal": "DPS Public Services Portal (PSP)",
      "portalUrl": "https://licensing.azdps.gov/",
      "steps": [
        "Obtain approval of the agency name from the Licensing Unit before filing with the Arizona Secretary of State.",
        "Submit the agency application, fingerprints, fingerprint affidavit, and fees through the Public Services Portal.",
        "Wait for the Licensing Unit's approval notice before purchasing the $2,500 surety bond and workers' compensation insurance.",
        "Register each private investigator employee ($50) after the agency license is issued; Arizona does not prescribe a written examination for PI agency licensure or employee registration."
      ],
      "processingTime": "About 15 business days after submission (5 days administrative completeness review plus 10 days substantive review under A.A.C. R13-2-105).",
      "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
    },
    "renewal": {
      "cycle": "4 years",
      "fee": "$250 agency renewal; $50 per private investigator registration renewal",
      "late": "$100 agency late renewal fee; $10 associate late renewal fee; renewals are accepted up to 180 days before expiration",
      "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$61,030",
      "p25": "$41,450",
      "p75": "$79,790",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=AZ"
    },
    "localNuance": "Arizona issues the agency license to a qualifying party rather than to the business entity, and PI employee registrations expire with the employing agency's four-year license. First-time applicants whose family income is at or below 200 percent of the federal poverty level, active-duty military spouses, and recently discharged veterans can have the initial license fee waived under A.R.S. 41-1080.01, though the $22 fingerprint fee still applies.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "Effective July 8, 2026, any fingerprints received by DPS must be accompanied by the completed Fingerprint Affidavit form and fingerprint card sealed in a single envelope; packets received in any other form are rejected.",
        "sourceUrl": "https://licensing.azdps.gov/contact-0"
      },
      {
        "year": 2026,
        "change": "The Licensing Unit is transitioning to a new licensing system with service disruptions, and any form or application signed and received after July 1, 2026 must be the newest version or it will be rejected.",
        "sourceUrl": "https://licensing.azdps.gov/contact-0"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Arizona require a private investigator exam?",
        "a": "No. Arizona PI agency licensure is based on the qualifying party's three years of investigative experience, character standards, fingerprints, and the $2,500 surety bond under A.R.S. Title 32, Chapter 24. No written examination is prescribed for agency licensure or employee registration."
      },
      {
        "q": "How long is an Arizona PI license valid?",
        "a": "Agency licenses and the employee registrations tied to them run on four-year cycles. DPS accepts renewal applications up to 180 days before expiration, and the agency renewal fee is $250 with a $100 late fee."
      },
      {
        "q": "What does an Arizona PI agency pay in state fees?",
        "a": "The agency application is $250, the agency license is $400, and each private investigator registration is $50, plus a $22 fingerprint processing fee. All fees are nonrefundable under A.A.C. R13-2-102."
      },
      {
        "q": "Who qualifies for an Arizona initial-license fee waiver?",
        "a": "Under A.R.S. 41-1080.01, first-time applicants whose family income does not exceed 200 percent of the federal poverty guidelines, active-duty military spouses, and honorably discharged veterans discharged within the previous two years can have the initial license fee waived. The $22 fingerprint fee still applies."
      }
    ],
    "sources": [
      {
        "label": "Arizona DPS Licensing (fees and FAQ)",
        "url": "https://www.azdps.gov/services/public-services-center/licensing",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arizona DPS Security Guard & Private Investigator Licensing Unit",
        "url": "https://licensing.azdps.gov/contact-0",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arizona DPS SGPI Licensing (fee schedule)",
        "url": "https://www.azdps.gov/services/public-services-center/sgpi-licensing",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arizona PI licensing overview (License Navigator)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arizona",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Arizona, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=AZ",
        "checkedOn": "2026-10"
      }
    ]
  },
  "AR": {
    "agency": "Arkansas State Police, Regulatory Services Division (Private Investigators / Security / Alarm)",
    "agencyUrl": "https://dps.arkansas.gov/?p=6133",
    "exam": {
      "vendor": "Arkansas State Police (in-house, proctored)",
      "vendorUrl": "https://dps.arkansas.gov/?p=6133",
      "parts": [
        {
          "name": "Private investigator examination",
          "questions": "Minimum 100 scored",
          "time": "Not published",
          "pass": "70%"
        }
      ],
      "fee": "$50 re-examination fee when the State Police administers the retake",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402",
      "sourceNote": "17 CAR Section 350-1103: the exam covers the subjects in 17 CAR 350-1102, the licensing part, field note taking and report writing, and the Arkansas Criminal Code; it is taken in person."
    },
    "education": {
      "hours": "No standalone pre-licensing training hours for the Credentialed Private Investigator credential",
      "breakdown": "Company-license applicants who do not meet the manager experience threshold must complete a 210-hour course of instruction covering criminal law, civil law, security functions, supervision and management, and related subjects",
      "onlineAllowed": "Not applicable",
      "apprenticeship": "A CPI works under the supervision of a qualified manager of a Class A investigations company, who provides on-the-job training",
      "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-arkansas"
    },
    "experience": "No set experience hours for a CPI credential; the credential holder must work under a qualified manager of a Class A investigations company. Five consecutive years of law-enforcement experience, current or ended within the last five years, exempts an applicant from the examination (17 CAR Section 350-1103(g)).",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Non-US citizens must attach current, valid proof of eligibility to work in the United States",
      "other": "Applicants cannot be suffering from habitual drunkenness or narcotics addiction or dependence, cannot have a dishonorable military discharge, cannot have been adjudicated mentally incompetent or involuntarily committed, and cannot be registered sex offenders (A.C.A. Section 17-40-306)."
    },
    "background": {
      "method": "Two classifiable fingerprint cards submitted with the application; the State Police run state and FBI criminal history checks",
      "fee": "$22 state check plus $14.25 in FBI fees ($36.25 total)",
      "disqualifiers": "Convictions listed in the disqualifying statutes block licensure; sealed or expunged convictions still disqualify unless the applicant receives a pardon under the governor's clemency authority",
      "sourceUrl": "https://dps.arkansas.gov/?p=6133"
    },
    "fees": [
      {
        "item": "CPI application",
        "fee": "$450 nonrefundable",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arkansas"
      },
      {
        "item": "Background checks",
        "fee": "$36.25 ($22 state plus $14.25 FBI)",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas"
      },
      {
        "item": "CPI renewal (2 years)",
        "fee": "$150 plus new fingerprint and background-check fees",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas"
      },
      {
        "item": "Re-examination",
        "fee": "$50 if administered by the Division of Arkansas State Police",
        "sourceUrl": "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402"
      }
    ],
    "application": {
      "portal": "Paper application filed with the Arkansas State Police Regulatory Services Division",
      "portalUrl": "https://dps.arkansas.gov/?p=6133",
      "steps": [
        "Secure employment with a Class A investigations company; the CPI application must be filed within 14 calendar days of hire (A.C.A. Section 17-40-325).",
        "Submit the CPI application with two passport-style photos, two classifiable fingerprint cards, the Authority to Release form, and the $450 fee plus background-check fees.",
        "Take the proctored examination, administered Tuesdays at 9:00 a.m. at Little Rock State Police Headquarters; study material is Act 393 of 2015 and the Private Security & Alarm Service Rules.",
        "Receive the credential; since August 5, 2025, identification cards are disseminated electronically by email, and the credential must be produced on request while working."
      ],
      "processingTime": "The Division does not publish a processing time.",
      "sourceUrl": "https://dps.arkansas.gov/?p=6133"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "$150 plus new fingerprints and background-check fees",
      "late": "Renew within the 90 days before expiration on the ASP renewal form",
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-arkansas"
    },
    "reciprocity": {
      "rule": "Arkansas maintains reciprocal agreements relating to private investigator licenses issued by Tennessee, Louisiana, and Oklahoma, per the State Police program page.",
      "agreements": [
        "Tennessee",
        "Louisiana",
        "Oklahoma"
      ],
      "sourceUrl": "https://dps.arkansas.gov/?p=6133"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$47,750",
      "p25": "$37,970",
      "p75": "$69,990",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=AR"
    },
    "localNuance": "A CPI credential alone does not authorize independent practice; investigators must operate under a Class A investigations company. Entrepreneurs instead license a Class A company, whose qualified manager must pass the same state exam, and no individual bond applies to a CPI (insurance minimums attach to certain company license classes).",
    "recentChanges": [
      {
        "year": 2026,
        "change": "The federal background-check fee increases from $10 to $13 effective October 1, 2026, and all previous versions of PI-Security applications become invalid on that date; updated applications display a 10-2026 effective date.",
        "sourceUrl": "https://dps.arkansas.gov/?p=6133"
      },
      {
        "year": 2025,
        "change": "Effective August 5, 2025, Arkansas State Police identification cards for credentialed investigators are disseminated electronically via email rather than in paper form.",
        "sourceUrl": "https://dps.arkansas.gov/?p=6133"
      }
    ],
    "stateFaqs": [
      {
        "q": "When and where is the Arkansas PI exam given?",
        "a": "The State Police administer the exam in person on Tuesdays at 9:00 a.m. at Little Rock State Police Headquarters. The study material is Act 393 of 2015 and the Private Security & Alarm Service Rules, excluding polygraph and voice-stress material."
      },
      {
        "q": "Who is exempt from the Arkansas PI exam?",
        "a": "Applicants with five consecutive years of law-enforcement experience who are currently employed in law enforcement or retired or left within the last five years are exempt under 17 CAR Section 350-1103(g). A confirming letter from the department is required."
      },
      {
        "q": "How much does a first Arkansas CPI credential cost?",
        "a": "The application fee is $450 plus $36.25 in state and FBI background-check fees, for a total of about $486.25. Renewal every two years is $150 plus new background-check fees."
      },
      {
        "q": "Does Arkansas recognize other states' PI licenses?",
        "a": "Yes. The State Police maintain reciprocal agreements with Tennessee, Louisiana, and Oklahoma. Investigators licensed elsewhere apply through the standard process, and Arkansas does not issue temporary permits for short-term out-of-state work."
      }
    ],
    "sources": [
      {
        "label": "Arkansas State Police - Private Investigators / Security / Alarm program page",
        "url": "https://dps.arkansas.gov/?p=6133",
        "checkedOn": "2026-10"
      },
      {
        "label": "17 CAR Section 350-1103 - Private investigator examination (Code of Arkansas Rules)",
        "url": "https://codeofarrules.arkansas.gov/Rules/Rule?levelType=section&titleID=17&chapterID=284&subChapterID=403&partID=1084&subPartID=7411&sectionID=48402",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arkansas PI license guide (License Navigator)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-arkansas",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arkansas PI licensing requirements (LegalClarity)",
        "url": "https://legalclarity.org/private-investigator-arkansas-licensing-laws/",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Arkansas, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=AR",
        "checkedOn": "2026-10"
      }
    ]
  },
  "CA": {
    "agency": "California Bureau of Security and Investigative Services (BSIS)",
    "agencyUrl": "https://www.bsis.ca.gov/forms_pubs/pi_fact",
    "exam": {
      "vendor": "PSI (state-contracted testing vendor)",
      "vendorUrl": "https://www.bsis.ca.gov/forms_pubs/pi_fact",
      "parts": [
        {
          "name": "Private investigator qualifying examination",
          "questions": "Question count not published by BSIS",
          "time": "120 minutes",
          "pass": "Not published"
        }
      ],
      "fee": "$50 application and exam fee paid to BSIS with the application",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/pi_fact",
      "sourceNote": "BSIS factsheet: a two-hour multiple-choice examination covering laws and regulations, terminology, civil and criminal liability, evidence handling, undercover investigations, and surveillance. Scheduling is handled through PSI after BSIS approves eligibility."
    },
    "education": {
      "hours": "6,000 hours (three years) of compensated investigative experience",
      "breakdown": "A law degree or a completed four-year police science course plus two years (4,000 hours) qualifies; an associate degree in police science, criminal law, or justice plus two and a half years (5,000 hours) qualifies. The BSIS FAQ credits 2,000 hours for a law or bachelor's degree and 1,000 hours for an associate degree.",
      "onlineAllowed": "Not applicable -- the requirement is compensated experience, not coursework",
      "apprenticeship": "Qualifying employment includes sworn law enforcement, military police, insurance adjusting, employment by a licensed PI or licensed repossessor, arson investigation for a public fire agency, and public defender office investigation. Process serving, records research, and debt collection do not count.",
      "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/pi_fact"
    },
    "experience": "Three years (6,000 hours) of compensated investigative experience, with degree substitutions reducing the requirement to 5,000 or 4,000 hours; experience must be certified by the employer (Business and Professions Code Chapter 11.3).",
    "eligibility": {
      "minAge": 18,
      "other": "Applicants must undergo DOJ and FBI criminal history checks. Per FBI guidelines, the application must be submitted to BSIS before completing the Live Scan background check, and the check is required even for holders of other BSIS licenses."
    },
    "background": {
      "method": "Live Scan fingerprinting submitted to the California Department of Justice and the FBI",
      "fee": "$32 DOJ plus $17 FBI processing, paid at the time of fingerprinting (plus the Live Scan site's rolling fee)",
      "disqualifiers": "Felony and disqualifying misdemeanor history; BSIS evaluates criminal history on every PI application regardless of other BSIS credentials held",
      "sourceUrl": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
    },
    "fees": [
      {
        "item": "Application and exam",
        "fee": "$50",
        "sourceUrl": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
      },
      {
        "item": "Initial license (2 years)",
        "fee": "$175, paid after notification that the exam was passed",
        "sourceUrl": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$125",
        "sourceUrl": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
      },
      {
        "item": "Fingerprint processing",
        "fee": "$32 DOJ + $17 FBI",
        "sourceUrl": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862"
      }
    ],
    "application": {
      "portal": "BreEZe",
      "portalUrl": "https://www.bsis.ca.gov/",
      "steps": [
        "Submit the application (Form 31B-4), two passport-quality photographs, the employer-certified experience certification (Form 31B-8), and the $50 fee through BreEZe or by mail; BreEZe submission can cut processing by up to two weeks.",
        "Complete Live Scan fingerprinting for the DOJ and FBI checks only after the application has been submitted, and keep the Live Scan form showing the ATI number.",
        "After BSIS verifies eligibility, schedule the two-hour multiple-choice examination with PSI at one of its California test centers.",
        "Upon passing, submit the $175 license fee to receive the license."
      ],
      "processingTime": "About 120 days on average per the state labor market information listing; BSIS notes BreEZe filing bypasses the cashiering office and can reduce processing time by up to two weeks.",
      "sourceUrl": "https://bsis.ca.gov/consumers/faqs/pi.shtml"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "None for the PI license; firearms permit holders complete periodic requalification",
      "fee": "$125",
      "late": "The license becomes delinquent 30 days after expiration and can be renewed up to three years after expiration; after three years a new application is required",
      "sourceUrl": "https://bsis.ca.gov/consumers/faqs/pi.shtml"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$61,250",
      "p25": "$45,380",
      "p75": "$82,110",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=CA"
    },
    "localNuance": "Carrying a gun on duty requires a separate BSIS firearms permit (US citizenship or permanent residency, age 21, an 8-hour power-to-arrest course, and a 14-hour firearms course), and a BSIS permit still does not authorize concealed carry without a local CCW. PIs may protect persons only when incidental to an investigation, never property, and LLC-organized firms must carry errors-and-omissions insurance.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "BSIS implemented a 10 percent increase to all eligible licensing fees effective October 1, 2025, amending CCR sections 638 through 642.5; applications postmarked before October 1, 2025 kept the prior fee amounts, so current application, license, and renewal charges differ from the pre-increase figures.",
        "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/notice_fee_increase.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "What does the California PI exam cover?",
        "a": "It is a two-hour multiple-choice test administered through PSI covering laws and regulations, terminology, civil and criminal liability, evidence handling, undercover investigations, and surveillance. BSIS approves eligibility first and then sends scheduling instructions."
      },
      {
        "q": "How do degrees reduce California's experience requirement?",
        "a": "The base requirement is 6,000 hours (three years) of compensated investigative experience. A law degree or bachelor's degree credits 2,000 hours, cutting the requirement to 4,000 hours, and an associate degree in police science, criminal law, or justice credits 1,000 hour for a 5,000-hour requirement."
      },
      {
        "q": "Does California require a bond for private investigators?",
        "a": "No surety bond is required for individual PI licensees. LLC-organized firms must carry errors-and-omissions insurance, and PIs who carry a firearm and provide armed bodyguard services incidental to an investigation need $1,000,000 in commercial general liability coverage."
      },
      {
        "q": "What happens if a California PI license expires?",
        "a": "The license becomes delinquent 30 days after expiration. It can still be renewed up to three years after expiration, but after that point a new application and the full licensing process are required."
      }
    ],
    "sources": [
      {
        "label": "BSIS Private Investigator License factsheet",
        "url": "https://www.bsis.ca.gov/forms_pubs/pi_fact",
        "checkedOn": "2026-10"
      },
      {
        "label": "BSIS Private Investigator FAQ",
        "url": "https://bsis.ca.gov/consumers/faqs/pi.shtml",
        "checkedOn": "2026-10"
      },
      {
        "label": "BSIS Notice of Fee Increase effective October 1, 2025",
        "url": "https://www.bsis.ca.gov/forms_pubs/notice_fee_increase.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "California LMIS occupational license listing (fees)",
        "url": "https://labormarketinfo.edd.ca.gov/cgi/databrowsing/licensedisplaypage.asp?licid=862",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for California, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=CA",
        "checkedOn": "2026-10"
      }
    ]
  },
  "CT": {
    "agency": "Connecticut Department of Emergency Services and Public Protection (DESPP), State Police Special Licensing and Firearms Unit",
    "agencyUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives",
    "experience": "Five years of full-time investigative experience as a licensed private detective, registered private investigator, proprietary detective agency operator, federal/state/local government investigator, or police detective, or ten years as a police officer with a federal, state, or organized municipal department. The commissioner may substitute up to one year of experience for satisfactory completion of relevant coursework. Employment as a security officer does not count.",
    "eligibility": {
      "minAge": 25,
      "citizenship": "US citizen, naturalized US citizen, or legal resident alien, with documentation required",
      "other": "Good moral character is required. No license is issued to anyone convicted of a felony, convicted of specified misdemeanors (including assault, threatening, stalking, and drug offenses) within the past seven years, convicted of any offense involving moral turpitude, or discharged from military service under conditions demonstrating questionable moral character. Applicants currently vested with police powers are barred."
    },
    "background": {
      "method": "Fingerprinting through the CCHRS online portal (FLEXCHECK pre-enrollment with Idemia), with an FBI privacy-rights form",
      "fee": "$75 state plus $12-$13.25 federal, paid online through FLEXCHECK",
      "disqualifiers": "Any felony conviction; listed misdemeanor convictions within the past seven years; any moral-turpitude offense; questionable-condition military discharge",
      "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives"
    },
    "fees": [
      {
        "item": "Individual private detective license (initial 2 years)",
        "fee": "$1,450",
        "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      },
      {
        "item": "Individual private detective license (2-year renewal)",
        "fee": "$625",
        "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      },
      {
        "item": "Private detective agency license (initial / renewal, 2 years)",
        "fee": "$1,750 initial / $1,000 renewal",
        "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      },
      {
        "item": "Employee registration",
        "fee": "$40 one-time per registered investigator, plus fingerprint fees",
        "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives"
      },
      {
        "item": "Fingerprints",
        "fee": "$75 state + $13.25 federal via CCHRS/FLEXCHECK",
        "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives"
      },
      {
        "item": "Surety bond and insurance",
        "fee": "$10,000 performance surety bond (Form DPS-363-C) plus a $300,000 general liability policy",
        "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives"
      }
    ],
    "application": {
      "portal": "Paper application (Form DPS-366-C) filed with the Special Licensing and Firearms Unit",
      "portalUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives",
      "steps": [
        "Complete and notarize Form DPS-366-C and include two 2 x 2 passport-style photographs and proof of citizenship or permanent residency.",
        "Pre-enroll for fingerprints online through CCHRS/FLEXCHECK and pay the $75 state and $13.25 federal fees.",
        "Provide a three-year motor vehicle record, a recent credit bureau report, proof of high school education or equivalent, and a DD-214 if applicable.",
        "Arrange four character-reference letters sent directly to SLFU by the authors within 60 days, plus employer verification letters describing dates, duties, and reasons for leaving, sent directly by past employers.",
        "File the $10,000 bond on Form DPS-363-C and the $300,000 general liability certificate. Connecticut does not administer a written licensing examination; DESPP evaluates age, character, experience, and background."
      ],
      "processingTime": "DESPP does not publish a processing time.",
      "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "$625 individual / $1,000 agency (Form DPS-331-C)",
      "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$75,010",
      "p25": "$42,130",
      "p75": "$83,320",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=CT"
    },
    "localNuance": "Connecticut issues a separate private detective-fire license with its own fee classification, and a license granted on the basis of municipal fire-department investigation experience is restricted to that type of investigation. Agency licensees must register every investigator employee, and corporate officials must be registered with SLFU even though they cannot work as investigators unless separately registered.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives"
      }
    ],
    "stateFaqs": [
      {
        "q": "Is there an exam for a Connecticut private detective license?",
        "a": "No. DESPP does not list or administer a written licensing examination. Licensure turns on age (25), moral character, five years of full-time investigative experience or ten years as a police officer, and the fingerprint-based background checks."
      },
      {
        "q": "What bond and insurance does Connecticut require?",
        "a": "Applicants must post a $10,000 performance surety bond with the state on Form DPS-363-C and carry a $300,000 general liability policy before licensure. Anyone aggrieved by the licensee's acts may proceed against the bond to recover damages."
      },
      {
        "q": "How much does a Connecticut PI license cost?",
        "a": "An individual private detective license costs $1,450 for the initial two-year term and $625 for each two-year renewal. Agency licenses cost $1,750 initially and $1,000 to renew, with checks payable to Treasurer, State of Connecticut."
      },
      {
        "q": "How do new investigators build qualifying experience in Connecticut?",
        "a": "Most start as registered private investigators under a licensed detective, which requires only age 18, good moral character, and background checks, at a $40 registration fee. The full license later requires five years of full-time investigative experience, with up to one year substitutable for relevant coursework."
      }
    ],
    "sources": [
      {
        "label": "DESPP Special Licensing and Firearms - Private Detectives (fees and instructions)",
        "url": "https://portal.ct.gov/DESPP/Division-of-State-Police/Special-Licensing-and-Firearms/Private-Detectives",
        "checkedOn": "2026-10"
      },
      {
        "label": "DESPP knowledge base - Private Detectives FAQ (qualifications)",
        "url": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/private-detectives",
        "checkedOn": "2026-10"
      },
      {
        "label": "Connecticut PI license cost guide (License Navigator)",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-cost-connecticut",
        "checkedOn": "2026-10"
      },
      {
        "label": "Connecticut PI requirements overview (LegalClarity)",
        "url": "https://legalclarity.org/how-to-become-a-private-investigator-in-ct-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Connecticut, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=CT",
        "checkedOn": "2026-10"
      }
    ]
  },
  "DE": {
    "agency": "Delaware State Police (DSP), Professional Licensing Section",
    "agencyUrl": "https://dsp.delaware.gov/tag/questions/?p=34",
    "experience": "Individual private investigator licensees need no documented investigative experience; the gate is employment by a licensed Delaware agency. An agency license holder needs at least five years of investigative experience or five years as a police officer for any local, state, or federal agency (or equivalent with certification from a law-enforcement academy).",
    "eligibility": {
      "minAge": 21,
      "other": "Individual licensees must be at least 21 and employed by a licensed private detective agency; agency license holders must be at least 25. Disqualifiers: any felony conviction; theft-, drug-, or moral-turpitude misdemeanors within the last seven years (no more than two in a lifetime, none arising from employment in the regulated field); juvenile felony adjudications; dishonorable military discharge; and membership or employment in a law-enforcement organization."
    },
    "background": {
      "method": "Fingerprint and photo appointment scheduled with IdentoGO (service code 27S48X for license holders), which forwards results to DSP Professional Licensing",
      "fee": "$105 application fee paid through IdentoGO at the time of application",
      "disqualifiers": "Felony convictions; theft-, drug-, or moral-turpitude misdemeanors within seven years; dishonorable discharge; law-enforcement membership",
      "sourceUrl": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
    },
    "fees": [
      {
        "item": "Individual PI application or renewal",
        "fee": "$105 nonrefundable, paid when registering with IdentoGO",
        "sourceUrl": "https://dsp.delaware.gov/tag/questions/?p=34"
      },
      {
        "item": "Replacement or agency-change card",
        "fee": "$5",
        "sourceUrl": "https://dsp.delaware.gov/tag/questions/?p=34"
      },
      {
        "item": "Class A private investigative agency license",
        "fee": "$300 in-state / $500 out-of-state / $250 sole proprietor",
        "sourceUrl": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
      },
      {
        "item": "Agency surety bond",
        "fee": "$10,000 ($5,000 for sole proprietors), in the name of the agency",
        "sourceUrl": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
      },
      {
        "item": "Agency liability insurance",
        "fee": "$1,000,000 commercial general liability per occurrence",
        "sourceUrl": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
      }
    ],
    "application": {
      "portal": "Applications filed with DSP Professional Licensing; fingerprints through IdentoGO",
      "portalUrl": "https://dsp.delaware.gov/tag/questions/?p=34",
      "steps": [
        "For an individual license, secure employment (or a firm offer) from a licensed Delaware private detective agency; applications without agency employment are denied.",
        "Schedule a fingerprint and photo appointment with IdentoGO and pay the $105 application fee at the appointment.",
        "Agencies file the agency application, license-holder application with five character references, surety bond, and $1,000,000 liability certificate with Professional Licensing.",
        "Pick up the license identification card at the Dover State Bureau of Identification office (3-5 business days) or receive it by mail (about 10 business days). Delaware does not require an examination or outside training for individual PI licensees."
      ],
      "processingTime": "3-5 business days for pickup at the Dover SBI office, or at least 10 business days by mail after approval.",
      "sourceUrl": "https://dsp.delaware.gov/tag/questions/?p=34"
    },
    "renewal": {
      "cycle": "5 years",
      "fee": "$105",
      "late": "The license expires on the licensee's actual birthdate and must be valid to be replaced or transferred between agencies",
      "sourceUrl": "https://dsp.delaware.gov/tag/questions/?p=34"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$55,710",
      "p25": "$47,520",
      "p75": "$67,800",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=DE"
    },
    "localNuance": "PI licensing sits with the State Police Professional Licensing Section, not the Division of Professional Regulation, so it does not appear in the DELPROS portal. Delaware's recording-consent rules are a practical trap: Title 11 Section 2402 reads as one-party consent, but the Section 1335 privacy statute imposes all-party-consent liability, so investigators treat the state as all-party consent.",
    "recentChanges": [
      {
        "year": 2023,
        "change": "DSP reissued the Class A Private Investigative Agency licensure instructions in August 2023, setting the in-state agency fee at $300 (with $500 for out-of-state agencies and $250 for sole proprietors), a $10,000 agency bond, and IdentoGO-based fingerprinting for license holders.",
        "sourceUrl": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Delaware require PI training or an exam?",
        "a": "No. The DSP PI FAQ states that no outside training is required for the individual license, and no examination is administered. Employment by a licensed agency is the substantive gate, and the Board of Examiners reviews agency license-holder qualifications."
      },
      {
        "q": "Can a Delaware PI carry a concealed firearm?",
        "a": "No. The State Police FAQ is explicit that a Private Investigator license does not authorize concealed carry. Delaware's concealed-carry permit process is separate."
      },
      {
        "q": "How long is a Delaware PI license valid?",
        "a": "Five years, expiring on the licensee's actual birthdate. The license is portable between all Delaware-licensed private detective agencies, and moving between agencies requires a $5 replacement card processed at a State Bureau of Identification office."
      },
      {
        "q": "What does an individual Delaware PI license cost?",
        "a": "The application and renewal fee is $105, nonrefundable, paid through IdentoGO. The card itself is printed on site or mailed, and a replacement costs $5. Agency licenses cost $300 in state with a $10,000 bond and $1,000,000 liability insurance."
      }
    ],
    "sources": [
      {
        "label": "Delaware State Police - Private Investigator FAQ",
        "url": "https://dsp.delaware.gov/tag/questions/?p=34",
        "checkedOn": "2026-10"
      },
      {
        "label": "DSP Class A Private Investigative Agency licensure instructions (August 2023)",
        "url": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2023/09/Class-A-PI-Agency-8-2023.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "DSP Class C agency procedures (2017, superseded fee reference)",
        "url": "https://dsp.delaware.gov/wp-content/uploads/sites/118/2018/09/Class-C-Procedures-2017.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Delaware PI licensing overview (StartBusinessByState)",
        "url": "https://startbusinessbystate.com?p=964/",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Delaware, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=DE",
        "checkedOn": "2026-10"
      }
    ]
  },
  "DC": {
    "agency": "DC Department of Licensing and Consumer Protection (DLCP), Occupational and Professional Licensing Security Program",
    "agencyUrl": "https://dlcp.dc.gov/page/security-program",
    "experience": "DLCP publishes no minimum experience-hour requirement for the Private Detective credential; applications undergo suitability review under Title 17 of the DC Municipal Regulations, with Metropolitan Police Department fingerprinting and approval by the MPD Chief of Police.",
    "eligibility": {
      "other": "Individual private detective applicants must be District residents and hold a firm employment offer from a licensed DC detective agency, per the Security Program's application requirements. Fingerprints are taken by MPD, and a notarized arrest affidavit and authorization to release accompany the application."
    },
    "background": {
      "method": "Fingerprints scheduled directly with the Metropolitan Police Department (MPD), plus a notarized arrest affidavit and authorization-to-release form filed with DLCP",
      "fee": "Not published on the DLCP fee schedule",
      "disqualifiers": "Suitability is determined by MPD and DLCP under the District's security license laws and 17 DCMR; the arrest affidavit discloses criminal history for review",
      "sourceUrl": "https://dlcp.dc.gov/page/security-program"
    },
    "fees": [
      {
        "item": "Private Detective (PD), individual - new application",
        "fee": "$500",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      },
      {
        "item": "Private Detective (PD), individual - renewal",
        "fee": "$500",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      },
      {
        "item": "Private Detective Business (PDB), agency - new application",
        "fee": "$1,000",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      },
      {
        "item": "Private Detective Business (PDB), agency - renewal",
        "fee": "$935",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      },
      {
        "item": "Private Detective Individual Business (PAI) - new / renewal",
        "fee": "$500 / $412",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      },
      {
        "item": "Detective Agency basic business license (2-year)",
        "fee": "$99",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-requirements-washington-dc"
      },
      {
        "item": "Surety bond",
        "fee": "$5,000 individual (17 DCMR Section 2003); agency bonds up to $25,000 under D.C. Code Section 5-121.01",
        "sourceUrl": "https://code.dccouncil.gov/us/dc/council/code/sections/5-121.01"
      }
    ],
    "application": {
      "portal": "DLCP online occupational licensing application",
      "portalUrl": "https://govservices.dcra.dc.gov/oplanewlicense",
      "steps": [
        "Complete and notarize the arrest affidavit and authorization-to-release documents before applying.",
        "Schedule fingerprints with MPD (online or at 202-671-6705).",
        "Submit the Private Detective (PD), Private Detective Business (PDB), or PAI application with the fee through the DLCP portal.",
        "Clear the MPD background review and Chief of Police approval, then keep the required surety bond active. DLCP does not list an examination for the Private Detective credential; the $69 PSI exam on the program page applies to security officers."
      ],
      "processingTime": "DLCP does not publish a processing time; applicant guidance notes the FBI background check alone can take up to two weeks.",
      "sourceUrl": "https://dlcp.dc.gov/page/security-program"
    },
    "renewal": {
      "cycle": "2 years, with renewals due by October 31 of even-numbered years",
      "fee": "$500 PD / $935 PDB / $412 PAI",
      "late": "DLCP provides a 15-day grace period while renewal applications are being processed",
      "sourceUrl": "https://dlcp.dc.gov/page/security-program"
    },
    "reciprocity": {
      "rule": "The District has no reciprocity agreement with Virginia or Maryland; a license from another jurisdiction does not authorize PI work in DC, and DC credentials are required to practice there.",
      "agreements": null,
      "sourceUrl": "https://licensenavigator.ai/blog/dc-private-investigator-license-requirements"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$72,720",
      "p25": "$46,330",
      "p75": "$107,920",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=DC"
    },
    "localNuance": "Licensing is split: DLCP's Security Program issues the occupational credential, MPD's Security Officers Management Branch handles fingerprints and final approval, and a firm advertising as a detective agency also needs a Detective Agency basic business license and must print its license number in every advertisement (17 DCMR Section 2110.1). Firearms require separate MPD registration.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dlcp.dc.gov/page/security-program"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do you need a license to be a private investigator in DC?",
        "a": "Yes. Acting as a private detective requires a DLCP Security Program credential with MPD fingerprinting and Chief of Police approval under D.C. Code Section 47-2853.208 and Section 5-121.03. Working without compliance is subject to penalties."
      },
      {
        "q": "Does DC require an exam or experience hours for private detectives?",
        "a": "DLCP publishes no written exam or minimum experience hours for the Private Detective credential; suitability review under 17 DCMR governs. The $69 PSI exam listed on the Security Program page is for security officers, not private detectives."
      },
      {
        "q": "What bonds do DC private detectives carry?",
        "a": "Individual private detectives maintain a $5,000 corporate surety bond for the license term under 17 DCMR Section 2003. Detective agencies file a bond of up to $25,000 as authorized by D.C. Code Section 5-121.01."
      },
      {
        "q": "Can a Virginia or Maryland PI work cases in DC?",
        "a": "No. Licensing is jurisdiction-specific and DC has no reciprocity agreement with neighboring states. Investigators working District cases need the DC credential, and agencies that advertise also need the Detective Agency basic business license."
      }
    ],
    "sources": [
      {
        "label": "DLCP Security Program (fees, applications, renewals)",
        "url": "https://dlcp.dc.gov/page/security-program",
        "checkedOn": "2026-10"
      },
      {
        "label": "DC License Navigator - DC PI license requirements",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-requirements-washington-dc",
        "checkedOn": "2026-10"
      },
      {
        "label": "DC License Navigator - DC PI guide (bonds, DCMR citations)",
        "url": "https://licensenavigator.ai/blog/dc-private-investigator-license-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "D.C. Code Section 5-121.01 (bond authority)",
        "url": "https://code.dccouncil.gov/us/dc/council/code/sections/5-121.01",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for District of Columbia, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=DC",
        "checkedOn": "2026-10"
      }
    ]
  },
  "FL": {
    "agency": "Florida Department of Agriculture and Consumer Services (FDACS), Division of Licensing",
    "agencyUrl": "https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses",
    "exam": {
      "vendor": "Everblue (FDACS-approved testing provider)",
      "vendorUrl": "https://register.fdacs.onlinetestportal.com/",
      "parts": [
        {
          "name": "Chapter 493 private investigator examination",
          "questions": "Question count not published",
          "time": "1.5-2 hours",
          "pass": "Not published"
        }
      ],
      "fee": "$70, paid directly to Everblue at registration",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf",
      "sourceNote": "The exam covers Sections 493.6100 through 493.6203 and Section 493.6301(5), Florida Statutes -- the business practices and legal responsibilities of the private investigative industry. It is administered remotely online or at Everblue facilities, and preliminary results display immediately."
    },
    "education": {
      "hours": "40-hour professional training course for the Class CC intern path",
      "breakdown": "The intern course covers general investigative techniques and Chapter 493, offered by a state university or a school under the Department of Education's purview; the certificate must accompany the Class CC application",
      "onlineAllowed": "The Class CC training may be provided face-to-face, online, or as a home-study course under Department of Education rules",
      "apprenticeship": "A Class CC intern serves a two-year internship under a designated sponsor holding a Class C, MA, or M license (Section 493.6203(6), F.S.)",
      "sourceUrl": "https://leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6203.html//"
    },
    "experience": "Two years of lawfully gained, verifiable, full-time experience: private investigative work or equivalent fields, up to one year of criminal-justice college coursework or law-enforcement training, time as a Class CC licensed intern, or any combination (Section 493.6203(4), F.S.). Bodyguard work is not creditable.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen, permanent legal resident, or holder of a work visa from US Citizenship and Immigration Services",
      "other": "Good moral character, no disqualifying criminal history, and no history of mental illness, alcohol abuse, or substance abuse are required of all Chapter 493 applicants."
    },
    "background": {
      "method": "Electronic fingerprints submitted through an FDLE-approved vendor for the state and federal checks",
      "fee": "$42 fingerprint processing plus $10.75 FDLE fingerprint retention, included in the initial fee total",
      "disqualifiers": "Felony convictions and disqualifying criminal history under Chapter 493; a forcible-felony arrest triggers immediate suspension",
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
    },
    "fees": [
      {
        "item": "Application",
        "fee": "$50",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
      },
      {
        "item": "Class C license",
        "fee": "$75 (statutory maximum under Section 493.6202, F.S.)",
        "sourceUrl": "https://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html"
      },
      {
        "item": "Fingerprints",
        "fee": "$42 processing + $10.75 FDLE retention",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
      },
      {
        "item": "Examination",
        "fee": "$70 paid to Everblue",
        "sourceUrl": "https://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf"
      },
      {
        "item": "Class CC intern license",
        "fee": "$60 license fee (statutory maximum) plus application and fingerprint fees",
        "sourceUrl": "https://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$75 plus $16.75 fingerprint retention",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
      }
    ],
    "application": {
      "portal": "FDACS Division of Licensing (paper or online submission)",
      "portalUrl": "https://www.fdacs.gov/Business-Services/Private-Investigation-Licenses",
      "steps": [
        "Pass the Chapter 493 examination through Everblue before applying; proof of passing must accompany the application.",
        "Complete the Class C application (FDACS-16018) and the Affidavit of Experience (FDACS-16023) documenting two years of qualifying experience.",
        "Include a passport-style color photo taken within six months and electronic fingerprints from an FDLE-approved vendor.",
        "Hold or take a position with a licensed Class A/AA/AB private investigative agency, as the Class C application requires affiliation with a licensed agency.",
        "Initial FDACS fees total $177.75 ($50 application + $75 license + $42 fingerprints + $10.75 retention), plus the $70 exam paid to Everblue. Veterans applying within 24 months of discharge receive a waiver of the initial license fee with a DD-214."
      ],
      "processingTime": "One to three months depending on application volume and whether the background review flags anything.",
      "sourceUrl": "https://legalclarity.org/class-c-private-investigator-license-requirements-in-florida"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "14 hours of approved continuing education every two years, including at least 2 hours of ethics",
      "fee": "$75 plus $16.75 fingerprint retention ($91.75 total)",
      "sourceUrl": "https://legalclarity.org/how-to-become-a-detective-in-florida/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$50,640",
      "p25": "$38,120",
      "p75": "$64,080",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=FL"
    },
    "localNuance": "A Class C or CC license never authorizes carrying a firearm on duty; armed work requires a separate Class G Statewide Firearm License with 28 hours of initial training and 4 hours of annual requalification. Applicants without experience start with the Class CC intern license (40-hour course plus two-year sponsored internship), and Florida issued 6,929 Class C licenses as of October 31, 2025.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "FDACS reissued the Class C Private Investigator application packet (FDACS-16018, rev. 03/2026) with updated experience documentation requirements.",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida"
      }
    ],
    "stateFaqs": [
      {
        "q": "When must the Florida PI exam be taken?",
        "a": "Before applying. Section 493.6203(5), F.S. requires Class C, MA, and M applicants to pass the Chapter 493 examination before submitting the license application, and proof of passing must be included in the packet. The exam is administered by Everblue for $70, remotely or at its facilities."
      },
      {
        "q": "What does the Florida PI exam cover?",
        "a": "It tests Sections 493.6100 through 493.6203 and Section 493.6301(5) of the Florida Statutes -- the licensing framework, business practices, prohibited conduct, and legal responsibilities of individuals and agencies. FDACS publishes Chapter 493 and the Private Investigator Handbook as study materials."
      },
      {
        "q": "How does the Class CC intern path work?",
        "a": "Applicants without two years of experience complete a 40-hour professional training course, then intern under a Class C, MA, or M sponsor for two years with a Class CC license ($60 license fee). The internship plus a sponsor recommendation leads to Class C eligibility."
      },
      {
        "q": "Can a Florida PI carry a gun on duty?",
        "a": "Only with a separate Class G Statewide Firearm License, which requires 28 hours of initial training and 4 hours of annual requalification, and only when duties and the employing agency require it. Open carry is prohibited."
      }
    ],
    "sources": [
      {
        "label": "FDACS examination FAQ for PI/PI manager licenses (Everblue)",
        "url": "https://aesecomm.fdacs.gov/content/download/23758/file/examination-faq.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Section 493.6203, Florida Statutes - license requirements",
        "url": "https://leg.state.fl.us/STATUTES/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/493.6203.html//",
        "checkedOn": "2026-10"
      },
      {
        "label": "Section 493.6202, Florida Statutes - fees",
        "url": "https://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0493/Sections/0493.6202.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Florida Class C fee breakdown (License Navigator)",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-cost-florida",
        "checkedOn": "2026-10"
      },
      {
        "label": "Florida PI licensing overview (LegalClarity)",
        "url": "https://legalclarity.org/class-c-private-investigator-license-requirements-in-florida",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Florida, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=FL",
        "checkedOn": "2026-10"
      }
    ]
  },
  "GA": {
    "agency": "Georgia State Board of Private Detective and Security Agencies (Secretary of State)",
    "agencyUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
    "exam": {
      "vendor": "PSI",
      "vendorUrl": "https://candidate.psiexams.com/",
      "parts": [
        {
          "name": "Private Detective Licensure Examination",
          "questions": "Question count not published",
          "time": "About 3 hours, closed book",
          "pass": "Set by the Board"
        }
      ],
      "fee": "$125",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
      "sourceNote": "Content areas per the Board's application information sheet: legal, ethical, and professional standards; observation/surveillance; rules of evidence and evidence handling; interviewing/interrogation; and case management, administration, and reporting. The $125 fee appears in the PSI candidate information bulletin. Applicants may retake the exam, but not more than three times without a new application (Rule 509-2-.02)."
    },
    "education": {
      "hours": "70-hour basic training course for registered private detective employees",
      "breakdown": "Board Rule 509-3-.06 prescribes the curriculum, covering Georgia law, surveillance, evidence handling, interviewing, and professional ethics; the course must come from a Board-approved instructor",
      "onlineAllowed": "Not specified by the Board",
      "apprenticeship": "New employees are hired by a licensed company at age 18 or older with no experience prerequisite; the company must submit the employee registration application within 30 days of hiring and is responsible for Board-approved training",
      "sourceUrl": "https://privateinvesticatoredu.org/georgia/"
    },
    "experience": "Company (agency) license applicants need two years of experience as a licensed private detective with a licensed agency, two years in law enforcement with a federal, state, county, or municipal agency, or a four-year criminal justice or related degree from an accredited university (Rule 509-2-.02). Full-time means at least 30 hours per week.",
    "eligibility": {
      "other": "Licenses are issued to companies; the applicant must be the owner, a partner, or an officer or member of the entity, documented with certified corporate paperwork. Employees must be at least 18 and registered by the company under O.C.G.A. 43-38-7."
    },
    "background": {
      "method": "GAPS (Georgia Applicant Processing Service) fingerprint scanning; applicants are emailed after Board review and must complete prints within 90 days or the registration is canceled and refunded",
      "fee": "Paid through GAPS at the fingerprint site; the Board does not publish the amount on the application sheet",
      "disqualifiers": "Felony convictions and misdemeanors involving moral turpitude or illegal weapon use are grounds for denial under O.C.G.A. 43-38-6, assessed case by case",
      "sourceUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
    },
    "fees": [
      {
        "item": "Application",
        "fee": "$100",
        "sourceUrl": "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license"
      },
      {
        "item": "Private Detective Company license",
        "fee": "$300",
        "sourceUrl": "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license"
      },
      {
        "item": "Examination (PSI)",
        "fee": "$125",
        "sourceUrl": "https://privateinvesticatoredu.org/georgia/"
      },
      {
        "item": "Employee registration",
        "fee": "$45 per unarmed employee / $70 per armed employee",
        "sourceUrl": "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license"
      },
      {
        "item": "Surety bond",
        "fee": "$25,000 bond (or a $1,000,000 general liability certificate naming the Board, or a certified audited financial statement showing net worth above $50,000)",
        "sourceUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
      }
    ],
    "application": {
      "portal": "GOALS (Georgia licensing portal), with paper application materials mailed to the Board office in Macon",
      "portalUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
      "steps": [
        "Complete the Applicant Registration Form with a personal email address; third-party or agency email addresses are not permitted.",
        "Submit an original notarized letter of experience from the employer (with POST certification details for law-enforcement experience) or a certified sealed transcript for degree applicants.",
        "After Board processing, complete GAPS fingerprinting within 90 days of the notification email.",
        "Pass the PSI Private Detective examination; all company applicants must take it regardless of experience or out-of-state licensure.",
        "After passing, pay the license fee and file the $25,000 surety bond, $1,000,000 liability certificate, or audited net-worth statement. The Board does not publish a processing time; complete applications are typically reviewed in about 6 to 8 weeks."
      ],
      "processingTime": "The Board does not publish a processing time; licensing guides report roughly 6 to 8 weeks for complete applications.",
      "sourceUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "Company renewal fees are set by the Board's published fee schedule; renewals open 90 days before expiration through the GOALS portal",
      "late": "Late renewals carry a higher fee (guides report $800 versus the on-time amount for company licenses)",
      "sourceUrl": "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license"
    },
    "reciprocity": {
      "rule": "Georgia has Limited License Recognition Agreements allowing properly licensed investigators from partner states to work in Georgia up to 30 days per calendar year on cases originating in their home state (O.C.G.A. 43-38-15). Company-license applicants must still pass the Georgia examination; no reciprocity exempts anyone from the exam.",
      "agreements": [
        "California",
        "Florida",
        "North Carolina",
        "Louisiana",
        "Oklahoma",
        "Virginia",
        "Tennessee",
        "Alabama"
      ],
      "sourceUrl": "https://privateinvesticatoredu.org/georgia/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$45,060",
      "p25": "$38,650",
      "p75": "$59,950",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=GA"
    },
    "localNuance": "Georgia licenses companies, not individual investigators; working PIs are registered employees of a licensed company and carry no personal license. Registered employees must complete the Board's 70-hour basic training course before performing investigative work, and all applications run through the GOALS portal with GAPS fingerprinting.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Can an individual get a private investigator license in Georgia?",
        "a": "No. Licenses are issued only to companies, with a qualified owner, partner, officer, or member as license holder. Working investigators are registered employees of a licensed company, registered at $45 (unarmed) or $70 (armed) per employee."
      },
      {
        "q": "Does Georgia waive the exam for experienced or out-of-state investigators?",
        "a": "No. Every company-license applicant must take the PSI examination, regardless of years of experience or licensure in other states. Reinstatement applicants who have not passed within the last five years must retake it."
      },
      {
        "q": "What are the financial requirements for a Georgia PI company?",
        "a": "After passing the exam, the applicant files the license fee plus one of three financial proofs: an original $25,000 surety bond, a $1,000,000 general liability certificate naming the Board, or a certified audited financial statement showing net worth above $50,000 (which requires prior Board review)."
      },
      {
        "q": "What training do Georgia PI employees need?",
        "a": "Registered employees must complete the Board's 70-hour basic training course from a Board-approved instructor, covering criminal law, surveillance, evidence handling, interviewing, and Georgia rules. The company is responsible for the training and for registering the employee within 30 days of hire."
      }
    ],
    "sources": [
      {
        "label": "Georgia Board - Agency (Company) License application information sheet",
        "url": "https://sos.ga.gov/sites/default/files/forms/31%20Application%20-%20Agency%20%28Company%29%20License.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia Board Rules, Department 509 (Rule 509-2-.02 qualifications and exam)",
        "url": "https://rules.sos.state.ga.us/download_pdf.aspx?st=GASOS&year=2024&dept=Departments&pdf=Department%20509%20GEORGIA%20BOARD%20OF%20PRIVATE%20DETECTIVE%20AND%20SECURITY%20AGENCIES",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia PI licensing guide (PrivateInvestigatorEdu)",
        "url": "https://privateinvesticatoredu.org/georgia/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia PI license steps and fees (SuretyBonds)",
        "url": "https://www.suretybonds.com/guide/georgia/private-detective-security-agency-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "GAPPI FAQ (Georgia Association of Professional Private Investigators)",
        "url": "https://www.gappi.org/faq",
        "checkedOn": "2026-10"
      },
      {
        "label": "O*NET local wages for Georgia, SOC 33-9021",
        "url": "https://www.onetonline.org/link/localwages/33-9021.00?st=GA",
        "checkedOn": "2026-10"
      }
    ]
  },
  "HI": {
    "agency": "Hawaii Board of Private Detectives and Guards (DCCA Professional and Vocational Licensing)",
    "agencyUrl": "https://cca.hawaii.gov/pvl/boards/private/",
    "exam": {
      "vendor": "State board (in-person examination administered after board approval)",
      "vendorUrl": "https://cca.hawaii.gov/pvl/boards/private/",
      "parts": [
        {
          "name": "Private detective examination",
          "questions": "Not published",
          "time": "Not published",
          "pass": "75%"
        }
      ],
      "fee": "$50",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
      "sourceNote": "FAQ licensing requirements; exam fee and study list published by the board"
    },
    "education": {
      "hours": "None",
      "breakdown": "No coursework is required; the board lists recommended study materials including Hawaii Revised Statutes chapter 463, Hawaii Administrative Rules title 16 chapter 97, and The Process of Investigation (Sennewald and Tsukayama).",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
    },
    "experience": "Four years of full-time investigational work. The board accepts employment under a licensed private detective, as a police officer, as a government investigator (federal, state, county, or municipal), or as an investigator for an attorney or law firm. No education substitutes for the experience requirement.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not expressly required for individuals by statute; principals and entities must meet board character standards",
      "education": "High school education or equivalent",
      "other": "Applicant must not have been convicted of a crime reflecting unfavorably on fitness for the profession (unless annulled or expunged), must not suffer from a directly detrimental psychiatric or psychological disorder, and must possess a history of honesty, truthfulness, financial integrity, and fair dealing (HRS 463-6)."
    },
    "background": {
      "method": "Electronic fingerprinting through Fieldprint Hawaii or another HCJDC-approved provider",
      "fee": "$17.50 Fieldprint + $16.50 FBI + $30.00 Hawaii state criminal history check",
      "disqualifiers": "Conviction of any crime reflecting unfavorably on fitness for the profession, unless annulled or expunged by court order",
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
    },
    "fees": [
      {
        "item": "Application (principal / sole proprietor)",
        "fee": "$50",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "Application (entity / agency)",
        "fee": "$100",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "Examination",
        "fee": "$50",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "Fingerprint and criminal history checks",
        "fee": "$17.50 + $16.50 + $30.00",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "License (private detective, prorated by biennium)",
        "fee": "$210-$260 depending on when issued in the two-year cycle",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "Surety bond",
        "fee": "$5,000 bond (HRS 463-12); premium paid to a licensed surety",
        "sourceUrl": "https://www.capitol.hawaii.gov/sessions/session2004/bills/HB2421_sd1_.htm"
      }
    ],
    "application": {
      "portal": "Paper application filed with the PVL Licensing Branch (MyPVL used for license management)",
      "portalUrl": "https://cca.hawaii.gov/pvl/boards/private/",
      "steps": [
        "Complete the private detective application and assemble the required attachments, including a 2 x 2 photograph and employment history documentation on board experience forms.",
        "File the application with fee at least 30 days before the board meeting at which it will be considered; the board meets on a published schedule.",
        "After board approval, register for the examination using the approval letter and pass the 75% threshold exam.",
        "Appear before the board for an in-person interview after passing the examination.",
        "Submit the $5,000 surety bond and the prorated license fee, then complete FBI and Hawaii criminal history checks through Fieldprint."
      ],
      "processingTime": "Driven by the board meeting calendar; applications must arrive 30 days before a meeting",
      "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
    },
    "renewal": {
      "cycle": "Biennial - renews by June 30 of every even-numbered year",
      "ce": "None for private detective licenses; the 4-hour continuing competency training requirement applies to guard employees",
      "fee": "$344 (private detective, active) / $408 (private detective agency, active)",
      "late": "License restores within 1 year after expiration: $419 for a private detective; after 1 year the license terminates and a new application is required",
      "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
    },
    "reciprocity": {
      "rule": "None. The board states that Hawaii has no reciprocal agreements and all applicants must meet the same licensing and examination requirements.",
      "agreements": null,
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$45,750",
      "p25": "$43,790",
      "p75": "$66,350",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=HI"
    },
    "localNuance": "Hawaii licenses detectives and detective agencies at the state level, but a detective agency must employ a resident principal detective, register every investigative employee with the board semi-annually (Form PDG-16), and file a $5,000 surety bond before licensure.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Hawaii offer any education shortcut instead of the four-year experience requirement?",
        "a": "No. The board explicitly rejects academic courses, degrees, and home study in place of the four years of full-time investigative work. Qualifying employment includes working under a licensed private detective, as a police officer, as a government investigator, or for an attorney or law firm."
      },
      {
        "q": "How does the two-step application and exam sequence work?",
        "a": "You file the application first and the board reviews it at a scheduled meeting; applications must arrive at least 30 days before that meeting. Only after board approval can you register for the 75% exam ($50 fee), and passing applicants then appear for an in-person board interview before paying the license fee."
      },
      {
        "q": "What does the $5,000 bond cover and when is it due?",
        "a": "HRS 463-12 requires a surety bond of not less than $5,000 issued by a surety authorized in Hawaii. It does not need to be submitted with the application, but it must be in place before licensure and kept current thereafter."
      },
      {
        "q": "When do Hawaii private detective licenses renew and what does it cost?",
        "a": "All licenses renew by June 30 of every even-numbered year. A private detective license in active status costs $344 to renew ($408 for an agency), and a lapsed license can be restored for $419 within one year of expiration."
      },
      {
        "q": "Can I hold a Hawaii private detective license based on my license from another state?",
        "a": "No. The board publishes that Hawaii has no reciprocal agreements, so every applicant must meet the four-year experience and examination requirements in full regardless of licensure elsewhere."
      }
    ],
    "sources": [
      {
        "label": "Hawaii Board of Private Detectives and Guards - licensing, renewals, and fee notices",
        "url": "https://cca.hawaii.gov/pvl/boards/private/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Board of Private Detectives and Guards - Frequently Asked Questions (fees, requirements, reciprocity)",
        "url": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Hawaii Revised Statutes chapter 463 - Private detectives and guards (HRS 463-6 qualifications, HRS 463-12 bonds)",
        "url": "https://www.capitol.hawaii.gov/sessions/session2004/bills/HB2421_sd1_.htm",
        "checkedOn": "2026-10"
      },
      {
        "label": "Hawaii PVL - PDG application and exam reference material",
        "url": "https://cca.hawaii.gov/pvl/files/2021/05/PDG_FAQs_05-09-2021.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "IL": {
    "agency": "Illinois Department of Financial and Professional Regulation (IDFPR), Division of Professional Regulation - Private Detective",
    "agencyUrl": "https://idfpr.illinois.gov/",
    "exam": {
      "vendor": "Continental Testing Services (administers the IDFPR private detective exam)",
      "vendorUrl": "https://www.continentaltesting.net/",
      "parts": [
        {
          "name": "Illinois private detective examination",
          "questions": "Not published",
          "time": "Not published",
          "pass": "70 (rule 1240.10(c))"
        }
      ],
      "fee": "Set by the testing vendor and posted on the IDFPR exam schedule; the state application fee is separate",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html",
      "sourceNote": "68 Ill. Adm. Code 1240.10 - passing grade 70; exam score valid 3 years"
    },
    "education": {
      "hours": "None required",
      "breakdown": "No coursework requirement; a baccalaureate degree in law enforcement or a related field or business counts for 2 of the 3 required experience years, and an associate degree counts for 1 year (225 ILCS 447/15-10(a)(6)).",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm"
    },
    "experience": "Three years of full-time investigative experience (1,500 or more hours annually) within the five years immediately preceding application, working for a licensed Illinois private detective agency, a licensed attorney, an in-house investigative unit of a corporation with 100 or more employees, the US armed forces, or a law enforcement agency (including a state's attorney or public defender office). A bachelor's degree in law enforcement or business credits 2 of the 3 years; an associate degree or qualifying military law enforcement training credits 1 year.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "Not required by statute",
      "education": "No minimum; degree credit applies to experience",
      "other": "No felony conviction (or at least 10 years since full discharge from sentence), good moral character, no dishonorable discharge from the armed forces, and no alcohol or narcotic dependence (225 ILCS 447/15-10)."
    },
    "background": {
      "method": "Illinois State Police live-scan fingerprints (or ISP fingerprint card for out-of-state residents)",
      "fee": "Paid to the fingerprint vendor; amounts set by ISP or the licensed fingerprint vendor agency",
      "disqualifiers": "Felony conviction unless at least 10 years have lapsed since full discharge from sentence; registered sex offenders are absolutely barred",
      "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
    },
    "fees": [
      {
        "item": "Application fee to IDFPR",
        "fee": "$500 (68 Ill. Adm. Code 1240.570)",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois"
      },
      {
        "item": "Examination",
        "fee": "Vendor fee set by Continental Testing Services and posted on the IDFPR exam schedule",
        "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
      },
      {
        "item": "Liability insurance",
        "fee": "$1,000,000 general liability policy in the applicant's name (required before licensure)",
        "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
      },
      {
        "item": "Fingerprints",
        "fee": "Live-scan vendor fee paid directly to the vendor",
        "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
      }
    ],
    "application": {
      "portal": "IDFPR CORE online system",
      "portalUrl": "https://idfpr.illinois.gov/",
      "steps": [
        "File the examination application with experience verification (VE-DET forms) and education documentation at least 60 days before the exam date; IDFPR confirms eligibility before admission.",
        "Complete Illinois live-scan fingerprints through ISP or a certified vendor within 60 days of applying.",
        "Sit for the Continental Testing Services exam; a passing score is 70 or above and remains valid for 3 years.",
        "After passing, submit the licensure application with proof of $1,000,000 general liability insurance, fingerprint verification, and the $500 fee through CORE.",
        "Renew every three years; licenses expire May 31 on the statewide IDFPR cycle."
      ],
      "processingTime": "Exam applications must be on file 60 days before the exam date",
      "sourceUrl": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html"
    },
    "renewal": {
      "cycle": "Every 3 years; expiration falls on May 31",
      "ce": "None published for private detectives",
      "fee": "$150 per year of the cycle ($450 per 3-year renewal) under 68 Ill. Adm. Code 1240.570(b)(1)",
      "late": null,
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois"
    },
    "reciprocity": {
      "rule": "Experience working full-time for a private detective agency licensed in another state (or in a state that does not license agencies) may be accepted in lieu of Illinois agency experience if substantially equivalent; the statute contains no licensure-by-endorsement provision.",
      "agreements": null,
      "sourceUrl": "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$60,210",
      "p25": "$44,380",
      "p75": "$79,140",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=IL"
    },
    "localNuance": "Illinois bundles private detectives, private alarm contractors, private security contractors, fingerprint vendors, and locksmiths under one Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act, so PI licensees also answer to the shared Board of Private Detective and Private Alarm Services.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "Public Act 103-309, effective January 1, 2024, amended the Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act, including the licensure qualifications at 225 ILCS 447/15-10.",
        "sourceUrl": "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm"
      }
    ],
    "stateFaqs": [
      {
        "q": "How many years of experience does Illinois require and can a degree reduce it?",
        "a": "Three years of full-time investigative work (at least 1,500 hours per year) within the five years before applying. A bachelor's degree in law enforcement or a related field or business credits 2 of the 3 years, and an associate degree or approved military law enforcement training credits 1 year."
      },
      {
        "q": "What score do I need on the Illinois private detective exam and how long is it good for?",
        "a": "A passing grade is 70 or above under 68 Ill. Adm. Code 1240.10(c). A successful score remains valid for 3 years; after that it is void and the applicant must reapply and retest."
      },
      {
        "q": "Does Illinois require a surety bond?",
        "a": "No bond is required for individual licensure. Instead, applicants must file proof of at least $1,000,000 in general liability insurance in their own name before the license is issued, and letting the coverage lapse cancels the license without a hearing."
      },
      {
        "q": "When do Illinois private detective licenses expire?",
        "a": "Every three years on May 31, aligned with IDFPR's uniform renewal calendar. Renewal runs $150 per year of the cycle, or $450 total, filed through the CORE portal."
      },
      {
        "q": "Can out-of-state investigative experience count in Illinois?",
        "a": "Yes, in part. The Department may accept alternative experience working full-time for an agency licensed in another state, or in a state that does not license agencies at all, if the experience is substantially equivalent to Illinois agency work."
      }
    ],
    "sources": [
      {
        "label": "225 ILCS 447/15-10 - Private Detective Act qualifications for licensure",
        "url": "https://ilga.gov/legislation/ilcs/documents/022504470K15-10.htm",
        "checkedOn": "2026-10"
      },
      {
        "label": "68 Ill. Adm. Code 1240.10 - Application for examination and licensure (passing score, fingerprints, insurance)",
        "url": "https://ilga.gov/commission/jcar/admincode/068/068012400A00100R.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Illinois WorkNet - Detectives, Private licensing summary (IDFPR requirements)",
        "url": "https://apps.illinoisworknet.com/cis/clusters/OccupationDetails/100422?parentId=110700&section=license",
        "checkedOn": "2026-10"
      },
      {
        "label": "Illinois private detective fees and renewal breakdown (cites 68 Ill. Adm. Code 1240.570)",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-cost-illinois",
        "checkedOn": "2026-10"
      }
    ]
  },
  "IN": {
    "agency": "Indiana Professional Licensing Agency - Private Investigator and Security Guard Licensing Board",
    "agencyUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
    "exam": null,
    "education": {
      "hours": "None required",
      "breakdown": "A bachelor's degree or higher in criminal justice or a related field from an accredited institution substitutes entirely for the 4,000-hour experience requirement (874 IAC 1-2-1).",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
    },
    "experience": "Two years of work experience documented by at least 4,000 hours in the investigative or security guard field, OR a bachelor's degree or higher in criminal justice or a related field. Experience is verified by employer documentation; there is no examination requirement.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "Not specified",
      "education": "High school level implied by experience documentation; degree pathway available",
      "other": "No felony convictions or convictions bearing directly on the ability to practice competently, and not currently on probation or parole. Indiana issues firm licenses only - even sole proprietors apply as a Private Investigator Firm, and firm employees work under the firm's license."
    },
    "background": {
      "method": "Limited criminal history checks from every city, county, and state of residence in the prior seven years, plus Indiana State Police / FBI fingerprint check through the application",
      "fee": "Varies by jurisdiction; paid to each records repository",
      "disqualifiers": "Felony conviction or a misdemeanor with a direct bearing on competent practice; current probation or parole",
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
    },
    "fees": [
      {
        "item": "Initial license (issuance)",
        "fee": "$300 (or $150 if applying within one year of the next October 1 renewal date)",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      {
        "item": "Renewal (every 4 years)",
        "fee": "$300",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      {
        "item": "Reinstatement (expired 3 or more years)",
        "fee": "$600 ($300 renewal + $300 application)",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      },
      {
        "item": "Liability insurance",
        "fee": "Minimum $100,000 general liability naming the State of Indiana as additional insured (IC 25-30-1-15)",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      }
    ],
    "application": {
      "portal": "MyLicense One (Access Indiana login)",
      "portalUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
      "steps": [
        "Create a MyLicense One account through Access Indiana and select the Initial Application for a Private Investigator Firm.",
        "Upload the experience verification form (4,000 hours) or accredited criminal justice transcripts, plus limited criminal history checks covering every jurisdiction of residence for the past seven years.",
        "Upload a certificate of insurance showing at least $100,000 in general liability coverage with the State of Indiana listed as additional insured; the license is issued only after the certificate is on file.",
        "Pay the $300 issuance fee ($150 if within one year of the quadrennial renewal date) - there is no state examination.",
        "Corporate applicants that are not sole proprietors also upload corporate filings for the firm."
      ],
      "processingTime": null,
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
    },
    "renewal": {
      "cycle": "Every 4 years; licenses expire October 1 (2023, 2027, and so on)",
      "ce": "None",
      "fee": "$300",
      "late": "A license expired 3 or more years can be reinstated online for $600 ($300 renewal + $300 application)",
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
    },
    "reciprocity": {
      "rule": "No formal reciprocity or endorsement provision is published by the Board for private investigator firms.",
      "agreements": null,
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,830",
      "p25": "$37,990",
      "p75": "$53,590",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=IN"
    },
    "localNuance": "Indiana licenses the business entity, not the individual: a solo operator must hold a Private Investigator Firm license, while employees of a licensed firm generally do not need their own license. The license also confers no authority to carry a weapon or make arrests.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Is there an exam for an Indiana private investigator license?",
        "a": "No. The Private Investigator and Security Guard Licensing Board does not require a state examination; qualification is through 4,000 hours of documented experience or a criminal justice bachelor's degree, background checks, and board approval."
      },
      {
        "q": "Do I need an individual license or a firm license in Indiana?",
        "a": "Indiana issues firm licenses only, so even a sole proprietor applies as a Private Investigator Firm. Employees working under a licensed firm generally do not need their own license."
      },
      {
        "q": "What insurance must an Indiana PI firm carry?",
        "a": "At least $100,000 in general liability coverage that names the State of Indiana as an additional insured, with 10 days' cancellation notice to the Board, per IC 25-30-1-15."
      },
      {
        "q": "When does the Indiana PI firm license renew?",
        "a": "Every four years on October 1 (2023, 2027, and so on) for $300. The qualifier must also submit state-level limited criminal history checks for the four preceding years; third-party background checks are not accepted."
      },
      {
        "q": "Does an Indiana PI license let me carry a firearm or make arrests?",
        "a": "No. The Board states plainly that nothing in the statutes or rules authorizes a licensee to carry a weapon, and only sworn law enforcement officers may make arrests."
      }
    ],
    "sources": [
      {
        "label": "Indiana PLA - Private Investigator and Security Guard licensing information (requirements, fees, renewal)",
        "url": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
        "checkedOn": "2026-10"
      },
      {
        "label": "874 IAC 1-2 - Private investigator rules (experience and education standards)",
        "url": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
        "checkedOn": "2026-10"
      },
      {
        "label": "IC 25-30-1-15 - Private investigator firm insurance requirement",
        "url": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Indiana firm-license structure and application checklist (secondary)",
        "url": "https://privateinvestigatoredu.org/indiana/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "IA": {
    "agency": "Iowa Department of Public Safety - Private Investigative / Private Security / Bail Enforcement licensing (Program Services Bureau)",
    "agencyUrl": "https://dps.iowa.gov/",
    "exam": {
      "vendor": "None - the Iowa DPS FAQ states no examination is required for a private investigative license",
      "vendorUrl": "https://dps.iowa.gov/media/485/download?inline=",
      "parts": [],
      "fee": null,
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline=",
      "sourceNote": "DPS FAQ question 8: 'Do I need to take an examination... No'; older 661 IAC 2.4 rules retain examination language"
    },
    "education": {
      "hours": "None",
      "breakdown": "Iowa imposes no education or experience prerequisite for agency licensure; the qualifying standards are character- and background-based (Iowa Code 80A.4; 661 IAC 2.5).",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
    },
    "experience": "No experience requirement. However, a licensed private investigator and that licensee's employees must complete 12 hours of continuing education in the two years before each license renewal.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "No residency requirement; sworn Iowa peace officers are barred (except reserve officers)",
      "education": "None",
      "other": "No felony or aggravated misdemeanor conviction (a deferred judgment counts as a conviction until discharge), no weapons or assault-related convictions under Iowa Code 708, no alcohol or controlled substance abuse, no history of repeated violence or mental instability, and good moral character (661 IAC 2.5)."
    },
    "background": {
      "method": "Two FBI FD-258 fingerprint cards rolled by a law enforcement agency, or Fieldprint enrollment using the DPS code issued after filing; $30 fingerprint background check",
      "fee": "$30 per fingerprint set",
      "disqualifiers": "Felony or aggravated misdemeanor conviction, weapons and harassment convictions under Iowa Code 708.3-708.9, fugitive status, substance abuse, or a history of repeated acts of violence",
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
    },
    "fees": [
      {
        "item": "Agency license (2 years)",
        "fee": "$100 per license type",
        "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
      },
      {
        "item": "Employee ID card",
        "fee": "$10 per card type (Form PD2)",
        "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
      },
      {
        "item": "Fingerprint background check",
        "fee": "$30",
        "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
      },
      {
        "item": "Surety bond",
        "fee": "$5,000 bond for a single license type; $10,000 if licensed for more than one Chapter 80A activity (Form PD6)",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa"
      },
      {
        "item": "Liability insurance",
        "fee": "Certificate covering general liability, completed operations, and personal injury (false arrest, libel/slander/privacy, wrongful entry) per Iowa Code 80A.10A",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa"
      }
    ],
    "application": {
      "portal": "Iowa DPS licensing portal (ImageTrend)",
      "portalUrl": "https://iowadps.imagetrendlicense.com/lms/public/portal#/lookup",
      "steps": [
        "Create a portal account and submit a 'Start Your Own Company' request; DPS opens the agency record and then the PD1 agency application can be completed.",
        "Upload a current passport-style photo and submit fingerprints (two FD-258 cards or Fieldprint using the DPS code).",
        "Upload the PD6 surety bond form - $5,000 for a PI-only agency, $10,000 if also holding another Chapter 80A license type.",
        "Upload a certificate of insurance for general liability, completed operations, and personal injury coverage, and pay the $100 license fee plus fingerprint and ID card fees.",
        "LLCs and corporations add Form PD5 or PD7 with evidence of authority to do business in Iowa."
      ],
      "processingTime": null,
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "12 hours of continuing education during the two years before renewal for private investigator licenses",
      "fee": "$100 per license type",
      "late": "Renewal (Form PD3) is due at least 30 days before expiration",
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
    },
    "reciprocity": {
      "rule": "Iowa does not publish a reciprocity pathway; the DPS FAQ addresses licensing only under Iowa Code chapter 80A.",
      "agreements": null,
      "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,110",
      "p25": "$38,380",
      "p75": "$54,680",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=IA"
    },
    "localNuance": "Iowa requires an employee ID card issued under a specific agency name, so the card is only valid while working for the sponsoring agency; staff who split time between firms need a separate $10 ID card from each. Sworn Iowa peace officers are prohibited from holding these licenses.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dps.iowa.gov/media/485/download?inline="
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Iowa require an exam or prior experience to become a private investigator?",
        "a": "No. The DPS FAQ states no examination is required, and there are no education or experience prerequisites - qualification rests on the background standards in 661 IAC 2.5 and Iowa Code 80A.4. Continuing education (12 hours per two-year cycle) applies after licensure."
      },
      {
        "q": "How much does an Iowa private investigative license cost?",
        "a": "$100 for the two-year agency license, $30 for the fingerprint background check, and $10 per employee ID card - $140 in state fees for a typical solo applicant, plus the $5,000 surety bond premium."
      },
      {
        "q": "What bond and insurance do I need?",
        "a": "A $5,000 surety bond for a single license type, or $10,000 if you hold more than one Chapter 80A license, filed on Form PD6. You must also show a certificate of insurance covering general liability, completed operations, and personal injury exposures such as false arrest and wrongful entry (Iowa Code 80A.10A)."
      },
      {
        "q": "Can I work for more than one Iowa agency?",
        "a": "Yes. Iowa law does not prohibit it, but each agency issues its own $10 employee ID card and your card for one agency is invalid while you work for another."
      },
      {
        "q": "Who is barred from Iowa PI licensure?",
        "a": "Sworn Iowa peace officers (other than reserve officers) cannot be licensed, and applicants with felony or aggravated misdemeanor convictions, weapons or harassment convictions under Iowa Code 708, substance abuse problems, or a history of repeated violence are disqualified."
      }
    ],
    "sources": [
      {
        "label": "Iowa DPS - Private Investigative/Private Security/Bail Enforcement FAQ (fees, exam, CE, ID cards)",
        "url": "https://dps.iowa.gov/media/485/download?inline=",
        "checkedOn": "2026-10"
      },
      {
        "label": "661 Iowa Administrative Code chapter 2 - Private investigation and private security businesses (license standards 2.5, fees 2.7)",
        "url": "https://www.legis.iowa.gov/docs/ACO/GNAC/iacpdf(7-1-98)/iac/661iac/6612/6612.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "661 IAC consolidated rules PDF (April 2021) - license requirements and examination provisions",
        "url": "https://www.legis.iowa.gov/docs/iac/agency/04-07-2021.661.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Iowa application forms, bond and insurance requirements (secondary, citing Iowa Code 80A and DPS forms)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-iowa",
        "checkedOn": "2026-10"
      }
    ]
  },
  "KS": {
    "agency": "Kansas Attorney General - Private Detective Licensing Unit",
    "agencyUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
    "exam": {
      "vendor": "Kansas Attorney General (state-written exam included in the application packet, plus an interview)",
      "vendorUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
      "parts": [
        {
          "name": "Written examination",
          "questions": "Not published",
          "time": "Not published",
          "pass": "Not published"
        }
      ],
      "fee": null,
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
      "sourceNote": "K.S.A. 75-7b20 authorizes the exam and interview; the AG packet contains the exam materials"
    },
    "education": {
      "hours": "None",
      "breakdown": "Kansas has no education or experience hour requirement; competency is screened through the written examination and interview rather than documented work history.",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
    },
    "experience": "Kansas mandates no specific years of prior investigative or law enforcement experience. Applicants qualify through the written exam, interview, background check, and character references.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizen (statutory requirement, K.S.A. 75-7b04)",
      "education": "High school diploma or GED",
      "other": "Five verified personal references from reputable citizens who have known the applicant at least 5 years (the AG may shorten this for honorably discharged veterans), plus two photographs taken within 30 days. Felony convictions and a list of misdemeanors within the prior 10 years (moral turpitude, dishonesty, assault, battery, weapon offenses, and others) are grounds for denial."
    },
    "background": {
      "method": "Two classifiable fingerprint card sets; one is submitted to the Kansas Bureau of Investigation for a state and national criminal history record check (K.S.A. 75-7b04)",
      "fee": null,
      "disqualifiers": "Any felony conviction; within the previous 10 years, misdemeanor convictions for moral turpitude, dishonesty, vehicular homicide, assault, battery, criminal restraint, sexual battery, endangering a child, witness intimidation, or weapon offenses",
      "sourceUrl": "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
    },
    "fees": [
      {
        "item": "Application (individual detective)",
        "fee": "$250",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
      },
      {
        "item": "Application (agency officer/director/partner/associate)",
        "fee": "$100",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
      },
      {
        "item": "Renewal (every 2 years)",
        "fee": "$175",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
      },
      {
        "item": "Financial responsibility (choose one)",
        "fee": "$100,000 corporate surety bond, OR $100,000 liability insurance, OR a $100,000 cash deposit with the State Treasurer (K.S.A. 75-7b11)",
        "sourceUrl": "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-kansas"
      },
      {
        "item": "Optional firearm permit",
        "fee": "$50 (separate permit with training and demonstrated need; $50 renewal)",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
      }
    ],
    "application": {
      "portal": "Paper application packet from the Attorney General's Licensing Unit",
      "portalUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
      "steps": [
        "Request or download the Private Detective Initial Application packet from the Attorney General; a printed packet request carries a small materials fee credited toward the application fee.",
        "Complete the application with employment history, two passport photos taken within 30 days, and two classifiable fingerprint card sets taken by law enforcement.",
        "Obtain verified reference certificates from five reputable citizens who have known you at least five years, notarized before an officer authorized to take oaths.",
        "Choose and document financial responsibility: a $100,000 surety bond, $100,000 liability insurance, or a $100,000 cash deposit with the State Treasurer.",
        "Complete the written examination in the packet and the subsequent interview; the Attorney General processes applications, with licensing decisions typically within about 90 days."
      ],
      "processingTime": "Approximately 90 days from receipt of a complete packet",
      "sourceUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "8 hours of Attorney General-approved continuing education per renewal cycle",
      "fee": "$175",
      "late": null,
      "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas"
    },
    "reciprocity": {
      "rule": "No reciprocity provision appears in the Private Detective Licensing Act; out-of-state licensees apply like any new applicant.",
      "agreements": null,
      "sourceUrl": "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$45,260",
      "p25": "$36,900",
      "p75": "$60,610",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=KS"
    },
    "localNuance": "Kansas is one of the few states with no experience-hour mandate; the exam and interview do the screening. Detectives who carry firearms need a separate $50 firearms permit from the Attorney General with documented training and need.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Kansas require prior investigative experience?",
        "a": "No. Kansas sets no experience-hour or law enforcement prerequisite. The gate is the Attorney General's written examination plus an interview, along with the five five-year character references and the background check."
      },
      {
        "q": "What are the five references requirement?",
        "a": "Each of five reputable citizens must attest under oath, before an officer authorized to take oaths, that they have personally known the applicant for at least five years, are not related by blood or marriage, and believe the applicant is honest, of good character, and competent. The Attorney General may shorten the five years for recent honorably discharged military veterans."
      },
      {
        "q": "How do I satisfy the $100,000 financial responsibility rule?",
        "a": "Three options exist under K.S.A. 75-7b11: a $100,000 corporate surety bond, a $100,000 liability insurance policy, or a $100,000 cash deposit with the State Treasurer. The bond route is the most common."
      },
      {
        "q": "How much does a Kansas detective license cost and how long does it last?",
        "a": "The individual application fee is $250 ($100 for an agency officer or partner), the two-year renewal is $175, and each renewal cycle requires 8 hours of AG-approved continuing education. An optional firearms permit adds $50."
      },
      {
        "q": "How long does Kansas take to issue a license?",
        "a": "The Attorney General generally processes a complete application packet within about 90 days of receipt, so plan the fingerprinting and reference collection well ahead."
      }
    ],
    "sources": [
      {
        "label": "Kansas Attorney General - Private Detective Licensing (applications, statutes, regulations, directories)",
        "url": "https://www.ag.ks.gov/divisions/civil/licensing-inspections/private-detective-licensing",
        "checkedOn": "2026-10"
      },
      {
        "label": "K.S.A. 75-7b04 - Licensure, application, references, qualifications, grounds for denial",
        "url": "https://www.kslegislature.gov/laws/075_000_0000_chapter/075_007b_0000_article/075_007b_0004_section/075_007b_0004_k",
        "checkedOn": "2026-10"
      },
      {
        "label": "Kansas private detective fees, exam, bond, and CE summary (secondary)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-kansas",
        "checkedOn": "2026-10"
      },
      {
        "label": "Kansas PI licensing overview including financial responsibility options (secondary)",
        "url": "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-kansas",
        "checkedOn": "2026-10"
      }
    ]
  },
  "KY": {
    "agency": "Kentucky Board of Licensure for Private Investigators (Public Protection Cabinet)",
    "agencyUrl": "https://kpi.ky.gov/",
    "exam": {
      "vendor": "Schroeder Measurement Technologies (SMT), under contract to the Board",
      "vendorUrl": "https://kpi.ky.gov/",
      "parts": [
        {
          "name": "Kentucky private investigator examination",
          "questions": "Not published (scaled 150-300)",
          "time": "Not published",
          "pass": "260 scaled"
        }
      ],
      "fee": "$156 (paid to the testing vendor)",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026",
      "sourceNote": "Scores scale 150-300 with 260 passing; content covers constitutional principles, eavesdropping/search and seizure law, and investigator liability (201 KAR 41:030)"
    },
    "education": {
      "hours": "None",
      "breakdown": "Kentucky requires a high school diploma or GED only; no college coursework or training hours apply.",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
    },
    "experience": "No pre-licensure experience hours are required by statute or regulation; the examination and background standards serve as the qualification screen.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizen or resident alien",
      "education": "High school diploma or equivalent (KRS 329A.035(3)(c))",
      "other": "No felony license until 10 years after release from sentence or restoration of civil rights; no misdemeanor involving moral turpitude or dishonesty within 5 years; no dishonorable discharge; no revoked peace officer certification; controlled substance and mental fitness exclusions apply. Fire or arson investigators must add current national certification from NAFI or IAAI (KRS 329A.035(1)(c))."
    },
    "background": {
      "method": "Three sets of classifiable fingerprints; Kentucky State Police and FBI record checks plus an Administrative Office of the Courts statewide court record check",
      "fee": "State and federal amounts set under 502 KAR 30:060 and 28 CFR 16.33; paid to the Kentucky State Treasurer",
      "disqualifiers": "Felony within 10 years of release or before civil rights restoration; moral turpitude or dishonesty misdemeanor within 5 years; dishonorable discharge; revoked peace officer certification",
      "sourceUrl": "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
    },
    "fees": [
      {
        "item": "Application (nonrefundable)",
        "fee": "$100",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026"
      },
      {
        "item": "License fee (paid after passing exam)",
        "fee": "$300 (completes the $400 initial total)",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026"
      },
      {
        "item": "Examination",
        "fee": "$156 paid to Schroeder Measurement Technologies",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026"
      },
      {
        "item": "Liability insurance",
        "fee": "$250,000 combined single limit (waived only for investigators working exclusively under attorney supervision)",
        "sourceUrl": "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
      },
      {
        "item": "Company application (if forming an agency)",
        "fee": "$100 sole proprietorship; $400 firm, association, partnership, or corporation",
        "sourceUrl": "https://privateinvestigatoredu.org/kentucky/"
      }
    ],
    "application": {
      "portal": "Board application packet (Individual Application for Licensure)",
      "portalUrl": "https://kpi.ky.gov/",
      "steps": [
        "Submit the Individual Application with the $100 nonrefundable fee, three fingerprint sets, five-year residence and employment history, and the AOC court record check.",
        "Attach the $250,000 combined single limit liability certificate (not required for attorney-supervised investigators) and, for fire/arson work, national certification.",
        "After the Board confirms eligibility, schedule the SMT exam; you must sit within 60 days of eligibility, pass within 6 months (maximum two attempts, then a 12-month wait).",
        "Submit the $300 license fee upon passing to receive the license and photo ID card.",
        "Sole proprietors and companies file the separate Company Application ($100 or $400 depending on entity type)."
      ],
      "processingTime": "Applications commonly take two to three months to evaluate",
      "sourceUrl": "https://privateinvestigatoredu.org/kentucky/"
    },
    "renewal": {
      "cycle": "2 years; renewals due June 30",
      "ce": "12 hours of continuing education every two years (201 KAR 41:070)",
      "fee": "$250",
      "late": "Late renewal is permitted July 1 through August 31 with an added $250 late fee",
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026"
    },
    "reciprocity": {
      "rule": "Kentucky publishes no reciprocity or endorsement route in KRS chapter 329A; out-of-state investigators apply as new applicants.",
      "agreements": null,
      "sourceUrl": "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$47,650",
      "p25": "$40,220",
      "p75": "$56,080",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=KY"
    },
    "localNuance": "Kentucky exempts investigators working exclusively under attorney supervision from the $250,000 insurance requirement, and it requires national fire/arson certification (NAFI or IAAI) before a licensee may conduct fire or arson investigations.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://kpi.ky.gov/"
      }
    ],
    "stateFaqs": [
      {
        "q": "What score do I need on the Kentucky PI exam?",
        "a": "The SMT-administered exam is scaled from 150 to 300 and 260 is passing. After the Board declares you eligible you must sit within 60 days, and you have six months and two attempts to pass before a 12-month waiting period applies."
      },
      {
        "q": "Does Kentucky require investigative experience?",
        "a": "No. KRS chapter 329A and 201 KAR chapter 41 set no experience-hour requirement; the exam, background standards, and insurance requirement do the screening."
      },
      {
        "q": "How much does Kentucky licensure cost in total?",
        "a": "Budget $400 to the Board ($100 application plus $300 license fee), $156 to the testing vendor, fingerprint and AOC record fees paid to the State Treasurer, and the premium on a $250,000 liability policy. Renewals run $250 every two years plus 12 CE hours."
      },
      {
        "q": "Who is exempt from Kentucky's insurance requirement?",
        "a": "The $250,000 combined single limit liability policy is waived for investigators who work exclusively under the supervision of an attorney. Everyone else must file the certificate with the application."
      },
      {
        "q": "What happens if I miss the June 30 renewal?",
        "a": "The Board allows a late renewal window from July 1 through August 31 with an additional $250 late fee, on top of the regular $250 renewal fee and the 12 hours of CE."
      }
    ],
    "sources": [
      {
        "label": "KRS 329A.035 - Applications for licenses, requirements (age, citizenship, fingerprints, insurance, fire/arson certification)",
        "url": "https://law.justia.com/codes/kentucky/chapter-329a/section-329a-035",
        "checkedOn": "2026-10"
      },
      {
        "label": "Kentucky Board of Licensure for Private Investigators",
        "url": "https://kpi.ky.gov/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Kentucky PI exam rules, fees, and renewal details citing 201 KAR 41:020-070 (secondary)",
        "url": "https://licensenavigator.ai/blog/private-investigator-in-kentucky-license-2026",
        "checkedOn": "2026-10"
      },
      {
        "label": "Kentucky application process and company license fees (secondary)",
        "url": "https://privateinvestigatoredu.org/kentucky/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "LA": {
    "agency": "Louisiana State Board of Private Investigator Examiners (LSBPIE)",
    "agencyUrl": "https://lsbpie.com/licenseinfo.aspx",
    "exam": {
      "vendor": "LSBPIE (board-administered examination)",
      "vendorUrl": "https://lsbpie.com/licenseinfo.aspx",
      "parts": [
        {
          "name": "LSBPIE private investigator examination",
          "questions": "Not published",
          "time": "Not published",
          "pass": "75%"
        }
      ],
      "fee": "$100 exam fee; $25 retake after a 30-day wait",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://lsbpie.com/licenseinfo.aspx",
      "sourceNote": "LA R.S. 37:3509 - 75% passing score; retakes after 30 days at $25"
    },
    "education": {
      "hours": "40-hour board-approved course",
      "breakdown": "All applicants must complete a Board-approved 40-hour Basic Private Investigation Preparatory course (covering Louisiana PI law, use of force, safety, and investigative techniques) before sitting for the exam; statutory exemptions exist under LA R.S. 37:3510. The optional board manual costs $50 plus $15 shipping.",
      "onlineAllowed": "Courses are offered through approved Louisiana colleges and universities; the board lists approved providers",
      "apprenticeship": "Apprentice license: one year, nonrenewable, sponsored by a licensed Louisiana agency, allowing time to complete the 40-hour course and exam",
      "sourceUrl": "https://lsbpie.com/licenseinfo.aspx"
    },
    "experience": "Individual and journeyman licenses require no prior experience beyond the course and exam. An agency license requires three years of investigative experience within the last ten years, either as a private investigator or in an investigative capacity (LA R.S. 37:3507.2).",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or resident alien with proper work authorization",
      "education": "None beyond the 40-hour course",
      "other": "No felony or crime of moral turpitude conviction, no court-declared incompetence (unless restored), and not a practicing alcoholic or drug addict (LA R.S. 37:3507). Corporations must be Louisiana-incorporated or qualified to do business in the state."
    },
    "background": {
      "method": "Two Louisiana State Police forms plus two fingerprint cards for state and national criminal history checks",
      "fee": "$43 background check fee per the LSBPIE fee schedule",
      "disqualifiers": "Any felony conviction or conviction for a crime involving moral turpitude (LA R.S. 37:3507)",
      "sourceUrl": "https://lsbpie.com/forms/application_Journeyman.pdf"
    },
    "fees": [
      {
        "item": "Application package request",
        "fee": "$10 money order (packet is mailed, not downloadable)",
        "sourceUrl": "https://lsbpie.com/licenseinfo.aspx"
      },
      {
        "item": "Journeyman application (total)",
        "fee": "$339.25 (application, exam, initial license, and background check fees combined)",
        "sourceUrl": "https://lsbpie.com/forms/application_Journeyman.pdf"
      },
      {
        "item": "Examination",
        "fee": "$100; $25 retake after 30 days",
        "sourceUrl": "https://lsbpie.com/licenseinfo.aspx"
      },
      {
        "item": "Renewal (annual)",
        "fee": "$150 individual / $300 agency",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees"
      },
      {
        "item": "Returned application processing",
        "fee": "$20 (charged when an incomplete packet is returned)",
        "sourceUrl": "https://lsbpie.com/forms/application_Journeyman.pdf"
      }
    ],
    "application": {
      "portal": "Paper application by mail (in-person filing Monday-Thursday, 8:00-10:30 am and 12:30-2:00 pm)",
      "portalUrl": "https://lsbpie.com/licenseinfo.aspx",
      "steps": [
        "Request the application package in writing with a $10 money order, specifying AGENCY, INDIVIDUAL, APPRENTICE, or JOURNEYMAN.",
        "Complete the board-approved 40-hour Basic Private Investigation Preparatory course through an approved college or university and pass the LSBPIE exam at 75% or better.",
        "Assemble the notarized application, affidavit, driver's license copy, one 5 x 7 color photograph on a light background, two State Police forms, and two fingerprint cards.",
        "Submit the complete packet with the fee (money order or check; no cash or credit cards) - incomplete packets are returned with a $20 processing charge.",
        "Journeyman licensees may only work through LSBPIE-licensed agencies and cannot take cases directly from the public, attorneys, businesses, or government agencies."
      ],
      "processingTime": "2-3 months average for mailed applications",
      "sourceUrl": "https://lsbpie.com/forms/application_Journeyman.pdf"
    },
    "renewal": {
      "cycle": "Annual; licenses expire on the anniversary of issuance (LA R.S. 37:3517)",
      "ce": "At least 8 hours of continuing education per year, plus the LSBPIE-approved online investigative course every two years (LAC 46:LVII-518)",
      "fee": "$150 individual / $300 agency",
      "late": null,
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees"
    },
    "reciprocity": {
      "rule": "Act 253 of 2024 created a licensure-by-endorsement path for investigators currently licensed in other states who meet the board's conditions and pass the Louisiana examination.",
      "agreements": null,
      "sourceUrl": "https://lsbpie.com/licenseinfo.aspx"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,950",
      "p25": "$36,750",
      "p75": "$52,930",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=LA"
    },
    "localNuance": "Louisiana's journeyman license is restricted to agency work - direct-to-client cases require an agency license, which demands three years of investigative experience in the past ten years. Application packets are not downloadable; each costs a $10 money order to request by mail.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "Act 253 of the 2024 legislative session added licensure by endorsement, allowing currently licensed out-of-state private investigators to obtain a Louisiana license after meeting board conditions and passing the Louisiana exam.",
        "sourceUrl": "https://lsbpie.com/licenseinfo.aspx"
      }
    ],
    "stateFaqs": [
      {
        "q": "What training and exam does Louisiana require?",
        "a": "Every applicant completes the board-approved 40-hour Basic Private Investigation Preparatory course, then passes the LSBPIE exam with 75% or higher. The exam fee is $100, and a failed attempt can be retaken after 30 days for $25."
      },
      {
        "q": "Do I need experience for an individual Louisiana PI license?",
        "a": "No - individual and journeyman licenses require only the 40-hour course and exam. Only the agency license requires three years of investigative experience within the last ten years (LA R.S. 37:3507.2)."
      },
      {
        "q": "How do I get an LSBPIE application?",
        "a": "Packets are not available online. Mail a $10 money order to the board at 7414 Perkins Rd, Suite 120, Baton Rouge, LA 70808 with your name, address, and license type; the board mails the paper packet back."
      },
      {
        "q": "What can a journeyman licensee do?",
        "a": "A journeyman may only provide investigative services through agencies licensed by LSBPIE. Journeyman investigators cannot contract directly with the public, attorneys, private businesses, or government agencies - that requires an agency license."
      },
      {
        "q": "Does Louisiana recognize out-of-state PI licenses?",
        "a": "Yes, as of 2024. Act 253 created licensure by endorsement for investigators already licensed in other states, provided they satisfy the board's conditions and pass the Louisiana examination."
      }
    ],
    "sources": [
      {
        "label": "LSBPIE License Info - qualifications (R.S. 37:3507, 37:3509), 40-hour course, exam, application instructions",
        "url": "https://lsbpie.com/licenseinfo.aspx",
        "checkedOn": "2026-10"
      },
      {
        "label": "LSBPIE Journeyman Application Package and Checklist (fees, fingerprint forms, journeyman scope)",
        "url": "https://lsbpie.com/forms/application_Journeyman.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Louisiana PI statutory fees, renewal, CE, and Act 253 endorsement (secondary)",
        "url": "https://licensenavigator.ai/blog/private-investigator-in-louisiana-license-exam-fees",
        "checkedOn": "2026-10"
      },
      {
        "label": "Louisiana license categories, fees, and apprentice pathway (secondary)",
        "url": "https://privateinvestigatoredu.org/louisiana",
        "checkedOn": "2026-10"
      }
    ]
  },
  "ME": {
    "agency": "Maine State Police - Weapons and Professional Licensing Unit (Special Investigations)",
    "agencyUrl": "https://www.maine.gov/dps/msp/",
    "exam": {
      "vendor": "Maine State Police (examination administered by the chief of the State Police)",
      "vendorUrl": "https://www.maine.gov/dps/msp/",
      "parts": [
        {
          "name": "Maine professional investigators examination",
          "questions": "Not published",
          "time": "Not published",
          "pass": "Not published (chief prescribes subjects)"
        }
      ],
      "fee": "$450 due upon passing, in addition to the $71 application fee",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf",
      "sourceNote": "32 MRSA 8105(8); after processing, the State Police mails a test date letter with study material"
    },
    "education": {
      "hours": "None required by coursework",
      "breakdown": "Education enters through the qualification pathways: 60 postsecondary credits in a related field or a private investigation certificate (pathway A), or an associate degree in police administration, security management, investigation, law, criminal justice, computer forensics, or a similar field (pathway D).",
      "onlineAllowed": "Not applicable",
      "apprenticeship": "Investigative assistant sponsorship program under a licensed professional investigator (32 MRSA 8110-B), combined with 60 related college credits or a PI certificate",
      "sourceUrl": "https://mainelegislature.org/statutes/32/title32sec8105.html"
    },
    "experience": "One of four statutory pathways (32 MRSA 8105(7-A)): (A) investigative assistant sponsorship plus 60 related college credits or a PI certificate; (B) 3 years as a full-time federal investigator or armed forces investigator; (B-1) 3 years holding a substantially equivalent license in another state that grants Maine licensees similar reciprocity; (C) 3 years as a trained law enforcement officer of a state or political subdivision; or (D) 6 years of combined preparation including at least 2 years of nonclerical law- or criminal-justice-related work plus an associate degree or 60 related credits.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizen or resident alien",
      "education": "High school graduate or state-granted equivalency",
      "other": "Good moral character assessed on the prior 5 years (no crime punishable by a year or more of imprisonment, no domestic abuse incidents, no 3 or more Class D/E convictions or civil violations, no child support arrears, no reckless endangerment); no dishonorable discharge (32 MRSA 8105)."
    },
    "background": {
      "method": "Criminal record checks through law enforcement agencies under the signed authorization in the application; applicants who lived in another state within the last 5 years must obtain a criminal history record from that state's repository",
      "fee": "$21 criminal history check fee (part of the $71 initial fee)",
      "disqualifiers": "Conviction of any crime punishable by a maximum sentence of one year or more, dishonorable discharge, or failure of the 5-year good moral character review",
      "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf"
    },
    "fees": [
      {
        "item": "Application (with criminal history check)",
        "fee": "$71 ($50 application + $21 criminal history check), submitted with the packet",
        "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf"
      },
      {
        "item": "License issuance (after passing exam)",
        "fee": "$450 (statutory total $500 for the original biennial license, 32 MRSA 8117)",
        "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf"
      },
      {
        "item": "Renewal (4-year cycle)",
        "fee": "$500 (refundable if renewal is denied)",
        "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf"
      }
    ],
    "application": {
      "portal": "Paper application packet mailed to Maine State Police Weapons and Professional Licensing, 164 State House Station, Augusta, ME 04333",
      "portalUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf",
      "steps": [
        "Complete the 5-page Professional Investigator application (third page notarized) plus the DHHS Form 577 and P-3E information release forms.",
        "Attach the $71 fee payable to 'Treasurer, State of Maine,' a high school diploma or GED copy, a color photo taken within six months, a birth certificate or resident alien card, and any military discharge copy.",
        "Include detailed qualification documentation for the chosen 8105 pathway - college transcripts, law enforcement academy certificates, investigative assistant sponsorship records, or employer documentation.",
        "Applicants who lived outside Maine in the last 5 years order criminal history records from each prior state's repository.",
        "After processing, the State Police mails a test date letter with study material; the $450 balance is due on the test date."
      ],
      "processingTime": "No published timeline; the review, background check, and exam scheduling take several weeks or more",
      "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf"
    },
    "renewal": {
      "cycle": "Initial license runs 2 years; renewals then fall on a 4-year cycle (32 MRSA 8109)",
      "ce": "None published",
      "fee": "$500 per 4-year renewal (32 MRSA 8117)",
      "late": "A license not renewed within 60 days of expiration is treated as a new original application with all original fees and requirements",
      "sourceUrl": "https://legis.maine.gov/legis/statutes/32/title32sec8109.html"
    },
    "reciprocity": {
      "rule": "Maine grants a qualification-pathway equivalent for applicants who held another state's PI license for at least 3 years (32 MRSA 8105(7-A)(B-1)), provided the other state's requirements were substantially equivalent and it grants Maine licensees similar reciprocity; the full Maine application and background process still applies.",
      "agreements": null,
      "sourceUrl": "https://mainelegislature.org/statutes/32/title32sec8105.html"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$43,830",
      "p25": "$39,580",
      "p75": "$54,070",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=ME"
    },
    "localNuance": "Maine titles its licensees 'professional investigators' and separately licenses entry-level investigative assistants, who log sponsored hours toward the professional investigator pathways. Badges that could suggest peace officer status are prohibited, and licensees must show proof of a valid license to clients before contracting.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.maine.gov/dps/msp/"
      }
    ],
    "stateFaqs": [
      {
        "q": "How old do I have to be for a Maine professional investigator license?",
        "a": "21. 32 MRSA 8105(1) sets the minimum age at 21 years, along with high school graduation or equivalency and US citizenship or resident alien status."
      },
      {
        "q": "What are the experience pathways in Maine?",
        "a": "Four routes qualify you under 32 MRSA 8105(7-A): an investigative assistant sponsorship plus 60 related college credits or a PI certificate; 3 years as a federal or armed forces investigator; 3 years as a trained law enforcement officer; or 6 years combining at least 2 years of law- or criminal-justice-related work with an associate degree or 60 credits. Three years licensed in an equivalent reciprocal state also qualifies."
      },
      {
        "q": "How much does a Maine PI license cost?",
        "a": "The initial packet requires $71 ($50 application plus $21 criminal history check), and the $450 balance is due when you pass the exam, for a statutory $500 original license. Renewals cost $500 on the 4-year cycle."
      },
      {
        "q": "What happens if my Maine license lapses?",
        "a": "If you fail to renew within 60 days of expiration, the next application is processed as a brand-new original application - full fees, all qualification requirements, and the exam again. There is no grace period beyond the 60 days."
      },
      {
        "q": "Can I carry a firearm as a Maine professional investigator?",
        "a": "Only with a concealed handgun permit issued by the chief under Title 25 chapter 252 plus a passing score on the chief's written firearms examination (32 MRSA 8120-A). Badges suggesting peace officer status are prohibited outright."
      }
    ],
    "sources": [
      {
        "label": "32 MRSA 8105 - Professional investigator license qualifications (age 21, pathways, examination)",
        "url": "https://mainelegislature.org/statutes/32/title32sec8105.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "32 MRSA 8109 and 8117 - renewal cycle and fees (Maine Professional Investigators handbook)",
        "url": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/ProfessionalInvestigatorsHandbook_.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maine State Police - Professional Investigator License New application packet (fees, documents, test-date process)",
        "url": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/Professional_Investigator_New%20Application.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "32 MRSA 8109 - Renewal of license statute",
        "url": "https://legis.maine.gov/legis/statutes/32/title32sec8109.html",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MD": {
    "agency": "Maryland State Police - Licensing Division, Professional Licensing",
    "agencyUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx",
    "exam": null,
    "education": {
      "hours": "None",
      "breakdown": "Maryland sets no education or training-hour requirement for the individual Private Detective Certificate; eligibility rests on age, background standards, and agency sponsorship.",
      "onlineAllowed": "Not applicable",
      "apprenticeship": null,
      "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
    },
    "experience": "None for the individual Private Detective Certificate. The Private Detective Agency License requires the firm's qualifying member to be at least 25 and meet one of the State Police's experience routes (such as 5 years as a certified private detective, or 3-5 years in specified investigative or law enforcement roles).",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not specified on the certification page",
      "education": "None",
      "other": "Applicants must be sponsored by a licensed private detective agency, and certification applies only to that agency - changing employers requires a new sponsored application. Ineligibility covers felony or crime-of-violence convictions (COMAR 29.04.08.03), narcotics or barbiturate addiction, habitual drunkenness, fugitive status, recent institutionalization for mental disorder without physician clearance, and false application statements."
    },
    "background": {
      "method": "Livescan fingerprints to the Maryland Criminal Justice Information System (CJIS) and FBI using authorization number 9400082495 and ORI MDMSP6000",
      "fee": "CJIS and FBI fees paid to the LiveScan vendor; prints expire 30 days after submission",
      "disqualifiers": "Crime of violence as defined in COMAR 29.04.08.03, any felony conviction, drug addiction, habitual drunkenness, fugitive from justice, or a work-related criminal conviction",
      "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
    },
    "fees": [
      {
        "item": "Private Detective certification (initial)",
        "fee": "$15 (collected electronically in the Licensing Portal; excludes fingerprint fees)",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      {
        "item": "Private Detective certification (renewal)",
        "fee": "$10",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      },
      {
        "item": "Private Detective Agency license (initial)",
        "fee": "$200 individual / $375 incorporated firm ($375 unincorporated or $750 incorporated for combined detective plus security)",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland"
      },
      {
        "item": "Agency insurance (if employing 5 or more detectives)",
        "fee": "At least $1,000,000 commercial general liability including errors and omissions (Md. Bus. Occ. and Prof. 13-304)",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland"
      }
    ],
    "application": {
      "portal": "Maryland State Police Licensing Portal (electronic submission since January 2025)",
      "portalUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx",
      "steps": [
        "Submit Livescan fingerprints to CJIS and the FBI first - prints are valid for only 30 days, so the application must be filed within that window.",
        "Create or log into the MSP Licensing Portal account and complete the Private Detective application; upload the LiveScan receipt and a passport-style color photo taken within the prior 30 days, and sign the FBI Privacy Act Statement.",
        "Provide your application number and PIN to the sponsoring private detective agency, which then completes and pays for the application through the portal.",
        "MSP issues the certification for a 3-year term tied to the sponsoring agency; the card is state property and must be returned within 5 days if employment ends.",
        "Renew through the portal at least 90 days before expiration with a fresh LiveScan receipt and the $10 fee; late renewals under 30 days before expiration accrue $5 per day up to $150."
      ],
      "processingTime": "Allow up to 90 business days for a complete application",
      "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
    },
    "renewal": {
      "cycle": "3 years (certification is agency-specific)",
      "ce": "None",
      "fee": "$10",
      "late": "$5 per day up to $150 if the renewal is not filed at least 30 calendar days before expiration (waived for incapacity, hospitalization, military duty, or hardship)",
      "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
    },
    "reciprocity": {
      "rule": "Maryland publishes no reciprocity or endorsement route; every private detective must hold an MSP certification sponsored by a Maryland-licensed agency.",
      "agreements": null,
      "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
    },
    "localNuance": "Maryland splits licensing in two: individuals hold a cheap, agency-specific Private Detective Certificate (no exam, no experience), while the business owner holds the Agency License with an age-25 qualifier and experience routes. Armed detective work additionally requires a Maryland Wear and Carry Permit. Agencies employing five or more detectives must carry $1,000,000 in commercial general liability.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "In January 2025 the Maryland State Police converted all professional licensing applications, including private detective certification, from paper submission to electronic submission and fee collection through the Licensing Portal.",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Maryland require an exam or experience for a private detective certificate?",
        "a": "No. The State Police certification process has no examination and no minimum experience for individuals - the requirements are age 18, Livescan fingerprints, a photo, and sponsorship by a licensed detective agency. Experience rules apply only to the agency license qualifier."
      },
      {
        "q": "How much does Maryland private detective certification cost?",
        "a": "The initial certification is $15 and the three-year renewal is $10, both paid in the Licensing Portal. Fingerprint fees are separate and paid to the LiveScan vendor."
      },
      {
        "q": "What is the 30-day fingerprint rule?",
        "a": "Livescan prints submitted to CJIS and the FBI (ORI MDMSP6000, authorization 9400082495) are valid for only 30 days. If MSP does not receive your application within that window, you must be fingerprinted again."
      },
      {
        "q": "Can I use my Maryland certification at a new agency?",
        "a": "No. The certification is valid only for the sponsoring agency named in the application. Changing agencies requires a new sponsored application with the new employer, and the old card must be returned within 5 days of termination."
      },
      {
        "q": "What insurance does a Maryland detective agency need?",
        "a": "Under the Business Occupations and Professions Article, an agency that employs five or more private detectives must maintain at least $1,000,000 in commercial general liability coverage, including errors and omissions and completed operations."
      }
    ],
    "sources": [
      {
        "label": "Maryland State Police - Private Detective Certificate (eligibility, fingerprints, fees, renewal, 2025 portal change)",
        "url": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/PrivateDetective.aspx",
        "checkedOn": "2026-10"
      },
      {
        "label": "COMAR 29.04.08.03 - Private detective certification (fees, photographs, disqualifiers, card rules)",
        "url": "https://www.law.cornell.edu/regulations/maryland/COMAR-29-04-08-03",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maryland agency license fees, qualifier experience, and insurance thresholds (secondary, citing MSP and Md. Code 13-304)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-maryland",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maryland private detective application walkthrough (secondary)",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-in-maryland",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MA": {
    "agency": "Massachusetts State Police - Certification Unit (Private Investigator & Watch Guard Licensing)",
    "agencyUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license",
    "experience": "Three years of regular employment as a detective doing investigative work, as a member of an investigative service of the United States, or as a police officer of rank above patrolman; alternatively, a police officer in good standing formerly employed at least ten years with the Commonwealth or a political subdivision (M.G.L. c. 147, Section 24).",
    "eligibility": {
      "citizenship": "The application requires U.S. citizenship under the State Police application process; the statute itself does not state a citizenship rule",
      "other": "Three Massachusetts citizens who have known the applicant at least three years, are not relatives, and reside in or do business in the applicant's community must certify honesty and good moral character; applicants may not be currently certified by the Peace Officer Standards and Training (POST) Commission"
    },
    "background": {
      "method": "Background review by the State Police Certification Unit, including disclosure of criminal history, license discipline, civil judgments, and mental health history on the notarized application",
      "disqualifiers": "Any felony conviction, or a conviction under M.G.L. c. 272, Sections 99 or 99A (interception of wire or oral communications), bars licensure",
      "sourceUrl": "https://www.mass.gov/info-details/requirements-for-a-private-investigator-license"
    },
    "fees": [
      {
        "item": "Original application",
        "fee": "$550",
        "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      },
      {
        "item": "Renewal application",
        "fee": "$150",
        "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      },
      {
        "item": "Surety bond",
        "fee": "$5,000 minimum bond, filed with the application and kept active while licensed",
        "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      }
    ],
    "application": {
      "portal": "Certification Licensing System (Massachusetts State Police)",
      "portalUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license",
      "steps": [
        "Create an account in the Certification Licensing System and complete the Private Investigator & Watch Guard License Form.",
        "Assemble the mailed packet: notarized application, certified check or money order for $550 payable to the Commonwealth of Massachusetts, an original $5,000 surety bond, a certificate of business or LLC formation, a signed release, and certification forms from three reputable citizens.",
        "Include documented employment experience - agencies, dates, and job roles for investigative work.",
        "Mail the packet to the Certification Unit, 485 Maple Street, Danvers, MA 01923.",
        "There is no state examination in the published licensing process; qualification rests on the statutory experience categories and character references."
      ],
      "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
    },
    "renewal": {
      "cycle": "1 year",
      "fee": "$150",
      "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$50,240",
      "p25": "$42,540",
      "p75": "$94,660",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=MA"
    },
    "localNuance": "Massachusetts licenses both private investigators and watch guard (security) agencies under the same Chapter 147 system through the Colonel of the State Police. Business names may not contain the word 'police' or imply a government connection, and the license must be posted conspicuously at the principal office.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Massachusetts require an exam to become a private investigator?",
        "a": "No. Neither M.G.L. c. 147 nor the State Police application process includes a licensing examination. Qualification is based on three years of qualifying investigative or police experience plus character references."
      },
      {
        "q": "How much does a Massachusetts PI license cost?",
        "a": "The original application fee is $550 and the annual renewal is $150, paid by certified check or money order. A $5,000 surety bond must also be filed and kept active for the entire license term."
      },
      {
        "q": "Who qualifies for the experience requirement?",
        "a": "Three years as a working detective, three years in a U.S. investigative service, three years as a police officer above patrolman rank, or ten years as a police officer in good standing with the Commonwealth or a subdivision of it."
      },
      {
        "q": "Can current police officers get a Massachusetts PI license?",
        "a": "Applicants may not be currently certified by the POST Commission. Retired officers pending expiration of their POST certification must produce proof they retired in good standing."
      }
    ],
    "sources": [
      {
        "label": "Mass.gov - Apply for or renew a private investigator or watch guard license",
        "url": "https://www.mass.gov/how-to/apply-for-or-renew-a-private-investigator-or-watch-guard-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "Mass.gov - Requirements for a private investigator license",
        "url": "https://www.mass.gov/info-details/requirements-for-a-private-investigator-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "M.G.L. Chapter 147, Section 24 (legislature.ma.gov)",
        "url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter147/Section24",
        "checkedOn": "2026-10"
      },
      {
        "label": "M.G.L. Chapter 147, Section 25 (legislature.ma.gov)",
        "url": "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter147/Section25",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MI": {
    "agency": "Michigan Department of Licensing and Regulatory Affairs (LARA) - Professional Investigators, Corporations, Securities & Commercial Licensing",
    "agencyUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements",
    "experience": "Three years of full-time qualifying experience: licensed investigative work in another state, employment as an investigative employee of a licensed agency, government investigator/detective/special agent/police officer service, or full-time proprietary or in-house investigative work. A bachelor's or postgraduate degree in police administration, security management, investigation, law, criminal justice, or computer forensics accepted by LARA substitutes for the experience requirement (MCL 338.826).",
    "eligibility": {
      "minAge": 25,
      "citizenship": "U.S. citizen",
      "education": "High school education or equivalent",
      "other": "No felony convictions; no misdemeanor convictions for dishonesty or fraud, divulging information or evidence, impersonating law enforcement, dangerous weapon offenses, two or more alcohol-related offenses, controlled substances, or assault; no dishonorable military discharge"
    },
    "background": {
      "method": "Qualification review by LARA under MCL 338.826; five reference statements on the department form are required with the application",
      "disqualifiers": "Felony conviction, the misdemeanor categories listed in MCL 338.826(1)(d), or a dishonorable discharge from U.S. military service",
      "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements"
    },
    "fees": [
      {
        "item": "Professional Investigator Agency application",
        "fee": "$750",
        "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license"
      },
      {
        "item": "Surety bond or insurance",
        "fee": "$10,000 bond, or liability insurance with statutory limits ($10,000 property damage; $100,000 injury/death to one person; $200,000 per incident)",
        "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license"
      },
      {
        "item": "Renewal (every 3 years)",
        "fee": "$300 per agency; $125 per branch office",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan"
      }
    ],
    "application": {
      "portal": "MiCLEAR",
      "portalUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license",
      "steps": [
        "Form the business entity - Michigan licenses the agency, and a physical Michigan business location is required under MCL 338.828.",
        "Designate a Qualifying Officer who meets all statutory qualifications (age 25+, citizen, experience or degree, good character).",
        "Upload required documents through MiCLEAR: five reference statements, the $10,000 surety bond or certificate of insurance, entity documentation from the Corporations Division (or county DBA), the Entity Members form, and proof of qualifying experience.",
        "Pay the $750 application fee. LARA must issue or deny within 90 days of a completed application.",
        "LARA's published requirements include no state examination; licensure is granted on the documentation above."
      ],
      "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license"
    },
    "renewal": {
      "cycle": "3 years",
      "fee": "$300 (agency); $125 per branch",
      "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$48,650",
      "p25": "$38,410",
      "p75": "$61,590",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=MI"
    },
    "localNuance": "Michigan licenses the professional investigator agency rather than the individual. One person - the Qualifying Officer - must personally meet every statutory qualification, and any law enforcement officer working as an investigator needs written permission or documented off-duty employment policy from their agency under MCL 338.826(3).",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements"
      }
    ],
    "stateFaqs": [
      {
        "q": "What is the minimum age for a Michigan professional investigator?",
        "a": "25 years old. Applicants must also be U.S. citizens with a high school education or equivalent, per MCL 338.826 and LARA's licensing requirements page."
      },
      {
        "q": "Does Michigan require a PI licensing exam?",
        "a": "No. LARA's published requirements and application checklist include no state examination; the degree pathway (police administration, security management, investigation, law, criminal justice, or computer forensics) substitutes for three years of experience."
      },
      {
        "q": "How much is the Michigan PI license and bond?",
        "a": "The agency application fee is $750, and a $10,000 surety bond or liability insurance at statutory limits ($10,000/$100,000/$200,000) must be posted. Renewal is $300 every three years, plus $125 per branch office."
      },
      {
        "q": "Who must hold the license - the investigator or the firm?",
        "a": "The agency holds the license. An individual working under a licensed agency does not need a separate professional investigator license, but the Qualifying Officer must meet all age, citizenship, education, and experience requirements."
      }
    ],
    "sources": [
      {
        "label": "Michigan LARA - Professional Investigator Licensing Requirements",
        "url": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/applicant/licensing-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "Michigan LARA - Professional Investigator Agency Initial License",
        "url": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/detectives/professional-investigator-agency-license/pi-agency-initial-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "MCL 338.826 - Professional Investigator Licensure Act qualifications",
        "url": "https://www.legislature.mi.gov/(S(xdqs0svwg1i10zzft3pianq4))/mileg.aspx?page=getObject&objectName=mcl-338-826&highlight=investigator",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator - Michigan Private Investigator License cost detail",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-cost-michigan",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MN": {
    "agency": "Minnesota Department of Public Safety - Private Detective and Protective Agents Board (PDB)",
    "agencyUrl": "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board",
    "experience": "A minimum of 6,000 hours of employment as an investigator with a licensed private detective agency, a United States government investigative service, a city police department or sheriff's office, or another occupation the board finds equivalent in scope, responsibility, and training (Minn. Stat. 326.3382, subd. 2).",
    "eligibility": {
      "minAge": 18,
      "other": "Each signer must state under oath they have attained age 18; the board evaluates good character, competency, and integrity"
    },
    "background": {
      "method": "Full set of fingerprints and a recent photograph submitted with the application for each person signing",
      "disqualifiers": "The board screens for good character, competency, and integrity under Minn. Stat. 326.3382; specific disqualifier lists are set in board rules (Minnesota Rules 7506)",
      "sourceUrl": "https://revisor.mn.gov/statutes/cite/326.3382"
    },
    "fees": [
      {
        "item": "New private detective license (individual)",
        "fee": "$1,000",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
      },
      {
        "item": "New private detective license (corporation/LLC)",
        "fee": "$1,900",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 bond to the State of Minnesota, plus proof of financial responsibility (liability insurance meeting statutory coverage)",
        "sourceUrl": "https://revisor.mn.gov/statutes/cite/326.3382"
      },
      {
        "item": "Renewal (private detective, by employee count)",
        "fee": "$540 (1 employee); $710 (2-10); $880 (11-25); $1,050 (26-50); $1,220 (51+)",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
      },
      {
        "item": "Officer change (Minnesota manager or qualified representative)",
        "fee": "$950",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
      }
    ],
    "application": {
      "portal": "Private Detective and Protective Agents Board application packets (paper)",
      "portalUrl": "https://mn.gov/elicense/a-z/?id=1083-230712",
      "steps": [
        "Complete the current PDI packet (Private Detective/Investigator individual) or PDC packet (corporation/LLC) - the board posts 2026 packet versions on its page.",
        "Obtain references on board forms from five persons who have known the signer at least five years and are not related by blood or marriage.",
        "Include a recent photograph and a full set of fingerprints for each signer.",
        "Submit the employer's sworn statement documenting at least 6,000 hours of investigative employment.",
        "File the $10,000 surety bond and proof of liability insurance, then submit the packet to the board office at 1600 University Ave., Suite 200, St. Paul, MN 55104."
      ],
      "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "Tiered by employee count: $540 to $1,220 for a private detective license",
      "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$57,880",
      "p25": "$45,930",
      "p75": "$83,670",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=MN"
    },
    "localNuance": "Minnesota's board separately licenses protective agents (security) and private detectives, with different experience thresholds and fee schedules. Corporate applications require signatures from the CEO, CFO, and qualified representative, and out-of-state firms must add a Minnesota manager signature.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "The Minnesota Legislature amended Minn. Stat. 326.3382 (license application requirements), subdivisions 1 and 4, during the 2026 Regular Session (Chapter 83).",
        "sourceUrl": "https://revisor.mn.gov/statutes/cite/326.3382"
      },
      {
        "year": 2026,
        "change": "The board posted refreshed 2026 application packets (PDI, PAI, PDC, PAC) for all license types.",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-230712"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much investigative experience does Minnesota require?",
        "a": "6,000 hours as an investigator with a licensed detective agency, a U.S. government investigative service, a police department or sheriff's office, or an equivalent occupation the board accepts - documented under oath by a present or previous employer."
      },
      {
        "q": "What does a Minnesota private detective license cost?",
        "a": "A new individual license is $1,000 and a new corporation/LLC license is $1,900. Renewal runs every two years on a tiered schedule from $540 (1 employee) to $1,220 (51 or more employees)."
      },
      {
        "q": "What bond and insurance must Minnesota PIs carry?",
        "a": "A $10,000 surety bond executed to the State of Minnesota, plus proof of financial responsibility - generally general liability, completed operations, and personal injury coverage including false arrest, libel and slander, and privacy violations."
      },
      {
        "q": "How many references does the Minnesota board require?",
        "a": "Five references on board forms from people who have known the applicant at least five years and are not related by blood or marriage, submitted with fingerprints and a photograph."
      }
    ],
    "sources": [
      {
        "label": "Minnesota eLicense - Private Detectives License (fees and requirements)",
        "url": "https://mn.gov/elicense/a-z/?id=1083-230712",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minn. Stat. 326.3382 - Application for License",
        "url": "https://revisor.mn.gov/statutes/cite/326.3382",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minnesota DPS - Private Detective and Protective Agents Board",
        "url": "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minnesota Rules 7506.0100-.2900 (board rules)",
        "url": "https://www.revisor.mn.gov/rules/7506/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MO": {
    "agency": "Missouri Board of Private Investigator and Private Fire Investigator Examiners (Division of Professional Registration)",
    "agencyUrl": "https://pr.mo.gov/privateinvestigator.asp",
    "exam": {
      "vendor": "State board (exam administered by the Board of Private Investigator and Private Fire Investigator Examiners)",
      "vendorUrl": "https://pr.mo.gov/pi-exam-information.asp",
      "parts": [
        {
          "name": "Missouri private investigator examination",
          "questions": "100 (50 on statutes, 25 on rules, 25 on general investigative practice)",
          "time": "2 hours",
          "pass": "Passing score set by the board; not published"
        }
      ],
      "fee": "$80",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://pr.mo.gov/pi-exam-information.asp",
      "sourceNote": "20 CSR 2234-5.010 - exam scheduled by the board; candidate must pass within one year of application approval; up to four attempts in 12 months"
    },
    "experience": "No fixed hour minimum is published in rule. The board reviews documented prior investigative experience (evaluations, supervisor letters, business licenses, client references, and similar evidence). The examination is waived for applicants with two years of lawful private investigator practice within the past three years, reciprocity-eligible applicants, and qualifying law enforcement applicants under RSMo 324.1146 (20 CSR 2234-5.010).",
    "eligibility": {
      "minAge": 21,
      "citizenship": "U.S. citizen",
      "other": "Agency employees must be at least 21 (RSMo 324.1116); applicants document experience to the board and pass a background investigation"
    },
    "background": {
      "method": "Fingerprint submission through the Missouri State Highway Patrol's approved vendor for both MSHP and FBI checks; fees paid by the applicant to the vendor",
      "disqualifiers": "The board conducts a background investigation under RSMo 324.1110; unlicensed practice after August 2007 and falsified fingerprints or photographs are statutory denial grounds (RSMo 324.1112)",
      "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf"
    },
    "fees": [
      {
        "item": "Application (individual PI)",
        "fee": "$500",
        "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf"
      },
      {
        "item": "Examination",
        "fee": "$80",
        "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$400",
        "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf"
      },
      {
        "item": "Liability insurance",
        "fee": "$250,000 minimum general liability, with the board named as certificate holder; workers' compensation if subject to the law",
        "sourceUrl": "https://revisor.mo.gov/main/OneSection.aspx?section=324.1108"
      }
    ],
    "application": {
      "portal": "Board paper application (Form 375-1011 for individuals) submitted to the board office",
      "portalUrl": "https://pr.mo.gov/privateinvestigator.asp",
      "steps": [
        "Submit the board application with the fee, two passport-style photos, and proof of U.S. citizenship.",
        "Provide fingerprints through the Missouri State Highway Patrol approved vendor for MSHP and FBI background checks.",
        "File a certificate of insurance showing at least $250,000 liability coverage naming the board as certificate holder, plus workers' compensation proof or an explanation of exemption.",
        "Take and pass the board examination within one year of application approval, unless the exam is waived by experience, reciprocity, or law-enforcement status.",
        "The board reviews the background and experience documentation and notifies the applicant in writing of its decision."
      ],
      "processingTime": "The board does not publish a guaranteed turnaround; applications are reviewed by board staff and the executive director",
      "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "16 hours of continuing education for individual private investigators (8 hours for agency employees), with course review available through the board",
      "fee": "$400",
      "late": "$100 late renewal fee",
      "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf"
    },
    "reciprocity": {
      "rule": "Reciprocity-eligible applicants and applicants with two years of lawful Missouri PI practice within the past three years are exempt from the licensing examination; qualifying law enforcement applicants under RSMo 324.1146 are also exempt.",
      "agreements": null,
      "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-5.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,600",
      "p25": "$37,480",
      "p75": "$51,880",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=MO"
    },
    "localNuance": "State PI licensing IS required in Missouri - a common assumption that it is not is wrong. State law also forbids municipalities from imposing an additional bond, local exam, or occupational tax on licensed PIs, and agency employees have the experience requirement waived so they can start working under a licensed agency immediately.",
    "recentChanges": [
      {
        "year": 2021,
        "change": "20 CSR 2234-2.010 was amended effective March 30, 2021, adding approved-vendor fingerprint submission and certificate-of-insurance requirements to the application.",
        "sourceUrl": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Missouri require an exam for private investigators?",
        "a": "Yes - a 100-question exam (50 statute, 25 rule, 25 practice questions) with a two-hour limit and an $80 fee. It is waived for applicants with two years of lawful PI practice in the past three years, reciprocity-eligible applicants, and qualifying law enforcement applicants."
      },
      {
        "q": "Is a PI license actually required in Missouri?",
        "a": "Yes. The Board of Private Investigator and Private Fire Investigator Examiners licenses individual PIs under RSMo Chapter 324, and unlicensed practice is a Class A misdemeanor for a first offense and a Class D felony thereafter."
      },
      {
        "q": "What insurance does a Missouri PI need?",
        "a": "General liability coverage of at least $250,000, evidenced by a certificate of insurance that names the board as certificate holder - a certificate issued by an agent is not acceptable. Workers' compensation proof is required if the business is subject to the law."
      },
      {
        "q": "What are Missouri's renewal and CE requirements?",
        "a": "Licenses renew every two years for $400. Individual PIs complete 16 continuing education hours (agency employees complete 8), and a $100 late fee applies to late renewals."
      }
    ],
    "sources": [
      {
        "label": "20 CSR 2234-2.010 - Application for Licensure (Missouri Secretary of State)",
        "url": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-2.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "20 CSR 2234-1.050 - Fees (Missouri Secretary of State)",
        "url": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-1.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "20 CSR 2234-5.010 - Examination rules (Missouri Secretary of State)",
        "url": "https://www.sos.mo.gov/cmsimages/adrules/csr/current/20csr/20c2234-5.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Board exam information page (pr.mo.gov)",
        "url": "https://pr.mo.gov/pi-exam-information.asp",
        "checkedOn": "2026-10"
      },
      {
        "label": "RSMo 324.1108 - Application and insurance requirements",
        "url": "https://revisor.mo.gov/main/OneSection.aspx?section=324.1108",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MT": {
    "agency": "Montana Board of Private Security (Department of Labor & Industry) - Private Security Program",
    "agencyUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
    "exam": {
      "vendor": "State board (exam based on MCA Title 37, Chapters 1 and 60 and ARM 24, Chapter 182)",
      "vendorUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
      "parts": [
        {
          "name": "Montana private investigator written examination",
          "questions": "Question count not published by the board",
          "time": "Not published",
          "pass": "Passing standard set by the board under ARM 24.182.505"
        }
      ],
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512",
      "sourceNote": "The application must be approved before the exam can be taken; out-of-state applicants must arrange their own proctor and notify the board in writing"
    },
    "experience": "Three years of full-time experience (5,400 cumulative hours) performing investigative duties, as a government or military investigator/detective/special agent/peace officer, in fire investigation, or as a licensed insurance investigator (maximum 2,700 hours credit). Up to 2,700 hours may be substituted with the Montana Law Enforcement Academy basic course (900 hours), PI-related training, or criminal justice or law credits from an accredited institution (ARM 24.182.512).",
    "eligibility": {
      "minAge": 21,
      "citizenship": "U.S. citizen or legal permanent resident",
      "education": "High school diploma or equivalent",
      "other": "No dishonorable military discharge; no felony or crime involving moral turpitude or illegal weapon use without a full pardon; three references not related by blood or marriage, two of whom must be former employers or contract counterparts"
    },
    "background": {
      "method": "Background investigation including a fingerprint check by the Montana Department of Justice and the FBI",
      "disqualifiers": "Felony conviction or crime involving moral turpitude or illegal use or possession of a dangerous weapon, absent a full pardon; judicial declaration of mental incompetence not restored; habitual drunkenness or narcotics addiction (MCA 37-60-303)",
      "sourceUrl": "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html"
    },
    "fees": [
      {
        "item": "Application",
        "fee": "$80 (all fees non-refundable)",
        "sourceUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator"
      },
      {
        "item": "Renewal",
        "fee": "$160",
        "sourceUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator"
      },
      {
        "item": "Late renewal",
        "fee": "$80",
        "sourceUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator"
      },
      {
        "item": "Liability insurance",
        "fee": "$500,000 occurrence-form commercial general liability including personal injury (errors and omissions coverage also required)",
        "sourceUrl": "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512"
      },
      {
        "item": "Armed endorsement (optional)",
        "fee": "Firearm endorsement requires completion of a board-certified firearms training program taught by a certified firearms instructor; the prior board checklist listed a $50 endorsement fee",
        "sourceUrl": "https://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773"
      }
    ],
    "application": {
      "portal": "eBiz Montana online licensing (ebiz.mt.gov/POL)",
      "portalUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
      "steps": [
        "Apply online through eBiz Montana or with a paper application, paying the $80 application fee.",
        "Provide proof of education, training, and experience totaling 5,400 hours (or the education substitution).",
        "Submit fingerprints for the Montana DOJ and FBI background check, a passport-style photo, and license verifications from any states where you have held a professional license.",
        "List three references not related by blood or marriage - two must be former employers or firms with a contractual working relationship.",
        "Provide proof of the $500,000 commercial general liability policy; once the application is approved, take the board's written examination."
      ],
      "sourceUrl": "https://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773"
    },
    "renewal": {
      "cycle": "Annual - renewal window January 1 through March 1",
      "fee": "$160",
      "late": "$80 late fee",
      "sourceUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$47,430",
      "p25": "$42,640",
      "p75": "$55,040",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=MT"
    },
    "localNuance": "Montana issues an optional armed endorsement that requires a board-certified firearms instructor course and separate firearms liability coverage. Out-of-state applicants must locate their own proctor for the written exam and notify the board of the location in writing.",
    "recentChanges": [
      {
        "year": 2017,
        "change": "ARM 24.182.512, the private investigator licensure rule setting the 5,400-hour experience requirement and education substitutions, took effect October 28, 2017 and remains the operative rule.",
        "sourceUrl": "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much experience does Montana require for a PI license?",
        "a": "Three years full-time, or 5,400 cumulative hours, in investigative work, government or military investigation, fire investigation, or licensed insurance investigating. Up to 2,700 hours can come from the Montana Law Enforcement Academy basic course, related training, or criminal justice or law coursework."
      },
      {
        "q": "Does Montana have a PI exam?",
        "a": "Yes. Applicants must pass a written examination based on MCA Title 37, Chapters 1 and 60 and ARM 24, Chapter 182. The application must be approved first, and out-of-state applicants arrange their own proctor."
      },
      {
        "q": "What insurance does a Montana PI need?",
        "a": "At least $500,000 in occurrence-form commercial general liability insurance that includes personal injury coverage, per ARM 24.182.405. Licensees with a firearm endorsement must also carry firearms liability coverage."
      },
      {
        "q": "When do Montana PI licenses renew?",
        "a": "Annually between January 1 and March 1. The renewal fee is $160, with an $80 late fee; the application fee for a new license is $80."
      }
    ],
    "sources": [
      {
        "label": "Montana Board of Private Security - Private Investigator license information",
        "url": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-investigator",
        "checkedOn": "2026-10"
      },
      {
        "label": "ARM 24.182.512 - Private Investigator licensure rule",
        "url": "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.512",
        "checkedOn": "2026-10"
      },
      {
        "label": "MCA 37-60-303 - License or registration qualifications",
        "url": "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Montana Board of Private Security - PI application checklist (PDF)",
        "url": "https://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/PSP-PI-APP_License-App-Checklist.pdf?ver=2018-07-24-103438-773",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NE": {
    "agency": "Nebraska Secretary of State - Licensing Division (Private Detectives)",
    "agencyUrl": "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf",
    "exam": {
      "vendor": "Nebraska Secretary of State (in-house written exam)",
      "vendorUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf",
      "parts": [
        {
          "name": "Nebraska private detective license exam",
          "questions": "Question count not published; covers the Private Detective Act (Neb. Rev. Stat. 71-3201 to 71-3213), licensing requirements, debt collection restrictions, bond requirements, wiretapping, trespassing, concealed carry, and related rules",
          "time": "Not published",
          "pass": "Passing score set by rule; a passing score is valid for 2 years"
        }
      ],
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf",
      "sourceNote": "Title 433, Chapter 3, Section 007 - exam held at times set by the Secretary of State, no more than 30 days after an applicant's request; failed applicants wait 21 days to retake, and three failures make an applicant permanently ineligible"
    },
    "experience": "One of the following: 3,000 hours of verifiable experience; 2,500 hours plus an associate degree in a relevant field; or 2,000 hours plus a bachelor's degree in a relevant field.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "U.S. citizen (citizenship attestation form required)",
      "other": "Good moral character; persons engaged in the debt collection business or employed by a debt collector under the Collection Agency Act are barred from holding a Nebraska PI license (Neb. Rev. Stat. 71-3205)"
    },
    "background": {
      "method": "Two fingerprint cards processed through the Nebraska State Patrol for an FBI national criminal history check; the State Patrol also investigates each applicant's character and reputation, which statute allows to take up to ninety days",
      "fee": "$38 background check application fee (not required on renewal)",
      "disqualifiers": "Felony conviction or crime of moral turpitude; engagement in the debt collection business under the Collection Agency Act",
      "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf"
    },
    "fees": [
      {
        "item": "Private detective application",
        "fee": "$50",
        "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf"
      },
      {
        "item": "Private detective agency application",
        "fee": "$100",
        "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf"
      },
      {
        "item": "Plain clothes investigator application",
        "fee": "$25",
        "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf"
      },
      {
        "item": "Background check fee",
        "fee": "$38 (each application except renewals)",
        "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 bond filed with the Secretary of State (agency and private detective licenses only; typically about $100-$300 annual premium)",
        "sourceUrl": "https://www.law.cornell.edu/regulations/nebraska/433-Neb-Admin-Code-ch-3-SS-004"
      }
    ],
    "application": {
      "portal": "Paper application mailed to the Secretary of State Licensing Division, 1201 N Street, Suite 120, Lincoln, NE 68508",
      "portalUrl": "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf",
      "steps": [
        "Complete the application with all employment and reference sections filled - the State Patrol returns applications with blanks.",
        "Sign the affidavit with original signatures and include the Authorization for Release of Information.",
        "Attach two passport-size color photographs, two fingerprint cards, a copy of your driver's license, and the U.S. Citizenship Attestation Form.",
        "File the $10,000 surety bond or continuation certificate, signed by both the bonding company and the licensee.",
        "Meet all minimum requirements, then sit for the exam held the third Wednesday of each month at 10:00 AM at the Licensing Division office in Lincoln - contact (402) 471-8606 beforehand."
      ],
      "processingTime": "The State Patrol character investigation may take up to 90 days under statute",
      "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf"
    },
    "renewal": {
      "cycle": "2 years - all Nebraska PI licenses expire June 30 of even-numbered years",
      "fee": "$25 (private detective renewal; $100 agency; $25 plain clothes investigator)",
      "sourceUrl": "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Detectives And Investigators&licenseId=31-3390210000&location=US"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$51,750",
      "p25": "$42,800",
      "p75": "$76,000",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NE"
    },
    "localNuance": "Nebraska licenses private detectives through the Secretary of State, not the State Patrol - the Patrol only runs the fingerprint background check. A statutory bar prohibits anyone in the debt collection business from holding a PI license, and plain clothes investigators must work for a licensed agency.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Who issues Nebraska private detective licenses?",
        "a": "The Nebraska Secretary of State's Licensing Division in Lincoln, under Neb. Rev. Stat. 71-3201 to 71-3213 and Title 433 Chapter 3. The Nebraska State Patrol handles only the fingerprint background check and character investigation."
      },
      {
        "q": "When and where is the Nebraska PI exam?",
        "a": "The Secretary of State administers the written exam on the third Wednesday of each month at 10:00 AM at 1201 N Street in Lincoln. Applicants must complete all requirements first, contact the office before testing, and a failed attempt requires a 21-day wait - three failures permanently bar licensure."
      },
      {
        "q": "What experience is required in Nebraska?",
        "a": "3,000 verifiable hours, or 2,500 hours with a relevant associate degree, or 2,000 hours with a relevant bachelor's degree. Applicants must be at least 21, U.S. citizens, and of good moral character."
      },
      {
        "q": "Can a debt collector be licensed as a Nebraska PI?",
        "a": "No. State statute explicitly bars anyone engaged in the debt collection business, or employed by a debt collector under the Collection Agency Act, from holding a private detective license."
      }
    ],
    "sources": [
      {
        "label": "Nebraska Secretary of State - Title 433 Chapter 3, Private Detectives (rules PDF)",
        "url": "https://sos.nebraska.gov/sites/default/files/doc/Chapter-3.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Nebraska Secretary of State - Private Detective License Instructions (PDF)",
        "url": "https://sos.nebraska.gov/sites/default/files/doc/regulations/licensing/PD%20instructions.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "433 Neb. Admin. Code ch. 3 s. 004 - License application requirements",
        "url": "https://www.law.cornell.edu/regulations/nebraska/433-Neb-Admin-Code-ch-3-SS-004",
        "checkedOn": "2026-10"
      },
      {
        "label": "CareerOneStop - Nebraska Private Detective license profile",
        "url": "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Detectives And Investigators&licenseId=31-3390210000&location=US",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NV": {
    "agency": "Nevada Private Investigators Licensing Board (PILB)",
    "agencyUrl": "https://pilb.nv.gov/licensing/",
    "exam": {
      "vendor": "State board (PILB licensee examination)",
      "vendorUrl": "https://pilb.nv.gov/licensing/",
      "parts": [
        {
          "name": "PILB licensing exam",
          "questions": "Question count not published by the board",
          "time": "Not published",
          "pass": "75%"
        }
      ],
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf",
      "sourceNote": "Exams are offered quarterly in January, April, July, and October; only individual and qualified agent applicants take the exam"
    },
    "experience": "At least five years (2,000 hours per year, totaling 10,000 hours) of experience as an investigator, or the equivalent as determined by the Board. Education credit: an associate degree in Police Science or Criminal Justice equals 8 months (1,333 hours); a bachelor's degree in those fields equals 18 months (3,000 hours).",
    "eligibility": {
      "minAge": 21,
      "citizenship": "U.S. citizen or lawfully entitled to remain and work in the United States",
      "other": "Good moral character and temperate habits; no felony conviction and no crime involving moral turpitude or illegal use or possession of a dangerous weapon"
    },
    "background": {
      "method": "Criminal history background check through the FBI and the Nevada Department of Public Safety, funded by a $750 investigation deposit ($250 for each additional license category)",
      "disqualifiers": "Any felony conviction, or any crime involving moral turpitude or the illegal use or possession of a dangerous weapon",
      "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
    },
    "fees": [
      {
        "item": "Application processing",
        "fee": "$20 per application (non-refundable)",
        "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      {
        "item": "Examination",
        "fee": "$100 per category (non-refundable)",
        "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      {
        "item": "Background investigation deposit",
        "fee": "$750 for the first category, $250 for each additional category; applicant is liable for the entire investigation cost",
        "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      {
        "item": "Abeyance fee",
        "fee": "$100 per license per year",
        "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
      },
      {
        "item": "Liability insurance",
        "fee": "$200,000 minimum liability policy from an insurer authorized in Nevada, or approved self-insurance (NRS 648.135)",
        "sourceUrl": "https://www.leg.state.nv.us/nrs/nrs-648.html"
      },
      {
        "item": "Annual license fee",
        "fee": "$500 per category per year, prorated by month for licenses issued after July 1",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-nevada"
      }
    ],
    "application": {
      "portal": "PILB paper application (contact pilbinfo@pilb.nv.gov; offices in Carson City and Las Vegas)",
      "portalUrl": "https://pilb.nv.gov/licensing/",
      "steps": [
        "Submit the license application with the $20 processing fee, $750 background investigation deposit, and $100 exam fee.",
        "Document 10,000 hours of investigative experience on board certification forms, applying any allowable education credit.",
        "Complete the FBI and Nevada DPS criminal history background checks, including fingerprints.",
        "After the application is complete, the board notifies you of the next quarterly exam date (January, April, July, or October); a score of 75% or better is required.",
        "Provide proof of the $200,000 liability insurance policy or self-insurance, then pay the prorated annual license fee upon approval."
      ],
      "sourceUrl": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf"
    },
    "renewal": {
      "cycle": "1 year - licenses expire June 30 each year",
      "fee": "Renewal fee prescribed under NRS 648.120 ($500 per category per year); window open May 15 through June 30",
      "sourceUrl": "https://pilb.nv.gov/licensing/"
    },
    "wages": null,
    "localNuance": "Nevada requires liability insurance ($200,000 minimum) or self-insurance rather than a surety bond. Employees of licensed companies need a PILB work card instead of a full license, and licensees must maintain a principal place of business in Nevada with the license name and number in all advertising.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://pilb.nv.gov/licensing/"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much experience does Nevada require for a PI license?",
        "a": "Five years, totaling 10,000 hours, as an investigator. An associate degree in Police Science or Criminal Justice counts as 1,333 hours and a bachelor's degree in those fields counts as 3,000 hours toward the total."
      },
      {
        "q": "What is the Nevada PILB exam like?",
        "a": "It is a board-administered exam requiring a 75% score, offered quarterly in January, April, July, and October. It costs $100 per category and is required only for individual and qualified agent applicants."
      },
      {
        "q": "Does Nevada require a bond for private investigators?",
        "a": "No surety bond. Instead, NRS 648.135 requires a liability policy of at least $200,000 from a Nevada-authorized insurer, or board-approved self-insurance, kept in force at issuance and every annual renewal."
      },
      {
        "q": "What does Nevada PI licensing cost?",
        "a": "Budget for the $20 processing fee, $750 background investigation deposit ($250 per additional category), $100 exam fee, and a $500 annual license fee per category prorated from July 1. Licenses expire June 30 and renew between May 15 and June 30."
      }
    ],
    "sources": [
      {
        "label": "Nevada PILB - Licensing page",
        "url": "https://pilb.nv.gov/licensing/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Nevada PILB - First-Time Licensee Information Sheet (PDF)",
        "url": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Licensees/FirstTimeLicenseeInfoSheet.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NRS Chapter 648 - Private Investigators (NRS 648.135 insurance requirement)",
        "url": "https://www.leg.state.nv.us/nrs/nrs-648.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator - Nevada Private Investigator Licensing (fee detail)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-nevada",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NH": {
    "agency": "New Hampshire Department of Safety, Division of State Police - Permits and Licensing Unit",
    "agencyUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf",
    "experience": "Except for employees, one of: four years as a full-time law enforcement officer (federal, state, county, college/university, or municipal), director of security or senior officer of a company or licensed security service, or full-time adjuster/risk manager/claims investigator; an associate or bachelor of science in criminal justice or fire service, or ASIS certified professional investigator or NALI certified legal investigator credential, plus two years as a full-time agency investigator; four years as a full-time investigator for a licensed PI agency; four years as a full-time firefighter with International Association of Arson Investigators certification; or ASIS certification in security operations or executive protection plus two years providing those services (RSA 106-F:5, VII).",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Resident of the United States",
      "other": "No felony convictions of any type; no disqualifying misdemeanor convictions for theft, honesty, fraud, controlled substances, or misdemeanor crimes of violence, domestic violence, or abuse; no active domestic violence protective order"
    },
    "background": {
      "method": "Criminal record check ($25 fee) and background investigation ($10 fee) per RSA 106-F:8; three character references unrelated to the applicant receive questionnaires; armed applicants submit fingerprints at State Police headquarters plus a $26.50 fingerprinting fee and FBI check",
      "disqualifiers": "Felony record or the misdemeanor categories listed above, judged by the Commissioner of Safety",
      "sourceUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf"
    },
    "fees": [
      {
        "item": "Individual PI license application",
        "fee": "$150, plus $25 criminal record check and $10 background investigative fee",
        "sourceUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf"
      },
      {
        "item": "Agency license",
        "fee": "$150 for an agency employing one licensed person; $350 for more than one (per RSA 106-F:7), plus $25 criminal record check and $10 background fee",
        "sourceUrl": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm"
      },
      {
        "item": "Employee license",
        "fee": "$5, plus $25 criminal record check and $10 background investigative fee",
        "sourceUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp247.pdf"
      },
      {
        "item": "Surety bond",
        "fee": "$50,000 two-year bond in the licensee's name, running concurrent with the license; increases $50,000 for each additional license type held",
        "sourceUrl": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm"
      },
      {
        "item": "Armed status",
        "fee": "$26.50 fingerprinting; armed investigators must pass an annual firearms proficiency course with a 75% minimum score and four hours of instruction",
        "sourceUrl": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm"
      }
    ],
    "application": {
      "portal": "Paper applications (DSSP 259 individual, DSSP 258 agency, DSSP 247 employee) filed with the Division of State Police, 33 Hazen Drive, Concord",
      "portalUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf",
      "steps": [
        "Complete the individual application (DSSP 259) and list three unrelated persons who will receive character questionnaires.",
        "Obtain a two-year, $50,000 surety bond on the approved form, dated to run concurrent with the license.",
        "Include the $150 fee plus the $25 criminal record check fee and $10 background investigative fee; armed applicants add $26.50 for fingerprinting, scheduled by appointment.",
        "Submit complete, verifiable documentation of the minimum experience standards under RSA 106-F:5, VII.",
        "There is no state licensing examination; qualification is by the documented experience pathways and background review."
      ],
      "sourceUrl": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "Same fee schedule as initial application ($150 individual or $350 agency per RSA 106-F:7); renewal applications due at least 15 days before expiration with certified evidence the bond remains in force",
      "sourceUrl": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$65,370",
      "p25": "$46,970",
      "p75": "$78,300",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NH"
    },
    "localNuance": "New Hampshire issues three separate license types - individual, agency, and employee - each with its own application and fee, and the $50,000 bond must increase by another $50,000 for each additional license type held. Armed licensees must complete annual firearms proficiency, and all licensees carry a State Police photo identification card.",
    "recentChanges": [
      {
        "year": 2019,
        "change": "Chapter 106-F was recodified effective July 1, 2019, moving private investigator licensing from the 'private detective' framework to the current 'private investigator' licensing structure under the Commissioner of Safety.",
        "sourceUrl": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does New Hampshire require an exam for private investigators?",
        "a": "No state licensing examination is required. Qualification is based on documented experience - typically four years of full-time law enforcement or investigative work, or a degree or professional certification plus two years of agency investigation."
      },
      {
        "q": "What does a New Hampshire PI license cost?",
        "a": "An individual license costs $150 plus a $25 criminal record check fee and a $10 background investigative fee. Agencies pay $150 (one licensed employee) or $350 (more than one), and employee licenses cost $5 plus the same check fees."
      },
      {
        "q": "What bond does New Hampshire require?",
        "a": "A two-year, $50,000 surety bond in the individual's or agency's name, running concurrent with the license. The principal sum increases by $50,000 for each additional license type held."
      },
      {
        "q": "How long is a New Hampshire PI license valid?",
        "a": "Two years. Renewal applications must be submitted at least 15 days before expiration and include certified evidence that the surety bond remains in force."
      }
    ],
    "sources": [
      {
        "label": "New Hampshire State Police - Individual PI Application DSSP 259 (PDF)",
        "url": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp259.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "New Hampshire State Police - Agency PI Application DSSP 258 (PDF)",
        "url": "https://www.nhsp.dos.nh.gov/sites/g/files/ehbemt461/files/inline-documents/sonh/dssp258.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "RSA Chapter 106-F - Private Investigators, Security Guards, and Bail Recovery Agents",
        "url": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-mrg.htm",
        "checkedOn": "2026-10"
      },
      {
        "label": "RSA 106-F:7 - License Application and Renewal Fees",
        "url": "https://gc.nh.gov/rsa/html/VII/106-F/106-F-7.htm",
        "checkedOn": "2026-10"
      },
      {
        "label": "CareerOneStop - New Hampshire Private Investigator license profile",
        "url": "https://www.careeronestop.org/Toolkit/Training/find-licenses-detail.aspx?keyword=Private Investigator (Detective)&licenseId=33-POL02&location=US",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NJ": {
    "agency": "New Jersey State Police - Private Detective Unit (PDU)",
    "agencyUrl": "https://www.njsp.org/private-detective/",
    "experience": "At least five years of experience as an investigator for a licensed investigative agency, or as a police officer with an organized police department of the State, a county or municipality, or with an investigative agency of the United States or any state, county, or municipality (N.J.S.A. 45:19-12).",
    "eligibility": {
      "minAge": 25,
      "citizenship": "U.S. citizen (required)",
      "other": "Good character, competency, and integrity; active law enforcement officers and investigators may not hold a PI license or serve as a qualifying member, officer, or director (NJAC 13:55-1.8); an individual may qualify only one agency"
    },
    "background": {
      "method": "Comprehensive background investigation including criminal history fingerprint check through the State Bureau of Identification and a credit check - derogatory, delinquent, or past-due accounts must be documented and resolved before licensing; five unrelated reputable citizens over 21 sign character vouchers",
      "fee": "$30 SBI fee plus fingerprint vendor fee",
      "disqualifiers": "Non-citizenship, active law enforcement status, poor credit left unaddressed, and failure to satisfy the experience qualification under N.J.S.A. 45:19-12",
      "sourceUrl": "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf"
    },
    "fees": [
      {
        "item": "Individual license (per location)",
        "fee": "$250",
        "sourceUrl": "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/"
      },
      {
        "item": "Firm, association, or corporation license (per location)",
        "fee": "$300",
        "sourceUrl": "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/"
      },
      {
        "item": "Renewal (every 2 years, per location)",
        "fee": "$200 individual; $250 firm/LLC/corporation",
        "sourceUrl": "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/"
      },
      {
        "item": "Surety bond",
        "fee": "$3,000 (individual) or $5,000 (firm/association/corporation), with an authorized surety, for the benefit of persons injured by willful, malicious, or wrongful acts",
        "sourceUrl": "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/"
      },
      {
        "item": "Fingerprint/background",
        "fee": "$30 State Bureau of Identification fee plus fingerprint vendor fee",
        "sourceUrl": "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf"
      }
    ],
    "application": {
      "portal": "Paper application SP-171 mailed to NJSP Private Detective Unit, P.O. Box 7068, West Trenton, NJ 08628",
      "portalUrl": "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf",
      "steps": [
        "Complete form SP-171, indicating one license type, and have the application notarized.",
        "Pay the non-refundable fee ($250 individual, $300 LLC/corporation) by cashier's check, certified check, business check, or money order payable to the State of New Jersey - no personal checks.",
        "List all members or officers from the current corporate or LLC filing; out-of-state applicants must also file with the NJ Department of Treasury.",
        "Submit a head-and-shoulders photo, five character vouchers from unrelated reputable citizens over 21, the notarized Authorization for Release of Information, and employer affirmations of the qualifying experience.",
        "Complete fingerprinting per the PDU instructions; qualification is by the five-year experience documentation and background investigation - the published process includes no licensing examination."
      ],
      "sourceUrl": "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "fee": "$200 (individual) or $250 (firm/LLC/corporation) per location; renewal form SP-415 should reach the PDU within two weeks of expiration",
      "late": "Renewals received after expiration may require the licensee to cease operation and reapply",
      "sourceUrl": "https://www.njsp.org/faqs-pdu"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$54,710",
      "p25": "$42,890",
      "p75": "$91,990",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NJ"
    },
    "localNuance": "The license is issued per physical location, so each branch office requires its own fee. A PI license covers investigative work only - security guards and executive protection fall under SORA - and out-of-state residents may be licensed if they meet all qualifications.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.njsp.org/private-detective/"
      }
    ],
    "stateFaqs": [
      {
        "q": "What are the qualifications for a New Jersey private detective license?",
        "a": "Age 25 or older, U.S. citizenship, good character and integrity, and at least five years of experience as an investigator or police officer with an organized department or federal/state investigative agency. A comprehensive background investigation with fingerprint and credit checks follows."
      },
      {
        "q": "Does New Jersey require a PI exam?",
        "a": "The published qualifications and application process under the Private Detective Act of 1939 include no licensing examination - qualification rests on the five-year experience requirement, references, and the background investigation."
      },
      {
        "q": "What does a New Jersey PI license cost?",
        "a": "$250 per location for an individual or $300 for a firm/LLC/corporation, plus a $3,000 (individual) or $5,000 (firm) surety bond. Renewal every two years is $200 or $250 per location respectively."
      },
      {
        "q": "Can a current police officer hold a New Jersey PI license?",
        "a": "No. Under NJAC 13:55-1.8, active law enforcement officers and investigators may not hold a private detective license or serve as a qualifying member, officer, or director of a licensed firm."
      }
    ],
    "sources": [
      {
        "label": "New Jersey State Police - Private Detective Unit forms and information",
        "url": "https://www.njsp.org/private-detective/",
        "checkedOn": "2026-10"
      },
      {
        "label": "NJSP - Private Detective License Application Instructions SP-171 (PDF)",
        "url": "https://www.nj.gov/njsp/private-detective/pdf/sp-171-instructions_2020.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NJSP - Private Detective Unit FAQ",
        "url": "https://www.njsp.org/faqs-pdu",
        "checkedOn": "2026-10"
      },
      {
        "label": "N.J.S.A. 45:19-12 - License fees, bond, duration, qualifications",
        "url": "https://law.justia.com/codes/new-jersey/title-45/section-45-19-12/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NM": {
    "agency": "New Mexico Regulation and Licensing Department - Private Investigations Advisory Board",
    "agencyUrl": "https://www.rld.nm.gov?p=15797/",
    "exam": {
      "vendor": "New Mexico RLD / Private Investigations Advisory Board (department-issued jurisprudence exam)",
      "vendorUrl": "https://www.rld.nm.gov?p=15797/",
      "fee": "Included with the application packet (no separate exam fee is published)",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.rld.state.nm.us/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PI%20application.pdf",
      "sourceNote": "Application packet checklist, item 6: Department issued jurisprudence exam. The board does not publish a question count or time limit."
    },
    "experience": "Not less than 6,000 hours of actual investigative work acquired within the five years preceding the application - investigation of crimes or wrongs, investigation of persons, location or recovery of lost or stolen property, cause or responsibility for fires, losses or accidents, or securing evidence for courts, tribunals or law enforcement. Documented through notarized Certification of Experience forms.",
    "eligibility": {
      "minAge": 21,
      "education": "No minimum education level is published; proof of age (birth certificate, driver license, state ID or baptismal certificate) is required",
      "other": "Application must be signed before a notary and accompanied by two 2x2 passport-type photographs; firearms certification is optional and requires additional training documentation"
    },
    "background": {
      "method": "Electronic fingerprints through 3M Cogent after online registration (ORI NM920250Z); out-of-state applicants may mail inked fingerprint cards to the NM Department of Public Safety",
      "fee": "$44 for the FBI and New Mexico state criminal record check",
      "disqualifiers": "Applicants answering yes to criminal history questions must submit court documents showing the disposition of all charges; the board does not publish a specific disqualifying offense list on its forms",
      "sourceUrl": "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/PI_Company_app___Rev_09.2015_2.pdf"
    },
    "fees": [
      {
        "item": "Initial license (Private Investigator, includes $100 application fee)",
        "fee": "$400",
        "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      {
        "item": "Renewal",
        "fee": "$300",
        "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      {
        "item": "Late fee",
        "fee": "$100",
        "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      {
        "item": "Fingerprint background check (FBI + NM state)",
        "fee": "$44",
        "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 bond (annual premium typically $100-$300 through a surety company)",
        "sourceUrl": "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/PI_Company_app___Rev_09.2015_2.pdf"
      }
    ],
    "application": {
      "portal": "Paper application by mail (RLD Boards and Commissions Division)",
      "portalUrl": "https://www.rld.nm.gov?p=15797/",
      "steps": [
        "Complete the PI application, sign it before a notary, and staple two passport-type photos to the front page",
        "Attach notarized Certification of Experience forms covering the 6,000-hour requirement and proof of age",
        "Complete electronic fingerprinting through 3M Cogent (or mail inked cards with $44 to NM DPS if out of state)",
        "Submit the application with the $400 initial license fee payable to the Private Investigations Advisory Board",
        "Pass the department-issued jurisprudence exam on the Private Investigations Act and board rules",
        "Provide the $10,000 surety bond before the license is issued"
      ],
      "processingTime": "One to three weeks from receipt of a complete application; missing court documents for criminal history questions greatly extend the timeline",
      "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "No continuing education requirement is published",
      "fee": "$300",
      "late": "$100 late fee; the board issues no temporary licenses or extensions",
      "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
    },
    "reciprocity": {
      "rule": "No formal reciprocity. A private investigator licensed in another state who originates an investigation in their home state may continue it into New Mexico for up to 30 days after giving the board prior written notice of when, where and the scope of the work.",
      "agreements": null,
      "sourceUrl": "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,600",
      "p25": "$36,900",
      "p75": "$64,280",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NM"
    },
    "localNuance": "New Mexico licenses individuals and companies separately: a solo investigator needs the individual PI license, while an agency taking contracts or employing investigators needs the separate PI Company license ($200 initial, $100 per branch office). Companies providing personal protection or bodyguard services must carry $1,000,000 general liability insurance instead of (or in addition to) the $10,000 surety bond.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.rld.nm.gov?p=15797/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does New Mexico require a written exam for private investigators?",
        "a": "Yes. Every PI applicant must pass a department-issued jurisprudence exam covering the Private Investigations Act and board rules. The board does not publish a question count, time limit or study guide; the exam requirement appears on the application packet checklist."
      },
      {
        "q": "How much investigative experience do I need in New Mexico?",
        "a": "6,000 hours of actual investigative work performed within the five years before applying, verified through notarized Certification of Experience forms signed by qualifying employers or supervisors."
      },
      {
        "q": "What does a New Mexico private investigator license cost?",
        "a": "The initial license is $400 (including a $100 application fee), renewal is $300 every two years, and the fingerprint background check costs $44. A $10,000 surety bond must also be in place, which typically costs $100-$300 per year in premium."
      },
      {
        "q": "Can an out-of-state private investigator work a case in New Mexico?",
        "a": "Only for investigations that originate in the investigator's home state, and only for up to 30 days. The New Mexico PI Board must receive written notice of when, where and the scope of the investigation before the work begins."
      }
    ],
    "sources": [
      {
        "label": "NM RLD - Private Investigations overview and contact",
        "url": "https://www.rld.nm.gov?p=15797/",
        "checkedOn": "2026-10"
      },
      {
        "label": "NM Private Investigations Board - License Fees FAQ",
        "url": "https://www.rld.nm.gov/uploads/files/FAQs.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NM RLD - Private Investigator License application packet",
        "url": "https://www.rld.state.nm.us/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PI%20application.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Start a Business by State - New Mexico PI licensing guide",
        "url": "https://startbusinessbystate.com/?p=714",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NY": {
    "agency": "New York Department of State, Division of Licensing Services",
    "agencyUrl": "https://dos.ny.gov/become-private-investigator",
    "exam": {
      "vendor": "NYS Department of State (state-administered written exam at DOS exam sites)",
      "vendorUrl": "https://dos.ny.gov/become-private-investigator",
      "fee": "$15",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://dos.ny.gov/become-private-investigator",
      "sourceNote": "The DOS does not publish a question count, time limit or passing score; a passing exam slip may be no more than two years old when the application is filed. The exam schedule for July-December 2026 is posted on the DOS page."
    },
    "experience": "Three years of full-time investigative experience as an employee of a licensed private investigator or a government or police investigative agency; or three years in a position whose primary duties were conducting investigations; or three years supervising and reviewing the work of at least three investigators; or 20 years of service as a police officer or Fire Marshal.",
    "eligibility": {
      "minAge": 25,
      "citizenship": "Not published as a requirement on the DOS licensing page",
      "education": "No minimum education requirement is published",
      "other": "Applicant must be a principal in the business entity; holders of employment agency licenses or anyone with a financial interest in an employment agency is ineligible"
    },
    "background": {
      "method": "Electronic fingerprinting through an approved vendor (IdentoGO by IDEMIA)",
      "fee": "$88.50 payable to IDEMIA",
      "disqualifiers": "The DOS does not publish a specific disqualifier list on the licensing page; incomplete applications with any omission or inaccuracy may be denied",
      "sourceUrl": "https://dos.ny.gov/become-private-investigator"
    },
    "fees": [
      {
        "item": "Initial application (individual)",
        "fee": "$400",
        "sourceUrl": "https://dos.ny.gov/become-private-investigator"
      },
      {
        "item": "Initial application (corporation or business entity)",
        "fee": "$500",
        "sourceUrl": "https://dos.ny.gov/become-private-investigator"
      },
      {
        "item": "Written exam",
        "fee": "$15",
        "sourceUrl": "https://dos.ny.gov/become-private-investigator"
      },
      {
        "item": "Fingerprinting",
        "fee": "$88.50",
        "sourceUrl": "https://dos.ny.gov/become-private-investigator"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 bond (premium set by the surety market)",
        "sourceUrl": "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$400 individual / $500 entity",
        "sourceUrl": "https://www.ny.gov/services/private-investigators-license"
      },
      {
        "item": "Late renewal penalty",
        "fee": "$100",
        "sourceUrl": "https://www.ny.gov/services/private-investigators-license"
      }
    ],
    "application": {
      "portal": "Paper application by mail to NYS Department of State, Division of Licensing Services, P.O. Box 22001, Albany, NY 12201",
      "portalUrl": "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application",
      "steps": [
        "Pass the written private investigator exam and keep the original PASSED slip (valid two years)",
        "Complete the DOS-0075 application, including the signed DMV Informed Consent section",
        "Obtain proof of $10,000 surety bonding from a surety company authorized in New York",
        "Complete electronic fingerprinting and attach the receipt",
        "Attach proof of three years of qualifying experience (or the 20-year police officer or Fire Marshal alternative)",
        "Submit the packet with the $400 (individual) or $500 (entity) application fee"
      ],
      "processingTime": "Average 3-5 business days per the state services page, though the DOS notes initial issuance times vary depending upon investigation",
      "sourceUrl": "https://www.ny.gov/services/private-investigators-license"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "No continuing education requirement is published",
      "fee": "$400 individual / $500 entity",
      "late": "$100 late penalty; renewals are mailed 90 days before expiration and a late fee applies if not renewed six weeks prior to expiration",
      "sourceUrl": "https://www.ny.gov/services/private-investigators-license"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$59,140",
      "p25": "$45,970",
      "p75": "$80,910",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NY"
    },
    "localNuance": "The exam must be passed before submitting the application, and the passing slip expires two years after the exam date. Agencies that employ security guards must also carry liability insurance of $100,000 per occurrence and $300,000 aggregate covering false arrest, malicious prosecution, libel, slander and privacy violations. Operating without a license is a Class A misdemeanor under General Business Law Section 70.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dos.ny.gov/become-private-investigator"
      }
    ],
    "stateFaqs": [
      {
        "q": "When should I take the New York PI exam?",
        "a": "Before filing the application. Applicants should not submit until they have passed the exam, and the passing slip cannot be more than two years old when the application is filed, so the exam and the experience documentation need to line up."
      },
      {
        "q": "How much experience qualifies for a New York private investigator license?",
        "a": "Three years of full-time investigative experience for a licensed PI or a government or police agency, three years supervising at least three investigators, or 20 years as a police officer or Fire Marshal. Lack of qualifying experience is the most common denial reason."
      },
      {
        "q": "What are the main fees in New York?",
        "a": "$15 for the written exam, $88.50 for fingerprinting, $400 for an individual application ($500 for a firm), and the same amounts to renew every two years. A $100 late penalty applies to late renewals."
      },
      {
        "q": "Do I need insurance as a New York private investigator?",
        "a": "A $10,000 surety bond is always required. Liability insurance of $100,000 per occurrence and $300,000 aggregate becomes mandatory only if the agency employs security guards, and the policy must specifically cover false arrest, false imprisonment, malicious prosecution, libel, slander and privacy violations."
      }
    ],
    "sources": [
      {
        "label": "NYS DOS - Become a Private Investigator",
        "url": "https://dos.ny.gov/become-private-investigator",
        "checkedOn": "2026-10"
      },
      {
        "label": "NYS DOS - PI/BEA/WGP Agency Application (DOS-0075)",
        "url": "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application",
        "checkedOn": "2026-10"
      },
      {
        "label": "NY.gov - Private Investigator License service page (fees and processing)",
        "url": "https://www.ny.gov/services/private-investigators-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - NYS Private Investigator License Requirements and Exam",
        "url": "https://legalclarity.org/nys-private-investigator-license-requirements-and-exam/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NC": {
    "agency": "North Carolina Private Protective Services Board (NC Department of Public Safety)",
    "agencyUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board",
    "experience": "Three years of verifiable investigative experience - private-sector investigation for a contract security or private firm, government or law enforcement investigation, or a military occupational specialty plus two years of investigative experience within the past five years. Academic credits reduce the hours: an associate degree earns 400 hours (plus up to 100 bonus hours), a bachelor degree 800 (plus 200), a graduate degree 1,200 (plus 300), under 14B NCAC 16 .0401.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or Qualified Alien",
      "education": "High school diploma or GED - proof must be uploaded with the application",
      "other": "Good moral character and temperate habits; five letters attesting to character and reputation; an Equifax credit check run within 30 days of applying; a personal meeting with a Board investigator, the Screening Committee, the Director or a designated representative before issuance"
    },
    "background": {
      "method": "Electronic fingerprints via Live Scan (or classifiable fingerprint cards mailed to the Board) plus a statewide criminal history records search by the Board-designated reporting service for every state of residence in the preceding 60 months",
      "fee": "The actual cost charged by the State Bureau of Investigation, collected online by the Board",
      "disqualifiers": "Convictions for firearms offenses, controlled substance crimes, assault or violence, breaking or entering, burglary or larceny, and alcohol or narcotics addiction count against applicants under G.S. 74C-8; guilty and no-contest pleas are treated as convictions",
      "sourceUrl": "https://www.oah.nc.gov/092023-ppsb-objection-letter/open"
    },
    "fees": [
      {
        "item": "Application (non-refundable, plus a $4 convenience fee and card transaction fee)",
        "fee": "$150",
        "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      {
        "item": "License fee (per year of the license term)",
        "fee": "$250",
        "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      {
        "item": "Trainee permit (PI Associate, per year)",
        "fee": "$250",
        "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      {
        "item": "Late renewal",
        "fee": "$100 in addition to the renewal fee",
        "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      {
        "item": "Branch office (per year of term)",
        "fee": "$50",
        "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      }
    ],
    "application": {
      "portal": "PPSB online application on the Board's website",
      "portalUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/licenses",
      "steps": [
        "Submit the online application with a head-and-shoulders digital photo (JPG, JPEG or PNG taken within six months)",
        "Upload a statement of statewide criminal history search results for each state of residence in the past 60 months",
        "Upload proof of high school graduation (diploma or GED certificate)",
        "Submit fingerprints electronically or by card and authorize the Equifax credit check",
        "Obtain five online character letters attesting to good character and reputation",
        "Meet personally with a Board investigator, the Screening Committee, the Director or another designated representative to review G.S. 74C and the rules before the license is issued"
      ],
      "processingTime": "Several weeks to a few months; the personal meeting and background review are built into the process and no fixed timeline is published",
      "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
    },
    "renewal": {
      "cycle": "1 or 2 years as issued by the Board (the fee is $250 per year of the license term)",
      "ce": "No continuing education requirement is published in the licensing rules",
      "fee": "$250 per year of term",
      "late": "$100 late renewal fee in addition to the renewal fee",
      "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
    },
    "reciprocity": {
      "rule": "No general reciprocity program is published. Under 14B NCAC 16 .0401, military spouses holding an active PI license from another state with substantially equal requirements, plus two years of investigative experience within the past five years, may have that accepted in place of the standard three-year requirement.",
      "agreements": null,
      "sourceUrl": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$52,890",
      "p25": "$41,000",
      "p75": "$74,900",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=NC"
    },
    "localNuance": "North Carolina does not give a written exam - qualification is experience and character based. Newcomers without the three years start on a trainee (PI Associate) permit, which requires a notarized supervision statement, a Board-provided experience log, and continuous work under a fully licensed PI. Applications returned for incompleteness are charged additional fees, and all fees are paid online by card or electronic funds transfer.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "The Board's application rule 14B NCAC 16 .0201 was amended effective September 1, 2024 (with earlier amendments effective November 1, 2023), formalizing the online application, Live Scan fingerprints, digital photo upload, statewide criminal record search statements, Equifax credit check and online character letters.",
        "sourceUrl": "https://www.oah.nc.gov/092023-ppsb-objection-letter/open"
      }
    ],
    "stateFaqs": [
      {
        "q": "Is there an exam for a North Carolina private investigator license?",
        "a": "No. The Private Protective Services Board does not administer a written exam. Qualification rests on three years of documented investigative experience, character references, a credit check, background checks, and a personal meeting with a Board representative."
      },
      {
        "q": "How can a degree shorten the North Carolina experience requirement?",
        "a": "Under 14B NCAC 16 .0401, an associate degree credits 400 hours (plus up to 100 bonus hours for related coursework), a bachelor degree 800 hours (plus 200) and a graduate degree 1,200 hours (plus 300) against the required investigative experience."
      },
      {
        "q": "What does licensing cost in North Carolina?",
        "a": "$150 to apply, then $250 per year of the license term, so a two-year license runs $500 after approval. Trainee permits are $250 per year, late renewals add $100, and branch offices are $50 per year."
      },
      {
        "q": "What if I do not have three years of experience yet?",
        "a": "Apply for the PI Associate (trainee) permit. It requires no prior investigative experience, but you must work under the direct supervision of a licensed PI, keep a Board-provided experience log, and pay $250 per year."
      }
    ],
    "sources": [
      {
        "label": "NC DPS - Private Protective Services Board",
        "url": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board",
        "checkedOn": "2026-10"
      },
      {
        "label": "14B NCAC Chapter 16 - Private Protective Services Board rules (fees, application)",
        "url": "https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NC Office of Administrative Hearings - PPSB rule 16 .0201 amendment",
        "url": "https://www.oah.nc.gov/092023-ppsb-objection-letter/open",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - NC Private Investigator License Requirements and Fees",
        "url": "https://legalclarity.org/nc-private-investigator-license-requirements-and-fees",
        "checkedOn": "2026-10"
      }
    ]
  },
  "ND": {
    "agency": "North Dakota Private Investigation and Security Board (PISB)",
    "agencyUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
    "exam": {
      "vendor": "North Dakota PISB (board-administered exam)",
      "vendorUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      "fee": "$100 one-time application and testing fee covers processing and testing",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      "sourceNote": "Exams are administered individually in Bismarck; the Executive Director notifies applicants of the time and location once application requirements are met. The board does not publish a question count or passing score."
    },
    "experience": "A licensed private investigator must document 2,000 hours of service and pass the exam; a registered private investigator is an employee of a licensed investigative agency, does not take the exam, and registers with the board ($25 registration fee per the fee schedule).",
    "eligibility": {
      "education": "No minimum education requirement is published",
      "other": "Active law enforcement officers cannot hold a PI license or work as private investigators in North Dakota (off-duty law enforcement may work as security officers); the license holder is the responsible decision maker for the company"
    },
    "background": {
      "method": "Two legible fingerprint cards submitted with the application (board-provided cards available at no charge, or standard FBI applicant cards)",
      "fee": "$41.25 criminal records search (BCI and FBI)",
      "disqualifiers": "The board does not publish a specific disqualifier list on its licensing pages",
      "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
    },
    "fees": [
      {
        "item": "Application and testing (one-time, new applicants)",
        "fee": "$100",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      {
        "item": "Criminal records search (BCI and FBI)",
        "fee": "$41.25",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
      },
      {
        "item": "Private investigator license (1 year, expires September 30)",
        "fee": "$150",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      {
        "item": "Licensed Private Investigator (fee schedule line item)",
        "fee": "$130",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
      },
      {
        "item": "Detective agency license",
        "fee": "$250",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
      },
      {
        "item": "Late fee (registrations)",
        "fee": "$10 per month of non-renewal",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
      }
    ],
    "application": {
      "portal": "Paper application by mail to NDPISB, 513 East Bismarck Expressway, Suite 5, Bismarck, ND 58504",
      "portalUrl": "https://www.pisb.nd.gov/licensing/forms",
      "steps": [
        "Complete the licensed private investigator application pages (1, 2, 2a, 3 and 6) and supply requested documentation of the 2,000 service hours",
        "Submit two legible fingerprint cards (do not staple or fold) and the $41.25 criminal search fee",
        "Email one passport-sized photo of the applicant to the board's photo address when the application is submitted",
        "Pay the one-time $100 application and testing fee plus the license fee by check payable to the board",
        "After requirements are met, take the board exam in Bismarck at the time scheduled by the Executive Director",
        "If seeking agency status, also register the business with the North Dakota Secretary of State and pay the $250 agency fee"
      ],
      "processingTime": "About 30 business days once all applications, fees and documentation are received",
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
    },
    "renewal": {
      "cycle": "1 year - all licenses and registrations expire September 30 of each year, with fees prorated for the portion of the license period in effect",
      "ce": "No continuing education requirement is published",
      "fee": "Same fee structure as initial issuance minus the one-time $100 application fee",
      "late": "$10 per month of non-renewal for registrations; license holders face possible criminal and disciplinary action for non-renewal",
      "sourceUrl": "https://www.pisb.nd.gov/licensing/forms"
    },
    "reciprocity": {
      "rule": "The board states plainly that North Dakota has no reciprocity - everyone must apply for a North Dakota license and meet all qualifications.",
      "agreements": null,
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$44,310",
      "p25": "$39,840",
      "p75": "$50,440",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=ND"
    },
    "localNuance": "North Dakota separates the licensed private investigator (passes the exam, responsible for all company employees) from the registered investigator (agency employee, no exam). Armed work requires a separate weapons exam and state weapons certification - a concealed weapons or constitutional carry permit does not authorize carrying a weapon while providing investigative services. Residency is not required.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026. The most recent substantive statute amendments took effect January 1, 2016 (2015 House Bill 1126, which added recovery services to the chapter and raised the exam fee cap to $100).",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      }
    ],
    "stateFaqs": [
      {
        "q": "How is the North Dakota PI exam scheduled?",
        "a": "Individually. Once the application process and requirements are met, the Executive Director notifies the applicant of the exam time and location in Bismarck. Exams are not offered at commercial test centers."
      },
      {
        "q": "What does it cost to become a licensed private investigator in North Dakota?",
        "a": "A one-time $100 application and testing fee, a $41.25 BCI and FBI criminal records search, and the annual license fee - the board's FAQ lists $150 for the one-year license, while its fee schedule lists $130 for the licensed private investigator line item. Licenses expire every September 30."
      },
      {
        "q": "Can I carry a firearm as a North Dakota private investigator with my CCW?",
        "a": "No. The board states that concealed weapons and constitutional carry permits do not allow carrying a weapon while providing investigative services. You must pass the weapons exam and meet the state's weapons requirements before an armed certification is issued."
      },
      {
        "q": "Does North Dakota recognize other states' PI licenses?",
        "a": "No. The board's FAQ states there is no reciprocity; every applicant must qualify in North Dakota. Residency is not required, however, so out-of-state residents can apply directly."
      }
    ],
    "sources": [
      {
        "label": "ND PISB - Licensing FAQ",
        "url": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        "checkedOn": "2026-10"
      },
      {
        "label": "ND PISB - Forms and fee breakdown",
        "url": "https://www.pisb.nd.gov/licensing/forms",
        "checkedOn": "2026-10"
      },
      {
        "label": "North Dakota Century Code 43-30 (2015 HB 1126 journal - fees and licensing)",
        "url": "https://ndlegis.gov/assembly/64-2015/regular/journals/sr-dailyjnl-75.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "ND Legislative Branch - HB 1126 (2015) enrolled bill",
        "url": "https://www.legis.nd.gov/assembly/64-2015/documents/15-8094-02003m.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OH": {
    "agency": "Ohio Department of Public Safety - Private Investigator Security Guard Services (PISGS)",
    "agencyUrl": "https://codes.ohio.gov/orc/4749",
    "exam": {
      "vendor": "Ohio DPS / PISGS (state examination devised by the Director of Public Safety)",
      "vendorUrl": "https://codes.ohio.gov/orc/4749",
      "fee": "$25 exam application fee",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17",
      "sourceNote": "OAC 4501:7-1-07 governs the exam; after eligibility is confirmed PISGS notifies the applicant of the exam time and place in Columbus, with up to 90 days and three attempts to pass. The state does not publish a question count or passing score."
    },
    "experience": "At least two years of continuous investigatory or security services work immediately preceding application - for a law enforcement or other public agency engaged in investigatory activities, for a private investigator or security guard provider, or in the practice of law - or equivalent experience as determined by rule of the Director (ORC 4749.03(A)(1)(b)). Criminal justice education may substitute for up to half of the experience requirement subject to PISGS approval.",
    "eligibility": {
      "minAge": "No numerical minimum is set in Chapter 4749; the application collects birth date and requires legal capacity to hold the license",
      "citizenship": "The application states citizenship; Chapter 4749 does not publish a citizenship-only bar",
      "education": "No minimum education requirement in statute",
      "other": "Applicants must submit five references from reputable citizens known for at least five years who are not related by blood or marriage, plus a recent full-face photograph"
    },
    "background": {
      "method": "Fingerprint submission to the Bureau of Criminal Identification and Investigation (BCI&I) via WebCheck; an FBI check is added if the applicant intends to carry a firearm; licensees and registrants enroll in the BCI retained applicant fingerprint database",
      "fee": "$10 BCI retained applicant fingerprint enrollment fee per company application; BCI/FBI vendor charges are paid separately to the WebCheck provider",
      "disqualifiers": "Disqualifying offenses are defined in OAC 4501:7-1-19, including crimes of moral turpitude and specified violent or sexually oriented offenses; adjudicated incompetence without restored capacity is disqualifying under ORC 4749.03",
      "sourceUrl": "https://codes.ohio.gov/orc/4749"
    },
    "fees": [
      {
        "item": "Exam application (per individual or qualifying agent)",
        "fee": "$25",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "License issuance (Class A/B/C)",
        "fee": "$200 (refunded if the application is denied)",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "BCI retained applicant fingerprint enrollment (company application)",
        "fee": "$10",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "Branch license",
        "fee": "$100",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "Biennial renewal",
        "fee": "$550",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "Employee registration ID card",
        "fee": "$40 issuance / $25 annual renewal",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      },
      {
        "item": "Firearm bearer notation",
        "fee": "$15",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      }
    ],
    "application": {
      "portal": "PISGS online licensing (Ohio Department of Public Safety)",
      "portalUrl": "https://pisgs.ohio.gov/pisgs.stm",
      "steps": [
        "Create the PISGS account and start the Class B (private investigator) provider application",
        "Document two years of continuous qualifying experience with dates, employers and duties",
        "Upload a certificate of liability insurance naming the Department of Public Safety - PISGS as certificate holder, meeting the $100,000 per person / $300,000 per occurrence bodily injury and $100,000 property damage minimums",
        "List five reputable citizen references known at least five years and submit fingerprints through WebCheck for the BCI check",
        "Pay the $25 exam application and $200 license issuance fees; the $200 issuance fee is refunded if the license is denied",
        "After prerequisites are met, take the PISGS exam in Columbus within the 90-day window (three attempts allowed)"
      ],
      "processingTime": "Several weeks; the state does not publish a fixed processing timeline, and the exam window runs from the eligibility notice",
      "sourceUrl": "https://codes.ohio.gov/orc/4749"
    },
    "renewal": {
      "cycle": "2 years (licenses issued on or after April 9, 2025 follow the biennial cycle)",
      "ce": "No continuing education requirement is published in Chapter 4749 or OAC 4501:7-1",
      "fee": "$550 biennial renewal",
      "late": "Not specified in the fee rule; workers' compensation and unemployment coverage must be in place for renewal eligibility",
      "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$47,200",
      "p25": "$41,600",
      "p75": "$70,910",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=OH"
    },
    "localNuance": "Ohio licenses the business, not the lone individual: a Class B license covers private investigation, Class C security guard services, and Class A both, with a qualifying agent who meets the experience and exam requirements. Employees perform investigative work only after the employer obtains a $40 PISGS registration ID card for them. Instead of a surety bond, Ohio requires comprehensive general liability insurance at the statutory minimums. Armed work requires OPOTC-approved training (20 hours handgun plus 5 hours for other firearms), the $15 firearm-bearer notation, and annual requalification.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "House Bill 238 took effect April 9, 2025, moving Ohio private investigator licenses to a two-year (biennial) renewal cycle under amended ORC 4749.03.",
        "sourceUrl": "https://codes.ohio.gov/orc/4749"
      },
      {
        "year": 2026,
        "change": "The fee rule OAC 4501:7-1-17 was reissued effective May 1, 2026, confirming the $25 exam application, $200 issuance, $10 BCI enrollment and $550 biennial renewal fees.",
        "sourceUrl": "https://codes.ohio.gov/oac/4501:7-1-17"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Ohio require a bond for private investigators?",
        "a": "No. Chapter 4749 requires comprehensive general liability insurance instead - at least $100,000 per person and $300,000 per occurrence for bodily injury plus $100,000 for property damage - with the insurer obligated to notify PISGS before any cancellation or lapse."
      },
      {
        "q": "What does Ohio's PI exam cover and when is it taken?",
        "a": "The Director's exam verifies competency to operate under ORC 4749 and the PISGS rules. It is taken in Columbus after PISGS confirms eligibility; applicants have up to 90 days and three attempts from the eligibility notice. The state does not publish a question count."
      },
      {
        "q": "How much does an Ohio private investigator license cost?",
        "a": "$25 for the exam application, $200 for license issuance (refunded if denied), $10 for BCI fingerprint enrollment, and $550 to renew every two years. Branch licenses are $100 and employee ID cards $40 with $25 annual renewal."
      },
      {
        "q": "Who has to be licensed in Ohio - me or my company?",
        "a": "The business entity is licensed (Class B for investigation only, Class A for investigation plus security) through a qualifying agent who has two years of continuous qualifying experience and passes the exam. Investigators employed by a licensee instead register with PISGS and carry a $40 ID card."
      }
    ],
    "sources": [
      {
        "label": "Ohio Revised Code Chapter 4749 - Private Investigators; Security Services",
        "url": "https://codes.ohio.gov/orc/4749",
        "checkedOn": "2026-10"
      },
      {
        "label": "Ohio Administrative Code 4501:7-1-17 - Fees (effective May 1, 2026)",
        "url": "https://codes.ohio.gov/oac/4501:7-1-17",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator - Ohio Private Investigator License process",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-ohio",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrivateInvestigatorEdu.org - How to Become a Private Investigator in Ohio",
        "url": "https://privateinvestigatoredu.org/ohio/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OK": {
    "agency": "Oklahoma Council on Law Enforcement Education and Training (CLEET)",
    "agencyUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/",
    "exam": {
      "vendor": "CLEET Phase III Private Investigator written exam, administered through Oklahoma CareerTech (Health Certification Project) testing centers",
      "vendorUrl": "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html",
      "fee": "$50 testing fee payable at the CareerTech testing center",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html",
      "sourceNote": "Candidates must complete a CLEET-approved training program before testing and present the certificate of completion plus government photo ID. CLEET verifies all licensure requirements before issuing a license. The state does not publish a question count or passing score."
    },
    "experience": "Applicants must submit documented proof of experience or comparable training with the application; CLEET's licensing page does not publish a specific hour count. Armed applicants must additionally pass a current MMPI psychological evaluation.",
    "eligibility": {
      "citizenship": "Non-US citizens must provide verifiable documentation of legal residence",
      "education": "No minimum education level is published",
      "other": "Certified court Judgment and Sentence or a letter of no record for each arrest or charge; record requests completed by both the local police department and the county sheriff; two current passport-size color photographs; armed licenses require a current MMPI"
    },
    "background": {
      "method": "Classifiable fingerprints for a national criminal history record check (fee deposited to the OSBI Revolving Fund), plus local police and sheriff record requests",
      "fee": "The prevailing fingerprint processing fee is charged with the original application and paid to OSBI",
      "disqualifiers": "CLEET does not publish a specific disqualifier list on its licensing page; all page 2 arrest and charge questions must be answered with certified court documentation",
      "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
    },
    "fees": [
      {
        "item": "Unarmed private investigator license (3 years)",
        "fee": "$50",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      {
        "item": "Armed private investigator license (3 years)",
        "fee": "$100",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      {
        "item": "Combination PI and security guard license",
        "fee": "$150",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      {
        "item": "Investigative agency license (5 years)",
        "fee": "$300",
        "sourceUrl": "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?citeid=485804"
      },
      {
        "item": "Phase III exam (CareerTech testing)",
        "fee": "$50",
        "sourceUrl": "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html"
      },
      {
        "item": "Late renewal (within 30 days of expiration)",
        "fee": "$25",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      }
    ],
    "application": {
      "portal": "CLEET Thentia online portal (paper applications no longer accepted)",
      "portalUrl": "https://cleet.us.thentiacloud.net/webs/cleet/",
      "steps": [
        "Complete a CLEET-approved training program and pass the Phase III Private Investigator exam at a CareerTech testing center",
        "Submit the application through the Thentia portal, paying 20% of the licensing fee at submission",
        "Attach certified court Judgment and Sentence documents or letters of no record for every arrest or charge",
        "Attach record requests from both the local police department and sheriff, two passport photos, and documented proof of experience or comparable training",
        "Self-employed investigators must also file the agency application; armed applicants add the current MMPI",
        "After approval, pay the remaining 80% of the fee, then log in and print the license"
      ],
      "processingTime": "Not published by CLEET; payment of the balance is requested by email once the application is approved pending fee",
      "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
    },
    "renewal": {
      "cycle": "3 years (individual PI licenses; investigative agency licenses run 5 years)",
      "ce": "CLEET publishes guidelines for continuing education credit, but no hour requirement is stated on the PI licensing page",
      "fee": "$50 unarmed / $100 armed / $150 combination",
      "late": "$25 late fee if renewed within 30 days of expiration; more than 30 days expired requires a completely new application",
      "sourceUrl": "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$39,680",
      "p25": "$37,110",
      "p75": "$58,430",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=OK"
    },
    "localNuance": "Oklahoma bundles private investigators and security guards under one CLEET regime: the PI exam is Phase III (security guard exams are Phases I-II, armed guard Phase IV), and a combination PI-plus-security license costs $150. Active certified peace officers pay only 20% of the armed license fee, and retired peace officers in good standing are exempt from re-fingerprinting. If an application is denied or unqualified, CLEET retains 20% of the fee as processing and refunds the rest.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "House Bill 3786 amended 59 O.S. Section 1750.6, making the $25 late renewal fee non-refundable, requiring new applications (not renewals) more than 30 days after expiration, and exempting retired peace officers in good standing from fingerprint submission for armed licenses.",
        "sourceUrl": "https://webserver1.lsb.state.ok.us/cf_pdf/2023-24%20ENGR/hB/HB3786%20ENGR.PDF"
      }
    ],
    "stateFaqs": [
      {
        "q": "What exam do Oklahoma private investigator applicants take?",
        "a": "The CLEET Phase III Private Investigator written exam, given at Oklahoma CareerTech testing centers for a $50 fee. Candidates must first complete a CLEET-approved training program and bring the certificate of completion and government-issued photo ID."
      },
      {
        "q": "How much is an Oklahoma PI license?",
        "a": "$50 for an unarmed three-year license, $100 armed, $150 for the PI-and-security combination, and $300 for a five-year investigative agency license. Online applications pay 20% at submission and the balance after approval."
      },
      {
        "q": "What happens if my Oklahoma PI license expires?",
        "a": "You have a 30-day grace window with a $25 late fee. More than 30 days after expiration the license is not renewable and a completely new application - including the exam and fee - is required."
      },
      {
        "q": "Do armed Oklahoma investigators face extra requirements?",
        "a": "Yes. The armed license costs $100 and requires a current MMPI psychological evaluation along with the fingerprint-based national background check. Active peace officers pay only 20% of the armed fee."
      }
    ],
    "sources": [
      {
        "label": "OK CLEET - Private Investigators licensing page",
        "url": "https://www.ok.gov/cleet/Licensing/Private_Investigators/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oklahoma CareerTech - CLEET Private Security / PI testing",
        "url": "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "59 O.S. Section 1750.6 - Application, term, renewal (OSCN)",
        "url": "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?citeid=485804",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oklahoma HB 3786 (2024) - enrolled bill amending Section 1750.6",
        "url": "https://webserver1.lsb.state.ok.us/cf_pdf/2023-24%20ENGR/hB/HB3786%20ENGR.PDF",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OR": {
    "agency": "Oregon Department of Public Safety Standards and Training (DPSST) - Private Investigator Licensing Program",
    "agencyUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx",
    "exam": {
      "vendor": "DPSST (online exam through Workday)",
      "vendorUrl": "https://www.oregon.gov/dpsst/PI/Pages/Exam%20Information.aspx",
      "fee": "$29 application/examination fee",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482",
      "sourceNote": "Exam results require 86 percent or higher; the exam may be retaken up to three separate times, after which a failed applicant must wait one year. Registration is approved manually during business hours. No exam is required for renewal."
    },
    "experience": "1,500 hours of documented investigatory work experience, an approved related course of study (up to 500 hours of education may count toward the total), or a combination of work, education and military training approved by DPSST. The provisional investigator license requires no experience but bars supervising other investigators and carries extra continuing education hours at renewal.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Must be eligible to work in the United States",
      "education": "No minimum education level; approved coursework can substitute for up to 500 of the 1,500 experience hours",
      "other": "Good moral fitness as defined by law and administrative rule; three professional reference letters (references cannot be related by blood or marriage or be personal in nature); signed PI-27 Code of Ethics"
    },
    "background": {
      "method": "Fingerprints on a DPSST-provided card or electronic submission through Fieldprint (a copy of the Fieldprint confirmation page is included with the application)",
      "fee": "$45 background fee through September 30, 2026; $48 for applications submitted on or after October 1, 2026",
      "disqualifiers": "Criminal disqualifiers are listed in Oregon Administrative Rules Chapter 259 Division 61",
      "sourceUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
    },
    "fees": [
      {
        "item": "Application/examination",
        "fee": "$29",
        "sourceUrl": "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf"
      },
      {
        "item": "Fingerprint/criminal background check",
        "fee": "$45 (rises to $48 on October 1, 2026)",
        "sourceUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
      },
      {
        "item": "License fee",
        "fee": "$690 per the PI-1 fee schedule (the DPSST licensing page currently lists $800 for the licensing fee)",
        "sourceUrl": "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf"
      },
      {
        "item": "Surety bond or errors and omissions insurance",
        "fee": "$5,000 minimum (or irrevocable letter of credit from an Oregon commercial bank)",
        "sourceUrl": "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf"
      }
    ],
    "application": {
      "portal": "Paper PI-1 application packet by mail to DPSST, 4190 Aumsville Hwy SE, Salem, OR 97317 (online renewal available)",
      "portalUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx",
      "steps": [
        "Complete form PI-1 and attach documentation of the 1,500 hours (resume, transcripts or combination approval)",
        "Secure a $5,000 surety bond, irrevocable letter of credit, or errors and omissions insurance naming the applicant as principal",
        "Obtain three professional reference letters and sign the PI-27 Code of Ethics",
        "Submit one fingerprint card or Fieldprint confirmation, and email a JPEG passport-quality photo (640x480 minimum, within six months)",
        "Pay the $29 application/exam fee, $45 background fee and license fee - all DPSST payments are non-refundable",
        "After the packet is processed, take the online exam through Workday and score 86 percent or higher"
      ],
      "processingTime": "The initial application process and criminal background check typically take 4-8 weeks",
      "sourceUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
    },
    "renewal": {
      "cycle": "2 years from date of issuance",
      "ce": "32 hours of continuing education every two years, including 2 hours of ethics; provisional licensees must submit additional CE hours",
      "fee": "Same fee schedule as initial licensure (no exam required at renewal); renewal uses form PI-21 with a CE summary and recordkeeping form",
      "late": "Not published on the DPSST licensing pages",
      "sourceUrl": "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$76,480",
      "p25": "$55,660",
      "p75": "$92,390",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=OR"
    },
    "localNuance": "Oregon offers a provisional investigator license with no experience requirement - the holder cannot supervise other investigators and owes extra continuing education at renewal, then upgrades to the full license with form PI-11. The $5,000 financial responsibility requirement is unusually flexible: a corporate surety bond, an irrevocable letter of credit issued by an Oregon commercial bank, or errors and omissions insurance all satisfy it.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "The fingerprint and criminal background check fee rises from $45 to $48 for applications submitted on or after October 1, 2026, per the DPSST Private Investigator licensing page.",
        "sourceUrl": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
      }
    ],
    "stateFaqs": [
      {
        "q": "Can I get an Oregon PI license without investigative experience?",
        "a": "Yes, through the provisional private investigator license. It requires the same application, bond, references and exam, but no experience hours; provisional licensees cannot supervise other investigators and must complete additional continuing education hours at renewal before upgrading via form PI-11."
      },
      {
        "q": "How hard is the Oregon DPSST PI exam?",
        "a": "The passing threshold is 86 percent. Applicants may retake the exam up to three separate times; after a fourth failure they must wait one year before retaking it. The exam is taken online through Workday after the application packet is processed."
      },
      {
        "q": "What does Oregon PI licensure cost?",
        "a": "The PI-1 fee schedule totals $764: $29 application/examination, $45 background check and $690 license fee (the DPSST web page currently lists $800 for the licensing fee). The background fee rises to $48 on October 1, 2026. All payments are non-refundable."
      },
      {
        "q": "What continuing education do Oregon investigators owe?",
        "a": "32 hours of continuing education reported every two years with the PI-21 renewal, including 2 hours dedicated to ethics. Provisional licensees owe additional hours beyond the base 32."
      }
    ],
    "sources": [
      {
        "label": "Oregon DPSST - New Private Investigator License Information",
        "url": "https://www.oregon.gov/dpsst/PI/Pages/New.aspx",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oregon DPSST - PI-1 Application for Licensure (fee schedule)",
        "url": "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oregon SOS License Directory - Private Investigator (requirements, exam, CE)",
        "url": "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482",
        "checkedOn": "2026-10"
      },
      {
        "label": "ORS 703.415 - Investigator's license qualifications",
        "url": "https://www.oregonlaws.org/ors/ors_703.415",
        "checkedOn": "2026-10"
      }
    ]
  },
  "PA": {
    "agency": "County Court of Common Pleas / Clerk of Courts (Pennsylvania Private Detective Act of 1953) - Pennsylvania has no state PI licensing agency",
    "agencyUrl": "https://www.yorkcountypa.gov/218/Private-Detectives",
    "experience": "At least three years as a detective (including employment by a licensed private detective agency), as a member of a US government investigative service, as a sheriff, as a member of the Pennsylvania State Police, or as a city police officer above the rank of patrolman. Experience must be proven with two duly acknowledged certificates; for partnerships, associations or corporations, at least one member or officer must personally qualify.",
    "eligibility": {
      "minAge": 25,
      "citizenship": "United States citizen",
      "education": "No minimum education requirement in the Act",
      "other": "Five character references from reputable citizens of the applicant's community who have personally known the applicant for at least five years; felony or moral turpitude convictions bar licensure absent an executive pardon"
    },
    "background": {
      "method": "Two fingerprint cards processed through the Pennsylvania State Police, plus an investigation by the county District Attorney's office before the court acts",
      "fee": "County-set: Allegheny charges $37.50 for PSP fingerprint card processing; York charges $17.50 per fingerprint card",
      "disqualifiers": "The Private Detective Act bars persons convicted of felonies and specified offenses - illegal weapons possession, burglary instruments or unlawful entry, buying or receiving stolen property, pickpocketing, narcotics offenses, recklessly endangering another person, terroristic threats, simple assault, and aiding prison escape - unless pardoned",
      "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
    },
    "fees": [
      {
        "item": "Statutory license fee (individual, 2-year term)",
        "fee": "$200",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania"
      },
      {
        "item": "Statutory license fee (partnership, association or corporation)",
        "fee": "$300",
        "sourceUrl": "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania"
      },
      {
        "item": "Allegheny County - individual private detective license",
        "fee": "$300 (corporate $400)",
        "sourceUrl": "https://www.alleghenycounty.us/Government/Court-Related/Criminal-Records/Cost-and-Fee-Schedule"
      },
      {
        "item": "York County - filing fee (non-refundable), due at petition",
        "fee": "$55",
        "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
      },
      {
        "item": "York County - appointment fee, due when the petition is granted",
        "fee": "$200 individual / $300 partnership or corporation",
        "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 corporate surety bond to the Commonwealth (annual premium typically $50-$300, set by the surety market)",
        "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
      }
    ],
    "application": {
      "portal": "Petition filed with the Clerk of Courts in the county where the principal office will be located",
      "portalUrl": "https://www.yorkcountypa.gov/218/Private-Detectives",
      "steps": [
        "Assemble the petition: two passport photos, two fingerprint cards, two acknowledged experience certificates, and five character references from citizens who have known you at least five years",
        "File the petition with the county Clerk of Courts and pay the local filing fee (York: $55; Allegheny lists its own license fee schedule)",
        "Cooperate with the District Attorney's background investigation; fingerprints are compared against Pennsylvania State Police records",
        "Wait the statutory minimum of 10 days after filing - the court cannot issue a license sooner - and attend a hearing if the county schedules one",
        "After approval, execute and file the $10,000 corporate surety bond (York allows 30 days to post it) and pay the appointment fee",
        "Receive the certificate of license, metal badge and photographed pocket card issued by the court"
      ],
      "processingTime": "The statute mandates at least 10 days between filing and issuance; counties commonly take several weeks to a few months depending on DA review and court calendars",
      "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
    },
    "renewal": {
      "cycle": "2 years initially; renewals are handled by the Clerk of Courts, who may reissue for up to five years (York County renews for 5 years, with no mandatory waiting period)",
      "ce": "None - Pennsylvania imposes no continuing education on private detectives",
      "fee": "Statutory fee again applies ($200 individual / $300 entity) plus a new $10,000 bond; York notes fingerprints and references are not required with renewal",
      "late": "York County directs licensees to begin renewal six months before expiration",
      "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$51,200",
      "p25": "$44,840",
      "p75": "$71,830",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=PA"
    },
    "localNuance": "Pennsylvania is unique: it licenses private detectives through the county courts, not a state board. Under the Private Detective Act of 1953 you petition the Court of Common Pleas in the county of your principal office, the District Attorney investigates you, a judge issues the license, and every county sets its own filing fees and hearing practice - Allegheny charges $300 for an individual license and $400 corporate, while York splits a $55 filing fee from a $200 appointment fee. A license issued in one county covers the business premises named in it, so multi-county firms obtain licenses in each county where they operate offices.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026; licensing continues to operate under the Private Detective Act of 1953 as amended, administered county by county.",
        "sourceUrl": "https://www.yorkcountypa.gov/218/Private-Detectives"
      }
    ],
    "stateFaqs": [
      {
        "q": "Is there an exam to become a Pennsylvania private investigator?",
        "a": "No. Pennsylvania's Private Detective Act has no written exam. Qualification is decided by a county judge based on age (25), citizenship, three years of qualifying experience verified by two certificates, five character references, background checks, and the $10,000 bond."
      },
      {
        "q": "Where do I apply for a Pennsylvania PI license?",
        "a": "With the Clerk of Courts in the county where your principal office will be located - there is no state application. Allegheny County lists its private detective license fees on its Department of Court Records fee schedule, and York County posts its own petition process and costs."
      },
      {
        "q": "What does a Pennsylvania private detective license cost?",
        "a": "The statute sets $200 for individuals and $300 for entities, but counties add their own charges: Allegheny charges $300 individual ($400 corporate) plus $37.50 for PSP fingerprint processing, and York charges a $55 filing fee, $17.50 per fingerprint card, a $200 appointment fee and a $20 badge fee. The $10,000 surety bond premium is separate."
      },
      {
        "q": "How long does the Pennsylvania licensing process take?",
        "a": "The court must wait at least 10 days after filing before issuing any license, and the District Attorney's investigation and any hearing add time - plan on several weeks to a few months depending on the county. The initial license runs two years; clerks may reissue renewals for up to five years."
      }
    ],
    "sources": [
      {
        "label": "York County, PA - Private Detectives (process, fees, bond)",
        "url": "https://www.yorkcountypa.gov/218/Private-Detectives",
        "checkedOn": "2026-10"
      },
      {
        "label": "Allegheny County, PA - Court Records cost and fee schedule",
        "url": "https://www.alleghenycounty.us/Government/Court-Related/Criminal-Records/Cost-and-Fee-Schedule",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator - PA Private Investigator License Cost (statutory fees)",
        "url": "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - How to Become a Private Investigator in PA (Act of 1953 detail)",
        "url": "https://legalclarity.org/how-to-become-a-private-investigator-in-pa-licensing-steps",
        "checkedOn": "2026-10"
      }
    ]
  },
  "RI": {
    "agency": "Local licensing authority (city or town) under the Rhode Island Private Detective Act, Gen. Laws Chapter 5-5 - Rhode Island has no state PI licensing board",
    "agencyUrl": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/",
    "experience": "At least five years of experience as an investigator or as a police officer with a state, county or municipal department or a US, state, county or municipal investigative agency; or five years employed by a private detective as an investigator; or a criminal justice degree from an accredited college or university; or substantively equivalent training or experience (Gen. Laws 5-5-3).",
    "eligibility": {
      "citizenship": "US citizen or resident alien",
      "education": "A criminal justice degree from an accredited college or university can substitute for the five-year experience paths",
      "other": "Good moral character; no felony conviction in any jurisdiction; no prior PI license revoked or application denied by any licensing authority; not declared incompetent by a court unless competency restored; no habitual drunkenness or narcotics addiction or dependence"
    },
    "background": {
      "method": "Set by each city or town licensing authority; the statute itself disqualifies anyone convicted of a felony in any jurisdiction",
      "fee": "Not set statewide - local authorities determine any background check charges",
      "disqualifiers": "Felony conviction; prior revocation or denial of a PI license or registration; court-declared incompetency (unless restored); habitual drunkenness or narcotics addiction or dependence",
      "sourceUrl": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3"
    },
    "fees": [
      {
        "item": "Surety bond (individual licensee, required by statute)",
        "fee": "$5,000 bond with a surety company authorized to do business in Rhode Island",
        "sourceUrl": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-14/"
      },
      {
        "item": "Application fee (set locally; most jurisdictions charge about $150)",
        "fee": "$150",
        "sourceUrl": "https://privateinvestigatoredu.org/rhode-island/"
      },
      {
        "item": "Annual renewal (set locally; typically $150)",
        "fee": "$150",
        "sourceUrl": "https://privateinvestigatoredu.org/rhode-island/"
      }
    ],
    "application": {
      "portal": "Direct application to the city or town where the applicant will work (town council, or mayor and city council / license bureau)",
      "portalUrl": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/",
      "steps": [
        "Identify the local licensing authority for the city or town where you will operate",
        "Document one of the qualifying experience or education paths from Section 5-5-3",
        "Submit the local application with proof of citizenship or resident alien status and character evidence",
        "Arrange the $5,000 surety bond with a surety company authorized in Rhode Island, conditioned for the benefit of persons injured by willful, malicious or wrongful acts",
        "Pay the local application fee and complete any local background requirements",
        "Renew annually with the local authority at least 30 days before expiration"
      ],
      "processingTime": "Set locally; the state statute does not publish a processing timeline",
      "sourceUrl": "https://privateinvestigatoredu.org/rhode-island/"
    },
    "renewal": {
      "cycle": "1 year",
      "ce": "No continuing education requirement is established in Chapter 5-5",
      "fee": "About $150, set by each local licensing authority",
      "late": "Renewal is due at least 30 days before the license expiration date",
      "sourceUrl": "https://legalcareerpath.com/private-investigator-rhode-island/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$54,620",
      "p25": "$39,830",
      "p75": "$79,140",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=RI"
    },
    "localNuance": "Rhode Island licenses private detectives locally, not at the state level: Chapter 5-5 defines the local licensing authority as the town councils or license boards of the several towns and the mayor and city council or license bureau of a city. This means requirements, fees and timelines vary by city or town, and employees or assistants of a licensed PI are exempt from needing their own license (a common entry path for building the five years of experience). Computer forensic specialists holding a professional certification are treated separately under the statute.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026; the Private Detective Act's core qualification provisions date to Public Laws 1987, chapter 479.",
        "sourceUrl": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3"
      }
    ],
    "stateFaqs": [
      {
        "q": "Who issues private detective licenses in Rhode Island?",
        "a": "Your city or town, not the state. Chapter 5-5 of the Rhode Island General Laws defines the local licensing authority as town councils and license boards for towns, and the mayor and city council or license bureau for cities, so the process and fees differ across Rhode Island's 39 municipalities."
      },
      {
        "q": "Is there an exam for Rhode Island private detectives?",
        "a": "No. The Private Detective Act requires qualification by experience or education, good moral character and the absence of disqualifying history - there is no written examination in the statute."
      },
      {
        "q": "Can a criminal justice degree replace experience in Rhode Island?",
        "a": "Yes. Section 5-5-3 accepts a degree in criminal justice from an accredited college or university as an alternative to five years as an investigator or police officer, five years employed by a private detective, or substantively equivalent training or experience."
      },
      {
        "q": "What bonding and fees does Rhode Island require?",
        "a": "State statute requires every licensee to deliver a $5,000 surety bond to the local licensing authority, conditioned for the benefit of persons injured by the licensee's willful, malicious or wrongful acts. Application and renewal fees are set locally, typically about $150 each, with renewal due at least 30 days before expiration."
      }
    ],
    "sources": [
      {
        "label": "RI Gen. Laws 5-5-2 - Definitions (local licensing authority)",
        "url": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/",
        "checkedOn": "2026-10"
      },
      {
        "label": "RI Gen. Laws 5-5-3 - License qualifications",
        "url": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3",
        "checkedOn": "2026-10"
      },
      {
        "label": "RI Gen. Laws 5-5-14 - Bonding requirements",
        "url": "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-14/",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrivateInvestigatorEdu.org - How to Become a Private Investigator in Rhode Island",
        "url": "https://privateinvestigatoredu.org/rhode-island/",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalCareerPath - How to Become a Private Investigator in Rhode Island",
        "url": "https://legalcareerpath.com/private-investigator-rhode-island/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "SC": {
    "agency": "South Carolina Law Enforcement Division (SLED), Regulatory Services",
    "agencyUrl": "https://www.sled.sc.gov",
    "experience": "At least three years of experience as a private investigator employed by a licensed private investigation agency, as an investigator for a law firm, government agency, private corporation, or nonprofit organization, or as a sworn officer with a federal, state, county, or municipal law enforcement agency (S.C. Code Ann. Section 40-18-70(E)). A criminal justice degree does not substitute for the three years under the statute.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizen",
      "education": "High school diploma or equivalent",
      "other": "No felony or crime of moral turpitude conviction, good moral character, no unlawful drug use, honorable military discharge if applicable. Employee registration (working under a licensed agency) requires age 18 instead of 21 and has no minimum experience."
    },
    "background": {
      "method": "Two complete sets of fingerprint cards submitted with the application; SLED conducts a background investigation",
      "fee": "Included in license fee; no separate fingerprint fee published",
      "disqualifiers": "Felony convictions and crimes of moral turpitude are disqualifying",
      "sourceUrl": "https://www.scstatehouse.gov/code/t40c018.php"
    },
    "fees": [
      {
        "item": "Private investigation business license (annual)",
        "fee": "$350",
        "sourceUrl": "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf"
      },
      {
        "item": "Private investigator employee registration (annual)",
        "fee": "$350",
        "sourceUrl": "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408"
      },
      {
        "item": "Replacement registration card",
        "fee": "$20",
        "sourceUrl": "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 bond posted with SLED (about $100-$300 annual premium)",
        "sourceUrl": "https://www.scstatehouse.gov/code/t40c018.php"
      }
    ],
    "application": {
      "portal": "SLED paper application by mail",
      "portalUrl": "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf",
      "steps": [
        "Complete the SLED application and have it signed and notarized (partnerships require an application from every partner; corporations designate a qualifying officer in writing).",
        "Attach two complete fingerprint card sets, a recent digital photograph, DD-214 if you served in the military, notarized Form PD/PS-9, a Disclosure of Principal(s) form, and a judgment statement affidavit or clerk-of-court certification.",
        "Post a $10,000 surety bond with SLED on the approved form and include a sample client contract for SLED approval.",
        "Pay the $350 annual license fee by cashier's check, money order, or company check payable to SLED; personal checks and cash are not accepted.",
        "Mail the packet to SLED Regulatory Services, P.O. Box 21398, Columbia, SC 29221-1398. SLED does not publish a processing timeline.",
        "No written licensing examination is required in South Carolina."
      ],
      "processingTime": "Not published; SLED reviews competency, integrity, and qualifications after receiving the complete packet",
      "sourceUrl": "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf"
    },
    "renewal": {
      "cycle": "1 year",
      "ce": "6 hours annually, or 12 hours in every 24-month period",
      "fee": "$350",
      "late": "Renewal applications must reach SLED 30 to 60 days before expiration; a lapsed license invalidates the holder's authority to work",
      "sourceUrl": "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$51,530",
      "p25": "$40,140",
      "p75": "$73,430",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=SC"
    },
    "localNuance": "SLED issues two separate credentials: a PI employee registration for people working under a licensed agency (age 18+, no experience minimum) and a PI business license for agency owners (age 21+, three years of experience). Licensed investigators must use SLED-approved written client contracts describing services, fees, and report delivery, and keep contract records.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "House Bill 4141, introduced March 5, 2025, would add three years of experience as an investigator or in a role with investigation duties in the US Armed Forces to the qualifying experience list under Section 40-18-70(E). The bill remained in committee as of the 2025-2026 session.",
        "sourceUrl": "https://www.scstatehouse.gov/sess126_2025-2026/bills/4141.htm"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does South Carolina require a private investigator exam?",
        "a": "No. SLED does not administer a written licensing examination for private investigators or investigation businesses. Licensure turns on the experience, background, bond, and application requirements in S.C. Code Section 40-18-70."
      },
      {
        "q": "How much does a South Carolina PI license cost?",
        "a": "Both the private investigation business license and the PI employee registration cost $350 per year, non-refundable. Applicants must also post a $10,000 surety bond with SLED, which typically costs about $100 to $300 per year in premium."
      },
      {
        "q": "What experience do I need to open my own PI agency in South Carolina?",
        "a": "Three years of qualifying investigative experience: employment by a licensed PI agency, investigative work for a law firm, government agency, corporation, or nonprofit, or service as a sworn law enforcement officer. The statute provides no education-based substitute for the three years."
      },
      {
        "q": "Is continuing education mandatory for South Carolina private investigators?",
        "a": "Yes. Renewal packets must include documentation of 6 hours of continuing education annually, or 12 hours of credit in every 24-month period, per SLED's renewal requirements."
      },
      {
        "q": "Can I work as an investigator before my registration is approved?",
        "a": "While a registration application is pending, a person may not perform investigative duties unless accompanied by a registered private investigator. Registration certificates expire when employment ends and are not transferable between employers."
      }
    ],
    "sources": [
      {
        "label": "SLED -- Private Investigation Business License Renewal Requirements (PDF)",
        "url": "https://www.sled.sc.gov/forms/PI/pilicrenewal.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "South Carolina Code Title 40, Chapter 18 -- Private Security and Investigation Agencies",
        "url": "https://www.scstatehouse.gov/code/t40c018.php",
        "checkedOn": "2026-10"
      },
      {
        "label": "SC Code of Regulations 73-408 -- License and Registration Period; Fees",
        "url": "https://regulations.justia.com/states/south-carolina/chapter-73/article-9/section-73-408",
        "checkedOn": "2026-10"
      },
      {
        "label": "South Carolina General Assembly -- H.4141 (2025-2026)",
        "url": "https://www.scstatehouse.gov/sess126_2025-2026/bills/4141.htm",
        "checkedOn": "2026-10"
      }
    ]
  },
  "TN": {
    "agency": "Tennessee Department of Commerce and Insurance -- Private Investigation Program (Private Investigation and Polygraph Commission rules)",
    "agencyUrl": "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html",
    "exam": {
      "vendor": "PSI",
      "vendorUrl": "https://test-takers.psiexams.com/tnpi",
      "parts": [
        {
          "name": "Tennessee laws and rules",
          "questions": "60 scored items",
          "time": "Shared 120-minute total",
          "pass": "70% overall"
        },
        {
          "name": "Practical knowledge",
          "questions": "40 scored items",
          "time": "Shared 120-minute total",
          "pass": "70% overall"
        }
      ],
      "fee": "$140",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.tn.gov/commerce/regboards/pi/license/psi.html",
      "sourceNote": "Tennessee Private Investigator and Polygraph Examinations Candidate Information Bulletin; exam is closed-book and computer-administered at PSI centers"
    },
    "experience": "2,000 hours of compensated, verifiable investigative experience, or one year of applicable related experience or education in a related area of study approved by the Commissioner (T.C.A. Section 62-26-206). Applicants without the hours may apply for apprentice status limited to 6 months, sponsored by a licensed investigative company.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "US citizen or resident alien",
      "education": "No fixed degree requirement; related education can substitute for part of the experience requirement",
      "other": "Good moral character; no court declaration of mental incompetence; no habitual drunkenness or narcotics addiction or dependence; every PI must be affiliated with a licensed Tennessee investigations company or hold a company license"
    },
    "background": {
      "method": "Fingerprint cards or electronic prints submitted for TBI and FBI criminal history processing",
      "fee": "Paid to the fingerprint vendor and TBI/FBI; amount not set by TDCI",
      "disqualifiers": "Statutory character and fitness grounds under T.C.A. Title 62, Chapter 26",
      "sourceUrl": "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html"
    },
    "fees": [
      {
        "item": "Application (private investigator)",
        "fee": "$150",
        "sourceUrl": "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11"
      },
      {
        "item": "Private investigator license (initial)",
        "fee": "$100",
        "sourceUrl": "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11"
      },
      {
        "item": "Examination (PSI)",
        "fee": "$140",
        "sourceUrl": "https://www.tn.gov/commerce/regboards/pi/license/psi.html"
      },
      {
        "item": "Investigation company application / license",
        "fee": "$250-$1,000 application and $125-$500 license depending on number of investigators (sole practitioner through over five employees)",
        "sourceUrl": "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11"
      }
    ],
    "application": {
      "portal": "TDCI licensing (CORE portal); PSI examination registration online",
      "portalUrl": "https://www.tn.gov/commerce/regboards/pi/license/psi.html",
      "steps": [
        "Meet the age, character, and experience requirements and secure affiliation with a licensed investigations company, or apply for your own company license.",
        "Register with PSI (online at test-takers.psiexams.com/tnpi or by phone at 855-746-8173) and pay the $140 exam fee; the fee is forfeited if you do not test within one year.",
        "Pass the 100-question Private Investigator examination at a PSI test center.",
        "Submit fingerprint cards for TBI and FBI processing.",
        "File the application through TDCI and pay the $150 application fee and $100 license fee.",
        "Applicants without 2,000 hours may seek 6-month apprentice status sponsored by a licensed company."
      ],
      "processingTime": "Not published; budget several weeks for TBI/FBI processing",
      "sourceUrl": "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "12 hours of continuing education per two-year renewal period",
      "fee": "$100",
      "late": "Licenses may be renewed late within the grace period allowed by rule, with penalty fees added",
      "sourceUrl": "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$49,360",
      "p25": "$38,520",
      "p75": "$99,170",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=TN"
    },
    "localNuance": "Tennessee has no independent individual license: every private investigator must be employed by or be the qualifying person of a licensed investigations company. Company application and license fees scale with headcount ($250 application/$125 license for a sole practitioner up to $1,000/$500 for over five investigators).",
    "recentChanges": [
      {
        "year": 2026,
        "change": "Tennessee ceased regulating polygraph examiners as of July 1, 2026; private investigator licensing under T.C.A. Title 62, Chapter 26 and Rule Chapter 1175-01 continues through TDCI.",
        "sourceUrl": "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview"
      },
      {
        "year": 2021,
        "change": "Since July 1, 2021 the private investigation licensing program has been administered by the Department of Commerce and Insurance through its Detection Services Licensing Program rather than a standalone nine-member commission.",
        "sourceUrl": "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview"
      }
    ],
    "stateFaqs": [
      {
        "q": "What is on the Tennessee private investigator exam?",
        "a": "The PSI-administered exam has 100 scored questions in 120 minutes with a 70% passing score. About 60% covers Tennessee laws and rules (Title 62, Chapter 26 and Rule Chapter 1175-01) and 40% covers practical investigative knowledge."
      },
      {
        "q": "How much does a Tennessee PI license cost in total?",
        "a": "State-controlled fees are $150 for the application, $100 for the initial license, and $140 for the PSI exam, or $390 plus fingerprinting costs paid separately to the vendor and TBI/FBI. Renewal is $100 every two years."
      },
      {
        "q": "Can I become a Tennessee PI without 2,000 hours of experience?",
        "a": "The statute accepts one year of applicable related experience or approved related education as an alternative to 2,000 compensated hours. If you have neither, a licensed company can sponsor you for apprentice status, which is limited to 6 months."
      },
      {
        "q": "Do I need my own company license to work as a Tennessee PI?",
        "a": "No, but you must be affiliated with a licensed investigations company. Working independently requires an investigations company license, with fees scaled to the number of investigators employed ($250-$1,000 application, $125-$500 license)."
      },
      {
        "q": "What continuing education does Tennessee require?",
        "a": "Licensees complete 12 hours of continuing education in each two-year renewal cycle, and the biennial renewal fee is $100."
      }
    ],
    "sources": [
      {
        "label": "TDCI -- Private Investigation: Get a License",
        "url": "https://www.tn.gov/commerce/regboards/pi/licensee-applicant-resources/get-a-license.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "TDCI -- Tennessee Private Investigator and Polygraph Examinations Candidate Information Bulletin (PSI)",
        "url": "https://www.tn.gov/commerce/regboards/pi/license/psi.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Tennessee Rule 1175-01-.11 -- License Fees",
        "url": "https://regulations.justia.com/states/tennessee/title-1175/chapter-1175-01/section-1175-01-11",
        "checkedOn": "2026-10"
      },
      {
        "label": "T.C.A. Section 62-26-206 experience and examination requirements (2009 amendment text)",
        "url": "https://thepigroup.com/tennessee_private_investigator_license.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Tennessee PI program and exam blueprint overview",
        "url": "https://open-exam-prep.com/study-guides/tn-private-investigator/exam-overview-licensure/tn-pi-licensure-overview",
        "checkedOn": "2026-10"
      }
    ]
  },
  "TX": {
    "agency": "Texas Department of Public Safety -- Private Security Program (Private Security Bureau)",
    "agencyUrl": "https://www.dps.texas.gov/node/610",
    "exam": {
      "vendor": "Texas DPS Private Security Program (state-written exam)",
      "vendorUrl": "https://www.dps.texas.gov/node/610",
      "parts": [
        {
          "name": "Written examination on the Private Security Act and Texas Administrative Code Chapter 35",
          "questions": "Question count not published",
          "time": "Not published",
          "pass": "Not published"
        }
      ],
      "fee": null,
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.dps.texas.gov/node/610",
      "sourceNote": "The exam is open-book: applicants must bring a government-issued ID, a printed copy of the statutes and rules, and two sharpened pencils; the department does not supply the statutes at the test site"
    },
    "experience": "Company representatives (qualifying managers) need one of: three consecutive years of investigation-related experience; a bachelor's degree in criminal justice or a related field; a bachelor's degree plus 12 months of investigation-related experience; an associate degree in criminal justice plus 24 months of investigation-related experience; or a specialized 200-hour university investigations course endorsed by the school's criminal justice department. Other education and experience combinations may be substituted at the department's discretion.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizenship or legal residency",
      "education": "See experience paths",
      "other": "Individual investigators under Occ. Code Section 1702.113 must have no felony conviction, no Class A (or equivalent) misdemeanor, no Class B misdemeanor within the past 5 years, no pending felony or Class A misdemeanor charge, no dishonorable discharge, and no sex-offender registration requirement"
    },
    "background": {
      "method": "Fingerprint-based background check submitted through the DPS application process",
      "fee": "Paid with the application per the current DPS fee schedule",
      "disqualifiers": "Felony convictions, Class A misdemeanors, recent Class B misdemeanors, and sex-offender registration are disqualifying under Occ. Code Section 1702.113",
      "sourceUrl": "https://www.tali.org/texas-licensing-reqs/"
    },
    "fees": [
      {
        "item": "Subscription fee (individual application or renewal)",
        "fee": "$2-$3 depending on the base fee",
        "sourceUrl": "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132"
      },
      {
        "item": "Subscription fee (company application or renewal)",
        "fee": "$7-$16 depending on the base fee",
        "sourceUrl": "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132"
      }
    ],
    "application": {
      "portal": "Texas DPS Private Security Online Licensing System (TOPS self-service)",
      "portalUrl": "https://tops.portal.texas.gov/psp-self-service/login/auth",
      "steps": [
        "Decide your path: work as a registered individual investigator for a licensed investigations company, or qualify as the company representative of your own agency.",
        "If qualifying a company, document the required experience or education and register to take the DPS company representative examination.",
        "Study the Private Security Act (Occ. Code Chapter 1702) and Administrative Code Chapter 35, print them, and bring the printed copy plus ID and pencils to the open-book exam.",
        "Submit the application, fingerprint-based background check, and fees through the DPS online portal.",
        "Companies must show proof of liability insurance before approval.",
        "There is no standalone independent individual PI license: individuals must be affiliated with a licensed company."
      ],
      "processingTime": "Not published; DPS reviews complete applications in the order received",
      "sourceUrl": "https://www.dps.texas.gov/node/610"
    },
    "renewal": {
      "cycle": "Individual investigator licenses renew every 2 years; company licenses renew annually",
      "ce": null,
      "fee": "Per the current DPS fee schedule",
      "late": null,
      "sourceUrl": "https://www.dps.texas.gov/node/610"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$51,810",
      "p25": "$36,810",
      "p75": "$72,660",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=TX"
    },
    "localNuance": "Texas has no independent individual PI license. Everyone performing investigative work must be an owner of, or registered employee affiliated with, an investigations company licensed under Occupations Code Chapter 1702. Only the company representative (qualifying manager) takes the open-book DPS exam; registered employees do not.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.dps.texas.gov/node/610"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do all Texas private investigators take an exam?",
        "a": "No. Only each company representative (the qualifying manager) must pass the DPS written examination on the Private Security Act and Texas Administrative Code Chapter 35. The exam is open-book -- applicants bring their own printed copy of the statutes and rules -- and every company representative must pass it."
      },
      {
        "q": "Can I work as an independent private investigator in Texas?",
        "a": "No. Texas licenses investigations companies rather than independent individuals. You must either hold or work for a licensed investigations company as a registered individual investigator."
      },
      {
        "q": "What qualifies someone as a Texas investigations company manager?",
        "a": "Three consecutive years of investigation-related experience, or qualifying education: a criminal justice bachelor's degree, a bachelor's degree plus 12 months of experience, an associate degree in criminal justice plus 24 months, or a 200-hour university investigations course endorsed by the school's criminal justice department. The department may approve other combinations."
      },
      {
        "q": "How often do Texas PI credentials renew?",
        "a": "Individual investigator licenses renew every two years, while company licenses renew annually by the last day of the month of issuance, each with fees set in the DPS fee schedule."
      },
      {
        "q": "Does Texas recognize other states' PI licenses?",
        "a": "Texas has no reciprocity agreements for private investigators. However, investigative experience lawfully obtained in another state may count toward Texas experience qualifications when you apply."
      }
    ],
    "sources": [
      {
        "label": "Texas DPS -- Company Representative Experience and Examination Information",
        "url": "https://www.dps.texas.gov/node/610",
        "checkedOn": "2026-10"
      },
      {
        "label": "Texas Administrative Code 35.132 -- Subscription Fees",
        "url": "https://txrules.elaws.us/rule/title37_chapter35_sec.35.132",
        "checkedOn": "2026-10"
      },
      {
        "label": "Texas Association of Licensed Investigators -- Texas Licensing Requirements (Occ. Code Ch. 1702 summary)",
        "url": "https://www.tali.org/texas-licensing-reqs/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Harbor Compliance -- Texas Private Investigator License",
        "url": "https://www.harborcompliance.com/texas-private-investigator-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "UT": {
    "agency": "Utah Department of Public Safety -- Bureau of Criminal Identification (BCI), Private Investigator Licensing",
    "agencyUrl": "https://bci.utah.gov/",
    "experience": "Registrant license: 2,000 hours of documented investigative experience verified on the BCI Verification of Investigative Experience form (applicants who held a Utah registrant or apprentice license on or before May 1, 2010 qualify with 2,000 hours; new agency applicants document 10,000 hours per the BCI application). Apprentice license: no experience requirement; apprentices work under direct supervision of a licensed agency.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "No explicit citizenship requirement published; applicants must be of good moral character",
      "education": "No formal education requirement",
      "other": "Age 18 for apprentice, 21 for registrant and agency licenses. Disqualifiers under Utah Code 53-9-108 include felony convictions, violent crime, dishonesty or fraud, moral turpitude within the past 10 years (unless expunged), weapons and protected-records offenses, current probation or parole, and outstanding warrants"
    },
    "background": {
      "method": "Fingerprint card submitted with the application; BCI offers fingerprint card services at its Taylorsville office",
      "fee": "$15 per set of BCI fingerprint cards, increased to $20 effective July 1, 2025",
      "disqualifiers": "Felony, violent crime, dishonesty/fraud, and moral-turpitude convictions under Utah Code 53-9-108; the Private Investigator Hearing and Licensure Board reviews each application",
      "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah"
    },
    "fees": [
      {
        "item": "Application (registrant or apprentice license)",
        "fee": "$142 (includes the FBI fee)",
        "sourceUrl": "https://www.suretybonds.com/guide/utah/private-investigator-license"
      },
      {
        "item": "Application (agency license)",
        "fee": "$242 (licenses one agency and its owner or primary investigator)",
        "sourceUrl": "https://www.einvestigator.com/how-to-become-a-licensed-private-investigator-in-utah"
      },
      {
        "item": "Renewal (registrant or apprentice)",
        "fee": "$65",
        "sourceUrl": "https://www.suretybonds.com/guide/utah/private-investigator-license"
      },
      {
        "item": "Renewal (agency)",
        "fee": "$115",
        "sourceUrl": "https://www.suretybonds.com/guide/utah/private-investigator-license"
      },
      {
        "item": "Surety bond (registrant and apprentice)",
        "fee": "$10,000 bond under Utah Code 53-9-110 (about $100 annual premium)",
        "sourceUrl": "https://bci.utah.gov/"
      },
      {
        "item": "Liability insurance (agency)",
        "fee": "At least $500,000 coverage under Utah Code 53-9-109",
        "sourceUrl": "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7"
      }
    ],
    "application": {
      "portal": "BCI paper application submitted in person or by mail to the Bureau of Criminal Identification, 3888 West 5400 South, Taylorsville, UT 84129",
      "portalUrl": "https://bci.utah.gov/",
      "steps": [
        "Choose your tier: apprentice (no experience, supervised), registrant (2,000 hours), or agency (10,000 hours plus insurance).",
        "Complete the BCI Application for Private Investigator License and attach a 2-inch by 2-inch passport-quality photo taken within 90 days and a photocopy of your driver license or state ID.",
        "Submit one completed fingerprint card (BCI charges $20 for card services as of July 2025) and the Verification of Investigative Experience form if applying as a registrant.",
        "Attach a $10,000 surety bond (registrant and apprentice) or a certificate of $500,000 liability insurance and workers' compensation coverage if applicable (agency).",
        "Pay the application fee by cash, check, money order, or credit card; fees are non-refundable.",
        "BCI conducts a background investigation and the Private Investigator Hearing and Licensure Board, which meets quarterly, reviews registrant and agency applications; Utah does not require a licensing examination."
      ],
      "processingTime": "Up to 90 days for registrant and agency applications, depending on the board's quarterly meeting schedule; apprentice applications without disqualifying history are typically issued within 5 business days",
      "sourceUrl": "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": null,
      "fee": "$65 registrant or apprentice; $115 agency",
      "late": "A license expired more than 90 days cannot be renewed; the holder must reapply and meet all initial requirements",
      "sourceUrl": "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7"
    },
    "reciprocity": {
      "rule": "Utah grants no general reciprocity for out-of-state PI licenses, but exemptions from licensure apply to federal investigators working within their duties and to military spouses who hold a current, valid PI license from another state and are in good standing.",
      "agreements": null,
      "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$57,910",
      "p25": "$48,460",
      "p75": "$61,090",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=UT"
    },
    "localNuance": "Utah licenses PIs through the Department of Public Safety's Bureau of Criminal Identification (not DOPL) in three tiers: apprentice, registrant, and agency. Registrant and agency files go to the Private Investigator Hearing and Licensure Board, which meets once per quarter, so filing just before a board meeting can shorten the wait. Applicants appear in person at the Taylorsville BCI office.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "BCI raised its fingerprint card service fee from $15 to $20 effective July 1, 2025.",
        "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah"
      },
      {
        "year": 2026,
        "change": "Utah law adds a 16-hour continuing education requirement for private investigator license renewals beginning May 7, 2027.",
        "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Utah require an exam to become a private investigator?",
        "a": "No. Utah does not administer a licensing examination. Licensure is based on documented experience hours, fingerprints, the $10,000 surety bond (registrant and apprentice) or $500,000 liability insurance (agency), and review by the Private Investigator Hearing and Licensure Board."
      },
      {
        "q": "Who regulates private investigators in Utah?",
        "a": "The Bureau of Criminal Identification (BCI) within the Utah Department of Public Safety handles PI licensing, under Utah Code Title 53, Chapter 9 and Administrative Rule R722-330. Applications are handled at 3888 West 5400 South in Taylorsville."
      },
      {
        "q": "What are the experience tiers in Utah?",
        "a": "Apprentices need no experience and work under direct supervision of a licensed agency; registrants must document 2,000 hours of investigative experience; agency applicants document 10,000 hours per the BCI application and carry at least $500,000 in liability insurance."
      },
      {
        "q": "How long does Utah PI licensing take?",
        "a": "Registrant and agency applications take up to 90 days because the review board meets quarterly. Apprentice applications with no disqualifying criminal history are typically issued within 5 business days of a complete application."
      },
      {
        "q": "What happens if my Utah PI license lapses?",
        "a": "If your license has been expired for more than 90 days you cannot renew it; you must reapply as a new applicant and meet every initial requirement again. Working on a lapsed license is treated as working unlicensed, a class A misdemeanor."
      }
    ],
    "sources": [
      {
        "label": "Utah DPS BCI -- Application for Private Investigator License (PDF)",
        "url": "https://demosite.utah.gov/dps-criminal/wp-content/uploads/sites/15/2015/01/Application-for-Private-Investigator-License.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Utah DPS BCI -- Private Investigator Licensing program site",
        "url": "https://bci.utah.gov/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Utah Admin Code R722-330-7 -- Renewal of a License",
        "url": "https://regulations.justia.com/states/utah/public-safety/title-r722/rule-r722-330/section-r722-330-7",
        "checkedOn": "2026-10"
      },
      {
        "label": "SuretyBonds.com -- Utah Private Investigator License Guide (fees)",
        "url": "https://www.suretybonds.com/guide/utah/private-investigator-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrivateInvestigatorEdu.org -- Utah PI licensing process and board review",
        "url": "https://privateinvestigatoredu.org/utah/",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity -- Utah PI licensing, exemptions, and fee administration",
        "url": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-utah",
        "checkedOn": "2026-10"
      }
    ]
  },
  "VT": {
    "agency": "Vermont Office of Professional Regulation (Secretary of State) -- Private Investigative and Security Services",
    "agencyUrl": "https://sos.vermont.gov/private-investigative-security-services/",
    "exam": {
      "vendor": "Vermont Office of Professional Regulation (state exam)",
      "vendorUrl": "https://sos.vermont.gov/private-investigative-security-services/",
      "parts": [
        {
          "name": "Vermont PI and security licensing law, public records law, FCRA, and general investigative knowledge",
          "questions": "Question count not published",
          "time": "Not published",
          "pass": "Not published"
        }
      ],
      "fee": null,
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf",
      "sourceNote": "26 V.S.A. Section 3173(a)(2) conditions licensure on passing the rule-required examination; the exam covers 1 V.S.A. Sections 310-320 (public records), the Fair Credit Reporting Act, 26 V.S.A. Sections 3151-3183, and the administrative rules"
    },
    "experience": "Independent practice (qualifying agent or sole proprietor) requires at least two years of appropriate investigative experience as determined by the Director -- for example, regular employment as a licensed PI in another state, work for a licensed agency in this or another state, or service as a sworn member of a federal, state, or municipal law enforcement agency (26 V.S.A. Section 3173(c)). Registered employees of a licensed agency have no minimum experience.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not specified in statute; character, integrity, and reputation are reviewed",
      "education": "Not specified in statute",
      "other": "The Director may deny licensure for failure to provide required information, failure to meet the high character standard, or unprofessional conduct under 26 V.S.A. Section 3181"
    },
    "background": {
      "method": "Fingerprinting and a Vermont Criminal Information Center background check completed through the Office of Professional Regulation",
      "fee": "Amount set by OPR and vendors; not published in statute",
      "disqualifiers": "Denial based on failure to meet the high standard of character, integrity, and reputation, or unprofessional conduct",
      "sourceUrl": "https://privateinvestigatoredu.org/?p=791"
    },
    "fees": [
      {
        "item": "Application and renewal fees",
        "fee": "Set on the OPR fee schedule; amounts differ by unarmed/armed registration and license tier and are published on the OPR website",
        "sourceUrl": "https://sos.vermont.gov/private-investigative-security-services/"
      }
    ],
    "application": {
      "portal": "OPR online licensing services",
      "portalUrl": "https://sos.vermont.gov/private-investigative-security-services/",
      "steps": [
        "Choose your credential: registration as an employee of a licensed agency (no exam) or licensure as a qualifying agent or sole proprietor (exam and two years of experience required).",
        "Submit the electronic application through OPR's online services with the application fee and a recent passport-sized photo.",
        "Have your supervisor sign the Temporary Registration/Statement of Supervisor form if entering as a registered employee.",
        "Complete fingerprinting arranged through OPR; the Vermont Criminal Information Center runs the background check.",
        "After the background check clears, registered employees receive a 60-day temporary registration to complete the required 40 hours of approved private security training.",
        "Qualifying agent and sole proprietor applicants schedule the Vermont PI examination with OPR and submit character references and experience verifications directly from the references."
      ],
      "processingTime": "Not published; temporary registration is issued for 60 days while training and review complete",
      "sourceUrl": "https://privateinvestigatoredu.org/?p=791"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "No general CE requirement; armed licensees must complete at least 6 hours of firearms requalification training and requalify on the firing range every 2 years",
      "fee": "Per the OPR fee schedule",
      "late": null,
      "sourceUrl": "https://privateinvestigatoredu.org/?p=791"
    },
    "reciprocity": {
      "rule": "Vermont issues transitory permits under Rule 4-6 to out-of-state investigators licensed in a jurisdiction that regulates PI practice, limited to continuing an investigative engagement that originated in another state; practice under a transitory permit may not exceed 30 days in any calendar year.",
      "agreements": null,
      "sourceUrl": "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$67,910",
      "p25": "$44,640",
      "p75": "$76,960",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=VT"
    },
    "localNuance": "Vermont splits its credentials two ways: a registration for employees of licensed agencies (no exam, 40 hours of approved training) and a full license for qualifying agents and sole proprietors (exam plus two years of investigative experience under 26 V.S.A. Section 3173). Armed status requires a separate FBI fingerprint check, firearms verification forms, and biennial requalification.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.vermont.gov/private-investigative-security-services/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Vermont require an exam for all private investigators?",
        "a": "No. Only applicants for a full license as a qualifying agent or sole proprietor must pass the OPR examination required by 26 V.S.A. Section 3173. Registered employees of a licensed agency complete 40 hours of approved training instead and take no exam."
      },
      {
        "q": "What experience is needed to run my own PI practice in Vermont?",
        "a": "At least two years of appropriate investigative experience, which can include regular employment as a licensed PI in another state, work for a licensed agency, or service as a sworn law enforcement officer."
      },
      {
        "q": "What does the Vermont PI exam cover?",
        "a": "The multiple-choice exam covers Vermont public records law (1 V.S.A. Sections 310-320), the Fair Credit Reporting Act, Vermont PI and security licensing law (26 V.S.A. Sections 3151-3183 and the administrative rules), and general investigative knowledge from study and practical experience."
      },
      {
        "q": "Can an out-of-state PI work a case in Vermont temporarily?",
        "a": "Yes. Rule 4-6 provides transitory permits for investigators licensed in another regulating jurisdiction, but only to continue an engagement that originated out of state, and the permit caps practice at 30 days per calendar year."
      },
      {
        "q": "How do Vermont PI credentials renew?",
        "a": "Registrations and licenses renew on two-year cycles through OPR. Armed investigators must also complete at least 6 hours of firearms requalification training and requalify on the range every two years, listing the course date and instructor on the renewal."
      }
    ],
    "sources": [
      {
        "label": "Vermont Administrative Rules for Private Investigators and Security Guards (OPR, PDF)",
        "url": "https://sos.vermont.gov/media/yesa1l2e/pirules.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "26 V.S.A. Section 3173 -- Private investigator licenses",
        "url": "https://law.justia.com/codes/vermont/title-26/chapter-59/section-3173",
        "checkedOn": "2026-10"
      },
      {
        "label": "Vermont OPR -- Private Investigative and Security Services program page",
        "url": "https://sos.vermont.gov/private-investigative-security-services/",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrivateInvestigatorEdu.org -- Vermont PI licensing process, exam topics, and renewals",
        "url": "https://privateinvestigatoredu.org/?p=791",
        "checkedOn": "2026-10"
      }
    ]
  },
  "VA": {
    "agency": "Virginia Department of Criminal Justice Services (DCJS) -- Private Security Services",
    "agencyUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator",
    "education": {
      "hours": "60",
      "breakdown": "02E Private Investigator Entry-Level course (60 hours) from a DCJS-certified training school; 8 hours of 02I Private Investigator In-Service training each renewal",
      "onlineAllowed": "Training schools determine delivery; DCJS certifies the schools and publishes the course list",
      "apprenticeship": "Training exemptions under 6VAC20-174-190 may waive part of entry-level training for prior private security training or qualified law enforcement officers",
      "sourceUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator"
    },
    "experience": "No investigative experience is required. Virginia uses a training-based path: complete the 60-hour DCJS-approved entry-level course and pass the fingerprint background check.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legal resident alien",
      "education": "No minimum education requirement published",
      "other": "Felony or disqualifying misdemeanor convictions (including military court martial) and active protective orders require a Criminal History Supplemental Form and may bar registration"
    },
    "background": {
      "method": "Fingerprint appointment through Fieldprint Virginia (fieldprintvirginia.com or 877-614-4364); DCJS is notified automatically",
      "fee": "$50 fingerprint processing application",
      "disqualifiers": "Felony convictions and disqualifying misdemeanors; applicants with such history must submit a Criminal History Supplemental Form",
      "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
    },
    "fees": [
      {
        "item": "Fingerprint processing application",
        "fee": "$50",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
      },
      {
        "item": "Initial registration (private investigator)",
        "fee": "$25",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
      },
      {
        "item": "Registration renewal",
        "fee": "$20",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
      },
      {
        "item": "Firearm endorsement",
        "fee": "$10 (renewed every 12 months)",
        "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
      },
      {
        "item": "Private security services business license (if opening your own firm)",
        "fee": "$555 for 1 year or $800 for 2 years, plus a $50 category fee for each additional category",
        "sourceUrl": "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/private-security/forms/private-security-services-initial-business-license-application-pss-la.pdf"
      }
    ],
    "application": {
      "portal": "DCJS Online Regulatory Licensing System",
      "portalUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/online-regulatory-licensing",
      "steps": [
        "Complete the 60-hour 02E Private Investigator Entry-Level course at a DCJS-certified training school.",
        "Apply online through the DCJS Online Regulatory Licensing System and pay the non-refundable fees; the Criminal History Processing form is part of the online initial application with a separate $50 processing fee on your invoice.",
        "Schedule and complete fingerprinting through Fieldprint Virginia; DCJS is notified automatically.",
        "To work, join a DCJS-licensed private security services business, or license your own business (with a surety bond or at least $1,000,000 general liability insurance and a licensed compliance agent).",
        "If you will have firearm access, complete the Firearms Endorsement requirements; the endorsement renews every 12 months.",
        "There is no state examination for the private investigator registration itself; eligibility rests on training completion, background check, and fees."
      ],
      "processingTime": "Not published; applications complete after training, fingerprint results, and fees clear",
      "sourceUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "8 hours of 02I Private Investigator In-Service training each renewal cycle",
      "fee": "$20 renewal plus training costs; late renewals add a reinstatement fee of 50% above the renewal fee",
      "late": "Reinstatement fee equal to 50% of the renewal fee applies after expiration",
      "sourceUrl": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$56,160",
      "p25": "$41,200",
      "p75": "$76,680",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=VA"
    },
    "localNuance": "Virginia is a training-first state: a 60-hour entry-level course replaces the experience requirements most states impose, making it one of the easiest entry paths in the country. Individual investigators hold a DCJS registration tied to a licensed private security services business; running your own firm requires a separate business license with $1,000,000 liability insurance or a surety bond.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Virginia require an exam for private investigators?",
        "a": "No state licensing exam is administered for the private investigator registration. Instead, applicants must complete the 60-hour 02E entry-level course at a DCJS-certified training school and pass the course requirements before registration is issued."
      },
      {
        "q": "How much does a Virginia PI registration cost?",
        "a": "The initial registration costs $25 and renewal costs $20, plus a $50 fingerprint processing fee. A firearm endorsement adds $10 and renews annually. Opening your own firm requires a business license of $555 for one year or $800 for two years."
      },
      {
        "q": "What training must Virginia PIs complete?",
        "a": "Initial registration requires the 60-hour 02E Private Investigator Entry-Level course. Each two-year renewal requires 8 hours of 02I in-service training, with the school submitting the roster to DCJS."
      },
      {
        "q": "Can prior law enforcement experience waive Virginia training?",
        "a": "Possibly. DCJS may grant training exemptions under 6VAC20-174-190 for applicants who completed comparable private security training or who are qualified law enforcement officers."
      },
      {
        "q": "How do I renew a Virginia PI registration?",
        "a": "Renew online through the DCJS Online Regulatory Licensing System, pay the $20 fee, and complete the 8-hour in-service course. Renewals filed after expiration incur a reinstatement fee equal to 50% of the renewal fee."
      }
    ],
    "sources": [
      {
        "label": "Virginia DCJS -- Private Investigator registration page",
        "url": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/private-investigator",
        "checkedOn": "2026-10"
      },
      {
        "label": "6VAC20-174-20 -- Fees (Virginia Administrative Code)",
        "url": "https://law.lis.virginia.gov/admincode/title6/agency20/chapter174/section20/",
        "checkedOn": "2026-10"
      },
      {
        "label": "DCJS -- Private Security Services Initial Business License Application (PDF)",
        "url": "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/private-security/forms/private-security-services-initial-business-license-application-pss-la.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Virginia Professional Investigators and Security Association -- Become a Private Investigator",
        "url": "https://vapisa.com/become-a-private-investigator",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WA": {
    "agency": "Washington State Department of Licensing (DOL) -- Private Investigator Program",
    "agencyUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf",
    "exam": {
      "vendor": "Washington State DOL (state exam)",
      "vendorUrl": "https://dol.wa.gov/sites/default/files/forms/689002.pdf",
      "parts": [
        {
          "name": "Principal qualification examination (agency owners and partners who do not qualify by experience)",
          "questions": "Question count not published",
          "time": "Not published",
          "pass": "Not published"
        }
      ],
      "fee": null,
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689002.pdf",
      "sourceNote": "Only agency principals and partners choose between the experience path and the examination path on the application; exams are given at driver licensing offices statewide. Individual investigators qualify by employer-certified training instead of a state exam."
    },
    "experience": "Agency principals and partners who do not take the exam need at least three years of experience in private investigation or a related field; a year means at least 2,000 hours of actual compensated work, substantiated by written certifications from previous employers or, failing that, from professional persons with personal professional knowledge.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or resident alien",
      "education": "No education requirement; individual applicants must complete state-specified pre-assignment training and pass the employer-certified test (WAC 308-17-300)",
      "other": "Applicants must answer legal-background questions covering license discipline and gross misdemeanor or felony convictions within the past 5 years; armed endorsement requires age 21, a Washington concealed pistol license, and CJTC firearms certification"
    },
    "background": {
      "method": "Fingerprint-based background check; fingerprints are submitted electronically through IdentoGO following DOL instructions",
      "fee": "Included in the license fee schedule",
      "disqualifiers": "Gross misdemeanor or felony convictions and prior license discipline within the past 5 years require a detailed explanation and may lead to denial",
      "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
    },
    "fees": [
      {
        "item": "New unarmed private investigator license",
        "fee": "$220",
        "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
      },
      {
        "item": "Armed endorsement",
        "fee": "$110 (in addition to the $220 new applicant fee)",
        "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
      },
      {
        "item": "Renewal",
        "fee": "$193",
        "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
      },
      {
        "item": "Late renewal",
        "fee": "$228",
        "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
      },
      {
        "item": "Agency endorsement (new agency principal)",
        "fee": "$640 unarmed or $750 armed; change of principal $150",
        "sourceUrl": "https://dor.wa.gov/sites/default/files/legacy/Docs/forms/BLS/700320.pdf"
      }
    ],
    "application": {
      "portal": "DOL online licensing (professions.dol.wa.gov) or paper form by mail",
      "portalUrl": "https://professions.dol.wa.gov",
      "steps": [
        "Decide your path: individual PI employed by a licensed agency, or agency principal qualifying by three years of experience or by examination.",
        "Individual applicants complete the pre-assignment training and pass the required test, certified by a DOL-certified trainer on the application (Form PI-689-012).",
        "Complete the fingerprint-based background check through IdentoGO.",
        "Agency principals file the Private Investigative Agency/Principal addendum with the $640 (unarmed) or $750 (armed) endorsement fee and proof of a surety bond or liability insurance.",
        "Armed applicants complete the 8-hour CJTC-certified firearms certification course and submit the certificate; the endorsement cannot issue without it.",
        "Apply online at professions.dol.wa.gov or mail the form with check or money order payable to the Department of Licensing; a printed and mailed license costs $5 extra."
      ],
      "processingTime": "Not published",
      "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
    },
    "renewal": {
      "cycle": "1 year",
      "ce": null,
      "fee": "$193 ($228 late); certified trainer endorsement renewal adds $15",
      "late": "$228 late renewal fee",
      "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$64,080",
      "p25": "$46,580",
      "p75": "$84,700",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=WA"
    },
    "localNuance": "Washington requires every PI to be employed by or be the principal of a licensed PI agency. Armed status is layered: age 21, a Washington CPL, and an 8-hour Criminal Justice Training Commission firearms certificate before DOL issues the $110 armed endorsement. Agency principals choose between 3 years (6,000+ hours) of documented compensated experience and the DOL examination given at driver licensing offices.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dol.wa.gov/sites/default/files/forms/689012.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do individual private investigators take a state exam in Washington?",
        "a": "No. Individual PIs complete state-specified pre-assignment training and pass the required test certified by a DOL-certified trainer on the application. Only agency principals and partners who cannot document three years of experience take the DOL examination."
      },
      {
        "q": "How much does a Washington PI license cost?",
        "a": "A new unarmed individual license is $220 and renews annually for $193 ($228 if late). The armed endorsement adds $110. Agency principals pay a $640 unarmed or $750 armed endorsement fee."
      },
      {
        "q": "What qualifies someone as a Washington PI agency principal?",
        "a": "Three years of experience in private investigation or a related field -- at least 2,000 compensated hours per year, substantiated by written employer certifications -- or passing the DOL examination given at driver licensing offices across the state."
      },
      {
        "q": "What does it take to carry a firearm as a Washington PI?",
        "a": "You must be at least 21, hold a Washington concealed pistol license, and complete the 8-hour firearms certification course certified by the Criminal Justice Training Commission. DOL cannot issue the armed endorsement without the CJTC certificate (RCW 18.170.040(c))."
      },
      {
        "q": "How long is a Washington PI license valid?",
        "a": "One year. Renewal costs $193 and late renewal costs $228; licenses self-print free online or cost $5 for a DOL-printed copy."
      }
    ],
    "sources": [
      {
        "label": "WA DOL -- Apply for or renew a private investigator license, Form PI-689-012 (PDF)",
        "url": "https://dol.wa.gov/sites/default/files/forms/689012.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "WA DOL -- Private Investigator License Application, Form PI-689-002 (PDF)",
        "url": "https://www.dol.wa.gov/sites/default/files/forms/689002.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "WA DOR -- Private Investigative Agency/Principal Addendum (PDF)",
        "url": "https://dor.wa.gov/sites/default/files/legacy/Docs/forms/BLS/700320.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "WA DOL -- Add a private investigator to an agency, Form PI-689-014 (PDF)",
        "url": "https://dol.wa.gov/sites/default/files/forms/689014.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator -- Washington State PI license guide (WAC 308-17-150 fee summary)",
        "url": "https://licensenavigator.ai/blog/private-investigator-washington-state-license-guide",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WV": {
    "agency": "West Virginia Secretary of State -- Licensing Section (Private Investigators and Security Guards)",
    "agencyUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf",
    "experience": "A minimum of one year of experience, education, or training, or a combination, in: relevant coursework at an accredited college or university; employment with any US government investigative agency or a state or local law enforcement agency or as a sheriff; employment by a licensed private investigative agency; service as a West Virginia magistrate; military service; or other substantially equivalent training or experience.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legally residing alien",
      "education": "Qualifying coursework or equivalent training counts toward the one-year requirement",
      "other": "Good moral character; no prior revocation or denial of a PI or security guard license; no felony conviction; no convictions for weapons offenses, receiving stolen property, burglary, aiding escape, illicit drugs, or misdemeanor domestic violence; no habitual drunkenness or narcotics dependence"
    },
    "background": {
      "method": "Fingerprinting for both state and federal background checks through the process designated by the Secretary of State",
      "fee": "$50 non-refundable criminal history background check fee",
      "disqualifiers": "Felony convictions and the enumerated misdemeanor offenses (weapons, stolen property, burglary, drugs, domestic violence) are disqualifying under WV Code 30-18",
      "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
    },
    "fees": [
      {
        "item": "Criminal history background check",
        "fee": "$50 (non-refundable)",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      },
      {
        "item": "License -- individual (2-year initial term)",
        "fee": "$100",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      },
      {
        "item": "License -- firm (2-year initial term)",
        "fee": "$200",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      },
      {
        "item": "Combined PI and security guard license",
        "fee": "$200 individual or $400 firm",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      },
      {
        "item": "Surety bond or liability insurance",
        "fee": "$5,000 surety bond on the approved form, or sufficient liability insurance as required by the Secretary of State",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      }
    ],
    "application": {
      "portal": "Paper application by mail to the WV Secretary of State, Bldg. 1, Suite 157-K, 1900 Kanawha Blvd. East, Charleston, WV 25305",
      "portalUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf",
      "steps": [
        "Complete the initial application (Form PISG_APP) -- do not staple; file one original, or two if you want a filed-stamped copy returned.",
        "Gather character references from five reputable citizens who have known you for at least five years, written specifically for the application, none related to you by blood or marriage.",
        "Attach one recent passport-size full-face photograph and complete fingerprinting for state and federal checks.",
        "Document your qualifications: a sworn notarized employer statement, transcripts or degree, or military training verification.",
        "File a $5,000 surety bond on the enclosed form or proof of sufficient liability insurance.",
        "Pay the $50 background check fee plus the $100 individual or $200 firm license fee by check or money order payable to the West Virginia Secretary of State.",
        "There is no licensing examination; approval rests on the application, references, background check, and qualifications review. Approved licensees must also register for a business license with the WV State Tax Department."
      ],
      "processingTime": "Not published",
      "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": null,
      "fee": "License fee repeats at renewal ($100 individual, $200 firm)",
      "late": null,
      "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$46,410",
      "p25": "$37,060",
      "p75": "$60,740",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=WV"
    },
    "localNuance": "The Secretary of State -- not a dedicated board -- licenses private investigators in West Virginia, and the application requires character references from five citizens who have known you for at least five years. Applicants can combine the PI and security guard licenses on one application ($200 individual / $400 firm). Out-of-state firms must attach a certificate of good standing from their home state.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does West Virginia require an exam for private investigators?",
        "a": "No. The Secretary of State issues PI licenses without a written examination. Approval is based on the one-year experience, education, or training requirement, five character references, fingerprints, the background check, and the surety bond or liability insurance."
      },
      {
        "q": "How much does a West Virginia PI license cost?",
        "a": "The non-refundable background check fee is $50, and the license fee is $100 for an individual or $200 for a firm (initial term two years). A combined private investigator and security guard license costs $200 individual or $400 firm."
      },
      {
        "q": "What experience qualifies for a West Virginia PI license?",
        "a": "One year of experience, education, or training in any qualifying area: relevant college coursework, government investigative agency or law-enforcement employment, work for a licensed PI agency, service as a West Virginia magistrate, military service, or substantially equivalent training or experience."
      },
      {
        "q": "What bond or insurance do West Virginia PIs need?",
        "a": "Applicants must file a $5,000 surety bond on the Secretary of State's approved form or submit sufficient proof of liability insurance as required by the office."
      },
      {
        "q": "Who must provide character references in West Virginia?",
        "a": "Every applicant needs references from at least five reputable citizens who have known the applicant for at least five years, written specifically for the license application, and none may be related to the applicant by blood or marriage."
      }
    ],
    "sources": [
      {
        "label": "WV Secretary of State -- Initial Application for License as a Private Investigator and/or Security Guard (PDF)",
        "url": "https://sos.wv.gov/FormSearch/Business/Private-Investigations-and-Security-Guards/pisg_app.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "WV Code of State Rules Title 153 Series 34 -- Private Investigators (bond, fees, references)",
        "url": "https://apps.sos.wv.gov/adlaw/csr/readfile.aspx?DocId=49641&Format=WORD&KeyWord=",
        "checkedOn": "2026-10"
      },
      {
        "label": "West Virginia Legislature -- SB 597 (2018) amendments to WV Code 30-18",
        "url": "https://www.wvlegislature.gov/Bill_Text_HTML/2018_SESSIONS/RS/Bills/SB597%20SUB1%20ENG.htm",
        "checkedOn": "2026-10"
      },
      {
        "label": "Harbor Compliance -- West Virginia PI licensing summary",
        "url": "https://www.harborcompliance.com/private-investigator-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WI": {
    "agency": "Wisconsin Department of Safety and Professional Services (DSPS) -- Private Detective credentialing",
    "agencyUrl": "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Default.aspx",
    "exam": {
      "vendor": "DSPS (state exam, taken online)",
      "vendorUrl": "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Exams.aspx",
      "parts": [
        {
          "name": "Wisconsin statutes and administrative code with investigative practice",
          "questions": "Question count not published",
          "time": "Not published",
          "pass": "84%"
        }
      ],
      "fee": "$127",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin",
      "sourceNote": "Online, open-book-style state law exam covering Wis. Stat. Section 440.26 and Administrative Code chapters SPS 31-35; results are valid for one year"
    },
    "experience": "Wisconsin sets no minimum experience or education hour requirement for the individual private detective license; qualification rests on the exam, background standards, and agency employment or agency licensure.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen, permanent resident, or otherwise lawfully authorized to work in the United States",
      "education": "No minimum education requirement",
      "other": "Able to read, write, and understand English; no felony convictions unless pardoned (absolute bar under Wis. Stat. Section 440.26); misdemeanor convictions substantially related to detective work can support denial; must be employed by a licensed private detective agency or license your own agency"
    },
    "background": {
      "method": "Electronic fingerprinting through Fieldprint after DSPS receives the application and Form 2687 (FBI information release); results go to the Wisconsin Department of Justice and DSPS",
      "fee": "Paid to the fingerprint vendor; amount set by vendor",
      "disqualifiers": "Felony conviction unless pardoned; substantially related misdemeanor convictions; applicants must disclose all convictions and pending charges with certified records on Form 2254",
      "sourceUrl": "https://privateinvestigatoredu.org/wisconsin/"
    },
    "fees": [
      {
        "item": "Application (private detective)",
        "fee": "$8",
        "sourceUrl": "https://privateinvestigatoredu.org/wisconsin/"
      },
      {
        "item": "State law examination",
        "fee": "$127",
        "sourceUrl": "https://privateinvestigatoredu.org/wisconsin/"
      },
      {
        "item": "Renewal",
        "fee": "$8 (total $33 if late)",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin"
      },
      {
        "item": "Employer transfer (Form 1329)",
        "fee": "$10",
        "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin"
      },
      {
        "item": "Bond or insurance",
        "fee": "$2,000 individual surety bond, or coverage under the agency's general liability policy; agencies carry at least $100,000 liability insurance or a $100,000 bond",
        "sourceUrl": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin"
      }
    ],
    "application": {
      "portal": "LicensE (Wisconsin DSPS online licensing portal)",
      "portalUrl": "https://license.wi.gov",
      "steps": [
        "Create a LicensE account and submit the Private Detective application (Form 469) with the $8 fee.",
        "Upload the FBI information release (Form 2687) with a recent head-and-shoulders photo, the convictions and pending charges form (Form 2254) with certified records if applicable, and the employer statement (Form 3038).",
        "Provide proof of financial security: a certificate of the agency's general liability coverage (Form 1482) or a $2,000 individual surety bond (Form 1483).",
        "After DSPS processes the application, schedule electronic fingerprinting with Fieldprint and complete the prints.",
        "Pay the $127 exam fee in LicensE and pass the online state law exam on Wisconsin statutes and SPS 31-35; the passing score is 84% and results are valid for one year.",
        "To operate your own firm, file the separate Private Detective Agency application (Form 456) and maintain at least $100,000 liability coverage or a $100,000 bond."
      ],
      "processingTime": "Varies by applicant; the credential issues after the application, fingerprints, employment and insurance documentation, and passing exam result all clear DSPS review",
      "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin"
    },
    "renewal": {
      "cycle": "Expires August 31 of even-numbered years",
      "ce": null,
      "fee": "$8 ($33 total if late)",
      "late": "Late renewal total is $33; DSPS runs a criminal background check at each renewal and the licensee must remain employed by a licensed agency",
      "sourceUrl": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin"
    },
    "reciprocity": {
      "rule": "Wisconsin provides reciprocal licensing provisions for qualifying service members, former service members, and their spouses under Wis. Stat. Section 440.09 and SPS 31.037; no general reciprocity for out-of-state PI licenses is published.",
      "agreements": null,
      "sourceUrl": "https://privateinvestigatoredu.org/wisconsin/"
    },
    "wages": {
      "soc": "33-9021",
      "socName": "Private Detectives and Investigators",
      "median": "$41,850",
      "p25": "$38,580",
      "p75": "$58,210",
      "national": "$51,220",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9021.00?st=WI"
    },
    "localNuance": "Wisconsin has unusually low state fees ($8 application, $8 renewal) but a demanding 84% exam pass mark and a $100,000 agency-level bond or insurance requirement. Every private detective must be employed by a licensed agency or hold their own agency license; employer changes are reported on Form 1329 with a $10 fee.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dsps.wi.gov/Pages/Professions/PrivateDetective/Default.aspx"
      }
    ],
    "stateFaqs": [
      {
        "q": "What is the Wisconsin private detective exam like?",
        "a": "DSPS administers an online state law exam covering Wis. Stat. Section 440.26 and Administrative Code chapters SPS 31 through 35 plus investigative practice. The passing score is 84%, results are valid for one year, and it can be taken from any computer -- no test center required."
      },
      {
        "q": "How much does a Wisconsin PI license cost?",
        "a": "State fees are unusually low: $8 for the application, $127 for the exam, and $8 to renew (total $33 if late). Fingerprinting and the $2,000 individual bond, if needed, are paid separately to vendors."
      },
      {
        "q": "Does Wisconsin require investigative experience?",
        "a": "No. Wisconsin imposes no minimum experience or education hours. Qualification rests on the exam, the criminal-background standards (no felonies unless pardoned), agency employment, and bond or insurance coverage."
      },
      {
        "q": "Can I work independently as a Wisconsin private detective?",
        "a": "Only if you also hold a Private Detective Agency license (Form 456) and maintain at least $100,000 in liability insurance or a $100,000 bond. Otherwise you must be employed by a licensed agency, which covers you under its policy so the individual $2,000 bond is not required."
      },
      {
        "q": "When do Wisconsin PI licenses renew?",
        "a": "All private detective credentials expire on a fixed cycle -- August 31 of even-numbered years -- regardless of when issued, with the first term prorated. Renewal costs $8, and DSPS runs a criminal background check at each renewal."
      }
    ],
    "sources": [
      {
        "label": "Wisconsin Stat. Section 440.26 -- Private detectives, investigators and security personnel",
        "url": "https://law.justia.com/codes/wisconsin/2024/chapter-440/section-440-26",
        "checkedOn": "2026-10"
      },
      {
        "label": "Wisconsin Admin Code SPS 31.02 -- Qualifications",
        "url": "https://regulations.justia.com/states/wisconsin/sps/sps-1-299/sps-30-49/chapter-sps-31/section-sps-31-02",
        "checkedOn": "2026-10"
      },
      {
        "label": "DSPS program page and Form 469 links (via PAWLI)",
        "url": "https://pawli.com/become-a-pi",
        "checkedOn": "2026-10"
      },
      {
        "label": "License Navigator -- Wisconsin PI license guide (fees, renewal dates, forms)",
        "url": "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-wisconsin",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity -- Wisconsin PI licensing, exam, and bond requirements",
        "url": "https://legalclarity.org/how-to-get-a-private-investigator-license-in-wisconsin",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrivateInvestigatorEdu.org -- Wisconsin PI licensing process",
        "url": "https://privateinvestigatoredu.org/wisconsin/",
        "checkedOn": "2026-10"
      }
    ]
  }
}
};
