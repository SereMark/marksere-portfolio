import { motion } from 'framer-motion';
import { skillIcons } from '../utils/icons';
import { SKILLS } from '../data/portfolio';

const SkillCard = ({ skill, index }) => {
  const IconComponent = skillIcons[skill.name];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-4 rounded-full bg-bg-main border border-white/10 group-hover:border-primary-500/50 transition-colors">
        {IconComponent && (
          <IconComponent className="text-4xl text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
        )}
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-lg font-bold font-display text-white mb-1">{skill.name}</h3>
        <div className="text-xs font-mono text-primary-400/80">
          {skill.level}% Proficiency
        </div>
      </div>

      {/* Progress Ring (Decorative) */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-20" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary-500"
          strokeDasharray="300"
          strokeDashoffset={300 - (300 * skill.level) / 100}
        />
      </svg>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            // A curated collection of tools and technologies I use to build the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;