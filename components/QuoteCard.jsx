import { useRouter } from 'next/router';
import {
  singleQuote,
  toggleModal,
  changeRoute,
  likeAQuoteInQuotes,
  unlikeAQuoteInQuotes,
  deleteQuoteFromDB,
} from '../slices/quotes.slice';
import { useDispatch, useSelector } from 'react-redux';
import randomAuthor from '../public/static/quote-card-author.svg';
import { likeAQuote, unlikeAQuote } from '../slices/likes.slice';
import RestrictiveModal from './auth/RestrictiveModal';
import { useEffect, useState } from 'react';

const QuoteCard = props => {
  const { quote, category, url = '' } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const authRedux = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    //check if the url contains admin string in it
    if (router.asPath.includes('admin')) {
      //if it does, then set the isLiked state to true
      setIsAdmin(true);
    }
  }, []);

  function handleLike() {
    //check the isAuthenticated use from auth slice and if it is true, then dispatch the likeAQuote action
    //if it is false, then dispatch the toggleModal action
    if (url !== 'users') {
      if (authRedux.isAuthenticated) {
        dispatch(likeAQuote(quote.id));
        if (!quote.quote_liked) {
          dispatch(likeAQuoteInQuotes(quote.id));
        } else {
          dispatch(unlikeAQuoteInQuotes(quote.id));
          dispatch(unlikeAQuote(quote.id));
        }
      } else {
        router.push('/login');
      }
    } else {
      if (authRedux.isAuthenticated) {
        dispatch(likeAQuote(quote.id));
        if (!quote.quote_liked) {
          dispatch(likeAQuoteInQuotes(quote.id));
        } else {
          dispatch(unlikeAQuoteInQuotes(quote.id));
          dispatch(unlikeAQuote(quote.id));
        }
      } else {
        router.push('/login');
      }
    }
  }

  useEffect(() => {
    if (authRedux?.user?.email === 'abdulhameid.grandoka@gmail.com') {
      setIsAdmin(true);
    }
  }, []);

  const deleteQuote = () => {
    if (confirm('Are you sure you want to delete this quote?')) {
      dispatch(deleteQuoteFromDB(quote.slug));
    }
    // dispatch(deleteQuoteFromDB(quote.slug))
  };
  return (
    <div className="quote-card">
      {isAdmin && (
        <div className="quote-card-header">
          <span className="quote-card-delete" onClick={deleteQuote}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g transform="translate(232 228)">
                <path
                  fill="#ff0000"
                  d="M-207.5-205.1h3v24h-3zM-201.5-205.1h3v24h-3zM-195.5-205.1h3v24h-3zM-219.5-214.1h39v3h-39z"
                />
                <path
                  fill="#ff0000"
                  d="M-192.6-212.6h-2.8v-3c0-.9-.7-1.6-1.6-1.6h-6c-.9 0-1.6.7-1.6 1.6v3h-2.8v-3c0-2.4 2-4.4 4.4-4.4h6c2.4 0 4.4 2 4.4 4.4v3"
                />
                <path
                  fill="#ff0000"
                  d="M-191-172.1h-18c-2.4 0-4.5-2-4.7-4.4l-2.8-36 3-.2 2.8 36c.1.9.9 1.6 1.7 1.6h18c.9 0 1.7-.8 1.7-1.6l2.8-36 3 .2-2.8 36c-.2 2.5-2.3 4.4-4.7 4.4"
                />
              </g>
            </svg>
          </span>

          <div className="quote-card-likes">
            <span className="quote-card-likes-icon" onClick={handleLike}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M8 14.9333L6.84 13.8591C2.72 10.0586 0 7.55212 0 4.47593C0 1.96941 1.936 0 4.4 0C5.792 0 7.128 0.659183 8 1.70085C8.872 0.659183 10.208 0 11.6 0C14.064 0 16 1.96941 16 4.47593C16 7.55212 13.28 10.0586 9.16 13.8672L8 14.9333Z"
                  fill={quote.quote_liked ? '#ff3294' : '#F2F2F2'}
                />
              </svg>
            </span>
            <span className="quote-card-likes-count">{quote?.total_likes}</span>
          </div>
        </div>
      )}
      <h4
        className="quote-card-text"
        onClick={() => {
          if (category) {
            router.push(
              `/quote/${encodeURIComponent(
                quote?.category?.link_slug +
                  '-quotes' +
                  '_' +
                  quote?.author.slug +
                  '_' +
                  quote?.slug
              )}`
            );
          } else {
            dispatch(toggleModal(true));
            dispatch(changeRoute(url));
            dispatch(singleQuote(quote));
            router.push(
              `/quote/${encodeURIComponent(
                quote?.category?.link_slug +
                  '-quotes' +
                  '_' +
                  quote?.author.slug +
                  '_' +
                  quote?.slug
              )}`,
              undefined,
              {
                shallow: true,
              }
            );
          }
        }}
      >
        {quote?.text}
      </h4>
      <div
        className="quote-card-author"
        onClick={() => {
          if (isAdmin) {
            router.push(
              {
                pathname: '/admin/admin-author-page',
                query: { author: quote?.author.slug },
              },
              '/admin/admin-author-page'
            );
          } else {
            //goto to the author page
            router.push(`/author/${encodeURIComponent(quote?.author?.slug) + '-quotes'}`);
          }
        }}
      >
        <img
          src={
            quote?.author.image_path
              ? quote?.author.image_path
              : randomAuthor.src
          }
          alt="Author Avatar"
          className="quote-card-author-avatar"
        />
        <p className="quote-card-author-name">{quote?.author?.name}</p>
      </div>
      {showModal && (
        <RestrictiveModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default QuoteCard;
