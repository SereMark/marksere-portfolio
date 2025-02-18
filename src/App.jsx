import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Home from './pages/Home'
import GermanGrammar from './pages/GermanGrammar'

const App = ({ currentPage, setCurrentPage }) => {
  const [navOpen, setNavOpen] = useState(false)
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'German Grammar', value: 'grammar' }
  ]
  const handleNav = v => { setCurrentPage(v); setNavOpen(false) }
  const active = v => currentPage === v
  return (
    <div className="min-h-screen bg-primary text-gray-100">
      <header className="bg-[#1b2735] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div onClick={() => handleNav('home')} className="text-2xl font-bold cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-yellow-500 transition-colors">Mark Sere</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            {navItems.map(item => (
              <button key={item.value} onClick={() => handleNav(item.value)} className={`px-3 py-2 rounded transition hover:text-accent ${active(item.value) ? 'bg-accent text-[#1b2735] font-semibold' : ''}`}>
                {item.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden focus:outline-none text-white" aria-label="Toggle Menu">
            {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
        {navOpen &&
          <nav className="md:hidden bg-[#1b2735] border-t border-gray-700">
            {navItems.map(item => (
              <button key={item.value} onClick={() => handleNav(item.value)} className={`w-full text-left px-3 py-2 rounded my-1 transition hover:text-accent ${active(item.value) ? 'bg-gray-800 font-semibold' : ''}`}>
                {item.label}
              </button>
            ))}
          </nav>
        }
      </header>
      {currentPage === 'home' ? <Home /> : <GermanGrammar />}
    </div>
  )
}

export default App