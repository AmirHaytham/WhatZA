import React from 'react';
import styled from 'styled-components';
import { MessageBubble, MessageContainer, MessageStatus, TimeStamp, MessageContent, ReplyMessage } from './MessageBubble';
import { CheckIcon, DoubleCheckIcon } from './Icons';
import { Message as MessageType, Reaction as ReactionType } from '../types';

const MediaContainer = styled.div`
  max-width: 300px;
  margin-bottom: 4px;
  
  img, video {
    width: 100%;
    border-radius: 7.5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const DocumentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-bottom: 4px;
`;

const ReactionContainer = styled.div`
  display: flex;
  gap: 2px;
  margin: -2px 24px 2px 0;
`;

const Reaction = styled.div`
  background: white;
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 12px;
  box-shadow: 0 1px 1px rgba(11,20,26,.13);
  display: flex;
  align-items: center;
  gap: 2px;
  
  &:hover {
    background: #f0f2f5;
  }
`;

const ReactionCount = styled.span`
  font-size: 11px;
  color: #667781;
  margin-left: 2px;
`;

const TypingIndicator = styled.div`
  padding: 8px;
  font-size: 14px;
  color: #667781;
`;

const ReplyContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 4px solid #25D366;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 4px;
  max-width: 100%;
`;

const ReplyContent = styled.div`
  font-size: 13px;
  color: #667781;
`;

const ReplySender = styled.div`
  font-size: 13px;
  color: #00a884;
  font-weight: 500;
  margin-bottom: 2px;
`;

interface MessageProps {
  message: MessageType;
  isSent: boolean;
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const renderMediaContent = (message: MessageType) => {
  switch (message.type) {
    case 'image':
      return <MediaContainer>
        <img src={message.mediaUrl} alt="Shared" loading="lazy" />
      </MediaContainer>;
    case 'video':
      return <MediaContainer>
        <video controls src={message.mediaUrl} />
      </MediaContainer>;
    case 'audio':
      return <audio controls src={message.mediaUrl} style={{ width: '250px' }} />;
    case 'document':
      return (
        <DocumentContainer>
          <span>📄</span>
          <div>
            <div>{message.fileName}</div>
            {message.fileSize && <small>{formatFileSize(message.fileSize)}</small>}
          </div>
        </DocumentContainer>
      );
    default:
      return null;
  }
};

export const Message: React.FC<MessageProps> = ({ message, isSent }) => {
  const renderStatus = () => {
    if (!isSent) return null;
    
    switch (message.status) {
      case 'sent':
        return <CheckIcon />;
      case 'delivered':
        return <DoubleCheckIcon color="#8696a0" />;
      case 'read':
        return <DoubleCheckIcon color="#53bdeb" />;
      default:
        return null;
    }
  };

  const groupReactions = (reactions: ReactionType[]): Record<string, ReactionType[]> => {
    return reactions.reduce((acc, reaction) => {
      const key = reaction.emoji;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(reaction);
      return acc;
    }, {} as Record<string, ReactionType[]>);
  };

  return (
    <MessageContainer>
      <MessageBubble isSent={isSent}>
        {message.replyTo && <ReplyMessage replyTo={message.replyTo} />}
        {renderMediaContent(message)}
        <MessageContent>{message.content}</MessageContent>
        {message.reactions && message.reactions.length > 0 && (
          <ReactionContainer>
            {Object.entries(groupReactions(message.reactions)).map(([emoji, reactions]) => (
              <Reaction key={emoji}>
                {emoji}<ReactionCount>{reactions.length}</ReactionCount>
              </Reaction>
            ))}
          </ReactionContainer>
        )}
        <TimeStamp>
          {message.timestamp.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })}
        </TimeStamp>
        <MessageStatus>
          {renderStatus()}
        </MessageStatus>
      </MessageBubble>
    </MessageContainer>
  );
}; 