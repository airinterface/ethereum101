// src/pages/Home.tsx

import Head from 'next/head'

import React, { useState, useEffect } from 'react';
import MyComponent from '../components/MyComponent'
import '@/types.d'


enum Web3Status {
    WalletExists = 'Wallet exists',
    AccountConnected = 'Account connected',
    NoWallet = 'No wallet'
}


export default () =>{
  const [state, setState] = useState<Web3Status>(Web3Status.NoWallet);
  const [account, setAccount] = useState<string|null>(null);


  const updateAccounts = (accounts: string[] ) => {
      if (accounts.length > 0) {
          // Account connected
        setAccount( accounts[0] );
        console.log('Account connected:', accounts[0]);
      } else {
          // No accounts available or disconnected
        setAccount( null );
        console.log('No accounts available or disconnected');
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



  /* 1. Check wallet status */

  const checkWalletStatus = async () => {
    console.log(`Checking Wallet Status`);
    if( typeof window.ethereum === 'undefined' ) {
      setState(Web3Status.NoWallet)
    } else {
      setState(Web3Status.WalletExists)
      console.log(`Checking wallet account`);
      bindAccountConnectionListener();
      checkAccount();
    }
  }


  /* 2. Check wallet account status */
  const checkAccount = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      if (accounts.length > 0) {
          // Account is connected, set the account address
          console.log(`User account connected: ${accounts[0]}`);
          updateAccounts(accounts)
          setState( Web3Status.AccountConnected );
      } else {
          // No accounts available
          updateAccounts([])
      }
    }
    catch ( e ){
      console.error('Error connecting account:', e);
      setAccount(null);
    }

  }


  /* 3. User Initiated connect account */
  const onConnectAccount = async ()=> {
    if( window.ethereum ) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        if (accounts.length > 0) {
          // Account connected successfully, set the account address
          console.log(`User account connected: ${accounts[0]}`);
          setAccount(accounts[0]);
        } else {
          // User denied account access or no accounts available
          setAccount(null);
          console.log('User denied account access or no accounts available');
        }
      } catch ( error ) {
        console.error('Error connecting account:', error);
        setAccount(null);
      }
    }
  }


  /* when the page is loaded, first check ethereum wallet is available */
  useEffect(()=> {
    if( typeof window != 'undefined') {
      checkWalletStatus();
      return removeAccountConnectionListener;
    }
    /* when this node is removed, remove listener as well */
  }, [])

  return (
    <>
      <Head>
        <title>Web3 Ethereum 101 - Home</title>
      </Head>

      <MyComponent active={state === Web3Status.NoWallet} title={"Connect with Wallet"} />
      <MyComponent active={state === Web3Status.WalletExists} title={"Wallet Available"} />
      <MyComponent active={state === Web3Status.AccountConnected} title={`Account: ${account}`} />

      { ( state == Web3Status.WalletExists &&  account === null) &&  <button
            onClick={onConnectAccount}
          >
            connect account
          </button> }
    </>
  );
};

