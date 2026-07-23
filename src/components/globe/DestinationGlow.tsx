import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DestinationGlowProps {
  opacity?: number;
}

export const DestinationGlow: React.FC<DestinationGlowProps> = ({ opacity = 0 }) => {
  const markerRef = useRef<THREE.Mesh>(null);
  
  // Example Lat/Lon placeholder mapped to 3D space.
  // Using Paris approx position on our mapped sphere
  
  useFrame(({ clock }) => {
    if (markerRef.current) {
      // Pulse scale and opacity based on time
      const pulse = (Math.sin(clock.getElapsedTime() * 3) + 1) / 2; // 0 to 1
      markerRef.current.scale.setScalar(1 + pulse * 0.5);
      (markerRef.current.material as THREE.MeshBasicMaterial).opacity = opacity * (0.4 + pulse * 0.6);
    }
  });

  return (
    // Hardcoded placeholder position for "Paris" on the globe
    <mesh ref={markerRef} position={[3.2, 3.1, 2.1]} lookAt={() => new THREE.Vector3(0, 0, 0)}>
      <circleGeometry args={[0.08, 32]} />
      <meshBasicMaterial 
        color="#60a5fa" 
        transparent 
        opacity={opacity} 
        blending={THREE.AdditiveBlending}
        depthTest={false}
      />
    </mesh>
  );
};
