import React from 'react';
import { Earth } from './Earth';
import { useGlobeReveal } from '../../hooks/useGlobeReveal';

interface GlobeRevealProps {
  onComplete?: () => void;
}

export const GlobeReveal: React.FC<GlobeRevealProps> = ({ onComplete }) => {
  // Call the hook just to trigger the scene transitions (timeline logic),
  // but we do not render any animations.
  useGlobeReveal(onComplete);

  return (
    <group position={[0, 0, 0]}>
      <Earth />
    </group>
  );
};
