#!/usr/bin/env python3
"""
Upscale images using Real-ESRGAN AI model
Requires: pip install realesrgan opencv-python
"""

import cv2
import os
from pathlib import Path
try:
    from realesrgan import RealESRGANer
    from basicsr.archs.rrdbnet_arch import RRDBNet
except ImportError:
    print("Installing required packages...")
    os.system("pip3 install realesrgan basicsr facexlib gfpgan")
    from realesrgan import RealESRGANer
    from basicsr.archs.rrdbnet_arch import RRDBNet

INPUT_DIR = "public/video-frames-cropped"
OUTPUT_DIR = "public/video-frames-ai-hd"
SCALE = 2  # 2x upscale (1280x670 -> 2560x1340)

def upscale_images():
    input_path = Path(INPUT_DIR)
    output_path = Path(OUTPUT_DIR)
    output_path.mkdir(exist_ok=True)
    
    # Initialize Real-ESRGAN model
    print("Loading AI upscaling model...")
    model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=SCALE)
    upsampler = RealESRGANer(
        scale=SCALE,
        model_path='https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x2plus.pth',
        model=model,
        tile=400,
        tile_pad=10,
        pre_pad=0,
        half=False
    )
    
    images = sorted(input_path.glob("*.png"))
    total = len(images)
    
    print(f"Found {total} images to upscale")
    print(f"Upscaling by {SCALE}x using AI...")
    
    for idx, img_path in enumerate(images, 1):
        img = cv2.imread(str(img_path), cv2.IMREAD_COLOR)
        
        # AI upscale
        output, _ = upsampler.enhance(img, outscale=SCALE)
        
        # Save upscaled image
        output_file = output_path / img_path.name
        cv2.imwrite(str(output_file), output, [cv2.IMWRITE_PNG_COMPRESSION, 0])
        
        print(f"[{idx}/{total}] {img_path.name} -> {output.shape[1]}x{output.shape[0]}")
    
    print(f"\n✓ Done! Upscaled images saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    upscale_images()
