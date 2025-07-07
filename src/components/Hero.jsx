import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollTo } from '../hooks/useScrollTo';
import { PERSONAL_INFO } from '../data/portfolio';

const Hero = () => {
  const { scrollToSection } = useScrollTo();

  const handleCTAClick = (section) => {
    const success = scrollToSection(section);
    if (!success) {
      console.warn(`Failed to navigate to ${section}`);
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16"
      aria-label="Hero section"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
              Portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="section-title mb-6 leading-tight"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Subtitle and Description */}
          <motion.div
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 space-y-2"
          >
            <p className="font-semibold text-gray-900">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-balance">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <motion.button
              onClick={() => handleCTAClick('experience')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn--primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              aria-label="View my work and experience"
            >
              View My Work
            </motion.button>
            
            <motion.button
              onClick={() => handleCTAClick('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn--secondary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              aria-label="Get in touch with me"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Skip to content link for screen readers */}
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
            onClick={(e) => {
              e.preventDefault();
              handleCTAClick('about');
            }}
          >
            Skip to main content
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;