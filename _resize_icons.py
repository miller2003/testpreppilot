from PIL import Image
base = r"C:/Users/samja/Desktop/testpreppilot-v2/public"
src = Image.open(base + "/logo.png").convert("RGB")
for size, name in [(180, "apple-touch-icon.png"), (48, "favicon-48.png"), (32, "favicon-32.png")]:
    src.resize((size, size), Image.LANCZOS).save(base + "/" + name, optimize=True)
    print("wrote", name, size)
