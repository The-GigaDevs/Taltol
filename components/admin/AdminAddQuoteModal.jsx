import React, { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authorSearch } from '../../slices/authors.slice';
import { searchCategory } from '../../slices/categories.slice';
import { createQuote } from '../../slices/quotes.slice';
import DynamicDropdown from './DynamicDropdown';

Modal.setAppElement('#__next');

export const AdminAddQuoteModal = ({ addQuotesModal, closeAddQuotesModal }) => {
  const [addQuote, setAddQuote] = useState({
    text: '',
    author: '',
    topic: '',
  });
  const [quote, setQuote] = useState({
    text: '',
    author: '',
    topic: '',
  });

  const authorRedux = useSelector(state => state.authors.authors);
  const categoriesRedux = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addQuote.author) {
      dispatch(authorSearch(addQuote.author));
    } 
    if (addQuote.topic) {
      dispatch(searchCategory(addQuote.topic));
    }
  }, [addQuote.author, addQuote.topic]);

  const quoteCreation = () => {
    if (addQuote.text && addQuote.author && addQuote.topic) {
      dispatch(
        createQuote({
          text: addQuote.text,
          author: addQuote.author,
          topics: [
           addQuote.topic,
          ],
        })
      );
    } else {
      toast.error('Please fill in required fields to create a quote');
    }
  };

  const adminSelectModalStyles = {
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

  useEffect(() => {
    if (addQuotesModal) {
      addQuotesModal;
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [addQuotesModal]);

  return (
    <Modal
      isOpen={addQuotesModal}
      onRequestClose={closeAddQuotesModal}
      style={adminSelectModalStyles}
    >
      <div className="filter-modal">
        <div className="filter-modal-header">
          <span className="filter-modal-close" onClick={closeAddQuotesModal}>
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
          <span className="filter-modal-title">Adding a quotes</span>
          <span></span>
        </div>
        <div className="admin-add-quote-modal-body">
          <div className="admin-select-modal-field">
            <textarea
              value={addQuote.text}
              onChange={({ target }) =>
                setAddQuote({ ...addQuote, text: target.value })
              }
            ></textarea>
          </div>
          <div className="admin-select-modal-field">
            <input
              type="text"
              id="secondOption"
              value={addQuote.author}
              placeholder="Enter author name"
              onChange={({ target }) => {
                if (target.value !== addQuote.author) {
                  setQuote({...quote, author : ''})
                } 
                setAddQuote({ ...addQuote, author: target.value });
                }
              }
            />
          </div>
          <div
            className={
              addQuote.author && quote.author === ''
                ? 'admin-dynamic-dropdown'
                : 'admin-dynamic-dropdown--hidden'
            }
          >
            <DynamicDropdown
              optionsList={authorRedux?.results?.slice(0, 5)}
              addQuote={addQuote}
              setAddQuote={setAddQuote}
              state="authors"
              quote={quote}
              setQuote={setQuote}
            />
          </div>

          <div className="admin-select-modal-field">
            <input
              type="text"
              id="thirdOption"
              placeholder="Enter a topic"
              value={addQuote.topic}
              onChange={({ target }) => {
                if (target.value !== addQuote.topic) {
                  setQuote({...quote, topic : ''})
                } 
                setAddQuote({ ...addQuote, topic: target.value })
              }
              }
            />
          </div>
          <div
            className={
              addQuote.topic && quote.topic === ''
                ? 'admin-dynamic-dropdown'
                : 'admin-dynamic-dropdown--hidden'
            }
          >
            <DynamicDropdown
              optionsList={categoriesRedux?.results?.slice(0, 5)}
              addQuote={addQuote}
              setAddQuote={setAddQuote}
              state="topics"
              quote={quote}
              setQuote={setQuote}
            />
          </div>
          {/* <button className="admin-form-box-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.772 9.828C1.484 9.828 1.232 9.732 1.016 9.54C0.824 9.324 0.728 9.06 0.728 8.748C0.728 8.46 0.824 8.22 1.016 8.028C1.232 7.836 1.484 7.74 1.772 7.74H16.64C16.928 7.74 17.168 7.848 17.36 8.064C17.576 8.256 17.684 8.508 17.684 8.82C17.684 9.084 17.576 9.324 17.36 9.54C17.168 9.732 16.928 9.828 16.64 9.828H1.772ZM9.188 17.604C8.852 17.604 8.576 17.496 8.36 17.28C8.144 17.064 8.036 16.788 8.036 16.452V1.188C8.036 0.851999 8.144 0.575999 8.36 0.36C8.6 0.144 8.876 0.0359995 9.188 0.0359995C9.548 0.0359995 9.824 0.144 10.016 0.36C10.232 0.575999 10.34 0.839999 10.34 1.152V16.416C10.34 16.776 10.232 17.064 10.016 17.28C9.8 17.496 9.524 17.604 9.188 17.604Z"
                fill="#ffffff"
              ></path>
            </svg>
            Add new topic
          </button> */}
        </div>
        <div className="filter-modal-footer">
          <span></span>
          <button className="filter-modal-footer-btn" onClick={quoteCreation}>
            Add Quotes
          </button>
        </div>
      </div>
    </Modal>
  );
};
