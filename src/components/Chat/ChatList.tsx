import React from 'react';
import { Chat } from '../../features/chat/types';
import { useChatStore } from '../../store/chatStore';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

const ChatListContainer = styled.div`
  background: white;
  height: 100%;
  overflow-y: auto;
`;

const ChatItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f2f5;
  cursor: pointer;
  background: ${props => props.isSelected ? '#f0f2f5' : 'white'};

  &:hover {
    background: #f5f6f6;
  }
`;

const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: #ddd;
  margin-right: 12px;
  flex-shrink: 0;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const ChatName = styled.div`
  font-weight: 500;
  color: #111b21;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastMessageTime = styled.div`
  font-size: 12px;
  color: #667781;
`;

const LastMessage = styled.div`
  color: #667781;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UnreadCount = styled.div`
  background: #25d366;
  color: white;
  border-radius: 16px;
  padding: 0 6px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 8px;
`;

export const ChatList: React.FC = () => {
  const { chats, currentChat, setCurrentChat } = useChatStore();

  return (
    <ChatListContainer>
      {chats.map((chat) => (
        <ChatItem 
          key={chat.id} 
          isSelected={currentChat === chat.id}
          onClick={() => setCurrentChat(chat.id)}
        >
          <Avatar />
          <ChatInfo>
            <ChatHeader>
              <ChatName>{chat.participants[0].name}</ChatName>
              <LastMessageTime>
                {chat.messages.length > 0 && 
                  formatDistanceToNow(chat.messages[chat.messages.length - 1].timestamp, { 
                    addSuffix: true 
                  })
                }
              </LastMessageTime>
            </ChatHeader>
            <LastMessage>
              {chat.messages.length > 0 ? 
                chat.messages[chat.messages.length - 1].content : 
                'No messages yet'
              }
            </LastMessage>
          </ChatInfo>
          {chat.unreadCount > 0 && (
            <UnreadCount>{chat.unreadCount}</UnreadCount>
          )}
        </ChatItem>
      ))}
    </ChatListContainer>
  );
}; 