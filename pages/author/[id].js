import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthorHeader from '../../components/AuthorHeader';
import MobileMenu from '../../components/MobileMenu';
import Navbar from '../../components/Navbar';
import ProFooter from '../../components/ProFooter';
import QuoteCards from '../../components/QuoteCards';
import TopicBrowse from '../../components/TopicBrowse';
import { fetchSingleAuthor } from '../../slices/authors.slice';
import { fetchQuotesOfAuthorWithPage } from '../../slices/quotes.slice';

const Author = ({ id }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [tags, setTags] = useState([]);
  const quotesRedux = useSelector(state => state.quotes?.quotes);
  const singleAuthorRedux = useSelector(state => state.authors.singleAuthor);

  const fetchNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (quotesRedux?.results) {
      setTags(quotesRedux?.results[0]?.tags);

    }
  }, [quotesRedux?.results]);
  
  useEffect(() => {
    if (!singleAuthorRedux || singleAuthorRedux?.id !== id) {
      dispatch(fetchSingleAuthor(id));
    }
    dispatch(fetchQuotesOfAuthorWithPage({ id, page }));
  }, [id, page ]);

  return (
    <>
      <Head>
        <title>Taltol</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <MobileMenu />
      <AuthorHeader
        category={singleAuthorRedux}
        quotes={quotesRedux}
        tags={tags}
      />

      <main className="category-main">
        <div className="container">
          <div className="category-main-content">
            <section className="category-main-left-content">
              <QuoteCards
                quotes={quotesRedux?.results}
                fetchNext={fetchNext}
                category={true}
                next={quotesRedux?.next}
              />
            </section>
            <section className="category-main-right-content">
              <TopicBrowse user={true}/>
            </section>
          </div>
        </div>
      </main>
      <ProFooter />
    </>
  );
};

export default Author;

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  if (params) {
    return {
      props: { id: params.id },
    };
  }
  return null;
}
