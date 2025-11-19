import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent mix-blend-overlay z-20 group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src={PERSONAL_INFO.image}
                alt={PERSONAL_INFO.name}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary-500/30 rounded-tl-3xl transition-all duration-500 group-hover:top-[-20px] group-hover:left-[-20px] group-hover:border-primary-500" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-secondary-500/30 rounded-br-3xl transition-all duration-500 group-hover:bottom-[-20px] group-hover:right-[-20px] group-hover:border-secondary-500" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              <span className="text-white">About The </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Engineer
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg font-light">
              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <p key={index} className="border-l-2 border-white/5 pl-4 hover:border-primary-500/50 transition-colors duration-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {PERSONAL_INFO.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 shadow-lg"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-white mb-2 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;