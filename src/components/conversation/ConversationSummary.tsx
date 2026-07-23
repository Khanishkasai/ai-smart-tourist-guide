import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TravelInfo } from '../../types/conversation';
import { SummaryRow } from './SummaryRow';

interface ConversationSummaryProps {
  answers: TravelInfo;
}

export const ConversationSummary: React.FC<ConversationSummaryProps> = ({ answers }) => {
  const answerEntries = Object.entries(answers).filter(([_, value]) => value !== undefined && value !== '');

  if (answerEntries.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0b0c10]/60 border-b border-white/10 p-6 flex flex-col backdrop-blur-md"
    >
      <div className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {answerEntries.map(([key, value]) => (
            <SummaryRow key={key} label={key} value={value as string} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
