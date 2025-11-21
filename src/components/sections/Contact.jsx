import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from '../../utils/icons';
import { handleContactSubmit } from '../../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const success = await handleContactSubmit(formData);
    if (success) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  const inputClasses = (field) => `
    w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
    transition-all duration-300 focus:outline-none
    ${focusedField === field
      ? 'border-primary-main bg-white/10'
      : 'hover:border-white/20 hover:bg-white/[0.07]'}
  `;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-white">
                Impossible
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed max-w-md font-light">
              Have a visionary project in mind? I'm always open to discussing new opportunities,
              innovative ideas, or just chatting about the future of tech.
            </p>

            <div className="space-y-6">
              <a href="mailto:seremark056@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors group">
                <div className="p-3 rounded-full bg-white/5 text-primary-main group-hover:bg-primary-main group-hover:text-white transition-all duration-300">
                  <socialIcons.email size={24} />
                </div>
                <span className="font-display text-xl">seremark056@gmail.com</span>
              </a>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-main text-text-secondary hover:text-white transition-all duration-300">
                  <socialIcons.github size={24} />
                </a>
                <a href="https://linkedin.com/in/seremark" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-main text-text-secondary hover:text-white transition-all duration-300">
                  <socialIcons.linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('name')}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('email')}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className={`${inputClasses('message')} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-primary-main to-secondary-main text-white font-bold rounded-xl text-sm tracking-wider uppercase hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-mono"
                >
                  Message sent successfully.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center font-mono"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;