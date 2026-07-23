import { useReducer, useCallback, useEffect, useRef, useState } from 'react';
import { Message, Question, TravelInfo } from '../types/conversation';
import { TRAVEL_QUESTIONS } from '../data/questions';
import { sleep } from '../utils/async';
import { BOT_CONFIG } from '../engine/constants';
import { conversationReducer } from '../engine/ConversationMachine';

const generateId = () => crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9);

export function useConversation(
  initialAnswers: Partial<TravelInfo> = {},
  onComplete?: () => void
) {
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  const getNextQuestion = useCallback((currentAnswers: TravelInfo): Question | undefined => {
    // Note: To support branching logic, we'd replace this with a node resolution engine.
    return TRAVEL_QUESTIONS.find((q) => q.required && !currentAnswers[q.field as keyof TravelInfo]);
  }, []);

  const [state, dispatch] = useReducer(conversationReducer, {
    messages: [],
    isComplete: false,
    isTyping: false,
    answers: initialAnswers as TravelInfo,
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>();
  const [hasInitialized, setHasInitialized] = useState(false);

  const triggerCompletion = useCallback(async () => {
    dispatch({ type: 'SET_TYPING', payload: false });
    await sleep(50);
    
    dispatch({ type: 'SET_TYPING', payload: true });
    await sleep(BOT_CONFIG.thinkingDelay);
    
    dispatch({ type: 'SET_TYPING', payload: false });
    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: { id: generateId(), sender: 'ai', content: "I have everything I need.", timestamp: Date.now() } 
    });

    await sleep(BOT_CONFIG.typingDelay);
    dispatch({ type: 'SET_TYPING', payload: true });
    
    await sleep(BOT_CONFIG.thinkingDelay);
    dispatch({ type: 'SET_TYPING', payload: false });
    dispatch({ type: 'SET_COMPLETE', payload: true });
    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: { id: generateId(), sender: 'ai', content: "Let me craft something unforgettable for you.", timestamp: Date.now() } 
    });
    
    if (onCompleteRef.current) {
      await sleep(BOT_CONFIG.completionDelay);
      onCompleteRef.current();
    }
  }, []);

  useEffect(() => {
    if (hasInitialized) return;
    
    const nextQ = getNextQuestion(state.answers);
    setCurrentQuestion(nextQ);

    if (nextQ) {
      dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { id: generateId(), sender: 'ai', content: nextQ.question, timestamp: Date.now() } 
      });
    } else {
      triggerCompletion();
    }
    
    setHasInitialized(true);
  }, [hasInitialized, state.answers, getNextQuestion, triggerCompletion]);

  const handleSelectAnswer = useCallback(async (optionId: string) => {
    if (state.isTyping || state.isComplete || !currentQuestion) return;

    const selectedOption = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!selectedOption) return;

    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: { id: generateId(), sender: 'user', content: selectedOption.text, timestamp: Date.now() } 
    });
    dispatch({ 
      type: 'UPDATE_ANSWER', 
      payload: { field: currentQuestion.field, value: selectedOption.value } 
    });
    dispatch({ type: 'SET_TYPING', payload: true });

    await sleep(BOT_CONFIG.typingDelay);

    dispatch({ 
      type: 'ADD_MESSAGE', 
      payload: { id: generateId(), sender: 'ai', content: currentQuestion.successReply, timestamp: Date.now() } 
    });
    dispatch({ type: 'SET_TYPING', payload: true }); 

    await sleep(BOT_CONFIG.transitionDelay);

    // Compute next question with updated answers inline
    const newAnswers = { ...state.answers, [currentQuestion.field]: selectedOption.value };
    const nextQ = getNextQuestion(newAnswers);
    setCurrentQuestion(nextQ);
    
    if (nextQ) {
      dispatch({ type: 'SET_TYPING', payload: false });
      dispatch({ 
        type: 'ADD_MESSAGE', 
        payload: { id: generateId(), sender: 'ai', content: nextQ.question, timestamp: Date.now() } 
      });
    } else {
      triggerCompletion();
    }
  }, [state, currentQuestion, getNextQuestion, triggerCompletion]);

  const resetConversation = useCallback(() => {
    const nextQ = getNextQuestion(initialAnswers as TravelInfo);
    setCurrentQuestion(nextQ);
    
    dispatch({
      type: 'RESET',
      payload: {
        initialAnswers: initialAnswers as TravelInfo,
        initialMessages: nextQ ? [{ id: generateId(), sender: 'ai', content: nextQ.question, timestamp: Date.now() }] : []
      }
    });
    
    if (!nextQ) {
      triggerCompletion();
    }
  }, [initialAnswers, getNextQuestion, triggerCompletion]);

  return {
    ...state,
    currentQuestion,
    handleSelectAnswer,
    resetConversation,
  };
}
