export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageType = 'text' | 'image' | 'video' | 'audio' | 'document' | 'gif';
export type UserStatus = 'online' | 'offline' | 'typing';

export interface User {
  id: string;
  name: string;
  avatar?: string;
  status: UserStatus;
  lastSeen: Date;
  statusMessage?: string;
}

export interface Reaction {
  emoji: string;
  userId: string;
  timestamp: Date;
}

export interface ReplyTo {
  messageId: string;
  content: string;
  senderId: string;
  senderName: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: MessageType;
  status: MessageStatus;
  reactions?: Reaction[];
  mediaUrl?: string;
  fileName?: string;
  fileSize?: number;
  isRead: boolean;
  replyTo?: ReplyTo;
}

export interface Chat {
  id: string;
  participants: User[];
  messages: Message[];
  unreadCount: number;
  pinned: boolean;
  type: 'individual' | 'group';
  lastTypingUser?: string;
  isTyping?: boolean;
} 