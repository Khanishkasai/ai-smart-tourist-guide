export type EnvironmentalTheme = 'default' | 'tokyo' | 'swiss' | 'paris' | 'iceland' | 'amalfi';

export interface VibePreset {
  id: string;
  badge: string;
  emoji: string;
  title: string;
  promptText: string;
  themeGlow: EnvironmentalTheme;
  accentColor: string;
}

export type SoundState = 'muted' | 'playing';

export interface AppState {
  promptValue: string;
  activePreset: VibePreset | null;
  theme: EnvironmentalTheme;
  soundState: SoundState;
}
