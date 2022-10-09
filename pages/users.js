import Head from 'next/head';
import Navbar from '../components/Navbar';
import UserHeader from '../components/UserHeader';
import UserLikedQuotes from '../components/UserLikedQuotes';
import UserSavedCollection from '../components/UserSavedCollection';
import UserSavedCollectionQuotes from '../components/UserSavedCollectionQuotes';
import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import UserCollectionBack from '../components/UserCollectionBack';
import AddCollectionModal from '../components/AddCollectionModal';
import CreateCollectionModal from '../components/CreateCollectionModal';

const users = () => {
  //get the tab state from userheader
  const [activeTab, setActiveTab] = useState('tab1');
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };

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
      {
        // if the active tab is tab2
        activeTab === 'tab2' ? <UserCollectionBack /> : ''
      }

      <UserHeader
        handleTab1={handleTab1}
        handleTab2={handleTab2}
        activeTab={activeTab}
      />
      <main className="user-main">
        <div className="container">
          <UserLikedQuotes activeTab={activeTab} />
          <UserSavedCollection activeTab={activeTab} />
          <UserSavedCollectionQuotes />
          <AddCollectionModal />
          <CreateCollectionModal />
        </div>
      </main>
    </>
  );
};

export default users;
