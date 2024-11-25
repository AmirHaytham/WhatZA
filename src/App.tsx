import React from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { GlobalStyle } from './styles/GlobalStyle';
import useAuthStore from './store/authStore';
import WhatsAppLoginPage from './components/Login/WhatsAppLoginPage';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <GlobalStyle />
      {isAuthenticated ? (
        <MainLayout />
      ) : (
        <WhatsAppLoginPage />
      )}
    </>
  );
}

export default App; 