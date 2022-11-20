import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { editDropdownOptions, fetchDropdownOptions } from '../../slices/admin.slice';
import { authorSearch } from '../../slices/authors.slice';
import { searchCategory } from '../../slices/categories.slice';
import { searchTagByName } from '../../slices/tags.slice';

Modal.setAppElement('#__next');

const AdminSelectModal = ({ modalIsOpen, closeModal }) => {
  const [dynamicDropdown, setDynamicDropdown] = useState({
    default: '',
    second: '' ,
    third: '',
  });
  const dispatch = useDispatch();
  const dbDynamicDropdown =  useSelector(state =>  state?.admin?.dropdown);
  const topics =  useSelector(state =>  state?.categories?.categories);
  const authors =  useSelector(state =>  state?.authors?.authors);
  const tags =  useSelector(state =>  state?.tags?.tags);

  const saveDynamicDropdownOptions =() => {
      const data = {
        "topic": dynamicDropdown.default,
        "author": dynamicDropdown.second,
        "tag": dynamicDropdown.third
      }
      dispatch(editDropdownOptions(data));
  }


  useEffect(()=> {
    if(dynamicDropdown.default) {
      dispatch(searchCategory(dynamicDropdown.default));
    }  
    if(dynamicDropdown.second) {
      dispatch(authorSearch(dynamicDropdown.second));
    } 
     if(dynamicDropdown.third) {
      dispatch(searchTagByName(dynamicDropdown.third));
    }
  }, [dynamicDropdown]);
  
  useEffect(()=> {
    if(dbDynamicDropdown?.length === 0) {
      dispatch(fetchDropdownOptions());
    } else {
      setDynamicDropdown({ default: dbDynamicDropdown.topic, second: dbDynamicDropdown.author, third: dbDynamicDropdown.tag })
    }
  }, [])




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
    if (modalIsOpen) {
      modalIsOpen;
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalIsOpen]);
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={adminSelectModalStyles}
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
          <span className="filter-modal-title">Add Sort Options</span>
          <span></span>
        </div>
        <div className="admin-select-modal-body">
          <div className="admin-select-modal-field">
            <label htmlFor="default">Default:</label>
            <input type="text" id="default" value={dynamicDropdown.default} onChange={({ target }) => setDynamicDropdown({ ...dynamicDropdown, default: target.value })} />
          </div>
          <div className="admin-select-modal-field">
            <label htmlFor="secondOption">Second Option:</label>
            <input type="text" id="secondOption" value={dynamicDropdown.second} onChange={({ target }) => setDynamicDropdown({ ...dynamicDropdown, second: target.value })} />
          </div>
          <div className="admin-select-modal-field">
            <label htmlFor="thirdOption">Third Option:</label>
            <input type="text" id="thirdOption" value={dynamicDropdown.third} onChange={({ target }) => setDynamicDropdown({ ...dynamicDropdown, third: target.value })}/>
          </div>
        </div>
        <div className="filter-modal-footer">
          <span className="filter-modal-footer-clear" onClick={() => setDynamicDropdown({ default: '', second: '', third: '' })}>Clear All</span>
          <button className="filter-modal-footer-btn" onClick={()=> saveDynamicDropdownOptions() }>Save Options</button>
        </div>
      </div>
    </Modal>
  );
};

export default AdminSelectModal;
