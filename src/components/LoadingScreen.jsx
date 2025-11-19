import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-bg-main flex items-center justify-center z-50">
      {/* Background decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-main/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-main/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center relative z-10"
      >
        {/* Sophisticated spinner with gradient */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-main border-r-secondary-main"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-primary-light border-l-secondary-light opacity-50"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Mark Sere
          </h2>
          <p className="text-text-secondary text-sm font-mono">
            Initializing Portfolio<motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >...</motion.span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;