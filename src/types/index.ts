export type AuthStatus = 'pending' | 'scanning' | 'authenticated' | 'expired';

export interface QRCodeState {
  qrData: string | null;
  status: AuthStatus;
  sessionId: string | null;
  error: string | null;
}

export interface AuthStore {
  qrState: QRCodeState;
  isAuthenticated: boolean;
  setQRData: (data: string) => void;
  setStatus: (status: AuthStatus) => void;
  setSession: (id: string) => void;
  setError: (error: string | null) => void;
  reset: () => void;
} 