import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';

const AnimatedGlowCube = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const orbRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Isometric-like tilt, rotate slowly on Y, gentle float
      groupRef.current.rotation.x = 0.5 + Math.sin(t * 0.3) * 0.05;
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.15;
    }
    
    if (orbRef.current) {
      // Orb pulsing (breathing cycle)
      const pulse = Math.sin(t * 3);
      const s = 0.9 + pulse * 0.05;
      orbRef.current.scale.set(s, s, s);
      
      // Update emissive intensity for energy flicker
      if (orbRef.current.material) {
        orbRef.current.material.emissiveIntensity = 3 + pulse * 1.0;
      }
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Inner Glowing Orb (#ffe000 to #aaff00 gradient feel) */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#ffe000"
          emissive="#aaff00"
          emissiveIntensity={3}
          roughness={0.2}
          toneMapped={false}
        />
      </mesh>

      {/* Internal point light to bleed through the cube faces */}
      <pointLight color="#aaff00" intensity={8} distance={6} />

      {/* Outer Glassy Cube */}
      <mesh>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshPhysicalMaterial
          color="#00ff50"
          transparent={true}
          opacity={0.15}
          roughness={0.1}
          metalness={0.2}
          transmission={1.0}
          thickness={1.5}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        {/* Neon green edges */}
        <Edges
          linewidth={2}
          threshold={15}
          color="#00ff44"
        />
      </mesh>
    </group>
  );
};

export default AnimatedGlowCube;
