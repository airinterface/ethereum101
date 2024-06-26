import React, { useEffect, useState, createContext, useContext } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContractContextProvider from './ContractContext'


import {getWagmiConfig} from '@/config'


/* 
  Wraps state and actions for 
  children 
*/
export enum Web3Status {
    WalletExists = 'Wallet exists',
    AccountConnected = 'Account connected',
    NoWallet = 'No wallet'
}


/* --- wagmi library context ------------------------*/
const queryClient = new QueryClient()

interface WalletWrapperPropsType {
  config: any; // Add type for config if necessary
  children: React.ReactNode;
}


const WalletWrapper: React.FC<WalletWrapperPropsType> = ({ config, children }) => {
  // Create a query client
1
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ContractContextProvider>
        {children}
        </ContractContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};


/* --- wrapper that uses wagmi ------------------------*/

export type WalletStateTypes = { 
  walletState: Web3Status
}

export type WalletActionTypes = {
  connect: ()=> void
}


/* Defining default actions */
const defaultWalletActions: WalletActionTypes = {
  connect: async ()=> {}
}

/* Defining default state */
const defaultWalletState:WalletStateTypes  = {
  walletState: Web3Status.NoWallet
}


const WalletContext = createContext([defaultWalletState, defaultWalletActions])


type WalletContextProviderPropType = {
  children: React.ReactNode
}




const WalletContextProvider = ({children}:WalletContextProviderPropType )=> {
  const [ currentState, setState ] = useState<WalletStateTypes>(defaultWalletState)

  const action = {
    ...defaultWalletActions,
    connect: ()=>{
      if( window.ethereum ) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
      }
    }
  }

  /* get account list */
  const updateAccounts = (accounts: string[] ) => {
      if (accounts.length > 0) {
          // Account connected
        setState({
          ...currentState,
          walletState: Web3Status.AccountConnected
        })
        console.log('Account connected:', accounts[0]);
      } else {
          // No accounts available or disconnected
        setState({
          ...currentState,
          walletState: Web3Status.WalletExists
        })
        console.log('Wallet available');
      }
  };



  /* this function listen to account status change event */
  const bindAccountConnectionListener = ()=>{
      // Subscribe to the 'accountsChanged' event
    if( window.ethereum ) {
      window.ethereum.on('accountsChanged', updateAccounts);
    }
  }

  /* this function remove listener from account status change event */
  const removeAccountConnectionListener = ()=> {
    if( window.ethereum ) {
      window.ethereum.removeListener('accountsChanged', updateAccounts);
    }
  }




  /* checking if wallet is installed 
    I couldn't find wagmi support for this. 
  */
  useEffect(()=>{

    /**
     * Check if wallet is available or not. 
     */
    if( typeof window != 'undefined' ){
      if( window.ethereum ){
        /**
         * if available, start listening account connection
         * Check if wallet is available or not. 
         */
        setState({
          ...currentState,
          walletState: Web3Status.WalletExists
        });
        /* listen to wallet account changes */
        bindAccountConnectionListener();
        return removeAccountConnectionListener;
      } else {
        setState({
          ...currentState,
          walletState: Web3Status.NoWallet
        })
      }
    }
  }, [])


  const values = [ currentState, action ];
  return <WalletContext.Provider value={ values }>
            <WalletWrapper config={getWagmiConfig()}>
              {children}
            </WalletWrapper>
        </WalletContext.Provider>
}

export const useWalletContext = ()=> useContext(WalletContext)

export default WalletContextProvider;
