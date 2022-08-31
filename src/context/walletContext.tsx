import { ethers } from 'ethers';
import { createContext, useState } from 'react';

import {
  WalletContextProviderProps,
  WalletContextProps,
} from './walletContextInterfaces';

const defaultWallet = {
  isDetected: false,
  walletAddress: '',
  setWalletAddress: (walletAddress: string) => {},
  connectWallet: () => {},
  checkLocalStorage: () => {},
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

      localStorage.setItem('walletAddress', JSON.stringify(result[0]));
      setWalletAddress(result[0]);
    }
  }

  function checkLocalStorage() {
    let tempWallet = localStorage.getItem('walletAddress');

    if (tempWallet) {
      setWalletAddress(tempWallet);
    }
  }

  return (
    <WalletContext.Provider
      value={{
        isDetected,
        walletAddress,
        setWalletAddress,
        connectWallet,
        checkLocalStorage,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
