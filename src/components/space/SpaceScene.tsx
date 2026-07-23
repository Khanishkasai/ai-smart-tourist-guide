import React, { ReactNode, useRef } from 'react';
import { Group } from 'three';
import { PerspectiveCamera } from '@react-three/drei';
import { Lighting } from './Lighting';
import { Stars } from './Stars';
import { BackgroundGlow } from './BackgroundGlow';
import { Atmosphere } from './Atmosphere';
import { useSpaceAnimation } from '../../hooks/useSpaceAnimation';
import { EnvironmentalTheme } from '../../types';

interface SpaceSceneProps {
  children?: ReactNode; // Slot for future components (e.g., Globe, Routes)
  theme?: EnvironmentalTheme;
}

export const SpaceScene: React.FC<SpaceSceneProps> = ({ children, theme = 'default' }) => {
  const rigRef = useRef<Group>(null);
  
  // Initialize the extremely slow background/camera idle animation on the Rig
  useSpaceAnimation(rigRef);

  return (
    <>
      <Atmosphere theme={theme} />
      <Lighting theme={theme} />
      <BackgroundGlow />
      <Stars />
      
      {/* The Camera Rig wrapping the default camera */}
      <group ref={rigRef}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
      </group>

      {/* Central mount point for the future interactive globe and elements */}
      <group name="globe-mount-point">
        {children}
      </group>
    </>
  );
};
