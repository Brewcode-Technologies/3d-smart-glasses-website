'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

export default function GallerySection() {
  const images = [
    {
      src: '/gallery/Whisk_0075a8637af64e9b14b4cef9011d3b76dr.png',
      alt: 'Sony Smart Glasses detail view 1',
    },
    {
      src: '/gallery/Whisk_49d83fa02dc22d483ad4b904de54a024dr.png',
      alt: 'Sony Smart Glasses detail view 2',
    },
    {
      src: '/gallery/Whisk_8bcf189dac5e14888014a8cad8dd30fbdr.png',
      alt: 'Sony Smart Glasses detail view 3',
    },
    {
      src: '/gallery/Whisk_d77a6d76c84cb3b93724c14d234faaa5dr.png',
      alt: 'Sony Smart Glasses detail view 4',
    },
    {
      src: '/gallery/Whisk_1ec4df211afe210bf61436218c2aa099dr.png',
      alt: 'Sony Smart Glasses detail view 5',
    },
    {
      src: '/gallery/Whisk_459b860ef9847cbb39046a3ac13a0a27dr.png',
      alt: 'Sony Smart Glasses detail view 6',
    },
    {
      src: '/gallery/Whisk_552aea90c2e9bb0be2e460e404065276dr.png',
      alt: 'Sony Smart Glasses detail view 7',
    },
  ];

  return (
    <section className="relative" id="gallery">
      <div className="relative flex h-[50vh] items-center justify-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,80,255,0.1),transparent_50%)] blur-[30px]"
        />
        <h2 className="text-center text-5xl md:text-7xl font-black tracking-[-0.02em] text-white">
          Explore Every Detail
        </h2>
      </div>
      <ZoomParallax images={images} />
    </section>
  );
}
