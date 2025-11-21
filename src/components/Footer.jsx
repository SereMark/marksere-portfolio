import { socialIcons } from '../utils/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-main relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold font-display text-white mb-2">
              Mark Sere
            </h2>
            <p className="text-sm text-text-muted">
              Engineering the Future.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/SereMark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Visit GitHub profile"
            >
              <socialIcons.github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/seremark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <socialIcons.linkedin size={20} />
            </a>
            <a
              href="mailto:seremark056@gmail.com"
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <socialIcons.email size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted font-mono">
          <p>
            &copy; {currentYear} Mark Sere. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Designed & Built with <span className="text-primary-main">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;