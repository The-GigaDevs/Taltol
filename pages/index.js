import Head from 'next/head';
import Footer from '../components/Footer';
import MoodEmoji from '../components/MoodEmoji';
import Navbar from '../components/Navbar';
import Content from './content';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import MobileMenu from '../components/MobileMenu';
import { fetchLikedQuotes } from '../slices/likes.slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authenticateUser, isUserLoggedIn } from '../slices/auth.slice';
import { useRouter } from 'next/router';

const Home = ({ session }) => {
  const dispatch = useDispatch();
  const authRedux = useSelector(state =>  state.auth);
  const router = useRouter();

  useEffect(()=> {
    if(authRedux?.user?.email === 'abdulhameid.grandoka@gmail.com') {
      router.push('/admin/admin-quotes')
    } else {
      dispatch(fetchLikedQuotes());
    }
  }, [authRedux.user, dispatch])
  
  useEffect(()=> {
    dispatch(isUserLoggedIn());
    
  }, [authRedux?.isAuthenticated])

  
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

export async function getStaticProps() {
  return { props: {} }
}