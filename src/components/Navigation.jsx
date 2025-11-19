import { useState, useEffect } from 'react';
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(targetId.toLowerCase());
  };

  return (
    <>
      {/* Desktop Floating Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${scrolled
            ? 'bg-bg-secondary/80 border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-transparent backdrop-blur-none'
          }`}
      >
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 group"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary-500/10 border border-primary-500/30 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-primary-400' : 'text-gray-400 group-hover:text-white'
                }`}>
                {item}
              </span>

              {/* Hover Glow */}
              {!isActive && (
                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </a>
          );
        })}
      </motion.nav>

      {/* Mobile Nav Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 rounded-full bg-bg-secondary/80 backdrop-blur-md border border-white/10 text-white shadow-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative z-10">
            {isOpen ? <uiIcons.times size={24} /> : <uiIcons.bars size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg-main/95 backdrop-blur-xl flex items-center justify-center lg:hidden"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col items-center gap-8 relative z-10">
              {NAVIGATION_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-4xl font-display font-bold tracking-tight transition-colors duration-300 ${activeSection === item.toLowerCase()
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400'
                      : 'text-white/50 hover:text-white'
                    }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;