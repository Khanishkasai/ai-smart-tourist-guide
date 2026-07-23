import React from 'react';
import { EnvironmentalTheme } from '../../types';

interface AtmosphereProps {
  theme?: EnvironmentalTheme;
}

export const Atmosphere: React.FC<AtmosphereProps> = ({ theme = 'default' }) => {
  // Map themes to fog colors for deep space depth
  const fogColor = theme === 'tokyo' ? '#0a1930' : 
                   theme === 'paris' ? '#1c1510' : 
                   '#08090c'; // default obsidian

  return (
    <fogExp2 attach="fog" color={fogColor} density={0.015} />
  );
};
