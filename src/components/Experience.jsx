import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolio';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20 -translate-x-1/2" />

      {/* Timeline Node */}
      <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full bg-bg-main border-2 border-primary-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300" />

      <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2" />

        <div className="md:w-1/2 mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl" />

          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold font-mono text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
              {exp.year}
            </span>

            <h3 className="text-2xl font-bold font-display text-white mb-1">{exp.title}</h3>
            <h4 className="text-lg text-gray-400 mb-6 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary-500" />
              {exp.company}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs text-primary-300/80 bg-primary-500/5 rounded border border-primary-500/10 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg-main via-bg-secondary/50 to-bg-main pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-white">Career </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">
              Trajectory
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;