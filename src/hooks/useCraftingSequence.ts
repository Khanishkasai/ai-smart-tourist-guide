import { useState, useEffect, useCallback, useRef } from 'react';
import { CraftingState } from '../types/crafting';
import { CRAFTING_STEPS, THINKING_MESSAGES } from '../constants/craftingSteps';

export function useCraftingSequence(onCraftingComplete: () => void) {
  const [craftingState, setCraftingState] = useState<CraftingState>('idle');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const startedRef = useRef(false);
  const stepIndexRef = useRef(0);

  const timeoutsRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const clearAllTimers = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const startSequence = useCallback(() => {
    if (startedRef.current) return;

    startedRef.current = true;

    setCraftingState('crafting');
    setCompletedSteps([]);
    stepIndexRef.current = 0;

    intervalRef.current = window.setInterval(() => {
      setStatusMessageIndex((prev) => (prev + 1) % THINKING_MESSAGES.length);
    }, 2500);

    const nextStep = () => {
      if (stepIndexRef.current >= CRAFTING_STEPS.length) {
        clearAllTimers();

        const completeTimer = window.setTimeout(() => {
          setCraftingState('complete');

          const fadeTimer = window.setTimeout(() => {
            setIsFadingOut(true);

            const finishTimer = window.setTimeout(() => {
              onCraftingComplete();
            }, 1000);

            timeoutsRef.current.push(finishTimer);
          }, 1500);

          timeoutsRef.current.push(fadeTimer);
        }, 800);

        timeoutsRef.current.push(completeTimer);
        return;
      }

      const step = CRAFTING_STEPS[stepIndexRef.current];

      if (!step) {
        console.error(
          'Crafting step missing at index',
          stepIndexRef.current
        );
        clearAllTimers();
        return;
      }

      setCompletedSteps((prev) => [...prev, step.id]);

      stepIndexRef.current++;

      const delay = Math.random() * 300 + 700;

      const timer = window.setTimeout(nextStep, delay);

      timeoutsRef.current.push(timer);
    };

    const startTimer = window.setTimeout(nextStep, 800);

    timeoutsRef.current.push(startTimer);
  }, [onCraftingComplete]);

  useEffect(() => {
    startSequence();

    return () => {
      clearAllTimers();
      startedRef.current = false;
    };
  }, [startSequence]);

  return {
    craftingState,
    completedSteps,
    statusMessage: THINKING_MESSAGES[statusMessageIndex],
    isFadingOut,
  };
}