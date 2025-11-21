import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectsByCategory, PROJECT_CATEGORIES } from '../../data/portfolio';
import ProjectCard from '../common/ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => getProjectsByCategory(filter), [filter]);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-display mb-8 tracking-tight"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">Works</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 flex-wrap"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-text-secondary border-white/10 hover:border-white/30 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;