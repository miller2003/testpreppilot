import os, re, glob, json
from collections import defaultdict, Counter
DIST=os.path.join(os.path.dirname(__file__),"dist")
html_files=glob.glob(os.path.join(DIST,"**","*.html"),recursive=True)
def f2u(p):
    rel=os.path.relpath(p,DIST).replace(os.sep,"/")
    if rel=="index.html": return "/"
    if rel.endswith("/index.html"): return "/"+rel[:-len("index.html")].rstrip("/")
    if rel.endswith(".html"): return "/"+rel[:-len(".html")]
    return "/"+rel
url_to_file={f2u(f):f for f in html_files}
lg=defaultdict(set)
for f in html_files:
    url=f2u(f); raw=open(f,encoding="utf-8",errors="ignore").read()
    for am in re.finditer(r'<a\s+[^>]*href=["\']([^"\']+)["\']',raw,re.I):
        h=am.group(1).strip()
        if h.startswith(("http://","https://","mailto:","tel:","#")): continue
        if h.startswith("/"): u=h.split("#")[0].rstrip("/") or "/"
        else:
            base=url if url.endswith("/") else url.rsplit("/",1)[0]+"/"
            u=(base+h).split("#")[0].rstrip("/") or "/"
        if u in url_to_file: lg[url].add(u)
print("home out-degree:",len(lg.get("/",set())))
print("home sample out:",sorted(lg.get("/",set()))[:8])
# BFS
visited=set(); st=["/"]
while st:
    u=st.pop()
    if u in visited: continue
    visited.add(u)
    for v in lg.get(u,()):
        if v not in visited: st.append(v)
print("reachable from /:",len(visited))
orphans=[u for u in url_to_file if u not in visited]
print("orphans:",len(orphans))
print("orphan sample:",sorted(orphans)[:20])
# dup pairs
dp=json.load(open("_seo_dup_pairs.json",encoding="utf-8"))
hits=dp.get("hits",[])
print("dup pairs total:",len(hits))
over=[h for h in hits if h[2]>=0.7]
print("pairs >=0.70:",len(over))
pages=set()
for a,b,s in over: pages.add(a); pages.add(b)
print("distinct pages in >=0.70 pairs:",len(pages))
fams=Counter()
for a,b,s in over:
    key="-".join(sorted([a.split("-")[-1] if False else a, b])[0][:0] or "")
import re as _re
# family = last token after splitting common suffixes
def fam(slug):
    return slug
# simpler: prefix before last '-<state>'
def fam2(slug):
    parts=slug.split("-")
    return "-".join(parts[:-1]) if len(parts)>1 else slug
fc=Counter()
for a,b,s in over:
    fa=fam2(a); fb=fam2(b)
    fc[fa]+=1; fc[fb]+=1
print("top families (prefix) in >=0.70:",fc.most_common(15))
