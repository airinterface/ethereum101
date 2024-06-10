import '@/styles/globals.scss';
import type { AppProps } from 'next/app'
import Layout from '@/layout'
import WalletWrapper from '@/context/WalletWrapper'
import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [ isClient, setIsClient ] = useState<boolean>(false)

  useEffect(()=>{
    setIsClient(typeof window !== 'undefined')
  }, [])
  if( ! isClient ) return <Loading />
    
  return <Layout>
          <WalletWrapper> 
            <Component {...pageProps} />
          </WalletWrapper>
         </Layout>
}
