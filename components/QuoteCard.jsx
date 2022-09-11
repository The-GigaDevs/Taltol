import Image from 'next/image';
import randomAuthor from '../public/static/quote-card-author.jpg';

const QuoteCard = () => {
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
        <span className="quote-card-likes-count">1.4k</span>
      </div>
      <h4 className="quote-card-text">
        A beautiful person is someone who stays true to themselves and their
        spirit; someone who is self-confident and can make you smile.
      </h4>
      <div className="quote-card-author">
        <Image
          src={randomAuthor.src}
          alt="Author Avatar"
          className="quote-card-author-avatar"
        />
        <p className="quote-card-author-name">Frank Zappa</p>
      </div>
    </div>
  );
};

export default QuoteCard;
