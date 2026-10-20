"""Generate branded OG images + logo for TestPrepPilot.

Run with the managed venv Python:
  .../envs/default/Scripts/python _gen_og.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "public")
os.makedirs(OUT, exist_ok=True)

FONT_DIR = "C:/Windows/Fonts"

INK = (17, 30, 31)
PAPER = (250, 249, 246)
CREAM = (240, 238, 229)
PRIMARY = (29, 78, 216)      # #1d4ed8
MUTED = (100, 116, 118)
CORAL = (255, 107, 82)       # #ff6b52
LINE = (227, 228, 223)


def f(name, size):
    return ImageFont.truetype(f"{FONT_DIR}/{name}", size)


REG = f("georgia.ttf", 30)
REG_SM = f("georgia.ttf", 26)
BOLD = f("georgiab.ttf", 60)
BOLD_LG = f("georgiab.ttf", 66)
BOLD_SM = f("georgiab.ttf", 26)
MONO = f("georgia.ttf", 30)


def wrap(text, font, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if font.getlength(trial) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make_og(path, eyebrow, headline, sub):
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)

    # Top accent bar
    d.rectangle([0, 0, W, 10], fill=PRIMARY)

    # Soft decorative circle behind monogram
    d.ellipse([40, 150, 320, 430], fill=CREAM)

    # Monogram badge
    cx, cy, r = 110, 110, 46
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=INK)
    tp = "TP"
    bb = d.textbbox((0, 0), tp, font=BOLD_LG)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    d.text((cx - tw / 2 - bb[0], cy - th / 2 - bb[1]), tp, font=BOLD_LG, fill=PAPER)

    # Wordmark
    wm = "TestPrepPilot"
    wb = d.textbbox((0, 0), wm, font=BOLD_SM)
    ww = wb[2] - wb[0]
    d.text((170, 92), wm, font=BOLD_SM, fill=INK)

    # Coral accent dot under wordmark
    d.ellipse([172, 132, 186, 146], fill=CORAL)

    x = 90
    # Eyebrow
    eb = d.textbbox((0, 0), eyebrow, font=BOLD_SM)
    ew = eb[2] - eb[0]
    d.text((x, 200), eyebrow, font=BOLD_SM, fill=PRIMARY)

    # Headline (wrap to 2 lines max)
    hlines = wrap(headline, BOLD, 1020)
    y = 248
    for line in hlines[:2]:
        d.text((x, y), line, font=BOLD, fill=INK)
        y += 70

    # Subtext (wrap to 2 lines)
    slines = wrap(sub, REG, 1000)
    y += 8
    for line in slines[:2]:
        d.text((x, y), line, font=REG, fill=MUTED)
        y += 40

    img.save(path, "PNG", optimize=True)
    print("wrote", path, os.path.getsize(path), "bytes")


def make_logo(path):
    S = 512
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([16, 16, S - 16, S - 16], fill=INK)
    tp = "TP"
    font = f("georgiab.ttf", 230)
    bb = d.textbbox((0, 0), tp, font=font)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    cx, cy = S / 2, S / 2
    d.text((cx - tw / 2 - bb[0], cy - th / 2 - bb[1] - 6), tp, font=font, fill=PAPER)
    img.save(path, "PNG")
    print("wrote", path, os.path.getsize(path), "bytes")


make_og(
    os.path.join(OUT, "og-image.png"),
    "CLEAR PATH TO ANY CREDENTIAL",
    "Verified exam, license & certification requirements.",
    "Independent, source-linked guidance for every U.S. professional pathway.",
)
make_og(
    os.path.join(OUT, "og-exam.png"),
    "EXAM GUIDE",
    "Requirements, costs & a proven prep path.",
    "Every detail checked against the official issuing body — not the sale.",
)
make_og(
    os.path.join(OUT, "og-state.png"),
    "BY STATE",
    "Professional licenses, state by state.",
    "Find your state's verified requirements, boards, and reciprocity rules.",
)
make_logo(os.path.join(OUT, "logo.png"))


# ── Per-field social cards ────────────────────────────────────────────────
# 541 pages previously shared exactly two og:image files, so every share of a
# category or a ranked list rendered the same generic card. These are the pages
# whose links actually get posted (fields and rankings), so each field gets its
# own card with its real credential count.
#
# The manifest comes from the catalog via node, not from a list copied here —
# see _gen_og_manifest.mjs.
import json
import subprocess
import sys

OG_FIELDS = os.path.join(OUT, "og")
os.makedirs(OG_FIELDS, exist_ok=True)

try:
    raw = subprocess.check_output(
        ["node", os.path.join(os.path.dirname(__file__), "_gen_og_manifest.mjs")],
        text=True,
    )
    fields = json.loads(raw)
except Exception as exc:  # noqa: BLE001 — generation must not break the build
    print("could not read field manifest, skipping per-field cards:", exc)
    fields = []

for field in fields:
    total = field.get("total", 0)
    specialisms = field.get("specialisms", 0)
    make_og(
        os.path.join(OG_FIELDS, f"cat-{field['id']}.png"),
        "CREDENTIAL FIELD",
        field["name"],
        f"{total} verified credentials across {specialisms} specialisms — "
        f"requirements, fees and exam formats, sourced from the issuing bodies.",
    )

make_og(
    os.path.join(OG_FIELDS, "best.png"),
    "RANKED BY PUBLISHED PAY",
    "The highest-paying U.S. credentials.",
    "Every figure is the median annual wage published for the occupation each "
    "credential unlocks, quoted from the source named in the guide.",
)
