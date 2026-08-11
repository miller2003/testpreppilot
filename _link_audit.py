import os, re, collections, json

ROOT = 'dist'

def url_of(path):
    r = path.replace(os.sep, '/')
    r = r[len('dist/'):] if r.startswith('dist/') else r
    if r.endswith('/index.html'):
        r = r[:-len('/index.html')]
    elif r == 'index.html':
        r = ''
    elif r.endswith('.html'):
        r = r[:-5]
    return '/' + r if r else '/'

files = []
for dp, dn, fn in os.walk(ROOT):
    for f in fn:
        if f.endswith('.html'):
            files.append(os.path.join(dp, f))

pages = {url_of(p): p for p in files}
outlinks = {}
inlinks = collections.Counter()
body_inlinks = collections.Counter()
ext_links = collections.Counter()
nofollow_ext = 0
total_ext = 0

for p in files:
    u = url_of(p)
    s = open(p, encoding='utf-8', errors='ignore').read()
    # strip header/footer to approximate body-only links
    body = s
    m = re.search(r'<main[^>]*>(.*?)</main>', s, re.S)
    body_html = m.group(1) if m else ''
    outs = set()
    for href in re.findall(r'<a\s[^>]*href="([^"]+)"', s):
        if href.startswith('http'):
            total_ext += 1
            dom = href.split('/')[2] if len(href.split('/')) > 2 else href
            if 'testpreppilot.com' not in dom:
                ext_links[dom] += 1
            continue
        if href.startswith('#') or href.startswith('mailto') or href.startswith('tel'):
            continue
        h = href.split('#')[0].split('?')[0].rstrip('/')
        if h == '':
            h = '/'
        outs.add(h)
    outlinks[u] = outs
    for o in outs:
        if o in pages:
            inlinks[o] += 1
    bouts = set()
    for href in re.findall(r'<a\s[^>]*href="(/[^"]*)"', body_html):
        h = href.split('#')[0].split('?')[0].rstrip('/') or '/'
        bouts.add(h)
    for o in bouts:
        if o in pages:
            body_inlinks[o] += 1

# nofollow on external
for p in files[:200]:
    s = open(p, encoding='utf-8', errors='ignore').read()
    for a in re.findall(r'<a\s[^>]*href="http[^"]*"[^>]*>', s):
        if 'testpreppilot.com' in a:
            continue
        if 'nofollow' in a or 'sponsored' in a:
            nofollow_ext += 1

# BFS depth from home
depth = {'/': 0}
q = ['/']
while q:
    cur = q.pop(0)
    for o in outlinks.get(cur, ()):
        if o in pages and o not in depth:
            depth[o] = depth[cur] + 1
            q.append(o)

dd = collections.Counter(depth.values())
orphans = [u for u in pages if u not in depth]
zero_in = [u for u in pages if inlinks[u] == 0]
zero_body = [u for u in pages if body_inlinks[u] == 0]

print('TOTAL PAGES:', len(pages))
print('CLICK DEPTH FROM HOME:', dict(sorted(dd.items())))
print('UNREACHABLE (orphan) pages:', len(orphans))
for u in orphans[:10]:
    print('    ', u)
print()
print('Pages with 0 internal inlinks (incl nav):', len(zero_in))
print('Pages with 0 BODY inlinks (nav-only discovery):', len(zero_body))
print()
vals = sorted(inlinks.values())
import statistics
print('INLINK distribution (all links incl nav):')
print('   min %d  p25 %d  median %d  p75 %d  max %d' % (
    vals[0], vals[len(vals)//4], statistics.median(vals), vals[3*len(vals)//4], vals[-1]))
bv = sorted([body_inlinks[u] for u in pages])
print('BODY-ONLY inlink distribution:')
print('   min %d  p25 %d  median %d  p75 %d  max %d' % (
    bv[0], bv[len(bv)//4], statistics.median(bv), bv[3*len(bv)//4], bv[-1]))
print()
print('TOP 10 most-linked pages:')
for u, c in inlinks.most_common(10):
    print('   %-55s %d' % (u, c))
print()
print('BOTTOM 15 body-inlink pages (weakest, nav-only):')
low = sorted(pages, key=lambda u: body_inlinks[u])[:15]
for u in low:
    print('   %-55s body=%d total=%d' % (u, body_inlinks[u], inlinks[u]))
print()
outc = sorted([len([o for o in outlinks[u] if o in pages]) for u in pages])
print('OUTLINK per page: min %d median %d max %d' % (outc[0], statistics.median(outc), outc[-1]))
print()
print('TOP external domains linked:')
for d, c in ext_links.most_common(12):
    print('   %-45s %d' % (d, c))
print('external <a> total(all pages):', total_ext, ' with rel nofollow/sponsored (first200 pages):', nofollow_ext)
