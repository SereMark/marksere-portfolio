import React from 'react';
import WrenchIcon from './components/WrenchIcon';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 via-purple-700 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 animate-gradientBackground z-0"></div>
      
      {/* Particles Background Layer */}
      <ParticlesBackground className="absolute inset-0 z-0" />
      
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* Content Layer */}
      <div className="relative z-10 text-center p-10 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-3xl shadow-3xl backdrop-blur-lg max-w-md md:max-w-lg lg:max-w-xl w-full">
        <div className="mb-6">
          <WrenchIcon />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100">
          Under Construction
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          I'm building something amazing. Stay tuned!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="mailto:seremark056@gmail.com"
            className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-dark transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/SereMark"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
          >
            GitHub
          </a>
        </div>
        <p className="mt-12 text-sm md:text-base text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Mark Sere. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;