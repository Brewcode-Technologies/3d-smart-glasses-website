'use client';

import { Eye, Cpu, Radio, Sparkles, FileText, ShoppingBag } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

export default function SonyNavbar() {
  const navItems = [
    { name: 'Optics', url: '#optics', icon: Eye },
    { name: 'Intelligence', url: '#intelligence', icon: Cpu },
    { name: 'Display', url: '#display', icon: Sparkles },
    { name: 'Gallery', url: '#gallery', icon: FileText },
    { name: 'Timeline', url: '#timeline', icon: Radio },
    { name: 'Experience', url: '#experience', icon: ShoppingBag }
  ];

  return <NavBar items={navItems} />;
}
