import Modal from 'react-modal';
import { useState } from 'react';
import UserSavedCollection from './UserSavedCollection';
import { useDispatch } from 'react-redux';
import { createCollection } from '../slices/collection.slice';

const CreateCollectionModal = ({show, setShow}) => {

  const [collectionName, setCollectionName] = useState('');
const dispatch = useDispatch();
  function closeModal() {
    setShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(collectionName);
    dispatch(createCollection(collectionName));   
    setShow(false); 
  }

  Modal.setAppElement('#__next');
  const addCreateCollectionModalStyles = {
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

  return (
    <>
      <button
        onClick={() => {
          show(true);
        }}
      >
        Create Collection Modal
      </button>
      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={addCreateCollectionModalStyles}
      >
        <div className="add-collection-modal">
          <div className="add-collection-modal-header">
            <span className="add-collection-modal-close" onClick={closeModal}>
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
            <span className="add-collection-modal-title">
              Create a new collection
            </span>
            <span></span>
          </div>
          <div className="add-collection-modal-body-collection">
            <div className="add-collection-field">
              <input
                type="text"
                name="collection-name"
                placeholder="Choose Name"
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
              />
            </div>
          </div>
          <footer className="add-collection-modal-footer">
            <button className="add-collection-modal-footer-btn" onClick={handleSubmit}>
              Create collection
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default CreateCollectionModal;
