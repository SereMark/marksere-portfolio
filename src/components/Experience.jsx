import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { EXPERIENCES } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 rounded-full" />
              <div className="ml-4 sm:ml-8 bg-white p-4 sm:p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-sm sm:text-base text-gray-600 font-medium">{exp.year}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-600">{exp.company}</h4>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;