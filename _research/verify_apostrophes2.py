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
ok = True
for f in files:
    path = base + '\\' + f + '.mjs'
    s = io.open(path, encoding='utf-8').read()
    # Find any ASCII apostrophe (U+0027) occurrences with context
    idxs = [m.start() for m in re.finditer(r"\x27", s)]
    # Check each: is it a JS string delimiter (preceded/followed by structural chars) or a bare prose apostrophe?
    bare_prose = 0
    sample = []
    for i in idxs:
        pre = s[i-1] if i > 0 else ''
        post = s[i+1] if i < len(s)-1 else ''
        # A prose apostrophe is between two word chars (e.g., 's, can't)
        if pre.isalpha() and (post.isalpha() or post == 's'):
            bare_prose += 1
            if len(sample) < 3:
                sample.append(s[i-15:i+15])
    # also escaped forms
    esc = len(re.findall(r"\\x27", s))
    unicode_form = len(re.findall(r"\\u2019", s))
    print(f"{f}: total_apos={len(idxs)} bare_prose_apos={bare_prose} escaped_apos={esc} u2019_escape={unicode_form}")
    if bare_prose:
        ok = False
        print("  SAMPLES:", sample)

print("ALL OK" if ok else "HAS BARE PROSE APOSTROPHES")
