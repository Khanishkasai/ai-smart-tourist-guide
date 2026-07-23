import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CraftingSceneProps } from '../../types/crafting';
import { useCraftingSequence } from '../../hooks/useCraftingSequence';
import { CraftingBackground } from './CraftingBackground';
import { CraftingCard } from './CraftingCard';

export const CraftingScene: React.FC<CraftingSceneProps> = ({
  userPrompt,
  onCraftingComplete
}) => {
  const { craftingState, completedSteps, statusMessage, isFadingOut } = useCraftingSequence(onCraftingComplete);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background handles its own internal animations */}
      {/* <CraftingBackground /> */}

      {/* Main Content Area */}
      <div className="relative z-10 w-full px-4 flex justify-center items-center h-full">
        <AnimatePresence>
          {!isFadingOut && (
            <motion.div
              key="crafting-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }} // Moves upward as requested
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-center"
            >
              <CraftingCard
                userPrompt={userPrompt}
                craftingState={craftingState}
                completedSteps={completedSteps}
                statusMessage={statusMessage}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
