import React from 'react';

export const Earth: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
};
