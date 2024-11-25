import React from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import useAuthStore from '../store/authStore';

const QRContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const WhatsAppLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  img {
    width: 30px;
    height: 30px;
  }
`;

const QRWrapper = styled.div<{ isScanning: boolean }>`
  animation: ${props => props.isScanning ? 'pulse 2s infinite' : 'none'};
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Instructions = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #667781;
  font-size: 14px;
`;

const QRCodeComponent: React.FC = () => {
  const { qrState } = useAuthStore();

  return (
    <QRContainer>
      <QRWrapper isScanning={qrState.status === 'scanning'}>
        <QRCode 
          value={qrState.code || "whatsapp-web-demo"}
          size={264}
          level="H"
          includeMargin={true}
        />
      </QRWrapper>
      <WhatsAppLogo>
        <img 
          src="./whatsapp-logo.png" 
          alt="WhatsApp"
        />
      </WhatsAppLogo>
      <Instructions>
        Get started by scanning the QR code
      </Instructions>
    </QRContainer>
  );
};

export default QRCodeComponent; 