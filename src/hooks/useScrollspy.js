/**
 * @fileoverview Custom React hook for tracking active section during scroll
 * Highlights current section in navigation based on scroll position
 */

import { useState, useEffect } from 'react';
import { ANIMATION_CONFIG } from '../constants/config';

/**
 * Custom hook that tracks which section is currently in view
 * Updates active section based on scroll position with offset consideration
 * Uses requestAnimationFrame for performance optimization
 * @param {string[]} sections - Array of section IDs to track
 * @returns {string} Currently active section ID (lowercase)
 * @example
 * const activeSection = useScrollspy(['home', 'about', 'skills']);
 * // Returns 'about' when user scrolls to #about section
 */
export const useScrollspy = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.toLowerCase() || '');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + ANIMATION_CONFIG.scrollOffset;

          // Check each section to find which one is in view
          for (const section of sections) {
            const element = document.getElementById(section.toLowerCase());
            if (element) {
              const { offsetTop, offsetHeight } = element;
              // Section is active if scroll position is within its bounds
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section.toLowerCase());
                break;
              }
            }
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeSection;
};