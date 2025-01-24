import React from 'react';
import Particles from '@tsparticles/react';

const ParticlesBackground = ({ className }) => {
  const particlesInit = async (engine) => {
    const { loadFull } = await import('@tsparticles/engine');
    await loadFull(engine);
  };

  const particlesLoaded = () => {
    console.log('Particles loaded');
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: 'transparent' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            directions: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className={className}
    />
  );
};

export default ParticlesBackground;