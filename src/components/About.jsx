import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS } from '../data/portfolio';
import Marquee from './common/Marquee';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary-main/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-glow-primary">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-main/20 to-transparent mix-blend-overlay z-20 group-hover:opacity-0 transition-opacity duration-500" />
              <img
                src={PERSONAL_INFO.image}
                alt={`Profile photo of ${PERSONAL_INFO.name}`}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary-main/30 rounded-tl-3xl transition-all duration-500 group-hover:top-[-24px] group-hover:left-[-24px] group-hover:border-primary-main" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-secondary-main/30 rounded-br-3xl transition-all duration-500 group-hover:bottom-[-24px] group-hover:right-[-24px] group-hover:border-secondary-main" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold font-display tracking-tight leading-tight">
              <span className="text-white">About The </span>
              <span className="text-gradient">
                Engineer
              </span>
            </h2>

            <div className="space-y-6 text-text-secondary leading-relaxed text-lg font-light">
              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <p key={index} className="border-l-2 border-white/5 pl-6 hover:border-primary-main/50 hover:text-white/90 transition-all duration-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {PERSONAL_INFO.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 rounded-xl text-center hover:border-primary-main/30 hover:shadow-glow-primary transition-all duration-300 group cursor-default"
                >
                  <div className="text-4xl font-bold text-gradient mb-2 font-display group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted font-mono uppercase tracking-widest group-hover:text-primary-main transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="py-10 border-y border-white/5 bg-white/[0.02]">
          <Marquee className="items-center" baseVelocity={50}>
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 px-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase">
                  {skill.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-main/50" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About;