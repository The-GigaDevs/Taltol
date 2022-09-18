import authorHeaderDP from '../public/static/author-page-dp.png';
const AuthorHeader = ({ quotes, category, tags }) => {
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
            <h1 className="category-header-desc-title">
              {category?.name} Quotes
            </h1>
            <p className="category-header-desc-text">
              Our database contains around {quotes?.count} amazing{' '}
              {category?.name} quotes. We tried to filter them in a way that can
              be easy to find browse for what you are looking for.
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
                Most used tags with the {category?.name} quotes
                {tags?.tags?.map(tag => (
                  <span
                    key={tag?.tagId}
                    className="category-header-desc-list-tag"
                  >
                    {' '}
                    {tag?.tag_text},
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="author-header-dp">
            <img src={authorHeaderDP.src} alt="Author Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthorHeader;
