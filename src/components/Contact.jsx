import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { socialIcons } from '../utils/icons';
import { handleContactSubmit } from '../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleContactSubmit(formData);
    if (success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Let's Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:seremark056@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md touch-target"
                aria-label="Send email to Mark Sere"
              >
                <socialIcons.email className="text-xl flex-shrink-0" />
                <span className="break-all">seremark056@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/seremark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md touch-target"
                aria-label="Visit LinkedIn profile"
              >
                <socialIcons.linkedin className="text-xl flex-shrink-0" />
                <span>linkedin.com/in/seremark</span>
              </a>
              <a
                href="https://github.com/SereMark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md touch-target"
                aria-label="Visit GitHub profile"
              >
                <socialIcons.github className="text-xl flex-shrink-0" />
                <span>github.com/SereMark</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-4 sm:p-8 rounded-xl shadow-md border border-gray-200"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
              aria-label="Your email address"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none text-gray-900"
              aria-label="Your message"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg touch-target"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;