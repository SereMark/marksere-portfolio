import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const WarpStars = (props) => {
    const ref = useRef();
    const [sphere] = useMemo(() => {
        // Reduced count for performance, ensure divisible by 3 (stride)
        const positions = random.inSphere(new Float32Array(6000), { radius: 1.2 });
        return [positions];
    }, []);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-bg-main">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
                dpr={[1, 1.5]} // Cap DPR to 1.5 to save GPU on high-res screens
            >
                <Suspense fallback={null}>
                    <WarpStars />
                </Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90 pointer-events-none" />
        </div>
    );
};

export default BackgroundCanvas;
