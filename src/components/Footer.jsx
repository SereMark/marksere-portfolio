import { socialIcons } from '../utils/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-main relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary-main/5 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Mark Sere</h3>
            <p className="text-text-secondary text-sm">
              Building intelligent systems that shape tomorrow
            </p>
            <p className="text-text-muted text-xs mt-2">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/SereMark"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-primary-main/50 hover:bg-white/10 hover:shadow-glow-primary transition-all duration-300"
              aria-label="Visit GitHub profile"
            >
              <socialIcons.github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/seremark"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-primary-main/50 hover:bg-white/10 hover:shadow-glow-primary transition-all duration-300"
              aria-label="Visit LinkedIn profile"
            >
              <socialIcons.linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;