import React from "react";
import styled from "styled-components";
import QRCodeComponent from '../QRCode';
import useAuthStore from '../../store/authStore';
import { WhatsAppIcon } from '../Icons/WhatsAppIcon';

const Container = styled.div`
  min-height: 100vh;
  background-color: #fdf5ef;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 36px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #00a884;
`;

const Title = styled.span`
  color: #00a884;
  font-size: 20px;
`;

const DownloadButton = styled.button`
  background-color: #00a884;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MainContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  padding: 48px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  max-width: 550px;
`;

const MainTitle = styled.h1`
  font-size: 28px;
  color: #1f1f1f;
  font-weight: normal;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  color: #41525d;
  margin: 0 0 32px 0;
`;

const List = styled.ol`
  list-style-position: outside;
  margin: 0;
  padding-left: 24px;
`;

const ListItem = styled.li`
  color: #1f1f1f;
  margin-bottom: 18px;
  padding-left: 8px;
`;

const Links = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  color: #008069;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid #008069;
  display: inline-block;
  width: fit-content;
  
  &:hover {
    text-decoration: none;
  }
`;

const TestLoginLink = styled(Link)`
  margin-top: 16px;
  color: #667781;
  font-size: 14px;
  border-bottom: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 20px;
  color: #8696a0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const WhatsAppLoginPage: React.FC = () => {
  const { setStatus } = useAuthStore();

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Logo>
            <WhatsAppIcon />
            <Title>WhatsApp</Title>
          </Logo>
        </HeaderLeft>
        <DownloadButton>
          Download ↓
        </DownloadButton>
      </Header>
      <MainContent>
        <Card>
          <ContentWrapper>
            <LeftSection>
              <MainTitle>Log into WhatsApp Web</MainTitle>
              <Description>
                Message privately with friends and family using WhatsApp on your browser.
              </Description>
              <List>
                <ListItem>Open WhatsApp on your phone</ListItem>
                <ListItem>
                  Tap Menu <span style={{ color: '#667781' }}>⋮</span> on Android, or Settings <span>⚙️</span> on iPhone
                </ListItem>
                <ListItem>Tap Linked devices and then Link a device</ListItem>
                <ListItem>Point your phone at this screen to scan the QR code</ListItem>
              </List>
              <Links>
                <Link>Need help getting started?</Link>
                <Link>Log in with phone number</Link>
                <TestLoginLink onClick={() => setStatus('authenticated')}>
                  Test Login (Dev Only)
                </TestLoginLink>
              </Links>
            </LeftSection>
            <QRCodeComponent />
          </ContentWrapper>
        </Card>
      </MainContent>
      <Footer>
        <span>🔒</span>
        Your personal messages are end-to-end encrypted
      </Footer>
    </Container>
  );
};

export default WhatsAppLoginPage; 