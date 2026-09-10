import os
from pathlib import Path
from PIL import Image
from rembg import remove, new_session

session = new_session("u2netp")
print("u2netp session initialized successfully")

hero_dir = Path("public/images/hero")
images = [
    "classic-whisk-matcha.jpg",
    "honey-rosemary-matcha.jpg",
    "mango-matcha.jpg",
    "matcha-martini.jpg",
    "strawberry-matcha.jpg",
]

for img_name in images:
    src = hero_dir / img_name
    dest = hero_dir / (src.stem + ".png")
    if src.exists():
        print(f"Processing {src} -> {dest}")
        try:
            inp = Image.open(src)
            out = remove(inp, session=session)
            out.save(dest)
            print(f"Saved {dest}")
        except Exception as err:
            print(f"Failed to remove bg for {src}: {err}")
    else:
        print(f"File not found: {src}")

print("Done processing all hero drinks.")
