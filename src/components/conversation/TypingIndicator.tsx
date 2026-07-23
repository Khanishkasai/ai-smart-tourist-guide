import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 mb-4 w-full">
      <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <Sparkles className="w-4 h-4 text-indigo-300" />
      </div>
      <div className="bg-white/[0.04] border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 backdrop-blur-md shadow-glass-low h-[46px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-indigo-400/60 rounded-full"
            animate={{
              y: ['0%', '-50%', '0%'],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15
            }}
          />
        ))}
      </div>
    </div>
  );
};
