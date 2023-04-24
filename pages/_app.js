import { SessionProvider } from 'next-auth/react'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <main className='main'>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}

export default MyApp