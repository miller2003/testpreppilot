import os, re, collections, random, statistics, html

ROOT = 'dist/exams'
files = []
for dp, dn, fn in os.walk(ROOT):
    for f in fn:
        if f.endswith('.html'):
            files.append(os.path.join(dp, f))
files = [f for f in files if 'exams' + os.sep + 'index.html' not in f]
print('exam pages:', len(files))

def text_of(s):
    m = re.search(r'<main[^>]*>(.*?)</main>', s, re.S)
    b = m.group(1) if m else s
    b = re.sub(r'<script.*?</script>', ' ', b, flags=re.S)
    b = re.sub(r'<style.*?</style>', ' ', b, flags=re.S)
    b = re.sub(r'<[^>]+>', ' ', b)
    b = html.unescape(b)
    return re.sub(r'\s+', ' ', b).strip()

texts = {}
wordcounts = []
h2s = collections.Counter()
h2_per_page = []
faq_counts = []
for p in files:
    s = open(p, encoding='utf-8', errors='ignore').read()
    t = text_of(s)
    texts[p] = t
    wordcounts.append(len(t.split()))
    hs = re.findall(r'<h2[^>]*>(.*?)</h2>', s, re.S)
    hs = [re.sub(r'<[^>]+>', '', x).strip() for x in hs]
    h2_per_page.append(len(hs))
    for h in hs:
        h2s[h] += 1
    faq_counts.append(s.count('"@type": "Question"') + s.count('"@type":"Question"'))

print('WORD COUNT: min %d  p10 %d  median %d  p90 %d  max %d  mean %d' % (
    min(wordcounts), sorted(wordcounts)[len(wordcounts)//10], statistics.median(wordcounts),
    sorted(wordcounts)[9*len(wordcounts)//10], max(wordcounts), statistics.mean(wordcounts)))
print('thin pages (<800 words):', sum(1 for w in wordcounts if w < 800))
print('H2 per page: median %d min %d max %d' % (statistics.median(h2_per_page), min(h2_per_page), max(h2_per_page)))
print('FAQ questions per page: median %d  pages with 0 FAQ: %d' % (
    statistics.median(faq_counts), sum(1 for f in faq_counts if f == 0)))
print()
print('TOP 25 most repeated H2 headings (template fingerprint):')
n = len(files)
for h, c in h2s.most_common(25):
    print('   %5.1f%%  %-60s %d' % (100*c/n, h[:60], c))

# shingle-based near-duplicate estimate on a sample
random.seed(42)
sample = random.sample(files, min(120, len(files)))
def shingles(t, k=8):
    w = t.split()
    return set(' '.join(w[i:i+k]) for i in range(0, max(1, len(w)-k), 3))
sh = {p: shingles(texts[p]) for p in sample}
sims = []
pairs = []
keys = list(sh)
for i in range(len(keys)):
    for j in range(i+1, len(keys)):
        a, b = sh[keys[i]], sh[keys[j]]
        if not a or not b:
            continue
        jac = len(a & b) / len(a | b)
        sims.append(jac)
        pairs.append((jac, keys[i], keys[j]))
sims.sort()
print()
print('PAIRWISE near-duplicate (8-gram Jaccard) on %d sampled pages, %d pairs:' % (len(sample), len(sims)))
print('   median %.3f  p90 %.3f  p99 %.3f  max %.3f' % (
    statistics.median(sims), sims[int(0.9*len(sims))], sims[int(0.99*len(sims))], sims[-1]))
pairs.sort(reverse=True)
print('   TOP 8 most similar pairs:')
for jac, a, b in pairs[:8]:
    print('     %.3f  %s  <->  %s' % (jac, os.path.basename(os.path.dirname(a)), os.path.basename(os.path.dirname(b))))

# boilerplate ratio: how much of an average page is shared across ALL pages
common = None
for p in sample[:40]:
    s = shingles(texts[p])
    common = s if common is None else (common & s)
print()
print('shingles common to ALL 40 sampled pages:', len(common))
avg = statistics.mean(len(shingles(texts[p])) for p in sample[:40])
print('avg shingles per page: %.0f  -> global boilerplate ratio ~%.1f%%' % (avg, 100*len(common)/avg))
