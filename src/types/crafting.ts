export type CraftingState = 'idle' | 'crafting' | 'complete';

export interface ReasoningStep {
  id: string;
  label: string;
}

export interface CraftingSceneProps {
  userPrompt: string;
  onCraftingComplete: () => void;
}
