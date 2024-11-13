import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";
import "./App.css";
import WhatsAppLogo from "./whatsapp-logo.svg";
import { FaDownload } from "react-icons/fa";

const WhatsAppLoginPage = () => {
  const handleDownloadClick = () => {
    window.location.href = "https://www.whatsapp.com/download";
  };

  const whatsappNumber = "201061965352";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const qrRef = useRef(null);

  useEffect(() => {
    QRCode.toCanvas(qrRef.current, whatsappLink, { width: 240 }, function (error) {
      if (error) console.error(error);
      console.log("QR code generated!");
    });
  }, [whatsappLink]);

  return (
    <div className="login-container">
      <header className="header">
        <div className="logo">
          <img src={WhatsAppLogo} alt="WhatsApp Logo" className="logo-img" />
          <span>WhatsApp</span>
        </div>
        <button className="download-button" onClick={handleDownloadClick}>
          Download <FaDownload className="download-icon" />
        </button>
      </header>
      <main className="main-content">
        <div className="login-instructions-container">
          <div className="login-instructions">
            <h2>Log into WhatsApp Web</h2>
            <p>Message privately with friends and family using WhatsApp on your browser.</p>
            <ol>
              <li>Open WhatsApp on your phone</li>
              <li>
                Tap Menu <span className="menu-icon">&#8942;</span> on Android, or Settings{" "}
                <span className="settings-icon">&#9881;</span> on iPhone
              </li>
              <li>Tap Linked devices and then Link a device</li>
              <li>Point your phone at this screen to scan the QR code</li>
            </ol>
            <a href="https://faq.whatsapp.com/" className="help-link">
              Need help getting started?
            </a>
            <br />
            <a href="/phone-login" className="phone-login-link">
              Log in with phone number
            </a>
          </div>
          <div className="qr-code-container">
            <canvas ref={qrRef} />
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>
          <span className="lock-icon">&#x1F512;</span> Your personal messages are end-to-end encrypted
        </p>
      </footer>
    </div>
  );
};

export default WhatsAppLoginPage;
