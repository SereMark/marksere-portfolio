/**
 * @fileoverview Application-wide configuration constants
 * Central location for app metadata, navigation, and behavior settings
 */

/**
 * Core application configuration
 * @type {Object}
 * @property {string} name - Application name
 * @property {string} description - Short app description
 * @property {string} email - Primary contact email
 * @property {Object} social - Social media links
 */
export const APP_CONFIG = {
  name: 'Mark Sere Portfolio',
  description: 'Computer Science Student • AI & Full-Stack Developer',
  email: 'seremark056@gmail.com',
  social: {
    github: 'https://github.com/SereMark',
    linkedin: 'https://linkedin.com/in/seremark',
  },
};

/**
 * Main navigation menu items
 * Order determines display order in navigation
 * @type {string[]}
 */
export const NAVIGATION_ITEMS = [
  'Home',
  'About',
  'Environment',
  'Skills',
  'Experience',
  'Portfolio',
  'Blog',
  'Contact'
];

/**
 * Animation and timing configuration
 * @type {Object}
 * @property {number} loadingDuration - Loading screen duration in ms
 * @property {number} scrollOffset - Offset for scroll-to-section in pixels
 * @property {number} staggerDelay - Delay between staggered animations in seconds
 * @property {number} menuCloseDelay - Delay before closing mobile menu in ms
 */
export const ANIMATION_CONFIG = {
  loadingDuration: 600,
  scrollOffset: 80,
  staggerDelay: 0.1,
  menuCloseDelay: 100,
};