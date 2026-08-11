// Central EEAT entity definitions for TestPrepPilot.
//
// Single source of truth for the editorial-desk identity, the review network,
// and the canonical trust-page URLs used across pages and structured data.
// Keeping these in one place means internal links and schema never drift.

export const SITE = 'https://testpreppilot.com';

export const DESK = {
  name: 'TestPrepPilot Editorial Desk',
  url: `${SITE}/about`,
  description:
    'The research and editorial team behind TestPrepPilot. We read primary ' +
    'regulatory sources line by line and distill them into verified, ' +
    'source-linked credential roadmaps.',
};

// Canonical trust-page URLs — reuse everywhere so internal links never drift.
export const TRUST_PAGES = {
  about: '/about',
  methodology: '/methodology',
  reviewers: '/reviewers',
  editorialPolicy: '/editorial-policy',
  disclosure: '/disclosure',
  privacy: '/privacy',
  contact: '/contact',
  howItWorks: '/how-it-works',
} as const;

// Review-network domains we recruit licensed experts for. Used by /reviewers
// and the AuthorByline "Reviewed by" block. No reviewer names are hard-coded
// here — real reviewers are onboarded separately and each must be independently
// verifiable. We will never invent a reviewer (that is a fabricated-endorser
// risk under Google's quality guidelines).
export const REVIEW_DOMAINS = [
  { field: 'Real estate & appraisal', note: 'State-licensed brokers and appraisers' },
  { field: 'Tax & accounting', note: 'Enrolled Agents and CPAs' },
  { field: 'Skilled trades', note: 'Licensed electricians, plumbers, HVAC, contractors' },
  { field: 'Healthcare', note: 'Nurses, medical assistants, coding specialists' },
  { field: 'Legal & public safety', note: 'Attorneys, notaries, peace officers' },
  { field: 'Technology & IT', note: 'Certified engineers and security practitioners' },
  { field: 'Fitness & wellness', note: 'Certified personal trainers, nutrition coaches' },
  { field: 'Education & teaching', note: 'Certified educators and state-exam coaches' },
];

// Site Organization schema node with internal sameAs consolidation.
// Internal sameAs helps search engines tie the trust pages to the publisher
// entity without inventing off-site social profiles we do not control.
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: 'TestPrepPilot',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo.png`, width: 512, height: 512 },
    image: `${SITE}/og-image.png`,
    description:
      'An independently researched guide to U.S. professional licenses and ' +
      'certifications — requirements, exam format, costs and timelines, ' +
      'verified against primary regulatory sources.',
    areaServed: { '@type': 'Country', name: 'United States' },
    sameAs: [
      `${SITE}/about`,
      `${SITE}/methodology`,
      `${SITE}/reviewers`,
      `${SITE}/editorial-policy`,
    ],
  };
}
