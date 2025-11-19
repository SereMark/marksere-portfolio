import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { PERSONAL_INFO } from '../data/portfolio';
import Magnetic from './common/Magnetic';
import ScrambleText from './common/ScrambleText';

const Hero = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-main/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-main/20 rounded-full blur-[150px] animate-pulse-slow mix-blend-screen"
        style={{ animationDelay: '2s' }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Name */}
          <h1 className="text-7xl md:text-8xl lg:text-hero font-bold font-display mb-6 tracking-tighter leading-[0.85] select-none">
            <span className="block text-white drop-shadow-2xl">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-main via-accent-cyan to-secondary-main pb-4 animate-glow-soft">
              {PERSONAL_INFO.name.split(' ')[1]}
            </span>
          </h1>

          {/* Scramble Title */}
          <div className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-12 font-mono h-8 flex justify-center items-center gap-4">
            <span className="text-primary-main" aria-hidden="true">{'>'}</span>
            <ScrambleText text={PERSONAL_INFO.title} delay={500} />
            <span className="animate-pulse text-primary-main" aria-hidden="true">_</span>
          </div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-10 py-4 bg-white text-bg-main font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-primary-lg min-w-[200px]"
                aria-label="View my portfolio projects"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-main to-secondary-main translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-smooth" />
                <span className="relative group-hover:text-white transition-colors z-10 font-display tracking-wide">
                  View Projects
                </span>
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-10 py-4 bg-transparent border-2 border-white/10 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/5 hover:border-primary-main/50 hover:shadow-glow-primary min-w-[200px]"
                aria-label="Get in contact with me"
              >
                <span className="relative group-hover:text-primary-light transition-colors font-display tracking-wide">
                  Initialize Contact
                </span>
              </button>
            </Magnetic>
          </motion.div>

          {/* Tech Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 text-text-muted text-sm md:text-base font-light tracking-wide"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;