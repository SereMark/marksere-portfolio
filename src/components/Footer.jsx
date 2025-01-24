import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      data-scroll-section
      className="relative bg-[#0e1622] text-gray-300 py-10"
    >
      {/* Shape divider at the top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 
        overflow-hidden leading-[0] z-10 rotate-180"
      >
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.6C181.25,86.43,69.08,116,0,133.33H1200V0C1129.95,54.85,
               995.44,105.35,814,54.14C662.83,12.69,497.38,33.6,
               321.39,56.6Z"
            className="fill-current text-[#0e1622]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        {/* Left content */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white">Mark Sere</h2>
          <p className="text-gray-400 text-sm">AI Engineer · Robotics · Full-Stack</p>
        </div>

        {/* Right content - Social / Links */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6">
          <a
            href="mailto:seremark056@gmail.com"
            className="hover:text-accent transition"
          >
            Email
          </a>
          <a
            href="https://github.com/SereMark"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/seremark/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Social icons */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex justify-center space-x-6">
        <a
          href="mailto:seremark056@gmail.com"
          className="hover:text-accent transition text-2xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/SereMark"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/seremark/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Mark Sere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;