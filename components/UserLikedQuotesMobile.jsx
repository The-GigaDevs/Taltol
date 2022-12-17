import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedQuotes } from '../slices/likes.slice';
import QuoteCard from './QuoteCard';

const UserLikedQuotesMobile = () => {
  const dispatch = useDispatch();
  const { likedQuotes } = useSelector(state => state.likes);
  const [quotes, setQuotes] = useState([]);
  const router = useRouter();

  const authRedux = useSelector((state) => state.auth);

  useEffect(() => {
    if(authRedux.isAuthenticated === false){
      router.push('/login');
    }
    dispatch(fetchLikedQuotes());
  }, []);

  useEffect(() => {
    setQuotes(likedQuotes);
    //console.log(likedQuotes);
  }, [likedQuotes]);

  return (
    <section className="user-liked-quotes-mobile">
      <div className="user-liked-quotes-mobile-data">
        <span
          onClick={() => {
            router.back();
          }}
          className="user-liked-quotes-mobile-data-back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="user-liked-quotes-mobile-data-title">Liked quotes</h2>
        <span></span>
      </div>
      {quotes?.results?.length > 0 ? (
        <p className="user-liked-quotes-mobile-text">
          You have no liked quotes
        </p>
      ) : (
        <div className="user-liked-quotes-content">
          {quotes?.results?.map((quote, index) => (
            <QuoteCard key={index} quote={quote} url={'users'} />
          ))}
        </div>
      )}
    </section>
  );
};

export default UserLikedQuotesMobile;
