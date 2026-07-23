import React from 'react';
import { motion } from 'framer-motion';

interface SummaryRowProps {
  label: string;
  value: string;
}

export const SummaryRow: React.FC<SummaryRowProps> = ({ label, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-row items-center justify-between py-3 border-b border-white/5 last:border-0"
    >
      <div className="flex flex-row items-center gap-6 w-full pr-8">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-widest w-32 shrink-0">
          {label}
        </span>
        <span className="text-base text-slate-200 truncate">
          {value}
        </span>
      </div>
      
      {/* Animated Checkmark */}
      <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-400 shrink-0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <motion.polyline points="20 6 9 17 4 12" />
      </motion.svg>
    </motion.div>
  );
};
