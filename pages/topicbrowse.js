import Head from 'next/head';
import Footer from '../components/Footer';
import MoodEmoji from '../components/MoodEmoji';
import Navbar from '../components/Navbar';
import Content from './content';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
import MobileMenu from '../components/MobileMenu';
import TopicBrowseMobile from '../components/TopicBrowseMobile';

const topicbrowse = ({ session }) => {
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
      <main>
        <div className="container">
          <TopicBrowseMobile />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default topicbrowse;

export async function getStaticProps() {
  return { props: {} };
}
