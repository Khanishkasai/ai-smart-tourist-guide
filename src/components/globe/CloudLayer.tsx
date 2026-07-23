import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface CloudLayerProps {
  opacity?: number;
}

export const CloudLayer: React.FC<CloudLayerProps> = ({ opacity = 1 }) => {
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (cloudsRef.current) {
      // Clouds rotate slightly faster than Earth for parallax
      cloudsRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]} rotation={[0.2, -Math.PI / 2, 0]}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff" // fallback white layer
        transparent
        opacity={opacity * 0.1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};
