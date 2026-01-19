#!/usr/bin/env python3
"""
Upscale image sequence to HD quality
Requires: pip install Pillow
"""

from PIL import Image
import os
from pathlib import Path

# Configuration
INPUT_DIR = "public/smart-glasses-all-frames"
OUTPUT_DIR = "public/smart-glasses-all-frames-hd"
TARGET_WIDTH = 2560  # HD resolution
TARGET_HEIGHT = 1440

def upscale_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    images = sorted(input_path.glob("*.jpg"))
    total = len(images)
    
    print(f"Found {total} images to upscale")
    print(f"Target resolution: {TARGET_WIDTH}x{TARGET_HEIGHT}")
    
    for idx, img_path in enumerate(images, 1):
        img = Image.open(img_path)
        
        # Calculate aspect-fit scaling
        img_ratio = img.width / img.height
        target_ratio = TARGET_WIDTH / TARGET_HEIGHT
        
        if img_ratio > target_ratio:
            new_width = TARGET_WIDTH
            new_height = int(TARGET_WIDTH / img_ratio)
        else:
            new_height = TARGET_HEIGHT
            new_width = int(TARGET_HEIGHT * img_ratio)
        
        # Upscale with high-quality Lanczos resampling
        upscaled = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save with maximum quality
        output_file = output_path / img_path.name
        upscaled.save(output_file, "JPEG", quality=95, optimize=True)
        
        print(f"[{idx}/{total}] {img_path.name} -> {new_width}x{new_height}")
    
    print(f"\n✓ Done! HD images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    upscale_images()
