import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThinkingStatusProps {
  statusMessage: string;
}

export const ThinkingStatus: React.FC<ThinkingStatusProps> = ({ statusMessage }) => {
  return (
    <div className="flex justify-center h-5 overflow-hidden relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={statusMessage}
          initial={{ opacity: 0, filter: 'blur(4px)', y: 6 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          exit={{ opacity: 0, filter: 'blur(4px)', y: -6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center text-xs font-mono tracking-widest text-indigo-300/70"
        >
          {statusMessage}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
