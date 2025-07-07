import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { skillIcons } from '../utils/icons';
import { SKILLS } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {SKILLS.map((skill, index) => {
            const IconComponent = skillIcons[skill.name];
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  {IconComponent && <IconComponent className="text-3xl sm:text-4xl text-blue-600" />}
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">{skill.level}%</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;