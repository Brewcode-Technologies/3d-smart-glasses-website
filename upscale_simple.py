#!/usr/bin/env python3
"""
Upscale images using high-quality Lanczos resampling
Requires: pip install Pillow
"""

from PIL import Image
import os
from pathlib import Path

INPUT_DIR = "public/video-frames-cropped"
OUTPUT_DIR = "public/video-frames-hd"
SCALE = 2  # 2x upscale (1280x670 -> 2560x1340)

def upscale_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to upscale")
    print(f"Upscaling by {SCALE}x using Lanczos algorithm...")
    
    for idx, img_path in enumerate(images, 1):
        img = Image.open(img_path)
        width, height = img.size
        
        # Upscale using high-quality Lanczos resampling
        new_size = (width * SCALE, height * SCALE)
        upscaled = img.resize(new_size, Image.LANCZOS)
        
        # Apply sharpening filter for better clarity
        from PIL import ImageEnhance, ImageFilter
        upscaled = upscaled.filter(ImageFilter.SHARPEN)
        enhancer = ImageEnhance.Sharpness(upscaled)
        upscaled = enhancer.enhance(1.2)
        
        # Save upscaled image
        output_file = output_path / img_path.name
        upscaled.save(output_file, "PNG", optimize=True)
        
        print(f"[{idx}/{total}] {img_path.name} -> {new_size[0]}x{new_size[1]}")
    
    print(f"\n✓ Done! Upscaled images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    upscale_images()
