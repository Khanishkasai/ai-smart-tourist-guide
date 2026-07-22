import React from 'react';
import { motion } from 'framer-motion';
import { VibePreset } from '@/types';

interface VibeChipProps {
  preset: VibePreset;
  onSelect: (preset: VibePreset) => void;
  isActive?: boolean;
  index?: number;
}

const themeGlowStyles: Record<string, string> = {
  tokyo: 'hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]',
  swiss: 'hover:border-sky-300/40 hover:shadow-[0_0_20px_rgba(186,230,253,0.25)]',
  paris: 'hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(251,146,60,0.25)]',
  iceland: 'hover:border-emerald-400/40 hover:shadow-[0_0_20px_rgba(52,211,153,0.25)]',
  amalfi: 'hover:border-rose-400/40 hover:shadow-[0_0_20px_rgba(244,114,182,0.25)]',
};

export const VibeChip: React.FC<VibeChipProps> = ({
  preset,
  onSelect,
  isActive = false,
  index = 0,
}) => {
  const glowStyle = themeGlowStyles[preset.themeGlow] || themeGlowStyles.tokyo;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.4 + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onSelect(preset)}
      className={`group relative flex items-center gap-2.5 px-4 h-9 sm:h-10 rounded-full text-xs sm:text-sm font-medium backdrop-blur-xl transition-all duration-300 select-none ${glowStyle} ${
        isActive
          ? 'bg-blue-500/20 border border-blue-400/60 text-blue-100 shadow-[0_0_24px_rgba(96,165,250,0.3)] ring-1 ring-blue-400/30'
          : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white'
      }`}
      aria-label={`Select prompt: ${preset.title}`}
    >
      {/* Emoji Icon with Subtle Scale Transition */}
      <span className="text-sm sm:text-base leading-none flex items-center group-hover:scale-115 transition-transform duration-300">
        {preset.emoji}
      </span>
      
      {/* Clean Title Text */}
      <span className="font-sans tracking-tight leading-none text-slate-300 group-hover:text-white transition-colors">
        {preset.title}
      </span>

      {/* Subtle Micro Glow Dot Accent */}
      <span className={`w-1.5 h-1.5 rounded-full transition-opacity duration-300 ${
        isActive ? 'bg-blue-400 opacity-100' : 'bg-white/20 group-hover:bg-blue-400 group-hover:opacity-100 opacity-40'
      }`} />
    </motion.button>
  );
};
