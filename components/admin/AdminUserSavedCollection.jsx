import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminUserSavedCollectionQuotes from './AdminUserSavedCollectionQuotes';

const AdminUserSavedCollection = ({
  activeTab,
  showCollection,
  setShowCollection,
}) => {
  const [collections, setCollections] = useState([]);


  const collectionRedux = useSelector(state => state?.admin?.selectedUserSavedCollection);


  useEffect(() => {
    setCollections(collectionRedux);
  }, [collectionRedux]);


  return (
    <div className="admin-user-saved-collection">
      <section
        className={
          activeTab === 'tab2'
            ? 'user-saved-collection show'
            : 'user-saved-collection hide'
        }
      >
        {showCollection ? (
          <>
           {collections?.count === 0 ? (
              <p className="user-saved-collections-text">
                 The user does not have any saved collections
              </p>
           ) : (
            <div className="user-saved-collection-cards">
              {collections?.results?.map((collection, index) => (
                <div
                  key={index}
                  // onClick={() => {
                  //   dispatch(
                  //     getSingleCollection({
                  //       id: collection.id,
                  //       name: collection.name,
                  //     })
                  //   );
                  //   setShowCollection(!showCollection);
                  // }}
                  className="user-saved-collection-card"
                >
                  <div className="user-saved-collection-card-actions">
                    <span className="user-saved-collection-card-actions-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </span>
                    <span className="user-saved-collection-card-actions-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="22"
                        viewBox="0 0 16 22"
                        fill="none"
                      >
                        <path
                          d="M12 4L10.58 5.42L8.99 3.83V15H7.01V3.83L5.42 5.42L4 4L8 0L12 4ZM16 9V20C16 21.1 15.1 22 14 22H2C0.89 22 0 21.1 0 20V9C0 7.89 0.89 7 2 7H5V9H2V20H14V9H11V7H14C15.1 7 16 7.89 16 9Z"
                          fill="#BDBDBD"
                        />
                      </svg>
                    </span>
                  </div>
                  <h4 className="user-saved-collection-card-title">
                    {collection.name}
                  </h4>
                  <p className="user-saved-collection-card-counts">
                    {collection.total_quotes} Quotes
                  </p>
                </div>
              ))}
              </div>)}
          </>
        ) : (
          <AdminUserSavedCollectionQuotes
            setShowCollection={setShowCollection}
            showCollection={showCollection}
          />
        )}
      </section>
    </div>
  );
};

export default AdminUserSavedCollection;
