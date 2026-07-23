import React from 'react';
import { motion } from 'framer-motion';
import { ReasoningStep as ReasoningStepType } from '../../types/crafting';
import { cn } from '../../utils/cn';

interface ReasoningStepProps {
  step: ReasoningStepType;
  status: 'active' | 'completed';
}

export const ReasoningStep: React.FC<ReasoningStepProps> = ({ step, status }) => {
  const isCompleted = status === 'completed';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, filter: 'blur(8px)', y: 15, scale: 0.95 }}
      animate={{ 
        opacity: isCompleted ? 0.3 : 1,
        filter: isCompleted ? 'blur(1px)' : 'blur(0px)', 
        y: 0,
        scale: isCompleted ? 0.96 : 1
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "flex items-center gap-4 py-2 px-1 transition-colors duration-700 w-full",
        isCompleted ? "text-slate-400" : "text-white"
      )}
    >
      <div 
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-700 relative",
          isCompleted 
            ? "border-blue-400/30 bg-blue-400/5 shadow-[0_0_15px_rgba(96,165,250,0.1)]" 
            : "border-blue-400/60 bg-blue-400/10 shadow-[0_0_20px_rgba(96,165,250,0.3)]"
        )}
      >
        {isCompleted ? (
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-400"
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.svg>
        ) : (
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-blue-300"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      <span className={cn(
        "text-[15px] tracking-wide transition-all duration-700",
        isCompleted ? "font-normal" : "font-medium"
      )}>
        {step.label}
      </span>
    </motion.div>
  );
};
