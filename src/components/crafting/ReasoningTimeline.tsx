import React from 'react';
import { CRAFTING_STEPS } from '../../constants/craftingSteps';
import { ReasoningStep } from './ReasoningStep';
import { motion, AnimatePresence } from 'framer-motion';
import { CraftingState } from '../../types/crafting';
import { CheckCircle2 } from 'lucide-react';

interface ReasoningTimelineProps {
  completedSteps: string[];
  craftingState: CraftingState;
}

export const ReasoningTimeline: React.FC<ReasoningTimelineProps> = ({ completedSteps, craftingState }) => {
  return (
    <div className="flex flex-col gap-1 w-full max-w-sm mx-auto mt-6 relative min-h-[300px]">
      <AnimatePresence mode="wait">
        {craftingState === 'complete' ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Journey Ready
            </h3>
          </motion.div>
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(4px)', y: -10 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1 w-full absolute inset-0"
          >
            {CRAFTING_STEPS.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              // Only show if it's completed or it's the *next* one to be completed
              const currentStepIndex = completedSteps.length;
              const isVisible = index <= currentStepIndex;
              const status = isCompleted ? 'completed' : 'active';

              return (
                <AnimatePresence key={step.id}>
                  {isVisible && (
                    <ReasoningStep step={step} status={status} />
                  )}
                </AnimatePresence>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
