import '@/styles/globals.scss';
import type { AppProps } from 'next/app'
import Layout from '@/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
            <Component {...pageProps} />
         </Layout>
}
