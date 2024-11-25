import React from 'react';
import { Message } from '../../features/chat/types';
import { format } from 'date-fns';

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isCurrentUser }) => {
  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return <span className="text-[#53bdeb]">✓✓</span>;
      default:
        return '⌚'; // pending
    }
  };

  return (
    <div
      className={`flex flex-col max-w-[65%] ${
        isCurrentUser ? 'ml-auto items-end' : 'mr-auto items-start'
      }`}
    >
      <div
        className={`px-3 py-2 rounded-lg relative ${
          isCurrentUser ? 'bg-[#d9fdd3]' : 'bg-white'
        }`}
      >
        {/* Message Content */}
        {message.type === 'text' && (
          <p className="text-[#111b21] text-[14.2px] leading-[19px] whitespace-pre-wrap">
            {message.content}
          </p>
        )}

        {message.type === 'image' && (
          <div className="max-w-sm rounded-lg overflow-hidden">
            <img src={message.content} alt="Shared" className="w-full h-auto" />
          </div>
        )}

        {/* Reply Preview if exists */}
        {message.replyTo && (
          <div className="bg-[#f0f0f0] rounded p-2 mb-1 border-l-4 border-[#25D366]">
            <p className="text-sm text-gray-600 truncate">
              {message.replyTo.content}
            </p>
          </div>
        )}

        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <div className="absolute -bottom-3 right-2 bg-white rounded-full px-2 py-0.5 shadow-md flex gap-0.5">
            {message.reactions.map((reaction, index) => (
              <span key={index} className="text-xs">
                {reaction.emoji}
              </span>
            ))}
          </div>
        )}

        {/* Timestamp and Status */}
        <div className="flex items-center gap-1 mt-1 min-w-[65px]">
          <span className="text-[11px] text-[#667781] ml-auto">
            {format(message.timestamp, 'HH:mm')}
          </span>
          {isCurrentUser && (
            <span className="text-[#8696a0] text-[15px]">
              {getStatusIcon(message.status)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble; 