import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { uiIcons } from '../utils/icons';
import { useScrollspy } from '../hooks/useScrollspy';
import { useScrollTo } from '../hooks/useScrollTo';
import { NAVIGATION_ITEMS } from '../constants/config';
import Magnetic from './common/Magnetic';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollTo();
  const activeSection = useScrollspy(NAVIGATION_ITEMS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(targetId.toLowerCase());
  }, [scrollToSection]);

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 px-2 py-2 rounded-full border transition-all duration-500 ${scrolled
            ? 'glass-panel border-white/10 shadow-lg shadow-primary-main/10'
            : 'bg-transparent border-transparent backdrop-blur-none'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <Magnetic key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 group block overflow-hidden"
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary-main/20 border border-primary-main/30 rounded-full shadow-glow-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-secondary group-hover:text-white'
                    }`}
                >
                  {item}
                </span>

                {/* Hover Glow Effect */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </a>
            </Magnetic>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <Magnetic>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-4 rounded-full glass-panel text-white shadow-lg overflow-hidden group border border-white/10"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <div className="absolute inset-0 bg-primary-main/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-smooth" />
            <div className="relative z-10">
              {isOpen ? <uiIcons.times size={24} /> : <uiIcons.bars size={24} />}
            </div>
          </button>
        </Magnetic>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg-main/95 backdrop-blur-xl flex items-center justify-center lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-main/20 rounded-full blur-[120px] animate-pulse-slow" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-main/20 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <nav className="flex flex-col items-center gap-8 relative z-10" aria-label="Mobile navigation">
              {NAVIGATION_ITEMS.map((item, i) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    initial={{ opacity: 0, y: 40, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`text-5xl font-display font-bold tracking-tighter transition-all duration-300 hover:scale-110 ${isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main'
                        : 'text-white/30 hover:text-white'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
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