// v2 per-state research increment — concealed-carry
// Compiled 2026-10-20. Framework verified across three concordant 2026 trackers:
// Freedom's Lodge "Concealed Carry by State 2026", LegalClarity's constitutional-carry
// compilations, and World Population Review's shall-issue ranking. National landscape:
// 29 states have permitless (constitutional) carry — Alabama, Alaska, Arizona,
// Arkansas, Florida, Georgia, Idaho, Indiana, Iowa, Kansas, Kentucky, Louisiana,
// Maine, Mississippi, Missouri, Montana, Nebraska, New Hampshire, North Dakota, Ohio,
// Oklahoma, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, West
// Virginia and Wyoming (Louisiana effective 4 July 2024; South Carolina 7 March 2024;
// Vermont has never had a permit system). Florida's permitless rule covers concealed
// carry only (open carry still licensed). The 2022 NYSRPA v. Bruen decision ended
// may-issue discretion; California, Connecticut, Delaware, Hawaii, Maryland,
// Massachusetts, New Jersey, New York and D.C. retained permits with heavy
// requirements and sensitive-place bans. 2026 changes: West Virginia HB 4106 lowered
// permitless carry to 18 from 12 June 2026; Wyoming HB0096 lowered the permit age to
// 18 effective 1 July 2026; Virginia\u2019s 2027 law shifts reciprocity decisions to
// the Attorney General on 1 July 2027; the Eighth Circuit\u2019s Johnson v. Jacobson
// (cert denied 5 October 2026) holds reciprocity is interstate courtesy, not a
// constitutional right. No wages field: concealed carry is a permit, not an
// occupation, so no BLS SOC applies.

export default {
  key: 'concealed-carry',
  compiledOn: '2026-10-20',
  states: {
    AL: {
      education: { hours: 'Permitless carry statewide; the county-issued permit (shall-issue, residents only) remains available mainly for reciprocity and pistol-purchase convenience', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Alabama remains a constitutional-carry state with a permitless minimum age of 19 \u2014 slightly above the 18-and-21 split elsewhere.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Alabama?', a: 'No \u2014 Alabama has permitless carry for anyone 19 or older who can legally possess a handgun under state and federal law.' },
        { q: 'Why would an Alabamian still get a permit?', a: 'For reciprocity while travelling and for exemptions in the pistol-purchase process; the permit is shall-issue but issued to residents only, by county.' },
        { q: 'Can an 18-year-old carry without a permit here?', a: 'No \u2014 Alabama\u2019s permitless age is 19, an outlier among constitutional-carry states.' },
        { q: 'Does permitless carry remove all restrictions?', a: 'No \u2014 federal prohibited-person rules apply everywhere, and state location restrictions still govern where a handgun may be carried.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    AK: {
      education: { hours: 'Constitutional carry since 2003 (the second state ever); the shall-issue permit is available to residents only for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2023, change: 'Alaska\u2019s permitless framework dates to 2003, making it one of only two states that adopted constitutional carry before the 2010s wave.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions' }],
      stateFaqs: [
        { q: 'Does Alaska require a permit to carry concealed?', a: 'No \u2014 Alaska has had constitutional carry since 2003 for anyone eligible to possess a handgun.' },
        { q: 'Who can get an Alaska permit?', a: 'Residents only, on a shall-issue basis \u2014 useful chiefly for reciprocity with other states.' },
        { q: 'Is open carry also allowed without a permit?', a: 'Yes \u2014 Alaska\u2019s permitless framework covers both open and concealed carry.' },
        { q: 'What federal rules still apply?', a: 'Prohibited-person categories (felonies, domestic-violence misdemeanours, unlawful drug use including marijuana, dishonorable discharge) bar possession entirely.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    AZ: {
      education: { hours: 'Constitutional carry; shall-issue permits issued to both residents and non-residents for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Arizona issues permits to residents and non-residents alike on a shall-issue basis \u2014 one of the main non-resident permit destinations.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'Is Arizona a permitless state?', a: 'Yes \u2014 constitutional carry for eligible adults, with no permit needed to carry concealed.' },
        { q: 'Can a non-resident get an Arizona permit?', a: 'Yes \u2014 Arizona is one of the shall-issue states that accepts both residents and non-residents, which is why its permit is popular for travel.' },
        { q: 'What disqualifies a person here?', a: 'The federal floor: felony convictions, domestic-violence misdemeanours, active protective orders, unlawful drug use (including marijuana), dishonorable discharge.' },
        { q: 'Does a medical marijuana card conflict with carrying?', a: 'Yes \u2014 marijuana remains a federal Schedule I substance, and ATF\u2019s January 2026 rule frames the bar around regular use continuing into the present.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry map', url: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    AR: {
      education: { hours: 'Constitutional carry; shall-issue permits issued to residents only', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Arkansas\u2019s permitless age is 21 for civilians, with an 18-year threshold for active-duty military, Guard, reservists and honorably discharged veterans.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'Can I carry without a permit in Arkansas?', a: 'Yes \u2014 constitutional carry applies to eligible adults 21 and over, and to service members 18 and over.' },
        { q: 'Who can obtain the Arkansas permit?', a: 'Residents only, shall-issue \u2014 mostly for reciprocity purposes.' },
        { q: 'What is the military exception?', a: 'Active-duty military, National Guard, reservists and honorably discharged veterans may carry from age 18.' },
        { q: 'Are holsters required for open carry?', a: 'In permitless states generally, an openly carried handgun must be holstered \u2014 in-hand or waistband carry can still be illegal.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    CA: {
      education: { hours: 'Permit required (may-issue lineage now shall-issue after Bruen litigation); 8\u201316 hours of training plus live-fire and good-moral-character review per the v1-verified county practice', sourceUrl: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/' },
      recentChanges: [{ year: 2026, change: 'California post-Bruen operates shall-issue in name, with extensive location restrictions \u2014 no carry in most commercial establishments unless clearly posted as permitted \u2014 and a 10-round magazine limit that shapes what can be carried.', sourceUrl: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/' }],
      stateFaqs: [
        { q: 'Is California may-issue or shall-issue now?', a: 'After Bruen and subsequent litigation it is shall-issue in name, but extensive training requirements and broad sensitive-place bans keep issuance slow and carry constrained.' },
        { q: 'What training does California require?', a: 'Roughly 8\u201316 hours of board-recognised training including live fire, set county by county (per the county-published practices captured in the v1 dossier).' },
        { q: 'What are the magazine limits?', a: 'A 10-round cap applies to what can be lawfully carried.' },
        { q: 'Can I carry in a shopping mall?', a: 'Generally no \u2014 most commercial establishments are off-limits unless the property clearly posts that carry is permitted.' }
      ],
      sources: [
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    },
    CO: {
      education: { hours: 'Permit required; shall-issue, but permits are issued to residents only', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Colorado remains a permit-required state whose shall-issue permits go to residents only \u2014 non-residents cannot obtain a Colorado permit.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'Is Colorado permitless?', a: 'No \u2014 Colorado still requires a permit for concealed carry.' },
        { q: 'Does Colorado issue to non-residents?', a: 'No \u2014 its shall-issue permits are limited to residents.' },
        { q: 'Can I carry in Colorado on another state\u2019s permit?', a: 'Yes, where reciprocity applies \u2014 Colorado honours permits from states it recognises; always check the current list before travelling.' },
        { q: 'Is open carry allowed without a permit?', a: 'Colorado generally permits open carry, though local restrictions in Denver and some municipalities limit it.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    CT: {
      education: { hours: 'Permit required; retains may-issue-lineage requirements after Bruen, with training and board review', sourceUrl: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/' },
      recentChanges: [{ year: 2026, change: 'Connecticut sits in the group of states that kept permit systems with substantial requirements after Bruen; the Second Amendment protects carriage but Connecticut\u2019s process remains onerous.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Connecticut permitless?', a: 'No \u2014 a state permit is required, and Connecticut remains among the more demanding states after Bruen.' },
        { q: 'What does the application involve?', a: 'Training and a background check through the state permitting authority, with local involvement in the process.' },
        { q: 'Did Bruen force Connecticut to become shall-issue?', a: 'It ended proper-cause discretion, but Connecticut\u2019s remaining requirements still make the process more involved than pure shall-issue states.' },
        { q: 'How long is a Connecticut permit valid?', a: 'State-issued permits run on the multi-year cycle set by statute, with renewals through the same authority.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    },
    DE: {
      education: { hours: 'Permit required; may-issue to residents only under the post-Bruen classification', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Delaware is classified as may-issue to residents only \u2014 one of the few states still running a discretionary system after Bruen.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'Is Delaware shall-issue?', a: 'No \u2014 Delaware remains may-issue for residents only, among the most restrictive classifications after Bruen.' },
        { q: 'Can non-residents obtain a Delaware permit?', a: 'No \u2014 issuance is limited to residents.' },
        { q: 'What must an applicant show?', a: 'The discretionary standard applies, making documentation of need part of the application in practice.' },
        { q: 'Does a Delaware permit travel well?', a: 'Recognition depends entirely on other states\u2019 reciprocity lists \u2014 and the 2026 Eighth Circuit decision confirmed reciprocity is courtesy, not a constitutional right.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    },
    DC: {
      education: { hours: 'Permit required; restrictive \u2014 extensive requirements and many off-limits areas', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' },
      recentChanges: [{ year: 2026, change: 'The District remains the most restrictive jurisdiction: technically shall-issue after Bruen but with extensive requirements and broad sensitive-place bans.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'How hard is DC concealed carry?', a: 'Among the hardest anywhere \u2014 heavy application requirements plus an unusually long list of off-limits locations.' },
        { q: 'Is DC technically shall-issue?', a: 'Yes, post-Bruen \u2014 but the requirement stack and sensitive-place bans make practical carry difficult, which is why trackers label it restrictive.' },
        { q: 'Does DC honour other states\u2019 permits?', a: 'Essentially no \u2014 restrictive jurisdictions generally do not honour outside permits.' },
        { q: 'What federal categories still bind here?', a: 'All of them \u2014 the federal prohibited-person floor applies in every jurisdiction.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    FL: {
      education: { hours: 'Permitless concealed carry (since the 2023 law); open carry still requires a licence; shall-issue permits available to residents only', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions' },
      recentChanges: [{ year: 2026, change: 'Florida\u2019s permitless rule covers concealed carry only \u2014 openly carrying a handgun still requires a licence \u2014 and its shall-issue permits are resident-only.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions' }],
      stateFaqs: [
        { q: 'Is Florida fully permitless?', a: 'For concealed carry, yes \u2014 but Florida is the standout case where open carry still requires a licence.' },
        { q: 'Who can get a Florida licence?', a: 'Residents only, shall-issue \u2014 worth holding for reciprocity with the many states that recognise it.' },
        { q: 'When did Florida change?', a: 'The permitless concealed-carry law took effect in 2023, followed by the rest of the 2024 wave elsewhere.' },
        { q: 'What disqualifies someone in Florida?', a: 'The standard federal floor plus Florida\u2019s own disqualifiers \u2014 felony and domestic-violence rules are the most common bars.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 Constitutional carry map', url: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    GA: {
      education: { hours: 'Constitutional carry; shall-issue permits issued to residents only (Weapons Carry License)', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Georgia\u2019s permitless age is 21 for civilians, with an 18-year exception for active-duty military, Guard, reservists and honorably discharged veterans.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'Do I need a permit in Georgia?', a: 'No \u2014 constitutional carry applies to eligible adults 21 and over (18 for qualifying service members).' },
        { q: 'What is the Weapons Carry License for?', a: 'Reciprocity with other states, plus convenience in purchasing \u2014 issued shall-issue to residents only.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 Georgia\u2019s permitless framework spans both open and concealed carry.' },
        { q: 'Does Georgia recognise other states\u2019 permits?', a: 'It matters less for residents (permitless covers them), but Georgia\u2019s recognition list still governs visitors from permit states.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    HI: {
      education: { hours: 'Permit required; may-issue lineage with training and the county police chief as issuer', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Hawaii remains in the heaviest-requirement group after Bruen, with county chiefs handling issuance and broad sensitive-place rules.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Hawaii permitless?', a: 'No \u2014 a permit issued by the county police chief is required, and Hawaii sits in the heaviest-requirement group.' },
        { q: 'What does the application require?', a: 'Training plus the county-level review process the chief administers.' },
        { q: 'How did Bruen change Hawaii?', a: 'It ended proper-cause discretion, but Hawaii kept the permitting structure with extensive conditions.' },
        { q: 'Do Hawaii permits work elsewhere?', a: 'Recognition depends on other states; Hawaii\u2019s own recognition of outside permits is minimal.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    },
    ID: {
      education: { hours: 'Constitutional carry at 18; shall-issue enhanced permits issued to residents and non-residents for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Idaho\u2019s permitless age is 18, and its enhanced permit \u2014 the reciprocity workhorse \u2014 is open to non-residents.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'Do I need a permit in Idaho?', a: 'No \u2014 permitless carry starts at 18 for eligible adults.' },
        { q: 'What is the Idaho enhanced permit?', a: 'A shall-issue permit (with training) that Idaho issues to residents and non-residents, recognised widely for reciprocity.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both open and concealed carry fall under the permitless framework.' },
        { q: 'Any location restrictions?', a: 'Yes \u2014 standard sensitive places (schools, courthouses) still apply despite permitless carry.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    IL: {
      education: { hours: 'Permit required (CCL, shall-issue to residents and non-residents); Illinois also requires a FOID card for any firearm possession', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Illinois is a shall-issue concealed-carry state \u2014 and uniquely, firearm possession itself requires a FOID card before any carry question arises.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'What is Illinois\u2019s two-card system?', a: 'A FOID card is required just to possess a firearm, and a separate Concealed Carry Licence is required to carry \u2014 both from the state.' },
        { q: 'Is the CCL shall-issue?', a: 'Yes \u2014 Illinois must issue to qualified applicants, residents and non-residents alike.' },
        { q: 'Is training required?', a: 'Yes \u2014 the CCL requires statutory training hours on top of the FOID process.' },
        { q: 'Can a non-resident carry in Illinois?', a: 'Only with a recognised licence or an Illinois CCL \u2014 Illinois is not a permitless state.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    IN: {
      education: { hours: 'Constitutional carry (since 2022); shall-issue Lifetime Handgun Licence issued to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Indiana\u2019s permitless age is 18, and its lifetime licence \u2014 unusual nationally \u2014 is available to residents and non-residents.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'When did Indiana go permitless?', a: '2022 \u2014 with permitless carry from age 18.' },
        { q: 'What is distinctive about the Indiana licence?', a: 'It is issued for life, on a shall-issue basis, to residents and non-residents \u2014 one of the few lifetime permits anywhere.' },
        { q: 'Why keep the licence?', a: 'Reciprocity in other states and NICS-exempt pistol purchases.' },
        { q: 'Is open carry allowed?', a: 'Yes \u2014 within the same framework.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    IA: {
      education: { hours: 'Constitutional carry since 2021; shall-issue permits issued to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Iowa\u2019s permitless age is 18, with shall-issue permits open to non-residents.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29' }],
      stateFaqs: [
        { q: 'Is Iowa permitless?', a: 'Yes \u2014 since 2021, from age 18.' },
        { q: 'Who can get an Iowa permit?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'What does the permit add?', a: 'Reciprocity recognition in other states.' },
        { q: 'Any state-specific disqualifiers?', a: 'Iowa applies its own bars alongside the federal floor.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    KS: {
      education: { hours: 'Constitutional carry since 2015; shall-issue permits issued to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Kansas\u2019s permitless carry has run since 2015, with the shall-issue licence retained for reciprocity.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'When did Kansas adopt constitutional carry?', a: '2015 \u2014 well before the post-Bruen wave.' },
        { q: 'Do permits still exist?', a: 'Yes \u2014 shall-issue to residents and non-residents, mainly for travel.' },
        { q: 'What is the permitless age?', a: '21 for standard permitless carry.' },
        { q: 'Are location rules still enforced?', a: 'Yes \u2014 permitless carry does not open restricted places.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    KY: {
      education: { hours: 'Constitutional carry since 2019; shall-issue permits issued to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Kentucky\u2019s 2019 permitless law predates Bruen, and the shall-issue CCDW licence remains open to non-residents.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'Is Kentucky permitless?', a: 'Yes \u2014 since 2019 for eligible adults.' },
        { q: 'What is CCDW?', a: 'Kentucky\u2019s Concealed Deadly Weapons Licence \u2014 shall-issue, including to non-residents.' },
        { q: 'Does the licence require training?', a: 'The permit path includes a training component even though permitless carry does not.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    LA: {
      education: { hours: 'Constitutional carry since 4 July 2024; shall-issue permits issued to residents only', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions' },
      recentChanges: [{ year: 2024, change: 'Louisiana enacted permitless carry effective 4 July 2024 \u2014 one of the two most recent additions to the constitutional-carry map.', sourceUrl: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions' }],
      stateFaqs: [
        { q: 'How new is Louisiana permitless carry?', a: 'Effective 4 July 2024 \u2014 among the newest constitutional-carry laws.' },
        { q: 'What is the permitless age?', a: '18 \u2014 Louisiana allows permitless carry from 18, unlike its 21-age neighbours.' },
        { q: 'Who can still get a permit?', a: 'Residents, shall-issue, for reciprocity.' },
        { q: 'Did any constitutional-carry state reverse?', a: 'No \u2014 as of 2026 no state that adopted permitless carry has walked it back.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 Constitutional carry map', url: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    ME: {
      education: { hours: 'Constitutional carry since 2015; shall-issue permits issued to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Maine pairs permitless carry with a shall-issue permit open to both residents and non-residents.', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' }],
      stateFaqs: [
        { q: 'Is Maine permitless?', a: 'Yes \u2014 since 2015.' },
        { q: 'Who can apply for the Maine permit?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'Why keep a permit in Maine?', a: 'Mostly reciprocity when travelling to permit states.' },
        { q: 'Does Maine restrict where you carry?', a: 'Standard sensitive places apply despite permitless carry.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    MD: {
      education: { hours: 'Permit required; may-issue lineage with training; post-Bruen the state became shall-issue in name but with heavy requirements', sourceUrl: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/' },
      recentChanges: [{ year: 2026, change: 'Maryland is in the heaviest-requirement group \u2014 shall-issue in name after Bruen, with a demanding wear-permit process and broad restricted locations.', sourceUrl: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/' }],
      stateFaqs: [
        { q: 'Is Maryland shall-issue?', a: 'In name after Bruen \u2014 in practice the wear-permit process remains among the most demanding.' },
        { q: 'What does the application require?', a: 'Training and a background check through the Maryland State Police licensing division.' },
        { q: 'How does Maryland treat outside permits?', a: 'Recognition is narrow; Maryland is not a permitless state.' },
        { q: 'What about sensitive places?', a: 'Maryland\u2019s restricted-location list is broad, like the other heavy-requirement states.' }
      ],
      sources: [
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    MA: {
      education: { hours: 'Permit required; may-issue lineage retained in the heaviest-requirement group, with training and local police discretion in the application chain', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' },
      recentChanges: [{ year: 2026, change: 'Massachusetts sits in the heaviest-requirement group after Bruen — technically must-issue to qualified applicants but wrapped in training, local approval layers and broad restrictions.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Massachusetts shall-issue?', a: 'Massachusetts labels its process differently — applicants historically needed a local chief\u2019s approval, keeping it in the heavy-requirement group even after Bruen ended proper-cause regimes.' },
        { q: 'What does the application require?', a: 'Training plus a background check through the local licensing authority, with a multi-stage approval chain.' },
        { q: 'Do out-of-state permits work in Massachusetts?', a: 'Recognition is effectively nonexistent — Massachusetts honours very few outside permits.' },
        { q: 'What are the licence classes?', a: 'Massachusetts historically issued Class A and Class B licences, with the Class A covering concealed carry.' }
      ],
      sources: [
        { label: 'Freedom’s Lodge — Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers — CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'World Population Review — Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    MI: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Michigan runs a shall-issue CPL open to residents and non-residents, with county clerks processing applications.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Does Michigan require a permit?', a: 'Yes \u2014 a Concealed Pistol Licence is required; Michigan is not a permitless state.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, residents and non-residents alike.' },
        { q: 'Is training required?', a: 'Yes \u2014 statutory training precedes the application.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 Michigan permits open carry without a CPL, though preemption disputes persist locally.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    MN: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Minnesota issues permits-to-carry on a shall-issue basis through county sheriffs, to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Minnesota permitless?', a: 'No \u2014 a permit-to-carry from the county sheriff is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 sheriffs must issue to qualified applicants, including non-residents.' },
        { q: 'Is training required?', a: 'Yes \u2014 an approved training course accompanies the application.' },
        { q: 'How long does a permit last?', a: 'Minnesota permits run on the multi-year statutory cycle with renewals through the sheriff.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    MS: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Mississippi\u2019s permitless carry starts at 18, one of the younger thresholds, with the enhanced carry permit retained for reciprocity.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Mississippi?', a: 'No \u2014 Mississippi has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Mississippi?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Mississippi permitless?', a: 'Yes \u2014 constitutional carry from age 18.' },
        { q: 'What is the enhanced permit?', a: 'An optional training-backed permit issued shall-issue for reciprocity with more states.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' },
        { q: 'Who is still barred?', a: 'The federal prohibited-person floor applies in full.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    MO: {
      education: { hours: 'Constitutional carry (permitless age 21 (18 military)); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Missouri\u2019s permitless age is 21 for civilians, with 18-year carry for active-duty military, Guard, reservists and honorably discharged veterans.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Missouri?', a: 'No \u2014 Missouri has permitless carry for eligible adults (21 (18 military)), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Missouri?', a: '21 (18 military) \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Missouri permitless?', a: 'Yes \u2014 constitutional carry for eligible adults 21 and over.' },
        { q: 'What is the military exception?', a: 'Service members and honorably discharged veterans may carry from 18.' },
        { q: 'Do permits exist?', a: 'Yes \u2014 shall-issue, to residents and non-residents, for reciprocity.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    MT: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Montana\u2019s permitless carry starts at 18, with shall-issue permits available to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Montana?', a: 'No \u2014 Montana has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Montana?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Montana permitless?', a: 'Yes \u2014 constitutional carry from age 18.' },
        { q: 'Who can get a permit?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'Why keep a permit?', a: 'Reciprocity with permit states.' },
        { q: 'Are locations restricted?', a: 'Yes \u2014 standard sensitive places still apply.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    NE: {
      education: { hours: 'Constitutional carry (permitless age 21); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Nebraska adopted permitless carry in 2023, with its shall-issue permit retained for reciprocity.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Nebraska?', a: 'No \u2014 Nebraska has permitless carry for eligible adults (21), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Nebraska?', a: '21 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Nebraska permitless?', a: 'Yes \u2014 since 2023, for eligible adults 21 and over.' },
        { q: 'Do permits still exist?', a: 'Yes \u2014 shall-issue, mainly for travel reciprocity.' },
        { q: 'Is training required for permitless carry?', a: 'No \u2014 though the optional permit path includes training.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    NV: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Nevada issues shall-issue permits to residents and non-residents through county sheriffs.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Nevada permitless?', a: 'No \u2014 a permit is required for concealed carry.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, residents and non-residents alike.' },
        { q: 'Is training required?', a: 'Yes \u2014 an approved course accompanies the application.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 Nevada permits open carry without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    NH: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'New Hampshire\u2019s permitless carry starts at 18, and its shall-issue licence remains open to non-residents \u2014 a popular East-Coast travel permit.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in New Hampshire?', a: 'No \u2014 New Hampshire has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in New Hampshire?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is New Hampshire permitless?', a: 'Yes \u2014 constitutional carry from age 18.' },
        { q: 'Who can get the licence?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'Is training required for permitless carry?', a: 'No.' },
        { q: 'Why is the NH licence popular?', a: 'It is widely recognised and available to non-residents.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    NJ: {
      education: { hours: 'Permit required; shall-issue in name after Bruen but among the heaviest-requirement jurisdictions', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'New Jersey is in the heaviest-requirement group \u2014 shall-issue in name after Bruen, with extensive requirements and expanded sensitive-place bans.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is New Jersey shall-issue?', a: 'In name after Bruen; in practice the requirement stack remains among the heaviest.' },
        { q: 'What did Bruen change?', a: 'It ended proper-cause discretion, forcing New Jersey to issue to qualified applicants.' },
        { q: 'How did New Jersey respond?', a: 'With expanded sensitive-place bans and added requirements rather than liberalisation.' },
        { q: 'Do outside permits work here?', a: 'Effectively no \u2014 New Jersey does not honour out-of-state permits.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    NM: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'New Mexico issues shall-issue permits to residents and non-residents through the Department of Public Safety.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is New Mexico permitless?', a: 'No \u2014 a concealed-carry licence is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, including non-residents.' },
        { q: 'Is training required?', a: 'Yes \u2014 an approved course precedes the application.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 New Mexico permits open carry without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    NY: {
      education: { hours: 'Permit required; shall-issue in name after Bruen but among the heaviest-requirement jurisdictions', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'New York responded to Bruen with the CCIA framework \u2014 shall-issue licensing wrapped in extensive sensitive-place bans and character requirements.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is New York shall-issue now?', a: 'Licensing is shall-issue post-Bruen, but the CCIA \u2014 New York\u2019s implementing law \u2014 layered on extensive restrictions.' },
        { q: 'What is the CCIA?', a: 'The Concealed Carry Improvement Act: added training, character references and a long sensitive-places list.' },
        { q: 'Do outside permits work in New York?', a: 'No \u2014 New York does not recognise other states\u2019 permits.' },
        { q: 'Does the New York licence travel?', a: 'Recognition elsewhere is minimal; New York permits are largely home-state documents.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' }
      ]
    },
    NC: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'North Carolina issues shall-issue permits to residents and non-residents through county sheriffs.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is North Carolina permitless?', a: 'No \u2014 a concealed-carry permit from the county sheriff is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued.' },
        { q: 'Is training required?', a: 'Yes \u2014 a statutorily defined course precedes the application.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 North Carolina permits open carry without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    ND: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'North Dakota\u2019s permitless carry starts at 18, with shall-issue licences \u2014 including a Class 1 option \u2014 available to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in North Dakota?', a: 'No \u2014 North Dakota has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in North Dakota?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is North Dakota permitless?', a: 'Yes \u2014 constitutional carry from age 18.' },
        { q: 'What are the licence classes?', a: 'North Dakota issues Class 1 and Class 2 licences, the Class 1 carrying broader reciprocity through testing/training.' },
        { q: 'Who can apply?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    OH: {
      education: { hours: 'Constitutional carry (permitless age 21); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Ohio enacted permitless carry in 2022; its shall-issue licence remains available to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Ohio?', a: 'No \u2014 Ohio has permitless carry for eligible adults (21), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Ohio?', a: '21 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'When did Ohio go permitless?', a: '2022 \u2014 constitutional carry for eligible adults 21 and over.' },
        { q: 'Do permits still exist?', a: 'Yes \u2014 shall-issue to residents and non-residents.' },
        { q: 'Why keep an Ohio licence?', a: 'Reciprocity, plus the training foundation it documents.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    OK: {
      education: { hours: 'Constitutional carry (permitless age 21 (18 military)); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Oklahoma\u2019s 2019 permitless law predates Bruen; the permitless age is 21, with 18-year carry for service members and honorably discharged veterans.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Oklahoma?', a: 'No \u2014 Oklahoma has permitless carry for eligible adults (21 (18 military)), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Oklahoma?', a: '21 (18 military) \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'When did Oklahoma go permitless?', a: '2019 \u2014 before the Bruen decision.' },
        { q: 'What is the military exception?', a: 'Service members and honorably discharged veterans may carry from 18.' },
        { q: 'Do permits exist?', a: 'Yes \u2014 shall-issue, for reciprocity.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    OR: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Oregon issues shall-issue permits to residents and non-residents through county sheriffs, though Measure 114 litigation has reshaped parts of the firearms framework.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Oregon permitless?', a: 'No \u2014 a concealed-handgun licence from the county sheriff is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, including non-residents.' },
        { q: 'Is training required?', a: 'Yes \u2014 a qualifying course accompanies the application.' },
        { q: 'Is open carry lawful?', a: 'Generally yes, though some cities require permits for open carry.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    PA: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Pennsylvania issues Licence to Carry Firearms (LTCF) permits on a shall-issue basis through county sheriffs, to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Pennsylvania permitless?', a: 'No \u2014 an LTCF is required for concealed carry.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 county sheriffs must issue to qualified applicants.' },
        { q: 'Who can apply?', a: 'Residents and non-residents both.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 Pennsylvania generally permits open carry without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    RI: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Trackers classify Rhode Island as shall-issue for residents and non-residents, with the attorney general or courts as issuer.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Rhode Island shall-issue?', a: 'Per the 2026 trackers, yes \u2014 a notable classification for a Northeastern state.' },
        { q: 'Who issues the permit?', a: 'The attorney general (residents) with a court route available.' },
        { q: 'Is training required?', a: 'Yes \u2014 a qualifying course accompanies applications.' },
        { q: 'Do permits travel?', a: 'Recognition depends on other states\u2019 lists.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    SC: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'South Carolina enacted permitless carry effective 7 March 2024, with permitless carry from 18 and shall-issue CWP permits retained for reciprocity.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in South Carolina?', a: 'No \u2014 South Carolina has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in South Carolina?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'How new is South Carolina permitless carry?', a: 'Effective 7 March 2024 \u2014 alongside Louisiana, the most recent addition.' },
        { q: 'What is the permitless age?', a: '18.' },
        { q: 'Do CWP permits continue?', a: 'Yes \u2014 shall-issue, mainly for reciprocity.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 Constitutional carry map', url: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    SD: {
      education: { hours: 'Constitutional carry (permitless age 18); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'South Dakota\u2019s permitless carry starts at 18, with shall-issue permits available to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in South Dakota?', a: 'No \u2014 South Dakota has permitless carry for eligible adults (18), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in South Dakota?', a: '18 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is South Dakota permitless?', a: 'Yes \u2014 constitutional carry from age 18.' },
        { q: 'Who can get a permit?', a: 'Residents and non-residents, shall-issue.' },
        { q: 'What does the permit add?', a: 'Reciprocity with permit states.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    TN: {
      education: { hours: 'Constitutional carry (permitless age 21 (18 military)); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Tennessee\u2019s 2021 permitless law predates Bruen; the age is 21, with 18-year carry for service members and honorably discharged veterans, and shall-issue permits retained.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Tennessee?', a: 'No \u2014 Tennessee has permitless carry for eligible adults (21 (18 military)), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Tennessee?', a: '21 (18 military) \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'When did Tennessee go permitless?', a: '2021 \u2014 before Bruen.' },
        { q: 'What is the military exception?', a: 'Service members and honorably discharged veterans may carry from 18.' },
        { q: 'Do permits exist?', a: 'Yes \u2014 shall-issue, for reciprocity.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    TX: {
      education: { hours: 'Constitutional carry (permitless age 21); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Texas\u2019s 2021 permitless law carries from 21; its Licence to Carry remains shall-issue for residents and non-residents, and the v1 dossier notes roughly 38 states recognise it.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Texas?', a: 'No \u2014 Texas has permitless carry for eligible adults (21), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Texas?', a: '21 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'When did Texas go permitless?', a: '2021 \u2014 constitutional carry for eligible adults 21 and over.' },
        { q: 'What is the LTC for now?', a: 'Reciprocity \u2014 the Texas LTC is recognised in roughly 38 states, per the v1-verified practice note.' },
        { q: 'Is training required for permitless carry?', a: 'No \u2014 though the LTC path includes training.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    UT: {
      education: { hours: 'Constitutional carry (permitless age 21); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Utah pairs permitless carry with its widely recognised concealed-firearm permit, issued shall-issue to residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Utah?', a: 'No \u2014 Utah has permitless carry for eligible adults (21), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in Utah?', a: '21 \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Utah permitless?', a: 'Yes \u2014 constitutional carry for eligible adults.' },
        { q: 'Why is the Utah permit famous?', a: 'Its shall-issue permit is one of the most widely recognised non-resident permits in the country.' },
        { q: 'Is training required for the permit?', a: 'Yes \u2014 the permit path includes training even though permitless carry does not.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    VT: {
      education: { hours: 'Constitutional carry with no permit system at all \u2014 Vermont has never issued carry permits', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Vermont is the original constitutional-carry state \u2014 it has never had a carry-permit system at any point in its history.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry in Vermont?', a: 'No \u2014 and Vermont has never had one: it is the only state with no permit system in its history.' },
        { q: 'Has Vermont ever required a permit?', a: 'No \u2014 Vermont is the only state that has never had a carry-permit system.' },
        { q: 'Is there any licence to obtain?', a: 'No \u2014 Vermont issues no carry permits, which also means no reciprocity document exists.' },
        { q: 'What governs carrying here?', a: 'Eligibility under state and federal law, plus location restrictions.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without any permit.' }
      ],
      sources: [
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry map', url: 'https://legalclarity.org/constitutional-carry-states-map-rules-and-restrictions', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' }
      ]
    },
    VA: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Virginia is shall-issue today, but a 2027 law shifts reciprocity decisions to the Attorney General on 1 July 2027 and ends resident carry on out-of-state permits (military excepted).', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Virginia a permitless state?', a: 'No \u2014 a permit is required for concealed carry.' },
        { q: 'What changes in Virginia in 2027?', a: 'From 1 July 2027 the Attorney General decides which states\u2019 permits are honoured \u2014 based on substantial similarity \u2014 and Virginia residents can no longer carry on an out-of-state permit, with active-duty service members and spouses excepted.' },
        { q: 'Is Virginia shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, residents and non-residents alike.' },
        { q: 'Is training required?', a: 'Yes \u2014 a qualifying course precedes the application.' },
        { q: 'What did the Eighth Circuit decide about reciprocity?', a: 'In Johnson v. Jacobson (cert denied 5 October 2026), reciprocity is interstate courtesy, not a constitutional right.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    WA: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Washington issues shall-issue concealed pistol licences to residents and non-residents, including a lifetime option.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Washington permitless?', a: 'No \u2014 a concealed pistol licence is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 including to non-residents.' },
        { q: 'Is there a lifetime licence?', a: 'Yes \u2014 Washington offers a lifetime CPL, one of the few states to do so.' },
        { q: 'Is training required?', a: 'No training prerequisite attaches to the CPL itself.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    WV: {
      education: { hours: 'Constitutional carry (permitless age 18 (from 12 June 2026)); shall-issue permits available for reciprocity', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'HB 4106 lowered West Virginia\u2019s permitless age from 21 to 18 effective 12 June 2026, with shall-issue permits retained for residents and non-residents.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in West Virginia?', a: 'No \u2014 West Virginia has permitless carry for eligible adults (18 (from 12 June 2026)), with the optional shall-issue permit retained for reciprocity.' },
        { q: 'What is the permitless age in West Virginia?', a: '18 (from 12 June 2026) \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'What changed in West Virginia in 2026?', a: 'HB 4106 \u2014 effective 12 June 2026 \u2014 dropped the permitless-carry age from 21 to 18.' },
        { q: 'Do permits still exist?', a: 'Yes \u2014 shall-issue to residents and non-residents, mainly for reciprocity.' },
        { q: 'Is training required for permitless carry?', a: 'No.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    },
    WI: {
      education: { hours: 'Permit required; shall-issue to residents and non-residents', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'Wisconsin issues shall-issue licences to residents and non-residents through the Department of Justice.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Is Wisconsin permitless?', a: 'No \u2014 a concealed-carry licence is required.' },
        { q: 'Is it shall-issue?', a: 'Yes \u2014 qualified applicants must be issued, residents and non-residents alike.' },
        { q: 'Is training required?', a: 'Yes \u2014 a qualifying course accompanies the application.' },
        { q: 'Is open carry lawful?', a: 'Yes \u2014 Wisconsin permits open carry without a licence.' }
      ],
      sources: [
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'GunTransfers \u2014 CCW laws by state 2026', url: 'https://guntransfers.com/concealed-carry-laws-by-state-2026/', checkedOn: '2026-10' }
      ]
    },
    WY: {
      education: { hours: 'Constitutional carry; shall-issue permits issued to residents only', sourceUrl: 'https://worldpopulationreview.com/state-rankings/shall-issue-states' },
      recentChanges: [{ year: 2026, change: 'HB0096 (2026) lowered the Wyoming permit age to 18 effective 1 July 2026; permitless carry runs at 21 for residents and non-residents, and shall-issue permits go to residents only.', sourceUrl: 'https://freedomslodge.com/concealed-carry-by-state' }],
      stateFaqs: [
        { q: 'Do I need a permit to carry concealed in Wyoming?', a: 'No \u2014 Wyoming has constitutional carry; the shall-issue permit is residents-only and used mainly for reciprocity.' },
        { q: 'What is the permitless age in Wyoming?', a: '21 (permit 18 from 1 July 2026) \u2014 the state\u2019s published 2026 threshold.' },
        { q: 'Is Wyoming permitless?', a: 'Yes \u2014 for residents and non-residents 21 and over.' },
        { q: 'What did HB0096 do?', a: 'Lowered the Wyoming permit age to 18 effective 1 July 2026 \u2014 useful for younger residents needing reciprocity documents.' },
        { q: 'Who can get a Wyoming permit?', a: 'Residents only, shall-issue.' },
        { q: 'Is open carry covered?', a: 'Yes \u2014 both modes are lawful without a permit.' }
      ],
      sources: [
        { label: 'Freedom\u2019s Lodge \u2014 Concealed Carry by State 2026', url: 'https://freedomslodge.com/concealed-carry-by-state', checkedOn: '2026-10' },
        { label: 'World Population Review \u2014 Shall-issue states 2026', url: 'https://worldpopulationreview.com/state-rankings/shall-issue-states', checkedOn: '2026-10' },
        { label: 'LegalClarity \u2014 Constitutional carry states', url: 'https://legalclarity.org/constitutional-carry-states-the-full-list-of-29', checkedOn: '2026-10' }
      ]
    }
  }
};
