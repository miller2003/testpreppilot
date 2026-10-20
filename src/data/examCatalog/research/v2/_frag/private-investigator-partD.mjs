export default {
  key: 'private-investigator',
  compiledOn: '2026-10-20',
  states: {
    NM: {
      agency: "New Mexico Regulation and Licensing Department - Private Investigations Advisory Board",
      agencyUrl: "https://www.rld.nm.gov?p=15797/",
      exam: {
        vendor: "New Mexico RLD / Private Investigations Advisory Board (department-issued jurisprudence exam)",
        vendorUrl: "https://www.rld.nm.gov?p=15797/",
        fee: "Included with the application packet (no separate exam fee is published)",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.rld.state.nm.us/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PI%20application.pdf",
        sourceNote: "Application packet checklist, item 6: Department issued jurisprudence exam. The board does not publish a question count or time limit."
      },
      experience: "Not less than 6,000 hours of actual investigative work acquired within the five years preceding the application - investigation of crimes or wrongs, investigation of persons, location or recovery of lost or stolen property, cause or responsibility for fires, losses or accidents, or securing evidence for courts, tribunals or law enforcement. Documented through notarized Certification of Experience forms.",
      eligibility: {
        minAge: 21,
        education: "No minimum education level is published; proof of age (birth certificate, driver license, state ID or baptismal certificate) is required",
        other: "Application must be signed before a notary and accompanied by two 2x2 passport-type photographs; firearms certification is optional and requires additional training documentation"
      },
      background: {
        method: "Electronic fingerprints through 3M Cogent after online registration (ORI NM920250Z); out-of-state applicants may mail inked fingerprint cards to the NM Department of Public Safety",
        fee: "$44 for the FBI and New Mexico state criminal record check",
        disqualifiers: "Applicants answering yes to criminal history questions must submit court documents showing the disposition of all charges; the board does not publish a specific disqualifying offense list on its forms",
        sourceUrl: "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/PI_Company_app___Rev_09.2015_2.pdf"
      },
      fees: [
        { item: "Initial license (Private Investigator, includes $100 application fee)", fee: "$400", sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf" },
        { item: "Renewal", fee: "$300", sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf" },
        { item: "Late fee", fee: "$100", sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf" },
        { item: "Fingerprint background check (FBI + NM state)", fee: "$44", sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf" },
        { item: "Surety bond", fee: "$10,000 bond (annual premium typically $100-$300 through a surety company)", sourceUrl: "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/PI_Company_app___Rev_09.2015_2.pdf" }
      ],
      application: {
        portal: "Paper application by mail (RLD Boards and Commissions Division)",
        portalUrl: "https://www.rld.nm.gov?p=15797/",
        steps: [
          "Complete the PI application, sign it before a notary, and staple two passport-type photos to the front page",
          "Attach notarized Certification of Experience forms covering the 6,000-hour requirement and proof of age",
          "Complete electronic fingerprinting through 3M Cogent (or mail inked cards with $44 to NM DPS if out of state)",
          "Submit the application with the $400 initial license fee payable to the Private Investigations Advisory Board",
          "Pass the department-issued jurisprudence exam on the Private Investigations Act and board rules",
          "Provide the $10,000 surety bond before the license is issued"
        ],
        processingTime: "One to three weeks from receipt of a complete application; missing court documents for criminal history questions greatly extend the timeline",
        sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      renewal: {
        cycle: "2 years",
        ce: "No continuing education requirement is published",
        fee: "$300",
        late: "$100 late fee; the board issues no temporary licenses or extensions",
        sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      reciprocity: {
        rule: "No formal reciprocity. A private investigator licensed in another state who originates an investigation in their home state may continue it into New Mexico for up to 30 days after giving the board prior written notice of when, where and the scope of the work.",
        agreements: null,
        sourceUrl: "https://www.rld.nm.gov/uploads/files/FAQs.pdf"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$41,600", p25: "$36,900", p75: "$64,280", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NM" },
      localNuance: "New Mexico licenses individuals and companies separately: a solo investigator needs the individual PI license, while an agency taking contracts or employing investigators needs the separate PI Company license ($200 initial, $100 per branch office). Companies providing personal protection or bodyguard services must carry $1,000,000 general liability insurance instead of (or in addition to) the $10,000 surety bond.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.rld.nm.gov?p=15797/" }
      ],
      stateFaqs: [
        { q: "Does New Mexico require a written exam for private investigators?", a: "Yes. Every PI applicant must pass a department-issued jurisprudence exam covering the Private Investigations Act and board rules. The board does not publish a question count, time limit or study guide; the exam requirement appears on the application packet checklist." },
        { q: "How much investigative experience do I need in New Mexico?", a: "6,000 hours of actual investigative work performed within the five years before applying, verified through notarized Certification of Experience forms signed by qualifying employers or supervisors." },
        { q: "What does a New Mexico private investigator license cost?", a: "The initial license is $400 (including a $100 application fee), renewal is $300 every two years, and the fingerprint background check costs $44. A $10,000 surety bond must also be in place, which typically costs $100-$300 per year in premium." },
        { q: "Can an out-of-state private investigator work a case in New Mexico?", a: "Only for investigations that originate in the investigator's home state, and only for up to 30 days. The New Mexico PI Board must receive written notice of when, where and the scope of the investigation before the work begins." }
      ],
      sources: [
        { label: "NM RLD - Private Investigations overview and contact", url: "https://www.rld.nm.gov?p=15797/", checkedOn: "2026-10" },
        { label: "NM Private Investigations Board - License Fees FAQ", url: "https://www.rld.nm.gov/uploads/files/FAQs.pdf", checkedOn: "2026-10" },
        { label: "NM RLD - Private Investigator License application packet", url: "https://www.rld.state.nm.us/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PI%20application.pdf", checkedOn: "2026-10" },
        { label: "Start a Business by State - New Mexico PI licensing guide", url: "https://startbusinessbystate.com/?p=714", checkedOn: "2026-10" }
      ]
    },
    NY: {
      agency: "New York Department of State, Division of Licensing Services",
      agencyUrl: "https://dos.ny.gov/become-private-investigator",
      exam: {
        vendor: "NYS Department of State (state-administered written exam at DOS exam sites)",
        vendorUrl: "https://dos.ny.gov/become-private-investigator",
        fee: "$15",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://dos.ny.gov/become-private-investigator",
        sourceNote: "The DOS does not publish a question count, time limit or passing score; a passing exam slip may be no more than two years old when the application is filed. The exam schedule for July-December 2026 is posted on the DOS page."
      },
      experience: "Three years of full-time investigative experience as an employee of a licensed private investigator or a government or police investigative agency; or three years in a position whose primary duties were conducting investigations; or three years supervising and reviewing the work of at least three investigators; or 20 years of service as a police officer or Fire Marshal.",
      eligibility: {
        minAge: 25,
        citizenship: "Not published as a requirement on the DOS licensing page",
        education: "No minimum education requirement is published",
        other: "Applicant must be a principal in the business entity; holders of employment agency licenses or anyone with a financial interest in an employment agency is ineligible"
      },
      background: {
        method: "Electronic fingerprinting through an approved vendor (IdentoGO by IDEMIA)",
        fee: "$88.50 payable to IDEMIA",
        disqualifiers: "The DOS does not publish a specific disqualifier list on the licensing page; incomplete applications with any omission or inaccuracy may be denied",
        sourceUrl: "https://dos.ny.gov/become-private-investigator"
      },
      fees: [
        { item: "Initial application (individual)", fee: "$400", sourceUrl: "https://dos.ny.gov/become-private-investigator" },
        { item: "Initial application (corporation or business entity)", fee: "$500", sourceUrl: "https://dos.ny.gov/become-private-investigator" },
        { item: "Written exam", fee: "$15", sourceUrl: "https://dos.ny.gov/become-private-investigator" },
        { item: "Fingerprinting", fee: "$88.50", sourceUrl: "https://dos.ny.gov/become-private-investigator" },
        { item: "Surety bond", fee: "$10,000 bond (premium set by the surety market)", sourceUrl: "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application" },
        { item: "Renewal (2 years)", fee: "$400 individual / $500 entity", sourceUrl: "https://www.ny.gov/services/private-investigators-license" },
        { item: "Late renewal penalty", fee: "$100", sourceUrl: "https://www.ny.gov/services/private-investigators-license" }
      ],
      application: {
        portal: "Paper application by mail to NYS Department of State, Division of Licensing Services, P.O. Box 22001, Albany, NY 12201",
        portalUrl: "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application",
        steps: [
          "Pass the written private investigator exam and keep the original PASSED slip (valid two years)",
          "Complete the DOS-0075 application, including the signed DMV Informed Consent section",
          "Obtain proof of $10,000 surety bonding from a surety company authorized in New York",
          "Complete electronic fingerprinting and attach the receipt",
          "Attach proof of three years of qualifying experience (or the 20-year police officer or Fire Marshal alternative)",
          "Submit the packet with the $400 (individual) or $500 (entity) application fee"
        ],
        processingTime: "Average 3-5 business days per the state services page, though the DOS notes initial issuance times vary depending upon investigation",
        sourceUrl: "https://www.ny.gov/services/private-investigators-license"
      },
      renewal: {
        cycle: "2 years",
        ce: "No continuing education requirement is published",
        fee: "$400 individual / $500 entity",
        late: "$100 late penalty; renewals are mailed 90 days before expiration and a late fee applies if not renewed six weeks prior to expiration",
        sourceUrl: "https://www.ny.gov/services/private-investigators-license"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$59,140", p25: "$45,970", p75: "$80,910", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NY" },
      localNuance: "The exam must be passed before submitting the application, and the passing slip expires two years after the exam date. Agencies that employ security guards must also carry liability insurance of $100,000 per occurrence and $300,000 aggregate covering false arrest, malicious prosecution, libel, slander and privacy violations. Operating without a license is a Class A misdemeanor under General Business Law Section 70.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dos.ny.gov/become-private-investigator" }
      ],
      stateFaqs: [
        { q: "When should I take the New York PI exam?", a: "Before filing the application. Applicants should not submit until they have passed the exam, and the passing slip cannot be more than two years old when the application is filed, so the exam and the experience documentation need to line up." },
        { q: "How much experience qualifies for a New York private investigator license?", a: "Three years of full-time investigative experience for a licensed PI or a government or police agency, three years supervising at least three investigators, or 20 years as a police officer or Fire Marshal. Lack of qualifying experience is the most common denial reason." },
        { q: "What are the main fees in New York?", a: "$15 for the written exam, $88.50 for fingerprinting, $400 for an individual application ($500 for a firm), and the same amounts to renew every two years. A $100 late penalty applies to late renewals." },
        { q: "Do I need insurance as a New York private investigator?", a: "A $10,000 surety bond is always required. Liability insurance of $100,000 per occurrence and $300,000 aggregate becomes mandatory only if the agency employs security guards, and the policy must specifically cover false arrest, false imprisonment, malicious prosecution, libel, slander and privacy violations." }
      ],
      sources: [
        { label: "NYS DOS - Become a Private Investigator", url: "https://dos.ny.gov/become-private-investigator", checkedOn: "2026-10" },
        { label: "NYS DOS - PI/BEA/WGP Agency Application (DOS-0075)", url: "https://dos.ny.gov/private-investigator-bail-enforcement-agent-watch-guard-or-patrol-agency-application", checkedOn: "2026-10" },
        { label: "NY.gov - Private Investigator License service page (fees and processing)", url: "https://www.ny.gov/services/private-investigators-license", checkedOn: "2026-10" },
        { label: "LegalClarity - NYS Private Investigator License Requirements and Exam", url: "https://legalclarity.org/nys-private-investigator-license-requirements-and-exam/", checkedOn: "2026-10" }
      ]
    },
    NC: {
      agency: "North Carolina Private Protective Services Board (NC Department of Public Safety)",
      agencyUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board",
      experience: "Three years of verifiable investigative experience - private-sector investigation for a contract security or private firm, government or law enforcement investigation, or a military occupational specialty plus two years of investigative experience within the past five years. Academic credits reduce the hours: an associate degree earns 400 hours (plus up to 100 bonus hours), a bachelor degree 800 (plus 200), a graduate degree 1,200 (plus 300), under 14B NCAC 16 .0401.",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or Qualified Alien",
        education: "High school diploma or GED - proof must be uploaded with the application",
        other: "Good moral character and temperate habits; five letters attesting to character and reputation; an Equifax credit check run within 30 days of applying; a personal meeting with a Board investigator, the Screening Committee, the Director or a designated representative before issuance"
      },
      background: {
        method: "Electronic fingerprints via Live Scan (or classifiable fingerprint cards mailed to the Board) plus a statewide criminal history records search by the Board-designated reporting service for every state of residence in the preceding 60 months",
        fee: "The actual cost charged by the State Bureau of Investigation, collected online by the Board",
        disqualifiers: "Convictions for firearms offenses, controlled substance crimes, assault or violence, breaking or entering, burglary or larceny, and alcohol or narcotics addiction count against applicants under G.S. 74C-8; guilty and no-contest pleas are treated as convictions",
        sourceUrl: "https://www.oah.nc.gov/092023-ppsb-objection-letter/open"
      },
      fees: [
        { item: "Application (non-refundable, plus a $4 convenience fee and card transaction fee)", fee: "$150", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" },
        { item: "License fee (per year of the license term)", fee: "$250", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" },
        { item: "Trainee permit (PI Associate, per year)", fee: "$250", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" },
        { item: "Late renewal", fee: "$100 in addition to the renewal fee", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" },
        { item: "Branch office (per year of term)", fee: "$50", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" }
      ],
      application: {
        portal: "PPSB online application on the Board's website",
        portalUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/licenses",
        steps: [
          "Submit the online application with a head-and-shoulders digital photo (JPG, JPEG or PNG taken within six months)",
          "Upload a statement of statewide criminal history search results for each state of residence in the past 60 months",
          "Upload proof of high school graduation (diploma or GED certificate)",
          "Submit fingerprints electronically or by card and authorize the Equifax credit check",
          "Obtain five online character letters attesting to good character and reputation",
          "Meet personally with a Board investigator, the Screening Committee, the Director or another designated representative to review G.S. 74C and the rules before the license is issued"
        ],
        processingTime: "Several weeks to a few months; the personal meeting and background review are built into the process and no fixed timeline is published",
        sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      renewal: {
        cycle: "1 or 2 years as issued by the Board (the fee is $250 per year of the license term)",
        ce: "No continuing education requirement is published in the licensing rules",
        fee: "$250 per year of term",
        late: "$100 late renewal fee in addition to the renewal fee",
        sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      reciprocity: {
        rule: "No general reciprocity program is published. Under 14B NCAC 16 .0401, military spouses holding an active PI license from another state with substantially equal requirements, plus two years of investigative experience within the past five years, may have that accepted in place of the standard three-year requirement.",
        agreements: null,
        sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$52,890", p25: "$41,000", p75: "$74,900", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=NC" },
      localNuance: "North Carolina does not give a written exam - qualification is experience and character based. Newcomers without the three years start on a trainee (PI Associate) permit, which requires a notarized supervision statement, a Board-provided experience log, and continuous work under a fully licensed PI. Applications returned for incompleteness are charged additional fees, and all fees are paid online by card or electronic funds transfer.",
      recentChanges: [
        { year: 2024, change: "The Board's application rule 14B NCAC 16 .0201 was amended effective September 1, 2024 (with earlier amendments effective November 1, 2023), formalizing the online application, Live Scan fingerprints, digital photo upload, statewide criminal record search statements, Equifax credit check and online character letters.", sourceUrl: "https://www.oah.nc.gov/092023-ppsb-objection-letter/open" }
      ],
      stateFaqs: [
        { q: "Is there an exam for a North Carolina private investigator license?", a: "No. The Private Protective Services Board does not administer a written exam. Qualification rests on three years of documented investigative experience, character references, a credit check, background checks, and a personal meeting with a Board representative." },
        { q: "How can a degree shorten the North Carolina experience requirement?", a: "Under 14B NCAC 16 .0401, an associate degree credits 400 hours (plus up to 100 bonus hours for related coursework), a bachelor degree 800 hours (plus 200) and a graduate degree 1,200 hours (plus 300) against the required investigative experience." },
        { q: "What does licensing cost in North Carolina?", a: "$150 to apply, then $250 per year of the license term, so a two-year license runs $500 after approval. Trainee permits are $250 per year, late renewals add $100, and branch offices are $50 per year." },
        { q: "What if I do not have three years of experience yet?", a: "Apply for the PI Associate (trainee) permit. It requires no prior investigative experience, but you must work under the direct supervision of a licensed PI, keep a Board-provided experience log, and pay $250 per year." }
      ],
      sources: [
        { label: "NC DPS - Private Protective Services Board", url: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board", checkedOn: "2026-10" },
        { label: "14B NCAC Chapter 16 - Private Protective Services Board rules (fees, application)", url: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf", checkedOn: "2026-10" },
        { label: "NC Office of Administrative Hearings - PPSB rule 16 .0201 amendment", url: "https://www.oah.nc.gov/092023-ppsb-objection-letter/open", checkedOn: "2026-10" },
        { label: "LegalClarity - NC Private Investigator License Requirements and Fees", url: "https://legalclarity.org/nc-private-investigator-license-requirements-and-fees", checkedOn: "2026-10" }
      ]
    },
    ND: {
      agency: "North Dakota Private Investigation and Security Board (PISB)",
      agencyUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      exam: {
        vendor: "North Dakota PISB (board-administered exam)",
        vendorUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        fee: "$100 one-time application and testing fee covers processing and testing",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        sourceNote: "Exams are administered individually in Bismarck; the Executive Director notifies applicants of the time and location once application requirements are met. The board does not publish a question count or passing score."
      },
      experience: "A licensed private investigator must document 2,000 hours of service and pass the exam; a registered private investigator is an employee of a licensed investigative agency, does not take the exam, and registers with the board ($25 registration fee per the fee schedule).",
      eligibility: {
        education: "No minimum education requirement is published",
        other: "Active law enforcement officers cannot hold a PI license or work as private investigators in North Dakota (off-duty law enforcement may work as security officers); the license holder is the responsible decision maker for the company"
      },
      background: {
        method: "Two legible fingerprint cards submitted with the application (board-provided cards available at no charge, or standard FBI applicant cards)",
        fee: "$41.25 criminal records search (BCI and FBI)",
        disqualifiers: "The board does not publish a specific disqualifier list on its licensing pages",
        sourceUrl: "https://www.pisb.nd.gov/licensing/forms"
      },
      fees: [
        { item: "Application and testing (one-time, new applicants)", fee: "$100", sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions" },
        { item: "Criminal records search (BCI and FBI)", fee: "$41.25", sourceUrl: "https://www.pisb.nd.gov/licensing/forms" },
        { item: "Private investigator license (1 year, expires September 30)", fee: "$150", sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions" },
        { item: "Licensed Private Investigator (fee schedule line item)", fee: "$130", sourceUrl: "https://www.pisb.nd.gov/licensing/forms" },
        { item: "Detective agency license", fee: "$250", sourceUrl: "https://www.pisb.nd.gov/licensing/forms" },
        { item: "Late fee (registrations)", fee: "$10 per month of non-renewal", sourceUrl: "https://www.pisb.nd.gov/licensing/forms" }
      ],
      application: {
        portal: "Paper application by mail to NDPISB, 513 East Bismarck Expressway, Suite 5, Bismarck, ND 58504",
        portalUrl: "https://www.pisb.nd.gov/licensing/forms",
        steps: [
          "Complete the licensed private investigator application pages (1, 2, 2a, 3 and 6) and supply requested documentation of the 2,000 service hours",
          "Submit two legible fingerprint cards (do not staple or fold) and the $41.25 criminal search fee",
          "Email one passport-sized photo of the applicant to the board's photo address when the application is submitted",
          "Pay the one-time $100 application and testing fee plus the license fee by check payable to the board",
          "After requirements are met, take the board exam in Bismarck at the time scheduled by the Executive Director",
          "If seeking agency status, also register the business with the North Dakota Secretary of State and pay the $250 agency fee"
        ],
        processingTime: "About 30 business days once all applications, fees and documentation are received",
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      renewal: {
        cycle: "1 year - all licenses and registrations expire September 30 of each year, with fees prorated for the portion of the license period in effect",
        ce: "No continuing education requirement is published",
        fee: "Same fee structure as initial issuance minus the one-time $100 application fee",
        late: "$10 per month of non-renewal for registrations; license holders face possible criminal and disciplinary action for non-renewal",
        sourceUrl: "https://www.pisb.nd.gov/licensing/forms"
      },
      reciprocity: {
        rule: "The board states plainly that North Dakota has no reciprocity - everyone must apply for a North Dakota license and meet all qualifications.",
        agreements: null,
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$44,310", p25: "$39,840", p75: "$50,440", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=ND" },
      localNuance: "North Dakota separates the licensed private investigator (passes the exam, responsible for all company employees) from the registered investigator (agency employee, no exam). Armed work requires a separate weapons exam and state weapons certification - a concealed weapons or constitutional carry permit does not authorize carrying a weapon while providing investigative services. Residency is not required.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026. The most recent substantive statute amendments took effect January 1, 2016 (2015 House Bill 1126, which added recovery services to the chapter and raised the exam fee cap to $100).", sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions" }
      ],
      stateFaqs: [
        { q: "How is the North Dakota PI exam scheduled?", a: "Individually. Once the application process and requirements are met, the Executive Director notifies the applicant of the exam time and location in Bismarck. Exams are not offered at commercial test centers." },
        { q: "What does it cost to become a licensed private investigator in North Dakota?", a: "A one-time $100 application and testing fee, a $41.25 BCI and FBI criminal records search, and the annual license fee - the board's FAQ lists $150 for the one-year license, while its fee schedule lists $130 for the licensed private investigator line item. Licenses expire every September 30." },
        { q: "Can I carry a firearm as a North Dakota private investigator with my CCW?", a: "No. The board states that concealed weapons and constitutional carry permits do not allow carrying a weapon while providing investigative services. You must pass the weapons exam and meet the state's weapons requirements before an armed certification is issued." },
        { q: "Does North Dakota recognize other states' PI licenses?", a: "No. The board's FAQ states there is no reciprocity; every applicant must qualify in North Dakota. Residency is not required, however, so out-of-state residents can apply directly." }
      ],
      sources: [
        { label: "ND PISB - Licensing FAQ", url: "https://www.pisb.nd.gov/licensing/frequently-asked-questions", checkedOn: "2026-10" },
        { label: "ND PISB - Forms and fee breakdown", url: "https://www.pisb.nd.gov/licensing/forms", checkedOn: "2026-10" },
        { label: "North Dakota Century Code 43-30 (2015 HB 1126 journal - fees and licensing)", url: "https://ndlegis.gov/assembly/64-2015/regular/journals/sr-dailyjnl-75.pdf", checkedOn: "2026-10" },
        { label: "ND Legislative Branch - HB 1126 (2015) enrolled bill", url: "https://www.legis.nd.gov/assembly/64-2015/documents/15-8094-02003m.pdf", checkedOn: "2026-10" }
      ]
    },
    OH: {
      agency: "Ohio Department of Public Safety - Private Investigator Security Guard Services (PISGS)",
      agencyUrl: "http://codes.ohio.gov/orc/4749",
      exam: {
        vendor: "Ohio DPS / PISGS (state examination devised by the Director of Public Safety)",
        vendorUrl: "http://codes.ohio.gov/orc/4749",
        fee: "$25 exam application fee",
        practical: null,
        languages: ["English"],
        sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17",
        sourceNote: "OAC 4501:7-1-07 governs the exam; after eligibility is confirmed PISGS notifies the applicant of the exam time and place in Columbus, with up to 90 days and three attempts to pass. The state does not publish a question count or passing score."
      },
      experience: "At least two years of continuous investigatory or security services work immediately preceding application - for a law enforcement or other public agency engaged in investigatory activities, for a private investigator or security guard provider, or in the practice of law - or equivalent experience as determined by rule of the Director (ORC 4749.03(A)(1)(b)). Criminal justice education may substitute for up to half of the experience requirement subject to PISGS approval.",
      eligibility: {
        minAge: "No numerical minimum is set in Chapter 4749; the application collects birth date and requires legal capacity to hold the license",
        citizenship: "The application states citizenship; Chapter 4749 does not publish a citizenship-only bar",
        education: "No minimum education requirement in statute",
        other: "Applicants must submit five references from reputable citizens known for at least five years who are not related by blood or marriage, plus a recent full-face photograph"
      },
      background: {
        method: "Fingerprint submission to the Bureau of Criminal Identification and Investigation (BCI&I) via WebCheck; an FBI check is added if the applicant intends to carry a firearm; licensees and registrants enroll in the BCI retained applicant fingerprint database",
        fee: "$10 BCI retained applicant fingerprint enrollment fee per company application; BCI/FBI vendor charges are paid separately to the WebCheck provider",
        disqualifiers: "Disqualifying offenses are defined in OAC 4501:7-1-19, including crimes of moral turpitude and specified violent or sexually oriented offenses; adjudicated incompetence without restored capacity is disqualifying under ORC 4749.03",
        sourceUrl: "http://codes.ohio.gov/orc/4749"
      },
      fees: [
        { item: "Exam application (per individual or qualifying agent)", fee: "$25", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "License issuance (Class A/B/C)", fee: "$200 (refunded if the application is denied)", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "BCI retained applicant fingerprint enrollment (company application)", fee: "$10", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "Branch license", fee: "$100", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "Biennial renewal", fee: "$550", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "Employee registration ID card", fee: "$40 issuance / $25 annual renewal", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" },
        { item: "Firearm bearer notation", fee: "$15", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" }
      ],
      application: {
        portal: "PISGS online licensing (Ohio Department of Public Safety)",
        portalUrl: "http://pisgs.ohio.gov/pisgs.stm",
        steps: [
          "Create the PISGS account and start the Class B (private investigator) provider application",
          "Document two years of continuous qualifying experience with dates, employers and duties",
          "Upload a certificate of liability insurance naming the Department of Public Safety - PISGS as certificate holder, meeting the $100,000 per person / $300,000 per occurrence bodily injury and $100,000 property damage minimums",
          "List five reputable citizen references known at least five years and submit fingerprints through WebCheck for the BCI check",
          "Pay the $25 exam application and $200 license issuance fees; the $200 issuance fee is refunded if the license is denied",
          "After prerequisites are met, take the PISGS exam in Columbus within the 90-day window (three attempts allowed)"
        ],
        processingTime: "Several weeks; the state does not publish a fixed processing timeline, and the exam window runs from the eligibility notice",
        sourceUrl: "http://codes.ohio.gov/orc/4749"
      },
      renewal: {
        cycle: "2 years (licenses issued on or after April 9, 2025 follow the biennial cycle)",
        ce: "No continuing education requirement is published in Chapter 4749 or OAC 4501:7-1",
        fee: "$550 biennial renewal",
        late: "Not specified in the fee rule; workers' compensation and unemployment coverage must be in place for renewal eligibility",
        sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$47,200", p25: "$41,600", p75: "$70,910", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=OH" },
      localNuance: "Ohio licenses the business, not the lone individual: a Class B license covers private investigation, Class C security guard services, and Class A both, with a qualifying agent who meets the experience and exam requirements. Employees perform investigative work only after the employer obtains a $40 PISGS registration ID card for them. Instead of a surety bond, Ohio requires comprehensive general liability insurance at the statutory minimums. Armed work requires OPOTC-approved training (20 hours handgun plus 5 hours for other firearms), the $15 firearm-bearer notation, and annual requalification.",
      recentChanges: [
        { year: 2025, change: "House Bill 238 took effect April 9, 2025, moving Ohio private investigator licenses to a two-year (biennial) renewal cycle under amended ORC 4749.03.", sourceUrl: "http://codes.ohio.gov/orc/4749" },
        { year: 2026, change: "The fee rule OAC 4501:7-1-17 was reissued effective May 1, 2026, confirming the $25 exam application, $200 issuance, $10 BCI enrollment and $550 biennial renewal fees.", sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-17" }
      ],
      stateFaqs: [
        { q: "Does Ohio require a bond for private investigators?", a: "No. Chapter 4749 requires comprehensive general liability insurance instead - at least $100,000 per person and $300,000 per occurrence for bodily injury plus $100,000 for property damage - with the insurer obligated to notify PISGS before any cancellation or lapse." },
        { q: "What does Ohio's PI exam cover and when is it taken?", a: "The Director's exam verifies competency to operate under ORC 4749 and the PISGS rules. It is taken in Columbus after PISGS confirms eligibility; applicants have up to 90 days and three attempts from the eligibility notice. The state does not publish a question count." },
        { q: "How much does an Ohio private investigator license cost?", a: "$25 for the exam application, $200 for license issuance (refunded if denied), $10 for BCI fingerprint enrollment, and $550 to renew every two years. Branch licenses are $100 and employee ID cards $40 with $25 annual renewal." },
        { q: "Who has to be licensed in Ohio - me or my company?", a: "The business entity is licensed (Class B for investigation only, Class A for investigation plus security) through a qualifying agent who has two years of continuous qualifying experience and passes the exam. Investigators employed by a licensee instead register with PISGS and carry a $40 ID card." }
      ],
      sources: [
        { label: "Ohio Revised Code Chapter 4749 - Private Investigators; Security Services", url: "http://codes.ohio.gov/orc/4749", checkedOn: "2026-10" },
        { label: "Ohio Administrative Code 4501:7-1-17 - Fees (effective May 1, 2026)", url: "http://codes.ohio.gov/oac/4501:7-1-17", checkedOn: "2026-10" },
        { label: "License Navigator - Ohio Private Investigator License process", url: "https://licensenavigator.ai/blog/how-to-get-private-investigator-license-ohio", checkedOn: "2026-10" },
        { label: "PrivateInvestigatorEdu.org - How to Become a Private Investigator in Ohio", url: "https://privateinvestigatoredu.org/ohio/", checkedOn: "2026-10" }
      ]
    },
    OK: {
      agency: "Oklahoma Council on Law Enforcement Education and Training (CLEET)",
      agencyUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/",
      exam: {
        vendor: "CLEET Phase III Private Investigator written exam, administered through Oklahoma CareerTech (Health Certification Project) testing centers",
        vendorUrl: "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html",
        fee: "$50 testing fee payable at the CareerTech testing center",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html",
        sourceNote: "Candidates must complete a CLEET-approved training program before testing and present the certificate of completion plus government photo ID. CLEET verifies all licensure requirements before issuing a license. The state does not publish a question count or passing score."
      },
      experience: "Applicants must submit documented proof of experience or comparable training with the application; CLEET's licensing page does not publish a specific hour count. Armed applicants must additionally pass a current MMPI psychological evaluation.",
      eligibility: {
        citizenship: "Non-US citizens must provide verifiable documentation of legal residence",
        education: "No minimum education level is published",
        other: "Certified court Judgment and Sentence or a letter of no record for each arrest or charge; record requests completed by both the local police department and the county sheriff; two current passport-size color photographs; armed licenses require a current MMPI"
      },
      background: {
        method: "Classifiable fingerprints for a national criminal history record check (fee deposited to the OSBI Revolving Fund), plus local police and sheriff record requests",
        fee: "The prevailing fingerprint processing fee is charged with the original application and paid to OSBI",
        disqualifiers: "CLEET does not publish a specific disqualifier list on its licensing page; all page 2 arrest and charge questions must be answered with certified court documentation",
        sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      fees: [
        { item: "Unarmed private investigator license (3 years)", fee: "$50", sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/" },
        { item: "Armed private investigator license (3 years)", fee: "$100", sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/" },
        { item: "Combination PI and security guard license", fee: "$150", sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/" },
        { item: "Investigative agency license (5 years)", fee: "$300", sourceUrl: "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?citeid=485804" },
        { item: "Phase III exam (CareerTech testing)", fee: "$50", sourceUrl: "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html" },
        { item: "Late renewal (within 30 days of expiration)", fee: "$25", sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/" }
      ],
      application: {
        portal: "CLEET Thentia online portal (paper applications no longer accepted)",
        portalUrl: "https://cleet.us.thentiacloud.net/webs/cleet/",
        steps: [
          "Complete a CLEET-approved training program and pass the Phase III Private Investigator exam at a CareerTech testing center",
          "Submit the application through the Thentia portal, paying 20% of the licensing fee at submission",
          "Attach certified court Judgment and Sentence documents or letters of no record for every arrest or charge",
          "Attach record requests from both the local police department and sheriff, two passport photos, and documented proof of experience or comparable training",
          "Self-employed investigators must also file the agency application; armed applicants add the current MMPI",
          "After approval, pay the remaining 80% of the fee, then log in and print the license"
        ],
        processingTime: "Not published by CLEET; payment of the balance is requested by email once the application is approved pending fee",
        sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      renewal: {
        cycle: "3 years (individual PI licenses; investigative agency licenses run 5 years)",
        ce: "CLEET publishes guidelines for continuing education credit, but no hour requirement is stated on the PI licensing page",
        fee: "$50 unarmed / $100 armed / $150 combination",
        late: "$25 late fee if renewed within 30 days of expiration; more than 30 days expired requires a completely new application",
        sourceUrl: "https://www.ok.gov/cleet/Licensing/Private_Investigators/"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$39,680", p25: "$37,110", p75: "$58,430", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=OK" },
      localNuance: "Oklahoma bundles private investigators and security guards under one CLEET regime: the PI exam is Phase III (security guard exams are Phases I-II, armed guard Phase IV), and a combination PI-plus-security license costs $150. Active certified peace officers pay only 20% of the armed license fee, and retired peace officers in good standing are exempt from re-fingerprinting. If an application is denied or unqualified, CLEET retains 20% of the fee as processing and refunds the rest.",
      recentChanges: [
        { year: 2024, change: "House Bill 3786 amended 59 O.S. Section 1750.6, making the $25 late renewal fee non-refundable, requiring new applications (not renewals) more than 30 days after expiration, and exempting retired peace officers in good standing from fingerprint submission for armed licenses.", sourceUrl: "http://webserver1.lsb.state.ok.us/cf_pdf/2023-24%20ENGR/hB/HB3786%20ENGR.PDF" }
      ],
      stateFaqs: [
        { q: "What exam do Oklahoma private investigator applicants take?", a: "The CLEET Phase III Private Investigator written exam, given at Oklahoma CareerTech testing centers for a $50 fee. Candidates must first complete a CLEET-approved training program and bring the certificate of completion and government-issued photo ID." },
        { q: "How much is an Oklahoma PI license?", a: "$50 for an unarmed three-year license, $100 armed, $150 for the PI-and-security combination, and $300 for a five-year investigative agency license. Online applications pay 20% at submission and the balance after approval." },
        { q: "What happens if my Oklahoma PI license expires?", a: "You have a 30-day grace window with a $25 late fee. More than 30 days after expiration the license is not renewable and a completely new application - including the exam and fee - is required." },
        { q: "Do armed Oklahoma investigators face extra requirements?", a: "Yes. The armed license costs $100 and requires a current MMPI psychological evaluation along with the fingerprint-based national background check. Active peace officers pay only 20% of the armed fee." }
      ],
      sources: [
        { label: "OK CLEET - Private Investigators licensing page", url: "https://www.ok.gov/cleet/Licensing/Private_Investigators/", checkedOn: "2026-10" },
        { label: "Oklahoma CareerTech - CLEET Private Security / PI testing", url: "https://oklahoma.gov/careertech/testing-center/health-professional-certifications/private-security.html", checkedOn: "2026-10" },
        { label: "59 O.S. Section 1750.6 - Application, term, renewal (OSCN)", url: "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?citeid=485804", checkedOn: "2026-10" },
        { label: "Oklahoma HB 3786 (2024) - enrolled bill amending Section 1750.6", url: "http://webserver1.lsb.state.ok.us/cf_pdf/2023-24%20ENGR/hB/HB3786%20ENGR.PDF", checkedOn: "2026-10" }
      ]
    },
    OR: {
      agency: "Oregon Department of Public Safety Standards and Training (DPSST) - Private Investigator Licensing Program",
      agencyUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx",
      exam: {
        vendor: "DPSST (online exam through Workday)",
        vendorUrl: "https://www.oregon.gov/dpsst/PI/Pages/Exam%20Information.aspx",
        fee: "$29 application/examination fee",
        practical: null,
        languages: ["English"],
        sourceUrl: "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482",
        sourceNote: "Exam results require 86 percent or higher; the exam may be retaken up to three separate times, after which a failed applicant must wait one year. Registration is approved manually during business hours. No exam is required for renewal."
      },
      experience: "1,500 hours of documented investigatory work experience, an approved related course of study (up to 500 hours of education may count toward the total), or a combination of work, education and military training approved by DPSST. The provisional investigator license requires no experience but bars supervising other investigators and carries extra continuing education hours at renewal.",
      eligibility: {
        minAge: 18,
        citizenship: "Must be eligible to work in the United States",
        education: "No minimum education level; approved coursework can substitute for up to 500 of the 1,500 experience hours",
        other: "Good moral fitness as defined by law and administrative rule; three professional reference letters (references cannot be related by blood or marriage or be personal in nature); signed PI-27 Code of Ethics"
      },
      background: {
        method: "Fingerprints on a DPSST-provided card or electronic submission through Fieldprint (a copy of the Fieldprint confirmation page is included with the application)",
        fee: "$45 background fee through September 30, 2026; $48 for applications submitted on or after October 1, 2026",
        disqualifiers: "Criminal disqualifiers are listed in Oregon Administrative Rules Chapter 259 Division 61",
        sourceUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
      },
      fees: [
        { item: "Application/examination", fee: "$29", sourceUrl: "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf" },
        { item: "Fingerprint/criminal background check", fee: "$45 (rises to $48 on October 1, 2026)", sourceUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx" },
        { item: "License fee", fee: "$690 per the PI-1 fee schedule (the DPSST licensing page currently lists $800 for the licensing fee)", sourceUrl: "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf" },
        { item: "Surety bond or errors and omissions insurance", fee: "$5,000 minimum (or irrevocable letter of credit from an Oregon commercial bank)", sourceUrl: "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf" }
      ],
      application: {
        portal: "Paper PI-1 application packet by mail to DPSST, 4190 Aumsville Hwy SE, Salem, OR 97317 (online renewal available)",
        portalUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx",
        steps: [
          "Complete form PI-1 and attach documentation of the 1,500 hours (resume, transcripts or combination approval)",
          "Secure a $5,000 surety bond, irrevocable letter of credit, or errors and omissions insurance naming the applicant as principal",
          "Obtain three professional reference letters and sign the PI-27 Code of Ethics",
          "Submit one fingerprint card or Fieldprint confirmation, and email a JPEG passport-quality photo (640x480 minimum, within six months)",
          "Pay the $29 application/exam fee, $45 background fee and license fee - all DPSST payments are non-refundable",
          "After the packet is processed, take the online exam through Workday and score 86 percent or higher"
        ],
        processingTime: "The initial application process and criminal background check typically take 4-8 weeks",
        sourceUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx"
      },
      renewal: {
        cycle: "2 years from date of issuance",
        ce: "32 hours of continuing education every two years, including 2 hours of ethics; provisional licensees must submit additional CE hours",
        fee: "Same fee schedule as initial licensure (no exam required at renewal); renewal uses form PI-21 with a CE summary and recordkeeping form",
        late: "Not published on the DPSST licensing pages",
        sourceUrl: "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$76,480", p25: "$55,660", p75: "$92,390", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=OR" },
      localNuance: "Oregon offers a provisional investigator license with no experience requirement - the holder cannot supervise other investigators and owes extra continuing education at renewal, then upgrades to the full license with form PI-11. The $5,000 financial responsibility requirement is unusually flexible: a corporate surety bond, an irrevocable letter of credit issued by an Oregon commercial bank, or errors and omissions insurance all satisfy it.",
      recentChanges: [
        { year: 2026, change: "The fingerprint and criminal background check fee rises from $45 to $48 for applications submitted on or after October 1, 2026, per the DPSST Private Investigator licensing page.", sourceUrl: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx" }
      ],
      stateFaqs: [
        { q: "Can I get an Oregon PI license without investigative experience?", a: "Yes, through the provisional private investigator license. It requires the same application, bond, references and exam, but no experience hours; provisional licensees cannot supervise other investigators and must complete additional continuing education hours at renewal before upgrading via form PI-11." },
        { q: "How hard is the Oregon DPSST PI exam?", a: "The passing threshold is 86 percent. Applicants may retake the exam up to three separate times; after a fourth failure they must wait one year before retaking it. The exam is taken online through Workday after the application packet is processed." },
        { q: "What does Oregon PI licensure cost?", a: "The PI-1 fee schedule totals $764: $29 application/examination, $45 background check and $690 license fee (the DPSST web page currently lists $800 for the licensing fee). The background fee rises to $48 on October 1, 2026. All payments are non-refundable." },
        { q: "What continuing education do Oregon investigators owe?", a: "32 hours of continuing education reported every two years with the PI-21 renewal, including 2 hours dedicated to ethics. Provisional licensees owe additional hours beyond the base 32." }
      ],
      sources: [
        { label: "Oregon DPSST - New Private Investigator License Information", url: "https://www.oregon.gov/dpsst/PI/Pages/New.aspx", checkedOn: "2026-10" },
        { label: "Oregon DPSST - PI-1 Application for Licensure (fee schedule)", url: "https://www.oregon.gov/dpsst/PI/Documents/PI-1.pdf", checkedOn: "2026-10" },
        { label: "Oregon SOS License Directory - Private Investigator (requirements, exam, CE)", url: "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/482", checkedOn: "2026-10" },
        { label: "ORS 703.415 - Investigator's license qualifications", url: "https://www.oregonlaws.org/ors/ors_703.415", checkedOn: "2026-10" }
      ]
    },
    PA: {
      agency: "County Court of Common Pleas / Clerk of Courts (Pennsylvania Private Detective Act of 1953) - Pennsylvania has no state PI licensing agency",
      agencyUrl: "https://www.yorkcountypa.gov/218/Private-Detectives",
      experience: "At least three years as a detective (including employment by a licensed private detective agency), as a member of a US government investigative service, as a sheriff, as a member of the Pennsylvania State Police, or as a city police officer above the rank of patrolman. Experience must be proven with two duly acknowledged certificates; for partnerships, associations or corporations, at least one member or officer must personally qualify.",
      eligibility: {
        minAge: 25,
        citizenship: "United States citizen",
        education: "No minimum education requirement in the Act",
        other: "Five character references from reputable citizens of the applicant's community who have personally known the applicant for at least five years; felony or moral turpitude convictions bar licensure absent an executive pardon"
      },
      background: {
        method: "Two fingerprint cards processed through the Pennsylvania State Police, plus an investigation by the county District Attorney's office before the court acts",
        fee: "County-set: Allegheny charges $37.50 for PSP fingerprint card processing; York charges $17.50 per fingerprint card",
        disqualifiers: "The Private Detective Act bars persons convicted of felonies and specified offenses - illegal weapons possession, burglary instruments or unlawful entry, buying or receiving stolen property, pickpocketing, narcotics offenses, recklessly endangering another person, terroristic threats, simple assault, and aiding prison escape - unless pardoned",
        sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives"
      },
      fees: [
        { item: "Statutory license fee (individual, 2-year term)", fee: "$200", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania" },
        { item: "Statutory license fee (partnership, association or corporation)", fee: "$300", sourceUrl: "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania" },
        { item: "Allegheny County - individual private detective license", fee: "$300 (corporate $400)", sourceUrl: "https://www.alleghenycounty.us/Government/Court-Related/Criminal-Records/Cost-and-Fee-Schedule" },
        { item: "York County - filing fee (non-refundable), due at petition", fee: "$55", sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives" },
        { item: "York County - appointment fee, due when the petition is granted", fee: "$200 individual / $300 partnership or corporation", sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives" },
        { item: "Surety bond", fee: "$10,000 corporate surety bond to the Commonwealth (annual premium typically $50-$300, set by the surety market)", sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives" }
      ],
      application: {
        portal: "Petition filed with the Clerk of Courts in the county where the principal office will be located",
        portalUrl: "https://www.yorkcountypa.gov/218/Private-Detectives",
        steps: [
          "Assemble the petition: two passport photos, two fingerprint cards, two acknowledged experience certificates, and five character references from citizens who have known you at least five years",
          "File the petition with the county Clerk of Courts and pay the local filing fee (York: $55; Allegheny lists its own license fee schedule)",
          "Cooperate with the District Attorney's background investigation; fingerprints are compared against Pennsylvania State Police records",
          "Wait the statutory minimum of 10 days after filing - the court cannot issue a license sooner - and attend a hearing if the county schedules one",
          "After approval, execute and file the $10,000 corporate surety bond (York allows 30 days to post it) and pay the appointment fee",
          "Receive the certificate of license, metal badge and photographed pocket card issued by the court"
        ],
        processingTime: "The statute mandates at least 10 days between filing and issuance; counties commonly take several weeks to a few months depending on DA review and court calendars",
        sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives"
      },
      renewal: {
        cycle: "2 years initially; renewals are handled by the Clerk of Courts, who may reissue for up to five years (York County renews for 5 years, with no mandatory waiting period)",
        ce: "None - Pennsylvania imposes no continuing education on private detectives",
        fee: "Statutory fee again applies ($200 individual / $300 entity) plus a new $10,000 bond; York notes fingerprints and references are not required with renewal",
        late: "York County directs licensees to begin renewal six months before expiration",
        sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$51,200", p25: "$44,840", p75: "$71,830", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=PA" },
      localNuance: "Pennsylvania is unique: it licenses private detectives through the county courts, not a state board. Under the Private Detective Act of 1953 you petition the Court of Common Pleas in the county of your principal office, the District Attorney investigates you, a judge issues the license, and every county sets its own filing fees and hearing practice - Allegheny charges $300 for an individual license and $400 corporate, while York splits a $55 filing fee from a $200 appointment fee. A license issued in one county covers the business premises named in it, so multi-county firms obtain licenses in each county where they operate offices.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026; licensing continues to operate under the Private Detective Act of 1953 as amended, administered county by county.", sourceUrl: "https://www.yorkcountypa.gov/218/Private-Detectives" }
      ],
      stateFaqs: [
        { q: "Is there an exam to become a Pennsylvania private investigator?", a: "No. Pennsylvania's Private Detective Act has no written exam. Qualification is decided by a county judge based on age (25), citizenship, three years of qualifying experience verified by two certificates, five character references, background checks, and the $10,000 bond." },
        { q: "Where do I apply for a Pennsylvania PI license?", a: "With the Clerk of Courts in the county where your principal office will be located - there is no state application. Allegheny County lists its private detective license fees on its Department of Court Records fee schedule, and York County posts its own petition process and costs." },
        { q: "What does a Pennsylvania private detective license cost?", a: "The statute sets $200 for individuals and $300 for entities, but counties add their own charges: Allegheny charges $300 individual ($400 corporate) plus $37.50 for PSP fingerprint processing, and York charges a $55 filing fee, $17.50 per fingerprint card, a $200 appointment fee and a $20 badge fee. The $10,000 surety bond premium is separate." },
        { q: "How long does the Pennsylvania licensing process take?", a: "The court must wait at least 10 days after filing before issuing any license, and the District Attorney's investigation and any hearing add time - plan on several weeks to a few months depending on the county. The initial license runs two years; clerks may reissue renewals for up to five years." }
      ],
      sources: [
        { label: "York County, PA - Private Detectives (process, fees, bond)", url: "https://www.yorkcountypa.gov/218/Private-Detectives", checkedOn: "2026-10" },
        { label: "Allegheny County, PA - Court Records cost and fee schedule", url: "https://www.alleghenycounty.us/Government/Court-Related/Criminal-Records/Cost-and-Fee-Schedule", checkedOn: "2026-10" },
        { label: "License Navigator - PA Private Investigator License Cost (statutory fees)", url: "https://licensenavigator.ai/blog/private-investigator-license-cost-pennsylvania", checkedOn: "2026-10" },
        { label: "LegalClarity - How to Become a Private Investigator in PA (Act of 1953 detail)", url: "https://legalclarity.org/how-to-become-a-private-investigator-in-pa-licensing-steps", checkedOn: "2026-10" }
      ]
    },
    RI: {
      agency: "Local licensing authority (city or town) under the Rhode Island Private Detective Act, Gen. Laws Chapter 5-5 - Rhode Island has no state PI licensing board",
      agencyUrl: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/",
      experience: "At least five years of experience as an investigator or as a police officer with a state, county or municipal department or a US, state, county or municipal investigative agency; or five years employed by a private detective as an investigator; or a criminal justice degree from an accredited college or university; or substantively equivalent training or experience (Gen. Laws 5-5-3).",
      eligibility: {
        citizenship: "US citizen or resident alien",
        education: "A criminal justice degree from an accredited college or university can substitute for the five-year experience paths",
        other: "Good moral character; no felony conviction in any jurisdiction; no prior PI license revoked or application denied by any licensing authority; not declared incompetent by a court unless competency restored; no habitual drunkenness or narcotics addiction or dependence"
      },
      background: {
        method: "Set by each city or town licensing authority; the statute itself disqualifies anyone convicted of a felony in any jurisdiction",
        fee: "Not set statewide - local authorities determine any background check charges",
        disqualifiers: "Felony conviction; prior revocation or denial of a PI license or registration; court-declared incompetency (unless restored); habitual drunkenness or narcotics addiction or dependence",
        sourceUrl: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3"
      },
      fees: [
        { item: "Surety bond (individual licensee, required by statute)", fee: "$5,000 bond with a surety company authorized to do business in Rhode Island", sourceUrl: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-14/" },
        { item: "Application fee (set locally; most jurisdictions charge about $150)", fee: "$150", sourceUrl: "https://privateinvestigatoredu.org/rhode-island/" },
        { item: "Annual renewal (set locally; typically $150)", fee: "$150", sourceUrl: "https://privateinvestigatoredu.org/rhode-island/" }
      ],
      application: {
        portal: "Direct application to the city or town where the applicant will work (town council, or mayor and city council / license bureau)",
        portalUrl: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/",
        steps: [
          "Identify the local licensing authority for the city or town where you will operate",
          "Document one of the qualifying experience or education paths from Section 5-5-3",
          "Submit the local application with proof of citizenship or resident alien status and character evidence",
          "Arrange the $5,000 surety bond with a surety company authorized in Rhode Island, conditioned for the benefit of persons injured by willful, malicious or wrongful acts",
          "Pay the local application fee and complete any local background requirements",
          "Renew annually with the local authority at least 30 days before expiration"
        ],
        processingTime: "Set locally; the state statute does not publish a processing timeline",
        sourceUrl: "https://privateinvestigatoredu.org/rhode-island/"
      },
      renewal: {
        cycle: "1 year",
        ce: "No continuing education requirement is established in Chapter 5-5",
        fee: "About $150, set by each local licensing authority",
        late: "Renewal is due at least 30 days before the license expiration date",
        sourceUrl: "https://legalcareerpath.com/private-investigator-rhode-island/"
      },
      wages: { soc: "33-9021", socName: "Private Detectives and Investigators", median: "$54,620", p25: "$39,830", p75: "$79,140", national: "$51,220", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9021.00?st=RI" },
      localNuance: "Rhode Island licenses private detectives locally, not at the state level: Chapter 5-5 defines the local licensing authority as the town councils or license boards of the several towns and the mayor and city council or license bureau of a city. This means requirements, fees and timelines vary by city or town, and employees or assistants of a licensed PI are exempt from needing their own license (a common entry path for building the five years of experience). Computer forensic specialists holding a professional certification are treated separately under the statute.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026; the Private Detective Act's core qualification provisions date to Public Laws 1987, chapter 479.", sourceUrl: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3" }
      ],
      stateFaqs: [
        { q: "Who issues private detective licenses in Rhode Island?", a: "Your city or town, not the state. Chapter 5-5 of the Rhode Island General Laws defines the local licensing authority as town councils and license boards for towns, and the mayor and city council or license bureau for cities, so the process and fees differ across Rhode Island's 39 municipalities." },
        { q: "Is there an exam for Rhode Island private detectives?", a: "No. The Private Detective Act requires qualification by experience or education, good moral character and the absence of disqualifying history - there is no written examination in the statute." },
        { q: "Can a criminal justice degree replace experience in Rhode Island?", a: "Yes. Section 5-5-3 accepts a degree in criminal justice from an accredited college or university as an alternative to five years as an investigator or police officer, five years employed by a private detective, or substantively equivalent training or experience." },
        { q: "What bonding and fees does Rhode Island require?", a: "State statute requires every licensee to deliver a $5,000 surety bond to the local licensing authority, conditioned for the benefit of persons injured by the licensee's willful, malicious or wrongful acts. Application and renewal fees are set locally, typically about $150 each, with renewal due at least 30 days before expiration." }
      ],
      sources: [
        { label: "RI Gen. Laws 5-5-2 - Definitions (local licensing authority)", url: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-2/", checkedOn: "2026-10" },
        { label: "RI Gen. Laws 5-5-3 - License qualifications", url: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-3", checkedOn: "2026-10" },
        { label: "RI Gen. Laws 5-5-14 - Bonding requirements", url: "https://law.justia.com/codes/rhode-island/title-5/chapter-5-5/section-5-5-14/", checkedOn: "2026-10" },
        { label: "PrivateInvestigatorEdu.org - How to Become a Private Investigator in Rhode Island", url: "https://privateinvestigatoredu.org/rhode-island/", checkedOn: "2026-10" },
        { label: "LegalCareerPath - How to Become a Private Investigator in Rhode Island", url: "https://legalcareerpath.com/private-investigator-rhode-island/", checkedOn: "2026-10" }
      ]
    }
  }
};
