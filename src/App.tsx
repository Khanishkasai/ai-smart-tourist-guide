import { useState, useRef } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HeroSection } from './components/hero/HeroSection';
import { VIBE_PRESETS } from './data/vibePresets';
import { VibePreset, EnvironmentalTheme } from './types';

export function App() {
  const [promptValue, setPromptValue] = useState('');
  const [activePreset, setActivePreset] = useState<VibePreset | null>(null);
  const [theme, setTheme] = useState<EnvironmentalTheme>('default');
  const typingTimerRef = useRef<any>(null);

  // Typewriter effect when selecting a VibePreset
  const handleSelectVibePreset = (preset: VibePreset) => {
    setActivePreset(preset);
    setTheme(preset.themeGlow);

    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    const fullText = preset.promptText;
    let charIndex = 0;
    setPromptValue('');

    typingTimerRef.current = setInterval(() => {
      if (charIndex <= fullText.length) {
        setPromptValue(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 16);
  };

  const handlePromptSubmit = (prompt: string) => {
    console.log('Submitted prompt:', prompt);
    // AI Crafting transition will be wired up in the next phase
  };

  const handleReset = () => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setPromptValue('');
    setActivePreset(null);
    setTheme('default');
  };

  return (
    <MainLayout
      theme={theme}
      onReset={handleReset}
    >
      <HeroSection
        promptValue={promptValue}
        onPromptChange={(val) => {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
          setPromptValue(val);
          if (activePreset && val !== activePreset.promptText) {
            setActivePreset(null);
          }
        }}
        onPromptSubmit={handlePromptSubmit}
        vibePresets={VIBE_PRESETS}
        onSelectVibePreset={handleSelectVibePreset}
        activePresetId={activePreset?.id}
      />
    </MainLayout>
  );
}

export default App;
