import React, { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

interface GlobeCanvasProps {
  children?: ReactNode;
}

export const GlobeCanvas: React.FC<GlobeCanvasProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#08090C]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        
        {children}
      </Canvas>
    </div>
  );
};
