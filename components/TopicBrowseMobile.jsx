import { useEffect, useState } from 'react';
import authService from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../slices/categories.slice';
import Link from 'next/link';

const TopicBrowseMobile = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const dispatch = useDispatch();
  const categories1 = useSelector(state => state.categories?.categories);

  useEffect(() => {
    // if(categories1 === [] || categories1 === undefined){
    dispatch(fetchCategories({ page: 1, pageSize: 30 }));
    // }
  }, []);

  useEffect(() => {
    setCategories(categories1.results);
    setLoading(false);
  }, [categories, categories1]);

  return loading ? (
    'Loading ...'
  ) : (
    <div className="topic-browse-mobile">
      <h3 className="topic-browse-title">Browse by topic</h3>
      <ul className="topic-browse-list">
        {categories
          ?.slice(0, !showAll ? 15 : undefined)
          .map((category, index) => (
            <Link
              key={index}
              passHref
              href={`/category/${encodeURIComponent(category.id)}`}
            >
              <li key={index} className="topic-browse-list-item">
                {`${category.name} Quotes`}
              </li>
            </Link>
          ))}
      </ul>
      {!showAll && (
        <div className="filter-modal-filters-showall">
          <span
            className="filter-modal-filters-showall-text"
            onClick={() => setShowAll(true)}
          >
            Show All
          </span>
          <span className="filter-modal-filters-showall-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                fill="#333333"
              ></path>
            </svg>
          </span>
        </div>
      )}
      {showAll && (
        <div className="filter-modal-filters-showall">
          <span
            className="filter-modal-filters-showall-text"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </span>
          <span className="filter-modal-filters-showall-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1.41 8L6 3.42L10.59 8L12 6.59L6 0.59L0 6.59L1.41 8Z"
                fill="#333333"
              ></path>
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default TopicBrowseMobile;
