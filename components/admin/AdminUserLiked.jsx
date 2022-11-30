import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedQuotesOfUser } from '../../slices/admin.slice';
import QuoteCard from '../QuoteCard';
const AdminUserLiked = ({ activeTab }) => {

  const [likedQuotes, setLikedQuotes] = useState([]);
  const dispatch = useDispatch();

  const selectedUserRedux = useSelector(state => state?.admin?.selectedUser);
  const likedQuotesRedux = useSelector(state => state?.admin?.selectedUserLikedQuotes);
  useEffect(()=> {
    dispatch(getLikedQuotesOfUser(selectedUserRedux?.id))
  } ,[])
 
 
  useEffect(() => {
    setLikedQuotes(likedQuotesRedux)
  }, [likedQuotesRedux])
 

  return (
    <div className="admin-user-liked">
      <section
        className={
          activeTab === 'tab1'
            ? 'user-liked-quotes show'
            : 'user-liked-quotes hide'
        }
      >
        <p className="user-liked-quotes-count">{likedQuotes?.count} liked quotes</p>
        <div className="admin-user-liked-quotes">
          {likedQuotes?.results?.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminUserLiked;
