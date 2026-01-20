'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 180;

interface ScrollCanvasProps {
  onLoadProgress?: (progress: number) => void;
  onLoadComplete?: () => void;
}

export default function ScrollCanvas({ onLoadProgress, onLoadComplete }: ScrollCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/smart-glasses-all-frames-hd-cropped/ezgif-frame-${String(i).padStart(3, '0')}.png`;
      img.onload = () => {
        loadedCount++;
        const progress = (loadedCount / FRAME_COUNT) * 100;
        onLoadProgress?.(progress);
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
          onLoadComplete?.();
        }
      };
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [onLoadProgress, onLoadComplete]);

  // Render frame on scroll
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.imageSmoothingEnabled = false;

    // Draw first frame immediately
    const firstImg = images[0];
    if (firstImg && firstImg.complete) {
      const scale = Math.max(
        (window.innerWidth * dpr) / firstImg.width,
        (window.innerHeight * dpr) / firstImg.height
      );
      const x = ((window.innerWidth * dpr) - firstImg.width * scale) / 2 - (window.innerWidth * dpr * 0.15);
      const y = ((window.innerHeight * dpr) - firstImg.height * scale) / 2;
      ctx.drawImage(firstImg, x, y, firstImg.width * scale, firstImg.height * scale);
    }

    const unsubscribe = currentFrame.on('change', (latest) => {
      const index = Math.round(latest);
      const img = images[index];

      if (img && img.complete) {
        const scale = Math.max(
          (window.innerWidth * dpr) / img.width,
          (window.innerHeight * dpr) / img.height
        );

        const x = ((window.innerWidth * dpr) - img.width * scale) / 2 - (window.innerWidth * dpr * 0.15);
        const y = ((window.innerHeight * dpr) - img.height * scale) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    });

    return () => unsubscribe();
  }, [currentFrame, images, imagesLoaded]);

  // Text animations based on scroll progress
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const engineeringOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const sensingOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
  const displayOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.8, 0.85], [0, 1, 1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[400vh]" id="optics">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex">
        {/* Left side - Text content (30%) */}
        <div className="w-[30%] relative z-10 flex flex-col justify-center pb-32 pl-8 md:pl-16">
          {/* Hero Section (0-15%) */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute bottom-32 left-8 md:left-16"
          >
            <div className="mb-3 inline-block">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-cyan">Next Generation</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.02em] mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.3)]">
              Sony Smart Glasses
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan mb-5 font-bold tracking-tight">
              See beyond the obvious.
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-md font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4">
              Lightweight augmented eyewear designed for real-world clarity, context, and control.
            </p>
          </motion.div>

          {/* Engineering Section (15-40%) */}
          <motion.div
            style={{ opacity: engineeringOpacity }}
            className="absolute bottom-32 left-8 md:left-16"
            id="optics-section"
          >
            <div className="mb-3 inline-block">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-cyan">01 — Optics</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-[-0.02em] mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.3)]">
              Precision-engineered optics.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-md font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4 mb-3">
              Waveguide displays, micro-projectors, and advanced coatings deliver clarity in any environment.
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-md font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4">
              Every component is optimized for transparency, brightness, and all-day wear.
            </p>
          </motion.div>

          {/* Sensing Section (40-65%) */}
          <motion.div
            style={{ opacity: sensingOpacity }}
            className="absolute bottom-32 left-8 md:left-16"
            id="intelligence"
          >
            <div className="mb-3 inline-block">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-cyan">02 — Intelligence</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-[-0.02em] mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.3)]">
              Spatial awareness, intelligently tuned.
            </h2>
            <div className="space-y-3 max-w-md">
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4 flex items-start gap-2">
                <span className="text-electric-cyan mt-1">→</span>
                <span>Environmental sensors analyze the world in real-time.</span>
              </p>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4 flex items-start gap-2">
                <span className="text-electric-cyan mt-1">→</span>
                <span>Context-aware computing adapts to your surroundings.</span>
              </p>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4 flex items-start gap-2">
                <span className="text-electric-cyan mt-1">→</span>
                <span>Information stays relevant—never overwhelming.</span>
              </p>
            </div>
          </motion.div>

          {/* Display Section (65-85%) */}
          <motion.div
            style={{ opacity: displayOpacity }}
            className="absolute bottom-32 left-8 md:left-16"
            id="display"
          >
            <div className="mb-3 inline-block">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-cyan">03 — Display</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-[-0.02em] mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.3)]">
              Clarity that feels natural.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-md font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4 mb-3">
              Micro-displays render text and graphics with sharpness and contrast that blends with reality.
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-md font-light leading-relaxed border-l-2 border-electric-cyan/50 pl-4">
              Low-power compute ensures smooth, responsive performance all day long.
            </p>
          </motion.div>

          {/* CTA Section (85-100%) */}
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="absolute bottom-32 left-8 md:left-16"
            id="experience"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-[-0.02em] mb-6 bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,214,255,0.3)]">
              See more. Do more.
            </h2>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan mb-8 font-bold tracking-tight">
              Sony Smart Glasses. Designed for context, built for the real world.
            </p>
            <div className="flex flex-col gap-4">
              <div className="gradient-border w-fit hover:scale-105 transition-transform">
                <button className="gradient-border-inner px-10 py-4 text-base font-bold hover:opacity-80 transition-opacity">
                  Experience Smart Glasses
                </button>
              </div>
              <button className="px-10 py-4 text-base font-semibold text-white/70 hover:text-electric-cyan transition-colors text-left group flex items-center gap-2">
                See full specs 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
            <p className="text-xs text-white/50 mt-8 max-w-sm font-light tracking-wide uppercase">
              Engineered for everyday environments, from work to travel and beyond.
            </p>
          </motion.div>
        </div>

        {/* Right side - Canvas (70%) */}
        <div className="w-[70%] relative">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: '#050505' }}
          />

          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-deep-black">
              <div className="text-white/60 text-sm">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
