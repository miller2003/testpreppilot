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
for f in files:
    s = io.open(base + '\\' + f + '.mjs', encoding='utf-8').read()
    # letter followed by ASCII apostrophe followed by non-letter = possessive-s apostrophe (candidates')
    hits = re.findall(r"[a-z]\x27(?![a-z])", s)
    # also letter followed by apostrophe at string boundary
    print(f, 'letter-apostrophe-nonletter:', len(hits))
    if hits:
        for m in re.finditer(r"[a-z]\x27(?![a-z])", s):
            print('   ', repr(s[m.start()-15:m.start()+15]))
