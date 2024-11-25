import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f2f5;
  z-index: 2;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 9px 12px;
  border: none;
  border-radius: 8px;
  background-color: white;
  font-size: 15px;
  
  &:focus {
    outline: none;
  }
`;

const IconButton = styled.button`
  padding: 8px;
  background: none;
  border: none;
  color: #54656f;
  cursor: pointer;
  font-size: 20px;
  
  &:hover {
    color: #00a884;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

export const Input: React.FC = () => {
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload
      console.log('File selected:', file);
    }
  };

  return (
    <InputContainer>
      <IconButton onClick={handleFileSelect}>📎</IconButton>
      <IconButton>😊</IconButton>
      <StyledInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
      />
      <IconButton 
        onClick={handleSend}
        style={{ color: message.trim() ? '#00a884' : '#54656f' }}
      >
        ➤
      </IconButton>
    </InputContainer>
  );
}; 