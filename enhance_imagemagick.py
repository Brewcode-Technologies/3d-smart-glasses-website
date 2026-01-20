#!/usr/bin/env python3
"""
Enhance images using ImageMagick with advanced filters
Requires: brew install imagemagick
"""

import subprocess
from pathlib import Path

INPUT_DIR = "public/video-frames-cropped"
OUTPUT_DIR = "public/video-frames-enhanced"
SCALE = 200  # 200% = 2x

def enhance_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to enhance")
    print(f"Using ImageMagick with advanced enhancement filters...")
    
    for idx, img_path in enumerate(images, 1):
        output_file = output_path / img_path.name
        
        # ImageMagick command with enhancement
        cmd = [
            "magick", str(img_path),
            "-filter", "Lanczos",
            "-resize", f"{SCALE}%",
            "-unsharp", "0x1.5+1.0+0.05",  # Sharpen
            "-enhance",  # Enhance contrast
            "-quality", "100",
            str(output_file)
        ]
        
        subprocess.run(cmd, capture_output=True)
        print(f"[{idx}/{total}] Enhanced {img_path.name}")
    
    print(f"\n✓ Done! Enhanced images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    enhance_images()
