import React from 'react';
import { motion } from 'framer-motion';
import { CraftingState } from '../../types/crafting';
import { ThinkingStatus } from './ThinkingStatus';
import { ReasoningTimeline } from './ReasoningTimeline';
import { Sparkles } from 'lucide-react';

interface CraftingCardProps {
  userPrompt: string;
  craftingState: CraftingState;
  completedSteps: string[];
  statusMessage: string;
}

export const CraftingCard: React.FC<CraftingCardProps> = ({
  userPrompt,
  craftingState,
  completedSteps,
  statusMessage
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[560px] mx-auto z-20 group"
    >


      <div className="rounded-[24px] glass-panel p-8 sm:p-10 relative overflow-hidden">
        {/* Subtle top glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col items-center text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 glass-pill text-[11px] font-mono tracking-widest text-blue-300 mb-6 uppercase"
          >
            <Sparkles className="w-3 h-3 text-blue-400" />
            AI Reasoning
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3"
          >
            Journey Crafted
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-[15px] max-w-sm mb-6"
          >
            Your personalized adventure is coming to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full p-4 rounded-xl bg-obsidian-surface-02 border border-border-subtle shadow-inner"
          >
            <p className="italic text-slate-300 text-sm leading-relaxed relative z-10">
              "{userPrompt}"
            </p>
            {/* Thinking Status integrated directly under the prompt */}
            {craftingState !== 'complete' && (
              <div className="mt-4 pt-3 border-t border-white/5">
                <ThinkingStatus statusMessage={statusMessage} />
              </div>
            )}
          </motion.div>

          <div className="w-full mt-6">
            <ReasoningTimeline 
              completedSteps={completedSteps} 
              craftingState={craftingState} 
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
};
