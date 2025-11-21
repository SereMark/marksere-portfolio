import { motion } from 'framer-motion';
import { useScrollTo } from '../../hooks/useScrollTo';
import { PERSONAL_INFO } from '../../data/portfolio';
import Magnetic from '../common/Magnetic';
import ScrambleText from '../common/ScrambleText';

const Hero = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-bg-main"
    >
      {/* Subtle Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary-main/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-secondary-main/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 hover:bg-white/10 transition-colors duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
            </span>
            <span className="text-sm font-medium text-white/80 tracking-wide">Available for new projects</span>
          </motion.div>

          {/* Main Heading - Big Type */}
          <h1 className="font-display font-bold tracking-tighter leading-[0.9] mb-8 select-none">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,12vw,10rem)] text-white mix-blend-difference"
              >
                {PERSONAL_INFO.name.split(' ')[0]}
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,12vw,10rem)] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40"
              >
                {PERSONAL_INFO.name.split(' ')[1]}
              </motion.div>
            </div>
          </h1>

          {/* Subtitle / Scramble */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center items-center gap-4 mb-16"
          >
            <span className="h-px w-12 bg-white/20 hidden sm:block" />
            <div className="text-xl md:text-2xl text-text-secondary font-light tracking-wide flex items-center gap-3">
              <span className="text-primary-main font-mono">{'//'}</span>
              <ScrambleText text={PERSONAL_INFO.title} delay={1000} />
            </div>
            <span className="h-px w-12 bg-white/20 hidden sm:block" />
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95"
                aria-label="View my portfolio projects"
              >
                <span className="relative z-10">EXPLORE WORK</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium tracking-wide hover:bg-white/5 transition-all hover:border-white/40 active:scale-95"
                aria-label="Get in contact with me"
              >
                CONTACT ME
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;