import "../styles/globals.css";
import "../styles/main.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
