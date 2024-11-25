import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  qrState: {
    code?: string;
    error?: string;
    status?: 'idle' | 'scanning' | 'scanned';
  };
  setStatus: (status: 'authenticated' | 'unauthenticated') => void;
  setQRCode: (code: string) => void;
  setError: (error: string) => void;
  setQRStatus: (status: 'idle' | 'scanning' | 'scanned') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  qrState: {
    status: 'idle'
  },
  setStatus: (status) => 
    set({ isAuthenticated: status === 'authenticated' }),
  setQRCode: (code) => 
    set(state => ({ qrState: { ...state.qrState, code } })),
  setError: (error) => 
    set(state => ({ qrState: { ...state.qrState, error } })),
  setQRStatus: (status) =>
    set(state => ({ qrState: { ...state.qrState, status } }))
}));

export default useAuthStore; 