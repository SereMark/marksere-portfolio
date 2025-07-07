import { useCallback } from 'react';
import { ANIMATION_CONFIG } from '../constants/config';

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId, offset = ANIMATION_CONFIG.scrollOffset) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);
      return false;
    }
    
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({ 
      top: targetPosition, 
      behavior: 'smooth' 
    });
    
    return true;
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollToSection, scrollToTop };
};