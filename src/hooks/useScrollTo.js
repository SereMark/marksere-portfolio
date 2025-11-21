/**
 * @fileoverview Custom React hook for smooth scrolling to page sections
 * Provides programmatic control over scroll behavior with offset support
 */

import { useCallback } from 'react';
import { ANIMATION_CONFIG } from '../constants/config';

/**
 * Custom hook for scrolling to sections
 * @returns {Object} Scroll utility functions
 * @returns {Function} scrollToSection - Scrolls to a specific section by ID
 * @returns {Function} scrollToTop - Scrolls to the top of the page
 * @example
 * const { scrollToSection, scrollToTop } = useScrollTo();
 * scrollToSection('about'); // Scrolls to #about section
 * scrollToTop(); // Scrolls to page top
 */
export const useScrollTo = () => {
  /**
   * Scrolls to a specific section with smooth behavior
   * @param {string} sectionId - The ID of the target HTML element
   * @param {number} [offset=ANIMATION_CONFIG.scrollOffset] - Offset from top in pixels
   * @returns {boolean} True if scrolled successfully, false if element not found
   */
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

  /**
   * Scrolls to the top of the page
   */
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollToSection, scrollToTop };
};