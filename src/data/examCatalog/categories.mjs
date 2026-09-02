// Top-level taxonomy for the /exams directory.
// `order` drives display sequence; `icon` is a text glyph to match the
// existing editorial look (no icon fonts, no emoji).
//
// 2026-09-02 consolidation: five categories that held fewer than 3 published
// exams were merged into semantically adjacent hubs (see CATEGORY_MERGES
// below). Their /categories/<id> URLs 301 to the target via public/_redirects.

export const examCategories = [
  { id: 'admissions-academic',      name: 'Admissions & Academic Testing', icon: '✎', color: 'indigo', order: 1,  description: 'College and graduate admissions, AP, CLEP, high-school equivalency, English proficiency and placement tests.' },
  { id: 'healthcare-clinical',      name: 'Healthcare & Clinical Licensure', icon: '✚', color: 'rose',   order: 2,  description: 'Physician, nursing, pharmacy, dental, vision and rehabilitation licensing and board certification exams.' },
  { id: 'allied-health',            name: 'Allied Health & Medical Support', icon: '❥', color: 'coral',  order: 3,  description: 'Imaging, laboratory, EMS, coding, pharmacy technician and clinical support credentials.' },
  { id: 'behavioral-health',        name: 'Counseling & Behavioral Health', icon: '☯', color: 'plum',   order: 4,  description: 'Social work, counseling, psychology, marriage and family therapy and applied behavior analysis exams.' },
  { id: 'education-teaching',       name: 'Teaching & Education', icon: '✐', color: 'gold',   order: 5,  description: 'Praxis, state teacher licensure, school leadership and early-childhood credentials.' },
  { id: 'real-estate',              name: 'Real Estate & Property', icon: '⌂', color: 'coral',  order: 6,  description: 'Salesperson and broker licensing, appraisal, home inspection and property management.' },
  { id: 'accounting',               name: 'Accounting & Tax', icon: '⌁', color: 'blue',   order: 7,  description: 'CPA, Enrolled Agent, management accounting, bookkeeping and payroll credentials.' },
  { id: 'finance-securities',       name: 'Finance & Securities', icon: 'Ⓢ', color: 'emerald', order: 8, description: 'FINRA series exams, CFA, CFP, banking, treasury and mortgage licensing.' },
  { id: 'insurance',                name: 'Insurance & Risk', icon: '⛨', color: 'slate',  order: 9,  description: 'Producer licensing, adjuster credentials, actuarial exams and risk management designations.' },
  { id: 'legal',                    name: 'Legal & Law', icon: '§', color: 'ink',    order: 10, description: 'Bar exams and components, MPRE, patent bar, paralegal and court reporting credentials.' },
  { id: 'technology',               name: 'IT, Cloud & Cybersecurity', icon: '⎔', color: 'indigo', order: 11, description: 'CompTIA, Cisco, Microsoft, AWS, Google Cloud, security, data and enterprise platform certifications.' },
  { id: 'project-business',         name: 'Project Management & Business', icon: '◈', color: 'teal',   order: 12, description: 'PMP and agile certifications, quality and Six Sigma, HR, supply chain and business analysis.' },
  { id: 'trades',                   name: 'Trades, Construction & Engineering', icon: '⌘', color: 'mint',   order: 13, description: 'Electrical, plumbing, HVAC, welding, automotive and crane credentials, plus NCEES FE and PE engineering licensure.' },
  { id: 'workplace-safety',         name: 'Workplace Safety', icon: '✦', color: 'gold',   order: 15, description: 'OSHA outreach and trainer courses, HAZWOPER, BCSP certifications, EPA lead and hazard-specific training.' },
  { id: 'transportation',           name: 'Transportation & Aviation', icon: '⛟', color: 'amber',  order: 17, description: 'CDL and endorsements, driver licence knowledge tests, FAA airman and remote-pilot (Part 107) tests, rail, transit and logistics credentials.' },
  { id: 'public-safety',            name: 'Government & Public Safety', icon: '⚑', color: 'copper', order: 19, description: 'Police, firefighter and corrections entrance exams, fire service certification, federal hiring and postal assessments, dispatch and emergency management.' },
  { id: 'food-hospitality',         name: 'Food Safety & Hospitality', icon: '☕', color: 'amber',  order: 22, description: 'Food manager and handler certification, alcohol service, culinary, sommelier and hotel credentials.' },
  { id: 'security-investigation',   name: 'Security & Investigation', icon: '⚿', color: 'ink',    order: 23, description: 'Security guard licensing, private investigation, protection professional and firearms credentials.' },
  { id: 'fitness-recreation',       name: 'Fitness, Wellness & Personal Care', icon: '⚡', color: 'mint',   order: 24, description: 'Personal training, strength and conditioning, aquatics and outdoor guiding, plus cosmetology, barbering and esthetics licensing.' },
  { id: 'animal-agriculture',       name: 'Animal & Agriculture', icon: '❦', color: 'sage',   order: 25, description: 'Veterinary technician and licensing exams, animal care, grooming, farrier and agronomy credentials.' },
  { id: 'personal-services',        name: 'Funeral & Personal Services', icon: '❈', color: 'slate',  order: 26, description: 'Funeral service, long-term care administration, interpreting, coaching and community service credentials.' }
];

// Legacy → current category id. Applied in index.mjs when catalog rows are
// built so every consumer (directory, category pages, filters, stats) sees
// the merged taxonomy regardless of what the raw research files say.
export const CATEGORY_MERGES = {
  'engineering-design': 'trades',          // FE Civil + trades construction cluster
  'environment': 'workplace-safety',       // EPA lead / hazard certifications
  'aviation-maritime': 'transportation',   // FAA Part 107 remote pilot
  'government-civil-service': 'public-safety', // USPS VEA + entrance-exam family
  'beauty-wellness': 'fitness-recreation'  // NIC cosmetology theory & practical
};

export const categoryById = Object.fromEntries(examCategories.map((c) => [c.id, c]));

export default examCategories;
