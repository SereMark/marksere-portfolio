import { socialIcons } from '../utils/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-bg-secondary/20 backdrop-blur-sm" />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-sm font-mono tracking-wide">
            © {currentYear} Mark Sere. Crafted with <span className="text-primary-400 font-bold">React</span> & <span className="text-secondary-400 font-bold">Three.js</span>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-300">
              <socialIcons.github size={20} />
            </a>
            <a href="https://linkedin.com/in/seremark" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-300">
              <socialIcons.linkedin size={20} />
            </a>
            <a href="mailto:seremark056@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110 duration-300">
              <socialIcons.email size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;