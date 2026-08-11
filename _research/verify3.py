import io, re

files = [
    'nccer-carpenter',
    'nccer-masonry',
]

base = r'C:\Users\samja\Desktop\testpreppilot-v2\src\data\examCatalog\depth'
for f in files:
    path = base + '\\' + f + '.mjs'
    s = io.open(path, encoding='utf-8').read()
    # Count literal backslash followed by apostrophe: chr(92)+chr(39)
    ba = s.count(chr(92) + chr(39))
    # Count literal backslash-u-2019
    bu = s.count(chr(92) + 'u2019')
    # Count standalone apostrophe chars (string delimiters + any prose)
    apos = s.count(chr(39))
    print(f, 'backslash-apostrophe:', ba, '| backslash-u2019:', bu, '| total apostrophe chars:', apos)
    # Sample contexts of backslash-apostrophe
    idx = 0
    samples = []
    while True:
        i = s.find(chr(92) + chr(39), idx)
        if i == -1:
            break
        samples.append(s[max(0,i-12):i+12])
        idx = i + 1
        if len(samples) >= 5:
            break
    print('  samples:', samples)
