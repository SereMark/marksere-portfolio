import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props) => {
    const ref = useRef();
    // Reduced count for better performance, adjusted radius
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }));

    useFrame((state, delta) => {
        // Smoother, slower rotation
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
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
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

export default StarField;
