import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authorHeaderDP from '../public/static/author-page-dp.png';
import SharePage from './SharePage';

const AuthorHeader = ({ quotes, category, tags }) => {

  const author = useSelector(state => state.authors?.singleAuthor);
  useEffect(() => {
  }, [tags])

  function searchByTag(tag) { }


  return (
    <header className="category-header">
      <div className="container">
        <SharePage place="author" id={category?.id} />
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
                {tags && tags?.map(tag => (
                  <span
                    key={tag?.tagId}
                    className="category-header-desc-list-tag"
                    onClick={() => { searchByTag(tag) }
                    }
                    cursor="pointer"
                  >
                    {' '}
                    {tag?.tag_text},
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="author-header-dp">
            <img src={author ? author.image_path ? author.image_path : authorHeaderDP.src : authorHeaderDP.src} alt="Author Avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthorHeader;
