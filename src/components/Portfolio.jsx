import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectsByCategory, PROJECT_CATEGORIES } from '../data/portfolio';
import ProjectCard from './common/ProjectCard';

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
            className="text-4xl md:text-5xl lg:text-display-lg font-bold font-display mb-8"
          >
            <span className="text-white">Selected </span>
            <span className="text-gradient">
              Works
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
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${filter === category
                    ? 'bg-primary-main text-white border-primary-main shadow-glow-primary'
                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.filter(p => p).map((project, index) => (
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