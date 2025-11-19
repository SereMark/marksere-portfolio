import { motion } from 'framer-motion';
import { envIcons } from '../utils/icons';
import { DEV_ENVIRONMENT } from '../data/portfolio';

const DevEnvironment = () => {
  return (
    <section id="environment" className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-main/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold font-display mb-6">
            <span className="text-white">Dev </span>
            <span className="text-gradient">
              Environment
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            My carefully curated development setup for maximum productivity and minimal distractions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEV_ENVIRONMENT.map((item, index) => {
            const IconComponent = envIcons[item.name];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative glass-card p-6 rounded-2xl hover:border-primary-main/30 hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-bg-main border border-white/10 group-hover:border-primary-main/50 group-hover:shadow-glow-primary transition-all duration-300 shadow-lg">
                    {IconComponent && (
                      <IconComponent className="text-4xl text-gray-400 group-hover:text-primary-main transition-colors duration-300" />
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold font-display text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary-main/10 text-primary-light rounded-full text-xs font-mono border border-primary-main/20">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevEnvironment;