#!/usr/bin/env python3
"""
Enhance images using waifu2x-ncnn-vulkan (AI upscaling with noise reduction)
Download from: https://github.com/nihui/waifu2x-ncnn-vulkan/releases
"""

import os
import subprocess
from pathlib import Path

INPUT_DIR = "public/video-frames-cropped"
OUTPUT_DIR = "public/video-frames-enhanced"
SCALE = 2
NOISE_LEVEL = 2  # 0-3, higher = more noise reduction

def enhance_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    # Check if waifu2x is installed
    waifu2x_cmd = "waifu2x-ncnn-vulkan"
    
    try:
        subprocess.run([waifu2x_cmd, "-h"], capture_output=True, check=True)
    except:
        print("waifu2x-ncnn-vulkan not found!")
        print("Install with: brew install waifu2x")
        return
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to enhance")
    print(f"Using AI enhancement with {SCALE}x upscale and noise reduction level {NOISE_LEVEL}")
    
    for idx, img_path in enumerate(images, 1):
        output_file = output_path / img_path.name
        
        # Run waifu2x enhancement
        cmd = [
            waifu2x_cmd,
            "-i", str(img_path),
            "-o", str(output_file),
            "-s", str(SCALE),
            "-n", str(NOISE_LEVEL),
            "-f", "png"
        ]
        
        subprocess.run(cmd, capture_output=True)
        print(f"[{idx}/{total}] Enhanced {img_path.name}")
    
    print(f"\n✓ Done! Enhanced images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    enhance_images()
