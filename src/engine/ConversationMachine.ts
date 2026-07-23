import { Message, ConversationState, TravelInfo, Question } from '../types/conversation';

export type ConversationAction =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'SET_COMPLETE'; payload: boolean }
  | { type: 'UPDATE_ANSWER'; payload: { field: string; value: string } }
  | { type: 'RESET'; payload: { initialAnswers: TravelInfo; initialMessages: Message[] } };

export function conversationReducer(state: ConversationState, action: ConversationAction): ConversationState {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case 'SET_TYPING':
      return {
        ...state,
        isTyping: action.payload
      };
    case 'SET_COMPLETE':
      return {
        ...state,
        isComplete: action.payload
      };
    case 'UPDATE_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.field]: action.payload.value
        }
      };
    case 'RESET':
      return {
        messages: action.payload.initialMessages,
        isTyping: false,
        isComplete: false,
        answers: action.payload.initialAnswers
      };
    default:
      return state;
  }
}
