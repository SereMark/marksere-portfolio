import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Home from './pages/Home';
import GermanFlashcards from './pages/GermanFlashcards';

const App = ({ currentPage, setCurrentPage }) => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'German Flashcards', value: 'flashcards' },
  ];

  const handleNavClick = (value) => {
    setCurrentPage(value);
    setNavOpen(false);
  };

  const isActive = (value) => currentPage === value;

  return (
    <div className="font-sans min-h-screen bg-primary text-gray-100">
      <header className="bg-[#1b2735] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="text-2xl font-bold cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavClick('home')}
          >
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-colors">
              Mark Sere
            </span>
          </div>

          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 rounded transition hover:text-accent ${
                  isActive(item.value)
                    ? 'bg-accent text-[#1b2735] font-semibold'
                    : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="focus:outline-none text-white"
              aria-label="Toggle Mobile Menu"
            >
              {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden bg-[#1b2735] border-t border-gray-700">
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`w-full text-left px-3 py-2 rounded my-1 transition hover:text-accent ${
                    isActive(item.value) ? 'bg-gray-800 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {currentPage === 'home' && <Home />}
      {currentPage === 'flashcards' && <GermanFlashcards />}
    </div>
  );
};

export default App;