'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
function Orb({ position, scale, color }: {position:[number,number,number],scale:number,color:string}) {
 const ref=useRef<THREE.Mesh>(null!);
 useFrame((state)=>{ if(ref.current){ ref.current.rotation.x += 0.002; ref.current.rotation.y += 0.003; ref.current.position.y=position[1]+Math.sin(state.clock.elapsedTime*.7+position[0])*0.12; }});
 return <Float speed={1.2} rotationIntensity={.5} floatIntensity={.8}><mesh ref={ref} position={position} scale={scale}><icosahedronGeometry args={[1,3]}/><MeshTransmissionMaterial color={color} roughness={.18} thickness={.8} transmission={.35} ior={1.25} chromaticAberration={.08} /></mesh></Float>
}
function Scene(){return <><ambientLight intensity={1.4}/><directionalLight position={[4,5,5]} intensity={3}/><pointLight position={[-4,-2,2]} color="#d58c65" intensity={30}/><Orb position={[-1.1,.1,0]} scale={.72} color="#8b2d32"/><Orb position={[.95,-.45,-.5]} scale={.42} color="#e4b48d"/><Orb position={[1.35,1.05,-1]} scale={.22} color="#f1d9b9"/><ContactShadows position={[0,-1.7,0]} opacity={.25} scale={5} blur={2}/><Environment preset="studio"/></>}
export default function Experience(){return <div className="scene"><Canvas camera={{position:[0,0,4.2],fov:42}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><Suspense fallback={null}><Scene/></Suspense></Canvas></div>}
