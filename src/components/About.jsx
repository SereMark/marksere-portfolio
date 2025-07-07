import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { socialIcons } from '../utils/icons';
import { PERSONAL_INFO } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl opacity-30 group-hover:opacity-50 transition duration-300" />
              <img
                src={PERSONAL_INFO.image}
                alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                loading="lazy"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                width="400"
                height="400"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Bio */}
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <motion.p 
                key={index}
                variants={fadeInUp} 
                className="text-lg text-gray-700 leading-relaxed text-pretty"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8"
            >
              {PERSONAL_INFO.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2" aria-label={`${stat.value} ${stat.label}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex gap-4">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost p-3 touch-target"
                aria-label="GitHub Profile"
              >
                <socialIcons.github size={24} className="text-gray-700" />
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost p-3 touch-target"
                aria-label="LinkedIn Profile"
              >
                <socialIcons.linkedin size={24} className="text-gray-700" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="btn btn--ghost p-3 touch-target"
                aria-label="Send Email"
              >
                <socialIcons.email size={24} className="text-gray-700" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;