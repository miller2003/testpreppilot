// AUTO-MANAGED by the TestPrepPilot content manager (manager/server.mjs).
// slug -> ISO release date "YYYY-MM-DD". A page is built only when its
// release date <= today (UTC). Edit via the manager UI, not by hand.

export const releases = {
  "aama-cma": "2026-08-04",
  "ace-certified-personal-trainer": "2026-08-04",
  "afaa-certified-personal-trainer": "2026-08-04",
  "aipb-certified-bookkeeper": "2026-08-04",
  "ase-t7-truck-hvac": "2026-08-04",
  "aws-certified-cloud-practitioner": "2026-08-04",
  "aws-certified-solutions-architect-associate": "2026-08-04",
  "cdl-air-brakes-knowledge-test": "2026-08-04",
  "cdl-combination-vehicles-knowledge-test": "2026-08-04",
  "cdl-general-knowledge-test": "2026-08-04",
  "certified-dietary-manager-cfpp": "2026-08-04",
  "cfa-level-1": "2026-08-04",
  "cisco-ccna": "2026-08-04",
  "cisco-ccna-cybersecurity": "2026-08-04",
  "cisco-ccnp-cybersecurity": "2026-08-04",
  "cisco-ccst-cybersecurity": "2026-08-04",
  "comptia-a-plus": "2026-08-04",
  "comptia-cysa-plus": "2026-08-04",
  "comptia-linux-plus": "2026-08-04",
  "comptia-network-plus": "2026-08-04",
  "comptia-security-plus": "2026-08-04",
  "danb-cda": "2026-08-04",
  "fe-civil": "2026-08-04",
  "itil-4-foundation": "2026-08-04",
  "microsoft-ai-900": "2026-08-04",
  "microsoft-ai-901": "2026-08-04",
  "microsoft-az-104": "2026-08-04",
  "microsoft-az-140": "2026-08-04",
  "microsoft-az-204": "2026-08-04",
  "microsoft-az-305": "2026-08-04",
  "microsoft-az-500": "2026-08-04",
  "microsoft-az-700": "2026-08-04",
  "microsoft-az-900": "2026-08-04",
  "nacpb-cpb": "2026-08-04",
  "nasm-certified-nutrition-coach": "2026-08-04",
  "nasm-certified-personal-trainer": "2026-08-04",
  "nclex-rn": "2026-08-04",
  "nic-cosmetology-practical": "2026-08-04",
  "nic-cosmetology-theory": "2026-08-04",
  "nnaap-cna": "2026-08-04",
  "nremt-emt": "2026-08-04",
  "pmi-pmp": "2026-08-04",
  "praxis-core-combined-5752": "2026-08-04",
  "praxis-elementary-education-multiple-subjects-5001": "2026-08-04",
  "praxis-plt-grades-k-6-5622": "2026-08-04",
  "scrum-alliance-certified-scrummaster": "2026-08-04",
  "series-65": "2026-08-04",
  "series-66": "2026-08-04",
  "series-7": "2026-08-04",
  "sie-exam": "2026-08-04",
};

export function isReleased(slug, now = new Date()) {
  const d = releases[slug];
  if (!d) return false;
  return new Date(d + 'T00:00:00Z') <= now;
}

export default releases;
