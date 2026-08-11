#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fresh technical SEO audit over the current dist/ build (real artifacts)."""
import os, re, json, glob, html
from collections import defaultdict, Counter

DIST = os.path.join(os.path.dirname(__file__), "dist")
html_files = glob.glob(os.path.join(DIST, "**", "*.html"), recursive=True)

def file_to_url(path):
    rel = os.path.relpath(path, DIST)
    rel = rel.replace(os.sep, "/")
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        rel = rel[:-len("index.html")]  # keep trailing slash dir
        return "/" + rel.rstrip("/")
    if rel.endswith(".html"):
        rel = rel[:-len(".html")]
        return "/" + rel
    return "/" + rel

def strip_tags(s):
    s = re.sub(r"<script.*?</script>", " ", s, flags=re.S|re.I)
    s = re.sub(r"<style.*?</style>", " ", s, flags=re.S|re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()

def get(meta, name):
    # crude but reliable attr extraction
    return meta

records = []
link_graph = defaultdict(set)   # url -> set of internal out-links
url_to_file = {}
for f in html_files:
    url = file_to_url(f)
    url_to_file[url] = f
    raw = open(f, encoding="utf-8", errors="ignore").read()
    text = strip_tags(raw)
    words = len(text.split())

    m_title = re.search(r"<title[^>]*>(.*?)</title>", raw, re.S|re.I)
    title = html.unescape(m_title.group(1)).strip() if m_title else ""

    # meta description
    desc = ""
    for mm in re.finditer(r"<meta[^>]+name=[\"']description[\"'][^>]*>", raw, re.I):
        tag = mm.group(0)
        dm = re.search(r"content=[\"'](.*?)[\"']", tag, re.S)
        if dm: desc = html.unescape(dm.group(1)).strip()
    desc_trunc = desc.endswith("…") or desc.endswith("...")

    # og:image
    og_img = bool(re.search(r"<meta[^>]+property=[\"']og:image[\"']", raw, re.I))
    og_type = re.search(r"<meta[^>]+property=[\"']og:type[\"'][^>]*content=[\"']([^\"']+)[\"']", raw, re.I)
    og_type = og_type.group(1) if og_type else ""

    # canonical
    canon = re.search(r"<link[^>]+rel=[\"']canonical[\"'][^>]*href=[\"']([^\"']+)[\"']", raw, re.I)
    canon = canon.group(1) if canon else ""

    # json-ld types
    types = Counter()
    for jm in re.finditer(r"<script[^>]+type=[\"']application/ld\+json[\"'][^>]*>(.*?)</script>", raw, re.S|re.I):
        blob = jm.group(1)
        for tm in re.finditer(r"[\"']@type[\"']\s*:\s*[\"']([^\"']+)[\"']", blob):
            types[tm.group(1)] += 1
        # dateModified
    has_datemod = bool(re.search(r"[\"']dateModified[\"']", raw))
    has_datepub = bool(re.search(r"[\"']datePublished[\"']", raw))

    h1s = re.findall(r"<h1[^>]*>", raw, re.I)
    imgs = len(re.findall(r"<img\b", raw, re.I))

    # internal links
    out = set()
    for am in re.finditer(r"<a\s+[^>]*href=[\"']([^\"']+)[\"']", raw, re.I):
        href = am.group(1).strip()
        if href.startswith("http://") or href.startswith("https://"):
            # external
            continue
        if href.startswith("mailto:") or href.startswith("tel:") or href.startswith("#"):
            continue
        if href.startswith("/"):
            u = href.split("#")[0].rstrip("/") or "/"
        else:
            # relative
            base = url
            if not base.endswith("/"):
                base = base.rsplit("/",1)[0] + "/"
            u = (base + href).split("#")[0].rstrip("/") or "/"
        if u in url_to_file or (u + "/") in url_to_file:
            out.add(u)
    link_graph[url] = out

    records.append(dict(url=url, title_len=len(title), title=title,
                        desc_len=len(desc), desc_trunc=desc_trunc,
                        og_img=og_img, og_type=og_type, canon=canon,
                        words=words, h1=len(h1s), imgs=imgs,
                        has_datemod=has_datemod, has_datepub=has_datepub,
                        types=types, out_links=len(out)))

# Orphan detection via BFS from /
root = "/"
visited = set()
stack = [root]
while stack:
    u = stack.pop()
    if u in visited: continue
    visited.add(u)
    for v in link_graph.get(u, ()):
        if v not in visited:
            stack.append(v)
orphans = [r["url"] for r in records if r["url"] not in visited]

# classify pages
def classify(url):
    p = url.strip("/").split("/")
    if url == "/": return "home"
    if url.startswith("/exams/"): return "exam"
    if url.startswith("/categories/"): return "category"
    if url.startswith("/paths/"): return "path"
    if url == "/states": return "states-hub"
    if url.startswith("/exams"): return "exams-index"
    if len(p) == 1:  # state hub
        return "state-hub"
    if len(p) == 2 and p[0] in ("california","texas","florida"):  # state x cred (proxy)
        return "state-cred"
    return "static"

by_type = defaultdict(list)
for r in records:
    by_type[classify(r["url"])].append(r)

# internal-link inbound counts
inbound = Counter()
for u, outs in link_graph.items():
    for v in outs:
        inbound[v] += 1

summary = {
    "total_html": len(records),
    "by_type": {k: len(v) for k,v in sorted(by_type.items())},
    "orphans": len(orphans),
    "orphan_sample": sorted(orphans)[:30],
    "title_gt60": sum(1 for r in records if r["title_len"]>60),
    "title_lt30": sum(1 for r in records if r["title_len"]<30),
    "desc_gt160": sum(1 for r in records if r["desc_len"]>160),
    "desc_lt50": sum(1 for r in records if 0<r["desc_len"]<50),
    "desc_missing": sum(1 for r in records if r["desc_len"]==0),
    "desc_trunc": sum(1 for r in records if r["desc_trunc"]),
    "og_img_missing": None,
    "has_datemod": sum(1 for r in records if r["has_datemod"]),
    "h1_ne_1": sum(1 for r in records if r["h1"]!=1),
    "img_total": sum(r["imgs"] for r in records),
    "pages_with_img": sum(1 for r in records if r["imgs"]>0),
    "schema_types": Counter(),
    "word_counts": {
        "exam_min": min((r["words"] for r in by_type.get("exam",[])), default=0),
        "exam_median": 0,
        "exam_max": max((r["words"] for r in by_type.get("exam",[])), default=0),
    },
}
for r in records:
    for t,c in r["types"].items():
        summary["schema_types"][t]+=c
summary["schema_types"] = dict(summary["schema_types"])
exam_words = sorted(r["words"] for r in by_type.get("exam",[]))
if exam_words:
    summary["word_counts"]["exam_median"] = exam_words[len(exam_words)//2]
summary["og_img_missing"] = sum(1 for r in records if not r["og_img"])
summary["top_inbound"] = inbound.most_common(12)
summary["exam_inbound_p25"] = (sorted(inbound[r["url"]] for r in by_type.get("exam",[])) or [0])[len(by_type.get("exam",[]))//4]

print(json.dumps(summary, indent=2, ensure_ascii=False))
with open(os.path.join(os.path.dirname(__file__), "_audit_now.json"), "w", encoding="utf-8") as fo:
    json.dump({"summary": summary, "records": records, "orphans": orphans}, fo, ensure_ascii=False, indent=1)
print("\nWROTE _audit_now.json")
