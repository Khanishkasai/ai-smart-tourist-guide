import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PromptBar } from './PromptBar';
import { VibeChip } from './VibeChip';
import { VibePreset, EnvironmentalTheme } from '@/types';
import { useTypewriter } from '../../hooks/useTypewriter';

interface HeroSectionProps {
  onPromptSubmit: (prompt: string) => void;
  vibePresets: VibePreset[];
  onThemeChange: (theme: EnvironmentalTheme) => void;
  isSubmitting?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onPromptSubmit,
  vibePresets,
  onThemeChange,
  isSubmitting = false,
}) => {
  const { text: promptValue, typeText, setImmediateText, stopTyping } = useTypewriter(16);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  const handleSelectVibePreset = (preset: VibePreset) => {
    setActivePresetId(preset.id);
    onThemeChange(preset.themeGlow);
    typeText(preset.promptText);
  };

  const handlePromptChange = (val: string) => {
    stopTyping();
    setImmediateText(val);
    
    // If user types manually, clear the active preset if it doesn't match
    if (activePresetId) {
      const activePreset = vibePresets.find(p => p.id === activePresetId);
      if (activePreset && val !== activePreset.promptText) {
        setActivePresetId(null);
        onThemeChange('default');
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 z-10">
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Refined AI Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/12 text-xs font-mono text-blue-300 backdrop-blur-xl shadow-glass-low mb-6 select-none"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          <span className="tracking-[0.22em] uppercase text-[10px] font-medium">AI TRAVEL INTELLIGENCE</span>
        </motion.div>

        {/* Cinematic Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[-0.03em] text-white leading-[1.04]">
            Travel isn't planned.{' '}
            <span className="block mt-1 animate-shimmer-text">
              It's crafted.
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-sans max-w-[620px] mx-auto leading-[1.65] font-light tracking-wide pt-1">
            Describe your dream trip. We'll craft the journey.
          </p>
        </motion.div>

        {/* Interactive Prompt Bar Component */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl mx-auto mb-7"
        >
          <PromptBar
            value={promptValue}
            onChange={handlePromptChange}
            onSubmit={onPromptSubmit}
            isSubmitting={isSubmitting}
          />
        </motion.div>

        {/* Rebuilt Suggestion Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 w-full max-w-3xl mx-auto"
        >
          <span className="font-mono text-[9.5px] tracking-[0.22em] text-slate-500 uppercase select-none">
            OR EXPLORE CURATED DISCOVERIES
          </span>

          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 w-full">
            {vibePresets.map((preset, idx) => (
              <VibeChip
                key={preset.id}
                preset={preset}
                index={idx}
                onSelect={handleSelectVibePreset}
                isActive={activePresetId === preset.id}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
