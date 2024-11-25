import React from 'react';
import styled from 'styled-components';
import type { UserStatus } from '../../features/chat/types';
import { formatDistanceToNow } from 'date-fns';

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background-color: #f0f2f5;
  border-bottom: 1px solid #e0e0e0;
  z-index: 2;
`;

const Avatar = styled.div<{ url?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  background-image: ${props => props.url ? `url(${props.url})` : 'none'};
  background-size: cover;
  background-position: center;
  margin-right: 12px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #111b21;
`;

const UserStatus = styled.div<{ isOnline?: boolean }>`
  font-size: 13px;
  color: ${props => props.isOnline ? '#00a884' : '#667781'};
`;

interface ChatHeaderProps {
  name: string;
  status: UserStatus;
  avatar?: string;
  lastSeen: Date;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  status,
  avatar,
  lastSeen
}) => {
  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'online';
      case 'typing':
        return 'typing...';
      case 'offline':
        return `last seen ${formatDistanceToNow(lastSeen, { addSuffix: true })}`;
      default:
        return '';
    }
  };

  return (
    <Header>
      <Avatar url={avatar} />
      <UserInfo>
        <UserName>{name}</UserName>
        <UserStatus isOnline={status === 'online'}>
          {getStatusText()}
        </UserStatus>
      </UserInfo>
    </Header>
  );
}; 