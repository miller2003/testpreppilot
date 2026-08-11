import os, re, json, collections, statistics

ROOT = 'dist'

def ptype(p):
    r = p.replace(os.sep, '/')
    r = r[len('dist/'):] if r.startswith('dist/') else r
    if r == 'index.html':
        return 'home'
    parts = r.split('/')
    if parts[0] == 'exams' and len(parts) > 2:
        return 'exam-detail'
    if parts[0] == 'exams':
        return 'exams-hub'
    if parts[0] == 'categories' and len(parts) > 2:
        return 'category'
    if parts[0] == 'paths' and len(parts) > 2:
        return 'path'
    if len(parts) == 3:
        return 'state-credential'
    if len(parts) == 2:
        return 'state-hub-or-static'
    return 'other'

buckets = collections.defaultdict(collections.Counter)
cnt = collections.Counter()
only_org = []
files = []
for dp, dn, fn in os.walk(ROOT):
    for f in fn:
        if f.endswith('.html'):
            files.append(os.path.join(dp, f))

for p in files:
    t = ptype(p)
    cnt[t] += 1
    s = open(p, encoding='utf-8', errors='ignore').read()
    types = set()
    for m in re.findall(r'application/ld\+json">(.*?)</script>', s, re.S):
        try:
            d = json.loads(m)
            for o in (d if isinstance(d, list) else [d]):
                tt = o.get('@type')
                types.add(tt if isinstance(tt, str) else str(tt))
        except Exception:
            types.add('PARSE_FAIL')
    for x in types:
        buckets[t][x] += 1
    if types <= {'Organization'} and t in ('exam-detail', 'state-credential'):
        only_org.append(p)

print('PAGE TYPE COUNTS:')
for k, v in cnt.most_common():
    print('  %-22s %d' % (k, v))
print()
for t in cnt:
    print('%-22s n=%-4d schema=%s' % (t, cnt[t], dict(buckets[t])))
print()
print('Pages with ONLY Organization schema:', len(only_org))
for p in only_org[:15]:
    print('   ', p)
