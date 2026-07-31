export type Provider = {
  name: string;
  url: string;
  affiliateUrl?: string;
  price: string;
  features: string[];
  isSponsored: boolean;
  rating?: number;
};

export type StateSpecificData = {
  regulatorName: string;
  regulatorUrl: string;
  requiredHours?: number;
  examFee?: string;
  additionalRequirements?: string[];
  licenseFee?: string;
};

export type ExamDetails = {
  questionCount?: number;
  duration?: string;
  passRate?: string;
  retakePolicy?: string;
  format?: string;
};

export type Credential = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  type: 'License' | 'Exam' | 'Training' | 'Certification';
  time: string;
  cost: string;
  difficulty: string;
  audience: string;
  accent: string;
  states?: string[];
  isNational?: boolean;
  stateSpecificData?: Record<string, StateSpecificData>;
  examDetails?: ExamDetails;
  prerequisites?: string[];
  providers: Provider[];
  facts: { label: string; value: string }[];
  steps: string[];
  faq?: { question: string; answer: string }[];
  source: string;
  sourceUrl: string;
  reviewed: string;
  relatedSlugs?: string[];
  salaryRange?: string;
  renewalInfo?: string;

  // Extended registration-flow content (rich exam pages, e.g. EA/CPA/TX RE)
  quickAnswer?: QuickAnswer;
  roadmap?: string[];
  comparison?: ComparisonTable;
  registrationSteps?: FlowStep[];
  timeline?: TimelineRow[];
  costBreakdown?: { items: CostItem[]; total: string; footnote?: string };
  summaryPoints?: string[];
};

export type StateInfo = {
  code: string;
  name: string;
  slug: string;
  capital: string;
  region: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
  seoTitle: string;
  color: string;
};

// ----- Extended registration-flow content (rich exam pages) -----

export type FlowStep = {
  title: string;
  description?: string;
  subSteps?: string[];
  duration?: string;
  note?: string;
};

export type ComparisonRow = {
  label: string;
  values: string[];
};

export type ComparisonTable = {
  title: string;
  columns: string[];
  rows: ComparisonRow[];
};

export type TimelineRow = {
  stage: string;
  duration: string;
};

export type CostItem = {
  item: string;
  fee: string;
};

export type QuickAnswer = {
  summary: string;
  advantages?: string[];
};
