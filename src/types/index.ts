export interface VibePreset {
  id: string;
  emoji: string;
  title: string;
  promptText: string;
  destination: string;
  themeGlow: 'tokyo' | 'swiss' | 'paris' | 'iceland' | 'amalfi';
  estimatedBudget: string;
  durationDays: number;
}

export type EnvironmentalTheme = 'default' | 'tokyo' | 'swiss' | 'paris' | 'iceland' | 'amalfi';

export interface PromptInputState {
  value: string;
  isFocused: boolean;
  isSubmitting: boolean;
}

export interface SoundState {
  isMuted: boolean;
  volume: number;
}

export interface AppState {
  currentView: 'landing' | 'crafting' | 'globe' | 'spatial-map' | 'journey-pass';
  environmentalTheme: EnvironmentalTheme;
  activePrompt: string;
  sound: SoundState;
  savedJourneysCount: number;
}
