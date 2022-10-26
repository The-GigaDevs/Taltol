import MobileMenu from '../../components/MobileMenu';
import UserLikedQuotesMobile from '../../components/UserLikedQuotesMobile';

const Likes = () => {
  return (
    <>
      <MobileMenu />

      <div className="container">
        <UserLikedQuotesMobile />
      </div>
    </>
  );
};

export default Likes;
