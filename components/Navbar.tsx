'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.75)']
  );

  return (
    <motion.nav
      style={{ opacity: navOpacity, backgroundColor: navBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
    >
      <div className="max-w-[1400px] mx-auto px-8 h-14 flex items-center justify-between">
        <div className="text-sm font-medium tracking-tight">Sony Smart Glasses</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#optics" className="hover:opacity-60 transition-opacity">Optics</a>
          <a href="#intelligence" className="hover:opacity-60 transition-opacity">Intelligence</a>
          <a href="#display" className="hover:opacity-60 transition-opacity">Display</a>
          <a href="#gallery" className="hover:opacity-60 transition-opacity">Gallery</a>
          <a href="#timeline" className="hover:opacity-60 transition-opacity">Timeline</a>
        </div>

        <div className="gradient-border">
          <button className="gradient-border-inner px-6 py-2 text-sm font-medium hover:opacity-80 transition-opacity">
            Experience Smart Glasses
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
