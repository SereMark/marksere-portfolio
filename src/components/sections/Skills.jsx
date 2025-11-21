import { motion } from 'framer-motion';
import { SKILLS } from '../../data/portfolio';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className="text-4xl font-bold text-white/20 group-hover:text-white transition-colors duration-300 font-display">
          {skill.name.charAt(0)}
        </div>
        <h3 className="text-lg font-medium text-white/80 group-hover:text-primary-main transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">Arsenal</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">
            The tools and technologies I use to bring digital visions to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;