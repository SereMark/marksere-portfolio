import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { uiIcons, socialIcons } from '../../utils/icons';

const ProjectCard = ({ project, index }) => {
    if (!project) return null;

    return (
        <div className="group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
            {/* Image Placeholder */}
            <div className="h-56 bg-gradient-to-br from-white/5 to-white/[0.02] relative overflow-hidden group-hover:from-primary-main/10 group-hover:to-secondary-main/10 transition-colors duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl font-bold opacity-50 group-hover:scale-110 group-hover:text-white/40 transition-all duration-700">
                    {project.title[0]}
                </div>

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 group-hover:border-primary-main/30 transition-colors">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-primary-main transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        {project?.github && (
                            <a
                                href={project?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-white transition-colors"
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
                                className="text-text-muted hover:text-white transition-colors"
                                aria-label="Visit live project"
                            >
                                <uiIcons.externalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project?.tech?.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-mono text-text-muted bg-white/5 rounded border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        category: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        github: PropTypes.string,
        link: PropTypes.string,
        tech: PropTypes.arrayOf(PropTypes.string),
    }),
    index: PropTypes.number,
};

export default ProjectCard;
