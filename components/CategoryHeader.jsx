import categoryHeaderBG from '../public/static/category-header-bg.png';
import SharePage from './SharePage';
import { useDispatch } from 'react-redux';
import {fetchQuotesAgainstTag} from '../slices/quotes.slice';

const CategoryHeader = ({ quotes, category, tags }) => {

  const dispatch = useDispatch();

  
  function searchByTag (tag) {
    dispatch(fetchQuotesAgainstTag(tag?.tagId));
    console.log(tag);
  };
  
  return (

    <header className="category-header">
      <div className="container">
        <SharePage place="category" id={category?.id} />
        <div className="category-header-content">
          <div className="category-header-desc">
            <h1 className="category-header-desc-title">{category?.name} Quotes</h1>
            <p className="category-header-desc-text">
              Our database contains around {quotes?.count} amazing {category?.name} quotes.
              We tried to filter them in a way that can be easy to find browse
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
                Most used tags with the {category?.name} quotes
                {tags?.tags?.map(tag => <span cursor="pointer" onClick={() => {searchByTag(tag)}} key={tag?.tagId} className="category-header-desc-list-tag"> {tag?.tag_text},</span>)}
              </p>
            </div>
          </div>
          <div className="category-header-bg">
            <img src={categoryHeaderBG.src} alt="Background" />
            <div className="category-header-bg-content">
              <h3 className="category-header-bg-title">{category?.name} Quotes</h3>
              <span className="category-header-bg-text">{quotes?.count} quotes</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
