import { motion } from 'framer-motion';
import { SKILLS } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold font-display mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A curated set of technologies I use to build scalable, efficient, and intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-3">
                <span className="text-xl font-display font-medium text-gray-200 group-hover:text-primary-main transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-sm font-mono text-text-muted group-hover:text-primary-main/70 transition-colors">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-primary-main to-secondary-main relative overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                  {/* End Cap Glow */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-glow-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary-main/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Skills;