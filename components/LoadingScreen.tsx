
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#0B0F14] flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[#8F62AA] font-mono text-sm tracking-[0.3em] mb-8"
      >
        INITIALIZING GROWTH ENGINE...
      </motion.div>
      
      <div className="w-full max-w-md h-1 bg-white/5 relative overflow-hidden rounded-full">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-[#8F62AA]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
          style={{ boxShadow: '0 0 15px #8F62AA' }}
        />
      </div>

      <motion.div 
        className="mt-4 text-white/40 font-mono text-xs"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {Math.floor(progress)}%
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
