import { useRef } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../data/portfolio';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-8 md:pl-0 group"
    >
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 group-last:bottom-auto group-last:h-full" />

      {/* Timeline Node */}
      <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full bg-bg-main border-[3px] border-primary-main md:-translate-x-1/2 z-10 group-hover:scale-125 group-hover:border-secondary-main transition-all duration-500 shadow-glow-primary" />

      <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2" />

        <div className="md:w-1/2 mb-16 relative">
          <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 text-xs font-bold font-mono text-primary-light bg-primary-main/10 rounded-full border border-primary-main/20">
                {exp.year}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-primary-main transition-colors duration-300">
              {exp.title}
            </h3>

            <h4 className="text-lg text-text-muted mb-6 flex items-center gap-2">
              <span className="text-primary-main">@</span>
              {exp.company}
            </h4>

            <p className="text-text-secondary text-base leading-relaxed mb-6 font-light">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs text-text-muted bg-white/5 rounded border border-white/5 font-mono hover:bg-white/10 transition-colors">
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
  const containerRef = useRef(null);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">Trajectory</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">
            A timeline of my professional journey and the milestones that defined it.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-0">
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