import Head from 'next/head';
import CategoryHeader from '../components/CategoryHeader';
import Navbar from '../components/Navbar';

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

      <main className="category-main">
        <div className="container">
          <CategoryHeader />
        </div>
      </main>
    </>
  );
};

export default category;
