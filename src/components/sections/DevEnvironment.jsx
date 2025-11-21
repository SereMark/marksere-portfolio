import { motion } from 'framer-motion';
import { envIcons } from '../../utils/icons';
import { DEV_ENVIRONMENT } from '../../data/portfolio';

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
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">Arsenal</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">
            The tools and technologies that empower my workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          {DEV_ENVIRONMENT.map((item, index) => {
            const IconComponent = envIcons[item.name];
            const isLarge = index === 0 || index === 3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative bg-white/[0.03] border border-white/5 p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 ${isLarge ? 'md:col-span-2' : ''}`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="p-3 w-fit rounded-xl bg-white/5 text-white group-hover:text-primary-main transition-colors">
                    {IconComponent && <IconComponent size={24} />}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-display text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-text-muted line-clamp-2">{item.description}</p>
                  </div>
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