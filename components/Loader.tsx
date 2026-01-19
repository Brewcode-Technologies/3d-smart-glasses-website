'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/components/ui/icons';

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Icons.logo className="w-16 h-16 text-electric-cyan" />
      </motion.div>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-sony-blue to-electric-cyan"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <p className="text-white/60 text-sm font-light">
        Loading experience... {Math.round(progress)}%
      </p>
    </motion.div>
  );
}
