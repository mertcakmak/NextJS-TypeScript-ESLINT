import type { AppProps } from 'next/app'
import '@lib/styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
