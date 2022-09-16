import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import authService from '../services/auth.service';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from '../slices/authors.slice';

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

const FilterModal = ({ show, setShow, selectedArray, setSelectedCount }) => {
  const [inputShowAuthors, setInputShowAuthors] = useState(false);
  const [inputShowTags, setInputShowTags] = useState(false);
  const [inputShowTopics, setInputShowTopics] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const authors1 = useSelector(state => state.authors?.authors);
  const categories1 = useSelector(state => state.categories?.categories);

  useEffect(() => {
    console.log(selectedArray);
    setSelected(selectedArray);
    dispatch(fetchAuthors());
  }, []);

  function setCountAndStuff(name) {
    if (selected.includes(name)) {
      //delete the name from the array using reduc
      setSelected(selected.filter(item => item !== name));

      // const index = selected.indexOf(name);

      // setSelected(selected.reduce(selected.indexOf(name)));
    } else {
      setSelected(prevState => [...prevState, name]);
    }
  }

  useEffect(() => {
    setAuthors(authors1.results);
    setCategories(categories1.results);
    // debugger
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [authors, authors1, show]);

  function closeModal() {
    setShow(false);
    setInputShowAuthors(false);
    setInputShowTags(false);
    setInputShowTopics(false);
    setSelectedCount(count, selected);
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
                  <input type="text" placeholder="Search in Authors" />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  {!inputShowAuthors
                    ? authors?.slice(0, 10).map((author, index) => (
                        <label
                          className="filter-modal-filters-check"
                          key={index}
                        >
                          {author.name}
                          <input
                            type="checkbox"
                            checked={selected.includes(author.name)}
                            onClick={() => setCountAndStuff(author.name)}
                          />
                          <span className="filter-modal-filters-check-checkmark"></span>
                        </label>
                      ))
                    : authors?.map((author, index) => (
                        <label
                          className="filter-modal-filters-check"
                          key={index}
                        >
                          {author.name}
                          <input type="checkbox" />
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
                  <input type="text" placeholder="Search in Authors" />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  <label className="filter-modal-filters-check">
                    Best
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Life
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Tomorrow
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Love
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Inspiring
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Hammer
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Tomorrow
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Life
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                  <label className="filter-modal-filters-check">
                    Best
                    <input type="checkbox" />
                    <span className="filter-modal-filters-check-checkmark"></span>
                  </label>
                </div>
                <div className="filter-modal-filters-showall">
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
                  <input type="text" placeholder="Search in Authors" />
                </div>
              </div>
              <div className="filter-modal-filters-categories">
                <div className="filter-modal-filters-checks">
                  {categories
                    ?.slice(0, !inputShowTopics ? 10 : undefined)
                    .map(category => (
                      <label className="filter-modal-filters-check">
                        {category.name}
                        <input type="checkbox" />
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
            <span className="filter-modal-footer-clear">Clear All</span>
            <button className="filter-modal-footer-btn">
              Show 300+ quotes
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
