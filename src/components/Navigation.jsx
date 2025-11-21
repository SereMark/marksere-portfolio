import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { uiIcons } from '../utils/icons';
import { useScrollspy } from '../hooks/useScrollspy';
import { useScrollTo } from '../hooks/useScrollTo';
import { NAVIGATION_ITEMS } from '../constants/config';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollTo();
  const activeSection = useScrollspy(NAVIGATION_ITEMS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(targetId.toLowerCase());
  }, [scrollToSection]);

  return (
    <>
      {/* Desktop Navigation - Dynamic Island Style */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${scrolled
          ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-primary-main/5'
          : 'bg-black/50 backdrop-blur-md border-white/5'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <li key={item} className="list-none">
              <button
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white shadow-lg overflow-hidden transition-all duration-300 active:scale-95 hover:bg-white/10"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <uiIcons.times size={24} /> : <uiIcons.bars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex items-center justify-center lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {NAVIGATION_ITEMS.map((item, i) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`text-4xl font-display font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60' : 'text-white/30 hover:text-white'
                      }`}
                  >
                    {item}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;