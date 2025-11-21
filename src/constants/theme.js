/**
 * @fileoverview Design system theme constants
 * Defines color palettes, spacing, and animation values
 * Note: Primary theme configuration is in tailwind.config.js
 * These constants provide programmatic access where Tailwind classes can't be used
 */

/**
 * Color palette (fallback for non-Tailwind contexts)
 * Primary theme colors are defined in tailwind.config.js
 * @type {Object}
 * @deprecated Use Tailwind CSS classes where possible
 */
export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

/**
 * Spacing scale (fallback for non-Tailwind contexts)
 * @type {Object}
 * @deprecated Use Tailwind spacing classes where possible
 */
export const SPACING = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
};

/**
 * Animation timing constants for programmatic animations
 * For Framer Motion animations, use variants from utils/animations.js
 * @type {Object}
 */
export const ANIMATIONS = {
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    /** Smooth easeInOut cubic bezier */
    easeInOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    /** Professional easeOut cubic bezier */
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};