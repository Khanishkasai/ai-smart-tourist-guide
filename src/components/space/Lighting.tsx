import React from 'react';
import { EnvironmentalTheme } from '../../types';

interface LightingProps {
  theme?: EnvironmentalTheme;
}

export const Lighting: React.FC<LightingProps> = ({ theme = 'default' }) => {
  // Map themes to volumetric light colors
  const mainColor = theme === 'tokyo' ? '#3b82f6' : 
                    theme === 'paris' ? '#f59e0b' : 
                    '#60a5fa'; // default
                    
  const fillColor = theme === 'tokyo' ? '#1e3a8a' : 
                    theme === 'paris' ? '#9a3412' : 
                    '#1e3a8a'; // default

  return (
    <>
      {/* Soft dark ambient lighting */}
      <ambientLight intensity={0.2} color="#0a192f" />
      
      {/* Primary rim light for subtle volumetric feel */}
      <directionalLight 
        position={[5, 3, 5]} 
        intensity={0.4} 
        color={mainColor} 
      />
      
      {/* Subtle fill light */}
      <directionalLight 
        position={[-5, -3, -5]} 
        intensity={0.15} 
        color={fillColor} 
      />
    </>
  );
};
