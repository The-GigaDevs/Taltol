import Head from 'next/head';
import CategoryHeader from '../components/CategoryHeader';
import CategoryResults from '../components/CategoryResults';
import Navbar from '../components/Navbar';
import ProFooter from '../components/ProFooter';
import TopicBrowse from '../components/TopicBrowse';

const category = () => {
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
      <CategoryHeader />

      <main className="category-main">
        <div className="container">
          <div className="category-main-content">
            <section className="category-main-left-content">
              <CategoryResults />
            </section>
            <section className="category-main-right-content">
              <TopicBrowse />
            </section>
          </div>
        </div>
      </main>
      <ProFooter />
    </>
  );
};

export default category;
