import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroSection } from '../hero/HeroSection';
import { ConversationPanel } from '../conversation/ConversationPanel';
import { CraftingScene } from '../crafting/CraftingScene';
import { SpaceCanvas } from '../space/SpaceCanvas';
import { GlobeReveal } from '../globe/GlobeReveal';
import { VIBE_PRESETS } from '../../data/vibePresets';
import { EnvironmentalTheme } from '../../types';
import { Question } from '../../types/conversation';
import { Message } from '../../types/conversation';

export type Scene = 'landing' | 'conversation' | 'crafting' | 'globe-reveal';

interface SceneManagerProps {
  activeScene: Scene;
  theme: EnvironmentalTheme;
  onThemeChange: (theme: EnvironmentalTheme) => void;
  onPromptSubmit: (prompt: string) => void;
  // Conversation Props
  messages: Message[];
  isTyping: boolean;
  currentQuestion?: Question;
  onSelectAnswer: (answerId: string) => void;
  onCraftingComplete: () => void;
  // Currently stored prompt for CraftingScene
  userPrompt: string;
  answers: import('../../types/conversation').TravelInfo;
}

export const SceneManager: React.FC<SceneManagerProps> = ({
  activeScene,
  theme,
  onThemeChange,
  onPromptSubmit,
  messages,
  isTyping,
  currentQuestion,
  onSelectAnswer,
  onCraftingComplete,
  userPrompt,
  answers,
}) => {
  return (
    <>
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
              onPromptSubmit={onPromptSubmit}
              vibePresets={VIBE_PRESETS}
              onThemeChange={onThemeChange}
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
              onSelectAnswer={onSelectAnswer}
              answers={answers}
            />
          </motion.div>
        )}

        {activeScene === 'crafting' && (
          <CraftingScene
            key="crafting"
            userPrompt={userPrompt}
            onCraftingComplete={onCraftingComplete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeScene === 'globe-reveal' && (
          <motion.div
            key="globe-canvas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'easeIn' }}
            className="fixed inset-0 z-0 pointer-events-none"
          >
            <SpaceCanvas theme={theme}>
              <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial color="red" />
              </mesh>

              <ambientLight intensity={2} />

              <directionalLight
                position={[5, 5, 5]}
                intensity={5}
              />
            </SpaceCanvas>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
