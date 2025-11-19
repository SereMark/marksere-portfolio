import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { socialIcons, uiIcons } from '../utils/icons';
import { getProjectsByCategory, PROJECT_CATEGORIES } from '../data/portfolio';

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <TiltCard className="relative w-full h-full bg-bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:border-primary-500/30 transition-colors duration-500">
      <div className="p-8 h-full flex flex-col relative z-10">
        <header className="flex items-center justify-between mb-6">
          <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-bold uppercase tracking-wider border border-primary-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
            {project.category}
          </span>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <socialIcons.github size={22} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <uiIcons.externalLink size={22} />
              </a>
            )}
          </div>
        </header>

        <div className="flex-grow">
          <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-gray-500 border border-white/5 px-2 py-1 rounded bg-white/5 group-hover:border-primary-500/20 group-hover:bg-primary-500/5 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </TiltCard>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => getProjectsByCategory(filter), [filter]);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Selected Works
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${filter === category
                  ? 'bg-primary-500 text-bg-main border-primary-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;