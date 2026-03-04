"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 12,
        scale: 0.02 + Math.random() * 0.03,
        speed: 0.2 + Math.random() * 0.3,
      });
    }
    return temp;
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

function Scene() {
  return (
    <>
      <color attach="background" args={["#0a3d38"]} />
      <fog attach="fog" args={["#0a3d38", 5, 25]} />
      <FogLayer />
      <Mountains />
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
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
