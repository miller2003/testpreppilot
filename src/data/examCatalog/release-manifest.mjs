// AUTO-MANAGED by the TestPrepPilot content manager (manager/server.mjs).
// slug -> ISO release date "YYYY-MM-DD". A page is built only when its
// release date <= today (UTC). Edit via the manager UI, not by hand.

export const releases = {
  "aama-cma": "2026-08-06",
  "ace-certified-group-fitness-instructor": "2026-08-18",
  "ace-certified-personal-trainer": "2026-08-09",
  "afaa-certified-personal-trainer": "2026-08-11",
  "aipb-certified-bookkeeper": "2026-08-06",
  "ase-t7-truck-hvac": "2026-08-11",
  "aws-certified-cloud-practitioner": "2026-08-13",
  "aws-certified-solutions-architect-associate": "2026-08-13",
  "cdl-air-brakes-knowledge-test": "2026-08-08",
  "cdl-combination-vehicles-knowledge-test": "2026-08-07",
  "cdl-general-knowledge-test": "2026-08-15",
  "cdl-on-road-driving-skills-test": "2026-08-17",
  "certified-dietary-manager-cfpp": "2026-08-04",
  "cfa-level-1": "2026-08-07",
  "cfa-level-2": "2026-08-19",
  "cisco-ccna": "2026-08-11",
  "cisco-ccna-cybersecurity": "2026-08-09",
  "cisco-ccnp-cybersecurity": "2026-08-05",
  "cisco-ccst-cybersecurity": "2026-08-05",
  "cms-introductory-sommelier": "2026-08-19",
  "comptia-a-plus": "2026-08-13",
  "comptia-cysa-plus": "2026-08-08",
  "comptia-linux-plus": "2026-08-05",
  "comptia-network-plus": "2026-08-04",
  "comptia-security-plus": "2026-08-14",
  "corrections-officer-entrance-exam": "2026-08-18",
  "danb-cda": "2026-08-13",
  "fe-civil": "2026-08-12",
  "hazwoper-8-hour-supervisor": "2026-08-17",
  "itil-4-foundation": "2026-08-10",
  "microsoft-ai-900": "2026-08-14",
  "microsoft-ai-901": "2026-08-05",
  "microsoft-az-104": "2026-08-11",
  "microsoft-az-140": "2026-08-14",
  "microsoft-az-204": "2026-08-12",
  "microsoft-az-305": "2026-08-12",
  "microsoft-az-500": "2026-08-02",
  "microsoft-az-700": "2026-08-05",
  "microsoft-az-900": "2026-08-04",
  "nacpb-cpb": "2026-08-13",
  "nasm-certified-nutrition-coach": "2026-08-06",
  "nasm-certified-personal-trainer": "2026-08-02",
  "nclex-rn": "2026-08-07",
  "nic-cosmetology-practical": "2026-08-13",
  "nic-cosmetology-theory": "2026-08-04",
  "nnaap-cna": "2026-08-05",
  "npte": "2026-08-18",
  "nra-certified-instructor": "2026-08-17",
  "nremt-emt": "2026-08-15",
  "pmi-pmp": "2026-08-02",
  "praxis-core-combined-5752": "2026-08-07",
  "praxis-elementary-education-multiple-subjects-5001": "2026-08-06",
  "praxis-plt-grades-k-6-5622": "2026-08-07",
  "pro-board-firefighter-i": "2026-08-18",
  "scrum-alliance-certified-scrummaster": "2026-08-09",
  "series-65": "2026-08-04",
  "series-66": "2026-08-11",
  "series-7": "2026-08-02",
  "servsafe-alcohol-advanced": "2026-08-18",
  "sie-exam": "2026-08-15",
};

export function isReleased(slug, now = new Date()) {
  const d = releases[slug];
  if (!d) return false;
  return new Date(d + 'T00:00:00Z') <= now;
}

export default releases;
