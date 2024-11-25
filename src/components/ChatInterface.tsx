import React from 'react';
import styled from 'styled-components';
import { Message } from '../features/chat/components/Message';
import { ChatHeader } from './Chat/ChatHeader';
import { Input } from './Input';
import { useChatStore } from '../store/chatStore';
import { testChats, currentUser } from '../store/testData';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #efeae2;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path-to-your-chat-background.png');
    opacity: 0.06;
    z-index: 1;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  z-index: 2;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #374045;
    border-radius: 3px;
  }
`;

const TypingIndicator = styled.div`
  padding: 8px 12px;
  color: #667781;
  font-size: 13px;
  font-style: italic;
`;

export const ChatInterface: React.FC = () => {
  const { currentChat } = useChatStore();
  
  // For demo purposes, use the first chat
  const activeChat = testChats[0];
  const otherParticipant = activeChat.participants[0];

  return (
    <ChatContainer>
      <ChatHeader 
        name={otherParticipant.name}
        status={otherParticipant.status}
        avatar={otherParticipant.avatar}
        lastSeen={otherParticipant.lastSeen}
      />
      <MessagesContainer>
        {activeChat.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isSent={message.senderId === currentUser.id}
          />
        ))}
        {activeChat.isTyping && (
          <TypingIndicator>
            {otherParticipant.name} is typing...
          </TypingIndicator>
        )}
      </MessagesContainer>
      <Input />
    </ChatContainer>
  );
};

export default ChatInterface; 