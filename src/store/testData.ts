import { Chat, User, Message, MessageType, MessageStatus, ReplyTo } from '../features/chat/types';

interface MessageOptions {
  mediaUrl?: string;
  fileName?: string;
  fileSize?: number;
  reactions?: Array<{ emoji: string; userId: string; timestamp: Date }>;
  replyTo?: ReplyTo;
}

const createMessage = (
  id: string,
  senderId: string,
  content: string,
  type: MessageType = 'text',
  status: MessageStatus = 'sent',
  timestamp?: Date,
  options?: MessageOptions
): Message => ({
  id,
  senderId,
  content,
  type,
  status,
  timestamp: timestamp || new Date(),
  isRead: status === 'read',
  reactions: options?.reactions || [],
  mediaUrl: options?.mediaUrl,
  fileName: options?.fileName,
  fileSize: options?.fileSize,
  replyTo: options?.replyTo
});

const users: { [key: string]: User } = {
  user1: {
    id: 'user1',
    name: 'John Doe',
    status: 'online',
    lastSeen: new Date(),
    avatar: 'https://i.pravatar.cc/150?img=1',
    statusMessage: '🌟 Living the moment'
  },
  user2: {
    id: 'user2',
    name: 'Alice Smith',
    status: 'typing',
    lastSeen: new Date(),
    avatar: 'https://i.pravatar.cc/150?img=2',
    statusMessage: 'At work'
  },
  user3: {
    id: 'user3',
    name: 'Bob Johnson',
    status: 'offline',
    lastSeen: new Date(Date.now() - 3600000),
    avatar: 'https://i.pravatar.cc/150?img=3',
    statusMessage: 'Busy'
  },
  user4: {
    id: 'user4',
    name: 'Emma Wilson',
    status: 'online',
    lastSeen: new Date(),
    avatar: 'https://i.pravatar.cc/150?img=4',
    statusMessage: '✈️ Traveling'
  },
  user5: {
    id: 'user5',
    name: 'Family Group',
    status: 'online',
    lastSeen: new Date(),
    avatar: 'https://i.pravatar.cc/150?img=5',
    statusMessage: ''
  },
  currentUser: {
    id: 'currentUser',
    name: 'You',
    status: 'online',
    lastSeen: new Date(),
    avatar: 'https://i.pravatar.cc/150?img=6',
    statusMessage: 'Available'
  }
};

export const testChats: Chat[] = [
  {
    id: '1',
    participants: [users.user1],
    messages: [
      createMessage('m1', 'user1', 'Hey there! 👋', 'text', 'read', new Date(Date.now() - 3600000)),
      createMessage('m2', 'currentUser', 'Hi! How are you?', 'text', 'read', new Date(Date.now() - 3500000)),
      createMessage('m3', 'user1', 'Check out this photo!', 'image', 'read', new Date(Date.now() - 3400000), {
        mediaUrl: 'https://picsum.photos/300/200'
      }),
      createMessage('m4', 'currentUser', '😍 Beautiful!', 'text', 'read', new Date(Date.now() - 3300000), {
        reactions: [{ emoji: '❤️', userId: 'user1', timestamp: new Date() }]
      }),
      createMessage('m5', 'user1', 'Thanks! Here\'s a document for you', 'document', 'delivered', new Date(Date.now() - 3200000), {
        fileName: 'presentation.pdf',
        fileSize: 2500000
      }),
      createMessage('m9', 'currentUser', 'I\'ll check it out!', 'text', 'sent', new Date(Date.now() - 3100000), {
        replyTo: {
          messageId: 'm5',
          content: 'Thanks! Here\'s a document for you',
          senderId: 'user1',
          senderName: 'John Doe'
        }
      })
    ],
    unreadCount: 1,
    pinned: true,
    type: 'individual',
    isTyping: true
  },
  {
    id: '2',
    participants: [users.user2],
    messages: [
      createMessage('m6', 'user2', 'Meeting at 3 PM?', 'text', 'read', new Date(Date.now() - 7200000)),
      createMessage('m7', 'currentUser', 'Sure, works for me!', 'text', 'delivered', new Date(Date.now() - 7100000)),
      createMessage('m8', 'user2', '🎵 Check out this song', 'audio', 'sent', new Date(Date.now() - 7000000), {
        mediaUrl: 'path/to/audio.mp3',
        fileName: 'awesome_song.mp3'
      })
    ],
    unreadCount: 2,
    pinned: false,
    type: 'individual'
  },
  {
    id: '3',
    participants: [users.user3],
    messages: [
      createMessage('m10', 'user3', 'Hey, are we still on for tomorrow?', 'text', 'read', new Date(Date.now() - 86400000)),
      createMessage('m11', 'currentUser', 'Yes, definitely!', 'text', 'delivered', new Date(Date.now() - 82800000))
    ],
    unreadCount: 0,
    pinned: false,
    type: 'individual'
  },
  {
    id: '4',
    participants: [users.user4],
    messages: [
      createMessage('m12', 'user4', 'Check out my vacation photos!', 'image', 'read', new Date(Date.now() - 172800000), {
        mediaUrl: 'https://picsum.photos/300/200?random=1'
      }),
      createMessage('m13', 'user4', 'Having a great time!', 'text', 'read', new Date(Date.now() - 172700000))
    ],
    unreadCount: 0,
    pinned: true,
    type: 'individual'
  },
  {
    id: '5',
    participants: [users.user5],
    messages: [
      createMessage('m14', 'user1', 'Family dinner this Sunday?', 'text', 'read', new Date(Date.now() - 259200000)),
      createMessage('m15', 'user2', 'I\'m in! 🎉', 'text', 'read', new Date(Date.now() - 259100000)),
      createMessage('m16', 'user3', 'Me too!', 'text', 'read', new Date(Date.now() - 259000000))
    ],
    unreadCount: 3,
    pinned: true,
    type: 'group'
  }
];

export const currentUser = users.currentUser; 