import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

const Effects = () => {
    return (
        <EffectComposer disableNormalPass multisampling={0}>
            {/* Neon Glow */}
            <Bloom
                luminanceThreshold={0.2}
                mipmapBlur
                intensity={1.5}
                radius={0.6}
            />
        </EffectComposer>
    );
};

export default Effects;
