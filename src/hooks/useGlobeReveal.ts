import { useState, useEffect } from 'react';

export type GlobeRevealPhase = 
  | 'initializing'
  | 'rising'
  | 'atmosphere'
  | 'lines-and-destination'
  | 'text-reveal'
  | 'complete';

export function useGlobeReveal(onComplete?: () => void) {
  const [phase, setPhase] = useState<GlobeRevealPhase>('initializing');

  useEffect(() => {
    // Sequence 1 & 2: Pause for 800ms while crafting card fades/moves up
    const t1 = setTimeout(() => {
      // Sequence 3, 4, 5, 6: Earth slowly rises
      setPhase('rising');
    }, 800);

    // Sequence 8: Fade in atmospheric layer around Earth
    const t2 = setTimeout(() => {
      setPhase('atmosphere');
    }, 4000);

    // Sequence 9 & 10: Latitude lines and destination pulse
    const t3 = setTimeout(() => {
      setPhase('lines-and-destination');
    }, 5500);

    // Sequence 11: Display "Let's begin."
    const t4 = setTimeout(() => {
      setPhase('text-reveal');
    }, 7000);

    // Sequence 12: Expose onGlobeRevealComplete
    const t5 = setTimeout(() => {
      setPhase('complete');
      if (onComplete) onComplete();
    }, 9000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return { phase };
}
