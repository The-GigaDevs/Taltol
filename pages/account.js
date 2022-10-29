import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// warn: Added .jsx extension, as without this the build was failing
import AccountMobile from "../components/AccountMobile.jsx";
import MobileMenu from "../components/MobileMenu.jsx";
import { isUserLoggedIn } from "../slices/auth.slice.js";

const Liked = () => {
  const dispatch = useDispatch()
  const authRedux = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [authRedux?.isAuthenticated]);
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

export default Liked;
