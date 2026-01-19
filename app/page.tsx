'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SonyNavbar from '@/components/SonyNavbar';
import ScrollCanvas from '@/components/ScrollCanvas';
import GallerySection from '@/components/GallerySection';
import TimelineSection from '@/components/TimelineSection';
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer';
import Loader from '@/components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader progress={progress} />}
      </AnimatePresence>

      <main className="relative">
        <SonyNavbar />
        <ScrollCanvas 
          onLoadProgress={setProgress}
          onLoadComplete={() => setLoading(false)}
        />
        <GallerySection />
        <TimelineSection />
        <StackedCircularFooter />
        
        {/* Subtle radial gradient background */}
        <div className="fixed inset-0 -z-10 bg-gradient-radial from-[#050815] via-deep-black to-deep-black opacity-50" />
      </main>
    </>
  );
}
