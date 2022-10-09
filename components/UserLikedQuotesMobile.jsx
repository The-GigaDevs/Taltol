import QuoteStatic from './QuoteStatic';

const UserLikedQuotesMobile = () => {
  return (
    <section className="user-liked-quotes-mobile">
      <div className="user-liked-quotes-mobile-data">
        <span className="user-liked-quotes-mobile-data-back">
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
      <div className="user-liked-quotes-content">
        <QuoteStatic />
        <QuoteStatic />
        <QuoteStatic />
        <QuoteStatic />
        <QuoteStatic />
        <QuoteStatic />
      </div>
    </section>
  );
};

export default UserLikedQuotesMobile;
