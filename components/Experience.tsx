'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function useWaffleTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = '#c88c4b';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = 'rgba(94, 48, 19, 0.34)';
    ctx.lineWidth = 8;
    for (let i = -512; i < 1024; i += 62) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 512, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i, 512); ctx.lineTo(i + 512, 0); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255, 222, 164, 0.24)';
    ctx.lineWidth = 3;
    for (let i = -512; i < 1024; i += 62) {
      ctx.beginPath(); ctx.moveTo(i + 8, 0); ctx.lineTo(i + 520, 512); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i + 8, 512); ctx.lineTo(i + 520, 0); ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.repeat.set(1.35, 1.15);
    texture.anisotropy = 8;
    return texture;
  }, []);
}

function EdibleCup() {
  const group = useRef<THREE.Group>(null!);
  const waffle = useWaffleTexture();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.22 + 0.18;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45) * 0.035 - 0.08;
  });
  return (
    <Float speed={1.05} rotationIntensity={0.08} floatIntensity={0.18}>
      <group ref={group} rotation={[0.02, 0.2, -0.08]}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.56, 0.77, 1.48, 64, 10, true]} />
          <meshStandardMaterial map={waffle ?? undefined} color="#d4a064" roughness={0.82} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, -0.72, 0]} castShadow>
          <cylinderGeometry args={[0.76, 0.76, 0.09, 64]} />
          <meshStandardMaterial color="#a96c37" roughness={0.92} />
        </mesh>
        <mesh position={[0, 0.75, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.56, 0.075, 16, 64]} />
          <meshStandardMaterial color="#4a2719" roughness={0.42} />
        </mesh>
        <mesh position={[0, 0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.53, 64]} />
          <meshStandardMaterial color="#3c251c" roughness={0.28} />
        </mesh>
        <mesh position={[0, 0.69, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.45, 0.018, 8, 64]} />
          <meshStandardMaterial color="#d3a16b" roughness={0.45} />
        </mesh>
        <mesh position={[0.72, 0.92, -0.1]} rotation={[0.2, 0.45, 0.35]}>
          <boxGeometry args={[0.25, 0.22, 0.12]} />
          <meshStandardMaterial color="#4b281c" roughness={0.35} />
        </mesh>
        <mesh position={[-0.68, -0.2, 0.15]} rotation={[0.5, 0.1, 0.3]}>
          <boxGeometry args={[0.16, 0.15, 0.14]} />
          <meshStandardMaterial color="#e7c38e" roughness={0.72} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 5, 4]} intensity={2.6} castShadow />
      <pointLight position={[-3, 1, 2]} color="#d7a04f" intensity={16} distance={8} />
      <pointLight position={[2, -1, -3]} color="#f4d9a5" intensity={8} distance={8} />
      <EdibleCup />
      <ContactShadows position={[0, -1.35, 0]} opacity={0.32} scale={4.5} blur={2.6} far={3} />
      <Environment preset="studio" />
    </>
  );
}

export default function Experience() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0.15, 4.4], fov: 38 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  );
}
