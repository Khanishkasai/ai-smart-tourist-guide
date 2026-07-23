import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { cn } from '../../utils/cn';

interface MessageBubbleProps {
  children: React.ReactNode;
  variant: 'user' | 'ai';
}

export const MessageBubble: React.FC<MessageBubbleProps> = memo(({ children, variant }) => {
  const isUser = variant === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex mb-4", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-5 py-3.5 backdrop-blur-md border shadow-glass-low",
          isUser 
            ? "bg-blue-500/10 border-blue-400/30 text-blue-50 rounded-tr-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            : "bg-white/[0.04] border-white/10 text-slate-200 rounded-tl-sm"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
});
