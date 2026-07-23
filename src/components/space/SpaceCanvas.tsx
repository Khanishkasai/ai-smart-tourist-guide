import React, { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SpaceScene } from './SpaceScene';
import { EnvironmentalTheme } from '../../types';

interface SpaceCanvasProps {
  children?: ReactNode; // Slot for future components (e.g., Globe)
  theme?: EnvironmentalTheme;
}

export const SpaceCanvas: React.FC<SpaceCanvasProps> = ({ children, theme = 'default' }) => {
  return (
    <div className="fixed inset-0 z-0 bg-[#08090C] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        dpr={[1, 2]} // Optimize for retina displays
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={['#08090C']} />
        <Suspense fallback={null}>
          <SpaceScene theme={theme}>
            {children}
          </SpaceScene>
        </Suspense>
      </Canvas>
    </div>
  );
};
