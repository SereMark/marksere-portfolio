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

export const envIcons = {
  'Arch Linux': SiArchlinux,
  'Neovim': SiNeovim,
  'VS Code': VscCode,
  'Docker': SiDocker
};

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope
};

export const uiIcons = {
  arrowUp: FaArrowUp,
  externalLink: FaExternalLinkAlt,
  calendar: FaCalendar,
  bars: FaBars,
  times: FaTimes
};