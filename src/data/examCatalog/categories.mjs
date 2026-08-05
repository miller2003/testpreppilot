// Top-level taxonomy for the /exams directory.
// `order` drives display sequence; `icon` is a text glyph to match the
// existing editorial look (no icon fonts, no emoji).

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
  { id: 'trades',                   name: 'Skilled Trades & Construction', icon: '⌘', color: 'mint',   order: 13, description: 'Electrical, plumbing, HVAC, welding, automotive, crane, code inspection and craft credentials.' },
  { id: 'engineering-design',       name: 'Engineering, Architecture & Design', icon: '⟁', color: 'blue',   order: 14, description: 'NCEES FE and PE exams, structural and surveying licensure, ARE, interior design and green building.' },
  { id: 'workplace-safety',         name: 'Workplace Safety', icon: '✦', color: 'gold',   order: 15, description: 'OSHA outreach and trainer courses, HAZWOPER, BCSP certifications and hazard-specific training.' },
  { id: 'environment',              name: 'Environmental & Water', icon: '❧', color: 'sage',   order: 16, description: 'Asbestos, lead, mold and radon credentials, water and wastewater operators, pesticide applicators.' },
  { id: 'transportation',           name: 'Driving & Transportation', icon: '⛟', color: 'amber',  order: 17, description: 'CDL and endorsements, driver licence knowledge tests, rail, transit and logistics credentials.' },
  { id: 'aviation-maritime',        name: 'Aviation & Maritime', icon: '✈', color: 'blue',   order: 18, description: 'FAA airman knowledge tests, aircraft maintenance, FCC radio licences and USCG mariner credentials.' },
  { id: 'public-safety',            name: 'Public Safety & Emergency', icon: '⚑', color: 'copper', order: 19, description: 'Police and firefighter entrance exams, fire service certification, dispatch and emergency management.' },
  { id: 'government-civil-service', name: 'Government & Civil Service', icon: '⚖', color: 'slate',  order: 20, description: 'Federal hiring assessments, postal exams, foreign service, procurement and public management credentials.' },
  { id: 'beauty-wellness',          name: 'Cosmetology & Personal Care', icon: '✿', color: 'plum',   order: 21, description: 'Cosmetology, barbering, esthetics, nail technology, massage and spa licensing.' },
  { id: 'food-hospitality',         name: 'Food Safety & Hospitality', icon: '☕', color: 'amber',  order: 22, description: 'Food manager and handler certification, alcohol service, culinary, sommelier and hotel credentials.' },
  { id: 'security-investigation',   name: 'Security & Investigation', icon: '⚿', color: 'ink',    order: 23, description: 'Security guard licensing, private investigation, protection professional and firearms credentials.' },
  { id: 'fitness-recreation',       name: 'Fitness, Sport & Recreation', icon: '⚡', color: 'mint',   order: 24, description: 'Personal training, strength and conditioning, aquatics, outdoor guiding and officiating certifications.' },
  { id: 'animal-agriculture',       name: 'Animal & Agriculture', icon: '❦', color: 'sage',   order: 25, description: 'Veterinary technician and licensing exams, animal care, grooming, farrier and agronomy credentials.' },
  { id: 'personal-services',        name: 'Funeral & Personal Services', icon: '❈', color: 'slate',  order: 26, description: 'Funeral service, long-term care administration, interpreting, coaching and community service credentials.' }
];

export const categoryById = Object.fromEntries(examCategories.map((c) => [c.id, c]));

export default examCategories;
