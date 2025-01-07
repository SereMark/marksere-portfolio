import React from 'react';
import WrenchIcon from './components/WrenchIcon';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-backgroundGradientStart via-secondary to-backgroundGradientEnd dark:from-background-dark to-background-dark animate-gradientBackground px-4 overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 text-center animate-fadeIn p-8 bg-gray-900 bg-opacity-80 dark:bg-gray-800 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-md">
        <div className="mb-6">
          <WrenchIcon />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">Under Construction</h1>
        <p className="mt-4 text-lg md:text-xl text-text-secondary">
          Stay tuned for updates!
        </p>
        <p className="mt-8 text-sm md:text-base text-text-secondary">
          &copy; {new Date().getFullYear()} Mark Sere. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;