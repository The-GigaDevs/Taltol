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
import UserLikedQuotesMobile from '../components/UserLikedQuotesMobile';
import AccountMobile from '../components/accountMobile';

const liked = () => {
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

      <div className="container">
        <AccountMobile />
      </div>
    </>
  );
};

export default liked;
