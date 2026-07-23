import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HeroSection } from './components/hero/HeroSection';
import { ConversationPanel } from './components/conversation/ConversationPanel';
import { VIBE_PRESETS } from './data/vibePresets';
import { VibePreset, EnvironmentalTheme } from './types';
import { useTypewriter } from './hooks/useTypewriter';
import { useConversation } from './hooks/useConversation';
import { AnimatePresence, motion } from 'framer-motion';

type Scene = 'landing' | 'conversation';

export function App() {
  const { text: promptValue, typeText, setImmediateText, resetTyping, stopTyping } = useTypewriter(16);
  const [activePreset, setActivePreset] = useState<VibePreset | null>(null);
  const [theme, setTheme] = useState<EnvironmentalTheme>('default');
  const [activeScene, setActiveScene] = useState<Scene>('landing');

  const { 
    messages, 
    isTyping, 
    currentQuestion, 
    handleSelectAnswer, 
    resetConversation 
  } = useConversation({});

  // Typewriter effect when selecting a VibePreset
  const handleSelectVibePreset = (preset: VibePreset) => {
    setActivePreset(preset);
    setTheme(preset.themeGlow);
    typeText(preset.promptText);
  };

  const handlePromptSubmit = (prompt: string) => {
    if (!prompt.trim()) return;
    resetConversation();
    setActiveScene('conversation');
  };

  const handleReset = () => {
    resetTyping();
    setActivePreset(null);
    setTheme('default');
    setActiveScene('landing');
    resetConversation();
  };

  return (
    <MainLayout
      theme={theme}
      onReset={handleReset}
    >
      <AnimatePresence mode="wait">
        {activeScene === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col"
          >
            <HeroSection
              promptValue={promptValue}
              onPromptChange={(val) => {
                stopTyping();
                setImmediateText(val);
                if (activePreset && val !== activePreset.promptText) {
                  setActivePreset(null);
                }
              }}
              onPromptSubmit={handlePromptSubmit}
              vibePresets={VIBE_PRESETS}
              onSelectVibePreset={handleSelectVibePreset}
              activePresetId={activePreset?.id}
            />
          </motion.div>
        )}

        {activeScene === 'conversation' && (
          <motion.div
            key="conversation"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col items-center justify-center p-4 pt-24 pb-8"
          >
            <ConversationPanel
              messages={messages}
              isTyping={isTyping}
              currentQuestion={currentQuestion}
              onSelectAnswer={handleSelectAnswer}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
