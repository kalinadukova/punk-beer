import { ReactNode } from 'react';

export interface WalletContextProviderProps {
  children: ReactNode;
}

export interface WalletContextProps {
  isDetected: boolean;
  walletAddress: string;
  setWalletAddress: (walletAddress: string) => void;
  connectWallet: () => void;
  checkLocalStorage: () => void;
}
