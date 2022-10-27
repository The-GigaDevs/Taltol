import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedQuotes } from '../slices/likes.slice';
import QuoteCard from './QuoteCard';

const UserLikedQuotes = (
  { activeTab } //get the active tab from userheader
) => {
  const dispatch = useDispatch();
  const { likedQuotes } = useSelector(state => state.likes);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    dispatch(fetchLikedQuotes());
  }, []);

  useEffect(() => {
    setQuotes(likedQuotes);
    //console.log(likedQuotes);
  }, [likedQuotes]);
  return (
    <>
      <section
        className={
          activeTab === 'tab1'
            ? 'user-liked-quotes show'
            : 'user-liked-quotes hide'
        }
      >
        <p className="user-liked-quotes-count">
          {likedQuotes.count} liked quotes
        </p>
        <div className="user-liked-quotes-content">
          {quotes?.results?.map((quote, index) => (
            <QuoteCard key={index} quote={quote} url={'users'} />
          ))}
        </div>
      </section>
    </>
  );
};

export default UserLikedQuotes;
