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
    path = base + '\\' + f + '.mjs'
    s = io.open(path, encoding='utf-8').read()
    # find every occurrence of literal \u2019 (backslash + u2019)
    needle = chr(92) + 'u2019'
    idxs = []
    start = 0
    while True:
        i = s.find(needle, start)
        if i == -1:
            break
        idxs.append(i)
        start = i + 1
    print(f, 'count=', len(idxs))
    for i in idxs[:3]:
        print('   ', repr(s[i-20:i+25]))
