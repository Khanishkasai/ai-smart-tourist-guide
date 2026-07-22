import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PromptBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (prompt: string) => void;
  isSubmitting?: boolean;
}

const DEFAULT_PLACEHOLDERS = [
  'Where do you want your next adventure to begin?',
  '7 days in Tokyo during Cherry Blossom season under ₹60,000...',
  '5-day Swiss Alps trail on a budget...',
  'Tokyo midnight ramen & street food crawl...',
  '10-day scenic train expedition across Europe...',
];

export const PromptBar: React.FC<PromptBarProps> = ({
  value,
  onChange,
  onSubmit,
  isSubmitting = false,
}) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Rotate placeholder text smoothly when not typing or focused
  useEffect(() => {
    if (value.trim().length > 0 || isFocused) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % DEFAULT_PLACEHOLDERS.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [value, isFocused]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (value.trim().length === 0 || isSubmitting) return;
    onSubmit(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-3xl mx-auto h-[72px] rounded-[28px] overflow-hidden transition-all duration-500 px-3.5 backdrop-blur-[24px] border flex items-center justify-between gap-3 sm:gap-4 select-none ${
        isFocused
          ? 'bg-[#0B0D14]/90 border-blue-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(96,165,250,0.22)]'
          : 'bg-[#0B0D14]/75 border-white/15 hover:border-white/28 hover:bg-[#0B0D14]/85 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(96,165,250,0.08)]'
      }`}
    >
      {/* Subtle Top Edge Specular Highlight Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* LEFT: Circular Glass Button with Animated Sparkle Icon */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isFocused 
            ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40 shadow-[0_0_16px_rgba(96,165,250,0.3)]' 
            : 'bg-white/[0.05] text-blue-400 border border-white/10 hover:border-white/20'
        }`}
      >
        <Sparkles className={`w-5 h-5 ${isFocused ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
      </div>

      {/* CENTER: Seamless Text Input Field with ZERO Inner Borders */}
      <div className="relative flex-grow h-full flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={DEFAULT_PLACEHOLDERS[placeholderIndex]}
          style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
          className="w-full bg-transparent border-none outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 shadow-none text-slate-100 placeholder:text-slate-400/65 text-base sm:text-lg font-sans tracking-tight leading-none caret-blue-400"
          aria-label="Where do you want your next adventure to begin?"
        />
      </div>

      {/* RIGHT: Single Circular Arrow Button */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <motion.button
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          type="submit"
          disabled={value.trim().length === 0 || isSubmitting}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            value.trim().length > 0
              ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white shadow-[0_0_30px_rgba(96,165,250,0.65)] hover:from-blue-300 hover:to-blue-500'
              : 'bg-white/10 text-slate-500 border border-white/5 cursor-not-allowed'
          }`}
          aria-label="Submit Prompt"
        >
          <ArrowRight className={`w-5.5 h-5.5 ${value.trim().length > 0 ? 'translate-x-0.5 text-white' : 'text-slate-500'} transition-transform`} />
        </motion.button>
      </div>
    </motion.form>
  );
};
