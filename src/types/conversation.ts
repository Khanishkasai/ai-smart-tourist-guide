export interface Option {
  id: string;
  text: string;
  value: string;
}

export interface Question {
  id: string;
  field: string;
  question: string;
  successReply: string;
  options: Option[];
  required: boolean;
}

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: number;
}

export interface TravelInfo {
  destination?: string;
  duration?: string;
  season?: string;
  budget?: string;
  travelers?: string;
  style?: string;
}

export interface ConversationState {
  messages: Message[];
  isComplete: boolean;
  isTyping: boolean;
  answers: TravelInfo;
}
