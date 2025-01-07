import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: false, mode: 'push' },
            onHover: { enable: false, mode: 'repulse' },
            resize: true,
          },
        },
        particles: {
          color: { value: '#10B981' },
          links: {
            color: '#10B981',
            distance: 150,
            enable: true,
            opacity: 0.05,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            directions: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 20,
          },
          opacity: { value: 0.05 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;