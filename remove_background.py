#!/usr/bin/env python3
"""
Remove background from all images using AI
Requires: pip install rembg pillow
"""

from rembg import remove
from PIL import Image
import os
from pathlib import Path

INPUT_DIR = "public/smart-glasses-all-frames-hd-cropped"
OUTPUT_DIR = "public/smart-glasses-all-frames-nobg"

def remove_backgrounds():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to process")
    print(f"Removing backgrounds with AI...")
    
    for idx, img_path in enumerate(images, 1):
        # Read input image
        input_img = Image.open(img_path)
        
        # Remove background using AI
        output_img = remove(input_img)
        
        # Save with transparent background
        output_file = output_path / img_path.name
        output_img.save(output_file, "PNG")
        
        print(f"[{idx}/{total}] {img_path.name} -> background removed")
    
    print(f"\n✓ Done! Images with transparent background saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    remove_backgrounds()
