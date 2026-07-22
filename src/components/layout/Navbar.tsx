import React, { useState } from 'react';
import { Compass, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onReset?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReset }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 sm:py-6 pointer-events-none">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto">
        {/* Brand Mark Logo - Optical Baseline & 2-3px Subtitle Spacing */}
        <motion.div
          onClick={onReset}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
          role="button"
          tabIndex={0}
          aria-label="Spatial Travel Home"
        >
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-white/15 flex items-center justify-center backdrop-blur-md group-hover:border-blue-400/50 transition-all duration-300 shadow-glass-low">
            <Compass className="w-5 h-5 text-blue-400 group-hover:rotate-45 transition-transform duration-500 ease-out" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-100 leading-none group-hover:text-blue-300 transition-colors">
              SPATIAL
            </span>
            <span className="text-[9.5px] font-mono tracking-[0.20em] text-slate-400 uppercase mt-1.5 leading-none">
              AI INTELLIGENCE
            </span>
          </div>
        </motion.div>

        {/* Ambient Soundscape Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/12 hover:border-white/25 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all backdrop-blur-md shadow-glass-low select-none"
            aria-label={isMuted ? 'Unmute Ambient Soundscape' : 'Mute Ambient Soundscape'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-blue-400 animate-pulse" />
            )}
            <span className="hidden sm:inline font-sans">{isMuted ? 'Muted' : 'Soundscape'}</span>
          </button>
        </motion.div>
      </nav>
    </header>
  );
};
