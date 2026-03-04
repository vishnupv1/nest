"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function FogLayer() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[30, 20]} />
      <meshBasicMaterial
        color="#cfe8e5"
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </mesh>
  );
}

function FloatingLeaves() {
  const count = 12;
  const leaves = useMemo(() => {
    return Array.from({ length: count }, (_v, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 6 + (i % 3);
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * 3,
        scale: 0.02 + (i % 4) * 0.005,
        speed: 0.25 + (i % 5) * 0.05,
      };
    });
  }, []);

  return (
    <>
      {leaves.map((leaf, i) => (
        <Float
          key={i}
          speed={leaf.speed}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh position={[leaf.x, leaf.y, -3]} scale={leaf.scale}>
            <circleGeometry args={[1, 6]} />
            <meshBasicMaterial color="#3aa76d" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Mountains() {
  return (
    <group position={[0, -3, -5]}>
      <mesh>
        <planeGeometry args={[25, 8]} />
        <meshBasicMaterial
          color="#1b5e57"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Forest() {
  const groupRef = useRef<THREE.Group>(null);
  const trees = useMemo(
    () =>
      Array.from({ length: 30 }, (_v, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        const xBase = (col - 5) * 0.9;
        const xOffset = row % 2 === 0 ? 0.3 : -0.3;
        return {
          x: xBase + xOffset,
          z: -4 - row * 1.3,
          scale: 0.8 + (i % 3) * 0.12,
          swayOffset: ((i * 0.8) % (Math.PI * 2)) + row * 0.3,
        };
      }),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * 0.6;
    groupRef.current.children.forEach((child, index) => {
      const sway = Math.sin(t + index * 0.3) * 0.04;
      child.rotation.z = sway;
    });
  });

  return (
    <group ref={groupRef} position={[0, -2.6, -6]}>
      {trees.map((tree, index) => (
        <group key={`${tree.x}-${tree.z}-${index}`} position={[tree.x, 0, tree.z]} scale={tree.scale}>
          {/* Trunk */}
          <mesh position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 1.8, 8]} />
            <meshStandardMaterial color="#4b3621" />
          </mesh>
          {/* Lower foliage */}
          <mesh position={[0, 2.2, 0]}>
            <coneGeometry args={[0.9, 2.2, 8]} />
            <meshStandardMaterial color="#3aa76d" />
          </mesh>
          {/* Upper foliage */}
          <mesh position={[0, 3.2, 0]}>
            <coneGeometry args={[0.7, 1.6, 8]} />
            <meshStandardMaterial color="#2fa89e" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Trail() {
  return (
    <mesh position={[0, -3.15, -6]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeGeometry args={[5, 14]} />
      <meshBasicMaterial color="#c2a27a" transparent opacity={0.9} />
    </mesh>
  );
}

function Camp() {
  return (
    <group position={[0, -2.4, -4]}>
      {/* Tent base */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0.4, 0]}>
        <coneGeometry args={[0.9, 1.4, 4]} />
        <meshStandardMaterial color="#f6f0e9" />
      </mesh>
      {/* Tent accent */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 0.45, 0.02]}>
        <coneGeometry args={[0.4, 1.2, 4]} />
        <meshStandardMaterial color="#0f9d8f" />
      </mesh>
      {/* Campfire */}
      <group position={[0.9, -0.15, 0.6]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 0.1, 8]} />
          <meshStandardMaterial color="#4b3621" />
        </mesh>
        <mesh position={[0, 0.18, 0]}>
          <sphereGeometry args={[0.12, 10, 10]} />
          <meshStandardMaterial emissive="#ffb347" color="#ffdd99" />
        </mesh>
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0a3d38"]} />
      <fog attach="fog" args={["#0a3d38", 5, 25]} />
      <FogLayer />
      <Mountains />
      <Trail />
      <Camp />
      <Forest />
      <Sparkles
        count={40}
        speed={0.2}
        opacity={0.7}
        size={2.5}
        color="#cfe8e5"
        scale={[10, 5, 4]}
        position={[0, 1.2, -6]}
      />
      <FloatingLeaves />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 1.4, 8], fov: 55 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
