import '../styles/globals.css';
import Head from 'next/head';
import store from '../store'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
          <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
