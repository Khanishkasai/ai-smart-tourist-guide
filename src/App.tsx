import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { SceneManager, Scene } from './components/layout/SceneManager';
import { EnvironmentalTheme } from './types';
import { useConversation } from './hooks/useConversation';

export function App() {
  const [theme, setTheme] = useState<EnvironmentalTheme>('default');
  const [activeScene, setActiveScene] = useState<Scene>('landing');
  const [userPrompt, setUserPrompt] = useState('');

  const { 
    messages, 
    isTyping, 
    currentQuestion, 
    handleSelectAnswer, 
    resetConversation,
    answers
  } = useConversation({}, () => setActiveScene('crafting'));

  const handlePromptSubmit = (prompt: string) => {
    if (!prompt.trim()) return;
    setUserPrompt(prompt);
    resetConversation();
    setActiveScene('conversation');
  };

  const handleReset = () => {
    setTheme('default');
    setActiveScene('landing');
    setUserPrompt('');
    resetConversation();
  };

  return (
    <MainLayout theme={theme} onReset={handleReset}>
      <SceneManager
        activeScene={activeScene}
        theme={theme}
        onThemeChange={setTheme}
        onPromptSubmit={handlePromptSubmit}
        messages={messages}
        isTyping={isTyping}
        currentQuestion={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        userPrompt={userPrompt}
        answers={answers}
        onCraftingComplete={() => setActiveScene('globe-reveal')}
      />
    </MainLayout>
  );
}

export default App;
