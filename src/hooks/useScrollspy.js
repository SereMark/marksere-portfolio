import { useState, useEffect } from 'react';
import { ANIMATION_CONFIG } from '../constants/config';

export const useScrollspy = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.toLowerCase() || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + ANIMATION_CONFIG.scrollOffset;
      
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeSection;
};