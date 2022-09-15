import randomAuthor from '../public/static/quote-card-author.jpg';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { singleQuote, toggleModal } from '../slices/quotes.slice';
import { useDispatch } from 'react-redux';

const QuoteCard = (quote) => { 
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // console.log(quote);
  }, []);

  return (
    <div className="quote-card">
      <div className="quote-card-likes">
        <span className="quote-card-likes-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M8 14.9333L6.84 13.8591C2.72 10.0586 0 7.55212 0 4.47593C0 1.96941 1.936 0 4.4 0C5.792 0 7.128 0.659183 8 1.70085C8.872 0.659183 10.208 0 11.6 0C14.064 0 16 1.96941 16 4.47593C16 7.55212 13.28 10.0586 9.16 13.8672L8 14.9333Z"
              fill="#F2F2F2"
            />
          </svg>
        </span>
        <span className="quote-card-likes-count">{quote.quote.quote_liked}</span>
      </div>
      <h4 className="quote-card-text"
        onClick={() => {
          dispatch(toggleModal(true));
          dispatch(singleQuote(quote.quote));
          router.push(`/quote/${encodeURIComponent(quote.quote.id)}`, undefined, { shallow: true })
        }}
      >
        {quote.quote.text}
      </h4>
      <div className="quote-card-author">
        <img
          src={randomAuthor.src}
          alt="Author Avatar"
          className="quote-card-author-avatar"
        />
        <p className="quote-card-author-name">{quote.quote.author.name}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
