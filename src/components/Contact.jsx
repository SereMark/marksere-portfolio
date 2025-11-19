import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialIcons } from '../utils/icons';
import { handleContactSubmit } from '../utils/helpers';

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
    w-full bg-bg-secondary/50 border rounded-lg px-4 py-3 text-white transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary-500/20
    ${focusedField === field ? 'border-primary-500 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'border-white/10 hover:border-white/20'}
  `;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white">
                Impossible
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              Have a visionary project in mind? I'm always open to discussing new opportunities,
              innovative ideas, or just chatting about the future of AI and robotics.
            </p>

            <div className="space-y-6">
              <a href="mailto:seremark056@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary-400 transition-colors group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                <div className="p-3 rounded-full bg-primary-500/10 text-primary-400 group-hover:scale-110 transition-transform">
                  <socialIcons.email size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono mb-1">Email Me</div>
                  <span className="font-display text-lg">seremark056@gmail.com</span>
                </div>
              </a>

              <div className="flex gap-4 pt-4 pl-4">
                <a href="https://github.com/SereMark" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-400/50 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
                  <socialIcons.github size={24} />
                </a>
                <a href="https://linkedin.com/in/seremark" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-400/50 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
                  <socialIcons.linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Form Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-primary-400 mb-2 uppercase tracking-wider">Name</label>
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
                <label htmlFor="email" className="block text-xs font-mono text-primary-400 mb-2 uppercase tracking-wider">Email</label>
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
                <label htmlFor="message" className="block text-xs font-mono text-primary-400 mb-2 uppercase tracking-wider">Message</label>
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
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
              >
                {status === 'sending' ? 'Transmitting...' : 'Initialize Contact'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-mono"
                >
                  Message received. Stand by for response.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center font-mono"
                >
                  Transmission failed. Please try again.
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