import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { envIcons } from '../utils/icons';
import { DEV_ENVIRONMENT } from '../data/portfolio';

const DevEnvironment = () => {
  return (
    <section id="environment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Development Environment
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            My carefully curated development setup for maximum productivity and minimal distractions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {DEV_ENVIRONMENT.map((item, index) => {
            const IconComponent = envIcons[item.name];
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-center group"
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  {IconComponent && <IconComponent className="text-4xl sm:text-5xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{item.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium uppercase tracking-wide">
                  {item.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DevEnvironment;