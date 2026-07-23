import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AtmosphereProps {
  opacity?: number;
}

export const Atmosphere: React.FC<AtmosphereProps> = ({ opacity = 0 }) => {
  const atmosRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (atmosRef.current) {
      // Idle rotation to keep it dynamic if textured, but here it's just a glow
      atmosRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={atmosRef} scale={[1.05, 1.05, 1.05]}>
      <sphereGeometry args={[5, 64, 64]} />
      {/* Simple outer glow trick using BackSide and AdditiveBlending */}
      <meshBasicMaterial
        color="#3b82f6"
        transparent
        opacity={opacity * 0.15}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};
