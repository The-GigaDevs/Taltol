import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import authService from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors, authorSearch } from '../slices/authors.slice';
import { fetchTags, searchTag } from '../slices/tags.slice';
import { fetchCategories, searchCategory } from '../slices/categories.slice';
import { fetchQuotes } from '../slices/quotes.slice';

const { searchQuotesModal } = authService;

Modal.setAppElement('#__next');
const filterModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    borderRadius: '7px',
    width: '95%',
    maxWidth: '85rem',
    boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '10',
  },
};

const FilterModal = ({
  show,
  setShow,
  search,
  selectedAuthorsProp,
  selectedTagsProp,
  selectedCategoriesProp,
  setSelectedCount,
}) => {
  const [inputShowAuthors, setInputShowAuthors] = useState(false);
  const [inputShowTags, setInputShowTags] = useState(false);
  const [inputShowTopics, setInputShowTopics] = useState(false);

  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  const authors1 = useSelector(state => state.authors?.authors);
  const categories1 = useSelector(state => state.categories?.categories);
  const tagsRedux = useSelector(state => state.tags?.tags);

  useEffect(() => {
    setSelectedAuthors(selectedAuthorsProp);
    setSelectedTags(selectedTagsProp);
    if (!categories1) {
      setSelectedCategories(selectedCategoriesProp);
    }
    if (show) {
      dispatch(fetchTags());
      dispatch(fetchAuthors());
      dispatch(fetchCategories({ page: 1, pageSize: 30 }));
    }
  }, [show]);

  useEffect(() => {
    //do not call this function if modal is not open
    if (!show) return;
    searchQuotes();
  }, [selectedAuthors, selectedCategories, selectedTags]);

  function setCountAndStuff(value, name) {
    if (value === 'author') {
      if (selectedAuthors.includes(name)) {
        setSelectedAuthors(prevState =>
          prevState.filter(item => item !== name)
        );
        //console.log(selectedAuthors);
      } else {
        //console.log(name, value);
        let updatedArray = [...selectedAuthors, name];
        setSelectedAuthors(() => updatedArray);
      }
    } else if (value === 'tag') {
      if (selectedTags.includes(name)) {
        setSelectedTags(prevState => prevState.filter(item => item !== name));
      } else {
        setSelectedTags(prevState => [...prevState, name]);
      }
    } else if (value === 'category') {
      if (selectedCategories.includes(name)) {
        setSelectedCategories(prevState =>
          prevState.filter(item => item !== name)
        );
      } else {
        setSelectedCategories(prevState => [...prevState, name]);
      }
    }
  }

  function clearAll() {
    setSelectedAuthors([]);
    setSelectedTags([]);
    setSelectedCategories([]);
  }

  useEffect(() => {
    setAuthors(authors1.results);
    setCategories(categories1.results);
    setTags(tagsRedux.results);
    // debugger
    if (show) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [authors1, tagsRedux, categories1, show]);

  function closeModal() {
    setShow(false);
    setInputShowAuthors(false);
    setInputShowTags(false);
    setInputShowTopics(false);
    setSelectedCount('author', selectedAuthors);
    setSelectedCount('tag', selectedTags);
    setSelectedCount('category', selectedCategories);
  }

  //write a function to send api call fro search authors

  async function handleChange(value, type) {
    // //console.log("I am here",value, type);
    if (value.length >= 3) {
      if (type === 'author') {
        dispatch(authorSearch(value));
      }
      if (type === 'tags') {
        dispatch(searchTag(value));
      }
      if (type === 'category') {
        dispatch(searchCategory(value));
      }
    }
  }

  async function searchQuotes() {
    if (
      selectedAuthors?.length === 0 &&
      selectedTags?.length === 0 &&
      selectedCategories?.length === 0
    ) {
      setCount(-1);
      dispatch(fetchQuotes());
    } else {
      setSearching(true);
      const results = await searchQuotesModal(
        selectedAuthors,
        selectedTags,
        selectedCategories,
        search
      );
      setCount(results.count);
      dispatch({ type: 'quotes/addQuotes', payload: results });
      setCount(results.count);
      setSearching(false);
    }
  }

  return (
    <>
      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={filterModalStyles}
      >
        <div className="filter-modal">
          <div className="filter-modal-header">
            <span className="filter-modal-close" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
                  fill="#333333"
                ></path>
              </svg>
            </span>
            <span className="filter-modal-title">Filters</span>
            <span></span>
          </div>
          <div className="filter-modal-body">
            <div className="filter-modal-filters">
              <div className="filter-modal-filters-heading">
                <h2 className="filter-modal-filters-title">Authors</h2>
                <div
                  className={
                    inputShowAuthors
                      ? 'filter-modal-filters-search active'
                      : 'filter-modal-filters-search'
                  }
                >
                  <span
                    className="filter-modal-filters-search-icon"
                    onClick={() => setInputShowAuthors(!inputShowAuthors)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#BDBDBD"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search in Authors"
                    onChange={e => {
                      handleChange(e.target.value, 'author');
                    }}
                  />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  {authors
                    ?.slice(0, !inputShowAuthors ? 9 : undefined)
                    .map((author, index) => (
                      <label className="filter-modal-filters-check" key={index}>
                        {author.name}
                        <input
                          type="checkbox"
                          checked={selectedAuthors?.includes(author.id)}
                          onClick={() => setCountAndStuff('author', author.id)}
                        />
                        <span className="filter-modal-filters-check-checkmark"></span>
                      </label>
                    ))}
                </div>
                {!inputShowAuthors && (
                  <div
                    className="filter-modal-filters-showall"
                    onClick={() => setInputShowAuthors(true)}
                  >
                    <span className="filter-modal-filters-showall-text">
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
                {inputShowAuthors && (
                  <div
                    className="filter-modal-filters-showall"
                    onClick={() => setInputShowAuthors(false)}
                  >
                    <span className="filter-modal-filters-showall-text">
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
            </div>
            <div className="filter-modal-filters">
              <div className="filter-modal-filters-heading">
                <h2 className="filter-modal-filters-title">Tags</h2>
                <div
                  className={
                    inputShowTags
                      ? 'filter-modal-filters-search active'
                      : 'filter-modal-filters-search'
                  }
                >
                  <span
                    className="filter-modal-filters-search-icon"
                    onClick={() => setInputShowTags(!inputShowTags)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#BDBDBD"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search in Tags"
                    onChange={e => {
                      handleChange(e.target.value, 'tags');
                    }}
                  />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  {tags
                    ?.slice(0, !inputShowTags ? 9 : undefined)
                    .map((tag, index) => (
                      <label className="filter-modal-filters-check" key={index}>
                        {tag.text}
                        <input
                          type="checkbox"
                          checked={selectedTags?.includes(tag.id)}
                          onClick={() => setCountAndStuff('tag', tag.id)}
                        />

                        <span className="filter-modal-filters-check-checkmark"></span>
                      </label>
                    ))}
                </div>
                {!inputShowTags && (
                  <div
                    className="filter-modal-filters-showall"
                    onClick={() => setInputShowTags(true)}
                  >
                    <span className="filter-modal-filters-showall-text">
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
                {inputShowTags && (
                  <div
                    className="filter-modal-filters-showall"
                    onClick={() => setInputShowTags(false)}
                  >
                    <span className="filter-modal-filters-showall-text">
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
            </div>
            <div className="filter-modal-filters">
              <div className="filter-modal-filters-heading">
                <h2 className="filter-modal-filters-title">Topics</h2>
                <div
                  className={
                    inputShowTopics
                      ? 'filter-modal-filters-search active'
                      : 'filter-modal-filters-search'
                  }
                >
                  <span
                    className="filter-modal-filters-search-icon"
                    onClick={() => setInputShowTopics(!inputShowTopics)}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="#BDBDBD"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search in Category"
                    onChange={e => {
                      handleChange(e.target.value, 'category');
                    }}
                  />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  {categories
                    ?.slice(0, !inputShowTopics ? 9 : undefined)
                    .map(category => (
                      <label
                        className="filter-modal-filters-check"
                        key={category.id}
                      >
                        {category.name}
                        <input
                          type="checkbox"
                          checked={selectedCategories?.includes(category.id)}
                          onClick={() =>
                            setCountAndStuff('category', category.id)
                          }
                        />

                        <span className="filter-modal-filters-check-checkmark"></span>
                      </label>
                    ))}
                </div>
                {!inputShowTopics && (
                  <div className="filter-modal-filters-showall">
                    <span
                      className="filter-modal-filters-showall-text"
                      onClick={() => setInputShowTopics(true)}
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
                {inputShowTopics && (
                  <div
                    className="filter-modal-filters-showall"
                    onClick={() => {
                      setInputShowTopics(false);
                    }}
                  >
                    <span className="filter-modal-filters-showall-text">
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
                          d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                          fill="#333333"
                        ></path>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <footer className="filter-modal-footer">
            <span
              className="filter-modal-footer-clear"
              onClick={() => {
                clearAll();
              }}
            >
              Clear All
            </span>
            <button
              className="filter-modal-footer-btn"
              onClick={() => closeModal()}
            >
              {count === -1
                ? `Show Quotes`
                : searching === true
                ? 'Loading...'
                : count
                ? `Show ${count} Quotes`
                : 'No Quotes Found'}
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
