import { useFrame } from '@react-three/fiber';
import { MutableRefObject } from 'react';
import { Group } from 'three';

export function useSpaceAnimation(rigRef: MutableRefObject<Group | null>) {
  useFrame(({ clock }) => {
    if (!rigRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    
    // Apply subtle idle floating motion to the Rig Group, leaving the camera pure
    rigRef.current.position.y = Math.sin(elapsedTime * 0.1) * 0.1;
    rigRef.current.position.x = Math.cos(elapsedTime * 0.05) * 0.05;
    rigRef.current.rotation.z = Math.sin(elapsedTime * 0.02) * 0.01;
  });
}
