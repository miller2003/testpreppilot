export default {
  key: "security-guard",
  compiledOn: "2026-10-20",
  states: {
    MT: {
      agency: "Montana Board of Private Security",
      agencyUrl: "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard",
      education: {
        hours: "16",
        breakdown: "Applicants must complete the training program required by ARM 24.182.807 and provide written notice of satisfactory completion on a department form. The board's license page lists 16 hours of training, and proof of training must come from the employing licensed security company.",
        sourceUrl: "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard"
      },
      experience: "Applicants must be currently employed by, or hold a contractual promise of future employment with, a licensed contract security company, proprietary security organization, or electronic security company. The employer verifies employment and the accuracy of the application (ARM 24.182.514).",
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or legal permanent resident",
        other: "No felony conviction and no conviction of a crime involving moral turpitude or the illegal use or possession of a dangerous weapon, absent a full pardon; must be of good moral character (MCA 37-60-303)."
      },
      background: {
        method: "Fingerprint card submitted to the Montana Department of Justice and the FBI under MCA 37-60-304 (ORI MT920073Z)",
        fee: "$27.25 Montana DOJ processing, payable with the fingerprint card",
        disqualifiers: "Felony convictions and crimes involving moral turpitude or illegal use or possession of a dangerous weapon, unless a full pardon or similar relief has been granted",
        sourceUrl: "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html"
      },
      fees: [
        { item: "Application", fee: "$100", sourceUrl: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401" },
        { item: "Renewal", fee: "$100", sourceUrl: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401" },
        { item: "Armed endorsement", fee: "$50", sourceUrl: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401" },
        { item: "Fingerprint background check (Montana DOJ)", fee: "$27.25", sourceUrl: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150" }
      ],
      application: {
        portal: "Montana Board of Private Security online application",
        portalUrl: "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard",
        steps: [
          "Secure employment or a contractual promise of employment with a licensed contract security company, proprietary security organization, or electronic security company.",
          "Complete the 16-hour board-required training program through the employer and obtain proof of satisfactory completion.",
          "Have fingerprints taken on a fingerprint card and mail it with a $27.25 check or money order to Montana Criminal Records in Helena.",
          "Submit the application with a passport-style photo, proof of age and citizenship or permanent residency, and a character reference form.",
          "Allow about 30 days for a routine application; applications requiring board review may take up to 120 days."
        ],
        processingTime: "About 30 days for routine applications; up to 120 days for non-routine applications requiring board review",
        sourceUrl: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150"
      },
      renewal: {
        cycle: "1 year",
        fee: "$100",
        late: "The board's license page lists a renewal window of January 1 through March 1 each year.",
        sourceUrl: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$38,480", p25: "$35,260", p75: "$46,300", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=MT" },
      localNuance: "Montana licenses individual guards only in connection with a licensed employer -- the application is submitted by the sponsoring company, which documents employment and training for each guard. Guards who carry a firearm on duty need a separate $50 armed endorsement and must complete a board-certified firearms training program under MCA 37-60-303(5).",
      recentChanges: [
        { year: 2023, change: "The Board of Private Security fee schedule in ARM 24.182.401 was amended effective December 9, 2023, setting the security guard application fee at $100 and the renewal fee at $100.", sourceUrl: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401" }
      ],
      stateFaqs: [
        { q: "Does Montana require a written exam to become a security guard?", a: "No exam is listed among the security guard license requirements on the board's license page or in ARM 24.182.514. Licensure is based on the 16-hour training program, employment with a licensed company, and the fingerprint background check. The statute allows the board to require exams for other license types, such as process servers and private investigators." },
        { q: "How much does a Montana security guard license cost?", a: "The administrative rule fee schedule lists a $100 application fee and a $100 renewal fee for security guards. Guards who carry a firearm pay an additional $50 for the armed endorsement, and the Montana DOJ fingerprint processing fee is $27.25." },
        { q: "Can I get a Montana guard license without a job offer?", a: "No. ARM 24.182.514 requires each applicant to show current employment or a contractual promise of future employment with a licensed contract security company, proprietary security organization, or electronic security company, and the employer signs and submits the application." },
        { q: "How long does the Montana guard application take?", a: "The board asks applicants to allow about 30 days of processing from the date a complete routine application is received. If the criminal history check returns a record or other irregularity, the application becomes non-routine and may take up to 120 days while the board reviews it." }
      ],
      sources: [
        { label: "Montana Board of Private Security - Private Security Guard license page", url: "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard", checkedOn: "2026-10" },
        { label: "ARM 24.182.401 - Board of Private Security fee schedule", url: "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401", checkedOn: "2026-10" },
        { label: "ARM 24.182.514 - Private security guard licensure rule", url: "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.514", checkedOn: "2026-10" },
        { label: "Montana Code Annotated 37-60-303 - License or registration qualifications", url: "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html", checkedOn: "2026-10" },
        { label: "Montana Board of Private Security application packet (fingerprint and processing instructions)", url: "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150", checkedOn: "2026-10" }
      ]
    },
    NV: {
      agency: "Nevada Private Investigators Licensing Board (PILB)",
      agencyUrl: "https://pilb.nv.gov/",
      exam: {
        vendor: "PILB (board-administered written exam)",
        vendorUrl: "https://pilb.nv.gov/",
        fee: "No separate exam fee is listed on the Work Card checklist; the $85 application processing fee covers application processing.",
        practical: null,
        sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf",
        sourceNote: "Work Card checklist: completion of the security guard exam is required for employment with a security company. The board publishes a work card exam and study guide on pilb.nv.gov."
      },
      education: {
        hours: "0",
        breakdown: "Nevada requires no pre-assignment classroom hours for the unarmed work card. Instead, the state relies on the PILB written exam covering NRS and NAC Chapter 648, and most employers provide their own orientation. Armed work requires separate PILB firearms training.",
        onlineAllowed: "Not applicable -- no state-mandated course exists for the unarmed work card.",
        sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      },
      eligibility: {
        minAge: 18,
        citizenship: "US citizens and non-citizens with a permanent resident card, employment authorization card, or US visa",
        other: "Applicants must be of good moral character; NRS 648.1493 bars registration for felony convictions, crimes involving moral turpitude, and the illegal use or possession of a dangerous weapon."
      },
      background: {
        method: "Live Scan electronic fingerprints through a PILB-authorized fingerprint vendor; results go to the Central Repository for Nevada Records of Criminal History and the FBI",
        fee: "Included in the $85 application processing fee; a fingerprint card submission instead of Live Scan adds $10; fingerprint vendor and photo costs are separate",
        disqualifiers: "Felony convictions, crimes involving moral turpitude, and illegal use or possession of a dangerous weapon (NRS 648.1493)",
        sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      },
      fees: [
        { item: "Application processing (Live Scan fingerprints)", fee: "$85", sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf" },
        { item: "Expedited application processing", fee: "$129 ($85 plus $44 expedite fee)", sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf" },
        { item: "Fingerprint card submission (only if instructed)", fee: "$10 additional", sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf" }
      ],
      application: {
        portal: "PILB online application portal",
        portalUrl: "https://pilb.nv.gov/",
        steps: [
          "Gather two forms of identification (driver license or state/federal ID plus Social Security card, birth certificate, or US passport) and one 2x2 inch passport-style color photo.",
          "Submit the online application and pay the $85 standard or $129 expedited processing fee before being fingerprinted.",
          "Complete Live Scan fingerprints at an authorized vendor using the payment confirmation or stamped electronic submission form.",
          "Complete the PILB security guard written exam on NRS and NAC Chapter 648; the board publishes the exam and a study guide.",
          "Receive the provisional work authorization by email after initial background review (about 2 weeks standard, 3-4 business days expedited); the permanent card follows FBI fingerprint results, which can take 30-90 days."
        ],
        processingTime: "Provisional authorization in about 2 weeks standard or 3-4 business days expedited; permanent card 30-90 days after fingerprint results",
        sourceUrl: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      },
      renewal: {
        cycle: "5 years",
        sourceUrl: "https://pilb.nv.gov/"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$37,310", p25: "$34,610", p75: "$44,600", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=NV" },
      localNuance: "Nevada registers guards with PILB but has no pre-assignment training mandate for the unarmed card -- the written exam carries the regulatory weight. Security work inside casinos adds a separate gaming employee registration through the Nevada Gaming Control Board. Armed work requires permanent work card status, employer sponsorship, PILB firearms training, and requalification on a recurring basis.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://pilb.nv.gov/" }
      ],
      stateFaqs: [
        { q: "Do I need training before applying for a Nevada guard card?", a: "No. Nevada requires no classroom hours for the unarmed PILB work card. Applicants must instead pass the PILB written exam on NRS and NAC Chapter 648, and employers typically provide their own post-specific orientation after hire." },
        { q: "How much is the Nevada work card and how fast is it?", a: "The application processing fee is $85 with electronic Live Scan fingerprints, or $129 expedited ($85 plus a $44 expedite fee). PILB emails a provisional work authorization in about 2 weeks standard or 3-4 business days expedited; the permanent card waits on FBI fingerprint results, which can take 30-90 days." },
        { q: "How long is a Nevada guard card valid?", a: "The work card registration runs five years, one of the longest terms in the country. Armed certification is a separate credential that requires recurring firearms requalification in addition to the base card." },
        { q: "Can I work casino security with just a PILB card?", a: "No. Casino security positions require an additional gaming employee registration through the Nevada Gaming Control Board on top of the PILB work card. The PILB card covers contract security work under a licensed private patrol operator throughout Nevada." }
      ],
      sources: [
        { label: "Nevada PILB - Work Card application checklist (fees, exam, fingerprint requirements)", url: "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf", checkedOn: "2026-10" },
        { label: "Nevada PILB - Applicant Work Card application and livescan vendor list", url: "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Forms/PILB_Applicant_Work_Card_Application(1).pdf", checkedOn: "2026-10" },
        { label: "PILB main site (work card forms, exam and study guide downloads)", url: "https://pilb.nv.gov/", checkedOn: "2026-10" },
        { label: "Nevada guard card requirements overview (secondary)", url: "https://novagems.com/nevada-security-guard-card-requirements/", checkedOn: "2026-10" }
      ]
    },
    NJ: {
      agency: "New Jersey State Police - Private Detective Unit (Security Officer Registration Act)",
      agencyUrl: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml",
      education: {
        hours: "24 (initial); 8 (renewal refresher)",
        breakdown: "Applicants must attend a 24-hour Security Officer Registration Act training course taught by an NJ State Police certified security officer instructor within 30 days of applying. Renewal requires an 8-hour refresher course from a certified instructor before the certification expires.",
        onlineAllowed: "The course must be taken with an NJSP-certified instructor from the instructor registry; the registry is searchable by zip code, county, and instructor name.",
        sourceUrl: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
      },
      eligibility: {
        minAge: 18,
        other: "No person convicted of a crime of the first, second, third, or fourth degree, as shown by the criminal history record background check, may be issued a security officer registration."
      },
      background: {
        method: "Fingerprinting through the IdentoGO link provided inside the online SORA application (out-of-state applicants within 20 miles of the border or beyond use the same link)",
        fee: "$70.25 per the NJSP SORA FAQ",
        disqualifiers: "Conviction of a crime of the first, second, third, or fourth degree",
        sourceUrl: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml"
      },
      fees: [
        { item: "Application (non-refundable)", fee: "$75", sourceUrl: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf" },
        { item: "Fingerprinting", fee: "$70.25", sourceUrl: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf" },
        { item: "Renewal (2-year security officer certification)", fee: "$85.30", sourceUrl: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf" }
      ],
      application: {
        portal: "NJSP SORA online application portal (Security Officer, Instructor, Agency Owner and Bounty Hunter Applications)",
        portalUrl: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml",
        steps: [
          "Review the SORA statute and the security officer rules on the NJSP SORA page, then open the online application as a first-time applicant using a desktop computer.",
          "Pay the non-refundable $75 application fee by Visa, MasterCard, or Discover and print the 30-day temporary certificate.",
          "Schedule fingerprinting through the IdentoGO link embedded in the application.",
          "Contact an NJSP-certified instructor from the registry and complete the 24-hour training course within 30 days of the application date.",
          "Both fingerprinting and the 24-hour course must be finished within 30 days or a new application and fee are required."
        ],
        processingTime: "Certification is issued after the criminal history check, fingerprint results, and instructor-uploaded training results and photo are complete",
        sourceUrl: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml"
      },
      renewal: {
        cycle: "2 years (unarmed); 1 year (armed)",
        ce: "8-hour refresher course from a SORA certified instructor completed before expiration; the instructor uploads training results and the photo",
        fee: "$85.30",
        late: "Renewal notices are emailed 90, 60, and 30 days before expiration to the address on the applicant profile.",
        sourceUrl: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
      },
      reciprocity: {
        rule: "No reciprocity with other states -- the NJSP states SORA registration cannot be substituted with an out-of-state security credential.",
        agreements: null,
        sourceUrl: "https://njsp.njoag.gov?p=5546/"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$38,880", p25: "$34,770", p75: "$48,120", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=NJ" },
      localNuance: "New Jersey has no state licensing exam; the 24-hour SORA course is the gateway and instructors upload test results to NJSP. Armed security officers need a separate New Jersey Concealed Carry Permit or Retired Police Officers Program status -- the SORA certification alone does not authorize firearm possession -- and renew annually. Active law enforcement officers are exempt from the 24-hour course but not from fingerprinting, and lose the exemption on retirement.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml" }
      ],
      stateFaqs: [
        { q: "What does SORA registration cost in New Jersey?", a: "The application fee is a non-refundable $75, fingerprinting costs $70.25, and renewal is $85.30 for the two-year certification. All fees are paid online by credit or debit card during the NJSP application process." },
        { q: "Is there a state exam for New Jersey security officers?", a: "No standalone state exam is administered. Instead, every applicant must complete the 24-hour SORA training course with an NJSP-certified instructor, and the instructor uploads the training results to the State Police." },
        { q: "What happens if I miss the 30-day SORA deadline?", a: "Fingerprinting and the 24-hour training course must both be completed within 30 days of the application date. If either is missed, the application lapses and a new application with a new $75 fee must be submitted." },
        { q: "Can I carry a firearm as a New Jersey security officer?", a: "Only with a separate New Jersey Concealed Carry Permit or Retired Police Officers Program status -- the SORA armed certification alone does not authorize firearm possession. Armed certifications renew every year rather than every two years, with the 8-hour refresher course required each cycle." }
      ],
      sources: [
        { label: "NJSP SORA / Security Officer Help Page (application, fingerprinting, renewal)", url: "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml", checkedOn: "2026-10" },
        { label: "NJSP SORA FAQ (fees, 24-hour course, 30-day rule, renewal)", url: "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf", checkedOn: "2026-10" },
        { label: "NJSP SORA qualifications page (yellow card, armed red card, disqualifiers)", url: "https://njsp.njoag.gov?p=5546/", checkedOn: "2026-10" },
        { label: "Security Officer Registration Act statute text", url: "https://www.nj.gov/njsp/private-detective/pdf/sora/060106_sora.pdf", checkedOn: "2026-10" }
      ]
    },
    NM: {
      agency: "New Mexico Regulation and Licensing Department - Private Investigations Advisory Board",
      agencyUrl: "https://www.rld.nm.gov?p=15797/",
      exam: {
        vendor: "New Mexico RLD (department-issued jurisprudence examination)",
        vendorUrl: "https://www.rld.nm.gov?p=15797/",
        fee: "No separate exam fee is listed in the registration application materials.",
        practical: null,
        sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf",
        sourceNote: "The security guard registration instructions list the department-issued jurisprudence examination for security guards among the mandatory submission documents. The department does not publish a question count or passing score in the application packet."
      },
      education: {
        hours: "8 (Level 1); 20 (Level 2); 16 additional (Level 3)",
        breakdown: "Level 1 covers the unarmed guard role; Level 2 adds at least 20 hours plus weapons training for the specific equipment carried, such as an electronic control device; Level 3 adds at least 16 more hours with firearms training and qualification. Training is delivered by RLD-approved instructors, who complete the department's Security Guard Training Verification form.",
        onlineAllowed: "Approved training is delivered in person by RLD-approved instructors or approved institutions.",
        apprenticeship: "Level 3 applicants must also pass a psychological evaluation by a licensed psychologist, with the report sent directly to RLD.",
        sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      eligibility: {
        other: "Level 3 (firearm) applicants must receive a positive evaluation by a licensed psychologist determining mental suitability to carry a firearm, and must be legally eligible to possess firearms. Applications require disclosure of prior licensing, military discharge status, and impairment or substance questions under penalty of perjury."
      },
      background: {
        method: "Electronic fingerprinting through 3M Cogent (register online at the Gemalto NM portal first; ORI NM920250Z); FBI and New Mexico state criminal history results are sent directly to RLD",
        fee: "$44 for the FBI and state record check",
        disqualifiers: "The application requires sworn disclosure of criminal, licensing-discipline, and substance-related history; false or dishonest answers are grounds for denial or revocation.",
        sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      fees: [
        { item: "Registration application (Level 1)", fee: "$75", sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf" },
        { item: "Registration application (Level 2)", fee: "$75", sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf" },
        { item: "Registration application (Level 3)", fee: "$150", sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf" },
        { item: "Fingerprint background check (state and FBI)", fee: "$44", sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf" }
      ],
      application: {
        portal: "Paper application filed with RLD Boards and Commissions Division, Private Investigations Advisory Board (Santa Fe)",
        portalUrl: "https://www.rld.nm.gov?p=15797/",
        steps: [
          "Choose the registration level that matches the intended work: Level 1 unarmed, Level 2 with non-lethal equipment, or Level 3 with a firearm.",
          "Complete the required in-person training with an RLD-approved instructor and obtain the Training Verification form.",
          "Register at the Gemalto/Cogent NM portal and complete electronic fingerprinting ($44) with ORI NM920250Z; the background report is valid for 90 days.",
          "Submit the application with the fee, two 2x2 inch passport-style photos stapled to the form, the jurisprudence examination, and the RLD release form.",
          "Wait for the registration card -- a guard cannot work until the card is issued and must work under the direct supervision of a licensed private patrol operator or private patrol operations manager."
        ],
        processingTime: "Not published in the application materials",
        sourceUrl: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      renewal: {
        ce: "Proof of continuing education from an approved source is required for renewal; firearms requalification does not count toward the hours.",
        sourceUrl: "https://www.rld.nm.gov?p=15797/"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$43,320", p25: "$35,570", p75: "$53,530", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=NM" },
      localNuance: "New Mexico uses a three-level guard system rather than a simple unarmed/armed split, and the application packet states plainly that a guard cannot be placed on a post until registered and must remain under the direct supervision of a licensed private patrol operator. Level 3 is unusual nationally in requiring a psychologist's fitness evaluation before initial firearm registration.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://www.rld.nm.gov?p=15797/" }
      ],
      stateFaqs: [
        { q: "What are the three New Mexico security guard levels?", a: "Level 1 is unarmed and requires at least 8 hours of training; Level 2 allows approved non-lethal equipment after at least 20 hours plus weapon-specific training; Level 3 permits carrying a firearm after 16 additional hours, firearms qualification, and a psychological evaluation. Guards progress through the levels as their posts require." },
        { q: "How much does New Mexico guard registration cost?", a: "The current registration form lists $75 for Level 1, $75 for Level 2, and $150 for Level 3, all non-refundable. Electronic fingerprinting for the state and FBI background check adds $44." },
        { q: "Is there an exam for New Mexico security guards?", a: "Yes. Every security guard applicant must complete the department-issued jurisprudence examination on New Mexico law and rules and submit it with the registration application. RLD does not publish a question count or passing score in the application packet." },
        { q: "When can a New Mexico guard start working?", a: "Not before the registration card arrives. The application states that a guard cannot work as a security guard until RLD has issued the registration card, and the guard must be under the direct supervision of a licensed private patrol operator or private patrol operations manager." }
      ],
      sources: [
        { label: "NM RLD Private Investigations overview and contacts", url: "https://www.rld.nm.gov?p=15797/", checkedOn: "2026-10" },
        { label: "NM RLD Security Guard Registration initial application (Levels 1-3, fees)", url: "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Security_Guard_Resigration_Initial_Application_05.2019.pdf", checkedOn: "2026-10" },
        { label: "NM RLD Security Guard Registration instructions (levels, fingerprints, jurisprudence exam)", url: "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf", checkedOn: "2026-10" },
        { label: "NM RLD Private Patrol Operator license instructions (fingerprint process background)", url: "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PPO%20application.pdf", checkedOn: "2026-10" }
      ]
    },
    NY: {
      agency: "New York Department of State - Division of Licensing Services",
      agencyUrl: "https://dos.ny.gov/frequently-asked-questions-security-guard",
      education: {
        hours: "8 + 16 + 8 annual (47 for armed)",
        breakdown: "An 8-hour pre-assignment course at a DCJS-approved school is required before applying. After employment begins, a 16-hour on-the-job training course must be completed within 90 days. Every year afterward, guards must complete an 8-hour annual in-service course. Armed registration additionally requires a 47-hour firearms course.",
        onlineAllowed: "Courses must be taken at security guard training schools approved by the Division of Criminal Justice Services (DCJS).",
        sourceUrl: "https://dos.ny.gov/frequently-asked-questions-security-guard"
      },
      eligibility: {
        minAge: 18,
        other: "Applicants need a current New York photo driver license or non-driver ID (or an image-only DMV photo capture) so the registration card can be produced from the DMV photo on file. A serious offense conviction as defined in General Business Law 89-f bars registration."
      },
      background: {
        method: "Electronic fingerprints through IdentoGO (service code 1545R1) for a state and FBI criminal history check",
        fee: "$75 criminal justice fee plus $12 FBI fee plus the vendor's fee",
        disqualifiers: "Conviction of a serious offense as defined in General Business Law 89-f, or a misdemeanor the Secretary of State finds directly related to security work",
        sourceUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
      },
      fees: [
        { item: "Registration (2 years)", fee: "$36", sourceUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801" },
        { item: "Fingerprinting (criminal justice fee + FBI fee + vendor fee)", fee: "$75 + $12 + vendor charge", sourceUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801" },
        { item: "Renewal (2 years)", fee: "$25", sourceUrl: "https://dos.ny.gov/frequently-asked-questions-security-guard" },
        { item: "Amendment / duplicate / change of employer", fee: "$25", sourceUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801" }
      ],
      application: {
        portal: "Employee Statement and Security Guard Application (DOS-1206-a), mailed to NYS Department of State, Division of Licensing Services, PO Box 22052, Albany, NY 12201-2052",
        portalUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801",
        steps: [
          "Complete the 8-hour pre-assignment training course at a DCJS-approved school and keep the certificate.",
          "Schedule electronic fingerprinting with IdentoGO using service code 1545R1 and keep the receipt.",
          "File the DOS-1206-a application with the 8-hour certificate, fingerprint receipt, signed DMV consent form, a current NY photo ID or DMV image-only receipt, and the $36 fee.",
          "If employment begins when the application is filed, the employer completes the Notice of Employment section.",
          "After hire, complete the 16-hour on-the-job course within 90 days, then the 8-hour annual in-service course every year."
        ],
        processingTime: "Average processing time 3-5 days",
        sourceUrl: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
      },
      renewal: {
        cycle: "2 years",
        ce: "8-hour annual in-service training course every year, independent of the two-year renewal cycle",
        fee: "$25",
        late: "Renewal forms are mailed to guards 90 days before expiration and must be returned by the expiration date.",
        sourceUrl: "https://dos.ny.gov/frequently-asked-questions-security-guard"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$44,240", p25: "$37,210", p75: "$51,850", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=NY" },
      localNuance: "New York splits authority between two agencies: the Department of State registers guards while DCJS approves the training schools and course content. Armed registration is a separate card requiring the 47-hour firearms course plus a valid New York pistol license, and active police officers are exempt from registration while retired officers must register and complete all training.",
      recentChanges: [
        { year: null, change: "No regulatory changes recorded as of October 2026.", sourceUrl: "https://dos.ny.gov/frequently-asked-questions-security-guard" }
      ],
      stateFaqs: [
        { q: "How much does a New York security guard registration cost?", a: "The state fee is $36 for a two-year registration, plus fingerprinting charges of $75 criminal justice fee, $12 FBI fee, and the IdentoGO vendor fee. Renewals cost $25 every two years." },
        { q: "Is there a state exam for New York security guards?", a: "No. New York does not administer a licensing exam for unarmed guard registration. The state instead enforces a training ladder: 8-hour pre-assignment before applying, 16-hour on-the-job within 90 days of hire, and 8 hours of in-service training annually." },
        { q: "What does it take to be an armed guard in New York?", a: "Armed work requires a separate Special Armed Guard registration: the 47-hour firearms course certificate (or a DCJS waiver) plus a valid New York pistol license. Armed guards also complete the 8-hour annual in-service training for armed guards each year." },
        { q: "Do police officers need a New York guard registration?", a: "Active police officers are exempt from registration and training when doing security work, though they must complete an Employee Statement when working for a contractual entity. Retired and separated officers are treated as civilians and must register, fingerprint where applicable, and complete all training." }
      ],
      sources: [
        { label: "NYS Department of State - Security Guard FAQ (training, fees, armed requirements)", url: "https://dos.ny.gov/frequently-asked-questions-security-guard", checkedOn: "2026-10" },
        { label: "NY Business Express - Security Guard Application DOS1206-a (fees, processing)", url: "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801", checkedOn: "2026-10" },
        { label: "Guard Card Guide - New York requirements summary (secondary)", url: "https://www.guardcardguide.com/states/new-york", checkedOn: "2026-10" },
        { label: "Radiant Training - NY unarmed registration step-by-step (secondary)", url: "https://www.radianttraining.com/blog/how-to-get-new-york-security-guard-license", checkedOn: "2026-10" }
      ]
    },
    NC: {
      agency: "North Carolina Private Protective Services Board (NC Department of Public Safety)",
      agencyUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration",
      education: {
        hours: "16 (unarmed); +20 (armed); 4 (armed renewal)",
        breakdown: "Unarmed applicants must complete a 16-hour unarmed security guard course dated less than one year before the registration application. Armed applicants additionally complete a 20-hour armed course dated less than 90 days before applying (exemptions exist under NCGS 74C-13.1). Armed renewals require a 4-hour armed renewal course dated less than 180 days before the renewal application.",
        onlineAllowed: "Instruction is delivered by Board-certified trainers; a searchable list of certified trainers is published by the Board.",
        sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      eligibility: {
        minAge: 18,
        citizenship: "US citizen or resident alien",
        other: "Applicants must be of good moral character and temperate habits. Under 14B NCAC 16 .0703, convictions within the last five years involving firearms, controlled substances, felonious assault or violence, breaking and entering, burglary, larceny, or addiction are prima facie evidence against good moral character."
      },
      background: {
        method: "Completed FD-258 fingerprint card mailed to the Board office plus an Authority for Release of Information (fingerprints) form; a 60-month online criminal history record check from CRC.com dated less than 60 days before the application",
        fee: "$38 fingerprint fee (new registrations)",
        disqualifiers: "Recent convictions involving firearms, drugs, violent offenses, burglary or larceny, judicial findings of incompetence, involuntary commitment, or prior revocation of a registration (14B NCAC 16 .0703)",
        sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      fees: [
        { item: "Unarmed guard - new registration", fee: "$30 application + $38 fingerprint", sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration" },
        { item: "Unarmed guard - renewal", fee: "$30", sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration" },
        { item: "Unarmed guard - late renewal (within 90 days of expiration)", fee: "$25 late fee in addition to the renewal fee", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" },
        { item: "Unarmed guard - transfer", fee: "$15 ($45 for transfer and renew combined)", sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration" },
        { item: "Armed guard - new registration", fee: "$45 application + $38 fingerprint", sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration" }
      ],
      application: {
        portal: "Permitium online registration application, submitted by the employing licensed company",
        portalUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration",
        steps: [
          "Get hired by a licensed private protective services company -- individuals cannot submit their own registration applications.",
          "Complete the 16-hour unarmed course (and the 20-hour armed course for armed work) with a Board-certified trainer.",
          "The employer submits the Permitium application within 30 days of hire, uploading the digital photo, training certificate, 60-month CRC.com criminal record check, affidavit and public notice statement, and release form.",
          "Mail the completed FD-258 fingerprint card and the Permitium application receipt to the Board office.",
          "Unarmed guards may work on a probationary basis for 20 consecutive calendar days while registration is arranged; most applications are processed within 45 days and ID cards are mailed to the company within 60 days."
        ],
        processingTime: "Most registrations processed within 45 days; ID cards mailed within 60 days (fingerprint processing by the NC SBI can extend new registrations)",
        sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions"
      },
      renewal: {
        cycle: "1 year",
        ce: "Armed renewals require a 4-hour armed security guard course dated less than 180 days before the renewal application; unarmed renewals require a current 12-month criminal record check.",
        fee: "$30 unarmed / $45 armed",
        late: "Unarmed late renewals are accepted within 90 days of expiration for a $25 late fee; armed registrations cannot be renewed late.",
        sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      reciprocity: {
        rule: "Out-of-state security guard registrations and licenses are not valid in North Carolina; guards from other states must be registered through a North Carolina licensee.",
        agreements: null,
        sourceUrl: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,010", p25: "$30,640", p75: "$43,610", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=NC" },
      localNuance: "North Carolina registers the employee through the employer: the licensed company owns the guard card (it is mailed to the company and remains company property), submits every application and renewal, and must register even guards who quit within 30 days. Armed guards carrying concealed must upload a copy of a valid concealed carry permit.",
      recentChanges: [
        { year: 2025, change: "Chapter 16 rules of the Private Protective Services Board (14B NCAC 16), which govern guard registration standards and fees, were amended effective November 1, 2025, following earlier amendments effective September 1, 2024 and January 1, 2024.", sourceUrl: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf" }
      ],
      stateFaqs: [
        { q: "How much does it cost to register as a security guard in North Carolina?", a: "A new unarmed registration costs $30 for the application plus $38 for fingerprints (about $68 total before processing fees), and a new armed registration costs $45 plus $38 (about $83 total). Renewals are $30 unarmed and $45 armed each year." },
        { q: "Can I apply for my own North Carolina guard registration?", a: "No. Individuals cannot submit their own applications -- the licensed company a guard works for must submit the registration within 30 days of hire through Permitium. Unarmed guards may work as probationary employees for 20 consecutive calendar days first." },
        { q: "How long does North Carolina guard registration take?", a: "Most applications are processed within 45 days and ID cards are mailed to the employing company within 60 days. New registrations can take longer because the NC SBI must process the fingerprint check." },
        { q: "Does North Carolina accept guard cards from other states?", a: "No. The Board states plainly that out-of-state security guard registrations and licenses are not transferable or valid in North Carolina; guards must be registered through a North Carolina licensee." }
      ],
      sources: [
        { label: "NC Private Protective Services Board - Security Employee Registration (fees, training, documents)", url: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration", checkedOn: "2026-10" },
        { label: "NC Private Protective Services Board - FAQ (processing times, probationary guards, reciprocity)", url: "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions", checkedOn: "2026-10" },
        { label: "14B NCAC Chapter 16 - Private Protective Services Board rules (fees, minimum standards, amendment history)", url: "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf", checkedOn: "2026-10" },
        { label: "50-state guard licensing comparison including NC training hours (secondary)", url: "https://guardtraining.net/?p=987521631/", checkedOn: "2026-10" }
      ]
    },
    ND: {
      agency: "North Dakota Private Investigation and Security Board",
      agencyUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      exam: {
        vendor: "ND Private Investigation and Security Board (board-administered exam in Bismarck)",
        vendorUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        fee: "$100 application and testing fee for the security provider license",
        practical: null,
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        sourceNote: "The exam applies to the licensed security provider credential, not to individual security officer registrations. Exams are scheduled individually with the Executive Director once application requirements are met."
      },
      education: {
        hours: "12 (Apprentice); 32 classroom + 1,000 field (Security Officer); 80 classroom + 4,000 field (Commissioned)",
        breakdown: "North Dakota uses a tiered officer structure: Apprentice Security Officer requires 12 hours of classroom instruction or 12 hours of field service; Security Officer requires 1,000 hours of field service and 32 classroom hours; Commissioned Security Officer requires 4,000 hours of field service and 80 classroom hours. Armed Security Officer status requires at least Security Officer level plus the weapons requirements.",
        apprenticeship: "An applicant may qualify as a security provider without commissioned officer status with 4,000 hours of security experience and 80 classroom hours, substantiated by third-party documentation.",
        sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms"
      },
      experience: "The tier structure doubles as the experience ladder: 12 field hours (apprentice), 1,000 field hours (security officer), and 4,000 field hours (commissioned officer). Applicants for the licensed security provider credential must be commissioned officers or document 4,000 hours of experience with 80 classroom hours.",
      background: {
        method: "Two legible fingerprint cards submitted with the application (the Board provides cards free on request); criminal record search through the North Dakota BCI and the FBI",
        fee: "$40 criminal records search fee",
        disqualifiers: "Not itemized in the application materials reviewed; applications with unreadable prints or improper codes are rejected and returned.",
        sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms"
      },
      fees: [
        { item: "Application and testing (licensed security provider)", fee: "$100", sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions" },
        { item: "Criminal records search (BCI and FBI)", fee: "$40", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" },
        { item: "Apprentice / Security / Commissioned Officer registration", fee: "$45", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" },
        { item: "Armed certification", fee: "$45", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" },
        { item: "Licensed Security Provider", fee: "$225", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" },
        { item: "Licensed Security Agency", fee: "$450", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" },
        { item: "Duplicate license or registration", fee: "$30", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" }
      ],
      application: {
        portal: "Paper applications filed with the Board office in Bismarck",
        portalUrl: "http://www.pisb.nd.gov/licensing/application-forms",
        steps: [
          "Choose the correct tier: Apprentice Security Officer, Security Officer, or Commissioned Security Officer, and complete the matching classroom and field-service hours.",
          "Complete pages 1, 2, 2a, and 3 of the application packet and attach documentation of hours and training.",
          "Submit two legible fingerprint cards and email one passport-sized photo of the applicant to the Board's photo address when the application goes in.",
          "For the licensed security provider credential, pass the board exam in Bismarck (scheduled individually with the Executive Director) and provide proof of Secretary of State business registration, insurance, and agency status fees.",
          "Allow approximately 30 business days for processing once all applications, fees, and documentation are received."
        ],
        processingTime: "About 30 business days with a complete application",
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      renewal: {
        cycle: "1 year",
        fee: "Per the current fee schedule: officer registration $45, armed certification $45, licensed security provider $225, security agency $450",
        late: "Licenses expire September 30 of each year; administrative rules provide for late fees on individual license and registration renewals.",
        sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms"
      },
      reciprocity: {
        rule: "North Dakota has no reciprocity -- the Board states that applicants from other states must apply for a North Dakota license and meet all qualifications.",
        agreements: null,
        sourceUrl: "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$39,310", p25: "$34,960", p75: "$45,550", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=ND" },
      localNuance: "North Dakota runs a tiered officer ladder (Apprentice, Security Officer, Commissioned Security Officer) with escalating classroom and field-hour requirements, and every employee of a security agency must register with the Board individually. A concealed weapons or constitutional carry permit does not authorize carrying a weapon while providing security -- armed certification requires passing the board's weapons exam.",
      recentChanges: [
        { year: 2025, change: "The Board published a new fee schedule effective April 22, 2025, setting officer registration at $45, armed certification at $45, criminal record search at $40, licensed security provider at $225, and licensed security agency at $450.", sourceUrl: "http://www.pisb.nd.gov/licensing/application-forms" }
      ],
      stateFaqs: [
        { q: "What are North Dakota's security officer tiers?", a: "Apprentice Security Officer requires 12 hours of classroom instruction or 12 hours of field service; Security Officer requires 1,000 field hours plus 32 classroom hours; Commissioned Security Officer requires 4,000 field hours plus 80 classroom hours. Armed status is available once a guard reaches at least Security Officer level." },
        { q: "Does a North Dakota concealed carry permit let me work armed security?", a: "No. The Board states that concealed weapons and constitutional carry permits do not authorize carrying a weapon while providing security or investigative services. Armed certification requires passing the weapons exam and meeting the state's weapons requirements." },
        { q: "Does North Dakota have reciprocity for security licenses?", a: "No. The Board's FAQ answers directly that North Dakota has no reciprocity; out-of-state licensees must apply in North Dakota and meet all qualifications, including the exam for provider-level credentials." },
        { q: "When do North Dakota security licenses expire?", a: "Licenses and armed certifications expire September 30 of each year, so renewals run on an annual cycle. The Board also noted for the 2026 renewal round that it uses photos already on file rather than requiring new photographs." }
      ],
      sources: [
        { label: "ND Private Investigation and Security Board - FAQ (fees, exam, reciprocity, process)", url: "https://www.pisb.nd.gov/licensing/frequently-asked-questions", checkedOn: "2026-10" },
        { label: "ND PISB - Application Forms and fee breakdown effective 4-22-2025", url: "http://www.pisb.nd.gov/licensing/application-forms", checkedOn: "2026-10" },
        { label: "North Dakota Administrative Code 93-02-03-06 - Fees (exam and registration fees)", url: "https://ndlegis.gov/admcode/arc201310350.pdf", checkedOn: "2026-10" },
        { label: "N.D. Admin Code 93-02-03-06 via Cornell LII (current fee rule text)", url: "https://www.law.cornell.edu/regulations/north-dakota/N-D-A-C-93-02-03-06", checkedOn: "2026-10" }
      ]
    },
    OH: {
      agency: "Ohio Department of Public Safety - Private Investigator Security Guard Services (PISGS)",
      agencyUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license",
      exam: {
        vendor: "Ohio PISGS (qualifying agent examination)",
        vendorUrl: "https://pisgs.ohio.gov/toolkit/ilo_program.stm",
        fee: "$25 exam application; $25 retest fee",
        practical: null,
        sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees",
        sourceNote: "The exam applies to the company qualifying agent under ORC 4749.03, not to individual guard employees. Individual security guard employees take no state exam; they are registered by their employer."
      },
      experience: "The path to work runs through the employer: Ohio licenses security guard companies (Class C) and requires each company to have a Qualifying Agent with at least two continuous years of investigatory or security services work for a public agency or a licensed provider, or equivalent experience as determined by rule (ORC 4749.03).",
      eligibility: {
        other: "Individual officers are not separately licensed by the state. To work as a guard, a person must be employed by a PISGS-licensed provider, which registers the employee with the state and ensures the employee passes the criminal background check."
      },
      background: {
        method: "The company's Qualifying Agent undergoes a criminal background check and Rap Back enrollment; registered employees are monitored by the state Rapback system, which notifies PISGS of arrests",
        fee: "$10 Rap Back fee for the qualifying agent (included in the $35 QA initial fee)",
        disqualifiers: "Registrants must certify at each renewal that they have not been convicted of or pled guilty to a disqualifying offense defined in rule 4501:7-1-19 of the Administrative Code during the previous registration year.",
        sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-16"
      },
      fees: [
        { item: "Provider license application (Class A, B, or C)", fee: "$200", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" },
        { item: "Qualifying Agent initial application ($25 + $10 Rap Back)", fee: "$35", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" },
        { item: "Registrant (guard employee) initial registration", fee: "$40", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" },
        { item: "Registrant renewal (annual)", fee: "$25", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" },
        { item: "Firearm-bearer (FAB) endorsement", fee: "$15", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" },
        { item: "Provider license renewal (2 years)", fee: "$550", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees" }
      ],
      application: {
        portal: "PISGS Online Services (company license applications and employee registrations)",
        portalUrl: "https://pisgs.ohio.gov/toolkit/ilo_program.stm",
        steps: [
          "Get hired by a company licensed by PISGS for Class C security services -- providing security services without a license is a crime, and only licensed companies can register employees.",
          "The employer submits the employee registration application with the required photo and $40 fee; employees carry a current security identification card on duty.",
          "Applicants for armed work (firearm-bearer status) complete the required firearms training and documentation in addition to the FAB endorsement.",
          "The employer must register employees within the statutory window after hire, and guard registrations renew annually on the anniversary of issuance.",
          "Companies must hold comprehensive general liability insurance at all times (at least $100,000 per person and $300,000 per occurrence for bodily injury, and $100,000 property damage under ORC 4749.03)."
        ],
        processingTime: "Not published as a fixed figure by PISGS; companies cannot work, advertise, or solicit until PISGS approval is granted",
        sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license"
      },
      renewal: {
        cycle: "1 year (employee registration, anniversary date); 2 years (company license)",
        ce: "No state continuing-education hours are required for individual registrants; registrants certify annually that no disqualifying offense occurred in the prior year.",
        fee: "$25 registrant renewal; $550 company license renewal",
        sourceUrl: "http://codes.ohio.gov/oac/4501:7-1-16"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$35,770", p25: "$31,140", p75: "$44,500", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=OH" },
      localNuance: "Ohio is one of the states that licenses security guard companies rather than individual officers: the individual's legal credential is a PISGS employee registration obtained by the employer, renewed annually. Armed employees need the Firearm-bearer (FAB) endorsement with required training, and the state's Rapback system continuously monitors registrants for new arrests.",
      recentChanges: [
        { year: 2025, change: "Legislation effective in 2025 (House Bill 238, amending ORC 4749.03) moved PISGS provider licenses to a two-year cycle; the license renewal fee increased to $550 per license plus $10 per Qualifying Agent to reflect the two-year expiration, with 2026 renewals due before March 1, 2026.", sourceUrl: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/news/mid-week-minute-12032025" }
      ],
      stateFaqs: [
        { q: "Does Ohio license individual security guards?", a: "No. Ohio licenses security guard companies (Class C license) through PISGS, and the licensed company registers each employee with the state for a $40 initial fee. The individual guard's credential is the registration identification card, which must be carried on duty and renewed annually." },
        { q: "What does it cost a guard to register in Ohio?", a: "Employee registration costs $40 initially and $25 per year to renew, paid through the employer's PISGS Online Services account. Armed employees add a $15 Firearm-bearer endorsement and must complete the required firearms training." },
        { q: "What changed with Ohio security company licenses in 2025?", a: "Legislation effective in 2025 extended PISGS provider licenses to a two-year term and raised the company renewal fee to $550 per license plus $10 per Qualifying Agent. Licenses expiring in 2026 had to be renewed before March 1, 2026, or all registered employees are terminated." },
        { q: "How does someone become a security guard in Ohio?", a: "The practical path is to apply to one of the more than 800 PISGS-licensed providers. Once hired, the company registers you with PISGS, you complete the background check and photo requirements, and you carry the state-issued security identification card. Unregistered work is not permitted." }
      ],
      sources: [
        { label: "Ohio PISGS - Fees page (all transaction fees)", url: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees", checkedOn: "2026-10" },
        { label: "Ohio Homeland Security - Apply for a License (licensing structure, insurance, exemptions)", url: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license", checkedOn: "2026-10" },
        { label: "Ohio Revised Code Chapter 4749 - Private Investigators; Security Services", url: "http://codes.ohio.gov/orc/4749", checkedOn: "2026-10" },
        { label: "Ohio Administrative Code 4501:7-1-16 - Renewal of registrations", url: "http://codes.ohio.gov/oac/4501:7-1-16", checkedOn: "2026-10" },
        { label: "PISGS news - License Renewal Season 2026 (two-year licenses, $550 renewal fee)", url: "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/news/mid-week-minute-12032025", checkedOn: "2026-10" }
      ]
    },
    OK: {
      agency: "Oklahoma Council on Law Enforcement Education and Training (CLEET) - Private Security Division",
      agencyUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html",
      exam: {
        vendor: "Oklahoma CareerTech Testing Center (CLEET private security exams)",
        vendorUrl: "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html",
        parts: [
          { name: "Phase I & II - Unarmed Security Guard exam", questions: "50 scored", time: "75 minutes", pass: "70%" },
          { name: "Phase IV - Armed Security Guard firearms exam", questions: "50 scored", time: "75 minutes", pass: "70%" }
        ],
        fee: "$50 per exam (onsite at CareerTech testing locations)",
        practical: "The armed (Phase IV) track includes firearms training with range qualification; Taser and OC training hours vary by course.",
        languages: ["English"],
        sourceUrl: "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf",
        sourceNote: "CareerTech Health & Professional Certification Testing Manual, Private Security section: exam numbers 5101 (Phase I & II unarmed) and 5153 (Phase IV armed), three attempts with a 3-day wait between attempts."
      },
      education: {
        hours: "40 unarmed (20 + 20); 72 armed (+32)",
        breakdown: "Unarmed guards complete Phase I (20 hours) and Phase II (20 hours) at a CLEET-approved training program, then pass the Phase I & II state exam. Armed guards add Phase IV firearms training (32 hours), the Phase IV exam, and Taser and OC training. Training credit may also come from approved college coursework.",
        onlineAllowed: "CLEET-approved programs are offered at Career Tech centers and approved schools statewide; CLEET online licensee testing is available at 44 Career Tech locations.",
        sourceUrl: "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html"
      },
      eligibility: {
        minAge: 18,
        citizenship: "US citizens and non-citizens who provide verifiable documentation of legal residence",
        other: "Candidates must be 18 to be certified for an unarmed license and 21 for an armed license; armed applicants complete an MMPI or CLEET-approved equivalent psychological evaluation."
      },
      background: {
        method: "Classifiable fingerprints through an IdentoGO location, submitted within 30 days of the online application; certified court Judgment and Sentence or letter of no record for each arrest or charge; local police and sheriff record checks",
        fee: "Nonrefundable national criminal history record with fingerprint analysis fee per 59 O.S. 1750.6 (amount set under Title 74 Section 150.9); IdentoGO vendor charges apply",
        disqualifiers: "Felonies substantially related to security work are disqualifying; armed licenses are unavailable to persons with firearm or violent felonies or federal firearms disabilities (18 U.S.C. 922(g)(4)), consistent with the 2024 amendments to 59 O.S. 1750.6.",
        sourceUrl: "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685"
      },
      fees: [
        { item: "Unarmed security guard license (3 years)", fee: "$50", sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html" },
        { item: "Armed security guard license (3 years)", fee: "$100", sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html" },
        { item: "Armed guard + armed private investigator combination (3 years)", fee: "$150", sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html" },
        { item: "Renewal (matches license type)", fee: "$50 unarmed / $100 armed / $150 combination", sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html" },
        { item: "State exam (per phase, CareerTech)", fee: "$50", sourceUrl: "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf" },
        { item: "Late renewal", fee: "$25 (one day or more late)", sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html" }
      ],
      application: {
        portal: "CLEET online licensing portal (Thentia); paper applications are no longer accepted",
        portalUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html",
        steps: [
          "Complete Phase I and Phase II training (plus Phase IV, Taser, and OC for armed) at a CLEET-approved program.",
          "Pass the state exam at an Oklahoma CareerTech testing center, bringing the certificate of completion and government-issued photo ID.",
          "Apply online through the CLEET portal, paying 20 percent of the licensing fee at submission and the remainder once approved.",
          "Get fingerprinted at an IdentoGO location within 30 days of submitting the application, and include certified court records for any arrest or charge.",
          "Once approved and fully paid, log in and print the three-year license; unarmed new hires may work up to 45 days for a licensed agency while a complete application is processed."
        ],
        processingTime: "Not published as a fixed figure; the 45-day grace period for unarmed new hires runs from the date of employment on a complete application",
        sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      renewal: {
        cycle: "3 years",
        ce: "8 hours of continuing education from an approved source during the licensing period (private investigators need 16 hours)",
        fee: "$50 unarmed / $100 armed / $150 combination",
        late: "A $25 late fee applies once the license is one day or more past expiration; a renewal application can only be used within 30 days of expiration, after which a new license application is required.",
        sourceUrl: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      wages: { soc: "33-9032", socName: "Security Guards", median: "$36,270", p25: "$30,980", p75: "$44,670", national: "$38,020", year: "May 2025", sourceUrl: "https://www.onetonline.org/link/localwages/33-9032.00?st=OK" },
      localNuance: "Oklahoma's CLEET phase system is among the most structured in the country: Phase I and II (40 hours) for unarmed, Phase IV (32 hours) plus Taser/OC and an MMPI psychological evaluation for armed, with exams delivered at 44 CareerTech testing sites. Licensed agencies may employ unarmed applicants for up to 45 days while a complete application is processed, but the grace period never covers armed work.",
      recentChanges: [
        { year: 2024, change: "House Bill 3786 (2023-24 session) amended 59 O.S. 1750.6, aligning armed license disqualifiers with the federal firearms disability in 18 U.S.C. 922(g)(4) and continuing the $50 unarmed / $100 armed fee structure.", sourceUrl: "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685" }
      ],
      stateFaqs: [
        { q: "What training does Oklahoma require for security guards?", a: "Unarmed guards complete Phase I (20 hours) and Phase II (20 hours) at a CLEET-approved program and pass the Phase I & II exam. Armed guards add Phase IV firearms training (32 hours), the Phase IV firearms exam, and Taser and OC training, plus an MMPI psychological evaluation." },
        { q: "How much does an Oklahoma security guard license cost?", a: "CLEET charges $50 for a three-year unarmed license and $100 for armed, with matching renewal fees and a $25 late fee. The CareerTech state exam costs $50 per phase, and fingerprinting through IdentoGO is a separate vendor charge." },
        { q: "How long is an Oklahoma security guard license valid?", a: "Individual security guard licenses are valid for three years from the issue date and renew in three-year terms. Renewal requires the application, proof of 8 hours of continuing education, and either a notice of employment or current bond and insurance." },
        { q: "Can I work while my Oklahoma application is pending?", a: "Yes, for unarmed work only. Licensed security guard agencies may employ unarmed guards for up to 45 days while a complete application (with fingerprints and fee) is processed; the grace period ends if the application is denied and never authorizes armed work." }
      ],
      sources: [
        { label: "CLEET - Security Guard licensing page (fees, three-year term, renewals, upgrades)", url: "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html", checkedOn: "2026-10" },
        { label: "CLEET - Private Security Training and Testing (phases, hours, CE requirements)", url: "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html", checkedOn: "2026-10" },
        { label: "Oklahoma CareerTech Testing Manual - Private Security exams (question counts, times, fees)", url: "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf", checkedOn: "2026-10" },
        { label: "59 O.S. 1750.6 - Application for Licenses, Term, Renewal (Oklahoma Statutes)", url: "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685", checkedOn: "2026-10" }
      ]
    }
  }
};
