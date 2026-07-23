import { useState, useRef, useCallback } from 'react';

export function useTypewriter(speed: number = 16) {
  const [text, setText] = useState('');
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTyping = useCallback(() => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
  }, []);

  const typeText = useCallback((fullText: string) => {
    stopTyping();
    setText('');
    
    let charIndex = 0;
    typingTimerRef.current = setInterval(() => {
      if (charIndex <= fullText.length) {
        setText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        stopTyping();
      }
    }, speed);
  }, [speed, stopTyping]);

  const resetTyping = useCallback(() => {
    stopTyping();
    setText('');
  }, [stopTyping]);

  const setImmediateText = useCallback((newText: string) => {
    stopTyping();
    setText(newText);
  }, [stopTyping]);

  return {
    text,
    typeText,
    stopTyping,
    resetTyping,
    setImmediateText
  };
}
