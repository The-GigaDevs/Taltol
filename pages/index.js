import { getProviders } from 'next-auth/react';
import Head from 'next/head';
import RegisterLoginModal from '../components/auth/RegisterLoginModal';

import Home from './home';
const index = ({providers}) => {
  return (
    <>
      <Head>
        <title>Taltol</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RegisterLoginModal providers={providers} />
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}