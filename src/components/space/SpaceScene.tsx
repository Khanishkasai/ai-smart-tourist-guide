import React, { ReactNode, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { EnvironmentalTheme } from '../../types';

interface SpaceSceneProps {
  children?: ReactNode;
  theme?: EnvironmentalTheme;
}

const DebugScene = () => {
  const { scene } = useThree();

  useEffect(() => {
    console.clear();
    console.log("========== SCENE GRAPH ==========");

    scene.traverse((obj) => {
      console.log({
        type: obj.type,
        name: obj.name,
        uuid: obj.uuid,
      });
    });

    console.log("=================================");
  }, [scene]);

  return null;
};

export const SpaceScene: React.FC<SpaceSceneProps> = ({
  children,
  theme = 'default',
}) => {
  return (
    <>
      <DebugScene />

      <ambientLight intensity={0.5} />

      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
      />

      <group name="globe-mount-point">
        {children}
      </group>
    </>
  );
};