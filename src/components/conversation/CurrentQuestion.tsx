import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, Message } from '../../types/conversation';
import { QuickReply } from './QuickReply';
import { TypingIndicator } from './TypingIndicator';

interface CurrentQuestionProps {
  currentQuestion?: Question;
  isTyping: boolean;
  latestAiMessage?: Message;
  onSelectAnswer: (optionId: string) => void;
}

export const CurrentQuestion: React.FC<CurrentQuestionProps> = ({
  currentQuestion,
  isTyping,
  latestAiMessage,
  onSelectAnswer,
}) => {
  // Always display the most recent AI message.
  // During transitions, this will naturally be the success reply.
  const displayText = latestAiMessage?.content || currentQuestion?.question || '';

  // Determine if we are actively waiting for an answer to the current question
  const isWaitingForAnswer = !isTyping && currentQuestion && currentQuestion.question === displayText;

  return (
    <div className="flex-1 flex flex-col p-8 overflow-hidden relative justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={displayText} // Crossfade the entire block when the AI text changes
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(10px)', transition: { duration: 0.3 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 max-w-2xl mx-auto w-full"
        >
          {/* The AI's message text */}
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="text-emerald-400 text-sm font-bold tracking-widest">AI</span>
            </div>
            <p className="text-2xl font-light text-slate-200 pt-1.5 leading-relaxed tracking-wide">
              {displayText}
            </p>
          </div>

          {/* Options or Typing Indicator crossfade */}
          <div className="pl-15 min-h-[120px]">
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="py-2"
                >
                  <TypingIndicator />
                </motion.div>
              ) : isWaitingForAnswer ? (
                <motion.div
                  key="options"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                  className="flex flex-col gap-3"
                >
                  {currentQuestion.options.map((opt, index) => (
                    <motion.div
                      key={opt.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <QuickReply
                        text={opt.text}
                        onClick={() => onSelectAnswer(opt.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
