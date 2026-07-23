import React, { memo } from 'react';
import { MessageBubble } from './MessageBubble';
import { Sparkles } from 'lucide-react';

interface AIMessageProps {
  content: string;
}

export const AIMessage: React.FC<AIMessageProps> = memo(({ content }) => {
  return (
    <div className="flex gap-3 mb-4 w-full">
      <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <Sparkles className="w-4 h-4 text-indigo-300" />
      </div>
      <div className="flex-1">
        <MessageBubble variant="ai">
          <div className="text-sm leading-relaxed text-slate-200 whitespace-pre-wrap">
            {content}
          </div>
        </MessageBubble>
      </div>
    </div>
  );
});
