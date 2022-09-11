import '../styles/globals.css';
import Head from 'next/head';
import store from '../store'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component,
  pageProps: { session, ...pageProps }, }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
