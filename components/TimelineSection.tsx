'use client';

import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';

export default function TimelineSection() {
  const data = [
    {
      title: "Design",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Crafted with precision. Every curve, every angle designed for comfort and style. Matte black finish with aerospace-grade materials.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/gallery/Whisk_0075a8637af64e9b14b4cef9011d3b76dr.png"
              alt="Sony Smart Glasses design detail"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_49d83fa02dc22d483ad4b904de54a024dr.png"
              alt="Sony Smart Glasses frame detail"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_8bcf189dac5e14888014a8cad8dd30fbdr.png"
              alt="Sony Smart Glasses side view"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_d77a6d76c84cb3b93724c14d234faaa5dr.png"
              alt="Sony Smart Glasses angle view"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Optics",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Advanced waveguide technology projects crisp, vibrant displays directly into your field of view. Micro-OLED displays with industry-leading brightness and contrast.
          </p>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-8">
            Multi-layer optical coatings ensure perfect clarity in any lighting condition, from bright sunlight to dimly lit rooms.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/gallery/Whisk_1ec4df211afe210bf61436218c2aa099dr.png"
              alt="Optical waveguide technology"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_459b860ef9847cbb39046a3ac13a0a27dr.png"
              alt="Display projection system"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_552aea90c2e9bb0be2e460e404065276dr.png"
              alt="Lens coating detail"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_c7ea1301d636e44a2f4440c2db116598dr.png"
              alt="Optical assembly"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Intelligence",
      content: (
        <div>
          <p className="text-white/80 text-xs md:text-sm font-normal mb-4">
            Powered by Sony's custom AI chip for real-time contextual computing
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✓ Environmental awareness sensors
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✓ Spatial audio with 3D sound mapping
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✓ Voice command recognition
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✓ Gesture control interface
            </div>
            <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm">
              ✓ All-day battery with fast charging
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/gallery/Whisk_ed196a8a8e44723bef845b28b5db1eaedr.png"
              alt="AI processing chip"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
            <Image
              src="/gallery/Whisk_0075a8637af64e9b14b4cef9011d3b76dr.png"
              alt="Sensor array system"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(0,80,255,0.2)]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="timeline">
      <Timeline data={data} />
    </div>
  );
}
