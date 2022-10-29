import Head from 'next/head';
import Navbar from '../components/Navbar';
import UserHeader from '../components/UserHeader';
import UserLikedQuotes from '../components/UserLikedQuotes';
import UserSavedCollection from '../components/UserSavedCollection';
import UserSavedCollectionQuotes from '../components/UserSavedCollectionQuotes';
import { useEffect, useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import UserCollectionBack from '../components/UserCollectionBack';
import AddCollectionModal from '../components/AddCollectionModal';
import CreateCollectionModal from '../components/CreateCollectionModal';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../slices/auth.slice';

const Users = () => {
  //get the tab state from userheader
  const [activeTab, setActiveTab] = useState('tab1');
  const [showCollection, setShowCollection] = useState(true);
  const dispatch = useDispatch();
  const authRedux = useSelector(state =>  state.auth);
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };

  useEffect(()=> {
    dispatch(isUserLoggedIn());
    
  }, [authRedux?.isAuthenticated])
  return (
    <>
      <Head>
        <title>Taltol</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MobileMenu />
      <Navbar />

      <UserHeader
        handleTab1={handleTab1}
        handleTab2={handleTab2}
        activeTab={activeTab}
      />
      <main className="user-main">
        <div className="container">
          <UserLikedQuotes activeTab={activeTab} />
          <UserSavedCollection
            activeTab={activeTab}
            showCollection={showCollection}
            setShowCollection={setShowCollection}
          />
          {/* <AddCollectionModal />
          <CreateCollectionModal /> */}
        </div>
      </main>
    </>
  );
};

export default Users;
