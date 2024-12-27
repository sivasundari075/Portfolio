import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Wireframe, Edges } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef();
  const innerMeshRef = useRef();
  const outerMeshRef = useRef();

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      colorA: { value: new THREE.Color('#00ff9f') },
      colorB: { value: new THREE.Color('#00b8ff') },
      colorC: { value: new THREE.Color('#7000ff') },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 colorC;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
        vec3 color = mix(colorA, colorB, vUv.y);
        color = mix(color, colorC, sin(vUv.x * 3.141592 + time) * 0.5 + 0.5);
        float alpha = mix(0.1, 0.3, fresnel);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    innerMeshRef.current.rotation.x = time * 0.2;
    innerMeshRef.current.rotation.y = time * 0.3;
    outerMeshRef.current.rotation.x = time * 0.2;
    outerMeshRef.current.rotation.y = time * 0.3;
    material.uniforms.time.value = time;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.2}
    >
      <group>
        {/* Main shell */}
        <mesh ref={meshRef} scale={2.2}>
          <icosahedronGeometry args={[1, 1]} />
          <primitive 
            attach="material" 
            object={material} 
            transparent 
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
          <Edges
            scale={1}
            threshold={15}
            color="#ffffff"
          />
        </mesh>

        {/* Inner wireframe structure */}
        <mesh ref={innerMeshRef} scale={1.8}>
          <octahedronGeometry args={[1, 2]} />
          <meshBasicMaterial
            color="#ffffff"
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Outer wireframe structure */}
        <mesh ref={outerMeshRef} scale={2.4}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial visible={false} />
          <Wireframe
            stroke="#ffffff"
            thickness={0.015}
            fillOpacity={0}
            fillMix={0}
            squeeze
          />
        </mesh>
      </group>
    </Float>
  );
};

const HeroAnimation = () => {
  return (
    <div className="hero-animation-container w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] opacity-95 pointer-events-none mr-[-100px]">
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true 
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default HeroAnimation; 