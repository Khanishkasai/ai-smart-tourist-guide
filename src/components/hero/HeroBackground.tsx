import React from 'react';
import { motion } from 'framer-motion';
import { EnvironmentalTheme } from '@/types';

interface HeroBackgroundProps {
  theme?: EnvironmentalTheme;
}

const themeGlowMap: Record<EnvironmentalTheme, string> = {
  default: 'radial-gradient(circle at 50% 32%, rgba(59, 130, 246, 0.24), rgba(8, 9, 12, 0) 75%)',
  tokyo: 'radial-gradient(circle at 50% 32%, rgba(37, 99, 235, 0.36), rgba(8, 9, 12, 0) 75%)',
  swiss: 'radial-gradient(circle at 50% 32%, rgba(186, 230, 253, 0.28), rgba(8, 9, 12, 0) 75%)',
  paris: 'radial-gradient(circle at 50% 32%, rgba(251, 146, 60, 0.28), rgba(8, 9, 12, 0) 75%)',
  iceland: 'radial-gradient(circle at 50% 32%, rgba(52, 211, 153, 0.28), rgba(8, 9, 12, 0) 75%)',
  amalfi: 'radial-gradient(circle at 50% 32%, rgba(244, 114, 182, 0.28), rgba(8, 9, 12, 0) 75%)',
};

// Generate 10 ambient floating particle positions
const PARTICLES = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 1,
  duration: Math.random() * 12 + 16,
  delay: Math.random() * 4,
}));

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ theme = 'default' }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#08090C]">
      {/* High-Impact Mountain Landscape: Visibility +5% (opacity-50), Shadow Lifted (brightness-90 contrast-115) */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 filter brightness-90 contrast-115"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=90')`,
        }}
      />

      {/* Atmospheric Morning Fog Layers */}
      <motion.div
        animate={{ x: ['-4%', '4%', '-4%'] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Floating Micro Ambient Particles */}
      <div className="absolute inset-0 opacity-50">
        {PARTICLES.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.75, 0],
              y: [-15, -100],
              x: [0, (particle.id % 2 === 0 ? 25 : -25)],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            className="absolute rounded-full bg-blue-200 shadow-[0_0_6px_rgba(186,230,253,0.7)]"
          />
        ))}
      </div>

      {/* Atmospheric Environmental Illumination Shader Glow Mesh */}
      <motion.div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{ background: themeGlowMap[theme] }}
        animate={{
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Dark Vignette Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/85 via-[#08090C]/40 to-[#08090C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090C]/30 to-[#08090C]" />
    </div>
  );
};
