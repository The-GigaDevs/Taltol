import '../styles/globals.css';
import Head from 'next/head';
import store from '../store'
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
