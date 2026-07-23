import React from 'react';
import { Stars as DreiStars, Sparkles } from '@react-three/drei';

export const Stars: React.FC = () => {
  return (
    <group>
      {/* Background Starfield */}
      <DreiStars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={3} 
        saturation={0} 
        fade 
        speed={0.5} 
      />
      
      {/* Foreground subtle floating particles */}
      <Sparkles 
        count={150} 
        scale={20} 
        size={1.5} 
        speed={0.2} 
        opacity={0.15} 
        color="#8ab4f8" 
        noise={0.1}
      />
    </group>
  );
};
