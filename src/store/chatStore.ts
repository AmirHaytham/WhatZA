import create from 'zustand';
import { Chat, Message } from '../features/chat/types';

interface ChatStore {
  chats: Chat[];
  currentChat: string | null;
  messages: Message[];
  addMessage: (chatId: string, message: Message) => void;
  setCurrentChat: (chatId: string) => void;
  updateMessageStatus: (messageId: string, status: 'sent' | 'delivered' | 'read') => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  currentChat: null,
  messages: [],
  
  addMessage: (chatId, message) => 
    set((state) => ({
      messages: [...state.messages, message]
    })),
    
  setCurrentChat: (chatId) => 
    set({ currentChat: chatId }),
    
  updateMessageStatus: (messageId, status) =>
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === messageId ? { ...msg, status } : msg
      )
    }))
})); 