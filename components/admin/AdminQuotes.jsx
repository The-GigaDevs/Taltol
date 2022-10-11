import PickedSelect from '../PickedSelect';
import QuoteStatic from '../QuoteStatic';
import TopicBrowse from '../TopicBrowse';
import SortSelect from '../SortSelect';
import AdminPagination from './AdminPagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoreQuotes, fetchQuotes } from '../../slices/quotes.slice';
import QuoteCards from '../QuoteCards';

const AdminQuotes = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(10);
  const [quotes, setQuotes] = useState([]);

  const dispatch = useDispatch();
  const quotesReduxState = useSelector(state => state.quotes?.quotes);

  //useffect to call fecQuotes
  
  useEffect(() => {
    if(quotesReduxState?.length === 0 || quotesReduxState?.results?.length === 0) {
      dispatch(fetchQuotes());
    }
  }, [dispatch, quotesReduxState]);


  
  useEffect(() => {
    setQuotes(quotesReduxState.results);
  }, [quotesReduxState, quotes]);


  function fetchNext(number) {
    if(number) {
      dispatch(addMoreQuotes({page: number, pageSize: pageSize}));
    } else {
      setPage(page + 1);
      dispatch(addMoreQuotes({page: page + 1, pageSize: pageSize}));
    }
  }

  return (
    <div className="admin-quotes">
      <div className="container">
        <div className="admin-quotes-content">
          <section className="admin-quotes-left-content">
            <p className="admin-quotes-left-text">857 results</p>
            <div className="admin-quotes-left-content-grid">
              <PickedSelect />
              <SortSelect />
            </div>
            <div className="admin-quotes-cards">
              <QuoteCards fetchNext={fetchNext} quotes={quotes} category={false} next ={quotesReduxState?.next} loadMore={false} />
            </div>
            <AdminPagination next={quotes?.next} fetchNext={fetchNext} />
          </section>
          <section className="admin-quotes-right-content">
            <TopicBrowse />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminQuotes;
