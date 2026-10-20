// ─────────────────────────────────────────────────────────────────────
//  v2 per-state research increments — merged by ../index.mjs
//
//  One file per template: research/v2/<template-key>.mjs, holding ONLY
//  per-state v2 fields (see RESEARCH_SCHEMA.md "v2 per-state research
//  increment"). ../index.mjs deep-merges these into the v1 dossier's
//  states[CODE] objects, so multiple research agents never conflict:
//  each agent owns whole files.
//
//  To register a new template package: add an import + push it onto
//  v2Files. Keep the list alphabetically sorted by key.
// ─────────────────────────────────────────────────────────────────────

import concealedCarry from './concealed-carry.mjs';
import cpaLicensure from './cpa-licensure.mjs';
import funeralDirector from './funeral-director.mjs';
import landSurveyor from './land-surveyor.mjs';
import nursingHomeAdministrator from './nursing-home-administrator.mjs';
import professionalEngineer from './professional-engineer.mjs';
import privateInvestigator from './private-investigator.mjs';
import securityGuard from './security-guard.mjs';

export const v2Files = [concealedCarry, cpaLicensure, funeralDirector, landSurveyor, nursingHomeAdministrator, privateInvestigator, professionalEngineer, securityGuard];

export const v2ByKey = Object.fromEntries(v2Files.map((f) => [f.key, f]));

export default v2Files;
