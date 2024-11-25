import styled, { css } from 'styled-components';
import { ReplyTo } from '../types';
import React from 'react';

interface MessageBubbleProps {
  isSent: boolean;
}

const MessageBubble = styled.div<MessageBubbleProps>`
  max-width: 65%;
  padding: 6px 7px 8px 9px;
  margin: 4px 0;
  border-radius: 7.5px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 0.5px rgba(11,20,26,.13);
  
  ${props => props.isSent ? css`
    background-color: #e7ffdb;
    align-self: flex-end;
    margin-right: 8px;
    border-top-right-radius: 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: -8px;
      width: 8px;
      height: 13px;
      background: radial-gradient(circle at 0 0, rgba(0,0,0,0) 13px, #e7ffdb 0);
    }
  ` : css`
    background-color: #ffffff;
    align-self: flex-start;
    margin-left: 8px;
    border-top-left-radius: 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -8px;
      width: 8px;
      height: 13px;
      background: radial-gradient(circle at 100% 0, rgba(0,0,0,0) 13px, #ffffff 0);
    }
  `}
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2px 0;
`;

const MessageStatus = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 11px;
  color: #8696a0;
  height: 15px;
`;

const TimeStamp = styled.span`
  font-size: 11px;
  color: #8696a0;
  margin-right: 18px;
  margin-left: 4px;
  margin-bottom: -4px;
  height: 15px;
  line-height: 15px;
`;

const MessageContent = styled.div`
  margin-right: 24px; // Space for timestamp and status
  margin-bottom: 4px;
  font-size: 14.2px;
  line-height: 19px;
  color: #111b21;
`;

const ReplyContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.04);
  border-left: 4px solid #25D366;
  border-radius: 4px;
  padding: 5px 8px;
  margin-bottom: 2px;
  font-size: 13px;
  max-width: 100%;
  overflow: hidden;
`;

const ReplySenderName = styled.div`
  color: #00a884;
  font-weight: 500;
  margin-bottom: 1px;
  font-size: 12.8px;
`;

const ReplyMessageContent = styled.div`
  color: #667781;
  font-size: 12.8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface ReplyMessageProps {
  replyTo: ReplyTo;
}

const ReplyMessage: React.FC<ReplyMessageProps> = ({ replyTo }) => (
  <ReplyContentWrapper>
    <ReplySenderName>{replyTo.senderName}</ReplySenderName>
    <ReplyMessageContent>{replyTo.content}</ReplyMessageContent>
  </ReplyContentWrapper>
);

export { 
  MessageBubble, 
  MessageContainer, 
  MessageStatus, 
  TimeStamp, 
  MessageContent,
  ReplyMessage
};