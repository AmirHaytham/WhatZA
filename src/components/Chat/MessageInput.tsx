import React, { useState, useRef } from 'react';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';
import EmojiPicker from './EmojiPicker';

interface MessageInputProps {
  onSend: (message: string) => void;
  onAttach: (file: File) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend, onAttach }) => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAttach(file);
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessage(prev => prev + emoji);
  };

  return (
    <div className="relative bg-[#f0f2f5] px-4 py-3">
      {/* Emoji Picker Popup */}
      {showEmoji && (
        <div className="absolute bottom-full mb-2">
          <EmojiPicker onSelect={handleEmojiSelect} onClose={() => setShowEmoji(false)} />
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Emoji Button */}
        <button 
          onClick={() => setShowEmoji(!showEmoji)}
          className="p-2 text-[#54656f] hover:bg-[#e9edef] rounded-full"
        >
          <Smile size={24} />
        </button>

        {/* Attachment Button */}
        <button 
          onClick={handleAttachClick}
          className="p-2 text-[#54656f] hover:bg-[#e9edef] rounded-full"
        >
          <Paperclip size={24} />
        </button>
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,video/*,audio/*,application/*"
        />

        {/* Message Input */}
        <div className="flex-1 bg-white rounded-lg">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message"
            className="w-full px-4 py-2 max-h-[100px] min-h-[40px] outline-none resize-y rounded-lg"
            rows={1}
          />
        </div>

        {/* Mic/Send Button */}
        {message ? (
          <button 
            onClick={handleSend}
            className="p-2 text-[#54656f] hover:bg-[#e9edef] rounded-full"
          >
            <Send size={24} />
          </button>
        ) : (
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`p-2 rounded-full ${
              isRecording ? 'text-red-500' : 'text-[#54656f]'
            } hover:bg-[#e9edef]`}
          >
            <Mic size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageInput; 