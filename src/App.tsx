import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HeroSection } from './components/hero/HeroSection';
import { VIBE_PRESETS } from './data/vibePresets';
import { VibePreset, EnvironmentalTheme } from './types';
import { useTypewriter } from './hooks/useTypewriter';

export function App() {
  const { text: promptValue, typeText, setImmediateText, resetTyping, stopTyping } = useTypewriter(16);
  const [activePreset, setActivePreset] = useState<VibePreset | null>(null);
  const [theme, setTheme] = useState<EnvironmentalTheme>('default');

  // Typewriter effect when selecting a VibePreset
  const handleSelectVibePreset = (preset: VibePreset) => {
    setActivePreset(preset);
    setTheme(preset.themeGlow);
    typeText(preset.promptText);
  };

  const handlePromptSubmit = (prompt: string) => {
    if (!prompt.trim()) return;
    // Add logic here if needed
  };

  const handleReset = () => {
    resetTyping();
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
    </MainLayout>
  );
}

export default App;
