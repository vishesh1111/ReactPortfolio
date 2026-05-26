import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Environment } from '@react-three/drei';

const ModalHeroCube = () => {
  const meshRef = useRef();
  const innerLightRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004; // slow dignified spin
      meshRef.current.rotation.x = 0.05;   // slight tilt, static
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.07; // float
    }

    if (innerLightRef.current) {
      innerLightRef.current.intensity = 6 + Math.sin(t * 1.4) * 1.2; // breathing
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.2, 1.9, 2.2]} />
      <meshPhysicalMaterial
        color="#3e4a3c"
        transmission={0.75}
        thickness={2.0}
        roughness={0.04}
        metalness={0.15}
        ior={1.5}
        reflectivity={0.5}
        transparent={true}
        opacity={0.90}
        envMapIntensity={1.2}
      />
      {/* Green inner core */}
      <pointLight ref={innerLightRef} position={[0, -0.3, 0]} color="#7fee64" intensity={6} distance={4} />
      {/* Top blowout */}
      <pointLight position={[0, 0.9, 0]} color="#ffffff" intensity={5} distance={3} />
      {/* Warm yellow center */}
      <pointLight position={[0, 0, 0]} color="#ffe000" intensity={3} distance={2} />
    </mesh>
  );
};

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(5);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(true);

  // Countdown using setInterval
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fade out when countdown hits 0
  useEffect(() => {
    if (count === 0) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 700ms ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <Canvas 
          dpr={[1, 2]} 
          gl={{ antialias: true, alpha: false }}
          camera={{ position: [0, 1.2, 5], fov: 42 }}
        >
          <ambientLight intensity={0.08} />
          
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ModalHeroCube />
            <EffectComposer disableNormalPass>
              <Bloom
                luminanceThreshold={0.15}
                intensity={2.0}
                radius={0.9}
                mipmapBlur
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          fontFamily: '"Inter Variable", "Inter", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: '64px',
          color: '#ddffdc',
          letterSpacing: '-0.96px',
          zIndex: 2,
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default LoadingScreen;
