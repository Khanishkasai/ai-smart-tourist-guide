import { useState, useEffect, useCallback } from 'react';
import { CraftingState } from '../types/crafting';
import { CRAFTING_STEPS, THINKING_MESSAGES } from '../constants/craftingSteps';

export function useCraftingSequence(onCraftingComplete: () => void) {
  const [craftingState, setCraftingState] = useState<CraftingState>('idle');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const startSequence = useCallback(() => {
    if (craftingState !== 'idle') return;
    setCraftingState('crafting');

    // Start rotating messages
    const messageInterval = setInterval(() => {
      setStatusMessageIndex((prev) => (prev + 1) % THINKING_MESSAGES.length);
    }, 2500);

    let currentStepIndex = 0;
    
    const nextStep = () => {
      if (currentStepIndex >= CRAFTING_STEPS.length) {
        clearInterval(messageInterval);
        
        // Pause for 800ms after all steps complete
        setTimeout(() => {
          setCraftingState('complete');
          
          // Wait for "Journey Ready" to be visible, then fade out card
          setTimeout(() => {
            setIsFadingOut(true);
            
            // After fade out completes, call the callback
            setTimeout(() => {
              onCraftingComplete();
            }, 1000); // 1s fade duration
          }, 1500); // Wait 1.5s reading time for "Journey Ready"

        }, 800);
        return;
      }

      // Complete one step
      setCompletedSteps((prev) => [...prev, CRAFTING_STEPS[currentStepIndex].id]);
      currentStepIndex++;

      // Random delay between 700ms and 1000ms
      const delay = Math.random() * (1000 - 700) + 700;
      setTimeout(nextStep, delay);
    };

    // Initial delay before starting steps
    setTimeout(nextStep, 800);

  }, [craftingState, onCraftingComplete]);

  // Start sequence automatically on mount
  useEffect(() => {
    startSequence();
  }, [startSequence]);

  return {
    craftingState,
    completedSteps,
    statusMessage: THINKING_MESSAGES[statusMessageIndex],
    isFadingOut,
  };
}
