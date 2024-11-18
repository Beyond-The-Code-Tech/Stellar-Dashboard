import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="#4299e1"
        metalness={0.5}
        roughness={0.7}
        emissive="#000033"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}