import { getProviders } from 'next-auth/react';
import Head from 'next/head';
import RegisterLoginModal from '../components/auth/RegisterLoginModal';
import { SessionProvider } from 'next-auth/react';
import { useSession} from 'next-auth/react';

const index = ({providers}) => {
    const { data: session, status } = useSession();
    console.log(session, 'session');
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
      <SessionProvider session={session}>
          <RegisterLoginModal providers={providers} />
      </SessionProvider>
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