import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary px-4">
      <div className="text-center animate-fadeIn">
        <div className="mb-6">
          <span className="text-8xl block animate-float">🚧</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">Under Construction</h1>
        <p className="mt-4 text-lg md:text-2xl text-secondary">
          I’m working hard to bring you something amazing. Stay tuned!
        </p>
        <p className="mt-8 text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} marksere.com. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;