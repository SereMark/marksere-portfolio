import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { PERSONAL_INFO } from '../data/portfolio';

const ScrambleText = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  useEffect(() => {
    let interval;
    let iteration = 0;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 40);
    };

    scramble();
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

const Hero = () => {
  const { scrollToSection } = useScrollTo();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Name */}
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold font-display mb-8 tracking-tighter leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 pb-4">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-cyan to-secondary-400 pb-4">
              {PERSONAL_INFO.name.split(' ')[1]}
            </span>
          </h1>

          {/* Scramble Title */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-16 font-mono h-8 flex justify-center items-center gap-4">
            <span className="text-primary-500">{'>'}</span>
            <ScrambleText text={PERSONAL_INFO.title} />
            <span className="animate-pulse text-primary-500">_</span>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-8 py-4 bg-white text-bg-main font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative group-hover:text-white transition-colors z-10">
                View Projects
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-all hover:border-primary-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
              <span className="group-hover:text-primary-400 transition-colors">
                Initialize Contact
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;