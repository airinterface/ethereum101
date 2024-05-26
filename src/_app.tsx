import type { AppProps } from 'next/app'
import '@/App.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
