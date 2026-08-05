// ─────────────────────────────────────────────────────────────────────
//  TestPrepPilot — 市场热度（粗略）评分 · 按"每个考试"排，不按分类排
//
//  设计：分类只占一个很低的"保底分"（30–52，仅反映该领域的大致相关度），
//  真正拉开差距的是【每个考试/证书本身】的关键词信号——命中知名、高搜索量
//  的证书就大幅加分。州级同名考试的变体（如 cdl-tx / cdl-ca）按证书类型
//  匹配，拿到相同分数。仍是启发式、非精确搜索量，但已做到"按考试排序"。
//
//  分层：≥80 高 · 60–79 中 · <60 低
// ─────────────────────────────────────────────────────────────────────

// 分类保底分（窄区间，仅作地板，不主导）
const CATEGORY_FLOOR = {
  'healthcare-clinical': 52,
  'allied-health': 50,
  'trades': 50,
  'technology': 48,
  'accounting': 46,
  'real-estate': 46,
  'finance-securities': 44,
  'transportation': 44,
  'behavioral-health': 44,
  'public-safety': 42,
  'project-business': 42,
  'insurance': 42,
  'government-civil-service': 42,
  'education-teaching': 40,
  'engineering-design': 40,
  'workplace-safety': 40,
  'legal': 38,
  'security-investigation': 38,
  'environment': 36,
  'aviation-maritime': 34,
  'food-hospitality': 34,
  'beauty-wellness': 34,
  'fitness-recreation': 32,
  'personal-services': 30,
  'admissions-academic': 30,
  'animal-agriculture': 28
};

// 知名、搜索量大的证书/执照 —— 命中即按权重加分（可叠加，封顶 100）
// 第一档：国民级高频考证（+45）
const TOP = [
  /nursing|nclex|\brn\b|\blpn\b|\bcna\b|certified nursing assistant|medical assistant|phlebotom|emt|paramedic/,
  /cdl|commercial driver|truck|cmv/,
  /comptia|security\+|network\+|\ba\+|cybersecurity|cyber security/,
  /aws|amazon web|azure|microsoft cloud|google cloud|\bgcp\b/,
  /cissp|cism|cisa|security cert|infosec/,
  /pmp|capm/,
  /\bcpa\b|certified public accountant|cfa|cfp|\bcma\b|enrolled agent|bookkeep/,
  /real estate|realtor|\bbroker\b|apprais/,
  /series 7|series 65|series 66|series 63|series 6|\bsie\b|finra|stockbroker|investment adviser/,
  /hvac|electrician|plumb|hvacr/,
  /cosmetolog|barber|nail technician|esthetics/,
  /notary/,
  /pe exam|professional engineer|engineering license/,
  /esl|tesol|tefl|teaching english/,
  /personal trainer|nasm|\bace\b|fitness cert/,
  /ccna|ccnp|ccie|ccst|cisco/
];

// 第二档：业界熟知（+28）
const MID = [
  /linux\+|lpics?\b|itil/,
  /scrum|agile|six sigma|lean six/,
  /mcsa|mcse|microsoft cert|oracle|salesforce|tableau|power bi/,
  /sonograph|ultrasound|rdms|radiolog|imaging|x-ray/,
  /pharmacy tech|dental assistant|physical therapist|occupational therapist|surgical tech|surgical techn/,
  /ekg|ecg|medical billing|medical coding|health information/,
  /insurance|adjust|underwrit|\bp&c\b|life and health/,
  /paralegal|court reporter|legal assistant/,
  /praxis|teacher cert|teaching credential|substitute teacher/,
  /pilot|faa|airline|aviation cert|maritime|deckhand|merchant marine|captain/,
  /cda|early childhood|daycare|child development/,
  /nutrition|dietitian|diet/,
  /welding|welder/,
  /massage therapist|barbering/
];

// 第三档：有一定需求（+15）
const LOW = [
  /veterinar|vet tech|animal/,
  /groomer|\bpet\b|pet care|pet sitter/,
  /food safety|servsafe|culinary|chef/,
  /security guard|private investigator/,
  /translator|interpreter/,
  /event planner|wedding/,
  /photographer|photo/,
  /social media|digital marketing/,
  /bookkeep|quickbooks/
];

export function demandScore(e) {
  let s = CATEGORY_FLOOR[e.category] ?? 30;
  const hay = ((e.slug || '') + ' ' + (e.name || '')).toLowerCase();
  for (const re of TOP) if (re.test(hay)) s += 45;
  for (const re of MID) if (re.test(hay)) s += 28;
  for (const re of LOW) if (re.test(hay)) s += 15;
  return Math.max(0, Math.min(100, Math.round(s)));
}

export function demandTier(score) {
  return score >= 80 ? '高' : score >= 60 ? '中' : '低';
}
