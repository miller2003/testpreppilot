#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Comprehensive pSEO audit over dist/. Fixes the orphan bug in _audit_now.py
(url_to_file was populated lazily inside the same loop, so early files had
almost no link targets to match against)."""
import os, re, json, glob, html, math
from collections import defaultdict, Counter

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")
files = [f for f in glob.glob(os.path.join(DIST, "**", "*.html"), recursive=True)
         if os.sep + "pages" + os.sep not in os.path.relpath(f, DIST)]


def f2u(p):
    rel = os.path.relpath(p, DIST).replace(os.sep, "/")
    if rel == "index.html":
        return "/"
    if rel.endswith("/index.html"):
        return "/" + rel[:-len("index.html")].rstrip("/")
    if rel.endswith(".html"):
        return "/" + rel[:-len(".html")]
    return "/" + rel


# PASS 1 — build the URL universe FIRST (this is what the old script got wrong)
url_to_file = {f2u(f): f for f in files}

TAGRE = re.compile(r"<[^>]+>")


def visible_text(raw):
    s = re.sub(r"<script.*?</script>", " ", raw, flags=re.S | re.I)
    s = re.sub(r"<style.*?</style>", " ", s, flags=re.S | re.I)
    s = TAGRE.sub(" ", s)
    s = html.unescape(s)
    return re.sub(r"\s+", " ", s).strip()


def main_text(raw):
    """Text inside <main> only — excludes header/footer/nav boilerplate."""
    m = re.search(r"<main\b[^>]*>(.*?)</main>", raw, flags=re.S | re.I)
    return visible_text(m.group(1)) if m else ""


def attr(tag, name):
    m = re.search(name + r'=["\']([^"\']*)["\']', tag)
    return m.group(1) if m else ""


records = {}
link_graph = defaultdict(set)
shingles = {}

for f in files:
    url = f2u(f)
    raw = open(f, encoding="utf-8", errors="ignore").read()
    text = visible_text(raw)
    mtext = main_text(raw)
    words = len(text.split())
    mwords = len(mtext.split())

    mt = re.search(r"<title[^>]*>(.*?)</title>", raw, re.S | re.I)
    title = html.unescape(mt.group(1)).strip() if mt else ""

    desc = ""
    md = re.search(r'<meta[^>]+name=["\']description["\'][^>]*>', raw, re.I)
    if md:
        desc = html.unescape(attr(md.group(0), "content")).strip()

    mr = re.search(r'<meta[^>]+name=["\']robots["\'][^>]*>', raw, re.I)
    robots = attr(mr.group(0), "content") if mr else ""
    noindex = "noindex" in robots.lower()

    mc = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]*>', raw, re.I)
    canon = attr(mc.group(0), "href") if mc else ""

    h1s = re.findall(r"<h1[^>]*>(.*?)</h1>", raw, re.S | re.I)
    h2s = re.findall(r"<h2[^>]*>(.*?)</h2>", raw, re.S | re.I)

    jsonld = Counter()
    for jm in re.finditer(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', raw, re.S | re.I):
        for tm in re.finditer(r'"@type"\s*:\s*"([^"]+)"', jm.group(1)):
            jsonld[tm.group(1)] += 1

    # links
    out, ext = set(), set()
    for am in re.finditer(r'<a\s+[^>]*href=["\']([^"\']+)["\']', raw, re.I):
        h = am.group(1).strip()
        if h.startswith(("mailto:", "tel:", "#", "javascript:")):
            continue
        if h.startswith(("http://", "https://")):
            if "testpreppilot.com" not in h:
                ext.add(re.sub(r"^https?://(www\.)?([^/]+).*$", r"\2", h))
            continue
        if h.startswith("/"):
            u = h.split("#")[0].split("?")[0].rstrip("/") or "/"
        else:
            base = url if url.endswith("/") else url.rsplit("/", 1)[0] + "/"
            u = (base + h).split("#")[0].rstrip("/") or "/"
        if u in url_to_file:
            out.add(u)
    link_graph[url] = out

    # 8-gram shingles of the MAIN content for near-duplicate detection
    toks = re.findall(r"[a-z0-9]+", mtext.lower())
    shingles[url] = set(hash(tuple(toks[i:i + 8])) for i in range(0, max(0, len(toks) - 8), 3))

    records[url] = dict(
        url=url, title=title, title_len=len(title), desc=desc, desc_len=len(desc),
        desc_trunc=desc.rstrip().endswith(("…", "...")),
        noindex=noindex, canon=canon, words=words, main_words=mwords,
        boiler=words - mwords, h1=len(h1s), h2=len(h2s),
        jsonld=dict(jsonld), out_links=len(out), ext_domains=sorted(ext),
        n_ext=len(ext), bytes=len(raw.encode("utf-8")),
        imgs=len(re.findall(r"<img\b", raw, re.I)),
    )


def classify(u):
    p = [x for x in u.strip("/").split("/") if x]
    if u == "/":
        return "home"
    if u.startswith("/exams/"):
        return "exam"
    if u.startswith("/categories/"):
        return "category"
    if u.startswith("/paths/"):
        return "path"
    if u in ("/exams", "/states", "/explore"):
        return "hub"
    if len(p) == 2:
        return "state-cred"
    if len(p) == 1 and u.lstrip("/") not in (
            "about", "privacy", "disclosure", "affiliate-disclosure", "editorial-policy",
            "guides", "how-it-works", "reviews", "404", "rss.xml"):
        return "state-hub"
    return "static"


for u, r in records.items():
    r["type"] = classify(u)

# ---- reachability (BFS from /) + click depth ----
depth = {"/": 0}
frontier = ["/"]
while frontier:
    nxt = []
    for u in frontier:
        for v in link_graph.get(u, ()):
            if v not in depth:
                depth[v] = depth[u] + 1
                nxt.append(v)
    frontier = nxt
orphans = [u for u in records if u not in depth]

inbound = Counter()
for u, outs in link_graph.items():
    for v in outs:
        inbound[v] += 1

# ---- near-duplicate detection within each type ----
def jaccard(a, b):
    if not a or not b:
        return 0.0
    i = len(a & b)
    return i / (len(a) + len(b) - i)


dup_pairs = []
exam_urls = [u for u, r in records.items() if r["type"] == "exam" and not r["noindex"]]
# bucket by shared shingles to avoid O(n^2) full compare
inv = defaultdict(list)
for u in exam_urls:
    for s in list(shingles[u])[:120]:
        inv[s].append(u)
cand = Counter()
for s, us in inv.items():
    if len(us) > 40:
        continue
    for i in range(len(us)):
        for j in range(i + 1, len(us)):
            cand[(us[i], us[j])] += 1
for (a, b), c in cand.items():
    if c < 6:
        continue
    sim = jaccard(shingles[a], shingles[b])
    if sim >= 0.35:
        dup_pairs.append((a, b, round(sim, 3)))
dup_pairs.sort(key=lambda x: -x[2])

# ---- duplicate titles / descriptions ----
tcount = Counter(r["title"] for r in records.values() if not r["noindex"])
dcount = Counter(r["desc"] for r in records.values() if not r["noindex"] and r["desc"])

bytype = defaultdict(list)
for r in records.values():
    bytype[r["type"]].append(r)


def pct(vals, p):
    if not vals:
        return 0
    v = sorted(vals)
    return v[min(len(v) - 1, int(len(v) * p))]


exam_recs = [r for r in bytype["exam"]]
exam_idx = [r for r in exam_recs if not r["noindex"]]
ew = [r["main_words"] for r in exam_idx]

out = {
    "totals": {
        "html_pages": len(records),
        "by_type": {k: len(v) for k, v in sorted(bytype.items())},
        "noindex": sum(1 for r in records.values() if r["noindex"]),
        "indexable": sum(1 for r in records.values() if not r["noindex"]),
        "exam_indexable": len(exam_idx),
        "exam_noindex": len(exam_recs) - len(exam_idx),
    },
    "reachability": {
        "reachable": len(depth),
        "orphans": len(orphans),
        "orphan_list": sorted(orphans)[:20],
        "depth_hist": dict(Counter(depth.values())),
        "max_depth": max(depth.values()) if depth else 0,
    },
    "internal_links": {
        "exam_inbound_min": min((inbound[r["url"]] for r in exam_idx), default=0),
        "exam_inbound_p10": pct([inbound[r["url"]] for r in exam_idx], 0.10),
        "exam_inbound_p50": pct([inbound[r["url"]] for r in exam_idx], 0.50),
        "exam_inbound_p90": pct([inbound[r["url"]] for r in exam_idx], 0.90),
        "exam_inbound_max": max((inbound[r["url"]] for r in exam_idx), default=0),
        "exams_under_5_inbound": sum(1 for r in exam_idx if inbound[r["url"]] < 5),
        "avg_outlinks_exam": round(sum(r["out_links"] for r in exam_idx) / max(1, len(exam_idx)), 1),
    },
    "content": {
        "exam_mainwords_min": min(ew, default=0),
        "exam_mainwords_p10": pct(ew, 0.10),
        "exam_mainwords_p50": pct(ew, 0.50),
        "exam_mainwords_p90": pct(ew, 0.90),
        "exam_mainwords_max": max(ew, default=0),
        "exams_under_800_words": sum(1 for w in ew if w < 800),
        "exams_under_1500_words": sum(1 for w in ew if w < 1500),
        "avg_boilerplate_words": round(sum(r["boiler"] for r in exam_idx) / max(1, len(exam_idx))),
        "avg_boilerplate_ratio": round(
            sum(r["boiler"] / max(1, r["words"]) for r in exam_idx) / max(1, len(exam_idx)), 3),
        "pages_with_images": sum(1 for r in records.values() if r["imgs"] > 0),
        "total_img_tags": sum(r["imgs"] for r in records.values()),
    },
    "duplication": {
        "near_dup_pairs_ge35": len(dup_pairs),
        "pairs_ge50": sum(1 for p in dup_pairs if p[2] >= 0.5),
        "pairs_ge70": sum(1 for p in dup_pairs if p[2] >= 0.7),
        "pages_involved_ge50": len({x for p in dup_pairs if p[2] >= 0.5 for x in p[:2]}),
        "top_pairs": dup_pairs[:15],
        "dup_titles": [[t, c] for t, c in tcount.most_common(8) if c > 1],
        "dup_descriptions": [[d[:70], c] for d, c in dcount.most_common(8) if c > 1],
    },
    "meta": {
        "title_over_60": sum(1 for r in records.values() if not r["noindex"] and r["title_len"] > 60),
        "title_over_65": sum(1 for r in records.values() if not r["noindex"] and r["title_len"] > 65),
        "title_under_30": sum(1 for r in records.values() if not r["noindex"] and r["title_len"] < 30),
        "desc_missing": sum(1 for r in records.values() if not r["noindex"] and r["desc_len"] == 0),
        "desc_over_160": sum(1 for r in records.values() if not r["noindex"] and r["desc_len"] > 160),
        "desc_truncated_ellipsis": sum(1 for r in records.values() if not r["noindex"] and r["desc_trunc"]),
        "h1_not_one": sum(1 for r in records.values() if r["h1"] != 1),
        "canonical_missing": sum(1 for r in records.values() if not r["canon"]),
    },
    "schema": dict(sum((Counter(r["jsonld"]) for r in records.values()), Counter())),
    "schema_coverage_exam": {
        "FAQPage": sum(1 for r in exam_idx if "FAQPage" in r["jsonld"]),
        "EducationalOccupationalCredential": sum(1 for r in exam_idx if "EducationalOccupationalCredential" in r["jsonld"]),
        "BreadcrumbList": sum(1 for r in exam_idx if "BreadcrumbList" in r["jsonld"]),
        "of_total": len(exam_idx),
    },
    "authority": {
        "exams_with_zero_external_source": sum(1 for r in exam_idx if r["n_ext"] == 0),
        "avg_external_domains_exam": round(sum(r["n_ext"] for r in exam_idx) / max(1, len(exam_idx)), 2),
        "top_external_domains": Counter(
            d for r in records.values() for d in r["ext_domains"]).most_common(12),
    },
    "weight": {
        "avg_html_kb": round(sum(r["bytes"] for r in records.values()) / max(1, len(records)) / 1024, 1),
        "max_html_kb": round(max(r["bytes"] for r in records.values()) / 1024, 1),
        "heaviest": sorted(((round(r["bytes"] / 1024, 1), r["url"]) for r in records.values()), reverse=True)[:5],
    },
}

thin = sorted(((r["main_words"], r["url"]) for r in exam_idx))[:15]
out["content"]["thinnest_indexable"] = thin
low = sorted(((inbound[r["url"]], r["url"]) for r in exam_idx))[:15]
out["internal_links"]["least_linked"] = low

print(json.dumps(out, indent=2, ensure_ascii=False))
with open(os.path.join(ROOT, "_deep_audit.json"), "w", encoding="utf-8") as fo:
    json.dump({"summary": out, "records": list(records.values()),
               "inbound": dict(inbound), "depth": depth,
               "dup_pairs": dup_pairs}, fo, ensure_ascii=False, indent=1)
print("\nWROTE _deep_audit.json")
