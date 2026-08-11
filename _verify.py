"""Post-optimization build verification."""
import os, re, json, collections

root = "dist"
files = []
for dp, dn, fn in os.walk(root):
    for f in fn:
        if f.endswith(".html"):
            files.append(os.path.join(dp, f))

print("=== BUILD VERIFICATION ===")
print(f"Total HTML: {len(files)}")

# 1. SITEMAP
sm = [f for f in os.listdir(root) if f.startswith("sitemap")]
print(f"Sitemap files: {sm}")
if sm:
    with open(os.path.join(root, "sitemap-index.xml")) as f:
        si = f.read()
    print(f"  sitemap-index size: {len(si)} bytes, locs: {si.count('<loc>')}")

# 2. OG IMAGE
og = nog = 0
for p in files:
    s = open(p, encoding="utf-8", errors="ignore").read()
    if "og:image" in s:
        og += 1
    else:
        nog += 1
print(f"Pages w/ og:image: {og}/{len(files)} (was 0/628)")

# 3. SCHEMA TYPES
schema_types = collections.Counter()
wp = ws = org = 0
for p in files:
    s = open(p, encoding="utf-8", errors="ignore").read()
    for m in re.findall(r'application/ld\+json">(.*?)</script>', s, re.S):
        try:
            d = json.loads(m)
            for o in (d if isinstance(d, list) else [d]):
                t = o.get("@type")
                schema_types[t] += 1
                if t == "WebPage":
                    wp += 1
                elif t == "WebSite":
                    ws += 1
                elif t == "Organization":
                    org += 1
        except Exception:
            pass
print(f"Schema: WebPage={wp}, WebSite={ws}, Organization={org}")
print(f"  top types: {dict(schema_types.most_common(10))}")

# 4. DATE MODIFIED
dm = 0
for p in files:
    s = open(p, encoding="utf-8", errors="ignore").read()
    if "dateModified" in s:
        dm += 1
print(f"Pages w/ dateModified: {dm}/{len(files)} (was 0/628)")

# 5. RSS & LLMSTXT
rss = os.path.exists(os.path.join(root, "rss.xml"))
llms = os.path.exists(os.path.join(root, "llms.txt"))
print(f"RSS exists: {rss}, llms.txt exists: {llms}")

# 6. LOGO
logo = os.path.exists(os.path.join(root, "logo.png"))
print(f"logo.png in dist: {logo}")

# 7. ORPHAN CHECK
links = collections.defaultdict(set)
for p in files:
    rp = p.replace("\\", "/").replace("dist/", "")
    for m in re.findall(r'href="(/[^"#]+?)"', open(p, encoding="utf-8", errors="ignore").read()):
        m2 = m.rstrip("/")
        if not m2.startswith("/http") and m2 != "/":
            links[rp].add(m2)

all_pages = set(
    p.replace("\\", "/").replace("dist/", "") for p in files
)
orphans = []
for ap in all_pages:
    inbound = [src for src, dst in links.items() if ap in dst]
    if len(inbound) == 0 and ap != "index.html":
        orphans.append(ap)
print(f"Orphan pages (0 inbound): {len(orphans)} (was 55)")
for o in orphans[:10]:
    print(f"   {o}")

# 8. GOOGLE FONTS PRECONNECT
gf = 0
for p in files:
    s = open(p, encoding="utf-8", errors="ignore").read()
    if "fonts.googleapis.com" in s:
        gf += 1
print(f"Pages w/ Google Fonts preconnect: {gf} (was 628)")

# 9. RSS LINK IN HEAD
rh = 0
for p in files:
    s = open(p, encoding="utf-8", errors="ignore").read()
    if "application/rss+xml" in s:
        rh += 1
print(f"Pages w/ RSS link: {rh}/{len(files)}")

print("\n=== VERIFICATION COMPLETE ===")
