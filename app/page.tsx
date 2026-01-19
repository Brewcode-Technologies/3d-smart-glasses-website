import SonyNavbar from '@/components/SonyNavbar';
import ScrollCanvas from '@/components/ScrollCanvas';
import GallerySection from '@/components/GallerySection';
import TimelineSection from '@/components/TimelineSection';
import { StackedCircularFooter } from '@/components/ui/stacked-circular-footer';

export default function Home() {
  return (
    <main className="relative">
      <SonyNavbar />
      <ScrollCanvas />
      <GallerySection />
      <TimelineSection />
      <StackedCircularFooter />
      
      {/* Subtle radial gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-radial from-[#050815] via-deep-black to-deep-black opacity-50" />
    </main>
  );
}
