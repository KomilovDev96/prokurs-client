'use client';

import {PointMaterial, Points} from '@react-three/drei';
import {Canvas, useFrame} from '@react-three/fiber';
import {useEffect, useMemo, useRef, useState} from 'react';
import type {Group} from 'three';
import {MathUtils} from 'three';

interface FloatingObjectsProps {
  reducedMotion: boolean;
  pointer: {x: number; y: number};
}

function FloatingObjects({reducedMotion, pointer}: FloatingObjectsProps) {
  const groupRef = useRef<Group>(null);
  const orbitRef = useRef<Group>(null);

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(960);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 9;
      positions[i + 1] = (Math.random() - 0.5) * 5;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }

    return positions;
  }, []);

  useFrame(({clock}) => {
    if (!groupRef.current || !orbitRef.current) {
      return;
    }

    const time = clock.elapsedTime;
    const targetX = reducedMotion
      ? Math.sin(time * 0.2) * 0.04
      : Math.sin(time * 0.35) * 0.08 + pointer.y * 0.12;
    const targetY = reducedMotion ? time * 0.08 : time * 0.08 + pointer.x * 0.24;
    const targetPosX = reducedMotion ? 0 : pointer.x * 0.12;
    const targetPosY = Math.sin(time * 0.6) * 0.08 + (reducedMotion ? 0 : pointer.y * 0.08);

    groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.06);
    groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.06);
    groupRef.current.position.x = MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.06);
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.06);

    orbitRef.current.rotation.x = time * 0.3;
    orbitRef.current.rotation.y = time * 0.42;
  });

  return (
    <>
      <ambientLight intensity={0.22} />
      <pointLight
        position={[3.2, 2.2, 2]}
        intensity={38}
        color="#3B82F6"
        distance={10}
      />
      <pointLight
        position={[-3.2, -2.2, -2]}
        intensity={18}
        color="#1D4ED8"
        distance={10}
      />

      <group ref={groupRef}>
        <mesh position={[-1.35, 0.5, -0.9]} rotation={[0.45, 0.2, 0.1]}>
          <icosahedronGeometry args={[0.66, 1]} />
          <meshStandardMaterial
            color="#2563EB"
            wireframe
            emissive="#1D4ED8"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[1.42, -0.32, -1.2]} rotation={[0.25, 0.85, 0.35]}>
          <torusGeometry args={[0.48, 0.1, 18, 58]} />
          <meshStandardMaterial
            color="#60A5FA"
            roughness={0.2}
            metalness={0.75}
            emissive="#1E40AF"
            emissiveIntensity={0.28}
          />
        </mesh>

        <mesh position={[-0.14, 0.7, -1.7]} rotation={[0.2, 0.35, 0.6]}>
          <octahedronGeometry args={[0.46, 0]} />
          <meshStandardMaterial
            color="#38BDF8"
            roughness={0.3}
            metalness={0.6}
            emissive="#2563EB"
            emissiveIntensity={0.22}
          />
        </mesh>

        <mesh position={[0.4, 0.1, -1.55]}>
          <sphereGeometry args={[0.26, 20, 20]} />
          <meshStandardMaterial
            color="#93C5FD"
            roughness={0.12}
            metalness={0.8}
            emissive="#1D4ED8"
            emissiveIntensity={0.18}
          />
        </mesh>

        <group ref={orbitRef} position={[0.42, -0.18, -1.45]}>
          <mesh position={[0.68, 0, 0]}>
            <torusGeometry args={[0.18, 0.04, 16, 40]} />
            <meshStandardMaterial
              color="#60A5FA"
              roughness={0.25}
              metalness={0.7}
              emissive="#1D4ED8"
              emissiveIntensity={0.16}
            />
          </mesh>
        </group>
      </group>

      <Points positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#60A5FA"
          size={0.02}
          sizeAttenuation
          opacity={0.58}
          depthWrite={false}
        />
      </Points>
    </>
  );
}

export default function AnimatedTechBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pointerRef = useRef({x: 0, y: 0});

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    setReducedMotion(media.matches);
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      pointerRef.current.x = MathUtils.clamp(x * 2, -1, 1);
      pointerRef.current.y = MathUtils.clamp(-y * 2, -1, 1);
    };

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <div className="pk-tech-bg" aria-hidden>
      <Canvas
        className="pk-tech-bg-canvas"
        dpr={isMobile ? [1, 1.2] : [1, 1.6]}
        camera={{position: [0, 0, 4.3], fov: 46}}
        gl={{alpha: true, antialias: true, powerPreference: 'high-performance'}}
      >
        <FloatingObjects reducedMotion={reducedMotion} pointer={pointerRef.current} />
      </Canvas>
      <div className="pk-tech-vignette" />
    </div>
  );
}
