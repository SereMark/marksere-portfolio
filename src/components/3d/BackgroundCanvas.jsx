import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import StarField from './StarField';

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-bg-main">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{ antialias: true, alpha: false }}
                dpr={[1, 2]} // Handle high DPI screens
            >
                <Suspense fallback={null}>
                    <StarField />
                </Suspense>
            </Canvas>
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-main/50 to-bg-main opacity-60 pointer-events-none" />
        </div>
    );
};

export default BackgroundCanvas;
