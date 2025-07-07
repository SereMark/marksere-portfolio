import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialIcons, uiIcons } from '../utils/icons';
import { getProjectsByCategory, PROJECT_CATEGORIES } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  const isComingSoon = project.status !== 'completed';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`card card--interactive relative ${
        isComingSoon ? 'cursor-default' : 'cursor-pointer'
      }`}
      aria-label={`Project: ${project.title}`}
    >
      {isComingSoon && (
        <div 
          className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center"
          aria-label="Coming soon"
        >
          <div className="text-center">
            <div className="text-blue-600 text-sm font-medium mb-1">Coming Soon</div>
            <div className="w-8 h-0.5 bg-blue-600 mx-auto opacity-60" />
          </div>
        </div>
      )}

      <div className="p-4 sm:p-6">
        <header className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {project.category}
          </span>
          
          {!isComingSoon && (
            <div className="flex gap-2" role="list">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost p-2 touch-target"
                title={`View ${project.title} on GitHub`}
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <socialIcons.github className="text-gray-700" />
              </a>
              
              {project.demo && project.demo !== project.github && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost p-2 touch-target"
                  title={`View ${project.title} live demo`}
                  aria-label={`View ${project.title} live demo`}
                >
                  <uiIcons.externalLink className="text-gray-700" />
                </a>
              )}
            </div>
          )}
        </header>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 font-medium">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-pretty">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-2">
              Key Features
            </h4>
            <ul 
              className="text-xs sm:text-sm text-gray-700 space-y-1"
              role="list"
            >
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold" aria-hidden="true">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="sr-only">Technologies used</h4>
            <div className="flex flex-wrap gap-2" role="list">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = useMemo(() => 
    getProjectsByCategory(filter), [filter]
  );

  return (
    <section id="portfolio" className="section bg-white">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider mb-8" />
          
          <div 
            className="flex justify-center gap-4 flex-wrap"
            role="tablist"
            aria-label="Project category filters"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn px-6 py-2 text-sm font-medium touch-target ${
                  filter === category
                    ? 'btn--primary'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                role="tab"
                aria-selected={filter === category}
                aria-controls="projects-grid"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          id="projects-grid"
          key={filter}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          role="tabpanel"
          aria-label={`${filter} projects`}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={`${filter}-${project.id}`}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No projects found in the {filter} category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;