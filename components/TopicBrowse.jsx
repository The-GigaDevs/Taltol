import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../slices/categories.slice';
import TopicsModal from './TopicsModal';

const TopicBrowse = ({user}) => {
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

  useEffect(() => {
    if (showAll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showAll]);


  function handleShowAll() {
    dispatch(fetchCategories({ page: 1, pageSize: "" }));
    setShowAll(true);
  }

  return loading ? (
    'Loading ...'
  ) : (
    <div className="topic-browse">
      <h3 className="topic-browse-title">Browse by topic</h3>
      <ul className="topic-browse-list">
        {categories?.slice(0, 15).map((category, index) => (
          <Link
            key={index}
            passHref
            href={{
              pathname: user ? `/category/${encodeURIComponent(category.id)}` :`/admin/admin-topics-page`,
              query: { category: category.id, name: category.link_slug },
            }}
            as={user ? `/category/${encodeURIComponent(category.id)}` :`/admin/admin-topics-page`}
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
            onClick={handleShowAll}
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
        <TopicsModal
          showModal={showAll}
          setShowModal={() => setShowAll(false)}
          categories={categories}
          count = {categories1.count}
          pathname = {true}
        />
      )}
    </div>
  );
};

export default TopicBrowse;
