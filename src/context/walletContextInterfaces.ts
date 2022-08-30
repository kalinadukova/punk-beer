import { ReactNode } from 'react';

export interface WalletContextProviderProps {
  children: ReactNode;
}

export interface WalletContextProps {
  isDetected: boolean;
  walletAddress: string;
  connectWallet: () => void;
}
