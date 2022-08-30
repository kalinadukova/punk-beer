import { ethers } from 'ethers';
import { createContext, useState } from 'react';

import {
  WalletContextProviderProps,
  WalletContextProps,
} from './walletContextInterfaces';

const defaultWallet = {
  isDetected: false,
  walletAddress: '',
  connectWallet: () => {},
};

export const WalletContext = createContext<WalletContextProps>(defaultWallet);

export const WalletProvider: React.FC<WalletContextProviderProps> = ({
  children,
}) => {
  const [isDetected, setIsDetected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  async function connectWallet() {
    if (window.ethereum) {
      setIsDetected(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const result = await provider.send('eth_requestAccounts', []);
      setWalletAddress(result[0]);
    }
  }

  return (
    <WalletContext.Provider
      value={{ isDetected, walletAddress, connectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};
