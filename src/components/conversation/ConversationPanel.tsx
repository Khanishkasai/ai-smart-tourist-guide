import React from 'react';
import { motion } from 'framer-motion';
import { Message, Question, TravelInfo } from '../../types/conversation';
import { ConversationSummary } from './ConversationSummary';
import { CurrentQuestion } from './CurrentQuestion';

interface ConversationPanelProps {
  messages: Message[];
  isTyping: boolean;
  currentQuestion?: Question;
  onSelectAnswer: (optionId: string) => void;
  answers: TravelInfo;
}

export const ConversationPanel: React.FC<ConversationPanelProps> = ({ 
  messages, 
  isTyping, 
  currentQuestion, 
  onSelectAnswer,
  answers
}) => {
  // Find the most recent AI message to display its text (e.g., question or success reply)
  const latestAiMessage = [...messages].reverse().find(m => m.sender === 'ai');

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col h-full w-full max-w-3xl mx-auto rounded-3xl bg-[#0b0c10]/60 border border-white/10 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative z-10"
    >
      {/* Header Area */}
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          <span className="text-sm font-medium text-slate-200 tracking-wider">AI Travel Guide</span>
        </div>
      </div>
      
      {/* Progressive Summary Section */}
      <ConversationSummary answers={answers} />
      
      {/* Dynamic Interaction Section */}
      <CurrentQuestion 
        currentQuestion={currentQuestion}
        isTyping={isTyping}
        latestAiMessage={latestAiMessage}
        onSelectAnswer={onSelectAnswer}
      />
    </motion.div>
  );
};
