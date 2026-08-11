import io, re, sys

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
problems = []
for f in files:
    path = base + '\\' + f + '.mjs'
    s = io.open(path, encoding='utf-8').read()
    # Literal \u2019 escape sequences (backslash + u + 2019)
    lit = s.count('\\u2019')
    # Actual U+2019 character
    u2019 = s.count('\u2019')
    # Bare ASCII apostrophe used as a possessive/contraction inside prose:
    # pattern letter-apostrophe-letter (U+0027 between letters)
    bare = len(re.findall(r"[A-Za-z]\x27[a-z]", s))
    # Check summary word counts
    print(f"{f}: literal_u2019={lit} actual_u2019char={u2019} bare_contraction_apostrophes={bare}")

print("Done")
