// Job-entry hiring guides (2026-11 batch).
//
// Each guide answers the question one level above a single exam page — the
// whole hiring process, or which of several tests applies — and links down to
// the exam pages, so it does not compete with them for the exam's own query.
//
// Facts were checked in November 2026 against the primary sources listed in
// each guide's `sources`. Where a source did not settle a number, the text says
// so instead of guessing. Practice items are editor-written illustrations of
// published question styles, never live or recalled exam content.
//
// `prep.examSlug` must be a key in scripts/mometrix/exam-map.mjs.
import type { GuideArticle } from './guides';

export const jobEntryGuides: GuideArticle[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-become-a-correctional-officer',
    title: 'How to Become a Correctional Officer: The Hiring Process Step by Step',
    metaTitle: 'How to Become a Correctional Officer: Hiring Steps',
    description:
      'Every stage of correctional officer hiring: requirements, the written exam your agency uses, physical test, background and academy, with timelines and pay.',
    category: 'Public Safety Hiring',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '11 min read',
    intro: `Becoming a correctional officer is less about one exam than about surviving a sequence of screens: a written test, a physical test, a background investigation, medical and psychological evaluations, and an academy. Agencies run them in different orders and some skip the written test entirely. This guide walks through each stage, shows how three large systems differ, and tells you where the written exam fits so you can prepare for the part you can actually control.`,
    examSlugs: ['corrections-officer-entrance-exam'],
    prep: { examSlug: 'corrections-officer-entrance-exam', examName: 'corrections officer exam', afterSection: 2 },
    sections: [
      {
        heading: 'The hiring process at a glance',
        paragraphs: [
          `State prisons, county jails and the federal Bureau of Prisons all hire through a multi-stage selection process. The stages are broadly the same everywhere; what changes is the order, which stages are pass/fail versus ranked, and how long the whole thing takes. California's Department of Corrections and Rehabilitation, for example, tells applicants the application and selection process can take nine to twelve months.`,
        ],
        ordered: true,
        list: [
          { title: 'Minimum qualifications', text: 'Age, education, citizenship or work authorization, a driver’s license in many agencies, and no disqualifying criminal history. These are screened from your application before anything else happens.' },
          { title: 'Written exam', text: 'A cognitive test of reading, judgment, basic math, memory and report writing — used by many state and county agencies, but not all of them.', href: '/exams/corrections-officer-entrance-exam/' },
          { title: 'Physical ability test', text: 'A timed course or fitness battery. Some agencies test before hiring; the Bureau of Prisons tests during its academy.' },
          { title: 'Background investigation', text: 'Criminal records, employment history, references and, at many agencies, credit history. This is where most otherwise-qualified candidates stall.' },
          { title: 'Medical and psychological screening', text: 'Usually after a conditional job offer, including vision screening and drug testing.' },
          { title: 'Academy and probation', text: 'Paid training from a few weeks to several months, followed by a probationary period on the job.' },
        ],
      },
      {
        heading: 'Minimum requirements: what agencies check first',
        paragraphs: [
          `Minimum qualifications are set by each agency and printed on the job posting or exam bulletin, so read that document before you study anything. The common elements are a minimum age (often 18 or 21 depending on the state and whether the post involves firearms), a high school diploma or equivalent, U.S. citizenship or legal work authorization, and a clean enough record to pass a background check. Federal correctional positions also carry a maximum entry age under federal law-enforcement retirement rules, with limited exceptions; check the posting if you are older than the typical recruit.`,
          `Felony convictions disqualify you almost everywhere. Misdemeanors, past drug use, poor credit and gaps in employment are judged case by case, which is why honesty on the application matters more than a perfect history: an omission discovered during the background investigation is usually treated as more serious than the underlying event.`,
        ],
        callout: 'Before you buy any study material, find the exam bulletin or job posting for the exact agency you want. It tells you whether there is a written test at all, who administers it, and what score you need.',
      },
      {
        heading: 'The written exam: find out which test your agency uses',
        paragraphs: [
          `There is no single national corrections exam. Agencies either write their own test, license one from a testing company such as the National Testing Network, or use a state-mandated basic-abilities test. Some skip the written test and rank applicants on other factors. The Texas Department of Criminal Justice, for instance, describes hiring as a composite of the application, criminal background check, employer references and an interview, plus a physical agility test.`,
          `Where a written exam is used, the content is consistent even when the vendor changes: reading comprehension on policy excerpts and incident reports, situational judgment on inmate-interaction scenarios, basic math and counting (headcounts, schedules), memory and observation, report writing, and applying written rules. Passing lines around 70 percent are common, but many agencies rank candidates by score and interview from the top, so aim well above the minimum.`,
        ],
        table: {
          caption: 'How three large systems screen correctional officer applicants',
          head: ['Agency', 'Written test', 'Other screens', 'Academy'],
          rows: [
            ['California (CDCR)', 'Yes — a written exam is part of the standard selection process', 'Physical fitness test, vision screening, background, psychological and medical screening', '13 weeks, in Galt'],
            ['Texas (TDCJ)', 'No separate written score; candidates are ranked on a composite of application, background, references and interview', 'Physical agility test', 'About six weeks (roughly 240 hours)'],
            ['Federal Bureau of Prisons', 'Assessed through the federal application process', 'Background (criminal, credit, references); the physical ability test is pass/fail and taken during the academy', 'Agency training academy, including firearms and a written policy exam'],
          ],
          note: 'Taken from each agency’s published hiring pages in November 2026. Agencies revise these regularly; confirm on the current bulletin.',
        },
      },
      {
        heading: 'The physical ability test',
        paragraphs: [
          `Physical tests in corrections tend to simulate the job rather than measure general fitness: a timed obstacle course, a dummy drag, stair climbs, and in some agencies push-up, sit-up or run standards. The Bureau of Prisons treats completion of the physical components as a condition of employment and tests during training, so a candidate who passes every paper screen can still be separated at the academy.`,
          `Start training eight to twelve weeks before your test date, in parallel with written-exam study. Many corrections standards are not adjusted for age or sex, and the candidates who fail are usually the ones who assumed the written test was the hard part.`,
        ],
      },
      {
        heading: 'Background, medical and psychological screening',
        paragraphs: [
          `Expect a long personal history questionnaire covering every address, job and supervisor for years back, plus references, criminal records and, for many agencies, a credit check. Investigators are looking for honesty, reliability and vulnerability to manipulation — an officer in debt or with undisclosed relationships to people in custody is a security risk. Gather documents before you apply: past addresses, employer contacts, school records and any court paperwork.`,
          `Medical and psychological evaluations generally come after a conditional offer. The psychological screen typically combines a written inventory with an interview by a psychologist. You cannot study for it in the usual sense; the best preparation is answering consistently and candidly.`,
        ],
      },
      {
        heading: 'The academy and probation',
        paragraphs: [
          `Academy length varies more than any other stage. California's academy runs 13 weeks; Texas describes roughly six weeks and about 240 hours of instruction; smaller local agencies may run shorter programs that must be completed during a one-year probationary period. Academies cover policy, use of force, defensive tactics, first aid, report writing and, where officers are armed, firearms qualification. Most are paid, and most end with written and practical tests you must pass to keep the job.`,
        ],
      },
      {
        heading: 'Pay and job outlook',
        paragraphs: [
          `The Bureau of Labor Statistics reports a median annual wage of $57,970 for correctional officers and jailers in May 2024, with the lowest 10 percent under $41,750 and the highest 10 percent above $93,000. Federal correctional officers earned a median of about $74,190, well above state and local government, so the agency you choose moves your pay more than your exam score does.`,
          `BLS projects employment of correctional officers and bailiffs to decline 7 percent from 2024 to 2034. Even so, it expects about 31,900 openings a year, all of them from officers retiring or leaving. Hiring continues on regular cycles; treat the job as a stable entry into public safety rather than a guaranteed thirty-year career.`,
        ],
      },
      {
        heading: 'A six-week plan for the written exam',
        paragraphs: [
          `If your agency uses a written exam, plan on 40 to 60 hours over six to eight weeks if you are starting cold, or three to four weeks if you are a strong reader. The order matters more than the total hours.`,
        ],
        ordered: true,
        list: [
          { title: 'Week 1', text: 'Confirm the test vendor and format with the agency. Take one timed practice test to find your weakest area.' },
          { title: 'Weeks 2–3', text: 'Reading and rule application: practise pulling the operative facts out of policy excerpts and incident reports.' },
          { title: 'Week 4', text: 'Situational judgment: drill the professional pattern — safety first, follow policy, de-escalate, report — until it is your first instinct.' },
          { title: 'Week 5', text: 'Memory, observation and math: short daily drills. These sections improve fastest with repetition.' },
          { title: 'Week 6', text: 'Two full timed practice tests and a review of every miss. Keep physical training going throughout.' },
        ],
      },
    ],
    practice: {
      heading: 'Try four practice questions',
      intro: 'Editor-written examples of the question styles corrections exams use. They are not live exam items. The full exam page has more, plus a breakdown of every section.',
      items: [
        {
          q: 'Policy: “Visits take place Saturday and Sunday from 1:00 to 4:00 p.m. Visitors under 18 must be accompanied by an adult on the inmate’s approved visitor list.” On Sunday at 2:30 p.m., a 16-year-old on the approved list arrives alone. What should the officer do?',
          options: ['Admit the visitor because the visit is within visiting hours', 'Admit the visitor because they are on the approved list', 'Deny the visit and explain that a listed adult must accompany them', 'Ask the inmate whether the visit should go ahead'],
          answer: 2,
          why: 'Both conditions in the rule must be met. The time and the list are satisfied, but the age condition is not, so the visit cannot proceed. Rule-application items reward reading every condition, not just the first one that fits.',
        },
        {
          q: 'A housing unit has 48 beds. At the 6:00 a.m. count, 41 inmates are present in the unit, 2 are at the infirmary and 1 is at court. How many beds are unassigned?',
          options: ['3', '4', '5', '7'],
          answer: 1,
          why: 'Inmates at the infirmary and at court are still assigned to the unit. 41 + 2 + 1 = 44 assigned, and 48 − 44 = 4 unassigned beds. The trap is answering 7 by counting only the inmates physically present.',
        },
        {
          q: 'You are alone on a tier when two inmates begin shouting and squaring up to each other. What is the most appropriate first action?',
          options: ['Step between them to separate them', 'Radio for assistance and give clear verbal commands from a safe position', 'Leave the tier and write a report afterwards', 'Ignore it unless a punch is thrown'],
          answer: 1,
          why: 'Judgment items reward officer safety plus policy: summon backup and use verbal commands before any physical intervention. Stepping in alone risks injury to you and the inmates; leaving or ignoring it abandons supervision.',
        },
        {
          q: 'Which sentence is the clearest for an incident report?',
          options: ['A sharpened toothbrush was found, it was under the mattress, in 12B, at around 2140.', 'At 2140 hours, Officer Diaz found a sharpened toothbrush under the mattress in cell 12B.', 'Under the mattress at 2140 in 12B Officer Diaz found it, a toothbrush that was sharpened.', 'Officer Diaz, at about 2140 hours, it was in cell 12B, found a sharpened toothbrush.'],
          answer: 1,
          why: 'B states who, what, where and when in one complete sentence with no ambiguity. Report-writing items prefer plain, chronological, active sentences over anything that makes the reader reassemble the facts.',
        },
      ],
    },
    related: [
      { label: 'Corrections Officer Entrance Exam guide', href: '/exams/corrections-officer-entrance-exam/' },
      { label: 'The police officer hiring process', href: '/guides/police-officer-hiring-process/' },
      { label: 'Beat test anxiety on exam day', href: '/guides/beat-test-anxiety-exam-day/' },
    ],
    faqs: [
      {
        q: 'How long does it take to become a correctional officer?',
        a: 'Usually several months to a year from application to academy graduation. California’s CDCR tells applicants the application and selection process can take nine to twelve months before a 13-week academy. Smaller agencies with shorter academies can move faster, but the background investigation is usually the slowest stage everywhere.',
      },
      {
        q: 'Is there a written test to become a correctional officer?',
        a: 'At many agencies, yes, but not all. Some states and counties use a written cognitive exam covering reading, situational judgment, math, memory and report writing; others, such as the Texas Department of Criminal Justice, rank applicants on a composite of the application, background, references and an interview. The job posting or exam bulletin for your agency says which applies.',
      },
      {
        q: 'What score do you need on the corrections officer exam?',
        a: 'Each agency sets its own standard. Passing lines around 70 percent are common, but many agencies rank candidates by score and interview from the top of the list, so a bare pass can leave you without an interview. Aim well above the minimum on timed practice tests before you sit the real exam.',
      },
      {
        q: 'How much do correctional officers make?',
        a: 'The Bureau of Labor Statistics reports a median of $57,970 a year for correctional officers and jailers in May 2024, with the top 10 percent above $93,000. Federal correctional officers earned a median of about $74,190, higher than state and local government, so the agency you join has a larger effect on pay than your exam score.',
      },
      {
        q: 'Can you become a correctional officer with a misdemeanor?',
        a: 'Often, yes. Felony convictions disqualify candidates almost everywhere, but misdemeanors, past drug use and credit problems are usually judged case by case during the background investigation. What reliably ends a candidacy is leaving something off the application that the investigator later finds.',
      },
    ],
    sources: [
      { label: 'Bureau of Labor Statistics — Correctional Officers and Bailiffs (Occupational Outlook Handbook)', href: 'https://www.bls.gov/ooh/protective-service/correctional-officers.htm' },
      { label: 'CDCR — Correctional Officer open statewide examination bulletin', href: 'https://www.cdcr.ca.gov/por/wp-content/uploads/sites/162/2024/07/MAIN-CO-Bulletin_7.1.2024.pdf' },
      { label: 'CDCR Commission on Correctional Peace Officer Standards and Training — pre-employment selection standard', href: 'https://www.cdcr.ca.gov/cpost/wp-content/uploads/sites/191/2026/02/GS021-Pre-employment-Selection.pdf' },
      { label: 'Texas Department of Criminal Justice — Be a Correctional Officer', href: 'https://www.tdcj.texas.gov/divisions/hr/coinfo/emp-co.html' },
      { label: 'Federal Bureau of Prisons — Hiring process', href: 'https://www.bop.gov/jobs/hiring_process.jsp' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-nyc-civil-service-exams-work',
    title: 'How NYC Civil Service Exams Work: Applying, Testing and the Eligible List',
    metaTitle: 'How NYC Civil Service Exams Work: Lists, Fees, Scores',
    description:
      'How NYC civil service exams work: the Notice of Examination, filing on OASys, fees and waivers, list numbers, the one-in-three rule and veterans’ credit.',
    category: 'Civil Service Hiring',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '10 min read',
    intro: `A New York City civil service exam is not a license you pass once. It is a competition: your score puts you on a ranked eligible list, and agencies hire from the top of that list as jobs open up, sometimes years later. Knowing how the list works changes how you should prepare, which exams you should file for, and when to stop studying. This guide explains the process the Department of Citywide Administrative Services (DCAS) runs, from the Notice of Examination to the call from an agency.`,
    examSlugs: ['nyc-dcas-exam', 'nypd-police-officer-exam'],
    prep: { examSlug: 'nyc-dcas-exam', examName: 'NYC civil service exam', afterSection: 4 },
    sections: [
      {
        heading: 'From Notice of Examination to job offer',
        paragraphs: [
          `DCAS administers the competitive exams for most City titles, from administrative and clerical jobs to inspectors, engineers and uniformed services. Every exam follows the same arc.`,
        ],
        ordered: true,
        list: [
          { title: 'A Notice of Examination is published', text: 'DCAS posts an annual exam schedule and a monthly application schedule, then a Notice of Examination (NOE) for each exam with the filing dates, requirements, fee and test description.' },
          { title: 'You file during the application window', text: 'Online through OASys, the City’s Online Application System, or in person at a DCAS Computer-based Testing & Applications Center. Filing periods are short, and many titles are tested only every few years.' },
          { title: 'You take the test', text: 'Most open-competitive exams are now computer-based multiple-choice tests taken at a DCAS testing center; some titles use an education-and-experience rating, a practical test or, for uniformed titles, a separate physical test.' },
          { title: 'You receive a score and a list number', text: 'Candidates who pass are ranked on an eligible list and notified of their result and list number by email.' },
          { title: 'Agencies call names from the list', text: 'As positions open, DCAS certifies the highest-ranked candidates to the hiring agency, which selects under the one-in-three rule described below.' },
        ],
      },
      {
        heading: 'How to read a Notice of Examination',
        paragraphs: [
          `The NOE is the most important document in the process, and most failed applications trace back to something in it that the candidate skipped. Read these parts before you pay a fee.`,
        ],
        list: [
          { title: 'Application period', text: 'The exact window to file. Missing it can mean waiting years for the next administration.' },
          { title: 'Minimum qualifications', text: 'Education, experience or license requirements. An application that does not meet them is rejected after the fee is paid.' },
          { title: 'The test', text: 'The format and the knowledge, skills and abilities measured. This is your study blueprint; build your preparation around it rather than around a generic civil service book.' },
          { title: 'Passing score and list duration', text: 'Recent computer-based NOEs require at least 70 percent to pass and say a list will typically remain active for four years.' },
          { title: 'Residency and other conditions', text: 'Some titles require City residency or a license by the time of appointment. Check before you invest months of preparation.' },
        ],
      },
      {
        heading: 'Fees and fee waivers',
        paragraphs: [
          `Application fees vary by exam. Recent 2026 notices list fees such as $47, $61 and $68, and DCAS's fee schedule ties the amount to the title's minimum salary. Veterans can waive the fee: DCAS extended its veterans' fee waiver so it can be used an unlimited number of times on all exams. Applicants receiving certain public assistance, including SSI, can also qualify.`,
          `From July 1, 2026, Local Law 57 of 2025 expanded fee-waiver eligibility further, according to DCAS notices issued this year, including first-time applicants and New York City high school students. Check the waiver section of the specific NOE, because it states exactly which documents you must upload and by when.`,
        ],
      },
      {
        heading: 'The eligible list and the one-in-three rule',
        paragraphs: [
          `Under the City's Personnel Rules, an eligible list lasts between one and four years from the date it is established; most recent notices say four. When an agency has a vacancy, DCAS certifies the three highest-ranked candidates still on the list who are willing to accept. The agency may appoint any one of the three — the "one-in-three" rule in Personnel Rule 4.6.6(c) — so the highest scorer is not guaranteed the job, but candidates far down the list will not be reached until those above them are hired, decline or are passed over.`,
          `Two practical consequences follow. First, your score matters well beyond passing: a few points can move you hundreds of places on a large list. Second, a high list number on a title with few vacancies may never be reached before the list expires, so file for every title you genuinely qualify for rather than betting on one.`,
        ],
        callout: 'Passing gets you on the list. Your rank decides whether you are ever called. Prepare to maximise your score, not to clear 70.',
      },
      {
        heading: 'Veterans’ credit',
        paragraphs: [
          `New York State law adds credit to the passing scores of eligible veterans: 5 points for non-disabled veterans and 10 points for disabled veterans on exams for original appointment, and 2.5 and 5 points on promotion exams. The credit can be used for only one appointment or promotion. You must request it — ideally when you apply, and in any case before the eligible list is established — with proof of an honorable discharge or release under honorable conditions. A claim filed after the list is established is not processed.`,
        ],
      },
      {
        heading: 'How to prepare for a DCAS multiple-choice test',
        paragraphs: [
          `General civil service tests measure a familiar set of abilities: written comprehension, written expression, deductive and inductive reasoning, information ordering (following a procedure in the right sequence), problem sensitivity, number facility and memorization. Technical titles add job content drawn from the codes or manuals named in the NOE.`,
        ],
        ordered: true,
        list: [
          { title: 'Start from the NOE’s test description', text: 'List each ability or subject it names and estimate how many questions you are likely to see on each.' },
          { title: 'Take a timed diagnostic', text: 'Find out which abilities cost you points before you buy anything or build a schedule.' },
          { title: 'Drill your weakest two abilities daily', text: 'Short, timed sets beat long reading sessions. Review every miss until you can explain why the right answer is right.' },
          { title: 'Answer every question', text: 'Your score comes from correct answers, so an educated guess is worth more than a blank.' },
          { title: 'Rehearse the testing center', text: 'Know the location, the ID you must bring and what you cannot bring in. Arrive early.' },
        ],
      },
      {
        heading: 'Uniformed and specialized titles',
        paragraphs: [
          `Uniformed titles add stages after the written exam. The NYPD Police Officer exam, for instance, is followed by medical and psychological exams, a background and character investigation, drug screening and the Job Standards Test, a timed physical course. Physical tests for uniformed titles are pass/fail and separate from your written rank, so a high written score does not help if you cannot pass the physical stage.`,
        ],
        list: [
          { title: 'NYPD Police Officer exam', text: 'Written exam, ranked list, then medical, psychological, background and physical stages.', href: '/exams/nypd-police-officer-exam/' },
          { title: 'NYC DCAS civil service exams', text: 'Format, study plan and question styles for general DCAS exams.', href: '/exams/nyc-dcas-exam/' },
        ],
      },
    ],
    practice: {
      heading: 'Try four practice questions',
      intro: 'Editor-written examples of the abilities general civil service tests measure. They are not DCAS exam items.',
      items: [
        {
          q: 'Procedure: “When a visitor arrives, (1) check photo ID, (2) record the name and time in the log, (3) call the host office, (4) issue a visitor pass.” A visitor arrives and the host office says to send them up. Which step has the clerk just completed?',
          options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
          answer: 2,
          why: 'Calling the host office is step 3, and the visitor pass (step 4) has not been issued yet. Information-ordering items test whether you can locate yourself in a written procedure.',
        },
        {
          q: 'An office processes 360 permit applications in 5 working days with 4 clerks. At the same rate, how many applications does one clerk process per day?',
          options: ['15', '18', '24', '72'],
          answer: 1,
          why: '360 ÷ 5 days = 72 per day for the office; 72 ÷ 4 clerks = 18 per clerk per day. The trap is stopping at 72.',
        },
        {
          q: 'Which sentence is written most clearly?',
          options: ['The tenant complained to the inspector about the landlord, he said the heat was off.', 'The tenant told the inspector that the landlord had left the heat off since Monday.', 'Since Monday, complaints by the tenant to the inspector were about the heat by the landlord.', 'The heat, the tenant said to the inspector about the landlord, was off since Monday.'],
          answer: 1,
          why: 'B has one clear subject, a clear chain of who did what, and a time reference. In A, “he” could be the tenant, the inspector or the landlord.',
        },
        {
          q: 'All inspectors in Unit C have completed fire-code training. Rivera has not completed fire-code training. Which statement must be true?',
          options: ['Rivera is in Unit C', 'Rivera is not in Unit C', 'Rivera is an inspector in another unit', 'Rivera will complete the training soon'],
          answer: 1,
          why: 'If every Unit C inspector has the training and Rivera does not, Rivera cannot be a Unit C inspector. Nothing in the premises says whether Rivera is an inspector at all, so C is not certain.',
        },
      ],
    },
    related: [
      { label: 'NYC DCAS Civil Service Exam guide', href: '/exams/nyc-dcas-exam/' },
      { label: 'NYPD Police Officer Exam guide', href: '/exams/nypd-police-officer-exam/' },
      { label: 'USPS postal exams 474–477', href: '/guides/usps-postal-exams-474-475-476-477/' },
    ],
    faqs: [
      {
        q: 'How do I apply for a NYC civil service exam?',
        a: 'File during the application period printed on the exam’s Notice of Examination, either online through OASys, the City’s Online Application System, or in person at a DCAS Computer-based Testing & Applications Center. DCAS publishes an annual exam schedule and a monthly application schedule so you can see which exams are opening.',
      },
      {
        q: 'How much does a NYC civil service exam cost?',
        a: 'It depends on the exam. Recent 2026 Notices of Examination list fees such as $47, $61 and $68. Veterans can waive the fee on any exam, applicants receiving certain public assistance can qualify for a waiver, and from July 1, 2026 Local Law 57 of 2025 expanded eligibility further. The NOE states the fee and the waiver documents required.',
      },
      {
        q: 'What is the one-in-three rule in NYC civil service?',
        a: 'When a City agency fills a vacancy from an eligible list, DCAS certifies the three highest-ranked candidates who are willing to accept, and the agency may appoint any one of them. It comes from Personnel Rule 4.6.6(c). The top scorer is not guaranteed the job, but candidates lower on the list are not reached until those above them are appointed, decline or are passed over.',
      },
      {
        q: 'How long does a NYC civil service list last?',
        a: 'Between one and four years from the date it is established, under the City’s Personnel Rules. Most recent Notices of Examination say a list will typically remain active for four years; some lists, such as certain NYC Health + Hospitals lists, are set for one year.',
      },
      {
        q: 'How many points do veterans get on NYC civil service exams?',
        a: 'Eligible veterans receive 5 points (10 points if disabled) on exams for original appointment, and 2.5 points (5 if disabled) on promotion exams, added to a passing score. The credit can be used for only one appointment or promotion and must be requested before the eligible list is established.',
      },
    ],
    sources: [
      { label: 'NYC DCAS — Civil service examinations', href: 'https://www.nyc.gov/site/dcas/employment/civil-service-examinations.page' },
      { label: 'NYC DCAS — How can you find upcoming exams', href: 'https://www.nyc.gov/site/dcas/employment/how-can-you-find-upcoming-exams.page' },
      { label: 'NYC Personnel Rules and Regulations — Rule 4, Examination Procedures', href: 'https://www.nyc.gov/site/dcas/reports/personnel-rules-regulations-rule-4.page' },
      { label: 'NYC DCAS — Civil service glossary', href: 'https://www.nyc.gov/site/dcas/employment/civil-service-glossary.page' },
      { label: 'NYC DCAS — Veterans’ exam fee waiver announcement', href: 'https://www.nyc.gov/site/dcas/news/21-006/dcas-waives-city-s-civil-service-exam-fees-veterans' },
      { label: 'NYC Department of Veterans’ Services — Employment', href: 'https://www.nyc.gov/site/veterans/services/employment.page' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'which-cdl-tests-do-you-need',
    title: 'Which CDL Tests Do You Need? Knowledge Tests, Endorsements and the Skills Test',
    metaTitle: 'Which CDL Tests Do You Need? Class A, B, C & Endorsements',
    description:
      'The CDL knowledge, endorsement and skills tests you need for Class A, B or C, plus the 80% pass rule, CLP timing and ELDT, straight from the federal rules.',
    category: 'Commercial Driving',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '10 min read',
    intro: `A commercial driver's license is not one test but a stack of them, and the stack depends on the vehicle you want to drive and what you want to haul. Federal rules (49 CFR Part 383) set the minimum every state must follow, and states add their own procedures on top. This guide maps the federal requirements to the tests you will actually sit, in the order you will sit them, so you study only what your license needs.`,
    examSlugs: [
      'cdl-general-knowledge-test',
      'cdl-air-brakes-knowledge-test',
      'cdl-combination-vehicles-knowledge-test',
      'cdl-hazmat-endorsement-knowledge-test',
      'cdl-passenger-endorsement-knowledge-test',
      'cdl-school-bus-endorsement-knowledge-test',
      'cdl-pre-trip-vehicle-inspection-test',
      'cdl-on-road-driving-skills-test',
    ],
    prep: { examSlug: 'cdl-general-knowledge-test', examName: 'CDL knowledge tests', afterSection: 1 },
    sections: [
      {
        heading: 'Start with the class of vehicle',
        paragraphs: [
          `Your license class is set by the heaviest vehicle you will drive, and it decides which knowledge and skills tests you take. A higher class covers the lower ones as long as you hold the right endorsements: a Class A driver may operate Class B and C vehicles, and a Class B driver may operate Class C vehicles.`,
        ],
        table: {
          caption: 'CDL classes under 49 CFR 383.91',
          head: ['Class', 'Federal definition', 'Typical vehicles'],
          rows: [
            ['Class A', 'Any combination with a gross combination weight rating of 26,001 lb or more, where the towed vehicle is rated over 10,000 lb', 'Tractor-trailers, truck and heavy trailer combinations'],
            ['Class B', 'Any single vehicle rated 26,001 lb or more, or one towing a vehicle rated 10,000 lb or less', 'Straight trucks, dump trucks, large buses'],
            ['Class C', 'Smaller vehicles that are neither A nor B but carry 16 or more people including the driver, or carry placarded hazardous materials', 'Passenger vans, small hazmat vehicles'],
          ],
        },
      },
      {
        heading: 'The knowledge tests, test by test',
        paragraphs: [
          `Everyone takes general knowledge. The rest depend on your vehicle and endorsements. Under 49 CFR 383.135 you must answer at least 80 percent of the questions correctly on each knowledge test, and each test is scored on its own — a strong general knowledge score does not carry a weak air brakes score.`,
        ],
        table: {
          caption: 'Which knowledge tests apply to you',
          head: ['Test', 'Who takes it', 'If you fail or skip it'],
          rows: [
            ['General knowledge', 'Every CDL applicant, before a learner’s permit is issued', 'No CLP or CDL'],
            ['Air brakes', 'Anyone who will drive a vehicle with air brakes, including air-over-hydraulic', 'Air brake restriction (code L) on the CLP or CDL'],
            ['Combination vehicles', 'Class A applicants', 'No Class A CLP or CDL'],
            ['Doubles/triples (T)', 'Drivers pulling double or triple trailers', 'No T endorsement'],
            ['Tank vehicle (N)', 'Drivers hauling liquids or gases in bulk tanks', 'No N endorsement'],
            ['Hazardous materials (H)', 'Drivers hauling placarded hazmat; also requires a TSA security threat assessment', 'No H endorsement'],
            ['Passenger (P)', 'Bus and passenger-vehicle drivers; also requires a skills test', 'No P endorsement'],
            ['School bus (S)', 'School bus drivers; also requires a skills test', 'No S endorsement'],
          ],
          note: 'Endorsement X is the code for tank vehicle and hazardous materials combined. States may add codes of their own, explained on the license.',
        },
        list: [
          { title: 'General knowledge test', text: 'Driving safely, vehicle inspection, cargo, emergencies.', href: '/exams/cdl-general-knowledge-test/' },
          { title: 'Air brakes test', text: 'Brake system parts, the air brake check, stopping distances.', href: '/exams/cdl-air-brakes-knowledge-test/' },
          { title: 'Combination vehicles test', text: 'Coupling, rollover risk, trailer air systems.', href: '/exams/cdl-combination-vehicles-knowledge-test/' },
          { title: 'Hazmat endorsement test', text: 'Placarding, shipping papers, loading rules.', href: '/exams/cdl-hazmat-endorsement-knowledge-test/' },
          { title: 'Passenger endorsement test', text: 'Passenger safety, loading, emergency exits.', href: '/exams/cdl-passenger-endorsement-knowledge-test/' },
          { title: 'School bus endorsement test', text: 'Loading zones, railroad crossings, student management.', href: '/exams/cdl-school-bus-endorsement-knowledge-test/' },
        ],
      },
      {
        heading: 'How the knowledge tests are built',
        paragraphs: [
          `States build their tests from an FMCSA-approved question pool based on the AAMVA CDL Test System. Federal rules require each version to include a set number of questions from each knowledge area, at least a quarter of the questions to be new from one version to the next, and repeated questions to appear in a different position with the three answer choices reordered. Each state sets the exact number of questions, so check your state's CDL manual.`,
          `Two practical consequences: memorizing a leaked answer order does not work, and the state CDL manual — free from your licensing agency — is the real syllabus. Every question is drawn from material it covers.`,
        ],
      },
      {
        heading: 'The commercial learner’s permit (CLP)',
        paragraphs: [
          `Passing the knowledge tests gets you a commercial learner's permit, which lets you practise on public roads with a qualified CDL holder beside you. The federal rules in 49 CFR 383.25 are strict.`,
        ],
        list: [
          { title: 'Minimum age 18', text: 'You also need a valid regular driver’s license from the same state.' },
          { title: '14-day wait', text: 'You cannot take the CDL skills test in the first 14 days after your CLP is first issued.' },
          { title: 'One-year limit', text: 'A CLP is valid for no more than one year from first issue without retaking the knowledge tests.' },
          { title: 'Only P, S and N on a CLP', text: 'All other endorsements are prohibited. With N you may drive only an empty, purged tank, and no CLP holder may haul hazardous materials.' },
          { title: 'Supervision', text: 'A CDL holder with the right class and endorsements must be in the front seat (or directly behind you in a bus) at all times.' },
        ],
      },
      {
        heading: 'Entry-level driver training (ELDT)',
        paragraphs: [
          `Since February 7, 2022, first-time applicants must finish entry-level driver training from a provider listed on FMCSA's Training Provider Registry before certain tests: the skills test for a first Class A or B CDL, the skills test for a first P or S endorsement, and — the exception people miss — the knowledge test for a first H endorsement. Theory and behind-the-wheel training must be completed within a year of starting.`,
          `You are exempt if you already held a Class A or B CDL, or the P, S or H endorsement, before February 7, 2022, or if you got your CLP before that date and obtain your CDL before the CLP expires. Training is not required before the general knowledge test, so many applicants take the knowledge tests first and enrol in ELDT once they hold a permit.`,
        ],
      },
      {
        heading: 'The skills test: three parts',
        paragraphs: [
          `The skills test has three segments, and you must pass each one in a vehicle representative of the class you want: a pre-trip vehicle inspection, basic vehicle control (straight-line backing, curved backing, turns, stopping) and an on-road drive. Breaking a traffic law or causing an accident during the test is an automatic fail.`,
          `The vehicle you test in can restrict your license. Testing without air brakes adds an air brake restriction (L); air-over-hydraulic brakes add a full air brake restriction (Z); an automatic transmission adds a manual transmission restriction (E); and a Class A combination with a pintle hook instead of a fifth wheel adds a tractor-trailer restriction (O). Choose your test vehicle with the jobs you want in mind.`,
        ],
        list: [
          { title: 'Pre-trip inspection', text: 'Identify and explain each safety-related part, plus the air brake check on air-equipped vehicles.', href: '/exams/cdl-pre-trip-vehicle-inspection-test/' },
          { title: 'On-road driving test', text: 'Visual search, signalling, speed, gaps, turns and following distance in traffic.', href: '/exams/cdl-on-road-driving-skills-test/' },
        ],
      },
      {
        heading: 'Age: 18 or 21?',
        paragraphs: [
          `Federal rules require drivers in interstate commerce to be at least 21. Most states issue CDLs at 18 for driving within the state only, often marked with an intrastate-only restriction (K). If you want to cross state lines or drive for most national carriers, plan around 21.`,
        ],
      },
      {
        heading: 'The study order that works',
        paragraphs: [
          `Take the tests in the order your license is built. Read your state CDL manual's general knowledge sections first and pass that test, since nothing else issues without it. Study air brakes and combination vehicles together if you are going for Class A, because the trailer air system appears in both. Add endorsements last, and only the ones you need now; you can add them later without retaking the tests you have already passed.`,
        ],
        callout: 'The free state CDL manual is the syllabus. Every knowledge test question is drawn from material it covers, so finish the relevant manual sections before you buy anything else.',
      },
    ],
    practice: {
      heading: 'Try four practice questions',
      intro: 'Editor-written examples based on the content of the model CDL manual that state manuals follow. They are not live test items; check your state manual for any state-specific rules.',
      items: [
        {
          q: 'You are driving a 40-foot vehicle at 35 mph. What following distance does the CDL manual recommend?',
          options: ['2 seconds', '3 seconds', '4 seconds', '5 seconds'],
          answer: 2,
          why: 'Below 40 mph, the manual recommends at least one second for every 10 feet of vehicle length: 40 feet means 4 seconds. Above 40 mph you add one more second.',
        },
        {
          q: 'During the air brake check, the low-air-pressure warning should come on before pressure falls below:',
          options: ['20 psi', '40 psi', '60 psi', '90 psi'],
          answer: 2,
          why: 'The warning signal must activate before pressure drops below 60 psi. If it does not, the system is not safe to drive.',
        },
        {
          q: 'After coupling a tractor to a semitrailer, you look at the fifth wheel. What should you see?',
          options: ['A small gap between the upper and lower fifth wheel', 'No space between the upper and lower fifth wheel', 'The locking jaws closed around the head of the kingpin', 'The release arm in the unlocked position'],
          answer: 1,
          why: 'There must be no space between the upper and lower fifth wheel. The locking jaws must close around the shank of the kingpin, not its head, and the release arm must be locked.',
        },
        {
          q: 'You stop on the shoulder of a two-lane road with traffic in both directions. Where do the three warning devices go?',
          options: ['All three behind the vehicle, 10, 50 and 100 feet back', 'One about 10 feet behind on the traffic side, one about 100 feet behind and one about 100 feet ahead', 'One beside the cab and two 50 feet behind', 'Only one, 100 feet behind the vehicle'],
          answer: 1,
          why: 'On a two-lane road you protect both directions of traffic: one device near the rear on the traffic side, one about 100 feet behind and one about 100 feet ahead, placed within 10 minutes of stopping.',
        },
      ],
    },
    related: [
      { label: 'CDL General Knowledge Test guide', href: '/exams/cdl-general-knowledge-test/' },
      { label: 'CDL Air Brakes Knowledge Test guide', href: '/exams/cdl-air-brakes-knowledge-test/' },
      { label: 'CDL Combination Vehicles Knowledge Test guide', href: '/exams/cdl-combination-vehicles-knowledge-test/' },
    ],
    faqs: [
      {
        q: 'What tests do I need for a Class A CDL?',
        a: 'At minimum the general knowledge test, the combination vehicles test and, if your truck has air brakes, the air brakes test, followed by the three-part skills test (pre-trip inspection, basic vehicle control and on-road driving) in a Class A vehicle. Endorsements such as hazmat, tank or doubles/triples each add their own knowledge test.',
      },
      {
        q: 'What score do you need to pass the CDL knowledge test?',
        a: 'At least 80 percent on each knowledge test, under 49 CFR 383.135. Each test is scored separately. Failing the air brakes test puts an air brake restriction on your permit or license, and failing the combination vehicles test means you cannot get a Class A permit or license.',
      },
      {
        q: 'How long do you have to wait after getting a CLP to take the skills test?',
        a: 'At least 14 days. Federal rules bar a commercial learner’s permit holder from taking the CDL skills test in the first 14 days after the permit is first issued. The CLP itself is valid for no more than one year from first issue.',
      },
      {
        q: 'Do I need ELDT before the CDL knowledge test?',
        a: 'Not for the general knowledge test. Entry-level driver training must be completed before the skills test for a first Class A or B CDL and before the skills test for a first passenger or school bus endorsement. The exception is hazmat: you must complete hazmat ELDT before taking the H endorsement knowledge test for the first time.',
      },
      {
        q: 'Which endorsements require a skills test?',
        a: 'Passenger (P) and school bus (S) require both a knowledge test and a skills test. Doubles/triples (T), tank vehicle (N) and hazardous materials (H) are knowledge tests only, though hazmat also requires a TSA security threat assessment.',
      },
    ],
    sources: [
      { label: '49 CFR 383.91 — Commercial motor vehicle groups (Cornell LII)', href: 'https://www.law.cornell.edu/cfr/text/49/383.91' },
      { label: '49 CFR 383.93 — Endorsements', href: 'https://www.law.cornell.edu/cfr/text/49/383.93' },
      { label: '49 CFR 383.25 — Commercial learner’s permit', href: 'https://www.law.cornell.edu/cfr/text/49/383.25' },
      { label: '49 CFR 383.135 — Passing knowledge and skills tests', href: 'https://www.law.cornell.edu/cfr/text/49/383.135' },
      { label: '49 CFR 383.95 and 383.153 — Restrictions and license codes', href: 'https://www.law.cornell.edu/cfr/text/49/383.153' },
      { label: '49 CFR 380.603 — Entry-level driver training applicability', href: 'https://www.law.cornell.edu/cfr/text/49/380.603' },
      { label: 'FMCSA — Entry-Level Driver Training', href: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-pass-cosmetology-state-board-exam',
    title: 'How to Pass the Cosmetology State Board Exam: Theory, Practical and What Examiners Score',
    metaTitle: 'How to Pass the Cosmetology State Board Exam (NIC 2026)',
    description:
      'The NIC cosmetology theory and practical exams from the 2026 bulletins: question counts, domain weights, the 10 timed practical sections and the kit rules.',
    category: 'Cosmetology & Barbering',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '11 min read',
    intro: `Most U.S. states license cosmetologists with exams written by the National-Interstate Council of State Boards of Cosmetology (NIC): a multiple-choice theory exam and a hands-on practical. Both are standardized, which means the rules are published in advance in NIC's Candidate Information Bulletins. Candidates who fail usually have not studied too little; they lost points on procedures the bulletin spells out. This guide distils the current bulletins, revised January 1, 2026, into what you need to know.`,
    examSlugs: ['nic-cosmetology-theory', 'nic-cosmetology-practical', 'nic-esthetics-theory', 'nic-nail-technology-theory', 'nic-barber-theory', 'nic-barber-practical'],
    prep: { examSlug: 'nic-cosmetology-theory', examName: 'cosmetology state board exam', afterSection: 1 },
    sections: [
      {
        heading: 'Who writes the exam: NIC and your state',
        paragraphs: [
          `NIC develops national theory, practical and written practical exams for cosmetology and related fields — barbering, esthetics, nail technology, hair design and others. The exams are administered by approved test administration companies and by states, and your state board decides which NIC exams you take, how you register, the fee and the passing standard. State-specific bulletins are posted by state agencies and test vendors.`,
          `So you need two documents: the NIC bulletin for your exam, which sets the content and the rules in the room, and your state's or vendor's instructions, which set logistics such as registration, fees, ID requirements and whether you work on a mannequin or a live model.`,
        ],
      },
      {
        heading: 'The theory exam: 110 questions in 90 minutes',
        paragraphs: [
          `The National Cosmetology Theory Examination contains 110 items, of which 100 are scored; the other 10 are unscored trial questions you cannot identify, so answer every one as if it counts. You have 90 minutes. The weighting tells you where to spend your study time: almost half the exam is hair care and services.`,
        ],
        table: {
          caption: 'NIC National Cosmetology Theory Examination content outline (bulletin revised January 1, 2026)',
          head: ['Domain', 'Share of items', 'What it covers'],
          rows: [
            ['Scientific Concepts', '35%', 'Infection control (sanitation, disinfection, sterilization), blood exposure procedures, OSHA and EPA requirements, anatomy of hair, skin and nails, basic chemistry and pH'],
            ['Hair Care and Services', '45%', 'Consultation and contraindications, tools, shampooing, cutting, styling, hair enhancements, color, lightening, relaxers and chemical waving'],
            ['Skin Care and Services', '10%', 'Skin analysis, contraindications, equipment and basic skin services'],
            ['Nail Care and Services', '10%', 'Nail analysis, contraindications, implements and basic nail services'],
          ],
          note: 'Your state or test vendor sets and reports the passing standard. Phones, watches of any kind, bags and notes are prohibited in the testing room.',
        },
      },
      {
        heading: 'The practical exam: 10 timed sections',
        paragraphs: [
          `The National Cosmetology Practical Examination has ten core sections, based on NIC's national job analysis. Each has a maximum time. Proctors read the instructions twice and are not allowed to answer questions beyond "Do the best you can with what you have available" or "Do as you were taught." When the timer goes off you stop and step back immediately. The exam represents more than one client, so partway through you break down your station and prepare for a new one.`,
        ],
        table: {
          caption: 'NIC Cosmetology Practical core sections and maximum times',
          head: ['Section', 'Time', 'What examiners look for'],
          rows: [
            ['1. Work area and client preparation, set up of supplies', '15 min', 'Disinfecting the work area with an EPA-registered product, sanitizing hands, setting up for the first client'],
            ['2. Thermal curling', '10 min', 'Testing iron temperature, subsectioning, safe use of the iron, four curls on top of the head'],
            ['3. Haircutting', '35 min', 'A basic layered cut with razor and shears, removing at least 1 inch throughout'],
            ['4. Work area and new client preparation', '15 min', 'Breaking down the station and setting up for a second client'],
            ['5. Chemical waving', '20 min', 'Wrapping the center back section with correct rod and band placement, saturation and a test curl'],
            ['6. Predisposition and strand test', '10 min', 'Demonstrating both preliminary tests with labelled simulated product'],
            ['7. Highlighting with foil, virgin application', '15 min', 'Subsectioning, foil placement and the final result of the simulated application'],
            ['8. Hair color retouch', '10 min', 'Subsectioning and applying simulated color to one section'],
            ['9. Virgin hair relaxer application (no base)', '15 min', 'Preparing for, applying and smoothing simulated relaxer on one back section'],
            ['10. Blood exposure procedure', '10 min', 'Cleaning the injured area, covering it with an absorbent dressing, wearing a glove or finger cover and disposing of contaminated materials'],
          ],
          note: 'From the NIC National Cosmetology Practical Examination bulletin (revised January 1, 2026). NIC announced that blood exposure procedures are being updated alongside exam revisions from March 2026; get the current version from your test vendor.',
        },
        callout: 'Infection control is scored in every section, not just section 1. If you do not follow infection control procedures, or let the work area become and remain unsafe, the result may be a failing score for the whole exam.',
      },
      {
        heading: 'The supply kit rules that cost people the exam',
        paragraphs: [
          `The bulletin's supply rules are where well-trained candidates lose points, because they are specific and they are enforced.`,
        ],
        list: [
          { title: 'Nothing goes back in the kit', text: 'The kit is dry storage and part of your work area. Keep it closed except to remove items, and never return anything to it.' },
          { title: 'Wipes, not sprays', text: 'Use EPA-registered disinfectant wipes that are bactericidal, fungicidal and virucidal. Disinfectant and aerosol sprays are not allowed.' },
          { title: 'Labels in English', text: 'Disinfectants and hand sanitizers need original manufacturer labels in English, and they cannot be simulated. No handwritten labels on manufacturer products, and no labels showing the order of use.' },
          { title: 'Three labelled containers', text: 'Bring containers marked “To be disinfected,” “Soiled linens” and “Trash,” and use the right one throughout every section.' },
          { title: 'No single-use labels', text: 'You may not label products as single-use, and using single-use products may result in a failing score.' },
          { title: 'Gloves for disinfection', text: 'Wear gloves during disinfection procedures, as the manufacturer’s directions require.' },
          { title: 'Mannequin rules', text: 'If your state requires a mannequin, it must be a full-size head approved by the vendor; premarked, presectioned, “minikin” or “junior” heads are not allowed.' },
        ],
      },
      {
        heading: 'Written practical: the alternative some states use',
        paragraphs: [
          `Some states use NIC's Written Practical Examination instead of, or alongside, the hands-on practical. It tests the same procedures through multiple-choice questions: 75 items, of which 65 are scored, in 120 minutes, with 20 percent on scientific concepts and 45 percent on hair care and services. If your state uses it, study the practical procedures as written steps — the order of a blood exposure procedure, for example — rather than only as motor skills.`,
        ],
      },
      {
        heading: 'A four-week plan',
        paragraphs: [
          `Most candidates take the exams shortly after finishing school hours, so this plan assumes you already know the services and need to make them exam-ready.`,
        ],
        ordered: true,
        list: [
          { title: 'Week 1: read the bulletins', text: 'Read the theory and practical bulletins in full. Build your kit from the suggested supplies list and label everything correctly.' },
          { title: 'Week 2: theory by weight', text: 'Spend about half your theory time on hair care and services and a third on scientific concepts, especially infection control and chemistry. Take a timed 110-question practice test at the end of the week.' },
          { title: 'Week 3: timed practical run-throughs', text: 'Run all ten sections back to back with a timer and someone reading the instructions aloud. The 35-minute haircut and the client changeover are where time usually runs out.' },
          { title: 'Week 4: clean runs only', text: 'Two more full practical rehearsals, judged only on infection control and container use. Retake a theory practice test and review every miss.' },
        ],
        callout: 'NIC sells official practice exams and practical examination overview videos ($35 each) on nictesting.org. They are non-refundable, but they come from the organization that writes the exam.',
      },
      {
        heading: 'Esthetics, nail technology and barbering',
        paragraphs: [
          `NIC's other licensing exams follow the same structure — a theory exam with a published content outline and a practical with timed, scored sections and the same infection-control rules. If you are testing in a related field, start from that field's own bulletin.`,
        ],
        list: [
          { title: 'NIC Esthetics Theory', text: 'Skin science, facials, hair removal and makeup.', href: '/exams/nic-esthetics-theory/' },
          { title: 'NIC Nail Technology Theory', text: 'Nail structure, manicures, pedicures and enhancements.', href: '/exams/nic-nail-technology-theory/' },
          { title: 'NIC Barber Theory', text: 'Shaving, cutting, chemical services and infection control.', href: '/exams/nic-barber-theory/' },
          { title: 'NIC Barber Practical', text: 'The hands-on barber exam.', href: '/exams/nic-barber-practical/' },
        ],
      },
    ],
    practice: {
      heading: 'Try four practice questions',
      intro: 'Editor-written examples in the style of the theory exam. They are not NIC exam items.',
      items: [
        {
          q: 'A product has a pH of 4.5. It is:',
          options: ['Strongly alkaline', 'Slightly alkaline', 'Neutral', 'Acidic'],
          answer: 3,
          why: 'The pH scale runs from 0 to 14 with 7 as neutral. Anything below 7 is acidic, so 4.5 is acidic — the range of many acid-balanced shampoos and conditioners.',
        },
        {
          q: 'Which level of infection control destroys all microbial life, including bacterial spores?',
          options: ['Sanitation', 'Cleaning', 'Disinfection', 'Sterilization'],
          answer: 3,
          why: 'Sterilization destroys all microbial life, including spores. Disinfection destroys most organisms on nonporous surfaces but not necessarily spores, and sanitation (cleaning) only reduces their number.',
        },
        {
          q: 'During consultation before a color service, you see an open sore on the client’s scalp. What should you do?',
          options: ['Apply color around the sore', 'Apply a protective cream and continue', 'Decline the service and suggest the client see a physician', 'Perform a strand test first'],
          answer: 2,
          why: 'An open wound is a contraindication. The service should not be performed, and the client should be referred to a physician. Recognizing contraindications is part of the consultation domain.',
        },
        {
          q: 'A cosmetologist cuts her finger with shears during a service. What is the first step?',
          options: ['Finish the haircut, then treat the cut', 'Stop the service', 'Disinfect the shears immediately', 'Apply an adhesive bandage'],
          answer: 1,
          why: 'Standard blood exposure procedures begin by stopping the service. The NIC practical then scores cleaning the injured area, covering it with an absorbent dressing, wearing a glove or finger cover and disposing of contaminated materials; follow the order in your state’s current procedure.',
        },
      ],
    },
    related: [
      { label: 'NIC Cosmetology Theory Examination guide', href: '/exams/nic-cosmetology-theory/' },
      { label: 'NIC Cosmetology Practical Examination guide', href: '/exams/nic-cosmetology-practical/' },
      { label: 'Beat test anxiety on exam day', href: '/guides/beat-test-anxiety-exam-day/' },
    ],
    faqs: [
      {
        q: 'How many questions are on the cosmetology state board theory exam?',
        a: 'The NIC National Cosmetology Theory Examination has 110 questions, of which 100 are scored, and a 90-minute time limit. The content is weighted 35 percent scientific concepts, 45 percent hair care and services, 10 percent skin care and 10 percent nail care, according to the bulletin revised January 1, 2026.',
      },
      {
        q: 'What is on the cosmetology practical exam?',
        a: 'Ten timed core sections: work area and client preparation, thermal curling, haircutting, preparation for a new client, chemical waving, predisposition and strand test, foil highlighting, color retouch, a virgin relaxer application and a blood exposure procedure. Chemical services use simulated product. Infection control is evaluated throughout.',
      },
      {
        q: 'What is an automatic fail on the cosmetology practical?',
        a: 'NIC’s bulletin says that failing to follow infection control procedures, or allowing the work area to become and remain unsafe, may result in a failing score for the examination and removal from the testing area. Using single-use products may also result in a failing score, and failing to follow blood exposure procedures may result in dismissal.',
      },
      {
        q: 'Can I use disinfectant spray on the cosmetology practical exam?',
        a: 'No. Disinfectant and aerosol sprays are not allowed in the testing environment. NIC requires EPA-registered disinfectant wipes that are bactericidal, fungicidal and virucidal, with the original manufacturer’s label in English.',
      },
      {
        q: 'Does every state use the NIC cosmetology exam?',
        a: 'Most do, but each state board decides which NIC exams it requires, how candidates register, the fee and the passing standard, and some states use their own exams or add state-law sections. Check your state board or its test vendor for your state-specific bulletin.',
      },
    ],
    sources: [
      { label: 'NIC — National Cosmetology Theory Examination CIB (revised January 1, 2026)', href: 'https://prov-testing.github.io/nic_cib/cosmetology_national_theory_english.html' },
      { label: 'NIC — National Cosmetology Practical Examination CIB', href: 'https://prov-testing.github.io/nic_cib/cosmetology_national_practical_english.html' },
      { label: 'NIC — National Cosmetology Written Practical Examination CIB', href: 'https://prov-testing.github.io/nic_cib/cosmetology_national_written_practical_english.html' },
      { label: 'NIC Testing — Exam types', href: 'https://nictesting.org/nic-exam-types/' },
      { label: 'NIC Testing — Practice exams and practical examination overviews', href: 'https://nictesting.org/exam-resources/' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'police-officer-hiring-process',
    title: 'The Police Officer Hiring Process: Every Test From the Written Exam to the Academy',
    metaTitle: 'Police Officer Hiring Process: Every Test, Step by Step',
    description:
      'Every stage of police hiring: the written exam your department uses (NPOST, FrontLine, PELLETB), physical test, oral board, background, psych and academy.',
    category: 'Public Safety Hiring',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '11 min read',
    intro: `Police hiring is a series of eliminations, and the written exam is only the first. A typical applicant faces a written test, a physical ability test, an oral board, a background investigation that often includes a polygraph, and psychological and medical evaluations before the academy even starts. Each department runs its own process, but the stages and the tests they use are surprisingly standard. This guide explains each one and how to tell which written exam your department gives.`,
    examSlugs: ['post-entry-level', 'nypd-police-officer-exam', 'law-enforcement-pat'],
    prep: { examSlug: 'post-entry-level', examName: 'police officer exam', afterSection: 1 },
    sections: [
      {
        heading: 'The stages, in the usual order',
        paragraphs: [
          `Departments differ on sequence, but almost all of them use every stage below. Many are pass/fail; the written exam and oral board are often scored and used to rank candidates.`,
        ],
        ordered: true,
        list: [
          { title: 'Application and minimum qualifications', text: 'Age, education, citizenship, a valid driver’s license and a disqualifier check. Read the department’s posting for the exact standards.' },
          { title: 'Written exam', text: 'A test of reading, writing, reasoning and judgment. Which one you take depends on the department.' },
          { title: 'Physical ability test', text: 'A job-simulation course or a fitness battery of push-ups, sit-ups and a run.', href: '/exams/law-enforcement-pat/' },
          { title: 'Oral board interview', text: 'A structured panel interview, usually scored.' },
          { title: 'Background investigation', text: 'A personal history statement, records checks, references and, at many departments, a polygraph.' },
          { title: 'Conditional offer, then psychological and medical exams', text: 'These come after a conditional offer under the Americans with Disabilities Act, along with drug screening.' },
          { title: 'Academy, field training and probation', text: 'Academy instruction, then supervised patrol with a field training officer during a probationary period.' },
        ],
      },
      {
        heading: 'Which written exam will you take?',
        paragraphs: [
          `Most departments buy a validated entry-level test from a testing company rather than writing their own. Three account for a large share of U.S. hiring, and a few big cities run their own. The job posting usually names the test; if it does not, ask the recruiter before you buy any study material.`,
        ],
        table: {
          caption: 'Common entry-level police written exams',
          head: ['Exam', 'Publisher', 'What it tests', 'How it is scored'],
          rows: [
            ['National Police Officer Selection Test (POST)', 'Stanard & Associates', 'Arithmetic, reading comprehension, grammar and incident report writing', 'Each agency sets an overall cutoff, a cutoff per section, or ranks candidates; Iowa mandates it statewide'],
            ['FrontLine National', 'National Testing Network', 'A video-based human relations test, a reading test and a report-writing test built from an incident video', 'Agencies set their own minimums per section (one posting requires 65 video, 70 reading, 70 writing)'],
            ['PELLETB', 'California POST', 'Reading and writing ability plus reasoning', 'Converted to a T-score (mean 50); each agency sets its cutoff, commonly 42 to 50'],
            ['NYPD Police Officer Exam', 'NYC DCAS', 'Cognitive ability, observation and memory', 'Ranked civil-service list; candidates are called in list order'],
          ],
          note: 'From the publishers’ and agencies’ pages in November 2026. Some agencies accept a recent PELLETB score in place of FrontLine; check each posting.',
        },
        list: [
          { title: 'National Police Officer Selection Test', text: 'Our full guide to the written exam, with practice questions.', href: '/exams/post-entry-level/' },
          { title: 'NYPD Police Officer Exam', text: 'The DCAS-administered exam and the NYPD’s later stages.', href: '/exams/nypd-police-officer-exam/' },
        ],
      },
      {
        heading: 'The physical ability test',
        paragraphs: [
          `Physical tests come in two families. Job-simulation courses ask you to complete a sequence of tasks — running, climbing, dragging a dummy, a trigger-pull test — inside a time limit; the NYPD's Job Standards Test is a well-known example. Fitness-norm batteries measure push-ups, sit-ups and a timed run against age- and sex-based norms, which many state academies use as entry standards.`,
          `Either way, the test is pass/fail and comes early. Train specifically for the format your department uses, starting at least eight to twelve weeks out. Candidates who ace the written exam and fail the run are common.`,
        ],
      },
      {
        heading: 'The oral board',
        paragraphs: [
          `An oral board is a structured interview with a panel of officers and sometimes civilians. Expect questions about why you want the job, how you have handled conflict, ethical dilemmas ("you see a fellow officer take money from a scene") and scenario questions about priorities. Panels score answers against a rubric, so specific examples from your work, military or school life score better than general statements of values.`,
        ],
        callout: 'Prepare five or six true stories that show judgment, honesty, teamwork and calm under pressure. Tell each one as situation, action and result, in under two minutes.',
      },
      {
        heading: 'Background investigation and polygraph',
        paragraphs: [
          `The background investigation is usually the longest stage. You will complete a personal history statement listing every address, job, supervisor and school for years back, any arrests or citations, drug use, debts and social media. Investigators verify it with records, references, neighbours and past employers. Many departments add a polygraph that covers the same history.`,
          `Disqualifiers vary by department and state, but the one that is close to universal is dishonesty. An old mistake you disclose is often survivable; an omission the investigator finds usually is not.`,
        ],
      },
      {
        heading: 'Psychological and medical evaluations',
        paragraphs: [
          `Under the Americans with Disabilities Act, employers may require medical examinations, including psychological tests that diagnose mental conditions, only after a conditional job offer. Police psychological screening usually combines written personality inventories with an interview by a psychologist. The medical exam covers vision, hearing and general fitness for duty, and drug screening is standard.`,
        ],
      },
      {
        heading: 'Pay and the academy',
        paragraphs: [
          `The Bureau of Labor Statistics reported a median annual wage of $76,290 for police and detectives in May 2024. Academy length is set by each state's officer-standards body and the hiring department and varies widely, so check your state's requirements. Most recruits then spend several months with a field training officer and serve a probationary period, often a year, before they are permanent.`,
        ],
      },
      {
        heading: 'How to prepare for the written exam',
        paragraphs: [
          `Whatever the test, the written stage rewards the same core skills: reading dense procedural text quickly, writing clear factual reports, basic arithmetic, and choosing the professionally sound response in judgment items.`,
        ],
        ordered: true,
        list: [
          { title: 'Identify the test', text: 'NPOST, FrontLine, PELLETB or a city exam. Each has a different format and a different scoring model.' },
          { title: 'Take a timed diagnostic', text: 'Find your weakest section before you study anything else.' },
          { title: 'Practise report writing', text: 'Write short reports from incident descriptions or videos: who, what, when, where, in chronological order, in plain sentences.' },
          { title: 'Drill grammar and spelling daily', text: 'These sections are small but easy to improve, and they often carry their own cutoff.' },
          { title: 'Aim for rank, not a pass', text: 'Where departments rank candidates, every point moves you up the list.' },
        ],
      },
    ],
    practice: {
      heading: 'Try four practice questions',
      intro: 'Editor-written examples of the arithmetic, grammar, spelling and report-writing styles entry-level police tests use. They are not live exam items.',
      items: [
        {
          q: 'An officer drives 18 miles in 24 minutes. What is the average speed?',
          options: ['36 mph', '42 mph', '45 mph', '54 mph'],
          answer: 2,
          why: '24 minutes is 0.4 hours, and 18 ÷ 0.4 = 45 mph. A quick check: 18 miles in 24 minutes is 3 miles every 4 minutes, so 45 miles in 60 minutes.',
        },
        {
          q: 'Choose the correctly written sentence.',
          options: ['Me and Officer Lee responded to the call.', 'Officer Lee and I responded to the call.', 'Officer Lee and myself responded to the call.', 'Officer Lee and me responded to the call.'],
          answer: 1,
          why: '“I” is the subject form. Remove “Officer Lee and” to test it: “I responded” is correct, while “me responded” and “myself responded” are not.',
        },
        {
          q: 'The suspect’s ______ was confirmed by two witnesses. Choose the correct spelling.',
          options: ['allibi', 'alibi', 'alibie', 'alibbi'],
          answer: 1,
          why: 'Alibi has one l and one b. Spelling items draw heavily on words officers use in reports.',
        },
        {
          q: 'Which order puts these report facts in the right sequence? (1) The suspect fled on foot. (2) The officer arrived at 1405 hours. (3) The caller reported a break-in at 1358 hours. (4) The officer broadcast a description.',
          options: ['2, 3, 1, 4', '3, 2, 1, 4', '3, 1, 4, 2', '1, 3, 2, 4'],
          answer: 1,
          why: 'Reports run in time order: the 1358 call, the 1405 arrival, the suspect fleeing, then the broadcast. Incident report items reward chronological, factual sequencing.',
        },
      ],
    },
    related: [
      { label: 'National Police Officer Selection Test guide', href: '/exams/post-entry-level/' },
      { label: 'Law Enforcement Physical Ability Test guide', href: '/exams/law-enforcement-pat/' },
      { label: 'How to become a correctional officer', href: '/guides/how-to-become-a-correctional-officer/' },
    ],
    faqs: [
      {
        q: 'What test do you take to become a police officer?',
        a: 'It depends on the department. Many use a purchased entry-level exam such as Stanard’s National Police Officer Selection Test (arithmetic, reading comprehension, grammar and incident report writing) or National Testing Network’s FrontLine National (video-based human relations, reading and report writing). California agencies use the POST PELLETB, and large cities such as New York run their own civil-service exams. The job posting names the test.',
      },
      {
        q: 'What is the order of the police hiring process?',
        a: 'Typically: application and minimum qualifications, written exam, physical ability test, oral board interview, background investigation (often with a polygraph), a conditional job offer, psychological and medical evaluations with drug screening, then the academy, field training and probation. Departments vary the order, but psychological and medical exams come after the conditional offer.',
      },
      {
        q: 'What disqualifies you from becoming a police officer?',
        a: 'Standards vary by department and state, but felony convictions, certain misdemeanors such as domestic violence, recent illegal drug use and serious driving offenses are common disqualifiers. Dishonesty during the background investigation is close to universally disqualifying, which is why disclosing past problems is usually safer than leaving them out.',
      },
      {
        q: 'What is a passing score on the police written exam?',
        a: 'There is no single passing score. Agencies using Stanard’s POST set overall or per-section cutoffs or rank candidates; FrontLine agencies set their own section minimums; PELLETB results are T-scores with agency cutoffs commonly between 42 and 50. Where candidates are ranked, a higher score moves you up the hiring list.',
      },
      {
        q: 'How much do police officers make?',
        a: 'The Bureau of Labor Statistics reported a median annual wage of $76,290 for police and detectives in May 2024. Pay varies widely by department, and large departments publish their salary schedules.',
      },
    ],
    sources: [
      { label: 'Stanard & Associates — National Police Officer Selection Test (POST)', href: 'https://stanard.com/public-safety/police-test/the-national-police-officer-selection-test' },
      { label: 'National Testing Network — FrontLine National law enforcement test', href: 'https://nationaltestingnetwork.com/publicsafetyjobs/ntn-test-law.cfm' },
      { label: 'California Commission on POST', href: 'https://post.ca.gov/' },
      { label: 'NYC DCAS — Police Officer exam', href: 'https://www.nyc.gov/site/dcas/employment/police-officer.page' },
      { label: 'U.S. EEOC — Preemployment disability-related questions and medical examinations', href: 'https://www.eeoc.gov/laws/guidance/enforcement-guidance-preemployment-disability-related-questions-and-medical' },
      { label: 'Bureau of Labor Statistics — Police and Detectives (Occupational Outlook Handbook)', href: 'https://www.bls.gov/ooh/protective-service/police-and-detectives.htm' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'usps-postal-exams-474-475-476-477',
    title: 'USPS Postal Exams 474, 475, 476 and 477: Which One You’ll Take and How It’s Scored',
    metaTitle: 'USPS Exams 474, 475, 476 & 477: Which One Is Yours?',
    description:
      'Which USPS Virtual Entry Assessment goes with which job, the six exercise types, the 72-hour window, the 70% pass mark and the one-year retake rule.',
    category: 'Federal Hiring',
    dateDisplay: 'November 2026',
    dateISO: '2026-11-05',
    readTime: '8 min read',
    intro: `Most entry-level Postal Service jobs require a Virtual Entry Assessment (VEA), an online test you take on your own device within 72 hours of being invited. There are four versions — 474, 475, 476 and 477 — and which one you take depends on the job group you apply to. USPS says the test needs no study, and it is mostly about work style and judgment rather than knowledge. What it does reward is understanding the format and the rules, because a missed deadline or a failed attempt locks you out of that job group for a year.`,
    examSlugs: ['usps-vea-474', 'usps-vea-475', 'usps-vea-476', 'usps-vea-477'],
    prep: { examSlug: 'usps-vea-474', examName: 'USPS postal exam', afterSection: 4 },
    sections: [
      {
        heading: 'Which exam goes with which job',
        paragraphs: [
          `Each VEA version covers a job group, not a single job. USPS lists them as follows.`,
        ],
        table: {
          caption: 'USPS Virtual Entry Assessments by job group',
          head: ['Exam', 'Job group', 'Job titles USPS lists'],
          rows: [
            ['474 (VEA – MC)', 'Mail Carrier', 'City Carrier, Rural Carrier, City Carrier Assistant, Rural Carrier Associate'],
            ['475 (VEA – MH)', 'Mail Handler', 'Mail Handler, Mail Handler Assistant'],
            ['476 (VEA – MP)', 'Mail Processing', 'Mail Processing Clerk, PSE Mail Processing Clerk'],
            ['477 (VEA – CS)', 'Customer Service', 'Sales and Services Associate, PSE Sales and Services/Distribution Associate'],
          ],
          note: 'The exam a posting requires is listed under “Examination Requirements” on the job posting itself.',
        },
        list: [
          { title: 'VEA 474 — Mail Carrier', text: 'Our guide to the carrier assessment.', href: '/exams/usps-vea-474/' },
          { title: 'VEA 475 — Mail Handler', text: 'Our guide to the mail handler assessment.', href: '/exams/usps-vea-475/' },
          { title: 'VEA 476 — Mail Processing', text: 'Our guide to the mail processing assessment.', href: '/exams/usps-vea-476/' },
          { title: 'VEA 477 — Customer Service', text: 'Our guide to the customer service assessment.', href: '/exams/usps-vea-477/' },
        ],
      },
      {
        heading: 'How the assessment works',
        paragraphs: [
          `After you apply for a job that requires a VEA, you receive an email from USPS's applicant tracking system, eCareer, with a link to the assessment. Check your spam folder. Not every applicant is invited: each posting invites a set number of applicants on a first-come, first-served basis, so apply early in the posting window.`,
          `From the moment the invitation is sent you have three days (72 hours) to finish. USPS estimates 30 to 45 minutes. You can use a computer, laptop, tablet or smartphone, at a time and place of your choosing, and the test is not proctored. USPS recommends finishing in one sitting but does not require it. If you apply to several jobs that use the same VEA version, you must finish within 72 hours of the first invitation.`,
        ],
        callout: 'Miss the 72-hour deadline and you are removed from consideration for that job. You can apply to other postings and take the test again later, but that opening is gone.',
      },
      {
        heading: 'The six exercise types',
        paragraphs: [
          `USPS's VEA Candidate Guide describes six kinds of exercise. Different versions contain different exercises, and not every exercise appears in every version.`,
        ],
        list: [
          { title: 'Realistic Job Preview', text: 'Information about the work, daily tasks, rewards and challenges. It has no questions and is the only unscored section, but read it: it describes the behaviour the rest of the test looks for.' },
          { title: 'Work Situations', text: 'Job-related scenarios with four possible responses. For each, you pick the response you are most likely to take and the one you are least likely to take.' },
          { title: 'Checking for Accuracy', text: 'You check whether customer information on screen matches USPS records or contains an error. This is the one section that is a speed-and-accuracy skill.' },
          { title: 'What Motivates You', text: 'You choose which of two statements best reflects your job preferences.' },
          { title: 'Tell Us Your Story', text: 'Questions about your work history. With no work experience, draw on school, sports or other activities.' },
          { title: 'Describe Your Work Style', text: 'You choose which of two statements is more like you.' },
        ],
      },
      {
        heading: 'Scoring, results and retakes',
        paragraphs: [
          `You must score at least 70 percent to pass. Results appear in your eCareer Candidate Profile on the Assessments page, either as a score or as "ineligible." Candidates who do not complete the assessment within 72 hours are also marked ineligible for that job.`,
          `A passing score is reused automatically for future jobs that require the same VEA version, until the expiration date on your Notice of Results. If you do not pass, you cannot retake that version for one year from your most recent attempt — and you cannot be considered for any job in that group during that time. You may take a different version immediately if you apply to a job in a different group. USPS never charges for exams or applications.`,
        ],
        table: {
          caption: 'What happens after you take a VEA',
          head: ['Outcome', 'What it means'],
          rows: [
            ['Pass (70% or more)', 'Your score is used for this application and for later jobs that use the same version, until it expires'],
            ['Ineligible (did not pass)', 'No jobs in that group for one year; other versions can be taken right away'],
            ['Ineligible (missed 72 hours)', 'Removed from that job; you can apply again to other postings'],
          ],
        },
      },
      {
        heading: 'Should you prepare?',
        paragraphs: [
          `USPS's own guide says you do not need to study for the VEA, and that is broadly true: most sections measure work style and judgment, not knowledge you can cram. But because one failed attempt costs a year, it is worth an hour of preparation.`,
        ],
        list: [
          { title: 'Read the Realistic Job Preview carefully', text: 'It tells you what the job values — reliability, safety, attendance, customer service, working in all weather — and the scored sections reward answers consistent with it.' },
          { title: 'Answer consistently and honestly', text: 'Work style items repeat themes in different words. Inconsistent answers to the same underlying question tend to look worse than any single choice.' },
          { title: 'Practise checking for accuracy', text: 'Compare names, addresses and ZIP codes character by character. Slowing down slightly beats rushing and missing a transposed digit.' },
          { title: 'Take it early, somewhere quiet', text: 'Start soon after the invitation, on a stable internet connection, without interruptions.' },
        ],
        callout: 'Be wary of anything sold as the “real” USPS test or its answer key. USPS does not publish answer keys, and the work style sections have no single correct answer.',
      },
    ],
    practice: {
      heading: 'Try three checking-for-accuracy items',
      intro: 'Editor-written examples of the Checking for Accuracy exercise: compare the entry on screen with the record and find the error, if there is one. They are not USPS test items.',
      items: [
        {
          q: 'Record: Maria Delgado, 4182 Westbrook Ave Apt 3C, Dayton OH 45406. On screen: Maria Delgado, 4182 Westbrook Ave Apt 3C, Dayton OH 45460.',
          options: ['No error', 'Error in name', 'Error in street address', 'Error in ZIP code'],
          answer: 3,
          why: 'The last two digits of the ZIP code are swapped: 45406 in the record, 45460 on screen. Transposed digits are the most common error type, so compare numbers digit by digit.',
        },
        {
          q: 'Record: James O’Connell, 77 Harbor View Rd, Portland ME 04101. On screen: James O’Connell, 77 Harbor View Dr, Portland ME 04101.',
          options: ['No error', 'Error in name', 'Error in street address', 'Error in ZIP code'],
          answer: 2,
          why: 'The street suffix changed from Rd to Dr. Suffixes are easy to skim past, which is exactly why they appear in these items.',
        },
        {
          q: 'Record: Priya Natarajan, 2290 Elm St, Fresno CA 93721. On screen: Priya Natarajan, 2290 Elm St, Fresno CA 93721.',
          options: ['No error', 'Error in name', 'Error in street address', 'Error in ZIP code'],
          answer: 0,
          why: 'Every element matches. Some items have no error, and choosing “No error” with confidence is part of the skill.',
        },
      ],
    },
    related: [
      { label: 'USPS VEA 474 (Mail Carrier) guide', href: '/exams/usps-vea-474/' },
      { label: 'USPS VEA 477 (Customer Service) guide', href: '/exams/usps-vea-477/' },
      { label: 'How NYC civil service exams work', href: '/guides/how-nyc-civil-service-exams-work/' },
    ],
    faqs: [
      {
        q: 'What is the difference between USPS exams 474, 475, 476 and 477?',
        a: 'Each covers a different job group. 474 is for mail carriers (City Carrier, Rural Carrier, City Carrier Assistant, Rural Carrier Associate), 475 for mail handlers, 476 for mail processing clerks and 477 for customer service roles such as Sales and Services Associate. The job posting lists the exam it requires under “Examination Requirements.”',
      },
      {
        q: 'How long do you have to take the USPS assessment?',
        a: 'Three days (72 hours) from the time the invitation email is sent. USPS estimates the assessment takes 30 to 45 minutes. If you miss the deadline you are removed from consideration for that job, though you can apply to others and test later.',
      },
      {
        q: 'What score do you need to pass the USPS exam?',
        a: 'At least 70 percent, according to USPS’s VEA Candidate Guide. Results appear in your eCareer Candidate Profile as a score or as “ineligible,” and a passing score is reused for future jobs that require the same version until it expires.',
      },
      {
        q: 'Can you retake the USPS 474 exam if you fail?',
        a: 'Not for one year. If you do not pass a VEA version, you cannot retake that same version for 12 months from your most recent attempt, and you cannot be considered for jobs in that group meanwhile. You can take a different version, such as 475, 476 or 477, right away if you apply to a job in a different group.',
      },
      {
        q: 'Do you need to study for the USPS Virtual Entry Assessment?',
        a: 'USPS says no study is needed, because most sections measure work style and judgment. It is still worth reading the Realistic Job Preview carefully, answering consistently and practising the checking-for-accuracy format, since a failed attempt locks you out of that job group for a year.',
      },
    ],
    sources: [
      { label: 'USPS Careers — Postal exams', href: 'https://about.usps.com/careers/how-to-apply/exams.htm' },
      { label: 'USPS — Virtual Entry Assessment Candidate Guide (PDF)', href: 'https://about.usps.com/careers/global/pdf/vea-guide.pdf' },
      { label: 'USPS — Online Job Application System: Virtual Entry Assessment (PDF)', href: 'https://about.usps.com/careers/job-application/usps-vea.pdf' },
    ],
  },
];
