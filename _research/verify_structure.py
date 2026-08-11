import io, re

files = [
    'texas-journeyman-plumber-license',
    'texas-teacher-certification-exams',
    'texas-security-guard-license',
    'california-property-and-casualty-insurance-license',
    'california-esthetician-license',
    'texas-property-and-casualty-insurance-license',
    'texas-esthetician-license',
    'california-hvac-contractor-license',
    'california-massage-therapy-license',
    'nccer-carpenter',
    'nccer-masonry',
]

base = r'C:\Users\samja\Desktop\testpreppilot-v2\src\data\examCatalog\depth'

summary_keys = [
    'salaryOutlook.summary',
    'passRate.summary',
    'studyPlan.summary',
    'prepStrategies.summary',
    'resourceComparison.summary',
    'commonMistakes.summary',
    'questionTypes.summary',
    'examDay.summary',
]

problems = 0
for f in files:
    path = base + '\\' + f + '.mjs'
    s = io.open(path, encoding='utf-8').read()
    # Validate resourceComparison rows: values array + both brackets, row closed with },
    # and commonMistakes items have only mistake/fix keys.
    # Approach: eval the module via node? Simpler: regex checks.
    
    # 1. Check no "values: 'single'" string form
    bad_values = re.findall(r"values:\s*'[^']*'", s)
    if bad_values:
        print(f, 'BAD values single-string form:', bad_values[:2])
        problems += 1

    # 2. Check commonMistakes items don't have a detail field (they are mistake/fix)
    # Look for "detail:" occurring after "commonMistakes:" and before "questionTypes:"
    cm_block = re.search(r'commonMistakes:.*?questionTypes:', s, re.DOTALL)
    if cm_block:
        detail_in_cm = cm_block.group(0).count('detail:')
        if detail_in_cm > 0:
            print(f, 'detail fields found inside commonMistakes:', detail_in_cm)
            problems += 1

    # 3. Summary word count via a JS-less heuristic: extract strings after 'summary:'
    # Better: use node to import the module and count words.
    print(f, 'structural pre-checks done')

print('PROBLEMS:', problems)
