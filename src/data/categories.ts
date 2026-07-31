import { Category } from './types';

export const categories: Category[] = [
  { id: 'real-estate', name: 'Real Estate', icon: '⌂', color: 'coral', description: 'Real estate sales, broker, and appraiser licenses', seoTitle: 'Real Estate Licenses & Certifications' },
  { id: 'accounting', name: 'Accounting & Tax', icon: '⌁', color: 'blue', description: 'CPA, Enrolled Agent, and bookkeeping certifications', seoTitle: 'Accounting Certifications & Tax Credentials' },
  { id: 'trades', name: 'Skilled Trades', icon: '⌘', color: 'mint', description: 'HVAC, electrical, plumbing, and general contractor licenses', seoTitle: 'Skilled Trades Licenses & Certifications' },
  { id: 'workplace-safety', name: 'Workplace Safety', icon: '✦', color: 'gold', description: 'OSHA, HAZWOPER, and safety certifications', seoTitle: 'Workplace Safety Certifications' },
  // { id: 'healthcare', name: 'Healthcare', icon: '✚', color: 'rose', description: 'Nursing, medical assisting, and allied health credentials', seoTitle: 'Healthcare Credentials & Certifications' },
  // { id: 'technology', name: 'Technology', icon: '⎔', color: 'indigo', description: 'IT, cloud computing, and cybersecurity certifications', seoTitle: 'IT Certifications & Credentials' },
  // { id: 'finance', name: 'Finance & Securities', icon: 'Ⓢ', color: 'emerald', description: 'Series 7, CFA, and financial advisor credentials', seoTitle: 'Financial Credentials & Licenses' }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
