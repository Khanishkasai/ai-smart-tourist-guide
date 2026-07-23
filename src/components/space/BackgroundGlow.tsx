import React from 'react';

export const BackgroundGlow: React.FC = () => {
  // Previously contained a solid scaled sphere that caused z-fighting with Stars.
  // The combination of <color attach="background"> and <fogExp2> handles the deep space
  // background cleanly without extra geometry draw calls.
  // In the future, a volumetric radial gradient shader can be mounted here if needed.
  return null;
};
