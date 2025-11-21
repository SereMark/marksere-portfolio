import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Icosahedron args={[1, 1]} ref={meshRef}>
                <MeshDistortMaterial
                    color="#6d28d9"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.5}
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                />
            </Icosahedron>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#22d3ee" />
                <directionalLight position={[-10, -10, -5]} intensity={2} color="#a78bfa" />
                <AnimatedShape />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
