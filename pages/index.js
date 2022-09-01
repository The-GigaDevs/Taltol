import Link from 'next/link';
import Head from 'next/head';
import RegisterLoginModal from '../components/RegisterLoginModal';
function index() {
  return (
    <>
      <Head>
        <title>Quotes Planner Login</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RegisterLoginModal />
    </>
  );
}

export default index;
