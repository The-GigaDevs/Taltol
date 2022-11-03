import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import collectionService from '../services/collection.service';
import { useEffect } from 'react';
import {
  fetchCollections,
  getSingleCollection,
} from '../slices/collection.slice';
import { useRouter } from 'next/router';
import UserSavedCollectionQuotes from './UserSavedCollectionQuotes';
import UserCollectionBack from './UserCollectionBack';
const UserSavedCollectionMobile = (
  { showCollection, setShowCollection } // get the active tab from userheader
) => {
  const [collections, setCollections] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  //get collections from redux store
  const collections1 = useSelector(
    state => state.collections.collections.results
  );

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  useEffect(() => {
    setCollections(collections1);
  }, [collections1]);

  return (
    <section className="user-saved-collection">
      {showCollection ? (
        <>
          <div className="user-liked-quotes-mobile-data">
            <span
              onClick={() => {
                router.back();
              }}
              className="user-liked-quotes-mobile-data-back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="user-liked-quotes-mobile-data-title">
              Saved collections
            </h2>
            <span></span>
          </div>
          <>
            {collections?.length === 0 ? (
              <p className="user-saved-collections-mobile-text">
                You have no saved collections
              </p>
            ) : (
              <div className="user-saved-collection-cards">
                {collections?.map((collection, index) => (
                  <div
                    className="user-saved-collection-card"
                    key={index}
                    onClick={() => {
                      dispatch(
                        getSingleCollection({
                          id: collection.id,
                          name: collection.name,
                        })
                      );
                      setShowCollection(!showCollection);
                    }}
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
              </div>
            )}
          </>
        </>
      ) : (
        <UserSavedCollectionQuotes
          showCollection={showCollection}
          setShowCollection={setShowCollection}
        />
      )}
    </section>
  );
};

export default UserSavedCollectionMobile;
