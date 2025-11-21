/**
 * @fileoverview Centralized icon exports from react-icons
 * Organizes icons by category for easy import and consistent usage across the app
 */

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaExternalLinkAlt,
  FaCalendar,
  FaBars,
  FaTimes
} from 'react-icons/fa';

import {
  SiPython,
  SiJavascript,
  SiPytorch,
  SiDotnet,
  SiReact,
  SiMysql,
  SiGit,
  SiArchlinux,
  SiNeovim,
  SiDocker
} from 'react-icons/si';

import { VscCode } from 'react-icons/vsc';

/**
 * Technology and programming language icons
 * Maps skill names to their corresponding icon components
 * @type {Object.<string, React.ComponentType>}
 */
export const skillIcons = {
  Python: SiPython,
  'C#': SiDotnet,
  JavaScript: SiJavascript,
  PyTorch: SiPytorch,
  '.NET': SiDotnet,
  React: SiReact,
  'SQL Server': SiMysql,
  Git: SiGit
};

/**
 * Development environment tool icons
 * @type {Object.<string, React.ComponentType>}
 */
export const envIcons = {
  'Arch Linux': SiArchlinux,
  'Neovim': SiNeovim,
  'VS Code': VscCode,
  'Docker': SiDocker
};

/**
 * Social media and contact platform icons
 * @type {Object.<string, React.ComponentType>}
 */
export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope
};

/**
 * General UI icons for navigation and actions
 * @type {Object.<string, React.ComponentType>}
 */
export const uiIcons = {
  arrowUp: FaArrowUp,
  externalLink: FaExternalLinkAlt,
  calendar: FaCalendar,
  bars: FaBars,
  times: FaTimes
};