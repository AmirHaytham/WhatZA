import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import useAuthStore from '../../store/authStore';

const QRContainer = styled.div`
  background: white;
  padding: 20px;
  position: relative;
  width: fit-content;
`;

const QRWrapper = styled.div`
  position: relative;
  width: 264px;
  height: 264px;
  background: white;
`;

const WhatsAppLogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Instructions = styled.div`
  margin-top: 12px;
  color: #667781;
  font-size: 14px;
  text-align: center;
`;

const QRCodeComponent: React.FC = () => {
  return (
    <QRContainer>
      <QRWrapper>
        <QRCode 
          value="https://web.whatsapp.com"
          size={264}
          level="L"
          includeMargin={false}
          style={{ 
            width: '100%', 
            height: '100%',
          }}
          bgColor="#FFFFFF"
          fgColor="#111B21"
          renderAs="svg"
        />
        <WhatsAppLogoContainer>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path fill="#00E676" d="M20,2.5C10.3,2.5,2.5,10.3,2.5,20c0,3.1,0.8,6.1,2.4,8.7L2.5,37.5l9-2.3c2.5,1.4,5.3,2.1,8.2,2.1 c9.7,0,17.5-7.8,17.5-17.5C37.5,10.3,29.7,2.5,20,2.5z"/>
            <path fill="#FFFFFF" d="M29.1,25.8c-0.3,0.9-1.8,1.7-2.5,1.8c-0.7,0.1-1.3,0.5-4.5-0.9c-3.8-1.7-6.2-6-6.4-6.3 c-0.2-0.3-1.6-2.1-1.6-4c0-1.9,1-2.8,1.3-3.2c0.3-0.4,0.7-0.5,1-0.5c0.2,0,0.5,0,0.7,0c0.2,0,0.5-0.1,0.8,0.6 c0.3,0.7,1,2.5,1.1,2.7c0.1,0.2,0.2,0.4,0,0.7c-0.1,0.3-0.2,0.4-0.4,0.7c-0.2,0.2-0.4,0.5-0.6,0.7c-0.2,0.2-0.4,0.4-0.2,0.8 c0.2,0.4,1,1.7,2.1,2.8c1.4,1.4,2.6,1.8,3,2c0.4,0.2,0.6,0.2,0.8-0.1c0.2-0.3,1-1.1,1.2-1.5c0.2-0.4,0.5-0.3,0.8-0.2 c0.3,0.1,2.1,1,2.4,1.2c0.3,0.2,0.6,0.3,0.7,0.4C29.4,24.1,29.4,24.9,29.1,25.8z"/>
          </svg>
        </WhatsAppLogoContainer>
      </QRWrapper>
      <Instructions>
        Get started by scanning the QR code
      </Instructions>
    </QRContainer>
  );
};

export default QRCodeComponent;