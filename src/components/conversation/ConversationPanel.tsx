import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message, Question } from '../../types/conversation';
import { AIMessage } from './AIMessage';
import { UserMessage } from './UserMessage';
import { TypingIndicator } from './TypingIndicator';
import { QuickReply } from './QuickReply';

interface ConversationPanelProps {
  messages: Message[];
  isTyping: boolean;
  currentQuestion?: Question;
  onSelectAnswer: (optionId: string) => void;
}

export const ConversationPanel: React.FC<ConversationPanelProps> = ({ 
  messages, 
  isTyping, 
  currentQuestion, 
  onSelectAnswer 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col h-full w-full max-w-3xl mx-auto rounded-3xl bg-[#0b0c10]/40 border border-white/10 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative z-10"
    >
      {/* Header Area */}
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          <span className="text-sm font-medium text-slate-200">AI Travel Guide</span>
        </div>
      </div>
      
      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full"
            >
              {msg.sender === 'ai' ? (
                <AIMessage content={msg.content} />
              ) : (
                <UserMessage content={msg.content} />
              )}
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              key="typing-indicator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <TypingIndicator />
            </motion.div>
          )}

          {currentQuestion && !isTyping && (
            <motion.div
              key="quick-replies"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex flex-col gap-2 pl-11"
            >
              {currentQuestion.options.map((opt) => (
                <QuickReply
                  key={opt.id}
                  text={opt.text}
                  onClick={() => onSelectAnswer(opt.id)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Input Area Background Gradient Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0c10] to-transparent pointer-events-none" />
    </motion.div>
  );
};
