import '../styles/globals.css';
import Head from 'next/head';
import store from '../store'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
          <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
