import randomAuthor from '../public/static/quote-card-author.svg';
import { useRouter } from 'next/router';
import {
  singleQuote,
  toggleModal,
  changeRoute,
  likeAQuoteInQuotes,
  unlikeAQuoteInQuotes,
} from '../slices/quotes.slice';
import { likeAQuote, fetchLikedQuotes, unlikeAQuote } from '../slices/likes.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { authSlice } from '../slices/auth.slice';
import RestrictiveModal from './auth/RestrictiveModal';

const QuoteCard = props => {
  const { quote, category, url = '' } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const authRedux = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLike() {
    //check the isAuthenticated use from auth slice and if it is true, then dispatch the likeAQuote action
    //if it is false, then dispatch the toggleModal action
    if(url !== 'users'){
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
  }else{
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
  return (
    <div className="quote-card">
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
      <h4
        className="quote-card-text"
        onClick={() => {
          if (category) {
            router.push(`/quote/${encodeURIComponent(quote?.category?.link_slug+'-quotes'+'_'+quote?.author.slug+'_'+ quote?.slug)}`);
          } else {
            dispatch(toggleModal(true));
            dispatch(changeRoute(url));
            dispatch(singleQuote(quote));
            router.push(`/quote/${encodeURIComponent(quote?.category?.link_slug+'-quotes'+'_'+quote?.author.slug+'_'+ quote?.slug)}`, undefined, {
              shallow: true,
            });
          }
        }}
      >
        {quote?.text}
      </h4>
      <div className="quote-card-author" onClick={() => {
            //goto to the author page
            router.push(`/author/${encodeURIComponent(quote?.author?.id)}`);
          }}>
        <img
          src={randomAuthor.src}
          alt="Author Avatar"
          className="quote-card-author-avatar"
        />
        <p
          className="quote-card-author-name"
          
        >
          {quote?.author?.name}
        </p>
      </div>
      {showModal && (
        <RestrictiveModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default QuoteCard;
