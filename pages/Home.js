import Footer from '../components/Footer';
import MoodEmoji from '../components/MoodEmoji';
import Navbar from '../components/Navbar';
import PickedSelect from '../components/PickedSelect';
import QuoteCards from '../components/QuoteCards';
import TopicBrowse from '../components/TopicBrowse';
import Head from 'next/head';

const home = () => {
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
      <Navbar />
      <main className="home-main">
        <MoodEmoji />
        <div className="container">
          <div className="home-main-content">
            <section className="home-main-left-content">
              <PickedSelect />
              <QuoteCards />
            </section>
            <section className="home-main-right-content">
              <TopicBrowse />
            </section>
          </div>
          <p className="home-main-loading-text">Loading more...</p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default home;
