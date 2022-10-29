import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import UserSavedCollection from './UserSavedCollection';
import { useSelector, useDispatch } from 'react-redux';
import { addQuoteToCollection, fetchCollections } from '../slices/collection.slice';
import CreateCollectionModal from './CreateCollectionModal';
import Router from 'next/router';

const AddCollectionModal = ({show,setShow, quoteId}) => {

  //get collections from redux store
  const collections1 = useSelector((state) => state.collections?.collections);
  const authRedux = useSelector((state) => state.auth);
  const [collections, setCollections] = useState([]);
  const [selected, setSelected ] = useState(null);

  const dispatch = useDispatch();
  const [showCreateCollectionModal, setShowCreateCollectionModal] = useState(false);

  useEffect(() => {
    //get collections from service
    dispatch(fetchCollections());
  }, [dispatch]);
  

  useEffect(() => {
    //set collections to state
    setCollections(collections1);
    
    
  }, [collections1]);


  function closeModal() {
    dispatch(addQuoteToCollection({collection: selected, quote: quoteId}));
    
    setShow(false);
  }

  function handleShowCreateCollectionModal() {
    setShowCreateCollectionModal(true);
  }

  function handleClick(){
    if(authRedux.isAuthenticated){
      setShow(true);
    }else{
      Router.push('/login');
    }
  }

  function handledAddClick(collectionId, quoteId) {

    //grey out the collection
    setSelected(collectionId);  

  }

  Modal.setAppElement('#__next');
  const addCollectionModalStyles = {
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
        onClick={handleClick}
      >
        Show Collection Modal
      </button>
      <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={addCollectionModalStyles}
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
              Add this quote to a collection
            </span>
            <span></span>
          </div>
          <div className="add-collection-modal-body">
            <div className="add-collection-modal-search">
              <span className="add-collection-modal-search-icon">
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
              <input type="text" placeholder="Search for a collection" />
            </div>
            <div className="add-collection-modal-cards">
              {collections.results?.map((collection, index) => (
              <div key={index} className="add-collection-modal-card" style={{background : collection.id == selected ? "#f896bc" : "white"}} onClick={() => handledAddClick(collection.id, quoteId)}>
                <h4 className="add-collection-modal-card-title">
                  {collection.name}
                </h4>
                <p className="add-collection-modal-card-counts">{collection.total_quotes} Quote(s)</p>
                <p className="add-collection-modal-card-timestamp">
                  Last Updated : {collection.last_updated}
                </p>
              </div>
              ))} 
            </div>
          </div>
          <footer className="add-collection-modal-footer">
            <button className="add-collection-modal-footer-btn" onClick={closeModal}>Done</button>
            <span className="add-collection-modal-footer-create" onClick={() => handleShowCreateCollectionModal()}>
              Create a new collection
            </span>
          </footer>
        </div>
      </Modal>
      {showCreateCollectionModal && (
        <CreateCollectionModal show={showCreateCollectionModal} setShow={setShowCreateCollectionModal} /> ) }
    </>
  );
};

export default AddCollectionModal;
