import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { uiIcons } from '../utils/icons';
import { navAnimation, menuAnimation, slideIn } from '../utils/animations';
import { useScrollspy } from '../hooks/useScrollspy';
import { useScrollTo } from '../hooks/useScrollTo';
import { NAVIGATION_ITEMS, ANIMATION_CONFIG } from '../constants/config';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const { scrollToSection } = useScrollTo();
  const activeSection = useScrollspy(NAVIGATION_ITEMS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const success = scrollToSection(targetId.toLowerCase());
      if (!success) {
        console.warn(`Failed to scroll to section: ${targetId}`);
      }
    }, ANIMATION_CONFIG.menuCloseDelay);
  };

  return (
    <motion.nav
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-backdrop shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
              aria-label="Go to homepage"
            >
              Mark Sere
            </a>
          </motion.div>

          <div className="hidden lg:flex space-x-8" role="menubar">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`nav-link ${
                  activeSection === item.toLowerCase() ? 'nav-link--active' : ''
                }`}
                role="menuitem"
                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden touch-target text-gray-700 hover:text-blue-600 p-2 z-50 relative focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <uiIcons.times size={20} /> : <uiIcons.bars size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuAnimation}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  variants={slideIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * ANIMATION_CONFIG.staggerDelay }}
                  className={`block py-3 px-2 rounded-lg transition-all duration-200 font-medium touch-target ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 font-semibold bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;