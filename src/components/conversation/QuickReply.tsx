import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface QuickReplyProps {
  text: string;
  onClick?: () => void;
}

export const QuickReply: React.FC<QuickReplyProps> = memo(({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-400/30 backdrop-blur-md transition-all shadow-glass-low text-left"
    >
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        {text}
      </span>
      <ArrowRight className="w-4 h-4 text-indigo-400/0 group-hover:text-indigo-400/100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
    </motion.button>
  );
});
