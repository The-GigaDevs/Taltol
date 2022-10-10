import Head from 'next/head';
import Footer from '../components/Footer';
import MoodEmoji from '../components/MoodEmoji';
import Navbar from '../components/Navbar';
import Content from './content';
import { Provider } from 'react-redux';
import store from '../store';
import MobileMenu from '../components/MobileMenu';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { fetchLikedQuotes } from '../slices/likes.slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Home = ({ session }) => {
  console.log(session, "Session from NextAuth");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLikedQuotes());
  }, []);

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
      <MobileMenu />
      <Navbar />
      <main className="home-main">
        <MoodEmoji />

        <Provider store={store}>
          <Content />
        </Provider>
      </main>

      <Footer />
    </>
  );
};

export default Home;


export async function getServerSideProps(ctx) {
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  return {
    props: { session },
  }
}