import React from 'react';
import { motion } from 'framer-motion';

export const CraftingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#06070a]">
      
      {/* 10% Darken Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

      {/* Slow Drifting Blue Ambient Glow */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-blue-500/5 blur-[120px] rounded-full z-0"
      />

      {/* Volumetric Light Rays */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
          className="w-[200vw] h-[200vw] absolute"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-[100vw] h-12 bg-gradient-to-r from-transparent via-blue-200/10 to-transparent blur-2xl origin-left"
              style={{ transform: `rotate(${i * 60}deg) translateY(-50%)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Faint Curved Latitude Lines & Orbital Arcs */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
        <svg viewBox="0 0 1000 1000" className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] animate-[spin_200s_linear_infinite]">
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" className="text-blue-200" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" className="text-blue-300" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="480" fill="none" stroke="currentColor" className="text-blue-100" strokeWidth="0.2" strokeDasharray="1 10" />
          <path d="M 100 500 Q 500 200 900 500" fill="none" stroke="currentColor" className="text-blue-200" strokeWidth="0.5" opacity="0.5" />
          <path d="M 200 500 Q 500 800 800 500" fill="none" stroke="currentColor" className="text-blue-200" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Tiny Distant Stars / Particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          );
        })}
      </div>

    </div>
  );
};
