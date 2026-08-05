// Interstate compacts & reciprocity frameworks.
// These are what make "one license works in many states" true, and they are the
// reason redundant per-state pages are still valuable (long-tail capture).
//
// `covers` lists the state-template keys (from stateTemplates.mjs) this compact applies to.
// Per-state MEMBERSHIP is filled by the research dossiers (states[CODE].compactMember),
// NOT hardcoded here, because membership changes and must be verified.

export const compacts = [
  {
    id: 'nlc',
    name: 'Nurse Licensure Compact (NLC)',
    url: 'https://www.ncsbn.org/nurse-licensure-compact.htm',
    covers: ['rn-licensure', 'lpn-licensure'],
    note: 'Holds a single multistate license valid for practice in all member states.'
  },
  {
    id: 'emsc',
    name: 'EMS Compact',
    url: 'https://www.emscompact.gov',
    covers: ['emt-certification', 'paramedic'],
    note: 'Allows EMS personnel to practice across member states with one license.'
  },
  {
    id: 'ptc',
    name: 'Physical Therapy Compact',
    url: 'https://www.ptcompact.org',
    covers: ['physical-therapist'],
    note: 'Compact privileges across member states.'
  },
  {
    id: 'psypact',
    name: 'Psychology Interjurisdictional Compact (PSYPACT)',
    url: 'https://psypact.org',
    covers: ['psychologist'],
    note: 'Telehealth and temporary in-person practice across member states.'
  },
  {
    id: 'aslp',
    name: 'Audiology & Speech-Language Pathology Compact (ASLP-IC)',
    url: 'https://aslpcompact.org',
    covers: ['speech-language-pathologist', 'audiologist'],
    note: 'Compact privileges across member states.'
  },
  {
    id: 'otc',
    name: 'Occupational Therapy Compact',
    url: 'https://otcompact.org',
    covers: ['occupational-therapist'],
    note: 'Compact privileges across member states.'
  },
  {
    id: 'counseling',
    name: 'Counseling Compact',
    url: 'https://counselingcompact.org',
    covers: ['counselor'],
    note: 'Compact privileges across member states.'
  },
  {
    id: 'aswb',
    name: 'Social Work Compact (ASWB)',
    url: 'https://www.aswb.org',
    covers: ['social-worker'],
    note: 'Rolling adoption across states.'
  },
  {
    id: 'ube',
    name: 'Uniform Bar Exam (UBE) score transfer',
    url: 'https://www.ncbex.org/exams/ube',
    covers: ['bar-exam'],
    note: 'UBE score is portable across ~40 jurisdictions; functionally a shared credential even though it is not a license compact.'
  },
  {
    id: 'cpa-mobility',
    name: 'CPA Mobility / Practice Privilege',
    url: 'https://www.aicpa.org/resources/article/cpa-mobility',
    covers: ['cpa-licensure'],
    note: 'CPAs licensed in one state may practice in most others without re-licensing.'
  }
];

export const compactById = Object.fromEntries(compacts.map((c) => [c.id, c]));

// Resolve which compact (if any) a state template key belongs to.
export function compactFor(templateKey) {
  return compacts.find((c) => c.covers.includes(templateKey)) || null;
}

export default compacts;
