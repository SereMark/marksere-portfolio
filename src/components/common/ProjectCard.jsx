import { motion } from 'framer-motion';
import { uiIcons, socialIcons } from '../../utils/icons';

const ProjectCard = ({ project, index }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card rounded-2xl overflow-hidden hover:border-primary-main/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary-lg"
        >
            {/* Image Placeholder (Gradient for now) */}
            <div className="h-48 bg-gradient-to-br from-bg-tertiary to-bg-secondary relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-primary-main/10 group-hover:bg-primary-main/20 transition-colors duration-500" />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold font-mono text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 group-hover:border-primary-main/50 transition-colors">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-primary-main transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-text-secondary">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                        {project?.github && (
                            <a
                                href={project?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-white transition-colors hover:scale-110 transform"
                                aria-label="View GitHub repository"
                            >
                                <socialIcons.github size={20} />
                            </a>
                        )}
                        {project?.link && (
                            <a
                                href={project?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-white transition-colors hover:scale-110 transform"
                                aria-label="Visit live project"
                            >
                                <uiIcons.externalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project?.tech?.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-[10px] font-mono text-primary-light/80 bg-primary-main/5 rounded border border-primary-main/10 group-hover:border-primary-main/30 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
