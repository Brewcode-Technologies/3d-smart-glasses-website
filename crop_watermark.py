#!/usr/bin/env python3
"""
Crop 100px from bottom of all images to remove watermark
Requires: pip install Pillow
"""

from PIL import Image
import os
from pathlib import Path

INPUT_DIR = "public/smart-glasses-all-frames-hd"
OUTPUT_DIR = "public/smart-glasses-all-frames-hd-cropped"
CROP_BOTTOM = 50  # pixels to remove from bottom

def crop_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to crop")
    print(f"Removing {CROP_BOTTOM}px from bottom")
    
    for idx, img_path in enumerate(images, 1):
        img = Image.open(img_path)
        width, height = img.size
        
        # Crop: (left, top, right, bottom)
        cropped = img.crop((0, 0, width, height - CROP_BOTTOM))
        
        # Save with same filename
        output_file = output_path / img_path.name
        cropped.save(output_file, "PNG", optimize=True)
        
        print(f"[{idx}/{total}] {img_path.name} -> {width}x{height - CROP_BOTTOM}")
    
    print(f"\n✓ Done! Cropped images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    crop_images()
