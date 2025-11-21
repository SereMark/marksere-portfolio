import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-bg-main flex items-center justify-center z-50 font-mono">
      <div className="w-64">
        <div className="flex justify-between text-xs text-primary-main mb-2 uppercase tracking-widest">
          <span>System Boot</span>
          <span>{Math.min(100, Math.floor(progress))}%</span>
        </div>

        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-main shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 space-y-1 text-[10px] text-gray-500">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            &gt; Initializing core modules...
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            &gt; Loading assets...
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            &gt; Establishing secure connection...
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="text-primary-main">
            &gt; Access Granted.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;