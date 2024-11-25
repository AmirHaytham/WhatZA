import React from 'react';
import styled from 'styled-components';
import { ChatList } from '../Chat/ChatList';
import ChatInterface from '../ChatInterface';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #111b21;
`;

const Sidebar = styled.div`
  width: 400px;
  min-width: 400px;
  background: #ffffff;
  border-right: 1px solid #e9edef;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: #f0f2f5;
  height: 59px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
`;

const IconsSection = styled.div`
  display: flex;
  gap: 10px;
  color: #54656f;
`;

const SearchContainer = styled.div`
  padding: 8px;
  background-color: #ffffff;
`;

const SearchBar = styled.div`
  background-color: #f0f2f5;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  flex: 1;
  outline: none;
  font-size: 15px;
  color: #111b21;
  
  &::placeholder {
    color: #667781;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  background-color: #f0f2f5;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 127px;
    background-color: #00a884;
  }
`;

export const MainLayout: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader>
          <ProfileSection>
            <Avatar />
          </ProfileSection>
          <IconsSection>
            <span>🔄</span>
            <span>💬</span>
            <span>⋮</span>
          </IconsSection>
        </SidebarHeader>
        <SearchContainer>
          <SearchBar>
            <span>🔍</span>
            <SearchInput placeholder="Search or start new chat" />
          </SearchBar>
        </SearchContainer>
        <ChatList />
      </Sidebar>
      <MainContent>
        <ChatInterface />
      </MainContent>
    </Container>
  );
}; 