// Research batch 5 — three assigned state templates converted to research dossiers.
//
// Deep prose is written once per template (overview, eligibility, exam, education,
// prerequisites, costBreakdown, timeline, route, providersNote, faqs, reciprocity)
// and reused across every jurisdiction that issues the credential. Only agency,
// agencyUrl, fee, note and compactMember vary per state.
//
// Three reciprocity cases covered here are the most important in the whole catalogue:
//   • bar-exam        → UBE score portability (compact id `ube` in compacts.mjs)
//   • notary-public   → commissions are NOT portable; each state commissions its own
//   • teacher-cert    → per-state exam system + NASDTEC Interstate Agreement
//
// All three credentials are issued by every one of the 50 states plus DC, so no
// jurisdiction is omitted from `states`. Research reflects the 2025–2026 bar cycle,
// including the NextGen Bar Exam phased rollout that begins July 2026.

export default [
  // ══════════════════════════════════════════════════════════════════════
  // 1. Bar Exam (Bar Admission)
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'bar-exam',
    name: 'Bar Exam / Admission to Practice Law',
    category: 'legal',
    group: 'Bar Admission',
    type: 'Exam',
    blurb: 'The licensing examination that, together with a character-and-fitness review, admits a candidate to practise law in a given U.S. jurisdiction.',

    overview:
      'Admission to the bar is the gatekeeping step that lets a law graduate practise law in a specific U.S. jurisdiction. Nearly every jurisdiction administers a two-day examination built from the Multistate Bar Examination (MBE, a 200-question multiple-choice test), the Multistate Essay Examination (MEE) and the Multistate Performance Test (MPT, practical lawyering skills). Since 2011, 41 jurisdictions have adopted the Uniform Bar Examination (UBE), whose MBE/MEE/MPT scores are portable: a candidate who earns a UBE score at or above a receiving jurisdiction’s threshold can transfer it within 3 years without re-sitting. The remaining jurisdictions write their own exams (California, Florida, Louisiana and others each have distinct formats). A major change is underway: the National Conference of Bar Examiners is rolling out the NextGen Bar Exam — a restructured test emphasising more lawyering skills and fewer rote subjects — in phases from July 2026 through July 2028. Passing the exam is necessary but not sufficient: every jurisdiction also runs a character-and-fitness investigation and requires an oath of office before a licence is issued.',
    eligibility:
      'Every U.S. jurisdiction requires a Juris Doctor (JD) from an American Bar Association–approved law school, or in a handful of states (California, Vermont, Virginia, Washington) a combination of apprenticeship and non-ABA study. A few jurisdictions still admit by "diploma privilege" without an exam (Wisconsin for its two in-state law schools; New Hampshire via the Daniel Webster Fellowship). All applicants must pass a fingerprint-based character-and-fitness background investigation covering education, employment, finances and any criminal or disciplinary history. There is no U.S. citizenship requirement in most states, but lawful immigration status is required, and several states ask about the applicant’s compliance with bar admission rules in any other jurisdiction.',
    exam: {
      admin: 'Jurisdiction’s Board of Bar Examiners or Supreme Court; the MBE is written and scored by the NCBE, while essays/performance tests are graded locally (UBE) or the whole exam is local (non-UBE).',
      questions: 'UBE: MBE 200 multiple-choice + MEE 6 essays + MPT 2 performance tasks. Non-UBE states vary — Louisiana has 9 civil-law sections, Florida Part A (state) + Part B (MBE), California a 3-day exam.',
      time: 'Two days (UBE and most states); California and Nevada run three days; Louisiana and Florida run two days with a different split.',
      pass: 'MBE is scaled to a 200-point mean; jurisdictions set their own total passing line, typically around 260–270 on the UBE 400-point scale (e.g. 270 is common). Non-UBE pass rates vary by state.',
      fee: '$200–$1,900 for a first-time application, varying enormously by jurisdiction (see per-state fees).',
      format: 'Computer-based MBE at a proctored centre; handwritten or typed essays/MPT. Remote administration was used during COVID and has been largely retired.'
    },
    education: {
      hours: 'Three years of full-time JD study (≈90 semester credits) from an ABA-approved law school is the norm.',
      note: 'Four states (CA, VT, VA, WA) also permit a law office study/apprenticeship path, and Wisconsin grants diploma privilege to graduates of its two ABA schools (UW and Marquette) without an exam. A growing number of jurisdictions require a separate certificate of good standing from the law school and, in some, completion of a limited practical-skills or professionalism course before admission.'
    },
    prerequisites:
      'ABA-approved JD (or approved equivalent/apprenticeship); completion of any jurisdiction-required practical-skills module; a passing bar exam score (or transferred UBE score within the 3-year window); and a successful character-and-fitness determination.',
    costBreakdown: {
      items: [
        { item: 'Bar exam application / sitting fee', fee: '$200–$1,900 by jurisdiction' },
        { item: 'Character & fitness investigation', fee: '$0–$500' },
        { item: 'MPRE (Multistate Professional Responsibility Exam)', fee: '≈$145' },
        { item: 'Bar review course (Kaplan, Barbri, Themis, etc.)', fee: '$1,500–$4,000' },
        { item: 'Laptop / remote-exam software fee', fee: '$0–$150' },
        { item: 'Admission oath & first-year licence fee', fee: '$50–$500' }
      ],
      total: '$2,000–$7,000 all-in (excludes law school tuition)'
    },
    timeline: [
      { stage: 'Complete JD and graduate', duration: '3 years' },
      { stage: 'Pass the MPRE (usually taken 3rd year of law school)', duration: '1–3 months prep' },
      { stage: 'Apply, clear character & fitness, sit the July or February exam', duration: '4–8 weeks to schedule' },
      { stage: 'Wait for results and score release', duration: '≈9–12 weeks after the exam' },
      { stage: 'Complete oath, pay admission fee, receive licence', duration: '2–8 weeks after results' }
    ],
    route: [
      { title: 'Finish an ABA-approved JD (or approved equivalent)', description: 'Enrol and graduate from a jurisdiction-recognised law school. In CA, VT, VA and WA an office-study apprenticeship can substitute; in Wisconsin in-state grads may use diploma privilege and skip the exam entirely.' },
      { title: 'Pass the MPRE', description: 'Most jurisdictions require a passing score on the NCBE’s Multistate Professional Responsibility Exam (threshold typically 75–86). Take it before or shortly after graduation.' },
      { title: 'File the bar application and character-&-fitness packet', description: 'Submit law-school certificates, fingerprint cards and a detailed background affidavit early — character-and-fitness review often takes longer than the exam itself.' },
      { title: 'Study for and sit the bar exam', description: 'UBE jurisdictions test the MBE, MEE and MPT over two days; non-UBE states (CA, FL, LA, NV, etc.) use their own formats. A commercial bar-review course is standard.' },
      { title: 'Transfer a UBE score or wait for results', description: 'If you sat the UBE, you may transfer your score to another UBE jurisdiction within 3 years if it meets that jurisdiction’s minimum. Otherwise await the local release (≈2–3 months).' },
      { title: 'Take the oath and pay the admission fee', description: 'After a passing score and cleared character-and-fitness, attend a swearing-in ceremony, pay the annual licence fee, and you are admitted to practise in that jurisdiction only.' }
    ],
    providersNote:
      'Commercial bar-review courses (Barbri, Kaplan, Themis, Quimbee, AdaptiBar for MBE practice) dominate preparation; none are affiliated with the NCBE or any board of bar examiners. The NCBE publishes the official MBE/MEE/MPT content outlines and the free "MBE Online Practice Exams." Per-state fees below reflect the first-time exam application and character-and-fitness charges reported in the NCBE Comprehensive Guide to Bar Admission Requirements; they exclude the separate MPRE and bar-review tuition, and they change frequently — confirm on the specific jurisdiction’s board of law examiners site. The NextGen Bar Exam, a redesigned test, is being introduced in phases: July 2026 (CT, ID, MD, MO, OR, WA and several territories), July 2027 (AZ, IA, KY, MN, NE, NM, ND, OK, SD, TN, VT, WV, WY), February 2028 (DE, DC, IL, MT) and July 2028 (the remaining large jurisdictions including CA, FL, NY, TX).',
    faqs: [
      {
        q: 'What does "UBE" mean and why does it matter?',
        a: 'The Uniform Bar Examination is a standardised two-day test (MBE + MEE + MPT) adopted by about 41 U.S. jurisdictions. Because the component scores are uniform, a candidate who earns a UBE score at or above a receiving jurisdiction’s threshold can be admitted there by score transfer within 3 years — without re-taking the exam. The transfer is one-way: you still must meet that jurisdiction’s character-and-fitness and local-component rules.'
      },
      {
        q: 'Can I use my bar licence in another state?',
        a: 'A licence is issued per jurisdiction and does not automatically let you practise elsewhere. UBE scores are portable between UBE jurisdictions within 3 years. Non-UBE states require their own exam or a separate admission-on-motion (reciprocity) for lawyers already admitted elsewhere, which usually demands several years of recent practice and good standing. Practising across state lines normally requires pro hac vice admission or a separate licence.'
      },
      {
        q: 'Which states do NOT use the UBE?',
        a: 'As of the 2025–2026 cycle the non-UBE jurisdictions are California, Florida, Louisiana, Nevada, Georgia, Hawaii, Idaho, Maryland, Mississippi, Missouri, Oregon, South Dakota, Virginia, Washington, Delaware and Connecticut. Each writes its own exam — Louisiana tests civil law in nine sections, Florida splits Part A (state) and Part B (MBE), and California and Nevada run three-day exams. Most of these are scheduled to move to the NextGen Bar Exam between 2026 and 2028.'
      },
      {
        q: 'What is the NextGen Bar Exam?',
        a: 'The NextGen Bar Exam is the NCBE’s redesigned licensing test, first administered July 2026. It shifts weight toward foundational lawyering skills (legal research, analysis, dispute resolution, client counselling) and consolidates the substantive topics, replacing the separate MEE/MPT structure with integrated challenge sets. Jurisdictions adopt it in phases through July 2028, so candidates should check which format their target jurisdiction uses on their exam date.'
      },
      {
        q: 'Is there any way to become a lawyer without taking the bar exam?',
        a: 'Yes, in limited cases. Wisconsin grants "diploma privilege" to graduates of its two in-state ABA law schools (UW–Madison and Marquette) — they are admitted without an exam but still must clear character-and-fitness. New Hampshire’s Daniel Webster Fellowship is a supervised-practice alternative to the exam. A handful of states (CA, VT, VA, WA) allow a law-office apprenticeship instead of law school but still require the exam.'
      },
      {
        q: 'What is the MPRE and do I need it?',
        a: 'The Multistate Professional Responsibility Exam is a 60-question, two-hour NCBE test on legal ethics and professional conduct. Almost every U.S. jurisdiction requires a passing MPRE score (commonly 75–86) for admission, separate from the bar exam itself. Most students sit it in the spring of their third law-school year.'
      }
    ],

    reciprocity: {
      compact: 'ube',
      note: 'The Uniform Bar Exam (compact id `ube` in compacts.mjs) makes MBE/MEE/MPT scores portable across the ~41 UBE jurisdictions: a candidate may transfer a qualifying score to another UBE jurisdiction within 3 years. Each receiving jurisdiction sets its own minimum (often 260–270 of 400) and may add a local-component requirement (e.g. New York and a few others require a state-specific law course/exam). Non-UBE jurisdictions (CA, FL, LA, NV, GA, HI, ID, MD, MS, MO, OR, SD, VA, WA, DE, CT) do not accept UBE score transfer for initial admission and require either their own exam or admission-on-motion for experienced out-of-state attorneys. The NextGen Bar Exam rollout (2026–2028) will eventually replace the current UBE in adopting jurisdictions.'
    },

    defaultAgency: 'State Board of Bar Examiners / Supreme Court',
    sourceUrl: 'https://www.ncbex.org/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama State Bar, Board of Bar Examiners', agencyUrl: 'https://www.alabar.org/', fee: '≈$575 首次考试费', note: 'UBE 采纳州（compactMember）。NextGen 于 2028 年 7 月启用。需完成 AL 法律组件课程。', compactMember: true },
      AK: { agency: 'Alaska Bar Association, Board of Bar Examiners', agencyUrl: 'https://www.alaskabar.org/', fee: '≈$850 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      AZ: { agency: 'Arizona Committee on Examinations', agencyUrl: 'https://www.azbar.org/', fee: '≈$680 首次考试费', note: 'UBE 采纳州，要求 AZ 法律组件（AZ Law Component）。NextGen 于 2027 年 7 月启用。', compactMember: true },
      AR: { agency: 'Arkansas State Board of Law Examiners', agencyUrl: 'https://www.arkbar.com/', fee: '≈$1,000 首次考试费', note: 'UBE 采纳州。NextGen 启用时间随主流批次（2028 年 7 月）。', compactMember: true },
      CA: { agency: 'State Bar of California, Admissions', agencyUrl: 'https://www.calbar.ca.gov/', fee: '≈$878 首次考试费', note: '非 UBE 州，自办 3 天考试（笔试+性能测试+MBE）。NextGen 于 2028 年 7 月启用，并将在 2029 年 7 月加入 CA 专属法律组件。', compactMember: false },
      CO: { agency: 'Colorado Office of Attorney Admissions', agencyUrl: 'https://www.coloradosupremecourt.com/', fee: '≈$710 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      CT: { agency: 'Connecticut Bar Examining Committee', agencyUrl: 'https://www.jud.ct.gov/', fee: '≈$900 首次考试费', note: '非 UBE 州，自办考试。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      DE: { agency: 'Delaware Board of Bar Admissions', agencyUrl: 'https://courts.delaware.gov/', fee: '≈$700–$900 首次考试费', note: '非 UBE 州。NextGen 于 2028 年 2 月启用。', compactMember: false },
      DC: { agency: 'District of Columbia Board of Law Examiners', agencyUrl: 'https://www.dccourts.gov/', fee: '≈$405 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 2 月启用。', compactMember: true },
      FL: { agency: 'Florida Board of Bar Examiners', agencyUrl: 'https://www.floridabarexam.org/', fee: '≈$1,000 首次考试费', note: '非 UBE 州，分 Part A（州法）与 Part B（MBE）两段。NextGen 于 2028 年 7 月启用。', compactMember: false },
      GA: { agency: 'Georgia Office of Bar Admissions', agencyUrl: 'https://www.gabar.org/', fee: '≈$400–$550+ 首次考试费', note: '非 UBE 州，分两阶段（写作日 + MBE 日）。NextGen 于 2028 年 7 月启用。', compactMember: false },
      HI: { agency: 'Hawaii Board of Examiners', agencyUrl: 'https://www.courts.state.hi.us/', fee: '≈$500 首次考试费', note: '非 UBE 州。NextGen 于 2028 年 7 月启用。', compactMember: false },
      ID: { agency: 'Idaho Bar Commission', agencyUrl: 'https://isb.idaho.gov/', fee: '≈$600 首次考试费', note: '非 UBE 州。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      IL: { agency: 'Illinois Board of Admissions to the Bar', agencyUrl: 'https://www.ilbaradmissions.org/', fee: '≈$1,200–$1,875 首次考试费', note: 'UBE 采纳州，要求 IL 法律组件。NextGen 于 2028 年 2 月启用。', compactMember: true },
      IN: { agency: 'Indiana Board of Law Examiners', agencyUrl: 'https://www.in.gov/courts/', fee: '≈$250 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      IA: { agency: 'Iowa Board of Law Examiners', agencyUrl: 'https://www.iowacourts.gov/', fee: '≈$800 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      KS: { agency: 'Kansas Board of Law Examiners', agencyUrl: 'https://www.ksbar.org/', fee: '≈$700 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      KY: { agency: 'Kentucky Office of Bar Admissions', agencyUrl: 'https://www.kycourts.gov/', fee: '≈$875–$1,375 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      LA: { agency: 'Committee on Bar Admissions (Louisiana)', agencyUrl: 'https://www.lasc.org/', fee: '≈$850–$975 首次考试费', note: '非 UBE 州，自办 9 节民法（civil law）考试，体系独特。NextGen 启用时间随主流批次（2028 年 7 月）。', compactMember: false },
      ME: { agency: 'Maine Board of Bar Examiners', agencyUrl: 'https://www.mainebar.org/', fee: '≈$800 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      MD: { agency: 'Maryland Board of Bar Examiners', agencyUrl: 'https://www.mdcourts.gov/', fee: '≈$750 首次考试费', note: '非 UBE 州，要求 MD 法律组件。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      MA: { agency: 'Massachusetts Board of Bar Examiners', agencyUrl: 'https://www.mass.gov/', fee: '≈$815 首次考试费', note: 'UBE 采纳州，要求 MA 法律组件。NextGen 于 2028 年 7 月启用。', compactMember: true },
      MI: { agency: 'Michigan Board of Law Examiners', agencyUrl: 'https://www.courts.michigan.gov/', fee: '≈$400 首次考试费', note: 'UBE 采纳州，要求 MI 法律组件。NextGen 于 2028 年 7 月启用。', compactMember: true },
      MN: { agency: 'Minnesota Board of Law Examiners', agencyUrl: 'https://www.mncourts.gov/', fee: '≈$600 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      MS: { agency: 'Mississippi Board of Bar Admissions', agencyUrl: 'https://www.mssc.state.ms.us/', fee: '≈$525–$825 首次考试费', note: '非 UBE 州，NextGen 启用时间待定（TBD）。', compactMember: false },
      MO: { agency: 'Missouri Board of Law Examiners', agencyUrl: 'https://www.mobar.org/', fee: '≈$560–$1,400 首次考试费', note: '非 UBE 州，要求 MO 法律组件。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      MT: { agency: 'Montana Board of Bar Examiners', agencyUrl: 'https://montanabar.org/', fee: '≈$620 首次考试费', note: 'UBE 采纳州，要求 MT 法律组件。NextGen 于 2028 年 2 月启用。', compactMember: true },
      NE: { agency: 'Nebraska State Bar Commission', agencyUrl: 'https://www.nebar.com/', fee: '≈$490–$590 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      NV: { agency: 'Nevada Board of Bar Examiners', agencyUrl: 'https://nvbar.org/', fee: '≈$755 首次考试费', note: '非 UBE 州，自办 3 天考试。NextGen 于 2028 年 7 月启用。', compactMember: false },
      NH: { agency: 'New Hampshire Board of Bar Examiners', agencyUrl: 'https://www.nhbar.org/', fee: '≈$995 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。另设 Daniel Webster Fellowship 免试通道。', compactMember: true },
      NJ: { agency: 'New Jersey Board of Bar Examiners', agencyUrl: 'https://www.njcourts.gov/', fee: '≈$675 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      NM: { agency: 'New Mexico Bar Admissions', agencyUrl: 'https://www.nmbar.org/', fee: '≈$750–$1,250 首次考试费', note: 'UBE 采纳州，要求 NM 法律组件。NextGen 于 2027 年 7 月启用。', compactMember: true },
      NY: { agency: 'New York State Board of Law Examiners', agencyUrl: 'https://www.nybarexam.org/', fee: '≈$250–$750 首次考试费', note: 'UBE 采纳州，要求 NY 法律组件（NYLC/NYLE）。NextGen 于 2028 年 7 月启用。', compactMember: true },
      NC: { agency: 'North Carolina Board of Law Examiners', agencyUrl: 'https://www.ncble.org/', fee: '≈$850 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      ND: { agency: 'North Dakota State Bar, Admissions', agencyUrl: 'https://www.sband.org/', fee: '≈$200 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      OH: { agency: 'Ohio Supreme Court, Bar Admissions', agencyUrl: 'https://www.supremecourt.ohio.gov/', fee: '≈$452 首次考试费', note: 'UBE 采纳州，要求 OH 法律组件。NextGen 于 2028 年 7 月启用。', compactMember: true },
      OK: { agency: 'Oklahoma Board of Bar Examiners', agencyUrl: 'https://www.okbar.org/', fee: '≈$650 首次考试费', note: 'UBE 采纳州，要求 OK 法律组件。NextGen 于 2027 年 7 月启用。', compactMember: true },
      OR: { agency: 'Oregon State Bar, Admissions', agencyUrl: 'https://www.osbar.org/', fee: '≈$1,000 首次考试费', note: '非 UBE 州。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      PA: { agency: 'Pennsylvania Board of Law Examiners', agencyUrl: 'https://www.pabarexaminers.org/', fee: '≈$750 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      RI: { agency: 'Rhode Island Board of Bar Examiners', agencyUrl: 'https://www.courts.ri.gov/', fee: '≈$975 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      SC: { agency: 'South Carolina Board of Law Examiners', agencyUrl: 'https://www.scbar.org/', fee: '≈$1,000–$1,500 首次考试费', note: 'UBE 采纳州（2021 年采纳），要求 SC 法律组件。NextGen 于 2028 年 7 月启用。', compactMember: true },
      SD: { agency: 'South Dakota State Bar, Admissions', agencyUrl: 'https://www.sdbar.org/', fee: '≈$450 首次考试费', note: '非 UBE 州，自办 MEE+MBE+MPT 另加一篇印第安法（Indian Law）论文。NextGen 于 2027 年 7 月启用。', compactMember: false },
      TN: { agency: 'Tennessee Board of Law Examiners', agencyUrl: 'https://www.tncourts.gov/', fee: '≈$725 首次考试费', note: 'UBE 采纳州，要求 TN 法律组件。NextGen 于 2027 年 7 月启用。', compactMember: true },
      TX: { agency: 'Texas Board of Law Examiners', agencyUrl: 'https://www.ble.texas.gov/', fee: '≈$450–$1,290 首次考试费', note: 'UBE 采纳州，要求 TX 法律组件（包括 TX 职业道德）。NextGen 于 2028 年 7 月启用。', compactMember: true },
      UT: { agency: 'Utah Bar Admissions', agencyUrl: 'https://www.utahbar.org/', fee: '≈$550 首次考试费', note: 'UBE 采纳州。NextGen 于 2028 年 7 月启用。', compactMember: true },
      VT: { agency: 'Vermont Board of Bar Examiners', agencyUrl: 'https://www.vermontjudiciary.org/', fee: '≈$300 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      VA: { agency: 'Virginia Board of Bar Examiners', agencyUrl: 'https://www.vbbe.org/', fee: '≈$1,150 首次考试费', note: '非 UBE 州，要求 VA 法律组件（VA 法写作）。NextGen 于 2028 年 7 月启用。', compactMember: false },
      WA: { agency: 'Washington State Bar Association, Admissions', agencyUrl: 'https://www.wsba.org/', fee: '≈$595 首次考试费', note: '非 UBE 州（使用 WPAGE/Washington 自办考试）。为首批启用 NextGen 的州之一（2026 年 7 月）。', compactMember: false },
      WV: { agency: 'West Virginia Board of Law Examiners', agencyUrl: 'https://www.wvbar.org/', fee: '≈$500 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true },
      WI: { agency: 'Board of Bar Examiners of Wisconsin', agencyUrl: 'https://www.wicourts.gov/', fee: '≈$450–$850 首次考试费', note: 'UBE 采纳州（2025 年 3 月采纳）。威斯康星大学与 Marquette 法学院毕业生享 diploma privilege 免试（仍需品行审查）。NextGen 于 2028 年 7 月启用。', compactMember: true },
      WY: { agency: 'Wyoming State Bar, Admissions', agencyUrl: 'https://www.wyomingbar.org/', fee: '≈$600 首次考试费', note: 'UBE 采纳州。NextGen 于 2027 年 7 月启用。', compactMember: true }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 2. Notary Public
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'notary-public',
    name: 'Notary Public Commission',
    category: 'legal',
    group: 'Notary & Signing',
    type: 'License',
    blurb: 'A state commission that lets you serve as an impartial witness — taking acknowledgments, administering oaths and certifying copies — for document signings.',

    overview:
      'A notary public is a state-appointed official who acts as an impartial witness to the signing of important documents, helping prevent fraud by verifying signers’ identities and ensuring they sign willingly. All 50 states and the District of Columbia commission notaries, and the core duties (acknowledgments, jurats, oaths/affirmations and copy certifications) are similar everywhere — but the path to a commission is entirely state-based and varies widely. Roughly 15 jurisdictions require a written notary exam (Arizona added one on 1 July 2025; others include California, Colorado, Connecticut, Hawaii, Louisiana, Maine, Montana, Nebraska, North Carolina, North Dakota, Ohio, Oregon, South Carolina and Utah). A larger group requires a pre-commission education course but no exam, while the remaining states issue a commission on application, fee and a surety bond alone. Most states also require a notary bond to protect the public, and an increasing number authorise Remote Online Notarization (RON). Critically, notary commissions are NOT portable: a commission is valid only in the state that issued it, so anyone who moves must obtain a new commission in the new state.',
    eligibility:
      'Every state requires the applicant to be a legal adult (18; Nebraska sets 19) and, with few exceptions, a resident of the commissioning state or an employee who works there. Applicants must be able to read and write English (explicit in some states), have no disqualifying criminal history — especially offenses involving fraud or dishonesty — and pass a background check or provide sworn statements. Some states require a clean record specifically as to financial crimes. Residency waivers for out-of-state employees exist in many states (e.g., Illinois, New Jersey, Virginia, Washington), and a few states let bordering-state residents apply.',
    exam: {
      admin: 'In exam states the test is administered by the Secretary of State (or a contracted vendor such as Prometric) — e.g. California’s written exam and Arizona’s Prometric-proctored competency exam.',
      questions: 'Exam states use a multiple-choice test on state notary law — commonly 30–45 questions (Arizona 45 open-book; California ~45).',
      time: 'Usually 60 minutes or less; some are open-book.',
      pass: 'Passing scores vary — California 70%, North Carolina 80%, Arizona 80%, Illinois 85% — but most exam states sit in the 70–85% range.',
      fee: 'Exam fees where charged are small: Arizona $46.75, California $40, plus the state filing fee.',
      format: 'Computer-based, proctored; Arizona and several others allow remote proctoring.'
    },
    education: {
      hours: 'Not a degree requirement; rather a state-mandated training course of 3–6 hours in the states that require education (California, Colorado, Florida, Missouri, Montana, Nevada, North Carolina, Oregon, Pennsylvania and others).',
      note: 'Education is required for the commission in roughly a dozen states while a written exam is required in about 15; the two requirements overlap (California, Colorado, etc.) but are not identical. Many states that require neither still publish a handbook and recommend training — mistakes carry personal liability, so self-study is wise even where not mandated.'
    },
    prerequisites:
      'Minimum age 18 (19 in Nebraska); state residency or in-state employment; no disqualifying criminal history; completion of any required education course and/or passing exam; and, in bond states, a filed surety bond before the commission is issued.',
    costBreakdown: {
      items: [
        { item: 'Application / commission filing fee', fee: '$0–$120 by state' },
        { item: 'Notary education course (if required)', fee: '$30–$100' },
        { item: 'Notary exam fee (exam states)', fee: '$40–$75' },
        { item: 'Surety bond premium (bond states)', fee: '$50–$200/term (on a $1k–$50k bond)' },
        { item: 'Notary seal/stamp and journal', fee: '$30–$80' },
        { item: 'Remote Online Notary (RON) technology, optional', fee: '$100–$500/yr' }
      ],
      total: '$100–$600 to become commissioned (excludes RON platform)'
    },
    timeline: [
      { stage: 'Confirm state requirements (exam vs education vs neither)', duration: '1–2 days' },
      { stage: 'Complete required education and/or pass exam', duration: '1 day to 2 weeks' },
      { stage: 'Obtain and file the surety bond (bond states)', duration: 'A few days' },
      { stage: 'Submit application + fee + bond to commissioning authority', duration: 'Same day' },
      { stage: 'Background review and commission issuance', duration: '1–8 weeks by state' },
      { stage: 'Buy seal/journal and take oath (if required)', duration: '1 week' }
    ],
    route: [
      { title: 'Check your state’s exact rules', description: 'Notary law is state-based. Confirm whether your state requires education, a written exam, a bond, or none of these — and who commissions notaries (almost always the Secretary of State, with county-court exceptions in a few states).' },
      { title: 'Complete pre-commission education (if required)', description: 'In the ~dozen education states (CA, CO, FL, MO, MT, NV, NC, OR, PA and others) finish the state-approved 3–6 hour course and keep the certificate.' },
      { title: 'Pass the notary exam (exam states only)', description: 'About 15 states require a written test — including the newly added Arizona exam (1 July 2025) and long-standing ones like California, Colorado, North Carolina, Ohio and Utah. Register through the state’s testing vendor.' },
      { title: 'Arrange the surety bond (bond states)', description: 'Many states require a bond (e.g., $15,000 in California, $10,000 in Texas/New York-none) filed before commissioning. Buy it from a surety agent; the premium is a fraction of the face value.' },
      { title: 'File the application and take the oath', description: 'Submit the application and fee to the commissioning authority with the bond and exam/education proof. Some states require a personal appearance and oath before a judge or official.' },
      { title: 'Purchase your seal and journal, then start notarizing', description: 'Once the commission certificate arrives, order your stamp/seal and a journal, and you may begin performing notarial acts within that state only.' }
    ],
    providersNote:
      'State notary handbooks (published by each Secretary of State) are the only authoritative source for current rules; national vendors such as the National Notary Association, Notary Rotary and the American Association of Notaries sell bonds, supplies, education and exam prep but are not government agencies. Per-state fees below are the approximate state filing/commission fee; bond amounts are noted separately. Note the major caveat: a notary commission is valid ONLY in the issuing state — there is no interstate reciprocity, so relocating requires a fresh commission. Remote Online Notarization (RON) is now authorised in the large majority of states but is a separate endorsement with its own training and technology requirement.',
    faqs: [
      {
        q: 'Do I need to pass an exam to become a notary?',
        a: 'Only in about 15 jurisdictions. These include Arizona (exam added 1 July 2025), California, Colorado, Connecticut, Hawaii, Louisiana, Maine, Montana, Nebraska, North Carolina, North Dakota, Ohio, Oregon, South Carolina and Utah. A separate group of states requires a training course but no written exam, and the rest issue a commission on application + bond + background check alone. Always check your state’s Secretary of State site for the current rule.'
      },
      {
        q: 'Can I use my notary commission in another state?',
        a: 'No. A notary commission is territorial — it authorises you to perform notarial acts only within the state that issued it. There is no interstate reciprocity. If you move, you must apply for a new commission in your new state (and may let the old one lapse). Some states allow a limited exception for notarizing in the presence of the notary while physically near a border, but the safe rule is: commission = one state only.'
      },
      {
        q: 'What is a notary bond and do I need one?',
        a: 'A surety bond protects the public from financial loss caused by a notary’s error or misconduct; it is NOT insurance for the notary. Bond requirements vary hugely — from none (Colorado, Connecticut, Delaware, Iowa, Maine, Maryland, Massachusetts, etc.) to $50,000 in Alabama and Louisiana. The premium you pay is only a small fraction of the face value. Many "no-bond" states still allow or require E&O insurance instead.'
      },
      {
        q: 'What is Remote Online Notarization (RON)?',
        a: 'RON lets a notary perform acts over live audio-video instead of in person, using identity-proofing, credential analysis and an electronic seal. As of 2025–2026 most states have enacted RON statutes, but it is a distinct authorization layered on top of a traditional commission, often with separate training (Florida and Texas, for example, require RON-specific training rather than a general notary exam).'
      },
      {
        q: 'Who appoints notaries?',
        a: 'In the vast majority of states the Secretary of State is the commissioning authority. Exceptions include Alabama (county probate judges, who report to the Secretary of State), Alaska (Lieutenant Governor), Florida (Governor appoints, Secretary of State issues), Georgia (county superior court clerks) and Hawaii (Attorney General). The District of Columbia commissions through its Office of the Secretary.'
      },
      {
        q: 'How long does a notary commission last?',
        a: 'Terms vary by state: most are 4 years, but Louisiana and Alabama-adjacent arrangements differ — Louisiana is effectively lifetime, Arkansas is 10 years, South Carolina 10 years, Indiana 8 years, Maine and Massachusetts about 7 years, Iowa and South Dakota 3–6 years, Vermont and Delaware shorter. Renewal usually requires a new application and, in exam/education states, refreshed training or testing.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'Notary commissions are NOT portable between states — there is no interstate compact and no general reciprocity. A commission authorises notarial acts only within the issuing state. A notary who moves must obtain a fresh commission in the new state. A few states offer streamlined re-commissioning for out-of-state notaries already in good standing, but each still requires its own application, bond and (where applicable) exam. Remote Online Notarization statutes now exist in most states but are a separate, state-specific endorsement.'
    },

    defaultAgency: 'Secretary of State (Notary Division)',
    sourceUrl: 'https://www.nationalnotary.org/',
    verified: true,
    confidence: 'medium',

    states: {
      AL: { agency: 'Alabama Probate Judges (commissioning), Secretary of State (records)', agencyUrl: 'https://www.sos.alabama.gov/', fee: '≈$0–$25 申请费', note: '本州无需考试。需 $50,000 保证金；由县遗嘱检验法官委任，并向州务卿备案。', compactMember: false },
      AK: { agency: 'Alaska Lieutenant Governor, Division of Corporations', agencyUrl: 'https://www.commerce.alaska.gov/', fee: '≈$40 申请费', note: '本州无需考试。需 $2,500 保证金；由副州长委任。', compactMember: false },
      AZ: { agency: 'Arizona Secretary of State, Notary Division', agencyUrl: 'https://azsos.gov/', fee: '≈$43 申请费 + $46.75 考试费', note: '需考试（2025 年 7 月 1 日起新增，Prometric 监考，45 题开卷，80 分通过）。委任期 4 年。', compactMember: false },
      AR: { agency: 'Arkansas Secretary of State, Notary Division', agencyUrl: 'https://www.sos.arkansas.gov/', fee: '≈$20 申请费', note: '本州无需考试。需 $7,500 保证金；委任期 10 年（全国最长之一）。', compactMember: false },
      CA: { agency: 'California Secretary of State, Notary Public Section', agencyUrl: 'https://www.sos.ca.gov/notary', fee: '≈$40 考试费 + $10 申请费', note: '需考试（6 小时培训后笔试，70 分通过）。需 $15,000 保证金；委任期 4 年。', compactMember: false },
      CO: { agency: 'Colorado Secretary of State, Notary Program', agencyUrl: 'https://www.sos.state.co.us/', fee: '≈$10–$20 申请费', note: '需培训与考试（线上系统）。本州不要求保证金。委任期 4 年。', compactMember: false },
      CT: { agency: 'Connecticut Secretary of the State, Notary Public', agencyUrl: 'https://portal.ct.gov/SOTS', fee: '≈$60 申请费', note: '需考试（部分情形允许测试）。本州不要求保证金。委任期 5 年。', compactMember: false },
      DE: { agency: 'Delaware Secretary of State, Notaries', agencyUrl: 'https://sos.delaware.gov/', fee: '≈$50 申请费', note: '本州无需考试。本州不要求保证金。委任期 2–4 年，由法院委任。', compactMember: false },
      DC: { agency: 'DC Office of the Secretary, Notary Office', agencyUrl: 'https://os.dc.gov/', fee: '≈$45 申请费', note: '需培训与考试。需 $2,000 保证金。委任期 5 年。', compactMember: false },
      FL: { agency: 'Florida Governor (appoints) / Department of State (issues)', agencyUrl: 'https://www.dos.myflorida.com/', fee: '≈$39 申请费', note: '需 3 小时培训，本州常规委任无需考试（RON 另需培训）。需 $7,500 保证金。委任期 4 年。', compactMember: false },
      GA: { agency: 'Georgia Superior Court Clerks (county), Secretary of State (records)', agencyUrl: 'https://sos.ga.gov/', fee: '≈$35 申请费', note: '需培训，本州常规委任无需考试。本州不要求保证金；由县高等法院书记员委任。委任期 4 年。', compactMember: false },
      HI: { agency: 'Hawaii Attorney General, Notary Public', agencyUrl: 'https://ag.hawaii.gov/', fee: '≈$20 申请费', note: '需考试。需 $1,000 保证金。委任期 4 年。', compactMember: false },
      ID: { agency: 'Idaho Secretary of State, Notary Division', agencyUrl: 'https://sos.idaho.gov/', fee: '≈$30 申请费', note: '本州无需考试。需 $10,000 保证金。委任期 6 年。', compactMember: false },
      IL: { agency: 'Illinois Secretary of State, Notary Division', agencyUrl: 'https://www.ilsos.gov/', fee: '≈$10 申请费', note: '本州无需考试（RON 需培训）。需 $5,000 保证金。委任期 4 年。', compactMember: false },
      IN: { agency: 'Indiana Secretary of State, Notary Division', agencyUrl: 'https://www.in.gov/sos/', fee: '≈$10 申请费', note: '本州无需考试。需 $25,000 保证金。委任期 8 年。', compactMember: false },
      IA: { agency: 'Iowa Secretary of State, Notary', agencyUrl: 'https://sos.iowa.gov/', fee: '≈$30 申请费', note: '本州无需考试。本州不要求保证金（可电子公证）。委任期 3 年。', compactMember: false },
      KS: { agency: 'Kansas Secretary of State, Notary', agencyUrl: 'https://sos.ks.gov/', fee: '≈$25 申请费', note: '本州无需考试。需 $12,000 保证金。委任期 4 年。', compactMember: false },
      KY: { agency: 'Kentucky Secretary of State, Notary', agencyUrl: 'https://www.sos.ky.gov/', fee: '≈$10 申请费', note: '本州无需考试。需 $1,000 保证金。委任期 4 年。', compactMember: false },
      LA: { agency: 'Louisiana Secretary of State, Notary', agencyUrl: 'https://www.sos.la.gov/', fee: '≈$35 申请费', note: '需考试（体系复杂，民法州）。需 $50,000 终身保证金。委任终身有效。', compactMember: false },
      ME: { agency: 'Maine Secretary of State, Notary', agencyUrl: 'https://www.maine.gov/sos/', fee: '≈$40 申请费', note: '需考试。本州不要求保证金。委任期 7 年。', compactMember: false },
      MD: { agency: 'Maryland Secretary of State, Notary', agencyUrl: 'https://sos.maryland.gov/', fee: '≈$15 申请费', note: '需培训，本州常规委任无需考试。本州不要求保证金。委任期 4 年。', compactMember: false },
      MA: { agency: 'Massachusetts Secretary of the Commonwealth, Notary', agencyUrl: 'https://www.mass.gov/', fee: '≈$60 申请费', note: '本州无需考试。本州不要求保证金。委任期 7 年。', compactMember: false },
      MI: { agency: 'Michigan Secretary of State, Notary', agencyUrl: 'https://www.michigan.gov/sos', fee: '≈$10 申请费', note: '本州无需考试。需 $10,000 保证金。委任期 6–7 年。', compactMember: false },
      MN: { agency: 'Minnesota Secretary of State, Notary', agencyUrl: 'https://www.sos.state.mn.us/', fee: '≈$40 申请费', note: '本州无需考试。本州不要求保证金。委任至第 5 年 1 月 31 日。', compactMember: false },
      MS: { agency: 'Mississippi Secretary of State, Notary', agencyUrl: 'https://www.sos.ms.gov/', fee: '≈$25 申请费', note: '本州无需考试。需 $5,000 保证金。委任期 4 年。', compactMember: false },
      MO: { agency: 'Missouri Secretary of State, Notary', agencyUrl: 'https://www.sos.mo.gov/', fee: '≈$15 申请费', note: '需培训，本州常规委任无需考试。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      MT: { agency: 'Montana Secretary of State, Notary', agencyUrl: 'https://sosmt.gov/', fee: '≈$25 申请费', note: '需培训与考试。需 $25,000 保证金。委任期 4 年。', compactMember: false },
      NE: { agency: 'Nebraska Secretary of State, Notary', agencyUrl: 'https://sos.nebraska.gov/', fee: '≈$30 申请费', note: '需考试（部分情形开卷）。需 $15,000 保证金。最低年龄 19 岁。委任期 4 年。', compactMember: false },
      NV: { agency: 'Nevada Secretary of State, Notary', agencyUrl: 'https://www.nvsos.gov/', fee: '≈$45 申请费', note: '需培训与考试（要求严格）。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      NH: { agency: 'New Hampshire Secretary of State, Notary', agencyUrl: 'https://sos.nh.gov/', fee: '≈$40 申请费', note: '本州无需考试。本州不要求保证金（委任制）。委任期 5 年。', compactMember: false },
      NJ: { agency: 'New Jersey Secretary of State, Notary', agencyUrl: 'https://www.nj.gov/state/', fee: '≈$25 申请费', note: '本州无需考试。本州不要求保证金。委任期 5 年。', compactMember: false },
      NM: { agency: 'New Mexico Secretary of State, Notary', agencyUrl: 'https://www.sos.nm.gov/', fee: '≈$20 申请费', note: '需培训与考试（NES 体系）。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      NY: { agency: 'New York Secretary of State, Notary', agencyUrl: 'https://www.dos.ny.gov/', fee: '≈$60 申请费', note: '需考试（开卷，多项选择）。本州不要求保证金。委任期 4 年。', compactMember: false },
      NC: { agency: 'North Carolina Secretary of State, Notary', agencyUrl: 'https://www.sos.nc.gov/', fee: '≈$40 申请费', note: '需培训与考试（80 分通过）。需 $10,000 保证金。委任期 5 年。', compactMember: false },
      ND: { agency: 'North Dakota Secretary of State, Notary', agencyUrl: 'https://www.sos.nd.gov/', fee: '≈$36 申请费', note: '需培训与考试。需 $7,500 保证金。委任期 4 年。', compactMember: false },
      OH: { agency: 'Ohio Secretary of State, Notary', agencyUrl: 'https://www.ohiosos.gov/', fee: '≈$15 申请费', note: '需培训与考试（OAE 体系）。本州不要求保证金。委任期 5 年。', compactMember: false },
      OK: { agency: 'Oklahoma Secretary of State, Notary', agencyUrl: 'https://www.sos.ok.gov/', fee: '≈$25 申请费', note: '本州无需考试。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      OR: { agency: 'Oregon Secretary of State, Notary', agencyUrl: 'https://sos.oregon.gov/', fee: '≈$40 申请费', note: '需培训与考试（ORELA/NES 体系）。本州不要求保证金。委任期 4 年。', compactMember: false },
      PA: { agency: 'Pennsylvania Department of State, Notary', agencyUrl: 'https://www.dos.pa.gov/', fee: '≈$42 申请费', note: '需培训与考试（3 小时培训 + 测试）。需 $25,000 保证金。委任期 4 年。', compactMember: false },
      RI: { agency: 'Rhode Island Secretary of State, Notary', agencyUrl: 'https://sos.ri.gov/', fee: '≈$40 申请费', note: '本州无需考试。本州不要求保证金（法院委任）。委任期 2–4 年。', compactMember: false },
      SC: { agency: 'South Carolina Secretary of State, Notary', agencyUrl: 'https://sos.sc.gov/', fee: '≈$25 申请费', note: '需培训，本州常规委任无需考试。本州不要求保证金。委任期 10 年。', compactMember: false },
      SD: { agency: 'South Dakota Secretary of State, Notary', agencyUrl: 'https://sdsos.gov/', fee: '≈$20 申请费', note: '本州无需考试。本州不要求保证金。委任期 6 年。', compactMember: false },
      TN: { agency: 'Tennessee Secretary of State, Notary', agencyUrl: 'https://sos.tn.gov/', fee: '≈$12 申请费', note: '本州无需考试。需 $10,000 保证金。委任期 4 年（县委任）。', compactMember: false },
      TX: { agency: 'Texas Secretary of State, Notary', agencyUrl: 'https://www.sos.state.tx.us/', fee: '≈$21 申请费', note: '本州无需考试（RON 需培训）。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      UT: { agency: 'Utah Lieutenant Governor / Secretary of State, Notary', agencyUrl: 'https://www.utah.gov/', fee: '≈$45 申请费', note: '需培训与考试（线上考试）。需 $5,000 保证金。委任期 4 年。', compactMember: false },
      VT: { agency: 'Vermont Secretary of State, Notary', agencyUrl: 'https://sos.vermont.gov/', fee: '≈$30 申请费', note: '本州无需考试。本州不要求保证金（法官委任）。委任期 2 年。', compactMember: false },
      VA: { agency: 'Virginia Secretary of the Commonwealth, Notary', agencyUrl: 'https://www.commonwealth.virginia.gov/', fee: '≈$45 申请费', note: '本州无需考试（法律明文无考试要求）。本州不要求保证金。委任期 4 年。', compactMember: false },
      WA: { agency: 'Washington Secretary of State, Notary', agencyUrl: 'https://www.sos.wa.gov/', fee: '≈$30 申请费', note: '本州无需考试。需 $10,000 保证金。委任期 4 年。', compactMember: false },
      WV: { agency: 'West Virginia Secretary of State, Notary', agencyUrl: 'https://sos.wv.gov/', fee: '≈$25 申请费', note: '需培训，本州常规委任无需考试。本州不要求保证金。委任期 5 年。', compactMember: false },
      WI: { agency: 'Wisconsin Department of Financial Institutions, Notary', agencyUrl: 'https://www.wdfi.org/', fee: '≈$20 申请费', note: '本州无需考试。需 $500 保证金。委任期 4 年。', compactMember: false },
      WY: { agency: 'Wyoming Secretary of State, Notary', agencyUrl: 'https://sos.wyo.gov/', fee: '≈$30 申请费', note: '本州无需考试。本州不要求保证金。委任期 4 年。', compactMember: false }
    }
  },

  // ══════════════════════════════════════════════════════════════════════
  // 3. Teacher Certification
  // ══════════════════════════════════════════════════════════════════════
  {
    key: 'teacher-certification',
    name: 'State Teacher Licensure / Certification',
    category: 'education-teaching',
    group: 'State Teacher Licensure',
    type: 'Exam',
    blurb: 'The state-issued credential that authorises you to teach in public schools, earned by completing an approved prep program and passing that state’s required exams.',

    overview:
      'Public-school teaching in the United States requires a state-issued credential — called a license, certificate or endorsement depending on the state. Every state issues its own, and the pathway is built on three pillars: a bachelor’s degree, completion of a state-approved teacher-preparation program, and passing the state’s required examinations. The examination systems differ dramatically by state, which is the single most important fact for a candidate crossing state lines. About 40 states use the ETS Praxis series (Praxis Core for basic skills and Praxis Subject assessments for content). The rest use state-specific or vendor-based systems: California uses CBEST + CSET, Texas uses TExES, New York uses NYSTCE, Florida uses FTCE, Michigan uses MTTC, Illinois uses ILTS, Massachusetts uses MTEL, Oklahoma uses CEOE, Arizona uses AEPA (NES-based), Minnesota uses MTLE, Indiana uses CASA/CORE, Ohio uses OAE, Missouri uses MoGEA/MoCA, Pennsylvania uses PECT, Georgia uses GACE, and Washington/Oregon/New Mexico use NES-based tests (WEST-E, ORELA, NMTA). Portability is handled through the NASDTEC Interstate Agreement, a network of bilateral compacts under which member states grant credential credit — but each transfer still requires its own application and may demand additional exams or coursework.',
    eligibility:
      'All states require at least a bachelor’s degree from a regionally accredited institution and completion of a state-approved teacher-preparation program (or an alternative-certification route, now available in every state). Most require a minimum GPA (often 2.5–3.0) and a background check with fingerprinting. New York and a few others require a master’s degree for professional-level certification (initial certificates are bachelor’s-level, professional certificates add the graduate degree). Some states waive the basic-skills exam with sufficiently high SAT/ACT/GRE scores, and several have recently relaxed or removed certain testing requirements (Maine, Nebraska, Minnesota, Kansas among them).',
    exam: {
      admin: 'Varies by state — ETS (Praxis, TExES, GACE), Pearson (MTTC, ILTS, MTEL, NYSTCE, CEOE, NES-family, OAE, MoCA, CASA/CORE, PECT) or a state agency (CBEST/CSET in California).',
      questions: 'Mix of multiple-choice and constructed-response; basic-skills tests are mostly multiple-choice, subject assessments combine item types, and performance assessments (edTPA, PPAT) use portfolio/video evidence.',
      time: 'Basic-skills tests ≈1–4 hours; subject exams 1–4 hours each; candidates typically sit several.',
      pass: 'Each state sets its own cut scores; basic-skills and subject tests commonly require ~60–75% scaled, performance assessments use rubrics.',
      fee: '≈$100–$200 per test, varying by exam and vendor; a full battery can reach $500–$1,000.',
      format: 'Computer-based at a test centre or remote proctor; performance assessments are submitted online.'
    },
    education: {
      hours: 'A bachelor’s degree plus a state-approved teacher-prep program (typically a fifth-year or co-terminal program, or an undergraduate education major).',
      note: 'Several states now accept completion of an approved prep program with a minimum GPA or a portfolio review INSTEAD of the subject exam (Maine since 2022, Nebraska and Minnesota for program completers). Alternative certification (residency, internship, TNTP-style fellowships) is available in all 50 states and usually lets a candidate teach while finishing requirements. The exact exam battery depends entirely on the state — see the per-state note.'
    },
    prerequisites:
      'Bachelor’s degree; completion of (or enrollment in) a state-approved teacher-prep program; required basic-skills and subject-area exam scores; fingerprint background check; and, in some states, a performance assessment (edTPA/PPAT) and student-teaching.',
    costBreakdown: {
      items: [
        { item: 'Basic-skills exam (Praxis Core / equivalent)', fee: '$90–$150' },
        { item: 'Subject-area exam(s)', fee: '$100–$200 each' },
        { item: 'Performance assessment (edTPA/PPAT, if required)', fee: '$100–$300' },
        { item: 'Teacher-prep program tuition', fee: '$5,000–$40,000' },
        { item: 'Initial license application + background check', fee: '$50–$250' },
        { item: 'Renewal / continuing-ed (every 3–7 years)', fee: '$50–$200' }
      ],
      total: '$1,000–$3,000 in exam/licensing fees (excludes prep-program tuition)'
    },
    timeline: [
      { stage: 'Earn bachelor’s degree + complete teacher-prep', duration: '4–5 years' },
      { stage: 'Pass basic-skills and subject exams', duration: '3–9 months' },
      { stage: 'Complete student teaching / performance assessment', duration: '1 semester' },
      { stage: 'Apply for initial certificate + background check', duration: '2–8 weeks' },
      { stage: 'Renew and upgrade to professional certificate', duration: 'Every 3–7 years' }
    ],
    route: [
      { title: 'Earn a bachelor’s degree and enter a teacher-prep program', description: 'Enrol in a state-approved educator-prep program — traditional undergraduate, post-baccalaureate, or an alternative route. Confirm the program is recognised by your state’s education agency.' },
      { title: 'Pass the basic-skills exam', description: 'Most states require a basic-skills test (Praxis Core in ~40 states; otherwise CBEST in CA, CASA in IN, MoGEA in MO, TAP/ILTS in IL, VCLA in VA, WEST-B in WA, etc.). A high SAT/ACT/GRE may waive it in many states.' },
      { title: 'Pass the required subject-area exam(s)', description: 'This is state-specific: Praxis Subject in most states; TExES in TX, CSET in CA, NYSTCE in NY, FTCE in FL, MTTC in MI, ILTS in IL, MTEL in MA, CEOE in OK, AEPA in AZ, MTLE in MN, OAE in OH, GACE in GA, NES-family in NM/OR/WA. Check your state’s exact battery.' },
      { title: 'Complete student teaching and the performance assessment', description: 'Nearly all states require a supervised student-teaching placement and either a portfolio-based performance assessment (edTPA or PPAT) or, in some states, a state-specific pedagogy test (Principles of Learning & Teaching, Foundations of Reading).' },
      { title: 'Apply for the initial certificate', description: 'Submit exam scores, program completion, fingerprint background check and the application fee to the state education agency. You receive an INITIAL (provisional) certificate valid 1–5 years.' },
      { title: 'Upgrade and maintain the license', description: 'Move to a professional certificate (often requiring a master’s in NY and a few others, plus mentoring/induction) and complete continuing education to renew every 3–7 years. For out-of-state moves, use the NASDTEC Interstate Agreement to seek credit for your existing credential.' }
    ],
    providersNote:
      'The exam vendor matters: ETS runs Praxis, TExES (Texas) and GACE (Georgia); Pearson runs MTTC, ILTS, MTEL, NYSTCE, CEOE, the NES-family (AEPA/Arizona, NMTA/New Mexico, ORELA/Oregon, WEST/Washington), OAE/Ohio, MoCA/Missouri, CASA/CORE/Indiana, PECT/Pennsylvania and Foundations of Reading in many Praxis states. State agencies run CBEST/CSET (California) directly. Per-state fees below are approximate per-exam figures; the exact battery and cut scores change often, so verify on the state Department of Education / certification office site. Portability: the NASDTEC Interstate Agreement links most states so an out-of-state credential can be accepted with a targeted application, but transfers frequently require additional exams (especially the receiving state’s subject test) and are never automatic.',
    faqs: [
      {
        q: 'Which exam do I take to become a teacher?',
        a: 'It depends entirely on the state. About 40 states use the ETS Praxis series (Core + Subject). The major alternatives are: California (CBEST + CSET), Texas (TExES), New York (NYSTCE), Florida (FTCE), Michigan (MTTC), Illinois (ILTS), Massachusetts (MTEL), Oklahoma (CEOE), Arizona (AEPA/NES), Minnesota (MTLE/NES), Indiana (CASA/CORE), Ohio (OAE), Missouri (MoGEA/MoCA), Pennsylvania (PECT), Georgia (GACE), and NES-based tests in New Mexico (NMTA), Oregon (ORELA) and Washington (WEST). See your state’s note above for the exact system.'
      },
      {
        q: 'Can I teach in another state with my certificate?',
        a: 'Usually, through the NASDTEC Interstate Agreement — a network of bilateral compacts among most U.S. states under which a certificate from one member state is accepted by another, often with conditions. Transfers are NOT automatic: you must apply to the new state, and it may require an additional subject exam, a state-specific pedagogy test, or extra coursework. Some states (e.g., those with reciprocal agreements) are easier; others require near-full re-licensure. Always contact the target state’s education agency first.'
      },
      {
        q: 'Do all states require the same tests?',
        a: 'No. Even among the ~40 Praxis states, the required Praxis Subject assessments and cut scores differ by grade band and subject, and many add a pedagogy test (Principles of Learning & Teaching or Foundations of Reading) or a performance assessment (edTPA/PPAT). States with their own systems (CA, TX, NY, FL, MI, IL, MA, OK, AZ, MN) use entirely different exams, so a certificate earned on one system does not imply passage of another’s.'
      },
      {
        q: 'Is a master’s degree required?',
        a: 'For the INITIAL certificate, almost no state requires a master’s — a bachelor’s plus an approved prep program suffices. A graduate degree is typically required only for the PROFESSIONAL (or "permanent") certificate in a handful of states, most notably New York. Several states also offer salary-lane credit for a master’s but do not mandate it for entry.'
      },
      {
        q: 'What is edTPA / PPAT?',
        a: 'These are performance assessments that require a candidate to plan, teach and reflect on a unit of instruction, submitting video and artifacts scored by rubric. edTPA is used in many states (often alongside or replacing the Praxis PPAT); a few states (e.g., Connecticut, Maryland, New Hampshire) require Pearson’s Foundations of Reading instead of or in addition to a pedagogy test. Some states have recently relaxed these requirements (Maine, Nebraska, Minnesota, Kansas).'
      },
      {
        q: 'Can I get certified through an alternative route?',
        a: 'Yes — alternative certification is available in all 50 states, letting career-changers or non-education graduates teach while completing requirements through a residency, internship or fellowship program (e.g., Teach For America, TNTP, or state residency models). The exams required are the same state-specific battery as the traditional route; the difference is the timing and structure of the prep program.'
      }
    ],

    reciprocity: {
      compact: null,
      note: 'Teacher licensure has no single federal compact; portability runs through the NASDTEC Interstate Agreement, a network of bilateral agreements among most U.S. states and jurisdictions. Under it, an out-of-state certificate can be accepted by a member state, but the transfer is never automatic — the receiving state requires its own application and may demand additional exams (often its subject-area test), a pedagogy test, or extra coursework, and may issue a time-limited certificate pending completion. A few states have broad reciprocal acceptance; others effectively re-license. Always apply through the target state’s Department of Education / certification office. (Note: compacts.mjs contains no teacher-specific compact id, so compact is null here.)'
    },

    defaultAgency: 'State Department of Education / Certification Office',
    sourceUrl: 'https://www.ets.org/praxis/states/',
    verified: true,
    confidence: 'high',

    states: {
      AL: { agency: 'Alabama State Department of Education, Certification', agencyUrl: 'https://www.alabamaachieves.org/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。初始证书 5 年，需学士学位。', compactMember: false },
      AK: { agency: 'Alaska Department of Education & Early Development', agencyUrl: 'https://education.alaska.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。初始证书 5 年。', compactMember: false },
      AZ: { agency: 'Arizona Department of Education, Certification', agencyUrl: 'https://www.azed.gov/', fee: '≈$100–$200/科', note: '使用 AEPA（Arizona Educator Proficiency Assessments，NES/Pearson 体系）。证书 6 年。', compactMember: false },
      AR: { agency: 'Arkansas Department of Education, Educator Licensure', agencyUrl: 'https://www.arkansas.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 5 年。', compactMember: false },
      CA: { agency: 'Commission on Teacher Credentialing (CTC)', agencyUrl: 'https://www.ctc.ca.gov/', fee: '≈$100–$200/科', note: '使用 CBEST（基本能力）+ CSET（学科）+ 绩效评估 CalTPA。体系复杂，证书 5 年。', compactMember: false },
      CO: { agency: 'Colorado Department of Education, Educator Licensing', agencyUrl: 'https://www.cde.state.co.us/', fee: '≈$100–$200/科', note: '主要使用 Praxis；部分学科用 PLACE（Pearson）。证书 5 年。', compactMember: false },
      CT: { agency: 'Connecticut State Department of Education', agencyUrl: 'https://www.sde.ct.gov/', fee: '≈$100–$200/科', note: '使用 Praxis（部分学科 + Pearson Foundations of Reading）。已取消基本能力考试要求。证书 5 年。', compactMember: false },
      DE: { agency: 'Delaware Department of Education', agencyUrl: 'https://www.doe.k12.de.us/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      DC: { agency: 'DC Office of the State Superintendent of Education (OSSE)', agencyUrl: 'https://osse.dc.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      FL: { agency: 'Florida Department of Education, Certification', agencyUrl: 'https://www.fldoe.org/', fee: '≈$100–$200/科', note: '使用 FTCE（Florida Teacher Certification Examinations，Pearson）。含 GK、专业与教育专业考试。证书 5 年。', compactMember: false },
      GA: { agency: 'Georgia Professional Standards Commission (GaPSC)', agencyUrl: 'https://www.gapsc.com/', fee: '≈$100–$200/科', note: '使用 GACE（Georgia Assessments for the Certification of Educators，ETS）。证书 5 年。', compactMember: false },
      HI: { agency: 'Hawaii Teacher Standards Board', agencyUrl: 'https://www.htsb.org/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 5 年。', compactMember: false },
      ID: { agency: 'Idaho State Department of Education', agencyUrl: 'https://www.sde.idaho.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      IL: { agency: 'Illinois State Board of Education', agencyUrl: 'https://www.isbe.net/', fee: '≈$100–$200/科', note: '使用 ILTS（Illinois Licensure Testing System，Pearson），含 TAP 基本能力。证书 5 年。', compactMember: false },
      IN: { agency: 'Indiana Department of Education', agencyUrl: 'https://www.in.gov/doe/', fee: '≈$100–$200/科', note: '使用 CASA/CORE（Indiana CORE，Pearson）。证书 5 年。', compactMember: false },
      IA: { agency: 'Iowa Department of Education', agencyUrl: 'https://www.educateiowa.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。完成州批准 Prep 项目者多数可免考试。证书 5 年。', compactMember: false },
      KS: { agency: 'Kansas Department of Education', agencyUrl: 'https://www.ksde.org/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（已取消 PLT 要求，仍需 Subject）。证书 5 年。', compactMember: false },
      KY: { agency: 'Kentucky Education and Labor Cabinet, Certification', agencyUrl: 'https://education.ky.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 5 年。', compactMember: false },
      LA: { agency: 'Louisiana Department of Education', agencyUrl: 'https://www.louisianabelieves.com/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 5 年。', compactMember: false },
      ME: { agency: 'Maine Department of Education', agencyUrl: 'https://www.maine.gov/doe/', fee: '≈$100–$200/科', note: '自 2022 年起取消 Praxis 考试要求，完成批准 Prep 项目（GPA≥3.0）或作品集审查即可。证书 5 年。', compactMember: false },
      MD: { agency: 'Maryland State Department of Education', agencyUrl: 'https://www.marylandpublicschools.org/', fee: '≈$100–$200/科', note: '使用 Praxis（Core + Subject + Foundations of Reading + edTPA/PPAT，2026 年 9 月起须 edTPA）。证书 5 年。', compactMember: false },
      MA: { agency: 'Massachusetts Department of Elementary & Secondary Education', agencyUrl: 'https://www.doe.mass.edu/', fee: '≈$100–$200/科', note: '使用 MTEL（Massachusetts Tests for Educator Licensure，Pearson）。证书 5 年（2025 年起部分科目接受替代评估）。', compactMember: false },
      MI: { agency: 'Michigan Department of Education', agencyUrl: 'https://www.michigan.gov/mde', fee: '≈$100–$200/科', note: '使用 MTTC（Michigan Test for Teacher Certification，Pearson）。证书 5 年。', compactMember: false },
      MN: { agency: 'Minnesota Professional Educator Licensing Board', agencyUrl: 'https://mn.gov/pelb/', fee: '≈$100–$200/科', note: '使用 MTLE（Minnesota Teacher Licensure Examinations，Pearson/NES）；Tier 3/4 项目毕业生已免 MTLE，通常仍需 edTPA。证书 5 年。', compactMember: false },
      MS: { agency: 'Mississippi Department of Education', agencyUrl: 'https://www.mdek12.org/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 5 年。', compactMember: false },
      MO: { agency: 'Missouri Department of Elementary & Secondary Education', agencyUrl: 'https://dese.mo.gov/', fee: '≈$100–$200/科', note: '使用 MoGEA/MoCA（Missouri 内容评估，Pearson）。证书 4 年。', compactMember: false },
      MT: { agency: 'Montana Office of Public Instruction', agencyUrl: 'https://opi.mt.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列；或以毕业 GPA/作品集替代。证书 5 年。', compactMember: false },
      NE: { agency: 'Nebraska Department of Education', agencyUrl: 'https://www.education.ne.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列；完成批准 Prep 项目者多数已免考试。证书 5 年。', compactMember: false },
      NV: { agency: 'Nevada Department of Education', agencyUrl: 'https://doe.nv.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Core + Subject + PLT）。证书 6 年。', compactMember: false },
      NH: { agency: 'New Hampshire Department of Education', agencyUrl: 'https://www.education.nh.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（部分学科 + Foundations of Reading）。证书 3 年。', compactMember: false },
      NJ: { agency: 'New Jersey Department of Education', agencyUrl: 'https://www.nj.gov/education/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Subject）。证书 5 年。', compactMember: false },
      NM: { agency: 'New Mexico Public Education Department', agencyUrl: 'https://webnew.ped.state.nm.us/', fee: '≈$100–$200/科', note: '使用 NES 体系（NMTA，Pearson）。证书 5 年。', compactMember: false },
      NY: { agency: 'New York State Education Department, Teaching', agencyUrl: 'https://www.highered.nysed.gov/tcert/', fee: '≈$100–$200/科', note: '使用 NYSTCE（New York State Teacher Certification Examinations，Pearson）+ edTPA。专业证书需硕士。证书 5 年。', compactMember: false },
      NC: { agency: 'North Carolina Department of Public Instruction', agencyUrl: 'https://www.dpi.nc.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Subject + edTPA + Foundations of Reading）。证书 5 年。', compactMember: false },
      ND: { agency: 'North Dakota Department of Public Instruction', agencyUrl: 'https://www.nd.gov/dpi/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      OH: { agency: 'Ohio Department of Education, Licensure', agencyUrl: 'https://education.ohio.gov/', fee: '≈$100–$200/科', note: '使用 OAE（Ohio Assessments for Educators，Pearson）。证书 5 年。', compactMember: false },
      OK: { agency: 'Oklahoma State Department of Education', agencyUrl: 'https://oklahoma.gov/osde.html', fee: '≈$100–$200/科', note: '使用 CEOE/OSAT（Certification Examinations for Oklahoma Educators，Pearson）。证书 5 年。', compactMember: false },
      OR: { agency: 'Oregon Teacher Standards and Practices Commission', agencyUrl: 'https://www.oregon.gov/tspc', fee: '≈$100–$200/科', note: '使用 ORELA（Oregon Educator Licensure Assessments，NES/Pearson）。证书 5 年。', compactMember: false },
      PA: { agency: 'Pennsylvania Department of Education', agencyUrl: 'https://www.education.pa.gov/', fee: '≈$100–$200/科', note: '基本使用 Praxis；含 PECT（Pennsylvania Educator Certification Test，Pearson）。证书 5 年（Act 48 续期）。', compactMember: false },
      RI: { agency: 'Rhode Island Department of Education', agencyUrl: 'https://www.ride.ri.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      SC: { agency: 'South Carolina Department of Education', agencyUrl: 'https://ed.sc.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（Subject + PPAT）。证书 5 年。', compactMember: false },
      SD: { agency: 'South Dakota Department of Education', agencyUrl: 'https://doe.sd.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      TN: { agency: 'Tennessee Department of Education', agencyUrl: 'https://www.tn.gov/education.html', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 6 年。', compactMember: false },
      TX: { agency: 'Texas Education Agency / SBEC', agencyUrl: 'https://tea.texas.gov/', fee: '≈$100–$200/科', note: '使用 TExES（Texas Examinations of Educator Standards，ETS）+ PPR。证书 5 年。', compactMember: false },
      UT: { agency: 'Utah State Board of Education', agencyUrl: 'https://www.schools.utah.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      VT: { agency: 'Vermont Agency of Education', agencyUrl: 'https://education.vermont.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 7 年。', compactMember: false },
      VA: { agency: 'Virginia Department of Education', agencyUrl: 'https://www.doe.virginia.gov/', fee: '≈$100–$200/科', note: '主要使用 Praxis；含 VCLA（Virginia Communication and Literacy Assessment）。证书 5 年。', compactMember: false },
      WA: { agency: 'Washington Professional Educator Standards Board (PESB)', agencyUrl: 'https://www.pesb.wa.gov/', fee: '≈$100–$200/科', note: '使用 WEST（Washington Educator Skills Tests，NES/Pearson）。证书 5 年。', compactMember: false },
      WV: { agency: 'West Virginia Department of Education', agencyUrl: 'https://wvde.us/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false },
      WI: { agency: 'Wisconsin Department of Public Instruction', agencyUrl: 'https://dpi.wi.gov/', fee: '≈$100–$200/科', note: '使用 Praxis 系列（含 Foundations of Reading）。证书 5 年。', compactMember: false },
      WY: { agency: 'Wyoming Professional Teaching Standards Board', agencyUrl: 'https://ptsb.state.wy.us/', fee: '≈$100–$200/科', note: '使用 Praxis 系列。证书 5 年。', compactMember: false }
    }
  }
];
