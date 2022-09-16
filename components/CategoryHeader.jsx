import categoryHeaderBG from '../public/static/category-header-bg.png';
const CategoryHeader = () => {
  return (
    <header className="category-header">
      <div className="container">
        <button className="category-header-share-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
          >
            <path
              d="M12.8333 4.8V0L21 8.4L12.8333 16.8V11.88C7 11.88 2.91667 13.8 0 18C1.16667 12 4.66667 6 12.8333 4.8Z"
              fill="#828282"
            />
          </svg>
          Share this page
        </button>
        <div className="category-header-content">
          <div className="category-header-desc">
            <h1 className="category-header-desc-title">Inspirational Quotes</h1>
            <p className="category-header-desc-text">
              Our database contains around 78,987 amazing inspirational quotes.
              We tried to filter them in a way that can be easy to find brwose
              for what you are looking for.
            </p>
            <div className="category-header-desc-list">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="#333333"></circle>
              </svg>
              <p className="category-header-desc-list-tags">
                Most used tags with the insprational quotes
                <span className="category-header-desc-list-tag"> best</span>
                ,&nbsp;
                <span className="category-header-desc-list-tag">life</span>
                ,&nbsp;
                <span className="category-header-desc-list-tag">tomorrow</span>
                ,&nbsp;
                <span className="category-header-desc-list-tag">human</span>
              </p>
            </div>
          </div>
          <div className="category-header-bg">
            <img src={categoryHeaderBG.src} alt="Background" />
            <div className="category-header-bg-content">
              <h3 className="category-header-bg-title">Inspirational Quotes</h3>
              <span className="category-header-bg-text">74,883 quotes</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
